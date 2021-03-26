$('body').on('click', '.btn', function(event){
  let userConfirm = confirm("Are you sure you want to delete this record?");
  if (userConfirm){
    let id=event.target.id;
    console.log(id)
    //trigger function to remove from database
    const url = "/remove"

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id)
    });
  };
});
// function buildTable() {
//   /* data route */
//   const url = "/api/clothes";
//   d3.json(url).then(function(response) {
    
//     keyOrder = ["item", "size", "name", "color", "maxprice","condition", "notes", "id"];

//     for (let i = 0; i < response.length; i++){
//       for (const key of keyOrder){
//           if (key == "item"){
//             let rowCol = d3.select(".underHeader")
//             .append("div")
//             .attr("class", function(){return ("row rowData" + i)})
//             .append("div")
//             .classed("col-md items", true)
//             .append("p")
//             .text(response[i][key]);
//           }
//           else if (key == "id"){
//             let class2 = ".rowData" + i;
//             let rowCol = d3.select(class2)
//             .append("div")
//             .classed("col-md items", true)
//             .html(`<button type='button' class='btn btn-primary btn-sm' id= 'id${response[i][key]}'>Remove</button>`);
//             }
          
//           else {
//           let class2 = ".rowData" + i;
//           let rowCol = d3.select(class2)
//           .append("div")
//           .classed("col-md items", true)
//           .append("p")
//           .text(response[i][key]);
//           };
//       };
//     };
//   });
// };
// buildTable();

