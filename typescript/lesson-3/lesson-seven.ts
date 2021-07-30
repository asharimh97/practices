import { AxiosResponse } from 'axios';

interface BasicResponse<T = any> {
  message: string;
  data?: T;
}

export interface Response<T = any> extends BasicResponse<T> {
  error?: string;

  error_type?: never;
  errors?: never;
}

interface ErrorsFormat {
  key: string;
  error: string;
}

const errorTypes = [
  'OK',
  'INVALID_PARAMETER',
  'UNAUTHORIZED',
  'NO_TRADING_PERMISSION',
  'NO_SUBSCRIPTION',
  'NOT_FOUND',
  'DUPLICATE_CALL',
  'SERVICE_BUSY',
  'SYSTEM_ERROR',
  'VENDOR_ERROR',
  'BAD_GATEWAY',
  'MAINTENANCE',
  'GATEWAY_TIMEOUT',
] as const;

type ErrorTypes = typeof errorTypes[number];
export interface ExodusResponse<T = any> extends BasicResponse<T>  {
  message: string;
  data?: T;
  error_type?: ErrorTypes;
  errors?: Array<ErrorsFormat>;

  error?: never;
}

type ResponseFormats<T = any> = Response<T> | ExodusResponse<T>;

export type APIResponse<T = any> = AxiosResponse<ResponseFormats<T>>;

export type APIPromiseResponse<T = any> = Promise<APIResponse<T>>;

type Sembarang = {
  message: string;
  data?: any;
} & (['error'] extends [unknown] ? {} : {
  error?: any;
})