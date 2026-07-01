export type DiffType = 'added' | 'removed' | 'modified' | 'unchanged';

export interface DiffResult {
  left: any;
  right: any;
  differences: Difference[];
  similarity: number;
  changeCount: {
    added: number;
    removed: number;
    modified: number;
  };
}

export interface Difference {
  path: string;
  type: DiffType;
  oldValue?: any;
  newValue?: any;
  severity: 'critical' | 'warning' | 'info';
}
