# react-set-multiple-refs

[![SupraSmooth - react-set-multiple-refs](https://img.shields.io/static/v1?label=SupraSmooth&message=react-set-multiple-refs&color=blue&logo=github)](https://github.com/SupraSmooth/react-set-multiple-refs 'Go to GitHub repo')
[![stars - react-set-multiple-refs](https://img.shields.io/github/stars/SupraSmooth/react-set-multiple-refs?style=social)](https://github.com/SupraSmooth/react-set-multiple-refs)
[![forks - react-set-multiple-refs](https://img.shields.io/github/forks/SupraSmooth/react-set-multiple-refs?style=social)](https://github.com/SupraSmooth/react-set-multiple-refs)

[![GitHub release](https://img.shields.io/github/release/SupraSmooth/react-set-multiple-refs?include_prereleases=&sort=semver&color=blue)](https://github.com/SupraSmooth/react-set-multiple-refs/releases/)
[![License](https://img.shields.io/badge/License-BSD-blue)](#license)
[![issues - react-set-multiple-refs](https://img.shields.io/github/issues/SupraSmooth/react-set-multiple-refs)](https://github.com/SupraSmooth/react-set-multiple-refs/issues)

[![on npm - @suprasmooth/react-set-multiple-refs](https://img.shields.io/badge/dependency-%40suprasmooth%2Freact--set--multiple--refs-blue?logo=typescript&logoColor=white)](https://www.npmjs.com/package/@suprasmooth/react-set-multiple-refs)

`setRefs` is a utility function for React or React-based frameworks like NextJS that allows you to combine multiple refs into a single ref callback. This is particularly useful when you need to pass multiple refs to a single DOM element.

## Installation

```sh
npm install react-set-multiple-refs
```

## Usage

### Importing the Function

To use the `setRefs` function, you need to import it into your React component file:

```js
import setRefs from 'react-set-multiple-refs';
```

### Combining Refs

You can use `setRefs` to combine multiple refs, whether they are callback refs or `React.createRef` refs.

#### Example with `React.createRef` and Callback Ref

```js
import React, { useRef, useEffect } from 'react';
import setRefs from 'react-set-multiple-refs';

const MyComponent = () => {
    const ref1 = useRef(null);
    const ref2 = (element) => {
        console.log('Callback ref:', element);
    };

    useEffect(() => {
        console.log('ref1 current:', ref1.current);
    }, []);

    return <div ref={setRefs(ref1, ref2)}>Hello, world!</div>;
};

export default MyComponent;
```

In this example, `setRefs` combines `ref1` and `ref2`, so both refs will be set when the `<div>` element is rendered.

#### Example with Multiple `React.createRef` Refs

```js
import React, { useRef, useEffect } from 'react';
import setRefs from 'react-set-multiple-refs';

const AnotherComponent = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useEffect(() => {
        console.log('ref1 current:', ref1.current);
        console.log('ref2 current:', ref2.current);
    }, []);

    return <div ref={setRefs(ref1, ref2)}>Hello, world!</div>;
};

export default AnotherComponent;
```

In this example, `setRefs` combines `ref1` and `ref2`, and both refs will point to the `<div>` element when it is rendered.

## TypeScript Support

This package includes TypeScript types for better development experience. You can use it in your TypeScript projects as shown below:

```typescript
import React, { useRef, useEffect, MutableRefObject } from 'react';
import setRefs from 'react-set-multiple-refs';

type MyComponentProps = {
  name: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  const ref1: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const ref2 = (element: HTMLDivElement | null) => {
    console.log('Callback ref:', element);
  };

  useEffect(() => {
    console.log('ref1 current:', ref1.current);
  }, []);

  return <div ref={setRefs<HTMLDivElement>(ref1, ref2)}>Hello, {name}!</div>;
};

export default MyComponent;
```

## API

```typescript
setRefs<T>(...references: Reference<T>[]): (element: T | null) => void
```

### Parameters

-   `references`: An array of refs which can be callback refs or `React.createRef` refs.

### Returns

A function that takes an element of type `T` or `null` and sets all provided refs to this element.

## Issues

If you encounter any issues, please report them [here](https://github.com/SupraSmooth/react-set-multiple-refs/issues).

## Contributing

Open source welcomes contributions! Please follow these steps to contribute:

-   Fork the repository.
-   Create a new branch for your feature or bugfix.
-   Make your changes and commit them.
-   Push your changes to your fork.
-   Submit a pull request describing your changes.

## License

Released under [BSD 3-Clause License](https://github.com/SupraSmooth/react-set-multiple-refs/blob/master/LICENSE) by [@SupraSmooth](https://github.com/SupraSmooth).
