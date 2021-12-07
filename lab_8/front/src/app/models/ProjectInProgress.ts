export class CargoOnStation {
  id: number;
  station: string;
  cargo	: string;

  constructor(id: number, station: string, cargo: string) {
    this.id = id;
    this.station = station;
    this.cargo = cargo;
  }
}
