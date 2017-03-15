'use strict';
module.exports = function() {
  var secretVault = {};

  function setValue(key, value) {
    secretVault[key] = value;
  }

  function getValue(key) {
    if (secretVault[key] === undefined) {
      return null;
    } else {
      return secretVault[key];
    }
  }


  return {
    setValue,
    getValue
  };
};