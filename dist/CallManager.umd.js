(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.CallManager = factory());
})(this, function() {
  "use strict";
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
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
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
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
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
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
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
        if (o2 === f) throw Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2) throw a2;
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
              if (u2 === y) continue;
              return u2;
            }
          }
          if ("next" === n2.method) n2.sent = n2._sent = n2.arg;
          else if ("throw" === n2.method) {
            if (o2 === h) throw o2 = s, n2.arg;
            n2.dispatchException(n2.arg);
          } else "return" === n2.method && n2.abrupt("return", n2.arg);
          o2 = f;
          var p2 = tryCatch(e2, r2, n2);
          if ("normal" === p2.type) {
            if (o2 = n2.done ? s : l, p2.arg === y) continue;
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
      if (o2 === t) return r2.delegate = null, "throw" === n2 && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
      var i2 = tryCatch(o2, e2.iterator, r2.arg);
      if ("throw" === i2.type) return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
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
        if (r2) return r2.call(e2);
        if ("function" == typeof e2.next) return e2;
        if (!isNaN(e2.length)) {
          var o2 = -1, i2 = function next() {
            for (; ++o2 < e2.length; ) if (n.call(e2, o2)) return next.value = e2[o2], next.done = false, next;
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
      for (var n2 in e2) r2.push(n2);
      return r2.reverse(), function next() {
        for (; r2.length; ) {
          var t3 = r2.pop();
          if (t3 in e2) return next.value = t3, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2) for (var r2 in this) "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      },
      stop: function() {
        this.done = true;
        var t2 = this.tryEntries[0].completion;
        if ("throw" === t2.type) throw t2.arg;
        return this.rval;
      },
      dispatchException: function(e2) {
        if (this.done) throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc) return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
            } else {
              if (!u2) throw Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
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
        if ("throw" === t2.type) throw t2.arg;
        return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
      },
      finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2) return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
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
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  if (getRuntimeEnv() === "web") {
    window.require = function() {
      return {};
    };
  }
  var wrtc = require("@roamhq/wrtc");
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
      var _this = this;
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
      this.localStreamMap = {};
      this.remoteStreamMap = {};
      this.answerStreamMap = {};
      setInterval(function() {
        console.log("当前的map信息");
        console.log(_this.localStreamMap);
        console.log(_this.localPcMap);
        console.log(_this.remotePcMap);
      }, 1e4);
    }
    return _createClass(CallManager2, [{
      key: "isRelay",
      value: function isRelay(data) {
        return data.callerTopic != this.clientTopic && data.calleeTopic != this.clientTopic;
      }
      //处理消息
    }, {
      key: "handle",
      value: function handle(data) {
        try {
          if (data.type == "offer") {
            this.callIns[data.callerTopic + data.calleeTopic] = {
              callerTopic: data.callerTopic,
              calleeTopic: data.calleeTopic,
              clientTopic: data.clientTopic,
              status: "calling"
            };
            this.eventListeners["offerIn"] && this.eventListeners["offerIn"](data);
          } else if (data.type == "candidate") {
            var candidate = new RtcFactory.RTCIceCandidate(data.ice);
            if (data.kind == "local") {
              if (this.remotePcMap[data.callerTopic + data.calleeTopic] && this.remotePcMap[data.callerTopic + data.calleeTopic].remoteDescription != null) {
                this.remotePcMap[data.callerTopic + data.calleeTopic].addIceCandidate(candidate);
              } else {
                if (!this.remoteIcesMap[data.callerTopic + data.calleeTopic]) {
                  this.remoteIcesMap[data.callerTopic + data.calleeTopic] = [];
                }
                this.remoteIcesMap[data.callerTopic + data.calleeTopic].push(candidate);
              }
            } else {
              this.localPcMap[data.calleeTopic + data.callerTopic].addIceCandidate(candidate);
            }
          } else if (data.type == "answer") {
            if (this.localPcMap[data.calleeTopic + data.callerTopic].remoteDescription == null) {
              var answer = new RtcFactory.RTCSessionDescription(data.sdp);
              this.localPcMap[data.calleeTopic + data.callerTopic].setRemoteDescription(answer);
              this.callOuts[data.calleeTopic + data.callerTopic].status = "answered";
            } else {
              console.error("answer重复");
            }
          } else if (data.type == "hangUp") {
            if (this.isRelay(data)) {
              if (data.clientTopic == data.callerTopic) {
                this.hangUp(data, "there");
              } else {
                this.hangUp(data);
              }
              this.hangUp(_objectSpread2(_objectSpread2({}, data), {}, {
                callerTopic: this.clientTopic,
                originCallerTopic: data.callerTopic
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
          } else if (data.type == "forward") {
            if (this.isRelay(data)) {
              if (data.clientTopic == data.callerTopic) {
                this.forwardCall(data, "there");
              } else {
                this.forwardCall(data);
              }
              this.forwardCall(_objectSpread2(_objectSpread2({}, data), {}, {
                callerTopic: this.clientTopic,
                originCallerTopic: data.callerTopic
              }));
            } else {
              this.forwardCall(data, "there");
            }
            this.eventListeners["forwardCall"] && this.eventListeners["forwardCall"](data);
          } else if (data.type == "answered") {
            if (this.callIns[data.callerTopic + data.calleeTopic].status != "answered") {
              this.eventListeners["answered"] && this.eventListeners["answered"](data);
              delete this.callIns[data.callerTopic + data.calleeTopic];
            }
          }
        } catch (e) {
          console.error("呼叫引擎处理消息出错", e);
        }
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
          this.handle(data);
        } catch (e) {
          console.error("呼叫引擎处理消息出错", e);
          console.error(message.toString());
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
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          if (mqttConfig.publish) {
            _this2.mqttClient = mqttConfig;
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
          var _this3 = this;
          var calleeTopic, relayTopic, callerTopic, relayStream, local, stream, streamKey, localStream, offer_sdp;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
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
                streamKey = calleeTopic + (callerTopic || this.clientTopic);
                this.localStreamMap[streamKey] = stream;
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
                this.remoteStreamMap[streamKey] = localStream;
                local.ontrack = function(event) {
                  console.log("onaddtrack", event);
                  localStream.addTrack(event.track);
                  setTimeout(function() {
                    _this3.eventListeners["callStream"]({
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
                    _this3.mqttClient.publish(relayTopic || calleeTopic, JSON.stringify({
                      type: "candidate",
                      kind: "local",
                      callerTopic: callerTopic || _this3.clientTopic,
                      calleeTopic,
                      clientTopic: _this3.clientTopic,
                      ice: iceCandidate
                    }));
                  }
                };
                _context.next = 18;
                return local.createOffer({
                  offerOptions: 1
                });
              case 18:
                offer_sdp = _context.sent;
                local.setLocalDescription(offer_sdp);
                this.localPcMap[calleeTopic + (callerTopic || this.clientTopic)] = local;
                console.log("setlocalpcMap" + calleeTopic + (callerTopic || this.clientTopic));
                this.mqttClient.publish(relayTopic || calleeTopic, JSON.stringify({
                  type: "offer",
                  callerTopic: callerTopic || this.clientTopic,
                  calleeTopic,
                  clientTopic: this.clientTopic,
                  sdp: offer_sdp
                }));
                this.callOuts[calleeTopic + (callerTopic || this.clientTopic)] = {
                  callerTopic: callerTopic || this.clientTopic,
                  calleeTopic,
                  clientTopic: this.clientTopic,
                  targetTopic: relayTopic || calleeTopic,
                  status: "calling"
                };
                this.eventListeners["answerOut"] && this.eventListeners["answerOut"](this.callOuts[calleeTopic + (callerTopic || this.clientTopic)]);
                local.oniceconnectionstatechange = function() {
                  console.log("local ice:", local.iceConnectionState);
                  if (local.iceConnectionState === "failed" || local.iceConnectionState === "disconnected") {
                    _this3.closeCallOutConnection(_this3.callOuts[calleeTopic + (callerTopic || _this3.clientTopic)]);
                    _this3.handle({
                      callerTopic: callerTopic || _this3.clientTopic,
                      calleeTopic,
                      clientTopic: _this3.clientTopic,
                      type: "hangUp"
                    });
                    _this3.eventListeners["disconnected"] && _this3.eventListeners["disconnected"]({
                      clientTopic: _this3.clientTopic,
                      callerTopic: callerTopic || _this3.clientTopic,
                      calleeTopic
                    });
                  } else if (local.iceConnectionState === "connected") {
                    _this3.eventListeners["connected"] && _this3.eventListeners["connected"]({
                      clientTopic: _this3.clientTopic,
                      callerTopic: callerTopic || _this3.clientTopic,
                      calleeTopic
                    });
                    if (relayTopic && relayTopic == calleeTopic) {
                      _this3.mqttClient.publish(callerTopic, JSON.stringify({
                        type: "relayConnected",
                        callerTopic: callerTopic || _this3.clientTopic,
                        calleeTopic,
                        clientTopic: _this3.clientTopic
                      }));
                    }
                  }
                };
              case 26:
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
          var _this4 = this;
          var remote, remoteStream, streamKey, stream, offer, answer, i;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (this.callIns[data.callerTopic + data.calleeTopic]) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                remote = new RtcFactory.RTCPeerConnection(this.turnConfig);
                this.remotePcMap[data.callerTopic + data.calleeTopic] = remote;
                remoteStream = new RtcFactory.MediaStream();
                streamKey = data.callerTopic + data.calleeTopic;
                this.remoteStreamMap[streamKey] = remoteStream;
                remote.ontrack = function(e) {
                  console.log("onaddtrack", e);
                  remoteStream.addTrack(e.track);
                  setTimeout(function() {
                    _this4.eventListeners["answerStream"](_objectSpread2({
                      pc: remote,
                      stream: remoteStream
                    }, data));
                  }, 200);
                };
                remote.oniceconnectionstatechange = function() {
                  console.log("remote ice:", remote.iceConnectionState);
                  if (remote.iceConnectionState === "failed" || remote.iceConnectionState === "disconnected") {
                    _this4.handle({
                      callerTopic: data.callerTopic || _this4.clientTopic,
                      calleeTopic: data.calleeTopic,
                      clientTopic: _this4.clientTopic,
                      type: "hangUp"
                    });
                    _this4.eventListeners["disconnected"] && _this4.eventListeners["disconnected"](_objectSpread2({
                      clientTopic: data.clientTopic
                    }, data));
                  } else if (remote.iceConnectionState === "connected") {
                    _this4.eventListeners["connected"] && _this4.eventListeners["connected"](_objectSpread2({
                      clientTopic: data.clientTopic
                    }, data));
                  }
                };
                _context2.next = 11;
                return RtcFactory.getUserMedia(this.constraints);
              case 11:
                stream = _context2.sent;
                this.answerStreamMap[streamKey] = stream;
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
                    _this4.mqttClient.publish(data.clientTopic, JSON.stringify({
                      type: "candidate",
                      clientTopic: _this4.clientTopic,
                      calleeTopic: data.calleeTopic,
                      callerTopic: data.callerTopic,
                      kind: "remote",
                      ice: iceCandidate
                    }));
                  }
                };
                offer = new RtcFactory.RTCSessionDescription(data.sdp);
                remote.setRemoteDescription(offer);
                _context2.next = 20;
                return remote.createAnswer();
              case 20:
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
                if (this.remoteIcesMap[data.callerTopic + data.calleeTopic]) {
                  for (i = 0; i < this.remoteIcesMap[data.callerTopic + data.calleeTopic].length; i++) {
                    remote.addIceCandidate(this.remoteIcesMap[data.callerTopic + data.calleeTopic][i]);
                  }
                }
                this.callIns[data.callerTopic + data.calleeTopic].status = "answered";
                if (data.calleeTopic == this.clientTopic) {
                  this.mqttClient.publish(this.clientTopic, JSON.stringify({
                    type: "answered",
                    clientTopic: this.clientTopic,
                    callerTopic: data.callerTopic,
                    calleeTopic: data.calleeTopic
                  }));
                }
                return _context2.abrupt("return", remote);
              case 28:
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
              if (sender.track) {
                sender.track.stop();
              }
            });
            rtcPeerConnection.getReceivers().forEach(function(receiver) {
              if (receiver.track) {
                receiver.track.stop();
              }
            });
            rtcPeerConnection.getTransceivers().forEach(function(transceiver) {
              if (transceiver.sender) {
                if (transceiver.sender.track) {
                  transceiver.sender.track.stop();
                }
              }
              if (transceiver.receiver) {
                if (transceiver.receiver.track) {
                  transceiver.receiver.track.stop();
                }
              }
              if (transceiver.stop) {
                transceiver.stop();
              }
            });
            rtcPeerConnection.close();
          } catch (e) {
            console.error("关闭连接失败", e);
          }
        }
      }
    }, {
      key: "closeCallOutConnection",
      value: function closeCallOutConnection(callOut, originCallerTopic) {
        console.log("关闭callOut连接", callOut, originCallerTopic);
        var key = originCallerTopic != null ? callOut.calleeTopic + originCallerTopic : callOut.calleeTopic + callOut.callerTopic;
        this.closeConnection(this.localPcMap[key]);
        this.cleanupMediaStreams(key);
        delete this.callOuts[key];
        delete this.localPcMap[key];
        this.eventListeners["closeCallOut"] && this.eventListeners["closeCallOut"](callOut, originCallerTopic);
      }
    }, {
      key: "closeCallInConnection",
      value: function closeCallInConnection(callIn, originCallerTopic) {
        console.log("关闭callIn连接", callIn, originCallerTopic);
        var key = originCallerTopic != null ? originCallerTopic + callIn.calleeTopic : callIn.callerTopic + callIn.calleeTopic;
        this.closeConnection(this.remotePcMap[key]);
        this.cleanupMediaStreams(key);
        delete this.callIns[key];
        delete this.remotePcMap[key];
        this.eventListeners["closeCallIn"] && this.eventListeners["closeCallIn"](callIn, originCallerTopic);
      }
    }, {
      key: "huangUpAll",
      value: function huangUpAll(data) {
        var callOut = this.callOuts[data.calleeTopic + data.callerTopic];
        if (callOut) {
          this.closeCallOutConnection(callOut);
          this.mqttClient.publish(callOut.targetTopic, JSON.stringify({
            type: "hangUp",
            clientTopic: callOut.clientTopic,
            callerTopic: callOut.callerTopic,
            calleeTopic: callOut.calleeTopic
          }));
        }
        var callIn = this.callIns[data.callerTopic + data.calleeTopic];
        if (callIn) {
          this.closeCallInConnection(callIn);
          this.mqttClient.publish(callIn.clientTopic, JSON.stringify({
            type: "hangUp",
            clientTopic: this.clientTopic,
            callerTopic: callIn.callerTopic,
            calleeTopic: callIn.calleeTopic
          }));
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
        var originCallerTopic = data.originCallerTopic || data.callerTopic;
        if (data.callerTopic == this.clientTopic) {
          var callOut = this.callOuts[data.calleeTopic + originCallerTopic];
          if (callOut) {
            this.closeCallOutConnection(callOut, originCallerTopic);
            if (who == "there") ;
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
          }
        } else {
          var callIn = this.callIns[originCallerTopic + data.calleeTopic];
          if (callIn) {
            this.closeCallInConnection(callIn, originCallerTopic);
            if (who == "there") ;
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
          }
        }
      }
      /***
       * 转接电话
       * @param data {callerTopic 呼叫者topic,calleeTopic 被呼叫者topic,clientTopic 当前节点topic,forwardTopic 转接topic}
       * @package who 挂断类型，there:对面挂断，默认:自己挂断
       */
    }, {
      key: "forwardCall",
      value: function forwardCall(data, who) {
        var originCallerTopic = data.originCallerTopic || data.callerTopic;
        if (data.callerTopic == this.clientTopic) {
          var callOut = this.callOuts[data.calleeTopic + originCallerTopic];
          if (callOut) {
            this.closeCallOutConnection(callOut, originCallerTopic);
            if (who == "there") ;
            else {
              this.mqttClient.publish(callOut.targetTopic, JSON.stringify({
                type: "forward",
                clientTopic: callOut.clientTopic,
                callerTopic: callOut.callerTopic,
                calleeTopic: callOut.calleeTopic,
                forwardTopic: data.forwardTopic,
                status: callOut.status,
                direction: "callIn"
              }));
            }
          }
          this.makeCall({
            calleeTopic: data.forwardTopic,
            callerTopic: data.callerTopic,
            relayTopic: data.relayTopic
          });
        } else {
          var callIn = this.callIns[originCallerTopic + data.calleeTopic];
          if (callIn) {
            this.closeCallInConnection(callIn, originCallerTopic);
            if (who == "there") ;
            else {
              this.mqttClient.publish(callIn.clientTopic, JSON.stringify({
                type: "forward",
                clientTopic: this.clientTopic,
                forwardTopic: data.forwardTopic,
                callerTopic: callIn.callerTopic,
                calleeTopic: callIn.calleeTopic,
                status: callIn.status,
                direction: "callOut"
              }));
            }
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
        this.cleanupMediaStreams();
        for (var key in this.localPcMap) {
          this.closeConnection(this.localPcMap[key]);
        }
        for (var _key in this.remotePcMap) {
          this.closeConnection(this.remotePcMap[_key]);
        }
      }
    }, {
      key: "cleanupMediaStreams",
      value: function cleanupMediaStreams(streamKey) {
        var _this5 = this;
        if (streamKey) {
          if (this.localStreamMap[streamKey]) {
            this.localStreamMap[streamKey].getTracks().forEach(function(track) {
              track.stop();
            });
            delete this.localStreamMap[streamKey];
          }
          if (this.remoteStreamMap[streamKey]) {
            this.remoteStreamMap[streamKey].getTracks().forEach(function(track) {
              track.stop();
            });
            delete this.remoteStreamMap[streamKey];
          }
          if (this.answerStreamMap[streamKey]) {
            this.answerStreamMap[streamKey].getTracks().forEach(function(track) {
              track.stop();
            });
            delete this.answerStreamMap[streamKey];
          }
        } else {
          Object.keys(this.localStreamMap).forEach(function(key) {
            _this5.localStreamMap[key].getTracks().forEach(function(track) {
              track.stop();
            });
          });
          this.localStreamMap = {};
          Object.keys(this.remoteStreamMap).forEach(function(key) {
            _this5.remoteStreamMap[key].getTracks().forEach(function(track) {
              track.stop();
            });
          });
          this.remoteStreamMap = {};
          Object.keys(this.answerStreamMap).forEach(function(key) {
            _this5.answerStreamMap[key].getTracks().forEach(function(track) {
              track.stop();
            });
          });
          this.answerStreamMap = {};
        }
      }
    }]);
  }();
  return CallManager;
});
