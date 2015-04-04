// LICENSE : MIT
"use strict";
/**
 * @param {string} selector the css selector
 * @param {number} timeout the timeout is millisecond
 * @returns {Promise}
 */
function waitForElement(selector, timeout) {
    var timeoutOption = timeout || 2000;// 2s
    var loopTime = 100;
    var tryCount = 0;
    var limitCount = timeoutOption / loopTime;
    var limitCountOption = (limitCount < 1) ? 1 : limitCount;

    function tryCheck(resolve, reject) {
        if (tryCount < limitCountOption) {
            var element = document.querySelector(selector);
            if (element != null) {
                return resolve(element);
            }
            setTimeout(function () {
                tryCheck(resolve, reject);
            }, loopTime);
        } else {
            reject(new Error("Not found element match the selector:" + selector));
        }
        tryCount++;
    }

    return new Promise(function (resolve, reject) {
        tryCheck(resolve, reject);
    });
}
module.exports = waitForElement;