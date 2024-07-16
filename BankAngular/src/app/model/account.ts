import {Beneficiary} from "./beneficiary";
import {User} from "./user";
import {Card} from "./card";
import {Transaction} from "./transaction";

export class Account{
  idA !: number;
  typeA !: TypeA;
  sold !: number;
  rib !: number;
  date !: Date;
  accountClosed !: boolean;
  closeureReason !: String
  bank !: Bank;
  user!: User;
  beneficiaries !:Beneficiary [];
  cards !: Card[];
  outgoingTransactions !: Transaction[];
  incomingTransactions !: Transaction[];
}


enum TypeA{
  currentAccount,
  savingAccount,

}


enum Bank{
  cih,
  bmce,
  AttijariWafaBank,
  MaghrebBank

}
