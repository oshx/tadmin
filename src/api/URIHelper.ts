export enum HTTPMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete"
}

export default class URIHelper {
  constructor(
    private uri: string,
    private method: HTTPMethod = HTTPMethod.GET
  ) {}
}
