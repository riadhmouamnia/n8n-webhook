import { Badge } from "./ui/badge";

const WorkflowStepsTimeline = () => {
  const steps = [
    { step: "Trigger: New User Signup", status: "completed" },
    { step: "Send Welcome Email", status: "completed" },
    { step: "Wait: 2 Days", status: "in-progress" },
    { step: "Send Follow-Up Email", status: "pending" },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Workflow Steps</h2>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Badge
              variant={
                step.status === "completed"
                  ? "secondary"
                  : step.status === "in-progress"
                  ? "destructive"
                  : "default"
              }
              className="rounded-full w-8 h-8 flex items-center justify-center text-sm"
            >
              {index + 1}
            </Badge>
            <div className="text-sm text-gray-700">{step.step}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkflowStepsTimeline;
