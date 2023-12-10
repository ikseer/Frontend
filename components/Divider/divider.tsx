import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
interface DividerProps {
  text:string,
}

export default function DividerText({text}:DividerProps) {

  return (
    <Root>
      <Divider>{text}</Divider>
    </Root>
  );
}