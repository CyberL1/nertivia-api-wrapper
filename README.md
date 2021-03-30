# Nertivia API wrapper
A library for working with Nertivia API

## Token

To get user token:
1. Open devtools (`ctrl shift + i`)
2. Go to the `Console` tab
3. Type `localStorage.getItem("hauthid")`

To get bot token:
1. Go to `Settings`
2. Go to `Manage Bots` tab
3. Click on bot of your choice
4. Under `Manage Token` click `Copy Token` button

## Usage

1. Install the package using `npm i nertivia-api-wrapper`
2. Copy this code:

```js
const nertiviaAPI = require("nertivia-api-wrapper");
const client = new nertiviaAPI("token");

client.user.get().then(res => res.json()).then(console.log);
```

You'll find more usage examples is the `tests` folder