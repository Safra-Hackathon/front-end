export const paybackInitialValues = (payback = {}) => ({
  percentage: payback.percentage ? parseFloat(payback.percentage) : 0,
  on: payback.on || true,
  total: payback.total ? parseFloat(payback.total) : 0,
  goal: payback.goal ? parseFloat(payback.goal) : 0,
});

export const paybackTransactionInitialValues = (transaction = {}) => ({
  information: transaction.information || '',
  amount: transaction.amount ? parseFloat(transaction.amount) : 0,
  percentage: transaction.percentage ? parseFloat(transaction.percentage) : 0,
  payback: transaction.payback ? parseFloat(transaction.payback) : 0,
  payback_total: transaction.payback_total ? parseFloat(transaction.payback_total) : 0,
  data: transaction.data ? new Date(transaction.data) : null,
});
