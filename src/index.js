import { Divider, Grid } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function NewForm(props) {
  console.log(props)
  const {data,handleChange} = props;
  return (
    <>
    <div style={{width:"60%",padding:"10px",margin:"auto",border:"1px solid black",borderRadius:"5px"}}>
    <Grid container spacing={3} justifyContent="center">
      <Grid item sm={12} md={12} lg={12}>Rules</Grid>
      <Divider/>
      {data.map((obj,i)=>{
      return <Grid item sm={12} md={12} lg={12}>
         <FormControl key={i} fullWidth>
            <InputLabel id="demo-simple-select-label">{obj.label}</InputLabel>
             <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={obj.value}
                name={obj.label}
                multiple
                label={obj.label}
                onChange={(event)=>handleChange(event)}
                >
              <MenuItem value="">Select</MenuItem>    
              {obj.options.map((option,i)=>{
              return <MenuItem key={i} value={option}>{option}</MenuItem>
              })}
           </Select>
        </FormControl>
      </Grid>
    })}
    </Grid>
    </div>
    </>
  )
}

export default NewForm;