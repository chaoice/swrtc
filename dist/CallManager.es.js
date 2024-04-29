var wa = Object.defineProperty;
var va = (e, i, t) => i in e ? wa(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var De = (e, i, t) => (va(e, typeof i != "symbol" ? i + "" : i, t), t), $r = (e, i, t) => {
  if (!i.has(e))
    throw TypeError("Cannot " + t);
};
var B = (e, i, t) => ($r(e, i, "read from private field"), t ? t.call(e) : i.get(e)), Oe = (e, i, t) => {
  if (i.has(e))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(e) : i.set(e, t);
}, Ie = (e, i, t, l) => ($r(e, i, "write to private field"), l ? l.call(e, t) : i.set(e, t), t);
var yr = (e, i, t, l) => ({
  set _(h) {
    Ie(e, i, h, t);
  },
  get _() {
    return B(e, i, l);
  }
}), Te = (e, i, t) => ($r(e, i, "access private method"), t);
var kn = Object.defineProperty, _a = Object.getOwnPropertyDescriptor, Ea = Object.getOwnPropertyNames, Sa = Object.prototype.hasOwnProperty, Ge = (e, i) => () => (e && (i = e(e = 0)), i), me = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports), Zt = (e, i) => {
  for (var t in i)
    kn(e, t, { get: i[t], enumerable: !0 });
}, Aa = (e, i, t, l) => {
  if (i && typeof i == "object" || typeof i == "function")
    for (let h of Ea(i))
      !Sa.call(e, h) && h !== t && kn(e, h, { get: () => i[h], enumerable: !(l = _a(i, h)) || l.enumerable });
  return e;
}, xe = (e) => Aa(kn({}, "__esModule", { value: !0 }), e), at, oe = Ge(() => {
  at = { deviceMemory: 8, hardwareConcurrency: 8, language: "en-US" };
}), Ue = {};
Zt(Ue, { _debugEnd: () => Li, _debugProcess: () => Ui, _events: () => Ji, _eventsCount: () => Xi, _exiting: () => _i, _fatalExceptions: () => Bi, _getActiveHandles: () => Lo, _getActiveRequests: () => Uo, _kill: () => Ai, _linkedBinding: () => Mo, _maxListeners: () => Gi, _preload_modules: () => Qi, _rawDebug: () => yi, _startProfilerIdleNotifier: () => Ni, _stopProfilerIdleNotifier: () => ji, _tickCallback: () => xi, abort: () => qi, addListener: () => Zi, allowedNodeEnvironmentFlags: () => Ri, arch: () => oi, argv: () => li, argv0: () => Ki, assert: () => No, binding: () => pi, chdir: () => mi, config: () => Ei, cpuUsage: () => fr, cwd: () => gi, debugPort: () => zi, default: () => On, dlopen: () => xo, domain: () => vi, emit: () => on, emitWarning: () => fi, env: () => ai, execArgv: () => ui, execPath: () => Hi, exit: () => Ci, features: () => Pi, hasUncaughtExceptionCaptureCallback: () => jo, hrtime: () => Ar, kill: () => ki, listeners: () => Fo, memoryUsage: () => Ii, moduleLoadList: () => wi, nextTick: () => Po, off: () => tn, on: () => vt, once: () => en, openStdin: () => Oi, pid: () => $i, platform: () => si, ppid: () => Vi, prependListener: () => sn, prependOnceListener: () => an, reallyExit: () => Si, release: () => bi, removeAllListeners: () => nn, removeListener: () => rn, resourceUsage: () => Ti, setSourceMapsEnabled: () => Yi, setUncaughtExceptionCaptureCallback: () => Mi, stderr: () => Fi, stdin: () => Wi, stdout: () => Di, title: () => ni, umask: () => di, uptime: () => Do, version: () => hi, versions: () => ci });
function Cn(e) {
  throw new Error("Node.js process " + e + " is not supported by JSPM core outside of Node.js");
}
function Ta() {
  !Gt || !Qt || (Gt = !1, Qt.length ? bt = Qt.concat(bt) : gr = -1, bt.length && Ro());
}
function Ro() {
  if (!Gt) {
    var e = setTimeout(Ta, 0);
    Gt = !0;
    for (var i = bt.length; i; ) {
      for (Qt = bt, bt = []; ++gr < i; )
        Qt && Qt[gr].run();
      gr = -1, i = bt.length;
    }
    Qt = null, Gt = !1, clearTimeout(e);
  }
}
function Po(e) {
  var i = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var t = 1; t < arguments.length; t++)
      i[t - 1] = arguments[t];
  bt.push(new Bo(e, i)), bt.length === 1 && !Gt && setTimeout(Ro, 0);
}
function Bo(e, i) {
  this.fun = e, this.array = i;
}
function et() {
}
function Mo(e) {
  Cn("_linkedBinding");
}
function xo(e) {
  Cn("dlopen");
}
function Uo() {
  return [];
}
function Lo() {
  return [];
}
function No(e, i) {
  if (!e)
    throw new Error(i || "assertion error");
}
function jo() {
  return !1;
}
function Do() {
  return At.now() / 1e3;
}
function Ar(e) {
  var i = Math.floor((Date.now() - At.now()) * 1e-3), t = At.now() * 1e-3, l = Math.floor(t) + i, h = Math.floor(t % 1 * 1e9);
  return e && (l = l - e[0], h = h - e[1], h < 0 && (l--, h += Tr)), [l, h];
}
function vt() {
  return On;
}
function Fo(e) {
  return [];
}
var bt, Gt, Qt, gr, ni, oi, si, ai, li, ui, hi, ci, fi, pi, di, gi, mi, bi, yi, wi, vi, _i, Ei, Si, Ai, fr, Ti, Ii, ki, Ci, Oi, Ri, Pi, Bi, Mi, xi, Ui, Li, Ni, ji, Di, Fi, Wi, qi, $i, Vi, Hi, zi, Ki, Qi, Yi, At, Vr, Tr, Gi, Ji, Xi, Zi, en, tn, rn, nn, on, sn, an, On, Ia = Ge(() => {
  ae(), se(), oe(), bt = [], Gt = !1, gr = -1, Bo.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, ni = "browser", oi = "x64", si = "browser", ai = { PATH: "/usr/bin", LANG: at.language + ".UTF-8", PWD: "/", HOME: "/home", TMP: "/tmp" }, li = ["/usr/bin/node"], ui = [], hi = "v16.8.0", ci = {}, fi = function(e, i) {
    console.warn((i ? i + ": " : "") + e);
  }, pi = function(e) {
    Cn("binding");
  }, di = function(e) {
    return 0;
  }, gi = function() {
    return "/";
  }, mi = function(e) {
  }, bi = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" }, yi = et, wi = [], vi = {}, _i = !1, Ei = {}, Si = et, Ai = et, fr = function() {
    return {};
  }, Ti = fr, Ii = fr, ki = et, Ci = et, Oi = et, Ri = {}, Pi = { inspector: !1, debug: !1, uv: !1, ipv6: !1, tls_alpn: !1, tls_sni: !1, tls_ocsp: !1, tls: !1, cached_builtins: !0 }, Bi = et, Mi = et, xi = et, Ui = et, Li = et, Ni = et, ji = et, Di = void 0, Fi = void 0, Wi = void 0, qi = et, $i = 2, Vi = 1, Hi = "/bin/usr/node", zi = 9229, Ki = "node", Qi = [], Yi = et, At = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 }, At.now === void 0 && (Vr = Date.now(), At.timing && At.timing.navigationStart && (Vr = At.timing.navigationStart), At.now = () => Date.now() - Vr), Tr = 1e9, Ar.bigint = function(e) {
    var i = Ar(e);
    return typeof BigInt > "u" ? i[0] * Tr + i[1] : BigInt(i[0] * Tr) + BigInt(i[1]);
  }, Gi = 10, Ji = {}, Xi = 0, Zi = vt, en = vt, tn = vt, rn = vt, nn = vt, on = et, sn = vt, an = vt, On = { version: hi, versions: ci, arch: oi, platform: si, release: bi, _rawDebug: yi, moduleLoadList: wi, binding: pi, _linkedBinding: Mo, _events: Ji, _eventsCount: Xi, _maxListeners: Gi, on: vt, addListener: Zi, once: en, off: tn, removeListener: rn, removeAllListeners: nn, emit: on, prependListener: sn, prependOnceListener: an, listeners: Fo, domain: vi, _exiting: _i, config: Ei, dlopen: xo, uptime: Do, _getActiveRequests: Uo, _getActiveHandles: Lo, reallyExit: Si, _kill: Ai, cpuUsage: fr, resourceUsage: Ti, memoryUsage: Ii, kill: ki, exit: Ci, openStdin: Oi, allowedNodeEnvironmentFlags: Ri, assert: No, features: Pi, _fatalExceptions: Bi, setUncaughtExceptionCaptureCallback: Mi, hasUncaughtExceptionCaptureCallback: jo, emitWarning: fi, nextTick: Po, _tickCallback: xi, _debugProcess: Ui, _debugEnd: Li, _startProfilerIdleNotifier: Ni, _stopProfilerIdleNotifier: ji, stdout: Di, stdin: Wi, stderr: Fi, abort: qi, umask: di, chdir: mi, cwd: gi, env: ai, title: ni, argv: li, execArgv: ui, pid: $i, ppid: Vi, execPath: Hi, debugPort: zi, hrtime: Ar, argv0: Ki, _preload_modules: Qi, setSourceMapsEnabled: Yi };
}), se = Ge(() => {
  Ia();
}), Je = {};
Zt(Je, { Buffer: () => Br, INSPECT_MAX_BYTES: () => Wo, default: () => _t, kMaxLength: () => qo });
function ka() {
  if (ln)
    return nr;
  ln = !0, nr.byteLength = s, nr.toByteArray = a, nr.fromByteArray = g;
  for (var e = [], i = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, o = l.length; h < o; ++h)
    e[h] = l[h], i[l.charCodeAt(h)] = h;
  i[45] = 62, i[95] = 63;
  function r(m) {
    var b = m.length;
    if (b % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var y = m.indexOf("=");
    y === -1 && (y = b);
    var T = y === b ? 0 : 4 - y % 4;
    return [y, T];
  }
  function s(m) {
    var b = r(m), y = b[0], T = b[1];
    return (y + T) * 3 / 4 - T;
  }
  function n(m, b, y) {
    return (b + y) * 3 / 4 - y;
  }
  function a(m) {
    var b, y = r(m), T = y[0], U = y[1], k = new t(n(m, T, U)), I = 0, D = U > 0 ? T - 4 : T, F;
    for (F = 0; F < D; F += 4)
      b = i[m.charCodeAt(F)] << 18 | i[m.charCodeAt(F + 1)] << 12 | i[m.charCodeAt(F + 2)] << 6 | i[m.charCodeAt(F + 3)], k[I++] = b >> 16 & 255, k[I++] = b >> 8 & 255, k[I++] = b & 255;
    return U === 2 && (b = i[m.charCodeAt(F)] << 2 | i[m.charCodeAt(F + 1)] >> 4, k[I++] = b & 255), U === 1 && (b = i[m.charCodeAt(F)] << 10 | i[m.charCodeAt(F + 1)] << 4 | i[m.charCodeAt(F + 2)] >> 2, k[I++] = b >> 8 & 255, k[I++] = b & 255), k;
  }
  function c(m) {
    return e[m >> 18 & 63] + e[m >> 12 & 63] + e[m >> 6 & 63] + e[m & 63];
  }
  function d(m, b, y) {
    for (var T, U = [], k = b; k < y; k += 3)
      T = (m[k] << 16 & 16711680) + (m[k + 1] << 8 & 65280) + (m[k + 2] & 255), U.push(c(T));
    return U.join("");
  }
  function g(m) {
    for (var b, y = m.length, T = y % 3, U = [], k = 16383, I = 0, D = y - T; I < D; I += k)
      U.push(d(m, I, I + k > D ? D : I + k));
    return T === 1 ? (b = m[y - 1], U.push(e[b >> 2] + e[b << 4 & 63] + "==")) : T === 2 && (b = (m[y - 2] << 8) + m[y - 1], U.push(e[b >> 10] + e[b >> 4 & 63] + e[b << 2 & 63] + "=")), U.join("");
  }
  return nr;
}
function Ca() {
  return un ? pr : (un = !0, pr.read = function(e, i, t, l, h) {
    var o, r, s = h * 8 - l - 1, n = (1 << s) - 1, a = n >> 1, c = -7, d = t ? h - 1 : 0, g = t ? -1 : 1, m = e[i + d];
    for (d += g, o = m & (1 << -c) - 1, m >>= -c, c += s; c > 0; o = o * 256 + e[i + d], d += g, c -= 8)
      ;
    for (r = o & (1 << -c) - 1, o >>= -c, c += l; c > 0; r = r * 256 + e[i + d], d += g, c -= 8)
      ;
    if (o === 0)
      o = 1 - a;
    else {
      if (o === n)
        return r ? NaN : (m ? -1 : 1) * (1 / 0);
      r = r + Math.pow(2, l), o = o - a;
    }
    return (m ? -1 : 1) * r * Math.pow(2, o - l);
  }, pr.write = function(e, i, t, l, h, o) {
    var r, s, n, a = o * 8 - h - 1, c = (1 << a) - 1, d = c >> 1, g = h === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = l ? 0 : o - 1, b = l ? 1 : -1, y = i < 0 || i === 0 && 1 / i < 0 ? 1 : 0;
    for (i = Math.abs(i), isNaN(i) || i === 1 / 0 ? (s = isNaN(i) ? 1 : 0, r = c) : (r = Math.floor(Math.log(i) / Math.LN2), i * (n = Math.pow(2, -r)) < 1 && (r--, n *= 2), r + d >= 1 ? i += g / n : i += g * Math.pow(2, 1 - d), i * n >= 2 && (r++, n /= 2), r + d >= c ? (s = 0, r = c) : r + d >= 1 ? (s = (i * n - 1) * Math.pow(2, h), r = r + d) : (s = i * Math.pow(2, d - 1) * Math.pow(2, h), r = 0)); h >= 8; e[t + m] = s & 255, m += b, s /= 256, h -= 8)
      ;
    for (r = r << h | s, a += h; a > 0; e[t + m] = r & 255, m += b, r /= 256, a -= 8)
      ;
    e[t + m - b] |= y * 128;
  }, pr);
}
function Oa() {
  if (hn)
    return xt;
  hn = !0;
  let e = ka(), i = Ca(), t = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  xt.Buffer = r, xt.SlowBuffer = U, xt.INSPECT_MAX_BYTES = 50;
  let l = 2147483647;
  xt.kMaxLength = l, r.TYPED_ARRAY_SUPPORT = h(), !r.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function h() {
    try {
      let f = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(f, u), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(r.prototype, "parent", { enumerable: !0, get: function() {
    if (r.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(r.prototype, "offset", { enumerable: !0, get: function() {
    if (r.isBuffer(this))
      return this.byteOffset;
  } });
  function o(f) {
    if (f > l)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    let u = new Uint8Array(f);
    return Object.setPrototypeOf(u, r.prototype), u;
  }
  function r(f, u, p) {
    if (typeof f == "number") {
      if (typeof u == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return c(f);
    }
    return s(f, u, p);
  }
  r.poolSize = 8192;
  function s(f, u, p) {
    if (typeof f == "string")
      return d(f, u);
    if (ArrayBuffer.isView(f))
      return m(f);
    if (f == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
    if (H(f, ArrayBuffer) || f && H(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (H(f, SharedArrayBuffer) || f && H(f.buffer, SharedArrayBuffer)))
      return b(f, u, p);
    if (typeof f == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let v = f.valueOf && f.valueOf();
    if (v != null && v !== f)
      return r.from(v, u, p);
    let A = y(f);
    if (A)
      return A;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return r.from(f[Symbol.toPrimitive]("string"), u, p);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f);
  }
  r.from = function(f, u, p) {
    return s(f, u, p);
  }, Object.setPrototypeOf(r.prototype, Uint8Array.prototype), Object.setPrototypeOf(r, Uint8Array);
  function n(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function a(f, u, p) {
    return n(f), f <= 0 ? o(f) : u !== void 0 ? typeof p == "string" ? o(f).fill(u, p) : o(f).fill(u) : o(f);
  }
  r.alloc = function(f, u, p) {
    return a(f, u, p);
  };
  function c(f) {
    return n(f), o(f < 0 ? 0 : T(f) | 0);
  }
  r.allocUnsafe = function(f) {
    return c(f);
  }, r.allocUnsafeSlow = function(f) {
    return c(f);
  };
  function d(f, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !r.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    let p = k(f, u) | 0, v = o(p), A = v.write(f, u);
    return A !== p && (v = v.slice(0, A)), v;
  }
  function g(f) {
    let u = f.length < 0 ? 0 : T(f.length) | 0, p = o(u);
    for (let v = 0; v < u; v += 1)
      p[v] = f[v] & 255;
    return p;
  }
  function m(f) {
    if (H(f, Uint8Array)) {
      let u = new Uint8Array(f);
      return b(u.buffer, u.byteOffset, u.byteLength);
    }
    return g(f);
  }
  function b(f, u, p) {
    if (u < 0 || f.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < u + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let v;
    return u === void 0 && p === void 0 ? v = new Uint8Array(f) : p === void 0 ? v = new Uint8Array(f, u) : v = new Uint8Array(f, u, p), Object.setPrototypeOf(v, r.prototype), v;
  }
  function y(f) {
    if (r.isBuffer(f)) {
      let u = T(f.length) | 0, p = o(u);
      return p.length === 0 || f.copy(p, 0, 0, u), p;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || we(f.length) ? o(0) : g(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return g(f.data);
  }
  function T(f) {
    if (f >= l)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
    return f | 0;
  }
  function U(f) {
    return +f != f && (f = 0), r.alloc(+f);
  }
  r.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== r.prototype;
  }, r.compare = function(f, u) {
    if (H(f, Uint8Array) && (f = r.from(f, f.offset, f.byteLength)), H(u, Uint8Array) && (u = r.from(u, u.offset, u.byteLength)), !r.isBuffer(f) || !r.isBuffer(u))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (f === u)
      return 0;
    let p = f.length, v = u.length;
    for (let A = 0, w = Math.min(p, v); A < w; ++A)
      if (f[A] !== u[A]) {
        p = f[A], v = u[A];
        break;
      }
    return p < v ? -1 : v < p ? 1 : 0;
  }, r.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
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
        return !0;
      default:
        return !1;
    }
  }, r.concat = function(f, u) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return r.alloc(0);
    let p;
    if (u === void 0)
      for (u = 0, p = 0; p < f.length; ++p)
        u += f[p].length;
    let v = r.allocUnsafe(u), A = 0;
    for (p = 0; p < f.length; ++p) {
      let w = f[p];
      if (H(w, Uint8Array))
        A + w.length > v.length ? (r.isBuffer(w) || (w = r.from(w)), w.copy(v, A)) : Uint8Array.prototype.set.call(v, w, A);
      else if (r.isBuffer(w))
        w.copy(v, A);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      A += w.length;
    }
    return v;
  };
  function k(f, u) {
    if (r.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || H(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f);
    let p = f.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && p === 0)
      return 0;
    let A = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return j(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Y(f).length;
        default:
          if (A)
            return v ? -1 : j(f).length;
          u = ("" + u).toLowerCase(), A = !0;
      }
  }
  r.byteLength = k;
  function I(f, u, p) {
    let v = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, u >>>= 0, p <= u))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return q(this, u, p);
        case "utf8":
        case "utf-8":
          return $(this, u, p);
        case "ascii":
          return ge(this, u, p);
        case "latin1":
        case "binary":
          return ne(this, u, p);
        case "base64":
          return E(this, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return be(this, u, p);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), v = !0;
      }
  }
  r.prototype._isBuffer = !0;
  function D(f, u, p) {
    let v = f[u];
    f[u] = f[p], f[p] = v;
  }
  r.prototype.swap16 = function() {
    let f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < f; u += 2)
      D(this, u, u + 1);
    return this;
  }, r.prototype.swap32 = function() {
    let f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < f; u += 4)
      D(this, u, u + 3), D(this, u + 1, u + 2);
    return this;
  }, r.prototype.swap64 = function() {
    let f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < f; u += 8)
      D(this, u, u + 7), D(this, u + 1, u + 6), D(this, u + 2, u + 5), D(this, u + 3, u + 4);
    return this;
  }, r.prototype.toString = function() {
    let f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? $(this, 0, f) : I.apply(this, arguments);
  }, r.prototype.toLocaleString = r.prototype.toString, r.prototype.equals = function(f) {
    if (!r.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : r.compare(this, f) === 0;
  }, r.prototype.inspect = function() {
    let f = "", u = xt.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (f += " ... "), "<Buffer " + f + ">";
  }, t && (r.prototype[t] = r.prototype.inspect), r.prototype.compare = function(f, u, p, v, A) {
    if (H(f, Uint8Array) && (f = r.from(f, f.offset, f.byteLength)), !r.isBuffer(f))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f);
    if (u === void 0 && (u = 0), p === void 0 && (p = f ? f.length : 0), v === void 0 && (v = 0), A === void 0 && (A = this.length), u < 0 || p > f.length || v < 0 || A > this.length)
      throw new RangeError("out of range index");
    if (v >= A && u >= p)
      return 0;
    if (v >= A)
      return -1;
    if (u >= p)
      return 1;
    if (u >>>= 0, p >>>= 0, v >>>= 0, A >>>= 0, this === f)
      return 0;
    let w = A - v, P = p - u, V = Math.min(w, P), fe = this.slice(v, A), ie = f.slice(u, p);
    for (let ye = 0; ye < V; ++ye)
      if (fe[ye] !== ie[ye]) {
        w = fe[ye], P = ie[ye];
        break;
      }
    return w < P ? -1 : P < w ? 1 : 0;
  };
  function F(f, u, p, v, A) {
    if (f.length === 0)
      return -1;
    if (typeof p == "string" ? (v = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, we(p) && (p = A ? 0 : f.length - 1), p < 0 && (p = f.length + p), p >= f.length) {
      if (A)
        return -1;
      p = f.length - 1;
    } else if (p < 0)
      if (A)
        p = 0;
      else
        return -1;
    if (typeof u == "string" && (u = r.from(u, v)), r.isBuffer(u))
      return u.length === 0 ? -1 : R(f, u, p, v, A);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? A ? Uint8Array.prototype.indexOf.call(f, u, p) : Uint8Array.prototype.lastIndexOf.call(f, u, p) : R(f, [u], p, v, A);
    throw new TypeError("val must be string, number or Buffer");
  }
  function R(f, u, p, v, A) {
    let w = 1, P = f.length, V = u.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (f.length < 2 || u.length < 2)
        return -1;
      w = 2, P /= 2, V /= 2, p /= 2;
    }
    function fe(ye, Se) {
      return w === 1 ? ye[Se] : ye.readUInt16BE(Se * w);
    }
    let ie;
    if (A) {
      let ye = -1;
      for (ie = p; ie < P; ie++)
        if (fe(f, ie) === fe(u, ye === -1 ? 0 : ie - ye)) {
          if (ye === -1 && (ye = ie), ie - ye + 1 === V)
            return ye * w;
        } else
          ye !== -1 && (ie -= ie - ye), ye = -1;
    } else
      for (p + V > P && (p = P - V), ie = p; ie >= 0; ie--) {
        let ye = !0;
        for (let Se = 0; Se < V; Se++)
          if (fe(f, ie + Se) !== fe(u, Se)) {
            ye = !1;
            break;
          }
        if (ye)
          return ie;
      }
    return -1;
  }
  r.prototype.includes = function(f, u, p) {
    return this.indexOf(f, u, p) !== -1;
  }, r.prototype.indexOf = function(f, u, p) {
    return F(this, f, u, p, !0);
  }, r.prototype.lastIndexOf = function(f, u, p) {
    return F(this, f, u, p, !1);
  };
  function C(f, u, p, v) {
    p = Number(p) || 0;
    let A = f.length - p;
    v ? (v = Number(v), v > A && (v = A)) : v = A;
    let w = u.length;
    v > w / 2 && (v = w / 2);
    let P;
    for (P = 0; P < v; ++P) {
      let V = parseInt(u.substr(P * 2, 2), 16);
      if (we(V))
        return P;
      f[p + P] = V;
    }
    return P;
  }
  function x(f, u, p, v) {
    return L(j(u, f.length - p), f, p, v);
  }
  function W(f, u, p, v) {
    return L(N(u), f, p, v);
  }
  function G(f, u, p, v) {
    return L(Y(u), f, p, v);
  }
  function ee(f, u, p, v) {
    return L(te(u, f.length - p), f, p, v);
  }
  r.prototype.write = function(f, u, p, v) {
    if (u === void 0)
      v = "utf8", p = this.length, u = 0;
    else if (p === void 0 && typeof u == "string")
      v = u, p = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(p) ? (p = p >>> 0, v === void 0 && (v = "utf8")) : (v = p, p = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let A = this.length - u;
    if ((p === void 0 || p > A) && (p = A), f.length > 0 && (p < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    v || (v = "utf8");
    let w = !1;
    for (; ; )
      switch (v) {
        case "hex":
          return C(this, f, u, p);
        case "utf8":
        case "utf-8":
          return x(this, f, u, p);
        case "ascii":
        case "latin1":
        case "binary":
          return W(this, f, u, p);
        case "base64":
          return G(this, f, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, f, u, p);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + v);
          v = ("" + v).toLowerCase(), w = !0;
      }
  }, r.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function E(f, u, p) {
    return u === 0 && p === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(u, p));
  }
  function $(f, u, p) {
    p = Math.min(f.length, p);
    let v = [], A = u;
    for (; A < p; ) {
      let w = f[A], P = null, V = w > 239 ? 4 : w > 223 ? 3 : w > 191 ? 2 : 1;
      if (A + V <= p) {
        let fe, ie, ye, Se;
        switch (V) {
          case 1:
            w < 128 && (P = w);
            break;
          case 2:
            fe = f[A + 1], (fe & 192) === 128 && (Se = (w & 31) << 6 | fe & 63, Se > 127 && (P = Se));
            break;
          case 3:
            fe = f[A + 1], ie = f[A + 2], (fe & 192) === 128 && (ie & 192) === 128 && (Se = (w & 15) << 12 | (fe & 63) << 6 | ie & 63, Se > 2047 && (Se < 55296 || Se > 57343) && (P = Se));
            break;
          case 4:
            fe = f[A + 1], ie = f[A + 2], ye = f[A + 3], (fe & 192) === 128 && (ie & 192) === 128 && (ye & 192) === 128 && (Se = (w & 15) << 18 | (fe & 63) << 12 | (ie & 63) << 6 | ye & 63, Se > 65535 && Se < 1114112 && (P = Se));
        }
      }
      P === null ? (P = 65533, V = 1) : P > 65535 && (P -= 65536, v.push(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), v.push(P), A += V;
    }
    return K(v);
  }
  let Z = 4096;
  function K(f) {
    let u = f.length;
    if (u <= Z)
      return String.fromCharCode.apply(String, f);
    let p = "", v = 0;
    for (; v < u; )
      p += String.fromCharCode.apply(String, f.slice(v, v += Z));
    return p;
  }
  function ge(f, u, p) {
    let v = "";
    p = Math.min(f.length, p);
    for (let A = u; A < p; ++A)
      v += String.fromCharCode(f[A] & 127);
    return v;
  }
  function ne(f, u, p) {
    let v = "";
    p = Math.min(f.length, p);
    for (let A = u; A < p; ++A)
      v += String.fromCharCode(f[A]);
    return v;
  }
  function q(f, u, p) {
    let v = f.length;
    (!u || u < 0) && (u = 0), (!p || p < 0 || p > v) && (p = v);
    let A = "";
    for (let w = u; w < p; ++w)
      A += _e[f[w]];
    return A;
  }
  function be(f, u, p) {
    let v = f.slice(u, p), A = "";
    for (let w = 0; w < v.length - 1; w += 2)
      A += String.fromCharCode(v[w] + v[w + 1] * 256);
    return A;
  }
  r.prototype.slice = function(f, u) {
    let p = this.length;
    f = ~~f, u = u === void 0 ? p : ~~u, f < 0 ? (f += p, f < 0 && (f = 0)) : f > p && (f = p), u < 0 ? (u += p, u < 0 && (u = 0)) : u > p && (u = p), u < f && (u = f);
    let v = this.subarray(f, u);
    return Object.setPrototypeOf(v, r.prototype), v;
  };
  function re(f, u, p) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + u > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  r.prototype.readUintLE = r.prototype.readUIntLE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || re(f, u, this.length);
    let v = this[f], A = 1, w = 0;
    for (; ++w < u && (A *= 256); )
      v += this[f + w] * A;
    return v;
  }, r.prototype.readUintBE = r.prototype.readUIntBE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || re(f, u, this.length);
    let v = this[f + --u], A = 1;
    for (; u > 0 && (A *= 256); )
      v += this[f + --u] * A;
    return v;
  }, r.prototype.readUint8 = r.prototype.readUInt8 = function(f, u) {
    return f = f >>> 0, u || re(f, 1, this.length), this[f];
  }, r.prototype.readUint16LE = r.prototype.readUInt16LE = function(f, u) {
    return f = f >>> 0, u || re(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, r.prototype.readUint16BE = r.prototype.readUInt16BE = function(f, u) {
    return f = f >>> 0, u || re(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, r.prototype.readUint32LE = r.prototype.readUInt32LE = function(f, u) {
    return f = f >>> 0, u || re(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, r.prototype.readUint32BE = r.prototype.readUInt32BE = function(f, u) {
    return f = f >>> 0, u || re(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, r.prototype.readBigUInt64LE = Ae(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && he(f, this.length - 8);
    let v = u + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, A = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + p * 2 ** 24;
    return BigInt(v) + (BigInt(A) << BigInt(32));
  }), r.prototype.readBigUInt64BE = Ae(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && he(f, this.length - 8);
    let v = u * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], A = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + p;
    return (BigInt(v) << BigInt(32)) + BigInt(A);
  }), r.prototype.readIntLE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || re(f, u, this.length);
    let v = this[f], A = 1, w = 0;
    for (; ++w < u && (A *= 256); )
      v += this[f + w] * A;
    return A *= 128, v >= A && (v -= Math.pow(2, 8 * u)), v;
  }, r.prototype.readIntBE = function(f, u, p) {
    f = f >>> 0, u = u >>> 0, p || re(f, u, this.length);
    let v = u, A = 1, w = this[f + --v];
    for (; v > 0 && (A *= 256); )
      w += this[f + --v] * A;
    return A *= 128, w >= A && (w -= Math.pow(2, 8 * u)), w;
  }, r.prototype.readInt8 = function(f, u) {
    return f = f >>> 0, u || re(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, r.prototype.readInt16LE = function(f, u) {
    f = f >>> 0, u || re(f, 2, this.length);
    let p = this[f] | this[f + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, r.prototype.readInt16BE = function(f, u) {
    f = f >>> 0, u || re(f, 2, this.length);
    let p = this[f + 1] | this[f] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, r.prototype.readInt32LE = function(f, u) {
    return f = f >>> 0, u || re(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, r.prototype.readInt32BE = function(f, u) {
    return f = f >>> 0, u || re(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, r.prototype.readBigInt64LE = Ae(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && he(f, this.length - 8);
    let v = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (p << 24);
    return (BigInt(v) << BigInt(32)) + BigInt(u + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), r.prototype.readBigInt64BE = Ae(function(f) {
    f = f >>> 0, J(f, "offset");
    let u = this[f], p = this[f + 7];
    (u === void 0 || p === void 0) && he(f, this.length - 8);
    let v = (u << 24) + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(v) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + p);
  }), r.prototype.readFloatLE = function(f, u) {
    return f = f >>> 0, u || re(f, 4, this.length), i.read(this, f, !0, 23, 4);
  }, r.prototype.readFloatBE = function(f, u) {
    return f = f >>> 0, u || re(f, 4, this.length), i.read(this, f, !1, 23, 4);
  }, r.prototype.readDoubleLE = function(f, u) {
    return f = f >>> 0, u || re(f, 8, this.length), i.read(this, f, !0, 52, 8);
  }, r.prototype.readDoubleBE = function(f, u) {
    return f = f >>> 0, u || re(f, 8, this.length), i.read(this, f, !1, 52, 8);
  };
  function ve(f, u, p, v, A, w) {
    if (!r.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > A || u < w)
      throw new RangeError('"value" argument is out of bounds');
    if (p + v > f.length)
      throw new RangeError("Index out of range");
  }
  r.prototype.writeUintLE = r.prototype.writeUIntLE = function(f, u, p, v) {
    if (f = +f, u = u >>> 0, p = p >>> 0, !v) {
      let P = Math.pow(2, 8 * p) - 1;
      ve(this, f, u, p, P, 0);
    }
    let A = 1, w = 0;
    for (this[u] = f & 255; ++w < p && (A *= 256); )
      this[u + w] = f / A & 255;
    return u + p;
  }, r.prototype.writeUintBE = r.prototype.writeUIntBE = function(f, u, p, v) {
    if (f = +f, u = u >>> 0, p = p >>> 0, !v) {
      let P = Math.pow(2, 8 * p) - 1;
      ve(this, f, u, p, P, 0);
    }
    let A = p - 1, w = 1;
    for (this[u + A] = f & 255; --A >= 0 && (w *= 256); )
      this[u + A] = f / w & 255;
    return u + p;
  }, r.prototype.writeUint8 = r.prototype.writeUInt8 = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 1, 255, 0), this[u] = f & 255, u + 1;
  }, r.prototype.writeUint16LE = r.prototype.writeUInt16LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 2, 65535, 0), this[u] = f & 255, this[u + 1] = f >>> 8, u + 2;
  }, r.prototype.writeUint16BE = r.prototype.writeUInt16BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 2, 65535, 0), this[u] = f >>> 8, this[u + 1] = f & 255, u + 2;
  }, r.prototype.writeUint32LE = r.prototype.writeUInt32LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 4, 4294967295, 0), this[u + 3] = f >>> 24, this[u + 2] = f >>> 16, this[u + 1] = f >>> 8, this[u] = f & 255, u + 4;
  }, r.prototype.writeUint32BE = r.prototype.writeUInt32BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 4, 4294967295, 0), this[u] = f >>> 24, this[u + 1] = f >>> 16, this[u + 2] = f >>> 8, this[u + 3] = f & 255, u + 4;
  };
  function S(f, u, p, v, A) {
    X(u, v, A, f, p, 7);
    let w = Number(u & BigInt(4294967295));
    f[p++] = w, w = w >> 8, f[p++] = w, w = w >> 8, f[p++] = w, w = w >> 8, f[p++] = w;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return f[p++] = P, P = P >> 8, f[p++] = P, P = P >> 8, f[p++] = P, P = P >> 8, f[p++] = P, p;
  }
  function Q(f, u, p, v, A) {
    X(u, v, A, f, p, 7);
    let w = Number(u & BigInt(4294967295));
    f[p + 7] = w, w = w >> 8, f[p + 6] = w, w = w >> 8, f[p + 5] = w, w = w >> 8, f[p + 4] = w;
    let P = Number(u >> BigInt(32) & BigInt(4294967295));
    return f[p + 3] = P, P = P >> 8, f[p + 2] = P, P = P >> 8, f[p + 1] = P, P = P >> 8, f[p] = P, p + 8;
  }
  r.prototype.writeBigUInt64LE = Ae(function(f, u = 0) {
    return S(this, f, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), r.prototype.writeBigUInt64BE = Ae(function(f, u = 0) {
    return Q(this, f, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), r.prototype.writeIntLE = function(f, u, p, v) {
    if (f = +f, u = u >>> 0, !v) {
      let V = Math.pow(2, 8 * p - 1);
      ve(this, f, u, p, V - 1, -V);
    }
    let A = 0, w = 1, P = 0;
    for (this[u] = f & 255; ++A < p && (w *= 256); )
      f < 0 && P === 0 && this[u + A - 1] !== 0 && (P = 1), this[u + A] = (f / w >> 0) - P & 255;
    return u + p;
  }, r.prototype.writeIntBE = function(f, u, p, v) {
    if (f = +f, u = u >>> 0, !v) {
      let V = Math.pow(2, 8 * p - 1);
      ve(this, f, u, p, V - 1, -V);
    }
    let A = p - 1, w = 1, P = 0;
    for (this[u + A] = f & 255; --A >= 0 && (w *= 256); )
      f < 0 && P === 0 && this[u + A + 1] !== 0 && (P = 1), this[u + A] = (f / w >> 0) - P & 255;
    return u + p;
  }, r.prototype.writeInt8 = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[u] = f & 255, u + 1;
  }, r.prototype.writeInt16LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 2, 32767, -32768), this[u] = f & 255, this[u + 1] = f >>> 8, u + 2;
  }, r.prototype.writeInt16BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 2, 32767, -32768), this[u] = f >>> 8, this[u + 1] = f & 255, u + 2;
  }, r.prototype.writeInt32LE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 4, 2147483647, -2147483648), this[u] = f & 255, this[u + 1] = f >>> 8, this[u + 2] = f >>> 16, this[u + 3] = f >>> 24, u + 4;
  }, r.prototype.writeInt32BE = function(f, u, p) {
    return f = +f, u = u >>> 0, p || ve(this, f, u, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[u] = f >>> 24, this[u + 1] = f >>> 16, this[u + 2] = f >>> 8, this[u + 3] = f & 255, u + 4;
  }, r.prototype.writeBigInt64LE = Ae(function(f, u = 0) {
    return S(this, f, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), r.prototype.writeBigInt64BE = Ae(function(f, u = 0) {
    return Q(this, f, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ce(f, u, p, v, A, w) {
    if (p + v > f.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function Ee(f, u, p, v, A) {
    return u = +u, p = p >>> 0, A || ce(f, u, p, 4), i.write(f, u, p, v, 23, 4), p + 4;
  }
  r.prototype.writeFloatLE = function(f, u, p) {
    return Ee(this, f, u, !0, p);
  }, r.prototype.writeFloatBE = function(f, u, p) {
    return Ee(this, f, u, !1, p);
  };
  function ue(f, u, p, v, A) {
    return u = +u, p = p >>> 0, A || ce(f, u, p, 8), i.write(f, u, p, v, 52, 8), p + 8;
  }
  r.prototype.writeDoubleLE = function(f, u, p) {
    return ue(this, f, u, !0, p);
  }, r.prototype.writeDoubleBE = function(f, u, p) {
    return ue(this, f, u, !1, p);
  }, r.prototype.copy = function(f, u, p, v) {
    if (!r.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !v && v !== 0 && (v = this.length), u >= f.length && (u = f.length), u || (u = 0), v > 0 && v < p && (v = p), v === p || f.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (v < 0)
      throw new RangeError("sourceEnd out of bounds");
    v > this.length && (v = this.length), f.length - u < v - p && (v = f.length - u + p);
    let A = v - p;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, p, v) : Uint8Array.prototype.set.call(f, this.subarray(p, v), u), A;
  }, r.prototype.fill = function(f, u, p, v) {
    if (typeof f == "string") {
      if (typeof u == "string" ? (v = u, u = 0, p = this.length) : typeof p == "string" && (v = p, p = this.length), v !== void 0 && typeof v != "string")
        throw new TypeError("encoding must be a string");
      if (typeof v == "string" && !r.isEncoding(v))
        throw new TypeError("Unknown encoding: " + v);
      if (f.length === 1) {
        let w = f.charCodeAt(0);
        (v === "utf8" && w < 128 || v === "latin1") && (f = w);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (u < 0 || this.length < u || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= u)
      return this;
    u = u >>> 0, p = p === void 0 ? this.length : p >>> 0, f || (f = 0);
    let A;
    if (typeof f == "number")
      for (A = u; A < p; ++A)
        this[A] = f;
    else {
      let w = r.isBuffer(f) ? f : r.from(f, v), P = w.length;
      if (P === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (A = 0; A < p - u; ++A)
        this[A + u] = w[A % P];
    }
    return this;
  };
  let M = {};
  function _(f, u, p) {
    M[f] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: u.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(v) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: v, writable: !0 });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  _("ERR_BUFFER_OUT_OF_BOUNDS", function(f) {
    return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), _("ERR_INVALID_ARG_TYPE", function(f, u) {
    return `The "${f}" argument must be of type number. Received type ${typeof u}`;
  }, TypeError), _("ERR_OUT_OF_RANGE", function(f, u, p) {
    let v = `The value of "${f}" is out of range.`, A = p;
    return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? A = z(String(p)) : typeof p == "bigint" && (A = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (A = z(A)), A += "n"), v += ` It must be ${u}. Received ${A}`, v;
  }, RangeError);
  function z(f) {
    let u = "", p = f.length, v = f[0] === "-" ? 1 : 0;
    for (; p >= v + 4; p -= 3)
      u = `_${f.slice(p - 3, p)}${u}`;
    return `${f.slice(0, p)}${u}`;
  }
  function le(f, u, p) {
    J(u, "offset"), (f[u] === void 0 || f[u + p] === void 0) && he(u, f.length - (p + 1));
  }
  function X(f, u, p, v, A, w) {
    if (f > p || f < u) {
      let P = typeof u == "bigint" ? "n" : "", V;
      throw w > 3 ? u === 0 || u === BigInt(0) ? V = `>= 0${P} and < 2${P} ** ${(w + 1) * 8}${P}` : V = `>= -(2${P} ** ${(w + 1) * 8 - 1}${P}) and < 2 ** ${(w + 1) * 8 - 1}${P}` : V = `>= ${u}${P} and <= ${p}${P}`, new M.ERR_OUT_OF_RANGE("value", V, f);
    }
    le(v, A, w);
  }
  function J(f, u) {
    if (typeof f != "number")
      throw new M.ERR_INVALID_ARG_TYPE(u, "number", f);
  }
  function he(f, u, p) {
    throw Math.floor(f) !== f ? (J(f, p), new M.ERR_OUT_OF_RANGE(p || "offset", "an integer", f)) : u < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS() : new M.ERR_OUT_OF_RANGE(p || "offset", `>= ${p ? 1 : 0} and <= ${u}`, f);
  }
  let pe = /[^+/0-9A-Za-z-_]/g;
  function O(f) {
    if (f = f.split("=")[0], f = f.trim().replace(pe, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function j(f, u) {
    u = u || 1 / 0;
    let p, v = f.length, A = null, w = [];
    for (let P = 0; P < v; ++P) {
      if (p = f.charCodeAt(P), p > 55295 && p < 57344) {
        if (!A) {
          if (p > 56319) {
            (u -= 3) > -1 && w.push(239, 191, 189);
            continue;
          } else if (P + 1 === v) {
            (u -= 3) > -1 && w.push(239, 191, 189);
            continue;
          }
          A = p;
          continue;
        }
        if (p < 56320) {
          (u -= 3) > -1 && w.push(239, 191, 189), A = p;
          continue;
        }
        p = (A - 55296 << 10 | p - 56320) + 65536;
      } else
        A && (u -= 3) > -1 && w.push(239, 191, 189);
      if (A = null, p < 128) {
        if ((u -= 1) < 0)
          break;
        w.push(p);
      } else if (p < 2048) {
        if ((u -= 2) < 0)
          break;
        w.push(p >> 6 | 192, p & 63 | 128);
      } else if (p < 65536) {
        if ((u -= 3) < 0)
          break;
        w.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128);
      } else if (p < 1114112) {
        if ((u -= 4) < 0)
          break;
        w.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return w;
  }
  function N(f) {
    let u = [];
    for (let p = 0; p < f.length; ++p)
      u.push(f.charCodeAt(p) & 255);
    return u;
  }
  function te(f, u) {
    let p, v, A, w = [];
    for (let P = 0; P < f.length && !((u -= 2) < 0); ++P)
      p = f.charCodeAt(P), v = p >> 8, A = p % 256, w.push(A), w.push(v);
    return w;
  }
  function Y(f) {
    return e.toByteArray(O(f));
  }
  function L(f, u, p, v) {
    let A;
    for (A = 0; A < v && !(A + p >= u.length || A >= f.length); ++A)
      u[A + p] = f[A];
    return A;
  }
  function H(f, u) {
    return f instanceof u || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === u.name;
  }
  function we(f) {
    return f !== f;
  }
  let _e = function() {
    let f = "0123456789abcdef", u = new Array(256);
    for (let p = 0; p < 16; ++p) {
      let v = p * 16;
      for (let A = 0; A < 16; ++A)
        u[v + A] = f[p] + f[A];
    }
    return u;
  }();
  function Ae(f) {
    return typeof BigInt > "u" ? Re : f;
  }
  function Re() {
    throw new Error("BigInt not supported");
  }
  return xt;
}
var nr, ln, pr, un, xt, hn, _t, Br, Wo, qo, Xe = Ge(() => {
  ae(), se(), oe(), nr = {}, ln = !1, pr = {}, un = !1, xt = {}, hn = !1, _t = Oa(), _t.Buffer, _t.SlowBuffer, _t.INSPECT_MAX_BYTES, _t.kMaxLength, Br = _t.Buffer, Wo = _t.INSPECT_MAX_BYTES, qo = _t.kMaxLength;
}), ae = Ge(() => {
  Xe();
}), Ra = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = class {
    constructor(t) {
      this.aliasToTopic = {}, this.max = t;
    }
    put(t, l) {
      return l === 0 || l > this.max ? !1 : (this.aliasToTopic[l] = t, this.length = Object.keys(this.aliasToTopic).length, !0);
    }
    getTopicByAlias(t) {
      return this.aliasToTopic[t];
    }
    clear() {
      this.aliasToTopic = {};
    }
  };
  e.default = i;
}), Ke = me((e, i) => {
  ae(), se(), oe(), i.exports = { ArrayIsArray(t) {
    return Array.isArray(t);
  }, ArrayPrototypeIncludes(t, l) {
    return t.includes(l);
  }, ArrayPrototypeIndexOf(t, l) {
    return t.indexOf(l);
  }, ArrayPrototypeJoin(t, l) {
    return t.join(l);
  }, ArrayPrototypeMap(t, l) {
    return t.map(l);
  }, ArrayPrototypePop(t, l) {
    return t.pop(l);
  }, ArrayPrototypePush(t, l) {
    return t.push(l);
  }, ArrayPrototypeSlice(t, l, h) {
    return t.slice(l, h);
  }, Error, FunctionPrototypeCall(t, l, ...h) {
    return t.call(l, ...h);
  }, FunctionPrototypeSymbolHasInstance(t, l) {
    return Function.prototype[Symbol.hasInstance].call(t, l);
  }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(t, l) {
    return Object.defineProperties(t, l);
  }, ObjectDefineProperty(t, l, h) {
    return Object.defineProperty(t, l, h);
  }, ObjectGetOwnPropertyDescriptor(t, l) {
    return Object.getOwnPropertyDescriptor(t, l);
  }, ObjectKeys(t) {
    return Object.keys(t);
  }, ObjectSetPrototypeOf(t, l) {
    return Object.setPrototypeOf(t, l);
  }, Promise, PromisePrototypeCatch(t, l) {
    return t.catch(l);
  }, PromisePrototypeThen(t, l, h) {
    return t.then(l, h);
  }, PromiseReject(t) {
    return Promise.reject(t);
  }, ReflectApply: Reflect.apply, RegExpPrototypeTest(t, l) {
    return t.test(l);
  }, SafeSet: Set, String, StringPrototypeSlice(t, l, h) {
    return t.slice(l, h);
  }, StringPrototypeToLowerCase(t) {
    return t.toLowerCase();
  }, StringPrototypeToUpperCase(t) {
    return t.toUpperCase();
  }, StringPrototypeTrim(t) {
    return t.trim();
  }, Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet(t, l, h) {
    return t.set(l, h);
  }, Uint8Array };
}), kt = me((e, i) => {
  ae(), se(), oe();
  var t = (Xe(), xe(Je)), l = Object.getPrototypeOf(async function() {
  }).constructor, h = globalThis.Blob || t.Blob, o = typeof h < "u" ? function(s) {
    return s instanceof h;
  } : function(s) {
    return !1;
  }, r = class extends Error {
    constructor(s) {
      if (!Array.isArray(s))
        throw new TypeError(`Expected input to be an Array, got ${typeof s}`);
      let n = "";
      for (let a = 0; a < s.length; a++)
        n += `    ${s[a].stack}
`;
      super(n), this.name = "AggregateError", this.errors = s;
    }
  };
  i.exports = { AggregateError: r, kEmptyObject: Object.freeze({}), once(s) {
    let n = !1;
    return function(...a) {
      n || (n = !0, s.apply(this, a));
    };
  }, createDeferredPromise: function() {
    let s, n;
    return { promise: new Promise((a, c) => {
      s = a, n = c;
    }), resolve: s, reject: n };
  }, promisify(s) {
    return new Promise((n, a) => {
      s((c, ...d) => c ? a(c) : n(...d));
    });
  }, debuglog() {
    return function() {
    };
  }, format(s, ...n) {
    return s.replace(/%([sdifj])/g, function(...[a, c]) {
      let d = n.shift();
      return c === "f" ? d.toFixed(6) : c === "j" ? JSON.stringify(d) : c === "s" && typeof d == "object" ? `${d.constructor !== Object ? d.constructor.name : ""} {}`.trim() : d.toString();
    });
  }, inspect(s) {
    switch (typeof s) {
      case "string":
        if (s.includes("'"))
          if (s.includes('"')) {
            if (!s.includes("`") && !s.includes("${"))
              return `\`${s}\``;
          } else
            return `"${s}"`;
        return `'${s}'`;
      case "number":
        return isNaN(s) ? "NaN" : Object.is(s, -0) ? String(s) : s;
      case "bigint":
        return `${String(s)}n`;
      case "boolean":
      case "undefined":
        return String(s);
      case "object":
        return "{}";
    }
  }, types: { isAsyncFunction(s) {
    return s instanceof l;
  }, isArrayBufferView(s) {
    return ArrayBuffer.isView(s);
  } }, isBlob: o }, i.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
}), Rn = me((e, i) => {
  ae(), se(), oe();
  var { AbortController: t, AbortSignal: l } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
  i.exports = t, i.exports.AbortSignal = l, i.exports.default = t;
}), ot = me((e, i) => {
  ae(), se(), oe();
  var { format: t, inspect: l, AggregateError: h } = kt(), o = globalThis.AggregateError || h, r = Symbol("kIsNodeError"), s = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], n = /^([A-Z][a-z0-9]*)+$/, a = "__node_internal_", c = {};
  function d(k, I) {
    if (!k)
      throw new c.ERR_INTERNAL_ASSERTION(I);
  }
  function g(k) {
    let I = "", D = k.length, F = k[0] === "-" ? 1 : 0;
    for (; D >= F + 4; D -= 3)
      I = `_${k.slice(D - 3, D)}${I}`;
    return `${k.slice(0, D)}${I}`;
  }
  function m(k, I, D) {
    if (typeof I == "function")
      return d(I.length <= D.length, `Code: ${k}; The provided arguments length (${D.length}) does not match the required ones (${I.length}).`), I(...D);
    let F = (I.match(/%[dfijoOs]/g) || []).length;
    return d(F === D.length, `Code: ${k}; The provided arguments length (${D.length}) does not match the required ones (${F}).`), D.length === 0 ? I : t(I, ...D);
  }
  function b(k, I, D) {
    D || (D = Error);
    class F extends D {
      constructor(...C) {
        super(m(k, I, C));
      }
      toString() {
        return `${this.name} [${k}]: ${this.message}`;
      }
    }
    Object.defineProperties(F.prototype, { name: { value: D.name, writable: !0, enumerable: !1, configurable: !0 }, toString: { value() {
      return `${this.name} [${k}]: ${this.message}`;
    }, writable: !0, enumerable: !1, configurable: !0 } }), F.prototype.code = k, F.prototype[r] = !0, c[k] = F;
  }
  function y(k) {
    let I = a + k.name;
    return Object.defineProperty(k, "name", { value: I }), k;
  }
  function T(k, I) {
    if (k && I && k !== I) {
      if (Array.isArray(I.errors))
        return I.errors.push(k), I;
      let D = new o([I, k], I.message);
      return D.code = I.code, D;
    }
    return k || I;
  }
  var U = class extends Error {
    constructor(k = "The operation was aborted", I = void 0) {
      if (I !== void 0 && typeof I != "object")
        throw new c.ERR_INVALID_ARG_TYPE("options", "Object", I);
      super(k, I), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  };
  b("ERR_ASSERTION", "%s", Error), b("ERR_INVALID_ARG_TYPE", (k, I, D) => {
    d(typeof k == "string", "'name' must be a string"), Array.isArray(I) || (I = [I]);
    let F = "The ";
    k.endsWith(" argument") ? F += `${k} ` : F += `"${k}" ${k.includes(".") ? "property" : "argument"} `, F += "must be ";
    let R = [], C = [], x = [];
    for (let G of I)
      d(typeof G == "string", "All expected entries have to be of type string"), s.includes(G) ? R.push(G.toLowerCase()) : n.test(G) ? C.push(G) : (d(G !== "object", 'The value "object" should be written as "Object"'), x.push(G));
    if (C.length > 0) {
      let G = R.indexOf("object");
      G !== -1 && (R.splice(R, G, 1), C.push("Object"));
    }
    if (R.length > 0) {
      switch (R.length) {
        case 1:
          F += `of type ${R[0]}`;
          break;
        case 2:
          F += `one of type ${R[0]} or ${R[1]}`;
          break;
        default: {
          let G = R.pop();
          F += `one of type ${R.join(", ")}, or ${G}`;
        }
      }
      (C.length > 0 || x.length > 0) && (F += " or ");
    }
    if (C.length > 0) {
      switch (C.length) {
        case 1:
          F += `an instance of ${C[0]}`;
          break;
        case 2:
          F += `an instance of ${C[0]} or ${C[1]}`;
          break;
        default: {
          let G = C.pop();
          F += `an instance of ${C.join(", ")}, or ${G}`;
        }
      }
      x.length > 0 && (F += " or ");
    }
    switch (x.length) {
      case 0:
        break;
      case 1:
        x[0].toLowerCase() !== x[0] && (F += "an "), F += `${x[0]}`;
        break;
      case 2:
        F += `one of ${x[0]} or ${x[1]}`;
        break;
      default: {
        let G = x.pop();
        F += `one of ${x.join(", ")}, or ${G}`;
      }
    }
    if (D == null)
      F += `. Received ${D}`;
    else if (typeof D == "function" && D.name)
      F += `. Received function ${D.name}`;
    else if (typeof D == "object") {
      var W;
      if ((W = D.constructor) !== null && W !== void 0 && W.name)
        F += `. Received an instance of ${D.constructor.name}`;
      else {
        let G = l(D, { depth: -1 });
        F += `. Received ${G}`;
      }
    } else {
      let G = l(D, { colors: !1 });
      G.length > 25 && (G = `${G.slice(0, 25)}...`), F += `. Received type ${typeof D} (${G})`;
    }
    return F;
  }, TypeError), b("ERR_INVALID_ARG_VALUE", (k, I, D = "is invalid") => {
    let F = l(I);
    return F.length > 128 && (F = F.slice(0, 128) + "..."), `The ${k.includes(".") ? "property" : "argument"} '${k}' ${D}. Received ${F}`;
  }, TypeError), b("ERR_INVALID_RETURN_VALUE", (k, I, D) => {
    var F;
    let R = D != null && (F = D.constructor) !== null && F !== void 0 && F.name ? `instance of ${D.constructor.name}` : `type ${typeof D}`;
    return `Expected ${k} to be returned from the "${I}" function but got ${R}.`;
  }, TypeError), b("ERR_MISSING_ARGS", (...k) => {
    d(k.length > 0, "At least one arg needs to be specified");
    let I, D = k.length;
    switch (k = (Array.isArray(k) ? k : [k]).map((F) => `"${F}"`).join(" or "), D) {
      case 1:
        I += `The ${k[0]} argument`;
        break;
      case 2:
        I += `The ${k[0]} and ${k[1]} arguments`;
        break;
      default:
        {
          let F = k.pop();
          I += `The ${k.join(", ")}, and ${F} arguments`;
        }
        break;
    }
    return `${I} must be specified`;
  }, TypeError), b("ERR_OUT_OF_RANGE", (k, I, D) => {
    d(I, 'Missing "range" argument');
    let F;
    return Number.isInteger(D) && Math.abs(D) > 2 ** 32 ? F = g(String(D)) : typeof D == "bigint" ? (F = String(D), (D > 2n ** 32n || D < -(2n ** 32n)) && (F = g(F)), F += "n") : F = l(D), `The value of "${k}" is out of range. It must be ${I}. Received ${F}`;
  }, RangeError), b("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), b("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), b("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), b("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), b("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), b("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), b("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), b("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), b("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), b("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), b("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), i.exports = { AbortError: U, aggregateTwoErrors: y(T), hideStackFrames: y, codes: c };
}), Nr = me((e, i) => {
  ae(), se(), oe();
  var { ArrayIsArray: t, ArrayPrototypeIncludes: l, ArrayPrototypeJoin: h, ArrayPrototypeMap: o, NumberIsInteger: r, NumberIsNaN: s, NumberMAX_SAFE_INTEGER: n, NumberMIN_SAFE_INTEGER: a, NumberParseInt: c, ObjectPrototypeHasOwnProperty: d, RegExpPrototypeExec: g, String: m, StringPrototypeToUpperCase: b, StringPrototypeTrim: y } = Ke(), { hideStackFrames: T, codes: { ERR_SOCKET_BAD_PORT: U, ERR_INVALID_ARG_TYPE: k, ERR_INVALID_ARG_VALUE: I, ERR_OUT_OF_RANGE: D, ERR_UNKNOWN_SIGNAL: F } } = ot(), { normalizeEncoding: R } = kt(), { isAsyncFunction: C, isArrayBufferView: x } = kt().types, W = {};
  function G(L) {
    return L === (L | 0);
  }
  function ee(L) {
    return L === L >>> 0;
  }
  var E = /^[0-7]+$/, $ = "must be a 32-bit unsigned integer or an octal string";
  function Z(L, H, we) {
    if (typeof L > "u" && (L = we), typeof L == "string") {
      if (g(E, L) === null)
        throw new I(H, L, $);
      L = c(L, 8);
    }
    return ne(L, H), L;
  }
  var K = T((L, H, we = a, _e = n) => {
    if (typeof L != "number")
      throw new k(H, "number", L);
    if (!r(L))
      throw new D(H, "an integer", L);
    if (L < we || L > _e)
      throw new D(H, `>= ${we} && <= ${_e}`, L);
  }), ge = T((L, H, we = -2147483648, _e = 2147483647) => {
    if (typeof L != "number")
      throw new k(H, "number", L);
    if (!r(L))
      throw new D(H, "an integer", L);
    if (L < we || L > _e)
      throw new D(H, `>= ${we} && <= ${_e}`, L);
  }), ne = T((L, H, we = !1) => {
    if (typeof L != "number")
      throw new k(H, "number", L);
    if (!r(L))
      throw new D(H, "an integer", L);
    let _e = we ? 1 : 0, Ae = 4294967295;
    if (L < _e || L > Ae)
      throw new D(H, `>= ${_e} && <= ${Ae}`, L);
  });
  function q(L, H) {
    if (typeof L != "string")
      throw new k(H, "string", L);
  }
  function be(L, H, we = void 0, _e) {
    if (typeof L != "number")
      throw new k(H, "number", L);
    if (we != null && L < we || _e != null && L > _e || (we != null || _e != null) && s(L))
      throw new D(H, `${we != null ? `>= ${we}` : ""}${we != null && _e != null ? " && " : ""}${_e != null ? `<= ${_e}` : ""}`, L);
  }
  var re = T((L, H, we) => {
    if (!l(we, L)) {
      let _e = "must be one of: " + h(o(we, (Ae) => typeof Ae == "string" ? `'${Ae}'` : m(Ae)), ", ");
      throw new I(H, L, _e);
    }
  });
  function ve(L, H) {
    if (typeof L != "boolean")
      throw new k(H, "boolean", L);
  }
  function S(L, H, we) {
    return L == null || !d(L, H) ? we : L[H];
  }
  var Q = T((L, H, we = null) => {
    let _e = S(we, "allowArray", !1), Ae = S(we, "allowFunction", !1);
    if (!S(we, "nullable", !1) && L === null || !_e && t(L) || typeof L != "object" && (!Ae || typeof L != "function"))
      throw new k(H, "Object", L);
  }), ce = T((L, H) => {
    if (L != null && typeof L != "object" && typeof L != "function")
      throw new k(H, "a dictionary", L);
  }), Ee = T((L, H, we = 0) => {
    if (!t(L))
      throw new k(H, "Array", L);
    if (L.length < we) {
      let _e = `must be longer than ${we}`;
      throw new I(H, L, _e);
    }
  });
  function ue(L, H) {
    Ee(L, H);
    for (let we = 0; we < L.length; we++)
      q(L[we], `${H}[${we}]`);
  }
  function M(L, H) {
    Ee(L, H);
    for (let we = 0; we < L.length; we++)
      ve(L[we], `${H}[${we}]`);
  }
  function _(L, H = "signal") {
    if (q(L, H), W[L] === void 0)
      throw W[b(L)] !== void 0 ? new F(L + " (signals must use all capital letters)") : new F(L);
  }
  var z = T((L, H = "buffer") => {
    if (!x(L))
      throw new k(H, ["Buffer", "TypedArray", "DataView"], L);
  });
  function le(L, H) {
    let we = R(H), _e = L.length;
    if (we === "hex" && _e % 2 !== 0)
      throw new I("encoding", H, `is invalid for data of length ${_e}`);
  }
  function X(L, H = "Port", we = !0) {
    if (typeof L != "number" && typeof L != "string" || typeof L == "string" && y(L).length === 0 || +L !== +L >>> 0 || L > 65535 || L === 0 && !we)
      throw new U(H, L, we);
    return L | 0;
  }
  var J = T((L, H) => {
    if (L !== void 0 && (L === null || typeof L != "object" || !("aborted" in L)))
      throw new k(H, "AbortSignal", L);
  }), he = T((L, H) => {
    if (typeof L != "function")
      throw new k(H, "Function", L);
  }), pe = T((L, H) => {
    if (typeof L != "function" || C(L))
      throw new k(H, "Function", L);
  }), O = T((L, H) => {
    if (L !== void 0)
      throw new k(H, "undefined", L);
  });
  function j(L, H, we) {
    if (!l(we, L))
      throw new k(H, `('${h(we, "|")}')`, L);
  }
  var N = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function te(L, H) {
    if (typeof L > "u" || !g(N, L))
      throw new I(H, L, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  function Y(L) {
    if (typeof L == "string")
      return te(L, "hints"), L;
    if (t(L)) {
      let H = L.length, we = "";
      if (H === 0)
        return we;
      for (let _e = 0; _e < H; _e++) {
        let Ae = L[_e];
        te(Ae, "hints"), we += Ae, _e !== H - 1 && (we += ", ");
      }
      return we;
    }
    throw new I("hints", L, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  i.exports = { isInt32: G, isUint32: ee, parseFileMode: Z, validateArray: Ee, validateStringArray: ue, validateBooleanArray: M, validateBoolean: ve, validateBuffer: z, validateDictionary: ce, validateEncoding: le, validateFunction: he, validateInt32: ge, validateInteger: K, validateNumber: be, validateObject: Q, validateOneOf: re, validatePlainFunction: pe, validatePort: X, validateSignalName: _, validateString: q, validateUint32: ne, validateUndefined: O, validateUnion: j, validateAbortSignal: J, validateLinkHeaderValue: Y };
}), er = me((e, i) => {
  ae(), se(), oe();
  var t = i.exports = {}, l, h;
  function o() {
    throw new Error("setTimeout has not been defined");
  }
  function r() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? l = setTimeout : l = o;
    } catch {
      l = o;
    }
    try {
      typeof clearTimeout == "function" ? h = clearTimeout : h = r;
    } catch {
      h = r;
    }
  })();
  function s(U) {
    if (l === setTimeout)
      return setTimeout(U, 0);
    if ((l === o || !l) && setTimeout)
      return l = setTimeout, setTimeout(U, 0);
    try {
      return l(U, 0);
    } catch {
      try {
        return l.call(null, U, 0);
      } catch {
        return l.call(this, U, 0);
      }
    }
  }
  function n(U) {
    if (h === clearTimeout)
      return clearTimeout(U);
    if ((h === r || !h) && clearTimeout)
      return h = clearTimeout, clearTimeout(U);
    try {
      return h(U);
    } catch {
      try {
        return h.call(null, U);
      } catch {
        return h.call(this, U);
      }
    }
  }
  var a = [], c = !1, d, g = -1;
  function m() {
    !c || !d || (c = !1, d.length ? a = d.concat(a) : g = -1, a.length && b());
  }
  function b() {
    if (!c) {
      var U = s(m);
      c = !0;
      for (var k = a.length; k; ) {
        for (d = a, a = []; ++g < k; )
          d && d[g].run();
        g = -1, k = a.length;
      }
      d = null, c = !1, n(U);
    }
  }
  t.nextTick = function(U) {
    var k = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var I = 1; I < arguments.length; I++)
        k[I - 1] = arguments[I];
    a.push(new y(U, k)), a.length === 1 && !c && s(b);
  };
  function y(U, k) {
    this.fun = U, this.array = k;
  }
  y.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {};
  function T() {
  }
  t.on = T, t.addListener = T, t.once = T, t.off = T, t.removeListener = T, t.removeAllListeners = T, t.emit = T, t.prependListener = T, t.prependOnceListener = T, t.listeners = function(U) {
    return [];
  }, t.binding = function(U) {
    throw new Error("process.binding is not supported");
  }, t.cwd = function() {
    return "/";
  }, t.chdir = function(U) {
    throw new Error("process.chdir is not supported");
  }, t.umask = function() {
    return 0;
  };
}), Rt = me((e, i) => {
  ae(), se(), oe();
  var { Symbol: t, SymbolAsyncIterator: l, SymbolIterator: h, SymbolFor: o } = Ke(), r = t("kDestroyed"), s = t("kIsErrored"), n = t("kIsReadable"), a = t("kIsDisturbed"), c = o("nodejs.webstream.isClosedPromise"), d = o("nodejs.webstream.controllerErrorFunction");
  function g(S, Q = !1) {
    var ce;
    return !!(S && typeof S.pipe == "function" && typeof S.on == "function" && (!Q || typeof S.pause == "function" && typeof S.resume == "function") && (!S._writableState || ((ce = S._readableState) === null || ce === void 0 ? void 0 : ce.readable) !== !1) && (!S._writableState || S._readableState));
  }
  function m(S) {
    var Q;
    return !!(S && typeof S.write == "function" && typeof S.on == "function" && (!S._readableState || ((Q = S._writableState) === null || Q === void 0 ? void 0 : Q.writable) !== !1));
  }
  function b(S) {
    return !!(S && typeof S.pipe == "function" && S._readableState && typeof S.on == "function" && typeof S.write == "function");
  }
  function y(S) {
    return S && (S._readableState || S._writableState || typeof S.write == "function" && typeof S.on == "function" || typeof S.pipe == "function" && typeof S.on == "function");
  }
  function T(S) {
    return !!(S && !y(S) && typeof S.pipeThrough == "function" && typeof S.getReader == "function" && typeof S.cancel == "function");
  }
  function U(S) {
    return !!(S && !y(S) && typeof S.getWriter == "function" && typeof S.abort == "function");
  }
  function k(S) {
    return !!(S && !y(S) && typeof S.readable == "object" && typeof S.writable == "object");
  }
  function I(S) {
    return T(S) || U(S) || k(S);
  }
  function D(S, Q) {
    return S == null ? !1 : Q === !0 ? typeof S[l] == "function" : Q === !1 ? typeof S[h] == "function" : typeof S[l] == "function" || typeof S[h] == "function";
  }
  function F(S) {
    if (!y(S))
      return null;
    let Q = S._writableState, ce = S._readableState, Ee = Q || ce;
    return !!(S.destroyed || S[r] || Ee != null && Ee.destroyed);
  }
  function R(S) {
    if (!m(S))
      return null;
    if (S.writableEnded === !0)
      return !0;
    let Q = S._writableState;
    return Q != null && Q.errored ? !1 : typeof (Q == null ? void 0 : Q.ended) != "boolean" ? null : Q.ended;
  }
  function C(S, Q) {
    if (!m(S))
      return null;
    if (S.writableFinished === !0)
      return !0;
    let ce = S._writableState;
    return ce != null && ce.errored ? !1 : typeof (ce == null ? void 0 : ce.finished) != "boolean" ? null : !!(ce.finished || Q === !1 && ce.ended === !0 && ce.length === 0);
  }
  function x(S) {
    if (!g(S))
      return null;
    if (S.readableEnded === !0)
      return !0;
    let Q = S._readableState;
    return !Q || Q.errored ? !1 : typeof (Q == null ? void 0 : Q.ended) != "boolean" ? null : Q.ended;
  }
  function W(S, Q) {
    if (!g(S))
      return null;
    let ce = S._readableState;
    return ce != null && ce.errored ? !1 : typeof (ce == null ? void 0 : ce.endEmitted) != "boolean" ? null : !!(ce.endEmitted || Q === !1 && ce.ended === !0 && ce.length === 0);
  }
  function G(S) {
    return S && S[n] != null ? S[n] : typeof (S == null ? void 0 : S.readable) != "boolean" ? null : F(S) ? !1 : g(S) && S.readable && !W(S);
  }
  function ee(S) {
    return typeof (S == null ? void 0 : S.writable) != "boolean" ? null : F(S) ? !1 : m(S) && S.writable && !R(S);
  }
  function E(S, Q) {
    return y(S) ? F(S) ? !0 : !((Q == null ? void 0 : Q.readable) !== !1 && G(S) || (Q == null ? void 0 : Q.writable) !== !1 && ee(S)) : null;
  }
  function $(S) {
    var Q, ce;
    return y(S) ? S.writableErrored ? S.writableErrored : (Q = (ce = S._writableState) === null || ce === void 0 ? void 0 : ce.errored) !== null && Q !== void 0 ? Q : null : null;
  }
  function Z(S) {
    var Q, ce;
    return y(S) ? S.readableErrored ? S.readableErrored : (Q = (ce = S._readableState) === null || ce === void 0 ? void 0 : ce.errored) !== null && Q !== void 0 ? Q : null : null;
  }
  function K(S) {
    if (!y(S))
      return null;
    if (typeof S.closed == "boolean")
      return S.closed;
    let Q = S._writableState, ce = S._readableState;
    return typeof (Q == null ? void 0 : Q.closed) == "boolean" || typeof (ce == null ? void 0 : ce.closed) == "boolean" ? (Q == null ? void 0 : Q.closed) || (ce == null ? void 0 : ce.closed) : typeof S._closed == "boolean" && ge(S) ? S._closed : null;
  }
  function ge(S) {
    return typeof S._closed == "boolean" && typeof S._defaultKeepAlive == "boolean" && typeof S._removedConnection == "boolean" && typeof S._removedContLen == "boolean";
  }
  function ne(S) {
    return typeof S._sent100 == "boolean" && ge(S);
  }
  function q(S) {
    var Q;
    return typeof S._consuming == "boolean" && typeof S._dumped == "boolean" && ((Q = S.req) === null || Q === void 0 ? void 0 : Q.upgradeOrConnect) === void 0;
  }
  function be(S) {
    if (!y(S))
      return null;
    let Q = S._writableState, ce = S._readableState, Ee = Q || ce;
    return !Ee && ne(S) || !!(Ee && Ee.autoDestroy && Ee.emitClose && Ee.closed === !1);
  }
  function re(S) {
    var Q;
    return !!(S && ((Q = S[a]) !== null && Q !== void 0 ? Q : S.readableDidRead || S.readableAborted));
  }
  function ve(S) {
    var Q, ce, Ee, ue, M, _, z, le, X, J;
    return !!(S && ((Q = (ce = (Ee = (ue = (M = (_ = S[s]) !== null && _ !== void 0 ? _ : S.readableErrored) !== null && M !== void 0 ? M : S.writableErrored) !== null && ue !== void 0 ? ue : (z = S._readableState) === null || z === void 0 ? void 0 : z.errorEmitted) !== null && Ee !== void 0 ? Ee : (le = S._writableState) === null || le === void 0 ? void 0 : le.errorEmitted) !== null && ce !== void 0 ? ce : (X = S._readableState) === null || X === void 0 ? void 0 : X.errored) !== null && Q !== void 0 ? Q : !((J = S._writableState) === null || J === void 0) && J.errored));
  }
  i.exports = { kDestroyed: r, isDisturbed: re, kIsDisturbed: a, isErrored: ve, kIsErrored: s, isReadable: G, kIsReadable: n, kIsClosedPromise: c, kControllerErrorFunction: d, isClosed: K, isDestroyed: F, isDuplexNodeStream: b, isFinished: E, isIterable: D, isReadableNodeStream: g, isReadableStream: T, isReadableEnded: x, isReadableFinished: W, isReadableErrored: Z, isNodeStream: y, isWebStream: I, isWritable: ee, isWritableNodeStream: m, isWritableStream: U, isWritableEnded: R, isWritableFinished: C, isWritableErrored: $, isServerRequest: q, isServerResponse: ne, willEmitClose: be, isTransformStream: k };
}), jt = me((e, i) => {
  ae(), se(), oe();
  var t = er(), { AbortError: l, codes: h } = ot(), { ERR_INVALID_ARG_TYPE: o, ERR_STREAM_PREMATURE_CLOSE: r } = h, { kEmptyObject: s, once: n } = kt(), { validateAbortSignal: a, validateFunction: c, validateObject: d, validateBoolean: g } = Nr(), { Promise: m, PromisePrototypeThen: b } = Ke(), { isClosed: y, isReadable: T, isReadableNodeStream: U, isReadableStream: k, isReadableFinished: I, isReadableErrored: D, isWritable: F, isWritableNodeStream: R, isWritableStream: C, isWritableFinished: x, isWritableErrored: W, isNodeStream: G, willEmitClose: ee, kIsClosedPromise: E } = Rt();
  function $(q) {
    return q.setHeader && typeof q.abort == "function";
  }
  var Z = () => {
  };
  function K(q, be, re) {
    var ve, S;
    if (arguments.length === 2 ? (re = be, be = s) : be == null ? be = s : d(be, "options"), c(re, "callback"), a(be.signal, "options.signal"), re = n(re), k(q) || C(q))
      return ge(q, be, re);
    if (!G(q))
      throw new o("stream", ["ReadableStream", "WritableStream", "Stream"], q);
    let Q = (ve = be.readable) !== null && ve !== void 0 ? ve : U(q), ce = (S = be.writable) !== null && S !== void 0 ? S : R(q), Ee = q._writableState, ue = q._readableState, M = () => {
      q.writable || le();
    }, _ = ee(q) && U(q) === Q && R(q) === ce, z = x(q, !1), le = () => {
      z = !0, q.destroyed && (_ = !1), !(_ && (!q.readable || Q)) && (!Q || X) && re.call(q);
    }, X = I(q, !1), J = () => {
      X = !0, q.destroyed && (_ = !1), !(_ && (!q.writable || ce)) && (!ce || z) && re.call(q);
    }, he = (Y) => {
      re.call(q, Y);
    }, pe = y(q), O = () => {
      pe = !0;
      let Y = W(q) || D(q);
      if (Y && typeof Y != "boolean")
        return re.call(q, Y);
      if (Q && !X && U(q, !0) && !I(q, !1))
        return re.call(q, new r());
      if (ce && !z && !x(q, !1))
        return re.call(q, new r());
      re.call(q);
    }, j = () => {
      pe = !0;
      let Y = W(q) || D(q);
      if (Y && typeof Y != "boolean")
        return re.call(q, Y);
      re.call(q);
    }, N = () => {
      q.req.on("finish", le);
    };
    $(q) ? (q.on("complete", le), _ || q.on("abort", O), q.req ? N() : q.on("request", N)) : ce && !Ee && (q.on("end", M), q.on("close", M)), !_ && typeof q.aborted == "boolean" && q.on("aborted", O), q.on("end", J), q.on("finish", le), be.error !== !1 && q.on("error", he), q.on("close", O), pe ? t.nextTick(O) : Ee != null && Ee.errorEmitted || ue != null && ue.errorEmitted ? _ || t.nextTick(j) : (!Q && (!_ || T(q)) && (z || F(q) === !1) || !ce && (!_ || F(q)) && (X || T(q) === !1) || ue && q.req && q.aborted) && t.nextTick(j);
    let te = () => {
      re = Z, q.removeListener("aborted", O), q.removeListener("complete", le), q.removeListener("abort", O), q.removeListener("request", N), q.req && q.req.removeListener("finish", le), q.removeListener("end", M), q.removeListener("close", M), q.removeListener("finish", le), q.removeListener("end", J), q.removeListener("error", he), q.removeListener("close", O);
    };
    if (be.signal && !pe) {
      let Y = () => {
        let L = re;
        te(), L.call(q, new l(void 0, { cause: be.signal.reason }));
      };
      if (be.signal.aborted)
        t.nextTick(Y);
      else {
        let L = re;
        re = n((...H) => {
          be.signal.removeEventListener("abort", Y), L.apply(q, H);
        }), be.signal.addEventListener("abort", Y);
      }
    }
    return te;
  }
  function ge(q, be, re) {
    let ve = !1, S = Z;
    if (be.signal)
      if (S = () => {
        ve = !0, re.call(q, new l(void 0, { cause: be.signal.reason }));
      }, be.signal.aborted)
        t.nextTick(S);
      else {
        let ce = re;
        re = n((...Ee) => {
          be.signal.removeEventListener("abort", S), ce.apply(q, Ee);
        }), be.signal.addEventListener("abort", S);
      }
    let Q = (...ce) => {
      ve || t.nextTick(() => re.apply(q, ce));
    };
    return b(q[E].promise, Q, Q), Z;
  }
  function ne(q, be) {
    var re;
    let ve = !1;
    return be === null && (be = s), (re = be) !== null && re !== void 0 && re.cleanup && (g(be.cleanup, "cleanup"), ve = be.cleanup), new m((S, Q) => {
      let ce = K(q, be, (Ee) => {
        ve && ce(), Ee ? Q(Ee) : S();
      });
    });
  }
  i.exports = K, i.exports.finished = ne;
}), sr = me((e, i) => {
  ae(), se(), oe();
  var t = er(), { aggregateTwoErrors: l, codes: { ERR_MULTIPLE_CALLBACK: h }, AbortError: o } = ot(), { Symbol: r } = Ke(), { kDestroyed: s, isDestroyed: n, isFinished: a, isServerRequest: c } = Rt(), d = r("kDestroy"), g = r("kConstruct");
  function m(E, $, Z) {
    E && (E.stack, $ && !$.errored && ($.errored = E), Z && !Z.errored && (Z.errored = E));
  }
  function b(E, $) {
    let Z = this._readableState, K = this._writableState, ge = K || Z;
    return K != null && K.destroyed || Z != null && Z.destroyed ? (typeof $ == "function" && $(), this) : (m(E, K, Z), K && (K.destroyed = !0), Z && (Z.destroyed = !0), ge.constructed ? y(this, E, $) : this.once(d, function(ne) {
      y(this, l(ne, E), $);
    }), this);
  }
  function y(E, $, Z) {
    let K = !1;
    function ge(ne) {
      if (K)
        return;
      K = !0;
      let q = E._readableState, be = E._writableState;
      m(ne, be, q), be && (be.closed = !0), q && (q.closed = !0), typeof Z == "function" && Z(ne), ne ? t.nextTick(T, E, ne) : t.nextTick(U, E);
    }
    try {
      E._destroy($ || null, ge);
    } catch (ne) {
      ge(ne);
    }
  }
  function T(E, $) {
    k(E, $), U(E);
  }
  function U(E) {
    let $ = E._readableState, Z = E._writableState;
    Z && (Z.closeEmitted = !0), $ && ($.closeEmitted = !0), (Z != null && Z.emitClose || $ != null && $.emitClose) && E.emit("close");
  }
  function k(E, $) {
    let Z = E._readableState, K = E._writableState;
    K != null && K.errorEmitted || Z != null && Z.errorEmitted || (K && (K.errorEmitted = !0), Z && (Z.errorEmitted = !0), E.emit("error", $));
  }
  function I() {
    let E = this._readableState, $ = this._writableState;
    E && (E.constructed = !0, E.closed = !1, E.closeEmitted = !1, E.destroyed = !1, E.errored = null, E.errorEmitted = !1, E.reading = !1, E.ended = E.readable === !1, E.endEmitted = E.readable === !1), $ && ($.constructed = !0, $.destroyed = !1, $.closed = !1, $.closeEmitted = !1, $.errored = null, $.errorEmitted = !1, $.finalCalled = !1, $.prefinished = !1, $.ended = $.writable === !1, $.ending = $.writable === !1, $.finished = $.writable === !1);
  }
  function D(E, $, Z) {
    let K = E._readableState, ge = E._writableState;
    if (ge != null && ge.destroyed || K != null && K.destroyed)
      return this;
    K != null && K.autoDestroy || ge != null && ge.autoDestroy ? E.destroy($) : $ && ($.stack, ge && !ge.errored && (ge.errored = $), K && !K.errored && (K.errored = $), Z ? t.nextTick(k, E, $) : k(E, $));
  }
  function F(E, $) {
    if (typeof E._construct != "function")
      return;
    let Z = E._readableState, K = E._writableState;
    Z && (Z.constructed = !1), K && (K.constructed = !1), E.once(g, $), !(E.listenerCount(g) > 1) && t.nextTick(R, E);
  }
  function R(E) {
    let $ = !1;
    function Z(K) {
      if ($) {
        D(E, K ?? new h());
        return;
      }
      $ = !0;
      let ge = E._readableState, ne = E._writableState, q = ne || ge;
      ge && (ge.constructed = !0), ne && (ne.constructed = !0), q.destroyed ? E.emit(d, K) : K ? D(E, K, !0) : t.nextTick(C, E);
    }
    try {
      E._construct((K) => {
        t.nextTick(Z, K);
      });
    } catch (K) {
      t.nextTick(Z, K);
    }
  }
  function C(E) {
    E.emit(g);
  }
  function x(E) {
    return (E == null ? void 0 : E.setHeader) && typeof E.abort == "function";
  }
  function W(E) {
    E.emit("close");
  }
  function G(E, $) {
    E.emit("error", $), t.nextTick(W, E);
  }
  function ee(E, $) {
    !E || n(E) || (!$ && !a(E) && ($ = new o()), c(E) ? (E.socket = null, E.destroy($)) : x(E) ? E.abort() : x(E.req) ? E.req.abort() : typeof E.destroy == "function" ? E.destroy($) : typeof E.close == "function" ? E.close() : $ ? t.nextTick(G, E, $) : t.nextTick(W, E), E.destroyed || (E[s] = !0));
  }
  i.exports = { construct: F, destroyer: ee, destroy: b, undestroy: I, errorOrDestroy: D };
});
function Be() {
  Be.init.call(this);
}
function Ir(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function $o(e) {
  return e._maxListeners === void 0 ? Be.defaultMaxListeners : e._maxListeners;
}
function Wn(e, i, t, l) {
  var h, o, r, s;
  if (Ir(t), (o = e._events) === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", i, t.listener ? t.listener : t), o = e._events), r = o[i]), r === void 0)
    r = o[i] = t, ++e._eventsCount;
  else if (typeof r == "function" ? r = o[i] = l ? [t, r] : [r, t] : l ? r.unshift(t) : r.push(t), (h = $o(e)) > 0 && r.length > h && !r.warned) {
    r.warned = !0;
    var n = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + String(i) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    n.name = "MaxListenersExceededWarning", n.emitter = e, n.type = i, n.count = r.length, s = n, console && console.warn && console.warn(s);
  }
  return e;
}
function Pa() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function qn(e, i, t) {
  var l = { fired: !1, wrapFn: void 0, target: e, type: i, listener: t }, h = Pa.bind(l);
  return h.listener = t, l.wrapFn = h, h;
}
function $n(e, i, t) {
  var l = e._events;
  if (l === void 0)
    return [];
  var h = l[i];
  return h === void 0 ? [] : typeof h == "function" ? t ? [h.listener || h] : [h] : t ? function(o) {
    for (var r = new Array(o.length), s = 0; s < r.length; ++s)
      r[s] = o[s].listener || o[s];
    return r;
  }(h) : Vo(h, h.length);
}
function Vn(e) {
  var i = this._events;
  if (i !== void 0) {
    var t = i[e];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
function Vo(e, i) {
  for (var t = new Array(i), l = 0; l < i; ++l)
    t[l] = e[l];
  return t;
}
var Hn, zn, Ft, Hr, zr, Kr, lt, Kn = Ge(() => {
  ae(), se(), oe(), Ft = typeof Reflect == "object" ? Reflect : null, Hr = Ft && typeof Ft.apply == "function" ? Ft.apply : function(e, i, t) {
    return Function.prototype.apply.call(e, i, t);
  }, zn = Ft && typeof Ft.ownKeys == "function" ? Ft.ownKeys : Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : function(e) {
    return Object.getOwnPropertyNames(e);
  }, zr = Number.isNaN || function(e) {
    return e != e;
  }, Hn = Be, Be.EventEmitter = Be, Be.prototype._events = void 0, Be.prototype._eventsCount = 0, Be.prototype._maxListeners = void 0, Kr = 10, Object.defineProperty(Be, "defaultMaxListeners", { enumerable: !0, get: function() {
    return Kr;
  }, set: function(e) {
    if (typeof e != "number" || e < 0 || zr(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Kr = e;
  } }), Be.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, Be.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || zr(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  }, Be.prototype.getMaxListeners = function() {
    return $o(this);
  }, Be.prototype.emit = function(e) {
    for (var i = [], t = 1; t < arguments.length; t++)
      i.push(arguments[t]);
    var l = e === "error", h = this._events;
    if (h !== void 0)
      l = l && h.error === void 0;
    else if (!l)
      return !1;
    if (l) {
      var o;
      if (i.length > 0 && (o = i[0]), o instanceof Error)
        throw o;
      var r = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      throw r.context = o, r;
    }
    var s = h[e];
    if (s === void 0)
      return !1;
    if (typeof s == "function")
      Hr(s, this, i);
    else {
      var n = s.length, a = Vo(s, n);
      for (t = 0; t < n; ++t)
        Hr(a[t], this, i);
    }
    return !0;
  }, Be.prototype.addListener = function(e, i) {
    return Wn(this, e, i, !1);
  }, Be.prototype.on = Be.prototype.addListener, Be.prototype.prependListener = function(e, i) {
    return Wn(this, e, i, !0);
  }, Be.prototype.once = function(e, i) {
    return Ir(i), this.on(e, qn(this, e, i)), this;
  }, Be.prototype.prependOnceListener = function(e, i) {
    return Ir(i), this.prependListener(e, qn(this, e, i)), this;
  }, Be.prototype.removeListener = function(e, i) {
    var t, l, h, o, r;
    if (Ir(i), (l = this._events) === void 0)
      return this;
    if ((t = l[e]) === void 0)
      return this;
    if (t === i || t.listener === i)
      --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete l[e], l.removeListener && this.emit("removeListener", e, t.listener || i));
    else if (typeof t != "function") {
      for (h = -1, o = t.length - 1; o >= 0; o--)
        if (t[o] === i || t[o].listener === i) {
          r = t[o].listener, h = o;
          break;
        }
      if (h < 0)
        return this;
      h === 0 ? t.shift() : function(s, n) {
        for (; n + 1 < s.length; n++)
          s[n] = s[n + 1];
        s.pop();
      }(t, h), t.length === 1 && (l[e] = t[0]), l.removeListener !== void 0 && this.emit("removeListener", e, r || i);
    }
    return this;
  }, Be.prototype.off = Be.prototype.removeListener, Be.prototype.removeAllListeners = function(e) {
    var i, t, l;
    if ((t = this._events) === void 0)
      return this;
    if (t.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : t[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete t[e]), this;
    if (arguments.length === 0) {
      var h, o = Object.keys(t);
      for (l = 0; l < o.length; ++l)
        (h = o[l]) !== "removeListener" && this.removeAllListeners(h);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (i = t[e]) == "function")
      this.removeListener(e, i);
    else if (i !== void 0)
      for (l = i.length - 1; l >= 0; l--)
        this.removeListener(e, i[l]);
    return this;
  }, Be.prototype.listeners = function(e) {
    return $n(this, e, !0);
  }, Be.prototype.rawListeners = function(e) {
    return $n(this, e, !1);
  }, Be.listenerCount = function(e, i) {
    return typeof e.listenerCount == "function" ? e.listenerCount(i) : Vn.call(e, i);
  }, Be.prototype.listenerCount = Vn, Be.prototype.eventNames = function() {
    return this._eventsCount > 0 ? zn(this._events) : [];
  }, lt = Hn, lt.EventEmitter, lt.defaultMaxListeners, lt.init, lt.listenerCount, lt.EventEmitter, lt.defaultMaxListeners, lt.init, lt.listenerCount;
}), tr = {};
Zt(tr, { EventEmitter: () => Ho, default: () => lt, defaultMaxListeners: () => zo, init: () => Ko, listenerCount: () => Qo, on: () => Yo, once: () => Go });
var Ho, zo, Ko, Qo, Yo, Go, ar = Ge(() => {
  ae(), se(), oe(), Kn(), Kn(), lt.once = function(e, i) {
    return new Promise((t, l) => {
      function h(...r) {
        o !== void 0 && e.removeListener("error", o), t(r);
      }
      let o;
      i !== "error" && (o = (r) => {
        e.removeListener(name, h), l(r);
      }, e.once("error", o)), e.once(i, h);
    });
  }, lt.on = function(e, i) {
    let t = [], l = [], h = null, o = !1, r = { async next() {
      let a = t.shift();
      if (a)
        return createIterResult(a, !1);
      if (h) {
        let c = Promise.reject(h);
        return h = null, c;
      }
      return o ? createIterResult(void 0, !0) : new Promise((c, d) => l.push({ resolve: c, reject: d }));
    }, async return() {
      e.removeListener(i, s), e.removeListener("error", n), o = !0;
      for (let a of l)
        a.resolve(createIterResult(void 0, !0));
      return createIterResult(void 0, !0);
    }, throw(a) {
      h = a, e.removeListener(i, s), e.removeListener("error", n);
    }, [Symbol.asyncIterator]() {
      return this;
    } };
    return e.on(i, s), e.on("error", n), r;
    function s(...a) {
      let c = l.shift();
      c ? c.resolve(createIterResult(a, !1)) : t.push(a);
    }
    function n(a) {
      o = !0;
      let c = l.shift();
      c ? c.reject(a) : h = a, r.return();
    }
  }, { EventEmitter: Ho, defaultMaxListeners: zo, init: Ko, listenerCount: Qo, on: Yo, once: Go } = lt;
}), Pn = me((e, i) => {
  ae(), se(), oe();
  var { ArrayIsArray: t, ObjectSetPrototypeOf: l } = Ke(), { EventEmitter: h } = (ar(), xe(tr));
  function o(s) {
    h.call(this, s);
  }
  l(o.prototype, h.prototype), l(o, h), o.prototype.pipe = function(s, n) {
    let a = this;
    function c(U) {
      s.writable && s.write(U) === !1 && a.pause && a.pause();
    }
    a.on("data", c);
    function d() {
      a.readable && a.resume && a.resume();
    }
    s.on("drain", d), !s._isStdio && (!n || n.end !== !1) && (a.on("end", m), a.on("close", b));
    let g = !1;
    function m() {
      g || (g = !0, s.end());
    }
    function b() {
      g || (g = !0, typeof s.destroy == "function" && s.destroy());
    }
    function y(U) {
      T(), h.listenerCount(this, "error") === 0 && this.emit("error", U);
    }
    r(a, "error", y), r(s, "error", y);
    function T() {
      a.removeListener("data", c), s.removeListener("drain", d), a.removeListener("end", m), a.removeListener("close", b), a.removeListener("error", y), s.removeListener("error", y), a.removeListener("end", T), a.removeListener("close", T), s.removeListener("close", T);
    }
    return a.on("end", T), a.on("close", T), s.on("close", T), s.emit("pipe", a), s;
  };
  function r(s, n, a) {
    if (typeof s.prependListener == "function")
      return s.prependListener(n, a);
    !s._events || !s._events[n] ? s.on(n, a) : t(s._events[n]) ? s._events[n].unshift(a) : s._events[n] = [a, s._events[n]];
  }
  i.exports = { Stream: o, prependListener: r };
}), jr = me((e, i) => {
  ae(), se(), oe();
  var { AbortError: t, codes: l } = ot(), { isNodeStream: h, isWebStream: o, kControllerErrorFunction: r } = Rt(), s = jt(), { ERR_INVALID_ARG_TYPE: n } = l, a = (c, d) => {
    if (typeof c != "object" || !("aborted" in c))
      throw new n(d, "AbortSignal", c);
  };
  i.exports.addAbortSignal = function(c, d) {
    if (a(c, "signal"), !h(d) && !o(d))
      throw new n("stream", ["ReadableStream", "WritableStream", "Stream"], d);
    return i.exports.addAbortSignalNoValidate(c, d);
  }, i.exports.addAbortSignalNoValidate = function(c, d) {
    if (typeof c != "object" || !("aborted" in c))
      return d;
    let g = h(d) ? () => {
      d.destroy(new t(void 0, { cause: c.reason }));
    } : () => {
      d[r](new t(void 0, { cause: c.reason }));
    };
    return c.aborted ? g() : (c.addEventListener("abort", g), s(d, () => c.removeEventListener("abort", g))), d;
  };
}), Ba = me((e, i) => {
  ae(), se(), oe();
  var { StringPrototypeSlice: t, SymbolIterator: l, TypedArrayPrototypeSet: h, Uint8Array: o } = Ke(), { Buffer: r } = (Xe(), xe(Je)), { inspect: s } = kt();
  i.exports = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(n) {
      let a = { data: n, next: null };
      this.length > 0 ? this.tail.next = a : this.head = a, this.tail = a, ++this.length;
    }
    unshift(n) {
      let a = { data: n, next: this.head };
      this.length === 0 && (this.tail = a), this.head = a, ++this.length;
    }
    shift() {
      if (this.length === 0)
        return;
      let n = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, n;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(n) {
      if (this.length === 0)
        return "";
      let a = this.head, c = "" + a.data;
      for (; (a = a.next) !== null; )
        c += n + a.data;
      return c;
    }
    concat(n) {
      if (this.length === 0)
        return r.alloc(0);
      let a = r.allocUnsafe(n >>> 0), c = this.head, d = 0;
      for (; c; )
        h(a, c.data, d), d += c.data.length, c = c.next;
      return a;
    }
    consume(n, a) {
      let c = this.head.data;
      if (n < c.length) {
        let d = c.slice(0, n);
        return this.head.data = c.slice(n), d;
      }
      return n === c.length ? this.shift() : a ? this._getString(n) : this._getBuffer(n);
    }
    first() {
      return this.head.data;
    }
    *[l]() {
      for (let n = this.head; n; n = n.next)
        yield n.data;
    }
    _getString(n) {
      let a = "", c = this.head, d = 0;
      do {
        let g = c.data;
        if (n > g.length)
          a += g, n -= g.length;
        else {
          n === g.length ? (a += g, ++d, c.next ? this.head = c.next : this.head = this.tail = null) : (a += t(g, 0, n), this.head = c, c.data = t(g, n));
          break;
        }
        ++d;
      } while ((c = c.next) !== null);
      return this.length -= d, a;
    }
    _getBuffer(n) {
      let a = r.allocUnsafe(n), c = n, d = this.head, g = 0;
      do {
        let m = d.data;
        if (n > m.length)
          h(a, m, c - n), n -= m.length;
        else {
          n === m.length ? (h(a, m, c - n), ++g, d.next ? this.head = d.next : this.head = this.tail = null) : (h(a, new o(m.buffer, m.byteOffset, n), c - n), this.head = d, d.data = m.slice(n));
          break;
        }
        ++g;
      } while ((d = d.next) !== null);
      return this.length -= g, a;
    }
    [Symbol.for("nodejs.util.inspect.custom")](n, a) {
      return s(this, { ...a, depth: 0, customInspect: !1 });
    }
  };
}), Bn = me((e, i) => {
  ae(), se(), oe();
  var { MathFloor: t, NumberIsInteger: l } = Ke(), { ERR_INVALID_ARG_VALUE: h } = ot().codes;
  function o(n, a, c) {
    return n.highWaterMark != null ? n.highWaterMark : a ? n[c] : null;
  }
  function r(n) {
    return n ? 16 : 16 * 1024;
  }
  function s(n, a, c, d) {
    let g = o(a, d, c);
    if (g != null) {
      if (!l(g) || g < 0) {
        let m = d ? `options.${c}` : "options.highWaterMark";
        throw new h(m, g);
      }
      return t(g);
    }
    return r(n.objectMode);
  }
  i.exports = { getHighWaterMark: s, getDefaultHighWaterMark: r };
});
function Qn(e) {
  var i = e.length;
  if (i % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  return t === -1 && (t = i), [t, t === i ? 0 : 4 - t % 4];
}
function Ma(e, i, t) {
  for (var l, h, o = [], r = i; r < t; r += 3)
    l = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]), o.push(dt[(h = l) >> 18 & 63] + dt[h >> 12 & 63] + dt[h >> 6 & 63] + dt[63 & h]);
  return o.join("");
}
function Tt(e) {
  if (e > 2147483647)
    throw new RangeError('The value "' + e + '" is invalid for option "size"');
  var i = new Uint8Array(e);
  return Object.setPrototypeOf(i, de.prototype), i;
}
function de(e, i, t) {
  if (typeof e == "number") {
    if (typeof i == "string")
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return cn(e);
  }
  return Jo(e, i, t);
}
function Jo(e, i, t) {
  if (typeof e == "string")
    return function(o, r) {
      if (typeof r == "string" && r !== "" || (r = "utf8"), !de.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      var s = 0 | Zo(o, r), n = Tt(s), a = n.write(o, r);
      return a !== s && (n = n.slice(0, a)), n;
    }(e, i);
  if (ArrayBuffer.isView(e))
    return Qr(e);
  if (e == null)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
  if (It(e, ArrayBuffer) || e && It(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (It(e, SharedArrayBuffer) || e && It(e.buffer, SharedArrayBuffer)))
    return xa(e, i, t);
  if (typeof e == "number")
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var l = e.valueOf && e.valueOf();
  if (l != null && l !== e)
    return de.from(l, i, t);
  var h = function(o) {
    if (de.isBuffer(o)) {
      var r = 0 | Mn(o.length), s = Tt(r);
      return s.length === 0 || o.copy(s, 0, 0, r), s;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || xn(o.length) ? Tt(0) : Qr(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return Qr(o.data);
  }(e);
  if (h)
    return h;
  if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
    return de.from(e[Symbol.toPrimitive]("string"), i, t);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
}
function Xo(e) {
  if (typeof e != "number")
    throw new TypeError('"size" argument must be of type number');
  if (e < 0)
    throw new RangeError('The value "' + e + '" is invalid for option "size"');
}
function cn(e) {
  return Xo(e), Tt(e < 0 ? 0 : 0 | Mn(e));
}
function Qr(e) {
  for (var i = e.length < 0 ? 0 : 0 | Mn(e.length), t = Tt(i), l = 0; l < i; l += 1)
    t[l] = 255 & e[l];
  return t;
}
function xa(e, i, t) {
  if (i < 0 || e.byteLength < i)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (e.byteLength < i + (t || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var l;
  return l = i === void 0 && t === void 0 ? new Uint8Array(e) : t === void 0 ? new Uint8Array(e, i) : new Uint8Array(e, i, t), Object.setPrototypeOf(l, de.prototype), l;
}
function Mn(e) {
  if (e >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
  return 0 | e;
}
function Zo(e, i) {
  if (de.isBuffer(e))
    return e.length;
  if (ArrayBuffer.isView(e) || It(e, ArrayBuffer))
    return e.byteLength;
  if (typeof e != "string")
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
  var t = e.length, l = arguments.length > 2 && arguments[2] === !0;
  if (!l && t === 0)
    return 0;
  for (var h = !1; ; )
    switch (i) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
        return fn(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * t;
      case "hex":
        return t >>> 1;
      case "base64":
        return is(e).length;
      default:
        if (h)
          return l ? -1 : fn(e).length;
        i = ("" + i).toLowerCase(), h = !0;
    }
}
function Ua(e, i, t) {
  var l = !1;
  if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0) <= (i >>>= 0))
    return "";
  for (e || (e = "utf8"); ; )
    switch (e) {
      case "hex":
        return Va(this, i, t);
      case "utf8":
      case "utf-8":
        return ts(this, i, t);
      case "ascii":
        return qa(this, i, t);
      case "latin1":
      case "binary":
        return $a(this, i, t);
      case "base64":
        return Wa(this, i, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Ha(this, i, t);
      default:
        if (l)
          throw new TypeError("Unknown encoding: " + e);
        e = (e + "").toLowerCase(), l = !0;
    }
}
function Wt(e, i, t) {
  var l = e[i];
  e[i] = e[t], e[t] = l;
}
function Yn(e, i, t, l, h) {
  if (e.length === 0)
    return -1;
  if (typeof t == "string" ? (l = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), xn(t = +t) && (t = h ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
    if (h)
      return -1;
    t = e.length - 1;
  } else if (t < 0) {
    if (!h)
      return -1;
    t = 0;
  }
  if (typeof i == "string" && (i = de.from(i, l)), de.isBuffer(i))
    return i.length === 0 ? -1 : Gn(e, i, t, l, h);
  if (typeof i == "number")
    return i &= 255, typeof Uint8Array.prototype.indexOf == "function" ? h ? Uint8Array.prototype.indexOf.call(e, i, t) : Uint8Array.prototype.lastIndexOf.call(e, i, t) : Gn(e, [i], t, l, h);
  throw new TypeError("val must be string, number or Buffer");
}
function Gn(e, i, t, l, h) {
  var o, r = 1, s = e.length, n = i.length;
  if (l !== void 0 && ((l = String(l).toLowerCase()) === "ucs2" || l === "ucs-2" || l === "utf16le" || l === "utf-16le")) {
    if (e.length < 2 || i.length < 2)
      return -1;
    r = 2, s /= 2, n /= 2, t /= 2;
  }
  function a(m, b) {
    return r === 1 ? m[b] : m.readUInt16BE(b * r);
  }
  if (h) {
    var c = -1;
    for (o = t; o < s; o++)
      if (a(e, o) === a(i, c === -1 ? 0 : o - c)) {
        if (c === -1 && (c = o), o - c + 1 === n)
          return c * r;
      } else
        c !== -1 && (o -= o - c), c = -1;
  } else
    for (t + n > s && (t = s - n), o = t; o >= 0; o--) {
      for (var d = !0, g = 0; g < n; g++)
        if (a(e, o + g) !== a(i, g)) {
          d = !1;
          break;
        }
      if (d)
        return o;
    }
  return -1;
}
function La(e, i, t, l) {
  t = Number(t) || 0;
  var h = e.length - t;
  l ? (l = Number(l)) > h && (l = h) : l = h;
  var o = i.length;
  l > o / 2 && (l = o / 2);
  for (var r = 0; r < l; ++r) {
    var s = parseInt(i.substr(2 * r, 2), 16);
    if (xn(s))
      return r;
    e[t + r] = s;
  }
  return r;
}
function Na(e, i, t, l) {
  return Dr(fn(i, e.length - t), e, t, l);
}
function es(e, i, t, l) {
  return Dr(function(h) {
    for (var o = [], r = 0; r < h.length; ++r)
      o.push(255 & h.charCodeAt(r));
    return o;
  }(i), e, t, l);
}
function ja(e, i, t, l) {
  return es(e, i, t, l);
}
function Da(e, i, t, l) {
  return Dr(is(i), e, t, l);
}
function Fa(e, i, t, l) {
  return Dr(function(h, o) {
    for (var r, s, n, a = [], c = 0; c < h.length && !((o -= 2) < 0); ++c)
      r = h.charCodeAt(c), s = r >> 8, n = r % 256, a.push(n), a.push(s);
    return a;
  }(i, e.length - t), e, t, l);
}
function Wa(e, i, t) {
  return i === 0 && t === e.length ? Mr.fromByteArray(e) : Mr.fromByteArray(e.slice(i, t));
}
function ts(e, i, t) {
  t = Math.min(e.length, t);
  for (var l = [], h = i; h < t; ) {
    var o, r, s, n, a = e[h], c = null, d = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
    if (h + d <= t)
      switch (d) {
        case 1:
          a < 128 && (c = a);
          break;
        case 2:
          (192 & (o = e[h + 1])) == 128 && (n = (31 & a) << 6 | 63 & o) > 127 && (c = n);
          break;
        case 3:
          o = e[h + 1], r = e[h + 2], (192 & o) == 128 && (192 & r) == 128 && (n = (15 & a) << 12 | (63 & o) << 6 | 63 & r) > 2047 && (n < 55296 || n > 57343) && (c = n);
          break;
        case 4:
          o = e[h + 1], r = e[h + 2], s = e[h + 3], (192 & o) == 128 && (192 & r) == 128 && (192 & s) == 128 && (n = (15 & a) << 18 | (63 & o) << 12 | (63 & r) << 6 | 63 & s) > 65535 && n < 1114112 && (c = n);
      }
    c === null ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, l.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), l.push(c), h += d;
  }
  return function(g) {
    var m = g.length;
    if (m <= 4096)
      return String.fromCharCode.apply(String, g);
    for (var b = "", y = 0; y < m; )
      b += String.fromCharCode.apply(String, g.slice(y, y += 4096));
    return b;
  }(l);
}
function qa(e, i, t) {
  var l = "";
  t = Math.min(e.length, t);
  for (var h = i; h < t; ++h)
    l += String.fromCharCode(127 & e[h]);
  return l;
}
function $a(e, i, t) {
  var l = "";
  t = Math.min(e.length, t);
  for (var h = i; h < t; ++h)
    l += String.fromCharCode(e[h]);
  return l;
}
function Va(e, i, t) {
  var l = e.length;
  (!i || i < 0) && (i = 0), (!t || t < 0 || t > l) && (t = l);
  for (var h = "", o = i; o < t; ++o)
    h += os[e[o]];
  return h;
}
function Ha(e, i, t) {
  for (var l = e.slice(i, t), h = "", o = 0; o < l.length; o += 2)
    h += String.fromCharCode(l[o] + 256 * l[o + 1]);
  return h;
}
function Qe(e, i, t) {
  if (e % 1 != 0 || e < 0)
    throw new RangeError("offset is not uint");
  if (e + i > t)
    throw new RangeError("Trying to access beyond buffer length");
}
function nt(e, i, t, l, h, o) {
  if (!de.isBuffer(e))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (i > h || i < o)
    throw new RangeError('"value" argument is out of bounds');
  if (t + l > e.length)
    throw new RangeError("Index out of range");
}
function rs(e, i, t, l, h, o) {
  if (t + l > e.length)
    throw new RangeError("Index out of range");
  if (t < 0)
    throw new RangeError("Index out of range");
}
function Jn(e, i, t, l, h) {
  return i = +i, t >>>= 0, h || rs(e, 0, t, 4), Kt.write(e, i, t, l, 23, 4), t + 4;
}
function Xn(e, i, t, l, h) {
  return i = +i, t >>>= 0, h || rs(e, 0, t, 8), Kt.write(e, i, t, l, 52, 8), t + 8;
}
function fn(e, i) {
  var t;
  i = i || 1 / 0;
  for (var l = e.length, h = null, o = [], r = 0; r < l; ++r) {
    if ((t = e.charCodeAt(r)) > 55295 && t < 57344) {
      if (!h) {
        if (t > 56319) {
          (i -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        if (r + 1 === l) {
          (i -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        h = t;
        continue;
      }
      if (t < 56320) {
        (i -= 3) > -1 && o.push(239, 191, 189), h = t;
        continue;
      }
      t = 65536 + (h - 55296 << 10 | t - 56320);
    } else
      h && (i -= 3) > -1 && o.push(239, 191, 189);
    if (h = null, t < 128) {
      if ((i -= 1) < 0)
        break;
      o.push(t);
    } else if (t < 2048) {
      if ((i -= 2) < 0)
        break;
      o.push(t >> 6 | 192, 63 & t | 128);
    } else if (t < 65536) {
      if ((i -= 3) < 0)
        break;
      o.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128);
    } else {
      if (!(t < 1114112))
        throw new Error("Invalid code point");
      if ((i -= 4) < 0)
        break;
      o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128);
    }
  }
  return o;
}
function is(e) {
  return Mr.toByteArray(function(i) {
    if ((i = (i = i.split("=")[0]).trim().replace(ns, "")).length < 2)
      return "";
    for (; i.length % 4 != 0; )
      i += "=";
    return i;
  }(e));
}
function Dr(e, i, t, l) {
  for (var h = 0; h < l && !(h + t >= i.length || h >= e.length); ++h)
    i[h + t] = e[h];
  return h;
}
function It(e, i) {
  return e instanceof i || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === i.name;
}
function xn(e) {
  return e != e;
}
function Zn(e, i) {
  for (var t in e)
    i[t] = e[t];
}
function qt(e, i, t) {
  return ft(e, i, t);
}
function lr(e) {
  var i;
  switch (this.encoding = function(t) {
    var l = function(h) {
      if (!h)
        return "utf8";
      for (var o; ; )
        switch (h) {
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
            return h;
          default:
            if (o)
              return;
            h = ("" + h).toLowerCase(), o = !0;
        }
    }(t);
    if (typeof l != "string" && (xr.isEncoding === pn || !pn(t)))
      throw new Error("Unknown encoding: " + t);
    return l || t;
  }(e), this.encoding) {
    case "utf16le":
      this.text = Ka, this.end = Qa, i = 4;
      break;
    case "utf8":
      this.fillLast = za, i = 4;
      break;
    case "base64":
      this.text = Ya, this.end = Ga, i = 3;
      break;
    default:
      return this.write = Ja, this.end = Xa, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = xr.allocUnsafe(i);
}
function Yr(e) {
  return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
}
function za(e) {
  var i = this.lastTotal - this.lastNeed, t = function(l, h, o) {
    if ((192 & h[0]) != 128)
      return l.lastNeed = 0, "�";
    if (l.lastNeed > 1 && h.length > 1) {
      if ((192 & h[1]) != 128)
        return l.lastNeed = 1, "�";
      if (l.lastNeed > 2 && h.length > 2 && (192 & h[2]) != 128)
        return l.lastNeed = 2, "�";
    }
  }(this, e);
  return t !== void 0 ? t : this.lastNeed <= e.length ? (e.copy(this.lastChar, i, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, i, 0, e.length), this.lastNeed -= e.length, void 0);
}
function Ka(e, i) {
  if ((e.length - i) % 2 == 0) {
    var t = e.toString("utf16le", i);
    if (t) {
      var l = t.charCodeAt(t.length - 1);
      if (l >= 55296 && l <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], t.slice(0, -1);
    }
    return t;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", i, e.length - 1);
}
function Qa(e) {
  var i = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var t = this.lastTotal - this.lastNeed;
    return i + this.lastChar.toString("utf16le", 0, t);
  }
  return i;
}
function Ya(e, i) {
  var t = (e.length - i) % 3;
  return t === 0 ? e.toString("base64", i) : (this.lastNeed = 3 - t, this.lastTotal = 3, t === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", i, e.length - t));
}
function Ga(e) {
  var i = e && e.length ? this.write(e) : "";
  return this.lastNeed ? i + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : i;
}
function Ja(e) {
  return e.toString(this.encoding);
}
function Xa(e) {
  return e && e.length ? this.write(e) : "";
}
var eo, dt, st, to, wr, $t, ro, io, gt, Mr, Kt, Gr, ns, os, ur, hr, ft, no, or, xr, pn, oo = Ge(() => {
  for (ae(), se(), oe(), eo = { byteLength: function(e) {
    var i = Qn(e), t = i[0], l = i[1];
    return 3 * (t + l) / 4 - l;
  }, toByteArray: function(e) {
    var i, t, l = Qn(e), h = l[0], o = l[1], r = new to(function(a, c, d) {
      return 3 * (c + d) / 4 - d;
    }(0, h, o)), s = 0, n = o > 0 ? h - 4 : h;
    for (t = 0; t < n; t += 4)
      i = st[e.charCodeAt(t)] << 18 | st[e.charCodeAt(t + 1)] << 12 | st[e.charCodeAt(t + 2)] << 6 | st[e.charCodeAt(t + 3)], r[s++] = i >> 16 & 255, r[s++] = i >> 8 & 255, r[s++] = 255 & i;
    return o === 2 && (i = st[e.charCodeAt(t)] << 2 | st[e.charCodeAt(t + 1)] >> 4, r[s++] = 255 & i), o === 1 && (i = st[e.charCodeAt(t)] << 10 | st[e.charCodeAt(t + 1)] << 4 | st[e.charCodeAt(t + 2)] >> 2, r[s++] = i >> 8 & 255, r[s++] = 255 & i), r;
  }, fromByteArray: function(e) {
    for (var i, t = e.length, l = t % 3, h = [], o = 0, r = t - l; o < r; o += 16383)
      h.push(Ma(e, o, o + 16383 > r ? r : o + 16383));
    return l === 1 ? (i = e[t - 1], h.push(dt[i >> 2] + dt[i << 4 & 63] + "==")) : l === 2 && (i = (e[t - 2] << 8) + e[t - 1], h.push(dt[i >> 10] + dt[i >> 4 & 63] + dt[i << 2 & 63] + "=")), h.join("");
  } }, dt = [], st = [], to = typeof Uint8Array < "u" ? Uint8Array : Array, wr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $t = 0, ro = wr.length; $t < ro; ++$t)
    dt[$t] = wr[$t], st[wr.charCodeAt($t)] = $t;
  st[45] = 62, st[95] = 63, io = { read: function(e, i, t, l, h) {
    var o, r, s = 8 * h - l - 1, n = (1 << s) - 1, a = n >> 1, c = -7, d = t ? h - 1 : 0, g = t ? -1 : 1, m = e[i + d];
    for (d += g, o = m & (1 << -c) - 1, m >>= -c, c += s; c > 0; o = 256 * o + e[i + d], d += g, c -= 8)
      ;
    for (r = o & (1 << -c) - 1, o >>= -c, c += l; c > 0; r = 256 * r + e[i + d], d += g, c -= 8)
      ;
    if (o === 0)
      o = 1 - a;
    else {
      if (o === n)
        return r ? NaN : 1 / 0 * (m ? -1 : 1);
      r += Math.pow(2, l), o -= a;
    }
    return (m ? -1 : 1) * r * Math.pow(2, o - l);
  }, write: function(e, i, t, l, h, o) {
    var r, s, n, a = 8 * o - h - 1, c = (1 << a) - 1, d = c >> 1, g = h === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = l ? 0 : o - 1, b = l ? 1 : -1, y = i < 0 || i === 0 && 1 / i < 0 ? 1 : 0;
    for (i = Math.abs(i), isNaN(i) || i === 1 / 0 ? (s = isNaN(i) ? 1 : 0, r = c) : (r = Math.floor(Math.log(i) / Math.LN2), i * (n = Math.pow(2, -r)) < 1 && (r--, n *= 2), (i += r + d >= 1 ? g / n : g * Math.pow(2, 1 - d)) * n >= 2 && (r++, n /= 2), r + d >= c ? (s = 0, r = c) : r + d >= 1 ? (s = (i * n - 1) * Math.pow(2, h), r += d) : (s = i * Math.pow(2, d - 1) * Math.pow(2, h), r = 0)); h >= 8; e[t + m] = 255 & s, m += b, s /= 256, h -= 8)
      ;
    for (r = r << h | s, a += h; a > 0; e[t + m] = 255 & r, m += b, r /= 256, a -= 8)
      ;
    e[t + m - b] |= 128 * y;
  } }, gt = {}, Mr = eo, Kt = io, Gr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null, gt.Buffer = de, gt.SlowBuffer = function(e) {
    return +e != e && (e = 0), de.alloc(+e);
  }, gt.INSPECT_MAX_BYTES = 50, gt.kMaxLength = 2147483647, de.TYPED_ARRAY_SUPPORT = function() {
    try {
      var e = new Uint8Array(1), i = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(e, i), e.foo() === 42;
    } catch {
      return !1;
    }
  }(), de.TYPED_ARRAY_SUPPORT || typeof console > "u" || typeof console.error != "function" || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(de.prototype, "parent", { enumerable: !0, get: function() {
    if (de.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(de.prototype, "offset", { enumerable: !0, get: function() {
    if (de.isBuffer(this))
      return this.byteOffset;
  } }), de.poolSize = 8192, de.from = function(e, i, t) {
    return Jo(e, i, t);
  }, Object.setPrototypeOf(de.prototype, Uint8Array.prototype), Object.setPrototypeOf(de, Uint8Array), de.alloc = function(e, i, t) {
    return function(l, h, o) {
      return Xo(l), l <= 0 ? Tt(l) : h !== void 0 ? typeof o == "string" ? Tt(l).fill(h, o) : Tt(l).fill(h) : Tt(l);
    }(e, i, t);
  }, de.allocUnsafe = function(e) {
    return cn(e);
  }, de.allocUnsafeSlow = function(e) {
    return cn(e);
  }, de.isBuffer = function(e) {
    return e != null && e._isBuffer === !0 && e !== de.prototype;
  }, de.compare = function(e, i) {
    if (It(e, Uint8Array) && (e = de.from(e, e.offset, e.byteLength)), It(i, Uint8Array) && (i = de.from(i, i.offset, i.byteLength)), !de.isBuffer(e) || !de.isBuffer(i))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === i)
      return 0;
    for (var t = e.length, l = i.length, h = 0, o = Math.min(t, l); h < o; ++h)
      if (e[h] !== i[h]) {
        t = e[h], l = i[h];
        break;
      }
    return t < l ? -1 : l < t ? 1 : 0;
  }, de.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
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
        return !0;
      default:
        return !1;
    }
  }, de.concat = function(e, i) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
      return de.alloc(0);
    var t;
    if (i === void 0)
      for (i = 0, t = 0; t < e.length; ++t)
        i += e[t].length;
    var l = de.allocUnsafe(i), h = 0;
    for (t = 0; t < e.length; ++t) {
      var o = e[t];
      if (It(o, Uint8Array) && (o = de.from(o)), !de.isBuffer(o))
        throw new TypeError('"list" argument must be an Array of Buffers');
      o.copy(l, h), h += o.length;
    }
    return l;
  }, de.byteLength = Zo, de.prototype._isBuffer = !0, de.prototype.swap16 = function() {
    var e = this.length;
    if (e % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var i = 0; i < e; i += 2)
      Wt(this, i, i + 1);
    return this;
  }, de.prototype.swap32 = function() {
    var e = this.length;
    if (e % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var i = 0; i < e; i += 4)
      Wt(this, i, i + 3), Wt(this, i + 1, i + 2);
    return this;
  }, de.prototype.swap64 = function() {
    var e = this.length;
    if (e % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var i = 0; i < e; i += 8)
      Wt(this, i, i + 7), Wt(this, i + 1, i + 6), Wt(this, i + 2, i + 5), Wt(this, i + 3, i + 4);
    return this;
  }, de.prototype.toString = function() {
    var e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? ts(this, 0, e) : Ua.apply(this, arguments);
  }, de.prototype.toLocaleString = de.prototype.toString, de.prototype.equals = function(e) {
    if (!de.isBuffer(e))
      throw new TypeError("Argument must be a Buffer");
    return this === e || de.compare(this, e) === 0;
  }, de.prototype.inspect = function() {
    var e = "", i = gt.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (e += " ... "), "<Buffer " + e + ">";
  }, Gr && (de.prototype[Gr] = de.prototype.inspect), de.prototype.compare = function(e, i, t, l, h) {
    if (It(e, Uint8Array) && (e = de.from(e, e.offset, e.byteLength)), !de.isBuffer(e))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
    if (i === void 0 && (i = 0), t === void 0 && (t = e ? e.length : 0), l === void 0 && (l = 0), h === void 0 && (h = this.length), i < 0 || t > e.length || l < 0 || h > this.length)
      throw new RangeError("out of range index");
    if (l >= h && i >= t)
      return 0;
    if (l >= h)
      return -1;
    if (i >= t)
      return 1;
    if (this === e)
      return 0;
    for (var o = (h >>>= 0) - (l >>>= 0), r = (t >>>= 0) - (i >>>= 0), s = Math.min(o, r), n = this.slice(l, h), a = e.slice(i, t), c = 0; c < s; ++c)
      if (n[c] !== a[c]) {
        o = n[c], r = a[c];
        break;
      }
    return o < r ? -1 : r < o ? 1 : 0;
  }, de.prototype.includes = function(e, i, t) {
    return this.indexOf(e, i, t) !== -1;
  }, de.prototype.indexOf = function(e, i, t) {
    return Yn(this, e, i, t, !0);
  }, de.prototype.lastIndexOf = function(e, i, t) {
    return Yn(this, e, i, t, !1);
  }, de.prototype.write = function(e, i, t, l) {
    if (i === void 0)
      l = "utf8", t = this.length, i = 0;
    else if (t === void 0 && typeof i == "string")
      l = i, t = this.length, i = 0;
    else {
      if (!isFinite(i))
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      i >>>= 0, isFinite(t) ? (t >>>= 0, l === void 0 && (l = "utf8")) : (l = t, t = void 0);
    }
    var h = this.length - i;
    if ((t === void 0 || t > h) && (t = h), e.length > 0 && (t < 0 || i < 0) || i > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    l || (l = "utf8");
    for (var o = !1; ; )
      switch (l) {
        case "hex":
          return La(this, e, i, t);
        case "utf8":
        case "utf-8":
          return Na(this, e, i, t);
        case "ascii":
          return es(this, e, i, t);
        case "latin1":
        case "binary":
          return ja(this, e, i, t);
        case "base64":
          return Da(this, e, i, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Fa(this, e, i, t);
        default:
          if (o)
            throw new TypeError("Unknown encoding: " + l);
          l = ("" + l).toLowerCase(), o = !0;
      }
  }, de.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  }, de.prototype.slice = function(e, i) {
    var t = this.length;
    (e = ~~e) < 0 ? (e += t) < 0 && (e = 0) : e > t && (e = t), (i = i === void 0 ? t : ~~i) < 0 ? (i += t) < 0 && (i = 0) : i > t && (i = t), i < e && (i = e);
    var l = this.subarray(e, i);
    return Object.setPrototypeOf(l, de.prototype), l;
  }, de.prototype.readUIntLE = function(e, i, t) {
    e >>>= 0, i >>>= 0, t || Qe(e, i, this.length);
    for (var l = this[e], h = 1, o = 0; ++o < i && (h *= 256); )
      l += this[e + o] * h;
    return l;
  }, de.prototype.readUIntBE = function(e, i, t) {
    e >>>= 0, i >>>= 0, t || Qe(e, i, this.length);
    for (var l = this[e + --i], h = 1; i > 0 && (h *= 256); )
      l += this[e + --i] * h;
    return l;
  }, de.prototype.readUInt8 = function(e, i) {
    return e >>>= 0, i || Qe(e, 1, this.length), this[e];
  }, de.prototype.readUInt16LE = function(e, i) {
    return e >>>= 0, i || Qe(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, de.prototype.readUInt16BE = function(e, i) {
    return e >>>= 0, i || Qe(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, de.prototype.readUInt32LE = function(e, i) {
    return e >>>= 0, i || Qe(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
  }, de.prototype.readUInt32BE = function(e, i) {
    return e >>>= 0, i || Qe(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, de.prototype.readIntLE = function(e, i, t) {
    e >>>= 0, i >>>= 0, t || Qe(e, i, this.length);
    for (var l = this[e], h = 1, o = 0; ++o < i && (h *= 256); )
      l += this[e + o] * h;
    return l >= (h *= 128) && (l -= Math.pow(2, 8 * i)), l;
  }, de.prototype.readIntBE = function(e, i, t) {
    e >>>= 0, i >>>= 0, t || Qe(e, i, this.length);
    for (var l = i, h = 1, o = this[e + --l]; l > 0 && (h *= 256); )
      o += this[e + --l] * h;
    return o >= (h *= 128) && (o -= Math.pow(2, 8 * i)), o;
  }, de.prototype.readInt8 = function(e, i) {
    return e >>>= 0, i || Qe(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
  }, de.prototype.readInt16LE = function(e, i) {
    e >>>= 0, i || Qe(e, 2, this.length);
    var t = this[e] | this[e + 1] << 8;
    return 32768 & t ? 4294901760 | t : t;
  }, de.prototype.readInt16BE = function(e, i) {
    e >>>= 0, i || Qe(e, 2, this.length);
    var t = this[e + 1] | this[e] << 8;
    return 32768 & t ? 4294901760 | t : t;
  }, de.prototype.readInt32LE = function(e, i) {
    return e >>>= 0, i || Qe(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, de.prototype.readInt32BE = function(e, i) {
    return e >>>= 0, i || Qe(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, de.prototype.readFloatLE = function(e, i) {
    return e >>>= 0, i || Qe(e, 4, this.length), Kt.read(this, e, !0, 23, 4);
  }, de.prototype.readFloatBE = function(e, i) {
    return e >>>= 0, i || Qe(e, 4, this.length), Kt.read(this, e, !1, 23, 4);
  }, de.prototype.readDoubleLE = function(e, i) {
    return e >>>= 0, i || Qe(e, 8, this.length), Kt.read(this, e, !0, 52, 8);
  }, de.prototype.readDoubleBE = function(e, i) {
    return e >>>= 0, i || Qe(e, 8, this.length), Kt.read(this, e, !1, 52, 8);
  }, de.prototype.writeUIntLE = function(e, i, t, l) {
    e = +e, i >>>= 0, t >>>= 0, l || nt(this, e, i, t, Math.pow(2, 8 * t) - 1, 0);
    var h = 1, o = 0;
    for (this[i] = 255 & e; ++o < t && (h *= 256); )
      this[i + o] = e / h & 255;
    return i + t;
  }, de.prototype.writeUIntBE = function(e, i, t, l) {
    e = +e, i >>>= 0, t >>>= 0, l || nt(this, e, i, t, Math.pow(2, 8 * t) - 1, 0);
    var h = t - 1, o = 1;
    for (this[i + h] = 255 & e; --h >= 0 && (o *= 256); )
      this[i + h] = e / o & 255;
    return i + t;
  }, de.prototype.writeUInt8 = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 1, 255, 0), this[i] = 255 & e, i + 1;
  }, de.prototype.writeUInt16LE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 2, 65535, 0), this[i] = 255 & e, this[i + 1] = e >>> 8, i + 2;
  }, de.prototype.writeUInt16BE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 2, 65535, 0), this[i] = e >>> 8, this[i + 1] = 255 & e, i + 2;
  }, de.prototype.writeUInt32LE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 4, 4294967295, 0), this[i + 3] = e >>> 24, this[i + 2] = e >>> 16, this[i + 1] = e >>> 8, this[i] = 255 & e, i + 4;
  }, de.prototype.writeUInt32BE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 4, 4294967295, 0), this[i] = e >>> 24, this[i + 1] = e >>> 16, this[i + 2] = e >>> 8, this[i + 3] = 255 & e, i + 4;
  }, de.prototype.writeIntLE = function(e, i, t, l) {
    if (e = +e, i >>>= 0, !l) {
      var h = Math.pow(2, 8 * t - 1);
      nt(this, e, i, t, h - 1, -h);
    }
    var o = 0, r = 1, s = 0;
    for (this[i] = 255 & e; ++o < t && (r *= 256); )
      e < 0 && s === 0 && this[i + o - 1] !== 0 && (s = 1), this[i + o] = (e / r >> 0) - s & 255;
    return i + t;
  }, de.prototype.writeIntBE = function(e, i, t, l) {
    if (e = +e, i >>>= 0, !l) {
      var h = Math.pow(2, 8 * t - 1);
      nt(this, e, i, t, h - 1, -h);
    }
    var o = t - 1, r = 1, s = 0;
    for (this[i + o] = 255 & e; --o >= 0 && (r *= 256); )
      e < 0 && s === 0 && this[i + o + 1] !== 0 && (s = 1), this[i + o] = (e / r >> 0) - s & 255;
    return i + t;
  }, de.prototype.writeInt8 = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[i] = 255 & e, i + 1;
  }, de.prototype.writeInt16LE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 2, 32767, -32768), this[i] = 255 & e, this[i + 1] = e >>> 8, i + 2;
  }, de.prototype.writeInt16BE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 2, 32767, -32768), this[i] = e >>> 8, this[i + 1] = 255 & e, i + 2;
  }, de.prototype.writeInt32LE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 4, 2147483647, -2147483648), this[i] = 255 & e, this[i + 1] = e >>> 8, this[i + 2] = e >>> 16, this[i + 3] = e >>> 24, i + 4;
  }, de.prototype.writeInt32BE = function(e, i, t) {
    return e = +e, i >>>= 0, t || nt(this, e, i, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[i] = e >>> 24, this[i + 1] = e >>> 16, this[i + 2] = e >>> 8, this[i + 3] = 255 & e, i + 4;
  }, de.prototype.writeFloatLE = function(e, i, t) {
    return Jn(this, e, i, !0, t);
  }, de.prototype.writeFloatBE = function(e, i, t) {
    return Jn(this, e, i, !1, t);
  }, de.prototype.writeDoubleLE = function(e, i, t) {
    return Xn(this, e, i, !0, t);
  }, de.prototype.writeDoubleBE = function(e, i, t) {
    return Xn(this, e, i, !1, t);
  }, de.prototype.copy = function(e, i, t, l) {
    if (!de.isBuffer(e))
      throw new TypeError("argument should be a Buffer");
    if (t || (t = 0), l || l === 0 || (l = this.length), i >= e.length && (i = e.length), i || (i = 0), l > 0 && l < t && (l = t), l === t || e.length === 0 || this.length === 0)
      return 0;
    if (i < 0)
      throw new RangeError("targetStart out of bounds");
    if (t < 0 || t >= this.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("sourceEnd out of bounds");
    l > this.length && (l = this.length), e.length - i < l - t && (l = e.length - i + t);
    var h = l - t;
    if (this === e && typeof Uint8Array.prototype.copyWithin == "function")
      this.copyWithin(i, t, l);
    else if (this === e && t < i && i < l)
      for (var o = h - 1; o >= 0; --o)
        e[o + i] = this[o + t];
    else
      Uint8Array.prototype.set.call(e, this.subarray(t, l), i);
    return h;
  }, de.prototype.fill = function(e, i, t, l) {
    if (typeof e == "string") {
      if (typeof i == "string" ? (l = i, i = 0, t = this.length) : typeof t == "string" && (l = t, t = this.length), l !== void 0 && typeof l != "string")
        throw new TypeError("encoding must be a string");
      if (typeof l == "string" && !de.isEncoding(l))
        throw new TypeError("Unknown encoding: " + l);
      if (e.length === 1) {
        var h = e.charCodeAt(0);
        (l === "utf8" && h < 128 || l === "latin1") && (e = h);
      }
    } else
      typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
    if (i < 0 || this.length < i || this.length < t)
      throw new RangeError("Out of range index");
    if (t <= i)
      return this;
    var o;
    if (i >>>= 0, t = t === void 0 ? this.length : t >>> 0, e || (e = 0), typeof e == "number")
      for (o = i; o < t; ++o)
        this[o] = e;
    else {
      var r = de.isBuffer(e) ? e : de.from(e, l), s = r.length;
      if (s === 0)
        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (o = 0; o < t - i; ++o)
        this[o + i] = r[o % s];
    }
    return this;
  }, ns = /[^+/0-9A-Za-z-_]/g, os = function() {
    for (var e = new Array(256), i = 0; i < 16; ++i)
      for (var t = 16 * i, l = 0; l < 16; ++l)
        e[t + l] = "0123456789abcdef"[i] + "0123456789abcdef"[l];
    return e;
  }(), gt.Buffer, gt.INSPECT_MAX_BYTES, gt.kMaxLength, ur = {}, hr = gt, ft = hr.Buffer, ft.from && ft.alloc && ft.allocUnsafe && ft.allocUnsafeSlow ? ur = hr : (Zn(hr, ur), ur.Buffer = qt), qt.prototype = Object.create(ft.prototype), Zn(ft, qt), qt.from = function(e, i, t) {
    if (typeof e == "number")
      throw new TypeError("Argument must not be a number");
    return ft(e, i, t);
  }, qt.alloc = function(e, i, t) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    var l = ft(e);
    return i !== void 0 ? typeof t == "string" ? l.fill(i, t) : l.fill(i) : l.fill(0), l;
  }, qt.allocUnsafe = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return ft(e);
  }, qt.allocUnsafeSlow = function(e) {
    if (typeof e != "number")
      throw new TypeError("Argument must be a number");
    return hr.SlowBuffer(e);
  }, no = ur, or = {}, xr = no.Buffer, pn = xr.isEncoding || function(e) {
    switch ((e = "" + e) && e.toLowerCase()) {
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
        return !0;
      default:
        return !1;
    }
  }, or.StringDecoder = lr, lr.prototype.write = function(e) {
    if (e.length === 0)
      return "";
    var i, t;
    if (this.lastNeed) {
      if ((i = this.fillLast(e)) === void 0)
        return "";
      t = this.lastNeed, this.lastNeed = 0;
    } else
      t = 0;
    return t < e.length ? i ? i + this.text(e, t) : this.text(e, t) : i || "";
  }, lr.prototype.end = function(e) {
    var i = e && e.length ? this.write(e) : "";
    return this.lastNeed ? i + "�" : i;
  }, lr.prototype.text = function(e, i) {
    var t = function(h, o, r) {
      var s = o.length - 1;
      if (s < r)
        return 0;
      var n = Yr(o[s]);
      return n >= 0 ? (n > 0 && (h.lastNeed = n - 1), n) : --s < r || n === -2 ? 0 : (n = Yr(o[s])) >= 0 ? (n > 0 && (h.lastNeed = n - 2), n) : --s < r || n === -2 ? 0 : (n = Yr(o[s])) >= 0 ? (n > 0 && (n === 2 ? n = 0 : h.lastNeed = n - 3), n) : 0;
    }(this, e, i);
    if (!this.lastNeed)
      return e.toString("utf8", i);
    this.lastTotal = t;
    var l = e.length - (t - this.lastNeed);
    return e.copy(this.lastChar, 0, l), e.toString("utf8", i, l);
  }, lr.prototype.fillLast = function(e) {
    if (this.lastNeed <= e.length)
      return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
  }, or.StringDecoder, or.StringDecoder;
}), ss = {};
Zt(ss, { StringDecoder: () => as, default: () => or });
var as, Za = Ge(() => {
  ae(), se(), oe(), oo(), oo(), as = or.StringDecoder;
}), ls = me((e, i) => {
  ae(), se(), oe();
  var t = er(), { PromisePrototypeThen: l, SymbolAsyncIterator: h, SymbolIterator: o } = Ke(), { Buffer: r } = (Xe(), xe(Je)), { ERR_INVALID_ARG_TYPE: s, ERR_STREAM_NULL_VALUES: n } = ot().codes;
  function a(c, d, g) {
    let m;
    if (typeof d == "string" || d instanceof r)
      return new c({ objectMode: !0, ...g, read() {
        this.push(d), this.push(null);
      } });
    let b;
    if (d && d[h])
      b = !0, m = d[h]();
    else if (d && d[o])
      b = !1, m = d[o]();
    else
      throw new s("iterable", ["Iterable"], d);
    let y = new c({ objectMode: !0, highWaterMark: 1, ...g }), T = !1;
    y._read = function() {
      T || (T = !0, k());
    }, y._destroy = function(I, D) {
      l(U(I), () => t.nextTick(D, I), (F) => t.nextTick(D, F || I));
    };
    async function U(I) {
      let D = I != null, F = typeof m.throw == "function";
      if (D && F) {
        let { value: R, done: C } = await m.throw(I);
        if (await R, C)
          return;
      }
      if (typeof m.return == "function") {
        let { value: R } = await m.return();
        await R;
      }
    }
    async function k() {
      for (; ; ) {
        try {
          let { value: I, done: D } = b ? await m.next() : m.next();
          if (D)
            y.push(null);
          else {
            let F = I && typeof I.then == "function" ? await I : I;
            if (F === null)
              throw T = !1, new n();
            if (y.push(F))
              continue;
            T = !1;
          }
        } catch (I) {
          y.destroy(I);
        }
        break;
      }
    }
    return y;
  }
  i.exports = a;
}), Fr = me((e, i) => {
  ae(), se(), oe();
  var t = er(), { ArrayPrototypeIndexOf: l, NumberIsInteger: h, NumberIsNaN: o, NumberParseInt: r, ObjectDefineProperties: s, ObjectKeys: n, ObjectSetPrototypeOf: a, Promise: c, SafeSet: d, SymbolAsyncIterator: g, Symbol: m } = Ke();
  i.exports = S, S.ReadableState = ve;
  var { EventEmitter: b } = (ar(), xe(tr)), { Stream: y, prependListener: T } = Pn(), { Buffer: U } = (Xe(), xe(Je)), { addAbortSignal: k } = jr(), I = jt(), D = kt().debuglog("stream", (u) => {
    D = u;
  }), F = Ba(), R = sr(), { getHighWaterMark: C, getDefaultHighWaterMark: x } = Bn(), { aggregateTwoErrors: W, codes: { ERR_INVALID_ARG_TYPE: G, ERR_METHOD_NOT_IMPLEMENTED: ee, ERR_OUT_OF_RANGE: E, ERR_STREAM_PUSH_AFTER_EOF: $, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: Z } } = ot(), { validateObject: K } = Nr(), ge = m("kPaused"), { StringDecoder: ne } = (Za(), xe(ss)), q = ls();
  a(S.prototype, y.prototype), a(S, y);
  var be = () => {
  }, { errorOrDestroy: re } = R;
  function ve(u, p, v) {
    typeof v != "boolean" && (v = p instanceof Ct()), this.objectMode = !!(u && u.objectMode), v && (this.objectMode = this.objectMode || !!(u && u.readableObjectMode)), this.highWaterMark = u ? C(this, u, "readableHighWaterMark", v) : x(!1), this.buffer = new F(), this.length = 0, this.pipes = [], this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[ge] = null, this.errorEmitted = !1, this.emitClose = !u || u.emitClose !== !1, this.autoDestroy = !u || u.autoDestroy !== !1, this.destroyed = !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = u && u.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, u && u.encoding && (this.decoder = new ne(u.encoding), this.encoding = u.encoding);
  }
  function S(u) {
    if (!(this instanceof S))
      return new S(u);
    let p = this instanceof Ct();
    this._readableState = new ve(u, this, p), u && (typeof u.read == "function" && (this._read = u.read), typeof u.destroy == "function" && (this._destroy = u.destroy), typeof u.construct == "function" && (this._construct = u.construct), u.signal && !p && k(u.signal, this)), y.call(this, u), R.construct(this, () => {
      this._readableState.needReadable && X(this, this._readableState);
    });
  }
  S.prototype.destroy = R.destroy, S.prototype._undestroy = R.undestroy, S.prototype._destroy = function(u, p) {
    p(u);
  }, S.prototype[b.captureRejectionSymbol] = function(u) {
    this.destroy(u);
  }, S.prototype.push = function(u, p) {
    return Q(this, u, p, !1);
  }, S.prototype.unshift = function(u, p) {
    return Q(this, u, p, !0);
  };
  function Q(u, p, v, A) {
    D("readableAddChunk", p);
    let w = u._readableState, P;
    if (w.objectMode || (typeof p == "string" ? (v = v || w.defaultEncoding, w.encoding !== v && (A && w.encoding ? p = U.from(p, v).toString(w.encoding) : (p = U.from(p, v), v = ""))) : p instanceof U ? v = "" : y._isUint8Array(p) ? (p = y._uint8ArrayToBuffer(p), v = "") : p != null && (P = new G("chunk", ["string", "Buffer", "Uint8Array"], p))), P)
      re(u, P);
    else if (p === null)
      w.reading = !1, _(u, w);
    else if (w.objectMode || p && p.length > 0)
      if (A)
        if (w.endEmitted)
          re(u, new Z());
        else {
          if (w.destroyed || w.errored)
            return !1;
          ce(u, w, p, !0);
        }
      else if (w.ended)
        re(u, new $());
      else {
        if (w.destroyed || w.errored)
          return !1;
        w.reading = !1, w.decoder && !v ? (p = w.decoder.write(p), w.objectMode || p.length !== 0 ? ce(u, w, p, !1) : X(u, w)) : ce(u, w, p, !1);
      }
    else
      A || (w.reading = !1, X(u, w));
    return !w.ended && (w.length < w.highWaterMark || w.length === 0);
  }
  function ce(u, p, v, A) {
    p.flowing && p.length === 0 && !p.sync && u.listenerCount("data") > 0 ? (p.multiAwaitDrain ? p.awaitDrainWriters.clear() : p.awaitDrainWriters = null, p.dataEmitted = !0, u.emit("data", v)) : (p.length += p.objectMode ? 1 : v.length, A ? p.buffer.unshift(v) : p.buffer.push(v), p.needReadable && z(u)), X(u, p);
  }
  S.prototype.isPaused = function() {
    let u = this._readableState;
    return u[ge] === !0 || u.flowing === !1;
  }, S.prototype.setEncoding = function(u) {
    let p = new ne(u);
    this._readableState.decoder = p, this._readableState.encoding = this._readableState.decoder.encoding;
    let v = this._readableState.buffer, A = "";
    for (let w of v)
      A += p.write(w);
    return v.clear(), A !== "" && v.push(A), this._readableState.length = A.length, this;
  };
  var Ee = 1073741824;
  function ue(u) {
    if (u > Ee)
      throw new E("size", "<= 1GiB", u);
    return u--, u |= u >>> 1, u |= u >>> 2, u |= u >>> 4, u |= u >>> 8, u |= u >>> 16, u++, u;
  }
  function M(u, p) {
    return u <= 0 || p.length === 0 && p.ended ? 0 : p.objectMode ? 1 : o(u) ? p.flowing && p.length ? p.buffer.first().length : p.length : u <= p.length ? u : p.ended ? p.length : 0;
  }
  S.prototype.read = function(u) {
    D("read", u), u === void 0 ? u = NaN : h(u) || (u = r(u, 10));
    let p = this._readableState, v = u;
    if (u > p.highWaterMark && (p.highWaterMark = ue(u)), u !== 0 && (p.emittedReadable = !1), u === 0 && p.needReadable && ((p.highWaterMark !== 0 ? p.length >= p.highWaterMark : p.length > 0) || p.ended))
      return D("read: emitReadable", p.length, p.ended), p.length === 0 && p.ended ? we(this) : z(this), null;
    if (u = M(u, p), u === 0 && p.ended)
      return p.length === 0 && we(this), null;
    let A = p.needReadable;
    if (D("need readable", A), (p.length === 0 || p.length - u < p.highWaterMark) && (A = !0, D("length less than watermark", A)), p.ended || p.reading || p.destroyed || p.errored || !p.constructed)
      A = !1, D("reading, ended or constructing", A);
    else if (A) {
      D("do read"), p.reading = !0, p.sync = !0, p.length === 0 && (p.needReadable = !0);
      try {
        this._read(p.highWaterMark);
      } catch (P) {
        re(this, P);
      }
      p.sync = !1, p.reading || (u = M(v, p));
    }
    let w;
    return u > 0 ? w = H(u, p) : w = null, w === null ? (p.needReadable = p.length <= p.highWaterMark, u = 0) : (p.length -= u, p.multiAwaitDrain ? p.awaitDrainWriters.clear() : p.awaitDrainWriters = null), p.length === 0 && (p.ended || (p.needReadable = !0), v !== u && p.ended && we(this)), w !== null && !p.errorEmitted && !p.closeEmitted && (p.dataEmitted = !0, this.emit("data", w)), w;
  };
  function _(u, p) {
    if (D("onEofChunk"), !p.ended) {
      if (p.decoder) {
        let v = p.decoder.end();
        v && v.length && (p.buffer.push(v), p.length += p.objectMode ? 1 : v.length);
      }
      p.ended = !0, p.sync ? z(u) : (p.needReadable = !1, p.emittedReadable = !0, le(u));
    }
  }
  function z(u) {
    let p = u._readableState;
    D("emitReadable", p.needReadable, p.emittedReadable), p.needReadable = !1, p.emittedReadable || (D("emitReadable", p.flowing), p.emittedReadable = !0, t.nextTick(le, u));
  }
  function le(u) {
    let p = u._readableState;
    D("emitReadable_", p.destroyed, p.length, p.ended), !p.destroyed && !p.errored && (p.length || p.ended) && (u.emit("readable"), p.emittedReadable = !1), p.needReadable = !p.flowing && !p.ended && p.length <= p.highWaterMark, te(u);
  }
  function X(u, p) {
    !p.readingMore && p.constructed && (p.readingMore = !0, t.nextTick(J, u, p));
  }
  function J(u, p) {
    for (; !p.reading && !p.ended && (p.length < p.highWaterMark || p.flowing && p.length === 0); ) {
      let v = p.length;
      if (D("maybeReadMore read 0"), u.read(0), v === p.length)
        break;
    }
    p.readingMore = !1;
  }
  S.prototype._read = function(u) {
    throw new ee("_read()");
  }, S.prototype.pipe = function(u, p) {
    let v = this, A = this._readableState;
    A.pipes.length === 1 && (A.multiAwaitDrain || (A.multiAwaitDrain = !0, A.awaitDrainWriters = new d(A.awaitDrainWriters ? [A.awaitDrainWriters] : []))), A.pipes.push(u), D("pipe count=%d opts=%j", A.pipes.length, p);
    let w = (!p || p.end !== !1) && u !== t.stdout && u !== t.stderr ? V : rt;
    A.endEmitted ? t.nextTick(w) : v.once("end", w), u.on("unpipe", P);
    function P(He, ze) {
      D("onunpipe"), He === v && ze && ze.hasUnpiped === !1 && (ze.hasUnpiped = !0, ye());
    }
    function V() {
      D("onend"), u.end();
    }
    let fe, ie = !1;
    function ye() {
      D("cleanup"), u.removeListener("close", tt), u.removeListener("finish", Me), fe && u.removeListener("drain", fe), u.removeListener("error", $e), u.removeListener("unpipe", P), v.removeListener("end", V), v.removeListener("end", rt), v.removeListener("data", ke), ie = !0, fe && A.awaitDrainWriters && (!u._writableState || u._writableState.needDrain) && fe();
    }
    function Se() {
      ie || (A.pipes.length === 1 && A.pipes[0] === u ? (D("false write response, pause", 0), A.awaitDrainWriters = u, A.multiAwaitDrain = !1) : A.pipes.length > 1 && A.pipes.includes(u) && (D("false write response, pause", A.awaitDrainWriters.size), A.awaitDrainWriters.add(u)), v.pause()), fe || (fe = he(v, u), u.on("drain", fe));
    }
    v.on("data", ke);
    function ke(He) {
      D("ondata");
      let ze = u.write(He);
      D("dest.write", ze), ze === !1 && Se();
    }
    function $e(He) {
      if (D("onerror", He), rt(), u.removeListener("error", $e), u.listenerCount("error") === 0) {
        let ze = u._writableState || u._readableState;
        ze && !ze.errorEmitted ? re(u, He) : u.emit("error", He);
      }
    }
    T(u, "error", $e);
    function tt() {
      u.removeListener("finish", Me), rt();
    }
    u.once("close", tt);
    function Me() {
      D("onfinish"), u.removeListener("close", tt), rt();
    }
    u.once("finish", Me);
    function rt() {
      D("unpipe"), v.unpipe(u);
    }
    return u.emit("pipe", v), u.writableNeedDrain === !0 ? A.flowing && Se() : A.flowing || (D("pipe resume"), v.resume()), u;
  };
  function he(u, p) {
    return function() {
      let v = u._readableState;
      v.awaitDrainWriters === p ? (D("pipeOnDrain", 1), v.awaitDrainWriters = null) : v.multiAwaitDrain && (D("pipeOnDrain", v.awaitDrainWriters.size), v.awaitDrainWriters.delete(p)), (!v.awaitDrainWriters || v.awaitDrainWriters.size === 0) && u.listenerCount("data") && u.resume();
    };
  }
  S.prototype.unpipe = function(u) {
    let p = this._readableState, v = { hasUnpiped: !1 };
    if (p.pipes.length === 0)
      return this;
    if (!u) {
      let w = p.pipes;
      p.pipes = [], this.pause();
      for (let P = 0; P < w.length; P++)
        w[P].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    let A = l(p.pipes, u);
    return A === -1 ? this : (p.pipes.splice(A, 1), p.pipes.length === 0 && this.pause(), u.emit("unpipe", this, v), this);
  }, S.prototype.on = function(u, p) {
    let v = y.prototype.on.call(this, u, p), A = this._readableState;
    return u === "data" ? (A.readableListening = this.listenerCount("readable") > 0, A.flowing !== !1 && this.resume()) : u === "readable" && !A.endEmitted && !A.readableListening && (A.readableListening = A.needReadable = !0, A.flowing = !1, A.emittedReadable = !1, D("on readable", A.length, A.reading), A.length ? z(this) : A.reading || t.nextTick(O, this)), v;
  }, S.prototype.addListener = S.prototype.on, S.prototype.removeListener = function(u, p) {
    let v = y.prototype.removeListener.call(this, u, p);
    return u === "readable" && t.nextTick(pe, this), v;
  }, S.prototype.off = S.prototype.removeListener, S.prototype.removeAllListeners = function(u) {
    let p = y.prototype.removeAllListeners.apply(this, arguments);
    return (u === "readable" || u === void 0) && t.nextTick(pe, this), p;
  };
  function pe(u) {
    let p = u._readableState;
    p.readableListening = u.listenerCount("readable") > 0, p.resumeScheduled && p[ge] === !1 ? p.flowing = !0 : u.listenerCount("data") > 0 ? u.resume() : p.readableListening || (p.flowing = null);
  }
  function O(u) {
    D("readable nexttick read 0"), u.read(0);
  }
  S.prototype.resume = function() {
    let u = this._readableState;
    return u.flowing || (D("resume"), u.flowing = !u.readableListening, j(this, u)), u[ge] = !1, this;
  };
  function j(u, p) {
    p.resumeScheduled || (p.resumeScheduled = !0, t.nextTick(N, u, p));
  }
  function N(u, p) {
    D("resume", p.reading), p.reading || u.read(0), p.resumeScheduled = !1, u.emit("resume"), te(u), p.flowing && !p.reading && u.read(0);
  }
  S.prototype.pause = function() {
    return D("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (D("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[ge] = !0, this;
  };
  function te(u) {
    let p = u._readableState;
    for (D("flow", p.flowing); p.flowing && u.read() !== null; )
      ;
  }
  S.prototype.wrap = function(u) {
    let p = !1;
    u.on("data", (A) => {
      !this.push(A) && u.pause && (p = !0, u.pause());
    }), u.on("end", () => {
      this.push(null);
    }), u.on("error", (A) => {
      re(this, A);
    }), u.on("close", () => {
      this.destroy();
    }), u.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      p && u.resume && (p = !1, u.resume());
    };
    let v = n(u);
    for (let A = 1; A < v.length; A++) {
      let w = v[A];
      this[w] === void 0 && typeof u[w] == "function" && (this[w] = u[w].bind(u));
    }
    return this;
  }, S.prototype[g] = function() {
    return Y(this);
  }, S.prototype.iterator = function(u) {
    return u !== void 0 && K(u, "options"), Y(this, u);
  };
  function Y(u, p) {
    typeof u.read != "function" && (u = S.wrap(u, { objectMode: !0 }));
    let v = L(u, p);
    return v.stream = u, v;
  }
  async function* L(u, p) {
    let v = be;
    function A(V) {
      this === u ? (v(), v = be) : v = V;
    }
    u.on("readable", A);
    let w, P = I(u, { writable: !1 }, (V) => {
      w = V ? W(w, V) : null, v(), v = be;
    });
    try {
      for (; ; ) {
        let V = u.destroyed ? null : u.read();
        if (V !== null)
          yield V;
        else {
          if (w)
            throw w;
          if (w === null)
            return;
          await new c(A);
        }
      }
    } catch (V) {
      throw w = W(w, V), w;
    } finally {
      (w || (p == null ? void 0 : p.destroyOnReturn) !== !1) && (w === void 0 || u._readableState.autoDestroy) ? R.destroyer(u, null) : (u.off("readable", A), P());
    }
  }
  s(S.prototype, { readable: { __proto__: null, get() {
    let u = this._readableState;
    return !!u && u.readable !== !1 && !u.destroyed && !u.errorEmitted && !u.endEmitted;
  }, set(u) {
    this._readableState && (this._readableState.readable = !!u);
  } }, readableDidRead: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.dataEmitted;
  } }, readableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
  } }, readableHighWaterMark: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.highWaterMark;
  } }, readableBuffer: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState && this._readableState.buffer;
  } }, readableFlowing: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.flowing;
  }, set: function(u) {
    this._readableState && (this._readableState.flowing = u);
  } }, readableLength: { __proto__: null, enumerable: !1, get() {
    return this._readableState.length;
  } }, readableObjectMode: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.objectMode : !1;
  } }, readableEncoding: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.encoding : null;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.errored : null;
  } }, closed: { __proto__: null, get() {
    return this._readableState ? this._readableState.closed : !1;
  } }, destroyed: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.destroyed : !1;
  }, set(u) {
    this._readableState && (this._readableState.destroyed = u);
  } }, readableEnded: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.endEmitted : !1;
  } } }), s(ve.prototype, { pipesCount: { __proto__: null, get() {
    return this.pipes.length;
  } }, paused: { __proto__: null, get() {
    return this[ge] !== !1;
  }, set(u) {
    this[ge] = !!u;
  } } }), S._fromList = H;
  function H(u, p) {
    if (p.length === 0)
      return null;
    let v;
    return p.objectMode ? v = p.buffer.shift() : !u || u >= p.length ? (p.decoder ? v = p.buffer.join("") : p.buffer.length === 1 ? v = p.buffer.first() : v = p.buffer.concat(p.length), p.buffer.clear()) : v = p.buffer.consume(u, p.decoder), v;
  }
  function we(u) {
    let p = u._readableState;
    D("endReadable", p.endEmitted), p.endEmitted || (p.ended = !0, t.nextTick(_e, p, u));
  }
  function _e(u, p) {
    if (D("endReadableNT", u.endEmitted, u.length), !u.errored && !u.closeEmitted && !u.endEmitted && u.length === 0) {
      if (u.endEmitted = !0, p.emit("end"), p.writable && p.allowHalfOpen === !1)
        t.nextTick(Ae, p);
      else if (u.autoDestroy) {
        let v = p._writableState;
        (!v || v.autoDestroy && (v.finished || v.writable === !1)) && p.destroy();
      }
    }
  }
  function Ae(u) {
    u.writable && !u.writableEnded && !u.destroyed && u.end();
  }
  S.from = function(u, p) {
    return q(S, u, p);
  };
  var Re;
  function f() {
    return Re === void 0 && (Re = {}), Re;
  }
  S.fromWeb = function(u, p) {
    return f().newStreamReadableFromReadableStream(u, p);
  }, S.toWeb = function(u, p) {
    return f().newReadableStreamFromStreamReadable(u, p);
  }, S.wrap = function(u, p) {
    var v, A;
    return new S({ objectMode: (v = (A = u.readableObjectMode) !== null && A !== void 0 ? A : u.objectMode) !== null && v !== void 0 ? v : !0, ...p, destroy(w, P) {
      R.destroyer(u, w), P(w);
    } }).wrap(u);
  };
}), us = me((e, i) => {
  ae(), se(), oe();
  var t = er(), { ArrayPrototypeSlice: l, Error: h, FunctionPrototypeSymbolHasInstance: o, ObjectDefineProperty: r, ObjectDefineProperties: s, ObjectSetPrototypeOf: n, StringPrototypeToLowerCase: a, Symbol: c, SymbolHasInstance: d } = Ke();
  i.exports = ne, ne.WritableState = K;
  var { EventEmitter: g } = (ar(), xe(tr)), m = Pn().Stream, { Buffer: b } = (Xe(), xe(Je)), y = sr(), { addAbortSignal: T } = jr(), { getHighWaterMark: U, getDefaultHighWaterMark: k } = Bn(), { ERR_INVALID_ARG_TYPE: I, ERR_METHOD_NOT_IMPLEMENTED: D, ERR_MULTIPLE_CALLBACK: F, ERR_STREAM_CANNOT_PIPE: R, ERR_STREAM_DESTROYED: C, ERR_STREAM_ALREADY_FINISHED: x, ERR_STREAM_NULL_VALUES: W, ERR_STREAM_WRITE_AFTER_END: G, ERR_UNKNOWN_ENCODING: ee } = ot().codes, { errorOrDestroy: E } = y;
  n(ne.prototype, m.prototype), n(ne, m);
  function $() {
  }
  var Z = c("kOnFinished");
  function K(O, j, N) {
    typeof N != "boolean" && (N = j instanceof Ct()), this.objectMode = !!(O && O.objectMode), N && (this.objectMode = this.objectMode || !!(O && O.writableObjectMode)), this.highWaterMark = O ? U(this, O, "writableHighWaterMark", N) : k(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    let te = !!(O && O.decodeStrings === !1);
    this.decodeStrings = !te, this.defaultEncoding = O && O.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = S.bind(void 0, j), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, ge(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !O || O.emitClose !== !1, this.autoDestroy = !O || O.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[Z] = [];
  }
  function ge(O) {
    O.buffered = [], O.bufferedIndex = 0, O.allBuffers = !0, O.allNoop = !0;
  }
  K.prototype.getBuffer = function() {
    return l(this.buffered, this.bufferedIndex);
  }, r(K.prototype, "bufferedRequestCount", { __proto__: null, get() {
    return this.buffered.length - this.bufferedIndex;
  } });
  function ne(O) {
    let j = this instanceof Ct();
    if (!j && !o(ne, this))
      return new ne(O);
    this._writableState = new K(O, this, j), O && (typeof O.write == "function" && (this._write = O.write), typeof O.writev == "function" && (this._writev = O.writev), typeof O.destroy == "function" && (this._destroy = O.destroy), typeof O.final == "function" && (this._final = O.final), typeof O.construct == "function" && (this._construct = O.construct), O.signal && T(O.signal, this)), m.call(this, O), y.construct(this, () => {
      let N = this._writableState;
      N.writing || ue(this, N), le(this, N);
    });
  }
  r(ne, d, { __proto__: null, value: function(O) {
    return o(this, O) ? !0 : this !== ne ? !1 : O && O._writableState instanceof K;
  } }), ne.prototype.pipe = function() {
    E(this, new R());
  };
  function q(O, j, N, te) {
    let Y = O._writableState;
    if (typeof N == "function")
      te = N, N = Y.defaultEncoding;
    else {
      if (!N)
        N = Y.defaultEncoding;
      else if (N !== "buffer" && !b.isEncoding(N))
        throw new ee(N);
      typeof te != "function" && (te = $);
    }
    if (j === null)
      throw new W();
    if (!Y.objectMode)
      if (typeof j == "string")
        Y.decodeStrings !== !1 && (j = b.from(j, N), N = "buffer");
      else if (j instanceof b)
        N = "buffer";
      else if (m._isUint8Array(j))
        j = m._uint8ArrayToBuffer(j), N = "buffer";
      else
        throw new I("chunk", ["string", "Buffer", "Uint8Array"], j);
    let L;
    return Y.ending ? L = new G() : Y.destroyed && (L = new C("write")), L ? (t.nextTick(te, L), E(O, L, !0), L) : (Y.pendingcb++, be(O, Y, j, N, te));
  }
  ne.prototype.write = function(O, j, N) {
    return q(this, O, j, N) === !0;
  }, ne.prototype.cork = function() {
    this._writableState.corked++;
  }, ne.prototype.uncork = function() {
    let O = this._writableState;
    O.corked && (O.corked--, O.writing || ue(this, O));
  }, ne.prototype.setDefaultEncoding = function(O) {
    if (typeof O == "string" && (O = a(O)), !b.isEncoding(O))
      throw new ee(O);
    return this._writableState.defaultEncoding = O, this;
  };
  function be(O, j, N, te, Y) {
    let L = j.objectMode ? 1 : N.length;
    j.length += L;
    let H = j.length < j.highWaterMark;
    return H || (j.needDrain = !0), j.writing || j.corked || j.errored || !j.constructed ? (j.buffered.push({ chunk: N, encoding: te, callback: Y }), j.allBuffers && te !== "buffer" && (j.allBuffers = !1), j.allNoop && Y !== $ && (j.allNoop = !1)) : (j.writelen = L, j.writecb = Y, j.writing = !0, j.sync = !0, O._write(N, te, j.onwrite), j.sync = !1), H && !j.errored && !j.destroyed;
  }
  function re(O, j, N, te, Y, L, H) {
    j.writelen = te, j.writecb = H, j.writing = !0, j.sync = !0, j.destroyed ? j.onwrite(new C("write")) : N ? O._writev(Y, j.onwrite) : O._write(Y, L, j.onwrite), j.sync = !1;
  }
  function ve(O, j, N, te) {
    --j.pendingcb, te(N), Ee(j), E(O, N);
  }
  function S(O, j) {
    let N = O._writableState, te = N.sync, Y = N.writecb;
    if (typeof Y != "function") {
      E(O, new F());
      return;
    }
    N.writing = !1, N.writecb = null, N.length -= N.writelen, N.writelen = 0, j ? (j.stack, N.errored || (N.errored = j), O._readableState && !O._readableState.errored && (O._readableState.errored = j), te ? t.nextTick(ve, O, N, j, Y) : ve(O, N, j, Y)) : (N.buffered.length > N.bufferedIndex && ue(O, N), te ? N.afterWriteTickInfo !== null && N.afterWriteTickInfo.cb === Y ? N.afterWriteTickInfo.count++ : (N.afterWriteTickInfo = { count: 1, cb: Y, stream: O, state: N }, t.nextTick(Q, N.afterWriteTickInfo)) : ce(O, N, 1, Y));
  }
  function Q({ stream: O, state: j, count: N, cb: te }) {
    return j.afterWriteTickInfo = null, ce(O, j, N, te);
  }
  function ce(O, j, N, te) {
    for (!j.ending && !O.destroyed && j.length === 0 && j.needDrain && (j.needDrain = !1, O.emit("drain")); N-- > 0; )
      j.pendingcb--, te();
    j.destroyed && Ee(j), le(O, j);
  }
  function Ee(O) {
    if (O.writing)
      return;
    for (let Y = O.bufferedIndex; Y < O.buffered.length; ++Y) {
      var j;
      let { chunk: L, callback: H } = O.buffered[Y], we = O.objectMode ? 1 : L.length;
      O.length -= we, H((j = O.errored) !== null && j !== void 0 ? j : new C("write"));
    }
    let N = O[Z].splice(0);
    for (let Y = 0; Y < N.length; Y++) {
      var te;
      N[Y]((te = O.errored) !== null && te !== void 0 ? te : new C("end"));
    }
    ge(O);
  }
  function ue(O, j) {
    if (j.corked || j.bufferProcessing || j.destroyed || !j.constructed)
      return;
    let { buffered: N, bufferedIndex: te, objectMode: Y } = j, L = N.length - te;
    if (!L)
      return;
    let H = te;
    if (j.bufferProcessing = !0, L > 1 && O._writev) {
      j.pendingcb -= L - 1;
      let we = j.allNoop ? $ : (Ae) => {
        for (let Re = H; Re < N.length; ++Re)
          N[Re].callback(Ae);
      }, _e = j.allNoop && H === 0 ? N : l(N, H);
      _e.allBuffers = j.allBuffers, re(O, j, !0, j.length, _e, "", we), ge(j);
    } else {
      do {
        let { chunk: we, encoding: _e, callback: Ae } = N[H];
        N[H++] = null;
        let Re = Y ? 1 : we.length;
        re(O, j, !1, Re, we, _e, Ae);
      } while (H < N.length && !j.writing);
      H === N.length ? ge(j) : H > 256 ? (N.splice(0, H), j.bufferedIndex = 0) : j.bufferedIndex = H;
    }
    j.bufferProcessing = !1;
  }
  ne.prototype._write = function(O, j, N) {
    if (this._writev)
      this._writev([{ chunk: O, encoding: j }], N);
    else
      throw new D("_write()");
  }, ne.prototype._writev = null, ne.prototype.end = function(O, j, N) {
    let te = this._writableState;
    typeof O == "function" ? (N = O, O = null, j = null) : typeof j == "function" && (N = j, j = null);
    let Y;
    if (O != null) {
      let L = q(this, O, j);
      L instanceof h && (Y = L);
    }
    return te.corked && (te.corked = 1, this.uncork()), Y || (!te.errored && !te.ending ? (te.ending = !0, le(this, te, !0), te.ended = !0) : te.finished ? Y = new x("end") : te.destroyed && (Y = new C("end"))), typeof N == "function" && (Y || te.finished ? t.nextTick(N, Y) : te[Z].push(N)), this;
  };
  function M(O) {
    return O.ending && !O.destroyed && O.constructed && O.length === 0 && !O.errored && O.buffered.length === 0 && !O.finished && !O.writing && !O.errorEmitted && !O.closeEmitted;
  }
  function _(O, j) {
    let N = !1;
    function te(Y) {
      if (N) {
        E(O, Y ?? F());
        return;
      }
      if (N = !0, j.pendingcb--, Y) {
        let L = j[Z].splice(0);
        for (let H = 0; H < L.length; H++)
          L[H](Y);
        E(O, Y, j.sync);
      } else
        M(j) && (j.prefinished = !0, O.emit("prefinish"), j.pendingcb++, t.nextTick(X, O, j));
    }
    j.sync = !0, j.pendingcb++;
    try {
      O._final(te);
    } catch (Y) {
      te(Y);
    }
    j.sync = !1;
  }
  function z(O, j) {
    !j.prefinished && !j.finalCalled && (typeof O._final == "function" && !j.destroyed ? (j.finalCalled = !0, _(O, j)) : (j.prefinished = !0, O.emit("prefinish")));
  }
  function le(O, j, N) {
    M(j) && (z(O, j), j.pendingcb === 0 && (N ? (j.pendingcb++, t.nextTick((te, Y) => {
      M(Y) ? X(te, Y) : Y.pendingcb--;
    }, O, j)) : M(j) && (j.pendingcb++, X(O, j))));
  }
  function X(O, j) {
    j.pendingcb--, j.finished = !0;
    let N = j[Z].splice(0);
    for (let te = 0; te < N.length; te++)
      N[te]();
    if (O.emit("finish"), j.autoDestroy) {
      let te = O._readableState;
      (!te || te.autoDestroy && (te.endEmitted || te.readable === !1)) && O.destroy();
    }
  }
  s(ne.prototype, { closed: { __proto__: null, get() {
    return this._writableState ? this._writableState.closed : !1;
  } }, destroyed: { __proto__: null, get() {
    return this._writableState ? this._writableState.destroyed : !1;
  }, set(O) {
    this._writableState && (this._writableState.destroyed = O);
  } }, writable: { __proto__: null, get() {
    let O = this._writableState;
    return !!O && O.writable !== !1 && !O.destroyed && !O.errored && !O.ending && !O.ended;
  }, set(O) {
    this._writableState && (this._writableState.writable = !!O);
  } }, writableFinished: { __proto__: null, get() {
    return this._writableState ? this._writableState.finished : !1;
  } }, writableObjectMode: { __proto__: null, get() {
    return this._writableState ? this._writableState.objectMode : !1;
  } }, writableBuffer: { __proto__: null, get() {
    return this._writableState && this._writableState.getBuffer();
  } }, writableEnded: { __proto__: null, get() {
    return this._writableState ? this._writableState.ending : !1;
  } }, writableNeedDrain: { __proto__: null, get() {
    let O = this._writableState;
    return O ? !O.destroyed && !O.ending && O.needDrain : !1;
  } }, writableHighWaterMark: { __proto__: null, get() {
    return this._writableState && this._writableState.highWaterMark;
  } }, writableCorked: { __proto__: null, get() {
    return this._writableState ? this._writableState.corked : 0;
  } }, writableLength: { __proto__: null, get() {
    return this._writableState && this._writableState.length;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._writableState ? this._writableState.errored : null;
  } }, writableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
  } } });
  var J = y.destroy;
  ne.prototype.destroy = function(O, j) {
    let N = this._writableState;
    return !N.destroyed && (N.bufferedIndex < N.buffered.length || N[Z].length) && t.nextTick(Ee, N), J.call(this, O, j), this;
  }, ne.prototype._undestroy = y.undestroy, ne.prototype._destroy = function(O, j) {
    j(O);
  }, ne.prototype[g.captureRejectionSymbol] = function(O) {
    this.destroy(O);
  };
  var he;
  function pe() {
    return he === void 0 && (he = {}), he;
  }
  ne.fromWeb = function(O, j) {
    return pe().newStreamWritableFromWritableStream(O, j);
  }, ne.toWeb = function(O) {
    return pe().newWritableStreamFromStreamWritable(O);
  };
}), el = me((e, i) => {
  ae(), se(), oe();
  var t = er(), l = (Xe(), xe(Je)), { isReadable: h, isWritable: o, isIterable: r, isNodeStream: s, isReadableNodeStream: n, isWritableNodeStream: a, isDuplexNodeStream: c } = Rt(), d = jt(), { AbortError: g, codes: { ERR_INVALID_ARG_TYPE: m, ERR_INVALID_RETURN_VALUE: b } } = ot(), { destroyer: y } = sr(), T = Ct(), U = Fr(), { createDeferredPromise: k } = kt(), I = ls(), D = globalThis.Blob || l.Blob, F = typeof D < "u" ? function(ee) {
    return ee instanceof D;
  } : function(ee) {
    return !1;
  }, R = globalThis.AbortController || Rn().AbortController, { FunctionPrototypeCall: C } = Ke(), x = class extends T {
    constructor(ee) {
      super(ee), (ee == null ? void 0 : ee.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (ee == null ? void 0 : ee.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  };
  i.exports = function ee(E, $) {
    if (c(E))
      return E;
    if (n(E))
      return G({ readable: E });
    if (a(E))
      return G({ writable: E });
    if (s(E))
      return G({ writable: !1, readable: !1 });
    if (typeof E == "function") {
      let { value: K, write: ge, final: ne, destroy: q } = W(E);
      if (r(K))
        return I(x, K, { objectMode: !0, write: ge, final: ne, destroy: q });
      let be = K == null ? void 0 : K.then;
      if (typeof be == "function") {
        let re, ve = C(be, K, (S) => {
          if (S != null)
            throw new b("nully", "body", S);
        }, (S) => {
          y(re, S);
        });
        return re = new x({ objectMode: !0, readable: !1, write: ge, final(S) {
          ne(async () => {
            try {
              await ve, t.nextTick(S, null);
            } catch (Q) {
              t.nextTick(S, Q);
            }
          });
        }, destroy: q });
      }
      throw new b("Iterable, AsyncIterable or AsyncFunction", $, K);
    }
    if (F(E))
      return ee(E.arrayBuffer());
    if (r(E))
      return I(x, E, { objectMode: !0, writable: !1 });
    if (typeof (E == null ? void 0 : E.writable) == "object" || typeof (E == null ? void 0 : E.readable) == "object") {
      let K = E != null && E.readable ? n(E == null ? void 0 : E.readable) ? E == null ? void 0 : E.readable : ee(E.readable) : void 0, ge = E != null && E.writable ? a(E == null ? void 0 : E.writable) ? E == null ? void 0 : E.writable : ee(E.writable) : void 0;
      return G({ readable: K, writable: ge });
    }
    let Z = E == null ? void 0 : E.then;
    if (typeof Z == "function") {
      let K;
      return C(Z, E, (ge) => {
        ge != null && K.push(ge), K.push(null);
      }, (ge) => {
        y(K, ge);
      }), K = new x({ objectMode: !0, writable: !1, read() {
      } });
    }
    throw new m($, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], E);
  };
  function W(ee) {
    let { promise: E, resolve: $ } = k(), Z = new R(), K = Z.signal;
    return { value: ee(async function* () {
      for (; ; ) {
        let ge = E;
        E = null;
        let { chunk: ne, done: q, cb: be } = await ge;
        if (t.nextTick(be), q)
          return;
        if (K.aborted)
          throw new g(void 0, { cause: K.reason });
        ({ promise: E, resolve: $ } = k()), yield ne;
      }
    }(), { signal: K }), write(ge, ne, q) {
      let be = $;
      $ = null, be({ chunk: ge, done: !1, cb: q });
    }, final(ge) {
      let ne = $;
      $ = null, ne({ done: !0, cb: ge });
    }, destroy(ge, ne) {
      Z.abort(), ne(ge);
    } };
  }
  function G(ee) {
    let E = ee.readable && typeof ee.readable.read != "function" ? U.wrap(ee.readable) : ee.readable, $ = ee.writable, Z = !!h(E), K = !!o($), ge, ne, q, be, re;
    function ve(S) {
      let Q = be;
      be = null, Q ? Q(S) : S && re.destroy(S);
    }
    return re = new x({ readableObjectMode: !!(E != null && E.readableObjectMode), writableObjectMode: !!($ != null && $.writableObjectMode), readable: Z, writable: K }), K && (d($, (S) => {
      K = !1, S && y(E, S), ve(S);
    }), re._write = function(S, Q, ce) {
      $.write(S, Q) ? ce() : ge = ce;
    }, re._final = function(S) {
      $.end(), ne = S;
    }, $.on("drain", function() {
      if (ge) {
        let S = ge;
        ge = null, S();
      }
    }), $.on("finish", function() {
      if (ne) {
        let S = ne;
        ne = null, S();
      }
    })), Z && (d(E, (S) => {
      Z = !1, S && y(E, S), ve(S);
    }), E.on("readable", function() {
      if (q) {
        let S = q;
        q = null, S();
      }
    }), E.on("end", function() {
      re.push(null);
    }), re._read = function() {
      for (; ; ) {
        let S = E.read();
        if (S === null) {
          q = re._read;
          return;
        }
        if (!re.push(S))
          return;
      }
    }), re._destroy = function(S, Q) {
      !S && be !== null && (S = new g()), q = null, ge = null, ne = null, be === null ? Q(S) : (be = Q, y($, S), y(E, S));
    }, re;
  }
}), Ct = me((e, i) => {
  ae(), se(), oe();
  var { ObjectDefineProperties: t, ObjectGetOwnPropertyDescriptor: l, ObjectKeys: h, ObjectSetPrototypeOf: o } = Ke();
  i.exports = n;
  var r = Fr(), s = us();
  o(n.prototype, r.prototype), o(n, r);
  {
    let g = h(s.prototype);
    for (let m = 0; m < g.length; m++) {
      let b = g[m];
      n.prototype[b] || (n.prototype[b] = s.prototype[b]);
    }
  }
  function n(g) {
    if (!(this instanceof n))
      return new n(g);
    r.call(this, g), s.call(this, g), g ? (this.allowHalfOpen = g.allowHalfOpen !== !1, g.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), g.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  t(n.prototype, { writable: { __proto__: null, ...l(s.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...l(s.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...l(s.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...l(s.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...l(s.prototype, "writableLength") }, writableFinished: { __proto__: null, ...l(s.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...l(s.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...l(s.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...l(s.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
    return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
  }, set(g) {
    this._readableState && this._writableState && (this._readableState.destroyed = g, this._writableState.destroyed = g);
  } } });
  var a;
  function c() {
    return a === void 0 && (a = {}), a;
  }
  n.fromWeb = function(g, m) {
    return c().newStreamDuplexFromReadableWritablePair(g, m);
  }, n.toWeb = function(g) {
    return c().newReadableWritablePairFromDuplex(g);
  };
  var d;
  n.from = function(g) {
    return d || (d = el()), d(g, "body");
  };
}), hs = me((e, i) => {
  ae(), se(), oe();
  var { ObjectSetPrototypeOf: t, Symbol: l } = Ke();
  i.exports = n;
  var { ERR_METHOD_NOT_IMPLEMENTED: h } = ot().codes, o = Ct(), { getHighWaterMark: r } = Bn();
  t(n.prototype, o.prototype), t(n, o);
  var s = l("kCallback");
  function n(d) {
    if (!(this instanceof n))
      return new n(d);
    let g = d ? r(this, d, "readableHighWaterMark", !0) : null;
    g === 0 && (d = { ...d, highWaterMark: null, readableHighWaterMark: g, writableHighWaterMark: d.writableHighWaterMark || 0 }), o.call(this, d), this._readableState.sync = !1, this[s] = null, d && (typeof d.transform == "function" && (this._transform = d.transform), typeof d.flush == "function" && (this._flush = d.flush)), this.on("prefinish", c);
  }
  function a(d) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((g, m) => {
      if (g) {
        d ? d(g) : this.destroy(g);
        return;
      }
      m != null && this.push(m), this.push(null), d && d();
    }) : (this.push(null), d && d());
  }
  function c() {
    this._final !== a && a.call(this);
  }
  n.prototype._final = a, n.prototype._transform = function(d, g, m) {
    throw new h("_transform()");
  }, n.prototype._write = function(d, g, m) {
    let b = this._readableState, y = this._writableState, T = b.length;
    this._transform(d, g, (U, k) => {
      if (U) {
        m(U);
        return;
      }
      k != null && this.push(k), y.ended || T === b.length || b.length < b.highWaterMark ? m() : this[s] = m;
    });
  }, n.prototype._read = function() {
    if (this[s]) {
      let d = this[s];
      this[s] = null, d();
    }
  };
}), cs = me((e, i) => {
  ae(), se(), oe();
  var { ObjectSetPrototypeOf: t } = Ke();
  i.exports = h;
  var l = hs();
  t(h.prototype, l.prototype), t(h, l);
  function h(o) {
    if (!(this instanceof h))
      return new h(o);
    l.call(this, o);
  }
  h.prototype._transform = function(o, r, s) {
    s(null, o);
  };
}), Un = me((e, i) => {
  ae(), se(), oe();
  var t = er(), { ArrayIsArray: l, Promise: h, SymbolAsyncIterator: o } = Ke(), r = jt(), { once: s } = kt(), n = sr(), a = Ct(), { aggregateTwoErrors: c, codes: { ERR_INVALID_ARG_TYPE: d, ERR_INVALID_RETURN_VALUE: g, ERR_MISSING_ARGS: m, ERR_STREAM_DESTROYED: b, ERR_STREAM_PREMATURE_CLOSE: y }, AbortError: T } = ot(), { validateFunction: U, validateAbortSignal: k } = Nr(), { isIterable: I, isReadable: D, isReadableNodeStream: F, isNodeStream: R, isTransformStream: C, isWebStream: x, isReadableStream: W, isReadableEnded: G } = Rt(), ee = globalThis.AbortController || Rn().AbortController, E, $;
  function Z(Q, ce, Ee) {
    let ue = !1;
    Q.on("close", () => {
      ue = !0;
    });
    let M = r(Q, { readable: ce, writable: Ee }, (_) => {
      ue = !_;
    });
    return { destroy: (_) => {
      ue || (ue = !0, n.destroyer(Q, _ || new b("pipe")));
    }, cleanup: M };
  }
  function K(Q) {
    return U(Q[Q.length - 1], "streams[stream.length - 1]"), Q.pop();
  }
  function ge(Q) {
    if (I(Q))
      return Q;
    if (F(Q))
      return ne(Q);
    throw new d("val", ["Readable", "Iterable", "AsyncIterable"], Q);
  }
  async function* ne(Q) {
    $ || ($ = Fr()), yield* $.prototype[o].call(Q);
  }
  async function q(Q, ce, Ee, { end: ue }) {
    let M, _ = null, z = (J) => {
      if (J && (M = J), _) {
        let he = _;
        _ = null, he();
      }
    }, le = () => new h((J, he) => {
      M ? he(M) : _ = () => {
        M ? he(M) : J();
      };
    });
    ce.on("drain", z);
    let X = r(ce, { readable: !1 }, z);
    try {
      ce.writableNeedDrain && await le();
      for await (let J of Q)
        ce.write(J) || await le();
      ue && ce.end(), await le(), Ee();
    } catch (J) {
      Ee(M !== J ? c(M, J) : J);
    } finally {
      X(), ce.off("drain", z);
    }
  }
  async function be(Q, ce, Ee, { end: ue }) {
    C(ce) && (ce = ce.writable);
    let M = ce.getWriter();
    try {
      for await (let _ of Q)
        await M.ready, M.write(_).catch(() => {
        });
      await M.ready, ue && await M.close(), Ee();
    } catch (_) {
      try {
        await M.abort(_), Ee(_);
      } catch (z) {
        Ee(z);
      }
    }
  }
  function re(...Q) {
    return ve(Q, s(K(Q)));
  }
  function ve(Q, ce, Ee) {
    if (Q.length === 1 && l(Q[0]) && (Q = Q[0]), Q.length < 2)
      throw new m("streams");
    let ue = new ee(), M = ue.signal, _ = Ee == null ? void 0 : Ee.signal, z = [];
    k(_, "options.signal");
    function le() {
      j(new T());
    }
    _ == null || _.addEventListener("abort", le);
    let X, J, he = [], pe = 0;
    function O(L) {
      j(L, --pe === 0);
    }
    function j(L, H) {
      if (L && (!X || X.code === "ERR_STREAM_PREMATURE_CLOSE") && (X = L), !(!X && !H)) {
        for (; he.length; )
          he.shift()(X);
        _ == null || _.removeEventListener("abort", le), ue.abort(), H && (X || z.forEach((we) => we()), t.nextTick(ce, X, J));
      }
    }
    let N;
    for (let L = 0; L < Q.length; L++) {
      let H = Q[L], we = L < Q.length - 1, _e = L > 0, Ae = we || (Ee == null ? void 0 : Ee.end) !== !1, Re = L === Q.length - 1;
      if (R(H)) {
        let f = function(u) {
          u && u.name !== "AbortError" && u.code !== "ERR_STREAM_PREMATURE_CLOSE" && O(u);
        };
        if (Ae) {
          let { destroy: u, cleanup: p } = Z(H, we, _e);
          he.push(u), D(H) && Re && z.push(p);
        }
        H.on("error", f), D(H) && Re && z.push(() => {
          H.removeListener("error", f);
        });
      }
      if (L === 0)
        if (typeof H == "function") {
          if (N = H({ signal: M }), !I(N))
            throw new g("Iterable, AsyncIterable or Stream", "source", N);
        } else
          I(H) || F(H) || C(H) ? N = H : N = a.from(H);
      else if (typeof H == "function") {
        if (C(N)) {
          var te;
          N = ge((te = N) === null || te === void 0 ? void 0 : te.readable);
        } else
          N = ge(N);
        if (N = H(N, { signal: M }), we) {
          if (!I(N, !0))
            throw new g("AsyncIterable", `transform[${L - 1}]`, N);
        } else {
          var Y;
          E || (E = cs());
          let f = new E({ objectMode: !0 }), u = (Y = N) === null || Y === void 0 ? void 0 : Y.then;
          if (typeof u == "function")
            pe++, u.call(N, (A) => {
              J = A, A != null && f.write(A), Ae && f.end(), t.nextTick(O);
            }, (A) => {
              f.destroy(A), t.nextTick(O, A);
            });
          else if (I(N, !0))
            pe++, q(N, f, O, { end: Ae });
          else if (W(N) || C(N)) {
            let A = N.readable || N;
            pe++, q(A, f, O, { end: Ae });
          } else
            throw new g("AsyncIterable or Promise", "destination", N);
          N = f;
          let { destroy: p, cleanup: v } = Z(N, !1, !0);
          he.push(p), Re && z.push(v);
        }
      } else if (R(H)) {
        if (F(N)) {
          pe += 2;
          let f = S(N, H, O, { end: Ae });
          D(H) && Re && z.push(f);
        } else if (C(N) || W(N)) {
          let f = N.readable || N;
          pe++, q(f, H, O, { end: Ae });
        } else if (I(N))
          pe++, q(N, H, O, { end: Ae });
        else
          throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], N);
        N = H;
      } else if (x(H)) {
        if (F(N))
          pe++, be(ge(N), H, O, { end: Ae });
        else if (W(N) || I(N))
          pe++, be(N, H, O, { end: Ae });
        else if (C(N))
          pe++, be(N.readable, H, O, { end: Ae });
        else
          throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], N);
        N = H;
      } else
        N = a.from(H);
    }
    return (M != null && M.aborted || _ != null && _.aborted) && t.nextTick(le), N;
  }
  function S(Q, ce, Ee, { end: ue }) {
    let M = !1;
    if (ce.on("close", () => {
      M || Ee(new y());
    }), Q.pipe(ce, { end: !1 }), ue) {
      let _ = function() {
        M = !0, ce.end();
      };
      G(Q) ? t.nextTick(_) : Q.once("end", _);
    } else
      Ee();
    return r(Q, { readable: !0, writable: !1 }, (_) => {
      let z = Q._readableState;
      _ && _.code === "ERR_STREAM_PREMATURE_CLOSE" && z && z.ended && !z.errored && !z.errorEmitted ? Q.once("end", Ee).once("error", Ee) : Ee(_);
    }), r(ce, { readable: !1, writable: !0 }, Ee);
  }
  i.exports = { pipelineImpl: ve, pipeline: re };
}), fs = me((e, i) => {
  ae(), se(), oe();
  var { pipeline: t } = Un(), l = Ct(), { destroyer: h } = sr(), { isNodeStream: o, isReadable: r, isWritable: s, isWebStream: n, isTransformStream: a, isWritableStream: c, isReadableStream: d } = Rt(), { AbortError: g, codes: { ERR_INVALID_ARG_VALUE: m, ERR_MISSING_ARGS: b } } = ot(), y = jt();
  i.exports = function(...T) {
    if (T.length === 0)
      throw new b("streams");
    if (T.length === 1)
      return l.from(T[0]);
    let U = [...T];
    if (typeof T[0] == "function" && (T[0] = l.from(T[0])), typeof T[T.length - 1] == "function") {
      let E = T.length - 1;
      T[E] = l.from(T[E]);
    }
    for (let E = 0; E < T.length; ++E)
      if (!(!o(T[E]) && !n(T[E]))) {
        if (E < T.length - 1 && !(r(T[E]) || d(T[E]) || a(T[E])))
          throw new m(`streams[${E}]`, U[E], "must be readable");
        if (E > 0 && !(s(T[E]) || c(T[E]) || a(T[E])))
          throw new m(`streams[${E}]`, U[E], "must be writable");
      }
    let k, I, D, F, R;
    function C(E) {
      let $ = F;
      F = null, $ ? $(E) : E ? R.destroy(E) : !ee && !G && R.destroy();
    }
    let x = T[0], W = t(T, C), G = !!(s(x) || c(x) || a(x)), ee = !!(r(W) || d(W) || a(W));
    if (R = new l({ writableObjectMode: !!(x != null && x.writableObjectMode), readableObjectMode: !!(W != null && W.writableObjectMode), writable: G, readable: ee }), G) {
      if (o(x))
        R._write = function($, Z, K) {
          x.write($, Z) ? K() : k = K;
        }, R._final = function($) {
          x.end(), I = $;
        }, x.on("drain", function() {
          if (k) {
            let $ = k;
            k = null, $();
          }
        });
      else if (n(x)) {
        let $ = (a(x) ? x.writable : x).getWriter();
        R._write = async function(Z, K, ge) {
          try {
            await $.ready, $.write(Z).catch(() => {
            }), ge();
          } catch (ne) {
            ge(ne);
          }
        }, R._final = async function(Z) {
          try {
            await $.ready, $.close().catch(() => {
            }), I = Z;
          } catch (K) {
            Z(K);
          }
        };
      }
      let E = a(W) ? W.readable : W;
      y(E, () => {
        if (I) {
          let $ = I;
          I = null, $();
        }
      });
    }
    if (ee) {
      if (o(W))
        W.on("readable", function() {
          if (D) {
            let E = D;
            D = null, E();
          }
        }), W.on("end", function() {
          R.push(null);
        }), R._read = function() {
          for (; ; ) {
            let E = W.read();
            if (E === null) {
              D = R._read;
              return;
            }
            if (!R.push(E))
              return;
          }
        };
      else if (n(W)) {
        let E = (a(W) ? W.readable : W).getReader();
        R._read = async function() {
          for (; ; )
            try {
              let { value: $, done: Z } = await E.read();
              if (!R.push($))
                return;
              if (Z) {
                R.push(null);
                return;
              }
            } catch {
              return;
            }
        };
      }
    }
    return R._destroy = function(E, $) {
      !E && F !== null && (E = new g()), D = null, k = null, I = null, F === null ? $(E) : (F = $, o(W) && h(W, E));
    }, R;
  };
}), tl = me((e, i) => {
  ae(), se(), oe();
  var t = globalThis.AbortController || Rn().AbortController, { codes: { ERR_INVALID_ARG_VALUE: l, ERR_INVALID_ARG_TYPE: h, ERR_MISSING_ARGS: o, ERR_OUT_OF_RANGE: r }, AbortError: s } = ot(), { validateAbortSignal: n, validateInteger: a, validateObject: c } = Nr(), d = Ke().Symbol("kWeak"), { finished: g } = jt(), m = fs(), { addAbortSignalNoValidate: b } = jr(), { isWritable: y, isNodeStream: T } = Rt(), { ArrayPrototypePush: U, MathFloor: k, Number: I, NumberIsNaN: D, Promise: F, PromiseReject: R, PromisePrototypeThen: C, Symbol: x } = Ke(), W = x("kEmpty"), G = x("kEof");
  function ee(ue, M) {
    if (M != null && c(M, "options"), (M == null ? void 0 : M.signal) != null && n(M.signal, "options.signal"), T(ue) && !y(ue))
      throw new l("stream", ue, "must be writable");
    let _ = m(this, ue);
    return M != null && M.signal && b(M.signal, _), _;
  }
  function E(ue, M) {
    if (typeof ue != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ue);
    M != null && c(M, "options"), (M == null ? void 0 : M.signal) != null && n(M.signal, "options.signal");
    let _ = 1;
    return (M == null ? void 0 : M.concurrency) != null && (_ = k(M.concurrency)), a(_, "concurrency", 1), (async function* () {
      var z, le;
      let X = new t(), J = this, he = [], pe = X.signal, O = { signal: pe }, j = () => X.abort();
      M != null && (z = M.signal) !== null && z !== void 0 && z.aborted && j(), M == null || (le = M.signal) === null || le === void 0 || le.addEventListener("abort", j);
      let N, te, Y = !1;
      function L() {
        Y = !0;
      }
      async function H() {
        try {
          for await (let Ae of J) {
            var we;
            if (Y)
              return;
            if (pe.aborted)
              throw new s();
            try {
              Ae = ue(Ae, O);
            } catch (Re) {
              Ae = R(Re);
            }
            Ae !== W && (typeof ((we = Ae) === null || we === void 0 ? void 0 : we.catch) == "function" && Ae.catch(L), he.push(Ae), N && (N(), N = null), !Y && he.length && he.length >= _ && await new F((Re) => {
              te = Re;
            }));
          }
          he.push(G);
        } catch (Ae) {
          let Re = R(Ae);
          C(Re, void 0, L), he.push(Re);
        } finally {
          var _e;
          Y = !0, N && (N(), N = null), M == null || (_e = M.signal) === null || _e === void 0 || _e.removeEventListener("abort", j);
        }
      }
      H();
      try {
        for (; ; ) {
          for (; he.length > 0; ) {
            let we = await he[0];
            if (we === G)
              return;
            if (pe.aborted)
              throw new s();
            we !== W && (yield we), he.shift(), te && (te(), te = null);
          }
          await new F((we) => {
            N = we;
          });
        }
      } finally {
        X.abort(), Y = !0, te && (te(), te = null);
      }
    }).call(this);
  }
  function $(ue = void 0) {
    return ue != null && c(ue, "options"), (ue == null ? void 0 : ue.signal) != null && n(ue.signal, "options.signal"), (async function* () {
      let M = 0;
      for await (let z of this) {
        var _;
        if (ue != null && (_ = ue.signal) !== null && _ !== void 0 && _.aborted)
          throw new s({ cause: ue.signal.reason });
        yield [M++, z];
      }
    }).call(this);
  }
  async function Z(ue, M = void 0) {
    for await (let _ of q.call(this, ue, M))
      return !0;
    return !1;
  }
  async function K(ue, M = void 0) {
    if (typeof ue != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ue);
    return !await Z.call(this, async (..._) => !await ue(..._), M);
  }
  async function ge(ue, M) {
    for await (let _ of q.call(this, ue, M))
      return _;
  }
  async function ne(ue, M) {
    if (typeof ue != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ue);
    async function _(z, le) {
      return await ue(z, le), W;
    }
    for await (let z of E.call(this, _, M))
      ;
  }
  function q(ue, M) {
    if (typeof ue != "function")
      throw new h("fn", ["Function", "AsyncFunction"], ue);
    async function _(z, le) {
      return await ue(z, le) ? z : W;
    }
    return E.call(this, _, M);
  }
  var be = class extends o {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  };
  async function re(ue, M, _) {
    var z;
    if (typeof ue != "function")
      throw new h("reducer", ["Function", "AsyncFunction"], ue);
    _ != null && c(_, "options"), (_ == null ? void 0 : _.signal) != null && n(_.signal, "options.signal");
    let le = arguments.length > 1;
    if (_ != null && (z = _.signal) !== null && z !== void 0 && z.aborted) {
      let O = new s(void 0, { cause: _.signal.reason });
      throw this.once("error", () => {
      }), await g(this.destroy(O)), O;
    }
    let X = new t(), J = X.signal;
    if (_ != null && _.signal) {
      let O = { once: !0, [d]: this };
      _.signal.addEventListener("abort", () => X.abort(), O);
    }
    let he = !1;
    try {
      for await (let O of this) {
        var pe;
        if (he = !0, _ != null && (pe = _.signal) !== null && pe !== void 0 && pe.aborted)
          throw new s();
        le ? M = await ue(M, O, { signal: J }) : (M = O, le = !0);
      }
      if (!he && !le)
        throw new be();
    } finally {
      X.abort();
    }
    return M;
  }
  async function ve(ue) {
    ue != null && c(ue, "options"), (ue == null ? void 0 : ue.signal) != null && n(ue.signal, "options.signal");
    let M = [];
    for await (let z of this) {
      var _;
      if (ue != null && (_ = ue.signal) !== null && _ !== void 0 && _.aborted)
        throw new s(void 0, { cause: ue.signal.reason });
      U(M, z);
    }
    return M;
  }
  function S(ue, M) {
    let _ = E.call(this, ue, M);
    return (async function* () {
      for await (let z of _)
        yield* z;
    }).call(this);
  }
  function Q(ue) {
    if (ue = I(ue), D(ue))
      return 0;
    if (ue < 0)
      throw new r("number", ">= 0", ue);
    return ue;
  }
  function ce(ue, M = void 0) {
    return M != null && c(M, "options"), (M == null ? void 0 : M.signal) != null && n(M.signal, "options.signal"), ue = Q(ue), (async function* () {
      var _;
      if (M != null && (_ = M.signal) !== null && _ !== void 0 && _.aborted)
        throw new s();
      for await (let le of this) {
        var z;
        if (M != null && (z = M.signal) !== null && z !== void 0 && z.aborted)
          throw new s();
        ue-- <= 0 && (yield le);
      }
    }).call(this);
  }
  function Ee(ue, M = void 0) {
    return M != null && c(M, "options"), (M == null ? void 0 : M.signal) != null && n(M.signal, "options.signal"), ue = Q(ue), (async function* () {
      var _;
      if (M != null && (_ = M.signal) !== null && _ !== void 0 && _.aborted)
        throw new s();
      for await (let le of this) {
        var z;
        if (M != null && (z = M.signal) !== null && z !== void 0 && z.aborted)
          throw new s();
        if (ue-- > 0)
          yield le;
        else
          return;
      }
    }).call(this);
  }
  i.exports.streamReturningOperators = { asIndexedPairs: $, drop: ce, filter: q, flatMap: S, map: E, take: Ee, compose: ee }, i.exports.promiseReturningOperators = { every: K, forEach: ne, reduce: re, toArray: ve, some: Z, find: ge };
}), ps = me((e, i) => {
  ae(), se(), oe();
  var { ArrayPrototypePop: t, Promise: l } = Ke(), { isIterable: h, isNodeStream: o, isWebStream: r } = Rt(), { pipelineImpl: s } = Un(), { finished: n } = jt();
  ds();
  function a(...c) {
    return new l((d, g) => {
      let m, b, y = c[c.length - 1];
      if (y && typeof y == "object" && !o(y) && !h(y) && !r(y)) {
        let T = t(c);
        m = T.signal, b = T.end;
      }
      s(c, (T, U) => {
        T ? g(T) : d(U);
      }, { signal: m, end: b });
    });
  }
  i.exports = { finished: n, pipeline: a };
}), ds = me((e, i) => {
  ae(), se(), oe();
  var { Buffer: t } = (Xe(), xe(Je)), { ObjectDefineProperty: l, ObjectKeys: h, ReflectApply: o } = Ke(), { promisify: { custom: r } } = kt(), { streamReturningOperators: s, promiseReturningOperators: n } = tl(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: a } } = ot(), c = fs(), { pipeline: d } = Un(), { destroyer: g } = sr(), m = jt(), b = ps(), y = Rt(), T = i.exports = Pn().Stream;
  T.isDisturbed = y.isDisturbed, T.isErrored = y.isErrored, T.isReadable = y.isReadable, T.Readable = Fr();
  for (let k of h(s)) {
    let I = function(...F) {
      if (new.target)
        throw a();
      return T.Readable.from(o(D, this, F));
    }, D = s[k];
    l(I, "name", { __proto__: null, value: D.name }), l(I, "length", { __proto__: null, value: D.length }), l(T.Readable.prototype, k, { __proto__: null, value: I, enumerable: !1, configurable: !0, writable: !0 });
  }
  for (let k of h(n)) {
    let I = function(...F) {
      if (new.target)
        throw a();
      return o(D, this, F);
    }, D = n[k];
    l(I, "name", { __proto__: null, value: D.name }), l(I, "length", { __proto__: null, value: D.length }), l(T.Readable.prototype, k, { __proto__: null, value: I, enumerable: !1, configurable: !0, writable: !0 });
  }
  T.Writable = us(), T.Duplex = Ct(), T.Transform = hs(), T.PassThrough = cs(), T.pipeline = d;
  var { addAbortSignal: U } = jr();
  T.addAbortSignal = U, T.finished = m, T.destroy = g, T.compose = c, l(T, "promises", { __proto__: null, configurable: !0, enumerable: !0, get() {
    return b;
  } }), l(d, r, { __proto__: null, enumerable: !0, get() {
    return b.pipeline;
  } }), l(m, r, { __proto__: null, enumerable: !0, get() {
    return b.finished;
  } }), T.Stream = T, T._isUint8Array = function(k) {
    return k instanceof Uint8Array;
  }, T._uint8ArrayToBuffer = function(k) {
    return t.from(k.buffer, k.byteOffset, k.byteLength);
  };
}), rr = me((e, i) => {
  ae(), se(), oe();
  var t = ds(), l = ps(), h = t.Readable.destroy;
  i.exports = t.Readable, i.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, i.exports._isUint8Array = t._isUint8Array, i.exports.isDisturbed = t.isDisturbed, i.exports.isErrored = t.isErrored, i.exports.isReadable = t.isReadable, i.exports.Readable = t.Readable, i.exports.Writable = t.Writable, i.exports.Duplex = t.Duplex, i.exports.Transform = t.Transform, i.exports.PassThrough = t.PassThrough, i.exports.addAbortSignal = t.addAbortSignal, i.exports.finished = t.finished, i.exports.destroy = t.destroy, i.exports.destroy = h, i.exports.pipeline = t.pipeline, i.exports.compose = t.compose, Object.defineProperty(t, "promises", { configurable: !0, enumerable: !0, get() {
    return l;
  } }), i.exports.Stream = t.Stream, i.exports.default = i.exports;
}), rl = me((e, i) => {
  ae(), se(), oe(), typeof Object.create == "function" ? i.exports = function(t, l) {
    l && (t.super_ = l, t.prototype = Object.create(l.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
  } : i.exports = function(t, l) {
    if (l) {
      t.super_ = l;
      var h = function() {
      };
      h.prototype = l.prototype, t.prototype = new h(), t.prototype.constructor = t;
    }
  };
}), il = me((e, i) => {
  ae(), se(), oe();
  var { Buffer: t } = (Xe(), xe(Je)), l = Symbol.for("BufferList");
  function h(o) {
    if (!(this instanceof h))
      return new h(o);
    h._init.call(this, o);
  }
  h._init = function(o) {
    Object.defineProperty(this, l, { value: !0 }), this._bufs = [], this.length = 0, o && this.append(o);
  }, h.prototype._new = function(o) {
    return new h(o);
  }, h.prototype._offset = function(o) {
    if (o === 0)
      return [0, 0];
    let r = 0;
    for (let s = 0; s < this._bufs.length; s++) {
      let n = r + this._bufs[s].length;
      if (o < n || s === this._bufs.length - 1)
        return [s, o - r];
      r = n;
    }
  }, h.prototype._reverseOffset = function(o) {
    let r = o[0], s = o[1];
    for (let n = 0; n < r; n++)
      s += this._bufs[n].length;
    return s;
  }, h.prototype.get = function(o) {
    if (o > this.length || o < 0)
      return;
    let r = this._offset(o);
    return this._bufs[r[0]][r[1]];
  }, h.prototype.slice = function(o, r) {
    return typeof o == "number" && o < 0 && (o += this.length), typeof r == "number" && r < 0 && (r += this.length), this.copy(null, 0, o, r);
  }, h.prototype.copy = function(o, r, s, n) {
    if ((typeof s != "number" || s < 0) && (s = 0), (typeof n != "number" || n > this.length) && (n = this.length), s >= this.length || n <= 0)
      return o || t.alloc(0);
    let a = !!o, c = this._offset(s), d = n - s, g = d, m = a && r || 0, b = c[1];
    if (s === 0 && n === this.length) {
      if (!a)
        return this._bufs.length === 1 ? this._bufs[0] : t.concat(this._bufs, this.length);
      for (let y = 0; y < this._bufs.length; y++)
        this._bufs[y].copy(o, m), m += this._bufs[y].length;
      return o;
    }
    if (g <= this._bufs[c[0]].length - b)
      return a ? this._bufs[c[0]].copy(o, r, b, b + g) : this._bufs[c[0]].slice(b, b + g);
    a || (o = t.allocUnsafe(d));
    for (let y = c[0]; y < this._bufs.length; y++) {
      let T = this._bufs[y].length - b;
      if (g > T)
        this._bufs[y].copy(o, m, b), m += T;
      else {
        this._bufs[y].copy(o, m, b, b + g), m += T;
        break;
      }
      g -= T, b && (b = 0);
    }
    return o.length > m ? o.slice(0, m) : o;
  }, h.prototype.shallowSlice = function(o, r) {
    if (o = o || 0, r = typeof r != "number" ? this.length : r, o < 0 && (o += this.length), r < 0 && (r += this.length), o === r)
      return this._new();
    let s = this._offset(o), n = this._offset(r), a = this._bufs.slice(s[0], n[0] + 1);
    return n[1] === 0 ? a.pop() : a[a.length - 1] = a[a.length - 1].slice(0, n[1]), s[1] !== 0 && (a[0] = a[0].slice(s[1])), this._new(a);
  }, h.prototype.toString = function(o, r, s) {
    return this.slice(r, s).toString(o);
  }, h.prototype.consume = function(o) {
    if (o = Math.trunc(o), Number.isNaN(o) || o <= 0)
      return this;
    for (; this._bufs.length; )
      if (o >= this._bufs[0].length)
        o -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
      else {
        this._bufs[0] = this._bufs[0].slice(o), this.length -= o;
        break;
      }
    return this;
  }, h.prototype.duplicate = function() {
    let o = this._new();
    for (let r = 0; r < this._bufs.length; r++)
      o.append(this._bufs[r]);
    return o;
  }, h.prototype.append = function(o) {
    if (o == null)
      return this;
    if (o.buffer)
      this._appendBuffer(t.from(o.buffer, o.byteOffset, o.byteLength));
    else if (Array.isArray(o))
      for (let r = 0; r < o.length; r++)
        this.append(o[r]);
    else if (this._isBufferList(o))
      for (let r = 0; r < o._bufs.length; r++)
        this.append(o._bufs[r]);
    else
      typeof o == "number" && (o = o.toString()), this._appendBuffer(t.from(o));
    return this;
  }, h.prototype._appendBuffer = function(o) {
    this._bufs.push(o), this.length += o.length;
  }, h.prototype.indexOf = function(o, r, s) {
    if (s === void 0 && typeof r == "string" && (s = r, r = void 0), typeof o == "function" || Array.isArray(o))
      throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (typeof o == "number" ? o = t.from([o]) : typeof o == "string" ? o = t.from(o, s) : this._isBufferList(o) ? o = o.slice() : Array.isArray(o.buffer) ? o = t.from(o.buffer, o.byteOffset, o.byteLength) : t.isBuffer(o) || (o = t.from(o)), r = Number(r || 0), isNaN(r) && (r = 0), r < 0 && (r = this.length + r), r < 0 && (r = 0), o.length === 0)
      return r > this.length ? this.length : r;
    let n = this._offset(r), a = n[0], c = n[1];
    for (; a < this._bufs.length; a++) {
      let d = this._bufs[a];
      for (; c < d.length; )
        if (d.length - c >= o.length) {
          let g = d.indexOf(o, c);
          if (g !== -1)
            return this._reverseOffset([a, g]);
          c = d.length - o.length + 1;
        } else {
          let g = this._reverseOffset([a, c]);
          if (this._match(g, o))
            return g;
          c++;
        }
      c = 0;
    }
    return -1;
  }, h.prototype._match = function(o, r) {
    if (this.length - o < r.length)
      return !1;
    for (let s = 0; s < r.length; s++)
      if (this.get(o + s) !== r[s])
        return !1;
    return !0;
  }, function() {
    let o = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readBigInt64BE: 8, readBigInt64LE: 8, readBigUInt64BE: 8, readBigUInt64LE: 8, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null };
    for (let r in o)
      (function(s) {
        o[s] === null ? h.prototype[s] = function(n, a) {
          return this.slice(n, n + a)[s](0, a);
        } : h.prototype[s] = function(n = 0) {
          return this.slice(n, n + o[s])[s](0);
        };
      })(r);
  }(), h.prototype._isBufferList = function(o) {
    return o instanceof h || h.isBufferList(o);
  }, h.isBufferList = function(o) {
    return o != null && o[l];
  }, i.exports = h;
}), nl = me((e, i) => {
  ae(), se(), oe();
  var t = rr().Duplex, l = rl(), h = il();
  function o(r) {
    if (!(this instanceof o))
      return new o(r);
    if (typeof r == "function") {
      this._callback = r;
      let s = (function(n) {
        this._callback && (this._callback(n), this._callback = null);
      }).bind(this);
      this.on("pipe", function(n) {
        n.on("error", s);
      }), this.on("unpipe", function(n) {
        n.removeListener("error", s);
      }), r = null;
    }
    h._init.call(this, r), t.call(this);
  }
  l(o, t), Object.assign(o.prototype, h.prototype), o.prototype._new = function(r) {
    return new o(r);
  }, o.prototype._write = function(r, s, n) {
    this._appendBuffer(r), typeof n == "function" && n();
  }, o.prototype._read = function(r) {
    if (!this.length)
      return this.push(null);
    r = Math.min(r, this.length), this.push(this.slice(0, r)), this.consume(r);
  }, o.prototype.end = function(r) {
    t.prototype.end.call(this, r), this._callback && (this._callback(null, this.slice()), this._callback = null);
  }, o.prototype._destroy = function(r, s) {
    this._bufs.length = 0, this.length = 0, s(r);
  }, o.prototype._isBufferList = function(r) {
    return r instanceof o || r instanceof h || o.isBufferList(r);
  }, o.isBufferList = h.isBufferList, i.exports = o, i.exports.BufferListStream = o, i.exports.BufferList = h;
}), ol = me((e, i) => {
  ae(), se(), oe();
  var t = class {
    constructor() {
      this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null;
    }
  };
  i.exports = t;
}), gs = me((e, i) => {
  ae(), se(), oe();
  var t = i.exports, { Buffer: l } = (Xe(), xe(Je));
  t.types = { 0: "reserved", 1: "connect", 2: "connack", 3: "publish", 4: "puback", 5: "pubrec", 6: "pubrel", 7: "pubcomp", 8: "subscribe", 9: "suback", 10: "unsubscribe", 11: "unsuback", 12: "pingreq", 13: "pingresp", 14: "disconnect", 15: "auth" }, t.requiredHeaderFlags = { 1: 0, 2: 0, 4: 0, 5: 0, 6: 2, 7: 0, 8: 2, 9: 0, 10: 2, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 }, t.requiredHeaderFlagsErrors = {};
  for (let o in t.requiredHeaderFlags) {
    let r = t.requiredHeaderFlags[o];
    t.requiredHeaderFlagsErrors[o] = "Invalid header flag bits, must be 0x" + r.toString(16) + " for " + t.types[o] + " packet";
  }
  t.codes = {};
  for (let o in t.types) {
    let r = t.types[o];
    t.codes[r] = o;
  }
  t.CMD_SHIFT = 4, t.CMD_MASK = 240, t.DUP_MASK = 8, t.QOS_MASK = 3, t.QOS_SHIFT = 1, t.RETAIN_MASK = 1, t.VARBYTEINT_MASK = 127, t.VARBYTEINT_FIN_MASK = 128, t.VARBYTEINT_MAX = 268435455, t.SESSIONPRESENT_MASK = 1, t.SESSIONPRESENT_HEADER = l.from([t.SESSIONPRESENT_MASK]), t.CONNACK_HEADER = l.from([t.codes.connack << t.CMD_SHIFT]), t.USERNAME_MASK = 128, t.PASSWORD_MASK = 64, t.WILL_RETAIN_MASK = 32, t.WILL_QOS_MASK = 24, t.WILL_QOS_SHIFT = 3, t.WILL_FLAG_MASK = 4, t.CLEAN_SESSION_MASK = 2, t.CONNECT_HEADER = l.from([t.codes.connect << t.CMD_SHIFT]), t.properties = { sessionExpiryInterval: 17, willDelayInterval: 24, receiveMaximum: 33, maximumPacketSize: 39, topicAliasMaximum: 34, requestResponseInformation: 25, requestProblemInformation: 23, userProperties: 38, authenticationMethod: 21, authenticationData: 22, payloadFormatIndicator: 1, messageExpiryInterval: 2, contentType: 3, responseTopic: 8, correlationData: 9, maximumQoS: 36, retainAvailable: 37, assignedClientIdentifier: 18, reasonString: 31, wildcardSubscriptionAvailable: 40, subscriptionIdentifiersAvailable: 41, sharedSubscriptionAvailable: 42, serverKeepAlive: 19, responseInformation: 26, serverReference: 28, topicAlias: 35, subscriptionIdentifier: 11 }, t.propertiesCodes = {};
  for (let o in t.properties) {
    let r = t.properties[o];
    t.propertiesCodes[r] = o;
  }
  t.propertiesTypes = { sessionExpiryInterval: "int32", willDelayInterval: "int32", receiveMaximum: "int16", maximumPacketSize: "int32", topicAliasMaximum: "int16", requestResponseInformation: "byte", requestProblemInformation: "byte", userProperties: "pair", authenticationMethod: "string", authenticationData: "binary", payloadFormatIndicator: "byte", messageExpiryInterval: "int32", contentType: "string", responseTopic: "string", correlationData: "binary", maximumQoS: "int8", retainAvailable: "byte", assignedClientIdentifier: "string", reasonString: "string", wildcardSubscriptionAvailable: "byte", subscriptionIdentifiersAvailable: "byte", sharedSubscriptionAvailable: "byte", serverKeepAlive: "int16", responseInformation: "string", serverReference: "string", topicAlias: "int16", subscriptionIdentifier: "var" };
  function h(o) {
    return [0, 1, 2].map((r) => [0, 1].map((s) => [0, 1].map((n) => {
      let a = l.alloc(1);
      return a.writeUInt8(t.codes[o] << t.CMD_SHIFT | (s ? t.DUP_MASK : 0) | r << t.QOS_SHIFT | n, 0, !0), a;
    })));
  }
  t.PUBLISH_HEADER = h("publish"), t.SUBSCRIBE_HEADER = h("subscribe"), t.SUBSCRIBE_OPTIONS_QOS_MASK = 3, t.SUBSCRIBE_OPTIONS_NL_MASK = 1, t.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, t.SUBSCRIBE_OPTIONS_RAP_MASK = 1, t.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, t.SUBSCRIBE_OPTIONS_RH_MASK = 3, t.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, t.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], t.SUBSCRIBE_OPTIONS_NL = 4, t.SUBSCRIBE_OPTIONS_RAP = 8, t.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], t.UNSUBSCRIBE_HEADER = h("unsubscribe"), t.ACKS = { unsuback: h("unsuback"), puback: h("puback"), pubcomp: h("pubcomp"), pubrel: h("pubrel"), pubrec: h("pubrec") }, t.SUBACK_HEADER = l.from([t.codes.suback << t.CMD_SHIFT]), t.VERSION3 = l.from([3]), t.VERSION4 = l.from([4]), t.VERSION5 = l.from([5]), t.VERSION131 = l.from([131]), t.VERSION132 = l.from([132]), t.QOS = [0, 1, 2].map((o) => l.from([o])), t.EMPTY = { pingreq: l.from([t.codes.pingreq << 4, 0]), pingresp: l.from([t.codes.pingresp << 4, 0]), disconnect: l.from([t.codes.disconnect << 4, 0]) }, t.MQTT5_PUBACK_PUBREC_CODES = { 0: "Success", 16: "No matching subscribers", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 144: "Topic Name invalid", 145: "Packet identifier in use", 151: "Quota exceeded", 153: "Payload format invalid" }, t.MQTT5_PUBREL_PUBCOMP_CODES = { 0: "Success", 146: "Packet Identifier not found" }, t.MQTT5_SUBACK_CODES = { 0: "Granted QoS 0", 1: "Granted QoS 1", 2: "Granted QoS 2", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use", 151: "Quota exceeded", 158: "Shared Subscriptions not supported", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, t.MQTT5_UNSUBACK_CODES = { 0: "Success", 17: "No subscription existed", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use" }, t.MQTT5_DISCONNECT_CODES = { 0: "Normal disconnection", 4: "Disconnect with Will Message", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 135: "Not authorized", 137: "Server busy", 139: "Server shutting down", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, t.MQTT5_AUTH_CODES = { 0: "Success", 24: "Continue authentication", 25: "Re-authenticate" };
}), sl = me((e, i) => {
  ae(), se(), oe();
  var t = 1e3, l = t * 60, h = l * 60, o = h * 24, r = o * 7, s = o * 365.25;
  i.exports = function(g, m) {
    m = m || {};
    var b = typeof g;
    if (b === "string" && g.length > 0)
      return n(g);
    if (b === "number" && isFinite(g))
      return m.long ? c(g) : a(g);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g));
  };
  function n(g) {
    if (g = String(g), !(g.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);
      if (m) {
        var b = parseFloat(m[1]), y = (m[2] || "ms").toLowerCase();
        switch (y) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * s;
          case "weeks":
          case "week":
          case "w":
            return b * r;
          case "days":
          case "day":
          case "d":
            return b * o;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * l;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function a(g) {
    var m = Math.abs(g);
    return m >= o ? Math.round(g / o) + "d" : m >= h ? Math.round(g / h) + "h" : m >= l ? Math.round(g / l) + "m" : m >= t ? Math.round(g / t) + "s" : g + "ms";
  }
  function c(g) {
    var m = Math.abs(g);
    return m >= o ? d(g, m, o, "day") : m >= h ? d(g, m, h, "hour") : m >= l ? d(g, m, l, "minute") : m >= t ? d(g, m, t, "second") : g + " ms";
  }
  function d(g, m, b, y) {
    var T = m >= b * 1.5;
    return Math.round(g / b) + " " + y + (T ? "s" : "");
  }
}), al = me((e, i) => {
  ae(), se(), oe();
  function t(l) {
    o.debug = o, o.default = o, o.coerce = d, o.disable = n, o.enable = s, o.enabled = a, o.humanize = sl(), o.destroy = g, Object.keys(l).forEach((m) => {
      o[m] = l[m];
    }), o.names = [], o.skips = [], o.formatters = {};
    function h(m) {
      let b = 0;
      for (let y = 0; y < m.length; y++)
        b = (b << 5) - b + m.charCodeAt(y), b |= 0;
      return o.colors[Math.abs(b) % o.colors.length];
    }
    o.selectColor = h;
    function o(m) {
      let b, y = null, T, U;
      function k(...I) {
        if (!k.enabled)
          return;
        let D = k, F = Number(/* @__PURE__ */ new Date()), R = F - (b || F);
        D.diff = R, D.prev = b, D.curr = F, b = F, I[0] = o.coerce(I[0]), typeof I[0] != "string" && I.unshift("%O");
        let C = 0;
        I[0] = I[0].replace(/%([a-zA-Z%])/g, (x, W) => {
          if (x === "%%")
            return "%";
          C++;
          let G = o.formatters[W];
          if (typeof G == "function") {
            let ee = I[C];
            x = G.call(D, ee), I.splice(C, 1), C--;
          }
          return x;
        }), o.formatArgs.call(D, I), (D.log || o.log).apply(D, I);
      }
      return k.namespace = m, k.useColors = o.useColors(), k.color = o.selectColor(m), k.extend = r, k.destroy = o.destroy, Object.defineProperty(k, "enabled", { enumerable: !0, configurable: !1, get: () => y !== null ? y : (T !== o.namespaces && (T = o.namespaces, U = o.enabled(m)), U), set: (I) => {
        y = I;
      } }), typeof o.init == "function" && o.init(k), k;
    }
    function r(m, b) {
      let y = o(this.namespace + (typeof b > "u" ? ":" : b) + m);
      return y.log = this.log, y;
    }
    function s(m) {
      o.save(m), o.namespaces = m, o.names = [], o.skips = [];
      let b, y = (typeof m == "string" ? m : "").split(/[\s,]+/), T = y.length;
      for (b = 0; b < T; b++)
        y[b] && (m = y[b].replace(/\*/g, ".*?"), m[0] === "-" ? o.skips.push(new RegExp("^" + m.slice(1) + "$")) : o.names.push(new RegExp("^" + m + "$")));
    }
    function n() {
      let m = [...o.names.map(c), ...o.skips.map(c).map((b) => "-" + b)].join(",");
      return o.enable(""), m;
    }
    function a(m) {
      if (m[m.length - 1] === "*")
        return !0;
      let b, y;
      for (b = 0, y = o.skips.length; b < y; b++)
        if (o.skips[b].test(m))
          return !1;
      for (b = 0, y = o.names.length; b < y; b++)
        if (o.names[b].test(m))
          return !0;
      return !1;
    }
    function c(m) {
      return m.toString().substring(2, m.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function d(m) {
      return m instanceof Error ? m.stack || m.message : m;
    }
    function g() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return o.enable(o.load()), o;
  }
  i.exports = t;
}), Ot = me((e, i) => {
  ae(), se(), oe(), e.formatArgs = l, e.save = h, e.load = o, e.useColors = t, e.storage = r(), e.destroy = /* @__PURE__ */ (() => {
    let n = !1;
    return () => {
      n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function t() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof at < "u" && at.userAgent && at.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof at < "u" && at.userAgent && at.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof at < "u" && at.userAgent && at.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function l(n) {
    if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + i.exports.humanize(this.diff), !this.useColors)
      return;
    let a = "color: " + this.color;
    n.splice(1, 0, a, "color: inherit");
    let c = 0, d = 0;
    n[0].replace(/%[a-zA-Z%]/g, (g) => {
      g !== "%%" && (c++, g === "%c" && (d = c));
    }), n.splice(d, 0, a);
  }
  e.log = console.debug || console.log || (() => {
  });
  function h(n) {
    try {
      n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function o() {
    let n;
    try {
      n = e.storage.getItem("debug");
    } catch {
    }
    return !n && typeof Ue < "u" && "env" in Ue && (n = Ue.env.DEBUG), n;
  }
  function r() {
    try {
      return localStorage;
    } catch {
    }
  }
  i.exports = al()(e);
  var { formatters: s } = i.exports;
  s.j = function(n) {
    try {
      return JSON.stringify(n);
    } catch (a) {
      return "[UnexpectedJSONParseError]: " + a.message;
    }
  };
}), ll = me((e, i) => {
  ae(), se(), oe();
  var t = nl(), { EventEmitter: l } = (ar(), xe(tr)), h = ol(), o = gs(), r = Ot()("mqtt-packet:parser"), s = class dn extends l {
    constructor() {
      super(), this.parser = this.constructor.parser;
    }
    static parser(a) {
      return this instanceof dn ? (this.settings = a || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : new dn().parser(a);
    }
    _resetState() {
      r("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new h(), this.error = null, this._list = t(), this._stateCounter = 0;
    }
    parse(a) {
      for (this.error && this._resetState(), this._list.append(a), r("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; )
        this._stateCounter++, r("parse: state complete. _stateCounter is now: %d", this._stateCounter), r("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
      return r("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length;
    }
    _parseHeader() {
      let a = this._list.readUInt8(0), c = a >> o.CMD_SHIFT;
      this.packet.cmd = o.types[c];
      let d = a & 15, g = o.requiredHeaderFlags[c];
      return g != null && d !== g ? this._emitError(new Error(o.requiredHeaderFlagsErrors[c])) : (this.packet.retain = (a & o.RETAIN_MASK) !== 0, this.packet.qos = a >> o.QOS_SHIFT & o.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (a & o.DUP_MASK) !== 0, r("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0));
    }
    _parseLength() {
      let a = this._parseVarByteNum(!0);
      return a && (this.packet.length = a.value, this._list.consume(a.bytes)), r("_parseLength %d", a.value), !!a;
    }
    _parsePayload() {
      r("_parsePayload: payload %O", this._list);
      let a = !1;
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
        a = !0;
      }
      return r("_parsePayload complete result: %s", a), a;
    }
    _parseConnect() {
      r("_parseConnect");
      let a, c, d, g, m = {}, b = this.packet, y = this._parseString();
      if (y === null)
        return this._emitError(new Error("Cannot parse protocolId"));
      if (y !== "MQTT" && y !== "MQIsdp")
        return this._emitError(new Error("Invalid protocolId"));
      if (b.protocolId = y, this._pos >= this._list.length)
        return this._emitError(new Error("Packet too short"));
      if (b.protocolVersion = this._list.readUInt8(this._pos), b.protocolVersion >= 128 && (b.bridgeMode = !0, b.protocolVersion = b.protocolVersion - 128), b.protocolVersion !== 3 && b.protocolVersion !== 4 && b.protocolVersion !== 5)
        return this._emitError(new Error("Invalid protocol version"));
      if (this._pos++, this._pos >= this._list.length)
        return this._emitError(new Error("Packet too short"));
      if (this._list.readUInt8(this._pos) & 1)
        return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
      m.username = this._list.readUInt8(this._pos) & o.USERNAME_MASK, m.password = this._list.readUInt8(this._pos) & o.PASSWORD_MASK, m.will = this._list.readUInt8(this._pos) & o.WILL_FLAG_MASK;
      let T = !!(this._list.readUInt8(this._pos) & o.WILL_RETAIN_MASK), U = (this._list.readUInt8(this._pos) & o.WILL_QOS_MASK) >> o.WILL_QOS_SHIFT;
      if (m.will)
        b.will = {}, b.will.retain = T, b.will.qos = U;
      else {
        if (T)
          return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
        if (U)
          return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
      }
      if (b.clean = (this._list.readUInt8(this._pos) & o.CLEAN_SESSION_MASK) !== 0, this._pos++, b.keepalive = this._parseNum(), b.keepalive === -1)
        return this._emitError(new Error("Packet too short"));
      if (b.protocolVersion === 5) {
        let I = this._parseProperties();
        Object.getOwnPropertyNames(I).length && (b.properties = I);
      }
      let k = this._parseString();
      if (k === null)
        return this._emitError(new Error("Packet too short"));
      if (b.clientId = k, r("_parseConnect: packet.clientId: %s", b.clientId), m.will) {
        if (b.protocolVersion === 5) {
          let I = this._parseProperties();
          Object.getOwnPropertyNames(I).length && (b.will.properties = I);
        }
        if (a = this._parseString(), a === null)
          return this._emitError(new Error("Cannot parse will topic"));
        if (b.will.topic = a, r("_parseConnect: packet.will.topic: %s", b.will.topic), c = this._parseBuffer(), c === null)
          return this._emitError(new Error("Cannot parse will payload"));
        b.will.payload = c, r("_parseConnect: packet.will.paylaod: %s", b.will.payload);
      }
      if (m.username) {
        if (g = this._parseString(), g === null)
          return this._emitError(new Error("Cannot parse username"));
        b.username = g, r("_parseConnect: packet.username: %s", b.username);
      }
      if (m.password) {
        if (d = this._parseBuffer(), d === null)
          return this._emitError(new Error("Cannot parse password"));
        b.password = d;
      }
      return this.settings = b, r("_parseConnect: complete"), b;
    }
    _parseConnack() {
      r("_parseConnack");
      let a = this.packet;
      if (this._list.length < 1)
        return null;
      let c = this._list.readUInt8(this._pos++);
      if (c > 1)
        return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
      if (a.sessionPresent = !!(c & o.SESSIONPRESENT_MASK), this.settings.protocolVersion === 5)
        this._list.length >= 2 ? a.reasonCode = this._list.readUInt8(this._pos++) : a.reasonCode = 0;
      else {
        if (this._list.length < 2)
          return null;
        a.returnCode = this._list.readUInt8(this._pos++);
      }
      if (a.returnCode === -1 || a.reasonCode === -1)
        return this._emitError(new Error("Cannot parse return code"));
      if (this.settings.protocolVersion === 5) {
        let d = this._parseProperties();
        Object.getOwnPropertyNames(d).length && (a.properties = d);
      }
      r("_parseConnack: complete");
    }
    _parsePublish() {
      r("_parsePublish");
      let a = this.packet;
      if (a.topic = this._parseString(), a.topic === null)
        return this._emitError(new Error("Cannot parse topic"));
      if (!(a.qos > 0 && !this._parseMessageId())) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
        a.payload = this._list.slice(this._pos, a.length), r("_parsePublish: payload from buffer list: %o", a.payload);
      }
    }
    _parseSubscribe() {
      r("_parseSubscribe");
      let a = this.packet, c, d, g, m, b, y, T;
      if (a.subscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let U = this._parseProperties();
          Object.getOwnPropertyNames(U).length && (a.properties = U);
        }
        if (a.length <= 0)
          return this._emitError(new Error("Malformed subscribe, no payload specified"));
        for (; this._pos < a.length; ) {
          if (c = this._parseString(), c === null)
            return this._emitError(new Error("Cannot parse topic"));
          if (this._pos >= a.length)
            return this._emitError(new Error("Malformed Subscribe Payload"));
          if (d = this._parseByte(), this.settings.protocolVersion === 5) {
            if (d & 192)
              return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
          } else if (d & 252)
            return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
          if (g = d & o.SUBSCRIBE_OPTIONS_QOS_MASK, g > 2)
            return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
          if (y = (d >> o.SUBSCRIBE_OPTIONS_NL_SHIFT & o.SUBSCRIBE_OPTIONS_NL_MASK) !== 0, b = (d >> o.SUBSCRIBE_OPTIONS_RAP_SHIFT & o.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0, m = d >> o.SUBSCRIBE_OPTIONS_RH_SHIFT & o.SUBSCRIBE_OPTIONS_RH_MASK, m > 2)
            return this._emitError(new Error("Invalid retain handling, must be <= 2"));
          T = { topic: c, qos: g }, this.settings.protocolVersion === 5 ? (T.nl = y, T.rap = b, T.rh = m) : this.settings.bridgeMode && (T.rh = 0, T.rap = !0, T.nl = !0), r("_parseSubscribe: push subscription `%s` to subscription", T), a.subscriptions.push(T);
        }
      }
    }
    _parseSuback() {
      r("_parseSuback");
      let a = this.packet;
      if (this.packet.granted = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
        if (a.length <= 0)
          return this._emitError(new Error("Malformed suback, no payload specified"));
        for (; this._pos < this.packet.length; ) {
          let c = this._list.readUInt8(this._pos++);
          if (this.settings.protocolVersion === 5) {
            if (!o.MQTT5_SUBACK_CODES[c])
              return this._emitError(new Error("Invalid suback code"));
          } else if (c > 2 && c !== 128)
            return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
          this.packet.granted.push(c);
        }
      }
    }
    _parseUnsubscribe() {
      r("_parseUnsubscribe");
      let a = this.packet;
      if (a.unsubscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
        if (a.length <= 0)
          return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
        for (; this._pos < a.length; ) {
          let c = this._parseString();
          if (c === null)
            return this._emitError(new Error("Cannot parse topic"));
          r("_parseUnsubscribe: push topic `%s` to unsubscriptions", c), a.unsubscriptions.push(c);
        }
      }
    }
    _parseUnsuback() {
      r("_parseUnsuback");
      let a = this.packet;
      if (!this._parseMessageId())
        return this._emitError(new Error("Cannot parse messageId"));
      if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && a.length !== 2)
        return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
      if (a.length <= 0)
        return this._emitError(new Error("Malformed unsuback, no payload specified"));
      if (this.settings.protocolVersion === 5) {
        let c = this._parseProperties();
        for (Object.getOwnPropertyNames(c).length && (a.properties = c), a.granted = []; this._pos < this.packet.length; ) {
          let d = this._list.readUInt8(this._pos++);
          if (!o.MQTT5_UNSUBACK_CODES[d])
            return this._emitError(new Error("Invalid unsuback code"));
          this.packet.granted.push(d);
        }
      }
    }
    _parseConfirmation() {
      r("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
      let a = this.packet;
      if (this._parseMessageId(), this.settings.protocolVersion === 5) {
        if (a.length > 2) {
          switch (a.reasonCode = this._parseByte(), this.packet.cmd) {
            case "puback":
            case "pubrec":
              if (!o.MQTT5_PUBACK_PUBREC_CODES[a.reasonCode])
                return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
            case "pubrel":
            case "pubcomp":
              if (!o.MQTT5_PUBREL_PUBCOMP_CODES[a.reasonCode])
                return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
          }
          r("_parseConfirmation: packet.reasonCode `%d`", a.reasonCode);
        } else
          a.reasonCode = 0;
        if (a.length > 3) {
          let c = this._parseProperties();
          Object.getOwnPropertyNames(c).length && (a.properties = c);
        }
      }
      return !0;
    }
    _parseDisconnect() {
      let a = this.packet;
      if (r("_parseDisconnect"), this.settings.protocolVersion === 5) {
        this._list.length > 0 ? (a.reasonCode = this._parseByte(), o.MQTT5_DISCONNECT_CODES[a.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : a.reasonCode = 0;
        let c = this._parseProperties();
        Object.getOwnPropertyNames(c).length && (a.properties = c);
      }
      return r("_parseDisconnect result: true"), !0;
    }
    _parseAuth() {
      r("_parseAuth");
      let a = this.packet;
      if (this.settings.protocolVersion !== 5)
        return this._emitError(new Error("Not supported auth packet for this version MQTT"));
      if (a.reasonCode = this._parseByte(), !o.MQTT5_AUTH_CODES[a.reasonCode])
        return this._emitError(new Error("Invalid auth reason code"));
      let c = this._parseProperties();
      return Object.getOwnPropertyNames(c).length && (a.properties = c), r("_parseAuth: result: true"), !0;
    }
    _parseMessageId() {
      let a = this.packet;
      return a.messageId = this._parseNum(), a.messageId === null ? (this._emitError(new Error("Cannot parse messageId")), !1) : (r("_parseMessageId: packet.messageId %d", a.messageId), !0);
    }
    _parseString(a) {
      let c = this._parseNum(), d = c + this._pos;
      if (c === -1 || d > this._list.length || d > this.packet.length)
        return null;
      let g = this._list.toString("utf8", this._pos, d);
      return this._pos += c, r("_parseString: result: %s", g), g;
    }
    _parseStringPair() {
      return r("_parseStringPair"), { name: this._parseString(), value: this._parseString() };
    }
    _parseBuffer() {
      let a = this._parseNum(), c = a + this._pos;
      if (a === -1 || c > this._list.length || c > this.packet.length)
        return null;
      let d = this._list.slice(this._pos, c);
      return this._pos += a, r("_parseBuffer: result: %o", d), d;
    }
    _parseNum() {
      if (this._list.length - this._pos < 2)
        return -1;
      let a = this._list.readUInt16BE(this._pos);
      return this._pos += 2, r("_parseNum: result: %s", a), a;
    }
    _parse4ByteNum() {
      if (this._list.length - this._pos < 4)
        return -1;
      let a = this._list.readUInt32BE(this._pos);
      return this._pos += 4, r("_parse4ByteNum: result: %s", a), a;
    }
    _parseVarByteNum(a) {
      r("_parseVarByteNum");
      let c = 4, d = 0, g = 1, m = 0, b = !1, y, T = this._pos ? this._pos : 0;
      for (; d < c && T + d < this._list.length; ) {
        if (y = this._list.readUInt8(T + d++), m += g * (y & o.VARBYTEINT_MASK), g *= 128, !(y & o.VARBYTEINT_FIN_MASK)) {
          b = !0;
          break;
        }
        if (this._list.length <= d)
          break;
      }
      return !b && d === c && this._list.length >= d && this._emitError(new Error("Invalid variable byte integer")), T && (this._pos += d), b ? a ? b = { bytes: d, value: m } : b = m : b = !1, r("_parseVarByteNum: result: %o", b), b;
    }
    _parseByte() {
      let a;
      return this._pos < this._list.length && (a = this._list.readUInt8(this._pos), this._pos++), r("_parseByte: result: %o", a), a;
    }
    _parseByType(a) {
      switch (r("_parseByType: type: %s", a), a) {
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
    _parseProperties() {
      r("_parseProperties");
      let a = this._parseVarByteNum(), c = this._pos + a, d = {};
      for (; this._pos < c; ) {
        let g = this._parseByte();
        if (!g)
          return this._emitError(new Error("Cannot parse property code type")), !1;
        let m = o.propertiesCodes[g];
        if (!m)
          return this._emitError(new Error("Unknown property")), !1;
        if (m === "userProperties") {
          d[m] || (d[m] = /* @__PURE__ */ Object.create(null));
          let b = this._parseByType(o.propertiesTypes[m]);
          if (d[m][b.name])
            if (Array.isArray(d[m][b.name]))
              d[m][b.name].push(b.value);
            else {
              let y = d[m][b.name];
              d[m][b.name] = [y], d[m][b.name].push(b.value);
            }
          else
            d[m][b.name] = b.value;
          continue;
        }
        d[m] ? Array.isArray(d[m]) ? d[m].push(this._parseByType(o.propertiesTypes[m])) : (d[m] = [d[m]], d[m].push(this._parseByType(o.propertiesTypes[m]))) : d[m] = this._parseByType(o.propertiesTypes[m]);
      }
      return d;
    }
    _newPacket() {
      return r("_newPacket"), this.packet && (this._list.consume(this.packet.length), r("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), r("_newPacket: new packet"), this.packet = new h(), this._pos = 0, !0;
    }
    _emitError(a) {
      r("_emitError", a), this.error = a, this.emit("error", a);
    }
  };
  i.exports = s;
}), ul = me((e, i) => {
  ae(), se(), oe();
  var { Buffer: t } = (Xe(), xe(Je)), l = 65536, h = {}, o = t.isBuffer(t.from([1, 2]).subarray(0, 1));
  function r(c) {
    let d = t.allocUnsafe(2);
    return d.writeUInt8(c >> 8, 0), d.writeUInt8(c & 255, 1), d;
  }
  function s() {
    for (let c = 0; c < l; c++)
      h[c] = r(c);
  }
  function n(c) {
    let d = 0, g = 0, m = t.allocUnsafe(4);
    do
      d = c % 128 | 0, c = c / 128 | 0, c > 0 && (d = d | 128), m.writeUInt8(d, g++);
    while (c > 0 && g < 4);
    return c > 0 && (g = 0), o ? m.subarray(0, g) : m.slice(0, g);
  }
  function a(c) {
    let d = t.allocUnsafe(4);
    return d.writeUInt32BE(c, 0), d;
  }
  i.exports = { cache: h, generateCache: s, generateNumber: r, genBufVariableByteInt: n, generate4ByteBuffer: a };
}), hl = me((e, i) => {
  ae(), se(), oe(), typeof Ue > "u" || !Ue.version || Ue.version.indexOf("v0.") === 0 || Ue.version.indexOf("v1.") === 0 && Ue.version.indexOf("v1.8.") !== 0 ? i.exports = { nextTick: t } : i.exports = Ue;
  function t(l, h, o, r) {
    if (typeof l != "function")
      throw new TypeError('"callback" argument must be a function');
    var s = arguments.length, n, a;
    switch (s) {
      case 0:
      case 1:
        return Ue.nextTick(l);
      case 2:
        return Ue.nextTick(function() {
          l.call(null, h);
        });
      case 3:
        return Ue.nextTick(function() {
          l.call(null, h, o);
        });
      case 4:
        return Ue.nextTick(function() {
          l.call(null, h, o, r);
        });
      default:
        for (n = new Array(s - 1), a = 0; a < n.length; )
          n[a++] = arguments[a];
        return Ue.nextTick(function() {
          l.apply(null, n);
        });
    }
  }
}), ms = me((e, i) => {
  ae(), se(), oe();
  var t = gs(), { Buffer: l } = (Xe(), xe(Je)), h = l.allocUnsafe(0), o = l.from([0]), r = ul(), s = hl().nextTick, n = Ot()("mqtt-packet:writeToStream"), a = r.cache, c = r.generateNumber, d = r.generateCache, g = r.genBufVariableByteInt, m = r.generate4ByteBuffer, b = ne, y = !0;
  function T(M, _, z) {
    switch (n("generate called"), _.cork && (_.cork(), s(U, _)), y && (y = !1, d()), n("generate: packet.cmd: %s", M.cmd), M.cmd) {
      case "connect":
        return k(M, _);
      case "connack":
        return I(M, _, z);
      case "publish":
        return D(M, _, z);
      case "puback":
      case "pubrec":
      case "pubrel":
      case "pubcomp":
        return F(M, _, z);
      case "subscribe":
        return R(M, _, z);
      case "suback":
        return C(M, _, z);
      case "unsubscribe":
        return x(M, _, z);
      case "unsuback":
        return W(M, _, z);
      case "pingreq":
      case "pingresp":
        return G(M, _);
      case "disconnect":
        return ee(M, _, z);
      case "auth":
        return E(M, _, z);
      default:
        return _.destroy(new Error("Unknown command")), !1;
    }
  }
  Object.defineProperty(T, "cacheNumbers", { get() {
    return b === ne;
  }, set(M) {
    M ? ((!a || Object.keys(a).length === 0) && (y = !0), b = ne) : (y = !1, b = q);
  } });
  function U(M) {
    M.uncork();
  }
  function k(M, _, z) {
    let le = M || {}, X = le.protocolId || "MQTT", J = le.protocolVersion || 4, he = le.will, pe = le.clean, O = le.keepalive || 0, j = le.clientId || "", N = le.username, te = le.password, Y = le.properties;
    pe === void 0 && (pe = !0);
    let L = 0;
    if (!X || typeof X != "string" && !l.isBuffer(X))
      return _.destroy(new Error("Invalid protocolId")), !1;
    if (L += X.length + 2, J !== 3 && J !== 4 && J !== 5)
      return _.destroy(new Error("Invalid protocol version")), !1;
    if (L += 1, (typeof j == "string" || l.isBuffer(j)) && (j || J >= 4) && (j || pe))
      L += l.byteLength(j) + 2;
    else {
      if (J < 4)
        return _.destroy(new Error("clientId must be supplied before 3.1.1")), !1;
      if (pe * 1 === 0)
        return _.destroy(new Error("clientId must be given if cleanSession set to 0")), !1;
    }
    if (typeof O != "number" || O < 0 || O > 65535 || O % 1 !== 0)
      return _.destroy(new Error("Invalid keepalive")), !1;
    L += 2, L += 1;
    let H, we;
    if (J === 5) {
      if (H = ve(_, Y), !H)
        return !1;
      L += H.length;
    }
    if (he) {
      if (typeof he != "object")
        return _.destroy(new Error("Invalid will")), !1;
      if (!he.topic || typeof he.topic != "string")
        return _.destroy(new Error("Invalid will topic")), !1;
      if (L += l.byteLength(he.topic) + 2, L += 2, he.payload)
        if (he.payload.length >= 0)
          typeof he.payload == "string" ? L += l.byteLength(he.payload) : L += he.payload.length;
        else
          return _.destroy(new Error("Invalid will payload")), !1;
      if (we = {}, J === 5) {
        if (we = ve(_, he.properties), !we)
          return !1;
        L += we.length;
      }
    }
    let _e = !1;
    if (N != null)
      if (ue(N))
        _e = !0, L += l.byteLength(N) + 2;
      else
        return _.destroy(new Error("Invalid username")), !1;
    if (te != null) {
      if (!_e)
        return _.destroy(new Error("Username is required to use password")), !1;
      if (ue(te))
        L += Ee(te) + 2;
      else
        return _.destroy(new Error("Invalid password")), !1;
    }
    _.write(t.CONNECT_HEADER), Z(_, L), re(_, X), le.bridgeMode && (J += 128), _.write(J === 131 ? t.VERSION131 : J === 132 ? t.VERSION132 : J === 4 ? t.VERSION4 : J === 5 ? t.VERSION5 : t.VERSION3);
    let Ae = 0;
    return Ae |= N != null ? t.USERNAME_MASK : 0, Ae |= te != null ? t.PASSWORD_MASK : 0, Ae |= he && he.retain ? t.WILL_RETAIN_MASK : 0, Ae |= he && he.qos ? he.qos << t.WILL_QOS_SHIFT : 0, Ae |= he ? t.WILL_FLAG_MASK : 0, Ae |= pe ? t.CLEAN_SESSION_MASK : 0, _.write(l.from([Ae])), b(_, O), J === 5 && H.write(), re(_, j), he && (J === 5 && we.write(), K(_, he.topic), re(_, he.payload)), N != null && re(_, N), te != null && re(_, te), !0;
  }
  function I(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = le === 5 ? X.reasonCode : X.returnCode, he = X.properties, pe = 2;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid return code")), !1;
    let O = null;
    if (le === 5) {
      if (O = ve(_, he), !O)
        return !1;
      pe += O.length;
    }
    return _.write(t.CONNACK_HEADER), Z(_, pe), _.write(X.sessionPresent ? t.SESSIONPRESENT_HEADER : o), _.write(l.from([J])), O == null || O.write(), !0;
  }
  function D(M, _, z) {
    n("publish: packet: %o", M);
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.qos || 0, he = X.retain ? t.RETAIN_MASK : 0, pe = X.topic, O = X.payload || h, j = X.messageId, N = X.properties, te = 0;
    if (typeof pe == "string")
      te += l.byteLength(pe) + 2;
    else if (l.isBuffer(pe))
      te += pe.length + 2;
    else
      return _.destroy(new Error("Invalid topic")), !1;
    if (l.isBuffer(O) ? te += O.length : te += l.byteLength(O), J && typeof j != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    J && (te += 2);
    let Y = null;
    if (le === 5) {
      if (Y = ve(_, N), !Y)
        return !1;
      te += Y.length;
    }
    return _.write(t.PUBLISH_HEADER[J][X.dup ? 1 : 0][he ? 1 : 0]), Z(_, te), b(_, Ee(pe)), _.write(pe), J > 0 && b(_, j), Y == null || Y.write(), n("publish: payload: %o", O), _.write(O);
  }
  function F(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.cmd || "puback", he = X.messageId, pe = X.dup && J === "pubrel" ? t.DUP_MASK : 0, O = 0, j = X.reasonCode, N = X.properties, te = le === 5 ? 3 : 2;
    if (J === "pubrel" && (O = 1), typeof he != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    let Y = null;
    if (le === 5 && typeof N == "object") {
      if (Y = S(_, N, z, te), !Y)
        return !1;
      te += Y.length;
    }
    return _.write(t.ACKS[J][O][pe][0]), te === 3 && (te += j !== 0 ? 1 : -1), Z(_, te), b(_, he), le === 5 && te !== 2 && _.write(l.from([j])), Y !== null ? Y.write() : te === 4 && _.write(l.from([0])), !0;
  }
  function R(M, _, z) {
    n("subscribe: packet: ");
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.dup ? t.DUP_MASK : 0, he = X.messageId, pe = X.subscriptions, O = X.properties, j = 0;
    if (typeof he != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    j += 2;
    let N = null;
    if (le === 5) {
      if (N = ve(_, O), !N)
        return !1;
      j += N.length;
    }
    if (typeof pe == "object" && pe.length)
      for (let Y = 0; Y < pe.length; Y += 1) {
        let L = pe[Y].topic, H = pe[Y].qos;
        if (typeof L != "string")
          return _.destroy(new Error("Invalid subscriptions - invalid topic")), !1;
        if (typeof H != "number")
          return _.destroy(new Error("Invalid subscriptions - invalid qos")), !1;
        if (le === 5) {
          if (typeof (pe[Y].nl || !1) != "boolean")
            return _.destroy(new Error("Invalid subscriptions - invalid No Local")), !1;
          if (typeof (pe[Y].rap || !1) != "boolean")
            return _.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), !1;
          let we = pe[Y].rh || 0;
          if (typeof we != "number" || we > 2)
            return _.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), !1;
        }
        j += l.byteLength(L) + 2 + 1;
      }
    else
      return _.destroy(new Error("Invalid subscriptions")), !1;
    n("subscribe: writing to stream: %o", t.SUBSCRIBE_HEADER), _.write(t.SUBSCRIBE_HEADER[1][J ? 1 : 0][0]), Z(_, j), b(_, he), N !== null && N.write();
    let te = !0;
    for (let Y of pe) {
      let L = Y.topic, H = Y.qos, we = +Y.nl, _e = +Y.rap, Ae = Y.rh, Re;
      K(_, L), Re = t.SUBSCRIBE_OPTIONS_QOS[H], le === 5 && (Re |= we ? t.SUBSCRIBE_OPTIONS_NL : 0, Re |= _e ? t.SUBSCRIBE_OPTIONS_RAP : 0, Re |= Ae ? t.SUBSCRIBE_OPTIONS_RH[Ae] : 0), te = _.write(l.from([Re]));
    }
    return te;
  }
  function C(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.messageId, he = X.granted, pe = X.properties, O = 0;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    if (O += 2, typeof he == "object" && he.length)
      for (let N = 0; N < he.length; N += 1) {
        if (typeof he[N] != "number")
          return _.destroy(new Error("Invalid qos vector")), !1;
        O += 1;
      }
    else
      return _.destroy(new Error("Invalid qos vector")), !1;
    let j = null;
    if (le === 5) {
      if (j = S(_, pe, z, O), !j)
        return !1;
      O += j.length;
    }
    return _.write(t.SUBACK_HEADER), Z(_, O), b(_, J), j !== null && j.write(), _.write(l.from(he));
  }
  function x(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.messageId, he = X.dup ? t.DUP_MASK : 0, pe = X.unsubscriptions, O = X.properties, j = 0;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    if (j += 2, typeof pe == "object" && pe.length)
      for (let Y = 0; Y < pe.length; Y += 1) {
        if (typeof pe[Y] != "string")
          return _.destroy(new Error("Invalid unsubscriptions")), !1;
        j += l.byteLength(pe[Y]) + 2;
      }
    else
      return _.destroy(new Error("Invalid unsubscriptions")), !1;
    let N = null;
    if (le === 5) {
      if (N = ve(_, O), !N)
        return !1;
      j += N.length;
    }
    _.write(t.UNSUBSCRIBE_HEADER[1][he ? 1 : 0][0]), Z(_, j), b(_, J), N !== null && N.write();
    let te = !0;
    for (let Y = 0; Y < pe.length; Y++)
      te = K(_, pe[Y]);
    return te;
  }
  function W(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.messageId, he = X.dup ? t.DUP_MASK : 0, pe = X.granted, O = X.properties, j = X.cmd, N = 0, te = 2;
    if (typeof J != "number")
      return _.destroy(new Error("Invalid messageId")), !1;
    if (le === 5)
      if (typeof pe == "object" && pe.length)
        for (let L = 0; L < pe.length; L += 1) {
          if (typeof pe[L] != "number")
            return _.destroy(new Error("Invalid qos vector")), !1;
          te += 1;
        }
      else
        return _.destroy(new Error("Invalid qos vector")), !1;
    let Y = null;
    if (le === 5) {
      if (Y = S(_, O, z, te), !Y)
        return !1;
      te += Y.length;
    }
    return _.write(t.ACKS[j][N][he][0]), Z(_, te), b(_, J), Y !== null && Y.write(), le === 5 && _.write(l.from(pe)), !0;
  }
  function G(M, _, z) {
    return _.write(t.EMPTY[M.cmd]);
  }
  function ee(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.reasonCode, he = X.properties, pe = le === 5 ? 1 : 0, O = null;
    if (le === 5) {
      if (O = S(_, he, z, pe), !O)
        return !1;
      pe += O.length;
    }
    return _.write(l.from([t.codes.disconnect << 4])), Z(_, pe), le === 5 && _.write(l.from([J])), O !== null && O.write(), !0;
  }
  function E(M, _, z) {
    let le = z ? z.protocolVersion : 4, X = M || {}, J = X.reasonCode, he = X.properties, pe = le === 5 ? 1 : 0;
    le !== 5 && _.destroy(new Error("Invalid mqtt version for auth packet"));
    let O = S(_, he, z, pe);
    return O ? (pe += O.length, _.write(l.from([t.codes.auth << 4])), Z(_, pe), _.write(l.from([J])), O !== null && O.write(), !0) : !1;
  }
  var $ = {};
  function Z(M, _) {
    if (_ > t.VARBYTEINT_MAX)
      return M.destroy(new Error(`Invalid variable byte integer: ${_}`)), !1;
    let z = $[_];
    return z || (z = g(_), _ < 16384 && ($[_] = z)), n("writeVarByteInt: writing to stream: %o", z), M.write(z);
  }
  function K(M, _) {
    let z = l.byteLength(_);
    return b(M, z), n("writeString: %s", _), M.write(_, "utf8");
  }
  function ge(M, _, z) {
    K(M, _), K(M, z);
  }
  function ne(M, _) {
    return n("writeNumberCached: number: %d", _), n("writeNumberCached: %o", a[_]), M.write(a[_]);
  }
  function q(M, _) {
    let z = c(_);
    return n("writeNumberGenerated: %o", z), M.write(z);
  }
  function be(M, _) {
    let z = m(_);
    return n("write4ByteNumber: %o", z), M.write(z);
  }
  function re(M, _) {
    typeof _ == "string" ? K(M, _) : _ ? (b(M, _.length), M.write(_)) : b(M, 0);
  }
  function ve(M, _) {
    if (typeof _ != "object" || _.length != null)
      return { length: 1, write() {
        ce(M, {}, 0);
      } };
    let z = 0;
    function le(X, J) {
      let he = t.propertiesTypes[X], pe = 0;
      switch (he) {
        case "byte": {
          if (typeof J != "boolean")
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 2;
          break;
        }
        case "int8": {
          if (typeof J != "number" || J < 0 || J > 255)
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 2;
          break;
        }
        case "binary": {
          if (J && J === null)
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 1 + l.byteLength(J) + 2;
          break;
        }
        case "int16": {
          if (typeof J != "number" || J < 0 || J > 65535)
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 3;
          break;
        }
        case "int32": {
          if (typeof J != "number" || J < 0 || J > 4294967295)
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 5;
          break;
        }
        case "var": {
          if (typeof J != "number" || J < 0 || J > 268435455)
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 1 + l.byteLength(g(J));
          break;
        }
        case "string": {
          if (typeof J != "string")
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += 3 + l.byteLength(J.toString());
          break;
        }
        case "pair": {
          if (typeof J != "object")
            return M.destroy(new Error(`Invalid ${X}: ${J}`)), !1;
          pe += Object.getOwnPropertyNames(J).reduce((O, j) => {
            let N = J[j];
            return Array.isArray(N) ? O += N.reduce((te, Y) => (te += 3 + l.byteLength(j.toString()) + 2 + l.byteLength(Y.toString()), te), 0) : O += 3 + l.byteLength(j.toString()) + 2 + l.byteLength(J[j].toString()), O;
          }, 0);
          break;
        }
        default:
          return M.destroy(new Error(`Invalid property ${X}: ${J}`)), !1;
      }
      return pe;
    }
    if (_)
      for (let X in _) {
        let J = 0, he = 0, pe = _[X];
        if (Array.isArray(pe))
          for (let O = 0; O < pe.length; O++) {
            if (he = le(X, pe[O]), !he)
              return !1;
            J += he;
          }
        else {
          if (he = le(X, pe), !he)
            return !1;
          J = he;
        }
        if (!J)
          return !1;
        z += J;
      }
    return { length: l.byteLength(g(z)) + z, write() {
      ce(M, _, z);
    } };
  }
  function S(M, _, z, le) {
    let X = ["reasonString", "userProperties"], J = z && z.properties && z.properties.maximumPacketSize ? z.properties.maximumPacketSize : 0, he = ve(M, _);
    if (J)
      for (; le + he.length > J; ) {
        let pe = X.shift();
        if (pe && _[pe])
          delete _[pe], he = ve(M, _);
        else
          return !1;
      }
    return he;
  }
  function Q(M, _, z) {
    switch (t.propertiesTypes[_]) {
      case "byte": {
        M.write(l.from([t.properties[_]])), M.write(l.from([+z]));
        break;
      }
      case "int8": {
        M.write(l.from([t.properties[_]])), M.write(l.from([z]));
        break;
      }
      case "binary": {
        M.write(l.from([t.properties[_]])), re(M, z);
        break;
      }
      case "int16": {
        M.write(l.from([t.properties[_]])), b(M, z);
        break;
      }
      case "int32": {
        M.write(l.from([t.properties[_]])), be(M, z);
        break;
      }
      case "var": {
        M.write(l.from([t.properties[_]])), Z(M, z);
        break;
      }
      case "string": {
        M.write(l.from([t.properties[_]])), K(M, z);
        break;
      }
      case "pair": {
        Object.getOwnPropertyNames(z).forEach((le) => {
          let X = z[le];
          Array.isArray(X) ? X.forEach((J) => {
            M.write(l.from([t.properties[_]])), ge(M, le.toString(), J.toString());
          }) : (M.write(l.from([t.properties[_]])), ge(M, le.toString(), X.toString()));
        });
        break;
      }
      default:
        return M.destroy(new Error(`Invalid property ${_} value: ${z}`)), !1;
    }
  }
  function ce(M, _, z) {
    Z(M, z);
    for (let le in _)
      if (Object.prototype.hasOwnProperty.call(_, le) && _[le] !== null) {
        let X = _[le];
        if (Array.isArray(X))
          for (let J = 0; J < X.length; J++)
            Q(M, le, X[J]);
        else
          Q(M, le, X);
      }
  }
  function Ee(M) {
    return M ? M instanceof l ? M.length : l.byteLength(M) : 0;
  }
  function ue(M) {
    return typeof M == "string" || M instanceof l;
  }
  i.exports = T;
}), cl = me((e, i) => {
  ae(), se(), oe();
  var t = ms(), { EventEmitter: l } = (ar(), xe(tr)), { Buffer: h } = (Xe(), xe(Je));
  function o(s, n) {
    let a = new r();
    return t(s, a, n), a.concat();
  }
  var r = class extends l {
    constructor() {
      super(), this._array = new Array(20), this._i = 0;
    }
    write(s) {
      return this._array[this._i++] = s, !0;
    }
    concat() {
      let s = 0, n = new Array(this._array.length), a = this._array, c = 0, d;
      for (d = 0; d < a.length && a[d] !== void 0; d++)
        typeof a[d] != "string" ? n[d] = a[d].length : n[d] = h.byteLength(a[d]), s += n[d];
      let g = h.allocUnsafe(s);
      for (d = 0; d < a.length && a[d] !== void 0; d++)
        typeof a[d] != "string" ? (a[d].copy(g, c), c += n[d]) : (g.write(a[d], c), c += n[d]);
      return g;
    }
    destroy(s) {
      s && this.emit("error", s);
    }
  };
  i.exports = o;
}), fl = me((e) => {
  ae(), se(), oe(), e.parser = ll().parser, e.generate = cl(), e.writeToStream = ms();
}), bs = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = class {
    constructor() {
      this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
    }
    allocate() {
      let t = this.nextId++;
      return this.nextId === 65536 && (this.nextId = 1), t;
    }
    getLastAllocated() {
      return this.nextId === 1 ? 65535 : this.nextId - 1;
    }
    register(t) {
      return !0;
    }
    deallocate(t) {
    }
    clear() {
    }
  };
  e.default = i;
}), pl = me((e, i) => {
  ae(), se(), oe(), i.exports = l;
  function t(o) {
    return o instanceof Br ? Br.from(o) : new o.constructor(o.buffer.slice(), o.byteOffset, o.length);
  }
  function l(o) {
    if (o = o || {}, o.circles)
      return h(o);
    return o.proto ? n : s;
    function r(a, c) {
      for (var d = Object.keys(a), g = new Array(d.length), m = 0; m < d.length; m++) {
        var b = d[m], y = a[b];
        typeof y != "object" || y === null ? g[b] = y : y instanceof Date ? g[b] = new Date(y) : ArrayBuffer.isView(y) ? g[b] = t(y) : g[b] = c(y);
      }
      return g;
    }
    function s(a) {
      if (typeof a != "object" || a === null)
        return a;
      if (a instanceof Date)
        return new Date(a);
      if (Array.isArray(a))
        return r(a, s);
      if (a instanceof Map)
        return new Map(r(Array.from(a), s));
      if (a instanceof Set)
        return new Set(r(Array.from(a), s));
      var c = {};
      for (var d in a)
        if (Object.hasOwnProperty.call(a, d) !== !1) {
          var g = a[d];
          typeof g != "object" || g === null ? c[d] = g : g instanceof Date ? c[d] = new Date(g) : g instanceof Map ? c[d] = new Map(r(Array.from(g), s)) : g instanceof Set ? c[d] = new Set(r(Array.from(g), s)) : ArrayBuffer.isView(g) ? c[d] = t(g) : c[d] = s(g);
        }
      return c;
    }
    function n(a) {
      if (typeof a != "object" || a === null)
        return a;
      if (a instanceof Date)
        return new Date(a);
      if (Array.isArray(a))
        return r(a, n);
      if (a instanceof Map)
        return new Map(r(Array.from(a), n));
      if (a instanceof Set)
        return new Set(r(Array.from(a), n));
      var c = {};
      for (var d in a) {
        var g = a[d];
        typeof g != "object" || g === null ? c[d] = g : g instanceof Date ? c[d] = new Date(g) : g instanceof Map ? c[d] = new Map(r(Array.from(g), n)) : g instanceof Set ? c[d] = new Set(r(Array.from(g), n)) : ArrayBuffer.isView(g) ? c[d] = t(g) : c[d] = n(g);
      }
      return c;
    }
  }
  function h(o) {
    var r = [], s = [];
    return o.proto ? c : a;
    function n(d, g) {
      for (var m = Object.keys(d), b = new Array(m.length), y = 0; y < m.length; y++) {
        var T = m[y], U = d[T];
        if (typeof U != "object" || U === null)
          b[T] = U;
        else if (U instanceof Date)
          b[T] = new Date(U);
        else if (ArrayBuffer.isView(U))
          b[T] = t(U);
        else {
          var k = r.indexOf(U);
          k !== -1 ? b[T] = s[k] : b[T] = g(U);
        }
      }
      return b;
    }
    function a(d) {
      if (typeof d != "object" || d === null)
        return d;
      if (d instanceof Date)
        return new Date(d);
      if (Array.isArray(d))
        return n(d, a);
      if (d instanceof Map)
        return new Map(n(Array.from(d), a));
      if (d instanceof Set)
        return new Set(n(Array.from(d), a));
      var g = {};
      r.push(d), s.push(g);
      for (var m in d)
        if (Object.hasOwnProperty.call(d, m) !== !1) {
          var b = d[m];
          if (typeof b != "object" || b === null)
            g[m] = b;
          else if (b instanceof Date)
            g[m] = new Date(b);
          else if (b instanceof Map)
            g[m] = new Map(n(Array.from(b), a));
          else if (b instanceof Set)
            g[m] = new Set(n(Array.from(b), a));
          else if (ArrayBuffer.isView(b))
            g[m] = t(b);
          else {
            var y = r.indexOf(b);
            y !== -1 ? g[m] = s[y] : g[m] = a(b);
          }
        }
      return r.pop(), s.pop(), g;
    }
    function c(d) {
      if (typeof d != "object" || d === null)
        return d;
      if (d instanceof Date)
        return new Date(d);
      if (Array.isArray(d))
        return n(d, c);
      if (d instanceof Map)
        return new Map(n(Array.from(d), c));
      if (d instanceof Set)
        return new Set(n(Array.from(d), c));
      var g = {};
      r.push(d), s.push(g);
      for (var m in d) {
        var b = d[m];
        if (typeof b != "object" || b === null)
          g[m] = b;
        else if (b instanceof Date)
          g[m] = new Date(b);
        else if (b instanceof Map)
          g[m] = new Map(n(Array.from(b), c));
        else if (b instanceof Set)
          g[m] = new Set(n(Array.from(b), c));
        else if (ArrayBuffer.isView(b))
          g[m] = t(b);
        else {
          var y = r.indexOf(b);
          y !== -1 ? g[m] = s[y] : g[m] = c(b);
        }
      }
      return r.pop(), s.pop(), g;
    }
  }
}), dl = me((e, i) => {
  ae(), se(), oe(), i.exports = pl()();
}), gl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 }), e.validateTopics = e.validateTopic = void 0;
  function i(l) {
    let h = l.split("/");
    for (let o = 0; o < h.length; o++)
      if (h[o] !== "+") {
        if (h[o] === "#")
          return o === h.length - 1;
        if (h[o].indexOf("+") !== -1 || h[o].indexOf("#") !== -1)
          return !1;
      }
    return !0;
  }
  e.validateTopic = i;
  function t(l) {
    if (l.length === 0)
      return "empty_topic_list";
    for (let h = 0; h < l.length; h++)
      if (!i(l[h]))
        return l[h];
    return null;
  }
  e.validateTopics = t;
}), ys = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = rr(), t = { objectMode: !0 }, l = { clean: !0 }, h = class {
    constructor(o) {
      this.options = o || {}, this.options = Object.assign(Object.assign({}, l), o), this._inflights = /* @__PURE__ */ new Map();
    }
    put(o, r) {
      return this._inflights.set(o.messageId, o), r && r(), this;
    }
    createStream() {
      let o = new i.Readable(t), r = [], s = !1, n = 0;
      return this._inflights.forEach((a, c) => {
        r.push(a);
      }), o._read = () => {
        !s && n < r.length ? o.push(r[n++]) : o.push(null);
      }, o.destroy = (a) => {
        if (!s)
          return s = !0, setTimeout(() => {
            o.emit("close");
          }, 0), o;
      }, o;
    }
    del(o, r) {
      let s = this._inflights.get(o.messageId);
      return s ? (this._inflights.delete(o.messageId), r(null, s)) : r && r(new Error("missing packet")), this;
    }
    get(o, r) {
      let s = this._inflights.get(o.messageId);
      return s ? r(null, s) : r && r(new Error("missing packet")), this;
    }
    close(o) {
      this.options.clean && (this._inflights = null), o && o();
    }
  };
  e.default = h;
}), ml = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = [0, 16, 128, 131, 135, 144, 145, 151, 153], t = (l, h, o) => {
    l.log("handlePublish: packet %o", h), o = typeof o < "u" ? o : l.noop;
    let r = h.topic.toString(), s = h.payload, { qos: n } = h, { messageId: a } = h, { options: c } = l;
    if (l.options.protocolVersion === 5) {
      let d;
      if (h.properties && (d = h.properties.topicAlias), typeof d < "u")
        if (r.length === 0)
          if (d > 0 && d <= 65535) {
            let g = l.topicAliasRecv.getTopicByAlias(d);
            if (g)
              r = g, l.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", r, d);
            else {
              l.log("handlePublish :: unregistered topic alias. alias: %d", d), l.emit("error", new Error("Received unregistered Topic Alias"));
              return;
            }
          } else {
            l.log("handlePublish :: topic alias out of range. alias: %d", d), l.emit("error", new Error("Received Topic Alias is out of range"));
            return;
          }
        else if (l.topicAliasRecv.put(r, d))
          l.log("handlePublish :: registered topic: %s - alias: %d", r, d);
        else {
          l.log("handlePublish :: topic alias out of range. alias: %d", d), l.emit("error", new Error("Received Topic Alias is out of range"));
          return;
        }
    }
    switch (l.log("handlePublish: qos %d", n), n) {
      case 2: {
        c.customHandleAcks(r, s, h, (d, g) => {
          if (typeof d == "number" && (g = d, d = null), d)
            return l.emit("error", d);
          if (i.indexOf(g) === -1)
            return l.emit("error", new Error("Wrong reason code for pubrec"));
          g ? l._sendPacket({ cmd: "pubrec", messageId: a, reasonCode: g }, o) : l.incomingStore.put(h, () => {
            l._sendPacket({ cmd: "pubrec", messageId: a }, o);
          });
        });
        break;
      }
      case 1: {
        c.customHandleAcks(r, s, h, (d, g) => {
          if (typeof d == "number" && (g = d, d = null), d)
            return l.emit("error", d);
          if (i.indexOf(g) === -1)
            return l.emit("error", new Error("Wrong reason code for puback"));
          g || l.emit("message", r, s, h), l.handleMessage(h, (m) => {
            if (m)
              return o && o(m);
            l._sendPacket({ cmd: "puback", messageId: a, reasonCode: g }, o);
          });
        });
        break;
      }
      case 0:
        l.emit("message", r, s, h), l.handleMessage(h, o);
        break;
      default:
        l.log("handlePublish: unknown QoS. Doing nothing.");
        break;
    }
  };
  e.default = t;
}), bl = me((e, i) => {
  i.exports = { version: "5.5.4" };
}), br = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 }), e.MQTTJS_VERSION = e.nextTick = e.applyMixin = e.ErrorWithReasonCode = void 0;
  var i = class ws extends Error {
    constructor(h, o) {
      super(h), this.code = o, Object.setPrototypeOf(this, ws.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode";
    }
  };
  e.ErrorWithReasonCode = i;
  function t(l, h, o = !1) {
    var r;
    let s = [h];
    for (; ; ) {
      let n = s[0], a = Object.getPrototypeOf(n);
      if (a != null && a.prototype)
        s.unshift(a);
      else
        break;
    }
    for (let n of s)
      for (let a of Object.getOwnPropertyNames(n.prototype))
        (o || a !== "constructor") && Object.defineProperty(l.prototype, a, (r = Object.getOwnPropertyDescriptor(n.prototype, a)) !== null && r !== void 0 ? r : /* @__PURE__ */ Object.create(null));
  }
  e.applyMixin = t, e.nextTick = typeof (Ue == null ? void 0 : Ue.nextTick) == "function" ? Ue.nextTick : (l) => {
    setTimeout(l, 0);
  }, e.MQTTJS_VERSION = bl().version;
}), Wr = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 }), e.ReasonCodes = void 0, e.ReasonCodes = { 0: "", 1: "Unacceptable protocol version", 2: "Identifier rejected", 3: "Server unavailable", 4: "Bad username or password", 5: "Not authorized", 16: "No matching subscribers", 17: "No subscription existed", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 132: "Unsupported Protocol Version", 133: "Client Identifier not valid", 134: "Bad User Name or Password", 135: "Not authorized", 136: "Server unavailable", 137: "Server busy", 138: "Banned", 139: "Server shutting down", 140: "Bad authentication method", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 145: "Packet identifier in use", 146: "Packet Identifier not found", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  var i = (t, l) => {
    let { messageId: h } = l, o = l.cmd, r = null, s = t.outgoing[h] ? t.outgoing[h].cb : null, n;
    if (!s) {
      t.log("_handleAck :: Server sent an ack in error. Ignoring.");
      return;
    }
    switch (t.log("_handleAck :: packet type", o), o) {
      case "pubcomp":
      case "puback": {
        let a = l.reasonCode;
        a && a > 0 && a !== 16 ? (n = new Error(`Publish error: ${e.ReasonCodes[a]}`), n.code = a, t._removeOutgoingAndStoreMessage(h, () => {
          s(n, l);
        })) : t._removeOutgoingAndStoreMessage(h, s);
        break;
      }
      case "pubrec": {
        r = { cmd: "pubrel", qos: 2, messageId: h };
        let a = l.reasonCode;
        a && a > 0 && a !== 16 ? (n = new Error(`Publish error: ${e.ReasonCodes[a]}`), n.code = a, t._removeOutgoingAndStoreMessage(h, () => {
          s(n, l);
        })) : t._sendPacket(r);
        break;
      }
      case "suback": {
        delete t.outgoing[h], t.messageIdProvider.deallocate(h);
        let a = l.granted;
        for (let c = 0; c < a.length; c++)
          if (a[c] & 128) {
            let d = t.messageIdToTopic[h];
            d && d.forEach((g) => {
              delete t._resubscribeTopics[g];
            });
          }
        delete t.messageIdToTopic[h], t._invokeStoreProcessingQueue(), s(null, l);
        break;
      }
      case "unsuback": {
        delete t.outgoing[h], t.messageIdProvider.deallocate(h), t._invokeStoreProcessingQueue(), s(null);
        break;
      }
      default:
        t.emit("error", new Error("unrecognized packet type"));
    }
    t.disconnecting && Object.keys(t.outgoing).length === 0 && t.emit("outgoingEmpty");
  };
  e.default = i;
}), yl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = br(), t = Wr(), l = (h, o) => {
    let { options: r } = h, s = r.protocolVersion, n = s === 5 ? o.reasonCode : o.returnCode;
    if (s !== 5) {
      let a = new i.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${s}`, n);
      h.emit("error", a);
      return;
    }
    h.handleAuth(o, (a, c) => {
      if (a) {
        h.emit("error", a);
        return;
      }
      if (n === 24)
        h.reconnecting = !1, h._sendPacket(c);
      else {
        let d = new i.ErrorWithReasonCode(`Connection refused: ${t.ReasonCodes[n]}`, n);
        h.emit("error", d);
      }
    });
  };
  e.default = l;
}), wl = me((e) => {
  var m, b, y, T, U, k, I, D, F, R, C, x, W, G, ee, E, $, Z, K, ge, ne, q, be, re, ve, S, gn, ce, Ee, ue, M, _, vs, le, X, J, he, Ut, O, Lt, N, mn, Y, kr, H, Cr, _e, Le, Re, bn, u, dr, v;
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 }), e.LRUCache = void 0;
  var i = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, t = /* @__PURE__ */ new Set(), l = typeof Ue == "object" && Ue ? Ue : {}, h = (A, w, P, V) => {
    typeof l.emitWarning == "function" ? l.emitWarning(A, w, P, V) : console.error(`[${P}] ${w}: ${A}`);
  }, o = globalThis.AbortController, r = globalThis.AbortSignal;
  if (typeof o > "u") {
    r = class {
      constructor() {
        De(this, "onabort");
        De(this, "_onabort", []);
        De(this, "reason");
        De(this, "aborted", !1);
      }
      addEventListener(P, V) {
        this._onabort.push(V);
      }
    }, o = class {
      constructor() {
        De(this, "signal", new r());
        w();
      }
      abort(P) {
        var V, fe;
        if (!this.signal.aborted) {
          this.signal.reason = P, this.signal.aborted = !0;
          for (let ie of this.signal._onabort)
            ie(P);
          (fe = (V = this.signal).onabort) == null || fe.call(V, P);
        }
      }
    };
    let A = ((m = l.env) == null ? void 0 : m.LRU_CACHE_IGNORE_AC_WARNING) !== "1", w = () => {
      A && (A = !1, h("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", w));
    };
  }
  var s = (A) => !t.has(A), n = (A) => A && A === Math.floor(A) && A > 0 && isFinite(A), a = (A) => n(A) ? A <= Math.pow(2, 8) ? Uint8Array : A <= Math.pow(2, 16) ? Uint16Array : A <= Math.pow(2, 32) ? Uint32Array : A <= Number.MAX_SAFE_INTEGER ? c : null : null, c = class extends Array {
    constructor(A) {
      super(A), this.fill(0);
    }
  }, d = (b = class {
    constructor(w, P) {
      De(this, "heap");
      De(this, "length");
      if (!B(b, y))
        throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new P(w), this.length = 0;
    }
    static create(w) {
      let P = a(w);
      if (!P)
        return [];
      Ie(b, y, !0);
      let V = new b(w, P);
      return Ie(b, y, !1), V;
    }
    push(w) {
      this.heap[this.length++] = w;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, y = new WeakMap(), Oe(b, y, !1), b), g = (v = class {
    constructor(w) {
      Oe(this, S);
      Oe(this, _);
      Oe(this, he);
      Oe(this, O);
      Oe(this, N);
      Oe(this, Y);
      Oe(this, H);
      Oe(this, _e);
      Oe(this, Re);
      Oe(this, u);
      Oe(this, T, void 0);
      Oe(this, U, void 0);
      Oe(this, k, void 0);
      Oe(this, I, void 0);
      Oe(this, D, void 0);
      De(this, "ttl");
      De(this, "ttlResolution");
      De(this, "ttlAutopurge");
      De(this, "updateAgeOnGet");
      De(this, "updateAgeOnHas");
      De(this, "allowStale");
      De(this, "noDisposeOnSet");
      De(this, "noUpdateTTL");
      De(this, "maxEntrySize");
      De(this, "sizeCalculation");
      De(this, "noDeleteOnFetchRejection");
      De(this, "noDeleteOnStaleGet");
      De(this, "allowStaleOnFetchAbort");
      De(this, "allowStaleOnFetchRejection");
      De(this, "ignoreFetchAbort");
      Oe(this, F, void 0);
      Oe(this, R, void 0);
      Oe(this, C, void 0);
      Oe(this, x, void 0);
      Oe(this, W, void 0);
      Oe(this, G, void 0);
      Oe(this, ee, void 0);
      Oe(this, E, void 0);
      Oe(this, $, void 0);
      Oe(this, Z, void 0);
      Oe(this, K, void 0);
      Oe(this, ge, void 0);
      Oe(this, ne, void 0);
      Oe(this, q, void 0);
      Oe(this, be, void 0);
      Oe(this, re, void 0);
      Oe(this, ve, void 0);
      Oe(this, ce, () => {
      });
      Oe(this, Ee, () => {
      });
      Oe(this, ue, () => {
      });
      Oe(this, M, () => !1);
      Oe(this, le, (w) => {
      });
      Oe(this, X, (w, P, V) => {
      });
      Oe(this, J, (w, P, V, fe) => {
        if (V || fe)
          throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      });
      let { max: P = 0, ttl: V, ttlResolution: fe = 1, ttlAutopurge: ie, updateAgeOnGet: ye, updateAgeOnHas: Se, allowStale: ke, dispose: $e, disposeAfter: tt, noDisposeOnSet: Me, noUpdateTTL: rt, maxSize: He = 0, maxEntrySize: ze = 0, sizeCalculation: Ve, fetchMethod: Ze, noDeleteOnFetchRejection: Ce, noDeleteOnStaleGet: We, allowStaleOnFetchRejection: it, allowStaleOnFetchAbort: Ye, ignoreFetchAbort: ht } = w;
      if (P !== 0 && !n(P))
        throw new TypeError("max option must be a nonnegative integer");
      let Dt = P ? a(P) : Array;
      if (!Dt)
        throw new Error("invalid max value: " + P);
      if (Ie(this, T, P), Ie(this, U, He), this.maxEntrySize = ze || B(this, U), this.sizeCalculation = Ve, this.sizeCalculation) {
        if (!B(this, U) && !this.maxEntrySize)
          throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function")
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (Ze !== void 0 && typeof Ze != "function")
        throw new TypeError("fetchMethod must be a function if specified");
      if (Ie(this, D, Ze), Ie(this, re, !!Ze), Ie(this, C, /* @__PURE__ */ new Map()), Ie(this, x, new Array(P).fill(void 0)), Ie(this, W, new Array(P).fill(void 0)), Ie(this, G, new Dt(P)), Ie(this, ee, new Dt(P)), Ie(this, E, 0), Ie(this, $, 0), Ie(this, Z, d.create(P)), Ie(this, F, 0), Ie(this, R, 0), typeof $e == "function" && Ie(this, k, $e), typeof tt == "function" ? (Ie(this, I, tt), Ie(this, K, [])) : (Ie(this, I, void 0), Ie(this, K, void 0)), Ie(this, be, !!B(this, k)), Ie(this, ve, !!B(this, I)), this.noDisposeOnSet = !!Me, this.noUpdateTTL = !!rt, this.noDeleteOnFetchRejection = !!Ce, this.allowStaleOnFetchRejection = !!it, this.allowStaleOnFetchAbort = !!Ye, this.ignoreFetchAbort = !!ht, this.maxEntrySize !== 0) {
        if (B(this, U) !== 0 && !n(B(this, U)))
          throw new TypeError("maxSize must be a positive integer if specified");
        if (!n(this.maxEntrySize))
          throw new TypeError("maxEntrySize must be a positive integer if specified");
        Te(this, _, vs).call(this);
      }
      if (this.allowStale = !!ke, this.noDeleteOnStaleGet = !!We, this.updateAgeOnGet = !!ye, this.updateAgeOnHas = !!Se, this.ttlResolution = n(fe) || fe === 0 ? fe : 1, this.ttlAutopurge = !!ie, this.ttl = V || 0, this.ttl) {
        if (!n(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        Te(this, S, gn).call(this);
      }
      if (B(this, T) === 0 && this.ttl === 0 && B(this, U) === 0)
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !B(this, T) && !B(this, U)) {
        let Mt = "LRU_CACHE_UNBOUNDED";
        s(Mt) && (t.add(Mt), h("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", Mt, v));
      }
    }
    static unsafeExposeInternals(w) {
      return { starts: B(w, ne), ttls: B(w, q), sizes: B(w, ge), keyMap: B(w, C), keyList: B(w, x), valList: B(w, W), next: B(w, G), prev: B(w, ee), get head() {
        return B(w, E);
      }, get tail() {
        return B(w, $);
      }, free: B(w, Z), isBackgroundFetch: (P) => {
        var V;
        return Te(V = w, _e, Le).call(V, P);
      }, backgroundFetch: (P, V, fe, ie) => {
        var ye;
        return Te(ye = w, H, Cr).call(ye, P, V, fe, ie);
      }, moveToTail: (P) => {
        var V;
        return Te(V = w, u, dr).call(V, P);
      }, indexes: (P) => {
        var V;
        return Te(V = w, he, Ut).call(V, P);
      }, rindexes: (P) => {
        var V;
        return Te(V = w, O, Lt).call(V, P);
      }, isStale: (P) => {
        var V;
        return B(V = w, M).call(V, P);
      } };
    }
    get max() {
      return B(this, T);
    }
    get maxSize() {
      return B(this, U);
    }
    get calculatedSize() {
      return B(this, R);
    }
    get size() {
      return B(this, F);
    }
    get fetchMethod() {
      return B(this, D);
    }
    get dispose() {
      return B(this, k);
    }
    get disposeAfter() {
      return B(this, I);
    }
    getRemainingTTL(w) {
      return B(this, C).has(w) ? 1 / 0 : 0;
    }
    *entries() {
      for (let w of Te(this, he, Ut).call(this))
        B(this, W)[w] !== void 0 && B(this, x)[w] !== void 0 && !Te(this, _e, Le).call(this, B(this, W)[w]) && (yield [B(this, x)[w], B(this, W)[w]]);
    }
    *rentries() {
      for (let w of Te(this, O, Lt).call(this))
        B(this, W)[w] !== void 0 && B(this, x)[w] !== void 0 && !Te(this, _e, Le).call(this, B(this, W)[w]) && (yield [B(this, x)[w], B(this, W)[w]]);
    }
    *keys() {
      for (let w of Te(this, he, Ut).call(this)) {
        let P = B(this, x)[w];
        P !== void 0 && !Te(this, _e, Le).call(this, B(this, W)[w]) && (yield P);
      }
    }
    *rkeys() {
      for (let w of Te(this, O, Lt).call(this)) {
        let P = B(this, x)[w];
        P !== void 0 && !Te(this, _e, Le).call(this, B(this, W)[w]) && (yield P);
      }
    }
    *values() {
      for (let w of Te(this, he, Ut).call(this))
        B(this, W)[w] !== void 0 && !Te(this, _e, Le).call(this, B(this, W)[w]) && (yield B(this, W)[w]);
    }
    *rvalues() {
      for (let w of Te(this, O, Lt).call(this))
        B(this, W)[w] !== void 0 && !Te(this, _e, Le).call(this, B(this, W)[w]) && (yield B(this, W)[w]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    find(w, P = {}) {
      for (let V of Te(this, he, Ut).call(this)) {
        let fe = B(this, W)[V], ie = Te(this, _e, Le).call(this, fe) ? fe.__staleWhileFetching : fe;
        if (ie !== void 0 && w(ie, B(this, x)[V], this))
          return this.get(B(this, x)[V], P);
      }
    }
    forEach(w, P = this) {
      for (let V of Te(this, he, Ut).call(this)) {
        let fe = B(this, W)[V], ie = Te(this, _e, Le).call(this, fe) ? fe.__staleWhileFetching : fe;
        ie !== void 0 && w.call(P, ie, B(this, x)[V], this);
      }
    }
    rforEach(w, P = this) {
      for (let V of Te(this, O, Lt).call(this)) {
        let fe = B(this, W)[V], ie = Te(this, _e, Le).call(this, fe) ? fe.__staleWhileFetching : fe;
        ie !== void 0 && w.call(P, ie, B(this, x)[V], this);
      }
    }
    purgeStale() {
      let w = !1;
      for (let P of Te(this, O, Lt).call(this, { allowStale: !0 }))
        B(this, M).call(this, P) && (this.delete(B(this, x)[P]), w = !0);
      return w;
    }
    dump() {
      let w = [];
      for (let P of Te(this, he, Ut).call(this, { allowStale: !0 })) {
        let V = B(this, x)[P], fe = B(this, W)[P], ie = Te(this, _e, Le).call(this, fe) ? fe.__staleWhileFetching : fe;
        if (ie === void 0 || V === void 0)
          continue;
        let ye = { value: ie };
        if (B(this, q) && B(this, ne)) {
          ye.ttl = B(this, q)[P];
          let Se = i.now() - B(this, ne)[P];
          ye.start = Math.floor(Date.now() - Se);
        }
        B(this, ge) && (ye.size = B(this, ge)[P]), w.unshift([V, ye]);
      }
      return w;
    }
    load(w) {
      this.clear();
      for (let [P, V] of w) {
        if (V.start) {
          let fe = Date.now() - V.start;
          V.start = i.now() - fe;
        }
        this.set(P, V.value, V);
      }
    }
    set(w, P, V = {}) {
      var rt, He, ze, Ve, Ze;
      if (P === void 0)
        return this.delete(w), this;
      let { ttl: fe = this.ttl, start: ie, noDisposeOnSet: ye = this.noDisposeOnSet, sizeCalculation: Se = this.sizeCalculation, status: ke } = V, { noUpdateTTL: $e = this.noUpdateTTL } = V, tt = B(this, J).call(this, w, P, V.size || 0, Se);
      if (this.maxEntrySize && tt > this.maxEntrySize)
        return ke && (ke.set = "miss", ke.maxEntrySizeExceeded = !0), this.delete(w), this;
      let Me = B(this, F) === 0 ? void 0 : B(this, C).get(w);
      if (Me === void 0)
        Me = B(this, F) === 0 ? B(this, $) : B(this, Z).length !== 0 ? B(this, Z).pop() : B(this, F) === B(this, T) ? Te(this, Y, kr).call(this, !1) : B(this, F), B(this, x)[Me] = w, B(this, W)[Me] = P, B(this, C).set(w, Me), B(this, G)[B(this, $)] = Me, B(this, ee)[Me] = B(this, $), Ie(this, $, Me), yr(this, F)._++, B(this, X).call(this, Me, tt, ke), ke && (ke.set = "add"), $e = !1;
      else {
        Te(this, u, dr).call(this, Me);
        let Ce = B(this, W)[Me];
        if (P !== Ce) {
          if (B(this, re) && Te(this, _e, Le).call(this, Ce)) {
            Ce.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: We } = Ce;
            We !== void 0 && !ye && (B(this, be) && ((rt = B(this, k)) == null || rt.call(this, We, w, "set")), B(this, ve) && ((He = B(this, K)) == null || He.push([We, w, "set"])));
          } else
            ye || (B(this, be) && ((ze = B(this, k)) == null || ze.call(this, Ce, w, "set")), B(this, ve) && ((Ve = B(this, K)) == null || Ve.push([Ce, w, "set"])));
          if (B(this, le).call(this, Me), B(this, X).call(this, Me, tt, ke), B(this, W)[Me] = P, ke) {
            ke.set = "replace";
            let We = Ce && Te(this, _e, Le).call(this, Ce) ? Ce.__staleWhileFetching : Ce;
            We !== void 0 && (ke.oldValue = We);
          }
        } else
          ke && (ke.set = "update");
      }
      if (fe !== 0 && !B(this, q) && Te(this, S, gn).call(this), B(this, q) && ($e || B(this, ue).call(this, Me, fe, ie), ke && B(this, Ee).call(this, ke, Me)), !ye && B(this, ve) && B(this, K)) {
        let Ce = B(this, K), We;
        for (; We = Ce == null ? void 0 : Ce.shift(); )
          (Ze = B(this, I)) == null || Ze.call(this, ...We);
      }
      return this;
    }
    pop() {
      var w;
      try {
        for (; B(this, F); ) {
          let P = B(this, W)[B(this, E)];
          if (Te(this, Y, kr).call(this, !0), Te(this, _e, Le).call(this, P)) {
            if (P.__staleWhileFetching)
              return P.__staleWhileFetching;
          } else if (P !== void 0)
            return P;
        }
      } finally {
        if (B(this, ve) && B(this, K)) {
          let P = B(this, K), V;
          for (; V = P == null ? void 0 : P.shift(); )
            (w = B(this, I)) == null || w.call(this, ...V);
        }
      }
    }
    has(w, P = {}) {
      let { updateAgeOnHas: V = this.updateAgeOnHas, status: fe } = P, ie = B(this, C).get(w);
      if (ie !== void 0) {
        let ye = B(this, W)[ie];
        if (Te(this, _e, Le).call(this, ye) && ye.__staleWhileFetching === void 0)
          return !1;
        if (B(this, M).call(this, ie))
          fe && (fe.has = "stale", B(this, Ee).call(this, fe, ie));
        else
          return V && B(this, ce).call(this, ie), fe && (fe.has = "hit", B(this, Ee).call(this, fe, ie)), !0;
      } else
        fe && (fe.has = "miss");
      return !1;
    }
    peek(w, P = {}) {
      let { allowStale: V = this.allowStale } = P, fe = B(this, C).get(w);
      if (fe !== void 0 && (V || !B(this, M).call(this, fe))) {
        let ie = B(this, W)[fe];
        return Te(this, _e, Le).call(this, ie) ? ie.__staleWhileFetching : ie;
      }
    }
    async fetch(w, P = {}) {
      let { allowStale: V = this.allowStale, updateAgeOnGet: fe = this.updateAgeOnGet, noDeleteOnStaleGet: ie = this.noDeleteOnStaleGet, ttl: ye = this.ttl, noDisposeOnSet: Se = this.noDisposeOnSet, size: ke = 0, sizeCalculation: $e = this.sizeCalculation, noUpdateTTL: tt = this.noUpdateTTL, noDeleteOnFetchRejection: Me = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: rt = this.allowStaleOnFetchRejection, ignoreFetchAbort: He = this.ignoreFetchAbort, allowStaleOnFetchAbort: ze = this.allowStaleOnFetchAbort, context: Ve, forceRefresh: Ze = !1, status: Ce, signal: We } = P;
      if (!B(this, re))
        return Ce && (Ce.fetch = "get"), this.get(w, { allowStale: V, updateAgeOnGet: fe, noDeleteOnStaleGet: ie, status: Ce });
      let it = { allowStale: V, updateAgeOnGet: fe, noDeleteOnStaleGet: ie, ttl: ye, noDisposeOnSet: Se, size: ke, sizeCalculation: $e, noUpdateTTL: tt, noDeleteOnFetchRejection: Me, allowStaleOnFetchRejection: rt, allowStaleOnFetchAbort: ze, ignoreFetchAbort: He, status: Ce, signal: We }, Ye = B(this, C).get(w);
      if (Ye === void 0) {
        Ce && (Ce.fetch = "miss");
        let ht = Te(this, H, Cr).call(this, w, Ye, it, Ve);
        return ht.__returned = ht;
      } else {
        let ht = B(this, W)[Ye];
        if (Te(this, _e, Le).call(this, ht)) {
          let Fn = V && ht.__staleWhileFetching !== void 0;
          return Ce && (Ce.fetch = "inflight", Fn && (Ce.returnedStale = !0)), Fn ? ht.__staleWhileFetching : ht.__returned = ht;
        }
        let Dt = B(this, M).call(this, Ye);
        if (!Ze && !Dt)
          return Ce && (Ce.fetch = "hit"), Te(this, u, dr).call(this, Ye), fe && B(this, ce).call(this, Ye), Ce && B(this, Ee).call(this, Ce, Ye), ht;
        let Mt = Te(this, H, Cr).call(this, w, Ye, it, Ve), Dn = Mt.__staleWhileFetching !== void 0 && V;
        return Ce && (Ce.fetch = Dt ? "stale" : "refresh", Dn && Dt && (Ce.returnedStale = !0)), Dn ? Mt.__staleWhileFetching : Mt.__returned = Mt;
      }
    }
    get(w, P = {}) {
      let { allowStale: V = this.allowStale, updateAgeOnGet: fe = this.updateAgeOnGet, noDeleteOnStaleGet: ie = this.noDeleteOnStaleGet, status: ye } = P, Se = B(this, C).get(w);
      if (Se !== void 0) {
        let ke = B(this, W)[Se], $e = Te(this, _e, Le).call(this, ke);
        return ye && B(this, Ee).call(this, ye, Se), B(this, M).call(this, Se) ? (ye && (ye.get = "stale"), $e ? (ye && V && ke.__staleWhileFetching !== void 0 && (ye.returnedStale = !0), V ? ke.__staleWhileFetching : void 0) : (ie || this.delete(w), ye && V && (ye.returnedStale = !0), V ? ke : void 0)) : (ye && (ye.get = "hit"), $e ? ke.__staleWhileFetching : (Te(this, u, dr).call(this, Se), fe && B(this, ce).call(this, Se), ke));
      } else
        ye && (ye.get = "miss");
    }
    delete(w) {
      var V, fe, ie, ye;
      let P = !1;
      if (B(this, F) !== 0) {
        let Se = B(this, C).get(w);
        if (Se !== void 0)
          if (P = !0, B(this, F) === 1)
            this.clear();
          else {
            B(this, le).call(this, Se);
            let ke = B(this, W)[Se];
            Te(this, _e, Le).call(this, ke) ? ke.__abortController.abort(new Error("deleted")) : (B(this, be) || B(this, ve)) && (B(this, be) && ((V = B(this, k)) == null || V.call(this, ke, w, "delete")), B(this, ve) && ((fe = B(this, K)) == null || fe.push([ke, w, "delete"]))), B(this, C).delete(w), B(this, x)[Se] = void 0, B(this, W)[Se] = void 0, Se === B(this, $) ? Ie(this, $, B(this, ee)[Se]) : Se === B(this, E) ? Ie(this, E, B(this, G)[Se]) : (B(this, G)[B(this, ee)[Se]] = B(this, G)[Se], B(this, ee)[B(this, G)[Se]] = B(this, ee)[Se]), yr(this, F)._--, B(this, Z).push(Se);
          }
      }
      if (B(this, ve) && ((ie = B(this, K)) != null && ie.length)) {
        let Se = B(this, K), ke;
        for (; ke = Se == null ? void 0 : Se.shift(); )
          (ye = B(this, I)) == null || ye.call(this, ...ke);
      }
      return P;
    }
    clear() {
      var w, P, V;
      for (let fe of Te(this, O, Lt).call(this, { allowStale: !0 })) {
        let ie = B(this, W)[fe];
        if (Te(this, _e, Le).call(this, ie))
          ie.__abortController.abort(new Error("deleted"));
        else {
          let ye = B(this, x)[fe];
          B(this, be) && ((w = B(this, k)) == null || w.call(this, ie, ye, "delete")), B(this, ve) && ((P = B(this, K)) == null || P.push([ie, ye, "delete"]));
        }
      }
      if (B(this, C).clear(), B(this, W).fill(void 0), B(this, x).fill(void 0), B(this, q) && B(this, ne) && (B(this, q).fill(0), B(this, ne).fill(0)), B(this, ge) && B(this, ge).fill(0), Ie(this, E, 0), Ie(this, $, 0), B(this, Z).length = 0, Ie(this, R, 0), Ie(this, F, 0), B(this, ve) && B(this, K)) {
        let fe = B(this, K), ie;
        for (; ie = fe == null ? void 0 : fe.shift(); )
          (V = B(this, I)) == null || V.call(this, ...ie);
      }
    }
  }, T = new WeakMap(), U = new WeakMap(), k = new WeakMap(), I = new WeakMap(), D = new WeakMap(), F = new WeakMap(), R = new WeakMap(), C = new WeakMap(), x = new WeakMap(), W = new WeakMap(), G = new WeakMap(), ee = new WeakMap(), E = new WeakMap(), $ = new WeakMap(), Z = new WeakMap(), K = new WeakMap(), ge = new WeakMap(), ne = new WeakMap(), q = new WeakMap(), be = new WeakMap(), re = new WeakMap(), ve = new WeakMap(), S = new WeakSet(), gn = function() {
    let w = new c(B(this, T)), P = new c(B(this, T));
    Ie(this, q, w), Ie(this, ne, P), Ie(this, ue, (ie, ye, Se = i.now()) => {
      if (P[ie] = ye !== 0 ? Se : 0, w[ie] = ye, ye !== 0 && this.ttlAutopurge) {
        let ke = setTimeout(() => {
          B(this, M).call(this, ie) && this.delete(B(this, x)[ie]);
        }, ye + 1);
        ke.unref && ke.unref();
      }
    }), Ie(this, ce, (ie) => {
      P[ie] = w[ie] !== 0 ? i.now() : 0;
    }), Ie(this, Ee, (ie, ye) => {
      if (w[ye]) {
        let Se = w[ye], ke = P[ye];
        ie.ttl = Se, ie.start = ke, ie.now = V || fe();
        let $e = ie.now - ke;
        ie.remainingTTL = Se - $e;
      }
    });
    let V = 0, fe = () => {
      let ie = i.now();
      if (this.ttlResolution > 0) {
        V = ie;
        let ye = setTimeout(() => V = 0, this.ttlResolution);
        ye.unref && ye.unref();
      }
      return ie;
    };
    this.getRemainingTTL = (ie) => {
      let ye = B(this, C).get(ie);
      if (ye === void 0)
        return 0;
      let Se = w[ye], ke = P[ye];
      if (Se === 0 || ke === 0)
        return 1 / 0;
      let $e = (V || fe()) - ke;
      return Se - $e;
    }, Ie(this, M, (ie) => w[ie] !== 0 && P[ie] !== 0 && (V || fe()) - P[ie] > w[ie]);
  }, ce = new WeakMap(), Ee = new WeakMap(), ue = new WeakMap(), M = new WeakMap(), _ = new WeakSet(), vs = function() {
    let w = new c(B(this, T));
    Ie(this, R, 0), Ie(this, ge, w), Ie(this, le, (P) => {
      Ie(this, R, B(this, R) - w[P]), w[P] = 0;
    }), Ie(this, J, (P, V, fe, ie) => {
      if (Te(this, _e, Le).call(this, V))
        return 0;
      if (!n(fe))
        if (ie) {
          if (typeof ie != "function")
            throw new TypeError("sizeCalculation must be a function");
          if (fe = ie(V, P), !n(fe))
            throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else
          throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return fe;
    }), Ie(this, X, (P, V, fe) => {
      if (w[P] = V, B(this, U)) {
        let ie = B(this, U) - w[P];
        for (; B(this, R) > ie; )
          Te(this, Y, kr).call(this, !0);
      }
      Ie(this, R, B(this, R) + w[P]), fe && (fe.entrySize = V, fe.totalCalculatedSize = B(this, R));
    });
  }, le = new WeakMap(), X = new WeakMap(), J = new WeakMap(), he = new WeakSet(), Ut = function* ({ allowStale: w = this.allowStale } = {}) {
    if (B(this, F))
      for (let P = B(this, $); !(!Te(this, N, mn).call(this, P) || ((w || !B(this, M).call(this, P)) && (yield P), P === B(this, E))); )
        P = B(this, ee)[P];
  }, O = new WeakSet(), Lt = function* ({ allowStale: w = this.allowStale } = {}) {
    if (B(this, F))
      for (let P = B(this, E); !(!Te(this, N, mn).call(this, P) || ((w || !B(this, M).call(this, P)) && (yield P), P === B(this, $))); )
        P = B(this, G)[P];
  }, N = new WeakSet(), mn = function(w) {
    return w !== void 0 && B(this, C).get(B(this, x)[w]) === w;
  }, Y = new WeakSet(), kr = function(w) {
    var ie, ye;
    let P = B(this, E), V = B(this, x)[P], fe = B(this, W)[P];
    return B(this, re) && Te(this, _e, Le).call(this, fe) ? fe.__abortController.abort(new Error("evicted")) : (B(this, be) || B(this, ve)) && (B(this, be) && ((ie = B(this, k)) == null || ie.call(this, fe, V, "evict")), B(this, ve) && ((ye = B(this, K)) == null || ye.push([fe, V, "evict"]))), B(this, le).call(this, P), w && (B(this, x)[P] = void 0, B(this, W)[P] = void 0, B(this, Z).push(P)), B(this, F) === 1 ? (Ie(this, E, Ie(this, $, 0)), B(this, Z).length = 0) : Ie(this, E, B(this, G)[P]), B(this, C).delete(V), yr(this, F)._--, P;
  }, H = new WeakSet(), Cr = function(w, P, V, fe) {
    let ie = P === void 0 ? void 0 : B(this, W)[P];
    if (Te(this, _e, Le).call(this, ie))
      return ie;
    let ye = new o(), { signal: Se } = V;
    Se == null || Se.addEventListener("abort", () => ye.abort(Se.reason), { signal: ye.signal });
    let ke = { signal: ye.signal, options: V, context: fe }, $e = (Ve, Ze = !1) => {
      let { aborted: Ce } = ye.signal, We = V.ignoreFetchAbort && Ve !== void 0;
      if (V.status && (Ce && !Ze ? (V.status.fetchAborted = !0, V.status.fetchError = ye.signal.reason, We && (V.status.fetchAbortIgnored = !0)) : V.status.fetchResolved = !0), Ce && !We && !Ze)
        return Me(ye.signal.reason);
      let it = He;
      return B(this, W)[P] === He && (Ve === void 0 ? it.__staleWhileFetching ? B(this, W)[P] = it.__staleWhileFetching : this.delete(w) : (V.status && (V.status.fetchUpdated = !0), this.set(w, Ve, ke.options))), Ve;
    }, tt = (Ve) => (V.status && (V.status.fetchRejected = !0, V.status.fetchError = Ve), Me(Ve)), Me = (Ve) => {
      let { aborted: Ze } = ye.signal, Ce = Ze && V.allowStaleOnFetchAbort, We = Ce || V.allowStaleOnFetchRejection, it = We || V.noDeleteOnFetchRejection, Ye = He;
      if (B(this, W)[P] === He && (!it || Ye.__staleWhileFetching === void 0 ? this.delete(w) : Ce || (B(this, W)[P] = Ye.__staleWhileFetching)), We)
        return V.status && Ye.__staleWhileFetching !== void 0 && (V.status.returnedStale = !0), Ye.__staleWhileFetching;
      if (Ye.__returned === Ye)
        throw Ve;
    }, rt = (Ve, Ze) => {
      var We;
      let Ce = (We = B(this, D)) == null ? void 0 : We.call(this, w, ie, ke);
      Ce && Ce instanceof Promise && Ce.then((it) => Ve(it === void 0 ? void 0 : it), Ze), ye.signal.addEventListener("abort", () => {
        (!V.ignoreFetchAbort || V.allowStaleOnFetchAbort) && (Ve(void 0), V.allowStaleOnFetchAbort && (Ve = (it) => $e(it, !0)));
      });
    };
    V.status && (V.status.fetchDispatched = !0);
    let He = new Promise(rt).then($e, tt), ze = Object.assign(He, { __abortController: ye, __staleWhileFetching: ie, __returned: void 0 });
    return P === void 0 ? (this.set(w, ze, { ...ke.options, status: void 0 }), P = B(this, C).get(w)) : B(this, W)[P] = ze, ze;
  }, _e = new WeakSet(), Le = function(w) {
    if (!B(this, re))
      return !1;
    let P = w;
    return !!P && P instanceof Promise && P.hasOwnProperty("__staleWhileFetching") && P.__abortController instanceof o;
  }, Re = new WeakSet(), bn = function(w, P) {
    B(this, ee)[P] = w, B(this, G)[w] = P;
  }, u = new WeakSet(), dr = function(w) {
    w !== B(this, $) && (w === B(this, E) ? Ie(this, E, B(this, G)[w]) : Te(this, Re, bn).call(this, B(this, ee)[w], B(this, G)[w]), Te(this, Re, bn).call(this, B(this, $), w), Ie(this, $, w));
  }, v);
  e.LRUCache = g;
}), Pt = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.ContainerIterator = e.Container = e.Base = void 0;
  var i = class {
    constructor(h = 0) {
      this.iteratorType = h;
    }
    equals(h) {
      return this.o === h.o;
    }
  };
  e.ContainerIterator = i;
  var t = class {
    constructor() {
      this.i = 0;
    }
    get length() {
      return this.i;
    }
    size() {
      return this.i;
    }
    empty() {
      return this.i === 0;
    }
  };
  e.Base = t;
  var l = class extends t {
  };
  e.Container = l;
}), vl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Pt(), t = class extends i.Base {
    constructor(h = []) {
      super(), this.S = [];
      let o = this;
      h.forEach(function(r) {
        o.push(r);
      });
    }
    clear() {
      this.i = 0, this.S = [];
    }
    push(h) {
      return this.S.push(h), this.i += 1, this.i;
    }
    pop() {
      if (this.i !== 0)
        return this.i -= 1, this.S.pop();
    }
    top() {
      return this.S[this.i - 1];
    }
  }, l = t;
  e.default = l;
}), _l = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Pt(), t = class extends i.Base {
    constructor(h = []) {
      super(), this.j = 0, this.q = [];
      let o = this;
      h.forEach(function(r) {
        o.push(r);
      });
    }
    clear() {
      this.q = [], this.i = this.j = 0;
    }
    push(h) {
      let o = this.q.length;
      if (this.j / o > 0.5 && this.j + this.i >= o && o > 4096) {
        let r = this.i;
        for (let s = 0; s < r; ++s)
          this.q[s] = this.q[this.j + s];
        this.j = 0, this.q[this.i] = h;
      } else
        this.q[this.j + this.i] = h;
      return ++this.i;
    }
    pop() {
      if (this.i === 0)
        return;
      let h = this.q[this.j++];
      return this.i -= 1, h;
    }
    front() {
      if (this.i !== 0)
        return this.q[this.j];
    }
  }, l = t;
  e.default = l;
}), El = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Pt(), t = class extends i.Base {
    constructor(h = [], o = function(s, n) {
      return s > n ? -1 : s < n ? 1 : 0;
    }, r = !0) {
      if (super(), this.v = o, Array.isArray(h))
        this.C = r ? [...h] : h;
      else {
        this.C = [];
        let n = this;
        h.forEach(function(a) {
          n.C.push(a);
        });
      }
      this.i = this.C.length;
      let s = this.i >> 1;
      for (let n = this.i - 1 >> 1; n >= 0; --n)
        this.k(n, s);
    }
    m(h) {
      let o = this.C[h];
      for (; h > 0; ) {
        let r = h - 1 >> 1, s = this.C[r];
        if (this.v(s, o) <= 0)
          break;
        this.C[h] = s, h = r;
      }
      this.C[h] = o;
    }
    k(h, o) {
      let r = this.C[h];
      for (; h < o; ) {
        let s = h << 1 | 1, n = s + 1, a = this.C[s];
        if (n < this.i && this.v(a, this.C[n]) > 0 && (s = n, a = this.C[n]), this.v(a, r) >= 0)
          break;
        this.C[h] = a, h = s;
      }
      this.C[h] = r;
    }
    clear() {
      this.i = 0, this.C.length = 0;
    }
    push(h) {
      this.C.push(h), this.m(this.i), this.i += 1;
    }
    pop() {
      if (this.i === 0)
        return;
      let h = this.C[0], o = this.C.pop();
      return this.i -= 1, this.i && (this.C[0] = o, this.k(0, this.i >> 1)), h;
    }
    top() {
      return this.C[0];
    }
    find(h) {
      return this.C.indexOf(h) >= 0;
    }
    remove(h) {
      let o = this.C.indexOf(h);
      return o < 0 ? !1 : (o === 0 ? this.pop() : o === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(o, 1, this.C.pop()), this.i -= 1, this.m(o), this.k(o, this.i >> 1)), !0);
    }
    updateItem(h) {
      let o = this.C.indexOf(h);
      return o < 0 ? !1 : (this.m(o), this.k(o, this.i >> 1), !0);
    }
    toArray() {
      return [...this.C];
    }
  }, l = t;
  e.default = l;
}), Ln = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Pt(), t = class extends i.Container {
  }, l = t;
  e.default = l;
}), Bt = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.throwIteratorAccessError = i;
  function i() {
    throw new RangeError("Iterator access denied!");
  }
}), _s = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.RandomIterator = void 0;
  var i = Pt(), t = Bt(), l = class extends i.ContainerIterator {
    constructor(h, o) {
      super(o), this.o = h, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === 0 && (0, t.throwIteratorAccessError)(), this.o -= 1, this;
      }, this.next = function() {
        return this.o === this.container.size() && (0, t.throwIteratorAccessError)(), this.o += 1, this;
      }) : (this.pre = function() {
        return this.o === this.container.size() - 1 && (0, t.throwIteratorAccessError)(), this.o += 1, this;
      }, this.next = function() {
        return this.o === -1 && (0, t.throwIteratorAccessError)(), this.o -= 1, this;
      });
    }
    get pointer() {
      return this.container.getElementByPos(this.o);
    }
    set pointer(h) {
      this.container.setElementByPos(this.o, h);
    }
  };
  e.RandomIterator = l;
}), Sl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = l(Ln()), t = _s();
  function l(s) {
    return s && s.t ? s : { default: s };
  }
  var h = class Es extends t.RandomIterator {
    constructor(n, a, c) {
      super(n, c), this.container = a;
    }
    copy() {
      return new Es(this.o, this.container, this.iteratorType);
    }
  }, o = class extends i.default {
    constructor(s = [], n = !0) {
      if (super(), Array.isArray(s))
        this.J = n ? [...s] : s, this.i = s.length;
      else {
        this.J = [];
        let a = this;
        s.forEach(function(c) {
          a.pushBack(c);
        });
      }
    }
    clear() {
      this.i = 0, this.J.length = 0;
    }
    begin() {
      return new h(0, this);
    }
    end() {
      return new h(this.i, this);
    }
    rBegin() {
      return new h(this.i - 1, this, 1);
    }
    rEnd() {
      return new h(-1, this, 1);
    }
    front() {
      return this.J[0];
    }
    back() {
      return this.J[this.i - 1];
    }
    getElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      return this.J[s];
    }
    eraseElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      return this.J.splice(s, 1), this.i -= 1, this.i;
    }
    eraseElementByValue(s) {
      let n = 0;
      for (let a = 0; a < this.i; ++a)
        this.J[a] !== s && (this.J[n++] = this.J[a]);
      return this.i = this.J.length = n, this.i;
    }
    eraseElementByIterator(s) {
      let n = s.o;
      return s = s.next(), this.eraseElementByPos(n), s;
    }
    pushBack(s) {
      return this.J.push(s), this.i += 1, this.i;
    }
    popBack() {
      if (this.i !== 0)
        return this.i -= 1, this.J.pop();
    }
    setElementByPos(s, n) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      this.J[s] = n;
    }
    insert(s, n, a = 1) {
      if (s < 0 || s > this.i)
        throw new RangeError();
      return this.J.splice(s, 0, ...new Array(a).fill(n)), this.i += a, this.i;
    }
    find(s) {
      for (let n = 0; n < this.i; ++n)
        if (this.J[n] === s)
          return new h(n, this);
      return this.end();
    }
    reverse() {
      this.J.reverse();
    }
    unique() {
      let s = 1;
      for (let n = 1; n < this.i; ++n)
        this.J[n] !== this.J[n - 1] && (this.J[s++] = this.J[n]);
      return this.i = this.J.length = s, this.i;
    }
    sort(s) {
      this.J.sort(s);
    }
    forEach(s) {
      for (let n = 0; n < this.i; ++n)
        s(this.J[n], n, this);
    }
    [Symbol.iterator]() {
      return (function* () {
        yield* this.J;
      }).bind(this)();
    }
  }, r = o;
  e.default = r;
}), Al = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = h(Ln()), t = Pt(), l = Bt();
  function h(n) {
    return n && n.t ? n : { default: n };
  }
  var o = class Ss extends t.ContainerIterator {
    constructor(a, c, d, g) {
      super(g), this.o = a, this.h = c, this.container = d, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
    get pointer() {
      return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.l;
    }
    set pointer(a) {
      this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.l = a;
    }
    copy() {
      return new Ss(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends i.default {
    constructor(n = []) {
      super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
      let a = this;
      n.forEach(function(c) {
        a.pushBack(c);
      });
    }
    V(n) {
      let { L: a, B: c } = n;
      a.B = c, c.L = a, n === this.p && (this.p = c), n === this._ && (this._ = a), this.i -= 1;
    }
    G(n, a) {
      let c = a.B, d = { l: n, L: a, B: c };
      a.B = d, c.L = d, a === this.h && (this.p = d), c === this.h && (this._ = d), this.i += 1;
    }
    clear() {
      this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    begin() {
      return new o(this.p, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this._, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      return this.p.l;
    }
    back() {
      return this._.l;
    }
    getElementByPos(n) {
      if (n < 0 || n > this.i - 1)
        throw new RangeError();
      let a = this.p;
      for (; n--; )
        a = a.B;
      return a.l;
    }
    eraseElementByPos(n) {
      if (n < 0 || n > this.i - 1)
        throw new RangeError();
      let a = this.p;
      for (; n--; )
        a = a.B;
      return this.V(a), this.i;
    }
    eraseElementByValue(n) {
      let a = this.p;
      for (; a !== this.h; )
        a.l === n && this.V(a), a = a.B;
      return this.i;
    }
    eraseElementByIterator(n) {
      let a = n.o;
      return a === this.h && (0, l.throwIteratorAccessError)(), n = n.next(), this.V(a), n;
    }
    pushBack(n) {
      return this.G(n, this._), this.i;
    }
    popBack() {
      if (this.i === 0)
        return;
      let n = this._.l;
      return this.V(this._), n;
    }
    pushFront(n) {
      return this.G(n, this.h), this.i;
    }
    popFront() {
      if (this.i === 0)
        return;
      let n = this.p.l;
      return this.V(this.p), n;
    }
    setElementByPos(n, a) {
      if (n < 0 || n > this.i - 1)
        throw new RangeError();
      let c = this.p;
      for (; n--; )
        c = c.B;
      c.l = a;
    }
    insert(n, a, c = 1) {
      if (n < 0 || n > this.i)
        throw new RangeError();
      if (c <= 0)
        return this.i;
      if (n === 0)
        for (; c--; )
          this.pushFront(a);
      else if (n === this.i)
        for (; c--; )
          this.pushBack(a);
      else {
        let d = this.p;
        for (let m = 1; m < n; ++m)
          d = d.B;
        let g = d.B;
        for (this.i += c; c--; )
          d.B = { l: a, L: d }, d.B.L = d, d = d.B;
        d.B = g, g.L = d;
      }
      return this.i;
    }
    find(n) {
      let a = this.p;
      for (; a !== this.h; ) {
        if (a.l === n)
          return new o(a, this.h, this);
        a = a.B;
      }
      return this.end();
    }
    reverse() {
      if (this.i <= 1)
        return;
      let n = this.p, a = this._, c = 0;
      for (; c << 1 < this.i; ) {
        let d = n.l;
        n.l = a.l, a.l = d, n = n.B, a = a.L, c += 1;
      }
    }
    unique() {
      if (this.i <= 1)
        return this.i;
      let n = this.p;
      for (; n !== this.h; ) {
        let a = n;
        for (; a.B !== this.h && a.l === a.B.l; )
          a = a.B, this.i -= 1;
        n.B = a.B, n.B.L = n, n = n.B;
      }
      return this.i;
    }
    sort(n) {
      if (this.i <= 1)
        return;
      let a = [];
      this.forEach(function(d) {
        a.push(d);
      }), a.sort(n);
      let c = this.p;
      a.forEach(function(d) {
        c.l = d, c = c.B;
      });
    }
    merge(n) {
      let a = this;
      if (this.i === 0)
        n.forEach(function(c) {
          a.pushBack(c);
        });
      else {
        let c = this.p;
        n.forEach(function(d) {
          for (; c !== a.h && c.l <= d; )
            c = c.B;
          a.G(d, c.L);
        });
      }
      return this.i;
    }
    forEach(n) {
      let a = this.p, c = 0;
      for (; a !== this.h; )
        n(a.l, c++, this), a = a.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        if (this.i === 0)
          return;
        let n = this.p;
        for (; n !== this.h; )
          yield n.l, n = n.B;
      }).bind(this)();
    }
  }, s = r;
  e.default = s;
}), Tl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = l(Ln()), t = _s();
  function l(s) {
    return s && s.t ? s : { default: s };
  }
  var h = class As extends t.RandomIterator {
    constructor(n, a, c) {
      super(n, c), this.container = a;
    }
    copy() {
      return new As(this.o, this.container, this.iteratorType);
    }
  }, o = class extends i.default {
    constructor(s = [], n = 4096) {
      super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
      let a = (() => {
        if (typeof s.length == "number")
          return s.length;
        if (typeof s.size == "number")
          return s.size;
        if (typeof s.size == "function")
          return s.size();
        throw new TypeError("Cannot get the length or size of the container");
      })();
      this.F = n, this.P = Math.max(Math.ceil(a / this.F), 1);
      for (let g = 0; g < this.P; ++g)
        this.A.push(new Array(this.F));
      let c = Math.ceil(a / this.F);
      this.j = this.R = (this.P >> 1) - (c >> 1), this.D = this.N = this.F - a % this.F >> 1;
      let d = this;
      s.forEach(function(g) {
        d.pushBack(g);
      });
    }
    T() {
      let s = [], n = Math.max(this.P >> 1, 1);
      for (let a = 0; a < n; ++a)
        s[a] = new Array(this.F);
      for (let a = this.j; a < this.P; ++a)
        s[s.length] = this.A[a];
      for (let a = 0; a < this.R; ++a)
        s[s.length] = this.A[a];
      s[s.length] = [...this.A[this.R]], this.j = n, this.R = s.length - 1;
      for (let a = 0; a < n; ++a)
        s[s.length] = new Array(this.F);
      this.A = s, this.P = s.length;
    }
    O(s) {
      let n = this.D + s + 1, a = n % this.F, c = a - 1, d = this.j + (n - a) / this.F;
      return a === 0 && (d -= 1), d %= this.P, c < 0 && (c += this.F), { curNodeBucketIndex: d, curNodePointerIndex: c };
    }
    clear() {
      this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1;
    }
    begin() {
      return new h(0, this);
    }
    end() {
      return new h(this.i, this);
    }
    rBegin() {
      return new h(this.i - 1, this, 1);
    }
    rEnd() {
      return new h(-1, this, 1);
    }
    front() {
      if (this.i !== 0)
        return this.A[this.j][this.D];
    }
    back() {
      if (this.i !== 0)
        return this.A[this.R][this.N];
    }
    pushBack(s) {
      return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = s, this.i;
    }
    popBack() {
      if (this.i === 0)
        return;
      let s = this.A[this.R][this.N];
      return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, s;
    }
    pushFront(s) {
      return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = s, this.i;
    }
    popFront() {
      if (this.i === 0)
        return;
      let s = this.A[this.j][this.D];
      return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, s;
    }
    getElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      let { curNodeBucketIndex: n, curNodePointerIndex: a } = this.O(s);
      return this.A[n][a];
    }
    setElementByPos(s, n) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      let { curNodeBucketIndex: a, curNodePointerIndex: c } = this.O(s);
      this.A[a][c] = n;
    }
    insert(s, n, a = 1) {
      if (s < 0 || s > this.i)
        throw new RangeError();
      if (s === 0)
        for (; a--; )
          this.pushFront(n);
      else if (s === this.i)
        for (; a--; )
          this.pushBack(n);
      else {
        let c = [];
        for (let d = s; d < this.i; ++d)
          c.push(this.getElementByPos(d));
        this.cut(s - 1);
        for (let d = 0; d < a; ++d)
          this.pushBack(n);
        for (let d = 0; d < c.length; ++d)
          this.pushBack(c[d]);
      }
      return this.i;
    }
    cut(s) {
      if (s < 0)
        return this.clear(), 0;
      let { curNodeBucketIndex: n, curNodePointerIndex: a } = this.O(s);
      return this.R = n, this.N = a, this.i = s + 1, this.i;
    }
    eraseElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      if (s === 0)
        this.popFront();
      else if (s === this.i - 1)
        this.popBack();
      else {
        let n = [];
        for (let c = s + 1; c < this.i; ++c)
          n.push(this.getElementByPos(c));
        this.cut(s), this.popBack();
        let a = this;
        n.forEach(function(c) {
          a.pushBack(c);
        });
      }
      return this.i;
    }
    eraseElementByValue(s) {
      if (this.i === 0)
        return 0;
      let n = [];
      for (let c = 0; c < this.i; ++c) {
        let d = this.getElementByPos(c);
        d !== s && n.push(d);
      }
      let a = n.length;
      for (let c = 0; c < a; ++c)
        this.setElementByPos(c, n[c]);
      return this.cut(a - 1);
    }
    eraseElementByIterator(s) {
      let n = s.o;
      return this.eraseElementByPos(n), s = s.next(), s;
    }
    find(s) {
      for (let n = 0; n < this.i; ++n)
        if (this.getElementByPos(n) === s)
          return new h(n, this);
      return this.end();
    }
    reverse() {
      let s = 0, n = this.i - 1;
      for (; s < n; ) {
        let a = this.getElementByPos(s);
        this.setElementByPos(s, this.getElementByPos(n)), this.setElementByPos(n, a), s += 1, n -= 1;
      }
    }
    unique() {
      if (this.i <= 1)
        return this.i;
      let s = 1, n = this.getElementByPos(0);
      for (let a = 1; a < this.i; ++a) {
        let c = this.getElementByPos(a);
        c !== n && (n = c, this.setElementByPos(s++, c));
      }
      for (; this.i > s; )
        this.popBack();
      return this.i;
    }
    sort(s) {
      let n = [];
      for (let a = 0; a < this.i; ++a)
        n.push(this.getElementByPos(a));
      n.sort(s);
      for (let a = 0; a < this.i; ++a)
        this.setElementByPos(a, n[a]);
    }
    shrinkToFit() {
      if (this.i === 0)
        return;
      let s = [];
      this.forEach(function(n) {
        s.push(n);
      }), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
      for (let n = 0; n < this.P; ++n)
        this.A.push(new Array(this.F));
      for (let n = 0; n < s.length; ++n)
        this.pushBack(s[n]);
    }
    forEach(s) {
      for (let n = 0; n < this.i; ++n)
        s(this.getElementByPos(n), n, this);
    }
    [Symbol.iterator]() {
      return (function* () {
        for (let s = 0; s < this.i; ++s)
          yield this.getElementByPos(s);
      }).bind(this)();
    }
  }, r = o;
  e.default = r;
}), Il = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.TreeNodeEnableIndex = e.TreeNode = void 0;
  var i = class {
    constructor(l, h) {
      this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = l, this.l = h;
    }
    L() {
      let l = this;
      if (l.ee === 1 && l.tt.tt === l)
        l = l.W;
      else if (l.U)
        for (l = l.U; l.W; )
          l = l.W;
      else {
        let h = l.tt;
        for (; h.U === l; )
          l = h, h = l.tt;
        l = h;
      }
      return l;
    }
    B() {
      let l = this;
      if (l.W) {
        for (l = l.W; l.U; )
          l = l.U;
        return l;
      } else {
        let h = l.tt;
        for (; h.W === l; )
          l = h, h = l.tt;
        return l.W !== h ? h : l;
      }
    }
    te() {
      let l = this.tt, h = this.W, o = h.U;
      return l.tt === this ? l.tt = h : l.U === this ? l.U = h : l.W = h, h.tt = l, h.U = this, this.tt = h, this.W = o, o && (o.tt = this), h;
    }
    se() {
      let l = this.tt, h = this.U, o = h.W;
      return l.tt === this ? l.tt = h : l.U === this ? l.U = h : l.W = h, h.tt = l, h.W = this, this.tt = h, this.U = o, o && (o.tt = this), h;
    }
  };
  e.TreeNode = i;
  var t = class extends i {
    constructor() {
      super(...arguments), this.rt = 1;
    }
    te() {
      let l = super.te();
      return this.ie(), l.ie(), l;
    }
    se() {
      let l = super.se();
      return this.ie(), l.ie(), l;
    }
    ie() {
      this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
    }
  };
  e.TreeNodeEnableIndex = t;
}), Ts = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Il(), t = Pt(), l = Bt(), h = class extends t.Container {
    constructor(r = function(n, a) {
      return n < a ? -1 : n > a ? 1 : 0;
    }, s = !1) {
      super(), this.Y = void 0, this.v = r, s ? (this.re = i.TreeNodeEnableIndex, this.M = function(n, a, c) {
        let d = this.ne(n, a, c);
        if (d) {
          let g = d.tt;
          for (; g !== this.h; )
            g.rt += 1, g = g.tt;
          let m = this.he(d);
          if (m) {
            let { parentNode: b, grandParent: y, curNode: T } = m;
            b.ie(), y.ie(), T.ie();
          }
        }
        return this.i;
      }, this.V = function(n) {
        let a = this.fe(n);
        for (; a !== this.h; )
          a.rt -= 1, a = a.tt;
      }) : (this.re = i.TreeNode, this.M = function(n, a, c) {
        let d = this.ne(n, a, c);
        return d && this.he(d), this.i;
      }, this.V = this.fe), this.h = new this.re();
    }
    X(r, s) {
      let n = this.h;
      for (; r; ) {
        let a = this.v(r.u, s);
        if (a < 0)
          r = r.W;
        else if (a > 0)
          n = r, r = r.U;
        else
          return r;
      }
      return n;
    }
    Z(r, s) {
      let n = this.h;
      for (; r; )
        this.v(r.u, s) <= 0 ? r = r.W : (n = r, r = r.U);
      return n;
    }
    $(r, s) {
      let n = this.h;
      for (; r; ) {
        let a = this.v(r.u, s);
        if (a < 0)
          n = r, r = r.W;
        else if (a > 0)
          r = r.U;
        else
          return r;
      }
      return n;
    }
    rr(r, s) {
      let n = this.h;
      for (; r; )
        this.v(r.u, s) < 0 ? (n = r, r = r.W) : r = r.U;
      return n;
    }
    ue(r) {
      for (; ; ) {
        let s = r.tt;
        if (s === this.h)
          return;
        if (r.ee === 1) {
          r.ee = 0;
          return;
        }
        if (r === s.U) {
          let n = s.W;
          if (n.ee === 1)
            n.ee = 0, s.ee = 1, s === this.Y ? this.Y = s.te() : s.te();
          else if (n.W && n.W.ee === 1) {
            n.ee = s.ee, s.ee = 0, n.W.ee = 0, s === this.Y ? this.Y = s.te() : s.te();
            return;
          } else
            n.U && n.U.ee === 1 ? (n.ee = 1, n.U.ee = 0, n.se()) : (n.ee = 1, r = s);
        } else {
          let n = s.U;
          if (n.ee === 1)
            n.ee = 0, s.ee = 1, s === this.Y ? this.Y = s.se() : s.se();
          else if (n.U && n.U.ee === 1) {
            n.ee = s.ee, s.ee = 0, n.U.ee = 0, s === this.Y ? this.Y = s.se() : s.se();
            return;
          } else
            n.W && n.W.ee === 1 ? (n.ee = 1, n.W.ee = 0, n.te()) : (n.ee = 1, r = s);
        }
      }
    }
    fe(r) {
      if (this.i === 1)
        return this.clear(), this.h;
      let s = r;
      for (; s.U || s.W; ) {
        if (s.W)
          for (s = s.W; s.U; )
            s = s.U;
        else
          s = s.U;
        [r.u, s.u] = [s.u, r.u], [r.l, s.l] = [s.l, r.l], r = s;
      }
      this.h.U === s ? this.h.U = s.tt : this.h.W === s && (this.h.W = s.tt), this.ue(s);
      let n = s.tt;
      return s === n.U ? n.U = void 0 : n.W = void 0, this.i -= 1, this.Y.ee = 0, n;
    }
    oe(r, s) {
      return r === void 0 ? !1 : this.oe(r.U, s) || s(r) ? !0 : this.oe(r.W, s);
    }
    he(r) {
      for (; ; ) {
        let s = r.tt;
        if (s.ee === 0)
          return;
        let n = s.tt;
        if (s === n.U) {
          let a = n.W;
          if (a && a.ee === 1) {
            if (a.ee = s.ee = 0, n === this.Y)
              return;
            n.ee = 1, r = n;
            continue;
          } else if (r === s.W) {
            if (r.ee = 0, r.U && (r.U.tt = s), r.W && (r.W.tt = n), s.W = r.U, n.U = r.W, r.U = s, r.W = n, n === this.Y)
              this.Y = r, this.h.tt = r;
            else {
              let c = n.tt;
              c.U === n ? c.U = r : c.W = r;
            }
            return r.tt = n.tt, s.tt = r, n.tt = r, n.ee = 1, { parentNode: s, grandParent: n, curNode: r };
          } else
            s.ee = 0, n === this.Y ? this.Y = n.se() : n.se(), n.ee = 1;
        } else {
          let a = n.U;
          if (a && a.ee === 1) {
            if (a.ee = s.ee = 0, n === this.Y)
              return;
            n.ee = 1, r = n;
            continue;
          } else if (r === s.U) {
            if (r.ee = 0, r.U && (r.U.tt = n), r.W && (r.W.tt = s), n.W = r.U, s.U = r.W, r.U = n, r.W = s, n === this.Y)
              this.Y = r, this.h.tt = r;
            else {
              let c = n.tt;
              c.U === n ? c.U = r : c.W = r;
            }
            return r.tt = n.tt, s.tt = r, n.tt = r, n.ee = 1, { parentNode: s, grandParent: n, curNode: r };
          } else
            s.ee = 0, n === this.Y ? this.Y = n.te() : n.te(), n.ee = 1;
        }
        return;
      }
    }
    ne(r, s, n) {
      if (this.Y === void 0) {
        this.i += 1, this.Y = new this.re(r, s), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, this.h.W = this.Y;
        return;
      }
      let a, c = this.h.U, d = this.v(c.u, r);
      if (d === 0) {
        c.l = s;
        return;
      } else if (d > 0)
        c.U = new this.re(r, s), c.U.tt = c, a = c.U, this.h.U = a;
      else {
        let g = this.h.W, m = this.v(g.u, r);
        if (m === 0) {
          g.l = s;
          return;
        } else if (m < 0)
          g.W = new this.re(r, s), g.W.tt = g, a = g.W, this.h.W = a;
        else {
          if (n !== void 0) {
            let b = n.o;
            if (b !== this.h) {
              let y = this.v(b.u, r);
              if (y === 0) {
                b.l = s;
                return;
              } else if (y > 0) {
                let T = b.L(), U = this.v(T.u, r);
                if (U === 0) {
                  T.l = s;
                  return;
                } else
                  U < 0 && (a = new this.re(r, s), T.W === void 0 ? (T.W = a, a.tt = T) : (b.U = a, a.tt = b));
              }
            }
          }
          if (a === void 0)
            for (a = this.Y; ; ) {
              let b = this.v(a.u, r);
              if (b > 0) {
                if (a.U === void 0) {
                  a.U = new this.re(r, s), a.U.tt = a, a = a.U;
                  break;
                }
                a = a.U;
              } else if (b < 0) {
                if (a.W === void 0) {
                  a.W = new this.re(r, s), a.W.tt = a, a = a.W;
                  break;
                }
                a = a.W;
              } else {
                a.l = s;
                return;
              }
            }
        }
      }
      return this.i += 1, a;
    }
    I(r, s) {
      for (; r; ) {
        let n = this.v(r.u, s);
        if (n < 0)
          r = r.W;
        else if (n > 0)
          r = r.U;
        else
          return r;
      }
      return r || this.h;
    }
    clear() {
      this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0;
    }
    updateKeyByIterator(r, s) {
      let n = r.o;
      if (n === this.h && (0, l.throwIteratorAccessError)(), this.i === 1)
        return n.u = s, !0;
      if (n === this.h.U)
        return this.v(n.B().u, s) > 0 ? (n.u = s, !0) : !1;
      if (n === this.h.W)
        return this.v(n.L().u, s) < 0 ? (n.u = s, !0) : !1;
      let a = n.L().u;
      if (this.v(a, s) >= 0)
        return !1;
      let c = n.B().u;
      return this.v(c, s) <= 0 ? !1 : (n.u = s, !0);
    }
    eraseElementByPos(r) {
      if (r < 0 || r > this.i - 1)
        throw new RangeError();
      let s = 0, n = this;
      return this.oe(this.Y, function(a) {
        return r === s ? (n.V(a), !0) : (s += 1, !1);
      }), this.i;
    }
    eraseElementByKey(r) {
      if (this.i === 0)
        return !1;
      let s = this.I(this.Y, r);
      return s === this.h ? !1 : (this.V(s), !0);
    }
    eraseElementByIterator(r) {
      let s = r.o;
      s === this.h && (0, l.throwIteratorAccessError)();
      let n = s.W === void 0;
      return r.iteratorType === 0 ? n && r.next() : (!n || s.U === void 0) && r.next(), this.V(s), r;
    }
    forEach(r) {
      let s = 0;
      for (let n of this)
        r(n, s++, this);
    }
    getElementByPos(r) {
      if (r < 0 || r > this.i - 1)
        throw new RangeError();
      let s, n = 0;
      for (let a of this) {
        if (n === r) {
          s = a;
          break;
        }
        n += 1;
      }
      return s;
    }
    getHeight() {
      if (this.i === 0)
        return 0;
      let r = function(s) {
        return s ? Math.max(r(s.U), r(s.W)) + 1 : 0;
      };
      return r(this.Y);
    }
  }, o = h;
  e.default = o;
}), Is = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Pt(), t = Bt(), l = class extends i.ContainerIterator {
    constructor(o, r, s) {
      super(s), this.o = o, this.h = r, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === this.h.U && (0, t.throwIteratorAccessError)(), this.o = this.o.L(), this;
      }, this.next = function() {
        return this.o === this.h && (0, t.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }) : (this.pre = function() {
        return this.o === this.h.W && (0, t.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }, this.next = function() {
        return this.o === this.h && (0, t.throwIteratorAccessError)(), this.o = this.o.L(), this;
      });
    }
    get index() {
      let o = this.o, r = this.h.tt;
      if (o === this.h)
        return r ? r.rt - 1 : 0;
      let s = 0;
      for (o.U && (s += o.U.rt); o !== r; ) {
        let n = o.tt;
        o === n.W && (s += 1, n.U && (s += n.U.rt)), o = n;
      }
      return s;
    }
  }, h = l;
  e.default = h;
}), kl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = h(Ts()), t = h(Is()), l = Bt();
  function h(n) {
    return n && n.t ? n : { default: n };
  }
  var o = class ks extends t.default {
    constructor(a, c, d, g) {
      super(a, c, g), this.container = d;
    }
    get pointer() {
      return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new ks(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends i.default {
    constructor(n = [], a, c) {
      super(a, c);
      let d = this;
      n.forEach(function(g) {
        d.insert(g);
      });
    }
    *K(n) {
      n !== void 0 && (yield* this.K(n.U), yield n.u, yield* this.K(n.W));
    }
    begin() {
      return new o(this.h.U || this.h, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      return this.h.U ? this.h.U.u : void 0;
    }
    back() {
      return this.h.W ? this.h.W.u : void 0;
    }
    insert(n, a) {
      return this.M(n, void 0, a);
    }
    find(n) {
      let a = this.I(this.Y, n);
      return new o(a, this.h, this);
    }
    lowerBound(n) {
      let a = this.X(this.Y, n);
      return new o(a, this.h, this);
    }
    upperBound(n) {
      let a = this.Z(this.Y, n);
      return new o(a, this.h, this);
    }
    reverseLowerBound(n) {
      let a = this.$(this.Y, n);
      return new o(a, this.h, this);
    }
    reverseUpperBound(n) {
      let a = this.rr(this.Y, n);
      return new o(a, this.h, this);
    }
    union(n) {
      let a = this;
      return n.forEach(function(c) {
        a.insert(c);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, s = r;
  e.default = s;
}), Cl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = h(Ts()), t = h(Is()), l = Bt();
  function h(n) {
    return n && n.t ? n : { default: n };
  }
  var o = class Cs extends t.default {
    constructor(a, c, d, g) {
      super(a, c, g), this.container = d;
    }
    get pointer() {
      this.o === this.h && (0, l.throwIteratorAccessError)();
      let a = this;
      return new Proxy([], { get(c, d) {
        if (d === "0")
          return a.o.u;
        if (d === "1")
          return a.o.l;
      }, set(c, d, g) {
        if (d !== "1")
          throw new TypeError("props must be 1");
        return a.o.l = g, !0;
      } });
    }
    copy() {
      return new Cs(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends i.default {
    constructor(n = [], a, c) {
      super(a, c);
      let d = this;
      n.forEach(function(g) {
        d.setElement(g[0], g[1]);
      });
    }
    *K(n) {
      n !== void 0 && (yield* this.K(n.U), yield [n.u, n.l], yield* this.K(n.W));
    }
    begin() {
      return new o(this.h.U || this.h, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      if (this.i === 0)
        return;
      let n = this.h.U;
      return [n.u, n.l];
    }
    back() {
      if (this.i === 0)
        return;
      let n = this.h.W;
      return [n.u, n.l];
    }
    lowerBound(n) {
      let a = this.X(this.Y, n);
      return new o(a, this.h, this);
    }
    upperBound(n) {
      let a = this.Z(this.Y, n);
      return new o(a, this.h, this);
    }
    reverseLowerBound(n) {
      let a = this.$(this.Y, n);
      return new o(a, this.h, this);
    }
    reverseUpperBound(n) {
      let a = this.rr(this.Y, n);
      return new o(a, this.h, this);
    }
    setElement(n, a, c) {
      return this.M(n, a, c);
    }
    find(n) {
      let a = this.I(this.Y, n);
      return new o(a, this.h, this);
    }
    getElementByKey(n) {
      return this.I(this.Y, n).l;
    }
    union(n) {
      let a = this;
      return n.forEach(function(c) {
        a.setElement(c[0], c[1]);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, s = r;
  e.default = s;
}), Os = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = i;
  function i(t) {
    let l = typeof t;
    return l === "object" && t !== null || l === "function";
  }
}), Rs = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.HashContainerIterator = e.HashContainer = void 0;
  var i = Pt(), t = h(Os()), l = Bt();
  function h(s) {
    return s && s.t ? s : { default: s };
  }
  var o = class extends i.ContainerIterator {
    constructor(s, n, a) {
      super(a), this.o = s, this.h = n, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, l.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
  };
  e.HashContainerIterator = o;
  var r = class extends i.Container {
    constructor() {
      super(), this.H = [], this.g = {}, this.HASH_TAG = Symbol("@@HASH_TAG"), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h;
    }
    V(s) {
      let { L: n, B: a } = s;
      n.B = a, a.L = n, s === this.p && (this.p = a), s === this._ && (this._ = n), this.i -= 1;
    }
    M(s, n, a) {
      a === void 0 && (a = (0, t.default)(s));
      let c;
      if (a) {
        let d = s[this.HASH_TAG];
        if (d !== void 0)
          return this.H[d].l = n, this.i;
        Object.defineProperty(s, this.HASH_TAG, { value: this.H.length, configurable: !0 }), c = { u: s, l: n, L: this._, B: this.h }, this.H.push(c);
      } else {
        let d = this.g[s];
        if (d)
          return d.l = n, this.i;
        c = { u: s, l: n, L: this._, B: this.h }, this.g[s] = c;
      }
      return this.i === 0 ? (this.p = c, this.h.B = c) : this._.B = c, this._ = c, this.h.L = c, ++this.i;
    }
    I(s, n) {
      if (n === void 0 && (n = (0, t.default)(s)), n) {
        let a = s[this.HASH_TAG];
        return a === void 0 ? this.h : this.H[a];
      } else
        return this.g[s] || this.h;
    }
    clear() {
      let s = this.HASH_TAG;
      this.H.forEach(function(n) {
        delete n.u[s];
      }), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    eraseElementByKey(s, n) {
      let a;
      if (n === void 0 && (n = (0, t.default)(s)), n) {
        let c = s[this.HASH_TAG];
        if (c === void 0)
          return !1;
        delete s[this.HASH_TAG], a = this.H[c], delete this.H[c];
      } else {
        if (a = this.g[s], a === void 0)
          return !1;
        delete this.g[s];
      }
      return this.V(a), !0;
    }
    eraseElementByIterator(s) {
      let n = s.o;
      return n === this.h && (0, l.throwIteratorAccessError)(), this.V(n), s.next();
    }
    eraseElementByPos(s) {
      if (s < 0 || s > this.i - 1)
        throw new RangeError();
      let n = this.p;
      for (; s--; )
        n = n.B;
      return this.V(n), this.i;
    }
  };
  e.HashContainer = r;
}), Ol = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Rs(), t = Bt(), l = class Ps extends i.HashContainerIterator {
    constructor(s, n, a, c) {
      super(s, n, c), this.container = a;
    }
    get pointer() {
      return this.o === this.h && (0, t.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new Ps(this.o, this.h, this.container, this.iteratorType);
    }
  }, h = class extends i.HashContainer {
    constructor(r = []) {
      super();
      let s = this;
      r.forEach(function(n) {
        s.insert(n);
      });
    }
    begin() {
      return new l(this.p, this.h, this);
    }
    end() {
      return new l(this.h, this.h, this);
    }
    rBegin() {
      return new l(this._, this.h, this, 1);
    }
    rEnd() {
      return new l(this.h, this.h, this, 1);
    }
    front() {
      return this.p.u;
    }
    back() {
      return this._.u;
    }
    insert(r, s) {
      return this.M(r, void 0, s);
    }
    getElementByPos(r) {
      if (r < 0 || r > this.i - 1)
        throw new RangeError();
      let s = this.p;
      for (; r--; )
        s = s.B;
      return s.u;
    }
    find(r, s) {
      let n = this.I(r, s);
      return new l(n, this.h, this);
    }
    forEach(r) {
      let s = 0, n = this.p;
      for (; n !== this.h; )
        r(n.u, s++, this), n = n.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        let r = this.p;
        for (; r !== this.h; )
          yield r.u, r = r.B;
      }).bind(this)();
    }
  }, o = h;
  e.default = o;
}), Rl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), e.default = void 0;
  var i = Rs(), t = h(Os()), l = Bt();
  function h(n) {
    return n && n.t ? n : { default: n };
  }
  var o = class Bs extends i.HashContainerIterator {
    constructor(a, c, d, g) {
      super(a, c, g), this.container = d;
    }
    get pointer() {
      this.o === this.h && (0, l.throwIteratorAccessError)();
      let a = this;
      return new Proxy([], { get(c, d) {
        if (d === "0")
          return a.o.u;
        if (d === "1")
          return a.o.l;
      }, set(c, d, g) {
        if (d !== "1")
          throw new TypeError("props must be 1");
        return a.o.l = g, !0;
      } });
    }
    copy() {
      return new Bs(this.o, this.h, this.container, this.iteratorType);
    }
  }, r = class extends i.HashContainer {
    constructor(n = []) {
      super();
      let a = this;
      n.forEach(function(c) {
        a.setElement(c[0], c[1]);
      });
    }
    begin() {
      return new o(this.p, this.h, this);
    }
    end() {
      return new o(this.h, this.h, this);
    }
    rBegin() {
      return new o(this._, this.h, this, 1);
    }
    rEnd() {
      return new o(this.h, this.h, this, 1);
    }
    front() {
      if (this.i !== 0)
        return [this.p.u, this.p.l];
    }
    back() {
      if (this.i !== 0)
        return [this._.u, this._.l];
    }
    setElement(n, a, c) {
      return this.M(n, a, c);
    }
    getElementByKey(n, a) {
      if (a === void 0 && (a = (0, t.default)(n)), a) {
        let d = n[this.HASH_TAG];
        return d !== void 0 ? this.H[d].l : void 0;
      }
      let c = this.g[n];
      return c ? c.l : void 0;
    }
    getElementByPos(n) {
      if (n < 0 || n > this.i - 1)
        throw new RangeError();
      let a = this.p;
      for (; n--; )
        a = a.B;
      return [a.u, a.l];
    }
    find(n, a) {
      let c = this.I(n, a);
      return new o(c, this.h, this);
    }
    forEach(n) {
      let a = 0, c = this.p;
      for (; c !== this.h; )
        n([c.u, c.l], a++, this), c = c.B;
    }
    [Symbol.iterator]() {
      return (function* () {
        let n = this.p;
        for (; n !== this.h; )
          yield [n.u, n.l], n = n.B;
      }).bind(this)();
    }
  }, s = r;
  e.default = s;
}), Pl = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "t", { value: !0 }), Object.defineProperty(e, "Deque", { enumerable: !0, get: function() {
    return r.default;
  } }), Object.defineProperty(e, "HashMap", { enumerable: !0, get: function() {
    return c.default;
  } }), Object.defineProperty(e, "HashSet", { enumerable: !0, get: function() {
    return a.default;
  } }), Object.defineProperty(e, "LinkList", { enumerable: !0, get: function() {
    return o.default;
  } }), Object.defineProperty(e, "OrderedMap", { enumerable: !0, get: function() {
    return n.default;
  } }), Object.defineProperty(e, "OrderedSet", { enumerable: !0, get: function() {
    return s.default;
  } }), Object.defineProperty(e, "PriorityQueue", { enumerable: !0, get: function() {
    return l.default;
  } }), Object.defineProperty(e, "Queue", { enumerable: !0, get: function() {
    return t.default;
  } }), Object.defineProperty(e, "Stack", { enumerable: !0, get: function() {
    return i.default;
  } }), Object.defineProperty(e, "Vector", { enumerable: !0, get: function() {
    return h.default;
  } });
  var i = d(vl()), t = d(_l()), l = d(El()), h = d(Sl()), o = d(Al()), r = d(Tl()), s = d(kl()), n = d(Cl()), a = d(Ol()), c = d(Rl());
  function d(g) {
    return g && g.t ? g : { default: g };
  }
}), Bl = me((e, i) => {
  ae(), se(), oe();
  var t = Pl().OrderedSet, l = Ot()("number-allocator:trace"), h = Ot()("number-allocator:error");
  function o(s, n) {
    this.low = s, this.high = n;
  }
  o.prototype.equals = function(s) {
    return this.low === s.low && this.high === s.high;
  }, o.prototype.compare = function(s) {
    return this.low < s.low && this.high < s.low ? -1 : s.low < this.low && s.high < this.low ? 1 : 0;
  };
  function r(s, n) {
    if (!(this instanceof r))
      return new r(s, n);
    this.min = s, this.max = n, this.ss = new t([], (a, c) => a.compare(c)), l("Create"), this.clear();
  }
  r.prototype.firstVacant = function() {
    return this.ss.size() === 0 ? null : this.ss.front().low;
  }, r.prototype.alloc = function() {
    if (this.ss.size() === 0)
      return l("alloc():empty"), null;
    let s = this.ss.begin(), n = s.pointer.low, a = s.pointer.high, c = n;
    return c + 1 <= a ? this.ss.updateKeyByIterator(s, new o(n + 1, a)) : this.ss.eraseElementByPos(0), l("alloc():" + c), c;
  }, r.prototype.use = function(s) {
    let n = new o(s, s), a = this.ss.lowerBound(n);
    if (!a.equals(this.ss.end())) {
      let c = a.pointer.low, d = a.pointer.high;
      return a.pointer.equals(n) ? (this.ss.eraseElementByIterator(a), l("use():" + s), !0) : c > s ? !1 : c === s ? (this.ss.updateKeyByIterator(a, new o(c + 1, d)), l("use():" + s), !0) : d === s ? (this.ss.updateKeyByIterator(a, new o(c, d - 1)), l("use():" + s), !0) : (this.ss.updateKeyByIterator(a, new o(s + 1, d)), this.ss.insert(new o(c, s - 1)), l("use():" + s), !0);
    }
    return l("use():failed"), !1;
  }, r.prototype.free = function(s) {
    if (s < this.min || s > this.max) {
      h("free():" + s + " is out of range");
      return;
    }
    let n = new o(s, s), a = this.ss.upperBound(n);
    if (a.equals(this.ss.end())) {
      if (a.equals(this.ss.begin())) {
        this.ss.insert(n);
        return;
      }
      a.pre();
      let c = a.pointer.high;
      a.pointer.high + 1 === s ? this.ss.updateKeyByIterator(a, new o(c, s)) : this.ss.insert(n);
    } else if (a.equals(this.ss.begin()))
      if (s + 1 === a.pointer.low) {
        let c = a.pointer.high;
        this.ss.updateKeyByIterator(a, new o(s, c));
      } else
        this.ss.insert(n);
    else {
      let c = a.pointer.low, d = a.pointer.high;
      a.pre();
      let g = a.pointer.low;
      a.pointer.high + 1 === s ? s + 1 === c ? (this.ss.eraseElementByIterator(a), this.ss.updateKeyByIterator(a, new o(g, d))) : this.ss.updateKeyByIterator(a, new o(g, s)) : s + 1 === c ? (this.ss.eraseElementByIterator(a.next()), this.ss.insert(new o(s, d))) : this.ss.insert(n);
    }
    l("free():" + s);
  }, r.prototype.clear = function() {
    l("clear()"), this.ss.clear(), this.ss.insert(new o(this.min, this.max));
  }, r.prototype.intervalCount = function() {
    return this.ss.size();
  }, r.prototype.dump = function() {
    console.log("length:" + this.ss.size());
    for (let s of this.ss)
      console.log(s);
  }, i.exports = r;
}), Ms = me((e, i) => {
  ae(), se(), oe();
  var t = Bl();
  i.exports.NumberAllocator = t;
}), Ml = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = wl(), t = Ms(), l = class {
    constructor(h) {
      h > 0 && (this.aliasToTopic = new i.LRUCache({ max: h }), this.topicToAlias = {}, this.numberAllocator = new t.NumberAllocator(1, h), this.max = h, this.length = 0);
    }
    put(h, o) {
      if (o === 0 || o > this.max)
        return !1;
      let r = this.aliasToTopic.get(o);
      return r && delete this.topicToAlias[r], this.aliasToTopic.set(o, h), this.topicToAlias[h] = o, this.numberAllocator.use(o), this.length = this.aliasToTopic.size, !0;
    }
    getTopicByAlias(h) {
      return this.aliasToTopic.get(h);
    }
    getAliasByTopic(h) {
      let o = this.topicToAlias[h];
      return typeof o < "u" && this.aliasToTopic.get(o), o;
    }
    clear() {
      this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0;
    }
    getLruAlias() {
      return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
    }
  };
  e.default = l;
}), xl = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Wr(), l = i(Ml()), h = br(), o = (r, s) => {
    r.log("_handleConnack");
    let { options: n } = r, a = n.protocolVersion === 5 ? s.reasonCode : s.returnCode;
    if (clearTimeout(r.connackTimer), delete r.topicAliasSend, s.properties) {
      if (s.properties.topicAliasMaximum) {
        if (s.properties.topicAliasMaximum > 65535) {
          r.emit("error", new Error("topicAliasMaximum from broker is out of range"));
          return;
        }
        s.properties.topicAliasMaximum > 0 && (r.topicAliasSend = new l.default(s.properties.topicAliasMaximum));
      }
      s.properties.serverKeepAlive && n.keepalive && (n.keepalive = s.properties.serverKeepAlive, r._shiftPingInterval()), s.properties.maximumPacketSize && (n.properties || (n.properties = {}), n.properties.maximumPacketSize = s.properties.maximumPacketSize);
    }
    if (a === 0)
      r.reconnecting = !1, r._onConnect(s);
    else if (a > 0) {
      let c = new h.ErrorWithReasonCode(`Connection refused: ${t.ReasonCodes[a]}`, a);
      r.emit("error", c);
    }
  };
  e.default = o;
}), Ul = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = (t, l, h) => {
    t.log("handling pubrel packet");
    let o = typeof h < "u" ? h : t.noop, { messageId: r } = l, s = { cmd: "pubcomp", messageId: r };
    t.incomingStore.get(l, (n, a) => {
      n ? t._sendPacket(s, o) : (t.emit("message", a.topic, a.payload, a), t.handleMessage(a, (c) => {
        if (c)
          return o(c);
        t.incomingStore.del(a, t.noop), t._sendPacket(s, o);
      }));
    });
  };
  e.default = i;
}), Ll = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = i(ml()), l = i(yl()), h = i(xl()), o = i(Wr()), r = i(Ul()), s = (n, a, c) => {
    let { options: d } = n;
    if (d.protocolVersion === 5 && d.properties && d.properties.maximumPacketSize && d.properties.maximumPacketSize < a.length)
      return n.emit("error", new Error(`exceeding packets size ${a.cmd}`)), n.end({ reasonCode: 149, properties: { reasonString: "Maximum packet size was exceeded" } }), n;
    switch (n.log("_handlePacket :: emitting packetreceive"), n.emit("packetreceive", a), a.cmd) {
      case "publish":
        (0, t.default)(n, a, c);
        break;
      case "puback":
      case "pubrec":
      case "pubcomp":
      case "suback":
      case "unsuback":
        (0, o.default)(n, a), c();
        break;
      case "pubrel":
        (0, r.default)(n, a, c);
        break;
      case "connack":
        (0, h.default)(n, a), c();
        break;
      case "auth":
        (0, l.default)(n, a), c();
        break;
      case "pingresp":
        n.pingResp = !0, c();
        break;
      case "disconnect":
        n.emit("disconnect", a), c();
        break;
      default:
        n.log("_handlePacket :: unknown command"), c();
        break;
    }
  };
  e.default = s;
}), Nl = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.TypedEventEmitter = void 0;
  var t = i((ar(), xe(tr))), l = br(), h = class {
  };
  e.TypedEventEmitter = h, (0, l.applyMixin)(h, t.default);
}), qr = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 }), e.isReactNativeBrowser = e.isWebWorker = void 0;
  var i = () => typeof window < "u" && typeof window.document < "u", t = () => {
    var o, r;
    return !!(typeof self == "object" && !((r = (o = self == null ? void 0 : self.constructor) === null || o === void 0 ? void 0 : o.name) === null || r === void 0) && r.includes("WorkerGlobalScope"));
  }, l = () => typeof at < "u" && at.product === "ReactNative", h = i() || t() || l();
  e.isWebWorker = t(), e.isReactNativeBrowser = l(), e.default = h;
}), jl = me((e, i) => {
  ae(), se(), oe(), function(t, l) {
    typeof e == "object" && typeof i < "u" ? l(e) : typeof define == "function" && define.amd ? define(["exports"], l) : (t = typeof globalThis < "u" ? globalThis : t || self, l(t.fastUniqueNumbers = {}));
  }(e, function(t) {
    var l = function(m) {
      return function(b) {
        var y = m(b);
        return b.add(y), y;
      };
    }, h = function(m) {
      return function(b, y) {
        return m.set(b, y), y;
      };
    }, o = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, r = 536870912, s = r * 2, n = function(m, b) {
      return function(y) {
        var T = b.get(y), U = T === void 0 ? y.size : T < s ? T + 1 : 0;
        if (!y.has(U))
          return m(y, U);
        if (y.size < r) {
          for (; y.has(U); )
            U = Math.floor(Math.random() * s);
          return m(y, U);
        }
        if (y.size > o)
          throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; y.has(U); )
          U = Math.floor(Math.random() * o);
        return m(y, U);
      };
    }, a = /* @__PURE__ */ new WeakMap(), c = h(a), d = n(c, a), g = l(d);
    t.addUniqueNumber = g, t.generateUniqueNumber = d;
  });
}), Dl = me((e, i) => {
  ae(), se(), oe(), function(t, l) {
    typeof e == "object" && typeof i < "u" ? l(e, jl()) : typeof define == "function" && define.amd ? define(["exports", "fast-unique-numbers"], l) : (t = typeof globalThis < "u" ? globalThis : t || self, l(t.workerTimersBroker = {}, t.fastUniqueNumbers));
  }(e, function(t, l) {
    var h = function(s) {
      return s.method !== void 0 && s.method === "call";
    }, o = function(s) {
      return s.error === null && typeof s.id == "number";
    }, r = function(s) {
      var n = /* @__PURE__ */ new Map([[0, function() {
      }]]), a = /* @__PURE__ */ new Map([[0, function() {
      }]]), c = /* @__PURE__ */ new Map(), d = new Worker(s);
      d.addEventListener("message", function(T) {
        var U = T.data;
        if (h(U)) {
          var k = U.params, I = k.timerId, D = k.timerType;
          if (D === "interval") {
            var F = n.get(I);
            if (typeof F == "number") {
              var R = c.get(F);
              if (R === void 0 || R.timerId !== I || R.timerType !== D)
                throw new Error("The timer is in an undefined state.");
            } else if (typeof F < "u")
              F();
            else
              throw new Error("The timer is in an undefined state.");
          } else if (D === "timeout") {
            var C = a.get(I);
            if (typeof C == "number") {
              var x = c.get(C);
              if (x === void 0 || x.timerId !== I || x.timerType !== D)
                throw new Error("The timer is in an undefined state.");
            } else if (typeof C < "u")
              C(), a.delete(I);
            else
              throw new Error("The timer is in an undefined state.");
          }
        } else if (o(U)) {
          var W = U.id, G = c.get(W);
          if (G === void 0)
            throw new Error("The timer is in an undefined state.");
          var ee = G.timerId, E = G.timerType;
          c.delete(W), E === "interval" ? n.delete(ee) : a.delete(ee);
        } else {
          var $ = U.error.message;
          throw new Error($);
        }
      });
      var g = function(T) {
        var U = l.generateUniqueNumber(c);
        c.set(U, { timerId: T, timerType: "interval" }), n.set(T, U), d.postMessage({ id: U, method: "clear", params: { timerId: T, timerType: "interval" } });
      }, m = function(T) {
        var U = l.generateUniqueNumber(c);
        c.set(U, { timerId: T, timerType: "timeout" }), a.set(T, U), d.postMessage({ id: U, method: "clear", params: { timerId: T, timerType: "timeout" } });
      }, b = function(T) {
        var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, k = l.generateUniqueNumber(n);
        return n.set(k, function() {
          T(), typeof n.get(k) == "function" && d.postMessage({ id: null, method: "set", params: { delay: U, now: performance.now(), timerId: k, timerType: "interval" } });
        }), d.postMessage({ id: null, method: "set", params: { delay: U, now: performance.now(), timerId: k, timerType: "interval" } }), k;
      }, y = function(T) {
        var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, k = l.generateUniqueNumber(a);
        return a.set(k, T), d.postMessage({ id: null, method: "set", params: { delay: U, now: performance.now(), timerId: k, timerType: "timeout" } }), k;
      };
      return { clearInterval: g, clearTimeout: m, setInterval: b, setTimeout: y };
    };
    t.load = r;
  });
}), Fl = me((e, i) => {
  ae(), se(), oe(), function(t, l) {
    typeof e == "object" && typeof i < "u" ? l(e, Dl()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], l) : (t = typeof globalThis < "u" ? globalThis : t || self, l(t.workerTimers = {}, t.workerTimersBroker));
  }(e, function(t, l) {
    var h = function(d, g) {
      var m = null;
      return function() {
        if (m !== null)
          return m;
        var b = new Blob([g], { type: "application/javascript; charset=utf-8" }), y = URL.createObjectURL(b);
        return m = d(y), setTimeout(function() {
          return URL.revokeObjectURL(y);
        }), m;
      };
    }, o = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`, r = h(l.load, o), s = function(d) {
      return r().clearInterval(d);
    }, n = function(d) {
      return r().clearTimeout(d);
    }, a = function() {
      var d;
      return (d = r()).setInterval.apply(d, arguments);
    }, c = function() {
      var d;
      return (d = r()).setTimeout.apply(d, arguments);
    };
    t.clearInterval = s, t.clearTimeout = n, t.setInterval = a, t.setTimeout = c;
  });
}), Wl = me((e) => {
  ae(), se(), oe();
  var i = e && e.__createBinding || (Object.create ? function(a, c, d, g) {
    g === void 0 && (g = d);
    var m = Object.getOwnPropertyDescriptor(c, d);
    (!m || ("get" in m ? !c.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
      return c[d];
    } }), Object.defineProperty(a, g, m);
  } : function(a, c, d, g) {
    g === void 0 && (g = d), a[g] = c[d];
  }), t = e && e.__setModuleDefault || (Object.create ? function(a, c) {
    Object.defineProperty(a, "default", { enumerable: !0, value: c });
  } : function(a, c) {
    a.default = c;
  }), l = e && e.__importStar || function(a) {
    if (a && a.__esModule)
      return a;
    var c = {};
    if (a != null)
      for (var d in a)
        d !== "default" && Object.prototype.hasOwnProperty.call(a, d) && i(c, a, d);
    return t(c, a), c;
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var h = l(qr()), o = Fl(), r = { set: o.setTimeout, clear: o.clearTimeout }, s = { set: (a, c) => setTimeout(a, c), clear: (a) => clearTimeout(a) }, n = (a) => {
    switch (a) {
      case "native":
        return s;
      case "worker":
        return r;
      case "auto":
      default:
        return h.default && !h.isWebWorker && !h.isReactNativeBrowser ? r : s;
    }
  };
  e.default = n;
}), xs = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = i(Wl()), l = class {
    constructor(h, o, r) {
      this.destroyed = !1, this.keepalive = h * 1e3, this.checkPing = o, this.timer = (0, t.default)(r), this.reschedule();
    }
    clear() {
      this.timerId && (this.timer.clear(this.timerId), this.timerId = null);
    }
    destroy() {
      this.clear(), this.destroyed = !0;
    }
    reschedule() {
      this.destroyed || (this.clear(), this.timerId = this.timer.set(() => {
        this.destroyed || (this.checkPing(), this.reschedule());
      }, this.keepalive));
    }
  };
  e.default = l;
}), yn = me((e) => {
  ae(), se(), oe();
  var i = e && e.__createBinding || (Object.create ? function(F, R, C, x) {
    x === void 0 && (x = C);
    var W = Object.getOwnPropertyDescriptor(R, C);
    (!W || ("get" in W ? !R.__esModule : W.writable || W.configurable)) && (W = { enumerable: !0, get: function() {
      return R[C];
    } }), Object.defineProperty(F, x, W);
  } : function(F, R, C, x) {
    x === void 0 && (x = C), F[x] = R[C];
  }), t = e && e.__setModuleDefault || (Object.create ? function(F, R) {
    Object.defineProperty(F, "default", { enumerable: !0, value: R });
  } : function(F, R) {
    F.default = R;
  }), l = e && e.__importStar || function(F) {
    if (F && F.__esModule)
      return F;
    var R = {};
    if (F != null)
      for (var C in F)
        C !== "default" && Object.prototype.hasOwnProperty.call(F, C) && i(R, F, C);
    return t(R, F), R;
  }, h = e && e.__importDefault || function(F) {
    return F && F.__esModule ? F : { default: F };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = h(Ra()), r = h(fl()), s = h(bs()), n = rr(), a = h(dl()), c = l(gl()), d = h(Ot()), g = h(ys()), m = h(Ll()), b = br(), y = Nl(), T = h(xs()), U = l(qr()), k = globalThis.setImmediate || ((...F) => {
    let R = F.shift();
    (0, b.nextTick)(() => {
      R(...F);
    });
  }), I = { keepalive: 60, reschedulePings: !0, protocolId: "MQTT", protocolVersion: 4, reconnectPeriod: 1e3, connectTimeout: 30 * 1e3, clean: !0, resubscribe: !0, writeCache: !0, timerVariant: "auto" }, D = class wn extends y.TypedEventEmitter {
    static defaultId() {
      return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
    }
    constructor(R, C) {
      super(), this.options = C || {};
      for (let x in I)
        typeof this.options[x] > "u" ? this.options[x] = I[x] : this.options[x] = C[x];
      this.log = this.options.log || (0, d.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: version:", wn.VERSION), U.isWebWorker ? this.log("MqttClient :: environment", "webworker") : this.log("MqttClient :: environment", U.default ? "browser" : "node"), this.log("MqttClient :: options.protocol", C.protocol), this.log("MqttClient :: options.protocolVersion", C.protocolVersion), this.log("MqttClient :: options.username", C.username), this.log("MqttClient :: options.keepalive", C.keepalive), this.log("MqttClient :: options.reconnectPeriod", C.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", C.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", C.properties ? C.properties.topicAliasMaximum : void 0), this.options.clientId = typeof C.clientId == "string" ? C.clientId : wn.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = C.protocolVersion === 5 && C.customHandleAcks ? C.customHandleAcks : (...x) => {
        x[3](null, 0);
      }, this.options.writeCache || (r.default.writeToStream.cacheNumbers = !1), this.streamBuilder = R, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new s.default() : this.options.messageIdProvider, this.outgoingStore = C.outgoingStore || new g.default(), this.incomingStore = C.incomingStore || new g.default(), this.queueQoSZero = C.queueQoSZero === void 0 ? !0 : C.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.reconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, C.properties && C.properties.topicAliasMaximum > 0 && (C.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new o.default(C.properties.topicAliasMaximum)), this.on("connect", () => {
        let { queue: x } = this, W = () => {
          let G = x.shift();
          this.log("deliver :: entry %o", G);
          let ee = null;
          if (!G) {
            this._resubscribe();
            return;
          }
          ee = G.packet, this.log("deliver :: call _sendPacket for %o", ee);
          let E = !0;
          ee.messageId && ee.messageId !== 0 && (this.messageIdProvider.register(ee.messageId) || (E = !1)), E ? this._sendPacket(ee, ($) => {
            G.cb && G.cb($), W();
          }) : (this.log("messageId: %d has already used. The message is skipped and removed.", ee.messageId), W());
        };
        this.log("connect :: sending queued packets"), W();
      }), this.on("close", () => {
        this.log("close :: connected set to `false`"), this.connected = !1, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this.log("close :: destroy ping timer"), this.pingTimer && (this.pingTimer.destroy(), this.pingTimer = null), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect();
      }), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect());
    }
    handleAuth(R, C) {
      C();
    }
    handleMessage(R, C) {
      C();
    }
    _nextId() {
      return this.messageIdProvider.allocate();
    }
    getLastMessageId() {
      return this.messageIdProvider.getLastAllocated();
    }
    connect() {
      var R;
      let C = new n.Writable(), x = r.default.parser(this.options), W = null, G = [];
      this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), x.on("packet", (K) => {
        this.log("parser :: on packet push to packets array."), G.push(K);
      });
      let ee = () => {
        this.log("work :: getting next packet in queue");
        let K = G.shift();
        if (K)
          this.log("work :: packet pulled from queue"), (0, m.default)(this, K, E);
        else {
          this.log("work :: no packets in queue");
          let ge = W;
          W = null, this.log("work :: done flag is %s", !!ge), ge && ge();
        }
      }, E = () => {
        if (G.length)
          (0, b.nextTick)(ee);
        else {
          let K = W;
          W = null, K();
        }
      };
      C._write = (K, ge, ne) => {
        W = ne, this.log("writable stream :: parsing buffer"), x.parse(K), ee();
      };
      let $ = (K) => {
        this.log("streamErrorHandler :: error", K.message), K.code ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", K)) : this.noop(K);
      };
      this.log("connect :: pipe stream to writable stream"), this.stream.pipe(C), this.stream.on("error", $), this.stream.on("close", () => {
        this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close");
      }), this.log("connect: sending packet `connect`");
      let Z = { cmd: "connect", protocolId: this.options.protocolId, protocolVersion: this.options.protocolVersion, clean: this.options.clean, clientId: this.options.clientId, keepalive: this.options.keepalive, username: this.options.username, password: this.options.password, properties: this.options.properties };
      if (this.options.will && (Z.will = Object.assign(Object.assign({}, this.options.will), { payload: (R = this.options.will) === null || R === void 0 ? void 0 : R.payload })), this.topicAliasRecv && (Z.properties || (Z.properties = {}), this.topicAliasRecv && (Z.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(Z), x.on("error", this.emit.bind(this, "error")), this.options.properties) {
        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData)
          return this.end(() => this.emit("error", new Error("Packet has no Authentication Method"))), this;
        if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket == "object") {
          let K = Object.assign({ cmd: "auth", reasonCode: 0 }, this.options.authPacket);
          this._writePacket(K);
        }
      }
      return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(() => {
        this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this.emit("error", new Error("connack timeout")), this._cleanUp(!0);
      }, this.options.connectTimeout), this;
    }
    publish(R, C, x, W) {
      this.log("publish :: message `%s` to topic `%s`", C, R);
      let { options: G } = this;
      typeof x == "function" && (W = x, x = null), x = x || {}, x = Object.assign(Object.assign({}, { qos: 0, retain: !1, dup: !1 }), x);
      let { qos: ee, retain: E, dup: $, properties: Z, cbStorePut: K } = x;
      if (this._checkDisconnecting(W))
        return this;
      let ge = () => {
        let ne = 0;
        if ((ee === 1 || ee === 2) && (ne = this._nextId(), ne === null))
          return this.log("No messageId left"), !1;
        let q = { cmd: "publish", topic: R, payload: C, qos: ee, retain: E, messageId: ne, dup: $ };
        switch (G.protocolVersion === 5 && (q.properties = Z), this.log("publish :: qos", ee), ee) {
          case 1:
          case 2:
            this.outgoing[q.messageId] = { volatile: !1, cb: W || this.noop }, this.log("MqttClient:publish: packet cmd: %s", q.cmd), this._sendPacket(q, void 0, K);
            break;
          default:
            this.log("MqttClient:publish: packet cmd: %s", q.cmd), this._sendPacket(q, W, K);
            break;
        }
        return !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !ge()) && this._storeProcessingQueue.push({ invoke: ge, cbStorePut: x.cbStorePut, callback: W }), this;
    }
    publishAsync(R, C, x) {
      return new Promise((W, G) => {
        this.publish(R, C, x, (ee, E) => {
          ee ? G(ee) : W(E);
        });
      });
    }
    subscribe(R, C, x) {
      let W = this.options.protocolVersion;
      typeof C == "function" && (x = C), x = x || this.noop;
      let G = !1, ee = [];
      typeof R == "string" ? (R = [R], ee = R) : Array.isArray(R) ? ee = R : typeof R == "object" && (G = R.resubscribe, delete R.resubscribe, ee = Object.keys(R));
      let E = c.validateTopics(ee);
      if (E !== null)
        return k(x, new Error(`Invalid topic ${E}`)), this;
      if (this._checkDisconnecting(x))
        return this.log("subscribe: discconecting true"), this;
      let $ = { qos: 0 };
      W === 5 && ($.nl = !1, $.rap = !1, $.rh = 0), C = Object.assign(Object.assign({}, $), C);
      let Z = C.properties, K = [], ge = (q, be) => {
        if (be = be || C, !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, q) || this._resubscribeTopics[q].qos < be.qos || G) {
          let re = { topic: q, qos: be.qos };
          W === 5 && (re.nl = be.nl, re.rap = be.rap, re.rh = be.rh, re.properties = Z), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", re.topic, re.qos), K.push(re);
        }
      };
      if (Array.isArray(R) ? R.forEach((q) => {
        this.log("subscribe: array topic %s", q), ge(q);
      }) : Object.keys(R).forEach((q) => {
        this.log("subscribe: object topic %s, %o", q, R[q]), ge(q, R[q]);
      }), !K.length)
        return x(null, []), this;
      let ne = () => {
        let q = this._nextId();
        if (q === null)
          return this.log("No messageId left"), !1;
        let be = { cmd: "subscribe", subscriptions: K, messageId: q };
        if (Z && (be.properties = Z), this.options.resubscribe) {
          this.log("subscribe :: resubscribe true");
          let re = [];
          K.forEach((ve) => {
            if (this.options.reconnectPeriod > 0) {
              let S = { qos: ve.qos };
              W === 5 && (S.nl = ve.nl || !1, S.rap = ve.rap || !1, S.rh = ve.rh || 0, S.properties = ve.properties), this._resubscribeTopics[ve.topic] = S, re.push(ve.topic);
            }
          }), this.messageIdToTopic[be.messageId] = re;
        }
        return this.outgoing[be.messageId] = { volatile: !0, cb(re, ve) {
          if (!re) {
            let { granted: S } = ve;
            for (let Q = 0; Q < S.length; Q += 1)
              K[Q].qos = S[Q];
          }
          x(re, K);
        } }, this.log("subscribe :: call _sendPacket"), this._sendPacket(be), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !ne()) && this._storeProcessingQueue.push({ invoke: ne, callback: x }), this;
    }
    subscribeAsync(R, C) {
      return new Promise((x, W) => {
        this.subscribe(R, C, (G, ee) => {
          G ? W(G) : x(ee);
        });
      });
    }
    unsubscribe(R, C, x) {
      typeof R == "string" && (R = [R]), typeof C == "function" && (x = C), x = x || this.noop;
      let W = c.validateTopics(R);
      if (W !== null)
        return k(x, new Error(`Invalid topic ${W}`)), this;
      if (this._checkDisconnecting(x))
        return this;
      let G = () => {
        let ee = this._nextId();
        if (ee === null)
          return this.log("No messageId left"), !1;
        let E = { cmd: "unsubscribe", messageId: ee, unsubscriptions: [] };
        return typeof R == "string" ? E.unsubscriptions = [R] : Array.isArray(R) && (E.unsubscriptions = R), this.options.resubscribe && E.unsubscriptions.forEach(($) => {
          delete this._resubscribeTopics[$];
        }), typeof C == "object" && C.properties && (E.properties = C.properties), this.outgoing[E.messageId] = { volatile: !0, cb: x }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(E), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !G()) && this._storeProcessingQueue.push({ invoke: G, callback: x }), this;
    }
    unsubscribeAsync(R, C) {
      return new Promise((x, W) => {
        this.unsubscribe(R, C, (G, ee) => {
          G ? W(G) : x(ee);
        });
      });
    }
    end(R, C, x) {
      this.log("end :: (%s)", this.options.clientId), (R == null || typeof R != "boolean") && (x = x || C, C = R, R = !1), typeof C != "object" && (x = x || C, C = null), this.log("end :: cb? %s", !!x), (!x || typeof x != "function") && (x = this.noop);
      let W = () => {
        this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = !0, this.incomingStore.close((ee) => {
          this.outgoingStore.close((E) => {
            if (this.log("end :: closeStores: emitting end"), this.emit("end"), x) {
              let $ = ee || E;
              this.log("end :: closeStores: invoking callback with args"), x($);
            }
          });
        }), this._deferredReconnect && this._deferredReconnect();
      }, G = () => {
        this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, R), this._cleanUp(R, () => {
          this.log("end :: finish :: calling process.nextTick on closeStores"), (0, b.nextTick)(W);
        }, C);
      };
      return this.disconnecting ? (x(), this) : (this._clearReconnect(), this.disconnecting = !0, !R && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, G, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), G()), this);
    }
    endAsync(R, C) {
      return new Promise((x, W) => {
        this.end(R, C, (G) => {
          G ? W(G) : x();
        });
      });
    }
    removeOutgoingMessage(R) {
      if (this.outgoing[R]) {
        let { cb: C } = this.outgoing[R];
        this._removeOutgoingAndStoreMessage(R, () => {
          C(new Error("Message removed"));
        });
      }
      return this;
    }
    reconnect(R) {
      this.log("client reconnect");
      let C = () => {
        R ? (this.options.incomingStore = R.incomingStore, this.options.outgoingStore = R.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new g.default(), this.outgoingStore = this.options.outgoingStore || new g.default(), this.disconnecting = !1, this.disconnected = !1, this._deferredReconnect = null, this._reconnect();
      };
      return this.disconnecting && !this.disconnected ? this._deferredReconnect = C : C(), this;
    }
    _flushVolatile() {
      this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((R) => {
        this.outgoing[R].volatile && typeof this.outgoing[R].cb == "function" && (this.outgoing[R].cb(new Error("Connection closed")), delete this.outgoing[R]);
      }));
    }
    _flush() {
      this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((R) => {
        typeof this.outgoing[R].cb == "function" && (this.outgoing[R].cb(new Error("Connection closed")), delete this.outgoing[R]);
      }));
    }
    _removeTopicAliasAndRecoverTopicName(R) {
      let C;
      R.properties && (C = R.properties.topicAlias);
      let x = R.topic.toString();
      if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", C, x), x.length === 0) {
        if (typeof C > "u")
          return new Error("Unregistered Topic Alias");
        if (x = this.topicAliasSend.getTopicByAlias(C), typeof x > "u")
          return new Error("Unregistered Topic Alias");
        R.topic = x;
      }
      C && delete R.properties.topicAlias;
    }
    _checkDisconnecting(R) {
      return this.disconnecting && (R && R !== this.noop ? R(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting;
    }
    _reconnect() {
      this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end(() => {
        this.connect();
      }), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect());
    }
    _setupReconnect() {
      !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval(() => {
        this.log("reconnectTimer :: reconnect triggered!"), this._reconnect();
      }, this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...");
    }
    _clearReconnect() {
      this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null);
    }
    _cleanUp(R, C, x = {}) {
      if (C && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", C)), this.log("_cleanUp :: forced? %s", R), R)
        this.options.reconnectPeriod === 0 && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
      else {
        let W = Object.assign({ cmd: "disconnect" }, x);
        this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(W, () => {
          this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), k(() => {
            this.stream.end(() => {
              this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId);
            });
          });
        });
      }
      !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this.pingTimer && (this.log("_cleanUp :: destroy pingTimer"), this.pingTimer.destroy(), this.pingTimer = null), C && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", C), C());
    }
    _storeAndSend(R, C, x) {
      this.log("storeAndSend :: store packet with cmd %s to outgoingStore", R.cmd);
      let W = R, G;
      if (W.cmd === "publish" && (W = (0, a.default)(R), G = this._removeTopicAliasAndRecoverTopicName(W), G))
        return C && C(G);
      this.outgoingStore.put(W, (ee) => {
        if (ee)
          return C && C(ee);
        x(), this._writePacket(R, C);
      });
    }
    _applyTopicAlias(R) {
      if (this.options.protocolVersion === 5 && R.cmd === "publish") {
        let C;
        R.properties && (C = R.properties.topicAlias);
        let x = R.topic.toString();
        if (this.topicAliasSend)
          if (C) {
            if (x.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", x, C), !this.topicAliasSend.put(x, C)))
              return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", x, C), new Error("Sending Topic Alias out of range");
          } else
            x.length !== 0 && (this.options.autoAssignTopicAlias ? (C = this.topicAliasSend.getAliasByTopic(x), C ? (R.topic = "", R.properties = Object.assign(Object.assign({}, R.properties), { topicAlias: C }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", x, C)) : (C = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(x, C), R.properties = Object.assign(Object.assign({}, R.properties), { topicAlias: C }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", x, C))) : this.options.autoUseTopicAlias && (C = this.topicAliasSend.getAliasByTopic(x), C && (R.topic = "", R.properties = Object.assign(Object.assign({}, R.properties), { topicAlias: C }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", x, C))));
        else if (C)
          return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", x, C), new Error("Sending Topic Alias out of range");
      }
    }
    _noop(R) {
      this.log("noop ::", R);
    }
    _writePacket(R, C) {
      this.log("_writePacket :: packet: %O", R), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", R), this._shiftPingInterval(), this.log("_writePacket :: writing to stream");
      let x = r.default.writeToStream(R, this.stream, this.options);
      this.log("_writePacket :: writeToStream result %s", x), !x && C && C !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", C)) : C && (this.log("_writePacket :: invoking cb"), C());
    }
    _sendPacket(R, C, x, W) {
      this.log("_sendPacket :: (%s) ::  start", this.options.clientId), x = x || this.noop, C = C || this.noop;
      let G = this._applyTopicAlias(R);
      if (G) {
        C(G);
        return;
      }
      if (!this.connected) {
        if (R.cmd === "auth") {
          this._writePacket(R, C);
          return;
        }
        this.log("_sendPacket :: client not connected. Storing packet offline."), this._storePacket(R, C, x);
        return;
      }
      if (W) {
        this._writePacket(R, C);
        return;
      }
      switch (R.cmd) {
        case "publish":
          break;
        case "pubrel":
          this._storeAndSend(R, C, x);
          return;
        default:
          this._writePacket(R, C);
          return;
      }
      switch (R.qos) {
        case 2:
        case 1:
          this._storeAndSend(R, C, x);
          break;
        case 0:
        default:
          this._writePacket(R, C);
          break;
      }
      this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
    }
    _storePacket(R, C, x) {
      this.log("_storePacket :: packet: %o", R), this.log("_storePacket :: cb? %s", !!C), x = x || this.noop;
      let W = R;
      if (W.cmd === "publish") {
        W = (0, a.default)(R);
        let ee = this._removeTopicAliasAndRecoverTopicName(W);
        if (ee)
          return C && C(ee);
      }
      let G = W.qos || 0;
      G === 0 && this.queueQoSZero || W.cmd !== "publish" ? this.queue.push({ packet: W, cb: C }) : G > 0 ? (C = this.outgoing[W.messageId] ? this.outgoing[W.messageId].cb : null, this.outgoingStore.put(W, (ee) => {
        if (ee)
          return C && C(ee);
        x();
      })) : C && C(new Error("No connection to broker"));
    }
    _setupPingTimer() {
      this.log("_setupPingTimer :: keepalive %d (seconds)", this.options.keepalive), !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = new T.default(this.options.keepalive, () => {
        this._checkPing();
      }, this.options.timerVariant));
    }
    _shiftPingInterval() {
      this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule();
    }
    _checkPing() {
      this.log("_checkPing :: checking ping..."), this.pingResp ? (this.log("_checkPing :: ping response received. Clearing flag and sending `pingreq`"), this.pingResp = !1, this._sendPacket({ cmd: "pingreq" })) : (this.emit("error", new Error("Keepalive timeout")), this.log("_checkPing :: calling _cleanUp with force true"), this._cleanUp(!0));
    }
    _resubscribe() {
      this.log("_resubscribe");
      let R = Object.keys(this._resubscribeTopics);
      if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && R.length > 0)
        if (this.options.resubscribe)
          if (this.options.protocolVersion === 5) {
            this.log("_resubscribe: protocolVersion 5");
            for (let C = 0; C < R.length; C++) {
              let x = {};
              x[R[C]] = this._resubscribeTopics[R[C]], x.resubscribe = !0, this.subscribe(x, { properties: x[R[C]].properties });
            }
          } else
            this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
        else
          this._resubscribeTopics = {};
      this._firstConnection = !1;
    }
    _onConnect(R) {
      if (this.disconnected) {
        this.emit("connect", R);
        return;
      }
      this.connackPacket = R, this.messageIdProvider.clear(), this._setupPingTimer(), this.connected = !0;
      let C = () => {
        let x = this.outgoingStore.createStream(), W = () => {
          x.destroy(), x = null, this._flushStoreProcessingQueue(), G();
        }, G = () => {
          this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {};
        };
        this.once("close", W), x.on("error", (E) => {
          G(), this._flushStoreProcessingQueue(), this.removeListener("close", W), this.emit("error", E);
        });
        let ee = () => {
          if (!x)
            return;
          let E = x.read(1), $;
          if (!E) {
            x.once("readable", ee);
            return;
          }
          if (this._storeProcessing = !0, this._packetIdsDuringStoreProcessing[E.messageId]) {
            ee();
            return;
          }
          !this.disconnecting && !this.reconnectTimer ? ($ = this.outgoing[E.messageId] ? this.outgoing[E.messageId].cb : null, this.outgoing[E.messageId] = { volatile: !1, cb(Z, K) {
            $ && $(Z, K), ee();
          } }, this._packetIdsDuringStoreProcessing[E.messageId] = !0, this.messageIdProvider.register(E.messageId) ? this._sendPacket(E, void 0, void 0, !0) : this.log("messageId: %d has already used.", E.messageId)) : x.destroy && x.destroy();
        };
        x.on("end", () => {
          let E = !0;
          for (let $ in this._packetIdsDuringStoreProcessing)
            if (!this._packetIdsDuringStoreProcessing[$]) {
              E = !1;
              break;
            }
          this.removeListener("close", W), E ? (G(), this._invokeAllStoreProcessingQueue(), this.emit("connect", R)) : C();
        }), ee();
      };
      C();
    }
    _invokeStoreProcessingQueue() {
      if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
        let R = this._storeProcessingQueue[0];
        if (R && R.invoke())
          return this._storeProcessingQueue.shift(), !0;
      }
      return !1;
    }
    _invokeAllStoreProcessingQueue() {
      for (; this._invokeStoreProcessingQueue(); )
        ;
    }
    _flushStoreProcessingQueue() {
      for (let R of this._storeProcessingQueue)
        R.cbStorePut && R.cbStorePut(new Error("Connection closed")), R.callback && R.callback(new Error("Connection closed"));
      this._storeProcessingQueue.splice(0);
    }
    _removeOutgoingAndStoreMessage(R, C) {
      delete this.outgoing[R], this.outgoingStore.del({ messageId: R }, (x, W) => {
        C(x, W), this.messageIdProvider.deallocate(R), this._invokeStoreProcessingQueue();
      });
    }
  };
  D.VERSION = b.MQTTJS_VERSION, e.default = D;
}), ql = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = Ms(), t = class {
    constructor() {
      this.numberAllocator = new i.NumberAllocator(1, 65535);
    }
    allocate() {
      return this.lastId = this.numberAllocator.alloc(), this.lastId;
    }
    getLastAllocated() {
      return this.lastId;
    }
    register(l) {
      return this.numberAllocator.use(l);
    }
    deallocate(l) {
      this.numberAllocator.free(l);
    }
    clear() {
      this.numberAllocator.clear();
    }
  };
  e.default = t;
});
function Vt(e) {
  throw new RangeError(Ls[e]);
}
function so(e, i) {
  let t = e.split("@"), l = "";
  t.length > 1 && (l = t[0] + "@", e = t[1]);
  let h = function(o, r) {
    let s = [], n = o.length;
    for (; n--; )
      s[n] = r(o[n]);
    return s;
  }((e = e.replace(Us, ".")).split("."), i).join(".");
  return l + h;
}
function ao(e) {
  let i = [], t = 0, l = e.length;
  for (; t < l; ) {
    let h = e.charCodeAt(t++);
    if (h >= 55296 && h <= 56319 && t < l) {
      let o = e.charCodeAt(t++);
      (64512 & o) == 56320 ? i.push(((1023 & h) << 10) + (1023 & o) + 65536) : (i.push(h), t--);
    } else
      i.push(h);
  }
  return i;
}
var lo, uo, Us, Ls, ct, vr, Jr, Xr, Zr, ei, Nt, $l = Ge(() => {
  ae(), se(), oe(), lo = /^xn--/, uo = /[^\0-\x7E]/, Us = /[\x2E\u3002\uFF0E\uFF61]/g, Ls = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, ct = Math.floor, vr = String.fromCharCode, Jr = function(e, i) {
    return e + 22 + 75 * (e < 26) - ((i != 0) << 5);
  }, Xr = function(e, i, t) {
    let l = 0;
    for (e = t ? ct(e / 700) : e >> 1, e += ct(e / i); e > 455; l += 36)
      e = ct(e / 35);
    return ct(l + 36 * e / (e + 38));
  }, Zr = function(e) {
    let i = [], t = e.length, l = 0, h = 128, o = 72, r = e.lastIndexOf("-");
    r < 0 && (r = 0);
    for (let n = 0; n < r; ++n)
      e.charCodeAt(n) >= 128 && Vt("not-basic"), i.push(e.charCodeAt(n));
    for (let n = r > 0 ? r + 1 : 0; n < t; ) {
      let a = l;
      for (let d = 1, g = 36; ; g += 36) {
        n >= t && Vt("invalid-input");
        let m = (s = e.charCodeAt(n++)) - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : 36;
        (m >= 36 || m > ct((2147483647 - l) / d)) && Vt("overflow"), l += m * d;
        let b = g <= o ? 1 : g >= o + 26 ? 26 : g - o;
        if (m < b)
          break;
        let y = 36 - b;
        d > ct(2147483647 / y) && Vt("overflow"), d *= y;
      }
      let c = i.length + 1;
      o = Xr(l - a, c, a == 0), ct(l / c) > 2147483647 - h && Vt("overflow"), h += ct(l / c), l %= c, i.splice(l++, 0, h);
    }
    var s;
    return String.fromCodePoint(...i);
  }, ei = function(e) {
    let i = [], t = (e = ao(e)).length, l = 128, h = 0, o = 72;
    for (let n of e)
      n < 128 && i.push(vr(n));
    let r = i.length, s = r;
    for (r && i.push("-"); s < t; ) {
      let n = 2147483647;
      for (let c of e)
        c >= l && c < n && (n = c);
      let a = s + 1;
      n - l > ct((2147483647 - h) / a) && Vt("overflow"), h += (n - l) * a, l = n;
      for (let c of e)
        if (c < l && ++h > 2147483647 && Vt("overflow"), c == l) {
          let d = h;
          for (let g = 36; ; g += 36) {
            let m = g <= o ? 1 : g >= o + 26 ? 26 : g - o;
            if (d < m)
              break;
            let b = d - m, y = 36 - m;
            i.push(vr(Jr(m + b % y, 0))), d = ct(b / y);
          }
          i.push(vr(Jr(d, 0))), o = Xr(h, a, s == r), h = 0, ++s;
        }
      ++h, ++l;
    }
    return i.join("");
  }, Nt = { version: "2.1.0", ucs2: { decode: ao, encode: (e) => String.fromCodePoint(...e) }, decode: Zr, encode: ei, toASCII: function(e) {
    return so(e, function(i) {
      return uo.test(i) ? "xn--" + ei(i) : i;
    });
  }, toUnicode: function(e) {
    return so(e, function(i) {
      return lo.test(i) ? Zr(i.slice(4).toLowerCase()) : i;
    });
  } }, Nt.decode, Nt.encode, Nt.toASCII, Nt.toUnicode, Nt.ucs2, Nt.version;
});
function Vl(e, i) {
  return Object.prototype.hasOwnProperty.call(e, i);
}
var ho, ir, co, mt, Hl = Ge(() => {
  ae(), se(), oe(), ho = function(e, i, t, l) {
    i = i || "&", t = t || "=";
    var h = {};
    if (typeof e != "string" || e.length === 0)
      return h;
    var o = /\+/g;
    e = e.split(i);
    var r = 1e3;
    l && typeof l.maxKeys == "number" && (r = l.maxKeys);
    var s = e.length;
    r > 0 && s > r && (s = r);
    for (var n = 0; n < s; ++n) {
      var a, c, d, g, m = e[n].replace(o, "%20"), b = m.indexOf(t);
      b >= 0 ? (a = m.substr(0, b), c = m.substr(b + 1)) : (a = m, c = ""), d = decodeURIComponent(a), g = decodeURIComponent(c), Vl(h, d) ? Array.isArray(h[d]) ? h[d].push(g) : h[d] = [h[d], g] : h[d] = g;
    }
    return h;
  }, ir = function(e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        return e ? "true" : "false";
      case "number":
        return isFinite(e) ? e : "";
      default:
        return "";
    }
  }, co = function(e, i, t, l) {
    return i = i || "&", t = t || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(h) {
      var o = encodeURIComponent(ir(h)) + t;
      return Array.isArray(e[h]) ? e[h].map(function(r) {
        return o + encodeURIComponent(ir(r));
      }).join(i) : o + encodeURIComponent(ir(e[h]));
    }).join(i) : l ? encodeURIComponent(ir(l)) + t + encodeURIComponent(ir(e)) : "";
  }, mt = {}, mt.decode = mt.parse = ho, mt.encode = mt.stringify = co, mt.decode, mt.encode, mt.parse, mt.stringify;
});
function vn() {
  throw new Error("setTimeout has not been defined");
}
function _n() {
  throw new Error("clearTimeout has not been defined");
}
function Ns(e) {
  if (Et === setTimeout)
    return setTimeout(e, 0);
  if ((Et === vn || !Et) && setTimeout)
    return Et = setTimeout, setTimeout(e, 0);
  try {
    return Et(e, 0);
  } catch {
    try {
      return Et.call(null, e, 0);
    } catch {
      return Et.call(this || Jt, e, 0);
    }
  }
}
function zl() {
  Xt && Yt && (Xt = !1, Yt.length ? yt = Yt.concat(yt) : mr = -1, yt.length && js());
}
function js() {
  if (!Xt) {
    var e = Ns(zl);
    Xt = !0;
    for (var i = yt.length; i; ) {
      for (Yt = yt, yt = []; ++mr < i; )
        Yt && Yt[mr].run();
      mr = -1, i = yt.length;
    }
    Yt = null, Xt = !1, function(t) {
      if (St === clearTimeout)
        return clearTimeout(t);
      if ((St === _n || !St) && clearTimeout)
        return St = clearTimeout, clearTimeout(t);
      try {
        St(t);
      } catch {
        try {
          return St.call(null, t);
        } catch {
          return St.call(this || Jt, t);
        }
      }
    }(e);
  }
}
function fo(e, i) {
  (this || Jt).fun = e, (this || Jt).array = i;
}
function wt() {
}
var po, Et, St, Jt, qe, Yt, yt, Xt, mr, Fe, Kl = Ge(() => {
  ae(), se(), oe(), Jt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, qe = po = {}, function() {
    try {
      Et = typeof setTimeout == "function" ? setTimeout : vn;
    } catch {
      Et = vn;
    }
    try {
      St = typeof clearTimeout == "function" ? clearTimeout : _n;
    } catch {
      St = _n;
    }
  }(), yt = [], Xt = !1, mr = -1, qe.nextTick = function(e) {
    var i = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var t = 1; t < arguments.length; t++)
        i[t - 1] = arguments[t];
    yt.push(new fo(e, i)), yt.length !== 1 || Xt || Ns(js);
  }, fo.prototype.run = function() {
    (this || Jt).fun.apply(null, (this || Jt).array);
  }, qe.title = "browser", qe.browser = !0, qe.env = {}, qe.argv = [], qe.version = "", qe.versions = {}, qe.on = wt, qe.addListener = wt, qe.once = wt, qe.off = wt, qe.removeListener = wt, qe.removeAllListeners = wt, qe.emit = wt, qe.prependListener = wt, qe.prependOnceListener = wt, qe.listeners = function(e) {
    return [];
  }, qe.binding = function(e) {
    throw new Error("process.binding is not supported");
  }, qe.cwd = function() {
    return "/";
  }, qe.chdir = function(e) {
    throw new Error("process.chdir is not supported");
  }, qe.umask = function() {
    return 0;
  }, Fe = po, Fe.addListener, Fe.argv, Fe.binding, Fe.browser, Fe.chdir, Fe.cwd, Fe.emit, Fe.env, Fe.listeners, Fe.nextTick, Fe.off, Fe.on, Fe.once, Fe.prependListener, Fe.prependOnceListener, Fe.removeAllListeners, Fe.removeListener, Fe.title, Fe.umask, Fe.version, Fe.versions;
});
function Ql() {
  if (En)
    return Or;
  En = !0;
  var e = Or = {}, i, t;
  function l() {
    throw new Error("setTimeout has not been defined");
  }
  function h() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? i = setTimeout : i = l;
    } catch {
      i = l;
    }
    try {
      typeof clearTimeout == "function" ? t = clearTimeout : t = h;
    } catch {
      t = h;
    }
  })();
  function o(y) {
    if (i === setTimeout)
      return setTimeout(y, 0);
    if ((i === l || !i) && setTimeout)
      return i = setTimeout, setTimeout(y, 0);
    try {
      return i(y, 0);
    } catch {
      try {
        return i.call(null, y, 0);
      } catch {
        return i.call(this || zt, y, 0);
      }
    }
  }
  function r(y) {
    if (t === clearTimeout)
      return clearTimeout(y);
    if ((t === h || !t) && clearTimeout)
      return t = clearTimeout, clearTimeout(y);
    try {
      return t(y);
    } catch {
      try {
        return t.call(null, y);
      } catch {
        return t.call(this || zt, y);
      }
    }
  }
  var s = [], n = !1, a, c = -1;
  function d() {
    !n || !a || (n = !1, a.length ? s = a.concat(s) : c = -1, s.length && g());
  }
  function g() {
    if (!n) {
      var y = o(d);
      n = !0;
      for (var T = s.length; T; ) {
        for (a = s, s = []; ++c < T; )
          a && a[c].run();
        c = -1, T = s.length;
      }
      a = null, n = !1, r(y);
    }
  }
  e.nextTick = function(y) {
    var T = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var U = 1; U < arguments.length; U++)
        T[U - 1] = arguments[U];
    s.push(new m(y, T)), s.length === 1 && !n && o(g);
  };
  function m(y, T) {
    (this || zt).fun = y, (this || zt).array = T;
  }
  m.prototype.run = function() {
    (this || zt).fun.apply(null, (this || zt).array);
  }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {};
  function b() {
  }
  return e.on = b, e.addListener = b, e.once = b, e.off = b, e.removeListener = b, e.removeAllListeners = b, e.emit = b, e.prependListener = b, e.prependOnceListener = b, e.listeners = function(y) {
    return [];
  }, e.binding = function(y) {
    throw new Error("process.binding is not supported");
  }, e.cwd = function() {
    return "/";
  }, e.chdir = function(y) {
    throw new Error("process.chdir is not supported");
  }, e.umask = function() {
    return 0;
  }, Or;
}
var Or, En, zt, Ne, Ds = Ge(() => {
  ae(), se(), oe(), Or = {}, En = !1, zt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, Ne = Ql(), Ne.platform = "browser", Ne.addListener, Ne.argv, Ne.binding, Ne.browser, Ne.chdir, Ne.cwd, Ne.emit, Ne.env, Ne.listeners, Ne.nextTick, Ne.off, Ne.on, Ne.once, Ne.prependListener, Ne.prependOnceListener, Ne.removeAllListeners, Ne.removeListener, Ne.title, Ne.umask, Ne.version, Ne.versions;
});
function Yl() {
  if (Sn)
    return Rr;
  Sn = !0;
  var e = Ne;
  function i(o) {
    if (typeof o != "string")
      throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
  }
  function t(o, r) {
    for (var s = "", n = 0, a = -1, c = 0, d, g = 0; g <= o.length; ++g) {
      if (g < o.length)
        d = o.charCodeAt(g);
      else {
        if (d === 47)
          break;
        d = 47;
      }
      if (d === 47) {
        if (!(a === g - 1 || c === 1))
          if (a !== g - 1 && c === 2) {
            if (s.length < 2 || n !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
              if (s.length > 2) {
                var m = s.lastIndexOf("/");
                if (m !== s.length - 1) {
                  m === -1 ? (s = "", n = 0) : (s = s.slice(0, m), n = s.length - 1 - s.lastIndexOf("/")), a = g, c = 0;
                  continue;
                }
              } else if (s.length === 2 || s.length === 1) {
                s = "", n = 0, a = g, c = 0;
                continue;
              }
            }
            r && (s.length > 0 ? s += "/.." : s = "..", n = 2);
          } else
            s.length > 0 ? s += "/" + o.slice(a + 1, g) : s = o.slice(a + 1, g), n = g - a - 1;
        a = g, c = 0;
      } else
        d === 46 && c !== -1 ? ++c : c = -1;
    }
    return s;
  }
  function l(o, r) {
    var s = r.dir || r.root, n = r.base || (r.name || "") + (r.ext || "");
    return s ? s === r.root ? s + n : s + o + n : n;
  }
  var h = { resolve: function() {
    for (var o = "", r = !1, s, n = arguments.length - 1; n >= -1 && !r; n--) {
      var a;
      n >= 0 ? a = arguments[n] : (s === void 0 && (s = e.cwd()), a = s), i(a), a.length !== 0 && (o = a + "/" + o, r = a.charCodeAt(0) === 47);
    }
    return o = t(o, !r), r ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
  }, normalize: function(o) {
    if (i(o), o.length === 0)
      return ".";
    var r = o.charCodeAt(0) === 47, s = o.charCodeAt(o.length - 1) === 47;
    return o = t(o, !r), o.length === 0 && !r && (o = "."), o.length > 0 && s && (o += "/"), r ? "/" + o : o;
  }, isAbsolute: function(o) {
    return i(o), o.length > 0 && o.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0)
      return ".";
    for (var o, r = 0; r < arguments.length; ++r) {
      var s = arguments[r];
      i(s), s.length > 0 && (o === void 0 ? o = s : o += "/" + s);
    }
    return o === void 0 ? "." : h.normalize(o);
  }, relative: function(o, r) {
    if (i(o), i(r), o === r || (o = h.resolve(o), r = h.resolve(r), o === r))
      return "";
    for (var s = 1; s < o.length && o.charCodeAt(s) === 47; ++s)
      ;
    for (var n = o.length, a = n - s, c = 1; c < r.length && r.charCodeAt(c) === 47; ++c)
      ;
    for (var d = r.length, g = d - c, m = a < g ? a : g, b = -1, y = 0; y <= m; ++y) {
      if (y === m) {
        if (g > m) {
          if (r.charCodeAt(c + y) === 47)
            return r.slice(c + y + 1);
          if (y === 0)
            return r.slice(c + y);
        } else
          a > m && (o.charCodeAt(s + y) === 47 ? b = y : y === 0 && (b = 0));
        break;
      }
      var T = o.charCodeAt(s + y), U = r.charCodeAt(c + y);
      if (T !== U)
        break;
      T === 47 && (b = y);
    }
    var k = "";
    for (y = s + b + 1; y <= n; ++y)
      (y === n || o.charCodeAt(y) === 47) && (k.length === 0 ? k += ".." : k += "/..");
    return k.length > 0 ? k + r.slice(c + b) : (c += b, r.charCodeAt(c) === 47 && ++c, r.slice(c));
  }, _makeLong: function(o) {
    return o;
  }, dirname: function(o) {
    if (i(o), o.length === 0)
      return ".";
    for (var r = o.charCodeAt(0), s = r === 47, n = -1, a = !0, c = o.length - 1; c >= 1; --c)
      if (r = o.charCodeAt(c), r === 47) {
        if (!a) {
          n = c;
          break;
        }
      } else
        a = !1;
    return n === -1 ? s ? "/" : "." : s && n === 1 ? "//" : o.slice(0, n);
  }, basename: function(o, r) {
    if (r !== void 0 && typeof r != "string")
      throw new TypeError('"ext" argument must be a string');
    i(o);
    var s = 0, n = -1, a = !0, c;
    if (r !== void 0 && r.length > 0 && r.length <= o.length) {
      if (r.length === o.length && r === o)
        return "";
      var d = r.length - 1, g = -1;
      for (c = o.length - 1; c >= 0; --c) {
        var m = o.charCodeAt(c);
        if (m === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          g === -1 && (a = !1, g = c + 1), d >= 0 && (m === r.charCodeAt(d) ? --d === -1 && (n = c) : (d = -1, n = g));
      }
      return s === n ? n = g : n === -1 && (n = o.length), o.slice(s, n);
    } else {
      for (c = o.length - 1; c >= 0; --c)
        if (o.charCodeAt(c) === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          n === -1 && (a = !1, n = c + 1);
      return n === -1 ? "" : o.slice(s, n);
    }
  }, extname: function(o) {
    i(o);
    for (var r = -1, s = 0, n = -1, a = !0, c = 0, d = o.length - 1; d >= 0; --d) {
      var g = o.charCodeAt(d);
      if (g === 47) {
        if (!a) {
          s = d + 1;
          break;
        }
        continue;
      }
      n === -1 && (a = !1, n = d + 1), g === 46 ? r === -1 ? r = d : c !== 1 && (c = 1) : r !== -1 && (c = -1);
    }
    return r === -1 || n === -1 || c === 0 || c === 1 && r === n - 1 && r === s + 1 ? "" : o.slice(r, n);
  }, format: function(o) {
    if (o === null || typeof o != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
    return l("/", o);
  }, parse: function(o) {
    i(o);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (o.length === 0)
      return r;
    var s = o.charCodeAt(0), n = s === 47, a;
    n ? (r.root = "/", a = 1) : a = 0;
    for (var c = -1, d = 0, g = -1, m = !0, b = o.length - 1, y = 0; b >= a; --b) {
      if (s = o.charCodeAt(b), s === 47) {
        if (!m) {
          d = b + 1;
          break;
        }
        continue;
      }
      g === -1 && (m = !1, g = b + 1), s === 46 ? c === -1 ? c = b : y !== 1 && (y = 1) : c !== -1 && (y = -1);
    }
    return c === -1 || g === -1 || y === 0 || y === 1 && c === g - 1 && c === d + 1 ? g !== -1 && (d === 0 && n ? r.base = r.name = o.slice(1, g) : r.base = r.name = o.slice(d, g)) : (d === 0 && n ? (r.name = o.slice(1, c), r.base = o.slice(1, g)) : (r.name = o.slice(d, c), r.base = o.slice(d, g)), r.ext = o.slice(c, g)), d > 0 ? r.dir = o.slice(0, d - 1) : n && (r.dir = "/"), r;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return h.posix = h, Rr = h, Rr;
}
var Rr, Sn, An, Gl = Ge(() => {
  ae(), se(), oe(), Ds(), Rr = {}, Sn = !1, An = Yl();
}), Fs = {};
Zt(Fs, { URL: () => na, Url: () => Zs, default: () => Pe, fileURLToPath: () => Ws, format: () => ea, parse: () => ia, pathToFileURL: () => qs, resolve: () => ta, resolveObject: () => ra });
function ut() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
function cr(e, i, t) {
  if (e && pt.isObject(e) && e instanceof ut)
    return e;
  var l = new ut();
  return l.parse(e, i, t), l;
}
function Jl() {
  if (Tn)
    return Pr;
  Tn = !0;
  var e = Fe;
  function i(o) {
    if (typeof o != "string")
      throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
  }
  function t(o, r) {
    for (var s = "", n = 0, a = -1, c = 0, d, g = 0; g <= o.length; ++g) {
      if (g < o.length)
        d = o.charCodeAt(g);
      else {
        if (d === 47)
          break;
        d = 47;
      }
      if (d === 47) {
        if (!(a === g - 1 || c === 1))
          if (a !== g - 1 && c === 2) {
            if (s.length < 2 || n !== 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
              if (s.length > 2) {
                var m = s.lastIndexOf("/");
                if (m !== s.length - 1) {
                  m === -1 ? (s = "", n = 0) : (s = s.slice(0, m), n = s.length - 1 - s.lastIndexOf("/")), a = g, c = 0;
                  continue;
                }
              } else if (s.length === 2 || s.length === 1) {
                s = "", n = 0, a = g, c = 0;
                continue;
              }
            }
            r && (s.length > 0 ? s += "/.." : s = "..", n = 2);
          } else
            s.length > 0 ? s += "/" + o.slice(a + 1, g) : s = o.slice(a + 1, g), n = g - a - 1;
        a = g, c = 0;
      } else
        d === 46 && c !== -1 ? ++c : c = -1;
    }
    return s;
  }
  function l(o, r) {
    var s = r.dir || r.root, n = r.base || (r.name || "") + (r.ext || "");
    return s ? s === r.root ? s + n : s + o + n : n;
  }
  var h = { resolve: function() {
    for (var o = "", r = !1, s, n = arguments.length - 1; n >= -1 && !r; n--) {
      var a;
      n >= 0 ? a = arguments[n] : (s === void 0 && (s = e.cwd()), a = s), i(a), a.length !== 0 && (o = a + "/" + o, r = a.charCodeAt(0) === 47);
    }
    return o = t(o, !r), r ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
  }, normalize: function(o) {
    if (i(o), o.length === 0)
      return ".";
    var r = o.charCodeAt(0) === 47, s = o.charCodeAt(o.length - 1) === 47;
    return o = t(o, !r), o.length === 0 && !r && (o = "."), o.length > 0 && s && (o += "/"), r ? "/" + o : o;
  }, isAbsolute: function(o) {
    return i(o), o.length > 0 && o.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0)
      return ".";
    for (var o, r = 0; r < arguments.length; ++r) {
      var s = arguments[r];
      i(s), s.length > 0 && (o === void 0 ? o = s : o += "/" + s);
    }
    return o === void 0 ? "." : h.normalize(o);
  }, relative: function(o, r) {
    if (i(o), i(r), o === r || (o = h.resolve(o), r = h.resolve(r), o === r))
      return "";
    for (var s = 1; s < o.length && o.charCodeAt(s) === 47; ++s)
      ;
    for (var n = o.length, a = n - s, c = 1; c < r.length && r.charCodeAt(c) === 47; ++c)
      ;
    for (var d = r.length, g = d - c, m = a < g ? a : g, b = -1, y = 0; y <= m; ++y) {
      if (y === m) {
        if (g > m) {
          if (r.charCodeAt(c + y) === 47)
            return r.slice(c + y + 1);
          if (y === 0)
            return r.slice(c + y);
        } else
          a > m && (o.charCodeAt(s + y) === 47 ? b = y : y === 0 && (b = 0));
        break;
      }
      var T = o.charCodeAt(s + y), U = r.charCodeAt(c + y);
      if (T !== U)
        break;
      T === 47 && (b = y);
    }
    var k = "";
    for (y = s + b + 1; y <= n; ++y)
      (y === n || o.charCodeAt(y) === 47) && (k.length === 0 ? k += ".." : k += "/..");
    return k.length > 0 ? k + r.slice(c + b) : (c += b, r.charCodeAt(c) === 47 && ++c, r.slice(c));
  }, _makeLong: function(o) {
    return o;
  }, dirname: function(o) {
    if (i(o), o.length === 0)
      return ".";
    for (var r = o.charCodeAt(0), s = r === 47, n = -1, a = !0, c = o.length - 1; c >= 1; --c)
      if (r = o.charCodeAt(c), r === 47) {
        if (!a) {
          n = c;
          break;
        }
      } else
        a = !1;
    return n === -1 ? s ? "/" : "." : s && n === 1 ? "//" : o.slice(0, n);
  }, basename: function(o, r) {
    if (r !== void 0 && typeof r != "string")
      throw new TypeError('"ext" argument must be a string');
    i(o);
    var s = 0, n = -1, a = !0, c;
    if (r !== void 0 && r.length > 0 && r.length <= o.length) {
      if (r.length === o.length && r === o)
        return "";
      var d = r.length - 1, g = -1;
      for (c = o.length - 1; c >= 0; --c) {
        var m = o.charCodeAt(c);
        if (m === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          g === -1 && (a = !1, g = c + 1), d >= 0 && (m === r.charCodeAt(d) ? --d === -1 && (n = c) : (d = -1, n = g));
      }
      return s === n ? n = g : n === -1 && (n = o.length), o.slice(s, n);
    } else {
      for (c = o.length - 1; c >= 0; --c)
        if (o.charCodeAt(c) === 47) {
          if (!a) {
            s = c + 1;
            break;
          }
        } else
          n === -1 && (a = !1, n = c + 1);
      return n === -1 ? "" : o.slice(s, n);
    }
  }, extname: function(o) {
    i(o);
    for (var r = -1, s = 0, n = -1, a = !0, c = 0, d = o.length - 1; d >= 0; --d) {
      var g = o.charCodeAt(d);
      if (g === 47) {
        if (!a) {
          s = d + 1;
          break;
        }
        continue;
      }
      n === -1 && (a = !1, n = d + 1), g === 46 ? r === -1 ? r = d : c !== 1 && (c = 1) : r !== -1 && (c = -1);
    }
    return r === -1 || n === -1 || c === 0 || c === 1 && r === n - 1 && r === s + 1 ? "" : o.slice(r, n);
  }, format: function(o) {
    if (o === null || typeof o != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
    return l("/", o);
  }, parse: function(o) {
    i(o);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (o.length === 0)
      return r;
    var s = o.charCodeAt(0), n = s === 47, a;
    n ? (r.root = "/", a = 1) : a = 0;
    for (var c = -1, d = 0, g = -1, m = !0, b = o.length - 1, y = 0; b >= a; --b) {
      if (s = o.charCodeAt(b), s === 47) {
        if (!m) {
          d = b + 1;
          break;
        }
        continue;
      }
      g === -1 && (m = !1, g = b + 1), s === 46 ? c === -1 ? c = b : y !== 1 && (y = 1) : c !== -1 && (y = -1);
    }
    return c === -1 || g === -1 || y === 0 || y === 1 && c === g - 1 && c === d + 1 ? g !== -1 && (d === 0 && n ? r.base = r.name = o.slice(1, g) : r.base = r.name = o.slice(d, g)) : (d === 0 && n ? (r.name = o.slice(1, c), r.base = o.slice(1, g)) : (r.name = o.slice(d, c), r.base = o.slice(d, g)), r.ext = o.slice(c, g)), d > 0 ? r.dir = o.slice(0, d - 1) : n && (r.dir = "/"), r;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return h.posix = h, Pr = h, Pr;
}
function Xl(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!(e instanceof URL))
    throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (e.protocol !== "file:")
    throw new Deno.errors.InvalidData("invalid url scheme");
  return Ur ? Zl(e) : eu(e);
}
function Zl(e) {
  let i = e.hostname, t = e.pathname;
  for (let l = 0; l < t.length; l++)
    if (t[l] === "%") {
      let h = t.codePointAt(l + 2) || 32;
      if (t[l + 1] === "2" && h === 102 || t[l + 1] === "5" && h === 99)
        throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
    }
  if (t = t.replace(Ks, "\\"), t = decodeURIComponent(t), i !== "")
    return `\\\\${i}${t}`;
  {
    let l = t.codePointAt(1) | 32, h = t[2];
    if (l < Hs || l > zs || h !== ":")
      throw new Deno.errors.InvalidData("file url path must be absolute");
    return t.slice(1);
  }
}
function eu(e) {
  if (e.hostname !== "")
    throw new Deno.errors.InvalidData("invalid file url hostname");
  let i = e.pathname;
  for (let t = 0; t < i.length; t++)
    if (i[t] === "%") {
      let l = i.codePointAt(t + 2) || 32;
      if (i[t + 1] === "2" && l === 102)
        throw new Deno.errors.InvalidData("must not include encoded / characters");
    }
  return decodeURIComponent(i);
}
function tu(e) {
  let i = In.resolve(e), t = e.charCodeAt(e.length - 1);
  (t === Vs || Ur && t === $s) && i[i.length - 1] !== In.sep && (i += "/");
  let l = new URL("file://");
  return i.includes("%") && (i = i.replace(Qs, "%25")), !Ur && i.includes("\\") && (i = i.replace(Ys, "%5C")), i.includes(`
`) && (i = i.replace(Gs, "%0A")), i.includes("\r") && (i = i.replace(Js, "%0D")), i.includes("	") && (i = i.replace(Xs, "%09")), l.pathname = i, l;
}
function Ws(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!(e instanceof URL))
    throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (e.protocol !== "file:")
    throw new Deno.errors.InvalidData("invalid url scheme");
  return Lr ? ru(e) : iu(e);
}
function ru(e) {
  let i = e.hostname, t = e.pathname;
  for (let l = 0; l < t.length; l++)
    if (t[l] === "%") {
      let h = t.codePointAt(l + 2) || 32;
      if (t[l + 1] === "2" && h === 102 || t[l + 1] === "5" && h === 99)
        throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
    }
  if (t = t.replace(ua, "\\"), t = decodeURIComponent(t), i !== "")
    return `\\\\${i}${t}`;
  {
    let l = t.codePointAt(1) | 32, h = t[2];
    if (l < aa || l > la || h !== ":")
      throw new Deno.errors.InvalidData("file url path must be absolute");
    return t.slice(1);
  }
}
function iu(e) {
  if (e.hostname !== "")
    throw new Deno.errors.InvalidData("invalid file url hostname");
  let i = e.pathname;
  for (let t = 0; t < i.length; t++)
    if (i[t] === "%") {
      let l = i.codePointAt(t + 2) || 32;
      if (i[t + 1] === "2" && l === 102)
        throw new Deno.errors.InvalidData("must not include encoded / characters");
    }
  return decodeURIComponent(i);
}
function qs(e) {
  let i = An.resolve(e), t = e.charCodeAt(e.length - 1);
  (t === sa || Lr && t === oa) && i[i.length - 1] !== An.sep && (i += "/");
  let l = new URL("file://");
  return i.includes("%") && (i = i.replace(ha, "%25")), !Lr && i.includes("\\") && (i = i.replace(ca, "%5C")), i.includes(`
`) && (i = i.replace(fa, "%0A")), i.includes("\r") && (i = i.replace(pa, "%0D")), i.includes("	") && (i = i.replace(da, "%09")), l.pathname = i, l;
}
var Pe, go, pt, mo, bo, yo, wo, _r, ti, ri, ii, vo, _o, Er, Ht, Sr, Pr, Tn, In, Eo, $s, Vs, Hs, zs, Ur, Ks, Qs, Ys, Gs, Js, Xs, So, Zs, ea, ta, ra, ia, na, oa, sa, aa, la, Lr, ua, ha, ca, fa, pa, da, nu = Ge(() => {
  ae(), se(), oe(), $l(), Hl(), Kl(), Gl(), Ds(), Pe = {}, go = Nt, pt = { isString: function(e) {
    return typeof e == "string";
  }, isObject: function(e) {
    return typeof e == "object" && e !== null;
  }, isNull: function(e) {
    return e === null;
  }, isNullOrUndefined: function(e) {
    return e == null;
  } }, Pe.parse = cr, Pe.resolve = function(e, i) {
    return cr(e, !1, !0).resolve(i);
  }, Pe.resolveObject = function(e, i) {
    return e ? cr(e, !1, !0).resolveObject(i) : i;
  }, Pe.format = function(e) {
    return pt.isString(e) && (e = cr(e)), e instanceof ut ? e.format() : ut.prototype.format.call(e);
  }, Pe.Url = ut, mo = /^([a-z0-9.+-]+:)/i, bo = /:[0-9]*$/, yo = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, wo = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", `
`, "	"]), _r = ["'"].concat(wo), ti = ["%", "/", "?", ";", "#"].concat(_r), ri = ["/", "?", "#"], ii = /^[+a-z0-9A-Z_-]{0,63}$/, vo = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, _o = { javascript: !0, "javascript:": !0 }, Er = { javascript: !0, "javascript:": !0 }, Ht = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, Sr = mt, ut.prototype.parse = function(e, i, t) {
    if (!pt.isString(e))
      throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    var l = e.indexOf("?"), h = l !== -1 && l < e.indexOf("#") ? "?" : "#", o = e.split(h);
    o[0] = o[0].replace(/\\/g, "/");
    var r = e = o.join(h);
    if (r = r.trim(), !t && e.split("#").length === 1) {
      var s = yo.exec(r);
      if (s)
        return this.path = r, this.href = r, this.pathname = s[1], s[2] ? (this.search = s[2], this.query = i ? Sr.parse(this.search.substr(1)) : this.search.substr(1)) : i && (this.search = "", this.query = {}), this;
    }
    var n = mo.exec(r);
    if (n) {
      var a = (n = n[0]).toLowerCase();
      this.protocol = a, r = r.substr(n.length);
    }
    if (t || n || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var c = r.substr(0, 2) === "//";
      !c || n && Er[n] || (r = r.substr(2), this.slashes = !0);
    }
    if (!Er[n] && (c || n && !Ht[n])) {
      for (var d, g, m = -1, b = 0; b < ri.length; b++)
        (y = r.indexOf(ri[b])) !== -1 && (m === -1 || y < m) && (m = y);
      for ((g = m === -1 ? r.lastIndexOf("@") : r.lastIndexOf("@", m)) !== -1 && (d = r.slice(0, g), r = r.slice(g + 1), this.auth = decodeURIComponent(d)), m = -1, b = 0; b < ti.length; b++) {
        var y;
        (y = r.indexOf(ti[b])) !== -1 && (m === -1 || y < m) && (m = y);
      }
      m === -1 && (m = r.length), this.host = r.slice(0, m), r = r.slice(m), this.parseHost(), this.hostname = this.hostname || "";
      var T = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!T)
        for (var U = this.hostname.split(/\./), k = (b = 0, U.length); b < k; b++) {
          var I = U[b];
          if (I && !I.match(ii)) {
            for (var D = "", F = 0, R = I.length; F < R; F++)
              I.charCodeAt(F) > 127 ? D += "x" : D += I[F];
            if (!D.match(ii)) {
              var C = U.slice(0, b), x = U.slice(b + 1), W = I.match(vo);
              W && (C.push(W[1]), x.unshift(W[2])), x.length && (r = "/" + x.join(".") + r), this.hostname = C.join(".");
              break;
            }
          }
        }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = go.toASCII(this.hostname));
      var G = this.port ? ":" + this.port : "", ee = this.hostname || "";
      this.host = ee + G, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), r[0] !== "/" && (r = "/" + r));
    }
    if (!_o[a])
      for (b = 0, k = _r.length; b < k; b++) {
        var E = _r[b];
        if (r.indexOf(E) !== -1) {
          var $ = encodeURIComponent(E);
          $ === E && ($ = escape(E)), r = r.split(E).join($);
        }
      }
    var Z = r.indexOf("#");
    Z !== -1 && (this.hash = r.substr(Z), r = r.slice(0, Z));
    var K = r.indexOf("?");
    if (K !== -1 ? (this.search = r.substr(K), this.query = r.substr(K + 1), i && (this.query = Sr.parse(this.query)), r = r.slice(0, K)) : i && (this.search = "", this.query = {}), r && (this.pathname = r), Ht[a] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      G = this.pathname || "";
      var ge = this.search || "";
      this.path = G + ge;
    }
    return this.href = this.format(), this;
  }, ut.prototype.format = function() {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
    var i = this.protocol || "", t = this.pathname || "", l = this.hash || "", h = !1, o = "";
    this.host ? h = e + this.host : this.hostname && (h = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (h += ":" + this.port)), this.query && pt.isObject(this.query) && Object.keys(this.query).length && (o = Sr.stringify(this.query));
    var r = this.search || o && "?" + o || "";
    return i && i.substr(-1) !== ":" && (i += ":"), this.slashes || (!i || Ht[i]) && h !== !1 ? (h = "//" + (h || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : h || (h = ""), l && l.charAt(0) !== "#" && (l = "#" + l), r && r.charAt(0) !== "?" && (r = "?" + r), i + h + (t = t.replace(/[?#]/g, function(s) {
      return encodeURIComponent(s);
    })) + (r = r.replace("#", "%23")) + l;
  }, ut.prototype.resolve = function(e) {
    return this.resolveObject(cr(e, !1, !0)).format();
  }, ut.prototype.resolveObject = function(e) {
    if (pt.isString(e)) {
      var i = new ut();
      i.parse(e, !1, !0), e = i;
    }
    for (var t = new ut(), l = Object.keys(this), h = 0; h < l.length; h++) {
      var o = l[h];
      t[o] = this[o];
    }
    if (t.hash = e.hash, e.href === "")
      return t.href = t.format(), t;
    if (e.slashes && !e.protocol) {
      for (var r = Object.keys(e), s = 0; s < r.length; s++) {
        var n = r[s];
        n !== "protocol" && (t[n] = e[n]);
      }
      return Ht[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/"), t.href = t.format(), t;
    }
    if (e.protocol && e.protocol !== t.protocol) {
      if (!Ht[e.protocol]) {
        for (var a = Object.keys(e), c = 0; c < a.length; c++) {
          var d = a[c];
          t[d] = e[d];
        }
        return t.href = t.format(), t;
      }
      if (t.protocol = e.protocol, e.host || Er[e.protocol])
        t.pathname = e.pathname;
      else {
        for (var g = (e.pathname || "").split("/"); g.length && !(e.host = g.shift()); )
          ;
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), g[0] !== "" && g.unshift(""), g.length < 2 && g.unshift(""), t.pathname = g.join("/");
      }
      if (t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, t.pathname || t.search) {
        var m = t.pathname || "", b = t.search || "";
        t.path = m + b;
      }
      return t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
    }
    var y = t.pathname && t.pathname.charAt(0) === "/", T = e.host || e.pathname && e.pathname.charAt(0) === "/", U = T || y || t.host && e.pathname, k = U, I = t.pathname && t.pathname.split("/") || [], D = (g = e.pathname && e.pathname.split("/") || [], t.protocol && !Ht[t.protocol]);
    if (D && (t.hostname = "", t.port = null, t.host && (I[0] === "" ? I[0] = t.host : I.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (g[0] === "" ? g[0] = e.host : g.unshift(e.host)), e.host = null), U = U && (g[0] === "" || I[0] === "")), T)
      t.host = e.host || e.host === "" ? e.host : t.host, t.hostname = e.hostname || e.hostname === "" ? e.hostname : t.hostname, t.search = e.search, t.query = e.query, I = g;
    else if (g.length)
      I || (I = []), I.pop(), I = I.concat(g), t.search = e.search, t.query = e.query;
    else if (!pt.isNullOrUndefined(e.search))
      return D && (t.hostname = t.host = I.shift(), (W = !!(t.host && t.host.indexOf("@") > 0) && t.host.split("@")) && (t.auth = W.shift(), t.host = t.hostname = W.shift())), t.search = e.search, t.query = e.query, pt.isNull(t.pathname) && pt.isNull(t.search) || (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
    if (!I.length)
      return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
    for (var F = I.slice(-1)[0], R = (t.host || e.host || I.length > 1) && (F === "." || F === "..") || F === "", C = 0, x = I.length; x >= 0; x--)
      (F = I[x]) === "." ? I.splice(x, 1) : F === ".." ? (I.splice(x, 1), C++) : C && (I.splice(x, 1), C--);
    if (!U && !k)
      for (; C--; C)
        I.unshift("..");
    !U || I[0] === "" || I[0] && I[0].charAt(0) === "/" || I.unshift(""), R && I.join("/").substr(-1) !== "/" && I.push("");
    var W, G = I[0] === "" || I[0] && I[0].charAt(0) === "/";
    return D && (t.hostname = t.host = G ? "" : I.length ? I.shift() : "", (W = !!(t.host && t.host.indexOf("@") > 0) && t.host.split("@")) && (t.auth = W.shift(), t.host = t.hostname = W.shift())), (U = U || t.host && I.length) && !G && I.unshift(""), I.length ? t.pathname = I.join("/") : (t.pathname = null, t.path = null), pt.isNull(t.pathname) && pt.isNull(t.search) || (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes, t.href = t.format(), t;
  }, ut.prototype.parseHost = function() {
    var e = this.host, i = bo.exec(e);
    i && ((i = i[0]) !== ":" && (this.port = i.substr(1)), e = e.substr(0, e.length - i.length)), e && (this.hostname = e);
  }, Pe.Url, Pe.format, Pe.resolve, Pe.resolveObject, Pr = {}, Tn = !1, In = Jl(), Eo = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, Pe.URL = typeof URL < "u" ? URL : null, Pe.pathToFileURL = tu, Pe.fileURLToPath = Xl, Pe.Url, Pe.format, Pe.resolve, Pe.resolveObject, Pe.URL, $s = 92, Vs = 47, Hs = 97, zs = 122, Ur = Eo === "win32", Ks = /\//g, Qs = /%/g, Ys = /\\/g, Gs = /\n/g, Js = /\r/g, Xs = /\t/g, So = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, Pe.URL = typeof URL < "u" ? URL : null, Pe.pathToFileURL = qs, Pe.fileURLToPath = Ws, Zs = Pe.Url, ea = Pe.format, ta = Pe.resolve, ra = Pe.resolveObject, ia = Pe.parse, na = Pe.URL, oa = 92, sa = 47, aa = 97, la = 122, Lr = So === "win32", ua = /\//g, ha = /%/g, ca = /\\/g, fa = /\n/g, pa = /\r/g, da = /\t/g;
}), Nn = {};
Zt(Nn, { Server: () => je, Socket: () => je, Stream: () => je, _createServerHandle: () => je, _normalizeArgs: () => je, _setSimultaneousAccepts: () => je, connect: () => je, createConnection: () => je, createServer: () => je, default: () => ga, isIP: () => je, isIPv4: () => je, isIPv6: () => je });
function je() {
  throw new Error("Node.js net module is not supported by JSPM core outside of Node.js");
}
var ga, ma = Ge(() => {
  ae(), se(), oe(), ga = { _createServerHandle: je, _normalizeArgs: je, _setSimultaneousAccepts: je, connect: je, createConnection: je, createServer: je, isIP: je, isIPv4: je, isIPv6: je, Server: je, Socket: je, Stream: je };
}), Ao = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = i((ma(), xe(Nn))), l = i(Ot()), h = (0, l.default)("mqttjs:tcp"), o = (r, s) => {
    s.port = s.port || 1883, s.hostname = s.hostname || s.host || "localhost";
    let { port: n, path: a } = s, c = s.hostname;
    return h("port %d and host %s", n, c), t.default.createConnection({ port: n, host: c, path: a });
  };
  e.default = o;
}), ba = {};
Zt(ba, { default: () => ya });
var ya, ou = Ge(() => {
  ae(), se(), oe(), ya = {};
}), To = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = i((ou(), xe(ba))), l = i((ma(), xe(Nn))), h = i(Ot()), o = (0, h.default)("mqttjs:tls"), r = (s, n) => {
    n.port = n.port || 8883, n.host = n.hostname || n.host || "localhost", l.default.isIP(n.host) === 0 && (n.servername = n.host), n.rejectUnauthorized = n.rejectUnauthorized !== !1, delete n.path, o("port %d host %s rejectUnauthorized %b", n.port, n.host, n.rejectUnauthorized);
    let a = t.default.connect(n);
    a.on("secureConnect", () => {
      n.rejectUnauthorized && !a.authorized ? a.emit("error", new Error("TLS not authorized")) : a.removeListener("error", c);
    });
    function c(d) {
      n.rejectUnauthorized && s.emit("error", d), a.end();
    }
    return a.on("error", c), a;
  };
  e.default = r;
}), jn = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 }), e.BufferedDuplex = e.writev = void 0;
  var i = rr(), t = (Xe(), xe(Je));
  function l(o, r) {
    let s = new Array(o.length);
    for (let n = 0; n < o.length; n++)
      typeof o[n].chunk == "string" ? s[n] = t.Buffer.from(o[n].chunk, "utf8") : s[n] = o[n].chunk;
    this._write(t.Buffer.concat(s), "binary", r);
  }
  e.writev = l;
  var h = class extends i.Duplex {
    constructor(o, r, s) {
      super({ objectMode: !0 }), this.proxy = r, this.socket = s, this.writeQueue = [], o.objectMode || (this._writev = l.bind(this)), this.isSocketOpen = !1, this.proxy.on("data", (n) => {
        this.push(n);
      });
    }
    _read(o) {
      this.proxy.read(o);
    }
    _write(o, r, s) {
      this.isSocketOpen ? this.writeToProxy(o, r, s) : this.writeQueue.push({ chunk: o, encoding: r, cb: s });
    }
    _final(o) {
      this.writeQueue = [], this.proxy.end(o);
    }
    _destroy(o, r) {
      this.writeQueue = [], this.proxy.destroy(), r(o);
    }
    socketReady() {
      this.emit("connect"), this.isSocketOpen = !0, this.processWriteQueue();
    }
    writeToProxy(o, r, s) {
      this.proxy.write(o, r) === !1 ? this.proxy.once("drain", s) : s();
    }
    processWriteQueue() {
      for (; this.writeQueue.length > 0; ) {
        let { chunk: o, encoding: r, cb: s } = this.writeQueue.shift();
        this.writeToProxy(o, r, s);
      }
    }
  };
  e.BufferedDuplex = h;
}), Io = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = (Xe(), xe(Je)), t = rr(), l = jn(), h, o, r;
  function s() {
    let g = new t.Transform();
    return g._write = (m, b, y) => {
      h.send({ data: m.buffer, success() {
        y();
      }, fail(T) {
        y(new Error(T));
      } });
    }, g._flush = (m) => {
      h.close({ success() {
        m();
      } });
    }, g;
  }
  function n(g) {
    g.hostname || (g.hostname = "localhost"), g.path || (g.path = "/"), g.wsOptions || (g.wsOptions = {});
  }
  function a(g, m) {
    let b = g.protocol === "wxs" ? "wss" : "ws", y = `${b}://${g.hostname}${g.path}`;
    return g.port && g.port !== 80 && g.port !== 443 && (y = `${b}://${g.hostname}:${g.port}${g.path}`), typeof g.transformWsUrl == "function" && (y = g.transformWsUrl(y, g, m)), y;
  }
  function c() {
    h.onOpen(() => {
      r.socketReady();
    }), h.onMessage((g) => {
      let { data: m } = g;
      m instanceof ArrayBuffer ? m = i.Buffer.from(m) : m = i.Buffer.from(m, "utf8"), o.push(m);
    }), h.onClose(() => {
      r.emit("close"), r.end(), r.destroy();
    }), h.onError((g) => {
      let m = new Error(g.errMsg);
      r.destroy(m);
    });
  }
  var d = (g, m) => {
    if (m.hostname = m.hostname || m.host, !m.hostname)
      throw new Error("Could not determine host. Specify host manually.");
    let b = m.protocolId === "MQIsdp" && m.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    n(m);
    let y = a(m, g);
    h = wx.connectSocket({ url: y, protocols: [b] }), o = s(), r = new l.BufferedDuplex(m, o, h), r._destroy = (U, k) => {
      h.close({ success() {
        k && k(U);
      } });
    };
    let T = r.destroy;
    return r.destroy = (U, k) => (r.destroy = T, setTimeout(() => {
      h.close({ fail() {
        r._destroy(U, k);
      } });
    }, 0), r), c(), r;
  };
  e.default = d;
}), ko = me((e) => {
  ae(), se(), oe(), Object.defineProperty(e, "__esModule", { value: !0 });
  var i = (Xe(), xe(Je)), t = rr(), l = jn(), h, o, r, s = !1;
  function n() {
    let m = new t.Transform();
    return m._write = (b, y, T) => {
      h.sendSocketMessage({ data: b.buffer, success() {
        T();
      }, fail() {
        T(new Error());
      } });
    }, m._flush = (b) => {
      h.closeSocket({ success() {
        b();
      } });
    }, m;
  }
  function a(m) {
    m.hostname || (m.hostname = "localhost"), m.path || (m.path = "/"), m.wsOptions || (m.wsOptions = {});
  }
  function c(m, b) {
    let y = m.protocol === "alis" ? "wss" : "ws", T = `${y}://${m.hostname}${m.path}`;
    return m.port && m.port !== 80 && m.port !== 443 && (T = `${y}://${m.hostname}:${m.port}${m.path}`), typeof m.transformWsUrl == "function" && (T = m.transformWsUrl(T, m, b)), T;
  }
  function d() {
    s || (s = !0, h.onSocketOpen(() => {
      r.socketReady();
    }), h.onSocketMessage((m) => {
      if (typeof m.data == "string") {
        let b = i.Buffer.from(m.data, "base64");
        o.push(b);
      } else {
        let b = new FileReader();
        b.addEventListener("load", () => {
          let y = b.result;
          y instanceof ArrayBuffer ? y = i.Buffer.from(y) : y = i.Buffer.from(y, "utf8"), o.push(y);
        }), b.readAsArrayBuffer(m.data);
      }
    }), h.onSocketClose(() => {
      r.end(), r.destroy();
    }), h.onSocketError((m) => {
      r.destroy(m);
    }));
  }
  var g = (m, b) => {
    if (b.hostname = b.hostname || b.host, !b.hostname)
      throw new Error("Could not determine host. Specify host manually.");
    let y = b.protocolId === "MQIsdp" && b.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    a(b);
    let T = c(b, m);
    return h = b.my, h.connectSocket({ url: T, protocols: y }), o = n(), r = new l.BufferedDuplex(b, o, h), d(), r;
  };
  e.default = g;
}), su = me((e, i) => {
  ae(), se(), oe(), i.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
}), Co = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(U) {
    return U && U.__esModule ? U : { default: U };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = (Xe(), xe(Je)), l = i(su()), h = i(Ot()), o = rr(), r = i(qr()), s = jn(), n = (0, h.default)("mqttjs:ws"), a = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
  function c(U, k) {
    let I = `${U.protocol}://${U.hostname}:${U.port}${U.path}`;
    return typeof U.transformWsUrl == "function" && (I = U.transformWsUrl(I, U, k)), I;
  }
  function d(U) {
    let k = U;
    return U.hostname || (k.hostname = "localhost"), U.port || (U.protocol === "wss" ? k.port = 443 : k.port = 80), U.path || (k.path = "/"), U.wsOptions || (k.wsOptions = {}), !r.default && U.protocol === "wss" && a.forEach((I) => {
      Object.prototype.hasOwnProperty.call(U, I) && !Object.prototype.hasOwnProperty.call(U.wsOptions, I) && (k.wsOptions[I] = U[I]);
    }), k;
  }
  function g(U) {
    let k = d(U);
    if (k.hostname || (k.hostname = k.host), !k.hostname) {
      if (typeof document > "u")
        throw new Error("Could not determine host. Specify host manually.");
      let I = new URL(document.URL);
      k.hostname = I.hostname, k.port || (k.port = Number(I.port));
    }
    return k.objectMode === void 0 && (k.objectMode = !(k.binary === !0 || k.binary === void 0)), k;
  }
  function m(U, k, I) {
    n("createWebSocket"), n(`protocol: ${I.protocolId} ${I.protocolVersion}`);
    let D = I.protocolId === "MQIsdp" && I.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    n(`creating new Websocket for url: ${k} and protocol: ${D}`);
    let F;
    return I.createWebsocket ? F = I.createWebsocket(k, [D], I) : F = new l.default(k, [D], I.wsOptions), F;
  }
  function b(U, k) {
    let I = k.protocolId === "MQIsdp" && k.protocolVersion === 3 ? "mqttv3.1" : "mqtt", D = c(k, U), F;
    return k.createWebsocket ? F = k.createWebsocket(D, [I], k) : F = new WebSocket(D, [I]), F.binaryType = "arraybuffer", F;
  }
  var y = (U, k) => {
    n("streamBuilder");
    let I = d(k), D = c(I, U), F = m(U, D, I), R = l.default.createWebSocketStream(F, I.wsOptions);
    return R.url = D, F.on("close", () => {
      R.destroy();
    }), R;
  }, T = (U, k) => {
    n("browserStreamBuilder");
    let I, D = g(k).browserBufferSize || 1024 * 512, F = k.browserBufferTimeout || 1e3, R = !k.objectMode, C = b(U, k), x = G(k, K, ge);
    k.objectMode || (x._writev = s.writev.bind(x)), x.on("close", () => {
      C.close();
    });
    let W = typeof C.addEventListener < "u";
    C.readyState === C.OPEN ? (I = x, I.socket = C) : (I = new s.BufferedDuplex(k, x, C), W ? C.addEventListener("open", ee) : C.onopen = ee), W ? (C.addEventListener("close", E), C.addEventListener("error", $), C.addEventListener("message", Z)) : (C.onclose = E, C.onerror = $, C.onmessage = Z);
    function G(ne, q, be) {
      let re = new o.Transform({ objectMode: ne.objectMode });
      return re._write = q, re._flush = be, re;
    }
    function ee() {
      n("WebSocket onOpen"), I instanceof s.BufferedDuplex && I.socketReady();
    }
    function E(ne) {
      n("WebSocket onClose", ne), I.end(), I.destroy();
    }
    function $(ne) {
      n("WebSocket onError", ne);
      let q = new Error("WebSocket error");
      q.event = ne, I.destroy(q);
    }
    function Z(ne) {
      let { data: q } = ne;
      q instanceof ArrayBuffer ? q = t.Buffer.from(q) : q = t.Buffer.from(q, "utf8"), x.push(q);
    }
    function K(ne, q, be) {
      if (C.bufferedAmount > D) {
        setTimeout(K, F, ne, q, be);
        return;
      }
      R && typeof ne == "string" && (ne = t.Buffer.from(ne, "utf8"));
      try {
        C.send(ne);
      } catch (re) {
        return be(re);
      }
      be();
    }
    function ge(ne) {
      C.close(), ne();
    }
    return I;
  };
  e.default = r.default ? T : y;
}), au = me((e) => {
  ae(), se(), oe();
  var i = e && e.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.connectAsync = void 0;
  var t = i(Ot()), l = i((nu(), xe(Fs))), h = i(yn()), o = i(qr());
  typeof (Ue == null ? void 0 : Ue.nextTick) != "function" && (Ue.nextTick = setImmediate);
  var r = (0, t.default)("mqttjs"), s = {};
  o.default ? (s.wx = Io().default, s.wxs = Io().default, s.ali = ko().default, s.alis = ko().default) : (s.mqtt = Ao().default, s.tcp = Ao().default, s.ssl = To().default, s.tls = s.ssl, s.mqtts = To().default), s.ws = Co().default, s.wss = Co().default;
  function n(d) {
    let g;
    d.auth && (g = d.auth.match(/^(.+):(.+)$/), g ? (d.username = g[1], d.password = g[2]) : d.username = d.auth);
  }
  function a(d, g) {
    if (r("connecting to an MQTT broker..."), typeof d == "object" && !g && (g = d, d = ""), g = g || {}, d && typeof d == "string") {
      let y = l.default.parse(d, !0);
      if (y.port != null && (y.port = Number(y.port)), g = Object.assign(Object.assign({}, y), g), g.protocol === null)
        throw new Error("Missing protocol");
      g.protocol = g.protocol.replace(/:$/, "");
    }
    if (n(g), g.query && typeof g.query.clientId == "string" && (g.clientId = g.query.clientId), g.cert && g.key)
      if (g.protocol) {
        if (["mqtts", "wss", "wxs", "alis"].indexOf(g.protocol) === -1)
          switch (g.protocol) {
            case "mqtt":
              g.protocol = "mqtts";
              break;
            case "ws":
              g.protocol = "wss";
              break;
            case "wx":
              g.protocol = "wxs";
              break;
            case "ali":
              g.protocol = "alis";
              break;
            default:
              throw new Error(`Unknown protocol for secure connection: "${g.protocol}"!`);
          }
      } else
        throw new Error("Missing secure protocol key");
    if (!s[g.protocol]) {
      let y = ["mqtts", "wss"].indexOf(g.protocol) !== -1;
      g.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((T, U) => y && U % 2 === 0 ? !1 : typeof s[T] == "function")[0];
    }
    if (g.clean === !1 && !g.clientId)
      throw new Error("Missing clientId for unclean clients");
    g.protocol && (g.defaultProtocol = g.protocol);
    function m(y) {
      return g.servers && ((!y._reconnectCount || y._reconnectCount === g.servers.length) && (y._reconnectCount = 0), g.host = g.servers[y._reconnectCount].host, g.port = g.servers[y._reconnectCount].port, g.protocol = g.servers[y._reconnectCount].protocol ? g.servers[y._reconnectCount].protocol : g.defaultProtocol, g.hostname = g.host, y._reconnectCount++), r("calling streambuilder for", g.protocol), s[g.protocol](y, g);
    }
    let b = new h.default(m, g);
    return b.on("error", () => {
    }), b;
  }
  function c(d, g, m = !0) {
    return new Promise((b, y) => {
      let T = a(d, g), U = { connect: (I) => {
        k(), b(T);
      }, end: () => {
        k(), b(T);
      }, error: (I) => {
        k(), T.end(), y(I);
      } };
      m === !1 && (U.close = () => {
        U.error(new Error("Couldn't connect to server"));
      });
      function k() {
        Object.keys(U).forEach((I) => {
          T.off(I, U[I]);
        });
      }
      Object.keys(U).forEach((I) => {
        T.on(I, U[I]);
      });
    });
  }
  e.connectAsync = c, e.default = a;
}), Oo = me((e) => {
  ae(), se(), oe();
  var i = e && e.__createBinding || (Object.create ? function(m, b, y, T) {
    T === void 0 && (T = y);
    var U = Object.getOwnPropertyDescriptor(b, y);
    (!U || ("get" in U ? !b.__esModule : U.writable || U.configurable)) && (U = { enumerable: !0, get: function() {
      return b[y];
    } }), Object.defineProperty(m, T, U);
  } : function(m, b, y, T) {
    T === void 0 && (T = y), m[T] = b[y];
  }), t = e && e.__setModuleDefault || (Object.create ? function(m, b) {
    Object.defineProperty(m, "default", { enumerable: !0, value: b });
  } : function(m, b) {
    m.default = b;
  }), l = e && e.__importStar || function(m) {
    if (m && m.__esModule)
      return m;
    var b = {};
    if (m != null)
      for (var y in m)
        y !== "default" && Object.prototype.hasOwnProperty.call(m, y) && i(b, m, y);
    return t(b, m), b;
  }, h = e && e.__exportStar || function(m, b) {
    for (var y in m)
      y !== "default" && !Object.prototype.hasOwnProperty.call(b, y) && i(b, m, y);
  }, o = e && e.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ReasonCodes = e.PingTimer = e.UniqueMessageIdProvider = e.DefaultMessageIdProvider = e.Store = e.MqttClient = e.connectAsync = e.connect = e.Client = void 0;
  var r = o(yn());
  e.MqttClient = r.default;
  var s = o(bs());
  e.DefaultMessageIdProvider = s.default;
  var n = o(ql());
  e.UniqueMessageIdProvider = n.default;
  var a = o(ys());
  e.Store = a.default;
  var c = l(au());
  e.connect = c.default, Object.defineProperty(e, "connectAsync", { enumerable: !0, get: function() {
    return c.connectAsync;
  } });
  var d = o(xs());
  e.PingTimer = d.default, e.Client = r.default, h(yn(), e), h(br(), e);
  var g = Wr();
  Object.defineProperty(e, "ReasonCodes", { enumerable: !0, get: function() {
    return g.ReasonCodes;
  } });
}), lu = me((e) => {
  ae(), se(), oe();
  var i = e && e.__createBinding || (Object.create ? function(r, s, n, a) {
    a === void 0 && (a = n);
    var c = Object.getOwnPropertyDescriptor(s, n);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[n];
    } }), Object.defineProperty(r, a, c);
  } : function(r, s, n, a) {
    a === void 0 && (a = n), r[a] = s[n];
  }), t = e && e.__setModuleDefault || (Object.create ? function(r, s) {
    Object.defineProperty(r, "default", { enumerable: !0, value: s });
  } : function(r, s) {
    r.default = s;
  }), l = e && e.__importStar || function(r) {
    if (r && r.__esModule)
      return r;
    var s = {};
    if (r != null)
      for (var n in r)
        n !== "default" && Object.prototype.hasOwnProperty.call(r, n) && i(s, r, n);
    return t(s, r), s;
  }, h = e && e.__exportStar || function(r, s) {
    for (var n in r)
      n !== "default" && !Object.prototype.hasOwnProperty.call(s, n) && i(s, r, n);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = l(Oo());
  e.default = o, h(Oo(), e);
});
const uu = lu();
/*! Bundled license information:

@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
class cu {
  /***
   *
   * @param clientTopic
   * @param mqttConfig
   * @param eventListeners �¼��ص�������
   */
  constructor(i, t, l, h) {
    this.mqttClient = null, this.clientTopic = i, this.initMqttConnection(t), this.eventListeners = h, this.localPcMap = {}, this.remotePcMap = {}, this.remoteIcesMap = {}, this.constraints = l, this.callOuts = {}, this.callIns = {};
  }
  /***
   * ����mqtt��Ϣ
   * @param topic
   * @param message
   */
  messageHandler(i, t) {
    console.log("�յ���Ϣ", i, t.toString());
    let l = JSON.parse(t.toString());
    if (l.type == "offer")
      this.eventListeners.offerIn(l), this.callIns[l.callerTopic] = {
        callerTopic: l.callerTopic,
        calleeTopic: l.calleeTopic,
        clientTopic: l.clientTopic
      };
    else if (l.type == "candidate") {
      let h = new RTCIceCandidate(l.ice);
      l.kind == "local" ? this.remotePcMap[l.clientTopic] && this.remotePcMap[l.clientTopic].remoteDescription != null ? this.remotePcMap[l.clientTopic].addIceCandidate(h) : (this.remoteIcesMap[l.clientTopic] || (this.remoteIcesMap[l.clientTopic] = []), this.remoteIcesMap[l.clientTopic].push(h)) : this.localPcMap[l.clientTopic].addIceCandidate(h);
    } else if (l.type == "answer") {
      let h = new RTCSessionDescription(l.sdp);
      this.localPcMap[l.clientTopic].setRemoteDescription(h);
    } else
      l.type == "hangUp" && (this.hangUp(l), this.eventListeners.hangUp && this.eventListeners.hangUp(l));
  }
  /***
   * ��ʼ��mqtt����
   * @param mqttConfig
   * @returns {Promise<unknown>}
   */
  initMqttConnection(i) {
    return new Promise((t, l) => {
      i.publish ? this.mqttClient = i : (this.mqttClient = uu.connect(i.url, { ...i }), this.mqttClient.reconnecting = !0, this.mqttClient.on("connect", () => {
        this.mqttClient.subscribe(this.clientTopic, (h) => {
          h ? l(h) : (console.log("���ĳɹ�", this.clientTopic), t(this.mqttClient));
        });
      }), this.mqttClient.on("reconnect", () => {
        console.log("������...");
      }), this.mqttClient.on("message", (h, o) => {
        this.messageHandler(h, o);
      }));
    });
  }
  /***
   * ��绰
   * @param calleeTopic
   * @param relayTopic
   * @param callerTopic
   * @returns {Promise<void>}
   */
  async makeCall({ calleeTopic: i, relayTopic: t, callerTopic: l }) {
    let h = new RTCPeerConnection(null), o = await navigator.mediaDevices.getUserMedia(this.constraints);
    h.addTrack(o.getTracks()[0]), this.eventListeners.localCallStream && this.eventListeners.localCallStream({
      pc: h,
      stream: o
    }), h.ontrack = (s) => {
      console.log("onaddtrack", s);
      let n = new MediaStream();
      n.addTrack(s.track), this.eventListeners.callStream({
        pc: h,
        stream: n
      });
    }, h.onicecandidate = (s) => {
      let n = s.candidate;
      n && this.mqttClient.publish(t || i, JSON.stringify({
        type: "candidate",
        kind: "local",
        clientTopic: this.clientTopic,
        ice: n
      }));
    };
    let r = await h.createOffer({ offerOptions: 1 });
    h.setLocalDescription(r), this.mqttClient.publish(t || i, JSON.stringify({
      type: "offer",
      callerTopic: l || this.clientTopic,
      calleeTopic: i,
      clientTopic: this.clientTopic,
      sdp: r
    })), this.callOuts[i] = {
      callerTopic: l || this.clientTopic,
      calleeTopic: i,
      clientTopic: this.clientTopic,
      targetTopic: t || i
    }, h.oniceconnectionstatechange = () => {
      console.log("local ice:", h.iceConnectionState), h.iceConnectionState === "failed" || h.iceConnectionState === "disconnected" ? (this.closeConnection(h), this.eventListeners.disconnected && this.eventListeners.disconnected({
        clientTopic: this.clientTopic,
        callerTopic: l || this.clientTopic,
        calleeTopic: i
      })) : h.iceConnectionState === "connected" && this.eventListeners.connected && this.eventListeners.connected({
        clientTopic: this.clientTopic,
        callerTopic: l || this.clientTopic,
        calleeTopic: i
      });
    }, this.localPcMap[t || i] = h;
  }
  /***
   * �����绰
   * @param data
   * @returns {Promise<void>}
   */
  async answerCall(i) {
    let t = new RTCPeerConnection(null);
    this.remotePcMap[i.clientTopic] = t, t.ontrack = (r) => {
      console.log("onaddtrack", r);
      let s = new MediaStream();
      s.addTrack(r.track), this.eventListeners.answerStream({
        pc: t,
        stream: s
      });
    }, t.oniceconnectionstatechange = () => {
      console.log("remote ice:", t.iceConnectionState), t.iceConnectionState === "failed" || t.iceConnectionState === "disconnected" ? (this.closeConnection(t), this.eventListeners.disconnected && this.eventListeners.disconnected({
        clientTopic: i.clientTopic
      })) : t.iceConnectionState === "connected" && this.eventListeners.connected && this.eventListeners.connected({
        clientTopic: i.clientTopic
      });
    };
    let l = await navigator.mediaDevices.getUserMedia(this.constraints);
    t.addTrack(l.getTracks()[0]), this.eventListeners.localAnswerStream && this.eventListeners.localAnswerStream({
      pc: t,
      stream: l
    }), t.onicecandidate = (r) => {
      const s = r.candidate;
      console.log("remote ice:", s), s != null && this.mqttClient.publish(
        i.clientTopic,
        JSON.stringify({
          type: "candidate",
          clientTopic: this.clientTopic,
          kind: "remote",
          ice: s
        })
      );
    };
    let h = new RTCSessionDescription(i.sdp);
    t.setRemoteDescription(h);
    let o = await t.createAnswer();
    console.log("createAnswer", o), t.setLocalDescription(o), this.mqttClient.publish(
      i.clientTopic,
      JSON.stringify({
        type: "answer",
        clientTopic: this.clientTopic,
        callerTopic: i.callerTopic,
        calleeTopic: i.calleeTopic,
        sdp: o
      })
    );
    for (let r = 0; r < this.remoteIcesMap[i.clientTopic].length; r++)
      t.addIceCandidate(this.remoteIcesMap[i.clientTopic][r]);
  }
  /***
   * �ر�����
   * @param rtcPeerConnection
   */
  closeConnection(i) {
    i != null && (i.getSenders().forEach((t) => {
      t.track.stop();
    }), i.getTransceivers().forEach((t) => {
      t.sender && t.sender.replaceTrack(null), t.receiver && t.receiver.track.stop();
    }), i.close(), i = null);
  }
  /***
   * �Ҷϵ绰
   * @param data
   */
  hangUp(i) {
    if (i.callerTopic == this.clientTopic) {
      let t = this.callOuts[i.calleeTopic];
      t && (this.closeConnection(this.localPcMap[t.targetTopic]), this.mqttClient.publish(t.targetTopic, JSON.stringify({
        type: "hangUp",
        clientTopic: t.clientTopic,
        callerTopic: t.callerTopic,
        calleeTopic: t.calleeTopic
      })), delete this.callOuts[i.calleeTopic], delete this.localPcMap[t.targetTopic]);
    } else {
      let t = this.callIns[i.callerTopic];
      t && (this.closeConnection(this.remotePcMap[i.clientTopic]), this.mqttClient.publish(t.clientTopic, JSON.stringify({
        type: "hangUp",
        clientTopic: this.clientTopic,
        callerTopic: t.callerTopic,
        calleeTopic: t.calleeTopic
      })), delete this.callIns[i.callerTopic], delete this.remotePcMap[i.clientTopic]);
    }
  }
  /***
   * �����ͻ�����Դ
   */
  end() {
    this.mqttClient.end();
    for (let i in this.localPcMap)
      this.closeConnection(this.localPcMap[i]);
    for (let i in this.remotePcMap)
      this.closeConnection(this.remotePcMap[i]);
  }
}
export {
  cu as default
};
