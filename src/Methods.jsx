//! Price 
export const salePrice = (product) => {
  let salePricenum = (product.price - (product.price * product.sale / 100)).toFixed(2);
  return `$${salePricenum}`;
}
export const under10Nums = (sale) => {
  return sale < 10 ? '0' + sale : sale;
}
export const userImage = (name) => {
  const nameParts = name.split(' ');
  return nameParts.length === 1 
    ? name.substring(0, 2).toUpperCase()
    : `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
}
export const paragraph = (paragraph, length) => {
  if (paragraph.length > length) {
    return `${paragraph.slice(0, length)}...`;
  } else {
    return paragraph;
  }
};