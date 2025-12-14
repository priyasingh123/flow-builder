import withNameTypeHandlers from "../HOC/withNameTypeHandlers";
import { Handle, Position } from "reactflow";

const DocNode = ({ id, currName, handleNameChange }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id={`${id}-system`} />
      <div>
        <span>Document</span>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <div>
          <span>This is a Document Node</span>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </>
  );
};

export default withNameTypeHandlers({
  targetDefaultName: "doc_",
  initialDefaultName: "doc-",
  styleObj: {
    height: 100,
    backgroundColor: "#D1FAE5",
  },
})(DocNode);
