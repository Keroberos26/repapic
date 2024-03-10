import React from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { SortAscIcon, SortDescIcon } from './Icons';
import PropTypes from 'prop-types';

const StyledDataGrid = styled(DataGrid)({
  border: 'none',

  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#f4f6f8',
    borderBottom: 'none',

    '.MuiDataGrid-columnHeader': {
      color: '#637381',

      '&--sorted': {
        color: '#212b36',

        '.MuiDataGrid-sortIcon': {
          color: '#212b36',
        },
      },
    },
  },

  '& .MuiDataGrid-row': {
    '& .MuiDataGrid-cell': {
      borderBottom: '1px dashed',

      '&.MuiDataGrid-withBorderColor': {
        borderColor: 'rgba(145, 158, 171, 0.2)',
      },
    },
  },
});

const TableGrid = ({ rows, columns, ...props }) => {
  return (
    <StyledDataGrid
      rows={rows || []}
      columns={columns}
      slots={{
        columnSortedAscendingIcon: SortAscIcon,
        columnSortedDescendingIcon: SortDescIcon,
      }}
      slotProps={{
        pagination: {
          labelRowsPerPage: 'Số hàng mỗi trang',
          labelDisplayedRows: ({ from, to, count }) => `${from}-${to} trong ${count}`,
        },
      }}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      getRowId={(row) => row._id}
      disableRowSelectionOnClick
      {...props}
    ></StyledDataGrid>
  );
};

TableGrid.propsType = {
  rows: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableGrid;
