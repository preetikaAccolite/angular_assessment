import { Address } from "./address";
import { Company } from "./company";
import { Geo } from "./geo";
export interface Userinfo {
    id:number;
  name:string;
  username:String;
  email:String;
  address:Address;
  phone:String;
  website:String;
  company:Company;

}
