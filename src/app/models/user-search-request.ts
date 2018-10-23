export class UserSearchRequest {
  constructor(
    public location: string,
    public sort: string,
    public order: string,
    public page: number,
    public pageSize: number
  ) { }
}
