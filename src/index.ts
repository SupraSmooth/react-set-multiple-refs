import { MutableRefObject } from 'react';

type Reference<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | undefined;

const setRefs =
    <T>(...references: Reference<T>[]) =>
    (element: T | null) => {
        references.forEach((reference) => {
            if (typeof reference === 'function') {
                reference(element);
            } else if (reference) {
                reference.current = element;
            }
        });
    };

export default setRefs;
