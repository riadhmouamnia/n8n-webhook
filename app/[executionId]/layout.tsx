import { Params } from "next/dist/server/request/params";
import { RESUME_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { getCurrentExecution, getWorkflowName } from "@/actions/execution";
import { redirect } from "next/navigation";

export default async function OnboardingPage({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { executionId } = await params;
  console.log("execution layout recived executionId:", executionId);
  const workflowName = await getWorkflowName(executionId as string);
  const executionMetadata = await getCurrentExecution(executionId as string);
  const isWorkflowFinished = executionMetadata.finished;
  console.log(isWorkflowFinished);

  async function resumeExecution() {
    "use server";
    if (isWorkflowFinished) return;
    const url = `${RESUME_URL}/${executionId}`;
    console.log("Resuming: ", url);
    await fetch(url, {
      mode: "no-cors",
    }).then(() => {
      redirect(`/${executionId}`);
    });
  }
  return (
    <div className="border flex flex-col gap-10 rounded-2xl p-8 container">
      <h2 className="text-3xl mb-8">{workflowName ?? "Workflow"}</h2>
      {children}
      <form action={resumeExecution}>
        <Button type="submit">Resume</Button>
      </form>
    </div>
  );
}
