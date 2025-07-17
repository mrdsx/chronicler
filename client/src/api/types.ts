export type Path = `/${string}`;

export interface Endpoints {
  [key: string]: Path | Endpoints;
}

export interface ErrorResponse {
  detail: string;
}
