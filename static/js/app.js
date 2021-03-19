function buildTable() {
  /* data route */
  const url = "/api/clothes";
  d3.json(url).then(function(response) {

    console.log(response);

    const data = response;
    //const col = d3.select("#items").append("div").classed("col-md entry", true);
    d3.select("#items").selectAll(".entry")
      .data(data)
      .enter()
      .append("div")
      .classed("col-md entry", true)
      .append("p")
      .text(data[0]);
      //.html(`<div class="col-md entry"><p>insert data</p></div>`)
  });
};
buildTable();