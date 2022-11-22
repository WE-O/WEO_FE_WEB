import axios from 'axios';
import { url } from 'inspector';

interface Param {
  url: string;
  data: { [key: string]: any };
}

export const call = (type: string, param: Param) => {
  debugger
  // process.env.NEXT_PUBLIC_API_DOMAIN
  switch (type) {
    case 'GET':
      debugger
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
          debugger
        });
    case 'POST':
    case 'PUT':
    case 'DELETE':
      break;
  }
};
