// ==UserScript==
// @name         Ravelry CSS Tweaks
// @namespace    https://github.com/bsundsrud
// @homepage     https://github.com/bsundsrud/tampermonkey-ravelry-css
// @supportURL   https://github.com/bsundsrud/tampermonkey-ravelry-css/issues
// @updateURL    https://raw.githubusercontent.com/bsundsrud/tampermonkey-ravelry-css/master/ravelry-css.user.js
// @downloadURL  https://raw.githubusercontent.com/bsundsrud/tampermonkey-ravelry-css/master/ravelry-css.user.js
// @version      0.5
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
    let defaultBackgroundFacetColor = "#dff3eb";
    let inputBackgroundColor = "transparent";
    let headerBackgroundColor = "#e8e8e8";
    let subheaderBackgroundColor = "#d8d8d8";

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
  background-color: ${defaultBackgroundColor} !important;
  background: ${defaultBackgroundColor} !important;
}
body.search .advanced_search__facets {
  background-color: ${defaultBackgroundFacetColor};
}
body.search .advanced_search__facet_content {
  border: ${borderDef};
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
  border-bottom-left-radius: ${borderRadius};.form_select, .fake_form_select
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
body.topics_index .pagination a, .page_links .pagination a, .page_buttons a {
  border: ${borderDef};
  color: ${defaultFontColor};
  border-radius: ${borderRadius};
  box-shadow: var(--global-box-shadow-size) var(--global-box-shadow-reversed-size) 0 0 ${boxShadowColor};
}
.page_bar__current {
  border: ${borderDef};
  border-radius: ${borderRadius};
}
body.with_navigation_v2 #page_header {
  border-bottom: ${borderDef};
  background-color: ${headerBackgroundColor} !important;
}
body.search #search_navigation {
  border-bottom: ${borderDef};
  background-color: ${subheaderBackgroundColor} !important;
}
body.supports_subnavigation.with_subnavigation .tabs--subnavigation {
  border-bottom: ${borderDef};
  background-color: ${defaultBackgroundColor} !important;
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
.form_select, .fake_form_select {
  background-color: ${defaultBackgroundColor};
}
body.search .advanced_search__filter_jump .form_select {
  border: ${borderDef};
}
#topics table, .forum_glance table {
  border-bottom: ${borderDef};
}
#topics table th:first-of-type, #topics table td:first-of-type, .forum_glance table th:first-of-type, .forum_glance table td:first-of-type {
  border-left: ${borderDef};
}
#topics table th:last-of-type, #topics table td:last-of-type, .forum_glance table th:last-of-type, .forum_glance table td:last-of-type {
  border-right: ${borderDef};
}
#topics table tr:last-of-type td, .forum_glance table tr:last-of-type td {
  border-bottom: ${borderDef};
}
#topics table th, #topics table tr:first-of-type td, .forum_glance table th, .forum_glance table tr:first-of-type td {
  border-top: ${borderDef};
}
table.reply_list a, .forum_glance table a {
  color: ${defaultFontColor};
}
`;

    GM_addStyle(css);
    // The forum headers are hardcoded black as element styles.  The following line is done out of spite.
    document.getElementById("content").querySelectorAll(".forums .forum_glance .forum_glance__header h2 a").forEach(function(el) {
        el.style.color = defaultFontColor;
    });
})();
