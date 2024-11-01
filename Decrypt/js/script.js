const button = document.getElementById("btn");
button.addEventListener("click", possibleOutcomes);

const p = document.createElement("p");

const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";

function possibleOutcomes()
{
    for (let i = 0; i < 26; i++)
    {
        DecodeCaesar(i);
    }
}



function DecodeCaesar(shift)
{
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

        if(letterEncrypted == letterEncrypted.toUpperCase())
        {
            console.log("alphabetUpper will be used");
            alphabetCurrent = alphabetUpper;
        }
        else
        {
            console.log("alphabetLower will be used");
            alphabetCurrent = alphabetLower;
        }
        

        if (isLetter(letterEncrypted))
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



function isLetter(c)
{
    return c.toLowerCase() != c.toUpperCase();
}