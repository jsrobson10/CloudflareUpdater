
//import fs from "fs";
import environment from "./environment";
import { UpdateRecords } from "./UpdateRecords";
import fs from "fs";

let IPv4 = "";
let IPv6 = "";

export const CheckRecords = async () =>
{
    if(environment.updateIPv4 && environment.getIPv4) {
        let ip = await environment.getIPv4();
        if(ip !== IPv4) {
            UpdateRecords(ip, "A");
            IPv4 = ip;
        }
    }

    if(environment.updateIPv6 && environment.getIPv6) {
        let ip = await environment.getIPv6();
        if(ip !== IPv6) {
            UpdateRecords(ip, "AAAA");
            IPv6 = ip;
        }
    }
}
