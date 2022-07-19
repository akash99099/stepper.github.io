import React from 'react'

import Select from "@mui/material/Select";

import { MenuItem,ListItemText,FormControl, InputLabel } from '@mui/material';

import "../../App.css"

const names = [
    "Java",
    "Javascript",
    "Python",
    "React Js",
    "Angular Js",
    "Vue Js",
    "Node Js",
    "Express",
    "Django",
    "SpringBoot"
  ];    

const DropDownSkill = (props) => {
  return (
    <FormControl  variant="standard" style={{ width: '100%',marginTop:20 }}>
          <InputLabel  error={props.error} id='test-select-label'>Skill</InputLabel>
        <Select
            label="Skill"
            multiple
            error={props.error}
            value={props.value}
            onChange={props.onChange}
            autoFocus={true}
            IconComponent={props.IconComponent}    
            renderValue={props.renderValue}
        >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name}  />
                </MenuItem>
              ))}
        </Select>
    </FormControl>
  )
}

export default DropDownSkill