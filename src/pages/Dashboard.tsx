import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const emailData = [
    {
      id: 1,
      subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt lacinia tellus. Quisque finibus tellus nec tellus gravida, nec maximus purus imperdiet. Curabitur dapibus orci eget eros cursus, non egestas neque ultrices.",
      status: "Opened",
      type: "Sent"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/login" className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>

        <Card className="p-8 bg-white shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">My CVKick Account</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Email List */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">All Emails</h2>
              <div className="space-y-4">
                {emailData.map((email) => (
                  <Card key={email.id} className="p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Button variant="outline" size="sm">
                        {email.type}
                      </Button>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {email.subject}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Status Column */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Status</h2>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Opened
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Not opened</span>
                    <Badge variant="outline">
                      Not opened
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            <Link to="/job-offer">
              <Button>Browse More Jobs</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
