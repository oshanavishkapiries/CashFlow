import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to CashFlow</h1>
      <p>Your personal finance management solution</p>
      <Link to="/dashboard" className="btn btn-primary">
        Go to Dashboard
      </Link>
      <Button variant="outline" className="mt-4">
        Get Started
      </Button>
    </div>
  );
};

export default Home; 