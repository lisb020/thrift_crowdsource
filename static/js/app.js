function buildTable() {
  /* data route */
  const url = "/api/clothes";
  d3.json(url).then(function(response) {

    console.log(response);

    //const data = response;
  });
};
buildTable();