// Comparison Types
export interface JsonDiff {
  added: Record<string, any>;
  removed: Record<string, any>;
  modified: Record<string, any>;
  unchanged: Record<string, any>;
  similarity: number;
  totalChanges: number;
}

export interface DiffNode {
  key: string;
  type: 'added' | 'removed' | 'modified' | 'unchanged';
  value?: any;
  oldValue?: any;
  children?: DiffNode[];
  path: string;
}

export interface ComparisonStats {
  nodeCount: number;
  depth: number;
  objectCount: number;
  arrayCount: number;
  primitiveCount: number;
  duplicateKeys: string[];
  fileSize: number;
  memoryEstimate: string;
  largestObject?: string;
  largestArray?: string;
}

// Editor Types
export interface EditorState {
  leftContent: string;
  rightContent: string;
  language: 'json' | 'yaml';
  fontSize: number;
  tabSize: number;
  wordWrap: boolean;
}

// Settings Types
export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  ignoreKeyOrder: boolean;
  ignoreArrayOrder: boolean;
  autoFormat: boolean;
  liveComparison: boolean;
  autosave: boolean;
  fontSize: number;
  tabSize: number;
}

// API Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}

export interface ValidationError {
  message: string;
  line: number;
  column: number;
  severity: 'error' | 'warning' | 'info';
}
