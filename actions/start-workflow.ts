"use server";
import { PROD_URL, TEST_URL } from "@/lib/constants";
import { notFound, redirect } from "next/navigation";

console.log({ TEST_URL });
console.log({ PROD_URL });

export default async function startWorkflow() {
  let executionId;
  try {
    const res = await fetch(PROD_URL);
    const { id } = await res.json();
    executionId = id;
    console.log("Starting execution", executionId);
  } catch (error) {
    console.log(error);
  }
  if (!executionId) return notFound();
  redirect(`/${executionId}`);
}
