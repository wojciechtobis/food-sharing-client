export class OrderDto {
  constructor(
    public id: string,
    public ownerId: string,
    public offerId: string[]
  ) {
  }
}
