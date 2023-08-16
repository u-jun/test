async function api() {
    fetch("https://yesno.wtf/api")
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            const word = json["answer"];
            const targetElement = document.getElementById("target");
            targetElement.textContent = word;
            
            // YESかNOかでスタイルを変える
            if (word === "yes") {
                targetElement.className = "red";
            } else if (word === "no") {
                targetElement.className = "blue";
            }
        });
}