interface PayloadThunk {
  data?: Record<string, any>;
  error?: Record<string, any> | string;
  message?: string;
}

export interface ActionPayload {
  type: string;
  payload: PayloadThunk;
}
