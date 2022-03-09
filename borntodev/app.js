
function G() {
   let gpa
    let value = document.getElementById("bb").value
    let value2 = document.getElementById("bb2").value
    if (value2=='A'){
         gpa = 4.0;
    } 
    let gpa2
    gpa2 = gpa*value;
   document.getElementById("ww").value =gpa.toFixed(2);

 }


