// LICENSE : MIT
"use strict";
var waitByTimer = require("./wait-by-timer");
var waitByObserver = require("./wait-by-observer");
/**
 * @param {string} selector the css selector
 * @param {number} timeout the timeout is millisecond
 * @returns {Promise}
 */
module.exports = function waitForElement(selector, timeout) {
    if (typeof Element.prototype.matches !== "undefined" && typeof MutationObserver !== "undefined") {
        return waitByObserver(selector, timeout);
    }
    // fallback
    return waitByTimer(selector, timeout);
};