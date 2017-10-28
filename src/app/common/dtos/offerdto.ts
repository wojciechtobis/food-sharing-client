export class OfferDto {
  constructor(
    public address: string,
    public creationDate: string,
    public isForFoundationOnly: boolean,
    public offerId: string,
    public ownerId: string,
    public productIds: string[],
    public recieveTimes: string[]) {
  }
}
