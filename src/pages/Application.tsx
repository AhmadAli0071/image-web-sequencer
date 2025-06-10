import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";

const Application = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [manualCoverLetter, setManualCoverLetter] = useState("");
  const [emailNotifications, setEmailNotifications] = useState({
    daily: true,
    weekly: true,
    monthly: true,
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSendClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/login");
  };

  const handleUploadClick = () => {
    setShowUploadDialog(true);
  };

  const handleManualClick = () => {
    setShowManualDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <Link
            to="/job-offer"
            className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Job Offer
          </Link>
        </div>

        <Card className="p-4 sm:p-8 bg-white shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 text-center">
            Welcome to Apply for &lt;jobname&gt; &lt;company&gt;
          </h1>

          <div className="space-y-8">
            {/* Step 1: Upload CV */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <span className="text-lg font-medium">Upload CV</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button variant="outline" className="flex items-center gap-2 justify-center" onClick={handleUploadClick}>
                  <Upload className="h-4 w-4" />
                  Upload
                </Button>
                <span className="text-gray-500 self-center">OR</span>
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
              </div>
            </div>

            {/* Step 2: Create Cover Letter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <span className="text-lg font-medium">Create Cover Letter</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2">
                <Button variant="outline" className="w-full sm:w-auto">A.I. Cover</Button>
                <span className="text-gray-500 text-sm">OR</span>
                <button className="text-blue-600 hover:underline text-sm" onClick={handleManualClick}>Manually</button>
              </div>
            </div>

            {/* Step 3: Send CV */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Send CV</span>
                  <span className="text-sm text-gray-500">(You will get a copy to your email)</span>
                </div>
              </div>
              <Button onClick={handleSendClick} className="px-6 w-full sm:w-auto">
                SEND
              </Button>
            </div>

            {/* Step 4: You will get */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <span className="text-lg font-medium block mb-2">You will get:</span>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- A copy of application</li>
                  <li>- Email when recruiter opens email</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="outline">Close</Button>
          </div>
        </Card>

        {/* Upload CV Dialog */}
        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-semibold">
                Upload Your CV
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  Drag and drop your CV here, or click to browse
                </p>
                <Input type="file" accept=".pdf,.doc,.docx" className="cursor-pointer" />
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setShowUploadDialog(false)} className="flex-1">
                  Upload
                </Button>
                <Button variant="outline" onClick={() => setShowUploadDialog(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Manual Cover Letter Dialog */}
        <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-semibold">
                Write Your Cover Letter
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Write your cover letter here..."
                  value={manualCoverLetter}
                  onChange={(e) => setManualCoverLetter(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setShowManualDialog(false)} className="flex-1">
                  Save
                </Button>
                <Button variant="outline" onClick={() => setShowManualDialog(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Email Confirmation Modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-semibold">
                Is this your correct email?
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="set a password (optional)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="font-medium">Sign up to job email</div>
                <div className="space-y-2">
                  {["daily", "weekly", "monthly"].map((type) => (
                    <div className="flex items-center space-x-2" key={type}>
                      <Checkbox
                        id={type}
                        checked={emailNotifications[type as keyof typeof emailNotifications]}
                        onCheckedChange={(checked) =>
                          setEmailNotifications((prev) => ({
                            ...prev,
                            [type]: checked as boolean,
                          }))
                        }
                      />
                      <Label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I confirm to Terms & Conditions, Privacy Policy
                </Label>
              </div>

              <Button onClick={handleConfirm} className="w-full" disabled={!agreedToTerms}>
                Confirm
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Application;
