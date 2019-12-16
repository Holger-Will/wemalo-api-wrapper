const WemaloClient = require("./")
const client = new WemaloClient({token: process.env.wemaloToken})

async function main(){
  // var res = await client.addMultiple({"products":[{
  //   externalId: "3100",
  //   sku: "3100",
  //   name: "RV-100 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047860",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"},
  // {
  //   externalId: "3101",
  //   sku: "3101",
  //   name: "RV-125 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047877",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"},
  // {
  //   externalId: "3102",
  //   sku: "3102",
  //   name: "RV-150 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047884",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"},
  // {
  //   externalId: "3103",
  //   sku: "3103",
  //   name: "RV-160 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047891",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"},
  // {
  //   externalId: "3104",
  //   sku: "3104",
  //   name: "RV-200 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047907",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"},
  // {
  //   externalId: "3105",
  //   sku: "3105",
  //   name: "RV-250 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047914",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"},
  // {
  //   externalId: "3106",
  //   sku: "3106",
  //   name: "RV-315 B (EU)",
  //   description: "Rohrventilator, schwarz 220V/50Hz",
  //   ean:"4054503047921",
  //   producerName: "neverest",
  //   productGroup: "Rohrventilatoren"
  // }]})
  // console.log(res)
//   var res = await client.addMultiple({"products":[
//   {
//     "externalId": "3033",
//     "sku": "3033",
//     "name": "califlow 100mm",
//     "description": "mixed-flow inline Rohrventilator, Kunststoff",
//     "EAN": "4054503047730",
//     "producerName": "calimaero",
//     productGroup: "Rohrventilatoren"
//   },
//   {
//     "externalId": "3034",
//     "sku": "3034",
//     "name": "califlow 125mm",
//     "description": "mixed-flow inline Rohrventilator, Kunststoff",
//     "EAN": "4054503047747",
//     "producerName": "calimaero",
//     productGroup: "Rohrventilatoren"
//   },
//   {
//     "externalId": "3035",
//     "sku": "3035",
//     "name": "califlow 150mm",
//     "description": "mixed-flow inline Rohrventilator, Kunststoff",
//     "EAN": "4054503047754",
//     "producerName": "calimaero",
//     productGroup: "Rohrventilatoren"
//   }
// ]})


// res = await client.addProduct( {
//     "externalId": "test00001",
//     "sku": "test00001",
//     "name": "test produkt",
//     "description": "test test test",
//     "EAN": "4054503000001",
//     "producerName": "klimapartner",
//     productGroup: "Rohrventilatoren"
//   } )
// console.log(res)

// res = await client.updateProduct( "test00001",{
//     "sku": "test00001",
//     "name": "test product 123",
//     "description": "test test test test test",
//     "productGroup": "Rohrventilatoren"
//   } )
// console.log(res)

// res = await client.addUnit("3035", {
//     "unitId": "BOX",
//     "unitValue": 4,
//     "unitHeight": 53.8,
//     "unitWidth": 36.7,
//     "unitDepth": 52.5,
//     "unitWeight": 12.6,
//     "unitName": "califlow 150mm - 4er Box",
//     "isActive": true
//   } )
// console.log(res)
// var fs = require("fs")
// console.log(await client.addImage("test00001", {
//   extension:"jpg",
//   base64data: fs.readFileSync("test.jpg", { encoding: 'base64' })
// }))
//console.log(await client.getUnits("3035"))
//console.log(await client.getStock("3035"))
//console.log(await client.changeActiveFlag("test00001",false))
//console.log(await client.getNotFlaggedBookings("RETURNSHIPMENT", 1))
//console.log(await client.setFlaggedBookings([1]))


// var pl = {
//     "payload": "https://dhculcowzl.execute-api.eu-central-1.amazonaws.com/prod/webhook/test",
//     "token": "afdbc3dd562f7f033089",
//     "mail": "h.will@klimapartner.de"
// }
//status_update, stock_change, refurbishment_action, trackingnumber_added
//console.log(await client.registerWebHook("refurbishment_action",pl))

// console.log(await client.getWebHooks())
// console.log(await client.deleteWebHook("refurbishment_action"))
// console.log(await client.getWebHooks())
//console.log(await client.getGenericInterfaces())
//console.log(await client.getStockReduced("3033",true))
   //console.log(await client.availableStock(new Date(2019,9,22,6,32)))
   //console.log(await client.getIncomingBookings(new Date(2019,9,22,6,32),new Date(2019,11,11,6,32)))
   //console.log(await client.getAllProducts(new Date(2019,9,22,6,32)))
  // console.log(await client.deleteReservations(new Date(2019,9,22,6,32)))
  //console.log(await client.getProduct("test00001"))
  //console.log(JSON.stringify(await client.getProfiles(),null,2))

  var goodsOrder = {
    meta:{
      externalId: "Order0000002",
      currency: "EUR",
      pickingInfo: "this is just a test",
      descriptionOfGoods: "bla bla",
      blocked: 1,
      receiver:[{
        primary: true,
        name1: "Klimapartner GmbH",
        name2: "c/o Holger Will",
        street: "Bürgerstrasse",
        streetNumber: "53",
        countryCode2Letter: "DE",
        city: "Berlin",
        zip: "12347",
        email: "kontakt@klimapartner.de",
        customerNumber: "xyz11111"
      }]
    },
    positions:[{
      externalId: "3033",
      quantity: 3
    }]
  }
//console.log(await client.addGoodsOrder(goodsOrder))

  // pos = {
  //   positions:[{
  //     externalId: "3104"
  //   }]
  // }
  // console.log(await client.addGoodsOrderPosition("Order0000001",pos))

//   var fs = require("fs")
//   console.log(await client.addGoodsOrderDocument
// ("Order0000001", {
//     docType: "GOODSORDERDELIVERYNOTE",
//     docName: "Anschreiben",
//     base64data: fs.readFileSync("anschreiben.pdf", { encoding: 'base64' })
//   }))
// console.log(await client.addOrderNote("Order0000001",{notices:"this is just a test"}))
// console.log(await client.getProduct("3104"))
//console.log(await client.changeGoodsOrderPriority("Order0000001",{"priority": "0"}))
//console.log(await client.getGoodsOrderStatus("Order0000002"))
//console.log(await client.cancelGoodsOrder("Order0000001",{reason:"this was jsut a test"}))
//console.log(await client.deleteReservations())
}
main()
