
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import "../../app/[locale]/globals.css"
import "./divider.css"

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  display:"flex",
  justifyContent:"center",
  margin:"20px 0px",
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
      <Divider  role="presentation"  className="or-divider">{text}</Divider>
    </Root>
  );
}