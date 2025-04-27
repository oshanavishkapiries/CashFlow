import { useParams, Link } from 'react-router-dom';

// Mock transaction data
const mockTransactions = [
  { id: 1, description: 'Grocery Shopping', amount: -150.00, date: '2024-04-27', category: 'Food', notes: 'Weekly groceries' },
  { id: 2, description: 'Salary', amount: 3000.00, date: '2024-04-25', category: 'Income', notes: 'Monthly salary' },
  { id: 3, description: 'Dinner', amount: -45.00, date: '2024-04-24', category: 'Food', notes: 'Restaurant with friends' },
];

const TransactionDetail = () => {
  const { id } = useParams();
  const transaction = mockTransactions.find(t => t.id === Number(id));

  if (!transaction) {
    return (
      <div className="transaction-detail">
        <h2>Transaction not found</h2>
        <Link to="/dashboard/transactions">Back to Transactions</Link>
      </div>
    );
  }

  return (
    <div className="transaction-detail">
      <h2>Transaction Details</h2>
      <div className="detail-item">
        <span className="label">Description:</span>
        <span className="value">{transaction.description}</span>
      </div>
      <div className="detail-item">
        <span className="label">Amount:</span>
        <span className={`value ${transaction.amount >= 0 ? 'positive' : 'negative'}`}>
          {transaction.amount >= 0 ? '+' : ''}{transaction.amount}
        </span>
      </div>
      <div className="detail-item">
        <span className="label">Date:</span>
        <span className="value">{transaction.date}</span>
      </div>
      <div className="detail-item">
        <span className="label">Category:</span>
        <span className="value">{transaction.category}</span>
      </div>
      <div className="detail-item">
        <span className="label">Notes:</span>
        <span className="value">{transaction.notes}</span>
      </div>
      <Link to="/dashboard/transactions" className="back-link">
        Back to Transactions
      </Link>
    </div>
  );
};

export default TransactionDetail; 