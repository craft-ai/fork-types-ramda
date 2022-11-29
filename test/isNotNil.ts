import { expectType, expectNotType } from 'tsd';
import { isNotNil } from '../types/isNotNil';

expectType<true>(isNotNil(1));
expectType<true>(isNotNil('a'));
expectType<true>(isNotNil(true));
// TODO, why this failing
// @ts-expect-error
expectType<false>(isNotNil(null));
// TODO, why this failing
// @ts-expect-error
expectType<false>(isNotNil(undefined));

expectNotType<false>(isNotNil(1));
expectNotType<false>(isNotNil('a'));
expectNotType<false>(isNotNil(true));
expectNotType<true>(isNotNil(null));
expectNotType<true>(isNotNil(undefined));
