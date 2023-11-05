import { ILanzamiento, IRegistro, IUser } from "./model-interface";

export class User implements IUser {
  id: number | null = null;
  username: string = '';
  password: string = '';
}

export class Registro implements IRegistro {
  id: number | null = null;
  name: string = '';
  last_name: string = '';
  username: string = '';
  gender: string = '';
  email: string = '';
  age: number = 0;
  password: string = '';
}

export class Lanzamiento implements ILanzamiento {
  capsules: string[] = [];
  cores: any[] = [];
  photo: string = '';
  success: boolean = true;
  rocket: string = '';
  failures: string[] = [];
  details: string = '';
  crew: string[] = [];
  ships: string[] = [];
  payloads: string[] = [];
  launchpad: string = '';
  flight_number: number = 0;
  name: string = '';
  date_utc: string = '';

  constructor(lanzamiento?: any) {
    this.capsules = lanzamiento == undefined ? null : lanzamiento.capsules;
    this.cores = lanzamiento == undefined ? null : lanzamiento.cores;
    this.photo = lanzamiento == undefined ? null : lanzamiento.links.flickr.original;
    this.success= lanzamiento == undefined ? null : lanzamiento.succes;
    this.rocket= lanzamiento == undefined ? null : lanzamiento.rocket;
    this.failures = lanzamiento == undefined ? null : lanzamiento.failures;
    this.details = lanzamiento == undefined ? null : lanzamiento.details;
    this.crew = lanzamiento == undefined ? null : lanzamiento.crew;
    this.ships = lanzamiento == undefined ? null : lanzamiento.ships;
    this.payloads = lanzamiento == undefined ? null : lanzamiento.payloads;
    this.launchpad = lanzamiento == undefined ? null : lanzamiento.launchpad;
    this.flight_number = lanzamiento == undefined ? null : lanzamiento.flight_number;
    this.name = lanzamiento == undefined ? null : lanzamiento.name;
    this.date_utc = lanzamiento == undefined ? null : lanzamiento.date_utc;
  }
}