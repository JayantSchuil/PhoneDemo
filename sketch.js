function selectPhone(){
    var body = document.getElementById("jeetjejoh");
    function createSelect(name, numCount){
        var select = document.createElement("select");
        select.id = name;
        body.appendChild(select);
    
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

