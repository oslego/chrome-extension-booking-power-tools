!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}({7:function(e,t,n){"use strict";var r=void 0;chrome.runtime.onConnect.addListener(function(e){r=e}),chrome.runtime.onMessage.addListener(function(e,t,n){"restart"===e.task&&(chrome.runtime.reload(),n({message:"Running chrome.runtime.reload()"}))}),chrome.tabs.onUpdated.addListener(function(e,t,n){"complete"===t.status&&r&&r.postMessage({name:"tabupdated",tab:n})})}});