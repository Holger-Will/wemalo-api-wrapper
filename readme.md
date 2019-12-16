# wemalo api wrapper

a wrapper for the [wemalo API](http://connect-api.wemalo.com/)

## install

`npm i -S wemalo-api-wrapper`

## usage

```
const WemaloClient = require('./')
const client = new WemaloClient({token: <your api token>})
```

## the API

### listing all products

```
await client.getAllProducts()
```

### get single Product

```
await client.getProduct("idOfProduct")
```
