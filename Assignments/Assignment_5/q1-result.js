function dataRetrieve() {
    var cnum = sessionStorage.getItem("cnum");
    var cname = sessionStorage.getItem("cname");
    var email = sessionStorage.getItem("email");
    var mob = sessionStorage.getItem("mob");
    var city = sessionStorage.getItem("city");
    var state = sessionStorage.getItem("state");
    var pincode = sessionStorage.getItem("pincode");

    var checks = sessionStorage.getItem("checks");
    checks = JSON.parse(checks);

    document.getElementById("cnum").innerText = cnum;
    document.getElementById("cname").innerText = cname;
    document.getElementById("email").innerText = email;
    document.getElementById("mob").innerText = mob;
    document.getElementById("city").innerText = city;
    document.getElementById("state").innerText = state;
    document.getElementById("pincode").innerText = pincode;

    document.getElementById("checks").innerText = "";
    for(var i = 0; i < checks.length; i++) {
        document.getElementById("checks").innerText += checks[i];
        if (checks[i+1] != null) {
            document.getElementById("checks").innerText += ", ";
        }
    }
}