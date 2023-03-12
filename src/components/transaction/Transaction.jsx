import PropTypes from 'prop-types';
import Transaction from '../transaction/transactions'
import '../transaction/transaction.css'

const TransactionList = ({ items }) => {
    return (
      <table className="transaction-history">
      <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>
    
    <tbody>
          {items.map(({id,type,amount,currency}) => (
        <tr key={id} className="table-items">
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
      ))}
  </tbody>
</table>
  );
};


export const TransactionHistory = () => {
  return (
    <TransactionList items={Transaction} />
  );
};

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};