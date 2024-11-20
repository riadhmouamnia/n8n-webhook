import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

const WorkflowActivityLog = () => {
  const logs = [
    { id: 1, action: "Trigger Executed", time: "2024-11-20 10:00 AM" },
    { id: 2, action: "Welcome Email Sent", time: "2024-11-20 10:05 AM" },
    { id: 3, action: "Follow-Up Scheduled", time: "2024-11-20 10:07 AM" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.id}</TableCell>
              <TableCell>{log.action}</TableCell>
              <TableCell>{log.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorkflowActivityLog;
