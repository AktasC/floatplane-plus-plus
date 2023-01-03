// ==UserScript==
// @name         Floatplane Theater Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Ultrawide users retaliate against Luke Lafreniere
// @author       AktasC
// @match        https://www.floatplane.com/post/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=floatplane.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.player-wrapper, .player-container { max-height: calc(100vh - 200px); max-width: calc(90vw - 100px) !important; margin: auto; }
`);

/*
** W.I.P
.sidebar, sidebar-inner, .sidebar-inner-main-nav { max-width: 220px !important; }
.route-wrapper {max-width: calc(100vw - 110px) !important; }
*/
