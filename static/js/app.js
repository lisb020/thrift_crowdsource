function buildTable() {
  /* data route */
  const url = "/api/clothes";
  d3.json(url).then(function(response) {
    
    keyOrder = ["color", "condition", "item", "maxprice", "name", "notes", "size"];
    console.log(response);

    for (let i = 0; i < response.length; i++){
      for (const key of keyOrder){
          if (key == "item"){
            d3.select(".underHeader")
            .append("div")
            .attr("class", function(){return ("row rowData" + i)})
            .append("div")
            .classed("col-md items", true)
            .append("p")
            .text(response[i][key]);
          }
          else {
          let class2 = ".rowData" + i;
          d3.select(class2)
          .append("div")
          .classed("col-md items", true)
          .append("p")
          .text(response[i][key]);
          };
      };
    };
  });
};
buildTable();
// function Test2() {
//   /* data route */
//   const response = [ 
//     {
//         "color": "Blue",
//         "condition": "Like New",
//         "item": "Rain Pants",
//         "maxprice": 500.0,
//         "name": "Lisa",
//         "notes": "none",
//         "size": "3T"
//     },
//     {
//         "color": "Blue",
//         "condition": "Like New",
//         "item": "Rain Pants",
//         "maxprice": 500.0,
//         "name": "Lisa",
//         "notes": "none",
//         "size": "3T"
//     },
//     {
//         "color": "Green",
//         "condition": "ew",
//         "item": "Jeans",
//         "maxprice": 4,
//         "name": "Lulu",
//         "notes": "yane",
//         "size": "6"
//     }
//   ];
//   let keyOrder = ["item", "size", "name", "color", "maxprice","condition", "notes"];

//   // for (let responses of response) {
//   //   console.log(Object.entries(responses))
//   //   let rows = d3.select(".underHeader")
//   //       .append("div")
//   //       .classed("row rowData", true);
//   //     rows.selectAll(".items")  
//   //       .data(Object.entries(responses))
//   //       .enter()
//   //       .append("div")
//   //       .classed("col-md items", true)
//   //       .append("p")
//   //       .text(d => d[1]);
//   // };
//     let data = response[0];
//     console.log(data);
//     console.log(response);
//   // let rows = d3.select(".underHeader").selectAll(".rowData")
//   //       .data(response) 
//   //       .enter() 
//   //       .append("div")
//   //       .classed("row rowData", true);
//   //     for (item in data){
//   //       console.log(`key: ${item}: value: ${data[item]}`)
//   //     }
//   //for (entry of response){ 
//     for (let i = 0; i < response.length; i++){
//     for (const key of keyOrder){
//         console.log(key);
//         if (key == "item"){
//           d3.select(".underHeader")
//           .append("div")
//           .attr("class", function(){return ("row rowData" + i)})
//           .append("div")
//           .classed("col-md items", true)
//           .append("p")
//           .text(response[i][key]);
//         }
//         else {
//         let class2 = ".rowData" + i;
//         d3.select(class2)
//         .append("div")
//         .classed("col-md items", true)
//         .append("p")
//         .text(response[i][key]);
//         };
//     };
//   };
      
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
// Test2();