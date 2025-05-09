import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "firebase/auth";
import { onAuthStateChange, getCurrentUser } from "@/firebase/auth";
import { Loader } from "lucide-react";

interface AuthMiddlewareProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const AuthMiddleware = ({
  children,
  requireAuth = true,
}: AuthMiddlewareProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    const unsubscribe = onAuthStateChange((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        navigate("/login");
      } else if (!requireAuth && user) {
        navigate("/");
      }
    }
  }, [user, loading, requireAuth, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};
