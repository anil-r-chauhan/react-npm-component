(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@mui/material'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@mui/material', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global.material, global.React));
})(this, (function (material, React) { 'use strict';

  function NewForm(props) {
    var data = props.data;
    return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(function (obj, i) {
      /*#__PURE__*/React.createElement(material.FormControl, {
        key: i,
        fullWidth: true
      }, /*#__PURE__*/React.createElement(material.InputLabel, {
        id: "demo-simple-select-label"
      }, obj.label), /*#__PURE__*/React.createElement(material.Select, {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        value: obj.value,
        multiple: true,
        label: "".concat(obj.label),
        onChange: handleChange
      }, /*#__PURE__*/React.createElement(MenuItem, {
        value: ""
      }, "Select"), obj.options.map(function (option, i) {
        /*#__PURE__*/React.createElement(MenuItem, {
          key: i,
          value: option.value
        }, option.value);
      })));
    }));
  }

  return NewForm;

}));
