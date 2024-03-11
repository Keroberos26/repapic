import React from 'react';
import { TableGrid, UpdateDelete } from '../../../components';
import { useFetch } from '../../../hooks';
import { Avatar, Chip } from '@mui/material';

const STATUS = {
  pending: {
    label: 'Chờ',
    color: 'warning',
  },
  verified: {
    label: 'Đã xác thực',
    color: 'success',
  },
  banned: {
    label: 'Cấm',
    color: 'error',
  },
};

const UserName = ({ avatar, firstName, lastName, email }) => {
  const name = firstName + ' ' + lastName;

  return (
    <div className="flex items-center gap-4">
      <Avatar src={avatar} alt={name} />
      <div>
        <div className="text-default">{name}</div>
        <div className="text-[#919EAB]">{email}</div>
      </div>
    </div>
  );
};

const columns = [
  {
    field: 'name',
    headerName: 'Tên',
    width: 300,
    renderCell: ({ row }) => <UserName {...row} />,
    valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
  },
  { field: 'address', headerName: 'Địa chỉ', width: 300, valueGetter: ({ row }) => row.address?.path },
  { field: 'phone', headerName: 'Số điện thoại', width: 160 },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 150,
    align: 'center',
    valueGetter: ({ row }) => STATUS[row.status].label,
    renderCell: ({ row }) => <Chip color={STATUS[row.status].color} label={STATUS[row.status].label} />,
  },
  {
    field: 'action',
    headerName: '',
    width: 100,
    sortable: false,
    filterable: false,
    align: 'center',
    renderCell: UpdateDelete,
  },
];

const UserTable = () => {
  const { data } = useFetch('/users');

  return <TableGrid rows={data} columns={columns} rowHeight={77} />;
};

export default UserTable;
