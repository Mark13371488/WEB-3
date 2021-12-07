export class Project {
  id: number;
  name: string;
  description: string;
  customer: string;
  skill: number;

  constructor(id: number, name: string, description: string, customer: string, skill: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.customer = customer;
    this.skill = skill;
  }
}
