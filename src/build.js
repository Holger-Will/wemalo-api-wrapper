var data = require("./api.json")
var fs = require("fs")
var f = data.api.map(item=>{
  var hasBody = item.type === "POST" || item.type === "PUT"
  return `
  async ${item.name}(${hasBody?"body":""}){
    const url = \`\${this.baseURL}${item.url}${item.type==="GET" && item.parameter ? "?"+item.parameter.fields.Parameter.map(item=>`${item.field}=\${body.${item.field}}`).join("&"):""}\`
    var res = await fetch(url,{
      method: "${item.type}",
      headers: this.headers,
      ${hasBody?"body: JSON.stringify(body)":""}
    })
    return await res.json()
  }
  `
}).join("")
fs.writeFileSync("./api.js",f,"utf-8")
//console.log(f)
