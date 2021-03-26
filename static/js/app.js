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

