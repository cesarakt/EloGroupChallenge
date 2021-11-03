import { v4 as uuid } from 'uuid';

import './styles.css';

export default function Table({ label, columns, rows, onRowClick }) {
  const showLabel = <h3>{label}</h3>;
  const showColumns = columns.map(columns => <th>{columns}</th>);

  const showRows = rows.map((columns) => {
    return (
      <tr
        onClick={ev => onRowClick && onRowClick(columns, ev)}
        key={uuid()}
      >
        {columns.map(
          columns => <td key={uuid()}>{columns}</td>)}
      </tr>
    )
  });

  return (
    <>
      {showLabel}
      <table>
        <thead>
          <tr>
            {showColumns}
          </tr>
        </thead>
        <tbody>
          {showRows}
        </tbody>
      </table>
    </>
  )
}
