import axios, { AxiosRequestConfig, Method } from "axios";
import { OMDB_API_KEY } from "utils/constants";

interface RequestProp extends AxiosRequestConfig {
  method: Method;
  url: string;
  data?: Record<string, any>;
  headers?: Record<string, any>;
  params?: Record<string, any>;
}

const request = async ({ method, url, data, headers, params }: RequestProp) => {
  try {
    const defaultParams = { apikey: OMDB_API_KEY };
    const response = await axios({
      method,
      url,
      data,
      headers,
      params: {
        ...defaultParams,
        ...params
      }
    });

    if (response.data.data || response.data.data !== undefined)
      return { ...response.data, status: response.status };

    return response;
  } catch (error) {
    console.error({ error });
  }
};

export default request;
