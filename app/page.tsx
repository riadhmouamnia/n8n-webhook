import startWorkflow from "@/actions/start-workflow";
import { Button } from "@/components/ui/button";
// import { redirect } from "next/navigation";

export default async function Home() {
  // const user = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "l6B8t@example.com",
  // };

  return (
    <form action={startWorkflow} className="w-full">
      <Button type="submit" className="w-full">
        Start
      </Button>
    </form>
  );
}
