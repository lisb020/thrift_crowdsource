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
   }

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