export function formatAmount(amount: string) {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}