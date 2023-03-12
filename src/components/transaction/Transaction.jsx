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
    {items.map(elem => (
        <tr key={elem.id}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
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