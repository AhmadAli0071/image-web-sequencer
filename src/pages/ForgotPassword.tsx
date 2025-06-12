
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate forgot password - in real app, you'd send reset email
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/login" className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>

        <Card className="p-8 bg-white shadow-lg">
          {!isSubmitted ? (
            <>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">Forgot Password</h1>
              <p className="text-gray-600 mb-8">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              
              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">Check Your Email</h1>
              <p className="text-gray-600 mb-8">
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your email and follow the instructions to reset your password.
              </p>
              
              <Button asChild className="w-full">
                <Link to="/login">
                  Back to Login
                </Link>
              </Button>
            </>
          )}
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
