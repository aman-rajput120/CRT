function addNewField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function aqAddField(){
    let newNodem = document.createElement("textarea");
    newNodem.classList.add("form-control");
    newNodem.classList.add("aqFeild");
    newNodem.classList.add("mt-2");
    newNodem.setAttribute("rows",3);

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNodem,aqAddButtonOb);
}
function skAddField(){
    let newNodem = document.createElement("textarea");
    newNodem.classList.add("form-control");
    newNodem.classList.add("skFeild");
    newNodem.classList.add("mt-2");
    newNodem.setAttribute("rows",3);

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNodem,skAddButtonOb);
}
function generateCv(){
    let nameFeild = document.getElementById("nameField").value;
    let nameT1 = document.getElementById('nameT');
    nameT1.innerHTML = nameFeild;
    document.getElementById("nameT2").innerHTML= nameFeild;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fb").innerHTML = document.getElementById("fbField").value;
    document.getElementById("insta").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkdin").innerHTML = document.getElementById("linkdField").value;
    document.getElementById("github").innerHTML = document.getElementById("gitField").value;
    
    document.getElementById("object").innerHTML = document.getElementById("obj").value;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for(let e of wes){
        str = str + `<li> ${e.value}</li>`;

    }
    document.getElementById("wE").innerHTML = str;



    let aqe = document.getElementsByClassName("aqFeild");
    let str1 = "";
    for(let e of aqe){
        str1 = str1 + `<li> ${e.value}</li>`;

    }
    document.getElementById("aQ").innerHTML = str1;
    


    let skkil = document.getElementsByClassName("skFeild");
    let str2 = "";
    for(let e of skkil){
        str2 = str2 + `<li> ${e.value}</li>`;

    }
    document.getElementById("sK").innerHTML = str2;

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}

function printCv(){
    window.print();
}