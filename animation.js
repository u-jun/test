async function api() {
    const targetElement = document.getElementById("target");
    
    fetch("https://yesno.wtf/api")
        .then(function (data) {
            return data.json();
        })
        .then(function (json) {
            const word = json["answer"];
            
            targetElement.textContent = word;
            
            // アニメーションクラスを一度削除してから追加する
            targetElement.classList.remove("slide-in", "red", "blue");
            
            // YESかNOかでスタイルを変える
            if (word === "yes") {
                targetElement.classList.add("red");
                setTimeout(function() {
                    targetElement.classList.add("slide-in");
                }, 10); // 適切な遅延時間を設定
            } else if (word === "no") {
                targetElement.classList.add("blue");
                setTimeout(function() {
                    targetElement.classList.add("slide-in");
                }, 10); // 適切な遅延時間を設定
            }
        });
}
