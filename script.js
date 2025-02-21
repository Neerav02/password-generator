const passBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890"
const symbol = "!@#$%^&*()_-+={}[]<>?/~"

const allchar = upperCase + lowerCase + number + symbol;
function generatePass(){
    let pass = " ";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > pass.length){
        pass += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passBox.value = pass;
}

function copyPass(){
    passBox.select();
    document.execCommand("copy");

}