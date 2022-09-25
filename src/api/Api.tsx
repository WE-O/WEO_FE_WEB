//! 카카오나 네이버쪽으로 넘길 때는 axios.defaults.withCredentials = true; 요거 빼줘야한다.


// import axios from 'axios';
// axios.defaults.baseURL = 'http://101.101.217.55:8080';
// axios.defaults.withCredentials = true;

// interface API_Fommat {
//     method: any,
//     url: any,
//     request_body: any,
//     request_header: any
// }

// export const callAPI = async ({ method, url, request_body, request_header }: API_Fommat) => {
//     const response = await axios({
//         url: url,
//         method: method,
//         data: request_body,
//         config: {
//             headers: request_header
//         }
//     })

//     return response;
// }

