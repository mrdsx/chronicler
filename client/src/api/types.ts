// force-semicolon: ignore-all
export interface BaseAPIResponse {
  detail: string;
}

export type RestAPIMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type Path = `/${string}`;

export interface Endpoints {
  [key: string]: Path | Endpoints;
}

export interface ErrorResponse extends BaseAPIResponse {}

export class APIError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}
