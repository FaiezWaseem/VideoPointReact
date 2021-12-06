import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonLoading() {
  return (
    <Stack spacing={1} style={{ width : '250px' , margin : '5px'}}>
      <Skeleton variant="rectangular" width={250} height={118} />
      <div style={{ display : 'flex' , justifyContent : 'space-between' }}>
      <div style={{ display : "flex" , alignItems: 'center'}}>
      <Skeleton variant="circular" width={40} height={40} />
      </div>
      <div>
      <Skeleton variant="text" width={190} />
      <Skeleton variant="text" width={150} />
      <Skeleton variant="text" width={rand(100)} />

      </div>
      </div>
    </Stack>
  );
}
function rand(val) {return Math.floor((Math.random() * val)+1)}