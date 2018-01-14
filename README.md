# Starling Helper

<!--@shields.plastic('npm')-->
[![npm version](https://img.shields.io/npm/v/starling_helper.svg?style=plastic)](https://www.npmjs.com/package/starling_helper)
<!--/@-->

# Will be updated around the 20th Jan 2018

## Description

Starling Helper is a library to help you connect to your Starling account, it assumes you are using a personal access key and no oAuth is implemented.

Currently all get requests are available and I am working on the POST and DELETE requests.

Please see the below examples on how to get started.

<!--@installation()-->
## Installation

```sh
npm install --save starling_helper
```
<!--/@-->

## Usage 

You will need to include the package in your app, and initialize it your personal access token

```javascript
const helper = require('starling_helper');
helper.apiKey = 'mylongpersonalaccesstoken'
```

You are now ready to use the library.

Some end points require variables, a full list is available in the variables table below.
You set a variable into an object and pass this to the library like below

```javascript
// /api/v1/contacts/{id}

const params = {};
params.contactID = 'mycontactUUID'
helper.params = params;

helper.getData('getContactByID')
.then(contactInfo => {
    //...
})
.catch(contactInfoError => {
    //...
});
```

### Available End Points and Calls

The following are currently Available

* Accounts
    * getAccounts
    * getAccountBalances
* Addresses
    * getAddresses
* Contacts
    * getContacts
    * getContactByID      ```contactID```
    * getContactAccounts ```contactID```
    * getContactAccountByID ```contactID``` ```contactAccountID```
* Customers
    * getCustomers
* Direct Debit Mandates
    * getDirectDebitMandates
    * getDirectDebitMandatesByUID ```mandateUID```
* Who Am I?
    * getMe
* Cards
    * getCards
    
    
## Tests and Coverage

```
npm test
```


    
    




<!--@license()-->
## License

MIT © Dave Grix
<!--/@-->
