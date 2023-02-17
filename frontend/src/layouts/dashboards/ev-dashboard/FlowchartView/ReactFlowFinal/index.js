// import React, { useCallback } from "react";
// import ReactFlow, {
//   addEdge,
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState
// } from "reactflow";

// import { nodes as initialNodes, edges as initialEdges } from "./CustomNode";
// import CustomNode from "./CustomNode";

// import "reactflow/dist/style.css";
// import "./overview.css";

// const nodeTypes = {
//   custom: CustomNode
// };

// const minimapStyle = {
//   height: 120
// };

// const onInit = (reactFlowInstance) =>
//   console.log("flow loaded:", reactFlowInstance);

// const ReactFlowFinal = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     []
//   );

//   // we are using a bit of a shortcut here to adjust the edge type
//   // this could also be done with a custom edge for example
//   const edgesWithUpdatedTypes = edges.map((edge) => {
//     if (edge.sourceHandle) {
//       const edgeType = nodes.find((node) => node.type === "custom").data
//         .selects[edge.sourceHandle];
//       edge.type = edgeType;
//     }

//     return edge;
//   });

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edgesWithUpdatedTypes}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       onInit={onInit}
//       fitView
//       attributionPosition="top-right"
//       nodeTypes={nodeTypes}
//     >
//       <MiniMap style={minimapStyle} zoomable pannable />
//       <Controls />
//       <Background color="#aaa" gap={16} />
//     </ReactFlow>
//   );
// };

import React, { useCallback, useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, useNodesState, useEdgesState, Controls, Background, } from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';

import './index.css';
import { Output } from '@mui/icons-material';
import { propsToClassKey } from '@mui/styles';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    sourcePosition: "right",
    data: { label: 'Cell Data' },
    position: { x: 0, y: 0 },
  },
  { id: '2', 
    data: { label: 'Stacking' }, 
    position: { x: 170, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  { id: '3', 
    data: { label: 'Welding Station' }, 
    position: { x: 340, y: 0 },
    targetPosition: "left",
    sourcePosition: "bottom",
  },
  { id: '4', 
    data: { label: 'Weld Integrity' }, 
    position: { x: 340, y: 60 },
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  { id: '5', 
    data: { label: 'Thermal Layer' }, 
    position: { x: 340, y: 120 },
    targetPosition: "top",
    sourcePosition: "right",
  },
  { id: '6', 
    data: { label: 'Foam Layer' }, 
    position: { x: 510, y: 120 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  { id: '7', 
    data: { label: 'Insertion Layer' }, 
    position: { x: 680, y: 120 },
    targetPosition: "left",
    type: 'output'
  },
];



const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  { id: 'e1-3', 
    source: '2', 
    target: '3' 
  },
  { id: 'e1-4', 
    source: '3', 
    target: '4' 
  },
  { id: 'e1-5', 
    source: '4', 
    target: '5' 
  },
  { id: 'e1-6', 
    source: '5', 
    target: '6' 
  },
  { id: 'e1-7', 
    source: '6', 
    target: '7' 
  },
];

const ReactFlowFinal = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [zoneID, setZoneID] = useState(null)
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  const onNodeClick = useCallback((event, object) => {
    setZoneID(object.id) 
  })

  {zoneID ? props.zone_func(zoneID) : null}

  return (
    <div className="zoompanflow">
      <ReactFlowProvider>
        <div 
        className="reactflow-wrapper">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
          >
             <Controls />
              <Background color="#AAAAAA" gap={16} />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default ReactFlowFinal;
