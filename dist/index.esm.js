import { Grid, Divider } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

function NewForm(props) {
  console.log(props);
  var data = props.data,
    handleChange = props.handleChange;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "60%",
      padding: "10px",
      margin: "auto",
      border: "1px solid black",
      borderRadius: "5px"
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 3,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    sm: 12,
    md: 12,
    lg: 12
  }, "Rules"), /*#__PURE__*/React.createElement(Divider, null), data.map(function (obj, i) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      sm: 12,
      md: 12,
      lg: 12
    }, /*#__PURE__*/React.createElement(FormControl, {
      key: i,
      fullWidth: true
    }, /*#__PURE__*/React.createElement(InputLabel, {
      id: "demo-simple-select-label"
    }, obj.label), /*#__PURE__*/React.createElement(Select, {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: obj.value,
      name: obj.label,
      multiple: true,
      label: obj.label,
      onChange: function onChange(event) {
        return handleChange(event);
      }
    }, /*#__PURE__*/React.createElement(MenuItem, {
      value: ""
    }, "Select"), obj.options.map(function (option, i) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: i,
        value: option
      }, option);
    }))));
  }))));
}

export { NewForm as default };
