(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.CallManager = factory());
})(this, function() {
  "use strict";
  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++)
      n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r))
      return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r))
      return _arrayLikeToArray(r);
  }
  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t))
      return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _assertThisInitialized(e) {
    if (void 0 === e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _asyncGeneratorDelegate(t) {
    var e = {}, n = false;
    function pump(e2, r) {
      return n = true, r = new Promise(function(n2) {
        n2(t[e2](r));
      }), {
        done: false,
        value: new _OverloadYield(r, 1)
      };
    }
    return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
      return this;
    }, e.next = function(t2) {
      return n ? (n = false, t2) : pump("next", t2);
    }, "function" == typeof t.throw && (e.throw = function(t2) {
      if (n)
        throw n = false, t2;
      return pump("throw", t2);
    }), "function" == typeof t.return && (e.return = function(t2) {
      return n ? (n = false, t2) : pump("return", t2);
    }), e;
  }
  function _asyncIterator(r) {
    var n, t, o, e = 2;
    for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
      if (t && null != (n = r[t]))
        return n.call(r);
      if (o && null != (n = r[o]))
        return new AsyncFromSyncIterator(n.call(r));
      t = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function AsyncFromSyncIterator(r) {
    function AsyncFromSyncIteratorContinuation(r2) {
      if (Object(r2) !== r2)
        return Promise.reject(new TypeError(r2 + " is not an object."));
      var n = r2.done;
      return Promise.resolve(r2.value).then(function(r3) {
        return {
          value: r3,
          done: n
        };
      });
    }
    return AsyncFromSyncIterator = function(r2) {
      this.s = r2, this.n = r2.next;
    }, AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function() {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function(r2) {
        var n = this.s.return;
        return void 0 === n ? Promise.resolve({
          value: r2,
          done: true
        }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
      throw: function(r2) {
        var n = this.s.return;
        return void 0 === n ? Promise.reject(r2) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }
    }, new AsyncFromSyncIterator(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c), u = i.value;
    } catch (n2) {
      return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function() {
      var t = this, e = arguments;
      return new Promise(function(r, o) {
        var a = n.apply(t, e);
        function _next(n2) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
        }
        function _throw(n2) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
        }
        _next(void 0);
      });
    };
  }
  function _awaitAsyncGenerator(e) {
    return new _OverloadYield(e, 0);
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  function _classPrivateMethodInitSpec(e, a) {
    _checkPrivateRedeclaration(e, a), a.add(e);
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct())
      return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0, F = function() {
        };
        return {
          s: F,
          n: function() {
            return n >= r.length ? {
              done: true
            } : {
              done: false,
              value: r[n++]
            };
          },
          e: function(r2) {
            throw r2;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = true, u = false;
    return {
      s: function() {
        t = t.call(r);
      },
      n: function() {
        var r2 = t.next();
        return a = r2.done, r2;
      },
      e: function(r2) {
        u = true, o = r2;
      },
      f: function() {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u)
            throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct = function() {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
      return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t)
            return;
          f = false;
        } else
          for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
            ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u))
            return;
        } finally {
          if (o)
            throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e))
      return e;
    if (void 0 !== e)
      throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
      return e;
    };
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
      t2[e2] = r2.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define2(t2, e2, r2) {
      return Object.defineProperty(t2, e2, {
        value: r2,
        enumerable: true,
        configurable: true,
        writable: true
      }), t2[e2];
    }
    try {
      define2({}, "");
    } catch (t2) {
      define2 = function(t3, e2, r2) {
        return t3[e2] = r2;
      };
    }
    function wrap(t2, e2, r2, n2) {
      var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
      return o(a2, "_invoke", {
        value: makeInvokeMethod(t2, r2, c2)
      }), a2;
    }
    function tryCatch(t2, e2, r2) {
      try {
        return {
          type: "normal",
          arg: t2.call(e2, r2)
        };
      } catch (t3) {
        return {
          type: "throw",
          arg: t3
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p = {};
    define2(p, a, function() {
      return this;
    });
    var d = Object.getPrototypeOf, v2 = d && d(d(values([])));
    v2 && v2 !== r && n.call(v2, a) && (p = v2);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t2) {
      ["next", "throw", "return"].forEach(function(e2) {
        define2(t2, e2, function(t3) {
          return this._invoke(e2, t3);
        });
      });
    }
    function AsyncIterator(t2, e2) {
      function invoke(r3, o2, i2, a2) {
        var c2 = tryCatch(t2[r3], t2, o2);
        if ("throw" !== c2.type) {
          var u2 = c2.arg, h2 = u2.value;
          return h2 && "object" == typeof h2 && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
            invoke("next", t3, i2, a2);
          }, function(t3) {
            invoke("throw", t3, i2, a2);
          }) : e2.resolve(h2).then(function(t3) {
            u2.value = t3, i2(u2);
          }, function(t3) {
            return invoke("throw", t3, i2, a2);
          });
        }
        a2(c2.arg);
      }
      var r2;
      o(this, "_invoke", {
        value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e2, r2, n2) {
      var o2 = h;
      return function(i2, a2) {
        if (o2 === f)
          throw Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2)
            throw a2;
          return {
            value: t,
            done: true
          };
        }
        for (n2.method = i2, n2.arg = a2; ; ) {
          var c2 = n2.delegate;
          if (c2) {
            var u2 = maybeInvokeDelegate(c2, n2);
            if (u2) {
              if (u2 === y)
                continue;
              return u2;
            }
          }
          if ("next" === n2.method)
            n2.sent = n2._sent = n2.arg;
          else if ("throw" === n2.method) {
            if (o2 === h)
              throw o2 = s, n2.arg;
            n2.dispatchException(n2.arg);
          } else
            "return" === n2.method && n2.abrupt("return", n2.arg);
          o2 = f;
          var p2 = tryCatch(e2, r2, n2);
          if ("normal" === p2.type) {
            if (o2 = n2.done ? s : l, p2.arg === y)
              continue;
            return {
              value: p2.arg,
              done: n2.done
            };
          }
          "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
        }
      };
    }
    function maybeInvokeDelegate(e2, r2) {
      var n2 = r2.method, o2 = e2.iterator[n2];
      if (o2 === t)
        return r2.delegate = null, "throw" === n2 && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
      var i2 = tryCatch(o2, e2.iterator, r2.arg);
      if ("throw" === i2.type)
        return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
      var a2 = i2.arg;
      return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
    }
    function pushTryEntry(t2) {
      var e2 = {
        tryLoc: t2[0]
      };
      1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
    }
    function resetTryEntry(t2) {
      var e2 = t2.completion || {};
      e2.type = "normal", delete e2.arg, t2.completion = e2;
    }
    function Context(t2) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t2.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e2) {
      if (e2 || "" === e2) {
        var r2 = e2[a];
        if (r2)
          return r2.call(e2);
        if ("function" == typeof e2.next)
          return e2;
        if (!isNaN(e2.length)) {
          var o2 = -1, i2 = function next() {
            for (; ++o2 < e2.length; )
              if (n.call(e2, o2))
                return next.value = e2[o2], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
          return i2.next = i2;
        }
      }
      throw new TypeError(typeof e2 + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
      var e2 = "function" == typeof t2 && t2.constructor;
      return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
    }, e.mark = function(t2) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
    }, e.awrap = function(t2) {
      return {
        __await: t2
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
      return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
        return t3.done ? t3.value : a2.next();
      });
    }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
      return this;
    }), define2(g, "toString", function() {
      return "[object Generator]";
    }), e.keys = function(t2) {
      var e2 = Object(t2), r2 = [];
      for (var n2 in e2)
        r2.push(n2);
      return r2.reverse(), function next() {
        for (; r2.length; ) {
          var t3 = r2.pop();
          if (t3 in e2)
            return next.value = t3, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      },
      stop: function() {
        this.done = true;
        var t2 = this.tryEntries[0].completion;
        if ("throw" === t2.type)
          throw t2.arg;
        return this.rval;
      },
      dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc)
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
            } else {
              if (!u2)
                throw Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      },
      complete: function(t2, e2) {
        if ("throw" === t2.type)
          throw t2.arg;
        return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
      },
      finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      },
      catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if ("throw" === n2.type) {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(e2, r2, n2) {
        return this.delegate = {
          iterator: values(e2),
          resultName: r2,
          nextLoc: n2
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); )
      ;
    return t;
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t)
      return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i)
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r)
        return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapAsyncGenerator(e) {
    return function() {
      return new AsyncGenerator(e.apply(this, arguments));
    };
  }
  function AsyncGenerator(e) {
    var r, t;
    function resume(r2, t2) {
      try {
        var n = e[r2](t2), o = n.value, u = o instanceof _OverloadYield;
        Promise.resolve(u ? o.v : o).then(function(t3) {
          if (u) {
            var i = "return" === r2 ? "return" : "next";
            if (!o.k || t3.done)
              return resume(i, t3);
            t3 = e[i](t3).value;
          }
          settle(n.done ? "return" : "normal", t3);
        }, function(e2) {
          resume("throw", e2);
        });
      } catch (e2) {
        settle("throw", e2);
      }
    }
    function settle(e2, n) {
      switch (e2) {
        case "return":
          r.resolve({
            value: n,
            done: true
          });
          break;
        case "throw":
          r.reject(n);
          break;
        default:
          r.resolve({
            value: n,
            done: false
          });
      }
      (r = r.next) ? resume(r.key, r.arg) : t = null;
    }
    this._invoke = function(e2, n) {
      return new Promise(function(o, u) {
        var i = {
          key: e2,
          arg: n,
          resolve: o,
          reject: u,
          next: null
        };
        t ? t = t.next = i : (r = t = i, resume(e2, n));
      });
    }, "function" != typeof e.return && (this.return = void 0);
  }
  AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, AsyncGenerator.prototype.next = function(e) {
    return this._invoke("next", e);
  }, AsyncGenerator.prototype.throw = function(e) {
    return this._invoke("throw", e);
  }, AsyncGenerator.prototype.return = function(e) {
    return this._invoke("return", e);
  };
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return _wrapNativeSuper = function(t2) {
      if (null === t2 || !_isNativeFunction(t2))
        return t2;
      if ("function" != typeof t2)
        throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t2))
          return r.get(t2);
        r.set(t2, Wrapper);
      }
      function Wrapper() {
        return _construct(t2, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper, t2);
    }, _wrapNativeSuper(t);
  }
  var ps = Object.defineProperty;
  var Kg = Object.getOwnPropertyDescriptor;
  var Gg = Object.getOwnPropertyNames;
  var Qg = Object.prototype.hasOwnProperty;
  var we = function we2(t, e) {
    return function() {
      return t && (e = t(t = 0)), e;
    };
  };
  var M = function M2(t, e) {
    return function() {
      return e || t((e = {
        exports: {}
      }).exports, e), e.exports;
    };
  }, Qt = function Qt2(t, e) {
    for (var r in e)
      ps(t, r, {
        get: e[r],
        enumerable: true
      });
  }, Yg = function Yg2(t, e, r, i) {
    if (e && _typeof(e) == "object" || typeof e == "function") {
      var _iterator13 = _createForOfIteratorHelper(Gg(e)), _step13;
      try {
        var _loop = function _loop2() {
          var n = _step13.value;
          !Qg.call(t, n) && n !== r && ps(t, n, {
            get: function get() {
              return e[n];
            },
            enumerable: !(i = Kg(e, n)) || i.enumerable
          });
        };
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
    return t;
  };
  var X = function X2(t) {
    return Yg(ps({}, "__esModule", {
      value: true
    }), t);
  };
  var P, _ = we(function() {
    P = {
      deviceMemory: 8,
      hardwareConcurrency: 8,
      language: "en-US"
    };
  });
  var B = {};
  Qt(B, {
    _debugEnd: function _debugEnd() {
      return yu;
    },
    _debugProcess: function _debugProcess() {
      return gu;
    },
    _events: function _events() {
      return ku;
    },
    _eventsCount: function _eventsCount() {
      return xu;
    },
    _exiting: function _exiting() {
      return Yl;
    },
    _fatalExceptions: function _fatalExceptions() {
      return cu;
    },
    _getActiveHandles: function _getActiveHandles() {
      return eu;
    },
    _getActiveRequests: function _getActiveRequests() {
      return Zl;
    },
    _kill: function _kill() {
      return ru;
    },
    _linkedBinding: function _linkedBinding() {
      return Gl;
    },
    _maxListeners: function _maxListeners() {
      return Ou;
    },
    _preload_modules: function _preload_modules() {
      return Cu;
    },
    _rawDebug: function _rawDebug() {
      return zl;
    },
    _startProfilerIdleNotifier: function _startProfilerIdleNotifier() {
      return bu;
    },
    _stopProfilerIdleNotifier: function _stopProfilerIdleNotifier() {
      return wu;
    },
    _tickCallback: function _tickCallback() {
      return pu;
    },
    abort: function abort() {
      return Eu;
    },
    addListener: function addListener() {
      return Mu;
    },
    allowedNodeEnvironmentFlags: function allowedNodeEnvironmentFlags() {
      return lu;
    },
    arch: function arch() {
      return xl;
    },
    argv: function argv() {
      return Ul;
    },
    argv0: function argv0() {
      return Ru;
    },
    assert: function assert() {
      return uu;
    },
    binding: function binding() {
      return Fl;
    },
    chdir: function chdir() {
      return Hl;
    },
    config: function config() {
      return Jl;
    },
    cpuUsage: function cpuUsage() {
      return Fi;
    },
    cwd: function cwd() {
      return $l;
    },
    debugPort: function debugPort() {
      return Tu;
    },
    default: function _default() {
      return $u;
    },
    dlopen: function dlopen() {
      return Xl;
    },
    domain: function domain() {
      return Ql;
    },
    emit: function emit() {
      return Du;
    },
    emitWarning: function emitWarning() {
      return jl;
    },
    env: function env() {
      return Ll;
    },
    execArgv: function execArgv() {
      return Nl;
    },
    execPath: function execPath() {
      return Iu;
    },
    exit: function exit() {
      return ou;
    },
    features: function features() {
      return fu;
    },
    hasUncaughtExceptionCaptureCallback: function hasUncaughtExceptionCaptureCallback() {
      return du;
    },
    hrtime: function hrtime() {
      return ji;
    },
    kill: function kill() {
      return su;
    },
    listeners: function listeners() {
      return Wu;
    },
    memoryUsage: function memoryUsage() {
      return nu;
    },
    moduleLoadList: function moduleLoadList() {
      return Kl;
    },
    nextTick: function nextTick() {
      return Pl;
    },
    off: function off() {
      return Uu;
    },
    on: function on2() {
      return wt;
    },
    once: function once() {
      return Lu;
    },
    openStdin: function openStdin() {
      return au;
    },
    pid: function pid() {
      return Su;
    },
    platform: function platform() {
      return Ml;
    },
    ppid: function ppid() {
      return Au;
    },
    prependListener: function prependListener() {
      return ju;
    },
    prependOnceListener: function prependOnceListener() {
      return Fu;
    },
    reallyExit: function reallyExit() {
      return tu;
    },
    release: function release() {
      return Vl;
    },
    removeAllListeners: function removeAllListeners() {
      return qu;
    },
    removeListener: function removeListener() {
      return Nu;
    },
    resourceUsage: function resourceUsage() {
      return iu;
    },
    setSourceMapsEnabled: function setSourceMapsEnabled() {
      return Bu;
    },
    setUncaughtExceptionCaptureCallback: function setUncaughtExceptionCaptureCallback() {
      return hu;
    },
    stderr: function stderr() {
      return mu;
    },
    stdin: function stdin() {
      return vu;
    },
    stdout: function stdout() {
      return _u;
    },
    title: function title() {
      return kl;
    },
    umask: function umask() {
      return Wl;
    },
    uptime: function uptime() {
      return Pu;
    },
    version: function version() {
      return ql;
    },
    versions: function versions() {
      return Dl;
    }
  });
  function bs(t) {
    throw new Error("Node.js process " + t + " is not supported by JSPM core outside of Node.js");
  }
  function Jg() {
    !xr || !Yt || (xr = false, Yt.length ? bt = Yt.concat(bt) : Di = -1, bt.length && Bl());
  }
  function Bl() {
    if (!xr) {
      var t = setTimeout(Jg, 0);
      xr = true;
      for (var e = bt.length; e; ) {
        for (Yt = bt, bt = []; ++Di < e; )
          Yt && Yt[Di].run();
        Di = -1, e = bt.length;
      }
      Yt = null, xr = false, clearTimeout(t);
    }
  }
  function Pl(t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
    bt.push(new Ol(t, e)), bt.length === 1 && !xr && setTimeout(Bl, 0);
  }
  function Ol(t, e) {
    this.fun = t, this.array = e;
  }
  function ve() {
  }
  function Gl(t) {
    bs("_linkedBinding");
  }
  function Xl(t) {
    bs("dlopen");
  }
  function Zl() {
    return [];
  }
  function eu() {
    return [];
  }
  function uu(t, e) {
    if (!t)
      throw new Error(e || "assertion error");
  }
  function du() {
    return false;
  }
  function Pu() {
    return Lt.now() / 1e3;
  }
  function ji(t) {
    var e = Math.floor((Date.now() - Lt.now()) * 1e-3), r = Lt.now() * 1e-3, i = Math.floor(r) + e, n = Math.floor(r % 1 * 1e9);
    return t && (i = i - t[0], n = n - t[1], n < 0 && (i--, n += ys)), [i, n];
  }
  function wt() {
    return $u;
  }
  function Wu(t) {
    return [];
  }
  var bt, xr, Yt, Di, kl, xl, Ml, Ll, Ul, Nl, ql, Dl, jl, Fl, Wl, $l, Hl, Vl, zl, Kl, Ql, Yl, Jl, tu, ru, Fi, iu, nu, su, ou, au, lu, fu, cu, hu, pu, gu, yu, bu, wu, _u, mu, vu, Eu, Su, Au, Iu, Tu, Ru, Cu, Bu, Lt, gs, ys, Ou, ku, xu, Mu, Lu, Uu, Nu, qu, Du, ju, Fu, $u, Hu = we(function() {
    v();
    m();
    _();
    bt = [], xr = false, Di = -1;
    Ol.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    kl = "browser", xl = "x64", Ml = "browser", Ll = {
      PATH: "/usr/bin",
      LANG: P.language + ".UTF-8",
      PWD: "/",
      HOME: "/home",
      TMP: "/tmp"
    }, Ul = ["/usr/bin/node"], Nl = [], ql = "v16.8.0", Dl = {}, jl = function jl2(t, e) {
      console.warn((e ? e + ": " : "") + t);
    }, Fl = function Fl2(t) {
      bs("binding");
    }, Wl = function Wl2(t) {
      return 0;
    }, $l = function $l2() {
      return "/";
    }, Hl = function Hl2(t) {
    }, Vl = {
      name: "node",
      sourceUrl: "",
      headersUrl: "",
      libUrl: ""
    };
    zl = ve, Kl = [];
    Ql = {}, Yl = false, Jl = {};
    tu = ve, ru = ve, Fi = function Fi2() {
      return {};
    }, iu = Fi, nu = Fi, su = ve, ou = ve, au = ve, lu = {};
    fu = {
      inspector: false,
      debug: false,
      uv: false,
      ipv6: false,
      tls_alpn: false,
      tls_sni: false,
      tls_ocsp: false,
      tls: false,
      cached_builtins: true
    }, cu = ve, hu = ve;
    pu = ve, gu = ve, yu = ve, bu = ve, wu = ve, _u = void 0, mu = void 0, vu = void 0, Eu = ve, Su = 2, Au = 1, Iu = "/bin/usr/node", Tu = 9229, Ru = "node", Cu = [], Bu = ve, Lt = {
      now: (typeof performance === "undefined" ? "undefined" : _typeof(performance)) < "u" ? performance.now.bind(performance) : void 0,
      timing: (typeof performance === "undefined" ? "undefined" : _typeof(performance)) < "u" ? performance.timing : void 0
    };
    Lt.now === void 0 && (gs = Date.now(), Lt.timing && Lt.timing.navigationStart && (gs = Lt.timing.navigationStart), Lt.now = function() {
      return Date.now() - gs;
    });
    ys = 1e9;
    ji.bigint = function(t) {
      var e = ji(t);
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? e[0] * ys + e[1] : BigInt(e[0] * ys) + BigInt(e[1]);
    };
    Ou = 10, ku = {}, xu = 0;
    Mu = wt, Lu = wt, Uu = wt, Nu = wt, qu = wt, Du = ve, ju = wt, Fu = wt;
    $u = {
      version: ql,
      versions: Dl,
      arch: xl,
      platform: Ml,
      release: Vl,
      _rawDebug: zl,
      moduleLoadList: Kl,
      binding: Fl,
      _linkedBinding: Gl,
      _events: ku,
      _eventsCount: xu,
      _maxListeners: Ou,
      on: wt,
      addListener: Mu,
      once: Lu,
      off: Uu,
      removeListener: Nu,
      removeAllListeners: qu,
      emit: Du,
      prependListener: ju,
      prependOnceListener: Fu,
      listeners: Wu,
      domain: Ql,
      _exiting: Yl,
      config: Jl,
      dlopen: Xl,
      uptime: Pu,
      _getActiveRequests: Zl,
      _getActiveHandles: eu,
      reallyExit: tu,
      _kill: ru,
      cpuUsage: Fi,
      resourceUsage: iu,
      memoryUsage: nu,
      kill: su,
      exit: ou,
      openStdin: au,
      allowedNodeEnvironmentFlags: lu,
      assert: uu,
      features: fu,
      _fatalExceptions: cu,
      setUncaughtExceptionCaptureCallback: hu,
      hasUncaughtExceptionCaptureCallback: du,
      emitWarning: jl,
      nextTick: Pl,
      _tickCallback: pu,
      _debugProcess: gu,
      _debugEnd: yu,
      _startProfilerIdleNotifier: bu,
      _stopProfilerIdleNotifier: wu,
      stdout: _u,
      stdin: vu,
      stderr: mu,
      abort: Eu,
      umask: Wl,
      chdir: Hl,
      cwd: $l,
      env: Ll,
      title: kl,
      argv: Ul,
      execArgv: Nl,
      pid: Su,
      ppid: Au,
      execPath: Iu,
      debugPort: Tu,
      hrtime: ji,
      argv0: Ru,
      _preload_modules: Cu,
      setSourceMapsEnabled: Bu
    };
  });
  var m = we(function() {
    Hu();
  });
  var _e = {};
  Qt(_e, {
    Buffer: function Buffer() {
      return x;
    },
    INSPECT_MAX_BYTES: function INSPECT_MAX_BYTES() {
      return ty;
    },
    default: function _default() {
      return Ut;
    },
    kMaxLength: function kMaxLength() {
      return ry;
    }
  });
  function Xg() {
    if (Vu)
      return ui;
    Vu = true, ui.byteLength = a, ui.toByteArray = c, ui.fromByteArray = g;
    for (var t = [], e = [], r = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, o = i.length; n < o; ++n)
      t[n] = i[n], e[i.charCodeAt(n)] = n;
    e["-".charCodeAt(0)] = 62, e["_".charCodeAt(0)] = 63;
    function s(y) {
      var w = y.length;
      if (w % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var E = y.indexOf("=");
      E === -1 && (E = w);
      var S = E === w ? 0 : 4 - E % 4;
      return [E, S];
    }
    function a(y) {
      var w = s(y), E = w[0], S = w[1];
      return (E + S) * 3 / 4 - S;
    }
    function u(y, w, E) {
      return (w + E) * 3 / 4 - E;
    }
    function c(y) {
      var w, E = s(y), S = E[0], I = E[1], C = new r(u(y, S, I)), R = 0, U = I > 0 ? S - 4 : S, N;
      for (N = 0; N < U; N += 4)
        w = e[y.charCodeAt(N)] << 18 | e[y.charCodeAt(N + 1)] << 12 | e[y.charCodeAt(N + 2)] << 6 | e[y.charCodeAt(N + 3)], C[R++] = w >> 16 & 255, C[R++] = w >> 8 & 255, C[R++] = w & 255;
      return I === 2 && (w = e[y.charCodeAt(N)] << 2 | e[y.charCodeAt(N + 1)] >> 4, C[R++] = w & 255), I === 1 && (w = e[y.charCodeAt(N)] << 10 | e[y.charCodeAt(N + 1)] << 4 | e[y.charCodeAt(N + 2)] >> 2, C[R++] = w >> 8 & 255, C[R++] = w & 255), C;
    }
    function h(y) {
      return t[y >> 18 & 63] + t[y >> 12 & 63] + t[y >> 6 & 63] + t[y & 63];
    }
    function d(y, w, E) {
      for (var S, I = [], C = w; C < E; C += 3)
        S = (y[C] << 16 & 16711680) + (y[C + 1] << 8 & 65280) + (y[C + 2] & 255), I.push(h(S));
      return I.join("");
    }
    function g(y) {
      for (var w, E = y.length, S = E % 3, I = [], C = 16383, R = 0, U = E - S; R < U; R += C)
        I.push(d(y, R, R + C > U ? U : R + C));
      return S === 1 ? (w = y[E - 1], I.push(t[w >> 2] + t[w << 4 & 63] + "==")) : S === 2 && (w = (y[E - 2] << 8) + y[E - 1], I.push(t[w >> 10] + t[w >> 4 & 63] + t[w << 2 & 63] + "=")), I.join("");
    }
    return ui;
  }
  function Zg() {
    if (zu)
      return Wi;
    zu = true;
    return Wi.read = function(t, e, r, i, n) {
      var o, s, a = n * 8 - i - 1, u = (1 << a) - 1, c = u >> 1, h = -7, d = r ? n - 1 : 0, g = r ? -1 : 1, y = t[e + d];
      for (d += g, o = y & (1 << -h) - 1, y >>= -h, h += a; h > 0; o = o * 256 + t[e + d], d += g, h -= 8)
        ;
      for (s = o & (1 << -h) - 1, o >>= -h, h += i; h > 0; s = s * 256 + t[e + d], d += g, h -= 8)
        ;
      if (o === 0)
        o = 1 - c;
      else {
        if (o === u)
          return s ? NaN : (y ? -1 : 1) * (1 / 0);
        s = s + Math.pow(2, i), o = o - c;
      }
      return (y ? -1 : 1) * s * Math.pow(2, o - i);
    }, Wi.write = function(t, e, r, i, n, o) {
      var s, a, u, c = o * 8 - n - 1, h = (1 << c) - 1, d = h >> 1, g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : o - 1, w = i ? 1 : -1, E = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + d >= 1 ? e += g / u : e += g * Math.pow(2, 1 - d), e * u >= 2 && (s++, u /= 2), s + d >= h ? (a = 0, s = h) : s + d >= 1 ? (a = (e * u - 1) * Math.pow(2, n), s = s + d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, n), s = 0)); n >= 8; t[r + y] = a & 255, y += w, a /= 256, n -= 8)
        ;
      for (s = s << n | a, c += n; c > 0; t[r + y] = s & 255, y += w, s /= 256, c -= 8)
        ;
      t[r + y - w] |= E * 128;
    }, Wi;
  }
  function ey() {
    if (Ku)
      return Jt;
    Ku = true;
    var t = Xg(), e = Zg(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Jt.Buffer = s, Jt.SlowBuffer = I, Jt.INSPECT_MAX_BYTES = 50;
    var i = 2147483647;
    Jt.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = n(), !s.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function n() {
      try {
        var p = new Uint8Array(1), l = {
          foo: function foo() {
            return 42;
          }
        };
        return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(p, l), p.foo() === 42;
      } catch (_unused) {
        return false;
      }
    }
    Object.defineProperty(s.prototype, "parent", {
      enumerable: true,
      get: function get() {
        if (s.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(s.prototype, "offset", {
      enumerable: true,
      get: function get() {
        if (s.isBuffer(this))
          return this.byteOffset;
      }
    });
    function o(p) {
      if (p > i)
        throw new RangeError('The value "' + p + '" is invalid for option "size"');
      var l = new Uint8Array(p);
      return Object.setPrototypeOf(l, s.prototype), l;
    }
    function s(p, l, f) {
      if (typeof p == "number") {
        if (typeof l == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return h(p);
      }
      return a(p, l, f);
    }
    s.poolSize = 8192;
    function a(p, l, f) {
      if (typeof p == "string")
        return d(p, l);
      if (ArrayBuffer.isView(p))
        return y(p);
      if (p == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(p));
      if (Ye(p, ArrayBuffer) || p && Ye(p.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (Ye(p, SharedArrayBuffer) || p && Ye(p.buffer, SharedArrayBuffer)))
        return w(p, l, f);
      if (typeof p == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      var b = p.valueOf && p.valueOf();
      if (b != null && b !== p)
        return s.from(b, l, f);
      var A = E(p);
      if (A)
        return A;
      if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
        return s.from(p[Symbol.toPrimitive]("string"), l, f);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(p));
    }
    s.from = function(p, l, f) {
      return a(p, l, f);
    }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
    function u(p) {
      if (typeof p != "number")
        throw new TypeError('"size" argument must be of type number');
      if (p < 0)
        throw new RangeError('The value "' + p + '" is invalid for option "size"');
    }
    function c(p, l, f) {
      return u(p), p <= 0 ? o(p) : l !== void 0 ? typeof f == "string" ? o(p).fill(l, f) : o(p).fill(l) : o(p);
    }
    s.alloc = function(p, l, f) {
      return c(p, l, f);
    };
    function h(p) {
      return u(p), o(p < 0 ? 0 : S(p) | 0);
    }
    s.allocUnsafe = function(p) {
      return h(p);
    }, s.allocUnsafeSlow = function(p) {
      return h(p);
    };
    function d(p, l) {
      if ((typeof l != "string" || l === "") && (l = "utf8"), !s.isEncoding(l))
        throw new TypeError("Unknown encoding: " + l);
      var f = C(p, l) | 0, b = o(f), A = b.write(p, l);
      return A !== f && (b = b.slice(0, A)), b;
    }
    function g(p) {
      var l = p.length < 0 ? 0 : S(p.length) | 0, f = o(l);
      for (var b = 0; b < l; b += 1)
        f[b] = p[b] & 255;
      return f;
    }
    function y(p) {
      if (Ye(p, Uint8Array)) {
        var l = new Uint8Array(p);
        return w(l.buffer, l.byteOffset, l.byteLength);
      }
      return g(p);
    }
    function w(p, l, f) {
      if (l < 0 || p.byteLength < l)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (p.byteLength < l + (f || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      var b;
      return l === void 0 && f === void 0 ? b = new Uint8Array(p) : f === void 0 ? b = new Uint8Array(p, l) : b = new Uint8Array(p, l, f), Object.setPrototypeOf(b, s.prototype), b;
    }
    function E(p) {
      if (s.isBuffer(p)) {
        var l = S(p.length) | 0, f = o(l);
        return f.length === 0 || p.copy(f, 0, 0, l), f;
      }
      if (p.length !== void 0)
        return typeof p.length != "number" || ds(p.length) ? o(0) : g(p);
      if (p.type === "Buffer" && Array.isArray(p.data))
        return g(p.data);
    }
    function S(p) {
      if (p >= i)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
      return p | 0;
    }
    function I(p) {
      return +p != p && (p = 0), s.alloc(+p);
    }
    s.isBuffer = function(l) {
      return l != null && l._isBuffer === true && l !== s.prototype;
    }, s.compare = function(l, f) {
      if (Ye(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)), Ye(f, Uint8Array) && (f = s.from(f, f.offset, f.byteLength)), !s.isBuffer(l) || !s.isBuffer(f))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (l === f)
        return 0;
      var b = l.length, A = f.length;
      for (var T = 0, O = Math.min(b, A); T < O; ++T)
        if (l[T] !== f[T]) {
          b = l[T], A = f[T];
          break;
        }
      return b < A ? -1 : A < b ? 1 : 0;
    }, s.isEncoding = function(l) {
      switch (String(l).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, s.concat = function(l, f) {
      if (!Array.isArray(l))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (l.length === 0)
        return s.alloc(0);
      var b;
      if (f === void 0)
        for (f = 0, b = 0; b < l.length; ++b)
          f += l[b].length;
      var A = s.allocUnsafe(f), T = 0;
      for (b = 0; b < l.length; ++b) {
        var O = l[b];
        if (Ye(O, Uint8Array))
          T + O.length > A.length ? (s.isBuffer(O) || (O = s.from(O)), O.copy(A, T)) : Uint8Array.prototype.set.call(A, O, T);
        else if (s.isBuffer(O))
          O.copy(A, T);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        T += O.length;
      }
      return A;
    };
    function C(p, l) {
      if (s.isBuffer(p))
        return p.length;
      if (ArrayBuffer.isView(p) || Ye(p, ArrayBuffer))
        return p.byteLength;
      if (typeof p != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(p));
      var f = p.length, b = arguments.length > 2 && arguments[2] === true;
      if (!b && f === 0)
        return 0;
      var A = false;
      for (; ; )
        switch (l) {
          case "ascii":
          case "latin1":
          case "binary":
            return f;
          case "utf8":
          case "utf-8":
            return hs(p).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return f * 2;
          case "hex":
            return f >>> 1;
          case "base64":
            return Cl(p).length;
          default:
            if (A)
              return b ? -1 : hs(p).length;
            l = ("" + l).toLowerCase(), A = true;
        }
    }
    s.byteLength = C;
    function R(p, l, f) {
      var b = false;
      if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, l >>>= 0, f <= l))
        return "";
      for (p || (p = "utf8"); ; )
        switch (p) {
          case "hex":
            return qg(this, l, f);
          case "utf8":
          case "utf-8":
            return Cr(this, l, f);
          case "ascii":
            return fs(this, l, f);
          case "latin1":
          case "binary":
            return Ng(this, l, f);
          case "base64":
            return pe(this, l, f);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Dg(this, l, f);
          default:
            if (b)
              throw new TypeError("Unknown encoding: " + p);
            p = (p + "").toLowerCase(), b = true;
        }
    }
    s.prototype._isBuffer = true;
    function U(p, l, f) {
      var b = p[l];
      p[l] = p[f], p[f] = b;
    }
    s.prototype.swap16 = function() {
      var l = this.length;
      if (l % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var f = 0; f < l; f += 2)
        U(this, f, f + 1);
      return this;
    }, s.prototype.swap32 = function() {
      var l = this.length;
      if (l % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var f = 0; f < l; f += 4)
        U(this, f, f + 3), U(this, f + 1, f + 2);
      return this;
    }, s.prototype.swap64 = function() {
      var l = this.length;
      if (l % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var f = 0; f < l; f += 8)
        U(this, f, f + 7), U(this, f + 1, f + 6), U(this, f + 2, f + 5), U(this, f + 3, f + 4);
      return this;
    }, s.prototype.toString = function() {
      var l = this.length;
      return l === 0 ? "" : arguments.length === 0 ? Cr(this, 0, l) : R.apply(this, arguments);
    }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(l) {
      if (!s.isBuffer(l))
        throw new TypeError("Argument must be a Buffer");
      return this === l ? true : s.compare(this, l) === 0;
    }, s.prototype.inspect = function() {
      var l = "", f = Jt.INSPECT_MAX_BYTES;
      return l = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (l += " ... "), "<Buffer " + l + ">";
    }, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(l, f, b, A, T) {
      if (Ye(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)), !s.isBuffer(l))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(l));
      if (f === void 0 && (f = 0), b === void 0 && (b = l ? l.length : 0), A === void 0 && (A = 0), T === void 0 && (T = this.length), f < 0 || b > l.length || A < 0 || T > this.length)
        throw new RangeError("out of range index");
      if (A >= T && f >= b)
        return 0;
      if (A >= T)
        return -1;
      if (f >= b)
        return 1;
      if (f >>>= 0, b >>>= 0, A >>>= 0, T >>>= 0, this === l)
        return 0;
      var O = T - A, $ = b - f, se = Math.min(O, $), te = this.slice(A, T), oe = l.slice(f, b);
      for (var J = 0; J < se; ++J)
        if (te[J] !== oe[J]) {
          O = te[J], $ = oe[J];
          break;
        }
      return O < $ ? -1 : $ < O ? 1 : 0;
    };
    function N(p, l, f, b, A) {
      if (p.length === 0)
        return -1;
      if (typeof f == "string" ? (b = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, ds(f) && (f = A ? 0 : p.length - 1), f < 0 && (f = p.length + f), f >= p.length) {
        if (A)
          return -1;
        f = p.length - 1;
      } else if (f < 0)
        if (A)
          f = 0;
        else
          return -1;
      if (typeof l == "string" && (l = s.from(l, b)), s.isBuffer(l))
        return l.length === 0 ? -1 : W(p, l, f, b, A);
      if (typeof l == "number")
        return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(p, l, f) : Uint8Array.prototype.lastIndexOf.call(p, l, f) : W(p, [l], f, b, A);
      throw new TypeError("val must be string, number or Buffer");
    }
    function W(p, l, f, b, A) {
      var T = 1, O = p.length, $ = l.length;
      if (b !== void 0 && (b = String(b).toLowerCase(), b === "ucs2" || b === "ucs-2" || b === "utf16le" || b === "utf-16le")) {
        if (p.length < 2 || l.length < 2)
          return -1;
        T = 2, O /= 2, $ /= 2, f /= 2;
      }
      function se(oe2, J2) {
        return T === 1 ? oe2[J2] : oe2.readUInt16BE(J2 * T);
      }
      var te;
      if (A) {
        var oe = -1;
        for (te = f; te < O; te++)
          if (se(p, te) === se(l, oe === -1 ? 0 : te - oe)) {
            if (oe === -1 && (oe = te), te - oe + 1 === $)
              return oe * T;
          } else
            oe !== -1 && (te -= te - oe), oe = -1;
      } else
        for (f + $ > O && (f = O - $), te = f; te >= 0; te--) {
          var _oe = true;
          for (var J = 0; J < $; J++)
            if (se(p, te + J) !== se(l, J)) {
              _oe = false;
              break;
            }
          if (_oe)
            return te;
        }
      return -1;
    }
    s.prototype.includes = function(l, f, b) {
      return this.indexOf(l, f, b) !== -1;
    }, s.prototype.indexOf = function(l, f, b) {
      return N(this, l, f, b, true);
    }, s.prototype.lastIndexOf = function(l, f, b) {
      return N(this, l, f, b, false);
    };
    function K(p, l, f, b) {
      f = Number(f) || 0;
      var A = p.length - f;
      b ? (b = Number(b), b > A && (b = A)) : b = A;
      var T = l.length;
      b > T / 2 && (b = T / 2);
      var O;
      for (O = 0; O < b; ++O) {
        var $ = parseInt(l.substr(O * 2, 2), 16);
        if (ds($))
          return O;
        p[f + O] = $;
      }
      return O;
    }
    function z(p, l, f, b) {
      return qi(hs(l, p.length - f), p, f, b);
    }
    function Q(p, l, f, b) {
      return qi($g(l), p, f, b);
    }
    function de(p, l, f, b) {
      return qi(Cl(l), p, f, b);
    }
    function Gt(p, l, f, b) {
      return qi(Hg(l, p.length - f), p, f, b);
    }
    s.prototype.write = function(l, f, b, A) {
      if (f === void 0)
        A = "utf8", b = this.length, f = 0;
      else if (b === void 0 && typeof f == "string")
        A = f, b = this.length, f = 0;
      else if (isFinite(f))
        f = f >>> 0, isFinite(b) ? (b = b >>> 0, A === void 0 && (A = "utf8")) : (A = b, b = void 0);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var T = this.length - f;
      if ((b === void 0 || b > T) && (b = T), l.length > 0 && (b < 0 || f < 0) || f > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      A || (A = "utf8");
      var O = false;
      for (; ; )
        switch (A) {
          case "hex":
            return K(this, l, f, b);
          case "utf8":
          case "utf-8":
            return z(this, l, f, b);
          case "ascii":
          case "latin1":
          case "binary":
            return Q(this, l, f, b);
          case "base64":
            return de(this, l, f, b);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Gt(this, l, f, b);
          default:
            if (O)
              throw new TypeError("Unknown encoding: " + A);
            A = ("" + A).toLowerCase(), O = true;
        }
    }, s.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function pe(p, l, f) {
      return l === 0 && f === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(l, f));
    }
    function Cr(p, l, f) {
      f = Math.min(p.length, f);
      var b = [], A = l;
      for (; A < f; ) {
        var T = p[A], O = null, $ = T > 239 ? 4 : T > 223 ? 3 : T > 191 ? 2 : 1;
        if (A + $ <= f) {
          var se = void 0, te = void 0, oe = void 0, J = void 0;
          switch ($) {
            case 1:
              T < 128 && (O = T);
              break;
            case 2:
              se = p[A + 1], (se & 192) === 128 && (J = (T & 31) << 6 | se & 63, J > 127 && (O = J));
              break;
            case 3:
              se = p[A + 1], te = p[A + 2], (se & 192) === 128 && (te & 192) === 128 && (J = (T & 15) << 12 | (se & 63) << 6 | te & 63, J > 2047 && (J < 55296 || J > 57343) && (O = J));
              break;
            case 4:
              se = p[A + 1], te = p[A + 2], oe = p[A + 3], (se & 192) === 128 && (te & 192) === 128 && (oe & 192) === 128 && (J = (T & 15) << 18 | (se & 63) << 12 | (te & 63) << 6 | oe & 63, J > 65535 && J < 1114112 && (O = J));
          }
        }
        O === null ? (O = 65533, $ = 1) : O > 65535 && (O -= 65536, b.push(O >>> 10 & 1023 | 55296), O = 56320 | O & 1023), b.push(O), A += $;
      }
      return Pr(b);
    }
    var Br = 4096;
    function Pr(p) {
      var l = p.length;
      if (l <= Br)
        return String.fromCharCode.apply(String, p);
      var f = "", b = 0;
      for (; b < l; )
        f += String.fromCharCode.apply(String, p.slice(b, b += Br));
      return f;
    }
    function fs(p, l, f) {
      var b = "";
      f = Math.min(p.length, f);
      for (var A = l; A < f; ++A)
        b += String.fromCharCode(p[A] & 127);
      return b;
    }
    function Ng(p, l, f) {
      var b = "";
      f = Math.min(p.length, f);
      for (var A = l; A < f; ++A)
        b += String.fromCharCode(p[A]);
      return b;
    }
    function qg(p, l, f) {
      var b = p.length;
      (!l || l < 0) && (l = 0), (!f || f < 0 || f > b) && (f = b);
      var A = "";
      for (var T = l; T < f; ++T)
        A += Vg[p[T]];
      return A;
    }
    function Dg(p, l, f) {
      var b = p.slice(l, f), A = "";
      for (var T = 0; T < b.length - 1; T += 2)
        A += String.fromCharCode(b[T] + b[T + 1] * 256);
      return A;
    }
    s.prototype.slice = function(l, f) {
      var b = this.length;
      l = ~~l, f = f === void 0 ? b : ~~f, l < 0 ? (l += b, l < 0 && (l = 0)) : l > b && (l = b), f < 0 ? (f += b, f < 0 && (f = 0)) : f > b && (f = b), f < l && (f = l);
      var A = this.subarray(l, f);
      return Object.setPrototypeOf(A, s.prototype), A;
    };
    function ge(p, l, f) {
      if (p % 1 !== 0 || p < 0)
        throw new RangeError("offset is not uint");
      if (p + l > f)
        throw new RangeError("Trying to access beyond buffer length");
    }
    s.prototype.readUintLE = s.prototype.readUIntLE = function(l, f, b) {
      l = l >>> 0, f = f >>> 0, b || ge(l, f, this.length);
      var A = this[l], T = 1, O = 0;
      for (; ++O < f && (T *= 256); )
        A += this[l + O] * T;
      return A;
    }, s.prototype.readUintBE = s.prototype.readUIntBE = function(l, f, b) {
      l = l >>> 0, f = f >>> 0, b || ge(l, f, this.length);
      var A = this[l + --f], T = 1;
      for (; f > 0 && (T *= 256); )
        A += this[l + --f] * T;
      return A;
    }, s.prototype.readUint8 = s.prototype.readUInt8 = function(l, f) {
      return l = l >>> 0, f || ge(l, 1, this.length), this[l];
    }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(l, f) {
      return l = l >>> 0, f || ge(l, 2, this.length), this[l] | this[l + 1] << 8;
    }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(l, f) {
      return l = l >>> 0, f || ge(l, 2, this.length), this[l] << 8 | this[l + 1];
    }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(l, f) {
      return l = l >>> 0, f || ge(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
    }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(l, f) {
      return l = l >>> 0, f || ge(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
    }, s.prototype.readBigUInt64LE = Mt(function(l) {
      l = l >>> 0, kr(l, "offset");
      var f = this[l], b = this[l + 7];
      (f === void 0 || b === void 0) && li(l, this.length - 8);
      var A = f + this[++l] * Math.pow(2, 8) + this[++l] * Math.pow(2, 16) + this[++l] * Math.pow(2, 24), T = this[++l] + this[++l] * Math.pow(2, 8) + this[++l] * Math.pow(2, 16) + b * Math.pow(2, 24);
      return BigInt(A) + (BigInt(T) << BigInt(32));
    }), s.prototype.readBigUInt64BE = Mt(function(l) {
      l = l >>> 0, kr(l, "offset");
      var f = this[l], b = this[l + 7];
      (f === void 0 || b === void 0) && li(l, this.length - 8);
      var A = f * Math.pow(2, 24) + this[++l] * Math.pow(2, 16) + this[++l] * Math.pow(2, 8) + this[++l], T = this[++l] * Math.pow(2, 24) + this[++l] * Math.pow(2, 16) + this[++l] * Math.pow(2, 8) + b;
      return (BigInt(A) << BigInt(32)) + BigInt(T);
    }), s.prototype.readIntLE = function(l, f, b) {
      l = l >>> 0, f = f >>> 0, b || ge(l, f, this.length);
      var A = this[l], T = 1, O = 0;
      for (; ++O < f && (T *= 256); )
        A += this[l + O] * T;
      return T *= 128, A >= T && (A -= Math.pow(2, 8 * f)), A;
    }, s.prototype.readIntBE = function(l, f, b) {
      l = l >>> 0, f = f >>> 0, b || ge(l, f, this.length);
      var A = f, T = 1, O = this[l + --A];
      for (; A > 0 && (T *= 256); )
        O += this[l + --A] * T;
      return T *= 128, O >= T && (O -= Math.pow(2, 8 * f)), O;
    }, s.prototype.readInt8 = function(l, f) {
      return l = l >>> 0, f || ge(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
    }, s.prototype.readInt16LE = function(l, f) {
      l = l >>> 0, f || ge(l, 2, this.length);
      var b = this[l] | this[l + 1] << 8;
      return b & 32768 ? b | 4294901760 : b;
    }, s.prototype.readInt16BE = function(l, f) {
      l = l >>> 0, f || ge(l, 2, this.length);
      var b = this[l + 1] | this[l] << 8;
      return b & 32768 ? b | 4294901760 : b;
    }, s.prototype.readInt32LE = function(l, f) {
      return l = l >>> 0, f || ge(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
    }, s.prototype.readInt32BE = function(l, f) {
      return l = l >>> 0, f || ge(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
    }, s.prototype.readBigInt64LE = Mt(function(l) {
      l = l >>> 0, kr(l, "offset");
      var f = this[l], b = this[l + 7];
      (f === void 0 || b === void 0) && li(l, this.length - 8);
      var A = this[l + 4] + this[l + 5] * Math.pow(2, 8) + this[l + 6] * Math.pow(2, 16) + (b << 24);
      return (BigInt(A) << BigInt(32)) + BigInt(f + this[++l] * Math.pow(2, 8) + this[++l] * Math.pow(2, 16) + this[++l] * Math.pow(2, 24));
    }), s.prototype.readBigInt64BE = Mt(function(l) {
      l = l >>> 0, kr(l, "offset");
      var f = this[l], b = this[l + 7];
      (f === void 0 || b === void 0) && li(l, this.length - 8);
      var A = (f << 24) + this[++l] * Math.pow(2, 16) + this[++l] * Math.pow(2, 8) + this[++l];
      return (BigInt(A) << BigInt(32)) + BigInt(this[++l] * Math.pow(2, 24) + this[++l] * Math.pow(2, 16) + this[++l] * Math.pow(2, 8) + b);
    }), s.prototype.readFloatLE = function(l, f) {
      return l = l >>> 0, f || ge(l, 4, this.length), e.read(this, l, true, 23, 4);
    }, s.prototype.readFloatBE = function(l, f) {
      return l = l >>> 0, f || ge(l, 4, this.length), e.read(this, l, false, 23, 4);
    }, s.prototype.readDoubleLE = function(l, f) {
      return l = l >>> 0, f || ge(l, 8, this.length), e.read(this, l, true, 52, 8);
    }, s.prototype.readDoubleBE = function(l, f) {
      return l = l >>> 0, f || ge(l, 8, this.length), e.read(this, l, false, 52, 8);
    };
    function Ce(p, l, f, b, A, T) {
      if (!s.isBuffer(p))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (l > A || l < T)
        throw new RangeError('"value" argument is out of bounds');
      if (f + b > p.length)
        throw new RangeError("Index out of range");
    }
    s.prototype.writeUintLE = s.prototype.writeUIntLE = function(l, f, b, A) {
      if (l = +l, f = f >>> 0, b = b >>> 0, !A) {
        var $ = Math.pow(2, 8 * b) - 1;
        Ce(this, l, f, b, $, 0);
      }
      var T = 1, O = 0;
      for (this[f] = l & 255; ++O < b && (T *= 256); )
        this[f + O] = l / T & 255;
      return f + b;
    }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(l, f, b, A) {
      if (l = +l, f = f >>> 0, b = b >>> 0, !A) {
        var $ = Math.pow(2, 8 * b) - 1;
        Ce(this, l, f, b, $, 0);
      }
      var T = b - 1, O = 1;
      for (this[f + T] = l & 255; --T >= 0 && (O *= 256); )
        this[f + T] = l / O & 255;
      return f + b;
    }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 1, 255, 0), this[f] = l & 255, f + 1;
    }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 2, 65535, 0), this[f] = l & 255, this[f + 1] = l >>> 8, f + 2;
    }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 2, 65535, 0), this[f] = l >>> 8, this[f + 1] = l & 255, f + 2;
    }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 4, 4294967295, 0), this[f + 3] = l >>> 24, this[f + 2] = l >>> 16, this[f + 1] = l >>> 8, this[f] = l & 255, f + 4;
    }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 4, 4294967295, 0), this[f] = l >>> 24, this[f + 1] = l >>> 16, this[f + 2] = l >>> 8, this[f + 3] = l & 255, f + 4;
    };
    function vl(p, l, f, b, A) {
      Rl(l, b, A, p, f, 7);
      var T = Number(l & BigInt(4294967295));
      p[f++] = T, T = T >> 8, p[f++] = T, T = T >> 8, p[f++] = T, T = T >> 8, p[f++] = T;
      var O = Number(l >> BigInt(32) & BigInt(4294967295));
      return p[f++] = O, O = O >> 8, p[f++] = O, O = O >> 8, p[f++] = O, O = O >> 8, p[f++] = O, f;
    }
    function El(p, l, f, b, A) {
      Rl(l, b, A, p, f, 7);
      var T = Number(l & BigInt(4294967295));
      p[f + 7] = T, T = T >> 8, p[f + 6] = T, T = T >> 8, p[f + 5] = T, T = T >> 8, p[f + 4] = T;
      var O = Number(l >> BigInt(32) & BigInt(4294967295));
      return p[f + 3] = O, O = O >> 8, p[f + 2] = O, O = O >> 8, p[f + 1] = O, O = O >> 8, p[f] = O, f + 8;
    }
    s.prototype.writeBigUInt64LE = Mt(function(l) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return vl(this, l, f, BigInt(0), BigInt("0xffffffffffffffff"));
    }), s.prototype.writeBigUInt64BE = Mt(function(l) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return El(this, l, f, BigInt(0), BigInt("0xffffffffffffffff"));
    }), s.prototype.writeIntLE = function(l, f, b, A) {
      if (l = +l, f = f >>> 0, !A) {
        var se = Math.pow(2, 8 * b - 1);
        Ce(this, l, f, b, se - 1, -se);
      }
      var T = 0, O = 1, $ = 0;
      for (this[f] = l & 255; ++T < b && (O *= 256); )
        l < 0 && $ === 0 && this[f + T - 1] !== 0 && ($ = 1), this[f + T] = (l / O >> 0) - $ & 255;
      return f + b;
    }, s.prototype.writeIntBE = function(l, f, b, A) {
      if (l = +l, f = f >>> 0, !A) {
        var se = Math.pow(2, 8 * b - 1);
        Ce(this, l, f, b, se - 1, -se);
      }
      var T = b - 1, O = 1, $ = 0;
      for (this[f + T] = l & 255; --T >= 0 && (O *= 256); )
        l < 0 && $ === 0 && this[f + T + 1] !== 0 && ($ = 1), this[f + T] = (l / O >> 0) - $ & 255;
      return f + b;
    }, s.prototype.writeInt8 = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[f] = l & 255, f + 1;
    }, s.prototype.writeInt16LE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 2, 32767, -32768), this[f] = l & 255, this[f + 1] = l >>> 8, f + 2;
    }, s.prototype.writeInt16BE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 2, 32767, -32768), this[f] = l >>> 8, this[f + 1] = l & 255, f + 2;
    }, s.prototype.writeInt32LE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 4, 2147483647, -2147483648), this[f] = l & 255, this[f + 1] = l >>> 8, this[f + 2] = l >>> 16, this[f + 3] = l >>> 24, f + 4;
    }, s.prototype.writeInt32BE = function(l, f, b) {
      return l = +l, f = f >>> 0, b || Ce(this, l, f, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[f] = l >>> 24, this[f + 1] = l >>> 16, this[f + 2] = l >>> 8, this[f + 3] = l & 255, f + 4;
    }, s.prototype.writeBigInt64LE = Mt(function(l) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return vl(this, l, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), s.prototype.writeBigInt64BE = Mt(function(l) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return El(this, l, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Sl(p, l, f, b, A, T) {
      if (f + b > p.length)
        throw new RangeError("Index out of range");
      if (f < 0)
        throw new RangeError("Index out of range");
    }
    function Al(p, l, f, b, A) {
      return l = +l, f = f >>> 0, A || Sl(p, l, f, 4), e.write(p, l, f, b, 23, 4), f + 4;
    }
    s.prototype.writeFloatLE = function(l, f, b) {
      return Al(this, l, f, true, b);
    }, s.prototype.writeFloatBE = function(l, f, b) {
      return Al(this, l, f, false, b);
    };
    function Il(p, l, f, b, A) {
      return l = +l, f = f >>> 0, A || Sl(p, l, f, 8), e.write(p, l, f, b, 52, 8), f + 8;
    }
    s.prototype.writeDoubleLE = function(l, f, b) {
      return Il(this, l, f, true, b);
    }, s.prototype.writeDoubleBE = function(l, f, b) {
      return Il(this, l, f, false, b);
    }, s.prototype.copy = function(l, f, b, A) {
      if (!s.isBuffer(l))
        throw new TypeError("argument should be a Buffer");
      if (b || (b = 0), !A && A !== 0 && (A = this.length), f >= l.length && (f = l.length), f || (f = 0), A > 0 && A < b && (A = b), A === b || l.length === 0 || this.length === 0)
        return 0;
      if (f < 0)
        throw new RangeError("targetStart out of bounds");
      if (b < 0 || b >= this.length)
        throw new RangeError("Index out of range");
      if (A < 0)
        throw new RangeError("sourceEnd out of bounds");
      A > this.length && (A = this.length), l.length - f < A - b && (A = l.length - f + b);
      var T = A - b;
      return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, b, A) : Uint8Array.prototype.set.call(l, this.subarray(b, A), f), T;
    }, s.prototype.fill = function(l, f, b, A) {
      if (typeof l == "string") {
        if (typeof f == "string" ? (A = f, f = 0, b = this.length) : typeof b == "string" && (A = b, b = this.length), A !== void 0 && typeof A != "string")
          throw new TypeError("encoding must be a string");
        if (typeof A == "string" && !s.isEncoding(A))
          throw new TypeError("Unknown encoding: " + A);
        if (l.length === 1) {
          var O = l.charCodeAt(0);
          (A === "utf8" && O < 128 || A === "latin1") && (l = O);
        }
      } else
        typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
      if (f < 0 || this.length < f || this.length < b)
        throw new RangeError("Out of range index");
      if (b <= f)
        return this;
      f = f >>> 0, b = b === void 0 ? this.length : b >>> 0, l || (l = 0);
      var T;
      if (typeof l == "number")
        for (T = f; T < b; ++T)
          this[T] = l;
      else {
        var _O = s.isBuffer(l) ? l : s.from(l, A), $ = _O.length;
        if ($ === 0)
          throw new TypeError('The value "' + l + '" is invalid for argument "value"');
        for (T = 0; T < b - f; ++T)
          this[T + f] = _O[T % $];
      }
      return this;
    };
    var Or = {};
    function cs(p, l, f) {
      Or[p] = /* @__PURE__ */ function(_f2) {
        function _class() {
          var _this;
          _classCallCheck(this, _class);
          _this = _callSuper(this, _class), Object.defineProperty(_assertThisInitialized(_this), "message", {
            value: l.apply(_assertThisInitialized(_this), arguments),
            writable: true,
            configurable: true
          }), _this.name = "".concat(_this.name, " [").concat(p, "]"), _this.stack, delete _this.name;
          return _this;
        }
        _inherits(_class, _f2);
        return _createClass(_class, [{
          key: "code",
          get: function get() {
            return p;
          },
          set: function set(A) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value: A,
              writable: true
            });
          }
        }, {
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(p, "]: ").concat(this.message);
          }
        }]);
      }(f);
    }
    cs("ERR_BUFFER_OUT_OF_BOUNDS", function(p) {
      return p ? "".concat(p, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError), cs("ERR_INVALID_ARG_TYPE", function(p, l) {
      return 'The "'.concat(p, '" argument must be of type number. Received type ').concat(_typeof(l));
    }, TypeError), cs("ERR_OUT_OF_RANGE", function(p, l, f) {
      var b = 'The value of "'.concat(p, '" is out of range.'), A = f;
      return Number.isInteger(f) && Math.abs(f) > Math.pow(2, 32) ? A = Tl(String(f)) : typeof f == "bigint" && (A = String(f), (f > Math.pow(BigInt(2), BigInt(32)) || f < -Math.pow(BigInt(2), BigInt(32))) && (A = Tl(A)), A += "n"), b += " It must be ".concat(l, ". Received ").concat(A), b;
    }, RangeError);
    function Tl(p) {
      var l = "", f = p.length, b = p[0] === "-" ? 1 : 0;
      for (; f >= b + 4; f -= 3)
        l = "_".concat(p.slice(f - 3, f)).concat(l);
      return "".concat(p.slice(0, f)).concat(l);
    }
    function jg(p, l, f) {
      kr(l, "offset"), (p[l] === void 0 || p[l + f] === void 0) && li(l, p.length - (f + 1));
    }
    function Rl(p, l, f, b, A, T) {
      if (p > f || p < l) {
        var O = typeof l == "bigint" ? "n" : "", $;
        throw T > 3 ? l === 0 || l === BigInt(0) ? $ = ">= 0".concat(O, " and < 2").concat(O, " ** ").concat((T + 1) * 8).concat(O) : $ = ">= -(2".concat(O, " ** ").concat((T + 1) * 8 - 1).concat(O, ") and < 2 ** ").concat((T + 1) * 8 - 1).concat(O) : $ = ">= ".concat(l).concat(O, " and <= ").concat(f).concat(O), new Or.ERR_OUT_OF_RANGE("value", $, p);
      }
      jg(b, A, T);
    }
    function kr(p, l) {
      if (typeof p != "number")
        throw new Or.ERR_INVALID_ARG_TYPE(l, "number", p);
    }
    function li(p, l, f) {
      throw Math.floor(p) !== p ? (kr(p, f), new Or.ERR_OUT_OF_RANGE(f || "offset", "an integer", p)) : l < 0 ? new Or.ERR_BUFFER_OUT_OF_BOUNDS() : new Or.ERR_OUT_OF_RANGE(f || "offset", ">= ".concat(f ? 1 : 0, " and <= ").concat(l), p);
    }
    var Fg = /[^+/0-9A-Za-z-_]/g;
    function Wg(p) {
      if (p = p.split("=")[0], p = p.trim().replace(Fg, ""), p.length < 2)
        return "";
      for (; p.length % 4 !== 0; )
        p = p + "=";
      return p;
    }
    function hs(p, l) {
      l = l || 1 / 0;
      var f, b = p.length, A = null, T = [];
      for (var O = 0; O < b; ++O) {
        if (f = p.charCodeAt(O), f > 55295 && f < 57344) {
          if (!A) {
            if (f > 56319) {
              (l -= 3) > -1 && T.push(239, 191, 189);
              continue;
            } else if (O + 1 === b) {
              (l -= 3) > -1 && T.push(239, 191, 189);
              continue;
            }
            A = f;
            continue;
          }
          if (f < 56320) {
            (l -= 3) > -1 && T.push(239, 191, 189), A = f;
            continue;
          }
          f = (A - 55296 << 10 | f - 56320) + 65536;
        } else
          A && (l -= 3) > -1 && T.push(239, 191, 189);
        if (A = null, f < 128) {
          if ((l -= 1) < 0)
            break;
          T.push(f);
        } else if (f < 2048) {
          if ((l -= 2) < 0)
            break;
          T.push(f >> 6 | 192, f & 63 | 128);
        } else if (f < 65536) {
          if ((l -= 3) < 0)
            break;
          T.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128);
        } else if (f < 1114112) {
          if ((l -= 4) < 0)
            break;
          T.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return T;
    }
    function $g(p) {
      var l = [];
      for (var f = 0; f < p.length; ++f)
        l.push(p.charCodeAt(f) & 255);
      return l;
    }
    function Hg(p, l) {
      var f, b, A, T = [];
      for (var O = 0; O < p.length && !((l -= 2) < 0); ++O)
        f = p.charCodeAt(O), b = f >> 8, A = f % 256, T.push(A), T.push(b);
      return T;
    }
    function Cl(p) {
      return t.toByteArray(Wg(p));
    }
    function qi(p, l, f, b) {
      var A;
      for (A = 0; A < b && !(A + f >= l.length || A >= p.length); ++A)
        l[A + f] = p[A];
      return A;
    }
    function Ye(p, l) {
      return p instanceof l || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === l.name;
    }
    function ds(p) {
      return p !== p;
    }
    var Vg = function() {
      var p = "0123456789abcdef", l = new Array(256);
      for (var f = 0; f < 16; ++f) {
        var b = f * 16;
        for (var A = 0; A < 16; ++A)
          l[b + A] = p[f] + p[A];
      }
      return l;
    }();
    function Mt(p) {
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? zg : p;
    }
    function zg() {
      throw new Error("BigInt not supported");
    }
    return Jt;
  }
  var ui, Vu, Wi, zu, Jt, Ku, Ut, x, ty, ry, ye = we(function() {
    v();
    m();
    _();
    ui = {}, Vu = false;
    Wi = {}, zu = false;
    Jt = {}, Ku = false;
    Ut = ey();
    Ut.Buffer;
    Ut.SlowBuffer;
    Ut.INSPECT_MAX_BYTES;
    Ut.kMaxLength;
    x = Ut.Buffer, ty = Ut.INSPECT_MAX_BYTES, ry = Ut.kMaxLength;
  });
  var v = we(function() {
    ye();
  });
  var Gu = M(function(_s) {
    v();
    m();
    _();
    Object.defineProperty(_s, "__esModule", {
      value: true
    });
    var ws = /* @__PURE__ */ function() {
      function ws2(e) {
        _classCallCheck(this, ws2);
        this.aliasToTopic = {}, this.max = e;
      }
      return _createClass(ws2, [{
        key: "put",
        value: function put(e, r) {
          return r === 0 || r > this.max ? false : (this.aliasToTopic[r] = e, this.length = Object.keys(this.aliasToTopic).length, true);
        }
      }, {
        key: "getTopicByAlias",
        value: function getTopicByAlias(e) {
          return this.aliasToTopic[e];
        }
      }, {
        key: "clear",
        value: function clear() {
          this.aliasToTopic = {};
        }
      }]);
    }();
    _s.default = ws;
  });
  var ce = M(function(kA, Qu) {
    v();
    m();
    _();
    Qu.exports = {
      ArrayIsArray: function ArrayIsArray(t) {
        return Array.isArray(t);
      },
      ArrayPrototypeIncludes: function ArrayPrototypeIncludes(t, e) {
        return t.includes(e);
      },
      ArrayPrototypeIndexOf: function ArrayPrototypeIndexOf(t, e) {
        return t.indexOf(e);
      },
      ArrayPrototypeJoin: function ArrayPrototypeJoin(t, e) {
        return t.join(e);
      },
      ArrayPrototypeMap: function ArrayPrototypeMap(t, e) {
        return t.map(e);
      },
      ArrayPrototypePop: function ArrayPrototypePop(t, e) {
        return t.pop(e);
      },
      ArrayPrototypePush: function ArrayPrototypePush(t, e) {
        return t.push(e);
      },
      ArrayPrototypeSlice: function ArrayPrototypeSlice(t, e, r) {
        return t.slice(e, r);
      },
      Error,
      FunctionPrototypeCall: function FunctionPrototypeCall(t, e) {
        for (var _len = arguments.length, r = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          r[_key - 2] = arguments[_key];
        }
        return t.call.apply(t, [e].concat(r));
      },
      FunctionPrototypeSymbolHasInstance: function FunctionPrototypeSymbolHasInstance(t, e) {
        return Function.prototype[Symbol.hasInstance].call(t, e);
      },
      MathFloor: Math.floor,
      Number,
      NumberIsInteger: Number.isInteger,
      NumberIsNaN: Number.isNaN,
      NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
      NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
      NumberParseInt: Number.parseInt,
      ObjectDefineProperties: function ObjectDefineProperties(t, e) {
        return Object.defineProperties(t, e);
      },
      ObjectDefineProperty: function ObjectDefineProperty(t, e, r) {
        return Object.defineProperty(t, e, r);
      },
      ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
      },
      ObjectKeys: function ObjectKeys(t) {
        return Object.keys(t);
      },
      ObjectSetPrototypeOf: function ObjectSetPrototypeOf(t, e) {
        return Object.setPrototypeOf(t, e);
      },
      Promise,
      PromisePrototypeCatch: function PromisePrototypeCatch(t, e) {
        return t.catch(e);
      },
      PromisePrototypeThen: function PromisePrototypeThen(t, e, r) {
        return t.then(e, r);
      },
      PromiseReject: function PromiseReject(t) {
        return Promise.reject(t);
      },
      ReflectApply: Reflect.apply,
      RegExpPrototypeTest: function RegExpPrototypeTest(t, e) {
        return t.test(e);
      },
      SafeSet: Set,
      String,
      StringPrototypeSlice: function StringPrototypeSlice(t, e, r) {
        return t.slice(e, r);
      },
      StringPrototypeToLowerCase: function StringPrototypeToLowerCase(t) {
        return t.toLowerCase();
      },
      StringPrototypeToUpperCase: function StringPrototypeToUpperCase(t) {
        return t.toUpperCase();
      },
      StringPrototypeTrim: function StringPrototypeTrim(t) {
        return t.trim();
      },
      Symbol,
      SymbolFor: Symbol.for,
      SymbolAsyncIterator: Symbol.asyncIterator,
      SymbolHasInstance: Symbol.hasInstance,
      SymbolIterator: Symbol.iterator,
      TypedArrayPrototypeSet: function TypedArrayPrototypeSet(t, e, r) {
        return t.set(e, r);
      },
      Uint8Array
    };
  });
  var Je = M(function(WA, vs) {
    v();
    m();
    _();
    var iy = (ye(), X(_e)), ny = Object.getPrototypeOf(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }))).constructor, Yu = globalThis.Blob || iy.Blob, sy = _typeof(Yu) < "u" ? function(e) {
      return e instanceof Yu;
    } : function(e) {
      return false;
    }, ms = /* @__PURE__ */ function(_Error) {
      function ms2(e) {
        var _this2;
        _classCallCheck(this, ms2);
        if (!Array.isArray(e))
          throw new TypeError("Expected input to be an Array, got ".concat(_typeof(e)));
        var r = "";
        for (var i = 0; i < e.length; i++)
          r += "    ".concat(e[i].stack, "\n");
        _this2 = _callSuper(this, ms2, [r]), _this2.name = "AggregateError", _this2.errors = e;
        return _this2;
      }
      _inherits(ms2, _Error);
      return _createClass(ms2);
    }(/* @__PURE__ */ _wrapNativeSuper(Error));
    vs.exports = {
      AggregateError: ms,
      kEmptyObject: Object.freeze({}),
      once: function once(t) {
        var e = false;
        return function() {
          for (var _len2 = arguments.length, r = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            r[_key2] = arguments[_key2];
          }
          e || (e = true, t.apply(this, r));
        };
      },
      createDeferredPromise: function createDeferredPromise() {
        var t, e;
        return {
          promise: new Promise(function(i, n) {
            t = i, e = n;
          }),
          resolve: t,
          reject: e
        };
      },
      promisify: function promisify(t) {
        return new Promise(function(e, r) {
          t(function(i) {
            for (var _len3 = arguments.length, n = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              n[_key3 - 1] = arguments[_key3];
            }
            return i ? r(i) : e.apply(void 0, n);
          });
        });
      },
      debuglog: function debuglog() {
        return function() {
        };
      },
      format: function format(t) {
        for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          e[_key4 - 1] = arguments[_key4];
        }
        return t.replace(/%([sdifj])/g, function() {
          for (var _len5 = arguments.length, _ref8 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            _ref8[_key5] = arguments[_key5];
          }
          _ref8[0];
          var i = _ref8[1];
          var n = e.shift();
          return i === "f" ? n.toFixed(6) : i === "j" ? JSON.stringify(n) : i === "s" && _typeof(n) == "object" ? "".concat(n.constructor !== Object ? n.constructor.name : "", " {}").trim() : n.toString();
        });
      },
      inspect: function inspect(t) {
        switch (_typeof(t)) {
          case "string":
            if (t.includes("'"))
              if (t.includes('"')) {
                if (!t.includes("`") && !t.includes("${"))
                  return "`".concat(t, "`");
              } else
                return '"'.concat(t, '"');
            return "'".concat(t, "'");
          case "number":
            return isNaN(t) ? "NaN" : Object.is(t, -0) ? String(t) : t;
          case "bigint":
            return "".concat(String(t), "n");
          case "boolean":
          case "undefined":
            return String(t);
          case "object":
            return "{}";
        }
      },
      types: {
        isAsyncFunction: function isAsyncFunction(t) {
          return t instanceof ny;
        },
        isArrayBufferView: function isArrayBufferView(t) {
          return ArrayBuffer.isView(t);
        }
      },
      isBlob: sy
    };
    vs.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  });
  var Hi = M(function(XA, $i) {
    v();
    m();
    _();
    var _ref9 = (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : void 0, Ju = _ref9.AbortController, oy = _ref9.AbortSignal;
    $i.exports = Ju;
    $i.exports.AbortSignal = oy;
    $i.exports.default = Ju;
  });
  var Se = M(function(lI, ef) {
    v();
    m();
    _();
    var _Je = Je(), ay = _Je.format, Vi = _Je.inspect, ly = _Je.AggregateError, uy = globalThis.AggregateError || ly, fy = Symbol("kIsNodeError"), cy = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], hy = /^([A-Z][a-z0-9]*)+$/, dy = "__node_internal_", zi = {};
    function Xt(t, e) {
      if (!t)
        throw new zi.ERR_INTERNAL_ASSERTION(e);
    }
    function Xu(t) {
      var e = "", r = t.length, i = t[0] === "-" ? 1 : 0;
      for (; r >= i + 4; r -= 3)
        e = "_".concat(t.slice(r - 3, r)).concat(e);
      return "".concat(t.slice(0, r)).concat(e);
    }
    function py(t, e, r) {
      if (typeof e == "function")
        return Xt(e.length <= r.length, "Code: ".concat(t, "; The provided arguments length (").concat(r.length, ") does not match the required ones (").concat(e.length, ").")), e.apply(void 0, _toConsumableArray(r));
      var i = (e.match(/%[dfijoOs]/g) || []).length;
      return Xt(i === r.length, "Code: ".concat(t, "; The provided arguments length (").concat(r.length, ") does not match the required ones (").concat(i, ").")), r.length === 0 ? e : ay.apply(void 0, [e].concat(_toConsumableArray(r)));
    }
    function me(t, e, r) {
      r || (r = Error);
      var i = /* @__PURE__ */ function(_r2) {
        function i2() {
          _classCallCheck(this, i2);
          for (var _len6 = arguments.length, o = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            o[_key6] = arguments[_key6];
          }
          return _callSuper(this, i2, [py(t, e, o)]);
        }
        _inherits(i2, _r2);
        return _createClass(i2, [{
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(t, "]: ").concat(this.message);
          }
        }]);
      }(r);
      Object.defineProperties(i.prototype, {
        name: {
          value: r.name,
          writable: true,
          enumerable: false,
          configurable: true
        },
        toString: {
          value: function value() {
            return "".concat(this.name, " [").concat(t, "]: ").concat(this.message);
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      }), i.prototype.code = t, i.prototype[fy] = true, zi[t] = i;
    }
    function Zu(t) {
      var e = dy + t.name;
      return Object.defineProperty(t, "name", {
        value: e
      }), t;
    }
    function gy(t, e) {
      if (t && e && t !== e) {
        if (Array.isArray(e.errors))
          return e.errors.push(t), e;
        var r = new uy([e, t], e.message);
        return r.code = e.code, r;
      }
      return t || e;
    }
    var Es = /* @__PURE__ */ function(_Error2) {
      function Es2() {
        var _this3;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "The operation was aborted";
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
        _classCallCheck(this, Es2);
        if (r !== void 0 && _typeof(r) != "object")
          throw new zi.ERR_INVALID_ARG_TYPE("options", "Object", r);
        _this3 = _callSuper(this, Es2, [e, r]), _this3.code = "ABORT_ERR", _this3.name = "AbortError";
        return _this3;
      }
      _inherits(Es2, _Error2);
      return _createClass(Es2);
    }(/* @__PURE__ */ _wrapNativeSuper(Error));
    me("ERR_ASSERTION", "%s", Error);
    me("ERR_INVALID_ARG_TYPE", function(t, e, r) {
      Xt(typeof t == "string", "'name' must be a string"), Array.isArray(e) || (e = [e]);
      var i = "The ";
      t.endsWith(" argument") ? i += "".concat(t, " ") : i += '"'.concat(t, '" ').concat(t.includes(".") ? "property" : "argument", " "), i += "must be ";
      var n = [], o = [], s = [];
      var _iterator14 = _createForOfIteratorHelper(e), _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
          var _u7 = _step14.value;
          Xt(typeof _u7 == "string", "All expected entries have to be of type string"), cy.includes(_u7) ? n.push(_u7.toLowerCase()) : hy.test(_u7) ? o.push(_u7) : (Xt(_u7 !== "object", 'The value "object" should be written as "Object"'), s.push(_u7));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      if (o.length > 0) {
        var u = n.indexOf("object");
        u !== -1 && (n.splice(n, u, 1), o.push("Object"));
      }
      if (n.length > 0) {
        switch (n.length) {
          case 1:
            i += "of type ".concat(n[0]);
            break;
          case 2:
            i += "one of type ".concat(n[0], " or ").concat(n[1]);
            break;
          default: {
            var _u2 = n.pop();
            i += "one of type ".concat(n.join(", "), ", or ").concat(_u2);
          }
        }
        (o.length > 0 || s.length > 0) && (i += " or ");
      }
      if (o.length > 0) {
        switch (o.length) {
          case 1:
            i += "an instance of ".concat(o[0]);
            break;
          case 2:
            i += "an instance of ".concat(o[0], " or ").concat(o[1]);
            break;
          default: {
            var _u3 = o.pop();
            i += "an instance of ".concat(o.join(", "), ", or ").concat(_u3);
          }
        }
        s.length > 0 && (i += " or ");
      }
      switch (s.length) {
        case 0:
          break;
        case 1:
          s[0].toLowerCase() !== s[0] && (i += "an "), i += "".concat(s[0]);
          break;
        case 2:
          i += "one of ".concat(s[0], " or ").concat(s[1]);
          break;
        default: {
          var _u4 = s.pop();
          i += "one of ".concat(s.join(", "), ", or ").concat(_u4);
        }
      }
      if (r == null)
        i += ". Received ".concat(r);
      else if (typeof r == "function" && r.name)
        i += ". Received function ".concat(r.name);
      else if (_typeof(r) == "object") {
        var a;
        if ((a = r.constructor) !== null && a !== void 0 && a.name)
          i += ". Received an instance of ".concat(r.constructor.name);
        else {
          var _u5 = Vi(r, {
            depth: -1
          });
          i += ". Received ".concat(_u5);
        }
      } else {
        var _u6 = Vi(r, {
          colors: false
        });
        _u6.length > 25 && (_u6 = "".concat(_u6.slice(0, 25), "...")), i += ". Received type ".concat(_typeof(r), " (").concat(_u6, ")");
      }
      return i;
    }, TypeError);
    me("ERR_INVALID_ARG_VALUE", function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
      var i = Vi(e);
      return i.length > 128 && (i = i.slice(0, 128) + "..."), "The ".concat(t.includes(".") ? "property" : "argument", " '").concat(t, "' ").concat(r, ". Received ").concat(i);
    }, TypeError);
    me("ERR_INVALID_RETURN_VALUE", function(t, e, r) {
      var i;
      var n = r != null && (i = r.constructor) !== null && i !== void 0 && i.name ? "instance of ".concat(r.constructor.name) : "type ".concat(_typeof(r));
      return "Expected ".concat(t, ' to be returned from the "').concat(e, '" function but got ').concat(n, ".");
    }, TypeError);
    me("ERR_MISSING_ARGS", function() {
      for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        t[_key7] = arguments[_key7];
      }
      Xt(t.length > 0, "At least one arg needs to be specified");
      var e, r = t.length;
      switch (t = (Array.isArray(t) ? t : [t]).map(function(i2) {
        return '"'.concat(i2, '"');
      }).join(" or "), r) {
        case 1:
          e += "The ".concat(t[0], " argument");
          break;
        case 2:
          e += "The ".concat(t[0], " and ").concat(t[1], " arguments");
          break;
        default:
          {
            var i = t.pop();
            e += "The ".concat(t.join(", "), ", and ").concat(i, " arguments");
          }
          break;
      }
      return "".concat(e, " must be specified");
    }, TypeError);
    me("ERR_OUT_OF_RANGE", function(t, e, r) {
      Xt(e, 'Missing "range" argument');
      var i;
      return Number.isInteger(r) && Math.abs(r) > Math.pow(2, 32) ? i = Xu(String(r)) : typeof r == "bigint" ? (i = String(r), (r > Math.pow(2n, 32n) || r < -Math.pow(2n, 32n)) && (i = Xu(i)), i += "n") : i = Vi(r), 'The value of "'.concat(t, '" is out of range. It must be ').concat(e, ". Received ").concat(i);
    }, RangeError);
    me("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    me("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    me("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    me("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    me("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    me("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    me("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    me("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    me("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    me("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    me("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    ef.exports = {
      AbortError: Es,
      aggregateTwoErrors: Zu(gy),
      hideStackFrames: Zu,
      codes: zi
    };
  });
  var fi = M(function(wI, ff) {
    v();
    m();
    _();
    var _ce = ce(), As = _ce.ArrayIsArray, sf = _ce.ArrayPrototypeIncludes, of = _ce.ArrayPrototypeJoin, yy = _ce.ArrayPrototypeMap, Is = _ce.NumberIsInteger, by = _ce.NumberIsNaN, wy = _ce.NumberMAX_SAFE_INTEGER, _y = _ce.NumberMIN_SAFE_INTEGER, my = _ce.NumberParseInt, vy = _ce.ObjectPrototypeHasOwnProperty, af = _ce.RegExpPrototypeExec, Ey = _ce.String, Sy = _ce.StringPrototypeToUpperCase, Ay = _ce.StringPrototypeTrim, _Se = Se(), Ue = _Se.hideStackFrames, _Se$codes = _Se.codes, Iy = _Se$codes.ERR_SOCKET_BAD_PORT, Ae = _Se$codes.ERR_INVALID_ARG_TYPE, Mr = _Se$codes.ERR_INVALID_ARG_VALUE, Zt = _Se$codes.ERR_OUT_OF_RANGE, tf = _Se$codes.ERR_UNKNOWN_SIGNAL, _Je2 = Je(), Ty = _Je2.normalizeEncoding, _Je$types = Je().types, Ry = _Je$types.isAsyncFunction, Cy = _Je$types.isArrayBufferView, rf = {};
    function By(t) {
      return t === (t | 0);
    }
    function Py(t) {
      return t === t >>> 0;
    }
    var Oy = /^[0-7]+$/, ky = "must be a 32-bit unsigned integer or an octal string";
    function xy(t, e, r) {
      if (_typeof(t) > "u" && (t = r), typeof t == "string") {
        if (af(Oy, t) === null)
          throw new Mr(e, t, ky);
        t = my(t, 8);
      }
      return lf(t, e), t;
    }
    var My = Ue(function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _y;
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : wy;
      if (typeof t != "number")
        throw new Ae(e, "number", t);
      if (!Is(t))
        throw new Zt(e, "an integer", t);
      if (t < r || t > i)
        throw new Zt(e, ">= ".concat(r, " && <= ").concat(i), t);
    }), Ly = Ue(function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -2147483648;
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 2147483647;
      if (typeof t != "number")
        throw new Ae(e, "number", t);
      if (!Is(t))
        throw new Zt(e, "an integer", t);
      if (t < r || t > i)
        throw new Zt(e, ">= ".concat(r, " && <= ").concat(i), t);
    }), lf = Ue(function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (typeof t != "number")
        throw new Ae(e, "number", t);
      if (!Is(t))
        throw new Zt(e, "an integer", t);
      var i = r ? 1 : 0, n = 4294967295;
      if (t < i || t > n)
        throw new Zt(e, ">= ".concat(i, " && <= ").concat(n), t);
    });
    function Ts(t, e) {
      if (typeof t != "string")
        throw new Ae(e, "string", t);
    }
    function Uy(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      var i = arguments.length > 3 ? arguments[3] : void 0;
      if (typeof t != "number")
        throw new Ae(e, "number", t);
      if (r != null && t < r || i != null && t > i || (r != null || i != null) && by(t))
        throw new Zt(e, "".concat(r != null ? ">= ".concat(r) : "").concat(r != null && i != null ? " && " : "").concat(i != null ? "<= ".concat(i) : ""), t);
    }
    var Ny = Ue(function(t, e, r) {
      if (!sf(r, t)) {
        var n = "must be one of: " + of(yy(r, function(o) {
          return typeof o == "string" ? "'".concat(o, "'") : Ey(o);
        }), ", ");
        throw new Mr(e, t, n);
      }
    });
    function uf(t, e) {
      if (typeof t != "boolean")
        throw new Ae(e, "boolean", t);
    }
    function Ss(t, e, r) {
      return t == null || !vy(t, e) ? r : t[e];
    }
    var qy = Ue(function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var i = Ss(r, "allowArray", false), n = Ss(r, "allowFunction", false);
      if (!Ss(r, "nullable", false) && t === null || !i && As(t) || _typeof(t) != "object" && (!n || typeof t != "function"))
        throw new Ae(e, "Object", t);
    }), Dy = Ue(function(t, e) {
      if (t != null && _typeof(t) != "object" && typeof t != "function")
        throw new Ae(e, "a dictionary", t);
    }), Rs = Ue(function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      if (!As(t))
        throw new Ae(e, "Array", t);
      if (t.length < r) {
        var i = "must be longer than ".concat(r);
        throw new Mr(e, t, i);
      }
    });
    function jy(t, e) {
      Rs(t, e);
      for (var r = 0; r < t.length; r++)
        Ts(t[r], "".concat(e, "[").concat(r, "]"));
    }
    function Fy(t, e) {
      Rs(t, e);
      for (var r = 0; r < t.length; r++)
        uf(t[r], "".concat(e, "[").concat(r, "]"));
    }
    function Wy(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "signal";
      if (Ts(t, e), rf[t] === void 0)
        throw rf[Sy(t)] !== void 0 ? new tf(t + " (signals must use all capital letters)") : new tf(t);
    }
    var $y = Ue(function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "buffer";
      if (!Cy(t))
        throw new Ae(e, ["Buffer", "TypedArray", "DataView"], t);
    });
    function Hy(t, e) {
      var r = Ty(e), i = t.length;
      if (r === "hex" && i % 2 !== 0)
        throw new Mr("encoding", e, "is invalid for data of length ".concat(i));
    }
    function Vy(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Port";
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      if (typeof t != "number" && typeof t != "string" || typeof t == "string" && Ay(t).length === 0 || +t !== +t >>> 0 || t > 65535 || t === 0 && !r)
        throw new Iy(e, t, r);
      return t | 0;
    }
    var zy = Ue(function(t, e) {
      if (t !== void 0 && (t === null || _typeof(t) != "object" || !("aborted" in t)))
        throw new Ae(e, "AbortSignal", t);
    }), Ky = Ue(function(t, e) {
      if (typeof t != "function")
        throw new Ae(e, "Function", t);
    }), Gy = Ue(function(t, e) {
      if (typeof t != "function" || Ry(t))
        throw new Ae(e, "Function", t);
    }), Qy = Ue(function(t, e) {
      if (t !== void 0)
        throw new Ae(e, "undefined", t);
    });
    function Yy(t, e, r) {
      if (!sf(r, t))
        throw new Ae(e, "('".concat(of(r, "|"), "')"), t);
    }
    var Jy = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
    function nf(t, e) {
      if (_typeof(t) > "u" || !af(Jy, t))
        throw new Mr(e, t, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
    }
    function Xy(t) {
      if (typeof t == "string")
        return nf(t, "hints"), t;
      if (As(t)) {
        var e = t.length, r = "";
        if (e === 0)
          return r;
        for (var i = 0; i < e; i++) {
          var n = t[i];
          nf(n, "hints"), r += n, i !== e - 1 && (r += ", ");
        }
        return r;
      }
      throw new Mr("hints", t, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
    }
    ff.exports = {
      isInt32: By,
      isUint32: Py,
      parseFileMode: xy,
      validateArray: Rs,
      validateStringArray: jy,
      validateBooleanArray: Fy,
      validateBoolean: uf,
      validateBuffer: $y,
      validateDictionary: Dy,
      validateEncoding: Hy,
      validateFunction: Ky,
      validateInt32: Ly,
      validateInteger: My,
      validateNumber: Uy,
      validateObject: qy,
      validateOneOf: Ny,
      validatePlainFunction: Gy,
      validatePort: Vy,
      validateSignalName: Wy,
      validateString: Ts,
      validateUint32: lf,
      validateUndefined: Qy,
      validateUnion: Yy,
      validateAbortSignal: zy,
      validateLinkHeaderValue: Xy
    };
  });
  var Nt = M(function(CI, pf) {
    v();
    m();
    _();
    var ae = pf.exports = {}, Xe, Ze;
    function Cs() {
      throw new Error("setTimeout has not been defined");
    }
    function Bs() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? Xe = setTimeout : Xe = Cs;
      } catch (_unused2) {
        Xe = Cs;
      }
      try {
        typeof clearTimeout == "function" ? Ze = clearTimeout : Ze = Bs;
      } catch (_unused3) {
        Ze = Bs;
      }
    })();
    function cf(t) {
      if (Xe === setTimeout)
        return setTimeout(t, 0);
      if ((Xe === Cs || !Xe) && setTimeout)
        return Xe = setTimeout, setTimeout(t, 0);
      try {
        return Xe(t, 0);
      } catch (_unused4) {
        try {
          return Xe.call(null, t, 0);
        } catch (_unused5) {
          return Xe.call(this, t, 0);
        }
      }
    }
    function Zy(t) {
      if (Ze === clearTimeout)
        return clearTimeout(t);
      if ((Ze === Bs || !Ze) && clearTimeout)
        return Ze = clearTimeout, clearTimeout(t);
      try {
        return Ze(t);
      } catch (_unused6) {
        try {
          return Ze.call(null, t);
        } catch (_unused7) {
          return Ze.call(this, t);
        }
      }
    }
    var _t = [], Lr = false, er, Ki = -1;
    function eb() {
      !Lr || !er || (Lr = false, er.length ? _t = er.concat(_t) : Ki = -1, _t.length && hf());
    }
    function hf() {
      if (!Lr) {
        var t = cf(eb);
        Lr = true;
        for (var e = _t.length; e; ) {
          for (er = _t, _t = []; ++Ki < e; )
            er && er[Ki].run();
          Ki = -1, e = _t.length;
        }
        er = null, Lr = false, Zy(t);
      }
    }
    ae.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
      _t.push(new df(t, e)), _t.length === 1 && !Lr && cf(hf);
    };
    function df(t, e) {
      this.fun = t, this.array = e;
    }
    df.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    ae.title = "browser";
    ae.browser = true;
    ae.env = {};
    ae.argv = [];
    ae.version = "";
    ae.versions = {};
    function mt() {
    }
    ae.on = mt;
    ae.addListener = mt;
    ae.once = mt;
    ae.off = mt;
    ae.removeListener = mt;
    ae.removeAllListeners = mt;
    ae.emit = mt;
    ae.prependListener = mt;
    ae.prependOnceListener = mt;
    ae.listeners = function(t) {
      return [];
    };
    ae.binding = function(t) {
      throw new Error("process.binding is not supported");
    };
    ae.cwd = function() {
      return "/";
    };
    ae.chdir = function(t) {
      throw new Error("process.chdir is not supported");
    };
    ae.umask = function() {
      return 0;
    };
  });
  var tt = M(function(qI, Pf) {
    v();
    m();
    _();
    var _ce2 = ce(), Gi = _ce2.Symbol, gf = _ce2.SymbolAsyncIterator, yf = _ce2.SymbolIterator, bf = _ce2.SymbolFor, wf = Gi("kDestroyed"), _f = Gi("kIsErrored"), Ps = Gi("kIsReadable"), mf = Gi("kIsDisturbed"), tb = bf("nodejs.webstream.isClosedPromise"), rb = bf("nodejs.webstream.controllerErrorFunction");
    function Qi(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var r;
      return !!(t && typeof t.pipe == "function" && typeof t.on == "function" && (!e || typeof t.pause == "function" && typeof t.resume == "function") && (!t._writableState || ((r = t._readableState) === null || r === void 0 ? void 0 : r.readable) !== false) && (!t._writableState || t._readableState));
    }
    function Yi(t) {
      var e;
      return !!(t && typeof t.write == "function" && typeof t.on == "function" && (!t._readableState || ((e = t._writableState) === null || e === void 0 ? void 0 : e.writable) !== false));
    }
    function ib(t) {
      return !!(t && typeof t.pipe == "function" && t._readableState && typeof t.on == "function" && typeof t.write == "function");
    }
    function et(t) {
      return t && (t._readableState || t._writableState || typeof t.write == "function" && typeof t.on == "function" || typeof t.pipe == "function" && typeof t.on == "function");
    }
    function vf(t) {
      return !!(t && !et(t) && typeof t.pipeThrough == "function" && typeof t.getReader == "function" && typeof t.cancel == "function");
    }
    function Ef(t) {
      return !!(t && !et(t) && typeof t.getWriter == "function" && typeof t.abort == "function");
    }
    function Sf(t) {
      return !!(t && !et(t) && _typeof(t.readable) == "object" && _typeof(t.writable) == "object");
    }
    function nb(t) {
      return vf(t) || Ef(t) || Sf(t);
    }
    function sb(t, e) {
      return t == null ? false : e === true ? typeof t[gf] == "function" : e === false ? typeof t[yf] == "function" : typeof t[gf] == "function" || typeof t[yf] == "function";
    }
    function Ji(t) {
      if (!et(t))
        return null;
      var e = t._writableState, r = t._readableState, i = e || r;
      return !!(t.destroyed || t[wf] || i != null && i.destroyed);
    }
    function Af(t) {
      if (!Yi(t))
        return null;
      if (t.writableEnded === true)
        return true;
      var e = t._writableState;
      return e != null && e.errored ? false : typeof (e === null || e === void 0 ? void 0 : e.ended) != "boolean" ? null : e.ended;
    }
    function ob(t, e) {
      if (!Yi(t))
        return null;
      if (t.writableFinished === true)
        return true;
      var r = t._writableState;
      return r != null && r.errored ? false : typeof (r === null || r === void 0 ? void 0 : r.finished) != "boolean" ? null : !!(r.finished || e === false && r.ended === true && r.length === 0);
    }
    function ab(t) {
      if (!Qi(t))
        return null;
      if (t.readableEnded === true)
        return true;
      var e = t._readableState;
      return !e || e.errored ? false : typeof (e === null || e === void 0 ? void 0 : e.ended) != "boolean" ? null : e.ended;
    }
    function If(t, e) {
      if (!Qi(t))
        return null;
      var r = t._readableState;
      return r != null && r.errored ? false : typeof (r === null || r === void 0 ? void 0 : r.endEmitted) != "boolean" ? null : !!(r.endEmitted || e === false && r.ended === true && r.length === 0);
    }
    function Tf(t) {
      return t && t[Ps] != null ? t[Ps] : typeof (t === null || t === void 0 ? void 0 : t.readable) != "boolean" ? null : Ji(t) ? false : Qi(t) && t.readable && !If(t);
    }
    function Rf(t) {
      return typeof (t === null || t === void 0 ? void 0 : t.writable) != "boolean" ? null : Ji(t) ? false : Yi(t) && t.writable && !Af(t);
    }
    function lb(t, e) {
      return et(t) ? Ji(t) ? true : !((e === null || e === void 0 ? void 0 : e.readable) !== false && Tf(t) || (e === null || e === void 0 ? void 0 : e.writable) !== false && Rf(t)) : null;
    }
    function ub(t) {
      var e, r;
      return et(t) ? t.writableErrored ? t.writableErrored : (e = (r = t._writableState) === null || r === void 0 ? void 0 : r.errored) !== null && e !== void 0 ? e : null : null;
    }
    function fb(t) {
      var e, r;
      return et(t) ? t.readableErrored ? t.readableErrored : (e = (r = t._readableState) === null || r === void 0 ? void 0 : r.errored) !== null && e !== void 0 ? e : null : null;
    }
    function cb(t) {
      if (!et(t))
        return null;
      if (typeof t.closed == "boolean")
        return t.closed;
      var e = t._writableState, r = t._readableState;
      return typeof (e === null || e === void 0 ? void 0 : e.closed) == "boolean" || typeof (r === null || r === void 0 ? void 0 : r.closed) == "boolean" ? (e === null || e === void 0 ? void 0 : e.closed) || (r === null || r === void 0 ? void 0 : r.closed) : typeof t._closed == "boolean" && Cf(t) ? t._closed : null;
    }
    function Cf(t) {
      return typeof t._closed == "boolean" && typeof t._defaultKeepAlive == "boolean" && typeof t._removedConnection == "boolean" && typeof t._removedContLen == "boolean";
    }
    function Bf(t) {
      return typeof t._sent100 == "boolean" && Cf(t);
    }
    function hb(t) {
      var e;
      return typeof t._consuming == "boolean" && typeof t._dumped == "boolean" && ((e = t.req) === null || e === void 0 ? void 0 : e.upgradeOrConnect) === void 0;
    }
    function db(t) {
      if (!et(t))
        return null;
      var e = t._writableState, r = t._readableState, i = e || r;
      return !i && Bf(t) || !!(i && i.autoDestroy && i.emitClose && i.closed === false);
    }
    function pb(t) {
      var e;
      return !!(t && ((e = t[mf]) !== null && e !== void 0 ? e : t.readableDidRead || t.readableAborted));
    }
    function gb(t) {
      var e, r, i, n, o, s, a, u, c, h;
      return !!(t && ((e = (r = (i = (n = (o = (s = t[_f]) !== null && s !== void 0 ? s : t.readableErrored) !== null && o !== void 0 ? o : t.writableErrored) !== null && n !== void 0 ? n : (a = t._readableState) === null || a === void 0 ? void 0 : a.errorEmitted) !== null && i !== void 0 ? i : (u = t._writableState) === null || u === void 0 ? void 0 : u.errorEmitted) !== null && r !== void 0 ? r : (c = t._readableState) === null || c === void 0 ? void 0 : c.errored) !== null && e !== void 0 ? e : !((h = t._writableState) === null || h === void 0) && h.errored));
    }
    Pf.exports = {
      kDestroyed: wf,
      isDisturbed: pb,
      kIsDisturbed: mf,
      isErrored: gb,
      kIsErrored: _f,
      isReadable: Tf,
      kIsReadable: Ps,
      kIsClosedPromise: tb,
      kControllerErrorFunction: rb,
      isClosed: cb,
      isDestroyed: Ji,
      isDuplexNodeStream: ib,
      isFinished: lb,
      isIterable: sb,
      isReadableNodeStream: Qi,
      isReadableStream: vf,
      isReadableEnded: ab,
      isReadableFinished: If,
      isReadableErrored: fb,
      isNodeStream: et,
      isWebStream: nb,
      isWritable: Rf,
      isWritableNodeStream: Yi,
      isWritableStream: Ef,
      isWritableEnded: Af,
      isWritableFinished: ob,
      isWritableErrored: ub,
      isServerRequest: hb,
      isServerResponse: Bf,
      willEmitClose: db,
      isTransformStream: Sf
    };
  });
  var vt = M(function(GI, Ls) {
    v();
    m();
    _();
    var qt = Nt(), _Se2 = Se(), Df = _Se2.AbortError, yb = _Se2.codes, bb = yb.ERR_INVALID_ARG_TYPE, Of = yb.ERR_STREAM_PREMATURE_CLOSE, _Je3 = Je(), ks = _Je3.kEmptyObject, xs = _Je3.once, _fi = fi(), wb = _fi.validateAbortSignal, _b = _fi.validateFunction, mb = _fi.validateObject, vb = _fi.validateBoolean, _ce3 = ce(), Eb = _ce3.Promise, Sb = _ce3.PromisePrototypeThen, _tt = tt(), Ab = _tt.isClosed, kf = _tt.isReadable, Os = _tt.isReadableNodeStream, Ib = _tt.isReadableStream, xf = _tt.isReadableFinished, Mf = _tt.isReadableErrored, Lf = _tt.isWritable, Uf = _tt.isWritableNodeStream, Tb = _tt.isWritableStream, Nf = _tt.isWritableFinished, qf = _tt.isWritableErrored, Rb = _tt.isNodeStream, Cb = _tt.willEmitClose, Bb = _tt.kIsClosedPromise;
    function Pb(t) {
      return t.setHeader && typeof t.abort == "function";
    }
    var Ms = function Ms2() {
    };
    function jf(t, e, r) {
      var i, n;
      if (arguments.length === 2 ? (r = e, e = ks) : e == null ? e = ks : mb(e, "options"), _b(r, "callback"), wb(e.signal, "options.signal"), r = xs(r), Ib(t) || Tb(t))
        return Ob(t, e, r);
      if (!Rb(t))
        throw new bb("stream", ["ReadableStream", "WritableStream", "Stream"], t);
      var o = (i = e.readable) !== null && i !== void 0 ? i : Os(t), s = (n = e.writable) !== null && n !== void 0 ? n : Uf(t), a = t._writableState, u = t._readableState, c = function c2() {
        t.writable || g();
      }, h = Cb(t) && Os(t) === o && Uf(t) === s, d = Nf(t, false), g = function g2() {
        d = true, t.destroyed && (h = false), !(h && (!t.readable || o)) && (!o || y) && r.call(t);
      }, y = xf(t, false), w = function w2() {
        y = true, t.destroyed && (h = false), !(h && (!t.writable || s)) && (!s || d) && r.call(t);
      }, E = function E2(N2) {
        r.call(t, N2);
      }, S = Ab(t), I = function I2() {
        S = true;
        var N2 = qf(t) || Mf(t);
        if (N2 && typeof N2 != "boolean")
          return r.call(t, N2);
        if (o && !y && Os(t, true) && !xf(t, false))
          return r.call(t, new Of());
        if (s && !d && !Nf(t, false))
          return r.call(t, new Of());
        r.call(t);
      }, C = function C2() {
        S = true;
        var N2 = qf(t) || Mf(t);
        if (N2 && typeof N2 != "boolean")
          return r.call(t, N2);
        r.call(t);
      }, R = function R2() {
        t.req.on("finish", g);
      };
      Pb(t) ? (t.on("complete", g), h || t.on("abort", I), t.req ? R() : t.on("request", R)) : s && !a && (t.on("end", c), t.on("close", c)), !h && typeof t.aborted == "boolean" && t.on("aborted", I), t.on("end", w), t.on("finish", g), e.error !== false && t.on("error", E), t.on("close", I), S ? qt.nextTick(I) : a != null && a.errorEmitted || u != null && u.errorEmitted ? h || qt.nextTick(C) : (!o && (!h || kf(t)) && (d || Lf(t) === false) || !s && (!h || Lf(t)) && (y || kf(t) === false) || u && t.req && t.aborted) && qt.nextTick(C);
      var U = function U2() {
        r = Ms, t.removeListener("aborted", I), t.removeListener("complete", g), t.removeListener("abort", I), t.removeListener("request", R), t.req && t.req.removeListener("finish", g), t.removeListener("end", c), t.removeListener("close", c), t.removeListener("finish", g), t.removeListener("end", w), t.removeListener("error", E), t.removeListener("close", I);
      };
      if (e.signal && !S) {
        var N = function N2() {
          var W2 = r;
          U(), W2.call(t, new Df(void 0, {
            cause: e.signal.reason
          }));
        };
        if (e.signal.aborted)
          qt.nextTick(N);
        else {
          var W = r;
          r = xs(function() {
            for (var _len8 = arguments.length, K = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              K[_key8] = arguments[_key8];
            }
            e.signal.removeEventListener("abort", N), W.apply(t, K);
          }), e.signal.addEventListener("abort", N);
        }
      }
      return U;
    }
    function Ob(t, e, r) {
      var i = false, n = Ms;
      if (e.signal)
        if (n = function n2() {
          i = true, r.call(t, new Df(void 0, {
            cause: e.signal.reason
          }));
        }, e.signal.aborted)
          qt.nextTick(n);
        else {
          var s = r;
          r = xs(function() {
            for (var _len9 = arguments.length, a = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              a[_key9] = arguments[_key9];
            }
            e.signal.removeEventListener("abort", n), s.apply(t, a);
          }), e.signal.addEventListener("abort", n);
        }
      var o = function o2() {
        for (var _len10 = arguments.length, s2 = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          s2[_key10] = arguments[_key10];
        }
        i || qt.nextTick(function() {
          return r.apply(t, s2);
        });
      };
      return Sb(t[Bb].promise, o, o), Ms;
    }
    function kb(t, e) {
      var r;
      var i = false;
      return e === null && (e = ks), (r = e) !== null && r !== void 0 && r.cleanup && (vb(e.cleanup, "cleanup"), i = e.cleanup), new Eb(function(n, o) {
        var s = jf(t, e, function(a) {
          i && s(), a ? o(a) : n();
        });
      });
    }
    Ls.exports = jf;
    Ls.exports.finished = kb;
  });
  var tr = M(function(nT, Gf) {
    v();
    m();
    _();
    var rt = Nt(), _Se3 = Se(), xb = _Se3.aggregateTwoErrors, Mb = _Se3.codes.ERR_MULTIPLE_CALLBACK, Lb = _Se3.AbortError, _ce4 = ce(), $f = _ce4.Symbol, _tt2 = tt(), Ub = _tt2.kDestroyed, Nb = _tt2.isDestroyed, qb = _tt2.isFinished, Db = _tt2.isServerRequest, Hf = $f("kDestroy"), Us = $f("kConstruct");
    function Vf(t, e, r) {
      t && (t.stack, e && !e.errored && (e.errored = t), r && !r.errored && (r.errored = t));
    }
    function jb(t, e) {
      var r = this._readableState, i = this._writableState, n = i || r;
      return i != null && i.destroyed || r != null && r.destroyed ? (typeof e == "function" && e(), this) : (Vf(t, i, r), i && (i.destroyed = true), r && (r.destroyed = true), n.constructed ? Ff(this, t, e) : this.once(Hf, function(o) {
        Ff(this, xb(o, t), e);
      }), this);
    }
    function Ff(t, e, r) {
      var i = false;
      function n(o) {
        if (i)
          return;
        i = true;
        var s = t._readableState, a = t._writableState;
        Vf(o, a, s), a && (a.closed = true), s && (s.closed = true), typeof r == "function" && r(o), o ? rt.nextTick(Fb, t, o) : rt.nextTick(zf, t);
      }
      try {
        t._destroy(e || null, n);
      } catch (o) {
        n(o);
      }
    }
    function Fb(t, e) {
      Ns(t, e), zf(t);
    }
    function zf(t) {
      var e = t._readableState, r = t._writableState;
      r && (r.closeEmitted = true), e && (e.closeEmitted = true), (r != null && r.emitClose || e != null && e.emitClose) && t.emit("close");
    }
    function Ns(t, e) {
      var r = t._readableState, i = t._writableState;
      i != null && i.errorEmitted || r != null && r.errorEmitted || (i && (i.errorEmitted = true), r && (r.errorEmitted = true), t.emit("error", e));
    }
    function Wb() {
      var t = this._readableState, e = this._writableState;
      t && (t.constructed = true, t.closed = false, t.closeEmitted = false, t.destroyed = false, t.errored = null, t.errorEmitted = false, t.reading = false, t.ended = t.readable === false, t.endEmitted = t.readable === false), e && (e.constructed = true, e.destroyed = false, e.closed = false, e.closeEmitted = false, e.errored = null, e.errorEmitted = false, e.finalCalled = false, e.prefinished = false, e.ended = e.writable === false, e.ending = e.writable === false, e.finished = e.writable === false);
    }
    function qs(t, e, r) {
      var i = t._readableState, n = t._writableState;
      if (n != null && n.destroyed || i != null && i.destroyed)
        return this;
      i != null && i.autoDestroy || n != null && n.autoDestroy ? t.destroy(e) : e && (e.stack, n && !n.errored && (n.errored = e), i && !i.errored && (i.errored = e), r ? rt.nextTick(Ns, t, e) : Ns(t, e));
    }
    function $b(t, e) {
      if (typeof t._construct != "function")
        return;
      var r = t._readableState, i = t._writableState;
      r && (r.constructed = false), i && (i.constructed = false), t.once(Us, e), !(t.listenerCount(Us) > 1) && rt.nextTick(Hb, t);
    }
    function Hb(t) {
      var e = false;
      function r(i) {
        if (e) {
          qs(t, i !== null && i !== void 0 ? i : new Mb());
          return;
        }
        e = true;
        var n = t._readableState, o = t._writableState, s = o || n;
        n && (n.constructed = true), o && (o.constructed = true), s.destroyed ? t.emit(Hf, i) : i ? qs(t, i, true) : rt.nextTick(Vb, t);
      }
      try {
        t._construct(function(i) {
          rt.nextTick(r, i);
        });
      } catch (i) {
        rt.nextTick(r, i);
      }
    }
    function Vb(t) {
      t.emit(Us);
    }
    function Wf(t) {
      return (t === null || t === void 0 ? void 0 : t.setHeader) && typeof t.abort == "function";
    }
    function Kf(t) {
      t.emit("close");
    }
    function zb(t, e) {
      t.emit("error", e), rt.nextTick(Kf, t);
    }
    function Kb(t, e) {
      !t || Nb(t) || (!e && !qb(t) && (e = new Lb()), Db(t) ? (t.socket = null, t.destroy(e)) : Wf(t) ? t.abort() : Wf(t.req) ? t.req.abort() : typeof t.destroy == "function" ? t.destroy(e) : typeof t.close == "function" ? t.close() : e ? rt.nextTick(zb, t, e) : rt.nextTick(Kf, t), t.destroyed || (t[Ub] = true));
    }
    Gf.exports = {
      construct: $b,
      destroyer: Kb,
      destroy: jb,
      undestroy: Wb,
      errorOrDestroy: qs
    };
  });
  function Y() {
    Y.init.call(this);
  }
  function Xi(t) {
    if (typeof t != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(t));
  }
  function nc(t) {
    return t._maxListeners === void 0 ? Y.defaultMaxListeners : t._maxListeners;
  }
  function Xf(t, e, r, i) {
    var n, o, s, a;
    if (Xi(r), (o = t._events) === void 0 ? (o = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), s === void 0)
      s = o[e] = r, ++t._eventsCount;
    else if (typeof s == "function" ? s = o[e] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), (n = nc(t)) > 0 && s.length > n && !s.warned) {
      s.warned = true;
      var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = s.length, a = u, console && console.warn && console.warn(a);
    }
    return t;
  }
  function Gb() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function Zf(t, e, r) {
    var i = {
      fired: false,
      wrapFn: void 0,
      target: t,
      type: e,
      listener: r
    }, n = Gb.bind(i);
    return n.listener = r, i.wrapFn = n, n;
  }
  function ec(t, e, r) {
    var i = t._events;
    if (i === void 0)
      return [];
    var n = i[e];
    return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? function(o) {
      for (var s = new Array(o.length), a = 0; a < s.length; ++a)
        s[a] = o[a].listener || o[a];
      return s;
    }(n) : sc(n, n.length);
  }
  function tc(t) {
    var e = this._events;
    if (e !== void 0) {
      var r = e[t];
      if (typeof r == "function")
        return 1;
      if (r !== void 0)
        return r.length;
    }
    return 0;
  }
  function sc(t, e) {
    for (var r = new Array(e), i = 0; i < e; ++i)
      r[i] = t[i];
    return r;
  }
  var rc, ic, Ur, Qf, Yf, Jf, Be, Ds = we(function() {
    v();
    m();
    _();
    Ur = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" ? Reflect : null, Qf = Ur && typeof Ur.apply == "function" ? Ur.apply : function(t, e, r) {
      return Function.prototype.apply.call(t, e, r);
    };
    ic = Ur && typeof Ur.ownKeys == "function" ? Ur.ownKeys : Object.getOwnPropertySymbols ? function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
      return Object.getOwnPropertyNames(t);
    };
    Yf = Number.isNaN || function(t) {
      return t != t;
    };
    rc = Y, Y.EventEmitter = Y, Y.prototype._events = void 0, Y.prototype._eventsCount = 0, Y.prototype._maxListeners = void 0;
    Jf = 10;
    Object.defineProperty(Y, "defaultMaxListeners", {
      enumerable: true,
      get: function get() {
        return Jf;
      },
      set: function set(t) {
        if (typeof t != "number" || t < 0 || Yf(t))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Jf = t;
      }
    }), Y.init = function() {
      this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, Y.prototype.setMaxListeners = function(t) {
      if (typeof t != "number" || t < 0 || Yf(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    }, Y.prototype.getMaxListeners = function() {
      return nc(this);
    }, Y.prototype.emit = function(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e.push(arguments[r]);
      var i = t === "error", n = this._events;
      if (n !== void 0)
        i = i && n.error === void 0;
      else if (!i)
        return false;
      if (i) {
        var o;
        if (e.length > 0 && (o = e[0]), o instanceof Error)
          throw o;
        var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw s.context = o, s;
      }
      var a = n[t];
      if (a === void 0)
        return false;
      if (typeof a == "function")
        Qf(a, this, e);
      else {
        var u = a.length, c = sc(a, u);
        for (r = 0; r < u; ++r)
          Qf(c[r], this, e);
      }
      return true;
    }, Y.prototype.addListener = function(t, e) {
      return Xf(this, t, e, false);
    }, Y.prototype.on = Y.prototype.addListener, Y.prototype.prependListener = function(t, e) {
      return Xf(this, t, e, true);
    }, Y.prototype.once = function(t, e) {
      return Xi(e), this.on(t, Zf(this, t, e)), this;
    }, Y.prototype.prependOnceListener = function(t, e) {
      return Xi(e), this.prependListener(t, Zf(this, t, e)), this;
    }, Y.prototype.removeListener = function(t, e) {
      var r, i, n, o, s;
      if (Xi(e), (i = this._events) === void 0)
        return this;
      if ((r = i[t]) === void 0)
        return this;
      if (r === e || r.listener === e)
        --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || e));
      else if (typeof r != "function") {
        for (n = -1, o = r.length - 1; o >= 0; o--)
          if (r[o] === e || r[o].listener === e) {
            s = r[o].listener, n = o;
            break;
          }
        if (n < 0)
          return this;
        n === 0 ? r.shift() : function(a, u) {
          for (; u + 1 < a.length; u++)
            a[u] = a[u + 1];
          a.pop();
        }(r, n), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, s || e);
      }
      return this;
    }, Y.prototype.off = Y.prototype.removeListener, Y.prototype.removeAllListeners = function(t) {
      var e, r, i;
      if ((r = this._events) === void 0)
        return this;
      if (r.removeListener === void 0)
        return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
      if (arguments.length === 0) {
        var n, o = Object.keys(r);
        for (i = 0; i < o.length; ++i)
          (n = o[i]) !== "removeListener" && this.removeAllListeners(n);
        return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
      }
      if (typeof (e = r[t]) == "function")
        this.removeListener(t, e);
      else if (e !== void 0)
        for (i = e.length - 1; i >= 0; i--)
          this.removeListener(t, e[i]);
      return this;
    }, Y.prototype.listeners = function(t) {
      return ec(this, t, true);
    }, Y.prototype.rawListeners = function(t) {
      return ec(this, t, false);
    }, Y.listenerCount = function(t, e) {
      return typeof t.listenerCount == "function" ? t.listenerCount(e) : tc.call(t, e);
    }, Y.prototype.listenerCount = tc, Y.prototype.eventNames = function() {
      return this._eventsCount > 0 ? ic(this._events) : [];
    };
    Be = rc;
    Be.EventEmitter;
    Be.defaultMaxListeners;
    Be.init;
    Be.listenerCount;
    Be.EventEmitter;
    Be.defaultMaxListeners;
    Be.init;
    Be.listenerCount;
  });
  var rr = {};
  Qt(rr, {
    EventEmitter: function EventEmitter() {
      return Qb;
    },
    default: function _default() {
      return Be;
    },
    defaultMaxListeners: function defaultMaxListeners() {
      return Yb;
    },
    init: function init() {
      return Jb;
    },
    listenerCount: function listenerCount() {
      return Xb;
    },
    on: function on2() {
      return Zb;
    },
    once: function once() {
      return ew;
    }
  });
  var Qb, Yb, Jb, Xb, Zb, ew, ir = we(function() {
    v();
    m();
    _();
    Ds();
    Ds();
    Be.once = function(t, e) {
      return new Promise(function(r, i) {
        function n() {
          for (var _len11 = arguments.length, s = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            s[_key11] = arguments[_key11];
          }
          o !== void 0 && t.removeListener("error", o), r(s);
        }
        var o;
        e !== "error" && (o = function o2(s) {
          t.removeListener(name, n), i(s);
        }, t.once("error", o)), t.once(e, n);
      });
    };
    Be.on = function(t, e) {
      var r = [], i = [], n = null, o = false, s = _defineProperty({
        next: function next() {
          return _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
            var c, h;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1)
                switch (_context2.prev = _context2.next) {
                  case 0:
                    c = r.shift();
                    if (!c) {
                      _context2.next = 3;
                      break;
                    }
                    return _context2.abrupt("return", createIterResult(c, false));
                  case 3:
                    if (!n) {
                      _context2.next = 6;
                      break;
                    }
                    h = Promise.reject(n);
                    return _context2.abrupt("return", (n = null, h));
                  case 6:
                    return _context2.abrupt("return", o ? createIterResult(void 0, true) : new Promise(function(h2, d) {
                      return i.push({
                        resolve: h2,
                        reject: d
                      });
                    }));
                  case 7:
                  case "end":
                    return _context2.stop();
                }
            }, _callee2);
          }))();
        },
        return: function _return() {
          return _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
            var _i3, _i2, c;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1)
                switch (_context3.prev = _context3.next) {
                  case 0:
                    t.removeListener(e, a), t.removeListener("error", u), o = true;
                    for (_i3 = 0, _i2 = i; _i3 < _i2.length; _i3++) {
                      c = _i2[_i3];
                      c.resolve(createIterResult(void 0, true));
                    }
                    return _context3.abrupt("return", createIterResult(void 0, true));
                  case 3:
                  case "end":
                    return _context3.stop();
                }
            }, _callee3);
          }))();
        },
        throw: function _throw(c) {
          n = c, t.removeListener(e, a), t.removeListener("error", u);
        }
      }, Symbol.asyncIterator, function() {
        return this;
      });
      return t.on(e, a), t.on("error", u), s;
      function a() {
        var h = i.shift();
        for (var _len12 = arguments.length, c = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          c[_key12] = arguments[_key12];
        }
        h ? h.resolve(createIterResult(c, false)) : r.push(c);
      }
      function u(c) {
        o = true;
        var h = i.shift();
        h ? h.reject(c) : n = c, s.return();
      }
    };
    var _Be = Be;
    Qb = _Be.EventEmitter;
    Yb = _Be.defaultMaxListeners;
    Jb = _Be.init;
    Xb = _Be.listenerCount;
    Zb = _Be.on;
    ew = _Be.once;
  });
  var tn = M(function(LT, ac) {
    v();
    m();
    _();
    var _ce5 = ce(), tw = _ce5.ArrayIsArray, oc = _ce5.ObjectSetPrototypeOf, _ref10 = (ir(), X(rr)), Zi = _ref10.EventEmitter;
    function en(t) {
      Zi.call(this, t);
    }
    oc(en.prototype, Zi.prototype);
    oc(en, Zi);
    en.prototype.pipe = function(t, e) {
      var r = this;
      function i(h) {
        t.writable && t.write(h) === false && r.pause && r.pause();
      }
      r.on("data", i);
      function n() {
        r.readable && r.resume && r.resume();
      }
      t.on("drain", n), !t._isStdio && (!e || e.end !== false) && (r.on("end", s), r.on("close", a));
      var o = false;
      function s() {
        o || (o = true, t.end());
      }
      function a() {
        o || (o = true, typeof t.destroy == "function" && t.destroy());
      }
      function u(h) {
        c(), Zi.listenerCount(this, "error") === 0 && this.emit("error", h);
      }
      js(r, "error", u), js(t, "error", u);
      function c() {
        r.removeListener("data", i), t.removeListener("drain", n), r.removeListener("end", s), r.removeListener("close", a), r.removeListener("error", u), t.removeListener("error", u), r.removeListener("end", c), r.removeListener("close", c), t.removeListener("close", c);
      }
      return r.on("end", c), r.on("close", c), t.on("close", c), t.emit("pipe", r), t;
    };
    function js(t, e, r) {
      if (typeof t.prependListener == "function")
        return t.prependListener(e, r);
      !t._events || !t._events[e] ? t.on(e, r) : tw(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
    }
    ac.exports = {
      Stream: en,
      prependListener: js
    };
  });
  var ci = M(function(VT, rn) {
    v();
    m();
    _();
    var _Se4 = Se(), lc = _Se4.AbortError, rw = _Se4.codes, _tt3 = tt(), uc = _tt3.isNodeStream, iw = _tt3.isWebStream, nw = _tt3.kControllerErrorFunction, sw = vt(), fc = rw.ERR_INVALID_ARG_TYPE, ow = function ow2(t, e) {
      if (_typeof(t) != "object" || !("aborted" in t))
        throw new fc(e, "AbortSignal", t);
    };
    rn.exports.addAbortSignal = function(e, r) {
      if (ow(e, "signal"), !uc(r) && !iw(r))
        throw new fc("stream", ["ReadableStream", "WritableStream", "Stream"], r);
      return rn.exports.addAbortSignalNoValidate(e, r);
    };
    rn.exports.addAbortSignalNoValidate = function(t, e) {
      if (_typeof(t) != "object" || !("aborted" in t))
        return e;
      var r = uc(e) ? function() {
        e.destroy(new lc(void 0, {
          cause: t.reason
        }));
      } : function() {
        e[nw](new lc(void 0, {
          cause: t.reason
        }));
      };
      return t.aborted ? r() : (t.addEventListener("abort", r), sw(e, function() {
        return t.removeEventListener("abort", r);
      })), e;
    };
  });
  var dc = M(function(r2, hc) {
    v();
    m();
    _();
    var _ce6 = ce(), cc = _ce6.StringPrototypeSlice, aw = _ce6.SymbolIterator, nn = _ce6.TypedArrayPrototypeSet, lw = _ce6.Uint8Array, _ref11 = (ye(), X(_e)), Fs = _ref11.Buffer, _Je4 = Je(), uw = _Je4.inspect;
    hc.exports = /* @__PURE__ */ function() {
      function _class2() {
        _classCallCheck(this, _class2);
        this.head = null, this.tail = null, this.length = 0;
      }
      return _createClass(_class2, [{
        key: "push",
        value: function push(e) {
          var r = {
            data: e,
            next: null
          };
          this.length > 0 ? this.tail.next = r : this.head = r, this.tail = r, ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(e) {
          var r = {
            data: e,
            next: this.head
          };
          this.length === 0 && (this.tail = r), this.head = r, ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0)
            return;
          var e = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null, this.length = 0;
        }
      }, {
        key: "join",
        value: function join(e) {
          if (this.length === 0)
            return "";
          var r = this.head, i = "" + r.data;
          for (; (r = r.next) !== null; )
            i += e + r.data;
          return i;
        }
      }, {
        key: "concat",
        value: function concat(e) {
          if (this.length === 0)
            return Fs.alloc(0);
          var r = Fs.allocUnsafe(e >>> 0), i = this.head, n = 0;
          for (; i; )
            nn(r, i.data, n), n += i.data.length, i = i.next;
          return r;
        }
      }, {
        key: "consume",
        value: function consume(e, r) {
          var i = this.head.data;
          if (e < i.length) {
            var n = i.slice(0, e);
            return this.head.data = i.slice(e), n;
          }
          return e === i.length ? this.shift() : r ? this._getString(e) : this._getBuffer(e);
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
      }, {
        key: aw,
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function value() {
          var e;
          return _regeneratorRuntime().wrap(function value$(_context4) {
            while (1)
              switch (_context4.prev = _context4.next) {
                case 0:
                  e = this.head;
                case 1:
                  if (!e) {
                    _context4.next = 7;
                    break;
                  }
                  _context4.next = 4;
                  return e.data;
                case 4:
                  e = e.next;
                  _context4.next = 1;
                  break;
                case 7:
                case "end":
                  return _context4.stop();
              }
          }, value, this);
        })
      }, {
        key: "_getString",
        value: function _getString(e) {
          var r = "", i = this.head, n = 0;
          do {
            var o = i.data;
            if (e > o.length)
              r += o, e -= o.length;
            else {
              e === o.length ? (r += o, ++n, i.next ? this.head = i.next : this.head = this.tail = null) : (r += cc(o, 0, e), this.head = i, i.data = cc(o, e));
              break;
            }
            ++n;
          } while ((i = i.next) !== null);
          return this.length -= n, r;
        }
      }, {
        key: "_getBuffer",
        value: function _getBuffer(e) {
          var r = Fs.allocUnsafe(e), i = e, n = this.head, o = 0;
          do {
            var s = n.data;
            if (e > s.length)
              nn(r, s, i - e), e -= s.length;
            else {
              e === s.length ? (nn(r, s, i - e), ++o, n.next ? this.head = n.next : this.head = this.tail = null) : (nn(r, new lw(s.buffer, s.byteOffset, e), i - e), this.head = n, n.data = s.slice(e));
              break;
            }
            ++o;
          } while ((n = n.next) !== null);
          return this.length -= o, r;
        }
      }, {
        key: Symbol.for("nodejs.util.inspect.custom"),
        value: function value(e, r) {
          return uw(this, _objectSpread2(_objectSpread2({}, r), {}, {
            depth: 0,
            customInspect: false
          }));
        }
      }]);
    }();
  });
  var sn = M(function(h2, gc) {
    v();
    m();
    _();
    var _ce7 = ce(), fw = _ce7.MathFloor, cw = _ce7.NumberIsInteger, hw = Se().codes.ERR_INVALID_ARG_VALUE;
    function dw(t, e, r) {
      return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
    }
    function pc(t) {
      return t ? 16 : 16 * 1024;
    }
    function pw(t, e, r, i) {
      var n = dw(e, i, r);
      if (n != null) {
        if (!cw(n) || n < 0) {
          var o = i ? "options.".concat(r) : "options.highWaterMark";
          throw new hw(o, n);
        }
        return fw(n);
      }
      return pc(t.objectMode);
    }
    gc.exports = {
      getHighWaterMark: pw,
      getDefaultHighWaterMark: pc
    };
  });
  function wc(t) {
    var e = t.length;
    if (e % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    return r === -1 && (r = e), [r, r === e ? 0 : 4 - r % 4];
  }
  function gw(t, e, r) {
    for (var i, n, o = [], s = e; s < r; s += 3)
      i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push($e[(n = i) >> 18 & 63] + $e[n >> 12 & 63] + $e[n >> 6 & 63] + $e[63 & n]);
    return o.join("");
  }
  function Et(t) {
    if (t > 2147483647)
      throw new RangeError('The value "' + t + '" is invalid for option "size"');
    var e = new Uint8Array(t);
    return Object.setPrototypeOf(e, k.prototype), e;
  }
  function k(t, e, r) {
    if (typeof t == "number") {
      if (typeof e == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return Vs(t);
    }
    return Cc(t, e, r);
  }
  function Cc(t, e, r) {
    if (typeof t == "string")
      return function(o, s) {
        if (typeof s == "string" && s !== "" || (s = "utf8"), !k.isEncoding(s))
          throw new TypeError("Unknown encoding: " + s);
        var a = 0 | Pc(o, s), u = Et(a), c = u.write(o, s);
        return c !== a && (u = u.slice(0, c)), u;
      }(t, e);
    if (ArrayBuffer.isView(t))
      return Ws(t);
    if (t == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(t));
    if (St(t, ArrayBuffer) || t && St(t.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (St(t, SharedArrayBuffer) || t && St(t.buffer, SharedArrayBuffer)))
      return mc(t, e, r);
    if (typeof t == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    var i = t.valueOf && t.valueOf();
    if (i != null && i !== t)
      return k.from(i, e, r);
    var n = function(o) {
      if (k.isBuffer(o)) {
        var s = 0 | Gs(o.length), a = Et(s);
        return a.length === 0 || o.copy(a, 0, 0, s), a;
      }
      if (o.length !== void 0)
        return typeof o.length != "number" || Qs(o.length) ? Et(0) : Ws(o);
      if (o.type === "Buffer" && Array.isArray(o.data))
        return Ws(o.data);
    }(t);
    if (n)
      return n;
    if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function")
      return k.from(t[Symbol.toPrimitive]("string"), e, r);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(t));
  }
  function Bc(t) {
    if (typeof t != "number")
      throw new TypeError('"size" argument must be of type number');
    if (t < 0)
      throw new RangeError('The value "' + t + '" is invalid for option "size"');
  }
  function Vs(t) {
    return Bc(t), Et(t < 0 ? 0 : 0 | Gs(t));
  }
  function Ws(t) {
    for (var e = t.length < 0 ? 0 : 0 | Gs(t.length), r = Et(e), i = 0; i < e; i += 1)
      r[i] = 255 & t[i];
    return r;
  }
  function mc(t, e, r) {
    if (e < 0 || t.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (t.byteLength < e + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var i;
    return i = e === void 0 && r === void 0 ? new Uint8Array(t) : r === void 0 ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(i, k.prototype), i;
  }
  function Gs(t) {
    if (t >= 2147483647)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
    return 0 | t;
  }
  function Pc(t, e) {
    if (k.isBuffer(t))
      return t.length;
    if (ArrayBuffer.isView(t) || St(t, ArrayBuffer))
      return t.byteLength;
    if (typeof t != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(t));
    var r = t.length, i = arguments.length > 2 && arguments[2] === true;
    if (!i && r === 0)
      return 0;
    for (var n = false; ; )
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return zs(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * r;
        case "hex":
          return r >>> 1;
        case "base64":
          return Mc(t).length;
        default:
          if (n)
            return i ? -1 : zs(t).length;
          e = ("" + e).toLowerCase(), n = true;
      }
  }
  function bw(t, e, r) {
    var i = false;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0) <= (e >>>= 0))
      return "";
    for (t || (t = "utf8"); ; )
      switch (t) {
        case "hex":
          return Tw(this, e, r);
        case "utf8":
        case "utf-8":
          return kc(this, e, r);
        case "ascii":
          return Aw(this, e, r);
        case "latin1":
        case "binary":
          return Iw(this, e, r);
        case "base64":
          return Sw(this, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Rw(this, e, r);
        default:
          if (i)
            throw new TypeError("Unknown encoding: " + t);
          t = (t + "").toLowerCase(), i = true;
      }
  }
  function sr(t, e, r) {
    var i = t[e];
    t[e] = t[r], t[r] = i;
  }
  function vc(t, e, r, i, n) {
    if (t.length === 0)
      return -1;
    if (typeof r == "string" ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), Qs(r = +r) && (r = n ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
      if (n)
        return -1;
      r = t.length - 1;
    } else if (r < 0) {
      if (!n)
        return -1;
      r = 0;
    }
    if (typeof e == "string" && (e = k.from(e, i)), k.isBuffer(e))
      return e.length === 0 ? -1 : Ec(t, e, r, i, n);
    if (typeof e == "number")
      return e &= 255, typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : Ec(t, [e], r, i, n);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Ec(t, e, r, i, n) {
    var o, s = 1, a = t.length, u = e.length;
    if (i !== void 0 && ((i = String(i).toLowerCase()) === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
      if (t.length < 2 || e.length < 2)
        return -1;
      s = 2, a /= 2, u /= 2, r /= 2;
    }
    function c(y, w) {
      return s === 1 ? y[w] : y.readUInt16BE(w * s);
    }
    if (n) {
      var h = -1;
      for (o = r; o < a; o++)
        if (c(t, o) === c(e, h === -1 ? 0 : o - h)) {
          if (h === -1 && (h = o), o - h + 1 === u)
            return h * s;
        } else
          h !== -1 && (o -= o - h), h = -1;
    } else
      for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
        for (var d = true, g = 0; g < u; g++)
          if (c(t, o + g) !== c(e, g)) {
            d = false;
            break;
          }
        if (d)
          return o;
      }
    return -1;
  }
  function ww(t, e, r, i) {
    r = Number(r) || 0;
    var n = t.length - r;
    i ? (i = Number(i)) > n && (i = n) : i = n;
    var o = e.length;
    i > o / 2 && (i = o / 2);
    for (var s = 0; s < i; ++s) {
      var a = parseInt(e.substr(2 * s, 2), 16);
      if (Qs(a))
        return s;
      t[r + s] = a;
    }
    return s;
  }
  function _w(t, e, r, i) {
    return un(zs(e, t.length - r), t, r, i);
  }
  function Oc(t, e, r, i) {
    return un(function(n) {
      for (var o = [], s = 0; s < n.length; ++s)
        o.push(255 & n.charCodeAt(s));
      return o;
    }(e), t, r, i);
  }
  function mw(t, e, r, i) {
    return Oc(t, e, r, i);
  }
  function vw(t, e, r, i) {
    return un(Mc(e), t, r, i);
  }
  function Ew(t, e, r, i) {
    return un(function(n, o) {
      for (var s, a, u, c = [], h = 0; h < n.length && !((o -= 2) < 0); ++h)
        s = n.charCodeAt(h), a = s >> 8, u = s % 256, c.push(u), c.push(a);
      return c;
    }(e, t.length - r), t, r, i);
  }
  function Sw(t, e, r) {
    return e === 0 && r === t.length ? Hs.fromByteArray(t) : Hs.fromByteArray(t.slice(e, r));
  }
  function kc(t, e, r) {
    r = Math.min(t.length, r);
    for (var i = [], n = e; n < r; ) {
      var o, s, a, u, c = t[n], h = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (n + d <= r)
        switch (d) {
          case 1:
            c < 128 && (h = c);
            break;
          case 2:
            (192 & (o = t[n + 1])) == 128 && (u = (31 & c) << 6 | 63 & o) > 127 && (h = u);
            break;
          case 3:
            o = t[n + 1], s = t[n + 2], (192 & o) == 128 && (192 & s) == 128 && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (h = u);
            break;
          case 4:
            o = t[n + 1], s = t[n + 2], a = t[n + 3], (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u);
        }
      h === null ? (h = 65533, d = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), n += d;
    }
    return function(g) {
      var y = g.length;
      if (y <= 4096)
        return String.fromCharCode.apply(String, g);
      for (var w = "", E = 0; E < y; )
        w += String.fromCharCode.apply(String, g.slice(E, E += 4096));
      return w;
    }(i);
  }
  function Aw(t, e, r) {
    var i = "";
    r = Math.min(t.length, r);
    for (var n = e; n < r; ++n)
      i += String.fromCharCode(127 & t[n]);
    return i;
  }
  function Iw(t, e, r) {
    var i = "";
    r = Math.min(t.length, r);
    for (var n = e; n < r; ++n)
      i += String.fromCharCode(t[n]);
    return i;
  }
  function Tw(t, e, r) {
    var i = t.length;
    (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
    for (var n = "", o = e; o < r; ++o)
      n += Bw[t[o]];
    return n;
  }
  function Rw(t, e, r) {
    for (var i = t.slice(e, r), n = "", o = 0; o < i.length; o += 2)
      n += String.fromCharCode(i[o] + 256 * i[o + 1]);
    return n;
  }
  function be(t, e, r) {
    if (t % 1 != 0 || t < 0)
      throw new RangeError("offset is not uint");
    if (t + e > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  function Pe(t, e, r, i, n, o) {
    if (!k.isBuffer(t))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > n || e < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + i > t.length)
      throw new RangeError("Index out of range");
  }
  function xc(t, e, r, i, n, o) {
    if (r + i > t.length)
      throw new RangeError("Index out of range");
    if (r < 0)
      throw new RangeError("Index out of range");
  }
  function Sc(t, e, r, i, n) {
    return e = +e, r >>>= 0, n || xc(t, 0, r, 4), Nr.write(t, e, r, i, 23, 4), r + 4;
  }
  function Ac(t, e, r, i, n) {
    return e = +e, r >>>= 0, n || xc(t, 0, r, 8), Nr.write(t, e, r, i, 52, 8), r + 8;
  }
  function zs(t, e) {
    var r;
    e = e || 1 / 0;
    for (var i = t.length, n = null, o = [], s = 0; s < i; ++s) {
      if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
        if (!n) {
          if (r > 56319) {
            (e -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          if (s + 1 === i) {
            (e -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          n = r;
          continue;
        }
        if (r < 56320) {
          (e -= 3) > -1 && o.push(239, 191, 189), n = r;
          continue;
        }
        r = 65536 + (n - 55296 << 10 | r - 56320);
      } else
        n && (e -= 3) > -1 && o.push(239, 191, 189);
      if (n = null, r < 128) {
        if ((e -= 1) < 0)
          break;
        o.push(r);
      } else if (r < 2048) {
        if ((e -= 2) < 0)
          break;
        o.push(r >> 6 | 192, 63 & r | 128);
      } else if (r < 65536) {
        if ((e -= 3) < 0)
          break;
        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
      } else {
        if (!(r < 1114112))
          throw new Error("Invalid code point");
        if ((e -= 4) < 0)
          break;
        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
      }
    }
    return o;
  }
  function Mc(t) {
    return Hs.toByteArray(function(e) {
      if ((e = (e = e.split("=")[0]).trim().replace(Cw, "")).length < 2)
        return "";
      for (; e.length % 4 != 0; )
        e += "=";
      return e;
    }(t));
  }
  function un(t, e, r, i) {
    for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n)
      e[n + r] = t[n];
    return n;
  }
  function St(t, e) {
    return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name;
  }
  function Qs(t) {
    return t != t;
  }
  function Ic(t, e) {
    for (var r in t)
      e[r] = t[r];
  }
  function or(t, e, r) {
    return it(t, e, r);
  }
  function hi(t) {
    var e;
    switch (this.encoding = function(r) {
      var i = function(n) {
        if (!n)
          return "utf8";
        for (var o; ; )
          switch (n) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return n;
            default:
              if (o)
                return;
              n = ("" + n).toLowerCase(), o = true;
          }
      }(r);
      if (typeof i != "string" && (Ks.isEncoding === Tc || !Tc(r)))
        throw new Error("Unknown encoding: " + r);
      return i || r;
    }(t), this.encoding) {
      case "utf16le":
        this.text = kw, this.end = xw, e = 4;
        break;
      case "utf8":
        this.fillLast = Ow, e = 4;
        break;
      case "base64":
        this.text = Mw, this.end = Lw, e = 3;
        break;
      default:
        return this.write = Uw, this.end = Nw, void 0;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Ks.allocUnsafe(e);
  }
  function $s(t) {
    return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
  }
  function Ow(t) {
    var e = this.lastTotal - this.lastNeed, r = function(i, n, o) {
      if ((192 & n[0]) != 128)
        return i.lastNeed = 0, "�";
      if (i.lastNeed > 1 && n.length > 1) {
        if ((192 & n[1]) != 128)
          return i.lastNeed = 1, "�";
        if (i.lastNeed > 2 && n.length > 2 && (192 & n[2]) != 128)
          return i.lastNeed = 2, "�";
      }
    }(this, t);
    return r !== void 0 ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length, void 0);
  }
  function kw(t, e) {
    if ((t.length - e) % 2 == 0) {
      var r = t.toString("utf16le", e);
      if (r) {
        var i = r.charCodeAt(r.length - 1);
        if (i >= 55296 && i <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
      }
      return r;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
  }
  function xw(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }
    return e;
  }
  function Mw(t, e) {
    var r = (t.length - e) % 3;
    return r === 0 ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
  }
  function Lw(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }
  function Uw(t) {
    return t.toString(this.encoding);
  }
  function Nw(t) {
    return t && t.length ? this.write(t) : "";
  }
  var Rc, $e, ke, yc, on, nr, bc, yw, At, Hs, Nr, _c, Cw, Bw, an, ln, it, Pw, ar, Ks, Tc, Ys = we(function() {
    v();
    m();
    _();
    for (Rc = {
      byteLength: function byteLength(t) {
        var e = wc(t), r = e[0], i = e[1];
        return 3 * (r + i) / 4 - i;
      },
      toByteArray: function toByteArray(t) {
        var e, r, i = wc(t), n = i[0], o = i[1], s = new yc(function(c, h, d) {
          return 3 * (h + d) / 4 - d;
        }(0, n, o)), a = 0, u = o > 0 ? n - 4 : n;
        for (r = 0; r < u; r += 4)
          e = ke[t.charCodeAt(r)] << 18 | ke[t.charCodeAt(r + 1)] << 12 | ke[t.charCodeAt(r + 2)] << 6 | ke[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
        return o === 2 && (e = ke[t.charCodeAt(r)] << 2 | ke[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e), o === 1 && (e = ke[t.charCodeAt(r)] << 10 | ke[t.charCodeAt(r + 1)] << 4 | ke[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e), s;
      },
      fromByteArray: function fromByteArray(t) {
        for (var e, r = t.length, i = r % 3, n = [], o = 0, s = r - i; o < s; o += 16383)
          n.push(gw(t, o, o + 16383 > s ? s : o + 16383));
        return i === 1 ? (e = t[r - 1], n.push($e[e >> 2] + $e[e << 4 & 63] + "==")) : i === 2 && (e = (t[r - 2] << 8) + t[r - 1], n.push($e[e >> 10] + $e[e >> 4 & 63] + $e[e << 2 & 63] + "=")), n.join("");
      }
    }, $e = [], ke = [], yc = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array, on = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nr = 0, bc = on.length; nr < bc; ++nr)
      $e[nr] = on[nr], ke[on.charCodeAt(nr)] = nr;
    ke["-".charCodeAt(0)] = 62, ke["_".charCodeAt(0)] = 63;
    yw = {
      read: function read(t, e, r, i, n) {
        var o, s, a = 8 * n - i - 1, u = (1 << a) - 1, c = u >> 1, h = -7, d = r ? n - 1 : 0, g = r ? -1 : 1, y = t[e + d];
        for (d += g, o = y & (1 << -h) - 1, y >>= -h, h += a; h > 0; o = 256 * o + t[e + d], d += g, h -= 8)
          ;
        for (s = o & (1 << -h) - 1, o >>= -h, h += i; h > 0; s = 256 * s + t[e + d], d += g, h -= 8)
          ;
        if (o === 0)
          o = 1 - c;
        else {
          if (o === u)
            return s ? NaN : 1 / 0 * (y ? -1 : 1);
          s += Math.pow(2, i), o -= c;
        }
        return (y ? -1 : 1) * s * Math.pow(2, o - i);
      },
      write: function write(t, e, r, i, n, o) {
        var s, a, u, c = 8 * o - n - 1, h = (1 << c) - 1, d = h >> 1, g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = i ? 0 : o - 1, w = i ? 1 : -1, E = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + d >= 1 ? g / u : g * Math.pow(2, 1 - d)) * u >= 2 && (s++, u /= 2), s + d >= h ? (a = 0, s = h) : s + d >= 1 ? (a = (e * u - 1) * Math.pow(2, n), s += d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, n), s = 0)); n >= 8; t[r + y] = 255 & a, y += w, a /= 256, n -= 8)
          ;
        for (s = s << n | a, c += n; c > 0; t[r + y] = 255 & s, y += w, s /= 256, c -= 8)
          ;
        t[r + y - w] |= 128 * E;
      }
    }, At = {}, Hs = Rc, Nr = yw, _c = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    At.Buffer = k, At.SlowBuffer = function(t) {
      return +t != t && (t = 0), k.alloc(+t);
    }, At.INSPECT_MAX_BYTES = 50;
    At.kMaxLength = 2147483647, k.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t = new Uint8Array(1), e = {
          foo: function foo() {
            return 42;
          }
        };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), t.foo() === 42;
      } catch (_unused8) {
        return false;
      }
    }(), k.TYPED_ARRAY_SUPPORT || (typeof console === "undefined" ? "undefined" : _typeof(console)) > "u" || typeof console.error != "function" || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(k.prototype, "parent", {
      enumerable: true,
      get: function get() {
        if (k.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(k.prototype, "offset", {
      enumerable: true,
      get: function get() {
        if (k.isBuffer(this))
          return this.byteOffset;
      }
    }), k.poolSize = 8192, k.from = function(t, e, r) {
      return Cc(t, e, r);
    }, Object.setPrototypeOf(k.prototype, Uint8Array.prototype), Object.setPrototypeOf(k, Uint8Array), k.alloc = function(t, e, r) {
      return function(i, n, o) {
        return Bc(i), i <= 0 ? Et(i) : n !== void 0 ? typeof o == "string" ? Et(i).fill(n, o) : Et(i).fill(n) : Et(i);
      }(t, e, r);
    }, k.allocUnsafe = function(t) {
      return Vs(t);
    }, k.allocUnsafeSlow = function(t) {
      return Vs(t);
    }, k.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== k.prototype;
    }, k.compare = function(t, e) {
      if (St(t, Uint8Array) && (t = k.from(t, t.offset, t.byteLength)), St(e, Uint8Array) && (e = k.from(e, e.offset, e.byteLength)), !k.isBuffer(t) || !k.isBuffer(e))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === e)
        return 0;
      for (var r = t.length, i = e.length, n = 0, o = Math.min(r, i); n < o; ++n)
        if (t[n] !== e[n]) {
          r = t[n], i = e[n];
          break;
        }
      return r < i ? -1 : i < r ? 1 : 0;
    }, k.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, k.concat = function(t, e) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return k.alloc(0);
      var r;
      if (e === void 0)
        for (e = 0, r = 0; r < t.length; ++r)
          e += t[r].length;
      var i = k.allocUnsafe(e), n = 0;
      for (r = 0; r < t.length; ++r) {
        var o = t[r];
        if (St(o, Uint8Array) && (o = k.from(o)), !k.isBuffer(o))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(i, n), n += o.length;
      }
      return i;
    }, k.byteLength = Pc, k.prototype._isBuffer = true, k.prototype.swap16 = function() {
      var t = this.length;
      if (t % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var e = 0; e < t; e += 2)
        sr(this, e, e + 1);
      return this;
    }, k.prototype.swap32 = function() {
      var t = this.length;
      if (t % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var e = 0; e < t; e += 4)
        sr(this, e, e + 3), sr(this, e + 1, e + 2);
      return this;
    }, k.prototype.swap64 = function() {
      var t = this.length;
      if (t % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var e = 0; e < t; e += 8)
        sr(this, e, e + 7), sr(this, e + 1, e + 6), sr(this, e + 2, e + 5), sr(this, e + 3, e + 4);
      return this;
    }, k.prototype.toString = function() {
      var t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? kc(this, 0, t) : bw.apply(this, arguments);
    }, k.prototype.toLocaleString = k.prototype.toString, k.prototype.equals = function(t) {
      if (!k.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t || k.compare(this, t) === 0;
    }, k.prototype.inspect = function() {
      var t = "", e = At.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">";
    }, _c && (k.prototype[_c] = k.prototype.inspect), k.prototype.compare = function(t, e, r, i, n) {
      if (St(t, Uint8Array) && (t = k.from(t, t.offset, t.byteLength)), !k.isBuffer(t))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
      if (e === void 0 && (e = 0), r === void 0 && (r = t ? t.length : 0), i === void 0 && (i = 0), n === void 0 && (n = this.length), e < 0 || r > t.length || i < 0 || n > this.length)
        throw new RangeError("out of range index");
      if (i >= n && e >= r)
        return 0;
      if (i >= n)
        return -1;
      if (e >= r)
        return 1;
      if (this === t)
        return 0;
      for (var o = (n >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), u = this.slice(i, n), c = t.slice(e, r), h = 0; h < a; ++h)
        if (u[h] !== c[h]) {
          o = u[h], s = c[h];
          break;
        }
      return o < s ? -1 : s < o ? 1 : 0;
    }, k.prototype.includes = function(t, e, r) {
      return this.indexOf(t, e, r) !== -1;
    }, k.prototype.indexOf = function(t, e, r) {
      return vc(this, t, e, r, true);
    }, k.prototype.lastIndexOf = function(t, e, r) {
      return vc(this, t, e, r, false);
    }, k.prototype.write = function(t, e, r, i) {
      if (e === void 0)
        i = "utf8", r = this.length, e = 0;
      else if (r === void 0 && typeof e == "string")
        i = e, r = this.length, e = 0;
      else {
        if (!isFinite(e))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e >>>= 0, isFinite(r) ? (r >>>= 0, i === void 0 && (i = "utf8")) : (i = r, r = void 0);
      }
      var n = this.length - e;
      if ((r === void 0 || r > n) && (r = n), t.length > 0 && (r < 0 || e < 0) || e > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      for (var o = false; ; )
        switch (i) {
          case "hex":
            return ww(this, t, e, r);
          case "utf8":
          case "utf-8":
            return _w(this, t, e, r);
          case "ascii":
            return Oc(this, t, e, r);
          case "latin1":
          case "binary":
            return mw(this, t, e, r);
          case "base64":
            return vw(this, t, e, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ew(this, t, e, r);
          default:
            if (o)
              throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), o = true;
        }
    }, k.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    k.prototype.slice = function(t, e) {
      var r = this.length;
      (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = e === void 0 ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
      var i = this.subarray(t, e);
      return Object.setPrototypeOf(i, k.prototype), i;
    }, k.prototype.readUIntLE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || be(t, e, this.length);
      for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
        i += this[t + o] * n;
      return i;
    }, k.prototype.readUIntBE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || be(t, e, this.length);
      for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); )
        i += this[t + --e] * n;
      return i;
    }, k.prototype.readUInt8 = function(t, e) {
      return t >>>= 0, e || be(t, 1, this.length), this[t];
    }, k.prototype.readUInt16LE = function(t, e) {
      return t >>>= 0, e || be(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, k.prototype.readUInt16BE = function(t, e) {
      return t >>>= 0, e || be(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, k.prototype.readUInt32LE = function(t, e) {
      return t >>>= 0, e || be(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, k.prototype.readUInt32BE = function(t, e) {
      return t >>>= 0, e || be(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, k.prototype.readIntLE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || be(t, e, this.length);
      for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
        i += this[t + o] * n;
      return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i;
    }, k.prototype.readIntBE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || be(t, e, this.length);
      for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256); )
        o += this[t + --i] * n;
      return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)), o;
    }, k.prototype.readInt8 = function(t, e) {
      return t >>>= 0, e || be(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, k.prototype.readInt16LE = function(t, e) {
      t >>>= 0, e || be(t, 2, this.length);
      var r = this[t] | this[t + 1] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, k.prototype.readInt16BE = function(t, e) {
      t >>>= 0, e || be(t, 2, this.length);
      var r = this[t + 1] | this[t] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, k.prototype.readInt32LE = function(t, e) {
      return t >>>= 0, e || be(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, k.prototype.readInt32BE = function(t, e) {
      return t >>>= 0, e || be(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, k.prototype.readFloatLE = function(t, e) {
      return t >>>= 0, e || be(t, 4, this.length), Nr.read(this, t, true, 23, 4);
    }, k.prototype.readFloatBE = function(t, e) {
      return t >>>= 0, e || be(t, 4, this.length), Nr.read(this, t, false, 23, 4);
    }, k.prototype.readDoubleLE = function(t, e) {
      return t >>>= 0, e || be(t, 8, this.length), Nr.read(this, t, true, 52, 8);
    }, k.prototype.readDoubleBE = function(t, e) {
      return t >>>= 0, e || be(t, 8, this.length), Nr.read(this, t, false, 52, 8);
    }, k.prototype.writeUIntLE = function(t, e, r, i) {
      t = +t, e >>>= 0, r >>>= 0, i || Pe(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var n = 1, o = 0;
      for (this[e] = 255 & t; ++o < r && (n *= 256); )
        this[e + o] = t / n & 255;
      return e + r;
    }, k.prototype.writeUIntBE = function(t, e, r, i) {
      t = +t, e >>>= 0, r >>>= 0, i || Pe(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var n = r - 1, o = 1;
      for (this[e + n] = 255 & t; --n >= 0 && (o *= 256); )
        this[e + n] = t / o & 255;
      return e + r;
    }, k.prototype.writeUInt8 = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1;
    }, k.prototype.writeUInt16LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
    }, k.prototype.writeUInt16BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
    }, k.prototype.writeUInt32LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4;
    }, k.prototype.writeUInt32BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
    }, k.prototype.writeIntLE = function(t, e, r, i) {
      if (t = +t, e >>>= 0, !i) {
        var n = Math.pow(2, 8 * r - 1);
        Pe(this, t, e, r, n - 1, -n);
      }
      var o = 0, s = 1, a = 0;
      for (this[e] = 255 & t; ++o < r && (s *= 256); )
        t < 0 && a === 0 && this[e + o - 1] !== 0 && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      return e + r;
    }, k.prototype.writeIntBE = function(t, e, r, i) {
      if (t = +t, e >>>= 0, !i) {
        var n = Math.pow(2, 8 * r - 1);
        Pe(this, t, e, r, n - 1, -n);
      }
      var o = r - 1, s = 1, a = 0;
      for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
        t < 0 && a === 0 && this[e + o + 1] !== 0 && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
      return e + r;
    }, k.prototype.writeInt8 = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, k.prototype.writeInt16LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
    }, k.prototype.writeInt16BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
    }, k.prototype.writeInt32LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
    }, k.prototype.writeInt32BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || Pe(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
    }, k.prototype.writeFloatLE = function(t, e, r) {
      return Sc(this, t, e, true, r);
    }, k.prototype.writeFloatBE = function(t, e, r) {
      return Sc(this, t, e, false, r);
    }, k.prototype.writeDoubleLE = function(t, e, r) {
      return Ac(this, t, e, true, r);
    }, k.prototype.writeDoubleBE = function(t, e, r) {
      return Ac(this, t, e, false, r);
    }, k.prototype.copy = function(t, e, r, i) {
      if (!k.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (r || (r = 0), i || i === 0 || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || t.length === 0 || this.length === 0)
        return 0;
      if (e < 0)
        throw new RangeError("targetStart out of bounds");
      if (r < 0 || r >= this.length)
        throw new RangeError("Index out of range");
      if (i < 0)
        throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
      var n = i - r;
      if (this === t && typeof Uint8Array.prototype.copyWithin == "function")
        this.copyWithin(e, r, i);
      else if (this === t && r < e && e < i)
        for (var o = n - 1; o >= 0; --o)
          t[o + e] = this[o + r];
      else
        Uint8Array.prototype.set.call(t, this.subarray(r, i), e);
      return n;
    }, k.prototype.fill = function(t, e, r, i) {
      if (typeof t == "string") {
        if (typeof e == "string" ? (i = e, e = 0, r = this.length) : typeof r == "string" && (i = r, r = this.length), i !== void 0 && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !k.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (t.length === 1) {
          var n = t.charCodeAt(0);
          (i === "utf8" && n < 128 || i === "latin1") && (t = n);
        }
      } else
        typeof t == "number" ? t &= 255 : typeof t == "boolean" && (t = Number(t));
      if (e < 0 || this.length < e || this.length < r)
        throw new RangeError("Out of range index");
      if (r <= e)
        return this;
      var o;
      if (e >>>= 0, r = r === void 0 ? this.length : r >>> 0, t || (t = 0), typeof t == "number")
        for (o = e; o < r; ++o)
          this[o] = t;
      else {
        var s = k.isBuffer(t) ? t : k.from(t, i), a = s.length;
        if (a === 0)
          throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0; o < r - e; ++o)
          this[o + e] = s[o % a];
      }
      return this;
    };
    Cw = /[^+/0-9A-Za-z-_]/g;
    Bw = function() {
      for (var t = new Array(256), e = 0; e < 16; ++e)
        for (var r = 16 * e, i = 0; i < 16; ++i)
          t[r + i] = "0123456789abcdef"[e] + "0123456789abcdef"[i];
      return t;
    }();
    At.Buffer;
    At.INSPECT_MAX_BYTES;
    At.kMaxLength;
    an = {}, ln = At, it = ln.Buffer;
    it.from && it.alloc && it.allocUnsafe && it.allocUnsafeSlow ? an = ln : (Ic(ln, an), an.Buffer = or), or.prototype = Object.create(it.prototype), Ic(it, or), or.from = function(t, e, r) {
      if (typeof t == "number")
        throw new TypeError("Argument must not be a number");
      return it(t, e, r);
    }, or.alloc = function(t, e, r) {
      if (typeof t != "number")
        throw new TypeError("Argument must be a number");
      var i = it(t);
      return e !== void 0 ? typeof r == "string" ? i.fill(e, r) : i.fill(e) : i.fill(0), i;
    }, or.allocUnsafe = function(t) {
      if (typeof t != "number")
        throw new TypeError("Argument must be a number");
      return it(t);
    }, or.allocUnsafeSlow = function(t) {
      if (typeof t != "number")
        throw new TypeError("Argument must be a number");
      return ln.SlowBuffer(t);
    };
    Pw = an, ar = {}, Ks = Pw.Buffer, Tc = Ks.isEncoding || function(t) {
      switch ((t = "" + t) && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    ar.StringDecoder = hi, hi.prototype.write = function(t) {
      if (t.length === 0)
        return "";
      var e, r;
      if (this.lastNeed) {
        if ((e = this.fillLast(t)) === void 0)
          return "";
        r = this.lastNeed, this.lastNeed = 0;
      } else
        r = 0;
      return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
    }, hi.prototype.end = function(t) {
      var e = t && t.length ? this.write(t) : "";
      return this.lastNeed ? e + "�" : e;
    }, hi.prototype.text = function(t, e) {
      var r = function(n, o, s) {
        var a = o.length - 1;
        if (a < s)
          return 0;
        var u = $s(o[a]);
        return u >= 0 ? (u > 0 && (n.lastNeed = u - 1), u) : --a < s || u === -2 ? 0 : (u = $s(o[a])) >= 0 ? (u > 0 && (n.lastNeed = u - 2), u) : --a < s || u === -2 ? 0 : (u = $s(o[a])) >= 0 ? (u > 0 && (u === 2 ? u = 0 : n.lastNeed = u - 3), u) : 0;
      }(this, t, e);
      if (!this.lastNeed)
        return t.toString("utf8", e);
      this.lastTotal = r;
      var i = t.length - (r - this.lastNeed);
      return t.copy(this.lastChar, 0, i), t.toString("utf8", e, i);
    }, hi.prototype.fillLast = function(t) {
      if (this.lastNeed <= t.length)
        return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
    };
    ar.StringDecoder;
    ar.StringDecoder;
  });
  var Lc = {};
  Qt(Lc, {
    StringDecoder: function StringDecoder() {
      return qw;
    },
    default: function _default() {
      return ar;
    }
  });
  var qw, Uc = we(function() {
    v();
    m();
    _();
    Ys();
    Ys();
    qw = ar.StringDecoder;
  });
  var Js = M(function($2, jc) {
    v();
    m();
    _();
    var Nc = Nt(), _ce8 = ce(), Dw = _ce8.PromisePrototypeThen, qc = _ce8.SymbolAsyncIterator, Dc = _ce8.SymbolIterator, _ref12 = (ye(), X(_e)), jw = _ref12.Buffer, _Se$codes2 = Se().codes, Fw = _Se$codes2.ERR_INVALID_ARG_TYPE, Ww = _Se$codes2.ERR_STREAM_NULL_VALUES;
    function $w(t, e, r) {
      var i;
      if (typeof e == "string" || e instanceof jw)
        return new t(_objectSpread2(_objectSpread2({
          objectMode: true
        }, r), {}, {
          read: function read() {
            this.push(e), this.push(null);
          }
        }));
      var n;
      if (e && e[qc])
        n = true, i = e[qc]();
      else if (e && e[Dc])
        n = false, i = e[Dc]();
      else
        throw new Fw("iterable", ["Iterable"], e);
      var o = new t(_objectSpread2({
        objectMode: true,
        highWaterMark: 1
      }, r)), s = false;
      o._read = function() {
        s || (s = true, u());
      }, o._destroy = function(c, h) {
        Dw(a(c), function() {
          return Nc.nextTick(h, c);
        }, function(d) {
          return Nc.nextTick(h, d || c);
        });
      };
      function a(_x4) {
        return _a2.apply(this, arguments);
      }
      function _a2() {
        _a2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(c) {
          var h, d, _yield$i$throw, g, y, _yield$i$return, _g2;
          return _regeneratorRuntime().wrap(function _callee4$(_context5) {
            while (1)
              switch (_context5.prev = _context5.next) {
                case 0:
                  h = c != null, d = typeof i.throw == "function";
                  if (!(h && d)) {
                    _context5.next = 11;
                    break;
                  }
                  _context5.next = 4;
                  return i.throw(c);
                case 4:
                  _yield$i$throw = _context5.sent;
                  g = _yield$i$throw.value;
                  y = _yield$i$throw.done;
                  _context5.next = 9;
                  return g;
                case 9:
                  if (!y) {
                    _context5.next = 11;
                    break;
                  }
                  return _context5.abrupt("return");
                case 11:
                  if (!(typeof i.return == "function")) {
                    _context5.next = 18;
                    break;
                  }
                  _context5.next = 14;
                  return i.return();
                case 14:
                  _yield$i$return = _context5.sent;
                  _g2 = _yield$i$return.value;
                  _context5.next = 18;
                  return _g2;
                case 18:
                case "end":
                  return _context5.stop();
              }
          }, _callee4);
        }));
        return _a2.apply(this, arguments);
      }
      function u() {
        return _u8.apply(this, arguments);
      }
      function _u8() {
        _u8 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5() {
          var _ref13, c, h, d;
          return _regeneratorRuntime().wrap(function _callee5$(_context6) {
            while (1)
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  if (!n) {
                    _context6.next = 7;
                    break;
                  }
                  _context6.next = 4;
                  return i.next();
                case 4:
                  _context6.t0 = _context6.sent;
                  _context6.next = 8;
                  break;
                case 7:
                  _context6.t0 = i.next();
                case 8:
                  _ref13 = _context6.t0;
                  c = _ref13.value;
                  h = _ref13.done;
                  if (!h) {
                    _context6.next = 15;
                    break;
                  }
                  o.push(null);
                  _context6.next = 28;
                  break;
                case 15:
                  if (!(c && typeof c.then == "function")) {
                    _context6.next = 21;
                    break;
                  }
                  _context6.next = 18;
                  return c;
                case 18:
                  _context6.t1 = _context6.sent;
                  _context6.next = 22;
                  break;
                case 21:
                  _context6.t1 = c;
                case 22:
                  d = _context6.t1;
                  if (!(d === null)) {
                    _context6.next = 25;
                    break;
                  }
                  throw s = false, new Ww();
                case 25:
                  if (!o.push(d)) {
                    _context6.next = 27;
                    break;
                  }
                  return _context6.abrupt("continue", 34);
                case 27:
                  s = false;
                case 28:
                  _context6.next = 33;
                  break;
                case 30:
                  _context6.prev = 30;
                  _context6.t2 = _context6["catch"](0);
                  o.destroy(_context6.t2);
                case 33:
                  return _context6.abrupt("break", 36);
                case 34:
                  _context6.next = 0;
                  break;
                case 36:
                case "end":
                  return _context6.stop();
              }
          }, _callee5, null, [[0, 30]]);
        }));
        return _u8.apply(this, arguments);
      }
      return o;
    }
    jc.exports = $w;
  });
  var di = M(function(Z2, Zc) {
    v();
    m();
    _();
    var He = Nt(), _ce9 = ce(), Hw = _ce9.ArrayPrototypeIndexOf, Vw = _ce9.NumberIsInteger, zw = _ce9.NumberIsNaN, Kw = _ce9.NumberParseInt, $c = _ce9.ObjectDefineProperties, Gw = _ce9.ObjectKeys, Hc = _ce9.ObjectSetPrototypeOf, Qw = _ce9.Promise, Yw = _ce9.SafeSet, Jw = _ce9.SymbolAsyncIterator, Xw = _ce9.Symbol;
    Zc.exports = F;
    F.ReadableState = io;
    var _ref14 = (ir(), X(rr)), Zw = _ref14.EventEmitter, _tn = tn(), Dt = _tn.Stream, e_ = _tn.prependListener, _ref15 = (ye(), X(_e)), Xs = _ref15.Buffer, _ci = ci(), t_ = _ci.addAbortSignal, r_ = vt(), H = Je().debuglog("stream", function(t) {
      H = t;
    }), i_ = dc(), Dr = tr(), _sn = sn(), n_ = _sn.getHighWaterMark, s_ = _sn.getDefaultHighWaterMark, _Se5 = Se(), Fc = _Se5.aggregateTwoErrors, _Se5$codes = _Se5.codes, o_ = _Se5$codes.ERR_INVALID_ARG_TYPE, a_ = _Se5$codes.ERR_METHOD_NOT_IMPLEMENTED, l_ = _Se5$codes.ERR_OUT_OF_RANGE, u_ = _Se5$codes.ERR_STREAM_PUSH_AFTER_EOF, f_ = _Se5$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, _fi2 = fi(), c_ = _fi2.validateObject, lr = Xw("kPaused"), _ref16 = (Uc(), X(Lc)), Vc = _ref16.StringDecoder, h_ = Js();
    Hc(F.prototype, Dt.prototype);
    Hc(F, Dt);
    var Zs = function Zs2() {
    }, qr = Dr.errorOrDestroy;
    function io(t, e, r) {
      typeof r != "boolean" && (r = e instanceof nt()), this.objectMode = !!(t && t.objectMode), r && (this.objectMode = this.objectMode || !!(t && t.readableObjectMode)), this.highWaterMark = t ? n_(this, t, "readableHighWaterMark", r) : s_(false), this.buffer = new i_(), this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[lr] = null, this.errorEmitted = false, this.emitClose = !t || t.emitClose !== false, this.autoDestroy = !t || t.autoDestroy !== false, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = t && t.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, t && t.encoding && (this.decoder = new Vc(t.encoding), this.encoding = t.encoding);
    }
    function F(t) {
      var _this4 = this;
      if (!(this instanceof F))
        return new F(t);
      var e = this instanceof nt();
      this._readableState = new io(t, this, e), t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.construct == "function" && (this._construct = t.construct), t.signal && !e && t_(t.signal, this)), Dt.call(this, t), Dr.construct(this, function() {
        _this4._readableState.needReadable && fn(_this4, _this4._readableState);
      });
    }
    F.prototype.destroy = Dr.destroy;
    F.prototype._undestroy = Dr.undestroy;
    F.prototype._destroy = function(t, e) {
      e(t);
    };
    F.prototype[Zw.captureRejectionSymbol] = function(t) {
      this.destroy(t);
    };
    F.prototype.push = function(t, e) {
      return zc(this, t, e, false);
    };
    F.prototype.unshift = function(t, e) {
      return zc(this, t, e, true);
    };
    function zc(t, e, r, i) {
      H("readableAddChunk", e);
      var n = t._readableState, o;
      if (n.objectMode || (typeof e == "string" ? (r = r || n.defaultEncoding, n.encoding !== r && (i && n.encoding ? e = Xs.from(e, r).toString(n.encoding) : (e = Xs.from(e, r), r = ""))) : e instanceof Xs ? r = "" : Dt._isUint8Array(e) ? (e = Dt._uint8ArrayToBuffer(e), r = "") : e != null && (o = new o_("chunk", ["string", "Buffer", "Uint8Array"], e))), o)
        qr(t, o);
      else if (e === null)
        n.reading = false, g_(t, n);
      else if (n.objectMode || e && e.length > 0) {
        if (i) {
          if (n.endEmitted)
            qr(t, new f_());
          else {
            if (n.destroyed || n.errored)
              return false;
            eo(t, n, e, true);
          }
        } else if (n.ended)
          qr(t, new u_());
        else {
          if (n.destroyed || n.errored)
            return false;
          n.reading = false, n.decoder && !r ? (e = n.decoder.write(e), n.objectMode || e.length !== 0 ? eo(t, n, e, false) : fn(t, n)) : eo(t, n, e, false);
        }
      } else
        i || (n.reading = false, fn(t, n));
      return !n.ended && (n.length < n.highWaterMark || n.length === 0);
    }
    function eo(t, e, r, i) {
      e.flowing && e.length === 0 && !e.sync && t.listenerCount("data") > 0 ? (e.multiAwaitDrain ? e.awaitDrainWriters.clear() : e.awaitDrainWriters = null, e.dataEmitted = true, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, i ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && cn(t)), fn(t, e);
    }
    F.prototype.isPaused = function() {
      var t = this._readableState;
      return t[lr] === true || t.flowing === false;
    };
    F.prototype.setEncoding = function(t) {
      var e = new Vc(t);
      this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
      var r = this._readableState.buffer, i = "";
      var _iterator15 = _createForOfIteratorHelper(r), _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
          var n = _step15.value;
          i += e.write(n);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      return r.clear(), i !== "" && r.push(i), this._readableState.length = i.length, this;
    };
    var d_ = 1073741824;
    function p_(t) {
      if (t > d_)
        throw new l_("size", "<= 1GiB", t);
      return t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++, t;
    }
    function Wc(t, e) {
      return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : zw(t) ? e.flowing && e.length ? e.buffer.first().length : e.length : t <= e.length ? t : e.ended ? e.length : 0;
    }
    F.prototype.read = function(t) {
      H("read", t), t === void 0 ? t = NaN : Vw(t) || (t = Kw(t, 10));
      var e = this._readableState, r = t;
      if (t > e.highWaterMark && (e.highWaterMark = p_(t)), t !== 0 && (e.emittedReadable = false), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        return H("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? to(this) : cn(this), null;
      if (t = Wc(t, e), t === 0 && e.ended)
        return e.length === 0 && to(this), null;
      var i = e.needReadable;
      if (H("need readable", i), (e.length === 0 || e.length - t < e.highWaterMark) && (i = true, H("length less than watermark", i)), e.ended || e.reading || e.destroyed || e.errored || !e.constructed)
        i = false, H("reading, ended or constructing", i);
      else if (i) {
        H("do read"), e.reading = true, e.sync = true, e.length === 0 && (e.needReadable = true);
        try {
          this._read(e.highWaterMark);
        } catch (o) {
          qr(this, o);
        }
        e.sync = false, e.reading || (t = Wc(r, e));
      }
      var n;
      return t > 0 ? n = Jc(t, e) : n = null, n === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.multiAwaitDrain ? e.awaitDrainWriters.clear() : e.awaitDrainWriters = null), e.length === 0 && (e.ended || (e.needReadable = true), r !== t && e.ended && to(this)), n !== null && !e.errorEmitted && !e.closeEmitted && (e.dataEmitted = true, this.emit("data", n)), n;
    };
    function g_(t, e) {
      if (H("onEofChunk"), !e.ended) {
        if (e.decoder) {
          var r = e.decoder.end();
          r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
        }
        e.ended = true, e.sync ? cn(t) : (e.needReadable = false, e.emittedReadable = true, Kc(t));
      }
    }
    function cn(t) {
      var e = t._readableState;
      H("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = false, e.emittedReadable || (H("emitReadable", e.flowing), e.emittedReadable = true, He.nextTick(Kc, t));
    }
    function Kc(t) {
      var e = t._readableState;
      H("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && !e.errored && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = false), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, Qc(t);
    }
    function fn(t, e) {
      !e.readingMore && e.constructed && (e.readingMore = true, He.nextTick(y_, t, e));
    }
    function y_(t, e) {
      for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0); ) {
        var r = e.length;
        if (H("maybeReadMore read 0"), t.read(0), r === e.length)
          break;
      }
      e.readingMore = false;
    }
    F.prototype._read = function(t) {
      throw new a_("_read()");
    };
    F.prototype.pipe = function(t, e) {
      var r = this, i = this._readableState;
      i.pipes.length === 1 && (i.multiAwaitDrain || (i.multiAwaitDrain = true, i.awaitDrainWriters = new Yw(i.awaitDrainWriters ? [i.awaitDrainWriters] : []))), i.pipes.push(t), H("pipe count=%d opts=%j", i.pipes.length, e);
      var o = (!e || e.end !== false) && t !== He.stdout && t !== He.stderr ? a : S;
      i.endEmitted ? He.nextTick(o) : r.once("end", o), t.on("unpipe", s);
      function s(I, C) {
        H("onunpipe"), I === r && C && C.hasUnpiped === false && (C.hasUnpiped = true, h());
      }
      function a() {
        H("onend"), t.end();
      }
      var u, c = false;
      function h() {
        H("cleanup"), t.removeListener("close", w), t.removeListener("finish", E), u && t.removeListener("drain", u), t.removeListener("error", y), t.removeListener("unpipe", s), r.removeListener("end", a), r.removeListener("end", S), r.removeListener("data", g), c = true, u && i.awaitDrainWriters && (!t._writableState || t._writableState.needDrain) && u();
      }
      function d() {
        c || (i.pipes.length === 1 && i.pipes[0] === t ? (H("false write response, pause", 0), i.awaitDrainWriters = t, i.multiAwaitDrain = false) : i.pipes.length > 1 && i.pipes.includes(t) && (H("false write response, pause", i.awaitDrainWriters.size), i.awaitDrainWriters.add(t)), r.pause()), u || (u = b_(r, t), t.on("drain", u));
      }
      r.on("data", g);
      function g(I) {
        H("ondata");
        var C = t.write(I);
        H("dest.write", C), C === false && d();
      }
      function y(I) {
        if (H("onerror", I), S(), t.removeListener("error", y), t.listenerCount("error") === 0) {
          var C = t._writableState || t._readableState;
          C && !C.errorEmitted ? qr(t, I) : t.emit("error", I);
        }
      }
      e_(t, "error", y);
      function w() {
        t.removeListener("finish", E), S();
      }
      t.once("close", w);
      function E() {
        H("onfinish"), t.removeListener("close", w), S();
      }
      t.once("finish", E);
      function S() {
        H("unpipe"), r.unpipe(t);
      }
      return t.emit("pipe", r), t.writableNeedDrain === true ? i.flowing && d() : i.flowing || (H("pipe resume"), r.resume()), t;
    };
    function b_(t, e) {
      return function() {
        var i = t._readableState;
        i.awaitDrainWriters === e ? (H("pipeOnDrain", 1), i.awaitDrainWriters = null) : i.multiAwaitDrain && (H("pipeOnDrain", i.awaitDrainWriters.size), i.awaitDrainWriters.delete(e)), (!i.awaitDrainWriters || i.awaitDrainWriters.size === 0) && t.listenerCount("data") && t.resume();
      };
    }
    F.prototype.unpipe = function(t) {
      var e = this._readableState, r = {
        hasUnpiped: false
      };
      if (e.pipes.length === 0)
        return this;
      if (!t) {
        var n = e.pipes;
        e.pipes = [], this.pause();
        for (var o = 0; o < n.length; o++)
          n[o].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      var i = Hw(e.pipes, t);
      return i === -1 ? this : (e.pipes.splice(i, 1), e.pipes.length === 0 && this.pause(), t.emit("unpipe", this, r), this);
    };
    F.prototype.on = function(t, e) {
      var r = Dt.prototype.on.call(this, t, e), i = this._readableState;
      return t === "data" ? (i.readableListening = this.listenerCount("readable") > 0, i.flowing !== false && this.resume()) : t === "readable" && !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = true, i.flowing = false, i.emittedReadable = false, H("on readable", i.length, i.reading), i.length ? cn(this) : i.reading || He.nextTick(w_, this)), r;
    };
    F.prototype.addListener = F.prototype.on;
    F.prototype.removeListener = function(t, e) {
      var r = Dt.prototype.removeListener.call(this, t, e);
      return t === "readable" && He.nextTick(Gc, this), r;
    };
    F.prototype.off = F.prototype.removeListener;
    F.prototype.removeAllListeners = function(t) {
      var e = Dt.prototype.removeAllListeners.apply(this, arguments);
      return (t === "readable" || t === void 0) && He.nextTick(Gc, this), e;
    };
    function Gc(t) {
      var e = t._readableState;
      e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && e[lr] === false ? e.flowing = true : t.listenerCount("data") > 0 ? t.resume() : e.readableListening || (e.flowing = null);
    }
    function w_(t) {
      H("readable nexttick read 0"), t.read(0);
    }
    F.prototype.resume = function() {
      var t = this._readableState;
      return t.flowing || (H("resume"), t.flowing = !t.readableListening, __(this, t)), t[lr] = false, this;
    };
    function __(t, e) {
      e.resumeScheduled || (e.resumeScheduled = true, He.nextTick(m_, t, e));
    }
    function m_(t, e) {
      H("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = false, t.emit("resume"), Qc(t), e.flowing && !e.reading && t.read(0);
    }
    F.prototype.pause = function() {
      return H("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (H("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[lr] = true, this;
    };
    function Qc(t) {
      var e = t._readableState;
      for (H("flow", e.flowing); e.flowing && t.read() !== null; )
        ;
    }
    F.prototype.wrap = function(t) {
      var _this5 = this;
      var e = false;
      t.on("data", function(i2) {
        !_this5.push(i2) && t.pause && (e = true, t.pause());
      }), t.on("end", function() {
        _this5.push(null);
      }), t.on("error", function(i2) {
        qr(_this5, i2);
      }), t.on("close", function() {
        _this5.destroy();
      }), t.on("destroy", function() {
        _this5.destroy();
      }), this._read = function() {
        e && t.resume && (e = false, t.resume());
      };
      var r = Gw(t);
      for (var i = 1; i < r.length; i++) {
        var n = r[i];
        this[n] === void 0 && typeof t[n] == "function" && (this[n] = t[n].bind(t));
      }
      return this;
    };
    F.prototype[Jw] = function() {
      return Yc(this);
    };
    F.prototype.iterator = function(t) {
      return t !== void 0 && c_(t, "options"), Yc(this, t);
    };
    function Yc(t, e) {
      typeof t.read != "function" && (t = F.wrap(t, {
        objectMode: true
      }));
      var r = v_(t, e);
      return r.stream = t, r;
    }
    function v_(_x, _x2) {
      return _v_.apply(this, arguments);
    }
    function _v_() {
      _v_ = _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee6(t, e) {
        var r, i, n, o, s;
        return _regeneratorRuntime().wrap(function _callee6$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                i = function _i4(s2) {
                  this === t ? (r(), r = Zs) : r = s2;
                };
                r = Zs;
                t.on("readable", i);
                o = r_(t, {
                  writable: false
                }, function(s2) {
                  n = s2 ? Fc(n, s2) : null, r(), r = Zs;
                });
                _context7.prev = 4;
              case 5:
                s = t.destroyed ? null : t.read();
                if (!(s !== null)) {
                  _context7.next = 11;
                  break;
                }
                _context7.next = 9;
                return s;
              case 9:
                _context7.next = 17;
                break;
              case 11:
                if (!n) {
                  _context7.next = 13;
                  break;
                }
                throw n;
              case 13:
                if (!(n === null)) {
                  _context7.next = 15;
                  break;
                }
                return _context7.abrupt("return");
              case 15:
                _context7.next = 17;
                return _awaitAsyncGenerator(new Qw(i));
              case 17:
                _context7.next = 5;
                break;
              case 19:
                _context7.next = 24;
                break;
              case 21:
                _context7.prev = 21;
                _context7.t0 = _context7["catch"](4);
                throw n = Fc(n, _context7.t0), n;
              case 24:
                _context7.prev = 24;
                (n || (e === null || e === void 0 ? void 0 : e.destroyOnReturn) !== false) && (n === void 0 || t._readableState.autoDestroy) ? Dr.destroyer(t, null) : (t.off("readable", i), o());
                return _context7.finish(24);
              case 27:
              case "end":
                return _context7.stop();
            }
        }, _callee6, null, [[4, 21, 24, 27]]);
      }));
      return _v_.apply(this, arguments);
    }
    $c(F.prototype, {
      readable: {
        __proto__: null,
        get: function get() {
          var t = this._readableState;
          return !!t && t.readable !== false && !t.destroyed && !t.errorEmitted && !t.endEmitted;
        },
        set: function set(t) {
          this._readableState && (this._readableState.readable = !!t);
        }
      },
      readableDidRead: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState.dataEmitted;
        }
      },
      readableAborted: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
        }
      },
      readableHighWaterMark: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      },
      readableBuffer: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState && this._readableState.buffer;
        }
      },
      readableFlowing: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState.flowing;
        },
        set: function set(t) {
          this._readableState && (this._readableState.flowing = t);
        }
      },
      readableLength: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState.length;
        }
      },
      readableObjectMode: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState ? this._readableState.objectMode : false;
        }
      },
      readableEncoding: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState ? this._readableState.encoding : null;
        }
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState ? this._readableState.errored : null;
        }
      },
      closed: {
        __proto__: null,
        get: function get() {
          return this._readableState ? this._readableState.closed : false;
        }
      },
      destroyed: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState ? this._readableState.destroyed : false;
        },
        set: function set(t) {
          this._readableState && (this._readableState.destroyed = t);
        }
      },
      readableEnded: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._readableState ? this._readableState.endEmitted : false;
        }
      }
    });
    $c(io.prototype, {
      pipesCount: {
        __proto__: null,
        get: function get() {
          return this.pipes.length;
        }
      },
      paused: {
        __proto__: null,
        get: function get() {
          return this[lr] !== false;
        },
        set: function set(t) {
          this[lr] = !!t;
        }
      }
    });
    F._fromList = Jc;
    function Jc(t, e) {
      if (e.length === 0)
        return null;
      var r;
      return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
    }
    function to(t) {
      var e = t._readableState;
      H("endReadable", e.endEmitted), e.endEmitted || (e.ended = true, He.nextTick(E_, e, t));
    }
    function E_(t, e) {
      if (H("endReadableNT", t.endEmitted, t.length), !t.errored && !t.closeEmitted && !t.endEmitted && t.length === 0) {
        if (t.endEmitted = true, e.emit("end"), e.writable && e.allowHalfOpen === false)
          He.nextTick(S_, e);
        else if (t.autoDestroy) {
          var _r3 = e._writableState;
          (!_r3 || _r3.autoDestroy && (_r3.finished || _r3.writable === false)) && e.destroy();
        }
      }
    }
    function S_(t) {
      t.writable && !t.writableEnded && !t.destroyed && t.end();
    }
    F.from = function(t, e) {
      return h_(F, t, e);
    };
    var ro;
    function Xc() {
      return ro === void 0 && (ro = {}), ro;
    }
    F.fromWeb = function(t, e) {
      return Xc().newStreamReadableFromReadableStream(t, e);
    };
    F.toWeb = function(t, e) {
      return Xc().newReadableStreamFromStreamReadable(t, e);
    };
    F.wrap = function(t, e) {
      var r, i;
      return new F(_objectSpread2(_objectSpread2({
        objectMode: (r = (i = t.readableObjectMode) !== null && i !== void 0 ? i : t.objectMode) !== null && r !== void 0 ? r : true
      }, e), {}, {
        destroy: function destroy(n, o) {
          Dr.destroyer(t, n), o(n);
        }
      })).wrap(t);
    };
  });
  var fo = M(function(uR, ch) {
    v();
    m();
    _();
    var ur = Nt(), _ce10 = ce(), rh = _ce10.ArrayPrototypeSlice, A_ = _ce10.Error, ih = _ce10.FunctionPrototypeSymbolHasInstance, nh = _ce10.ObjectDefineProperty, I_ = _ce10.ObjectDefineProperties, sh = _ce10.ObjectSetPrototypeOf, T_ = _ce10.StringPrototypeToLowerCase, R_ = _ce10.Symbol, C_ = _ce10.SymbolHasInstance;
    ch.exports = ie;
    ie.WritableState = yi;
    var _ref17 = (ir(), X(rr)), B_ = _ref17.EventEmitter, pi = tn().Stream, _ref18 = (ye(), X(_e)), hn = _ref18.Buffer, gn = tr(), _ci2 = ci(), P_ = _ci2.addAbortSignal, _sn2 = sn(), O_ = _sn2.getHighWaterMark, k_ = _sn2.getDefaultHighWaterMark, _Se$codes3 = Se().codes, x_ = _Se$codes3.ERR_INVALID_ARG_TYPE, M_ = _Se$codes3.ERR_METHOD_NOT_IMPLEMENTED, oh = _Se$codes3.ERR_MULTIPLE_CALLBACK, L_ = _Se$codes3.ERR_STREAM_CANNOT_PIPE, gi = _Se$codes3.ERR_STREAM_DESTROYED, U_ = _Se$codes3.ERR_STREAM_ALREADY_FINISHED, N_ = _Se$codes3.ERR_STREAM_NULL_VALUES, q_ = _Se$codes3.ERR_STREAM_WRITE_AFTER_END, ah = _Se$codes3.ERR_UNKNOWN_ENCODING, jr = gn.errorOrDestroy;
    sh(ie.prototype, pi.prototype);
    sh(ie, pi);
    function oo() {
    }
    var Fr = R_("kOnFinished");
    function yi(t, e, r) {
      typeof r != "boolean" && (r = e instanceof nt()), this.objectMode = !!(t && t.objectMode), r && (this.objectMode = this.objectMode || !!(t && t.writableObjectMode)), this.highWaterMark = t ? O_(this, t, "writableHighWaterMark", r) : k_(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var i = !!(t && t.decodeStrings === false);
      this.decodeStrings = !i, this.defaultEncoding = t && t.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = j_.bind(void 0, e), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, pn(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !t || t.emitClose !== false, this.autoDestroy = !t || t.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[Fr] = [];
    }
    function pn(t) {
      t.buffered = [], t.bufferedIndex = 0, t.allBuffers = true, t.allNoop = true;
    }
    yi.prototype.getBuffer = function() {
      return rh(this.buffered, this.bufferedIndex);
    };
    nh(yi.prototype, "bufferedRequestCount", {
      __proto__: null,
      get: function get() {
        return this.buffered.length - this.bufferedIndex;
      }
    });
    function ie(t) {
      var _this6 = this;
      var e = this instanceof nt();
      if (!e && !ih(ie, this))
        return new ie(t);
      this._writableState = new yi(t, this, e), t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final), typeof t.construct == "function" && (this._construct = t.construct), t.signal && P_(t.signal, this)), pi.call(this, t), gn.construct(this, function() {
        var r = _this6._writableState;
        r.writing || lo(_this6, r), uo(_this6, r);
      });
    }
    nh(ie, C_, {
      __proto__: null,
      value: function value(t) {
        return ih(this, t) ? true : this !== ie ? false : t && t._writableState instanceof yi;
      }
    });
    ie.prototype.pipe = function() {
      jr(this, new L_());
    };
    function lh(t, e, r, i) {
      var n = t._writableState;
      if (typeof r == "function")
        i = r, r = n.defaultEncoding;
      else {
        if (!r)
          r = n.defaultEncoding;
        else if (r !== "buffer" && !hn.isEncoding(r))
          throw new ah(r);
        typeof i != "function" && (i = oo);
      }
      if (e === null)
        throw new N_();
      if (!n.objectMode)
        if (typeof e == "string")
          n.decodeStrings !== false && (e = hn.from(e, r), r = "buffer");
        else if (e instanceof hn)
          r = "buffer";
        else if (pi._isUint8Array(e))
          e = pi._uint8ArrayToBuffer(e), r = "buffer";
        else
          throw new x_("chunk", ["string", "Buffer", "Uint8Array"], e);
      var o;
      return n.ending ? o = new q_() : n.destroyed && (o = new gi("write")), o ? (ur.nextTick(i, o), jr(t, o, true), o) : (n.pendingcb++, D_(t, n, e, r, i));
    }
    ie.prototype.write = function(t, e, r) {
      return lh(this, t, e, r) === true;
    };
    ie.prototype.cork = function() {
      this._writableState.corked++;
    };
    ie.prototype.uncork = function() {
      var t = this._writableState;
      t.corked && (t.corked--, t.writing || lo(this, t));
    };
    ie.prototype.setDefaultEncoding = function(e) {
      if (typeof e == "string" && (e = T_(e)), !hn.isEncoding(e))
        throw new ah(e);
      return this._writableState.defaultEncoding = e, this;
    };
    function D_(t, e, r, i, n) {
      var o = e.objectMode ? 1 : r.length;
      e.length += o;
      var s = e.length < e.highWaterMark;
      return s || (e.needDrain = true), e.writing || e.corked || e.errored || !e.constructed ? (e.buffered.push({
        chunk: r,
        encoding: i,
        callback: n
      }), e.allBuffers && i !== "buffer" && (e.allBuffers = false), e.allNoop && n !== oo && (e.allNoop = false)) : (e.writelen = o, e.writecb = n, e.writing = true, e.sync = true, t._write(r, i, e.onwrite), e.sync = false), s && !e.errored && !e.destroyed;
    }
    function eh(t, e, r, i, n, o, s) {
      e.writelen = i, e.writecb = s, e.writing = true, e.sync = true, e.destroyed ? e.onwrite(new gi("write")) : r ? t._writev(n, e.onwrite) : t._write(n, o, e.onwrite), e.sync = false;
    }
    function th(t, e, r, i) {
      --e.pendingcb, i(r), ao(e), jr(t, r);
    }
    function j_(t, e) {
      var r = t._writableState, i = r.sync, n = r.writecb;
      if (typeof n != "function") {
        jr(t, new oh());
        return;
      }
      r.writing = false, r.writecb = null, r.length -= r.writelen, r.writelen = 0, e ? (e.stack, r.errored || (r.errored = e), t._readableState && !t._readableState.errored && (t._readableState.errored = e), i ? ur.nextTick(th, t, r, e, n) : th(t, r, e, n)) : (r.buffered.length > r.bufferedIndex && lo(t, r), i ? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === n ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = {
        count: 1,
        cb: n,
        stream: t,
        state: r
      }, ur.nextTick(F_, r.afterWriteTickInfo)) : uh(t, r, 1, n));
    }
    function F_(_ref19) {
      var t = _ref19.stream, e = _ref19.state, r = _ref19.count, i = _ref19.cb;
      return e.afterWriteTickInfo = null, uh(t, e, r, i);
    }
    function uh(t, e, r, i) {
      for (!e.ending && !t.destroyed && e.length === 0 && e.needDrain && (e.needDrain = false, t.emit("drain")); r-- > 0; )
        e.pendingcb--, i();
      e.destroyed && ao(e), uo(t, e);
    }
    function ao(t) {
      if (t.writing)
        return;
      for (var n = t.bufferedIndex; n < t.buffered.length; ++n) {
        var e;
        var _t$buffered$n = t.buffered[n], o = _t$buffered$n.chunk, s = _t$buffered$n.callback, a = t.objectMode ? 1 : o.length;
        t.length -= a, s((e = t.errored) !== null && e !== void 0 ? e : new gi("write"));
      }
      var r = t[Fr].splice(0);
      for (var _n2 = 0; _n2 < r.length; _n2++) {
        var i;
        r[_n2]((i = t.errored) !== null && i !== void 0 ? i : new gi("end"));
      }
      pn(t);
    }
    function lo(t, e) {
      if (e.corked || e.bufferProcessing || e.destroyed || !e.constructed)
        return;
      var r = e.buffered, i = e.bufferedIndex, n = e.objectMode, o = r.length - i;
      if (!o)
        return;
      var s = i;
      if (e.bufferProcessing = true, o > 1 && t._writev) {
        e.pendingcb -= o - 1;
        var a = e.allNoop ? oo : function(c2) {
          for (var h2 = s; h2 < r.length; ++h2)
            r[h2].callback(c2);
        }, u = e.allNoop && s === 0 ? r : rh(r, s);
        u.allBuffers = e.allBuffers, eh(t, e, true, e.length, u, "", a), pn(e);
      } else {
        do {
          var _r$s = r[s], _a3 = _r$s.chunk, _u9 = _r$s.encoding, c = _r$s.callback;
          r[s++] = null;
          var h = n ? 1 : _a3.length;
          eh(t, e, false, h, _a3, _u9, c);
        } while (s < r.length && !e.writing);
        s === r.length ? pn(e) : s > 256 ? (r.splice(0, s), e.bufferedIndex = 0) : e.bufferedIndex = s;
      }
      e.bufferProcessing = false;
    }
    ie.prototype._write = function(t, e, r) {
      if (this._writev)
        this._writev([{
          chunk: t,
          encoding: e
        }], r);
      else
        throw new M_("_write()");
    };
    ie.prototype._writev = null;
    ie.prototype.end = function(t, e, r) {
      var i = this._writableState;
      typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null);
      var n;
      if (t != null) {
        var o = lh(this, t, e);
        o instanceof A_ && (n = o);
      }
      return i.corked && (i.corked = 1, this.uncork()), n || (!i.errored && !i.ending ? (i.ending = true, uo(this, i, true), i.ended = true) : i.finished ? n = new U_("end") : i.destroyed && (n = new gi("end"))), typeof r == "function" && (n || i.finished ? ur.nextTick(r, n) : i[Fr].push(r)), this;
    };
    function dn(t) {
      return t.ending && !t.destroyed && t.constructed && t.length === 0 && !t.errored && t.buffered.length === 0 && !t.finished && !t.writing && !t.errorEmitted && !t.closeEmitted;
    }
    function W_(t, e) {
      var r = false;
      function i(n) {
        if (r) {
          jr(t, n !== null && n !== void 0 ? n : oh());
          return;
        }
        if (r = true, e.pendingcb--, n) {
          var o = e[Fr].splice(0);
          for (var s = 0; s < o.length; s++)
            o[s](n);
          jr(t, n, e.sync);
        } else
          dn(e) && (e.prefinished = true, t.emit("prefinish"), e.pendingcb++, ur.nextTick(so, t, e));
      }
      e.sync = true, e.pendingcb++;
      try {
        t._final(i);
      } catch (n) {
        i(n);
      }
      e.sync = false;
    }
    function $_(t, e) {
      !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.finalCalled = true, W_(t, e)) : (e.prefinished = true, t.emit("prefinish")));
    }
    function uo(t, e, r) {
      dn(e) && ($_(t, e), e.pendingcb === 0 && (r ? (e.pendingcb++, ur.nextTick(function(i, n) {
        dn(n) ? so(i, n) : n.pendingcb--;
      }, t, e)) : dn(e) && (e.pendingcb++, so(t, e))));
    }
    function so(t, e) {
      e.pendingcb--, e.finished = true;
      var r = e[Fr].splice(0);
      for (var i = 0; i < r.length; i++)
        r[i]();
      if (t.emit("finish"), e.autoDestroy) {
        var _i5 = t._readableState;
        (!_i5 || _i5.autoDestroy && (_i5.endEmitted || _i5.readable === false)) && t.destroy();
      }
    }
    I_(ie.prototype, {
      closed: {
        __proto__: null,
        get: function get() {
          return this._writableState ? this._writableState.closed : false;
        }
      },
      destroyed: {
        __proto__: null,
        get: function get() {
          return this._writableState ? this._writableState.destroyed : false;
        },
        set: function set(t) {
          this._writableState && (this._writableState.destroyed = t);
        }
      },
      writable: {
        __proto__: null,
        get: function get() {
          var t = this._writableState;
          return !!t && t.writable !== false && !t.destroyed && !t.errored && !t.ending && !t.ended;
        },
        set: function set(t) {
          this._writableState && (this._writableState.writable = !!t);
        }
      },
      writableFinished: {
        __proto__: null,
        get: function get() {
          return this._writableState ? this._writableState.finished : false;
        }
      },
      writableObjectMode: {
        __proto__: null,
        get: function get() {
          return this._writableState ? this._writableState.objectMode : false;
        }
      },
      writableBuffer: {
        __proto__: null,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      },
      writableEnded: {
        __proto__: null,
        get: function get() {
          return this._writableState ? this._writableState.ending : false;
        }
      },
      writableNeedDrain: {
        __proto__: null,
        get: function get() {
          var t = this._writableState;
          return t ? !t.destroyed && !t.ending && t.needDrain : false;
        }
      },
      writableHighWaterMark: {
        __proto__: null,
        get: function get() {
          return this._writableState && this._writableState.highWaterMark;
        }
      },
      writableCorked: {
        __proto__: null,
        get: function get() {
          return this._writableState ? this._writableState.corked : 0;
        }
      },
      writableLength: {
        __proto__: null,
        get: function get() {
          return this._writableState && this._writableState.length;
        }
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return this._writableState ? this._writableState.errored : null;
        }
      },
      writableAborted: {
        __proto__: null,
        enumerable: false,
        get: function get() {
          return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
        }
      }
    });
    var H_ = gn.destroy;
    ie.prototype.destroy = function(t, e) {
      var r = this._writableState;
      return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[Fr].length) && ur.nextTick(ao, r), H_.call(this, t, e), this;
    };
    ie.prototype._undestroy = gn.undestroy;
    ie.prototype._destroy = function(t, e) {
      e(t);
    };
    ie.prototype[B_.captureRejectionSymbol] = function(t) {
      this.destroy(t);
    };
    var no;
    function fh() {
      return no === void 0 && (no = {}), no;
    }
    ie.fromWeb = function(t, e) {
      return fh().newStreamWritableFromWritableStream(t, e);
    };
    ie.toWeb = function(t) {
      return fh().newWritableStreamFromStreamWritable(t);
    };
  });
  var Sh = M(function(_R, Eh) {
    v();
    m();
    _();
    var co = Nt(), V_ = (ye(), X(_e)), _tt4 = tt(), z_ = _tt4.isReadable, K_ = _tt4.isWritable, hh = _tt4.isIterable, G_ = _tt4.isNodeStream, dh = _tt4.isReadableNodeStream, ph = _tt4.isWritableNodeStream, Q_ = _tt4.isDuplexNodeStream, gh = vt(), _Se6 = Se(), vh = _Se6.AbortError, _Se6$codes = _Se6.codes, Y_ = _Se6$codes.ERR_INVALID_ARG_TYPE, yh = _Se6$codes.ERR_INVALID_RETURN_VALUE, _tr = tr(), Wr = _tr.destroyer, J_ = nt(), X_ = di(), _Je5 = Je(), bh = _Je5.createDeferredPromise, wh = Js(), _h = globalThis.Blob || V_.Blob, Z_ = _typeof(_h) < "u" ? function(e) {
      return e instanceof _h;
    } : function(e) {
      return false;
    }, e0 = globalThis.AbortController || Hi().AbortController, _ce11 = ce(), mh = _ce11.FunctionPrototypeCall, fr = /* @__PURE__ */ function(_J_) {
      function fr2(e) {
        var _this7;
        _classCallCheck(this, fr2);
        _this7 = _callSuper(this, fr2, [e]), (e === null || e === void 0 ? void 0 : e.readable) === false && (_this7._readableState.readable = false, _this7._readableState.ended = true, _this7._readableState.endEmitted = true), (e === null || e === void 0 ? void 0 : e.writable) === false && (_this7._writableState.writable = false, _this7._writableState.ending = true, _this7._writableState.ended = true, _this7._writableState.finished = true);
        return _this7;
      }
      _inherits(fr2, _J_);
      return _createClass(fr2);
    }(J_);
    Eh.exports = function t(e, r) {
      if (Q_(e))
        return e;
      if (dh(e))
        return yn({
          readable: e
        });
      if (ph(e))
        return yn({
          writable: e
        });
      if (G_(e))
        return yn({
          writable: false,
          readable: false
        });
      if (typeof e == "function") {
        var _t2 = t0(e), n = _t2.value, o = _t2.write, s = _t2.final, a = _t2.destroy;
        if (hh(n))
          return wh(fr, n, {
            objectMode: true,
            write: o,
            final: s,
            destroy: a
          });
        var u = n === null || n === void 0 ? void 0 : n.then;
        if (typeof u == "function") {
          var c, h = mh(u, n, function(d) {
            if (d != null)
              throw new yh("nully", "body", d);
          }, function(d) {
            Wr(c, d);
          });
          return c = new fr({
            objectMode: true,
            readable: false,
            write: o,
            final: function final(d) {
              s(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee7() {
                return _regeneratorRuntime().wrap(function _callee7$(_context8) {
                  while (1)
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.prev = 0;
                        _context8.next = 3;
                        return h;
                      case 3:
                        co.nextTick(d, null);
                        _context8.next = 9;
                        break;
                      case 6:
                        _context8.prev = 6;
                        _context8.t0 = _context8["catch"](0);
                        co.nextTick(d, _context8.t0);
                      case 9:
                      case "end":
                        return _context8.stop();
                    }
                }, _callee7, null, [[0, 6]]);
              })));
            },
            destroy: a
          });
        }
        throw new yh("Iterable, AsyncIterable or AsyncFunction", r, n);
      }
      if (Z_(e))
        return t(e.arrayBuffer());
      if (hh(e))
        return wh(fr, e, {
          objectMode: true,
          writable: false
        });
      if (_typeof(e === null || e === void 0 ? void 0 : e.writable) == "object" || _typeof(e === null || e === void 0 ? void 0 : e.readable) == "object") {
        var _n3 = e != null && e.readable ? dh(e === null || e === void 0 ? void 0 : e.readable) ? e === null || e === void 0 ? void 0 : e.readable : t(e.readable) : void 0, _o2 = e != null && e.writable ? ph(e === null || e === void 0 ? void 0 : e.writable) ? e === null || e === void 0 ? void 0 : e.writable : t(e.writable) : void 0;
        return yn({
          readable: _n3,
          writable: _o2
        });
      }
      var i = e === null || e === void 0 ? void 0 : e.then;
      if (typeof i == "function") {
        var _n4;
        return mh(i, e, function(o2) {
          o2 != null && _n4.push(o2), _n4.push(null);
        }, function(o2) {
          Wr(_n4, o2);
        }), _n4 = new fr({
          objectMode: true,
          writable: false,
          read: function read() {
          }
        });
      }
      throw new Y_(r, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], e);
    };
    function t0(t) {
      var _bh = bh(), e = _bh.promise, r = _bh.resolve, i = new e0(), n = i.signal;
      return {
        value: t(_wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee8() {
          var _bh2, s, _yield$_awaitAsyncGen, a, u, c;
          return _regeneratorRuntime().wrap(function _callee8$(_context9) {
            while (1)
              switch (_context9.prev = _context9.next) {
                case 0:
                  s = e;
                  e = null;
                  _context9.next = 4;
                  return _awaitAsyncGenerator(s);
                case 4:
                  _yield$_awaitAsyncGen = _context9.sent;
                  a = _yield$_awaitAsyncGen.chunk;
                  u = _yield$_awaitAsyncGen.done;
                  c = _yield$_awaitAsyncGen.cb;
                  if (!(co.nextTick(c), u)) {
                    _context9.next = 10;
                    break;
                  }
                  return _context9.abrupt("return");
                case 10:
                  if (!n.aborted) {
                    _context9.next = 12;
                    break;
                  }
                  throw new vh(void 0, {
                    cause: n.reason
                  });
                case 12:
                  _bh2 = bh(), e = _bh2.promise, r = _bh2.resolve;
                  _context9.next = 15;
                  return a;
                case 15:
                  _context9.next = 0;
                  break;
                case 17:
                case "end":
                  return _context9.stop();
              }
          }, _callee8);
        }))(), {
          signal: n
        }),
        write: function write(s, a, u) {
          var c = r;
          r = null, c({
            chunk: s,
            done: false,
            cb: u
          });
        },
        final: function final(s) {
          var a = r;
          r = null, a({
            done: true,
            cb: s
          });
        },
        destroy: function destroy(s, a) {
          i.abort(), a(s);
        }
      };
    }
    function yn(t) {
      var e = t.readable && typeof t.readable.read != "function" ? X_.wrap(t.readable) : t.readable, r = t.writable, i = !!z_(e), n = !!K_(r), o, s, a, u, c;
      function h(d) {
        var g = u;
        u = null, g ? g(d) : d && c.destroy(d);
      }
      return c = new fr({
        readableObjectMode: !!(e != null && e.readableObjectMode),
        writableObjectMode: !!(r != null && r.writableObjectMode),
        readable: i,
        writable: n
      }), n && (gh(r, function(d) {
        n = false, d && Wr(e, d), h(d);
      }), c._write = function(d, g, y) {
        r.write(d, g) ? y() : o = y;
      }, c._final = function(d) {
        r.end(), s = d;
      }, r.on("drain", function() {
        if (o) {
          var d = o;
          o = null, d();
        }
      }), r.on("finish", function() {
        if (s) {
          var d = s;
          s = null, d();
        }
      })), i && (gh(e, function(d) {
        i = false, d && Wr(e, d), h(d);
      }), e.on("readable", function() {
        if (a) {
          var d = a;
          a = null, d();
        }
      }), e.on("end", function() {
        c.push(null);
      }), c._read = function() {
        for (; ; ) {
          var d = e.read();
          if (d === null) {
            a = c._read;
            return;
          }
          if (!c.push(d))
            return;
        }
      }), c._destroy = function(d, g) {
        !d && u !== null && (d = new vh()), a = null, o = null, s = null, u === null ? g(d) : (u = g, Wr(r, d), Wr(e, d));
      }, c;
    }
  });
  var nt = M(function(BR, Th) {
    v();
    m();
    _();
    var _ce12 = ce(), r0 = _ce12.ObjectDefineProperties, It = _ce12.ObjectGetOwnPropertyDescriptor, i0 = _ce12.ObjectKeys, Ah = _ce12.ObjectSetPrototypeOf;
    Th.exports = Ve;
    var go = di(), Ne = fo();
    Ah(Ve.prototype, go.prototype);
    Ah(Ve, go);
    {
      var t = i0(Ne.prototype);
      for (var e = 0; e < t.length; e++) {
        var _r4 = t[e];
        Ve.prototype[_r4] || (Ve.prototype[_r4] = Ne.prototype[_r4]);
      }
    }
    function Ve(t2) {
      if (!(this instanceof Ve))
        return new Ve(t2);
      go.call(this, t2), Ne.call(this, t2), t2 ? (this.allowHalfOpen = t2.allowHalfOpen !== false, t2.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), t2.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
    }
    r0(Ve.prototype, {
      writable: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writable")),
      writableHighWaterMark: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableHighWaterMark")),
      writableObjectMode: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableObjectMode")),
      writableBuffer: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableBuffer")),
      writableLength: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableLength")),
      writableFinished: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableFinished")),
      writableCorked: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableCorked")),
      writableEnded: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableEnded")),
      writableNeedDrain: _objectSpread2({
        __proto__: null
      }, It(Ne.prototype, "writableNeedDrain")),
      destroyed: {
        __proto__: null,
        get: function get() {
          return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(t2) {
          this._readableState && this._writableState && (this._readableState.destroyed = t2, this._writableState.destroyed = t2);
        }
      }
    });
    var ho;
    function Ih() {
      return ho === void 0 && (ho = {}), ho;
    }
    Ve.fromWeb = function(t2, e2) {
      return Ih().newStreamDuplexFromReadableWritablePair(t2, e2);
    };
    Ve.toWeb = function(t2) {
      return Ih().newReadableWritablePairFromDuplex(t2);
    };
    var po;
    Ve.from = function(t2) {
      return po || (po = Sh()), po(t2, "body");
    };
  });
  var wo = M(function(DR, Ch) {
    v();
    m();
    _();
    var _ce13 = ce(), Rh = _ce13.ObjectSetPrototypeOf, n0 = _ce13.Symbol;
    Ch.exports = Tt;
    var s0 = Se().codes.ERR_METHOD_NOT_IMPLEMENTED, bo = nt(), _sn3 = sn(), o0 = _sn3.getHighWaterMark;
    Rh(Tt.prototype, bo.prototype);
    Rh(Tt, bo);
    var bi = n0("kCallback");
    function Tt(t) {
      if (!(this instanceof Tt))
        return new Tt(t);
      var e = t ? o0(this, t, "readableHighWaterMark", true) : null;
      e === 0 && (t = _objectSpread2(_objectSpread2({}, t), {}, {
        highWaterMark: null,
        readableHighWaterMark: e,
        writableHighWaterMark: t.writableHighWaterMark || 0
      })), bo.call(this, t), this._readableState.sync = false, this[bi] = null, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", a0);
    }
    function yo(t) {
      var _this8 = this;
      typeof this._flush == "function" && !this.destroyed ? this._flush(function(e, r) {
        if (e) {
          t ? t(e) : _this8.destroy(e);
          return;
        }
        r != null && _this8.push(r), _this8.push(null), t && t();
      }) : (this.push(null), t && t());
    }
    function a0() {
      this._final !== yo && yo.call(this);
    }
    Tt.prototype._final = yo;
    Tt.prototype._transform = function(t, e, r) {
      throw new s0("_transform()");
    };
    Tt.prototype._write = function(t, e, r) {
      var _this9 = this;
      var i = this._readableState, n = this._writableState, o = i.length;
      this._transform(t, e, function(s, a) {
        if (s) {
          r(s);
          return;
        }
        a != null && _this9.push(a), n.ended || o === i.length || i.length < i.highWaterMark ? r() : _this9[bi] = r;
      });
    };
    Tt.prototype._read = function() {
      if (this[bi]) {
        var t = this[bi];
        this[bi] = null, t();
      }
    };
  });
  var mo = M(function(QR, Ph) {
    v();
    m();
    _();
    var _ce14 = ce(), Bh = _ce14.ObjectSetPrototypeOf;
    Ph.exports = $r;
    var _o = wo();
    Bh($r.prototype, _o.prototype);
    Bh($r, _o);
    function $r(t) {
      if (!(this instanceof $r))
        return new $r(t);
      _o.call(this, t);
    }
    $r.prototype._transform = function(t, e, r) {
      r(null, t);
    };
  });
  var mn = M(function(sC, Lh) {
    v();
    m();
    _();
    var wi = Nt(), _ce15 = ce(), l0 = _ce15.ArrayIsArray, u0 = _ce15.Promise, f0 = _ce15.SymbolAsyncIterator, _n = vt(), _Je6 = Je(), c0 = _Je6.once, h0 = tr(), Oh = nt(), _Se7 = Se(), d0 = _Se7.aggregateTwoErrors, _Se7$codes = _Se7.codes, Co = _Se7$codes.ERR_INVALID_ARG_TYPE, vo = _Se7$codes.ERR_INVALID_RETURN_VALUE, p0 = _Se7$codes.ERR_MISSING_ARGS, g0 = _Se7$codes.ERR_STREAM_DESTROYED, y0 = _Se7$codes.ERR_STREAM_PREMATURE_CLOSE, b0 = _Se7.AbortError, _fi3 = fi(), w0 = _fi3.validateFunction, _0 = _fi3.validateAbortSignal, _tt5 = tt(), cr = _tt5.isIterable, Eo = _tt5.isReadable, wn = _tt5.isReadableNodeStream, kh = _tt5.isNodeStream, Hr = _tt5.isTransformStream, m0 = _tt5.isWebStream, So = _tt5.isReadableStream, v0 = _tt5.isReadableEnded, E0 = globalThis.AbortController || Hi().AbortController, Ao, Io;
    function xh(t, e, r) {
      var i = false;
      t.on("close", function() {
        i = true;
      });
      var n = _n(t, {
        readable: e,
        writable: r
      }, function(o) {
        i = !o;
      });
      return {
        destroy: function destroy(o) {
          i || (i = true, h0.destroyer(t, o || new g0("pipe")));
        },
        cleanup: n
      };
    }
    function S0(t) {
      return w0(t[t.length - 1], "streams[stream.length - 1]"), t.pop();
    }
    function To(t) {
      if (cr(t))
        return t;
      if (wn(t))
        return A0(t);
      throw new Co("val", ["Readable", "Iterable", "AsyncIterable"], t);
    }
    function A0(_x3) {
      return _A.apply(this, arguments);
    }
    function _A() {
      _A = _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee9(t) {
        return _regeneratorRuntime().wrap(function _callee9$(_context10) {
          while (1)
            switch (_context10.prev = _context10.next) {
              case 0:
                Io || (Io = di());
                return _context10.delegateYield(_asyncGeneratorDelegate(_asyncIterator(Io.prototype[f0].call(t))), "t0", 2);
              case 2:
              case "end":
                return _context10.stop();
            }
        }, _callee9);
      }));
      return _A.apply(this, arguments);
    }
    function bn(_x5, _x6, _x7, _x8) {
      return _bn.apply(this, arguments);
    }
    function _bn() {
      _bn = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee10(t, e, r, _ref21) {
        var i, n, o, s, a, u, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, c;
        return _regeneratorRuntime().wrap(function _callee10$(_context11) {
          while (1)
            switch (_context11.prev = _context11.next) {
              case 0:
                i = _ref21.end;
                o = null, s = function s2(c2) {
                  if (c2 && (n = c2), o) {
                    var h = o;
                    o = null, h();
                  }
                }, a = function a2() {
                  return new u0(function(c2, h) {
                    n ? h(n) : o = function o2() {
                      n ? h(n) : c2();
                    };
                  });
                };
                e.on("drain", s);
                u = _n(e, {
                  readable: false
                }, s);
                _context11.prev = 4;
                _context11.t0 = e.writableNeedDrain;
                if (!_context11.t0) {
                  _context11.next = 9;
                  break;
                }
                _context11.next = 9;
                return a();
              case 9:
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context11.prev = 11;
                _iterator = _asyncIterator(t);
              case 13:
                _context11.next = 15;
                return _iterator.next();
              case 15:
                if (!(_iteratorAbruptCompletion = !(_step = _context11.sent).done)) {
                  _context11.next = 24;
                  break;
                }
                c = _step.value;
                _context11.t1 = e.write(c);
                if (_context11.t1) {
                  _context11.next = 21;
                  break;
                }
                _context11.next = 21;
                return a();
              case 21:
                _iteratorAbruptCompletion = false;
                _context11.next = 13;
                break;
              case 24:
                _context11.next = 30;
                break;
              case 26:
                _context11.prev = 26;
                _context11.t2 = _context11["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context11.t2;
              case 30:
                _context11.prev = 30;
                _context11.prev = 31;
                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context11.next = 35;
                  break;
                }
                _context11.next = 35;
                return _iterator.return();
              case 35:
                _context11.prev = 35;
                if (!_didIteratorError) {
                  _context11.next = 38;
                  break;
                }
                throw _iteratorError;
              case 38:
                return _context11.finish(35);
              case 39:
                return _context11.finish(30);
              case 40:
                i && e.end();
                _context11.next = 43;
                return a();
              case 43:
                r();
                _context11.next = 49;
                break;
              case 46:
                _context11.prev = 46;
                _context11.t3 = _context11["catch"](4);
                r(n !== _context11.t3 ? d0(n, _context11.t3) : _context11.t3);
              case 49:
                _context11.prev = 49;
                u(), e.off("drain", s);
                return _context11.finish(49);
              case 52:
              case "end":
                return _context11.stop();
            }
        }, _callee10, null, [[4, 46, 49, 52], [11, 26, 30, 40], [31, , 35, 39]]);
      }));
      return _bn.apply(this, arguments);
    }
    function Ro(_x9, _x10, _x11, _x12) {
      return _Ro.apply(this, arguments);
    }
    function _Ro() {
      _Ro = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee11(t, e, r, _ref22) {
        var i, n, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _o3;
        return _regeneratorRuntime().wrap(function _callee11$(_context12) {
          while (1)
            switch (_context12.prev = _context12.next) {
              case 0:
                i = _ref22.end;
                Hr(e) && (e = e.writable);
                n = e.getWriter();
                _context12.prev = 3;
                _iteratorAbruptCompletion2 = false;
                _didIteratorError2 = false;
                _context12.prev = 6;
                _iterator2 = _asyncIterator(t);
              case 8:
                _context12.next = 10;
                return _iterator2.next();
              case 10:
                if (!(_iteratorAbruptCompletion2 = !(_step2 = _context12.sent).done)) {
                  _context12.next = 18;
                  break;
                }
                _o3 = _step2.value;
                _context12.next = 14;
                return n.ready;
              case 14:
                n.write(_o3).catch(function() {
                });
              case 15:
                _iteratorAbruptCompletion2 = false;
                _context12.next = 8;
                break;
              case 18:
                _context12.next = 24;
                break;
              case 20:
                _context12.prev = 20;
                _context12.t0 = _context12["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context12.t0;
              case 24:
                _context12.prev = 24;
                _context12.prev = 25;
                if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                  _context12.next = 29;
                  break;
                }
                _context12.next = 29;
                return _iterator2.return();
              case 29:
                _context12.prev = 29;
                if (!_didIteratorError2) {
                  _context12.next = 32;
                  break;
                }
                throw _iteratorError2;
              case 32:
                return _context12.finish(29);
              case 33:
                return _context12.finish(24);
              case 34:
                _context12.next = 36;
                return n.ready;
              case 36:
                _context12.t1 = i;
                if (!_context12.t1) {
                  _context12.next = 40;
                  break;
                }
                _context12.next = 40;
                return n.close();
              case 40:
                r();
                _context12.next = 54;
                break;
              case 43:
                _context12.prev = 43;
                _context12.t2 = _context12["catch"](3);
                _context12.prev = 45;
                _context12.next = 48;
                return n.abort(_context12.t2);
              case 48:
                r(_context12.t2);
                _context12.next = 54;
                break;
              case 51:
                _context12.prev = 51;
                _context12.t3 = _context12["catch"](45);
                r(_context12.t3);
              case 54:
              case "end":
                return _context12.stop();
            }
        }, _callee11, null, [[3, 43], [6, 20, 24, 34], [25, , 29, 33], [45, 51]]);
      }));
      return _Ro.apply(this, arguments);
    }
    function I0() {
      for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        t[_key13] = arguments[_key13];
      }
      return Mh(t, c0(S0(t)));
    }
    function Mh(t, e, r) {
      if (t.length === 1 && l0(t[0]) && (t = t[0]), t.length < 2)
        throw new p0("streams");
      var i = new E0(), n = i.signal, o = r === null || r === void 0 ? void 0 : r.signal, s = [];
      _0(o, "options.signal");
      function a() {
        y(new b0());
      }
      o === null || o === void 0 || o.addEventListener("abort", a);
      var u, c, h = [], d = 0;
      function g(C2) {
        y(C2, --d === 0);
      }
      function y(C2, R) {
        if (C2 && (!u || u.code === "ERR_STREAM_PREMATURE_CLOSE") && (u = C2), !(!u && !R)) {
          for (; h.length; )
            h.shift()(u);
          o !== null && o !== void 0 && o.removeEventListener("abort", a), i.abort(), R && (u || s.forEach(function(U) {
            return U();
          }), wi.nextTick(e, u, c));
        }
      }
      var w;
      var _loop2 = function _loop22() {
        var R = t[C], U = C < t.length - 1, N = C > 0, W = U || (r === null || r === void 0 ? void 0 : r.end) !== false, K = C === t.length - 1;
        if (kh(R)) {
          var z = function z2(Q2) {
            Q2 && Q2.name !== "AbortError" && Q2.code !== "ERR_STREAM_PREMATURE_CLOSE" && g(Q2);
          };
          if (W) {
            var _xh = xh(R, U, N), Q = _xh.destroy, de = _xh.cleanup;
            h.push(Q), Eo(R) && K && s.push(de);
          }
          R.on("error", z), Eo(R) && K && s.push(function() {
            R.removeListener("error", z);
          });
        }
        if (C === 0) {
          if (typeof R == "function") {
            if (w = R({
              signal: n
            }), !cr(w))
              throw new vo("Iterable, AsyncIterable or Stream", "source", w);
          } else
            cr(R) || wn(R) || Hr(R) ? w = R : w = Oh.from(R);
        } else if (typeof R == "function") {
          if (Hr(w)) {
            w = To((E = w) === null || E === void 0 ? void 0 : E.readable);
          } else
            w = To(w);
          if (w = R(w, {
            signal: n
          }), U) {
            if (!cr(w, true))
              throw new vo("AsyncIterable", "transform[".concat(C - 1, "]"), w);
          } else {
            Ao || (Ao = mo());
            var _z = new Ao({
              objectMode: true
            }), _Q = (S = w) === null || S === void 0 ? void 0 : S.then;
            if (typeof _Q == "function")
              d++, _Q.call(w, function(pe2) {
                c = pe2, pe2 != null && _z.write(pe2), W && _z.end(), wi.nextTick(g);
              }, function(pe2) {
                _z.destroy(pe2), wi.nextTick(g, pe2);
              });
            else if (cr(w, true))
              d++, bn(w, _z, g, {
                end: W
              });
            else if (So(w) || Hr(w)) {
              var pe = w.readable || w;
              d++, bn(pe, _z, g, {
                end: W
              });
            } else
              throw new vo("AsyncIterable or Promise", "destination", w);
            w = _z;
            var _xh2 = xh(w, false, true), _de = _xh2.destroy, Gt = _xh2.cleanup;
            h.push(_de), K && s.push(Gt);
          }
        } else if (kh(R)) {
          if (wn(w)) {
            d += 2;
            var _z2 = T0(w, R, g, {
              end: W
            });
            Eo(R) && K && s.push(_z2);
          } else if (Hr(w) || So(w)) {
            var _z3 = w.readable || w;
            d++, bn(_z3, R, g, {
              end: W
            });
          } else if (cr(w))
            d++, bn(w, R, g, {
              end: W
            });
          else
            throw new Co("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], w);
          w = R;
        } else if (m0(R)) {
          if (wn(w))
            d++, Ro(To(w), R, g, {
              end: W
            });
          else if (So(w) || cr(w))
            d++, Ro(w, R, g, {
              end: W
            });
          else if (Hr(w))
            d++, Ro(w.readable, R, g, {
              end: W
            });
          else
            throw new Co("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], w);
          w = R;
        } else
          w = Oh.from(R);
      }, E, S;
      for (var C = 0; C < t.length; C++) {
        _loop2();
      }
      return (n != null && n.aborted || o != null && o.aborted) && wi.nextTick(a), w;
    }
    function T0(t, e, r, _ref23) {
      var i = _ref23.end;
      var n = false;
      if (e.on("close", function() {
        n || r(new y0());
      }), t.pipe(e, {
        end: false
      }), i) {
        var s = function s2() {
          n = true, e.end();
        };
        v0(t) ? wi.nextTick(s) : t.once("end", s);
      } else
        r();
      return _n(t, {
        readable: true,
        writable: false
      }, function(s2) {
        var a = t._readableState;
        s2 && s2.code === "ERR_STREAM_PREMATURE_CLOSE" && a && a.ended && !a.errored && !a.errorEmitted ? t.once("end", r).once("error", r) : r(s2);
      }), _n(e, {
        readable: false,
        writable: true
      }, r);
    }
    Lh.exports = {
      pipelineImpl: Mh,
      pipeline: I0
    };
  });
  var Po = M(function(gC, Fh) {
    v();
    m();
    _();
    var _mn = mn(), R0 = _mn.pipeline, vn = nt(), _tr2 = tr(), C0 = _tr2.destroyer, _tt6 = tt(), En = _tt6.isNodeStream, Uh = _tt6.isReadable, Nh = _tt6.isWritable, Bo = _tt6.isWebStream, hr = _tt6.isTransformStream, qh = _tt6.isWritableStream, Dh = _tt6.isReadableStream, _Se8 = Se(), B0 = _Se8.AbortError, _Se8$codes = _Se8.codes, jh = _Se8$codes.ERR_INVALID_ARG_VALUE, P0 = _Se8$codes.ERR_MISSING_ARGS, O0 = vt();
    Fh.exports = function() {
      for (var _len14 = arguments.length, e = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        e[_key14] = arguments[_key14];
      }
      if (e.length === 0)
        throw new P0("streams");
      if (e.length === 1)
        return vn.from(e[0]);
      var r = [].concat(e);
      if (typeof e[0] == "function" && (e[0] = vn.from(e[0])), typeof e[e.length - 1] == "function") {
        var y = e.length - 1;
        e[y] = vn.from(e[y]);
      }
      for (var _y2 = 0; _y2 < e.length; ++_y2)
        if (!(!En(e[_y2]) && !Bo(e[_y2]))) {
          if (_y2 < e.length - 1 && !(Uh(e[_y2]) || Dh(e[_y2]) || hr(e[_y2])))
            throw new jh("streams[".concat(_y2, "]"), r[_y2], "must be readable");
          if (_y2 > 0 && !(Nh(e[_y2]) || qh(e[_y2]) || hr(e[_y2])))
            throw new jh("streams[".concat(_y2, "]"), r[_y2], "must be writable");
        }
      var i, n, o, s, a;
      function u(y2) {
        var w2 = s;
        s = null, w2 ? w2(y2) : y2 ? a.destroy(y2) : !g && !d && a.destroy();
      }
      var c = e[0], h = R0(e, u), d = !!(Nh(c) || qh(c) || hr(c)), g = !!(Uh(h) || Dh(h) || hr(h));
      if (a = new vn({
        writableObjectMode: !!(c != null && c.writableObjectMode),
        readableObjectMode: !!(h != null && h.writableObjectMode),
        writable: d,
        readable: g
      }), d) {
        if (En(c))
          a._write = function(w2, E, S) {
            c.write(w2, E) ? S() : i = S;
          }, a._final = function(w2) {
            c.end(), n = w2;
          }, c.on("drain", function() {
            if (i) {
              var w2 = i;
              i = null, w2();
            }
          });
        else if (Bo(c)) {
          var _E2 = (hr(c) ? c.writable : c).getWriter();
          a._write = /* @__PURE__ */ function() {
            var _ref24 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee12(S, I, C) {
              return _regeneratorRuntime().wrap(function _callee12$(_context13) {
                while (1)
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      _context13.next = 3;
                      return _E2.ready;
                    case 3:
                      _E2.write(S).catch(function() {
                      });
                      C();
                      _context13.next = 10;
                      break;
                    case 7:
                      _context13.prev = 7;
                      _context13.t0 = _context13["catch"](0);
                      C(_context13.t0);
                    case 10:
                    case "end":
                      return _context13.stop();
                  }
              }, _callee12, null, [[0, 7]]);
            }));
            return function(_x13, _x14, _x15) {
              return _ref24.apply(this, arguments);
            };
          }(), a._final = /* @__PURE__ */ function() {
            var _ref25 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee13(S) {
              return _regeneratorRuntime().wrap(function _callee13$(_context14) {
                while (1)
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return _E2.ready;
                    case 3:
                      _E2.close().catch(function() {
                      });
                      n = S;
                      _context14.next = 10;
                      break;
                    case 7:
                      _context14.prev = 7;
                      _context14.t0 = _context14["catch"](0);
                      S(_context14.t0);
                    case 10:
                    case "end":
                      return _context14.stop();
                  }
              }, _callee13, null, [[0, 7]]);
            }));
            return function(_x16) {
              return _ref25.apply(this, arguments);
            };
          }();
        }
        var _y3 = hr(h) ? h.readable : h;
        O0(_y3, function() {
          if (n) {
            var w2 = n;
            n = null, w2();
          }
        });
      }
      if (g) {
        if (En(h))
          h.on("readable", function() {
            if (o) {
              var _y4 = o;
              o = null, _y4();
            }
          }), h.on("end", function() {
            a.push(null);
          }), a._read = function() {
            for (; ; ) {
              var _y5 = h.read();
              if (_y5 === null) {
                o = a._read;
                return;
              }
              if (!a.push(_y5))
                return;
            }
          };
        else if (Bo(h)) {
          var w = (hr(h) ? h.readable : h).getReader();
          a._read = /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee14() {
            var _yield$w$read, _E3, _S2;
            return _regeneratorRuntime().wrap(function _callee14$(_context15) {
              while (1)
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    _context15.next = 3;
                    return w.read();
                  case 3:
                    _yield$w$read = _context15.sent;
                    _E3 = _yield$w$read.value;
                    _S2 = _yield$w$read.done;
                    if (a.push(_E3)) {
                      _context15.next = 8;
                      break;
                    }
                    return _context15.abrupt("return");
                  case 8:
                    if (!_S2) {
                      _context15.next = 11;
                      break;
                    }
                    a.push(null);
                    return _context15.abrupt("return");
                  case 11:
                    _context15.next = 16;
                    break;
                  case 13:
                    _context15.prev = 13;
                    _context15.t0 = _context15["catch"](0);
                    return _context15.abrupt("return");
                  case 16:
                    _context15.next = 0;
                    break;
                  case 18:
                  case "end":
                    return _context15.stop();
                }
            }, _callee14, null, [[0, 13]]);
          }));
        }
      }
      return a._destroy = function(y2, w2) {
        !y2 && s !== null && (y2 = new B0()), o = null, i = null, n = null, s === null ? w2(y2) : (s = w2, En(h) && C0(h, y2));
      }, a;
    };
  });
  var Qh = M(function(IC, xo) {
    v();
    m();
    _();
    var Vh = globalThis.AbortController || Hi().AbortController, _Se9 = Se(), _Se9$codes = _Se9.codes, k0 = _Se9$codes.ERR_INVALID_ARG_VALUE, _i = _Se9$codes.ERR_INVALID_ARG_TYPE, x0 = _Se9$codes.ERR_MISSING_ARGS, M0 = _Se9$codes.ERR_OUT_OF_RANGE, st = _Se9.AbortError, _fi4 = fi(), dr = _fi4.validateAbortSignal, L0 = _fi4.validateInteger, pr = _fi4.validateObject, U0 = ce().Symbol("kWeak"), _vt = vt(), N0 = _vt.finished, q0 = Po(), _ci3 = ci(), D0 = _ci3.addAbortSignalNoValidate, _tt7 = tt(), j0 = _tt7.isWritable, F0 = _tt7.isNodeStream, _ce16 = ce(), W0 = _ce16.ArrayPrototypePush, $0 = _ce16.MathFloor, H0 = _ce16.Number, V0 = _ce16.NumberIsNaN, Wh = _ce16.Promise, $h = _ce16.PromiseReject, z0 = _ce16.PromisePrototypeThen, zh = _ce16.Symbol, Sn = zh("kEmpty"), Hh = zh("kEof");
    function K0(t, e) {
      if (e != null && pr(e, "options"), (e === null || e === void 0 ? void 0 : e.signal) != null && dr(e.signal, "options.signal"), F0(t) && !j0(t))
        throw new k0("stream", t, "must be writable");
      var r = q0(this, t);
      return e != null && e.signal && D0(e.signal, r), r;
    }
    function An(t, e) {
      if (typeof t != "function")
        throw new _i("fn", ["Function", "AsyncFunction"], t);
      e != null && pr(e, "options"), (e === null || e === void 0 ? void 0 : e.signal) != null && dr(e.signal, "options.signal");
      var r = 1;
      return (e === null || e === void 0 ? void 0 : e.concurrency) != null && (r = $0(e.concurrency)), L0(r, "concurrency", 1), /* @__PURE__ */ _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee16() {
        var n, o, s, a, u, c, h, d, g, y, w, E, S, _S3, I;
        return _regeneratorRuntime().wrap(function _callee16$(_context17) {
          while (1)
            switch (_context17.prev = _context17.next) {
              case 0:
                _S3 = function _S5() {
                  _S3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee15() {
                    var _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, R, I2, U, C;
                    return _regeneratorRuntime().wrap(function _callee15$(_context16) {
                      while (1)
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            _context16.prev = 0;
                            _iteratorAbruptCompletion3 = false;
                            _didIteratorError3 = false;
                            _context16.prev = 3;
                            _iterator3 = _asyncIterator(a);
                          case 5:
                            _context16.next = 7;
                            return _iterator3.next();
                          case 7:
                            if (!(_iteratorAbruptCompletion3 = !(_step3 = _context16.sent).done)) {
                              _context16.next = 26;
                              break;
                            }
                            R = _step3.value;
                            if (!w) {
                              _context16.next = 11;
                              break;
                            }
                            return _context16.abrupt("return");
                          case 11:
                            if (!c.aborted) {
                              _context16.next = 13;
                              break;
                            }
                            throw new st();
                          case 13:
                            try {
                              R = t(R, h);
                            } catch (U2) {
                              R = $h(U2);
                            }
                            _context16.t0 = R !== Sn;
                            if (!_context16.t0) {
                              _context16.next = 23;
                              break;
                            }
                            typeof ((I2 = R) === null || I2 === void 0 ? void 0 : I2.catch) == "function" && R.catch(E);
                            u.push(R);
                            g && (g(), g = null);
                            _context16.t1 = !w && u.length && u.length >= r;
                            if (!_context16.t1) {
                              _context16.next = 23;
                              break;
                            }
                            _context16.next = 23;
                            return new Wh(function(U2) {
                              y = U2;
                            });
                          case 23:
                            _iteratorAbruptCompletion3 = false;
                            _context16.next = 5;
                            break;
                          case 26:
                            _context16.next = 32;
                            break;
                          case 28:
                            _context16.prev = 28;
                            _context16.t2 = _context16["catch"](3);
                            _didIteratorError3 = true;
                            _iteratorError3 = _context16.t2;
                          case 32:
                            _context16.prev = 32;
                            _context16.prev = 33;
                            if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {
                              _context16.next = 37;
                              break;
                            }
                            _context16.next = 37;
                            return _iterator3.return();
                          case 37:
                            _context16.prev = 37;
                            if (!_didIteratorError3) {
                              _context16.next = 40;
                              break;
                            }
                            throw _iteratorError3;
                          case 40:
                            return _context16.finish(37);
                          case 41:
                            return _context16.finish(32);
                          case 42:
                            u.push(Hh);
                            _context16.next = 49;
                            break;
                          case 45:
                            _context16.prev = 45;
                            _context16.t3 = _context16["catch"](0);
                            U = $h(_context16.t3);
                            z0(U, void 0, E), u.push(U);
                          case 49:
                            _context16.prev = 49;
                            w = true, g && (g(), g = null), e == null || (C = e.signal) === null || C === void 0 || C.removeEventListener("abort", d);
                            return _context16.finish(49);
                          case 52:
                          case "end":
                            return _context16.stop();
                        }
                    }, _callee15, null, [[0, 45, 49, 52], [3, 28, 32, 42], [33, , 37, 41]]);
                  }));
                  return _S3.apply(this, arguments);
                };
                S = function _S4() {
                  return _S3.apply(this, arguments);
                };
                E = function _E4() {
                  w = true;
                };
                s = new Vh(), a = this, u = [], c = s.signal, h = {
                  signal: c
                }, d = function d2() {
                  return s.abort();
                };
                e != null && (n = e.signal) !== null && n !== void 0 && n.aborted && d(), e == null || (o = e.signal) === null || o === void 0 || o.addEventListener("abort", d);
                w = false;
                S();
                _context17.prev = 7;
              case 8:
                if (!(u.length > 0)) {
                  _context17.next = 24;
                  break;
                }
                _context17.next = 11;
                return _awaitAsyncGenerator(u[0]);
              case 11:
                I = _context17.sent;
                if (!(I === Hh)) {
                  _context17.next = 14;
                  break;
                }
                return _context17.abrupt("return");
              case 14:
                if (!c.aborted) {
                  _context17.next = 16;
                  break;
                }
                throw new st();
              case 16:
                _context17.t0 = I !== Sn;
                if (!_context17.t0) {
                  _context17.next = 20;
                  break;
                }
                _context17.next = 20;
                return I;
              case 20:
                u.shift();
                y && (y(), y = null);
              case 22:
                _context17.next = 8;
                break;
              case 24:
                _context17.next = 26;
                return _awaitAsyncGenerator(new Wh(function(I2) {
                  g = I2;
                }));
              case 26:
                _context17.next = 8;
                break;
              case 28:
                _context17.prev = 28;
                s.abort(), w = true, y && (y(), y = null);
                return _context17.finish(28);
              case 31:
              case "end":
                return _context17.stop();
            }
        }, _callee16, this, [[7, , 28, 31]]);
      })).call(this);
    }
    function G0() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return t != null && pr(t, "options"), (t === null || t === void 0 ? void 0 : t.signal) != null && dr(t.signal, "options.signal"), /* @__PURE__ */ _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee17() {
        var r, _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _n5, i;
        return _regeneratorRuntime().wrap(function _callee17$(_context18) {
          while (1)
            switch (_context18.prev = _context18.next) {
              case 0:
                r = 0;
                _iteratorAbruptCompletion4 = false;
                _didIteratorError4 = false;
                _context18.prev = 3;
                _iterator4 = _asyncIterator(this);
              case 5:
                _context18.next = 7;
                return _awaitAsyncGenerator(_iterator4.next());
              case 7:
                if (!(_iteratorAbruptCompletion4 = !(_step4 = _context18.sent).done)) {
                  _context18.next = 16;
                  break;
                }
                _n5 = _step4.value;
                if (!(t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)) {
                  _context18.next = 11;
                  break;
                }
                throw new st({
                  cause: t.signal.reason
                });
              case 11:
                _context18.next = 13;
                return [r++, _n5];
              case 13:
                _iteratorAbruptCompletion4 = false;
                _context18.next = 5;
                break;
              case 16:
                _context18.next = 22;
                break;
              case 18:
                _context18.prev = 18;
                _context18.t0 = _context18["catch"](3);
                _didIteratorError4 = true;
                _iteratorError4 = _context18.t0;
              case 22:
                _context18.prev = 22;
                _context18.prev = 23;
                if (!(_iteratorAbruptCompletion4 && _iterator4.return != null)) {
                  _context18.next = 27;
                  break;
                }
                _context18.next = 27;
                return _awaitAsyncGenerator(_iterator4.return());
              case 27:
                _context18.prev = 27;
                if (!_didIteratorError4) {
                  _context18.next = 30;
                  break;
                }
                throw _iteratorError4;
              case 30:
                return _context18.finish(27);
              case 31:
                return _context18.finish(22);
              case 32:
              case "end":
                return _context18.stop();
            }
        }, _callee17, this, [[3, 18, 22, 32], [23, , 27, 31]]);
      })).call(this);
    }
    function Kh(_x17) {
      return _Kh.apply(this, arguments);
    }
    function _Kh() {
      _Kh = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee22(t) {
        var e, _iteratorAbruptCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _args23 = arguments;
        return _regeneratorRuntime().wrap(function _callee22$(_context23) {
          while (1)
            switch (_context23.prev = _context23.next) {
              case 0:
                e = _args23.length > 1 && _args23[1] !== void 0 ? _args23[1] : void 0;
                _iteratorAbruptCompletion5 = false;
                _didIteratorError5 = false;
                _context23.prev = 3;
                _iterator5 = _asyncIterator(ko.call(this, t, e));
              case 5:
                _context23.next = 7;
                return _iterator5.next();
              case 7:
                if (!(_iteratorAbruptCompletion5 = !(_step5 = _context23.sent).done)) {
                  _context23.next = 13;
                  break;
                }
                _step5.value;
                return _context23.abrupt("return", true);
              case 10:
                _iteratorAbruptCompletion5 = false;
                _context23.next = 5;
                break;
              case 13:
                _context23.next = 19;
                break;
              case 15:
                _context23.prev = 15;
                _context23.t0 = _context23["catch"](3);
                _didIteratorError5 = true;
                _iteratorError5 = _context23.t0;
              case 19:
                _context23.prev = 19;
                _context23.prev = 20;
                if (!(_iteratorAbruptCompletion5 && _iterator5.return != null)) {
                  _context23.next = 24;
                  break;
                }
                _context23.next = 24;
                return _iterator5.return();
              case 24:
                _context23.prev = 24;
                if (!_didIteratorError5) {
                  _context23.next = 27;
                  break;
                }
                throw _iteratorError5;
              case 27:
                return _context23.finish(24);
              case 28:
                return _context23.finish(19);
              case 29:
                return _context23.abrupt("return", false);
              case 30:
              case "end":
                return _context23.stop();
            }
        }, _callee22, this, [[3, 15, 19, 29], [20, , 24, 28]]);
      }));
      return _Kh.apply(this, arguments);
    }
    function Q0(_x18) {
      return _Q2.apply(this, arguments);
    }
    function _Q2() {
      _Q2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee24(t) {
        var e, _args25 = arguments;
        return _regeneratorRuntime().wrap(function _callee24$(_context25) {
          while (1)
            switch (_context25.prev = _context25.next) {
              case 0:
                e = _args25.length > 1 && _args25[1] !== void 0 ? _args25[1] : void 0;
                if (!(typeof t != "function")) {
                  _context25.next = 3;
                  break;
                }
                throw new _i("fn", ["Function", "AsyncFunction"], t);
              case 3:
                _context25.next = 5;
                return Kh.call(this, /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee23() {
                  var _args24 = arguments;
                  return _regeneratorRuntime().wrap(function _callee23$(_context24) {
                    while (1)
                      switch (_context24.prev = _context24.next) {
                        case 0:
                          _context24.next = 2;
                          return t.apply(void 0, _args24);
                        case 2:
                          return _context24.abrupt("return", !_context24.sent);
                        case 3:
                        case "end":
                          return _context24.stop();
                      }
                  }, _callee23);
                })), e);
              case 5:
                return _context25.abrupt("return", !_context25.sent);
              case 6:
              case "end":
                return _context25.stop();
            }
        }, _callee24, this);
      }));
      return _Q2.apply(this, arguments);
    }
    function Y0(_x19, _x20) {
      return _Y.apply(this, arguments);
    }
    function _Y() {
      _Y = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee25(t, e) {
        var _iteratorAbruptCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _r7;
        return _regeneratorRuntime().wrap(function _callee25$(_context26) {
          while (1)
            switch (_context26.prev = _context26.next) {
              case 0:
                _iteratorAbruptCompletion6 = false;
                _didIteratorError6 = false;
                _context26.prev = 2;
                _iterator6 = _asyncIterator(ko.call(this, t, e));
              case 4:
                _context26.next = 6;
                return _iterator6.next();
              case 6:
                if (!(_iteratorAbruptCompletion6 = !(_step6 = _context26.sent).done)) {
                  _context26.next = 12;
                  break;
                }
                _r7 = _step6.value;
                return _context26.abrupt("return", _r7);
              case 9:
                _iteratorAbruptCompletion6 = false;
                _context26.next = 4;
                break;
              case 12:
                _context26.next = 18;
                break;
              case 14:
                _context26.prev = 14;
                _context26.t0 = _context26["catch"](2);
                _didIteratorError6 = true;
                _iteratorError6 = _context26.t0;
              case 18:
                _context26.prev = 18;
                _context26.prev = 19;
                if (!(_iteratorAbruptCompletion6 && _iterator6.return != null)) {
                  _context26.next = 23;
                  break;
                }
                _context26.next = 23;
                return _iterator6.return();
              case 23:
                _context26.prev = 23;
                if (!_didIteratorError6) {
                  _context26.next = 26;
                  break;
                }
                throw _iteratorError6;
              case 26:
                return _context26.finish(23);
              case 27:
                return _context26.finish(18);
              case 28:
              case "end":
                return _context26.stop();
            }
        }, _callee25, this, [[2, 14, 18, 28], [19, , 23, 27]]);
      }));
      return _Y.apply(this, arguments);
    }
    function J0(_x21, _x22) {
      return _J.apply(this, arguments);
    }
    function _J() {
      _J = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee27(t, e) {
        var r, _r8, _iteratorAbruptCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7;
        return _regeneratorRuntime().wrap(function _callee27$(_context28) {
          while (1)
            switch (_context28.prev = _context28.next) {
              case 0:
                _r8 = function _r10() {
                  _r8 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee26(i, n) {
                    return _regeneratorRuntime().wrap(function _callee26$(_context27) {
                      while (1)
                        switch (_context27.prev = _context27.next) {
                          case 0:
                            _context27.next = 2;
                            return t(i, n);
                          case 2:
                            return _context27.abrupt("return", Sn);
                          case 3:
                          case "end":
                            return _context27.stop();
                        }
                    }, _callee26);
                  }));
                  return _r8.apply(this, arguments);
                };
                r = function _r9(_x30, _x31) {
                  return _r8.apply(this, arguments);
                };
                if (!(typeof t != "function")) {
                  _context28.next = 4;
                  break;
                }
                throw new _i("fn", ["Function", "AsyncFunction"], t);
              case 4:
                _iteratorAbruptCompletion7 = false;
                _didIteratorError7 = false;
                _context28.prev = 6;
                _iterator7 = _asyncIterator(An.call(this, r, e));
              case 8:
                _context28.next = 10;
                return _iterator7.next();
              case 10:
                if (!(_iteratorAbruptCompletion7 = !(_step7 = _context28.sent).done)) {
                  _context28.next = 16;
                  break;
                }
                _step7.value;
              case 13:
                _iteratorAbruptCompletion7 = false;
                _context28.next = 8;
                break;
              case 16:
                _context28.next = 22;
                break;
              case 18:
                _context28.prev = 18;
                _context28.t0 = _context28["catch"](6);
                _didIteratorError7 = true;
                _iteratorError7 = _context28.t0;
              case 22:
                _context28.prev = 22;
                _context28.prev = 23;
                if (!(_iteratorAbruptCompletion7 && _iterator7.return != null)) {
                  _context28.next = 27;
                  break;
                }
                _context28.next = 27;
                return _iterator7.return();
              case 27:
                _context28.prev = 27;
                if (!_didIteratorError7) {
                  _context28.next = 30;
                  break;
                }
                throw _iteratorError7;
              case 30:
                return _context28.finish(27);
              case 31:
                return _context28.finish(22);
              case 32:
              case "end":
                return _context28.stop();
            }
        }, _callee27, this, [[6, 18, 22, 32], [23, , 27, 31]]);
      }));
      return _J.apply(this, arguments);
    }
    function ko(t, e) {
      if (typeof t != "function")
        throw new _i("fn", ["Function", "AsyncFunction"], t);
      function r(_x23, _x24) {
        return _r5.apply(this, arguments);
      }
      function _r5() {
        _r5 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee18(i, n) {
          return _regeneratorRuntime().wrap(function _callee18$(_context19) {
            while (1)
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return t(i, n);
                case 2:
                  if (!_context19.sent) {
                    _context19.next = 6;
                    break;
                  }
                  _context19.t0 = i;
                  _context19.next = 7;
                  break;
                case 6:
                  _context19.t0 = Sn;
                case 7:
                  return _context19.abrupt("return", _context19.t0);
                case 8:
                case "end":
                  return _context19.stop();
              }
          }, _callee18);
        }));
        return _r5.apply(this, arguments);
      }
      return An.call(this, r, e);
    }
    var Oo = /* @__PURE__ */ function(_x25) {
      function Oo2() {
        var _this10;
        _classCallCheck(this, Oo2);
        _this10 = _callSuper(this, Oo2, ["reduce"]), _this10.message = "Reduce of an empty stream requires an initial value";
        return _this10;
      }
      _inherits(Oo2, _x25);
      return _createClass(Oo2);
    }(x0);
    function X0(_x26, _x27, _x28) {
      return _X.apply(this, arguments);
    }
    function _X() {
      _X = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee28(t, e, r) {
        var i, n, _c2, o, s, _c3, a, _iteratorAbruptCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _c5, u, _args29 = arguments;
        return _regeneratorRuntime().wrap(function _callee28$(_context29) {
          while (1)
            switch (_context29.prev = _context29.next) {
              case 0:
                if (!(typeof t != "function")) {
                  _context29.next = 2;
                  break;
                }
                throw new _i("reducer", ["Function", "AsyncFunction"], t);
              case 2:
                r != null && pr(r, "options"), (r === null || r === void 0 ? void 0 : r.signal) != null && dr(r.signal, "options.signal");
                n = _args29.length > 1;
                if (!(r != null && (i = r.signal) !== null && i !== void 0 && i.aborted)) {
                  _context29.next = 10;
                  break;
                }
                _c2 = new st(void 0, {
                  cause: r.signal.reason
                });
                this.once("error", function() {
                });
                _context29.next = 9;
                return N0(this.destroy(_c2));
              case 9:
                throw _c2;
              case 10:
                o = new Vh(), s = o.signal;
                if (r != null && r.signal) {
                  _c3 = _defineProperty({
                    once: true
                  }, U0, this);
                  r.signal.addEventListener("abort", function() {
                    return o.abort();
                  }, _c3);
                }
                a = false;
                _context29.prev = 13;
                _iteratorAbruptCompletion8 = false;
                _didIteratorError8 = false;
                _context29.prev = 16;
                _iterator8 = _asyncIterator(this);
              case 18:
                _context29.next = 20;
                return _iterator8.next();
              case 20:
                if (!(_iteratorAbruptCompletion8 = !(_step8 = _context29.sent).done)) {
                  _context29.next = 34;
                  break;
                }
                _c5 = _step8.value;
                if (!(a = true, r != null && (u = r.signal) !== null && u !== void 0 && u.aborted)) {
                  _context29.next = 24;
                  break;
                }
                throw new st();
              case 24:
                if (!n) {
                  _context29.next = 30;
                  break;
                }
                _context29.next = 27;
                return t(e, _c5, {
                  signal: s
                });
              case 27:
                e = _context29.sent;
                _context29.next = 31;
                break;
              case 30:
                e = _c5, n = true;
              case 31:
                _iteratorAbruptCompletion8 = false;
                _context29.next = 18;
                break;
              case 34:
                _context29.next = 40;
                break;
              case 36:
                _context29.prev = 36;
                _context29.t0 = _context29["catch"](16);
                _didIteratorError8 = true;
                _iteratorError8 = _context29.t0;
              case 40:
                _context29.prev = 40;
                _context29.prev = 41;
                if (!(_iteratorAbruptCompletion8 && _iterator8.return != null)) {
                  _context29.next = 45;
                  break;
                }
                _context29.next = 45;
                return _iterator8.return();
              case 45:
                _context29.prev = 45;
                if (!_didIteratorError8) {
                  _context29.next = 48;
                  break;
                }
                throw _iteratorError8;
              case 48:
                return _context29.finish(45);
              case 49:
                return _context29.finish(40);
              case 50:
                if (!(!a && !n)) {
                  _context29.next = 52;
                  break;
                }
                throw new Oo();
              case 52:
                _context29.prev = 52;
                o.abort();
                return _context29.finish(52);
              case 55:
                return _context29.abrupt("return", e);
              case 56:
              case "end":
                return _context29.stop();
            }
        }, _callee28, this, [[13, , 52, 55], [16, 36, 40, 50], [41, , 45, 49]]);
      }));
      return _X.apply(this, arguments);
    }
    function Z0(_x29) {
      return _Z.apply(this, arguments);
    }
    function _Z() {
      _Z = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee29(t) {
        var e, _iteratorAbruptCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, i, r;
        return _regeneratorRuntime().wrap(function _callee29$(_context30) {
          while (1)
            switch (_context30.prev = _context30.next) {
              case 0:
                t != null && pr(t, "options"), (t === null || t === void 0 ? void 0 : t.signal) != null && dr(t.signal, "options.signal");
                e = [];
                _iteratorAbruptCompletion9 = false;
                _didIteratorError9 = false;
                _context30.prev = 4;
                _iterator9 = _asyncIterator(this);
              case 6:
                _context30.next = 8;
                return _iterator9.next();
              case 8:
                if (!(_iteratorAbruptCompletion9 = !(_step9 = _context30.sent).done)) {
                  _context30.next = 16;
                  break;
                }
                i = _step9.value;
                if (!(t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)) {
                  _context30.next = 12;
                  break;
                }
                throw new st(void 0, {
                  cause: t.signal.reason
                });
              case 12:
                W0(e, i);
              case 13:
                _iteratorAbruptCompletion9 = false;
                _context30.next = 6;
                break;
              case 16:
                _context30.next = 22;
                break;
              case 18:
                _context30.prev = 18;
                _context30.t0 = _context30["catch"](4);
                _didIteratorError9 = true;
                _iteratorError9 = _context30.t0;
              case 22:
                _context30.prev = 22;
                _context30.prev = 23;
                if (!(_iteratorAbruptCompletion9 && _iterator9.return != null)) {
                  _context30.next = 27;
                  break;
                }
                _context30.next = 27;
                return _iterator9.return();
              case 27:
                _context30.prev = 27;
                if (!_didIteratorError9) {
                  _context30.next = 30;
                  break;
                }
                throw _iteratorError9;
              case 30:
                return _context30.finish(27);
              case 31:
                return _context30.finish(22);
              case 32:
                return _context30.abrupt("return", e);
              case 33:
              case "end":
                return _context30.stop();
            }
        }, _callee29, this, [[4, 18, 22, 32], [23, , 27, 31]]);
      }));
      return _Z.apply(this, arguments);
    }
    function em(t, e) {
      var r = An.call(this, t, e);
      return /* @__PURE__ */ _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee19() {
        var _iteratorAbruptCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _n6;
        return _regeneratorRuntime().wrap(function _callee19$(_context20) {
          while (1)
            switch (_context20.prev = _context20.next) {
              case 0:
                _iteratorAbruptCompletion10 = false;
                _didIteratorError10 = false;
                _context20.prev = 2;
                _iterator10 = _asyncIterator(r);
              case 4:
                _context20.next = 6;
                return _awaitAsyncGenerator(_iterator10.next());
              case 6:
                if (!(_iteratorAbruptCompletion10 = !(_step10 = _context20.sent).done)) {
                  _context20.next = 12;
                  break;
                }
                _n6 = _step10.value;
                return _context20.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_n6)), "t0", 9);
              case 9:
                _iteratorAbruptCompletion10 = false;
                _context20.next = 4;
                break;
              case 12:
                _context20.next = 18;
                break;
              case 14:
                _context20.prev = 14;
                _context20.t1 = _context20["catch"](2);
                _didIteratorError10 = true;
                _iteratorError10 = _context20.t1;
              case 18:
                _context20.prev = 18;
                _context20.prev = 19;
                if (!(_iteratorAbruptCompletion10 && _iterator10.return != null)) {
                  _context20.next = 23;
                  break;
                }
                _context20.next = 23;
                return _awaitAsyncGenerator(_iterator10.return());
              case 23:
                _context20.prev = 23;
                if (!_didIteratorError10) {
                  _context20.next = 26;
                  break;
                }
                throw _iteratorError10;
              case 26:
                return _context20.finish(23);
              case 27:
                return _context20.finish(18);
              case 28:
              case "end":
                return _context20.stop();
            }
        }, _callee19, null, [[2, 14, 18, 28], [19, , 23, 27]]);
      })).call(this);
    }
    function Gh(t) {
      if (t = H0(t), V0(t))
        return 0;
      if (t < 0)
        throw new M0("number", ">= 0", t);
      return t;
    }
    function tm(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
      return e != null && pr(e, "options"), (e === null || e === void 0 ? void 0 : e.signal) != null && dr(e.signal, "options.signal"), t = Gh(t), /* @__PURE__ */ _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee20() {
        var i, _iteratorAbruptCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _o4, n;
        return _regeneratorRuntime().wrap(function _callee20$(_context21) {
          while (1)
            switch (_context21.prev = _context21.next) {
              case 0:
                if (!(e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)) {
                  _context21.next = 2;
                  break;
                }
                throw new st();
              case 2:
                _iteratorAbruptCompletion11 = false;
                _didIteratorError11 = false;
                _context21.prev = 4;
                _iterator11 = _asyncIterator(this);
              case 6:
                _context21.next = 8;
                return _awaitAsyncGenerator(_iterator11.next());
              case 8:
                if (!(_iteratorAbruptCompletion11 = !(_step11 = _context21.sent).done)) {
                  _context21.next = 19;
                  break;
                }
                _o4 = _step11.value;
                if (!(e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)) {
                  _context21.next = 12;
                  break;
                }
                throw new st();
              case 12:
                _context21.t0 = t-- <= 0;
                if (!_context21.t0) {
                  _context21.next = 16;
                  break;
                }
                _context21.next = 16;
                return _o4;
              case 16:
                _iteratorAbruptCompletion11 = false;
                _context21.next = 6;
                break;
              case 19:
                _context21.next = 25;
                break;
              case 21:
                _context21.prev = 21;
                _context21.t1 = _context21["catch"](4);
                _didIteratorError11 = true;
                _iteratorError11 = _context21.t1;
              case 25:
                _context21.prev = 25;
                _context21.prev = 26;
                if (!(_iteratorAbruptCompletion11 && _iterator11.return != null)) {
                  _context21.next = 30;
                  break;
                }
                _context21.next = 30;
                return _awaitAsyncGenerator(_iterator11.return());
              case 30:
                _context21.prev = 30;
                if (!_didIteratorError11) {
                  _context21.next = 33;
                  break;
                }
                throw _iteratorError11;
              case 33:
                return _context21.finish(30);
              case 34:
                return _context21.finish(25);
              case 35:
              case "end":
                return _context21.stop();
            }
        }, _callee20, this, [[4, 21, 25, 35], [26, , 30, 34]]);
      })).call(this);
    }
    function rm(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
      return e != null && pr(e, "options"), (e === null || e === void 0 ? void 0 : e.signal) != null && dr(e.signal, "options.signal"), t = Gh(t), /* @__PURE__ */ _wrapAsyncGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee21() {
        var i, _iteratorAbruptCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _o5, n;
        return _regeneratorRuntime().wrap(function _callee21$(_context22) {
          while (1)
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!(e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)) {
                  _context22.next = 2;
                  break;
                }
                throw new st();
              case 2:
                _iteratorAbruptCompletion12 = false;
                _didIteratorError12 = false;
                _context22.prev = 4;
                _iterator12 = _asyncIterator(this);
              case 6:
                _context22.next = 8;
                return _awaitAsyncGenerator(_iterator12.next());
              case 8:
                if (!(_iteratorAbruptCompletion12 = !(_step12 = _context22.sent).done)) {
                  _context22.next = 21;
                  break;
                }
                _o5 = _step12.value;
                if (!(e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)) {
                  _context22.next = 12;
                  break;
                }
                throw new st();
              case 12:
                if (!(t-- > 0)) {
                  _context22.next = 17;
                  break;
                }
                _context22.next = 15;
                return _o5;
              case 15:
                _context22.next = 18;
                break;
              case 17:
                return _context22.abrupt("return");
              case 18:
                _iteratorAbruptCompletion12 = false;
                _context22.next = 6;
                break;
              case 21:
                _context22.next = 27;
                break;
              case 23:
                _context22.prev = 23;
                _context22.t0 = _context22["catch"](4);
                _didIteratorError12 = true;
                _iteratorError12 = _context22.t0;
              case 27:
                _context22.prev = 27;
                _context22.prev = 28;
                if (!(_iteratorAbruptCompletion12 && _iterator12.return != null)) {
                  _context22.next = 32;
                  break;
                }
                _context22.next = 32;
                return _awaitAsyncGenerator(_iterator12.return());
              case 32:
                _context22.prev = 32;
                if (!_didIteratorError12) {
                  _context22.next = 35;
                  break;
                }
                throw _iteratorError12;
              case 35:
                return _context22.finish(32);
              case 36:
                return _context22.finish(27);
              case 37:
              case "end":
                return _context22.stop();
            }
        }, _callee21, this, [[4, 23, 27, 37], [28, , 32, 36]]);
      })).call(this);
    }
    xo.exports.streamReturningOperators = {
      asIndexedPairs: G0,
      drop: tm,
      filter: ko,
      flatMap: em,
      map: An,
      take: rm,
      compose: K0
    };
    xo.exports.promiseReturningOperators = {
      every: Q0,
      forEach: J0,
      reduce: X0,
      toArray: Z0,
      some: Kh,
      find: Y0
    };
  });
  var Mo = M(function(LC, Yh) {
    v();
    m();
    _();
    var _ce17 = ce(), im = _ce17.ArrayPrototypePop, nm = _ce17.Promise, _tt8 = tt(), sm = _tt8.isIterable, om = _tt8.isNodeStream, am = _tt8.isWebStream, _mn2 = mn(), lm = _mn2.pipelineImpl, _vt2 = vt(), um = _vt2.finished;
    Lo();
    function fm() {
      for (var _len15 = arguments.length, t = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        t[_key15] = arguments[_key15];
      }
      return new nm(function(e, r) {
        var i, n, o = t[t.length - 1];
        if (o && _typeof(o) == "object" && !om(o) && !sm(o) && !am(o)) {
          var _s3 = im(t);
          i = _s3.signal, n = _s3.end;
        }
        lm(t, function(s, a) {
          s ? r(s) : e(a);
        }, {
          signal: i,
          end: n
        });
      });
    }
    Yh.exports = {
      finished: um,
      pipeline: fm
    };
  });
  var Lo = M(function(VC, sd) {
    v();
    m();
    _();
    var _ref28 = (ye(), X(_e)), cm = _ref28.Buffer, _ce18 = ce(), Rt = _ce18.ObjectDefineProperty, Zh = _ce18.ObjectKeys, ed = _ce18.ReflectApply, _Je7 = Je(), td = _Je7.promisify.custom, _Qh = Qh(), Jh = _Qh.streamReturningOperators, Xh = _Qh.promiseReturningOperators, _Se10 = Se(), rd = _Se10.codes.ERR_ILLEGAL_CONSTRUCTOR, hm = Po(), _mn3 = mn(), id = _mn3.pipeline, _tr3 = tr(), dm = _tr3.destroyer, nd = vt(), Uo = Mo(), No = tt(), le = sd.exports = tn().Stream;
    le.isDisturbed = No.isDisturbed;
    le.isErrored = No.isErrored;
    le.isReadable = No.isReadable;
    le.Readable = di();
    var _iterator16 = _createForOfIteratorHelper(Zh(Jh)), _step16;
    try {
      var _loop3 = function _loop32() {
        var t = _step16.value;
        var r = function _target() {
          if (this instanceof _target ? this.constructor : void 0)
            throw rd();
          for (var _len16 = arguments.length, i = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
            i[_key16] = arguments[_key16];
          }
          return le.Readable.from(ed(e, this, i));
        };
        qo = r;
        var e = Jh[t];
        Rt(r, "name", {
          __proto__: null,
          value: e.name
        }), Rt(r, "length", {
          __proto__: null,
          value: e.length
        }), Rt(le.Readable.prototype, t, {
          __proto__: null,
          value: r,
          enumerable: false,
          configurable: true,
          writable: true
        });
      };
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
        _loop3();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    var qo;
    var _iterator17 = _createForOfIteratorHelper(Zh(Xh)), _step17;
    try {
      var _loop4 = function _loop42() {
        var t = _step17.value;
        var r = function _target2() {
          if (this instanceof _target2 ? this.constructor : void 0)
            throw rd();
          for (var _len17 = arguments.length, n = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
            n[_key17] = arguments[_key17];
          }
          return ed(e, this, n);
        };
        qo = r;
        var e = Xh[t];
        Rt(r, "name", {
          __proto__: null,
          value: e.name
        }), Rt(r, "length", {
          __proto__: null,
          value: e.length
        }), Rt(le.Readable.prototype, t, {
          __proto__: null,
          value: r,
          enumerable: false,
          configurable: true,
          writable: true
        });
      };
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        _loop4();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    var qo;
    le.Writable = fo();
    le.Duplex = nt();
    le.Transform = wo();
    le.PassThrough = mo();
    le.pipeline = id;
    var _ci4 = ci(), pm = _ci4.addAbortSignal;
    le.addAbortSignal = pm;
    le.finished = nd;
    le.destroy = dm;
    le.compose = hm;
    Rt(le, "promises", {
      __proto__: null,
      configurable: true,
      enumerable: true,
      get: function get() {
        return Uo;
      }
    });
    Rt(id, td, {
      __proto__: null,
      enumerable: true,
      get: function get() {
        return Uo.pipeline;
      }
    });
    Rt(nd, td, {
      __proto__: null,
      enumerable: true,
      get: function get() {
        return Uo.finished;
      }
    });
    le.Stream = le;
    le._isUint8Array = function(e) {
      return e instanceof Uint8Array;
    };
    le._uint8ArrayToBuffer = function(e) {
      return cm.from(e.buffer, e.byteOffset, e.byteLength);
    };
  });
  var jt = M(function(tB, ue) {
    v();
    m();
    _();
    var he = Lo(), gm = Mo(), ym = he.Readable.destroy;
    ue.exports = he.Readable;
    ue.exports._uint8ArrayToBuffer = he._uint8ArrayToBuffer;
    ue.exports._isUint8Array = he._isUint8Array;
    ue.exports.isDisturbed = he.isDisturbed;
    ue.exports.isErrored = he.isErrored;
    ue.exports.isReadable = he.isReadable;
    ue.exports.Readable = he.Readable;
    ue.exports.Writable = he.Writable;
    ue.exports.Duplex = he.Duplex;
    ue.exports.Transform = he.Transform;
    ue.exports.PassThrough = he.PassThrough;
    ue.exports.addAbortSignal = he.addAbortSignal;
    ue.exports.finished = he.finished;
    ue.exports.destroy = he.destroy;
    ue.exports.destroy = ym;
    ue.exports.pipeline = he.pipeline;
    ue.exports.compose = he.compose;
    Object.defineProperty(he, "promises", {
      configurable: true,
      enumerable: true,
      get: function get() {
        return gm;
      }
    });
    ue.exports.Stream = he.Stream;
    ue.exports.default = ue.exports;
  });
  var od = M(function(cB, Do) {
    v();
    m();
    _();
    typeof Object.create == "function" ? Do.exports = function(e, r) {
      r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
        constructor: {
          value: e,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }));
    } : Do.exports = function(e, r) {
      if (r) {
        e.super_ = r;
        var i = function i2() {
        };
        i.prototype = r.prototype, e.prototype = new i(), e.prototype.constructor = e;
      }
    };
  });
  var ud = M(function(vB, ld) {
    v();
    m();
    _();
    var _ref29 = (ye(), X(_e)), ze = _ref29.Buffer, ad = Symbol.for("BufferList");
    function ee(t) {
      if (!(this instanceof ee))
        return new ee(t);
      ee._init.call(this, t);
    }
    ee._init = function(e) {
      Object.defineProperty(this, ad, {
        value: true
      }), this._bufs = [], this.length = 0, e && this.append(e);
    };
    ee.prototype._new = function(e) {
      return new ee(e);
    };
    ee.prototype._offset = function(e) {
      if (e === 0)
        return [0, 0];
      var r = 0;
      for (var i = 0; i < this._bufs.length; i++) {
        var _n7 = r + this._bufs[i].length;
        if (e < _n7 || i === this._bufs.length - 1)
          return [i, e - r];
        r = _n7;
      }
    };
    ee.prototype._reverseOffset = function(t) {
      var e = t[0], r = t[1];
      for (var i = 0; i < e; i++)
        r += this._bufs[i].length;
      return r;
    };
    ee.prototype.get = function(e) {
      if (e > this.length || e < 0)
        return;
      var r = this._offset(e);
      return this._bufs[r[0]][r[1]];
    };
    ee.prototype.slice = function(e, r) {
      return typeof e == "number" && e < 0 && (e += this.length), typeof r == "number" && r < 0 && (r += this.length), this.copy(null, 0, e, r);
    };
    ee.prototype.copy = function(e, r, i, n) {
      if ((typeof i != "number" || i < 0) && (i = 0), (typeof n != "number" || n > this.length) && (n = this.length), i >= this.length || n <= 0)
        return e || ze.alloc(0);
      var o = !!e, s = this._offset(i), a = n - i, u = a, c = o && r || 0, h = s[1];
      if (i === 0 && n === this.length) {
        if (!o)
          return this._bufs.length === 1 ? this._bufs[0] : ze.concat(this._bufs, this.length);
        for (var _d2 = 0; _d2 < this._bufs.length; _d2++)
          this._bufs[_d2].copy(e, c), c += this._bufs[_d2].length;
        return e;
      }
      if (u <= this._bufs[s[0]].length - h)
        return o ? this._bufs[s[0]].copy(e, r, h, h + u) : this._bufs[s[0]].slice(h, h + u);
      o || (e = ze.allocUnsafe(a));
      for (var _d3 = s[0]; _d3 < this._bufs.length; _d3++) {
        var _g3 = this._bufs[_d3].length - h;
        if (u > _g3)
          this._bufs[_d3].copy(e, c, h), c += _g3;
        else {
          this._bufs[_d3].copy(e, c, h, h + u), c += _g3;
          break;
        }
        u -= _g3, h && (h = 0);
      }
      return e.length > c ? e.slice(0, c) : e;
    };
    ee.prototype.shallowSlice = function(e, r) {
      if (e = e || 0, r = typeof r != "number" ? this.length : r, e < 0 && (e += this.length), r < 0 && (r += this.length), e === r)
        return this._new();
      var i = this._offset(e), n = this._offset(r), o = this._bufs.slice(i[0], n[0] + 1);
      return n[1] === 0 ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, n[1]), i[1] !== 0 && (o[0] = o[0].slice(i[1])), this._new(o);
    };
    ee.prototype.toString = function(e, r, i) {
      return this.slice(r, i).toString(e);
    };
    ee.prototype.consume = function(e) {
      if (e = Math.trunc(e), Number.isNaN(e) || e <= 0)
        return this;
      for (; this._bufs.length; )
        if (e >= this._bufs[0].length)
          e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
        else {
          this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
          break;
        }
      return this;
    };
    ee.prototype.duplicate = function() {
      var e = this._new();
      for (var _r11 = 0; _r11 < this._bufs.length; _r11++)
        e.append(this._bufs[_r11]);
      return e;
    };
    ee.prototype.append = function(e) {
      if (e == null)
        return this;
      if (e.buffer)
        this._appendBuffer(ze.from(e.buffer, e.byteOffset, e.byteLength));
      else if (Array.isArray(e))
        for (var _r12 = 0; _r12 < e.length; _r12++)
          this.append(e[_r12]);
      else if (this._isBufferList(e))
        for (var _r13 = 0; _r13 < e._bufs.length; _r13++)
          this.append(e._bufs[_r13]);
      else
        typeof e == "number" && (e = e.toString()), this._appendBuffer(ze.from(e));
      return this;
    };
    ee.prototype._appendBuffer = function(e) {
      this._bufs.push(e), this.length += e.length;
    };
    ee.prototype.indexOf = function(t, e, r) {
      if (r === void 0 && typeof e == "string" && (r = e, e = void 0), typeof t == "function" || Array.isArray(t))
        throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
      if (typeof t == "number" ? t = ze.from([t]) : typeof t == "string" ? t = ze.from(t, r) : this._isBufferList(t) ? t = t.slice() : Array.isArray(t.buffer) ? t = ze.from(t.buffer, t.byteOffset, t.byteLength) : ze.isBuffer(t) || (t = ze.from(t)), e = Number(e || 0), isNaN(e) && (e = 0), e < 0 && (e = this.length + e), e < 0 && (e = 0), t.length === 0)
        return e > this.length ? this.length : e;
      var i = this._offset(e), n = i[0], o = i[1];
      for (; n < this._bufs.length; n++) {
        var _s4 = this._bufs[n];
        for (; o < _s4.length; )
          if (_s4.length - o >= t.length) {
            var _u10 = _s4.indexOf(t, o);
            if (_u10 !== -1)
              return this._reverseOffset([n, _u10]);
            o = _s4.length - t.length + 1;
          } else {
            var _u11 = this._reverseOffset([n, o]);
            if (this._match(_u11, t))
              return _u11;
            o++;
          }
        o = 0;
      }
      return -1;
    };
    ee.prototype._match = function(t, e) {
      if (this.length - t < e.length)
        return false;
      for (var _r14 = 0; _r14 < e.length; _r14++)
        if (this.get(t + _r14) !== e[_r14])
          return false;
      return true;
    };
    (function() {
      var t = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readBigInt64BE: 8,
        readBigInt64LE: 8,
        readBigUInt64BE: 8,
        readBigUInt64LE: 8,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
      };
      for (var e in t)
        (function(r) {
          t[r] === null ? ee.prototype[r] = function(i, n) {
            return this.slice(i, i + n)[r](0, n);
          } : ee.prototype[r] = function() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return this.slice(i, i + t[r])[r](0);
          };
        })(e);
    })();
    ee.prototype._isBufferList = function(e) {
      return e instanceof ee || ee.isBufferList(e);
    };
    ee.isBufferList = function(e) {
      return e != null && e[ad];
    };
    ld.exports = ee;
  });
  var fd = M(function(OB, In) {
    v();
    m();
    _();
    var jo = jt().Duplex, bm = od(), mi = ud();
    function Ee(t) {
      if (!(this instanceof Ee))
        return new Ee(t);
      if (typeof t == "function") {
        this._callback = t;
        var e = (function(i) {
          this._callback && (this._callback(i), this._callback = null);
        }).bind(this);
        this.on("pipe", function(i) {
          i.on("error", e);
        }), this.on("unpipe", function(i) {
          i.removeListener("error", e);
        }), t = null;
      }
      mi._init.call(this, t), jo.call(this);
    }
    bm(Ee, jo);
    Object.assign(Ee.prototype, mi.prototype);
    Ee.prototype._new = function(e) {
      return new Ee(e);
    };
    Ee.prototype._write = function(e, r, i) {
      this._appendBuffer(e), typeof i == "function" && i();
    };
    Ee.prototype._read = function(e) {
      if (!this.length)
        return this.push(null);
      e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e);
    };
    Ee.prototype.end = function(e) {
      jo.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null);
    };
    Ee.prototype._destroy = function(e, r) {
      this._bufs.length = 0, this.length = 0, r(e);
    };
    Ee.prototype._isBufferList = function(e) {
      return e instanceof Ee || e instanceof mi || Ee.isBufferList(e);
    };
    Ee.isBufferList = mi.isBufferList;
    In.exports = Ee;
    In.exports.BufferListStream = Ee;
    In.exports.BufferList = mi;
  });
  var hd = M(function(FB, cd) {
    v();
    m();
    _();
    var Fo = /* @__PURE__ */ _createClass(function Fo2() {
      _classCallCheck(this, Fo2);
      this.cmd = null, this.retain = false, this.qos = 0, this.dup = false, this.length = -1, this.topic = null, this.payload = null;
    });
    cd.exports = Fo;
  });
  var Wo = M(function(JB, dd) {
    v();
    m();
    _();
    var L = dd.exports, _ref30 = (ye(), X(_e)), Oe = _ref30.Buffer;
    L.types = {
      0: "reserved",
      1: "connect",
      2: "connack",
      3: "publish",
      4: "puback",
      5: "pubrec",
      6: "pubrel",
      7: "pubcomp",
      8: "subscribe",
      9: "suback",
      10: "unsubscribe",
      11: "unsuback",
      12: "pingreq",
      13: "pingresp",
      14: "disconnect",
      15: "auth"
    };
    L.requiredHeaderFlags = {
      1: 0,
      2: 0,
      4: 0,
      5: 0,
      6: 2,
      7: 0,
      8: 2,
      9: 0,
      10: 2,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0
    };
    L.requiredHeaderFlagsErrors = {};
    for (var t in L.requiredHeaderFlags) {
      var e = L.requiredHeaderFlags[t];
      L.requiredHeaderFlagsErrors[t] = "Invalid header flag bits, must be 0x" + e.toString(16) + " for " + L.types[t] + " packet";
    }
    L.codes = {};
    for (var _t3 in L.types) {
      var _e2 = L.types[_t3];
      L.codes[_e2] = _t3;
    }
    L.CMD_SHIFT = 4;
    L.CMD_MASK = 240;
    L.DUP_MASK = 8;
    L.QOS_MASK = 3;
    L.QOS_SHIFT = 1;
    L.RETAIN_MASK = 1;
    L.VARBYTEINT_MASK = 127;
    L.VARBYTEINT_FIN_MASK = 128;
    L.VARBYTEINT_MAX = 268435455;
    L.SESSIONPRESENT_MASK = 1;
    L.SESSIONPRESENT_HEADER = Oe.from([L.SESSIONPRESENT_MASK]);
    L.CONNACK_HEADER = Oe.from([L.codes.connack << L.CMD_SHIFT]);
    L.USERNAME_MASK = 128;
    L.PASSWORD_MASK = 64;
    L.WILL_RETAIN_MASK = 32;
    L.WILL_QOS_MASK = 24;
    L.WILL_QOS_SHIFT = 3;
    L.WILL_FLAG_MASK = 4;
    L.CLEAN_SESSION_MASK = 2;
    L.CONNECT_HEADER = Oe.from([L.codes.connect << L.CMD_SHIFT]);
    L.properties = {
      sessionExpiryInterval: 17,
      willDelayInterval: 24,
      receiveMaximum: 33,
      maximumPacketSize: 39,
      topicAliasMaximum: 34,
      requestResponseInformation: 25,
      requestProblemInformation: 23,
      userProperties: 38,
      authenticationMethod: 21,
      authenticationData: 22,
      payloadFormatIndicator: 1,
      messageExpiryInterval: 2,
      contentType: 3,
      responseTopic: 8,
      correlationData: 9,
      maximumQoS: 36,
      retainAvailable: 37,
      assignedClientIdentifier: 18,
      reasonString: 31,
      wildcardSubscriptionAvailable: 40,
      subscriptionIdentifiersAvailable: 41,
      sharedSubscriptionAvailable: 42,
      serverKeepAlive: 19,
      responseInformation: 26,
      serverReference: 28,
      topicAlias: 35,
      subscriptionIdentifier: 11
    };
    L.propertiesCodes = {};
    for (var _t4 in L.properties) {
      var _e3 = L.properties[_t4];
      L.propertiesCodes[_e3] = _t4;
    }
    L.propertiesTypes = {
      sessionExpiryInterval: "int32",
      willDelayInterval: "int32",
      receiveMaximum: "int16",
      maximumPacketSize: "int32",
      topicAliasMaximum: "int16",
      requestResponseInformation: "byte",
      requestProblemInformation: "byte",
      userProperties: "pair",
      authenticationMethod: "string",
      authenticationData: "binary",
      payloadFormatIndicator: "byte",
      messageExpiryInterval: "int32",
      contentType: "string",
      responseTopic: "string",
      correlationData: "binary",
      maximumQoS: "int8",
      retainAvailable: "byte",
      assignedClientIdentifier: "string",
      reasonString: "string",
      wildcardSubscriptionAvailable: "byte",
      subscriptionIdentifiersAvailable: "byte",
      sharedSubscriptionAvailable: "byte",
      serverKeepAlive: "int16",
      responseInformation: "string",
      serverReference: "string",
      topicAlias: "int16",
      subscriptionIdentifier: "var"
    };
    function Ft(t2) {
      return [0, 1, 2].map(function(e2) {
        return [0, 1].map(function(r) {
          return [0, 1].map(function(i) {
            var n = Oe.alloc(1);
            return n.writeUInt8(L.codes[t2] << L.CMD_SHIFT | (r ? L.DUP_MASK : 0) | e2 << L.QOS_SHIFT | i, 0, true), n;
          });
        });
      });
    }
    L.PUBLISH_HEADER = Ft("publish");
    L.SUBSCRIBE_HEADER = Ft("subscribe");
    L.SUBSCRIBE_OPTIONS_QOS_MASK = 3;
    L.SUBSCRIBE_OPTIONS_NL_MASK = 1;
    L.SUBSCRIBE_OPTIONS_NL_SHIFT = 2;
    L.SUBSCRIBE_OPTIONS_RAP_MASK = 1;
    L.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3;
    L.SUBSCRIBE_OPTIONS_RH_MASK = 3;
    L.SUBSCRIBE_OPTIONS_RH_SHIFT = 4;
    L.SUBSCRIBE_OPTIONS_RH = [0, 16, 32];
    L.SUBSCRIBE_OPTIONS_NL = 4;
    L.SUBSCRIBE_OPTIONS_RAP = 8;
    L.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2];
    L.UNSUBSCRIBE_HEADER = Ft("unsubscribe");
    L.ACKS = {
      unsuback: Ft("unsuback"),
      puback: Ft("puback"),
      pubcomp: Ft("pubcomp"),
      pubrel: Ft("pubrel"),
      pubrec: Ft("pubrec")
    };
    L.SUBACK_HEADER = Oe.from([L.codes.suback << L.CMD_SHIFT]);
    L.VERSION3 = Oe.from([3]);
    L.VERSION4 = Oe.from([4]);
    L.VERSION5 = Oe.from([5]);
    L.VERSION131 = Oe.from([131]);
    L.VERSION132 = Oe.from([132]);
    L.QOS = [0, 1, 2].map(function(t2) {
      return Oe.from([t2]);
    });
    L.EMPTY = {
      pingreq: Oe.from([L.codes.pingreq << 4, 0]),
      pingresp: Oe.from([L.codes.pingresp << 4, 0]),
      disconnect: Oe.from([L.codes.disconnect << 4, 0])
    };
    L.MQTT5_PUBACK_PUBREC_CODES = {
      0: "Success",
      16: "No matching subscribers",
      128: "Unspecified error",
      131: "Implementation specific error",
      135: "Not authorized",
      144: "Topic Name invalid",
      145: "Packet identifier in use",
      151: "Quota exceeded",
      153: "Payload format invalid"
    };
    L.MQTT5_PUBREL_PUBCOMP_CODES = {
      0: "Success",
      146: "Packet Identifier not found"
    };
    L.MQTT5_SUBACK_CODES = {
      0: "Granted QoS 0",
      1: "Granted QoS 1",
      2: "Granted QoS 2",
      128: "Unspecified error",
      131: "Implementation specific error",
      135: "Not authorized",
      143: "Topic Filter invalid",
      145: "Packet Identifier in use",
      151: "Quota exceeded",
      158: "Shared Subscriptions not supported",
      161: "Subscription Identifiers not supported",
      162: "Wildcard Subscriptions not supported"
    };
    L.MQTT5_UNSUBACK_CODES = {
      0: "Success",
      17: "No subscription existed",
      128: "Unspecified error",
      131: "Implementation specific error",
      135: "Not authorized",
      143: "Topic Filter invalid",
      145: "Packet Identifier in use"
    };
    L.MQTT5_DISCONNECT_CODES = {
      0: "Normal disconnection",
      4: "Disconnect with Will Message",
      128: "Unspecified error",
      129: "Malformed Packet",
      130: "Protocol Error",
      131: "Implementation specific error",
      135: "Not authorized",
      137: "Server busy",
      139: "Server shutting down",
      141: "Keep Alive timeout",
      142: "Session taken over",
      143: "Topic Filter invalid",
      144: "Topic Name invalid",
      147: "Receive Maximum exceeded",
      148: "Topic Alias invalid",
      149: "Packet too large",
      150: "Message rate too high",
      151: "Quota exceeded",
      152: "Administrative action",
      153: "Payload format invalid",
      154: "Retain not supported",
      155: "QoS not supported",
      156: "Use another server",
      157: "Server moved",
      158: "Shared Subscriptions not supported",
      159: "Connection rate exceeded",
      160: "Maximum connect time",
      161: "Subscription Identifiers not supported",
      162: "Wildcard Subscriptions not supported"
    };
    L.MQTT5_AUTH_CODES = {
      0: "Success",
      24: "Continue authentication",
      25: "Re-authenticate"
    };
  });
  var gd = M(function(aP, pd) {
    v();
    m();
    _();
    var Vr = 1e3, zr = Vr * 60, Kr = zr * 60, gr = Kr * 24, wm = gr * 7, _m = gr * 365.25;
    pd.exports = function(t, e) {
      e = e || {};
      var r = _typeof(t);
      if (r === "string" && t.length > 0)
        return mm(t);
      if (r === "number" && isFinite(t))
        return e.long ? Em(t) : vm(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
    function mm(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
        if (e) {
          var r = parseFloat(e[1]), i = (e[2] || "ms").toLowerCase();
          switch (i) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return r * _m;
            case "weeks":
            case "week":
            case "w":
              return r * wm;
            case "days":
            case "day":
            case "d":
              return r * gr;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return r * Kr;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return r * zr;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return r * Vr;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return r;
            default:
              return;
          }
        }
      }
    }
    function vm(t) {
      var e = Math.abs(t);
      return e >= gr ? Math.round(t / gr) + "d" : e >= Kr ? Math.round(t / Kr) + "h" : e >= zr ? Math.round(t / zr) + "m" : e >= Vr ? Math.round(t / Vr) + "s" : t + "ms";
    }
    function Em(t) {
      var e = Math.abs(t);
      return e >= gr ? Tn(t, e, gr, "day") : e >= Kr ? Tn(t, e, Kr, "hour") : e >= zr ? Tn(t, e, zr, "minute") : e >= Vr ? Tn(t, e, Vr, "second") : t + " ms";
    }
    function Tn(t, e, r, i) {
      var n = e >= r * 1.5;
      return Math.round(t / r) + " " + i + (n ? "s" : "");
    }
  });
  var bd = M(function(bP, yd) {
    v();
    m();
    _();
    function Sm(t) {
      r.debug = r, r.default = r, r.coerce = u, r.disable = o, r.enable = n, r.enabled = s, r.humanize = gd(), r.destroy = c, Object.keys(t).forEach(function(h) {
        r[h] = t[h];
      }), r.names = [], r.skips = [], r.formatters = {};
      function e(h) {
        var d = 0;
        for (var _g4 = 0; _g4 < h.length; _g4++)
          d = (d << 5) - d + h.charCodeAt(_g4), d |= 0;
        return r.colors[Math.abs(d) % r.colors.length];
      }
      r.selectColor = e;
      function r(h) {
        var d, g = null, y, w;
        function E() {
          for (var _len18 = arguments.length, S = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            S[_key18] = arguments[_key18];
          }
          if (!E.enabled)
            return;
          var I = E, C = Number(/* @__PURE__ */ new Date()), R = C - (d || C);
          I.diff = R, I.prev = d, I.curr = C, d = C, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
          var U = 0;
          S[0] = S[0].replace(/%([a-zA-Z%])/g, function(W, K) {
            if (W === "%%")
              return "%";
            U++;
            var z = r.formatters[K];
            if (typeof z == "function") {
              var Q = S[U];
              W = z.call(I, Q), S.splice(U, 1), U--;
            }
            return W;
          }), r.formatArgs.call(I, S), (I.log || r.log).apply(I, S);
        }
        return E.namespace = h, E.useColors = r.useColors(), E.color = r.selectColor(h), E.extend = i, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
          enumerable: true,
          configurable: false,
          get: function get() {
            return g !== null ? g : (y !== r.namespaces && (y = r.namespaces, w = r.enabled(h)), w);
          },
          set: function set(S) {
            g = S;
          }
        }), typeof r.init == "function" && r.init(E), E;
      }
      function i(h, d) {
        var g = r(this.namespace + (_typeof(d) > "u" ? ":" : d) + h);
        return g.log = this.log, g;
      }
      function n(h) {
        r.save(h), r.namespaces = h, r.names = [], r.skips = [];
        var d, g = (typeof h == "string" ? h : "").split(/[\s,]+/), y = g.length;
        for (d = 0; d < y; d++)
          g[d] && (h = g[d].replace(/\*/g, ".*?"), h[0] === "-" ? r.skips.push(new RegExp("^" + h.slice(1) + "$")) : r.names.push(new RegExp("^" + h + "$")));
      }
      function o() {
        var h = [].concat(_toConsumableArray(r.names.map(a)), _toConsumableArray(r.skips.map(a).map(function(d) {
          return "-" + d;
        }))).join(",");
        return r.enable(""), h;
      }
      function s(h) {
        if (h[h.length - 1] === "*")
          return true;
        var d, g;
        for (d = 0, g = r.skips.length; d < g; d++)
          if (r.skips[d].test(h))
            return false;
        for (d = 0, g = r.names.length; d < g; d++)
          if (r.names[d].test(h))
            return true;
        return false;
      }
      function a(h) {
        return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function u(h) {
        return h instanceof Error ? h.stack || h.message : h;
      }
      function c() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      return r.enable(r.load()), r;
    }
    yd.exports = Sm;
  });
  var ot = M(function(xe, Rn) {
    v();
    m();
    _();
    xe.formatArgs = Im;
    xe.save = Tm;
    xe.load = Rm;
    xe.useColors = Am;
    xe.storage = Cm();
    xe.destroy = /* @__PURE__ */ function() {
      var t = false;
      return function() {
        t || (t = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    }();
    xe.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function Am() {
      return (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : _typeof(P) < "u" && P.userAgent && P.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || _typeof(P) < "u" && P.userAgent && P.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || _typeof(P) < "u" && P.userAgent && P.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function Im(t) {
      if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + Rn.exports.humanize(this.diff), !this.useColors)
        return;
      var e = "color: " + this.color;
      t.splice(1, 0, e, "color: inherit");
      var r = 0, i = 0;
      t[0].replace(/%[a-zA-Z%]/g, function(n) {
        n !== "%%" && (r++, n === "%c" && (i = r));
      }), t.splice(i, 0, e);
    }
    xe.log = console.debug || console.log || function() {
    };
    function Tm(t) {
      try {
        t ? xe.storage.setItem("debug", t) : xe.storage.removeItem("debug");
      } catch (_unused10) {
      }
    }
    function Rm() {
      var t;
      try {
        t = xe.storage.getItem("debug");
      } catch (_unused11) {
      }
      return !t && _typeof(B) < "u" && "env" in B && (t = B.env.DEBUG), t;
    }
    function Cm() {
      try {
        return localStorage;
      } catch (_unused12) {
      }
    }
    Rn.exports = bd()(xe);
    var Bm = Rn.exports.formatters;
    Bm.j = function(t) {
      try {
        return JSON.stringify(t);
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message;
      }
    };
  });
  var md = M(function(UP, _d) {
    v();
    m();
    _();
    var Pm = fd(), _ref31 = (ir(), X(rr)), Om = _ref31.EventEmitter, wd = hd(), V = Wo(), D = ot()("mqtt-packet:parser"), $o = /* @__PURE__ */ function(_Om) {
      function t() {
        var _this11;
        _classCallCheck(this, t);
        _this11 = _callSuper(this, t), _this11.parser = _this11.constructor.parser;
        return _this11;
      }
      _inherits(t, _Om);
      return _createClass(t, [{
        key: "_resetState",
        value: function _resetState() {
          D("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new wd(), this.error = null, this._list = Pm(), this._stateCounter = 0;
        }
      }, {
        key: "parse",
        value: function parse(e) {
          for (this.error && this._resetState(), this._list.append(e), D("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; )
            this._stateCounter++, D("parse: state complete. _stateCounter is now: %d", this._stateCounter), D("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
          return D("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length;
        }
      }, {
        key: "_parseHeader",
        value: function _parseHeader() {
          var e = this._list.readUInt8(0), r = e >> V.CMD_SHIFT;
          this.packet.cmd = V.types[r];
          var i = e & 15, n = V.requiredHeaderFlags[r];
          return n != null && i !== n ? this._emitError(new Error(V.requiredHeaderFlagsErrors[r])) : (this.packet.retain = (e & V.RETAIN_MASK) !== 0, this.packet.qos = e >> V.QOS_SHIFT & V.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (e & V.DUP_MASK) !== 0, D("_parseHeader: packet: %o", this.packet), this._list.consume(1), true));
        }
      }, {
        key: "_parseLength",
        value: function _parseLength() {
          var e = this._parseVarByteNum(true);
          return e && (this.packet.length = e.value, this._list.consume(e.bytes)), D("_parseLength %d", e.value), !!e;
        }
      }, {
        key: "_parsePayload",
        value: function _parsePayload() {
          D("_parsePayload: payload %O", this._list);
          var e = false;
          if (this.packet.length === 0 || this._list.length >= this.packet.length) {
            switch (this._pos = 0, this.packet.cmd) {
              case "connect":
                this._parseConnect();
                break;
              case "connack":
                this._parseConnack();
                break;
              case "publish":
                this._parsePublish();
                break;
              case "puback":
              case "pubrec":
              case "pubrel":
              case "pubcomp":
                this._parseConfirmation();
                break;
              case "subscribe":
                this._parseSubscribe();
                break;
              case "suback":
                this._parseSuback();
                break;
              case "unsubscribe":
                this._parseUnsubscribe();
                break;
              case "unsuback":
                this._parseUnsuback();
                break;
              case "pingreq":
              case "pingresp":
                break;
              case "disconnect":
                this._parseDisconnect();
                break;
              case "auth":
                this._parseAuth();
                break;
              default:
                this._emitError(new Error("Not supported"));
            }
            e = true;
          }
          return D("_parsePayload complete result: %s", e), e;
        }
      }, {
        key: "_parseConnect",
        value: function _parseConnect() {
          D("_parseConnect");
          var e, r, i, n, o = {}, s = this.packet, a = this._parseString();
          if (a === null)
            return this._emitError(new Error("Cannot parse protocolId"));
          if (a !== "MQTT" && a !== "MQIsdp")
            return this._emitError(new Error("Invalid protocolId"));
          if (s.protocolId = a, this._pos >= this._list.length)
            return this._emitError(new Error("Packet too short"));
          if (s.protocolVersion = this._list.readUInt8(this._pos), s.protocolVersion >= 128 && (s.bridgeMode = true, s.protocolVersion = s.protocolVersion - 128), s.protocolVersion !== 3 && s.protocolVersion !== 4 && s.protocolVersion !== 5)
            return this._emitError(new Error("Invalid protocol version"));
          if (this._pos++, this._pos >= this._list.length)
            return this._emitError(new Error("Packet too short"));
          if (this._list.readUInt8(this._pos) & 1)
            return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
          o.username = this._list.readUInt8(this._pos) & V.USERNAME_MASK, o.password = this._list.readUInt8(this._pos) & V.PASSWORD_MASK, o.will = this._list.readUInt8(this._pos) & V.WILL_FLAG_MASK;
          var u = !!(this._list.readUInt8(this._pos) & V.WILL_RETAIN_MASK), c = (this._list.readUInt8(this._pos) & V.WILL_QOS_MASK) >> V.WILL_QOS_SHIFT;
          if (o.will)
            s.will = {}, s.will.retain = u, s.will.qos = c;
          else {
            if (u)
              return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
            if (c)
              return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
          }
          if (s.clean = (this._list.readUInt8(this._pos) & V.CLEAN_SESSION_MASK) !== 0, this._pos++, s.keepalive = this._parseNum(), s.keepalive === -1)
            return this._emitError(new Error("Packet too short"));
          if (s.protocolVersion === 5) {
            var _d4 = this._parseProperties();
            Object.getOwnPropertyNames(_d4).length && (s.properties = _d4);
          }
          var h = this._parseString();
          if (h === null)
            return this._emitError(new Error("Packet too short"));
          if (s.clientId = h, D("_parseConnect: packet.clientId: %s", s.clientId), o.will) {
            if (s.protocolVersion === 5) {
              var _d5 = this._parseProperties();
              Object.getOwnPropertyNames(_d5).length && (s.will.properties = _d5);
            }
            if (e = this._parseString(), e === null)
              return this._emitError(new Error("Cannot parse will topic"));
            if (s.will.topic = e, D("_parseConnect: packet.will.topic: %s", s.will.topic), r = this._parseBuffer(), r === null)
              return this._emitError(new Error("Cannot parse will payload"));
            s.will.payload = r, D("_parseConnect: packet.will.paylaod: %s", s.will.payload);
          }
          if (o.username) {
            if (n = this._parseString(), n === null)
              return this._emitError(new Error("Cannot parse username"));
            s.username = n, D("_parseConnect: packet.username: %s", s.username);
          }
          if (o.password) {
            if (i = this._parseBuffer(), i === null)
              return this._emitError(new Error("Cannot parse password"));
            s.password = i;
          }
          return this.settings = s, D("_parseConnect: complete"), s;
        }
      }, {
        key: "_parseConnack",
        value: function _parseConnack() {
          D("_parseConnack");
          var e = this.packet;
          if (this._list.length < 1)
            return null;
          var r = this._list.readUInt8(this._pos++);
          if (r > 1)
            return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
          if (e.sessionPresent = !!(r & V.SESSIONPRESENT_MASK), this.settings.protocolVersion === 5)
            this._list.length >= 2 ? e.reasonCode = this._list.readUInt8(this._pos++) : e.reasonCode = 0;
          else {
            if (this._list.length < 2)
              return null;
            e.returnCode = this._list.readUInt8(this._pos++);
          }
          if (e.returnCode === -1 || e.reasonCode === -1)
            return this._emitError(new Error("Cannot parse return code"));
          if (this.settings.protocolVersion === 5) {
            var i = this._parseProperties();
            Object.getOwnPropertyNames(i).length && (e.properties = i);
          }
          D("_parseConnack: complete");
        }
      }, {
        key: "_parsePublish",
        value: function _parsePublish() {
          D("_parsePublish");
          var e = this.packet;
          if (e.topic = this._parseString(), e.topic === null)
            return this._emitError(new Error("Cannot parse topic"));
          if (!(e.qos > 0 && !this._parseMessageId())) {
            if (this.settings.protocolVersion === 5) {
              var _r15 = this._parseProperties();
              Object.getOwnPropertyNames(_r15).length && (e.properties = _r15);
            }
            e.payload = this._list.slice(this._pos, e.length), D("_parsePublish: payload from buffer list: %o", e.payload);
          }
        }
      }, {
        key: "_parseSubscribe",
        value: function _parseSubscribe() {
          D("_parseSubscribe");
          var e = this.packet, r, i, n, o, s, a, u;
          if (e.subscriptions = [], !!this._parseMessageId()) {
            if (this.settings.protocolVersion === 5) {
              var _c6 = this._parseProperties();
              Object.getOwnPropertyNames(_c6).length && (e.properties = _c6);
            }
            if (e.length <= 0)
              return this._emitError(new Error("Malformed subscribe, no payload specified"));
            for (; this._pos < e.length; ) {
              if (r = this._parseString(), r === null)
                return this._emitError(new Error("Cannot parse topic"));
              if (this._pos >= e.length)
                return this._emitError(new Error("Malformed Subscribe Payload"));
              if (i = this._parseByte(), this.settings.protocolVersion === 5) {
                if (i & 192)
                  return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
              } else if (i & 252)
                return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
              if (n = i & V.SUBSCRIBE_OPTIONS_QOS_MASK, n > 2)
                return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
              if (a = (i >> V.SUBSCRIBE_OPTIONS_NL_SHIFT & V.SUBSCRIBE_OPTIONS_NL_MASK) !== 0, s = (i >> V.SUBSCRIBE_OPTIONS_RAP_SHIFT & V.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0, o = i >> V.SUBSCRIBE_OPTIONS_RH_SHIFT & V.SUBSCRIBE_OPTIONS_RH_MASK, o > 2)
                return this._emitError(new Error("Invalid retain handling, must be <= 2"));
              u = {
                topic: r,
                qos: n
              }, this.settings.protocolVersion === 5 ? (u.nl = a, u.rap = s, u.rh = o) : this.settings.bridgeMode && (u.rh = 0, u.rap = true, u.nl = true), D("_parseSubscribe: push subscription `%s` to subscription", u), e.subscriptions.push(u);
            }
          }
        }
      }, {
        key: "_parseSuback",
        value: function _parseSuback() {
          D("_parseSuback");
          var e = this.packet;
          if (this.packet.granted = [], !!this._parseMessageId()) {
            if (this.settings.protocolVersion === 5) {
              var _r16 = this._parseProperties();
              Object.getOwnPropertyNames(_r16).length && (e.properties = _r16);
            }
            if (e.length <= 0)
              return this._emitError(new Error("Malformed suback, no payload specified"));
            for (; this._pos < this.packet.length; ) {
              var _r17 = this._list.readUInt8(this._pos++);
              if (this.settings.protocolVersion === 5) {
                if (!V.MQTT5_SUBACK_CODES[_r17])
                  return this._emitError(new Error("Invalid suback code"));
              } else if (_r17 > 2 && _r17 !== 128)
                return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
              this.packet.granted.push(_r17);
            }
          }
        }
      }, {
        key: "_parseUnsubscribe",
        value: function _parseUnsubscribe() {
          D("_parseUnsubscribe");
          var e = this.packet;
          if (e.unsubscriptions = [], !!this._parseMessageId()) {
            if (this.settings.protocolVersion === 5) {
              var _r18 = this._parseProperties();
              Object.getOwnPropertyNames(_r18).length && (e.properties = _r18);
            }
            if (e.length <= 0)
              return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
            for (; this._pos < e.length; ) {
              var _r19 = this._parseString();
              if (_r19 === null)
                return this._emitError(new Error("Cannot parse topic"));
              D("_parseUnsubscribe: push topic `%s` to unsubscriptions", _r19), e.unsubscriptions.push(_r19);
            }
          }
        }
      }, {
        key: "_parseUnsuback",
        value: function _parseUnsuback() {
          D("_parseUnsuback");
          var e = this.packet;
          if (!this._parseMessageId())
            return this._emitError(new Error("Cannot parse messageId"));
          if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && e.length !== 2)
            return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
          if (e.length <= 0)
            return this._emitError(new Error("Malformed unsuback, no payload specified"));
          if (this.settings.protocolVersion === 5) {
            var _r20 = this._parseProperties();
            for (Object.getOwnPropertyNames(_r20).length && (e.properties = _r20), e.granted = []; this._pos < this.packet.length; ) {
              var i = this._list.readUInt8(this._pos++);
              if (!V.MQTT5_UNSUBACK_CODES[i])
                return this._emitError(new Error("Invalid unsuback code"));
              this.packet.granted.push(i);
            }
          }
        }
      }, {
        key: "_parseConfirmation",
        value: function _parseConfirmation() {
          D("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
          var e = this.packet;
          if (this._parseMessageId(), this.settings.protocolVersion === 5) {
            if (e.length > 2) {
              switch (e.reasonCode = this._parseByte(), this.packet.cmd) {
                case "puback":
                case "pubrec":
                  if (!V.MQTT5_PUBACK_PUBREC_CODES[e.reasonCode])
                    return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                  break;
                case "pubrel":
                case "pubcomp":
                  if (!V.MQTT5_PUBREL_PUBCOMP_CODES[e.reasonCode])
                    return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                  break;
              }
              D("_parseConfirmation: packet.reasonCode `%d`", e.reasonCode);
            } else
              e.reasonCode = 0;
            if (e.length > 3) {
              var _r21 = this._parseProperties();
              Object.getOwnPropertyNames(_r21).length && (e.properties = _r21);
            }
          }
          return true;
        }
      }, {
        key: "_parseDisconnect",
        value: function _parseDisconnect() {
          var e = this.packet;
          if (D("_parseDisconnect"), this.settings.protocolVersion === 5) {
            this._list.length > 0 ? (e.reasonCode = this._parseByte(), V.MQTT5_DISCONNECT_CODES[e.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : e.reasonCode = 0;
            var _r22 = this._parseProperties();
            Object.getOwnPropertyNames(_r22).length && (e.properties = _r22);
          }
          return D("_parseDisconnect result: true"), true;
        }
      }, {
        key: "_parseAuth",
        value: function _parseAuth() {
          D("_parseAuth");
          var e = this.packet;
          if (this.settings.protocolVersion !== 5)
            return this._emitError(new Error("Not supported auth packet for this version MQTT"));
          if (e.reasonCode = this._parseByte(), !V.MQTT5_AUTH_CODES[e.reasonCode])
            return this._emitError(new Error("Invalid auth reason code"));
          var r = this._parseProperties();
          return Object.getOwnPropertyNames(r).length && (e.properties = r), D("_parseAuth: result: true"), true;
        }
      }, {
        key: "_parseMessageId",
        value: function _parseMessageId() {
          var e = this.packet;
          return e.messageId = this._parseNum(), e.messageId === null ? (this._emitError(new Error("Cannot parse messageId")), false) : (D("_parseMessageId: packet.messageId %d", e.messageId), true);
        }
      }, {
        key: "_parseString",
        value: function _parseString(e) {
          var r = this._parseNum(), i = r + this._pos;
          if (r === -1 || i > this._list.length || i > this.packet.length)
            return null;
          var n = this._list.toString("utf8", this._pos, i);
          return this._pos += r, D("_parseString: result: %s", n), n;
        }
      }, {
        key: "_parseStringPair",
        value: function _parseStringPair() {
          return D("_parseStringPair"), {
            name: this._parseString(),
            value: this._parseString()
          };
        }
      }, {
        key: "_parseBuffer",
        value: function _parseBuffer() {
          var e = this._parseNum(), r = e + this._pos;
          if (e === -1 || r > this._list.length || r > this.packet.length)
            return null;
          var i = this._list.slice(this._pos, r);
          return this._pos += e, D("_parseBuffer: result: %o", i), i;
        }
      }, {
        key: "_parseNum",
        value: function _parseNum() {
          if (this._list.length - this._pos < 2)
            return -1;
          var e = this._list.readUInt16BE(this._pos);
          return this._pos += 2, D("_parseNum: result: %s", e), e;
        }
      }, {
        key: "_parse4ByteNum",
        value: function _parse4ByteNum() {
          if (this._list.length - this._pos < 4)
            return -1;
          var e = this._list.readUInt32BE(this._pos);
          return this._pos += 4, D("_parse4ByteNum: result: %s", e), e;
        }
      }, {
        key: "_parseVarByteNum",
        value: function _parseVarByteNum(e) {
          D("_parseVarByteNum");
          var r = 4, i = 0, n = 1, o = 0, s = false, a, u = this._pos ? this._pos : 0;
          for (; i < r && u + i < this._list.length; ) {
            if (a = this._list.readUInt8(u + i++), o += n * (a & V.VARBYTEINT_MASK), n *= 128, !(a & V.VARBYTEINT_FIN_MASK)) {
              s = true;
              break;
            }
            if (this._list.length <= i)
              break;
          }
          return !s && i === r && this._list.length >= i && this._emitError(new Error("Invalid variable byte integer")), u && (this._pos += i), s ? e ? s = {
            bytes: i,
            value: o
          } : s = o : s = false, D("_parseVarByteNum: result: %o", s), s;
        }
      }, {
        key: "_parseByte",
        value: function _parseByte() {
          var e;
          return this._pos < this._list.length && (e = this._list.readUInt8(this._pos), this._pos++), D("_parseByte: result: %o", e), e;
        }
      }, {
        key: "_parseByType",
        value: function _parseByType(e) {
          switch (D("_parseByType: type: %s", e), e) {
            case "byte":
              return this._parseByte() !== 0;
            case "int8":
              return this._parseByte();
            case "int16":
              return this._parseNum();
            case "int32":
              return this._parse4ByteNum();
            case "var":
              return this._parseVarByteNum();
            case "string":
              return this._parseString();
            case "pair":
              return this._parseStringPair();
            case "binary":
              return this._parseBuffer();
          }
        }
      }, {
        key: "_parseProperties",
        value: function _parseProperties() {
          D("_parseProperties");
          var e = this._parseVarByteNum(), i = this._pos + e, n = {};
          for (; this._pos < i; ) {
            var _o6 = this._parseByte();
            if (!_o6)
              return this._emitError(new Error("Cannot parse property code type")), false;
            var _s5 = V.propertiesCodes[_o6];
            if (!_s5)
              return this._emitError(new Error("Unknown property")), false;
            if (_s5 === "userProperties") {
              n[_s5] || (n[_s5] = /* @__PURE__ */ Object.create(null));
              var _a4 = this._parseByType(V.propertiesTypes[_s5]);
              if (n[_s5][_a4.name]) {
                if (Array.isArray(n[_s5][_a4.name]))
                  n[_s5][_a4.name].push(_a4.value);
                else {
                  var _u12 = n[_s5][_a4.name];
                  n[_s5][_a4.name] = [_u12], n[_s5][_a4.name].push(_a4.value);
                }
              } else
                n[_s5][_a4.name] = _a4.value;
              continue;
            }
            n[_s5] ? Array.isArray(n[_s5]) ? n[_s5].push(this._parseByType(V.propertiesTypes[_s5])) : (n[_s5] = [n[_s5]], n[_s5].push(this._parseByType(V.propertiesTypes[_s5]))) : n[_s5] = this._parseByType(V.propertiesTypes[_s5]);
          }
          return n;
        }
      }, {
        key: "_newPacket",
        value: function _newPacket() {
          return D("_newPacket"), this.packet && (this._list.consume(this.packet.length), D("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), D("_newPacket: new packet"), this.packet = new wd(), this._pos = 0, true;
        }
      }, {
        key: "_emitError",
        value: function _emitError(e) {
          D("_emitError", e), this.error = e, this.emit("error", e);
        }
      }], [{
        key: "parser",
        value: function parser(e) {
          return this instanceof t ? (this.settings = e || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : new t().parser(e);
        }
      }]);
    }(Om);
    _d.exports = $o;
  });
  var Ad = M(function(zP, Sd) {
    v();
    m();
    _();
    var _ref32 = (ye(), X(_e)), vi = _ref32.Buffer, km = 65536, vd = {}, xm = vi.isBuffer(vi.from([1, 2]).subarray(0, 1));
    function Ed(t) {
      var e = vi.allocUnsafe(2);
      return e.writeUInt8(t >> 8, 0), e.writeUInt8(t & 255, 0 + 1), e;
    }
    function Mm() {
      for (var t = 0; t < km; t++)
        vd[t] = Ed(t);
    }
    function Lm(t) {
      var r = 0, i = 0, n = vi.allocUnsafe(4);
      do
        r = t % 128 | 0, t = t / 128 | 0, t > 0 && (r = r | 128), n.writeUInt8(r, i++);
      while (t > 0 && i < 4);
      return t > 0 && (i = 0), xm ? n.subarray(0, i) : n.slice(0, i);
    }
    function Um(t) {
      var e = vi.allocUnsafe(4);
      return e.writeUInt32BE(t, 0), e;
    }
    Sd.exports = {
      cache: vd,
      generateCache: Mm,
      generateNumber: Ed,
      genBufVariableByteInt: Lm,
      generate4ByteBuffer: Um
    };
  });
  var Id = M(function(rO, Ho) {
    v();
    m();
    _();
    _typeof(B) > "u" || !B.version || B.version.indexOf("v0.") === 0 || B.version.indexOf("v1.") === 0 && B.version.indexOf("v1.8.") !== 0 ? Ho.exports = {
      nextTick: Nm
    } : Ho.exports = B;
    function Nm(t, e, r, i) {
      if (typeof t != "function")
        throw new TypeError('"callback" argument must be a function');
      var n = arguments.length, o, s;
      switch (n) {
        case 0:
        case 1:
          return B.nextTick(t);
        case 2:
          return B.nextTick(function() {
            t.call(null, e);
          });
        case 3:
          return B.nextTick(function() {
            t.call(null, e, r);
          });
        case 4:
          return B.nextTick(function() {
            t.call(null, e, r, i);
          });
        default:
          for (o = new Array(n - 1), s = 0; s < o.length; )
            o[s++] = arguments[s];
          return B.nextTick(function() {
            t.apply(null, o);
          });
      }
    }
  });
  var Ko = M(function(hO, xd) {
    v();
    m();
    _();
    var j = Wo(), _ref33 = (ye(), X(_e)), q = _ref33.Buffer, qm = q.allocUnsafe(0), Dm = q.from([0]), Ei = Ad(), jm = Id().nextTick, qe = ot()("mqtt-packet:writeToStream"), Cn = Ei.cache, Fm = Ei.generateNumber, Wm = Ei.generateCache, Vo = Ei.genBufVariableByteInt, $m = Ei.generate4ByteBuffer, Ie = zo, Bn = true;
    function Od(t, e, r) {
      switch (qe("generate called"), e.cork && (e.cork(), jm(Hm, e)), Bn && (Bn = false, Wm()), qe("generate: packet.cmd: %s", t.cmd), t.cmd) {
        case "connect":
          return Vm(t, e);
        case "connack":
          return zm(t, e, r);
        case "publish":
          return Km(t, e, r);
        case "puback":
        case "pubrec":
        case "pubrel":
        case "pubcomp":
          return Gm(t, e, r);
        case "subscribe":
          return Qm(t, e, r);
        case "suback":
          return Ym(t, e, r);
        case "unsubscribe":
          return Jm(t, e, r);
        case "unsuback":
          return Xm(t, e, r);
        case "pingreq":
        case "pingresp":
          return Zm(t, e);
        case "disconnect":
          return e1(t, e, r);
        case "auth":
          return t1(t, e, r);
        default:
          return e.destroy(new Error("Unknown command")), false;
      }
    }
    Object.defineProperty(Od, "cacheNumbers", {
      get: function get() {
        return Ie === zo;
      },
      set: function set(t) {
        t ? ((!Cn || Object.keys(Cn).length === 0) && (Bn = true), Ie = zo) : (Bn = false, Ie = r1);
      }
    });
    function Hm(t) {
      t.uncork();
    }
    function Vm(t, e, r) {
      var i = t || {}, n = i.protocolId || "MQTT", o = i.protocolVersion || 4, s = i.will, a = i.clean, u = i.keepalive || 0, c = i.clientId || "", h = i.username, d = i.password, g = i.properties;
      a === void 0 && (a = true);
      var y = 0;
      if (!n || typeof n != "string" && !q.isBuffer(n))
        return e.destroy(new Error("Invalid protocolId")), false;
      if (y += n.length + 2, o !== 3 && o !== 4 && o !== 5)
        return e.destroy(new Error("Invalid protocol version")), false;
      if (y += 1, (typeof c == "string" || q.isBuffer(c)) && (c || o >= 4) && (c || a))
        y += q.byteLength(c) + 2;
      else {
        if (o < 4)
          return e.destroy(new Error("clientId must be supplied before 3.1.1")), false;
        if (a * 1 === 0)
          return e.destroy(new Error("clientId must be given if cleanSession set to 0")), false;
      }
      if (typeof u != "number" || u < 0 || u > 65535 || u % 1 !== 0)
        return e.destroy(new Error("Invalid keepalive")), false;
      y += 2, y += 1;
      var w, E;
      if (o === 5) {
        if (w = Wt(e, g), !w)
          return false;
        y += w.length;
      }
      if (s) {
        if (_typeof(s) != "object")
          return e.destroy(new Error("Invalid will")), false;
        if (!s.topic || typeof s.topic != "string")
          return e.destroy(new Error("Invalid will topic")), false;
        if (y += q.byteLength(s.topic) + 2, y += 2, s.payload)
          if (s.payload.length >= 0)
            typeof s.payload == "string" ? y += q.byteLength(s.payload) : y += s.payload.length;
          else
            return e.destroy(new Error("Invalid will payload")), false;
        if (E = {}, o === 5) {
          if (E = Wt(e, s.properties), !E)
            return false;
          y += E.length;
        }
      }
      var S = false;
      if (h != null)
        if (Pd(h))
          S = true, y += q.byteLength(h) + 2;
        else
          return e.destroy(new Error("Invalid username")), false;
      if (d != null) {
        if (!S)
          return e.destroy(new Error("Username is required to use password")), false;
        if (Pd(d))
          y += kd(d) + 2;
        else
          return e.destroy(new Error("Invalid password")), false;
      }
      e.write(j.CONNECT_HEADER), De(e, y), Gr(e, n), i.bridgeMode && (o += 128), e.write(o === 131 ? j.VERSION131 : o === 132 ? j.VERSION132 : o === 4 ? j.VERSION4 : o === 5 ? j.VERSION5 : j.VERSION3);
      var I = 0;
      return I |= h != null ? j.USERNAME_MASK : 0, I |= d != null ? j.PASSWORD_MASK : 0, I |= s && s.retain ? j.WILL_RETAIN_MASK : 0, I |= s && s.qos ? s.qos << j.WILL_QOS_SHIFT : 0, I |= s ? j.WILL_FLAG_MASK : 0, I |= a ? j.CLEAN_SESSION_MASK : 0, e.write(q.from([I])), Ie(e, u), o === 5 && w.write(), Gr(e, c), s && (o === 5 && E.write(), yr(e, s.topic), Gr(e, s.payload)), h != null && Gr(e, h), d != null && Gr(e, d), true;
    }
    function zm(t, e, r) {
      var _u13;
      var i = r ? r.protocolVersion : 4, n = t || {}, o = i === 5 ? n.reasonCode : n.returnCode, s = n.properties, a = 2;
      if (typeof o != "number")
        return e.destroy(new Error("Invalid return code")), false;
      var u = null;
      if (i === 5) {
        if (u = Wt(e, s), !u)
          return false;
        a += u.length;
      }
      return e.write(j.CONNACK_HEADER), De(e, a), e.write(n.sessionPresent ? j.SESSIONPRESENT_HEADER : Dm), e.write(q.from([o])), (_u13 = u) !== null && _u13 !== void 0 && _u13.write(), true;
    }
    function Km(t, e, r) {
      var _g5;
      qe("publish: packet: %o", t);
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.qos || 0, s = n.retain ? j.RETAIN_MASK : 0, a = n.topic, u = n.payload || qm, c = n.messageId, h = n.properties, d = 0;
      if (typeof a == "string")
        d += q.byteLength(a) + 2;
      else if (q.isBuffer(a))
        d += a.length + 2;
      else
        return e.destroy(new Error("Invalid topic")), false;
      if (q.isBuffer(u) ? d += u.length : d += q.byteLength(u), o && typeof c != "number")
        return e.destroy(new Error("Invalid messageId")), false;
      o && (d += 2);
      var g = null;
      if (i === 5) {
        if (g = Wt(e, h), !g)
          return false;
        d += g.length;
      }
      return e.write(j.PUBLISH_HEADER[o][n.dup ? 1 : 0][s ? 1 : 0]), De(e, d), Ie(e, kd(a)), e.write(a), o > 0 && Ie(e, c), (_g5 = g) !== null && _g5 !== void 0 && _g5.write(), qe("publish: payload: %o", u), e.write(u);
    }
    function Gm(t, e, r) {
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.cmd || "puback", s = n.messageId, a = n.dup && o === "pubrel" ? j.DUP_MASK : 0, u = 0, c = n.reasonCode, h = n.properties, d = i === 5 ? 3 : 2;
      if (o === "pubrel" && (u = 1), typeof s != "number")
        return e.destroy(new Error("Invalid messageId")), false;
      var g = null;
      if (i === 5 && _typeof(h) == "object") {
        if (g = Si(e, h, r, d), !g)
          return false;
        d += g.length;
      }
      return e.write(j.ACKS[o][u][a][0]), d === 3 && (d += c !== 0 ? 1 : -1), De(e, d), Ie(e, s), i === 5 && d !== 2 && e.write(q.from([c])), g !== null ? g.write() : d === 4 && e.write(q.from([0])), true;
    }
    function Qm(t, e, r) {
      qe("subscribe: packet: ");
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.dup ? j.DUP_MASK : 0, s = n.messageId, a = n.subscriptions, u = n.properties, c = 0;
      if (typeof s != "number")
        return e.destroy(new Error("Invalid messageId")), false;
      c += 2;
      var h = null;
      if (i === 5) {
        if (h = Wt(e, u), !h)
          return false;
        c += h.length;
      }
      if (_typeof(a) == "object" && a.length)
        for (var _g6 = 0; _g6 < a.length; _g6 += 1) {
          var _y6 = a[_g6].topic, _w2 = a[_g6].qos;
          if (typeof _y6 != "string")
            return e.destroy(new Error("Invalid subscriptions - invalid topic")), false;
          if (typeof _w2 != "number")
            return e.destroy(new Error("Invalid subscriptions - invalid qos")), false;
          if (i === 5) {
            if (typeof (a[_g6].nl || false) != "boolean")
              return e.destroy(new Error("Invalid subscriptions - invalid No Local")), false;
            if (typeof (a[_g6].rap || false) != "boolean")
              return e.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), false;
            var I = a[_g6].rh || 0;
            if (typeof I != "number" || I > 2)
              return e.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), false;
          }
          c += q.byteLength(_y6) + 2 + 1;
        }
      else
        return e.destroy(new Error("Invalid subscriptions")), false;
      qe("subscribe: writing to stream: %o", j.SUBSCRIBE_HEADER), e.write(j.SUBSCRIBE_HEADER[1][o ? 1 : 0][0]), De(e, c), Ie(e, s), h !== null && h.write();
      var d = true;
      var _iterator18 = _createForOfIteratorHelper(a), _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
          var _g7 = _step18.value;
          var _y7 = _g7.topic, _w3 = _g7.qos, _E5 = +_g7.nl, _S6 = +_g7.rap, _I = _g7.rh, C = void 0;
          yr(e, _y7), C = j.SUBSCRIBE_OPTIONS_QOS[_w3], i === 5 && (C |= _E5 ? j.SUBSCRIBE_OPTIONS_NL : 0, C |= _S6 ? j.SUBSCRIBE_OPTIONS_RAP : 0, C |= _I ? j.SUBSCRIBE_OPTIONS_RH[_I] : 0), d = e.write(q.from([C]));
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      return d;
    }
    function Ym(t, e, r) {
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.messageId, s = n.granted, a = n.properties, u = 0;
      if (typeof o != "number")
        return e.destroy(new Error("Invalid messageId")), false;
      if (u += 2, _typeof(s) == "object" && s.length)
        for (var _h2 = 0; _h2 < s.length; _h2 += 1) {
          if (typeof s[_h2] != "number")
            return e.destroy(new Error("Invalid qos vector")), false;
          u += 1;
        }
      else
        return e.destroy(new Error("Invalid qos vector")), false;
      var c = null;
      if (i === 5) {
        if (c = Si(e, a, r, u), !c)
          return false;
        u += c.length;
      }
      return e.write(j.SUBACK_HEADER), De(e, u), Ie(e, o), c !== null && c.write(), e.write(q.from(s));
    }
    function Jm(t, e, r) {
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.messageId, s = n.dup ? j.DUP_MASK : 0, a = n.unsubscriptions, u = n.properties, c = 0;
      if (typeof o != "number")
        return e.destroy(new Error("Invalid messageId")), false;
      if (c += 2, _typeof(a) == "object" && a.length)
        for (var _g8 = 0; _g8 < a.length; _g8 += 1) {
          if (typeof a[_g8] != "string")
            return e.destroy(new Error("Invalid unsubscriptions")), false;
          c += q.byteLength(a[_g8]) + 2;
        }
      else
        return e.destroy(new Error("Invalid unsubscriptions")), false;
      var h = null;
      if (i === 5) {
        if (h = Wt(e, u), !h)
          return false;
        c += h.length;
      }
      e.write(j.UNSUBSCRIBE_HEADER[1][s ? 1 : 0][0]), De(e, c), Ie(e, o), h !== null && h.write();
      var d = true;
      for (var _g9 = 0; _g9 < a.length; _g9++)
        d = yr(e, a[_g9]);
      return d;
    }
    function Xm(t, e, r) {
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.messageId, s = n.dup ? j.DUP_MASK : 0, a = n.granted, u = n.properties, c = n.cmd, h = 0, d = 2;
      if (typeof o != "number")
        return e.destroy(new Error("Invalid messageId")), false;
      if (i === 5)
        if (_typeof(a) == "object" && a.length)
          for (var _y8 = 0; _y8 < a.length; _y8 += 1) {
            if (typeof a[_y8] != "number")
              return e.destroy(new Error("Invalid qos vector")), false;
            d += 1;
          }
        else
          return e.destroy(new Error("Invalid qos vector")), false;
      var g = null;
      if (i === 5) {
        if (g = Si(e, u, r, d), !g)
          return false;
        d += g.length;
      }
      return e.write(j.ACKS[c][h][s][0]), De(e, d), Ie(e, o), g !== null && g.write(), i === 5 && e.write(q.from(a)), true;
    }
    function Zm(t, e, r) {
      return e.write(j.EMPTY[t.cmd]);
    }
    function e1(t, e, r) {
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.reasonCode, s = n.properties, a = i === 5 ? 1 : 0, u = null;
      if (i === 5) {
        if (u = Si(e, s, r, a), !u)
          return false;
        a += u.length;
      }
      return e.write(q.from([j.codes.disconnect << 4])), De(e, a), i === 5 && e.write(q.from([o])), u !== null && u.write(), true;
    }
    function t1(t, e, r) {
      var i = r ? r.protocolVersion : 4, n = t || {}, o = n.reasonCode, s = n.properties, a = i === 5 ? 1 : 0;
      i !== 5 && e.destroy(new Error("Invalid mqtt version for auth packet"));
      var u = Si(e, s, r, a);
      return u ? (a += u.length, e.write(q.from([j.codes.auth << 4])), De(e, a), e.write(q.from([o])), u !== null && u.write(), true) : false;
    }
    var Td = {};
    function De(t, e) {
      if (e > j.VARBYTEINT_MAX)
        return t.destroy(new Error("Invalid variable byte integer: ".concat(e))), false;
      var r = Td[e];
      return r || (r = Vo(e), e < 16384 && (Td[e] = r)), qe("writeVarByteInt: writing to stream: %o", r), t.write(r);
    }
    function yr(t, e) {
      var r = q.byteLength(e);
      return Ie(t, r), qe("writeString: %s", e), t.write(e, "utf8");
    }
    function Rd(t, e, r) {
      yr(t, e), yr(t, r);
    }
    function zo(t, e) {
      return qe("writeNumberCached: number: %d", e), qe("writeNumberCached: %o", Cn[e]), t.write(Cn[e]);
    }
    function r1(t, e) {
      var r = Fm(e);
      return qe("writeNumberGenerated: %o", r), t.write(r);
    }
    function i1(t, e) {
      var r = $m(e);
      return qe("write4ByteNumber: %o", r), t.write(r);
    }
    function Gr(t, e) {
      typeof e == "string" ? yr(t, e) : e ? (Ie(t, e.length), t.write(e)) : Ie(t, 0);
    }
    function Wt(t, e) {
      if (_typeof(e) != "object" || e.length != null)
        return {
          length: 1,
          write: function write() {
            Bd(t, {}, 0);
          }
        };
      var r = 0;
      function i(o, s) {
        var a = j.propertiesTypes[o], u = 0;
        switch (a) {
          case "byte": {
            if (typeof s != "boolean")
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + 1;
            break;
          }
          case "int8": {
            if (typeof s != "number" || s < 0 || s > 255)
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + 1;
            break;
          }
          case "binary": {
            if (s && s === null)
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + q.byteLength(s) + 2;
            break;
          }
          case "int16": {
            if (typeof s != "number" || s < 0 || s > 65535)
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + 2;
            break;
          }
          case "int32": {
            if (typeof s != "number" || s < 0 || s > 4294967295)
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + 4;
            break;
          }
          case "var": {
            if (typeof s != "number" || s < 0 || s > 268435455)
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + q.byteLength(Vo(s));
            break;
          }
          case "string": {
            if (typeof s != "string")
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += 1 + 2 + q.byteLength(s.toString());
            break;
          }
          case "pair": {
            if (_typeof(s) != "object")
              return t.destroy(new Error("Invalid ".concat(o, ": ").concat(s))), false;
            u += Object.getOwnPropertyNames(s).reduce(function(c, h) {
              var d = s[h];
              return Array.isArray(d) ? c += d.reduce(function(g, y) {
                return g += 1 + 2 + q.byteLength(h.toString()) + 2 + q.byteLength(y.toString()), g;
              }, 0) : c += 1 + 2 + q.byteLength(h.toString()) + 2 + q.byteLength(s[h].toString()), c;
            }, 0);
            break;
          }
          default:
            return t.destroy(new Error("Invalid property ".concat(o, ": ").concat(s))), false;
        }
        return u;
      }
      if (e)
        for (var _o7 in e) {
          var _s6 = 0, _a5 = 0, _u14 = e[_o7];
          if (Array.isArray(_u14))
            for (var _c7 = 0; _c7 < _u14.length; _c7++) {
              if (_a5 = i(_o7, _u14[_c7]), !_a5)
                return false;
              _s6 += _a5;
            }
          else {
            if (_a5 = i(_o7, _u14), !_a5)
              return false;
            _s6 = _a5;
          }
          if (!_s6)
            return false;
          r += _s6;
        }
      return {
        length: q.byteLength(Vo(r)) + r,
        write: function write() {
          Bd(t, e, r);
        }
      };
    }
    function Si(t, e, r, i) {
      var n = ["reasonString", "userProperties"], o = r && r.properties && r.properties.maximumPacketSize ? r.properties.maximumPacketSize : 0, s = Wt(t, e);
      if (o)
        for (; i + s.length > o; ) {
          var _a6 = n.shift();
          if (_a6 && e[_a6])
            delete e[_a6], s = Wt(t, e);
          else
            return false;
        }
      return s;
    }
    function Cd(t, e, r) {
      switch (j.propertiesTypes[e]) {
        case "byte": {
          t.write(q.from([j.properties[e]])), t.write(q.from([+r]));
          break;
        }
        case "int8": {
          t.write(q.from([j.properties[e]])), t.write(q.from([r]));
          break;
        }
        case "binary": {
          t.write(q.from([j.properties[e]])), Gr(t, r);
          break;
        }
        case "int16": {
          t.write(q.from([j.properties[e]])), Ie(t, r);
          break;
        }
        case "int32": {
          t.write(q.from([j.properties[e]])), i1(t, r);
          break;
        }
        case "var": {
          t.write(q.from([j.properties[e]])), De(t, r);
          break;
        }
        case "string": {
          t.write(q.from([j.properties[e]])), yr(t, r);
          break;
        }
        case "pair": {
          Object.getOwnPropertyNames(r).forEach(function(n) {
            var o = r[n];
            Array.isArray(o) ? o.forEach(function(s) {
              t.write(q.from([j.properties[e]])), Rd(t, n.toString(), s.toString());
            }) : (t.write(q.from([j.properties[e]])), Rd(t, n.toString(), o.toString()));
          });
          break;
        }
        default:
          return t.destroy(new Error("Invalid property ".concat(e, " value: ").concat(r))), false;
      }
    }
    function Bd(t, e, r) {
      De(t, r);
      for (var i in e)
        if (Object.prototype.hasOwnProperty.call(e, i) && e[i] !== null) {
          var _n8 = e[i];
          if (Array.isArray(_n8))
            for (var _o8 = 0; _o8 < _n8.length; _o8++)
              Cd(t, i, _n8[_o8]);
          else
            Cd(t, i, _n8);
        }
    }
    function kd(t) {
      return t ? t instanceof q ? t.length : q.byteLength(t) : 0;
    }
    function Pd(t) {
      return typeof t == "string" || t instanceof q;
    }
    xd.exports = Od;
  });
  var Ud = M(function(EO, Ld) {
    v();
    m();
    _();
    var n1 = Ko(), _ref34 = (ir(), X(rr)), s1 = _ref34.EventEmitter, _ref35 = (ye(), X(_e)), Md = _ref35.Buffer;
    function o1(t, e) {
      var r = new Go();
      return n1(t, r, e), r.concat();
    }
    var Go = /* @__PURE__ */ function(_s7) {
      function Go2() {
        var _this12;
        _classCallCheck(this, Go2);
        _this12 = _callSuper(this, Go2), _this12._array = new Array(20), _this12._i = 0;
        return _this12;
      }
      _inherits(Go2, _s7);
      return _createClass(Go2, [{
        key: "write",
        value: function write(e) {
          return this._array[this._i++] = e, true;
        }
      }, {
        key: "concat",
        value: function concat() {
          var e = 0, r = new Array(this._array.length), i = this._array, n = 0, o;
          for (o = 0; o < i.length && i[o] !== void 0; o++)
            typeof i[o] != "string" ? r[o] = i[o].length : r[o] = Md.byteLength(i[o]), e += r[o];
          var s = Md.allocUnsafe(e);
          for (o = 0; o < i.length && i[o] !== void 0; o++)
            typeof i[o] != "string" ? (i[o].copy(s, n), n += r[o]) : (s.write(i[o], n), n += r[o]);
          return s;
        }
      }, {
        key: "destroy",
        value: function destroy(e) {
          e && this.emit("error", e);
        }
      }]);
    }(s1);
    Ld.exports = o1;
  });
  var Nd = M(function(Pn) {
    v();
    m();
    _();
    Pn.parser = md().parser;
    Pn.generate = Ud();
    Pn.writeToStream = Ko();
  });
  var Jo = M(function(Yo) {
    v();
    m();
    _();
    Object.defineProperty(Yo, "__esModule", {
      value: true
    });
    var Qo = /* @__PURE__ */ function() {
      function Qo2() {
        _classCallCheck(this, Qo2);
        this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
      }
      return _createClass(Qo2, [{
        key: "allocate",
        value: function allocate() {
          var e = this.nextId++;
          return this.nextId === 65536 && (this.nextId = 1), e;
        }
      }, {
        key: "getLastAllocated",
        value: function getLastAllocated() {
          return this.nextId === 1 ? 65535 : this.nextId - 1;
        }
      }, {
        key: "register",
        value: function register(e) {
          return true;
        }
      }, {
        key: "deallocate",
        value: function deallocate(e) {
        }
      }, {
        key: "clear",
        value: function clear() {
        }
      }]);
    }();
    Yo.default = Qo;
  });
  var Dd = M(function(XO, qd) {
    v();
    m();
    _();
    qd.exports = a1;
    function Qr(t) {
      return t instanceof x ? x.from(t) : new t.constructor(t.buffer.slice(), t.byteOffset, t.length);
    }
    function a1(t) {
      if (t = t || {}, t.circles)
        return l1(t);
      return t.proto ? i : r;
      function e(n, o) {
        for (var s = Object.keys(n), a = new Array(s.length), u = 0; u < s.length; u++) {
          var c = s[u], h = n[c];
          _typeof(h) != "object" || h === null ? a[c] = h : h instanceof Date ? a[c] = new Date(h) : ArrayBuffer.isView(h) ? a[c] = Qr(h) : a[c] = o(h);
        }
        return a;
      }
      function r(n) {
        if (_typeof(n) != "object" || n === null)
          return n;
        if (n instanceof Date)
          return new Date(n);
        if (Array.isArray(n))
          return e(n, r);
        if (n instanceof Map)
          return new Map(e(Array.from(n), r));
        if (n instanceof Set)
          return new Set(e(Array.from(n), r));
        var o = {};
        for (var s in n)
          if (Object.hasOwnProperty.call(n, s) !== false) {
            var a = n[s];
            _typeof(a) != "object" || a === null ? o[s] = a : a instanceof Date ? o[s] = new Date(a) : a instanceof Map ? o[s] = new Map(e(Array.from(a), r)) : a instanceof Set ? o[s] = new Set(e(Array.from(a), r)) : ArrayBuffer.isView(a) ? o[s] = Qr(a) : o[s] = r(a);
          }
        return o;
      }
      function i(n) {
        if (_typeof(n) != "object" || n === null)
          return n;
        if (n instanceof Date)
          return new Date(n);
        if (Array.isArray(n))
          return e(n, i);
        if (n instanceof Map)
          return new Map(e(Array.from(n), i));
        if (n instanceof Set)
          return new Set(e(Array.from(n), i));
        var o = {};
        for (var s in n) {
          var a = n[s];
          _typeof(a) != "object" || a === null ? o[s] = a : a instanceof Date ? o[s] = new Date(a) : a instanceof Map ? o[s] = new Map(e(Array.from(a), i)) : a instanceof Set ? o[s] = new Set(e(Array.from(a), i)) : ArrayBuffer.isView(a) ? o[s] = Qr(a) : o[s] = i(a);
        }
        return o;
      }
    }
    function l1(t) {
      var e = [], r = [];
      return t.proto ? o : n;
      function i(s, a) {
        for (var u = Object.keys(s), c = new Array(u.length), h = 0; h < u.length; h++) {
          var d = u[h], g = s[d];
          if (_typeof(g) != "object" || g === null)
            c[d] = g;
          else if (g instanceof Date)
            c[d] = new Date(g);
          else if (ArrayBuffer.isView(g))
            c[d] = Qr(g);
          else {
            var y = e.indexOf(g);
            y !== -1 ? c[d] = r[y] : c[d] = a(g);
          }
        }
        return c;
      }
      function n(s) {
        if (_typeof(s) != "object" || s === null)
          return s;
        if (s instanceof Date)
          return new Date(s);
        if (Array.isArray(s))
          return i(s, n);
        if (s instanceof Map)
          return new Map(i(Array.from(s), n));
        if (s instanceof Set)
          return new Set(i(Array.from(s), n));
        var a = {};
        e.push(s), r.push(a);
        for (var u in s)
          if (Object.hasOwnProperty.call(s, u) !== false) {
            var c = s[u];
            if (_typeof(c) != "object" || c === null)
              a[u] = c;
            else if (c instanceof Date)
              a[u] = new Date(c);
            else if (c instanceof Map)
              a[u] = new Map(i(Array.from(c), n));
            else if (c instanceof Set)
              a[u] = new Set(i(Array.from(c), n));
            else if (ArrayBuffer.isView(c))
              a[u] = Qr(c);
            else {
              var h = e.indexOf(c);
              h !== -1 ? a[u] = r[h] : a[u] = n(c);
            }
          }
        return e.pop(), r.pop(), a;
      }
      function o(s) {
        if (_typeof(s) != "object" || s === null)
          return s;
        if (s instanceof Date)
          return new Date(s);
        if (Array.isArray(s))
          return i(s, o);
        if (s instanceof Map)
          return new Map(i(Array.from(s), o));
        if (s instanceof Set)
          return new Set(i(Array.from(s), o));
        var a = {};
        e.push(s), r.push(a);
        for (var u in s) {
          var c = s[u];
          if (_typeof(c) != "object" || c === null)
            a[u] = c;
          else if (c instanceof Date)
            a[u] = new Date(c);
          else if (c instanceof Map)
            a[u] = new Map(i(Array.from(c), o));
          else if (c instanceof Set)
            a[u] = new Set(i(Array.from(c), o));
          else if (ArrayBuffer.isView(c))
            a[u] = Qr(c);
          else {
            var h = e.indexOf(c);
            h !== -1 ? a[u] = r[h] : a[u] = o(c);
          }
        }
        return e.pop(), r.pop(), a;
      }
    }
  });
  var Fd = M(function(lk, jd) {
    v();
    m();
    _();
    jd.exports = Dd()();
  });
  var $d = M(function(Yr) {
    v();
    m();
    _();
    Object.defineProperty(Yr, "__esModule", {
      value: true
    });
    Yr.validateTopics = Yr.validateTopic = void 0;
    function Wd(t) {
      var e = t.split("/");
      for (var _r23 = 0; _r23 < e.length; _r23++)
        if (e[_r23] !== "+") {
          if (e[_r23] === "#")
            return _r23 === e.length - 1;
          if (e[_r23].indexOf("+") !== -1 || e[_r23].indexOf("#") !== -1)
            return false;
        }
      return true;
    }
    Yr.validateTopic = Wd;
    function u1(t) {
      if (t.length === 0)
        return "empty_topic_list";
      for (var e = 0; e < t.length; e++)
        if (!Wd(t[e]))
          return t[e];
      return null;
    }
    Yr.validateTopics = u1;
  });
  var ea = M(function(Zo) {
    v();
    m();
    _();
    Object.defineProperty(Zo, "__esModule", {
      value: true
    });
    var f1 = jt(), c1 = {
      objectMode: true
    }, h1 = {
      clean: true
    }, Xo = /* @__PURE__ */ function() {
      function Xo2(e) {
        _classCallCheck(this, Xo2);
        this.options = e || {}, this.options = Object.assign(Object.assign({}, h1), e), this._inflights = /* @__PURE__ */ new Map();
      }
      return _createClass(Xo2, [{
        key: "put",
        value: function put(e, r) {
          return this._inflights.set(e.messageId, e), r && r(), this;
        }
      }, {
        key: "createStream",
        value: function createStream() {
          var e = new f1.Readable(c1), r = [], i = false, n = 0;
          return this._inflights.forEach(function(o, s) {
            r.push(o);
          }), e._read = function() {
            !i && n < r.length ? e.push(r[n++]) : e.push(null);
          }, e.destroy = function(o) {
            if (!i)
              return i = true, setTimeout(function() {
                e.emit("close");
              }, 0), e;
          }, e;
        }
      }, {
        key: "del",
        value: function del(e, r) {
          var i = this._inflights.get(e.messageId);
          return i ? (this._inflights.delete(e.messageId), r(null, i)) : r && r(new Error("missing packet")), this;
        }
      }, {
        key: "get",
        value: function get(e, r) {
          var i = this._inflights.get(e.messageId);
          return i ? r(null, i) : r && r(new Error("missing packet")), this;
        }
      }, {
        key: "close",
        value: function close(e) {
          this.options.clean && (this._inflights = null), e && e();
        }
      }]);
    }();
    Zo.default = Xo;
  });
  var Vd = M(function(ta) {
    v();
    m();
    _();
    Object.defineProperty(ta, "__esModule", {
      value: true
    });
    var Hd = [0, 16, 128, 131, 135, 144, 145, 151, 153], d1 = function d12(t, e, r) {
      t.log("handlePublish: packet %o", e), r = _typeof(r) < "u" ? r : t.noop;
      var i = e.topic.toString(), n = e.payload, o = e.qos, s = e.messageId, a = t.options;
      if (t.options.protocolVersion === 5) {
        var _u15;
        if (e.properties && (_u15 = e.properties.topicAlias), _typeof(_u15) < "u")
          if (i.length === 0) {
            if (_u15 > 0 && _u15 <= 65535) {
              var _c8 = t.topicAliasRecv.getTopicByAlias(_u15);
              if (_c8)
                i = _c8, t.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", i, _u15);
              else {
                t.log("handlePublish :: unregistered topic alias. alias: %d", _u15), t.emit("error", new Error("Received unregistered Topic Alias"));
                return;
              }
            } else {
              t.log("handlePublish :: topic alias out of range. alias: %d", _u15), t.emit("error", new Error("Received Topic Alias is out of range"));
              return;
            }
          } else if (t.topicAliasRecv.put(i, _u15))
            t.log("handlePublish :: registered topic: %s - alias: %d", i, _u15);
          else {
            t.log("handlePublish :: topic alias out of range. alias: %d", _u15), t.emit("error", new Error("Received Topic Alias is out of range"));
            return;
          }
      }
      switch (t.log("handlePublish: qos %d", o), o) {
        case 2: {
          a.customHandleAcks(i, n, e, function(u, c) {
            if (typeof u == "number" && (c = u, u = null), u)
              return t.emit("error", u);
            if (Hd.indexOf(c) === -1)
              return t.emit("error", new Error("Wrong reason code for pubrec"));
            c ? t._sendPacket({
              cmd: "pubrec",
              messageId: s,
              reasonCode: c
            }, r) : t.incomingStore.put(e, function() {
              t._sendPacket({
                cmd: "pubrec",
                messageId: s
              }, r);
            });
          });
          break;
        }
        case 1: {
          a.customHandleAcks(i, n, e, function(u, c) {
            if (typeof u == "number" && (c = u, u = null), u)
              return t.emit("error", u);
            if (Hd.indexOf(c) === -1)
              return t.emit("error", new Error("Wrong reason code for puback"));
            c || t.emit("message", i, n, e), t.handleMessage(e, function(h) {
              if (h)
                return r && r(h);
              t._sendPacket({
                cmd: "puback",
                messageId: s,
                reasonCode: c
              }, r);
            });
          });
          break;
        }
        case 0:
          t.emit("message", i, n, e), t.handleMessage(e, r);
          break;
        default:
          t.log("handlePublish: unknown QoS. Doing nothing.");
          break;
      }
    };
    ta.default = d1;
  });
  var zd = M(function(Gk, p1) {
    p1.exports = {
      version: "5.5.4"
    };
  });
  var Jr = M(function(at) {
    v();
    m();
    _();
    Object.defineProperty(at, "__esModule", {
      value: true
    });
    at.MQTTJS_VERSION = at.nextTick = at.applyMixin = at.ErrorWithReasonCode = void 0;
    var ra = /* @__PURE__ */ function(_Error3) {
      function t(e, r) {
        var _this13;
        _classCallCheck(this, t);
        _this13 = _callSuper(this, t, [e]), _this13.code = r, Object.setPrototypeOf(_assertThisInitialized(_this13), t.prototype), Object.getPrototypeOf(_assertThisInitialized(_this13)).name = "ErrorWithReasonCode";
        return _this13;
      }
      _inherits(t, _Error3);
      return _createClass(t);
    }(/* @__PURE__ */ _wrapNativeSuper(Error));
    at.ErrorWithReasonCode = ra;
    function g1(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var i;
      var n = [e];
      for (; ; ) {
        var _o9 = n[0], _s8 = Object.getPrototypeOf(_o9);
        if (_s8 !== null && _s8 !== void 0 && _s8.prototype)
          n.unshift(_s8);
        else
          break;
      }
      for (var _i6 = 0, _n9 = n; _i6 < _n9.length; _i6++) {
        var _o10 = _n9[_i6];
        var _iterator19 = _createForOfIteratorHelper(Object.getOwnPropertyNames(_o10.prototype)), _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
            var _s9 = _step19.value;
            (r || _s9 !== "constructor") && Object.defineProperty(t.prototype, _s9, (i = Object.getOwnPropertyDescriptor(_o10.prototype, _s9)) !== null && i !== void 0 ? i : /* @__PURE__ */ Object.create(null));
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
    }
    at.applyMixin = g1;
    at.nextTick = typeof (B === null || B === void 0 ? void 0 : B.nextTick) == "function" ? B.nextTick : function(t) {
      setTimeout(t, 0);
    };
    at.MQTTJS_VERSION = zd().version;
  });
  var Ai = M(function(br) {
    v();
    m();
    _();
    Object.defineProperty(br, "__esModule", {
      value: true
    });
    br.ReasonCodes = void 0;
    br.ReasonCodes = {
      0: "",
      1: "Unacceptable protocol version",
      2: "Identifier rejected",
      3: "Server unavailable",
      4: "Bad username or password",
      5: "Not authorized",
      16: "No matching subscribers",
      17: "No subscription existed",
      128: "Unspecified error",
      129: "Malformed Packet",
      130: "Protocol Error",
      131: "Implementation specific error",
      132: "Unsupported Protocol Version",
      133: "Client Identifier not valid",
      134: "Bad User Name or Password",
      135: "Not authorized",
      136: "Server unavailable",
      137: "Server busy",
      138: "Banned",
      139: "Server shutting down",
      140: "Bad authentication method",
      141: "Keep Alive timeout",
      142: "Session taken over",
      143: "Topic Filter invalid",
      144: "Topic Name invalid",
      145: "Packet identifier in use",
      146: "Packet Identifier not found",
      147: "Receive Maximum exceeded",
      148: "Topic Alias invalid",
      149: "Packet too large",
      150: "Message rate too high",
      151: "Quota exceeded",
      152: "Administrative action",
      153: "Payload format invalid",
      154: "Retain not supported",
      155: "QoS not supported",
      156: "Use another server",
      157: "Server moved",
      158: "Shared Subscriptions not supported",
      159: "Connection rate exceeded",
      160: "Maximum connect time",
      161: "Subscription Identifiers not supported",
      162: "Wildcard Subscriptions not supported"
    };
    var y1 = function y12(t, e) {
      var r = e.messageId, i = e.cmd, n = null, o = t.outgoing[r] ? t.outgoing[r].cb : null, s;
      if (!o) {
        t.log("_handleAck :: Server sent an ack in error. Ignoring.");
        return;
      }
      switch (t.log("_handleAck :: packet type", i), i) {
        case "pubcomp":
        case "puback": {
          var _a7 = e.reasonCode;
          _a7 && _a7 > 0 && _a7 !== 16 ? (s = new Error("Publish error: ".concat(br.ReasonCodes[_a7])), s.code = _a7, t._removeOutgoingAndStoreMessage(r, function() {
            o(s, e);
          })) : t._removeOutgoingAndStoreMessage(r, o);
          break;
        }
        case "pubrec": {
          n = {
            cmd: "pubrel",
            qos: 2,
            messageId: r
          };
          var _a8 = e.reasonCode;
          _a8 && _a8 > 0 && _a8 !== 16 ? (s = new Error("Publish error: ".concat(br.ReasonCodes[_a8])), s.code = _a8, t._removeOutgoingAndStoreMessage(r, function() {
            o(s, e);
          })) : t._sendPacket(n);
          break;
        }
        case "suback": {
          delete t.outgoing[r], t.messageIdProvider.deallocate(r);
          var _a9 = e.granted;
          for (var _u16 = 0; _u16 < _a9.length; _u16++)
            if (_a9[_u16] & 128) {
              var _c9 = t.messageIdToTopic[r];
              _c9 && _c9.forEach(function(h) {
                delete t._resubscribeTopics[h];
              });
            }
          delete t.messageIdToTopic[r], t._invokeStoreProcessingQueue(), o(null, e);
          break;
        }
        case "unsuback": {
          delete t.outgoing[r], t.messageIdProvider.deallocate(r), t._invokeStoreProcessingQueue(), o(null);
          break;
        }
        default:
          t.emit("error", new Error("unrecognized packet type"));
      }
      t.disconnecting && Object.keys(t.outgoing).length === 0 && t.emit("outgoingEmpty");
    };
    br.default = y1;
  });
  var Gd = M(function(ia) {
    v();
    m();
    _();
    Object.defineProperty(ia, "__esModule", {
      value: true
    });
    var Kd = Jr(), b1 = Ai(), w1 = function w12(t, e) {
      var r = t.options, i = r.protocolVersion, n = i === 5 ? e.reasonCode : e.returnCode;
      if (i !== 5) {
        var _o11 = new Kd.ErrorWithReasonCode("Protocol error: Auth packets are only supported in MQTT 5. Your version:".concat(i), n);
        t.emit("error", _o11);
        return;
      }
      t.handleAuth(e, function(o, s) {
        if (o) {
          t.emit("error", o);
          return;
        }
        if (n === 24)
          t.reconnecting = false, t._sendPacket(s);
        else {
          var _a10 = new Kd.ErrorWithReasonCode("Connection refused: ".concat(b1.ReasonCodes[n]), n);
          t.emit("error", _a10);
        }
      });
    };
    ia.default = w1;
  });
  var Zd = M(function(kn) {
    var _t5, _l2, _l3, _c10, _p2, _g10, _B, _i7, _y9, _n11, _r24, _e4, _u17, _h3, _a11, _s10, _b2, _o12, _E6, _S7, _w4, _2, _I2, _f3, _t6_brand, _T, _A2, _M, _d6, _R2, _P, _L;
    v();
    m();
    _();
    Object.defineProperty(kn, "__esModule", {
      value: true
    });
    kn.LRUCache = void 0;
    var Ii = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && performance && typeof performance.now == "function" ? performance : Date, Yd = /* @__PURE__ */ new Set(), na = _typeof(B) == "object" && B ? B : {}, Jd = function Jd2(t2, e2, r, i) {
      typeof na.emitWarning == "function" ? na.emitWarning(t2, e2, r, i) : console.error("[".concat(r, "] ").concat(e2, ": ").concat(t2));
    }, On = globalThis.AbortController, Qd = globalThis.AbortSignal;
    if (_typeof(On) > "u") {
      var _na$env;
      Qd = /* @__PURE__ */ function() {
        function Qd2() {
          _classCallCheck(this, Qd2);
          _defineProperty(this, "onabort", void 0);
          _defineProperty(this, "_onabort", []);
          _defineProperty(this, "reason", void 0);
          _defineProperty(this, "aborted", false);
        }
        return _createClass(Qd2, [{
          key: "addEventListener",
          value: function addEventListener(i, n) {
            this._onabort.push(n);
          }
        }]);
      }(), On = /* @__PURE__ */ function() {
        function On2() {
          _classCallCheck(this, On2);
          _defineProperty(this, "signal", new Qd());
          e();
        }
        return _createClass(On2, [{
          key: "abort",
          value: function abort(i) {
            if (!this.signal.aborted) {
              var _this$signal$onabort, _this$signal;
              this.signal.reason = i, this.signal.aborted = true;
              var _iterator20 = _createForOfIteratorHelper(this.signal._onabort), _step20;
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                  var _n10 = _step20.value;
                  _n10(i);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
              (_this$signal$onabort = (_this$signal = this.signal).onabort) === null || _this$signal$onabort === void 0 || _this$signal$onabort.call(_this$signal, i);
            }
          }
        }]);
      }();
      var t = ((_na$env = na.env) === null || _na$env === void 0 ? void 0 : _na$env.LRU_CACHE_IGNORE_AC_WARNING) !== "1", e = function e2() {
        t && (t = false, Jd("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e2));
      };
    }
    var _1 = function _12(t2) {
      return !Yd.has(t2);
    }, $t = function $t2(t2) {
      return t2 && t2 === Math.floor(t2) && t2 > 0 && isFinite(t2);
    }, Xd = function Xd2(t2) {
      return $t(t2) ? t2 <= Math.pow(2, 8) ? Uint8Array : t2 <= Math.pow(2, 16) ? Uint16Array : t2 <= Math.pow(2, 32) ? Uint32Array : t2 <= Number.MAX_SAFE_INTEGER ? Xr : null : null;
    }, Xr = /* @__PURE__ */ function(_Array) {
      function Xr2(e2) {
        var _this14;
        _classCallCheck(this, Xr2);
        _this14 = _callSuper(this, Xr2, [e2]), _this14.fill(0);
        return _this14;
      }
      _inherits(Xr2, _Array);
      return _createClass(Xr2);
    }(/* @__PURE__ */ _wrapNativeSuper(Array)), sa = (_t5 = /* @__PURE__ */ function() {
      function t2(e2, r) {
        _classCallCheck(this, t2);
        _defineProperty(this, "heap", void 0);
        _defineProperty(this, "length", void 0);
        if (!_assertClassBrand(_t5, t2, _l2)._)
          throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new r(e2), this.length = 0;
      }
      return _createClass(t2, [{
        key: "push",
        value: function push(e2) {
          this.heap[this.length++] = e2;
        }
      }, {
        key: "pop",
        value: function pop() {
          return this.heap[--this.length];
        }
      }], [{
        key: "create",
        value: function create(e2) {
          var r = Xd(e2);
          if (!r)
            return [];
          _l2._ = _assertClassBrand(_t5, t2, true);
          var i = new t2(e2, r);
          return _l2._ = _assertClassBrand(_t5, t2, false), i;
        }
      }]);
    }(), _l2 = {
      _: false
    }, _t5), oa = (_l3 = /* @__PURE__ */ new WeakMap(), _c10 = /* @__PURE__ */ new WeakMap(), _p2 = /* @__PURE__ */ new WeakMap(), _g10 = /* @__PURE__ */ new WeakMap(), _B = /* @__PURE__ */ new WeakMap(), _i7 = /* @__PURE__ */ new WeakMap(), _y9 = /* @__PURE__ */ new WeakMap(), _n11 = /* @__PURE__ */ new WeakMap(), _r24 = /* @__PURE__ */ new WeakMap(), _e4 = /* @__PURE__ */ new WeakMap(), _u17 = /* @__PURE__ */ new WeakMap(), _h3 = /* @__PURE__ */ new WeakMap(), _a11 = /* @__PURE__ */ new WeakMap(), _s10 = /* @__PURE__ */ new WeakMap(), _b2 = /* @__PURE__ */ new WeakMap(), _o12 = /* @__PURE__ */ new WeakMap(), _E6 = /* @__PURE__ */ new WeakMap(), _S7 = /* @__PURE__ */ new WeakMap(), _w4 = /* @__PURE__ */ new WeakMap(), _2 = /* @__PURE__ */ new WeakMap(), _I2 = /* @__PURE__ */ new WeakMap(), _f3 = /* @__PURE__ */ new WeakMap(), _t6_brand = /* @__PURE__ */ new WeakSet(), _T = /* @__PURE__ */ new WeakMap(), _A2 = /* @__PURE__ */ new WeakMap(), _M = /* @__PURE__ */ new WeakMap(), _d6 = /* @__PURE__ */ new WeakMap(), _R2 = /* @__PURE__ */ new WeakMap(), _P = /* @__PURE__ */ new WeakMap(), _L = /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ function() {
      function t2(_e5) {
        _classCallCheck(this, t2);
        _classPrivateMethodInitSpec(this, _t6_brand);
        _classPrivateFieldInitSpec(this, _l3, void 0);
        _classPrivateFieldInitSpec(this, _c10, void 0);
        _classPrivateFieldInitSpec(this, _p2, void 0);
        _classPrivateFieldInitSpec(this, _g10, void 0);
        _classPrivateFieldInitSpec(this, _B, void 0);
        _defineProperty(this, "ttl", void 0);
        _defineProperty(this, "ttlResolution", void 0);
        _defineProperty(this, "ttlAutopurge", void 0);
        _defineProperty(this, "updateAgeOnGet", void 0);
        _defineProperty(this, "updateAgeOnHas", void 0);
        _defineProperty(this, "allowStale", void 0);
        _defineProperty(this, "noDisposeOnSet", void 0);
        _defineProperty(this, "noUpdateTTL", void 0);
        _defineProperty(this, "maxEntrySize", void 0);
        _defineProperty(this, "sizeCalculation", void 0);
        _defineProperty(this, "noDeleteOnFetchRejection", void 0);
        _defineProperty(this, "noDeleteOnStaleGet", void 0);
        _defineProperty(this, "allowStaleOnFetchAbort", void 0);
        _defineProperty(this, "allowStaleOnFetchRejection", void 0);
        _defineProperty(this, "ignoreFetchAbort", void 0);
        _classPrivateFieldInitSpec(this, _i7, void 0);
        _classPrivateFieldInitSpec(this, _y9, void 0);
        _classPrivateFieldInitSpec(this, _n11, void 0);
        _classPrivateFieldInitSpec(this, _r24, void 0);
        _classPrivateFieldInitSpec(this, _e4, void 0);
        _classPrivateFieldInitSpec(this, _u17, void 0);
        _classPrivateFieldInitSpec(this, _h3, void 0);
        _classPrivateFieldInitSpec(this, _a11, void 0);
        _classPrivateFieldInitSpec(this, _s10, void 0);
        _classPrivateFieldInitSpec(this, _b2, void 0);
        _classPrivateFieldInitSpec(this, _o12, void 0);
        _classPrivateFieldInitSpec(this, _E6, void 0);
        _classPrivateFieldInitSpec(this, _S7, void 0);
        _classPrivateFieldInitSpec(this, _w4, void 0);
        _classPrivateFieldInitSpec(this, _2, void 0);
        _classPrivateFieldInitSpec(this, _I2, void 0);
        _classPrivateFieldInitSpec(this, _f3, void 0);
        _classPrivateFieldInitSpec(this, _T, function() {
        });
        _classPrivateFieldInitSpec(this, _A2, function() {
        });
        _classPrivateFieldInitSpec(this, _M, function() {
        });
        _classPrivateFieldInitSpec(this, _d6, function() {
          return false;
        });
        _classPrivateFieldInitSpec(this, _R2, function(e2) {
        });
        _classPrivateFieldInitSpec(this, _P, function(e2, r, i) {
        });
        _classPrivateFieldInitSpec(this, _L, function(e2, r, i, n) {
          if (i || n)
            throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0;
        });
        var _e5$max = _e5.max, _r25 = _e5$max === void 0 ? 0 : _e5$max, _i8 = _e5.ttl, _e5$ttlResolution = _e5.ttlResolution, _n12 = _e5$ttlResolution === void 0 ? 1 : _e5$ttlResolution, _o13 = _e5.ttlAutopurge, _s11 = _e5.updateAgeOnGet, _a12 = _e5.updateAgeOnHas, _u18 = _e5.allowStale, _c11 = _e5.dispose, _h4 = _e5.disposeAfter, _d7 = _e5.noDisposeOnSet, _g11 = _e5.noUpdateTTL, _e5$maxSize = _e5.maxSize, _y10 = _e5$maxSize === void 0 ? 0 : _e5$maxSize, _e5$maxEntrySize = _e5.maxEntrySize, _w5 = _e5$maxEntrySize === void 0 ? 0 : _e5$maxEntrySize, _E7 = _e5.sizeCalculation, _S8 = _e5.fetchMethod, _I3 = _e5.noDeleteOnFetchRejection, _C2 = _e5.noDeleteOnStaleGet, _R3 = _e5.allowStaleOnFetchRejection, _U2 = _e5.allowStaleOnFetchAbort, N = _e5.ignoreFetchAbort;
        if (_r25 !== 0 && !$t(_r25))
          throw new TypeError("max option must be a nonnegative integer");
        var W = _r25 ? Xd(_r25) : Array;
        if (!W)
          throw new Error("invalid max value: " + _r25);
        if (_classPrivateFieldSet2(_l3, this, _r25), _classPrivateFieldSet2(_c10, this, _y10), this.maxEntrySize = _w5 || _classPrivateFieldGet2(_c10, this), this.sizeCalculation = _E7, this.sizeCalculation) {
          if (!_classPrivateFieldGet2(_c10, this) && !this.maxEntrySize)
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if (typeof this.sizeCalculation != "function")
            throw new TypeError("sizeCalculation set to non-function");
        }
        if (_S8 !== void 0 && typeof _S8 != "function")
          throw new TypeError("fetchMethod must be a function if specified");
        if (_classPrivateFieldSet2(_B, this, _S8), _classPrivateFieldSet2(_I2, this, !!_S8), _classPrivateFieldSet2(_n11, this, /* @__PURE__ */ new Map()), _classPrivateFieldSet2(_r24, this, new Array(_r25).fill(void 0)), _classPrivateFieldSet2(_e4, this, new Array(_r25).fill(void 0)), _classPrivateFieldSet2(_u17, this, new W(_r25)), _classPrivateFieldSet2(_h3, this, new W(_r25)), _classPrivateFieldSet2(_a11, this, 0), _classPrivateFieldSet2(_s10, this, 0), _classPrivateFieldSet2(_b2, this, sa.create(_r25)), _classPrivateFieldSet2(_i7, this, 0), _classPrivateFieldSet2(_y9, this, 0), typeof _c11 == "function" && _classPrivateFieldSet2(_p2, this, _c11), typeof _h4 == "function" ? (_classPrivateFieldSet2(_g10, this, _h4), _classPrivateFieldSet2(_o12, this, [])) : (_classPrivateFieldSet2(_g10, this, void 0), _classPrivateFieldSet2(_o12, this, void 0)), _classPrivateFieldSet2(_2, this, !!_classPrivateFieldGet2(_p2, this)), _classPrivateFieldSet2(_f3, this, !!_classPrivateFieldGet2(_g10, this)), this.noDisposeOnSet = !!_d7, this.noUpdateTTL = !!_g11, this.noDeleteOnFetchRejection = !!_I3, this.allowStaleOnFetchRejection = !!_R3, this.allowStaleOnFetchAbort = !!_U2, this.ignoreFetchAbort = !!N, this.maxEntrySize !== 0) {
          if (_classPrivateFieldGet2(_c10, this) !== 0 && !$t(_classPrivateFieldGet2(_c10, this)))
            throw new TypeError("maxSize must be a positive integer if specified");
          if (!$t(this.maxEntrySize))
            throw new TypeError("maxEntrySize must be a positive integer if specified");
          _assertClassBrand(_t6_brand, this, _q).call(this);
        }
        if (this.allowStale = !!_u18, this.noDeleteOnStaleGet = !!_C2, this.updateAgeOnGet = !!_s11, this.updateAgeOnHas = !!_a12, this.ttlResolution = $t(_n12) || _n12 === 0 ? _n12 : 1, this.ttlAutopurge = !!_o13, this.ttl = _i8 || 0, this.ttl) {
          if (!$t(this.ttl))
            throw new TypeError("ttl must be a positive integer if specified");
          _assertClassBrand(_t6_brand, this, _x32).call(this);
        }
        if (_classPrivateFieldGet2(_l3, this) === 0 && this.ttl === 0 && _classPrivateFieldGet2(_c10, this) === 0)
          throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !_classPrivateFieldGet2(_l3, this) && !_classPrivateFieldGet2(_c10, this)) {
          var K = "LRU_CACHE_UNBOUNDED";
          _1(K) && (Yd.add(K), Jd("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", K, t2));
        }
      }
      return _createClass(t2, [{
        key: "max",
        get: function get() {
          return _classPrivateFieldGet2(_l3, this);
        }
      }, {
        key: "maxSize",
        get: function get() {
          return _classPrivateFieldGet2(_c10, this);
        }
      }, {
        key: "calculatedSize",
        get: function get() {
          return _classPrivateFieldGet2(_y9, this);
        }
      }, {
        key: "size",
        get: function get() {
          return _classPrivateFieldGet2(_i7, this);
        }
      }, {
        key: "fetchMethod",
        get: function get() {
          return _classPrivateFieldGet2(_B, this);
        }
      }, {
        key: "dispose",
        get: function get() {
          return _classPrivateFieldGet2(_p2, this);
        }
      }, {
        key: "disposeAfter",
        get: function get() {
          return _classPrivateFieldGet2(_g10, this);
        }
      }, {
        key: "getRemainingTTL",
        value: function getRemainingTTL(e2) {
          return _classPrivateFieldGet2(_n11, this).has(e2) ? 1 / 0 : 0;
        }
      }, {
        key: "entries",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function entries() {
          var _iterator21, _step21, _e6;
          return _regeneratorRuntime().wrap(function entries$(_context31) {
            while (1)
              switch (_context31.prev = _context31.next) {
                case 0:
                  _iterator21 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _m2).call(this));
                  _context31.prev = 1;
                  _iterator21.s();
                case 3:
                  if ((_step21 = _iterator21.n()).done) {
                    _context31.next = 11;
                    break;
                  }
                  _e6 = _step21.value;
                  _context31.t0 = _classPrivateFieldGet2(_e4, this)[_e6] !== void 0 && _classPrivateFieldGet2(_r24, this)[_e6] !== void 0 && !_assertClassBrand(_t6_brand, this, _t7).call(this, _classPrivateFieldGet2(_e4, this)[_e6]);
                  if (!_context31.t0) {
                    _context31.next = 9;
                    break;
                  }
                  _context31.next = 9;
                  return [_classPrivateFieldGet2(_r24, this)[_e6], _classPrivateFieldGet2(_e4, this)[_e6]];
                case 9:
                  _context31.next = 3;
                  break;
                case 11:
                  _context31.next = 16;
                  break;
                case 13:
                  _context31.prev = 13;
                  _context31.t1 = _context31["catch"](1);
                  _iterator21.e(_context31.t1);
                case 16:
                  _context31.prev = 16;
                  _iterator21.f();
                  return _context31.finish(16);
                case 19:
                case "end":
                  return _context31.stop();
              }
          }, entries, this, [[1, 13, 16, 19]]);
        })
      }, {
        key: "rentries",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function rentries() {
          var _iterator22, _step22, _e7;
          return _regeneratorRuntime().wrap(function rentries$(_context32) {
            while (1)
              switch (_context32.prev = _context32.next) {
                case 0:
                  _iterator22 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _v2).call(this));
                  _context32.prev = 1;
                  _iterator22.s();
                case 3:
                  if ((_step22 = _iterator22.n()).done) {
                    _context32.next = 11;
                    break;
                  }
                  _e7 = _step22.value;
                  _context32.t0 = _classPrivateFieldGet2(_e4, this)[_e7] !== void 0 && _classPrivateFieldGet2(_r24, this)[_e7] !== void 0 && !_assertClassBrand(_t6_brand, this, _t7).call(this, _classPrivateFieldGet2(_e4, this)[_e7]);
                  if (!_context32.t0) {
                    _context32.next = 9;
                    break;
                  }
                  _context32.next = 9;
                  return [_classPrivateFieldGet2(_r24, this)[_e7], _classPrivateFieldGet2(_e4, this)[_e7]];
                case 9:
                  _context32.next = 3;
                  break;
                case 11:
                  _context32.next = 16;
                  break;
                case 13:
                  _context32.prev = 13;
                  _context32.t1 = _context32["catch"](1);
                  _iterator22.e(_context32.t1);
                case 16:
                  _context32.prev = 16;
                  _iterator22.f();
                  return _context32.finish(16);
                case 19:
                case "end":
                  return _context32.stop();
              }
          }, rentries, this, [[1, 13, 16, 19]]);
        })
      }, {
        key: "keys",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function keys() {
          var _iterator23, _step23, _e8, _r26;
          return _regeneratorRuntime().wrap(function keys$(_context33) {
            while (1)
              switch (_context33.prev = _context33.next) {
                case 0:
                  _iterator23 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _m2).call(this));
                  _context33.prev = 1;
                  _iterator23.s();
                case 3:
                  if ((_step23 = _iterator23.n()).done) {
                    _context33.next = 12;
                    break;
                  }
                  _e8 = _step23.value;
                  _r26 = _classPrivateFieldGet2(_r24, this)[_e8];
                  _context33.t0 = _r26 !== void 0 && !_assertClassBrand(_t6_brand, this, _t7).call(this, _classPrivateFieldGet2(_e4, this)[_e8]);
                  if (!_context33.t0) {
                    _context33.next = 10;
                    break;
                  }
                  _context33.next = 10;
                  return _r26;
                case 10:
                  _context33.next = 3;
                  break;
                case 12:
                  _context33.next = 17;
                  break;
                case 14:
                  _context33.prev = 14;
                  _context33.t1 = _context33["catch"](1);
                  _iterator23.e(_context33.t1);
                case 17:
                  _context33.prev = 17;
                  _iterator23.f();
                  return _context33.finish(17);
                case 20:
                case "end":
                  return _context33.stop();
              }
          }, keys, this, [[1, 14, 17, 20]]);
        })
      }, {
        key: "rkeys",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function rkeys() {
          var _iterator24, _step24, _e9, _r27;
          return _regeneratorRuntime().wrap(function rkeys$(_context34) {
            while (1)
              switch (_context34.prev = _context34.next) {
                case 0:
                  _iterator24 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _v2).call(this));
                  _context34.prev = 1;
                  _iterator24.s();
                case 3:
                  if ((_step24 = _iterator24.n()).done) {
                    _context34.next = 12;
                    break;
                  }
                  _e9 = _step24.value;
                  _r27 = _classPrivateFieldGet2(_r24, this)[_e9];
                  _context34.t0 = _r27 !== void 0 && !_assertClassBrand(_t6_brand, this, _t7).call(this, _classPrivateFieldGet2(_e4, this)[_e9]);
                  if (!_context34.t0) {
                    _context34.next = 10;
                    break;
                  }
                  _context34.next = 10;
                  return _r27;
                case 10:
                  _context34.next = 3;
                  break;
                case 12:
                  _context34.next = 17;
                  break;
                case 14:
                  _context34.prev = 14;
                  _context34.t1 = _context34["catch"](1);
                  _iterator24.e(_context34.t1);
                case 17:
                  _context34.prev = 17;
                  _iterator24.f();
                  return _context34.finish(17);
                case 20:
                case "end":
                  return _context34.stop();
              }
          }, rkeys, this, [[1, 14, 17, 20]]);
        })
      }, {
        key: "values",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function values() {
          var _iterator25, _step25, _e10;
          return _regeneratorRuntime().wrap(function values$(_context35) {
            while (1)
              switch (_context35.prev = _context35.next) {
                case 0:
                  _iterator25 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _m2).call(this));
                  _context35.prev = 1;
                  _iterator25.s();
                case 3:
                  if ((_step25 = _iterator25.n()).done) {
                    _context35.next = 11;
                    break;
                  }
                  _e10 = _step25.value;
                  _context35.t0 = _classPrivateFieldGet2(_e4, this)[_e10] !== void 0 && !_assertClassBrand(_t6_brand, this, _t7).call(this, _classPrivateFieldGet2(_e4, this)[_e10]);
                  if (!_context35.t0) {
                    _context35.next = 9;
                    break;
                  }
                  _context35.next = 9;
                  return _classPrivateFieldGet2(_e4, this)[_e10];
                case 9:
                  _context35.next = 3;
                  break;
                case 11:
                  _context35.next = 16;
                  break;
                case 13:
                  _context35.prev = 13;
                  _context35.t1 = _context35["catch"](1);
                  _iterator25.e(_context35.t1);
                case 16:
                  _context35.prev = 16;
                  _iterator25.f();
                  return _context35.finish(16);
                case 19:
                case "end":
                  return _context35.stop();
              }
          }, values, this, [[1, 13, 16, 19]]);
        })
      }, {
        key: "rvalues",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function rvalues() {
          var _iterator26, _step26, _e11;
          return _regeneratorRuntime().wrap(function rvalues$(_context36) {
            while (1)
              switch (_context36.prev = _context36.next) {
                case 0:
                  _iterator26 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _v2).call(this));
                  _context36.prev = 1;
                  _iterator26.s();
                case 3:
                  if ((_step26 = _iterator26.n()).done) {
                    _context36.next = 11;
                    break;
                  }
                  _e11 = _step26.value;
                  _context36.t0 = _classPrivateFieldGet2(_e4, this)[_e11] !== void 0 && !_assertClassBrand(_t6_brand, this, _t7).call(this, _classPrivateFieldGet2(_e4, this)[_e11]);
                  if (!_context36.t0) {
                    _context36.next = 9;
                    break;
                  }
                  _context36.next = 9;
                  return _classPrivateFieldGet2(_e4, this)[_e11];
                case 9:
                  _context36.next = 3;
                  break;
                case 11:
                  _context36.next = 16;
                  break;
                case 13:
                  _context36.prev = 13;
                  _context36.t1 = _context36["catch"](1);
                  _iterator26.e(_context36.t1);
                case 16:
                  _context36.prev = 16;
                  _iterator26.f();
                  return _context36.finish(16);
                case 19:
                case "end":
                  return _context36.stop();
              }
          }, rvalues, this, [[1, 13, 16, 19]]);
        })
      }, {
        key: Symbol.iterator,
        value: function value() {
          return this.entries();
        }
      }, {
        key: "find",
        value: function find(e2) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _iterator27 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _m2).call(this)), _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
              var i = _step27.value;
              var _n13 = _classPrivateFieldGet2(_e4, this)[i], _o14 = _assertClassBrand(_t6_brand, this, _t7).call(this, _n13) ? _n13.__staleWhileFetching : _n13;
              if (_o14 !== void 0 && e2(_o14, _classPrivateFieldGet2(_r24, this)[i], this))
                return this.get(_classPrivateFieldGet2(_r24, this)[i], r);
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }, {
        key: "forEach",
        value: function forEach(e2) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
          var _iterator28 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _m2).call(this)), _step28;
          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
              var i = _step28.value;
              var _n14 = _classPrivateFieldGet2(_e4, this)[i], _o15 = _assertClassBrand(_t6_brand, this, _t7).call(this, _n14) ? _n14.__staleWhileFetching : _n14;
              _o15 !== void 0 && e2.call(r, _o15, _classPrivateFieldGet2(_r24, this)[i], this);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
        }
      }, {
        key: "rforEach",
        value: function rforEach(e2) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
          var _iterator29 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _v2).call(this)), _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
              var i = _step29.value;
              var _n15 = _classPrivateFieldGet2(_e4, this)[i], _o16 = _assertClassBrand(_t6_brand, this, _t7).call(this, _n15) ? _n15.__staleWhileFetching : _n15;
              _o16 !== void 0 && e2.call(r, _o16, _classPrivateFieldGet2(_r24, this)[i], this);
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
        }
      }, {
        key: "purgeStale",
        value: function purgeStale() {
          var e2 = false;
          var _iterator30 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _v2).call(this, {
            allowStale: true
          })), _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
              var _r28 = _step30.value;
              _classPrivateFieldGet2(_d6, this).call(this, _r28) && (this.delete(_classPrivateFieldGet2(_r24, this)[_r28]), e2 = true);
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
          return e2;
        }
      }, {
        key: "dump",
        value: function dump() {
          var e2 = [];
          var _iterator31 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _m2).call(this, {
            allowStale: true
          })), _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
              var _r29 = _step31.value;
              var i = _classPrivateFieldGet2(_r24, this)[_r29], _n16 = _classPrivateFieldGet2(_e4, this)[_r29], _o17 = _assertClassBrand(_t6_brand, this, _t7).call(this, _n16) ? _n16.__staleWhileFetching : _n16;
              if (_o17 === void 0 || i === void 0)
                continue;
              var _s12 = {
                value: _o17
              };
              if (_classPrivateFieldGet2(_w4, this) && _classPrivateFieldGet2(_S7, this)) {
                _s12.ttl = _classPrivateFieldGet2(_w4, this)[_r29];
                var _a13 = Ii.now() - _classPrivateFieldGet2(_S7, this)[_r29];
                _s12.start = Math.floor(Date.now() - _a13);
              }
              _classPrivateFieldGet2(_E6, this) && (_s12.size = _classPrivateFieldGet2(_E6, this)[_r29]), e2.unshift([i, _s12]);
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          return e2;
        }
      }, {
        key: "load",
        value: function load(e2) {
          this.clear();
          var _iterator32 = _createForOfIteratorHelper(e2), _step32;
          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
              var _step32$value = _slicedToArray(_step32.value, 2), _r30 = _step32$value[0], i = _step32$value[1];
              if (i.start) {
                var _n17 = Date.now() - i.start;
                i.start = Ii.now() - _n17;
              }
              this.set(_r30, i.value, i);
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }
        }
      }, {
        key: "set",
        value: function set(e2, r) {
          var _this$i, _this$i2;
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (r === void 0)
            return this.delete(e2), this;
          var _i$ttl = i.ttl, n = _i$ttl === void 0 ? this.ttl : _i$ttl, o = i.start, _i$noDisposeOnSet = i.noDisposeOnSet, s = _i$noDisposeOnSet === void 0 ? this.noDisposeOnSet : _i$noDisposeOnSet, _i$sizeCalculation = i.sizeCalculation, a = _i$sizeCalculation === void 0 ? this.sizeCalculation : _i$sizeCalculation, u = i.status, _i$noUpdateTTL = i.noUpdateTTL, c = _i$noUpdateTTL === void 0 ? this.noUpdateTTL : _i$noUpdateTTL, h = _classPrivateFieldGet2(_L, this).call(this, e2, r, i.size || 0, a);
          if (this.maxEntrySize && h > this.maxEntrySize)
            return u && (u.set = "miss", u.maxEntrySizeExceeded = true), this.delete(e2), this;
          var d = _classPrivateFieldGet2(_i7, this) === 0 ? void 0 : _classPrivateFieldGet2(_n11, this).get(e2);
          if (d === void 0)
            d = _classPrivateFieldGet2(_i7, this) === 0 ? _classPrivateFieldGet2(_s10, this) : _classPrivateFieldGet2(_b2, this).length !== 0 ? _classPrivateFieldGet2(_b2, this).pop() : _classPrivateFieldGet2(_i7, this) === _classPrivateFieldGet2(_l3, this) ? _assertClassBrand(_t6_brand, this, _O2).call(this, false) : _classPrivateFieldGet2(_i7, this), _classPrivateFieldGet2(_r24, this)[d] = e2, _classPrivateFieldGet2(_e4, this)[d] = r, _classPrivateFieldGet2(_n11, this).set(e2, d), _classPrivateFieldGet2(_u17, this)[_classPrivateFieldGet2(_s10, this)] = d, _classPrivateFieldGet2(_h3, this)[d] = _classPrivateFieldGet2(_s10, this), _classPrivateFieldSet2(_s10, this, d), _classPrivateFieldSet2(_i7, this, (_this$i = _classPrivateFieldGet2(_i7, this), _this$i2 = _this$i++, _this$i)), _this$i2, _classPrivateFieldGet2(_P, this).call(this, d, h, u), u && (u.set = "add"), c = false;
          else {
            _assertClassBrand(_t6_brand, this, _C).call(this, d);
            var _g12 = _classPrivateFieldGet2(_e4, this)[d];
            if (r !== _g12) {
              var _classPrivateFieldGet4, _classPrivateFieldGet5;
              if (_classPrivateFieldGet2(_I2, this) && _assertClassBrand(_t6_brand, this, _t7).call(this, _g12)) {
                var _classPrivateFieldGet2$1, _classPrivateFieldGet3;
                _g12.__abortController.abort(new Error("replaced"));
                var _y11 = _g12.__staleWhileFetching;
                _y11 !== void 0 && !s && (_classPrivateFieldGet2(_2, this) && (_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_p2, this)) !== null && _classPrivateFieldGet2$1 !== void 0 && _classPrivateFieldGet2$1.call(this, _y11, e2, "set"), _classPrivateFieldGet2(_f3, this) && ((_classPrivateFieldGet3 = _classPrivateFieldGet2(_o12, this)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.push([_y11, e2, "set"])));
              } else
                s || (_classPrivateFieldGet2(_2, this) && (_classPrivateFieldGet4 = _classPrivateFieldGet2(_p2, this)) !== null && _classPrivateFieldGet4 !== void 0 && _classPrivateFieldGet4.call(this, _g12, e2, "set"), _classPrivateFieldGet2(_f3, this) && ((_classPrivateFieldGet5 = _classPrivateFieldGet2(_o12, this)) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.push([_g12, e2, "set"])));
              if (_classPrivateFieldGet2(_R2, this).call(this, d), _classPrivateFieldGet2(_P, this).call(this, d, h, u), _classPrivateFieldGet2(_e4, this)[d] = r, u) {
                u.set = "replace";
                var _y12 = _g12 && _assertClassBrand(_t6_brand, this, _t7).call(this, _g12) ? _g12.__staleWhileFetching : _g12;
                _y12 !== void 0 && (u.oldValue = _y12);
              }
            } else
              u && (u.set = "update");
          }
          if (n !== 0 && !_classPrivateFieldGet2(_w4, this) && _assertClassBrand(_t6_brand, this, _x32).call(this), _classPrivateFieldGet2(_w4, this) && (c || _classPrivateFieldGet2(_M, this).call(this, d, n, o), u && _classPrivateFieldGet2(_A2, this).call(this, u, d)), !s && _classPrivateFieldGet2(_f3, this) && _classPrivateFieldGet2(_o12, this)) {
            var _g13 = _classPrivateFieldGet2(_o12, this), _y13;
            for (; _y13 = _g13 === null || _g13 === void 0 ? void 0 : _g13.shift(); ) {
              var _classPrivateFieldGet6, _classPrivateFieldGet7;
              (_classPrivateFieldGet6 = _classPrivateFieldGet2(_g10, this)) === null || _classPrivateFieldGet6 === void 0 || (_classPrivateFieldGet7 = _classPrivateFieldGet6).call.apply(_classPrivateFieldGet7, [this].concat(_toConsumableArray(_y13)));
            }
          }
          return this;
        }
      }, {
        key: "pop",
        value: function pop() {
          try {
            for (; _classPrivateFieldGet2(_i7, this); ) {
              var _e12 = _classPrivateFieldGet2(_e4, this)[_classPrivateFieldGet2(_a11, this)];
              if (_assertClassBrand(_t6_brand, this, _O2).call(this, true), _assertClassBrand(_t6_brand, this, _t7).call(this, _e12)) {
                if (_e12.__staleWhileFetching)
                  return _e12.__staleWhileFetching;
              } else if (_e12 !== void 0)
                return _e12;
            }
          } finally {
            if (_classPrivateFieldGet2(_f3, this) && _classPrivateFieldGet2(_o12, this)) {
              var _e13 = _classPrivateFieldGet2(_o12, this), _r31;
              for (; _r31 = _e13 === null || _e13 === void 0 ? void 0 : _e13.shift(); ) {
                var _classPrivateFieldGet8, _classPrivateFieldGet9;
                (_classPrivateFieldGet8 = _classPrivateFieldGet2(_g10, this)) === null || _classPrivateFieldGet8 === void 0 || (_classPrivateFieldGet9 = _classPrivateFieldGet8).call.apply(_classPrivateFieldGet9, [this].concat(_toConsumableArray(_r31)));
              }
            }
          }
        }
      }, {
        key: "has",
        value: function has(e2) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _r$updateAgeOnHas = r.updateAgeOnHas, i = _r$updateAgeOnHas === void 0 ? this.updateAgeOnHas : _r$updateAgeOnHas, n = r.status, o = _classPrivateFieldGet2(_n11, this).get(e2);
          if (o !== void 0) {
            var _s13 = _classPrivateFieldGet2(_e4, this)[o];
            if (_assertClassBrand(_t6_brand, this, _t7).call(this, _s13) && _s13.__staleWhileFetching === void 0)
              return false;
            if (_classPrivateFieldGet2(_d6, this).call(this, o))
              n && (n.has = "stale", _classPrivateFieldGet2(_A2, this).call(this, n, o));
            else
              return i && _classPrivateFieldGet2(_T, this).call(this, o), n && (n.has = "hit", _classPrivateFieldGet2(_A2, this).call(this, n, o)), true;
          } else
            n && (n.has = "miss");
          return false;
        }
      }, {
        key: "peek",
        value: function peek(e2) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _r$allowStale = r.allowStale, i = _r$allowStale === void 0 ? this.allowStale : _r$allowStale, n = _classPrivateFieldGet2(_n11, this).get(e2);
          if (n !== void 0 && (i || !_classPrivateFieldGet2(_d6, this).call(this, n))) {
            var _o18 = _classPrivateFieldGet2(_e4, this)[n];
            return _assertClassBrand(_t6_brand, this, _t7).call(this, _o18) ? _o18.__staleWhileFetching : _o18;
          }
        }
      }, {
        key: "fetch",
        value: function() {
          var _fetch = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee30(e2) {
            var r, _r$allowStale2, i, _r$updateAgeOnGet, n, _r$noDeleteOnStaleGet, o, _r$ttl, s, _r$noDisposeOnSet, a, _r$size, u, _r$sizeCalculation, c, _r$noUpdateTTL, h, _r$noDeleteOnFetchRej, d, _r$allowStaleOnFetchR, g, _r$ignoreFetchAbort, y, _r$allowStaleOnFetchA, w, E, _r$forceRefresh, S, I, C, R, U, N, _N2, de, W, K, Q, _args37 = arguments;
            return _regeneratorRuntime().wrap(function _callee30$(_context37) {
              while (1)
                switch (_context37.prev = _context37.next) {
                  case 0:
                    r = _args37.length > 1 && _args37[1] !== void 0 ? _args37[1] : {};
                    _r$allowStale2 = r.allowStale, i = _r$allowStale2 === void 0 ? this.allowStale : _r$allowStale2, _r$updateAgeOnGet = r.updateAgeOnGet, n = _r$updateAgeOnGet === void 0 ? this.updateAgeOnGet : _r$updateAgeOnGet, _r$noDeleteOnStaleGet = r.noDeleteOnStaleGet, o = _r$noDeleteOnStaleGet === void 0 ? this.noDeleteOnStaleGet : _r$noDeleteOnStaleGet, _r$ttl = r.ttl, s = _r$ttl === void 0 ? this.ttl : _r$ttl, _r$noDisposeOnSet = r.noDisposeOnSet, a = _r$noDisposeOnSet === void 0 ? this.noDisposeOnSet : _r$noDisposeOnSet, _r$size = r.size, u = _r$size === void 0 ? 0 : _r$size, _r$sizeCalculation = r.sizeCalculation, c = _r$sizeCalculation === void 0 ? this.sizeCalculation : _r$sizeCalculation, _r$noUpdateTTL = r.noUpdateTTL, h = _r$noUpdateTTL === void 0 ? this.noUpdateTTL : _r$noUpdateTTL, _r$noDeleteOnFetchRej = r.noDeleteOnFetchRejection, d = _r$noDeleteOnFetchRej === void 0 ? this.noDeleteOnFetchRejection : _r$noDeleteOnFetchRej, _r$allowStaleOnFetchR = r.allowStaleOnFetchRejection, g = _r$allowStaleOnFetchR === void 0 ? this.allowStaleOnFetchRejection : _r$allowStaleOnFetchR, _r$ignoreFetchAbort = r.ignoreFetchAbort, y = _r$ignoreFetchAbort === void 0 ? this.ignoreFetchAbort : _r$ignoreFetchAbort, _r$allowStaleOnFetchA = r.allowStaleOnFetchAbort, w = _r$allowStaleOnFetchA === void 0 ? this.allowStaleOnFetchAbort : _r$allowStaleOnFetchA, E = r.context, _r$forceRefresh = r.forceRefresh, S = _r$forceRefresh === void 0 ? false : _r$forceRefresh, I = r.status, C = r.signal;
                    if (_classPrivateFieldGet2(_I2, this)) {
                      _context37.next = 4;
                      break;
                    }
                    return _context37.abrupt("return", (I && (I.fetch = "get"), this.get(e2, {
                      allowStale: i,
                      updateAgeOnGet: n,
                      noDeleteOnStaleGet: o,
                      status: I
                    })));
                  case 4:
                    R = {
                      allowStale: i,
                      updateAgeOnGet: n,
                      noDeleteOnStaleGet: o,
                      ttl: s,
                      noDisposeOnSet: a,
                      size: u,
                      sizeCalculation: c,
                      noUpdateTTL: h,
                      noDeleteOnFetchRejection: d,
                      allowStaleOnFetchRejection: g,
                      allowStaleOnFetchAbort: w,
                      ignoreFetchAbort: y,
                      status: I,
                      signal: C
                    }, U = _classPrivateFieldGet2(_n11, this).get(e2);
                    if (!(U === void 0)) {
                      _context37.next = 11;
                      break;
                    }
                    I && (I.fetch = "miss");
                    N = _assertClassBrand(_t6_brand, this, _k).call(this, e2, U, R, E);
                    return _context37.abrupt("return", N.__returned = N);
                  case 11:
                    _N2 = _classPrivateFieldGet2(_e4, this)[U];
                    if (!_assertClassBrand(_t6_brand, this, _t7).call(this, _N2)) {
                      _context37.next = 15;
                      break;
                    }
                    de = i && _N2.__staleWhileFetching !== void 0;
                    return _context37.abrupt("return", (I && (I.fetch = "inflight", de && (I.returnedStale = true)), de ? _N2.__staleWhileFetching : _N2.__returned = _N2));
                  case 15:
                    W = _classPrivateFieldGet2(_d6, this).call(this, U);
                    if (!(!S && !W)) {
                      _context37.next = 18;
                      break;
                    }
                    return _context37.abrupt("return", (I && (I.fetch = "hit"), _assertClassBrand(_t6_brand, this, _C).call(this, U), n && _classPrivateFieldGet2(_T, this).call(this, U), I && _classPrivateFieldGet2(_A2, this).call(this, I, U), _N2));
                  case 18:
                    K = _assertClassBrand(_t6_brand, this, _k).call(this, e2, U, R, E), Q = K.__staleWhileFetching !== void 0 && i;
                    return _context37.abrupt("return", (I && (I.fetch = W ? "stale" : "refresh", Q && W && (I.returnedStale = true)), Q ? K.__staleWhileFetching : K.__returned = K));
                  case 20:
                  case "end":
                    return _context37.stop();
                }
            }, _callee30, this);
          }));
          function fetch(_x33) {
            return _fetch.apply(this, arguments);
          }
          return fetch;
        }()
      }, {
        key: "get",
        value: function get(e2) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var _r$allowStale3 = r.allowStale, i = _r$allowStale3 === void 0 ? this.allowStale : _r$allowStale3, _r$updateAgeOnGet2 = r.updateAgeOnGet, n = _r$updateAgeOnGet2 === void 0 ? this.updateAgeOnGet : _r$updateAgeOnGet2, _r$noDeleteOnStaleGet2 = r.noDeleteOnStaleGet, o = _r$noDeleteOnStaleGet2 === void 0 ? this.noDeleteOnStaleGet : _r$noDeleteOnStaleGet2, s = r.status, a = _classPrivateFieldGet2(_n11, this).get(e2);
          if (a !== void 0) {
            var _u19 = _classPrivateFieldGet2(_e4, this)[a], _c12 = _assertClassBrand(_t6_brand, this, _t7).call(this, _u19);
            return s && _classPrivateFieldGet2(_A2, this).call(this, s, a), _classPrivateFieldGet2(_d6, this).call(this, a) ? (s && (s.get = "stale"), _c12 ? (s && i && _u19.__staleWhileFetching !== void 0 && (s.returnedStale = true), i ? _u19.__staleWhileFetching : void 0) : (o || this.delete(e2), s && i && (s.returnedStale = true), i ? _u19 : void 0)) : (s && (s.get = "hit"), _c12 ? _u19.__staleWhileFetching : (_assertClassBrand(_t6_brand, this, _C).call(this, a), n && _classPrivateFieldGet2(_T, this).call(this, a), _u19));
          } else
            s && (s.get = "miss");
        }
      }, {
        key: "delete",
        value: function _delete(e2) {
          var _classPrivateFieldGet12;
          var r = false;
          if (_classPrivateFieldGet2(_i7, this) !== 0) {
            var i = _classPrivateFieldGet2(_n11, this).get(e2);
            if (i !== void 0)
              if (r = true, _classPrivateFieldGet2(_i7, this) === 1)
                this.clear();
              else {
                var _this$i5, _this$i6, _classPrivateFieldGet10, _classPrivateFieldGet11;
                _classPrivateFieldGet2(_R2, this).call(this, i);
                var _n18 = _classPrivateFieldGet2(_e4, this)[i];
                _assertClassBrand(_t6_brand, this, _t7).call(this, _n18) ? _n18.__abortController.abort(new Error("deleted")) : (_classPrivateFieldGet2(_2, this) || _classPrivateFieldGet2(_f3, this)) && (_classPrivateFieldGet2(_2, this) && (_classPrivateFieldGet10 = _classPrivateFieldGet2(_p2, this)) !== null && _classPrivateFieldGet10 !== void 0 && _classPrivateFieldGet10.call(this, _n18, e2, "delete"), _classPrivateFieldGet2(_f3, this) && ((_classPrivateFieldGet11 = _classPrivateFieldGet2(_o12, this)) === null || _classPrivateFieldGet11 === void 0 ? void 0 : _classPrivateFieldGet11.push([_n18, e2, "delete"]))), _classPrivateFieldGet2(_n11, this).delete(e2), _classPrivateFieldGet2(_r24, this)[i] = void 0, _classPrivateFieldGet2(_e4, this)[i] = void 0, i === _classPrivateFieldGet2(_s10, this) ? _classPrivateFieldSet2(_s10, this, _classPrivateFieldGet2(_h3, this)[i]) : i === _classPrivateFieldGet2(_a11, this) ? _classPrivateFieldSet2(_a11, this, _classPrivateFieldGet2(_u17, this)[i]) : (_classPrivateFieldGet2(_u17, this)[_classPrivateFieldGet2(_h3, this)[i]] = _classPrivateFieldGet2(_u17, this)[i], _classPrivateFieldGet2(_h3, this)[_classPrivateFieldGet2(_u17, this)[i]] = _classPrivateFieldGet2(_h3, this)[i]), _classPrivateFieldSet2(_i7, this, (_this$i5 = _classPrivateFieldGet2(_i7, this), _this$i6 = _this$i5--, _this$i5)), _this$i6, _classPrivateFieldGet2(_b2, this).push(i);
              }
          }
          if (_classPrivateFieldGet2(_f3, this) && (_classPrivateFieldGet12 = _classPrivateFieldGet2(_o12, this)) !== null && _classPrivateFieldGet12 !== void 0 && _classPrivateFieldGet12.length) {
            var _i9 = _classPrivateFieldGet2(_o12, this), _n19;
            for (; _n19 = _i9 === null || _i9 === void 0 ? void 0 : _i9.shift(); ) {
              var _classPrivateFieldGet13, _classPrivateFieldGet14;
              (_classPrivateFieldGet13 = _classPrivateFieldGet2(_g10, this)) === null || _classPrivateFieldGet13 === void 0 || (_classPrivateFieldGet14 = _classPrivateFieldGet13).call.apply(_classPrivateFieldGet14, [this].concat(_toConsumableArray(_n19)));
            }
          }
          return r;
        }
      }, {
        key: "clear",
        value: function clear() {
          var _iterator33 = _createForOfIteratorHelper(_assertClassBrand(_t6_brand, this, _v2).call(this, {
            allowStale: true
          })), _step33;
          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
              var _e15 = _step33.value;
              var _r33 = _classPrivateFieldGet2(_e4, this)[_e15];
              if (_assertClassBrand(_t6_brand, this, _t7).call(this, _r33))
                _r33.__abortController.abort(new Error("deleted"));
              else {
                var _classPrivateFieldGet17, _classPrivateFieldGet18;
                var i = _classPrivateFieldGet2(_r24, this)[_e15];
                _classPrivateFieldGet2(_2, this) && (_classPrivateFieldGet17 = _classPrivateFieldGet2(_p2, this)) !== null && _classPrivateFieldGet17 !== void 0 && _classPrivateFieldGet17.call(this, _r33, i, "delete"), _classPrivateFieldGet2(_f3, this) && ((_classPrivateFieldGet18 = _classPrivateFieldGet2(_o12, this)) === null || _classPrivateFieldGet18 === void 0 ? void 0 : _classPrivateFieldGet18.push([_r33, i, "delete"]));
              }
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
          if (_classPrivateFieldGet2(_n11, this).clear(), _classPrivateFieldGet2(_e4, this).fill(void 0), _classPrivateFieldGet2(_r24, this).fill(void 0), _classPrivateFieldGet2(_w4, this) && _classPrivateFieldGet2(_S7, this) && (_classPrivateFieldGet2(_w4, this).fill(0), _classPrivateFieldGet2(_S7, this).fill(0)), _classPrivateFieldGet2(_E6, this) && _classPrivateFieldGet2(_E6, this).fill(0), _classPrivateFieldSet2(_a11, this, 0), _classPrivateFieldSet2(_s10, this, 0), _classPrivateFieldGet2(_b2, this).length = 0, _classPrivateFieldSet2(_y9, this, 0), _classPrivateFieldSet2(_i7, this, 0), _classPrivateFieldGet2(_f3, this) && _classPrivateFieldGet2(_o12, this)) {
            var _e14 = _classPrivateFieldGet2(_o12, this), _r32;
            for (; _r32 = _e14 === null || _e14 === void 0 ? void 0 : _e14.shift(); ) {
              var _classPrivateFieldGet15, _classPrivateFieldGet16;
              (_classPrivateFieldGet15 = _classPrivateFieldGet2(_g10, this)) === null || _classPrivateFieldGet15 === void 0 || (_classPrivateFieldGet16 = _classPrivateFieldGet15).call.apply(_classPrivateFieldGet16, [this].concat(_toConsumableArray(_r32)));
            }
          }
        }
      }], [{
        key: "unsafeExposeInternals",
        value: function unsafeExposeInternals(e2) {
          return {
            starts: _classPrivateFieldGet2(_S7, e2),
            ttls: _classPrivateFieldGet2(_w4, e2),
            sizes: _classPrivateFieldGet2(_E6, e2),
            keyMap: _classPrivateFieldGet2(_n11, e2),
            keyList: _classPrivateFieldGet2(_r24, e2),
            valList: _classPrivateFieldGet2(_e4, e2),
            next: _classPrivateFieldGet2(_u17, e2),
            prev: _classPrivateFieldGet2(_h3, e2),
            get head() {
              return _classPrivateFieldGet2(_a11, e2);
            },
            get tail() {
              return _classPrivateFieldGet2(_s10, e2);
            },
            free: _classPrivateFieldGet2(_b2, e2),
            isBackgroundFetch: function isBackgroundFetch(r) {
              return _assertClassBrand(_t6_brand, e2, _t7).call(e2, r);
            },
            backgroundFetch: function backgroundFetch(r, i, n, o) {
              return _assertClassBrand(_t6_brand, e2, _k).call(e2, r, i, n, o);
            },
            moveToTail: function moveToTail(r) {
              return _assertClassBrand(_t6_brand, e2, _C).call(e2, r);
            },
            indexes: function indexes(r) {
              return _assertClassBrand(_t6_brand, e2, _m2).call(e2, r);
            },
            rindexes: function rindexes(r) {
              return _assertClassBrand(_t6_brand, e2, _v2).call(e2, r);
            },
            isStale: function isStale(r) {
              return _classPrivateFieldGet2(_d6, e2).call(e2, r);
            }
          };
        }
      }]);
    }());
    function _x32() {
      var _this15 = this;
      var e2 = new Xr(_classPrivateFieldGet2(_l3, this)), r = new Xr(_classPrivateFieldGet2(_l3, this));
      _classPrivateFieldSet2(_w4, this, e2), _classPrivateFieldSet2(_S7, this, r), _classPrivateFieldSet2(_M, this, function(o, s) {
        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ii.now();
        if (r[o] = s !== 0 ? a : 0, e2[o] = s, s !== 0 && _this15.ttlAutopurge) {
          var _u20 = setTimeout(function() {
            _classPrivateFieldGet2(_d6, _this15).call(_this15, o) && _this15.delete(_classPrivateFieldGet2(_r24, _this15)[o]);
          }, s + 1);
          _u20.unref && _u20.unref();
        }
      }), _classPrivateFieldSet2(_T, this, function(o) {
        r[o] = e2[o] !== 0 ? Ii.now() : 0;
      }), _classPrivateFieldSet2(_A2, this, function(o, s) {
        if (e2[s]) {
          var _a14 = e2[s], _u21 = r[s];
          o.ttl = _a14, o.start = _u21, o.now = i || n();
          var _c13 = o.now - _u21;
          o.remainingTTL = _a14 - _c13;
        }
      });
      var i = 0, n = function n2() {
        var o = Ii.now();
        if (_this15.ttlResolution > 0) {
          i = o;
          var _s14 = setTimeout(function() {
            return i = 0;
          }, _this15.ttlResolution);
          _s14.unref && _s14.unref();
        }
        return o;
      };
      this.getRemainingTTL = function(o) {
        var s = _classPrivateFieldGet2(_n11, _this15).get(o);
        if (s === void 0)
          return 0;
        var a = e2[s], u = r[s];
        if (a === 0 || u === 0)
          return 1 / 0;
        var c = (i || n()) - u;
        return a - c;
      }, _classPrivateFieldSet2(_d6, this, function(o) {
        return e2[o] !== 0 && r[o] !== 0 && (i || n()) - r[o] > e2[o];
      });
    }
    function _q() {
      var _this16 = this;
      var e2 = new Xr(_classPrivateFieldGet2(_l3, this));
      _classPrivateFieldSet2(_y9, this, 0), _classPrivateFieldSet2(_E6, this, e2), _classPrivateFieldSet2(_R2, this, function(r) {
        _classPrivateFieldSet2(_y9, _this16, _classPrivateFieldGet2(_y9, _this16) - e2[r]), e2[r] = 0;
      }), _classPrivateFieldSet2(_L, this, function(r, i, n, o) {
        if (_assertClassBrand(_t6_brand, _this16, _t7).call(_this16, i))
          return 0;
        if (!$t(n))
          if (o) {
            if (typeof o != "function")
              throw new TypeError("sizeCalculation must be a function");
            if (n = o(i, r), !$t(n))
              throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          } else
            throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return n;
      }), _classPrivateFieldSet2(_P, this, function(r, i, n) {
        if (e2[r] = i, _classPrivateFieldGet2(_c10, _this16)) {
          var _o19 = _classPrivateFieldGet2(_c10, _this16) - e2[r];
          for (; _classPrivateFieldGet2(_y9, _this16) > _o19; )
            _assertClassBrand(_t6_brand, _this16, _O2).call(_this16, true);
        }
        _classPrivateFieldSet2(_y9, _this16, _classPrivateFieldGet2(_y9, _this16) + e2[r]), n && (n.entrySize = i, n.totalCalculatedSize = _classPrivateFieldGet2(_y9, _this16));
      });
    }
    function _m2() {
      var _this17 = this;
      var _ref36 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref36$allowStale = _ref36.allowStale, e2 = _ref36$allowStale === void 0 ? this.allowStale : _ref36$allowStale;
      return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee31() {
        var _r34;
        return _regeneratorRuntime().wrap(function _callee31$(_context38) {
          while (1)
            switch (_context38.prev = _context38.next) {
              case 0:
                if (!_classPrivateFieldGet2(_i7, _this17)) {
                  _context38.next = 13;
                  break;
                }
                _r34 = _classPrivateFieldGet2(_s10, _this17);
              case 2:
                _context38.t0 = !_assertClassBrand(_t6_brand, _this17, _U).call(_this17, _r34);
                if (_context38.t0) {
                  _context38.next = 9;
                  break;
                }
                _context38.t1 = e2 || !_classPrivateFieldGet2(_d6, _this17).call(_this17, _r34);
                if (!_context38.t1) {
                  _context38.next = 8;
                  break;
                }
                _context38.next = 8;
                return _r34;
              case 8:
                _context38.t0 = _r34 === _classPrivateFieldGet2(_a11, _this17);
              case 9:
                if (_context38.t0) {
                  _context38.next = 13;
                  break;
                }
                _r34 = _classPrivateFieldGet2(_h3, _this17)[_r34];
              case 11:
                _context38.next = 2;
                break;
              case 13:
              case "end":
                return _context38.stop();
            }
        }, _callee31);
      })();
    }
    function _v2() {
      var _this18 = this;
      var _ref37 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref37$allowStale = _ref37.allowStale, e2 = _ref37$allowStale === void 0 ? this.allowStale : _ref37$allowStale;
      return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee32() {
        var _r35;
        return _regeneratorRuntime().wrap(function _callee32$(_context39) {
          while (1)
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!_classPrivateFieldGet2(_i7, _this18)) {
                  _context39.next = 13;
                  break;
                }
                _r35 = _classPrivateFieldGet2(_a11, _this18);
              case 2:
                _context39.t0 = !_assertClassBrand(_t6_brand, _this18, _U).call(_this18, _r35);
                if (_context39.t0) {
                  _context39.next = 9;
                  break;
                }
                _context39.t1 = e2 || !_classPrivateFieldGet2(_d6, _this18).call(_this18, _r35);
                if (!_context39.t1) {
                  _context39.next = 8;
                  break;
                }
                _context39.next = 8;
                return _r35;
              case 8:
                _context39.t0 = _r35 === _classPrivateFieldGet2(_s10, _this18);
              case 9:
                if (_context39.t0) {
                  _context39.next = 13;
                  break;
                }
                _r35 = _classPrivateFieldGet2(_u17, _this18)[_r35];
              case 11:
                _context39.next = 2;
                break;
              case 13:
              case "end":
                return _context39.stop();
            }
        }, _callee32);
      })();
    }
    function _U(e2) {
      return e2 !== void 0 && _classPrivateFieldGet2(_n11, this).get(_classPrivateFieldGet2(_r24, this)[e2]) === e2;
    }
    function _O2(e2) {
      var _classPrivateFieldGet19, _classPrivateFieldGet20;
      var _this$i3, _this$i4;
      var r = _classPrivateFieldGet2(_a11, this), i = _classPrivateFieldGet2(_r24, this)[r], n = _classPrivateFieldGet2(_e4, this)[r];
      return _classPrivateFieldGet2(_I2, this) && _assertClassBrand(_t6_brand, this, _t7).call(this, n) ? n.__abortController.abort(new Error("evicted")) : (_classPrivateFieldGet2(_2, this) || _classPrivateFieldGet2(_f3, this)) && (_classPrivateFieldGet2(_2, this) && (_classPrivateFieldGet19 = _classPrivateFieldGet2(_p2, this)) !== null && _classPrivateFieldGet19 !== void 0 && _classPrivateFieldGet19.call(this, n, i, "evict"), _classPrivateFieldGet2(_f3, this) && ((_classPrivateFieldGet20 = _classPrivateFieldGet2(_o12, this)) === null || _classPrivateFieldGet20 === void 0 ? void 0 : _classPrivateFieldGet20.push([n, i, "evict"]))), _classPrivateFieldGet2(_R2, this).call(this, r), e2 && (_classPrivateFieldGet2(_r24, this)[r] = void 0, _classPrivateFieldGet2(_e4, this)[r] = void 0, _classPrivateFieldGet2(_b2, this).push(r)), _classPrivateFieldGet2(_i7, this) === 1 ? (_classPrivateFieldSet2(_a11, this, _classPrivateFieldSet2(_s10, this, 0)), _classPrivateFieldGet2(_b2, this).length = 0) : _classPrivateFieldSet2(_a11, this, _classPrivateFieldGet2(_u17, this)[r]), _classPrivateFieldGet2(_n11, this).delete(i), _classPrivateFieldSet2(_i7, this, (_this$i3 = _classPrivateFieldGet2(_i7, this), _this$i4 = _this$i3--, _this$i3)), _this$i4, r;
    }
    function _k(e2, r, i, n) {
      var _this19 = this;
      var o = r === void 0 ? void 0 : _classPrivateFieldGet2(_e4, this)[r];
      if (_assertClassBrand(_t6_brand, this, _t7).call(this, o))
        return o;
      var s = new On(), a = i.signal;
      a === null || a === void 0 || a.addEventListener("abort", function() {
        return s.abort(a.reason);
      }, {
        signal: s.signal
      });
      var u = {
        signal: s.signal,
        options: i,
        context: n
      }, c = function c2(E) {
        var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var I = s.signal.aborted, C = i.ignoreFetchAbort && E !== void 0;
        if (i.status && (I && !S ? (i.status.fetchAborted = true, i.status.fetchError = s.signal.reason, C && (i.status.fetchAbortIgnored = true)) : i.status.fetchResolved = true), I && !C && !S)
          return d(s.signal.reason);
        var R = y;
        return _classPrivateFieldGet2(_e4, _this19)[r] === y && (E === void 0 ? R.__staleWhileFetching ? _classPrivateFieldGet2(_e4, _this19)[r] = R.__staleWhileFetching : _this19.delete(e2) : (i.status && (i.status.fetchUpdated = true), _this19.set(e2, E, u.options))), E;
      }, h = function h2(E) {
        return i.status && (i.status.fetchRejected = true, i.status.fetchError = E), d(E);
      }, d = function d2(E) {
        var S = s.signal.aborted, I = S && i.allowStaleOnFetchAbort, C = I || i.allowStaleOnFetchRejection, R = C || i.noDeleteOnFetchRejection, U = y;
        if (_classPrivateFieldGet2(_e4, _this19)[r] === y && (!R || U.__staleWhileFetching === void 0 ? _this19.delete(e2) : I || (_classPrivateFieldGet2(_e4, _this19)[r] = U.__staleWhileFetching)), C)
          return i.status && U.__staleWhileFetching !== void 0 && (i.status.returnedStale = true), U.__staleWhileFetching;
        if (U.__returned === U)
          throw E;
      }, g = function g2(E, S) {
        var _classPrivateFieldGet21;
        var I = (_classPrivateFieldGet21 = _classPrivateFieldGet2(_B, _this19)) === null || _classPrivateFieldGet21 === void 0 ? void 0 : _classPrivateFieldGet21.call(_this19, e2, o, u);
        I && I instanceof Promise && I.then(function(C) {
          return E(C === void 0 ? void 0 : C);
        }, S), s.signal.addEventListener("abort", function() {
          (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (E(void 0), i.allowStaleOnFetchAbort && (E = function E2(C) {
            return c(C, true);
          }));
        });
      };
      i.status && (i.status.fetchDispatched = true);
      var y = new Promise(g).then(c, h), w = Object.assign(y, {
        __abortController: s,
        __staleWhileFetching: o,
        __returned: void 0
      });
      return r === void 0 ? (this.set(e2, w, _objectSpread2(_objectSpread2({}, u.options), {}, {
        status: void 0
      })), r = _classPrivateFieldGet2(_n11, this).get(e2)) : _classPrivateFieldGet2(_e4, this)[r] = w, w;
    }
    function _t7(e2) {
      if (!_classPrivateFieldGet2(_I2, this))
        return false;
      var r = e2;
      return !!r && r instanceof Promise && r.hasOwnProperty("__staleWhileFetching") && r.__abortController instanceof On;
    }
    function _N(e2, r) {
      _classPrivateFieldGet2(_h3, this)[r] = e2, _classPrivateFieldGet2(_u17, this)[e2] = r;
    }
    function _C(e2) {
      e2 !== _classPrivateFieldGet2(_s10, this) && (e2 === _classPrivateFieldGet2(_a11, this) ? _classPrivateFieldSet2(_a11, this, _classPrivateFieldGet2(_u17, this)[e2]) : _assertClassBrand(_t6_brand, this, _N).call(this, _classPrivateFieldGet2(_h3, this)[e2], _classPrivateFieldGet2(_u17, this)[e2]), _assertClassBrand(_t6_brand, this, _N).call(this, _classPrivateFieldGet2(_s10, this), e2), _classPrivateFieldSet2(_s10, this, e2));
    }
    kn.LRUCache = oa;
  });
  var lt = M(function(Ht) {
    v();
    m();
    _();
    Object.defineProperty(Ht, "t", {
      value: true
    });
    Ht.ContainerIterator = Ht.Container = Ht.Base = void 0;
    var aa = /* @__PURE__ */ function() {
      function aa2() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        _classCallCheck(this, aa2);
        this.iteratorType = e;
      }
      return _createClass(aa2, [{
        key: "equals",
        value: function equals(e) {
          return this.o === e.o;
        }
      }]);
    }();
    Ht.ContainerIterator = aa;
    var xn = /* @__PURE__ */ function() {
      function xn2() {
        _classCallCheck(this, xn2);
        this.i = 0;
      }
      return _createClass(xn2, [{
        key: "length",
        get: function get() {
          return this.i;
        }
      }, {
        key: "size",
        value: function size() {
          return this.i;
        }
      }, {
        key: "empty",
        value: function empty() {
          return this.i === 0;
        }
      }]);
    }();
    Ht.Base = xn;
    var la = /* @__PURE__ */ function(_xn) {
      function la2() {
        _classCallCheck(this, la2);
        return _callSuper(this, la2, arguments);
      }
      _inherits(la2, _xn);
      return _createClass(la2);
    }(xn);
    Ht.Container = la;
  });
  var ep = M(function(Mn) {
    v();
    m();
    _();
    Object.defineProperty(Mn, "t", {
      value: true
    });
    Mn.default = void 0;
    var m1 = lt(), ua = /* @__PURE__ */ function(_m1$Base) {
      function ua2() {
        var _this20;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, ua2);
        _this20 = _callSuper(this, ua2), _this20.S = [];
        var r = _this20;
        e.forEach(function(i) {
          r.push(i);
        });
        return _this20;
      }
      _inherits(ua2, _m1$Base);
      return _createClass(ua2, [{
        key: "clear",
        value: function clear() {
          this.i = 0, this.S = [];
        }
      }, {
        key: "push",
        value: function push(e) {
          return this.S.push(e), this.i += 1, this.i;
        }
      }, {
        key: "pop",
        value: function pop() {
          if (this.i !== 0)
            return this.i -= 1, this.S.pop();
        }
      }, {
        key: "top",
        value: function top() {
          return this.S[this.i - 1];
        }
      }]);
    }(m1.Base), v1 = ua;
    Mn.default = v1;
  });
  var tp = M(function(Ln) {
    v();
    m();
    _();
    Object.defineProperty(Ln, "t", {
      value: true
    });
    Ln.default = void 0;
    var E1 = lt(), fa = /* @__PURE__ */ function(_E1$Base) {
      function fa2() {
        var _this21;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, fa2);
        _this21 = _callSuper(this, fa2), _this21.j = 0, _this21.q = [];
        var r = _this21;
        e.forEach(function(i) {
          r.push(i);
        });
        return _this21;
      }
      _inherits(fa2, _E1$Base);
      return _createClass(fa2, [{
        key: "clear",
        value: function clear() {
          this.q = [], this.i = this.j = 0;
        }
      }, {
        key: "push",
        value: function push(e) {
          var r = this.q.length;
          if (this.j / r > 0.5 && this.j + this.i >= r && r > 4096) {
            var i = this.i;
            for (var _n20 = 0; _n20 < i; ++_n20)
              this.q[_n20] = this.q[this.j + _n20];
            this.j = 0, this.q[this.i] = e;
          } else
            this.q[this.j + this.i] = e;
          return ++this.i;
        }
      }, {
        key: "pop",
        value: function pop() {
          if (this.i === 0)
            return;
          var e = this.q[this.j++];
          return this.i -= 1, e;
        }
      }, {
        key: "front",
        value: function front() {
          if (this.i !== 0)
            return this.q[this.j];
        }
      }]);
    }(E1.Base), S1 = fa;
    Ln.default = S1;
  });
  var rp = M(function(Un) {
    v();
    m();
    _();
    Object.defineProperty(Un, "t", {
      value: true
    });
    Un.default = void 0;
    var A1 = lt(), ca = /* @__PURE__ */ function(_A1$Base) {
      function ca2() {
        var _this22;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(n2, o) {
          return n2 > o ? -1 : n2 < o ? 1 : 0;
        };
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        _classCallCheck(this, ca2);
        if (_this22 = _callSuper(this, ca2), _this22.v = r, Array.isArray(e))
          _this22.C = i ? _toConsumableArray(e) : e;
        else {
          _this22.C = [];
          var _o20 = _assertThisInitialized(_this22);
          e.forEach(function(s) {
            _o20.C.push(s);
          });
        }
        _this22.i = _this22.C.length;
        var n = _this22.i >> 1;
        for (var _o21 = _this22.i - 1 >> 1; _o21 >= 0; --_o21)
          _this22.k(_o21, n);
        return _assertThisInitialized(_this22);
      }
      _inherits(ca2, _A1$Base);
      return _createClass(ca2, [{
        key: "m",
        value: function m2(e) {
          var r = this.C[e];
          for (; e > 0; ) {
            var i = e - 1 >> 1, _n21 = this.C[i];
            if (this.v(_n21, r) <= 0)
              break;
            this.C[e] = _n21, e = i;
          }
          this.C[e] = r;
        }
      }, {
        key: "k",
        value: function k2(e, r) {
          var i = this.C[e];
          for (; e < r; ) {
            var _n22 = e << 1 | 1, _o22 = _n22 + 1, _s15 = this.C[_n22];
            if (_o22 < this.i && this.v(_s15, this.C[_o22]) > 0 && (_n22 = _o22, _s15 = this.C[_o22]), this.v(_s15, i) >= 0)
              break;
            this.C[e] = _s15, e = _n22;
          }
          this.C[e] = i;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.i = 0, this.C.length = 0;
        }
      }, {
        key: "push",
        value: function push(e) {
          this.C.push(e), this.m(this.i), this.i += 1;
        }
      }, {
        key: "pop",
        value: function pop() {
          if (this.i === 0)
            return;
          var e = this.C[0], r = this.C.pop();
          return this.i -= 1, this.i && (this.C[0] = r, this.k(0, this.i >> 1)), e;
        }
      }, {
        key: "top",
        value: function top() {
          return this.C[0];
        }
      }, {
        key: "find",
        value: function find(e) {
          return this.C.indexOf(e) >= 0;
        }
      }, {
        key: "remove",
        value: function remove(e) {
          var r = this.C.indexOf(e);
          return r < 0 ? false : (r === 0 ? this.pop() : r === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(r, 1, this.C.pop()), this.i -= 1, this.m(r), this.k(r, this.i >> 1)), true);
        }
      }, {
        key: "updateItem",
        value: function updateItem(e) {
          var r = this.C.indexOf(e);
          return r < 0 ? false : (this.m(r), this.k(r, this.i >> 1), true);
        }
      }, {
        key: "toArray",
        value: function toArray() {
          return _toConsumableArray(this.C);
        }
      }]);
    }(A1.Base), I1 = ca;
    Un.default = I1;
  });
  var qn = M(function(Nn) {
    v();
    m();
    _();
    Object.defineProperty(Nn, "t", {
      value: true
    });
    Nn.default = void 0;
    var T1 = lt(), ha = /* @__PURE__ */ function(_T1$Container) {
      function ha2() {
        _classCallCheck(this, ha2);
        return _callSuper(this, ha2, arguments);
      }
      _inherits(ha2, _T1$Container);
      return _createClass(ha2);
    }(T1.Container), R1 = ha;
    Nn.default = R1;
  });
  var ut = M(function(da) {
    v();
    m();
    _();
    Object.defineProperty(da, "t", {
      value: true
    });
    da.throwIteratorAccessError = C1;
    function C1() {
      throw new RangeError("Iterator access denied!");
    }
  });
  var ga = M(function(jn) {
    v();
    m();
    _();
    Object.defineProperty(jn, "t", {
      value: true
    });
    jn.RandomIterator = void 0;
    var B1 = lt(), Dn = ut(), pa = /* @__PURE__ */ function(_B1$ContainerIterator) {
      function pa2(e, r) {
        var _this23;
        _classCallCheck(this, pa2);
        _this23 = _callSuper(this, pa2, [r]), _this23.o = e, _this23.iteratorType === 0 ? (_this23.pre = function() {
          return this.o === 0 && (0, Dn.throwIteratorAccessError)(), this.o -= 1, this;
        }, _this23.next = function() {
          return this.o === this.container.size() && (0, Dn.throwIteratorAccessError)(), this.o += 1, this;
        }) : (_this23.pre = function() {
          return this.o === this.container.size() - 1 && (0, Dn.throwIteratorAccessError)(), this.o += 1, this;
        }, _this23.next = function() {
          return this.o === -1 && (0, Dn.throwIteratorAccessError)(), this.o -= 1, this;
        });
        return _this23;
      }
      _inherits(pa2, _B1$ContainerIterator);
      return _createClass(pa2, [{
        key: "pointer",
        get: function get() {
          return this.container.getElementByPos(this.o);
        },
        set: function set(e) {
          this.container.setElementByPos(this.o, e);
        }
      }]);
    }(B1.ContainerIterator);
    jn.RandomIterator = pa;
  });
  var ip = M(function(Fn) {
    v();
    m();
    _();
    Object.defineProperty(Fn, "t", {
      value: true
    });
    Fn.default = void 0;
    var P1 = k1(qn()), O1 = ga();
    function k1(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var wr = /* @__PURE__ */ function(_O1$RandomIterator) {
      function t(e, r, i) {
        var _this24;
        _classCallCheck(this, t);
        _this24 = _callSuper(this, t, [e, i]), _this24.container = r;
        return _this24;
      }
      _inherits(t, _O1$RandomIterator);
      return _createClass(t, [{
        key: "copy",
        value: function copy() {
          return new t(this.o, this.container, this.iteratorType);
        }
      }]);
    }(O1.RandomIterator), ya = /* @__PURE__ */ function(_P1$default) {
      function ya2() {
        var _this25;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        _classCallCheck(this, ya2);
        if (_this25 = _callSuper(this, ya2), Array.isArray(e))
          _this25.J = r ? _toConsumableArray(e) : e, _this25.i = e.length;
        else {
          _this25.J = [];
          var i = _assertThisInitialized(_this25);
          e.forEach(function(n) {
            i.pushBack(n);
          });
        }
        return _assertThisInitialized(_this25);
      }
      _inherits(ya2, _P1$default);
      return _createClass(ya2, [{
        key: "clear",
        value: function clear() {
          this.i = 0, this.J.length = 0;
        }
      }, {
        key: "begin",
        value: function begin() {
          return new wr(0, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new wr(this.i, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new wr(this.i - 1, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new wr(-1, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          return this.J[0];
        }
      }, {
        key: "back",
        value: function back() {
          return this.J[this.i - 1];
        }
      }, {
        key: "getElementByPos",
        value: function getElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          return this.J[e];
        }
      }, {
        key: "eraseElementByPos",
        value: function eraseElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          return this.J.splice(e, 1), this.i -= 1, this.i;
        }
      }, {
        key: "eraseElementByValue",
        value: function eraseElementByValue(e) {
          var r = 0;
          for (var i = 0; i < this.i; ++i)
            this.J[i] !== e && (this.J[r++] = this.J[i]);
          return this.i = this.J.length = r, this.i;
        }
      }, {
        key: "eraseElementByIterator",
        value: function eraseElementByIterator(e) {
          var r = e.o;
          return e = e.next(), this.eraseElementByPos(r), e;
        }
      }, {
        key: "pushBack",
        value: function pushBack(e) {
          return this.J.push(e), this.i += 1, this.i;
        }
      }, {
        key: "popBack",
        value: function popBack() {
          if (this.i !== 0)
            return this.i -= 1, this.J.pop();
        }
      }, {
        key: "setElementByPos",
        value: function setElementByPos(e, r) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          this.J[e] = r;
        }
      }, {
        key: "insert",
        value: function insert(e, r) {
          var _this$J;
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
          if (e < 0 || e > this.i)
            throw new RangeError();
          return (_this$J = this.J).splice.apply(_this$J, [e, 0].concat(_toConsumableArray(new Array(i).fill(r)))), this.i += i, this.i;
        }
      }, {
        key: "find",
        value: function find(e) {
          for (var _r36 = 0; _r36 < this.i; ++_r36)
            if (this.J[_r36] === e)
              return new wr(_r36, this);
          return this.end();
        }
      }, {
        key: "reverse",
        value: function reverse() {
          this.J.reverse();
        }
      }, {
        key: "unique",
        value: function unique() {
          var e = 1;
          for (var _r37 = 1; _r37 < this.i; ++_r37)
            this.J[_r37] !== this.J[_r37 - 1] && (this.J[e++] = this.J[_r37]);
          return this.i = this.J.length = e, this.i;
        }
      }, {
        key: "sort",
        value: function sort(e) {
          this.J.sort(e);
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          for (var _r38 = 0; _r38 < this.i; ++_r38)
            e(this.J[_r38], _r38, this);
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee33() {
            return _regeneratorRuntime().wrap(function _callee33$(_context40) {
              while (1)
                switch (_context40.prev = _context40.next) {
                  case 0:
                    return _context40.delegateYield(this.J, "t0", 1);
                  case 1:
                  case "end":
                    return _context40.stop();
                }
            }, _callee33, this);
          }).bind(this)();
        }
      }]);
    }(P1.default), x1 = ya;
    Fn.default = x1;
  });
  var np = M(function(Wn) {
    v();
    m();
    _();
    Object.defineProperty(Wn, "t", {
      value: true
    });
    Wn.default = void 0;
    var M1 = U1(qn()), L1 = lt(), _r = ut();
    function U1(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var mr = /* @__PURE__ */ function(_L1$ContainerIterator) {
      function t(e, r, i, n) {
        var _this26;
        _classCallCheck(this, t);
        _this26 = _callSuper(this, t, [n]), _this26.o = e, _this26.h = r, _this26.container = i, _this26.iteratorType === 0 ? (_this26.pre = function() {
          return this.o.L === this.h && (0, _r.throwIteratorAccessError)(), this.o = this.o.L, this;
        }, _this26.next = function() {
          return this.o === this.h && (0, _r.throwIteratorAccessError)(), this.o = this.o.B, this;
        }) : (_this26.pre = function() {
          return this.o.B === this.h && (0, _r.throwIteratorAccessError)(), this.o = this.o.B, this;
        }, _this26.next = function() {
          return this.o === this.h && (0, _r.throwIteratorAccessError)(), this.o = this.o.L, this;
        });
        return _this26;
      }
      _inherits(t, _L1$ContainerIterator);
      return _createClass(t, [{
        key: "pointer",
        get: function get() {
          return this.o === this.h && (0, _r.throwIteratorAccessError)(), this.o.l;
        },
        set: function set(e) {
          this.o === this.h && (0, _r.throwIteratorAccessError)(), this.o.l = e;
        }
      }, {
        key: "copy",
        value: function copy() {
          return new t(this.o, this.h, this.container, this.iteratorType);
        }
      }]);
    }(L1.ContainerIterator), ba = /* @__PURE__ */ function(_M1$default) {
      function ba2() {
        var _this27;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, ba2);
        _this27 = _callSuper(this, ba2), _this27.h = {}, _this27.p = _this27._ = _this27.h.L = _this27.h.B = _this27.h;
        var r = _this27;
        e.forEach(function(i) {
          r.pushBack(i);
        });
        return _this27;
      }
      _inherits(ba2, _M1$default);
      return _createClass(ba2, [{
        key: "V",
        value: function V(e) {
          var r = e.L, i = e.B;
          r.B = i, i.L = r, e === this.p && (this.p = i), e === this._ && (this._ = r), this.i -= 1;
        }
      }, {
        key: "G",
        value: function G(e, r) {
          var i = r.B, n = {
            l: e,
            L: r,
            B: i
          };
          r.B = n, i.L = n, r === this.h && (this.p = n), i === this.h && (this._ = n), this.i += 1;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
        }
      }, {
        key: "begin",
        value: function begin() {
          return new mr(this.p, this.h, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new mr(this.h, this.h, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new mr(this._, this.h, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new mr(this.h, this.h, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          return this.p.l;
        }
      }, {
        key: "back",
        value: function back() {
          return this._.l;
        }
      }, {
        key: "getElementByPos",
        value: function getElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r = this.p;
          for (; e--; )
            r = r.B;
          return r.l;
        }
      }, {
        key: "eraseElementByPos",
        value: function eraseElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r = this.p;
          for (; e--; )
            r = r.B;
          return this.V(r), this.i;
        }
      }, {
        key: "eraseElementByValue",
        value: function eraseElementByValue(e) {
          var r = this.p;
          for (; r !== this.h; )
            r.l === e && this.V(r), r = r.B;
          return this.i;
        }
      }, {
        key: "eraseElementByIterator",
        value: function eraseElementByIterator(e) {
          var r = e.o;
          return r === this.h && (0, _r.throwIteratorAccessError)(), e = e.next(), this.V(r), e;
        }
      }, {
        key: "pushBack",
        value: function pushBack(e) {
          return this.G(e, this._), this.i;
        }
      }, {
        key: "popBack",
        value: function popBack() {
          if (this.i === 0)
            return;
          var e = this._.l;
          return this.V(this._), e;
        }
      }, {
        key: "pushFront",
        value: function pushFront(e) {
          return this.G(e, this.h), this.i;
        }
      }, {
        key: "popFront",
        value: function popFront() {
          if (this.i === 0)
            return;
          var e = this.p.l;
          return this.V(this.p), e;
        }
      }, {
        key: "setElementByPos",
        value: function setElementByPos(e, r) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var i = this.p;
          for (; e--; )
            i = i.B;
          i.l = r;
        }
      }, {
        key: "insert",
        value: function insert(e, r) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
          if (e < 0 || e > this.i)
            throw new RangeError();
          if (i <= 0)
            return this.i;
          if (e === 0)
            for (; i--; )
              this.pushFront(r);
          else if (e === this.i)
            for (; i--; )
              this.pushBack(r);
          else {
            var _n23 = this.p;
            for (var _s16 = 1; _s16 < e; ++_s16)
              _n23 = _n23.B;
            var _o23 = _n23.B;
            for (this.i += i; i--; )
              _n23.B = {
                l: r,
                L: _n23
              }, _n23.B.L = _n23, _n23 = _n23.B;
            _n23.B = _o23, _o23.L = _n23;
          }
          return this.i;
        }
      }, {
        key: "find",
        value: function find(e) {
          var r = this.p;
          for (; r !== this.h; ) {
            if (r.l === e)
              return new mr(r, this.h, this);
            r = r.B;
          }
          return this.end();
        }
      }, {
        key: "reverse",
        value: function reverse() {
          if (this.i <= 1)
            return;
          var e = this.p, r = this._, i = 0;
          for (; i << 1 < this.i; ) {
            var _n24 = e.l;
            e.l = r.l, r.l = _n24, e = e.B, r = r.L, i += 1;
          }
        }
      }, {
        key: "unique",
        value: function unique() {
          if (this.i <= 1)
            return this.i;
          var e = this.p;
          for (; e !== this.h; ) {
            var _r39 = e;
            for (; _r39.B !== this.h && _r39.l === _r39.B.l; )
              _r39 = _r39.B, this.i -= 1;
            e.B = _r39.B, e.B.L = e, e = e.B;
          }
          return this.i;
        }
      }, {
        key: "sort",
        value: function sort(e) {
          if (this.i <= 1)
            return;
          var r = [];
          this.forEach(function(n) {
            r.push(n);
          }), r.sort(e);
          var i = this.p;
          r.forEach(function(n) {
            i.l = n, i = i.B;
          });
        }
      }, {
        key: "merge",
        value: function merge(e) {
          var r = this;
          if (this.i === 0)
            e.forEach(function(i2) {
              r.pushBack(i2);
            });
          else {
            var i = this.p;
            e.forEach(function(n) {
              for (; i !== r.h && i.l <= n; )
                i = i.B;
              r.G(n, i.L);
            });
          }
          return this.i;
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          var r = this.p, i = 0;
          for (; r !== this.h; )
            e(r.l, i++, this), r = r.B;
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee34() {
            var e;
            return _regeneratorRuntime().wrap(function _callee34$(_context41) {
              while (1)
                switch (_context41.prev = _context41.next) {
                  case 0:
                    if (!(this.i === 0)) {
                      _context41.next = 2;
                      break;
                    }
                    return _context41.abrupt("return");
                  case 2:
                    e = this.p;
                  case 3:
                    if (!(e !== this.h)) {
                      _context41.next = 9;
                      break;
                    }
                    _context41.next = 6;
                    return e.l;
                  case 6:
                    e = e.B;
                  case 7:
                    _context41.next = 3;
                    break;
                  case 9:
                  case "end":
                    return _context41.stop();
                }
            }, _callee34, this);
          }).bind(this)();
        }
      }]);
    }(M1.default), N1 = ba;
    Wn.default = N1;
  });
  var sp = M(function($n) {
    v();
    m();
    _();
    Object.defineProperty($n, "t", {
      value: true
    });
    $n.default = void 0;
    var q1 = j1(qn()), D1 = ga();
    function j1(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var vr = /* @__PURE__ */ function(_D1$RandomIterator) {
      function t(e, r, i) {
        var _this28;
        _classCallCheck(this, t);
        _this28 = _callSuper(this, t, [e, i]), _this28.container = r;
        return _this28;
      }
      _inherits(t, _D1$RandomIterator);
      return _createClass(t, [{
        key: "copy",
        value: function copy() {
          return new t(this.o, this.container, this.iteratorType);
        }
      }]);
    }(D1.RandomIterator), wa = /* @__PURE__ */ function(_q1$default) {
      function wa2() {
        var _this29;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4096;
        _classCallCheck(this, wa2);
        _this29 = _callSuper(this, wa2), _this29.j = 0, _this29.D = 0, _this29.R = 0, _this29.N = 0, _this29.P = 0, _this29.A = [];
        var i = function() {
          if (typeof e.length == "number")
            return e.length;
          if (typeof e.size == "number")
            return e.size;
          if (typeof e.size == "function")
            return e.size();
          throw new TypeError("Cannot get the length or size of the container");
        }();
        _this29.F = r, _this29.P = Math.max(Math.ceil(i / _this29.F), 1);
        for (var _s17 = 0; _s17 < _this29.P; ++_s17)
          _this29.A.push(new Array(_this29.F));
        var n = Math.ceil(i / _this29.F);
        _this29.j = _this29.R = (_this29.P >> 1) - (n >> 1), _this29.D = _this29.N = _this29.F - i % _this29.F >> 1;
        var o = _this29;
        e.forEach(function(s) {
          o.pushBack(s);
        });
        return _this29;
      }
      _inherits(wa2, _q1$default);
      return _createClass(wa2, [{
        key: "T",
        value: function T() {
          var e = [], r = Math.max(this.P >> 1, 1);
          for (var i = 0; i < r; ++i)
            e[i] = new Array(this.F);
          for (var _i10 = this.j; _i10 < this.P; ++_i10)
            e[e.length] = this.A[_i10];
          for (var _i11 = 0; _i11 < this.R; ++_i11)
            e[e.length] = this.A[_i11];
          e[e.length] = _toConsumableArray(this.A[this.R]), this.j = r, this.R = e.length - 1;
          for (var _i12 = 0; _i12 < r; ++_i12)
            e[e.length] = new Array(this.F);
          this.A = e, this.P = e.length;
        }
      }, {
        key: "O",
        value: function O(e) {
          var r = this.D + e + 1, i = r % this.F, n = i - 1, o = this.j + (r - i) / this.F;
          return i === 0 && (o -= 1), o %= this.P, n < 0 && (n += this.F), {
            curNodeBucketIndex: o,
            curNodePointerIndex: n
          };
        }
      }, {
        key: "clear",
        value: function clear() {
          this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1;
        }
      }, {
        key: "begin",
        value: function begin() {
          return new vr(0, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new vr(this.i, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new vr(this.i - 1, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new vr(-1, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          if (this.i !== 0)
            return this.A[this.j][this.D];
        }
      }, {
        key: "back",
        value: function back() {
          if (this.i !== 0)
            return this.A[this.R][this.N];
        }
      }, {
        key: "pushBack",
        value: function pushBack(e) {
          return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = e, this.i;
        }
      }, {
        key: "popBack",
        value: function popBack() {
          if (this.i === 0)
            return;
          var e = this.A[this.R][this.N];
          return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, e;
        }
      }, {
        key: "pushFront",
        value: function pushFront(e) {
          return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = e, this.i;
        }
      }, {
        key: "popFront",
        value: function popFront() {
          if (this.i === 0)
            return;
          var e = this.A[this.j][this.D];
          return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, e;
        }
      }, {
        key: "getElementByPos",
        value: function getElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var _this$O = this.O(e), r = _this$O.curNodeBucketIndex, i = _this$O.curNodePointerIndex;
          return this.A[r][i];
        }
      }, {
        key: "setElementByPos",
        value: function setElementByPos(e, r) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var _this$O2 = this.O(e), i = _this$O2.curNodeBucketIndex, n = _this$O2.curNodePointerIndex;
          this.A[i][n] = r;
        }
      }, {
        key: "insert",
        value: function insert(e, r) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
          if (e < 0 || e > this.i)
            throw new RangeError();
          if (e === 0)
            for (; i--; )
              this.pushFront(r);
          else if (e === this.i)
            for (; i--; )
              this.pushBack(r);
          else {
            var _n25 = [];
            for (var _o24 = e; _o24 < this.i; ++_o24)
              _n25.push(this.getElementByPos(_o24));
            this.cut(e - 1);
            for (var _o25 = 0; _o25 < i; ++_o25)
              this.pushBack(r);
            for (var _o26 = 0; _o26 < _n25.length; ++_o26)
              this.pushBack(_n25[_o26]);
          }
          return this.i;
        }
      }, {
        key: "cut",
        value: function cut(e) {
          if (e < 0)
            return this.clear(), 0;
          var _this$O3 = this.O(e), r = _this$O3.curNodeBucketIndex, i = _this$O3.curNodePointerIndex;
          return this.R = r, this.N = i, this.i = e + 1, this.i;
        }
      }, {
        key: "eraseElementByPos",
        value: function eraseElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          if (e === 0)
            this.popFront();
          else if (e === this.i - 1)
            this.popBack();
          else {
            var _r40 = [];
            for (var _n26 = e + 1; _n26 < this.i; ++_n26)
              _r40.push(this.getElementByPos(_n26));
            this.cut(e), this.popBack();
            var i = this;
            _r40.forEach(function(n) {
              i.pushBack(n);
            });
          }
          return this.i;
        }
      }, {
        key: "eraseElementByValue",
        value: function eraseElementByValue(e) {
          if (this.i === 0)
            return 0;
          var r = [];
          for (var _n27 = 0; _n27 < this.i; ++_n27) {
            var _o27 = this.getElementByPos(_n27);
            _o27 !== e && r.push(_o27);
          }
          var i = r.length;
          for (var _n28 = 0; _n28 < i; ++_n28)
            this.setElementByPos(_n28, r[_n28]);
          return this.cut(i - 1);
        }
      }, {
        key: "eraseElementByIterator",
        value: function eraseElementByIterator(e) {
          var r = e.o;
          return this.eraseElementByPos(r), e = e.next(), e;
        }
      }, {
        key: "find",
        value: function find(e) {
          for (var _r41 = 0; _r41 < this.i; ++_r41)
            if (this.getElementByPos(_r41) === e)
              return new vr(_r41, this);
          return this.end();
        }
      }, {
        key: "reverse",
        value: function reverse() {
          var e = 0, r = this.i - 1;
          for (; e < r; ) {
            var i = this.getElementByPos(e);
            this.setElementByPos(e, this.getElementByPos(r)), this.setElementByPos(r, i), e += 1, r -= 1;
          }
        }
      }, {
        key: "unique",
        value: function unique() {
          if (this.i <= 1)
            return this.i;
          var e = 1, r = this.getElementByPos(0);
          for (var i = 1; i < this.i; ++i) {
            var _n29 = this.getElementByPos(i);
            _n29 !== r && (r = _n29, this.setElementByPos(e++, _n29));
          }
          for (; this.i > e; )
            this.popBack();
          return this.i;
        }
      }, {
        key: "sort",
        value: function sort(e) {
          var r = [];
          for (var i = 0; i < this.i; ++i)
            r.push(this.getElementByPos(i));
          r.sort(e);
          for (var _i13 = 0; _i13 < this.i; ++_i13)
            this.setElementByPos(_i13, r[_i13]);
        }
      }, {
        key: "shrinkToFit",
        value: function shrinkToFit() {
          if (this.i === 0)
            return;
          var e = [];
          this.forEach(function(r) {
            e.push(r);
          }), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
          for (var _r42 = 0; _r42 < this.P; ++_r42)
            this.A.push(new Array(this.F));
          for (var _r43 = 0; _r43 < e.length; ++_r43)
            this.pushBack(e[_r43]);
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          for (var _r44 = 0; _r44 < this.i; ++_r44)
            e(this.getElementByPos(_r44), _r44, this);
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee35() {
            var e;
            return _regeneratorRuntime().wrap(function _callee35$(_context42) {
              while (1)
                switch (_context42.prev = _context42.next) {
                  case 0:
                    e = 0;
                  case 1:
                    if (!(e < this.i)) {
                      _context42.next = 7;
                      break;
                    }
                    _context42.next = 4;
                    return this.getElementByPos(e);
                  case 4:
                    ++e;
                    _context42.next = 1;
                    break;
                  case 7:
                  case "end":
                    return _context42.stop();
                }
            }, _callee35, this);
          }).bind(this)();
        }
      }]);
    }(q1.default), F1 = wa;
    $n.default = F1;
  });
  var op = M(function(Zr) {
    v();
    m();
    _();
    Object.defineProperty(Zr, "t", {
      value: true
    });
    Zr.TreeNodeEnableIndex = Zr.TreeNode = void 0;
    var Hn = /* @__PURE__ */ function() {
      function Hn2(e, r) {
        _classCallCheck(this, Hn2);
        this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = e, this.l = r;
      }
      return _createClass(Hn2, [{
        key: "L",
        value: function L() {
          var e = this;
          if (e.ee === 1 && e.tt.tt === e)
            e = e.W;
          else if (e.U)
            for (e = e.U; e.W; )
              e = e.W;
          else {
            var _r45 = e.tt;
            for (; _r45.U === e; )
              e = _r45, _r45 = e.tt;
            e = _r45;
          }
          return e;
        }
      }, {
        key: "B",
        value: function B2() {
          var e = this;
          if (e.W) {
            for (e = e.W; e.U; )
              e = e.U;
            return e;
          } else {
            var _r46 = e.tt;
            for (; _r46.W === e; )
              e = _r46, _r46 = e.tt;
            return e.W !== _r46 ? _r46 : e;
          }
        }
      }, {
        key: "te",
        value: function te() {
          var e = this.tt, r = this.W, i = r.U;
          return e.tt === this ? e.tt = r : e.U === this ? e.U = r : e.W = r, r.tt = e, r.U = this, this.tt = r, this.W = i, i && (i.tt = this), r;
        }
      }, {
        key: "se",
        value: function se() {
          var e = this.tt, r = this.U, i = r.W;
          return e.tt === this ? e.tt = r : e.U === this ? e.U = r : e.W = r, r.tt = e, r.W = this, this.tt = r, this.U = i, i && (i.tt = this), r;
        }
      }]);
    }();
    Zr.TreeNode = Hn;
    var _a = /* @__PURE__ */ function(_Hn) {
      function _a2() {
        var _this30;
        _classCallCheck(this, _a2);
        _this30 = _callSuper(this, _a2, arguments), _this30.rt = 1;
        return _this30;
      }
      _inherits(_a2, _Hn);
      return _createClass(_a2, [{
        key: "te",
        value: function te() {
          var e = _get(_getPrototypeOf(_a2.prototype), "te", this).call(this);
          return this.ie(), e.ie(), e;
        }
      }, {
        key: "se",
        value: function se() {
          var e = _get(_getPrototypeOf(_a2.prototype), "se", this).call(this);
          return this.ie(), e.ie(), e;
        }
      }, {
        key: "ie",
        value: function ie() {
          this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
        }
      }]);
    }(Hn);
    Zr.TreeNodeEnableIndex = _a;
  });
  var va = M(function(Vn) {
    v();
    m();
    _();
    Object.defineProperty(Vn, "t", {
      value: true
    });
    Vn.default = void 0;
    var ap = op(), W1 = lt(), lp = ut(), ma = /* @__PURE__ */ function(_W1$Container) {
      function ma2() {
        var _this31;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(i, n) {
          return i < n ? -1 : i > n ? 1 : 0;
        };
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _classCallCheck(this, ma2);
        _this31 = _callSuper(this, ma2), _this31.Y = void 0, _this31.v = e, r ? (_this31.re = ap.TreeNodeEnableIndex, _this31.M = function(i, n, o) {
          var s = this.ne(i, n, o);
          if (s) {
            var _a15 = s.tt;
            for (; _a15 !== this.h; )
              _a15.rt += 1, _a15 = _a15.tt;
            var _u22 = this.he(s);
            if (_u22) {
              var _c14 = _u22.parentNode, _h5 = _u22.grandParent, _d8 = _u22.curNode;
              _c14.ie(), _h5.ie(), _d8.ie();
            }
          }
          return this.i;
        }, _this31.V = function(i) {
          var n = this.fe(i);
          for (; n !== this.h; )
            n.rt -= 1, n = n.tt;
        }) : (_this31.re = ap.TreeNode, _this31.M = function(i, n, o) {
          var s = this.ne(i, n, o);
          return s && this.he(s), this.i;
        }, _this31.V = _this31.fe), _this31.h = new _this31.re();
        return _this31;
      }
      _inherits(ma2, _W1$Container);
      return _createClass(ma2, [{
        key: "X",
        value: function X2(e, r) {
          var i = this.h;
          for (; e; ) {
            var _n30 = this.v(e.u, r);
            if (_n30 < 0)
              e = e.W;
            else if (_n30 > 0)
              i = e, e = e.U;
            else
              return e;
          }
          return i;
        }
      }, {
        key: "Z",
        value: function Z2(e, r) {
          var i = this.h;
          for (; e; )
            this.v(e.u, r) <= 0 ? e = e.W : (i = e, e = e.U);
          return i;
        }
      }, {
        key: "$",
        value: function $(e, r) {
          var i = this.h;
          for (; e; ) {
            var _n31 = this.v(e.u, r);
            if (_n31 < 0)
              i = e, e = e.W;
            else if (_n31 > 0)
              e = e.U;
            else
              return e;
          }
          return i;
        }
      }, {
        key: "rr",
        value: function rr2(e, r) {
          var i = this.h;
          for (; e; )
            this.v(e.u, r) < 0 ? (i = e, e = e.W) : e = e.U;
          return i;
        }
      }, {
        key: "ue",
        value: function ue(e) {
          for (; ; ) {
            var _r47 = e.tt;
            if (_r47 === this.h)
              return;
            if (e.ee === 1) {
              e.ee = 0;
              return;
            }
            if (e === _r47.U) {
              var i = _r47.W;
              if (i.ee === 1)
                i.ee = 0, _r47.ee = 1, _r47 === this.Y ? this.Y = _r47.te() : _r47.te();
              else if (i.W && i.W.ee === 1) {
                i.ee = _r47.ee, _r47.ee = 0, i.W.ee = 0, _r47 === this.Y ? this.Y = _r47.te() : _r47.te();
                return;
              } else
                i.U && i.U.ee === 1 ? (i.ee = 1, i.U.ee = 0, i.se()) : (i.ee = 1, e = _r47);
            } else {
              var _i14 = _r47.U;
              if (_i14.ee === 1)
                _i14.ee = 0, _r47.ee = 1, _r47 === this.Y ? this.Y = _r47.se() : _r47.se();
              else if (_i14.U && _i14.U.ee === 1) {
                _i14.ee = _r47.ee, _r47.ee = 0, _i14.U.ee = 0, _r47 === this.Y ? this.Y = _r47.se() : _r47.se();
                return;
              } else
                _i14.W && _i14.W.ee === 1 ? (_i14.ee = 1, _i14.W.ee = 0, _i14.te()) : (_i14.ee = 1, e = _r47);
            }
          }
        }
      }, {
        key: "fe",
        value: function fe2(e) {
          if (this.i === 1)
            return this.clear(), this.h;
          var r = e;
          for (; r.U || r.W; ) {
            var _ref38, _ref39;
            if (r.W)
              for (r = r.W; r.U; )
                r = r.U;
            else
              r = r.U;
            _ref38 = [r.u, e.u], e.u = _ref38[0], r.u = _ref38[1], _ref39 = [r.l, e.l], e.l = _ref39[0], r.l = _ref39[1], e = r;
          }
          this.h.U === r ? this.h.U = r.tt : this.h.W === r && (this.h.W = r.tt), this.ue(r);
          var i = r.tt;
          return r === i.U ? i.U = void 0 : i.W = void 0, this.i -= 1, this.Y.ee = 0, i;
        }
      }, {
        key: "oe",
        value: function oe(e, r) {
          return e === void 0 ? false : this.oe(e.U, r) || r(e) ? true : this.oe(e.W, r);
        }
      }, {
        key: "he",
        value: function he(e) {
          for (; ; ) {
            var _r48 = e.tt;
            if (_r48.ee === 0)
              return;
            var i = _r48.tt;
            if (_r48 === i.U) {
              var _n32 = i.W;
              if (_n32 && _n32.ee === 1) {
                if (_n32.ee = _r48.ee = 0, i === this.Y)
                  return;
                i.ee = 1, e = i;
                continue;
              } else if (e === _r48.W) {
                if (e.ee = 0, e.U && (e.U.tt = _r48), e.W && (e.W.tt = i), _r48.W = e.U, i.U = e.W, e.U = _r48, e.W = i, i === this.Y)
                  this.Y = e, this.h.tt = e;
                else {
                  var _o28 = i.tt;
                  _o28.U === i ? _o28.U = e : _o28.W = e;
                }
                return e.tt = i.tt, _r48.tt = e, i.tt = e, i.ee = 1, {
                  parentNode: _r48,
                  grandParent: i,
                  curNode: e
                };
              } else
                _r48.ee = 0, i === this.Y ? this.Y = i.se() : i.se(), i.ee = 1;
            } else {
              var _n33 = i.U;
              if (_n33 && _n33.ee === 1) {
                if (_n33.ee = _r48.ee = 0, i === this.Y)
                  return;
                i.ee = 1, e = i;
                continue;
              } else if (e === _r48.U) {
                if (e.ee = 0, e.U && (e.U.tt = i), e.W && (e.W.tt = _r48), i.W = e.U, _r48.U = e.W, e.U = i, e.W = _r48, i === this.Y)
                  this.Y = e, this.h.tt = e;
                else {
                  var _o29 = i.tt;
                  _o29.U === i ? _o29.U = e : _o29.W = e;
                }
                return e.tt = i.tt, _r48.tt = e, i.tt = e, i.ee = 1, {
                  parentNode: _r48,
                  grandParent: i,
                  curNode: e
                };
              } else
                _r48.ee = 0, i === this.Y ? this.Y = i.te() : i.te(), i.ee = 1;
            }
            return;
          }
        }
      }, {
        key: "ne",
        value: function ne2(e, r, i) {
          if (this.Y === void 0) {
            this.i += 1, this.Y = new this.re(e, r), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, this.h.W = this.Y;
            return;
          }
          var n, o = this.h.U, s = this.v(o.u, e);
          if (s === 0) {
            o.l = r;
            return;
          } else if (s > 0)
            o.U = new this.re(e, r), o.U.tt = o, n = o.U, this.h.U = n;
          else {
            var _a16 = this.h.W, _u23 = this.v(_a16.u, e);
            if (_u23 === 0) {
              _a16.l = r;
              return;
            } else if (_u23 < 0)
              _a16.W = new this.re(e, r), _a16.W.tt = _a16, n = _a16.W, this.h.W = n;
            else {
              if (i !== void 0) {
                var _c15 = i.o;
                if (_c15 !== this.h) {
                  var _h6 = this.v(_c15.u, e);
                  if (_h6 === 0) {
                    _c15.l = r;
                    return;
                  } else if (_h6 > 0) {
                    var _d9 = _c15.L(), _g14 = this.v(_d9.u, e);
                    if (_g14 === 0) {
                      _d9.l = r;
                      return;
                    } else
                      _g14 < 0 && (n = new this.re(e, r), _d9.W === void 0 ? (_d9.W = n, n.tt = _d9) : (_c15.U = n, n.tt = _c15));
                  }
                }
              }
              if (n === void 0)
                for (n = this.Y; ; ) {
                  var _c16 = this.v(n.u, e);
                  if (_c16 > 0) {
                    if (n.U === void 0) {
                      n.U = new this.re(e, r), n.U.tt = n, n = n.U;
                      break;
                    }
                    n = n.U;
                  } else if (_c16 < 0) {
                    if (n.W === void 0) {
                      n.W = new this.re(e, r), n.W.tt = n, n = n.W;
                      break;
                    }
                    n = n.W;
                  } else {
                    n.l = r;
                    return;
                  }
                }
            }
          }
          return this.i += 1, n;
        }
      }, {
        key: "I",
        value: function I(e, r) {
          for (; e; ) {
            var i = this.v(e.u, r);
            if (i < 0)
              e = e.W;
            else if (i > 0)
              e = e.U;
            else
              return e;
          }
          return e || this.h;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0;
        }
      }, {
        key: "updateKeyByIterator",
        value: function updateKeyByIterator(e, r) {
          var i = e.o;
          if (i === this.h && (0, lp.throwIteratorAccessError)(), this.i === 1)
            return i.u = r, true;
          if (i === this.h.U)
            return this.v(i.B().u, r) > 0 ? (i.u = r, true) : false;
          if (i === this.h.W)
            return this.v(i.L().u, r) < 0 ? (i.u = r, true) : false;
          var n = i.L().u;
          if (this.v(n, r) >= 0)
            return false;
          var o = i.B().u;
          return this.v(o, r) <= 0 ? false : (i.u = r, true);
        }
      }, {
        key: "eraseElementByPos",
        value: function eraseElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r = 0, i = this;
          return this.oe(this.Y, function(n) {
            return e === r ? (i.V(n), true) : (r += 1, false);
          }), this.i;
        }
      }, {
        key: "eraseElementByKey",
        value: function eraseElementByKey(e) {
          if (this.i === 0)
            return false;
          var r = this.I(this.Y, e);
          return r === this.h ? false : (this.V(r), true);
        }
      }, {
        key: "eraseElementByIterator",
        value: function eraseElementByIterator(e) {
          var r = e.o;
          r === this.h && (0, lp.throwIteratorAccessError)();
          var i = r.W === void 0;
          return e.iteratorType === 0 ? i && e.next() : (!i || r.U === void 0) && e.next(), this.V(r), e;
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          var r = 0;
          var _iterator34 = _createForOfIteratorHelper(this), _step34;
          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
              var i = _step34.value;
              e(i, r++, this);
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        }
      }, {
        key: "getElementByPos",
        value: function getElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r, i = 0;
          var _iterator35 = _createForOfIteratorHelper(this), _step35;
          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
              var _n34 = _step35.value;
              if (i === e) {
                r = _n34;
                break;
              }
              i += 1;
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
          return r;
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          if (this.i === 0)
            return 0;
          var e = function e2(r) {
            return r ? Math.max(e2(r.U), e2(r.W)) + 1 : 0;
          };
          return e(this.Y);
        }
      }]);
    }(W1.Container), $1 = ma;
    Vn.default = $1;
  });
  var Sa = M(function(Kn) {
    v();
    m();
    _();
    Object.defineProperty(Kn, "t", {
      value: true
    });
    Kn.default = void 0;
    var H1 = lt(), zn = ut(), Ea = /* @__PURE__ */ function(_H1$ContainerIterator) {
      function Ea2(e, r, i) {
        var _this32;
        _classCallCheck(this, Ea2);
        _this32 = _callSuper(this, Ea2, [i]), _this32.o = e, _this32.h = r, _this32.iteratorType === 0 ? (_this32.pre = function() {
          return this.o === this.h.U && (0, zn.throwIteratorAccessError)(), this.o = this.o.L(), this;
        }, _this32.next = function() {
          return this.o === this.h && (0, zn.throwIteratorAccessError)(), this.o = this.o.B(), this;
        }) : (_this32.pre = function() {
          return this.o === this.h.W && (0, zn.throwIteratorAccessError)(), this.o = this.o.B(), this;
        }, _this32.next = function() {
          return this.o === this.h && (0, zn.throwIteratorAccessError)(), this.o = this.o.L(), this;
        });
        return _this32;
      }
      _inherits(Ea2, _H1$ContainerIterator);
      return _createClass(Ea2, [{
        key: "index",
        get: function get() {
          var e = this.o, r = this.h.tt;
          if (e === this.h)
            return r ? r.rt - 1 : 0;
          var i = 0;
          for (e.U && (i += e.U.rt); e !== r; ) {
            var _n35 = e.tt;
            e === _n35.W && (i += 1, _n35.U && (i += _n35.U.rt)), e = _n35;
          }
          return i;
        }
      }]);
    }(H1.ContainerIterator), V1 = Ea;
    Kn.default = V1;
  });
  var fp = M(function(Gn) {
    v();
    m();
    _();
    Object.defineProperty(Gn, "t", {
      value: true
    });
    Gn.default = void 0;
    var z1 = up(va()), K1 = up(Sa()), G1 = ut();
    function up(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var Ke = /* @__PURE__ */ function(_K1$default) {
      function t(e, r, i, n) {
        var _this33;
        _classCallCheck(this, t);
        _this33 = _callSuper(this, t, [e, r, n]), _this33.container = i;
        return _this33;
      }
      _inherits(t, _K1$default);
      return _createClass(t, [{
        key: "pointer",
        get: function get() {
          return this.o === this.h && (0, G1.throwIteratorAccessError)(), this.o.u;
        }
      }, {
        key: "copy",
        value: function copy() {
          return new t(this.o, this.h, this.container, this.iteratorType);
        }
      }]);
    }(K1.default), Aa = /* @__PURE__ */ function(_z1$default) {
      function Aa2() {
        var _this34;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var r = arguments.length > 1 ? arguments[1] : void 0;
        var i = arguments.length > 2 ? arguments[2] : void 0;
        _classCallCheck(this, Aa2);
        _this34 = _callSuper(this, Aa2, [r, i]);
        var n = _this34;
        e.forEach(function(o) {
          n.insert(o);
        });
        return _this34;
      }
      _inherits(Aa2, _z1$default);
      return _createClass(Aa2, [{
        key: "K",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function K(e) {
          return _regeneratorRuntime().wrap(function K$(_context43) {
            while (1)
              switch (_context43.prev = _context43.next) {
                case 0:
                  _context43.t0 = e !== void 0;
                  if (!_context43.t0) {
                    _context43.next = 6;
                    break;
                  }
                  return _context43.delegateYield(this.K(e.U), "t1", 3);
                case 3:
                  _context43.next = 5;
                  return e.u;
                case 5:
                  return _context43.delegateYield(this.K(e.W), "t2", 6);
                case 6:
                case "end":
                  return _context43.stop();
              }
          }, K, this);
        })
      }, {
        key: "begin",
        value: function begin() {
          return new Ke(this.h.U || this.h, this.h, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new Ke(this.h, this.h, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new Ke(this.h.W || this.h, this.h, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new Ke(this.h, this.h, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          return this.h.U ? this.h.U.u : void 0;
        }
      }, {
        key: "back",
        value: function back() {
          return this.h.W ? this.h.W.u : void 0;
        }
      }, {
        key: "insert",
        value: function insert(e, r) {
          return this.M(e, void 0, r);
        }
      }, {
        key: "find",
        value: function find(e) {
          var r = this.I(this.Y, e);
          return new Ke(r, this.h, this);
        }
      }, {
        key: "lowerBound",
        value: function lowerBound(e) {
          var r = this.X(this.Y, e);
          return new Ke(r, this.h, this);
        }
      }, {
        key: "upperBound",
        value: function upperBound(e) {
          var r = this.Z(this.Y, e);
          return new Ke(r, this.h, this);
        }
      }, {
        key: "reverseLowerBound",
        value: function reverseLowerBound(e) {
          var r = this.$(this.Y, e);
          return new Ke(r, this.h, this);
        }
      }, {
        key: "reverseUpperBound",
        value: function reverseUpperBound(e) {
          var r = this.rr(this.Y, e);
          return new Ke(r, this.h, this);
        }
      }, {
        key: "union",
        value: function union(e) {
          var r = this;
          return e.forEach(function(i) {
            r.insert(i);
          }), this.i;
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return this.K(this.Y);
        }
      }]);
    }(z1.default), Q1 = Aa;
    Gn.default = Q1;
  });
  var hp = M(function(Qn) {
    v();
    m();
    _();
    Object.defineProperty(Qn, "t", {
      value: true
    });
    Qn.default = void 0;
    var Y1 = cp(va()), J1 = cp(Sa()), X1 = ut();
    function cp(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var Ge = /* @__PURE__ */ function(_J1$default) {
      function t(e, r, i, n) {
        var _this35;
        _classCallCheck(this, t);
        _this35 = _callSuper(this, t, [e, r, n]), _this35.container = i;
        return _this35;
      }
      _inherits(t, _J1$default);
      return _createClass(t, [{
        key: "pointer",
        get: function get() {
          this.o === this.h && (0, X1.throwIteratorAccessError)();
          var e = this;
          return new Proxy([], {
            get: function get2(r, i) {
              if (i === "0")
                return e.o.u;
              if (i === "1")
                return e.o.l;
            },
            set: function set(r, i, n) {
              if (i !== "1")
                throw new TypeError("props must be 1");
              return e.o.l = n, true;
            }
          });
        }
      }, {
        key: "copy",
        value: function copy() {
          return new t(this.o, this.h, this.container, this.iteratorType);
        }
      }]);
    }(J1.default), Ia = /* @__PURE__ */ function(_Y1$default) {
      function Ia2() {
        var _this36;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var r = arguments.length > 1 ? arguments[1] : void 0;
        var i = arguments.length > 2 ? arguments[2] : void 0;
        _classCallCheck(this, Ia2);
        _this36 = _callSuper(this, Ia2, [r, i]);
        var n = _this36;
        e.forEach(function(o) {
          n.setElement(o[0], o[1]);
        });
        return _this36;
      }
      _inherits(Ia2, _Y1$default);
      return _createClass(Ia2, [{
        key: "K",
        value: /* @__PURE__ */ _regeneratorRuntime().mark(function K(e) {
          return _regeneratorRuntime().wrap(function K$(_context44) {
            while (1)
              switch (_context44.prev = _context44.next) {
                case 0:
                  _context44.t0 = e !== void 0;
                  if (!_context44.t0) {
                    _context44.next = 6;
                    break;
                  }
                  return _context44.delegateYield(this.K(e.U), "t1", 3);
                case 3:
                  _context44.next = 5;
                  return [e.u, e.l];
                case 5:
                  return _context44.delegateYield(this.K(e.W), "t2", 6);
                case 6:
                case "end":
                  return _context44.stop();
              }
          }, K, this);
        })
      }, {
        key: "begin",
        value: function begin() {
          return new Ge(this.h.U || this.h, this.h, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new Ge(this.h, this.h, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new Ge(this.h.W || this.h, this.h, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new Ge(this.h, this.h, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          if (this.i === 0)
            return;
          var e = this.h.U;
          return [e.u, e.l];
        }
      }, {
        key: "back",
        value: function back() {
          if (this.i === 0)
            return;
          var e = this.h.W;
          return [e.u, e.l];
        }
      }, {
        key: "lowerBound",
        value: function lowerBound(e) {
          var r = this.X(this.Y, e);
          return new Ge(r, this.h, this);
        }
      }, {
        key: "upperBound",
        value: function upperBound(e) {
          var r = this.Z(this.Y, e);
          return new Ge(r, this.h, this);
        }
      }, {
        key: "reverseLowerBound",
        value: function reverseLowerBound(e) {
          var r = this.$(this.Y, e);
          return new Ge(r, this.h, this);
        }
      }, {
        key: "reverseUpperBound",
        value: function reverseUpperBound(e) {
          var r = this.rr(this.Y, e);
          return new Ge(r, this.h, this);
        }
      }, {
        key: "setElement",
        value: function setElement(e, r, i) {
          return this.M(e, r, i);
        }
      }, {
        key: "find",
        value: function find(e) {
          var r = this.I(this.Y, e);
          return new Ge(r, this.h, this);
        }
      }, {
        key: "getElementByKey",
        value: function getElementByKey(e) {
          return this.I(this.Y, e).l;
        }
      }, {
        key: "union",
        value: function union(e) {
          var r = this;
          return e.forEach(function(i) {
            r.setElement(i[0], i[1]);
          }), this.i;
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return this.K(this.Y);
        }
      }]);
    }(Y1.default), Z1 = Ia;
    Qn.default = Z1;
  });
  var Ra = M(function(Ta) {
    v();
    m();
    _();
    Object.defineProperty(Ta, "t", {
      value: true
    });
    Ta.default = ev;
    function ev(t) {
      var e = _typeof(t);
      return e === "object" && t !== null || e === "function";
    }
  });
  var Oa = M(function(ei) {
    v();
    m();
    _();
    Object.defineProperty(ei, "t", {
      value: true
    });
    ei.HashContainerIterator = ei.HashContainer = void 0;
    var dp = lt(), Ca = tv(Ra()), Ti = ut();
    function tv(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var Ba = /* @__PURE__ */ function(_dp$ContainerIterator) {
      function Ba2(e, r, i) {
        var _this37;
        _classCallCheck(this, Ba2);
        _this37 = _callSuper(this, Ba2, [i]), _this37.o = e, _this37.h = r, _this37.iteratorType === 0 ? (_this37.pre = function() {
          return this.o.L === this.h && (0, Ti.throwIteratorAccessError)(), this.o = this.o.L, this;
        }, _this37.next = function() {
          return this.o === this.h && (0, Ti.throwIteratorAccessError)(), this.o = this.o.B, this;
        }) : (_this37.pre = function() {
          return this.o.B === this.h && (0, Ti.throwIteratorAccessError)(), this.o = this.o.B, this;
        }, _this37.next = function() {
          return this.o === this.h && (0, Ti.throwIteratorAccessError)(), this.o = this.o.L, this;
        });
        return _this37;
      }
      _inherits(Ba2, _dp$ContainerIterator);
      return _createClass(Ba2);
    }(dp.ContainerIterator);
    ei.HashContainerIterator = Ba;
    var Pa = /* @__PURE__ */ function(_dp$Container) {
      function Pa2() {
        var _this38;
        _classCallCheck(this, Pa2);
        _this38 = _callSuper(this, Pa2), _this38.H = [], _this38.g = {}, _this38.HASH_TAG = Symbol("@@HASH_TAG"), Object.setPrototypeOf(_this38.g, null), _this38.h = {}, _this38.h.L = _this38.h.B = _this38.p = _this38._ = _this38.h;
        return _this38;
      }
      _inherits(Pa2, _dp$Container);
      return _createClass(Pa2, [{
        key: "V",
        value: function V(e) {
          var r = e.L, i = e.B;
          r.B = i, i.L = r, e === this.p && (this.p = i), e === this._ && (this._ = r), this.i -= 1;
        }
      }, {
        key: "M",
        value: function M2(e, r, i) {
          i === void 0 && (i = (0, Ca.default)(e));
          var n;
          if (i) {
            var _o30 = e[this.HASH_TAG];
            if (_o30 !== void 0)
              return this.H[_o30].l = r, this.i;
            Object.defineProperty(e, this.HASH_TAG, {
              value: this.H.length,
              configurable: true
            }), n = {
              u: e,
              l: r,
              L: this._,
              B: this.h
            }, this.H.push(n);
          } else {
            var _o31 = this.g[e];
            if (_o31)
              return _o31.l = r, this.i;
            n = {
              u: e,
              l: r,
              L: this._,
              B: this.h
            }, this.g[e] = n;
          }
          return this.i === 0 ? (this.p = n, this.h.B = n) : this._.B = n, this._ = n, this.h.L = n, ++this.i;
        }
      }, {
        key: "I",
        value: function I(e, r) {
          if (r === void 0 && (r = (0, Ca.default)(e)), r) {
            var i = e[this.HASH_TAG];
            return i === void 0 ? this.h : this.H[i];
          } else
            return this.g[e] || this.h;
        }
      }, {
        key: "clear",
        value: function clear() {
          var e = this.HASH_TAG;
          this.H.forEach(function(r) {
            delete r.u[e];
          }), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
        }
      }, {
        key: "eraseElementByKey",
        value: function eraseElementByKey(e, r) {
          var i;
          if (r === void 0 && (r = (0, Ca.default)(e)), r) {
            var _n36 = e[this.HASH_TAG];
            if (_n36 === void 0)
              return false;
            delete e[this.HASH_TAG], i = this.H[_n36], delete this.H[_n36];
          } else {
            if (i = this.g[e], i === void 0)
              return false;
            delete this.g[e];
          }
          return this.V(i), true;
        }
      }, {
        key: "eraseElementByIterator",
        value: function eraseElementByIterator(e) {
          var r = e.o;
          return r === this.h && (0, Ti.throwIteratorAccessError)(), this.V(r), e.next();
        }
      }, {
        key: "eraseElementByPos",
        value: function eraseElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r = this.p;
          for (; e--; )
            r = r.B;
          return this.V(r), this.i;
        }
      }]);
    }(dp.Container);
    ei.HashContainer = Pa;
  });
  var gp = M(function(Yn) {
    v();
    m();
    _();
    Object.defineProperty(Yn, "t", {
      value: true
    });
    Yn.default = void 0;
    var pp = Oa(), rv = ut(), Er = /* @__PURE__ */ function(_pp$HashContainerIter) {
      function t(e, r, i, n) {
        var _this39;
        _classCallCheck(this, t);
        _this39 = _callSuper(this, t, [e, r, n]), _this39.container = i;
        return _this39;
      }
      _inherits(t, _pp$HashContainerIter);
      return _createClass(t, [{
        key: "pointer",
        get: function get() {
          return this.o === this.h && (0, rv.throwIteratorAccessError)(), this.o.u;
        }
      }, {
        key: "copy",
        value: function copy() {
          return new t(this.o, this.h, this.container, this.iteratorType);
        }
      }]);
    }(pp.HashContainerIterator), ka = /* @__PURE__ */ function(_pp$HashContainer) {
      function ka2() {
        var _this40;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, ka2);
        _this40 = _callSuper(this, ka2);
        var r = _this40;
        e.forEach(function(i) {
          r.insert(i);
        });
        return _this40;
      }
      _inherits(ka2, _pp$HashContainer);
      return _createClass(ka2, [{
        key: "begin",
        value: function begin() {
          return new Er(this.p, this.h, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new Er(this.h, this.h, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new Er(this._, this.h, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new Er(this.h, this.h, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          return this.p.u;
        }
      }, {
        key: "back",
        value: function back() {
          return this._.u;
        }
      }, {
        key: "insert",
        value: function insert(e, r) {
          return this.M(e, void 0, r);
        }
      }, {
        key: "getElementByPos",
        value: function getElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r = this.p;
          for (; e--; )
            r = r.B;
          return r.u;
        }
      }, {
        key: "find",
        value: function find(e, r) {
          var i = this.I(e, r);
          return new Er(i, this.h, this);
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          var r = 0, i = this.p;
          for (; i !== this.h; )
            e(i.u, r++, this), i = i.B;
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee36() {
            var e;
            return _regeneratorRuntime().wrap(function _callee36$(_context45) {
              while (1)
                switch (_context45.prev = _context45.next) {
                  case 0:
                    e = this.p;
                  case 1:
                    if (!(e !== this.h)) {
                      _context45.next = 7;
                      break;
                    }
                    _context45.next = 4;
                    return e.u;
                  case 4:
                    e = e.B;
                  case 5:
                    _context45.next = 1;
                    break;
                  case 7:
                  case "end":
                    return _context45.stop();
                }
            }, _callee36, this);
          }).bind(this)();
        }
      }]);
    }(pp.HashContainer), iv = ka;
    Yn.default = iv;
  });
  var bp = M(function(Jn) {
    v();
    m();
    _();
    Object.defineProperty(Jn, "t", {
      value: true
    });
    Jn.default = void 0;
    var yp = Oa(), nv = ov(Ra()), sv = ut();
    function ov(t) {
      return t && t.t ? t : {
        default: t
      };
    }
    var Sr = /* @__PURE__ */ function(_yp$HashContainerIter) {
      function t(e, r, i, n) {
        var _this41;
        _classCallCheck(this, t);
        _this41 = _callSuper(this, t, [e, r, n]), _this41.container = i;
        return _this41;
      }
      _inherits(t, _yp$HashContainerIter);
      return _createClass(t, [{
        key: "pointer",
        get: function get() {
          this.o === this.h && (0, sv.throwIteratorAccessError)();
          var e = this;
          return new Proxy([], {
            get: function get2(r, i) {
              if (i === "0")
                return e.o.u;
              if (i === "1")
                return e.o.l;
            },
            set: function set(r, i, n) {
              if (i !== "1")
                throw new TypeError("props must be 1");
              return e.o.l = n, true;
            }
          });
        }
      }, {
        key: "copy",
        value: function copy() {
          return new t(this.o, this.h, this.container, this.iteratorType);
        }
      }]);
    }(yp.HashContainerIterator), xa = /* @__PURE__ */ function(_yp$HashContainer) {
      function xa2() {
        var _this42;
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, xa2);
        _this42 = _callSuper(this, xa2);
        var r = _this42;
        e.forEach(function(i) {
          r.setElement(i[0], i[1]);
        });
        return _this42;
      }
      _inherits(xa2, _yp$HashContainer);
      return _createClass(xa2, [{
        key: "begin",
        value: function begin() {
          return new Sr(this.p, this.h, this);
        }
      }, {
        key: "end",
        value: function end() {
          return new Sr(this.h, this.h, this);
        }
      }, {
        key: "rBegin",
        value: function rBegin() {
          return new Sr(this._, this.h, this, 1);
        }
      }, {
        key: "rEnd",
        value: function rEnd() {
          return new Sr(this.h, this.h, this, 1);
        }
      }, {
        key: "front",
        value: function front() {
          if (this.i !== 0)
            return [this.p.u, this.p.l];
        }
      }, {
        key: "back",
        value: function back() {
          if (this.i !== 0)
            return [this._.u, this._.l];
        }
      }, {
        key: "setElement",
        value: function setElement(e, r, i) {
          return this.M(e, r, i);
        }
      }, {
        key: "getElementByKey",
        value: function getElementByKey(e, r) {
          if (r === void 0 && (r = (0, nv.default)(e)), r) {
            var _n37 = e[this.HASH_TAG];
            return _n37 !== void 0 ? this.H[_n37].l : void 0;
          }
          var i = this.g[e];
          return i ? i.l : void 0;
        }
      }, {
        key: "getElementByPos",
        value: function getElementByPos(e) {
          if (e < 0 || e > this.i - 1)
            throw new RangeError();
          var r = this.p;
          for (; e--; )
            r = r.B;
          return [r.u, r.l];
        }
      }, {
        key: "find",
        value: function find(e, r) {
          var i = this.I(e, r);
          return new Sr(i, this.h, this);
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          var r = 0, i = this.p;
          for (; i !== this.h; )
            e([i.u, i.l], r++, this), i = i.B;
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return /* @__PURE__ */ _regeneratorRuntime().mark(function _callee37() {
            var e;
            return _regeneratorRuntime().wrap(function _callee37$(_context46) {
              while (1)
                switch (_context46.prev = _context46.next) {
                  case 0:
                    e = this.p;
                  case 1:
                    if (!(e !== this.h)) {
                      _context46.next = 7;
                      break;
                    }
                    _context46.next = 4;
                    return [e.u, e.l];
                  case 4:
                    e = e.B;
                  case 5:
                    _context46.next = 1;
                    break;
                  case 7:
                  case "end":
                    return _context46.stop();
                }
            }, _callee37, this);
          }).bind(this)();
        }
      }]);
    }(yp.HashContainer), av = xa;
    Jn.default = av;
  });
  var wp = M(function(je) {
    v();
    m();
    _();
    Object.defineProperty(je, "t", {
      value: true
    });
    Object.defineProperty(je, "Deque", {
      enumerable: true,
      get: function get() {
        return dv.default;
      }
    });
    Object.defineProperty(je, "HashMap", {
      enumerable: true,
      get: function get() {
        return bv.default;
      }
    });
    Object.defineProperty(je, "HashSet", {
      enumerable: true,
      get: function get() {
        return yv.default;
      }
    });
    Object.defineProperty(je, "LinkList", {
      enumerable: true,
      get: function get() {
        return hv.default;
      }
    });
    Object.defineProperty(je, "OrderedMap", {
      enumerable: true,
      get: function get() {
        return gv.default;
      }
    });
    Object.defineProperty(je, "OrderedSet", {
      enumerable: true,
      get: function get() {
        return pv.default;
      }
    });
    Object.defineProperty(je, "PriorityQueue", {
      enumerable: true,
      get: function get() {
        return fv.default;
      }
    });
    Object.defineProperty(je, "Queue", {
      enumerable: true,
      get: function get() {
        return uv.default;
      }
    });
    Object.defineProperty(je, "Stack", {
      enumerable: true,
      get: function get() {
        return lv.default;
      }
    });
    Object.defineProperty(je, "Vector", {
      enumerable: true,
      get: function get() {
        return cv.default;
      }
    });
    var lv = ft(ep()), uv = ft(tp()), fv = ft(rp()), cv = ft(ip()), hv = ft(np()), dv = ft(sp()), pv = ft(fp()), gv = ft(hp()), yv = ft(gp()), bv = ft(bp());
    function ft(t) {
      return t && t.t ? t : {
        default: t
      };
    }
  });
  var mp = M(function(SN, _p) {
    v();
    m();
    _();
    var wv = wp().OrderedSet, ct = ot()("number-allocator:trace"), _v = ot()("number-allocator:error");
    function Te(t, e) {
      this.low = t, this.high = e;
    }
    Te.prototype.equals = function(t) {
      return this.low === t.low && this.high === t.high;
    };
    Te.prototype.compare = function(t) {
      return this.low < t.low && this.high < t.low ? -1 : t.low < this.low && t.high < this.low ? 1 : 0;
    };
    function ht(t, e) {
      if (!(this instanceof ht))
        return new ht(t, e);
      this.min = t, this.max = e, this.ss = new wv([], function(r, i) {
        return r.compare(i);
      }), ct("Create"), this.clear();
    }
    ht.prototype.firstVacant = function() {
      return this.ss.size() === 0 ? null : this.ss.front().low;
    };
    ht.prototype.alloc = function() {
      if (this.ss.size() === 0)
        return ct("alloc():empty"), null;
      var t = this.ss.begin(), e = t.pointer.low, r = t.pointer.high, i = e;
      return i + 1 <= r ? this.ss.updateKeyByIterator(t, new Te(e + 1, r)) : this.ss.eraseElementByPos(0), ct("alloc():" + i), i;
    };
    ht.prototype.use = function(t) {
      var e = new Te(t, t), r = this.ss.lowerBound(e);
      if (!r.equals(this.ss.end())) {
        var i = r.pointer.low, _n38 = r.pointer.high;
        return r.pointer.equals(e) ? (this.ss.eraseElementByIterator(r), ct("use():" + t), true) : i > t ? false : i === t ? (this.ss.updateKeyByIterator(r, new Te(i + 1, _n38)), ct("use():" + t), true) : _n38 === t ? (this.ss.updateKeyByIterator(r, new Te(i, _n38 - 1)), ct("use():" + t), true) : (this.ss.updateKeyByIterator(r, new Te(t + 1, _n38)), this.ss.insert(new Te(i, t - 1)), ct("use():" + t), true);
      }
      return ct("use():failed"), false;
    };
    ht.prototype.free = function(t) {
      if (t < this.min || t > this.max) {
        _v("free():" + t + " is out of range");
        return;
      }
      var e = new Te(t, t), r = this.ss.upperBound(e);
      if (r.equals(this.ss.end())) {
        if (r.equals(this.ss.begin())) {
          this.ss.insert(e);
          return;
        }
        r.pre();
        var i = r.pointer.high;
        r.pointer.high + 1 === t ? this.ss.updateKeyByIterator(r, new Te(i, t)) : this.ss.insert(e);
      } else if (r.equals(this.ss.begin())) {
        if (t + 1 === r.pointer.low) {
          var _i15 = r.pointer.high;
          this.ss.updateKeyByIterator(r, new Te(t, _i15));
        } else
          this.ss.insert(e);
      } else {
        var _i16 = r.pointer.low, _n39 = r.pointer.high;
        r.pre();
        var _o32 = r.pointer.low;
        r.pointer.high + 1 === t ? t + 1 === _i16 ? (this.ss.eraseElementByIterator(r), this.ss.updateKeyByIterator(r, new Te(_o32, _n39))) : this.ss.updateKeyByIterator(r, new Te(_o32, t)) : t + 1 === _i16 ? (this.ss.eraseElementByIterator(r.next()), this.ss.insert(new Te(t, _n39))) : this.ss.insert(e);
      }
      ct("free():" + t);
    };
    ht.prototype.clear = function() {
      ct("clear()"), this.ss.clear(), this.ss.insert(new Te(this.min, this.max));
    };
    ht.prototype.intervalCount = function() {
      return this.ss.size();
    };
    ht.prototype.dump = function() {
      console.log("length:" + this.ss.size());
      var _iterator36 = _createForOfIteratorHelper(this.ss), _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
          var t = _step36.value;
          console.log(t);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    };
    _p.exports = ht;
  });
  var Ma = M(function(xN, vp) {
    v();
    m();
    _();
    var mv = mp();
    vp.exports.NumberAllocator = mv;
  });
  var Ep = M(function(Ua) {
    v();
    m();
    _();
    Object.defineProperty(Ua, "__esModule", {
      value: true
    });
    var vv = Zd(), Ev = Ma(), La = /* @__PURE__ */ function() {
      function La2(e) {
        _classCallCheck(this, La2);
        e > 0 && (this.aliasToTopic = new vv.LRUCache({
          max: e
        }), this.topicToAlias = {}, this.numberAllocator = new Ev.NumberAllocator(1, e), this.max = e, this.length = 0);
      }
      return _createClass(La2, [{
        key: "put",
        value: function put(e, r) {
          if (r === 0 || r > this.max)
            return false;
          var i = this.aliasToTopic.get(r);
          return i && delete this.topicToAlias[i], this.aliasToTopic.set(r, e), this.topicToAlias[e] = r, this.numberAllocator.use(r), this.length = this.aliasToTopic.size, true;
        }
      }, {
        key: "getTopicByAlias",
        value: function getTopicByAlias(e) {
          return this.aliasToTopic.get(e);
        }
      }, {
        key: "getAliasByTopic",
        value: function getAliasByTopic(e) {
          var r = this.topicToAlias[e];
          return _typeof(r) < "u" && this.aliasToTopic.get(r), r;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0;
        }
      }, {
        key: "getLruAlias",
        value: function getLruAlias() {
          var e = this.numberAllocator.firstVacant();
          return e || _toConsumableArray(this.aliasToTopic.keys())[this.aliasToTopic.size - 1];
        }
      }]);
    }();
    Ua.default = La;
  });
  var Sp = M(function(Ri) {
    v();
    m();
    _();
    var Sv = Ri && Ri.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Ri, "__esModule", {
      value: true
    });
    var Av = Ai(), Iv = Sv(Ep()), Tv = Jr(), Rv = function Rv2(t, e) {
      t.log("_handleConnack");
      var r = t.options, n = r.protocolVersion === 5 ? e.reasonCode : e.returnCode;
      if (clearTimeout(t.connackTimer), delete t.topicAliasSend, e.properties) {
        if (e.properties.topicAliasMaximum) {
          if (e.properties.topicAliasMaximum > 65535) {
            t.emit("error", new Error("topicAliasMaximum from broker is out of range"));
            return;
          }
          e.properties.topicAliasMaximum > 0 && (t.topicAliasSend = new Iv.default(e.properties.topicAliasMaximum));
        }
        e.properties.serverKeepAlive && r.keepalive && (r.keepalive = e.properties.serverKeepAlive, t._shiftPingInterval()), e.properties.maximumPacketSize && (r.properties || (r.properties = {}), r.properties.maximumPacketSize = e.properties.maximumPacketSize);
      }
      if (n === 0)
        t.reconnecting = false, t._onConnect(e);
      else if (n > 0) {
        var _o33 = new Tv.ErrorWithReasonCode("Connection refused: ".concat(Av.ReasonCodes[n]), n);
        t.emit("error", _o33);
      }
    };
    Ri.default = Rv;
  });
  var Ap = M(function(Na) {
    v();
    m();
    _();
    Object.defineProperty(Na, "__esModule", {
      value: true
    });
    var Cv = function Cv2(t, e, r) {
      t.log("handling pubrel packet");
      var i = _typeof(r) < "u" ? r : t.noop, n = e.messageId, o = {
        cmd: "pubcomp",
        messageId: n
      };
      t.incomingStore.get(e, function(s, a) {
        s ? t._sendPacket(o, i) : (t.emit("message", a.topic, a.payload, a), t.handleMessage(a, function(u) {
          if (u)
            return i(u);
          t.incomingStore.del(a, t.noop), t._sendPacket(o, i);
        }));
      });
    };
    Na.default = Cv;
  });
  var Ip = M(function(Ci) {
    v();
    m();
    _();
    var Bi = Ci && Ci.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Ci, "__esModule", {
      value: true
    });
    var Bv = Bi(Vd()), Pv = Bi(Gd()), Ov = Bi(Sp()), kv = Bi(Ai()), xv = Bi(Ap()), Mv = function Mv2(t, e, r) {
      var i = t.options;
      if (i.protocolVersion === 5 && i.properties && i.properties.maximumPacketSize && i.properties.maximumPacketSize < e.length)
        return t.emit("error", new Error("exceeding packets size ".concat(e.cmd))), t.end({
          reasonCode: 149,
          properties: {
            reasonString: "Maximum packet size was exceeded"
          }
        }), t;
      switch (t.log("_handlePacket :: emitting packetreceive"), t.emit("packetreceive", e), e.cmd) {
        case "publish":
          (0, Bv.default)(t, e, r);
          break;
        case "puback":
        case "pubrec":
        case "pubcomp":
        case "suback":
        case "unsuback":
          (0, kv.default)(t, e), r();
          break;
        case "pubrel":
          (0, xv.default)(t, e, r);
          break;
        case "connack":
          (0, Ov.default)(t, e), r();
          break;
        case "auth":
          (0, Pv.default)(t, e), r();
          break;
        case "pingresp":
          t.pingResp = true, r();
          break;
        case "disconnect":
          t.emit("disconnect", e), r();
          break;
        default:
          t.log("_handlePacket :: unknown command"), r();
          break;
      }
    };
    Ci.default = Mv;
  });
  var Tp = M(function(ti) {
    v();
    m();
    _();
    var Lv = ti && ti.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(ti, "__esModule", {
      value: true
    });
    ti.TypedEventEmitter = void 0;
    var Uv = Lv((ir(), X(rr))), Nv = Jr(), Xn = /* @__PURE__ */ _createClass(function Xn2() {
      _classCallCheck(this, Xn2);
    });
    ti.TypedEventEmitter = Xn;
    (0, Nv.applyMixin)(Xn, Uv.default);
  });
  var Pi = M(function(Ar) {
    v();
    m();
    _();
    Object.defineProperty(Ar, "__esModule", {
      value: true
    });
    Ar.isReactNativeBrowser = Ar.isWebWorker = void 0;
    var qv = function qv2() {
      return (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && _typeof(window.document) < "u";
    }, Rp = function Rp2() {
      var _self;
      var t, e;
      return !!((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && !((e = (t = (_self = self) === null || _self === void 0 ? void 0 : _self.constructor) === null || t === void 0 ? void 0 : t.name) === null || e === void 0) && e.includes("WorkerGlobalScope"));
    }, Cp = function Cp2() {
      return _typeof(P) < "u" && P.product === "ReactNative";
    }, Dv = qv() || Rp() || Cp();
    Ar.isWebWorker = Rp();
    Ar.isReactNativeBrowser = Cp();
    Ar.default = Dv;
  });
  var Pp = M(function(Zn, Bp) {
    v();
    m();
    _();
    (function(t, e) {
      _typeof(Zn) == "object" && _typeof(Bp) < "u" ? e(Zn) : typeof define == "function" && define.amd ? define(["exports"], e) : (t = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : t || self, e(t.fastUniqueNumbers = {}));
    })(Zn, function(t) {
      var e = function e2(g) {
        return function(y) {
          var w = g(y);
          return y.add(w), w;
        };
      }, r = function r2(g) {
        return function(y, w) {
          return g.set(y, w), w;
        };
      }, i = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, n = 536870912, o = n * 2, s = function s2(g, y) {
        return function(w) {
          var E = y.get(w), S = E === void 0 ? w.size : E < o ? E + 1 : 0;
          if (!w.has(S))
            return g(w, S);
          if (w.size < n) {
            for (; w.has(S); )
              S = Math.floor(Math.random() * o);
            return g(w, S);
          }
          if (w.size > i)
            throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
          for (; w.has(S); )
            S = Math.floor(Math.random() * i);
          return g(w, S);
        };
      }, a = /* @__PURE__ */ new WeakMap(), u = r(a), c = s(u, a), h = e(c);
      t.addUniqueNumber = h, t.generateUniqueNumber = c;
    });
  });
  var kp = M(function(es, Op) {
    v();
    m();
    _();
    (function(t, e) {
      _typeof(es) == "object" && _typeof(Op) < "u" ? e(es, Pp()) : typeof define == "function" && define.amd ? define(["exports", "fast-unique-numbers"], e) : (t = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : t || self, e(t.workerTimersBroker = {}, t.fastUniqueNumbers));
    })(es, function(t, e) {
      var r = function r2(s) {
        return s.method !== void 0 && s.method === "call";
      }, i = function i2(s) {
        return s.error === null && typeof s.id == "number";
      }, n = function n2(s) {
        var a = /* @__PURE__ */ new Map([[0, function() {
        }]]), u = /* @__PURE__ */ new Map([[0, function() {
        }]]), c = /* @__PURE__ */ new Map(), h = new Worker(s);
        h.addEventListener("message", function(E) {
          var S = E.data;
          if (r(S)) {
            var I = S.params, C = I.timerId, R = I.timerType;
            if (R === "interval") {
              var U = a.get(C);
              if (typeof U == "number") {
                var N = c.get(U);
                if (N === void 0 || N.timerId !== C || N.timerType !== R)
                  throw new Error("The timer is in an undefined state.");
              } else if (_typeof(U) < "u")
                U();
              else
                throw new Error("The timer is in an undefined state.");
            } else if (R === "timeout") {
              var W = u.get(C);
              if (typeof W == "number") {
                var K = c.get(W);
                if (K === void 0 || K.timerId !== C || K.timerType !== R)
                  throw new Error("The timer is in an undefined state.");
              } else if (_typeof(W) < "u")
                W(), u.delete(C);
              else
                throw new Error("The timer is in an undefined state.");
            }
          } else if (i(S)) {
            var z = S.id, Q = c.get(z);
            if (Q === void 0)
              throw new Error("The timer is in an undefined state.");
            var de = Q.timerId, Gt = Q.timerType;
            c.delete(z), Gt === "interval" ? a.delete(de) : u.delete(de);
          } else {
            var pe = S.error.message;
            throw new Error(pe);
          }
        });
        var d = function d2(S) {
          var I = e.generateUniqueNumber(c);
          c.set(I, {
            timerId: S,
            timerType: "interval"
          }), a.set(S, I), h.postMessage({
            id: I,
            method: "clear",
            params: {
              timerId: S,
              timerType: "interval"
            }
          });
        }, g = function g2(S) {
          var I = e.generateUniqueNumber(c);
          c.set(I, {
            timerId: S,
            timerType: "timeout"
          }), u.set(S, I), h.postMessage({
            id: I,
            method: "clear",
            params: {
              timerId: S,
              timerType: "timeout"
            }
          });
        }, y = function y2(S) {
          var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, C = e.generateUniqueNumber(a);
          return a.set(C, function() {
            S(), typeof a.get(C) == "function" && h.postMessage({
              id: null,
              method: "set",
              params: {
                delay: I,
                now: performance.now(),
                timerId: C,
                timerType: "interval"
              }
            });
          }), h.postMessage({
            id: null,
            method: "set",
            params: {
              delay: I,
              now: performance.now(),
              timerId: C,
              timerType: "interval"
            }
          }), C;
        }, w = function w2(S) {
          var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, C = e.generateUniqueNumber(u);
          return u.set(C, S), h.postMessage({
            id: null,
            method: "set",
            params: {
              delay: I,
              now: performance.now(),
              timerId: C,
              timerType: "timeout"
            }
          }), C;
        };
        return {
          clearInterval: d,
          clearTimeout: g,
          setInterval: y,
          setTimeout: w
        };
      };
      t.load = n;
    });
  });
  var Mp = M(function(ts, xp) {
    v();
    m();
    _();
    (function(t, e) {
      _typeof(ts) == "object" && _typeof(xp) < "u" ? e(ts, kp()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], e) : (t = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : t || self, e(t.workerTimers = {}, t.workerTimersBroker));
    })(ts, function(t, e) {
      var r = function r2(h, d) {
        var g = null;
        return function() {
          if (g !== null)
            return g;
          var y = new Blob([d], {
            type: "application/javascript; charset=utf-8"
          }), w = URL.createObjectURL(y);
          return g = h(w), setTimeout(function() {
            return URL.revokeObjectURL(w);
          }), g;
        };
      }, i = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`, n = r(e.load, i), o = function o2(h) {
        return n().clearInterval(h);
      }, s = function s2(h) {
        return n().clearTimeout(h);
      }, a = function a2() {
        var h;
        return (h = n()).setInterval.apply(h, arguments);
      }, u = function u2() {
        var h;
        return (h = n()).setTimeout.apply(h, arguments);
      };
      t.clearInterval = o, t.clearTimeout = s, t.setInterval = a, t.setTimeout = u;
    });
  });
  var qp = M(function(Ct) {
    v();
    m();
    _();
    var jv = Ct && Ct.__createBinding || (Object.create ? function(t, e, r, i) {
      i === void 0 && (i = r);
      var n = Object.getOwnPropertyDescriptor(e, r);
      (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = {
        enumerable: true,
        get: function get() {
          return e[r];
        }
      }), Object.defineProperty(t, i, n);
    } : function(t, e, r, i) {
      i === void 0 && (i = r), t[i] = e[r];
    }), Fv = Ct && Ct.__setModuleDefault || (Object.create ? function(t, e) {
      Object.defineProperty(t, "default", {
        enumerable: true,
        value: e
      });
    } : function(t, e) {
      t.default = e;
    }), Wv = Ct && Ct.__importStar || function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (t != null)
        for (var r in t)
          r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && jv(e, t, r);
      return Fv(e, t), e;
    };
    Object.defineProperty(Ct, "__esModule", {
      value: true
    });
    var qa = Wv(Pi()), Lp = Mp(), Up = {
      set: Lp.setTimeout,
      clear: Lp.clearTimeout
    }, Np = {
      set: function set(t, e) {
        return setTimeout(t, e);
      },
      clear: function clear(t) {
        return clearTimeout(t);
      }
    }, $v = function $v2(t) {
      switch (t) {
        case "native":
          return Np;
        case "worker":
          return Up;
        case "auto":
        default:
          return qa.default && !qa.isWebWorker && !qa.isReactNativeBrowser ? Up : Np;
      }
    };
    Ct.default = $v;
  });
  var ja = M(function(Oi) {
    v();
    m();
    _();
    var Hv = Oi && Oi.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Oi, "__esModule", {
      value: true
    });
    var Vv = Hv(qp()), Da = /* @__PURE__ */ function() {
      function Da2(e, r, i) {
        _classCallCheck(this, Da2);
        this.destroyed = false, this.keepalive = e * 1e3, this.checkPing = r, this.timer = (0, Vv.default)(i), this.reschedule();
      }
      return _createClass(Da2, [{
        key: "clear",
        value: function clear() {
          this.timerId && (this.timer.clear(this.timerId), this.timerId = null);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.clear(), this.destroyed = true;
        }
      }, {
        key: "reschedule",
        value: function reschedule() {
          var _this43 = this;
          this.destroyed || (this.clear(), this.timerId = this.timer.set(function() {
            _this43.destroyed || (_this43.checkPing(), _this43.reschedule());
          }, this.keepalive));
        }
      }]);
    }();
    Oi.default = Da;
  });
  var ss = M(function(Qe) {
    v();
    m();
    _();
    var zv = Qe && Qe.__createBinding || (Object.create ? function(t, e, r, i) {
      i === void 0 && (i = r);
      var n = Object.getOwnPropertyDescriptor(e, r);
      (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = {
        enumerable: true,
        get: function get() {
          return e[r];
        }
      }), Object.defineProperty(t, i, n);
    } : function(t, e, r, i) {
      i === void 0 && (i = r), t[i] = e[r];
    }), Kv = Qe && Qe.__setModuleDefault || (Object.create ? function(t, e) {
      Object.defineProperty(t, "default", {
        enumerable: true,
        value: e
      });
    } : function(t, e) {
      t.default = e;
    }), $p = Qe && Qe.__importStar || function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (t != null)
        for (var r in t)
          r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && zv(e, t, r);
      return Kv(e, t), e;
    }, Vt = Qe && Qe.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Qe, "__esModule", {
      value: true
    });
    var Gv = Vt(Gu()), Fa = Vt(Nd()), Qv = Vt(Jo()), Yv = jt(), Dp = Vt(Fd()), jp = $p($d()), Jv = Vt(ot()), rs = Vt(ea()), Xv = Vt(Ip()), is = Jr(), Zv = Tp(), eE = Vt(ja()), Fp = $p(Pi()), Wa = globalThis.setImmediate || function() {
      for (var _len19 = arguments.length, t = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        t[_key19] = arguments[_key19];
      }
      var e = t.shift();
      (0, is.nextTick)(function() {
        e.apply(void 0, t);
      });
    }, Wp = {
      keepalive: 60,
      reschedulePings: true,
      protocolId: "MQTT",
      protocolVersion: 4,
      reconnectPeriod: 1e3,
      connectTimeout: 30 * 1e3,
      clean: true,
      resubscribe: true,
      writeCache: true,
      timerVariant: "auto"
    }, ns = /* @__PURE__ */ function(_Zv$TypedEventEmitter) {
      function t(e, r) {
        var _this44;
        _classCallCheck(this, t);
        _this44 = _callSuper(this, t), _this44.options = r || {};
        for (var i in Wp)
          _typeof(_this44.options[i]) > "u" ? _this44.options[i] = Wp[i] : _this44.options[i] = r[i];
        _this44.log = _this44.options.log || (0, Jv.default)("mqttjs:client"), _this44.noop = _this44._noop.bind(_this44), _this44.log("MqttClient :: version:", t.VERSION), Fp.isWebWorker ? _this44.log("MqttClient :: environment", "webworker") : _this44.log("MqttClient :: environment", Fp.default ? "browser" : "node"), _this44.log("MqttClient :: options.protocol", r.protocol), _this44.log("MqttClient :: options.protocolVersion", r.protocolVersion), _this44.log("MqttClient :: options.username", r.username), _this44.log("MqttClient :: options.keepalive", r.keepalive), _this44.log("MqttClient :: options.reconnectPeriod", r.reconnectPeriod), _this44.log("MqttClient :: options.rejectUnauthorized", r.rejectUnauthorized), _this44.log("MqttClient :: options.properties.topicAliasMaximum", r.properties ? r.properties.topicAliasMaximum : void 0), _this44.options.clientId = typeof r.clientId == "string" ? r.clientId : t.defaultId(), _this44.log("MqttClient :: clientId", _this44.options.clientId), _this44.options.customHandleAcks = r.protocolVersion === 5 && r.customHandleAcks ? r.customHandleAcks : function() {
          for (var _len20 = arguments.length, i2 = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
            i2[_key20] = arguments[_key20];
          }
          i2[3](null, 0);
        }, _this44.options.writeCache || (Fa.default.writeToStream.cacheNumbers = false), _this44.streamBuilder = e, _this44.messageIdProvider = _typeof(_this44.options.messageIdProvider) > "u" ? new Qv.default() : _this44.options.messageIdProvider, _this44.outgoingStore = r.outgoingStore || new rs.default(), _this44.incomingStore = r.incomingStore || new rs.default(), _this44.queueQoSZero = r.queueQoSZero === void 0 ? true : r.queueQoSZero, _this44._resubscribeTopics = {}, _this44.messageIdToTopic = {}, _this44.pingTimer = null, _this44.connected = false, _this44.disconnecting = false, _this44.reconnecting = false, _this44.queue = [], _this44.connackTimer = null, _this44.reconnectTimer = null, _this44._storeProcessing = false, _this44._packetIdsDuringStoreProcessing = {}, _this44._storeProcessingQueue = [], _this44.outgoing = {}, _this44._firstConnection = true, r.properties && r.properties.topicAliasMaximum > 0 && (r.properties.topicAliasMaximum > 65535 ? _this44.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : _this44.topicAliasRecv = new Gv.default(r.properties.topicAliasMaximum)), _this44.on("connect", function() {
          var _this45 = _this44, i2 = _this45.queue, n = function n2() {
            var o = i2.shift();
            _this44.log("deliver :: entry %o", o);
            var s = null;
            if (!o) {
              _this44._resubscribe();
              return;
            }
            s = o.packet, _this44.log("deliver :: call _sendPacket for %o", s);
            var a = true;
            s.messageId && s.messageId !== 0 && (_this44.messageIdProvider.register(s.messageId) || (a = false)), a ? _this44._sendPacket(s, function(u) {
              o.cb && o.cb(u), n2();
            }) : (_this44.log("messageId: %d has already used. The message is skipped and removed.", s.messageId), n2());
          };
          _this44.log("connect :: sending queued packets"), n();
        }), _this44.on("close", function() {
          _this44.log("close :: connected set to `false`"), _this44.connected = false, _this44.log("close :: clearing connackTimer"), clearTimeout(_this44.connackTimer), _this44.log("close :: destroy ping timer"), _this44.pingTimer && (_this44.pingTimer.destroy(), _this44.pingTimer = null), _this44.topicAliasRecv && _this44.topicAliasRecv.clear(), _this44.log("close :: calling _setupReconnect"), _this44._setupReconnect();
        }), _this44.options.manualConnect || (_this44.log("MqttClient :: setting up stream"), _this44.connect());
        return _this44;
      }
      _inherits(t, _Zv$TypedEventEmitter);
      return _createClass(t, [{
        key: "handleAuth",
        value: function handleAuth(e, r) {
          r();
        }
      }, {
        key: "handleMessage",
        value: function handleMessage(e, r) {
          r();
        }
      }, {
        key: "_nextId",
        value: function _nextId() {
          return this.messageIdProvider.allocate();
        }
      }, {
        key: "getLastMessageId",
        value: function getLastMessageId() {
          return this.messageIdProvider.getLastAllocated();
        }
      }, {
        key: "connect",
        value: function connect() {
          var _this46 = this;
          var e;
          var r = new Yv.Writable(), i = Fa.default.parser(this.options), n = null, o = [];
          this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), i.on("packet", function(h) {
            _this46.log("parser :: on packet push to packets array."), o.push(h);
          });
          var s = function s2() {
            _this46.log("work :: getting next packet in queue");
            var h = o.shift();
            if (h)
              _this46.log("work :: packet pulled from queue"), (0, Xv.default)(_this46, h, a);
            else {
              _this46.log("work :: no packets in queue");
              var _d10 = n;
              n = null, _this46.log("work :: done flag is %s", !!_d10), _d10 && _d10();
            }
          }, a = function a2() {
            if (o.length)
              (0, is.nextTick)(s);
            else {
              var _h7 = n;
              n = null, _h7();
            }
          };
          r._write = function(h, d, g) {
            n = g, _this46.log("writable stream :: parsing buffer"), i.parse(h), s();
          };
          var u = function u2(h) {
            _this46.log("streamErrorHandler :: error", h.message), h.code ? (_this46.log("streamErrorHandler :: emitting error"), _this46.emit("error", h)) : _this46.noop(h);
          };
          this.log("connect :: pipe stream to writable stream"), this.stream.pipe(r), this.stream.on("error", u), this.stream.on("close", function() {
            _this46.log("(%s)stream :: on close", _this46.options.clientId), _this46._flushVolatile(), _this46.log("stream: emit close to MqttClient"), _this46.emit("close");
          }), this.log("connect: sending packet `connect`");
          var c = {
            cmd: "connect",
            protocolId: this.options.protocolId,
            protocolVersion: this.options.protocolVersion,
            clean: this.options.clean,
            clientId: this.options.clientId,
            keepalive: this.options.keepalive,
            username: this.options.username,
            password: this.options.password,
            properties: this.options.properties
          };
          if (this.options.will && (c.will = Object.assign(Object.assign({}, this.options.will), {
            payload: (e = this.options.will) === null || e === void 0 ? void 0 : e.payload
          })), this.topicAliasRecv && (c.properties || (c.properties = {}), this.topicAliasRecv && (c.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(c), i.on("error", this.emit.bind(this, "error")), this.options.properties) {
            if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData)
              return this.end(function() {
                return _this46.emit("error", new Error("Packet has no Authentication Method"));
              }), this;
            if (this.options.properties.authenticationMethod && this.options.authPacket && _typeof(this.options.authPacket) == "object") {
              var _h8 = Object.assign({
                cmd: "auth",
                reasonCode: 0
              }, this.options.authPacket);
              this._writePacket(_h8);
            }
          }
          return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(function() {
            _this46.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), _this46.emit("error", new Error("connack timeout")), _this46._cleanUp(true);
          }, this.options.connectTimeout), this;
        }
      }, {
        key: "publish",
        value: function publish(e, r, i, n) {
          var _this47 = this;
          this.log("publish :: message `%s` to topic `%s`", r, e);
          var o = this.options;
          typeof i == "function" && (n = i, i = null), i = i || {}, i = Object.assign(Object.assign({}, {
            qos: 0,
            retain: false,
            dup: false
          }), i);
          var _i17 = i, a = _i17.qos, u = _i17.retain, c = _i17.dup, h = _i17.properties, d = _i17.cbStorePut;
          if (this._checkDisconnecting(n))
            return this;
          var g = function g2() {
            var y = 0;
            if ((a === 1 || a === 2) && (y = _this47._nextId(), y === null))
              return _this47.log("No messageId left"), false;
            var w = {
              cmd: "publish",
              topic: e,
              payload: r,
              qos: a,
              retain: u,
              messageId: y,
              dup: c
            };
            switch (o.protocolVersion === 5 && (w.properties = h), _this47.log("publish :: qos", a), a) {
              case 1:
              case 2:
                _this47.outgoing[w.messageId] = {
                  volatile: false,
                  cb: n || _this47.noop
                }, _this47.log("MqttClient:publish: packet cmd: %s", w.cmd), _this47._sendPacket(w, void 0, d);
                break;
              default:
                _this47.log("MqttClient:publish: packet cmd: %s", w.cmd), _this47._sendPacket(w, n, d);
                break;
            }
            return true;
          };
          return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !g()) && this._storeProcessingQueue.push({
            invoke: g,
            cbStorePut: i.cbStorePut,
            callback: n
          }), this;
        }
      }, {
        key: "publishAsync",
        value: function publishAsync(e, r, i) {
          var _this48 = this;
          return new Promise(function(n, o) {
            _this48.publish(e, r, i, function(s, a) {
              s ? o(s) : n(a);
            });
          });
        }
      }, {
        key: "subscribe",
        value: function subscribe(e, r, i) {
          var _this49 = this;
          var n = this.options.protocolVersion;
          typeof r == "function" && (i = r), i = i || this.noop;
          var o = false, s = [];
          typeof e == "string" ? (e = [e], s = e) : Array.isArray(e) ? s = e : _typeof(e) == "object" && (o = e.resubscribe, delete e.resubscribe, s = Object.keys(e));
          var a = jp.validateTopics(s);
          if (a !== null)
            return Wa(i, new Error("Invalid topic ".concat(a))), this;
          if (this._checkDisconnecting(i))
            return this.log("subscribe: discconecting true"), this;
          var u = {
            qos: 0
          };
          n === 5 && (u.nl = false, u.rap = false, u.rh = 0), r = Object.assign(Object.assign({}, u), r);
          var c = r.properties, h = [], d = function d2(y, w) {
            if (w = w || r, !Object.prototype.hasOwnProperty.call(_this49._resubscribeTopics, y) || _this49._resubscribeTopics[y].qos < w.qos || o) {
              var _E8 = {
                topic: y,
                qos: w.qos
              };
              n === 5 && (_E8.nl = w.nl, _E8.rap = w.rap, _E8.rh = w.rh, _E8.properties = c), _this49.log("subscribe: pushing topic `%s` and qos `%s` to subs list", _E8.topic, _E8.qos), h.push(_E8);
            }
          };
          if (Array.isArray(e) ? e.forEach(function(y) {
            _this49.log("subscribe: array topic %s", y), d(y);
          }) : Object.keys(e).forEach(function(y) {
            _this49.log("subscribe: object topic %s, %o", y, e[y]), d(y, e[y]);
          }), !h.length)
            return i(null, []), this;
          var g = function g2() {
            var y = _this49._nextId();
            if (y === null)
              return _this49.log("No messageId left"), false;
            var w = {
              cmd: "subscribe",
              subscriptions: h,
              messageId: y
            };
            if (c && (w.properties = c), _this49.options.resubscribe) {
              _this49.log("subscribe :: resubscribe true");
              var _E9 = [];
              h.forEach(function(S) {
                if (_this49.options.reconnectPeriod > 0) {
                  var I = {
                    qos: S.qos
                  };
                  n === 5 && (I.nl = S.nl || false, I.rap = S.rap || false, I.rh = S.rh || 0, I.properties = S.properties), _this49._resubscribeTopics[S.topic] = I, _E9.push(S.topic);
                }
              }), _this49.messageIdToTopic[w.messageId] = _E9;
            }
            return _this49.outgoing[w.messageId] = {
              volatile: true,
              cb: function cb(E, S) {
                if (!E) {
                  var I = S.granted;
                  for (var C = 0; C < I.length; C += 1)
                    h[C].qos = I[C];
                }
                i(E, h);
              }
            }, _this49.log("subscribe :: call _sendPacket"), _this49._sendPacket(w), true;
          };
          return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !g()) && this._storeProcessingQueue.push({
            invoke: g,
            callback: i
          }), this;
        }
      }, {
        key: "subscribeAsync",
        value: function subscribeAsync(e, r) {
          var _this50 = this;
          return new Promise(function(i, n) {
            _this50.subscribe(e, r, function(o, s) {
              o ? n(o) : i(s);
            });
          });
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e, r, i) {
          var _this51 = this;
          typeof e == "string" && (e = [e]), typeof r == "function" && (i = r), i = i || this.noop;
          var n = jp.validateTopics(e);
          if (n !== null)
            return Wa(i, new Error("Invalid topic ".concat(n))), this;
          if (this._checkDisconnecting(i))
            return this;
          var o = function o2() {
            var s = _this51._nextId();
            if (s === null)
              return _this51.log("No messageId left"), false;
            var a = {
              cmd: "unsubscribe",
              messageId: s,
              unsubscriptions: []
            };
            return typeof e == "string" ? a.unsubscriptions = [e] : Array.isArray(e) && (a.unsubscriptions = e), _this51.options.resubscribe && a.unsubscriptions.forEach(function(u) {
              delete _this51._resubscribeTopics[u];
            }), _typeof(r) == "object" && r.properties && (a.properties = r.properties), _this51.outgoing[a.messageId] = {
              volatile: true,
              cb: i
            }, _this51.log("unsubscribe: call _sendPacket"), _this51._sendPacket(a), true;
          };
          return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !o()) && this._storeProcessingQueue.push({
            invoke: o,
            callback: i
          }), this;
        }
      }, {
        key: "unsubscribeAsync",
        value: function unsubscribeAsync(e, r) {
          var _this52 = this;
          return new Promise(function(i, n) {
            _this52.unsubscribe(e, r, function(o, s) {
              o ? n(o) : i(s);
            });
          });
        }
      }, {
        key: "end",
        value: function end(e, r, i) {
          var _this53 = this;
          this.log("end :: (%s)", this.options.clientId), (e == null || typeof e != "boolean") && (i = i || r, r = e, e = false), _typeof(r) != "object" && (i = i || r, r = null), this.log("end :: cb? %s", !!i), (!i || typeof i != "function") && (i = this.noop);
          var n = function n2() {
            _this53.log("end :: closeStores: closing incoming and outgoing stores"), _this53.disconnected = true, _this53.incomingStore.close(function(s) {
              _this53.outgoingStore.close(function(a) {
                if (_this53.log("end :: closeStores: emitting end"), _this53.emit("end"), i) {
                  var _u24 = s || a;
                  _this53.log("end :: closeStores: invoking callback with args"), i(_u24);
                }
              });
            }), _this53._deferredReconnect && _this53._deferredReconnect();
          }, o = function o2() {
            _this53.log("end :: (%s) :: finish :: calling _cleanUp with force %s", _this53.options.clientId, e), _this53._cleanUp(e, function() {
              _this53.log("end :: finish :: calling process.nextTick on closeStores"), (0, is.nextTick)(n);
            }, r);
          };
          return this.disconnecting ? (i(), this) : (this._clearReconnect(), this.disconnecting = true, !e && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, o, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), o()), this);
        }
      }, {
        key: "endAsync",
        value: function endAsync(e, r) {
          var _this54 = this;
          return new Promise(function(i, n) {
            _this54.end(e, r, function(o) {
              o ? n(o) : i();
            });
          });
        }
      }, {
        key: "removeOutgoingMessage",
        value: function removeOutgoingMessage(e) {
          if (this.outgoing[e]) {
            var _r49 = this.outgoing[e].cb;
            this._removeOutgoingAndStoreMessage(e, function() {
              _r49(new Error("Message removed"));
            });
          }
          return this;
        }
      }, {
        key: "reconnect",
        value: function reconnect(e) {
          var _this55 = this;
          this.log("client reconnect");
          var r = function r2() {
            e ? (_this55.options.incomingStore = e.incomingStore, _this55.options.outgoingStore = e.outgoingStore) : (_this55.options.incomingStore = null, _this55.options.outgoingStore = null), _this55.incomingStore = _this55.options.incomingStore || new rs.default(), _this55.outgoingStore = _this55.options.outgoingStore || new rs.default(), _this55.disconnecting = false, _this55.disconnected = false, _this55._deferredReconnect = null, _this55._reconnect();
          };
          return this.disconnecting && !this.disconnected ? this._deferredReconnect = r : r(), this;
        }
      }, {
        key: "_flushVolatile",
        value: function _flushVolatile() {
          var _this56 = this;
          this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach(function(e) {
            _this56.outgoing[e].volatile && typeof _this56.outgoing[e].cb == "function" && (_this56.outgoing[e].cb(new Error("Connection closed")), delete _this56.outgoing[e]);
          }));
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var _this57 = this;
          this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach(function(e) {
            typeof _this57.outgoing[e].cb == "function" && (_this57.outgoing[e].cb(new Error("Connection closed")), delete _this57.outgoing[e]);
          }));
        }
      }, {
        key: "_removeTopicAliasAndRecoverTopicName",
        value: function _removeTopicAliasAndRecoverTopicName(e) {
          var r;
          e.properties && (r = e.properties.topicAlias);
          var i = e.topic.toString();
          if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", r, i), i.length === 0) {
            if (_typeof(r) > "u")
              return new Error("Unregistered Topic Alias");
            if (i = this.topicAliasSend.getTopicByAlias(r), _typeof(i) > "u")
              return new Error("Unregistered Topic Alias");
            e.topic = i;
          }
          r && delete e.properties.topicAlias;
        }
      }, {
        key: "_checkDisconnecting",
        value: function _checkDisconnecting(e) {
          return this.disconnecting && (e && e !== this.noop ? e(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting;
        }
      }, {
        key: "_reconnect",
        value: function _reconnect() {
          var _this58 = this;
          this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end(function() {
            _this58.connect();
          }), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect());
        }
      }, {
        key: "_setupReconnect",
        value: function _setupReconnect() {
          var _this59 = this;
          !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = true), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval(function() {
            _this59.log("reconnectTimer :: reconnect triggered!"), _this59._reconnect();
          }, this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...");
        }
      }, {
        key: "_clearReconnect",
        value: function _clearReconnect() {
          this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null);
        }
      }, {
        key: "_cleanUp",
        value: function _cleanUp(e, r) {
          var _this60 = this;
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (r && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", r)), this.log("_cleanUp :: forced? %s", e), e)
            this.options.reconnectPeriod === 0 && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
          else {
            var _n40 = Object.assign({
              cmd: "disconnect"
            }, i);
            this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(_n40, function() {
              _this60.log("_cleanUp :: (%s) :: destroying stream", _this60.options.clientId), Wa(function() {
                _this60.stream.end(function() {
                  _this60.log("_cleanUp :: (%s) :: stream destroyed", _this60.options.clientId);
                });
              });
            });
          }
          !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this.pingTimer && (this.log("_cleanUp :: destroy pingTimer"), this.pingTimer.destroy(), this.pingTimer = null), r && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", r), r());
        }
      }, {
        key: "_storeAndSend",
        value: function _storeAndSend(e, r, i) {
          var _this61 = this;
          this.log("storeAndSend :: store packet with cmd %s to outgoingStore", e.cmd);
          var n = e, o;
          if (n.cmd === "publish" && (n = (0, Dp.default)(e), o = this._removeTopicAliasAndRecoverTopicName(n), o))
            return r && r(o);
          this.outgoingStore.put(n, function(s) {
            if (s)
              return r && r(s);
            i(), _this61._writePacket(e, r);
          });
        }
      }, {
        key: "_applyTopicAlias",
        value: function _applyTopicAlias(e) {
          if (this.options.protocolVersion === 5 && e.cmd === "publish") {
            var _r50;
            e.properties && (_r50 = e.properties.topicAlias);
            var i = e.topic.toString();
            if (this.topicAliasSend) {
              if (_r50) {
                if (i.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", i, _r50), !this.topicAliasSend.put(i, _r50)))
                  return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", i, _r50), new Error("Sending Topic Alias out of range");
              } else
                i.length !== 0 && (this.options.autoAssignTopicAlias ? (_r50 = this.topicAliasSend.getAliasByTopic(i), _r50 ? (e.topic = "", e.properties = Object.assign(Object.assign({}, e.properties), {
                  topicAlias: _r50
                }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", i, _r50)) : (_r50 = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(i, _r50), e.properties = Object.assign(Object.assign({}, e.properties), {
                  topicAlias: _r50
                }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", i, _r50))) : this.options.autoUseTopicAlias && (_r50 = this.topicAliasSend.getAliasByTopic(i), _r50 && (e.topic = "", e.properties = Object.assign(Object.assign({}, e.properties), {
                  topicAlias: _r50
                }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", i, _r50))));
            } else if (_r50)
              return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", i, _r50), new Error("Sending Topic Alias out of range");
          }
        }
      }, {
        key: "_noop",
        value: function _noop(e) {
          this.log("noop ::", e);
        }
      }, {
        key: "_writePacket",
        value: function _writePacket(e, r) {
          this.log("_writePacket :: packet: %O", e), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", e), this._shiftPingInterval(), this.log("_writePacket :: writing to stream");
          var i = Fa.default.writeToStream(e, this.stream, this.options);
          this.log("_writePacket :: writeToStream result %s", i), !i && r && r !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", r)) : r && (this.log("_writePacket :: invoking cb"), r());
        }
      }, {
        key: "_sendPacket",
        value: function _sendPacket(e, r, i, n) {
          this.log("_sendPacket :: (%s) ::  start", this.options.clientId), i = i || this.noop, r = r || this.noop;
          var o = this._applyTopicAlias(e);
          if (o) {
            r(o);
            return;
          }
          if (!this.connected) {
            if (e.cmd === "auth") {
              this._writePacket(e, r);
              return;
            }
            this.log("_sendPacket :: client not connected. Storing packet offline."), this._storePacket(e, r, i);
            return;
          }
          if (n) {
            this._writePacket(e, r);
            return;
          }
          switch (e.cmd) {
            case "publish":
              break;
            case "pubrel":
              this._storeAndSend(e, r, i);
              return;
            default:
              this._writePacket(e, r);
              return;
          }
          switch (e.qos) {
            case 2:
            case 1:
              this._storeAndSend(e, r, i);
              break;
            case 0:
            default:
              this._writePacket(e, r);
              break;
          }
          this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
        }
      }, {
        key: "_storePacket",
        value: function _storePacket(e, r, i) {
          this.log("_storePacket :: packet: %o", e), this.log("_storePacket :: cb? %s", !!r), i = i || this.noop;
          var n = e;
          if (n.cmd === "publish") {
            n = (0, Dp.default)(e);
            var _s18 = this._removeTopicAliasAndRecoverTopicName(n);
            if (_s18)
              return r && r(_s18);
          }
          var o = n.qos || 0;
          o === 0 && this.queueQoSZero || n.cmd !== "publish" ? this.queue.push({
            packet: n,
            cb: r
          }) : o > 0 ? (r = this.outgoing[n.messageId] ? this.outgoing[n.messageId].cb : null, this.outgoingStore.put(n, function(s) {
            if (s)
              return r && r(s);
            i();
          })) : r && r(new Error("No connection to broker"));
        }
      }, {
        key: "_setupPingTimer",
        value: function _setupPingTimer() {
          var _this62 = this;
          this.log("_setupPingTimer :: keepalive %d (seconds)", this.options.keepalive), !this.pingTimer && this.options.keepalive && (this.pingResp = true, this.pingTimer = new eE.default(this.options.keepalive, function() {
            _this62._checkPing();
          }, this.options.timerVariant));
        }
      }, {
        key: "_shiftPingInterval",
        value: function _shiftPingInterval() {
          this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule();
        }
      }, {
        key: "_checkPing",
        value: function _checkPing() {
          this.log("_checkPing :: checking ping..."), this.pingResp ? (this.log("_checkPing :: ping response received. Clearing flag and sending `pingreq`"), this.pingResp = false, this._sendPacket({
            cmd: "pingreq"
          })) : (this.emit("error", new Error("Keepalive timeout")), this.log("_checkPing :: calling _cleanUp with force true"), this._cleanUp(true));
        }
      }, {
        key: "_resubscribe",
        value: function _resubscribe() {
          this.log("_resubscribe");
          var e = Object.keys(this._resubscribeTopics);
          if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && e.length > 0)
            if (this.options.resubscribe) {
              if (this.options.protocolVersion === 5) {
                this.log("_resubscribe: protocolVersion 5");
                for (var _r51 = 0; _r51 < e.length; _r51++) {
                  var i = {};
                  i[e[_r51]] = this._resubscribeTopics[e[_r51]], i.resubscribe = true, this.subscribe(i, {
                    properties: i[e[_r51]].properties
                  });
                }
              } else
                this._resubscribeTopics.resubscribe = true, this.subscribe(this._resubscribeTopics);
            } else
              this._resubscribeTopics = {};
          this._firstConnection = false;
        }
      }, {
        key: "_onConnect",
        value: function _onConnect(e) {
          var _this63 = this;
          if (this.disconnected) {
            this.emit("connect", e);
            return;
          }
          this.connackPacket = e, this.messageIdProvider.clear(), this._setupPingTimer(), this.connected = true;
          var r = function r2() {
            var i = _this63.outgoingStore.createStream(), n = function n2() {
              i.destroy(), i = null, _this63._flushStoreProcessingQueue(), o();
            }, o = function o2() {
              _this63._storeProcessing = false, _this63._packetIdsDuringStoreProcessing = {};
            };
            _this63.once("close", n), i.on("error", function(a) {
              o(), _this63._flushStoreProcessingQueue(), _this63.removeListener("close", n), _this63.emit("error", a);
            });
            var s = function s2() {
              if (!i)
                return;
              var a = i.read(1), u;
              if (!a) {
                i.once("readable", s2);
                return;
              }
              if (_this63._storeProcessing = true, _this63._packetIdsDuringStoreProcessing[a.messageId]) {
                s2();
                return;
              }
              !_this63.disconnecting && !_this63.reconnectTimer ? (u = _this63.outgoing[a.messageId] ? _this63.outgoing[a.messageId].cb : null, _this63.outgoing[a.messageId] = {
                volatile: false,
                cb: function cb(c, h) {
                  u && u(c, h), s2();
                }
              }, _this63._packetIdsDuringStoreProcessing[a.messageId] = true, _this63.messageIdProvider.register(a.messageId) ? _this63._sendPacket(a, void 0, void 0, true) : _this63.log("messageId: %d has already used.", a.messageId)) : i.destroy && i.destroy();
            };
            i.on("end", function() {
              var a = true;
              for (var _u25 in _this63._packetIdsDuringStoreProcessing)
                if (!_this63._packetIdsDuringStoreProcessing[_u25]) {
                  a = false;
                  break;
                }
              _this63.removeListener("close", n), a ? (o(), _this63._invokeAllStoreProcessingQueue(), _this63.emit("connect", e)) : r2();
            }), s();
          };
          r();
        }
      }, {
        key: "_invokeStoreProcessingQueue",
        value: function _invokeStoreProcessingQueue() {
          if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
            var e = this._storeProcessingQueue[0];
            if (e && e.invoke())
              return this._storeProcessingQueue.shift(), true;
          }
          return false;
        }
      }, {
        key: "_invokeAllStoreProcessingQueue",
        value: function _invokeAllStoreProcessingQueue() {
          for (; this._invokeStoreProcessingQueue(); )
            ;
        }
      }, {
        key: "_flushStoreProcessingQueue",
        value: function _flushStoreProcessingQueue() {
          var _iterator37 = _createForOfIteratorHelper(this._storeProcessingQueue), _step37;
          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
              var e = _step37.value;
              e.cbStorePut && e.cbStorePut(new Error("Connection closed")), e.callback && e.callback(new Error("Connection closed"));
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
          this._storeProcessingQueue.splice(0);
        }
      }, {
        key: "_removeOutgoingAndStoreMessage",
        value: function _removeOutgoingAndStoreMessage(e, r) {
          var _this64 = this;
          delete this.outgoing[e], this.outgoingStore.del({
            messageId: e
          }, function(i, n) {
            r(i, n), _this64.messageIdProvider.deallocate(e), _this64._invokeStoreProcessingQueue();
          });
        }
      }], [{
        key: "defaultId",
        value: function defaultId() {
          return "mqttjs_".concat(Math.random().toString(16).substr(2, 8));
        }
      }]);
    }(Zv.TypedEventEmitter);
    ns.VERSION = is.MQTTJS_VERSION;
    Qe.default = ns;
  });
  var Hp = M(function(Ha) {
    v();
    m();
    _();
    Object.defineProperty(Ha, "__esModule", {
      value: true
    });
    var tE = Ma(), $a = /* @__PURE__ */ function() {
      function $a2() {
        _classCallCheck(this, $a2);
        this.numberAllocator = new tE.NumberAllocator(1, 65535);
      }
      return _createClass($a2, [{
        key: "allocate",
        value: function allocate() {
          return this.lastId = this.numberAllocator.alloc(), this.lastId;
        }
      }, {
        key: "getLastAllocated",
        value: function getLastAllocated() {
          return this.lastId;
        }
      }, {
        key: "register",
        value: function register(e) {
          return this.numberAllocator.use(e);
        }
      }, {
        key: "deallocate",
        value: function deallocate(e) {
          this.numberAllocator.free(e);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.numberAllocator.clear();
        }
      }]);
    }();
    Ha.default = $a;
  });
  function Ir(t) {
    throw new RangeError(sE[t]);
  }
  function Vp(t, e) {
    var r = t.split("@"), i = "";
    r.length > 1 && (i = r[0] + "@", t = r[1]);
    var n = function(o, s) {
      var a = [], u = o.length;
      for (; u--; )
        a[u] = s(o[u]);
      return a;
    }((t = t.replace(nE, ".")).split("."), e).join(".");
    return i + n;
  }
  function Qp(t) {
    var e = [], r = 0, i = t.length;
    for (; r < i; ) {
      var _n41 = t.charCodeAt(r++);
      if (_n41 >= 55296 && _n41 <= 56319 && r < i) {
        var _o34 = t.charCodeAt(r++);
        (64512 & _o34) == 56320 ? e.push(((1023 & _n41) << 10) + (1023 & _o34) + 65536) : (e.push(_n41), r--);
      } else
        e.push(_n41);
    }
    return e;
  }
  var rE, iE, nE, sE, dt, Va, zp, Yp, Kp, Gp, zt, Jp = we(function() {
    v();
    m();
    _();
    rE = /^xn--/, iE = /[^\0-\x7E]/, nE = /[\x2E\u3002\uFF0E\uFF61]/g, sE = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, dt = Math.floor, Va = String.fromCharCode;
    zp = function zp2(t, e) {
      return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
    }, Yp = function Yp2(t, e, r) {
      var i = 0;
      for (t = r ? dt(t / 700) : t >> 1, t += dt(t / e); t > 455; i += 36)
        t = dt(t / 35);
      return dt(i + 36 * t / (t + 38));
    }, Kp = function Kp2(t) {
      var e = [], r = t.length, i = 0, n = 128, o = 72, s = t.lastIndexOf("-");
      s < 0 && (s = 0);
      for (var _u26 = 0; _u26 < s; ++_u26)
        t.charCodeAt(_u26) >= 128 && Ir("not-basic"), e.push(t.charCodeAt(_u26));
      for (var _u27 = s > 0 ? s + 1 : 0; _u27 < r; ) {
        var _c17 = i;
        for (var _d11 = 1, _g15 = 36; ; _g15 += 36) {
          _u27 >= r && Ir("invalid-input");
          var _y14 = (a = t.charCodeAt(_u27++)) - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : 36;
          (_y14 >= 36 || _y14 > dt((2147483647 - i) / _d11)) && Ir("overflow"), i += _y14 * _d11;
          var _w6 = _g15 <= o ? 1 : _g15 >= o + 26 ? 26 : _g15 - o;
          if (_y14 < _w6)
            break;
          var _E10 = 36 - _w6;
          _d11 > dt(2147483647 / _E10) && Ir("overflow"), _d11 *= _E10;
        }
        var _h9 = e.length + 1;
        o = Yp(i - _c17, _h9, _c17 == 0), dt(i / _h9) > 2147483647 - n && Ir("overflow"), n += dt(i / _h9), i %= _h9, e.splice(i++, 0, n);
      }
      var a;
      return String.fromCodePoint.apply(String, e);
    }, Gp = function Gp2(t) {
      var e = [], r = (t = Qp(t)).length, i = 128, n = 0, o = 72;
      var _iterator38 = _createForOfIteratorHelper(t), _step38;
      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
          var _u29 = _step38.value;
          _u29 < 128 && e.push(Va(_u29));
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
      var s = e.length, a = s;
      for (s && e.push("-"); a < r; ) {
        var _u28 = 2147483647;
        var _iterator39 = _createForOfIteratorHelper(t), _step39;
        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
            var _h10 = _step39.value;
            _h10 >= i && _h10 < _u28 && (_u28 = _h10);
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
        var _c18 = a + 1;
        _u28 - i > dt((2147483647 - n) / _c18) && Ir("overflow"), n += (_u28 - i) * _c18, i = _u28;
        var _iterator40 = _createForOfIteratorHelper(t), _step40;
        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done; ) {
            var _h11 = _step40.value;
            if (_h11 < i && ++n > 2147483647 && Ir("overflow"), _h11 == i) {
              var _d12 = n;
              for (var _g16 = 36; ; _g16 += 36) {
                var _y15 = _g16 <= o ? 1 : _g16 >= o + 26 ? 26 : _g16 - o;
                if (_d12 < _y15)
                  break;
                var _w7 = _d12 - _y15, _E11 = 36 - _y15;
                e.push(Va(zp(_y15 + _w7 % _E11, 0))), _d12 = dt(_w7 / _E11);
              }
              e.push(Va(zp(_d12, 0))), o = Yp(n, _c18, a == s), n = 0, ++a;
            }
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
        ++n, ++i;
      }
      return e.join("");
    }, zt = {
      version: "2.1.0",
      ucs2: {
        decode: Qp,
        encode: function encode(t) {
          return String.fromCodePoint.apply(String, _toConsumableArray(t));
        }
      },
      decode: Kp,
      encode: Gp,
      toASCII: function toASCII(t) {
        return Vp(t, function(e) {
          return iE.test(e) ? "xn--" + Gp(e) : e;
        });
      },
      toUnicode: function toUnicode(t) {
        return Vp(t, function(e) {
          return rE.test(e) ? Kp(e.slice(4).toLowerCase()) : e;
        });
      }
    };
    zt.decode;
    zt.encode;
    zt.toASCII;
    zt.toUnicode;
    zt.ucs2;
    zt.version;
  });
  function oE(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var aE, ki, lE, pt, Xp = we(function() {
    v();
    m();
    _();
    aE = function aE2(t, e, r, i) {
      e = e || "&", r = r || "=";
      var n = {};
      if (typeof t != "string" || t.length === 0)
        return n;
      var o = /\+/g;
      t = t.split(e);
      var s = 1e3;
      i && typeof i.maxKeys == "number" && (s = i.maxKeys);
      var a = t.length;
      s > 0 && a > s && (a = s);
      for (var u = 0; u < a; ++u) {
        var c, h, d, g, y = t[u].replace(o, "%20"), w = y.indexOf(r);
        w >= 0 ? (c = y.substr(0, w), h = y.substr(w + 1)) : (c = y, h = ""), d = decodeURIComponent(c), g = decodeURIComponent(h), oE(n, d) ? Array.isArray(n[d]) ? n[d].push(g) : n[d] = [n[d], g] : n[d] = g;
      }
      return n;
    }, ki = function ki2(t) {
      switch (_typeof(t)) {
        case "string":
          return t;
        case "boolean":
          return t ? "true" : "false";
        case "number":
          return isFinite(t) ? t : "";
        default:
          return "";
      }
    }, lE = function lE2(t, e, r, i) {
      return e = e || "&", r = r || "=", t === null && (t = void 0), _typeof(t) == "object" ? Object.keys(t).map(function(n) {
        var o = encodeURIComponent(ki(n)) + r;
        return Array.isArray(t[n]) ? t[n].map(function(s) {
          return o + encodeURIComponent(ki(s));
        }).join(e) : o + encodeURIComponent(ki(t[n]));
      }).join(e) : i ? encodeURIComponent(ki(i)) + r + encodeURIComponent(ki(t)) : "";
    }, pt = {};
    pt.decode = pt.parse = aE, pt.encode = pt.stringify = lE;
    pt.decode;
    pt.encode;
    pt.parse;
    pt.stringify;
  });
  function za() {
    throw new Error("setTimeout has not been defined");
  }
  function Ka() {
    throw new Error("clearTimeout has not been defined");
  }
  function tg(t) {
    if (Pt === setTimeout)
      return setTimeout(t, 0);
    if ((Pt === za || !Pt) && setTimeout)
      return Pt = setTimeout, setTimeout(t, 0);
    try {
      return Pt(t, 0);
    } catch (_unused13) {
      try {
        return Pt.call(null, t, 0);
      } catch (_unused14) {
        return Pt.call(this || ii, t, 0);
      }
    }
  }
  function uE() {
    ri && Tr && (ri = false, Tr.length ? kt = Tr.concat(kt) : os = -1, kt.length && rg());
  }
  function rg() {
    if (!ri) {
      var t = tg(uE);
      ri = true;
      for (var e = kt.length; e; ) {
        for (Tr = kt, kt = []; ++os < e; )
          Tr && Tr[os].run();
        os = -1, e = kt.length;
      }
      Tr = null, ri = false, function(r) {
        if (Ot === clearTimeout)
          return clearTimeout(r);
        if ((Ot === Ka || !Ot) && clearTimeout)
          return Ot = clearTimeout, clearTimeout(r);
        try {
          Ot(r);
        } catch (_unused15) {
          try {
            return Ot.call(null, r);
          } catch (_unused16) {
            return Ot.call(this || ii, r);
          }
        }
      }(t);
    }
  }
  function Zp(t, e) {
    (this || ii).fun = t, (this || ii).array = e;
  }
  function Bt() {
  }
  var eg, Pt, Ot, ii, fe, Tr, kt, ri, os, ne, ig = we(function() {
    v();
    m();
    _();
    ii = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : global, fe = eg = {};
    (function() {
      try {
        Pt = typeof setTimeout == "function" ? setTimeout : za;
      } catch (_unused17) {
        Pt = za;
      }
      try {
        Ot = typeof clearTimeout == "function" ? clearTimeout : Ka;
      } catch (_unused18) {
        Ot = Ka;
      }
    })();
    kt = [], ri = false, os = -1;
    fe.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
      kt.push(new Zp(t, e)), kt.length !== 1 || ri || tg(rg);
    }, Zp.prototype.run = function() {
      (this || ii).fun.apply(null, (this || ii).array);
    }, fe.title = "browser", fe.browser = true, fe.env = {}, fe.argv = [], fe.version = "", fe.versions = {}, fe.on = Bt, fe.addListener = Bt, fe.once = Bt, fe.off = Bt, fe.removeListener = Bt, fe.removeAllListeners = Bt, fe.emit = Bt, fe.prependListener = Bt, fe.prependOnceListener = Bt, fe.listeners = function(t) {
      return [];
    }, fe.binding = function(t) {
      throw new Error("process.binding is not supported");
    }, fe.cwd = function() {
      return "/";
    }, fe.chdir = function(t) {
      throw new Error("process.chdir is not supported");
    }, fe.umask = function() {
      return 0;
    };
    ne = eg;
    ne.addListener;
    ne.argv;
    ne.binding;
    ne.browser;
    ne.chdir;
    ne.cwd;
    ne.emit;
    ne.env;
    ne.listeners;
    ne.nextTick;
    ne.off;
    ne.on;
    ne.once;
    ne.prependListener;
    ne.prependOnceListener;
    ne.removeAllListeners;
    ne.removeListener;
    ne.title;
    ne.umask;
    ne.version;
    ne.versions;
  });
  function fE() {
    if (ng)
      return Ga;
    ng = true;
    var t = Ga = {}, e, r;
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function n() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? e = setTimeout : e = i;
      } catch (_unused19) {
        e = i;
      }
      try {
        typeof clearTimeout == "function" ? r = clearTimeout : r = n;
      } catch (_unused20) {
        r = n;
      }
    })();
    function o(E) {
      if (e === setTimeout)
        return setTimeout(E, 0);
      if ((e === i || !e) && setTimeout)
        return e = setTimeout, setTimeout(E, 0);
      try {
        return e(E, 0);
      } catch (_unused21) {
        try {
          return e.call(null, E, 0);
        } catch (_unused22) {
          return e.call(this || ni, E, 0);
        }
      }
    }
    function s(E) {
      if (r === clearTimeout)
        return clearTimeout(E);
      if ((r === n || !r) && clearTimeout)
        return r = clearTimeout, clearTimeout(E);
      try {
        return r(E);
      } catch (_unused23) {
        try {
          return r.call(null, E);
        } catch (_unused24) {
          return r.call(this || ni, E);
        }
      }
    }
    var a = [], u = false, c, h = -1;
    function d() {
      !u || !c || (u = false, c.length ? a = c.concat(a) : h = -1, a.length && g());
    }
    function g() {
      if (!u) {
        var E = o(d);
        u = true;
        for (var S = a.length; S; ) {
          for (c = a, a = []; ++h < S; )
            c && c[h].run();
          h = -1, S = a.length;
        }
        c = null, u = false, s(E);
      }
    }
    t.nextTick = function(E) {
      var S = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var I = 1; I < arguments.length; I++)
          S[I - 1] = arguments[I];
      a.push(new y(E, S)), a.length === 1 && !u && o(g);
    };
    function y(E, S) {
      (this || ni).fun = E, (this || ni).array = S;
    }
    y.prototype.run = function() {
      (this || ni).fun.apply(null, (this || ni).array);
    }, t.title = "browser", t.browser = true, t.env = {}, t.argv = [], t.version = "", t.versions = {};
    function w() {
    }
    return t.on = w, t.addListener = w, t.once = w, t.off = w, t.removeListener = w, t.removeAllListeners = w, t.emit = w, t.prependListener = w, t.prependOnceListener = w, t.listeners = function(E) {
      return [];
    }, t.binding = function(E) {
      throw new Error("process.binding is not supported");
    }, t.cwd = function() {
      return "/";
    }, t.chdir = function(E) {
      throw new Error("process.chdir is not supported");
    }, t.umask = function() {
      return 0;
    }, Ga;
  }
  var Ga, ng, ni, re, Qa = we(function() {
    v();
    m();
    _();
    Ga = {}, ng = false, ni = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : global;
    re = fE();
    re.platform = "browser";
    re.addListener;
    re.argv;
    re.binding;
    re.browser;
    re.chdir;
    re.cwd;
    re.emit;
    re.env;
    re.listeners;
    re.nextTick;
    re.off;
    re.on;
    re.once;
    re.prependListener;
    re.prependOnceListener;
    re.removeAllListeners;
    re.removeListener;
    re.title;
    re.umask;
    re.version;
    re.versions;
  });
  function cE() {
    if (sg)
      return Ya;
    sg = true;
    var t = re;
    function e(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function r(o, s) {
      for (var a = "", u = 0, c = -1, h = 0, d, g = 0; g <= o.length; ++g) {
        if (g < o.length)
          d = o.charCodeAt(g);
        else {
          if (d === 47)
            break;
          d = 47;
        }
        if (d === 47) {
          if (!(c === g - 1 || h === 1))
            if (c !== g - 1 && h === 2) {
              if (a.length < 2 || u !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
                if (a.length > 2) {
                  var y = a.lastIndexOf("/");
                  if (y !== a.length - 1) {
                    y === -1 ? (a = "", u = 0) : (a = a.slice(0, y), u = a.length - 1 - a.lastIndexOf("/")), c = g, h = 0;
                    continue;
                  }
                } else if (a.length === 2 || a.length === 1) {
                  a = "", u = 0, c = g, h = 0;
                  continue;
                }
              }
              s && (a.length > 0 ? a += "/.." : a = "..", u = 2);
            } else
              a.length > 0 ? a += "/" + o.slice(c + 1, g) : a = o.slice(c + 1, g), u = g - c - 1;
          c = g, h = 0;
        } else
          d === 46 && h !== -1 ? ++h : h = -1;
      }
      return a;
    }
    function i(o, s) {
      var a = s.dir || s.root, u = s.base || (s.name || "") + (s.ext || "");
      return a ? a === s.root ? a + u : a + o + u : u;
    }
    var n = {
      resolve: function resolve() {
        for (var s = "", a = false, u, c = arguments.length - 1; c >= -1 && !a; c--) {
          var h;
          c >= 0 ? h = arguments[c] : (u === void 0 && (u = t.cwd()), h = u), e(h), h.length !== 0 && (s = h + "/" + s, a = h.charCodeAt(0) === 47);
        }
        return s = r(s, !a), a ? s.length > 0 ? "/" + s : "/" : s.length > 0 ? s : ".";
      },
      normalize: function normalize(s) {
        if (e(s), s.length === 0)
          return ".";
        var a = s.charCodeAt(0) === 47, u = s.charCodeAt(s.length - 1) === 47;
        return s = r(s, !a), s.length === 0 && !a && (s = "."), s.length > 0 && u && (s += "/"), a ? "/" + s : s;
      },
      isAbsolute: function isAbsolute(s) {
        return e(s), s.length > 0 && s.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0)
          return ".";
        for (var s, a = 0; a < arguments.length; ++a) {
          var u = arguments[a];
          e(u), u.length > 0 && (s === void 0 ? s = u : s += "/" + u);
        }
        return s === void 0 ? "." : n.normalize(s);
      },
      relative: function relative(s, a) {
        if (e(s), e(a), s === a || (s = n.resolve(s), a = n.resolve(a), s === a))
          return "";
        for (var u = 1; u < s.length && s.charCodeAt(u) === 47; ++u)
          ;
        for (var c = s.length, h = c - u, d = 1; d < a.length && a.charCodeAt(d) === 47; ++d)
          ;
        for (var g = a.length, y = g - d, w = h < y ? h : y, E = -1, S = 0; S <= w; ++S) {
          if (S === w) {
            if (y > w) {
              if (a.charCodeAt(d + S) === 47)
                return a.slice(d + S + 1);
              if (S === 0)
                return a.slice(d + S);
            } else
              h > w && (s.charCodeAt(u + S) === 47 ? E = S : S === 0 && (E = 0));
            break;
          }
          var I = s.charCodeAt(u + S), C = a.charCodeAt(d + S);
          if (I !== C)
            break;
          I === 47 && (E = S);
        }
        var R = "";
        for (S = u + E + 1; S <= c; ++S)
          (S === c || s.charCodeAt(S) === 47) && (R.length === 0 ? R += ".." : R += "/..");
        return R.length > 0 ? R + a.slice(d + E) : (d += E, a.charCodeAt(d) === 47 && ++d, a.slice(d));
      },
      _makeLong: function _makeLong(s) {
        return s;
      },
      dirname: function dirname(s) {
        if (e(s), s.length === 0)
          return ".";
        for (var a = s.charCodeAt(0), u = a === 47, c = -1, h = true, d = s.length - 1; d >= 1; --d)
          if (a = s.charCodeAt(d), a === 47) {
            if (!h) {
              c = d;
              break;
            }
          } else
            h = false;
        return c === -1 ? u ? "/" : "." : u && c === 1 ? "//" : s.slice(0, c);
      },
      basename: function basename(s, a) {
        if (a !== void 0 && typeof a != "string")
          throw new TypeError('"ext" argument must be a string');
        e(s);
        var u = 0, c = -1, h = true, d;
        if (a !== void 0 && a.length > 0 && a.length <= s.length) {
          if (a.length === s.length && a === s)
            return "";
          var g = a.length - 1, y = -1;
          for (d = s.length - 1; d >= 0; --d) {
            var w = s.charCodeAt(d);
            if (w === 47) {
              if (!h) {
                u = d + 1;
                break;
              }
            } else
              y === -1 && (h = false, y = d + 1), g >= 0 && (w === a.charCodeAt(g) ? --g === -1 && (c = d) : (g = -1, c = y));
          }
          return u === c ? c = y : c === -1 && (c = s.length), s.slice(u, c);
        } else {
          for (d = s.length - 1; d >= 0; --d)
            if (s.charCodeAt(d) === 47) {
              if (!h) {
                u = d + 1;
                break;
              }
            } else
              c === -1 && (h = false, c = d + 1);
          return c === -1 ? "" : s.slice(u, c);
        }
      },
      extname: function extname(s) {
        e(s);
        for (var a = -1, u = 0, c = -1, h = true, d = 0, g = s.length - 1; g >= 0; --g) {
          var y = s.charCodeAt(g);
          if (y === 47) {
            if (!h) {
              u = g + 1;
              break;
            }
            continue;
          }
          c === -1 && (h = false, c = g + 1), y === 46 ? a === -1 ? a = g : d !== 1 && (d = 1) : a !== -1 && (d = -1);
        }
        return a === -1 || c === -1 || d === 0 || d === 1 && a === c - 1 && a === u + 1 ? "" : s.slice(a, c);
      },
      format: function format(s) {
        if (s === null || _typeof(s) != "object")
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + _typeof(s));
        return i("/", s);
      },
      parse: function parse(s) {
        e(s);
        var a = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (s.length === 0)
          return a;
        var u = s.charCodeAt(0), c = u === 47, h;
        c ? (a.root = "/", h = 1) : h = 0;
        for (var d = -1, g = 0, y = -1, w = true, E = s.length - 1, S = 0; E >= h; --E) {
          if (u = s.charCodeAt(E), u === 47) {
            if (!w) {
              g = E + 1;
              break;
            }
            continue;
          }
          y === -1 && (w = false, y = E + 1), u === 46 ? d === -1 ? d = E : S !== 1 && (S = 1) : d !== -1 && (S = -1);
        }
        return d === -1 || y === -1 || S === 0 || S === 1 && d === y - 1 && d === g + 1 ? y !== -1 && (g === 0 && c ? a.base = a.name = s.slice(1, y) : a.base = a.name = s.slice(g, y)) : (g === 0 && c ? (a.name = s.slice(1, d), a.base = s.slice(1, y)) : (a.name = s.slice(g, d), a.base = s.slice(g, y)), a.ext = s.slice(d, y)), g > 0 ? a.dir = s.slice(0, g - 1) : c && (a.dir = "/"), a;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    return n.posix = n, Ya = n, Ya;
  }
  var Ya, sg, Ja, og = we(function() {
    v();
    m();
    _();
    Qa();
    Ya = {}, sg = false;
    Ja = cE();
  });
  var pg = {};
  Qt(pg, {
    URL: function URL2() {
      return FE;
    },
    Url: function Url() {
      return UE;
    },
    default: function _default() {
      return Z;
    },
    fileURLToPath: function fileURLToPath() {
      return hg;
    },
    format: function format() {
      return NE;
    },
    parse: function parse() {
      return jE;
    },
    pathToFileURL: function pathToFileURL() {
      return dg;
    },
    resolve: function resolve() {
      return qE;
    },
    resolveObject: function resolveObject() {
      return DE;
    }
  });
  function Fe() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  function xi(t, e, r) {
    if (t && gt.isObject(t) && t instanceof Fe)
      return t;
    var i = new Fe();
    return i.parse(t, e, r), i;
  }
  function _E() {
    if (fg)
      return el;
    fg = true;
    var t = ne;
    function e(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function r(o, s) {
      for (var a = "", u = 0, c = -1, h = 0, d, g = 0; g <= o.length; ++g) {
        if (g < o.length)
          d = o.charCodeAt(g);
        else {
          if (d === 47)
            break;
          d = 47;
        }
        if (d === 47) {
          if (!(c === g - 1 || h === 1))
            if (c !== g - 1 && h === 2) {
              if (a.length < 2 || u !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
                if (a.length > 2) {
                  var y = a.lastIndexOf("/");
                  if (y !== a.length - 1) {
                    y === -1 ? (a = "", u = 0) : (a = a.slice(0, y), u = a.length - 1 - a.lastIndexOf("/")), c = g, h = 0;
                    continue;
                  }
                } else if (a.length === 2 || a.length === 1) {
                  a = "", u = 0, c = g, h = 0;
                  continue;
                }
              }
              s && (a.length > 0 ? a += "/.." : a = "..", u = 2);
            } else
              a.length > 0 ? a += "/" + o.slice(c + 1, g) : a = o.slice(c + 1, g), u = g - c - 1;
          c = g, h = 0;
        } else
          d === 46 && h !== -1 ? ++h : h = -1;
      }
      return a;
    }
    function i(o, s) {
      var a = s.dir || s.root, u = s.base || (s.name || "") + (s.ext || "");
      return a ? a === s.root ? a + u : a + o + u : u;
    }
    var n = {
      resolve: function resolve() {
        for (var s = "", a = false, u, c = arguments.length - 1; c >= -1 && !a; c--) {
          var h;
          c >= 0 ? h = arguments[c] : (u === void 0 && (u = t.cwd()), h = u), e(h), h.length !== 0 && (s = h + "/" + s, a = h.charCodeAt(0) === 47);
        }
        return s = r(s, !a), a ? s.length > 0 ? "/" + s : "/" : s.length > 0 ? s : ".";
      },
      normalize: function normalize(s) {
        if (e(s), s.length === 0)
          return ".";
        var a = s.charCodeAt(0) === 47, u = s.charCodeAt(s.length - 1) === 47;
        return s = r(s, !a), s.length === 0 && !a && (s = "."), s.length > 0 && u && (s += "/"), a ? "/" + s : s;
      },
      isAbsolute: function isAbsolute(s) {
        return e(s), s.length > 0 && s.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0)
          return ".";
        for (var s, a = 0; a < arguments.length; ++a) {
          var u = arguments[a];
          e(u), u.length > 0 && (s === void 0 ? s = u : s += "/" + u);
        }
        return s === void 0 ? "." : n.normalize(s);
      },
      relative: function relative(s, a) {
        if (e(s), e(a), s === a || (s = n.resolve(s), a = n.resolve(a), s === a))
          return "";
        for (var u = 1; u < s.length && s.charCodeAt(u) === 47; ++u)
          ;
        for (var c = s.length, h = c - u, d = 1; d < a.length && a.charCodeAt(d) === 47; ++d)
          ;
        for (var g = a.length, y = g - d, w = h < y ? h : y, E = -1, S = 0; S <= w; ++S) {
          if (S === w) {
            if (y > w) {
              if (a.charCodeAt(d + S) === 47)
                return a.slice(d + S + 1);
              if (S === 0)
                return a.slice(d + S);
            } else
              h > w && (s.charCodeAt(u + S) === 47 ? E = S : S === 0 && (E = 0));
            break;
          }
          var I = s.charCodeAt(u + S), C = a.charCodeAt(d + S);
          if (I !== C)
            break;
          I === 47 && (E = S);
        }
        var R = "";
        for (S = u + E + 1; S <= c; ++S)
          (S === c || s.charCodeAt(S) === 47) && (R.length === 0 ? R += ".." : R += "/..");
        return R.length > 0 ? R + a.slice(d + E) : (d += E, a.charCodeAt(d) === 47 && ++d, a.slice(d));
      },
      _makeLong: function _makeLong(s) {
        return s;
      },
      dirname: function dirname(s) {
        if (e(s), s.length === 0)
          return ".";
        for (var a = s.charCodeAt(0), u = a === 47, c = -1, h = true, d = s.length - 1; d >= 1; --d)
          if (a = s.charCodeAt(d), a === 47) {
            if (!h) {
              c = d;
              break;
            }
          } else
            h = false;
        return c === -1 ? u ? "/" : "." : u && c === 1 ? "//" : s.slice(0, c);
      },
      basename: function basename(s, a) {
        if (a !== void 0 && typeof a != "string")
          throw new TypeError('"ext" argument must be a string');
        e(s);
        var u = 0, c = -1, h = true, d;
        if (a !== void 0 && a.length > 0 && a.length <= s.length) {
          if (a.length === s.length && a === s)
            return "";
          var g = a.length - 1, y = -1;
          for (d = s.length - 1; d >= 0; --d) {
            var w = s.charCodeAt(d);
            if (w === 47) {
              if (!h) {
                u = d + 1;
                break;
              }
            } else
              y === -1 && (h = false, y = d + 1), g >= 0 && (w === a.charCodeAt(g) ? --g === -1 && (c = d) : (g = -1, c = y));
          }
          return u === c ? c = y : c === -1 && (c = s.length), s.slice(u, c);
        } else {
          for (d = s.length - 1; d >= 0; --d)
            if (s.charCodeAt(d) === 47) {
              if (!h) {
                u = d + 1;
                break;
              }
            } else
              c === -1 && (h = false, c = d + 1);
          return c === -1 ? "" : s.slice(u, c);
        }
      },
      extname: function extname(s) {
        e(s);
        for (var a = -1, u = 0, c = -1, h = true, d = 0, g = s.length - 1; g >= 0; --g) {
          var y = s.charCodeAt(g);
          if (y === 47) {
            if (!h) {
              u = g + 1;
              break;
            }
            continue;
          }
          c === -1 && (h = false, c = g + 1), y === 46 ? a === -1 ? a = g : d !== 1 && (d = 1) : a !== -1 && (d = -1);
        }
        return a === -1 || c === -1 || d === 0 || d === 1 && a === c - 1 && a === u + 1 ? "" : s.slice(a, c);
      },
      format: function format(s) {
        if (s === null || _typeof(s) != "object")
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + _typeof(s));
        return i("/", s);
      },
      parse: function parse(s) {
        e(s);
        var a = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (s.length === 0)
          return a;
        var u = s.charCodeAt(0), c = u === 47, h;
        c ? (a.root = "/", h = 1) : h = 0;
        for (var d = -1, g = 0, y = -1, w = true, E = s.length - 1, S = 0; E >= h; --E) {
          if (u = s.charCodeAt(E), u === 47) {
            if (!w) {
              g = E + 1;
              break;
            }
            continue;
          }
          y === -1 && (w = false, y = E + 1), u === 46 ? d === -1 ? d = E : S !== 1 && (S = 1) : d !== -1 && (S = -1);
        }
        return d === -1 || y === -1 || S === 0 || S === 1 && d === y - 1 && d === g + 1 ? y !== -1 && (g === 0 && c ? a.base = a.name = s.slice(1, y) : a.base = a.name = s.slice(g, y)) : (g === 0 && c ? (a.name = s.slice(1, d), a.base = s.slice(1, y)) : (a.name = s.slice(g, d), a.base = s.slice(g, y)), a.ext = s.slice(d, y)), g > 0 ? a.dir = s.slice(0, g - 1) : c && (a.dir = "/"), a;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    return n.posix = n, el = n, el;
  }
  function OE(t) {
    if (typeof t == "string")
      t = new URL(t);
    else if (!(t instanceof URL))
      throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    if (t.protocol !== "file:")
      throw new Deno.errors.InvalidData("invalid url scheme");
    return rl ? kE(t) : xE(t);
  }
  function kE(t) {
    var e = t.hostname, r = t.pathname;
    for (var i = 0; i < r.length; i++)
      if (r[i] === "%") {
        var _n42 = r.codePointAt(i + 2) || 32;
        if (r[i + 1] === "2" && _n42 === 102 || r[i + 1] === "5" && _n42 === 99)
          throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
      }
    if (r = r.replace(IE, "\\"), r = decodeURIComponent(r), e !== "")
      return "\\\\".concat(e).concat(r);
    {
      var _i18 = r.codePointAt(1) | 32, _n43 = r[2];
      if (_i18 < SE || _i18 > AE || _n43 !== ":")
        throw new Deno.errors.InvalidData("file url path must be absolute");
      return r.slice(1);
    }
  }
  function xE(t) {
    if (t.hostname !== "")
      throw new Deno.errors.InvalidData("invalid file url hostname");
    var e = t.pathname;
    for (var _r52 = 0; _r52 < e.length; _r52++)
      if (e[_r52] === "%") {
        var i = e.codePointAt(_r52 + 2) || 32;
        if (e[_r52 + 1] === "2" && i === 102)
          throw new Deno.errors.InvalidData("must not include encoded / characters");
      }
    return decodeURIComponent(e);
  }
  function ME(t) {
    var e = cg.resolve(t), r = t.charCodeAt(t.length - 1);
    (r === EE || rl && r === vE) && e[e.length - 1] !== cg.sep && (e += "/");
    var i = new URL("file://");
    return e.includes("%") && (e = e.replace(TE, "%25")), !rl && e.includes("\\") && (e = e.replace(RE, "%5C")), e.includes("\n") && (e = e.replace(CE, "%0A")), e.includes("\r") && (e = e.replace(BE, "%0D")), e.includes("	") && (e = e.replace(PE, "%09")), i.pathname = e, i;
  }
  function hg(t) {
    if (typeof t == "string")
      t = new URL(t);
    else if (!(t instanceof URL))
      throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
    if (t.protocol !== "file:")
      throw new Deno.errors.InvalidData("invalid url scheme");
    return il ? XE(t) : ZE(t);
  }
  function XE(t) {
    var e = t.hostname, r = t.pathname;
    for (var i = 0; i < r.length; i++)
      if (r[i] === "%") {
        var _n44 = r.codePointAt(i + 2) || 32;
        if (r[i + 1] === "2" && _n44 === 102 || r[i + 1] === "5" && _n44 === 99)
          throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
      }
    if (r = r.replace(zE, "\\"), r = decodeURIComponent(r), e !== "")
      return "\\\\".concat(e).concat(r);
    {
      var _i19 = r.codePointAt(1) | 32, _n45 = r[2];
      if (_i19 < HE || _i19 > VE || _n45 !== ":")
        throw new Deno.errors.InvalidData("file url path must be absolute");
      return r.slice(1);
    }
  }
  function ZE(t) {
    if (t.hostname !== "")
      throw new Deno.errors.InvalidData("invalid file url hostname");
    var e = t.pathname;
    for (var _r53 = 0; _r53 < e.length; _r53++)
      if (e[_r53] === "%") {
        var i = e.codePointAt(_r53 + 2) || 32;
        if (e[_r53 + 1] === "2" && i === 102)
          throw new Deno.errors.InvalidData("must not include encoded / characters");
      }
    return decodeURIComponent(e);
  }
  function dg(t) {
    var e = Ja.resolve(t), r = t.charCodeAt(t.length - 1);
    (r === $E || il && r === WE) && e[e.length - 1] !== Ja.sep && (e += "/");
    var i = new URL("file://");
    return e.includes("%") && (e = e.replace(KE, "%25")), !il && e.includes("\\") && (e = e.replace(GE, "%5C")), e.includes("\n") && (e = e.replace(QE, "%0A")), e.includes("\r") && (e = e.replace(YE, "%0D")), e.includes("	") && (e = e.replace(JE, "%09")), i.pathname = e, i;
  }
  var Z, hE, gt, dE, pE, gE, yE, tl, ag, lg, ug, bE, wE, Xa, si, Za, el, fg, cg, mE, vE, EE, SE, AE, rl, IE, TE, RE, CE, BE, PE, LE, UE, NE, qE, DE, jE, FE, WE, $E, HE, VE, il, zE, KE, GE, QE, YE, JE, gg = we(function() {
    v();
    m();
    _();
    Jp();
    Xp();
    ig();
    og();
    Qa();
    Z = {}, hE = zt, gt = {
      isString: function isString(t) {
        return typeof t == "string";
      },
      isObject: function isObject(t) {
        return _typeof(t) == "object" && t !== null;
      },
      isNull: function isNull(t) {
        return t === null;
      },
      isNullOrUndefined: function isNullOrUndefined(t) {
        return t == null;
      }
    };
    Z.parse = xi, Z.resolve = function(t, e) {
      return xi(t, false, true).resolve(e);
    }, Z.resolveObject = function(t, e) {
      return t ? xi(t, false, true).resolveObject(e) : e;
    }, Z.format = function(t) {
      return gt.isString(t) && (t = xi(t)), t instanceof Fe ? t.format() : Fe.prototype.format.call(t);
    }, Z.Url = Fe;
    dE = /^([a-z0-9.+-]+:)/i, pE = /:[0-9]*$/, gE = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, yE = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), tl = ["'"].concat(yE), ag = ["%", "/", "?", ";", "#"].concat(tl), lg = ["/", "?", "#"], ug = /^[+a-z0-9A-Z_-]{0,63}$/, bE = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, wE = {
      javascript: true,
      "javascript:": true
    }, Xa = {
      javascript: true,
      "javascript:": true
    }, si = {
      http: true,
      https: true,
      ftp: true,
      gopher: true,
      file: true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    }, Za = pt;
    Fe.prototype.parse = function(t, e, r) {
      if (!gt.isString(t))
        throw new TypeError("Parameter 'url' must be a string, not " + _typeof(t));
      var i = t.indexOf("?"), n = i !== -1 && i < t.indexOf("#") ? "?" : "#", o = t.split(n);
      o[0] = o[0].replace(/\\/g, "/");
      var s = t = o.join(n);
      if (s = s.trim(), !r && t.split("#").length === 1) {
        var a = gE.exec(s);
        if (a)
          return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = e ? Za.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
      }
      var u = dE.exec(s);
      if (u) {
        var c = (u = u[0]).toLowerCase();
        this.protocol = c, s = s.substr(u.length);
      }
      if (r || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var h = s.substr(0, 2) === "//";
        !h || u && Xa[u] || (s = s.substr(2), this.slashes = true);
      }
      if (!Xa[u] && (h || u && !si[u])) {
        for (var d, g, y = -1, w = 0; w < lg.length; w++)
          (E = s.indexOf(lg[w])) !== -1 && (y === -1 || E < y) && (y = E);
        for ((g = y === -1 ? s.lastIndexOf("@") : s.lastIndexOf("@", y)) !== -1 && (d = s.slice(0, g), s = s.slice(g + 1), this.auth = decodeURIComponent(d)), y = -1, w = 0; w < ag.length; w++) {
          var E;
          (E = s.indexOf(ag[w])) !== -1 && (y === -1 || E < y) && (y = E);
        }
        y === -1 && (y = s.length), this.host = s.slice(0, y), s = s.slice(y), this.parseHost(), this.hostname = this.hostname || "";
        var S = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!S)
          for (var I = this.hostname.split(/\./), C = (w = 0, I.length); w < C; w++) {
            var R = I[w];
            if (R && !R.match(ug)) {
              for (var U = "", N = 0, W = R.length; N < W; N++)
                R.charCodeAt(N) > 127 ? U += "x" : U += R[N];
              if (!U.match(ug)) {
                var K = I.slice(0, w), z = I.slice(w + 1), Q = R.match(bE);
                Q && (K.push(Q[1]), z.unshift(Q[2])), z.length && (s = "/" + z.join(".") + s), this.hostname = K.join(".");
                break;
              }
            }
          }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = hE.toASCII(this.hostname));
        var de = this.port ? ":" + this.port : "", Gt = this.hostname || "";
        this.host = Gt + de, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), s[0] !== "/" && (s = "/" + s));
      }
      if (!wE[c])
        for (w = 0, C = tl.length; w < C; w++) {
          var pe = tl[w];
          if (s.indexOf(pe) !== -1) {
            var Cr = encodeURIComponent(pe);
            Cr === pe && (Cr = escape(pe)), s = s.split(pe).join(Cr);
          }
        }
      var Br = s.indexOf("#");
      Br !== -1 && (this.hash = s.substr(Br), s = s.slice(0, Br));
      var Pr = s.indexOf("?");
      if (Pr !== -1 ? (this.search = s.substr(Pr), this.query = s.substr(Pr + 1), e && (this.query = Za.parse(this.query)), s = s.slice(0, Pr)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), si[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        de = this.pathname || "";
        var fs = this.search || "";
        this.path = de + fs;
      }
      return this.href = this.format(), this;
    }, Fe.prototype.format = function() {
      var t = this.auth || "";
      t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
      var e = this.protocol || "", r = this.pathname || "", i = this.hash || "", n = false, o = "";
      this.host ? n = t + this.host : this.hostname && (n = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && gt.isObject(this.query) && Object.keys(this.query).length && (o = Za.stringify(this.query));
      var s = this.search || o && "?" + o || "";
      return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || si[e]) && n !== false ? (n = "//" + (n || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : n || (n = ""), i && i.charAt(0) !== "#" && (i = "#" + i), s && s.charAt(0) !== "?" && (s = "?" + s), e + n + (r = r.replace(/[?#]/g, function(a) {
        return encodeURIComponent(a);
      })) + (s = s.replace("#", "%23")) + i;
    }, Fe.prototype.resolve = function(t) {
      return this.resolveObject(xi(t, false, true)).format();
    }, Fe.prototype.resolveObject = function(t) {
      if (gt.isString(t)) {
        var e = new Fe();
        e.parse(t, false, true), t = e;
      }
      for (var r = new Fe(), i = Object.keys(this), n = 0; n < i.length; n++) {
        var o = i[n];
        r[o] = this[o];
      }
      if (r.hash = t.hash, t.href === "")
        return r.href = r.format(), r;
      if (t.slashes && !t.protocol) {
        for (var s = Object.keys(t), a = 0; a < s.length; a++) {
          var u = s[a];
          u !== "protocol" && (r[u] = t[u]);
        }
        return si[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
      }
      if (t.protocol && t.protocol !== r.protocol) {
        if (!si[t.protocol]) {
          for (var c = Object.keys(t), h = 0; h < c.length; h++) {
            var d = c[h];
            r[d] = t[d];
          }
          return r.href = r.format(), r;
        }
        if (r.protocol = t.protocol, t.host || Xa[t.protocol])
          r.pathname = t.pathname;
        else {
          for (var g = (t.pathname || "").split("/"); g.length && !(t.host = g.shift()); )
            ;
          t.host || (t.host = ""), t.hostname || (t.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), r.pathname = g.join("/");
        }
        if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
          var y = r.pathname || "", w = r.search || "";
          r.path = y + w;
        }
        return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
      }
      var E = r.pathname && r.pathname.charAt(0) === "/", S = t.host || t.pathname && t.pathname.charAt(0) === "/", I = S || E || r.host && t.pathname, C = I, R = r.pathname && r.pathname.split("/") || [], U = (g = t.pathname && t.pathname.split("/") || [], r.protocol && !si[r.protocol]);
      if (U && (r.hostname = "", r.port = null, r.host && (R[0] === "" ? R[0] = r.host : R.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && (g[0] === "" ? g[0] = t.host : g.unshift(t.host)), t.host = null), I = I && (g[0] === "" || R[0] === "")), S)
        r.host = t.host || t.host === "" ? t.host : r.host, r.hostname = t.hostname || t.hostname === "" ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, R = g;
      else if (g.length)
        R || (R = []), R.pop(), R = R.concat(g), r.search = t.search, r.query = t.query;
      else if (!gt.isNullOrUndefined(t.search))
        return U && (r.hostname = r.host = R.shift(), (Q = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = Q.shift(), r.host = r.hostname = Q.shift())), r.search = t.search, r.query = t.query, gt.isNull(r.pathname) && gt.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
      if (!R.length)
        return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
      for (var N = R.slice(-1)[0], W = (r.host || t.host || R.length > 1) && (N === "." || N === "..") || N === "", K = 0, z = R.length; z >= 0; z--)
        (N = R[z]) === "." ? R.splice(z, 1) : N === ".." ? (R.splice(z, 1), K++) : K && (R.splice(z, 1), K--);
      if (!I && !C)
        for (; K--; K)
          R.unshift("..");
      !I || R[0] === "" || R[0] && R[0].charAt(0) === "/" || R.unshift(""), W && R.join("/").substr(-1) !== "/" && R.push("");
      var Q, de = R[0] === "" || R[0] && R[0].charAt(0) === "/";
      return U && (r.hostname = r.host = de ? "" : R.length ? R.shift() : "", (Q = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = Q.shift(), r.host = r.hostname = Q.shift())), (I = I || r.host && R.length) && !de && R.unshift(""), R.length ? r.pathname = R.join("/") : (r.pathname = null, r.path = null), gt.isNull(r.pathname) && gt.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
    }, Fe.prototype.parseHost = function() {
      var t = this.host, e = pE.exec(t);
      e && ((e = e[0]) !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
    Z.Url;
    Z.format;
    Z.resolve;
    Z.resolveObject;
    el = {}, fg = false;
    cg = _E(), mE = (typeof Deno === "undefined" ? "undefined" : _typeof(Deno)) < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0;
    Z.URL = (typeof URL === "undefined" ? "undefined" : _typeof(URL)) < "u" ? URL : null;
    Z.pathToFileURL = ME;
    Z.fileURLToPath = OE;
    Z.Url;
    Z.format;
    Z.resolve;
    Z.resolveObject;
    Z.URL;
    vE = 92, EE = 47, SE = 97, AE = 122, rl = mE === "win32", IE = /\//g, TE = /%/g, RE = /\\/g, CE = /\n/g, BE = /\r/g, PE = /\t/g;
    LE = (typeof Deno === "undefined" ? "undefined" : _typeof(Deno)) < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0;
    Z.URL = (typeof URL === "undefined" ? "undefined" : _typeof(URL)) < "u" ? URL : null;
    Z.pathToFileURL = dg;
    Z.fileURLToPath = hg;
    UE = Z.Url, NE = Z.format, qE = Z.resolve, DE = Z.resolveObject, jE = Z.parse, FE = Z.URL, WE = 92, $E = 47, HE = 97, VE = 122, il = LE === "win32", zE = /\//g, KE = /%/g, GE = /\\/g, QE = /\n/g, YE = /\r/g, JE = /\t/g;
  });
  var nl = {};
  Qt(nl, {
    Server: function Server() {
      return Me;
    },
    Socket: function Socket() {
      return Me;
    },
    Stream: function Stream() {
      return Me;
    },
    _createServerHandle: function _createServerHandle() {
      return Me;
    },
    _normalizeArgs: function _normalizeArgs() {
      return Me;
    },
    _setSimultaneousAccepts: function _setSimultaneousAccepts() {
      return Me;
    },
    connect: function connect() {
      return Me;
    },
    createConnection: function createConnection() {
      return Me;
    },
    createServer: function createServer() {
      return Me;
    },
    default: function _default() {
      return eS;
    },
    isIP: function isIP() {
      return Me;
    },
    isIPv4: function isIPv4() {
      return Me;
    },
    isIPv6: function isIPv6() {
      return Me;
    }
  });
  function Me() {
    throw new Error("Node.js net module is not supported by JSPM core outside of Node.js");
  }
  var eS, sl = we(function() {
    v();
    m();
    _();
    eS = {
      _createServerHandle: Me,
      _normalizeArgs: Me,
      _setSimultaneousAccepts: Me,
      connect: Me,
      createConnection: Me,
      createServer: Me,
      isIP: Me,
      isIPv4: Me,
      isIPv6: Me,
      Server: Me,
      Socket: Me,
      Stream: Me
    };
  });
  var ol = M(function(Mi) {
    v();
    m();
    _();
    var yg = Mi && Mi.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Mi, "__esModule", {
      value: true
    });
    var tS = yg((sl(), X(nl))), rS = yg(ot()), iS = (0, rS.default)("mqttjs:tcp"), nS = function nS2(t, e) {
      e.port = e.port || 1883, e.hostname = e.hostname || e.host || "localhost";
      var r = e.port, i = e.path, n = e.hostname;
      return iS("port %d and host %s", r, n), tS.default.createConnection({
        port: r,
        host: n,
        path: i
      });
    };
    Mi.default = nS;
  });
  var bg = {};
  Qt(bg, {
    default: function _default() {
      return sS;
    }
  });
  var sS, wg = we(function() {
    v();
    m();
    _();
    sS = {};
  });
  var ll = M(function(Li) {
    v();
    m();
    _();
    var al = Li && Li.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Li, "__esModule", {
      value: true
    });
    var oS = al((wg(), X(bg))), aS = al((sl(), X(nl))), lS = al(ot()), uS = (0, lS.default)("mqttjs:tls"), fS = function fS2(t, e) {
      e.port = e.port || 8883, e.host = e.hostname || e.host || "localhost", aS.default.isIP(e.host) === 0 && (e.servername = e.host), e.rejectUnauthorized = e.rejectUnauthorized !== false, delete e.path, uS("port %d host %s rejectUnauthorized %b", e.port, e.host, e.rejectUnauthorized);
      var r = oS.default.connect(e);
      r.on("secureConnect", function() {
        e.rejectUnauthorized && !r.authorized ? r.emit("error", new Error("TLS not authorized")) : r.removeListener("error", i);
      });
      function i(n) {
        e.rejectUnauthorized && t.emit("error", n), r.end();
      }
      return r.on("error", i), r;
    };
    Li.default = fS;
  });
  var as = M(function(oi) {
    v();
    m();
    _();
    Object.defineProperty(oi, "__esModule", {
      value: true
    });
    oi.BufferedDuplex = oi.writev = void 0;
    var cS = jt(), _g = (ye(), X(_e));
    function mg(t, e) {
      var r = new Array(t.length);
      for (var i = 0; i < t.length; i++)
        typeof t[i].chunk == "string" ? r[i] = _g.Buffer.from(t[i].chunk, "utf8") : r[i] = t[i].chunk;
      this._write(_g.Buffer.concat(r), "binary", e);
    }
    oi.writev = mg;
    var ul = /* @__PURE__ */ function(_cS$Duplex) {
      function ul2(e, r, i) {
        var _this65;
        _classCallCheck(this, ul2);
        _this65 = _callSuper(this, ul2, [{
          objectMode: true
        }]), _this65.proxy = r, _this65.socket = i, _this65.writeQueue = [], e.objectMode || (_this65._writev = mg.bind(_assertThisInitialized(_this65))), _this65.isSocketOpen = false, _this65.proxy.on("data", function(n) {
          _this65.push(n);
        });
        return _this65;
      }
      _inherits(ul2, _cS$Duplex);
      return _createClass(ul2, [{
        key: "_read",
        value: function _read(e) {
          this.proxy.read(e);
        }
      }, {
        key: "_write",
        value: function _write(e, r, i) {
          this.isSocketOpen ? this.writeToProxy(e, r, i) : this.writeQueue.push({
            chunk: e,
            encoding: r,
            cb: i
          });
        }
      }, {
        key: "_final",
        value: function _final(e) {
          this.writeQueue = [], this.proxy.end(e);
        }
      }, {
        key: "_destroy",
        value: function _destroy(e, r) {
          this.writeQueue = [], this.proxy.destroy(), r(e);
        }
      }, {
        key: "socketReady",
        value: function socketReady() {
          this.emit("connect"), this.isSocketOpen = true, this.processWriteQueue();
        }
      }, {
        key: "writeToProxy",
        value: function writeToProxy(e, r, i) {
          this.proxy.write(e, r) === false ? this.proxy.once("drain", i) : i();
        }
      }, {
        key: "processWriteQueue",
        value: function processWriteQueue() {
          for (; this.writeQueue.length > 0; ) {
            var _this$writeQueue$shif = this.writeQueue.shift(), e = _this$writeQueue$shif.chunk, _r54 = _this$writeQueue$shif.encoding, i = _this$writeQueue$shif.cb;
            this.writeToProxy(e, _r54, i);
          }
        }
      }]);
    }(cS.Duplex);
    oi.BufferedDuplex = ul;
  });
  var hl = M(function(cl) {
    v();
    m();
    _();
    Object.defineProperty(cl, "__esModule", {
      value: true
    });
    var vg = (ye(), X(_e)), hS = jt(), dS = as(), yt, fl, Le;
    function pS() {
      var t = new hS.Transform();
      return t._write = function(e, r, i) {
        yt.send({
          data: e.buffer,
          success: function success() {
            i();
          },
          fail: function fail(n) {
            i(new Error(n));
          }
        });
      }, t._flush = function(e) {
        yt.close({
          success: function success() {
            e();
          }
        });
      }, t;
    }
    function gS(t) {
      t.hostname || (t.hostname = "localhost"), t.path || (t.path = "/"), t.wsOptions || (t.wsOptions = {});
    }
    function yS(t, e) {
      var r = t.protocol === "wxs" ? "wss" : "ws", i = "".concat(r, "://").concat(t.hostname).concat(t.path);
      return t.port && t.port !== 80 && t.port !== 443 && (i = "".concat(r, "://").concat(t.hostname, ":").concat(t.port).concat(t.path)), typeof t.transformWsUrl == "function" && (i = t.transformWsUrl(i, t, e)), i;
    }
    function bS() {
      yt.onOpen(function() {
        Le.socketReady();
      }), yt.onMessage(function(t) {
        var e = t.data;
        e instanceof ArrayBuffer ? e = vg.Buffer.from(e) : e = vg.Buffer.from(e, "utf8"), fl.push(e);
      }), yt.onClose(function() {
        Le.emit("close"), Le.end(), Le.destroy();
      }), yt.onError(function(t) {
        var e = new Error(t.errMsg);
        Le.destroy(e);
      });
    }
    var wS = function wS2(t, e) {
      if (e.hostname = e.hostname || e.host, !e.hostname)
        throw new Error("Could not determine host. Specify host manually.");
      var r = e.protocolId === "MQIsdp" && e.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      gS(e);
      var i = yS(e, t);
      yt = wx.connectSocket({
        url: i,
        protocols: [r]
      }), fl = pS(), Le = new dS.BufferedDuplex(e, fl, yt), Le._destroy = function(o, s) {
        yt.close({
          success: function success() {
            s && s(o);
          }
        });
      };
      var n = Le.destroy;
      return Le.destroy = function(o, s) {
        return Le.destroy = n, setTimeout(function() {
          yt.close({
            fail: function fail() {
              Le._destroy(o, s);
            }
          });
        }, 0), Le;
      }, bS(), Le;
    };
    cl.default = wS;
  });
  var gl = M(function(pl) {
    v();
    m();
    _();
    Object.defineProperty(pl, "__esModule", {
      value: true
    });
    var dl = (ye(), X(_e)), _S = jt(), mS = as(), xt, ls, ai, Eg = false;
    function vS() {
      var t = new _S.Transform();
      return t._write = function(e, r, i) {
        xt.sendSocketMessage({
          data: e.buffer,
          success: function success() {
            i();
          },
          fail: function fail() {
            i(new Error());
          }
        });
      }, t._flush = function(e) {
        xt.closeSocket({
          success: function success() {
            e();
          }
        });
      }, t;
    }
    function ES(t) {
      t.hostname || (t.hostname = "localhost"), t.path || (t.path = "/"), t.wsOptions || (t.wsOptions = {});
    }
    function SS(t, e) {
      var r = t.protocol === "alis" ? "wss" : "ws", i = "".concat(r, "://").concat(t.hostname).concat(t.path);
      return t.port && t.port !== 80 && t.port !== 443 && (i = "".concat(r, "://").concat(t.hostname, ":").concat(t.port).concat(t.path)), typeof t.transformWsUrl == "function" && (i = t.transformWsUrl(i, t, e)), i;
    }
    function AS() {
      Eg || (Eg = true, xt.onSocketOpen(function() {
        ai.socketReady();
      }), xt.onSocketMessage(function(t) {
        if (typeof t.data == "string") {
          var e = dl.Buffer.from(t.data, "base64");
          ls.push(e);
        } else {
          var _e16 = new FileReader();
          _e16.addEventListener("load", function() {
            var r = _e16.result;
            r instanceof ArrayBuffer ? r = dl.Buffer.from(r) : r = dl.Buffer.from(r, "utf8"), ls.push(r);
          }), _e16.readAsArrayBuffer(t.data);
        }
      }), xt.onSocketClose(function() {
        ai.end(), ai.destroy();
      }), xt.onSocketError(function(t) {
        ai.destroy(t);
      }));
    }
    var IS = function IS2(t, e) {
      if (e.hostname = e.hostname || e.host, !e.hostname)
        throw new Error("Could not determine host. Specify host manually.");
      var r = e.protocolId === "MQIsdp" && e.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      ES(e);
      var i = SS(e, t);
      return xt = e.my, xt.connectSocket({
        url: i,
        protocols: r
      }), ls = vS(), ai = new mS.BufferedDuplex(e, ls, xt), AS(), ai;
    };
    pl.default = IS;
  });
  var Ag = M(function(xD, Sg) {
    v();
    m();
    _();
    Sg.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  });
  var _l = M(function(Ui) {
    v();
    m();
    _();
    var wl = Ui && Ui.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Ui, "__esModule", {
      value: true
    });
    var yl = (ye(), X(_e)), Ig = wl(Ag()), TS = wl(ot()), RS = jt(), Tg = wl(Pi()), bl = as(), Kt = (0, TS.default)("mqttjs:ws"), CS = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
    function Rg(t, e) {
      var r = "".concat(t.protocol, "://").concat(t.hostname, ":").concat(t.port).concat(t.path);
      return typeof t.transformWsUrl == "function" && (r = t.transformWsUrl(r, t, e)), r;
    }
    function Cg(t) {
      var e = t;
      return t.hostname || (e.hostname = "localhost"), t.port || (t.protocol === "wss" ? e.port = 443 : e.port = 80), t.path || (e.path = "/"), t.wsOptions || (e.wsOptions = {}), !Tg.default && t.protocol === "wss" && CS.forEach(function(r) {
        Object.prototype.hasOwnProperty.call(t, r) && !Object.prototype.hasOwnProperty.call(t.wsOptions, r) && (e.wsOptions[r] = t[r]);
      }), e;
    }
    function BS(t) {
      var e = Cg(t);
      if (e.hostname || (e.hostname = e.host), !e.hostname) {
        if ((typeof document === "undefined" ? "undefined" : _typeof(document)) > "u")
          throw new Error("Could not determine host. Specify host manually.");
        var _r55 = new URL(document.URL);
        e.hostname = _r55.hostname, e.port || (e.port = Number(_r55.port));
      }
      return e.objectMode === void 0 && (e.objectMode = !(e.binary === true || e.binary === void 0)), e;
    }
    function PS(t, e, r) {
      Kt("createWebSocket"), Kt("protocol: ".concat(r.protocolId, " ").concat(r.protocolVersion));
      var i = r.protocolId === "MQIsdp" && r.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
      Kt("creating new Websocket for url: ".concat(e, " and protocol: ").concat(i));
      var n;
      return r.createWebsocket ? n = r.createWebsocket(e, [i], r) : n = new Ig.default(e, [i], r.wsOptions), n;
    }
    function OS(t, e) {
      var r = e.protocolId === "MQIsdp" && e.protocolVersion === 3 ? "mqttv3.1" : "mqtt", i = Rg(e, t), n;
      return e.createWebsocket ? n = e.createWebsocket(i, [r], e) : n = new WebSocket(i, [r]), n.binaryType = "arraybuffer", n;
    }
    var kS = function kS2(t, e) {
      Kt("streamBuilder");
      var r = Cg(e), i = Rg(r, t), n = PS(t, i, r), o = Ig.default.createWebSocketStream(n, r.wsOptions);
      return o.url = i, n.on("close", function() {
        o.destroy();
      }), o;
    }, xS = function xS2(t, e) {
      Kt("browserStreamBuilder");
      var r, n = BS(e).browserBufferSize || 1024 * 512, o = e.browserBufferTimeout || 1e3, s = !e.objectMode, a = OS(t, e), u = h(e, E, S);
      e.objectMode || (u._writev = bl.writev.bind(u)), u.on("close", function() {
        a.close();
      });
      var c = _typeof(a.addEventListener) < "u";
      a.readyState === a.OPEN ? (r = u, r.socket = a) : (r = new bl.BufferedDuplex(e, u, a), c ? a.addEventListener("open", d) : a.onopen = d), c ? (a.addEventListener("close", g), a.addEventListener("error", y), a.addEventListener("message", w)) : (a.onclose = g, a.onerror = y, a.onmessage = w);
      function h(I, C, R) {
        var U = new RS.Transform({
          objectMode: I.objectMode
        });
        return U._write = C, U._flush = R, U;
      }
      function d() {
        Kt("WebSocket onOpen"), r instanceof bl.BufferedDuplex && r.socketReady();
      }
      function g(I) {
        Kt("WebSocket onClose", I), r.end(), r.destroy();
      }
      function y(I) {
        Kt("WebSocket onError", I);
        var C = new Error("WebSocket error");
        C.event = I, r.destroy(C);
      }
      function w(I) {
        var C = I.data;
        C instanceof ArrayBuffer ? C = yl.Buffer.from(C) : C = yl.Buffer.from(C, "utf8"), u.push(C);
      }
      function E(I, C, R) {
        if (a.bufferedAmount > n) {
          setTimeout(E, o, I, C, R);
          return;
        }
        s && typeof I == "string" && (I = yl.Buffer.from(I, "utf8"));
        try {
          a.send(I);
        } catch (U) {
          return R(U);
        }
        R();
      }
      function S(I) {
        a.close(), I();
      }
      return r;
    };
    Ui.default = Tg.default ? xS : kS;
  });
  var Og = M(function(Rr) {
    v();
    m();
    _();
    var us = Rr && Rr.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(Rr, "__esModule", {
      value: true
    });
    Rr.connectAsync = void 0;
    var MS = us(ot()), LS = us((gg(), X(pg))), US = us(ss()), NS = us(Pi());
    typeof (B === null || B === void 0 ? void 0 : B.nextTick) != "function" && (B.nextTick = setImmediate);
    var Bg = (0, MS.default)("mqttjs"), Re = {};
    NS.default ? (Re.wx = hl().default, Re.wxs = hl().default, Re.ali = gl().default, Re.alis = gl().default) : (Re.mqtt = ol().default, Re.tcp = ol().default, Re.ssl = ll().default, Re.tls = Re.ssl, Re.mqtts = ll().default);
    Re.ws = _l().default;
    Re.wss = _l().default;
    function qS(t) {
      var e;
      t.auth && (e = t.auth.match(/^(.+):(.+)$/), e ? (t.username = e[1], t.password = e[2]) : t.username = t.auth);
    }
    function Pg(t, e) {
      if (Bg("connecting to an MQTT broker..."), _typeof(t) == "object" && !e && (e = t, t = ""), e = e || {}, t && typeof t == "string") {
        var _n46 = LS.default.parse(t, true);
        if (_n46.port != null && (_n46.port = Number(_n46.port)), e = Object.assign(Object.assign({}, _n46), e), e.protocol === null)
          throw new Error("Missing protocol");
        e.protocol = e.protocol.replace(/:$/, "");
      }
      if (qS(e), e.query && typeof e.query.clientId == "string" && (e.clientId = e.query.clientId), e.cert && e.key)
        if (e.protocol) {
          if (["mqtts", "wss", "wxs", "alis"].indexOf(e.protocol) === -1)
            switch (e.protocol) {
              case "mqtt":
                e.protocol = "mqtts";
                break;
              case "ws":
                e.protocol = "wss";
                break;
              case "wx":
                e.protocol = "wxs";
                break;
              case "ali":
                e.protocol = "alis";
                break;
              default:
                throw new Error('Unknown protocol for secure connection: "'.concat(e.protocol, '"!'));
            }
        } else
          throw new Error("Missing secure protocol key");
      if (!Re[e.protocol]) {
        var _n47 = ["mqtts", "wss"].indexOf(e.protocol) !== -1;
        e.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter(function(o, s) {
          return _n47 && s % 2 === 0 ? false : typeof Re[o] == "function";
        })[0];
      }
      if (e.clean === false && !e.clientId)
        throw new Error("Missing clientId for unclean clients");
      e.protocol && (e.defaultProtocol = e.protocol);
      function r(n) {
        return e.servers && ((!n._reconnectCount || n._reconnectCount === e.servers.length) && (n._reconnectCount = 0), e.host = e.servers[n._reconnectCount].host, e.port = e.servers[n._reconnectCount].port, e.protocol = e.servers[n._reconnectCount].protocol ? e.servers[n._reconnectCount].protocol : e.defaultProtocol, e.hostname = e.host, n._reconnectCount++), Bg("calling streambuilder for", e.protocol), Re[e.protocol](n, e);
      }
      var i = new US.default(r, e);
      return i.on("error", function() {
      }), i;
    }
    function DS(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      return new Promise(function(i, n) {
        var o = Pg(t, e), s = {
          connect: function connect(u) {
            a(), i(o);
          },
          end: function end() {
            a(), i(o);
          },
          error: function error(u) {
            a(), o.end(), n(u);
          }
        };
        r === false && (s.close = function() {
          s.error(new Error("Couldn't connect to server"));
        });
        function a() {
          Object.keys(s).forEach(function(u) {
            o.off(u, s[u]);
          });
        }
        Object.keys(s).forEach(function(u) {
          o.on(u, s[u]);
        });
      });
    }
    Rr.connectAsync = DS;
    Rr.default = Pg;
  });
  var ml = M(function(G) {
    v();
    m();
    _();
    var kg = G && G.__createBinding || (Object.create ? function(t, e, r, i) {
      i === void 0 && (i = r);
      var n = Object.getOwnPropertyDescriptor(e, r);
      (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = {
        enumerable: true,
        get: function get() {
          return e[r];
        }
      }), Object.defineProperty(t, i, n);
    } : function(t, e, r, i) {
      i === void 0 && (i = r), t[i] = e[r];
    }), jS = G && G.__setModuleDefault || (Object.create ? function(t, e) {
      Object.defineProperty(t, "default", {
        enumerable: true,
        value: e
      });
    } : function(t, e) {
      t.default = e;
    }), FS = G && G.__importStar || function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (t != null)
        for (var r in t)
          r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && kg(e, t, r);
      return jS(e, t), e;
    }, xg = G && G.__exportStar || function(t, e) {
      for (var r in t)
        r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && kg(e, t, r);
    }, Ni = G && G.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(G, "__esModule", {
      value: true
    });
    G.ReasonCodes = G.PingTimer = G.UniqueMessageIdProvider = G.DefaultMessageIdProvider = G.Store = G.MqttClient = G.connectAsync = G.connect = G.Client = void 0;
    var Mg = Ni(ss());
    G.MqttClient = Mg.default;
    var WS = Ni(Jo());
    G.DefaultMessageIdProvider = WS.default;
    var $S = Ni(Hp());
    G.UniqueMessageIdProvider = $S.default;
    var HS = Ni(ea());
    G.Store = HS.default;
    var Lg = FS(Og());
    G.connect = Lg.default;
    Object.defineProperty(G, "connectAsync", {
      enumerable: true,
      get: function get() {
        return Lg.connectAsync;
      }
    });
    var VS = Ni(ja());
    G.PingTimer = VS.default;
    G.Client = Mg.default;
    xg(ss(), G);
    xg(Jr(), G);
    var zS = Ai();
    Object.defineProperty(G, "ReasonCodes", {
      enumerable: true,
      get: function get() {
        return zS.ReasonCodes;
      }
    });
  });
  var JS = M(function(We) {
    v();
    m();
    _();
    var Ug = We && We.__createBinding || (Object.create ? function(t, e, r, i) {
      i === void 0 && (i = r);
      var n = Object.getOwnPropertyDescriptor(e, r);
      (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = {
        enumerable: true,
        get: function get() {
          return e[r];
        }
      }), Object.defineProperty(t, i, n);
    } : function(t, e, r, i) {
      i === void 0 && (i = r), t[i] = e[r];
    }), KS = We && We.__setModuleDefault || (Object.create ? function(t, e) {
      Object.defineProperty(t, "default", {
        enumerable: true,
        value: e
      });
    } : function(t, e) {
      t.default = e;
    }), GS = We && We.__importStar || function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (t != null)
        for (var r in t)
          r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && Ug(e, t, r);
      return KS(e, t), e;
    }, QS = We && We.__exportStar || function(t, e) {
      for (var r in t)
        r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && Ug(e, t, r);
    };
    Object.defineProperty(We, "__esModule", {
      value: true
    });
    var YS = GS(ml());
    We.default = YS;
    QS(ml(), We);
  });
  const mqtt = JS();
  /*! Bundled license information:
  
    @jspm/core/nodelibs/browser/buffer.js:
      (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
    */
  if (getRuntimeEnv() === "web") {
    window.require = function() {
      return {};
    };
  }
  var wrtc = require("wrtc");
  function getRuntimeEnv() {
    if (typeof window != "undefined") {
      return "web";
    } else {
      return "node";
    }
  }
  var RtcFactory = /* @__PURE__ */ function() {
    function RtcFactory2() {
      _classCallCheck(this, RtcFactory2);
    }
    return _createClass(RtcFactory2, null, [{
      key: "getUserMedia",
      get: function get() {
        if (getRuntimeEnv() === "web") {
          return navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        } else {
          return wrtc.getUserMedia.bind(wrtc);
        }
      }
    }, {
      key: "RTCPeerConnection",
      get: function get() {
        if (getRuntimeEnv() === "web") {
          return RTCPeerConnection.bind(window);
        } else {
          return wrtc.RTCPeerConnection.bind(wrtc);
        }
      }
    }, {
      key: "RTCSessionDescription",
      get: function get() {
        if (getRuntimeEnv() === "web") {
          return RTCSessionDescription.bind(window);
        } else {
          return wrtc.RTCSessionDescription.bind(wrtc);
        }
      }
    }, {
      key: "RTCIceCandidate",
      get: function get() {
        if (getRuntimeEnv() === "web") {
          return RTCIceCandidate.bind(window);
        } else {
          return wrtc.RTCIceCandidate.bind(wrtc);
        }
      }
    }, {
      key: "MediaStream",
      get: function get() {
        if (getRuntimeEnv() === "web") {
          return MediaStream.bind(window);
        } else {
          return wrtc.MediaStream.bind(wrtc);
        }
      }
    }]);
  }();
  var CallManager = /* @__PURE__ */ function() {
    function CallManager2(clientTopic, mqttConfig, constraints, eventListeners, turnConfig) {
      _classCallCheck(this, CallManager2);
      this.mqttClient = null;
      this.clientTopic = clientTopic;
      this.initMqttConnection(mqttConfig);
      this.eventListeners = eventListeners;
      this.localPcMap = {};
      this.remotePcMap = {};
      this.remoteIcesMap = {};
      this.constraints = constraints;
      this.callOuts = {};
      this.callIns = {};
      this.turnConfig = turnConfig || {
        iceServers: [{
          urls: "turn:154.8.202.184:3478",
          username: "root",
          credential: "123456"
        }]
      };
    }
    return _createClass(CallManager2, [{
      key: "isRelay",
      value: function isRelay(data) {
        return data.callerTopic != this.clientTopic && data.calleeTopic != this.clientTopic;
      }
      /***
       * 处理mqtt消息
       * @param topic
       * @param message
       */
    }, {
      key: "messageHandler",
      value: function messageHandler(topic, message) {
        try {
          console.log("收到消息", topic, message.toString());
          var data = JSON.parse(message.toString());
          if (data.type == "offer") {
            this.eventListeners["offerIn"](data);
            this.callIns[data.callerTopic] = {
              callerTopic: data.callerTopic,
              calleeTopic: data.calleeTopic,
              clientTopic: data.clientTopic,
              status: "calling"
            };
          } else if (data.type == "candidate") {
            var candidate = new RtcFactory.RTCIceCandidate(data.ice);
            if (data.kind == "local") {
              if (this.remotePcMap[data.callerTopic] && this.remotePcMap[data.callerTopic].remoteDescription != null) {
                this.remotePcMap[data.callerTopic].addIceCandidate(candidate);
              } else {
                if (!this.remoteIcesMap[data.callerTopic]) {
                  this.remoteIcesMap[data.callerTopic] = [];
                }
                this.remoteIcesMap[data.callerTopic].push(candidate);
              }
            } else {
              this.localPcMap[data.calleeTopic].addIceCandidate(candidate);
            }
          } else if (data.type == "answer") {
            var answer = new RtcFactory.RTCSessionDescription(data.sdp);
            this.localPcMap[data.calleeTopic].setRemoteDescription(answer);
            this.callOuts[data.calleeTopic].status = "answered";
          } else if (data.type == "hangUp") {
            if (this.isRelay(data)) {
              if (data.clientTopic == data.callerTopic) {
                this.hangUp(data, "there");
              } else {
                this.hangUp(data);
              }
              this.hangUp(_objectSpread2(_objectSpread2({}, data), {}, {
                callerTopic: this.clientTopic
              }));
            } else {
              this.hangUp(data, "there");
            }
            this.eventListeners["hangUp"] && this.eventListeners["hangUp"](data);
          } else if (data.type == "reject") {
            if (this.isRelay(data)) {
              if (data.clientTopic == data.callerTopic) {
                this.hangUp(data, "there");
              } else {
                this.hangUp(data);
              }
              this.hangUp(_objectSpread2(_objectSpread2({}, data), {}, {
                callerTopic: this.clientTopic
              }));
            } else {
              this.hangUp(data, "there");
            }
            this.eventListeners["reject"] && this.eventListeners["reject"](data);
          } else if (data.type == "answered") {
            if (this.callIns[data.callerTopic].status != "answered") {
              this.eventListeners["answered"] && this.eventListeners["answered"](data);
              delete this.callIns[data.callerTopic];
            }
          }
        } catch (e) {
          console.error("呼叫引擎处理消息出错", e);
        }
      }
      /***
       * 初始化mqtt连接
       * @param mqttConfig
       * @returns {Promise<unknown>}
       */
    }, {
      key: "initMqttConnection",
      value: function initMqttConnection(mqttConfig) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (mqttConfig.publish) {
            _this.mqttClient = mqttConfig;
          } else {
            _this.mqttClient = mqtt.connect(mqttConfig.url, _objectSpread2({}, mqttConfig));
            _this.mqttClient.reconnecting = true;
            _this.mqttClient.on("connect", function() {
              _this.mqttClient.subscribe(_this.clientTopic, function(err) {
                if (!err) {
                  console.log("订阅成功", _this.clientTopic);
                  resolve(_this.mqttClient);
                } else {
                  reject(err);
                }
              });
            });
            _this.mqttClient.on("reconnect", function() {
              console.log("重连中...");
            });
            _this.mqttClient.on("message", function(topic, message) {
              _this.messageHandler(topic, message);
            });
          }
        });
      }
      /***
       * 打电话
       * @param calleeTopic
       * @param relayTopic
       * @param callerTopic
       * @returns {Promise<void>}
       */
    }, {
      key: "makeCall",
      value: function() {
        var _makeCall = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(_ref) {
          var _this2 = this;
          var calleeTopic, relayTopic, callerTopic, relayStream, local, stream, localStream, offer_sdp;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  calleeTopic = _ref.calleeTopic, relayTopic = _ref.relayTopic, callerTopic = _ref.callerTopic, relayStream = _ref.relayStream;
                  local = new RtcFactory.RTCPeerConnection(this.turnConfig);
                  _context.t0 = relayStream;
                  if (_context.t0) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 6;
                  return RtcFactory.getUserMedia(this.constraints);
                case 6:
                  _context.t0 = _context.sent;
                case 7:
                  stream = _context.t0;
                  stream.getTracks().forEach(function(track) {
                    return local.addTrack(track);
                  });
                  this.eventListeners["localCallStream"] && this.eventListeners["localCallStream"]({
                    pc: local,
                    stream,
                    callerTopic,
                    calleeTopic
                  });
                  localStream = new RtcFactory.MediaStream();
                  local.ontrack = function(event) {
                    console.log("onaddtrack", event);
                    localStream.addTrack(event.track);
                    setTimeout(function() {
                      _this2.eventListeners["callStream"]({
                        pc: local,
                        stream: localStream,
                        callerTopic,
                        calleeTopic
                      });
                    }, 200);
                  };
                  local.onicecandidate = function(e) {
                    var iceCandidate = e.candidate;
                    if (iceCandidate) {
                      _this2.mqttClient.publish(relayTopic || calleeTopic, JSON.stringify({
                        type: "candidate",
                        kind: "local",
                        callerTopic: callerTopic || _this2.clientTopic,
                        calleeTopic,
                        clientTopic: _this2.clientTopic,
                        ice: iceCandidate
                      }));
                    }
                  };
                  _context.next = 15;
                  return local.createOffer({
                    offerOptions: 1
                  });
                case 15:
                  offer_sdp = _context.sent;
                  local.setLocalDescription(offer_sdp);
                  this.mqttClient.publish(relayTopic || calleeTopic, JSON.stringify({
                    type: "offer",
                    callerTopic: callerTopic || this.clientTopic,
                    calleeTopic,
                    clientTopic: this.clientTopic,
                    sdp: offer_sdp
                  }));
                  this.callOuts[calleeTopic] = {
                    callerTopic: callerTopic || this.clientTopic,
                    calleeTopic,
                    clientTopic: this.clientTopic,
                    targetTopic: relayTopic || calleeTopic,
                    status: "calling"
                  };
                  local.oniceconnectionstatechange = function() {
                    console.log("local ice:", local.iceConnectionState);
                    if (local.iceConnectionState === "failed" || local.iceConnectionState === "disconnected") {
                      _this2.closeConnection(local);
                      _this2.eventListeners["disconnected"] && _this2.eventListeners["disconnected"]({
                        clientTopic: _this2.clientTopic,
                        callerTopic: callerTopic || _this2.clientTopic,
                        calleeTopic
                      });
                    } else if (local.iceConnectionState === "connected") {
                      _this2.eventListeners["connected"] && _this2.eventListeners["connected"]({
                        clientTopic: _this2.clientTopic,
                        callerTopic: callerTopic || _this2.clientTopic,
                        calleeTopic
                      });
                    }
                  };
                  this.localPcMap[calleeTopic] = local;
                case 21:
                case "end":
                  return _context.stop();
              }
          }, _callee, this);
        }));
        function makeCall(_x) {
          return _makeCall.apply(this, arguments);
        }
        return makeCall;
      }()
    }, {
      key: "answerCall",
      value: function() {
        var _answerCall = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(data) {
          var _this3 = this;
          var remote, remoteStream, stream, offer, answer, i;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1)
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.callIns[data.callerTopic]) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  remote = new RtcFactory.RTCPeerConnection(this.turnConfig);
                  this.remotePcMap[data.callerTopic] = remote;
                  remoteStream = new RtcFactory.MediaStream();
                  remote.ontrack = function(e) {
                    console.log("onaddtrack", e);
                    remoteStream.addTrack(e.track);
                    setTimeout(function() {
                      _this3.eventListeners["answerStream"](_objectSpread2({
                        pc: remote,
                        stream: remoteStream
                      }, data));
                    }, 200);
                  };
                  remote.oniceconnectionstatechange = function() {
                    console.log("remote ice:", remote.iceConnectionState);
                    if (remote.iceConnectionState === "failed" || remote.iceConnectionState === "disconnected") {
                      _this3.closeConnection(remote);
                      _this3.eventListeners["disconnected"] && _this3.eventListeners["disconnected"](_objectSpread2({
                        clientTopic: data.clientTopic
                      }, data));
                    } else if (remote.iceConnectionState === "connected") {
                      _this3.eventListeners["connected"] && _this3.eventListeners["connected"](_objectSpread2({
                        clientTopic: data.clientTopic
                      }, data));
                    }
                  };
                  _context2.next = 9;
                  return RtcFactory.getUserMedia(this.constraints);
                case 9:
                  stream = _context2.sent;
                  stream.getTracks().forEach(function(track) {
                    return remote.addTrack(track);
                  });
                  this.eventListeners["localAnswerStream"] && this.eventListeners["localAnswerStream"](_objectSpread2({
                    pc: remote,
                    stream
                  }, data));
                  remote.onicecandidate = function(e) {
                    var iceCandidate = e.candidate;
                    console.log("remote ice:", iceCandidate);
                    if (iceCandidate != null) {
                      _this3.mqttClient.publish(data.clientTopic, JSON.stringify({
                        type: "candidate",
                        clientTopic: _this3.clientTopic,
                        calleeTopic: data.calleeTopic,
                        callerTopic: data.callerTopic,
                        kind: "remote",
                        ice: iceCandidate
                      }));
                    }
                  };
                  offer = new RtcFactory.RTCSessionDescription(data.sdp);
                  remote.setRemoteDescription(offer);
                  _context2.next = 17;
                  return remote.createAnswer();
                case 17:
                  answer = _context2.sent;
                  console.log("createAnswer", answer);
                  remote.setLocalDescription(answer);
                  this.mqttClient.publish(data.clientTopic, JSON.stringify({
                    type: "answer",
                    clientTopic: this.clientTopic,
                    callerTopic: data.callerTopic,
                    calleeTopic: data.calleeTopic,
                    sdp: answer
                  }));
                  if (this.remoteIcesMap[data.callerTopic]) {
                    for (i = 0; i < this.remoteIcesMap[data.callerTopic].length; i++) {
                      remote.addIceCandidate(this.remoteIcesMap[data.callerTopic][i]);
                    }
                  }
                  this.callIns[data.callerTopic].status = "answered";
                  if (data.calleeTopic == this.clientTopic) {
                    this.mqttClient.publish(this.clientTopic, JSON.stringify({
                      type: "answered",
                      clientTopic: this.clientTopic,
                      callerTopic: data.callerTopic,
                      calleeTopic: data.calleeTopic
                    }));
                  }
                  return _context2.abrupt("return", remote);
                case 25:
                case "end":
                  return _context2.stop();
              }
          }, _callee2, this);
        }));
        function answerCall(_x2) {
          return _answerCall.apply(this, arguments);
        }
        return answerCall;
      }()
    }, {
      key: "closeConnection",
      value: function closeConnection(rtcPeerConnection) {
        if (rtcPeerConnection != null) {
          try {
            rtcPeerConnection.getSenders().forEach(function(sender) {
              sender.track.stop();
            });
            rtcPeerConnection.getTransceivers().forEach(function(transceiver) {
              if (transceiver.sender) {
                transceiver.sender.replaceTrack(null);
              }
              if (transceiver.receiver) {
                transceiver.receiver.track.stop();
              }
            });
          } catch (e) {
            console.error("关闭连接失败", e);
          }
          rtcPeerConnection.close();
          rtcPeerConnection = null;
        }
      }
    }, {
      key: "huangUpAll",
      value: function huangUpAll(data) {
        var callOut = this.callOuts[data.calleeTopic];
        if (callOut) {
          this.closeConnection(this.localPcMap[callOut.calleeTopic]);
          this.mqttClient.publish(callOut.targetTopic, JSON.stringify({
            type: "hangUp",
            clientTopic: callOut.clientTopic,
            callerTopic: callOut.callerTopic,
            calleeTopic: callOut.calleeTopic
          }));
          delete this.callOuts[data.calleeTopic];
          delete this.localPcMap[callOut.calleeTopic];
        }
        var callIn = this.callIns[data.callerTopic];
        if (callIn) {
          this.closeConnection(this.remotePcMap[data.callerTopic]);
          this.mqttClient.publish(callIn.clientTopic, JSON.stringify({
            type: "hangUp",
            clientTopic: this.clientTopic,
            callerTopic: callIn.callerTopic,
            calleeTopic: callIn.calleeTopic
          }));
          delete this.callIns[data.callerTopic];
          delete this.remotePcMap[data.callerTopic];
        }
      }
      /***
       * 挂断电话
       * @param data
       * @package who 挂断类型，there:对面挂断，默认:自己挂断
       */
    }, {
      key: "hangUp",
      value: function hangUp(data, who) {
        if (data.callerTopic == this.clientTopic) {
          var callOut = this.callOuts[data.calleeTopic];
          if (callOut) {
            this.closeConnection(this.localPcMap[callOut.calleeTopic]);
            if (who == "there")
              ;
            else {
              this.mqttClient.publish(callOut.targetTopic, JSON.stringify({
                type: callOut.status == "answered" ? "hangUp" : "reject",
                clientTopic: callOut.clientTopic,
                callerTopic: callOut.callerTopic,
                calleeTopic: callOut.calleeTopic,
                status: callOut.status,
                direction: "callIn"
              }));
            }
            delete this.callOuts[data.calleeTopic];
            delete this.localPcMap[callOut.calleeTopic];
          }
        } else {
          var callIn = this.callIns[data.callerTopic];
          if (callIn) {
            this.closeConnection(this.remotePcMap[data.callerTopic]);
            if (who == "there")
              ;
            else {
              this.mqttClient.publish(callIn.clientTopic, JSON.stringify({
                type: callIn.status == "answered" ? "hangUp" : "reject",
                clientTopic: this.clientTopic,
                callerTopic: callIn.callerTopic,
                calleeTopic: callIn.calleeTopic,
                status: callIn.status,
                direction: "callOut"
              }));
            }
            delete this.callIns[data.callerTopic];
            delete this.remotePcMap[data.callerTopic];
          }
        }
      }
      /***
       * 清理客户端资源
       */
    }, {
      key: "end",
      value: function end() {
        this.mqttClient.end();
        for (var key in this.localPcMap) {
          this.closeConnection(this.localPcMap[key]);
        }
        for (var _key in this.remotePcMap) {
          this.closeConnection(this.remotePcMap[_key]);
        }
      }
    }]);
  }();
  return CallManager;
});
