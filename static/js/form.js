function validateMyForm(){
  $('body').on('click', '.btn', function(event){
    let myTextbox = document.getElementById('inputMaxprice');
    document.getElementsByClassName('error').innerHTML = '';
    if (!isNaN(myTextbox.value)) {
      alert('is a number');
      return true;
    } 
    else {
      myTextbox.style.borderColor = "#e60000";
      document.getElementById('errorPrice').innerHTML = "&nbsp;&nbsp;*Enter numbers only.";
      myTextbox.focus();
      alert('Check inputs, form not submitted');
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