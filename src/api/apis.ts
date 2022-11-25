import axios from 'axios';
import { url } from 'inspector';
import router, { Router } from 'next/router';
import ErrorPage from '../pages/_error';

interface Param {
  url: string;
  data: { [key: string]: any };
}

export const call = (type: string, param: Param) => {

  // process.env.NEXT_PUBLIC_API_DOMAIN
  switch (type) {
    case 'GET':
      return axios
        .get(param.url, {
          params: param.data,
          validateStatus: (status) => {
            // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
            return status < 500;
          }
        })
        .then((res) => {
          if (res && Number(res.status) >= 200 && Number(res.status) < 300) {
            return res.data;
          }
        })
        .catch((error) => {
          // 메인으로 보내고 토스트 메세지 보내주는 형식으로 해야할 듯.
          // 오류났을 때 마이페이지가 보여지면 안됨.
          console.log(error.message);
          router.push("/");
        });
    case 'POST':
    case 'PUT':
      return axios
        .put(param.url, {
          params: param.data,
          validateStatus: (status) => {
            // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
            return status < 500;
          }
        })
        .then((res) => {
          if (res && Number(res.status) >= 200 && Number(res.status) < 300) {
            return res.data;
          }
        })
        .catch((error) => {
          // 메인으로 보내고 토스트 메세지 보내주는 형식으로 해야할 듯.
          // 오류났을 때 마이페이지가 보여지면 안됨.
          console.log(error.message);
          router.push("/");
        });
    case 'DELETE':
      break;
  }
};
