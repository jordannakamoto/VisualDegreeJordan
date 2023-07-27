var dS = Object.defineProperty;
var pS = (e, t, n) =>
  t in e
    ? dS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var hS = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var mu = (e, t, n) => (pS(e, typeof t != "symbol" ? t + "" : t, n), n);
var bI = hS((kI, od) => {
  function mS(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r)
          if (i !== "default" && !(i in e)) {
            const o = Object.getOwnPropertyDescriptor(r, i);
            o &&
              Object.defineProperty(
                e,
                i,
                o.get ? o : { enumerable: !0, get: () => r[i] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  var uo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function Ns(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var ky = { exports: {} },
    Cl = {},
    Cy = { exports: {} },
    te = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Os = Symbol.for("react.element"),
    vS = Symbol.for("react.portal"),
    yS = Symbol.for("react.fragment"),
    gS = Symbol.for("react.strict_mode"),
    wS = Symbol.for("react.profiler"),
    xS = Symbol.for("react.provider"),
    SS = Symbol.for("react.context"),
    bS = Symbol.for("react.forward_ref"),
    ES = Symbol.for("react.suspense"),
    _S = Symbol.for("react.memo"),
    kS = Symbol.for("react.lazy"),
    Zp = Symbol.iterator;
  function CS(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Zp && e[Zp]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ny = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Oy = Object.assign,
    Ty = {};
  function no(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Ty),
      (this.updater = n || Ny);
  }
  no.prototype.isReactComponent = {};
  no.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  no.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Dy() {}
  Dy.prototype = no.prototype;
  function sd(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Ty),
      (this.updater = n || Ny);
  }
  var ad = (sd.prototype = new Dy());
  ad.constructor = sd;
  Oy(ad, no.prototype);
  ad.isPureReactComponent = !0;
  var Jp = Array.isArray,
    Py = Object.prototype.hasOwnProperty,
    ld = { current: null },
    Ry = { key: !0, ref: !0, __self: !0, __source: !0 };
  function jy(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        Py.call(t, r) && !Ry.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
      $$typeof: Os,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: ld.current,
    };
  }
  function NS(e, t) {
    return {
      $$typeof: Os,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function ud(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Os;
  }
  function OS(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var eh = /\/+/g;
  function vu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? OS("" + e.key)
      : t.toString(36);
  }
  function va(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Os:
            case vS:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (i = i(s)),
        (e = r === "" ? "." + vu(s, 0) : r),
        Jp(i)
          ? ((n = ""),
            e != null && (n = e.replace(eh, "$&/") + "/"),
            va(i, t, n, "", function (u) {
              return u;
            }))
          : i != null &&
            (ud(i) &&
              (i = NS(
                i,
                n +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(eh, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Jp(e)))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + vu(o, a);
        s += va(o, t, n, l, i);
      }
    else if (((l = CS(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        (o = o.value), (l = r + vu(o, a++)), (s += va(o, t, n, l, i));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function Bs(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      va(e, r, "", "", function (o) {
        return t.call(n, o, i++);
      }),
      r
    );
  }
  function TS(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Ye = { current: null },
    ya = { transition: null },
    DS = {
      ReactCurrentDispatcher: Ye,
      ReactCurrentBatchConfig: ya,
      ReactCurrentOwner: ld,
    };
  te.Children = {
    map: Bs,
    forEach: function (e, t, n) {
      Bs(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Bs(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Bs(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!ud(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  te.Component = no;
  te.Fragment = yS;
  te.Profiler = wS;
  te.PureComponent = sd;
  te.StrictMode = gS;
  te.Suspense = ES;
  te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DS;
  te.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Oy({}, e.props),
      i = e.key,
      o = e.ref,
      s = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (s = ld.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        Py.call(t, l) &&
          !Ry.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: Os, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  te.createContext = function (e) {
    return (
      (e = {
        $$typeof: SS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: xS, _context: e }),
      (e.Consumer = e)
    );
  };
  te.createElement = jy;
  te.createFactory = function (e) {
    var t = jy.bind(null, e);
    return (t.type = e), t;
  };
  te.createRef = function () {
    return { current: null };
  };
  te.forwardRef = function (e) {
    return { $$typeof: bS, render: e };
  };
  te.isValidElement = ud;
  te.lazy = function (e) {
    return { $$typeof: kS, _payload: { _status: -1, _result: e }, _init: TS };
  };
  te.memo = function (e, t) {
    return { $$typeof: _S, type: e, compare: t === void 0 ? null : t };
  };
  te.startTransition = function (e) {
    var t = ya.transition;
    ya.transition = {};
    try {
      e();
    } finally {
      ya.transition = t;
    }
  };
  te.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  te.useCallback = function (e, t) {
    return Ye.current.useCallback(e, t);
  };
  te.useContext = function (e) {
    return Ye.current.useContext(e);
  };
  te.useDebugValue = function () {};
  te.useDeferredValue = function (e) {
    return Ye.current.useDeferredValue(e);
  };
  te.useEffect = function (e, t) {
    return Ye.current.useEffect(e, t);
  };
  te.useId = function () {
    return Ye.current.useId();
  };
  te.useImperativeHandle = function (e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n);
  };
  te.useInsertionEffect = function (e, t) {
    return Ye.current.useInsertionEffect(e, t);
  };
  te.useLayoutEffect = function (e, t) {
    return Ye.current.useLayoutEffect(e, t);
  };
  te.useMemo = function (e, t) {
    return Ye.current.useMemo(e, t);
  };
  te.useReducer = function (e, t, n) {
    return Ye.current.useReducer(e, t, n);
  };
  te.useRef = function (e) {
    return Ye.current.useRef(e);
  };
  te.useState = function (e) {
    return Ye.current.useState(e);
  };
  te.useSyncExternalStore = function (e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n);
  };
  te.useTransition = function () {
    return Ye.current.useTransition();
  };
  te.version = "18.2.0";
  Cy.exports = te;
  var b = Cy.exports;
  const Je = Ns(b),
    PS = mS({ __proto__: null, default: Je }, [b]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var RS = b,
    jS = Symbol.for("react.element"),
    MS = Symbol.for("react.fragment"),
    IS = Object.prototype.hasOwnProperty,
    LS =
      RS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    AS = { key: !0, ref: !0, __self: !0, __source: !0 };
  function My(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    n !== void 0 && (o = "" + n),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
    for (r in t) IS.call(t, r) && !AS.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: jS,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: LS.current,
    };
  }
  Cl.Fragment = MS;
  Cl.jsx = My;
  Cl.jsxs = My;
  ky.exports = Cl;
  var x = ky.exports,
    Iy = { exports: {} },
    yt = {},
    Ly = { exports: {} },
    Ay = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(O, M) {
      var L = O.length;
      O.push(M);
      e: for (; 0 < L; ) {
        var V = (L - 1) >>> 1,
          $ = O[V];
        if (0 < i($, M)) (O[V] = M), (O[L] = $), (L = V);
        else break e;
      }
    }
    function n(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var M = O[0],
        L = O.pop();
      if (L !== M) {
        O[0] = L;
        e: for (var V = 0, $ = O.length, Y = $ >>> 1; V < Y; ) {
          var U = 2 * (V + 1) - 1,
            G = O[U],
            K = U + 1,
            J = O[K];
          if (0 > i(G, L))
            K < $ && 0 > i(J, G)
              ? ((O[V] = J), (O[K] = L), (V = K))
              : ((O[V] = G), (O[U] = L), (V = U));
          else if (K < $ && 0 > i(J, L)) (O[V] = J), (O[K] = L), (V = K);
          else break e;
        }
      }
      return M;
    }
    function i(O, M) {
      var L = O.sortIndex - M.sortIndex;
      return L !== 0 ? L : O.id - M.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var s = Date,
        a = s.now();
      e.unstable_now = function () {
        return s.now() - a;
      };
    }
    var l = [],
      u = [],
      c = 1,
      f = null,
      d = 3,
      p = !1,
      g = !1,
      y = !1,
      S = typeof setTimeout == "function" ? setTimeout : null,
      m = typeof clearTimeout == "function" ? clearTimeout : null,
      h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(O) {
      for (var M = n(u); M !== null; ) {
        if (M.callback === null) r(u);
        else if (M.startTime <= O)
          r(u), (M.sortIndex = M.expirationTime), t(l, M);
        else break;
        M = n(u);
      }
    }
    function w(O) {
      if (((y = !1), v(O), !g))
        if (n(l) !== null) (g = !0), j(E);
        else {
          var M = n(u);
          M !== null && D(w, M.startTime - O);
        }
    }
    function E(O, M) {
      (g = !1), y && ((y = !1), m(N), (N = -1)), (p = !0);
      var L = d;
      try {
        for (
          v(M), f = n(l);
          f !== null && (!(f.expirationTime > M) || (O && !F()));

        ) {
          var V = f.callback;
          if (typeof V == "function") {
            (f.callback = null), (d = f.priorityLevel);
            var $ = V(f.expirationTime <= M);
            (M = e.unstable_now()),
              typeof $ == "function" ? (f.callback = $) : f === n(l) && r(l),
              v(M);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var Y = !0;
        else {
          var U = n(u);
          U !== null && D(w, U.startTime - M), (Y = !1);
        }
        return Y;
      } finally {
        (f = null), (d = L), (p = !1);
      }
    }
    var _ = !1,
      k = null,
      N = -1,
      P = 5,
      T = -1;
    function F() {
      return !(e.unstable_now() - T < P);
    }
    function z() {
      if (k !== null) {
        var O = e.unstable_now();
        T = O;
        var M = !0;
        try {
          M = k(!0, O);
        } finally {
          M ? R() : ((_ = !1), (k = null));
        }
      } else _ = !1;
    }
    var R;
    if (typeof h == "function")
      R = function () {
        h(z);
      };
    else if (typeof MessageChannel < "u") {
      var C = new MessageChannel(),
        I = C.port2;
      (C.port1.onmessage = z),
        (R = function () {
          I.postMessage(null);
        });
    } else
      R = function () {
        S(z, 0);
      };
    function j(O) {
      (k = O), _ || ((_ = !0), R());
    }
    function D(O, M) {
      N = S(function () {
        O(e.unstable_now());
      }, M);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (O) {
        O.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || p || ((g = !0), j(E));
      }),
      (e.unstable_forceFrameRate = function (O) {
        0 > O || 125 < O
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (P = 0 < O ? Math.floor(1e3 / O) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (O) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var M = 3;
            break;
          default:
            M = d;
        }
        var L = d;
        d = M;
        try {
          return O();
        } finally {
          d = L;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (O, M) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var L = d;
        d = O;
        try {
          return M();
        } finally {
          d = L;
        }
      }),
      (e.unstable_scheduleCallback = function (O, M, L) {
        var V = e.unstable_now();
        switch (
          (typeof L == "object" && L !== null
            ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? V + L : V))
            : (L = V),
          O)
        ) {
          case 1:
            var $ = -1;
            break;
          case 2:
            $ = 250;
            break;
          case 5:
            $ = 1073741823;
            break;
          case 4:
            $ = 1e4;
            break;
          default:
            $ = 5e3;
        }
        return (
          ($ = L + $),
          (O = {
            id: c++,
            callback: M,
            priorityLevel: O,
            startTime: L,
            expirationTime: $,
            sortIndex: -1,
          }),
          L > V
            ? ((O.sortIndex = L),
              t(u, O),
              n(l) === null &&
                O === n(u) &&
                (y ? (m(N), (N = -1)) : (y = !0), D(w, L - V)))
            : ((O.sortIndex = $), t(l, O), g || p || ((g = !0), j(E))),
          O
        );
      }),
      (e.unstable_shouldYield = F),
      (e.unstable_wrapCallback = function (O) {
        var M = d;
        return function () {
          var L = d;
          d = M;
          try {
            return O.apply(this, arguments);
          } finally {
            d = L;
          }
        };
      });
  })(Ay);
  Ly.exports = Ay;
  var FS = Ly.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Fy = b,
    ht = FS;
  function B(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var zy = new Set(),
    Zo = {};
  function Vr(e, t) {
    Mi(e, t), Mi(e + "Capture", t);
  }
  function Mi(e, t) {
    for (Zo[e] = t, e = 0; e < t.length; e++) zy.add(t[e]);
  }
  var yn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hc = Object.prototype.hasOwnProperty,
    zS =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    th = {},
    nh = {};
  function $S(e) {
    return hc.call(nh, e)
      ? !0
      : hc.call(th, e)
      ? !1
      : zS.test(e)
      ? (nh[e] = !0)
      : ((th[e] = !0), !1);
  }
  function BS(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function VS(e, t, n, r) {
    if (t === null || typeof t > "u" || BS(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Xe(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Fe[e] = new Xe(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    Fe[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Fe[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    Fe[e] = new Xe(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      Fe[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Fe[e] = new Xe(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    Fe[e] = new Xe(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    Fe[e] = new Xe(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    Fe[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var cd = /[\-:]([a-z])/g;
  function fd(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(cd, fd);
      Fe[t] = new Xe(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(cd, fd);
      Fe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(cd, fd);
    Fe[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    Fe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Fe.xlinkHref = new Xe(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    Fe[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function dd(e, t, n, r) {
    var i = Fe.hasOwnProperty(t) ? Fe[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (VS(t, n, i, r) && (n = null),
      r || i === null
        ? $S(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var _n = Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Vs = Symbol.for("react.element"),
    ri = Symbol.for("react.portal"),
    ii = Symbol.for("react.fragment"),
    pd = Symbol.for("react.strict_mode"),
    mc = Symbol.for("react.profiler"),
    $y = Symbol.for("react.provider"),
    By = Symbol.for("react.context"),
    hd = Symbol.for("react.forward_ref"),
    vc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.suspense_list"),
    md = Symbol.for("react.memo"),
    Dn = Symbol.for("react.lazy"),
    Vy = Symbol.for("react.offscreen"),
    rh = Symbol.iterator;
  function co(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (rh && e[rh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Object.assign,
    yu;
  function To(e) {
    if (yu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        yu = (t && t[1]) || "";
      }
    return (
      `
` +
      yu +
      e
    );
  }
  var gu = !1;
  function wu(e, t) {
    if (!e || gu) return "";
    gu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var i = u.stack.split(`
`),
            o = r.stack.split(`
`),
            s = i.length - 1,
            a = o.length - 1;
          1 <= s && 0 <= a && i[s] !== o[a];

        )
          a--;
        for (; 1 <= s && 0 <= a; s--, a--)
          if (i[s] !== o[a]) {
            if (s !== 1 || a !== 1)
              do
                if ((s--, a--, 0 > a || i[s] !== o[a])) {
                  var l =
                    `
` + i[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= s && 0 <= a);
            break;
          }
      }
    } finally {
      (gu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? To(e) : "";
  }
  function HS(e) {
    switch (e.tag) {
      case 5:
        return To(e.type);
      case 16:
        return To("Lazy");
      case 13:
        return To("Suspense");
      case 19:
        return To("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = wu(e.type, !1)), e;
      case 11:
        return (e = wu(e.type.render, !1)), e;
      case 1:
        return (e = wu(e.type, !0)), e;
      default:
        return "";
    }
  }
  function gc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ii:
        return "Fragment";
      case ri:
        return "Portal";
      case mc:
        return "Profiler";
      case pd:
        return "StrictMode";
      case vc:
        return "Suspense";
      case yc:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case By:
          return (e.displayName || "Context") + ".Consumer";
        case $y:
          return (e._context.displayName || "Context") + ".Provider";
        case hd:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case md:
          return (
            (t = e.displayName || null), t !== null ? t : gc(e.type) || "Memo"
          );
        case Dn:
          (t = e._payload), (e = e._init);
          try {
            return gc(e(t));
          } catch {}
      }
    return null;
  }
  function US(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return gc(t);
      case 8:
        return t === pd ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function er(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Hy(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function QS(e) {
    var t = Hy(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (s) {
            (r = "" + s), o.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Hs(e) {
    e._valueTracker || (e._valueTracker = QS(e));
  }
  function Uy(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Hy(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function $a(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function wc(e, t) {
    var n = t.checked;
    return xe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ih(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = er(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Qy(e, t) {
    (t = t.checked), t != null && dd(e, "checked", t, !1);
  }
  function xc(e, t) {
    Qy(e, t);
    var n = er(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Sc(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Sc(e, t.type, er(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function oh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Sc(e, t, n) {
    (t !== "number" || $a(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Do = Array.isArray;
  function wi(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + er(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
    return xe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function sh(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(B(92));
        if (Do(n)) {
          if (1 < n.length) throw Error(B(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: er(n) };
  }
  function qy(e, t) {
    var n = er(t.value),
      r = er(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ah(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Wy(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ec(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Wy(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Us,
    Yy = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Us = Us || document.createElement("div"),
            Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Us.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jo(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ao = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    qS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ao).forEach(function (e) {
    qS.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ao[t] = Ao[e]);
    });
  });
  function Xy(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Ao.hasOwnProperty(e) && Ao[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Gy(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = Xy(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var WS = xe(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function _c(e, t) {
    if (t) {
      if (WS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(B(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(B(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(B(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(B(62));
    }
  }
  function kc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Cc = null;
  function vd(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Nc = null,
    xi = null,
    Si = null;
  function lh(e) {
    if ((e = Ps(e))) {
      if (typeof Nc != "function") throw Error(B(280));
      var t = e.stateNode;
      t && ((t = Pl(t)), Nc(e.stateNode, e.type, t));
    }
  }
  function Ky(e) {
    xi ? (Si ? Si.push(e) : (Si = [e])) : (xi = e);
  }
  function Zy() {
    if (xi) {
      var e = xi,
        t = Si;
      if (((Si = xi = null), lh(e), t)) for (e = 0; e < t.length; e++) lh(t[e]);
    }
  }
  function Jy(e, t) {
    return e(t);
  }
  function eg() {}
  var xu = !1;
  function tg(e, t, n) {
    if (xu) return e(t, n);
    xu = !0;
    try {
      return Jy(e, t, n);
    } finally {
      (xu = !1), (xi !== null || Si !== null) && (eg(), Zy());
    }
  }
  function es(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(B(231, t, typeof n));
    return n;
  }
  var Oc = !1;
  if (yn)
    try {
      var fo = {};
      Object.defineProperty(fo, "passive", {
        get: function () {
          Oc = !0;
        },
      }),
        window.addEventListener("test", fo, fo),
        window.removeEventListener("test", fo, fo);
    } catch {
      Oc = !1;
    }
  function YS(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Fo = !1,
    Ba = null,
    Va = !1,
    Tc = null,
    XS = {
      onError: function (e) {
        (Fo = !0), (Ba = e);
      },
    };
  function GS(e, t, n, r, i, o, s, a, l) {
    (Fo = !1), (Ba = null), YS.apply(XS, arguments);
  }
  function KS(e, t, n, r, i, o, s, a, l) {
    if ((GS.apply(this, arguments), Fo)) {
      if (Fo) {
        var u = Ba;
        (Fo = !1), (Ba = null);
      } else throw Error(B(198));
      Va || ((Va = !0), (Tc = u));
    }
  }
  function Hr(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ng(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function uh(e) {
    if (Hr(e) !== e) throw Error(B(188));
  }
  function ZS(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Hr(e)), t === null)) throw Error(B(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return uh(i), e;
          if (o === r) return uh(i), t;
          o = o.sibling;
        }
        throw Error(B(188));
      }
      if (n.return !== r.return) (n = i), (r = o);
      else {
        for (var s = !1, a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) {
          for (a = o.child; a; ) {
            if (a === n) {
              (s = !0), (n = o), (r = i);
              break;
            }
            if (a === r) {
              (s = !0), (r = o), (n = i);
              break;
            }
            a = a.sibling;
          }
          if (!s) throw Error(B(189));
        }
      }
      if (n.alternate !== r) throw Error(B(190));
    }
    if (n.tag !== 3) throw Error(B(188));
    return n.stateNode.current === n ? e : t;
  }
  function rg(e) {
    return (e = ZS(e)), e !== null ? ig(e) : null;
  }
  function ig(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ig(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var og = ht.unstable_scheduleCallback,
    ch = ht.unstable_cancelCallback,
    JS = ht.unstable_shouldYield,
    eb = ht.unstable_requestPaint,
    _e = ht.unstable_now,
    tb = ht.unstable_getCurrentPriorityLevel,
    yd = ht.unstable_ImmediatePriority,
    sg = ht.unstable_UserBlockingPriority,
    Ha = ht.unstable_NormalPriority,
    nb = ht.unstable_LowPriority,
    ag = ht.unstable_IdlePriority,
    Nl = null,
    Jt = null;
  function rb(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
      try {
        Jt.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var zt = Math.clz32 ? Math.clz32 : sb,
    ib = Math.log,
    ob = Math.LN2;
  function sb(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ib(e) / ob) | 0)) | 0;
  }
  var Qs = 64,
    qs = 4194304;
  function Po(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ua(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? (r = Po(a)) : ((o &= s), o !== 0 && (r = Po(o)));
    } else (s = n & ~i), s !== 0 ? (r = Po(s)) : o !== 0 && (r = Po(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - zt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function ab(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lb(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - zt(o),
        a = 1 << s,
        l = i[s];
      l === -1
        ? (!(a & n) || a & r) && (i[s] = ab(a, t))
        : l <= t && (e.expiredLanes |= a),
        (o &= ~a);
    }
  }
  function Dc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function lg() {
    var e = Qs;
    return (Qs <<= 1), !(Qs & 4194240) && (Qs = 64), e;
  }
  function Su(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ts(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - zt(t)),
      (e[t] = n);
  }
  function ub(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - zt(n),
        o = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
  }
  function gd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - zt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var se = 0;
  function ug(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var cg,
    wd,
    fg,
    dg,
    pg,
    Pc = !1,
    Ws = [],
    Un = null,
    Qn = null,
    qn = null,
    ts = new Map(),
    ns = new Map(),
    Fn = [],
    cb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function fh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        ts.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ns.delete(t.pointerId);
    }
  }
  function po(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = Ps(t)), t !== null && wd(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function fb(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Un = po(Un, e, t, n, r, i)), !0;
      case "dragenter":
        return (Qn = po(Qn, e, t, n, r, i)), !0;
      case "mouseover":
        return (qn = po(qn, e, t, n, r, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return ts.set(o, po(ts.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), ns.set(o, po(ns.get(o) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function hg(e) {
    var t = Sr(e.target);
    if (t !== null) {
      var n = Hr(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ng(n)), t !== null)) {
            (e.blockedOn = t),
              pg(e.priority, function () {
                fg(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ga(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Cc = r), n.target.dispatchEvent(r), (Cc = null);
      } else return (t = Ps(n)), t !== null && wd(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function dh(e, t, n) {
    ga(e) && n.delete(t);
  }
  function db() {
    (Pc = !1),
      Un !== null && ga(Un) && (Un = null),
      Qn !== null && ga(Qn) && (Qn = null),
      qn !== null && ga(qn) && (qn = null),
      ts.forEach(dh),
      ns.forEach(dh);
  }
  function ho(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Pc ||
        ((Pc = !0),
        ht.unstable_scheduleCallback(ht.unstable_NormalPriority, db)));
  }
  function rs(e) {
    function t(i) {
      return ho(i, e);
    }
    if (0 < Ws.length) {
      ho(Ws[0], e);
      for (var n = 1; n < Ws.length; n++) {
        var r = Ws[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Un !== null && ho(Un, e),
        Qn !== null && ho(Qn, e),
        qn !== null && ho(qn, e),
        ts.forEach(t),
        ns.forEach(t),
        n = 0;
      n < Fn.length;
      n++
    )
      (r = Fn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
      hg(n), n.blockedOn === null && Fn.shift();
  }
  var bi = _n.ReactCurrentBatchConfig,
    Qa = !0;
  function pb(e, t, n, r) {
    var i = se,
      o = bi.transition;
    bi.transition = null;
    try {
      (se = 1), xd(e, t, n, r);
    } finally {
      (se = i), (bi.transition = o);
    }
  }
  function hb(e, t, n, r) {
    var i = se,
      o = bi.transition;
    bi.transition = null;
    try {
      (se = 4), xd(e, t, n, r);
    } finally {
      (se = i), (bi.transition = o);
    }
  }
  function xd(e, t, n, r) {
    if (Qa) {
      var i = Rc(e, t, n, r);
      if (i === null) Pu(e, t, r, qa, n), fh(e, r);
      else if (fb(i, e, t, n, r)) r.stopPropagation();
      else if ((fh(e, r), t & 4 && -1 < cb.indexOf(e))) {
        for (; i !== null; ) {
          var o = Ps(i);
          if (
            (o !== null && cg(o),
            (o = Rc(e, t, n, r)),
            o === null && Pu(e, t, r, qa, n),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else Pu(e, t, r, null, n);
    }
  }
  var qa = null;
  function Rc(e, t, n, r) {
    if (((qa = null), (e = vd(r)), (e = Sr(e)), e !== null))
      if (((t = Hr(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ng(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (qa = e), null;
  }
  function mg(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (tb()) {
          case yd:
            return 1;
          case sg:
            return 4;
          case Ha:
          case nb:
            return 16;
          case ag:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bn = null,
    Sd = null,
    wa = null;
  function vg() {
    if (wa) return wa;
    var e,
      t = Sd,
      n = t.length,
      r,
      i = "value" in Bn ? Bn.value : Bn.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (wa = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function xa(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ys() {
    return !0;
  }
  function ph() {
    return !1;
  }
  function gt(e) {
    function t(n, r, i, o, s) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = s),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ys
          : ph),
        (this.isPropagationStopped = ph),
        this
      );
    }
    return (
      xe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ys));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ys));
        },
        persist: function () {},
        isPersistent: Ys,
      }),
      t
    );
  }
  var ro = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bd = gt(ro),
    Ds = xe({}, ro, { view: 0, detail: 0 }),
    mb = gt(Ds),
    bu,
    Eu,
    mo,
    Ol = xe({}, Ds, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ed,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== mo &&
              (mo && e.type === "mousemove"
                ? ((bu = e.screenX - mo.screenX), (Eu = e.screenY - mo.screenY))
                : (Eu = bu = 0),
              (mo = e)),
            bu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Eu;
      },
    }),
    hh = gt(Ol),
    vb = xe({}, Ol, { dataTransfer: 0 }),
    yb = gt(vb),
    gb = xe({}, Ds, { relatedTarget: 0 }),
    _u = gt(gb),
    wb = xe({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xb = gt(wb),
    Sb = xe({}, ro, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    bb = gt(Sb),
    Eb = xe({}, ro, { data: 0 }),
    mh = gt(Eb),
    _b = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    kb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Cb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Nb(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Cb[e])
      ? !!t[e]
      : !1;
  }
  function Ed() {
    return Nb;
  }
  var Ob = xe({}, Ds, {
      key: function (e) {
        if (e.key) {
          var t = _b[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = xa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? kb[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ed,
      charCode: function (e) {
        return e.type === "keypress" ? xa(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? xa(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Tb = gt(Ob),
    Db = xe({}, Ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    vh = gt(Db),
    Pb = xe({}, Ds, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ed,
    }),
    Rb = gt(Pb),
    jb = xe({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mb = gt(jb),
    Ib = xe({}, Ol, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Lb = gt(Ib),
    Ab = [9, 13, 27, 32],
    _d = yn && "CompositionEvent" in window,
    zo = null;
  yn && "documentMode" in document && (zo = document.documentMode);
  var Fb = yn && "TextEvent" in window && !zo,
    yg = yn && (!_d || (zo && 8 < zo && 11 >= zo)),
    yh = String.fromCharCode(32),
    gh = !1;
  function gg(e, t) {
    switch (e) {
      case "keyup":
        return Ab.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wg(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var oi = !1;
  function zb(e, t) {
    switch (e) {
      case "compositionend":
        return wg(t);
      case "keypress":
        return t.which !== 32 ? null : ((gh = !0), yh);
      case "textInput":
        return (e = t.data), e === yh && gh ? null : e;
      default:
        return null;
    }
  }
  function $b(e, t) {
    if (oi)
      return e === "compositionend" || (!_d && gg(e, t))
        ? ((e = vg()), (wa = Sd = Bn = null), (oi = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return yg && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Bb = {
    "color": !0,
    "date": !0,
    "datetime": !0,
    "datetime-local": !0,
    "email": !0,
    "month": !0,
    "number": !0,
    "password": !0,
    "range": !0,
    "search": !0,
    "tel": !0,
    "text": !0,
    "time": !0,
    "url": !0,
    "week": !0,
  };
  function wh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Bb[e.type] : t === "textarea";
  }
  function xg(e, t, n, r) {
    Ky(r),
      (t = Wa(t, "onChange")),
      0 < t.length &&
        ((n = new bd("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var $o = null,
    is = null;
  function Vb(e) {
    Pg(e, 0);
  }
  function Tl(e) {
    var t = li(e);
    if (Uy(t)) return e;
  }
  function Hb(e, t) {
    if (e === "change") return t;
  }
  var Sg = !1;
  if (yn) {
    var ku;
    if (yn) {
      var Cu = "oninput" in document;
      if (!Cu) {
        var xh = document.createElement("div");
        xh.setAttribute("oninput", "return;"),
          (Cu = typeof xh.oninput == "function");
      }
      ku = Cu;
    } else ku = !1;
    Sg = ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Sh() {
    $o && ($o.detachEvent("onpropertychange", bg), (is = $o = null));
  }
  function bg(e) {
    if (e.propertyName === "value" && Tl(is)) {
      var t = [];
      xg(t, is, e, vd(e)), tg(Vb, t);
    }
  }
  function Ub(e, t, n) {
    e === "focusin"
      ? (Sh(), ($o = t), (is = n), $o.attachEvent("onpropertychange", bg))
      : e === "focusout" && Sh();
  }
  function Qb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tl(is);
  }
  function qb(e, t) {
    if (e === "click") return Tl(t);
  }
  function Wb(e, t) {
    if (e === "input" || e === "change") return Tl(t);
  }
  function Yb(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Vt = typeof Object.is == "function" ? Object.is : Yb;
  function os(e, t) {
    if (Vt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!hc.call(t, i) || !Vt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function bh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Eh(e, t) {
    var n = bh(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = bh(n);
    }
  }
  function Eg(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Eg(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function _g() {
    for (var e = window, t = $a(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = $a(e.document);
    }
    return t;
  }
  function kd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Xb(e) {
    var t = _g(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Eg(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && kd(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            o = Math.min(r.start, i);
          (r = r.end === void 0 ? o : Math.min(r.end, i)),
            !e.extend && o > r && ((i = r), (r = o), (o = i)),
            (i = Eh(n, o));
          var s = Eh(n, r);
          i &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Gb = yn && "documentMode" in document && 11 >= document.documentMode,
    si = null,
    jc = null,
    Bo = null,
    Mc = !1;
  function _h(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Mc ||
      si == null ||
      si !== $a(r) ||
      ((r = si),
      "selectionStart" in r && kd(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Bo && os(Bo, r)) ||
        ((Bo = r),
        (r = Wa(jc, "onSelect")),
        0 < r.length &&
          ((t = new bd("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = si))));
  }
  function Xs(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var ai = {
      animationend: Xs("Animation", "AnimationEnd"),
      animationiteration: Xs("Animation", "AnimationIteration"),
      animationstart: Xs("Animation", "AnimationStart"),
      transitionend: Xs("Transition", "TransitionEnd"),
    },
    Nu = {},
    kg = {};
  yn &&
    ((kg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ai.animationend.animation,
      delete ai.animationiteration.animation,
      delete ai.animationstart.animation),
    "TransitionEvent" in window || delete ai.transitionend.transition);
  function Dl(e) {
    if (Nu[e]) return Nu[e];
    if (!ai[e]) return e;
    var t = ai[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in kg) return (Nu[e] = t[n]);
    return e;
  }
  var Cg = Dl("animationend"),
    Ng = Dl("animationiteration"),
    Og = Dl("animationstart"),
    Tg = Dl("transitionend"),
    Dg = new Map(),
    kh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function ar(e, t) {
    Dg.set(e, t), Vr(t, [e]);
  }
  for (var Ou = 0; Ou < kh.length; Ou++) {
    var Tu = kh[Ou],
      Kb = Tu.toLowerCase(),
      Zb = Tu[0].toUpperCase() + Tu.slice(1);
    ar(Kb, "on" + Zb);
  }
  ar(Cg, "onAnimationEnd");
  ar(Ng, "onAnimationIteration");
  ar(Og, "onAnimationStart");
  ar("dblclick", "onDoubleClick");
  ar("focusin", "onFocus");
  ar("focusout", "onBlur");
  ar(Tg, "onTransitionEnd");
  Mi("onMouseEnter", ["mouseout", "mouseover"]);
  Mi("onMouseLeave", ["mouseout", "mouseover"]);
  Mi("onPointerEnter", ["pointerout", "pointerover"]);
  Mi("onPointerLeave", ["pointerout", "pointerover"]);
  Vr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  Vr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Vr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  Vr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  Vr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ro =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Jb = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ro)
    );
  function Ch(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), KS(r, t, void 0, e), (e.currentTarget = null);
  }
  function Pg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var a = r[s],
              l = a.instance,
              u = a.currentTarget;
            if (((a = a.listener), l !== o && i.isPropagationStopped()))
              break e;
            Ch(i, a, u), (o = l);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((a = r[s]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== o && i.isPropagationStopped())
            )
              break e;
            Ch(i, a, u), (o = l);
          }
      }
    }
    if (Va) throw ((e = Tc), (Va = !1), (Tc = null), e);
  }
  function fe(e, t) {
    var n = t[zc];
    n === void 0 && (n = t[zc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Rg(t, e, 2, !1), n.add(r));
  }
  function Du(e, t, n) {
    var r = 0;
    t && (r |= 4), Rg(n, e, r, t);
  }
  var Gs = "_reactListening" + Math.random().toString(36).slice(2);
  function ss(e) {
    if (!e[Gs]) {
      (e[Gs] = !0),
        zy.forEach(function (n) {
          n !== "selectionchange" && (Jb.has(n) || Du(n, !1, e), Du(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gs] || ((t[Gs] = !0), Du("selectionchange", !1, t));
    }
  }
  function Rg(e, t, n, r) {
    switch (mg(t)) {
      case 1:
        var i = pb;
        break;
      case 4:
        i = hb;
        break;
      default:
        i = xd;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Oc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Pu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var l = s.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = s.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return;
              s = s.return;
            }
          for (; a !== null; ) {
            if (((s = Sr(a)), s === null)) return;
            if (((l = s.tag), l === 5 || l === 6)) {
              r = o = s;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    tg(function () {
      var u = o,
        c = vd(n),
        f = [];
      e: {
        var d = Dg.get(e);
        if (d !== void 0) {
          var p = bd,
            g = e;
          switch (e) {
            case "keypress":
              if (xa(n) === 0) break e;
            case "keydown":
            case "keyup":
              p = Tb;
              break;
            case "focusin":
              (g = "focus"), (p = _u);
              break;
            case "focusout":
              (g = "blur"), (p = _u);
              break;
            case "beforeblur":
            case "afterblur":
              p = _u;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = yb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Rb;
              break;
            case Cg:
            case Ng:
            case Og:
              p = xb;
              break;
            case Tg:
              p = Mb;
              break;
            case "scroll":
              p = mb;
              break;
            case "wheel":
              p = Lb;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = bb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = vh;
          }
          var y = (t & 4) !== 0,
            S = !y && e === "scroll",
            m = y ? (d !== null ? d + "Capture" : null) : d;
          y = [];
          for (var h = u, v; h !== null; ) {
            v = h;
            var w = v.stateNode;
            if (
              (v.tag === 5 &&
                w !== null &&
                ((v = w),
                m !== null &&
                  ((w = es(h, m)), w != null && y.push(as(h, w, v)))),
              S)
            )
              break;
            h = h.return;
          }
          0 < y.length &&
            ((d = new p(d, g, null, n, c)), f.push({ event: d, listeners: y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((d = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            d &&
              n !== Cc &&
              (g = n.relatedTarget || n.fromElement) &&
              (Sr(g) || g[gn]))
          )
            break e;
          if (
            (p || d) &&
            ((d =
              c.window === c
                ? c
                : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
            p
              ? ((g = n.relatedTarget || n.toElement),
                (p = u),
                (g = g ? Sr(g) : null),
                g !== null &&
                  ((S = Hr(g)), g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((p = null), (g = u)),
            p !== g)
          ) {
            if (
              ((y = hh),
              (w = "onMouseLeave"),
              (m = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((y = vh),
                (w = "onPointerLeave"),
                (m = "onPointerEnter"),
                (h = "pointer")),
              (S = p == null ? d : li(p)),
              (v = g == null ? d : li(g)),
              (d = new y(w, h + "leave", p, n, c)),
              (d.target = S),
              (d.relatedTarget = v),
              (w = null),
              Sr(c) === u &&
                ((y = new y(m, h + "enter", g, n, c)),
                (y.target = v),
                (y.relatedTarget = S),
                (w = y)),
              (S = w),
              p && g)
            )
              t: {
                for (y = p, m = g, h = 0, v = y; v; v = Wr(v)) h++;
                for (v = 0, w = m; w; w = Wr(w)) v++;
                for (; 0 < h - v; ) (y = Wr(y)), h--;
                for (; 0 < v - h; ) (m = Wr(m)), v--;
                for (; h--; ) {
                  if (y === m || (m !== null && y === m.alternate)) break t;
                  (y = Wr(y)), (m = Wr(m));
                }
                y = null;
              }
            else y = null;
            p !== null && Nh(f, d, p, y, !1),
              g !== null && S !== null && Nh(f, S, g, y, !0);
          }
        }
        e: {
          if (
            ((d = u ? li(u) : window),
            (p = d.nodeName && d.nodeName.toLowerCase()),
            p === "select" || (p === "input" && d.type === "file"))
          )
            var E = Hb;
          else if (wh(d))
            if (Sg) E = Wb;
            else {
              E = Qb;
              var _ = Ub;
            }
          else
            (p = d.nodeName) &&
              p.toLowerCase() === "input" &&
              (d.type === "checkbox" || d.type === "radio") &&
              (E = qb);
          if (E && (E = E(e, u))) {
            xg(f, E, n, c);
            break e;
          }
          _ && _(e, d, u),
            e === "focusout" &&
              (_ = d._wrapperState) &&
              _.controlled &&
              d.type === "number" &&
              Sc(d, "number", d.value);
        }
        switch (((_ = u ? li(u) : window), e)) {
          case "focusin":
            (wh(_) || _.contentEditable === "true") &&
              ((si = _), (jc = u), (Bo = null));
            break;
          case "focusout":
            Bo = jc = si = null;
            break;
          case "mousedown":
            Mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Mc = !1), _h(f, n, c);
            break;
          case "selectionchange":
            if (Gb) break;
          case "keydown":
          case "keyup":
            _h(f, n, c);
        }
        var k;
        if (_d)
          e: {
            switch (e) {
              case "compositionstart":
                var N = "onCompositionStart";
                break e;
              case "compositionend":
                N = "onCompositionEnd";
                break e;
              case "compositionupdate":
                N = "onCompositionUpdate";
                break e;
            }
            N = void 0;
          }
        else
          oi
            ? gg(e, n) && (N = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (N = "onCompositionStart");
        N &&
          (yg &&
            n.locale !== "ko" &&
            (oi || N !== "onCompositionStart"
              ? N === "onCompositionEnd" && oi && (k = vg())
              : ((Bn = c),
                (Sd = "value" in Bn ? Bn.value : Bn.textContent),
                (oi = !0))),
          (_ = Wa(u, N)),
          0 < _.length &&
            ((N = new mh(N, e, null, n, c)),
            f.push({ event: N, listeners: _ }),
            k ? (N.data = k) : ((k = wg(n)), k !== null && (N.data = k)))),
          (k = Fb ? zb(e, n) : $b(e, n)) &&
            ((u = Wa(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new mh("onBeforeInput", "beforeinput", null, n, c)),
              f.push({ event: c, listeners: u }),
              (c.data = k)));
      }
      Pg(f, t);
    });
  }
  function as(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = es(e, n)),
        o != null && r.unshift(as(e, o, i)),
        (o = es(e, t)),
        o != null && r.push(as(e, o, i))),
        (e = e.return);
    }
    return r;
  }
  function Wr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Nh(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        u = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        i
          ? ((l = es(n, o)), l != null && s.unshift(as(n, l, a)))
          : i || ((l = es(n, o)), l != null && s.push(as(n, l, a)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var eE = /\r\n?/g,
    tE = /\u0000|\uFFFD/g;
  function Oh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        eE,
        `
`
      )
      .replace(tE, "");
  }
  function Ks(e, t, n) {
    if (((t = Oh(t)), Oh(e) !== t && n)) throw Error(B(425));
  }
  function Ya() {}
  var Ic = null,
    Lc = null;
  function Ac(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Fc = typeof setTimeout == "function" ? setTimeout : void 0,
    nE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Th = typeof Promise == "function" ? Promise : void 0,
    rE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Th < "u"
        ? function (e) {
            return Th.resolve(null).then(e).catch(iE);
          }
        : Fc;
  function iE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ru(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), rs(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    rs(t);
  }
  function Wn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Dh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var io = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + io,
    ls = "__reactProps$" + io,
    gn = "__reactContainer$" + io,
    zc = "__reactEvents$" + io,
    oE = "__reactListeners$" + io,
    sE = "__reactHandles$" + io;
  function Sr(e) {
    var t = e[Zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[gn] || n[Zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Dh(e); e !== null; ) {
            if ((n = e[Zt])) return n;
            e = Dh(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Ps(e) {
    return (
      (e = e[Zt] || e[gn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function li(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(B(33));
  }
  function Pl(e) {
    return e[ls] || null;
  }
  var $c = [],
    ui = -1;
  function lr(e) {
    return { current: e };
  }
  function pe(e) {
    0 > ui || ((e.current = $c[ui]), ($c[ui] = null), ui--);
  }
  function ue(e, t) {
    ui++, ($c[ui] = e.current), (e.current = t);
  }
  var tr = {},
    Ue = lr(tr),
    nt = lr(!1),
    Rr = tr;
  function Ii(e, t) {
    var n = e.type.contextTypes;
    if (!n) return tr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in n) i[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function rt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Xa() {
    pe(nt), pe(Ue);
  }
  function Ph(e, t, n) {
    if (Ue.current !== tr) throw Error(B(168));
    ue(Ue, t), ue(nt, n);
  }
  function jg(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(B(108, US(e) || "Unknown", i));
    return xe({}, n, r);
  }
  function Ga(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        tr),
      (Rr = Ue.current),
      ue(Ue, e),
      ue(nt, nt.current),
      !0
    );
  }
  function Rh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(B(169));
    n
      ? ((e = jg(e, t, Rr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        pe(nt),
        pe(Ue),
        ue(Ue, e))
      : pe(nt),
      ue(nt, n);
  }
  var dn = null,
    Rl = !1,
    ju = !1;
  function Mg(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function aE(e) {
    (Rl = !0), Mg(e);
  }
  function ur() {
    if (!ju && dn !== null) {
      ju = !0;
      var e = 0,
        t = se;
      try {
        var n = dn;
        for (se = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (dn = null), (Rl = !1);
      } catch (i) {
        throw (dn !== null && (dn = dn.slice(e + 1)), og(yd, ur), i);
      } finally {
        (se = t), (ju = !1);
      }
    }
    return null;
  }
  var ci = [],
    fi = 0,
    Ka = null,
    Za = 0,
    xt = [],
    St = 0,
    jr = null,
    pn = 1,
    hn = "";
  function vr(e, t) {
    (ci[fi++] = Za), (ci[fi++] = Ka), (Ka = e), (Za = t);
  }
  function Ig(e, t, n) {
    (xt[St++] = pn), (xt[St++] = hn), (xt[St++] = jr), (jr = e);
    var r = pn;
    e = hn;
    var i = 32 - zt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - zt(t) + i;
    if (30 < o) {
      var s = i - (i % 5);
      (o = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (i -= s),
        (pn = (1 << (32 - zt(t) + i)) | (n << i) | r),
        (hn = o + e);
    } else (pn = (1 << o) | (n << i) | r), (hn = e);
  }
  function Cd(e) {
    e.return !== null && (vr(e, 1), Ig(e, 1, 0));
  }
  function Nd(e) {
    for (; e === Ka; )
      (Ka = ci[--fi]), (ci[fi] = null), (Za = ci[--fi]), (ci[fi] = null);
    for (; e === jr; )
      (jr = xt[--St]),
        (xt[St] = null),
        (hn = xt[--St]),
        (xt[St] = null),
        (pn = xt[--St]),
        (xt[St] = null);
  }
  var pt = null,
    dt = null,
    me = !1,
    Lt = null;
  function Lg(e, t) {
    var n = Et(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function jh(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (pt = e), (dt = Wn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (dt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = jr !== null ? { id: pn, overflow: hn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Et(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (pt = e),
              (dt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Bc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vc(e) {
    if (me) {
      var t = dt;
      if (t) {
        var n = t;
        if (!jh(e, t)) {
          if (Bc(e)) throw Error(B(418));
          t = Wn(n.nextSibling);
          var r = pt;
          t && jh(e, t)
            ? Lg(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (me = !1), (pt = e));
        }
      } else {
        if (Bc(e)) throw Error(B(418));
        (e.flags = (e.flags & -4097) | 2), (me = !1), (pt = e);
      }
    }
  }
  function Mh(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    pt = e;
  }
  function Zs(e) {
    if (e !== pt) return !1;
    if (!me) return Mh(e), (me = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ac(e.type, e.memoizedProps))),
      t && (t = dt))
    ) {
      if (Bc(e)) throw (Ag(), Error(B(418)));
      for (; t; ) Lg(e, t), (t = Wn(t.nextSibling));
    }
    if ((Mh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(B(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                dt = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = pt ? Wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ag() {
    for (var e = dt; e; ) e = Wn(e.nextSibling);
  }
  function Li() {
    (dt = pt = null), (me = !1);
  }
  function Od(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  var lE = _n.ReactCurrentBatchConfig;
  function Mt(e, t) {
    if (e && e.defaultProps) {
      (t = xe({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Ja = lr(null),
    el = null,
    di = null,
    Td = null;
  function Dd() {
    Td = di = el = null;
  }
  function Pd(e) {
    var t = Ja.current;
    pe(Ja), (e._currentValue = t);
  }
  function Hc(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ei(e, t) {
    (el = e),
      (Td = di = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (et = !0), (e.firstContext = null));
  }
  function Ct(e) {
    var t = e._currentValue;
    if (Td !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), di === null)) {
        if (el === null) throw Error(B(308));
        (di = e), (el.dependencies = { lanes: 0, firstContext: e });
      } else di = di.next = e;
    return t;
  }
  var br = null;
  function Rd(e) {
    br === null ? (br = [e]) : br.push(e);
  }
  function Fg(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Rd(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      wn(e, r)
    );
  }
  function wn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Pn = !1;
  function jd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function zg(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function vn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), re & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        wn(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Rd(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      wn(e, n)
    );
  }
  function Sa(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gd(e, n);
    }
  }
  function Ih(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
        } while (n !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function tl(e, t, n, r) {
    var i = e.updateQueue;
    Pn = !1;
    var o = i.firstBaseUpdate,
      s = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a,
        u = l.next;
      (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== s &&
          (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
          (c.lastBaseUpdate = l)));
    }
    if (o !== null) {
      var f = i.baseState;
      (s = 0), (c = u = l = null), (a = o);
      do {
        var d = a.lane,
          p = a.eventTime;
        if ((r & d) === d) {
          c !== null &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var g = e,
              y = a;
            switch (((d = t), (p = n), y.tag)) {
              case 1:
                if (((g = y.payload), typeof g == "function")) {
                  f = g.call(p, f, d);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = y.payload),
                  (d = typeof g == "function" ? g.call(p, f, d) : g),
                  d == null)
                )
                  break e;
                f = xe({}, f, d);
                break e;
              case 2:
                Pn = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (d = i.effects),
            d === null ? (i.effects = [a]) : d.push(a));
        } else
          (p = {
            eventTime: p,
            lane: d,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
            (s |= d);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (d = a),
            (a = d.next),
            (d.next = null),
            (i.lastBaseUpdate = d),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (c === null && (l = f),
        (i.baseState = l),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (s |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      (Ir |= s), (e.lanes = s), (e.memoizedState = f);
    }
  }
  function Lh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(B(191, i));
          i.call(r);
        }
      }
  }
  var $g = new Fy.Component().refs;
  function Uc(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : xe({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var jl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Hr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        i = Gn(e),
        o = vn(r, i);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Yn(e, o, i)),
        t !== null && ($t(t, e, i, r), Sa(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        i = Gn(e),
        o = vn(r, i);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Yn(e, o, i)),
        t !== null && ($t(t, e, i, r), Sa(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = We(),
        r = Gn(e),
        i = vn(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Yn(e, i, r)),
        t !== null && ($t(t, e, r, n), Sa(t, e, r));
    },
  };
  function Ah(e, t, n, r, i, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !os(n, r) || !os(i, o)
        : !0
    );
  }
  function Bg(e, t, n) {
    var r = !1,
      i = tr,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Ct(o))
        : ((i = rt(t) ? Rr : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ii(e, i) : tr)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = jl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Fh(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && jl.enqueueReplaceState(t, t.state, null);
  }
  function Qc(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = $g), jd(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = Ct(o))
      : ((o = rt(t) ? Rr : Ue.current), (i.context = Ii(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Uc(e, t, o, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && jl.enqueueReplaceState(i, i.state, null),
        tl(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function vo(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(B(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(B(147, e));
        var i = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var a = i.refs;
              a === $g && (a = i.refs = {}),
                s === null ? delete a[o] : (a[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(B(284));
      if (!n._owner) throw Error(B(290, e));
    }
    return e;
  }
  function Js(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        B(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function zh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vg(e) {
    function t(m, h) {
      if (e) {
        var v = m.deletions;
        v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h);
      }
    }
    function n(m, h) {
      if (!e) return null;
      for (; h !== null; ) t(m, h), (h = h.sibling);
      return null;
    }
    function r(m, h) {
      for (m = new Map(); h !== null; )
        h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
      return m;
    }
    function i(m, h) {
      return (m = Kn(m, h)), (m.index = 0), (m.sibling = null), m;
    }
    function o(m, h, v) {
      return (
        (m.index = v),
        e
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v)
              : ((m.flags |= 2), h))
          : ((m.flags |= 1048576), h)
      );
    }
    function s(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, h, v, w) {
      return h === null || h.tag !== 6
        ? ((h = $u(v, m.mode, w)), (h.return = m), h)
        : ((h = i(h, v)), (h.return = m), h);
    }
    function l(m, h, v, w) {
      var E = v.type;
      return E === ii
        ? c(m, h, v.props.children, w, v.key)
        : h !== null &&
          (h.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Dn &&
              zh(E) === h.type))
        ? ((w = i(h, v.props)), (w.ref = vo(m, h, v)), (w.return = m), w)
        : ((w = Na(v.type, v.key, v.props, null, m.mode, w)),
          (w.ref = vo(m, h, v)),
          (w.return = m),
          w);
    }
    function u(m, h, v, w) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = Bu(v, m.mode, w)), (h.return = m), h)
        : ((h = i(h, v.children || [])), (h.return = m), h);
    }
    function c(m, h, v, w, E) {
      return h === null || h.tag !== 7
        ? ((h = Nr(v, m.mode, w, E)), (h.return = m), h)
        : ((h = i(h, v)), (h.return = m), h);
    }
    function f(m, h, v) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = $u("" + h, m.mode, v)), (h.return = m), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Vs:
            return (
              (v = Na(h.type, h.key, h.props, null, m.mode, v)),
              (v.ref = vo(m, null, h)),
              (v.return = m),
              v
            );
          case ri:
            return (h = Bu(h, m.mode, v)), (h.return = m), h;
          case Dn:
            var w = h._init;
            return f(m, w(h._payload), v);
        }
        if (Do(h) || co(h))
          return (h = Nr(h, m.mode, v, null)), (h.return = m), h;
        Js(m, h);
      }
      return null;
    }
    function d(m, h, v, w) {
      var E = h !== null ? h.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return E !== null ? null : a(m, h, "" + v, w);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Vs:
            return v.key === E ? l(m, h, v, w) : null;
          case ri:
            return v.key === E ? u(m, h, v, w) : null;
          case Dn:
            return (E = v._init), d(m, h, E(v._payload), w);
        }
        if (Do(v) || co(v)) return E !== null ? null : c(m, h, v, w, null);
        Js(m, v);
      }
      return null;
    }
    function p(m, h, v, w, E) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (m = m.get(v) || null), a(h, m, "" + w, E);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Vs:
            return (
              (m = m.get(w.key === null ? v : w.key) || null), l(h, m, w, E)
            );
          case ri:
            return (
              (m = m.get(w.key === null ? v : w.key) || null), u(h, m, w, E)
            );
          case Dn:
            var _ = w._init;
            return p(m, h, v, _(w._payload), E);
        }
        if (Do(w) || co(w)) return (m = m.get(v) || null), c(h, m, w, E, null);
        Js(h, w);
      }
      return null;
    }
    function g(m, h, v, w) {
      for (
        var E = null, _ = null, k = h, N = (h = 0), P = null;
        k !== null && N < v.length;
        N++
      ) {
        k.index > N ? ((P = k), (k = null)) : (P = k.sibling);
        var T = d(m, k, v[N], w);
        if (T === null) {
          k === null && (k = P);
          break;
        }
        e && k && T.alternate === null && t(m, k),
          (h = o(T, h, N)),
          _ === null ? (E = T) : (_.sibling = T),
          (_ = T),
          (k = P);
      }
      if (N === v.length) return n(m, k), me && vr(m, N), E;
      if (k === null) {
        for (; N < v.length; N++)
          (k = f(m, v[N], w)),
            k !== null &&
              ((h = o(k, h, N)),
              _ === null ? (E = k) : (_.sibling = k),
              (_ = k));
        return me && vr(m, N), E;
      }
      for (k = r(m, k); N < v.length; N++)
        (P = p(k, m, N, v[N], w)),
          P !== null &&
            (e && P.alternate !== null && k.delete(P.key === null ? N : P.key),
            (h = o(P, h, N)),
            _ === null ? (E = P) : (_.sibling = P),
            (_ = P));
      return (
        e &&
          k.forEach(function (F) {
            return t(m, F);
          }),
        me && vr(m, N),
        E
      );
    }
    function y(m, h, v, w) {
      var E = co(v);
      if (typeof E != "function") throw Error(B(150));
      if (((v = E.call(v)), v == null)) throw Error(B(151));
      for (
        var _ = (E = null), k = h, N = (h = 0), P = null, T = v.next();
        k !== null && !T.done;
        N++, T = v.next()
      ) {
        k.index > N ? ((P = k), (k = null)) : (P = k.sibling);
        var F = d(m, k, T.value, w);
        if (F === null) {
          k === null && (k = P);
          break;
        }
        e && k && F.alternate === null && t(m, k),
          (h = o(F, h, N)),
          _ === null ? (E = F) : (_.sibling = F),
          (_ = F),
          (k = P);
      }
      if (T.done) return n(m, k), me && vr(m, N), E;
      if (k === null) {
        for (; !T.done; N++, T = v.next())
          (T = f(m, T.value, w)),
            T !== null &&
              ((h = o(T, h, N)),
              _ === null ? (E = T) : (_.sibling = T),
              (_ = T));
        return me && vr(m, N), E;
      }
      for (k = r(m, k); !T.done; N++, T = v.next())
        (T = p(k, m, N, T.value, w)),
          T !== null &&
            (e && T.alternate !== null && k.delete(T.key === null ? N : T.key),
            (h = o(T, h, N)),
            _ === null ? (E = T) : (_.sibling = T),
            (_ = T));
      return (
        e &&
          k.forEach(function (z) {
            return t(m, z);
          }),
        me && vr(m, N),
        E
      );
    }
    function S(m, h, v, w) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === ii &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Vs:
            e: {
              for (var E = v.key, _ = h; _ !== null; ) {
                if (_.key === E) {
                  if (((E = v.type), E === ii)) {
                    if (_.tag === 7) {
                      n(m, _.sibling),
                        (h = i(_, v.props.children)),
                        (h.return = m),
                        (m = h);
                      break e;
                    }
                  } else if (
                    _.elementType === E ||
                    (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === Dn &&
                      zh(E) === _.type)
                  ) {
                    n(m, _.sibling),
                      (h = i(_, v.props)),
                      (h.ref = vo(m, _, v)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                  n(m, _);
                  break;
                } else t(m, _);
                _ = _.sibling;
              }
              v.type === ii
                ? ((h = Nr(v.props.children, m.mode, w, v.key)),
                  (h.return = m),
                  (m = h))
                : ((w = Na(v.type, v.key, v.props, null, m.mode, w)),
                  (w.ref = vo(m, h, v)),
                  (w.return = m),
                  (m = w));
            }
            return s(m);
          case ri:
            e: {
              for (_ = v.key; h !== null; ) {
                if (h.key === _)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    n(m, h.sibling),
                      (h = i(h, v.children || [])),
                      (h.return = m),
                      (m = h);
                    break e;
                  } else {
                    n(m, h);
                    break;
                  }
                else t(m, h);
                h = h.sibling;
              }
              (h = Bu(v, m.mode, w)), (h.return = m), (m = h);
            }
            return s(m);
          case Dn:
            return (_ = v._init), S(m, h, _(v._payload), w);
        }
        if (Do(v)) return g(m, h, v, w);
        if (co(v)) return y(m, h, v, w);
        Js(m, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          h !== null && h.tag === 6
            ? (n(m, h.sibling), (h = i(h, v)), (h.return = m), (m = h))
            : (n(m, h), (h = $u(v, m.mode, w)), (h.return = m), (m = h)),
          s(m))
        : n(m, h);
    }
    return S;
  }
  var Ai = Vg(!0),
    Hg = Vg(!1),
    Rs = {},
    en = lr(Rs),
    us = lr(Rs),
    cs = lr(Rs);
  function Er(e) {
    if (e === Rs) throw Error(B(174));
    return e;
  }
  function Md(e, t) {
    switch ((ue(cs, t), ue(us, e), ue(en, Rs), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ec(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ec(t, e));
    }
    pe(en), ue(en, t);
  }
  function Fi() {
    pe(en), pe(us), pe(cs);
  }
  function Ug(e) {
    Er(cs.current);
    var t = Er(en.current),
      n = Ec(t, e.type);
    t !== n && (ue(us, e), ue(en, n));
  }
  function Id(e) {
    us.current === e && (pe(en), pe(us));
  }
  var ge = lr(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Mu = [];
  function Ld() {
    for (var e = 0; e < Mu.length; e++)
      Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var ba = _n.ReactCurrentDispatcher,
    Iu = _n.ReactCurrentBatchConfig,
    Mr = 0,
    we = null,
    Ce = null,
    Pe = null,
    rl = !1,
    Vo = !1,
    fs = 0,
    uE = 0;
  function Be() {
    throw Error(B(321));
  }
  function Ad(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function Fd(e, t, n, r, i, o) {
    if (
      ((Mr = o),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ba.current = e === null || e.memoizedState === null ? pE : hE),
      (e = n(r, i)),
      Vo)
    ) {
      o = 0;
      do {
        if (((Vo = !1), (fs = 0), 25 <= o)) throw Error(B(301));
        (o += 1),
          (Pe = Ce = null),
          (t.updateQueue = null),
          (ba.current = mE),
          (e = n(r, i));
      } while (Vo);
    }
    if (
      ((ba.current = il),
      (t = Ce !== null && Ce.next !== null),
      (Mr = 0),
      (Pe = Ce = we = null),
      (rl = !1),
      t)
    )
      throw Error(B(300));
    return e;
  }
  function zd() {
    var e = fs !== 0;
    return (fs = 0), e;
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Pe === null ? (we.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
  }
  function Nt() {
    if (Ce === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Pe === null ? we.memoizedState : Pe.next;
    if (t !== null) (Pe = t), (Ce = e);
    else {
      if (e === null) throw Error(B(310));
      (Ce = e),
        (e = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Pe === null ? (we.memoizedState = Pe = e) : (Pe = Pe.next = e);
    }
    return Pe;
  }
  function ds(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Lu(e) {
    var t = Nt(),
      n = t.queue;
    if (n === null) throw Error(B(311));
    n.lastRenderedReducer = e;
    var r = Ce,
      i = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        (i.next = o.next), (o.next = s);
      }
      (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
      (o = i.next), (r = r.baseState);
      var a = (s = null),
        l = null,
        u = o;
      do {
        var c = u.lane;
        if ((Mr & c) === c)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
            (we.lanes |= c),
            (Ir |= c);
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? (s = r) : (l.next = a),
        Vt(r, t.memoizedState) || (et = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (we.lanes |= o), (Ir |= o), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Au(e) {
    var t = Nt(),
      n = t.queue;
    if (n === null) throw Error(B(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = (i = i.next);
      do (o = e(o, s.action)), (s = s.next);
      while (s !== i);
      Vt(o, t.memoizedState) || (et = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Qg() {}
  function qg(e, t) {
    var n = we,
      r = Nt(),
      i = t(),
      o = !Vt(r.memoizedState, i);
    if (
      (o && ((r.memoizedState = i), (et = !0)),
      (r = r.queue),
      $d(Xg.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ps(9, Yg.bind(null, n, r, i, t), void 0, null),
        je === null)
      )
        throw Error(B(349));
      Mr & 30 || Wg(n, t, i);
    }
    return i;
  }
  function Wg(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Yg(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Gg(t) && Kg(e);
  }
  function Xg(e, t, n) {
    return n(function () {
      Gg(t) && Kg(e);
    });
  }
  function Gg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Kg(e) {
    var t = wn(e, 1);
    t !== null && $t(t, e, 1, -1);
  }
  function $h(e) {
    var t = Gt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ds,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = dE.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function ps(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Zg() {
    return Nt().memoizedState;
  }
  function Ea(e, t, n, r) {
    var i = Gt();
    (we.flags |= e),
      (i.memoizedState = ps(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ml(e, t, n, r) {
    var i = Nt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ce !== null) {
      var s = Ce.memoizedState;
      if (((o = s.destroy), r !== null && Ad(r, s.deps))) {
        i.memoizedState = ps(t, n, o, r);
        return;
      }
    }
    (we.flags |= e), (i.memoizedState = ps(1 | t, n, o, r));
  }
  function Bh(e, t) {
    return Ea(8390656, 8, e, t);
  }
  function $d(e, t) {
    return Ml(2048, 8, e, t);
  }
  function Jg(e, t) {
    return Ml(4, 2, e, t);
  }
  function e0(e, t) {
    return Ml(4, 4, e, t);
  }
  function t0(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function n0(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ml(4, 4, t0.bind(null, t, e), n)
    );
  }
  function Bd() {}
  function r0(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ad(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function i0(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ad(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function o0(e, t, n) {
    return Mr & 21
      ? (Vt(n, t) ||
          ((n = lg()), (we.lanes |= n), (Ir |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
  }
  function cE(e, t) {
    var n = se;
    (se = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Iu.transition;
    Iu.transition = {};
    try {
      e(!1), t();
    } finally {
      (se = n), (Iu.transition = r);
    }
  }
  function s0() {
    return Nt().memoizedState;
  }
  function fE(e, t, n) {
    var r = Gn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      a0(e))
    )
      l0(t, n);
    else if (((n = Fg(e, t, n, r)), n !== null)) {
      var i = We();
      $t(n, e, r, i), u0(n, t, r);
    }
  }
  function dE(e, t, n) {
    var r = Gn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (a0(e)) l0(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var s = t.lastRenderedState,
            a = o(s, n);
          if (((i.hasEagerState = !0), (i.eagerState = a), Vt(a, s))) {
            var l = t.interleaved;
            l === null
              ? ((i.next = i), Rd(t))
              : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Fg(e, t, i, r)),
        n !== null && ((i = We()), $t(n, e, r, i), u0(n, t, r));
    }
  }
  function a0(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function l0(e, t) {
    Vo = rl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function u0(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gd(e, n);
    }
  }
  var il = {
      readContext: Ct,
      useCallback: Be,
      useContext: Be,
      useEffect: Be,
      useImperativeHandle: Be,
      useInsertionEffect: Be,
      useLayoutEffect: Be,
      useMemo: Be,
      useReducer: Be,
      useRef: Be,
      useState: Be,
      useDebugValue: Be,
      useDeferredValue: Be,
      useTransition: Be,
      useMutableSource: Be,
      useSyncExternalStore: Be,
      useId: Be,
      unstable_isNewReconciler: !1,
    },
    pE = {
      readContext: Ct,
      useCallback: function (e, t) {
        return (Gt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ct,
      useEffect: Bh,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ea(4194308, 4, t0.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ea(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ea(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Gt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Gt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = fE.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Gt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: $h,
      useDebugValue: Bd,
      useDeferredValue: function (e) {
        return (Gt().memoizedState = e);
      },
      useTransition: function () {
        var e = $h(!1),
          t = e[0];
        return (e = cE.bind(null, e[1])), (Gt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          i = Gt();
        if (me) {
          if (n === void 0) throw Error(B(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(B(349));
          Mr & 30 || Wg(r, t, n);
        }
        i.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (i.queue = o),
          Bh(Xg.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          ps(9, Yg.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Gt(),
          t = je.identifierPrefix;
        if (me) {
          var n = hn,
            r = pn;
          (n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fs++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = uE++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    hE = {
      readContext: Ct,
      useCallback: r0,
      useContext: Ct,
      useEffect: $d,
      useImperativeHandle: n0,
      useInsertionEffect: Jg,
      useLayoutEffect: e0,
      useMemo: i0,
      useReducer: Lu,
      useRef: Zg,
      useState: function () {
        return Lu(ds);
      },
      useDebugValue: Bd,
      useDeferredValue: function (e) {
        var t = Nt();
        return o0(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = Lu(ds)[0],
          t = Nt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qg,
      useSyncExternalStore: qg,
      useId: s0,
      unstable_isNewReconciler: !1,
    },
    mE = {
      readContext: Ct,
      useCallback: r0,
      useContext: Ct,
      useEffect: $d,
      useImperativeHandle: n0,
      useInsertionEffect: Jg,
      useLayoutEffect: e0,
      useMemo: i0,
      useReducer: Au,
      useRef: Zg,
      useState: function () {
        return Au(ds);
      },
      useDebugValue: Bd,
      useDeferredValue: function (e) {
        var t = Nt();
        return Ce === null ? (t.memoizedState = e) : o0(t, Ce.memoizedState, e);
      },
      useTransition: function () {
        var e = Au(ds)[0],
          t = Nt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qg,
      useSyncExternalStore: qg,
      useId: s0,
      unstable_isNewReconciler: !1,
    };
  function zi(e, t) {
    try {
      var n = "",
        r = t;
      do (n += HS(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Fu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function qc(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var vE = typeof WeakMap == "function" ? WeakMap : Map;
  function c0(e, t, n) {
    (n = vn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        sl || ((sl = !0), (nf = r)), qc(e, t);
      }),
      n
    );
  }
  function f0(e, t, n) {
    (n = vn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          qc(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          qc(e, t),
            typeof r != "function" &&
              (Xn === null ? (Xn = new Set([this])) : Xn.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Vh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new vE();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = DE.bind(null, e, t, n)), t.then(e, e));
  }
  function Hh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Uh(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = vn(-1, 1)), (t.tag = 2), Yn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var yE = _n.ReactCurrentOwner,
    et = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? Hg(t, null, n, r) : Ai(t, e.child, n, r);
  }
  function Qh(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
      Ei(t, i),
      (r = Fd(e, t, n, r, o, i)),
      (n = zd()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          xn(e, t, i))
        : (me && n && Cd(t), (t.flags |= 1), qe(e, t, r, i), t.child)
    );
  }
  function qh(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Xd(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), d0(e, t, o, r, i))
        : ((e = Na(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var s = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : os), n(s, r) && e.ref === t.ref)
      )
        return xn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Kn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function d0(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (os(o, r) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
          e.flags & 131072 && (et = !0);
        else return (t.lanes = e.lanes), xn(e, t, i);
    }
    return Wc(e, t, n, r, i);
  }
  function p0(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ue(hi, ft),
          (ft |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ue(hi, ft),
            (ft |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ue(hi, ft),
          (ft |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ue(hi, ft),
        (ft |= r);
    return qe(e, t, i, n), t.child;
  }
  function h0(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Wc(e, t, n, r, i) {
    var o = rt(n) ? Rr : Ue.current;
    return (
      (o = Ii(t, o)),
      Ei(t, i),
      (n = Fd(e, t, n, r, o, i)),
      (r = zd()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          xn(e, t, i))
        : (me && r && Cd(t), (t.flags |= 1), qe(e, t, n, i), t.child)
    );
  }
  function Wh(e, t, n, r, i) {
    if (rt(n)) {
      var o = !0;
      Ga(t);
    } else o = !1;
    if ((Ei(t, i), t.stateNode === null))
      _a(e, t), Bg(t, n, r), Qc(t, n, r, i), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        a = t.memoizedProps;
      s.props = a;
      var l = s.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = Ct(u))
        : ((u = rt(n) ? Rr : Ue.current), (u = Ii(t, u)));
      var c = n.getDerivedStateFromProps,
        f =
          typeof c == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && Fh(t, s, r, u)),
        (Pn = !1);
      var d = t.memoizedState;
      (s.state = d),
        tl(t, r, s, i),
        (l = t.memoizedState),
        a !== r || d !== l || nt.current || Pn
          ? (typeof c == "function" && (Uc(t, n, c, r), (l = t.memoizedState)),
            (a = Pn || Ah(t, n, a, r, d, l, u))
              ? (f ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (s.props = r),
            (s.state = l),
            (s.context = u),
            (r = a))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        zg(e, t),
        (a = t.memoizedProps),
        (u = t.type === t.elementType ? a : Mt(t.type, a)),
        (s.props = u),
        (f = t.pendingProps),
        (d = s.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Ct(l))
          : ((l = rt(n) ? Rr : Ue.current), (l = Ii(t, l)));
      var p = n.getDerivedStateFromProps;
      (c =
        typeof p == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== f || d !== l) && Fh(t, s, r, l)),
        (Pn = !1),
        (d = t.memoizedState),
        (s.state = d),
        tl(t, r, s, i);
      var g = t.memoizedState;
      a !== f || d !== g || nt.current || Pn
        ? (typeof p == "function" && (Uc(t, n, p, r), (g = t.memoizedState)),
          (u = Pn || Ah(t, n, u, r, d, g, l) || !1)
            ? (c ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, g, l),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, g, l)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = g)),
          (s.props = r),
          (s.state = g),
          (s.context = l),
          (r = u))
        : (typeof s.componentDidUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Yc(e, t, n, r, o, i);
  }
  function Yc(e, t, n, r, i, o) {
    h0(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Rh(t, n, !1), xn(e, t, o);
    (r = t.stateNode), (yE.current = t);
    var a =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = Ai(t, e.child, null, o)), (t.child = Ai(t, null, a, o)))
        : qe(e, t, a, o),
      (t.memoizedState = r.state),
      i && Rh(t, n, !0),
      t.child
    );
  }
  function m0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ph(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ph(e, t.context, !1),
      Md(e, t.containerInfo);
  }
  function Yh(e, t, n, r, i) {
    return Li(), Od(i), (t.flags |= 256), qe(e, t, n, r), t.child;
  }
  var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function v0(e, t, n) {
    var r = t.pendingProps,
      i = ge.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      a;
    if (
      ((a = s) ||
        (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      ue(ge, i & 1),
      e === null)
    )
      return (
        Vc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = s))
                  : (o = Al(s, r, 0, null)),
                (e = Nr(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Gc(n)),
                (t.memoizedState = Xc),
                e)
              : Vd(t, s))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return gE(e, t, s, r, a, i, n);
    if (o) {
      (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = Kn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (o = Kn(a, o)) : ((o = Nr(o, s, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? Gc(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Xc),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Kn(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Vd(e, t) {
    return (
      (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ea(e, t, n, r) {
    return (
      r !== null && Od(r),
      Ai(t, e.child, null, n),
      (e = Vd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function gE(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Fu(Error(B(422)))), ea(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Al({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Nr(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Ai(t, e.child, null, s),
          (t.child.memoizedState = Gc(s)),
          (t.memoizedState = Xc),
          o);
    if (!(t.mode & 1)) return ea(e, t, s, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (o = Error(B(419))), (r = Fu(o, r, void 0)), ea(e, t, s, r)
      );
    }
    if (((a = (s & e.childLanes) !== 0), et || a)) {
      if (((r = je), r !== null)) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | s) ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), wn(e, i), $t(r, e, i, -1));
      }
      return Yd(), (r = Fu(Error(B(421)))), ea(e, t, s, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = PE.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (dt = Wn(i.nextSibling)),
        (pt = t),
        (me = !0),
        (Lt = null),
        e !== null &&
          ((xt[St++] = pn),
          (xt[St++] = hn),
          (xt[St++] = jr),
          (pn = e.id),
          (hn = e.overflow),
          (jr = t)),
        (t = Vd(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Hc(e.return, t, n);
  }
  function zu(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = i));
  }
  function y0(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if ((qe(e, t, r.children, n), (r = ge.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xh(e, n, t);
          else if (e.tag === 19) Xh(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && nl(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            zu(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && nl(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          zu(t, !0, n, null, o);
          break;
        case "together":
          zu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function _a(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function xn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ir |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(B(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Kn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function wE(e, t, n) {
    switch (t.tag) {
      case 3:
        m0(t), Li();
        break;
      case 5:
        Ug(t);
        break;
      case 1:
        rt(t.type) && Ga(t);
        break;
      case 4:
        Md(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        ue(Ja, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? v0(e, t, n)
            : (ue(ge, ge.current & 1),
              (e = xn(e, t, n)),
              e !== null ? e.sibling : null);
        ue(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return y0(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ue(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), p0(e, t, n);
    }
    return xn(e, t, n);
  }
  var g0, Kc, w0, x0;
  g0 = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  Kc = function () {};
  w0 = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      (e = t.stateNode), Er(en.current);
      var o = null;
      switch (n) {
        case "input":
          (i = wc(e, i)), (r = wc(e, r)), (o = []);
          break;
        case "select":
          (i = xe({}, i, { value: void 0 })),
            (r = xe({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (i = bc(e, i)), (r = bc(e, r)), (o = []);
          break;
        default:
          typeof i.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = Ya);
      }
      _c(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (Zo.hasOwnProperty(u)
                ? o || (o = [])
                : (o = o || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((a = i != null ? i[u] : void 0),
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        )
          if (u === "style")
            if (a) {
              for (s in a)
                !a.hasOwnProperty(s) ||
                  (l && l.hasOwnProperty(s)) ||
                  (n || (n = {}), (n[s] = ""));
              for (s in l)
                l.hasOwnProperty(s) &&
                  a[s] !== l[s] &&
                  (n || (n = {}), (n[s] = l[s]));
            } else n || (o || (o = []), o.push(u, n)), (n = l);
          else
            u === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (o = o || []).push(u, l))
              : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Zo.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && fe("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  x0 = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function yo(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function xE(e, t, n) {
    var r = t.pendingProps;
    switch ((Nd(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return rt(t.type) && Xa(), Ve(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Fi(),
          pe(nt),
          pe(Ue),
          Ld(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Lt !== null && (sf(Lt), (Lt = null)))),
          Kc(e, t),
          Ve(t),
          null
        );
      case 5:
        Id(t);
        var i = Er(cs.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          w0(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(B(166));
            return Ve(t), null;
          }
          if (((e = Er(en.current)), Zs(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Zt] = t), (r[ls] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ro.length; i++) fe(Ro[i], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                ih(r, o), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                sh(r, o), fe("invalid", r);
            }
            _c(n, o), (i = null);
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (o.suppressHydrationWarning !== !0 &&
                        Ks(r.textContent, a, e),
                      (i = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (o.suppressHydrationWarning !== !0 &&
                        Ks(r.textContent, a, e),
                      (i = ["children", "" + a]))
                  : Zo.hasOwnProperty(s) &&
                    a != null &&
                    s === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Hs(r), oh(r, o, !0);
                break;
              case "textarea":
                Hs(r), ah(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ya);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Wy(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Zt] = t),
              (e[ls] = r),
              g0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = kc(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Ro.length; i++) fe(Ro[i], e);
                  i = r;
                  break;
                case "source":
                  fe("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (i = r);
                  break;
                case "details":
                  fe("toggle", e), (i = r);
                  break;
                case "input":
                  ih(e, r), (i = wc(e, r)), fe("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = xe({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  sh(e, r), (i = bc(e, r)), fe("invalid", e);
                  break;
                default:
                  i = r;
              }
              _c(n, i), (a = i);
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style"
                    ? Gy(e, l)
                    : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Yy(e, l))
                    : o === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Jo(e, l)
                      : typeof l == "number" && Jo(e, "" + l)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (Zo.hasOwnProperty(o)
                        ? l != null && o === "onScroll" && fe("scroll", e)
                        : l != null && dd(e, o, l, s));
                }
              switch (n) {
                case "input":
                  Hs(e), oh(e, r, !1);
                  break;
                case "textarea":
                  Hs(e), ah(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + er(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? wi(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        wi(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ya);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) x0(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
          if (((n = Er(cs.current)), Er(en.current), Zs(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Zt] = t),
              (o = r.nodeValue !== n) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ks(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ks(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Zt] = t),
              (t.stateNode = r);
        }
        return Ve(t), null;
      case 13:
        if (
          (pe(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (me && dt !== null && t.mode & 1 && !(t.flags & 128))
            Ag(), Li(), (t.flags |= 98560), (o = !1);
          else if (((o = Zs(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(B(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(B(317));
              o[Zt] = t;
            } else
              Li(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ve(t), (o = !1);
          } else Lt !== null && (sf(Lt), (Lt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ge.current & 1 ? Oe === 0 && (Oe = 3) : Yd())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return (
          Fi(),
          Kc(e, t),
          e === null && ss(t.stateNode.containerInfo),
          Ve(t),
          null
        );
      case 10:
        return Pd(t.type._context), Ve(t), null;
      case 17:
        return rt(t.type) && Xa(), Ve(t), null;
      case 19:
        if ((pe(ge), (o = t.memoizedState), o === null)) return Ve(t), null;
        if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (r) yo(o, !1);
          else {
            if (Oe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = nl(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      yo(o, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (s = o.alternate),
                      s === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ue(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              _e() > $i &&
              ((t.flags |= 128), (r = !0), yo(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yo(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !me)
              )
                return Ve(t), null;
            } else
              2 * _e() - o.renderingStartTime > $i &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), yo(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = o.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = _e()),
            (t.sibling = null),
            (n = ge.current),
            ue(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Wd(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? ft & 1073741824 &&
              (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(B(156, t.tag));
  }
  function SE(e, t) {
    switch ((Nd(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Xa(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Fi(),
          pe(nt),
          pe(Ue),
          Ld(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Id(t), null;
      case 13:
        if (
          (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(B(340));
          Li();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return pe(ge), null;
      case 4:
        return Fi(), null;
      case 10:
        return Pd(t.type._context), null;
      case 22:
      case 23:
        return Wd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ta = !1,
    He = !1,
    bE = typeof WeakSet == "function" ? WeakSet : Set,
    Q = null;
  function pi(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          be(e, t, r);
        }
      else n.current = null;
  }
  function Zc(e, t, n) {
    try {
      n();
    } catch (r) {
      be(e, t, r);
    }
  }
  var Gh = !1;
  function EE(e, t) {
    if (((Ic = Qa), (e = _g()), kd(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              a = -1,
              l = -1,
              u = 0,
              c = 0,
              f = e,
              d = null;
            t: for (;;) {
              for (
                var p;
                f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                  f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                  f.nodeType === 3 && (s += f.nodeValue.length),
                  (p = f.firstChild) !== null;

              )
                (d = f), (f = p);
              for (;;) {
                if (f === e) break t;
                if (
                  (d === n && ++u === i && (a = s),
                  d === o && ++c === r && (l = s),
                  (p = f.nextSibling) !== null)
                )
                  break;
                (f = d), (d = f.parentNode);
              }
              f = p;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Lc = { focusedElem: e, selectionRange: n }, Qa = !1, Q = t;
      Q !== null;

    )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Q = e);
      else
        for (; Q !== null; ) {
          t = Q;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var y = g.memoizedProps,
                      S = g.memoizedState,
                      m = t.stateNode,
                      h = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? y : Mt(t.type, y),
                        S
                      );
                    m.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(B(163));
              }
          } catch (w) {
            be(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Q = e);
            break;
          }
          Q = t.return;
        }
    return (g = Gh), (Gh = !1), g;
  }
  function Ho(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && Zc(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Il(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Jc(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function S0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), S0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Zt],
          delete t[ls],
          delete t[zc],
          delete t[oE],
          delete t[sE])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function b0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Kh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || b0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ya));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ef(e, t, n), e = e.sibling; e !== null; )
        ef(e, t, n), (e = e.sibling);
  }
  function tf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (tf(e, t, n), e = e.sibling; e !== null; )
        tf(e, t, n), (e = e.sibling);
  }
  var Le = null,
    It = !1;
  function Nn(e, t, n) {
    for (n = n.child; n !== null; ) E0(e, t, n), (n = n.sibling);
  }
  function E0(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(Nl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        He || pi(n, t);
      case 6:
        var r = Le,
          i = It;
        (Le = null),
          Nn(e, t, n),
          (Le = r),
          (It = i),
          Le !== null &&
            (It
              ? ((e = Le),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Le.removeChild(n.stateNode));
        break;
      case 18:
        Le !== null &&
          (It
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ru(e.parentNode, n)
                : e.nodeType === 1 && Ru(e, n),
              rs(e))
            : Ru(Le, n.stateNode));
        break;
      case 4:
        (r = Le),
          (i = It),
          (Le = n.stateNode.containerInfo),
          (It = !0),
          Nn(e, t, n),
          (Le = r),
          (It = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !He &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var o = i,
              s = o.destroy;
            (o = o.tag),
              s !== void 0 && (o & 2 || o & 4) && Zc(n, t, s),
              (i = i.next);
          } while (i !== r);
        }
        Nn(e, t, n);
        break;
      case 1:
        if (
          !He &&
          (pi(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            be(n, t, a);
          }
        Nn(e, t, n);
        break;
      case 21:
        Nn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((He = (r = He) || n.memoizedState !== null), Nn(e, t, n), (He = r))
          : Nn(e, t, n);
        break;
      default:
        Nn(e, t, n);
    }
  }
  function Zh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new bE()),
        t.forEach(function (r) {
          var i = RE.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e,
            s = t,
            a = s;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (Le = a.stateNode), (It = !1);
                break e;
              case 3:
                (Le = a.stateNode.containerInfo), (It = !0);
                break e;
              case 4:
                (Le = a.stateNode.containerInfo), (It = !0);
                break e;
            }
            a = a.return;
          }
          if (Le === null) throw Error(B(160));
          E0(o, s, i), (Le = null), (It = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (u) {
          be(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) _0(t, e), (t = t.sibling);
  }
  function _0(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Rt(t, e), Xt(e), r & 4)) {
          try {
            Ho(3, e, e.return), Il(3, e);
          } catch (y) {
            be(e, e.return, y);
          }
          try {
            Ho(5, e, e.return);
          } catch (y) {
            be(e, e.return, y);
          }
        }
        break;
      case 1:
        Rt(t, e), Xt(e), r & 512 && n !== null && pi(n, n.return);
        break;
      case 5:
        if (
          (Rt(t, e),
          Xt(e),
          r & 512 && n !== null && pi(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Jo(i, "");
          } catch (y) {
            be(e, e.return, y);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            s = n !== null ? n.memoizedProps : o,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              a === "input" && o.type === "radio" && o.name != null && Qy(i, o),
                kc(a, s);
              var u = kc(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s],
                  f = l[s + 1];
                c === "style"
                  ? Gy(i, f)
                  : c === "dangerouslySetInnerHTML"
                  ? Yy(i, f)
                  : c === "children"
                  ? Jo(i, f)
                  : dd(i, c, f, u);
              }
              switch (a) {
                case "input":
                  xc(i, o);
                  break;
                case "textarea":
                  qy(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var p = o.value;
                  p != null
                    ? wi(i, !!o.multiple, p, !1)
                    : d !== !!o.multiple &&
                      (o.defaultValue != null
                        ? wi(i, !!o.multiple, o.defaultValue, !0)
                        : wi(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[ls] = o;
            } catch (y) {
              be(e, e.return, y);
            }
        }
        break;
      case 6:
        if ((Rt(t, e), Xt(e), r & 4)) {
          if (e.stateNode === null) throw Error(B(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (y) {
            be(e, e.return, y);
          }
        }
        break;
      case 3:
        if (
          (Rt(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            rs(t.containerInfo);
          } catch (y) {
            be(e, e.return, y);
          }
        break;
      case 4:
        Rt(t, e), Xt(e);
        break;
      case 13:
        Rt(t, e),
          Xt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Qd = _e())),
          r & 4 && Zh(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((He = (u = He) || c), Rt(t, e), (He = u)) : Rt(t, e),
          Xt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
          )
            for (Q = e, c = e.child; c !== null; ) {
              for (f = Q = c; Q !== null; ) {
                switch (((d = Q), (p = d.child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ho(4, d, d.return);
                    break;
                  case 1:
                    pi(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = d), (n = d.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (y) {
                        be(r, n, y);
                      }
                    }
                    break;
                  case 5:
                    pi(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      em(f);
                      continue;
                    }
                }
                p !== null ? ((p.return = d), (Q = p)) : em(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  (i = f.stateNode),
                    u
                      ? ((o = i.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((a = f.stateNode),
                        (l = f.memoizedProps.style),
                        (s =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = Xy("display", s)));
                } catch (y) {
                  be(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (y) {
                  be(e, e.return, y);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        Rt(t, e), Xt(e), r & 4 && Zh(e);
        break;
      case 21:
        break;
      default:
        Rt(t, e), Xt(e);
    }
  }
  function Xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (b0(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(B(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Jo(i, ""), (r.flags &= -33));
            var o = Kh(e);
            tf(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              a = Kh(e);
            ef(e, a, s);
            break;
          default:
            throw Error(B(161));
        }
      } catch (l) {
        be(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _E(e, t, n) {
    (Q = e), k0(e);
  }
  function k0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var i = Q,
        o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || ta;
        if (!s) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || He;
          a = ta;
          var u = He;
          if (((ta = s), (He = l) && !u))
            for (Q = i; Q !== null; )
              (s = Q),
                (l = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? tm(i)
                  : l !== null
                  ? ((l.return = s), (Q = l))
                  : tm(i);
          for (; o !== null; ) (Q = o), k0(o), (o = o.sibling);
          (Q = i), (ta = a), (He = u);
        }
        Jh(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (Q = o)) : Jh(e);
    }
  }
  function Jh(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || Il(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !He)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Lh(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Lh(t, s, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && rs(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(B(163));
            }
          He || (t.flags & 512 && Jc(t));
        } catch (d) {
          be(t, t.return, d);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function em(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function tm(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Il(4, t);
            } catch (l) {
              be(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                be(t, i, l);
              }
            }
            var o = t.return;
            try {
              Jc(t);
            } catch (l) {
              be(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Jc(t);
            } catch (l) {
              be(t, s, l);
            }
        }
      } catch (l) {
        be(t, t.return, l);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (Q = a);
        break;
      }
      Q = t.return;
    }
  }
  var kE = Math.ceil,
    ol = _n.ReactCurrentDispatcher,
    Hd = _n.ReactCurrentOwner,
    kt = _n.ReactCurrentBatchConfig,
    re = 0,
    je = null,
    ke = null,
    Ae = 0,
    ft = 0,
    hi = lr(0),
    Oe = 0,
    hs = null,
    Ir = 0,
    Ll = 0,
    Ud = 0,
    Uo = null,
    Ze = null,
    Qd = 0,
    $i = 1 / 0,
    fn = null,
    sl = !1,
    nf = null,
    Xn = null,
    na = !1,
    Vn = null,
    al = 0,
    Qo = 0,
    rf = null,
    ka = -1,
    Ca = 0;
  function We() {
    return re & 6 ? _e() : ka !== -1 ? ka : (ka = _e());
  }
  function Gn(e) {
    return e.mode & 1
      ? re & 2 && Ae !== 0
        ? Ae & -Ae
        : lE.transition !== null
        ? (Ca === 0 && (Ca = lg()), Ca)
        : ((e = se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mg(e.type))),
          e)
      : 1;
  }
  function $t(e, t, n, r) {
    if (50 < Qo) throw ((Qo = 0), (rf = null), Error(B(185)));
    Ts(e, n, r),
      (!(re & 2) || e !== je) &&
        (e === je && (!(re & 2) && (Ll |= n), Oe === 4 && zn(e, Ae)),
        it(e, r),
        n === 1 &&
          re === 0 &&
          !(t.mode & 1) &&
          (($i = _e() + 500), Rl && ur()));
  }
  function it(e, t) {
    var n = e.callbackNode;
    lb(e, t);
    var r = Ua(e, e === je ? Ae : 0);
    if (r === 0)
      n !== null && ch(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ch(n), t === 1))
        e.tag === 0 ? aE(nm.bind(null, e)) : Mg(nm.bind(null, e)),
          rE(function () {
            !(re & 6) && ur();
          }),
          (n = null);
      else {
        switch (ug(r)) {
          case 1:
            n = yd;
            break;
          case 4:
            n = sg;
            break;
          case 16:
            n = Ha;
            break;
          case 536870912:
            n = ag;
            break;
          default:
            n = Ha;
        }
        n = j0(n, C0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function C0(e, t) {
    if (((ka = -1), (Ca = 0), re & 6)) throw Error(B(327));
    var n = e.callbackNode;
    if (_i() && e.callbackNode !== n) return null;
    var r = Ua(e, e === je ? Ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
    else {
      t = r;
      var i = re;
      re |= 2;
      var o = O0();
      (je !== e || Ae !== t) && ((fn = null), ($i = _e() + 500), Cr(e, t));
      do
        try {
          OE();
          break;
        } catch (a) {
          N0(e, a);
        }
      while (1);
      Dd(),
        (ol.current = o),
        (re = i),
        ke !== null ? (t = 0) : ((je = null), (Ae = 0), (t = Oe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Dc(e)), i !== 0 && ((r = i), (t = of(e, i)))),
        t === 1)
      )
        throw ((n = hs), Cr(e, 0), zn(e, r), it(e, _e()), n);
      if (t === 6) zn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !CE(i) &&
            ((t = ll(e, r)),
            t === 2 && ((o = Dc(e)), o !== 0 && ((r = o), (t = of(e, o)))),
            t === 1))
        )
          throw ((n = hs), Cr(e, 0), zn(e, r), it(e, _e()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(B(345));
          case 2:
            yr(e, Ze, fn);
            break;
          case 3:
            if (
              (zn(e, r),
              (r & 130023424) === r && ((t = Qd + 500 - _e()), 10 < t))
            ) {
              if (Ua(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                We(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Fc(yr.bind(null, e, Ze, fn), t);
              break;
            }
            yr(e, Ze, fn);
            break;
          case 4:
            if ((zn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - zt(r);
              (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
            }
            if (
              ((r = i),
              (r = _e() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * kE(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Fc(yr.bind(null, e, Ze, fn), r);
              break;
            }
            yr(e, Ze, fn);
            break;
          case 5:
            yr(e, Ze, fn);
            break;
          default:
            throw Error(B(329));
        }
      }
    }
    return it(e, _e()), e.callbackNode === n ? C0.bind(null, e) : null;
  }
  function of(e, t) {
    var n = Uo;
    return (
      e.current.memoizedState.isDehydrated && (Cr(e, t).flags |= 256),
      (e = ll(e, t)),
      e !== 2 && ((t = Ze), (Ze = n), t !== null && sf(t)),
      e
    );
  }
  function sf(e) {
    Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
  }
  function CE(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!Vt(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function zn(e, t) {
    for (
      t &= ~Ud,
        t &= ~Ll,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - zt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function nm(e) {
    if (re & 6) throw Error(B(327));
    _i();
    var t = Ua(e, 0);
    if (!(t & 1)) return it(e, _e()), null;
    var n = ll(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Dc(e);
      r !== 0 && ((t = r), (n = of(e, r)));
    }
    if (n === 1) throw ((n = hs), Cr(e, 0), zn(e, t), it(e, _e()), n);
    if (n === 6) throw Error(B(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      yr(e, Ze, fn),
      it(e, _e()),
      null
    );
  }
  function qd(e, t) {
    var n = re;
    re |= 1;
    try {
      return e(t);
    } finally {
      (re = n), re === 0 && (($i = _e() + 500), Rl && ur());
    }
  }
  function Lr(e) {
    Vn !== null && Vn.tag === 0 && !(re & 6) && _i();
    var t = re;
    re |= 1;
    var n = kt.transition,
      r = se;
    try {
      if (((kt.transition = null), (se = 1), e)) return e();
    } finally {
      (se = r), (kt.transition = n), (re = t), !(re & 6) && ur();
    }
  }
  function Wd() {
    (ft = hi.current), pe(hi);
  }
  function Cr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), nE(n)), ke !== null))
      for (n = ke.return; n !== null; ) {
        var r = n;
        switch ((Nd(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Xa();
            break;
          case 3:
            Fi(), pe(nt), pe(Ue), Ld();
            break;
          case 5:
            Id(r);
            break;
          case 4:
            Fi();
            break;
          case 13:
            pe(ge);
            break;
          case 19:
            pe(ge);
            break;
          case 10:
            Pd(r.type._context);
            break;
          case 22:
          case 23:
            Wd();
        }
        n = n.return;
      }
    if (
      ((je = e),
      (ke = e = Kn(e.current, null)),
      (Ae = ft = t),
      (Oe = 0),
      (hs = null),
      (Ud = Ll = Ir = 0),
      (Ze = Uo = null),
      br !== null)
    ) {
      for (t = 0; t < br.length; t++)
        if (((n = br[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            o = n.pending;
          if (o !== null) {
            var s = o.next;
            (o.next = i), (r.next = s);
          }
          n.pending = r;
        }
      br = null;
    }
    return e;
  }
  function N0(e, t) {
    do {
      var n = ke;
      try {
        if ((Dd(), (ba.current = il), rl)) {
          for (var r = we.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          rl = !1;
        }
        if (
          ((Mr = 0),
          (Pe = Ce = we = null),
          (Vo = !1),
          (fs = 0),
          (Hd.current = null),
          n === null || n.return === null)
        ) {
          (Oe = 1), (hs = t), (ke = null);
          break;
        }
        e: {
          var o = e,
            s = n.return,
            a = n,
            l = t;
          if (
            ((t = Ae),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              c = a,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = Hh(s);
            if (p !== null) {
              (p.flags &= -257),
                Uh(p, s, a, o, t),
                p.mode & 1 && Vh(o, u, t),
                (t = p),
                (l = u);
              var g = t.updateQueue;
              if (g === null) {
                var y = new Set();
                y.add(l), (t.updateQueue = y);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Vh(o, u, t), Yd();
                break e;
              }
              l = Error(B(426));
            }
          } else if (me && a.mode & 1) {
            var S = Hh(s);
            if (S !== null) {
              !(S.flags & 65536) && (S.flags |= 256),
                Uh(S, s, a, o, t),
                Od(zi(l, a));
              break e;
            }
          }
          (o = l = zi(l, a)),
            Oe !== 4 && (Oe = 2),
            Uo === null ? (Uo = [o]) : Uo.push(o),
            (o = s);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = c0(o, l, t);
                Ih(o, m);
                break e;
              case 1:
                a = l;
                var h = o.type,
                  v = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (Xn === null || !Xn.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var w = f0(o, a, t);
                  Ih(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        D0(n);
      } catch (E) {
        (t = E), ke === n && n !== null && (ke = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function O0() {
    var e = ol.current;
    return (ol.current = il), e === null ? il : e;
  }
  function Yd() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      je === null || (!(Ir & 268435455) && !(Ll & 268435455)) || zn(je, Ae);
  }
  function ll(e, t) {
    var n = re;
    re |= 2;
    var r = O0();
    (je !== e || Ae !== t) && ((fn = null), Cr(e, t));
    do
      try {
        NE();
        break;
      } catch (i) {
        N0(e, i);
      }
    while (1);
    if ((Dd(), (re = n), (ol.current = r), ke !== null)) throw Error(B(261));
    return (je = null), (Ae = 0), Oe;
  }
  function NE() {
    for (; ke !== null; ) T0(ke);
  }
  function OE() {
    for (; ke !== null && !JS(); ) T0(ke);
  }
  function T0(e) {
    var t = R0(e.alternate, e, ft);
    (e.memoizedProps = e.pendingProps),
      t === null ? D0(e) : (ke = t),
      (Hd.current = null);
  }
  function D0(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = SE(n, t)), n !== null)) {
          (n.flags &= 32767), (ke = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Oe = 6), (ke = null);
          return;
        }
      } else if (((n = xE(n, t, ft)), n !== null)) {
        ke = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ke = t;
        return;
      }
      ke = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function yr(e, t, n) {
    var r = se,
      i = kt.transition;
    try {
      (kt.transition = null), (se = 1), TE(e, t, n, r);
    } finally {
      (kt.transition = i), (se = r);
    }
    return null;
  }
  function TE(e, t, n, r) {
    do _i();
    while (Vn !== null);
    if (re & 6) throw Error(B(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(B(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (ub(e, o),
      e === je && ((ke = je = null), (Ae = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        na ||
        ((na = !0),
        j0(Ha, function () {
          return _i(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = kt.transition), (kt.transition = null);
      var s = se;
      se = 1;
      var a = re;
      (re |= 4),
        (Hd.current = null),
        EE(e, n),
        _0(n, e),
        Xb(Lc),
        (Qa = !!Ic),
        (Lc = Ic = null),
        (e.current = n),
        _E(n),
        eb(),
        (re = a),
        (se = s),
        (kt.transition = o);
    } else e.current = n;
    if (
      (na && ((na = !1), (Vn = e), (al = i)),
      (o = e.pendingLanes),
      o === 0 && (Xn = null),
      rb(n.stateNode),
      it(e, _e()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (sl) throw ((sl = !1), (e = nf), (nf = null), e);
    return (
      al & 1 && e.tag !== 0 && _i(),
      (o = e.pendingLanes),
      o & 1 ? (e === rf ? Qo++ : ((Qo = 0), (rf = e))) : (Qo = 0),
      ur(),
      null
    );
  }
  function _i() {
    if (Vn !== null) {
      var e = ug(al),
        t = kt.transition,
        n = se;
      try {
        if (((kt.transition = null), (se = 16 > e ? 16 : e), Vn === null))
          var r = !1;
        else {
          if (((e = Vn), (Vn = null), (al = 0), re & 6)) throw Error(B(331));
          var i = re;
          for (re |= 4, Q = e.current; Q !== null; ) {
            var o = Q,
              s = o.child;
            if (Q.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (Q = u; Q !== null; ) {
                    var c = Q;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ho(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null) (f.return = c), (Q = f);
                    else
                      for (; Q !== null; ) {
                        c = Q;
                        var d = c.sibling,
                          p = c.return;
                        if ((S0(c), c === u)) {
                          Q = null;
                          break;
                        }
                        if (d !== null) {
                          (d.return = p), (Q = d);
                          break;
                        }
                        Q = p;
                      }
                  }
                }
                var g = o.alternate;
                if (g !== null) {
                  var y = g.child;
                  if (y !== null) {
                    g.child = null;
                    do {
                      var S = y.sibling;
                      (y.sibling = null), (y = S);
                    } while (y !== null);
                  }
                }
                Q = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (Q = s);
            else
              e: for (; Q !== null; ) {
                if (((o = Q), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  (m.return = o.return), (Q = m);
                  break e;
                }
                Q = o.return;
              }
          }
          var h = e.current;
          for (Q = h; Q !== null; ) {
            s = Q;
            var v = s.child;
            if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (Q = v);
            else
              e: for (s = h; Q !== null; ) {
                if (((a = Q), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Il(9, a);
                    }
                  } catch (E) {
                    be(a, a.return, E);
                  }
                if (a === s) {
                  Q = null;
                  break e;
                }
                var w = a.sibling;
                if (w !== null) {
                  (w.return = a.return), (Q = w);
                  break e;
                }
                Q = a.return;
              }
          }
          if (
            ((re = i),
            ur(),
            Jt && typeof Jt.onPostCommitFiberRoot == "function")
          )
            try {
              Jt.onPostCommitFiberRoot(Nl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (se = n), (kt.transition = t);
      }
    }
    return !1;
  }
  function rm(e, t, n) {
    (t = zi(n, t)),
      (t = c0(e, t, 1)),
      (e = Yn(e, t, 1)),
      (t = We()),
      e !== null && (Ts(e, 1, t), it(e, t));
  }
  function be(e, t, n) {
    if (e.tag === 3) rm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Xn === null || !Xn.has(r)))
          ) {
            (e = zi(n, e)),
              (e = f0(t, e, 1)),
              (t = Yn(t, e, 1)),
              (e = We()),
              t !== null && (Ts(t, 1, e), it(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function DE(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = We()),
      (e.pingedLanes |= e.suspendedLanes & n),
      je === e &&
        (Ae & n) === n &&
        (Oe === 4 || (Oe === 3 && (Ae & 130023424) === Ae && 500 > _e() - Qd)
          ? Cr(e, 0)
          : (Ud |= n)),
      it(e, t);
  }
  function P0(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = qs), (qs <<= 1), !(qs & 130023424) && (qs = 4194304))
        : (t = 1));
    var n = We();
    (e = wn(e, t)), e !== null && (Ts(e, t, n), it(e, n));
  }
  function PE(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), P0(e, n);
  }
  function RE(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(B(314));
    }
    r !== null && r.delete(t), P0(e, n);
  }
  var R0;
  R0 = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) et = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), wE(e, t, n);
        et = !!(e.flags & 131072);
      }
    else (et = !1), me && t.flags & 1048576 && Ig(t, Za, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        _a(e, t), (e = t.pendingProps);
        var i = Ii(t, Ue.current);
        Ei(t, n), (i = Fd(null, t, r, e, i, n));
        var o = zd();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(r) ? ((o = !0), Ga(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              jd(t),
              (i.updater = jl),
              (t.stateNode = i),
              (i._reactInternals = t),
              Qc(t, r, e, n),
              (t = Yc(null, t, r, !0, o, n)))
            : ((t.tag = 0), me && o && Cd(t), qe(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (_a(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = ME(r)),
            (e = Mt(r, e)),
            i)
          ) {
            case 0:
              t = Wc(null, t, r, e, n);
              break e;
            case 1:
              t = Wh(null, t, r, e, n);
              break e;
            case 11:
              t = Qh(null, t, r, e, n);
              break e;
            case 14:
              t = qh(null, t, r, Mt(r.type, e), n);
              break e;
          }
          throw Error(B(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Mt(r, i)),
          Wc(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Mt(r, i)),
          Wh(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((m0(t), e === null)) throw Error(B(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            zg(e, t),
            tl(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = zi(Error(B(423)), t)), (t = Yh(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = zi(Error(B(424)), t)), (t = Yh(e, t, r, n, i));
              break e;
            } else
              for (
                dt = Wn(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  me = !0,
                  Lt = null,
                  n = Hg(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Li(), r === i)) {
              t = xn(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ug(t),
          e === null && Vc(t),
          (r = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = i.children),
          Ac(r, i) ? (s = null) : o !== null && Ac(r, o) && (t.flags |= 32),
          h0(e, t),
          qe(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && Vc(t), null;
      case 13:
        return v0(e, t, n);
      case 4:
        return (
          Md(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ai(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Mt(r, i)),
          Qh(e, t, r, i, n)
        );
      case 7:
        return qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (s = i.value),
            ue(Ja, r._currentValue),
            (r._currentValue = s),
            o !== null)
          )
            if (Vt(o.value, s)) {
              if (o.children === i.children && !nt.current) {
                t = xn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  s = o.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (o.tag === 1) {
                        (l = vn(-1, n & -n)), (l.tag = 2);
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
                            (u.pending = l);
                        }
                      }
                      (o.lanes |= n),
                        (l = o.alternate),
                        l !== null && (l.lanes |= n),
                        Hc(o.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(B(341));
                  (s.lanes |= n),
                    (a = s.alternate),
                    a !== null && (a.lanes |= n),
                    Hc(s, n, t),
                    (s = o.sibling);
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((o = s.sibling), o !== null)) {
                      (o.return = s.return), (s = o);
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          qe(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Ei(t, n),
          (i = Ct(i)),
          (r = r(i)),
          (t.flags |= 1),
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = Mt(r, t.pendingProps)),
          (i = Mt(r.type, i)),
          qh(e, t, r, i, n)
        );
      case 15:
        return d0(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Mt(r, i)),
          _a(e, t),
          (t.tag = 1),
          rt(r) ? ((e = !0), Ga(t)) : (e = !1),
          Ei(t, n),
          Bg(t, r, i),
          Qc(t, r, i, n),
          Yc(null, t, r, !0, e, n)
        );
      case 19:
        return y0(e, t, n);
      case 22:
        return p0(e, t, n);
    }
    throw Error(B(156, t.tag));
  };
  function j0(e, t) {
    return og(e, t);
  }
  function jE(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Et(e, t, n, r) {
    return new jE(e, t, n, r);
  }
  function Xd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ME(e) {
    if (typeof e == "function") return Xd(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === hd)) return 11;
      if (e === md) return 14;
    }
    return 2;
  }
  function Kn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Na(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Xd(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case ii:
          return Nr(n.children, i, o, t);
        case pd:
          (s = 8), (i |= 8);
          break;
        case mc:
          return (
            (e = Et(12, n, t, i | 2)), (e.elementType = mc), (e.lanes = o), e
          );
        case vc:
          return (e = Et(13, n, t, i)), (e.elementType = vc), (e.lanes = o), e;
        case yc:
          return (e = Et(19, n, t, i)), (e.elementType = yc), (e.lanes = o), e;
        case Vy:
          return Al(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $y:
                s = 10;
                break e;
              case By:
                s = 9;
                break e;
              case hd:
                s = 11;
                break e;
              case md:
                s = 14;
                break e;
              case Dn:
                (s = 16), (r = null);
                break e;
            }
          throw Error(B(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Et(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Nr(e, t, n, r) {
    return (e = Et(7, e, r, t)), (e.lanes = n), e;
  }
  function Al(e, t, n, r) {
    return (
      (e = Et(22, e, r, t)),
      (e.elementType = Vy),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function $u(e, t, n) {
    return (e = Et(6, e, null, t)), (e.lanes = n), e;
  }
  function Bu(e, t, n) {
    return (
      (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function IE(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Su(0)),
      (this.expirationTimes = Su(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Su(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Gd(e, t, n, r, i, o, s, a, l) {
    return (
      (e = new IE(e, t, n, a, l)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = Et(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      jd(o),
      e
    );
  }
  function LE(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ri,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function M0(e) {
    if (!e) return tr;
    e = e._reactInternals;
    e: {
      if (Hr(e) !== e || e.tag !== 1) throw Error(B(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(B(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (rt(n)) return jg(e, n, t);
    }
    return t;
  }
  function I0(e, t, n, r, i, o, s, a, l) {
    return (
      (e = Gd(n, r, !0, e, i, o, s, a, l)),
      (e.context = M0(null)),
      (n = e.current),
      (r = We()),
      (i = Gn(n)),
      (o = vn(r, i)),
      (o.callback = t ?? null),
      Yn(n, o, i),
      (e.current.lanes = i),
      Ts(e, i, r),
      it(e, r),
      e
    );
  }
  function Fl(e, t, n, r) {
    var i = t.current,
      o = We(),
      s = Gn(i);
    return (
      (n = M0(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = vn(o, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yn(i, t, s)),
      e !== null && ($t(e, i, s, o), Sa(e, i, s)),
      s
    );
  }
  function ul(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function im(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Kd(e, t) {
    im(e, t), (e = e.alternate) && im(e, t);
  }
  function AE() {
    return null;
  }
  var L0 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Zd(e) {
    this._internalRoot = e;
  }
  zl.prototype.render = Zd.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(B(409));
    Fl(e, t, null, null);
  };
  zl.prototype.unmount = Zd.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Lr(function () {
        Fl(null, e, null, null);
      }),
        (t[gn] = null);
    }
  };
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = dg();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
      Fn.splice(n, 0, e), n === 0 && hg(e);
    }
  };
  function Jd(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $l(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function om() {}
  function FE(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var u = ul(s);
          o.call(u);
        };
      }
      var s = I0(t, r, e, 0, null, !1, !1, "", om);
      return (
        (e._reactRootContainer = s),
        (e[gn] = s.current),
        ss(e.nodeType === 8 ? e.parentNode : e),
        Lr(),
        s
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = ul(l);
        a.call(u);
      };
    }
    var l = Gd(e, 0, !1, null, null, !1, !1, "", om);
    return (
      (e._reactRootContainer = l),
      (e[gn] = l.current),
      ss(e.nodeType === 8 ? e.parentNode : e),
      Lr(function () {
        Fl(t, l, n, r);
      }),
      l
    );
  }
  function Bl(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function () {
          var l = ul(s);
          a.call(l);
        };
      }
      Fl(t, s, e, i);
    } else s = FE(n, t, e, i, r);
    return ul(s);
  }
  cg = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Po(t.pendingLanes);
          n !== 0 &&
            (gd(t, n | 1), it(t, _e()), !(re & 6) && (($i = _e() + 500), ur()));
        }
        break;
      case 13:
        Lr(function () {
          var r = wn(e, 1);
          if (r !== null) {
            var i = We();
            $t(r, e, 1, i);
          }
        }),
          Kd(e, 1);
    }
  };
  wd = function (e) {
    if (e.tag === 13) {
      var t = wn(e, 134217728);
      if (t !== null) {
        var n = We();
        $t(t, e, 134217728, n);
      }
      Kd(e, 134217728);
    }
  };
  fg = function (e) {
    if (e.tag === 13) {
      var t = Gn(e),
        n = wn(e, t);
      if (n !== null) {
        var r = We();
        $t(n, e, t, r);
      }
      Kd(e, t);
    }
  };
  dg = function () {
    return se;
  };
  pg = function (e, t) {
    var n = se;
    try {
      return (se = e), t();
    } finally {
      se = n;
    }
  };
  Nc = function (e, t, n) {
    switch (t) {
      case "input":
        if ((xc(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Pl(r);
              if (!i) throw Error(B(90));
              Uy(r), xc(r, i);
            }
          }
        }
        break;
      case "textarea":
        qy(e, n);
        break;
      case "select":
        (t = n.value), t != null && wi(e, !!n.multiple, t, !1);
    }
  };
  Jy = qd;
  eg = Lr;
  var zE = { usingClientEntryPoint: !1, Events: [Ps, li, Pl, Ky, Zy, qd] },
    go = {
      findFiberByHostInstance: Sr,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    $E = {
      bundleType: go.bundleType,
      version: go.version,
      rendererPackageName: go.rendererPackageName,
      rendererConfig: go.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: _n.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = rg(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: go.findFiberByHostInstance || AE,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ra.isDisabled && ra.supportsFiber)
      try {
        (Nl = ra.inject($E)), (Jt = ra);
      } catch {}
  }
  yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zE;
  yt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(t)) throw Error(B(200));
    return LE(e, t, null, n);
  };
  yt.createRoot = function (e, t) {
    if (!Jd(e)) throw Error(B(299));
    var n = !1,
      r = "",
      i = L0;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Gd(e, 1, !1, null, null, n, !1, r, i)),
      (e[gn] = t.current),
      ss(e.nodeType === 8 ? e.parentNode : e),
      new Zd(t)
    );
  };
  yt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(B(188))
        : ((e = Object.keys(e).join(",")), Error(B(268, e)));
    return (e = rg(t)), (e = e === null ? null : e.stateNode), e;
  };
  yt.flushSync = function (e) {
    return Lr(e);
  };
  yt.hydrate = function (e, t, n) {
    if (!$l(t)) throw Error(B(200));
    return Bl(null, e, t, !0, n);
  };
  yt.hydrateRoot = function (e, t, n) {
    if (!Jd(e)) throw Error(B(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      o = "",
      s = L0;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (t = I0(t, null, e, 1, n ?? null, i, !1, o, s)),
      (e[gn] = t.current),
      ss(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i);
    return new zl(t);
  };
  yt.render = function (e, t, n) {
    if (!$l(t)) throw Error(B(200));
    return Bl(null, e, t, !1, n);
  };
  yt.unmountComponentAtNode = function (e) {
    if (!$l(e)) throw Error(B(40));
    return e._reactRootContainer
      ? (Lr(function () {
          Bl(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[gn] = null);
          });
        }),
        !0)
      : !1;
  };
  yt.unstable_batchedUpdates = qd;
  yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!$l(n)) throw Error(B(200));
    if (e == null || e._reactInternals === void 0) throw Error(B(38));
    return Bl(e, t, n, !1, r);
  };
  yt.version = "18.2.0-next-9e3b772b8-20220608";
  function A0() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A0);
      } catch (e) {
        console.error(e);
      }
  }
  A0(), (Iy.exports = yt);
  var F0 = Iy.exports;
  const mi = Ns(F0);
  var z0,
    sm = F0;
  (z0 = sm.createRoot), sm.hydrateRoot;
  /**
   * @remix-run/router v1.7.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function cl() {
    return (
      (cl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      cl.apply(this, arguments)
    );
  }
  var Hn;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(Hn || (Hn = {}));
  const am = "popstate";
  function BE(e) {
    e === void 0 && (e = {});
    function t(r, i) {
      let { pathname: o, search: s, hash: a } = r.location;
      return af(
        "",
        { pathname: o, search: s, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      );
    }
    function n(r, i) {
      return typeof i == "string" ? i : $0(i);
    }
    return HE(t, n, null, e);
  }
  function at(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function ep(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function VE() {
    return Math.random().toString(36).substr(2, 8);
  }
  function lm(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function af(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      cl(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? Vl(t) : t,
        { state: n, key: (t && t.key) || r || VE() }
      )
    );
  }
  function $0(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function Vl(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function HE(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = r,
      s = i.history,
      a = Hn.Pop,
      l = null,
      u = c();
    u == null && ((u = 0), s.replaceState(cl({}, s.state, { idx: u }), ""));
    function c() {
      return (s.state || { idx: null }).idx;
    }
    function f() {
      a = Hn.Pop;
      let S = c(),
        m = S == null ? null : S - u;
      (u = S), l && l({ action: a, location: y.location, delta: m });
    }
    function d(S, m) {
      a = Hn.Push;
      let h = af(y.location, S, m);
      n && n(h, S), (u = c() + 1);
      let v = lm(h, u),
        w = y.createHref(h);
      try {
        s.pushState(v, "", w);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        i.location.assign(w);
      }
      o && l && l({ action: a, location: y.location, delta: 1 });
    }
    function p(S, m) {
      a = Hn.Replace;
      let h = af(y.location, S, m);
      n && n(h, S), (u = c());
      let v = lm(h, u),
        w = y.createHref(h);
      s.replaceState(v, "", w),
        o && l && l({ action: a, location: y.location, delta: 0 });
    }
    function g(S) {
      let m =
          i.location.origin !== "null" ? i.location.origin : i.location.href,
        h = typeof S == "string" ? S : $0(S);
      return (
        at(
          m,
          "No window.location.(origin|href) available to create URL for href: " +
            h
        ),
        new URL(h, m)
      );
    }
    let y = {
      get action() {
        return a;
      },
      get location() {
        return e(i, s);
      },
      listen(S) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          i.addEventListener(am, f),
          (l = S),
          () => {
            i.removeEventListener(am, f), (l = null);
          }
        );
      },
      createHref(S) {
        return t(i, S);
      },
      createURL: g,
      encodeLocation(S) {
        let m = g(S);
        return { pathname: m.pathname, search: m.search, hash: m.hash };
      },
      push: d,
      replace: p,
      go(S) {
        return s.go(S);
      },
    };
    return y;
  }
  var um;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(um || (um = {}));
  function UE(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Vl(t) : t,
      i = H0(r.pathname || "/", n);
    if (i == null) return null;
    let o = B0(e);
    QE(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a) s = e_(o[a], r_(i));
    return s;
  }
  function B0(e, t, n, r) {
    t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = "");
    let i = (o, s, a) => {
      let l = {
        relativePath: a === void 0 ? o.path || "" : a,
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: s,
        route: o,
      };
      l.relativePath.startsWith("/") &&
        (at(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = ki([r, l.relativePath]),
        c = n.concat(l);
      o.children &&
        o.children.length > 0 &&
        (at(
          o.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".')
        ),
        B0(o.children, t, c, u)),
        !(o.path == null && !o.index) &&
          t.push({ path: u, score: ZE(u, o.index), routesMeta: c });
    };
    return (
      e.forEach((o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
          i(o, s);
        else for (let l of V0(o.path)) i(o, s, l);
      }),
      t
    );
  }
  function V0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      i = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let s = V0(r.join("/")),
      a = [];
    return (
      a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
      i && a.push(...s),
      a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function QE(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : JE(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
          )
    );
  }
  const qE = /^:\w+$/,
    WE = 3,
    YE = 2,
    XE = 1,
    GE = 10,
    KE = -2,
    cm = (e) => e === "*";
  function ZE(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(cm) && (r += KE),
      t && (r += YE),
      n
        .filter((i) => !cm(i))
        .reduce((i, o) => i + (qE.test(o) ? WE : o === "" ? XE : GE), r)
    );
  }
  function JE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function e_(e, t) {
    let { routesMeta: n } = e,
      r = {},
      i = "/",
      o = [];
    for (let s = 0; s < n.length; ++s) {
      let a = n[s],
        l = s === n.length - 1,
        u = i === "/" ? t : t.slice(i.length) || "/",
        c = t_(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
          u
        );
      if (!c) return null;
      Object.assign(r, c.params);
      let f = a.route;
      o.push({
        params: r,
        pathname: ki([i, c.pathname]),
        pathnameBase: o_(ki([i, c.pathnameBase])),
        route: f,
      }),
        c.pathnameBase !== "/" && (i = ki([i, c.pathnameBase]));
    }
    return o;
  }
  function t_(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = n_(e.path, e.caseSensitive, e.end),
      i = t.match(n);
    if (!i) return null;
    let o = i[0],
      s = o.replace(/(.)\/+$/, "$1"),
      a = i.slice(1);
    return {
      params: r.reduce((u, c, f) => {
        if (c === "*") {
          let d = a[f] || "";
          s = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
        }
        return (u[c] = i_(a[f] || "", c)), u;
      }, {}),
      pathname: o,
      pathnameBase: s,
      pattern: e,
    };
  }
  function n_(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      ep(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
      );
    let r = [],
      i =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
          .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
    return (
      e.endsWith("*")
        ? (r.push("*"),
          (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
      [new RegExp(i, t ? void 0 : "i"), r]
    );
  }
  function r_(e) {
    try {
      return decodeURI(e);
    } catch (t) {
      return (
        ep(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ").")
        ),
        e
      );
    }
  }
  function i_(e, t) {
    try {
      return decodeURIComponent(e);
    } catch (n) {
      return (
        ep(
          !1,
          'The value for the URL param "' +
            t +
            '" will not be decoded because' +
            (' the string "' +
              e +
              '" is a malformed URL segment. This is probably') +
            (" due to a bad percent encoding (" + n + ").")
        ),
        e
      );
    }
  }
  function H0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  const ki = (e) => e.join("/").replace(/\/\/+/g, "/"),
    o_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  function s_(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const U0 = ["post", "put", "patch", "delete"];
  new Set(U0);
  const a_ = ["get", ...U0];
  new Set(a_);
  /**
   * React Router v6.14.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function lf() {
    return (
      (lf = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      lf.apply(this, arguments)
    );
  }
  const l_ = b.createContext(null),
    u_ = b.createContext(null),
    Q0 = b.createContext(null),
    Hl = b.createContext(null),
    Ul = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    q0 = b.createContext(null);
  function tp() {
    return b.useContext(Hl) != null;
  }
  function c_() {
    return tp() || at(!1), b.useContext(Hl).location;
  }
  function f_(e, t) {
    return d_(e, t);
  }
  function d_(e, t, n) {
    tp() || at(!1);
    let { navigator: r } = b.useContext(Q0),
      { matches: i } = b.useContext(Ul),
      o = i[i.length - 1],
      s = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let l = c_(),
      u;
    if (t) {
      var c;
      let y = typeof t == "string" ? Vl(t) : t;
      a === "/" || ((c = y.pathname) != null && c.startsWith(a)) || at(!1),
        (u = y);
    } else u = l;
    let f = u.pathname || "/",
      d = a === "/" ? f : f.slice(a.length) || "/",
      p = UE(e, { pathname: d }),
      g = y_(
        p &&
          p.map((y) =>
            Object.assign({}, y, {
              params: Object.assign({}, s, y.params),
              pathname: ki([
                a,
                r.encodeLocation
                  ? r.encodeLocation(y.pathname).pathname
                  : y.pathname,
              ]),
              pathnameBase:
                y.pathnameBase === "/"
                  ? a
                  : ki([
                      a,
                      r.encodeLocation
                        ? r.encodeLocation(y.pathnameBase).pathname
                        : y.pathnameBase,
                    ]),
            })
          ),
        i,
        n
      );
    return t && g
      ? b.createElement(
          Hl.Provider,
          {
            value: {
              location: lf(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                u
              ),
              navigationType: Hn.Pop,
            },
          },
          g
        )
      : g;
  }
  function p_() {
    let e = S_(),
      t = s_(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      o = null;
    return b.createElement(
      b.Fragment,
      null,
      b.createElement("h2", null, "Unexpected Application Error!"),
      b.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? b.createElement("pre", { style: i }, n) : null,
      o
    );
  }
  const h_ = b.createElement(p_, null);
  class m_ extends b.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n
      );
    }
    render() {
      return this.state.error
        ? b.createElement(
            Ul.Provider,
            { value: this.props.routeContext },
            b.createElement(q0.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function v_(e) {
    let { routeContext: t, match: n, children: r } = e,
      i = b.useContext(l_);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      b.createElement(Ul.Provider, { value: t }, r)
    );
  }
  function y_(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
      var i;
      if ((i = n) != null && i.errors) e = n.matches;
      else return null;
    }
    let o = e,
      s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
      let a = o.findIndex(
        (l) => l.route.id && (s == null ? void 0 : s[l.route.id])
      );
      a >= 0 || at(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
    }
    return o.reduceRight((a, l, u) => {
      let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
        f = null;
      n && (f = l.route.errorElement || h_);
      let d = t.concat(o.slice(0, u + 1)),
        p = () => {
          let g;
          return (
            c
              ? (g = f)
              : l.route.Component
              ? (g = b.createElement(l.route.Component, null))
              : l.route.element
              ? (g = l.route.element)
              : (g = a),
            b.createElement(v_, {
              match: l,
              routeContext: { outlet: a, matches: d, isDataRoute: n != null },
              children: g,
            })
          );
        };
      return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
        ? b.createElement(m_, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: c,
            children: p(),
            routeContext: { outlet: null, matches: d, isDataRoute: !0 },
          })
        : p();
    }, null);
  }
  var fm;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate");
  })(fm || (fm = {}));
  var fl;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId");
  })(fl || (fl = {}));
  function g_(e) {
    let t = b.useContext(u_);
    return t || at(!1), t;
  }
  function w_(e) {
    let t = b.useContext(Ul);
    return t || at(!1), t;
  }
  function x_(e) {
    let t = w_(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || at(!1), n.route.id;
  }
  function S_() {
    var e;
    let t = b.useContext(q0),
      n = g_(fl.UseRouteError),
      r = x_(fl.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
  }
  function uf(e) {
    at(!1);
  }
  function b_(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: i = Hn.Pop,
      navigator: o,
      static: s = !1,
    } = e;
    tp() && at(!1);
    let a = t.replace(/^\/*/, "/"),
      l = b.useMemo(
        () => ({ basename: a, navigator: o, static: s }),
        [a, o, s]
      );
    typeof r == "string" && (r = Vl(r));
    let {
        pathname: u = "/",
        search: c = "",
        hash: f = "",
        state: d = null,
        key: p = "default",
      } = r,
      g = b.useMemo(() => {
        let y = H0(u, a);
        return y == null
          ? null
          : {
              location: { pathname: y, search: c, hash: f, state: d, key: p },
              navigationType: i,
            };
      }, [a, u, c, f, d, p, i]);
    return g == null
      ? null
      : b.createElement(
          Q0.Provider,
          { value: l },
          b.createElement(Hl.Provider, { children: n, value: g })
        );
  }
  function E_(e) {
    let { children: t, location: n } = e;
    return f_(cf(t), n);
  }
  var dm;
  (function (e) {
    (e[(e.pending = 0)] = "pending"),
      (e[(e.success = 1)] = "success"),
      (e[(e.error = 2)] = "error");
  })(dm || (dm = {}));
  new Promise(() => {});
  function cf(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      b.Children.forEach(e, (r, i) => {
        if (!b.isValidElement(r)) return;
        let o = [...t, i];
        if (r.type === b.Fragment) {
          n.push.apply(n, cf(r.props.children, o));
          return;
        }
        r.type !== uf && at(!1), !r.props.index || !r.props.children || at(!1);
        let s = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        r.props.children && (s.children = cf(r.props.children, o)), n.push(s);
      }),
      n
    );
  }
  /**
   * React Router DOM v6.14.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ const __ = "startTransition",
    pm = PS[__];
  function k_(e) {
    let { basename: t, children: n, future: r, window: i } = e,
      o = b.useRef();
    o.current == null && (o.current = BE({ window: i, v5Compat: !0 }));
    let s = o.current,
      [a, l] = b.useState({ action: s.action, location: s.location }),
      { v7_startTransition: u } = r || {},
      c = b.useCallback(
        (f) => {
          u && pm ? pm(() => l(f)) : l(f);
        },
        [l, u]
      );
    return (
      b.useLayoutEffect(() => s.listen(c), [s, c]),
      b.createElement(b_, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
      })
    );
  }
  var hm;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher");
  })(hm || (hm = {}));
  var mm;
  (function (e) {
    (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(mm || (mm = {}));
  const W0 = (e) => {
    document.title = e;
  };
  function Ge(e) {
    if (typeof e == "string" || typeof e == "number") return "" + e;
    let t = "";
    if (Array.isArray(e))
      for (let n = 0, r; n < e.length; n++)
        (r = Ge(e[n])) !== "" && (t += (t && " ") + r);
    else for (let n in e) e[n] && (t += (t && " ") + n);
    return t;
  }
  const vm = (e) => {
      let t;
      const n = new Set(),
        r = (l, u) => {
          const c = typeof l == "function" ? l(t) : l;
          if (!Object.is(c, t)) {
            const f = t;
            (t = u ?? typeof c != "object" ? c : Object.assign({}, t, c)),
              n.forEach((d) => d(t, f));
          }
        },
        i = () => t,
        a = {
          setState: r,
          getState: i,
          subscribe: (l) => (n.add(l), () => n.delete(l)),
          destroy: () => {
            (({
              BASE_URL: "/webapp",
              MODE: "production",
              DEV: !1,
              PROD: !0,
              SSR: !1,
            }) && "production") !== "production" &&
              console.warn(
                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
              ),
              n.clear();
          },
        };
      return (t = e(r, i, a)), a;
    },
    C_ = (e) => (e ? vm(e) : vm);
  var Y0 = { exports: {} },
    X0 = {},
    G0 = { exports: {} },
    K0 = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Bi = b;
  function N_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var O_ = typeof Object.is == "function" ? Object.is : N_,
    T_ = Bi.useState,
    D_ = Bi.useEffect,
    P_ = Bi.useLayoutEffect,
    R_ = Bi.useDebugValue;
  function j_(e, t) {
    var n = t(),
      r = T_({ inst: { value: n, getSnapshot: t } }),
      i = r[0].inst,
      o = r[1];
    return (
      P_(
        function () {
          (i.value = n), (i.getSnapshot = t), Vu(i) && o({ inst: i });
        },
        [e, n, t]
      ),
      D_(
        function () {
          return (
            Vu(i) && o({ inst: i }),
            e(function () {
              Vu(i) && o({ inst: i });
            })
          );
        },
        [e]
      ),
      R_(n),
      n
    );
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !O_(e, n);
    } catch {
      return !0;
    }
  }
  function M_(e, t) {
    return t();
  }
  var I_ =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? M_
      : j_;
  K0.useSyncExternalStore =
    Bi.useSyncExternalStore !== void 0 ? Bi.useSyncExternalStore : I_;
  G0.exports = K0;
  var L_ = G0.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ql = b,
    A_ = L_;
  function F_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var z_ = typeof Object.is == "function" ? Object.is : F_,
    $_ = A_.useSyncExternalStore,
    B_ = Ql.useRef,
    V_ = Ql.useEffect,
    H_ = Ql.useMemo,
    U_ = Ql.useDebugValue;
  X0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var o = B_(null);
    if (o.current === null) {
      var s = { hasValue: !1, value: null };
      o.current = s;
    } else s = o.current;
    o = H_(
      function () {
        function l(p) {
          if (!u) {
            if (((u = !0), (c = p), (p = r(p)), i !== void 0 && s.hasValue)) {
              var g = s.value;
              if (i(g, p)) return (f = g);
            }
            return (f = p);
          }
          if (((g = f), z_(c, p))) return g;
          var y = r(p);
          return i !== void 0 && i(g, y) ? g : ((c = p), (f = y));
        }
        var u = !1,
          c,
          f,
          d = n === void 0 ? null : n;
        return [
          function () {
            return l(t());
          },
          d === null
            ? void 0
            : function () {
                return l(d());
              },
        ];
      },
      [t, n, r, i]
    );
    var a = $_(e, o[0], o[1]);
    return (
      V_(
        function () {
          (s.hasValue = !0), (s.value = a);
        },
        [a]
      ),
      U_(a),
      a
    );
  };
  Y0.exports = X0;
  var Q_ = Y0.exports;
  const q_ = Ns(Q_),
    { useSyncExternalStoreWithSelector: W_ } = q_;
  function Y_(e, t = e.getState, n) {
    const r = W_(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
    return b.useDebugValue(r), r;
  }
  function Qe(e, t) {
    if (Object.is(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (const [r, i] of e) if (!Object.is(i, t.get(r))) return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (const r of e) if (!t.has(r)) return !1;
      return !0;
    }
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; r++)
      if (
        !Object.prototype.hasOwnProperty.call(t, n[r]) ||
        !Object.is(e[n[r]], t[n[r]])
      )
        return !1;
    return !0;
  }
  var X_ = { value: () => {} };
  function ql() {
    for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
      if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
        throw new Error("illegal type: " + r);
      n[r] = [];
    }
    return new Oa(n);
  }
  function Oa(e) {
    this._ = e;
  }
  function G_(e, t) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (n) {
        var r = "",
          i = n.indexOf(".");
        if (
          (i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))),
          n && !t.hasOwnProperty(n))
        )
          throw new Error("unknown type: " + n);
        return { type: n, name: r };
      });
  }
  Oa.prototype = ql.prototype = {
    constructor: Oa,
    on: function (e, t) {
      var n = this._,
        r = G_(e + "", n),
        i,
        o = -1,
        s = r.length;
      if (arguments.length < 2) {
        for (; ++o < s; )
          if ((i = (e = r[o]).type) && (i = K_(n[i], e.name))) return i;
        return;
      }
      if (t != null && typeof t != "function")
        throw new Error("invalid callback: " + t);
      for (; ++o < s; )
        if ((i = (e = r[o]).type)) n[i] = ym(n[i], e.name, t);
        else if (t == null) for (i in n) n[i] = ym(n[i], e.name, null);
      return this;
    },
    copy: function () {
      var e = {},
        t = this._;
      for (var n in t) e[n] = t[n].slice();
      return new Oa(e);
    },
    call: function (e, t) {
      if ((i = arguments.length - 2) > 0)
        for (var n = new Array(i), r = 0, i, o; r < i; ++r)
          n[r] = arguments[r + 2];
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (o = this._[e], r = 0, i = o.length; r < i; ++r)
        o[r].value.apply(t, n);
    },
    apply: function (e, t, n) {
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
        r[i].value.apply(t, n);
    },
  };
  function K_(e, t) {
    for (var n = 0, r = e.length, i; n < r; ++n)
      if ((i = e[n]).name === t) return i.value;
  }
  function ym(e, t, n) {
    for (var r = 0, i = e.length; r < i; ++r)
      if (e[r].name === t) {
        (e[r] = X_), (e = e.slice(0, r).concat(e.slice(r + 1)));
        break;
      }
    return n != null && e.push({ name: t, value: n }), e;
  }
  var ff = "http://www.w3.org/1999/xhtml";
  const gm = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: ff,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
  function Wl(e) {
    var t = (e += ""),
      n = t.indexOf(":");
    return (
      n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
      gm.hasOwnProperty(t) ? { space: gm[t], local: e } : e
    );
  }
  function Z_(e) {
    return function () {
      var t = this.ownerDocument,
        n = this.namespaceURI;
      return n === ff && t.documentElement.namespaceURI === ff
        ? t.createElement(e)
        : t.createElementNS(n, e);
    };
  }
  function J_(e) {
    return function () {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function Z0(e) {
    var t = Wl(e);
    return (t.local ? J_ : Z_)(t);
  }
  function ek() {}
  function np(e) {
    return e == null
      ? ek
      : function () {
          return this.querySelector(e);
        };
  }
  function tk(e) {
    typeof e != "function" && (e = np(e));
    for (
      var t = this._groups, n = t.length, r = new Array(n), i = 0;
      i < n;
      ++i
    )
      for (
        var o = t[i], s = o.length, a = (r[i] = new Array(s)), l, u, c = 0;
        c < s;
        ++c
      )
        (l = o[c]) &&
          (u = e.call(l, l.__data__, c, o)) &&
          ("__data__" in l && (u.__data__ = l.__data__), (a[c] = u));
    return new mt(r, this._parents);
  }
  function nk(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function rk() {
    return [];
  }
  function J0(e) {
    return e == null
      ? rk
      : function () {
          return this.querySelectorAll(e);
        };
  }
  function ik(e) {
    return function () {
      return nk(e.apply(this, arguments));
    };
  }
  function ok(e) {
    typeof e == "function" ? (e = ik(e)) : (e = J0(e));
    for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
      for (var s = t[o], a = s.length, l, u = 0; u < a; ++u)
        (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), i.push(l));
    return new mt(r, i);
  }
  function ew(e) {
    return function () {
      return this.matches(e);
    };
  }
  function tw(e) {
    return function (t) {
      return t.matches(e);
    };
  }
  var sk = Array.prototype.find;
  function ak(e) {
    return function () {
      return sk.call(this.children, e);
    };
  }
  function lk() {
    return this.firstElementChild;
  }
  function uk(e) {
    return this.select(e == null ? lk : ak(typeof e == "function" ? e : tw(e)));
  }
  var ck = Array.prototype.filter;
  function fk() {
    return Array.from(this.children);
  }
  function dk(e) {
    return function () {
      return ck.call(this.children, e);
    };
  }
  function pk(e) {
    return this.selectAll(
      e == null ? fk : dk(typeof e == "function" ? e : tw(e))
    );
  }
  function hk(e) {
    typeof e != "function" && (e = ew(e));
    for (
      var t = this._groups, n = t.length, r = new Array(n), i = 0;
      i < n;
      ++i
    )
      for (var o = t[i], s = o.length, a = (r[i] = []), l, u = 0; u < s; ++u)
        (l = o[u]) && e.call(l, l.__data__, u, o) && a.push(l);
    return new mt(r, this._parents);
  }
  function nw(e) {
    return new Array(e.length);
  }
  function mk() {
    return new mt(this._enter || this._groups.map(nw), this._parents);
  }
  function dl(e, t) {
    (this.ownerDocument = e.ownerDocument),
      (this.namespaceURI = e.namespaceURI),
      (this._next = null),
      (this._parent = e),
      (this.__data__ = t);
  }
  dl.prototype = {
    constructor: dl,
    appendChild: function (e) {
      return this._parent.insertBefore(e, this._next);
    },
    insertBefore: function (e, t) {
      return this._parent.insertBefore(e, t);
    },
    querySelector: function (e) {
      return this._parent.querySelector(e);
    },
    querySelectorAll: function (e) {
      return this._parent.querySelectorAll(e);
    },
  };
  function vk(e) {
    return function () {
      return e;
    };
  }
  function yk(e, t, n, r, i, o) {
    for (var s = 0, a, l = t.length, u = o.length; s < u; ++s)
      (a = t[s]) ? ((a.__data__ = o[s]), (r[s] = a)) : (n[s] = new dl(e, o[s]));
    for (; s < l; ++s) (a = t[s]) && (i[s] = a);
  }
  function gk(e, t, n, r, i, o, s) {
    var a,
      l,
      u = new Map(),
      c = t.length,
      f = o.length,
      d = new Array(c),
      p;
    for (a = 0; a < c; ++a)
      (l = t[a]) &&
        ((d[a] = p = s.call(l, l.__data__, a, t) + ""),
        u.has(p) ? (i[a] = l) : u.set(p, l));
    for (a = 0; a < f; ++a)
      (p = s.call(e, o[a], a, o) + ""),
        (l = u.get(p))
          ? ((r[a] = l), (l.__data__ = o[a]), u.delete(p))
          : (n[a] = new dl(e, o[a]));
    for (a = 0; a < c; ++a) (l = t[a]) && u.get(d[a]) === l && (i[a] = l);
  }
  function wk(e) {
    return e.__data__;
  }
  function xk(e, t) {
    if (!arguments.length) return Array.from(this, wk);
    var n = t ? gk : yk,
      r = this._parents,
      i = this._groups;
    typeof e != "function" && (e = vk(e));
    for (
      var o = i.length,
        s = new Array(o),
        a = new Array(o),
        l = new Array(o),
        u = 0;
      u < o;
      ++u
    ) {
      var c = r[u],
        f = i[u],
        d = f.length,
        p = Sk(e.call(c, c && c.__data__, u, r)),
        g = p.length,
        y = (a[u] = new Array(g)),
        S = (s[u] = new Array(g)),
        m = (l[u] = new Array(d));
      n(c, f, y, S, m, p, t);
      for (var h = 0, v = 0, w, E; h < g; ++h)
        if ((w = y[h])) {
          for (h >= v && (v = h + 1); !(E = S[v]) && ++v < g; );
          w._next = E || null;
        }
    }
    return (s = new mt(s, r)), (s._enter = a), (s._exit = l), s;
  }
  function Sk(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function bk() {
    return new mt(this._exit || this._groups.map(nw), this._parents);
  }
  function Ek(e, t, n) {
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      typeof e == "function"
        ? ((r = e(r)), r && (r = r.selection()))
        : (r = r.append(e + "")),
      t != null && ((i = t(i)), i && (i = i.selection())),
      n == null ? o.remove() : n(o),
      r && i ? r.merge(i).order() : i
    );
  }
  function _k(e) {
    for (
      var t = e.selection ? e.selection() : e,
        n = this._groups,
        r = t._groups,
        i = n.length,
        o = r.length,
        s = Math.min(i, o),
        a = new Array(i),
        l = 0;
      l < s;
      ++l
    )
      for (
        var u = n[l],
          c = r[l],
          f = u.length,
          d = (a[l] = new Array(f)),
          p,
          g = 0;
        g < f;
        ++g
      )
        (p = u[g] || c[g]) && (d[g] = p);
    for (; l < i; ++l) a[l] = n[l];
    return new mt(a, this._parents);
  }
  function kk() {
    for (var e = this._groups, t = -1, n = e.length; ++t < n; )
      for (var r = e[t], i = r.length - 1, o = r[i], s; --i >= 0; )
        (s = r[i]) &&
          (o &&
            s.compareDocumentPosition(o) ^ 4 &&
            o.parentNode.insertBefore(s, o),
          (o = s));
    return this;
  }
  function Ck(e) {
    e || (e = Nk);
    function t(f, d) {
      return f && d ? e(f.__data__, d.__data__) : !f - !d;
    }
    for (
      var n = this._groups, r = n.length, i = new Array(r), o = 0;
      o < r;
      ++o
    ) {
      for (
        var s = n[o], a = s.length, l = (i[o] = new Array(a)), u, c = 0;
        c < a;
        ++c
      )
        (u = s[c]) && (l[c] = u);
      l.sort(t);
    }
    return new mt(i, this._parents).order();
  }
  function Nk(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
  }
  function Ok() {
    var e = arguments[0];
    return (arguments[0] = this), e.apply(null, arguments), this;
  }
  function Tk() {
    return Array.from(this);
  }
  function Dk() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
      for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
        var s = r[i];
        if (s) return s;
      }
    return null;
  }
  function Pk() {
    let e = 0;
    for (const t of this) ++e;
    return e;
  }
  function Rk() {
    return !this.node();
  }
  function jk(e) {
    for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
      for (var i = t[n], o = 0, s = i.length, a; o < s; ++o)
        (a = i[o]) && e.call(a, a.__data__, o, i);
    return this;
  }
  function Mk(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function Ik(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function Lk(e, t) {
    return function () {
      this.setAttribute(e, t);
    };
  }
  function Ak(e, t) {
    return function () {
      this.setAttributeNS(e.space, e.local, t);
    };
  }
  function Fk(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
    };
  }
  function zk(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      n == null
        ? this.removeAttributeNS(e.space, e.local)
        : this.setAttributeNS(e.space, e.local, n);
    };
  }
  function $k(e, t) {
    var n = Wl(e);
    if (arguments.length < 2) {
      var r = this.node();
      return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
    }
    return this.each(
      (t == null
        ? n.local
          ? Ik
          : Mk
        : typeof t == "function"
        ? n.local
          ? zk
          : Fk
        : n.local
        ? Ak
        : Lk)(n, t)
    );
  }
  function rw(e) {
    return (
      (e.ownerDocument && e.ownerDocument.defaultView) ||
      (e.document && e) ||
      e.defaultView
    );
  }
  function Bk(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function Vk(e, t, n) {
    return function () {
      this.style.setProperty(e, t, n);
    };
  }
  function Hk(e, t, n) {
    return function () {
      var r = t.apply(this, arguments);
      r == null
        ? this.style.removeProperty(e)
        : this.style.setProperty(e, r, n);
    };
  }
  function Uk(e, t, n) {
    return arguments.length > 1
      ? this.each(
          (t == null ? Bk : typeof t == "function" ? Hk : Vk)(e, t, n ?? "")
        )
      : Vi(this.node(), e);
  }
  function Vi(e, t) {
    return (
      e.style.getPropertyValue(t) ||
      rw(e).getComputedStyle(e, null).getPropertyValue(t)
    );
  }
  function Qk(e) {
    return function () {
      delete this[e];
    };
  }
  function qk(e, t) {
    return function () {
      this[e] = t;
    };
  }
  function Wk(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      n == null ? delete this[e] : (this[e] = n);
    };
  }
  function Yk(e, t) {
    return arguments.length > 1
      ? this.each((t == null ? Qk : typeof t == "function" ? Wk : qk)(e, t))
      : this.node()[e];
  }
  function iw(e) {
    return e.trim().split(/^|\s+/);
  }
  function rp(e) {
    return e.classList || new ow(e);
  }
  function ow(e) {
    (this._node = e), (this._names = iw(e.getAttribute("class") || ""));
  }
  ow.prototype = {
    add: function (e) {
      var t = this._names.indexOf(e);
      t < 0 &&
        (this._names.push(e),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (e) {
      var t = this._names.indexOf(e);
      t >= 0 &&
        (this._names.splice(t, 1),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (e) {
      return this._names.indexOf(e) >= 0;
    },
  };
  function sw(e, t) {
    for (var n = rp(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
  }
  function aw(e, t) {
    for (var n = rp(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
  }
  function Xk(e) {
    return function () {
      sw(this, e);
    };
  }
  function Gk(e) {
    return function () {
      aw(this, e);
    };
  }
  function Kk(e, t) {
    return function () {
      (t.apply(this, arguments) ? sw : aw)(this, e);
    };
  }
  function Zk(e, t) {
    var n = iw(e + "");
    if (arguments.length < 2) {
      for (var r = rp(this.node()), i = -1, o = n.length; ++i < o; )
        if (!r.contains(n[i])) return !1;
      return !0;
    }
    return this.each((typeof t == "function" ? Kk : t ? Xk : Gk)(n, t));
  }
  function Jk() {
    this.textContent = "";
  }
  function eC(e) {
    return function () {
      this.textContent = e;
    };
  }
  function tC(e) {
    return function () {
      var t = e.apply(this, arguments);
      this.textContent = t ?? "";
    };
  }
  function nC(e) {
    return arguments.length
      ? this.each(e == null ? Jk : (typeof e == "function" ? tC : eC)(e))
      : this.node().textContent;
  }
  function rC() {
    this.innerHTML = "";
  }
  function iC(e) {
    return function () {
      this.innerHTML = e;
    };
  }
  function oC(e) {
    return function () {
      var t = e.apply(this, arguments);
      this.innerHTML = t ?? "";
    };
  }
  function sC(e) {
    return arguments.length
      ? this.each(e == null ? rC : (typeof e == "function" ? oC : iC)(e))
      : this.node().innerHTML;
  }
  function aC() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function lC() {
    return this.each(aC);
  }
  function uC() {
    this.previousSibling &&
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function cC() {
    return this.each(uC);
  }
  function fC(e) {
    var t = typeof e == "function" ? e : Z0(e);
    return this.select(function () {
      return this.appendChild(t.apply(this, arguments));
    });
  }
  function dC() {
    return null;
  }
  function pC(e, t) {
    var n = typeof e == "function" ? e : Z0(e),
      r = t == null ? dC : typeof t == "function" ? t : np(t);
    return this.select(function () {
      return this.insertBefore(
        n.apply(this, arguments),
        r.apply(this, arguments) || null
      );
    });
  }
  function hC() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function mC() {
    return this.each(hC);
  }
  function vC() {
    var e = this.cloneNode(!1),
      t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e;
  }
  function yC() {
    var e = this.cloneNode(!0),
      t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e;
  }
  function gC(e) {
    return this.select(e ? yC : vC);
  }
  function wC(e) {
    return arguments.length
      ? this.property("__data__", e)
      : this.node().__data__;
  }
  function xC(e) {
    return function (t) {
      e.call(this, t, this.__data__);
    };
  }
  function SC(e) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          r = t.indexOf(".");
        return (
          r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
          { type: t, name: n }
        );
      });
  }
  function bC(e) {
    return function () {
      var t = this.__on;
      if (t) {
        for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
          (o = t[n]),
            (!e.type || o.type === e.type) && o.name === e.name
              ? this.removeEventListener(o.type, o.listener, o.options)
              : (t[++r] = o);
        ++r ? (t.length = r) : delete this.__on;
      }
    };
  }
  function EC(e, t, n) {
    return function () {
      var r = this.__on,
        i,
        o = xC(t);
      if (r) {
        for (var s = 0, a = r.length; s < a; ++s)
          if ((i = r[s]).type === e.type && i.name === e.name) {
            this.removeEventListener(i.type, i.listener, i.options),
              this.addEventListener(i.type, (i.listener = o), (i.options = n)),
              (i.value = t);
            return;
          }
      }
      this.addEventListener(e.type, o, n),
        (i = { type: e.type, name: e.name, value: t, listener: o, options: n }),
        r ? r.push(i) : (this.__on = [i]);
    };
  }
  function _C(e, t, n) {
    var r = SC(e + ""),
      i,
      o = r.length,
      s;
    if (arguments.length < 2) {
      var a = this.node().__on;
      if (a) {
        for (var l = 0, u = a.length, c; l < u; ++l)
          for (i = 0, c = a[l]; i < o; ++i)
            if ((s = r[i]).type === c.type && s.name === c.name) return c.value;
      }
      return;
    }
    for (a = t ? EC : bC, i = 0; i < o; ++i) this.each(a(r[i], t, n));
    return this;
  }
  function lw(e, t, n) {
    var r = rw(e),
      i = r.CustomEvent;
    typeof i == "function"
      ? (i = new i(t, n))
      : ((i = r.document.createEvent("Event")),
        n
          ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
          : i.initEvent(t, !1, !1)),
      e.dispatchEvent(i);
  }
  function kC(e, t) {
    return function () {
      return lw(this, e, t);
    };
  }
  function CC(e, t) {
    return function () {
      return lw(this, e, t.apply(this, arguments));
    };
  }
  function NC(e, t) {
    return this.each((typeof t == "function" ? CC : kC)(e, t));
  }
  function* OC() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
      for (var r = e[t], i = 0, o = r.length, s; i < o; ++i)
        (s = r[i]) && (yield s);
  }
  var uw = [null];
  function mt(e, t) {
    (this._groups = e), (this._parents = t);
  }
  function js() {
    return new mt([[document.documentElement]], uw);
  }
  function TC() {
    return this;
  }
  mt.prototype = js.prototype = {
    constructor: mt,
    select: tk,
    selectAll: ok,
    selectChild: uk,
    selectChildren: pk,
    filter: hk,
    data: xk,
    enter: mk,
    exit: bk,
    join: Ek,
    merge: _k,
    selection: TC,
    order: kk,
    sort: Ck,
    call: Ok,
    nodes: Tk,
    node: Dk,
    size: Pk,
    empty: Rk,
    each: jk,
    attr: $k,
    style: Uk,
    property: Yk,
    classed: Zk,
    text: nC,
    html: sC,
    raise: lC,
    lower: cC,
    append: fC,
    insert: pC,
    remove: mC,
    clone: gC,
    datum: wC,
    on: _C,
    dispatch: NC,
    [Symbol.iterator]: OC,
  };
  function At(e) {
    return typeof e == "string"
      ? new mt([[document.querySelector(e)]], [document.documentElement])
      : new mt([[e]], uw);
  }
  function DC(e) {
    let t;
    for (; (t = e.sourceEvent); ) e = t;
    return e;
  }
  function Kt(e, t) {
    if (((e = DC(e)), t === void 0 && (t = e.currentTarget), t)) {
      var n = t.ownerSVGElement || t;
      if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return (
          (r.x = e.clientX),
          (r.y = e.clientY),
          (r = r.matrixTransform(t.getScreenCTM().inverse())),
          [r.x, r.y]
        );
      }
      if (t.getBoundingClientRect) {
        var i = t.getBoundingClientRect();
        return [
          e.clientX - i.left - t.clientLeft,
          e.clientY - i.top - t.clientTop,
        ];
      }
    }
    return [e.pageX, e.pageY];
  }
  const PC = { passive: !1 },
    ms = { capture: !0, passive: !1 };
  function Hu(e) {
    e.stopImmediatePropagation();
  }
  function Ci(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function cw(e) {
    var t = e.document.documentElement,
      n = At(e).on("dragstart.drag", Ci, ms);
    "onselectstart" in t
      ? n.on("selectstart.drag", Ci, ms)
      : ((t.__noselect = t.style.MozUserSelect),
        (t.style.MozUserSelect = "none"));
  }
  function fw(e, t) {
    var n = e.document.documentElement,
      r = At(e).on("dragstart.drag", null);
    t &&
      (r.on("click.drag", Ci, ms),
      setTimeout(function () {
        r.on("click.drag", null);
      }, 0)),
      "onselectstart" in n
        ? r.on("selectstart.drag", null)
        : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
  }
  const ia = (e) => () => e;
  function df(
    e,
    {
      sourceEvent: t,
      subject: n,
      target: r,
      identifier: i,
      active: o,
      x: s,
      y: a,
      dx: l,
      dy: u,
      dispatch: c,
    }
  ) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: t, enumerable: !0, configurable: !0 },
      subject: { value: n, enumerable: !0, configurable: !0 },
      target: { value: r, enumerable: !0, configurable: !0 },
      identifier: { value: i, enumerable: !0, configurable: !0 },
      active: { value: o, enumerable: !0, configurable: !0 },
      x: { value: s, enumerable: !0, configurable: !0 },
      y: { value: a, enumerable: !0, configurable: !0 },
      dx: { value: l, enumerable: !0, configurable: !0 },
      dy: { value: u, enumerable: !0, configurable: !0 },
      _: { value: c },
    });
  }
  df.prototype.on = function () {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e;
  };
  function RC(e) {
    return !e.ctrlKey && !e.button;
  }
  function jC() {
    return this.parentNode;
  }
  function MC(e, t) {
    return t ?? { x: e.x, y: e.y };
  }
  function IC() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function LC() {
    var e = RC,
      t = jC,
      n = MC,
      r = IC,
      i = {},
      o = ql("start", "drag", "end"),
      s = 0,
      a,
      l,
      u,
      c,
      f = 0;
    function d(w) {
      w.on("mousedown.drag", p)
        .filter(r)
        .on("touchstart.drag", S)
        .on("touchmove.drag", m, PC)
        .on("touchend.drag touchcancel.drag", h)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function p(w, E) {
      if (!(c || !e.call(this, w, E))) {
        var _ = v(this, t.call(this, w, E), w, E, "mouse");
        _ &&
          (At(w.view).on("mousemove.drag", g, ms).on("mouseup.drag", y, ms),
          cw(w.view),
          Hu(w),
          (u = !1),
          (a = w.clientX),
          (l = w.clientY),
          _("start", w));
      }
    }
    function g(w) {
      if ((Ci(w), !u)) {
        var E = w.clientX - a,
          _ = w.clientY - l;
        u = E * E + _ * _ > f;
      }
      i.mouse("drag", w);
    }
    function y(w) {
      At(w.view).on("mousemove.drag mouseup.drag", null),
        fw(w.view, u),
        Ci(w),
        i.mouse("end", w);
    }
    function S(w, E) {
      if (e.call(this, w, E)) {
        var _ = w.changedTouches,
          k = t.call(this, w, E),
          N = _.length,
          P,
          T;
        for (P = 0; P < N; ++P)
          (T = v(this, k, w, E, _[P].identifier, _[P])) &&
            (Hu(w), T("start", w, _[P]));
      }
    }
    function m(w) {
      var E = w.changedTouches,
        _ = E.length,
        k,
        N;
      for (k = 0; k < _; ++k)
        (N = i[E[k].identifier]) && (Ci(w), N("drag", w, E[k]));
    }
    function h(w) {
      var E = w.changedTouches,
        _ = E.length,
        k,
        N;
      for (
        c && clearTimeout(c),
          c = setTimeout(function () {
            c = null;
          }, 500),
          k = 0;
        k < _;
        ++k
      )
        (N = i[E[k].identifier]) && (Hu(w), N("end", w, E[k]));
    }
    function v(w, E, _, k, N, P) {
      var T = o.copy(),
        F = Kt(P || _, E),
        z,
        R,
        C;
      if (
        (C = n.call(
          w,
          new df("beforestart", {
            sourceEvent: _,
            target: d,
            identifier: N,
            active: s,
            x: F[0],
            y: F[1],
            dx: 0,
            dy: 0,
            dispatch: T,
          }),
          k
        )) != null
      )
        return (
          (z = C.x - F[0] || 0),
          (R = C.y - F[1] || 0),
          function I(j, D, O) {
            var M = F,
              L;
            switch (j) {
              case "start":
                (i[N] = I), (L = s++);
                break;
              case "end":
                delete i[N], --s;
              case "drag":
                (F = Kt(O || D, E)), (L = s);
                break;
            }
            T.call(
              j,
              w,
              new df(j, {
                sourceEvent: D,
                subject: C,
                target: d,
                identifier: N,
                active: L,
                x: F[0] + z,
                y: F[1] + R,
                dx: F[0] - M[0],
                dy: F[1] - M[1],
                dispatch: T,
              }),
              k
            );
          }
        );
    }
    return (
      (d.filter = function (w) {
        return arguments.length
          ? ((e = typeof w == "function" ? w : ia(!!w)), d)
          : e;
      }),
      (d.container = function (w) {
        return arguments.length
          ? ((t = typeof w == "function" ? w : ia(w)), d)
          : t;
      }),
      (d.subject = function (w) {
        return arguments.length
          ? ((n = typeof w == "function" ? w : ia(w)), d)
          : n;
      }),
      (d.touchable = function (w) {
        return arguments.length
          ? ((r = typeof w == "function" ? w : ia(!!w)), d)
          : r;
      }),
      (d.on = function () {
        var w = o.on.apply(o, arguments);
        return w === o ? d : w;
      }),
      (d.clickDistance = function (w) {
        return arguments.length ? ((f = (w = +w) * w), d) : Math.sqrt(f);
      }),
      d
    );
  }
  function ip(e, t, n) {
    (e.prototype = t.prototype = n), (n.constructor = e);
  }
  function dw(e, t) {
    var n = Object.create(e.prototype);
    for (var r in t) n[r] = t[r];
    return n;
  }
  function Ms() {}
  var vs = 0.7,
    pl = 1 / vs,
    Ni = "\\s*([+-]?\\d+)\\s*",
    ys = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    AC = /^#([0-9a-f]{3,8})$/,
    FC = new RegExp(`^rgb\\(${Ni},${Ni},${Ni}\\)$`),
    zC = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`),
    $C = new RegExp(`^rgba\\(${Ni},${Ni},${Ni},${ys}\\)$`),
    BC = new RegExp(`^rgba\\(${tn},${tn},${tn},${ys}\\)$`),
    VC = new RegExp(`^hsl\\(${ys},${tn},${tn}\\)$`),
    HC = new RegExp(`^hsla\\(${ys},${tn},${tn},${ys}\\)$`),
    wm = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  ip(Ms, gs, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: xm,
    formatHex: xm,
    formatHex8: UC,
    formatHsl: QC,
    formatRgb: Sm,
    toString: Sm,
  });
  function xm() {
    return this.rgb().formatHex();
  }
  function UC() {
    return this.rgb().formatHex8();
  }
  function QC() {
    return pw(this).formatHsl();
  }
  function Sm() {
    return this.rgb().formatRgb();
  }
  function gs(e) {
    var t, n;
    return (
      (e = (e + "").trim().toLowerCase()),
      (t = AC.exec(e))
        ? ((n = t[1].length),
          (t = parseInt(t[1], 16)),
          n === 6
            ? bm(t)
            : n === 3
            ? new tt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1
              )
            : n === 8
            ? oa(
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                (t & 255) / 255
              )
            : n === 4
            ? oa(
                ((t >> 12) & 15) | ((t >> 8) & 240),
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                (((t & 15) << 4) | (t & 15)) / 255
              )
            : null)
        : (t = FC.exec(e))
        ? new tt(t[1], t[2], t[3], 1)
        : (t = zC.exec(e))
        ? new tt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
        : (t = $C.exec(e))
        ? oa(t[1], t[2], t[3], t[4])
        : (t = BC.exec(e))
        ? oa((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
        : (t = VC.exec(e))
        ? km(t[1], t[2] / 100, t[3] / 100, 1)
        : (t = HC.exec(e))
        ? km(t[1], t[2] / 100, t[3] / 100, t[4])
        : wm.hasOwnProperty(e)
        ? bm(wm[e])
        : e === "transparent"
        ? new tt(NaN, NaN, NaN, 0)
        : null
    );
  }
  function bm(e) {
    return new tt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
  }
  function oa(e, t, n, r) {
    return r <= 0 && (e = t = n = NaN), new tt(e, t, n, r);
  }
  function qC(e) {
    return (
      e instanceof Ms || (e = gs(e)),
      e ? ((e = e.rgb()), new tt(e.r, e.g, e.b, e.opacity)) : new tt()
    );
  }
  function pf(e, t, n, r) {
    return arguments.length === 1 ? qC(e) : new tt(e, t, n, r ?? 1);
  }
  function tt(e, t, n, r) {
    (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
  }
  ip(
    tt,
    pf,
    dw(Ms, {
      brighter(e) {
        return (
          (e = e == null ? pl : Math.pow(pl, e)),
          new tt(this.r * e, this.g * e, this.b * e, this.opacity)
        );
      },
      darker(e) {
        return (
          (e = e == null ? vs : Math.pow(vs, e)),
          new tt(this.r * e, this.g * e, this.b * e, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new tt(Or(this.r), Or(this.g), Or(this.b), hl(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: Em,
      formatHex: Em,
      formatHex8: WC,
      formatRgb: _m,
      toString: _m,
    })
  );
  function Em() {
    return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
  }
  function WC() {
    return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r(
      (isNaN(this.opacity) ? 1 : this.opacity) * 255
    )}`;
  }
  function _m() {
    const e = hl(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${Or(this.r)}, ${Or(this.g)}, ${Or(
      this.b
    )}${e === 1 ? ")" : `, ${e})`}`;
  }
  function hl(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function Or(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function _r(e) {
    return (e = Or(e)), (e < 16 ? "0" : "") + e.toString(16);
  }
  function km(e, t, n, r) {
    return (
      r <= 0
        ? (e = t = n = NaN)
        : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
      new Ft(e, t, n, r)
    );
  }
  function pw(e) {
    if (e instanceof Ft) return new Ft(e.h, e.s, e.l, e.opacity);
    if ((e instanceof Ms || (e = gs(e)), !e)) return new Ft();
    if (e instanceof Ft) return e;
    e = e.rgb();
    var t = e.r / 255,
      n = e.g / 255,
      r = e.b / 255,
      i = Math.min(t, n, r),
      o = Math.max(t, n, r),
      s = NaN,
      a = o - i,
      l = (o + i) / 2;
    return (
      a
        ? (t === o
            ? (s = (n - r) / a + (n < r) * 6)
            : n === o
            ? (s = (r - t) / a + 2)
            : (s = (t - n) / a + 4),
          (a /= l < 0.5 ? o + i : 2 - o - i),
          (s *= 60))
        : (a = l > 0 && l < 1 ? 0 : s),
      new Ft(s, a, l, e.opacity)
    );
  }
  function YC(e, t, n, r) {
    return arguments.length === 1 ? pw(e) : new Ft(e, t, n, r ?? 1);
  }
  function Ft(e, t, n, r) {
    (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
  }
  ip(
    Ft,
    YC,
    dw(Ms, {
      brighter(e) {
        return (
          (e = e == null ? pl : Math.pow(pl, e)),
          new Ft(this.h, this.s, this.l * e, this.opacity)
        );
      },
      darker(e) {
        return (
          (e = e == null ? vs : Math.pow(vs, e)),
          new Ft(this.h, this.s, this.l * e, this.opacity)
        );
      },
      rgb() {
        var e = (this.h % 360) + (this.h < 0) * 360,
          t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
          n = this.l,
          r = n + (n < 0.5 ? n : 1 - n) * t,
          i = 2 * n - r;
        return new tt(
          Uu(e >= 240 ? e - 240 : e + 120, i, r),
          Uu(e, i, r),
          Uu(e < 120 ? e + 240 : e - 120, i, r),
          this.opacity
        );
      },
      clamp() {
        return new Ft(Cm(this.h), sa(this.s), sa(this.l), hl(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const e = hl(this.opacity);
        return `${e === 1 ? "hsl(" : "hsla("}${Cm(this.h)}, ${
          sa(this.s) * 100
        }%, ${sa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
      },
    })
  );
  function Cm(e) {
    return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
  }
  function sa(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function Uu(e, t, n) {
    return (
      (e < 60
        ? t + ((n - t) * e) / 60
        : e < 180
        ? n
        : e < 240
        ? t + ((n - t) * (240 - e)) / 60
        : t) * 255
    );
  }
  const hw = (e) => () => e;
  function XC(e, t) {
    return function (n) {
      return e + n * t;
    };
  }
  function GC(e, t, n) {
    return (
      (e = Math.pow(e, n)),
      (t = Math.pow(t, n) - e),
      (n = 1 / n),
      function (r) {
        return Math.pow(e + r * t, n);
      }
    );
  }
  function KC(e) {
    return (e = +e) == 1
      ? mw
      : function (t, n) {
          return n - t ? GC(t, n, e) : hw(isNaN(t) ? n : t);
        };
  }
  function mw(e, t) {
    var n = t - e;
    return n ? XC(e, n) : hw(isNaN(e) ? t : e);
  }
  const Nm = (function e(t) {
    var n = KC(t);
    function r(i, o) {
      var s = n((i = pf(i)).r, (o = pf(o)).r),
        a = n(i.g, o.g),
        l = n(i.b, o.b),
        u = mw(i.opacity, o.opacity);
      return function (c) {
        return (
          (i.r = s(c)), (i.g = a(c)), (i.b = l(c)), (i.opacity = u(c)), i + ""
        );
      };
    }
    return (r.gamma = e), r;
  })(1);
  function Rn(e, t) {
    return (
      (e = +e),
      (t = +t),
      function (n) {
        return e * (1 - n) + t * n;
      }
    );
  }
  var hf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Qu = new RegExp(hf.source, "g");
  function ZC(e) {
    return function () {
      return e;
    };
  }
  function JC(e) {
    return function (t) {
      return e(t) + "";
    };
  }
  function eN(e, t) {
    var n = (hf.lastIndex = Qu.lastIndex = 0),
      r,
      i,
      o,
      s = -1,
      a = [],
      l = [];
    for (e = e + "", t = t + ""; (r = hf.exec(e)) && (i = Qu.exec(t)); )
      (o = i.index) > n &&
        ((o = t.slice(n, o)), a[s] ? (a[s] += o) : (a[++s] = o)),
        (r = r[0]) === (i = i[0])
          ? a[s]
            ? (a[s] += i)
            : (a[++s] = i)
          : ((a[++s] = null), l.push({ i: s, x: Rn(r, i) })),
        (n = Qu.lastIndex);
    return (
      n < t.length && ((o = t.slice(n)), a[s] ? (a[s] += o) : (a[++s] = o)),
      a.length < 2
        ? l[0]
          ? JC(l[0].x)
          : ZC(t)
        : ((t = l.length),
          function (u) {
            for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
            return a.join("");
          })
    );
  }
  var Om = 180 / Math.PI,
    mf = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    };
  function vw(e, t, n, r, i, o) {
    var s, a, l;
    return (
      (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
      (l = e * n + t * r) && ((n -= e * l), (r -= t * l)),
      (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (l /= a)),
      e * r < t * n && ((e = -e), (t = -t), (l = -l), (s = -s)),
      {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(t, e) * Om,
        skewX: Math.atan(l) * Om,
        scaleX: s,
        scaleY: a,
      }
    );
  }
  var aa;
  function tN(e) {
    const t = new (
      typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix
    )(e + "");
    return t.isIdentity ? mf : vw(t.a, t.b, t.c, t.d, t.e, t.f);
  }
  function nN(e) {
    return e == null ||
      (aa || (aa = document.createElementNS("http://www.w3.org/2000/svg", "g")),
      aa.setAttribute("transform", e),
      !(e = aa.transform.baseVal.consolidate()))
      ? mf
      : ((e = e.matrix), vw(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function yw(e, t, n, r) {
    function i(u) {
      return u.length ? u.pop() + " " : "";
    }
    function o(u, c, f, d, p, g) {
      if (u !== f || c !== d) {
        var y = p.push("translate(", null, t, null, n);
        g.push({ i: y - 4, x: Rn(u, f) }, { i: y - 2, x: Rn(c, d) });
      } else (f || d) && p.push("translate(" + f + t + d + n);
    }
    function s(u, c, f, d) {
      u !== c
        ? (u - c > 180 ? (c += 360) : c - u > 180 && (u += 360),
          d.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: Rn(u, c) }))
        : c && f.push(i(f) + "rotate(" + c + r);
    }
    function a(u, c, f, d) {
      u !== c
        ? d.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: Rn(u, c) })
        : c && f.push(i(f) + "skewX(" + c + r);
    }
    function l(u, c, f, d, p, g) {
      if (u !== f || c !== d) {
        var y = p.push(i(p) + "scale(", null, ",", null, ")");
        g.push({ i: y - 4, x: Rn(u, f) }, { i: y - 2, x: Rn(c, d) });
      } else
        (f !== 1 || d !== 1) && p.push(i(p) + "scale(" + f + "," + d + ")");
    }
    return function (u, c) {
      var f = [],
        d = [];
      return (
        (u = e(u)),
        (c = e(c)),
        o(u.translateX, u.translateY, c.translateX, c.translateY, f, d),
        s(u.rotate, c.rotate, f, d),
        a(u.skewX, c.skewX, f, d),
        l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d),
        (u = c = null),
        function (p) {
          for (var g = -1, y = d.length, S; ++g < y; ) f[(S = d[g]).i] = S.x(p);
          return f.join("");
        }
      );
    };
  }
  var rN = yw(tN, "px, ", "px)", "deg)"),
    iN = yw(nN, ", ", ")", ")"),
    oN = 1e-12;
  function Tm(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function sN(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function aN(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const lN = (function e(t, n, r) {
    function i(o, s) {
      var a = o[0],
        l = o[1],
        u = o[2],
        c = s[0],
        f = s[1],
        d = s[2],
        p = c - a,
        g = f - l,
        y = p * p + g * g,
        S,
        m;
      if (y < oN)
        (m = Math.log(d / u) / t),
          (S = function (k) {
            return [a + k * p, l + k * g, u * Math.exp(t * k * m)];
          });
      else {
        var h = Math.sqrt(y),
          v = (d * d - u * u + r * y) / (2 * u * n * h),
          w = (d * d - u * u - r * y) / (2 * d * n * h),
          E = Math.log(Math.sqrt(v * v + 1) - v),
          _ = Math.log(Math.sqrt(w * w + 1) - w);
        (m = (_ - E) / t),
          (S = function (k) {
            var N = k * m,
              P = Tm(E),
              T = (u / (n * h)) * (P * aN(t * N + E) - sN(E));
            return [a + T * p, l + T * g, (u * P) / Tm(t * N + E)];
          });
      }
      return (S.duration = (m * 1e3 * t) / Math.SQRT2), S;
    }
    return (
      (i.rho = function (o) {
        var s = Math.max(0.001, +o),
          a = s * s,
          l = a * a;
        return e(s, a, l);
      }),
      i
    );
  })(Math.SQRT2, 2, 4);
  var Hi = 0,
    jo = 0,
    wo = 0,
    gw = 1e3,
    ml,
    Mo,
    vl = 0,
    Ar = 0,
    Yl = 0,
    ws = typeof performance == "object" && performance.now ? performance : Date,
    ww =
      typeof window == "object" && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (e) {
            setTimeout(e, 17);
          };
  function op() {
    return Ar || (ww(uN), (Ar = ws.now() + Yl));
  }
  function uN() {
    Ar = 0;
  }
  function yl() {
    this._call = this._time = this._next = null;
  }
  yl.prototype = xw.prototype = {
    constructor: yl,
    restart: function (e, t, n) {
      if (typeof e != "function")
        throw new TypeError("callback is not a function");
      (n = (n == null ? op() : +n) + (t == null ? 0 : +t)),
        !this._next &&
          Mo !== this &&
          (Mo ? (Mo._next = this) : (ml = this), (Mo = this)),
        (this._call = e),
        (this._time = n),
        vf();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), vf());
    },
  };
  function xw(e, t, n) {
    var r = new yl();
    return r.restart(e, t, n), r;
  }
  function cN() {
    op(), ++Hi;
    for (var e = ml, t; e; )
      (t = Ar - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
    --Hi;
  }
  function Dm() {
    (Ar = (vl = ws.now()) + Yl), (Hi = jo = 0);
    try {
      cN();
    } finally {
      (Hi = 0), dN(), (Ar = 0);
    }
  }
  function fN() {
    var e = ws.now(),
      t = e - vl;
    t > gw && ((Yl -= t), (vl = e));
  }
  function dN() {
    for (var e, t = ml, n, r = 1 / 0; t; )
      t._call
        ? (r > t._time && (r = t._time), (e = t), (t = t._next))
        : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (ml = n)));
    (Mo = e), vf(r);
  }
  function vf(e) {
    if (!Hi) {
      jo && (jo = clearTimeout(jo));
      var t = e - Ar;
      t > 24
        ? (e < 1 / 0 && (jo = setTimeout(Dm, e - ws.now() - Yl)),
          wo && (wo = clearInterval(wo)))
        : (wo || ((vl = ws.now()), (wo = setInterval(fN, gw))),
          (Hi = 1),
          ww(Dm));
    }
  }
  function Pm(e, t, n) {
    var r = new yl();
    return (
      (t = t == null ? 0 : +t),
      r.restart(
        (i) => {
          r.stop(), e(i + t);
        },
        t,
        n
      ),
      r
    );
  }
  var pN = ql("start", "end", "cancel", "interrupt"),
    hN = [],
    Sw = 0,
    Rm = 1,
    yf = 2,
    Ta = 3,
    jm = 4,
    gf = 5,
    Da = 6;
  function Xl(e, t, n, r, i, o) {
    var s = e.__transition;
    if (!s) e.__transition = {};
    else if (n in s) return;
    mN(e, n, {
      name: t,
      index: r,
      group: i,
      on: pN,
      tween: hN,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: Sw,
    });
  }
  function sp(e, t) {
    var n = Ht(e, t);
    if (n.state > Sw) throw new Error("too late; already scheduled");
    return n;
  }
  function sn(e, t) {
    var n = Ht(e, t);
    if (n.state > Ta) throw new Error("too late; already running");
    return n;
  }
  function Ht(e, t) {
    var n = e.__transition;
    if (!n || !(n = n[t])) throw new Error("transition not found");
    return n;
  }
  function mN(e, t, n) {
    var r = e.__transition,
      i;
    (r[t] = n), (n.timer = xw(o, 0, n.time));
    function o(u) {
      (n.state = Rm),
        n.timer.restart(s, n.delay, n.time),
        n.delay <= u && s(u - n.delay);
    }
    function s(u) {
      var c, f, d, p;
      if (n.state !== Rm) return l();
      for (c in r)
        if (((p = r[c]), p.name === n.name)) {
          if (p.state === Ta) return Pm(s);
          p.state === jm
            ? ((p.state = Da),
              p.timer.stop(),
              p.on.call("interrupt", e, e.__data__, p.index, p.group),
              delete r[c])
            : +c < t &&
              ((p.state = Da),
              p.timer.stop(),
              p.on.call("cancel", e, e.__data__, p.index, p.group),
              delete r[c]);
        }
      if (
        (Pm(function () {
          n.state === Ta &&
            ((n.state = jm), n.timer.restart(a, n.delay, n.time), a(u));
        }),
        (n.state = yf),
        n.on.call("start", e, e.__data__, n.index, n.group),
        n.state === yf)
      ) {
        for (
          n.state = Ta, i = new Array((d = n.tween.length)), c = 0, f = -1;
          c < d;
          ++c
        )
          (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) &&
            (i[++f] = p);
        i.length = f + 1;
      }
    }
    function a(u) {
      for (
        var c =
            u < n.duration
              ? n.ease.call(null, u / n.duration)
              : (n.timer.restart(l), (n.state = gf), 1),
          f = -1,
          d = i.length;
        ++f < d;

      )
        i[f].call(e, c);
      n.state === gf &&
        (n.on.call("end", e, e.__data__, n.index, n.group), l());
    }
    function l() {
      (n.state = Da), n.timer.stop(), delete r[t];
      for (var u in r) return;
      delete e.__transition;
    }
  }
  function Pa(e, t) {
    var n = e.__transition,
      r,
      i,
      o = !0,
      s;
    if (n) {
      t = t == null ? null : t + "";
      for (s in n) {
        if ((r = n[s]).name !== t) {
          o = !1;
          continue;
        }
        (i = r.state > yf && r.state < gf),
          (r.state = Da),
          r.timer.stop(),
          r.on.call(
            i ? "interrupt" : "cancel",
            e,
            e.__data__,
            r.index,
            r.group
          ),
          delete n[s];
      }
      o && delete e.__transition;
    }
  }
  function vN(e) {
    return this.each(function () {
      Pa(this, e);
    });
  }
  function yN(e, t) {
    var n, r;
    return function () {
      var i = sn(this, e),
        o = i.tween;
      if (o !== n) {
        r = n = o;
        for (var s = 0, a = r.length; s < a; ++s)
          if (r[s].name === t) {
            (r = r.slice()), r.splice(s, 1);
            break;
          }
      }
      i.tween = r;
    };
  }
  function gN(e, t, n) {
    var r, i;
    if (typeof n != "function") throw new Error();
    return function () {
      var o = sn(this, e),
        s = o.tween;
      if (s !== r) {
        i = (r = s).slice();
        for (var a = { name: t, value: n }, l = 0, u = i.length; l < u; ++l)
          if (i[l].name === t) {
            i[l] = a;
            break;
          }
        l === u && i.push(a);
      }
      o.tween = i;
    };
  }
  function wN(e, t) {
    var n = this._id;
    if (((e += ""), arguments.length < 2)) {
      for (var r = Ht(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
        if ((s = r[i]).name === e) return s.value;
      return null;
    }
    return this.each((t == null ? yN : gN)(n, e, t));
  }
  function ap(e, t, n) {
    var r = e._id;
    return (
      e.each(function () {
        var i = sn(this, r);
        (i.value || (i.value = {}))[t] = n.apply(this, arguments);
      }),
      function (i) {
        return Ht(i, r).value[t];
      }
    );
  }
  function bw(e, t) {
    var n;
    return (
      typeof t == "number"
        ? Rn
        : t instanceof gs
        ? Nm
        : (n = gs(t))
        ? ((t = n), Nm)
        : eN
    )(e, t);
  }
  function xN(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function SN(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function bN(e, t, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var s = this.getAttribute(e);
      return s === i ? null : s === r ? o : (o = t((r = s), n));
    };
  }
  function EN(e, t, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var s = this.getAttributeNS(e.space, e.local);
      return s === i ? null : s === r ? o : (o = t((r = s), n));
    };
  }
  function _N(e, t, n) {
    var r, i, o;
    return function () {
      var s,
        a = n(this),
        l;
      return a == null
        ? void this.removeAttribute(e)
        : ((s = this.getAttribute(e)),
          (l = a + ""),
          s === l
            ? null
            : s === r && l === i
            ? o
            : ((i = l), (o = t((r = s), a))));
    };
  }
  function kN(e, t, n) {
    var r, i, o;
    return function () {
      var s,
        a = n(this),
        l;
      return a == null
        ? void this.removeAttributeNS(e.space, e.local)
        : ((s = this.getAttributeNS(e.space, e.local)),
          (l = a + ""),
          s === l
            ? null
            : s === r && l === i
            ? o
            : ((i = l), (o = t((r = s), a))));
    };
  }
  function CN(e, t) {
    var n = Wl(e),
      r = n === "transform" ? iN : bw;
    return this.attrTween(
      e,
      typeof t == "function"
        ? (n.local ? kN : _N)(n, r, ap(this, "attr." + e, t))
        : t == null
        ? (n.local ? SN : xN)(n)
        : (n.local ? EN : bN)(n, r, t)
    );
  }
  function NN(e, t) {
    return function (n) {
      this.setAttribute(e, t.call(this, n));
    };
  }
  function ON(e, t) {
    return function (n) {
      this.setAttributeNS(e.space, e.local, t.call(this, n));
    };
  }
  function TN(e, t) {
    var n, r;
    function i() {
      var o = t.apply(this, arguments);
      return o !== r && (n = (r = o) && ON(e, o)), n;
    }
    return (i._value = t), i;
  }
  function DN(e, t) {
    var n, r;
    function i() {
      var o = t.apply(this, arguments);
      return o !== r && (n = (r = o) && NN(e, o)), n;
    }
    return (i._value = t), i;
  }
  function PN(e, t) {
    var n = "attr." + e;
    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
    if (t == null) return this.tween(n, null);
    if (typeof t != "function") throw new Error();
    var r = Wl(e);
    return this.tween(n, (r.local ? TN : DN)(r, t));
  }
  function RN(e, t) {
    return function () {
      sp(this, e).delay = +t.apply(this, arguments);
    };
  }
  function jN(e, t) {
    return (
      (t = +t),
      function () {
        sp(this, e).delay = t;
      }
    );
  }
  function MN(e) {
    var t = this._id;
    return arguments.length
      ? this.each((typeof e == "function" ? RN : jN)(t, e))
      : Ht(this.node(), t).delay;
  }
  function IN(e, t) {
    return function () {
      sn(this, e).duration = +t.apply(this, arguments);
    };
  }
  function LN(e, t) {
    return (
      (t = +t),
      function () {
        sn(this, e).duration = t;
      }
    );
  }
  function AN(e) {
    var t = this._id;
    return arguments.length
      ? this.each((typeof e == "function" ? IN : LN)(t, e))
      : Ht(this.node(), t).duration;
  }
  function FN(e, t) {
    if (typeof t != "function") throw new Error();
    return function () {
      sn(this, e).ease = t;
    };
  }
  function zN(e) {
    var t = this._id;
    return arguments.length ? this.each(FN(t, e)) : Ht(this.node(), t).ease;
  }
  function $N(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      if (typeof n != "function") throw new Error();
      sn(this, e).ease = n;
    };
  }
  function BN(e) {
    if (typeof e != "function") throw new Error();
    return this.each($N(this._id, e));
  }
  function VN(e) {
    typeof e != "function" && (e = ew(e));
    for (
      var t = this._groups, n = t.length, r = new Array(n), i = 0;
      i < n;
      ++i
    )
      for (var o = t[i], s = o.length, a = (r[i] = []), l, u = 0; u < s; ++u)
        (l = o[u]) && e.call(l, l.__data__, u, o) && a.push(l);
    return new Sn(r, this._parents, this._name, this._id);
  }
  function HN(e) {
    if (e._id !== this._id) throw new Error();
    for (
      var t = this._groups,
        n = e._groups,
        r = t.length,
        i = n.length,
        o = Math.min(r, i),
        s = new Array(r),
        a = 0;
      a < o;
      ++a
    )
      for (
        var l = t[a],
          u = n[a],
          c = l.length,
          f = (s[a] = new Array(c)),
          d,
          p = 0;
        p < c;
        ++p
      )
        (d = l[p] || u[p]) && (f[p] = d);
    for (; a < r; ++a) s[a] = t[a];
    return new Sn(s, this._parents, this._name, this._id);
  }
  function UN(e) {
    return (e + "")
      .trim()
      .split(/^|\s+/)
      .every(function (t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
      });
  }
  function QN(e, t, n) {
    var r,
      i,
      o = UN(t) ? sp : sn;
    return function () {
      var s = o(this, e),
        a = s.on;
      a !== r && (i = (r = a).copy()).on(t, n), (s.on = i);
    };
  }
  function qN(e, t) {
    var n = this._id;
    return arguments.length < 2
      ? Ht(this.node(), n).on.on(e)
      : this.each(QN(n, e, t));
  }
  function WN(e) {
    return function () {
      var t = this.parentNode;
      for (var n in this.__transition) if (+n !== e) return;
      t && t.removeChild(this);
    };
  }
  function YN() {
    return this.on("end.remove", WN(this._id));
  }
  function XN(e) {
    var t = this._name,
      n = this._id;
    typeof e != "function" && (e = np(e));
    for (
      var r = this._groups, i = r.length, o = new Array(i), s = 0;
      s < i;
      ++s
    )
      for (
        var a = r[s], l = a.length, u = (o[s] = new Array(l)), c, f, d = 0;
        d < l;
        ++d
      )
        (c = a[d]) &&
          (f = e.call(c, c.__data__, d, a)) &&
          ("__data__" in c && (f.__data__ = c.__data__),
          (u[d] = f),
          Xl(u[d], t, n, d, u, Ht(c, n)));
    return new Sn(o, this._parents, t, n);
  }
  function GN(e) {
    var t = this._name,
      n = this._id;
    typeof e != "function" && (e = J0(e));
    for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
      for (var l = r[a], u = l.length, c, f = 0; f < u; ++f)
        if ((c = l[f])) {
          for (
            var d = e.call(c, c.__data__, f, l),
              p,
              g = Ht(c, n),
              y = 0,
              S = d.length;
            y < S;
            ++y
          )
            (p = d[y]) && Xl(p, t, n, y, d, g);
          o.push(d), s.push(c);
        }
    return new Sn(o, s, t, n);
  }
  var KN = js.prototype.constructor;
  function ZN() {
    return new KN(this._groups, this._parents);
  }
  function JN(e, t) {
    var n, r, i;
    return function () {
      var o = Vi(this, e),
        s = (this.style.removeProperty(e), Vi(this, e));
      return o === s
        ? null
        : o === n && s === r
        ? i
        : (i = t((n = o), (r = s)));
    };
  }
  function Ew(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function eO(e, t, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var s = Vi(this, e);
      return s === i ? null : s === r ? o : (o = t((r = s), n));
    };
  }
  function tO(e, t, n) {
    var r, i, o;
    return function () {
      var s = Vi(this, e),
        a = n(this),
        l = a + "";
      return (
        a == null && (l = a = (this.style.removeProperty(e), Vi(this, e))),
        s === l ? null : s === r && l === i ? o : ((i = l), (o = t((r = s), a)))
      );
    };
  }
  function nO(e, t) {
    var n,
      r,
      i,
      o = "style." + t,
      s = "end." + o,
      a;
    return function () {
      var l = sn(this, e),
        u = l.on,
        c = l.value[o] == null ? a || (a = Ew(t)) : void 0;
      (u !== n || i !== c) && (r = (n = u).copy()).on(s, (i = c)), (l.on = r);
    };
  }
  function rO(e, t, n) {
    var r = (e += "") == "transform" ? rN : bw;
    return t == null
      ? this.styleTween(e, JN(e, r)).on("end.style." + e, Ew(e))
      : typeof t == "function"
      ? this.styleTween(e, tO(e, r, ap(this, "style." + e, t))).each(
          nO(this._id, e)
        )
      : this.styleTween(e, eO(e, r, t), n).on("end.style." + e, null);
  }
  function iO(e, t, n) {
    return function (r) {
      this.style.setProperty(e, t.call(this, r), n);
    };
  }
  function oO(e, t, n) {
    var r, i;
    function o() {
      var s = t.apply(this, arguments);
      return s !== i && (r = (i = s) && iO(e, s, n)), r;
    }
    return (o._value = t), o;
  }
  function sO(e, t, n) {
    var r = "style." + (e += "");
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (t == null) return this.tween(r, null);
    if (typeof t != "function") throw new Error();
    return this.tween(r, oO(e, t, n ?? ""));
  }
  function aO(e) {
    return function () {
      this.textContent = e;
    };
  }
  function lO(e) {
    return function () {
      var t = e(this);
      this.textContent = t ?? "";
    };
  }
  function uO(e) {
    return this.tween(
      "text",
      typeof e == "function"
        ? lO(ap(this, "text", e))
        : aO(e == null ? "" : e + "")
    );
  }
  function cO(e) {
    return function (t) {
      this.textContent = e.call(this, t);
    };
  }
  function fO(e) {
    var t, n;
    function r() {
      var i = e.apply(this, arguments);
      return i !== n && (t = (n = i) && cO(i)), t;
    }
    return (r._value = e), r;
  }
  function dO(e) {
    var t = "text";
    if (arguments.length < 1) return (t = this.tween(t)) && t._value;
    if (e == null) return this.tween(t, null);
    if (typeof e != "function") throw new Error();
    return this.tween(t, fO(e));
  }
  function pO() {
    for (
      var e = this._name,
        t = this._id,
        n = _w(),
        r = this._groups,
        i = r.length,
        o = 0;
      o < i;
      ++o
    )
      for (var s = r[o], a = s.length, l, u = 0; u < a; ++u)
        if ((l = s[u])) {
          var c = Ht(l, t);
          Xl(l, e, n, u, s, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease,
          });
        }
    return new Sn(r, this._parents, e, n);
  }
  function hO() {
    var e,
      t,
      n = this,
      r = n._id,
      i = n.size();
    return new Promise(function (o, s) {
      var a = { value: s },
        l = {
          value: function () {
            --i === 0 && o();
          },
        };
      n.each(function () {
        var u = sn(this, r),
          c = u.on;
        c !== e &&
          ((t = (e = c).copy()),
          t._.cancel.push(a),
          t._.interrupt.push(a),
          t._.end.push(l)),
          (u.on = t);
      }),
        i === 0 && o();
    });
  }
  var mO = 0;
  function Sn(e, t, n, r) {
    (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
  }
  function _w() {
    return ++mO;
  }
  var cn = js.prototype;
  Sn.prototype = {
    constructor: Sn,
    select: XN,
    selectAll: GN,
    selectChild: cn.selectChild,
    selectChildren: cn.selectChildren,
    filter: VN,
    merge: HN,
    selection: ZN,
    transition: pO,
    call: cn.call,
    nodes: cn.nodes,
    node: cn.node,
    size: cn.size,
    empty: cn.empty,
    each: cn.each,
    on: qN,
    attr: CN,
    attrTween: PN,
    style: rO,
    styleTween: sO,
    text: uO,
    textTween: dO,
    remove: YN,
    tween: wN,
    delay: MN,
    duration: AN,
    ease: zN,
    easeVarying: BN,
    end: hO,
    [Symbol.iterator]: cn[Symbol.iterator],
  };
  function vO(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var yO = { time: null, delay: 0, duration: 250, ease: vO };
  function gO(e, t) {
    for (var n; !(n = e.__transition) || !(n = n[t]); )
      if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
    return n;
  }
  function wO(e) {
    var t, n;
    e instanceof Sn
      ? ((t = e._id), (e = e._name))
      : ((t = _w()), ((n = yO).time = op()), (e = e == null ? null : e + ""));
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var s = r[o], a = s.length, l, u = 0; u < a; ++u)
        (l = s[u]) && Xl(l, e, t, u, s, n || gO(l, t));
    return new Sn(r, this._parents, e, t);
  }
  js.prototype.interrupt = vN;
  js.prototype.transition = wO;
  const la = (e) => () => e;
  function xO(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: t, enumerable: !0, configurable: !0 },
      target: { value: n, enumerable: !0, configurable: !0 },
      transform: { value: r, enumerable: !0, configurable: !0 },
      _: { value: i },
    });
  }
  function mn(e, t, n) {
    (this.k = e), (this.x = t), (this.y = n);
  }
  mn.prototype = {
    constructor: mn,
    scale: function (e) {
      return e === 1 ? this : new mn(this.k * e, this.x, this.y);
    },
    translate: function (e, t) {
      return (e === 0) & (t === 0)
        ? this
        : new mn(this.k, this.x + this.k * e, this.y + this.k * t);
    },
    apply: function (e) {
      return [e[0] * this.k + this.x, e[1] * this.k + this.y];
    },
    applyX: function (e) {
      return e * this.k + this.x;
    },
    applyY: function (e) {
      return e * this.k + this.y;
    },
    invert: function (e) {
      return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
    },
    invertX: function (e) {
      return (e - this.x) / this.k;
    },
    invertY: function (e) {
      return (e - this.y) / this.k;
    },
    rescaleX: function (e) {
      return e
        .copy()
        .domain(e.range().map(this.invertX, this).map(e.invert, e));
    },
    rescaleY: function (e) {
      return e
        .copy()
        .domain(e.range().map(this.invertY, this).map(e.invert, e));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  };
  var Zn = new mn(1, 0, 0);
  mn.prototype;
  function qu(e) {
    e.stopImmediatePropagation();
  }
  function xo(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function SO(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button;
  }
  function bO() {
    var e = this;
    return e instanceof SVGElement
      ? ((e = e.ownerSVGElement || e),
        e.hasAttribute("viewBox")
          ? ((e = e.viewBox.baseVal),
            [
              [e.x, e.y],
              [e.x + e.width, e.y + e.height],
            ])
          : [
              [0, 0],
              [e.width.baseVal.value, e.height.baseVal.value],
            ])
      : [
          [0, 0],
          [e.clientWidth, e.clientHeight],
        ];
  }
  function Mm() {
    return this.__zoom || Zn;
  }
  function EO(e) {
    return (
      -e.deltaY *
      (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
      (e.ctrlKey ? 10 : 1)
    );
  }
  function _O() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function kO(e, t, n) {
    var r = e.invertX(t[0][0]) - n[0][0],
      i = e.invertX(t[1][0]) - n[1][0],
      o = e.invertY(t[0][1]) - n[0][1],
      s = e.invertY(t[1][1]) - n[1][1];
    return e.translate(
      i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
      s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
    );
  }
  function CO() {
    var e = SO,
      t = bO,
      n = kO,
      r = EO,
      i = _O,
      o = [0, 1 / 0],
      s = [
        [-1 / 0, -1 / 0],
        [1 / 0, 1 / 0],
      ],
      a = 250,
      l = lN,
      u = ql("start", "zoom", "end"),
      c,
      f,
      d,
      p = 500,
      g = 150,
      y = 0,
      S = 10;
    function m(C) {
      C.property("__zoom", Mm)
        .on("wheel.zoom", N, { passive: !1 })
        .on("mousedown.zoom", P)
        .on("dblclick.zoom", T)
        .filter(i)
        .on("touchstart.zoom", F)
        .on("touchmove.zoom", z)
        .on("touchend.zoom touchcancel.zoom", R)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    (m.transform = function (C, I, j, D) {
      var O = C.selection ? C.selection() : C;
      O.property("__zoom", Mm),
        C !== O
          ? E(C, I, j, D)
          : O.interrupt().each(function () {
              _(this, arguments)
                .event(D)
                .start()
                .zoom(
                  null,
                  typeof I == "function" ? I.apply(this, arguments) : I
                )
                .end();
            });
    }),
      (m.scaleBy = function (C, I, j, D) {
        m.scaleTo(
          C,
          function () {
            var O = this.__zoom.k,
              M = typeof I == "function" ? I.apply(this, arguments) : I;
            return O * M;
          },
          j,
          D
        );
      }),
      (m.scaleTo = function (C, I, j, D) {
        m.transform(
          C,
          function () {
            var O = t.apply(this, arguments),
              M = this.__zoom,
              L =
                j == null
                  ? w(O)
                  : typeof j == "function"
                  ? j.apply(this, arguments)
                  : j,
              V = M.invert(L),
              $ = typeof I == "function" ? I.apply(this, arguments) : I;
            return n(v(h(M, $), L, V), O, s);
          },
          j,
          D
        );
      }),
      (m.translateBy = function (C, I, j, D) {
        m.transform(
          C,
          function () {
            return n(
              this.__zoom.translate(
                typeof I == "function" ? I.apply(this, arguments) : I,
                typeof j == "function" ? j.apply(this, arguments) : j
              ),
              t.apply(this, arguments),
              s
            );
          },
          null,
          D
        );
      }),
      (m.translateTo = function (C, I, j, D, O) {
        m.transform(
          C,
          function () {
            var M = t.apply(this, arguments),
              L = this.__zoom,
              V =
                D == null
                  ? w(M)
                  : typeof D == "function"
                  ? D.apply(this, arguments)
                  : D;
            return n(
              Zn.translate(V[0], V[1])
                .scale(L.k)
                .translate(
                  typeof I == "function" ? -I.apply(this, arguments) : -I,
                  typeof j == "function" ? -j.apply(this, arguments) : -j
                ),
              M,
              s
            );
          },
          D,
          O
        );
      });
    function h(C, I) {
      return (
        (I = Math.max(o[0], Math.min(o[1], I))),
        I === C.k ? C : new mn(I, C.x, C.y)
      );
    }
    function v(C, I, j) {
      var D = I[0] - j[0] * C.k,
        O = I[1] - j[1] * C.k;
      return D === C.x && O === C.y ? C : new mn(C.k, D, O);
    }
    function w(C) {
      return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
    }
    function E(C, I, j, D) {
      C.on("start.zoom", function () {
        _(this, arguments).event(D).start();
      })
        .on("interrupt.zoom end.zoom", function () {
          _(this, arguments).event(D).end();
        })
        .tween("zoom", function () {
          var O = this,
            M = arguments,
            L = _(O, M).event(D),
            V = t.apply(O, M),
            $ = j == null ? w(V) : typeof j == "function" ? j.apply(O, M) : j,
            Y = Math.max(V[1][0] - V[0][0], V[1][1] - V[0][1]),
            U = O.__zoom,
            G = typeof I == "function" ? I.apply(O, M) : I,
            K = l(U.invert($).concat(Y / U.k), G.invert($).concat(Y / G.k));
          return function (J) {
            if (J === 1) J = G;
            else {
              var ne = K(J),
                he = Y / ne[2];
              J = new mn(he, $[0] - ne[0] * he, $[1] - ne[1] * he);
            }
            L.zoom(null, J);
          };
        });
    }
    function _(C, I, j) {
      return (!j && C.__zooming) || new k(C, I);
    }
    function k(C, I) {
      (this.that = C),
        (this.args = I),
        (this.active = 0),
        (this.sourceEvent = null),
        (this.extent = t.apply(C, I)),
        (this.taps = 0);
    }
    k.prototype = {
      event: function (C) {
        return C && (this.sourceEvent = C), this;
      },
      start: function () {
        return (
          ++this.active === 1 &&
            ((this.that.__zooming = this), this.emit("start")),
          this
        );
      },
      zoom: function (C, I) {
        return (
          this.mouse &&
            C !== "mouse" &&
            (this.mouse[1] = I.invert(this.mouse[0])),
          this.touch0 &&
            C !== "touch" &&
            (this.touch0[1] = I.invert(this.touch0[0])),
          this.touch1 &&
            C !== "touch" &&
            (this.touch1[1] = I.invert(this.touch1[0])),
          (this.that.__zoom = I),
          this.emit("zoom"),
          this
        );
      },
      end: function () {
        return (
          --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
          this
        );
      },
      emit: function (C) {
        var I = At(this.that).datum();
        u.call(
          C,
          this.that,
          new xO(C, {
            sourceEvent: this.sourceEvent,
            target: m,
            type: C,
            transform: this.that.__zoom,
            dispatch: u,
          }),
          I
        );
      },
    };
    function N(C, ...I) {
      if (!e.apply(this, arguments)) return;
      var j = _(this, I).event(C),
        D = this.__zoom,
        O = Math.max(
          o[0],
          Math.min(o[1], D.k * Math.pow(2, r.apply(this, arguments)))
        ),
        M = Kt(C);
      if (j.wheel)
        (j.mouse[0][0] !== M[0] || j.mouse[0][1] !== M[1]) &&
          (j.mouse[1] = D.invert((j.mouse[0] = M))),
          clearTimeout(j.wheel);
      else {
        if (D.k === O) return;
        (j.mouse = [M, D.invert(M)]), Pa(this), j.start();
      }
      xo(C),
        (j.wheel = setTimeout(L, g)),
        j.zoom("mouse", n(v(h(D, O), j.mouse[0], j.mouse[1]), j.extent, s));
      function L() {
        (j.wheel = null), j.end();
      }
    }
    function P(C, ...I) {
      if (d || !e.apply(this, arguments)) return;
      var j = C.currentTarget,
        D = _(this, I, !0).event(C),
        O = At(C.view).on("mousemove.zoom", $, !0).on("mouseup.zoom", Y, !0),
        M = Kt(C, j),
        L = C.clientX,
        V = C.clientY;
      cw(C.view),
        qu(C),
        (D.mouse = [M, this.__zoom.invert(M)]),
        Pa(this),
        D.start();
      function $(U) {
        if ((xo(U), !D.moved)) {
          var G = U.clientX - L,
            K = U.clientY - V;
          D.moved = G * G + K * K > y;
        }
        D.event(U).zoom(
          "mouse",
          n(v(D.that.__zoom, (D.mouse[0] = Kt(U, j)), D.mouse[1]), D.extent, s)
        );
      }
      function Y(U) {
        O.on("mousemove.zoom mouseup.zoom", null),
          fw(U.view, D.moved),
          xo(U),
          D.event(U).end();
      }
    }
    function T(C, ...I) {
      if (e.apply(this, arguments)) {
        var j = this.__zoom,
          D = Kt(C.changedTouches ? C.changedTouches[0] : C, this),
          O = j.invert(D),
          M = j.k * (C.shiftKey ? 0.5 : 2),
          L = n(v(h(j, M), D, O), t.apply(this, I), s);
        xo(C),
          a > 0
            ? At(this).transition().duration(a).call(E, L, D, C)
            : At(this).call(m.transform, L, D, C);
      }
    }
    function F(C, ...I) {
      if (e.apply(this, arguments)) {
        var j = C.touches,
          D = j.length,
          O = _(this, I, C.changedTouches.length === D).event(C),
          M,
          L,
          V,
          $;
        for (qu(C), L = 0; L < D; ++L)
          (V = j[L]),
            ($ = Kt(V, this)),
            ($ = [$, this.__zoom.invert($), V.identifier]),
            O.touch0
              ? !O.touch1 &&
                O.touch0[2] !== $[2] &&
                ((O.touch1 = $), (O.taps = 0))
              : ((O.touch0 = $), (M = !0), (O.taps = 1 + !!c));
        c && (c = clearTimeout(c)),
          M &&
            (O.taps < 2 &&
              ((f = $[0]),
              (c = setTimeout(function () {
                c = null;
              }, p))),
            Pa(this),
            O.start());
      }
    }
    function z(C, ...I) {
      if (this.__zooming) {
        var j = _(this, I).event(C),
          D = C.changedTouches,
          O = D.length,
          M,
          L,
          V,
          $;
        for (xo(C), M = 0; M < O; ++M)
          (L = D[M]),
            (V = Kt(L, this)),
            j.touch0 && j.touch0[2] === L.identifier
              ? (j.touch0[0] = V)
              : j.touch1 && j.touch1[2] === L.identifier && (j.touch1[0] = V);
        if (((L = j.that.__zoom), j.touch1)) {
          var Y = j.touch0[0],
            U = j.touch0[1],
            G = j.touch1[0],
            K = j.touch1[1],
            J = (J = G[0] - Y[0]) * J + (J = G[1] - Y[1]) * J,
            ne = (ne = K[0] - U[0]) * ne + (ne = K[1] - U[1]) * ne;
          (L = h(L, Math.sqrt(J / ne))),
            (V = [(Y[0] + G[0]) / 2, (Y[1] + G[1]) / 2]),
            ($ = [(U[0] + K[0]) / 2, (U[1] + K[1]) / 2]);
        } else if (j.touch0) (V = j.touch0[0]), ($ = j.touch0[1]);
        else return;
        j.zoom("touch", n(v(L, V, $), j.extent, s));
      }
    }
    function R(C, ...I) {
      if (this.__zooming) {
        var j = _(this, I).event(C),
          D = C.changedTouches,
          O = D.length,
          M,
          L;
        for (
          qu(C),
            d && clearTimeout(d),
            d = setTimeout(function () {
              d = null;
            }, p),
            M = 0;
          M < O;
          ++M
        )
          (L = D[M]),
            j.touch0 && j.touch0[2] === L.identifier
              ? delete j.touch0
              : j.touch1 && j.touch1[2] === L.identifier && delete j.touch1;
        if (
          (j.touch1 && !j.touch0 && ((j.touch0 = j.touch1), delete j.touch1),
          j.touch0)
        )
          j.touch0[1] = this.__zoom.invert(j.touch0[0]);
        else if (
          (j.end(),
          j.taps === 2 &&
            ((L = Kt(L, this)), Math.hypot(f[0] - L[0], f[1] - L[1]) < S))
        ) {
          var V = At(this).on("dblclick.zoom");
          V && V.apply(this, arguments);
        }
      }
    }
    return (
      (m.wheelDelta = function (C) {
        return arguments.length
          ? ((r = typeof C == "function" ? C : la(+C)), m)
          : r;
      }),
      (m.filter = function (C) {
        return arguments.length
          ? ((e = typeof C == "function" ? C : la(!!C)), m)
          : e;
      }),
      (m.touchable = function (C) {
        return arguments.length
          ? ((i = typeof C == "function" ? C : la(!!C)), m)
          : i;
      }),
      (m.extent = function (C) {
        return arguments.length
          ? ((t =
              typeof C == "function"
                ? C
                : la([
                    [+C[0][0], +C[0][1]],
                    [+C[1][0], +C[1][1]],
                  ])),
            m)
          : t;
      }),
      (m.scaleExtent = function (C) {
        return arguments.length
          ? ((o[0] = +C[0]), (o[1] = +C[1]), m)
          : [o[0], o[1]];
      }),
      (m.translateExtent = function (C) {
        return arguments.length
          ? ((s[0][0] = +C[0][0]),
            (s[1][0] = +C[1][0]),
            (s[0][1] = +C[0][1]),
            (s[1][1] = +C[1][1]),
            m)
          : [
              [s[0][0], s[0][1]],
              [s[1][0], s[1][1]],
            ];
      }),
      (m.constrain = function (C) {
        return arguments.length ? ((n = C), m) : n;
      }),
      (m.duration = function (C) {
        return arguments.length ? ((a = +C), m) : a;
      }),
      (m.interpolate = function (C) {
        return arguments.length ? ((l = C), m) : l;
      }),
      (m.on = function () {
        var C = u.on.apply(u, arguments);
        return C === u ? m : C;
      }),
      (m.clickDistance = function (C) {
        return arguments.length ? ((y = (C = +C) * C), m) : Math.sqrt(y);
      }),
      (m.tapDistance = function (C) {
        return arguments.length ? ((S = +C), m) : S;
      }),
      m
    );
  }
  const Gl = b.createContext(null),
    NO = Gl.Provider,
    nr = {
      error001: () =>
        "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
      error002: () =>
        "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
      error003: (e) =>
        `Node type "${e}" not found. Using fallback type "default".`,
      error004: () =>
        "The React Flow parent container needs a width and a height to render the graph.",
      error005: () => "Only child nodes can use a parent extent.",
      error006: () => "Can't create edge. An edge needs a source and a target.",
      error007: (e) => `The old edge with id=${e} does not exist.`,
      error009: (e) => `Marker type "${e}" doesn't exist.`,
      error008: (e, t) =>
        `Couldn't create edge for ${e ? "target" : "source"} handle id: "${
          e ? t.targetHandle : t.sourceHandle
        }", edge id: ${t.id}.`,
      error010: () =>
        "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
      error011: (e) =>
        `Edge type "${e}" not found. Using fallback type "default".`,
    },
    kw = nr.error001();
  function ce(e, t) {
    const n = b.useContext(Gl);
    if (n === null) throw new Error(kw);
    return Y_(n, e, t);
  }
  const ze = () => {
      const e = b.useContext(Gl);
      if (e === null) throw new Error(kw);
      return b.useMemo(
        () => ({
          getState: e.getState,
          setState: e.setState,
          subscribe: e.subscribe,
          destroy: e.destroy,
        }),
        [e]
      );
    },
    OO = (e) => (e.userSelectionActive ? "none" : "all");
  function lp({ position: e, children: t, className: n, style: r, ...i }) {
    const o = ce(OO),
      s = `${e}`.split("-");
    return x.jsx("div", {
      className: Ge(["react-flow__panel", n, ...s]),
      style: { ...r, pointerEvents: o },
      ...i,
      children: t,
    });
  }
  function TO({ proOptions: e, position: t = "bottom-right" }) {
    return e != null && e.hideAttribution
      ? null
      : x.jsx(lp, {
          "position": t,
          "className": "react-flow__attribution",
          "data-message":
            "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
          "children": x.jsx("a", {
            "href": "https://reactflow.dev",
            "target": "_blank",
            "rel": "noopener noreferrer",
            "aria-label": "React Flow attribution",
            "children": "React Flow",
          }),
        });
  }
  const DO = ({
    x: e,
    y: t,
    label: n,
    labelStyle: r = {},
    labelShowBg: i = !0,
    labelBgStyle: o = {},
    labelBgPadding: s = [2, 4],
    labelBgBorderRadius: a = 2,
    children: l,
    className: u,
    ...c
  }) => {
    const f = b.useRef(null),
      [d, p] = b.useState({ x: 0, y: 0, width: 0, height: 0 }),
      g = Ge(["react-flow__edge-textwrapper", u]);
    return (
      b.useEffect(() => {
        if (f.current) {
          const y = f.current.getBBox();
          p({ x: y.x, y: y.y, width: y.width, height: y.height });
        }
      }, [n]),
      typeof n > "u" || !n
        ? null
        : x.jsxs("g", {
            transform: `translate(${e - d.width / 2} ${t - d.height / 2})`,
            className: g,
            visibility: d.width ? "visible" : "hidden",
            ...c,
            children: [
              i &&
                x.jsx("rect", {
                  width: d.width + 2 * s[0],
                  x: -s[0],
                  y: -s[1],
                  height: d.height + 2 * s[1],
                  className: "react-flow__edge-textbg",
                  style: o,
                  rx: a,
                  ry: a,
                }),
              x.jsx("text", {
                className: "react-flow__edge-text",
                y: d.height / 2,
                dy: "0.3em",
                ref: f,
                style: r,
                children: n,
              }),
              l,
            ],
          })
    );
  };
  var PO = b.memo(DO);
  const up = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
    Ui = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
    cp = (e = { x: 0, y: 0 }, t) => ({
      x: Ui(e.x, t[0][0], t[1][0]),
      y: Ui(e.y, t[0][1], t[1][1]),
    }),
    Im = (e, t, n) =>
      e < t
        ? Ui(Math.abs(e - t), 1, 50) / 50
        : e > n
        ? -Ui(Math.abs(e - n), 1, 50) / 50
        : 0,
    Cw = (e, t) => {
      const n = Im(e.x, 35, t.width - 35) * 20,
        r = Im(e.y, 35, t.height - 35) * 20;
      return [n, r];
    },
    Nw = (e) => {
      var t;
      return (
        ((t = e.getRootNode) == null ? void 0 : t.call(e)) ||
        (window == null ? void 0 : window.document)
      );
    },
    RO = (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      x2: Math.max(e.x2, t.x2),
      y2: Math.max(e.y2, t.y2),
    }),
    Ow = ({ x: e, y: t, width: n, height: r }) => ({
      x: e,
      y: t,
      x2: e + n,
      y2: t + r,
    }),
    jO = ({ x: e, y: t, x2: n, y2: r }) => ({
      x: e,
      y: t,
      width: n - e,
      height: r - t,
    }),
    Lm = (e) => ({
      ...(e.positionAbsolute || { x: 0, y: 0 }),
      width: e.width || 0,
      height: e.height || 0,
    }),
    wf = (e, t) => {
      const n = Math.max(
          0,
          Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)
        ),
        r = Math.max(
          0,
          Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y)
        );
      return Math.ceil(n * r);
    },
    MO = (e) => _t(e.width) && _t(e.height) && _t(e.x) && _t(e.y),
    _t = (e) => !isNaN(e) && isFinite(e),
    Te = Symbol.for("internals"),
    Tw = ["Enter", " ", "Escape"],
    IO = (e, t) => {},
    LO = (e) => "nativeEvent" in e;
  function xf(e) {
    var i, o;
    const t = LO(e) ? e.nativeEvent : e,
      n =
        ((o = (i = t.composedPath) == null ? void 0 : i.call(t)) == null
          ? void 0
          : o[0]) || e.target;
    return (
      ["INPUT", "SELECT", "TEXTAREA"].includes(
        n == null ? void 0 : n.nodeName
      ) ||
      (n == null ? void 0 : n.hasAttribute("contenteditable")) ||
      !!(n != null && n.closest(".nokey"))
    );
  }
  const Dw = (e) => "clientX" in e,
    Jn = (e, t) => {
      var o, s;
      const n = Dw(e),
        r = n ? e.clientX : (o = e.touches) == null ? void 0 : o[0].clientX,
        i = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
      return {
        x: r - ((t == null ? void 0 : t.left) ?? 0),
        y: i - ((t == null ? void 0 : t.top) ?? 0),
      };
    },
    oo = ({
      id: e,
      path: t,
      labelX: n,
      labelY: r,
      label: i,
      labelStyle: o,
      labelShowBg: s,
      labelBgStyle: a,
      labelBgPadding: l,
      labelBgBorderRadius: u,
      style: c,
      markerEnd: f,
      markerStart: d,
      interactionWidth: p = 20,
    }) =>
      x.jsxs(x.Fragment, {
        children: [
          x.jsx("path", {
            id: e,
            style: c,
            d: t,
            fill: "none",
            className: "react-flow__edge-path",
            markerEnd: f,
            markerStart: d,
          }),
          p &&
            x.jsx("path", {
              d: t,
              fill: "none",
              strokeOpacity: 0,
              strokeWidth: p,
              className: "react-flow__edge-interaction",
            }),
          i && _t(n) && _t(r)
            ? x.jsx(PO, {
                x: n,
                y: r,
                label: i,
                labelStyle: o,
                labelShowBg: s,
                labelBgStyle: a,
                labelBgPadding: l,
                labelBgBorderRadius: u,
              })
            : null,
        ],
      });
  oo.displayName = "BaseEdge";
  function So(e, t, n) {
    return n === void 0
      ? n
      : (r) => {
          const i = t().edges.find((o) => o.id === e);
          i && n(r, { ...i });
        };
  }
  function Pw({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
    const i = Math.abs(n - e) / 2,
      o = n < e ? n + i : n - i,
      s = Math.abs(r - t) / 2,
      a = r < t ? r + s : r - s;
    return [o, a, i, s];
  }
  function Rw({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r,
    sourceControlX: i,
    sourceControlY: o,
    targetControlX: s,
    targetControlY: a,
  }) {
    const l = e * 0.125 + i * 0.375 + s * 0.375 + n * 0.125,
      u = t * 0.125 + o * 0.375 + a * 0.375 + r * 0.125,
      c = Math.abs(l - e),
      f = Math.abs(u - t);
    return [l, u, c, f];
  }
  var Fr;
  (function (e) {
    (e.Strict = "strict"), (e.Loose = "loose");
  })(Fr || (Fr = {}));
  var Oi;
  (function (e) {
    (e.Free = "free"), (e.Vertical = "vertical"), (e.Horizontal = "horizontal");
  })(Oi || (Oi = {}));
  var Qi;
  (function (e) {
    (e.Partial = "partial"), (e.Full = "full");
  })(Qi || (Qi = {}));
  var $n;
  (function (e) {
    (e.Bezier = "default"),
      (e.Straight = "straight"),
      (e.Step = "step"),
      (e.SmoothStep = "smoothstep"),
      (e.SimpleBezier = "simplebezier");
  })($n || ($n = {}));
  var xs;
  (function (e) {
    (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
  })(xs || (xs = {}));
  var W;
  (function (e) {
    (e.Left = "left"),
      (e.Top = "top"),
      (e.Right = "right"),
      (e.Bottom = "bottom");
  })(W || (W = {}));
  function Am({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
    return e === W.Left || e === W.Right
      ? [0.5 * (t + r), n]
      : [t, 0.5 * (n + i)];
  }
  function jw({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = W.Bottom,
    targetX: r,
    targetY: i,
    targetPosition: o = W.Top,
  }) {
    const [s, a] = Am({ pos: n, x1: e, y1: t, x2: r, y2: i }),
      [l, u] = Am({ pos: o, x1: r, y1: i, x2: e, y2: t }),
      [c, f, d, p] = Rw({
        sourceX: e,
        sourceY: t,
        targetX: r,
        targetY: i,
        sourceControlX: s,
        sourceControlY: a,
        targetControlX: l,
        targetControlY: u,
      });
    return [`M${e},${t} C${s},${a} ${l},${u} ${r},${i}`, c, f, d, p];
  }
  const fp = b.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      sourcePosition: i = W.Bottom,
      targetPosition: o = W.Top,
      label: s,
      labelStyle: a,
      labelShowBg: l,
      labelBgStyle: u,
      labelBgPadding: c,
      labelBgBorderRadius: f,
      style: d,
      markerEnd: p,
      markerStart: g,
      interactionWidth: y,
    }) => {
      const [S, m, h] = jw({
        sourceX: e,
        sourceY: t,
        sourcePosition: i,
        targetX: n,
        targetY: r,
        targetPosition: o,
      });
      return x.jsx(oo, {
        path: S,
        labelX: m,
        labelY: h,
        label: s,
        labelStyle: a,
        labelShowBg: l,
        labelBgStyle: u,
        labelBgPadding: c,
        labelBgBorderRadius: f,
        style: d,
        markerEnd: p,
        markerStart: g,
        interactionWidth: y,
      });
    }
  );
  fp.displayName = "SimpleBezierEdge";
  const Fm = {
      [W.Left]: { x: -1, y: 0 },
      [W.Right]: { x: 1, y: 0 },
      [W.Top]: { x: 0, y: -1 },
      [W.Bottom]: { x: 0, y: 1 },
    },
    AO = ({ source: e, sourcePosition: t = W.Bottom, target: n }) =>
      t === W.Left || t === W.Right
        ? e.x < n.x
          ? { x: 1, y: 0 }
          : { x: -1, y: 0 }
        : e.y < n.y
        ? { x: 0, y: 1 }
        : { x: 0, y: -1 },
    zm = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  function FO({
    source: e,
    sourcePosition: t = W.Bottom,
    target: n,
    targetPosition: r = W.Top,
    center: i,
    offset: o,
  }) {
    const s = Fm[t],
      a = Fm[r],
      l = { x: e.x + s.x * o, y: e.y + s.y * o },
      u = { x: n.x + a.x * o, y: n.y + a.y * o },
      c = AO({ source: l, sourcePosition: t, target: u }),
      f = c.x !== 0 ? "x" : "y",
      d = c[f];
    let p = [],
      g,
      y;
    const [S, m, h, v] = Pw({
      sourceX: e.x,
      sourceY: e.y,
      targetX: n.x,
      targetY: n.y,
    });
    if (s[f] * a[f] === -1) {
      (g = i.x || S), (y = i.y || m);
      const E = [
          { x: g, y: l.y },
          { x: g, y: u.y },
        ],
        _ = [
          { x: l.x, y },
          { x: u.x, y },
        ];
      s[f] === d ? (p = f === "x" ? E : _) : (p = f === "x" ? _ : E);
    } else {
      const E = [{ x: l.x, y: u.y }],
        _ = [{ x: u.x, y: l.y }];
      if (
        (f === "x" ? (p = s.x === d ? _ : E) : (p = s.y === d ? E : _), t !== r)
      ) {
        const k = f === "x" ? "y" : "x",
          N = s[f] === a[k],
          P = l[k] > u[k],
          T = l[k] < u[k];
        ((s[f] === 1 && ((!N && P) || (N && T))) ||
          (s[f] !== 1 && ((!N && T) || (N && P)))) &&
          (p = f === "x" ? E : _);
      }
      (g = p[0].x), (y = p[0].y);
    }
    return [[e, l, ...p, u, n], g, y, h, v];
  }
  function zO(e, t, n, r) {
    const i = Math.min(zm(e, t) / 2, zm(t, n) / 2, r),
      { x: o, y: s } = t;
    if ((e.x === o && o === n.x) || (e.y === s && s === n.y))
      return `L${o} ${s}`;
    if (e.y === s) {
      const u = e.x < n.x ? -1 : 1,
        c = e.y < n.y ? 1 : -1;
      return `L ${o + i * u},${s}Q ${o},${s} ${o},${s + i * c}`;
    }
    const a = e.x < n.x ? 1 : -1,
      l = e.y < n.y ? -1 : 1;
    return `L ${o},${s + i * l}Q ${o},${s} ${o + i * a},${s}`;
  }
  function Sf({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = W.Bottom,
    targetX: r,
    targetY: i,
    targetPosition: o = W.Top,
    borderRadius: s = 5,
    centerX: a,
    centerY: l,
    offset: u = 20,
  }) {
    const [c, f, d, p, g] = FO({
      source: { x: e, y: t },
      sourcePosition: n,
      target: { x: r, y: i },
      targetPosition: o,
      center: { x: a, y: l },
      offset: u,
    });
    return [
      c.reduce((S, m, h) => {
        let v = "";
        return (
          h > 0 && h < c.length - 1
            ? (v = zO(c[h - 1], m, c[h + 1], s))
            : (v = `${h === 0 ? "M" : "L"}${m.x} ${m.y}`),
          (S += v),
          S
        );
      }, ""),
      f,
      d,
      p,
      g,
    ];
  }
  const Kl = b.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      label: i,
      labelStyle: o,
      labelShowBg: s,
      labelBgStyle: a,
      labelBgPadding: l,
      labelBgBorderRadius: u,
      style: c,
      sourcePosition: f = W.Bottom,
      targetPosition: d = W.Top,
      markerEnd: p,
      markerStart: g,
      pathOptions: y,
      interactionWidth: S,
    }) => {
      const [m, h, v] = Sf({
        sourceX: e,
        sourceY: t,
        sourcePosition: f,
        targetX: n,
        targetY: r,
        targetPosition: d,
        borderRadius: y == null ? void 0 : y.borderRadius,
        offset: y == null ? void 0 : y.offset,
      });
      return x.jsx(oo, {
        path: m,
        labelX: h,
        labelY: v,
        label: i,
        labelStyle: o,
        labelShowBg: s,
        labelBgStyle: a,
        labelBgPadding: l,
        labelBgBorderRadius: u,
        style: c,
        markerEnd: p,
        markerStart: g,
        interactionWidth: S,
      });
    }
  );
  Kl.displayName = "SmoothStepEdge";
  const dp = b.memo((e) => {
    var t;
    return x.jsx(Kl, {
      ...e,
      pathOptions: b.useMemo(() => {
        var n;
        return {
          borderRadius: 0,
          offset: (n = e.pathOptions) == null ? void 0 : n.offset,
        };
      }, [(t = e.pathOptions) == null ? void 0 : t.offset]),
    });
  });
  dp.displayName = "StepEdge";
  function $O({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
    const [i, o, s, a] = Pw({ sourceX: e, sourceY: t, targetX: n, targetY: r });
    return [`M ${e},${t}L ${n},${r}`, i, o, s, a];
  }
  const pp = b.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      label: i,
      labelStyle: o,
      labelShowBg: s,
      labelBgStyle: a,
      labelBgPadding: l,
      labelBgBorderRadius: u,
      style: c,
      markerEnd: f,
      markerStart: d,
      interactionWidth: p,
    }) => {
      const [g, y, S] = $O({ sourceX: e, sourceY: t, targetX: n, targetY: r });
      return x.jsx(oo, {
        path: g,
        labelX: y,
        labelY: S,
        label: i,
        labelStyle: o,
        labelShowBg: s,
        labelBgStyle: a,
        labelBgPadding: l,
        labelBgBorderRadius: u,
        style: c,
        markerEnd: f,
        markerStart: d,
        interactionWidth: p,
      });
    }
  );
  pp.displayName = "StraightEdge";
  function ua(e, t) {
    return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
  }
  function $m({ pos: e, x1: t, y1: n, x2: r, y2: i, c: o }) {
    switch (e) {
      case W.Left:
        return [t - ua(t - r, o), n];
      case W.Right:
        return [t + ua(r - t, o), n];
      case W.Top:
        return [t, n - ua(n - i, o)];
      case W.Bottom:
        return [t, n + ua(i - n, o)];
    }
  }
  function Zl({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = W.Bottom,
    targetX: r,
    targetY: i,
    targetPosition: o = W.Top,
    curvature: s = 0.25,
  }) {
    const [a, l] = $m({ pos: n, x1: e, y1: t, x2: r, y2: i, c: s }),
      [u, c] = $m({ pos: o, x1: r, y1: i, x2: e, y2: t, c: s }),
      [f, d, p, g] = Rw({
        sourceX: e,
        sourceY: t,
        targetX: r,
        targetY: i,
        sourceControlX: a,
        sourceControlY: l,
        targetControlX: u,
        targetControlY: c,
      });
    return [`M${e},${t} C${a},${l} ${u},${c} ${r},${i}`, f, d, p, g];
  }
  const gl = b.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      sourcePosition: i = W.Bottom,
      targetPosition: o = W.Top,
      label: s,
      labelStyle: a,
      labelShowBg: l,
      labelBgStyle: u,
      labelBgPadding: c,
      labelBgBorderRadius: f,
      style: d,
      markerEnd: p,
      markerStart: g,
      pathOptions: y,
      interactionWidth: S,
    }) => {
      const [m, h, v] = Zl({
        sourceX: e,
        sourceY: t,
        sourcePosition: i,
        targetX: n,
        targetY: r,
        targetPosition: o,
        curvature: y == null ? void 0 : y.curvature,
      });
      return x.jsx(oo, {
        path: m,
        labelX: h,
        labelY: v,
        label: s,
        labelStyle: a,
        labelShowBg: l,
        labelBgStyle: u,
        labelBgPadding: c,
        labelBgBorderRadius: f,
        style: d,
        markerEnd: p,
        markerStart: g,
        interactionWidth: S,
      });
    }
  );
  gl.displayName = "BezierEdge";
  const hp = b.createContext(null),
    BO = hp.Provider;
  hp.Consumer;
  const VO = () => b.useContext(hp),
    HO = (e) => "id" in e && "source" in e && "target" in e,
    UO = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
      `reactflow__edge-${e}${t || ""}-${n}${r || ""}`,
    bf = (e, t) =>
      typeof e > "u"
        ? ""
        : typeof e == "string"
        ? e
        : `${t ? `${t}__` : ""}${Object.keys(e)
            .sort()
            .map((r) => `${r}=${e[r]}`)
            .join("&")}`,
    QO = (e, t) =>
      t.some(
        (n) =>
          n.source === e.source &&
          n.target === e.target &&
          (n.sourceHandle === e.sourceHandle ||
            (!n.sourceHandle && !e.sourceHandle)) &&
          (n.targetHandle === e.targetHandle ||
            (!n.targetHandle && !e.targetHandle))
      ),
    Mw = (e, t) => {
      if (!e.source || !e.target) return t;
      let n;
      return (
        HO(e) ? (n = { ...e }) : (n = { ...e, id: UO(e) }),
        QO(n, t) ? t : t.concat(n)
      );
    },
    Iw = ({ x: e, y: t }, [n, r, i], o, [s, a]) => {
      const l = { x: (e - n) / i, y: (t - r) / i };
      return o ? { x: s * Math.round(l.x / s), y: a * Math.round(l.y / a) } : l;
    },
    qO = ({ x: e, y: t }, [n, r, i]) => ({ x: e * i + n, y: t * i + r }),
    Ti = (e, t = [0, 0]) => {
      if (!e) return { x: 0, y: 0, positionAbsolute: { x: 0, y: 0 } };
      const n = (e.width ?? 0) * t[0],
        r = (e.height ?? 0) * t[1],
        i = { x: e.position.x - n, y: e.position.y - r };
      return {
        ...i,
        positionAbsolute: e.positionAbsolute
          ? { x: e.positionAbsolute.x - n, y: e.positionAbsolute.y - r }
          : i,
      };
    },
    Lw = (e, t = [0, 0]) => {
      if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
      const n = e.reduce(
        (r, i) => {
          const { x: o, y: s } = Ti(i, t).positionAbsolute;
          return RO(
            r,
            Ow({ x: o, y: s, width: i.width || 0, height: i.height || 0 })
          );
        },
        { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }
      );
      return jO(n);
    },
    Aw = (e, t, [n, r, i] = [0, 0, 1], o = !1, s = !1, a = [0, 0]) => {
      const l = {
          x: (t.x - n) / i,
          y: (t.y - r) / i,
          width: t.width / i,
          height: t.height / i,
        },
        u = [];
      return (
        e.forEach((c) => {
          const { width: f, height: d, selectable: p = !0, hidden: g = !1 } = c;
          if ((s && !p) || g) return !1;
          const { positionAbsolute: y } = Ti(c, a),
            S = { x: y.x, y: y.y, width: f || 0, height: d || 0 },
            m = wf(l, S),
            h = typeof f > "u" || typeof d > "u" || f === null || d === null,
            v = o && m > 0,
            w = (f || 0) * (d || 0);
          (h || v || m >= w || c.dragging) && u.push(c);
        }),
        u
      );
    },
    Fw = (e, t) => {
      const n = e.map((r) => r.id);
      return t.filter((r) => n.includes(r.source) || n.includes(r.target));
    },
    zw = (e, t, n, r, i, o = 0.1) => {
      const s = t / (e.width * (1 + o)),
        a = n / (e.height * (1 + o)),
        l = Math.min(s, a),
        u = Ui(l, r, i),
        c = e.x + e.width / 2,
        f = e.y + e.height / 2,
        d = t / 2 - c * u,
        p = n / 2 - f * u;
      return [d, p, u];
    },
    gr = (e, t = 0) => e.transition().duration(t);
  function Bm(e, t, n, r) {
    return (t[n] || []).reduce((i, o) => {
      var s, a;
      return (
        `${e.id}-${o.id}-${n}` !== r &&
          i.push({
            id: o.id || null,
            type: n,
            nodeId: e.id,
            x:
              (((s = e.positionAbsolute) == null ? void 0 : s.x) ?? 0) +
              o.x +
              o.width / 2,
            y:
              (((a = e.positionAbsolute) == null ? void 0 : a.y) ?? 0) +
              o.y +
              o.height / 2,
          }),
        i
      );
    }, []);
  }
  function WO(e, t, n) {
    let r = [],
      i = 1 / 0;
    return (
      n.forEach((o) => {
        const s = Math.sqrt(Math.pow(o.x - e.x, 2) + Math.pow(o.y - e.y, 2));
        s <= t && (s < i ? (r = [o]) : s === i && r.push(o), (i = s));
      }),
      r.length
        ? r.length === 1
          ? r[0]
          : r.find((o) => o.type === "target") || r[0]
        : null
    );
  }
  const YO = {
    source: null,
    target: null,
    sourceHandle: null,
    targetHandle: null,
  };
  function $w(e, t, n, r, i, o, s, a) {
    const l = o === "target",
      u = a.querySelector(
        `.react-flow__handle[data-id="${t == null ? void 0 : t.nodeId}-${
          t == null ? void 0 : t.id
        }-${t == null ? void 0 : t.type}"]`
      ),
      { x: c, y: f } = Jn(e),
      d = a.elementFromPoint(c, f),
      p = d != null && d.classList.contains("react-flow__handle") ? d : u,
      g = { handleDomNode: p, isValid: !1, connection: YO, endHandle: null };
    if (p) {
      const y = Bw(void 0, p),
        S = p.getAttribute("data-nodeid"),
        m = p.getAttribute("data-handleid"),
        h = p.classList.contains("connectable"),
        v = p.classList.contains("connectableend"),
        w = {
          source: l ? S : r,
          sourceHandle: l ? m : i,
          target: l ? r : S,
          targetHandle: l ? i : m,
        };
      (g.connection = w),
        h &&
          v &&
          (n === Fr.Strict
            ? (l && y === "source") || (!l && y === "target")
            : S !== r || m !== i) &&
          ((g.endHandle = { nodeId: S, handleId: m, type: y }),
          (g.isValid = s(w)));
    }
    return g;
  }
  function XO({ nodes: e, nodeId: t, handleId: n, handleType: r }) {
    return e.reduce((i, o) => {
      if (o[Te]) {
        const { handleBounds: s } = o[Te];
        let a = [],
          l = [];
        s &&
          ((a = Bm(o, s, "source", `${t}-${n}-${r}`)),
          (l = Bm(o, s, "target", `${t}-${n}-${r}`))),
          i.push(...a, ...l);
      }
      return i;
    }, []);
  }
  function Bw(e, t) {
    return (
      e ||
      (t != null && t.classList.contains("target")
        ? "target"
        : t != null && t.classList.contains("source")
        ? "source"
        : null)
    );
  }
  function Wu(e) {
    e == null ||
      e.classList.remove(
        "valid",
        "connecting",
        "react-flow__handle-valid",
        "react-flow__handle-connecting"
      );
  }
  function GO(e, t) {
    let n = null;
    return t ? (n = "valid") : e && !t && (n = "invalid"), n;
  }
  function Vw({
    event: e,
    handleId: t,
    nodeId: n,
    onConnect: r,
    isTarget: i,
    getState: o,
    setState: s,
    isValidConnection: a,
    edgeUpdaterType: l,
    onEdgeUpdateEnd: u,
  }) {
    const c = Nw(e.target),
      {
        connectionMode: f,
        domNode: d,
        autoPanOnConnect: p,
        connectionRadius: g,
        onConnectStart: y,
        panBy: S,
        getNodes: m,
        cancelConnection: h,
      } = o();
    let v = 0,
      w;
    const { x: E, y: _ } = Jn(e),
      k = c == null ? void 0 : c.elementFromPoint(E, _),
      N = Bw(l, k),
      P = d == null ? void 0 : d.getBoundingClientRect();
    if (!P || !N) return;
    let T,
      F = Jn(e, P),
      z = !1,
      R = null,
      C = !1,
      I = null;
    const j = XO({ nodes: m(), nodeId: n, handleId: t, handleType: N }),
      D = () => {
        if (!p) return;
        const [L, V] = Cw(F, P);
        S({ x: L, y: V }), (v = requestAnimationFrame(D));
      };
    s({
      connectionPosition: F,
      connectionStatus: null,
      connectionNodeId: n,
      connectionHandleId: t,
      connectionHandleType: N,
      connectionStartHandle: { nodeId: n, handleId: t, type: N },
      connectionEndHandle: null,
    }),
      y == null || y(e, { nodeId: n, handleId: t, handleType: N });
    function O(L) {
      const { transform: V } = o();
      (F = Jn(L, P)),
        (w = WO(Iw(F, V, !1, [1, 1]), g, j)),
        z || (D(), (z = !0));
      const $ = $w(L, w, f, n, t, i ? "target" : "source", a, c);
      if (
        ((I = $.handleDomNode),
        (R = $.connection),
        (C = $.isValid),
        s({
          connectionPosition: w && C ? qO({ x: w.x, y: w.y }, V) : F,
          connectionStatus: GO(!!w, C),
          connectionEndHandle: $.endHandle,
        }),
        !w && !C && !I)
      )
        return Wu(T);
      R.source !== R.target &&
        I &&
        (Wu(T),
        (T = I),
        I.classList.add("connecting", "react-flow__handle-connecting"),
        I.classList.toggle("valid", C),
        I.classList.toggle("react-flow__handle-valid", C));
    }
    function M(L) {
      var V, $;
      (w || I) && R && C && (r == null || r(R)),
        ($ = (V = o()).onConnectEnd) == null || $.call(V, L),
        l && (u == null || u(L)),
        Wu(T),
        h(),
        cancelAnimationFrame(v),
        (z = !1),
        (C = !1),
        (R = null),
        (I = null),
        c.removeEventListener("mousemove", O),
        c.removeEventListener("mouseup", M),
        c.removeEventListener("touchmove", O),
        c.removeEventListener("touchend", M);
    }
    c.addEventListener("mousemove", O),
      c.addEventListener("mouseup", M),
      c.addEventListener("touchmove", O),
      c.addEventListener("touchend", M);
  }
  const Vm = () => !0,
    KO = (e) => ({
      connectionStartHandle: e.connectionStartHandle,
      connectOnClick: e.connectOnClick,
      noPanClassName: e.noPanClassName,
    }),
    ZO = (e, t, n) => (r) => {
      const {
        connectionStartHandle: i,
        connectionEndHandle: o,
        connectionClickStartHandle: s,
      } = r;
      return {
        connecting:
          ((i == null ? void 0 : i.nodeId) === e &&
            (i == null ? void 0 : i.handleId) === t &&
            (i == null ? void 0 : i.type) === n) ||
          ((o == null ? void 0 : o.nodeId) === e &&
            (o == null ? void 0 : o.handleId) === t &&
            (o == null ? void 0 : o.type) === n),
        clickConnecting:
          (s == null ? void 0 : s.nodeId) === e &&
          (s == null ? void 0 : s.handleId) === t &&
          (s == null ? void 0 : s.type) === n,
      };
    },
    Hw = b.forwardRef(
      (
        {
          type: e = "source",
          position: t = W.Top,
          isValidConnection: n,
          isConnectable: r = !0,
          isConnectableStart: i = !0,
          isConnectableEnd: o = !0,
          id: s,
          onConnect: a,
          children: l,
          className: u,
          onMouseDown: c,
          onTouchStart: f,
          ...d
        },
        p
      ) => {
        var P, T;
        const g = s || null,
          y = e === "target",
          S = ze(),
          m = VO(),
          { connectOnClick: h, noPanClassName: v } = ce(KO, Qe),
          { connecting: w, clickConnecting: E } = ce(ZO(m, g, e), Qe);
        m ||
          (T = (P = S.getState()).onError) == null ||
          T.call(P, "010", nr.error010());
        const _ = (F) => {
            const {
                defaultEdgeOptions: z,
                onConnect: R,
                hasDefaultEdges: C,
              } = S.getState(),
              I = { ...z, ...F };
            if (C) {
              const { edges: j, setEdges: D } = S.getState();
              D(Mw(I, j));
            }
            R == null || R(I), a == null || a(I);
          },
          k = (F) => {
            if (!m) return;
            const z = Dw(F);
            i &&
              ((z && F.button === 0) || !z) &&
              Vw({
                event: F,
                handleId: g,
                nodeId: m,
                onConnect: _,
                isTarget: y,
                getState: S.getState,
                setState: S.setState,
                isValidConnection: n || S.getState().isValidConnection || Vm,
              }),
              z ? c == null || c(F) : f == null || f(F);
          },
          N = (F) => {
            const {
              onClickConnectStart: z,
              onClickConnectEnd: R,
              connectionClickStartHandle: C,
              connectionMode: I,
              isValidConnection: j,
            } = S.getState();
            if (!m || (!C && !i)) return;
            if (!C) {
              z == null || z(F, { nodeId: m, handleId: g, handleType: e }),
                S.setState({
                  connectionClickStartHandle: {
                    nodeId: m,
                    type: e,
                    handleId: g,
                  },
                });
              return;
            }
            const D = Nw(F.target),
              O = n || j || Vm,
              { connection: M, isValid: L } = $w(
                F,
                { nodeId: m, id: g, type: e },
                I,
                C.nodeId,
                C.handleId || null,
                C.type,
                O,
                D
              );
            L && _(M),
              R == null || R(F),
              S.setState({ connectionClickStartHandle: null });
          };
        return x.jsx("div", {
          "data-handleid": g,
          "data-nodeid": m,
          "data-handlepos": t,
          "data-id": `${m}-${g}-${e}`,
          "className": Ge([
            "react-flow__handle",
            `react-flow__handle-${t}`,
            "nodrag",
            v,
            u,
            {
              source: !y,
              target: y,
              connectable: r,
              connectablestart: i,
              connectableend: o,
              connecting: E,
              connectionindicator: r && ((i && !w) || (o && w)),
            },
          ]),
          "onMouseDown": k,
          "onTouchStart": k,
          "onClick": h ? N : void 0,
          "ref": p,
          ...d,
          "children": l,
        });
      }
    );
  Hw.displayName = "Handle";
  var qi = b.memo(Hw);
  const Uw = ({
    data: e,
    isConnectable: t,
    targetPosition: n = W.Top,
    sourcePosition: r = W.Bottom,
  }) =>
    x.jsxs(x.Fragment, {
      children: [
        x.jsx(qi, { type: "target", position: n, isConnectable: t }),
        e == null ? void 0 : e.label,
        x.jsx(qi, { type: "source", position: r, isConnectable: t }),
      ],
    });
  Uw.displayName = "DefaultNode";
  var Ef = b.memo(Uw);
  const Qw = ({ data: e, isConnectable: t, sourcePosition: n = W.Bottom }) =>
    x.jsxs(x.Fragment, {
      children: [
        e == null ? void 0 : e.label,
        x.jsx(qi, { type: "source", position: n, isConnectable: t }),
      ],
    });
  Qw.displayName = "InputNode";
  var qw = b.memo(Qw);
  const Ww = ({ data: e, isConnectable: t, targetPosition: n = W.Top }) =>
    x.jsxs(x.Fragment, {
      children: [
        x.jsx(qi, { type: "target", position: n, isConnectable: t }),
        e == null ? void 0 : e.label,
      ],
    });
  Ww.displayName = "OutputNode";
  var Yw = b.memo(Ww);
  const mp = () => null;
  mp.displayName = "GroupNode";
  const JO = (e) => ({
      selectedNodes: e.getNodes().filter((t) => t.selected),
      selectedEdges: e.edges.filter((t) => t.selected),
    }),
    ca = (e) => e.id;
  function eT(e, t) {
    return (
      Qe(e.selectedNodes.map(ca), t.selectedNodes.map(ca)) &&
      Qe(e.selectedEdges.map(ca), t.selectedEdges.map(ca))
    );
  }
  const Xw = b.memo(({ onSelectionChange: e }) => {
    const t = ze(),
      { selectedNodes: n, selectedEdges: r } = ce(JO, eT);
    return (
      b.useEffect(() => {
        var o, s;
        const i = { nodes: n, edges: r };
        e == null || e(i),
          (s = (o = t.getState()).onSelectionChange) == null || s.call(o, i);
      }, [n, r, e]),
      null
    );
  });
  Xw.displayName = "SelectionListener";
  const tT = (e) => !!e.onSelectionChange;
  function nT({ onSelectionChange: e }) {
    const t = ce(tT);
    return e || t ? x.jsx(Xw, { onSelectionChange: e }) : null;
  }
  const rT = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
  });
  function Yr(e, t) {
    b.useEffect(() => {
      typeof e < "u" && t(e);
    }, [e]);
  }
  function Z(e, t, n) {
    b.useEffect(() => {
      typeof t < "u" && n({ [e]: t });
    }, [t]);
  }
  const iT = ({
      nodes: e,
      edges: t,
      defaultNodes: n,
      defaultEdges: r,
      onConnect: i,
      onConnectStart: o,
      onConnectEnd: s,
      onClickConnectStart: a,
      onClickConnectEnd: l,
      nodesDraggable: u,
      nodesConnectable: c,
      nodesFocusable: f,
      edgesFocusable: d,
      edgesUpdatable: p,
      elevateNodesOnSelect: g,
      minZoom: y,
      maxZoom: S,
      nodeExtent: m,
      onNodesChange: h,
      onEdgesChange: v,
      elementsSelectable: w,
      connectionMode: E,
      snapGrid: _,
      snapToGrid: k,
      translateExtent: N,
      connectOnClick: P,
      defaultEdgeOptions: T,
      fitView: F,
      fitViewOptions: z,
      onNodesDelete: R,
      onEdgesDelete: C,
      onNodeDrag: I,
      onNodeDragStart: j,
      onNodeDragStop: D,
      onSelectionDrag: O,
      onSelectionDragStart: M,
      onSelectionDragStop: L,
      noPanClassName: V,
      nodeOrigin: $,
      rfId: Y,
      autoPanOnConnect: U,
      autoPanOnNodeDrag: G,
      onError: K,
      connectionRadius: J,
      isValidConnection: ne,
    }) => {
      const {
          setNodes: he,
          setEdges: ye,
          setDefaultNodesAndEdges: $e,
          setMinZoom: lt,
          setMaxZoom: ut,
          setTranslateExtent: Se,
          setNodeExtent: le,
          reset: Me,
        } = ce(rT, Qe),
        X = ze();
      return (
        b.useEffect(() => {
          const Qt = r == null ? void 0 : r.map((an) => ({ ...an, ...T }));
          return (
            $e(n, Qt),
            () => {
              Me();
            }
          );
        }, []),
        Z("defaultEdgeOptions", T, X.setState),
        Z("connectionMode", E, X.setState),
        Z("onConnect", i, X.setState),
        Z("onConnectStart", o, X.setState),
        Z("onConnectEnd", s, X.setState),
        Z("onClickConnectStart", a, X.setState),
        Z("onClickConnectEnd", l, X.setState),
        Z("nodesDraggable", u, X.setState),
        Z("nodesConnectable", c, X.setState),
        Z("nodesFocusable", f, X.setState),
        Z("edgesFocusable", d, X.setState),
        Z("edgesUpdatable", p, X.setState),
        Z("elementsSelectable", w, X.setState),
        Z("elevateNodesOnSelect", g, X.setState),
        Z("snapToGrid", k, X.setState),
        Z("snapGrid", _, X.setState),
        Z("onNodesChange", h, X.setState),
        Z("onEdgesChange", v, X.setState),
        Z("connectOnClick", P, X.setState),
        Z("fitViewOnInit", F, X.setState),
        Z("fitViewOnInitOptions", z, X.setState),
        Z("onNodesDelete", R, X.setState),
        Z("onEdgesDelete", C, X.setState),
        Z("onNodeDrag", I, X.setState),
        Z("onNodeDragStart", j, X.setState),
        Z("onNodeDragStop", D, X.setState),
        Z("onSelectionDrag", O, X.setState),
        Z("onSelectionDragStart", M, X.setState),
        Z("onSelectionDragStop", L, X.setState),
        Z("noPanClassName", V, X.setState),
        Z("nodeOrigin", $, X.setState),
        Z("rfId", Y, X.setState),
        Z("autoPanOnConnect", U, X.setState),
        Z("autoPanOnNodeDrag", G, X.setState),
        Z("onError", K, X.setState),
        Z("connectionRadius", J, X.setState),
        Z("isValidConnection", ne, X.setState),
        Yr(e, he),
        Yr(t, ye),
        Yr(y, lt),
        Yr(S, ut),
        Yr(N, Se),
        Yr(m, le),
        null
      );
    },
    Hm = { display: "none" },
    oT = {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: "hidden",
      clip: "rect(0px, 0px, 0px, 0px)",
      clipPath: "inset(100%)",
    },
    Gw = "react-flow__node-desc",
    Kw = "react-flow__edge-desc",
    sT = "react-flow__aria-live",
    aT = (e) => e.ariaLiveMessage;
  function lT({ rfId: e }) {
    const t = ce(aT);
    return x.jsx("div", {
      "id": `${sT}-${e}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      "style": oT,
      "children": t,
    });
  }
  function uT({ rfId: e, disableKeyboardA11y: t }) {
    return x.jsxs(x.Fragment, {
      children: [
        x.jsxs("div", {
          id: `${Gw}-${e}`,
          style: Hm,
          children: [
            "Press enter or space to select a node.",
            !t && "You can then use the arrow keys to move the node around.",
            " Press delete to remove it and escape to cancel.",
            " ",
          ],
        }),
        x.jsx("div", {
          id: `${Kw}-${e}`,
          style: Hm,
          children:
            "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
        }),
        !t && x.jsx(lT, { rfId: e }),
      ],
    });
  }
  const cT = (e, t, n) => (n === W.Left ? e - t : n === W.Right ? e + t : e),
    fT = (e, t, n) => (n === W.Top ? e - t : n === W.Bottom ? e + t : e),
    Um = "react-flow__edgeupdater",
    Qm = ({
      position: e,
      centerX: t,
      centerY: n,
      radius: r = 10,
      onMouseDown: i,
      onMouseEnter: o,
      onMouseOut: s,
      type: a,
    }) =>
      x.jsx("circle", {
        onMouseDown: i,
        onMouseEnter: o,
        onMouseOut: s,
        className: Ge([Um, `${Um}-${a}`]),
        cx: cT(t, r, e),
        cy: fT(n, r, e),
        r,
        stroke: "transparent",
        fill: "transparent",
      }),
    dT = () => !0;
  var Xr = (e) => {
    const t = ({
      id: n,
      className: r,
      type: i,
      data: o,
      onClick: s,
      onEdgeDoubleClick: a,
      selected: l,
      animated: u,
      label: c,
      labelStyle: f,
      labelShowBg: d,
      labelBgStyle: p,
      labelBgPadding: g,
      labelBgBorderRadius: y,
      style: S,
      source: m,
      target: h,
      sourceX: v,
      sourceY: w,
      targetX: E,
      targetY: _,
      sourcePosition: k,
      targetPosition: N,
      elementsSelectable: P,
      hidden: T,
      sourceHandleId: F,
      targetHandleId: z,
      onContextMenu: R,
      onMouseEnter: C,
      onMouseMove: I,
      onMouseLeave: j,
      edgeUpdaterRadius: D,
      onEdgeUpdate: O,
      onEdgeUpdateStart: M,
      onEdgeUpdateEnd: L,
      markerEnd: V,
      markerStart: $,
      rfId: Y,
      ariaLabel: U,
      isFocusable: G,
      isUpdatable: K,
      pathOptions: J,
      interactionWidth: ne,
    }) => {
      const he = b.useRef(null),
        [ye, $e] = b.useState(!1),
        [lt, ut] = b.useState(!1),
        Se = ze(),
        le = b.useMemo(() => `url(#${bf($, Y)})`, [$, Y]),
        Me = b.useMemo(() => `url(#${bf(V, Y)})`, [V, Y]);
      if (T) return null;
      const X = (Ke) => {
          const { edges: Pt, addSelectedEdges: fr } = Se.getState();
          if ((P && (Se.setState({ nodesSelectionActive: !1 }), fr([n])), s)) {
            const dr = Pt.find((pr) => pr.id === n);
            s(Ke, dr);
          }
        },
        Qt = So(n, Se.getState, a),
        an = So(n, Se.getState, R),
        ct = So(n, Se.getState, C),
        qt = So(n, Se.getState, I),
        ln = So(n, Se.getState, j),
        Wt = (Ke, Pt) => {
          if (Ke.button !== 0) return;
          const { edges: fr, isValidConnection: dr } = Se.getState(),
            pr = Pt ? h : m,
            $s = (Pt ? z : F) || null,
            hr = Pt ? "target" : "source",
            fu = dr || dT,
            du = Pt,
            lo = fr.find((mr) => mr.id === n);
          ut(!0), M == null || M(Ke, lo, hr);
          const pu = (mr) => {
            ut(!1), L == null || L(mr, lo, hr);
          };
          Vw({
            event: Ke,
            handleId: $s,
            nodeId: pr,
            onConnect: (mr) => (O == null ? void 0 : O(lo, mr)),
            isTarget: du,
            getState: Se.getState,
            setState: Se.setState,
            isValidConnection: fu,
            edgeUpdaterType: hr,
            onEdgeUpdateEnd: pu,
          });
        },
        wt = (Ke) => Wt(Ke, !0),
        un = (Ke) => Wt(Ke, !1),
        Dt = () => $e(!0),
        Yt = () => $e(!1),
        Cn = !P && !s,
        qr = (Ke) => {
          var Pt;
          if (Tw.includes(Ke.key) && P) {
            const {
              unselectNodesAndEdges: fr,
              addSelectedEdges: dr,
              edges: pr,
            } = Se.getState();
            Ke.key === "Escape"
              ? ((Pt = he.current) == null || Pt.blur(),
                fr({ edges: [pr.find((hr) => hr.id === n)] }))
              : dr([n]);
          }
        };
      return x.jsxs("g", {
        "className": Ge([
          "react-flow__edge",
          `react-flow__edge-${i}`,
          r,
          { selected: l, animated: u, inactive: Cn, updating: ye },
        ]),
        "onClick": X,
        "onDoubleClick": Qt,
        "onContextMenu": an,
        "onMouseEnter": ct,
        "onMouseMove": qt,
        "onMouseLeave": ln,
        "onKeyDown": G ? qr : void 0,
        "tabIndex": G ? 0 : void 0,
        "role": G ? "button" : void 0,
        "data-testid": `rf__edge-${n}`,
        "aria-label": U === null ? void 0 : U || `Edge from ${m} to ${h}`,
        "aria-describedby": G ? `${Kw}-${Y}` : void 0,
        "ref": he,
        "children": [
          !lt &&
            x.jsx(e, {
              id: n,
              source: m,
              target: h,
              selected: l,
              animated: u,
              label: c,
              labelStyle: f,
              labelShowBg: d,
              labelBgStyle: p,
              labelBgPadding: g,
              labelBgBorderRadius: y,
              data: o,
              style: S,
              sourceX: v,
              sourceY: w,
              targetX: E,
              targetY: _,
              sourcePosition: k,
              targetPosition: N,
              sourceHandleId: F,
              targetHandleId: z,
              markerStart: le,
              markerEnd: Me,
              pathOptions: J,
              interactionWidth: ne,
            }),
          K &&
            x.jsxs(x.Fragment, {
              children: [
                (K === "source" || K === !0) &&
                  x.jsx(Qm, {
                    position: k,
                    centerX: v,
                    centerY: w,
                    radius: D,
                    onMouseDown: wt,
                    onMouseEnter: Dt,
                    onMouseOut: Yt,
                    type: "source",
                  }),
                (K === "target" || K === !0) &&
                  x.jsx(Qm, {
                    position: N,
                    centerX: E,
                    centerY: _,
                    radius: D,
                    onMouseDown: un,
                    onMouseEnter: Dt,
                    onMouseOut: Yt,
                    type: "target",
                  }),
              ],
            }),
        ],
      });
    };
    return (t.displayName = "EdgeWrapper"), b.memo(t);
  };
  function pT(e) {
    const t = {
        default: Xr(e.default || gl),
        straight: Xr(e.bezier || pp),
        step: Xr(e.step || dp),
        smoothstep: Xr(e.step || Kl),
        simplebezier: Xr(e.simplebezier || fp),
      },
      n = {},
      r = Object.keys(e)
        .filter((i) => !["default", "bezier"].includes(i))
        .reduce((i, o) => ((i[o] = Xr(e[o] || gl)), i), n);
    return { ...t, ...r };
  }
  function qm(e, t, n = null) {
    const r = ((n == null ? void 0 : n.x) || 0) + t.x,
      i = ((n == null ? void 0 : n.y) || 0) + t.y,
      o = (n == null ? void 0 : n.width) || t.width,
      s = (n == null ? void 0 : n.height) || t.height;
    switch (e) {
      case W.Top:
        return { x: r + o / 2, y: i };
      case W.Right:
        return { x: r + o, y: i + s / 2 };
      case W.Bottom:
        return { x: r + o / 2, y: i + s };
      case W.Left:
        return { x: r, y: i + s / 2 };
    }
  }
  function Wm(e, t) {
    return e
      ? e.length === 1 || !t
        ? e[0]
        : (t && e.find((n) => n.id === t)) || null
      : null;
  }
  const hT = (e, t, n, r, i, o) => {
    const s = qm(n, e, t),
      a = qm(o, r, i);
    return { sourceX: s.x, sourceY: s.y, targetX: a.x, targetY: a.y };
  };
  function mT({
    sourcePos: e,
    targetPos: t,
    sourceWidth: n,
    sourceHeight: r,
    targetWidth: i,
    targetHeight: o,
    width: s,
    height: a,
    transform: l,
  }) {
    const u = {
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      x2: Math.max(e.x + n, t.x + i),
      y2: Math.max(e.y + r, t.y + o),
    };
    u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
    const c = Ow({
        x: (0 - l[0]) / l[2],
        y: (0 - l[1]) / l[2],
        width: s / l[2],
        height: a / l[2],
      }),
      f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)),
      d = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
    return Math.ceil(f * d) > 0;
  }
  function Ym(e) {
    var r, i, o, s, a;
    const t =
        ((r = e == null ? void 0 : e[Te]) == null ? void 0 : r.handleBounds) ||
        null,
      n =
        t &&
        (e == null ? void 0 : e.width) &&
        (e == null ? void 0 : e.height) &&
        typeof ((i = e == null ? void 0 : e.positionAbsolute) == null
          ? void 0
          : i.x) < "u" &&
        typeof ((o = e == null ? void 0 : e.positionAbsolute) == null
          ? void 0
          : o.y) < "u";
    return [
      {
        x:
          ((s = e == null ? void 0 : e.positionAbsolute) == null
            ? void 0
            : s.x) || 0,
        y:
          ((a = e == null ? void 0 : e.positionAbsolute) == null
            ? void 0
            : a.y) || 0,
        width: (e == null ? void 0 : e.width) || 0,
        height: (e == null ? void 0 : e.height) || 0,
      },
      t,
      !!n,
    ];
  }
  function Zw(e, t) {
    if (!e.parentNode) return !1;
    const n = t.get(e.parentNode);
    return n ? (n.selected ? !0 : Zw(n, t)) : !1;
  }
  function Xm(e, t, n) {
    let r = e;
    do {
      if (r != null && r.matches(t)) return !0;
      if (r === n.current) return !1;
      r = r.parentElement;
    } while (r);
    return !1;
  }
  function vT(e, t, n, r) {
    return Array.from(e.values())
      .filter(
        (i) =>
          (i.selected || i.id === r) &&
          (!i.parentNode || !Zw(i, e)) &&
          (i.draggable || (t && typeof i.draggable > "u"))
      )
      .map((i) => {
        var o, s;
        return {
          id: i.id,
          position: i.position || { x: 0, y: 0 },
          positionAbsolute: i.positionAbsolute || { x: 0, y: 0 },
          distance: {
            x: n.x - (((o = i.positionAbsolute) == null ? void 0 : o.x) ?? 0),
            y: n.y - (((s = i.positionAbsolute) == null ? void 0 : s.y) ?? 0),
          },
          delta: { x: 0, y: 0 },
          extent: i.extent,
          parentNode: i.parentNode,
          width: i.width,
          height: i.height,
        };
      });
  }
  function Jw(e, t, n, r, i = [0, 0], o) {
    let s = e.extent || r;
    if (e.extent === "parent")
      if (e.parentNode && e.width && e.height) {
        const u = n.get(e.parentNode),
          { x: c, y: f } = Ti(u, i).positionAbsolute;
        s =
          u && _t(c) && _t(f) && _t(u.width) && _t(u.height)
            ? [
                [c + e.width * i[0], f + e.height * i[1]],
                [
                  c + u.width - e.width + e.width * i[0],
                  f + u.height - e.height + e.height * i[1],
                ],
              ]
            : s;
      } else o == null || o("005", nr.error005()), (s = r);
    else if (e.extent && e.parentNode) {
      const u = n.get(e.parentNode),
        { x: c, y: f } = Ti(u, i).positionAbsolute;
      s = [
        [e.extent[0][0] + c, e.extent[0][1] + f],
        [e.extent[1][0] + c, e.extent[1][1] + f],
      ];
    }
    let a = { x: 0, y: 0 };
    if (e.parentNode) {
      const u = n.get(e.parentNode);
      a = Ti(u, i).positionAbsolute;
    }
    const l = s ? cp(t, s) : t;
    return { position: { x: l.x - a.x, y: l.y - a.y }, positionAbsolute: l };
  }
  function Yu({ nodeId: e, dragItems: t, nodeInternals: n }) {
    const r = t.map((i) => ({
      ...n.get(i.id),
      position: i.position,
      positionAbsolute: i.positionAbsolute,
    }));
    return [e ? r.find((i) => i.id === e) : r[0], r];
  }
  const Gm = (e, t, n, r) => {
    const i = t.querySelectorAll(e);
    if (!i || !i.length) return null;
    const o = Array.from(i),
      s = t.getBoundingClientRect(),
      a = { x: s.width * r[0], y: s.height * r[1] };
    return o.map((l) => {
      const u = l.getBoundingClientRect();
      return {
        id: l.getAttribute("data-handleid"),
        position: l.getAttribute("data-handlepos"),
        x: (u.left - s.left - a.x) / n,
        y: (u.top - s.top - a.y) / n,
        ...up(l),
      };
    });
  };
  function bo(e, t, n) {
    return n === void 0
      ? n
      : (r) => {
          const i = t().nodeInternals.get(e);
          n(r, { ...i });
        };
  }
  function _f({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
    const {
        addSelectedNodes: i,
        unselectNodesAndEdges: o,
        multiSelectionActive: s,
        nodeInternals: a,
      } = t.getState(),
      l = a.get(e);
    t.setState({ nodesSelectionActive: !1 }),
      l.selected
        ? (n || (l.selected && s)) &&
          (o({ nodes: [l] }),
          requestAnimationFrame(() => {
            var u;
            return (u = r == null ? void 0 : r.current) == null
              ? void 0
              : u.blur();
          }))
        : i([e]);
  }
  function yT() {
    const e = ze();
    return b.useCallback(({ sourceEvent: n }) => {
      const { transform: r, snapGrid: i, snapToGrid: o } = e.getState(),
        s = n.touches ? n.touches[0].clientX : n.clientX,
        a = n.touches ? n.touches[0].clientY : n.clientY,
        l = { x: (s - r[0]) / r[2], y: (a - r[1]) / r[2] };
      return {
        xSnapped: o ? i[0] * Math.round(l.x / i[0]) : l.x,
        ySnapped: o ? i[1] * Math.round(l.y / i[1]) : l.y,
        ...l,
      };
    }, []);
  }
  function Xu(e) {
    return (t, n, r) => (e == null ? void 0 : e(t, r));
  }
  function ex({
    nodeRef: e,
    disabled: t = !1,
    noDragClassName: n,
    handleSelector: r,
    nodeId: i,
    isSelectable: o,
    selectNodesOnDrag: s,
  }) {
    const a = ze(),
      [l, u] = b.useState(!1),
      c = b.useRef([]),
      f = b.useRef({ x: null, y: null }),
      d = b.useRef(0),
      p = b.useRef(null),
      g = b.useRef({ x: 0, y: 0 }),
      y = b.useRef(null),
      S = b.useRef(!1),
      m = yT();
    return (
      b.useEffect(() => {
        if (e != null && e.current) {
          const h = At(e.current),
            v = ({ x: E, y: _ }) => {
              const {
                nodeInternals: k,
                onNodeDrag: N,
                onSelectionDrag: P,
                updateNodePositions: T,
                nodeExtent: F,
                snapGrid: z,
                snapToGrid: R,
                nodeOrigin: C,
                onError: I,
              } = a.getState();
              f.current = { x: E, y: _ };
              let j = !1;
              if (
                ((c.current = c.current.map((O) => {
                  const M = { x: E - O.distance.x, y: _ - O.distance.y };
                  R &&
                    ((M.x = z[0] * Math.round(M.x / z[0])),
                    (M.y = z[1] * Math.round(M.y / z[1])));
                  const L = Jw(O, M, k, F, C, I);
                  return (
                    (j =
                      j ||
                      O.position.x !== L.position.x ||
                      O.position.y !== L.position.y),
                    (O.position = L.position),
                    (O.positionAbsolute = L.positionAbsolute),
                    O
                  );
                })),
                !j)
              )
                return;
              T(c.current, !0, !0), u(!0);
              const D = i ? N : Xu(P);
              if (D && y.current) {
                const [O, M] = Yu({
                  nodeId: i,
                  dragItems: c.current,
                  nodeInternals: k,
                });
                D(y.current, O, M);
              }
            },
            w = () => {
              if (!p.current) return;
              const [E, _] = Cw(g.current, p.current);
              if (E !== 0 || _ !== 0) {
                const { transform: k, panBy: N } = a.getState();
                (f.current.x = (f.current.x ?? 0) - E / k[2]),
                  (f.current.y = (f.current.y ?? 0) - _ / k[2]),
                  N({ x: E, y: _ }) && v(f.current);
              }
              d.current = requestAnimationFrame(w);
            };
          if (t) h.on(".drag", null);
          else {
            const E = LC()
              .on("start", (_) => {
                var j;
                const {
                    nodeInternals: k,
                    multiSelectionActive: N,
                    domNode: P,
                    nodesDraggable: T,
                    unselectNodesAndEdges: F,
                    onNodeDragStart: z,
                    onSelectionDragStart: R,
                  } = a.getState(),
                  C = i ? z : Xu(R);
                !s &&
                  !N &&
                  i &&
                  (((j = k.get(i)) != null && j.selected) || F()),
                  i && o && s && _f({ id: i, store: a, nodeRef: e });
                const I = m(_);
                if (
                  ((f.current = I),
                  (c.current = vT(k, T, I, i)),
                  C && c.current)
                ) {
                  const [D, O] = Yu({
                    nodeId: i,
                    dragItems: c.current,
                    nodeInternals: k,
                  });
                  C(_.sourceEvent, D, O);
                }
                (p.current =
                  (P == null ? void 0 : P.getBoundingClientRect()) || null),
                  (g.current = Jn(_.sourceEvent, p.current));
              })
              .on("drag", (_) => {
                const k = m(_),
                  { autoPanOnNodeDrag: N } = a.getState();
                !S.current && N && ((S.current = !0), w()),
                  (f.current.x !== k.xSnapped || f.current.y !== k.ySnapped) &&
                    c.current &&
                    ((y.current = _.sourceEvent),
                    (g.current = Jn(_.sourceEvent, p.current)),
                    v(k));
              })
              .on("end", (_) => {
                if (
                  (u(!1),
                  (S.current = !1),
                  cancelAnimationFrame(d.current),
                  c.current)
                ) {
                  const {
                      updateNodePositions: k,
                      nodeInternals: N,
                      onNodeDragStop: P,
                      onSelectionDragStop: T,
                    } = a.getState(),
                    F = i ? P : Xu(T);
                  if ((k(c.current, !1, !1), F)) {
                    const [z, R] = Yu({
                      nodeId: i,
                      dragItems: c.current,
                      nodeInternals: N,
                    });
                    F(_.sourceEvent, z, R);
                  }
                }
              })
              .filter((_) => {
                const k = _.target;
                return (
                  !_.button && (!n || !Xm(k, `.${n}`, e)) && (!r || Xm(k, r, e))
                );
              });
            return (
              h.call(E),
              () => {
                h.on(".drag", null);
              }
            );
          }
        }
      }, [e, t, n, r, o, a, i, s, m]),
      l
    );
  }
  function tx() {
    const e = ze();
    return b.useCallback((n) => {
      const {
          nodeInternals: r,
          nodeExtent: i,
          updateNodePositions: o,
          getNodes: s,
          snapToGrid: a,
          snapGrid: l,
          onError: u,
          nodesDraggable: c,
        } = e.getState(),
        f = s().filter(
          (h) => h.selected && (h.draggable || (c && typeof h.draggable > "u"))
        ),
        d = a ? l[0] : 5,
        p = a ? l[1] : 5,
        g = n.isShiftPressed ? 4 : 1,
        y = n.x * d * g,
        S = n.y * p * g,
        m = f.map((h) => {
          if (h.positionAbsolute) {
            const v = {
              x: h.positionAbsolute.x + y,
              y: h.positionAbsolute.y + S,
            };
            a &&
              ((v.x = l[0] * Math.round(v.x / l[0])),
              (v.y = l[1] * Math.round(v.y / l[1])));
            const { positionAbsolute: w, position: E } = Jw(
              h,
              v,
              r,
              i,
              void 0,
              u
            );
            (h.position = E), (h.positionAbsolute = w);
          }
          return h;
        });
      o(m, !0, !1);
    }, []);
  }
  const Di = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  };
  var Eo = (e) => {
    const t = ({
      id: n,
      type: r,
      data: i,
      xPos: o,
      yPos: s,
      xPosOrigin: a,
      yPosOrigin: l,
      selected: u,
      onClick: c,
      onMouseEnter: f,
      onMouseMove: d,
      onMouseLeave: p,
      onContextMenu: g,
      onDoubleClick: y,
      style: S,
      className: m,
      isDraggable: h,
      isSelectable: v,
      isConnectable: w,
      isFocusable: E,
      selectNodesOnDrag: _,
      sourcePosition: k,
      targetPosition: N,
      hidden: P,
      resizeObserver: T,
      dragHandle: F,
      zIndex: z,
      isParent: R,
      noDragClassName: C,
      noPanClassName: I,
      initialized: j,
      disableKeyboardA11y: D,
      ariaLabel: O,
      rfId: M,
    }) => {
      const L = ze(),
        V = b.useRef(null),
        $ = b.useRef(k),
        Y = b.useRef(N),
        U = b.useRef(r),
        G = v || h || c || f || d || p,
        K = tx(),
        J = bo(n, L.getState, f),
        ne = bo(n, L.getState, d),
        he = bo(n, L.getState, p),
        ye = bo(n, L.getState, g),
        $e = bo(n, L.getState, y),
        lt = (le) => {
          if ((v && (!_ || !h) && _f({ id: n, store: L, nodeRef: V }), c)) {
            const Me = L.getState().nodeInternals.get(n);
            c(le, { ...Me });
          }
        },
        ut = (le) => {
          if (!xf(le))
            if (Tw.includes(le.key) && v) {
              const Me = le.key === "Escape";
              _f({ id: n, store: L, unselect: Me, nodeRef: V });
            } else
              !D &&
                h &&
                u &&
                Object.prototype.hasOwnProperty.call(Di, le.key) &&
                (L.setState({
                  ariaLiveMessage: `Moved selected node ${le.key
                    .replace("Arrow", "")
                    .toLowerCase()}. New position, x: ${~~o}, y: ${~~s}`,
                }),
                K({
                  x: Di[le.key].x,
                  y: Di[le.key].y,
                  isShiftPressed: le.shiftKey,
                }));
        };
      b.useEffect(() => {
        if (V.current && !P) {
          const le = V.current;
          return (
            T == null || T.observe(le),
            () => (T == null ? void 0 : T.unobserve(le))
          );
        }
      }, [P]),
        b.useEffect(() => {
          const le = U.current !== r,
            Me = $.current !== k,
            X = Y.current !== N;
          V.current &&
            (le || Me || X) &&
            (le && (U.current = r),
            Me && ($.current = k),
            X && (Y.current = N),
            L.getState().updateNodeDimensions([
              { id: n, nodeElement: V.current, forceUpdate: !0 },
            ]));
        }, [n, r, k, N]);
      const Se = ex({
        nodeRef: V,
        disabled: P || !h,
        noDragClassName: C,
        handleSelector: F,
        nodeId: n,
        isSelectable: v,
        selectNodesOnDrag: _,
      });
      return P
        ? null
        : x.jsx("div", {
            "className": Ge([
              "react-flow__node",
              `react-flow__node-${r}`,
              { [I]: h },
              m,
              { selected: u, selectable: v, parent: R, dragging: Se },
            ]),
            "ref": V,
            "style": {
              zIndex: z,
              transform: `translate(${a}px,${l}px)`,
              pointerEvents: G ? "all" : "none",
              visibility: j ? "visible" : "hidden",
              ...S,
            },
            "data-id": n,
            "data-testid": `rf__node-${n}`,
            "onMouseEnter": J,
            "onMouseMove": ne,
            "onMouseLeave": he,
            "onContextMenu": ye,
            "onClick": lt,
            "onDoubleClick": $e,
            "onKeyDown": E ? ut : void 0,
            "tabIndex": E ? 0 : void 0,
            "role": E ? "button" : void 0,
            "aria-describedby": D ? void 0 : `${Gw}-${M}`,
            "aria-label": O,
            "children": x.jsx(BO, {
              value: n,
              children: x.jsx(e, {
                id: n,
                data: i,
                type: r,
                xPos: o,
                yPos: s,
                selected: u,
                isConnectable: w,
                sourcePosition: k,
                targetPosition: N,
                dragging: Se,
                dragHandle: F,
                zIndex: z,
              }),
            }),
          });
    };
    return (t.displayName = "NodeWrapper"), b.memo(t);
  };
  function gT(e) {
    const t = {
        input: Eo(e.input || qw),
        default: Eo(e.default || Ef),
        output: Eo(e.output || Yw),
        group: Eo(e.group || mp),
      },
      n = {},
      r = Object.keys(e)
        .filter((i) => !["input", "default", "output", "group"].includes(i))
        .reduce((i, o) => ((i[o] = Eo(e[o] || Ef)), i), n);
    return { ...t, ...r };
  }
  const wT = ({ x: e, y: t, width: n, height: r, origin: i }) =>
      !n || !r
        ? { x: e, y: t }
        : i[0] < 0 || i[1] < 0 || i[0] > 1 || i[1] > 1
        ? { x: e, y: t }
        : { x: e - n * i[0], y: t - r * i[1] },
    xT = typeof document < "u" ? document : null;
  var Ss = (e = null, t = { target: xT }) => {
    const [n, r] = b.useState(!1),
      i = b.useRef(!1),
      o = b.useRef(new Set([])),
      [s, a] = b.useMemo(() => {
        if (e !== null) {
          const u = (Array.isArray(e) ? e : [e])
              .filter((f) => typeof f == "string")
              .map((f) => f.split("+")),
            c = u.reduce((f, d) => f.concat(...d), []);
          return [u, c];
        }
        return [[], []];
      }, [e]);
    return (
      b.useEffect(() => {
        var l, u;
        if (e !== null) {
          const c = (p) => {
              if (
                ((i.current = p.ctrlKey || p.metaKey || p.shiftKey),
                !i.current && xf(p))
              )
                return !1;
              const g = Zm(p.code, a);
              o.current.add(p[g]),
                Km(s, o.current, !1) && (p.preventDefault(), r(!0));
            },
            f = (p) => {
              if (!i.current && xf(p)) return !1;
              const g = Zm(p.code, a);
              Km(s, o.current, !0)
                ? (r(!1), o.current.clear())
                : o.current.delete(p[g]),
                (i.current = !1);
            },
            d = () => {
              o.current.clear(), r(!1);
            };
          return (
            (l = t == null ? void 0 : t.target) == null ||
              l.addEventListener("keydown", c),
            (u = t == null ? void 0 : t.target) == null ||
              u.addEventListener("keyup", f),
            window.addEventListener("blur", d),
            () => {
              var p, g;
              (p = t == null ? void 0 : t.target) == null ||
                p.removeEventListener("keydown", c),
                (g = t == null ? void 0 : t.target) == null ||
                  g.removeEventListener("keyup", f),
                window.removeEventListener("blur", d);
            }
          );
        }
      }, [e, r]),
      n
    );
  };
  function Km(e, t, n) {
    return e
      .filter((r) => n || r.length === t.size)
      .some((r) => r.every((i) => t.has(i)));
  }
  function Zm(e, t) {
    return t.includes(e) ? "code" : "key";
  }
  function nx(e, t, n, r) {
    var s, a;
    if (!e.parentNode) return n;
    const i = t.get(e.parentNode),
      o = Ti(i, r);
    return nx(
      i,
      t,
      {
        x: (n.x ?? 0) + o.x,
        y: (n.y ?? 0) + o.y,
        z:
          (((s = i[Te]) == null ? void 0 : s.z) ?? 0) > (n.z ?? 0)
            ? ((a = i[Te]) == null ? void 0 : a.z) ?? 0
            : n.z ?? 0,
      },
      r
    );
  }
  function rx(e, t, n) {
    e.forEach((r) => {
      var i;
      if (r.parentNode && !e.has(r.parentNode))
        throw new Error(`Parent node ${r.parentNode} not found`);
      if (r.parentNode || (n != null && n[r.id])) {
        const {
          x: o,
          y: s,
          z: a,
        } = nx(
          r,
          e,
          { ...r.position, z: ((i = r[Te]) == null ? void 0 : i.z) ?? 0 },
          t
        );
        (r.positionAbsolute = { x: o, y: s }),
          (r[Te].z = a),
          n != null && n[r.id] && (r[Te].isParent = !0);
      }
    });
  }
  function Gu(e, t, n, r) {
    const i = new Map(),
      o = {},
      s = r ? 1e3 : 0;
    return (
      e.forEach((a) => {
        var f;
        const l = (_t(a.zIndex) ? a.zIndex : 0) + (a.selected ? s : 0),
          u = t.get(a.id),
          c = {
            width: u == null ? void 0 : u.width,
            height: u == null ? void 0 : u.height,
            ...a,
            positionAbsolute: { x: a.position.x, y: a.position.y },
          };
        a.parentNode && ((c.parentNode = a.parentNode), (o[a.parentNode] = !0)),
          Object.defineProperty(c, Te, {
            enumerable: !1,
            value: {
              handleBounds:
                (f = u == null ? void 0 : u[Te]) == null
                  ? void 0
                  : f.handleBounds,
              z: l,
            },
          }),
          i.set(a.id, c);
      }),
      rx(i, n, o),
      i
    );
  }
  function ix(e, t = {}) {
    const {
        getNodes: n,
        width: r,
        height: i,
        minZoom: o,
        maxZoom: s,
        d3Zoom: a,
        d3Selection: l,
        fitViewOnInitDone: u,
        fitViewOnInit: c,
        nodeOrigin: f,
      } = e(),
      d = t.initial && !u && c;
    if (a && l && (d || !t.initial)) {
      const g = n().filter((S) => {
          var h;
          const m = t.includeHiddenNodes ? S.width && S.height : !S.hidden;
          return (h = t.nodes) != null && h.length
            ? m && t.nodes.some((v) => v.id === S.id)
            : m;
        }),
        y = g.every((S) => S.width && S.height);
      if (g.length > 0 && y) {
        const S = Lw(g, f),
          [m, h, v] = zw(
            S,
            r,
            i,
            t.minZoom ?? o,
            t.maxZoom ?? s,
            t.padding ?? 0.1
          ),
          w = Zn.translate(m, h).scale(v);
        return (
          typeof t.duration == "number" && t.duration > 0
            ? a.transform(gr(l, t.duration), w)
            : a.transform(l, w),
          !0
        );
      }
    }
    return !1;
  }
  function ST(e, t) {
    return (
      e.forEach((n) => {
        const r = t.get(n.id);
        r && t.set(r.id, { ...r, [Te]: r[Te], selected: n.selected });
      }),
      new Map(t)
    );
  }
  function bT(e, t) {
    return t.map((n) => {
      const r = e.find((i) => i.id === n.id);
      return r && (n.selected = r.selected), n;
    });
  }
  function fa({ changedNodes: e, changedEdges: t, get: n, set: r }) {
    const {
      nodeInternals: i,
      edges: o,
      onNodesChange: s,
      onEdgesChange: a,
      hasDefaultNodes: l,
      hasDefaultEdges: u,
    } = n();
    e != null &&
      e.length &&
      (l && r({ nodeInternals: ST(e, i) }), s == null || s(e)),
      t != null && t.length && (u && r({ edges: bT(t, o) }), a == null || a(t));
  }
  const Gr = () => {},
    ET = {
      zoomIn: Gr,
      zoomOut: Gr,
      zoomTo: Gr,
      getZoom: () => 1,
      setViewport: Gr,
      getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
      fitView: () => !1,
      setCenter: Gr,
      fitBounds: Gr,
      project: (e) => e,
      viewportInitialized: !1,
    },
    _T = (e) => ({ d3Zoom: e.d3Zoom, d3Selection: e.d3Selection }),
    kT = () => {
      const e = ze(),
        { d3Zoom: t, d3Selection: n } = ce(_T, Qe);
      return b.useMemo(
        () =>
          n && t
            ? {
                zoomIn: (i) =>
                  t.scaleBy(gr(n, i == null ? void 0 : i.duration), 1.2),
                zoomOut: (i) =>
                  t.scaleBy(gr(n, i == null ? void 0 : i.duration), 1 / 1.2),
                zoomTo: (i, o) =>
                  t.scaleTo(gr(n, o == null ? void 0 : o.duration), i),
                getZoom: () => e.getState().transform[2],
                setViewport: (i, o) => {
                  const [s, a, l] = e.getState().transform,
                    u = Zn.translate(i.x ?? s, i.y ?? a).scale(i.zoom ?? l);
                  t.transform(gr(n, o == null ? void 0 : o.duration), u);
                },
                getViewport: () => {
                  const [i, o, s] = e.getState().transform;
                  return { x: i, y: o, zoom: s };
                },
                fitView: (i) => ix(e.getState, i),
                setCenter: (i, o, s) => {
                  const { width: a, height: l, maxZoom: u } = e.getState(),
                    c = typeof (s == null ? void 0 : s.zoom) < "u" ? s.zoom : u,
                    f = a / 2 - i * c,
                    d = l / 2 - o * c,
                    p = Zn.translate(f, d).scale(c);
                  t.transform(gr(n, s == null ? void 0 : s.duration), p);
                },
                fitBounds: (i, o) => {
                  const {
                      width: s,
                      height: a,
                      minZoom: l,
                      maxZoom: u,
                    } = e.getState(),
                    [c, f, d] = zw(
                      i,
                      s,
                      a,
                      l,
                      u,
                      (o == null ? void 0 : o.padding) ?? 0.1
                    ),
                    p = Zn.translate(c, f).scale(d);
                  t.transform(gr(n, o == null ? void 0 : o.duration), p);
                },
                project: (i) => {
                  const {
                    transform: o,
                    snapToGrid: s,
                    snapGrid: a,
                  } = e.getState();
                  return Iw(i, o, s, a);
                },
                viewportInitialized: !0,
              }
            : ET,
        [t, n]
      );
    };
  function Jl() {
    const e = kT(),
      t = ze(),
      n = b.useCallback(
        () =>
          t
            .getState()
            .getNodes()
            .map((y) => ({ ...y })),
        []
      ),
      r = b.useCallback((y) => t.getState().nodeInternals.get(y), []),
      i = b.useCallback(() => {
        const { edges: y = [] } = t.getState();
        return y.map((S) => ({ ...S }));
      }, []),
      o = b.useCallback((y) => {
        const { edges: S = [] } = t.getState();
        return S.find((m) => m.id === y);
      }, []),
      s = b.useCallback((y) => {
        const {
            getNodes: S,
            setNodes: m,
            hasDefaultNodes: h,
            onNodesChange: v,
          } = t.getState(),
          w = S(),
          E = typeof y == "function" ? y(w) : y;
        if (h) m(E);
        else if (v) {
          const _ =
            E.length === 0
              ? w.map((k) => ({ type: "remove", id: k.id }))
              : E.map((k) => ({ item: k, type: "reset" }));
          v(_);
        }
      }, []),
      a = b.useCallback((y) => {
        const {
            edges: S = [],
            setEdges: m,
            hasDefaultEdges: h,
            onEdgesChange: v,
          } = t.getState(),
          w = typeof y == "function" ? y(S) : y;
        if (h) m(w);
        else if (v) {
          const E =
            w.length === 0
              ? S.map((_) => ({ type: "remove", id: _.id }))
              : w.map((_) => ({ item: _, type: "reset" }));
          v(E);
        }
      }, []),
      l = b.useCallback((y) => {
        const S = Array.isArray(y) ? y : [y],
          {
            getNodes: m,
            setNodes: h,
            hasDefaultNodes: v,
            onNodesChange: w,
          } = t.getState();
        if (v) {
          const _ = [...m(), ...S];
          h(_);
        } else if (w) {
          const E = S.map((_) => ({ item: _, type: "add" }));
          w(E);
        }
      }, []),
      u = b.useCallback((y) => {
        const S = Array.isArray(y) ? y : [y],
          {
            edges: m = [],
            setEdges: h,
            hasDefaultEdges: v,
            onEdgesChange: w,
          } = t.getState();
        if (v) h([...m, ...S]);
        else if (w) {
          const E = S.map((_) => ({ item: _, type: "add" }));
          w(E);
        }
      }, []),
      c = b.useCallback(() => {
        const { getNodes: y, edges: S = [], transform: m } = t.getState(),
          [h, v, w] = m;
        return {
          nodes: y().map((E) => ({ ...E })),
          edges: S.map((E) => ({ ...E })),
          viewport: { x: h, y: v, zoom: w },
        };
      }, []),
      f = b.useCallback(({ nodes: y, edges: S }) => {
        const {
            nodeInternals: m,
            getNodes: h,
            edges: v,
            hasDefaultNodes: w,
            hasDefaultEdges: E,
            onNodesDelete: _,
            onEdgesDelete: k,
            onNodesChange: N,
            onEdgesChange: P,
          } = t.getState(),
          T = (y || []).map((I) => I.id),
          F = (S || []).map((I) => I.id),
          z = h().reduce((I, j) => {
            const D =
              !T.includes(j.id) &&
              j.parentNode &&
              I.find((M) => M.id === j.parentNode);
            return (
              (typeof j.deletable == "boolean" ? j.deletable : !0) &&
                (T.includes(j.id) || D) &&
                I.push(j),
              I
            );
          }, []),
          R = v.filter((I) =>
            typeof I.deletable == "boolean" ? I.deletable : !0
          ),
          C = R.filter((I) => F.includes(I.id));
        if (z || C) {
          const I = Fw(z, R),
            j = [...C, ...I],
            D = j.reduce((O, M) => (O.includes(M.id) || O.push(M.id), O), []);
          if (
            ((E || w) &&
              (E && t.setState({ edges: v.filter((O) => !D.includes(O.id)) }),
              w &&
                (z.forEach((O) => {
                  m.delete(O.id);
                }),
                t.setState({ nodeInternals: new Map(m) }))),
            D.length > 0 &&
              (k == null || k(j),
              P && P(D.map((O) => ({ id: O, type: "remove" })))),
            z.length > 0 && (_ == null || _(z), N))
          ) {
            const O = z.map((M) => ({ id: M.id, type: "remove" }));
            N(O);
          }
        }
      }, []),
      d = b.useCallback((y) => {
        const S = MO(y),
          m = S ? null : t.getState().nodeInternals.get(y.id);
        return [S ? y : Lm(m), m, S];
      }, []),
      p = b.useCallback((y, S = !0, m) => {
        const [h, v, w] = d(y);
        return h
          ? (m || t.getState().getNodes()).filter((E) => {
              if (!w && (E.id === v.id || !E.positionAbsolute)) return !1;
              const _ = Lm(E),
                k = wf(_, h);
              return (S && k > 0) || k >= y.width * y.height;
            })
          : [];
      }, []),
      g = b.useCallback((y, S, m = !0) => {
        const [h] = d(y);
        if (!h) return !1;
        const v = wf(h, S);
        return (m && v > 0) || v >= y.width * y.height;
      }, []);
    return b.useMemo(
      () => ({
        ...e,
        getNodes: n,
        getNode: r,
        getEdges: i,
        getEdge: o,
        setNodes: s,
        setEdges: a,
        addNodes: l,
        addEdges: u,
        toObject: c,
        deleteElements: f,
        getIntersectingNodes: p,
        isNodeIntersecting: g,
      }),
      [e, n, r, i, o, s, a, l, u, c, f, p, g]
    );
  }
  var CT = ({ deleteKeyCode: e, multiSelectionKeyCode: t }) => {
    const n = ze(),
      { deleteElements: r } = Jl(),
      i = Ss(e),
      o = Ss(t);
    b.useEffect(() => {
      if (i) {
        const { edges: s, getNodes: a } = n.getState(),
          l = a().filter((c) => c.selected),
          u = s.filter((c) => c.selected);
        r({ nodes: l, edges: u }), n.setState({ nodesSelectionActive: !1 });
      }
    }, [i]),
      b.useEffect(() => {
        n.setState({ multiSelectionActive: o });
      }, [o]);
  };
  function NT(e) {
    const t = ze();
    b.useEffect(() => {
      let n;
      const r = () => {
        var o, s;
        if (!e.current) return;
        const i = up(e.current);
        (i.height === 0 || i.width === 0) &&
          ((s = (o = t.getState()).onError) == null ||
            s.call(o, "004", nr.error004())),
          t.setState({ width: i.width || 500, height: i.height || 500 });
      };
      return (
        r(),
        window.addEventListener("resize", r),
        e.current &&
          ((n = new ResizeObserver(() => r())), n.observe(e.current)),
        () => {
          window.removeEventListener("resize", r),
            n && e.current && n.unobserve(e.current);
        }
      );
    }, []);
  }
  const vp = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    OT = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
    Ku = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
    Kr = (e, t) => e.target.closest(`.${t}`),
    Jm = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
    TT = (e) => ({
      d3Zoom: e.d3Zoom,
      d3Selection: e.d3Selection,
      d3ZoomHandler: e.d3ZoomHandler,
      userSelectionActive: e.userSelectionActive,
    }),
    DT = ({
      onMove: e,
      onMoveStart: t,
      onMoveEnd: n,
      onPaneContextMenu: r,
      zoomOnScroll: i = !0,
      zoomOnPinch: o = !0,
      panOnScroll: s = !1,
      panOnScrollSpeed: a = 0.5,
      panOnScrollMode: l = Oi.Free,
      zoomOnDoubleClick: u = !0,
      elementsSelectable: c,
      panOnDrag: f = !0,
      defaultViewport: d,
      translateExtent: p,
      minZoom: g,
      maxZoom: y,
      zoomActivationKeyCode: S,
      preventScrolling: m = !0,
      children: h,
      noWheelClassName: v,
      noPanClassName: w,
    }) => {
      const E = b.useRef(),
        _ = ze(),
        k = b.useRef(!1),
        N = b.useRef(!1),
        P = b.useRef(null),
        T = b.useRef({ x: 0, y: 0, zoom: 0 }),
        {
          d3Zoom: F,
          d3Selection: z,
          d3ZoomHandler: R,
          userSelectionActive: C,
        } = ce(TT, Qe),
        I = Ss(S),
        j = b.useRef(0);
      return (
        NT(P),
        b.useEffect(() => {
          if (P.current) {
            const D = P.current.getBoundingClientRect(),
              O = CO().scaleExtent([g, y]).translateExtent(p),
              M = At(P.current).call(O),
              L = Zn.translate(d.x, d.y).scale(Ui(d.zoom, g, y)),
              V = [
                [0, 0],
                [D.width, D.height],
              ],
              $ = O.constrain()(L, V, p);
            O.transform(M, $),
              _.setState({
                d3Zoom: O,
                d3Selection: M,
                d3ZoomHandler: M.on("wheel.zoom"),
                transform: [$.x, $.y, $.k],
                domNode: P.current.closest(".react-flow"),
              });
          }
        }, []),
        b.useEffect(() => {
          z &&
            F &&
            (s && !I && !C
              ? z.on(
                  "wheel.zoom",
                  (D) => {
                    if (Kr(D, v)) return !1;
                    D.preventDefault(), D.stopImmediatePropagation();
                    const O = z.property("__zoom").k || 1;
                    if (D.ctrlKey && o) {
                      const $ = Kt(D),
                        Y =
                          -D.deltaY *
                          (D.deltaMode === 1 ? 0.05 : D.deltaMode ? 1 : 0.002) *
                          10,
                        U = O * Math.pow(2, Y);
                      F.scaleTo(z, U, $);
                      return;
                    }
                    const M = D.deltaMode === 1 ? 20 : 1,
                      L = l === Oi.Vertical ? 0 : D.deltaX * M,
                      V = l === Oi.Horizontal ? 0 : D.deltaY * M;
                    F.translateBy(z, -(L / O) * a, -(V / O) * a);
                  },
                  { passive: !1 }
                )
              : typeof R < "u" &&
                z.on(
                  "wheel.zoom",
                  function (D, O) {
                    if (!m || Kr(D, v)) return null;
                    D.preventDefault(), R.call(this, D, O);
                  },
                  { passive: !1 }
                ));
        }, [C, s, l, z, F, R, I, o, m, v]),
        b.useEffect(() => {
          F &&
            F.on("start", (D) => {
              var M;
              if (!D.sourceEvent) return null;
              j.current = D.sourceEvent.button;
              const { onViewportChangeStart: O } = _.getState();
              if (
                ((k.current = !0),
                ((M = D.sourceEvent) == null ? void 0 : M.type) ===
                  "mousedown" && _.setState({ paneDragging: !0 }),
                t || O)
              ) {
                const L = Ku(D.transform);
                (T.current = L),
                  O == null || O(L),
                  t == null || t(D.sourceEvent, L);
              }
            });
        }, [F, t]),
        b.useEffect(() => {
          F &&
            (C && !k.current
              ? F.on("zoom", null)
              : C ||
                F.on("zoom", (D) => {
                  const { onViewportChange: O } = _.getState();
                  if (
                    (_.setState({
                      transform: [D.transform.x, D.transform.y, D.transform.k],
                    }),
                    (N.current = !!(r && Jm(f, j.current ?? 0))),
                    e || O)
                  ) {
                    const M = Ku(D.transform);
                    O == null || O(M), e == null || e(D.sourceEvent, M);
                  }
                }));
        }, [C, F, e, f, r]),
        b.useEffect(() => {
          F &&
            F.on("end", (D) => {
              if (!D.sourceEvent) return null;
              const { onViewportChangeEnd: O } = _.getState();
              if (
                ((k.current = !1),
                _.setState({ paneDragging: !1 }),
                r && Jm(f, j.current ?? 0) && !N.current && r(D.sourceEvent),
                (N.current = !1),
                (n || O) && OT(T.current, D.transform))
              ) {
                const M = Ku(D.transform);
                (T.current = M),
                  clearTimeout(E.current),
                  (E.current = setTimeout(
                    () => {
                      O == null || O(M), n == null || n(D.sourceEvent, M);
                    },
                    s ? 150 : 0
                  ));
              }
            });
        }, [F, s, f, n, r]),
        b.useEffect(() => {
          F &&
            F.filter((D) => {
              const O = I || i,
                M = o && D.ctrlKey;
              if (
                D.button === 1 &&
                D.type === "mousedown" &&
                (Kr(D, "react-flow__node") || Kr(D, "react-flow__edge"))
              )
                return !0;
              if (
                (!f && !O && !s && !u && !o) ||
                C ||
                (!u && D.type === "dblclick") ||
                (Kr(D, v) && D.type === "wheel") ||
                (Kr(D, w) && D.type !== "wheel") ||
                (!o && D.ctrlKey && D.type === "wheel") ||
                (!O && !s && !M && D.type === "wheel") ||
                (!f && (D.type === "mousedown" || D.type === "touchstart")) ||
                (Array.isArray(f) &&
                  !f.includes(D.button) &&
                  (D.type === "mousedown" || D.type === "touchstart"))
              )
                return !1;
              const L =
                (Array.isArray(f) && f.includes(D.button)) ||
                !D.button ||
                D.button <= 1;
              return (!D.ctrlKey || D.type === "wheel") && L;
            });
        }, [C, F, i, o, s, u, f, c, I]),
        x.jsx("div", {
          className: "react-flow__renderer",
          ref: P,
          style: vp,
          children: h,
        })
      );
    },
    PT = (e) => ({
      userSelectionActive: e.userSelectionActive,
      userSelectionRect: e.userSelectionRect,
    });
  function RT() {
    const { userSelectionActive: e, userSelectionRect: t } = ce(PT, Qe);
    return e && t
      ? x.jsx("div", {
          className: "react-flow__selection react-flow__container",
          style: {
            width: t.width,
            height: t.height,
            transform: `translate(${t.x}px, ${t.y}px)`,
          },
        })
      : null;
  }
  function ev(e, t) {
    const n = e.find((r) => r.id === t.parentNode);
    if (n) {
      const r = t.position.x + t.width - n.width,
        i = t.position.y + t.height - n.height;
      if (r > 0 || i > 0 || t.position.x < 0 || t.position.y < 0) {
        if (
          ((n.style = { ...n.style }),
          (n.style.width = n.style.width ?? n.width),
          (n.style.height = n.style.height ?? n.height),
          r > 0 && (n.style.width += r),
          i > 0 && (n.style.height += i),
          t.position.x < 0)
        ) {
          const o = Math.abs(t.position.x);
          (n.position.x = n.position.x - o),
            (n.style.width += o),
            (t.position.x = 0);
        }
        if (t.position.y < 0) {
          const o = Math.abs(t.position.y);
          (n.position.y = n.position.y - o),
            (n.style.height += o),
            (t.position.y = 0);
        }
        (n.width = n.style.width), (n.height = n.style.height);
      }
    }
  }
  function ox(e, t) {
    if (e.some((r) => r.type === "reset"))
      return e.filter((r) => r.type === "reset").map((r) => r.item);
    const n = e.filter((r) => r.type === "add").map((r) => r.item);
    return t.reduce((r, i) => {
      const o = e.filter((a) => a.id === i.id);
      if (o.length === 0) return r.push(i), r;
      const s = { ...i };
      for (const a of o)
        if (a)
          switch (a.type) {
            case "select": {
              s.selected = a.selected;
              break;
            }
            case "position": {
              typeof a.position < "u" && (s.position = a.position),
                typeof a.positionAbsolute < "u" &&
                  (s.positionAbsolute = a.positionAbsolute),
                typeof a.dragging < "u" && (s.dragging = a.dragging),
                s.expandParent && ev(r, s);
              break;
            }
            case "dimensions": {
              typeof a.dimensions < "u" &&
                ((s.width = a.dimensions.width),
                (s.height = a.dimensions.height)),
                typeof a.updateStyle < "u" &&
                  (s.style = { ...(s.style || {}), ...a.dimensions }),
                typeof a.resizing == "boolean" && (s.resizing = a.resizing),
                s.expandParent && ev(r, s);
              break;
            }
            case "remove":
              return r;
          }
      return r.push(s), r;
    }, n);
  }
  function sx(e, t) {
    return ox(e, t);
  }
  function jT(e, t) {
    return ox(e, t);
  }
  const jn = (e, t) => ({ id: e, type: "select", selected: t });
  function vi(e, t) {
    return e.reduce((n, r) => {
      const i = t.includes(r.id);
      return (
        !r.selected && i
          ? ((r.selected = !0), n.push(jn(r.id, !0)))
          : r.selected && !i && ((r.selected = !1), n.push(jn(r.id, !1))),
        n
      );
    }, []);
  }
  const Zu = (e, t) => (n) => {
      n.target === t.current && (e == null || e(n));
    },
    MT = (e) => ({
      userSelectionActive: e.userSelectionActive,
      elementsSelectable: e.elementsSelectable,
      dragging: e.paneDragging,
    }),
    ax = b.memo(
      ({
        isSelecting: e,
        selectionMode: t = Qi.Full,
        panOnDrag: n,
        onSelectionStart: r,
        onSelectionEnd: i,
        onPaneClick: o,
        onPaneContextMenu: s,
        onPaneScroll: a,
        onPaneMouseEnter: l,
        onPaneMouseMove: u,
        onPaneMouseLeave: c,
        children: f,
      }) => {
        const d = b.useRef(null),
          p = ze(),
          g = b.useRef(0),
          y = b.useRef(0),
          S = b.useRef(),
          {
            userSelectionActive: m,
            elementsSelectable: h,
            dragging: v,
          } = ce(MT, Qe),
          w = () => {
            p.setState({ userSelectionActive: !1, userSelectionRect: null }),
              (g.current = 0),
              (y.current = 0);
          },
          E = (R) => {
            o == null || o(R),
              p.getState().resetSelectedElements(),
              p.setState({ nodesSelectionActive: !1 });
          },
          _ = (R) => {
            if (Array.isArray(n) && n != null && n.includes(2)) {
              R.preventDefault();
              return;
            }
            s == null || s(R);
          },
          k = a ? (R) => a(R) : void 0,
          N = (R) => {
            const { resetSelectedElements: C, domNode: I } = p.getState();
            if (
              ((S.current = I == null ? void 0 : I.getBoundingClientRect()),
              !h ||
                !e ||
                R.button !== 0 ||
                R.target !== d.current ||
                !S.current)
            )
              return;
            const { x: j, y: D } = Jn(R, S.current);
            C(),
              p.setState({
                userSelectionRect: {
                  width: 0,
                  height: 0,
                  startX: j,
                  startY: D,
                  x: j,
                  y: D,
                },
              }),
              r == null || r(R);
          },
          P = (R) => {
            const {
              userSelectionRect: C,
              nodeInternals: I,
              edges: j,
              transform: D,
              onNodesChange: O,
              onEdgesChange: M,
              nodeOrigin: L,
              getNodes: V,
            } = p.getState();
            if (!e || !S.current || !C) return;
            p.setState({ userSelectionActive: !0, nodesSelectionActive: !1 });
            const $ = Jn(R, S.current),
              Y = C.startX ?? 0,
              U = C.startY ?? 0,
              G = {
                ...C,
                x: $.x < Y ? $.x : Y,
                y: $.y < U ? $.y : U,
                width: Math.abs($.x - Y),
                height: Math.abs($.y - U),
              },
              K = V(),
              J = Aw(I, G, D, t === Qi.Partial, !0, L),
              ne = Fw(J, j).map((ye) => ye.id),
              he = J.map((ye) => ye.id);
            if (g.current !== he.length) {
              g.current = he.length;
              const ye = vi(K, he);
              ye.length && (O == null || O(ye));
            }
            if (y.current !== ne.length) {
              y.current = ne.length;
              const ye = vi(j, ne);
              ye.length && (M == null || M(ye));
            }
            p.setState({ userSelectionRect: G });
          },
          T = (R) => {
            if (R.button !== 0) return;
            const { userSelectionRect: C } = p.getState();
            !m && C && R.target === d.current && (E == null || E(R)),
              p.setState({ nodesSelectionActive: g.current > 0 }),
              w(),
              i == null || i(R);
          },
          F = (R) => {
            m &&
              (p.setState({ nodesSelectionActive: g.current > 0 }),
              i == null || i(R)),
              w();
          },
          z = h && (e || m);
        return x.jsxs("div", {
          className: Ge(["react-flow__pane", { dragging: v, selection: e }]),
          onClick: z ? void 0 : Zu(E, d),
          onContextMenu: Zu(_, d),
          onWheel: Zu(k, d),
          onMouseEnter: z ? void 0 : l,
          onMouseDown: z ? N : void 0,
          onMouseMove: z ? P : u,
          onMouseUp: z ? T : void 0,
          onMouseLeave: z ? F : c,
          ref: d,
          style: vp,
          children: [f, x.jsx(RT, {})],
        });
      }
    );
  ax.displayName = "Pane";
  const IT = (e) => {
    const t = e.getNodes().filter((n) => n.selected);
    return {
      ...Lw(t, e.nodeOrigin),
      transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
      userSelectionActive: e.userSelectionActive,
    };
  };
  function LT({
    onSelectionContextMenu: e,
    noPanClassName: t,
    disableKeyboardA11y: n,
  }) {
    const r = ze(),
      {
        width: i,
        height: o,
        x: s,
        y: a,
        transformString: l,
        userSelectionActive: u,
      } = ce(IT, Qe),
      c = tx(),
      f = b.useRef(null);
    if (
      (b.useEffect(() => {
        var g;
        n || (g = f.current) == null || g.focus({ preventScroll: !0 });
      }, [n]),
      ex({ nodeRef: f }),
      u || !i || !o)
    )
      return null;
    const d = e
        ? (g) => {
            const y = r
              .getState()
              .getNodes()
              .filter((S) => S.selected);
            e(g, y);
          }
        : void 0,
      p = (g) => {
        Object.prototype.hasOwnProperty.call(Di, g.key) &&
          c({ x: Di[g.key].x, y: Di[g.key].y, isShiftPressed: g.shiftKey });
      };
    return x.jsx("div", {
      className: Ge(["react-flow__nodesselection", "react-flow__container", t]),
      style: { transform: l },
      children: x.jsx("div", {
        ref: f,
        className: "react-flow__nodesselection-rect",
        onContextMenu: d,
        tabIndex: n ? void 0 : -1,
        onKeyDown: n ? void 0 : p,
        style: { width: i, height: o, top: a, left: s },
      }),
    });
  }
  var AT = b.memo(LT);
  const FT = (e) => e.nodesSelectionActive,
    lx = ({
      children: e,
      onPaneClick: t,
      onPaneMouseEnter: n,
      onPaneMouseMove: r,
      onPaneMouseLeave: i,
      onPaneContextMenu: o,
      onPaneScroll: s,
      deleteKeyCode: a,
      onMove: l,
      onMoveStart: u,
      onMoveEnd: c,
      selectionKeyCode: f,
      selectionOnDrag: d,
      selectionMode: p,
      onSelectionStart: g,
      onSelectionEnd: y,
      multiSelectionKeyCode: S,
      panActivationKeyCode: m,
      zoomActivationKeyCode: h,
      elementsSelectable: v,
      zoomOnScroll: w,
      zoomOnPinch: E,
      panOnScroll: _,
      panOnScrollSpeed: k,
      panOnScrollMode: N,
      zoomOnDoubleClick: P,
      panOnDrag: T,
      defaultViewport: F,
      translateExtent: z,
      minZoom: R,
      maxZoom: C,
      preventScrolling: I,
      onSelectionContextMenu: j,
      noWheelClassName: D,
      noPanClassName: O,
      disableKeyboardA11y: M,
    }) => {
      const L = ce(FT),
        V = Ss(f),
        Y = Ss(m) || T,
        U = V || (d && Y !== !0);
      return (
        CT({ deleteKeyCode: a, multiSelectionKeyCode: S }),
        x.jsx(DT, {
          onMove: l,
          onMoveStart: u,
          onMoveEnd: c,
          onPaneContextMenu: o,
          elementsSelectable: v,
          zoomOnScroll: w,
          zoomOnPinch: E,
          panOnScroll: _,
          panOnScrollSpeed: k,
          panOnScrollMode: N,
          zoomOnDoubleClick: P,
          panOnDrag: !V && Y,
          defaultViewport: F,
          translateExtent: z,
          minZoom: R,
          maxZoom: C,
          zoomActivationKeyCode: h,
          preventScrolling: I,
          noWheelClassName: D,
          noPanClassName: O,
          children: x.jsxs(ax, {
            onSelectionStart: g,
            onSelectionEnd: y,
            onPaneClick: t,
            onPaneMouseEnter: n,
            onPaneMouseMove: r,
            onPaneMouseLeave: i,
            onPaneContextMenu: o,
            onPaneScroll: s,
            panOnDrag: Y,
            isSelecting: !!U,
            selectionMode: p,
            children: [
              e,
              L &&
                x.jsx(AT, {
                  onSelectionContextMenu: j,
                  noPanClassName: O,
                  disableKeyboardA11y: M,
                }),
            ],
          }),
        })
      );
    };
  lx.displayName = "FlowRenderer";
  var zT = b.memo(lx);
  function $T(e) {
    return ce(
      b.useCallback(
        (n) =>
          e
            ? Aw(
                n.nodeInternals,
                { x: 0, y: 0, width: n.width, height: n.height },
                n.transform,
                !0
              )
            : n.getNodes(),
        [e]
      )
    );
  }
  const BT = (e) => ({
      nodesDraggable: e.nodesDraggable,
      nodesConnectable: e.nodesConnectable,
      nodesFocusable: e.nodesFocusable,
      elementsSelectable: e.elementsSelectable,
      updateNodeDimensions: e.updateNodeDimensions,
      onError: e.onError,
    }),
    ux = (e) => {
      const {
          nodesDraggable: t,
          nodesConnectable: n,
          nodesFocusable: r,
          elementsSelectable: i,
          updateNodeDimensions: o,
          onError: s,
        } = ce(BT, Qe),
        a = $T(e.onlyRenderVisibleElements),
        l = b.useRef(),
        u = b.useMemo(() => {
          if (typeof ResizeObserver > "u") return null;
          const c = new ResizeObserver((f) => {
            const d = f.map((p) => ({
              id: p.target.getAttribute("data-id"),
              nodeElement: p.target,
              forceUpdate: !0,
            }));
            o(d);
          });
          return (l.current = c), c;
        }, []);
      return (
        b.useEffect(
          () => () => {
            var c;
            (c = l == null ? void 0 : l.current) == null || c.disconnect();
          },
          []
        ),
        x.jsx("div", {
          className: "react-flow__nodes",
          style: vp,
          children: a.map((c) => {
            var E, _;
            let f = c.type || "default";
            e.nodeTypes[f] ||
              (s == null || s("003", nr.error003(f)), (f = "default"));
            const d = e.nodeTypes[f] || e.nodeTypes.default,
              p = !!(c.draggable || (t && typeof c.draggable > "u")),
              g = !!(c.selectable || (i && typeof c.selectable > "u")),
              y = !!(c.connectable || (n && typeof c.connectable > "u")),
              S = !!(c.focusable || (r && typeof c.focusable > "u")),
              m = e.nodeExtent
                ? cp(c.positionAbsolute, e.nodeExtent)
                : c.positionAbsolute,
              h = (m == null ? void 0 : m.x) ?? 0,
              v = (m == null ? void 0 : m.y) ?? 0,
              w = wT({
                x: h,
                y: v,
                width: c.width ?? 0,
                height: c.height ?? 0,
                origin: e.nodeOrigin,
              });
            return x.jsx(
              d,
              {
                id: c.id,
                className: c.className,
                style: c.style,
                type: f,
                data: c.data,
                sourcePosition: c.sourcePosition || W.Bottom,
                targetPosition: c.targetPosition || W.Top,
                hidden: c.hidden,
                xPos: h,
                yPos: v,
                xPosOrigin: w.x,
                yPosOrigin: w.y,
                selectNodesOnDrag: e.selectNodesOnDrag,
                onClick: e.onNodeClick,
                onMouseEnter: e.onNodeMouseEnter,
                onMouseMove: e.onNodeMouseMove,
                onMouseLeave: e.onNodeMouseLeave,
                onContextMenu: e.onNodeContextMenu,
                onDoubleClick: e.onNodeDoubleClick,
                selected: !!c.selected,
                isDraggable: p,
                isSelectable: g,
                isConnectable: y,
                isFocusable: S,
                resizeObserver: u,
                dragHandle: c.dragHandle,
                zIndex: ((E = c[Te]) == null ? void 0 : E.z) ?? 0,
                isParent: !!((_ = c[Te]) != null && _.isParent),
                noDragClassName: e.noDragClassName,
                noPanClassName: e.noPanClassName,
                initialized: !!c.width && !!c.height,
                rfId: e.rfId,
                disableKeyboardA11y: e.disableKeyboardA11y,
                ariaLabel: c.ariaLabel,
              },
              c.id
            );
          }),
        })
      );
    };
  ux.displayName = "NodeRenderer";
  var VT = b.memo(ux);
  const HT = [{ level: 0, isMaxLevel: !0, edges: [] }];
  function UT(e, t, n = !1) {
    let r = -1;
    const i = e.reduce((s, a) => {
        var c, f, d, p;
        const l = _t(a.zIndex);
        let u = l ? a.zIndex : 0;
        return (
          n &&
            (u = l
              ? a.zIndex
              : Math.max(
                  ((f = (c = t.get(a.source)) == null ? void 0 : c[Te]) == null
                    ? void 0
                    : f.z) || 0,
                  ((p = (d = t.get(a.target)) == null ? void 0 : d[Te]) == null
                    ? void 0
                    : p.z) || 0
                )),
          s[u] ? s[u].push(a) : (s[u] = [a]),
          (r = u > r ? u : r),
          s
        );
      }, {}),
      o = Object.entries(i).map(([s, a]) => {
        const l = +s;
        return { edges: a, level: l, isMaxLevel: l === r };
      });
    return o.length === 0 ? HT : o;
  }
  function QT(e, t, n) {
    const r = ce(
      b.useCallback(
        (i) =>
          e
            ? i.edges.filter((o) => {
                const s = t.get(o.source),
                  a = t.get(o.target);
                return (
                  (s == null ? void 0 : s.width) &&
                  (s == null ? void 0 : s.height) &&
                  (a == null ? void 0 : a.width) &&
                  (a == null ? void 0 : a.height) &&
                  mT({
                    sourcePos: s.positionAbsolute || { x: 0, y: 0 },
                    targetPos: a.positionAbsolute || { x: 0, y: 0 },
                    sourceWidth: s.width,
                    sourceHeight: s.height,
                    targetWidth: a.width,
                    targetHeight: a.height,
                    width: i.width,
                    height: i.height,
                    transform: i.transform,
                  })
                );
              })
            : i.edges,
        [e, t]
      )
    );
    return UT(r, t, n);
  }
  const qT = ({ color: e = "none", strokeWidth: t = 1 }) =>
      x.jsx("polyline", {
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: t,
        fill: "none",
        points: "-5,-4 0,0 -5,4",
      }),
    WT = ({ color: e = "none", strokeWidth: t = 1 }) =>
      x.jsx("polyline", {
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: t,
        fill: e,
        points: "-5,-4 0,0 -5,4 -5,-4",
      }),
    tv = { [xs.Arrow]: qT, [xs.ArrowClosed]: WT };
  function YT(e) {
    const t = ze();
    return b.useMemo(() => {
      var i, o;
      return Object.prototype.hasOwnProperty.call(tv, e)
        ? tv[e]
        : ((o = (i = t.getState()).onError) == null ||
            o.call(i, "009", nr.error009(e)),
          null);
    }, [e]);
  }
  const XT = ({
      id: e,
      type: t,
      color: n,
      width: r = 12.5,
      height: i = 12.5,
      markerUnits: o = "strokeWidth",
      strokeWidth: s,
      orient: a = "auto-start-reverse",
    }) => {
      const l = YT(t);
      return l
        ? x.jsx("marker", {
            className: "react-flow__arrowhead",
            id: e,
            markerWidth: `${r}`,
            markerHeight: `${i}`,
            viewBox: "-10 -10 20 20",
            markerUnits: o,
            orient: a,
            refX: "0",
            refY: "0",
            children: x.jsx(l, { color: n, strokeWidth: s }),
          })
        : null;
    },
    GT =
      ({ defaultColor: e, rfId: t }) =>
      (n) => {
        const r = [];
        return n.edges
          .reduce(
            (i, o) => (
              [o.markerStart, o.markerEnd].forEach((s) => {
                if (s && typeof s == "object") {
                  const a = bf(s, t);
                  r.includes(a) ||
                    (i.push({ id: a, color: s.color || e, ...s }), r.push(a));
                }
              }),
              i
            ),
            []
          )
          .sort((i, o) => i.id.localeCompare(o.id));
      },
    cx = ({ defaultColor: e, rfId: t }) => {
      const n = ce(
        b.useCallback(GT({ defaultColor: e, rfId: t }), [e, t]),
        (r, i) => !(r.length !== i.length || r.some((o, s) => o.id !== i[s].id))
      );
      return x.jsx("defs", {
        children: n.map((r) =>
          x.jsx(
            XT,
            {
              id: r.id,
              type: r.type,
              color: r.color,
              width: r.width,
              height: r.height,
              markerUnits: r.markerUnits,
              strokeWidth: r.strokeWidth,
              orient: r.orient,
            },
            r.id
          )
        ),
      });
    };
  cx.displayName = "MarkerDefinitions";
  var KT = b.memo(cx);
  const ZT = (e) => ({
      nodesConnectable: e.nodesConnectable,
      edgesFocusable: e.edgesFocusable,
      edgesUpdatable: e.edgesUpdatable,
      elementsSelectable: e.elementsSelectable,
      width: e.width,
      height: e.height,
      connectionMode: e.connectionMode,
      nodeInternals: e.nodeInternals,
      onError: e.onError,
    }),
    fx = ({
      defaultMarkerColor: e,
      onlyRenderVisibleElements: t,
      elevateEdgesOnSelect: n,
      rfId: r,
      edgeTypes: i,
      noPanClassName: o,
      onEdgeUpdate: s,
      onEdgeContextMenu: a,
      onEdgeMouseEnter: l,
      onEdgeMouseMove: u,
      onEdgeMouseLeave: c,
      onEdgeClick: f,
      edgeUpdaterRadius: d,
      onEdgeDoubleClick: p,
      onEdgeUpdateStart: g,
      onEdgeUpdateEnd: y,
      children: S,
    }) => {
      const {
          edgesFocusable: m,
          edgesUpdatable: h,
          elementsSelectable: v,
          width: w,
          height: E,
          connectionMode: _,
          nodeInternals: k,
          onError: N,
        } = ce(ZT, Qe),
        P = QT(t, k, n);
      return w
        ? x.jsxs(x.Fragment, {
            children: [
              P.map(({ level: T, edges: F, isMaxLevel: z }) =>
                x.jsxs(
                  "svg",
                  {
                    style: { zIndex: T },
                    width: w,
                    height: E,
                    className: "react-flow__edges react-flow__container",
                    children: [
                      z && x.jsx(KT, { defaultColor: e, rfId: r }),
                      x.jsx("g", {
                        children: F.map((R) => {
                          const [C, I, j] = Ym(k.get(R.source)),
                            [D, O, M] = Ym(k.get(R.target));
                          if (!j || !M) return null;
                          let L = R.type || "default";
                          i[L] ||
                            (N == null || N("011", nr.error011(L)),
                            (L = "default"));
                          const V = i[L] || i.default,
                            $ =
                              _ === Fr.Strict
                                ? O.target
                                : (O.target ?? []).concat(O.source ?? []),
                            Y = Wm(I.source, R.sourceHandle),
                            U = Wm($, R.targetHandle),
                            G = (Y == null ? void 0 : Y.position) || W.Bottom,
                            K = (U == null ? void 0 : U.position) || W.Top,
                            J = !!(
                              R.focusable ||
                              (m && typeof R.focusable > "u")
                            ),
                            ne =
                              typeof s < "u" &&
                              (R.updatable || (h && typeof R.updatable > "u"));
                          if (!Y || !U)
                            return (
                              N == null || N("008", nr.error008(Y, R)), null
                            );
                          const {
                            sourceX: he,
                            sourceY: ye,
                            targetX: $e,
                            targetY: lt,
                          } = hT(C, Y, G, D, U, K);
                          return x.jsx(
                            V,
                            {
                              id: R.id,
                              className: Ge([R.className, o]),
                              type: L,
                              data: R.data,
                              selected: !!R.selected,
                              animated: !!R.animated,
                              hidden: !!R.hidden,
                              label: R.label,
                              labelStyle: R.labelStyle,
                              labelShowBg: R.labelShowBg,
                              labelBgStyle: R.labelBgStyle,
                              labelBgPadding: R.labelBgPadding,
                              labelBgBorderRadius: R.labelBgBorderRadius,
                              style: R.style,
                              source: R.source,
                              target: R.target,
                              sourceHandleId: R.sourceHandle,
                              targetHandleId: R.targetHandle,
                              markerEnd: R.markerEnd,
                              markerStart: R.markerStart,
                              sourceX: he,
                              sourceY: ye,
                              targetX: $e,
                              targetY: lt,
                              sourcePosition: G,
                              targetPosition: K,
                              elementsSelectable: v,
                              onEdgeUpdate: s,
                              onContextMenu: a,
                              onMouseEnter: l,
                              onMouseMove: u,
                              onMouseLeave: c,
                              onClick: f,
                              edgeUpdaterRadius: d,
                              onEdgeDoubleClick: p,
                              onEdgeUpdateStart: g,
                              onEdgeUpdateEnd: y,
                              rfId: r,
                              ariaLabel: R.ariaLabel,
                              isFocusable: J,
                              isUpdatable: ne,
                              pathOptions:
                                "pathOptions" in R ? R.pathOptions : void 0,
                              interactionWidth: R.interactionWidth,
                            },
                            R.id
                          );
                        }),
                      }),
                    ],
                  },
                  T
                )
              ),
              S,
            ],
          })
        : null;
    };
  fx.displayName = "EdgeRenderer";
  var JT = b.memo(fx);
  const eD = (e) =>
    `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
  function tD({ children: e }) {
    const t = ce(eD);
    return x.jsx("div", {
      className: "react-flow__viewport react-flow__container",
      style: { transform: t },
      children: e,
    });
  }
  function nD(e) {
    const t = Jl(),
      n = b.useRef(!1);
    b.useEffect(() => {
      !n.current &&
        t.viewportInitialized &&
        e &&
        (setTimeout(() => e(t), 1), (n.current = !0));
    }, [e, t.viewportInitialized]);
  }
  const rD = {
      [W.Left]: W.Right,
      [W.Right]: W.Left,
      [W.Top]: W.Bottom,
      [W.Bottom]: W.Top,
    },
    dx = ({
      nodeId: e,
      handleType: t,
      style: n,
      type: r = $n.Bezier,
      CustomComponent: i,
      connectionStatus: o,
    }) => {
      var _, k, N;
      const {
          fromNode: s,
          handleId: a,
          toX: l,
          toY: u,
          connectionMode: c,
        } = ce(
          b.useCallback(
            (P) => ({
              fromNode: P.nodeInternals.get(e),
              handleId: P.connectionHandleId,
              toX: (P.connectionPosition.x - P.transform[0]) / P.transform[2],
              toY: (P.connectionPosition.y - P.transform[1]) / P.transform[2],
              connectionMode: P.connectionMode,
            }),
            [e]
          ),
          Qe
        ),
        f = (_ = s == null ? void 0 : s[Te]) == null ? void 0 : _.handleBounds;
      let d = f == null ? void 0 : f[t];
      if (
        (c === Fr.Loose &&
          (d =
            d ||
            (f == null ? void 0 : f[t === "source" ? "target" : "source"])),
        !s || !d)
      )
        return null;
      const p = a ? d.find((P) => P.id === a) : d[0],
        g = p ? p.x + p.width / 2 : (s.width ?? 0) / 2,
        y = p ? p.y + p.height / 2 : s.height ?? 0,
        S = (((k = s.positionAbsolute) == null ? void 0 : k.x) ?? 0) + g,
        m = (((N = s.positionAbsolute) == null ? void 0 : N.y) ?? 0) + y,
        h = p == null ? void 0 : p.position,
        v = h ? rD[h] : null;
      if (!h || !v) return null;
      if (i)
        return x.jsx(i, {
          connectionLineType: r,
          connectionLineStyle: n,
          fromNode: s,
          fromHandle: p,
          fromX: S,
          fromY: m,
          toX: l,
          toY: u,
          fromPosition: h,
          toPosition: v,
          connectionStatus: o,
        });
      let w = "";
      const E = {
        sourceX: S,
        sourceY: m,
        sourcePosition: h,
        targetX: l,
        targetY: u,
        targetPosition: v,
      };
      return (
        r === $n.Bezier
          ? ([w] = Zl(E))
          : r === $n.Step
          ? ([w] = Sf({ ...E, borderRadius: 0 }))
          : r === $n.SmoothStep
          ? ([w] = Sf(E))
          : r === $n.SimpleBezier
          ? ([w] = jw(E))
          : (w = `M${S},${m} ${l},${u}`),
        x.jsx("path", {
          d: w,
          fill: "none",
          className: "react-flow__connection-path",
          style: n,
        })
      );
    };
  dx.displayName = "ConnectionLine";
  const iD = (e) => ({
    nodeId: e.connectionNodeId,
    handleType: e.connectionHandleType,
    nodesConnectable: e.nodesConnectable,
    connectionStatus: e.connectionStatus,
    width: e.width,
    height: e.height,
  });
  function oD({ containerStyle: e, style: t, type: n, component: r }) {
    const {
      nodeId: i,
      handleType: o,
      nodesConnectable: s,
      width: a,
      height: l,
      connectionStatus: u,
    } = ce(iD, Qe);
    return !(i && o && a && s)
      ? null
      : x.jsx("svg", {
          style: e,
          width: a,
          height: l,
          className:
            "react-flow__edges react-flow__connectionline react-flow__container",
          children: x.jsx("g", {
            className: Ge(["react-flow__connection", u]),
            children: x.jsx(dx, {
              nodeId: i,
              handleType: o,
              style: t,
              type: n,
              CustomComponent: r,
              connectionStatus: u,
            }),
          }),
        });
  }
  const px = ({
    nodeTypes: e,
    edgeTypes: t,
    onMove: n,
    onMoveStart: r,
    onMoveEnd: i,
    onInit: o,
    onNodeClick: s,
    onEdgeClick: a,
    onNodeDoubleClick: l,
    onEdgeDoubleClick: u,
    onNodeMouseEnter: c,
    onNodeMouseMove: f,
    onNodeMouseLeave: d,
    onNodeContextMenu: p,
    onSelectionContextMenu: g,
    onSelectionStart: y,
    onSelectionEnd: S,
    connectionLineType: m,
    connectionLineStyle: h,
    connectionLineComponent: v,
    connectionLineContainerStyle: w,
    selectionKeyCode: E,
    selectionOnDrag: _,
    selectionMode: k,
    multiSelectionKeyCode: N,
    panActivationKeyCode: P,
    zoomActivationKeyCode: T,
    deleteKeyCode: F,
    onlyRenderVisibleElements: z,
    elementsSelectable: R,
    selectNodesOnDrag: C,
    defaultViewport: I,
    translateExtent: j,
    minZoom: D,
    maxZoom: O,
    preventScrolling: M,
    defaultMarkerColor: L,
    zoomOnScroll: V,
    zoomOnPinch: $,
    panOnScroll: Y,
    panOnScrollSpeed: U,
    panOnScrollMode: G,
    zoomOnDoubleClick: K,
    panOnDrag: J,
    onPaneClick: ne,
    onPaneMouseEnter: he,
    onPaneMouseMove: ye,
    onPaneMouseLeave: $e,
    onPaneScroll: lt,
    onPaneContextMenu: ut,
    onEdgeUpdate: Se,
    onEdgeContextMenu: le,
    onEdgeMouseEnter: Me,
    onEdgeMouseMove: X,
    onEdgeMouseLeave: Qt,
    edgeUpdaterRadius: an,
    onEdgeUpdateStart: ct,
    onEdgeUpdateEnd: qt,
    noDragClassName: ln,
    noWheelClassName: Wt,
    noPanClassName: wt,
    elevateEdgesOnSelect: un,
    disableKeyboardA11y: Dt,
    nodeOrigin: Yt,
    nodeExtent: Cn,
    rfId: qr,
  }) => (
    nD(o),
    x.jsx(zT, {
      onPaneClick: ne,
      onPaneMouseEnter: he,
      onPaneMouseMove: ye,
      onPaneMouseLeave: $e,
      onPaneContextMenu: ut,
      onPaneScroll: lt,
      deleteKeyCode: F,
      selectionKeyCode: E,
      selectionOnDrag: _,
      selectionMode: k,
      onSelectionStart: y,
      onSelectionEnd: S,
      multiSelectionKeyCode: N,
      panActivationKeyCode: P,
      zoomActivationKeyCode: T,
      elementsSelectable: R,
      onMove: n,
      onMoveStart: r,
      onMoveEnd: i,
      zoomOnScroll: V,
      zoomOnPinch: $,
      zoomOnDoubleClick: K,
      panOnScroll: Y,
      panOnScrollSpeed: U,
      panOnScrollMode: G,
      panOnDrag: J,
      defaultViewport: I,
      translateExtent: j,
      minZoom: D,
      maxZoom: O,
      onSelectionContextMenu: g,
      preventScrolling: M,
      noDragClassName: ln,
      noWheelClassName: Wt,
      noPanClassName: wt,
      disableKeyboardA11y: Dt,
      children: x.jsxs(tD, {
        children: [
          x.jsx(JT, {
            edgeTypes: t,
            onEdgeClick: a,
            onEdgeDoubleClick: u,
            onEdgeUpdate: Se,
            onlyRenderVisibleElements: z,
            onEdgeContextMenu: le,
            onEdgeMouseEnter: Me,
            onEdgeMouseMove: X,
            onEdgeMouseLeave: Qt,
            onEdgeUpdateStart: ct,
            onEdgeUpdateEnd: qt,
            edgeUpdaterRadius: an,
            defaultMarkerColor: L,
            noPanClassName: wt,
            elevateEdgesOnSelect: !!un,
            disableKeyboardA11y: Dt,
            rfId: qr,
            children: x.jsx(oD, {
              style: h,
              type: m,
              component: v,
              containerStyle: w,
            }),
          }),
          x.jsx("div", { className: "react-flow__edgelabel-renderer" }),
          x.jsx(VT, {
            nodeTypes: e,
            onNodeClick: s,
            onNodeDoubleClick: l,
            onNodeMouseEnter: c,
            onNodeMouseMove: f,
            onNodeMouseLeave: d,
            onNodeContextMenu: p,
            selectNodesOnDrag: C,
            onlyRenderVisibleElements: z,
            noPanClassName: wt,
            noDragClassName: ln,
            disableKeyboardA11y: Dt,
            nodeOrigin: Yt,
            nodeExtent: Cn,
            rfId: qr,
          }),
        ],
      }),
    })
  );
  px.displayName = "GraphView";
  var sD = b.memo(px);
  const kf = [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    ],
    On = {
      rfId: "1",
      width: 0,
      height: 0,
      transform: [0, 0, 1],
      nodeInternals: new Map(),
      edges: [],
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: !1,
      hasDefaultEdges: !1,
      d3Zoom: null,
      d3Selection: null,
      d3ZoomHandler: void 0,
      minZoom: 0.5,
      maxZoom: 2,
      translateExtent: kf,
      nodeExtent: kf,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionNodeId: null,
      connectionHandleId: null,
      connectionHandleType: "source",
      connectionPosition: { x: 0, y: 0 },
      connectionStatus: null,
      connectionMode: Fr.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: "nopan",
      nodeOrigin: [0, 0],
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesUpdatable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      fitViewOnInit: !1,
      fitViewOnInitDone: !1,
      fitViewOnInitOptions: void 0,
      multiSelectionActive: !1,
      connectionStartHandle: null,
      connectionEndHandle: null,
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: "",
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      connectionRadius: 20,
      onError: IO,
      isValidConnection: void 0,
    },
    aD = () =>
      C_((e, t) => ({
        ...On,
        setNodes: (n) => {
          const {
            nodeInternals: r,
            nodeOrigin: i,
            elevateNodesOnSelect: o,
          } = t();
          e({ nodeInternals: Gu(n, r, i, o) });
        },
        getNodes: () => Array.from(t().nodeInternals.values()),
        setEdges: (n) => {
          const { defaultEdgeOptions: r = {} } = t();
          e({ edges: n.map((i) => ({ ...r, ...i })) });
        },
        setDefaultNodesAndEdges: (n, r) => {
          const i = typeof n < "u",
            o = typeof r < "u",
            s = i
              ? Gu(n, new Map(), t().nodeOrigin, t().elevateNodesOnSelect)
              : new Map();
          e({
            nodeInternals: s,
            edges: o ? r : [],
            hasDefaultNodes: i,
            hasDefaultEdges: o,
          });
        },
        updateNodeDimensions: (n) => {
          const {
              onNodesChange: r,
              nodeInternals: i,
              fitViewOnInit: o,
              fitViewOnInitDone: s,
              fitViewOnInitOptions: a,
              domNode: l,
              nodeOrigin: u,
            } = t(),
            c = l == null ? void 0 : l.querySelector(".react-flow__viewport");
          if (!c) return;
          const f = window.getComputedStyle(c),
            { m22: d } = new window.DOMMatrixReadOnly(f.transform),
            p = n.reduce((y, S) => {
              const m = i.get(S.id);
              if (m) {
                const h = up(S.nodeElement);
                !!(
                  h.width &&
                  h.height &&
                  (m.width !== h.width ||
                    m.height !== h.height ||
                    S.forceUpdate)
                ) &&
                  (i.set(m.id, {
                    ...m,
                    [Te]: {
                      ...m[Te],
                      handleBounds: {
                        source: Gm(".source", S.nodeElement, d, u),
                        target: Gm(".target", S.nodeElement, d, u),
                      },
                    },
                    ...h,
                  }),
                  y.push({ id: m.id, type: "dimensions", dimensions: h }));
              }
              return y;
            }, []);
          rx(i, u);
          const g = s || (o && !s && ix(t, { initial: !0, ...a }));
          e({ nodeInternals: new Map(i), fitViewOnInitDone: g }),
            (p == null ? void 0 : p.length) > 0 && (r == null || r(p));
        },
        updateNodePositions: (n, r = !0, i = !1) => {
          const { triggerNodeChanges: o } = t(),
            s = n.map((a) => {
              const l = { id: a.id, type: "position", dragging: i };
              return (
                r &&
                  ((l.positionAbsolute = a.positionAbsolute),
                  (l.position = a.position)),
                l
              );
            });
          o(s);
        },
        triggerNodeChanges: (n) => {
          const {
            onNodesChange: r,
            nodeInternals: i,
            hasDefaultNodes: o,
            nodeOrigin: s,
            getNodes: a,
            elevateNodesOnSelect: l,
          } = t();
          if (n != null && n.length) {
            if (o) {
              const u = sx(n, a()),
                c = Gu(u, i, s, l);
              e({ nodeInternals: c });
            }
            r == null || r(n);
          }
        },
        addSelectedNodes: (n) => {
          const { multiSelectionActive: r, edges: i, getNodes: o } = t();
          let s,
            a = null;
          r
            ? (s = n.map((l) => jn(l, !0)))
            : ((s = vi(o(), n)), (a = vi(i, []))),
            fa({ changedNodes: s, changedEdges: a, get: t, set: e });
        },
        addSelectedEdges: (n) => {
          const { multiSelectionActive: r, edges: i, getNodes: o } = t();
          let s,
            a = null;
          r
            ? (s = n.map((l) => jn(l, !0)))
            : ((s = vi(i, n)), (a = vi(o(), []))),
            fa({ changedNodes: a, changedEdges: s, get: t, set: e });
        },
        unselectNodesAndEdges: ({ nodes: n, edges: r } = {}) => {
          const { edges: i, getNodes: o } = t(),
            s = n || o(),
            a = r || i,
            l = s.map((c) => ((c.selected = !1), jn(c.id, !1))),
            u = a.map((c) => jn(c.id, !1));
          fa({ changedNodes: l, changedEdges: u, get: t, set: e });
        },
        setMinZoom: (n) => {
          const { d3Zoom: r, maxZoom: i } = t();
          r == null || r.scaleExtent([n, i]), e({ minZoom: n });
        },
        setMaxZoom: (n) => {
          const { d3Zoom: r, minZoom: i } = t();
          r == null || r.scaleExtent([i, n]), e({ maxZoom: n });
        },
        setTranslateExtent: (n) => {
          var r;
          (r = t().d3Zoom) == null || r.translateExtent(n),
            e({ translateExtent: n });
        },
        resetSelectedElements: () => {
          const { edges: n, getNodes: r } = t(),
            o = r()
              .filter((a) => a.selected)
              .map((a) => jn(a.id, !1)),
            s = n.filter((a) => a.selected).map((a) => jn(a.id, !1));
          fa({ changedNodes: o, changedEdges: s, get: t, set: e });
        },
        setNodeExtent: (n) => {
          const { nodeInternals: r } = t();
          r.forEach((i) => {
            i.positionAbsolute = cp(i.position, n);
          }),
            e({ nodeExtent: n, nodeInternals: new Map(r) });
        },
        panBy: (n) => {
          const {
            transform: r,
            width: i,
            height: o,
            d3Zoom: s,
            d3Selection: a,
            translateExtent: l,
          } = t();
          if (!s || !a || (!n.x && !n.y)) return !1;
          const u = Zn.translate(r[0] + n.x, r[1] + n.y).scale(r[2]),
            c = [
              [0, 0],
              [i, o],
            ],
            f = s == null ? void 0 : s.constrain()(u, c, l);
          return (
            s.transform(a, f), r[0] !== f.x || r[1] !== f.y || r[2] !== f.k
          );
        },
        cancelConnection: () =>
          e({
            connectionNodeId: On.connectionNodeId,
            connectionHandleId: On.connectionHandleId,
            connectionHandleType: On.connectionHandleType,
            connectionStatus: On.connectionStatus,
            connectionStartHandle: On.connectionStartHandle,
            connectionEndHandle: On.connectionEndHandle,
          }),
        reset: () => e({ ...On }),
      })),
    yp = ({ children: e }) => {
      const t = b.useRef(null);
      return (
        t.current || (t.current = aD()),
        x.jsx(NO, { value: t.current, children: e })
      );
    };
  yp.displayName = "ReactFlowProvider";
  const hx = ({ children: e }) =>
    b.useContext(Gl)
      ? x.jsx(x.Fragment, { children: e })
      : x.jsx(yp, { children: e });
  hx.displayName = "ReactFlowWrapper";
  function nv(e, t) {
    return b.useRef(null), b.useMemo(() => t(e), [e]);
  }
  const lD = { input: qw, default: Ef, output: Yw, group: mp },
    uD = {
      default: gl,
      straight: pp,
      step: dp,
      smoothstep: Kl,
      simplebezier: fp,
    },
    cD = [0, 0],
    fD = [15, 15],
    dD = { x: 0, y: 0, zoom: 1 },
    pD = {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative",
      zIndex: 0,
    },
    mx = b.forwardRef(
      (
        {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          className: i,
          nodeTypes: o = lD,
          edgeTypes: s = uD,
          onNodeClick: a,
          onEdgeClick: l,
          onInit: u,
          onMove: c,
          onMoveStart: f,
          onMoveEnd: d,
          onConnect: p,
          onConnectStart: g,
          onConnectEnd: y,
          onClickConnectStart: S,
          onClickConnectEnd: m,
          onNodeMouseEnter: h,
          onNodeMouseMove: v,
          onNodeMouseLeave: w,
          onNodeContextMenu: E,
          onNodeDoubleClick: _,
          onNodeDragStart: k,
          onNodeDrag: N,
          onNodeDragStop: P,
          onNodesDelete: T,
          onEdgesDelete: F,
          onSelectionChange: z,
          onSelectionDragStart: R,
          onSelectionDrag: C,
          onSelectionDragStop: I,
          onSelectionContextMenu: j,
          onSelectionStart: D,
          onSelectionEnd: O,
          connectionMode: M = Fr.Strict,
          connectionLineType: L = $n.Bezier,
          connectionLineStyle: V,
          connectionLineComponent: $,
          connectionLineContainerStyle: Y,
          deleteKeyCode: U = "Backspace",
          selectionKeyCode: G = "Shift",
          selectionOnDrag: K = !1,
          selectionMode: J = Qi.Full,
          panActivationKeyCode: ne = "Space",
          multiSelectionKeyCode: he = "Meta",
          zoomActivationKeyCode: ye = "Meta",
          snapToGrid: $e = !1,
          snapGrid: lt = fD,
          onlyRenderVisibleElements: ut = !1,
          selectNodesOnDrag: Se = !0,
          nodesDraggable: le,
          nodesConnectable: Me,
          nodesFocusable: X,
          nodeOrigin: Qt = cD,
          edgesFocusable: an,
          edgesUpdatable: ct,
          elementsSelectable: qt,
          defaultViewport: ln = dD,
          minZoom: Wt = 0.5,
          maxZoom: wt = 2,
          translateExtent: un = kf,
          preventScrolling: Dt = !0,
          nodeExtent: Yt,
          defaultMarkerColor: Cn = "#b1b1b7",
          zoomOnScroll: qr = !0,
          zoomOnPinch: Ke = !0,
          panOnScroll: Pt = !1,
          panOnScrollSpeed: fr = 0.5,
          panOnScrollMode: dr = Oi.Free,
          zoomOnDoubleClick: pr = !0,
          panOnDrag: $s = !0,
          onPaneClick: hr,
          onPaneMouseEnter: fu,
          onPaneMouseMove: du,
          onPaneMouseLeave: lo,
          onPaneScroll: pu,
          onPaneContextMenu: Yp,
          children: mr,
          onEdgeUpdate: I1,
          onEdgeContextMenu: L1,
          onEdgeDoubleClick: A1,
          onEdgeMouseEnter: F1,
          onEdgeMouseMove: z1,
          onEdgeMouseLeave: $1,
          onEdgeUpdateStart: B1,
          onEdgeUpdateEnd: V1,
          edgeUpdaterRadius: H1 = 10,
          onNodesChange: U1,
          onEdgesChange: Q1,
          noDragClassName: q1 = "nodrag",
          noWheelClassName: W1 = "nowheel",
          noPanClassName: Xp = "nopan",
          fitView: Y1 = !1,
          fitViewOptions: X1,
          connectOnClick: G1 = !0,
          attributionPosition: K1,
          proOptions: Z1,
          defaultEdgeOptions: J1,
          elevateNodesOnSelect: eS = !0,
          elevateEdgesOnSelect: tS = !1,
          disableKeyboardA11y: Gp = !1,
          autoPanOnConnect: nS = !0,
          autoPanOnNodeDrag: rS = !0,
          connectionRadius: iS = 20,
          isValidConnection: oS,
          onError: sS,
          style: aS,
          id: Kp,
          ...lS
        },
        uS
      ) => {
        const cS = nv(o, gT),
          fS = nv(s, pT),
          hu = Kp || "1";
        return x.jsx("div", {
          ...lS,
          "style": { ...aS, ...pD },
          "ref": uS,
          "className": Ge(["react-flow", i]),
          "data-testid": "rf__wrapper",
          "id": Kp,
          "children": x.jsxs(hx, {
            children: [
              x.jsx(sD, {
                onInit: u,
                onMove: c,
                onMoveStart: f,
                onMoveEnd: d,
                onNodeClick: a,
                onEdgeClick: l,
                onNodeMouseEnter: h,
                onNodeMouseMove: v,
                onNodeMouseLeave: w,
                onNodeContextMenu: E,
                onNodeDoubleClick: _,
                nodeTypes: cS,
                edgeTypes: fS,
                connectionLineType: L,
                connectionLineStyle: V,
                connectionLineComponent: $,
                connectionLineContainerStyle: Y,
                selectionKeyCode: G,
                selectionOnDrag: K,
                selectionMode: J,
                deleteKeyCode: U,
                multiSelectionKeyCode: he,
                panActivationKeyCode: ne,
                zoomActivationKeyCode: ye,
                onlyRenderVisibleElements: ut,
                selectNodesOnDrag: Se,
                defaultViewport: ln,
                translateExtent: un,
                minZoom: Wt,
                maxZoom: wt,
                preventScrolling: Dt,
                zoomOnScroll: qr,
                zoomOnPinch: Ke,
                zoomOnDoubleClick: pr,
                panOnScroll: Pt,
                panOnScrollSpeed: fr,
                panOnScrollMode: dr,
                panOnDrag: $s,
                onPaneClick: hr,
                onPaneMouseEnter: fu,
                onPaneMouseMove: du,
                onPaneMouseLeave: lo,
                onPaneScroll: pu,
                onPaneContextMenu: Yp,
                onSelectionContextMenu: j,
                onSelectionStart: D,
                onSelectionEnd: O,
                onEdgeUpdate: I1,
                onEdgeContextMenu: L1,
                onEdgeDoubleClick: A1,
                onEdgeMouseEnter: F1,
                onEdgeMouseMove: z1,
                onEdgeMouseLeave: $1,
                onEdgeUpdateStart: B1,
                onEdgeUpdateEnd: V1,
                edgeUpdaterRadius: H1,
                defaultMarkerColor: Cn,
                noDragClassName: q1,
                noWheelClassName: W1,
                noPanClassName: Xp,
                elevateEdgesOnSelect: tS,
                rfId: hu,
                disableKeyboardA11y: Gp,
                nodeOrigin: Qt,
                nodeExtent: Yt,
              }),
              x.jsx(iT, {
                nodes: e,
                edges: t,
                defaultNodes: n,
                defaultEdges: r,
                onConnect: p,
                onConnectStart: g,
                onConnectEnd: y,
                onClickConnectStart: S,
                onClickConnectEnd: m,
                nodesDraggable: le,
                nodesConnectable: Me,
                nodesFocusable: X,
                edgesFocusable: an,
                edgesUpdatable: ct,
                elementsSelectable: qt,
                elevateNodesOnSelect: eS,
                minZoom: Wt,
                maxZoom: wt,
                nodeExtent: Yt,
                onNodesChange: U1,
                onEdgesChange: Q1,
                snapToGrid: $e,
                snapGrid: lt,
                connectionMode: M,
                translateExtent: un,
                connectOnClick: G1,
                defaultEdgeOptions: J1,
                fitView: Y1,
                fitViewOptions: X1,
                onNodesDelete: T,
                onEdgesDelete: F,
                onNodeDragStart: k,
                onNodeDrag: N,
                onNodeDragStop: P,
                onSelectionDrag: C,
                onSelectionDragStart: R,
                onSelectionDragStop: I,
                noPanClassName: Xp,
                nodeOrigin: Qt,
                rfId: hu,
                autoPanOnConnect: nS,
                autoPanOnNodeDrag: rS,
                onError: sS,
                connectionRadius: iS,
                isValidConnection: oS,
              }),
              x.jsx(nT, { onSelectionChange: z }),
              mr,
              x.jsx(TO, { proOptions: Z1, position: K1 }),
              x.jsx(uT, { rfId: hu, disableKeyboardA11y: Gp }),
            ],
          }),
        });
      }
    );
  mx.displayName = "ReactFlow";
  function vx(e) {
    return (t) => {
      const [n, r] = b.useState(t),
        i = b.useCallback((o) => r((s) => e(o, s)), []);
      return [n, r, i];
    };
  }
  const hD = vx(sx),
    mD = vx(jT);
  function vD() {
    return x.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      children: x.jsx("path", {
        d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
      }),
    });
  }
  function yD() {
    return x.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5",
      children: x.jsx("path", { d: "M0 0h32v4.2H0z" }),
    });
  }
  function gD() {
    return x.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30",
      children: x.jsx("path", {
        d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
      }),
    });
  }
  function wD() {
    return x.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: x.jsx("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
      }),
    });
  }
  function xD() {
    return x.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: x.jsx("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
      }),
    });
  }
  const Io = ({ children: e, className: t, ...n }) =>
    x.jsx("button", {
      type: "button",
      className: Ge(["react-flow__controls-button", t]),
      ...n,
      children: e,
    });
  Io.displayName = "ControlButton";
  const SD = (e) => ({
      isInteractive:
        e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
      minZoomReached: e.transform[2] <= e.minZoom,
      maxZoomReached: e.transform[2] >= e.maxZoom,
    }),
    yx = ({
      style: e,
      showZoom: t = !0,
      showFitView: n = !0,
      showInteractive: r = !0,
      fitViewOptions: i,
      onZoomIn: o,
      onZoomOut: s,
      onFitView: a,
      onInteractiveChange: l,
      className: u,
      children: c,
      position: f = "bottom-left",
    }) => {
      const d = ze(),
        [p, g] = b.useState(!1),
        { isInteractive: y, minZoomReached: S, maxZoomReached: m } = ce(SD, Qe),
        { zoomIn: h, zoomOut: v, fitView: w } = Jl();
      if (
        (b.useEffect(() => {
          g(!0);
        }, []),
        !p)
      )
        return null;
      const E = () => {
          h(), o == null || o();
        },
        _ = () => {
          v(), s == null || s();
        },
        k = () => {
          w(i), a == null || a();
        },
        N = () => {
          d.setState({
            nodesDraggable: !y,
            nodesConnectable: !y,
            elementsSelectable: !y,
          }),
            l == null || l(!y);
        };
      return x.jsxs(lp, {
        "className": Ge(["react-flow__controls", u]),
        "position": f,
        "style": e,
        "data-testid": "rf__controls",
        "children": [
          t &&
            x.jsxs(x.Fragment, {
              children: [
                x.jsx(Io, {
                  "onClick": E,
                  "className": "react-flow__controls-zoomin",
                  "title": "zoom in",
                  "aria-label": "zoom in",
                  "disabled": m,
                  "children": x.jsx(vD, {}),
                }),
                x.jsx(Io, {
                  "onClick": _,
                  "className": "react-flow__controls-zoomout",
                  "title": "zoom out",
                  "aria-label": "zoom out",
                  "disabled": S,
                  "children": x.jsx(yD, {}),
                }),
              ],
            }),
          n &&
            x.jsx(Io, {
              "className": "react-flow__controls-fitview",
              "onClick": k,
              "title": "fit view",
              "aria-label": "fit view",
              "children": x.jsx(gD, {}),
            }),
          r &&
            x.jsx(Io, {
              "className": "react-flow__controls-interactive",
              "onClick": N,
              "title": "toggle interactivity",
              "aria-label": "toggle interactivity",
              "children": y ? x.jsx(xD, {}) : x.jsx(wD, {}),
            }),
          c,
        ],
      });
    };
  yx.displayName = "Controls";
  var bD = b.memo(yx),
    Bt;
  (function (e) {
    (e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross");
  })(Bt || (Bt = {}));
  function ED({ color: e, dimensions: t, lineWidth: n }) {
    return x.jsx("path", {
      stroke: e,
      strokeWidth: n,
      d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}`,
    });
  }
  function _D({ color: e, radius: t }) {
    return x.jsx("circle", { cx: t, cy: t, r: t, fill: e });
  }
  const kD = {
      [Bt.Dots]: "#91919a",
      [Bt.Lines]: "#eee",
      [Bt.Cross]: "#e2e2e2",
    },
    CD = { [Bt.Dots]: 1, [Bt.Lines]: 1, [Bt.Cross]: 6 },
    ND = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
  function gx({
    id: e,
    variant: t = Bt.Dots,
    gap: n = 20,
    size: r,
    lineWidth: i = 1,
    offset: o = 2,
    color: s,
    style: a,
    className: l,
  }) {
    const u = b.useRef(null),
      { transform: c, patternId: f } = ce(ND, Qe),
      d = s || kD[t],
      p = r || CD[t],
      g = t === Bt.Dots,
      y = t === Bt.Cross,
      S = Array.isArray(n) ? n : [n, n],
      m = [S[0] * c[2] || 1, S[1] * c[2] || 1],
      h = p * c[2],
      v = y ? [h, h] : m,
      w = g ? [h / o, h / o] : [v[0] / o, v[1] / o];
    return x.jsxs("svg", {
      "className": Ge(["react-flow__background", l]),
      "style": {
        ...a,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
      "ref": u,
      "data-testid": "rf__background",
      "children": [
        x.jsx("pattern", {
          id: f + e,
          x: c[0] % m[0],
          y: c[1] % m[1],
          width: m[0],
          height: m[1],
          patternUnits: "userSpaceOnUse",
          patternTransform: `translate(-${w[0]},-${w[1]})`,
          children: g
            ? x.jsx(_D, { color: d, radius: h / o })
            : x.jsx(ED, { dimensions: v, color: d, lineWidth: i }),
        }),
        x.jsx("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: `url(#${f + e})`,
        }),
      ],
    });
  }
  gx.displayName = "Background";
  var OD = b.memo(gx),
    wx = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var r = [], i = 0; i < arguments.length; i++) {
          var o = arguments[i];
          if (o) {
            var s = typeof o;
            if (s === "string" || s === "number") r.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var a = n.apply(null, o);
                a && r.push(a);
              }
            } else if (s === "object") {
              if (
                o.toString !== Object.prototype.toString &&
                !o.toString.toString().includes("[native code]")
              ) {
                r.push(o.toString());
                continue;
              }
              for (var l in o) t.call(o, l) && o[l] && r.push(l);
            }
          }
        }
        return r.join(" ");
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(wx);
  var TD = wx.exports;
  const Is = Ns(TD);
  function DD(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++)
      (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function PD(e, t, n) {
    var r = b.useRef(e !== void 0),
      i = b.useState(t),
      o = i[0],
      s = i[1],
      a = e !== void 0,
      l = r.current;
    return (
      (r.current = a),
      !a && l && o !== t && s(t),
      [
        a ? e : o,
        b.useCallback(
          function (u) {
            for (
              var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1;
              d < c;
              d++
            )
              f[d - 1] = arguments[d];
            n && n.apply(void 0, [u].concat(f)), s(u);
          },
          [n]
        ),
      ]
    );
  }
  function Cf(e, t) {
    return (
      (Cf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      Cf(e, t)
    );
  }
  function RD(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Cf(e, t);
  }
  const jD = ["xxl", "xl", "lg", "md", "sm", "xs"],
    MD = "xs",
    xx = b.createContext({ prefixes: {}, breakpoints: jD, minBreakpoint: MD });
  function eu(e, t) {
    const { prefixes: n } = b.useContext(xx);
    return e || n[t] || t;
  }
  function ID() {
    const { dir: e } = b.useContext(xx);
    return e === "rtl";
  }
  function tu(e) {
    return (e && e.ownerDocument) || document;
  }
  function LD(e) {
    var t = tu(e);
    return (t && t.defaultView) || window;
  }
  function AD(e, t) {
    return LD(e).getComputedStyle(e, t);
  }
  var FD = /([A-Z])/g;
  function zD(e) {
    return e.replace(FD, "-$1").toLowerCase();
  }
  var $D = /^ms-/;
  function da(e) {
    return zD(e).replace($D, "-ms-");
  }
  var BD =
    /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
  function VD(e) {
    return !!(e && BD.test(e));
  }
  function Sx(e, t) {
    var n = "",
      r = "";
    if (typeof t == "string")
      return e.style.getPropertyValue(da(t)) || AD(e).getPropertyValue(da(t));
    Object.keys(t).forEach(function (i) {
      var o = t[i];
      !o && o !== 0
        ? e.style.removeProperty(da(i))
        : VD(i)
        ? (r += i + "(" + o + ") ")
        : (n += da(i) + ": " + o + ";");
    }),
      r && (n += "transform: " + r + ";"),
      (e.style.cssText += ";" + n);
  }
  const rv = { disabled: !1 },
    bx = Je.createContext(null);
  var HD = function (t) {
      return t.scrollTop;
    },
    Lo = "unmounted",
    wr = "exited",
    Mn = "entering",
    xr = "entered",
    Nf = "exiting",
    kn = (function (e) {
      RD(t, e);
      function t(r, i) {
        var o;
        o = e.call(this, r, i) || this;
        var s = i,
          a = s && !s.isMounting ? r.enter : r.appear,
          l;
        return (
          (o.appearStatus = null),
          r.in
            ? a
              ? ((l = wr), (o.appearStatus = Mn))
              : (l = xr)
            : r.unmountOnExit || r.mountOnEnter
            ? (l = Lo)
            : (l = wr),
          (o.state = { status: l }),
          (o.nextCallback = null),
          o
        );
      }
      t.getDerivedStateFromProps = function (i, o) {
        var s = i.in;
        return s && o.status === Lo ? { status: wr } : null;
      };
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (n.componentDidUpdate = function (i) {
          var o = null;
          if (i !== this.props) {
            var s = this.state.status;
            this.props.in
              ? s !== Mn && s !== xr && (o = Mn)
              : (s === Mn || s === xr) && (o = Nf);
          }
          this.updateStatus(!1, o);
        }),
        (n.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (n.getTimeouts = function () {
          var i = this.props.timeout,
            o,
            s,
            a;
          return (
            (o = s = a = i),
            i != null &&
              typeof i != "number" &&
              ((o = i.exit),
              (s = i.enter),
              (a = i.appear !== void 0 ? i.appear : s)),
            { exit: o, enter: s, appear: a }
          );
        }),
        (n.updateStatus = function (i, o) {
          if ((i === void 0 && (i = !1), o !== null))
            if ((this.cancelNextCallback(), o === Mn)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var s = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : mi.findDOMNode(this);
                s && HD(s);
              }
              this.performEnter(i);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === wr &&
              this.setState({ status: Lo });
        }),
        (n.performEnter = function (i) {
          var o = this,
            s = this.props.enter,
            a = this.context ? this.context.isMounting : i,
            l = this.props.nodeRef ? [a] : [mi.findDOMNode(this), a],
            u = l[0],
            c = l[1],
            f = this.getTimeouts(),
            d = a ? f.appear : f.enter;
          if ((!i && !s) || rv.disabled) {
            this.safeSetState({ status: xr }, function () {
              o.props.onEntered(u);
            });
            return;
          }
          this.props.onEnter(u, c),
            this.safeSetState({ status: Mn }, function () {
              o.props.onEntering(u, c),
                o.onTransitionEnd(d, function () {
                  o.safeSetState({ status: xr }, function () {
                    o.props.onEntered(u, c);
                  });
                });
            });
        }),
        (n.performExit = function () {
          var i = this,
            o = this.props.exit,
            s = this.getTimeouts(),
            a = this.props.nodeRef ? void 0 : mi.findDOMNode(this);
          if (!o || rv.disabled) {
            this.safeSetState({ status: wr }, function () {
              i.props.onExited(a);
            });
            return;
          }
          this.props.onExit(a),
            this.safeSetState({ status: Nf }, function () {
              i.props.onExiting(a),
                i.onTransitionEnd(s.exit, function () {
                  i.safeSetState({ status: wr }, function () {
                    i.props.onExited(a);
                  });
                });
            });
        }),
        (n.cancelNextCallback = function () {
          this.nextCallback !== null &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (n.safeSetState = function (i, o) {
          (o = this.setNextCallback(o)), this.setState(i, o);
        }),
        (n.setNextCallback = function (i) {
          var o = this,
            s = !0;
          return (
            (this.nextCallback = function (a) {
              s && ((s = !1), (o.nextCallback = null), i(a));
            }),
            (this.nextCallback.cancel = function () {
              s = !1;
            }),
            this.nextCallback
          );
        }),
        (n.onTransitionEnd = function (i, o) {
          this.setNextCallback(o);
          var s = this.props.nodeRef
              ? this.props.nodeRef.current
              : mi.findDOMNode(this),
            a = i == null && !this.props.addEndListener;
          if (!s || a) {
            setTimeout(this.nextCallback, 0);
            return;
          }
          if (this.props.addEndListener) {
            var l = this.props.nodeRef
                ? [this.nextCallback]
                : [s, this.nextCallback],
              u = l[0],
              c = l[1];
            this.props.addEndListener(u, c);
          }
          i != null && setTimeout(this.nextCallback, i);
        }),
        (n.render = function () {
          var i = this.state.status;
          if (i === Lo) return null;
          var o = this.props,
            s = o.children;
          o.in,
            o.mountOnEnter,
            o.unmountOnExit,
            o.appear,
            o.enter,
            o.exit,
            o.timeout,
            o.addEndListener,
            o.onEnter,
            o.onEntering,
            o.onEntered,
            o.onExit,
            o.onExiting,
            o.onExited,
            o.nodeRef;
          var a = DD(o, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
          return Je.createElement(
            bx.Provider,
            { value: null },
            typeof s == "function"
              ? s(i, a)
              : Je.cloneElement(Je.Children.only(s), a)
          );
        }),
        t
      );
    })(Je.Component);
  kn.contextType = bx;
  kn.propTypes = {};
  function Zr() {}
  kn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Zr,
    onEntering: Zr,
    onEntered: Zr,
    onExit: Zr,
    onExiting: Zr,
    onExited: Zr,
  };
  kn.UNMOUNTED = Lo;
  kn.EXITED = wr;
  kn.ENTERING = Mn;
  kn.ENTERED = xr;
  kn.EXITING = Nf;
  const UD = kn,
    gp = !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    );
  var Of = !1,
    Tf = !1;
  try {
    var Ju = {
      get passive() {
        return (Of = !0);
      },
      get once() {
        return (Tf = Of = !0);
      },
    };
    gp &&
      (window.addEventListener("test", Ju, Ju),
      window.removeEventListener("test", Ju, !0));
  } catch {}
  function QD(e, t, n, r) {
    if (r && typeof r != "boolean" && !Tf) {
      var i = r.once,
        o = r.capture,
        s = n;
      !Tf &&
        i &&
        ((s =
          n.__once ||
          function a(l) {
            this.removeEventListener(t, a, o), n.call(this, l);
          }),
        (n.__once = s)),
        e.addEventListener(t, s, Of ? r : o);
    }
    e.addEventListener(t, n, r);
  }
  function qD(e, t, n, r) {
    var i = r && typeof r != "boolean" ? r.capture : r;
    e.removeEventListener(t, n, i),
      n.__once && e.removeEventListener(t, n.__once, i);
  }
  function kr(e, t, n, r) {
    return (
      QD(e, t, n, r),
      function () {
        qD(e, t, n, r);
      }
    );
  }
  function WD(e, t, n, r) {
    if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
      var i = document.createEvent("HTMLEvents");
      i.initEvent(t, n, r), e.dispatchEvent(i);
    }
  }
  function YD(e) {
    var t = Sx(e, "transitionDuration") || "",
      n = t.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(t) * n;
  }
  function XD(e, t, n) {
    n === void 0 && (n = 5);
    var r = !1,
      i = setTimeout(function () {
        r || WD(e, "transitionend", !0);
      }, t + n),
      o = kr(
        e,
        "transitionend",
        function () {
          r = !0;
        },
        { once: !0 }
      );
    return function () {
      clearTimeout(i), o();
    };
  }
  function GD(e, t, n, r) {
    n == null && (n = YD(e) || 0);
    var i = XD(e, n, r),
      o = kr(e, "transitionend", t);
    return function () {
      i(), o();
    };
  }
  function iv(e, t) {
    const n = Sx(e, t) || "",
      r = n.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(n) * r;
  }
  function KD(e, t) {
    const n = iv(e, "transitionDuration"),
      r = iv(e, "transitionDelay"),
      i = GD(
        e,
        (o) => {
          o.target === e && (i(), t(o));
        },
        n + r
      );
  }
  function ZD(e) {
    e.offsetHeight;
  }
  var ov = function (t) {
    return !t || typeof t == "function"
      ? t
      : function (n) {
          t.current = n;
        };
  };
  function JD(e, t) {
    var n = ov(e),
      r = ov(t);
    return function (i) {
      n && n(i), r && r(i);
    };
  }
  function so(e, t) {
    return b.useMemo(
      function () {
        return JD(e, t);
      },
      [e, t]
    );
  }
  function wl(e) {
    return e && "setState" in e ? mi.findDOMNode(e) : e ?? null;
  }
  const eP = Je.forwardRef(
      (
        {
          onEnter: e,
          onEntering: t,
          onEntered: n,
          onExit: r,
          onExiting: i,
          onExited: o,
          addEndListener: s,
          children: a,
          childRef: l,
          ...u
        },
        c
      ) => {
        const f = b.useRef(null),
          d = so(f, l),
          p = (_) => {
            d(wl(_));
          },
          g = (_) => (k) => {
            _ && f.current && _(f.current, k);
          },
          y = b.useCallback(g(e), [e]),
          S = b.useCallback(g(t), [t]),
          m = b.useCallback(g(n), [n]),
          h = b.useCallback(g(r), [r]),
          v = b.useCallback(g(i), [i]),
          w = b.useCallback(g(o), [o]),
          E = b.useCallback(g(s), [s]);
        return x.jsx(UD, {
          ref: c,
          ...u,
          onEnter: y,
          onEntered: m,
          onEntering: S,
          onExit: h,
          onExited: w,
          onExiting: v,
          addEndListener: E,
          nodeRef: f,
          children:
            typeof a == "function"
              ? (_, k) => a(_, { ...k, ref: p })
              : Je.cloneElement(a, { ref: p }),
        });
      }
    ),
    tP = eP;
  function nP(e) {
    var t = b.useRef(e);
    return (
      b.useEffect(
        function () {
          t.current = e;
        },
        [e]
      ),
      t
    );
  }
  function Wi(e) {
    var t = nP(e);
    return b.useCallback(
      function () {
        return t.current && t.current.apply(t, arguments);
      },
      [t]
    );
  }
  function sv() {
    return b.useState(null);
  }
  function Ex() {
    var e = b.useRef(!0),
      t = b.useRef(function () {
        return e.current;
      });
    return (
      b.useEffect(function () {
        return (
          (e.current = !0),
          function () {
            e.current = !1;
          }
        );
      }, []),
      t.current
    );
  }
  var rP =
      typeof global < "u" &&
      global.navigator &&
      global.navigator.product === "ReactNative",
    iP = typeof document < "u";
  const Df = iP || rP ? b.useLayoutEffect : b.useEffect,
    oP = ["as", "disabled"];
  function sP(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++)
      (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function aP(e) {
    return !e || e.trim() === "#";
  }
  function _x({
    tagName: e,
    disabled: t,
    href: n,
    target: r,
    rel: i,
    role: o,
    onClick: s,
    tabIndex: a = 0,
    type: l,
  }) {
    e || (n != null || r != null || i != null ? (e = "a") : (e = "button"));
    const u = { tagName: e };
    if (e === "button") return [{ type: l || "button", disabled: t }, u];
    const c = (d) => {
        if (((t || (e === "a" && aP(n))) && d.preventDefault(), t)) {
          d.stopPropagation();
          return;
        }
        s == null || s(d);
      },
      f = (d) => {
        d.key === " " && (d.preventDefault(), c(d));
      };
    return (
      e === "a" && (n || (n = "#"), t && (n = void 0)),
      [
        {
          "role": o ?? "button",
          "disabled": void 0,
          "tabIndex": t ? void 0 : a,
          "href": n,
          "target": e === "a" ? r : void 0,
          "aria-disabled": t || void 0,
          "rel": e === "a" ? i : void 0,
          "onClick": c,
          "onKeyDown": f,
        },
        u,
      ]
    );
  }
  const lP = b.forwardRef((e, t) => {
    let { as: n, disabled: r } = e,
      i = sP(e, oP);
    const [o, { tagName: s }] = _x(
      Object.assign({ tagName: n, disabled: r }, i)
    );
    return x.jsx(s, Object.assign({}, i, o, { ref: t }));
  });
  lP.displayName = "Button";
  const uP = { [Mn]: "show", [xr]: "show" },
    kx = b.forwardRef(
      (
        {
          className: e,
          children: t,
          transitionClasses: n = {},
          onEnter: r,
          ...i
        },
        o
      ) => {
        const s = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            ...i,
          },
          a = b.useCallback(
            (l, u) => {
              ZD(l), r == null || r(l, u);
            },
            [r]
          );
        return x.jsx(tP, {
          ref: o,
          addEndListener: KD,
          ...s,
          onEnter: a,
          childRef: t.ref,
          children: (l, u) =>
            b.cloneElement(t, {
              ...u,
              className: Is("fade", e, t.props.className, uP[l], n[l]),
            }),
        });
      }
    );
  kx.displayName = "Fade";
  const av = kx;
  var cP = /-(.)/g;
  function fP(e) {
    return e.replace(cP, function (t, n) {
      return n.toUpperCase();
    });
  }
  const dP = (e) => e[0].toUpperCase() + fP(e).slice(1);
  function Cx(
    e,
    { displayName: t = dP(e), Component: n, defaultProps: r } = {}
  ) {
    const i = b.forwardRef(
      ({ className: o, bsPrefix: s, as: a = n || "div", ...l }, u) => {
        const c = { ...r, ...l },
          f = eu(s, e);
        return x.jsx(a, { ref: u, className: Is(o, f), ...c });
      }
    );
    return (i.displayName = t), i;
  }
  const Nx = b.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: i = !1,
        disabled: o = !1,
        className: s,
        ...a
      },
      l
    ) => {
      const u = eu(t, "btn"),
        [c, { tagName: f }] = _x({ tagName: e, disabled: o, ...a }),
        d = f;
      return x.jsx(d, {
        ...c,
        ...a,
        ref: l,
        disabled: o,
        className: Is(
          s,
          u,
          i && "active",
          n && `${u}-${n}`,
          r && `${u}-${r}`,
          a.href && o && "disabled"
        ),
      });
    }
  );
  Nx.displayName = "Button";
  const ei = Nx;
  function pP(e) {
    var t = b.useRef(e);
    return (t.current = e), t;
  }
  function hP(e) {
    var t = pP(e);
    b.useEffect(function () {
      return function () {
        return t.current();
      };
    }, []);
  }
  var Pf = Math.pow(2, 31) - 1;
  function Ox(e, t, n) {
    var r = n - Date.now();
    e.current =
      r <= Pf
        ? setTimeout(t, r)
        : setTimeout(function () {
            return Ox(e, t, n);
          }, Pf);
  }
  function mP() {
    var e = Ex(),
      t = b.useRef();
    return (
      hP(function () {
        return clearTimeout(t.current);
      }),
      b.useMemo(function () {
        var n = function () {
          return clearTimeout(t.current);
        };
        function r(i, o) {
          o === void 0 && (o = 0),
            e() &&
              (n(),
              o <= Pf
                ? (t.current = setTimeout(i, o))
                : Ox(t, i, Date.now() + o));
        }
        return { set: r, clear: n };
      }, [])
    );
  }
  var lv = Object.prototype.hasOwnProperty;
  function uv(e, t, n) {
    for (n of e.keys()) if (qo(n, t)) return n;
  }
  function qo(e, t) {
    var n, r, i;
    if (e === t) return !0;
    if (e && t && (n = e.constructor) === t.constructor) {
      if (n === Date) return e.getTime() === t.getTime();
      if (n === RegExp) return e.toString() === t.toString();
      if (n === Array) {
        if ((r = e.length) === t.length) for (; r-- && qo(e[r], t[r]); );
        return r === -1;
      }
      if (n === Set) {
        if (e.size !== t.size) return !1;
        for (r of e)
          if (
            ((i = r),
            (i && typeof i == "object" && ((i = uv(t, i)), !i)) || !t.has(i))
          )
            return !1;
        return !0;
      }
      if (n === Map) {
        if (e.size !== t.size) return !1;
        for (r of e)
          if (
            ((i = r[0]),
            (i && typeof i == "object" && ((i = uv(t, i)), !i)) ||
              !qo(r[1], t.get(i)))
          )
            return !1;
        return !0;
      }
      if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
      else if (n === DataView) {
        if ((r = e.byteLength) === t.byteLength)
          for (; r-- && e.getInt8(r) === t.getInt8(r); );
        return r === -1;
      }
      if (ArrayBuffer.isView(e)) {
        if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
        return r === -1;
      }
      if (!n || typeof e == "object") {
        r = 0;
        for (n in e)
          if (
            (lv.call(e, n) && ++r && !lv.call(t, n)) ||
            !(n in t) ||
            !qo(e[n], t[n])
          )
            return !1;
        return Object.keys(t).length === r;
      }
    }
    return e !== e && t !== t;
  }
  function vP(e) {
    var t = Ex();
    return [
      e[0],
      b.useCallback(
        function (n) {
          if (t()) return e[1](n);
        },
        [t, e[1]]
      ),
    ];
  }
  var ot = "top",
    Ot = "bottom",
    Tt = "right",
    st = "left",
    wp = "auto",
    Ls = [ot, Ot, Tt, st],
    Yi = "start",
    bs = "end",
    yP = "clippingParents",
    Tx = "viewport",
    _o = "popper",
    gP = "reference",
    cv = Ls.reduce(function (e, t) {
      return e.concat([t + "-" + Yi, t + "-" + bs]);
    }, []),
    Dx = [].concat(Ls, [wp]).reduce(function (e, t) {
      return e.concat([t, t + "-" + Yi, t + "-" + bs]);
    }, []),
    wP = "beforeRead",
    xP = "read",
    SP = "afterRead",
    bP = "beforeMain",
    EP = "main",
    _P = "afterMain",
    kP = "beforeWrite",
    CP = "write",
    NP = "afterWrite",
    OP = [wP, xP, SP, bP, EP, _P, kP, CP, NP];
  function nn(e) {
    return e.split("-")[0];
  }
  function vt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function zr(e) {
    var t = vt(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function rn(e) {
    var t = vt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function xp(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = vt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  var Tr = Math.max,
    xl = Math.min,
    Xi = Math.round;
  function Rf() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Px() {
    return !/^((?!chrome|android).)*safari/i.test(Rf());
  }
  function Gi(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
      i = 1,
      o = 1;
    t &&
      rn(e) &&
      ((i = (e.offsetWidth > 0 && Xi(r.width) / e.offsetWidth) || 1),
      (o = (e.offsetHeight > 0 && Xi(r.height) / e.offsetHeight) || 1));
    var s = zr(e) ? vt(e) : window,
      a = s.visualViewport,
      l = !Px() && n,
      u = (r.left + (l && a ? a.offsetLeft : 0)) / i,
      c = (r.top + (l && a ? a.offsetTop : 0)) / o,
      f = r.width / i,
      d = r.height / o;
    return {
      width: f,
      height: d,
      top: c,
      right: u + f,
      bottom: c + d,
      left: u,
      x: u,
      y: c,
    };
  }
  function Sp(e) {
    var t = Gi(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function Rx(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && xp(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function rr(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function bn(e) {
    return vt(e).getComputedStyle(e);
  }
  function TP(e) {
    return ["table", "td", "th"].indexOf(rr(e)) >= 0;
  }
  function cr(e) {
    return ((zr(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function nu(e) {
    return rr(e) === "html"
      ? e
      : e.assignedSlot || e.parentNode || (xp(e) ? e.host : null) || cr(e);
  }
  function fv(e) {
    return !rn(e) || bn(e).position === "fixed" ? null : e.offsetParent;
  }
  function DP(e) {
    var t = /firefox/i.test(Rf()),
      n = /Trident/i.test(Rf());
    if (n && rn(e)) {
      var r = bn(e);
      if (r.position === "fixed") return null;
    }
    var i = nu(e);
    for (
      xp(i) && (i = i.host);
      rn(i) && ["html", "body"].indexOf(rr(i)) < 0;

    ) {
      var o = bn(i);
      if (
        o.transform !== "none" ||
        o.perspective !== "none" ||
        o.contain === "paint" ||
        ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
        (t && o.willChange === "filter") ||
        (t && o.filter && o.filter !== "none")
      )
        return i;
      i = i.parentNode;
    }
    return null;
  }
  function As(e) {
    for (var t = vt(e), n = fv(e); n && TP(n) && bn(n).position === "static"; )
      n = fv(n);
    return n &&
      (rr(n) === "html" || (rr(n) === "body" && bn(n).position === "static"))
      ? t
      : n || DP(e) || t;
  }
  function bp(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Wo(e, t, n) {
    return Tr(e, xl(t, n));
  }
  function PP(e, t, n) {
    var r = Wo(e, t, n);
    return r > n ? n : r;
  }
  function jx() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function Mx(e) {
    return Object.assign({}, jx(), e);
  }
  function Ix(e, t) {
    return t.reduce(function (n, r) {
      return (n[r] = e), n;
    }, {});
  }
  var RP = function (t, n) {
    return (
      (t =
        typeof t == "function"
          ? t(Object.assign({}, n.rects, { placement: n.placement }))
          : t),
      Mx(typeof t != "number" ? t : Ix(t, Ls))
    );
  };
  function jP(e) {
    var t,
      n = e.state,
      r = e.name,
      i = e.options,
      o = n.elements.arrow,
      s = n.modifiersData.popperOffsets,
      a = nn(n.placement),
      l = bp(a),
      u = [st, Tt].indexOf(a) >= 0,
      c = u ? "height" : "width";
    if (!(!o || !s)) {
      var f = RP(i.padding, n),
        d = Sp(o),
        p = l === "y" ? ot : st,
        g = l === "y" ? Ot : Tt,
        y =
          n.rects.reference[c] +
          n.rects.reference[l] -
          s[l] -
          n.rects.popper[c],
        S = s[l] - n.rects.reference[l],
        m = As(o),
        h = m ? (l === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
        v = y / 2 - S / 2,
        w = f[p],
        E = h - d[c] - f[g],
        _ = h / 2 - d[c] / 2 + v,
        k = Wo(w, _, E),
        N = l;
      n.modifiersData[r] = ((t = {}), (t[N] = k), (t.centerOffset = k - _), t);
    }
  }
  function MP(e) {
    var t = e.state,
      n = e.options,
      r = n.element,
      i = r === void 0 ? "[data-popper-arrow]" : r;
    i != null &&
      ((typeof i == "string" &&
        ((i = t.elements.popper.querySelector(i)), !i)) ||
        (Rx(t.elements.popper, i) && (t.elements.arrow = i)));
  }
  const IP = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: jP,
    effect: MP,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Ki(e) {
    return e.split("-")[1];
  }
  var LP = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function AP(e, t) {
    var n = e.x,
      r = e.y,
      i = t.devicePixelRatio || 1;
    return { x: Xi(n * i) / i || 0, y: Xi(r * i) / i || 0 };
  }
  function dv(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      i = e.placement,
      o = e.variation,
      s = e.offsets,
      a = e.position,
      l = e.gpuAcceleration,
      u = e.adaptive,
      c = e.roundOffsets,
      f = e.isFixed,
      d = s.x,
      p = d === void 0 ? 0 : d,
      g = s.y,
      y = g === void 0 ? 0 : g,
      S = typeof c == "function" ? c({ x: p, y }) : { x: p, y };
    (p = S.x), (y = S.y);
    var m = s.hasOwnProperty("x"),
      h = s.hasOwnProperty("y"),
      v = st,
      w = ot,
      E = window;
    if (u) {
      var _ = As(n),
        k = "clientHeight",
        N = "clientWidth";
      if (
        (_ === vt(n) &&
          ((_ = cr(n)),
          bn(_).position !== "static" &&
            a === "absolute" &&
            ((k = "scrollHeight"), (N = "scrollWidth"))),
        (_ = _),
        i === ot || ((i === st || i === Tt) && o === bs))
      ) {
        w = Ot;
        var P =
          f && _ === E && E.visualViewport ? E.visualViewport.height : _[k];
        (y -= P - r.height), (y *= l ? 1 : -1);
      }
      if (i === st || ((i === ot || i === Ot) && o === bs)) {
        v = Tt;
        var T =
          f && _ === E && E.visualViewport ? E.visualViewport.width : _[N];
        (p -= T - r.width), (p *= l ? 1 : -1);
      }
    }
    var F = Object.assign({ position: a }, u && LP),
      z = c === !0 ? AP({ x: p, y }, vt(n)) : { x: p, y };
    if (((p = z.x), (y = z.y), l)) {
      var R;
      return Object.assign(
        {},
        F,
        ((R = {}),
        (R[w] = h ? "0" : ""),
        (R[v] = m ? "0" : ""),
        (R.transform =
          (E.devicePixelRatio || 1) <= 1
            ? "translate(" + p + "px, " + y + "px)"
            : "translate3d(" + p + "px, " + y + "px, 0)"),
        R)
      );
    }
    return Object.assign(
      {},
      F,
      ((t = {}),
      (t[w] = h ? y + "px" : ""),
      (t[v] = m ? p + "px" : ""),
      (t.transform = ""),
      t)
    );
  }
  function FP(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      i = r === void 0 ? !0 : r,
      o = n.adaptive,
      s = o === void 0 ? !0 : o,
      a = n.roundOffsets,
      l = a === void 0 ? !0 : a,
      u = {
        placement: nn(t.placement),
        variation: Ki(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        dv(
          Object.assign({}, u, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: s,
            roundOffsets: l,
          })
        )
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          dv(
            Object.assign({}, u, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const zP = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: FP,
    data: {},
  };
  var pa = { passive: !0 };
  function $P(e) {
    var t = e.state,
      n = e.instance,
      r = e.options,
      i = r.scroll,
      o = i === void 0 ? !0 : i,
      s = r.resize,
      a = s === void 0 ? !0 : s,
      l = vt(t.elements.popper),
      u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      o &&
        u.forEach(function (c) {
          c.addEventListener("scroll", n.update, pa);
        }),
      a && l.addEventListener("resize", n.update, pa),
      function () {
        o &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", n.update, pa);
          }),
          a && l.removeEventListener("resize", n.update, pa);
      }
    );
  }
  const BP = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: $P,
    data: {},
  };
  var VP = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Ra(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return VP[t];
    });
  }
  var HP = { start: "end", end: "start" };
  function pv(e) {
    return e.replace(/start|end/g, function (t) {
      return HP[t];
    });
  }
  function Ep(e) {
    var t = vt(e),
      n = t.pageXOffset,
      r = t.pageYOffset;
    return { scrollLeft: n, scrollTop: r };
  }
  function _p(e) {
    return Gi(cr(e)).left + Ep(e).scrollLeft;
  }
  function UP(e, t) {
    var n = vt(e),
      r = cr(e),
      i = n.visualViewport,
      o = r.clientWidth,
      s = r.clientHeight,
      a = 0,
      l = 0;
    if (i) {
      (o = i.width), (s = i.height);
      var u = Px();
      (u || (!u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
    }
    return { width: o, height: s, x: a + _p(e), y: l };
  }
  function QP(e) {
    var t,
      n = cr(e),
      r = Ep(e),
      i = (t = e.ownerDocument) == null ? void 0 : t.body,
      o = Tr(
        n.scrollWidth,
        n.clientWidth,
        i ? i.scrollWidth : 0,
        i ? i.clientWidth : 0
      ),
      s = Tr(
        n.scrollHeight,
        n.clientHeight,
        i ? i.scrollHeight : 0,
        i ? i.clientHeight : 0
      ),
      a = -r.scrollLeft + _p(e),
      l = -r.scrollTop;
    return (
      bn(i || n).direction === "rtl" &&
        (a += Tr(n.clientWidth, i ? i.clientWidth : 0) - o),
      { width: o, height: s, x: a, y: l }
    );
  }
  function kp(e) {
    var t = bn(e),
      n = t.overflow,
      r = t.overflowX,
      i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + r);
  }
  function Lx(e) {
    return ["html", "body", "#document"].indexOf(rr(e)) >= 0
      ? e.ownerDocument.body
      : rn(e) && kp(e)
      ? e
      : Lx(nu(e));
  }
  function Yo(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = Lx(e),
      i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
      o = vt(r),
      s = i ? [o].concat(o.visualViewport || [], kp(r) ? r : []) : r,
      a = t.concat(s);
    return i ? a : a.concat(Yo(nu(s)));
  }
  function jf(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function qP(e, t) {
    var n = Gi(e, !1, t === "fixed");
    return (
      (n.top = n.top + e.clientTop),
      (n.left = n.left + e.clientLeft),
      (n.bottom = n.top + e.clientHeight),
      (n.right = n.left + e.clientWidth),
      (n.width = e.clientWidth),
      (n.height = e.clientHeight),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function hv(e, t, n) {
    return t === Tx ? jf(UP(e, n)) : zr(t) ? qP(t, n) : jf(QP(cr(e)));
  }
  function WP(e) {
    var t = Yo(nu(e)),
      n = ["absolute", "fixed"].indexOf(bn(e).position) >= 0,
      r = n && rn(e) ? As(e) : e;
    return zr(r)
      ? t.filter(function (i) {
          return zr(i) && Rx(i, r) && rr(i) !== "body";
        })
      : [];
  }
  function YP(e, t, n, r) {
    var i = t === "clippingParents" ? WP(e) : [].concat(t),
      o = [].concat(i, [n]),
      s = o[0],
      a = o.reduce(function (l, u) {
        var c = hv(e, u, r);
        return (
          (l.top = Tr(c.top, l.top)),
          (l.right = xl(c.right, l.right)),
          (l.bottom = xl(c.bottom, l.bottom)),
          (l.left = Tr(c.left, l.left)),
          l
        );
      }, hv(e, s, r));
    return (
      (a.width = a.right - a.left),
      (a.height = a.bottom - a.top),
      (a.x = a.left),
      (a.y = a.top),
      a
    );
  }
  function Ax(e) {
    var t = e.reference,
      n = e.element,
      r = e.placement,
      i = r ? nn(r) : null,
      o = r ? Ki(r) : null,
      s = t.x + t.width / 2 - n.width / 2,
      a = t.y + t.height / 2 - n.height / 2,
      l;
    switch (i) {
      case ot:
        l = { x: s, y: t.y - n.height };
        break;
      case Ot:
        l = { x: s, y: t.y + t.height };
        break;
      case Tt:
        l = { x: t.x + t.width, y: a };
        break;
      case st:
        l = { x: t.x - n.width, y: a };
        break;
      default:
        l = { x: t.x, y: t.y };
    }
    var u = i ? bp(i) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (o) {
        case Yi:
          l[u] = l[u] - (t[c] / 2 - n[c] / 2);
          break;
        case bs:
          l[u] = l[u] + (t[c] / 2 - n[c] / 2);
          break;
      }
    }
    return l;
  }
  function Es(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.placement,
      i = r === void 0 ? e.placement : r,
      o = n.strategy,
      s = o === void 0 ? e.strategy : o,
      a = n.boundary,
      l = a === void 0 ? yP : a,
      u = n.rootBoundary,
      c = u === void 0 ? Tx : u,
      f = n.elementContext,
      d = f === void 0 ? _o : f,
      p = n.altBoundary,
      g = p === void 0 ? !1 : p,
      y = n.padding,
      S = y === void 0 ? 0 : y,
      m = Mx(typeof S != "number" ? S : Ix(S, Ls)),
      h = d === _o ? gP : _o,
      v = e.rects.popper,
      w = e.elements[g ? h : d],
      E = YP(zr(w) ? w : w.contextElement || cr(e.elements.popper), l, c, s),
      _ = Gi(e.elements.reference),
      k = Ax({ reference: _, element: v, strategy: "absolute", placement: i }),
      N = jf(Object.assign({}, v, k)),
      P = d === _o ? N : _,
      T = {
        top: E.top - P.top + m.top,
        bottom: P.bottom - E.bottom + m.bottom,
        left: E.left - P.left + m.left,
        right: P.right - E.right + m.right,
      },
      F = e.modifiersData.offset;
    if (d === _o && F) {
      var z = F[i];
      Object.keys(T).forEach(function (R) {
        var C = [Tt, Ot].indexOf(R) >= 0 ? 1 : -1,
          I = [ot, Ot].indexOf(R) >= 0 ? "y" : "x";
        T[R] += z[I] * C;
      });
    }
    return T;
  }
  function XP(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.placement,
      i = n.boundary,
      o = n.rootBoundary,
      s = n.padding,
      a = n.flipVariations,
      l = n.allowedAutoPlacements,
      u = l === void 0 ? Dx : l,
      c = Ki(r),
      f = c
        ? a
          ? cv
          : cv.filter(function (g) {
              return Ki(g) === c;
            })
        : Ls,
      d = f.filter(function (g) {
        return u.indexOf(g) >= 0;
      });
    d.length === 0 && (d = f);
    var p = d.reduce(function (g, y) {
      return (
        (g[y] = Es(e, {
          placement: y,
          boundary: i,
          rootBoundary: o,
          padding: s,
        })[nn(y)]),
        g
      );
    }, {});
    return Object.keys(p).sort(function (g, y) {
      return p[g] - p[y];
    });
  }
  function GP(e) {
    if (nn(e) === wp) return [];
    var t = Ra(e);
    return [pv(e), t, pv(t)];
  }
  function KP(e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var i = n.mainAxis,
          o = i === void 0 ? !0 : i,
          s = n.altAxis,
          a = s === void 0 ? !0 : s,
          l = n.fallbackPlacements,
          u = n.padding,
          c = n.boundary,
          f = n.rootBoundary,
          d = n.altBoundary,
          p = n.flipVariations,
          g = p === void 0 ? !0 : p,
          y = n.allowedAutoPlacements,
          S = t.options.placement,
          m = nn(S),
          h = m === S,
          v = l || (h || !g ? [Ra(S)] : GP(S)),
          w = [S].concat(v).reduce(function (U, G) {
            return U.concat(
              nn(G) === wp
                ? XP(t, {
                    placement: G,
                    boundary: c,
                    rootBoundary: f,
                    padding: u,
                    flipVariations: g,
                    allowedAutoPlacements: y,
                  })
                : G
            );
          }, []),
          E = t.rects.reference,
          _ = t.rects.popper,
          k = new Map(),
          N = !0,
          P = w[0],
          T = 0;
        T < w.length;
        T++
      ) {
        var F = w[T],
          z = nn(F),
          R = Ki(F) === Yi,
          C = [ot, Ot].indexOf(z) >= 0,
          I = C ? "width" : "height",
          j = Es(t, {
            placement: F,
            boundary: c,
            rootBoundary: f,
            altBoundary: d,
            padding: u,
          }),
          D = C ? (R ? Tt : st) : R ? Ot : ot;
        E[I] > _[I] && (D = Ra(D));
        var O = Ra(D),
          M = [];
        if (
          (o && M.push(j[z] <= 0),
          a && M.push(j[D] <= 0, j[O] <= 0),
          M.every(function (U) {
            return U;
          }))
        ) {
          (P = F), (N = !1);
          break;
        }
        k.set(F, M);
      }
      if (N)
        for (
          var L = g ? 3 : 1,
            V = function (G) {
              var K = w.find(function (J) {
                var ne = k.get(J);
                if (ne)
                  return ne.slice(0, G).every(function (he) {
                    return he;
                  });
              });
              if (K) return (P = K), "break";
            },
            $ = L;
          $ > 0;
          $--
        ) {
          var Y = V($);
          if (Y === "break") break;
        }
      t.placement !== P &&
        ((t.modifiersData[r]._skip = !0), (t.placement = P), (t.reset = !0));
    }
  }
  const ZP = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: KP,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function mv(e, t, n) {
    return (
      n === void 0 && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function vv(e) {
    return [ot, Tt, Ot, st].some(function (t) {
      return e[t] >= 0;
    });
  }
  function JP(e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      i = t.rects.popper,
      o = t.modifiersData.preventOverflow,
      s = Es(t, { elementContext: "reference" }),
      a = Es(t, { altBoundary: !0 }),
      l = mv(s, r),
      u = mv(a, i, o),
      c = vv(l),
      f = vv(u);
    (t.modifiersData[n] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: f,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f,
      }));
  }
  const e2 = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: JP,
  };
  function t2(e, t, n) {
    var r = nn(e),
      i = [st, ot].indexOf(r) >= 0 ? -1 : 1,
      o =
        typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
      s = o[0],
      a = o[1];
    return (
      (s = s || 0),
      (a = (a || 0) * i),
      [st, Tt].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
    );
  }
  function n2(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      i = n.offset,
      o = i === void 0 ? [0, 0] : i,
      s = Dx.reduce(function (c, f) {
        return (c[f] = t2(f, t.rects, o)), c;
      }, {}),
      a = s[t.placement],
      l = a.x,
      u = a.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[r] = s);
  }
  const r2 = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: n2,
  };
  function i2(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = Ax({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const o2 = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: i2,
    data: {},
  };
  function s2(e) {
    return e === "x" ? "y" : "x";
  }
  function a2(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      i = n.mainAxis,
      o = i === void 0 ? !0 : i,
      s = n.altAxis,
      a = s === void 0 ? !1 : s,
      l = n.boundary,
      u = n.rootBoundary,
      c = n.altBoundary,
      f = n.padding,
      d = n.tether,
      p = d === void 0 ? !0 : d,
      g = n.tetherOffset,
      y = g === void 0 ? 0 : g,
      S = Es(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
      m = nn(t.placement),
      h = Ki(t.placement),
      v = !h,
      w = bp(m),
      E = s2(w),
      _ = t.modifiersData.popperOffsets,
      k = t.rects.reference,
      N = t.rects.popper,
      P =
        typeof y == "function"
          ? y(Object.assign({}, t.rects, { placement: t.placement }))
          : y,
      T =
        typeof P == "number"
          ? { mainAxis: P, altAxis: P }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
      F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      z = { x: 0, y: 0 };
    if (_) {
      if (o) {
        var R,
          C = w === "y" ? ot : st,
          I = w === "y" ? Ot : Tt,
          j = w === "y" ? "height" : "width",
          D = _[w],
          O = D + S[C],
          M = D - S[I],
          L = p ? -N[j] / 2 : 0,
          V = h === Yi ? k[j] : N[j],
          $ = h === Yi ? -N[j] : -k[j],
          Y = t.elements.arrow,
          U = p && Y ? Sp(Y) : { width: 0, height: 0 },
          G = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : jx(),
          K = G[C],
          J = G[I],
          ne = Wo(0, k[j], U[j]),
          he = v ? k[j] / 2 - L - ne - K - T.mainAxis : V - ne - K - T.mainAxis,
          ye = v
            ? -k[j] / 2 + L + ne + J + T.mainAxis
            : $ + ne + J + T.mainAxis,
          $e = t.elements.arrow && As(t.elements.arrow),
          lt = $e ? (w === "y" ? $e.clientTop || 0 : $e.clientLeft || 0) : 0,
          ut = (R = F == null ? void 0 : F[w]) != null ? R : 0,
          Se = D + he - ut - lt,
          le = D + ye - ut,
          Me = Wo(p ? xl(O, Se) : O, D, p ? Tr(M, le) : M);
        (_[w] = Me), (z[w] = Me - D);
      }
      if (a) {
        var X,
          Qt = w === "x" ? ot : st,
          an = w === "x" ? Ot : Tt,
          ct = _[E],
          qt = E === "y" ? "height" : "width",
          ln = ct + S[Qt],
          Wt = ct - S[an],
          wt = [ot, st].indexOf(m) !== -1,
          un = (X = F == null ? void 0 : F[E]) != null ? X : 0,
          Dt = wt ? ln : ct - k[qt] - N[qt] - un + T.altAxis,
          Yt = wt ? ct + k[qt] + N[qt] - un - T.altAxis : Wt,
          Cn = p && wt ? PP(Dt, ct, Yt) : Wo(p ? Dt : ln, ct, p ? Yt : Wt);
        (_[E] = Cn), (z[E] = Cn - ct);
      }
      t.modifiersData[r] = z;
    }
  }
  const l2 = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: a2,
    requiresIfExists: ["offset"],
  };
  function u2(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function c2(e) {
    return e === vt(e) || !rn(e) ? Ep(e) : u2(e);
  }
  function f2(e) {
    var t = e.getBoundingClientRect(),
      n = Xi(t.width) / e.offsetWidth || 1,
      r = Xi(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function d2(e, t, n) {
    n === void 0 && (n = !1);
    var r = rn(t),
      i = rn(t) && f2(t),
      o = cr(t),
      s = Gi(e, i, n),
      a = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (r || (!r && !n)) &&
        ((rr(t) !== "body" || kp(o)) && (a = c2(t)),
        rn(t)
          ? ((l = Gi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
          : o && (l.x = _p(o))),
      {
        x: s.left + a.scrollLeft - l.x,
        y: s.top + a.scrollTop - l.y,
        width: s.width,
        height: s.height,
      }
    );
  }
  function p2(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    e.forEach(function (o) {
      t.set(o.name, o);
    });
    function i(o) {
      n.add(o.name);
      var s = [].concat(o.requires || [], o.requiresIfExists || []);
      s.forEach(function (a) {
        if (!n.has(a)) {
          var l = t.get(a);
          l && i(l);
        }
      }),
        r.push(o);
    }
    return (
      e.forEach(function (o) {
        n.has(o.name) || i(o);
      }),
      r
    );
  }
  function h2(e) {
    var t = p2(e);
    return OP.reduce(function (n, r) {
      return n.concat(
        t.filter(function (i) {
          return i.phase === r;
        })
      );
    }, []);
  }
  function m2(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function v2(e) {
    var t = e.reduce(function (n, r) {
      var i = n[r.name];
      return (
        (n[r.name] = i
          ? Object.assign({}, i, r, {
              options: Object.assign({}, i.options, r.options),
              data: Object.assign({}, i.data, r.data),
            })
          : r),
        n
      );
    }, {});
    return Object.keys(t).map(function (n) {
      return t[n];
    });
  }
  var yv = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function gv() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function y2(e) {
    e === void 0 && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = n === void 0 ? [] : n,
      i = t.defaultOptions,
      o = i === void 0 ? yv : i;
    return function (a, l, u) {
      u === void 0 && (u = o);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, yv, o),
          modifiersData: {},
          elements: { reference: a, popper: l },
          attributes: {},
          styles: {},
        },
        f = [],
        d = !1,
        p = {
          state: c,
          setOptions: function (m) {
            var h = typeof m == "function" ? m(c.options) : m;
            y(),
              (c.options = Object.assign({}, o, c.options, h)),
              (c.scrollParents = {
                reference: zr(a)
                  ? Yo(a)
                  : a.contextElement
                  ? Yo(a.contextElement)
                  : [],
                popper: Yo(l),
              });
            var v = h2(v2([].concat(r, c.options.modifiers)));
            return (
              (c.orderedModifiers = v.filter(function (w) {
                return w.enabled;
              })),
              g(),
              p.update()
            );
          },
          forceUpdate: function () {
            if (!d) {
              var m = c.elements,
                h = m.reference,
                v = m.popper;
              if (gv(h, v)) {
                (c.rects = {
                  reference: d2(h, As(v), c.options.strategy === "fixed"),
                  popper: Sp(v),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (T) {
                    return (c.modifiersData[T.name] = Object.assign(
                      {},
                      T.data
                    ));
                  });
                for (var w = 0; w < c.orderedModifiers.length; w++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (w = -1);
                    continue;
                  }
                  var E = c.orderedModifiers[w],
                    _ = E.fn,
                    k = E.options,
                    N = k === void 0 ? {} : k,
                    P = E.name;
                  typeof _ == "function" &&
                    (c =
                      _({ state: c, options: N, name: P, instance: p }) || c);
                }
              }
            }
          },
          update: m2(function () {
            return new Promise(function (S) {
              p.forceUpdate(), S(c);
            });
          }),
          destroy: function () {
            y(), (d = !0);
          },
        };
      if (!gv(a, l)) return p;
      p.setOptions(u).then(function (S) {
        !d && u.onFirstUpdate && u.onFirstUpdate(S);
      });
      function g() {
        c.orderedModifiers.forEach(function (S) {
          var m = S.name,
            h = S.options,
            v = h === void 0 ? {} : h,
            w = S.effect;
          if (typeof w == "function") {
            var E = w({ state: c, name: m, instance: p, options: v }),
              _ = function () {};
            f.push(E || _);
          }
        });
      }
      function y() {
        f.forEach(function (S) {
          return S();
        }),
          (f = []);
      }
      return p;
    };
  }
  const g2 = y2({ defaultModifiers: [e2, o2, zP, BP, r2, ZP, l2, IP] }),
    w2 = ["enabled", "placement", "strategy", "modifiers"];
  function x2(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++)
      (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  const S2 = {
      name: "applyStyles",
      enabled: !1,
      phase: "afterWrite",
      fn: () => {},
    },
    b2 = {
      name: "ariaDescribedBy",
      enabled: !0,
      phase: "afterWrite",
      effect:
        ({ state: e }) =>
        () => {
          const { reference: t, popper: n } = e.elements;
          if ("removeAttribute" in t) {
            const r = (t.getAttribute("aria-describedby") || "")
              .split(",")
              .filter((i) => i.trim() !== n.id);
            r.length
              ? t.setAttribute("aria-describedby", r.join(","))
              : t.removeAttribute("aria-describedby");
          }
        },
      fn: ({ state: e }) => {
        var t;
        const { popper: n, reference: r } = e.elements,
          i = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
        if (n.id && i === "tooltip" && "setAttribute" in r) {
          const o = r.getAttribute("aria-describedby");
          if (o && o.split(",").indexOf(n.id) !== -1) return;
          r.setAttribute("aria-describedby", o ? `${o},${n.id}` : n.id);
        }
      },
    },
    E2 = [];
  function _2(e, t, n = {}) {
    let {
        enabled: r = !0,
        placement: i = "bottom",
        strategy: o = "absolute",
        modifiers: s = E2,
      } = n,
      a = x2(n, w2);
    const l = b.useRef(s),
      u = b.useRef(),
      c = b.useCallback(() => {
        var S;
        (S = u.current) == null || S.update();
      }, []),
      f = b.useCallback(() => {
        var S;
        (S = u.current) == null || S.forceUpdate();
      }, []),
      [d, p] = vP(
        b.useState({
          placement: i,
          update: c,
          forceUpdate: f,
          attributes: {},
          styles: { popper: {}, arrow: {} },
        })
      ),
      g = b.useMemo(
        () => ({
          name: "updateStateModifier",
          enabled: !0,
          phase: "write",
          requires: ["computeStyles"],
          fn: ({ state: S }) => {
            const m = {},
              h = {};
            Object.keys(S.elements).forEach((v) => {
              (m[v] = S.styles[v]), (h[v] = S.attributes[v]);
            }),
              p({
                state: S,
                styles: m,
                attributes: h,
                update: c,
                forceUpdate: f,
                placement: S.placement,
              });
          },
        }),
        [c, f, p]
      ),
      y = b.useMemo(
        () => (qo(l.current, s) || (l.current = s), l.current),
        [s]
      );
    return (
      b.useEffect(() => {
        !u.current ||
          !r ||
          u.current.setOptions({
            placement: i,
            strategy: o,
            modifiers: [...y, g, S2],
          });
      }, [o, i, g, r, y]),
      b.useEffect(() => {
        if (!(!r || e == null || t == null))
          return (
            (u.current = g2(
              e,
              t,
              Object.assign({}, a, {
                placement: i,
                strategy: o,
                modifiers: [...y, b2, g],
              })
            )),
            () => {
              u.current != null &&
                (u.current.destroy(),
                (u.current = void 0),
                p((S) =>
                  Object.assign({}, S, {
                    attributes: {},
                    styles: { popper: {} },
                  })
                ));
            }
          );
      }, [r, e, t]),
      d
    );
  }
  function Mf(e, t) {
    if (e.contains) return e.contains(t);
    if (e.compareDocumentPosition)
      return e === t || !!(e.compareDocumentPosition(t) & 16);
  }
  var k2 = function () {},
    C2 = k2;
  const N2 = Ns(C2),
    wv = () => {};
  function O2(e) {
    return e.button === 0;
  }
  function T2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  const ja = (e) => e && ("current" in e ? e.current : e),
    xv = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
  function D2(e, t = wv, { disabled: n, clickTrigger: r = "click" } = {}) {
    const i = b.useRef(!1),
      o = b.useRef(!1),
      s = b.useCallback(
        (u) => {
          const c = ja(e);
          N2(
            !!c,
            "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
          ),
            (i.current =
              !c || T2(u) || !O2(u) || !!Mf(c, u.target) || o.current),
            (o.current = !1);
        },
        [e]
      ),
      a = Wi((u) => {
        const c = ja(e);
        c && Mf(c, u.target) && (o.current = !0);
      }),
      l = Wi((u) => {
        i.current || t(u);
      });
    b.useEffect(() => {
      var u, c;
      if (n || e == null) return;
      const f = tu(ja(e)),
        d = f.defaultView || window;
      let p =
          (u = d.event) != null ? u : (c = d.parent) == null ? void 0 : c.event,
        g = null;
      xv[r] && (g = kr(f, xv[r], a, !0));
      const y = kr(f, r, s, !0),
        S = kr(f, r, (h) => {
          if (h === p) {
            p = void 0;
            return;
          }
          l(h);
        });
      let m = [];
      return (
        "ontouchstart" in f.documentElement &&
          (m = [].slice
            .call(f.body.children)
            .map((h) => kr(h, "mousemove", wv))),
        () => {
          g == null || g(), y(), S(), m.forEach((h) => h());
        }
      );
    }, [e, n, r, s, a, l]);
  }
  function P2(e) {
    const t = {};
    return Array.isArray(e)
      ? (e == null ||
          e.forEach((n) => {
            t[n.name] = n;
          }),
        t)
      : e || t;
  }
  function R2(e = {}) {
    return Array.isArray(e)
      ? e
      : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
  }
  function j2({
    enabled: e,
    enableEvents: t,
    placement: n,
    flip: r,
    offset: i,
    fixed: o,
    containerPadding: s,
    arrowElement: a,
    popperConfig: l = {},
  }) {
    var u, c, f, d, p;
    const g = P2(l.modifiers);
    return Object.assign({}, l, {
      placement: n,
      enabled: e,
      strategy: o ? "fixed" : l.strategy,
      modifiers: R2(
        Object.assign({}, g, {
          eventListeners: {
            enabled: t,
            options: (u = g.eventListeners) == null ? void 0 : u.options,
          },
          preventOverflow: Object.assign({}, g.preventOverflow, {
            options: s
              ? Object.assign(
                  { padding: s },
                  (c = g.preventOverflow) == null ? void 0 : c.options
                )
              : (f = g.preventOverflow) == null
              ? void 0
              : f.options,
          }),
          offset: {
            options: Object.assign(
              { offset: i },
              (d = g.offset) == null ? void 0 : d.options
            ),
          },
          arrow: Object.assign({}, g.arrow, {
            enabled: !!a,
            options: Object.assign(
              {},
              (p = g.arrow) == null ? void 0 : p.options,
              { element: a }
            ),
          }),
          flip: Object.assign({ enabled: !!r }, g.flip),
        })
      ),
    });
  }
  const Fx = b.createContext(gp ? window : void 0);
  Fx.Provider;
  function M2() {
    return b.useContext(Fx);
  }
  const ec = (e, t) =>
    gp
      ? e == null
        ? (t || tu()).body
        : (typeof e == "function" && (e = e()),
          e && "current" in e && (e = e.current),
          e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
      : null;
  function Sv(e, t) {
    const n = M2(),
      [r, i] = b.useState(() => ec(e, n == null ? void 0 : n.document));
    if (!r) {
      const o = ec(e);
      o && i(o);
    }
    return (
      b.useEffect(() => {
        t && r && t(r);
      }, [t, r]),
      b.useEffect(() => {
        const o = ec(e);
        o !== r && i(o);
      }, [e, r]),
      r
    );
  }
  function I2({
    children: e,
    in: t,
    onExited: n,
    mountOnEnter: r,
    unmountOnExit: i,
  }) {
    const o = b.useRef(null),
      s = b.useRef(t),
      a = Wi(n);
    b.useEffect(() => {
      t ? (s.current = !0) : a(o.current);
    }, [t, a]);
    const l = so(o, e.ref),
      u = b.cloneElement(e, { ref: l });
    return t ? u : i || (!s.current && r) ? null : u;
  }
  function L2({ in: e, onTransition: t }) {
    const n = b.useRef(null),
      r = b.useRef(!0),
      i = Wi(t);
    return (
      Df(() => {
        if (!n.current) return;
        let o = !1;
        return (
          i({
            in: e,
            element: n.current,
            initial: r.current,
            isStale: () => o,
          }),
          () => {
            o = !0;
          }
        );
      }, [e, i]),
      Df(
        () => (
          (r.current = !1),
          () => {
            r.current = !0;
          }
        ),
        []
      ),
      n
    );
  }
  function A2({
    children: e,
    in: t,
    onExited: n,
    onEntered: r,
    transition: i,
  }) {
    const [o, s] = b.useState(!t);
    t && o && s(!1);
    const a = L2({
        in: !!t,
        onTransition: (u) => {
          const c = () => {
            u.isStale() ||
              (u.in
                ? r == null || r(u.element, u.initial)
                : (s(!0), n == null || n(u.element)));
          };
          Promise.resolve(i(u)).then(c, (f) => {
            throw (u.in || s(!0), f);
          });
        },
      }),
      l = so(a, e.ref);
    return o && !t ? null : b.cloneElement(e, { ref: l });
  }
  function F2(e, t, n) {
    return e
      ? x.jsx(e, Object.assign({}, n))
      : t
      ? x.jsx(A2, Object.assign({}, n, { transition: t }))
      : x.jsx(I2, Object.assign({}, n));
  }
  function z2(e) {
    return e.code === "Escape" || e.keyCode === 27;
  }
  function $2(e, t) {
    return e.classList
      ? !!t && e.classList.contains(t)
      : (" " + (e.className.baseVal || e.className) + " ").indexOf(
          " " + t + " "
        ) !== -1;
  }
  const B2 = () => {};
  function V2(e, t, { disabled: n, clickTrigger: r } = {}) {
    const i = t || B2;
    D2(e, i, { disabled: n, clickTrigger: r });
    const o = Wi((s) => {
      z2(s) && i(s);
    });
    b.useEffect(() => {
      if (n || e == null) return;
      const s = tu(ja(e));
      let a = (s.defaultView || window).event;
      const l = kr(s, "keyup", (u) => {
        if (u === a) {
          a = void 0;
          return;
        }
        o(u);
      });
      return () => {
        l();
      };
    }, [e, n, o]);
  }
  const zx = b.forwardRef((e, t) => {
    const {
        flip: n,
        offset: r,
        placement: i,
        containerPadding: o,
        popperConfig: s = {},
        transition: a,
        runTransition: l,
      } = e,
      [u, c] = sv(),
      [f, d] = sv(),
      p = so(c, t),
      g = Sv(e.container),
      y = Sv(e.target),
      [S, m] = b.useState(!e.show),
      h = _2(
        y,
        u,
        j2({
          placement: i,
          enableEvents: !!e.show,
          containerPadding: o || 5,
          flip: n,
          offset: r,
          arrowElement: f,
          popperConfig: s,
        })
      );
    e.show && S && m(!1);
    const v = (...F) => {
        m(!0), e.onExited && e.onExited(...F);
      },
      w = e.show || !S;
    if (
      (V2(u, e.onHide, {
        disabled: !e.rootClose || e.rootCloseDisabled,
        clickTrigger: e.rootCloseEvent,
      }),
      !w)
    )
      return null;
    const {
      onExit: E,
      onExiting: _,
      onEnter: k,
      onEntering: N,
      onEntered: P,
    } = e;
    let T = e.children(
      Object.assign({}, h.attributes.popper, {
        style: h.styles.popper,
        ref: p,
      }),
      {
        popper: h,
        placement: i,
        show: !!e.show,
        arrowProps: Object.assign({}, h.attributes.arrow, {
          style: h.styles.arrow,
          ref: d,
        }),
      }
    );
    return (
      (T = F2(a, l, {
        in: !!e.show,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: T,
        onExit: E,
        onExiting: _,
        onExited: v,
        onEnter: k,
        onEntering: N,
        onEntered: P,
      })),
      g ? mi.createPortal(T, g) : null
    );
  });
  zx.displayName = "Overlay";
  const H2 = zx,
    U2 = Cx("popover-header"),
    $x = Cx("popover-body");
  function Q2(e, t) {
    let n = e;
    return (
      e === "left"
        ? (n = t ? "end" : "start")
        : e === "right" && (n = t ? "start" : "end"),
      n
    );
  }
  function q2(e = "absolute") {
    return {
      position: e,
      top: "0",
      left: "0",
      opacity: "0",
      pointerEvents: "none",
    };
  }
  const W2 = b.forwardRef(
      (
        {
          bsPrefix: e,
          placement: t = "right",
          className: n,
          style: r,
          children: i,
          body: o,
          arrowProps: s,
          hasDoneInitialMeasure: a,
          popper: l,
          show: u,
          ...c
        },
        f
      ) => {
        const d = eu(e, "popover"),
          p = ID(),
          [g] = (t == null ? void 0 : t.split("-")) || [],
          y = Q2(g, p);
        let S = r;
        return (
          u && !a && (S = { ...r, ...q2(l == null ? void 0 : l.strategy) }),
          x.jsxs("div", {
            "ref": f,
            "role": "tooltip",
            "style": S,
            "x-placement": g,
            "className": Is(n, d, g && `bs-popover-${y}`),
            ...c,
            "children": [
              x.jsx("div", { className: "popover-arrow", ...s }),
              o ? x.jsx($x, { children: i }) : i,
            ],
          })
        );
      }
    ),
    Ma = Object.assign(W2, { Header: U2, Body: $x, POPPER_OFFSET: [0, 8] });
  function Y2(e) {
    const t = b.useRef(null),
      n = eu(void 0, "popover"),
      r = b.useMemo(
        () => ({
          name: "offset",
          options: {
            offset: () =>
              t.current && $2(t.current, n)
                ? e || Ma.POPPER_OFFSET
                : e || [0, 0],
          },
        }),
        [e, n]
      );
    return [t, [r]];
  }
  function X2(e, t) {
    const { ref: n } = e,
      { ref: r } = t;
    (e.ref = n.__wrapped || (n.__wrapped = (i) => n(wl(i)))),
      (t.ref = r.__wrapped || (r.__wrapped = (i) => r(wl(i))));
  }
  const Bx = b.forwardRef(
    (
      {
        children: e,
        transition: t = av,
        popperConfig: n = {},
        rootClose: r = !1,
        placement: i = "top",
        show: o = !1,
        ...s
      },
      a
    ) => {
      const l = b.useRef({}),
        [u, c] = b.useState(null),
        [f, d] = Y2(s.offset),
        p = so(a, f),
        g = t === !0 ? av : t || void 0,
        y = Wi((S) => {
          c(S), n == null || n.onFirstUpdate == null || n.onFirstUpdate(S);
        });
      return (
        Df(() => {
          u && (l.current.scheduleUpdate == null || l.current.scheduleUpdate());
        }, [u]),
        b.useEffect(() => {
          o || c(null);
        }, [o]),
        x.jsx(H2, {
          ...s,
          ref: p,
          popperConfig: {
            ...n,
            modifiers: d.concat(n.modifiers || []),
            onFirstUpdate: y,
          },
          transition: g,
          rootClose: r,
          placement: i,
          show: o,
          children: (S, { arrowProps: m, popper: h, show: v }) => {
            var w, E;
            X2(S, m);
            const _ = h == null ? void 0 : h.placement,
              k = Object.assign(l.current, {
                state: h == null ? void 0 : h.state,
                scheduleUpdate: h == null ? void 0 : h.update,
                placement: _,
                outOfBoundaries:
                  (h == null ||
                  (w = h.state) == null ||
                  (E = w.modifiersData.hide) == null
                    ? void 0
                    : E.isReferenceHidden) || !1,
                strategy: n.strategy,
              }),
              N = !!u;
            return typeof e == "function"
              ? e({
                  ...S,
                  placement: _,
                  show: v,
                  ...(!t && v && { className: "show" }),
                  popper: k,
                  arrowProps: m,
                  hasDoneInitialMeasure: N,
                })
              : b.cloneElement(e, {
                  ...S,
                  placement: _,
                  arrowProps: m,
                  popper: k,
                  hasDoneInitialMeasure: N,
                  className: Is(e.props.className, !t && v && "show"),
                  style: { ...e.props.style, ...S.style },
                });
          },
        })
      );
    }
  );
  Bx.displayName = "Overlay";
  const G2 = Bx;
  function K2(e) {
    return e && typeof e == "object" ? e : { show: e, hide: e };
  }
  function bv(e, t, n) {
    const [r] = t,
      i = r.currentTarget,
      o = r.relatedTarget || r.nativeEvent[n];
    (!o || o !== i) && !Mf(i, o) && e(...t);
  }
  function Z2({
    trigger: e = ["hover", "focus"],
    overlay: t,
    children: n,
    popperConfig: r = {},
    show: i,
    defaultShow: o = !1,
    onToggle: s,
    delay: a,
    placement: l,
    flip: u = l && l.indexOf("auto") !== -1,
    ...c
  }) {
    const f = b.useRef(null),
      d = so(f, n.ref),
      p = mP(),
      g = b.useRef(""),
      [y, S] = PD(i, o, s),
      m = K2(a),
      {
        onFocus: h,
        onBlur: v,
        onClick: w,
      } = typeof n != "function" ? b.Children.only(n).props : {},
      E = (I) => {
        d(wl(I));
      },
      _ = b.useCallback(() => {
        if ((p.clear(), (g.current = "show"), !m.show)) {
          S(!0);
          return;
        }
        p.set(() => {
          g.current === "show" && S(!0);
        }, m.show);
      }, [m.show, S, p]),
      k = b.useCallback(() => {
        if ((p.clear(), (g.current = "hide"), !m.hide)) {
          S(!1);
          return;
        }
        p.set(() => {
          g.current === "hide" && S(!1);
        }, m.hide);
      }, [m.hide, S, p]),
      N = b.useCallback(
        (...I) => {
          _(), h == null || h(...I);
        },
        [_, h]
      ),
      P = b.useCallback(
        (...I) => {
          k(), v == null || v(...I);
        },
        [k, v]
      ),
      T = b.useCallback(
        (...I) => {
          S(!y), w == null || w(...I);
        },
        [w, S, y]
      ),
      F = b.useCallback(
        (...I) => {
          bv(_, I, "fromElement");
        },
        [_]
      ),
      z = b.useCallback(
        (...I) => {
          bv(k, I, "toElement");
        },
        [k]
      ),
      R = e == null ? [] : [].concat(e),
      C = { ref: E };
    return (
      R.indexOf("click") !== -1 && (C.onClick = T),
      R.indexOf("focus") !== -1 && ((C.onFocus = N), (C.onBlur = P)),
      R.indexOf("hover") !== -1 && ((C.onMouseOver = F), (C.onMouseOut = z)),
      x.jsxs(x.Fragment, {
        children: [
          typeof n == "function" ? n(C) : b.cloneElement(n, C),
          x.jsx(G2, {
            ...c,
            show: y,
            onHide: k,
            flip: u,
            placement: l,
            popperConfig: r,
            target: f.current,
            children: t,
          }),
        ],
      })
    );
  }
  const Vx = Je.createContext({ mode: "move" }),
    J2 = (e) => e.connectionNodeId,
    eR = ({ data: e, isConnectable: t }) => {
      const [n, r] = b.useState(!1),
        o = !!ce(J2),
        { mode: s } = b.useContext(Vx);
      document.addEventListener("keydown", (c) => {
        (c.key.toLowerCase() === "escape" || c.code === "27") && l();
      });
      const a = () => {
          s !== "move" && r(!n);
        },
        l = () => {
          r(!1);
        },
        u = x.jsxs(Ma, {
          id: "course-popover",
          className: "custom-popover",
          children: [
            x.jsxs(Ma.Header, {
              className: "custom-popover-header",
              children: [
                x.jsx("div", {
                  className: "custom-popover-title",
                  children: e.label,
                }),
                x.jsx(ei, {
                  variant: "link",
                  className: "custom-popover-close",
                  onClick: l,
                  children: x.jsx("span", {
                    className: "custom-popover-close-icon",
                    children: "X",
                  }),
                }),
              ],
            }),
            x.jsx(Ma.Body, {
              className: "custom-popover-body",
              children: x.jsx("div", { children: e.desc }),
            }),
          ],
        });
      return x.jsxs(x.Fragment, {
        children: [
          !o &&
            x.jsx(qi, {
              type: "source",
              position: W.Right,
              className: "courseHandle",
              id: "a",
              onConnect: (c) => console.log("handle onConnect", c),
              isConnectable: t,
            }),
          x.jsx(qi, {
            type: "target",
            position: W.Left,
            className: "courseHandle",
            isConnectable: t,
            isConnectableStart: !1,
          }),
          x.jsx("div", {
            className: "node-wrapper",
            onClick: a,
            style: {
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              cursor: "pointer",
              width: "140px",
            },
            children: x.jsx("div", {
              className: "node-label",
              style: { marginBottom: "4px" },
              children: e.label,
            }),
          }),
          x.jsx(Z2, {
            trigger: "click",
            placement: "auto",
            show: n,
            onHide: l,
            overlay: u,
            children: x.jsx("div", {}),
          }),
        ],
      });
    };
  var Hx = { exports: {} };
  (function (e, t) {
    (function (n, r) {
      r();
    })(uo, function () {
      function n(u, c) {
        return (
          typeof c > "u"
            ? (c = { autoBom: !1 })
            : typeof c != "object" &&
              (console.warn(
                "Deprecated: Expected third argument to be a object"
              ),
              (c = { autoBom: !c })),
          c.autoBom &&
          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            u.type
          )
            ? new Blob(["\uFEFF", u], { type: u.type })
            : u
        );
      }
      function r(u, c, f) {
        var d = new XMLHttpRequest();
        d.open("GET", u),
          (d.responseType = "blob"),
          (d.onload = function () {
            l(d.response, c, f);
          }),
          (d.onerror = function () {
            console.error("could not download file");
          }),
          d.send();
      }
      function i(u) {
        var c = new XMLHttpRequest();
        c.open("HEAD", u, !1);
        try {
          c.send();
        } catch {}
        return 200 <= c.status && 299 >= c.status;
      }
      function o(u) {
        try {
          u.dispatchEvent(new MouseEvent("click"));
        } catch {
          var c = document.createEvent("MouseEvents");
          c.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            0,
            0,
            0,
            80,
            20,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            u.dispatchEvent(c);
        }
      }
      var s =
          typeof window == "object" && window.window === window
            ? window
            : typeof self == "object" && self.self === self
            ? self
            : typeof uo == "object" && uo.global === uo
            ? uo
            : void 0,
        a =
          s.navigator &&
          /Macintosh/.test(navigator.userAgent) &&
          /AppleWebKit/.test(navigator.userAgent) &&
          !/Safari/.test(navigator.userAgent),
        l =
          s.saveAs ||
          (typeof window != "object" || window !== s
            ? function () {}
            : "download" in HTMLAnchorElement.prototype && !a
            ? function (u, c, f) {
                var d = s.URL || s.webkitURL,
                  p = document.createElement("a");
                (c = c || u.name || "download"),
                  (p.download = c),
                  (p.rel = "noopener"),
                  typeof u == "string"
                    ? ((p.href = u),
                      p.origin === location.origin
                        ? o(p)
                        : i(p.href)
                        ? r(u, c, f)
                        : o(p, (p.target = "_blank")))
                    : ((p.href = d.createObjectURL(u)),
                      setTimeout(function () {
                        d.revokeObjectURL(p.href);
                      }, 4e4),
                      setTimeout(function () {
                        o(p);
                      }, 0));
              }
            : "msSaveOrOpenBlob" in navigator
            ? function (u, c, f) {
                if (((c = c || u.name || "download"), typeof u != "string"))
                  navigator.msSaveOrOpenBlob(n(u, f), c);
                else if (i(u)) r(u, c, f);
                else {
                  var d = document.createElement("a");
                  (d.href = u),
                    (d.target = "_blank"),
                    setTimeout(function () {
                      o(d);
                    });
                }
              }
            : function (u, c, f, d) {
                if (
                  ((d = d || open("", "_blank")),
                  d &&
                    (d.document.title = d.document.body.innerText =
                      "downloading..."),
                  typeof u == "string")
                )
                  return r(u, c, f);
                var p = u.type === "application/octet-stream",
                  g = /constructor/i.test(s.HTMLElement) || s.safari,
                  y = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((y || (p && g) || a) && typeof FileReader < "u") {
                  var S = new FileReader();
                  (S.onloadend = function () {
                    var v = S.result;
                    (v = y
                      ? v
                      : v.replace(/^data:[^;]*;/, "data:attachment/file;")),
                      d ? (d.location.href = v) : (location = v),
                      (d = null);
                  }),
                    S.readAsDataURL(u);
                } else {
                  var m = s.URL || s.webkitURL,
                    h = m.createObjectURL(u);
                  d ? (d.location = h) : (location.href = h),
                    (d = null),
                    setTimeout(function () {
                      m.revokeObjectURL(h);
                    }, 4e4);
                }
              });
      (s.saveAs = l.saveAs = l), (e.exports = l);
    });
  })(Hx);
  var tR = Hx.exports;
  const Ev = "example-flow",
    nR = ({ onAddNode: e, onChange: t, flowInstance: n }) => {
      const r = b.useRef(null),
        i = () => {
          r.current.click();
        },
        o = b.useCallback(
          (u) => {
            const c = async () => {
              const f = u.target.files[0];
              if (!f) {
                console.log("Error opening file: No file selected!");
                return;
              }
              const d = f.name.slice(f.name.lastIndexOf(".") + 1);
              if (d.toLowerCase() !== "json")
                return (
                  console.log(
                    `Invalid file type '${d}'! File extension must be '.json'.`
                  ),
                  c()
                );
              console.log("File opened!");
              const p = new FileReader();
              (p.onload = (g) => {
                console.log(`Reader load event: ${f.name}`);
                const y = g.target.result,
                  S = JSON.parse(y.toString());
                S
                  ? (console.log(S),
                    t(S),
                    console.log("Nodes loaded successfully"))
                  : console.log("Failed to load nodes");
              }),
                p.readAsText(f);
            };
            c().then();
          },
          [r]
        ),
        s = b.useCallback(() => {
          if (n) {
            const u = n.toObject();
            localStorage.setItem(Ev, JSON.stringify(u));
          }
        }, [n]),
        a = b.useCallback(() => {
          if (n) {
            const u = n.toObject(),
              c = new Blob([JSON.stringify(u)], { type: "application/json" });
            tR.saveAs(c, "my-flowchart.json");
          }
        }, [n]),
        l = b.useCallback(() => {
          (async () => {
            const c = JSON.parse(localStorage.getItem(Ev));
            c && t(c);
          })().then();
        }, []);
      return x.jsxs(lp, {
        id: "flowButtonPanel",
        position: "top-right",
        children: [
          x.jsx(ei, {
            variant: "secondary",
            onClick: e,
            children: "Add Course",
          }),
          x.jsx(ei, {
            variant: "secondary",
            onClick: s,
            children: "Save State",
          }),
          x.jsx(ei, { variant: "secondary", onClick: l, children: "Restore" }),
          x.jsxs(x.Fragment, {
            children: [
              x.jsx(ei, {
                variant: "secondary",
                onClick: i,
                children: "Import",
              }),
              x.jsx("input", {
                ref: r,
                type: "file",
                style: { display: "none" },
                onChange: o,
              }),
            ],
          }),
          x.jsx(ei, { variant: "secondary", onClick: a, children: "Export" }),
        ],
      });
    },
    Sl = [
      {
        id: "1",
        data: {
          label: "101 - Computing Technology and You",
          units: "3",
          desc: "Introduction to the concepts, techniques, uses, applications, and terminology of computers, computing, programming, artificial intelligence, and networking. Emphasis is on the possibilities and limitations of computers and computing in a wide range of personal, commercial, and societal activities. Recommended for all students.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 100, y: 100 },
        type: "courseNode",
      },
      {
        id: "2",
        data: {
          label: "115 - Programming I",
          units: "4",
          desc: "This course gives an overview of computer organization; arithmetic and logical expressions, decision and iteration, simple I/O; subprograms; principles of good programming style, readability, documentation, structured programming concepts; top-down design and refinements; techniques of debugging and testing. Use of the above concepts will be implemented in a standard high-level programming language.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 260, y: 100 },
        type: "courseNode",
      },
      {
        id: "3",
        data: {
          label: "115W - Programming I Workshop",
          units: "1",
          desc: "A workshop designed to be taken with CS 115. Exploration of programming concepts through problem solving in a group setting.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 420, y: 100 },
        type: "courseNode",
      },
      {
        id: "4",
        data: {
          label: "210 - Introduction to Unix",
          units: "1",
          desc: "This course is an introduction to the use of Linux/Unix as a programming environment. Communicating with a Linux host, shells and shell commands, files and directories, Gnome desktop, jobs and processes, scripting, programming utilities (compiler, linker, debugger, make, hex dump, etc.).",
          labHours: "3",
          lecHours: "",
        },
        position: { x: 100, y: 200 },
        type: "courseNode",
      },
      {
        id: "5",
        data: {
          label: "215 - Programming II",
          units: "4",
          desc: "This course is the sequel to CS 115. Topics include: pointers and dynamic allocation of storage, linked lists, an introduction to the object oriented programming (OOP) paradigm, classes and objects, encapsulation, member variables and member functions, inheritance and polymorphism, scoping, templates, iterators, and error handling techniques.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 260, y: 200 },
        type: "courseNode",
      },
      {
        id: "6",
        data: {
          label: "242 - Discrete Structures for Computer Science",
          units: "4",
          desc: "This course covers fundamental mathematical concepts blended with their applications in Computer Science. Topics include: sets, functions and relations, Boolean algebra, normal forms., Karnaugh map and other minimization techniques, predicate logic, formal and informal proof techniques, relational algebra, basic counting techniques, recurrence relations, and an introduction to graph theory.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 420, y: 200 },
        type: "courseNode",
      },
      {
        id: "7",
        data: {
          label: "252 - Introduction to Computer Organization",
          units: "4",
          desc: "This course looks at the interface between computer hardware and software by introducing computer architecture and low-level programming. Topics to be covered include: data representations, digital logic, combinational and sequential circuits, computer system organization from the machine language point of view, and assembly language implementation of high-level constructs.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 580, y: 200 },
        type: "courseNode",
      },
      {
        id: "8",
        data: {
          label: "285 - Selected Topics in Computer Science",
          units: "1-4",
          desc: "This lower-division course may be repeated with different subject matter. Content will be indicated by the specific topic.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 740, y: 200 },
        type: "courseNode",
      },
      {
        id: "9",
        data: {
          label: "315 - Data Structures",
          units: "4",
          desc: "This course introduces the concept of the organization of data into different structures to support the efficient implementation of computer algorithms. The emphasis of the course is on the internal representation of the elementary and intermediate data structures such as stacks, queues, binary trees, heaps and hash tables, their time and space requirements, and their applications. A second component of the course is the study of more advanced features of object-oriented programming.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 100, y: 300 },
        type: "courseNode",
      },
      {
        id: "10",
        data: {
          label: "330 - Introduction to Game Programming",
          units: "3",
          desc: "This course is an introduction to the theory and practice of video game design and programming. Video games combine, in real-time, concepts in computer graphics, human-computer interaction, networking, artificial intelligence, computer aided instruction, computer architecture, and databases. This course introduces students to a variety of game engines and frameworks and explores artificially intelligent agents. Students will work as part of a team to create a complete description document for a computer game and implement a prototype of the game.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 260, y: 300 },
        type: "courseNode",
      },
      {
        id: "11",
        data: {
          label: "340 - Computer Security and Malware",
          units: "3",
          desc: "Current methods for increasing security, protecting privacy, and guaranteeing degrees of confidentiality of computer records; ensuring computer installation safety; protecting software products; preventing and dealing with crime; value systems, ethics, and human factors affecting use and misuse of computers. Discussion of recent technical, legal, and sociopolitical issues influencing computer security problems, with an emphasis on malware.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 420, y: 300 },
        type: "courseNode",
      },
      {
        id: "12",
        data: {
          label: "349 - Problem Solving in a Team Environment",
          units: "1",
          desc: "This course focuses on problem solving and program development in a team programming environment. Topics include: techniques for problem analysis and algorithm design, rapid implementation and pair programming methods, use of standard container classes and library functions. Different types of problems will be selected each semester. Students taking this course participate in regional and national programming competitions.",
          labHours: "2",
          lecHours: "",
        },
        position: { x: 580, y: 300 },
        type: "courseNode",
      },
      {
        id: "13",
        data: {
          label: "351 - Computer Architecture",
          units: "4",
          desc: "This course is the sequel to CS 252 and includes the following topics: instruction set design; stages of instruction execution: data, and control path design; pipelining; memory hierarchy; cache models and design issues; virtual memory and secondary storage; I/O interfacing. Advanced topics to include some of the following: multiprocessor systems, GPU, multicores and cluster computers.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 740, y: 300 },
        type: "courseNode",
      },
      {
        id: "14",
        data: {
          label: "355 - Database Management Systems Design",
          units: "4",
          desc: "This course focuses on the theoretical as well as the practical aspects of modern database systems. Topics include the study of the entity-relationship (E/R) model, relational algebra, data normalization, XML as a semi-structured data model, data integrity, and database administration. Current tools and technologies are used to create and manipulate sample databases.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 900, y: 300 },
        type: "courseNode",
      },
      {
        id: "15",
        data: {
          label: "360 - Object-Oriented Programming",
          units: "3",
          desc: "Principles of object-oriented programming, including encapsulation, inheritance, polymorphism, and design patterns. Specific applications are developed in one or more object-oriented programming languages and will cover the use of application frameworks and graphical user interfaces based on object-oriented principles.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 1060, y: 300 },
        type: "courseNode",
      },
      {
        id: "16",
        data: {
          label: "365 - Computer Networking and the Internet",
          units: "3",
          desc: "This course introduces the theory and practice of computer networking, with coverage of key theories in data communication and how these theories relate to current practices and will drive future practices. Network hardware implementations of local area networks, wide area networks, telephone networks, and wireless networks are investigated. Network software implementations of switches and routers, peer-to-peer networking, and hosted applications are investigated with exercises in writing and debugging network protocols in the laboratory.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 1220, y: 300 },
        type: "courseNode",
      },
      {
        id: "17",
        data: {
          label: "370 - Software Design and Development",
          units: "4",
          desc: "Techniques of software design and development. Software lifecycle, requirements, formal specification, metrics, design, functional and structural testing, rapid prototyping, complexity, version control, and team management. Software metrics, tools for component-based software development. Team-based, agile, and scrum methodologies emphasized.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 1380, y: 300 },
        type: "courseNode",
      },
      {
        id: "18",
        data: {
          label: "375 - Computer Graphics",
          units: "3",
          desc: "An introduction to computer graphics. Survey of the fundamental algorithms and methodologies, including, but not limited to, polygon fill, line-drawing, antialiasing, geometric transformations, viewing and clipping, spline representation, occlusion and visible surface detection, illumination, texturing, color models, rendering, shaders, animation, and emerging techniques.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1540, y: 300 },
        type: "courseNode",
      },
      {
        id: "19",
        data: {
          label: "380 - ETS Major Field Test",
          units: "1",
          desc: "The focus of this course is preparation for the Major Field Test in Computer Science. Students will review material in the basic knowledge areas of computer science including: discrete structures, programming, algorithms and complexity, systems, software engineering, and information management. The course will culminate with students taking the Major Field Test in Computer Science administered through Educational Testing Services. This course is intended for students whom have completed the majority of required coursework in the CS major and are within one semester of graduation.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1700, y: 300 },
        type: "courseNode",
      },
      {
        id: "20",
        data: {
          label: "385 - Selected Topics in Computer Science",
          units: "1-4",
          desc: "This lower-division course may be repeated with different subject matter. Content will be indicated by the specific topic.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1860, y: 300 },
        type: "courseNode",
      },
      {
        id: "21",
        data: {
          label: "386 - Selected Topics in CS with Lab",
          units: "3",
          desc: "This course may be repeated with different subject matter for credit in the CS major.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 2020, y: 300 },
        type: "courseNode",
      },
      {
        id: "22",
        data: {
          label: "390 - Computer Science Colloquium",
          units: "1",
          desc: "Series of lectures on current developments in computer science.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 2180, y: 300 },
        type: "courseNode",
      },
      {
        id: "23",
        data: {
          label: "391 - Computing Professions",
          units: "1",
          desc: "This course will introduce students to careers in the computing field, covering different career possibilities; the software engineering job search and interview process; graduate education in computing; and aspects of professionalism including communication and ethics. Students in this course will develop job application materials and practice technical and nontechnical job interviews.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 2340, y: 300 },
        type: "courseNode",
      },
      {
        id: "24",
        data: {
          label: "415 - Algorithm Analysis",
          units: "4",
          desc: "This course provides a systematic approach to the design and analysis of algorithms with an emphasis on efficiency. Topics include algorithms for searching and sorting, hashing, exploring graphs, and integer and polynomial arithmetic. Foundations in recurrence relations, combinatorics, probability, and graph theory as used in algorithm analysis are covered. Standard design techniques such as divide-and-conquer, greedy method, dynamic programming, heuristics, and probabilistic algorithms along with NP-completeness and approximation algorithms are included.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 100, y: 400 },
        type: "courseNode",
      },
      {
        id: "25",
        data: {
          label: "425 - Parallel Computing",
          units: "3",
          desc: "Overview of parallel patterns, programming models, and hardware. Topics include parallel performance analysis; types of parallelism; parallel decomposition of tasks; shared vs. distributed memory; synchronization; hands-on experience with multiple parallel programming models; and architectural support for parallelism.",
          labHours: "",
          lecHours: "3",
        },
        position: { x: 260, y: 400 },
        type: "courseNode",
      },
      {
        id: "26",
        data: {
          label: "450 - Operating Systems",
          units: "4",
          desc: "This course covers the fundamental concepts of operating system design and implementation; the study of problems, goals, and methods of concurrent programming; and the fundamentals of systems programming. Topics include resource-management, process and thread scheduling algorithms, inter-process communication, I/O subsystems and device-drivers, memory management including virtual memory, segmentation, and page-replacement policies. These topics will be covered in theory and in practice through the study of the source-code of a working operating system.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 420, y: 400 },
        type: "courseNode",
      },
      {
        id: "27",
        data: {
          label: "452 - Compiler Design and Construction",
          units: "3",
          desc: "Application of language and automata theory to the design and construction of compilers. Lexical scanning, top-down and bottom-up parsing; semantic analysis, code generation; optimization. Design and construction of parts of a simple compiler using compiler generation tools.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 580, y: 400 },
        type: "courseNode",
      },
      {
        id: "28",
        data: {
          label: "454 - Theory of Computation",
          units: "4",
          desc: "Abstract mathematical models of computing devices and language specification systems with focus on regular and context-free languages and their applications in parsing, pattern matching, counting etc. Turing machines and computability, time and space complexity of languages, unsolvable problems and intractable problems.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 740, y: 400 },
        type: "courseNode",
      },
      {
        id: "29",
        data: {
          label: "460 - Programming Languages",
          units: "4",
          desc: "This course provides a survey of the syntactic, semantic, and implementation features of functional, procedural, object-oriented, logic, and concurrent programming languages.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 900, y: 400 },
        type: "courseNode",
      },
      {
        id: "30",
        data: {
          label: "465 - Data Communications",
          units: "3",
          desc: "The ISO reference model, theoretical basis for data communications, data transmission theory and practice, telephone systems, protocols, networks, internetworks, with examples.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 1060, y: 400 },
        type: "courseNode",
      },
      {
        id: "31",
        data: {
          label: "470 - Advanced Software Design Project",
          units: "3",
          desc: 'This course is a project-based course designed to provide a "real world, team oriented" capstone experience for Computer Science majors. Coursework will be organized around large programming projects. The content of the projects may vary depending on the interests of the instructor and may include industry, government, nonprofit organization, or other affiliations.',
          labHours: "",
          lecHours: "3",
        },
        position: { x: 1220, y: 400 },
        type: "courseNode",
      },
      {
        id: "32",
        data: {
          label: "479 - Computer Vision Fundamentals",
          units: "3",
          desc: "Algorithms for face detection and face recognition are now widely employed for surveillance, security and entertainment applications. This course will delve into the study and implementation of such algorithms for detecting generic objects (pedestrians, animals, buildings, traffic signs, etc.). It will involve learning about (i) image filtering operations such as smoothing, thresholding and edge detection, (ii) interest point detection and representation methods such as SIFT and HOG, and (iii) machine learning classification techniques such as SVM and convolutional neural networks.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1380, y: 400 },
        type: "courseNode",
      },
      {
        id: "33",
        data: {
          label: "480 - Artificial Intelligence",
          units: "3",
          desc: "This course is a survey of techniques that simulate human intelligence. Topics may include: pattern recognition, general problem solving, search algorithms such as iterative deepening and A* search, adversarial game-tree search, decision-making, neural networks, various machine learning algorithms and applications.",
          labHours: "",
          lecHours: "3",
        },
        position: { x: 1540, y: 400 },
        type: "courseNode",
      },
      {
        id: "34",
        data: {
          label: "495 - Special Studies",
          units: "1-4",
          desc: "This course is intended for students who are doing advanced work in an area of computer science (e.g., a senior project).",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1700, y: 400 },
        type: "courseNode",
      },
      {
        id: "35",
        data: {
          label: "496 - Senior Research Project",
          units: "3",
          desc: "Students, under the direction of one or more faculty members, undertake a substantial research project that is based on multiple upper-division CS courses. The result of the research is presented by the students in one of the Colloquium (CS 390) meetings.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1860, y: 400 },
        type: "courseNode",
      },
      {
        id: "36",
        data: {
          label: "497 - Internship",
          units: "1-3",
          desc: "Student projects conceived and designed in conjunction with an off-campus organization or group. The internship is intended to provide on-the-job experience in an area of computer science in which the student has no prior on-the-job experience. Computer hardware or computer time Required for the internship, as well as regular supervision of the intern, must be provided by the off-campus organization.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 2020, y: 400 },
        type: "courseNode",
      },
    ];
  function _v(e, t) {
    const { width: n, height: r, positionAbsolute: i } = e,
      o = t.positionAbsolute,
      s = n / 2,
      a = r / 2,
      l = i.x + s,
      u = i.y + a,
      c = o.x + s,
      f = o.y + a,
      d = (c - l) / (2 * s) - (f - u) / (2 * a),
      p = (c - l) / (2 * s) + (f - u) / (2 * a),
      g = 1 / (Math.abs(d) + Math.abs(p)),
      y = g * d,
      S = g * p,
      m = s * (y + S) + l,
      h = a * (-y + S) + u;
    return { x: m, y: h };
  }
  function kv(e, t) {
    const n = { ...e.positionAbsolute, ...e },
      r = Math.round(n.x),
      i = Math.round(n.y),
      o = Math.round(t.x),
      s = Math.round(t.y);
    return o <= r + 1
      ? W.Left
      : o >= r + n.width - 1
      ? W.Right
      : s <= i + 1
      ? W.Top
      : s >= n.y + n.height - 1
      ? W.Bottom
      : W.Top;
  }
  function Ux(e, t) {
    const n = _v(e, t),
      r = _v(t, e),
      i = kv(e, n),
      o = kv(t, r);
    return { sx: n.x, sy: n.y, tx: r.x, ty: r.y, sourcePos: i, targetPos: o };
  }
  function rR({ id: e, source: t, target: n, markerEnd: r, style: i }) {
    const o = ce(b.useCallback((g) => g.nodeInternals.get(t), [t])),
      s = ce(b.useCallback((g) => g.nodeInternals.get(n), [n]));
    if (!o || !s) return null;
    const { sx: a, sy: l, tx: u, ty: c, sourcePos: f, targetPos: d } = Ux(o, s),
      [p] = Zl({
        sourceX: a,
        sourceY: l,
        sourcePosition: f,
        targetPosition: d,
        targetX: u,
        targetY: c,
      });
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(oo, { path: p, markerEnd: r, interactionWidth: 30 }),
        x.jsx("path", {
          id: e,
          className: "react-flow__edge-path",
          d: p,
          markerEnd: r,
          style: i,
        }),
      ],
    });
  }
  function iR({
    targetX: e,
    targetY: t,
    sourcePosition: n,
    targetPosition: r,
    sourceNode: i,
  }) {
    if (!i) return null;
    const o = {
        id: "connection-target",
        width: 1,
        height: 1,
        position: { x: e, y: t },
      },
      { sx: s, sy: a } = Ux(i, o),
      [l] = Zl({
        sourceX: s,
        sourceY: a,
        sourcePosition: n,
        targetPosition: r,
        targetX: e,
        targetY: t,
      });
    return x.jsxs("g", {
      children: [
        x.jsx("path", {
          fill: "none",
          stroke: "#222",
          strokeWidth: 1.5,
          className: "animated",
          d: l,
        }),
        x.jsx("circle", {
          cx: e,
          cy: t,
          fill: "#fff",
          r: 3,
          stroke: "#222",
          strokeWidth: 1.5,
        }),
      ],
    });
  }
  function oR({ setMode: e }) {
    return x.jsxs("div", {
      style: {
        position: "absolute",
        bottom: "130px",
        right: "20px",
        gap: "10px",
        zIndex: "1",
      },
      children: [
        x.jsx("button", {
          className: "btn btn-tool",
          onClick: () => e("move"),
          children: "👆",
        }),
        x.jsx("button", {
          className: "btn btn-tool",
          onClick: () => e("connect"),
          children: "🔗",
        }),
        x.jsx("button", {
          className: "btn btn-tool",
          onClick: () => e("describe"),
          children: "🔍",
        }),
      ],
    });
  }
  const sR = () => `randomnode_${+new Date()}`,
    aR = Sl,
    lR = [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "floating",
        label: "this is an edge label",
      },
    ],
    uR = { courseNode: eR },
    cR = { floating: rR };
  console.log(Sl);
  const fR = b.forwardRef((e, t) => {
      const [n, r, i] = hD(aR),
        [o, s, a] = mD(lR),
        [l, u] = b.useState(t),
        [c, f] = b.useState("move"),
        { setViewport: d } = Jl(),
        p = b.useCallback(
          (S) =>
            s((m) =>
              Mw(
                { ...S, type: "floating", markerEnd: { type: xs.ArrowClosed } },
                m
              )
            ),
          [s]
        ),
        g = b.useCallback(() => {
          const S = {
            id: sR(),
            data: { label: "Added node" },
            position: {
              x: Math.random() * window.innerWidth - 100,
              y: Math.random() * window.innerHeight,
            },
          };
          r((m) => m.concat(S));
        }, [r]),
        y = (S) => {
          (async () => {
            if (S) {
              const { x: h = 0, y: v = 0, zoom: w = 1 } = S.viewport;
              r(S.nodes || []), s(S.edges || []), d({ x: h, y: v, zoom: w });
            }
          })().then();
        };
      return x.jsx("div", {
        id: "flowCanvas",
        className: "flow-canvas",
        style: {
          width: "100%",
          height: "100vh",
          backgroundColor: "whitesmoke",
        },
        ...e,
        children: x.jsxs(Vx.Provider, {
          value: { mode: c },
          children: [
            x.jsx(oR, { setMode: f }),
            x.jsxs(mx, {
              nodes: n,
              edges: o,
              onNodesChange: i,
              onEdgesChange: a,
              onConnect: p,
              onInit: u,
              nodeTypes: uR,
              edgeTypes: cR,
              connectionLineComponent: iR,
              nodesDraggable: c === "move",
              nodesConnectable: c === "connect",
              connectionRadius: 80,
              selectionMode: Qi.Partial,
              children: [
                x.jsx(nR, { onAddNode: g, onChange: y, flowInstance: l }),
                x.jsx(bD, {}),
                x.jsx(OD, { size: "1" }),
              ],
            }),
          ],
        }),
      });
    }),
    dR = () => x.jsx(yp, { children: x.jsx(fR, {}) }),
    Qx = b.forwardRef(
      ({ label: e, title: t, children: n, ...r }, i) => (
        b.useEffect(() => {
          const o = document.getElementById("banner"),
            s = document.getElementById("navButton");
          s && o && (s.style.height = o.clientHeight + "px");
        }, []),
        x.jsx("div", { ...r, children: n })
      )
    );
  class qx extends Je.Component {
    render() {
      const { children: t, ...n } = this.props;
      return x.jsx("div", {
        id: "sidebar",
        className: "sidebar sidebar-card",
        style: { backgroundColor: "whitesmoke" },
        ...n,
        children: t,
      });
    }
  }
  const Wx = b.forwardRef(
      ({ label: e, title: t, children: n, ...r }, i) => (
        b.useEffect(() => {}, []), x.jsx("div", { ...r, children: n })
      )
    ),
    pR = (e) => {
      const t = ["Computer Science", "Mathematics", "Psychology", "Business"],
        [n, r] = b.useState(""),
        [i, o] = b.useState(""),
        [s, a] = b.useState(t),
        [l, u] = b.useState([]),
        c = b.createRef(),
        f = "VisualDegree";
      b.useEffect(() => {
        a(["Computer Science", "Mathematics", "Psychology", "Business"]),
          m(),
          d(i);
      }, []),
        b.useEffect(() => {
          const P = () => {
            const T = document.getElementById("builderSidebar");
            T && T.style.display !== "none" ? v() : w();
          };
          return (
            window.addEventListener("resize", P),
            () => {
              window.addEventListener("resize", P);
            }
          );
        }, []);
      const d = b.useCallback(
          (P) => {
            u(P === "Computer Science" ? Sl : []);
          },
          [Sl]
        ),
        p = async (P) => {
          const T = P.target.value;
          r(T),
            o(T),
            (() => {
              const z = document.getElementById("builderBanner");
              z && (z.title = i);
            })(),
            await d(T),
            S();
        },
        g = () =>
          x.jsxs("div", {
            style: {
              display: "grid",
              paddingBottom: "10px",
              borderBottom: "ridge",
            },
            children: [
              x.jsx("label", {
                htmlFor: "degreeSelect",
                children: "Select Degree:",
              }),
              x.jsxs("select", {
                id: "degreeSelect",
                value: n,
                onChange: p,
                children: [
                  x.jsx("option", { value: "", children: "-- Select --" }),
                  s.map((P, T) =>
                    x.jsx("option", { value: P, children: P }, T)
                  ),
                ],
              }),
            ],
          }),
        y = () => x.jsx(x.Fragment, {}),
        S = () =>
          !l || l.length === 0
            ? x.jsx(x.Fragment, {})
            : x.jsxs("div", {
                id: "courseList",
                style: { paddingTop: "15px", position: "relative" },
                children: [
                  x.jsx("h4", {
                    style: { paddingLeft: "10px" },
                    children: "Courses",
                  }),
                  x.jsx("div", {
                    id: "courseListBox",
                    className:
                      "course-list-box scrollbar-thin scrollbar-track-lightgray scrollbar-thumb-hover-darkgray",
                    style: {
                      borderRadius: "1%",
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderTop: "groove",
                      borderLeft: "groove",
                      borderBottom: "ridge",
                      borderRight: "none",
                      overflowY: "scroll",
                      maxHeight: "calc(80vh)",
                    },
                    children: l.map((P, T) =>
                      x.jsx(
                        "button",
                        {
                          style: {
                            width: "100%",
                            border: "none",
                            borderBottom: "ridge",
                          },
                          children: P.data.label.split("-")[0].trim(),
                        },
                        T
                      )
                    ),
                  }),
                ],
              }),
        m = () => {
          v();
        },
        h = () => {
          w();
        },
        v = () => {
          const P = document.getElementById("builderSidebar"),
            T = document.getElementById("builderView");
          T &&
            P &&
            ((async () => {
              (T.style.transition = "padding-left 0.7s ease-in-out"),
                setTimeout(() => {
                  T.style.paddingLeft = P.offsetWidth + "px";
                }, 0.1);
            })().then(),
            P && (P.style.display = "block"));
          const F = document.getElementById("sidebarNavButton");
          F && ((F.style.width = "100%"), (F.style.height = "auto"));
          const z = document.getElementById("bannerNavButton");
          z && (z.style.display = "none");
          const R = document.getElementById("bannerLabel");
          R && (R.hidden = 1);
          const C = document.getElementById("bannerDegreeName");
          C && ((C.style.marginTop = "3px"), (C.style.paddingLeft = "10px"));
        },
        w = () => {
          const P = document.getElementById("builderSidebar");
          P && (P.style.display = "none");
          const T = [];
          T.push(document.getElementById("builderView"));
          const F = document.getElementById("builderBanner");
          T.push(F);
          const z = document.getElementById("bannerNavButton");
          T.push(z),
            T.forEach((I) => {
              I && (I.style = "");
            });
          const R = document.getElementById("bannerLabel");
          R && (R.hidden = !1);
          const C = document.getElementById("bannerDegreeName");
          C && (C.style.paddingLeft = "0"),
            z &&
              F &&
              z.style.setProperty("height", F.clientHeight + "px", "important");
        },
        E = () =>
          x.jsx("button", {
            id: "sidebarNavButton",
            className: "sidebar-banner banner-button banner-sonoma",
            onClick: h,
            children: x.jsx("h5", { children: f }),
          }),
        _ = () =>
          x.jsxs(Qx, {
            id: "builderBanner",
            className: "banner banner-sonoma",
            children: [
              x.jsx("button", {
                id: "bannerNavButton",
                className: "banner-button banner-sonoma banner-xlarge",
                onClick: m,
                children: "☰",
              }),
              x.jsxs("div", {
                style: { alignItems: "center" },
                children: [
                  x.jsx("h5", {
                    id: "bannerLabel",
                    style: { paddingTop: "7px", marginBottom: 0 },
                    children: f,
                  }),
                  x.jsx("h3", {
                    id: "bannerDegreeName",
                    style: { marginTop: 0 },
                    children: i,
                  }),
                ],
              }),
            ],
          }),
        k = () =>
          x.jsx(Wx, {
            id: "builderNavbar",
            className: "navbar navbar-material",
            children: x.jsxs("div", {
              className: "container",
              style: { alignItems: "left" },
              children: [
                x.jsx("div", {
                  className: "navbarItem selected",
                  style: { marginTop: 0 },
                  children: x.jsx("span", { children: "Major" }),
                }),
                x.jsx("div", {
                  className: "navbarItem",
                  style: { marginTop: 0 },
                  children: "GE",
                }),
                x.jsx("div", {
                  className: "navbarItem",
                  style: { marginTop: 0 },
                  children: "Catalog",
                }),
                x.jsx("div", {
                  className: "navbarItem",
                  style: { marginTop: 0 },
                  children: "My Semester",
                }),
              ],
            }),
          }),
        N = () =>
          x.jsxs(qx, {
            id: "builderSidebar",
            style: { display: "flex", flexDirection: "column" },
            ref: c,
            label: f,
            children: [
              E(),
              x.jsxs("div", {
                id: "sidebarContent",
                className: "scrollbar-hidden",
                style: { padding: 10, minHeight: "100%" },
                children: [g(), S()],
              }),
              y(),
            ],
          });
      return x.jsxs("div", {
        id: "builderOverlay",
        className: "builder-overlay",
        ...e,
        children: [_(), k(), N()],
      });
    };
  class hR extends Je.Component {
    constructor() {
      super(...arguments);
      mu(this, "overlayRef", b.createRef());
      mu(this, "flowCanvasRef", b.createRef());
    }
    componentDidMount() {
      W0("VisualDegree | DegreeBuilder");
    }
    render() {
      return x.jsxs("div", {
        id: "builderView",
        className: "builder-view",
        style: { backgroundColor: "whitesmoke" },
        children: [
          x.jsx(pR, {}),
          x.jsx("div", {
            id: "flowContainer",
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "whitesmoke",
            },
            children: x.jsx(dR, { forwardRef: this.flowCanvasRef }),
          }),
        ],
      });
    }
  }
  function Ur() {
    return x.jsx("div", {
      className: "d-flex justify-content-center",
      children: x.jsx("div", {
        className: "spinner-border",
        role: "status",
        children: x.jsx("span", { className: "sr-only" }),
      }),
    });
  }
  function mR({ courseId: e, closeModal: t }) {
    const [n, r] = b.useState(!0),
      [i, o] = b.useState(null),
      [s, a] = b.useState(null);
    if (
      (b.useEffect(() => {
        (async () => {
          try {
            const h = await fetch(`/api/course/${e}`);
            if (!h.ok) throw new Error("Error fetching course");
            const v = await h.json();
            a(v), r(!1);
          } catch (h) {
            console.error("Error fetching course:", h), o(h), r(!1);
          }
        })();
      }, [e]),
      n)
    )
      return x.jsx(Ur, {});
    if (i) return x.jsxs("p", { children: ["Error: ", i.message] });
    const {
      title: l,
      prefix: u,
      header: c,
      code: f,
      description: d,
      num_units: p,
      ge_category: g,
      prerequisites: y,
      url: S,
    } = s;
    return x.jsxs("div", {
      "className": "modal fade show",
      "id": "displayCourseModal",
      "tabIndex": "-1",
      "aria-labelledby": "displayCourseModal",
      "aria-hidden": "true",
      "style": { display: "block" },
      "children": [
        x.jsx("div", {
          className: "modal-dialog",
          children: x.jsxs("div", {
            className: "modal-content",
            children: [
              x.jsxs("div", {
                className: "modal-header",
                children: [
                  x.jsx("h5", {
                    className: "modal-title",
                    id: "displayCourseModal",
                    children: "Course Info",
                  }),
                  x.jsx("button", {
                    "type": "button",
                    "className": "btn-close",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    "onClick": t,
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "modal-body",
                children: [
                  x.jsx("style", {
                    children: `
              .modal-body label {
                margin-right: 0.5rem;
              }
            `,
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Prefix: " }),
                      x.jsx("span", { children: u }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Code: " }),
                      x.jsx("span", { children: f }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Title: " }),
                      x.jsx("span", { children: l }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Header: " }),
                      x.jsx("span", { children: c }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Description: " }),
                      x.jsx("span", { children: d }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Number of Units: " }),
                      x.jsx("span", { children: p }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "GE Category: " }),
                      x.jsx("span", { children: g }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Prerequisites: " }),
                      x.jsx("span", { children: y }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "URL: " }),
                      x.jsx("span", { children: S }),
                    ],
                  }),
                  x.jsx("button", {
                    "type": "button",
                    "data-bs-dismiss": "modal",
                    "className": "btn btn-secondary",
                    "onClick": t,
                    "children": "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
        x.jsx("div", { className: "modal-backdrop fade show", onClick: t }),
      ],
    });
  }
  const vR = ({ course: e, handleButtonClick: t }) => {
      const [n, r] = b.useState(!1),
        i = () => {
          r(!0);
        },
        o = () => {
          r(!1);
        };
      return x.jsxs(x.Fragment, {
        children: [
          x.jsxs("tr", {
            children: [
              x.jsx("td", {}),
              x.jsx("td", { children: e.title }),
              x.jsx("td", { children: e.num_units }),
              x.jsx("td", { children: e.code }),
              x.jsx("td", { children: e.ge_category }),
              x.jsx("td", {
                children: x.jsx("div", {
                  children: x.jsx("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: i,
                    children: "Course Info",
                  }),
                }),
              }),
            ],
          }),
          n && x.jsx(mR, { courseId: e.id, closeModal: o }),
        ],
      });
    },
    yR = (e) => {
      const [t, n] = b.useState(!0),
        [r, i] = b.useState(null),
        [o, s] = b.useState([]);
      if (
        (b.useEffect(() => {
          fetch("/api/courses")
            .then((l) => {
              if (!l.ok) throw new Error("Error fetching courses");
              return l.json();
            })
            .then((l) => {
              s(l), n(!1);
            })
            .catch((l) => {
              console.error("Error fetching courses:", l), i(l), n(!1);
            });
        }, []),
        t)
      )
        return x.jsx(Ur, {});
      if (r) return x.jsxs("p", { children: ["Error: ", r.message] });
      const a = (l) => {
        console.log("Button clicked for course ID:", l);
      };
      return x.jsx("div", {
        className: "table-container",
        children: x.jsxs("table", {
          className: "table table-hover mt-3",
          children: [
            x.jsx("thead", {
              children: x.jsxs("tr", {
                children: [
                  x.jsx("th", {}),
                  x.jsx("th", { children: "Title" }),
                  x.jsx("th", { children: "Number of Units" }),
                  x.jsx("th", { children: "Code" }),
                  x.jsx("th", { children: "GE Category" }),
                ],
              }),
            }),
            x.jsx("tbody", {
              children: o.map((l) =>
                x.jsx(vR, { course: l, handleButtonClick: a }, l.id)
              ),
            }),
          ],
        }),
      });
    };
  function gR({ programId: e, closeModal: t }) {
    const [n, r] = b.useState(!0),
      [i, o] = b.useState(null),
      [s, a] = b.useState(null);
    if (
      (b.useEffect(() => {
        (async () => {
          try {
            const f = await fetch(`/api/program/${e}`);
            if (!f.ok) throw new Error("Error fetching program");
            const d = await f.json();
            a(d), r(!1);
          } catch (f) {
            console.error("Error fetching program:", f), o(f), r(!1);
          }
        })();
      }, [e]),
      n)
    )
      return x.jsx(Ur, {});
    if (i) return x.jsxs("p", { children: ["Error: ", i.message] });
    const { name: l, url: u } = s;
    return x.jsxs("div", {
      "className": "modal fade show",
      "id": "displayProgramModal",
      "tabIndex": "-1",
      "aria-labelledby": "displayProgramModal",
      "aria-hidden": "true",
      "style": { display: "block" },
      "children": [
        x.jsx("div", {
          className: "modal-dialog",
          children: x.jsxs("div", {
            className: "modal-content",
            children: [
              x.jsxs("div", {
                className: "modal-header",
                children: [
                  x.jsx("h5", {
                    className: "modal-title",
                    id: "displayProgramModal",
                    children: "Program Info",
                  }),
                  x.jsx("button", {
                    "type": "button",
                    "className": "btn-close",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    "onClick": t,
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "modal-body",
                children: [
                  x.jsx("style", {
                    children: `
              .modal-body label {
                margin-right: 0.5rem;
              }
            `,
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Name: " }),
                      x.jsx("span", { children: l }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "URL: " }),
                      x.jsx("span", { children: u }),
                    ],
                  }),
                  x.jsx("button", {
                    "type": "button",
                    "data-bs-dismiss": "modal",
                    "className": "btn btn-secondary",
                    "onClick": t,
                    "children": "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
        x.jsx("div", { className: "modal-backdrop fade show", onClick: t }),
      ],
    });
  }
  const wR = ({ program: e, handleButtonClick: t }) => {
      const [n, r] = b.useState(!1),
        i = () => {
          r(!0);
        },
        o = () => {
          r(!1);
        };
      return x.jsxs(x.Fragment, {
        children: [
          x.jsxs("tr", {
            children: [
              x.jsx("td", { children: e.name }),
              x.jsx("td", {
                children: x.jsx("div", {
                  children: x.jsx("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: i,
                    children: "Program Info",
                  }),
                }),
              }),
            ],
          }),
          n && x.jsx(gR, { programId: e.id, closeModal: o }),
        ],
      });
    },
    xR = (e) => {
      const [t, n] = b.useState(!0),
        [r, i] = b.useState(null),
        [o, s] = b.useState([]);
      if (
        (b.useEffect(() => {
          fetch("/api/programs")
            .then((l) => {
              if (!l.ok) throw new Error("Error fetching programs");
              return l.json();
            })
            .then((l) => {
              s(l), n(!1);
            })
            .catch((l) => {
              console.error("Error fetching programs:", l), i(l), n(!1);
            });
        }, []),
        t)
      )
        return x.jsx(Ur, {});
      if (r) return x.jsxs("p", { children: ["Error: ", r.message] });
      const a = (l) => {
        console.log("Button clicked for program ID:", l);
      };
      return x.jsx("div", {
        className: "table-container",
        children: x.jsxs("table", {
          className: "table table-hover mt-3",
          children: [
            x.jsx("thead", {
              children: x.jsx("tr", {
                children: x.jsx("th", { children: " Name " }),
              }),
            }),
            x.jsx("tbody", {
              children: o.map((l) =>
                x.jsx(wR, { program: l, handleButtonClick: a }, l.id)
              ),
            }),
          ],
        }),
      });
    };
  function SR({ departmentId: e, closeModal: t }) {
    const [n, r] = b.useState(!0),
      [i, o] = b.useState(null),
      [s, a] = b.useState(null);
    if (
      (b.useEffect(() => {
        (async () => {
          try {
            const f = await fetch(`/api/department/${e}`);
            if (!f.ok) throw new Error("Error fetching department");
            const d = await f.json();
            a(d), r(!1);
          } catch (f) {
            console.error("Error fetching department:", f), o(f), r(!1);
          }
        })();
      }, [e]),
      n)
    )
      return x.jsx(Ur, {});
    if (i) return x.jsxs("p", { children: ["Error: ", i.message] });
    const { name: l, url: u } = s;
    return x.jsxs("div", {
      "className": "modal fade show",
      "id": "displayDepartmentModal",
      "tabIndex": "-1",
      "aria-labelledby": "displayDepartmentModal",
      "aria-hidden": "true",
      "style": { display: "block" },
      "children": [
        x.jsx("div", {
          className: "modal-dialog",
          children: x.jsxs("div", {
            className: "modal-content",
            children: [
              x.jsxs("div", {
                className: "modal-header",
                children: [
                  x.jsx("h5", {
                    className: "modal-title",
                    id: "displayDepartmentModal",
                    children: "Department Info",
                  }),
                  x.jsx("button", {
                    "type": "button",
                    "className": "btn-close",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    "onClick": t,
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "modal-body",
                children: [
                  x.jsx("style", {
                    children: `
              .modal-body label {
                margin-right: 0.5rem;
              }
            `,
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "Name: " }),
                      x.jsx("span", { children: l }),
                    ],
                  }),
                  x.jsxs("div", {
                    className: "mb-3",
                    children: [
                      x.jsx("label", { children: "URL: " }),
                      x.jsx("span", { children: u }),
                    ],
                  }),
                  x.jsx("button", {
                    "type": "button",
                    "data-bs-dismiss": "modal",
                    "className": "btn btn-secondary",
                    "onClick": t,
                    "children": "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
        x.jsx("div", { className: "modal-backdrop fade show", onClick: t }),
      ],
    });
  }
  const bR = ({ department: e, handleButtonClick: t }) => {
      const [n, r] = b.useState(!1),
        i = () => {
          r(!0);
        },
        o = () => {
          r(!1);
        };
      return x.jsxs(x.Fragment, {
        children: [
          x.jsxs("tr", {
            children: [
              x.jsx("td", { children: e.name }),
              x.jsx("td", {
                children: x.jsx("div", {
                  children: x.jsx("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: i,
                    children: "Department Info",
                  }),
                }),
              }),
            ],
          }),
          n && x.jsx(SR, { departmentId: e.id, closeModal: o }),
        ],
      });
    },
    ER = (e) => {
      const [t, n] = b.useState(!0),
        [r, i] = b.useState(null),
        [o, s] = b.useState([]);
      if (
        (b.useEffect(() => {
          fetch("/api/departments")
            .then((l) => {
              if (!l.ok) throw new Error("Error fetching departments");
              return l.json();
            })
            .then((l) => {
              s(l), n(!1);
            })
            .catch((l) => {
              console.error("Error fetching departments:", l), i(l), n(!1);
            });
        }, []),
        t)
      )
        return x.jsx(Ur, {});
      if (r) return x.jsxs("p", { children: ["Error: ", r.message] });
      const a = (l) => {
        console.log("Button clicked for department ID:", l);
      };
      return x.jsx("div", {
        className: "table-container",
        children: x.jsxs("table", {
          className: "table table-hover mt-3",
          children: [
            x.jsx("thead", {
              children: x.jsx("tr", {
                children: x.jsx("th", { children: " Name " }),
              }),
            }),
            x.jsx("tbody", {
              children: o.map((l) =>
                x.jsx(bR, { department: l, handleButtonClick: a }, l.id)
              ),
            }),
          ],
        }),
      });
    },
    _R = (e) => {
      const [t, n] = b.useState(""),
        [r, i] = b.useState(!1),
        [o, s] = b.useState(!1),
        [a, l] = b.useState(!1),
        [u, c] = b.useState("");
      b.useState([]);
      const [f, d] = b.useState([]),
        [p, g] = b.useState(!0),
        [y, S] = b.useState(null),
        m = ["Based on name", "Based on ID"];
      b.useEffect(
        () => (
          h(),
          v(),
          window.addEventListener("resize", v),
          () => {
            window.removeEventListener("resize", v);
          }
        ),
        []
      );
      const h = () => {
          fetch("/api/programs")
            .then((z) => {
              if (!z.ok) throw new Error("Error fetching programs");
              return z.json();
            })
            .then((z) => {
              d(z), g(!1);
            })
            .catch((z) => {
              console.error("Error fetching programs:", z), S(z), g(!1);
            });
        },
        v = () => {
          w();
        },
        w = () => {
          const z = document.getElementById("builderSidebar"),
            R = document.getElementById("builderView");
          if (z && R)
            if (z.style.display !== "none") {
              const C = z.offsetWidth;
              R.style.paddingLeft = `${C}px`;
            } else R.style.paddingLeft = "0";
        },
        E = () => {
          i(!0), s(!1), l(!1);
        },
        _ = () => {
          s(!0), i(!1), l(!1);
        },
        k = () => {
          l(!0), i(!1), s(!1);
        },
        N = () =>
          x.jsxs(Qx, {
            id: "builderBanner",
            className: "banner banner-sonoma",
            children: [
              x.jsx("h5", { children: "Dashboard" }),
              x.jsx("button", {
                id: "bannerNavButton",
                className: "banner-button banner-sonoma banner-xlarge",
                onClick: v,
                children: "☰",
              }),
              x.jsx("div", {
                style: { alignItems: "center" },
                children: x.jsxs("div", {
                  style: { display: "flex", alignItems: "center" },
                  children: [
                    x.jsx("h5", {
                      id: "bannerLabel",
                      style: {
                        paddingTop: "7px",
                        marginBottom: 0,
                        marginRight: "10px",
                      },
                    }),
                    x.jsx("h3", {
                      id: "bannerDegreeName",
                      style: { marginTop: 0 },
                      children: t,
                    }),
                  ],
                }),
              }),
            ],
          }),
        P = () =>
          x.jsx(Wx, {
            id: "builderNavbar",
            className: "navbar navbar-material",
            children: x.jsxs("div", {
              className: "container",
              style: { alignItems: "left" },
              children: [
                x.jsx("div", {
                  className: "navbarItem",
                  children: x.jsx("span", {
                    className: "navbarLink",
                    onClick: _,
                    children: "Programs",
                  }),
                }),
                x.jsx("div", {
                  className: "navbarItem",
                  children: x.jsx("span", {
                    className: "navbarLink",
                    onClick: k,
                    children: "Departments",
                  }),
                }),
                x.jsx("div", {
                  className: "navbarItem",
                  children: x.jsx("span", {
                    className: "navbarLink",
                    onClick: E,
                    children: "Courses",
                  }),
                }),
                x.jsx("div", {
                  className: "navbarItem",
                  children: "My Schedules",
                }),
              ],
            }),
          }),
        T = async (z) => {
          const R = z.target.value;
          c(R),
            n(R),
            (() => {
              const I = document.getElementById("builderBanner");
              I && (I.title = t);
            })(),
            await updateCourseListCallback(R);
        },
        F = () =>
          x.jsxs("div", {
            style: {
              display: "grid",
              paddingBottom: "10px",
              borderBottom: "ridge",
            },
            children: [
              x.jsx("label", {
                htmlFor: "degreeSelect",
                children: "Select Program:",
              }),
              x.jsxs("select", {
                id: "degreeSelect",
                value: u,
                onChange: T,
                children: [
                  x.jsx("option", { value: "", children: "-- Select --" }),
                  m.map((z, R) =>
                    x.jsx("option", { value: z, children: z }, R)
                  ),
                ],
              }),
            ],
          });
      return p
        ? x.jsx(Ur, {})
        : y
        ? x.jsxs("p", { children: ["Error: ", y.message] })
        : x.jsxs("div", {
            id: "builderOverlay",
            className: "builder-overlay",
            ...e,
            children: [
              x.jsxs(qx, {
                id: "builderSidebar",
                children: [
                  F(),
                  x.jsx("ul", {
                    children: f.map((z, R) =>
                      x.jsx("li", { children: z.name }, R)
                    ),
                  }),
                ],
              }),
              N(),
              P(),
              r && x.jsx(yR, {}),
              o && x.jsx(xR, {}),
              a && x.jsx(ER, {}),
            ],
          });
    },
    kR = () => (
      b.useEffect(() => {
        W0("VisualDegree | Db_Access");
      }, []),
      x.jsx("div", {
        id: "builderView",
        className: "builder-view",
        style: { backgroundColor: "whitesmoke" },
        children: x.jsx(_R, {}),
      })
    );
  var If = function (e, t) {
    return (
      (If =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }),
      If(e, t)
    );
  };
  function Ut(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    If(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var A = function () {
    return (
      (A =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      A.apply(this, arguments)
    );
  };
  function Zi(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  }
  function In(e, t, n, r) {
    function i(o) {
      return o instanceof n
        ? o
        : new n(function (s) {
            s(o);
          });
    }
    return new (n || (n = Promise))(function (o, s) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (f) {
          s(f);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (f) {
          s(f);
        }
      }
      function u(c) {
        c.done ? o(c.value) : i(c.value).then(a, l);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function Ln(e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      r,
      i,
      o,
      s;
    return (
      (s = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol == "function" &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(u) {
      return function (c) {
        return l([u, c]);
      };
    }
    function l(u) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; s && ((s = 0), u[0] && (n = 0)), n; )
        try {
          if (
            ((r = 1),
            i &&
              (o =
                u[0] & 2
                  ? i.return
                  : u[0]
                  ? i.throw || ((o = i.return) && o.call(i), 0)
                  : i.next) &&
              !(o = o.call(i, u[1])).done)
          )
            return o;
          switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              return n.label++, { value: u[1], done: !1 };
            case 5:
              n.label++, (i = u[1]), (u = [0]);
              continue;
            case 7:
              (u = n.ops.pop()), n.trys.pop();
              continue;
            default:
              if (
                ((o = n.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < o[1]) {
                (n.label = o[1]), (o = u);
                break;
              }
              if (o && n.label < o[2]) {
                (n.label = o[2]), n.ops.push(u);
                break;
              }
              o[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          u = t.call(e, n);
        } catch (c) {
          (u = [6, c]), (i = 0);
        } finally {
          r = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  }
  function Dr(e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = t.length, o; r < i; r++)
        (o || !(r in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
  }
  var tc = "Invariant Violation",
    Cv = Object.setPrototypeOf,
    CR =
      Cv === void 0
        ? function (e, t) {
            return (e.__proto__ = t), e;
          }
        : Cv,
    ie = (function (e) {
      Ut(t, e);
      function t(n) {
        n === void 0 && (n = tc);
        var r =
          e.call(
            this,
            typeof n == "number"
              ? tc +
                  ": " +
                  n +
                  " (see https://github.com/apollographql/invariant-packages)"
              : n
          ) || this;
        return (r.framesToPop = 1), (r.name = tc), CR(r, t.prototype), r;
      }
      return t;
    })(Error);
  function H(e, t) {
    if (!e) throw new ie(t);
  }
  var Yx = ["debug", "log", "warn", "error", "silent"],
    NR = Yx.indexOf("log");
  function ha(e) {
    return function () {
      if (Yx.indexOf(e) >= NR) {
        var t = console[e] || console.log;
        return t.apply(console, arguments);
      }
    };
  }
  (function (e) {
    (e.debug = ha("debug")),
      (e.log = ha("log")),
      (e.warn = ha("warn")),
      (e.error = ha("error"));
  })(H || (H = {}));
  function bt(e) {
    try {
      return e();
    } catch {}
  }
  const Nv =
    bt(function () {
      return globalThis;
    }) ||
    bt(function () {
      return window;
    }) ||
    bt(function () {
      return self;
    }) ||
    bt(function () {
      return global;
    }) ||
    bt(function () {
      return bt.constructor("return this")();
    });
  var Ov = "__",
    Tv = [Ov, Ov].join("DEV");
  function OR() {
    try {
      return !!__DEV__;
    } catch {
      return (
        Object.defineProperty(Nv, Tv, {
          value:
            bt(function () {
              return "production";
            }) !== "production",
          enumerable: !1,
          configurable: !0,
          writable: !0,
        }),
        Nv[Tv]
      );
    }
  }
  const nc = OR();
  function An(e) {
    try {
      return e();
    } catch {}
  }
  var Lf =
      An(function () {
        return globalThis;
      }) ||
      An(function () {
        return window;
      }) ||
      An(function () {
        return self;
      }) ||
      An(function () {
        return global;
      }) ||
      An(function () {
        return An.constructor("return this")();
      }),
    Af = !1;
  function TR() {
    Lf &&
      !An(function () {
        return "production";
      }) &&
      !An(function () {
        return process;
      }) &&
      (Object.defineProperty(Lf, "process", {
        value: { env: { NODE_ENV: "production" } },
        configurable: !0,
        enumerable: !1,
        writable: !0,
      }),
      (Af = !0));
  }
  TR();
  function Dv() {
    Af && (delete Lf.process, (Af = !1));
  }
  function Ia(e, t) {
    if (!!!e) throw new Error(t);
  }
  const Xx = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet",
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet",
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields",
      ],
      FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives",
      ],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives",
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields",
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields",
      ],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"],
    },
    DR = new Set(Object.keys(Xx));
  function Pv(e) {
    const t = e == null ? void 0 : e.kind;
    return typeof t == "string" && DR.has(t);
  }
  var Rv;
  (function (e) {
    (e.QUERY = "query"),
      (e.MUTATION = "mutation"),
      (e.SUBSCRIPTION = "subscription");
  })(Rv || (Rv = {}));
  var Re;
  (function (e) {
    (e.NAME = "Name"),
      (e.DOCUMENT = "Document"),
      (e.OPERATION_DEFINITION = "OperationDefinition"),
      (e.VARIABLE_DEFINITION = "VariableDefinition"),
      (e.SELECTION_SET = "SelectionSet"),
      (e.FIELD = "Field"),
      (e.ARGUMENT = "Argument"),
      (e.FRAGMENT_SPREAD = "FragmentSpread"),
      (e.INLINE_FRAGMENT = "InlineFragment"),
      (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
      (e.VARIABLE = "Variable"),
      (e.INT = "IntValue"),
      (e.FLOAT = "FloatValue"),
      (e.STRING = "StringValue"),
      (e.BOOLEAN = "BooleanValue"),
      (e.NULL = "NullValue"),
      (e.ENUM = "EnumValue"),
      (e.LIST = "ListValue"),
      (e.OBJECT = "ObjectValue"),
      (e.OBJECT_FIELD = "ObjectField"),
      (e.DIRECTIVE = "Directive"),
      (e.NAMED_TYPE = "NamedType"),
      (e.LIST_TYPE = "ListType"),
      (e.NON_NULL_TYPE = "NonNullType"),
      (e.SCHEMA_DEFINITION = "SchemaDefinition"),
      (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
      (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
      (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
      (e.FIELD_DEFINITION = "FieldDefinition"),
      (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
      (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
      (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
      (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
      (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
      (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
      (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
      (e.SCHEMA_EXTENSION = "SchemaExtension"),
      (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
      (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
      (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
      (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
      (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
      (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
  })(Re || (Re = {}));
  function jv(e) {
    return e === 9 || e === 32;
  }
  function PR(e, t) {
    const n = e.replace(/"""/g, '\\"""'),
      r = n.split(/\r\n|[\n\r]/g),
      i = r.length === 1,
      o =
        r.length > 1 &&
        r.slice(1).every((p) => p.length === 0 || jv(p.charCodeAt(0))),
      s = n.endsWith('\\"""'),
      a = e.endsWith('"') && !s,
      l = e.endsWith("\\"),
      u = a || l,
      c = !(t != null && t.minimize) && (!i || e.length > 70 || u || o || s);
    let f = "";
    const d = i && jv(e.charCodeAt(0));
    return (
      ((c && !d) || o) &&
        (f += `
`),
      (f += n),
      (c || u) &&
        (f += `
`),
      '"""' + f + '"""'
    );
  }
  const RR = 10,
    Gx = 2;
  function Kx(e) {
    return ru(e, []);
  }
  function ru(e, t) {
    switch (typeof e) {
      case "string":
        return JSON.stringify(e);
      case "function":
        return e.name ? `[function ${e.name}]` : "[function]";
      case "object":
        return jR(e, t);
      default:
        return String(e);
    }
  }
  function jR(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    const n = [...t, e];
    if (MR(e)) {
      const r = e.toJSON();
      if (r !== e) return typeof r == "string" ? r : ru(r, n);
    } else if (Array.isArray(e)) return LR(e, n);
    return IR(e, n);
  }
  function MR(e) {
    return typeof e.toJSON == "function";
  }
  function IR(e, t) {
    const n = Object.entries(e);
    return n.length === 0
      ? "{}"
      : t.length > Gx
      ? "[" + AR(e) + "]"
      : "{ " + n.map(([i, o]) => i + ": " + ru(o, t)).join(", ") + " }";
  }
  function LR(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > Gx) return "[Array]";
    const n = Math.min(RR, e.length),
      r = e.length - n,
      i = [];
    for (let o = 0; o < n; ++o) i.push(ru(e[o], t));
    return (
      r === 1
        ? i.push("... 1 more item")
        : r > 1 && i.push(`... ${r} more items`),
      "[" + i.join(", ") + "]"
    );
  }
  function AR(e) {
    const t = Object.prototype.toString
      .call(e)
      .replace(/^\[object /, "")
      .replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
      const n = e.constructor.name;
      if (typeof n == "string" && n !== "") return n;
    }
    return t;
  }
  class FR {
    constructor(t, n = "GraphQL request", r = { line: 1, column: 1 }) {
      typeof t == "string" ||
        Ia(!1, `Body must be a string. Received: ${Kx(t)}.`),
        (this.body = t),
        (this.name = n),
        (this.locationOffset = r),
        this.locationOffset.line > 0 ||
          Ia(!1, "line in locationOffset is 1-indexed and must be positive."),
        this.locationOffset.column > 0 ||
          Ia(!1, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
      return "Source";
    }
  }
  function zR(e) {
    return `"${e.replace($R, BR)}"`;
  }
  const $R = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function BR(e) {
    return VR[e.charCodeAt(0)];
  }
  const VR = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F",
    ],
    Cp = Object.freeze({});
  function En(e, t, n = Xx) {
    const r = new Map();
    for (const m of Object.values(Re)) r.set(m, HR(t, m));
    let i,
      o = Array.isArray(e),
      s = [e],
      a = -1,
      l = [],
      u = e,
      c,
      f;
    const d = [],
      p = [];
    do {
      a++;
      const m = a === s.length,
        h = m && l.length !== 0;
      if (m) {
        if (
          ((c = p.length === 0 ? void 0 : d[d.length - 1]),
          (u = f),
          (f = p.pop()),
          h)
        )
          if (o) {
            u = u.slice();
            let w = 0;
            for (const [E, _] of l) {
              const k = E - w;
              _ === null ? (u.splice(k, 1), w++) : (u[k] = _);
            }
          } else {
            u = Object.defineProperties(
              {},
              Object.getOwnPropertyDescriptors(u)
            );
            for (const [w, E] of l) u[w] = E;
          }
        (a = i.index),
          (s = i.keys),
          (l = i.edits),
          (o = i.inArray),
          (i = i.prev);
      } else if (f) {
        if (((c = o ? a : s[a]), (u = f[c]), u == null)) continue;
        d.push(c);
      }
      let v;
      if (!Array.isArray(u)) {
        var g, y;
        Pv(u) || Ia(!1, `Invalid AST Node: ${Kx(u)}.`);
        const w = m
          ? (g = r.get(u.kind)) === null || g === void 0
            ? void 0
            : g.leave
          : (y = r.get(u.kind)) === null || y === void 0
          ? void 0
          : y.enter;
        if (((v = w == null ? void 0 : w.call(t, u, c, f, d, p)), v === Cp))
          break;
        if (v === !1) {
          if (!m) {
            d.pop();
            continue;
          }
        } else if (v !== void 0 && (l.push([c, v]), !m))
          if (Pv(v)) u = v;
          else {
            d.pop();
            continue;
          }
      }
      if ((v === void 0 && h && l.push([c, u]), m)) d.pop();
      else {
        var S;
        (i = { inArray: o, index: a, keys: s, edits: l, prev: i }),
          (o = Array.isArray(u)),
          (s = o ? u : (S = n[u.kind]) !== null && S !== void 0 ? S : []),
          (a = -1),
          (l = []),
          f && p.push(f),
          (f = u);
      }
    } while (i !== void 0);
    return l.length !== 0 ? l[l.length - 1][1] : e;
  }
  function HR(e, t) {
    const n = e[t];
    return typeof n == "object"
      ? n
      : typeof n == "function"
      ? { enter: n, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
  }
  function UR(e) {
    return En(e, qR);
  }
  const QR = 80,
    qR = {
      Name: { leave: (e) => e.value },
      Variable: { leave: (e) => "$" + e.name },
      Document: {
        leave: (e) =>
          q(
            e.definitions,
            `

`
          ),
      },
      OperationDefinition: {
        leave(e) {
          const t = ee("(", q(e.variableDefinitions, ", "), ")"),
            n = q([e.operation, q([e.name, t]), q(e.directives, " ")], " ");
          return (n === "query" ? "" : n + " ") + e.selectionSet;
        },
      },
      VariableDefinition: {
        leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
          e + ": " + t + ee(" = ", n) + ee(" ", q(r, " ")),
      },
      SelectionSet: { leave: ({ selections: e }) => jt(e) },
      Field: {
        leave({
          alias: e,
          name: t,
          arguments: n,
          directives: r,
          selectionSet: i,
        }) {
          const o = ee("", e, ": ") + t;
          let s = o + ee("(", q(n, ", "), ")");
          return (
            s.length > QR &&
              (s =
                o +
                ee(
                  `(
`,
                  La(
                    q(
                      n,
                      `
`
                    )
                  ),
                  `
)`
                )),
            q([s, q(r, " "), i], " ")
          );
        },
      },
      Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
      FragmentSpread: {
        leave: ({ name: e, directives: t }) => "..." + e + ee(" ", q(t, " ")),
      },
      InlineFragment: {
        leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
          q(["...", ee("on ", e), q(t, " "), n], " "),
      },
      FragmentDefinition: {
        leave: ({
          name: e,
          typeCondition: t,
          variableDefinitions: n,
          directives: r,
          selectionSet: i,
        }) =>
          `fragment ${e}${ee("(", q(n, ", "), ")")} on ${t} ${ee(
            "",
            q(r, " "),
            " "
          )}` + i,
      },
      IntValue: { leave: ({ value: e }) => e },
      FloatValue: { leave: ({ value: e }) => e },
      StringValue: { leave: ({ value: e, block: t }) => (t ? PR(e) : zR(e)) },
      BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
      NullValue: { leave: () => "null" },
      EnumValue: { leave: ({ value: e }) => e },
      ListValue: { leave: ({ values: e }) => "[" + q(e, ", ") + "]" },
      ObjectValue: { leave: ({ fields: e }) => "{" + q(e, ", ") + "}" },
      ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
      Directive: {
        leave: ({ name: e, arguments: t }) =>
          "@" + e + ee("(", q(t, ", "), ")"),
      },
      NamedType: { leave: ({ name: e }) => e },
      ListType: { leave: ({ type: e }) => "[" + e + "]" },
      NonNullType: { leave: ({ type: e }) => e + "!" },
      SchemaDefinition: {
        leave: ({ description: e, directives: t, operationTypes: n }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["schema", q(t, " "), jt(n)], " "),
      },
      OperationTypeDefinition: {
        leave: ({ operation: e, type: t }) => e + ": " + t,
      },
      ScalarTypeDefinition: {
        leave: ({ description: e, name: t, directives: n }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["scalar", t, q(n, " ")], " "),
      },
      ObjectTypeDefinition: {
        leave: ({
          description: e,
          name: t,
          interfaces: n,
          directives: r,
          fields: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          q(["type", t, ee("implements ", q(n, " & ")), q(r, " "), jt(i)], " "),
      },
      FieldDefinition: {
        leave: ({
          description: e,
          name: t,
          arguments: n,
          type: r,
          directives: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          t +
          (Mv(n)
            ? ee(
                `(
`,
                La(
                  q(
                    n,
                    `
`
                  )
                ),
                `
)`
              )
            : ee("(", q(n, ", "), ")")) +
          ": " +
          r +
          ee(" ", q(i, " ")),
      },
      InputValueDefinition: {
        leave: ({
          description: e,
          name: t,
          type: n,
          defaultValue: r,
          directives: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) + q([t + ": " + n, ee("= ", r), q(i, " ")], " "),
      },
      InterfaceTypeDefinition: {
        leave: ({
          description: e,
          name: t,
          interfaces: n,
          directives: r,
          fields: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          q(
            ["interface", t, ee("implements ", q(n, " & ")), q(r, " "), jt(i)],
            " "
          ),
      },
      UnionTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, types: r }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["union", t, q(n, " "), ee("= ", q(r, " | "))], " "),
      },
      EnumTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, values: r }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["enum", t, q(n, " "), jt(r)], " "),
      },
      EnumValueDefinition: {
        leave: ({ description: e, name: t, directives: n }) =>
          ee(
            "",
            e,
            `
`
          ) + q([t, q(n, " ")], " "),
      },
      InputObjectTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, fields: r }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["input", t, q(n, " "), jt(r)], " "),
      },
      DirectiveDefinition: {
        leave: ({
          description: e,
          name: t,
          arguments: n,
          repeatable: r,
          locations: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          "directive @" +
          t +
          (Mv(n)
            ? ee(
                `(
`,
                La(
                  q(
                    n,
                    `
`
                  )
                ),
                `
)`
              )
            : ee("(", q(n, ", "), ")")) +
          (r ? " repeatable" : "") +
          " on " +
          q(i, " | "),
      },
      SchemaExtension: {
        leave: ({ directives: e, operationTypes: t }) =>
          q(["extend schema", q(e, " "), jt(t)], " "),
      },
      ScalarTypeExtension: {
        leave: ({ name: e, directives: t }) =>
          q(["extend scalar", e, q(t, " ")], " "),
      },
      ObjectTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
          q(
            [
              "extend type",
              e,
              ee("implements ", q(t, " & ")),
              q(n, " "),
              jt(r),
            ],
            " "
          ),
      },
      InterfaceTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
          q(
            [
              "extend interface",
              e,
              ee("implements ", q(t, " & ")),
              q(n, " "),
              jt(r),
            ],
            " "
          ),
      },
      UnionTypeExtension: {
        leave: ({ name: e, directives: t, types: n }) =>
          q(["extend union", e, q(t, " "), ee("= ", q(n, " | "))], " "),
      },
      EnumTypeExtension: {
        leave: ({ name: e, directives: t, values: n }) =>
          q(["extend enum", e, q(t, " "), jt(n)], " "),
      },
      InputObjectTypeExtension: {
        leave: ({ name: e, directives: t, fields: n }) =>
          q(["extend input", e, q(t, " "), jt(n)], " "),
      },
    };
  function q(e, t = "") {
    var n;
    return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null &&
      n !== void 0
      ? n
      : "";
  }
  function jt(e) {
    return ee(
      `{
`,
      La(
        q(
          e,
          `
`
        )
      ),
      `
}`
    );
  }
  function ee(e, t, n = "") {
    return t != null && t !== "" ? e + t + n : "";
  }
  function La(e) {
    return ee(
      "  ",
      e.replace(
        /\n/g,
        `
  `
      )
    );
  }
  function Mv(e) {
    var t;
    return (t =
      e == null
        ? void 0
        : e.some((n) =>
            n.includes(`
`)
          )) !== null && t !== void 0
      ? t
      : !1;
  }
  function Iv(e) {
    return (
      e.kind === Re.FIELD ||
      e.kind === Re.FRAGMENT_SPREAD ||
      e.kind === Re.INLINE_FRAGMENT
    );
  }
  function WR() {
    return Dv();
  }
  function YR() {
    __DEV__ ? H(typeof nc == "boolean", nc) : H(typeof nc == "boolean", 39);
  }
  WR();
  YR();
  function iu(e, t) {
    var n = e.directives;
    return !n || !n.length
      ? !0
      : KR(n).every(function (r) {
          var i = r.directive,
            o = r.ifArgument,
            s = !1;
          return (
            o.value.kind === "Variable"
              ? ((s = t && t[o.value.name.value]),
                __DEV__
                  ? H(
                      s !== void 0,
                      "Invalid variable referenced in @".concat(
                        i.name.value,
                        " directive."
                      )
                    )
                  : H(s !== void 0, 40))
              : (s = o.value.value),
            i.name.value === "skip" ? !s : s
          );
        });
  }
  function Np(e, t, n) {
    var r = new Set(e),
      i = r.size;
    return (
      En(t, {
        Directive: function (o) {
          if (r.delete(o.name.value) && (!n || !r.size)) return Cp;
        },
      }),
      n ? !r.size : r.size < i
    );
  }
  function XR(e) {
    return e && Np(["client", "export"], e, !0);
  }
  function GR(e) {
    var t = e.name.value;
    return t === "skip" || t === "include";
  }
  function KR(e) {
    var t = [];
    return (
      e &&
        e.length &&
        e.forEach(function (n) {
          if (GR(n)) {
            var r = n.arguments,
              i = n.name.value;
            __DEV__
              ? H(
                  r && r.length === 1,
                  "Incorrect number of arguments for the @".concat(
                    i,
                    " directive."
                  )
                )
              : H(r && r.length === 1, 41);
            var o = r[0];
            __DEV__
              ? H(
                  o.name && o.name.value === "if",
                  "Invalid argument for the @".concat(i, " directive.")
                )
              : H(o.name && o.name.value === "if", 42);
            var s = o.value;
            __DEV__
              ? H(
                  s && (s.kind === "Variable" || s.kind === "BooleanValue"),
                  "Argument for the @".concat(
                    i,
                    " directive must be a variable or a boolean value."
                  )
                )
              : H(
                  s && (s.kind === "Variable" || s.kind === "BooleanValue"),
                  43
                ),
              t.push({ directive: n, ifArgument: o });
          }
        }),
      t
    );
  }
  function ZR(e, t) {
    var n = t,
      r = [];
    e.definitions.forEach(function (o) {
      if (o.kind === "OperationDefinition")
        throw __DEV__
          ? new ie(
              "Found a "
                .concat(o.operation, " operation")
                .concat(
                  o.name ? " named '".concat(o.name.value, "'") : "",
                  ". "
                ) +
                "No operations are allowed when using a fragment as a query. Only fragments are allowed."
            )
          : new ie(44);
      o.kind === "FragmentDefinition" && r.push(o);
    }),
      typeof n > "u" &&
        (__DEV__
          ? H(
              r.length === 1,
              "Found ".concat(
                r.length,
                " fragments. `fragmentName` must be provided when there is not exactly 1 fragment."
              )
            )
          : H(r.length === 1, 45),
        (n = r[0].name.value));
    var i = A(A({}, e), {
      definitions: Dr(
        [
          {
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: n } },
              ],
            },
          },
        ],
        e.definitions,
        !0
      ),
    });
    return i;
  }
  function Op(e) {
    e === void 0 && (e = []);
    var t = {};
    return (
      e.forEach(function (n) {
        t[n.name.value] = n;
      }),
      t
    );
  }
  function Tp(e, t) {
    switch (e.kind) {
      case "InlineFragment":
        return e;
      case "FragmentSpread": {
        var n = e.name.value;
        if (typeof t == "function") return t(n);
        var r = t && t[n];
        return (
          __DEV__ ? H(r, "No fragment named ".concat(n)) : H(r, 46), r || null
        );
      }
      default:
        return null;
    }
  }
  function ve(e) {
    return e !== null && typeof e == "object";
  }
  function Pi(e) {
    return { __ref: String(e) };
  }
  function oe(e) {
    return !!(e && typeof e == "object" && typeof e.__ref == "string");
  }
  function JR(e) {
    return ve(e) && e.kind === "Document" && Array.isArray(e.definitions);
  }
  function ej(e) {
    return e.kind === "StringValue";
  }
  function tj(e) {
    return e.kind === "BooleanValue";
  }
  function nj(e) {
    return e.kind === "IntValue";
  }
  function rj(e) {
    return e.kind === "FloatValue";
  }
  function ij(e) {
    return e.kind === "Variable";
  }
  function oj(e) {
    return e.kind === "ObjectValue";
  }
  function sj(e) {
    return e.kind === "ListValue";
  }
  function aj(e) {
    return e.kind === "EnumValue";
  }
  function lj(e) {
    return e.kind === "NullValue";
  }
  function Ji(e, t, n, r) {
    if (nj(n) || rj(n)) e[t.value] = Number(n.value);
    else if (tj(n) || ej(n)) e[t.value] = n.value;
    else if (oj(n)) {
      var i = {};
      n.fields.map(function (s) {
        return Ji(i, s.name, s.value, r);
      }),
        (e[t.value] = i);
    } else if (ij(n)) {
      var o = (r || {})[n.name.value];
      e[t.value] = o;
    } else if (sj(n))
      e[t.value] = n.values.map(function (s) {
        var a = {};
        return Ji(a, t, s, r), a[t.value];
      });
    else if (aj(n)) e[t.value] = n.value;
    else if (lj(n)) e[t.value] = null;
    else
      throw __DEV__
        ? new ie(
            'The inline argument "'
              .concat(t.value, '" of kind "')
              .concat(n.kind, '"') +
              "is not supported. Use variables instead of inline arguments to overcome this limitation."
          )
        : new ie(55);
  }
  function uj(e, t) {
    var n = null;
    e.directives &&
      ((n = {}),
      e.directives.forEach(function (i) {
        (n[i.name.value] = {}),
          i.arguments &&
            i.arguments.forEach(function (o) {
              var s = o.name,
                a = o.value;
              return Ji(n[i.name.value], s, a, t);
            });
      }));
    var r = null;
    return (
      e.arguments &&
        e.arguments.length &&
        ((r = {}),
        e.arguments.forEach(function (i) {
          var o = i.name,
            s = i.value;
          return Ji(r, o, s, t);
        })),
      Dp(e.name.value, r, n)
    );
  }
  var cj = ["connection", "include", "skip", "client", "rest", "export"],
    Dp = Object.assign(
      function (e, t, n) {
        if (t && n && n.connection && n.connection.key)
          if (n.connection.filter && n.connection.filter.length > 0) {
            var r = n.connection.filter ? n.connection.filter : [];
            r.sort();
            var i = {};
            return (
              r.forEach(function (a) {
                i[a] = t[a];
              }),
              "".concat(n.connection.key, "(").concat(ko(i), ")")
            );
          } else return n.connection.key;
        var o = e;
        if (t) {
          var s = ko(t);
          o += "(".concat(s, ")");
        }
        return (
          n &&
            Object.keys(n).forEach(function (a) {
              cj.indexOf(a) === -1 &&
                (n[a] && Object.keys(n[a]).length
                  ? (o += "@".concat(a, "(").concat(ko(n[a]), ")"))
                  : (o += "@".concat(a)));
            }),
          o
        );
      },
      {
        setStringify: function (e) {
          var t = ko;
          return (ko = e), t;
        },
      }
    ),
    ko = function (t) {
      return JSON.stringify(t, fj);
    };
  function fj(e, t) {
    return (
      ve(t) &&
        !Array.isArray(t) &&
        (t = Object.keys(t)
          .sort()
          .reduce(function (n, r) {
            return (n[r] = t[r]), n;
          }, {})),
      t
    );
  }
  function ou(e, t) {
    if (e.arguments && e.arguments.length) {
      var n = {};
      return (
        e.arguments.forEach(function (r) {
          var i = r.name,
            o = r.value;
          return Ji(n, i, o, t);
        }),
        n
      );
    }
    return null;
  }
  function $r(e) {
    return e.alias ? e.alias.value : e.name.value;
  }
  function Ff(e, t, n) {
    for (var r, i = 0, o = t.selections; i < o.length; i++) {
      var s = o[i];
      if (Br(s)) {
        if (s.name.value === "__typename") return e[$r(s)];
      } else r ? r.push(s) : (r = [s]);
    }
    if (typeof e.__typename == "string") return e.__typename;
    if (r)
      for (var a = 0, l = r; a < l.length; a++) {
        var s = l[a],
          u = Ff(e, Tp(s, n).selectionSet, n);
        if (typeof u == "string") return u;
      }
  }
  function Br(e) {
    return e.kind === "Field";
  }
  function dj(e) {
    return e.kind === "InlineFragment";
  }
  function su(e) {
    __DEV__
      ? H(
          e && e.kind === "Document",
          'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
        )
      : H(e && e.kind === "Document", 47);
    var t = e.definitions
      .filter(function (n) {
        return n.kind !== "FragmentDefinition";
      })
      .map(function (n) {
        if (n.kind !== "OperationDefinition")
          throw __DEV__
            ? new ie(
                'Schema type definitions not allowed in queries. Found: "'.concat(
                  n.kind,
                  '"'
                )
              )
            : new ie(48);
        return n;
      });
    return (
      __DEV__
        ? H(
            t.length <= 1,
            "Ambiguous GraphQL document: contains ".concat(
              t.length,
              " operations"
            )
          )
        : H(t.length <= 1, 49),
      e
    );
  }
  function Fs(e) {
    return (
      su(e),
      e.definitions.filter(function (t) {
        return t.kind === "OperationDefinition";
      })[0]
    );
  }
  function zf(e) {
    return (
      e.definitions
        .filter(function (t) {
          return t.kind === "OperationDefinition" && !!t.name;
        })
        .map(function (t) {
          return t.name.value;
        })[0] || null
    );
  }
  function Pp(e) {
    return e.definitions.filter(function (t) {
      return t.kind === "FragmentDefinition";
    });
  }
  function Zx(e) {
    var t = Fs(e);
    return (
      __DEV__
        ? H(t && t.operation === "query", "Must contain a query definition.")
        : H(t && t.operation === "query", 50),
      t
    );
  }
  function pj(e) {
    __DEV__
      ? H(
          e.kind === "Document",
          'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
        )
      : H(e.kind === "Document", 51),
      __DEV__
        ? H(
            e.definitions.length <= 1,
            "Fragment must have exactly one definition."
          )
        : H(e.definitions.length <= 1, 52);
    var t = e.definitions[0];
    return (
      __DEV__
        ? H(t.kind === "FragmentDefinition", "Must be a fragment definition.")
        : H(t.kind === "FragmentDefinition", 53),
      t
    );
  }
  function au(e) {
    su(e);
    for (var t, n = 0, r = e.definitions; n < r.length; n++) {
      var i = r[n];
      if (i.kind === "OperationDefinition") {
        var o = i.operation;
        if (o === "query" || o === "mutation" || o === "subscription") return i;
      }
      i.kind === "FragmentDefinition" && !t && (t = i);
    }
    if (t) return t;
    throw __DEV__
      ? new ie(
          "Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."
        )
      : new ie(54);
  }
  function Rp(e) {
    var t = Object.create(null),
      n = e && e.variableDefinitions;
    return (
      n &&
        n.length &&
        n.forEach(function (r) {
          r.defaultValue && Ji(t, r.variable.name, r.defaultValue);
        }),
      t
    );
  }
  var Ee = Array.isArray;
  function on(e) {
    return Array.isArray(e) && e.length > 0;
  }
  var Lv = { kind: Re.FIELD, name: { kind: Re.NAME, value: "__typename" } };
  function Jx(e, t) {
    return (
      !e ||
      e.selectionSet.selections.every(function (n) {
        return n.kind === Re.FRAGMENT_SPREAD && Jx(t[n.name.value], t);
      })
    );
  }
  function hj(e) {
    return Jx(Fs(e) || pj(e), Op(Pp(e))) ? null : e;
  }
  function mj(e) {
    var t = new Set(),
      n = [];
    return (
      e.forEach(function (r) {
        r.name ? t.add(r.name) : r.test && n.push(r.test);
      }),
      function (r) {
        return (
          t.has(r.name.value) ||
          n.some(function (i) {
            return i(r);
          })
        );
      }
    );
  }
  function Av(e) {
    var t = new Map();
    return function (r) {
      r === void 0 && (r = e);
      var i = t.get(r);
      return (
        i ||
          t.set(r, (i = { variables: new Set(), fragmentSpreads: new Set() })),
        i
      );
    };
  }
  function e1(e, t) {
    for (
      var n = Av(""),
        r = Av(""),
        i = function (h) {
          for (var v = 0, w = void 0; v < h.length && (w = h[v]); ++v)
            if (!Ee(w)) {
              if (w.kind === Re.OPERATION_DEFINITION)
                return n(w.name && w.name.value);
              if (w.kind === Re.FRAGMENT_DEFINITION) return r(w.name.value);
            }
          return (
            __DEV__ && H.error("Could not find operation or fragment"), null
          );
        },
        o = 0,
        s = t.definitions.length - 1;
      s >= 0;
      --s
    )
      t.definitions[s].kind === Re.OPERATION_DEFINITION && ++o;
    var a = mj(e),
      l = e.some(function (h) {
        return h.remove;
      }),
      u = function (h) {
        return l && h && h.some(a);
      },
      c = new Map(),
      f = !1,
      d = {
        enter: function (h) {
          if (u(h.directives)) return (f = !0), null;
        },
      },
      p = En(t, {
        Field: d,
        InlineFragment: d,
        VariableDefinition: {
          enter: function () {
            return !1;
          },
        },
        Variable: {
          enter: function (h, v, w, E, _) {
            var k = i(_);
            k && k.variables.add(h.name.value);
          },
        },
        FragmentSpread: {
          enter: function (h, v, w, E, _) {
            if (u(h.directives)) return (f = !0), null;
            var k = i(_);
            k && k.fragmentSpreads.add(h.name.value);
          },
        },
        FragmentDefinition: {
          enter: function (h, v, w, E) {
            c.set(JSON.stringify(E), h);
          },
          leave: function (h, v, w, E) {
            var _ = c.get(JSON.stringify(E));
            if (h === _) return h;
            if (
              o > 0 &&
              h.selectionSet.selections.every(function (k) {
                return k.kind === Re.FIELD && k.name.value === "__typename";
              })
            )
              return (r(h.name.value).removed = !0), (f = !0), null;
          },
        },
        Directive: {
          leave: function (h) {
            if (a(h)) return (f = !0), null;
          },
        },
      });
    if (!f) return t;
    var g = function (h) {
        return (
          h.transitiveVars ||
            ((h.transitiveVars = new Set(h.variables)),
            h.removed ||
              h.fragmentSpreads.forEach(function (v) {
                g(r(v)).transitiveVars.forEach(function (w) {
                  h.transitiveVars.add(w);
                });
              })),
          h
        );
      },
      y = new Set();
    p.definitions.forEach(function (h) {
      h.kind === Re.OPERATION_DEFINITION
        ? g(n(h.name && h.name.value)).fragmentSpreads.forEach(function (v) {
            y.add(v);
          })
        : h.kind === Re.FRAGMENT_DEFINITION &&
          o === 0 &&
          !r(h.name.value).removed &&
          y.add(h.name.value);
    }),
      y.forEach(function (h) {
        g(r(h)).fragmentSpreads.forEach(function (v) {
          y.add(v);
        });
      });
    var S = function (h) {
        return !!(!y.has(h) || r(h).removed);
      },
      m = {
        enter: function (h) {
          if (S(h.name.value)) return null;
        },
      };
    return hj(
      En(p, {
        FragmentSpread: m,
        FragmentDefinition: m,
        OperationDefinition: {
          leave: function (h) {
            if (h.variableDefinitions) {
              var v = g(n(h.name && h.name.value)).transitiveVars;
              if (v.size < h.variableDefinitions.length)
                return A(A({}, h), {
                  variableDefinitions: h.variableDefinitions.filter(function (
                    w
                  ) {
                    return v.has(w.variable.name.value);
                  }),
                });
            }
          },
        },
      })
    );
  }
  var jp = Object.assign(
      function (e) {
        return En(e, {
          SelectionSet: {
            enter: function (t, n, r) {
              if (!(r && r.kind === Re.OPERATION_DEFINITION)) {
                var i = t.selections;
                if (i) {
                  var o = i.some(function (a) {
                    return (
                      Br(a) &&
                      (a.name.value === "__typename" ||
                        a.name.value.lastIndexOf("__", 0) === 0)
                    );
                  });
                  if (!o) {
                    var s = r;
                    if (
                      !(
                        Br(s) &&
                        s.directives &&
                        s.directives.some(function (a) {
                          return a.name.value === "export";
                        })
                      )
                    )
                      return A(A({}, t), {
                        selections: Dr(Dr([], i, !0), [Lv], !1),
                      });
                  }
                }
              }
            },
          },
        });
      },
      {
        added: function (e) {
          return e === Lv;
        },
      }
    ),
    vj = {
      test: function (e) {
        var t = e.name.value === "connection";
        return (
          t &&
            (!e.arguments ||
              !e.arguments.some(function (n) {
                return n.name.value === "key";
              })) &&
            __DEV__ &&
            H.warn(
              "Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."
            ),
          t
        );
      },
    };
  function yj(e) {
    return e1([vj], su(e));
  }
  function gj(e) {
    var t = au(e),
      n = t.operation;
    if (n === "query") return e;
    var r = En(e, {
      OperationDefinition: {
        enter: function (i) {
          return A(A({}, i), { operation: "query" });
        },
      },
    });
    return r;
  }
  function wj(e) {
    su(e);
    var t = e1(
      [
        {
          test: function (n) {
            return n.name.value === "client";
          },
          remove: !0,
        },
      ],
      e
    );
    return t;
  }
  var xj = Object.prototype.hasOwnProperty;
  function Fv() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Mp(e);
  }
  function Mp(e) {
    var t = e[0] || {},
      n = e.length;
    if (n > 1) for (var r = new ir(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
    return t;
  }
  var Sj = function (e, t, n) {
      return this.merge(e[n], t[n]);
    },
    ir = (function () {
      function e(t) {
        t === void 0 && (t = Sj),
          (this.reconciler = t),
          (this.isObject = ve),
          (this.pastCopies = new Set());
      }
      return (
        (e.prototype.merge = function (t, n) {
          for (var r = this, i = [], o = 2; o < arguments.length; o++)
            i[o - 2] = arguments[o];
          return ve(n) && ve(t)
            ? (Object.keys(n).forEach(function (s) {
                if (xj.call(t, s)) {
                  var a = t[s];
                  if (n[s] !== a) {
                    var l = r.reconciler.apply(r, Dr([t, n, s], i, !1));
                    l !== a && ((t = r.shallowCopyForMerge(t)), (t[s] = l));
                  }
                } else (t = r.shallowCopyForMerge(t)), (t[s] = n[s]);
              }),
              t)
            : n;
        }),
        (e.prototype.shallowCopyForMerge = function (t) {
          return (
            ve(t) &&
              (this.pastCopies.has(t) ||
                (Array.isArray(t)
                  ? (t = t.slice(0))
                  : (t = A({ __proto__: Object.getPrototypeOf(t) }, t)),
                this.pastCopies.add(t))),
            t
          );
        }),
        e
      );
    })();
  function bj(e, t) {
    var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = Ej(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ej(e, t) {
    if (e) {
      if (typeof e == "string") return zv(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return zv(e, t);
    }
  }
  function zv(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function $v(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Ip(e, t, n) {
    return (
      t && $v(e.prototype, t),
      n && $v(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var Lp = function () {
      return typeof Symbol == "function";
    },
    Ap = function (e) {
      return Lp() && !!Symbol[e];
    },
    Fp = function (e) {
      return Ap(e) ? Symbol[e] : "@@" + e;
    };
  Lp() && !Ap("observable") && (Symbol.observable = Symbol("observable"));
  var _j = Fp("iterator"),
    $f = Fp("observable"),
    t1 = Fp("species");
  function bl(e, t) {
    var n = e[t];
    if (n != null) {
      if (typeof n != "function") throw new TypeError(n + " is not a function");
      return n;
    }
  }
  function Co(e) {
    var t = e.constructor;
    return (
      t !== void 0 && ((t = t[t1]), t === null && (t = void 0)),
      t !== void 0 ? t : de
    );
  }
  function kj(e) {
    return e instanceof de;
  }
  function eo(e) {
    eo.log
      ? eo.log(e)
      : setTimeout(function () {
          throw e;
        });
  }
  function Aa(e) {
    Promise.resolve().then(function () {
      try {
        e();
      } catch (t) {
        eo(t);
      }
    });
  }
  function n1(e) {
    var t = e._cleanup;
    if (t !== void 0 && ((e._cleanup = void 0), !!t))
      try {
        if (typeof t == "function") t();
        else {
          var n = bl(t, "unsubscribe");
          n && n.call(t);
        }
      } catch (r) {
        eo(r);
      }
  }
  function Bf(e) {
    (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
  }
  function Cj(e) {
    var t = e._queue;
    if (t) {
      (e._queue = void 0), (e._state = "ready");
      for (
        var n = 0;
        n < t.length && (r1(e, t[n].type, t[n].value), e._state !== "closed");
        ++n
      );
    }
  }
  function r1(e, t, n) {
    e._state = "running";
    var r = e._observer;
    try {
      var i = bl(r, t);
      switch (t) {
        case "next":
          i && i.call(r, n);
          break;
        case "error":
          if ((Bf(e), i)) i.call(r, n);
          else throw n;
          break;
        case "complete":
          Bf(e), i && i.call(r);
          break;
      }
    } catch (o) {
      eo(o);
    }
    e._state === "closed"
      ? n1(e)
      : e._state === "running" && (e._state = "ready");
  }
  function rc(e, t, n) {
    if (e._state !== "closed") {
      if (e._state === "buffering") {
        e._queue.push({ type: t, value: n });
        return;
      }
      if (e._state !== "ready") {
        (e._state = "buffering"),
          (e._queue = [{ type: t, value: n }]),
          Aa(function () {
            return Cj(e);
          });
        return;
      }
      r1(e, t, n);
    }
  }
  var Nj = (function () {
      function e(n, r) {
        (this._cleanup = void 0),
          (this._observer = n),
          (this._queue = void 0),
          (this._state = "initializing");
        var i = new Oj(this);
        try {
          this._cleanup = r.call(void 0, i);
        } catch (o) {
          i.error(o);
        }
        this._state === "initializing" && (this._state = "ready");
      }
      var t = e.prototype;
      return (
        (t.unsubscribe = function () {
          this._state !== "closed" && (Bf(this), n1(this));
        }),
        Ip(e, [
          {
            key: "closed",
            get: function () {
              return this._state === "closed";
            },
          },
        ]),
        e
      );
    })(),
    Oj = (function () {
      function e(n) {
        this._subscription = n;
      }
      var t = e.prototype;
      return (
        (t.next = function (r) {
          rc(this._subscription, "next", r);
        }),
        (t.error = function (r) {
          rc(this._subscription, "error", r);
        }),
        (t.complete = function () {
          rc(this._subscription, "complete");
        }),
        Ip(e, [
          {
            key: "closed",
            get: function () {
              return this._subscription._state === "closed";
            },
          },
        ]),
        e
      );
    })(),
    de = (function () {
      function e(n) {
        if (!(this instanceof e))
          throw new TypeError("Observable cannot be called as a function");
        if (typeof n != "function")
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = n;
      }
      var t = e.prototype;
      return (
        (t.subscribe = function (r) {
          return (
            (typeof r != "object" || r === null) &&
              (r = { next: r, error: arguments[1], complete: arguments[2] }),
            new Nj(r, this._subscriber)
          );
        }),
        (t.forEach = function (r) {
          var i = this;
          return new Promise(function (o, s) {
            if (typeof r != "function") {
              s(new TypeError(r + " is not a function"));
              return;
            }
            function a() {
              l.unsubscribe(), o();
            }
            var l = i.subscribe({
              next: function (u) {
                try {
                  r(u, a);
                } catch (c) {
                  s(c), l.unsubscribe();
                }
              },
              error: s,
              complete: o,
            });
          });
        }),
        (t.map = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = Co(this);
          return new o(function (s) {
            return i.subscribe({
              next: function (a) {
                try {
                  a = r(a);
                } catch (l) {
                  return s.error(l);
                }
                s.next(a);
              },
              error: function (a) {
                s.error(a);
              },
              complete: function () {
                s.complete();
              },
            });
          });
        }),
        (t.filter = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = Co(this);
          return new o(function (s) {
            return i.subscribe({
              next: function (a) {
                try {
                  if (!r(a)) return;
                } catch (l) {
                  return s.error(l);
                }
                s.next(a);
              },
              error: function (a) {
                s.error(a);
              },
              complete: function () {
                s.complete();
              },
            });
          });
        }),
        (t.reduce = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = Co(this),
            s = arguments.length > 1,
            a = !1,
            l = arguments[1],
            u = l;
          return new o(function (c) {
            return i.subscribe({
              next: function (f) {
                var d = !a;
                if (((a = !0), !d || s))
                  try {
                    u = r(u, f);
                  } catch (p) {
                    return c.error(p);
                  }
                else u = f;
              },
              error: function (f) {
                c.error(f);
              },
              complete: function () {
                if (!a && !s)
                  return c.error(
                    new TypeError("Cannot reduce an empty sequence")
                  );
                c.next(u), c.complete();
              },
            });
          });
        }),
        (t.concat = function () {
          for (
            var r = this, i = arguments.length, o = new Array(i), s = 0;
            s < i;
            s++
          )
            o[s] = arguments[s];
          var a = Co(this);
          return new a(function (l) {
            var u,
              c = 0;
            function f(d) {
              u = d.subscribe({
                next: function (p) {
                  l.next(p);
                },
                error: function (p) {
                  l.error(p);
                },
                complete: function () {
                  c === o.length
                    ? ((u = void 0), l.complete())
                    : f(a.from(o[c++]));
                },
              });
            }
            return (
              f(r),
              function () {
                u && (u.unsubscribe(), (u = void 0));
              }
            );
          });
        }),
        (t.flatMap = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = Co(this);
          return new o(function (s) {
            var a = [],
              l = i.subscribe({
                next: function (c) {
                  if (r)
                    try {
                      c = r(c);
                    } catch (d) {
                      return s.error(d);
                    }
                  var f = o.from(c).subscribe({
                    next: function (d) {
                      s.next(d);
                    },
                    error: function (d) {
                      s.error(d);
                    },
                    complete: function () {
                      var d = a.indexOf(f);
                      d >= 0 && a.splice(d, 1), u();
                    },
                  });
                  a.push(f);
                },
                error: function (c) {
                  s.error(c);
                },
                complete: function () {
                  u();
                },
              });
            function u() {
              l.closed && a.length === 0 && s.complete();
            }
            return function () {
              a.forEach(function (c) {
                return c.unsubscribe();
              }),
                l.unsubscribe();
            };
          });
        }),
        (t[$f] = function () {
          return this;
        }),
        (e.from = function (r) {
          var i = typeof this == "function" ? this : e;
          if (r == null) throw new TypeError(r + " is not an object");
          var o = bl(r, $f);
          if (o) {
            var s = o.call(r);
            if (Object(s) !== s) throw new TypeError(s + " is not an object");
            return kj(s) && s.constructor === i
              ? s
              : new i(function (a) {
                  return s.subscribe(a);
                });
          }
          if (Ap("iterator") && ((o = bl(r, _j)), o))
            return new i(function (a) {
              Aa(function () {
                if (!a.closed) {
                  for (var l = bj(o.call(r)), u; !(u = l()).done; ) {
                    var c = u.value;
                    if ((a.next(c), a.closed)) return;
                  }
                  a.complete();
                }
              });
            });
          if (Array.isArray(r))
            return new i(function (a) {
              Aa(function () {
                if (!a.closed) {
                  for (var l = 0; l < r.length; ++l)
                    if ((a.next(r[l]), a.closed)) return;
                  a.complete();
                }
              });
            });
          throw new TypeError(r + " is not observable");
        }),
        (e.of = function () {
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          var s = typeof this == "function" ? this : e;
          return new s(function (a) {
            Aa(function () {
              if (!a.closed) {
                for (var l = 0; l < i.length; ++l)
                  if ((a.next(i[l]), a.closed)) return;
                a.complete();
              }
            });
          });
        }),
        Ip(e, null, [
          {
            key: t1,
            get: function () {
              return this;
            },
          },
        ]),
        e
      );
    })();
  Lp() &&
    Object.defineProperty(de, Symbol("extensions"), {
      value: { symbol: $f, hostReportError: eo },
      configurable: !0,
    });
  function Tj(e) {
    var t,
      n = e.Symbol;
    if (typeof n == "function")
      if (n.observable) t = n.observable;
      else {
        typeof n.for == "function"
          ? (t = n.for("https://github.com/benlesh/symbol-observable"))
          : (t = n("https://github.com/benlesh/symbol-observable"));
        try {
          n.observable = t;
        } catch {}
      }
    else t = "@@observable";
    return t;
  }
  var ti;
  typeof self < "u"
    ? (ti = self)
    : typeof window < "u"
    ? (ti = window)
    : typeof global < "u"
    ? (ti = global)
    : typeof od < "u"
    ? (ti = od)
    : (ti = Function("return this")());
  Tj(ti);
  var Bv = de.prototype,
    Vv = "@@observable";
  Bv[Vv] ||
    (Bv[Vv] = function () {
      return this;
    });
  var Dj = Object.prototype.toString;
  function i1(e) {
    return Vf(e);
  }
  function Vf(e, t) {
    switch (Dj.call(e)) {
      case "[object Array]": {
        if (((t = t || new Map()), t.has(e))) return t.get(e);
        var n = e.slice(0);
        return (
          t.set(e, n),
          n.forEach(function (i, o) {
            n[o] = Vf(i, t);
          }),
          n
        );
      }
      case "[object Object]": {
        if (((t = t || new Map()), t.has(e))) return t.get(e);
        var r = Object.create(Object.getPrototypeOf(e));
        return (
          t.set(e, r),
          Object.keys(e).forEach(function (i) {
            r[i] = Vf(e[i], t);
          }),
          r
        );
      }
      default:
        return e;
    }
  }
  function Pj(e) {
    var t = new Set([e]);
    return (
      t.forEach(function (n) {
        ve(n) &&
          Rj(n) === n &&
          Object.getOwnPropertyNames(n).forEach(function (r) {
            ve(n[r]) && t.add(n[r]);
          });
      }),
      e
    );
  }
  function Rj(e) {
    if (__DEV__ && !Object.isFrozen(e))
      try {
        Object.freeze(e);
      } catch (t) {
        if (t instanceof TypeError) return null;
        throw t;
      }
    return e;
  }
  function Hf(e) {
    return __DEV__ && Pj(e), e;
  }
  function Xo(e, t, n) {
    var r = [];
    e.forEach(function (i) {
      return i[t] && r.push(i);
    }),
      r.forEach(function (i) {
        return i[t](n);
      });
  }
  function ic(e, t, n) {
    return new de(function (r) {
      var i = r.next,
        o = r.error,
        s = r.complete,
        a = 0,
        l = !1,
        u = {
          then: function (p) {
            return new Promise(function (g) {
              return g(p());
            });
          },
        };
      function c(p, g) {
        return p
          ? function (y) {
              ++a;
              var S = function () {
                return p(y);
              };
              u = u
                .then(S, S)
                .then(
                  function (m) {
                    --a, i && i.call(r, m), l && f.complete();
                  },
                  function (m) {
                    throw (--a, m);
                  }
                )
                .catch(function (m) {
                  o && o.call(r, m);
                });
            }
          : function (y) {
              return g && g.call(r, y);
            };
      }
      var f = {
          next: c(t, i),
          error: c(n, o),
          complete: function () {
            (l = !0), a || (s && s.call(r));
          },
        },
        d = e.subscribe(f);
      return function () {
        return d.unsubscribe();
      };
    });
  }
  var Qr =
      typeof WeakMap == "function" &&
      bt(function () {
        return navigator.product;
      }) !== "ReactNative",
    jj = typeof WeakSet == "function",
    zp = typeof Symbol == "function" && typeof Symbol.for == "function",
    lu = zp && Symbol.asyncIterator;
  bt(function () {
    return window.document.createElement;
  });
  bt(function () {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  });
  function o1(e) {
    function t(n) {
      Object.defineProperty(e, n, { value: de });
    }
    return zp && Symbol.species && t(Symbol.species), t("@@species"), e;
  }
  function Hv(e) {
    return e && typeof e.then == "function";
  }
  var ni = (function (e) {
    Ut(t, e);
    function t(n) {
      var r =
        e.call(this, function (i) {
          return (
            r.addObserver(i),
            function () {
              return r.removeObserver(i);
            }
          );
        }) || this;
      return (
        (r.observers = new Set()),
        (r.promise = new Promise(function (i, o) {
          (r.resolve = i), (r.reject = o);
        })),
        (r.handlers = {
          next: function (i) {
            r.sub !== null &&
              ((r.latest = ["next", i]),
              r.notify("next", i),
              Xo(r.observers, "next", i));
          },
          error: function (i) {
            var o = r.sub;
            o !== null &&
              (o &&
                setTimeout(function () {
                  return o.unsubscribe();
                }),
              (r.sub = null),
              (r.latest = ["error", i]),
              r.reject(i),
              r.notify("error", i),
              Xo(r.observers, "error", i));
          },
          complete: function () {
            var i = r,
              o = i.sub,
              s = i.sources,
              a = s === void 0 ? [] : s;
            if (o !== null) {
              var l = a.shift();
              l
                ? Hv(l)
                  ? l.then(function (u) {
                      return (r.sub = u.subscribe(r.handlers));
                    })
                  : (r.sub = l.subscribe(r.handlers))
                : (o &&
                    setTimeout(function () {
                      return o.unsubscribe();
                    }),
                  (r.sub = null),
                  r.latest && r.latest[0] === "next"
                    ? r.resolve(r.latest[1])
                    : r.resolve(),
                  r.notify("complete"),
                  Xo(r.observers, "complete"));
            }
          },
        }),
        (r.nextResultListeners = new Set()),
        (r.cancel = function (i) {
          r.reject(i), (r.sources = []), r.handlers.complete();
        }),
        r.promise.catch(function (i) {}),
        typeof n == "function" && (n = [new de(n)]),
        Hv(n)
          ? n.then(function (i) {
              return r.start(i);
            }, r.handlers.error)
          : r.start(n),
        r
      );
    }
    return (
      (t.prototype.start = function (n) {
        this.sub === void 0 &&
          ((this.sources = Array.from(n)), this.handlers.complete());
      }),
      (t.prototype.deliverLastMessage = function (n) {
        if (this.latest) {
          var r = this.latest[0],
            i = n[r];
          i && i.call(n, this.latest[1]),
            this.sub === null && r === "next" && n.complete && n.complete();
        }
      }),
      (t.prototype.addObserver = function (n) {
        this.observers.has(n) ||
          (this.deliverLastMessage(n), this.observers.add(n));
      }),
      (t.prototype.removeObserver = function (n) {
        this.observers.delete(n) &&
          this.observers.size < 1 &&
          this.handlers.complete();
      }),
      (t.prototype.notify = function (n, r) {
        var i = this.nextResultListeners;
        i.size &&
          ((this.nextResultListeners = new Set()),
          i.forEach(function (o) {
            return o(n, r);
          }));
      }),
      (t.prototype.beforeNext = function (n) {
        var r = !1;
        this.nextResultListeners.add(function (i, o) {
          r || ((r = !0), n(i, o));
        });
      }),
      t
    );
  })(de);
  o1(ni);
  function Ri(e) {
    return "incremental" in e;
  }
  function Mj(e) {
    return "hasNext" in e && "data" in e;
  }
  function Ij(e) {
    return Ri(e) || Mj(e);
  }
  function Lj(e) {
    return ve(e) && "payload" in e;
  }
  function s1(e, t) {
    var n = e,
      r = new ir();
    return (
      Ri(t) &&
        on(t.incremental) &&
        t.incremental.forEach(function (i) {
          for (var o = i.data, s = i.path, a = s.length - 1; a >= 0; --a) {
            var l = s[a],
              u = !isNaN(+l),
              c = u ? [] : {};
            (c[l] = o), (o = c);
          }
          n = r.merge(n, o);
        }),
      n
    );
  }
  function Fa(e) {
    var t = Uf(e);
    return on(t);
  }
  function Uf(e) {
    var t = on(e.errors) ? e.errors.slice(0) : [];
    return (
      Ri(e) &&
        on(e.incremental) &&
        e.incremental.forEach(function (n) {
          n.errors && t.push.apply(t, n.errors);
        }),
      t
    );
  }
  function uu() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Object.create(null);
    return (
      e.forEach(function (r) {
        r &&
          Object.keys(r).forEach(function (i) {
            var o = r[i];
            o !== void 0 && (n[i] = o);
          });
      }),
      n
    );
  }
  var Uv = new Map();
  function Qf(e) {
    var t = Uv.get(e) || 1;
    return (
      Uv.set(e, t + 1),
      ""
        .concat(e, ":")
        .concat(t, ":")
        .concat(Math.random().toString(36).slice(2))
    );
  }
  function Aj(e) {
    var t = Qf("stringifyForDisplay");
    return JSON.stringify(e, function (n, r) {
      return r === void 0 ? t : r;
    })
      .split(JSON.stringify(t))
      .join("<undefined>");
  }
  function oc(e, t) {
    return uu(
      e,
      t,
      t.variables && { variables: A(A({}, e && e.variables), t.variables) }
    );
  }
  function Qv(e) {
    return new de(function (t) {
      t.error(e);
    });
  }
  var qf = function (e, t, n) {
    var r = new Error(n);
    throw (
      ((r.name = "ServerError"),
      (r.response = e),
      (r.statusCode = e.status),
      (r.result = t),
      r)
    );
  };
  function Fj(e) {
    for (
      var t = ["query", "operationName", "variables", "extensions", "context"],
        n = 0,
        r = Object.keys(e);
      n < r.length;
      n++
    ) {
      var i = r[n];
      if (t.indexOf(i) < 0)
        throw __DEV__ ? new ie("illegal argument: ".concat(i)) : new ie(27);
    }
    return e;
  }
  function zj(e, t) {
    var n = A({}, e),
      r = function (o) {
        typeof o == "function" ? (n = A(A({}, n), o(n))) : (n = A(A({}, n), o));
      },
      i = function () {
        return A({}, n);
      };
    return (
      Object.defineProperty(t, "setContext", { enumerable: !1, value: r }),
      Object.defineProperty(t, "getContext", { enumerable: !1, value: i }),
      t
    );
  }
  function $j(e) {
    var t = {
      variables: e.variables || {},
      extensions: e.extensions || {},
      operationName: e.operationName,
      query: e.query,
    };
    return (
      t.operationName ||
        (t.operationName =
          typeof t.query != "string" ? zf(t.query) || void 0 : ""),
      t
    );
  }
  function qv(e, t) {
    return t ? t(e) : de.of();
  }
  function No(e) {
    return typeof e == "function" ? new zs(e) : e;
  }
  function ma(e) {
    return e.request.length <= 1;
  }
  var Bj = (function (e) {
      Ut(t, e);
      function t(n, r) {
        var i = e.call(this, n) || this;
        return (i.link = r), i;
      }
      return t;
    })(Error),
    zs = (function () {
      function e(t) {
        t && (this.request = t);
      }
      return (
        (e.empty = function () {
          return new e(function () {
            return de.of();
          });
        }),
        (e.from = function (t) {
          return t.length === 0
            ? e.empty()
            : t.map(No).reduce(function (n, r) {
                return n.concat(r);
              });
        }),
        (e.split = function (t, n, r) {
          var i = No(n),
            o = No(r || new e(qv));
          return ma(i) && ma(o)
            ? new e(function (s) {
                return t(s) ? i.request(s) || de.of() : o.request(s) || de.of();
              })
            : new e(function (s, a) {
                return t(s)
                  ? i.request(s, a) || de.of()
                  : o.request(s, a) || de.of();
              });
        }),
        (e.execute = function (t, n) {
          return t.request(zj(n.context, $j(Fj(n)))) || de.of();
        }),
        (e.concat = function (t, n) {
          var r = No(t);
          if (ma(r))
            return (
              __DEV__ &&
                H.warn(
                  new Bj(
                    "You are calling concat on a terminating link, which will have no effect",
                    r
                  )
                ),
              r
            );
          var i = No(n);
          return ma(i)
            ? new e(function (o) {
                return (
                  r.request(o, function (s) {
                    return i.request(s) || de.of();
                  }) || de.of()
                );
              })
            : new e(function (o, s) {
                return (
                  r.request(o, function (a) {
                    return i.request(a, s) || de.of();
                  }) || de.of()
                );
              });
        }),
        (e.prototype.split = function (t, n, r) {
          return this.concat(e.split(t, n, r || new e(qv)));
        }),
        (e.prototype.concat = function (t) {
          return e.concat(this, t);
        }),
        (e.prototype.request = function (t, n) {
          throw __DEV__ ? new ie("request is not implemented") : new ie(22);
        }),
        (e.prototype.onError = function (t, n) {
          if (n && n.error) return n.error(t), !1;
          throw t;
        }),
        (e.prototype.setOnError = function (t) {
          return (this.onError = t), this;
        }),
        e
      );
    })(),
    Wf = zs.execute,
    Vj = "3.7.15";
  function Hj(e) {
    return !!e.body;
  }
  function Uj(e) {
    return !!e.getReader;
  }
  function Qj(e) {
    return !!(lu && e[Symbol.asyncIterator]);
  }
  function qj(e) {
    return !!e.stream;
  }
  function Wj(e) {
    return !!e.arrayBuffer;
  }
  function Yj(e) {
    return !!e.pipe;
  }
  function Xj(e) {
    var t,
      n = e[Symbol.asyncIterator]();
    return (
      (t = {
        next: function () {
          return n.next();
        },
      }),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t
    );
  }
  function Gj(e) {
    var t = null,
      n = null,
      r = !1,
      i = [],
      o = [];
    function s(f) {
      if (!n) {
        if (o.length) {
          var d = o.shift();
          if (Array.isArray(d) && d[0]) return d[0]({ value: f, done: !1 });
        }
        i.push(f);
      }
    }
    function a(f) {
      n = f;
      var d = o.slice();
      d.forEach(function (p) {
        p[1](f);
      }),
        !t || t();
    }
    function l() {
      r = !0;
      var f = o.slice();
      f.forEach(function (d) {
        d[0]({ value: void 0, done: !0 });
      }),
        !t || t();
    }
    (t = function () {
      (t = null),
        e.removeListener("data", s),
        e.removeListener("error", a),
        e.removeListener("end", l),
        e.removeListener("finish", l),
        e.removeListener("close", l);
    }),
      e.on("data", s),
      e.on("error", a),
      e.on("end", l),
      e.on("finish", l),
      e.on("close", l);
    function u() {
      return new Promise(function (f, d) {
        if (n) return d(n);
        if (i.length) return f({ value: i.shift(), done: !1 });
        if (r) return f({ value: void 0, done: !0 });
        o.push([f, d]);
      });
    }
    var c = {
      next: function () {
        return u();
      },
    };
    return (
      lu &&
        (c[Symbol.asyncIterator] = function () {
          return this;
        }),
      c
    );
  }
  function Kj(e) {
    var t = !1,
      n = {
        next: function () {
          return t
            ? Promise.resolve({ value: void 0, done: !0 })
            : ((t = !0),
              new Promise(function (r, i) {
                e.then(function (o) {
                  r({ value: o, done: !1 });
                }).catch(i);
              }));
        },
      };
    return (
      lu &&
        (n[Symbol.asyncIterator] = function () {
          return this;
        }),
      n
    );
  }
  function Wv(e) {
    var t = {
      next: function () {
        return e.read();
      },
    };
    return (
      lu &&
        (t[Symbol.asyncIterator] = function () {
          return this;
        }),
      t
    );
  }
  function Zj(e) {
    var t = e;
    if ((Hj(e) && (t = e.body), Qj(t))) return Xj(t);
    if (Uj(t)) return Wv(t.getReader());
    if (qj(t)) return Wv(t.stream().getReader());
    if (Wj(t)) return Kj(t.arrayBuffer());
    if (Yj(t)) return Gj(t);
    throw new Error(
      "Unknown body type for responseIterator. Please pass a streamable response."
    );
  }
  var $p = Symbol();
  function Jj(e) {
    return e.extensions ? Array.isArray(e.extensions[$p]) : !1;
  }
  function eM(e) {
    return e.hasOwnProperty("graphQLErrors");
  }
  var tM = function (e) {
      var t = Dr(
        Dr(Dr([], e.graphQLErrors, !0), e.clientErrors, !0),
        e.protocolErrors,
        !0
      );
      return (
        e.networkError && t.push(e.networkError),
        t.map(function (n) {
          return (ve(n) && n.message) || "Error message not found.";
        }).join(`
`)
      );
    },
    Jr = (function (e) {
      Ut(t, e);
      function t(n) {
        var r = n.graphQLErrors,
          i = n.protocolErrors,
          o = n.clientErrors,
          s = n.networkError,
          a = n.errorMessage,
          l = n.extraInfo,
          u = e.call(this, a) || this;
        return (
          (u.name = "ApolloError"),
          (u.graphQLErrors = r || []),
          (u.protocolErrors = i || []),
          (u.clientErrors = o || []),
          (u.networkError = s || null),
          (u.message = a || tM(u)),
          (u.extraInfo = l),
          (u.__proto__ = t.prototype),
          u
        );
      }
      return t;
    })(Error),
    Yv = Object.prototype.hasOwnProperty;
  function nM(e, t) {
    var n, r, i, o, s;
    return In(this, void 0, void 0, function () {
      var a, l, u, c, f, d, p, g, y, S, m, h, v, w, E, _, k, N, P, T, F, z, R;
      return Ln(this, function (C) {
        switch (C.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error(
                "TextDecoder must be defined in the environment: please import a polyfill."
              );
            (a = new TextDecoder("utf-8")),
              (l =
                (n = e.headers) === null || n === void 0
                  ? void 0
                  : n.get("content-type")),
              (u = "boundary="),
              (c =
                l != null && l.includes(u)
                  ? l == null
                    ? void 0
                    : l
                        .substring(
                          (l == null ? void 0 : l.indexOf(u)) + u.length
                        )
                        .replace(/['"]/g, "")
                        .replace(/\;(.*)/gm, "")
                        .trim()
                  : "-"),
              (f = `\r
--`.concat(c)),
              (d = ""),
              (p = Zj(e)),
              (g = !0),
              (C.label = 1);
          case 1:
            return g ? [4, p.next()] : [3, 3];
          case 2:
            for (
              y = C.sent(),
                S = y.value,
                m = y.done,
                h = typeof S == "string" ? S : a.decode(S),
                v = d.length - f.length + 1,
                g = !m,
                d += h,
                w = d.indexOf(f, v);
              w > -1;

            ) {
              if (
                ((E = void 0),
                (z = [d.slice(0, w), d.slice(w + f.length)]),
                (E = z[0]),
                (d = z[1]),
                (_ = E.indexOf(`\r
\r
`)),
                (k = rM(E.slice(0, _))),
                (N = k["content-type"]),
                N && N.toLowerCase().indexOf("application/json") === -1)
              )
                throw new Error(
                  "Unsupported patch content type: application/json is required."
                );
              if (((P = E.slice(_)), P))
                try {
                  (T = a1(e, P)),
                    Object.keys(T).length > 1 ||
                    "data" in T ||
                    "incremental" in T ||
                    "errors" in T ||
                    "payload" in T
                      ? Lj(T)
                        ? ((F = {}),
                          "payload" in T && (F = A({}, T.payload)),
                          "errors" in T &&
                            (F = A(A({}, F), {
                              extensions: A(
                                A({}, "extensions" in F ? F.extensions : null),
                                ((R = {}), (R[$p] = T.errors), R)
                              ),
                            })),
                          (r = t.next) === null || r === void 0 || r.call(t, F))
                        : (i = t.next) === null || i === void 0 || i.call(t, T)
                      : Object.keys(T).length === 1 &&
                        "hasNext" in T &&
                        !T.hasNext &&
                        ((o = t.complete) === null ||
                          o === void 0 ||
                          o.call(t));
                } catch (I) {
                  Bp(I, t);
                }
              w = d.indexOf(f);
            }
            return [3, 1];
          case 3:
            return (s = t.complete) === null || s === void 0 || s.call(t), [2];
        }
      });
    });
  }
  function rM(e) {
    var t = {};
    return (
      e
        .split(
          `
`
        )
        .forEach(function (n) {
          var r = n.indexOf(":");
          if (r > -1) {
            var i = n.slice(0, r).trim().toLowerCase(),
              o = n.slice(r + 1).trim();
            t[i] = o;
          }
        }),
      t
    );
  }
  function a1(e, t) {
    if (e.status >= 300) {
      var n = function () {
        try {
          return JSON.parse(t);
        } catch {
          return t;
        }
      };
      qf(
        e,
        n(),
        "Response not successful: Received status code ".concat(e.status)
      );
    }
    try {
      return JSON.parse(t);
    } catch (i) {
      var r = i;
      throw (
        ((r.name = "ServerParseError"),
        (r.response = e),
        (r.statusCode = e.status),
        (r.bodyText = t),
        r)
      );
    }
  }
  function Bp(e, t) {
    var n, r;
    e.name !== "AbortError" &&
      (e.result &&
        e.result.errors &&
        e.result.data &&
        ((n = t.next) === null || n === void 0 || n.call(t, e.result)),
      (r = t.error) === null || r === void 0 || r.call(t, e));
  }
  function iM(e, t, n) {
    oM(t)(e)
      .then(function (r) {
        var i, o;
        (i = n.next) === null || i === void 0 || i.call(n, r),
          (o = n.complete) === null || o === void 0 || o.call(n);
      })
      .catch(function (r) {
        return Bp(r, n);
      });
  }
  function oM(e) {
    return function (t) {
      return t
        .text()
        .then(function (n) {
          return a1(t, n);
        })
        .then(function (n) {
          return (
            t.status >= 300 &&
              qf(
                t,
                n,
                "Response not successful: Received status code ".concat(
                  t.status
                )
              ),
            !Array.isArray(n) &&
              !Yv.call(n, "data") &&
              !Yv.call(n, "errors") &&
              qf(
                t,
                n,
                "Server response was missing for query '".concat(
                  Array.isArray(e)
                    ? e.map(function (r) {
                        return r.operationName;
                      })
                    : e.operationName,
                  "'."
                )
              ),
            n
          );
        });
    };
  }
  var Yf = function (e, t) {
      var n;
      try {
        n = JSON.stringify(e);
      } catch (i) {
        var r = __DEV__
          ? new ie(
              "Network request failed. "
                .concat(t, " is not serializable: ")
                .concat(i.message)
            )
          : new ie(24);
        throw ((r.parseError = i), r);
      }
      return n;
    },
    sM = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
    aM = { "accept": "*/*", "content-type": "application/json" },
    lM = { method: "POST" },
    uM = { http: sM, headers: aM, options: lM },
    cM = function (e, t) {
      return t(e);
    };
  function fM(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = {},
      o = {};
    n.forEach(function (f) {
      (i = A(A(A({}, i), f.options), {
        headers: A(A({}, i.headers), f.headers),
      })),
        f.credentials && (i.credentials = f.credentials),
        (o = A(A({}, o), f.http));
    }),
      i.headers && (i.headers = dM(i.headers, o.preserveHeaderCase));
    var s = e.operationName,
      a = e.extensions,
      l = e.variables,
      u = e.query,
      c = { operationName: s, variables: l };
    return (
      o.includeExtensions && (c.extensions = a),
      o.includeQuery && (c.query = t(u, UR)),
      { options: i, body: c }
    );
  }
  function dM(e, t) {
    if (!t) {
      var n = Object.create(null);
      return (
        Object.keys(Object(e)).forEach(function (o) {
          n[o.toLowerCase()] = e[o];
        }),
        n
      );
    }
    var r = Object.create(null);
    Object.keys(Object(e)).forEach(function (o) {
      r[o.toLowerCase()] = { originalName: o, value: e[o] };
    });
    var i = Object.create(null);
    return (
      Object.keys(r).forEach(function (o) {
        i[r[o].originalName] = r[o].value;
      }),
      i
    );
  }
  var pM = function (e) {
      if (!e && typeof fetch > "u")
        throw __DEV__
          ? new ie(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `)
          : new ie(23);
    },
    hM = function () {
      if (typeof AbortController > "u") return { controller: !1, signal: !1 };
      var e = new AbortController(),
        t = e.signal;
      return { controller: e, signal: t };
    },
    mM = function (e, t) {
      var n = e.getContext(),
        r = n.uri;
      return r || (typeof t == "function" ? t(e) : t || "/graphql");
    };
  function vM(e, t) {
    var n = [],
      r = function (f, d) {
        n.push("".concat(f, "=").concat(encodeURIComponent(d)));
      };
    if (
      ("query" in t && r("query", t.query),
      t.operationName && r("operationName", t.operationName),
      t.variables)
    ) {
      var i = void 0;
      try {
        i = Yf(t.variables, "Variables map");
      } catch (f) {
        return { parseError: f };
      }
      r("variables", i);
    }
    if (t.extensions) {
      var o = void 0;
      try {
        o = Yf(t.extensions, "Extensions map");
      } catch (f) {
        return { parseError: f };
      }
      r("extensions", o);
    }
    var s = "",
      a = e,
      l = e.indexOf("#");
    l !== -1 && ((s = e.substr(l)), (a = e.substr(0, l)));
    var u = a.indexOf("?") === -1 ? "?" : "&",
      c = a + u + n.join("&") + s;
    return { newURI: c };
  }
  var Xv = bt(function () {
      return fetch;
    }),
    yM = function (e) {
      e === void 0 && (e = {});
      var t = e.uri,
        n = t === void 0 ? "/graphql" : t,
        r = e.fetch,
        i = e.print,
        o = i === void 0 ? cM : i,
        s = e.includeExtensions,
        a = e.preserveHeaderCase,
        l = e.useGETForQueries,
        u = e.includeUnusedVariables,
        c = u === void 0 ? !1 : u,
        f = Zi(e, [
          "uri",
          "fetch",
          "print",
          "includeExtensions",
          "preserveHeaderCase",
          "useGETForQueries",
          "includeUnusedVariables",
        ]);
      __DEV__ && pM(r || Xv);
      var d = {
        http: { includeExtensions: s, preserveHeaderCase: a },
        options: f.fetchOptions,
        credentials: f.credentials,
        headers: f.headers,
      };
      return new zs(function (p) {
        var g = mM(p, n),
          y = p.getContext(),
          S = {};
        if (y.clientAwareness) {
          var m = y.clientAwareness,
            h = m.name,
            v = m.version;
          h && (S["apollographql-client-name"] = h),
            v && (S["apollographql-client-version"] = v);
        }
        var w = A(A({}, S), y.headers),
          E = {
            http: y.http,
            options: y.fetchOptions,
            credentials: y.credentials,
            headers: w,
          },
          _ = fM(p, o, uM, d, E),
          k = _.options,
          N = _.body;
        if (N.variables && !c) {
          var P = new Set(Object.keys(N.variables));
          En(p.query, {
            Variable: function ($, Y, U) {
              U && U.kind !== "VariableDefinition" && P.delete($.name.value);
            },
          }),
            P.size &&
              ((N.variables = A({}, N.variables)),
              P.forEach(function ($) {
                delete N.variables[$];
              }));
        }
        var T;
        if (!k.signal) {
          var F = hM(),
            z = F.controller,
            R = F.signal;
          (T = z), T && (k.signal = R);
        }
        var C = function ($) {
            return (
              $.kind === "OperationDefinition" && $.operation === "mutation"
            );
          },
          I = function ($) {
            return (
              $.kind === "OperationDefinition" && $.operation === "subscription"
            );
          },
          j = I(au(p.query)),
          D = Np(["defer"], p.query);
        if ((l && !p.query.definitions.some(C) && (k.method = "GET"), D || j)) {
          k.headers = k.headers || {};
          var O = "multipart/mixed;";
          j &&
            D &&
            __DEV__ &&
            H.warn("Multipart-subscriptions do not support @defer"),
            j
              ? (O += "boundary=graphql;subscriptionSpec=1.0,application/json")
              : D && (O += "deferSpec=20220824,application/json"),
            (k.headers.accept = O);
        }
        if (k.method === "GET") {
          var M = vM(g, N),
            L = M.newURI,
            V = M.parseError;
          if (V) return Qv(V);
          g = L;
        } else
          try {
            k.body = Yf(N, "Payload");
          } catch ($) {
            return Qv($);
          }
        return new de(function ($) {
          var Y =
            r ||
            bt(function () {
              return fetch;
            }) ||
            Xv;
          return (
            Y(g, k)
              .then(function (U) {
                var G;
                p.setContext({ response: U });
                var K =
                  (G = U.headers) === null || G === void 0
                    ? void 0
                    : G.get("content-type");
                return K !== null && /^multipart\/mixed/i.test(K)
                  ? nM(U, $)
                  : iM(U, p, $);
              })
              .catch(function (U) {
                return Bp(U, $);
              }),
            function () {
              T && T.abort();
            }
          );
        });
      });
    },
    gM = (function (e) {
      Ut(t, e);
      function t(n) {
        n === void 0 && (n = {});
        var r = e.call(this, yM(n).request) || this;
        return (r.options = n), r;
      }
      return t;
    })(zs);
  const { toString: Gv, hasOwnProperty: wM } = Object.prototype,
    Kv = Function.prototype.toString,
    Xf = new Map();
  function Ne(e, t) {
    try {
      return Gf(e, t);
    } finally {
      Xf.clear();
    }
  }
  function Gf(e, t) {
    if (e === t) return !0;
    const n = Gv.call(e),
      r = Gv.call(t);
    if (n !== r) return !1;
    switch (n) {
      case "[object Array]":
        if (e.length !== t.length) return !1;
      case "[object Object]": {
        if (Jv(e, t)) return !0;
        const i = Zv(e),
          o = Zv(t),
          s = i.length;
        if (s !== o.length) return !1;
        for (let a = 0; a < s; ++a) if (!wM.call(t, i[a])) return !1;
        for (let a = 0; a < s; ++a) {
          const l = i[a];
          if (!Gf(e[l], t[l])) return !1;
        }
        return !0;
      }
      case "[object Error]":
        return e.name === t.name && e.message === t.message;
      case "[object Number]":
        if (e !== e) return t !== t;
      case "[object Boolean]":
      case "[object Date]":
        return +e == +t;
      case "[object RegExp]":
      case "[object String]":
        return e == `${t}`;
      case "[object Map]":
      case "[object Set]": {
        if (e.size !== t.size) return !1;
        if (Jv(e, t)) return !0;
        const i = e.entries(),
          o = n === "[object Map]";
        for (;;) {
          const s = i.next();
          if (s.done) break;
          const [a, l] = s.value;
          if (!t.has(a) || (o && !Gf(l, t.get(a)))) return !1;
        }
        return !0;
      }
      case "[object Uint16Array]":
      case "[object Uint8Array]":
      case "[object Uint32Array]":
      case "[object Int32Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object ArrayBuffer]":
        (e = new Uint8Array(e)), (t = new Uint8Array(t));
      case "[object DataView]": {
        let i = e.byteLength;
        if (i === t.byteLength) for (; i-- && e[i] === t[i]; );
        return i === -1;
      }
      case "[object AsyncFunction]":
      case "[object GeneratorFunction]":
      case "[object AsyncGeneratorFunction]":
      case "[object Function]": {
        const i = Kv.call(e);
        return i !== Kv.call(t) ? !1 : !bM(i, SM);
      }
    }
    return !1;
  }
  function Zv(e) {
    return Object.keys(e).filter(xM, e);
  }
  function xM(e) {
    return this[e] !== void 0;
  }
  const SM = "{ [native code] }";
  function bM(e, t) {
    const n = e.length - t.length;
    return n >= 0 && e.indexOf(t, n) === n;
  }
  function Jv(e, t) {
    let n = Xf.get(e);
    if (n) {
      if (n.has(t)) return !0;
    } else Xf.set(e, (n = new Set()));
    return n.add(t), !1;
  }
  var EM = function () {
      return Object.create(null);
    },
    l1 = Array.prototype,
    _M = l1.forEach,
    kM = l1.slice,
    CM = (function () {
      function e(t, n) {
        t === void 0 && (t = !0),
          n === void 0 && (n = EM),
          (this.weakness = t),
          (this.makeData = n);
      }
      return (
        (e.prototype.lookup = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          return this.lookupArray(t);
        }),
        (e.prototype.lookupArray = function (t) {
          var n = this;
          return (
            _M.call(t, function (r) {
              return (n = n.getChildTrie(r));
            }),
            n.data || (n.data = this.makeData(kM.call(t)))
          );
        }),
        (e.prototype.getChildTrie = function (t) {
          var n =
              this.weakness && NM(t)
                ? this.weak || (this.weak = new WeakMap())
                : this.strong || (this.strong = new Map()),
            r = n.get(t);
          return r || n.set(t, (r = new e(this.weakness, this.makeData))), r;
        }),
        e
      );
    })();
  function NM(e) {
    switch (typeof e) {
      case "object":
        if (e === null) break;
      case "function":
        return !0;
    }
    return !1;
  }
  let Ie = null;
  const ey = {};
  let OM = 1;
  const TM = () =>
    class {
      constructor() {
        this.id = [
          "slot",
          OM++,
          Date.now(),
          Math.random().toString(36).slice(2),
        ].join(":");
      }
      hasValue() {
        for (let t = Ie; t; t = t.parent)
          if (this.id in t.slots) {
            const n = t.slots[this.id];
            if (n === ey) break;
            return t !== Ie && (Ie.slots[this.id] = n), !0;
          }
        return Ie && (Ie.slots[this.id] = ey), !1;
      }
      getValue() {
        if (this.hasValue()) return Ie.slots[this.id];
      }
      withValue(t, n, r, i) {
        const o = { __proto__: null, [this.id]: t },
          s = Ie;
        Ie = { parent: s, slots: o };
        try {
          return n.apply(i, r);
        } finally {
          Ie = s;
        }
      }
      static bind(t) {
        const n = Ie;
        return function () {
          const r = Ie;
          try {
            return (Ie = n), t.apply(this, arguments);
          } finally {
            Ie = r;
          }
        };
      }
      static noContext(t, n, r) {
        if (Ie) {
          const i = Ie;
          try {
            return (Ie = null), t.apply(r, n);
          } finally {
            Ie = i;
          }
        } else return t.apply(r, n);
      }
    };
  function ty(e) {
    try {
      return e();
    } catch {}
  }
  const sc = "@wry/context:Slot",
    DM = ty(() => globalThis) || ty(() => global) || Object.create(null),
    ny = DM,
    u1 =
      ny[sc] ||
      Array[sc] ||
      (function (e) {
        try {
          Object.defineProperty(ny, sc, {
            value: e,
            enumerable: !1,
            writable: !1,
            configurable: !0,
          });
        } finally {
          return e;
        }
      })(TM());
  function PM() {}
  var RM = (function () {
      function e(t, n) {
        t === void 0 && (t = 1 / 0),
          n === void 0 && (n = PM),
          (this.max = t),
          (this.dispose = n),
          (this.map = new Map()),
          (this.newest = null),
          (this.oldest = null);
      }
      return (
        (e.prototype.has = function (t) {
          return this.map.has(t);
        }),
        (e.prototype.get = function (t) {
          var n = this.getNode(t);
          return n && n.value;
        }),
        (e.prototype.getNode = function (t) {
          var n = this.map.get(t);
          if (n && n !== this.newest) {
            var r = n.older,
              i = n.newer;
            i && (i.older = r),
              r && (r.newer = i),
              (n.older = this.newest),
              (n.older.newer = n),
              (n.newer = null),
              (this.newest = n),
              n === this.oldest && (this.oldest = i);
          }
          return n;
        }),
        (e.prototype.set = function (t, n) {
          var r = this.getNode(t);
          return r
            ? (r.value = n)
            : ((r = { key: t, value: n, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = r),
              (this.newest = r),
              (this.oldest = this.oldest || r),
              this.map.set(t, r),
              r.value);
        }),
        (e.prototype.clean = function () {
          for (; this.oldest && this.map.size > this.max; )
            this.delete(this.oldest.key);
        }),
        (e.prototype.delete = function (t) {
          var n = this.map.get(t);
          return n
            ? (n === this.newest && (this.newest = n.older),
              n === this.oldest && (this.oldest = n.newer),
              n.newer && (n.newer.older = n.older),
              n.older && (n.older.newer = n.newer),
              this.map.delete(t),
              this.dispose(n.value, t),
              !0)
            : !1;
        }),
        e
      );
    })(),
    cu = new u1(),
    ac,
    jM = Object.prototype.hasOwnProperty,
    Vp =
      ((ac = Array.from),
      ac === void 0
        ? function (e) {
            var t = [];
            return (
              e.forEach(function (n) {
                return t.push(n);
              }),
              t
            );
          }
        : ac);
  function El(e) {
    var t = e.unsubscribe;
    typeof t == "function" && ((e.unsubscribe = void 0), t());
  }
  var _s = [],
    MM = 100;
  function to(e, t) {
    if (!e) throw new Error(t || "assertion failure");
  }
  function IM(e, t) {
    var n = e.length;
    return n > 0 && n === t.length && e[n - 1] === t[n - 1];
  }
  function c1(e) {
    switch (e.length) {
      case 0:
        throw new Error("unknown value");
      case 1:
        return e[0];
      case 2:
        throw e[1];
    }
  }
  function LM(e) {
    return e.slice(0);
  }
  var AM = (function () {
    function e(t) {
      (this.fn = t),
        (this.parents = new Set()),
        (this.childValues = new Map()),
        (this.dirtyChildren = null),
        (this.dirty = !0),
        (this.recomputing = !1),
        (this.value = []),
        (this.deps = null),
        ++e.count;
    }
    return (
      (e.prototype.peek = function () {
        if (this.value.length === 1 && !or(this))
          return ry(this), this.value[0];
      }),
      (e.prototype.recompute = function (t) {
        return (
          to(!this.recomputing, "already recomputing"),
          ry(this),
          or(this) ? FM(this, t) : c1(this.value)
        );
      }),
      (e.prototype.setDirty = function () {
        this.dirty ||
          ((this.dirty = !0), (this.value.length = 0), f1(this), El(this));
      }),
      (e.prototype.dispose = function () {
        var t = this;
        this.setDirty(),
          v1(this),
          Hp(this, function (n, r) {
            n.setDirty(), y1(n, t);
          });
      }),
      (e.prototype.forget = function () {
        this.dispose();
      }),
      (e.prototype.dependOn = function (t) {
        t.add(this),
          this.deps || (this.deps = _s.pop() || new Set()),
          this.deps.add(t);
      }),
      (e.prototype.forgetDeps = function () {
        var t = this;
        this.deps &&
          (Vp(this.deps).forEach(function (n) {
            return n.delete(t);
          }),
          this.deps.clear(),
          _s.push(this.deps),
          (this.deps = null));
      }),
      (e.count = 0),
      e
    );
  })();
  function ry(e) {
    var t = cu.getValue();
    if (t)
      return (
        e.parents.add(t),
        t.childValues.has(e) || t.childValues.set(e, []),
        or(e) ? p1(t, e) : h1(t, e),
        t
      );
  }
  function FM(e, t) {
    return v1(e), cu.withValue(e, zM, [e, t]), BM(e, t) && $M(e), c1(e.value);
  }
  function zM(e, t) {
    (e.recomputing = !0), (e.value.length = 0);
    try {
      e.value[0] = e.fn.apply(null, t);
    } catch (n) {
      e.value[1] = n;
    }
    e.recomputing = !1;
  }
  function or(e) {
    return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
  }
  function $M(e) {
    (e.dirty = !1), !or(e) && d1(e);
  }
  function f1(e) {
    Hp(e, p1);
  }
  function d1(e) {
    Hp(e, h1);
  }
  function Hp(e, t) {
    var n = e.parents.size;
    if (n) for (var r = Vp(e.parents), i = 0; i < n; ++i) t(r[i], e);
  }
  function p1(e, t) {
    to(e.childValues.has(t)), to(or(t));
    var n = !or(e);
    if (!e.dirtyChildren) e.dirtyChildren = _s.pop() || new Set();
    else if (e.dirtyChildren.has(t)) return;
    e.dirtyChildren.add(t), n && f1(e);
  }
  function h1(e, t) {
    to(e.childValues.has(t)), to(!or(t));
    var n = e.childValues.get(t);
    n.length === 0
      ? e.childValues.set(t, LM(t.value))
      : IM(n, t.value) || e.setDirty(),
      m1(e, t),
      !or(e) && d1(e);
  }
  function m1(e, t) {
    var n = e.dirtyChildren;
    n &&
      (n.delete(t),
      n.size === 0 && (_s.length < MM && _s.push(n), (e.dirtyChildren = null)));
  }
  function v1(e) {
    e.childValues.size > 0 &&
      e.childValues.forEach(function (t, n) {
        y1(e, n);
      }),
      e.forgetDeps(),
      to(e.dirtyChildren === null);
  }
  function y1(e, t) {
    t.parents.delete(e), e.childValues.delete(t), m1(e, t);
  }
  function BM(e, t) {
    if (typeof e.subscribe == "function")
      try {
        El(e), (e.unsubscribe = e.subscribe.apply(null, t));
      } catch {
        return e.setDirty(), !1;
      }
    return !0;
  }
  var VM = { setDirty: !0, dispose: !0, forget: !0 };
  function g1(e) {
    var t = new Map(),
      n = e && e.subscribe;
    function r(i) {
      var o = cu.getValue();
      if (o) {
        var s = t.get(i);
        s || t.set(i, (s = new Set())),
          o.dependOn(s),
          typeof n == "function" && (El(s), (s.unsubscribe = n(i)));
      }
    }
    return (
      (r.dirty = function (o, s) {
        var a = t.get(o);
        if (a) {
          var l = s && jM.call(VM, s) ? s : "setDirty";
          Vp(a).forEach(function (u) {
            return u[l]();
          }),
            t.delete(o),
            El(a);
        }
      }),
      r
    );
  }
  function w1() {
    var e = new CM(typeof WeakMap == "function");
    return function () {
      return e.lookupArray(arguments);
    };
  }
  w1();
  var lc = new Set();
  function _l(e, t) {
    t === void 0 && (t = Object.create(null));
    var n = new RM(t.max || Math.pow(2, 16), function (u) {
        return u.dispose();
      }),
      r = t.keyArgs,
      i = t.makeCacheKey || w1(),
      o = function () {
        var u = i.apply(null, r ? r.apply(null, arguments) : arguments);
        if (u === void 0) return e.apply(null, arguments);
        var c = n.get(u);
        c ||
          (n.set(u, (c = new AM(e))),
          (c.subscribe = t.subscribe),
          (c.forget = function () {
            return n.delete(u);
          }));
        var f = c.recompute(Array.prototype.slice.call(arguments));
        return (
          n.set(u, c),
          lc.add(n),
          cu.hasValue() ||
            (lc.forEach(function (d) {
              return d.clean();
            }),
            lc.clear()),
          f
        );
      };
    Object.defineProperty(o, "size", {
      get: function () {
        return n.map.size;
      },
      configurable: !1,
      enumerable: !1,
    });
    function s(u) {
      var c = n.get(u);
      c && c.setDirty();
    }
    (o.dirtyKey = s),
      (o.dirty = function () {
        s(i.apply(null, arguments));
      });
    function a(u) {
      var c = n.get(u);
      if (c) return c.peek();
    }
    (o.peekKey = a),
      (o.peek = function () {
        return a(i.apply(null, arguments));
      });
    function l(u) {
      return n.delete(u);
    }
    return (
      (o.forgetKey = l),
      (o.forget = function () {
        return l(i.apply(null, arguments));
      }),
      (o.makeCacheKey = i),
      (o.getKey = r
        ? function () {
            return i.apply(null, r.apply(null, arguments));
          }
        : i),
      Object.freeze(o)
    );
  }
  var HM = (function () {
      function e() {
        this.getFragmentDoc = _l(ZR);
      }
      return (
        (e.prototype.batch = function (t) {
          var n = this,
            r =
              typeof t.optimistic == "string"
                ? t.optimistic
                : t.optimistic === !1
                ? null
                : void 0,
            i;
          return (
            this.performTransaction(function () {
              return (i = t.update(n));
            }, r),
            i
          );
        }),
        (e.prototype.recordOptimisticTransaction = function (t, n) {
          this.performTransaction(t, n);
        }),
        (e.prototype.transformDocument = function (t) {
          return t;
        }),
        (e.prototype.transformForLink = function (t) {
          return t;
        }),
        (e.prototype.identify = function (t) {}),
        (e.prototype.gc = function () {
          return [];
        }),
        (e.prototype.modify = function (t) {
          return !1;
        }),
        (e.prototype.readQuery = function (t, n) {
          return (
            n === void 0 && (n = !!t.optimistic),
            this.read(
              A(A({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: n })
            )
          );
        }),
        (e.prototype.readFragment = function (t, n) {
          return (
            n === void 0 && (n = !!t.optimistic),
            this.read(
              A(A({}, t), {
                query: this.getFragmentDoc(t.fragment, t.fragmentName),
                rootId: t.id,
                optimistic: n,
              })
            )
          );
        }),
        (e.prototype.writeQuery = function (t) {
          var n = t.id,
            r = t.data,
            i = Zi(t, ["id", "data"]);
          return this.write(
            Object.assign(i, { dataId: n || "ROOT_QUERY", result: r })
          );
        }),
        (e.prototype.writeFragment = function (t) {
          var n = t.id,
            r = t.data,
            i = t.fragment,
            o = t.fragmentName,
            s = Zi(t, ["id", "data", "fragment", "fragmentName"]);
          return this.write(
            Object.assign(s, {
              query: this.getFragmentDoc(i, o),
              dataId: n,
              result: r,
            })
          );
        }),
        (e.prototype.updateQuery = function (t, n) {
          return this.batch({
            update: function (r) {
              var i = r.readQuery(t),
                o = n(i);
              return o == null
                ? i
                : (r.writeQuery(A(A({}, t), { data: o })), o);
            },
          });
        }),
        (e.prototype.updateFragment = function (t, n) {
          return this.batch({
            update: function (r) {
              var i = r.readFragment(t),
                o = n(i);
              return o == null
                ? i
                : (r.writeFragment(A(A({}, t), { data: o })), o);
            },
          });
        }),
        e
      );
    })(),
    x1 = (function (e) {
      Ut(t, e);
      function t(n, r, i, o) {
        var s,
          a = e.call(this, n) || this;
        if (
          ((a.message = n),
          (a.path = r),
          (a.query = i),
          (a.variables = o),
          Array.isArray(a.path))
        ) {
          a.missing = a.message;
          for (var l = a.path.length - 1; l >= 0; --l)
            a.missing = ((s = {}), (s[a.path[l]] = a.missing), s);
        } else a.missing = a.path;
        return (a.__proto__ = t.prototype), a;
      }
      return t;
    })(Error);
  const UM = () => Object.create(null),
    { forEach: QM, slice: qM } = Array.prototype,
    { hasOwnProperty: WM } = Object.prototype;
  class ao {
    constructor(t = !0, n = UM) {
      (this.weakness = t), (this.makeData = n);
    }
    lookup(...t) {
      return this.lookupArray(t);
    }
    lookupArray(t) {
      let n = this;
      return (
        QM.call(t, (r) => (n = n.getChildTrie(r))),
        WM.call(n, "data") ? n.data : (n.data = this.makeData(qM.call(t)))
      );
    }
    peek(...t) {
      return this.peekArray(t);
    }
    peekArray(t) {
      let n = this;
      for (let r = 0, i = t.length; n && r < i; ++r) {
        const o = this.weakness && iy(t[r]) ? n.weak : n.strong;
        n = o && o.get(t[r]);
      }
      return n && n.data;
    }
    getChildTrie(t) {
      const n =
        this.weakness && iy(t)
          ? this.weak || (this.weak = new WeakMap())
          : this.strong || (this.strong = new Map());
      let r = n.get(t);
      return r || n.set(t, (r = new ao(this.weakness, this.makeData))), r;
    }
  }
  function iy(e) {
    switch (typeof e) {
      case "object":
        if (e === null) break;
      case "function":
        return !0;
    }
    return !1;
  }
  var De = Object.prototype.hasOwnProperty;
  function Oo(e) {
    return e == null;
  }
  function S1(e, t) {
    var n = e.__typename,
      r = e.id,
      i = e._id;
    if (
      typeof n == "string" &&
      (t && (t.keyObject = Oo(r) ? (Oo(i) ? void 0 : { _id: i }) : { id: r }),
      Oo(r) && !Oo(i) && (r = i),
      !Oo(r))
    )
      return ""
        .concat(n, ":")
        .concat(
          typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r)
        );
  }
  var b1 = {
    dataIdFromObject: S1,
    addTypename: !0,
    resultCaching: !0,
    canonizeResults: !1,
  };
  function YM(e) {
    return uu(b1, e);
  }
  function E1(e) {
    var t = e.canonizeResults;
    return t === void 0 ? b1.canonizeResults : t;
  }
  function XM(e, t) {
    return oe(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
  }
  var _1 = /^[_a-z][_0-9a-z]*/i;
  function sr(e) {
    var t = e.match(_1);
    return t ? t[0] : e;
  }
  function Kf(e, t, n) {
    return ve(t)
      ? Ee(t)
        ? t.every(function (r) {
            return Kf(e, r, n);
          })
        : e.selections.every(function (r) {
            if (Br(r) && iu(r, n)) {
              var i = $r(r);
              return (
                De.call(t, i) &&
                (!r.selectionSet || Kf(r.selectionSet, t[i], n))
              );
            }
            return !0;
          })
      : !1;
  }
  function yi(e) {
    return ve(e) && !oe(e) && !Ee(e);
  }
  function GM() {
    return new ir();
  }
  function k1(e, t) {
    var n = Op(Pp(e));
    return {
      fragmentMap: n,
      lookupFragment: function (r) {
        var i = n[r];
        return !i && t && (i = t.lookup(r)), i || null;
      },
    };
  }
  var za = Object.create(null),
    uc = function () {
      return za;
    },
    oy = Object.create(null),
    ks = (function () {
      function e(t, n) {
        var r = this;
        (this.policies = t),
          (this.group = n),
          (this.data = Object.create(null)),
          (this.rootIds = Object.create(null)),
          (this.refs = Object.create(null)),
          (this.getFieldValue = function (i, o) {
            return Hf(oe(i) ? r.get(i.__ref, o) : i && i[o]);
          }),
          (this.canRead = function (i) {
            return oe(i) ? r.has(i.__ref) : typeof i == "object";
          }),
          (this.toReference = function (i, o) {
            if (typeof i == "string") return Pi(i);
            if (oe(i)) return i;
            var s = r.policies.identify(i)[0];
            if (s) {
              var a = Pi(s);
              return o && r.merge(s, i), a;
            }
          });
      }
      return (
        (e.prototype.toObject = function () {
          return A({}, this.data);
        }),
        (e.prototype.has = function (t) {
          return this.lookup(t, !0) !== void 0;
        }),
        (e.prototype.get = function (t, n) {
          if ((this.group.depend(t, n), De.call(this.data, t))) {
            var r = this.data[t];
            if (r && De.call(r, n)) return r[n];
          }
          if (n === "__typename" && De.call(this.policies.rootTypenamesById, t))
            return this.policies.rootTypenamesById[t];
          if (this instanceof Tn) return this.parent.get(t, n);
        }),
        (e.prototype.lookup = function (t, n) {
          if ((n && this.group.depend(t, "__exists"), De.call(this.data, t)))
            return this.data[t];
          if (this instanceof Tn) return this.parent.lookup(t, n);
          if (this.policies.rootTypenamesById[t]) return Object.create(null);
        }),
        (e.prototype.merge = function (t, n) {
          var r = this,
            i;
          oe(t) && (t = t.__ref), oe(n) && (n = n.__ref);
          var o = typeof t == "string" ? this.lookup((i = t)) : t,
            s = typeof n == "string" ? this.lookup((i = n)) : n;
          if (s) {
            __DEV__
              ? H(typeof i == "string", "store.merge expects a string ID")
              : H(typeof i == "string", 1);
            var a = new ir(ZM).merge(o, s);
            if (
              ((this.data[i] = a),
              a !== o && (delete this.refs[i], this.group.caching))
            ) {
              var l = Object.create(null);
              o || (l.__exists = 1),
                Object.keys(s).forEach(function (u) {
                  if (!o || o[u] !== a[u]) {
                    l[u] = 1;
                    var c = sr(u);
                    c !== u &&
                      !r.policies.hasKeyArgs(a.__typename, c) &&
                      (l[c] = 1),
                      a[u] === void 0 && !(r instanceof Tn) && delete a[u];
                  }
                }),
                l.__typename &&
                  !(o && o.__typename) &&
                  this.policies.rootTypenamesById[i] === a.__typename &&
                  delete l.__typename,
                Object.keys(l).forEach(function (u) {
                  return r.group.dirty(i, u);
                });
            }
          }
        }),
        (e.prototype.modify = function (t, n) {
          var r = this,
            i = this.lookup(t);
          if (i) {
            var o = Object.create(null),
              s = !1,
              a = !0,
              l = {
                DELETE: za,
                INVALIDATE: oy,
                isReference: oe,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (u, c) {
                  return r.policies.readField(
                    typeof u == "string"
                      ? { fieldName: u, from: c || Pi(t) }
                      : u,
                    { store: r }
                  );
                },
              };
            if (
              (Object.keys(i).forEach(function (u) {
                var c = sr(u),
                  f = i[u];
                if (f !== void 0) {
                  var d = typeof n == "function" ? n : n[u] || n[c];
                  if (d) {
                    var p =
                      d === uc
                        ? za
                        : d(
                            Hf(f),
                            A(A({}, l), {
                              fieldName: c,
                              storeFieldName: u,
                              storage: r.getStorage(t, u),
                            })
                          );
                    p === oy
                      ? r.group.dirty(t, u)
                      : (p === za && (p = void 0),
                        p !== f && ((o[u] = p), (s = !0), (f = p)));
                  }
                  f !== void 0 && (a = !1);
                }
              }),
              s)
            )
              return (
                this.merge(t, o),
                a &&
                  (this instanceof Tn
                    ? (this.data[t] = void 0)
                    : delete this.data[t],
                  this.group.dirty(t, "__exists")),
                !0
              );
          }
          return !1;
        }),
        (e.prototype.delete = function (t, n, r) {
          var i,
            o = this.lookup(t);
          if (o) {
            var s = this.getFieldValue(o, "__typename"),
              a =
                n && r
                  ? this.policies.getStoreFieldName({
                      typename: s,
                      fieldName: n,
                      args: r,
                    })
                  : n;
            return this.modify(t, a ? ((i = {}), (i[a] = uc), i) : uc);
          }
          return !1;
        }),
        (e.prototype.evict = function (t, n) {
          var r = !1;
          return (
            t.id &&
              (De.call(this.data, t.id) &&
                (r = this.delete(t.id, t.fieldName, t.args)),
              this instanceof Tn &&
                this !== n &&
                (r = this.parent.evict(t, n) || r),
              (t.fieldName || r) &&
                this.group.dirty(t.id, t.fieldName || "__exists")),
            r
          );
        }),
        (e.prototype.clear = function () {
          this.replace(null);
        }),
        (e.prototype.extract = function () {
          var t = this,
            n = this.toObject(),
            r = [];
          return (
            this.getRootIdSet().forEach(function (i) {
              De.call(t.policies.rootTypenamesById, i) || r.push(i);
            }),
            r.length && (n.__META = { extraRootIds: r.sort() }),
            n
          );
        }),
        (e.prototype.replace = function (t) {
          var n = this;
          if (
            (Object.keys(this.data).forEach(function (o) {
              (t && De.call(t, o)) || n.delete(o);
            }),
            t)
          ) {
            var r = t.__META,
              i = Zi(t, ["__META"]);
            Object.keys(i).forEach(function (o) {
              n.merge(o, i[o]);
            }),
              r && r.extraRootIds.forEach(this.retain, this);
          }
        }),
        (e.prototype.retain = function (t) {
          return (this.rootIds[t] = (this.rootIds[t] || 0) + 1);
        }),
        (e.prototype.release = function (t) {
          if (this.rootIds[t] > 0) {
            var n = --this.rootIds[t];
            return n || delete this.rootIds[t], n;
          }
          return 0;
        }),
        (e.prototype.getRootIdSet = function (t) {
          return (
            t === void 0 && (t = new Set()),
            Object.keys(this.rootIds).forEach(t.add, t),
            this instanceof Tn
              ? this.parent.getRootIdSet(t)
              : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t),
            t
          );
        }),
        (e.prototype.gc = function () {
          var t = this,
            n = this.getRootIdSet(),
            r = this.toObject();
          n.forEach(function (s) {
            De.call(r, s) &&
              (Object.keys(t.findChildRefIds(s)).forEach(n.add, n),
              delete r[s]);
          });
          var i = Object.keys(r);
          if (i.length) {
            for (var o = this; o instanceof Tn; ) o = o.parent;
            i.forEach(function (s) {
              return o.delete(s);
            });
          }
          return i;
        }),
        (e.prototype.findChildRefIds = function (t) {
          if (!De.call(this.refs, t)) {
            var n = (this.refs[t] = Object.create(null)),
              r = this.data[t];
            if (!r) return n;
            var i = new Set([r]);
            i.forEach(function (o) {
              oe(o) && (n[o.__ref] = !0),
                ve(o) &&
                  Object.keys(o).forEach(function (s) {
                    var a = o[s];
                    ve(a) && i.add(a);
                  });
            });
          }
          return this.refs[t];
        }),
        (e.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments);
        }),
        e
      );
    })(),
    C1 = (function () {
      function e(t, n) {
        n === void 0 && (n = null),
          (this.caching = t),
          (this.parent = n),
          (this.d = null),
          this.resetCaching();
      }
      return (
        (e.prototype.resetCaching = function () {
          (this.d = this.caching ? g1() : null), (this.keyMaker = new ao(Qr));
        }),
        (e.prototype.depend = function (t, n) {
          if (this.d) {
            this.d(cc(t, n));
            var r = sr(n);
            r !== n && this.d(cc(t, r)),
              this.parent && this.parent.depend(t, n);
          }
        }),
        (e.prototype.dirty = function (t, n) {
          this.d &&
            this.d.dirty(cc(t, n), n === "__exists" ? "forget" : "setDirty");
        }),
        e
      );
    })();
  function cc(e, t) {
    return t + "#" + e;
  }
  function sy(e, t) {
    Go(e) && e.group.depend(t, "__exists");
  }
  (function (e) {
    var t = (function (n) {
      Ut(r, n);
      function r(i) {
        var o = i.policies,
          s = i.resultCaching,
          a = s === void 0 ? !0 : s,
          l = i.seed,
          u = n.call(this, o, new C1(a)) || this;
        return (
          (u.stump = new KM(u)),
          (u.storageTrie = new ao(Qr)),
          l && u.replace(l),
          u
        );
      }
      return (
        (r.prototype.addLayer = function (i, o) {
          return this.stump.addLayer(i, o);
        }),
        (r.prototype.removeLayer = function () {
          return this;
        }),
        (r.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments);
        }),
        r
      );
    })(e);
    e.Root = t;
  })(ks || (ks = {}));
  var Tn = (function (e) {
      Ut(t, e);
      function t(n, r, i, o) {
        var s = e.call(this, r.policies, o) || this;
        return (
          (s.id = n), (s.parent = r), (s.replay = i), (s.group = o), i(s), s
        );
      }
      return (
        (t.prototype.addLayer = function (n, r) {
          return new t(n, this, r, this.group);
        }),
        (t.prototype.removeLayer = function (n) {
          var r = this,
            i = this.parent.removeLayer(n);
          return n === this.id
            ? (this.group.caching &&
                Object.keys(this.data).forEach(function (o) {
                  var s = r.data[o],
                    a = i.lookup(o);
                  a
                    ? s
                      ? s !== a &&
                        Object.keys(s).forEach(function (l) {
                          Ne(s[l], a[l]) || r.group.dirty(o, l);
                        })
                      : (r.group.dirty(o, "__exists"),
                        Object.keys(a).forEach(function (l) {
                          r.group.dirty(o, l);
                        }))
                    : r.delete(o);
                }),
              i)
            : i === this.parent
            ? this
            : i.addLayer(this.id, this.replay);
        }),
        (t.prototype.toObject = function () {
          return A(A({}, this.parent.toObject()), this.data);
        }),
        (t.prototype.findChildRefIds = function (n) {
          var r = this.parent.findChildRefIds(n);
          return De.call(this.data, n)
            ? A(A({}, r), e.prototype.findChildRefIds.call(this, n))
            : r;
        }),
        (t.prototype.getStorage = function () {
          for (var n = this.parent; n.parent; ) n = n.parent;
          return n.getStorage.apply(n, arguments);
        }),
        t
      );
    })(ks),
    KM = (function (e) {
      Ut(t, e);
      function t(n) {
        return (
          e.call(
            this,
            "EntityStore.Stump",
            n,
            function () {},
            new C1(n.group.caching, n.group)
          ) || this
        );
      }
      return (
        (t.prototype.removeLayer = function () {
          return this;
        }),
        (t.prototype.merge = function () {
          return this.parent.merge.apply(this.parent, arguments);
        }),
        t
      );
    })(Tn);
  function ZM(e, t, n) {
    var r = e[n],
      i = t[n];
    return Ne(r, i) ? r : i;
  }
  function Go(e) {
    return !!(e instanceof ks && e.group.caching);
  }
  function JM(e) {
    return ve(e)
      ? Ee(e)
        ? e.slice(0)
        : A({ __proto__: Object.getPrototypeOf(e) }, e)
      : e;
  }
  var Zf = (function () {
      function e() {
        (this.known = new (jj ? WeakSet : Set)()),
          (this.pool = new ao(Qr)),
          (this.passes = new WeakMap()),
          (this.keysByJSON = new Map()),
          (this.empty = this.admit({}));
      }
      return (
        (e.prototype.isKnown = function (t) {
          return ve(t) && this.known.has(t);
        }),
        (e.prototype.pass = function (t) {
          if (ve(t)) {
            var n = JM(t);
            return this.passes.set(n, t), n;
          }
          return t;
        }),
        (e.prototype.admit = function (t) {
          var n = this;
          if (ve(t)) {
            var r = this.passes.get(t);
            if (r) return r;
            var i = Object.getPrototypeOf(t);
            switch (i) {
              case Array.prototype: {
                if (this.known.has(t)) return t;
                var o = t.map(this.admit, this),
                  s = this.pool.lookupArray(o);
                return (
                  s.array ||
                    (this.known.add((s.array = o)),
                    __DEV__ && Object.freeze(o)),
                  s.array
                );
              }
              case null:
              case Object.prototype: {
                if (this.known.has(t)) return t;
                var a = Object.getPrototypeOf(t),
                  l = [a],
                  u = this.sortedKeys(t);
                l.push(u.json);
                var c = l.length;
                u.sorted.forEach(function (p) {
                  l.push(n.admit(t[p]));
                });
                var s = this.pool.lookupArray(l);
                if (!s.object) {
                  var f = (s.object = Object.create(a));
                  this.known.add(f),
                    u.sorted.forEach(function (p, g) {
                      f[p] = l[c + g];
                    }),
                    __DEV__ && Object.freeze(f);
                }
                return s.object;
              }
            }
          }
          return t;
        }),
        (e.prototype.sortedKeys = function (t) {
          var n = Object.keys(t),
            r = this.pool.lookupArray(n);
          if (!r.keys) {
            n.sort();
            var i = JSON.stringify(n);
            (r.keys = this.keysByJSON.get(i)) ||
              this.keysByJSON.set(i, (r.keys = { sorted: n, json: i }));
          }
          return r.keys;
        }),
        e
      );
    })(),
    Pr = Object.assign(
      function (e) {
        if (ve(e)) {
          Jf === void 0 && ay();
          var t = Jf.admit(e),
            n = ed.get(t);
          return n === void 0 && ed.set(t, (n = JSON.stringify(t))), n;
        }
        return JSON.stringify(e);
      },
      { reset: ay }
    ),
    Jf,
    ed;
  function ay() {
    (Jf = new Zf()), (ed = new (Qr ? WeakMap : Map)());
  }
  function ly(e) {
    return [
      e.selectionSet,
      e.objectOrReference,
      e.context,
      e.context.canonizeResults,
    ];
  }
  var eI = (function () {
    function e(t) {
      var n = this;
      (this.knownResults = new (Qr ? WeakMap : Map)()),
        (this.config = uu(t, {
          addTypename: t.addTypename !== !1,
          canonizeResults: E1(t),
        })),
        (this.canon = t.canon || new Zf()),
        (this.executeSelectionSet = _l(
          function (r) {
            var i,
              o = r.context.canonizeResults,
              s = ly(r);
            s[3] = !o;
            var a = (i = n.executeSelectionSet).peek.apply(i, s);
            return a
              ? o
                ? A(A({}, a), { result: n.canon.admit(a.result) })
                : a
              : (sy(r.context.store, r.enclosingRef.__ref),
                n.execSelectionSetImpl(r));
          },
          {
            max: this.config.resultCacheMaxSize,
            keyArgs: ly,
            makeCacheKey: function (r, i, o, s) {
              if (Go(o.store))
                return o.store.makeCacheKey(
                  r,
                  oe(i) ? i.__ref : i,
                  o.varString,
                  s
                );
            },
          }
        )),
        (this.executeSubSelectedArray = _l(
          function (r) {
            return (
              sy(r.context.store, r.enclosingRef.__ref),
              n.execSubSelectedArrayImpl(r)
            );
          },
          {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (r) {
              var i = r.field,
                o = r.array,
                s = r.context;
              if (Go(s.store)) return s.store.makeCacheKey(i, o, s.varString);
            },
          }
        ));
    }
    return (
      (e.prototype.resetCanon = function () {
        this.canon = new Zf();
      }),
      (e.prototype.diffQueryAgainstStore = function (t) {
        var n = t.store,
          r = t.query,
          i = t.rootId,
          o = i === void 0 ? "ROOT_QUERY" : i,
          s = t.variables,
          a = t.returnPartialData,
          l = a === void 0 ? !0 : a,
          u = t.canonizeResults,
          c = u === void 0 ? this.config.canonizeResults : u,
          f = this.config.cache.policies;
        s = A(A({}, Rp(Zx(r))), s);
        var d = Pi(o),
          p = this.executeSelectionSet({
            selectionSet: au(r).selectionSet,
            objectOrReference: d,
            enclosingRef: d,
            context: A(
              {
                store: n,
                query: r,
                policies: f,
                variables: s,
                varString: Pr(s),
                canonizeResults: c,
              },
              k1(r, this.config.fragments)
            ),
          }),
          g;
        if (p.missing && ((g = [new x1(tI(p.missing), p.missing, r, s)]), !l))
          throw g[0];
        return { result: p.result, complete: !g, missing: g };
      }),
      (e.prototype.isFresh = function (t, n, r, i) {
        if (Go(i.store) && this.knownResults.get(t) === r) {
          var o = this.executeSelectionSet.peek(r, n, i, this.canon.isKnown(t));
          if (o && t === o.result) return !0;
        }
        return !1;
      }),
      (e.prototype.execSelectionSetImpl = function (t) {
        var n = this,
          r = t.selectionSet,
          i = t.objectOrReference,
          o = t.enclosingRef,
          s = t.context;
        if (
          oe(i) &&
          !s.policies.rootTypenamesById[i.__ref] &&
          !s.store.has(i.__ref)
        )
          return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(
              i.__ref,
              " object"
            ),
          };
        var a = s.variables,
          l = s.policies,
          u = s.store,
          c = u.getFieldValue(i, "__typename"),
          f = [],
          d,
          p = new ir();
        this.config.addTypename &&
          typeof c == "string" &&
          !l.rootIdsByTypename[c] &&
          f.push({ __typename: c });
        function g(v, w) {
          var E;
          return (
            v.missing && (d = p.merge(d, ((E = {}), (E[w] = v.missing), E))),
            v.result
          );
        }
        var y = new Set(r.selections);
        y.forEach(function (v) {
          var w, E;
          if (iu(v, a))
            if (Br(v)) {
              var _ = l.readField(
                  {
                    fieldName: v.name.value,
                    field: v,
                    variables: s.variables,
                    from: i,
                  },
                  s
                ),
                k = $r(v);
              _ === void 0
                ? jp.added(v) ||
                  (d = p.merge(
                    d,
                    ((w = {}),
                    (w[k] = "Can't find field '"
                      .concat(v.name.value, "' on ")
                      .concat(
                        oe(i)
                          ? i.__ref + " object"
                          : "object " + JSON.stringify(i, null, 2)
                      )),
                    w)
                  ))
                : Ee(_)
                ? (_ = g(
                    n.executeSubSelectedArray({
                      field: v,
                      array: _,
                      enclosingRef: o,
                      context: s,
                    }),
                    k
                  ))
                : v.selectionSet
                ? _ != null &&
                  (_ = g(
                    n.executeSelectionSet({
                      selectionSet: v.selectionSet,
                      objectOrReference: _,
                      enclosingRef: oe(_) ? _ : o,
                      context: s,
                    }),
                    k
                  ))
                : s.canonizeResults && (_ = n.canon.pass(_)),
                _ !== void 0 && f.push(((E = {}), (E[k] = _), E));
            } else {
              var N = Tp(v, s.lookupFragment);
              if (!N && v.kind === Re.FRAGMENT_SPREAD)
                throw __DEV__
                  ? new ie("No fragment named ".concat(v.name.value))
                  : new ie(5);
              N &&
                l.fragmentMatches(N, c) &&
                N.selectionSet.selections.forEach(y.add, y);
            }
        });
        var S = Mp(f),
          m = { result: S, missing: d },
          h = s.canonizeResults ? this.canon.admit(m) : Hf(m);
        return h.result && this.knownResults.set(h.result, r), h;
      }),
      (e.prototype.execSubSelectedArrayImpl = function (t) {
        var n = this,
          r = t.field,
          i = t.array,
          o = t.enclosingRef,
          s = t.context,
          a,
          l = new ir();
        function u(c, f) {
          var d;
          return (
            c.missing && (a = l.merge(a, ((d = {}), (d[f] = c.missing), d))),
            c.result
          );
        }
        return (
          r.selectionSet && (i = i.filter(s.store.canRead)),
          (i = i.map(function (c, f) {
            return c === null
              ? null
              : Ee(c)
              ? u(
                  n.executeSubSelectedArray({
                    field: r,
                    array: c,
                    enclosingRef: o,
                    context: s,
                  }),
                  f
                )
              : r.selectionSet
              ? u(
                  n.executeSelectionSet({
                    selectionSet: r.selectionSet,
                    objectOrReference: c,
                    enclosingRef: oe(c) ? c : o,
                    context: s,
                  }),
                  f
                )
              : (__DEV__ && nI(s.store, r, c), c);
          })),
          { result: s.canonizeResults ? this.canon.admit(i) : i, missing: a }
        );
      }),
      e
    );
  })();
  function tI(e) {
    try {
      JSON.stringify(e, function (t, n) {
        if (typeof n == "string") throw n;
        return n;
      });
    } catch (t) {
      return t;
    }
  }
  function nI(e, t, n) {
    if (!t.selectionSet) {
      var r = new Set([n]);
      r.forEach(function (i) {
        ve(i) &&
          (__DEV__
            ? H(
                !oe(i),
                "Missing selection set for object of type "
                  .concat(XM(e, i), " returned for query field ")
                  .concat(t.name.value)
              )
            : H(!oe(i), 6),
          Object.values(i).forEach(r.add, r));
      });
    }
  }
  var Up = new u1(),
    uy = new WeakMap();
  function Ko(e) {
    var t = uy.get(e);
    return t || uy.set(e, (t = { vars: new Set(), dep: g1() })), t;
  }
  function cy(e) {
    Ko(e).vars.forEach(function (t) {
      return t.forgetCache(e);
    });
  }
  function rI(e) {
    Ko(e).vars.forEach(function (t) {
      return t.attachCache(e);
    });
  }
  function iI(e) {
    var t = new Set(),
      n = new Set(),
      r = function (o) {
        if (arguments.length > 0) {
          if (e !== o) {
            (e = o),
              t.forEach(function (l) {
                Ko(l).dep.dirty(r), oI(l);
              });
            var s = Array.from(n);
            n.clear(),
              s.forEach(function (l) {
                return l(e);
              });
          }
        } else {
          var a = Up.getValue();
          a && (i(a), Ko(a).dep(r));
        }
        return e;
      };
    r.onNextChange = function (o) {
      return (
        n.add(o),
        function () {
          n.delete(o);
        }
      );
    };
    var i = (r.attachCache = function (o) {
      return t.add(o), Ko(o).vars.add(r), r;
    });
    return (
      (r.forgetCache = function (o) {
        return t.delete(o);
      }),
      r
    );
  }
  function oI(e) {
    e.broadcastWatches && e.broadcastWatches();
  }
  var fy = Object.create(null);
  function Qp(e) {
    var t = JSON.stringify(e);
    return fy[t] || (fy[t] = Object.create(null));
  }
  function dy(e) {
    var t = Qp(e);
    return (
      t.keyFieldsFn ||
      (t.keyFieldsFn = function (n, r) {
        var i = function (s, a) {
            return r.readField(a, s);
          },
          o = (r.keyObject = qp(e, function (s) {
            var a = ji(r.storeObject, s, i);
            return (
              a === void 0 &&
                n !== r.storeObject &&
                De.call(n, s[0]) &&
                (a = ji(n, s, O1)),
              __DEV__
                ? H(
                    a !== void 0,
                    "Missing field '"
                      .concat(s.join("."), "' while extracting keyFields from ")
                      .concat(JSON.stringify(n))
                  )
                : H(a !== void 0, 2),
              a
            );
          }));
        return "".concat(r.typename, ":").concat(JSON.stringify(o));
      })
    );
  }
  function py(e) {
    var t = Qp(e);
    return (
      t.keyArgsFn ||
      (t.keyArgsFn = function (n, r) {
        var i = r.field,
          o = r.variables,
          s = r.fieldName,
          a = qp(e, function (u) {
            var c = u[0],
              f = c.charAt(0);
            if (f === "@") {
              if (i && on(i.directives)) {
                var d = c.slice(1),
                  p = i.directives.find(function (m) {
                    return m.name.value === d;
                  }),
                  g = p && ou(p, o);
                return g && ji(g, u.slice(1));
              }
              return;
            }
            if (f === "$") {
              var y = c.slice(1);
              if (o && De.call(o, y)) {
                var S = u.slice(0);
                return (S[0] = y), ji(o, S);
              }
              return;
            }
            if (n) return ji(n, u);
          }),
          l = JSON.stringify(a);
        return (n || l !== "{}") && (s += ":" + l), s;
      })
    );
  }
  function qp(e, t) {
    var n = new ir();
    return N1(e).reduce(function (r, i) {
      var o,
        s = t(i);
      if (s !== void 0) {
        for (var a = i.length - 1; a >= 0; --a)
          s = ((o = {}), (o[i[a]] = s), o);
        r = n.merge(r, s);
      }
      return r;
    }, Object.create(null));
  }
  function N1(e) {
    var t = Qp(e);
    if (!t.paths) {
      var n = (t.paths = []),
        r = [];
      e.forEach(function (i, o) {
        Ee(i)
          ? (N1(i).forEach(function (s) {
              return n.push(r.concat(s));
            }),
            (r.length = 0))
          : (r.push(i), Ee(e[o + 1]) || (n.push(r.slice(0)), (r.length = 0)));
      });
    }
    return t.paths;
  }
  function O1(e, t) {
    return e[t];
  }
  function ji(e, t, n) {
    return (
      (n = n || O1),
      T1(
        t.reduce(function r(i, o) {
          return Ee(i)
            ? i.map(function (s) {
                return r(s, o);
              })
            : i && n(i, o);
        }, e)
      )
    );
  }
  function T1(e) {
    return ve(e)
      ? Ee(e)
        ? e.map(T1)
        : qp(Object.keys(e).sort(), function (t) {
            return ji(e, t);
          })
      : e;
  }
  Dp.setStringify(Pr);
  function td(e) {
    return e.args !== void 0
      ? e.args
      : e.field
      ? ou(e.field, e.variables)
      : null;
  }
  var sI = function () {},
    hy = function (e, t) {
      return t.fieldName;
    },
    my = function (e, t, n) {
      var r = n.mergeObjects;
      return r(e, t);
    },
    vy = function (e, t) {
      return t;
    },
    aI = (function () {
      function e(t) {
        (this.config = t),
          (this.typePolicies = Object.create(null)),
          (this.toBeAdded = Object.create(null)),
          (this.supertypeMap = new Map()),
          (this.fuzzySubtypes = new Map()),
          (this.rootIdsByTypename = Object.create(null)),
          (this.rootTypenamesById = Object.create(null)),
          (this.usingPossibleTypes = !1),
          (this.config = A({ dataIdFromObject: S1 }, t)),
          (this.cache = this.config.cache),
          this.setRootTypename("Query"),
          this.setRootTypename("Mutation"),
          this.setRootTypename("Subscription"),
          t.possibleTypes && this.addPossibleTypes(t.possibleTypes),
          t.typePolicies && this.addTypePolicies(t.typePolicies);
      }
      return (
        (e.prototype.identify = function (t, n) {
          var r,
            i = this,
            o =
              (n &&
                (n.typename ||
                  ((r = n.storeObject) === null || r === void 0
                    ? void 0
                    : r.__typename))) ||
              t.__typename;
          if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
          for (
            var s = (n && n.storeObject) || t,
              a = A(A({}, n), {
                typename: o,
                storeObject: s,
                readField:
                  (n && n.readField) ||
                  function () {
                    var d = Wp(arguments, s);
                    return i.readField(d, {
                      store: i.cache.data,
                      variables: d.variables,
                    });
                  },
              }),
              l,
              u = o && this.getTypePolicy(o),
              c = (u && u.keyFn) || this.config.dataIdFromObject;
            c;

          ) {
            var f = c(A(A({}, t), s), a);
            if (Ee(f)) c = dy(f);
            else {
              l = f;
              break;
            }
          }
          return (
            (l = l ? String(l) : void 0), a.keyObject ? [l, a.keyObject] : [l]
          );
        }),
        (e.prototype.addTypePolicies = function (t) {
          var n = this;
          Object.keys(t).forEach(function (r) {
            var i = t[r],
              o = i.queryType,
              s = i.mutationType,
              a = i.subscriptionType,
              l = Zi(i, ["queryType", "mutationType", "subscriptionType"]);
            o && n.setRootTypename("Query", r),
              s && n.setRootTypename("Mutation", r),
              a && n.setRootTypename("Subscription", r),
              De.call(n.toBeAdded, r)
                ? n.toBeAdded[r].push(l)
                : (n.toBeAdded[r] = [l]);
          });
        }),
        (e.prototype.updateTypePolicy = function (t, n) {
          var r = this,
            i = this.getTypePolicy(t),
            o = n.keyFields,
            s = n.fields;
          function a(l, u) {
            l.merge =
              typeof u == "function"
                ? u
                : u === !0
                ? my
                : u === !1
                ? vy
                : l.merge;
          }
          a(i, n.merge),
            (i.keyFn =
              o === !1
                ? sI
                : Ee(o)
                ? dy(o)
                : typeof o == "function"
                ? o
                : i.keyFn),
            s &&
              Object.keys(s).forEach(function (l) {
                var u = r.getFieldPolicy(t, l, !0),
                  c = s[l];
                if (typeof c == "function") u.read = c;
                else {
                  var f = c.keyArgs,
                    d = c.read,
                    p = c.merge;
                  (u.keyFn =
                    f === !1
                      ? hy
                      : Ee(f)
                      ? py(f)
                      : typeof f == "function"
                      ? f
                      : u.keyFn),
                    typeof d == "function" && (u.read = d),
                    a(u, p);
                }
                u.read && u.merge && (u.keyFn = u.keyFn || hy);
              });
        }),
        (e.prototype.setRootTypename = function (t, n) {
          n === void 0 && (n = t);
          var r = "ROOT_" + t.toUpperCase(),
            i = this.rootTypenamesById[r];
          n !== i &&
            (__DEV__
              ? H(
                  !i || i === t,
                  "Cannot change root ".concat(t, " __typename more than once")
                )
              : H(!i || i === t, 3),
            i && delete this.rootIdsByTypename[i],
            (this.rootIdsByTypename[n] = r),
            (this.rootTypenamesById[r] = n));
        }),
        (e.prototype.addPossibleTypes = function (t) {
          var n = this;
          (this.usingPossibleTypes = !0),
            Object.keys(t).forEach(function (r) {
              n.getSupertypeSet(r, !0),
                t[r].forEach(function (i) {
                  n.getSupertypeSet(i, !0).add(r);
                  var o = i.match(_1);
                  (!o || o[0] !== i) && n.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }),
        (e.prototype.getTypePolicy = function (t) {
          var n = this;
          if (!De.call(this.typePolicies, t)) {
            var r = (this.typePolicies[t] = Object.create(null));
            r.fields = Object.create(null);
            var i = this.supertypeMap.get(t);
            i &&
              i.size &&
              i.forEach(function (s) {
                var a = n.getTypePolicy(s),
                  l = a.fields,
                  u = Zi(a, ["fields"]);
                Object.assign(r, u), Object.assign(r.fields, l);
              });
          }
          var o = this.toBeAdded[t];
          return (
            o &&
              o.length &&
              o.splice(0).forEach(function (s) {
                n.updateTypePolicy(t, s);
              }),
            this.typePolicies[t]
          );
        }),
        (e.prototype.getFieldPolicy = function (t, n, r) {
          if (t) {
            var i = this.getTypePolicy(t).fields;
            return i[n] || (r && (i[n] = Object.create(null)));
          }
        }),
        (e.prototype.getSupertypeSet = function (t, n) {
          var r = this.supertypeMap.get(t);
          return !r && n && this.supertypeMap.set(t, (r = new Set())), r;
        }),
        (e.prototype.fragmentMatches = function (t, n, r, i) {
          var o = this;
          if (!t.typeCondition) return !0;
          if (!n) return !1;
          var s = t.typeCondition.name.value;
          if (n === s) return !0;
          if (this.usingPossibleTypes && this.supertypeMap.has(s))
            for (
              var a = this.getSupertypeSet(n, !0),
                l = [a],
                u = function (g) {
                  var y = o.getSupertypeSet(g, !1);
                  y && y.size && l.indexOf(y) < 0 && l.push(y);
                },
                c = !!(r && this.fuzzySubtypes.size),
                f = !1,
                d = 0;
              d < l.length;
              ++d
            ) {
              var p = l[d];
              if (p.has(s))
                return (
                  a.has(s) ||
                    (f &&
                      __DEV__ &&
                      H.warn(
                        "Inferring subtype "
                          .concat(n, " of supertype ")
                          .concat(s)
                      ),
                    a.add(s)),
                  !0
                );
              p.forEach(u),
                c &&
                  d === l.length - 1 &&
                  Kf(t.selectionSet, r, i) &&
                  ((c = !1),
                  (f = !0),
                  this.fuzzySubtypes.forEach(function (g, y) {
                    var S = n.match(g);
                    S && S[0] === n && u(y);
                  }));
            }
          return !1;
        }),
        (e.prototype.hasKeyArgs = function (t, n) {
          var r = this.getFieldPolicy(t, n, !1);
          return !!(r && r.keyFn);
        }),
        (e.prototype.getStoreFieldName = function (t) {
          var n = t.typename,
            r = t.fieldName,
            i = this.getFieldPolicy(n, r, !1),
            o,
            s = i && i.keyFn;
          if (s && n)
            for (
              var a = {
                  typename: n,
                  fieldName: r,
                  field: t.field || null,
                  variables: t.variables,
                },
                l = td(t);
              s;

            ) {
              var u = s(l, a);
              if (Ee(u)) s = py(u);
              else {
                o = u || r;
                break;
              }
            }
          return (
            o === void 0 &&
              (o = t.field ? uj(t.field, t.variables) : Dp(r, td(t))),
            o === !1 ? r : r === sr(o) ? o : r + ":" + o
          );
        }),
        (e.prototype.readField = function (t, n) {
          var r = t.from;
          if (r) {
            var i = t.field || t.fieldName;
            if (i) {
              if (t.typename === void 0) {
                var o = n.store.getFieldValue(r, "__typename");
                o && (t.typename = o);
              }
              var s = this.getStoreFieldName(t),
                a = sr(s),
                l = n.store.getFieldValue(r, s),
                u = this.getFieldPolicy(t.typename, a, !1),
                c = u && u.read;
              if (c) {
                var f = yy(
                  this,
                  r,
                  t,
                  n,
                  n.store.getStorage(oe(r) ? r.__ref : r, s)
                );
                return Up.withValue(this.cache, c, [l, f]);
              }
              return l;
            }
          }
        }),
        (e.prototype.getReadFunction = function (t, n) {
          var r = this.getFieldPolicy(t, n, !1);
          return r && r.read;
        }),
        (e.prototype.getMergeFunction = function (t, n, r) {
          var i = this.getFieldPolicy(t, n, !1),
            o = i && i.merge;
          return (
            !o && r && ((i = this.getTypePolicy(r)), (o = i && i.merge)), o
          );
        }),
        (e.prototype.runMergeFunction = function (t, n, r, i, o) {
          var s = r.field,
            a = r.typename,
            l = r.merge;
          return l === my
            ? D1(i.store)(t, n)
            : l === vy
            ? n
            : (i.overwrite && (t = void 0),
              l(
                t,
                n,
                yy(
                  this,
                  void 0,
                  {
                    typename: a,
                    fieldName: s.name.value,
                    field: s,
                    variables: i.variables,
                  },
                  i,
                  o || Object.create(null)
                )
              ));
        }),
        e
      );
    })();
  function yy(e, t, n, r, i) {
    var o = e.getStoreFieldName(n),
      s = sr(o),
      a = n.variables || r.variables,
      l = r.store,
      u = l.toReference,
      c = l.canRead;
    return {
      args: td(n),
      field: n.field || null,
      fieldName: s,
      storeFieldName: o,
      variables: a,
      isReference: oe,
      toReference: u,
      storage: i,
      cache: e.cache,
      canRead: c,
      readField: function () {
        return e.readField(Wp(arguments, t, a), r);
      },
      mergeObjects: D1(r.store),
    };
  }
  function Wp(e, t, n) {
    var r = e[0],
      i = e[1],
      o = e.length,
      s;
    return (
      typeof r == "string"
        ? (s = { fieldName: r, from: o > 1 ? i : t })
        : ((s = A({}, r)), De.call(s, "from") || (s.from = t)),
      __DEV__ &&
        s.from === void 0 &&
        __DEV__ &&
        H.warn(
          "Undefined 'from' passed to readField with arguments ".concat(
            Aj(Array.from(e))
          )
        ),
      s.variables === void 0 && (s.variables = n),
      s
    );
  }
  function D1(e) {
    return function (n, r) {
      if (Ee(n) || Ee(r))
        throw __DEV__ ? new ie("Cannot automatically merge arrays") : new ie(4);
      if (ve(n) && ve(r)) {
        var i = e.getFieldValue(n, "__typename"),
          o = e.getFieldValue(r, "__typename"),
          s = i && o && i !== o;
        if (s) return r;
        if (oe(n) && yi(r)) return e.merge(n.__ref, r), n;
        if (yi(n) && oe(r)) return e.merge(n, r.__ref), r;
        if (yi(n) && yi(r)) return A(A({}, n), r);
      }
      return r;
    };
  }
  function fc(e, t, n) {
    var r = "".concat(t).concat(n),
      i = e.flavors.get(r);
    return (
      i ||
        e.flavors.set(
          r,
          (i =
            e.clientOnly === t && e.deferred === n
              ? e
              : A(A({}, e), { clientOnly: t, deferred: n }))
        ),
      i
    );
  }
  var lI = (function () {
      function e(t, n, r) {
        (this.cache = t), (this.reader = n), (this.fragments = r);
      }
      return (
        (e.prototype.writeToStore = function (t, n) {
          var r = this,
            i = n.query,
            o = n.result,
            s = n.dataId,
            a = n.variables,
            l = n.overwrite,
            u = Fs(i),
            c = GM();
          a = A(A({}, Rp(u)), a);
          var f = A(
              A(
                {
                  store: t,
                  written: Object.create(null),
                  merge: function (p, g) {
                    return c.merge(p, g);
                  },
                  variables: a,
                  varString: Pr(a),
                },
                k1(i, this.fragments)
              ),
              {
                overwrite: !!l,
                incomingById: new Map(),
                clientOnly: !1,
                deferred: !1,
                flavors: new Map(),
              }
            ),
            d = this.processSelectionSet({
              result: o || Object.create(null),
              dataId: s,
              selectionSet: u.selectionSet,
              mergeTree: { map: new Map() },
              context: f,
            });
          if (!oe(d))
            throw __DEV__
              ? new ie("Could not identify object ".concat(JSON.stringify(o)))
              : new ie(7);
          return (
            f.incomingById.forEach(function (p, g) {
              var y = p.storeObject,
                S = p.mergeTree,
                m = p.fieldNodeSet,
                h = Pi(g);
              if (S && S.map.size) {
                var v = r.applyMerges(S, h, y, f);
                if (oe(v)) return;
                y = v;
              }
              if (__DEV__ && !f.overwrite) {
                var w = Object.create(null);
                m.forEach(function (k) {
                  k.selectionSet && (w[k.name.value] = !0);
                });
                var E = function (k) {
                    return w[sr(k)] === !0;
                  },
                  _ = function (k) {
                    var N = S && S.map.get(k);
                    return !!(N && N.info && N.info.merge);
                  };
                Object.keys(y).forEach(function (k) {
                  E(k) && !_(k) && uI(h, y, k, f.store);
                });
              }
              t.merge(g, y);
            }),
            t.retain(d.__ref),
            d
          );
        }),
        (e.prototype.processSelectionSet = function (t) {
          var n = this,
            r = t.dataId,
            i = t.result,
            o = t.selectionSet,
            s = t.context,
            a = t.mergeTree,
            l = this.cache.policies,
            u = Object.create(null),
            c =
              (r && l.rootTypenamesById[r]) ||
              Ff(i, o, s.fragmentMap) ||
              (r && s.store.get(r, "__typename"));
          typeof c == "string" && (u.__typename = c);
          var f = function () {
              var v = Wp(arguments, u, s.variables);
              if (oe(v.from)) {
                var w = s.incomingById.get(v.from.__ref);
                if (w) {
                  var E = l.readField(A(A({}, v), { from: w.storeObject }), s);
                  if (E !== void 0) return E;
                }
              }
              return l.readField(v, s);
            },
            d = new Set();
          this.flattenFields(o, i, s, c).forEach(function (v, w) {
            var E,
              _ = $r(w),
              k = i[_];
            if ((d.add(w), k !== void 0)) {
              var N = l.getStoreFieldName({
                  typename: c,
                  fieldName: w.name.value,
                  field: w,
                  variables: v.variables,
                }),
                P = gy(a, N),
                T = n.processFieldValue(
                  k,
                  w,
                  w.selectionSet ? fc(v, !1, !1) : v,
                  P
                ),
                F = void 0;
              w.selectionSet && (oe(T) || yi(T)) && (F = f("__typename", T));
              var z = l.getMergeFunction(c, w.name.value, F);
              z ? (P.info = { field: w, typename: c, merge: z }) : wy(a, N),
                (u = v.merge(u, ((E = {}), (E[N] = T), E)));
            } else __DEV__ && !v.clientOnly && !v.deferred && !jp.added(w) && !l.getReadFunction(c, w.name.value) && __DEV__ && H.error("Missing field '".concat($r(w), "' while writing result ").concat(JSON.stringify(i, null, 2)).substring(0, 1e3));
          });
          try {
            var p = l.identify(i, {
                typename: c,
                selectionSet: o,
                fragmentMap: s.fragmentMap,
                storeObject: u,
                readField: f,
              }),
              g = p[0],
              y = p[1];
            (r = r || g), y && (u = s.merge(u, y));
          } catch (v) {
            if (!r) throw v;
          }
          if (typeof r == "string") {
            var S = Pi(r),
              m = s.written[r] || (s.written[r] = []);
            if (
              m.indexOf(o) >= 0 ||
              (m.push(o), this.reader && this.reader.isFresh(i, S, o, s))
            )
              return S;
            var h = s.incomingById.get(r);
            return (
              h
                ? ((h.storeObject = s.merge(h.storeObject, u)),
                  (h.mergeTree = nd(h.mergeTree, a)),
                  d.forEach(function (v) {
                    return h.fieldNodeSet.add(v);
                  }))
                : s.incomingById.set(r, {
                    storeObject: u,
                    mergeTree: kl(a) ? void 0 : a,
                    fieldNodeSet: d,
                  }),
              S
            );
          }
          return u;
        }),
        (e.prototype.processFieldValue = function (t, n, r, i) {
          var o = this;
          return !n.selectionSet || t === null
            ? __DEV__
              ? i1(t)
              : t
            : Ee(t)
            ? t.map(function (s, a) {
                var l = o.processFieldValue(s, n, r, gy(i, a));
                return wy(i, a), l;
              })
            : this.processSelectionSet({
                result: t,
                selectionSet: n.selectionSet,
                context: r,
                mergeTree: i,
              });
        }),
        (e.prototype.flattenFields = function (t, n, r, i) {
          i === void 0 && (i = Ff(n, t, r.fragmentMap));
          var o = new Map(),
            s = this.cache.policies,
            a = new ao(!1);
          return (
            (function l(u, c) {
              var f = a.lookup(u, c.clientOnly, c.deferred);
              f.visited ||
                ((f.visited = !0),
                u.selections.forEach(function (d) {
                  if (iu(d, r.variables)) {
                    var p = c.clientOnly,
                      g = c.deferred;
                    if (
                      (!(p && g) &&
                        on(d.directives) &&
                        d.directives.forEach(function (m) {
                          var h = m.name.value;
                          if ((h === "client" && (p = !0), h === "defer")) {
                            var v = ou(m, r.variables);
                            (!v || v.if !== !1) && (g = !0);
                          }
                        }),
                      Br(d))
                    ) {
                      var y = o.get(d);
                      y && ((p = p && y.clientOnly), (g = g && y.deferred)),
                        o.set(d, fc(r, p, g));
                    } else {
                      var S = Tp(d, r.lookupFragment);
                      if (!S && d.kind === Re.FRAGMENT_SPREAD)
                        throw __DEV__
                          ? new ie("No fragment named ".concat(d.name.value))
                          : new ie(8);
                      S &&
                        s.fragmentMatches(S, i, n, r.variables) &&
                        l(S.selectionSet, fc(r, p, g));
                    }
                  }
                }));
            })(t, r),
            o
          );
        }),
        (e.prototype.applyMerges = function (t, n, r, i, o) {
          var s,
            a = this;
          if (t.map.size && !oe(r)) {
            var l = !Ee(r) && (oe(n) || yi(n)) ? n : void 0,
              u = r;
            l && !o && (o = [oe(l) ? l.__ref : l]);
            var c,
              f = function (d, p) {
                return Ee(d)
                  ? typeof p == "number"
                    ? d[p]
                    : void 0
                  : i.store.getFieldValue(d, String(p));
              };
            t.map.forEach(function (d, p) {
              var g = f(l, p),
                y = f(u, p);
              if (y !== void 0) {
                o && o.push(p);
                var S = a.applyMerges(d, g, y, i, o);
                S !== y && ((c = c || new Map()), c.set(p, S)),
                  o && H(o.pop() === p);
              }
            }),
              c &&
                ((r = Ee(u) ? u.slice(0) : A({}, u)),
                c.forEach(function (d, p) {
                  r[p] = d;
                }));
          }
          return t.info
            ? this.cache.policies.runMergeFunction(
                n,
                r,
                t.info,
                i,
                o && (s = i.store).getStorage.apply(s, o)
              )
            : r;
        }),
        e
      );
    })(),
    P1 = [];
  function gy(e, t) {
    var n = e.map;
    return n.has(t) || n.set(t, P1.pop() || { map: new Map() }), n.get(t);
  }
  function nd(e, t) {
    if (e === t || !t || kl(t)) return e;
    if (!e || kl(e)) return t;
    var n = e.info && t.info ? A(A({}, e.info), t.info) : e.info || t.info,
      r = e.map.size && t.map.size,
      i = r ? new Map() : e.map.size ? e.map : t.map,
      o = { info: n, map: i };
    if (r) {
      var s = new Set(t.map.keys());
      e.map.forEach(function (a, l) {
        o.map.set(l, nd(a, t.map.get(l))), s.delete(l);
      }),
        s.forEach(function (a) {
          o.map.set(a, nd(t.map.get(a), e.map.get(a)));
        });
    }
    return o;
  }
  function kl(e) {
    return !e || !(e.info || e.map.size);
  }
  function wy(e, t) {
    var n = e.map,
      r = n.get(t);
    r && kl(r) && (P1.push(r), n.delete(t));
  }
  var xy = new Set();
  function uI(e, t, n, r) {
    var i = function (f) {
        var d = r.getFieldValue(f, n);
        return typeof d == "object" && d;
      },
      o = i(e);
    if (o) {
      var s = i(t);
      if (
        s &&
        !oe(o) &&
        !Ne(o, s) &&
        !Object.keys(o).every(function (f) {
          return r.getFieldValue(s, f) !== void 0;
        })
      ) {
        var a =
            r.getFieldValue(e, "__typename") ||
            r.getFieldValue(t, "__typename"),
          l = sr(n),
          u = "".concat(a, ".").concat(l);
        if (!xy.has(u)) {
          xy.add(u);
          var c = [];
          !Ee(o) &&
            !Ee(s) &&
            [o, s].forEach(function (f) {
              var d = r.getFieldValue(f, "__typename");
              typeof d == "string" && !c.includes(d) && c.push(d);
            }),
            __DEV__ &&
              H.warn(
                "Cache data may be lost when replacing the "
                  .concat(l, " field of a ")
                  .concat(
                    a,
                    ` object.

To address this problem (which is not a bug in Apollo Client), `
                  )
                  .concat(
                    c.length
                      ? "either ensure all objects of type " +
                          c.join(" and ") +
                          " have an ID or a custom merge function, or "
                      : "",
                    "define a custom merge function for the "
                  )
                  .concat(
                    u,
                    ` field, so InMemoryCache can safely merge these objects:

  existing: `
                  )
                  .concat(
                    JSON.stringify(o).slice(0, 1e3),
                    `
  incoming: `
                  )
                  .concat(
                    JSON.stringify(s).slice(0, 1e3),
                    `

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`
                  )
              );
        }
      }
    }
  }
  var cI = (function (e) {
      Ut(t, e);
      function t(n) {
        n === void 0 && (n = {});
        var r = e.call(this) || this;
        return (
          (r.watches = new Set()),
          (r.typenameDocumentCache = new Map()),
          (r.makeVar = iI),
          (r.txCount = 0),
          (r.config = YM(n)),
          (r.addTypename = !!r.config.addTypename),
          (r.policies = new aI({
            cache: r,
            dataIdFromObject: r.config.dataIdFromObject,
            possibleTypes: r.config.possibleTypes,
            typePolicies: r.config.typePolicies,
          })),
          r.init(),
          r
        );
      }
      return (
        (t.prototype.init = function () {
          var n = (this.data = new ks.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
          }));
          (this.optimisticData = n.stump), this.resetResultCache();
        }),
        (t.prototype.resetResultCache = function (n) {
          var r = this,
            i = this.storeReader,
            o = this.config.fragments;
          (this.storeWriter = new lI(
            this,
            (this.storeReader = new eI({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: E1(this.config),
              canon: n ? void 0 : i && i.canon,
              fragments: o,
            })),
            o
          )),
            (this.maybeBroadcastWatch = _l(
              function (s, a) {
                return r.broadcastWatch(s, a);
              },
              {
                max: this.config.resultCacheMaxSize,
                makeCacheKey: function (s) {
                  var a = s.optimistic ? r.optimisticData : r.data;
                  if (Go(a)) {
                    var l = s.optimistic,
                      u = s.id,
                      c = s.variables;
                    return a.makeCacheKey(
                      s.query,
                      s.callback,
                      Pr({ optimistic: l, id: u, variables: c })
                    );
                  }
                },
              }
            )),
            new Set([this.data.group, this.optimisticData.group]).forEach(
              function (s) {
                return s.resetCaching();
              }
            );
        }),
        (t.prototype.restore = function (n) {
          return this.init(), n && this.data.replace(n), this;
        }),
        (t.prototype.extract = function (n) {
          return (
            n === void 0 && (n = !1),
            (n ? this.optimisticData : this.data).extract()
          );
        }),
        (t.prototype.read = function (n) {
          var r = n.returnPartialData,
            i = r === void 0 ? !1 : r;
          try {
            return (
              this.storeReader.diffQueryAgainstStore(
                A(A({}, n), {
                  store: n.optimistic ? this.optimisticData : this.data,
                  config: this.config,
                  returnPartialData: i,
                })
              ).result || null
            );
          } catch (o) {
            if (o instanceof x1) return null;
            throw o;
          }
        }),
        (t.prototype.write = function (n) {
          try {
            return ++this.txCount, this.storeWriter.writeToStore(this.data, n);
          } finally {
            !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
          }
        }),
        (t.prototype.modify = function (n) {
          if (De.call(n, "id") && !n.id) return !1;
          var r = n.optimistic ? this.optimisticData : this.data;
          try {
            return ++this.txCount, r.modify(n.id || "ROOT_QUERY", n.fields);
          } finally {
            !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
          }
        }),
        (t.prototype.diff = function (n) {
          return this.storeReader.diffQueryAgainstStore(
            A(A({}, n), {
              store: n.optimistic ? this.optimisticData : this.data,
              rootId: n.id || "ROOT_QUERY",
              config: this.config,
            })
          );
        }),
        (t.prototype.watch = function (n) {
          var r = this;
          return (
            this.watches.size || rI(this),
            this.watches.add(n),
            n.immediate && this.maybeBroadcastWatch(n),
            function () {
              r.watches.delete(n) && !r.watches.size && cy(r),
                r.maybeBroadcastWatch.forget(n);
            }
          );
        }),
        (t.prototype.gc = function (n) {
          Pr.reset();
          var r = this.optimisticData.gc();
          return (
            n &&
              !this.txCount &&
              (n.resetResultCache
                ? this.resetResultCache(n.resetResultIdentities)
                : n.resetResultIdentities && this.storeReader.resetCanon()),
            r
          );
        }),
        (t.prototype.retain = function (n, r) {
          return (r ? this.optimisticData : this.data).retain(n);
        }),
        (t.prototype.release = function (n, r) {
          return (r ? this.optimisticData : this.data).release(n);
        }),
        (t.prototype.identify = function (n) {
          if (oe(n)) return n.__ref;
          try {
            return this.policies.identify(n)[0];
          } catch (r) {
            __DEV__ && H.warn(r);
          }
        }),
        (t.prototype.evict = function (n) {
          if (!n.id) {
            if (De.call(n, "id")) return !1;
            n = A(A({}, n), { id: "ROOT_QUERY" });
          }
          try {
            return ++this.txCount, this.optimisticData.evict(n, this.data);
          } finally {
            !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
          }
        }),
        (t.prototype.reset = function (n) {
          var r = this;
          return (
            this.init(),
            Pr.reset(),
            n && n.discardWatches
              ? (this.watches.forEach(function (i) {
                  return r.maybeBroadcastWatch.forget(i);
                }),
                this.watches.clear(),
                cy(this))
              : this.broadcastWatches(),
            Promise.resolve()
          );
        }),
        (t.prototype.removeOptimistic = function (n) {
          var r = this.optimisticData.removeLayer(n);
          r !== this.optimisticData &&
            ((this.optimisticData = r), this.broadcastWatches());
        }),
        (t.prototype.batch = function (n) {
          var r = this,
            i = n.update,
            o = n.optimistic,
            s = o === void 0 ? !0 : o,
            a = n.removeOptimistic,
            l = n.onWatchUpdated,
            u,
            c = function (d) {
              var p = r,
                g = p.data,
                y = p.optimisticData;
              ++r.txCount, d && (r.data = r.optimisticData = d);
              try {
                return (u = i(r));
              } finally {
                --r.txCount, (r.data = g), (r.optimisticData = y);
              }
            },
            f = new Set();
          return (
            l &&
              !this.txCount &&
              this.broadcastWatches(
                A(A({}, n), {
                  onWatchUpdated: function (d) {
                    return f.add(d), !1;
                  },
                })
              ),
            typeof s == "string"
              ? (this.optimisticData = this.optimisticData.addLayer(s, c))
              : s === !1
              ? c(this.data)
              : c(),
            typeof a == "string" &&
              (this.optimisticData = this.optimisticData.removeLayer(a)),
            l && f.size
              ? (this.broadcastWatches(
                  A(A({}, n), {
                    onWatchUpdated: function (d, p) {
                      var g = l.call(this, d, p);
                      return g !== !1 && f.delete(d), g;
                    },
                  })
                ),
                f.size &&
                  f.forEach(function (d) {
                    return r.maybeBroadcastWatch.dirty(d);
                  }))
              : this.broadcastWatches(n),
            u
          );
        }),
        (t.prototype.performTransaction = function (n, r) {
          return this.batch({ update: n, optimistic: r || r !== null });
        }),
        (t.prototype.transformDocument = function (n) {
          if (this.addTypename) {
            var r = this.typenameDocumentCache.get(n);
            return (
              r ||
                ((r = jp(n)),
                this.typenameDocumentCache.set(n, r),
                this.typenameDocumentCache.set(r, r)),
              r
            );
          }
          return n;
        }),
        (t.prototype.transformForLink = function (n) {
          var r = this.config.fragments;
          return r ? r.transform(n) : n;
        }),
        (t.prototype.broadcastWatches = function (n) {
          var r = this;
          this.txCount ||
            this.watches.forEach(function (i) {
              return r.maybeBroadcastWatch(i, n);
            });
        }),
        (t.prototype.broadcastWatch = function (n, r) {
          var i = n.lastDiff,
            o = this.diff(n);
          (r &&
            (n.optimistic &&
              typeof r.optimistic == "string" &&
              (o.fromOptimisticTransaction = !0),
            r.onWatchUpdated && r.onWatchUpdated.call(this, n, o, i) === !1)) ||
            ((!i || !Ne(i.result, o.result)) &&
              n.callback((n.lastDiff = o), i));
        }),
        t
      );
    })(HM),
    ae;
  (function (e) {
    (e[(e.loading = 1)] = "loading"),
      (e[(e.setVariables = 2)] = "setVariables"),
      (e[(e.fetchMore = 3)] = "fetchMore"),
      (e[(e.refetch = 4)] = "refetch"),
      (e[(e.poll = 6)] = "poll"),
      (e[(e.ready = 7)] = "ready"),
      (e[(e.error = 8)] = "error");
  })(ae || (ae = {}));
  function Cs(e) {
    return e ? e < 7 : !1;
  }
  var fI = Object.assign,
    dI = Object.hasOwnProperty,
    rd = (function (e) {
      Ut(t, e);
      function t(n) {
        var r = n.queryManager,
          i = n.queryInfo,
          o = n.options,
          s =
            e.call(this, function (S) {
              try {
                var m = S._subscription._observer;
                m && !m.error && (m.error = pI);
              } catch {}
              var h = !s.observers.size;
              s.observers.add(S);
              var v = s.last;
              return (
                v && v.error
                  ? S.error && S.error(v.error)
                  : v && v.result && S.next && S.next(v.result),
                h && s.reobserve().catch(function () {}),
                function () {
                  s.observers.delete(S) &&
                    !s.observers.size &&
                    s.tearDownQuery();
                }
              );
            }) || this;
        (s.observers = new Set()),
          (s.subscriptions = new Set()),
          (s.queryInfo = i),
          (s.queryManager = r),
          (s.isTornDown = !1);
        var a = r.defaultOptions.watchQuery,
          l = a === void 0 ? {} : a,
          u = l.fetchPolicy,
          c = u === void 0 ? "cache-first" : u,
          f = o.fetchPolicy,
          d = f === void 0 ? c : f,
          p = o.initialFetchPolicy,
          g = p === void 0 ? (d === "standby" ? c : d) : p;
        (s.options = A(A({}, o), { initialFetchPolicy: g, fetchPolicy: d })),
          (s.queryId = i.queryId || r.generateQueryId());
        var y = Fs(s.query);
        return (s.queryName = y && y.name && y.name.value), s;
      }
      return (
        Object.defineProperty(t.prototype, "query", {
          get: function () {
            return this.queryManager.transform(this.options.query).document;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "variables", {
          get: function () {
            return this.options.variables;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.result = function () {
          var n = this;
          return new Promise(function (r, i) {
            var o = {
                next: function (a) {
                  r(a),
                    n.observers.delete(o),
                    n.observers.size || n.queryManager.removeQuery(n.queryId),
                    setTimeout(function () {
                      s.unsubscribe();
                    }, 0);
                },
                error: i,
              },
              s = n.subscribe(o);
          });
        }),
        (t.prototype.getCurrentResult = function (n) {
          n === void 0 && (n = !0);
          var r = this.getLastResult(!0),
            i =
              this.queryInfo.networkStatus ||
              (r && r.networkStatus) ||
              ae.ready,
            o = A(A({}, r), { loading: Cs(i), networkStatus: i }),
            s = this.options.fetchPolicy,
            a = s === void 0 ? "cache-first" : s;
          if (
            !(
              a === "network-only" ||
              a === "no-cache" ||
              a === "standby" ||
              this.queryManager.transform(this.options.query).hasForcedResolvers
            )
          ) {
            var l = this.queryInfo.getDiff();
            (l.complete || this.options.returnPartialData) &&
              (o.data = l.result),
              Ne(o.data, {}) && (o.data = void 0),
              l.complete
                ? (delete o.partial,
                  l.complete &&
                    o.networkStatus === ae.loading &&
                    (a === "cache-first" || a === "cache-only") &&
                    ((o.networkStatus = ae.ready), (o.loading = !1)))
                : (o.partial = !0),
              __DEV__ &&
                !l.complete &&
                !this.options.partialRefetch &&
                !o.loading &&
                !o.data &&
                !o.error &&
                j1(l.missing);
          }
          return n && this.updateLastResult(o), o;
        }),
        (t.prototype.isDifferentFromLastResult = function (n, r) {
          return (
            !this.last ||
            !Ne(this.last.result, n) ||
            (r && !Ne(this.last.variables, r))
          );
        }),
        (t.prototype.getLast = function (n, r) {
          var i = this.last;
          if (i && i[n] && (!r || Ne(i.variables, this.variables))) return i[n];
        }),
        (t.prototype.getLastResult = function (n) {
          return this.getLast("result", n);
        }),
        (t.prototype.getLastError = function (n) {
          return this.getLast("error", n);
        }),
        (t.prototype.resetLastResults = function () {
          delete this.last, (this.isTornDown = !1);
        }),
        (t.prototype.resetQueryStoreErrors = function () {
          this.queryManager.resetErrors(this.queryId);
        }),
        (t.prototype.refetch = function (n) {
          var r,
            i = { pollInterval: 0 },
            o = this.options.fetchPolicy;
          if (
            (o === "cache-and-network"
              ? (i.fetchPolicy = o)
              : o === "no-cache"
              ? (i.fetchPolicy = "no-cache")
              : (i.fetchPolicy = "network-only"),
            __DEV__ && n && dI.call(n, "variables"))
          ) {
            var s = Zx(this.query),
              a = s.variableDefinitions;
            (!a ||
              !a.some(function (l) {
                return l.variable.name.value === "variables";
              })) &&
              __DEV__ &&
              H.warn(
                "Called refetch("
                  .concat(JSON.stringify(n), ") for query ")
                  .concat(
                    ((r = s.name) === null || r === void 0
                      ? void 0
                      : r.value) || JSON.stringify(s),
                    `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`
                  )
              );
          }
          return (
            n &&
              !Ne(this.options.variables, n) &&
              (i.variables = this.options.variables =
                A(A({}, this.options.variables), n)),
            this.queryInfo.resetLastWrite(),
            this.reobserve(i, ae.refetch)
          );
        }),
        (t.prototype.fetchMore = function (n) {
          var r = this,
            i = A(
              A(
                {},
                n.query
                  ? n
                  : A(A(A(A({}, this.options), { query: this.query }), n), {
                      variables: A(A({}, this.options.variables), n.variables),
                    })
              ),
              { fetchPolicy: "no-cache" }
            ),
            o = this.queryManager.generateQueryId(),
            s = this.queryInfo,
            a = s.networkStatus;
          (s.networkStatus = ae.fetchMore),
            i.notifyOnNetworkStatusChange && this.observe();
          var l = new Set();
          return this.queryManager
            .fetchQuery(o, i, ae.fetchMore)
            .then(function (u) {
              return (
                r.queryManager.removeQuery(o),
                s.networkStatus === ae.fetchMore && (s.networkStatus = a),
                r.queryManager.cache.batch({
                  update: function (c) {
                    var f = n.updateQuery;
                    f
                      ? c.updateQuery(
                          {
                            query: r.query,
                            variables: r.variables,
                            returnPartialData: !0,
                            optimistic: !1,
                          },
                          function (d) {
                            return f(d, {
                              fetchMoreResult: u.data,
                              variables: i.variables,
                            });
                          }
                        )
                      : c.writeQuery({
                          query: i.query,
                          variables: i.variables,
                          data: u.data,
                        });
                  },
                  onWatchUpdated: function (c) {
                    l.add(c.query);
                  },
                }),
                u
              );
            })
            .finally(function () {
              l.has(r.query) || R1(r);
            });
        }),
        (t.prototype.subscribeToMore = function (n) {
          var r = this,
            i = this.queryManager
              .startGraphQLSubscription({
                query: n.document,
                variables: n.variables,
                context: n.context,
              })
              .subscribe({
                next: function (o) {
                  var s = n.updateQuery;
                  s &&
                    r.updateQuery(function (a, l) {
                      var u = l.variables;
                      return s(a, { subscriptionData: o, variables: u });
                    });
                },
                error: function (o) {
                  if (n.onError) {
                    n.onError(o);
                    return;
                  }
                  __DEV__ && H.error("Unhandled GraphQL subscription error", o);
                },
              });
          return (
            this.subscriptions.add(i),
            function () {
              r.subscriptions.delete(i) && i.unsubscribe();
            }
          );
        }),
        (t.prototype.setOptions = function (n) {
          return this.reobserve(n);
        }),
        (t.prototype.setVariables = function (n) {
          return Ne(this.variables, n)
            ? this.observers.size
              ? this.result()
              : Promise.resolve()
            : ((this.options.variables = n),
              this.observers.size
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: n,
                    },
                    ae.setVariables
                  )
                : Promise.resolve());
        }),
        (t.prototype.updateQuery = function (n) {
          var r = this.queryManager,
            i = r.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1,
            }).result,
            o = n(i, { variables: this.variables });
          o &&
            (r.cache.writeQuery({
              query: this.options.query,
              data: o,
              variables: this.variables,
            }),
            r.broadcastQueries());
        }),
        (t.prototype.startPolling = function (n) {
          (this.options.pollInterval = n), this.updatePolling();
        }),
        (t.prototype.stopPolling = function () {
          (this.options.pollInterval = 0), this.updatePolling();
        }),
        (t.prototype.applyNextFetchPolicy = function (n, r) {
          if (r.nextFetchPolicy) {
            var i = r.fetchPolicy,
              o = i === void 0 ? "cache-first" : i,
              s = r.initialFetchPolicy,
              a = s === void 0 ? o : s;
            o === "standby" ||
              (typeof r.nextFetchPolicy == "function"
                ? (r.fetchPolicy = r.nextFetchPolicy(o, {
                    reason: n,
                    options: r,
                    observable: this,
                    initialFetchPolicy: a,
                  }))
                : n === "variables-changed"
                ? (r.fetchPolicy = a)
                : (r.fetchPolicy = r.nextFetchPolicy));
          }
          return r.fetchPolicy;
        }),
        (t.prototype.fetch = function (n, r) {
          return (
            this.queryManager.setObservableQuery(this),
            this.queryManager.fetchConcastWithInfo(this.queryId, n, r)
          );
        }),
        (t.prototype.updatePolling = function () {
          var n = this;
          if (!this.queryManager.ssrMode) {
            var r = this,
              i = r.pollingInfo,
              o = r.options.pollInterval;
            if (!o) {
              i && (clearTimeout(i.timeout), delete this.pollingInfo);
              return;
            }
            if (!(i && i.interval === o)) {
              __DEV__
                ? H(
                    o,
                    "Attempted to start a polling query without a polling interval."
                  )
                : H(o, 13);
              var s = i || (this.pollingInfo = {});
              s.interval = o;
              var a = function () {
                  n.pollingInfo &&
                    (Cs(n.queryInfo.networkStatus)
                      ? l()
                      : n
                          .reobserve(
                            {
                              fetchPolicy:
                                n.options.initialFetchPolicy === "no-cache"
                                  ? "no-cache"
                                  : "network-only",
                            },
                            ae.poll
                          )
                          .then(l, l));
                },
                l = function () {
                  var u = n.pollingInfo;
                  u &&
                    (clearTimeout(u.timeout),
                    (u.timeout = setTimeout(a, u.interval)));
                };
              l();
            }
          }
        }),
        (t.prototype.updateLastResult = function (n, r) {
          return (
            r === void 0 && (r = this.variables),
            (this.last = A(A({}, this.last), {
              result: this.queryManager.assumeImmutableResults ? n : i1(n),
              variables: r,
            })),
            on(n.errors) || delete this.last.error,
            this.last
          );
        }),
        (t.prototype.reobserveAsConcast = function (n, r) {
          var i = this;
          this.isTornDown = !1;
          var o = r === ae.refetch || r === ae.fetchMore || r === ae.poll,
            s = this.options.variables,
            a = this.options.fetchPolicy,
            l = uu(this.options, n || {}),
            u = o ? l : fI(this.options, l);
          o ||
            (this.updatePolling(),
            n &&
              n.variables &&
              !Ne(n.variables, s) &&
              u.fetchPolicy !== "standby" &&
              u.fetchPolicy === a &&
              (this.applyNextFetchPolicy("variables-changed", u),
              r === void 0 && (r = ae.setVariables)));
          var c = u.variables && A({}, u.variables),
            f = this.fetch(u, r),
            d = f.concast,
            p = f.fromLink,
            g = {
              next: function (y) {
                i.reportResult(y, c);
              },
              error: function (y) {
                i.reportError(y, c);
              },
            };
          return (
            !o &&
              p &&
              (this.concast &&
                this.observer &&
                this.concast.removeObserver(this.observer),
              (this.concast = d),
              (this.observer = g)),
            d.addObserver(g),
            d
          );
        }),
        (t.prototype.reobserve = function (n, r) {
          return this.reobserveAsConcast(n, r).promise;
        }),
        (t.prototype.observe = function () {
          this.reportResult(this.getCurrentResult(!1), this.variables);
        }),
        (t.prototype.reportResult = function (n, r) {
          var i = this.getLastError();
          (i || this.isDifferentFromLastResult(n, r)) &&
            ((i || !n.partial || this.options.returnPartialData) &&
              this.updateLastResult(n, r),
            Xo(this.observers, "next", n));
        }),
        (t.prototype.reportError = function (n, r) {
          var i = A(A({}, this.getLastResult()), {
            error: n,
            errors: n.graphQLErrors,
            networkStatus: ae.error,
            loading: !1,
          });
          this.updateLastResult(i, r),
            Xo(this.observers, "error", (this.last.error = n));
        }),
        (t.prototype.hasObservers = function () {
          return this.observers.size > 0;
        }),
        (t.prototype.tearDownQuery = function () {
          this.isTornDown ||
            (this.concast &&
              this.observer &&
              (this.concast.removeObserver(this.observer),
              delete this.concast,
              delete this.observer),
            this.stopPolling(),
            this.subscriptions.forEach(function (n) {
              return n.unsubscribe();
            }),
            this.subscriptions.clear(),
            this.queryManager.stopQuery(this.queryId),
            this.observers.clear(),
            (this.isTornDown = !0));
        }),
        t
      );
    })(de);
  o1(rd);
  function R1(e) {
    var t = e.options,
      n = t.fetchPolicy,
      r = t.nextFetchPolicy;
    return n === "cache-and-network" || n === "network-only"
      ? e.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function () {
            return (
              (this.nextFetchPolicy = r),
              typeof r == "function" ? r.apply(this, arguments) : n
            );
          },
        })
      : e.reobserve();
  }
  function pI(e) {
    __DEV__ && H.error("Unhandled error", e.message, e.stack);
  }
  function j1(e) {
    __DEV__ &&
      e &&
      __DEV__ &&
      H.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
  }
  var M1 = (function () {
      function e(t) {
        var n = t.cache,
          r = t.client,
          i = t.resolvers,
          o = t.fragmentMatcher;
        (this.selectionsToResolveCache = new WeakMap()),
          (this.cache = n),
          r && (this.client = r),
          i && this.addResolvers(i),
          o && this.setFragmentMatcher(o);
      }
      return (
        (e.prototype.addResolvers = function (t) {
          var n = this;
          (this.resolvers = this.resolvers || {}),
            Array.isArray(t)
              ? t.forEach(function (r) {
                  n.resolvers = Fv(n.resolvers, r);
                })
              : (this.resolvers = Fv(this.resolvers, t));
        }),
        (e.prototype.setResolvers = function (t) {
          (this.resolvers = {}), this.addResolvers(t);
        }),
        (e.prototype.getResolvers = function () {
          return this.resolvers || {};
        }),
        (e.prototype.runResolvers = function (t) {
          var n = t.document,
            r = t.remoteResult,
            i = t.context,
            o = t.variables,
            s = t.onlyRunForcedResolvers,
            a = s === void 0 ? !1 : s;
          return In(this, void 0, void 0, function () {
            return Ln(this, function (l) {
              return n
                ? [
                    2,
                    this.resolveDocument(
                      n,
                      r.data,
                      i,
                      o,
                      this.fragmentMatcher,
                      a
                    ).then(function (u) {
                      return A(A({}, r), { data: u.result });
                    }),
                  ]
                : [2, r];
            });
          });
        }),
        (e.prototype.setFragmentMatcher = function (t) {
          this.fragmentMatcher = t;
        }),
        (e.prototype.getFragmentMatcher = function () {
          return this.fragmentMatcher;
        }),
        (e.prototype.clientQuery = function (t) {
          return Np(["client"], t) && this.resolvers ? t : null;
        }),
        (e.prototype.serverQuery = function (t) {
          return wj(t);
        }),
        (e.prototype.prepareContext = function (t) {
          var n = this.cache;
          return A(A({}, t), {
            cache: n,
            getCacheKey: function (r) {
              return n.identify(r);
            },
          });
        }),
        (e.prototype.addExportedVariables = function (t, n, r) {
          return (
            n === void 0 && (n = {}),
            r === void 0 && (r = {}),
            In(this, void 0, void 0, function () {
              return Ln(this, function (i) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        this.buildRootValueFromCache(t, n) || {},
                        this.prepareContext(r),
                        n
                      ).then(function (o) {
                        return A(A({}, n), o.exportedVariables);
                      }),
                    ]
                  : [2, A({}, n)];
              });
            })
          );
        }),
        (e.prototype.shouldForceResolvers = function (t) {
          var n = !1;
          return (
            En(t, {
              Directive: {
                enter: function (r) {
                  if (
                    r.name.value === "client" &&
                    r.arguments &&
                    ((n = r.arguments.some(function (i) {
                      return (
                        i.name.value === "always" &&
                        i.value.kind === "BooleanValue" &&
                        i.value.value === !0
                      );
                    })),
                    n)
                  )
                    return Cp;
                },
              },
            }),
            n
          );
        }),
        (e.prototype.buildRootValueFromCache = function (t, n) {
          return this.cache.diff({
            query: gj(t),
            variables: n,
            returnPartialData: !0,
            optimistic: !1,
          }).result;
        }),
        (e.prototype.resolveDocument = function (t, n, r, i, o, s) {
          return (
            r === void 0 && (r = {}),
            i === void 0 && (i = {}),
            o === void 0 &&
              (o = function () {
                return !0;
              }),
            s === void 0 && (s = !1),
            In(this, void 0, void 0, function () {
              var a, l, u, c, f, d, p, g, y, S, m;
              return Ln(this, function (h) {
                return (
                  (a = au(t)),
                  (l = Pp(t)),
                  (u = Op(l)),
                  (c = this.collectSelectionsToResolve(a, u)),
                  (f = a.operation),
                  (d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query"),
                  (p = this),
                  (g = p.cache),
                  (y = p.client),
                  (S = {
                    fragmentMap: u,
                    context: A(A({}, r), { cache: g, client: y }),
                    variables: i,
                    fragmentMatcher: o,
                    defaultOperationType: d,
                    exportedVariables: {},
                    selectionsToResolve: c,
                    onlyRunForcedResolvers: s,
                  }),
                  (m = !1),
                  [
                    2,
                    this.resolveSelectionSet(a.selectionSet, m, n, S).then(
                      function (v) {
                        return {
                          result: v,
                          exportedVariables: S.exportedVariables,
                        };
                      }
                    ),
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.resolveSelectionSet = function (t, n, r, i) {
          return In(this, void 0, void 0, function () {
            var o,
              s,
              a,
              l,
              u,
              c = this;
            return Ln(this, function (f) {
              return (
                (o = i.fragmentMap),
                (s = i.context),
                (a = i.variables),
                (l = [r]),
                (u = function (d) {
                  return In(c, void 0, void 0, function () {
                    var p, g;
                    return Ln(this, function (y) {
                      return !n && !i.selectionsToResolve.has(d)
                        ? [2]
                        : iu(d, a)
                        ? Br(d)
                          ? [
                              2,
                              this.resolveField(d, n, r, i).then(function (S) {
                                var m;
                                typeof S < "u" &&
                                  l.push(((m = {}), (m[$r(d)] = S), m));
                              }),
                            ]
                          : (dj(d)
                              ? (p = d)
                              : ((p = o[d.name.value]),
                                __DEV__
                                  ? H(
                                      p,
                                      "No fragment named ".concat(d.name.value)
                                    )
                                  : H(p, 11)),
                            p &&
                            p.typeCondition &&
                            ((g = p.typeCondition.name.value),
                            i.fragmentMatcher(r, g, s))
                              ? [
                                  2,
                                  this.resolveSelectionSet(
                                    p.selectionSet,
                                    n,
                                    r,
                                    i
                                  ).then(function (S) {
                                    l.push(S);
                                  }),
                                ]
                              : [2])
                        : [2];
                    });
                  });
                }),
                [
                  2,
                  Promise.all(t.selections.map(u)).then(function () {
                    return Mp(l);
                  }),
                ]
              );
            });
          });
        }),
        (e.prototype.resolveField = function (t, n, r, i) {
          return In(this, void 0, void 0, function () {
            var o,
              s,
              a,
              l,
              u,
              c,
              f,
              d,
              p,
              g = this;
            return Ln(this, function (y) {
              return r
                ? ((o = i.variables),
                  (s = t.name.value),
                  (a = $r(t)),
                  (l = s !== a),
                  (u = r[a] || r[s]),
                  (c = Promise.resolve(u)),
                  (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) &&
                    ((f = r.__typename || i.defaultOperationType),
                    (d = this.resolvers && this.resolvers[f]),
                    d &&
                      ((p = d[l ? s : a]),
                      p &&
                        (c = Promise.resolve(
                          Up.withValue(this.cache, p, [
                            r,
                            ou(t, o),
                            i.context,
                            { field: t, fragmentMap: i.fragmentMap },
                          ])
                        )))),
                  [
                    2,
                    c.then(function (S) {
                      var m, h;
                      if (
                        (S === void 0 && (S = u),
                        t.directives &&
                          t.directives.forEach(function (w) {
                            w.name.value === "export" &&
                              w.arguments &&
                              w.arguments.forEach(function (E) {
                                E.name.value === "as" &&
                                  E.value.kind === "StringValue" &&
                                  (i.exportedVariables[E.value.value] = S);
                              });
                          }),
                        !t.selectionSet || S == null)
                      )
                        return S;
                      var v =
                        (h =
                          (m = t.directives) === null || m === void 0
                            ? void 0
                            : m.some(function (w) {
                                return w.name.value === "client";
                              })) !== null && h !== void 0
                          ? h
                          : !1;
                      if (Array.isArray(S))
                        return g.resolveSubSelectedArray(t, n || v, S, i);
                      if (t.selectionSet)
                        return g.resolveSelectionSet(
                          t.selectionSet,
                          n || v,
                          S,
                          i
                        );
                    }),
                  ])
                : [2, null];
            });
          });
        }),
        (e.prototype.resolveSubSelectedArray = function (t, n, r, i) {
          var o = this;
          return Promise.all(
            r.map(function (s) {
              if (s === null) return null;
              if (Array.isArray(s))
                return o.resolveSubSelectedArray(t, n, s, i);
              if (t.selectionSet)
                return o.resolveSelectionSet(t.selectionSet, n, s, i);
            })
          );
        }),
        (e.prototype.collectSelectionsToResolve = function (t, n) {
          var r = function (s) {
              return !Array.isArray(s);
            },
            i = this.selectionsToResolveCache;
          function o(s) {
            if (!i.has(s)) {
              var a = new Set();
              i.set(s, a),
                En(s, {
                  Directive: function (l, u, c, f, d) {
                    l.name.value === "client" &&
                      d.forEach(function (p) {
                        r(p) && Iv(p) && a.add(p);
                      });
                  },
                  FragmentSpread: function (l, u, c, f, d) {
                    var p = n[l.name.value];
                    __DEV__
                      ? H(p, "No fragment named ".concat(l.name.value))
                      : H(p, 12);
                    var g = o(p);
                    g.size > 0 &&
                      (d.forEach(function (y) {
                        r(y) && Iv(y) && a.add(y);
                      }),
                      a.add(l),
                      g.forEach(function (y) {
                        a.add(y);
                      }));
                  },
                });
            }
            return i.get(s);
          }
          return o(t);
        }),
        e
      );
    })(),
    gi = new (Qr ? WeakMap : Map)();
  function dc(e, t) {
    var n = e[t];
    typeof n == "function" &&
      (e[t] = function () {
        return gi.set(e, (gi.get(e) + 1) % 1e15), n.apply(this, arguments);
      });
  }
  function Sy(e) {
    e.notifyTimeout &&
      (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
  }
  var pc = (function () {
    function e(t, n) {
      n === void 0 && (n = t.generateQueryId()),
        (this.queryId = n),
        (this.listeners = new Set()),
        (this.document = null),
        (this.lastRequestId = 1),
        (this.subscriptions = new Set()),
        (this.stopped = !1),
        (this.dirty = !1),
        (this.observableQuery = null);
      var r = (this.cache = t.cache);
      gi.has(r) ||
        (gi.set(r, 0), dc(r, "evict"), dc(r, "modify"), dc(r, "reset"));
    }
    return (
      (e.prototype.init = function (t) {
        var n = t.networkStatus || ae.loading;
        return (
          this.variables &&
            this.networkStatus !== ae.loading &&
            !Ne(this.variables, t.variables) &&
            (n = ae.setVariables),
          Ne(t.variables, this.variables) || (this.lastDiff = void 0),
          Object.assign(this, {
            document: t.document,
            variables: t.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: n,
          }),
          t.observableQuery && this.setObservableQuery(t.observableQuery),
          t.lastRequestId && (this.lastRequestId = t.lastRequestId),
          this
        );
      }),
      (e.prototype.reset = function () {
        Sy(this), (this.dirty = !1);
      }),
      (e.prototype.getDiff = function (t) {
        t === void 0 && (t = this.variables);
        var n = this.getDiffOptions(t);
        if (this.lastDiff && Ne(n, this.lastDiff.options))
          return this.lastDiff.diff;
        this.updateWatch((this.variables = t));
        var r = this.observableQuery;
        if (r && r.options.fetchPolicy === "no-cache") return { complete: !1 };
        var i = this.cache.diff(n);
        return this.updateLastDiff(i, n), i;
      }),
      (e.prototype.updateLastDiff = function (t, n) {
        this.lastDiff = t
          ? { diff: t, options: n || this.getDiffOptions() }
          : void 0;
      }),
      (e.prototype.getDiffOptions = function (t) {
        var n;
        return (
          t === void 0 && (t = this.variables),
          {
            query: this.document,
            variables: t,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults:
              (n = this.observableQuery) === null || n === void 0
                ? void 0
                : n.options.canonizeResults,
          }
        );
      }),
      (e.prototype.setDiff = function (t) {
        var n = this,
          r = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(t),
          !this.dirty &&
            !Ne(r && r.result, t && t.result) &&
            ((this.dirty = !0),
            this.notifyTimeout ||
              (this.notifyTimeout = setTimeout(function () {
                return n.notify();
              }, 0)));
      }),
      (e.prototype.setObservableQuery = function (t) {
        var n = this;
        t !== this.observableQuery &&
          (this.oqListener && this.listeners.delete(this.oqListener),
          (this.observableQuery = t),
          t
            ? ((t.queryInfo = this),
              this.listeners.add(
                (this.oqListener = function () {
                  var r = n.getDiff();
                  r.fromOptimisticTransaction ? t.observe() : R1(t);
                })
              ))
            : delete this.oqListener);
      }),
      (e.prototype.notify = function () {
        var t = this;
        Sy(this),
          this.shouldNotify() &&
            this.listeners.forEach(function (n) {
              return n(t);
            }),
          (this.dirty = !1);
      }),
      (e.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) return !1;
        if (Cs(this.networkStatus) && this.observableQuery) {
          var t = this.observableQuery.options.fetchPolicy;
          if (t !== "cache-only" && t !== "cache-and-network") return !1;
        }
        return !0;
      }),
      (e.prototype.stop = function () {
        if (!this.stopped) {
          (this.stopped = !0),
            this.reset(),
            this.cancel(),
            (this.cancel = e.prototype.cancel),
            this.subscriptions.forEach(function (n) {
              return n.unsubscribe();
            });
          var t = this.observableQuery;
          t && t.stopPolling();
        }
      }),
      (e.prototype.cancel = function () {}),
      (e.prototype.updateWatch = function (t) {
        var n = this;
        t === void 0 && (t = this.variables);
        var r = this.observableQuery;
        if (!(r && r.options.fetchPolicy === "no-cache")) {
          var i = A(A({}, this.getDiffOptions(t)), {
            watcher: this,
            callback: function (o) {
              return n.setDiff(o);
            },
          });
          (!this.lastWatch || !Ne(i, this.lastWatch)) &&
            (this.cancel(),
            (this.cancel = this.cache.watch((this.lastWatch = i))));
        }
      }),
      (e.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
      }),
      (e.prototype.shouldWrite = function (t, n) {
        var r = this.lastWrite;
        return !(
          r &&
          r.dmCount === gi.get(this.cache) &&
          Ne(n, r.variables) &&
          Ne(t.data, r.result.data)
        );
      }),
      (e.prototype.markResult = function (t, n, r, i) {
        var o = this,
          s = new ir(),
          a = on(t.errors) ? t.errors.slice(0) : [];
        if ((this.reset(), "incremental" in t && on(t.incremental))) {
          var l = s1(this.getDiff().result, t);
          t.data = l;
        } else if ("hasNext" in t && t.hasNext) {
          var u = this.getDiff();
          t.data = s.merge(u.result, t.data);
        }
        (this.graphQLErrors = a),
          r.fetchPolicy === "no-cache"
            ? this.updateLastDiff(
                { result: t.data, complete: !0 },
                this.getDiffOptions(r.variables)
              )
            : i !== 0 &&
              (id(t, r.errorPolicy)
                ? this.cache.performTransaction(function (c) {
                    if (o.shouldWrite(t, r.variables))
                      c.writeQuery({
                        query: n,
                        data: t.data,
                        variables: r.variables,
                        overwrite: i === 1,
                      }),
                        (o.lastWrite = {
                          result: t,
                          variables: r.variables,
                          dmCount: gi.get(o.cache),
                        });
                    else if (o.lastDiff && o.lastDiff.diff.complete) {
                      t.data = o.lastDiff.diff.result;
                      return;
                    }
                    var f = o.getDiffOptions(r.variables),
                      d = c.diff(f);
                    o.stopped || o.updateWatch(r.variables),
                      o.updateLastDiff(d, f),
                      d.complete && (t.data = d.result);
                  })
                : (this.lastWrite = void 0));
      }),
      (e.prototype.markReady = function () {
        return (this.networkError = null), (this.networkStatus = ae.ready);
      }),
      (e.prototype.markError = function (t) {
        return (
          (this.networkStatus = ae.error),
          (this.lastWrite = void 0),
          this.reset(),
          t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors),
          t.networkError && (this.networkError = t.networkError),
          t
        );
      }),
      e
    );
  })();
  function id(e, t) {
    t === void 0 && (t = "none");
    var n = t === "ignore" || t === "all",
      r = !Fa(e);
    return !r && n && e.data && (r = !0), r;
  }
  var hI = Object.prototype.hasOwnProperty,
    mI = (function () {
      function e(t) {
        var n = t.cache,
          r = t.link,
          i = t.defaultOptions,
          o = t.queryDeduplication,
          s = o === void 0 ? !1 : o,
          a = t.onBroadcast,
          l = t.ssrMode,
          u = l === void 0 ? !1 : l,
          c = t.clientAwareness,
          f = c === void 0 ? {} : c,
          d = t.localState,
          p = t.assumeImmutableResults;
        (this.clientAwareness = {}),
          (this.queries = new Map()),
          (this.fetchCancelFns = new Map()),
          (this.transformCache = new (Qr ? WeakMap : Map)()),
          (this.queryIdCounter = 1),
          (this.requestIdCounter = 1),
          (this.mutationIdCounter = 1),
          (this.inFlightLinkObservables = new Map()),
          (this.cache = n),
          (this.link = r),
          (this.defaultOptions = i || Object.create(null)),
          (this.queryDeduplication = s),
          (this.clientAwareness = f),
          (this.localState = d || new M1({ cache: n })),
          (this.ssrMode = u),
          (this.assumeImmutableResults = !!p),
          (this.onBroadcast = a) && (this.mutationStore = Object.create(null));
      }
      return (
        (e.prototype.stop = function () {
          var t = this;
          this.queries.forEach(function (n, r) {
            t.stopQueryNoBroadcast(r);
          }),
            this.cancelPendingFetches(
              __DEV__
                ? new ie("QueryManager stopped while query was in flight")
                : new ie(14)
            );
        }),
        (e.prototype.cancelPendingFetches = function (t) {
          this.fetchCancelFns.forEach(function (n) {
            return n(t);
          }),
            this.fetchCancelFns.clear();
        }),
        (e.prototype.mutate = function (t) {
          var n,
            r,
            i = t.mutation,
            o = t.variables,
            s = t.optimisticResponse,
            a = t.updateQueries,
            l = t.refetchQueries,
            u = l === void 0 ? [] : l,
            c = t.awaitRefetchQueries,
            f = c === void 0 ? !1 : c,
            d = t.update,
            p = t.onQueryUpdated,
            g = t.fetchPolicy,
            y =
              g === void 0
                ? ((n = this.defaultOptions.mutate) === null || n === void 0
                    ? void 0
                    : n.fetchPolicy) || "network-only"
                : g,
            S = t.errorPolicy,
            m =
              S === void 0
                ? ((r = this.defaultOptions.mutate) === null || r === void 0
                    ? void 0
                    : r.errorPolicy) || "none"
                : S,
            h = t.keepRootFields,
            v = t.context;
          return In(this, void 0, void 0, function () {
            var w, E, _, k, N, P;
            return Ln(this, function (T) {
              switch (T.label) {
                case 0:
                  return (
                    __DEV__
                      ? H(
                          i,
                          "mutation option is required. You must specify your GraphQL document in the mutation option."
                        )
                      : H(i, 15),
                    __DEV__
                      ? H(
                          y === "network-only" || y === "no-cache",
                          "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                        )
                      : H(y === "network-only" || y === "no-cache", 16),
                    (w = this.generateMutationId()),
                    (E = this.transform(i)),
                    (_ = E.document),
                    (k = E.hasClientExports),
                    (i = this.cache.transformForLink(_)),
                    (o = this.getVariables(i, o)),
                    k
                      ? [4, this.localState.addExportedVariables(i, o, v)]
                      : [3, 2]
                  );
                case 1:
                  (o = T.sent()), (T.label = 2);
                case 2:
                  return (
                    (N =
                      this.mutationStore &&
                      (this.mutationStore[w] = {
                        mutation: i,
                        variables: o,
                        loading: !0,
                        error: null,
                      })),
                    s &&
                      this.markMutationOptimistic(s, {
                        mutationId: w,
                        document: i,
                        variables: o,
                        fetchPolicy: y,
                        errorPolicy: m,
                        context: v,
                        updateQueries: a,
                        update: d,
                        keepRootFields: h,
                      }),
                    this.broadcastQueries(),
                    (P = this),
                    [
                      2,
                      new Promise(function (F, z) {
                        return ic(
                          P.getObservableFromLink(
                            i,
                            A(A({}, v), { optimisticResponse: s }),
                            o,
                            !1
                          ),
                          function (R) {
                            if (Fa(R) && m === "none")
                              throw new Jr({ graphQLErrors: Uf(R) });
                            N && ((N.loading = !1), (N.error = null));
                            var C = A({}, R);
                            return (
                              typeof u == "function" && (u = u(C)),
                              m === "ignore" && Fa(C) && delete C.errors,
                              P.markMutationResult({
                                mutationId: w,
                                result: C,
                                document: i,
                                variables: o,
                                fetchPolicy: y,
                                errorPolicy: m,
                                context: v,
                                update: d,
                                updateQueries: a,
                                awaitRefetchQueries: f,
                                refetchQueries: u,
                                removeOptimistic: s ? w : void 0,
                                onQueryUpdated: p,
                                keepRootFields: h,
                              })
                            );
                          }
                        ).subscribe({
                          next: function (R) {
                            P.broadcastQueries(),
                              (!("hasNext" in R) || R.hasNext === !1) && F(R);
                          },
                          error: function (R) {
                            N && ((N.loading = !1), (N.error = R)),
                              s && P.cache.removeOptimistic(w),
                              P.broadcastQueries(),
                              z(
                                R instanceof Jr
                                  ? R
                                  : new Jr({ networkError: R })
                              );
                          },
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.markMutationResult = function (t, n) {
          var r = this;
          n === void 0 && (n = this.cache);
          var i = t.result,
            o = [],
            s = t.fetchPolicy === "no-cache";
          if (!s && id(i, t.errorPolicy)) {
            if (
              (Ri(i) ||
                o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: t.document,
                  variables: t.variables,
                }),
              Ri(i) && on(i.incremental))
            ) {
              var a = n.diff({
                  id: "ROOT_MUTATION",
                  query: this.transform(t.document).asQuery,
                  variables: t.variables,
                  optimistic: !1,
                  returnPartialData: !0,
                }),
                l = void 0;
              a.result && (l = s1(a.result, i)),
                typeof l < "u" &&
                  ((i.data = l),
                  o.push({
                    result: l,
                    dataId: "ROOT_MUTATION",
                    query: t.document,
                    variables: t.variables,
                  }));
            }
            var u = t.updateQueries;
            u &&
              this.queries.forEach(function (f, d) {
                var p = f.observableQuery,
                  g = p && p.queryName;
                if (!(!g || !hI.call(u, g))) {
                  var y = u[g],
                    S = r.queries.get(d),
                    m = S.document,
                    h = S.variables,
                    v = n.diff({
                      query: m,
                      variables: h,
                      returnPartialData: !0,
                      optimistic: !1,
                    }),
                    w = v.result,
                    E = v.complete;
                  if (E && w) {
                    var _ = y(w, {
                      mutationResult: i,
                      queryName: (m && zf(m)) || void 0,
                      queryVariables: h,
                    });
                    _ &&
                      o.push({
                        result: _,
                        dataId: "ROOT_QUERY",
                        query: m,
                        variables: h,
                      });
                  }
                }
              });
          }
          if (
            o.length > 0 ||
            t.refetchQueries ||
            t.update ||
            t.onQueryUpdated ||
            t.removeOptimistic
          ) {
            var c = [];
            if (
              (this.refetchQueries({
                updateCache: function (f) {
                  s ||
                    o.forEach(function (y) {
                      return f.write(y);
                    });
                  var d = t.update,
                    p = !Ij(i) || (Ri(i) && !i.hasNext);
                  if (d) {
                    if (!s) {
                      var g = f.diff({
                        id: "ROOT_MUTATION",
                        query: r.transform(t.document).asQuery,
                        variables: t.variables,
                        optimistic: !1,
                        returnPartialData: !0,
                      });
                      g.complete &&
                        ((i = A(A({}, i), { data: g.result })),
                        "incremental" in i && delete i.incremental,
                        "hasNext" in i && delete i.hasNext);
                    }
                    p &&
                      d(f, i, { context: t.context, variables: t.variables });
                  }
                  !s &&
                    !t.keepRootFields &&
                    p &&
                    f.modify({
                      id: "ROOT_MUTATION",
                      fields: function (y, S) {
                        var m = S.fieldName,
                          h = S.DELETE;
                        return m === "__typename" ? y : h;
                      },
                    });
                },
                include: t.refetchQueries,
                optimistic: !1,
                removeOptimistic: t.removeOptimistic,
                onQueryUpdated: t.onQueryUpdated || null,
              }).forEach(function (f) {
                return c.push(f);
              }),
              t.awaitRefetchQueries || t.onQueryUpdated)
            )
              return Promise.all(c).then(function () {
                return i;
              });
          }
          return Promise.resolve(i);
        }),
        (e.prototype.markMutationOptimistic = function (t, n) {
          var r = this,
            i = typeof t == "function" ? t(n.variables) : t;
          return this.cache.recordOptimisticTransaction(function (o) {
            try {
              r.markMutationResult(A(A({}, n), { result: { data: i } }), o);
            } catch (s) {
              __DEV__ && H.error(s);
            }
          }, n.mutationId);
        }),
        (e.prototype.fetchQuery = function (t, n, r) {
          return this.fetchQueryObservable(t, n, r).promise;
        }),
        (e.prototype.getQueryStore = function () {
          var t = Object.create(null);
          return (
            this.queries.forEach(function (n, r) {
              t[r] = {
                variables: n.variables,
                networkStatus: n.networkStatus,
                networkError: n.networkError,
                graphQLErrors: n.graphQLErrors,
              };
            }),
            t
          );
        }),
        (e.prototype.resetErrors = function (t) {
          var n = this.queries.get(t);
          n && ((n.networkError = void 0), (n.graphQLErrors = []));
        }),
        (e.prototype.transform = function (t) {
          var n = this.transformCache;
          if (!n.has(t)) {
            var r = this.cache.transformDocument(t),
              i = yj(r),
              o = this.localState.clientQuery(r),
              s = i && this.localState.serverQuery(i),
              a = {
                document: r,
                hasClientExports: XR(r),
                hasForcedResolvers: this.localState.shouldForceResolvers(r),
                clientQuery: o,
                serverQuery: s,
                defaultVars: Rp(Fs(r)),
                asQuery: A(A({}, r), {
                  definitions: r.definitions.map(function (u) {
                    return u.kind === "OperationDefinition" &&
                      u.operation !== "query"
                      ? A(A({}, u), { operation: "query" })
                      : u;
                  }),
                }),
              },
              l = function (u) {
                u && !n.has(u) && n.set(u, a);
              };
            l(t), l(r), l(o), l(s);
          }
          return n.get(t);
        }),
        (e.prototype.getVariables = function (t, n) {
          return A(A({}, this.transform(t).defaultVars), n);
        }),
        (e.prototype.watchQuery = function (t) {
          (t = A(A({}, t), {
            variables: this.getVariables(t.query, t.variables),
          })),
            typeof t.notifyOnNetworkStatusChange > "u" &&
              (t.notifyOnNetworkStatusChange = !1);
          var n = new pc(this),
            r = new rd({ queryManager: this, queryInfo: n, options: t });
          return (
            this.queries.set(r.queryId, n),
            n.init({
              document: r.query,
              observableQuery: r,
              variables: r.variables,
            }),
            r
          );
        }),
        (e.prototype.query = function (t, n) {
          var r = this;
          return (
            n === void 0 && (n = this.generateQueryId()),
            __DEV__
              ? H(
                  t.query,
                  "query option is required. You must specify your GraphQL document in the query option."
                )
              : H(t.query, 17),
            __DEV__
              ? H(
                  t.query.kind === "Document",
                  'You must wrap the query string in a "gql" tag.'
                )
              : H(t.query.kind === "Document", 18),
            __DEV__
              ? H(
                  !t.returnPartialData,
                  "returnPartialData option only supported on watchQuery."
                )
              : H(!t.returnPartialData, 19),
            __DEV__
              ? H(
                  !t.pollInterval,
                  "pollInterval option only supported on watchQuery."
                )
              : H(!t.pollInterval, 20),
            this.fetchQuery(n, t).finally(function () {
              return r.stopQuery(n);
            })
          );
        }),
        (e.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++);
        }),
        (e.prototype.generateRequestId = function () {
          return this.requestIdCounter++;
        }),
        (e.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++);
        }),
        (e.prototype.stopQueryInStore = function (t) {
          this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
        }),
        (e.prototype.stopQueryInStoreNoBroadcast = function (t) {
          var n = this.queries.get(t);
          n && n.stop();
        }),
        (e.prototype.clearStore = function (t) {
          return (
            t === void 0 && (t = { discardWatches: !0 }),
            this.cancelPendingFetches(
              __DEV__
                ? new ie(
                    "Store reset while query was in flight (not completed in link chain)"
                  )
                : new ie(21)
            ),
            this.queries.forEach(function (n) {
              n.observableQuery ? (n.networkStatus = ae.loading) : n.stop();
            }),
            this.mutationStore && (this.mutationStore = Object.create(null)),
            this.cache.reset(t)
          );
        }),
        (e.prototype.getObservableQueries = function (t) {
          var n = this;
          t === void 0 && (t = "active");
          var r = new Map(),
            i = new Map(),
            o = new Set();
          return (
            Array.isArray(t) &&
              t.forEach(function (s) {
                typeof s == "string"
                  ? i.set(s, !1)
                  : JR(s)
                  ? i.set(n.transform(s).document, !1)
                  : ve(s) && s.query && o.add(s);
              }),
            this.queries.forEach(function (s, a) {
              var l = s.observableQuery,
                u = s.document;
              if (l) {
                if (t === "all") {
                  r.set(a, l);
                  return;
                }
                var c = l.queryName,
                  f = l.options.fetchPolicy;
                if (f === "standby" || (t === "active" && !l.hasObservers()))
                  return;
                (t === "active" || (c && i.has(c)) || (u && i.has(u))) &&
                  (r.set(a, l), c && i.set(c, !0), u && i.set(u, !0));
              }
            }),
            o.size &&
              o.forEach(function (s) {
                var a = Qf("legacyOneTimeQuery"),
                  l = n
                    .getQuery(a)
                    .init({ document: s.query, variables: s.variables }),
                  u = new rd({
                    queryManager: n,
                    queryInfo: l,
                    options: A(A({}, s), { fetchPolicy: "network-only" }),
                  });
                H(u.queryId === a), l.setObservableQuery(u), r.set(a, u);
              }),
            __DEV__ &&
              i.size &&
              i.forEach(function (s, a) {
                s ||
                  (__DEV__ &&
                    H.warn(
                      "Unknown query "
                        .concat(typeof a == "string" ? "named " : "")
                        .concat(
                          JSON.stringify(a, null, 2),
                          " requested in refetchQueries options.include array"
                        )
                    ));
              }),
            r
          );
        }),
        (e.prototype.reFetchObservableQueries = function (t) {
          var n = this;
          t === void 0 && (t = !1);
          var r = [];
          return (
            this.getObservableQueries(t ? "all" : "active").forEach(function (
              i,
              o
            ) {
              var s = i.options.fetchPolicy;
              i.resetLastResults(),
                (t || (s !== "standby" && s !== "cache-only")) &&
                  r.push(i.refetch()),
                n.getQuery(o).setDiff(null);
            }),
            this.broadcastQueries(),
            Promise.all(r)
          );
        }),
        (e.prototype.setObservableQuery = function (t) {
          this.getQuery(t.queryId).setObservableQuery(t);
        }),
        (e.prototype.startGraphQLSubscription = function (t) {
          var n = this,
            r = t.query,
            i = t.fetchPolicy,
            o = t.errorPolicy,
            s = t.variables,
            a = t.context,
            l = a === void 0 ? {} : a;
          (r = this.transform(r).document), (s = this.getVariables(r, s));
          var u = function (f) {
            return n.getObservableFromLink(r, l, f).map(function (d) {
              i !== "no-cache" &&
                (id(d, o) &&
                  n.cache.write({
                    query: r,
                    result: d.data,
                    dataId: "ROOT_SUBSCRIPTION",
                    variables: f,
                  }),
                n.broadcastQueries());
              var p = Fa(d),
                g = Jj(d);
              if (p || g) {
                var y = {};
                throw (
                  (p && (y.graphQLErrors = d.errors),
                  g && (y.protocolErrors = d.extensions[$p]),
                  new Jr(y))
                );
              }
              return d;
            });
          };
          if (this.transform(r).hasClientExports) {
            var c = this.localState.addExportedVariables(r, s, l).then(u);
            return new de(function (f) {
              var d = null;
              return (
                c.then(function (p) {
                  return (d = p.subscribe(f));
                }, f.error),
                function () {
                  return d && d.unsubscribe();
                }
              );
            });
          }
          return u(s);
        }),
        (e.prototype.stopQuery = function (t) {
          this.stopQueryNoBroadcast(t), this.broadcastQueries();
        }),
        (e.prototype.stopQueryNoBroadcast = function (t) {
          this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
        }),
        (e.prototype.removeQuery = function (t) {
          this.fetchCancelFns.delete(t),
            this.queries.has(t) &&
              (this.getQuery(t).stop(), this.queries.delete(t));
        }),
        (e.prototype.broadcastQueries = function () {
          this.onBroadcast && this.onBroadcast(),
            this.queries.forEach(function (t) {
              return t.notify();
            });
        }),
        (e.prototype.getLocalState = function () {
          return this.localState;
        }),
        (e.prototype.getObservableFromLink = function (t, n, r, i) {
          var o = this,
            s;
          i === void 0 &&
            (i =
              (s = n == null ? void 0 : n.queryDeduplication) !== null &&
              s !== void 0
                ? s
                : this.queryDeduplication);
          var a,
            l = this.transform(t).serverQuery;
          if (l) {
            var u = this,
              c = u.inFlightLinkObservables,
              f = u.link,
              d = {
                query: l,
                variables: r,
                operationName: zf(l) || void 0,
                context: this.prepareContext(A(A({}, n), { forceFetch: !i })),
              };
            if (((n = d.context), i)) {
              var p = c.get(l) || new Map();
              c.set(l, p);
              var g = Pr(r);
              if (((a = p.get(g)), !a)) {
                var y = new ni([Wf(f, d)]);
                p.set(g, (a = y)),
                  y.beforeNext(function () {
                    p.delete(g) && p.size < 1 && c.delete(l);
                  });
              }
            } else a = new ni([Wf(f, d)]);
          } else
            (a = new ni([de.of({ data: {} })])), (n = this.prepareContext(n));
          var S = this.transform(t).clientQuery;
          return (
            S &&
              (a = ic(a, function (m) {
                return o.localState.runResolvers({
                  document: S,
                  remoteResult: m,
                  context: n,
                  variables: r,
                });
              })),
            a
          );
        }),
        (e.prototype.getResultsFromLink = function (t, n, r) {
          var i = (t.lastRequestId = this.generateRequestId()),
            o = this.cache.transformForLink(
              this.transform(t.document).document
            );
          return ic(
            this.getObservableFromLink(o, r.context, r.variables),
            function (s) {
              var a = Uf(s),
                l = a.length > 0;
              if (i >= t.lastRequestId) {
                if (l && r.errorPolicy === "none")
                  throw t.markError(new Jr({ graphQLErrors: a }));
                t.markResult(s, o, r, n), t.markReady();
              }
              var u = { data: s.data, loading: !1, networkStatus: ae.ready };
              return (
                l &&
                  r.errorPolicy !== "ignore" &&
                  ((u.errors = a), (u.networkStatus = ae.error)),
                u
              );
            },
            function (s) {
              var a = eM(s) ? s : new Jr({ networkError: s });
              throw (i >= t.lastRequestId && t.markError(a), a);
            }
          );
        }),
        (e.prototype.fetchQueryObservable = function (t, n, r) {
          return this.fetchConcastWithInfo(t, n, r).concast;
        }),
        (e.prototype.fetchConcastWithInfo = function (t, n, r) {
          var i = this;
          r === void 0 && (r = ae.loading);
          var o = this.transform(n.query).document,
            s = this.getVariables(o, n.variables),
            a = this.getQuery(t),
            l = this.defaultOptions.watchQuery,
            u = n.fetchPolicy,
            c = u === void 0 ? (l && l.fetchPolicy) || "cache-first" : u,
            f = n.errorPolicy,
            d = f === void 0 ? (l && l.errorPolicy) || "none" : f,
            p = n.returnPartialData,
            g = p === void 0 ? !1 : p,
            y = n.notifyOnNetworkStatusChange,
            S = y === void 0 ? !1 : y,
            m = n.context,
            h = m === void 0 ? {} : m,
            v = Object.assign({}, n, {
              query: o,
              variables: s,
              fetchPolicy: c,
              errorPolicy: d,
              returnPartialData: g,
              notifyOnNetworkStatusChange: S,
              context: h,
            }),
            w = function (P) {
              v.variables = P;
              var T = i.fetchQueryByPolicy(a, v, r);
              return (
                v.fetchPolicy !== "standby" &&
                  T.sources.length > 0 &&
                  a.observableQuery &&
                  a.observableQuery.applyNextFetchPolicy("after-fetch", n),
                T
              );
            },
            E = function () {
              return i.fetchCancelFns.delete(t);
            };
          this.fetchCancelFns.set(t, function (P) {
            E(),
              setTimeout(function () {
                return _.cancel(P);
              });
          });
          var _, k;
          if (this.transform(v.query).hasClientExports)
            (_ = new ni(
              this.localState
                .addExportedVariables(v.query, v.variables, v.context)
                .then(w)
                .then(function (P) {
                  return P.sources;
                })
            )),
              (k = !0);
          else {
            var N = w(v.variables);
            (k = N.fromLink), (_ = new ni(N.sources));
          }
          return _.promise.then(E, E), { concast: _, fromLink: k };
        }),
        (e.prototype.refetchQueries = function (t) {
          var n = this,
            r = t.updateCache,
            i = t.include,
            o = t.optimistic,
            s = o === void 0 ? !1 : o,
            a = t.removeOptimistic,
            l = a === void 0 ? (s ? Qf("refetchQueries") : void 0) : a,
            u = t.onQueryUpdated,
            c = new Map();
          i &&
            this.getObservableQueries(i).forEach(function (d, p) {
              c.set(p, { oq: d, lastDiff: n.getQuery(p).getDiff() });
            });
          var f = new Map();
          return (
            r &&
              this.cache.batch({
                update: r,
                optimistic: (s && l) || !1,
                removeOptimistic: l,
                onWatchUpdated: function (d, p, g) {
                  var y = d.watcher instanceof pc && d.watcher.observableQuery;
                  if (y) {
                    if (u) {
                      c.delete(y.queryId);
                      var S = u(y, p, g);
                      return (
                        S === !0 && (S = y.refetch()),
                        S !== !1 && f.set(y, S),
                        S
                      );
                    }
                    u !== null &&
                      c.set(y.queryId, { oq: y, lastDiff: g, diff: p });
                  }
                },
              }),
            c.size &&
              c.forEach(function (d, p) {
                var g = d.oq,
                  y = d.lastDiff,
                  S = d.diff,
                  m;
                if (u) {
                  if (!S) {
                    var h = g.queryInfo;
                    h.reset(), (S = h.getDiff());
                  }
                  m = u(g, S, y);
                }
                (!u || m === !0) && (m = g.refetch()),
                  m !== !1 && f.set(g, m),
                  p.indexOf("legacyOneTimeQuery") >= 0 &&
                    n.stopQueryNoBroadcast(p);
              }),
            l && this.cache.removeOptimistic(l),
            f
          );
        }),
        (e.prototype.fetchQueryByPolicy = function (t, n, r) {
          var i = this,
            o = n.query,
            s = n.variables,
            a = n.fetchPolicy,
            l = n.refetchWritePolicy,
            u = n.errorPolicy,
            c = n.returnPartialData,
            f = n.context,
            d = n.notifyOnNetworkStatusChange,
            p = t.networkStatus;
          t.init({
            document: this.transform(o).document,
            variables: s,
            networkStatus: r,
          });
          var g = function () {
              return t.getDiff(s);
            },
            y = function (w, E) {
              E === void 0 && (E = t.networkStatus || ae.loading);
              var _ = w.result;
              __DEV__ && !c && !Ne(_, {}) && j1(w.missing);
              var k = function (N) {
                return de.of(
                  A(
                    { data: N, loading: Cs(E), networkStatus: E },
                    w.complete ? null : { partial: !0 }
                  )
                );
              };
              return _ && i.transform(o).hasForcedResolvers
                ? i.localState
                    .runResolvers({
                      document: o,
                      remoteResult: { data: _ },
                      context: f,
                      variables: s,
                      onlyRunForcedResolvers: !0,
                    })
                    .then(function (N) {
                      return k(N.data || void 0);
                    })
                : u === "none" && E === ae.refetch && Array.isArray(w.missing)
                ? k(void 0)
                : k(_);
            },
            S =
              a === "no-cache" ? 0 : r === ae.refetch && l !== "merge" ? 1 : 2,
            m = function () {
              return i.getResultsFromLink(t, S, {
                variables: s,
                context: f,
                fetchPolicy: a,
                errorPolicy: u,
              });
            },
            h = d && typeof p == "number" && p !== r && Cs(r);
          switch (a) {
            default:
            case "cache-first": {
              var v = g();
              return v.complete
                ? { fromLink: !1, sources: [y(v, t.markReady())] }
                : c || h
                ? { fromLink: !0, sources: [y(v), m()] }
                : { fromLink: !0, sources: [m()] };
            }
            case "cache-and-network": {
              var v = g();
              return v.complete || c || h
                ? { fromLink: !0, sources: [y(v), m()] }
                : { fromLink: !0, sources: [m()] };
            }
            case "cache-only":
              return { fromLink: !1, sources: [y(g(), t.markReady())] };
            case "network-only":
              return h
                ? { fromLink: !0, sources: [y(g()), m()] }
                : { fromLink: !0, sources: [m()] };
            case "no-cache":
              return h
                ? { fromLink: !0, sources: [y(t.getDiff()), m()] }
                : { fromLink: !0, sources: [m()] };
            case "standby":
              return { fromLink: !1, sources: [] };
          }
        }),
        (e.prototype.getQuery = function (t) {
          return (
            t && !this.queries.has(t) && this.queries.set(t, new pc(this, t)),
            this.queries.get(t)
          );
        }),
        (e.prototype.prepareContext = function (t) {
          t === void 0 && (t = {});
          var n = this.localState.prepareContext(t);
          return A(A({}, n), { clientAwareness: this.clientAwareness });
        }),
        e
      );
    })(),
    by = !1,
    vI = (function () {
      function e(t) {
        var n = this;
        (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
        var r = t.uri,
          i = t.credentials,
          o = t.headers,
          s = t.cache,
          a = t.ssrMode,
          l = a === void 0 ? !1 : a,
          u = t.ssrForceFetchDelay,
          c = u === void 0 ? 0 : u,
          f = t.connectToDevTools,
          d =
            f === void 0
              ? typeof window == "object" &&
                !window.__APOLLO_CLIENT__ &&
                __DEV__
              : f,
          p = t.queryDeduplication,
          g = p === void 0 ? !0 : p,
          y = t.defaultOptions,
          S = t.assumeImmutableResults,
          m = S === void 0 ? !1 : S,
          h = t.resolvers,
          v = t.typeDefs,
          w = t.fragmentMatcher,
          E = t.name,
          _ = t.version,
          k = t.link;
        if (
          (k ||
            (k = r
              ? new gM({ uri: r, credentials: i, headers: o })
              : zs.empty()),
          !s)
        )
          throw __DEV__
            ? new ie(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`)
            : new ie(9);
        if (
          ((this.link = k),
          (this.cache = s),
          (this.disableNetworkFetches = l || c > 0),
          (this.queryDeduplication = g),
          (this.defaultOptions = y || Object.create(null)),
          (this.typeDefs = v),
          c &&
            setTimeout(function () {
              return (n.disableNetworkFetches = !1);
            }, c),
          (this.watchQuery = this.watchQuery.bind(this)),
          (this.query = this.query.bind(this)),
          (this.mutate = this.mutate.bind(this)),
          (this.resetStore = this.resetStore.bind(this)),
          (this.reFetchObservableQueries =
            this.reFetchObservableQueries.bind(this)),
          d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this),
          !by &&
            d &&
            __DEV__ &&
            ((by = !0),
            typeof window < "u" &&
              window.document &&
              window.top === window.self &&
              !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
        ) {
          var N = window.navigator,
            P = N && N.userAgent,
            T = void 0;
          typeof P == "string" &&
            (P.indexOf("Chrome/") > -1
              ? (T =
                  "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
              : P.indexOf("Firefox/") > -1 &&
                (T =
                  "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
            T &&
              __DEV__ &&
              H.log(
                "Download the Apollo DevTools for a better development experience: " +
                  T
              );
        }
        (this.version = Vj),
          (this.localState = new M1({
            cache: s,
            client: this,
            resolvers: h,
            fragmentMatcher: w,
          })),
          (this.queryManager = new mI({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: g,
            ssrMode: l,
            clientAwareness: { name: E, version: _ },
            localState: this.localState,
            assumeImmutableResults: m,
            onBroadcast: d
              ? function () {
                  n.devToolsHookCb &&
                    n.devToolsHookCb({
                      action: {},
                      state: {
                        queries: n.queryManager.getQueryStore(),
                        mutations: n.queryManager.mutationStore || {},
                      },
                      dataWithOptimisticResults: n.cache.extract(!0),
                    });
                }
              : void 0,
          }));
      }
      return (
        (e.prototype.stop = function () {
          this.queryManager.stop();
        }),
        (e.prototype.watchQuery = function (t) {
          return (
            this.defaultOptions.watchQuery &&
              (t = oc(this.defaultOptions.watchQuery, t)),
            this.disableNetworkFetches &&
              (t.fetchPolicy === "network-only" ||
                t.fetchPolicy === "cache-and-network") &&
              (t = A(A({}, t), { fetchPolicy: "cache-first" })),
            this.queryManager.watchQuery(t)
          );
        }),
        (e.prototype.query = function (t) {
          return (
            this.defaultOptions.query && (t = oc(this.defaultOptions.query, t)),
            __DEV__
              ? H(
                  t.fetchPolicy !== "cache-and-network",
                  "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."
                )
              : H(t.fetchPolicy !== "cache-and-network", 10),
            this.disableNetworkFetches &&
              t.fetchPolicy === "network-only" &&
              (t = A(A({}, t), { fetchPolicy: "cache-first" })),
            this.queryManager.query(t)
          );
        }),
        (e.prototype.mutate = function (t) {
          return (
            this.defaultOptions.mutate &&
              (t = oc(this.defaultOptions.mutate, t)),
            this.queryManager.mutate(t)
          );
        }),
        (e.prototype.subscribe = function (t) {
          return this.queryManager.startGraphQLSubscription(t);
        }),
        (e.prototype.readQuery = function (t, n) {
          return n === void 0 && (n = !1), this.cache.readQuery(t, n);
        }),
        (e.prototype.readFragment = function (t, n) {
          return n === void 0 && (n = !1), this.cache.readFragment(t, n);
        }),
        (e.prototype.writeQuery = function (t) {
          var n = this.cache.writeQuery(t);
          return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }),
        (e.prototype.writeFragment = function (t) {
          var n = this.cache.writeFragment(t);
          return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }),
        (e.prototype.__actionHookForDevTools = function (t) {
          this.devToolsHookCb = t;
        }),
        (e.prototype.__requestRaw = function (t) {
          return Wf(this.link, t);
        }),
        (e.prototype.resetStore = function () {
          var t = this;
          return Promise.resolve()
            .then(function () {
              return t.queryManager.clearStore({ discardWatches: !1 });
            })
            .then(function () {
              return Promise.all(
                t.resetStoreCallbacks.map(function (n) {
                  return n();
                })
              );
            })
            .then(function () {
              return t.reFetchObservableQueries();
            });
        }),
        (e.prototype.clearStore = function () {
          var t = this;
          return Promise.resolve()
            .then(function () {
              return t.queryManager.clearStore({ discardWatches: !0 });
            })
            .then(function () {
              return Promise.all(
                t.clearStoreCallbacks.map(function (n) {
                  return n();
                })
              );
            });
        }),
        (e.prototype.onResetStore = function (t) {
          var n = this;
          return (
            this.resetStoreCallbacks.push(t),
            function () {
              n.resetStoreCallbacks = n.resetStoreCallbacks.filter(function (
                r
              ) {
                return r !== t;
              });
            }
          );
        }),
        (e.prototype.onClearStore = function (t) {
          var n = this;
          return (
            this.clearStoreCallbacks.push(t),
            function () {
              n.clearStoreCallbacks = n.clearStoreCallbacks.filter(function (
                r
              ) {
                return r !== t;
              });
            }
          );
        }),
        (e.prototype.reFetchObservableQueries = function (t) {
          return this.queryManager.reFetchObservableQueries(t);
        }),
        (e.prototype.refetchQueries = function (t) {
          var n = this.queryManager.refetchQueries(t),
            r = [],
            i = [];
          n.forEach(function (s, a) {
            r.push(a), i.push(s);
          });
          var o = Promise.all(i);
          return (
            (o.queries = r),
            (o.results = i),
            o.catch(function (s) {
              __DEV__ &&
                H.debug(
                  "In client.refetchQueries, Promise.all promise rejected with error ".concat(
                    s
                  )
                );
            }),
            o
          );
        }),
        (e.prototype.getObservableQueries = function (t) {
          return (
            t === void 0 && (t = "active"),
            this.queryManager.getObservableQueries(t)
          );
        }),
        (e.prototype.extract = function (t) {
          return this.cache.extract(t);
        }),
        (e.prototype.restore = function (t) {
          return this.cache.restore(t);
        }),
        (e.prototype.addResolvers = function (t) {
          this.localState.addResolvers(t);
        }),
        (e.prototype.setResolvers = function (t) {
          this.localState.setResolvers(t);
        }),
        (e.prototype.getResolvers = function () {
          return this.localState.getResolvers();
        }),
        (e.prototype.setLocalStateFragmentMatcher = function (t) {
          this.localState.setFragmentMatcher(t);
        }),
        (e.prototype.setLink = function (t) {
          this.link = this.queryManager.link = t;
        }),
        e
      );
    })(),
    Ey = zp ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
  function yI() {
    var e = b.createContext[Ey];
    return (
      e ||
        (Object.defineProperty(b.createContext, Ey, {
          value: (e = b.createContext({})),
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        (e.displayName = "ApolloContext")),
      e
    );
  }
  var gI = function (e) {
    var t = e.client,
      n = e.children,
      r = yI();
    return b.createElement(r.Consumer, null, function (i) {
      return (
        i === void 0 && (i = {}),
        t && i.client !== t && (i = Object.assign({}, i, { client: t })),
        __DEV__
          ? H(
              i.client,
              'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'
            )
          : H(i.client, 29),
        b.createElement(r.Provider, { value: i }, n)
      );
    });
  };
  const wI = new cI({
      typePolicies: {
        Query: {
          fields: {
            user: {
              merge(e, t) {
                return t;
              },
            },
            course: {
              merge(e, t) {
                return t;
              },
            },
            department: {
              merge(e, t) {
                return t;
              },
            },
            program: {
              merge(e, t) {
                return t;
              },
            },
            programType: {
              merge(e, t) {
                return t;
              },
            },
            schedule: {
              merge(e, t) {
                return t;
              },
            },
          },
        },
      },
    }),
    xI = new vI({ uri: "http://localhost:8000/graphql", cache: wI });
  function SI() {
    const e = Je.useRef(),
      t = Je.useRef();
    return x.jsx(gI, {
      client: xI,
      children: x.jsx(k_, {
        children: x.jsx("div", {
          id: "appWindow",
          className: "app-window",
          children: x.jsxs(E_, {
            children: [
              x.jsx(uf, {
                path: "/app",
                element: x.jsx(hR, { forwardRef: e }),
              }),
              x.jsx(uf, {
                path: "/api",
                element: x.jsx(kR, { forwardRef: t }),
              }),
            ],
          }),
        }),
      }),
    });
  }
  const _y = document.getElementById("root");
  _y
    ? z0(_y).render(x.jsx(Je.StrictMode, { children: x.jsx(SI, {}) }))
    : console.log("domNode is null");
});
export default bI();
