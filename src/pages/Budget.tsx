// Mock budget data
const mockBudget = {
  income: 3000,
  expenses: 1200,
  categories: [
    { name: 'Housing', budget: 800, spent: 750 },
    { name: 'Food', budget: 400, spent: 350 },
    { name: 'Transportation', budget: 200, spent: 150 },
    { name: 'Entertainment', budget: 300, spent: 250 },
  ]
};

const Budget = () => {
  const remaining = mockBudget.income - mockBudget.expenses;

  return (
    <div className="budget-container">
      <h2>Budget Overview</h2>
      
      <div className="budget-summary">
        <div className="summary-item">
          <span className="label">Monthly Income:</span>
          <span className="value positive">+${mockBudget.income}</span>
        </div>
        <div className="summary-item">
          <span className="label">Monthly Expenses:</span>
          <span className="value negative">-${mockBudget.expenses}</span>
        </div>
        <div className="summary-item">
          <span className="label">Remaining:</span>
          <span className={`value ${remaining >= 0 ? 'positive' : 'negative'}`}>
            {remaining >= 0 ? '+' : ''}${remaining}
          </span>
        </div>
      </div>

      <div className="budget-categories">
        <h3>Categories</h3>
        {mockBudget.categories.map((category) => (
          <div key={category.name} className="category-item">
            <div className="category-header">
              <span className="name">{category.name}</span>
              <span className="amount">
                ${category.spent} / ${category.budget}
              </span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ 
                  width: `${(category.spent / category.budget) * 100}%`,
                  backgroundColor: category.spent > category.budget ? '#ff4444' : '#4CAF50'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budget; 