/* eslint-disable @typescript-eslint/no-explicit-any */
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

interface WorkflowTag {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
}

interface Node {
  parameters: Record<string, any>;
  id: string;
  name: string;
  type: string;
  typeVersion: number;
  position: [number, number];
  webhookId?: string;
}

interface Connection {
  main: Array<Array<{ node: string; type: string; index: number }>>;
}

interface Settings {
  executionOrder: string;
}

interface Workflow {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  active: boolean;
  nodes: Node[];
  connections: Record<string, Connection>;
  settings: Settings;
  staticData: any;
  meta: any;
  pinData: Record<string, any>;
  versionId: string;
  triggerCount: number;
  tags: Tag[];
}

// {
//   "parameters": {
//     "resume": "webhook",
//     "options": {}
//   },
//   "id": "dcf7fdf3-75e4-4ab1-9763-b2d026d5bd11",
//   "name": "Wait-2",
//   "type": "n8n-nodes-base.wait",
//   "typeVersion": 1.1,
//   "position": [
//     460,
//     20
//   ],
//   "webhookId": "14213cf4-a03c-41e5-96b0-e29e42cae3d1"
// },

// {
//   "parameters": {
//     "path": "81077764-c44b-4b8b-a729-b94ae18b094c",
//     "responseMode": "responseNode",
//     "options": {}
//   },
//   "id": "5df08609-51c0-40f0-881b-b05e35a9bcf1",
//   "name": "Webhook",
//   "type": "n8n-nodes-base.webhook",
//   "typeVersion": 2,
//   "position": [
//     0,
//     20
//   ],
//   "webhookId": "81077764-c44b-4b8b-a729-b94ae18b094c"
// },

// https://n8n-flashclass.onrender.com/webhook/81077764-c44b-4b8b-a729-b94ae18b094c

// curl https://n8n-flashclass.onrender.com/webhook-waiting/14213cf4-a03c-41e5-96b0-e29e42cae3d1 // this is the webhookId
// curl https://n8n-flashclass.onrender.com/webhook-waiting/dcf7fdf3-75e4-4ab1-9763-b2d026d5bd11 // this is the id

// curl https://n8n-flashclass.onrender.com/14213cf4-a03c-41e5-96b0-e29e42cae3d1 // this is the webhookId
// curl https://n8n-flashclass.onrender.com/dcf7fdf3-75e4-4ab1-9763-b2d026d5bd11 // this is the id
// curl https://n8n-flashclass.onrender.com/webhook-waiting/123
