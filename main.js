var buttons = document.getElementsByTagName("button");
var button = buttons[0];

var inputs = document.getElementsByTagName("input");
var input = inputs[0];

button.onclick = function(){
    var headers = document.getElementsByTagName('h2');
    var text_box = headers[0];
    text_box.innerHTML = "Hello " +input.value + "!";
    input.value='';
};
