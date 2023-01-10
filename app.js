var btn = document.querySelector("#translatebtn");
var input = document.querySelector("#input-ctn");
var output = document.querySelector("#output-ctn");

var serverURL = "https://api.funtranslations.com/translate/chef.json";

function errorHandler(error) {
  console.log("something's fishy?", error);
  alert("something's fishy? try again later");
}

function convertText() {
  var ipText = input.value;
  if (ipText == "") {
    alert("Please enter some text");
    return;
  }

  const url = `${serverURL}?text=${ipText}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      var outputText = json.contents.translated;
      output.innerText = outputText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", convertText);
