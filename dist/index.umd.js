(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@material-ui/core'), require('@mui/material'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@material-ui/core', '@mui/material', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global.core, global.material, global.React));
})(this, (function (core, material, React) { 'use strict';

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
    }, /*#__PURE__*/React.createElement(core.Grid, {
      container: true,
      spacing: 3,
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(core.Grid, {
      item: true,
      sm: 12,
      md: 12,
      lg: 12
    }, "Rules"), /*#__PURE__*/React.createElement(core.Divider, null), data.map(function (obj, i) {
      return /*#__PURE__*/React.createElement(core.Grid, {
        item: true,
        sm: 12,
        md: 12,
        lg: 12
      }, /*#__PURE__*/React.createElement(material.FormControl, {
        key: i,
        fullWidth: true
      }, /*#__PURE__*/React.createElement(material.InputLabel, {
        id: "demo-simple-select-label"
      }, obj.label), /*#__PURE__*/React.createElement(material.Select, {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        value: obj.value,
        name: obj.label,
        multiple: true,
        label: obj.label,
        onChange: function onChange(event) {
          return handleChange(event);
        }
      }, /*#__PURE__*/React.createElement(material.MenuItem, {
        value: ""
      }, "Select"), obj.options.map(function (option, i) {
        return /*#__PURE__*/React.createElement(material.MenuItem, {
          key: i,
          value: option
        }, option);
      }))));
    }))));
  }

  return NewForm;

}));
