export class Property {
  public done: boolean = false;
  constructor(public description: string, address: string, amenities: string, public priority: number) {
  }
}
