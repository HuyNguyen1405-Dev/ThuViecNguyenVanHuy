import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";
import { setData } from "../redux/reducers/userSlice";

export const useApiCaller = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const accessToken = cookies.token;

  const apiCaller = async (configAPI, getName) => {
    const { url, method, data, params, isShowMessage = true } = configAPI;

    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    };

    const requestOptions = {
      method,
      url,
      validateStatus: () => true,
      data,
      headers,
      params,
    };

    try {
      const response = await axios.request(requestOptions);

      if (getName !== null) {
        dispatch(setData({ key: getName, value: response.data }));
      }
      return response.data;
    } catch (error) {
      // Handle the error
      console.error(error);
      throw error;
    }
  };

  return apiCaller;
};