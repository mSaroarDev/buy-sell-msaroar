function convert_to_currency_format(amount) {
  return "{:,}".format(amount);
}

// Convert 32500 to currency format
const converted_amount = convert_to_currency_format(32500);
