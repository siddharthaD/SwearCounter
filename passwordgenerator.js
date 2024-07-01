const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("passOptionOne")
let passwordTwo = document.getElementById("passOptionTwo")
let message = document.getElementById("message")

function generateTwoPasswords()
{

    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
}

function generatePassword(length=16)
{
    let password = "";
    for(let i= 0;i<16;i++)
    {
        password += getRandomChar()
    }
    return password
}

function getRandomChar()
{
    return characters[Math.floor(Math.random() * characters.length)];
}

async function copyPassword(passwordOption = 1) {

        try {
            if (passwordOption === 1) {
                await navigator.clipboard.writeText(passwordOne.textContent);
                message.textContent = "password copied to clipboard"
            }
            else
            {
                await navigator.clipboard.writeText(passwordTwo.textContent);
                message.textContent = "password copied to clipboard"
            }


        } catch (error) {
            console.error(error.message);
        }

}