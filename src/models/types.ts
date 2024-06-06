export interface Geo {
    lat: string;
    lng: string;
}
  
export interface Address {
    geo: Geo;
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
}

export interface Company {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}
  
export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: number;
    website?: string;
    address: Address;
    company: Company;
}