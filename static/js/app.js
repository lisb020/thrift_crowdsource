function buildTable() {
  /* data route */
  const url = "/api/clothes";
  d3.json(url).then(function(response) {

    console.log(response);

    const data = response;

    for (let responses of data) {
    let rows = d3.select(".underHeader")
        .append("div")
        .classed("row rowData", true);
      rows.selectAll(".items")  
        .data(Object.entries(responses))
        .enter()
        .append("div")
        .classed("col-md items", true)
        .append("p")
        .text(d => d[1]);
    };
  });
};
buildTable();
// function Test() {
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
// ];
//     const data = response;

//   for (let responses of data) {
//    let rows = d3.select(".underHeader")
//       .append("div")
//       .classed("row rowData", true);
//     rows.selectAll(".items")  
//       .data(Object.entries(responses))
//       .enter()
//       .append("div")
//       .classed("col-md items", true)
//       .append("p")
//       .text(d => d[1]);
//   };
// };
// Test();