import { TEST } from './actions-types';

export const test = (payload) => ({
  type: TEST,
  payload,
});
