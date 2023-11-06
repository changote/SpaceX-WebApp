import { ICore, ILanzamiento, IRegistro, IUser } from "./model-interface";

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
  failures: any[] = [];
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
    this.success= lanzamiento == undefined ? null : lanzamiento.success;
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

export class Core implements ICore{
  reuse_count: number = 0;
  rtls_attempts: number = 0;
  rtls_landings: number = 0;
  asds_attempts: number = 0;
  asds_landings: number = 0;
  last_update: string = '';
  serial: string = '';
  status: string = '';
  porcentaje: number = 0;
  
  constructor( core?: any) {
    this.reuse_count = core == undefined ? null : core.reuse_count;
    this.rtls_attempts = core == undefined ? null : core.rtls_attempts;
    this.rtls_landings = core == undefined ? null : core.rtls_landings;
    this.asds_attempts= core == undefined ? null : core.asds_attempts;
    this.asds_landings= core == undefined ? null : core.asds_landings;
    this.last_update = core == undefined ? null : core.last_update;
    this.serial = core == undefined ? null : core.serial;
    this.status = core == undefined ? null : core.status;
    this.porcentaje = core == undefined ? null : core.porcentaje;
  }
}