import React from 'react';

interface TableViewProps {
  diff: any;
}

const TableView: React.FC<TableViewProps> = ({ diff }) => {
  const rows = Object.entries(diff).map(([key, value]) => ({
    key,
    value: JSON.stringify(value),
  }));

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-800">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-200 px-4 py-2 text-left dark:border-gray-800">
              Key
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left dark:border-gray-800">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <td className="border border-gray-200 px-4 py-2 dark:border-gray-800">
                {row.key}
              </td>
              <td className="border border-gray-200 px-4 py-2 dark:border-gray-800">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
