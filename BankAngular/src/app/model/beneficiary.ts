import {Transaction} from "./transaction";
import {Bank} from "../Enum/bank";

export class Beneficiary{
     idB !: number;
     name !: string;
     rib !: number;
     bank !: Bank;
     sold !: number;
     account_id !: number;
     transactions !: Transaction[];

}

