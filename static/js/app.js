// function buildTable() {
//   /* data route */
//   const url = "/api/clothes";
//   d3.json(url).then(function(response) {

//     console.log(response);

//     const data = response[0];
//     //const col = d3.select("#items").append("div").classed("col-md entry", true);
//     d3.select("#items").selectAll(".entry")
//       .data(data)
//       .enter()
//       .append("div")
//       .classed("col-md entry", true)
//       .append("p")
//       .text(function(keys, items){data.keys});
//       //.html(`<div class="col-md entry"><p>insert data</p></div>`)
//   });
// };
// buildTable();
function Test() {
  /* data route */
  const response = [{
    "item": ["pants", "shirt"],
    "size": ["3T", "6"],
    "name": ["Lisa", "Mary"],
    "color": ["blue", "dont care"],
    "maxprice": [500, 20],
    "condition": ["like new", "new"],
    "notes": ["nothing", "i like"]
  }];
  console.log(response);

    const data = response[0];
    //const col = d3.select("#items").append("div").classed("col-md entry", true);
    for (let i in data) {
      console.log("i",i,"data[i]", data[i]);
      for (let j in data[i]){
        console.log(data[i][j])
      }
  }
    d3.select("#items").selectAll(".entry")
      //.data(Object.keys(data))
      .data(Object.entries(data))
      .enter()
      .append("div")
      .classed("col-md entry", true)
      .append("p")
      .text((d) => d[1][0]);
      //.html(`<div class="col-md entry"><p>insert data</p></div>`)
};
Test();