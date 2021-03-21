$('body').on('click', '.btn', function(event){
  let userConfirm = confirm("Are you sure you want to delete this record?");
  if (userConfirm){
    let id=event.target.id;
    //trigger function to remove from database
  }
});
// function buildTable() {
//   /* data route */
//   const url = "/api/clothes";
//   d3.json(url).then(function(response) {
    
//     keyOrder = ["item", "size", "name", "color", "maxprice","condition", "notes", "id"];
//     console.log(response);

//     for (let i = 0; i < response.length; i++){
//       for (const key of keyOrder){
//           if (key == "item"){
//             d3.select(".underHeader")
//             .append("div")
//             .attr("class", function(){return ("row rowData" + i)})
//             .append("div")
//             .classed("col-md items", true)
//             .append("p")
//             .text(response[i][key]);
//           }
//           else {
//           let class2 = ".rowData" + i;
//           d3.select(class2)
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
function Test2() {
  /* data route */
  const response = [ 
    {
        "color": "Blue",
        "condition": "Like New",
        "item": "Rain Pants",
        "maxprice": 500.0,
        "name": "Lisa",
        "notes": "none",
        "size": "3T",
        "id":1
    },
    {
        "color": "Blue",
        "condition": "Like New",
        "item": "Rain Pants",
        "maxprice": 500.0,
        "name": "Lisa",
        "notes": "none",
        "size": "3T",
        "id":2
    },
    {
        "color": "Green",
        "condition": "ew",
        "item": "Jeans",
        "maxprice": 4,
        "name": "Lulu",
        "notes": "yane",
        "size": "6",
        "id":3
    }
  ];
  let keyOrder = ["item", "size", "name", "color", "maxprice","condition", "notes", "id"];

  // for (let responses of response) {
  //   console.log(Object.entries(responses))
  //   let rows = d3.select(".underHeader")
  //       .append("div")
  //       .classed("row rowData", true);
  //     rows.selectAll(".items")  
  //       .data(Object.entries(responses))
  //       .enter()
  //       .append("div")
  //       .classed("col-md items", true)
  //       .append("p")
  //       .text(d => d[1]);
  // };
    console.log(response);
  // let rows = d3.select(".underHeader").selectAll(".rowData")
  //       .data(response) 
  //       .enter() 
  //       .append("div")
  //       .classed("row rowData", true);
  //     for (item in data){
  //       console.log(`key: ${item}: value: ${data[item]}`)
  //     }
  //for (entry of response){ 
    for (let i = 0; i < response.length; i++){
    for (const key of keyOrder){
        console.log(key);
        if (key == "item"){
          let rowCol = d3.select(".underHeader")
          .append("div")
          .attr("class", function(){return ("row rowData" + i)})
          .append("div")
          .classed("col-md items", true)
          .append("p")
          .text(response[i][key]);
        }
        else if (key == "id"){
          let class2 = ".rowData" + i;
          let rowCol = d3.select(class2)
          .append("div")
          .classed("col-md items", true)
          .html(`<button type='button' class='btn btn-primary btn-sm' id= 'id${response[i][key]}'>Remove</button>`);
          }
        
        else {
        let class2 = ".rowData" + i;
        let rowCol = d3.select(class2)
        .append("div")
        .classed("col-md items", true)
        .append("p")
        .text(response[i][key]);
        };
    };
  };
};
Test2();     
//       // This kind of works below
//       // let data = response[0]
//       // let rows = d3.select(".underHeader").selectAll(".rowData")
//       //       .data(response) 
//       //       .enter() 
//       //       .append("div")
//       //       .classed("row rowData", true);
//       // rows.selectAll(".items")
//       //   .data(Object.entries(response[0]))
//       //   .enter()
//       //   .append("div")
//       //   .classed("col-md items", true)
//       //   .append("p")
//       //   .text(d => d[1]);
// };
