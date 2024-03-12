var name = document.getElementById("fullname").value;
var gender = getSelectedGender();
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var indian = getSelectedCitizenship();
var reservation = document.getElementById("reservation").value;
var minority = document.getElementById("minority").value;
var pemail = document.getElementById("pemail").value;
var aemail = document.getElementById("aemail").value;
var pphone= document.getElementById("pphone").value;
var aphone= document.getElementById("aphone").value;
var domicile= document.getElementById("domicile").value;
var orphan = document.getElementById("orphan").value;
var mname = document.getElementById("mname").value;
var mocc= document.getElementById("mocc").value;
var moff= document.getElementById("moff").value;
var mphone= document.getElementById("mphone").value;
var fname = document.getElementById("fname").value;
var focc= document.getElementById("focc").value;
var foff= document.getElementById("foff").value;
var fphone= document.getElementById("fphone").value;
var wardquota= document.getElementById("wardquota").value;
var add1= document.getElementById("add1").value;
var add2= document.getElementById("add2").value;
var country= document.getElementById("country").value;
var state= document.getElementById("state").value;
var city= document.getElementById("city").value;
var pin= document.getElementById("pin").value;
var padd1= document.getElementById("padd1").value;
var padd2= document.getElementById("padd2").value;
var pcountry= document.getElementById("pcountry").value;
var pstate= document.getElementById("pstate").value;
var pcity= document.getElementById("pcity").value;
var ppin= document.getElementById("ppin").value;
function getSelectedGender() {
var genderRadios = document.getElementsByName("gender");
for (var i = 0; i < genderRadios.length; i++) {
  if (genderRadios[i].checked) {
    return genderRadios[i].value;
  }
}

return "";
}

function getSelectedCitizenship() {
var citizenRadios = document.getElementsByName("indian");
for (var i = 0; i < citizenRadios.length; i++) {
  if (citizenRadios[i].checked) {
    return citizenRadios[i].value;
  }
}
return "";
}


function updateFormFields() {
document.getElementById("fullname").value = name;
document.querySelector('input[name="gender"][value="' + gender + '"]').checked = true;
document.getElementById("day").value = day;
document.getElementById("month").value = month;
document.getElementById("year").value = year;
document.querySelector('input[name="indian"][value="' + indian + '"]').checked = true;
document.getElementById("reservation").value = reservation;
document.getElementById("minority").value = minority;
document.getElementById("pemail").value = pemail;
document.getElementById("aemail").value = aemail;
document.getElementById("pphone").value = pphone;
document.getElementById("aphone").value = aphone;
document.getElementById("domicile").value = domicile;
document.getElementById("orphan").value = orphan;
document.getElementById("mname").value = mname;
document.getElementById("mocc").value = mocc;
document.getElementById("moff").value = moff;
document.getElementById("mphone").value = mphone;
document.getElementById("fname").value = fname;
document.getElementById("focc").value = focc;
document.getElementById("foff").value = foff;
document.getElementById("fphone").value = fphone;
document.getElementById("wardquota").value = wardquota;
document.getElementById("add1").value = add1;
document.getElementById("add2").value = add2;
document.getElementById("country").value = country;
document.getElementById("state").value = state;
document.getElementById("city").value = city;
document.getElementById("pin").value = pin;
document.getElementById("padd1").value = padd1;
document.getElementById("padd2").value = padd2;
document.getElementById("pcountry").value = pcountry;
document.getElementById("pcity").value = pcity;
document.getElementById("pstate").value = pstate;
document.getElementById("ppin").value = ppin;

}

function updateVariables(data) {
if (data) {
name = data.Name || "";
gender = data.Gender || "";
day = data.DOB ? data.DOB.substring(0, 2) : "";
month = data.DOB ? data.DOB.substring(2, 4) : "";
year = data.DOB ? data.DOB.substring(4,8) : "";
indian = data.Indian || "";
reservation = data.Reservation || "";
minority = data.Minority || "";
pemail= data.Email || "";
aemail = data.AlternateEmail || "";
pphone = data.Mobile || "";
aphone = data.AlternateMobile || "";
domicile = data.Domicile || "";
orphan = data.Orphan || "";
mname = data.MotherName || "";
mocc = data.MotherOccupation || "";
moff = data.MotherOffice || "";
mphone = data.MotherPhone || "";
fname = data.FatherName || "";
focc = data.FatherOccupation || "";
foff = data.FatherOffice || "";
fphone = data.FatherPhone || "";
wardquota = data.WardQuota || "";
add1 = data.Add1 || "";
add2 = data.Add2 || "";
country = data.Country || "";
state = data.State || "";
city = data.City || ""; 
pin = data.Pin || "";
padd1 = data.Padd1 || "";
padd2 = data.Padd2 || "";
pcountry = data.Pcountry || "";
pstate = data.Pstate || "";
pcity = data.Pcity || "";
ppin = data.Ppin || "";

}
}
function retrieveJsonFile() {
fetch('formData.json')
.then(response => response.json())
.then(data => {
    console.log(data);

    updateFormFields();
    updateVariables(data);
   
})
.catch(error => {
    console.error('Error fetching JSON:', error);
});
}

retrieveJsonFile();

function jsonFile() {
var name = document.getElementById("fullname").value;
var gender = getSelectedGender();
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var indian = getSelectedCitizenship();
var reservation = document.getElementById("reservation").value;
var minority = document.getElementById("minority").value;
var pemail = document.getElementById("pemail").value;
var aemail = document.getElementById("aemail").value;
var pphone= document.getElementById("pphone").value;
var aphone= document.getElementById("aphone").value;
var domicile= document.getElementById("domicile").value;
var orphan = document.getElementById("orphan").value;
var mname = document.getElementById("mname").value;
var mocc= document.getElementById("mocc").value;
var moff= document.getElementById("moff").value;
var mphone= document.getElementById("mphone").value;
var fname = document.getElementById("fname").value;
var focc= document.getElementById("focc").value;
var foff= document.getElementById("foff").value;
var fphone= document.getElementById("fphone").value;
var wardquota= document.getElementById("wardquota").value;
var add1= document.getElementById("add1").value;
var add2= document.getElementById("add2").value;
var country= document.getElementById("country").value;
var state= document.getElementById("state").value;
var city= document.getElementById("city").value;
var pin= document.getElementById("pin").value;
var padd1= document.getElementById("padd1").value;
var padd2= document.getElementById("padd2").value;
var pcountry= document.getElementById("pcountry").value;
var pstate= document.getElementById("pstate").value;
var pcity= document.getElementById("pcity").value;
var ppin= document.getElementById("ppin").value;

function getSelectedGender() {
var genderRadios = document.getElementsByName("gender");
for (var i = 0; i < genderRadios.length; i++) {
  if (genderRadios[i].checked) {
    return genderRadios[i].value;
  }
}

return "";
}

function getSelectedCitizenship() {
var citizenRadios = document.getElementsByName("indian");
for (var i = 0; i < citizenRadios.length; i++) {
  if (citizenRadios[i].checked) {
    return citizenRadios[i].value;
  }
}
return "";
}

let formData = {
Name: name,
Gender: gender,
DOB: day + month + year,
Indian: indian,
Reservation: reservation,
Minority: minority,
Email: pemail,
AlternateEmail: aemail,
Mobile: pphone,
AlternateMobile: aphone,
Domicile: domicile,
Orphan: orphan,
MotherName: mname,
MotherOccupation: mocc,
MotherOffice: moff,
MotherPhone: mphone,
FatherName: fname,
FatherOccupation: focc,
FatherOffice: foff,
FatherPhone: fphone,
WardQuota: wardquota,
Add1 : add1,
Add2 : add2,
Country : country,
State: state,
City : city,
Pin : pin,
Padd1 : padd1,
Padd2 : padd2,
Pcountry : pcountry,
Pstate: pstate,
Pcity : pcity,
Ppin : ppin,
};

let jsonData = JSON.stringify(formData, null, 2);

// Convert the JSON data to a Blob.
const jsonBlob = new Blob([jsonData], { type: 'application/json' });

// Save the JSON file.
const jsonFileName = 'formData.json';
const jsonLink = document.createElement('a');

jsonLink.download = jsonFileName;

if (window.webkitURL != null) {
jsonLink.href = window.webkitURL.createObjectURL(jsonBlob);
} else {
jsonLink.href = window.URL.createObjectURL(jsonBlob);
//   jsonLink.style.display = 'none';
document.body.appendChild(jsonLink);
}

jsonLink.click();

}   


let saveFile = () => {


let data =
'Name: ' + name + '\r\n' +
'Gender: ' + gender + '\r\n' +
'DOB: ' + day + month + year + '\r\n' +
'Indian: ' + indian + '\r\n' +
'Reservation: ' + reservation + '\r\n' +
'Minority: ' + minority + '\r\n' +
'Email: ' + pemail + '\r\n' +
'Alternate Email: ' + aemail + '\r\n' +
'Mobile: ' + pphone + '\r\n' +
'Alternate Mobile: ' + aphone + '\r\n' +
'Domicile: ' + domicile + '\r\n' +
'Orphan: ' + orphan + '\r\n' +
'Mother Name: ' + mname + '\r\n' +
'Mother Occupation: ' + mocc + '\r\n' +
'Mother Office: ' + moff + '\r\n' +
'Mother Phone: ' + mphone + '\r\n' +
'Father Name: ' + fname + '\r\n' +
'Father Occupation: ' + focc + '\r\n' +
'Father Office: ' + foff + '\r\n' +
'Father Phone: ' + fphone + '\r\n' +
'Ward Quota: ' + wardquota + '\r\n' +
'Corr-Address: ' + add1 + ' ' + add2 + ' ' + country + ' ' + state + ' ' + city + ' ' + pin + '\r\n' +
'Perm-Address: ' + padd1 + ' ' + padd2 + ' ' + pcountry + ' ' + pstate + ' ' + pcity + ' ' + ppin + '\r\n';


console.log(data);

// Rest of your code for saving the file...



// Convert the text to BLOB.
const textToBLOB = new Blob([data], { type: 'text/plain' });
const sFileName = 'formData.txt';	   // The file to save the data.

let newLink = document.createElement("a");
newLink.download = sFileName;

if (window.webkitURL != null) {
newLink.href = window.webkitURL.createObjectURL(textToBLOB);
}
else {
newLink.href = window.URL.createObjectURL(textToBLOB);
newLink.style.display = "none";
document.body.appendChild(newLink);
}

newLink.click(); 


localStorage.setItem("Fullname", name);
localStorage.setItem("gender", gender);
localStorage.setItem("dob", day + month + year);
localStorage.setItem("indian", indian);
localStorage.setItem("reservation", reservation);
localStorage.setItem("minor", minority);
localStorage.setItem("pemail",pemail);
localStorage.setItem("aemail",aemail);
localStorage.setItem("phone",pphone);
localStorage.setItem("aphone",aphone);
localStorage.setItem("domicile", domicile);
localStorage.setItem("orphan", orphan);
localStorage.setItem("mname", mname);
localStorage.setItem("mocc", mocc);
localStorage.setItem("moff", moff);
localStorage.setItem("mphone", mphone);
localStorage.setItem("fname", fname);
localStorage.setItem("focc", focc);
localStorage.setItem("foff", foff);
localStorage.setItem("fphone", fphone);
localStorage.setItem("wardquota", wardquota);
localStorage.setItem("corr-address", add1 + add2 + country + city + pin);
localStorage.setItem("permanentaddress", padd1 + padd2 + pcountry + pcity + ppin);


var getname = localStorage.getItem("Fullname");
var getgender = localStorage.getItem("gender");
var birthdate = localStorage.getItem("dob");
var storedIndian = localStorage.getItem("indian");
var getReservation = localStorage.getItem("reservation");
var getminor =localStorage.getItem("minor", minority);
var getpemail = localStorage.getItem("pemail",pemail);
var getaemail = localStorage.getItem("aemail",aemail);
var getpphone = localStorage.getItem("phone",pphone);
var getaphone = localStorage.getItem("aphone",aphone);
var getdomicile = localStorage.getItem("domicile", domicile);
var getorphan = localStorage.getItem("orphan", orphan);
var getmname = localStorage.getItem("mname", mname);
var getmocc = localStorage.getItem("mocc", mocc);
var getmoff = localStorage.getItem("moff", moff);
var getmphone = localStorage.getItem("mphone", mphone);
var getfname = localStorage.getItem("fname", fname);
var getfocc = localStorage.getItem("focc", focc);
var getfoff = localStorage.getItem("foff", foff);
var getfphone = localStorage.getItem("fphone", fphone);
var getwardquota = localStorage.getItem("wardquota", wardquota);
var getcorradd = localStorage.getItem("corr-address", add1 + add2 + country + city + pin);
var getpermadd = localStorage.getItem("permanentaddress", padd1 + padd2 + pcountry + pcity + ppin);



console.log(getname);
console.log(getgender);
console.log(birthdate);
console.log(storedIndian); 
console.log(getReservation);
console.log(getminor);
console.log(getpemail);
console.log(getaemail);
console.log(getpphone);
console.log(getaphone);
console.log(getdomicile);
console.log(getorphan);
console.log(getmname);
console.log(getmocc);
console.log(getmoff);
console.log(getmphone);
console.log(getfname);
console.log(getfocc);
console.log(getfoff);
console.log(getfphone);
console.log(getwardquota);
console.log(getcorradd);
console.log(getpermadd);
}




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


function validate(tabIndex) {
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



let personalForm = document.getElementById("personalForm");
personalForm.addEventListener('onSubmit', () => validate());



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

}


function save(){
  alert("Saved for later");
}




function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-links");
    for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  

  
