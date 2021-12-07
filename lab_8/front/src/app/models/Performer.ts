export class Performer {
  id: number;
  number: number;
  experience: number;
  workers: number

  constructor(id: number, number: number, experience: number, workers: number) {
    this.id = id;
    this.number = number;
    this.experience = experience;
    this.workers = workers;
  }
}
