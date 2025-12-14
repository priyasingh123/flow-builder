// textNode.js

import { Handle, Position } from "reactflow";
import withNameTypeHandlers from "../HOC/withNameTypeHandlers";
import { useEffect, useRef, useState } from "react";
import { extractAndValidateVariables } from "../utils/helperFunctions";

const TextNode = ({ id, currName, handleNameChange }) => {
  const textareaRef = useRef(null);
  const [handles, setHandles] = useState([]);

  const scanForVariable = (text) => {
    const result = extractAndValidateVariables(text);
    setHandles(result);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      scanForVariable(currName);
    }, 500);

    return () => clearTimeout(timerId);
  }, [currName]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [currName]);

  return (
    <>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <textarea
            type="text"
            ref={textareaRef}
            value={currName}
            onChange={handleNameChange}
            style={{ resize: "none", overflow: "hidden" }}
          />
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
      {handles.map((handle, index) => {
        const offset = (index + 1) / (handles.length + 1);
        return (
          <Handle
            key={`${id}-${handle}`}
            type="target"
            position={Position.Left}
            id={`${id}-${handle}`}
            style={{ top: `${offset * 100}%` }}
          />
        );
      })}
    </>
  );
};

export default withNameTypeHandlers({
  nameKey: "text",
  targetDefaultName: "{{input}}",
  styleObj: {
    height: "auto",
  },
})(TextNode);
