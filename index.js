var txtInput = document.querySelector("#txt-input")
var btnTranslate = document.querySelector("#btn-translate")
var txtOutput= document.querySelector("#txt-output")

var serverUrl= "https://api.funtranslations.com/translate/pirate.json"


function finalString(textInput)
{
    return serverUrl+"?"+"text="+textInput 

}

function errorHandler(error)
{
    console.log(error)
    alert("Smething went wrong pease try agian after some time")
}

function clickHandler()
{
    fetch(finalString(txtInput.value)).then(response=>response.json()).then(json=>
        {
            
            var translatedText = json.contents.translated;
            txtOutput.innerHTML = translatedText
        }).catch(errorHandler)

}



btnTranslate.addEventListener("click", clickHandler)
