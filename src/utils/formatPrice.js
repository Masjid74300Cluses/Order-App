const formatPrice = (priceInCents) => {
  const priceInEuros = priceInCents / 100; // Convert cents to Euros
  const formattedPrice = priceInEuros.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  return formattedPrice;
};

export default formatPrice;
