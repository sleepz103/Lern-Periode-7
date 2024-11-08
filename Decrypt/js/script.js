// Variables
const submit = document.getElementById("submit");
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const Caesar = document.getElementById("caesar");
const Shift = document.getElementById("shift");
let decryptionMethod;

// Script
submit.addEventListener("click", decryptMessage);
Caesar.addEventListener("click", function()
{
    decryptionMethod = "Caesar";
});
Shift.addEventListener("click", function()
{
    decryptionMethod = "Shift";
});


function decryptMessage()
{
    document.getElementById("outcomes").textContent = "";
    if(decryptionMethod === "Caesar")
    {
        for (let i = 0; i < 26; i++)
            {
                DecodeCaesar(i);
            }
    }
    else
    {
        for (let i = 0; i < 26; i++)
            {
                DecodeShift(i);
            }
    }
}



function DecodeCaesar(shift)
{
    const p = document.createElement("p");
    let alphabetCurrent;
    let encryptedInput = document.querySelector("#encryptedInput").value;
    let letterEncrypted;
    let letterDecrypted;
    let letterEncryptedIndex;
    let letterDecryptedIndex;
    let decipheredMessage = "";


    for (let i = 0; i < encryptedInput.length; i++)
    {
        letterEncrypted = encryptedInput[i];
        
        isLetter = checkIfLetter(letterEncrypted) 

        if(letterEncrypted == letterEncrypted.toUpperCase())
        {
            alphabetCurrent = alphabetUpper;
        }
        else
        {
            alphabetCurrent = alphabetLower;
        }

        if (isLetter)
        {
            shift = shift % 26;
            letterEncryptedIndex = alphabetCurrent.indexOf(letterEncrypted);
            letterDecryptedIndex = letterEncryptedIndex - shift;

            while (letterDecryptedIndex < 0)
            {
                letterDecryptedIndex += 26;
            }
            
            letterDecrypted = alphabetCurrent[letterDecryptedIndex];
            decipheredMessage += letterDecrypted;
        }
        else
        {
            letterDecrypted = letterEncrypted;
            decipheredMessage += letterDecrypted;
        }
    }
    p.textContent = decipheredMessage;
    document.getElementById("outcomes").append(p);
}

function DecodeShift(shift)
{
    const p = document.createElement("p");
    let alphabetCurrent;
    let encryptedInput = document.querySelector("#encryptedInput").value;
    let letterEncrypted;
    let letterDecrypted;
    let letterEncryptedIndex;
    let letterDecryptedIndex;
    let decipheredMessage = "";
    let a = 0;


    for (let i = 0; i < encryptedInput.length; i++)
    {
        letterEncrypted = encryptedInput[i];
        
        isLetter = checkIfLetter(letterEncrypted) 

        if(letterEncrypted == letterEncrypted.toUpperCase())
        {
            alphabetCurrent = alphabetUpper;
        }
        else
        {
            alphabetCurrent = alphabetLower;
        }

        if (isLetter)
        {
            shift = shift % 26;
            letterEncryptedIndex = alphabetCurrent.indexOf(letterEncrypted);
            letterDecryptedIndex = letterEncryptedIndex - shift - a;

            while (letterDecryptedIndex < 0)
            {
                letterDecryptedIndex += 26;
            }
            
            letterDecrypted = alphabetCurrent[letterDecryptedIndex];
            decipheredMessage += letterDecrypted;
        }
        else
        {
            letterDecrypted = letterEncrypted;
            decipheredMessage += letterDecrypted;
            a--;
        }
        a++;
    }
    p.textContent = decipheredMessage;
    document.getElementById("outcomes").append(p);
}

function checkIfLetter(c)
{
    return c.toLowerCase() != c.toUpperCase();
}