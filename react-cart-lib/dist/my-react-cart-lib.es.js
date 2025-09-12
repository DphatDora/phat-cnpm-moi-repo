import Me, { createContext as Ye, useState as le, useEffect as Pe, useContext as qe } from "react";
function De(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var de = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Le() {
  if (me) return re;
  me = 1;
  var r = Symbol.for("react.transitional.element"), y = Symbol.for("react.fragment");
  function c(a, f, i) {
    var g = null;
    if (i !== void 0 && (g = "" + i), f.key !== void 0 && (g = "" + f.key), "key" in f) {
      i = {};
      for (var d in f)
        d !== "key" && (i[d] = f[d]);
    } else i = f;
    return f = i.ref, {
      $$typeof: r,
      type: a,
      key: g,
      ref: f !== void 0 ? f : null,
      props: i
    };
  }
  return re.Fragment = y, re.jsx = c, re.jsxs = c, re;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function We() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case Y:
          return "Profiler";
        case $:
          return "StrictMode";
        case o:
          return "Suspense";
        case F:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case A:
            return "Portal";
          case N:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case I:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case J:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function y(e) {
      return "" + e;
    }
    function c(e) {
      try {
        y(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), y(e);
      }
    }
    function a(e) {
      if (e === C) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === J)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (X.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, t) {
      function s() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function O() {
      var e = r(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, t, s, u, p, b, h, x) {
      return s = b.ref, e = {
        $$typeof: w,
        type: e,
        key: t,
        props: b,
        _owner: p
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: O
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, t, s, u, p, b, h, x) {
      var v = t.children;
      if (v !== void 0)
        if (u)
          if (ee(v)) {
            for (u = 0; u < v.length; u++)
              m(v[u]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(v);
      if (X.call(t, "key")) {
        v = r(e);
        var T = Object.keys(t).filter(function(M) {
          return M !== "key";
        });
        u = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", H[v + u] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          v,
          T,
          v
        ), H[v + u] = !0);
      }
      if (v = null, s !== void 0 && (c(s), v = "" + s), g(t) && (c(t.key), v = "" + t.key), "key" in t) {
        s = {};
        for (var _ in t)
          _ !== "key" && (s[_] = t[_]);
      } else s = t;
      return v && d(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(
        e,
        v,
        b,
        p,
        f(),
        s,
        h,
        x
      );
    }
    function m(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var E = Me, w = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), N = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), U = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, ee = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var B, q = {}, L = E.react_stack_bottom_frame.bind(
      E,
      i
    )(), G = D(a(i)), H = {};
    te.Fragment = C, te.jsx = function(e, t, s, u, p) {
      var b = 1e4 > U.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        s,
        !1,
        u,
        p,
        b ? Error("react-stack-top-frame") : L,
        b ? D(a(e)) : G
      );
    }, te.jsxs = function(e, t, s, u, p) {
      var b = 1e4 > U.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        s,
        !0,
        u,
        p,
        b ? Error("react-stack-top-frame") : L,
        b ? D(a(e)) : G
      );
    };
  }()), te;
}
process.env.NODE_ENV === "production" ? de.exports = Le() : de.exports = We();
var l = de.exports;
const we = Ye(null), he = "my_cart_v1";
function er({ children: r, initial: y = [] }) {
  const [c, a] = le(() => {
    try {
      const m = localStorage.getItem(he);
      return m ? JSON.parse(m) : y;
    } catch {
      return y;
    }
  });
  Pe(() => {
    try {
      localStorage.setItem(he, JSON.stringify(c));
    } catch {
    }
  }, [c]);
  const R = { items: c, addItem: (m) => {
    a((E) => {
      const w = E.findIndex((A) => A.id === m.id);
      if (w > -1) {
        const A = [...E];
        return A[w].quantity = (A[w].quantity || 0) + (m.quantity || 1), A;
      }
      return [...E, { ...m, quantity: m.quantity || 1 }];
    });
  }, updateItem: (m, E) => {
    a((w) => w.map((A) => A.id === m ? { ...A, ...E } : A));
  }, removeItem: (m) => {
    a((E) => E.filter((w) => w.id !== m));
  }, clear: () => a([]), getCount: () => c.reduce((m, E) => m + (E.quantity || 0), 0), getTotal: () => c.reduce((m, E) => m + (E.price || 0) * (E.quantity || 0), 0) };
  return /* @__PURE__ */ l.jsx(we.Provider, { value: R, children: r });
}
function Ce() {
  const r = qe(we);
  if (!r) throw new Error("useCart must be used within CartProvider");
  return r;
}
var pe = { exports: {} }, oe = { exports: {} }, S = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Fe() {
  if (ge) return S;
  ge = 1;
  var r = typeof Symbol == "function" && Symbol.for, y = r ? Symbol.for("react.element") : 60103, c = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, f = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, d = r ? Symbol.for("react.context") : 60110, O = r ? Symbol.for("react.async_mode") : 60111, P = r ? Symbol.for("react.concurrent_mode") : 60111, R = r ? Symbol.for("react.forward_ref") : 60112, m = r ? Symbol.for("react.suspense") : 60113, E = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, A = r ? Symbol.for("react.lazy") : 60116, C = r ? Symbol.for("react.block") : 60121, $ = r ? Symbol.for("react.fundamental") : 60117, Y = r ? Symbol.for("react.responder") : 60118, V = r ? Symbol.for("react.scope") : 60119;
  function N(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case y:
          switch (o = o.type, o) {
            case O:
            case P:
            case a:
            case i:
            case f:
            case m:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case R:
                case A:
                case w:
                case g:
                  return o;
                default:
                  return F;
              }
          }
        case c:
          return F;
      }
    }
  }
  function I(o) {
    return N(o) === P;
  }
  return S.AsyncMode = O, S.ConcurrentMode = P, S.ContextConsumer = d, S.ContextProvider = g, S.Element = y, S.ForwardRef = R, S.Fragment = a, S.Lazy = A, S.Memo = w, S.Portal = c, S.Profiler = i, S.StrictMode = f, S.Suspense = m, S.isAsyncMode = function(o) {
    return I(o) || N(o) === O;
  }, S.isConcurrentMode = I, S.isContextConsumer = function(o) {
    return N(o) === d;
  }, S.isContextProvider = function(o) {
    return N(o) === g;
  }, S.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === y;
  }, S.isForwardRef = function(o) {
    return N(o) === R;
  }, S.isFragment = function(o) {
    return N(o) === a;
  }, S.isLazy = function(o) {
    return N(o) === A;
  }, S.isMemo = function(o) {
    return N(o) === w;
  }, S.isPortal = function(o) {
    return N(o) === c;
  }, S.isProfiler = function(o) {
    return N(o) === i;
  }, S.isStrictMode = function(o) {
    return N(o) === f;
  }, S.isSuspense = function(o) {
    return N(o) === m;
  }, S.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === a || o === P || o === i || o === f || o === m || o === E || typeof o == "object" && o !== null && (o.$$typeof === A || o.$$typeof === w || o.$$typeof === g || o.$$typeof === d || o.$$typeof === R || o.$$typeof === $ || o.$$typeof === Y || o.$$typeof === V || o.$$typeof === C);
  }, S.typeOf = N, S;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ze() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, y = r ? Symbol.for("react.element") : 60103, c = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, f = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, g = r ? Symbol.for("react.provider") : 60109, d = r ? Symbol.for("react.context") : 60110, O = r ? Symbol.for("react.async_mode") : 60111, P = r ? Symbol.for("react.concurrent_mode") : 60111, R = r ? Symbol.for("react.forward_ref") : 60112, m = r ? Symbol.for("react.suspense") : 60113, E = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, A = r ? Symbol.for("react.lazy") : 60116, C = r ? Symbol.for("react.block") : 60121, $ = r ? Symbol.for("react.fundamental") : 60117, Y = r ? Symbol.for("react.responder") : 60118, V = r ? Symbol.for("react.scope") : 60119;
    function N(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === a || n === P || n === i || n === f || n === m || n === E || typeof n == "object" && n !== null && (n.$$typeof === A || n.$$typeof === w || n.$$typeof === g || n.$$typeof === d || n.$$typeof === R || n.$$typeof === $ || n.$$typeof === Y || n.$$typeof === V || n.$$typeof === C);
    }
    function I(n) {
      if (typeof n == "object" && n !== null) {
        var W = n.$$typeof;
        switch (W) {
          case y:
            var ne = n.type;
            switch (ne) {
              case O:
              case P:
              case a:
              case i:
              case f:
              case m:
                return ne;
              default:
                var ye = ne && ne.$$typeof;
                switch (ye) {
                  case d:
                  case R:
                  case A:
                  case w:
                  case g:
                    return ye;
                  default:
                    return W;
                }
            }
          case c:
            return W;
        }
      }
    }
    var o = O, F = P, Q = d, J = g, Z = y, K = R, U = a, X = A, ee = w, D = c, B = i, q = f, L = m, G = !1;
    function H(n) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || I(n) === O;
    }
    function e(n) {
      return I(n) === P;
    }
    function t(n) {
      return I(n) === d;
    }
    function s(n) {
      return I(n) === g;
    }
    function u(n) {
      return typeof n == "object" && n !== null && n.$$typeof === y;
    }
    function p(n) {
      return I(n) === R;
    }
    function b(n) {
      return I(n) === a;
    }
    function h(n) {
      return I(n) === A;
    }
    function x(n) {
      return I(n) === w;
    }
    function v(n) {
      return I(n) === c;
    }
    function T(n) {
      return I(n) === i;
    }
    function _(n) {
      return I(n) === f;
    }
    function M(n) {
      return I(n) === m;
    }
    j.AsyncMode = o, j.ConcurrentMode = F, j.ContextConsumer = Q, j.ContextProvider = J, j.Element = Z, j.ForwardRef = K, j.Fragment = U, j.Lazy = X, j.Memo = ee, j.Portal = D, j.Profiler = B, j.StrictMode = q, j.Suspense = L, j.isAsyncMode = H, j.isConcurrentMode = e, j.isContextConsumer = t, j.isContextProvider = s, j.isElement = u, j.isForwardRef = p, j.isFragment = b, j.isLazy = h, j.isMemo = x, j.isPortal = v, j.isProfiler = T, j.isStrictMode = _, j.isSuspense = M, j.isValidElementType = N, j.typeOf = I;
  }()), j;
}
var Ee;
function Ae() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? oe.exports = Fe() : oe.exports = ze()), oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ae, Te;
function Ue() {
  if (Te) return ae;
  Te = 1;
  var r = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function a(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function f() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var g = {}, d = 0; d < 10; d++)
        g["_" + String.fromCharCode(d)] = d;
      var O = Object.getOwnPropertyNames(g).map(function(R) {
        return g[R];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(R) {
        P[R] = R;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ae = f() ? Object.assign : function(i, g) {
    for (var d, O = a(i), P, R = 1; R < arguments.length; R++) {
      d = Object(arguments[R]);
      for (var m in d)
        y.call(d, m) && (O[m] = d[m]);
      if (r) {
        P = r(d);
        for (var E = 0; E < P.length; E++)
          c.call(d, P[E]) && (O[P[E]] = d[P[E]]);
      }
    }
    return O;
  }, ae;
}
var ie, _e;
function ve() {
  if (_e) return ie;
  _e = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ie = r, ie;
}
var se, Re;
function ke() {
  return Re || (Re = 1, se = Function.call.bind(Object.prototype.hasOwnProperty)), se;
}
var ce, Se;
function Ve() {
  if (Se) return ce;
  Se = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var y = ve(), c = {}, a = ke();
    r = function(i) {
      var g = "Warning: " + i;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function f(i, g, d, O, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var R in i)
        if (a(i, R)) {
          var m;
          try {
            if (typeof i[R] != "function") {
              var E = Error(
                (O || "React class") + ": " + d + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            m = i[R](g, R, O, d, null, y);
          } catch (A) {
            m = A;
          }
          if (m && !(m instanceof Error) && r(
            (O || "React class") + ": type specification of " + d + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in c)) {
            c[m.message] = !0;
            var w = P ? P() : "";
            r(
              "Failed " + d + " type: " + m.message + (w ?? "")
            );
          }
        }
    }
  }
  return f.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (c = {});
  }, ce = f, ce;
}
var ue, je;
function Ge() {
  if (je) return ue;
  je = 1;
  var r = Ae(), y = Ue(), c = ve(), a = ke(), f = Ve(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(d) {
    var O = "Warning: " + d;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return ue = function(d, O) {
    var P = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function m(e) {
      var t = e && (P && e[P] || e[R]);
      if (typeof t == "function")
        return t;
    }
    var E = "<<anonymous>>", w = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: V(),
      arrayOf: N,
      element: I(),
      elementType: o(),
      instanceOf: F,
      node: K(),
      objectOf: J,
      oneOf: Q,
      oneOfType: Z,
      shape: X,
      exact: ee
    };
    function A(e, t) {
      return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
    }
    function C(e, t) {
      this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function $(e) {
      if (process.env.NODE_ENV !== "production")
        var t = {}, s = 0;
      function u(b, h, x, v, T, _, M) {
        if (v = v || E, _ = _ || x, M !== c) {
          if (O) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = v + ":" + x;
            !t[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            s < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + _ + "` prop on `" + v + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), t[W] = !0, s++);
          }
        }
        return h[x] == null ? b ? h[x] === null ? new C("The " + T + " `" + _ + "` is marked as required " + ("in `" + v + "`, but its value is `null`.")) : new C("The " + T + " `" + _ + "` is marked as required in " + ("`" + v + "`, but its value is `undefined`.")) : null : e(h, x, v, T, _);
      }
      var p = u.bind(null, !1);
      return p.isRequired = u.bind(null, !0), p;
    }
    function Y(e) {
      function t(s, u, p, b, h, x) {
        var v = s[u], T = q(v);
        if (T !== e) {
          var _ = L(v);
          return new C(
            "Invalid " + b + " `" + h + "` of type " + ("`" + _ + "` supplied to `" + p + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return $(t);
    }
    function V() {
      return $(g);
    }
    function N(e) {
      function t(s, u, p, b, h) {
        if (typeof e != "function")
          return new C("Property `" + h + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var x = s[u];
        if (!Array.isArray(x)) {
          var v = q(x);
          return new C("Invalid " + b + " `" + h + "` of type " + ("`" + v + "` supplied to `" + p + "`, expected an array."));
        }
        for (var T = 0; T < x.length; T++) {
          var _ = e(x, T, p, b, h + "[" + T + "]", c);
          if (_ instanceof Error)
            return _;
        }
        return null;
      }
      return $(t);
    }
    function I() {
      function e(t, s, u, p, b) {
        var h = t[s];
        if (!d(h)) {
          var x = q(h);
          return new C("Invalid " + p + " `" + b + "` of type " + ("`" + x + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return $(e);
    }
    function o() {
      function e(t, s, u, p, b) {
        var h = t[s];
        if (!r.isValidElementType(h)) {
          var x = q(h);
          return new C("Invalid " + p + " `" + b + "` of type " + ("`" + x + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return $(e);
    }
    function F(e) {
      function t(s, u, p, b, h) {
        if (!(s[u] instanceof e)) {
          var x = e.name || E, v = H(s[u]);
          return new C("Invalid " + b + " `" + h + "` of type " + ("`" + v + "` supplied to `" + p + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return $(t);
    }
    function Q(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), g;
      function t(s, u, p, b, h) {
        for (var x = s[u], v = 0; v < e.length; v++)
          if (A(x, e[v]))
            return null;
        var T = JSON.stringify(e, function(M, n) {
          var W = L(n);
          return W === "symbol" ? String(n) : n;
        });
        return new C("Invalid " + b + " `" + h + "` of value `" + String(x) + "` " + ("supplied to `" + p + "`, expected one of " + T + "."));
      }
      return $(t);
    }
    function J(e) {
      function t(s, u, p, b, h) {
        if (typeof e != "function")
          return new C("Property `" + h + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var x = s[u], v = q(x);
        if (v !== "object")
          return new C("Invalid " + b + " `" + h + "` of type " + ("`" + v + "` supplied to `" + p + "`, expected an object."));
        for (var T in x)
          if (a(x, T)) {
            var _ = e(x, T, p, b, h + "." + T, c);
            if (_ instanceof Error)
              return _;
          }
        return null;
      }
      return $(t);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var t = 0; t < e.length; t++) {
        var s = e[t];
        if (typeof s != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(s) + " at index " + t + "."
          ), g;
      }
      function u(p, b, h, x, v) {
        for (var T = [], _ = 0; _ < e.length; _++) {
          var M = e[_], n = M(p, b, h, x, v, c);
          if (n == null)
            return null;
          n.data && a(n.data, "expectedType") && T.push(n.data.expectedType);
        }
        var W = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new C("Invalid " + x + " `" + v + "` supplied to " + ("`" + h + "`" + W + "."));
      }
      return $(u);
    }
    function K() {
      function e(t, s, u, p, b) {
        return D(t[s]) ? null : new C("Invalid " + p + " `" + b + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return $(e);
    }
    function U(e, t, s, u, p) {
      return new C(
        (e || "React class") + ": " + t + " type `" + s + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function X(e) {
      function t(s, u, p, b, h) {
        var x = s[u], v = q(x);
        if (v !== "object")
          return new C("Invalid " + b + " `" + h + "` of type `" + v + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var T in e) {
          var _ = e[T];
          if (typeof _ != "function")
            return U(p, b, h, T, L(_));
          var M = _(x, T, p, b, h + "." + T, c);
          if (M)
            return M;
        }
        return null;
      }
      return $(t);
    }
    function ee(e) {
      function t(s, u, p, b, h) {
        var x = s[u], v = q(x);
        if (v !== "object")
          return new C("Invalid " + b + " `" + h + "` of type `" + v + "` " + ("supplied to `" + p + "`, expected `object`."));
        var T = y({}, s[u], e);
        for (var _ in T) {
          var M = e[_];
          if (a(e, _) && typeof M != "function")
            return U(p, b, h, _, L(M));
          if (!M)
            return new C(
              "Invalid " + b + " `" + h + "` key `" + _ + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(s[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = M(x, _, p, b, h + "." + _, c);
          if (n)
            return n;
        }
        return null;
      }
      return $(t);
    }
    function D(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(D);
          if (e === null || d(e))
            return !0;
          var t = m(e);
          if (t) {
            var s = t.call(e), u;
            if (t !== e.entries) {
              for (; !(u = s.next()).done; )
                if (!D(u.value))
                  return !1;
            } else
              for (; !(u = s.next()).done; ) {
                var p = u.value;
                if (p && !D(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(e, t) {
      return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
    }
    function q(e) {
      var t = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : B(t, e) ? "symbol" : t;
    }
    function L(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var t = q(e);
      if (t === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return t;
    }
    function G(e) {
      var t = L(e);
      switch (t) {
        case "array":
        case "object":
          return "an " + t;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + t;
        default:
          return t;
      }
    }
    function H(e) {
      return !e.constructor || !e.constructor.name ? E : e.constructor.name;
    }
    return w.checkPropTypes = f, w.resetWarningCache = f.resetWarningCache, w.PropTypes = w, w;
  }, ue;
}
var fe, Oe;
function Je() {
  if (Oe) return fe;
  Oe = 1;
  var r = ve();
  function y() {
  }
  function c() {
  }
  return c.resetWarningCache = y, fe = function() {
    function a(g, d, O, P, R, m) {
      if (m !== r) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    a.isRequired = a;
    function f() {
      return a;
    }
    var i = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: f,
      element: a,
      elementType: a,
      instanceOf: f,
      node: a,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: c,
      resetWarningCache: y
    };
    return i.PropTypes = i, i;
  }, fe;
}
if (process.env.NODE_ENV !== "production") {
  var Xe = Ae(), Be = !0;
  pe.exports = Ge()(Xe.isElement, Be);
} else
  pe.exports = Je()();
var He = pe.exports;
const k = /* @__PURE__ */ De(He);
function z({ children: r, onClick: y, variant: c = "primary", size: a = "md", disabled: f = !1, className: i = "" }) {
  const g = "rounded-2xl px-4 py-2 font-medium focus:outline-none disabled:opacity-50", d = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-gray-800 border border-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700"
  }, O = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      className: `${g} ${d[c] || d.primary} ${O[a] || O.md} ${i}`,
      onClick: y,
      disabled: f,
      children: r
    }
  );
}
z.propTypes = {
  children: k.node,
  onClick: k.func,
  variant: k.oneOf(["primary", "ghost", "danger"]),
  size: k.oneOf(["sm", "md", "lg"]),
  disabled: k.bool
};
function Ie({ title: r, subtitle: y, children: c, className: a = "" }) {
  return /* @__PURE__ */ l.jsxs("div", { className: `rounded-2xl border border-gray-100 p-4 shadow-sm bg-white ${a}`, children: [
    r && /* @__PURE__ */ l.jsx("div", { className: "text-lg font-semibold", children: r }),
    y && /* @__PURE__ */ l.jsx("div", { className: "text-sm text-gray-500 mb-3", children: y }),
    /* @__PURE__ */ l.jsx("div", { children: c })
  ] });
}
Ie.propTypes = {
  title: k.string,
  subtitle: k.string,
  children: k.node
};
function Ne({ item: r, onUpdate: y, onRemove: c }) {
  const a = (f) => {
    const i = Math.max(0, (r.quantity || 0) + f);
    if (i === 0) return c(r.id);
    y(r.id, { quantity: i });
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3 border-b border-gray-100 py-3", children: [
    /* @__PURE__ */ l.jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-sm", children: r.image ? /* @__PURE__ */ l.jsx("img", { src: r.image, alt: r.name, className: "w-full h-full object-cover rounded-lg" }) : /* @__PURE__ */ l.jsx("span", { className: "text-xs text-gray-500", children: "No image" }) }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ l.jsx("div", { className: "font-medium", children: r.name }),
      /* @__PURE__ */ l.jsx("div", { className: "text-sm text-gray-500", children: r.options ? Object.values(r.options).join(" • ") : null }),
      /* @__PURE__ */ l.jsxs("div", { className: "text-sm mt-1", children: [
        "₫",
        (r.price || 0).toLocaleString()
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l.jsx(z, { size: "sm", onClick: () => a(-1), children: "-" }),
      /* @__PURE__ */ l.jsx("div", { className: "px-2", children: r.quantity }),
      /* @__PURE__ */ l.jsx(z, { size: "sm", onClick: () => a(1), children: "+" }),
      /* @__PURE__ */ l.jsx(z, { variant: "ghost", size: "sm", onClick: () => c(r.id), children: "Xóa" })
    ] })
  ] });
}
Ne.propTypes = {
  item: k.object.isRequired,
  onUpdate: k.func,
  onRemove: k.func
};
function Qe({ items: r = [], onUpdate: y, onRemove: c }) {
  return r.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "p-4 text-gray-500", children: "Giỏ hàng trống" }) : /* @__PURE__ */ l.jsx("div", { children: r.map((a) => /* @__PURE__ */ l.jsx(Ne, { item: a, onUpdate: y, onRemove: c }, a.id)) });
}
function rr({ onCheckout: r }) {
  const { items: y, updateItem: c, removeItem: a, getCount: f, getTotal: i, clear: g } = Ce();
  return /* @__PURE__ */ l.jsx("div", { className: "w-full max-w-md bg-white p-4", children: /* @__PURE__ */ l.jsxs(Ie, { title: `Giỏ hàng (${f()})`, className: "mb-4", children: [
    /* @__PURE__ */ l.jsx(Qe, { items: y, onUpdate: c, onRemove: a }),
    /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex justify-between items-center", children: [
      /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("div", { className: "text-sm text-gray-500", children: "Tổng" }),
        /* @__PURE__ */ l.jsxs("div", { className: "text-lg font-semibold", children: [
          "₫",
          i().toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ l.jsx(z, { onClick: () => r && r(y), children: "Thanh toán" }),
        /* @__PURE__ */ l.jsx(z, { variant: "ghost", onClick: () => g(), children: "Xóa tất cả" })
      ] })
    ] })
  ] }) });
}
function $e({ label: r, value: y, onChange: c, placeholder: a, type: f = "text", error: i, className: g = "" }) {
  return /* @__PURE__ */ l.jsxs("label", { className: `block text-sm ${g}`, children: [
    r && /* @__PURE__ */ l.jsx("div", { className: "mb-1 text-gray-700", children: r }),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: f,
        value: y,
        onChange: (d) => c && c(d.target.value),
        placeholder: a,
        className: "w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200"
      }
    ),
    i && /* @__PURE__ */ l.jsx("div", { className: "text-xs text-red-500 mt-1", children: i })
  ] });
}
$e.propTypes = {
  label: k.string,
  value: k.any,
  onChange: k.func,
  placeholder: k.string,
  type: k.string,
  error: k.string
};
function tr({ product: r }) {
  const { addItem: y } = Ce(), [c, a] = le(1), [f, i] = le("");
  function g() {
    y({
      id: r.id,
      name: r.name,
      price: r.price,
      image: r.image,
      options: { note: f },
      quantity: c
    });
  }
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ l.jsx("div", { className: "font-semibold", children: r.name }),
    /* @__PURE__ */ l.jsxs("div", { children: [
      "₫",
      r.price.toLocaleString()
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ l.jsx(z, { size: "sm", onClick: () => a((d) => Math.max(1, d - 1)), children: "-" }),
      /* @__PURE__ */ l.jsx("div", { className: "px-2", children: c }),
      /* @__PURE__ */ l.jsx(z, { size: "sm", onClick: () => a((d) => d + 1), children: "+" })
    ] }),
    /* @__PURE__ */ l.jsx($e, { label: "Ghi chú", value: f, onChange: i, placeholder: "VD: không giao giờ trưa" }),
    /* @__PURE__ */ l.jsx(z, { onClick: g, children: "Thêm vào giỏ" })
  ] });
}
function Ze({ open: r, onClose: y, title: c, children: a }) {
  return Pe(() => {
    function f(i) {
      i.key === "Escape" && y && y();
    }
    return r && document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, y]), r ? /* @__PURE__ */ l.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ l.jsx("div", { className: "fixed inset-0 bg-black/40", onClick: () => y && y() }),
    /* @__PURE__ */ l.jsx("div", { role: "dialog", "aria-modal": "true", className: "relative z-10 w-full max-w-lg mx-4", children: /* @__PURE__ */ l.jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6", children: [
      c && /* @__PURE__ */ l.jsx("h3", { className: "text-lg font-semibold mb-4", children: c }),
      /* @__PURE__ */ l.jsx("div", { children: a })
    ] }) })
  ] }) : null;
}
Ze.propTypes = {
  open: k.bool,
  onClose: k.func,
  title: k.string,
  children: k.node
};
export {
  tr as AddToCartForm,
  z as Button,
  Ie as Card,
  Qe as CartList,
  er as CartProvider,
  rr as CartSidebar,
  $e as Input,
  Ze as Modal,
  Ce as useCart
};
