import { Exception } from "./../repositories/ExceptionRepositorie";

export class DataException implements Exception {
  name: string;
  message: string;
  cause?: any;

  constructor(message: string, cause?: any) {
    this.name = "Data";
    this.message = message;
    this.cause = cause;
  }
}
