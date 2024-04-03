import { Geo } from "./geo";
export interface Address {
    street:String;
    suite:String;
    city:String;
    zipcode:String;
    geo:Geo;
}
