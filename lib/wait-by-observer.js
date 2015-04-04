// LICENSE : MIT
"use strict";
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector ||
    proto.mozMatchesSelector || proto.msMatchesSelector ||
    proto.oMatchesSelector || proto.webkitMatchesSelector;
}
function waitForElement(selector, timeout) {
    var _resolve, _reject;
    var promise = new Promise(function (resolve, reject) {
        _resolve = resolve;
        _reject = reject;
    });


    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                var addedNode = mutation.addedNodes[i];
                if (addedNode.matches(selector)) {
                    _resolve(addedNode);
                    observer.disconnect();
                    clearTimeout(timerId);
                }
            }
        });
    });
    // first time check
    var element = document.querySelector(selector);
    if (element != null) {
        _resolve(element);
        return promise;
    }
    var timeoutOption = timeout || 2000;// 2s
    // start
    observer.observe(document.body, {
        childList: true, subtree: true
    });
    // timeout
    var timerId = setTimeout(function () {
        _reject(new Error("Not found element match the selector:" + selector));
        observer.disconnect();
    }, timeoutOption);

    return promise;
}
module.exports = waitForElement;