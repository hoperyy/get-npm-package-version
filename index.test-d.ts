import {expectType} from 'tsd';
import getVersion, { getNpmPkgVersion } from '.';

expectType<string | null>(getVersion('react'));
expectType<string | null>(getVersion('react', {registry: 'https://registry.npmjs.org', timeout: 1000}));
expectType<string | null>(getNpmPkgVersion('react'));

