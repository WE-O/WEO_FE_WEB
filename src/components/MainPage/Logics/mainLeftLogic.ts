import { call } from "../../../api/apis";
import sunnyOn from "../../../../../utils/images/sunny_on.png";

const RE: number = 6371.00877; // 지구 반경(km)
const GRID: number = 5.0; // 격자 간격(km)
const SLAT1: number = 30.0; // 투영 위도1(degree)
const SLAT2: number = 60.0; // 투영 위도2(degree)
const OLON: number = 126.0; // 기준점 경도(degree)
const OLAT: number = 38.0; // 기준점 위도(degree)
const XO: number = 43; // 기준점 X좌표(GRID)
const YO: number = 136; // 기1준점 Y좌표(GRID)

const skyEnum: { [key: string]: string } = {
  1: "맑음",
  3: "구름많음",
  4: "흐림",
};
const ptyEnum: { [key: string]: string } = {
  0: "없음",
  1: "비",
  2: "비/눈",
  3: "눈",
  4: "소나기",
};

interface convType {
  nx: number;
  ny: number;
}

interface weatherType {
  mTmp: string;
  mWeather: string;
  aTmp: string;
  aWeather: string;
}

interface getWeatherParamType {
  base_date: string; //년월일 8자리
  nx: number; // x좌표값
  ny: number; // y좌표값
}
interface getWeatherResItemType {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
interface getWeatherResType {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body?: {
      dataType: string;
      pageNo: number;
      numOfRows: number;
      totalCount: number;
      items: {
        item: getWeatherResItemType[];
      };
    };
  };
}

interface convertWeatherDataType {
  SKY: string | null;
  PTY: string | null;
  TMP: string;
}

export const useGetWeather = async (lat: number, lng: number) => {
  if (lat !== -1 && lng !== -1) {
    const coordinate = xy_conv(lat, lng);
    const curDate: Date = new Date();
    const hours: number = curDate.getHours();
    let base_date = "";

    if (hours > 2) {
      base_date = `${curDate.getFullYear()}${String(
        curDate.getMonth() + 1
      ).padStart(2, "0")}${String(curDate.getDate()).padStart(2, "0")}`;
    } else {
      const preDate: Date = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate() - 1
      );
      base_date = `${preDate.getFullYear()}${String(
        preDate.getMonth() + 1
      ).padStart(2, "0")}${String(preDate.getDate()).padStart(2, "0")}`;
    }

    const weatherData = await getWeatherApi({
      base_date,
      ...coordinate,
    });

    return weatherData;
  }
};

const xy_conv = (lat: number, lng: number): convType => {
  let DEGRAD: number = Math.PI / 180.0;

  let re: number = RE / GRID;
  let slat1: number = SLAT1 * DEGRAD;
  let slat2: number = SLAT2 * DEGRAD;
  let olon: number = OLON * DEGRAD;
  let olat: number = OLAT * DEGRAD;

  let sn: number =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);

  let sf: number = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;

  let ro: number = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);

  let rs: convType = { nx: 0, ny: 0 };
  var ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);
  var theta = lng * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;
  rs["nx"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  rs["ny"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

  return rs;
};

const getWeatherApi = async (
  parma: getWeatherParamType
): Promise<weatherType> => {
  let result: weatherType = {
    mTmp: "",
    mWeather: "",
    aTmp: "",
    aWeather: "",
  };

  let res: getWeatherResType = await call("GET", {
    url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst",
    data: {
      serviceKey: encodeURI(process.env.NEXT_PUBLIC_WEATHER_SERVICE_KEY),
      dataType: "JSON", //요청자료형식(XML/JSON) Default: XML
      base_time: "0200",
      pageNo: 1,
      numOfRows: 1000,
      ...parma,
    },
  });

  if (res.response) {
    if (res.response.header.resultCode === "00") {
      const allData = res.response.body?.items.item;
      if (allData && allData.length > 0) {
        const mData = allData.filter(
          (item) =>
            item.fcstDate === parma.base_date && item.fcstTime === "0900"
        );
        const aData = allData.filter(
          (item) =>
            (item.fcstDate === parma.base_date && item.fcstTime) === "1500"
        );

        /*
          SKY 하늘상태 => 맑음(1), 구름많음(3), 흐림(4)
          PTY 강수형태 => 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
          TMN 일 최저기온	℃	10
          TMX 일 최고기온	℃	10
        */

        const mWeatherObj: convertWeatherDataType = convertWeatherData(mData);
        const aWeatherObj: convertWeatherDataType = convertWeatherData(aData);

        if (mWeatherObj.PTY && mWeatherObj.PTY !== "0") {
          result.mWeather = ptyEnum[mWeatherObj.PTY];
        } else if (mWeatherObj.SKY) {
          result.mWeather = skyEnum[mWeatherObj.SKY];
        }

        if (aWeatherObj.PTY && aWeatherObj.PTY !== "0") {
          result.aWeather = ptyEnum[aWeatherObj.PTY];
        } else if (aWeatherObj.SKY) {
          result.aWeather = skyEnum[aWeatherObj.SKY];
        }

        result.mTmp = mWeatherObj.TMP;
        result.aTmp = aWeatherObj.TMP;
      }
    }
  }

  return result;
};

const convertWeatherData = (
  lists: getWeatherResItemType[]
): convertWeatherDataType => {
  return {
    SKY:
      lists.filter((item) => item.category === "SKY").length > 0
        ? lists.filter((item) => item.category === "SKY")[0].fcstValue
        : null,
    PTY:
      lists.filter((item) => item.category === "PTY").length > 0
        ? lists.filter((item) => item.category === "PTY")[0].fcstValue
        : null,
    TMP:
      lists.filter((item) => item.category === "TMP").length > 0
        ? lists.filter((item) => item.category === "TMP")[0].fcstValue
        : "-",
  };
};
