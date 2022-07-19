import React from 'react'

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DatePicker = (props) => {
  return (
     <LocalizationProvider dateAdapter={AdapterDateFns}>
         <MobileDatePicker
          label={props.label}
          maxDate={new Date()}
          inputFormat="dd/MM/yyyy"
          value={props.value}
          onChange={props.onChange}
          renderInput={props.renderInput}
        />
    </LocalizationProvider>
  )
}

export default DatePicker