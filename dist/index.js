'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var addIntersectEvents = function (el, option) {
    var observer = new IntersectionObserver(function (e) {
        var intersect = new CustomEvent('intersect', { detail: e });
        var intersectEnter = new CustomEvent('intersectEnter', { detail: e });
        var intersectLeave = new CustomEvent('intersectLeave', { detail: e });
        el.dispatchEvent(intersect);
        if (e[0].isIntersecting === true) {
            el.dispatchEvent(intersectEnter);
        }
        else {
            el.dispatchEvent(intersectLeave);
        }
    }, option);
    observer.observe(el);
    return observer;
};
exports.default = addIntersectEvents;
//# sourceMappingURL=index.js.map