var multiplier=1/76;
function convertToINR(){
  var usd=document.getElementById("usdAmount").value;
  document.getElementById("inrAmount").value = usd/multiplier;
}

function convertToUSD(){
  var inr=document.getElementById("inrAmount").value;
  document.getElementById("usdAmount").value = multiplier*inr;
}