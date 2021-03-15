export function formatAmount(amount: string): string {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}