import {expectType} from 'tsd';
import timeoutSignal from './index.js';

expectType<AbortSignal>(timeoutSignal(5000));
