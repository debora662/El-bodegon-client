import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSize() {
  return (
    <Stack spacing={1}>
      <Pagination count={10} color="secondary" size="large"/>
    </Stack>
  );
}