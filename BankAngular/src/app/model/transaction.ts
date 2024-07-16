import {Account} from "./account";
import {Beneficiary} from "./beneficiary";

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


enum TypeTransaction{
  internal,
  external,
}


enum TypeC{
  credit,
  debit

}
