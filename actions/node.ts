"use server";

import { API_BASE_URL } from "@/lib/constants";

export async function getLastNodeExecuted(id: string) {
  const headers = new Headers();
  headers.set("X-N8N-API-KEY", process.env.X_N8N_API_KEY!);
  headers.set("mode", "no-cors");
  const res = await fetch(`${API_BASE_URL}/executions/${id}?includeData=true`, {
    headers,
  });
  const metadata = (await res.json()) as WebhookExecutionMetadata;
  const lastNodeExecuted = metadata.data.resultData.lastNodeExecuted;
  const allNodes = metadata.workflowData.nodes;
  const lastNodeData = allNodes.find((node) => node.name === lastNodeExecuted);
  return lastNodeData;
}
