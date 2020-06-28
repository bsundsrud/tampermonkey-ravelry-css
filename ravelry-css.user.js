// ==UserScript==
// @name         Ravelry CSS Tweaks
// @namespace    https://github.com/bsundsrud
// @homepage     https://github.com/bsundsrud/tampermonkey-ravelry-css
// @supportURL   https://github.com/bsundsrud/tampermonkey-ravelry-css/issues
// @updateURL    https://raw.githubusercontent.com/bsundsrud/tampermonkey-ravelry-css/master/ravelry-css.user.js
// @downloadURL  https://raw.githubusercontent.com/bsundsrud/tampermonkey-ravelry-css/master/ravelry-css.user.js
// @version      0.2
// @description  Soften the Ravelry redesign
// @author       Benn Sundsrud
// @match        https://www.ravelry.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // font colors
    let defaultFontColor = "#333";

    //background colors
    let defaultBackgroundColor = "#f8f8f8";
    let inputBackgroundColor = "transparent";
    let headerBackgroundColor = "#e8e8e8";

    // box shadow
    let boxShadowSize = "2px";
    let boxShadowReversedSize = "2px";
    let boxShadowColor = "#666";

    // Borders
    let borderColor = boxShadowColor;
    let borderRadius = "4px";
    let borderDef = `1px solid ${borderColor}`;


    // CSS template
    const css = `
:root {
  --global-box-shadow-size: ${boxShadowSize} !important;
  --global-box-shadow-reversed-size: ${boxShadowReversedSize} !important;
}

body, body.normal, #page_header {
  color: ${defaultFontColor};
  background-color: ${defaultBackgroundColor};
}
.basic_box, .box {
  background-color: ${defaultBackgroundColor};
  box-shadow: var(--global-box-shadow-size) var(--global-box-shadow-reversed-size) 0 0 ${boxShadowColor};
  border: ${borderDef};
  border-radius: ${borderRadius};
}
.zone_specific_yarn_links .yarn_link_box {
  border: ${borderDef};
  border-radius: ${borderRadius};
  box-shadow: var(--global-box-shadow-size) var(--global-box-shadow-reversed-size) 0 0 ${boxShadowColor};
}
.box_title, .box_title--standalone {
  border: none;
  border-bottom: ${borderDef};
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
}
.box_contents {
  border: none;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
}
.clicker--large button, button.clicker--large, a.clicker--large {
  box-shadow: var(--global-box-shadow-size) var(--global-box-shadow-reversed-size) 0 0 ${boxShadowColor};
  border: ${borderDef};
  color: ${defaultFontColor};
  border-radius: ${borderRadius};
}
.clicker_v2 {
  border: ${borderDef};
  color: ${defaultFontColor} !important;
  border-radius: ${borderRadius};
  box-shadow: var(--global-box-shadow-size) var(--global-box-shadow-reversed-size) 0 0 ${boxShadowColor};
}
#advanced_search_link, #advanced_search_link:visited {
  color: ${defaultFontColor} !important;
}
body.with_navigation_v2 #page_header {
  border-bottom: ${borderDef};
  background-color: ${headerBackgroundColor};
}
.c-navigation_indicator__snake {
  border-bottom: 5px solid ${borderColor};
}
.navigation_v2__tab, .navigation_v2__tab:visited {
  color: ${defaultFontColor};
}
.c-navigation_dropdown__content a {
  color: ${defaultFontColor};
}
html {
  font-family: Arial, Helvetica, sans-serif;
}
input[type=text], input[type=password] {
  border: ${borderDef};
}
`;

    GM_addStyle(css);
})();
