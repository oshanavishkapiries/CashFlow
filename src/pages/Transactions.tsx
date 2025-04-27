import { Link } from 'react-router-dom';

// Mock transaction data
const mockTransactions = [
  { id: 1, description: 'Grocery Shopping', amount: -150.00, date: '2024-04-27' },
  { id: 2, description: 'Salary', amount: 3000.00, date: '2024-04-25' },
  { id: 3, description: 'Dinner', amount: -45.00, date: '2024-04-24' },
];

const Transactions = () => {
  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <div className="transactions-list">
        {mockTransactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <Link to={`/dashboard/transactions/${transaction.id}`}>
              <div className="transaction-info">
                <span className="description">{transaction.description}</span>
                <span className={`amount ${transaction.amount >= 0 ? 'positive' : 'negative'}`}>
                  {transaction.amount >= 0 ? '+' : ''}{transaction.amount}
                </span>
              </div>
              <span className="date">{transaction.date}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions; 