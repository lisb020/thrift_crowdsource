//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

var myTextbox = document.getElementById('inputMaxprice');
myTextbox.addEventListener('keypress', checkName, false);

function checkName(evt) {
    var charCode = evt.key;
    console.log(charCode);
//     if (charCode != 0) {
//       if (charCode < 97 || charCode > 122) {
//         evt.preventDefault();
//         displayWarning(
//           "Please use lowercase letters only."
//           + "\n" + "charCode: " + charCode + "\n"
//         );
//       }
//     }
   };
function validateMyForm(){
  $('body').on('click', '.btn', function(event){
    let myTextbox = document.getElementById('inputMaxprice');
    if (!isNaN(myTextbox.value)) {
      alert('is a number', myTextbox.value);
      return true;
    } 
    else {
      myTextbox.style.borderColor = "#e60000";
      //document.getElementById("qty").innerHTML = "&nbsp;&nbsp;enter valid quantity.*";
      myTextbox.focus();
      alert('not a number, form not submitted', myTextbox.value);
      return false;
    }
      //if d3.select
  });
};

// var warningTimeout;
// var warningBox = document.createElement("div");
// warningBox.className = "warning";

// function displayWarning(msg) {
//   warningBox.innerHTML = msg;

//   if (document.body.contains(warningBox)) {
//     window.clearTimeout(warningTimeout);
//   } else {
//     // insert warningBox after myTextbox
//     myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
//   }

//   warningTimeout = window.setTimeout(function() {
//       warningBox.parentNode.removeChild(warningBox);
//       warningTimeout = -1;
//     }, 2000);
// }