import { StatusCode } from "../constants/status-code";
import { ServiceResponse } from "../types/service-response";

export const ServiceResponseUtil = {
  success<T>(
    data: T,
    message = "Success",
    statusCode = StatusCode.OK
  ): ServiceResponse<T> {
    return { success: true, data, message, statusCode };
  },

  failure<T>(
    error: string,
    statusCode = StatusCode.INTERNAL_SERVER_ERROR,
    message = "Failure"
  ): ServiceResponse<T> {
    return { success: false, error, message, statusCode };
  },
};
