import WorkflowActivityLog from "@/components/workflow-activity-log";

export default function Wait() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-semibold">Wait Node Wait</h1>
      <WorkflowActivityLog />
    </div>
  );
}
