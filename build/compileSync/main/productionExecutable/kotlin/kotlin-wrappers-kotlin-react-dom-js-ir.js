(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-dom-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-dom-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-dom-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  //endregion
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  ReactHTML.prototype.m5 = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = 'button';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ReactHTML.prototype.n5 = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = 'div';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ReactHTML.prototype.o5 = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = 'h1';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ReactHTML.prototype.p5 = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = 'li';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ReactHTML.prototype.q5 = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = 'ul';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ReactHTML.$metadata$ = objectMeta('ReactHTML');
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance == null)
      new ReactHTML();
    return ReactHTML_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReactHTML_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-dom-js-ir.js.map