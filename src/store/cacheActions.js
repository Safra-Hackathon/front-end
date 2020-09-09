export const handleWriteCache = (state, payload) => ({
  ...state,
  [payload.entity]: payload.data,
});
