import { PayloadAction } from "@reduxjs/toolkit";

interface PayloadThunk<T = any> {
  data?: T;
  error?: Record<string, any> | string;
  message?: string;
}

export interface ActionPayload<T = any>
  extends PayloadAction<PayloadThunk<T>> {}
