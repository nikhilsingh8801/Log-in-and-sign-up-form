const title = document.getElementById('title');
const namefield = document.getElementById('namefield');
const signinbtn = document.getElementById('signinbtn');
const signupbtn = document.getElementById('signupbtn');


signupbtn.onclick = function(){
    title.innerHTML = "Signup"
    namefield.style.display = "block";
}

signinbtn.onclick = function(){
    title.innerHTML = "Login"
    namefield.style.display = "none";
}