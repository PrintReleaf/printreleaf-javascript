# printreleaf-javascript

Javascript toolkit for the (PrintReleaf API)[https://printreleaf.com/docs/api].

## Installation

Add the printreleaf-javascript npm package to your package.json file.
```bash
npm install printreleaf-javascript -save
```

## API and Object Reference

Complete API spec and object reference can be found here: [printreleaf.com/docs/api](https://printreleaf.com/docs/api).

## Configuration

```javascript
const printReleaf = require('printreleaf-javascript');
const apiKey = "<your PrintReleaf API key>";
const pr = new printReleaf(apiKey);
```

# Usage

## Accounts

### My Account

```javascript
const account = pr.account.mine();   // an account object
account.id;                          // "a2c031fa-6599-4939-8bc6-8128881953c4"
account.name;                        // "My Account"
account.role;                        // "customer"
account.created_at;                  // "2014-03-06T23:06:23+00:00"
account.parent_id;                   // nil
account.status;                      // "active"
account.activated_at;                // "2014-03-06T23:06:23+00:00"
account.deactivated_at;              // nil
account.accounts_count;              // 2
account.users_count;                 // 2
account.mtd_pages;                   // 1234
account.qtd_pages;                   // 12345
account.ytd_pages;                   // 123456
account.lifetime_pages;              // 1234567
account.mtd_trees;                   // 0.15
account.qtd_trees;                   // 1.48
account.ytd_trees;                   // 14.82
account.lifetime_trees;              // 148.1
```
### Listing Accounts

```javascript
const accounts = pr.accounts.list(); // returns an array of account objects 
```

### Retrieving an Account

```javascript
const account = pr.accounts.find("a2c031fa-6599-4939-8bc6-8128881953c4"); // account object with given id
```

### Creating an Account

```javascript
const account = pr.accounts.create({name: "Account A"}); // new account object with name "Account A" 
```

### Updating an Account

```javascript
const updatedAccount = pr.accounts.update("a2c031fa-6599-4939-8bc6-8128881953c4", {name: "Account B"}) // updated account object with
```

### Activating an Account

```javascript
const activatedAccount = pr.accounts.activate("a2c031fa-6599-4939-8bc6-8128881953c4"); // account with status 'active'
```

### Deactivating an Account

```javascript
const deactivatedAccount = pr.accounts.deactivate("a2c031fa-6599-4939-8bc6-8128881953c4"); // account with status 'inactive'
```

## Certificates

### Listing Certificates

```javascript
const certificats = pr.certificates.list(); // returns an array of certificate objects
```

### Retrieving a Certificate

```javascript
const certificate = pr.certificates.find("ae630937-e15b-4da5-98de-bb68eefe2a12"); // returns a certificate with given id

certificate.id;         // "ae630937-e15b-4da5-98de-bb68eefe2a12"
certificate.account_id; // "971d10ac-a912-42c0-aa41-f55adc7b6755"
certificate.date;       // "2017-02-28T23:59:59Z"
certificate.pages;      // 2469134
certificate.trees;      // 296.31
certificate.project_id; // "5d3b468f-c0a3-4e7c-bed4-2dcce9d3f0f9"
certificate.project;    // #<PrintReleaf::Forestry::Project>
certificate.url;        // "https://printreleaf.com/certificates/ae630937-e15b-4da5-98de-bb68eefe2a12",
certificate.pdf_url;    // "https://printreleaf.com/certificates/ae630937-e15b-4da5-98de-bb68eefe2a12.pdf"
```

## Deposits

### Listing Deposits

```javascript
const deposits = pr.deposits.list(); // returns an array of deposit objects
```

### Retrieving a Deposit

```javascript
const deposit = pr.deposits.find("a86d591c-3c29-4bef-82c3-7a007fb6b19c"); // returns a deposit object with the given id

deposit.id;            // "a86d591c-3c29-4bef-82c3-7a007fb6b19c"
deposit.account_id;    // "971d10ac-a912-42c0-aa41-f55adc7b6755"
deposit.source_id;     // "44e182ed-cd50-4fa1-af90-e77dd6d6a78c"
deposit.source;        // #<PrintReleaf::Source>
deposit.date;          // "2016-07-05T12:29:12Z"
deposit.pages;         // 20000
deposit.width;         // 0.2127
deposit.height;        // 0.2762
deposit.density;       // 216.0
deposit.paper_type_id; // "a11c7abc-011e-462f-babb-3c6375fa6473
deposit.paper_type;    // #<PrintReleaf::Paper::Type>
```

### Creating a Deposit

```javascript
const deposit = pr.deposits.create({pages: 16_666}); // returns a newly created deposit object 
```

### Deleting a Deposit

```javascript
const deposit = pr.deposits.delete("a86d591c-3c29-4bef-82c3-7a007fb6b19c");
deposit.delete; // true
```

## Invitations

### Listing Invitations

```javascript
const invitations = pr.invitations.list(); // returns an array of invitation objects 
```

### Retrieving an Invitation

```javascript
const invitation = pr.invitations.find("26370b1e-15a5-4449-b3b1-622e99003d3f"); // returns an invitation object with given id

invitation.id;         // "26370b1e-15a5-4449-b3b1-622e99003d3f"
invitation.account_id; // "971d10ac-a912-42c0-aa41-f55adc7b6755"
invitation.email;      // "sally@example.com"
invitation.created_at; // "2016-03-07T00:04:09Z
```

### Creating an Invitation

```javascript
const invitation = pr.invitations.create({email: "person@example.com"}); // returns a newly created invitaiton object 
```

### Deleting an Invitation

```javascript
const invitation = pr.invitations.delete("26370b1e-15a5-4449-b3b1-622e99003d3f");
invitation.delete; // true
```

## Servers

### Listing Servers

```javascript
const servers = pr.servers.list(); // returns an array of server objects
```

### Retrieving a Server

```javascript
const server = pr.servers.find("eadabb78-b199-43cb-adbd-ab36ce5c5a10");

server.id;         // "eadabb78-b199-43cb-adbd-ab36ce5c5a10"
server.account_id; // "a2c031fa-6599-4939-8bc6-8128881953c4"
server.type;       // "fmaudit"
server.url;        // "https://myfmauditserver.com"
server.username;   // "MyFMAuditUsername"
server.created_at; // "2015-03-07T00:04:09Z"
```

### Creating a Server

```javascript
const server = pr.servers.create({
  type:     "printfleet",
  url:      "https://myprintfleetserver.com",
  username: "MyPrintFleetUsername",
  password: "MyPrintFleetPassword"
}); // returns newly created server object 
```

### Updating a Server

```javascript
const server = pr.servers.update("eadabb78-b199-43cb-adbd-ab36ce5c5a10", {
  username: "MyNewUsername"
}); // returns newly updated server object 
```

### Deleting a Server

```javascript
const server = pr.servers.delete("eadabb78-b199-43cb-adbd-ab36ce5c5a10");
server.delete; // true
```

## Sources

### Listing Sources

```javascript
const sources = pr.sources.list(); // returns an array of source objects
```

### Retrieving a Source

```javascript
const source = pr.sources.find("44e182ed-cd50-4fa1-af90-e77dd6d6a78c"); // returns source object with given id

source.id;                      // "44e182ed-cd50-4fa1-af90-e77dd6d6a78c"
source.account_id;              // "971d10ac-a912-42c0-aa41-f55adc7b6755"
source.type;                    // "fmaudit"
source.server_id;               // "eadabb78-b199-43cb-adbd-ab36ce5c5a10"
source.server;                  // #<PrintReleaf::Server>
source.external_id;             // "456"
source.collection_scope;        // "managed_only"
source.created_at;              // "2016-03-07T00:04:09Z"
source.status;                  // "active"
source.activated_at;            // "2016-03-07T00:04:09Z"
source.deactivated_at;          // nil
source.health_check;            // "healthy"
source.health_check_checked_at; // "2017-03-07T00:04:09Z"
source.health_check_changed_at; // "2017-03-07T00:04:09Z"
```

### Creating a Source

```javascript
const source = pr.sources.create({
  type: "printfleet",
  server_id: "9a6a1ced-4e71-4919-9d6d-25075834c404",
  external_id: "732ec0d3-20e3-439e-94e6-e64b40eb533a"
}); // returns newly created source object 
```

### Updating a Source

```javascript
const source = pr.sources.update("44e182ed-cd50-4fa1-af90-e77dd6d6a78c", {
  external_id: "abc123" 
}); // returns newly updates source object 
```

### Activating a Source

```javascript
const source = pr.sources.activate("44e182ed-cd50-4fa1-af90-e77dd6d6a78c"); // account with status 'active'
```

### Deactivating a Source

```javascript
const source = pr.sources.deactivate("44e182ed-cd50-4fa1-af90-e77dd6d6a78c"); // account with status 'inactive'
```

### Deleting a Source

```javascript
const source = pr.sources.delete("44e182ed-cd50-4fa1-af90-e77dd6d6a78c");
source.delete; // true;
```

## Transactions

### Listing Transactions

```javascript
const transactions = pr.transactions.list(); // returns an array of transaction objects
```

### Retrieving a Transaction

```javascript
const transaction = pr.transactions.find("70af5540-e3ec-4db7-bc45-4fb65b74368b"); // returns a transaction object with given id

transaction.id;             // "70af5540-e3ec-4db7-bc45-4fb65b74368b"
transaction.account_id;     // "971d10ac-a912-42c0-aa41-f55adc7b6755"
transaction.project_id;     // "692bb68d-64aa-4a79-8a08-d373fb0d8752"
transaction.account;        // #<PrintReleaf::Forestry::Project>
transaction.certificate_id; // "70af5540-e3ec-4db7-bc45-4fb65b74368b"
transaction.account;        // #<PrintReleaf::Certificate>
transaction.date;           // "2015-10-22T01:52:12Z"
transaction.trees;          // 63.048
transaction.items;          // [#<PrintReleaf::TransactionItem>, #<PrintReleaf::TransactionItem>]
```

### Creating a Transaction

```javascript
// providing trees
const transaction = pr.transaction.create({trees: 2.0}); // returns a newly created transaction

// or providing raw paper specs:
const transaction = pr.transactions.create({
  items: [
    {
      pages: 20000,
      width: 0.2127,
      height: 0.2762,
      paper_type_id: "a11c7abc-011e-462f-babb-3c6375fa6473"
    },
    {
      pages: 400000,
      width: 0.2127,
      height: 0.2762,
      paper_type_id: "bbd0f271-2f9e-494c-b2af-7f9354b310ad"
    }
  ]
}); // returns a newly created transaction 
```

### Deleting a Transaction

```javascript
const transaction = pr.transactions.delete("70af5540-e3ec-4db7-bc45-4fb65b74368b");
transaction.delete; // true
```

## Users

### Listing Users

```javascript
const users = pr.users.list(); // returns an array of user objects
```

### Retrieving a User

```javascript
const user = pr.users.find("5f25569f-ec0d-4ff3-a6ce-0456ac79b84d");

user.id;         // "5f25569f-ec0d-4ff3-a6ce-0456ac79b84d"
user.account_id; // "971d10ac-a912-42c0-aa41-f55adc7b6755"
user.name;       // "Sally Example"
user.email;      // "sally@example.com"
user.created_at; // "2015-03-07T00:04:09Z
```

### Deleting a User

```javascript
const user = pr.users.delete("5f25569f-ec0d-4ff3-a6ce-0456ac79b84d");
user.delete; // true
```

## Volume

### Listing volume history

```javascript
const volumes = pr.volumes.list(); // returns an array of volume objects

const volume = volumes[0]; 
volume.account_id; // "971d10ac-a912-42c0-aa41-f55adc7b6755"
volume.date;       // "2017-01-01T07:00:00Z"
volume.pages;      // 234567
volume.trees;      // 56.3
```

#### With parameters

```javascript
const volumes = pr.volumes.list({
  start_date: "2017-03-01",
  end_date:   "2017-03-03",
  period:     "daily"
}); // returns an array of volume objects 
```

## Forestry Projects

### Listing Projects

```javascript
const projects = pr.projects.list(); // returns an array of project objects 
```

### Retrieving a Project

```javascript
constant project = pr.projeects.find("5d3b468f-c0a3-4e7c-bed4-2dcce9d3f0f9"); // returns a project with given id 
project.id;                   // "5d3b468f-c0a3-4e7c-bed4-2dcce9d3f0f9"
project.name;                 // "Madagascar"
project.status;               // "active"
project.forest_latitude;      // -15.735844444444444
project.forest_longitude;     // 46.35879166666667
project.content_logo;         // "http://s3.amazonaws.com/projects/madagascar/logo.jpg"
project.content_masthead;     // "http://s3.amazonaws.com/projects/madagascar/masthead.jpg"
project.content_introduction; // "Madagascar, due to its isolation from the rest of the world..."
project.content_body_html;    // "<h1>Madagascar is one of the most threatened ecosystems on the planet..."
project.content_images;       // ["http://s3.amazonaws.com/projects/madagascar/1.jpg", ...]
```


## Paper Types

### Listing Paper Types

```javascript
const paperTypes = pr.paperTypes.list(); // retruns an array of paper typer objects 
```

### Retrieving a Paper Type

```javascript
const paperType = pr.paperTypes.find("a11c7abc-011e-462f-babb-3c6375fa6473"); // returns paper type with given id 
paper_type.id;         // "a11c7abc-011e-462f-babb-3c6375fa6473"
paper_type.account_id; // "a2c031fa-6599-4939-8bc6-8128881953c4"
paper_type.name;       // "80# #2 Gloss Cover"
paper_type.density;    // 216.0
```

### Creating a Custom Paper Type

```javascript
const paperType = pr.paperTypes.create({
  name:    "20# Bond/Writing/Ledger",
  density: 74.0
}); // returns a newly created paper type 
```

### Deleting a Paper Type

```javascript
const paperType = pr.paperTypes.delete("a11c7abc-011e-462f-babb-3c6375fa6473");
paperType.delete; // true
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/printreleaf/printreleaf-javascript.

## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

