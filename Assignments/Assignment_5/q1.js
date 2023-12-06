function formSubmit() {
    var bool = true;
    // Fetching all form values
    var cnum = document.getElementById("cnum").value;
    var cname = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("cnf_pass").value;
    var mob = document.getElementById("mob").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pincode = document.getElementById("pincode").value;

    var checkArr = [];
    var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (var i = 0; i < checkboxes.length; i++) {
        checkArr.push(checkboxes[i].value);
    }

    // Validating the data
    if (cnum == "") {
        document.getElementById("cnumErr").innerText = "Cnum cannot be empty";
        bool = false;
    }
    if (isNaN(cnum)) {
        document.getElementById("cnumErr").innerText = "Cnum should be a number";
        bool = false;
    }
    if (cname == "") {
        document.getElementById("cnameErr").innerText = "Cname cannot be empty";
        bool = false;
    }
    if (email == "") {
        document.getElementById("emailErr").innerText = "Email cannot be empty";
        bool = false;
    }
    if (city == "") {
        document.getElementById("cityErr").innerText = "City cannot be empty";
        bool = false;
    }
    if (state == "Select State") {
        document.getElementById("stateErr").innerText = "State name is required";
        bool = false;
    }
    if (pincode < 100000 || pincode > 999999) {
        document.getElementById("pincodeErr").innerText = "Pincode should be of 6 digit";
        bool = false;
    }
    if (checkArr.length < 2) {
        document.getElementById("checksErr").innerText = "Select atleast 2 checkbox";
        bool = false;
    }
    if (document.getElementById("pass").value != pass) {
        document.getElementById("passErr").innerText = "Password is not matching";
        bool = false;
    }
    else {
        document.getElementById("passErr").innerText = "Password has matched";
    }
    if (mob < 1000000000 || mob > 9999999999) {
        document.getElementById("mobErr").innerText = "Mobile should be of 10 digits";
    }

    // Saving the form data in session storage 
    sessionStorage.setItem("cnum",cnum);
    sessionStorage.setItem("cname",cname);
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("pass",pass);
    sessionStorage.setItem("mob",mob);
    sessionStorage.setItem("city",city);
    sessionStorage.setItem("state",state);
    sessionStorage.setItem("pincode",pincode);
    sessionStorage.setItem("checks", JSON.stringify(checkArr));

    // Redirecting to new html page after the data is saved
    if (bool) {
        window.location.href = "q1-result.html";
    }
}