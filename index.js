const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Anastacio Rodriguez",
    address: "1003 lomas lo alto",
    city: "Dolores Hidalgo",
    state: "CA",
    country: "US",
    postal_code: 37800
  },
  items: [
    {
      item: "King Sice",
      description: "1 cama king Sice, baño completo",
      quantity: 2,
      amount: 6000
    },
    {
      item: "Precidencial",
      description: "cama matrimonial, baño completo",
      quantity: 1,
      amount: 2000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
