export interface IUser {
    id: number | null;
    username: string;
    password: string;
}

export interface IRegistro {
    id: number | null;
    name: string;
    last_name: string;
    username: string;
    gender: string;
    email: string;
    age: number;
    password: string;
}

export interface ILanzamiento {
    capsules: string[];
    cores: any[];
    photo: string;
    success: boolean;
    rocket: string;
    failures: string[];
    details: string;
    crew: string[];
    ships: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
}

