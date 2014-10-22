// ==UserScript==
// @name         BossPage
// @namespace    http://jiec.github.io/
// @version      1.2
// @description  Boss Page for all
// @include      *
// ==/UserScript==

function boss() {
  document.body.style.background = "#ccd0d5";

  var headbar = document.createElement("div");
  headbar.id = "bosshead";
  headbar.style.position = "fixed";
  headbar.style.top = "0px";
  headbar.style.left = "0px";
  headbar.style.zIndex = 9999;

  var headImg = new Image();
  headImg.src = "https://cloud.githubusercontent.com/assets/1318371/4039966/16a49d44-2cd8-11e4-9863-60c6097bf062.png";
  headImg.onload = function () {
    var headbar = document.querySelector("#bosshead");
    headbar.style.backgroundImage = "url(" + headImg.src + ")";
    headbar.style.width = headImg.naturalWidth + "px";
    headbar.style.height = headImg.naturalHeight + "px";
  };

  var togglerColor = document.createElement("div");
  togglerColor.style.width = "20px";
  togglerColor.style.height = "20px";
  togglerColor.style.position = "fixed";
  togglerColor.style.top = "0px";
  togglerColor.style.left = "25px";
  togglerColor.style.zIndex = 99999;
  togglerColor.addEventListener("click", toggleColor, false);
  headbar.appendChild(togglerColor);

  var wrapper = document.createElement("div");
  wrapper.id = "bosswrapper";
  wrapper.style.margin = "0 auto";
  wrapper.style.maxWidth = "85%";
  wrapper.style.minWidth = "960px";
  wrapper.style.overflow = "hidden";
  wrapper.style.webkitFilter = "grayscale(1)";
  wrapper.style.filter = "grayscale(1)";

  var content = document.createElement("div");
  content.id = "bosscontent";
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

  var all = document.querySelectorAll("body > *");
  for (var i = 0; i < all.length; i++) {
    if (all[i].id !== "bosstoggle") {
      content.appendChild(all[i]);
    }
  }
  document.body.appendChild(headbar);
  document.body.appendChild(wrapper);
}

function unboss() {
  var all = document.querySelectorAll("#bosscontent > *");
  for (var i = 0; i < all.length; i++) {
    document.body.appendChild(all[i]);
  }
  document.body.removeChild(document.querySelector("#bosshead"));
  document.body.removeChild(document.querySelector("#bosswrapper"));
  document.body.style.background = document.querySelector("#bosstoggle").getAttribute("bosscolor");
}

function toggleBoss() {
  if (document.querySelector("#bosshead") === null) {
    boss();
  } else {
    unboss();
  }
}

function toggleColor() {
  var wrapper = document.querySelector("#bosswrapper");
  if (wrapper.style.webkitFilter === "") {
    wrapper.style.webkitFilter = "grayscale(1)";
    wrapper.style.filter = "grayscale(1)";
  } else {
    wrapper.style.webkitFilter = "";
    wrapper.style.filter = "";
  }
}

//don't run on frames or iframes
if (window.top != window.self) {
  return;
}

var togglerBoss = document.createElement("div");
togglerBoss.id = "bosstoggle";
togglerBoss.style.width = "20px";
togglerBoss.style.height = "20px";
togglerBoss.style.position = "fixed";
togglerBoss.style.top = "0px";
togglerBoss.style.left = "0px";
togglerBoss.style.zIndex = 99999;
togglerBoss.setAttribute("bosscolor", document.body.style.background);
togglerBoss.addEventListener("click", toggleBoss, false);
boss();
document.body.appendChild(togglerBoss);
