export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;
