"use client";
import LottieViewer from "@/components/common/LottileViwer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// profile animation
import login_animation from "@/public/animations/login_animation.json";
import { Button } from "@/components/ui/button";
import { Chrome, Loader2 } from "lucide-react";
import { signInWithGoogle } from "@/services/auth.service";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "sonner";
import Loader from "@/components/common/Loader";

const RootPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading } = useAuthContext();
  const router = useRouter();

  // Redirect to dashboard if user is already authenticated
  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log("Sign in successful:", result);
      toast.success("Sign in successful");
    } catch (error) {
      console.error("Sign in failed:", error);
      toast.error("Sign in failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  // Don't show login if user is authenticated (will redirect)
  if (user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen p-4 space-y-4">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
        <LottieViewer
          loop={false}
          width={270}
          height={270}
          animationData={login_animation}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-primary">Welcome to CashFlow</h1>
        <p className="text-sm text-muted-foreground">
          Track your income and expenses with ease
        </p>
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-md font-semibold">Quick Tips:</h2>
          <ul className="text-xs text-muted-foreground space-y-1 text-left">
            <li>• Set up automatic transaction categorization</li>
            <li>• Create monthly budgets to stay on track</li>
            <li>• Review your spending patterns weekly</li>
            <li>• Set savings goals for better financial health</li>
          </ul>
        </div>

        <Button
          variant="default"
          className="w-full max-w-md py-6 bg-foreground"
          onClick={handleSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            </>
          ) : (
            <>
              <Chrome className="w-4 h-4 mr-2" />
              Login with Google
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default RootPage;
