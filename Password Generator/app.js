let includeNumbers = document.getElementById("num");
let includeLetters = document.getElementById("lett");
let includeSpecialChars = document.getElementById("char");

let backNum = document.getElementById("backNum");
let backLett = document.getElementById("backLett");
let backChar = document.getElementById("backChar");

function Num(){
  includeNumbers.classList.toggle("toggle-num");
  backNum.classList.toggle("toggle-back-num");
  includeNumbers.checked = !includeNumbers.checked;
}
function Lett(){
  includeLetters.classList.toggle("toggle-lett");
  backLett.classList.toggle("toggle-back-lett");
  includeLetters.checked = !includeLetters.checked;
}
function Char(){
  includeSpecialChars.classList.toggle("toggle-char");
  backChar.classList.toggle("toggle-back-char");
  includeSpecialChars.checked = !includeSpecialChars.checked;

}

document.getElementById("generateBtn").addEventListener("click", function(){
  var length = document.getElementById("length").value;

  var password = generatePassword(length, includeNumbers.checked, includeLetters.checked, includeSpecialChars.checked )
  document.getElementById("password").value = password;
});

  document.getElementById("length").addEventListener("click", function(){
  document.getElementById("lengthValue").textContent = this.value;

});

function generatePassword(length, includeNumbers, includeLetters, includeSpecialChars ){
  var charset = "";
  if (includeNumbers){
    charset += "0123456789";
  }
  if (includeLetters){
    charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeSpecialChars){
    charset += "!@#$%^&*()_-+=<>?/{}~|";
  }

var password = "";
for (var i = 0; i < length; i++){
  var randomIndex = Math.floor(Math.random()* charset.length);
  password += charset.charAt(randomIndex);
}
return password;

}
