var enterEle = document.getElementById("enter-amount")
console.log(enterEle);
function enterFunc() {
    var a = parseFloat(enterEle.value);
    console.log(a);


var fromEl = document.querySelectorAll(".op")



fromEl.forEach( function(sele){
sele.addEventListener("change",function() {
    var ab = parseFloat(this.value);
    console.log(ab);

    var fromSi = ab * a
console.log(fromSi,"c");
    // var d = fromSi * ab
    // console.log(d , "d");
    
  var toEL= document.querySelectorAll(".op2");
  toEL.forEach(function(tosel){
  tosel.addEventListener("change", function() {
       var ano = parseFloat(this.value);
       console.log(ano);
       var d = fromSi * ano
       console.log(d , "d");


       var paraEl =  document.querySelector(".para");
       console.log(paraEl);
      paraEl.innerHTML= d
  });
  });

});
});

}


