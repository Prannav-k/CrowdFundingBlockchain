/**
 * Write your model definitions here
 */

namespace test

asset Account identified by accountId {
o String accountId
--> Customer owner
o Double balance
}

participant Customer identified by customerId {
o String customerId
o String firstName
o String lastName
o CustomerType type
}

enum CustomerType{//modes permission for transferring is in .acl file
o fundraiser
o charity 
o supplier
}

transaction FundTransfer {
--> Account from
--> Account to
o Double amount
}

transaction Deposit{
-->Account account
o Double amount
}

transaction SpendFund{
  -->Account from
  o String reason
}

transaction WithdrawFund{
  -->Account from
  o String reason
}


