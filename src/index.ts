'use strict';

const addIntersectEvents = (el: HTMLElement, option?: IntersectionObserverInit | undefined): IntersectionObserver => {
  const observer: IntersectionObserver = new IntersectionObserver((e: IntersectionObserverEntry[]): void => {
    const intersect: CustomEvent = new CustomEvent('intersect', { detail: e });
    const intersectEnter: CustomEvent = new CustomEvent('intersectEnter', { detail: e });
    const intersectLeave: CustomEvent = new CustomEvent('intersectLeave', { detail: e });
    el.dispatchEvent(intersect);
    if (e[0].isIntersecting === true) {
      el.dispatchEvent(intersectEnter);
    } else {
      el.dispatchEvent(intersectLeave);
    }
  }, option);
  observer.observe(el);
  return observer
};

export default addIntersectEvents;
