import { Beneficiary } from './beneficiary';
import { User } from './user';
import { Card } from './card';
import { Transaction } from './transaction';

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

export enum TypeA {
  CurrentAccount = 'currentAccount',
  SavingAccount = 'savingAccount'
}

export enum Bank {
  CIH = 'cih',
  BMCE = 'bmce',
  AttijariWafaBank = 'AttijariWafaBank',
  MaghrebBank = 'MaghrebBank'
}
