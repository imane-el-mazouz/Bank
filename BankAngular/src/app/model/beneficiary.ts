import {Transaction} from "./transaction";

export class Beneficiary{
     idB !: number;
     name !: string;
     rib !: number;
     bank !: Bank;
     sold !: number;
     account_id !: number;
     transactions !: Transaction[];

}

enum Bank{
  cih,
  bmce,
  AttijariWafaBank,
  MaghrebBank

}
