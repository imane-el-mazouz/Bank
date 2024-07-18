import {TypeC} from "../Enum/type-c";
import {Status} from "../Enum/status";
import {Reason} from "../Enum/reason";

export class Card{
  idC!: number;
  expirationDate!: Date;
  typeCard! : TypeC ;
  status!: Status ;
  blockingReason!: Reason;
  accountId!: number;


}





