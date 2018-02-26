
function math() {
  var firstnumber = document.getElementById("num1").value;
  var secoundnumber = document.getElementById("num2").value;
  console.log(firstnumber, secoundnumber);
  var product = Number.parseInt(firstnumber) * Number.parseInt(secoundnumber);
  var add = Number.parseInt(firstnumber) + Number.parseInt(secoundnumber);
  var sub = Number.parseInt(firstnumber) - Number.parseInt(secoundnumber);
  var div = Number.parseInt(firstnumber) / Number.parseInt(secoundnumber);
  console.log(firstnumber, secoundnumber, product, add, sub, div);
  document.getElementById("product").value = product;
  document.getElementById("add").value = add;
  document.getElementById("sub").value = sub;
  document.getElementById("div").value = div;
}

function add() {
  var firstnumber = document.getElementById("num1").value;
  var secoundnumber = document.getElementById("num2").value;
  var add = Number.parseInt(firstnumber) + Number.parseInt(secoundnumber);
  console.log(firstnumber, secoundnumber, add);
  document.getElementById("add").value = add;

}

function product() {
  var firstnumber = document.getElementById("num1").value;
  var secoundnumber = document.getElementById("num2").value;
  var product = Number.parseInt(firstnumber) * Number.parseInt(secoundnumber);
  console.log(firstnumber, secoundnumber, product);
  document.getElementById("product").value = product;

}

function sub() {
  var firstnumber = document.getElementById("num1").value;
  var secoundnumber = document.getElementById("num2").value;
  var sub = Number.parseInt(firstnumber) - Number.parseInt(secoundnumber);
  console.log(firstnumber, secoundnumber, sub);
  document.getElementById("sub").value = sub;

}

function div() {
  var firstnumber = document.getElementById("num1").value;
  var secoundnumber = document.getElementById("num2").value;
  var div = Number.parseInt(firstnumber) / Number.parseInt(secoundnumber);
  console.log(firstnumber, secoundnumber, div);
  document.getElementById("div").value = div;

}
