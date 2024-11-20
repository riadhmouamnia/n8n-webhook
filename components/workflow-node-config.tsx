import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const WorkflowNodeConfig = () => {
  return (
    <form className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 space-y-4">
      <h2 className="text-lg font-semibold">Node Configuration</h2>
      <div>
        <Label htmlFor="nodename">Node Name</Label>
        <Input id="nodename" type="text" placeholder="Enter node name" />
      </div>
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Node Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Node Type</SelectLabel>
              <SelectItem value="trigger">Trigger</SelectItem>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="wait">Wait</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="nodeDetails">Node Details</Label>
        <Input id="nodeDetails" type="text" placeholder="Enter details" />
      </div>
      <Button type="submit" className="w-full bg-blue-600 text-white">
        Save Configuration
      </Button>
    </form>
  );
};

export default WorkflowNodeConfig;
