import { getCurrentExecution } from "@/actions/execution";
import { Button } from "@/components/ui/button";
import { RESUME_URL } from "@/lib/constants";
import { getCookie } from "@/lib/cookies";
import { redirect, RedirectType } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const executionId = await getCookie("executionId");
  const currentExecution = await getCurrentExecution(executionId as string);

  async function resumeExecution() {
    "use server";
    if (currentExecution.finished) return;
    const url = `${RESUME_URL}/${executionId}`;
    console.log("Resume URL: ", url);
    await fetch(url, {
      mode: "no-cors",
      cache: "no-store",
    });
    console.log("redirecting...");
    redirect(`/onboarding`, RedirectType.replace);
  }

  return (
    <div className="w-full h-full flex flex-col gap-8 justify-between">
      <h2 className="text-3xl font-bold">Onboarding</h2>
      {children}
      {currentExecution.finished ||
      currentExecution.status === "canceled" ? null : (
        <form action={resumeExecution}>
          <Button>Next</Button>
        </form>
      )}
      <div className="mt-8">
        <p>Current Execution: {currentExecution?.status} </p>
      </div>
    </div>
  );
}
