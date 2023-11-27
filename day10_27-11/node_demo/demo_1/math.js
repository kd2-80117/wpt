var str = require("./abc");
var addition =function (x,y) {
    return x+y;
}
var subtraction =function (x,y) {
    return x-y;
}
var multiply =function (x,y) {
    return x*y;
}
var division =function (x,y) {
    return x/y;
}
var a = 20;
var b = 10;
module.exports = {a,b,add:addition,sub:subtraction,mul:multiply,div:division,str};