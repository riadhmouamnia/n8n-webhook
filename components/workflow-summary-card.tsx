import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const WorkflowSummaryCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Email Campaign Workflow
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Status: <span className="text-green-600 font-medium">Active</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          This workflow automates email campaigns for onboarding new users and
          sending follow-ups.
        </p>
      </CardContent>
    </Card>
  );
};

export default WorkflowSummaryCard;
