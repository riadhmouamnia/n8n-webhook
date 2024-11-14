import { getLastNodeExecuted } from "@/actions/node";
import { Params } from "next/dist/server/request/params";
import React from "react";

export default async function StepOne({ params }: { params: Params }) {
  const { executionId, nodeId } = await params;
  const nodeMetadata = await getLastNodeExecuted(executionId as string);

  if (nodeId === "summary") {
    return <div>Congratulations, you&apos;ve finished the workflow!</div>;
  }

  return (
    <div>
      StepOne {executionId} | {nodeId}
      <p>
        <strong>Name:</strong> {nodeMetadata?.name}
      </p>
      <p>
        <strong>Type:</strong> {nodeMetadata?.type}
      </p>
      {/* <p>Parameters: {nodeMetadata?.parameters}</p> */}
      <p>
        <strong>Position 0:</strong> {nodeMetadata?.position[0]}
      </p>
      <p>
        <strong>Position 1:</strong> {nodeMetadata?.position[1]}
      </p>
    </div>
  );
}
