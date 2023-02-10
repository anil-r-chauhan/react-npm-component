import { FormControl, InputLabel, Select } from '@mui/material'
import React from 'react'

function NewForm(props) {
  const {data} = props;
  return (
    <>
    {data.map((obj,i)=>{
       <FormControl key={i} fullWidth>
            <InputLabel id="demo-simple-select-label">{obj.label}</InputLabel>
             <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={obj.value}
                multiple
                label={`${obj.label}`}
                onChange={handleChange}
                >
              <MenuItem value="">Select</MenuItem>    
              {obj.options.map((option,i)=>{
              <MenuItem key={i} value={option.value}>{option.value}</MenuItem>
              })}
           </Select>
        </FormControl>
    })}
    </>
  )
}

export default NewForm;