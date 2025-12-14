// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="radio" label="Radio" />
        <DraggableNode type="gif" label="GIF" />
        <DraggableNode type="modal" label="Modal" />
        <DraggableNode type="doc" label="Doc" />
        <DraggableNode type="graph" label="Graph" />
      </div>
    </div>
  );
};
