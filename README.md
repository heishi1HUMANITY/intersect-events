# intersect-events

[![npm version](https://badge.fury.io/js/intersect-events.svg)](https://badge.fury.io/js/intersect-events)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**intersect-events** add intersection events to dom elements.

## Install

`npm i --save-dev intersect-events`

## Usage

```typescript
import addIntersectEvents from 'intersect-events';

const el: HTMLElement = document.querySelector('#id');
const observer: IntersectionObserver = addIntersectEvents(el);

el.addEventListener('intersect', (e): void => {
  // do something
});
el.addEventListener('intersectEnter', (e): void => {
  // do something
});
el.addEventListener('intersectLeave', (e): void => {
  // do something
});
```

## Syntax

```typescript
const observer: IntersectionObserver = addIntersectEvents(el[, options]);
```

## Events

```typescript
el.addEventListener(intersectEvents, callback);
```

```intersect``` : This event is fired at an Element when the percentage of the target element is visible crosses a threshold.

```intersectEnter``` : This event is fired at an Element when the percentage of the target element is visible crosses a threshold and ```intersectionObserverEntry.isIntersectiong``` is ```true```.

```intersectLeave``` : This event is fired at an Element when the percentage of the target element is visible crosses a threshold and ```intersectionObserverEntry.isIntersectiong``` is ```false```.
