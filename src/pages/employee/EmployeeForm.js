import React from 'react'

//MUI
import Card from "@mui/material/Card";
import StepperSection from '../../component/stepper/Stepper';
import { Box } from '@mui/material';



const EmployeeForm = () => {
  return (
    <Card component={Box} sx={{marginTop:5}} p={3}>
        <StepperSection/>
    </Card>
  )
}

export default EmployeeForm