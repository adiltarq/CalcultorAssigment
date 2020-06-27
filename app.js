
function getNum(num){
    var result = document.getElementById("result")
    result.value += num;
}

function clearThis(){
    var result = document.getElementById("result")
    result.value = "";
    answer.value = "";
}

function clearsThis(){
    var result = document.getElementById("result")
    result.value =result.value.substring(0,result.value.length -1);
}

function ans(){
    var result = document.getElementById("result");
    answer.value = eval(result.value)
}



function colorr() {
var element = document.body;
element.classList.toggle("dark-mode");
}