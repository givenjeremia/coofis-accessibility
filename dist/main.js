import "./assets/main.css";
import * as C from "react";
import Ee, { createContext as ms, useContext as Rr, useState as Se, useRef as fe, useEffect as Ze, useLayoutEffect as oe, useMemo as Ct, useCallback as Ve, forwardRef as hs, Component as Rc, Fragment as sr } from "react";
import { createPortal as fs } from "react-dom";
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ii, Ci, cr = { exports: {} }, Sn = {}, Kt = {};
process.env.NODE_ENV === "production" ? cr.exports = function() {
  if (Ci)
    return Kt;
  Ci = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, r, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), r.key !== void 0 && (a = "" + r.key), "key" in r)
      for (var c in i = {}, r)
        c !== "key" && (i[c] = r[c]);
    else
      i = r;
    return r = i.ref, { $$typeof: e, type: o, key: a, ref: r !== void 0 ? r : null, props: i };
  }
  return Kt.Fragment = t, Kt.jsx = n, Kt.jsxs = n, Kt;
}() : cr.exports = (Ii || (Ii = 1, process.env.NODE_ENV !== "production" && function() {
  function e(N) {
    if (N == null)
      return null;
    if (typeof N == "function")
      return N.$$typeof === k ? null : N.displayName || N.name || null;
    if (typeof N == "string")
      return N;
    switch (N) {
      case m:
        return "Fragment";
      case y:
        return "Profiler";
      case d:
        return "StrictMode";
      case v:
        return "Suspense";
      case x:
        return "SuspenseList";
      case w:
        return "Activity";
    }
    if (typeof N == "object")
      switch (N.tag, N.$$typeof) {
        case p:
          return "Portal";
        case h:
          return N.displayName || "Context";
        case b:
          return (N._context.displayName || "Context") + ".Consumer";
        case f:
          var T = N.render;
          return (N = N.displayName) || (N = (N = T.displayName || T.name || "") !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
        case I:
          return (T = N.displayName || null) !== null ? T : e(N.type) || "Memo";
        case A:
          T = N._payload, N = N._init;
          try {
            return e(N(T));
          } catch {
          }
      }
    return null;
  }
  function t(N) {
    return "" + N;
  }
  function n(N) {
    try {
      t(N);
      var T = !1;
    } catch {
      T = !0;
    }
    if (T) {
      var E = (T = console).error, z = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
      return E.call(T, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", z), t(N);
    }
  }
  function o(N) {
    if (N === m)
      return "<>";
    if (typeof N == "object" && N !== null && N.$$typeof === A)
      return "<...>";
    try {
      var T = e(N);
      return T ? "<" + T + ">" : "<...>";
    } catch {
      return "<...>";
    }
  }
  function r() {
    return Error("react-stack-top-frame");
  }
  function i() {
    var N = e(this.type);
    return Y[N] || (Y[N] = !0), (N = this.props.ref) !== void 0 ? N : null;
  }
  function a(N, T, E, z, P, le) {
    var ae, $ = T.children;
    if ($ !== void 0)
      if (z) {
        if (j($)) {
          for (z = 0; z < $.length; z++)
            c($[z]);
          Object.freeze && Object.freeze($);
        }
      } else
        c($);
    if (V.call(T, "key")) {
      $ = e(N);
      var te = Object.keys(T).filter(function(U) {
        return U !== "key";
      });
      z = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", J[$ + z] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", J[$ + z] = !0);
    }
    if ($ = null, E !== void 0 && (n(E), $ = "" + E), function(U) {
      if (V.call(U, "key")) {
        var Ne = Object.getOwnPropertyDescriptor(U, "key").get;
        if (Ne && Ne.isReactWarning)
          return !1;
      }
      return U.key !== void 0;
    }(T) && (n(T.key), $ = "" + T.key), "key" in T)
      for (var be in E = {}, T)
        be !== "key" && (E[be] = T[be]);
    else
      E = T;
    return $ && function(U, Ne) {
      function Ae() {
        l || (l = !0);
      }
      Ae.isReactWarning = !0, Object.defineProperty(U, "key", { get: Ae, configurable: !0 });
    }(E, typeof N == "function" && (N.displayName || N.name)), function(U, Ne, Ae, Ke, je, _e) {
      var De = Ae.ref;
      return U = { $$typeof: g, type: U, key: Ne, props: Ae, _owner: Ke }, (De !== void 0 ? De : null) !== null ? Object.defineProperty(U, "ref", { enumerable: !1, get: i }) : Object.defineProperty(U, "ref", { enumerable: !1, value: null }), U._store = {}, Object.defineProperty(U._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: 0 }), Object.defineProperty(U, "_debugInfo", { configurable: !1, enumerable: !1, writable: !0, value: null }), Object.defineProperty(U, "_debugStack", { configurable: !1, enumerable: !1, writable: !0, value: je }), Object.defineProperty(U, "_debugTask", { configurable: !1, enumerable: !1, writable: !0, value: _e }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    }(N, $, E, (ae = D.A) === null ? null : ae.getOwner(), P, le);
  }
  function c(N) {
    s(N) ? N._store && (N._store.validated = 1) : typeof N == "object" && N !== null && N.$$typeof === A && (N._payload.status === "fulfilled" ? s(N._payload.value) && N._payload.value._store && (N._payload.value._store.validated = 1) : N._store && (N._store.validated = 1));
  }
  function s(N) {
    return typeof N == "object" && N !== null && N.$$typeof === g;
  }
  var l, u = Ee, g = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), D = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, j = Array.isArray, Z = console.createTask ? console.createTask : function() {
    return null;
  }, Y = {}, R = (u = { react_stack_bottom_frame: function(N) {
    return N();
  } }).react_stack_bottom_frame.bind(u, r)(), H = Z(o(r)), J = {};
  Sn.Fragment = m, Sn.jsx = function(N, T, E) {
    var z = 1e4 > D.recentlyCreatedOwnerStacks++;
    return a(N, T, E, !1, z ? Error("react-stack-top-frame") : R, z ? Z(o(N)) : H);
  }, Sn.jsxs = function(N, T, E) {
    var z = 1e4 > D.recentlyCreatedOwnerStacks++;
    return a(N, T, E, !0, z ? Error("react-stack-top-frame") : R, z ? Z(o(N)) : H);
  };
}()), Sn);
var S = cr.exports;
function bs(e, t) {
  window.dispatchEvent(new StorageEvent("storage", { key: e, newValue: t }));
}
const xi = (e, t) => {
  const n = JSON.stringify(t);
  window.sessionStorage.setItem(e, n), bs(e, n);
}, Si = (e) => window.sessionStorage.getItem(e), Wc = (e) => (window.addEventListener("storage", e), () => window.removeEventListener("storage", e)), Fc = () => {
  throw Error("useSessionStorage is a client-only hook");
};
var vs = Symbol.for("immer-nothing"), Ai = Symbol.for("immer-draftable"), Qe = Symbol.for("immer-state"), Pc = process.env.NODE_ENV !== "production" ? [function(e) {
  return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
}, function(e) {
  return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
}, "This object has been frozen and should not be mutated", function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", "Immer forbids circular references", "The first or second argument to `produce` must be a function", "The third argument to `produce` must be a function or undefined", "First argument to `createDraft` must be a plain object, an array, or an immerable object", "First argument to `finishDraft` must be a draft returned by `createDraft`", function(e) {
  return `'current' expects a draft, got: ${e}`;
}, "Object.defineProperty() cannot be used on an Immer draft", "Object.setPrototypeOf() cannot be used on an Immer draft", "Immer only supports deleting array indices", "Immer only supports setting array indices and the 'length' property", function(e) {
  return `'original' expects a draft, got: ${e}`;
}] : [];
function Xe(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Pc[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var Dt = Object.getPrototypeOf;
function zt(e) {
  return !!e && !!e[Qe];
}
function Gt(e) {
  var t;
  return !!e && (ys(e) || Array.isArray(e) || !!e[Ai] || !!((t = e.constructor) != null && t[Ai]) || ao(e) || so(e));
}
var Xc = Object.prototype.constructor.toString();
function ys(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Dt(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object || typeof n == "function" && Function.toString.call(n) === Xc;
}
function un(e, t) {
  io(e) === 0 ? Object.entries(e).forEach(([n, o]) => {
    t(n, o, e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function io(e) {
  const t = e[Qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : ao(e) ? 2 : so(e) ? 3 : 0;
}
function lr(e, t) {
  return io(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Is(e, t, n) {
  const o = io(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function ao(e) {
  return e instanceof Map;
}
function so(e) {
  return e instanceof Set;
}
function Lt(e) {
  return e.copy_ || e.base_;
}
function ur(e, t) {
  if (ao(e))
    return new Map(e);
  if (so(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && ys(e))
    return Dt(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Qe];
  let o = Reflect.ownKeys(n);
  for (let r = 0; r < o.length; r++) {
    const i = o[r], a = n[i];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] });
  }
  return Object.create(Dt(e), n);
}
function Hr(e, t = !1) {
  return co(e) || zt(e) || !Gt(e) || (io(e) > 1 && (e.set = e.add = e.clear = e.delete = Zc), Object.freeze(e), t && un(e, (n, o) => Hr(o, !0))), e;
}
function Zc() {
  Xe(2);
}
function co(e) {
  return Object.isFrozen(e);
}
var dn, zc = {};
function Tt(e) {
  const t = zc[e];
  return t || Xe(0, e), t;
}
function wi() {
  return dn;
}
function Ni(e, t) {
  t && (Tt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function dr(e) {
  gr(e), e.drafts_.forEach(jc), e.drafts_ = null;
}
function gr(e) {
  e === dn && (dn = e.parent_);
}
function Ei(e) {
  return dn = { drafts_: [], parent_: dn, immer_: e, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function jc(e) {
  const t = e[Qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ki(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Qe].modified_ && (dr(t), Xe(4)), Gt(e) && (e = _n(t, e), t.parent_ || Dn(t, e)), t.patches_ && Tt("Patches").generateReplacementPatches_(n[Qe].base_, e, t.patches_, t.inversePatches_)) : e = _n(t, n, []), dr(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== vs ? e : void 0;
}
function _n(e, t, n) {
  if (co(t))
    return t;
  const o = t[Qe];
  if (!o)
    return un(t, (r, i) => Li(e, o, t, r, i, n)), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return Dn(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const r = o.copy_;
    let i = r, a = !1;
    o.type_ === 3 && (i = new Set(r), r.clear(), a = !0), un(i, (c, s) => Li(e, o, r, c, s, n, a)), Dn(e, r, !1), n && e.patches_ && Tt("Patches").generatePatches_(o, n, e.patches_, e.inversePatches_);
  }
  return o.copy_;
}
function Li(e, t, n, o, r, i, a) {
  if (process.env.NODE_ENV !== "production" && r === n && Xe(5), zt(r)) {
    const c = _n(e, r, i && t && t.type_ !== 3 && !lr(t.assigned_, o) ? i.concat(o) : void 0);
    if (Is(n, o, c), !zt(c))
      return;
    e.canAutoFreeze_ = !1;
  } else
    a && n.add(r);
  if (Gt(r) && !co(r)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    _n(e, r), t && t.scope_.parent_ || Dn(e, r);
  }
}
function Dn(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Hr(t, n);
}
var pr = { get(e, t) {
  if (t === Qe)
    return e;
  const n = Lt(e);
  if (!lr(n, t))
    return function(r, i, a) {
      var s;
      const c = Gi(i, a);
      return c ? "value" in c ? c.value : (s = c.get) == null ? void 0 : s.call(r.draft_) : void 0;
    }(e, n, t);
  const o = n[t];
  return e.finalized_ || !Gt(o) ? o : o === xo(e.base_, t) ? (So(e), e.copy_[t] = hr(o, e)) : o;
}, has: (e, t) => t in Lt(e), ownKeys: (e) => Reflect.ownKeys(Lt(e)), set(e, t, n) {
  const o = Gi(Lt(e), t);
  if (o != null && o.set)
    return o.set.call(e.draft_, n), !0;
  if (!e.modified_) {
    const a = xo(Lt(e), t), c = a == null ? void 0 : a[Qe];
    if (c && c.base_ === n)
      return e.copy_[t] = n, e.assigned_[t] = !1, !0;
    if (((r = n) === (i = a) ? r !== 0 || 1 / r == 1 / i : r != r && i != i) && (n !== void 0 || lr(e.base_, t)))
      return !0;
    So(e), mr(e);
  }
  var r, i;
  return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
}, deleteProperty: (e, t) => (xo(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, So(e), mr(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0), getOwnPropertyDescriptor(e, t) {
  const n = Lt(e), o = Reflect.getOwnPropertyDescriptor(n, t);
  return o && { writable: !0, configurable: e.type_ !== 1 || t !== "length", enumerable: o.enumerable, value: n[t] };
}, defineProperty() {
  Xe(11);
}, getPrototypeOf: (e) => Dt(e.base_), setPrototypeOf() {
  Xe(12);
} }, an = {};
function xo(e, t) {
  const n = e[Qe];
  return (n ? Lt(n) : e)[t];
}
function Gi(e, t) {
  if (!(t in e))
    return;
  let n = Dt(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = Dt(n);
  }
}
function mr(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && mr(e.parent_));
}
function So(e) {
  e.copy_ || (e.copy_ = ur(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function hr(e, t) {
  const n = ao(e) ? Tt("MapSet").proxyMap_(e, t) : so(e) ? Tt("MapSet").proxySet_(e, t) : function(o, r) {
    const i = Array.isArray(o), a = { type_: i ? 1 : 0, scope_: r ? r.scope_ : wi(), modified_: !1, finalized_: !1, assigned_: {}, parent_: r, base_: o, draft_: null, copy_: null, revoke_: null, isManual_: !1 };
    let c = a, s = pr;
    i && (c = [a], s = an);
    const { revoke: l, proxy: u } = Proxy.revocable(c, s);
    return a.draft_ = u, a.revoke_ = l, u;
  }(e, t);
  return (t ? t.scope_ : wi()).drafts_.push(n), n;
}
function Cs(e) {
  if (!Gt(e) || co(e))
    return e;
  const t = e[Qe];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = ur(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = ur(e, !0);
  return un(n, (o, r) => {
    Is(n, o, Cs(r));
  }), t && (t.finalized_ = !1), n;
}
un(pr, (e, t) => {
  an[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), an.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Xe(13), an.set.call(this, e, t, void 0);
}, an.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Xe(14), pr.set.call(this, e[0], t, n, e[0]);
};
var Ye = new class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const a = this;
        return function(c = i, ...s) {
          return a.produce(c, (l) => n.call(this, l, ...s));
        };
      }
      let r;
      if (typeof n != "function" && Xe(6), o !== void 0 && typeof o != "function" && Xe(7), Gt(t)) {
        const i = Ei(this), a = hr(t, void 0);
        let c = !0;
        try {
          r = n(a), c = !1;
        } finally {
          c ? dr(i) : gr(i);
        }
        return Ni(i, o), ki(r, i);
      }
      if (!t || typeof t != "object") {
        if (r = n(t), r === void 0 && (r = t), r === vs && (r = void 0), this.autoFreeze_ && Hr(r, !0), o) {
          const i = [], a = [];
          Tt("Patches").generateReplacementPatches_(t, r, i, a), o(i, a);
        }
        return r;
      }
      Xe(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...c) => this.produceWithPatches(a, (s) => t(s, ...c));
      let o, r;
      return [this.produce(t, n, (a, c) => {
        o = a, r = c;
      }), o, r];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    var t;
    Gt(e) || Xe(8), zt(e) && (zt(t = e) || Xe(10, t), e = Cs(t));
    const n = Ei(this), o = hr(e, void 0);
    return o[Qe].isManual_ = !0, gr(n), o;
  }
  finishDraft(e, t) {
    const n = e && e[Qe];
    n && n.isManual_ || Xe(9);
    const { scope_: o } = n;
    return Ni(o, t), ki(void 0, o);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      if (r.path.length === 0 && r.op === "replace") {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const o = Tt("Patches").applyPatches_;
    return zt(e) ? o(e, t) : this.produce(e, (r) => o(r, t));
  }
}(), fr = Ye.produce;
Ye.produceWithPatches.bind(Ye), Ye.setAutoFreeze.bind(Ye), Ye.setUseStrictShallowCopy.bind(Ye), Ye.applyPatches.bind(Ye), Ye.createDraft.bind(Ye), Ye.finishDraft.bind(Ye);
const _c = {}, Dc = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "AccessibleIcon", ...e }, C.createElement("circle", { cx: 12, cy: 4, r: 2 }), C.createElement("path", { d: "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" }));
var Ao, xs = { exports: {} };
Ao = xs, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var r = "", i = 0; i < arguments.length; i++) {
      var a = arguments[i];
      a && (r = o(r, n(a)));
    }
    return r;
  }
  function n(r) {
    if (typeof r == "string" || typeof r == "number")
      return r;
    if (typeof r != "object")
      return "";
    if (Array.isArray(r))
      return t.apply(null, r);
    if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
      return r.toString();
    var i = "";
    for (var a in r)
      e.call(r, a) && r[a] && (i = o(i, a));
    return i;
  }
  function o(r, i) {
    return i ? r ? r + " " + i : r + i : r;
  }
  Ao.exports ? (t.default = t, Ao.exports = t) : window.classNames = t;
}();
const lt = Hc(xs.exports), Ti = ({ onShow: e, showSpinner: t }) => S.jsx("a", { onClick: e, role: "button", title: "Open Accessibility Menu", className: lt("_AccessibilityIcon_1hgn1_1", { _showSpinner_1hgn1_17: t }), children: S.jsx(Dc, { title: "AccessibleIcon" }) }), It = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p", "a", "label", "i", "button", "img", "ol", "svg"], sn = "accessibilik", Ce = `root-${sn}`, Jc = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "CloseIcon", ...e }, C.createElement("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), Ss = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "RestartAltIcon", ...e }, C.createElement("path", { d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z" }));
function F() {
  return F = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, F.apply(this, arguments);
}
const Bi = {};
function wo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Bi[t[0]] || (typeof t[0] == "string" && (Bi[t[0]] = /* @__PURE__ */ new Date()), function() {
    if (console && console.warn) {
      for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
        r[i] = arguments[i];
      typeof r[0] == "string" && (r[0] = `react-i18next:: ${r[0]}`);
    }
  }(...t));
}
const As = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Mi(e, t, n) {
  e.loadNamespaces(t, As(e, n));
}
function Oi(e, t, n, o) {
  typeof n == "string" && (n = [n]), n.forEach((r) => {
    e.options.ns.indexOf(r) < 0 && e.options.ns.push(r);
  }), e.loadLanguages(t, As(e, o));
}
const Yc = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Uc = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, $c = (e) => Uc[e];
let ws, br = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: (e) => e.replace(Yc, $c) };
const Qc = { type: "3rdParty", init(e) {
  (function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    br = { ...br, ...t };
  })(e.options.react), function(t) {
    ws = t;
  }(e);
} }, Kc = ms();
class qc {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Wr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t, { i18n: o, defaultNS: r } = Rr(Kc) || {}, i = n || o || ws;
  if (i && !i.reportNamespaces && (i.reportNamespaces = new qc()), !i) {
    wo("You will need to pass in an i18next instance by using initReactI18next");
    const v = (I, A) => typeof A == "string" ? A : A && typeof A == "object" && typeof A.defaultValue == "string" ? A.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, x = [v, {}, !1];
    return x.t = v, x.i18n = {}, x.ready = !1, x;
  }
  i.options.react && i.options.react.wait !== void 0 && wo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = { ...br, ...i.options.react, ...t }, { useSuspense: c, keyPrefix: s } = a;
  let l = e || r || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((v) => function(x, I) {
    let A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return I.languages && I.languages.length ? I.options.ignoreJSONStructure !== void 0 ? I.hasLoadedNamespace(x, { lng: A.lng, precheck: (w, k) => {
      if (A.bindI18n && A.bindI18n.indexOf("languageChanging") > -1 && w.services.backendConnector.backend && w.isLanguageChangingTo && !k(w.isLanguageChangingTo, x))
        return !1;
    } }) : function(w, k) {
      let D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const V = k.languages[0], j = !!k.options && k.options.fallbackLng, Z = k.languages[k.languages.length - 1];
      if (V.toLowerCase() === "cimode")
        return !0;
      const Y = (R, H) => {
        const J = k.services.backendConnector.state[`${R}|${H}`];
        return J === -1 || J === 2;
      };
      return !(D.bindI18n && D.bindI18n.indexOf("languageChanging") > -1 && k.services.backendConnector.backend && k.isLanguageChangingTo && !Y(k.isLanguageChangingTo, w) || !k.hasResourceBundle(V, w) && k.services.backendConnector.backend && (!k.options.resources || k.options.partialBundledLanguages) && (!Y(V, w) || j && !Y(Z, w)));
    }(x, I, A) : (wo("i18n.languages were undefined or empty", I.languages), !0);
  }(v, i, a));
  function g() {
    return i.getFixedT(t.lng || null, a.nsMode === "fallback" ? l : l[0], s);
  }
  const [p, m] = Se(g);
  let d = l.join();
  t.lng && (d = `${t.lng}${d}`);
  const y = ((v, x) => {
    const I = fe();
    return Ze(() => {
      I.current = v;
    }, [v, x]), I.current;
  })(d), b = fe(!0);
  Ze(() => {
    const { bindI18n: v, bindI18nStore: x } = a;
    function I() {
      b.current && m(g);
    }
    return b.current = !0, u || c || (t.lng ? Oi(i, t.lng, l, () => {
      b.current && m(g);
    }) : Mi(i, l, () => {
      b.current && m(g);
    })), u && y && y !== d && b.current && m(g), v && i && i.on(v, I), x && i && i.store.on(x, I), () => {
      b.current = !1, v && i && v.split(" ").forEach((A) => i.off(A, I)), x && i && x.split(" ").forEach((A) => i.store.off(A, I));
    };
  }, [i, d]);
  const h = fe(!0);
  Ze(() => {
    b.current && !h.current && m(g), h.current = !1;
  }, [i, s]);
  const f = [p, i, u];
  if (f.t = p, f.i18n = i, f.ready = u, u || !u && !c)
    return f;
  throw new Promise((v) => {
    t.lng ? Oi(i, t.lng, l, () => v()) : Mi(i, l, () => v());
  });
}
const el = ({ onInit: e, onShow: t }) => {
  const { t: n } = Wr();
  return S.jsxs("header", { className: "_accHeader_6h1t6_1", children: [S.jsx("button", { onClick: e, className: "_accHeader__resetBtn_6h1t6_1", children: S.jsx(Ss, {}) }), S.jsx("h3", { className: "_accHeader__title_6h1t6_23", children: n("accessibility-menu") }), S.jsx("button", { onClick: t, className: "_accHeader__closeBtn_6h1t6_1", children: S.jsx(Jc, {}) })] });
}, tl = () => S.jsx("footer", { className: "_accFooter_suidv_1", children: S.jsx("a", { target: "_blank", href: "https://coofis.com/", children: " Developed By Coofis ©" }) }), No = { accAccessibilityMenu__overlay: "_accAccessibilityMenu__overlay_1yac1_1", accMenu: "_accMenu_1yac1_10" }, nl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "ExpandIcon", ...e }, C.createElement("path", { d: "M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z" })), Eo = ({ children: e, name: t, onCollapse: n, isExpanded: o, Icon: r, tKey: i, isAccMenuContentActive: a }) => {
  const { t: c } = Wr(), s = lt("_accMenuContentBlock_1iunb_1", { _isExpanded_1iunb_25: o, _isAccMenuContentActive_1iunb_33: a }), l = () => {
    n(t);
  }, u = o ? void 0 : "button", g = o ? void 0 : 0;
  return S.jsxs("div", { onClick: o ? void 0 : l, role: u, className: s, tabIndex: g, children: [o && S.jsx("div", { className: "_accMenuContentBlock__expendButtonContainer_1iunb_55", children: S.jsx("button", { onClick: l, children: S.jsx(nl, {}) }) }), !o && S.jsxs("div", { className: "_accMenuContentBlock__titleContainer_1iunb_36", children: [S.jsx(r, {}), S.jsx("h3", { className: "_accMenuContentBlock__title_1iunb_36", children: c(i) })] }), o && S.jsx("div", { className: "_accMenuContentBlock__content_1iunb_83", children: e })] });
}, Vi = "_accButton__icon_gu4kw_38", ol = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "QuestionMarkIcon", ...e }, C.createElement("path", { d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" })), rl = ({ elementType: e, children: t, ...n }) => {
  const o = e === "button" ? "button" : "div", r = e === "div" ? 0 : void 0;
  return S.jsx(o, { tabIndex: r, ...n, children: t });
}, de = ({ Icon: e, isToggled: t, isActive: n, children: o, onToggle: r, titleTranslationKey: i, elementType: a = "button", title: c, stats: s, styleIcon: l, styleTitle: u, className: g, tooltipTranslationKey: p }) => {
  const { t: m } = Wr(), d = lt(`_accButton_gu4kw_1 ${g}`, { _isToggled_gu4kw_18: t, _isActive_gu4kw_26: n });
  return S.jsxs(rl, { elementType: a, onClick: r, className: d, children: [s && S.jsx("span", { className: "_accButton__stats_gu4kw_61", children: s }), p ? S.jsxs(S.Fragment, { children: [S.jsx(ol, { title: "Help", className: `${Vi} _accButton__icon--help_gu4kw_42` }), S.jsx("span", { "data-tooltip": m(p ?? "") ?? void 0 })] }) : null, S.jsx(e, { style: l, title: c, className: Vi }), S.jsx("h2", { style: u, className: "_accButton__title_gu4kw_29", children: m(i) }), S.jsx("div", { className: "_accButton__content_gu4kw_55", children: o })] });
}, il = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "TextIncreaseIcon", ...e }, C.createElement("path", { d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z" })), al = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "AddIcon", ...e }, C.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })), sl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "RemoveIcon", ...e }, C.createElement("path", { d: "M19 13H5v-2h14v2z" })), Ue = ({ controlType: e, onClick: t, style: n }) => {
  let o;
  switch (e) {
    case "increase":
      o = al;
      break;
    case "decrease":
      o = sl;
      break;
    default:
      o = Ss;
  }
  return S.jsx("button", { style: n, onClick: t, className: "_accValueControlButton_1pw3b_1", children: S.jsx(o, {}) });
}, Yt = ({ onIncrease: e, onToggle: t, onDescrease: n }) => S.jsxs("div", { className: "_accValueControl_p53sg_1", children: [S.jsx(Ue, { onClick: e, controlType: "increase" }), S.jsx(Ue, { onClick: t, controlType: "init" }), S.jsx(Ue, { onClick: n, controlType: "decrease" })] }), cl = ({ accState: e, onChangeAccState: t }) => {
  const { adjustFontSizePercentage: n } = e;
  return S.jsx(de, { elementType: "div", Icon: il, titleTranslationKey: "content.adjustFontSize", title: "Adjust Font Size", stats: `${n}%`, children: S.jsx(Yt, { onIncrease: () => {
    t((o) => {
      const { adjustFontSizePercentage: r } = o;
      r < 200 && (o.adjustFontSizePercentage += 10);
    });
  }, onToggle: () => {
    t((o) => {
      o.adjustFontSizePercentage = 100;
    });
  }, onDescrease: () => {
    t((o) => {
      const { adjustFontSizePercentage: r } = o;
      r > 10 && (o.adjustFontSizePercentage -= 10);
    });
  } }) });
}, ll = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "SortByAlphaIcon", ...e }, C.createElement("path", { d: "M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z" })), Ri = "acc-dyslexia-font-style", Hi = "acc-dyslexia-font", Ns = (e, t) => {
  oe(() => {
    if (t)
      return;
    const n = document.getElementById(Ri);
    if (e && !n) {
      document.documentElement.classList.add(Hi);
      const o = document.createElement("style");
      o.id = Ri, o.innerHTML = `
 @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap');

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic3-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic3-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
}


html{
    font-family: OpenDyslexic,Comic Neue,Arial,Helvetica,sans-serif !important
  
}

html *, *{
    font-family: OpenDyslexic,Comic Neue,Arial,Helvetica,sans-serif !important
}

html.acc-font-weight{
    font-family: OpenDyslexic,Comic Neue,Arial,Helvetica,sans-serif !important 
}


`, document.head.appendChild(o);
    } else
      !e && n && (document.documentElement.classList.remove(Hi), n == null || n.remove());
  }, [e, t]);
}, ul = ({ accState: e, onChangeAccState: t }) => {
  const { isDyslexiaFont: n } = e;
  return Ns(n), S.jsx(de, { Icon: ll, isToggled: n, onToggle: () => {
    t((o) => {
      o.isDyslexiaFont = !o.isDyslexiaFont;
    });
  }, titleTranslationKey: "content.dyslexiaFont", title: "Dyslexia Font" });
}, dl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "FormatBoldIcon", ...e }, C.createElement("path", { d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" })), gl = ({ accState: e, onChangeAccState: t }) => {
  const { isFontWeightBold: n } = e;
  return S.jsx(de, { Icon: dl, isToggled: n, onToggle: () => {
    t((o) => {
      o.isFontWeightBold = !o.isFontWeightBold;
    });
  }, titleTranslationKey: "content.fontWeight", title: "Font Weight" });
}, pl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "FormatAlignCenterIcon", ...e }, C.createElement("path", { d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" })), ko = Ee.memo(({ direction: e, accState: t, onChangeAccState: n, translationKey: o }) => {
  const { textAlign: r } = t, i = !!r[e];
  return S.jsx(de, { Icon: pl, isToggled: i, onToggle: () => {
    n((a) => {
      const c = a.textAlign[e];
      a.textAlign[e] = c ? null : e;
    });
  }, titleTranslationKey: o, title: "Text Align" });
}), ml = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "LinkIcon", ...e }, C.createElement("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" })), hl = ({ accState: e, onChangeAccState: t }) => {
  const { highlightLinks: n } = e;
  return S.jsx(de, { Icon: ml, isToggled: n, onToggle: () => {
    t((o) => {
      o.highlightLinks = !o.highlightLinks;
    });
  }, titleTranslationKey: "content.highlightLinks", title: "Highlight Links" });
}, fl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "TitleIcon", ...e }, C.createElement("path", { d: "M5 4v3h5.5v12h3V7H19V4z" })), bl = ({ accState: e, onChangeAccState: t }) => {
  const { highlightTitles: n } = e;
  return S.jsx(de, { Icon: fl, isToggled: n, onToggle: () => {
    t((o) => {
      o.highlightTitles = !o.highlightTitles;
    });
  }, titleTranslationKey: "content.highlightTitles", title: "Highlight Titles" });
}, vl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "EightMpIcon", ...e }, C.createElement("path", { d: "M11.5 9H13v1.5h-1.5zm0-2.5H13V8h-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zm-1-8c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4zm1 3.5H17v1.5h-1.5z" })), yl = ({ accState: e, onChangeAccState: t }) => {
  const { letterSpacing: n } = e, o = !!n, r = () => {
    t((i) => {
      const { letterSpacing: a } = i;
      i.letterSpacing = a ? 0 : 1;
    });
  };
  return S.jsx(de, { Icon: vl, titleTranslationKey: "content.letterSpacing", title: "Letter Spacing", stats: n ? `${n}px` : void 0, elementType: o ? "div" : "button", isActive: o, onToggle: o ? void 0 : r, children: o ? S.jsx(Yt, { onIncrease: () => {
    t((i) => {
      i.letterSpacing++;
    });
  }, onToggle: r, onDescrease: () => {
    t((i) => {
      i.letterSpacing > 0 && i.letterSpacing--;
    });
  } }) : null });
}, Il = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "MenuBookIcon", ...e }, C.createElement("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }), C.createElement("path", { d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z" })), Cl = ({ accState: e, onChangeAccState: t }) => {
  const { wordSpacing: n } = e, o = !!n, r = () => {
    t((i) => {
      const { wordSpacing: a } = i;
      i.wordSpacing = a ? 0 : 1;
    });
  };
  return S.jsx(de, { Icon: Il, titleTranslationKey: "content.wordsSpacing", title: "Word Spacing", stats: n ? `${n}px` : void 0, elementType: o ? "div" : "button", isActive: o, onToggle: o ? void 0 : r, children: o ? S.jsx(Yt, { onIncrease: () => {
    t((i) => {
      i.wordSpacing++;
    });
  }, onToggle: r, onDescrease: () => {
    t((i) => {
      i.wordSpacing > 0 && i.wordSpacing--;
    });
  } }) : null });
}, xl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "TextRotateUpIcon", ...e }, C.createElement("path", { d: "M3 12v1.5l11 4.75v-2.1l-2.2-.9v-5l2.2-.9v-2.1L3 12zm7 2.62-5.02-1.87L10 10.88v3.74zm8-10.37-3 3h2v12.5h2V7.25h2l-3-3z" })), Sl = ({ accState: e, onChangeAccState: t }) => {
  const { lineHeight: n, isLineHeight: o } = e.lineHeight, r = () => {
    t((i) => {
      const a = !i.lineHeight.isLineHeight;
      i.lineHeight.isLineHeight = a, i.lineHeight.lineHeight = a ? 3 : 0;
    });
  };
  return S.jsx(de, { Icon: xl, titleTranslationKey: "content.lineHeight", title: "Line Height", elementType: o ? "div" : "button", isActive: o, onToggle: o ? void 0 : r, stats: n ? `${(100 * n).toFixed(0)}%` : void 0, children: o ? S.jsxs("div", { className: "_accLineHeightButton_n1tdk_1", children: [o && S.jsx(Ue, { onClick: () => {
    t((i) => {
      i.lineHeight.lineHeight += 0.1;
    });
  }, controlType: "increase" }), S.jsx(Ue, { onClick: r, controlType: "init" }), o && S.jsx(Ue, { onClick: () => {
    t((i) => {
      i.lineHeight.lineHeight > 0.1 && (i.lineHeight.lineHeight -= 0.1);
    });
  }, controlType: "decrease" })] }) : null });
}, Al = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "ZoomInIcon", ...e }, C.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), C.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })), wl = ({ accState: e, onChangeAccState: t }) => {
  const { zoom: n } = e.zoom;
  return S.jsx(de, { elementType: "div", Icon: Al, titleTranslationKey: "content.zoom", title: "Zoom", stats: n ? `${(100 * n).toFixed(0)}%` : void 0, children: S.jsxs("div", { className: "_accZoomButton_1fl6t_1", children: [S.jsx(Ue, { onClick: () => {
    t((o) => {
      o.zoom.isZoom = !0, o.zoom.zoom += 0.1;
    });
  }, controlType: "increase" }), S.jsx(Ue, { onClick: () => {
    t((o) => {
      o.zoom.isZoom = !1, o.zoom.zoom = 1;
    });
  }, controlType: "init" }), S.jsx(Ue, { onClick: () => {
    t((o) => {
      o.zoom.zoom > 0.1 && (o.zoom.isZoom = !0, o.zoom.zoom -= 0.1);
    });
  }, controlType: "decrease" })] }) });
}, Nl = ({ accState: e, onChangeAccState: t }) => S.jsxs(S.Fragment, { children: [S.jsx(cl, { accState: e, onChangeAccState: t }), S.jsx(ul, { accState: e, onChangeAccState: t }), S.jsx(gl, { accState: e, onChangeAccState: t }), S.jsx(ko, { accState: e, onChangeAccState: t, direction: "left", translationKey: "content.textAlignLeft" }), S.jsx(ko, { accState: e, onChangeAccState: t, direction: "center", translationKey: "content.textAlignCenter" }), S.jsx(ko, { accState: e, onChangeAccState: t, direction: "right", translationKey: "content.textAlignRight" }), S.jsx(hl, { accState: e, onChangeAccState: t }), S.jsx(bl, { accState: e, onChangeAccState: t }), S.jsx(yl, { accState: e, onChangeAccState: t }), S.jsx(Cl, { accState: e, onChangeAccState: t }), S.jsx(Sl, { accState: e, onChangeAccState: t }), S.jsx(wl, { accState: e, onChangeAccState: t })] }), El = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "VisibilitySharpIcon", ...e }, C.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })), kl = ({ accState: e, onChangeAccState: t }) => {
  const { isBlueLightFilter: n } = e;
  return S.jsx(de, { Icon: El, isToggled: n, onToggle: () => {
    t((o) => {
      o.isBlueLightFilter = !o.isBlueLightFilter;
    });
  }, titleTranslationKey: "colors.blueLightFilter", title: "Blue Light Filter" });
}, Ll = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "LightModeSharpIcon", ...e }, C.createElement("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1-6v4h2V1h-2zm0 18v4h2v-4h-2zm12-8h-4v2h4v-2zM5 11H1v2h4v-2zm11.24 6.66 2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zM3.87 5.28l2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zm2.47 10.96-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41zM18.72 3.87l-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41z" }));
function ft(e) {
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ft(e);
}
function Es(e) {
  var t = function(n, o) {
    if (ft(n) != "object" || !n)
      return n;
    var r = n[Symbol.toPrimitive];
    if (r !== void 0) {
      var i = r.call(n, "string");
      if (ft(i) != "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  }(e);
  return ft(t) == "symbol" ? t : String(t);
}
function We(e, t, n) {
  return (t = Es(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wi(Object(n), !0).forEach(function(o) {
      We(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wi(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function ks(e, t) {
  if (e) {
    if (typeof e == "string")
      return vr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vr(e, t) : void 0;
  }
}
function it(e) {
  return function(t) {
    if (Array.isArray(t))
      return vr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || ks(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function pe(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, o) {
    var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (r != null) {
      var i, a, c, s, l = [], u = !0, g = !1;
      try {
        if (c = (r = r.call(n)).next, o === 0) {
          if (Object(r) !== r)
            return;
          u = !1;
        } else
          for (; !(u = (i = c.call(r)).done) && (l.push(i.value), l.length !== o); u = !0)
            ;
      } catch (p) {
        g = !0, a = p;
      } finally {
        try {
          if (!u && r.return != null && (s = r.return(), Object(s) !== s))
            return;
        } finally {
          if (g)
            throw a;
        }
      }
      return l;
    }
  }(e, t) || ks(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Fi(e) {
  var t = C.useRef();
  t.current = e;
  var n = C.useCallback(function() {
    for (var o, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    return (o = t.current) === null || o === void 0 ? void 0 : o.call.apply(o, [t].concat(i));
  }, []);
  return n;
}
var Pi = process.env.NODE_ENV !== "test" && typeof window < "u" && window.document && window.document.createElement ? C.useLayoutEffect : C.useEffect, Xi = function(e, t) {
  (function(n, o) {
    var r = C.useRef(!0);
    Pi(function() {
      return n(r.current);
    }, o), Pi(function() {
      return r.current = !1, function() {
        r.current = !0;
      };
    }, []);
  })(function(n) {
    if (!n)
      return e();
  }, t);
};
function Zi(e) {
  var t = C.useRef(!1), n = pe(C.useState(e), 2), o = n[0], r = n[1];
  return C.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []), [o, function(i, a) {
    a && t.current || r(i);
  }];
}
function Lo(e) {
  return e !== void 0;
}
var yr = {}, Fr = [];
function Gl(e, t) {
  process.env.NODE_ENV === "production" || e || console === void 0 || Fr.reduce(function(n, o) {
    return o(n ?? "", "warning");
  }, t);
}
function Tl(e, t) {
  process.env.NODE_ENV === "production" || e || console === void 0 || Fr.reduce(function(n, o) {
    return o(n ?? "", "note");
  }, t);
}
function Ls(e, t, n) {
  t || yr[n] || (e(!1, n), yr[n] = !0);
}
function jt(e, t) {
  Ls(Gl, e, t);
}
jt.preMessage = function(e) {
  Fr.push(e);
}, jt.resetWarned = function() {
  yr = {};
}, jt.noteOnce = function(e, t) {
  Ls(Tl, e, t);
};
var Bt = C.createContext({ min: 0, max: 0, direction: "ltr", step: 1, includedStart: 0, includedEnd: 0, tabIndex: 0, keyboard: !0, styles: {}, classNames: {} });
function st(e, t) {
  if (e == null)
    return {};
  var n, o, r = function(a, c) {
    if (a == null)
      return {};
    var s, l, u = {}, g = Object.keys(a);
    for (l = 0; l < g.length; l++)
      s = g[l], c.indexOf(s) >= 0 || (u[s] = a[s]);
    return u;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var G = { MAC_ENTER: 3, BACKSPACE: 8, TAB: 9, NUM_CENTER: 12, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, PAUSE: 19, CAPS_LOCK: 20, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, PRINT_SCREEN: 44, INSERT: 45, DELETE: 46, ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, QUESTION_MARK: 63, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, META: 91, WIN_KEY_RIGHT: 92, CONTEXT_MENU: 93, NUM_ZERO: 96, NUM_ONE: 97, NUM_TWO: 98, NUM_THREE: 99, NUM_FOUR: 100, NUM_FIVE: 101, NUM_SIX: 102, NUM_SEVEN: 103, NUM_EIGHT: 104, NUM_NINE: 105, NUM_MULTIPLY: 106, NUM_PLUS: 107, NUM_MINUS: 109, NUM_PERIOD: 110, NUM_DIVISION: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, NUMLOCK: 144, SEMICOLON: 186, DASH: 189, EQUALS: 187, COMMA: 188, PERIOD: 190, SLASH: 191, APOSTROPHE: 192, SINGLE_QUOTE: 222, OPEN_SQUARE_BRACKET: 219, BACKSLASH: 220, CLOSE_SQUARE_BRACKET: 221, WIN_KEY: 224, MAC_FF_META: 224, WIN_IME: 229, isTextModifyingKeyEvent: function(e) {
  var t = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey || t >= G.F1 && t <= G.F12)
    return !1;
  switch (t) {
    case G.ALT:
    case G.CAPS_LOCK:
    case G.CONTEXT_MENU:
    case G.CTRL:
    case G.DOWN:
    case G.END:
    case G.ESC:
    case G.HOME:
    case G.INSERT:
    case G.LEFT:
    case G.MAC_FF_META:
    case G.META:
    case G.NUMLOCK:
    case G.NUM_CENTER:
    case G.PAGE_DOWN:
    case G.PAGE_UP:
    case G.PAUSE:
    case G.PRINT_SCREEN:
    case G.RIGHT:
    case G.SHIFT:
    case G.UP:
    case G.WIN_KEY:
    case G.WIN_KEY_RIGHT:
      return !1;
    default:
      return !0;
  }
}, isCharacterKey: function(e) {
  if (e >= G.ZERO && e <= G.NINE || e >= G.NUM_ZERO && e <= G.NUM_MULTIPLY || e >= G.A && e <= G.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && e === 0)
    return !0;
  switch (e) {
    case G.SPACE:
    case G.QUESTION_MARK:
    case G.NUM_PLUS:
    case G.NUM_MINUS:
    case G.NUM_PERIOD:
    case G.NUM_DIVISION:
    case G.SEMICOLON:
    case G.DASH:
    case G.EQUALS:
    case G.COMMA:
    case G.PERIOD:
    case G.SLASH:
    case G.APOSTROPHE:
    case G.SINGLE_QUOTE:
    case G.OPEN_SQUARE_BRACKET:
    case G.BACKSLASH:
    case G.CLOSE_SQUARE_BRACKET:
      return !0;
    default:
      return !1;
  }
} };
function Ir(e, t, n) {
  return (e - t) / (n - t);
}
function Pr(e, t, n, o) {
  var r = Ir(t, n, o), i = {};
  switch (e) {
    case "rtl":
      i.right = "".concat(100 * r, "%"), i.transform = "translateX(50%)";
      break;
    case "btt":
      i.bottom = "".concat(100 * r, "%"), i.transform = "translateY(50%)";
      break;
    case "ttb":
      i.top = "".concat(100 * r, "%"), i.transform = "translateY(-50%)";
      break;
    default:
      i.left = "".concat(100 * r, "%"), i.transform = "translateX(-50%)";
  }
  return i;
}
function Zt(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var Bl = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange", "onChangeComplete"], Gs = C.forwardRef(function(e, t) {
  var n, o, r = e.prefixCls, i = e.value, a = e.valueIndex, c = e.onStartMove, s = e.style, l = e.render, u = e.dragging, g = e.onOffsetChange, p = e.onChangeComplete, m = st(e, Bl), d = C.useContext(Bt), y = d.min, b = d.max, h = d.direction, f = d.disabled, v = d.keyboard, x = d.range, I = d.tabIndex, A = d.ariaLabelForHandle, w = d.ariaLabelledByForHandle, k = d.ariaValueTextFormatterForHandle, D = d.styles, V = d.classNames, j = "".concat(r, "-handle"), Z = function(H) {
    f || c(H, a);
  }, Y = Pr(h, i, y, b), R = C.createElement("div", F({ ref: t, className: lt(j, (n = {}, We(n, "".concat(j, "-").concat(a + 1), x), We(n, "".concat(j, "-dragging"), u), n), V.handle), style: L(L(L({}, Y), s), D.handle), onMouseDown: Z, onTouchStart: Z, onKeyDown: function(H) {
    if (!f && v) {
      var J = null;
      switch (H.which || H.keyCode) {
        case G.LEFT:
          J = h === "ltr" || h === "btt" ? -1 : 1;
          break;
        case G.RIGHT:
          J = h === "ltr" || h === "btt" ? 1 : -1;
          break;
        case G.UP:
          J = h !== "ttb" ? 1 : -1;
          break;
        case G.DOWN:
          J = h !== "ttb" ? -1 : 1;
          break;
        case G.HOME:
          J = "min";
          break;
        case G.END:
          J = "max";
          break;
        case G.PAGE_UP:
          J = 2;
          break;
        case G.PAGE_DOWN:
          J = -2;
      }
      J !== null && (H.preventDefault(), g(J, a));
    }
  }, onKeyUp: function(H) {
    switch (H.which || H.keyCode) {
      case G.LEFT:
      case G.RIGHT:
      case G.UP:
      case G.DOWN:
      case G.HOME:
      case G.END:
      case G.PAGE_UP:
      case G.PAGE_DOWN:
        p == null || p();
    }
  }, tabIndex: f ? null : Zt(I, a), role: "slider", "aria-valuemin": y, "aria-valuemax": b, "aria-valuenow": i, "aria-disabled": f, "aria-label": Zt(A, a), "aria-labelledby": Zt(w, a), "aria-valuetext": (o = Zt(k, a)) === null || o === void 0 ? void 0 : o(i), "aria-orientation": h === "ltr" || h === "rtl" ? "horizontal" : "vertical" }, m));
  return l && (R = l(R, { index: a, prefixCls: r, value: i, dragging: u })), R;
});
process.env.NODE_ENV !== "production" && (Gs.displayName = "Handle");
var Ml = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"], Ts = C.forwardRef(function(e, t) {
  var n = e.prefixCls, o = e.style, r = e.onStartMove, i = e.onOffsetChange, a = e.values, c = e.handleRender, s = e.draggingIndex, l = st(e, Ml), u = C.useRef({});
  return C.useImperativeHandle(t, function() {
    return { focus: function(g) {
      var p;
      (p = u.current[g]) === null || p === void 0 || p.focus();
    } };
  }), C.createElement(C.Fragment, null, a.map(function(g, p) {
    return C.createElement(Gs, F({ ref: function(m) {
      m ? u.current[p] = m : delete u.current[p];
    }, dragging: s === p, prefixCls: n, style: Zt(o, p), key: p, value: g, valueIndex: p, onStartMove: r, onOffsetChange: i, render: c }, l));
  }));
});
function zi(e) {
  var t = "touches" in e ? e.touches[0] : e;
  return { pageX: t.pageX, pageY: t.pageY };
}
function Ol(e) {
  var t = e.prefixCls, n = e.style, o = e.children, r = e.value, i = e.onClick, a = C.useContext(Bt), c = a.min, s = a.max, l = a.direction, u = a.includedStart, g = a.includedEnd, p = a.included, m = "".concat(t, "-text"), d = Pr(l, r, c, s);
  return C.createElement("span", { className: lt(m, We({}, "".concat(m, "-active"), p && u <= r && r <= g)), style: L(L({}, d), n), onMouseDown: function(y) {
    y.stopPropagation();
  }, onClick: function() {
    i(r);
  } }, o);
}
function Vl(e) {
  var t = e.prefixCls, n = e.marks, o = e.onClick, r = "".concat(t, "-mark");
  return n.length ? C.createElement("div", { className: r }, n.map(function(i) {
    var a = i.value, c = i.style, s = i.label;
    return C.createElement(Ol, { key: a, prefixCls: r, style: c, value: a, onClick: o }, s);
  })) : null;
}
function Rl(e) {
  var t = e.prefixCls, n = e.value, o = e.style, r = e.activeStyle, i = C.useContext(Bt), a = i.min, c = i.max, s = i.direction, l = i.included, u = i.includedStart, g = i.includedEnd, p = "".concat(t, "-dot"), m = l && u <= n && n <= g, d = L(L({}, Pr(s, n, a, c)), typeof o == "function" ? o(n) : o);
  return m && (d = L(L({}, d), typeof r == "function" ? r(n) : r)), C.createElement("span", { className: lt(p, We({}, "".concat(p, "-active"), m)), style: d });
}
function Hl(e) {
  var t = e.prefixCls, n = e.marks, o = e.dots, r = e.style, i = e.activeStyle, a = C.useContext(Bt), c = a.min, s = a.max, l = a.step, u = C.useMemo(function() {
    var g = /* @__PURE__ */ new Set();
    if (n.forEach(function(m) {
      g.add(m.value);
    }), o && l !== null)
      for (var p = c; p <= s; )
        g.add(p), p += l;
    return Array.from(g);
  }, [c, s, l, o, n]);
  return C.createElement("div", { className: "".concat(t, "-step") }, u.map(function(g) {
    return C.createElement(Rl, { prefixCls: t, key: g, value: g, style: r, activeStyle: i });
  }));
}
function ji(e) {
  var t, n = e.prefixCls, o = e.style, r = e.start, i = e.end, a = e.index, c = e.onStartMove, s = e.replaceCls, l = C.useContext(Bt), u = l.direction, g = l.min, p = l.max, m = l.disabled, d = l.range, y = l.classNames, b = "".concat(n, "-track"), h = Ir(r, g, p), f = Ir(i, g, p), v = function(A) {
    !m && c && c(A, -1);
  }, x = {};
  switch (u) {
    case "rtl":
      x.right = "".concat(100 * h, "%"), x.width = "".concat(100 * f - 100 * h, "%");
      break;
    case "btt":
      x.bottom = "".concat(100 * h, "%"), x.height = "".concat(100 * f - 100 * h, "%");
      break;
    case "ttb":
      x.top = "".concat(100 * h, "%"), x.height = "".concat(100 * f - 100 * h, "%");
      break;
    default:
      x.left = "".concat(100 * h, "%"), x.width = "".concat(100 * f - 100 * h, "%");
  }
  var I = s || lt(b, (We(t = {}, "".concat(b, "-").concat(a + 1), a !== null && d), We(t, "".concat(n, "-track-draggable"), c), t), y.track);
  return C.createElement("div", { className: I, style: L(L({}, x), o), onMouseDown: v, onTouchStart: v });
}
function Wl(e) {
  var t = e.prefixCls, n = e.style, o = e.values, r = e.startPoint, i = e.onStartMove, a = C.useContext(Bt), c = a.included, s = a.range, l = a.min, u = a.styles, g = a.classNames, p = C.useMemo(function() {
    if (!s) {
      if (o.length === 0)
        return [];
      var d = r ?? l, y = o[0];
      return [{ start: Math.min(d, y), end: Math.max(d, y) }];
    }
    for (var b = [], h = 0; h < o.length - 1; h += 1)
      b.push({ start: o[h], end: o[h + 1] });
    return b;
  }, [o, s, r, l]), m = null;
  return (g.tracks || u.tracks) && (m = C.createElement(ji, { index: null, prefixCls: t, start: p[0].start, end: p[p.length - 1].end, replaceCls: lt(g.tracks, "".concat(t, "-tracks")), style: u.tracks })), c ? C.createElement(C.Fragment, null, m, p.map(function(d, y) {
    var b = d.start, h = d.end;
    return C.createElement(ji, { index: y, prefixCls: t, style: L(L({}, Zt(n, y)), u.track), start: b, end: h, key: y, onStartMove: i });
  })) : null;
}
process.env.NODE_ENV !== "production" && (Ts.displayName = "Handles");
var Bs = C.forwardRef(function(e, t) {
  var n, o = e.prefixCls, r = o === void 0 ? "rc-slider" : o, i = e.className, a = e.style, c = e.classNames, s = e.styles, l = e.disabled, u = l !== void 0 && l, g = e.keyboard, p = g === void 0 || g, m = e.autoFocus, d = e.onFocus, y = e.onBlur, b = e.min, h = b === void 0 ? 0 : b, f = e.max, v = f === void 0 ? 100 : f, x = e.step, I = x === void 0 ? 1 : x, A = e.value, w = e.defaultValue, k = e.range, D = e.count, V = e.onChange, j = e.onBeforeChange, Z = e.onAfterChange, Y = e.onChangeComplete, R = e.allowCross, H = R === void 0 || R, J = e.pushable, N = J !== void 0 && J, T = e.draggableTrack, E = e.reverse, z = e.vertical, P = e.included, le = P === void 0 || P, ae = e.startPoint, $ = e.trackStyle, te = e.handleStyle, be = e.railStyle, U = e.dotStyle, Ne = e.activeDotStyle, Ae = e.marks, Ke = e.dots, je = e.handleRender, _e = e.tabIndex, De = _e === void 0 ? 0 : _e, xt = e.ariaLabelForHandle, St = e.ariaLabelledByForHandle, Je = e.ariaValueTextFormatterForHandle, nt = C.useRef(), Mt = C.useRef(), vt = C.useMemo(function() {
    return z ? E ? "ttb" : "btt" : E ? "rtl" : "ltr";
  }, [E, z]), qe = C.useMemo(function() {
    return isFinite(h) ? h : 0;
  }, [h]), Ot = C.useMemo(function() {
    return isFinite(v) ? v : 100;
  }, [v]), Nt = C.useMemo(function() {
    return I !== null && I <= 0 ? 1 : I;
  }, [I]), Nc = C.useMemo(function() {
    return typeof N == "boolean" ? !!N && Nt : N >= 0 && N;
  }, [N, Nt]), vn = C.useMemo(function() {
    return Object.keys(Ae || {}).map(function(M) {
      var X = Ae[M], O = { value: Number(M) };
      return X && ft(X) === "object" && !C.isValidElement(X) && ("label" in X || "style" in X) ? (O.style = X.style, O.label = X.label) : O.label = X, O;
    }).filter(function(M) {
      var X = M.label;
      return X || typeof X == "number";
    }).sort(function(M, X) {
      return M.value - X.value;
    });
  }, [Ae]), Ec = function(M, X, O, ce, ne, me) {
    var ve = C.useCallback(function(ie) {
      var ue = isFinite(ie);
      return ue = Math.min(X, ie), Math.max(M, ue);
    }, [M, X]), re = C.useCallback(function(ie) {
      if (O !== null) {
        var ue = M + Math.round((ve(ie) - M) / O) * O, _ = function(se) {
          return (String(se).split(".")[1] || "").length;
        }, Le = Math.max(_(O), _(X), _(M)), B = Number(ue.toFixed(Le));
        return M <= B && B <= X ? B : null;
      }
      return null;
    }, [O, M, X, ve]), we = C.useCallback(function(ie) {
      var ue = ve(ie), _ = ce.map(function(se) {
        return se.value;
      });
      O !== null && _.push(re(ie)), _.push(M, X);
      var Le = _[0], B = X - M;
      return _.forEach(function(se) {
        var Re = Math.abs(ue - se);
        Re <= B && (Le = se, B = Re);
      }), Le;
    }, [M, X, ce, O, ve, re]), Fe = function ie(ue, _, Le) {
      var B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
      if (typeof _ == "number") {
        var se, Re = ue[Le], ot = Re + _, ye = [];
        ce.forEach(function(Ge) {
          ye.push(Ge.value);
        }), ye.push(M, X), ye.push(re(Re));
        var dt = _ > 0 ? 1 : -1;
        B === "unit" ? ye.push(re(Re + dt * O)) : ye.push(re(ot)), ye = ye.filter(function(Ge) {
          return Ge !== null;
        }).filter(function(Ge) {
          return _ < 0 ? Ge <= Re : Ge >= Re;
        }), B === "unit" && (ye = ye.filter(function(Ge) {
          return Ge !== Re;
        }));
        var gt = B === "unit" ? Re : ot;
        se = ye[0];
        var tt = Math.abs(se - gt);
        if (ye.forEach(function(Ge) {
          var rt = Math.abs(Ge - gt);
          rt < tt && (se = Ge, tt = rt);
        }), se === void 0)
          return _ < 0 ? M : X;
        if (B === "dist")
          return se;
        if (Math.abs(_) > 1) {
          var At = it(ue);
          return At[Le] = se, ie(At, _ - dt, Le, B);
        }
        return se;
      }
      return _ === "min" ? M : _ === "max" ? X : void 0;
    }, ke = function(ie, ue, _) {
      var Le = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", B = ie[_], se = Fe(ie, ue, _, Le);
      return { value: se, changed: se !== B };
    }, et = function(ie) {
      return me === null && ie === 0 || typeof me == "number" && ie < me;
    };
    return [we, function(ie, ue, _) {
      var Le = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", B = ie.map(we), se = B[_], Re = Fe(B, ue, _, Le);
      if (B[_] = Re, ne === !1) {
        var ot = me || 0;
        _ > 0 && B[_ - 1] !== se && (B[_] = Math.max(B[_], B[_ - 1] + ot)), _ < B.length - 1 && B[_ + 1] !== se && (B[_] = Math.min(B[_], B[_ + 1] - ot));
      } else if (typeof me == "number" || me === null) {
        for (var ye = _ + 1; ye < B.length; ye += 1)
          for (var dt = !0; et(B[ye] - B[ye - 1]) && dt; ) {
            var gt = ke(B, 1, ye);
            B[ye] = gt.value, dt = gt.changed;
          }
        for (var tt = _; tt > 0; tt -= 1)
          for (var At = !0; et(B[tt] - B[tt - 1]) && At; ) {
            var Ge = ke(B, -1, tt - 1);
            B[tt - 1] = Ge.value, At = Ge.changed;
          }
        for (var rt = B.length - 1; rt > 0; rt -= 1)
          for (var Me = !0; et(B[rt] - B[rt - 1]) && Me; ) {
            var Pe = ke(B, -1, rt - 1);
            B[rt - 1] = Pe.value, Me = Pe.changed;
          }
        for (var Ie = 0; Ie < B.length - 1; Ie += 1)
          for (var He = !0; et(B[Ie + 1] - B[Ie]) && He; ) {
            var Ht = ke(B, 1, Ie + 1);
            B[Ie + 1] = Ht.value, He = Ht.changed;
          }
      }
      return { value: B[_], values: B };
    }];
  }(qe, Ot, Nt, vn, H, Nc), ei = pe(Ec, 2), yn = ei[0], ti = ei[1], kc = function(M, X) {
    var O = X || {}, ce = O.defaultValue, ne = O.value, me = O.onChange, ve = O.postState, re = pe(Zi(function() {
      return Lo(ne) ? ne : Lo(ce) ? typeof ce == "function" ? ce() : ce : typeof M == "function" ? M() : M;
    }), 2), we = re[0], Fe = re[1], ke = ne !== void 0 ? ne : we, et = ve ? ve(ke) : ke, ie = Fi(me), ue = pe(Zi([ke]), 2), _ = ue[0], Le = ue[1];
    return Xi(function() {
      var B = _[0];
      we !== B && ie(we, B);
    }, [_]), Xi(function() {
      Lo(ne) || Fe(ne);
    }, [ne]), [et, Fi(function(B, se) {
      Fe(B, se), Le([ke], se);
    })];
  }(w, { value: A }), ni = pe(kc, 2), Et = ni[0], Lc = ni[1], ut = C.useMemo(function() {
    var M = Et == null ? [] : Array.isArray(Et) ? Et : [Et], X = pe(M, 1)[0], O = Et === null ? [] : [X === void 0 ? qe : X];
    if (k) {
      if (O = it(M), D || Et === void 0) {
        var ce = D >= 0 ? D + 1 : 2;
        for (O = O.slice(0, ce); O.length < ce; ) {
          var ne;
          O.push((ne = O[O.length - 1]) !== null && ne !== void 0 ? ne : qe);
        }
      }
      O.sort(function(me, ve) {
        return me - ve;
      });
    }
    return O.forEach(function(me, ve) {
      O[ve] = yn(me);
    }), O;
  }, [Et, k, qe, D, yn]), $t = C.useRef(ut);
  $t.current = ut;
  var Vt = function(M) {
    return k ? M : M[0];
  }, vo = function(M) {
    var X = it(M).sort(function(O, ce) {
      return O - ce;
    });
    V && !function(O, ce) {
      var ne = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], me = /* @__PURE__ */ new Set();
      return function ve(re, we) {
        var Fe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, ke = me.has(re);
        if (jt(!ke, "Warning: There may be circular references"), ke)
          return !1;
        if (re === we)
          return !0;
        if (ne && Fe > 1)
          return !1;
        me.add(re);
        var et = Fe + 1;
        if (Array.isArray(re)) {
          if (!Array.isArray(we) || re.length !== we.length)
            return !1;
          for (var ie = 0; ie < re.length; ie++)
            if (!ve(re[ie], we[ie], et))
              return !1;
          return !0;
        }
        if (re && we && ft(re) === "object" && ft(we) === "object") {
          var ue = Object.keys(re);
          return ue.length === Object.keys(we).length && ue.every(function(_) {
            return ve(re[_], we[_], et);
          });
        }
        return !1;
      }(O, ce);
    }(X, $t.current, !0) && V(Vt(X)), Lc(X);
  }, oi = function() {
    Z == null || Z(Vt($t.current)), jt(!Z, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), Y == null || Y(Vt($t.current));
  }, Gc = function(M, X, O, ce, ne, me, ve, re, we) {
    var Fe = pe(C.useState(null), 2), ke = Fe[0], et = Fe[1], ie = pe(C.useState(-1), 2), ue = ie[0], _ = ie[1], Le = pe(C.useState(O), 2), B = Le[0], se = Le[1], Re = pe(C.useState(O), 2), ot = Re[0], ye = Re[1], dt = C.useRef(null), gt = C.useRef(null);
    C.useEffect(function() {
      ue === -1 && se(O);
    }, [O, ue]), C.useEffect(function() {
      return function() {
        document.removeEventListener("mousemove", dt.current), document.removeEventListener("mouseup", gt.current), document.removeEventListener("touchmove", dt.current), document.removeEventListener("touchend", gt.current);
      };
    }, []);
    var tt = function(Me, Pe) {
      B.some(function(Ie, He) {
        return Ie !== Me[He];
      }) && (Pe !== void 0 && et(Pe), se(Me), ve(Me));
    }, At = function(Me, Pe) {
      if (Me === -1) {
        var Ie = ot[0], He = ot[ot.length - 1], Ht = ce - Ie, Cn = ne - He, yt = Pe * (ne - ce);
        yt = Math.max(yt, Ht), yt = Math.min(yt, Cn);
        var Co = me(Ie + yt);
        yt = Co - Ie;
        var kt = ot.map(function(xn) {
          return xn + yt;
        });
        tt(kt);
      } else {
        var Qt = (ne - ce) * Pe, wt = it(B);
        wt[Me] = ot[Me];
        var pt = we(wt, Qt, Me, "dist");
        tt(pt.values, pt.value);
      }
    }, Ge = C.useRef(At);
    Ge.current = At;
    var rt = C.useMemo(function() {
      var Me = it(O).sort(function(Ie, He) {
        return Ie - He;
      }), Pe = it(B).sort(function(Ie, He) {
        return Ie - He;
      });
      return Me.every(function(Ie, He) {
        return Ie === Pe[He];
      }) ? B : O;
    }, [O, B]);
    return [ue, ke, rt, function(Me, Pe, Ie) {
      Me.stopPropagation();
      var He = Ie || O, Ht = He[Pe];
      _(Pe), et(Ht), ye(He);
      var Cn = zi(Me), yt = Cn.pageX, Co = Cn.pageY, kt = function(wt) {
        wt.preventDefault();
        var pt, xn = zi(wt), Oc = xn.pageX, Vc = xn.pageY, mi = Oc - yt, hi = Vc - Co, fi = M.current.getBoundingClientRect(), bi = fi.width, yi = fi.height;
        switch (X) {
          case "btt":
            pt = -hi / yi;
            break;
          case "ttb":
            pt = hi / yi;
            break;
          case "rtl":
            pt = -mi / bi;
            break;
          default:
            pt = mi / bi;
        }
        Ge.current(Pe, pt);
      }, Qt = function wt(pt) {
        pt.preventDefault(), document.removeEventListener("mouseup", wt), document.removeEventListener("mousemove", kt), document.removeEventListener("touchend", wt), document.removeEventListener("touchmove", kt), dt.current = null, gt.current = null, _(-1), re();
      };
      document.addEventListener("mouseup", Qt), document.addEventListener("mousemove", kt), document.addEventListener("touchend", Qt), document.addEventListener("touchmove", kt), dt.current = kt, gt.current = Qt;
    }];
  }(Mt, vt, ut, qe, Ot, yn, vo, oi, ti), In = pe(Gc, 4), ri = In[0], Tc = In[1], yo = In[2], ii = In[3], ai = function(M, X) {
    if (!u) {
      var O = 0, ce = Ot - qe;
      ut.forEach(function(me, ve) {
        var re = Math.abs(M - me);
        re <= ce && (ce = re, O = ve);
      });
      var ne = it(ut);
      ne[O] = M, k && !ut.length && D === void 0 && ne.push(M), j == null || j(Vt(ne)), vo(ne), X && ii(X, O, ne);
    }
  }, si = pe(C.useState(null), 2), Io = si[0], ci = si[1];
  C.useEffect(function() {
    if (Io !== null) {
      var M = ut.indexOf(Io);
      M >= 0 && nt.current.focus(M);
    }
    ci(null);
  }, [Io]);
  var Bc = C.useMemo(function() {
    return T && Nt === null ? (process.env.NODE_ENV !== "production" && jt(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : T;
  }, [T, Nt]), li = function(M, X) {
    ii(M, X), j == null || j(Vt($t.current));
  }, ui = ri !== -1;
  C.useEffect(function() {
    if (!ui) {
      var M = ut.lastIndexOf(Tc);
      nt.current.focus(M);
    }
  }, [ui]);
  var Rt = C.useMemo(function() {
    return it(yo).sort(function(M, X) {
      return M - X;
    });
  }, [yo]), di = pe(C.useMemo(function() {
    return k ? [Rt[0], Rt[Rt.length - 1]] : [qe, Rt[0]];
  }, [Rt, k, qe]), 2), gi = di[0], pi = di[1];
  C.useImperativeHandle(t, function() {
    return { focus: function() {
      nt.current.focus(0);
    }, blur: function() {
      var M = document.activeElement;
      Mt.current.contains(M) && (M == null || M.blur());
    } };
  }), C.useEffect(function() {
    m && nt.current.focus(0);
  }, []);
  var Mc = C.useMemo(function() {
    return { min: qe, max: Ot, direction: vt, disabled: u, keyboard: p, step: Nt, included: le, includedStart: gi, includedEnd: pi, range: k, tabIndex: De, ariaLabelForHandle: xt, ariaLabelledByForHandle: St, ariaValueTextFormatterForHandle: Je, styles: s || {}, classNames: c || {} };
  }, [qe, Ot, vt, u, p, Nt, le, gi, pi, k, De, xt, St, Je, s, c]);
  return C.createElement(Bt.Provider, { value: Mc }, C.createElement("div", { ref: Mt, className: lt(r, i, (n = {}, We(n, "".concat(r, "-disabled"), u), We(n, "".concat(r, "-vertical"), z), We(n, "".concat(r, "-horizontal"), !z), We(n, "".concat(r, "-with-marks"), vn.length), n)), style: a, onMouseDown: function(M) {
    M.preventDefault();
    var X, O = Mt.current.getBoundingClientRect(), ce = O.width, ne = O.height, me = O.left, ve = O.top, re = O.bottom, we = O.right, Fe = M.clientX, ke = M.clientY;
    switch (vt) {
      case "btt":
        X = (re - ke) / ne;
        break;
      case "ttb":
        X = (ke - ve) / ne;
        break;
      case "rtl":
        X = (we - Fe) / ce;
        break;
      default:
        X = (Fe - me) / ce;
    }
    ai(yn(qe + X * (Ot - qe)), M);
  } }, C.createElement("div", { className: lt("".concat(r, "-rail"), c == null ? void 0 : c.rail), style: L(L({}, be), s == null ? void 0 : s.rail) }), C.createElement(Wl, { prefixCls: r, style: $, values: Rt, startPoint: ae, onStartMove: Bc ? li : null }), C.createElement(Hl, { prefixCls: r, marks: vn, dots: Ke, style: U, activeStyle: Ne }), C.createElement(Ts, { ref: nt, prefixCls: r, style: te, values: yo, draggingIndex: ri, onStartMove: li, onOffsetChange: function(M, X) {
    if (!u) {
      var O = ti(ut, M, X);
      j == null || j(Vt(ut)), vo(O.values), ci(O.value);
    }
  }, onFocus: d, onBlur: y, handleRender: je, onChangeComplete: oi }), C.createElement(Vl, { prefixCls: r, marks: vn, onClick: ai })));
});
process.env.NODE_ENV !== "production" && (Bs.displayName = "Slider");
const lo = ({ range: e, min: t, max: n, value: o, onChange: r, vertical: i }) => S.jsx(Bs, { className: "_accRcSlider_dhokk_1", range: e, min: t, max: n, value: o, vertical: i, onChange: r }), Fl = ({ accState: e, onChangeAccState: t }) => {
  const { isBrightness: n, brightness: o } = e.brightness, r = () => {
    t((i) => {
      const a = !i.brightness.isBrightness;
      i.brightness.isBrightness = a, i.brightness.brightness = a ? 150 : 0;
    });
  };
  return S.jsxs(de, { Icon: Ll, titleTranslationKey: "colors.brightnessControl", title: "Brightness Control", elementType: n ? "div" : "button", isActive: n, onToggle: n ? void 0 : r, stats: n ? `${o}%` : void 0, children: [n ? S.jsxs("div", { className: "_accBrightnessControl_16gcc_1", children: [S.jsx(Ue, { onClick: () => {
    t((i) => {
      const { brightness: a } = i;
      a.brightness < 500 && i.brightness.brightness++;
    });
  }, controlType: "increase" }), S.jsx(Ue, { onClick: r, controlType: "init" }), S.jsx(Ue, { onClick: () => {
    t((i) => {
      const { brightness: a } = i;
      a.brightness > 100 && i.brightness.brightness--;
    });
  }, controlType: "decrease" })] }) : null, n && S.jsx(lo, { range: !0, min: 150, max: 500, value: o, onChange: (i) => {
    t((a) => {
      a.brightness.brightness = i;
    });
  } })] });
}, Ms = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "Brightness4SharpIcon", ...e }, C.createElement("path", { d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" })), Pl = ({ accState: e, onChangeAccState: t }) => S.jsx(de, { Icon: Ms, isToggled: e.isDarkContrast, onToggle: () => {
  t((n) => {
    n.isDarkContrast = !n.isDarkContrast;
  });
}, titleTranslationKey: "colors.darkContrast", title: "Dark Contrast" }), Xl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "ContrastSharpIcon", ...e }, C.createElement("path", { d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z" })), Zl = ({ accState: e, onChangeAccState: t }) => {
  const { isHighContrast: n, contrast: o } = e.highContrast, r = () => {
    t((i) => {
      const a = !i.highContrast.isHighContrast;
      i.highContrast.isHighContrast = a, i.highContrast.contrast = a ? 125 : 0;
    });
  };
  return S.jsxs(de, { Icon: Xl, titleTranslationKey: "colors.highContrast", title: "High Contrast", stats: n ? `${o}%` : void 0, elementType: n ? "div" : "button", isActive: n, onToggle: n ? void 0 : r, children: [n ? S.jsx(Yt, { onIncrease: () => {
    t((i) => {
      const { highContrast: a } = i;
      a.contrast < 200 && i.highContrast.contrast++;
    });
  }, onToggle: r, onDescrease: () => {
    t((i) => {
      const { highContrast: a } = i;
      a.contrast > 100 && i.highContrast.contrast--;
    });
  } }) : null, n && S.jsx(lo, { range: !0, min: 125, max: 200, value: o, onChange: (i) => {
    t((a) => {
      a.highContrast.contrast = i;
    });
  } })] });
}, Os = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "InvertColorsIcon", ...e }, C.createElement("path", { d: "M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14L12 4.81M6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2 6.35 7.56z" })), zl = ({ accState: e, onChangeAccState: t }) => {
  const { isHighSaturation: n, saturation: o } = e.highSaturation, r = () => {
    t((i) => {
      const a = !i.highSaturation.isHighSaturation;
      i.highSaturation.isHighSaturation = a, i.highSaturation.saturation = a ? 200 : 0;
    });
  };
  return S.jsxs(de, { Icon: Os, titleTranslationKey: "colors.highSaturation", title: "High Saturation", stats: n ? `${o}%` : void 0, elementType: n ? "div" : "button", isActive: n, onToggle: n ? void 0 : r, children: [n ? S.jsx(Yt, { onIncrease: () => {
    t((i) => {
      const { highSaturation: a } = i;
      a.saturation < 800 && i.highSaturation.saturation++;
    });
  }, onToggle: r, onDescrease: () => {
    t((i) => {
      const { highSaturation: a } = i;
      a.saturation > 200 && i.highSaturation.saturation--;
    });
  } }) : null, n && S.jsx(lo, { range: !0, min: 200, max: 800, value: o, onChange: (i) => {
    t((a) => {
      a.highSaturation.saturation = i;
    });
  } })] });
}, jl = ({ accState: e, onChangeAccState: t }) => S.jsx(de, { Icon: Ms, isToggled: e.isLightContrast, onToggle: () => {
  t((n) => {
    n.isLightContrast = !n.isLightContrast;
  });
}, titleTranslationKey: "colors.lightContrast", title: "Light Contrast" }), _l = ({ accState: e, onChangeAccState: t }) => {
  const { isLowSaturation: n, saturation: o } = e.lowSaturation, r = () => {
    t((i) => {
      const a = !i.lowSaturation.isLowSaturation;
      i.lowSaturation.isLowSaturation = a, i.lowSaturation.saturation = a ? 50 : 0;
    });
  };
  return S.jsxs(de, { Icon: Os, titleTranslationKey: "colors.lowSaturation", title: "Low Saturation", stats: n ? `${o}%` : void 0, styleIcon: { transform: "rotate(180deg)" }, elementType: n ? "div" : "button", isActive: n, onToggle: n ? void 0 : r, children: [n ? S.jsx(Yt, { onIncrease: () => {
    t((i) => {
      const { lowSaturation: a } = i;
      a.saturation < 199 && i.lowSaturation.saturation++;
    });
  }, onToggle: r, onDescrease: () => {
    t((i) => {
      const { lowSaturation: a } = i;
      a.saturation > 50 && i.lowSaturation.saturation--;
    });
  } }) : null, n && S.jsx(lo, { range: !0, min: 50, max: 199, value: o, onChange: (i) => {
    t((a) => {
      a.lowSaturation.saturation = i;
    });
  } })] });
}, Dl = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "MonochromePhotosIcon", ...e }, C.createElement("path", { d: "M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z" })), Jl = ({ accState: e, onChangeAccState: t }) => S.jsx(de, { Icon: Dl, isToggled: e.isMonochrome, onToggle: () => {
  t((n) => {
    n.isMonochrome = !n.isMonochrome;
  });
}, titleTranslationKey: "colors.monochrom", title: "Monochrom" });
function uo() {
  return (uo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function Vs(e, t) {
  if (e == null)
    return {};
  var n, o, r = {}, i = Object.keys(e);
  for (o = 0; o < i.length; o++)
    t.indexOf(n = i[o]) >= 0 || (r[n] = e[n]);
  return r;
}
function Cr(e) {
  var t = fe(e), n = fe(function(o) {
    t.current && t.current(o);
  });
  return t.current = e, n.current;
}
var gn = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, cn = function(e) {
  return "touches" in e;
}, xr = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, _i = function(e, t, n) {
  var o = e.getBoundingClientRect(), r = cn(t) ? function(i, a) {
    for (var c = 0; c < i.length; c++)
      if (i[c].identifier === a)
        return i[c];
    return i[0];
  }(t.touches, n) : t;
  return { left: gn((r.pageX - (o.left + xr(e).pageXOffset)) / o.width), top: gn((r.pageY - (o.top + xr(e).pageYOffset)) / o.height) };
}, Di = function(e) {
  !cn(e) && e.preventDefault();
}, Rs = Ee.memo(function(e) {
  var t = e.onMove, n = e.onKey, o = Vs(e, ["onMove", "onKey"]), r = fe(null), i = Cr(t), a = Cr(n), c = fe(null), s = fe(!1), l = Ct(function() {
    var m = function(b) {
      Di(b), (cn(b) ? b.touches.length > 0 : b.buttons > 0) && r.current ? i(_i(r.current, b, c.current)) : y(!1);
    }, d = function() {
      return y(!1);
    };
    function y(b) {
      var h = s.current, f = xr(r.current), v = b ? f.addEventListener : f.removeEventListener;
      v(h ? "touchmove" : "mousemove", m), v(h ? "touchend" : "mouseup", d);
    }
    return [function(b) {
      var h = b.nativeEvent, f = r.current;
      if (f && (Di(h), !function(x, I) {
        return I && !cn(x);
      }(h, s.current) && f)) {
        if (cn(h)) {
          s.current = !0;
          var v = h.changedTouches || [];
          v.length && (c.current = v[0].identifier);
        }
        f.focus(), i(_i(f, h, c.current)), y(!0);
      }
    }, function(b) {
      var h = b.which || b.keyCode;
      h < 37 || h > 40 || (b.preventDefault(), a({ left: h === 39 ? 0.05 : h === 37 ? -0.05 : 0, top: h === 40 ? 0.05 : h === 38 ? -0.05 : 0 }));
    }, y];
  }, [a, i]), u = l[0], g = l[1], p = l[2];
  return Ze(function() {
    return p;
  }, [p]), Ee.createElement("div", uo({}, o, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: r, onKeyDown: g, tabIndex: 0, role: "slider" }));
}), Xr = function(e) {
  return e.filter(Boolean).join(" ");
}, Hs = function(e) {
  var t = e.color, n = e.left, o = e.top, r = o === void 0 ? 0.5 : o, i = Xr(["react-colorful__pointer", e.className]);
  return Ee.createElement("div", { className: i, style: { top: 100 * r + "%", left: 100 * n + "%" } }, Ee.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Be = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Go = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Be(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Be(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Sr = function(e) {
  var t = function(n) {
    var o = n.s, r = n.v, i = n.a, a = (200 - o) * r / 100;
    return { h: Be(n.h), s: Be(a > 0 && a < 200 ? o * r / 100 / (a <= 100 ? a : 200 - a) * 100 : 0), l: Be(a / 2), a: Be(i, 2) };
  }(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, An = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Yl = Ee.memo(function(e) {
  var t = e.hue, n = e.onChange, o = Xr(["react-colorful__hue", e.className]);
  return Ee.createElement("div", { className: o }, Ee.createElement(Rs, { onMove: function(r) {
    n({ h: 360 * r.left });
  }, onKey: function(r) {
    n({ h: gn(t + 360 * r.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Be(t), "aria-valuemax": "360", "aria-valuemin": "0" }, Ee.createElement(Hs, { className: "react-colorful__hue-pointer", left: t / 360, color: Sr({ h: t, s: 100, v: 100, a: 1 }) })));
}), Ul = Ee.memo(function(e) {
  var t = e.hsva, n = e.onChange, o = { backgroundColor: Sr({ h: t.h, s: 100, v: 100, a: 1 }) };
  return Ee.createElement("div", { className: "react-colorful__saturation", style: o }, Ee.createElement(Rs, { onMove: function(r) {
    n({ s: 100 * r.left, v: 100 - 100 * r.top });
  }, onKey: function(r) {
    n({ s: gn(t.s + 100 * r.left, 0, 100), v: gn(t.v - 100 * r.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Be(t.s) + "%, Brightness " + Be(t.v) + "%" }, Ee.createElement(Hs, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Sr(t) })));
}), Ws = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, $l = typeof window < "u" ? oe : Ze, Ji = /* @__PURE__ */ new Map(), Ql = function(e) {
  var t, n = e.className, o = e.colorModel, r = e.color, i = r === void 0 ? o.defaultColor : r, a = e.onChange, c = Vs(e, ["className", "colorModel", "color", "onChange"]), s = fe(null);
  t = s, $l(function() {
    var m = t.current ? t.current.ownerDocument : document;
    if (m !== void 0 && !Ji.has(m)) {
      var d = m.createElement("style");
      d.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Ji.set(m, d);
      var y = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
      y && d.setAttribute("nonce", y), m.head.appendChild(d);
    }
  }, []);
  var l = function(m, d, y) {
    var b = Cr(y), h = Se(function() {
      return m.toHsva(d);
    }), f = h[0], v = h[1], x = fe({ color: d, hsva: f });
    Ze(function() {
      if (!m.equal(d, x.current.color)) {
        var A = m.toHsva(d);
        x.current = { hsva: A, color: d }, v(A);
      }
    }, [d, m]), Ze(function() {
      var A;
      Ws(f, x.current.hsva) || m.equal(A = m.fromHsva(f), x.current.color) || (x.current = { hsva: f, color: A }, b(A));
    }, [f, m, b]);
    var I = Ve(function(A) {
      v(function(w) {
        return Object.assign({}, w, A);
      });
    }, []);
    return [f, I];
  }(o, i, a), u = l[0], g = l[1], p = Xr(["react-colorful", n]);
  return Ee.createElement("div", uo({}, c, { ref: s, className: p }), Ee.createElement(Ul, { hsva: u, onChange: g }), Ee.createElement(Yl, { hue: u.h, onChange: g, className: "react-colorful__last-control" }));
}, Kl = { defaultColor: "000", toHsva: function(e) {
  return function(t) {
    var n = t.r, o = t.g, r = t.b, i = t.a, a = Math.max(n, o, r), c = a - Math.min(n, o, r), s = c ? a === n ? (o - r) / c : a === o ? 2 + (r - n) / c : 4 + (n - o) / c : 0;
    return { h: Be(60 * (s < 0 ? s + 6 : s)), s: Be(a ? c / a * 100 : 0), v: Be(a / 255 * 100), a: i };
  }(Go(e));
}, fromHsva: function(e) {
  return function(t) {
    return function(n) {
      var o = n.r, r = n.g, i = n.b, a = n.a, c = a < 1 ? An(Be(255 * a)) : "";
      return "#" + An(o) + An(r) + An(i) + c;
    }(function(n) {
      var o = n.h, r = n.s, i = n.v, a = n.a;
      o = o / 360 * 6, r /= 100, i /= 100;
      var c = Math.floor(o), s = i * (1 - r), l = i * (1 - (o - c) * r), u = i * (1 - (1 - o + c) * r), g = c % 6;
      return { r: Be(255 * [i, l, s, s, u, i][g]), g: Be(255 * [u, i, i, l, s, s][g]), b: Be(255 * [s, s, u, i, i, l][g]), a: Be(a, 2) };
    }(t));
  }({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Ws(Go(e), Go(t));
} }, ql = function(e) {
  return Ee.createElement(Ql, uo({}, e, { colorModel: Kl }));
};
const Fs = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "PaletteIcon", ...e }, C.createElement("path", { d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z" })), eu = ({ accState: e, onChangeAccState: t }) => {
  const { color: n } = e, o = (r) => {
    t((i) => {
      i.color = r;
    });
  };
  return S.jsx(de, { Icon: Fs, titleTranslationKey: "colors.textColorPicker", elementType: "div", title: "Text Color Picker", className: "_accButtonTextColorPicker_dw9mu_1", children: S.jsxs("div", { className: "_accTextColorPicker_dw9mu_16", children: [S.jsxs("div", { className: "_accTextColorPicker__topContainer_dw9mu_22", children: [S.jsx(Ue, { onClick: () => {
    o("");
  }, controlType: "init" }), S.jsx("input", { placeholder: "#000000", type: "text", value: n, className: "_accTextColorPicker__inputText_dw9mu_30", onChange: (r) => o(r.target.value) })] }), S.jsx(ql, { className: "_accTextColorPicker__hexColorPicker_dw9mu_35", color: n, onChange: o })] }) });
}, tu = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "BlindIcon", ...e }, C.createElement("circle", { cx: 11.5, cy: 3.5, r: 2 }), C.createElement("path", { d: "M12.13 7.12c-.17-.35-.44-.65-.8-.85-.61-.36-1.34-.34-1.93-.03v-.01L4 9.3V14h2v-3.54l1.5-.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8 6 23l3-4 .22-3.54L11 18v5h2v-6.5l-1.97-2.81c-.04-.52-.14-1.76.45-3.4.75 1.14 1.88 1.98 3.2 2.41L20.63 23l.87-.5-5.48-9.5H17v-2c-.49 0-2.88.17-4.08-2.21" })), nu = ({ accState: e, onChangeAccState: t }) => S.jsx(de, { Icon: tu, isToggled: e.isVisualImpairment, onToggle: () => {
  t((n) => {
    n.isVisualImpairment = !n.isVisualImpairment;
  });
}, titleTranslationKey: "colors.visualImpairment", title: "Visual Impairment" }), ou = ({ accState: e, onChangeAccState: t }) => S.jsxs(S.Fragment, { children: [S.jsx(kl, { accState: e, onChangeAccState: t }), S.jsx(jl, { accState: e, onChangeAccState: t }), S.jsx(Pl, { accState: e, onChangeAccState: t }), S.jsx(Zl, { accState: e, onChangeAccState: t }), S.jsx(Fl, { accState: e, onChangeAccState: t }), S.jsx(zl, { accState: e, onChangeAccState: t }), S.jsx(_l, { accState: e, onChangeAccState: t }), S.jsx(Jl, { accState: e, onChangeAccState: t }), S.jsx(nu, { accState: e, onChangeAccState: t }), S.jsx(eu, { accState: e, onChangeAccState: t })] }), ru = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "AdsClickIcon", ...e }, C.createElement("path", { d: "M11.71 17.99C8.53 17.84 6 15.22 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63C15.48 9.31 13.89 8 12 8c-2.21 0-4 1.79-4 4 0 1.89 1.31 3.48 3.08 3.89l.63 2.1zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z" })), iu = { type: "logger", log(e) {
  this.output("log", e);
}, warn(e) {
  this.output("warn", e);
}, error(e) {
  this.output("error", e);
}, output(e, t) {
  console && console[e];
} };
class Jn {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || iu, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, o, r) {
    return r && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${o}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Jn(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options).prefix = t.prefix || this.prefix, new Jn(this.logger, t);
  }
}
var ht = new Jn();
class go {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((o) => {
      this.observers[o] = this.observers[o] || [], this.observers[o].push(n);
    }), this;
  }
  off(t, n) {
    this.observers[t] && (n ? this.observers[t] = this.observers[t].filter((o) => o !== n) : delete this.observers[t]);
  }
  emit(t) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      o[r - 1] = arguments[r];
    this.observers[t] && [].concat(this.observers[t]).forEach((i) => {
      i(...o);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((i) => {
      i.apply(i, [t, ...o]);
    });
  }
}
function qt() {
  let e, t;
  const n = new Promise((o, r) => {
    e = o, t = r;
  });
  return n.resolve = e, n.reject = t, n;
}
function Yi(e) {
  return e == null ? "" : "" + e;
}
function Zr(e, t, n) {
  function o(a) {
    return a && a.indexOf("###") > -1 ? a.replace(/###/g, ".") : a;
  }
  function r() {
    return !e || typeof e == "string";
  }
  const i = typeof t != "string" ? [].concat(t) : t.split(".");
  for (; i.length > 1; ) {
    if (r())
      return {};
    const a = o(i.shift());
    !e[a] && n && (e[a] = new n()), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {};
  }
  return r() ? {} : { obj: e, k: o(i.shift()) };
}
function Ui(e, t, n) {
  const { obj: o, k: r } = Zr(e, t, Object);
  o[r] = n;
}
function Yn(e, t) {
  const { obj: n, k: o } = Zr(e, t);
  if (n)
    return n[o];
}
function Ps(e, t, n) {
  for (const o in t)
    o !== "__proto__" && o !== "constructor" && (o in e ? typeof e[o] == "string" || e[o] instanceof String || typeof t[o] == "string" || t[o] instanceof String ? n && (e[o] = t[o]) : Ps(e[o], t[o], n) : e[o] = t[o]);
  return e;
}
function Wt(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var au = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
function su(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => au[t]) : e;
}
const cu = [" ", ",", "?", "!", ";"];
function Un(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e)
    return;
  if (e[t])
    return e[t];
  const o = t.split(n);
  let r = e;
  for (let i = 0; i < o.length; ++i) {
    if (!r || typeof r[o[i]] == "string" && i + 1 < o.length)
      return;
    if (r[o[i]] === void 0) {
      let a = 2, c = o.slice(i, i + a).join(n), s = r[c];
      for (; s === void 0 && o.length > i + a; )
        a++, c = o.slice(i, i + a).join(n), s = r[c];
      if (s === void 0)
        return;
      if (s === null)
        return null;
      if (t.endsWith(c)) {
        if (typeof s == "string")
          return s;
        if (c && typeof s[c] == "string")
          return s[c];
      }
      const l = o.slice(i + a).join(n);
      return l ? Un(s, l, n) : void 0;
    }
    r = r[o[i]];
  }
  return r;
}
function $n(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class $i extends go {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, o) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, a = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let c = [t, n];
    o && typeof o != "string" && (c = c.concat(o)), o && typeof o == "string" && (c = c.concat(i ? o.split(i) : o)), t.indexOf(".") > -1 && (c = t.split("."));
    const s = Yn(this.data, c);
    return s || !a || typeof o != "string" ? s : Un(this.data && this.data[t] && this.data[t][n], o, i);
  }
  addResource(t, n, o, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let c = [t, n];
    o && (c = c.concat(a ? o.split(a) : o)), t.indexOf(".") > -1 && (c = t.split("."), r = n, n = c[1]), this.addNamespaces(n), Ui(this.data, c, r), i.silent || this.emit("added", t, n, o, r);
  }
  addResources(t, n, o) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const i in o)
      typeof o[i] != "string" && Object.prototype.toString.apply(o[i]) !== "[object Array]" || this.addResource(t, n, i, o[i], { silent: !0 });
    r.silent || this.emit("added", t, n, o);
  }
  addResourceBundle(t, n, o, r, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 }, c = [t, n];
    t.indexOf(".") > -1 && (c = t.split("."), r = o, o = n, n = c[1]), this.addNamespaces(n);
    let s = Yn(this.data, c) || {};
    r ? Ps(s, o, i) : s = { ...s, ...o }, Ui(this.data, c, s), a.silent || this.emit("added", t, n, o);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? { ...this.getResource(t, n) } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((o) => n[o] && Object.keys(n[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Xs = { processors: {}, addPostProcessor(e) {
  this.processors[e.name] = e;
}, handle(e, t, n, o, r) {
  return e.forEach((i) => {
    this.processors[i] && (t = this.processors[i].process(t, n, o, r));
  }), t;
} };
const Qi = {};
class Qn extends go {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), function(o, r, i) {
      ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach((a) => {
        r[a] && (i[a] = r[a]);
      });
    }(0, t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ht.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (t == null)
      return !1;
    const o = this.resolve(t, n);
    return o && o.res !== void 0;
  }
  extractFromKey(t, n) {
    let o = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    o === void 0 && (o = ":");
    const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const a = o && t.indexOf(o) > -1, c = !(this.options.userDefinedKeySeparator || n.keySeparator || this.options.userDefinedNsSeparator || n.nsSeparator || function(s, l, u) {
      l = l || "", u = u || "";
      const g = cu.filter((d) => l.indexOf(d) < 0 && u.indexOf(d) < 0);
      if (g.length === 0)
        return !0;
      const p = new RegExp(`(${g.map((d) => d === "?" ? "\\?" : d).join("|")})`);
      let m = !p.test(s);
      if (!m) {
        const d = s.indexOf(u);
        d > 0 && !p.test(s.substring(0, d)) && (m = !0);
      }
      return m;
    }(t, o, r));
    if (a && !c) {
      const s = t.match(this.interpolator.nestingRegexp);
      if (s && s.length > 0)
        return { key: t, namespaces: i };
      const l = t.split(o);
      (o !== r || o === r && this.options.ns.indexOf(l[0]) > -1) && (i = l.shift()), t = l.join(r);
    }
    return typeof i == "string" && (i = [i]), { key: t, namespaces: i };
  }
  translate(t, n, o) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = { ...n }), n || (n = {}), t == null)
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const r = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, { key: a, namespaces: c } = this.extractFromKey(t[t.length - 1], n), s = c[c.length - 1], l = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (u) {
        const f = n.nsSeparator || this.options.nsSeparator;
        return r ? { res: `${s}${f}${a}`, usedKey: a, exactUsedKey: a, usedLng: l, usedNS: s, usedParams: this.getUsedParamsDetails(n) } : `${s}${f}${a}`;
      }
      return r ? { res: a, usedKey: a, exactUsedKey: a, usedLng: l, usedNS: s, usedParams: this.getUsedParamsDetails(n) } : a;
    }
    const g = this.resolve(t, n);
    let p = g && g.res;
    const m = g && g.usedKey || a, d = g && g.exactUsedKey || a, y = Object.prototype.toString.apply(p), b = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, h = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (h && p && typeof p != "string" && typeof p != "boolean" && typeof p != "number" && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(y) < 0 && (typeof b != "string" || y !== "[object Array]")) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const f = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, p, { ...n, ns: c }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return r ? (g.res = f, g.usedParams = this.getUsedParamsDetails(n), g) : f;
      }
      if (i) {
        const f = y === "[object Array]", v = f ? [] : {}, x = f ? d : m;
        for (const I in p)
          if (Object.prototype.hasOwnProperty.call(p, I)) {
            const A = `${x}${i}${I}`;
            v[I] = this.translate(A, { ...n, joinArrays: !1, ns: c }), v[I] === A && (v[I] = p[I]);
          }
        p = v;
      }
    } else if (h && typeof b == "string" && y === "[object Array]")
      p = p.join(b), p && (p = this.extendTranslation(p, t, n, o));
    else {
      let f = !1, v = !1;
      const x = n.count !== void 0 && typeof n.count != "string", I = Qn.hasDefaultValue(n), A = x ? this.pluralResolver.getSuffix(l, n.count, n) : "", w = n.ordinal && x ? this.pluralResolver.getSuffix(l, n.count, { ordinal: !1 }) : "", k = n[`defaultValue${A}`] || n[`defaultValue${w}`] || n.defaultValue;
      !this.isValidLookup(p) && I && (f = !0, p = k), this.isValidLookup(p) || (v = !0, p = a);
      const D = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && v ? void 0 : p, V = I && k !== p && this.options.updateMissing;
      if (v || f || V) {
        if (this.logger.log(V ? "updateKey" : "missingKey", l, s, a, V ? k : p), i) {
          const R = this.resolve(a, { ...n, keySeparator: !1 });
          R && R.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const Z = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Z && Z[0])
          for (let R = 0; R < Z.length; R++)
            j.push(Z[R]);
        else
          this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(n.lng || this.language) : j.push(n.lng || this.language);
        const Y = (R, H, J) => {
          const N = I && J !== p ? J : D;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(R, s, H, N, V, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(R, s, H, N, V, n), this.emit("missingKey", R, s, H, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && x ? j.forEach((R) => {
          this.pluralResolver.getSuffixes(R, n).forEach((H) => {
            Y([R], a + H, n[`defaultValue${H}`] || k);
          });
        }) : Y(j, a, k));
      }
      p = this.extendTranslation(p, t, n, g, o), v && p === a && this.options.appendNamespaceToMissingKey && (p = `${s}:${a}`), (v || f) && this.options.parseMissingKeyHandler && (p = this.options.compatibilityAPI !== "v1" ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}:${a}` : a, f ? p : void 0) : this.options.parseMissingKeyHandler(p));
    }
    return r ? (g.res = p, g.usedParams = this.getUsedParamsDetails(n), g) : p;
  }
  extendTranslation(t, n, o, r, i) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, { ...this.options.interpolation.defaultVariables, ...o }, o.lng || this.language || r.usedLng, r.usedNS, r.usedKey, { resolved: r });
    else if (!o.skipInterpolation) {
      o.interpolation && this.interpolator.init({ ...o, interpolation: { ...this.options.interpolation, ...o.interpolation } });
      const l = typeof t == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (l) {
        const p = t.match(this.interpolator.nestingRegexp);
        u = p && p.length;
      }
      let g = o.replace && typeof o.replace != "string" ? o.replace : o;
      if (this.options.interpolation.defaultVariables && (g = { ...this.options.interpolation.defaultVariables, ...g }), t = this.interpolator.interpolate(t, g, o.lng || this.language, o), l) {
        const p = t.match(this.interpolator.nestingRegexp);
        u < (p && p.length) && (o.nest = !1);
      }
      !o.lng && this.options.compatibilityAPI !== "v1" && r && r.res && (o.lng = r.usedLng), o.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var p = arguments.length, m = new Array(p), d = 0; d < p; d++)
          m[d] = arguments[d];
        return i && i[0] === m[0] && !o.context ? (a.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`), null) : a.translate(...m, n);
      }, o)), o.interpolation && this.interpolator.reset();
    }
    const c = o.postProcess || this.options.postProcess, s = typeof c == "string" ? [c] : c;
    return t != null && s && s.length && o.applyPostProcessor !== !1 && (t = Xs.handle(s, t, n, this.options && this.options.postProcessPassResolved ? { i18nResolved: { ...r, usedParams: this.getUsedParamsDetails(o) }, ...o } : o, this)), t;
  }
  resolve(t) {
    let n, o, r, i, a, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return typeof t == "string" && (t = [t]), t.forEach((s) => {
      if (this.isValidLookup(n))
        return;
      const l = this.extractFromKey(s, c), u = l.key;
      o = u;
      let g = l.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const p = c.count !== void 0 && typeof c.count != "string", m = p && !c.ordinal && c.count === 0 && this.pluralResolver.shouldUseIntlApi(), d = c.context !== void 0 && (typeof c.context == "string" || typeof c.context == "number") && c.context !== "", y = c.lngs ? c.lngs : this.languageUtils.toResolveHierarchy(c.lng || this.language, c.fallbackLng);
      g.forEach((b) => {
        this.isValidLookup(n) || (a = b, !Qi[`${y[0]}-${b}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Qi[`${y[0]}-${b}`] = !0, this.logger.warn(`key "${o}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((h) => {
          if (this.isValidLookup(n))
            return;
          i = h;
          const f = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(f, u, h, b, c);
          else {
            let x;
            p && (x = this.pluralResolver.getSuffix(h, c.count, c));
            const I = `${this.options.pluralSeparator}zero`, A = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (f.push(u + x), c.ordinal && x.indexOf(A) === 0 && f.push(u + x.replace(A, this.options.pluralSeparator)), m && f.push(u + I)), d) {
              const w = `${u}${this.options.contextSeparator}${c.context}`;
              f.push(w), p && (f.push(w + x), c.ordinal && x.indexOf(A) === 0 && f.push(w + x.replace(A, this.options.pluralSeparator)), m && f.push(w + I));
            }
          }
          let v;
          for (; v = f.pop(); )
            this.isValidLookup(n) || (r = v, n = this.getResource(h, b, v, c));
        }));
      });
    }), { res: n, usedKey: o, exactUsedKey: r, usedLng: i, usedNS: a };
  }
  isValidLookup(t) {
    return !(t === void 0 || !this.options.returnNull && t === null || !this.options.returnEmptyString && t === "");
  }
  getResource(t, n, o) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, o, r) : this.resourceStore.getResource(t, n, o, r);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], o = t.replace && typeof t.replace != "string";
    let r = o ? t.replace : t;
    if (o && t.count !== void 0 && (r.count = t.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables, ...r }), !o) {
      r = { ...r };
      for (const i of n)
        delete r[i];
    }
    return r;
  }
  static hasDefaultValue(t) {
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n) && n.substring(0, 12) === "defaultValue" && t[n] !== void 0)
        return !0;
    return !1;
  }
}
function To(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Ki {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ht.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (!(t = $n(t)) || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 ? null : (n.pop(), n[n.length - 1].toLowerCase() === "x" ? null : this.formatLanguageCode(n.join("-")));
  }
  getLanguagePartFromCode(t) {
    if (!(t = $n(t)) || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let o = t.split("-");
      return this.options.lowerCaseLng ? o = o.map((r) => r.toLowerCase()) : o.length === 2 ? (o[0] = o[0].toLowerCase(), o[1] = o[1].toUpperCase(), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = To(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(), o[1].length === 2 && (o[1] = o[1].toUpperCase()), o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()), n.indexOf(o[1].toLowerCase()) > -1 && (o[1] = To(o[1].toLowerCase())), n.indexOf(o[2].toLowerCase()) > -1 && (o[2] = To(o[2].toLowerCase()))), o.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t)
      return null;
    let n;
    return t.forEach((o) => {
      if (n)
        return;
      const r = this.formatLanguageCode(o);
      this.options.supportedLngs && !this.isSupportedCode(r) || (n = r);
    }), !n && this.options.supportedLngs && t.forEach((o) => {
      if (n)
        return;
      const r = this.getLanguagePartFromCode(o);
      if (this.isSupportedCode(r))
        return n = r;
      n = this.options.supportedLngs.find((i) => i === r ? i : i.indexOf("-") < 0 && r.indexOf("-") < 0 ? void 0 : i.indexOf(r) === 0 ? i : void 0);
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t)
      return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
      return t;
    if (!n)
      return t.default || [];
    let o = t[n];
    return o || (o = t[this.getScriptPartFromCode(n)]), o || (o = t[this.formatLanguageCode(n)]), o || (o = t[this.getLanguagePartFromCode(n)]), o || (o = t.default), o || [];
  }
  toResolveHierarchy(t, n) {
    const o = this.getFallbackCodes(n || this.options.fallbackLng || [], t), r = [], i = (a) => {
      a && (this.isSupportedCode(a) ? r.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), o.forEach((a) => {
      r.indexOf(a) < 0 && i(this.formatLanguageCode(a));
    }), r;
  }
}
let lu = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], uu = { 1: function(e) {
  return +(e > 1);
}, 2: function(e) {
  return +(e != 1);
}, 3: function(e) {
  return 0;
}, 4: function(e) {
  return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
}, 5: function(e) {
  return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
}, 6: function(e) {
  return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
}, 7: function(e) {
  return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
}, 8: function(e) {
  return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
}, 9: function(e) {
  return +(e >= 2);
}, 10: function(e) {
  return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
}, 11: function(e) {
  return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
}, 12: function(e) {
  return +(e % 10 != 1 || e % 100 == 11);
}, 13: function(e) {
  return +(e !== 0);
}, 14: function(e) {
  return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
}, 15: function(e) {
  return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
}, 16: function(e) {
  return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
}, 17: function(e) {
  return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
}, 18: function(e) {
  return e == 0 ? 0 : e == 1 ? 1 : 2;
}, 19: function(e) {
  return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
}, 20: function(e) {
  return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
}, 21: function(e) {
  return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
}, 22: function(e) {
  return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
} };
const du = ["v1", "v2", "v3"], gu = ["v4"], qi = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
class pu {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = ht.create("pluralResolver"), this.options.compatibilityJSON && !gu.includes(this.options.compatibilityJSON) || typeof Intl < "u" && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
      const o = {};
      return lu.forEach((r) => {
        r.lngs.forEach((i) => {
          o[i] = { numbers: r.nr, plurals: uu[r.fc] };
        });
      }), o;
    }();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules($n(t), { type: n.ordinal ? "ordinal" : "cardinal" });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = this.getRule(t, n);
    return this.shouldUseIntlApi() ? o && o.resolvedOptions().pluralCategories.length > 1 : o && o.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, o).map((r) => `${n}${r}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = this.getRule(t, n);
    return o ? this.shouldUseIntlApi() ? o.resolvedOptions().pluralCategories.sort((r, i) => qi[r] - qi[i]).map((r) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : o.numbers.map((r) => this.getSuffix(t, r, n)) : [];
  }
  getSuffix(t, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = this.getRule(t, o);
    return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(n)}` : this.getSuffixRetroCompatible(r, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const o = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let r = t.numbers[o];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (r === 2 ? r = "plural" : r === 1 && (r = ""));
    const i = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
    return this.options.compatibilityJSON === "v1" ? r === 1 ? "" : typeof r == "number" ? `_plural_${r.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
  }
  shouldUseIntlApi() {
    return !du.includes(this.options.compatibilityJSON);
  }
}
function ea(e, t, n) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], i = function(a, c, s) {
    const l = Yn(a, s);
    return l !== void 0 ? l : Yn(c, s);
  }(e, t, n);
  return !i && r && typeof n == "string" && (i = Un(e, n, o), i === void 0 && (i = Un(t, n, o))), i;
}
class mu {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ht.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const n = t.interpolation;
    this.escape = n.escape !== void 0 ? n.escape : su, this.escapeValue = n.escapeValue === void 0 || n.escapeValue, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 && n.useRawValueToEscape, this.prefix = n.prefix ? Wt(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? Wt(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? Wt(n.nestingPrefix) : n.nestingPrefixEscaped || Wt("$t("), this.nestingSuffix = n.nestingSuffix ? Wt(n.nestingSuffix) : n.nestingSuffixEscaped || Wt(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 && n.alwaysFormat, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, "g");
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, "g");
    const o = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(o, "g");
  }
  interpolate(t, n, o, r) {
    let i, a, c;
    const s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const h = ea(n, s, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(h, void 0, o, { ...r, ...n, interpolationkey: m }) : h;
      }
      const d = m.split(this.formatSeparator), y = d.shift().trim(), b = d.join(this.formatSeparator).trim();
      return this.format(ea(n, s, y, this.options.keySeparator, this.options.ignoreJSONStructure), b, o, { ...r, ...n, interpolationkey: y });
    };
    this.resetRegExp();
    const g = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, p = r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{ regex: this.regexpUnescape, safeValue: (m) => l(m) }, { regex: this.regexp, safeValue: (m) => this.escapeValue ? l(this.escape(m)) : l(m) }].forEach((m) => {
      for (c = 0; i = m.regex.exec(t); ) {
        const d = i[1].trim();
        if (a = u(d), a === void 0)
          if (typeof g == "function") {
            const b = g(t, i, r);
            a = typeof b == "string" ? b : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, d))
            a = "";
          else {
            if (p) {
              a = i[0];
              continue;
            }
            this.logger.warn(`missed to pass in variable ${d} for interpolating ${t}`), a = "";
          }
        else
          typeof a == "string" || this.useRawValueToEscape || (a = Yi(a));
        const y = m.safeValue(a);
        if (t = t.replace(i[0], y), p ? (m.regex.lastIndex += a.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, c++, c >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let o, r, i, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    function c(s, l) {
      const u = this.nestingOptionsSeparator;
      if (s.indexOf(u) < 0)
        return s;
      const g = s.split(new RegExp(`${u}[ ]*{`));
      let p = `{${g[1]}`;
      s = g[0], p = this.interpolate(p, i);
      const m = p.match(/'/g), d = p.match(/"/g);
      (m && m.length % 2 == 0 && !d || d.length % 2 != 0) && (p = p.replace(/'/g, '"'));
      try {
        i = JSON.parse(p), l && (i = { ...l, ...i });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${s}`, y), `${s}${u}${p}`;
      }
      return delete i.defaultValue, s;
    }
    for (; o = this.nestingRegexp.exec(t); ) {
      let s = [];
      i = { ...a }, i = i.replace && typeof i.replace != "string" ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((g) => g.trim());
        o[1] = u.shift(), s = u, l = !0;
      }
      if (r = n(c.call(this, o[1].trim(), i), i), r && o[0] === t && typeof r != "string")
        return r;
      typeof r != "string" && (r = Yi(r)), r || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), r = ""), l && (r = s.reduce((u, g) => this.format(u, g, a.lng, { ...a, interpolationkey: o[1].trim() }), r.trim())), t = t.replace(o[0], r), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function Ft(e) {
  const t = {};
  return function(n, o, r) {
    const i = o + JSON.stringify(r);
    let a = t[i];
    return a || (a = e($n(o), r), t[i] = a), a(n);
  };
}
class hu {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ht.create("formatter"), this.options = t, this.formats = { number: Ft((n, o) => {
      const r = new Intl.NumberFormat(n, { ...o });
      return (i) => r.format(i);
    }), currency: Ft((n, o) => {
      const r = new Intl.NumberFormat(n, { ...o, style: "currency" });
      return (i) => r.format(i);
    }), datetime: Ft((n, o) => {
      const r = new Intl.DateTimeFormat(n, { ...o });
      return (i) => r.format(i);
    }), relativetime: Ft((n, o) => {
      const r = new Intl.RelativeTimeFormat(n, { ...o });
      return (i) => r.format(i, o.range || "day");
    }), list: Ft((n, o) => {
      const r = new Intl.ListFormat(n, { ...o });
      return (i) => r.format(i);
    }) }, this.init(t);
  }
  init(t) {
    const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Ft(n);
  }
  format(t, n, o) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, c) => {
      const { formatName: s, formatOptions: l } = function(u) {
        let g = u.toLowerCase().trim();
        const p = {};
        if (u.indexOf("(") > -1) {
          const m = u.split("(");
          g = m[0].toLowerCase().trim();
          const d = m[1].substring(0, m[1].length - 1);
          g === "currency" && d.indexOf(":") < 0 ? p.currency || (p.currency = d.trim()) : g === "relativetime" && d.indexOf(":") < 0 ? p.range || (p.range = d.trim()) : d.split(";").forEach((y) => {
            if (!y)
              return;
            const [b, ...h] = y.split(":"), f = h.join(":").trim().replace(/^'+|'+$/g, "");
            p[b.trim()] || (p[b.trim()] = f), f === "false" && (p[b.trim()] = !1), f === "true" && (p[b.trim()] = !0), isNaN(f) || (p[b.trim()] = parseInt(f, 10));
          });
        }
        return { formatName: g, formatOptions: p };
      }(c);
      if (this.formats[s]) {
        let u = a;
        try {
          const g = r && r.formatParams && r.formatParams[r.interpolationkey] || {}, p = g.locale || g.lng || r.locale || r.lng || o;
          u = this.formats[s](a, p, { ...l, ...r, ...g });
        } catch (g) {
          this.logger.warn(g);
        }
        return u;
      }
      return this.logger.warn(`there was no format function for ${s}`), a;
    }, t);
  }
}
class fu extends go {
  constructor(t, n, o) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = o, this.languageUtils = o.languageUtils, this.options = r, this.logger = ht.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(o, r.backend, r);
  }
  queueLoad(t, n, o, r) {
    const i = {}, a = {}, c = {}, s = {};
    return t.forEach((l) => {
      let u = !0;
      n.forEach((g) => {
        const p = `${l}|${g}`;
        !o.reload && this.store.hasResourceBundle(l, g) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? a[p] === void 0 && (a[p] = !0) : (this.state[p] = 1, u = !1, a[p] === void 0 && (a[p] = !0), i[p] === void 0 && (i[p] = !0), s[g] === void 0 && (s[g] = !0)));
      }), u || (c[l] = !0);
    }), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({ pending: a, pendingCount: Object.keys(a).length, loaded: {}, errors: [], callback: r }), { toLoad: Object.keys(i), pending: Object.keys(a), toLoadLanguages: Object.keys(c), toLoadNamespaces: Object.keys(s) };
  }
  loaded(t, n, o) {
    const r = t.split("|"), i = r[0], a = r[1];
    n && this.emit("failedLoading", i, a, n), o && this.store.addResourceBundle(i, a, o), this.state[t] = n ? -1 : 2;
    const c = {};
    this.queue.forEach((s) => {
      (function(l, u, g, p) {
        const { obj: m, k: d } = Zr(l, u, Object);
        m[d] = m[d] || [], m[d].push(g);
      })(s.loaded, [i], a), function(l, u) {
        l.pending[u] !== void 0 && (delete l.pending[u], l.pendingCount--);
      }(s, t), n && s.errors.push(n), s.pendingCount !== 0 || s.done || (Object.keys(s.loaded).forEach((l) => {
        c[l] || (c[l] = {});
        const u = s.loaded[l];
        u.length && u.forEach((g) => {
          c[l][g] === void 0 && (c[l][g] = !0);
        });
      }), s.done = !0, s.errors.length ? s.callback(s.errors) : s.callback());
    }), this.emit("loaded", c), this.queue = this.queue.filter((s) => !s.done);
  }
  read(t, n, o) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length)
      return a(null, {});
    if (this.readingCalls >= this.maxParallelReads)
      return void this.waitingReads.push({ lng: t, ns: n, fcName: o, tried: r, wait: i, callback: a });
    this.readingCalls++;
    const c = (l, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const g = this.waitingReads.shift();
        this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
      }
      l && u && r < this.maxRetries ? setTimeout(() => {
        this.read.call(this, t, n, o, r + 1, 2 * i, a);
      }, i) : a(l, u);
    }, s = this.backend[o].bind(this.backend);
    if (s.length !== 2)
      return s(t, n, c);
    try {
      const l = s(t, n);
      l && typeof l.then == "function" ? l.then((u) => c(null, u)).catch(c) : c(null, l);
    } catch (l) {
      c(l);
    }
  }
  prepareLoading(t, n) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const i = this.queueLoad(t, n, o, r);
    if (!i.toLoad.length)
      return i.pending.length || r(), null;
    i.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(t, n, o) {
    this.prepareLoading(t, n, {}, o);
  }
  reload(t, n, o) {
    this.prepareLoading(t, n, { reload: !0 }, o);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const o = t.split("|"), r = o[0], i = o[1];
    this.read(r, i, "read", void 0, void 0, (a, c) => {
      a && this.logger.warn(`${n}loading namespace ${i} for language ${r} failed`, a), !a && c && this.logger.log(`${n}loaded namespace ${i} for language ${r}`, c), this.loaded(t, a, c);
    });
  }
  saveMissing(t, n, o, r, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n))
      this.logger.warn(`did not save key "${o}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
    else if (o != null && o !== "") {
      if (this.backend && this.backend.create) {
        const s = { ...a, isUpdate: i }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let u;
            u = l.length === 5 ? l(t, n, o, r, s) : l(t, n, o, r), u && typeof u.then == "function" ? u.then((g) => c(null, g)).catch(c) : c(null, u);
          } catch (u) {
            c(u);
          }
        else
          l(t, n, o, r, c, s);
      }
      t && t[0] && this.store.addResource(t[0], n, o, r);
    }
  }
}
function ta() {
  return { debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(e) {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((o) => {
        t[o] = n[o];
      });
    }
    return t;
  }, interpolation: { escapeValue: !0, format: (e, t, n, o) => e, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 } };
}
function na(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function wn() {
}
class pn extends go {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    var o;
    if (super(), this.options = na(t), this.services = {}, this.logger = ht, this.modules = { external: [] }, o = this, Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((r) => {
      typeof o[r] == "function" && (o[r] = o[r].bind(o));
    }), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == "function" && (o = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const r = ta();
    function i(s) {
      return s ? typeof s == "function" ? new s() : s : null;
    }
    if (this.options = { ...r, ...this.options, ...na(n) }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = { ...r.interpolation, ...this.options.interpolation }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator), !this.options.isClone) {
      let s;
      this.modules.logger ? ht.init(i(this.modules.logger), this.options) : ht.init(null, this.options), this.modules.formatter ? s = this.modules.formatter : typeof Intl < "u" && (s = hu);
      const l = new Ki(this.options);
      this.store = new $i(this.options.resources, this.options);
      const u = this.services;
      u.logger = ht, u.resourceStore = this.store, u.languageUtils = l, u.pluralResolver = new pu(l, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), !s || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (u.formatter = i(s), u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)), u.interpolator = new mu(this.options), u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, u.backendConnector = new fu(i(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", function(g) {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), d = 1; d < p; d++)
          m[d - 1] = arguments[d];
        t.emit(g, ...m);
      }), this.modules.languageDetector && (u.languageDetector = i(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = i(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new Qn(this.services, this.options), this.translator.on("*", function(g) {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), d = 1; d < p; d++)
          m[d - 1] = arguments[d];
        t.emit(g, ...m);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, o || (o = wn), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      s.length > 0 && s[0] !== "dev" && (this.options.lng = s[0]);
    }
    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((s) => {
      this[s] = function() {
        return t.store[s](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((s) => {
      this[s] = function() {
        return t.store[s](...arguments), t;
      };
    });
    const a = qt(), c = () => {
      const s = (l, u) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(u), o(l, u);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return s(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, s);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), a;
  }
  loadResources(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wn;
    const o = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return n();
      const r = [], i = (a) => {
        a && a !== "cimode" && this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
          c !== "cimode" && r.indexOf(c) < 0 && r.push(c);
        });
      };
      o ? i(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((a) => i(a)), this.options.preload && this.options.preload.forEach((a) => i(a)), this.services.backendConnector.load(r, this.options.ns, (a) => {
        a || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(a);
      });
    } else
      n(null);
  }
  reloadResources(t, n, o) {
    const r = qt();
    return t || (t = this.languages), n || (n = this.options.ns), o || (o = wn), this.services.backendConnector.reload(t, n, (i) => {
      r.resolve(), o(i);
    }), r;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Xs.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (t && this.languages && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const o = this.languages[n];
        if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
          this.resolvedLanguage = o;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var o = this;
    this.isLanguageChangingTo = t;
    const r = qt();
    this.emit("languageChanging", t);
    const i = (s) => {
      this.language = s, this.languages = this.services.languageUtils.toResolveHierarchy(s), this.resolvedLanguage = void 0, this.setResolvedLanguage(s);
    }, a = (s, l) => {
      l ? (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, r.resolve(function() {
        return o.t(...arguments);
      }), n && n(s, function() {
        return o.t(...arguments);
      });
    }, c = (s) => {
      t || s || !this.services.languageDetector || (s = []);
      const l = typeof s == "string" ? s : this.services.languageUtils.getBestMatchFromCodes(s);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (u) => {
        a(u, l);
      });
    };
    return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(c) : this.services.languageDetector.detect(c) : c(t) : c(this.services.languageDetector.detect()), r;
  }
  getFixedT(t, n, o) {
    var r = this;
    const i = function(a, c) {
      let s;
      if (typeof c != "object") {
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), g = 2; g < l; g++)
          u[g - 2] = arguments[g];
        s = r.options.overloadTranslationOptionHandler([a, c].concat(u));
      } else
        s = { ...c };
      s.lng = s.lng || i.lng, s.lngs = s.lngs || i.lngs, s.ns = s.ns || i.ns, s.keyPrefix = s.keyPrefix || o || i.keyPrefix;
      const p = r.options.keySeparator || ".";
      let m;
      return m = s.keyPrefix && Array.isArray(a) ? a.map((d) => `${s.keyPrefix}${p}${d}`) : s.keyPrefix ? `${s.keyPrefix}${p}${a}` : a, r.t(m, s);
    };
    return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = o, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const o = n.lng || this.resolvedLanguage || this.languages[0], r = !!this.options && this.options.fallbackLng, i = this.languages[this.languages.length - 1];
    if (o.toLowerCase() === "cimode")
      return !0;
    const a = (c, s) => {
      const l = this.services.backendConnector.state[`${c}|${s}`];
      return l === -1 || l === 2;
    };
    if (n.precheck) {
      const c = n.precheck(this, a);
      if (c !== void 0)
        return c;
    }
    return !(!this.hasResourceBundle(o, t) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!a(o, t) || r && !a(i, t)));
  }
  loadNamespaces(t, n) {
    const o = qt();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      o.resolve(), n && n(r);
    }), o) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const o = qt();
    typeof t == "string" && (t = [t]);
    const r = this.options.preload || [], i = t.filter((a) => r.indexOf(a) < 0);
    return i.length ? (this.options.preload = r.concat(i), this.loadResources((a) => {
      o.resolve(), n && n(a);
    }), o) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = this.services && this.services.languageUtils || new Ki(ta());
    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    return new pn(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wn;
    const o = t.forkResourceStore;
    o && delete t.forkResourceStore;
    const r = { ...this.options, ...t, isClone: !0 }, i = new pn(r);
    return t.debug === void 0 && t.prefix === void 0 || (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = { ...this.services }, i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }, o && (i.store = new $i(this.store.data, r), i.services.resourceStore = i.store), i.translator = new Qn(i.services, r), i.translator.on("*", function(a) {
      for (var c = arguments.length, s = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++)
        s[l - 1] = arguments[l];
      i.emit(a, ...s);
    }), i.init(r, n), i.translator.options = r, i.translator.backendConnector.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }, i;
  }
  toJSON() {
    return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
  }
}
const he = pn.createInstance();
he.createInstance = pn.createInstance, he.createInstance, he.dir, he.init, he.loadResources, he.reloadResources, he.use, he.changeLanguage, he.getFixedT, he.t, he.exists, he.setDefaultNamespace, he.hasLoadedNamespace, he.loadNamespaces, he.loadLanguages;
const oa = (e, t) => {
  const n = document.querySelectorAll(t.selectorText);
  return Array.from(n).includes(e);
}, Pt = (e) => {
  const { fontSize: t } = window.getComputedStyle(e);
  e.dataset.accOrgfontsize = parseFloat(t).toString(), e.style.fontSize = t;
}, ra = () => ({ language: localStorage.getItem("i18nextLng") ?? he.language, isBlueLightFilter: !1, brightness: { isBrightness: !1, brightness: 150 }, isDarkContrast: !1, isLightContrast: !1, highContrast: { isHighContrast: !1, contrast: 125 }, highSaturation: { isHighSaturation: !1, saturation: 200 }, lowSaturation: { isLowSaturation: !1, saturation: 50 }, isMonochrome: !1, color: "", isVisualImpairment: !1, adjustFontSizePercentage: 100, textAlign: { left: null, center: null, right: null }, isDyslexiaFont: !1, isFontWeightBold: !1, highlightLinks: !1, highlightTitles: !1, letterSpacing: 0, lineHeight: { isLineHeight: !1, lineHeight: 0 }, wordSpacing: 0, zoom: { isZoom: !1, zoom: 1 }, isBigCursor: !1, showReadingGuide: !1, activateTextToSpeech: !1 }), Bo = "acc-big-cursor-style", Mo = "acc-big-cursor", Zs = (e, t) => {
  oe(() => {
    if (t)
      return;
    const n = document.getElementById(Bo);
    if (e && !n) {
      document.documentElement.classList.add(Mo);
      const o = document.createElement("style");
      o.id = Bo, o.innerHTML = `
          html.${Mo}  body * {
           cursor:url(${`data:image/svg+xml;base64,${window.btoa(`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="57px" height="98px" viewBox="0 0 57 97" version="1.1">
<g id="surface1">
<path style=" stroke:black;stroke-width:4;fill-rule:nonzero;fill:#ccc;fill-opacity:1;" d="M 29.65625 92.226562 L 46.339844 85.503906 L 33.871094 54.734375 L 54.179688 55.089844 L 3.910156 4.773438 L 2.820312 75.773438 L 17.183594 61.453125 Z M 29.65625 92.226562 "/>
</g>
</svg>
`)}`}),default !important;}
   `, document.head.appendChild(o);
    } else if (!e && n) {
      const o = document.getElementById(Bo);
      document.documentElement.classList.remove(Mo), o == null || o.remove();
    }
  }, [e, t]);
}, bu = ({ accState: e, onChangeAccState: t }) => {
  const { isBigCursor: n } = e;
  return Zs(n), S.jsx(de, { Icon: ru, isToggled: n, onToggle: () => {
    t((o) => {
      o.isBigCursor = !o.isBigCursor;
    });
  }, titleTranslationKey: "tools.bigCursor", title: "Big Cursor" });
}, vu = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "AutoStoriesIcon", ...e }, C.createElement("path", { d: "m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z" })), zs = (e, t, n) => {
  const [o, r] = Se(0), i = Ct(() => o > 0 ? `calc(100vh - ${o}px - ${t}px)` : 0, [o, t]);
  Ze(() => {
    if (!n) {
      if (e) {
        const a = (c) => {
          r(c.clientY);
        };
        return ((c, s) => {
          const l = document.getElementById("acc-portal-[readingGuide-container]");
          let u = document.getElementById("acc-readingGuide-top");
          u || (u = document.createElement("div"), u.id = "acc-readingGuide-top", u.className = "acc-readingGuide", u.style.height = `${c}px`, l.appendChild(u)), u.style.height = `${c}px`;
          let g = document.getElementById("acc-readingGuide-bottom");
          g || (g = document.createElement("div"), g.id = "acc-readingGuide-bottom", g.className = "acc-readingGuide", g.style.top = "auto", g.style.bottom = "0", g.style.height = `${s}`, l.appendChild(g)), g.style.height = `${s}`;
        })(o, i), window.addEventListener("mousemove", a), () => {
          window.removeEventListener("mousemove", a);
        };
      }
      {
        const a = document.getElementById("acc-readingGuide-top");
        a && a.remove();
        const c = document.getElementById("acc-readingGuide-bottom");
        c && c.remove();
      }
    }
  }, [e, n, o, i]);
}, yu = ({ rgGap: e = 100, accState: t, onChangeAccState: n }) => {
  const { showReadingGuide: o } = t;
  return zs(o, e), S.jsx(de, { Icon: vu, isToggled: o, onToggle: () => {
    n((r) => {
      r.showReadingGuide = !r.showReadingGuide;
    });
  }, titleTranslationKey: "tools.readingGuide", title: "Reading Guide" });
};
var Iu = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function js(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ia(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Es(o.key), o);
  }
}
function _s(e, t, n) {
  return t && ia(e.prototype, t), n && ia(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ar(e, t) {
  return Ar = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ar(e, t);
}
function Kn(e) {
  return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Kn(e);
}
function Cu(e) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var n, o = Kn(e);
    if (t) {
      var r = Kn(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else
      n = o.apply(this, arguments);
    return function(i, a) {
      if (a && (ft(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(c) {
        if (c === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return c;
      }(i);
    }(this, n);
  };
}
var xu = function() {
  function e(n) {
    var o = this;
    this._insertTag = function(r) {
      var i;
      i = o.tags.length === 0 ? o.insertionPoint ? o.insertionPoint.nextSibling : o.prepend ? o.container.firstChild : o.before : o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(r, i), o.tags.push(r);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(a) {
      var c = document.createElement("style");
      return c.setAttribute("data-emotion", a.key), a.nonce !== void 0 && c.setAttribute("nonce", a.nonce), c.appendChild(document.createTextNode("")), c.setAttribute("data-s", ""), c;
    }(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var r = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      r && this._alreadyInsertedOrderInsensitiveRule, this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !r;
    }
    if (this.isSpeedy) {
      var i = function(a) {
        if (a.sheet)
          return a.sheet;
        for (var c = 0; c < document.styleSheets.length; c++)
          if (document.styleSheets[c].ownerNode === a)
            return document.styleSheets[c];
      }(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
        process.env.NODE_ENV !== "production" && /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Oe = "-ms-", aa = "-moz-", Q = "-webkit-", zr = "comm", jr = "rule", _r = "decl", Ds = "@keyframes", Su = Math.abs, po = String.fromCharCode, Au = Object.assign;
function Js(e) {
  return e.trim();
}
function K(e, t, n) {
  return e.replace(t, n);
}
function wr(e, t) {
  return e.indexOf(t);
}
function Te(e, t) {
  return 0 | e.charCodeAt(t);
}
function mn(e, t, n) {
  return e.slice(t, n);
}
function mt(e) {
  return e.length;
}
function Dr(e) {
  return e.length;
}
function Nn(e, t) {
  return t.push(e), e;
}
var mo = 1, Jt = 1, Ys = 0, ze = 0, xe = 0, Ut = "";
function ho(e, t, n, o, r, i, a) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: mo, column: Jt, length: a, return: "" };
}
function en(e, t) {
  return Au(ho("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function wu() {
  return xe = ze > 0 ? Te(Ut, --ze) : 0, Jt--, xe === 10 && (Jt = 1, mo--), xe;
}
function $e() {
  return xe = ze < Ys ? Te(Ut, ze++) : 0, Jt++, xe === 10 && (Jt = 1, mo++), xe;
}
function bt() {
  return Te(Ut, ze);
}
function Zn() {
  return ze;
}
function bn(e, t) {
  return mn(Ut, e, t);
}
function hn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Us(e) {
  return mo = Jt = 1, Ys = mt(Ut = e), ze = 0, [];
}
function $s(e) {
  return Ut = "", e;
}
function zn(e) {
  return Js(bn(ze - 1, Nr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Nu(e) {
  for (; (xe = bt()) && xe < 33; )
    $e();
  return hn(e) > 2 || hn(xe) > 3 ? "" : " ";
}
function Eu(e, t) {
  for (; --t && $e() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return bn(e, Zn() + (t < 6 && bt() == 32 && $e() == 32));
}
function Nr(e) {
  for (; $e(); )
    switch (xe) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nr(xe);
        break;
      case 40:
        e === 41 && Nr(e);
        break;
      case 92:
        $e();
    }
  return ze;
}
function ku(e, t) {
  for (; $e() && e + xe !== 57 && (e + xe !== 84 || bt() !== 47); )
    ;
  return "/*" + bn(t, ze - 1) + "*" + po(e === 47 ? e : $e());
}
function Lu(e) {
  for (; !hn(bt()); )
    $e();
  return bn(e, ze);
}
function Gu(e) {
  return $s(jn("", null, null, null, [""], e = Us(e), 0, [0], e));
}
function jn(e, t, n, o, r, i, a, c, s) {
  for (var l = 0, u = 0, g = a, p = 0, m = 0, d = 0, y = 1, b = 1, h = 1, f = 0, v = "", x = r, I = i, A = o, w = v; b; )
    switch (d = f, f = $e()) {
      case 40:
        if (d != 108 && Te(w, g - 1) == 58) {
          wr(w += K(zn(f), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += zn(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Nu(d);
        break;
      case 92:
        w += Eu(Zn() - 1, 7);
        continue;
      case 47:
        switch (bt()) {
          case 42:
          case 47:
            Nn(Tu(ku($e(), Zn()), t, n), s);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * y:
        c[l++] = mt(w) * h;
      case 125 * y:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            b = 0;
          case 59 + u:
            h == -1 && (w = K(w, /\f/g, "")), m > 0 && mt(w) - g && Nn(m > 32 ? ca(w + ";", o, n, g - 1) : ca(K(w, " ", "") + ";", o, n, g - 2), s);
            break;
          case 59:
            w += ";";
          default:
            if (Nn(A = sa(w, t, n, l, u, r, c, v, x = [], I = [], g), i), f === 123)
              if (u === 0)
                jn(w, t, A, A, x, i, g, c, I);
              else
                switch (p === 99 && Te(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    jn(e, A, A, o && Nn(sa(e, A, A, 0, 0, r, c, v, r, x = [], g), I), r, I, g, c, o ? x : I);
                    break;
                  default:
                    jn(w, A, A, A, [""], I, 0, c, I);
                }
        }
        l = u = m = 0, y = h = 1, v = w = "", g = a;
        break;
      case 58:
        g = 1 + mt(w), m = d;
      default:
        if (y < 1) {
          if (f == 123)
            --y;
          else if (f == 125 && y++ == 0 && wu() == 125)
            continue;
        }
        switch (w += po(f), f * y) {
          case 38:
            h = u > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            c[l++] = (mt(w) - 1) * h, h = 1;
            break;
          case 64:
            bt() === 45 && (w += zn($e())), p = bt(), u = g = mt(v = w += Lu(Zn())), f++;
            break;
          case 45:
            d === 45 && mt(w) == 2 && (y = 0);
        }
    }
  return i;
}
function sa(e, t, n, o, r, i, a, c, s, l, u) {
  for (var g = r - 1, p = r === 0 ? i : [""], m = Dr(p), d = 0, y = 0, b = 0; d < o; ++d)
    for (var h = 0, f = mn(e, g + 1, g = Su(y = a[d])), v = e; h < m; ++h)
      (v = Js(y > 0 ? p[h] + " " + f : K(f, /&\f/g, p[h]))) && (s[b++] = v);
  return ho(e, t, n, r === 0 ? jr : c, s, l, u);
}
function Tu(e, t, n) {
  return ho(e, t, n, zr, po(xe), mn(e, 2, -2), 0);
}
function ca(e, t, n, o) {
  return ho(e, t, n, _r, mn(e, 0, o), mn(e, o + 1, -1), o);
}
function _t(e, t) {
  for (var n = "", o = Dr(e), r = 0; r < o; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Bu(e, t, n, o) {
  switch (e.type) {
    case "@layer":
      if (e.children.length)
        break;
    case "@import":
    case _r:
      return e.return = e.return || e.value;
    case zr:
      return "";
    case Ds:
      return e.return = e.value + "{" + _t(e.children, o) + "}";
    case jr:
      e.value = e.props.join(",");
  }
  return mt(n = _t(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Mu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ou = function(e, t, n) {
  for (var o = 0, r = 0; o = r, r = bt(), o === 38 && r === 12 && (t[n] = 1), !hn(r); )
    $e();
  return bn(e, ze);
}, la = /* @__PURE__ */ new WeakMap(), Vu = function(e) {
  if (e.type === "rule" && e.parent && !(e.length < 1)) {
    for (var t = e.value, n = e.parent, o = e.column === n.column && e.line === n.line; n.type !== "rule"; )
      if (!(n = n.parent))
        return;
    if ((e.props.length !== 1 || t.charCodeAt(0) === 58 || la.get(n)) && !o) {
      la.set(e, !0);
      for (var r = [], i = function(u, g) {
        return $s(function(p, m) {
          var d = -1, y = 44;
          do
            switch (hn(y)) {
              case 0:
                y === 38 && bt() === 12 && (m[d] = 1), p[d] += Ou(ze - 1, m, d);
                break;
              case 2:
                p[d] += zn(y);
                break;
              case 4:
                if (y === 44) {
                  p[++d] = bt() === 58 ? "&\f" : "", m[d] = p[d].length;
                  break;
                }
              default:
                p[d] += po(y);
            }
          while (y = $e());
          return p;
        }(Us(u), g));
      }(t, r), a = n.props, c = 0, s = 0; c < i.length; c++)
        for (var l = 0; l < a.length; l++, s++)
          e.props[s] = r[c] ? i[c].replace(/&\f/g, a[l]) : a[l] + " " + i[c];
    }
  }
}, Ru = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, Hu = function(e) {
  return e.type === "comm" && e.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason") > -1;
}, ua = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, Wu = function(e, t, n) {
  ua(e) && (e.parent || function(o, r) {
    for (var i = o - 1; i >= 0; i--)
      if (!ua(r[i]))
        return !0;
    return !1;
  }(t, n)) && function(o) {
    o.type = "", o.value = "", o.return = "", o.children = "", o.props = "";
  }(e);
};
function Qs(e, t) {
  switch (function(n, o) {
    return 45 ^ Te(n, 0) ? (((o << 2 ^ Te(n, 0)) << 2 ^ Te(n, 1)) << 2 ^ Te(n, 2)) << 2 ^ Te(n, 3) : 0;
  }(e, t)) {
    case 5103:
      return Q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + aa + e + Oe + e + e;
    case 6828:
    case 4268:
      return Q + e + Oe + e + e;
    case 6165:
      return Q + e + Oe + "flex-" + e + e;
    case 5187:
      return Q + e + K(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return Q + e + Oe + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + Oe + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + Oe + K(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + Oe + K(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + K(e, "-grow", "") + Q + e + Oe + K(e, "grow", "positive") + e;
    case 4554:
      return Q + K(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return K(K(K(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return K(K(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mt(e) - 1 - t > 6)
        switch (Te(e, t + 1)) {
          case 109:
            if (Te(e, t + 4) !== 45)
              break;
          case 102:
            return K(e, /(.+:)(.+)-([^]+)/, "$1" + Q + "$2-$3$1" + aa + (Te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~wr(e, "stretch") ? Qs(K(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Te(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Te(e, mt(e) - 3 - (~wr(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + Q) + e;
        case 101:
          return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Q + (Te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Q + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Te(e, t + 11)) {
        case 114:
          return Q + e + Oe + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + Oe + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + Oe + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + Oe + e + e;
  }
  return e;
}
var da, ga, Fu = [function(e, t, n, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _r:
        e.return = Qs(e.value, e.length);
        break;
      case Ds:
        return _t([en(e, { value: K(e.value, "@", "@" + Q) })], o);
      case jr:
        if (e.length)
          return function(r, i) {
            return r.map(i).join("");
          }(e.props, function(r) {
            switch (function(i, a) {
              return (i = /(::plac\w+|:read-\w+)/.exec(i)) ? i[0] : i;
            }(r)) {
              case ":read-only":
              case ":read-write":
                return _t([en(e, { props: [K(r, /:(read-\w+)/, ":-moz-$1")] })], o);
              case "::placeholder":
                return _t([en(e, { props: [K(r, /:(plac\w+)/, ":" + Q + "input-$1")] }), en(e, { props: [K(r, /:(plac\w+)/, ":-moz-$1")] }), en(e, { props: [K(r, /:(plac\w+)/, Oe + "input-$1")] })], o);
            }
            return "";
          });
    }
}], Pu = function(e) {
  var t = e.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      d.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = e.stylisPlugins || Fu;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var r, i, a = {}, c = [];
  r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(d) {
    for (var y = d.getAttribute("data-emotion").split(" "), b = 1; b < y.length; b++)
      a[y[b]] = !0;
    c.push(d);
  });
  var s = [Vu, Ru];
  process.env.NODE_ENV !== "production" && s.push(/* @__PURE__ */ function(d) {
    return function(y, b, h) {
      if (y.type === "rule" && !d.compat) {
        var f = y.value.match(/(:first|:nth|:nth-last)-child/g);
        if (f) {
          for (var v = y.parent ? y.parent.children : h, x = v.length - 1; x >= 0; x--) {
            var I = v[x];
            if (I.line < y.line)
              break;
            if (I.column < y.column) {
              if (Hu(I))
                return;
              break;
            }
          }
          f.forEach(function(A) {
          });
        }
      }
    };
  }({ get compat() {
    return m.compat;
  } }), Wu);
  var l, u, g = [Bu, process.env.NODE_ENV !== "production" ? function(d) {
    d.root || (d.return ? l.insert(d.return) : d.value && d.type !== zr && l.insert(d.value + "{}"));
  } : (u = function(d) {
    l.insert(d);
  }, function(d) {
    d.root || (d = d.return) && u(d);
  })], p = function(d) {
    var y = Dr(d);
    return function(b, h, f, v) {
      for (var x = "", I = 0; I < y; I++)
        x += d[I](b, h, f, v) || "";
      return x;
    };
  }(s.concat(o, g));
  i = function(d, y, b, h) {
    l = b, process.env.NODE_ENV !== "production" && y.map !== void 0 && (l = { insert: function(f) {
      b.insert(f + y.map);
    } }), _t(Gu(d ? d + "{" + y.styles + "}" : y.styles), p), h && (m.inserted[y.name] = !0);
  };
  var m = { key: t, sheet: new xu({ key: t, container: r, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: a, registered: {}, insert: i };
  return m.sheet.hydrate(c), m;
}, Er = { exports: {} }, ee = {}, q = {};
process.env.NODE_ENV === "production" ? Er.exports = function() {
  if (ga)
    return q;
  ga = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, f = e ? Symbol.for("react.scope") : 60119;
  function v(I) {
    if (typeof I == "object" && I !== null) {
      var A = I.$$typeof;
      switch (A) {
        case t:
          switch (I = I.type) {
            case s:
            case l:
            case o:
            case i:
            case r:
            case g:
              return I;
            default:
              switch (I = I && I.$$typeof) {
                case c:
                case u:
                case d:
                case m:
                case a:
                  return I;
                default:
                  return A;
              }
          }
        case n:
          return A;
      }
    }
  }
  function x(I) {
    return v(I) === l;
  }
  return q.AsyncMode = s, q.ConcurrentMode = l, q.ContextConsumer = c, q.ContextProvider = a, q.Element = t, q.ForwardRef = u, q.Fragment = o, q.Lazy = d, q.Memo = m, q.Portal = n, q.Profiler = i, q.StrictMode = r, q.Suspense = g, q.isAsyncMode = function(I) {
    return x(I) || v(I) === s;
  }, q.isConcurrentMode = x, q.isContextConsumer = function(I) {
    return v(I) === c;
  }, q.isContextProvider = function(I) {
    return v(I) === a;
  }, q.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === t;
  }, q.isForwardRef = function(I) {
    return v(I) === u;
  }, q.isFragment = function(I) {
    return v(I) === o;
  }, q.isLazy = function(I) {
    return v(I) === d;
  }, q.isMemo = function(I) {
    return v(I) === m;
  }, q.isPortal = function(I) {
    return v(I) === n;
  }, q.isProfiler = function(I) {
    return v(I) === i;
  }, q.isStrictMode = function(I) {
    return v(I) === r;
  }, q.isSuspense = function(I) {
    return v(I) === g;
  }, q.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === o || I === l || I === i || I === r || I === g || I === p || typeof I == "object" && I !== null && (I.$$typeof === d || I.$$typeof === m || I.$$typeof === a || I.$$typeof === c || I.$$typeof === u || I.$$typeof === b || I.$$typeof === h || I.$$typeof === f || I.$$typeof === y);
  }, q.typeOf = v, q;
}() : Er.exports = (da || (da = 1, process.env.NODE_ENV !== "production" && function() {
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, d = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, f = e ? Symbol.for("react.scope") : 60119;
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var z = E.$$typeof;
      switch (z) {
        case t:
          var P = E.type;
          switch (P) {
            case s:
            case l:
            case o:
            case i:
            case r:
            case g:
              return P;
            default:
              var le = P && P.$$typeof;
              switch (le) {
                case c:
                case u:
                case d:
                case m:
                case a:
                  return le;
                default:
                  return z;
              }
          }
        case n:
          return z;
      }
    }
  }
  var x = s, I = l, A = c, w = a, k = t, D = u, V = o, j = d, Z = m, Y = n, R = i, H = r, J = g, N = !1;
  function T(E) {
    return v(E) === l;
  }
  ee.AsyncMode = x, ee.ConcurrentMode = I, ee.ContextConsumer = A, ee.ContextProvider = w, ee.Element = k, ee.ForwardRef = D, ee.Fragment = V, ee.Lazy = j, ee.Memo = Z, ee.Portal = Y, ee.Profiler = R, ee.StrictMode = H, ee.Suspense = J, ee.isAsyncMode = function(E) {
    return N || (N = !0), T(E) || v(E) === s;
  }, ee.isConcurrentMode = T, ee.isContextConsumer = function(E) {
    return v(E) === c;
  }, ee.isContextProvider = function(E) {
    return v(E) === a;
  }, ee.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, ee.isForwardRef = function(E) {
    return v(E) === u;
  }, ee.isFragment = function(E) {
    return v(E) === o;
  }, ee.isLazy = function(E) {
    return v(E) === d;
  }, ee.isMemo = function(E) {
    return v(E) === m;
  }, ee.isPortal = function(E) {
    return v(E) === n;
  }, ee.isProfiler = function(E) {
    return v(E) === i;
  }, ee.isStrictMode = function(E) {
    return v(E) === r;
  }, ee.isSuspense = function(E) {
    return v(E) === g;
  }, ee.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === o || E === l || E === i || E === r || E === g || E === p || typeof E == "object" && E !== null && (E.$$typeof === d || E.$$typeof === m || E.$$typeof === a || E.$$typeof === c || E.$$typeof === u || E.$$typeof === b || E.$$typeof === h || E.$$typeof === f || E.$$typeof === y);
  }, ee.typeOf = v;
}()), ee);
var pa = Er.exports, ma = {};
function Ks(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : o += r + " ";
  }), o;
}
ma[pa.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ma[pa.Memo] = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 };
var Jr = function(e, t, n) {
  var o = e.key + "-" + t.name;
  n === !1 && e.registered[o] === void 0 && (e.registered[o] = t.styles);
}, Yr = function(e, t, n) {
  Jr(e, t, n);
  var o = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var r = t;
    do
      e.insert(t === r ? "." + o : "", r, e.sheet, !0), r = r.next;
    while (r !== void 0);
  }
}, Xu = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Zu = /[A-Z]|^ms/g, qs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ur = function(e) {
  return e.charCodeAt(1) === 45;
}, ha = function(e) {
  return e != null && typeof e != "boolean";
}, Oo = Mu(function(e) {
  return Ur(e) ? e : e.replace(Zu, "-$&").toLowerCase();
}), qn = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(qs, function(n, o, r) {
          return at = { name: o, styles: r, next: at }, o;
        });
  }
  return Xu[e] === 1 || Ur(e) || typeof t != "number" || t === 0 ? t : t + "px";
};
if (process.env.NODE_ENV !== "production") {
  var zu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ju = ["normal", "none", "initial", "inherit", "unset"], _u = qn, fa = {};
  qn = function(e, t) {
    if (e === "content" && (typeof t != "string" || ju.indexOf(t) === -1 && !zu.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = _u(e, t);
    return n === "" || Ur(e) || e.indexOf("-") === -1 || fa[e] !== void 0 || (fa[e] = !0), n;
  };
}
var ba = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ln(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ba);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object":
      if (n.anim === 1)
        return at = { name: n.name, styles: n.styles, next: at }, n.name;
      if (n.styles !== void 0) {
        var o = n.next;
        if (o !== void 0)
          for (; o !== void 0; )
            at = { name: o.name, styles: o.styles, next: at }, o = o.next;
        var r = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (r += n.map), r;
      }
      return function(l, u, g) {
        var p = "";
        if (Array.isArray(g))
          for (var m = 0; m < g.length; m++)
            p += ln(l, u, g[m]) + ";";
        else
          for (var d in g) {
            var y = g[d];
            if (typeof y != "object")
              u != null && u[y] !== void 0 ? p += d + "{" + u[y] + "}" : ha(y) && (p += Oo(d) + ":" + qn(d, y) + ";");
            else {
              if (d === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
                throw new Error(ba);
              if (!Array.isArray(y) || typeof y[0] != "string" || u != null && u[y[0]] !== void 0) {
                var b = ln(l, u, y);
                switch (d) {
                  case "animation":
                  case "animationName":
                    p += Oo(d) + ":" + b + ";";
                    break;
                  default:
                    process.env.NODE_ENV, p += d + "{" + b + "}";
                }
              } else
                for (var h = 0; h < y.length; h++)
                  ha(y[h]) && (p += Oo(d) + ":" + qn(d, y[h]) + ";");
            }
          }
        return p;
      }(e, t, n);
    case "function":
      if (e !== void 0) {
        var i = at, a = n(e);
        return at = i, ln(e, t, a);
      }
      process.env.NODE_ENV;
      break;
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [];
        n.replace(qs, function(l, u, g) {
          var p = "animation" + c.length;
          return c.push("const " + p + " = keyframes`" + g.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        }), c.length;
      }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
var ec, at, va = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
process.env.NODE_ENV !== "production" && (ec = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var fn = function(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, r = "";
  at = void 0;
  var i, a = e[0];
  a == null || a.raw === void 0 ? (o = !1, r += ln(n, t, a)) : (process.env.NODE_ENV !== "production" && a[0], r += a[0]);
  for (var c = 1; c < e.length; c++)
    r += ln(n, t, e[c]), o && (process.env.NODE_ENV !== "production" && a[c], r += a[c]);
  process.env.NODE_ENV !== "production" && (r = r.replace(ec, function(g) {
    return i = g, "";
  })), va.lastIndex = 0;
  for (var s, l = ""; (s = va.exec(r)) !== null; )
    l += "-" + s[1];
  var u = function(g) {
    for (var p, m = 0, d = 0, y = g.length; y >= 4; ++d, y -= 4)
      p = 1540483477 * (65535 & (p = 255 & g.charCodeAt(d) | (255 & g.charCodeAt(++d)) << 8 | (255 & g.charCodeAt(++d)) << 16 | (255 & g.charCodeAt(++d)) << 24)) + (59797 * (p >>> 16) << 16), m = 1540483477 * (65535 & (p ^= p >>> 24)) + (59797 * (p >>> 16) << 16) ^ 1540483477 * (65535 & m) + (59797 * (m >>> 16) << 16);
    switch (y) {
      case 3:
        m ^= (255 & g.charCodeAt(d + 2)) << 16;
      case 2:
        m ^= (255 & g.charCodeAt(d + 1)) << 8;
      case 1:
        m = 1540483477 * (65535 & (m ^= 255 & g.charCodeAt(d))) + (59797 * (m >>> 16) << 16);
    }
    return (((m = 1540483477 * (65535 & (m ^= m >>> 13)) + (59797 * (m >>> 16) << 16)) ^ m >>> 15) >>> 0).toString(36);
  }(r) + l;
  return process.env.NODE_ENV !== "production" ? { name: u, styles: r, map: i, next: at, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } } : { name: u, styles: r, next: at };
}, tc = !!C.useInsertionEffect && C.useInsertionEffect, nc = tc || function(e) {
  return e();
}, ya = tc || C.useLayoutEffect, kr = {}.hasOwnProperty, Lr = C.createContext(typeof HTMLElement < "u" ? Pu({ key: "css" }) : null);
process.env.NODE_ENV !== "production" && (Lr.displayName = "EmotionCacheContext"), Lr.Provider;
var $r = function(e) {
  return hs(function(t, n) {
    var o = Rr(Lr);
    return e(t, o, n);
  });
}, fo = C.createContext({});
process.env.NODE_ENV !== "production" && (fo.displayName = "EmotionThemeContext");
var Du = function(e) {
  var t, n, o = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);
  return o || (o = /^([A-Za-z0-9$.]+)@/.exec(e)) ? (t = o[1], (n = t.split("."))[n.length - 1]) : void 0;
}, Ju = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), Yu = function(e) {
  return e.replace(/\$/g, "-");
}, Gr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Tr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Uu = function(e) {
  var t = e.cache, n = e.serialized, o = e.isStringTag;
  return Jr(t, n, o), nc(function() {
    return Yr(t, n, o);
  }), null;
}, oc = $r(function(e, t, n) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var r = e[Gr], i = [o], a = "";
  typeof e.className == "string" ? a = Ks(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = fn(i, void 0, C.useContext(fo));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var s = e[Tr];
    s && (c = fn([c, "label:" + s + ";"]));
  }
  a += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    !kr.call(e, u) || u === "css" || u === Gr || process.env.NODE_ENV !== "production" && u === Tr || (l[u] = e[u]);
  return l.ref = n, l.className = a, C.createElement(C.Fragment, null, C.createElement(Uu, { cache: t, serialized: c, isStringTag: typeof r == "string" }), C.createElement(r, l));
});
process.env.NODE_ENV !== "production" && (oc.displayName = "EmotionCssPropInternal");
var $u = oc, W = function(e, t) {
  var n = arguments;
  if (t == null || !kr.call(t, "css"))
    return C.createElement.apply(void 0, n);
  var o = n.length, r = new Array(o);
  r[0] = $u, r[1] = function(a, c) {
    if (process.env.NODE_ENV !== "production" && typeof c.css == "string" && c.css.indexOf(":") !== -1)
      throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + c.css + "`");
    var s = {};
    for (var l in c)
      kr.call(c, l) && (s[l] = c[l]);
    if (s[Gr] = a, process.env.NODE_ENV !== "production" && c.css && (typeof c.css != "object" || typeof c.css.name != "string" || c.css.name.indexOf("-") === -1)) {
      var u = function(g) {
        if (g)
          for (var p = g.split(`
`), m = 0; m < p.length; m++) {
            var d = Du(p[m]);
            if (d) {
              if (Ju.has(d))
                break;
              if (/^[A-Z]/.test(d))
                return Yu(d);
            }
          }
      }(new Error().stack);
      u && (s[Tr] = u);
    }
    return s;
  }(e, t);
  for (var i = 2; i < o; i++)
    r[i] = n[i];
  return C.createElement.apply(null, r);
}, Ia = !1, Qu = $r(function(e, t) {
  process.env.NODE_ENV === "production" || Ia || !e.className && !e.css || (Ia = !0);
  var n = e.styles, o = fn([n], void 0, C.useContext(fo)), r = C.useRef();
  return ya(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({ key: i, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), c = !1, s = document.querySelector('style[data-emotion="' + i + " " + o.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), s !== null && (c = !0, s.setAttribute("data-emotion", i), a.hydrate([s])), r.current = [a, c], function() {
      a.flush();
    };
  }, [t]), ya(function() {
    var i = r.current, a = i[0];
    if (i[1])
      i[1] = !1;
    else {
      if (o.next !== void 0 && Yr(t, o.next, !0), a.tags.length) {
        var c = a.tags[a.tags.length - 1].nextElementSibling;
        a.before = c, a.flush();
      }
      t.insert("", o, a, !1);
    }
  }, [t, o.name]), null;
});
function Qr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return fn(t);
}
process.env.NODE_ENV !== "production" && (Qu.displayName = "EmotionGlobal");
var Ku = function e(t) {
  for (var n = t.length, o = 0, r = ""; o < n; o++) {
    var i = t[o];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object":
          if (Array.isArray(i))
            a = e(i);
          else
            for (var c in process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name, a = "", i)
              i[c] && c && (a && (a += " "), a += c);
          break;
        default:
          a = i;
      }
      a && (r && (r += " "), r += a);
    }
  }
  return r;
}, qu = function(e) {
  var t = e.cache, n = e.serializedArr;
  return nc(function() {
    for (var o = 0; o < n.length; o++)
      Yr(t, n[o], !1);
  }), null;
}, ed = $r(function(e, t) {
  var n = !1, o = [], r = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++)
      s[l] = arguments[l];
    var u = fn(s, t.registered);
    return o.push(u), Jr(t, u, !1), t.key + "-" + u.name;
  }, i = { css: r, cx: function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++)
      s[l] = arguments[l];
    return function(u, g, p) {
      var m = [], d = Ks(u, m, p);
      return m.length < 2 ? p : d + g(m);
    }(t.registered, r, Ku(s));
  }, theme: C.useContext(fo) }, a = e.children(i);
  return n = !0, C.createElement(C.Fragment, null, C.createElement(qu, { cache: t, serializedArr: o }), a);
});
if (process.env.NODE_ENV !== "production" && (ed.displayName = "EmotionClassNames"), process.env.NODE_ENV !== "production" && typeof jest > "u" && typeof vi > "u") {
  var Ca = typeof globalThis < "u" ? globalThis : window, xa = "__EMOTION_REACT_" + "11.11.3".split(".")[0] + "__";
  Ca[xa], Ca[xa] = !0;
}
const td = Math.min, nd = Math.max, En = Math.round, kn = Math.floor, eo = (e) => ({ x: e, y: e });
function Sa(e) {
  return ic(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function rc(e) {
  var t;
  return (t = (ic(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ic(e) {
  return e instanceof Node || e instanceof ct(e).Node;
}
function Br(e) {
  return e instanceof Element || e instanceof ct(e).Element;
}
function Mr(e) {
  return e instanceof HTMLElement || e instanceof ct(e).HTMLElement;
}
function Aa(e) {
  return typeof ShadowRoot < "u" && (e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot);
}
function ac(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = Kr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Kr(e) {
  return ct(e).getComputedStyle(e);
}
function sc(e) {
  const t = function(n) {
    if (Sa(n) === "html")
      return n;
    const o = n.assignedSlot || n.parentNode || Aa(n) && n.host || rc(n);
    return Aa(o) ? o.host : o;
  }(e);
  return function(n) {
    return ["html", "body", "#document"].includes(Sa(n));
  }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mr(t) && ac(t) ? t : sc(t);
}
function to(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = sc(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ct(r);
  return i ? t.concat(a, a.visualViewport || [], ac(r) ? r : [], a.frameElement && n ? to(a.frameElement) : []) : t.concat(r, to(r, [], n));
}
function qr(e) {
  return Br(e) ? e : e.contextElement;
}
function Vo(e) {
  const t = qr(e);
  if (!Mr(t))
    return eo(1);
  const n = t.getBoundingClientRect(), { width: o, height: r, $: i } = function(s) {
    const l = Kr(s);
    let u = parseFloat(l.width) || 0, g = parseFloat(l.height) || 0;
    const p = Mr(s), m = p ? s.offsetWidth : u, d = p ? s.offsetHeight : g, y = En(u) !== m || En(g) !== d;
    return y && (u = m, g = d), { width: u, height: g, $: y };
  }(t);
  let a = (i ? En(n.width) : n.width) / o, c = (i ? En(n.height) : n.height) / r;
  return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), { x: a, y: c };
}
const od = eo(0);
function wa(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = qr(e);
  let a = eo(1);
  t && (o ? Br(o) && (a = Vo(o)) : a = Vo(e));
  const c = function(m, d, y) {
    return d === void 0 && (d = !1), !(!y || d && y !== ct(m)) && d;
  }(i, n, o) ? function(m) {
    const d = ct(m);
    return typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && d.visualViewport ? { x: d.visualViewport.offsetLeft, y: d.visualViewport.offsetTop } : od;
  }(i) : eo(0);
  let s = (r.left + c.x) / a.x, l = (r.top + c.y) / a.y, u = r.width / a.x, g = r.height / a.y;
  if (i) {
    const m = ct(i), d = o && Br(o) ? ct(o) : o;
    let y = m.frameElement;
    for (; y && o && d !== m; ) {
      const b = Vo(y), h = y.getBoundingClientRect(), f = Kr(y), v = h.left + (y.clientLeft + parseFloat(f.paddingLeft)) * b.x, x = h.top + (y.clientTop + parseFloat(f.paddingTop)) * b.y;
      s *= b.x, l *= b.y, u *= b.x, g *= b.y, s += v, l += x, y = ct(y).frameElement;
    }
  }
  return p = { width: u, height: g, x: s, y: l }, { ...p, top: p.y, left: p.x, right: p.x + p.width, bottom: p.y + p.height };
  var p;
}
var Or = oe, rd = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], no = function() {
};
function id(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function ad(e, t) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    o[r - 2] = arguments[r];
  var i = [].concat(o);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(id(e, a)));
  return i.filter(function(c) {
    return c;
  }).map(function(c) {
    return String(c).trim();
  }).join(" ");
}
var Na = function(e) {
  return t = e, Array.isArray(t) ? e.filter(Boolean) : ft(e) === "object" && e !== null ? [e] : [];
  var t;
}, Ea = function(e) {
  return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, L({}, st(e, rd));
}, ge = function(e, t, n) {
  var o = e.cx, r = e.getStyles, i = e.getClassNames, a = e.className;
  return { css: r(t, e), className: o(n ?? {}, i(t, e), a) };
};
function bo(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function cc(e) {
  return bo(e) ? window.pageYOffset : e.scrollTop;
}
function oo(e, t) {
  bo(e) ? window.scrollTo(0, t) : e.scrollTop = t;
}
function Ln(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : no, r = cc(e), i = t - r, a = 0;
  (function c() {
    var s = function(l, u, g, p) {
      return g * ((l = l / p - 1) * l * l + 1) + u;
    }(a += 10, r, i, n);
    oo(e, s), a < n ? window.requestAnimationFrame(c) : o(e);
  })();
}
function ka(e, t) {
  var n = e.getBoundingClientRect(), o = t.getBoundingClientRect(), r = t.offsetHeight / 3;
  o.bottom + r > n.bottom ? oo(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + r, e.scrollHeight)) : o.top - r < n.top && oo(e, Math.max(t.offsetTop - r, 0));
}
function La() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
var lc = !1, sd = { get passive() {
  return lc = !0;
} }, Gn = typeof window < "u" ? window : {};
Gn.addEventListener && Gn.removeEventListener && (Gn.addEventListener("p", no, sd), Gn.removeEventListener("p", no, !1));
var cd = lc;
function ld(e) {
  return e != null;
}
function Tn(e, t, n) {
  return e ? t : n;
}
var ud = ["children", "innerProps"], dd = ["children", "innerProps"], Ga, Ro, Ho, uc = function(e) {
  return e === "auto" ? "bottom" : e;
}, dc = ms(null), gd = function(e) {
  var t = e.children, n = e.minMenuHeight, o = e.maxMenuHeight, r = e.menuPlacement, i = e.menuPosition, a = e.menuShouldScrollIntoView, c = e.theme, s = (Rr(dc) || {}).setPortalPlacement, l = fe(null), u = pe(Se(o), 2), g = u[0], p = u[1], m = pe(Se(null), 2), d = m[0], y = m[1], b = c.spacing.controlHeight;
  return Or(function() {
    var h = l.current;
    if (h) {
      var f = i === "fixed", v = function(x) {
        var I = x.maxHeight, A = x.menuEl, w = x.minHeight, k = x.placement, D = x.shouldScroll, V = x.isFixedPosition, j = x.controlHeight, Z = function(St) {
          var Je = getComputedStyle(St), nt = Je.position === "absolute", Mt = /(auto|scroll)/;
          if (Je.position === "fixed")
            return document.documentElement;
          for (var vt = St; vt = vt.parentElement; )
            if (Je = getComputedStyle(vt), (!nt || Je.position !== "static") && Mt.test(Je.overflow + Je.overflowY + Je.overflowX))
              return vt;
          return document.documentElement;
        }(A), Y = { placement: "bottom", maxHeight: I };
        if (!A || !A.offsetParent)
          return Y;
        var R, H = Z.getBoundingClientRect().height, J = A.getBoundingClientRect(), N = J.bottom, T = J.height, E = J.top, z = A.offsetParent.getBoundingClientRect().top, P = V || bo(R = Z) ? window.innerHeight : R.clientHeight, le = cc(Z), ae = parseInt(getComputedStyle(A).marginBottom, 10), $ = parseInt(getComputedStyle(A).marginTop, 10), te = z - $, be = P - E, U = te + le, Ne = H - le - E, Ae = N - P + le + ae, Ke = le + E - $, je = 160;
        switch (k) {
          case "auto":
          case "bottom":
            if (be >= T)
              return { placement: "bottom", maxHeight: I };
            if (Ne >= T && !V)
              return D && Ln(Z, Ae, je), { placement: "bottom", maxHeight: I };
            if (!V && Ne >= w || V && be >= w)
              return D && Ln(Z, Ae, je), { placement: "bottom", maxHeight: V ? be - ae : Ne - ae };
            if (k === "auto" || V) {
              var _e = I, De = V ? te : U;
              return De >= w && (_e = Math.min(De - ae - j, I)), { placement: "top", maxHeight: _e };
            }
            if (k === "bottom")
              return D && oo(Z, Ae), { placement: "bottom", maxHeight: I };
            break;
          case "top":
            if (te >= T)
              return { placement: "top", maxHeight: I };
            if (U >= T && !V)
              return D && Ln(Z, Ke, je), { placement: "top", maxHeight: I };
            if (!V && U >= w || V && te >= w) {
              var xt = I;
              return (!V && U >= w || V && te >= w) && (xt = V ? te - $ : U - $), D && Ln(Z, Ke, je), { placement: "top", maxHeight: xt };
            }
            return { placement: "bottom", maxHeight: I };
          default:
            throw new Error('Invalid placement provided "'.concat(k, '".'));
        }
        return Y;
      }({ maxHeight: o, menuEl: h, minHeight: n, placement: r, shouldScroll: a && !f, isFixedPosition: f, controlHeight: b });
      p(v.maxHeight), y(v.placement), s == null || s(v.placement);
    }
  }, [o, r, i, a, n, s, b]), t({ ref: l, placerProps: L(L({}, e), {}, { placement: d || uc(r), maxHeight: g }) });
}, gc = function(e, t) {
  var n = e.theme, o = n.spacing.baseUnit, r = n.colors;
  return L({ textAlign: "center" }, t ? {} : { color: r.neutral40, padding: "".concat(2 * o, "px ").concat(3 * o, "px") });
}, pd = gc, md = gc, hd = ["size"], fd = ["innerProps", "isRtl", "size"], bd = process.env.NODE_ENV === "production" ? { name: "8mmkcg", styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0" } : { name: "tj5bde-Svg", styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;", map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */", toString: function() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
} }, pc = function(e) {
  var t = e.size, n = st(e, hd);
  return W("svg", F({ height: t, width: t, viewBox: "0 0 20 20", "aria-hidden": "true", focusable: "false", css: bd }, n));
}, Wo = function(e) {
  return W(pc, F({ size: 20 }, e), W("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" }));
}, Ta = function(e) {
  return W(pc, F({ size: 20 }, e), W("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" }));
}, mc = function(e, t) {
  var n = e.isFocused, o = e.theme, r = o.spacing.baseUnit, i = o.colors;
  return L({ label: "indicatorContainer", display: "flex", transition: "color 150ms" }, t ? {} : { color: n ? i.neutral60 : i.neutral20, padding: 2 * r, ":hover": { color: n ? i.neutral80 : i.neutral40 } });
}, vd = mc, yd = mc, Id = function() {
  var e = Qr.apply(void 0, arguments), t = "animation-" + e.name;
  return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}(Ga || (Ro = [`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`], Ho || (Ho = Ro.slice(0)), Ga = Object.freeze(Object.defineProperties(Ro, { raw: { value: Object.freeze(Ho) } })))), Fo = function(e) {
  var t = e.delay, n = e.offset;
  return W("span", { css: Qr({ animation: "".concat(Id, " 1s ease-in-out ").concat(t, "ms infinite;"), backgroundColor: "currentColor", borderRadius: "1em", display: "inline-block", marginLeft: n ? "1em" : void 0, height: "1em", verticalAlign: "top", width: "1em" }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */") });
}, Cd = ["data"], xd = ["innerRef", "isDisabled", "isHidden", "inputClassName"], hc = { gridArea: "1 / 2", font: "inherit", minWidth: "2px", border: 0, margin: 0, outline: 0, padding: 0 }, Sd = { flex: "1 1 auto", display: "inline-grid", gridArea: "1 / 1 / 2 / 3", gridTemplateColumns: "0 min-content", "&:after": L({ content: 'attr(data-value) " "', visibility: "hidden", whiteSpace: "pre" }, hc) }, Ad = function(e) {
  return L({ label: "input", color: "inherit", background: 0, opacity: e ? 0 : 1, width: "100%" }, hc);
}, Ba = function(e) {
  var t = e.children, n = e.innerProps;
  return W("div", n, t);
}, wd = { ClearIndicator: function(e) {
  var t = e.children, n = e.innerProps;
  return W("div", F({}, ge(e, "clearIndicator", { indicator: !0, "clear-indicator": !0 }), n), t || W(Wo, null));
}, Control: function(e) {
  var t = e.children, n = e.isDisabled, o = e.isFocused, r = e.innerRef, i = e.innerProps, a = e.menuIsOpen;
  return W("div", F({ ref: r }, ge(e, "control", { control: !0, "control--is-disabled": n, "control--is-focused": o, "control--menu-is-open": a }), i, { "aria-disabled": n || void 0 }), t);
}, DropdownIndicator: function(e) {
  var t = e.children, n = e.innerProps;
  return W("div", F({}, ge(e, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }), n), t || W(Ta, null));
}, DownChevron: Ta, CrossIcon: Wo, Group: function(e) {
  var t = e.children, n = e.cx, o = e.getStyles, r = e.getClassNames, i = e.Heading, a = e.headingProps, c = e.innerProps, s = e.label, l = e.theme, u = e.selectProps;
  return W("div", F({}, ge(e, "group", { group: !0 }), c), W(i, F({}, a, { selectProps: u, theme: l, getStyles: o, getClassNames: r, cx: n }), s), W("div", null, t));
}, GroupHeading: function(e) {
  var t = Ea(e);
  t.data;
  var n = st(t, Cd);
  return W("div", F({}, ge(e, "groupHeading", { "group-heading": !0 }), n));
}, IndicatorsContainer: function(e) {
  var t = e.children, n = e.innerProps;
  return W("div", F({}, ge(e, "indicatorsContainer", { indicators: !0 }), n), t);
}, IndicatorSeparator: function(e) {
  var t = e.innerProps;
  return W("span", F({}, t, ge(e, "indicatorSeparator", { "indicator-separator": !0 })));
}, Input: function(e) {
  var t = e.cx, n = e.value, o = Ea(e), r = o.innerRef, i = o.isDisabled, a = o.isHidden, c = o.inputClassName, s = st(o, xd);
  return W("div", F({}, ge(e, "input", { "input-container": !0 }), { "data-value": n || "" }), W("input", F({ className: t({ input: !0 }, c), ref: r, style: Ad(a), disabled: i }, s)));
}, LoadingIndicator: function(e) {
  var t = e.innerProps, n = e.isRtl, o = e.size, r = o === void 0 ? 4 : o, i = st(e, fd);
  return W("div", F({}, ge(L(L({}, i), {}, { innerProps: t, isRtl: n, size: r }), "loadingIndicator", { indicator: !0, "loading-indicator": !0 }), t), W(Fo, { delay: 0, offset: n }), W(Fo, { delay: 160, offset: !0 }), W(Fo, { delay: 320, offset: !n }));
}, Menu: function(e) {
  var t = e.children, n = e.innerRef, o = e.innerProps;
  return W("div", F({}, ge(e, "menu", { menu: !0 }), { ref: n }, o), t);
}, MenuList: function(e) {
  var t = e.children, n = e.innerProps, o = e.innerRef, r = e.isMulti;
  return W("div", F({}, ge(e, "menuList", { "menu-list": !0, "menu-list--is-multi": r }), { ref: o }, n), t);
}, MenuPortal: function(e) {
  var t = e.appendTo, n = e.children, o = e.controlElement, r = e.innerProps, i = e.menuPlacement, a = e.menuPosition, c = fe(null), s = fe(null), l = pe(Se(uc(i)), 2), u = l[0], g = l[1], p = Ct(function() {
    return { setPortalPlacement: g };
  }, []), m = pe(Se(null), 2), d = m[0], y = m[1], b = Ve(function() {
    if (o) {
      var x = function(w) {
        var k = w.getBoundingClientRect();
        return { bottom: k.bottom, height: k.height, left: k.left, right: k.right, top: k.top, width: k.width };
      }(o), I = a === "fixed" ? 0 : window.pageYOffset, A = x[u] + I;
      A === (d == null ? void 0 : d.offset) && x.left === (d == null ? void 0 : d.rect.left) && x.width === (d == null ? void 0 : d.rect.width) || y({ offset: A, rect: x });
    }
  }, [o, a, u, d == null ? void 0 : d.offset, d == null ? void 0 : d.rect.left, d == null ? void 0 : d.rect.width]);
  Or(function() {
    b();
  }, [b]);
  var h = Ve(function() {
    typeof s.current == "function" && (s.current(), s.current = null), o && c.current && (s.current = function(x, I, A, w) {
      w === void 0 && (w = {});
      const { ancestorScroll: k = !0, ancestorResize: D = !0, elementResize: V = typeof ResizeObserver == "function", layoutShift: j = typeof IntersectionObserver == "function", animationFrame: Z = !1 } = w, Y = qr(x), R = k || D ? [...Y ? to(Y) : [], ...to(I)] : [];
      R.forEach((z) => {
        k && z.addEventListener("scroll", A, { passive: !0 }), D && z.addEventListener("resize", A);
      });
      const H = Y && j ? function(z, P) {
        let le, ae = null;
        const $ = rc(z);
        function te() {
          clearTimeout(le), ae && ae.disconnect(), ae = null;
        }
        return function be(U, Ne) {
          U === void 0 && (U = !1), Ne === void 0 && (Ne = 1), te();
          const { left: Ae, top: Ke, width: je, height: _e } = z.getBoundingClientRect();
          if (U || P(), !je || !_e)
            return;
          const De = { rootMargin: -kn(Ke) + "px " + -kn($.clientWidth - (Ae + je)) + "px " + -kn($.clientHeight - (Ke + _e)) + "px " + -kn(Ae) + "px", threshold: nd(0, td(1, Ne)) || 1 };
          let xt = !0;
          function St(Je) {
            const nt = Je[0].intersectionRatio;
            if (nt !== Ne) {
              if (!xt)
                return be();
              nt ? be(!1, nt) : le = setTimeout(() => {
                be(!1, 1e-7);
              }, 100);
            }
            xt = !1;
          }
          try {
            ae = new IntersectionObserver(St, { ...De, root: $.ownerDocument });
          } catch {
            ae = new IntersectionObserver(St, De);
          }
          ae.observe(z);
        }(!0), te;
      }(Y, A) : null;
      let J, N = -1, T = null;
      V && (T = new ResizeObserver((z) => {
        let [P] = z;
        P && P.target === Y && T && (T.unobserve(I), cancelAnimationFrame(N), N = requestAnimationFrame(() => {
          T && T.observe(I);
        })), A();
      }), Y && !Z && T.observe(Y), T.observe(I));
      let E = Z ? wa(x) : null;
      return Z && function z() {
        const P = wa(x);
        !E || P.x === E.x && P.y === E.y && P.width === E.width && P.height === E.height || A(), E = P, J = requestAnimationFrame(z);
      }(), A(), () => {
        R.forEach((z) => {
          k && z.removeEventListener("scroll", A), D && z.removeEventListener("resize", A);
        }), H && H(), T && T.disconnect(), T = null, Z && cancelAnimationFrame(J);
      };
    }(o, c.current, b, { elementResize: "ResizeObserver" in window }));
  }, [o, b]);
  Or(function() {
    h();
  }, [h]);
  var f = Ve(function(x) {
    c.current = x, h();
  }, [h]);
  if (!t && a !== "fixed" || !d)
    return null;
  var v = W("div", F({ ref: f }, ge(L(L({}, e), {}, { offset: d.offset, position: a, rect: d.rect }), "menuPortal", { "menu-portal": !0 }), r), n);
  return W(dc.Provider, { value: p }, t ? fs(v, t) : v);
}, LoadingMessage: function(e) {
  var t = e.children, n = t === void 0 ? "Loading..." : t, o = e.innerProps, r = st(e, dd);
  return W("div", F({}, ge(L(L({}, r), {}, { children: n, innerProps: o }), "loadingMessage", { "menu-notice": !0, "menu-notice--loading": !0 }), o), n);
}, NoOptionsMessage: function(e) {
  var t = e.children, n = t === void 0 ? "No options" : t, o = e.innerProps, r = st(e, ud);
  return W("div", F({}, ge(L(L({}, r), {}, { children: n, innerProps: o }), "noOptionsMessage", { "menu-notice": !0, "menu-notice--no-options": !0 }), o), n);
}, MultiValue: function(e) {
  var t = e.children, n = e.components, o = e.data, r = e.innerProps, i = e.isDisabled, a = e.removeProps, c = e.selectProps, s = n.Container, l = n.Label, u = n.Remove;
  return W(s, { data: o, innerProps: L(L({}, ge(e, "multiValue", { "multi-value": !0, "multi-value--is-disabled": i })), r), selectProps: c }, W(l, { data: o, innerProps: L({}, ge(e, "multiValueLabel", { "multi-value__label": !0 })), selectProps: c }, t), W(u, { data: o, innerProps: L(L({}, ge(e, "multiValueRemove", { "multi-value__remove": !0 })), {}, { "aria-label": "Remove ".concat(t || "option") }, a), selectProps: c }));
}, MultiValueContainer: Ba, MultiValueLabel: Ba, MultiValueRemove: function(e) {
  var t = e.children, n = e.innerProps;
  return W("div", F({ role: "button" }, n), t || W(Wo, { size: 14 }));
}, Option: function(e) {
  var t = e.children, n = e.isDisabled, o = e.isFocused, r = e.isSelected, i = e.innerRef, a = e.innerProps;
  return W("div", F({}, ge(e, "option", { option: !0, "option--is-disabled": n, "option--is-focused": o, "option--is-selected": r }), { ref: i, "aria-disabled": n }, a), t);
}, Placeholder: function(e) {
  var t = e.children, n = e.innerProps;
  return W("div", F({}, ge(e, "placeholder", { placeholder: !0 }), n), t);
}, SelectContainer: function(e) {
  var t = e.children, n = e.innerProps, o = e.isDisabled, r = e.isRtl;
  return W("div", F({}, ge(e, "container", { "--is-disabled": o, "--is-rtl": r }), n), t);
}, SingleValue: function(e) {
  var t = e.children, n = e.isDisabled, o = e.innerProps;
  return W("div", F({}, ge(e, "singleValue", { "single-value": !0, "single-value--is-disabled": n }), o), t);
}, ValueContainer: function(e) {
  var t = e.children, n = e.innerProps, o = e.isMulti, r = e.hasValue;
  return W("div", F({}, ge(e, "valueContainer", { "value-container": !0, "value-container--is-multi": o, "value-container--has-value": r }), n), t);
} }, Ma = Number.isNaN || function(e) {
  return typeof e == "number" && e != e;
};
function Nd(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!((o = e[n]) === (r = t[n]) || Ma(o) && Ma(r)))
      return !1;
  var o, r;
  return !0;
}
for (var Ed = process.env.NODE_ENV === "production" ? { name: "7pg0cj-a11yText", styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap" } : { name: "1f43avz-a11yText-A11yText", styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;", map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */", toString: function() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
} }, Oa = function(e) {
  return W("span", F({ css: Ed }, e));
}, kd = { guidance: function(e) {
  var t = e.isSearchable, n = e.isMulti, o = e.tabSelectsValue, r = e.context, i = e.isInitialFocus;
  switch (r) {
    case "menu":
      return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
    case "input":
      return i ? "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "") : "";
    case "value":
      return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
    default:
      return "";
  }
}, onChange: function(e) {
  var t = e.action, n = e.label, o = n === void 0 ? "" : n, r = e.labels, i = e.isDisabled;
  switch (t) {
    case "deselect-option":
    case "pop-value":
    case "remove-value":
      return "option ".concat(o, ", deselected.");
    case "clear":
      return "All selected options have been cleared.";
    case "initial-input-focus":
      return "option".concat(r.length > 1 ? "s" : "", " ").concat(r.join(","), ", selected.");
    case "select-option":
      return "option ".concat(o, i ? " is disabled. Select another option." : ", selected.");
    default:
      return "";
  }
}, onFocus: function(e) {
  var t = e.context, n = e.focused, o = e.options, r = e.label, i = r === void 0 ? "" : r, a = e.selectValue, c = e.isDisabled, s = e.isSelected, l = e.isAppleDevice, u = function(m, d) {
    return m && m.length ? "".concat(m.indexOf(d) + 1, " of ").concat(m.length) : "";
  };
  if (t === "value" && a)
    return "value ".concat(i, " focused, ").concat(u(a, n), ".");
  if (t === "menu" && l) {
    var g = c ? " disabled" : "", p = "".concat(s ? " selected" : "").concat(g);
    return "".concat(i).concat(p, ", ").concat(u(o, n), ".");
  }
  return "";
}, onFilter: function(e) {
  var t = e.inputValue, n = e.resultsMessage;
  return "".concat(n).concat(t ? " for search term " + t : "", ".");
} }, Ld = function(e) {
  var t = e.ariaSelection, n = e.focusedOption, o = e.focusedValue, r = e.focusableOptions, i = e.isFocused, a = e.selectValue, c = e.selectProps, s = e.id, l = e.isAppleDevice, u = c.ariaLiveMessages, g = c.getOptionLabel, p = c.inputValue, m = c.isMulti, d = c.isOptionDisabled, y = c.isSearchable, b = c.menuIsOpen, h = c.options, f = c.screenReaderStatus, v = c.tabSelectsValue, x = c.isLoading, I = c["aria-label"], A = c["aria-live"], w = Ct(function() {
    return L(L({}, kd), u || {});
  }, [u]), k = Ct(function() {
    var R, H = "";
    if (t && w.onChange) {
      var J = t.option, N = t.options, T = t.removedValue, E = t.removedValues, z = t.value, P = T || J || (R = z, Array.isArray(R) ? null : R), le = P ? g(P) : "", ae = N || E || void 0, $ = ae ? ae.map(g) : [], te = L({ isDisabled: P && d(P, a), label: le, labels: $ }, t);
      H = w.onChange(te);
    }
    return H;
  }, [t, w, d, a, g]), D = Ct(function() {
    var R = "", H = n || o, J = !!(n && a && a.includes(n));
    if (H && w.onFocus) {
      var N = { focused: H, label: g(H), isDisabled: d(H, a), isSelected: J, options: r, context: H === n ? "menu" : "value", selectValue: a, isAppleDevice: l };
      R = w.onFocus(N);
    }
    return R;
  }, [n, o, g, d, w, r, a, l]), V = Ct(function() {
    var R = "";
    if (b && h.length && !x && w.onFilter) {
      var H = f({ count: r.length });
      R = w.onFilter({ inputValue: p, resultsMessage: H });
    }
    return R;
  }, [r, p, b, w, h, f, x]), j = (t == null ? void 0 : t.action) === "initial-input-focus", Z = Ct(function() {
    var R = "";
    if (w.guidance) {
      var H = o ? "value" : b ? "menu" : "input";
      R = w.guidance({ "aria-label": I, context: H, isDisabled: n && d(n, a), isMulti: m, isSearchable: y, tabSelectsValue: v, isInitialFocus: j });
    }
    return R;
  }, [I, n, o, m, d, y, b, w, a, v, j]), Y = W(sr, null, W("span", { id: "aria-selection" }, k), W("span", { id: "aria-focused" }, D), W("span", { id: "aria-results" }, V), W("span", { id: "aria-guidance" }, Z));
  return W(sr, null, W(Oa, { id: s }, j && Y), W(Oa, { "aria-live": A, "aria-atomic": "false", "aria-relevant": "additions text", role: "log" }, i && !j && Y));
}, Po = [{ base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" }, { base: "AA", letters: "Ꜳ" }, { base: "AE", letters: "ÆǼǢ" }, { base: "AO", letters: "Ꜵ" }, { base: "AU", letters: "Ꜷ" }, { base: "AV", letters: "ꜸꜺ" }, { base: "AY", letters: "Ꜽ" }, { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" }, { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" }, { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" }, { base: "DZ", letters: "ǱǄ" }, { base: "Dz", letters: "ǲǅ" }, { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" }, { base: "F", letters: "FⒻＦḞƑꝻ" }, { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" }, { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" }, { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" }, { base: "J", letters: "JⒿＪĴɈ" }, { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" }, { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" }, { base: "LJ", letters: "Ǉ" }, { base: "Lj", letters: "ǈ" }, { base: "M", letters: "MⓂＭḾṀṂⱮƜ" }, { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" }, { base: "NJ", letters: "Ǌ" }, { base: "Nj", letters: "ǋ" }, { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" }, { base: "OI", letters: "Ƣ" }, { base: "OO", letters: "Ꝏ" }, { base: "OU", letters: "Ȣ" }, { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" }, { base: "Q", letters: "QⓆＱꝖꝘɊ" }, { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" }, { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" }, { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" }, { base: "TZ", letters: "Ꜩ" }, { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" }, { base: "V", letters: "VⓋＶṼṾƲꝞɅ" }, { base: "VY", letters: "Ꝡ" }, { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" }, { base: "X", letters: "XⓍＸẊẌ" }, { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" }, { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" }, { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" }, { base: "aa", letters: "ꜳ" }, { base: "ae", letters: "æǽǣ" }, { base: "ao", letters: "ꜵ" }, { base: "au", letters: "ꜷ" }, { base: "av", letters: "ꜹꜻ" }, { base: "ay", letters: "ꜽ" }, { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" }, { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" }, { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" }, { base: "dz", letters: "ǳǆ" }, { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" }, { base: "f", letters: "fⓕｆḟƒꝼ" }, { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" }, { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" }, { base: "hv", letters: "ƕ" }, { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" }, { base: "j", letters: "jⓙｊĵǰɉ" }, { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" }, { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" }, { base: "lj", letters: "ǉ" }, { base: "m", letters: "mⓜｍḿṁṃɱɯ" }, { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" }, { base: "nj", letters: "ǌ" }, { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" }, { base: "oi", letters: "ƣ" }, { base: "ou", letters: "ȣ" }, { base: "oo", letters: "ꝏ" }, { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" }, { base: "q", letters: "qⓠｑɋꝗꝙ" }, { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" }, { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" }, { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" }, { base: "tz", letters: "ꜩ" }, { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" }, { base: "v", letters: "vⓥｖṽṿʋꝟʌ" }, { base: "vy", letters: "ꝡ" }, { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" }, { base: "x", letters: "xⓧｘẋẍ" }, { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" }, { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" }], Gd = new RegExp("[" + Po.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), fc = {}, Xo = 0; Xo < Po.length; Xo++)
  for (var Zo = Po[Xo], zo = 0; zo < Zo.letters.length; zo++)
    fc[Zo.letters[zo]] = Zo.base;
var bc = function(e) {
  return e.replace(Gd, function(t) {
    return fc[t];
  });
}, Td = function(e, t) {
  t === void 0 && (t = Nd);
  var n = null;
  function o() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    if (n && n.lastThis === this && t(r, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, r);
    return n = { lastResult: a, lastArgs: r, lastThis: this }, a;
  }
  return o.clear = function() {
    n = null;
  }, o;
}(bc), Va = function(e) {
  return e.replace(/^\s+|\s+$/g, "");
}, Bd = function(e) {
  return "".concat(e.label, " ").concat(e.value);
}, Md = ["innerRef"];
function Od(e) {
  var t = e.innerRef, n = function(o) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    var c = Object.entries(o).filter(function(s) {
      var l = pe(s, 1)[0];
      return !i.includes(l);
    });
    return c.reduce(function(s, l) {
      var u = pe(l, 2), g = u[0], p = u[1];
      return s[g] = p, s;
    }, {});
  }(st(e, Md), "onExited", "in", "enter", "exit", "appear");
  return W("input", F({ ref: t }, n, { css: Qr({ label: "dummyInput", background: 0, border: 0, caretColor: "transparent", fontSize: "inherit", gridArea: "1 / 1 / 2 / 3", outline: 0, padding: 0, width: 1, color: "transparent", left: -100, opacity: 0, position: "relative", transform: "scale(.01)" }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */") }));
}
var Ra = ["boxSizing", "height", "overflow", "paddingRight", "position"], Ha = { boxSizing: "border-box", overflow: "hidden", position: "relative", height: "100%" };
function Wa(e) {
  e.preventDefault();
}
function Fa(e) {
  e.stopPropagation();
}
function Pa() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function Xa() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Za = !(typeof window > "u" || !window.document || !window.document.createElement), tn = 0, Xt = { capture: !1, passive: !1 }, Vd = function(e) {
  var t = e.target;
  return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur();
}, Rd = process.env.NODE_ENV === "production" ? { name: "1kfdb0e", styles: "position:fixed;left:0;bottom:0;right:0;top:0" } : { name: "bp8cua-ScrollManager", styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;", map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */", toString: function() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
} };
function Hd(e) {
  var t = e.children, n = e.lockEnabled, o = e.captureEnabled, r = function(a) {
    var c = a.isEnabled, s = a.onBottomArrive, l = a.onBottomLeave, u = a.onTopArrive, g = a.onTopLeave, p = fe(!1), m = fe(!1), d = fe(0), y = fe(null), b = Ve(function(A, w) {
      if (y.current !== null) {
        var k = y.current, D = k.scrollTop, V = k.scrollHeight, j = k.clientHeight, Z = y.current, Y = w > 0, R = V - j - D, H = !1;
        R > w && p.current && (l && l(A), p.current = !1), Y && m.current && (g && g(A), m.current = !1), Y && w > R ? (s && !p.current && s(A), Z.scrollTop = V, H = !0, p.current = !0) : !Y && -w > D && (u && !m.current && u(A), Z.scrollTop = 0, H = !0, m.current = !0), H && function(J) {
          J.cancelable && J.preventDefault(), J.stopPropagation();
        }(A);
      }
    }, [s, l, u, g]), h = Ve(function(A) {
      b(A, A.deltaY);
    }, [b]), f = Ve(function(A) {
      d.current = A.changedTouches[0].clientY;
    }, []), v = Ve(function(A) {
      var w = d.current - A.changedTouches[0].clientY;
      b(A, w);
    }, [b]), x = Ve(function(A) {
      if (A) {
        var w = !!cd && { passive: !1 };
        A.addEventListener("wheel", h, w), A.addEventListener("touchstart", f, w), A.addEventListener("touchmove", v, w);
      }
    }, [v, f, h]), I = Ve(function(A) {
      A && (A.removeEventListener("wheel", h, !1), A.removeEventListener("touchstart", f, !1), A.removeEventListener("touchmove", v, !1));
    }, [v, f, h]);
    return Ze(function() {
      if (c) {
        var A = y.current;
        return x(A), function() {
          I(A);
        };
      }
    }, [c, x, I]), function(A) {
      y.current = A;
    };
  }({ isEnabled: o === void 0 || o, onBottomArrive: e.onBottomArrive, onBottomLeave: e.onBottomLeave, onTopArrive: e.onTopArrive, onTopLeave: e.onTopLeave }), i = function(a) {
    var c = a.isEnabled, s = a.accountForScrollbars, l = s === void 0 || s, u = fe({}), g = fe(null), p = Ve(function(d) {
      if (Za) {
        var y = document.body, b = y && y.style;
        if (l && Ra.forEach(function(x) {
          var I = b && b[x];
          u.current[x] = I;
        }), l && tn < 1) {
          var h = parseInt(u.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, v = window.innerWidth - f + h || 0;
          Object.keys(Ha).forEach(function(x) {
            var I = Ha[x];
            b && (b[x] = I);
          }), b && (b.paddingRight = "".concat(v, "px"));
        }
        y && Xa() && (y.addEventListener("touchmove", Wa, Xt), d && (d.addEventListener("touchstart", Pa, Xt), d.addEventListener("touchmove", Fa, Xt))), tn += 1;
      }
    }, [l]), m = Ve(function(d) {
      if (Za) {
        var y = document.body, b = y && y.style;
        tn = Math.max(tn - 1, 0), l && tn < 1 && Ra.forEach(function(h) {
          var f = u.current[h];
          b && (b[h] = f);
        }), y && Xa() && (y.removeEventListener("touchmove", Wa, Xt), d && (d.removeEventListener("touchstart", Pa, Xt), d.removeEventListener("touchmove", Fa, Xt)));
      }
    }, [l]);
    return Ze(function() {
      if (c) {
        var d = g.current;
        return p(d), function() {
          m(d);
        };
      }
    }, [c, p, m]), function(d) {
      g.current = d;
    };
  }({ isEnabled: n });
  return W(sr, null, n && W("div", { onClick: Vd, css: Rd }), t(function(a) {
    r(a), i(a);
  }));
}
var Wd = process.env.NODE_ENV === "production" ? { name: "1a0ro4n-requiredInput", styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%" } : { name: "5kkxb2-requiredInput-RequiredInput", styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;", map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */", toString: function() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
} }, Fd = function(e) {
  var t = e.name, n = e.onFocus;
  return W("input", { required: !0, name: t, tabIndex: -1, "aria-hidden": "true", onFocus: n, css: Wd, value: "", onChange: function() {
  } });
};
function Vr(e) {
  var t;
  return typeof window < "u" && window.navigator != null && e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform);
}
function za() {
  return Vr(/^Mac/i);
}
var Pd = { clearIndicator: yd, container: function(e) {
  var t = e.isDisabled;
  return { label: "container", direction: e.isRtl ? "rtl" : void 0, pointerEvents: t ? "none" : void 0, position: "relative" };
}, control: function(e, t) {
  var n = e.isDisabled, o = e.isFocused, r = e.theme, i = r.colors, a = r.borderRadius;
  return L({ label: "control", alignItems: "center", cursor: "default", display: "flex", flexWrap: "wrap", justifyContent: "space-between", minHeight: r.spacing.controlHeight, outline: "0 !important", position: "relative", transition: "all 100ms" }, t ? {} : { backgroundColor: n ? i.neutral5 : i.neutral0, borderColor: n ? i.neutral10 : o ? i.primary : i.neutral20, borderRadius: a, borderStyle: "solid", borderWidth: 1, boxShadow: o ? "0 0 0 1px ".concat(i.primary) : void 0, "&:hover": { borderColor: o ? i.primary : i.neutral30 } });
}, dropdownIndicator: vd, group: function(e, t) {
  var n = e.theme.spacing;
  return t ? {} : { paddingBottom: 2 * n.baseUnit, paddingTop: 2 * n.baseUnit };
}, groupHeading: function(e, t) {
  var n = e.theme, o = n.colors, r = n.spacing;
  return L({ label: "group", cursor: "default", display: "block" }, t ? {} : { color: o.neutral40, fontSize: "75%", fontWeight: 500, marginBottom: "0.25em", paddingLeft: 3 * r.baseUnit, paddingRight: 3 * r.baseUnit, textTransform: "uppercase" });
}, indicatorsContainer: function() {
  return { alignItems: "center", alignSelf: "stretch", display: "flex", flexShrink: 0 };
}, indicatorSeparator: function(e, t) {
  var n = e.isDisabled, o = e.theme, r = o.spacing.baseUnit, i = o.colors;
  return L({ label: "indicatorSeparator", alignSelf: "stretch", width: 1 }, t ? {} : { backgroundColor: n ? i.neutral10 : i.neutral20, marginBottom: 2 * r, marginTop: 2 * r });
}, input: function(e, t) {
  var n = e.isDisabled, o = e.value, r = e.theme, i = r.spacing, a = r.colors;
  return L(L({ visibility: n ? "hidden" : "visible", transform: o ? "translateZ(0)" : "" }, Sd), t ? {} : { margin: i.baseUnit / 2, paddingBottom: i.baseUnit / 2, paddingTop: i.baseUnit / 2, color: a.neutral80 });
}, loadingIndicator: function(e, t) {
  var n = e.isFocused, o = e.size, r = e.theme, i = r.colors, a = r.spacing.baseUnit;
  return L({ label: "loadingIndicator", display: "flex", transition: "color 150ms", alignSelf: "center", fontSize: o, lineHeight: 1, marginRight: o, textAlign: "center", verticalAlign: "middle" }, t ? {} : { color: n ? i.neutral60 : i.neutral20, padding: 2 * a });
}, loadingMessage: md, menu: function(e, t) {
  var n, o = e.placement, r = e.theme, i = r.borderRadius, a = r.spacing, c = r.colors;
  return L((We(n = { label: "menu" }, function(s) {
    return s ? { bottom: "top", top: "bottom" }[s] : "bottom";
  }(o), "100%"), We(n, "position", "absolute"), We(n, "width", "100%"), We(n, "zIndex", 1), n), t ? {} : { backgroundColor: c.neutral0, borderRadius: i, boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)", marginBottom: a.menuGutter, marginTop: a.menuGutter });
}, menuList: function(e, t) {
  var n = e.maxHeight, o = e.theme.spacing.baseUnit;
  return L({ maxHeight: n, overflowY: "auto", position: "relative", WebkitOverflowScrolling: "touch" }, t ? {} : { paddingBottom: o, paddingTop: o });
}, menuPortal: function(e) {
  var t = e.rect, n = e.offset, o = e.position;
  return { left: t.left, position: o, top: n, width: t.width, zIndex: 1 };
}, multiValue: function(e, t) {
  var n = e.theme, o = n.spacing, r = n.borderRadius, i = n.colors;
  return L({ label: "multiValue", display: "flex", minWidth: 0 }, t ? {} : { backgroundColor: i.neutral10, borderRadius: r / 2, margin: o.baseUnit / 2 });
}, multiValueLabel: function(e, t) {
  var n = e.theme, o = n.borderRadius, r = n.colors, i = e.cropWithEllipsis;
  return L({ overflow: "hidden", textOverflow: i || i === void 0 ? "ellipsis" : void 0, whiteSpace: "nowrap" }, t ? {} : { borderRadius: o / 2, color: r.neutral80, fontSize: "85%", padding: 3, paddingLeft: 6 });
}, multiValueRemove: function(e, t) {
  var n = e.theme, o = n.spacing, r = n.borderRadius, i = n.colors, a = e.isFocused;
  return L({ alignItems: "center", display: "flex" }, t ? {} : { borderRadius: r / 2, backgroundColor: a ? i.dangerLight : void 0, paddingLeft: o.baseUnit, paddingRight: o.baseUnit, ":hover": { backgroundColor: i.dangerLight, color: i.danger } });
}, noOptionsMessage: pd, option: function(e, t) {
  var n = e.isDisabled, o = e.isFocused, r = e.isSelected, i = e.theme, a = i.spacing, c = i.colors;
  return L({ label: "option", cursor: "default", display: "block", fontSize: "inherit", width: "100%", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }, t ? {} : { backgroundColor: r ? c.primary : o ? c.primary25 : "transparent", color: n ? c.neutral20 : r ? c.neutral0 : "inherit", padding: "".concat(2 * a.baseUnit, "px ").concat(3 * a.baseUnit, "px"), ":active": { backgroundColor: n ? void 0 : r ? c.primary : c.primary50 } });
}, placeholder: function(e, t) {
  var n = e.theme, o = n.spacing, r = n.colors;
  return L({ label: "placeholder", gridArea: "1 / 1 / 2 / 3" }, t ? {} : { color: r.neutral50, marginLeft: o.baseUnit / 2, marginRight: o.baseUnit / 2 });
}, singleValue: function(e, t) {
  var n = e.isDisabled, o = e.theme, r = o.spacing, i = o.colors;
  return L({ label: "singleValue", gridArea: "1 / 1 / 2 / 3", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, t ? {} : { color: n ? i.neutral40 : i.neutral80, marginLeft: r.baseUnit / 2, marginRight: r.baseUnit / 2 });
}, valueContainer: function(e, t) {
  var n = e.theme.spacing, o = e.isMulti, r = e.hasValue, i = e.selectProps.controlShouldRenderValue;
  return L({ alignItems: "center", display: o && r && i ? "flex" : "grid", flex: 1, flexWrap: "wrap", WebkitOverflowScrolling: "touch", position: "relative", overflow: "hidden" }, t ? {} : { padding: "".concat(n.baseUnit / 2, "px ").concat(2 * n.baseUnit, "px") });
} }, jo = { borderRadius: 4, colors: { primary: "#2684FF", primary75: "#4C9AFF", primary50: "#B2D4FF", primary25: "#DEEBFF", danger: "#DE350B", dangerLight: "#FFBDAD", neutral0: "hsl(0, 0%, 100%)", neutral5: "hsl(0, 0%, 95%)", neutral10: "hsl(0, 0%, 90%)", neutral20: "hsl(0, 0%, 80%)", neutral30: "hsl(0, 0%, 70%)", neutral40: "hsl(0, 0%, 60%)", neutral50: "hsl(0, 0%, 50%)", neutral60: "hsl(0, 0%, 40%)", neutral70: "hsl(0, 0%, 30%)", neutral80: "hsl(0, 0%, 20%)", neutral90: "hsl(0, 0%, 10%)" }, spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 } }, Xd = { "aria-live": "polite", backspaceRemovesValue: !0, blurInputOnSelect: La(), captureMenuScroll: !La(), classNames: {}, closeMenuOnSelect: !0, closeMenuOnScroll: !1, components: {}, controlShouldRenderValue: !0, escapeClearsValue: !1, filterOption: function(e, t) {
  if (e.data.__isNew__)
    return !0;
  var n = L({ ignoreCase: !0, ignoreAccents: !0, stringify: Bd, trim: !0, matchFrom: "any" }, void 0), o = n.ignoreCase, r = n.ignoreAccents, i = n.stringify, a = n.trim, c = n.matchFrom, s = a ? Va(t) : t, l = a ? Va(i(e)) : i(e);
  return o && (s = s.toLowerCase(), l = l.toLowerCase()), r && (s = Td(s), l = bc(l)), c === "start" ? l.substr(0, s.length) === s : l.indexOf(s) > -1;
}, formatGroupLabel: function(e) {
  return e.label;
}, getOptionLabel: function(e) {
  return e.label;
}, getOptionValue: function(e) {
  return e.value;
}, isDisabled: !1, isLoading: !1, isMulti: !1, isRtl: !1, isSearchable: !0, isOptionDisabled: function(e) {
  return !!e.isDisabled;
}, loadingMessage: function() {
  return "Loading...";
}, maxMenuHeight: 300, minMenuHeight: 140, menuIsOpen: !1, menuPlacement: "bottom", menuPosition: "absolute", menuShouldBlockScroll: !1, menuShouldScrollIntoView: !function() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}(), noOptionsMessage: function() {
  return "No options";
}, openMenuOnFocus: !1, openMenuOnClick: !0, options: [], pageSize: 5, placeholder: "Select...", screenReaderStatus: function(e) {
  var t = e.count;
  return "".concat(t, " result").concat(t !== 1 ? "s" : "", " available");
}, styles: {}, tabIndex: 0, tabSelectsValue: !0, unstyled: !1 };
function ja(e, t, n, o) {
  return { type: "option", data: t, isDisabled: yc(e, t, n), isSelected: Ic(e, t, n), label: vc(e, t), value: ro(e, t), index: o };
}
function Bn(e, t) {
  return e.options.map(function(n, o) {
    if ("options" in n) {
      var r = n.options.map(function(a, c) {
        return ja(e, a, t, c);
      }).filter(function(a) {
        return Ja(e, a);
      });
      return r.length > 0 ? { type: "group", data: n, options: r, index: o } : void 0;
    }
    var i = ja(e, n, t, o);
    return Ja(e, i) ? i : void 0;
  }).filter(ld);
}
function _a(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, it(n.options.map(function(o) {
      return o.data;
    }))) : t.push(n.data), t;
  }, []);
}
function Da(e, t) {
  return e.reduce(function(n, o) {
    return o.type === "group" ? n.push.apply(n, it(o.options.map(function(r) {
      return { data: r.data, id: "".concat(t, "-").concat(o.index, "-").concat(r.index) };
    }))) : n.push({ data: o.data, id: "".concat(t, "-").concat(o.index) }), n;
  }, []);
}
function Ja(e, t) {
  var n = e.inputValue, o = n === void 0 ? "" : n, r = t.data, i = t.isSelected, a = t.label, c = t.value;
  return (!xc(e) || !i) && Cc(e, { label: a, value: c, data: r }, o);
}
var _o = function(e, t) {
  var n;
  return ((n = e.find(function(o) {
    return o.data === t;
  })) === null || n === void 0 ? void 0 : n.id) || null;
}, vc = function(e, t) {
  return e.getOptionLabel(t);
}, ro = function(e, t) {
  return e.getOptionValue(t);
};
function yc(e, t, n) {
  return typeof e.isOptionDisabled == "function" && e.isOptionDisabled(t, n);
}
function Ic(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var o = ro(e, t);
  return n.some(function(r) {
    return ro(e, r) === o;
  });
}
function Cc(e, t, n) {
  return !e.filterOption || e.filterOption(t, n);
}
var xc = function(e) {
  var t = e.hideSelectedOptions, n = e.isMulti;
  return t === void 0 ? n : t;
}, Zd = 1, Sc = function(e) {
  (function(o, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(r && r.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), r && Ar(o, r);
  })(n, Rc);
  var t = Cu(n);
  function n(o) {
    var r;
    if (js(this, n), (r = t.call(this, o)).state = { ariaSelection: null, focusedOption: null, focusedOptionId: null, focusableOptionsWithIds: [], focusedValue: null, inputIsHidden: !1, isFocused: !1, selectValue: [], clearFocusValueOnUpdate: !1, prevWasFocused: !1, inputIsHiddenAfterUpdate: void 0, prevProps: void 0, instancePrefix: "" }, r.blockOptionHover = !1, r.isComposing = !1, r.commonProps = void 0, r.initialTouchX = 0, r.initialTouchY = 0, r.openAfterFocus = !1, r.scrollToFocusedOptionOnUpdate = !1, r.userIsDragging = void 0, r.isAppleDevice = za() || Vr(/^iPhone/i) || Vr(/^iPad/i) || za() && navigator.maxTouchPoints > 1, r.controlRef = null, r.getControlRef = function(s) {
      r.controlRef = s;
    }, r.focusedOptionRef = null, r.getFocusedOptionRef = function(s) {
      r.focusedOptionRef = s;
    }, r.menuListRef = null, r.getMenuListRef = function(s) {
      r.menuListRef = s;
    }, r.inputRef = null, r.getInputRef = function(s) {
      r.inputRef = s;
    }, r.focus = r.focusInput, r.blur = r.blurInput, r.onChange = function(s, l) {
      var u = r.props, g = u.onChange, p = u.name;
      l.name = p, r.ariaOnChange(s, l), g(s, l);
    }, r.setValue = function(s, l, u) {
      var g = r.props, p = g.closeMenuOnSelect, m = g.isMulti, d = g.inputValue;
      r.onInputChange("", { action: "set-value", prevInputValue: d }), p && (r.setState({ inputIsHiddenAfterUpdate: !m }), r.onMenuClose()), r.setState({ clearFocusValueOnUpdate: !0 }), r.onChange(s, { action: l, option: u });
    }, r.selectOption = function(s) {
      var l = r.props, u = l.blurInputOnSelect, g = l.isMulti, p = l.name, m = r.state.selectValue, d = g && r.isOptionSelected(s, m), y = r.isOptionDisabled(s, m);
      if (d) {
        var b = r.getOptionValue(s);
        r.setValue(m.filter(function(h) {
          return r.getOptionValue(h) !== b;
        }), "deselect-option", s);
      } else {
        if (y)
          return void r.ariaOnChange(s, { action: "select-option", option: s, name: p });
        g ? r.setValue([].concat(it(m), [s]), "select-option", s) : r.setValue(s, "select-option");
      }
      u && r.blurInput();
    }, r.removeValue = function(s) {
      var l = r.props.isMulti, u = r.state.selectValue, g = r.getOptionValue(s), p = u.filter(function(d) {
        return r.getOptionValue(d) !== g;
      }), m = Tn(l, p, p[0] || null);
      r.onChange(m, { action: "remove-value", removedValue: s }), r.focusInput();
    }, r.clearValue = function() {
      var s = r.state.selectValue;
      r.onChange(Tn(r.props.isMulti, [], null), { action: "clear", removedValues: s });
    }, r.popValue = function() {
      var s = r.props.isMulti, l = r.state.selectValue, u = l[l.length - 1], g = l.slice(0, l.length - 1), p = Tn(s, g, g[0] || null);
      r.onChange(p, { action: "pop-value", removedValue: u });
    }, r.getFocusedOptionId = function(s) {
      return _o(r.state.focusableOptionsWithIds, s);
    }, r.getFocusableOptionsWithIds = function() {
      return Da(Bn(r.props, r.state.selectValue), r.getElementId("option"));
    }, r.getValue = function() {
      return r.state.selectValue;
    }, r.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return ad.apply(void 0, [r.props.classNamePrefix].concat(l));
    }, r.getOptionLabel = function(s) {
      return vc(r.props, s);
    }, r.getOptionValue = function(s) {
      return ro(r.props, s);
    }, r.getStyles = function(s, l) {
      var u = r.props.unstyled, g = Pd[s](l, u);
      g.boxSizing = "border-box";
      var p = r.props.styles[s];
      return p ? p(g, l) : g;
    }, r.getClassNames = function(s, l) {
      var u, g;
      return (u = (g = r.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(g, l);
    }, r.getElementId = function(s) {
      return "".concat(r.state.instancePrefix, "-").concat(s);
    }, r.getComponents = function() {
      return s = r.props, L(L({}, wd), s.components);
      var s;
    }, r.buildCategorizedOptions = function() {
      return Bn(r.props, r.state.selectValue);
    }, r.getCategorizedOptions = function() {
      return r.props.menuIsOpen ? r.buildCategorizedOptions() : [];
    }, r.buildFocusableOptions = function() {
      return _a(r.buildCategorizedOptions());
    }, r.getFocusableOptions = function() {
      return r.props.menuIsOpen ? r.buildFocusableOptions() : [];
    }, r.ariaOnChange = function(s, l) {
      r.setState({ ariaSelection: L({ value: s }, l) });
    }, r.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), r.focusInput());
    }, r.onMenuMouseMove = function(s) {
      r.blockOptionHover = !1;
    }, r.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var l = r.props.openMenuOnClick;
        r.state.isFocused ? r.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && r.onMenuClose() : l && r.openMenu("first") : (l && (r.openAfterFocus = !0), r.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, r.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0 || r.props.isDisabled)) {
        var l = r.props, u = l.isMulti, g = l.menuIsOpen;
        r.focusInput(), g ? (r.setState({ inputIsHiddenAfterUpdate: !u }), r.onMenuClose()) : r.openMenu("first"), s.preventDefault();
      }
    }, r.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (r.clearValue(), s.preventDefault(), r.openAfterFocus = !1, s.type === "touchend" ? r.focusInput() : setTimeout(function() {
        return r.focusInput();
      }));
    }, r.onScroll = function(s) {
      typeof r.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && bo(s.target) && r.props.onMenuClose() : typeof r.props.closeMenuOnScroll == "function" && r.props.closeMenuOnScroll(s) && r.props.onMenuClose();
    }, r.onCompositionStart = function() {
      r.isComposing = !0;
    }, r.onCompositionEnd = function() {
      r.isComposing = !1;
    }, r.onTouchStart = function(s) {
      var l = s.touches, u = l && l.item(0);
      u && (r.initialTouchX = u.clientX, r.initialTouchY = u.clientY, r.userIsDragging = !1);
    }, r.onTouchMove = function(s) {
      var l = s.touches, u = l && l.item(0);
      if (u) {
        var g = Math.abs(u.clientX - r.initialTouchX), p = Math.abs(u.clientY - r.initialTouchY);
        r.userIsDragging = g > 5 || p > 5;
      }
    }, r.onTouchEnd = function(s) {
      r.userIsDragging || (r.controlRef && !r.controlRef.contains(s.target) && r.menuListRef && !r.menuListRef.contains(s.target) && r.blurInput(), r.initialTouchX = 0, r.initialTouchY = 0);
    }, r.onControlTouchEnd = function(s) {
      r.userIsDragging || r.onControlMouseDown(s);
    }, r.onClearIndicatorTouchEnd = function(s) {
      r.userIsDragging || r.onClearIndicatorMouseDown(s);
    }, r.onDropdownIndicatorTouchEnd = function(s) {
      r.userIsDragging || r.onDropdownIndicatorMouseDown(s);
    }, r.handleInputChange = function(s) {
      var l = r.props.inputValue, u = s.currentTarget.value;
      r.setState({ inputIsHiddenAfterUpdate: !1 }), r.onInputChange(u, { action: "input-change", prevInputValue: l }), r.props.menuIsOpen || r.onMenuOpen();
    }, r.onInputFocus = function(s) {
      r.props.onFocus && r.props.onFocus(s), r.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }), (r.openAfterFocus || r.props.openMenuOnFocus) && r.openMenu("first"), r.openAfterFocus = !1;
    }, r.onInputBlur = function(s) {
      var l = r.props.inputValue;
      r.menuListRef && r.menuListRef.contains(document.activeElement) ? r.inputRef.focus() : (r.props.onBlur && r.props.onBlur(s), r.onInputChange("", { action: "input-blur", prevInputValue: l }), r.onMenuClose(), r.setState({ focusedValue: null, isFocused: !1 }));
    }, r.onOptionHover = function(s) {
      if (!r.blockOptionHover && r.state.focusedOption !== s) {
        var l = r.getFocusableOptions().indexOf(s);
        r.setState({ focusedOption: s, focusedOptionId: l > -1 ? r.getFocusedOptionId(s) : null });
      }
    }, r.shouldHideSelectedOptions = function() {
      return xc(r.props);
    }, r.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), r.focus();
    }, r.onKeyDown = function(s) {
      var l = r.props, u = l.isMulti, g = l.backspaceRemovesValue, p = l.escapeClearsValue, m = l.inputValue, d = l.isClearable, y = l.isDisabled, b = l.menuIsOpen, h = l.onKeyDown, f = l.tabSelectsValue, v = l.openMenuOnFocus, x = r.state, I = x.focusedOption, A = x.focusedValue, w = x.selectValue;
      if (!(y || typeof h == "function" && (h(s), s.defaultPrevented))) {
        switch (r.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!u || m)
              return;
            r.focusValue("previous");
            break;
          case "ArrowRight":
            if (!u || m)
              return;
            r.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (m)
              return;
            if (A)
              r.removeValue(A);
            else {
              if (!g)
                return;
              u ? r.popValue() : d && r.clearValue();
            }
            break;
          case "Tab":
            if (r.isComposing || s.shiftKey || !b || !f || !I || v && r.isOptionSelected(I, w))
              return;
            r.selectOption(I);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (b) {
              if (!I || r.isComposing)
                return;
              r.selectOption(I);
              break;
            }
            return;
          case "Escape":
            b ? (r.setState({ inputIsHiddenAfterUpdate: !1 }), r.onInputChange("", { action: "menu-close", prevInputValue: m }), r.onMenuClose()) : d && p && r.clearValue();
            break;
          case " ":
            if (m)
              return;
            if (!b) {
              r.openMenu("first");
              break;
            }
            if (!I)
              return;
            r.selectOption(I);
            break;
          case "ArrowUp":
            b ? r.focusOption("up") : r.openMenu("last");
            break;
          case "ArrowDown":
            b ? r.focusOption("down") : r.openMenu("first");
            break;
          case "PageUp":
            if (!b)
              return;
            r.focusOption("pageup");
            break;
          case "PageDown":
            if (!b)
              return;
            r.focusOption("pagedown");
            break;
          case "Home":
            if (!b)
              return;
            r.focusOption("first");
            break;
          case "End":
            if (!b)
              return;
            r.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, r.state.instancePrefix = "react-select-" + (r.props.instanceId || ++Zd), r.state.selectValue = Na(o.value), o.menuIsOpen && r.state.selectValue.length) {
      var i = r.getFocusableOptionsWithIds(), a = r.buildFocusableOptions(), c = a.indexOf(r.state.selectValue[0]);
      r.state.focusableOptionsWithIds = i, r.state.focusedOption = a[c], r.state.focusedOptionId = _o(i, a[c]);
    }
    return r;
  }
  return _s(n, [{ key: "componentDidMount", value: function() {
    this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && ka(this.menuListRef, this.focusedOptionRef);
  } }, { key: "componentDidUpdate", value: function(o) {
    var r = this.props, i = r.isDisabled, a = r.menuIsOpen, c = this.state.isFocused;
    (c && !i && o.isDisabled || c && a && !o.menuIsOpen) && this.focusInput(), c && i && !o.isDisabled ? this.setState({ isFocused: !1 }, this.onMenuClose) : c || i || !o.isDisabled || this.inputRef !== document.activeElement || this.setState({ isFocused: !0 }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (ka(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
  } }, { key: "componentWillUnmount", value: function() {
    this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
  } }, { key: "onMenuOpen", value: function() {
    this.props.onMenuOpen();
  } }, { key: "onMenuClose", value: function() {
    this.onInputChange("", { action: "menu-close", prevInputValue: this.props.inputValue }), this.props.onMenuClose();
  } }, { key: "onInputChange", value: function(o, r) {
    this.props.onInputChange(o, r);
  } }, { key: "focusInput", value: function() {
    this.inputRef && this.inputRef.focus();
  } }, { key: "blurInput", value: function() {
    this.inputRef && this.inputRef.blur();
  } }, { key: "openMenu", value: function(o) {
    var r = this, i = this.state, a = i.selectValue, c = i.isFocused, s = this.buildFocusableOptions(), l = o === "first" ? 0 : s.length - 1;
    if (!this.props.isMulti) {
      var u = s.indexOf(a[0]);
      u > -1 && (l = u);
    }
    this.scrollToFocusedOptionOnUpdate = !(c && this.menuListRef), this.setState({ inputIsHiddenAfterUpdate: !1, focusedValue: null, focusedOption: s[l], focusedOptionId: this.getFocusedOptionId(s[l]) }, function() {
      return r.onMenuOpen();
    });
  } }, { key: "focusValue", value: function(o) {
    var r = this.state, i = r.selectValue, a = r.focusedValue;
    if (this.props.isMulti) {
      this.setState({ focusedOption: null });
      var c = i.indexOf(a);
      a || (c = -1);
      var s = i.length - 1, l = -1;
      if (i.length) {
        switch (o) {
          case "previous":
            l = c === 0 ? 0 : c === -1 ? s : c - 1;
            break;
          case "next":
            c > -1 && c < s && (l = c + 1);
        }
        this.setState({ inputIsHidden: l !== -1, focusedValue: i[l] });
      }
    }
  } }, { key: "focusOption", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", r = this.props.pageSize, i = this.state.focusedOption, a = this.getFocusableOptions();
    if (a.length) {
      var c = 0, s = a.indexOf(i);
      i || (s = -1), o === "up" ? c = s > 0 ? s - 1 : a.length - 1 : o === "down" ? c = (s + 1) % a.length : o === "pageup" ? (c = s - r) < 0 && (c = 0) : o === "pagedown" ? (c = s + r) > a.length - 1 && (c = a.length - 1) : o === "last" && (c = a.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({ focusedOption: a[c], focusedValue: null, focusedOptionId: this.getFocusedOptionId(a[c]) });
    }
  } }, { key: "getTheme", value: function() {
    return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(jo) : L(L({}, jo), this.props.theme) : jo;
  } }, { key: "getCommonProps", value: function() {
    var o = this.clearValue, r = this.cx, i = this.getStyles, a = this.getClassNames, c = this.getValue, s = this.selectOption, l = this.setValue, u = this.props, g = u.isMulti, p = u.isRtl, m = u.options;
    return { clearValue: o, cx: r, getStyles: i, getClassNames: a, getValue: c, hasValue: this.hasValue(), isMulti: g, isRtl: p, options: m, selectOption: s, selectProps: u, setValue: l, theme: this.getTheme() };
  } }, { key: "hasValue", value: function() {
    return this.state.selectValue.length > 0;
  } }, { key: "hasOptions", value: function() {
    return !!this.getFocusableOptions().length;
  } }, { key: "isClearable", value: function() {
    var o = this.props, r = o.isClearable, i = o.isMulti;
    return r === void 0 ? i : r;
  } }, { key: "isOptionDisabled", value: function(o, r) {
    return yc(this.props, o, r);
  } }, { key: "isOptionSelected", value: function(o, r) {
    return Ic(this.props, o, r);
  } }, { key: "filterOption", value: function(o, r) {
    return Cc(this.props, o, r);
  } }, { key: "formatOptionLabel", value: function(o, r) {
    if (typeof this.props.formatOptionLabel == "function") {
      var i = this.props.inputValue, a = this.state.selectValue;
      return this.props.formatOptionLabel(o, { context: r, inputValue: i, selectValue: a });
    }
    return this.getOptionLabel(o);
  } }, { key: "formatGroupLabel", value: function(o) {
    return this.props.formatGroupLabel(o);
  } }, { key: "startListeningComposition", value: function() {
    document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
  } }, { key: "stopListeningComposition", value: function() {
    document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
  } }, { key: "startListeningToTouch", value: function() {
    document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
  } }, { key: "stopListeningToTouch", value: function() {
    document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
  } }, { key: "renderInput", value: function() {
    var o = this.props, r = o.isDisabled, i = o.isSearchable, a = o.inputId, c = o.inputValue, s = o.tabIndex, l = o.form, u = o.menuIsOpen, g = o.required, p = this.getComponents().Input, m = this.state, d = m.inputIsHidden, y = m.ariaSelection, b = this.commonProps, h = a || this.getElementId("input"), f = L(L(L({ "aria-autocomplete": "list", "aria-expanded": u, "aria-haspopup": !0, "aria-errormessage": this.props["aria-errormessage"], "aria-invalid": this.props["aria-invalid"], "aria-label": this.props["aria-label"], "aria-labelledby": this.props["aria-labelledby"], "aria-required": g, role: "combobox", "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || "" }, u && { "aria-controls": this.getElementId("listbox") }), !i && { "aria-readonly": !0 }), this.hasValue() ? (y == null ? void 0 : y.action) === "initial-input-focus" && { "aria-describedby": this.getElementId("live-region") } : { "aria-describedby": this.getElementId("placeholder") });
    return i ? C.createElement(p, F({}, b, { autoCapitalize: "none", autoComplete: "off", autoCorrect: "off", id: h, innerRef: this.getInputRef, isDisabled: r, isHidden: d, onBlur: this.onInputBlur, onChange: this.handleInputChange, onFocus: this.onInputFocus, spellCheck: "false", tabIndex: s, form: l, type: "text", value: c }, f)) : C.createElement(Od, F({ id: h, innerRef: this.getInputRef, onBlur: this.onInputBlur, onChange: no, onFocus: this.onInputFocus, disabled: r, tabIndex: s, inputMode: "none", form: l, value: "" }, f));
  } }, { key: "renderPlaceholderOrValue", value: function() {
    var o = this, r = this.getComponents(), i = r.MultiValue, a = r.MultiValueContainer, c = r.MultiValueLabel, s = r.MultiValueRemove, l = r.SingleValue, u = r.Placeholder, g = this.commonProps, p = this.props, m = p.controlShouldRenderValue, d = p.isDisabled, y = p.isMulti, b = p.inputValue, h = p.placeholder, f = this.state, v = f.selectValue, x = f.focusedValue, I = f.isFocused;
    if (!this.hasValue() || !m)
      return b ? null : C.createElement(u, F({}, g, { key: "placeholder", isDisabled: d, isFocused: I, innerProps: { id: this.getElementId("placeholder") } }), h);
    if (y)
      return v.map(function(w, k) {
        var D = w === x, V = "".concat(o.getOptionLabel(w), "-").concat(o.getOptionValue(w));
        return C.createElement(i, F({}, g, { components: { Container: a, Label: c, Remove: s }, isFocused: D, isDisabled: d, key: V, index: k, removeProps: { onClick: function() {
          return o.removeValue(w);
        }, onTouchEnd: function() {
          return o.removeValue(w);
        }, onMouseDown: function(j) {
          j.preventDefault();
        } }, data: w }), o.formatOptionLabel(w, "value"));
      });
    if (b)
      return null;
    var A = v[0];
    return C.createElement(l, F({}, g, { data: A, isDisabled: d }), this.formatOptionLabel(A, "value"));
  } }, { key: "renderClearIndicator", value: function() {
    var o = this.getComponents().ClearIndicator, r = this.commonProps, i = this.props, a = i.isDisabled, c = i.isLoading, s = this.state.isFocused;
    if (!this.isClearable() || !o || a || !this.hasValue() || c)
      return null;
    var l = { onMouseDown: this.onClearIndicatorMouseDown, onTouchEnd: this.onClearIndicatorTouchEnd, "aria-hidden": "true" };
    return C.createElement(o, F({}, r, { innerProps: l, isFocused: s }));
  } }, { key: "renderLoadingIndicator", value: function() {
    var o = this.getComponents().LoadingIndicator, r = this.commonProps, i = this.props, a = i.isDisabled, c = i.isLoading, s = this.state.isFocused;
    return o && c ? C.createElement(o, F({}, r, { innerProps: { "aria-hidden": "true" }, isDisabled: a, isFocused: s })) : null;
  } }, { key: "renderIndicatorSeparator", value: function() {
    var o = this.getComponents(), r = o.DropdownIndicator, i = o.IndicatorSeparator;
    if (!r || !i)
      return null;
    var a = this.commonProps, c = this.props.isDisabled, s = this.state.isFocused;
    return C.createElement(i, F({}, a, { isDisabled: c, isFocused: s }));
  } }, { key: "renderDropdownIndicator", value: function() {
    var o = this.getComponents().DropdownIndicator;
    if (!o)
      return null;
    var r = this.commonProps, i = this.props.isDisabled, a = this.state.isFocused, c = { onMouseDown: this.onDropdownIndicatorMouseDown, onTouchEnd: this.onDropdownIndicatorTouchEnd, "aria-hidden": "true" };
    return C.createElement(o, F({}, r, { innerProps: c, isDisabled: i, isFocused: a }));
  } }, { key: "renderMenu", value: function() {
    var o = this, r = this.getComponents(), i = r.Group, a = r.GroupHeading, c = r.Menu, s = r.MenuList, l = r.MenuPortal, u = r.LoadingMessage, g = r.NoOptionsMessage, p = r.Option, m = this.commonProps, d = this.state.focusedOption, y = this.props, b = y.captureMenuScroll, h = y.inputValue, f = y.isLoading, v = y.loadingMessage, x = y.minMenuHeight, I = y.maxMenuHeight, A = y.menuIsOpen, w = y.menuPlacement, k = y.menuPosition, D = y.menuPortalTarget, V = y.menuShouldBlockScroll, j = y.menuShouldScrollIntoView, Z = y.noOptionsMessage, Y = y.onMenuScrollToTop, R = y.onMenuScrollToBottom;
    if (!A)
      return null;
    var H, J = function(P, le) {
      var ae = P.type, $ = P.data, te = P.isDisabled, be = P.isSelected, U = P.label, Ne = P.value, Ae = d === $, Ke = te ? void 0 : function() {
        return o.onOptionHover($);
      }, je = te ? void 0 : function() {
        return o.selectOption($);
      }, _e = "".concat(o.getElementId("option"), "-").concat(le), De = { id: _e, onClick: je, onMouseMove: Ke, onMouseOver: Ke, tabIndex: -1, role: "option", "aria-selected": o.isAppleDevice ? void 0 : be };
      return C.createElement(p, F({}, m, { innerProps: De, data: $, isDisabled: te, isSelected: be, key: _e, label: U, type: ae, value: Ne, isFocused: Ae, innerRef: Ae ? o.getFocusedOptionRef : void 0 }), o.formatOptionLabel(P.data, "menu"));
    };
    if (this.hasOptions())
      H = this.getCategorizedOptions().map(function(P) {
        if (P.type === "group") {
          var le = P.data, ae = P.options, $ = P.index, te = "".concat(o.getElementId("group"), "-").concat($), be = "".concat(te, "-heading");
          return C.createElement(i, F({}, m, { key: te, data: le, options: ae, Heading: a, headingProps: { id: be, data: P.data }, label: o.formatGroupLabel(P.data) }), P.options.map(function(U) {
            return J(U, "".concat($, "-").concat(U.index));
          }));
        }
        if (P.type === "option")
          return J(P, "".concat(P.index));
      });
    else if (f) {
      var N = v({ inputValue: h });
      if (N === null)
        return null;
      H = C.createElement(u, m, N);
    } else {
      var T = Z({ inputValue: h });
      if (T === null)
        return null;
      H = C.createElement(g, m, T);
    }
    var E = { minMenuHeight: x, maxMenuHeight: I, menuPlacement: w, menuPosition: k, menuShouldScrollIntoView: j }, z = C.createElement(gd, F({}, m, E), function(P) {
      var le = P.ref, ae = P.placerProps, $ = ae.placement, te = ae.maxHeight;
      return C.createElement(c, F({}, m, E, { innerRef: le, innerProps: { onMouseDown: o.onMenuMouseDown, onMouseMove: o.onMenuMouseMove }, isLoading: f, placement: $ }), C.createElement(Hd, { captureEnabled: b, onTopArrive: Y, onBottomArrive: R, lockEnabled: V }, function(be) {
        return C.createElement(s, F({}, m, { innerRef: function(U) {
          o.getMenuListRef(U), be(U);
        }, innerProps: { role: "listbox", "aria-multiselectable": m.isMulti, id: o.getElementId("listbox") }, isLoading: f, maxHeight: te, focusedOption: d }), H);
      }));
    });
    return D || k === "fixed" ? C.createElement(l, F({}, m, { appendTo: D, controlElement: this.controlRef, menuPlacement: w, menuPosition: k }), z) : z;
  } }, { key: "renderFormField", value: function() {
    var o = this, r = this.props, i = r.delimiter, a = r.isDisabled, c = r.isMulti, s = r.name, l = r.required, u = this.state.selectValue;
    if (l && !this.hasValue() && !a)
      return C.createElement(Fd, { name: s, onFocus: this.onValueInputFocus });
    if (s && !a) {
      if (c) {
        if (i) {
          var g = u.map(function(d) {
            return o.getOptionValue(d);
          }).join(i);
          return C.createElement("input", { name: s, type: "hidden", value: g });
        }
        var p = u.length > 0 ? u.map(function(d, y) {
          return C.createElement("input", { key: "i-".concat(y), name: s, type: "hidden", value: o.getOptionValue(d) });
        }) : C.createElement("input", { name: s, type: "hidden", value: "" });
        return C.createElement("div", null, p);
      }
      var m = u[0] ? this.getOptionValue(u[0]) : "";
      return C.createElement("input", { name: s, type: "hidden", value: m });
    }
  } }, { key: "renderLiveRegion", value: function() {
    var o = this.commonProps, r = this.state, i = r.ariaSelection, a = r.focusedOption, c = r.focusedValue, s = r.isFocused, l = r.selectValue, u = this.getFocusableOptions();
    return C.createElement(Ld, F({}, o, { id: this.getElementId("live-region"), ariaSelection: i, focusedOption: a, focusedValue: c, isFocused: s, selectValue: l, focusableOptions: u, isAppleDevice: this.isAppleDevice }));
  } }, { key: "render", value: function() {
    var o = this.getComponents(), r = o.Control, i = o.IndicatorsContainer, a = o.SelectContainer, c = o.ValueContainer, s = this.props, l = s.className, u = s.id, g = s.isDisabled, p = s.menuIsOpen, m = this.state.isFocused, d = this.commonProps = this.getCommonProps();
    return C.createElement(a, F({}, d, { className: l, innerProps: { id: u, onKeyDown: this.onKeyDown }, isDisabled: g, isFocused: m }), this.renderLiveRegion(), C.createElement(r, F({}, d, { innerRef: this.getControlRef, innerProps: { onMouseDown: this.onControlMouseDown, onTouchEnd: this.onControlTouchEnd }, isDisabled: g, isFocused: m, menuIsOpen: p }), C.createElement(c, F({}, d, { isDisabled: g }), this.renderPlaceholderOrValue(), this.renderInput()), C.createElement(i, F({}, d, { isDisabled: g }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  } }], [{ key: "getDerivedStateFromProps", value: function(o, r) {
    var i = r.prevProps, a = r.clearFocusValueOnUpdate, c = r.inputIsHiddenAfterUpdate, s = r.ariaSelection, l = r.isFocused, u = r.prevWasFocused, g = r.instancePrefix, p = o.options, m = o.value, d = o.menuIsOpen, y = o.inputValue, b = o.isMulti, h = Na(m), f = {};
    if (i && (m !== i.value || p !== i.options || d !== i.menuIsOpen || y !== i.inputValue)) {
      var v = d ? function(V, j) {
        return _a(Bn(V, j));
      }(o, h) : [], x = d ? Da(Bn(o, h), "".concat(g, "-option")) : [], I = a ? function(V, j) {
        var Z = V.focusedValue, Y = V.selectValue.indexOf(Z);
        if (Y > -1) {
          if (j.indexOf(Z) > -1)
            return Z;
          if (Y < j.length)
            return j[Y];
        }
        return null;
      }(r, h) : null, A = function(V, j) {
        var Z = V.focusedOption;
        return Z && j.indexOf(Z) > -1 ? Z : j[0];
      }(r, v);
      f = { selectValue: h, focusedOption: A, focusedOptionId: _o(x, A), focusableOptionsWithIds: x, focusedValue: I, clearFocusValueOnUpdate: !1 };
    }
    var w = c != null && o !== i ? { inputIsHidden: c, inputIsHiddenAfterUpdate: void 0 } : {}, k = s, D = l && u;
    return l && !D && (k = { value: Tn(b, h, h[0] || null), options: h, action: "initial-input-focus" }, D = !u), (s == null ? void 0 : s.action) === "initial-input-focus" && (k = null), L(L(L({}, f), w), {}, { prevProps: o, ariaSelection: k, prevWasFocused: D });
  } }]), n;
}();
Sc.defaultProps = Xd;
var zd = hs(function(e, t) {
  var n = function(o) {
    var r = o.defaultInputValue, i = r === void 0 ? "" : r, a = o.defaultMenuIsOpen, c = a !== void 0 && a, s = o.defaultValue, l = s === void 0 ? null : s, u = o.inputValue, g = o.menuIsOpen, p = o.onChange, m = o.onInputChange, d = o.onMenuClose, y = o.onMenuOpen, b = o.value, h = st(o, Iu), f = pe(Se(u !== void 0 ? u : i), 2), v = f[0], x = f[1], I = pe(Se(g !== void 0 ? g : c), 2), A = I[0], w = I[1], k = pe(Se(b !== void 0 ? b : l), 2), D = k[0], V = k[1], j = Ve(function(T, E) {
      typeof p == "function" && p(T, E), V(T);
    }, [p]), Z = Ve(function(T, E) {
      var z;
      typeof m == "function" && (z = m(T, E)), x(z !== void 0 ? z : T);
    }, [m]), Y = Ve(function() {
      typeof y == "function" && y(), w(!0);
    }, [y]), R = Ve(function() {
      typeof d == "function" && d(), w(!1);
    }, [d]), H = u !== void 0 ? u : v, J = g !== void 0 ? g : A, N = b !== void 0 ? b : D;
    return L(L({}, h), {}, { inputValue: H, menuIsOpen: J, onChange: j, onInputChange: Z, onMenuClose: R, onMenuOpen: Y, value: N });
  }(e);
  return C.createElement(Sc, F({ ref: t }, n));
}), jd = zd;
const _d = (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "RecordVoiceOverIcon", ...e }, C.createElement("circle", { cx: 9, cy: 9, r: 4 }), C.createElement("path", { d: "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" })), Mn = { accSelectVoicesContainer: "_accSelectVoicesContainer_1d5zn_1" }, Ya = "Sorry, your browser does not support text-to-speech!", Dd = ({ accState: e, onChangeAccState: t }) => {
  const { activateTextToSpeech: n } = e, [o, r] = Se(!1), [i, a] = Se(!0), [c, s] = Se(null), l = fe([]);
  return Ze(() => {
    if (!n)
      return;
    if (!window.speechSynthesis)
      return void alert(Ya);
    const u = () => {
      const g = window.speechSynthesis.getVoices();
      if (!g.length)
        return;
      const p = g.reduce((d, y) => (d[y.lang + y.name] = y, d), {});
      l.current = Object.values(p);
      const m = l.current.find((d) => d.lang === "id-ID") || l.current.find((d) => d.lang.startsWith("id")) || l.current.find((d) => !d.lang.startsWith("en")) || l.current[0];
      s(m), r(!0), a(!1);
    };
    return u(), window.speechSynthesis.onvoiceschanged = u, () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [n]), Ze(() => {
    if (!n || !o || i)
      return;
    const u = () => {
      var p;
      const g = (p = window.getSelection()) == null ? void 0 : p.toString().trim();
      g && ((m) => {
        const d = new SpeechSynthesisUtterance(m);
        c && (d.voice = c), d.lang = "id-ID", d.rate = 1, d.pitch = 1, d.volume = 1, window.speechSynthesis.cancel(), window.speechSynthesis.speak(d);
      })(g);
    };
    return document.addEventListener("mouseup", u), () => document.removeEventListener("mouseup", u);
  }, [n, o, i, c]), S.jsx(de, { Icon: _d, isToggled: n, onToggle: () => {
    t((u) => {
      u.activateTextToSpeech = !u.activateTextToSpeech;
    });
  }, titleTranslationKey: "tools.textToSpeach", title: "Text To Speech", tooltipTranslationKey: "tools.textToSpeachTooltip", children: n ? i ? S.jsx("p", { className: Mn.loading, children: "Loading voices…" }) : o && l.current.length ? S.jsx("div", { onClick: (u) => u.stopPropagation(), className: Mn.accSelectWrapper, children: S.jsx(jd, { className: Mn.accSelectVoicesContainer, classNamePrefix: "accSelectVoices", options: l.current, value: c, onChange: (u) => {
    u && s(u);
  }, isClearable: !1, getOptionLabel: (u) => `${u.lang} — ${u.name}`, getOptionValue: (u) => `${u.lang}-${u.name}`, menuPlacement: "auto" }) }) : S.jsx("p", { className: Mn.error, children: Ya }) : null });
}, Jd = ({ accState: e, onChangeAccState: t }) => S.jsxs(S.Fragment, { children: [S.jsx(bu, { accState: e, onChangeAccState: t }), S.jsx(yu, { accState: e, onChangeAccState: t }), S.jsx(Dd, { accState: e, onChangeAccState: t })] }), Yd = ({ accState: e, onChangeAccState: t, onCollapse: n, collapsedState: o }) => {
  const r = Object.values(o).some(({ isExpanded: i }) => i);
  return S.jsxs("div", { className: lt("_accMenuContent_1sqvk_2", r && "_singleColumn_1sqvk_10"), children: [S.jsx(Eo, { isAccMenuContentActive: r, onCollapse: n, isExpanded: o.content.isExpanded, name: o.content.name, Icon: o.content.icon, tKey: "content.title", children: S.jsx(Nl, { accState: e, onChangeAccState: t }) }), S.jsx(Eo, { isAccMenuContentActive: r, onCollapse: n, isExpanded: o.colors.isExpanded, name: o.colors.name, Icon: o.colors.icon, tKey: "colors.title", children: S.jsx(ou, { accState: e, onChangeAccState: t }) }), S.jsx(Eo, { isAccMenuContentActive: r, onCollapse: n, isExpanded: o.tools.isExpanded, name: o.tools.name, Icon: o.tools.icon, tKey: "tools.title", children: S.jsx(Jd, { accState: e, onChangeAccState: t }) })] });
};
[{ label: "English", value: "en-US" }, { label: "עברית", value: "he-IL" }, { label: "Русский", value: "ru" }, { label: "普通话", value: "zhzn" }, { label: "Español", value: "es" }, { label: "العربية", value: "ar" }, { label: "বাংলা", value: "bn" }, { label: "हिन्दी", value: "hi" }, { label: "Português", value: "ptpt" }, { label: "日本語", value: "ja" }, { label: "Deutsch", value: "de" }, { label: "简体中文", value: "wuu" }, { label: "한국어", value: "ko" }, { label: "Français", value: "fr" }, { label: "Türkçe", value: "tr" }, { label: "Tiếng Việt", value: "vi" }, { label: "తెలుగు", value: "te" }, { label: "मराठी", value: "mr" }, { label: "தமிழ்", value: "ta" }, { label: "Italiano", value: "it" }, { label: "اردو", value: "ur" }, { label: "ગુજરાતી", value: "gu" }, { label: "Polski", value: "pl" }, { label: "Українська", value: "uk" }, { label: "فارسی", value: "fa" }, { label: "മലയാളം", value: "ml" }, { label: "ಕನ್ನಡ", value: "kn" }, { label: "ଓଡ଼ିଆ", value: "or" }, { label: "Română", value: "ro" }, { label: "Azərbaycan", value: "az" }, { label: "هَوْسَ", value: "ha" }, { label: "ဗမာစာ", value: "my" }, { label: "српскохрватски", value: "sh" }, { label: "ไทย", value: "th" }, { label: "Nederlands", value: "nl" }, { label: "Yorùbá", value: "yo" }, { label: "سنڌي", value: "sd" }, { label: "Latviešu", value: "lv" }].reduce((e, t) => (e[t.value] = t, e), {});
const Ua = { content: { name: "content", isExpanded: !1, icon: (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "ContentCopyIcon", ...e }, C.createElement("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" })) }, colors: { name: "colors", isExpanded: !1, icon: Fs }, tools: { name: "tools", isExpanded: !1, icon: (e) => C.createElement("svg", { className: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root", focusable: "false", "aria-hidden": "true", viewBox: "0 0 24 24", "data-testid": "HandymanIcon", ...e }, C.createElement("path", { d: "m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z" }), C.createElement("path", { d: "m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z" })) } }, Ud = ({ accState: e, display: t, onInit: n, onChangeAccState: o, onShow: r, showAcc: i }) => {
  const [a, c] = Se(Ua), s = fe(null);
  return Ze(() => {
    s.current && s.current.focus();
  }, []), S.jsxs("div", { id: "acc-accessibility-menu", className: No.accAccessibilityMenu, children: [S.jsxs("div", { style: { display: t }, className: No.accMenu, children: [S.jsx(el, { onShow: r, onInit: n }), S.jsx(Yd, { onCollapse: (l) => {
    c((u) => fr(Ua, (g) => {
      const p = u[l].isExpanded;
      g[l].isExpanded = !p;
    }));
  }, accState: e, onChangeAccState: o, collapsedState: a }), S.jsx(tl, {})] }), i && S.jsx("div", { className: No.accAccessibilityMenu__overlay })] });
};
var Ac = [], $d = Ac.forEach, Qd = Ac.slice, $a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Kd = { name: "cookie", lookup: function(e) {
  var t;
  if (e.lookupCookie && typeof document < "u") {
    var n = function(o) {
      for (var r = "".concat(o, "="), i = document.cookie.split(";"), a = 0; a < i.length; a++) {
        for (var c = i[a]; c.charAt(0) === " "; )
          c = c.substring(1, c.length);
        if (c.indexOf(r) === 0)
          return c.substring(r.length, c.length);
      }
      return null;
    }(e.lookupCookie);
    n && (t = n);
  }
  return t;
}, cacheUserLanguage: function(e, t) {
  t.lookupCookie && typeof document < "u" && function(n, o, r, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { path: "/", sameSite: "strict" };
    r && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + 60 * r * 1e3)), i && (a.domain = i), document.cookie = function(c, s, l) {
      var u = l || {};
      u.path = u.path || "/";
      var g = encodeURIComponent(s), p = "".concat(c, "=").concat(g);
      if (u.maxAge > 0) {
        var m = u.maxAge - 0;
        if (Number.isNaN(m))
          throw new Error("maxAge should be a Number");
        p += "; Max-Age=".concat(Math.floor(m));
      }
      if (u.domain) {
        if (!$a.test(u.domain))
          throw new TypeError("option domain is invalid");
        p += "; Domain=".concat(u.domain);
      }
      if (u.path) {
        if (!$a.test(u.path))
          throw new TypeError("option path is invalid");
        p += "; Path=".concat(u.path);
      }
      if (u.expires) {
        if (typeof u.expires.toUTCString != "function")
          throw new TypeError("option expires is invalid");
        p += "; Expires=".concat(u.expires.toUTCString());
      }
      if (u.httpOnly && (p += "; HttpOnly"), u.secure && (p += "; Secure"), u.sameSite)
        switch (typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite) {
          case !0:
            p += "; SameSite=Strict";
            break;
          case "lax":
            p += "; SameSite=Lax";
            break;
          case "strict":
            p += "; SameSite=Strict";
            break;
          case "none":
            p += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      return p;
    }(n, encodeURIComponent(o), a);
  }(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
} }, qd = { name: "querystring", lookup: function(e) {
  var t;
  if (typeof window < "u") {
    var n = window.location.search;
    !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
    for (var o = n.substring(1).split("&"), r = 0; r < o.length; r++) {
      var i = o[r].indexOf("=");
      i > 0 && o[r].substring(0, i) === e.lookupQuerystring && (t = o[r].substring(i + 1));
    }
  }
  return t;
} }, nn = null, Qa = function() {
  if (nn !== null)
    return nn;
  try {
    nn = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    nn = !1;
  }
  return nn;
}, eg = { name: "localStorage", lookup: function(e) {
  var t;
  if (e.lookupLocalStorage && Qa()) {
    var n = window.localStorage.getItem(e.lookupLocalStorage);
    n && (t = n);
  }
  return t;
}, cacheUserLanguage: function(e, t) {
  t.lookupLocalStorage && Qa() && window.localStorage.setItem(t.lookupLocalStorage, e);
} }, on = null, Ka = function() {
  if (on !== null)
    return on;
  try {
    on = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    on = !1;
  }
  return on;
}, tg = { name: "sessionStorage", lookup: function(e) {
  var t;
  if (e.lookupSessionStorage && Ka()) {
    var n = window.sessionStorage.getItem(e.lookupSessionStorage);
    n && (t = n);
  }
  return t;
}, cacheUserLanguage: function(e, t) {
  t.lookupSessionStorage && Ka() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
} }, ng = { name: "navigator", lookup: function(e) {
  var t = [];
  if (typeof navigator < "u") {
    if (navigator.languages)
      for (var n = 0; n < navigator.languages.length; n++)
        t.push(navigator.languages[n]);
    navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
  }
  return t.length > 0 ? t : void 0;
} }, og = { name: "htmlTag", lookup: function(e) {
  var t, n = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
  return n && typeof n.getAttribute == "function" && (t = n.getAttribute("lang")), t;
} }, rg = { name: "path", lookup: function(e) {
  var t;
  if (typeof window < "u") {
    var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    if (n instanceof Array)
      if (typeof e.lookupFromPathIndex == "number") {
        if (typeof n[e.lookupFromPathIndex] != "string")
          return;
        t = n[e.lookupFromPathIndex].replace("/", "");
      } else
        t = n[0].replace("/", "");
  }
  return t;
} }, ig = { name: "subdomain", lookup: function(e) {
  var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, n = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
  if (n)
    return n[t];
} }, wc = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    js(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  return _s(e, [{ key: "init", value: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || { languageUtils: {} }, this.options = function(r) {
      return $d.call(Qd.call(arguments, 1), function(i) {
        if (i)
          for (var a in i)
            r[a] === void 0 && (r[a] = i[a]);
      }), r;
    }(n, this.options || {}, { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"], convertDetectedLanguage: function(r) {
      return r;
    } }), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(r) {
      return r.replace("-", "_");
    }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(Kd), this.addDetector(qd), this.addDetector(eg), this.addDetector(tg), this.addDetector(ng), this.addDetector(og), this.addDetector(rg), this.addDetector(ig);
  } }, { key: "addDetector", value: function(t) {
    this.detectors[t.name] = t;
  } }, { key: "detect", value: function(t) {
    var n = this;
    t || (t = this.options.order);
    var o = [];
    return t.forEach(function(r) {
      if (n.detectors[r]) {
        var i = n.detectors[r].lookup(n.options);
        i && typeof i == "string" && (i = [i]), i && (o = o.concat(i));
      }
    }), o = o.map(function(r) {
      return n.options.convertDetectedLanguage(r);
    }), this.services.languageUtils.getBestMatchFromCodes ? o : o.length > 0 ? o[0] : null;
  } }, { key: "cacheUserLanguage", value: function(t, n) {
    var o = this;
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach(function(r) {
      o.detectors[r] && o.detectors[r].cacheUserLanguage(t, o.options);
    }));
  } }]), e;
}();
wc.type = "languageDetector";
const qa = "portal", es = ({ children: e, wrapperElementId: t }) => {
  const [n, o] = Se(null);
  return oe(() => {
    let r = document.getElementById(t ?? qa), i = !1;
    return r || (i = !0, r = function(a) {
      const c = document.createElement("div");
      return c.setAttribute("id", a), document.body.appendChild(c), c;
    }(t ?? qa)), o(r), () => {
      i && r && r.parentNode && r.parentNode.removeChild(r);
    };
  }, [t]), n === null ? null : fs(e, n);
}, ts = [{ lang: "he", name: "hebrew" }, { lang: "en", name: "english" }, { lang: "ru", name: "russian" }, { lang: "zhcn", name: "chineseMandarin" }, { lang: "es", name: "spanish" }, { lang: "ar", name: "arabic" }, { lang: "bn", name: "bengali" }, { lang: "hi", name: "hindi" }, { lang: "ptpt", name: "portuguese" }, { lang: "ja", name: "japanese" }, { lang: "de", name: "german" }, { lang: "wuu", name: "chinese" }, { lang: "ko", name: "korean" }, { lang: "fr", name: "french" }, { lang: "tr", name: "turkish" }, { lang: "vi", name: "vietnamese" }, { lang: "te", name: "telugu" }, { lang: "mr", name: "marathi" }, { lang: "ta", name: "tamil" }, { lang: "it", name: "italian" }, { lang: "ur", name: "urdu" }, { lang: "gu", name: "gujarati" }, { lang: "pl", name: "polish" }, { lang: "uk", name: "ukrainian" }, { lang: "fa", name: "persian" }, { lang: "ml", name: "malayalam" }, { lang: "kn", name: "kannada" }, { lang: "or", name: "oriya" }, { lang: "ro", name: "romanian" }, { lang: "az", name: "azerbaijani" }, { lang: "ha", name: "hausa" }, { lang: "my", name: "burmese" }, { lang: "sh", name: "serboCroatian" }, { lang: "th", name: "thai" }, { lang: "nl", name: "dutch" }, { lang: "yo", name: "yoruba" }, { lang: "sd", name: "sindhi" }, { lang: "lv", name: "latviski" }], ag = ["en-US", "he-IL", "ru", "zhcn", "es", "ar", "bn", "hi", "ptpt", "ja", "de", "wuu", "ko", "fr", "tr", "vi", "te", "yue", "mr", "ta", "it", "ur", "gu", "pl", "uk", "fa", "ml", "kn", "or", "ro", "az", "ha", "my", "sh", "th", "nl", "yo", "sd", "lv"], sg = ["ar", "fa", "he", "he-IL", "ur"], cg = { "accessibility-menu": "Accessibility menu", content: { title: "Content adjustment", adjustFontSize: "Adjust Font Size", dyslexiaFont: "Dyslexia Font", fontWeight: "Font Weight", textAlignLeft: "Text Align Left", textAlignCenter: "Text Align Center", textAlignRight: "Text Align Right", highlightLinks: "Highlight Links", highlightTitles: "Highlight Titles", letterSpacing: "Letter Spacing", wordsSpacing: "Words Spacing", lineHeight: "Line Height", zoom: "Zoom" }, colors: { title: "Color adjustment", blueLightFilter: "Blue Light Filter", brightnessControl: "Brightness Control", darkContrast: "Dark Contrast", highContrast: "High Contrast", highSaturation: "High Saturation", lightContrast: "Light Contrast", lowSaturation: "Low Saturation", monochrom: "Monochrom", textColorPicker: "Text Color Picker", visualImpairment: "Visual Impairment" }, tools: { title: "Tools", bigCursor: "Big Cursor", readingGuide: "Reading Guide", textToSpeach: "Text To Speach", textToSpeachTooltip: "In order to activate 'Text To Speech', please click this button, after which you will have to select your preferred language, and then highlight the text in that language." } }, ns = "acc-font-weight-style", Do = "acc-font-weight", os = (e, t) => {
  document.querySelectorAll(`[${e}]`).forEach((n) => {
    if (n && n instanceof HTMLElement && n.dataset.accOrgfontsize) {
      const o = +n.dataset.accOrgfontsize * t / 100;
      n.style.fontSize = `${o}px`;
    }
  });
}, rn = "acc-align-text", Jo = "acc-highlight-links-style", Yo = "acc-highlight-links", Uo = "acc-highlight-titles-style", $o = "acc-highlight-titles", Qo = "acc-letter-spacing-style", On = "acc-letter-spacing", Ko = "acc-line-height-style", Vn = "acc-line-height", qo = "acc-word-spacing-style", Rn = "acc-word-spacing", er = "acc-zoom-style", Hn = "acc-zoom", rs = "acc-blueLight-filter-style", tr = "acc-blue-light-filter", is = "acc-dark-contrast-style", nr = "acc-dark-contrast", as = "acc-light-contrast-style", or = "acc-light-contrast", ss = "acc-visual-impairment-style", rr = "acc-visual-impairment", cs = "acc-monochrome-style", ir = "acc-monochrome", ls = "acc-high-contrast-style", Wn = "acc-high-contrast", us = "acc-brightness-control-style", Fn = "acc-brightness-control", ds = "acc-high-saturation-style", Pn = "acc-high-saturation", gs = "acc-low-saturation-style", Xn = "acc-low-saturation", ps = "acc-text-color-picker-style", ar = "acc-text-color-picker";
he.use(wc).use(Qc);
const gg = () => {
  const [e, t] = Se(!0), [n, o] = Se(!1), r = (() => {
    const [m, d] = Se(!0);
    return oe(() => {
      document.querySelectorAll("*").forEach((y) => {
        const b = y;
        if (b.style.fontSize && Pt(b), Array.from(document.styleSheets).forEach((h) => {
          try {
            Array.from(h.cssRules || []).forEach((f) => {
              const v = f;
              v.style.fontSize && oa(b, v) && Pt(b);
            });
          } catch {
          }
        }), b) {
          const h = b.tagName.toLowerCase();
          It.includes(h) && Pt(b);
        }
      }), d(!1);
    }, []), m;
  })(), i = (() => {
    const [m, d] = Se(0);
    return oe(() => {
      const y = new MutationObserver((b) => {
        b.forEach((h) => {
          h.type === "childList" && h.addedNodes.length > 0 && h.addedNodes.forEach((f) => {
            if (f instanceof HTMLElement) {
              if (f.id === Ce || f.id === sn)
                return;
              if (f.style.fontSize && (Pt(f), f.dataset.accMutation = "true", d((v) => ++v)), Array.from(document.styleSheets).forEach((v) => {
                try {
                  Array.from(v.cssRules || []).forEach((x) => {
                    const I = x;
                    I.style.fontSize && oa(f, I) && (Pt(f), f.dataset.accMutation = "true", d((A) => ++A));
                  });
                } catch {
                }
              }), f) {
                const v = f.tagName.toLowerCase();
                It.includes(v) && (Pt(f), f.dataset.accMutation = "true", d((x) => ++x));
              }
            }
          });
        });
      });
      return y.observe(document.body, { childList: !0, subtree: !0 }), () => {
        d(0), y.disconnect();
      };
    }, [m]), m;
  })(), [a, c] = function(m, d) {
    const y = C.useSyncExternalStore(Wc, () => Si(m), Fc), b = C.useCallback((h) => {
      try {
        const f = typeof h == "function" ? h(JSON.parse(y)) : h;
        f == null ? ((v) => {
          window.sessionStorage.removeItem(v), bs(v, null);
        })(m) : xi(m, f);
      } catch {
      }
    }, [m, y]);
    return C.useEffect(() => {
      Si(m) === null && d !== void 0 && xi(m, d);
    }, [m, d]), [y ? JSON.parse(y) : d, b];
  }("coofis_accessibility", ra()), [s, l] = Se(!1), u = r || e;
  (({ accState: m, isGettingReady: d, nodeListUpdated: y }) => {
    ((b, h) => {
      oe(() => {
        if (!h) {
          const f = document.getElementById(ns);
          if (b && !f) {
            document.documentElement.classList.add(Do);
            const v = document.createElement("style");
            v.id = ns, v.innerHTML = `
                    html.${Do} *, *  {
                    font-weight:700 !important;
                  }
              `, document.head.appendChild(v);
          } else
            !b && f && (document.documentElement.classList.remove(Do), f == null || f.remove());
        }
      }, [b, h]);
    })(m.isFontWeightBold, d), ((b, h, f) => {
      oe(() => {
        f || h > 0 && os("data-acc-mutation", b);
      }, [b, h, f]), oe(() => {
        f || os("data-acc-orgfontsize", b);
      }, [b, f]);
    })(m.adjustFontSizePercentage, y, d), ((b, h) => {
      const f = Object.values(b).find((v) => v);
      oe(() => {
        if (!h && f && !document.getElementById(`acc-align-text-style-${f}`)) {
          document.documentElement.classList.add(rn);
          const v = document.createElement("style");
          v.id = `acc-align-text-style-${f}`, v.innerHTML = `
                html.${rn} *:not(#${Ce} *), *:not(#${Ce} *)  {
                text-align:${f} !important
            }
            `, document.head.appendChild(v);
        }
      }, [f, h, b]), oe(() => {
        if (!h) {
          if (!b.left) {
            const v = document.getElementById("acc-align-text-style-left");
            v && (v.remove(), document.documentElement.classList.remove(rn));
          }
          if (!b.right) {
            const v = document.getElementById("acc-align-text-style-right");
            v && (v.remove(), document.documentElement.classList.remove(rn));
          }
          if (!b.center) {
            const v = document.getElementById("acc-align-text-style-center");
            v && (v.remove(), document.documentElement.classList.remove(rn));
          }
        }
      }, [b]);
    })(m.textAlign, d), Ns(m.isDyslexiaFont, d), ((b, h) => {
      oe(() => {
        if (h)
          return;
        const f = document.getElementById(Jo);
        if (b && !f) {
          document.documentElement.classList.add(Yo);
          const v = document.createElement("style");
          v.id = Jo, v.innerHTML = `
            html.${Yo} a[href],a[href] {
            outline: 2px solid var(--highlight-color) !important;
            outline-offset: 2px !important;
        }
    `, document.head.appendChild(v);
        } else if (!b && f) {
          const v = document.getElementById(Jo);
          document.documentElement.classList.remove(Yo), v == null || v.remove();
        }
      }, [b, h]);
    })(m.highlightLinks, d), ((b, h) => {
      oe(() => {
        if (h)
          return;
        const f = document.getElementById(Uo);
        if (b && !f) {
          document.documentElement.classList.add($o);
          const v = document.createElement("style");
          v.id = Uo, v.innerHTML = `
          html.${$o} h1,h2,h3,h4,h5,h6,h1,h2,h3,h4,h5,h6  {
          outline: 2px solid var(--highlight-color) !important;
          outline-offset: 2px !important;
      }
  `, document.head.appendChild(v);
        } else if (!b && f) {
          const v = document.getElementById(Uo);
          document.documentElement.classList.remove($o), v == null || v.remove();
        }
      }, [b, h]);
    })(m.highlightTitles, d), ((b, h) => {
      const f = !!b;
      oe(() => {
        if (h)
          return;
        const v = document.getElementById(Qo);
        if (f && !v) {
          document.documentElement.classList.add(On);
          const x = document.createElement("style");
          x.id = Qo, x.innerHTML = `
            html.${On} *:not(#${Ce} *), *:not(#${Ce} *)  {
            letter-spacing:${b}px !important;
          }
      `, document.head.appendChild(x);
        } else if (f && v)
          v.innerHTML = `
        html.${On} *:not(#${Ce} *), *:not(#${Ce} *)  {
        letter-spacing:${b}px !important;
      }
  `;
        else if (!f && v) {
          const x = document.getElementById(Qo);
          document.documentElement.classList.remove(On), x == null || x.remove();
        }
      }, [b, f, h]);
    })(m.letterSpacing, d), ((b, h) => {
      const { lineHeight: f, isLineHeight: v } = b;
      oe(() => {
        if (h)
          return;
        const x = document.getElementById(Ko);
        if (v && !x) {
          document.documentElement.classList.add(Vn);
          const I = document.createElement("style");
          I.id = Ko, I.innerHTML = `
                  html.${Vn} *:not(#${Ce} *), *:not(#${Ce} *)  {
                  line-height:${f.toFixed(1)} !important
                }
            `, document.head.appendChild(I);
        } else if (v && x)
          x.innerHTML = `
                  html.${Vn} *:not(#${Ce} *), *:not(#${Ce} *)  {
                  line-height:${f.toFixed(1)} !important
                }
            `;
        else if (!v && x) {
          const I = document.getElementById(Ko);
          document.documentElement.classList.remove(Vn), I == null || I.remove();
        }
      }, [f, v, h]);
    })(m.lineHeight, d), ((b, h) => {
      const f = !!b;
      oe(() => {
        if (h)
          return;
        const v = document.getElementById(qo);
        if (f && !v) {
          document.documentElement.classList.add(Rn);
          const x = document.createElement("style");
          x.id = qo, x.innerHTML = `
                 html.${Rn} *:not(#${Ce} *), *:not(#${sn} *)  {
                  word-spacing:${b}px !important;
                }
            `, document.head.appendChild(x);
        } else if (f && v)
          v.innerHTML = `
                 html.${Rn} *:not(#${Ce} *), *:not(#${sn} *)  {
                  word-spacing:${b}px !important;
                }
            `;
        else if (!f && v) {
          const x = document.getElementById(qo);
          document.documentElement.classList.remove(Rn), x == null || x.remove();
        }
      }, [b, f, h]);
    })(m.wordSpacing, d), ((b, h) => {
      const { zoom: f, isZoom: v } = b;
      oe(() => {
        if (h)
          return;
        const x = document.getElementById(er);
        if (v && !x) {
          document.documentElement.classList.add(Hn);
          const I = document.createElement("style");
          I.id = er, I.innerHTML = `
                html.${Hn} body *:not(#${Ce}, #${Ce} *) {
                zoom: ${f.toFixed(1)} !important;
               }
                }
            `, document.head.appendChild(I);
        } else if (v && x)
          x.innerHTML = `
                html.${Hn} body *:not(#${Ce}, #${Ce} *) {
                zoom: ${f.toFixed(1)} !important;
               }
                }
            `;
        else if (!v && x) {
          const I = document.getElementById(er);
          document.documentElement.classList.remove(Hn), I == null || I.remove();
        }
      }, [f, v, h]);
    })(m.zoom, d), Zs(m.isBigCursor, d), zs(m.showReadingGuide, 100, d), ((b, h) => {
      oe(() => {
        if (!h) {
          const f = document.getElementById(rs);
          if (b && !f) {
            document.documentElement.classList.add(tr);
            const v = document.createElement("style");
            v.id = rs, v.innerHTML = `
          html.${tr} {
            -o-filter: sepia(80%) !important;
            -ms-filter: sepia(80%) !important;
            -moz-filter: sepia(80%) !important;
            -webkit-filter: sepia(80%) !important;
            filter: sepia(80%) !important;
          }
        `, document.head.appendChild(v);
          } else
            !b && f && (document.documentElement.classList.remove(tr), f == null || f.remove());
        }
      }, [b, h]);
    })(m.isBlueLightFilter, d), ((b, h) => {
      oe(() => {
        if (!h) {
          if (b) {
            document.documentElement.classList.add(nr);
            const f = document.createElement("style");
            f.id = is;
            const v = It.map((x) => `html.${nr} ${x}`).join(",");
            f.innerHTML = `
        ${v},${It.join(",")} {
          color:#FFF !important;
          fill: #FFF !important;
          background-color: #000 !important;
        }
      `, document.head.appendChild(f);
          }
          return () => {
            const f = document.getElementById(is);
            document.documentElement.classList.remove(nr), f == null || f.remove();
          };
        }
      }, [b, h]);
    })(m.isDarkContrast, d), ((b, h) => {
      oe(() => {
        if (!h) {
          if (b) {
            document.documentElement.classList.add(or);
            const f = document.createElement("style");
            f.id = as;
            const v = It.map((x) => `html.${or} ${x}`).join(",");
            f.innerHTML = `
        ${v},${It.join(",")} {
          color:#000 !important;
          fill: #000 !important;
          background-color: #FFF !important;
        }
      `, document.head.appendChild(f);
          }
          return () => {
            const f = document.getElementById(as);
            document.documentElement.classList.remove(or), f == null || f.remove();
          };
        }
      }, [b, h]);
    })(m.isLightContrast, d), ((b, h) => {
      oe(() => {
        if (!h) {
          if (b) {
            document.documentElement.classList.add(rr);
            const f = document.createElement("style");
            f.id = ss, f.innerHTML = `
        html.${rr} {
          -o-filter: invert(100%) !important;
          -ms-filter: invert(100%) !important;
          -moz-filter: invert(100%) !important;
          -webkit-filter: invert(100%) !important;
          filter: invert(100%) !important;
        }
      `, document.head.appendChild(f);
          }
          return () => {
            const f = document.getElementById(ss);
            document.documentElement.classList.remove(rr), f == null || f.remove();
          };
        }
      }, [b, h]);
    })(m.isVisualImpairment, d), ((b, h) => {
      oe(() => {
        if (!h) {
          if (b) {
            document.documentElement.classList.add(ir);
            const f = document.createElement("style");
            f.id = cs, f.innerHTML = `
        html.${ir} {
          -o-filter: grayscale(100%) !important;
          -ms-filter: grayscale(100%) !important;
          -moz-filter: grayscale(100%) !important;
          -webkit-filter: grayscale(100%) !important;
          filter: grayscale(100%) !important;
        }
      `, document.head.appendChild(f);
          }
          return () => {
            const f = document.getElementById(cs);
            document.documentElement.classList.remove(ir), f == null || f.remove();
          };
        }
      }, [b, h]);
    })(m.isMonochrome, d), ((b, h, f) => {
      oe(() => {
        if (f)
          return;
        const v = document.getElementById(ls);
        if (b && !v) {
          document.documentElement.classList.add(Wn);
          const x = document.createElement("style");
          x.id = ls, x.innerHTML = `
        html.${Wn} {
          -o-filter: contrast(${h}%) !important;
          -ms-filter: contrast(${h}%) !important;
          -moz-filter: contrast(${h}%) !important;
          -webkit-filter: contrast(${h}%) !important;
          filter: contrast(${h}%) !important;
        }
      `, document.head.appendChild(x);
        } else
          b && v ? v.innerHTML = `
        html.${Wn} {
          -o-filter: contrast(${h}%) !important;
          -ms-filter: contrast(${h}%) !important;
          -moz-filter: contrast(${h}%) !important;
          -webkit-filter: contrast(${h}%) !important;
          filter: contrast(${h}%) !important;
        }
      ` : !b && v && (document.documentElement.classList.remove(Wn), v == null || v.remove());
      }, [b, h, f]);
    })(m.highContrast.isHighContrast, m.highContrast.contrast, d), ((b, h, f) => {
      oe(() => {
        if (f)
          return;
        const v = document.getElementById(us);
        if (b && !v) {
          document.documentElement.classList.add(Fn);
          const x = document.createElement("style");
          x.id = us, x.innerHTML = `
        html.${Fn} {
          -o-filter: brightness(${h}%) !important;
          -ms-filter: brightness(${h}%) !important;
          -moz-filter: brightness(${h}%) !important;
          -webkit-filter: brightness(${h}%) !important;
          filter: brightness(${h}%) !important;
        }
      `, document.head.appendChild(x);
        } else
          b && v ? v.innerHTML = `
        html.${Fn} {
          -o-filter: brightness(${h}%) !important;
          -ms-filter: brightness(${h}%) !important;
          -moz-filter: brightness(${h}%) !important;
          -webkit-filter: brightness(${h}%) !important;
          filter: brightness(${h}%) !important;
        }
      ` : !b && v && (document.documentElement.classList.remove(Fn), v == null || v.remove());
      }, [b, h, f]);
    })(m.brightness.isBrightness, m.brightness.brightness, d), ((b, h, f) => {
      oe(() => {
        if (f)
          return;
        const v = document.getElementById(ds);
        if (b && !v) {
          document.documentElement.classList.add(Pn);
          const x = document.createElement("style");
          x.id = ds, x.innerHTML = `
        html.${Pn} {
          -o-filter: saturate(${h}%) !important;
          -ms-filter: saturate(${h}%) !important;
          -moz-filter: saturate(${h}%) !important;
          -webkit-filter: saturate(${h}%) !important;
          filter: saturate(${h}%) !important;
        }
      `, document.head.appendChild(x);
        } else
          b && v ? v.innerHTML = `
        html.${Pn} {
          -o-filter: saturate(${h}%) !important;
          -ms-filter: saturate(${h}%) !important;
          -moz-filter: saturate(${h}%) !important;
          -webkit-filter: saturate(${h}%) !important;
          filter: saturate(${h}%) !important;
        }
      ` : !b && v && (document.documentElement.classList.remove(Pn), v == null || v.remove());
      }, [b, h, f]);
    })(m.highSaturation.isHighSaturation, m.highSaturation.saturation, d), ((b, h, f) => {
      oe(() => {
        if (f)
          return;
        const v = document.getElementById(gs);
        if (b && !v) {
          document.documentElement.classList.add(Xn);
          const x = document.createElement("style");
          x.id = gs, x.innerHTML = `
        html.${Xn} {
          -o-filter: saturate(${h}%) !important;
          -ms-filter: saturate(${h}%) !important;
          -moz-filter: saturate(${h}%) !important;
          -webkit-filter: saturate(${h}%) !important;
          filter: saturate(${h}%) !important;
        }
      `, document.head.appendChild(x);
        } else
          b && v ? v.innerHTML = `
        html.${Xn} {
          -o-filter: saturate(${h}%) !important;
          -ms-filter: saturate(${h}%) !important;
          -moz-filter: saturate(${h}%) !important;
          -webkit-filter: saturate(${h}%) !important;
          filter: saturate(${h}%) !important;
        }
      ` : !b && v && (document.documentElement.classList.remove(Xn), v == null || v.remove());
      }, [b, h, f]);
    })(m.lowSaturation.isLowSaturation, m.lowSaturation.saturation, d), ((b, h) => {
      const f = Ct(() => It.reduce((x, I, A) => {
        const w = It.length - 1;
        return x + `html.${ar} ${I}:not(#${Ce} *)${A === w ? "" : ","}`;
      }, ""), []), v = It.map((x) => `${x}:not(#${Ce} *)`).join(",");
      oe(() => {
        if (h)
          return;
        const x = document.getElementById(ps);
        if (b && !x) {
          document.documentElement.classList.add(ar);
          const I = document.createElement("style");
          I.id = ps, I.innerHTML = `
                  ${f},${v} {
                  color: ${b} !important;
                }
            `, document.head.appendChild(I);
        } else
          b && x ? x.innerHTML = `
                  ${f},${v} {
                  color: ${b} !important;
                }
            ` : !b && x && (document.documentElement.classList.remove(ar), x == null || x.remove());
      }, [b, v, f, h]);
    })(m.color, d);
  })({ accState: a, isGettingReady: u, nodeListUpdated: i });
  const g = sg.includes(a.language) ? "rtl" : "ltr", p = () => {
    l((m) => !m);
  };
  return Ze(() => {
    const m = ts.map((y) => (async (b) => (await fetch(b)).json())(`https://acc-landing.vercel.app/locale/${y.name}.json`)), d = {};
    Promise.all(m).then((y) => {
      ts.forEach((b, h) => {
        d[b.lang] = { translation: y[h] };
      }), he.init({ fallbackLng: "he-IL", resources: d }), he.languages = ag, o(!0);
    }).catch(() => {
      he.init({ fallbackLng: "en", resources: { en: { translation: cg } } });
    }).finally(() => {
      t(!1);
    });
  }, []), u ? S.jsx(Ti, { showSpinner: u }) : S.jsxs(S.Fragment, { children: [S.jsx(es, { wrapperElementId: "acc-portal-[readingGuide-container]", children: "." }), S.jsx(es, { wrapperElementId: Ce, children: S.jsxs("div", { id: sn, style: { direction: g, fontSize: 50 }, className: _c.Accessibilik, "data-acc-language": a.language, children: [S.jsx(Ti, { onShow: p }), S.jsx(Ud, { display: s ? "block" : "none", showAcc: s, accState: a, onLangChange: (m) => {
    he.changeLanguage(m, () => {
      c((d) => fr(d, (y) => {
        y.language = m;
      }));
    });
  }, onChangeAccState: (m) => {
    c((d) => fr(d, m));
  }, onInit: () => {
    c(ra());
  }, onShow: p, hasLanguages: n })] }) })] });
};
export {
  gg as default
};
