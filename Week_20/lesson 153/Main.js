const data = {name:"CALI", phone: 4645195}
const datajson = '{"name":"jumhur", "phone": 4645195}'

// json -> javobject
const json_to_object= JSON.parse(datajson)
console.log(typeof json_to_object)

// js-object -> json

let objec_to_json = JSON.stringify(data)
console.log(objec_to_json)
console.log(data)
