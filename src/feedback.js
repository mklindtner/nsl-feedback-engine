function feedback(collectionId, button1, button2, button3) {
    var collectionId = document.currentScript.getAttribute("collectionId");
    var email = document.getElementById(document.currentScript.getAttribute("userId"));
    const paramSize = 3;

    for (var i = 1; i <= paramSize; i++) {
        var tmp = document.currentScript.getAttribute("button" + i);
        var tmp2 = document.getElementById(tmp);

        nslXmlRequest(i, tmp2);
    }

}

function nslXmlRequest(answerNum, button) {
    button.addEventListener("click", () => {
        var req = new XMLHttpRequest();
        req.open("POST", "https://feedbackengine002.azurewebsites.net/api/OutputTableNsl002");
        req.setRequestHeader("Content-type", "application/json");
        var data = JSON.stringify({
            "CollectionId": collectionId, "email": email.value,
            "answerNumber": answerNum, "answerText": button.innerHTML
        });
        req.send(data);
        button.style.display = "none";

        console.log(data);

    });
}

export default feedback;