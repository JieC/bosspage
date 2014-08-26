// ==UserScript==
// @name         BossPage
// @namespace    http://jiec.github.io/
// @version      1.0
// @description  Boss Page for all
// @include      *
// ==/UserScript==

function boss() {

    var headbar = document.createElement("div");
    headbar.style.backgroundImage = "url(https://cloud.githubusercontent.com/assets/1318371/4039966/16a49d44-2cd8-11e4-9863-60c6097bf062.png)";
    headbar.style.width = "1587px";
    headbar.style.height = "140px";
    headbar.style.position = "fixed";
    headbar.style.top = "0px";
    headbar.style.zIndex = 9999;
    
    document.body.appendChild(headbar);
    document.body.style.background = "#ccd0d5";

    var wrapper = document.createElement("div");
    wrapper.style.margin = "0 auto";
    wrapper.style.width = "1160px";
    wrapper.style.height = "500px";
    
    var content = document.createElement("div");
    content.style.display = "block";
    content.style.float = "left";
    content.style.padding = "100px";
    content.style.marginTop = "200px";
    content.style.marginLeft = "10px";
    content.style.marginBottom = "60px";
    content.style.width = "960px";
    content.style.border = "1px solid #a9b0b8";
    content.style.backgroundColor = "#ffffff";
    content.style.boxShadow = "0 0 2em rgba(0, 0, 0, 0.2)";
    content.style.webkitFilter = "grayscale(1)";
    
    wrapper.appendChild(content);
    document.body.appendChild(wrapper);
    
    var all = document.querySelectorAll("body > *");
    for (var i = 0; i < all.length; i++) {
        if (all[i].id !== "headbar") {
        	content.appendChild(all[i]);
        }
    }
}

boss();
