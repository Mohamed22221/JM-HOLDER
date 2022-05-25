import axios from "axios"

//apply base url for axios
const API_URL = 'https://www.jmgroupkw.com/jm/api/store/';

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function postFromData(url, data, config = {}) {
  const formData = new FormData()
    for (let item in data) {
      formData.append(item, data[item])
    }
  return axiosApi
    .post(url,  formData , { ...config })
}

// export async function postFromData(url, data) {
//   const formData = new FormData()
//   for (let item in data) {
//     formData.append(item, data[item])
//     console.log('item', item);
//   }
//   // console.log('data', data);
//   // console.log('formData', formData);
//   axiosApi({
//     url: url,
//     method: 'post',
//     data: formData,
//   })  
// }


