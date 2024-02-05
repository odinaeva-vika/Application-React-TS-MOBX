import { AxiosResponse } from "axios";
import { currentsAPI } from "../../services/apiConfig";

export const fetchDataNews = async <T>(
  endpoint: string,
  params?: Record<string, any>
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await currentsAPI.get(endpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as T;
  }
};
