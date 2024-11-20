import WorkflowStepsTimeline from "@/components/workflow-steps-timeline";

export default function Wait3() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-semibold">Wait Node Wait3</h1>
      <WorkflowStepsTimeline />
    </div>
  );
}
