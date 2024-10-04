const char =
[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
    ")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let isPassThere = false;

let passEl = document.getElementById("random-pass1")
let passEl2 = document.getElementById("random-pass2")

let randomIndex = Math.floor( Math.random() * char.length )
let randomIndexTwo = Math.floor( Math.random() * char.length )

let password = char[randomIndex];
let passwordTwo = char[randomIndexTwo];


function generatePassword() {

    for (let i = 1; i < 16; i++) {

        if (password.length < i) {
    
            randomIndex = Math.floor( Math.random() * char.length )
            password += char[randomIndex];
        }
    
    }

    passEl.textContent = password
    isPassThere = true;

    for (let i = 1; i < 16; i++) {

        if (passwordTwo.length < i) {
    
            randomIndexTwo = Math.floor( Math.random() * char.length )
            passwordTwo += char[randomIndexTwo];
        }
    
    }

    passEl2.textContent = passwordTwo;
    isPassThere = true;

}

function newPass() {

    if (isPassThere === true) {
        password = "";
        passEl.textContent = "";
    }

    if (isPassThere === true) {
        passwordTwo = "";
        passEl2.textContent = "";
    }

    generatePassword();
    
}
