export const paybackInitialValues = (payback = {}) => ({
  percentage: payback.percentage || 0,
  on: payback.on || true,
  total: payback.total || 0,
});
