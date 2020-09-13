export const investmentInitialValues = (investment = {}) => ({
  min: investment.min ? parseFloat(investment.min) : 0,
  name: investment.name || '',
  category: investment.category || '',
  interest: investment.interest ? parseFloat(investment.interest) : 0,
  admin_tax: investment.admin_tax ? parseFloat(investment.admin_tax) : 0,
  withdraw_time: investment.withdraw_time || 0,
  percentage: investment.percentage ? parseFloat(investment.percentage) : 0,
  amount: investment.amount ? parseFloat(investment.amount) : 0,
});
