import { Beneficiary } from './beneficiary';
import { User } from './user';
import { Card } from './card';
import { Transaction } from './transaction';
import {TypeA} from "../Enum/TypeA";
import {Bank} from "../Enum/bank";

export class Account {
  idA!: number;
  typeA!: TypeA;
  sold!: number;
  rib!: number;
  date!: Date;
  accountClosed!: boolean;
  closeureReason!: string;
  bank!: Bank;
  user!: User;
  beneficiaries!: Beneficiary[];
  cards!: Card[];
  outgoingTransactions!: Transaction[];
  incomingTransactions!: Transaction[];
}




