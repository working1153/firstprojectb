//classes
export class Loss {
    constructor(date, details, amount) {
        this.date = date;
        this.details = details;
        this.amount = amount;
    }
    getDate() {
        return this.date;
    }
    getDetails() {
        return this.details;
    }
    getAmount() {
        return this.amount;
    }
}
