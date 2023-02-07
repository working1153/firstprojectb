import { AllData } from '../interfaces/AllData'
//classes
export class Loss implements AllData {
  constructor(
    readonly date: string,
    private details: string,
    public amount: number,
  ) {}


  getDate(): string {
    return this.date;
  }
  getDetails(): string {
      return this.details;
  }
  getAmount(): number {
      return this.amount;
  }
}