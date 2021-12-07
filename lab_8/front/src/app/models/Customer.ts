export class Customer {
  id: number;
  name: string;
  budget: number

  constructor(id: number, name: string, budget: number) {
    this.id = id;
    this.name = name;
    this.budget = budget;
  }
}
