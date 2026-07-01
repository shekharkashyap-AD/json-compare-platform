import React, { useState } from 'react';
import Tabs from '@components/common/Tabs';
import DiffViewer from './DiffViewer';
import TreeView from './TreeView';
import TableView from './TableView';

interface ComparisonViewProps {
  diff: any;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ diff }) => {
  const tabs = [
    {
      label: 'Diff View',
      value: 'diff',
      content: <DiffViewer diff={diff} />,
    },
    {
      label: 'Tree View',
      value: 'tree',
      content: <TreeView diff={diff} />,
    },
    {
      label: 'Table View',
      value: 'table',
      content: <TableView diff={diff} />,
    },
  ];

  return <Tabs tabs={tabs} />;
};

export default ComparisonView;
