var buttons = document.getElementsByTagName("button");
var button = buttons[0];

var inputs = document.getElementsByTagName("input");
var input = inputs[0];

button.onclick = function(){
    alert("Hello " + input.value + "!!" );
};
