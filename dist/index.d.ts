import { MutableRefObject } from 'react';
type Reference<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | undefined;
declare const setRefs: <T>(...references: Reference<T>[]) => (element: T | null) => void;
export default setRefs;
