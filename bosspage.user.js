// ==UserScript==
// @name         BossPage
// @namespace    http://jiec.github.io/
// @version      1.3
// @description  Boss Page for all
// @include      *
// ==/UserScript==

function boss() {
  document.body.style.background = "#FCFCFC";

  var dpi = 1.25;
  var headbar = document.createElement("div");
  headbar.id = "bosshead";
  headbar.style.position = "fixed";
  headbar.style.top = "0px";
  headbar.style.left = "0px";
  headbar.style.zIndex = 9999;

  var headImg = new Image();
  headImg.src = "https://cloud.githubusercontent.com/assets/1318371/14483673/ff0984a4-017b-11e6-97e0-e4088f515e01.png";
  headImg.onload = function () {
    var headbar = document.querySelector("#bosshead");
    headbar.style.backgroundImage = "url(" + headImg.src + ")";
    headbar.style.backgroundSize = "contain";
    headbar.style.width = headImg.naturalWidth / dpi + "px";
    headbar.style.height = headImg.naturalHeight / dpi + "px";
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
  wrapper.style.margin = "160px auto 25px";
  wrapper.style.maxWidth = "85%";
  wrapper.style.minWidth = "960px";
  wrapper.style.overflow = "hidden";
  wrapper.style.webkitFilter = "grayscale(1)";
  wrapper.style.filter = "grayscale(1)";
  wrapper.style.border = "1px solid #C6C6C6";

  var content = document.createElement("div");
  content.id = "bosscontent";
  content.style.padding = "100px 0";
  content.style.margin = "0 auto";
  content.style.width = "85%";
  content.style.backgroundColor = "#ffffff";
  //content.style.boxShadow = "0 0 2em rgba(0, 0, 0, 0.2)";
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
