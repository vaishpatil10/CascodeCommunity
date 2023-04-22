function validateForm() {
  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regName = /\d+$/g;
    let x = document.forms["myform"]["name"].value;
    if (x == "" || regName.test(x)) {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myform"]["email"].value;
    if (y == "" || ! regEmail.test(y)) {
      window.alert("Please enter a valid e-mail address.");
      y.focus();
      return false;
    }
    let z = document.forms["myform"]["age"].value;
    if (z <= 0){
      alert("Age should not be negative or zero");
      return false;
    }

  }