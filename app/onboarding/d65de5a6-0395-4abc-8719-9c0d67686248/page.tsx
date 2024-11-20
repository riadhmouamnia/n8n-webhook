import WorkflowNodeConfig from "@/components/workflow-node-config";

export default function Wait1() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-semibold">Wait Node Wait1</h1>
      <WorkflowNodeConfig />
    </div>
  );
}
