interface WebhookExecutionMetadata {
  id: string;
  finished: boolean;
  mode: string;
  retryOf: string | null;
  retrySuccessId: string | null;
  status: string;
  createdAt: string;
  startedAt: string;
  stoppedAt: string;
  deletedAt: string | null;
  workflowId: string;
  waitTill: string | null;
  data: {
    startData: Record<string, unknown>;
    resultData: {
      runData: Record<
        string,
        {
          hints: unknown[];
          startTime: number;
          executionTime: number;
          source: unknown[];
          executionStatus: string;
          data: {
            main: {
              json: {
                headers: Record<string, string>;
                params: Record<string, unknown>;
                query: Record<string, unknown>;
                body: Record<string, unknown>;
                webhookUrl: string;
                executionMode: string;
              };
              pairedItem: {
                item: number;
              };
            }[][];
          };
        }[]
      >;
      lastNodeExecuted: string;
    };
    executionData: {
      contextData: Record<string, unknown>;
      nodeExecutionStack: unknown[];
      waitingExecution: Record<string, unknown>;
    };
  };
  workflowData: {
    id: string;
    name: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    nodes: {
      parameters: Record<string, unknown>;
      id: string;
      name: string;
      type: string;
      typeVersion: number;
      position: [number, number];
      webhookId?: string;
    }[];
    connections: Record<
      string,
      { main: { node: string; type: string; index: number }[][] }
    >;
    settings: Record<string, unknown>;
    staticData: Record<string, unknown>;
    pinData: Record<string, unknown>;
  };
  customData: Record<string, unknown>;
}
