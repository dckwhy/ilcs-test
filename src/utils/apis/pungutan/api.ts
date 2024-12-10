import { Response, Request } from "@/utils/types/api";
import { IPungutan } from "./type";
import axiosWithConfig from "../axios-with-config";

export const getDataPungutan = async (params?: Request) => {
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

    const url = query ? `/dataPungutan?${query}` : "";

    const response = await axiosWithConfig.get(url);

    return response.data as Response<IPungutan>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
