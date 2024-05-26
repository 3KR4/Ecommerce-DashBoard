//! Price 
export const salePrice = (product) => {
  let salePricenum = (product.price - (product.price * product.sale / 100)).toFixed(2);
  return `$${salePricenum}`;
}
export const under10Nums = (sale) => {
  return sale < 10 ? '0' + sale : sale;
}
