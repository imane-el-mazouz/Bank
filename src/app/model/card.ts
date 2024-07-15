export class Card{
  idC!: number;
  expirationDate!: Date;
  typeCard! : TypeC ;
  status!: Status ;
  blockingReason!: Reason;
  accountId!: number;


}
enum TypeC{
  credit,
  debit,
}

enum Status{
  activated,
  desactivated,
  bloqued

}

enum Reason{
  loss,
  theft,
  none,
}
