/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
* Sample transaction
* @param {test.WithdrawFund} withdraw
* @transaction
*/

function withdraw(withdraw){

   if (withdraw.from.balance < withdraw.amount) {
   throw new Error ("Insufficient funds");
   }
   withdraw.from.balance-=withdraw.amount
  
   return getAssetRegistry("test.Account")
   .then(function (assetRegistry){
   return assetRegistry.update(withdraw.from);
   });
  
}

/**
* Sample transaction
* @param {test.Deposit} deposit
* @transaction
*/

function deposit(deposit){
  deposit.to.balance+=deposit.amount;
  
  return getAssetRegistry("test.Account")
  .then(function (assetRegistry){
  return assetRegistry.update(deposit.to);
  });
}

/**
* Sample transaction
* @param {test.SpendFund} spendfund
* @transaction
*/


function spendfund(spendfund) {
   
    if (spendfund.from.balance < spendfund.amount) {
    throw new Error ("Insufficient funds");
    }
    
    spendfund.from.balance -= spendfund.amount;
    spendfund.to.balance += spendfund.amount;
    
    return getAssetRegistry('test.Account')
    .then (function (assetRegistry) {
    return assetRegistry.update(spendfund.from);
    })
    .then (function () {
    return getAssetRegistry('test.Account');
    })
    .then(function (assetRegistry) {
    return assetRegistry.update(spendfund.to);
    });
    
    }

/**
* Sample transaction
* @param {test.FundTransfer} accountTransfer
* @transaction
*/


function accountTransfer(accountTransfer) {
   
    if (accountTransfer.from.balance < accountTransfer.amount) {
    throw new Error ("Insufficient funds");
    }
    
    accountTransfer.from.balance -= accountTransfer.amount;
    accountTransfer.to.balance += accountTransfer.amount;
    
    return getAssetRegistry('test.Account')
    .then (function (assetRegistry) {
    return assetRegistry.update(accountTransfer.from);
    })
    .then (function () {
    return getAssetRegistry('test.Account');
    })
    .then(function (assetRegistry) {
    return assetRegistry.update(accountTransfer.to);
    });
    
    }
