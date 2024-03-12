
function setPermanentAddress() {
    var add1 = document.getElementById("add1");
    var add2 = document.getElementById("add2");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var pin = document.getElementById("pin");
    var padd1 = document.getElementById("padd1");
    var padd2 = document.getElementById("padd2");
    var pcity = document.getElementById("pcity");
    var pstate = document.getElementById("pstate");
    var pcountry = document.getElementById("pcountry");
    var ppin = document.getElementById("ppin");
    var sameadd = document.getElementById("sameadd");
    var permanentadd = document.getElementsByClassName("permanent");

    if (sameadd.checked) {
        padd1.value = add1.value;
        padd2.value = add2.value;
        pcity.value = city.value;
        pstate.value = state.value;  
        pcountry.value = country.value;
        ppin.value = pin.value;

        for (var i = 0; i < permanentadd.length; i++) {
            permanentadd[i].disabled = true;
        }
    } else {
        for (var i = 0; i < permanentadd.length; i++) {
            permanentadd[i].disabled = false;
        }
    }
}


function handleOrphanSelection(){
    var orphan = document.getElementById("orphan");
    
    // Get the input fields related to mother's information
    var mname = document.getElementById("mname");
    var mocc = document.getElementById("mocc");
    var moff = document.getElementById("moff");
    var mphone = document.getElementById("mphone");
    
    // Enable or disable the input fields based on the selection
    if (orphan.value === "orphan") {
        mname.disabled = true;
        mocc.disabled = true;
        moff.disabled = true;
        mphone.disabled = true;
    } else {
        mname.disabled = false;
        mocc.disabled = false;
        moff.disabled = false;
        mphone.disabled = false;
    }
}


function validate() {
    var inputs = document.getElementsByClassName("inputs"); 
    var selects = document.getElementsByClassName("form-select"); 
    
    var isValid = true;
    for (var i = 0; i < inputs.length; i++) {
        var currentInput = inputs[i];

        if (currentInput.value === undefined || currentInput.value.trim() === "") {
            currentInput.style.borderColor = "red";
            isValid = false;
            
        } else {
            currentInput.style.borderColor = "";
            
        }
    }

    for (var i = 0; i < selects.length; i++) {
        var currentSelect = selects[i];

        if (currentSelect.value === "none" || currentSelect.value.trim() === "") {
            currentSelect.style.borderColor = "red";
            isValid = false;
        } else {
            currentSelect.style.borderColor = "";
        }
    }
    return isValid;
    
}



    function sum1() {
        let theoryMax = document.getElementById("t1");
        let theoryObtained = document.getElementById("ot1");
        let practicalMax = document.getElementById("p1");
        let practicalObtained = document.getElementById("op1");
        let totalMarks = document.getElementById("total1");
        let totalObtained = document.getElementById("totalObt1");

    let theoryTotal = parseFloat(theoryMax.value)+parseFloat(practicalMax.value );
    totalMarks.value = theoryTotal;
    let practicalTotal = parseFloat(theoryObtained.value)+parseFloat(practicalObtained.value);
    totalObtained.value=  practicalTotal;
}

let theoryMax2 = document.getElementById("t2");
    let theoryObtained2 = document.getElementById("ot2");
    let practicalMax2 = document.getElementById("p2");
    let practicalObtained2 = document.getElementById("op2");
    let totalMarks2 = document.getElementById("total2");
    let totalObtained2 = document.getElementById("totalObt2");

    function sum2() {
    let theoryTotal2 = parseFloat(theoryMax2.value)+parseFloat(practicalMax2.value );
    totalMarks2.value = theoryTotal2;
    let practicalTotal2 = parseFloat(theoryObtained2.value)+parseFloat(practicalObtained2.value);
    totalObtained2.value=  practicalTotal2;
}

let theoryMax3 = document.getElementById("t3");
    let theoryObtained3 = document.getElementById("ot3");
    let practicalMax3 = document.getElementById("p3");
    let practicalObtained3 = document.getElementById("op3");
    let totalMarks3 = document.getElementById("total3");
    let totalObtained3 = document.getElementById("totalObt3");

    function sum3() {
    let theoryTotal2 = parseFloat(theoryMax2.value)+parseFloat(practicalMax2.value );
    totalMarks3.value = theoryTotal2;
    let practicalTotal2 = parseFloat(theoryObtained2.value)+parseFloat(practicalObtained2.value);
    totalObtained2.value=  practicalTotal2;
}

let theoryMax4 = document.getElementById("t4");
    let theoryObtained4 = document.getElementById("ot4");
    let practicalMax4 = document.getElementById("p4");
    let practicalObtained4 = document.getElementById("op4");
    let totalMarks4 = document.getElementById("total4");
    let totalObtained4 = document.getElementById("totalObt4");

    function sum4() {
    let theoryTotal4 = parseFloat(theoryMax4.value)+parseFloat(practicalMax4.value );
    totalMarks4.value= theoryTotal4;
    let practicalTotal4 = parseFloat(theoryObtained4.value)+parseFloat(practicalObtained4.value);
    totalObtained4.value=  practicalTotal4;


}

let theoryMax5 = document.getElementById("t5");
    let theoryObtained5 = document.getElementById("ot5");
    let practicalMax5 = document.getElementById("p5");
    let practicalObtained5 = document.getElementById("op5");
    let totalMarks5 = document.getElementById("total5");
    let totalObtained5 = document.getElementById("totalObt5");

    function sum5() {
    let theoryTotal5 = parseFloat(theoryMax5.value)+parseFloat(practicalMax5.value );
    totalMarks5.value = theoryTotal5;
    let practicalTotal5 = parseFloat(theoryObtained5.value)+parseFloat(practicalObtained5.value);
    totalObtained5.value=  practicalTotal5;
}


function ecaForm(){
    let x = document.getElementById("addEca")
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function sportForm(){
    let x = document.getElementById("addSport")
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function change() {
    let chngTxt = document.getElementById("change");
    let inputs = document.getElementsByClassName("inputs");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() !== "") {
            chngTxt.innerHTML = "Yes";
            return; 
        }
    }

    chngTxt.innerHTML = "No";
}


function save(){
    alert("Saved for later");
}
