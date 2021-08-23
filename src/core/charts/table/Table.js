import styled from 'styled-components'
import T from 'core/i18n/T'
import React from 'react'
import { useTheme } from 'styled-components'


const Table = ({data}) => {
  const theme = useTheme();

  return (
    <DataTable>
      <thead>
        <tr>
          <th>Label</th>
          <th>Count</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {data?.buckets?.sort((a, b) => b?.percentage - a?.percentage).map((bucket, index) => bucket && <tr key={bucket?.id}>
          <td>{bucket.id && <T k={bucket?.id} />}</td>
          <td>{bucket?.count}</td>
          <td>{bucket?.percentage}%</td>
        </tr>)}
      </tbody>
    </DataTable>
  )
};

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
  }

  td, th {
    padding: 0.75rem 0.45rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin: 0;
  }
`;

export default Table;