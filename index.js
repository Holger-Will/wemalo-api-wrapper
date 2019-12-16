const fetch = require("node-fetch")

class WemaloClient{

  constructor(opt){
    this.token = opt.token
    this.baseURL = opt.baseURL || "https://connect.wemalo.com/v1"
    this.headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${this.token}`
    }
  }

  async fetch(url,method,body) {
    let doc = {
      method: method,
      headers: this.headers,
    }
    if(body){
      doc.body = JSON.stringify(body)
    }
    //console.log(doc,url)
    var res = await fetch(url,doc)
    if(res.headers.get('content-type').split(";")[0] === "application/json"){
      return await res.json()
    }else{
      console.log(await res.text())
    }
  }

// *************************************************************************************************************
// -------------------------------- Goods Order ----------------------------------------------------------------
// *************************************************************************************************************

  async addGoodsOrder(body){
    return await this.fetch(`${this.baseURL}/goodsOrder/add`,"POST",body)
  }
  async addGoodsOrderPosition(externalId,body){
    // ----------------- BUGED !!! ------------------------------------
    return await this.fetch(`${this.baseURL}/goodsOrder/addPosition/${externalId}`,"POST",body)
  }
  async addGoodsOrderDocument(externalId,body){
    return await this.fetch(`${this.baseURL}/goodsOrder/addDocument/${externalId}`,"POST",body)
  }
  async addOrderNote(externalId,body){
    return await this.fetch(`${this.baseURL}/goodsOrder/note/${externalId}`,"PUT",body)
  }

  // async addTrackingNumber(body){
  //   const url = `${this.baseURL}/goodsOrder/trackingNumber/${body.packageId}`
  //   var res = await fetch(url,{
  //     method: "PUT",
  //     headers: this.headers,
  //     body: JSON.stringify(body)
  //   })
  //   return await res.json()
  // }

  async cancelGoodsOrder(externalId,body){
    return await this.fetch(`${this.baseURL}/goodsOrder/cancel/${externalId}`,"PUT",body)
  }
  async changeGoodsOrderPriority(externalId,body){
    return await this.fetch(`${this.baseURL}/goodsOrder/changePriority/${externalId}`,"PUT",body)
  }
  async deleteReservations(){
    return await this.fetch(`${this.baseURL}/goodsOrder/reservations`,"DELETE")
  }
  async finishOrder(orderId, body){
    // untested
    return await this.fetch(`${this.baseURL}/goodsOrder/finish/:orderId`,"POST",body)
  }

  async getGoodsOrderStatus(externalId){
    return await this.fetch(`${this.baseURL}/goodsOrder/getStatus/${externalId}`,"GET")
  }

  async getOrderPackages(){
    const url = `${this.baseURL}/goodsOrder/packages?orderId=${body.orderId}&externalOrderId=${body.externalOrderId}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async getProfiles(){
    const url = `${this.baseURL}/goodsOrder/profiles`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async getSentPackages(){
    const url = `${this.baseURL}/goodsOrder/sentPackages/?externalId=${body.externalId}&dateFrom=${body.dateFrom}&dateTo=${body.dateTo}&addRecipient=${body.addRecipient}&page=${body.page}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async getSentPackagesByFlag(){
    const url = `${this.baseURL}/goodsOrder/packages/sent/?externalId=${body.externalId}&addRecipient=${body.addRecipient}&page=${body.page}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async getShippingLabel(){
    const url = `${this.baseURL}/goodsOrder/package/:parcelId/label?parcelId=${body.parcelId}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async getTrackingNumber(){
    const url = `${this.baseURL}/goodsOrder/package/:parcelId/trackingNumber?parcelId=${body.parcelId}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async putSentPackagesFlag(body){
    const url = `${this.baseURL}/goodsOrder/packages/sent/:bookingId`
    var res = await fetch(url,{
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  }

  async removeGoodsOrderPosition(){
    const url = `${this.baseURL}/goodsOrder/removePosition/:externalId/:externalpositionId`
    var res = await fetch(url,{
      method: "DELETE",
      headers: this.headers,

    })
    return await res.json()
  }

  async sentPackage(body){
    const url = `${this.baseURL}/goodsOrder/package/:parcelId/sent`
    var res = await fetch(url,{
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  }

  async updateGoodsOrderMeta(body){
    const url = `${this.baseURL}/goodsOrder/updateMeta/:id`
    var res = await fetch(url,{
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  }

  // *************************************************************************************************************
  // -------------------------------- Goods Receipt ----------------------------------------------------------------
  // *************************************************************************************************************

  async addGoodsReceipt(body){
    const url = `${this.baseURL}/goodsReceipt/add`
    var res = await fetch(url,{
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  }

  async getIncomingBookings(fromDate,toDate,deliveryNote,orderId,page){
    const url = `${this.baseURL}/goodsReceipt/get?dateFrom`//${jsDateToWemaloDate(fromDate)}&dateTo=${jsDateToWemaloDate(toDate)}`//`&deliveryNote=${body.deliveryNote}&orderId=${body.orderId}&page=${body.page}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

// ************************************************************************************************
// **         Products
// ************************************************************************************************

  async addImage(externalId, body){
    return await this.fetch(`${this.baseURL}/product/addImage/${externalId}`,"PUT",body)
  }
  async addMultiple(body){
    return await this.fetch(`${this.baseURL}/product/addMultiple`,"POST",body)
  }
  async addProduct(body){
    return await this.fetch(`${this.baseURL}/product/add`,"POST",body)
  }
  async addUnit(externalId,body){
    return await this.fetch(`${this.baseURL}/product/unit/${externalId}`,"POST",body)
  }
  async availableStock(fromDate){
    return await this.fetch(`${this.baseURL}/product/availableStock/?fromDate=${jsDateToWemaloDate(fromDate)}`,"GET")
  }
  async changeActiveFlag(externalId, active = true){
    return await this.fetch(`${this.baseURL}/product/changeActiveFlag/${externalId}`,"PUT",{isActive: active})
  }
  async getAllProducts(fromDate = (new Date((new Date()).setYear((new Date()).getFullYear() - 1)))){
    return await this.fetch(`${this.baseURL}/product/getAll?fromDate=${jsDateToWemaloDate(fromDate)}`,"GET")
  }
  async getNotFlaggedBookings(reason, page = 1){
    return await this.fetch(`${this.baseURL}/product/bookings/flag?reason=${reason}&page=${page}`,"GET")
  }
  async getProduct(externalId){
    return await this.fetch(`${this.baseURL}/product/get/${externalId}`,"GET")
  }
  async getStock(externalId){
    return await this.fetch(`${this.baseURL}/product/stock/${externalId}`,"GET")
  }
  async getStockReduced(externalId, hideDetails = false){
    return await this.fetch(`${this.baseURL}/product/stock/reduced/${externalId}?hideDetails=${hideDetails}`,"GET")
  }
  async getUnits(externalId){
    return await   this.fetch(`${this.baseURL}/product/unit/${externalId}`,"GET")
  }
  async setFlaggedBookings(historyIds){
    return await this.fetch(`${this.baseURL}/product/bookings/flag`,"PUT",{"historyIds": historyIds})
  }
  async updateProduct(externalId, body){
    return await this.fetch(`${this.baseURL}/product/update/${externalId}`,"PUT",body)
  }

  // ************************************************************************************************
  // **         Refurbishments
  // ************************************************************************************************

  async getRefurbishment(){
    const url = `${this.baseURL}/refurbishment/get?externalId=${body.externalId}&sku=${body.sku}&serialNumber=${body.serialNumber}&explicitSerialNumber=${body.explicitSerialNumber}&refurbishmentId=${body.refurbishmentId}&page=${body.page}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  // ************************************************************************************************
  // **         Returns
  // ************************************************************************************************

  async addReturnsDocument(body){
    const url = `${this.baseURL}/returns/document/:externalId`
    var res = await fetch(url,{
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  }

  async announceReturn(body){
    const url = `${this.baseURL}/returns/announce`
    var res = await fetch(url,{
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()
  }

  async getBookedReturns(){
    const url = `${this.baseURL}/returns/booked?dateFrom=${body.dateFrom}&dateTo=${body.dateTo}&externalGoodsOrderId=${body.externalGoodsOrderId}&externalReturnsId=${body.externalReturnsId}&returnsId=${body.returnsId}&page=${body.page}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async getReturnBookings(){
    const url = `${this.baseURL}/returns/getBookings?dateFrom=${body.dateFrom}&dateTo=${body.dateTo}&externalGoodsOrderId=${body.externalGoodsOrderId}&externalReturnsId=${body.externalReturnsId}&returnsId=${body.returnsId}&page=${body.page}`
    var res = await fetch(url,{
      method: "GET",
      headers: this.headers,

    })
    return await res.json()
  }

  async putSynchedReturnsFlag(body){
    const url = `${this.baseURL}/returns/booked/:bookingId`
    var res = await fetch(url,{
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body)
    })
    return await res.json()

  }

  // ************************************************************************************************
  // **         GI
  // ************************************************************************************************

  async getGenericInterfaces(){
    return await this.fetch(`${this.baseURL}/user/genericInterfaces`,"GET")
  }

  // ************************************************************************************************
  // **         Webhooks
  // ************************************************************************************************

  async deleteWebHook(evt){
    return await this.fetch(`${this.baseURL}/webhook/${evt}`,"DELETE")
  }
  async getWebHooks(){
    return await this.fetch(`${this.baseURL}/webhook`,"GET")
  }
  async registerWebHook(evt, body){
    // evt one of: status_update, stock_change, refurbishment_action, trackingnumber_added
    return await this.fetch(`${this.baseURL}/webhook/${evt}`,"POST",body)
  }

}

module.exports = WemaloClient


function jsDateToWemaloDate(date){
  return `${date.getDate().toString().padStart(2,"0")}${(date.getMonth()+1).toString().padStart(2,"0")}${date.getFullYear()}${date.getHours().toString().padStart(2,"0")}`
}
