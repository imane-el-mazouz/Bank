import {Account} from "./account";
import {Beneficiary} from "./beneficiary";
import {TypeC} from "../Enum/type-c";
import {TypeTransaction} from "../Enum/type-transaction";

export class Transaction{
  idT !: number;
  date !: Date ;
  amount !: number;
  typeT !: TypeTransaction;
  typeCard !: TypeC;
  description !: string;
  fromAccount !: Account;
  toAccount !: Account;
  beneficiary !: Beneficiary;

}






