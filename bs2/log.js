const form1 = document.querySelector("form")
const wremail= document.getElementById("email")
const wrpassword= document.getElementById("passworld")
const change = document.getElementById("change")
const error = document.getElementById("error")
const labelselec = document.getElementById("label")
let check

change.addEventListener("click", (e) =>{
   if(check){
    e.target.textContent = "ad ile daxil ol";
    label.textContent = "adinizi daxil edin";
    label.setAttribute("for", "name");
    wremail.setAttribute("type", "text");
    wremail.setAttribute("id", "name");
    check = false;
} else{
    e.target.textContent = " email ile daxil ol";
    label.textContent = "emaili daxil edin";
    label.setAttribute("for","email");
    wremail.setAttribute("type","email");
    check = true;
}
  form1.addEventListener("submit", (e) =>{
        e.defaultPrevented();
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        console.log(wremail.value , wrpassword.value)
        if(wremail.getAttribute("type") === "text"){
            if (
                wremail.value === user.name &&
                wrpassword.value === user.password
              ) {
                window.location.href =
                  "C:\Users\PREDATOR\bs2\bs2.html";
              } else {
                error.textContent = "Cənab tankçı düzgün ad və ya parol daxil edin";
                error.style.color = "red";
              }
              
        }

  }
  )
}
)
