function selectPhone(){
    var body = document.getElementsByClassName("dropDown");
    function createSelect(name, numCount){
        var select = document.createElement("select");
        select.id = name;
        body[0].appendChild(select);
        
        for(var i = 0; i < numCount; i++){
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }
        
    }
    
    
    for(var i = 0; i < 3; i++){
        createSelect(i, 9999);
    }
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

function generateRandom(){
    var number = Math.floor(Math.random() * 9000000000) + 1000000000;
    var body = document.getElementById("randomNumber");
    body.innerHTML = number + " <br /> Is this not your number? click generate again to try again";
}

