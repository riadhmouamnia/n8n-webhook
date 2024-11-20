import { getWorkflowsByTagName } from "@/actions/workflow";
import Workflowcards from "@/components/workflow-cards";
// import { redirect } from "next/navigation";

export default async function Home() {
  const workflows = await getWorkflowsByTagName("flashclass");
  return <Workflowcards workflows={workflows} />;
}
