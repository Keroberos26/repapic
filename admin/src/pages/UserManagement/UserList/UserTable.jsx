import { Checkbox, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import SimpleBar from 'simplebar-react';

const UserTable = () => {
  return (
    <SimpleBar className="overflow-x-clip">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Tên người dùng</TableCell>
              <TableCell align="right">Số điện thoại</TableCell>
              <TableCell align="right">Địa chỉ</TableCell>
              <TableCell align="right">Vai trò</TableCell>
              <TableCell align="right">Trạng thái</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </SimpleBar>
  );
};

export default UserTable;
