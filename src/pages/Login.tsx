import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { Button } from '@/components/ui/button';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    // Mock Google login logic
    setTimeout(() => {
      setLoading(false);
      navigate('/d');
    }, 1500);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark_1">
      <div className="flex flex-col items-center w-sm">
        <img src="/icon-512x512.png" alt="App Icon" className="w-20 h-20 mb-6 rounded-full shadow" />
        <Button
          variant="outline"
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 px-6 py-3 bg-dark_3 font-semibold rounded-lg w-full justify-center"
        >
          <svg className="w-4 h-4" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.36 30.18 0 24 0 14.82 0 6.73 5.48 2.69 13.44l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.59C43.93 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.65c-1.01-2.99-1.01-6.31 0-9.3l-7.98-6.2C.99 17.09 0 20.42 0 24c0 3.58.99 6.91 2.69 10.15l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.18 0 11.36-2.05 15.15-5.57l-7.19-5.59c-2.01 1.35-4.59 2.16-7.96 2.16-6.38 0-11.87-3.63-14.33-8.91l-7.98 6.2C6.73 42.52 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login; 