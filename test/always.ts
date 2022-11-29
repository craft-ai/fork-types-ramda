import { expectType, expectError } from 'tsd';
import { always } from '../types/always';

expectType<string>(always('a')());
expectType<string[]>(always(['a'])());
expectType<number>(always(2)());
expectType<{ a: number; b: number; c: number }>(
  always({ a: 2, b: 3, c: 4 })()
);
expectType<null>(always(null)());
expectType<(...args: unknown[]) => number>(always(1));
// @ts-expect-error
expectError<(...args: unknown[]) => number>(always('a'));
