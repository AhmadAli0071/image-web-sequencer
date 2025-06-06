
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Job Application Portal</h1>
        <p className="text-xl text-gray-600 mb-8">Find your dream job and apply with ease</p>
        <div className="space-y-4">
          <Link to="/job-offer">
            <Button size="lg" className="w-full max-w-md">
              Browse Job Offers
            </Button>
          </Link>
          <div className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
