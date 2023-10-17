export interface Pista {
    details: string;
    full_name: string;
    id: string;
    images: [];
    latitude: number;
    launch_attempts?: number;
    launch_successes?: number;
    launches: []
    locality: string;
    longitude: number; 
    name: string;  
    region: string;
    rockets?: [];
    status: string; 
    timezone?: string;
    type?: string;
    landing_attempts?: number;
    landing_successes?: number;
}