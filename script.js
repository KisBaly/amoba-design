var div, sor, oszlop;
var leptet = 0;
function kattint(td){
    if(leptet % 2 ==0){
        if(td.innerHTML == ""){
            td.innerHTML = "X";
        }
        
    }
    else{
        if(td.innerHTML == ""){
            td.innerHTML = "O";
        }
    }
    leptet++;
}

function TablaGeneralas(){
    
    sor = document.getElementById("sor").value;
    oszlop = document.getElementById("oszlop").value;
    div = document.getElementById("eredmeny");
    div.innerHTML = "";
    var table = document.createElement("table");
      
    for (let index = 0; index < sor; index++){
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            let td = document.createElement("td");
            td.setAttribute("onclick", "kattint(this)")
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}
