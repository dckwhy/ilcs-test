export interface Request {
  query?: string;
}

export type Response<T = any> = {
  code: string;
  message: string;
  status: boolean;
  data: T;
};
