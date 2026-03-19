/* ================= REGISTER ================= */

function register(){

  let name  = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass  = document.getElementById("pass").value;

  if(name==="" || email==="" || pass===""){
    alert("Fill all fields");
    return;
  }

  if(pass.length < 6){
    alert("Password must be at least 6 characters");
    return;
  }

  let user = {
    name,
    email,
    pass
  };

  // Save user
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registered Successfully");

  window.location = "login.html";
}


/* ================= LOGIN ================= */

function login(){

  let email = document.getElementById("email").value;
  let pass  = document.getElementById("pass").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if(!user){
    alert("No account found. Please register.");
    return;
  }

  if(email === user.email && pass === user.pass){

    alert("Login Successful");

    // Session
    localStorage.setItem("logged","yes");

    // IMPORTANT: Save userId for AWS
    localStorage.setItem("userId", user.email);

    window.location = "dashboard.html";

  }else{

    alert("Invalid email or password");

  }
}

