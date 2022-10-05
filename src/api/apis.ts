import axios from "axios";
import { url } from "inspector";

interface Param {
  url: string;
  data: { [key: string]: any };
}

export const call = (type: string, param: Param) => {
  switch (type) {
    case "GET":
      return axios
        .get(param.url, {
          params: param.data,
        })
        .then((res) => {
          if (res && Number(res.status) >= 200 && Number(res.status) < 300) {
            return res.data;
          }
          throw new Error();
        })
        .catch(() => {
          // 어떨게 처리..?
        });
    case "POST":
    case "PUT":
    case "DELETE":
      break;
  }
};
