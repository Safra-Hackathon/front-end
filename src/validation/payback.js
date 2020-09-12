export const paybackInitialValues = (payback = {}) => ({
  percentage: payback.percentage ? parseFloat(payback.percentage) : 0,
  on: payback.on || true,
  total: payback.total ? parseFloat(payback.total) : 0,
});
