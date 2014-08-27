// ==UserScript==
// @name         BossPage
// @namespace    http://jiec.github.io/
// @version      1.1
// @description  Boss Page for all
// @include      *
// ==/UserScript==

function boss() {
    var headbar = document.createElement("div");
    headbar.id = "bosshead";
    headbar.style.position = "fixed";
    headbar.style.top = "0px";
    headbar.style.left = "0px";
    headbar.style.zIndex = 9999;
    
    var headImg = new Image();
    headImg.src = "https://cloud.githubusercontent.com/assets/1318371/4039966/16a49d44-2cd8-11e4-9863-60c6097bf062.png";
    headImg.onload = function() {
    	var headbar = document.querySelector("#bosshead");
        headbar.style.backgroundImage = "url(" + headImg.src + ")";
        headbar.style.width = headImg.naturalWidth + "px";
    	headbar.style.height = headImg.naturalHeight + "px";
    }
    
    document.body.appendChild(headbar);
    document.body.style.background = "#ccd0d5";

    var toggle = document.createElement("div");
    toggle.id = "bosstoggle";
    toggle.style.width = "20px";
    toggle.style.height = "20px";
    toggle.style.position = "fixed";
    toggle.style.top = "88px";
    toggle.style.left = "385px";
    toggle.style.zIndex = 99999;
    toggle.addEventListener("click", toggleColor, false)
    headbar.appendChild(toggle);
    
    var wrapper = document.createElement("div");
    wrapper.id = "bosswrapper";
    wrapper.style.margin = "0 auto";
    wrapper.style.maxWidth = "85%";
	wrapper.style.minWidth = "960px";
    wrapper.style.overflow = "hidden";
    wrapper.style.webkitFilter = "grayscale(1)";

    
    var content = document.createElement("div");
    content.style.display = "block";
    content.style.float = "left";
    content.style.padding = "100px";
    content.style.marginTop = "200px";
    content.style.marginLeft = "10px";
    content.style.marginBottom = "60px";
    content.style.width = "100%";
    
    content.style.border = "1px solid #a9b0b8";
    content.style.backgroundColor = "#ffffff";
    content.style.boxShadow = "0 0 2em rgba(0, 0, 0, 0.2)";
    
    wrapper.appendChild(content);
    document.body.appendChild(wrapper);
    
    var all = document.querySelectorAll("body > *");
    for (var i = 0; i < all.length; i++) {
        if (all[i].id !== "bosshead") {
        	content.appendChild(all[i]);
        }
    }
}

function toggleColor() {
	var wrapper = document.querySelector("#bosswrapper");
    if (wrapper.style.webkitFilter === "") {
    	wrapper.style.webkitFilter = "grayscale(1)";
    } else {
        wrapper.style.webkitFilter = "";
    }
}

boss();
