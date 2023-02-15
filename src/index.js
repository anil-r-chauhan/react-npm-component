// const { default: Test } = require("./Test")

function myFunction(e){
console.log(e)
};
const NewWorkFlow = ()=> {
  return `<input type="text" name="address" onChange = "myFunction(e)"/>`
}
module.exports = NewWorkFlow;