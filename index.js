// JavaScript Document

function generatePassword() {
    let numChar = "0123456789"
    let uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowChar = "abcdefghijklmnopqrstuvwxyz"
    let speChar = "!\"£$%^&*()-=_+[]#{}~;':@,./<>?"
    let allChar = [numChar, uppChar, lowChar, speChar]
    let noticification = document.getElementById("noticification")
    let pLength = document.getElementById("pass-length").value
    let passOneEl = document.querySelector("#pass-one")
    let passTwoEl = document.querySelector("#pass-two")
    let passThreeEl = document.querySelector("#pass-three")
    let passFourEl = document.querySelector("#pass-four")
    
    let passwords = []
    let passwordStr = ""
    
    
    
    if (pLength === null) {
        noticification.textContent = "Please enter password length"
        noticification.style.opacity = "0.95"
        noticification.style.background = "red"
    } else if (pLength < 4) {
        noticification.textContent = "Please enter password length"
        noticification.style.opacity = "0.95"
        noticification.style.background = "red"
    } else {
        noticification.textContent = ""
        noticification.style.opacity = "0"
        noticification.style.background = ""
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < pLength; j++) {
                let randArrIndex = Math.floor(Math.random() * allChar.length)
                let randCharIndex = Math.floor(Math.random() * allChar[randArrIndex].length) 
                passwordStr += allChar[randArrIndex].charAt(randCharIndex)
            }
            passwords[i] = passwordStr
            passwordStr = ""
        }
        passOneEl.setAttribute('value', passwords[0]) 
        passTwoEl.setAttribute('value', passwords[1]) 
        passThreeEl.setAttribute('value', passwords[2]) 
        passFourEl.setAttribute('value', passwords[3]) 
    }
} 

function copyToClipboard(text) {
  var input = document.body.appendChild(document.createElement("input"));
  input.value = text;
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  
    noticification.textContent = "Copied to clipboard!"
    noticification.style.opacity = "0.95"
    noticification.style.background = "#10B981"
}