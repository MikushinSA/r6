(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react-router', 'react-router-dom', 'react', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react-router'), require('react-router-dom'), require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'r6'.");
    }
    if (typeof this['react-router'] === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'react-router' was not found. Please, check whether 'react-router' is loaded prior to 'r6'.");
    }
    if (typeof this['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'r6'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'r6'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'r6'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'r6'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'r6'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'r6'.");
    }
    root.r6 = factory(typeof r6 === 'undefined' ? {} : r6, this['react-dom/client'], this['react-router'], this['react-router-dom'], react, this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react_router_h6p15h, $module$react_router_dom_s6xi74, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var Route = $module$react_router_h6p15h.Route;
  var Routes = $module$react_router_h6p15h.Routes;
  var BrowserRouter = $module$react_router_dom_s6xi74.BrowserRouter;
  var useReducer = $module$react.useReducer;
  var ensureNotNull = kotlin_kotlin.$_$.p;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.o;
  var classMeta = kotlin_kotlin.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var toString = kotlin_kotlin.$_$.m;
  var toIntOrNull = kotlin_kotlin.$_$.n;
  var numberRangeToNumber = kotlin_kotlin.$_$.k;
  var fillArrayVal = kotlin_kotlin.$_$.i;
  var equals = kotlin_kotlin.$_$.h;
  var arrayListOf = kotlin_kotlin.$_$.c;
  var copyToArray = kotlin_kotlin.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    createRoot(container).render(create(get_App()));
  }
  function Action() {
  }
  Action.$metadata$ = interfaceMeta('Action');
  function MarkStudent(courseId, studentId, grade) {
    this.r5_1 = courseId;
    this.s5_1 = studentId;
    this.t5_1 = grade;
  }
  MarkStudent.prototype.u5 = function () {
    return this.r5_1;
  };
  MarkStudent.prototype.v5 = function () {
    return this.s5_1;
  };
  MarkStudent.prototype.toString = function () {
    return 'MarkStudent(courseId=' + this.r5_1 + ', studentId=' + this.s5_1 + ', grade=' + this.t5_1 + ')';
  };
  MarkStudent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MarkStudent))
      return false;
    var tmp0_other_with_cast = other instanceof MarkStudent ? other : THROW_CCE();
    if (!(this.r5_1 === tmp0_other_with_cast.r5_1))
      return false;
    if (!(this.s5_1 === tmp0_other_with_cast.s5_1))
      return false;
    if (!(this.t5_1 === tmp0_other_with_cast.t5_1))
      return false;
    return true;
  };
  MarkStudent.$metadata$ = classMeta('MarkStudent', [Action]);
  function get_App() {
    init_properties_App_kt_kz6q5v();
    return App;
  }
  var App;
  function App$lambda$lambda$lambda$lambda$lambda() {
    return function ($this$invoke) {
      $this$invoke.path = '/';
      $this$invoke.element = create(get_CCourseList());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda$lambda() {
    return function ($this$invoke) {
      var tmp = Route;
      $this$invoke.l5(tmp, App$lambda$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda$lambda() {
    return function ($this$invoke) {
      var tmp = Routes;
      $this$invoke.l5(tmp, App$lambda$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda() {
    return function ($this$invoke) {
      var tmp$ret$2;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'div';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.l5(tmp, App$lambda$lambda$lambda());
      return Unit_getInstance();
    };
  }
  function App$lambda() {
    return function ($this$FC, it) {
      var tmp = BrowserRouter;
      $this$FC.l5(tmp, App$lambda$lambda());
      return Unit_getInstance();
    };
  }
  var properties_initialized_App_kt_kalemn;
  function init_properties_App_kt_kz6q5v() {
    if (properties_initialized_App_kt_kalemn) {
    } else {
      properties_initialized_App_kt_kalemn = true;
      App = FC('App', App$lambda());
    }
  }
  function get_CCourseList() {
    init_properties_CourseList_kt_hltr1b();
    return CCourseList;
  }
  var CCourseList;
  function CCourseList$lambda$lambda$lambda() {
    return function ($this$invoke) {
      $this$invoke.k5('\u041B\u0438\u0441\u0442 \u043E\u0446\u0435\u043D\u043E\u043A \u043F\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430\u043C');
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($currentGrade) {
    return function ($this$invoke) {
      $this$invoke.k5('\u041E\u0446\u0435\u043D\u043A\u0430: ' + toString($currentGrade));
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($item, $dispatch, $element) {
    return function (it) {
      var tmp0_safe_receiver = window.prompt('\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0446\u0435\u043D\u043A\u0443 ' + $item.w5_1 + ' ' + $item.x5_1, '1');
      var grade = tmp0_safe_receiver == null ? null : toIntOrNull(tmp0_safe_receiver);
      var tmp;
      if (!(grade == null) ? numberRangeToNumber(1, 5).j1(grade) : false) {
        tmp = $dispatch(new MarkStudent($element.b6(), $item.b6(), grade));
      } else {
        tmp = window.alert('\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043D\u043E \u0431\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0442 1 \u0434\u043E 5');
      }
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($item, $dispatch, $element) {
    return function ($this$invoke) {
      $this$invoke.k5('\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0446\u0435\u043D\u043A\u0443');
      $this$invoke.onClick = CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($item, $dispatch, $element);
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda($item, $element, $tmp1__anonymous__6ijp4k, $dispatch) {
    return function ($this$invoke) {
      $this$invoke.k5($item.w5_1);
      $this$invoke.k5($item.x5_1);
      var currentGrade = $element.a6_1[$tmp1__anonymous__6ijp4k];
      var tmp$ret$2;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'div';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.l5(tmp, CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(currentGrade));
      var tmp$ret$5;
      {
        var tmp1__get_button__gut1ry = ReactHTML_getInstance();
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            tmp$ret$3 = 'button';
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp_0 = tmp$ret$5;
      $this$invoke.l5(tmp_0, CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($item, $dispatch, $element));
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda$lambda$lambda($item, $element, $tmp1__anonymous__6ijp4k, $dispatch) {
    return function ($this$invoke) {
      var tmp$ret$2;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'div';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.l5(tmp, CCourseList$lambda$lambda$lambda$lambda$lambda$lambda$lambda($item, $element, $tmp1__anonymous__6ijp4k, $dispatch));
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda$lambda($element, $dispatch) {
    return function ($this$invoke) {
      var tmp0_forEachIndexed = $element.z5_1;
      var index = 0;
      var indexedObject = tmp0_forEachIndexed;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1__anonymous__uwfjfc = tmp1;
          var tmp$ret$2;
          {
            var tmp0__get_li__p4dyoc = ReactHTML_getInstance();
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'li';
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          var tmp = tmp$ret$2;
          $this$invoke.l5(tmp, CCourseList$lambda$lambda$lambda$lambda$lambda$lambda(item, $element, tmp1__anonymous__uwfjfc, $dispatch));
        }
      }
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda$lambda($element, $dispatch) {
    return function ($this$invoke) {
      $this$invoke.k5($element.y5_1);
      var tmp$ret$2;
      {
        var tmp0__get_ul__p4drxi = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'ul';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.l5(tmp, CCourseList$lambda$lambda$lambda$lambda$lambda($element, $dispatch));
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda$lambda_0($state, $dispatch) {
    return function ($this$invoke) {
      var tmp0_forEach = $state.c6_1;
      var indexedObject = tmp0_forEach;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp$ret$2;
          {
            var tmp0__get_li__p4dyoc = ReactHTML_getInstance();
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'li';
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          var tmp = tmp$ret$2;
          $this$invoke.l5(tmp, CCourseList$lambda$lambda$lambda$lambda(element, $dispatch));
        }
      }
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda$lambda($state, $dispatch) {
    return function ($this$invoke) {
      var tmp$ret$2;
      {
        var tmp0__get_h1__p4e2zc = ReactHTML_getInstance();
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = 'h1';
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp = tmp$ret$2;
      $this$invoke.l5(tmp, CCourseList$lambda$lambda$lambda());
      var tmp$ret$5;
      {
        var tmp1__get_ul__sddqpz = ReactHTML_getInstance();
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            tmp$ret$3 = 'ul';
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp_0 = tmp$ret$5;
      $this$invoke.l5(tmp_0, CCourseList$lambda$lambda$lambda_0($state, $dispatch));
      return Unit_getInstance();
    };
  }
  function CCourseList$lambda() {
    return function ($this$FC, it) {
      var tmp0_container = useReducer(get_markReducer(), testState());
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_container;
        }
        tmp$ret$1 = tmp$ret$0[0];
      }
      var state = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp0_container;
        }
        tmp$ret$3 = tmp$ret$2[1];
      }
      var dispatch = tmp$ret$3;
      var tmp$ret$6;
      {
        var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = 'div';
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      var tmp = tmp$ret$6;
      $this$FC.l5(tmp, CCourseList$lambda$lambda(state, dispatch));
      return Unit_getInstance();
    };
  }
  var properties_initialized_CourseList_kt_67udj9;
  function init_properties_CourseList_kt_hltr1b() {
    if (properties_initialized_CourseList_kt_67udj9) {
    } else {
      properties_initialized_CourseList_kt_67udj9 = true;
      CCourseList = FC('CourseList', CCourseList$lambda());
    }
  }
  function Course_init_$Init$(name, students, grades, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0)) {
      var tmp = 0;
      var tmp_0 = students.length;
      var tmp$ret$0;
      var tmp$ret$0_0;
      {
        tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
        tmp$ret$0_0 = Unit_getInstance();
      }
      var tmp_1 = tmp$ret$0;
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$1;
        var tmp$ret$1_0;
        {
          tmp$ret$1 = '\u0425';
          tmp$ret$1_0 = Unit_getInstance();
        }
        tmp_1[tmp_2] = tmp$ret$1;
        tmp = tmp + 1 | 0;
      }
      grades = tmp_1;
    }
    Course.call($this, name, students, grades);
    return $this;
  }
  function Course_init_$Create$(name, students, grades, $mask0, $marker) {
    return Course_init_$Init$(name, students, grades, $mask0, $marker, Object.create(Course.prototype));
  }
  function Course(name, students, grades) {
    this.y5_1 = name;
    this.z5_1 = students;
    this.a6_1 = grades;
  }
  Course.prototype.n4 = function () {
    return this.y5_1;
  };
  Course.prototype.e6 = function () {
    return this.z5_1;
  };
  Course.prototype.f6 = function () {
    return this.a6_1;
  };
  Course.prototype.b6 = function () {
    return this.y5_1;
  };
  Course.prototype.g6 = function (action) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_indexOfFirst = this.z5_1;
      var inductionVariable = 0;
      var last = tmp0_indexOfFirst.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            var tmp1__anonymous__uwfjfc = tmp0_indexOfFirst[index];
            tmp$ret$0 = tmp1__anonymous__uwfjfc.b6() === action.s5_1;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var studentIndex = tmp$ret$1;
    if (!(studentIndex === -1)) {
      var tmp$ret$3;
      {
        var tmp2_copyOf = this.a6_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp2_copyOf;
        }
        tmp$ret$3 = tmp$ret$2.slice();
      }
      var updatedGrades = tmp$ret$3;
      updatedGrades[studentIndex] = action.t5_1;
      return this.h6(null, null, updatedGrades, 3, null);
    }
    return this;
  };
  Course.prototype.i6 = function (name, students, grades) {
    return new Course(name, students, grades);
  };
  Course.prototype.h6 = function (name, students, grades, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.y5_1;
    if (!(($mask0 & 2) === 0))
      students = this.z5_1;
    if (!(($mask0 & 4) === 0))
      grades = this.a6_1;
    return this.i6(name, students, grades);
  };
  Course.prototype.toString = function () {
    return 'Course(name=' + this.y5_1 + ', students=' + toString(this.z5_1) + ', grades=' + toString(this.a6_1) + ')';
  };
  Course.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Course))
      return false;
    var tmp0_other_with_cast = other instanceof Course ? other : THROW_CCE();
    if (!(this.y5_1 === tmp0_other_with_cast.y5_1))
      return false;
    if (!equals(this.z5_1, tmp0_other_with_cast.z5_1))
      return false;
    if (!equals(this.a6_1, tmp0_other_with_cast.a6_1))
      return false;
    return true;
  };
  Course.$metadata$ = classMeta('Course');
  function get_studentList() {
    init_properties_CourseList_kt_hltr1b_0();
    return studentList;
  }
  var studentList;
  function get_courseList() {
    init_properties_CourseList_kt_hltr1b_0();
    return courseList;
  }
  var courseList;
  var properties_initialized_CourseList_kt_67udj9_0;
  function init_properties_CourseList_kt_hltr1b_0() {
    if (properties_initialized_CourseList_kt_67udj9_0) {
    } else {
      properties_initialized_CourseList_kt_67udj9_0 = true;
      studentList = arrayListOf([new Student('Sheldon', 'Cooper'), new Student('Leonard', 'Hofstadter'), new Student('Howard', 'Wolowitz')]);
      var tmp$ret$0;
      {
        var tmp0_toTypedArray = get_studentList();
        tmp$ret$0 = copyToArray(tmp0_toTypedArray);
      }
      var tmp = tmp$ret$0;
      var tmp_0 = Course_init_$Create$('\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430', tmp, null, 4, null);
      var tmp$ret$1;
      {
        var tmp1_toTypedArray = get_studentList();
        tmp$ret$1 = copyToArray(tmp1_toTypedArray);
      }
      var tmp_1 = tmp$ret$1;
      var tmp_2 = Course_init_$Create$('\u0424\u0438\u0437\u0438\u043A\u0430', tmp_1, null, 4, null);
      var tmp$ret$2;
      {
        var tmp2_toTypedArray = get_studentList();
        tmp$ret$2 = copyToArray(tmp2_toTypedArray);
      }
      var tmp_3 = tmp$ret$2;
      courseList = arrayListOf([tmp_0, tmp_2, Course_init_$Create$('\u0425\u0438\u043C\u0438\u044F', tmp_3, null, 4, null)]);
    }
  }
  function State(courses, students) {
    this.c6_1 = courses;
    this.d6_1 = students;
  }
  State.$metadata$ = classMeta('State');
  function testState() {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp0_map = get_courseList();
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.c();
          while (tmp0_iterator.d()) {
            var item = tmp0_iterator.e();
            var tmp$ret$0;
            {
              tmp$ret$0 = item;
            }
            tmp0_mapTo.a(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp1_toTypedArray = tmp$ret$2;
      tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    }
    var tmp = tmp$ret$3;
    var tmp$ret$7;
    {
      var tmp$ret$6;
      {
        var tmp2_map = get_studentList();
        var tmp$ret$5;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_map, 10));
          var tmp0_iterator_0 = tmp2_map.c();
          while (tmp0_iterator_0.d()) {
            var item_0 = tmp0_iterator_0.e();
            var tmp$ret$4;
            {
              tmp$ret$4 = item_0;
            }
            tmp0_mapTo_0.a(tmp$ret$4);
          }
          tmp$ret$5 = tmp0_mapTo_0;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      var tmp3_toTypedArray = tmp$ret$6;
      tmp$ret$7 = copyToArray(tmp3_toTypedArray);
    }
    return new State(tmp, tmp$ret$7);
  }
  function Student(firstname, surname) {
    this.w5_1 = firstname;
    this.x5_1 = surname;
  }
  Student.prototype.j6 = function () {
    return this.w5_1;
  };
  Student.prototype.k6 = function () {
    return this.x5_1;
  };
  Student.prototype.b6 = function () {
    return this.w5_1 + ' ' + this.x5_1;
  };
  Student.prototype.toString = function () {
    return 'Student(firstname=' + this.w5_1 + ', surname=' + this.x5_1 + ')';
  };
  Student.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Student))
      return false;
    var tmp0_other_with_cast = other instanceof Student ? other : THROW_CCE();
    if (!(this.w5_1 === tmp0_other_with_cast.w5_1))
      return false;
    if (!(this.x5_1 === tmp0_other_with_cast.x5_1))
      return false;
    return true;
  };
  Student.$metadata$ = classMeta('Student');
  function get_markReducer() {
    init_properties_Reducer_kt_c057fs();
    return markReducer;
  }
  var markReducer;
  function markReducer$lambda() {
    return function (state, action) {
      var tmp0_subject = action;
      var tmp;
      if (tmp0_subject instanceof MarkStudent) {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp0_map = state.c6_1;
            var tmp$ret$1;
            {
              var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
              var indexedObject = tmp0_map;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var item = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$0;
                {
                  var tmp_0;
                  if (item.b6() === action.r5_1) {
                    tmp_0 = item.g6(action);
                  } else {
                    tmp_0 = item;
                  }
                  tmp$ret$0 = tmp_0;
                }
                tmp0_mapTo.a(tmp$ret$0);
              }
              tmp$ret$1 = tmp0_mapTo;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          var tmp1_toTypedArray = tmp$ret$2;
          tmp$ret$3 = copyToArray(tmp1_toTypedArray);
        }
        tmp = new State(tmp$ret$3, state.d6_1);
      } else {
        tmp = state;
      }
      return tmp;
    };
  }
  var properties_initialized_Reducer_kt_z2yyis;
  function init_properties_Reducer_kt_c057fs() {
    if (properties_initialized_Reducer_kt_z2yyis) {
    } else {
      properties_initialized_Reducer_kt_z2yyis = true;
      markReducer = markReducer$lambda();
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=r6.js.map