/** 
 * 
 * 
 * Investigating the properties of a JSON structure created in Python
 * 
 */

str = '{"error":[],"result":{"open":{"item":10}}}';
console.log(str);

jObj = JSON.parse(str);
console.log(jObj);

for (key in Object.keys(jObj)) {
  console.log(key);
}

console.log("-------------------");

for (const [key, value] of Object.entries(jObj)) {
  console.log(`${key}: ${value}`);
  
  if (value == undefined) {
    console.log("Undefined");
  } else if (typeof(value) == "object") {
    console.log("\tObject.keys(value)", Object.keys(value));
    console.log("\tObject.keys(value).length", Object.keys(value).length);
  } else {
    console.log(value);
  }
}

console.log("-------------------");

arr = new Array
console.log("jObj['error']", jObj['error'])

console.log("jObj['error'] == arr", jObj['error'] == arr)
console.log("jObj['error'].length == arr.length", jObj['error'].length == arr.length)
