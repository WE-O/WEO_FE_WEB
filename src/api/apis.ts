import axios from 'axios';
import { url } from 'inspector';
import router, { Router } from 'next/router';


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
          params: param.data
        })
        .then((res) => {
          if (res && Number(res.status) >= 200 && Number(res.status) < 300) {
            return res.data;
          }
        })
        .catch((error) => {
          
        });
    case 'POST':
    case 'PUT':
      return axios
        .put(param.url, {
          params: param.data,
        })
        .then((res) => {
          if (res && Number(res.status) >= 200 && Number(res.status) < 300) {
            return res.data;
          }
        })
        .catch((error) => {
        });
    case 'DELETE':
      break;
  }
};
