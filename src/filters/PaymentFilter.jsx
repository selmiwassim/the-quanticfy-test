import React from 'react';

const PaymentFilter = ({ selectedPayment, handleFilterChange }) => (
  <label>
    Payant:
    <select name="payment" value={selectedPayment} onChange={handleFilterChange}>
      <option key={0} value="Sélectionnez le paiement">Sélectionnez le paiement</option>
      <option key={1} value="Non">Non</option>
      <option key={2} value="Oui">Oui</option>
    </select>
  </label>
);

export default PaymentFilter;
