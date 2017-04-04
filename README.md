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
const account = pr.account.mine()   // an account object
account.id                          // "a2c031fa-6599-4939-8bc6-8128881953c4"
account.name                        // "My Account"
account.role                        // "customer"
account.created_at                  // "2014-03-06T23:06:23+00:00"
account.parent_id                   // nil
account.status                      // "active"
account.activated_at                // "2014-03-06T23:06:23+00:00"
account.deactivated_at              // nil
account.accounts_count              // 2
account.users_count                 // 2
account.mtd_pages                   // 1234
account.qtd_pages                   // 12345
account.ytd_pages                   // 123456
account.lifetime_pages              // 1234567
account.mtd_trees                   // 0.15
account.qtd_trees                   // 1.48
account.ytd_trees                   // 14.82
account.lifetime_trees              // 148.1
```
