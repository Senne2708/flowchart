// src/types.ts
export type NodeType = 'process' | 'config' | 'decision' | 'module' | 'note';

export interface FlowchartNode {
  id: string;
  type: NodeType;
  text: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  connections?: string[];
  dashedConnections?: string[];
  note?: string;
  section?: 'dataset' | 'mask' | null;
}

export interface FlowchartSection {
  id: string;
  nodes: string[];
  color: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FlowchartData {
  nodes: FlowchartNode[];
  sections: FlowchartSection[];
}
