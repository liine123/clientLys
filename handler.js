document.getElementById("1").addEventListener("click", function(){
    Et();
    this.style.backgroundColor = "#9b03a3";
    document.getElementById("2").style.backgroundColor = "#008080";
})
document.getElementById("2").addEventListener("click", function(){
    //Et();
    this.style.backgroundColor = "#9b03a3";
    document.getElementById("1").style.backgroundColor = "#008080";
})


var slider = document.getElementById("slider");
var output = document.getElementById("box");
slider.oninput = function() {
  output.value = this.value;

}