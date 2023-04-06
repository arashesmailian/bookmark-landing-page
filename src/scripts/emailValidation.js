const email = document.querySelector("#email");
const submitBtn = document.querySelector("form button");
const inputContainer = document.querySelector(".input-container");
const exclamationIcon = document.querySelector(".input-container span");
const errorText = document.querySelector(".input-container em");

let regExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function check() {
  if (email.value.match(regExp)) {
    inputContainer.style.background = "inherit";
    inputContainer.style.padding = "0";
    exclamationIcon.style.display = "none";
    errorText.style.display = "none";
    submitBtn.style.marginBottom = "0";
    submitBtn.style.color = "white";
    submitBtn.style.background = "hsl(0, 94%, 66%)";
    submitBtn.style.border = "none";
  } else {
    exclamationIcon.style.display = "block";
    inputContainer.style.background = "hsl(0, 94%, 66%)";
    inputContainer.style.padding = "3px 0px 5px 3px";
    errorText.style.display = "block";
    submitBtn.style.marginBottom = "28px";
    submitBtn.style.color = "hsl(0, 94%, 66%)";
    submitBtn.style.background = "white";
    submitBtn.style.border = "2px solid hsl(0, 94%, 66%)";
  }
  if (email.value == "") {
    inputContainer.style.background = "inherit";
    inputContainer.style.padding = "0";
    exclamationIcon.style.display = "none";
    errorText.style.display = "none";
    submitBtn.style.marginBottom = "0";
    submitBtn.style.color = "white";
    submitBtn.style.background = "hsl(0, 94%, 66%)";
    submitBtn.style.border = "none";
  }
}
