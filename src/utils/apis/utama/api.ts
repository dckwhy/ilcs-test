import { Response, Request } from "@/utils/types/api";
import { IDataUtama } from "./type";
import axiosWithConfig from "../axios-with-config";

export const getDataUtama = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];
      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }
      query = queryParams.join("&");
    }

    const url = query ? `/dataUtama?${query}` : "";

    const response = await axiosWithConfig.get(url);

    return response.data as Response<IDataUtama>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
