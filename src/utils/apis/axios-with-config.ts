import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "https://api-hub.ilcs.co.id/test/v2";

  return axiosConfig;
});

export default axiosWithConfig;
