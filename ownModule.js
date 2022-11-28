exports.myDateTime =
  function () //export statement makes the function or the module eligible to be reused
  {
    console.log("Confirming its execution");
    return Date(); //this function returns today's date
  };
