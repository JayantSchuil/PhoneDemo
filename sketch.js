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