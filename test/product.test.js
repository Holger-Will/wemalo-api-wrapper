const WemaloClient = require("../")
const client = new WemaloClient({token: process.env.wemaloToken})
const assert = require("assert")
var orderId = "test"+(Math.random()*1000000).toFixed(0)
describe("WemaloClient",()=>{
  describe("GoodsOrder",()=>{
    describe("addGoodsOrder",()=>{
      it("should allow to add Goods Orders",async ()=>{
        var res = await client.addGoodsOrder({
          meta:{
            externalId: orderId,
            receiver:[
              {
                name1: "Test",
                countryCode2Letter: "DE",
                city: "Berlin",
                zip: "12347"
              }
            ]
          },
          positions:[
            {externalId:"3100"}
          ]
        })
        console.log(res)
        assert.strictEqual(res.status,200)
      }).timeout(5000)
    })
    describe("cancelGoodsOrder",()=>{
      it("cancels goods orders",async ()=>{
        var res = await client.cancelGoodsOrder({
          externalId: orderId,
          reason: "this is a test"
        })
        console.log(res)
        assert.strictEqual(res.status,200)
      })
    })
  })
})

//
// async function main(){
//   var res = await client.addProduct({
//     externalId: "3100",
//     sku: "3100",
//     productGroup: "Ventilatoren",
//     ean:"4054503047860",
//     name:"RV-100 B"
//   })
//   console.log(res)
//   console.log(await client.getAllProducts(new Date(2019,9,22,6,32)))
//   console.log(await client.deleteReservations(new Date(2019,9,22,6,32)))
// }
// main()
