// import { getCurrentExecution } from "@/actions/execution";
import { getCurrentExecution } from "@/actions/execution";
import { getLastNodeExecuted } from "@/actions/node";
import { Params } from "next/dist/server/request/params";
import { redirect } from "next/navigation";

export default async function ExcutionPage({ params }: { params: Params }) {
  const { executionId } = await params;
  const lastNodeData = await getLastNodeExecuted(executionId as string);
  const executionMetadata = await getCurrentExecution(executionId as string);
  const isWorkflowFinished = executionMetadata.finished;

  console.log("Workflow finished");
  console.dir(executionMetadata.finished, { depth: null });
  // console.dir(executionMetadata.workflowData.nodes, { depth: null });
  // console.log({ lastNodeData });
  // console.dir(`Last node executed: ${lastNodeData}`, {
  //   depth: null,
  // });
  if (lastNodeData?.id && !isWorkflowFinished) {
    return redirect(`/${executionId}/${lastNodeData.id}`);
  } else if (isWorkflowFinished) {
    return redirect(`/${executionId}/summary`);
  }
  return null;
}
