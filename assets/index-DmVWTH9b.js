const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-WFSxzp0l.js", "assets/App-BUDPvT2A.css"]))) => i.map(i => d[i]);
import {
    r as Nh,
    g as Hg,
    a as Cg
} from "./react-D-vXKkXw.js";
(function () {
    const b = document.createElement("link").relList;
    if (b && b.supports && b.supports("modulepreload")) return;
    for (const E of document.querySelectorAll('link[rel="modulepreload"]')) m(E);
    new MutationObserver(E => {
        for (const D of E)
            if (D.type === "childList")
                for (const X of D.addedNodes) X.tagName === "LINK" && X.rel === "modulepreload" && m(X)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function z(E) {
        const D = {};
        return E.integrity && (D.integrity = E.integrity), E.referrerPolicy && (D.referrerPolicy = E.referrerPolicy), E.crossOrigin === "use-credentials" ? D.credentials = "include" : E.crossOrigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D
    }

    function m(E) {
        if (E.ep) return;
        E.ep = !0;
        const D = z(E);
        fetch(E.href, D)
    }
})();
const Rg = "modulepreload",
    qg = function (s) {
        return "./" + s
    },
    sh = {},
    Bg = function (b, z, m) {
        let E = Promise.resolve();
        if (z && z.length > 0) {
            let $ = function (el) {
                return Promise.all(el.map(Gl => Promise.resolve(Gl).then(L => ({
                    status: "fulfilled",
                    value: L
                }), L => ({
                    status: "rejected",
                    reason: L
                }))))
            };
            document.getElementsByTagName("link");
            const X = document.querySelector("meta[property=csp-nonce]"),
                U = X?.nonce || X?.getAttribute("nonce");
            E = $(z.map(el => {
                if (el = qg(el), el in sh) return;
                sh[el] = !0;
                const Gl = el.endsWith(".css"),
                    L = Gl ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${el}"]${L}`)) return;
                const Z = document.createElement("link");
                if (Z.rel = Gl ? "stylesheet" : Rg, Gl || (Z.as = "script"), Z.crossOrigin = "", Z.href = el, U && Z.setAttribute("nonce", U), document.head.appendChild(Z), Gl) return new Promise((yt, wl) => {
                    Z.addEventListener("load", yt), Z.addEventListener("error", () => wl(new Error(`Unable to preload CSS for ${el}`)))
                })
            }))
        }

        function D(X) {
            const U = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (U.payload = X, window.dispatchEvent(U), !U.defaultPrevented) throw X
        }
        return E.then(X => {
            for (const U of X || []) U.status === "rejected" && D(U.reason);
            return b().catch(D)
        })
    };
var No = {
        exports: {}
    },
    $e = {};
var mh;

function Yg() {
    if (mh) return $e;
    mh = 1;
    var s = Symbol.for("react.transitional.element"),
        b = Symbol.for("react.fragment");

    function z(m, E, D) {
        var X = null;
        if (D !== void 0 && (X = "" + D), E.key !== void 0 && (X = "" + E.key), "key" in E) {
            D = {};
            for (var U in E) U !== "key" && (D[U] = E[U])
        } else D = E;
        return E = D.ref, {
            $$typeof: s,
            type: m,
            key: X,
            ref: E !== void 0 ? E : null,
            props: D
        }
    }
    return $e.Fragment = b, $e.jsx = z, $e.jsxs = z, $e
}
var dh;

function jg() {
    return dh || (dh = 1, No.exports = Yg()), No.exports
}
var hh = jg();
const _h = "https://aset.heytml.com/pixelquest/v1/",
    Gg = /^(optimized|birthday|reference|i18n)\/|^memory-\d+\.webp(\?|$)/,
    yh = /^(\.\/|\/)?assets\//;

function vh(s, b = _h, z = typeof document < "u" ? document.baseURI : "http://localhost/") {
    if (!b || !s || s.startsWith(b) || /^(data|blob):/i.test(s)) return s;
    let m = null;
    if (yh.test(s)) m = s.replace(yh, "");
    else if (/^https?:/i.test(s)) try {
        const E = new URL("./assets/", z).href;
        s.startsWith(E) && (m = s.slice(E.length))
    } catch {}
    return m !== null && Gg.test(m) ? b + m : s
}

function Ur(s) {
    if (!/^https?:/i.test(s) || typeof location > "u") return !1;
    try {
        return new URL(s).origin !== location.origin
    } catch {
        return !1
    }
}
let gh = !1;

function Qg() {
    if (gh || !_h || typeof globalThis.fetch != "function") return;
    gh = !0;
    const s = globalThis.fetch.bind(globalThis);
    globalThis.fetch = ((b, z) => {
        if (typeof b == "string" || b instanceof URL) {
            const m = String(b),
                E = vh(m);
            return s(E === m ? b : E, z)
        }
        if (typeof Request < "u" && b instanceof Request) {
            const m = vh(b.url);
            return s(m === b.url ? b : new Request(m, b), z)
        }
        return s(b, z)
    })
}
Qg();
var Xg = Nh();
const Zg = Hg(Xg);
var _o = {
        exports: {}
    },
    Ie = {},
    Do = {
        exports: {}
    },
    Mo = {};
var rh;

function Vg() {
    return rh || (rh = 1, (function (s) {
        function b(O, B) {
            var C = O.length;
            O.push(B);
            l: for (; 0 < C;) {
                var ol = C - 1 >>> 1,
                    al = O[ol];
                if (0 < E(al, B)) O[ol] = B, O[C] = al, C = ol;
                else break l
            }
        }

        function z(O) {
            return O.length === 0 ? null : O[0]
        }

        function m(O) {
            if (O.length === 0) return null;
            var B = O[0],
                C = O.pop();
            if (C !== B) {
                O[0] = C;
                l: for (var ol = 0, al = O.length, aa = al >>> 1; ol < aa;) {
                    var fu = 2 * (ol + 1) - 1,
                        le = O[fu],
                        gt = fu + 1,
                        cu = O[gt];
                    if (0 > E(le, C)) gt < al && 0 > E(cu, le) ? (O[ol] = cu, O[gt] = C, ol = gt) : (O[ol] = le, O[fu] = C, ol = fu);
                    else if (gt < al && 0 > E(cu, C)) O[ol] = cu, O[gt] = C, ol = gt;
                    else break l
                }
            }
            return B
        }

        function E(O, B) {
            var C = O.sortIndex - B.sortIndex;
            return C !== 0 ? C : O.id - B.id
        }
        if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var D = performance;
            s.unstable_now = function () {
                return D.now()
            }
        } else {
            var X = Date,
                U = X.now();
            s.unstable_now = function () {
                return X.now() - U
            }
        }
        var $ = [],
            el = [],
            Gl = 1,
            L = null,
            Z = 3,
            yt = !1,
            wl = !1,
            At = !1,
            cl = !1,
            vt = typeof setTimeout == "function" ? setTimeout : null,
            Gt = typeof clearTimeout == "function" ? clearTimeout : null,
            nu = typeof setImmediate < "u" ? setImmediate : null;

        function Y(O) {
            for (var B = z(el); B !== null;) {
                if (B.callback === null) m(el);
                else if (B.startTime <= O) m(el), B.sortIndex = B.expirationTime, b($, B);
                else break;
                B = z(el)
            }
        }

        function Jl(O) {
            if (At = !1, Y(O), !wl)
                if (z($) !== null) wl = !0, Rl || (Rl = !0, Qt());
                else {
                    var B = z(el);
                    B !== null && Ql(Jl, B.startTime - O)
                }
        }
        var Rl = !1,
            w = -1,
            un = 5,
            qa = -1;

        function ta() {
            return cl ? !0 : !(s.unstable_now() - qa < un)
        }

        function Ot() {
            if (cl = !1, Rl) {
                var O = s.unstable_now();
                qa = O;
                var B = !0;
                try {
                    l: {
                        wl = !1,
                        At && (At = !1, Gt(w), w = -1),
                        yt = !0;
                        var C = Z;
                        try {
                            t: {
                                for (Y(O), L = z($); L !== null && !(L.expirationTime > O && ta());) {
                                    var ol = L.callback;
                                    if (typeof ol == "function") {
                                        L.callback = null, Z = L.priorityLevel;
                                        var al = ol(L.expirationTime <= O);
                                        if (O = s.unstable_now(), typeof al == "function") {
                                            L.callback = al, Y(O), B = !0;
                                            break t
                                        }
                                        L === z($) && m($), Y(O)
                                    } else m($);
                                    L = z($)
                                }
                                if (L !== null) B = !0;
                                else {
                                    var aa = z(el);
                                    aa !== null && Ql(Jl, aa.startTime - O), B = !1
                                }
                            }
                            break l
                        }
                        finally {
                            L = null, Z = C, yt = !1
                        }
                        B = void 0
                    }
                }
                finally {
                    B ? Qt() : Rl = !1
                }
            }
        }
        var Qt;
        if (typeof nu == "function") Qt = function () {
            nu(Ot)
        };
        else if (typeof MessageChannel < "u") {
            var iu = new MessageChannel,
                en = iu.port2;
            iu.port1.onmessage = Ot, Qt = function () {
                en.postMessage(null)
            }
        } else Qt = function () {
            vt(Ot, 0)
        };

        function Ql(O, B) {
            w = vt(function () {
                O(s.unstable_now())
            }, B)
        }
        s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function (O) {
            O.callback = null
        }, s.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : un = 0 < O ? Math.floor(1e3 / O) : 5
        }, s.unstable_getCurrentPriorityLevel = function () {
            return Z
        }, s.unstable_next = function (O) {
            switch (Z) {
            case 1:
            case 2:
            case 3:
                var B = 3;
                break;
            default:
                B = Z
            }
            var C = Z;
            Z = B;
            try {
                return O()
            } finally {
                Z = C
            }
        }, s.unstable_requestPaint = function () {
            cl = !0
        }, s.unstable_runWithPriority = function (O, B) {
            switch (O) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                O = 3
            }
            var C = Z;
            Z = O;
            try {
                return B()
            } finally {
                Z = C
            }
        }, s.unstable_scheduleCallback = function (O, B, C) {
            var ol = s.unstable_now();
            switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? ol + C : ol) : C = ol, O) {
            case 1:
                var al = -1;
                break;
            case 2:
                al = 250;
                break;
            case 5:
                al = 1073741823;
                break;
            case 4:
                al = 1e4;
                break;
            default:
                al = 5e3
            }
            return al = C + al, O = {
                id: Gl++,
                callback: B,
                priorityLevel: O,
                startTime: C,
                expirationTime: al,
                sortIndex: -1
            }, C > ol ? (O.sortIndex = C, b(el, O), z($) === null && O === z(el) && (At ? (Gt(w), w = -1) : At = !0, Ql(Jl, C - ol))) : (O.sortIndex = al, b($, O), wl || yt || (wl = !0, Rl || (Rl = !0, Qt()))), O
        }, s.unstable_shouldYield = ta, s.unstable_wrapCallback = function (O) {
            var B = Z;
            return function () {
                var C = Z;
                Z = B;
                try {
                    return O.apply(this, arguments)
                } finally {
                    Z = C
                }
            }
        }
    })(Mo)), Mo
}
var bh;

function xg() {
    return bh || (bh = 1, Do.exports = Vg()), Do.exports
}
var Sh;

function Lg() {
    if (Sh) return Ie;
    Sh = 1;
    var s = xg(),
        b = Nh(),
        z = Cg();

    function m(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function E(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }

    function D(l) {
        for (var t = l, a = t; a && !a.alternate;) t = a, (t.flags & 4098) !== 0 && (l = t.return), a = t.return;
        for (; t.return;) t = t.return;
        return t.tag === 3 ? l : null
    }

    function X(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function U(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function $(l) {
        if (D(l) !== l) throw Error(m(188))
    }

    function el(l) {
        var t = l.alternate;
        if (!t) {
            if (t = D(l), t === null) throw Error(m(188));
            return t !== l ? null : l
        }
        for (var a = l, u = t;;) {
            var e = a.return;
            if (e === null) break;
            var n = e.alternate;
            if (n === null) {
                if (u = e.return, u !== null) {
                    a = u;
                    continue
                }
                break
            }
            if (e.child === n.child) {
                for (n = e.child; n;) {
                    if (n === a) return $(e), l;
                    if (n === u) return $(e), t;
                    n = n.sibling
                }
                throw Error(m(188))
            }
            if (a.return !== u.return) a = e, u = n;
            else {
                for (var i = !1, f = e.child; f;) {
                    if (f === a) {
                        i = !0, a = e, u = n;
                        break
                    }
                    if (f === u) {
                        i = !0, u = e, a = n;
                        break
                    }
                    f = f.sibling
                }
                if (!i) {
                    for (f = n.child; f;) {
                        if (f === a) {
                            i = !0, a = n, u = e;
                            break
                        }
                        if (f === u) {
                            i = !0, u = n, a = e;
                            break
                        }
                        f = f.sibling
                    }
                    if (!i) throw Error(m(189))
                }
            }
            if (a.alternate !== u) throw Error(m(190))
        }
        if (a.tag !== 3) throw Error(m(188));
        return a.stateNode.current === a ? l : t
    }

    function Gl(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null;) {
            if (t = Gl(l), t !== null) return t;
            l = l.sibling
        }
        return null
    }

    function L(l, t, a, u, e, n) {
        for (; l !== null;) {
            if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && a(l, u, e, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && L(l.child, t, a, u, e, n)) return !0;
            l = l.sibling
        }
        return !1
    }

    function Z(l) {
        for (l = l.return; l !== null;) {
            if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
            l = l.return
        }
        return null
    }

    function yt(l) {
        var t = !1;
        for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27));) l = l.return;
        return t
    }

    function wl(l) {
        var t = [null, null],
            a = Z(l);
        return a === null || At(t, l, a.child, {
            foundSelf: !1
        }), t
    }

    function At(l, t, a, u) {
        for (; a !== null;) {
            if (a === t) u.foundSelf = !0;
            else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
                if (u.foundSelf) return l[1] = a, !0;
                l[0] = a
            } else if ((a.tag !== 22 || a.memoizedState === null) && At(l, t, a.child, u)) return !0;
            a = a.sibling
        }
        return !1
    }

    function cl(l) {
        switch (l.tag) {
        case 5:
        case 27:
        case 6:
            return l.stateNode;
        case 3:
            return l.stateNode.containerInfo;
        default:
            throw Error(m(559))
        }
    }
    var vt = null,
        Gt = null;

    function nu(l, t, a) {
        return l === a ? !0 : l === t ? (vt = l, !0) : !1
    }

    function Y(l, t, a) {
        return l === a ? (Gt = l, !1) : l === t ? (Gt !== null && (vt = l), !0) : !1
    }

    function Jl(l) {
        if (l === null) return null;
        do l = l === null ? null : l.return; while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
        return l || null
    }

    function Rl(l, t, a) {
        for (var u = 0, e = l; e; e = a(e)) u++;
        e = 0;
        for (var n = t; n; n = a(n)) e++;
        for (; 0 < u - e;) l = a(l), u--;
        for (; 0 < e - u;) t = a(t), e--;
        for (; u--;) {
            if (l === t || t !== null && l === t.alternate) return l;
            l = a(l), t = a(t)
        }
        return null
    }
    var w = Object.assign,
        un = Symbol.for("react.element"),
        qa = Symbol.for("react.transitional.element"),
        ta = Symbol.for("react.portal"),
        Ot = Symbol.for("react.fragment"),
        Qt = Symbol.for("react.strict_mode"),
        iu = Symbol.for("react.profiler"),
        en = Symbol.for("react.consumer"),
        Ql = Symbol.for("react.context"),
        O = Symbol.for("react.forward_ref"),
        B = Symbol.for("react.suspense"),
        C = Symbol.for("react.suspense_list"),
        ol = Symbol.for("react.memo"),
        al = Symbol.for("react.lazy"),
        aa = Symbol.for("react.activity"),
        fu = Symbol.for("react.legacy_hidden"),
        le = Symbol.for("react.memo_cache_sentinel"),
        gt = Symbol.for("react.view_transition"),
        cu = Symbol.for("react.recoverable"),
        Qo = Symbol.iterator;

    function te(l) {
        return l === null || typeof l != "object" ? null : (l = Qo && l[Qo] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var qh = Symbol.for("react.client.reference");

    function Zi(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === qh ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
        case Ot:
            return "Fragment";
        case iu:
            return "Profiler";
        case Qt:
            return "StrictMode";
        case B:
            return "Suspense";
        case C:
            return "SuspenseList";
        case aa:
            return "Activity";
        case gt:
            return "ViewTransition"
        }
        if (typeof l == "object") switch (l.$$typeof) {
        case ta:
            return "Portal";
        case Ql:
            return l.displayName || "Context";
        case en:
            return (l._context.displayName || "Context") + ".Consumer";
        case O:
            var t = l.render;
            return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ol:
            return t = l.displayName || null, t !== null ? t : Zi(l.type) || "Memo";
        case al:
            t = l._payload, l = l._init;
            try {
                return Zi(l(t))
            } catch {}
        }
        return null
    }
    var ae = Array.isArray,
        H = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        k = z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Ba = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        Vi = [],
        ou = -1;

    function Nt(l) {
        return {
            current: l
        }
    }

    function Nl(l) {
        0 > ou || (l.current = Vi[ou], Vi[ou] = null, ou--)
    }

    function nl(l, t) {
        ou++, Vi[ou] = l.current, l.current = t
    }
    var _t = Nt(null),
        ue = Nt(null),
        ua = Nt(null),
        nn = Nt(null);

    function fn(l, t) {
        switch (nl(ua, t), nl(ue, l), nl(_t, null), t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Sd(l) : 0;
            break;
        default:
            if (l = t.tagName, t = t.namespaceURI) t = Sd(t), l = Td(t, l);
            else switch (l) {
            case "svg":
                l = 1;
                break;
            case "math":
                l = 2;
                break;
            default:
                l = 0
            }
        }
        Nl(_t), nl(_t, l)
    }

    function su() {
        Nl(_t), Nl(ue), Nl(ua)
    }

    function xi(l) {
        var t = l.memoizedState;
        t !== null && ($u._currentValue = t.memoizedState, nl(nn, l)), t = _t.current;
        var a = Td(t, l.type);
        t !== a && (nl(ue, l), nl(_t, a))
    }

    function cn(l) {
        ue.current === l && (Nl(_t), Nl(ue)), nn.current === l && (Nl(nn), $u._currentValue = Ba)
    }
    var Li, Xo;

    function ea(l) {
        if (Li === void 0) try {
            throw Error()
        } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            Li = t && t[1] || "", Xo = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Li + l + Xo
    }
    var Ki = !1;

    function wi(l, t) {
        if (!l || Ki) return "";
        Ki = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var u = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var T = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(T.prototype, "props", {
                                    set: function () {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(T, [])
                                } catch (A) {
                                    var d = A
                                }
                                Reflect.construct(l, [], T)
                            } else {
                                try {
                                    T.call()
                                } catch (A) {
                                    d = A
                                }
                                T = !1;
                                try {
                                    var g = Object.getOwnPropertyDescriptor(l.prototype, "props");
                                    Object.defineProperty(l.prototype, "props", {
                                        configurable: !0,
                                        set: function () {
                                            throw Error()
                                        }
                                    }), T = !0, new l
                                } finally {
                                    T && (g !== void 0 ? Object.defineProperty(l.prototype, "props", g) : delete l.prototype.props)
                                }
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (A) {
                                d = A
                            }(T = l()) && typeof T.catch == "function" && T.catch(function () {})
                        }
                    } catch (A) {
                        if (A && d && typeof A.stack == "string") return [A.stack, d.stack]
                    }
                    return [null, null]
                }
            };
            u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
            e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = u.DetermineComponentFrameRoot(),
                i = n[0],
                f = n[1];
            if (i && f) {
                var c = i.split(`
`),
                    y = f.split(`
`);
                for (e = u = 0; u < c.length && !c[u].includes("DetermineComponentFrameRoot");) u++;
                for (; e < y.length && !y[e].includes("DetermineComponentFrameRoot");) e++;
                if (u === c.length || e === y.length)
                    for (u = c.length - 1, e = y.length - 1; 1 <= u && 0 <= e && c[u] !== y[e];) e--;
                for (; 1 <= u && 0 <= e; u--, e--)
                    if (c[u] !== y[e]) {
                        if (u !== 1 || e !== 1)
                            do
                                if (u--, e--, 0 > e || c[u] !== y[e]) {
                                    var r = `
` + c[u].replace(" at new ", " at ");
                                    return l.displayName && r.includes("<anonymous>") && (r = r.replace("<anonymous>", l.displayName)), r
                                } while (1 <= u && 0 <= e);
                        break
                    }
            }
        } finally {
            Ki = !1, Error.prepareStackTrace = a
        }
        return (a = l ? l.displayName || l.name : "") ? ea(a) : ""
    }

    function Bh(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return ea(l.type);
        case 16:
            return ea("Lazy");
        case 13:
            return l.child !== t && t !== null ? ea("Suspense Fallback") : ea("Suspense");
        case 19:
            return ea("SuspenseList");
        case 0:
        case 15:
            return wi(l.type, !1);
        case 11:
            return wi(l.type.render, !1);
        case 1:
            return wi(l.type, !0);
        case 31:
            return ea("Activity");
        case 30:
            return ea("ViewTransition");
        default:
            return ""
        }
    }

    function Zo(l) {
        try {
            var t = "",
                a = null;
            do t += Bh(l, a), a = l, l = l.return; while (l);
            return t
        } catch (u) {
            return `
Error generating stack: ` + u.message + `
` + u.stack
        }
    }
    var Ji = Object.prototype.hasOwnProperty,
        ki = s.unstable_scheduleCallback,
        Fi = s.unstable_cancelCallback,
        Yh = s.unstable_shouldYield,
        jh = s.unstable_requestPaint,
        kl = s.unstable_now,
        Gh = s.unstable_getCurrentPriorityLevel,
        Vo = s.unstable_ImmediatePriority,
        xo = s.unstable_UserBlockingPriority,
        on = s.unstable_NormalPriority,
        Qh = s.unstable_LowPriority,
        Lo = s.unstable_IdlePriority,
        Xh = s.log,
        Zh = s.unstable_setDisableYieldValue,
        ee = null,
        Fl = null;

    function na(l) {
        if (typeof Xh == "function" && Zh(l), Fl && typeof Fl.setStrictMode == "function") try {
            Fl.setStrictMode(ee, l)
        } catch {}
    }
    var Wl = Math.clz32 ? Math.clz32 : Lh,
        Vh = Math.log,
        xh = Math.LN2;

    function Lh(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (Vh(l) / xh | 0) | 0
    }
    var sn = 256,
        mn = 262144,
        dn = 4194304;

    function Ya(l) {
        var t = l & 42;
        if (t !== 0) return t;
        switch (l & -l) {
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
            return 64;
        case 128:
            return 128;
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
            return l & -l;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }

    function hn(l, t, a) {
        var u = l.pendingLanes;
        if (u === 0) return 0;
        var e = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var f = u & 134217727;
        return f !== 0 ? (u = f & ~n, u !== 0 ? e = Ya(u) : (i &= f, i !== 0 ? e = Ya(i) : a || (a = f & ~l, a !== 0 && (e = Ya(a))))) : (f = u & ~n, f !== 0 ? e = Ya(f) : i !== 0 ? e = Ya(i) : a || (a = u & ~l, a !== 0 && (e = Ya(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e
    }

    function ne(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }

    function Ko(l, t) {
        (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements, a &= t; 0 < a;) {
                var u = 31 - Wl(a),
                    e = 1 << u;
                t |= l[u], a &= ~e
            }
        return t
    }

    function Kh(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }

    function wo() {
        var l = dn;
        return dn <<= 1, (dn & 62914560) === 0 && (dn = 4194304), l
    }

    function Wi(l) {
        for (var t = [], a = 0; 31 > a; a++) t.push(l);
        return t
    }

    function ie(l, t) {
        l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function wh(l, t, a, u, e, n) {
        var i = l.pendingLanes;
        l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
        var f = l.entanglements,
            c = l.expirationTimes,
            y = l.hiddenUpdates;
        for (a = i & ~a; 0 < a;) {
            var r = 31 - Wl(a),
                T = 1 << r;
            f[r] = 0, c[r] = -1;
            var d = y[r];
            if (d !== null)
                for (y[r] = null, r = 0; r < d.length; r++) {
                    var g = d[r];
                    g !== null && (g.lane &= -536870913)
                }
            a &= ~T
        }
        u !== 0 && Jo(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }

    function Jo(l, t, a) {
        l.pendingLanes |= t, l.suspendedLanes &= ~t;
        var u = 31 - Wl(t);
        l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930
    }

    function ko(l, t) {
        var a = l.entangledLanes |= t;
        for (l = l.entanglements; a;) {
            var u = 31 - Wl(a),
                e = 1 << u;
            e & t | l[u] & t && (l[u] |= t), a &= ~e
        }
    }

    function Fo(l, t) {
        var a = t & -t;
        return a = (a & 42) !== 0 ? 1 : $i(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    }

    function $i(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
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
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }

    function Ii(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Wo() {
        var l = k.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : uh(l.type))
    }

    function $o(l, t) {
        var a = k.p;
        try {
            return k.p = l, t()
        } finally {
            k.p = a
        }
    }
    var Xt = Math.random().toString(36).slice(2),
        _l = "__reactFiber$" + Xt,
        Xl = "__reactProps$" + Xt,
        mu = "__reactContainer$" + Xt,
        Io = "__reactEvents$" + Xt,
        Jh = "__reactListeners$" + Xt,
        kh = "__reactHandles$" + Xt,
        Po = "__reactResources$" + Xt,
        fe = "__reactMarker$" + Xt,
        yn = "__reactLoad$" + Xt;

    function vn(l) {
        delete l[_l], delete l[Xl], delete l[Jh], delete l[kh]
    }

    function ja(l) {
        var t;
        if (t = l[_l]) return t;
        for (var a = l.parentNode; a;) {
            if (t = a[mu] || a[_l]) {
                if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                    for (l = jd(l); l !== null;) {
                        if (a = l[_l]) return a;
                        l = jd(l)
                    }
                return t
            }
            l = a, a = l.parentNode
        }
        return null
    }

    function du(l) {
        if (l = l[_l] || l[mu]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l
        }
        return null
    }

    function ce(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(m(33))
    }

    function hu(l) {
        var t = l[Po];
        return t || (t = l[Po] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function zl(l) {
        l[fe] = !0
    }

    function ls(l) {
        l[yn] = void 0
    }
    var ts = new Set,
        as = {};

    function Ga(l, t) {
        yu(l, t), yu(l + "Capture", t)
    }

    function yu(l, t) {
        for (as[l] = t, l = 0; l < t.length; l++) ts.add(t[l])
    }
    var Fh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        us = {},
        es = {};

    function Wh(l) {
        return Ji.call(es, l) ? !0 : Ji.call(us, l) ? !1 : Fh.test(l) ? es[l] = !0 : (us[l] = !0, !1)
    }
    var J = !1;

    function ns() {
        var l = J;
        return J = !1, l
    }

    function gn(l, t, a) {
        if (Wh(t))
            if (a === null) l.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var u = t.toLowerCase().slice(0, 5);
                    if (u !== "data-" && u !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, a)
            }
    }

    function rn(l, t, a) {
        if (a === null) l.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, a)
        }
    }

    function Zt(l, t, a, u) {
        if (u === null) l.removeAttribute(a);
        else {
            switch (typeof u) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(a);
                return
            }
            l.setAttributeNS(t, a, u)
        }
    }

    function $l(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }

    function is(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function $h(l, t, a) {
        var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
            var e = u.get,
                n = u.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function () {
                    return e.call(this)
                },
                set: function (i) {
                    a = "" + i, n.call(this, i)
                }
            }), Object.defineProperty(l, t, {
                enumerable: u.enumerable
            }), {
                getValue: function () {
                    return a
                },
                setValue: function (i) {
                    a = "" + i
                },
                stopTracking: function () {
                    l._valueTracker = null, delete l[t]
                }
            }
        }
    }

    function Pi(l) {
        if (!l._valueTracker) {
            var t = is(l) ? "checked" : "value";
            l._valueTracker = $h(l, t, "" + l[t])
        }
    }

    function fs(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var a = t.getValue(),
            u = "";
        return l && (u = is(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1
    }
    var Ih = /[\n"\\]/g;

    function nt(l) {
        return l.replace(Ih, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function lf(l, t, a, u, e, n, i, f) {
        l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + $l(t)) : l.value !== "" + $l(t) && (l.value = "" + $l(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? i === "number" && l.value == t ? tf(l, $l(l.value)) : tf(l, $l(t)) : a != null ? tf(l, $l(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + $l(f) : l.removeAttribute("name")
    }

    function cs(l, t, a, u, e, n, i, f) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                Pi(l);
                return
            }
            a = a != null ? "" + $l(a) : "", t = t != null ? "" + $l(t) : a, f || t === l.value || (l.value = t), l.defaultValue = t
        }
        u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = f ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Pi(l)
    }

    function tf(l, t) {
        l.defaultValue !== "" + t && (l.defaultValue = "" + t)
    }

    function vu(l, t, a, u) {
        if (l = l.options, t) {
            t = {};
            for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
            for (a = 0; a < l.length; a++) e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0)
        } else {
            for (a = "" + $l(a), t = null, e = 0; e < l.length; e++) {
                if (l[e].value === a) {
                    l[e].selected = !0, u && (l[e].defaultSelected = !0);
                    return
                }
                t !== null || l[e].disabled || (t = l[e])
            }
            t !== null && (t.selected = !0)
        }
    }

    function os(l, t, a) {
        if (t != null && (t = "" + $l(t), t !== l.value && (l.value = t), a == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = a != null ? "" + $l(a) : ""
    }

    function ss(l, t, a, u) {
        if (t == null) {
            if (u != null) {
                if (a != null) throw Error(m(92));
                if (ae(u)) {
                    if (1 < u.length) throw Error(m(93));
                    u = u[0]
                }
                a = u
            }
            a == null && (a = ""), t = a
        }
        a = $l(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), Pi(l)
    }

    function gu(l, t) {
        if (t) {
            var a = l.firstChild;
            if (a && a === l.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Ph = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function ms(l, t, a) {
        var u = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ph.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px"
    }

    function ds(l, t, a) {
        if (t != null && typeof t != "object") throw Error(m(62));
        if (l = l.style, a != null) {
            for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "", J = !0);
            for (var e in t) u = t[e], t.hasOwnProperty(e) && a[e] !== u && (ms(l, e, u), J = !0)
        } else
            for (var n in t) t.hasOwnProperty(n) && ms(l, n, t[n])
    }

    function af(l) {
        if (l.indexOf("-") === -1) return !1;
        switch (l) {
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
            return !0
        }
    }
    var ly = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["maskType", "mask-type"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        ty = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function bn(l) {
        return ty.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }

    function Dt() {}
    var uf = null;

    function ef(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var ru = null,
        bu = null;

    function hs(l) {
        var t = du(l);
        if (t && (l = t.stateNode)) {
            var a = l[Xl] || null;
            l: switch (l = t.stateNode, t.type) {
            case "input":
                if (lf(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                    for (a = l; a.parentNode;) a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + nt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                        var u = a[t];
                        if (u !== l && u.form === l.form) {
                            var e = u[Xl] || null;
                            if (!e) throw Error(m(90));
                            lf(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name)
                        }
                    }
                    for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && fs(u)
                }
                break l;
            case "textarea":
                os(l, a.value, a.defaultValue);
                break l;
            case "select":
                t = a.value, t != null && vu(l, !!a.multiple, t, !1)
            }
        }
    }
    var nf = !1;

    function ys(l, t, a) {
        if (nf) return l(t, a);
        nf = !0;
        try {
            var u = l(t);
            return u
        } finally {
            if (nf = !1, (ru !== null || bu !== null) && (bi(), ru && (t = ru, l = bu, bu = ru = null, hs(t), l)))
                for (t = 0; t < l.length; t++) hs(l[t])
        }
    }

    function oe(l, t) {
        var a = l.stateNode;
        if (a === null) return null;
        var u = a[Xl] || null;
        if (u === null) return null;
        a = u[t];
        l: switch (t) {
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
            (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
            break l;
        default:
            l = !1
        }
        if (l) return null;
        if (a && typeof a != "function") throw Error(m(231, t, typeof a));
        return a
    }
    var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        ff = !1;
    if (Vt) try {
        var se = {};
        Object.defineProperty(se, "passive", {
            get: function () {
                ff = !0
            }
        }), window.addEventListener("test", se, se), window.removeEventListener("test", se, se)
    } catch {
        ff = !1
    }
    var ia = null,
        cf = null,
        Sn = null;

    function vs() {
        if (Sn) return Sn;
        var l, t = cf,
            a = t.length,
            u, e = "value" in ia ? ia.value : ia.textContent,
            n = e.length;
        for (l = 0; l < a && t[l] === e[l]; l++);
        var i = a - l;
        for (u = 1; u <= i && t[a - u] === e[n - u]; u++);
        return Sn = e.slice(l, 1 < u ? 1 - u : void 0)
    }

    function Tn(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function zn() {
        return !0
    }

    function gs() {
        return !1
    }

    function ql(l) {
        function t(a, u, e, n, i) {
            this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
            for (var f in l) l.hasOwnProperty(f) && (a = l[f], this[f] = a ? a(n) : n[f]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? zn : gs, this.isPropagationStopped = gs, this
        }
        return w(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = zn)
            },
            stopPropagation: function () {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = zn)
            },
            persist: function () {},
            isPersistent: zn
        }), t
    }
    var fa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        En = ql(fa),
        me = w({}, fa, {
            view: 0,
            detail: 0
        }),
        ay = ql(me),
        of , sf, de, An = w({}, me, {
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
            getModifierState: df,
            button: 0,
            buttons: 0,
            relatedTarget: function (l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function (l) {
                return "movementX" in l ? l.movementX : (l !== de && (de && l.type === "mousemove" ? ( of = l.screenX - de.screenX, sf = l.screenY - de.screenY) : sf = of = 0, de = l), of )
            },
            movementY: function (l) {
                return "movementY" in l ? l.movementY : sf
            }
        }),
        rs = ql(An),
        uy = w({}, An, {
            dataTransfer: 0
        }),
        ey = ql(uy),
        ny = w({}, me, {
            relatedTarget: 0
        }),
        mf = ql(ny),
        iy = w({}, fa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        fy = ql(iy),
        cy = w({}, fa, {
            clipboardData: function (l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        oy = ql(cy),
        sy = w({}, fa, {
            data: 0
        }),
        bs = ql(sy),
        my = {
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
            MozPrintableKey: "Unidentified"
        },
        dy = {
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
            224: "Meta"
        },
        hy = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function yy(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = hy[l]) ? !!t[l] : !1
    }

    function df() {
        return yy
    }
    var vy = w({}, me, {
            key: function (l) {
                if (l.key) {
                    var t = my[l.key] || l.key;
                    if (t !== "Unidentified") return t
                }
                return l.type === "keypress" ? (l = Tn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? dy[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: df,
            charCode: function (l) {
                return l.type === "keypress" ? Tn(l) : 0
            },
            keyCode: function (l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function (l) {
                return l.type === "keypress" ? Tn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        gy = ql(vy),
        ry = w({}, An, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Ss = ql(ry),
        by = w({}, fa, {
            submitter: 0
        }),
        Sy = ql(by),
        Ty = w({}, me, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: df
        }),
        zy = ql(Ty),
        Ey = w({}, fa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ay = ql(Ey),
        Oy = w({}, An, {
            deltaX: function (l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function (l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Ny = ql(Oy),
        _y = w({}, fa, {
            newState: 0,
            oldState: 0,
            source: 0
        }),
        Dy = ql(_y),
        My = [9, 13, 27, 32],
        hf = Vt && "CompositionEvent" in window,
        he = null;
    Vt && "documentMode" in document && (he = document.documentMode);
    var Uy = Vt && "TextEvent" in window && !he,
        Ts = Vt && (!hf || he && 8 < he && 11 >= he),
        zs = " ",
        Es = !1;

    function As(l, t) {
        switch (l) {
        case "keyup":
            return My.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }

    function Os(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var Su = !1;

    function py(l, t) {
        switch (l) {
        case "compositionend":
            return Os(t);
        case "keypress":
            return t.which !== 32 ? null : (Es = !0, zs);
        case "textInput":
            return l = t.data, l === zs && Es ? null : l;
        default:
            return null
        }
    }

    function Hy(l, t) {
        if (Su) return l === "compositionend" || !hf && As(l, t) ? (l = vs(), Sn = cf = ia = null, Su = !1, l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ts && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Cy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ns(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!Cy[l.type] : t === "textarea"
    }

    function _s(l, t, a, u) {
        ru ? bu ? bu.push(u) : bu = [u] : ru = u, t = Oi(t, "onChange"), 0 < t.length && (a = new En("onChange", "change", null, a, u), l.push({
            event: a,
            listeners: t
        }))
    }
    var ye = null,
        ve = null;

    function Ry(l) {
        hd(l, 0)
    }

    function On(l) {
        var t = ce(l);
        if (fs(t)) return l
    }

    function Ds(l, t) {
        if (l === "change") return t
    }
    var Ms = !1;
    if (Vt) {
        var yf;
        if (Vt) {
            var vf = "oninput" in document;
            if (!vf) {
                var Us = document.createElement("div");
                Us.setAttribute("oninput", "return;"), vf = typeof Us.oninput == "function"
            }
            yf = vf
        } else yf = !1;
        Ms = yf && (!document.documentMode || 9 < document.documentMode)
    }

    function ps() {
        ye && (ye.detachEvent("onpropertychange", Hs), ve = ye = null)
    }

    function Hs(l) {
        if (l.propertyName === "value" && On(ve)) {
            var t = [];
            _s(t, ve, l, ef(l)), ys(Ry, t)
        }
    }

    function qy(l, t, a) {
        l === "focusin" ? (ps(), ye = t, ve = a, ye.attachEvent("onpropertychange", Hs)) : l === "focusout" && ps()
    }

    function By(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return On(ve)
    }

    function Yy(l, t) {
        if (l === "click") return On(t)
    }

    function jy(l, t) {
        if (l === "input" || l === "change") return On(t)
    }

    function Gy(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var Il = typeof Object.is == "function" ? Object.is : Gy;

    function ge(l, t) {
        if (Il(l, t)) return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
        var a = Object.keys(l),
            u = Object.keys(t);
        if (a.length !== u.length) return !1;
        for (u = 0; u < a.length; u++) {
            var e = a[u];
            if (!Ji.call(t, e) || !Il(l[e], t[e])) return !1
        }
        return !0
    }

    function gf(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }

    function Cs(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function Rs(l, t) {
        var a = Cs(l);
        l = 0;
        for (var u; a;) {
            if (a.nodeType === 3) {
                if (u = l + a.textContent.length, l <= t && u >= t) return {
                    node: a,
                    offset: t - l
                };
                l = u
            }
            l: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break l
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Cs(a)
        }
    }

    function qs(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Bs(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = gf(l.document); t instanceof l.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) l = t.contentWindow;
            else break;
            t = gf(l.document)
        }
        return t
    }

    function rf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var Qy = Vt && "documentMode" in document && 11 >= document.documentMode,
        Tu = null,
        bf = null,
        re = null,
        Sf = !1;

    function Ys(l, t, a) {
        var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Sf || Tu == null || Tu !== gf(u) || (u = Tu, "selectionStart" in u && rf(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }), re && ge(re, u) || (re = u, u = Oi(bf, "onSelect"), 0 < u.length && (t = new En("onSelect", "select", null, t, a), l.push({
            event: t,
            listeners: u
        }), t.target = Tu)))
    }

    function Qa(l, t) {
        var a = {};
        return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a
    }
    var zu = {
            animationend: Qa("Animation", "AnimationEnd"),
            animationiteration: Qa("Animation", "AnimationIteration"),
            animationstart: Qa("Animation", "AnimationStart"),
            transitionrun: Qa("Transition", "TransitionRun"),
            transitionstart: Qa("Transition", "TransitionStart"),
            transitioncancel: Qa("Transition", "TransitionCancel"),
            transitionend: Qa("Transition", "TransitionEnd")
        },
        Tf = {},
        js = {};
    Vt && (js = document.createElement("div").style, "AnimationEvent" in window || (delete zu.animationend.animation, delete zu.animationiteration.animation, delete zu.animationstart.animation), "TransitionEvent" in window || delete zu.transitionend.transition);

    function Xa(l) {
        if (Tf[l]) return Tf[l];
        if (!zu[l]) return l;
        var t = zu[l],
            a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in js) return Tf[l] = t[a];
        return l
    }
    var Gs = Xa("animationend"),
        Qs = Xa("animationiteration"),
        Xs = Xa("animationstart"),
        Xy = Xa("transitionrun"),
        Zy = Xa("transitionstart"),
        Vy = Xa("transitioncancel"),
        Zs = Xa("transitionend"),
        Vs = new Map,
        zf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    zf.push("scrollEnd");

    function rt(l, t) {
        Vs.set(l, t), Ga(t, [l])
    }
    var xy = 0;

    function xt(l, t) {
        if (l.name != null && l.name !== "auto") return l.name;
        if (t.autoName !== null) return t.autoName;
        l = zt.identifierPrefix;
        var a = xy++;
        return l = "_" + l + "t_" + a.toString(32) + "_", t.autoName = l
    }

    function xs(l) {
        if (l == null || typeof l == "string") return l;
        var t = null,
            a = Zu;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = l[a[u]];
                if (e != null) {
                    if (e === "none") return "none";
                    t = t == null ? e : t + (" " + e)
                }
            }
        return t ?? l.default
    }

    function Lt(l, t) {
        return l = xs(l), t = xs(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t
    }
    var Nn = typeof reportError == "function" ? reportError : function (l) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                    error: l
                });
                if (!window.dispatchEvent(t)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", l);
                return
            }
            console.error(l)
        },
        it = [],
        Eu = 0,
        Ef = 0;

    function _n() {
        for (var l = Eu, t = Ef = Eu = 0; t < l;) {
            var a = it[t];
            it[t++] = null;
            var u = it[t];
            it[t++] = null;
            var e = it[t];
            it[t++] = null;
            var n = it[t];
            if (it[t++] = null, u !== null && e !== null) {
                var i = u.pending;
                i === null ? e.next = e : (e.next = i.next, i.next = e), u.pending = e
            }
            n !== 0 && Ls(a, e, n)
        }
    }

    function Dn(l, t, a, u) {
        it[Eu++] = l, it[Eu++] = t, it[Eu++] = a, it[Eu++] = u, Ef |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u)
    }

    function Af(l, t, a, u) {
        return Dn(l, t, a, u), Mn(l)
    }

    function Za(l, t) {
        return Dn(l, null, null, t), Mn(l)
    }

    function Ls(l, t, a) {
        l.lanes |= a;
        var u = l.alternate;
        u !== null && (u.lanes |= a);
        for (var e = !1, n = l.return; n !== null;) n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
        return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Wl(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null
    }

    function Mn(l) {
        if (50 < Qe) throw Qe = 0, ri = null, Error(m(185));
        for (var t = l.return; t !== null;) l = t, t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var Au = {};

    function Ly(l, t, a, u) {
        this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Zl(l, t, a, u) {
        return new Ly(l, t, a, u)
    }

    function Of(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function Kt(l, t) {
        var a = l.alternate;
        return a === null ? (a = Zl(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 1206910976, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a
    }

    function Ks(l, t) {
        l.flags &= 1206910978;
        var a = l.alternate;
        return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }

    function Un(l, t, a, u, e, n) {
        var i = 0;
        if (u = l, typeof u == "function") Of(u) && (i = 1);
        else if (typeof u == "string") i = bg(l, a, _t.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else l: switch (u) {
        case aa:
            return l = Zl(31, a, t, e), l.elementType = aa, l.lanes = n, l;
        case Ot:
            return Va(a.children, e, n, t);
        case Qt:
            i = 8, e |= 24;
            break;
        case iu:
            return l = Zl(12, a, t, e | 2), l.elementType = iu, l.lanes = n, l;
        case B:
            return l = Zl(13, a, t, e), l.elementType = B, l.lanes = n, l;
        case C:
            return l = Zl(19, a, t, e), l.elementType = C, l.lanes = n, l;
        case fu:
        case gt:
            return l = e | 32, l = Zl(30, a, t, l), l.elementType = gt, l.lanes = n, l.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null
            }, l;
        default:
            if (typeof u == "object" && u !== null) switch (u.$$typeof) {
            case Ql:
                i = 10;
                break l;
            case en:
                i = 9;
                break l;
            case O:
                i = 11;
                break l;
            case ol:
                i = 14;
                break l;
            case al:
                i = 16, u = null;
                break l
            }
            i = 29, a = Error(m(130, l === null ? "null" : typeof l, "")), u = null
        }
        return t = Zl(i, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t
    }

    function Va(l, t, a, u) {
        return l = Zl(7, l, u, t), l.lanes = a, l
    }

    function Nf(l, t, a) {
        return l = Zl(6, l, null, t), l.lanes = a, l
    }

    function ws(l) {
        var t = Zl(18, null, null, 0);
        return t.stateNode = l, t
    }

    function _f(l, t, a) {
        return t = Zl(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }
    var Js = new WeakMap;

    function ft(l, t) {
        if (typeof l == "object" && l !== null) {
            var a = Js.get(l);
            return a !== void 0 ? a : (t = {
                value: l,
                source: t,
                stack: Zo(t)
            }, Js.set(l, t), t)
        }
        return {
            value: l,
            source: t,
            stack: Zo(t)
        }
    }
    var Ou = [],
        Nu = 0,
        pn = null,
        be = 0,
        ct = [],
        ot = 0,
        ca = null,
        Mt = 1,
        Ut = "";

    function wt(l, t) {
        Ou[Nu++] = be, Ou[Nu++] = pn, pn = l, be = t
    }

    function ks(l, t, a) {
        ct[ot++] = Mt, ct[ot++] = Ut, ct[ot++] = ca, ca = l;
        var u = Mt;
        l = Ut;
        var e = 32 - Wl(u) - 1;
        u &= ~(1 << e), a += 1;
        var n = 32 - Wl(t) + e;
        if (30 < n) {
            var i = e - e % 5;
            n = (u & (1 << i) - 1).toString(32), u >>= i, e -= i, Mt = 1 << 32 - Wl(t) + e | a << e | u, Ut = n + l
        } else Mt = 1 << n | a << e | u, Ut = l
    }

    function Hn(l) {
        l.return !== null && (wt(l, 1), ks(l, 1, 0))
    }

    function Df(l) {
        for (; l === pn;) pn = Ou[--Nu], Ou[Nu] = null, be = Ou[--Nu], Ou[Nu] = null;
        for (; l === ca;) ca = ct[--ot], ct[ot] = null, Ut = ct[--ot], ct[ot] = null, Mt = ct[--ot], ct[ot] = null
    }

    function Fs(l, t) {
        ct[ot++] = Mt, ct[ot++] = Ut, ct[ot++] = ca, Mt = t.id, Ut = t.overflow, ca = l
    }
    var El = null,
        il = null,
        j = !1,
        oa = null,
        st = !1,
        Mf = Error(m(519));

    function sa(l) {
        var t = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Se(ft(t, l)), Mf
    }

    function Ws(l) {
        var t = l.stateNode,
            a = l.type,
            u = l.memoizedProps;
        switch (t[_l] = l, t[Xl] = u, a) {
        case "dialog":
            Q("cancel", t), Q("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            Q("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Ze.length; a++) Q(Ze[a], t);
            break;
        case "source":
            Q("error", t);
            break;
        case "img":
        case "image":
        case "link":
            Q("error", t), Q("load", t);
            break;
        case "details":
            Q("toggle", t);
            break;
        case "input":
            Q("invalid", t), cs(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0);
            break;
        case "select":
            Q("invalid", t);
            break;
        case "textarea":
            Q("invalid", t), ss(t, u.value, u.defaultValue, u.children)
        }
        a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || rd(t.textContent, a) ? (u.popover != null && (Q("beforetoggle", t), Q("toggle", t)), u.onScroll != null && Q("scroll", t), u.onScrollEnd != null && Q("scrollend", t), u.onClick != null && (t.onclick = Dt), t = !0) : t = !1, t || sa(l, !0)
    }

    function Cn(l) {
        for (El = l.return; El;) switch (El.tag) {
        case 5:
        case 31:
        case 13:
            st = !1;
            return;
        case 27:
        case 3:
            st = !0;
            return;
        default:
            El = El.return
        }
    }

    function _u(l) {
        if (l !== El) return !1;
        if (!j) return Cn(l), j = !0, !1;
        var t = l.tag,
            a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || eo(l.type, l.memoizedProps)), a = !a), a && il && sa(l), Cn(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
            il = Yd(l)
        } else if (t === 31) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
            il = Yd(l)
        } else t === 27 ? (t = il, _a(l.type) ? (l = yo, yo = null, il = l) : il = t) : il = El ? dt(l.stateNode.nextSibling) : null;
        return !0
    }

    function xa() {
        il = El = null, j = !1
    }

    function Uf() {
        var l = oa;
        return l !== null && (Ll === null ? Ll = l : Ll.push.apply(Ll, l), oa = null), l
    }

    function Se(l) {
        oa === null ? oa = [l] : oa.push(l)
    }
    var pf = Nt(null),
        La = null,
        Jt = null;

    function ma(l, t, a) {
        nl(pf, t._currentValue), t._currentValue = a
    }

    function kt(l) {
        l._currentValue = pf.current, Nl(pf)
    }

    function Rn(l, t, a) {
        for (; l !== null;) {
            var u = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
            l = l.return
        }
    }

    function Hf(l, t, a, u) {
        var e = l.child;
        for (e !== null && (e.return = l); e !== null;) {
            var n = e.dependencies;
            if (n !== null) {
                var i = e.child;
                n = n.firstContext;
                l: for (; n !== null;) {
                    var f = n;
                    n = e;
                    for (var c = 0; c < t.length; c++)
                        if (f.context === t[c]) {
                            n.lanes |= a, f = n.alternate, f !== null && (f.lanes |= a), Rn(n.return, a, l), u || (i = null);
                            break l
                        } n = f.next
                }
            } else if (e.tag === 18) {
                if (i = e.return, i === null) throw Error(m(341));
                i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Rn(i, a, l), i = null
            } else e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= a, i = e.alternate, i !== null && (i.lanes |= a), Rn(e.return, a, l), i = e.child, i = i !== null ? i.sibling : null) : i = e.child;
            if (i !== null) i.return = e;
            else
                for (i = e; i !== null;) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (e = i.sibling, e !== null) {
                        e.return = i.return, i = e;
                        break
                    }
                    i = i.return
                }
            e = i
        }
    }

    function Ka(l, t, a, u) {
        l = null;
        for (var e = t, n = !1; e !== null;) {
            if (!n) {
                if ((e.flags & 524288) !== 0) n = !0;
                else if ((e.flags & 262144) !== 0) break
            }
            if (e.tag === 10) {
                var i = e.alternate;
                if (i === null) throw Error(m(387));
                if (i = i.memoizedProps, i !== null) {
                    var f = e.type;
                    Il(e.pendingProps.value, i.value) || (l !== null ? l.push(f) : l = [f])
                }
            } else if (e === nn.current) {
                if (i = e.alternate, i === null) throw Error(m(387));
                i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push($u) : l = [$u])
            }
            e = e.return
        }
        return l !== null && Hf(t, l, a, u), t.flags |= 262144, l !== null
    }

    function qn(l) {
        for (l = l.firstContext; l !== null;) {
            if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function wa(l) {
        La = l, Jt = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function Dl(l) {
        return $s(La, l)
    }

    function Bn(l, t) {
        return La === null && wa(l), $s(l, t)
    }

    function $s(l, t) {
        var a = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: a,
                next: null
            }, Jt === null) {
            if (l === null) throw Error(m(308));
            Jt = t, l.dependencies = {
                lanes: 0,
                firstContext: t
            }, l.flags |= 524288
        } else Jt = Jt.next = t;
        return a
    }
    var Ky = typeof AbortController < "u" ? AbortController : function () {
            var l = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function (a, u) {
                        l.push(u)
                    }
                };
            this.abort = function () {
                t.aborted = !0, l.forEach(function (a) {
                    return a()
                })
            }
        },
        wy = s.unstable_scheduleCallback,
        Jy = s.unstable_NormalPriority,
        gl = {
            $$typeof: Ql,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Cf() {
        return {
            controller: new Ky,
            data: new Map,
            refCount: 0
        }
    }

    function Te(l) {
        l.refCount--, l.refCount === 0 && wy(Jy, function () {
            l.controller.abort()
        })
    }

    function Is(l, t) {
        if ((l.pendingLanes & 4194048) !== 0) {
            var a = l.transitionTypes;
            for (a === null && (a = l.transitionTypes = []), l = 0; l < t.length; l++) {
                var u = t[l];
                a.indexOf(u) === -1 && a.push(u)
            }
        }
    }
    var ze = null;

    function ky(l) {
        var t = l.transitionTypes;
        return l.transitionTypes = null, t
    }
    var Ee = null,
        Rf = 0,
        Ja = 0,
        Du = null;

    function Fy(l, t) {
        if (Ee === null) {
            var a = Ee = [];
            Rf = 0, Ja = Fc(), Du = {
                status: "pending",
                value: void 0,
                then: function (u) {
                    a.push(u)
                }
            }
        }
        return Rf++, t.then(Ps, Ps), t
    }

    function Ps() {
        if (--Rf === 0 && (ze = null, Ee !== null)) {
            Du !== null && (Du.status = "fulfilled");
            var l = Ee;
            Ee = null, Ja = 0, Du = null;
            for (var t = 0; t < l.length; t++)(0, l[t])()
        }
    }

    function Wy(l, t) {
        var a = [],
            u = {
                status: "pending",
                value: null,
                reason: null,
                then: function (e) {
                    a.push(e)
                }
            };
        return l.then(function () {
            u.status = "fulfilled", u.value = t;
            for (var e = 0; e < a.length; e++)(0, a[e])(t)
        }, function (e) {
            for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)(0, a[e])(void 0)
        }), u
    }
    var lm = H.S;
    H.S = function (l, t) {
        if (w0 = kl(), typeof t == "object" && t !== null && typeof t.then == "function" && Fy(l, t), ze !== null)
            for (var a = Ku; a !== null;) Is(a, ze), a = a.next;
        if (a = l.types, a !== null) {
            for (var u = Ku; u !== null;) Is(u, a), u = u.next;
            if (Ja !== 0) {
                u = ze, u === null && (u = ze = []);
                for (var e = 0; e < a.length; e++) {
                    var n = a[e];
                    u.indexOf(n) === -1 && u.push(n)
                }
            }
        }
        lm !== null && lm(l, t)
    };
    var ka = Nt(null);

    function qf() {
        var l = ka.current;
        return l !== null ? l : ul.pooledCache
    }

    function Yn(l, t) {
        t === null ? nl(ka, ka.current) : nl(ka, t.pool)
    }

    function tm() {
        var l = qf();
        return l === null ? null : {
            parent: gl._currentValue,
            pool: l
        }
    }
    var Mu = Error(m(460)),
        Bf = Error(m(474)),
        jn = Error(m(542)),
        Gn = {
            then: function () {}
        };

    function am(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function um(l, t, a) {
        switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Dt, Dt), t = a), t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason, nm(l), l === void 0 && !("reason" in t) ? Error(m(600)) : l;
        default:
            if (typeof t.status == "string") t.then(Dt, Dt);
            else {
                if (l = ul, l !== null && 100 < l.shellSuspendCounter) throw Error(m(482));
                l = t, l.status = "pending", l.then(function (u) {
                    if (t.status === "pending") {
                        var e = t;
                        e.status = "fulfilled", e.value = u
                    }
                }, function (u) {
                    if (t.status === "pending") {
                        var e = t;
                        e.status = "rejected", e.reason = u
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason, nm(l), l
            }
            throw Wa = t, Mu
        }
    }

    function Fa(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Wa = a, Mu) : a
        }
    }
    var Wa = null;

    function em() {
        if (Wa === null) throw Error(m(459));
        var l = Wa;
        return Wa = null, l
    }

    function nm(l) {
        if (l === Mu || l === jn) throw Error(m(483))
    }
    var Uu = null,
        Ae = 0;

    function Qn(l) {
        var t = Ae;
        return Ae += 1, Uu === null && (Uu = []), um(Uu, l, t)
    }

    function da(l, t) {
        t = t.props.ref, l.ref = t !== void 0 ? t : null
    }

    function Xn(l, t) {
        throw t.$$typeof === un ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(m(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }

    function im(l) {
        function t(h, o) {
            if (l) {
                var v = h.deletions;
                v === null ? (h.deletions = [o], h.flags |= 16) : v.push(o)
            }
        }

        function a(h, o) {
            if (!l) return null;
            for (; o !== null;) t(h, o), o = o.sibling;
            return null
        }

        function u(h) {
            for (var o = new Map; h !== null;) h.key === null ? o.set(h.index, h) : o.set(h.key, h), h = h.sibling;
            return o
        }

        function e(h, o) {
            return h = Kt(h, o), h.index = 0, h.sibling = null, h
        }

        function n(h, o, v) {
            return h.index = v, l ? (v = h.alternate, v !== null ? (v = v.index, v < o ? (h.flags |= 2, o) : v) : (h.flags |= 134217730, o)) : (h.flags |= 1048576, o)
        }

        function i(h) {
            return l && h.alternate === null && (h.flags |= 134217730), h
        }

        function f(h, o, v, S) {
            return o === null || o.tag !== 6 ? (o = Nf(v, h.mode, S), o.return = h, o) : (o = e(o, v), o.return = h, o)
        }

        function c(h, o, v, S) {
            var N = v.type;
            return N === Ot ? (h = r(h, o, v.props.children, S, v.key), da(h, v), h) : o !== null && (o.elementType === N || typeof N == "object" && N !== null && N.$$typeof === al && Fa(N) === o.type) ? (o = e(o, v.props), da(o, v), o.return = h, o) : (o = Un(v.type, v.key, v.props, null, h.mode, S), da(o, v), o.return = h, o)
        }

        function y(h, o, v, S) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = _f(v, h.mode, S), o.return = h, o) : (o = e(o, v.children || []), o.return = h, o)
        }

        function r(h, o, v, S, N) {
            return o === null || o.tag !== 7 ? (o = Va(v, h.mode, S, N), o.return = h, o) : (o = e(o, v), o.return = h, o)
        }

        function T(h, o, v) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = Nf("" + o, h.mode, v), o.return = h, o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                case qa:
                    return v = Un(o.type, o.key, o.props, null, h.mode, v), da(v, o), v.return = h, v;
                case ta:
                    return o = _f(o, h.mode, v), o.return = h, o;
                case al:
                    return o = Fa(o), T(h, o, v)
                }
                if (ae(o) || te(o)) return o = Va(o, h.mode, v, null), o.return = h, o;
                if (typeof o.then == "function") return T(h, Qn(o), v);
                if (o.$$typeof === Ql) return T(h, Bn(h, o), v);
                Xn(h, o)
            }
            return null
        }

        function d(h, o, v, S) {
            var N = o !== null ? o.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return N !== null ? null : f(h, o, "" + v, S);
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                case qa:
                    return v.key === N ? c(h, o, v, S) : null;
                case ta:
                    return v.key === N ? y(h, o, v, S) : null;
                case al:
                    return v = Fa(v), d(h, o, v, S)
                }
                if (ae(v) || te(v)) return N !== null ? null : r(h, o, v, S, null);
                if (typeof v.then == "function") return d(h, o, Qn(v), S);
                if (v.$$typeof === Ql) return d(h, o, Bn(h, v), S);
                Xn(h, v)
            }
            return null
        }

        function g(h, o, v, S, N) {
            if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return h = h.get(v) || null, f(o, h, "" + S, N);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case qa:
                    return h = h.get(S.key === null ? v : S.key) || null, c(o, h, S, N);
                case ta:
                    return h = h.get(S.key === null ? v : S.key) || null, y(o, h, S, N);
                case al:
                    return S = Fa(S), g(h, o, v, S, N)
                }
                if (ae(S) || te(S)) return h = h.get(v) || null, r(o, h, S, N, null);
                if (typeof S.then == "function") return g(h, o, v, Qn(S), N);
                if (S.$$typeof === Ql) return g(h, o, v, Bn(o, S), N);
                Xn(o, S)
            }
            return null
        }

        function A(h, o, v, S) {
            for (var N = null, x = null, M = o, p = o = 0, Sl = null; M !== null && p < v.length; p++) {
                M.index > p ? (Sl = M, M = null) : Sl = M.sibling;
                var K = d(h, M, v[p], S);
                if (K === null) {
                    M === null && (M = Sl);
                    break
                }
                l && M && K.alternate === null && t(h, M), o = n(K, o, p), x === null ? N = K : x.sibling = K, x = K, M = Sl
            }
            if (p === v.length) return a(h, M), j && wt(h, p), N;
            if (M === null) {
                for (; p < v.length; p++) M = T(h, v[p], S), M !== null && (o = n(M, o, p), x === null ? N = M : x.sibling = M, x = M);
                return j && wt(h, p), N
            }
            for (M = u(M); p < v.length; p++) Sl = g(M, h, p, v[p], S), Sl !== null && (l && (K = Sl.alternate, K !== null && M.delete(K.key === null ? p : K.key)), o = n(Sl, o, p), x === null ? N = Sl : x.sibling = Sl, x = Sl);
            return l && M.forEach(function (Ha) {
                return t(h, Ha)
            }), j && wt(h, p), N
        }

        function _(h, o, v, S) {
            if (v == null) throw Error(m(151));
            for (var N = null, x = null, M = o, p = o = 0, Sl = null, K = v.next(); M !== null && !K.done; p++, K = v.next()) {
                M.index > p ? (Sl = M, M = null) : Sl = M.sibling;
                var Ha = d(h, M, K.value, S);
                if (Ha === null) {
                    M === null && (M = Sl);
                    break
                }
                l && M && Ha.alternate === null && t(h, M), o = n(Ha, o, p), x === null ? N = Ha : x.sibling = Ha, x = Ha, M = Sl
            }
            if (K.done) return a(h, M), j && wt(h, p), N;
            if (M === null) {
                for (; !K.done; p++, K = v.next()) K = T(h, K.value, S), K !== null && (o = n(K, o, p), x === null ? N = K : x.sibling = K, x = K);
                return j && wt(h, p), N
            }
            for (M = u(M); !K.done; p++, K = v.next()) K = g(M, h, p, K.value, S), K !== null && (l && (Sl = K.alternate, Sl !== null && M.delete(Sl.key === null ? p : Sl.key)), o = n(K, o, p), x === null ? N = K : x.sibling = K, x = K);
            return l && M.forEach(function (pg) {
                return t(h, pg)
            }), j && wt(h, p), N
        }

        function q(h, o, v, S) {
            if (typeof v == "object" && v !== null && v.type === Ot && v.key === null && v.props.ref === void 0 && (v = v.props.children), typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                case qa:
                    l: {
                        for (var N = v.key; o !== null;) {
                            if (o.key === N) {
                                if (N = v.type, N === Ot) {
                                    if (o.tag === 7) {
                                        a(h, o.sibling), S = e(o, v.props.children), da(S, v), S.return = h, h = S;
                                        break l
                                    }
                                } else if (o.elementType === N || typeof N == "object" && N !== null && N.$$typeof === al && Fa(N) === o.type) {
                                    a(h, o.sibling), S = e(o, v.props), da(S, v), S.return = h, h = S;
                                    break l
                                }
                                a(h, o);
                                break
                            } else t(h, o);
                            o = o.sibling
                        }
                        v.type === Ot ? (S = Va(v.props.children, h.mode, S, v.key), da(S, v), S.return = h, h = S) : (S = Un(v.type, v.key, v.props, null, h.mode, S), da(S, v), S.return = h, h = S)
                    }
                    return i(h);
                case ta:
                    l: {
                        for (N = v.key; o !== null;) {
                            if (o.key === N)
                                if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                                    a(h, o.sibling), S = e(o, v.children || []), S.return = h, h = S;
                                    break l
                                } else {
                                    a(h, o);
                                    break
                                }
                            else t(h, o);
                            o = o.sibling
                        }
                        S = _f(v, h.mode, S),
                        S.return = h,
                        h = S
                    }
                    return i(h);
                case al:
                    return v = Fa(v), q(h, o, v, S)
                }
                if (ae(v)) return A(h, o, v, S);
                if (te(v)) {
                    if (N = te(v), typeof N != "function") throw Error(m(150));
                    return v = N.call(v), _(h, o, v, S)
                }
                if (typeof v.then == "function") return q(h, o, Qn(v), S);
                if (v.$$typeof === Ql) return q(h, o, Bn(h, v), S);
                Xn(h, v)
            }
            return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (a(h, o.sibling), S = e(o, v), S.return = h, h = S) : (a(h, o), S = Nf(v, h.mode, S), S.return = h, h = S), i(h)) : a(h, o)
        }
        return function (h, o, v, S) {
            try {
                Ae = 0;
                var N = q(h, o, v, S);
                return Uu = null, N
            } catch (M) {
                if (M === Mu || M === jn) throw M;
                var x = Zl(29, M, null, h.mode);
                return x.lanes = S, x.return = h, x
            }
        }
    }
    var $a = im(!0),
        fm = im(!1),
        ha = !1;

    function Yf(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function jf(l, t) {
        l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function ya(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function va(l, t, a) {
        var u = l.updateQueue;
        if (u === null) return null;
        if (u = u.shared, (F & 2) !== 0) {
            var e = u.pending;
            return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Mn(l), Ls(l, null, a), t
        }
        return Dn(l, u, t, a), Mn(l)
    }

    function Oe(l, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
            var u = t.lanes;
            u &= l.pendingLanes, a |= u, t.lanes = a, ko(l, a)
        }
    }

    function Gf(l, t) {
        var a = l.updateQueue,
            u = l.alternate;
        if (u !== null && (u = u.updateQueue, a === u)) {
            var e = null,
                n = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var i = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? e = n = i : n = n.next = i, a = a.next
                } while (a !== null);
                n === null ? e = n = t : n = n.next = t
            } else e = n = t;
            a = {
                baseState: u.baseState,
                firstBaseUpdate: e,
                lastBaseUpdate: n,
                shared: u.shared,
                callbacks: u.callbacks
            }, l.updateQueue = a;
            return
        }
        l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t
    }
    var Qf = !1;

    function Ne() {
        if (Qf) {
            var l = Du;
            if (l !== null) throw l
        }
    }

    function _e(l, t, a, u) {
        Qf = !1;
        var e = l.updateQueue;
        ha = !1;
        var n = e.firstBaseUpdate,
            i = e.lastBaseUpdate,
            f = e.shared.pending;
        if (f !== null) {
            e.shared.pending = null;
            var c = f,
                y = c.next;
            c.next = null, i === null ? n = y : i.next = y, i = c;
            var r = l.alternate;
            r !== null && (r = r.updateQueue, f = r.lastBaseUpdate, f !== i && (f === null ? r.firstBaseUpdate = y : f.next = y, r.lastBaseUpdate = c))
        }
        if (n !== null) {
            var T = e.baseState;
            i = 0, r = y = c = null, f = n;
            do {
                var d = f.lane & -536870913,
                    g = d !== f.lane;
                if (g ? (V & d) === d : (u & d) === d) {
                    d !== 0 && d === Ja && (Qf = !0), r !== null && (r = r.next = {
                        lane: 0,
                        tag: f.tag,
                        payload: f.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var A = l,
                            _ = f;d = t;
                        var q = a;
                        switch (_.tag) {
                        case 1:
                            if (A = _.payload, typeof A == "function") {
                                T = A.call(q, T, d);
                                break l
                            }
                            T = A;
                            break l;
                        case 3:
                            A.flags = A.flags & -65537 | 128;
                        case 0:
                            if (A = _.payload, d = typeof A == "function" ? A.call(q, T, d) : A, d == null) break l;
                            T = w({}, T, d);
                            break l;
                        case 2:
                            ha = !0
                        }
                    }
                    d = f.callback, d !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [d] : g.push(d))
                } else g = {
                    lane: d,
                    tag: f.tag,
                    payload: f.payload,
                    callback: f.callback,
                    next: null
                }, r === null ? (y = r = g, c = T) : r = r.next = g, i |= d;
                if (f = f.next, f === null) {
                    if (f = e.shared.pending, f === null) break;
                    g = f, f = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null
                }
            } while (!0);
            r === null && (c = T), e.baseState = c, e.firstBaseUpdate = y, e.lastBaseUpdate = r, n === null && (e.shared.lanes = 0), Ea |= i, l.lanes = i, l.memoizedState = T
        }
    }

    function cm(l, t) {
        if (typeof l != "function") throw Error(m(191, l));
        l.call(t)
    }

    function om(l, t) {
        var a = l.callbacks;
        if (a !== null)
            for (l.callbacks = null, l = 0; l < a.length; l++) cm(a[l], t)
    }
    var ga = Nt(null),
        Zn = Nt(0);

    function sm(l, t) {
        l = Pt, nl(Zn, l), nl(ga, t), Pt = l | t.baseLanes
    }

    function Xf() {
        nl(Zn, Pt), nl(ga, ga.current)
    }

    function Zf() {
        Pt = Zn.current, Nl(ga), Nl(Zn)
    }
    var Ml = Nt(null),
        Cl = null;

    function ra(l) {
        var t = l.alternate;
        nl(Ul, Ul.current & 1), nl(Ml, l), Cl === null && (t === null || ga.current !== null || t.memoizedState !== null) && (Cl = l)
    }

    function Vf(l) {
        nl(Ul, Ul.current), nl(Ml, l), Cl === null && (Cl = l)
    }

    function mm(l) {
        l.tag === 22 ? (nl(Ul, Ul.current), nl(Ml, l), Cl === null && (Cl = l)) : ba()
    }

    function ba() {
        nl(Ul, Ul.current), nl(Ml, Ml.current)
    }

    function Pl(l) {
        Nl(Ml), Cl === l && (Cl = null), Nl(Ul)
    }
    var Ul = Nt(0);

    function De(l, t) {
        nl(Ml, Ml.current), nl(Ul, t)
    }

    function xf(l) {
        Nl(Ul), Nl(Ml), Cl === l && (Cl = null)
    }

    function Vn(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || mo(a) || ho(a))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === l) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === l) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Ft = 0,
        R = null,
        tl = null,
        rl = null,
        xn = !1,
        pu = !1,
        Ia = !1,
        Ln = 0,
        Me = 0,
        Hu = null,
        $y = 0;

    function dl() {
        throw Error(m(321))
    }

    function Lf(l, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < l.length; a++)
            if (!Il(l[a], t[a])) return !1;
        return !0
    }

    function Kf(l, t, a, u, e, n) {
        return Ft = n, R = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = l === null || l.memoizedState === null ? km : Fm, Ia = !1, n = a(u, e), Ia = !1, pu && (n = hm(t, a, u, e)), dm(l), n
    }

    function dm(l) {
        H.H = $n;
        var t = tl !== null && tl.next !== null;
        if (Ft = 0, rl = tl = R = null, xn = !1, Me = 0, Hu = null, t) throw Error(m(300));
        l === null || bl || (l = l.dependencies, l !== null && qn(l) && (bl = !0))
    }

    function hm(l, t, a, u) {
        R = l;
        var e = 0;
        do {
            if (pu && (Hu = null), Me = 0, pu = !1, 25 <= e) throw Error(m(301));
            if (e += 1, rl = tl = null, l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
            }
            H.H = nv, n = t(a, u)
        } while (pu);
        return n
    }

    function Iy() {
        var l = H.H,
            t = l.useState()[0];
        return t = typeof t.then == "function" ? Ue(t) : t, l = l.useState()[0], (tl !== null ? tl.memoizedState : null) !== l && (R.flags |= 1024), t
    }

    function wf() {
        var l = Ln !== 0;
        return Ln = 0, l
    }

    function Jf(l, t, a) {
        t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a
    }

    function kf(l) {
        if (xn) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null), l = l.next
            }
            xn = !1
        }
        Ft = 0, rl = tl = R = null, pu = !1, Me = Ln = 0, Hu = null
    }

    function Bl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return rl === null ? R.memoizedState = rl = l : rl = rl.next = l, rl
    }

    function yl() {
        if (tl === null) {
            var l = R.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = tl.next;
        var t = rl === null ? R.memoizedState : rl.next;
        if (t !== null) rl = t, tl = l;
        else {
            if (l === null) throw R.alternate === null ? Error(m(467)) : Error(m(310));
            tl = l, l = {
                memoizedState: tl.memoizedState,
                baseState: tl.baseState,
                baseQueue: tl.baseQueue,
                queue: tl.queue,
                next: null
            }, rl === null ? R.memoizedState = rl = l : rl = rl.next = l
        }
        return rl
    }

    function Kn() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Ue(l) {
        var t = Me;
        return Me += 1, Hu === null && (Hu = []), l = um(Hu, l, t), t = R, (rl === null ? t.memoizedState : rl.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? km : Fm), l
    }

    function wn(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return Ue(l);
            if (l.$$typeof === cu) return;
            if (l.$$typeof === Ql) return Dl(l)
        }
        throw Error(m(438, String(l)))
    }

    function Ff(l) {
        var t = null,
            a = R.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
            var u = R.alternate;
            u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
                data: u.data.map(function (e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), a === null && (a = Kn(), R.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
            for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = le;
        return t.index++, a
    }

    function Wt(l, t) {
        return typeof t == "function" ? t(l) : t
    }

    function Jn(l) {
        var t = yl();
        return Wf(t, tl, l)
    }

    function Wf(l, t, a) {
        var u = l.queue;
        if (u === null) throw Error(m(311));
        u.lastRenderedReducer = a;
        var e = l.baseQueue,
            n = u.pending;
        if (n !== null) {
            if (e !== null) {
                var i = e.next;
                e.next = n.next, n.next = i
            }
            t.baseQueue = e = n, u.pending = null
        }
        if (n = l.baseState, e === null) l.memoizedState = n;
        else {
            t = e.next;
            var f = i = null,
                c = null,
                y = t,
                r = !1;
            do {
                var T = y.lane & -536870913;
                if (T !== y.lane ? (V & T) === T : (Ft & T) === T) {
                    var d = y.revertLane;
                    if (d === 0) c !== null && (c = c.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    }), T === Ja && (r = !0);
                    else if ((Ft & d) === d) {
                        y = y.next, d === Ja && (r = !0);
                        continue
                    } else T = {
                        lane: 0,
                        revertLane: y.revertLane,
                        gesture: null,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    }, c === null ? (f = c = T, i = n) : c = c.next = T, R.lanes |= d, Ea |= d;
                    T = y.action, Ia && a(n, T), n = y.hasEagerState ? y.eagerState : a(n, T)
                } else d = {
                    lane: T,
                    revertLane: y.revertLane,
                    gesture: y.gesture,
                    action: y.action,
                    hasEagerState: y.hasEagerState,
                    eagerState: y.eagerState,
                    next: null
                }, c === null ? (f = c = d, i = n) : c = c.next = d, R.lanes |= T, Ea |= T;
                y = y.next
            } while (y !== null && y !== t);
            if (c === null ? i = n : c.next = f, !Il(n, l.memoizedState) && (bl = !0, r && (a = Du, a !== null))) throw a;
            l.memoizedState = n, l.baseState = i, l.baseQueue = c, u.lastRenderedState = n
        }
        return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]
    }

    function $f(l) {
        var t = yl(),
            a = t.queue;
        if (a === null) throw Error(m(311));
        a.lastRenderedReducer = l;
        var u = a.dispatch,
            e = a.pending,
            n = t.memoizedState;
        if (e !== null) {
            a.pending = null;
            var i = e = e.next;
            do n = l(n, i.action), i = i.next; while (i !== e);
            Il(n, t.memoizedState) || (bl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n
        }
        return [n, u]
    }

    function ym(l, t, a) {
        var u = R,
            e = yl(),
            n = j;
        if (n) {
            if (a === void 0) throw Error(m(407));
            a = a()
        } else a = t();
        var i = !Il((tl || e).memoizedState, a);
        if (i && (e.memoizedState = a, bl = !0), e = e.queue, lc(rm.bind(null, u, e, l), [l]), l = e.getSnapshot !== t || i || rl !== null && (rl.memoizedState.tag & 1) !== 0, Cu(l ? 9 : 8, {
                destroy: void 0
            }, gm.bind(null, u, e, a, t), null), l) {
            if (u.flags |= 2048, ul === null) throw Error(m(349));
            n || (Ft & 127) !== 0 || vm(u, t, a)
        }
        return a
    }

    function vm(l, t, a) {
        l.flags |= 16384, l = {
            getSnapshot: t,
            value: a
        }, t = R.updateQueue, t === null ? (t = Kn(), R.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l))
    }

    function gm(l, t, a, u) {
        t.value = a, t.getSnapshot = u, bm(t) && Sm(l)
    }

    function rm(l, t, a) {
        return a(function () {
            bm(t) && Sm(l)
        })
    }

    function bm(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var a = t();
            return !Il(l, a)
        } catch {
            return !0
        }
    }

    function Sm(l) {
        var t = Za(l, 2);
        t !== null && Kl(t, l, 2)
    }

    function If(l) {
        var t = Bl();
        if (typeof l == "function") {
            var a = l;
            if (l = a(), Ia) {
                na(!0);
                try {
                    a()
                } finally {
                    na(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wt,
            lastRenderedState: l
        }, t
    }

    function Tm(l, t, a, u) {
        return l.baseState = a, Wf(l, tl, typeof u == "function" ? u : Wt)
    }

    function Py(l, t, a, u, e) {
        if (Wn(l)) throw Error(m(485));
        if (l = t.action, l !== null) {
            var n = {
                payload: e,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (i) {
                    n.listeners.push(i)
                }
            };
            H.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, zm(t, n)) : (n.next = a.next, t.pending = a.next = n)
        }
    }

    function zm(l, t) {
        var a = t.action,
            u = t.payload,
            e = l.state;
        if (t.isTransition) {
            var n = H.T,
                i = {};
            i.types = n !== null ? n.types : null, H.T = i;
            try {
                var f = a(e, u),
                    c = H.S;
                c !== null && c(i, f), Em(l, t, f)
            } catch (y) {
                Pf(l, t, y)
            } finally {
                n !== null && i.types !== null && (n.types = i.types), H.T = n
            }
        } else try {
            n = a(e, u), Em(l, t, n)
        } catch (y) {
            Pf(l, t, y)
        }
    }

    function Em(l, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (u) {
            Am(l, t, u)
        }, function (u) {
            return Pf(l, t, u)
        }) : Am(l, t, a)
    }

    function Am(l, t, a) {
        t.status = "fulfilled", t.value = a, Om(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, zm(l, a)))
    }

    function Pf(l, t, a) {
        var u = l.pending;
        if (l.pending = null, u !== null) {
            u = u.next;
            do t.status = "rejected", t.reason = a, Om(t), t = t.next; while (t !== u)
        }
        l.action = null
    }

    function Om(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)(0, l[t])()
    }

    function Nm(l, t) {
        return t
    }

    function _m(l, t) {
        if (j) {
            var a = ul.formState;
            if (a !== null) {
                l: {
                    var u = R;
                    if (j) {
                        if (il) {
                            t: {
                                for (var e = il, n = st; e.nodeType !== 8;) {
                                    if (!n) {
                                        e = null;
                                        break t
                                    }
                                    if (e = dt(e.nextSibling), e === null) {
                                        e = null;
                                        break t
                                    }
                                }
                                n = e.data,
                                e = n === "F!" || n === "F" ? e : null
                            }
                            if (e) {
                                il = dt(e.nextSibling), u = e.data === "F!";
                                break l
                            }
                        }
                        sa(u)
                    }
                    u = !1
                }
                u && (t = a[0])
            }
        }
        return a = Bl(), a.memoizedState = a.baseState = t, u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Nm,
            lastRenderedState: t
        }, a.queue = u, a = Km.bind(null, R, u), u.dispatch = a, u = If(!1), n = nc.bind(null, R, !1, u.queue), u = Bl(), e = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, u.queue = e, a = Py.bind(null, R, e, n, a), e.dispatch = a, u.memoizedState = l, [t, a, !1]
    }

    function Dm(l) {
        var t = yl();
        return Mm(t, tl, l)
    }

    function Mm(l, t, a) {
        if (t = Wf(l, t, Nm)[0], l = Jn(Wt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var u = Ue(t)
        } catch (i) {
            throw i === Mu ? jn : i
        } else u = t;
        t = yl();
        var e = t.queue,
            n = e.dispatch;
        return a !== t.memoizedState && (R.flags |= 2048, Cu(9, {
            destroy: void 0
        }, lv.bind(null, e, a), null)), [u, n, l]
    }

    function lv(l, t) {
        l.action = t
    }

    function Um(l) {
        var t = yl(),
            a = tl;
        if (a !== null) return Mm(t, a, l);
        yl(), t = t.memoizedState, a = yl();
        var u = a.queue.dispatch;
        return a.memoizedState = l, [t, u, !1]
    }

    function Cu(l, t, a, u) {
        return l = {
            tag: l,
            create: a,
            deps: u,
            inst: t,
            next: null
        }, t = R.updateQueue, t === null && (t = Kn(), R.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l
    }

    function pm() {
        return yl().memoizedState
    }

    function kn(l, t, a, u) {
        var e = Bl();
        R.flags |= l, e.memoizedState = Cu(1 | t, {
            destroy: void 0
        }, a, u === void 0 ? null : u)
    }

    function Fn(l, t, a, u) {
        var e = yl();
        u = u === void 0 ? null : u;
        var n = e.memoizedState.inst;
        tl !== null && u !== null && Lf(u, tl.memoizedState.deps) ? e.memoizedState = Cu(t, n, a, u) : (R.flags |= l, e.memoizedState = Cu(1 | t, n, a, u))
    }

    function Hm(l, t) {
        kn(8390656, 8, l, t)
    }

    function lc(l, t) {
        Fn(2048, 8, l, t)
    }

    function tv(l) {
        R.flags |= 4;
        var t = R.updateQueue;
        if (t === null) t = Kn(), R.updateQueue = t, t.events = [l];
        else {
            var a = t.events;
            a === null ? t.events = [l] : a.push(l)
        }
    }

    function Cm(l) {
        var t = yl().memoizedState;
        return tv({
                ref: t,
                nextImpl: l
            }),
            function () {
                if ((F & 2) !== 0) throw Error(m(440));
                return t.impl.apply(void 0, arguments)
            }
    }

    function Rm(l, t) {
        return Fn(4, 2, l, t)
    }

    function qm(l, t) {
        return Fn(4, 4, l, t)
    }

    function Bm(l, t) {
        if (typeof t == "function") {
            l = l();
            var a = t(l);
            return function () {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null) return l = l(), t.current = l,
            function () {
                t.current = null
            }
    }

    function Ym(l, t, a) {
        a = a != null ? a.concat([l]) : null, Fn(4, 4, Bm.bind(null, t, l), a)
    }

    function tc() {}

    function jm(l, t) {
        var a = yl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && Lf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l)
    }

    function Gm(l, t) {
        var a = yl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && Lf(t, u[1])) return u[0];
        if (u = l(), Ia) {
            na(!0);
            try {
                l()
            } finally {
                na(!1)
            }
        }
        return a.memoizedState = [u, t], u
    }

    function ac(l, t, a) {
        return a === void 0 || (Ft & 1073741824) !== 0 && (V & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = k0(), R.lanes |= l, Ea |= l, a)
    }

    function Qm(l, t, a, u) {
        return Il(a, t) ? a : ga.current !== null ? (l = ac(l, a, u), Il(l, t) || (bl = !0), l) : (Ft & 106) === 0 || (Ft & 1073741824) !== 0 && (V & 261930) === 0 ? (bl = !0, l.memoizedState = a) : (l = k0(), R.lanes |= l, Ea |= l, t)
    }

    function Xm(l, t, a, u, e) {
        var n = k.p;
        k.p = n !== 0 && 8 > n ? n : 8;
        var i = H.T,
            f = {};
        f.types = i !== null ? i.types : null, H.T = f, nc(l, !1, t, a);
        try {
            var c = e(),
                y = H.S;
            if (y !== null && y(f, c), c !== null && typeof c == "object" && typeof c.then == "function") {
                var r = Wy(c, u);
                pe(l, t, r, ut(l))
            } else pe(l, t, u, ut(l))
        } catch (T) {
            pe(l, t, {
                then: function () {},
                status: "rejected",
                reason: T
            }, ut())
        } finally {
            k.p = n, i !== null && f.types !== null && (i.types = f.types), H.T = i
        }
    }

    function av() {}

    function uc(l, t, a, u) {
        if (l.tag !== 5) throw Error(m(476));
        var e = Zm(l).queue;
        Xm(l, e, t, Ba, a === null ? av : function () {
            return Vm(l), a(u)
        })
    }

    function Zm(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: Ba,
            baseState: Ba,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wt,
                lastRenderedState: Ba
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wt,
                lastRenderedState: a
            },
            next: null
        }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
    }

    function Vm(l) {
        var t = Zm(l);
        t.next === null && (t = l.alternate.memoizedState), pe(l, t.next.queue, {}, ut())
    }

    function ec() {
        return Dl($u)
    }

    function xm() {
        return yl().memoizedState
    }

    function Lm() {
        return yl().memoizedState
    }

    function uv(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = ut();
                l = ya(a);
                var u = va(t, l, a);
                u !== null && (Kl(u, t, a), Oe(u, t, a)), t = {
                    cache: Cf()
                }, l.payload = t;
                return
            }
            t = t.return
        }
    }

    function ev(l, t, a) {
        var u = ut();
        a = {
            lane: u,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Wn(l) ? wm(t, a) : (a = Af(l, t, a, u), a !== null && (Kl(a, l, u), Jm(a, t, u)))
    }

    function Km(l, t, a) {
        var u = ut();
        pe(l, t, a, u)
    }

    function pe(l, t, a, u) {
        var e = {
            lane: u,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Wn(l)) wm(t, e);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                var i = t.lastRenderedState,
                    f = n(i, a);
                if (e.hasEagerState = !0, e.eagerState = f, Il(f, i)) return Dn(l, t, e, 0), ul === null && _n(), !1
            } catch {}
            if (a = Af(l, t, e, u), a !== null) return Kl(a, l, u), Jm(a, t, u), !0
        }
        return !1
    }

    function nc(l, t, a, u) {
        if (u = {
                lane: 2,
                revertLane: Fc(),
                gesture: null,
                action: u,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Wn(l)) {
            if (t) throw Error(m(479))
        } else t = Af(l, a, u, 2), t !== null && Kl(t, l, 2)
    }

    function Wn(l) {
        var t = l.alternate;
        return l === R || t !== null && t === R
    }

    function wm(l, t) {
        pu = xn = !0;
        var a = l.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t
    }

    function Jm(l, t, a) {
        if ((a & 4194048) !== 0) {
            var u = t.lanes;
            u &= l.pendingLanes, a |= u, t.lanes = a, ko(l, a)
        }
    }
    var $n = {
            readContext: Dl,
            use: wn,
            useCallback: dl,
            useContext: dl,
            useEffect: dl,
            useImperativeHandle: dl,
            useLayoutEffect: dl,
            useInsertionEffect: dl,
            useMemo: dl,
            useReducer: dl,
            useRef: dl,
            useState: dl,
            useDebugValue: dl,
            useDeferredValue: dl,
            useTransition: dl,
            useSyncExternalStore: dl,
            useId: dl,
            useHostTransitionStatus: dl,
            useFormState: dl,
            useActionState: dl,
            useOptimistic: dl,
            useMemoCache: dl,
            useCacheRefresh: dl,
            useEffectEvent: dl
        },
        km = {
            readContext: Dl,
            use: wn,
            useCallback: function (l, t) {
                return Bl().memoizedState = [l, t === void 0 ? null : t], l
            },
            useContext: Dl,
            useEffect: Hm,
            useImperativeHandle: function (l, t, a) {
                a = a != null ? a.concat([l]) : null, kn(4194308, 4, Bm.bind(null, t, l), a)
            },
            useLayoutEffect: function (l, t) {
                return kn(4194308, 4, l, t)
            },
            useInsertionEffect: function (l, t) {
                kn(4, 2, l, t)
            },
            useMemo: function (l, t) {
                var a = Bl();
                t = t === void 0 ? null : t;
                var u = l();
                if (Ia) {
                    na(!0);
                    try {
                        l()
                    } finally {
                        na(!1)
                    }
                }
                return a.memoizedState = [u, t], u
            },
            useReducer: function (l, t, a) {
                var u = Bl();
                if (a !== void 0) {
                    var e = a(t);
                    if (Ia) {
                        na(!0);
                        try {
                            a(t)
                        } finally {
                            na(!1)
                        }
                    }
                } else e = t;
                return u.memoizedState = u.baseState = e, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: e
                }, u.queue = l, l = l.dispatch = ev.bind(null, R, l), [u.memoizedState, l]
            },
            useRef: function (l) {
                var t = Bl();
                return l = {
                    current: l
                }, t.memoizedState = l
            },
            useState: function (l) {
                l = If(l);
                var t = l.queue,
                    a = Km.bind(null, R, t);
                return t.dispatch = a, [l.memoizedState, a]
            },
            useDebugValue: tc,
            useDeferredValue: function (l, t) {
                var a = Bl();
                return ac(a, l, t)
            },
            useTransition: function () {
                var l = If(!1);
                return l = Xm.bind(null, R, l.queue, !0, !1), Bl().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function (l, t, a) {
                var u = R,
                    e = Bl();
                if (j) {
                    if (a === void 0) throw Error(m(407));
                    a = a()
                } else {
                    if (a = t(), ul === null) throw Error(m(349));
                    (V & 127) !== 0 || vm(u, t, a)
                }
                e.memoizedState = a;
                var n = {
                    value: a,
                    getSnapshot: t
                };
                return e.queue = n, Hm(rm.bind(null, u, n, l), [l]), u.flags |= 2048, Cu(9, {
                    destroy: void 0
                }, gm.bind(null, u, n, a, t), null), a
            },
            useId: function () {
                var l = Bl(),
                    t = ul.identifierPrefix;
                if (j) {
                    var a = Ut,
                        u = Mt;
                    a = (u & ~(1 << 32 - Wl(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Ln++, 0 < a && (t += "H" + a.toString(32)), t += "_"
                } else a = $y++, t = "_" + t + "r_" + a.toString(32) + "_";
                return l.memoizedState = t
            },
            useHostTransitionStatus: ec,
            useFormState: _m,
            useActionState: _m,
            useOptimistic: function (l) {
                var t = Bl();
                t.memoizedState = t.baseState = l;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = nc.bind(null, R, !0, a), a.dispatch = t, [l, t]
            },
            useMemoCache: Ff,
            useCacheRefresh: function () {
                return Bl().memoizedState = uv.bind(null, R)
            },
            useEffectEvent: function (l) {
                var t = Bl(),
                    a = {
                        impl: l
                    };
                return t.memoizedState = a,
                    function () {
                        if ((F & 2) !== 0) throw Error(m(440));
                        return a.impl.apply(void 0, arguments)
                    }
            }
        },
        Fm = {
            readContext: Dl,
            use: wn,
            useCallback: jm,
            useContext: Dl,
            useEffect: lc,
            useImperativeHandle: Ym,
            useInsertionEffect: Rm,
            useLayoutEffect: qm,
            useMemo: Gm,
            useReducer: Jn,
            useRef: pm,
            useState: function () {
                return Jn(Wt)
            },
            useDebugValue: tc,
            useDeferredValue: function (l, t) {
                var a = yl();
                return Qm(a, tl.memoizedState, l, t)
            },
            useTransition: function () {
                var l = Jn(Wt)[0],
                    t = yl().memoizedState;
                return [typeof l == "boolean" ? l : Ue(l), t]
            },
            useSyncExternalStore: ym,
            useId: xm,
            useHostTransitionStatus: ec,
            useFormState: Dm,
            useActionState: Dm,
            useOptimistic: function (l, t) {
                var a = yl();
                return Tm(a, tl, l, t)
            },
            useMemoCache: Ff,
            useCacheRefresh: Lm,
            useEffectEvent: Cm
        },
        nv = {
            readContext: Dl,
            use: wn,
            useCallback: jm,
            useContext: Dl,
            useEffect: lc,
            useImperativeHandle: Ym,
            useInsertionEffect: Rm,
            useLayoutEffect: qm,
            useMemo: Gm,
            useReducer: $f,
            useRef: pm,
            useState: function () {
                return $f(Wt)
            },
            useDebugValue: tc,
            useDeferredValue: function (l, t) {
                var a = yl();
                return tl === null ? ac(a, l, t) : Qm(a, tl.memoizedState, l, t)
            },
            useTransition: function () {
                var l = $f(Wt)[0],
                    t = yl().memoizedState;
                return [typeof l == "boolean" ? l : Ue(l), t]
            },
            useSyncExternalStore: ym,
            useId: xm,
            useHostTransitionStatus: ec,
            useFormState: Um,
            useActionState: Um,
            useOptimistic: function (l, t) {
                var a = yl();
                return tl !== null ? Tm(a, tl, l, t) : (a.baseState = l, [l, a.queue.dispatch])
            },
            useMemoCache: Ff,
            useCacheRefresh: Lm,
            useEffectEvent: Cm
        };

    function ic(l, t, a, u) {
        t = l.memoizedState, a = a(u, t), a = a == null ? t : w({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a)
    }
    var fc = {
        enqueueSetState: function (l, t, a) {
            l = l._reactInternals;
            var u = ut(),
                e = ya(u);
            e.payload = t, a != null && (e.callback = a), t = va(l, e, u), t !== null && (Kl(t, l, u), Oe(t, l, u))
        },
        enqueueReplaceState: function (l, t, a) {
            l = l._reactInternals;
            var u = ut(),
                e = ya(u);
            e.tag = 1, e.payload = t, a != null && (e.callback = a), t = va(l, e, u), t !== null && (Kl(t, l, u), Oe(t, l, u))
        },
        enqueueForceUpdate: function (l, t) {
            l = l._reactInternals;
            var a = ut(),
                u = ya(a);
            u.tag = 2, t != null && (u.callback = t), t = va(l, u, a), t !== null && (Kl(t, l, a), Oe(t, l, a))
        }
    };

    function Wm(l, t, a, u, e, n, i) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, i) : t.prototype && t.prototype.isPureReactComponent ? !ge(a, u) || !ge(e, n) : !0
    }

    function $m(l, t, a, u) {
        l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && fc.enqueueReplaceState(t, t.state, null)
    }

    function Pa(l, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var u in t) u !== "ref" && (a[u] = t[u])
        }
        if (l = l.defaultProps) {
            a === t && (a = w({}, a));
            for (var e in l) a[e] === void 0 && (a[e] = l[e])
        }
        return a
    }

    function Im(l) {
        Nn(l)
    }

    function Pm(l) {
        console.error(l)
    }

    function l0(l) {
        Nn(l)
    }

    function In(l, t) {
        try {
            var a = l.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (u) {
            setTimeout(function () {
                throw u
            })
        }
    }

    function t0(l, t, a) {
        try {
            var u = l.onCaughtError;
            u(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function () {
                throw e
            })
        }
    }

    function cc(l, t, a) {
        return a = ya(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function () {
            In(l, t)
        }, a
    }

    function a0(l) {
        return l = ya(l), l.tag = 3, l
    }

    function u0(l, t, a, u) {
        var e = a.type.getDerivedStateFromError;
        if (typeof e == "function") {
            var n = u.value;
            l.payload = function () {
                return e(n)
            }, l.callback = function () {
                t0(t, a, u)
            }
        }
        var i = a.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function () {
            t0(t, a, u), typeof e != "function" && (Aa === null ? Aa = new Set([this]) : Aa.add(this));
            var f = u.stack;
            this.componentDidCatch(u.value, {
                componentStack: f !== null ? f : ""
            })
        })
    }

    function iv(l, t, a, u, e) {
        if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            if (t = a.alternate, t !== null && Ka(t, a, e, !0), a = Ml.current, a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                case 19:
                    return Cl === null ? Si() : a.alternate === null && hl === 0 && (hl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === Gn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([u]) : t.add(u), wc(l, u, e)), !1;
                case 22:
                    return a.flags |= 65536, u === Gn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u])
                    }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([u]) : a.add(u)), wc(l, u, e)), !1
                }
                throw Error(m(435, a.tag))
            }
            return wc(l, u, e), Si(), !1
        }
        if (j) return t = Ml.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Mf && (l = Error(m(422), {
            cause: u
        }), Se(ft(l, a)))) : (u !== Mf && (t = Error(m(423), {
            cause: u
        }), Se(ft(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = ft(u, a), e = cc(l.stateNode, u, e), Gf(l, e), hl !== 4 && (hl = 2)), !1;
        var n = Error(m(520), {
            cause: u
        });
        if (n = ft(n, a), Ge === null ? Ge = [n] : Ge.push(n), hl !== 4 && (hl = 2), t === null) return !0;
        u = ft(u, a), a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536, l = e & -e, a.lanes |= l, l = cc(a.stateNode, u, l), Gf(a, l), !1;
            case 1:
                if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Aa === null || !Aa.has(n)))) return a.flags |= 65536, e &= -e, a.lanes |= e, e = a0(e), u0(e, l, a, u), Gf(a, e), !1;
                break;
            case 22:
                if (a.memoizedState !== null) return a.flags |= 65536, !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var oc = Error(m(461)),
        bl = !1;

    function Tl(l, t, a, u) {
        t.child = l === null ? fm(t, null, a, u) : $a(t, l.child, a, u)
    }

    function e0(l, t, a, u, e) {
        a = a.render;
        var n = t.ref;
        if ("ref" in u) {
            var i = {};
            for (var f in u) f !== "ref" && (i[f] = u[f])
        } else i = u;
        return wa(t), u = Kf(l, t, a, i, n, e), f = wf(), l !== null && !bl ? (Jf(l, t, e), $t(l, t, e)) : (j && f && Hn(t), t.flags |= 1, Tl(l, t, u, e), t.child)
    }

    function n0(l, t, a, u, e) {
        if (l === null) {
            var n = a.type;
            return typeof n == "function" && !Of(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, i0(l, t, n, u, e)) : (l = Un(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (n = l.child, !rc(l, e)) {
            var i = n.memoizedProps;
            if (a = a.compare, a = a !== null ? a : ge, a(i, u) && l.ref === t.ref) return $t(l, t, e)
        }
        return t.flags |= 1, l = Kt(n, u), l.ref = t.ref, l.return = t, t.child = l
    }

    function i0(l, t, a, u, e) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (ge(n, u) && l.ref === t.ref)
                if (bl = !1, t.pendingProps = u = n, rc(l, e))(l.flags & 131072) !== 0 && (bl = !0);
                else return t.lanes = l.lanes, $t(l, t, e)
        }
        return sc(l, t, a, u, e)
    }

    function f0(l, t, a, u) {
        var e = u.children,
            n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), u.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | a : a, l !== null) {
                    for (u = t.child = l.child, e = 0; u !== null;) e = e | u.lanes | u.childLanes, u = u.sibling;
                    u = e & ~n
                } else u = 0, t.child = null;
                return c0(l, t, n, a, u)
            }
            if ((a & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && Yn(t, n !== null ? n.cachePool : null), n !== null ? sm(t, n) : Xf(), mm(t);
            else return u = t.lanes = 536870912, c0(l, t, n !== null ? n.baseLanes | a : a, a, u)
        } else n !== null ? (Yn(t, n.cachePool), sm(t, n), ba(), t.memoizedState = null) : (l !== null && Yn(t, null), Xf(), ba());
        return Tl(l, t, e, a), t.child
    }

    function He(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), t.sibling
    }

    function c0(l, t, a, u, e) {
        var n = qf();
        return n = n === null ? null : {
            parent: gl._currentValue,
            pool: n
        }, t.memoizedState = {
            baseLanes: a,
            cachePool: n
        }, l !== null && Yn(t, null), Xf(), mm(t), l !== null && Ka(l, t, u, !0), t.childLanes = e, null
    }

    function Pn(l, t) {
        return t = li({
            mode: t.mode,
            children: t.children
        }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t
    }

    function o0(l, t, a) {
        return $a(t, l.child, null, a), l = Pn(t, t.pendingProps), l.flags |= 2, Pl(t), t.memoizedState = null, l
    }

    function fv(l, t, a) {
        var u = t.pendingProps,
            e = (t.flags & 128) !== 0;
        if (t.flags &= -129, l === null) {
            if (j) {
                if (u.mode === "hidden") return l = Pn(t, u), t.lanes = 536870912, l.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, He(null, l);
                if (Vf(t), (l = il) ? (l = Bd(l, st), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
                        dehydrated: l,
                        treeContext: ca !== null ? {
                            id: Mt,
                            overflow: Ut
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = ws(l), a.return = t, t.child = a, El = t, il = null)) : l = null, l === null) throw sa(t);
                return t.lanes = 536870912, null
            }
            return Pn(t, u)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var i = n.dehydrated;
            if (Vf(t), e)
                if (t.flags & 256) t.flags &= -257, t = o0(l, t, a);
                else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
            else throw Error(m(558));
            else if (bl || Ka(l, t, a, !1), e = (a & l.childLanes) !== 0, bl || e) {
                if (ga.current === null) {
                    if (u = ul, u !== null && (i = Fo(u, a), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Za(l, i), Kl(u, l, i), oc;
                    Si()
                }
                t = o0(l, t, a)
            } else l = n.treeContext, il = dt(i.nextSibling), El = t, j = !0, oa = null, st = !1, l !== null && Fs(t, l), t = Pn(t, u), t.flags |= 134221824;
            return t
        }
        return l = Kt(l.child, {
            mode: u.mode,
            children: u.children
        }), l.ref = t.ref, t.child = l, l.return = t, l
    }

    function Ru(l, t) {
        var a = t.ref;
        if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(m(284));
            (l === null || l.ref !== a) && (t.flags |= 4194816)
        }
    }

    function sc(l, t, a, u, e) {
        return wa(t), a = Kf(l, t, a, u, void 0, e), u = wf(), l !== null && !bl ? (Jf(l, t, e), $t(l, t, e)) : (j && u && Hn(t), t.flags |= 1, Tl(l, t, a, e), t.child)
    }

    function s0(l, t, a, u, e, n) {
        return wa(t), t.updateQueue = null, a = hm(t, u, a, e), dm(l), u = wf(), l !== null && !bl ? (Jf(l, t, n), $t(l, t, n)) : (j && u && Hn(t), t.flags |= 1, Tl(l, t, a, n), t.child)
    }

    function m0(l, t, a, u, e) {
        if (wa(t), t.stateNode === null) {
            var n = Au,
                i = a.contextType;
            typeof i == "object" && i !== null && (n = Dl(i)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Yf(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Dl(i) : Au, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (ic(t, a, i, u), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && fc.enqueueReplaceState(n, n.state, null), _e(t, u, n, e), Ne(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0
        } else if (l === null) {
            n = t.stateNode;
            var f = t.memoizedProps,
                c = Pa(a, f);
            n.props = c;
            var y = n.context,
                r = a.contextType;
            i = Au, typeof r == "object" && r !== null && (i = Dl(r));
            var T = a.getDerivedStateFromProps;
            r = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, r || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || y !== i) && $m(t, n, u, i), ha = !1;
            var d = t.memoizedState;
            n.state = d, _e(t, u, n, e), Ne(), y = t.memoizedState, f || d !== y || ha ? (typeof T == "function" && (ic(t, a, T, u), y = t.memoizedState), (c = ha || Wm(t, a, c, u, d, y, i)) ? (r || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = y), n.props = u, n.state = y, n.context = i, u = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1)
        } else {
            n = t.stateNode, jf(l, t), i = t.memoizedProps, r = Pa(a, i), n.props = r, T = t.pendingProps, d = n.context, y = a.contextType, c = Au, typeof y == "object" && y !== null && (c = Dl(y)), f = a.getDerivedStateFromProps, (y = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== T || d !== c) && $m(t, n, u, c), ha = !1, d = t.memoizedState, n.state = d, _e(t, u, n, e), Ne();
            var g = t.memoizedState;
            i !== T || d !== g || ha || l !== null && l.dependencies !== null && qn(l.dependencies) ? (typeof f == "function" && (ic(t, a, f, u), g = t.memoizedState), (r = ha || Wm(t, a, r, u, d, g, c) || l !== null && l.dependencies !== null && qn(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, g, c)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && d === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && d === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = g), n.props = u, n.state = g, n.context = c, u = r) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && d === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && d === l.memoizedState || (t.flags |= 1024), u = !1)
        }
        return n = u, Ru(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = $a(t, l.child, null, e), t.child = $a(t, null, a, e)) : Tl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = $t(l, t, e), l
    }

    function d0(l, t, a, u) {
        return xa(), t.flags |= 256, Tl(l, t, a, u), t.child
    }
    var mc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function dc(l) {
        return {
            baseLanes: l,
            cachePool: tm()
        }
    }

    function hc(l, t, a) {
        return l = l !== null ? l.childLanes & ~a : 0, t && (l |= at), l
    }

    function h0(l, t, a) {
        var u = t.pendingProps,
            e = !1,
            n = (t.flags & 128) !== 0,
            i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ul.current & 2) !== 0), i && (e = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (j) {
                if (e ? ra(t) : ba(), (l = il) ? (l = Bd(l, st), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
                        dehydrated: l,
                        treeContext: ca !== null ? {
                            id: Mt,
                            overflow: Ut
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = ws(l), a.return = t, t.child = a, El = t, il = null)) : l = null, l === null) throw sa(t);
                return ho(l) ? t.lanes = 32 : t.lanes = 536870912, null
            }
            return n = u.children, u = u.fallback, e ? (ba(), e = t.mode, n = li({
                mode: "hidden",
                children: n
            }, e), u = Va(u, e, a, null), n.return = t, u.return = t, n.sibling = u, t.child = n, u = t.child, u.memoizedState = dc(a), u.childLanes = hc(l, i, a), t.memoizedState = mc, He(null, u)) : (ra(t), yc(t, n))
        }
        var f = l.memoizedState;
        if (f !== null) {
            var c = f.dehydrated;
            if (c !== null) return cv(l, t, n, i, u, c, f, a)
        }
        return e ? (ba(), e = u.fallback, n = t.mode, f = l.child, c = f.sibling, u = Kt(f, {
            mode: "hidden",
            children: u.children
        }), u.subtreeFlags = f.subtreeFlags & 1206910976, c !== null ? e = Kt(c, e) : (e = Va(e, n, a, null), e.flags |= 2), e.return = t, u.return = t, u.sibling = e, t.child = u, He(null, u), u = t.child, e = l.child.memoizedState, e === null ? e = dc(a) : (n = e.cachePool, n !== null ? (f = gl._currentValue, n = n.parent !== f ? {
            parent: f,
            pool: f
        } : n) : n = tm(), e = {
            baseLanes: e.baseLanes | a,
            cachePool: n
        }), u.memoizedState = e, u.childLanes = hc(l, i, a), t.memoizedState = mc, He(l.child, u)) : (ra(t), a = l.child, l = a.sibling, a = Kt(a, {
            mode: "visible",
            children: u.children
        }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a)
    }

    function yc(l, t) {
        return t = li({
            mode: "visible",
            children: t
        }, l.mode), t.return = l, l.child = t
    }

    function li(l, t) {
        return l = Zl(22, l, null, t), l.lanes = 0, l
    }

    function ti(l, t, a) {
        return $a(t, l.child, null, a), l = yc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }

    function cv(l, t, a, u, e, n, i, f) {
        if (a) return t.flags & 256 ? (ra(t), t.flags &= -257, ti(l, t, f)) : t.memoizedState !== null ? (ba(), t.child = l.child, t.flags |= 128, null) : (ba(), n = e.fallback, i = t.mode, e = li({
            mode: "visible",
            children: e.children
        }, i), n = Va(n, i, f, null), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, $a(t, l.child, null, f), e = t.child, e.memoizedState = dc(f), e.childLanes = hc(l, u, f), t.memoizedState = mc, He(null, e));
        if (ra(t), ho(n)) {
            if (u = n.nextSibling && n.nextSibling.dataset, u) var c = u.dgst;
            return u = c, u !== "" && (e = Error(m(419)), e.stack = "", e.digest = u, Se({
                value: e,
                source: null,
                stack: null
            })), ti(l, t, f)
        }
        if (bl || Ka(l, t, f, !1), u = (f & l.childLanes) !== 0, bl || u) {
            if (ga.current !== null) return ti(l, t, f);
            if (u = ul, u !== null && (e = Fo(u, f), e !== 0 && e !== i.retryLane)) throw i.retryLane = e, Za(l, e), Kl(u, l, e), oc;
            return mo(n) || Si(), ti(l, t, f)
        }
        return mo(n) ? (t.flags |= 192, t.child = l.child, null) : (l = i.treeContext, il = dt(n.nextSibling), El = t, j = !0, oa = null, st = !1, l !== null && Fs(t, l), t = yc(t, e.children), t.flags |= 134221824, t)
    }

    function y0(l, t, a) {
        l.lanes |= t;
        var u = l.alternate;
        u !== null && (u.lanes |= t), Rn(l.return, t, a)
    }

    function v0(l) {
        for (var t = null; l !== null;) {
            var a = l.alternate;
            a !== null && Vn(a) === null && (t = l), l = l.sibling
        }
        return t
    }

    function ai(l, t, a, u, e, n) {
        var i = l.memoizedState;
        i === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: a,
            tailMode: e,
            treeForkCount: n
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = a, i.tailMode = e, i.treeForkCount = n)
    }

    function vc(l) {
        var t = l.child;
        for (l.child = null; t !== null;) {
            var a = t.sibling;
            t.sibling = l.child, l.child = t, t = a
        }
    }

    function gc(l, t, a) {
        var u = t.pendingProps,
            e = u.revealOrder,
            n = u.tail;
        u = u.children;
        var i = Ul.current;
        if (t.flags & 128) return De(t, i), null;
        var f = (i & 2) !== 0;
        if (f ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, De(t, i), e === "backwards" && l !== null ? (vc(l), Tl(l, t, u, a), vc(l)) : Tl(l, t, u, a), u = j ? be : 0, !f && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
            if (l.tag === 13) l.memoizedState !== null && y0(l, a, t);
            else if (l.tag === 19) y0(l, a, t);
            else if (l.child !== null) {
                l.child.return = l, l = l.child;
                continue
            }
            if (l === t) break l;
            for (; l.sibling === null;) {
                if (l.return === null || l.return === t) break l;
                l = l.return
            }
            l.sibling.return = l.return, l = l.sibling
        }
        switch (e) {
        case "backwards":
            a = v0(t.child), a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null, vc(t)), ai(t, !0, e, null, n, u);
            break;
        case "unstable_legacy-backwards":
            for (a = null, e = t.child, t.child = null; e !== null;) {
                if (l = e.alternate, l !== null && Vn(l) === null) {
                    t.child = e;
                    break
                }
                l = e.sibling, e.sibling = a, a = e, e = l
            }
            ai(t, !0, a, null, n, u);
            break;
        case "together":
            ai(t, !1, null, null, void 0, u);
            break;
        case "independent":
            t.memoizedState = null;
            break;
        default:
            a = v0(t.child), a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), ai(t, !1, e, a, n, u)
        }
        return t.child
    }

    function g0(l, t, a) {
        var u = t.pendingProps;
        return ma(t, t.type, u.value), Tl(l, t, u.children, a), t.child
    }

    function $t(l, t, a) {
        if (l !== null && (t.dependencies = l.dependencies), Ea |= t.lanes, (a & t.childLanes) === 0)
            if (l !== null) {
                if (Ka(l, t, a, !1), (a & t.childLanes) === 0) return null
            } else return null;
        if (l !== null && t.child !== l.child) throw Error(m(153));
        if (t.child !== null) {
            for (l = t.child, a = Kt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null;) l = l.sibling, a = a.sibling = Kt(l, l.pendingProps), a.return = t;
            a.sibling = null
        }
        return t.child
    }

    function rc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && qn(l)))
    }

    function ov(l, t, a) {
        switch (t.tag) {
        case 3:
            fn(t, t.stateNode.containerInfo), ma(t, gl, l.memoizedState.cache), xa();
            break;
        case 27:
        case 5:
            xi(t);
            break;
        case 4:
            fn(t, t.stateNode.containerInfo);
            break;
        case 10:
            ma(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null) return t.flags |= 128, Vf(t), null;
            break;
        case 13:
            var u = t.memoizedState;
            if (u !== null) {
                if (u.dehydrated !== null) return ra(t), t.flags |= 128, null;
                u = Ka(l, t, a, !1);
                var e = t.child.childLanes;
                return u || (a & e) !== 0 ? h0(l, t, a) : (ra(t), l = $t(l, t, a), l !== null ? l.sibling : null)
            }
            ra(t);
            break;
        case 19:
            if (t.flags & 128) return gc(l, t, a);
            if (e = (l.flags & 128) !== 0, u = (a & t.childLanes) !== 0, u || (Ka(l, t, a, !1), u = (a & t.childLanes) !== 0), e) {
                if (u) return gc(l, t, a);
                t.flags |= 128
            }
            if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), De(t, Ul.current), u) break;
            return null;
        case 22:
            return t.lanes = 0, f0(l, t, a, t.pendingProps);
        case 24:
            ma(t, gl, l.memoizedState.cache)
        }
        return $t(l, t, a)
    }

    function r0(l, t, a) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps) bl = !0;
            else {
                if (!rc(l, a) && (t.flags & 128) === 0) return bl = !1, ov(l, t, a);
                bl = (l.flags & 131072) !== 0
            }
        else bl = !1, j && (t.flags & 1048576) !== 0 && ks(t, be, t.index);
        switch (t.lanes = 0, t.tag) {
        case 16:
            l: {
                var u = t.pendingProps;
                if (l = Fa(t.elementType), t.type = l, typeof l == "function") Of(l) ? (u = Pa(l, u), t.tag = 1, t = m0(null, t, l, u, a)) : (t.tag = 0, t = sc(null, t, l, u, a));
                else {
                    if (l != null) {
                        var e = l.$$typeof;
                        if (e === O) {
                            t.tag = 11, t = e0(null, t, l, u, a);
                            break l
                        } else if (e === ol) {
                            t.tag = 14, t = n0(null, t, l, u, a);
                            break l
                        } else if (e === Ql) {
                            t.tag = 10, t.type = l, t = g0(null, t, a);
                            break l
                        }
                    }
                    throw t = Zi(l) || l, Error(m(306, t, ""))
                }
            }
            return t;
        case 0:
            return sc(l, t, t.type, t.pendingProps, a);
        case 1:
            return u = t.type, e = Pa(u, t.pendingProps), m0(l, t, u, e, a);
        case 3:
            l: {
                if (fn(t, t.stateNode.containerInfo), l === null) throw Error(m(387));u = t.pendingProps;
                var n = t.memoizedState;e = n.element,
                jf(l, t),
                _e(t, u, null, a);
                var i = t.memoizedState;
                if (u = i.cache, ma(t, gl, u), u !== n.cache && Hf(t, [gl], a, !0), Ne(), u = i.element, n.isDehydrated)
                    if (n = {
                            element: u,
                            isDehydrated: !1,
                            cache: i.cache
                        }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                        t = d0(l, t, u, a);
                        break l
                    } else if (u !== e) {
                    e = ft(Error(m(424)), t), Se(e), t = d0(l, t, u, a);
                    break l
                } else
                    for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, il = dt(l.firstChild), El = t, j = !0, oa = null, st = !0, a = fm(t, null, u, a), t.child = a; a;) a.flags = a.flags & -3 | 134221824, a = a.sibling;
                else {
                    if (xa(), u === e) {
                        t = $t(l, t, a);
                        break l
                    }
                    Tl(l, t, u, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return Ru(l, t), l === null ? (a = Vd(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : j || (t.stateNode = zd(t.type, t.pendingProps, ua.current, t)) : t.memoizedState = Vd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
            return xi(t), l === null && j && (u = t.stateNode = Gd(t.type, t.pendingProps, ua.current), El = t, st = !0, e = il, _a(t.type) ? (yo = e, il = dt(u.firstChild)) : il = e), Tl(l, t, t.pendingProps.children, a), Ru(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
            return l === null && j && ((e = u = il) && (u = ug(u, t.type, t.pendingProps, st), u !== null ? (t.stateNode = u, El = t, il = dt(u.firstChild), st = !1, e = !0) : e = !1), e || sa(t)), xi(t), e = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = n.children, eo(e, n) ? u = null : i !== null && eo(e, i) && (t.flags |= 32), t.memoizedState !== null && (e = Kf(l, t, Iy, null, null, a), $u._currentValue = e), Ru(l, t), Tl(l, t, u, a), t.child;
        case 6:
            return l === null && j && ((l = a = il) && (a = eg(a, t.pendingProps, st), a !== null ? (t.stateNode = a, El = t, il = null, l = !0) : l = !1), l || sa(t)), null;
        case 13:
            return h0(l, t, a);
        case 4:
            return fn(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = $a(t, null, u, a) : Tl(l, t, u, a), t.child;
        case 11:
            return e0(l, t, t.type, t.pendingProps, a);
        case 7:
            return u = t.pendingProps, Ru(l, t), Tl(l, t, u, a), t.child;
        case 8:
            return Tl(l, t, t.pendingProps.children, a), t.child;
        case 12:
            return Tl(l, t, t.pendingProps.children, a), t.child;
        case 10:
            return g0(l, t, a);
        case 9:
            return e = t.type._context, u = t.pendingProps.children, wa(t), e = Dl(e), u = u(e), t.flags |= 1, Tl(l, t, u, a), t.child;
        case 14:
            return n0(l, t, t.type, t.pendingProps, a);
        case 15:
            return i0(l, t, t.type, t.pendingProps, a);
        case 19:
            return gc(l, t, a);
        case 31:
            return fv(l, t, a);
        case 22:
            return f0(l, t, a, t.pendingProps);
        case 24:
            return wa(t), u = Dl(gl), l === null ? (e = qf(), e === null && (e = ul, n = Cf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
                parent: u,
                cache: e
            }, Yf(t), ma(t, gl, e)) : ((l.lanes & a) !== 0 && (jf(l, t), _e(t, null, null, a), Ne()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = {
                parent: u,
                cache: u
            }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), ma(t, gl, u)) : (u = n.cache, ma(t, gl, u), u !== e.cache && Hf(t, [gl], a, !0))), Tl(l, t, t.pendingProps.children, a), t.child;
        case 30:
            return t.stateNode === null && (t.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null
            }), u = t.pendingProps, u.name != null && u.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : j && Hn(t), l !== null && l.memoizedProps.name !== u.name ? t.flags |= 4194816 : Ru(l, t), Tl(l, t, u.children, a), t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(m(156, t.tag))
    }

    function It(l) {
        l.flags |= 4
    }

    function bc(l, t, a, u, e) {
        var n;
        if ((n = (l.mode & 32) !== 0) && (n = a === null ? wd(t, u) : wd(t, u) && (u.src !== a.src || u.srcSet !== a.srcSet)), n) {
            if (l.flags |= 16777216, (e & 335544128) === e)
                if (l.stateNode.complete) l.flags |= 8192;
                else if (I0()) l.flags |= 8192;
            else throw Wa = Gn, Bf
        } else l.flags &= -16777217
    }

    function b0(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
        else if (l.flags |= 16777216, !Jd(t))
            if (I0()) l.flags |= 8192;
            else throw Wa = Gn, Bf
    }

    function ui(l, t) {
        t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? wo() : 536870912, l.lanes |= t, Gu |= t)
    }

    function Ce(l, t) {
        if (!j) switch (l.tailMode) {
        case "visible":
            break;
        case "collapsed":
            for (var a = l.tail, u = null; a !== null;) a.alternate !== null && (u = a), a = a.sibling;
            u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
            break;
        default:
            for (t = l.tail, a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
            a === null ? l.tail = null : a.sibling = null
        }
    }

    function fl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child,
            a = 0,
            u = 0;
        if (t)
            for (var e = l.child; e !== null;) a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 1206910976, u |= e.flags & 1206910976, e.return = l, e = e.sibling;
        else
            for (e = l.child; e !== null;) a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
        return l.subtreeFlags |= u, l.childLanes = a, t
    }

    function sv(l, t, a) {
        var u = t.pendingProps;
        switch (Df(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return fl(t), null;
        case 1:
            return fl(t), null;
        case 3:
            return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), kt(gl), su(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (_u(t) ? It(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uf())), fl(t), null;
        case 26:
            var e = t.type,
                n = t.memoizedState;
            return l === null ? (It(t), n !== null ? (fl(t), b0(t, n)) : (fl(t), bc(t, e, null, u, a))) : n ? n !== l.memoizedState ? (It(t), fl(t), b0(t, n)) : (fl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && It(t), fl(t), bc(t, e, l, u, a)), null;
        case 27:
            if (cn(t), a = ua.current, e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && It(t);
            else {
                if (!u) {
                    if (t.stateNode === null) throw Error(m(166));
                    return fl(t), t.subtreeFlags &= -33554433, null
                }
                l = _t.current, _u(t) ? Ws(t) : (l = Gd(e, u, a), t.stateNode = l, It(t))
            }
            return fl(t), t.subtreeFlags &= -33554433, null;
        case 5:
            if (cn(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && It(t);
            else {
                if (!u) {
                    if (t.stateNode === null) throw Error(m(166));
                    return fl(t), t.subtreeFlags &= -33554433, null
                }
                if (n = _t.current, _u(t)) Ws(t);
                else {
                    var i = xe(ua.current);
                    switch (n) {
                    case 1:
                        n = i.createElementNS("http://www.w3.org/2000/svg", e);
                        break;
                    case 2:
                        n = i.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                        break;
                    default:
                        switch (e) {
                        case "svg":
                            n = i.createElementNS("http://www.w3.org/2000/svg", e);
                            break;
                        case "math":
                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                            break;
                        case "script":
                            n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof u.is == "string" ? i.createElement("select", {
                                is: u.is
                            }) : i.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                            break;
                        default:
                            n = typeof u.is == "string" ? i.createElement(e, {
                                is: u.is
                            }) : i.createElement(e)
                        }
                    }
                    n[_l] = t, n[Xl] = u;
                    l: for (i = t.child; i !== null;) {
                        if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i, i = i.child;
                            continue
                        }
                        if (i === t) break l;
                        for (; i.sibling === null;) {
                            if (i.return === null || i.return === t) break l;
                            i = i.return
                        }
                        i.sibling.return = i.return, i = i.sibling
                    }
                    t.stateNode = n;
                    l: switch (Hl(n, e, u), e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        u = !!u.autoFocus;
                        break l;
                    case "img":
                        u = !0;
                        break l;
                    default:
                        u = !1
                    }
                    u && It(t)
                }
            }
            return fl(t), t.subtreeFlags &= -33554433, bc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
        case 6:
            if (l && t.stateNode != null) l.memoizedProps !== u && It(t);
            else {
                if (typeof u != "string" && t.stateNode === null) throw Error(m(166));
                if (l = ua.current, _u(t)) {
                    if (l = t.stateNode, a = t.memoizedProps, u = null, e = El, e !== null) switch (e.tag) {
                    case 27:
                    case 5:
                        u = e.memoizedProps
                    }
                    l[_l] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || rd(l.nodeValue, a)), l || sa(t, !0)
                } else l = xe(l).createTextNode(u), l[_l] = t, t.stateNode = l
            }
            return fl(t), null;
        case 31:
            if (a = t.memoizedState, l === null || l.memoizedState !== null) {
                if (u = _u(t), a !== null) {
                    if (l === null) {
                        if (!u) throw Error(m(318));
                        if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(557));
                        l[_l] = t
                    } else xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    fl(t), l = !1
                } else a = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
                if (!l) return t.flags & 256 ? (Pl(t), t) : (Pl(t), null);
                if ((t.flags & 128) !== 0) throw Error(m(558))
            }
            return fl(t), null;
        case 13:
            if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (e = _u(t), u !== null && u.dehydrated !== null) {
                    if (l === null) {
                        if (!e) throw Error(m(318));
                        if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
                        e[_l] = t
                    } else xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    fl(t), e = !1
                } else e = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
                if (!e) return t.flags & 256 ? (Pl(t), t) : (Pl(t), null)
            }
            return Pl(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), ui(t, t.updateQueue), fl(t), null);
        case 4:
            return su(), l === null && Pc(t.stateNode.containerInfo), t.flags |= 67108864, fl(t), null;
        case 10:
            return kt(t.type), fl(t), null;
        case 19:
            if (xf(t), u = t.memoizedState, u === null) return fl(t), null;
            if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
                if (e) Ce(u, !1);
                else {
                    if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null;) {
                            if (n = Vn(l), n !== null) {
                                for (t.flags |= 128, Ce(u, !1), l = n.updateQueue, t.updateQueue = l, ui(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null;) Ks(a, l), a = a.sibling;
                                return De(t, Ul.current & 1 | 2), j && wt(t, u.treeForkCount), t.child
                            }
                            l = l.sibling
                        }
                    u.tail !== null && kl() > vi && (t.flags |= 128, e = !0, Ce(u, !1), t.lanes = 4194304)
                }
            else {
                if (!e)
                    if (l = Vn(n), l !== null) {
                        if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, ui(t, l), Ce(u, !0), u.tail === null && u.tailMode !== "collapsed" && u.tailMode !== "visible" && !n.alternate && !j) return fl(t), null
                    } else 2 * kl() - u.renderingStartTime > vi && a !== 536870912 && (t.flags |= 128, e = !0, Ce(u, !1), t.lanes = 4194304);
                u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n)
            }
            if (u.tail !== null) {
                l = u.tail;
                l: {
                    for (a = l; a !== null;) {
                        if (a.alternate !== null) {
                            a = !1;
                            break l
                        }
                        a = a.sibling
                    }
                    a = !0
                }
                return u.rendering = l, u.tail = l.sibling, u.renderingStartTime = kl(), l.sibling = null, n = Ul.current, n = e ? n & 1 | 2 : n & 1, u.tailMode === "visible" || u.tailMode === "collapsed" || !a || j ? De(t, n) : (a = n, nl(Ml, t), nl(Ul, a), Cl === null && (Cl = t)), j && wt(t, u.treeForkCount), l
            }
            return fl(t), null;
        case 22:
        case 23:
            return Pl(t), Zf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (fl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fl(t), a = t.updateQueue, a !== null && ui(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && Nl(ka), null;
        case 24:
            return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), kt(gl), fl(t), null;
        case 25:
            return null;
        case 30:
            return t.flags |= 33554432, fl(t), null
        }
        throw Error(m(156, t.tag))
    }

    function mv(l, t) {
        switch (Df(t), t.tag) {
        case 1:
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
            return kt(gl), su(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
            return cn(t), null;
        case 31:
            if (t.memoizedState !== null) {
                if (Pl(t), t.alternate === null) throw Error(m(340));
                xa()
            }
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 13:
            if (Pl(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                if (t.alternate === null) throw Error(m(340));
                xa()
            }
            return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
            return xf(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
        case 4:
            return su(), null;
        case 10:
            return kt(t.type), null;
        case 22:
        case 23:
            return Pl(t), Zf(), l !== null && Nl(ka), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
            return kt(gl), null;
        case 25:
            return null;
        default:
            return null
        }
    }

    function S0(l, t) {
        switch (Df(t), t.tag) {
        case 3:
            kt(gl), su();
            break;
        case 26:
        case 27:
        case 5:
            cn(t);
            break;
        case 4:
            su();
            break;
        case 31:
            t.memoizedState !== null && Pl(t);
            break;
        case 13:
            Pl(t);
            break;
        case 19:
            xf(t);
            break;
        case 10:
            kt(t.type);
            break;
        case 22:
        case 23:
            Pl(t), Zf(), l !== null && Nl(ka);
            break;
        case 24:
            kt(gl)
        }
    }

    function Re(l, t) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var e = u.next;
                a = e;
                do {
                    if ((a.tag & l) === l) {
                        u = void 0;
                        var n = a.create,
                            i = a.inst;
                        u = n(), i.destroy = u
                    }
                    a = a.next
                } while (a !== e)
            }
        } catch (f) {
            P(t, t.return, f)
        }
    }

    function Sa(l, t, a) {
        try {
            var u = t.updateQueue,
                e = u !== null ? u.lastEffect : null;
            if (e !== null) {
                var n = e.next;
                u = n;
                do {
                    if ((u.tag & l) === l) {
                        var i = u.inst,
                            f = i.destroy;
                        if (f !== void 0) {
                            i.destroy = void 0, e = t;
                            var c = a,
                                y = f;
                            try {
                                y()
                            } catch (r) {
                                P(e, c, r)
                            }
                        }
                    }
                    u = u.next
                } while (u !== n)
            }
        } catch (r) {
            P(t, t.return, r)
        }
    }

    function T0(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var a = l.stateNode;
            try {
                om(t, a)
            } catch (u) {
                P(l, l.return, u)
            }
        }
    }

    function z0(l, t, a) {
        a.props = Pa(l.type, l.memoizedProps), a.state = l.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (u) {
            P(l, t, u)
        }
    }

    function pt(l, t) {
        try {
            var a = l.ref;
            if (a !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var u = l.stateNode;
                    break;
                case 30:
                    var e = l.stateNode,
                        n = xt(l.memoizedProps, e);
                    (e.ref === null || e.ref.name !== n) && (e.ref = Md(n)), u = e.ref;
                    break;
                case 7:
                    if (l.stateNode === null) {
                        var i = new et(l);
                        L(l.child, !1, tg, i, void 0, void 0), l.stateNode = i
                    }
                    u = l.stateNode;
                    break;
                default:
                    u = l.stateNode
                }
                typeof a == "function" ? l.refCleanup = a(u) : a.current = u
            }
        } catch (f) {
            P(l, t, f)
        }
    }

    function pl(l, t) {
        var a = l.ref,
            u = l.refCleanup;
        if (a !== null)
            if (typeof u == "function") try {
                u()
            } catch (e) {
                P(l, t, e)
            } finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (e) {
                P(l, t, e)
            } else a.current = null
    }

    function ei(l, t) {
        if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
            for (var a = 0; a < t.length; a++) qd(l.stateNode, t[a])
    }

    function E0(l) {
        for (var t = l.return; t !== null && (Tc(t) && qd(l.stateNode, t.stateNode), !Sc(t));) t = t.return
    }

    function qe(l) {
        for (var t = l.return; t !== null && (Tc(t) && ag(l.stateNode, t.stateNode), !Sc(t));) t = t.return
    }

    function Sc(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 27
    }

    function Tc(l) {
        return l && l.tag === 7 && l.stateNode !== null
    }

    function zc(l) {
        var t = l.type,
            a = l.memoizedProps,
            u = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && u.focus();
                break l;
            case "img":
                a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet)
            }
        }
        catch (e) {
            P(l, l.return, e)
        }
    }

    function Ec(l, t, a) {
        try {
            var u = l.stateNode;
            jv(u, l.type, a, t), u[Xl] = t
        } catch (e) {
            P(l, l.return, e)
        }
    }

    function A0(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && _a(l.type) || l.tag === 4
    }

    function Ac(l) {
        l: for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || A0(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && _a(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function Oc(l, t, a, u) {
        var e = l.tag;
        if (e === 5 || e === 6) e = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Dt)), ei(l, u), J = !0;
        else if (e !== 4 && (e === 27 && (ei(l, u), u = null, _a(l.type) && (a = l.stateNode, t = null)), l = l.child, l !== null))
            for (Oc(l, t, a, u), l = l.sibling; l !== null;) Oc(l, t, a, u), l = l.sibling
    }

    function ni(l, t, a, u) {
        var e = l.tag;
        if (e === 5 || e === 6) e = l.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e), ei(l, u), J = !0;
        else if (e !== 4 && (e === 27 && (ei(l, u), u = null, _a(l.type) && (a = l.stateNode)), l = l.child, l !== null))
            for (ni(l, t, a, u), l = l.sibling; l !== null;) ni(l, t, a, u), l = l.sibling
    }

    function O0(l) {
        var t = l.stateNode,
            a = l.memoizedProps;
        try {
            for (var u = l.type, e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
            Hl(t, u, a), t[_l] = l, t[Xl] = a
        } catch (n) {
            P(l, l.return, n)
        }
    }
    var ii = !1,
        lt = null;

    function N0(l) {
        (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (ii = !0)
    }
    var Ht = null;

    function _0() {
        var l = Ht;
        return Ht = null, l
    }
    var Vl = 0;

    function qu(l, t, a, u, e) {
        return Vl = 0, D0(l.child, t, a, u, e)
    }

    function D0(l, t, a, u, e) {
        for (var n = !1; l !== null;) {
            if (l.tag === 5) {
                var i = l.stateNode;
                if (u !== null) {
                    var f = fo(i);
                    u.push(f), f.view && (n = !0)
                } else n || fo(i).view && (n = !0);
                ii = !0, _d(i, Vl === 0 ? t : t + "_" + Vl, a), Vl++
            } else(l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || D0(l.child, t, a, u, e) && (n = !0));
            l = l.sibling
        }
        return n
    }

    function Ct(l, t) {
        for (; l !== null;) l.tag === 5 ? Dd(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || Ct(l.child, t)), l = l.sibling
    }

    function fi(l) {
        if ((l.subtreeFlags & 18874368) !== 0)
            for (l = l.child; l !== null;) {
                if ((l.tag !== 22 || l.memoizedState === null) && (fi(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
                    var t = l.memoizedProps;
                    if (t.name == null || t.name === "auto") throw Error(m(544));
                    var a = t.name;
                    t = Lt(t.default, t.share), t !== "none" && (qu(l, a, t, null, !1) || Ct(l.child, !1))
                }
                l = l.sibling
            }
    }

    function Nc(l, t) {
        if (l.tag === 30) {
            var a = l.stateNode,
                u = l.memoizedProps,
                e = xt(u, a),
                n = Lt(u.default, a.paired ? u.share : u.enter);
            n !== "none" ? qu(l, e, n, null, !1) ? (fi(l), a.paired || t || Vu(l, u.onEnter)) : Ct(l.child, !1) : fi(l)
        } else if ((l.subtreeFlags & 33554432) !== 0)
            for (l = l.child; l !== null;) Nc(l, t), l = l.sibling;
        else fi(l)
    }

    function _c(l) {
        if (lt !== null && lt.size !== 0) {
            var t = lt;
            if ((l.subtreeFlags & 18874368) !== 0)
                for (l = l.child; l !== null;) {
                    if (l.tag !== 22 || l.memoizedState === null) {
                        if (l.tag === 30 && (l.flags & 18874368) !== 0) {
                            var a = l.memoizedProps,
                                u = a.name;
                            if (u != null && u !== "auto") {
                                var e = t.get(u);
                                if (e !== void 0) {
                                    var n = Lt(a.default, a.share);
                                    if (n !== "none" && (qu(l, u, n, null, !1) ? (n = l.stateNode, e.paired = n, n.paired = e, Vu(l, a.onShare)) : Ct(l.child, !1)), t.delete(u), t.size === 0) break
                                }
                            }
                        }
                        _c(l)
                    }
                    l = l.sibling
                }
        }
    }

    function Dc(l) {
        if (l.tag === 30) {
            var t = l.memoizedProps,
                a = xt(t, l.stateNode),
                u = lt !== null ? lt.get(a) : void 0,
                e = Lt(t.default, u !== void 0 ? t.share : t.exit);
            e !== "none" && (qu(l, a, e, null, !1) ? u !== void 0 ? (e = l.stateNode, u.paired = e, e.paired = u, lt.delete(a), Vu(l, t.onShare)) : Vu(l, t.onExit) : Ct(l.child, !1)), lt !== null && _c(l)
        } else if ((l.subtreeFlags & 33554432) !== 0)
            for (l = l.child; l !== null;) Dc(l), l = l.sibling;
        else lt !== null && _c(l)
    }

    function M0(l) {
        for (l = l.child; l !== null;) {
            if (l.tag === 30) {
                var t = l.memoizedProps,
                    a = xt(t, l.stateNode);
                t = Lt(t.default, t.update), l.flags &= -5, t !== "none" && qu(l, a, t, l.memoizedState = [], !1)
            } else(l.subtreeFlags & 33554432) !== 0 && M0(l);
            l = l.sibling
        }
    }

    function Mc(l) {
        if ((l.subtreeFlags & 18874368) !== 0)
            for (l = l.child; l !== null;) {
                if (l.tag !== 22 || l.memoizedState === null) {
                    if (l.tag === 30 && (l.flags & 18874368) !== 0) {
                        var t = l.stateNode;
                        t.paired !== null && (t.paired = null, Ct(l.child, !1))
                    }
                    Mc(l)
                }
                l = l.sibling
            }
    }

    function ci(l) {
        if (l.tag === 30) l.stateNode.paired = null, Ct(l.child, !1), Mc(l);
        else if ((l.subtreeFlags & 33554432) !== 0)
            for (l = l.child; l !== null;) ci(l), l = l.sibling;
        else Mc(l)
    }

    function U0(l) {
        for (l = l.child; l !== null;) l.tag === 30 ? Ct(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && U0(l), l = l.sibling
    }

    function Uc(l, t, a, u, e, n, i) {
        for (var f = !1; t !== null;) {
            if (t.tag === 5) {
                var c = t.stateNode;
                if (n !== null && Vl < n.length) {
                    var y = n[Vl],
                        r = fo(c);
                    (y.view || r.view) && (f = !0);
                    var T;
                    if (T = (l.flags & 4) === 0)
                        if (r.clip) T = !0;
                        else {
                            T = y.rect;
                            var d = r.rect;
                            T = T.y !== d.y || T.x !== d.x || T.height !== d.height || T.width !== d.width
                        } T && (l.flags |= 4), r.abs ? r = !y.abs : (y = y.rect, r = r.rect, r = y.height !== r.height || y.width !== r.width), r && (l.flags |= 32)
                } else l.flags |= 32;
                (l.flags & 4) !== 0 && _d(c, Vl === 0 ? a : a + "_" + Vl, e), f && (l.flags & 4) !== 0 || (Ht === null && (Ht = []), Ht.push(c, Vl === 0 ? u : u + "_" + Vl, t.memoizedProps)), Vl++
            } else(t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && i ? l.flags |= t.flags & 32 : Uc(l, t.child, a, u, e, n, i) && (f = !0));
            t = t.sibling
        }
        return f
    }

    function p0(l, t) {
        for (l = l.child; l !== null;) {
            if (l.tag === 30) {
                var a = l.memoizedProps,
                    u = l.stateNode,
                    e = xt(a, u),
                    n = Lt(a.default, a.update),
                    i;
                i = l.memoizedState, l.memoizedState = null, u = l;
                var f = l.child;
                Vl = 0, e = Uc(u, f, e, e, n, i, !1), (l.flags & 4) !== 0 && e && Vu(l, a.onUpdate)
            } else(l.subtreeFlags & 33554432) !== 0 && p0(l);
            l = l.sibling
        }
    }
    var Al = !1,
        W = !1,
        Rt = !1,
        pc = !1,
        H0 = typeof WeakSet == "function" ? WeakSet : Set,
        Ol = null,
        qt = !1,
        Be = !1,
        oi = !1,
        Hc = !1;

    function dv(l, t, a) {
        if (l = l.containerInfo, ao = Iu, l = Bs(l), rf(l)) {
            if ("selectionStart" in l) var u = {
                start: l.selectionStart,
                end: l.selectionEnd
            };
            else l: {
                u = (u = l.ownerDocument) && u.defaultView || window;
                var e = u.getSelection && u.getSelection();
                if (e && e.rangeCount !== 0) {
                    u = e.anchorNode;
                    var n = e.anchorOffset,
                        i = e.focusNode;
                    e = e.focusOffset;
                    try {
                        u.nodeType, i.nodeType
                    } catch {
                        u = null;
                        break l
                    }
                    var f = 0,
                        c = -1,
                        y = -1,
                        r = 0,
                        T = 0,
                        d = l,
                        g = null;
                    t: for (;;) {
                        for (var A; d !== u || n !== 0 && d.nodeType !== 3 || (c = f + n), d !== i || e !== 0 && d.nodeType !== 3 || (y = f + e), d.nodeType === 3 && (f += d.nodeValue.length), (A = d.firstChild) !== null;) g = d, d = A;
                        for (;;) {
                            if (d === l) break t;
                            if (g === u && ++r === n && (c = f), g === i && ++T === e && (y = f), (A = d.nextSibling) !== null) break;
                            d = g, g = d.parentNode
                        }
                        d = A
                    }
                    u = c === -1 || y === -1 ? null : {
                        start: c,
                        end: y
                    }
                } else u = null
            }
            u = u || {
                start: 0,
                end: 0
            }
        } else u = null;
        for (uo = {
                focusedElem: l,
                selectionRange: u
            }, Iu = !1, a = (a & 335544064) === a, Ol = t, t = a ? 9270 : 1024; Ol !== null;) {
            if (l = Ol, a && (u = l.deletions, u !== null))
                for (n = 0; n < u.length; n++) a && Dc(u[n]);
            if (l.alternate === null && (l.flags & 2) !== 0) a && N0(l), si(a);
            else {
                if (l.tag === 22) {
                    if (u = l.alternate, l.memoizedState !== null) {
                        u !== null && u.memoizedState === null && a && Dc(u), si(a);
                        continue
                    } else if (u !== null && u.memoizedState !== null) {
                        a && N0(l), si(a);
                        continue
                    }
                }
                u = l.child, (l.subtreeFlags & t) !== 0 && u !== null ? (u.return = l, Ol = u) : (a && M0(l), si(a))
            }
        }
        lt = null
    }

    function si(l) {
        for (; Ol !== null;) {
            var t = Ol,
                a = l,
                u = t.alternate,
                e = t.flags;
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                break;
            case 1:
                if ((e & 1024) !== 0 && u !== null) {
                    a = void 0, e = u.memoizedProps, u = u.memoizedState;
                    var n = t.stateNode;
                    try {
                        var i = Pa(t.type, e);
                        a = n.getSnapshotBeforeUpdate(i, u), n.__reactInternalSnapshotBeforeUpdate = a
                    } catch (f) {
                        P(t, t.return, f)
                    }
                }
                break;
            case 3:
                if ((e & 1024) !== 0) {
                    if (u = t.stateNode.containerInfo, a = u.nodeType, a === 9) so(u);
                    else if (a === 1) switch (u.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                        so(u);
                        break;
                    default:
                        u.textContent = ""
                    }
                }
                break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
                break;
            case 30:
                a && u !== null && (a = xt(u.memoizedProps, u.stateNode), e = t.memoizedProps, e = Lt(e.default, e.update), e !== "none" && qu(u, a, e, u.memoizedState = [], !0));
                break;
            default:
                if ((e & 1024) !== 0) throw Error(m(163))
            }
            if (u = t.sibling, u !== null) {
                u.return = t.return, Ol = u;
                break
            }
            Ol = t.return
        }
    }

    function C0(l, t, a) {
        var u = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Bt(l, a), u & 4 && Re(5, a);
            break;
        case 1:
            if (Bt(l, a), u & 4)
                if (l = a.stateNode, t === null) try {
                    l.componentDidMount()
                } catch (i) {
                    P(a, a.return, i)
                } else {
                    var e = Pa(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        P(a, a.return, i)
                    }
                }
            u & 64 && T0(a), u & 512 && pt(a, a.return);
            break;
        case 3:
            if (Bt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
                if (t = null, a.child !== null) switch (a.child.tag) {
                case 27:
                case 5:
                    t = a.child.stateNode;
                    break;
                case 1:
                    t = a.child.stateNode
                }
                try {
                    om(l, t)
                } catch (i) {
                    P(a, a.return, i)
                }
            }
            break;
        case 27:
            t === null && u & 4 && O0(a);
        case 26:
        case 5:
            Bt(l, a), t === null && u & 4 && zc(a), u & 512 && pt(a, a.return);
            break;
        case 12:
            Bt(l, a);
            break;
        case 31:
            Bt(l, a), u & 4 && Y0(l, a);
            break;
        case 13:
            Bt(l, a), u & 4 && j0(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Ov.bind(null, a), ng(l, a))));
            break;
        case 22:
            if (u = a.memoizedState !== null || Al, !u) {
                var n = t !== null && t.memoizedState !== null || W;
                t = Al, e = W, Al = u, (W = n) && !e ? (u = 2, (a.subtreeFlags & 8772) !== 0 && (u |= 1), Tt(l, a, u)) : Bt(l, a), Al = t, W = e
            }
            break;
        case 30:
            Bt(l, a), u & 512 && pt(a, a.return);
            break;
        case 7:
            u & 512 && pt(a, a.return);
        default:
            Bt(l, a)
        }
    }

    function Cc(l, t) {
        for (l = l.child; l !== null;) R0(l, t), l = l.sibling
    }

    function R0(l, t) {
        switch (l.tag) {
        case 5:
        case 26:
            try {
                var a = l.stateNode;
                if (t) {
                    var u = a.style;
                    typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none"
                } else {
                    var e = l.stateNode,
                        n = l.memoizedProps.style,
                        i = n != null && n.hasOwnProperty("display") ? n.display : null;
                    e.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim()
                }
            } catch (c) {
                P(l, l.return, c)
            }
            Rc(l, t);
            break;
        case 6:
            try {
                l.stateNode.nodeValue = t ? "" : l.memoizedProps, J = !0
            } catch (c) {
                P(l, l.return, c)
            }
            break;
        case 18:
            try {
                var f = l.stateNode;
                t ? Nd(f, !0) : Nd(l.stateNode, !1)
            } catch (c) {
                P(l, l.return, c)
            }
            break;
        case 22:
        case 23:
            l.memoizedState === null && Cc(l, t);
            break;
        default:
            Cc(l, t)
        }
    }

    function Rc(l, t) {
        if (l.subtreeFlags & 67108864)
            for (l = l.child; l !== null;) {
                l: {
                    var a = l,
                        u = t;
                    switch (a.tag) {
                    case 4:
                        R0(a, u);
                        break l;
                    case 22:
                        a.memoizedState === null && Rc(a, u);
                        break l;
                    default:
                        Rc(a, u)
                    }
                }
                l = l.sibling
            }
    }

    function q0(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, q0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && vn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }
    var sl = null,
        xl = !1;

    function bt(l, t, a) {
        for (a = a.child; a !== null;) B0(l, t, a), a = a.sibling
    }

    function B0(l, t, a) {
        if (Fl && typeof Fl.onCommitFiberUnmount == "function") try {
            Fl.onCommitFiberUnmount(ee, a)
        } catch {}
        switch (a.tag) {
        case 26:
            W || pl(a, t), bt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !W && (a = a.stateNode, a.parentNode.removeChild(a));
            break;
        case 27:
            W || pl(a, t), qe(a);
            var u = sl,
                e = xl;
            _a(a.type) && (sl = a.stateNode, xl = !1), bt(l, t, a), Qd(a.stateNode, a.type, a.memoizedProps), sl = u, xl = e;
            break;
        case 5:
            W || pl(a, t), qe(a);
        case 6:
            if (a.tag === 6 && qe(a), u = sl, e = xl, sl = null, bt(l, t, a), sl = u, xl = e, sl !== null)
                if (xl) try {
                    (sl.nodeType === 9 ? sl.body : sl.nodeName === "HTML" ? sl.ownerDocument.body : sl).removeChild(a.stateNode), J = !0
                } catch (n) {
                    P(a, t, n)
                } else try {
                    sl.removeChild(a.stateNode), J = !0
                } catch (n) {
                    P(a, t, n)
                }
            break;
        case 18:
            sl !== null && (xl ? (l = sl, Od(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), Pu(l)) : Od(sl, a.stateNode));
            break;
        case 4:
            u = sl, e = xl, sl = a.stateNode.containerInfo, xl = !0, bt(l, t, a), sl = u, xl = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Sa(2, a, t), W || Sa(4, a, t), bt(l, t, a);
            break;
        case 1:
            W || (pl(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && z0(a, t, u)), bt(l, t, a);
            break;
        case 21:
            bt(l, t, a);
            break;
        case 22:
            W = (u = W) || a.memoizedState !== null, bt(l, t, a), W = u;
            break;
        case 30:
            pl(a, t), bt(l, t, a);
            break;
        case 7:
            W || pl(a, t), bt(l, t, a);
            break;
        default:
            bt(l, t, a)
        }
    }

    function Y0(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
            l = l.dehydrated;
            try {
                Pu(l)
            } catch (a) {
                P(t, t.return, a)
            }
        }
    }

    function j0(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            Pu(l)
        } catch (a) {
            P(t, t.return, a)
        }
    }

    function hv(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new H0), t;
        case 22:
            return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new H0), t;
        default:
            throw Error(m(435, l.tag))
        }
    }

    function mi(l, t) {
        var a = hv(l);
        t.forEach(function (u) {
            if (!a.has(u)) {
                a.add(u);
                var e = Nv.bind(null, l, u);
                u.then(e, e)
            }
        })
    }

    function Yl(l, t, a) {
        var u = t.deletions;
        if (u !== null)
            for (var e = 0; e < u.length; e++) {
                var n = u[e],
                    i = l,
                    f = t,
                    c = f;
                l: for (; c !== null;) {
                    switch (c.tag) {
                    case 27:
                        if (_a(c.type)) {
                            sl = c.stateNode, xl = !1;
                            break l
                        }
                        break;
                    case 5:
                        sl = c.stateNode, xl = !1;
                        break l;
                    case 3:
                    case 4:
                        sl = c.stateNode.containerInfo, xl = !0;
                        break l
                    }
                    c = c.return
                }
                if (sl === null) throw Error(m(160));
                B0(i, f, n), sl = null, xl = !1, i = n.alternate, i !== null && (i.return = null), n.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null;) G0(t, l, a), t = t.sibling
    }
    var St = null;

    function G0(l, t, a) {
        var u = l.alternate,
            e = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (e & 4 && (u = l.updateQueue, u = u !== null ? u.events : null, u !== null))
                for (var n = 0; n < u.length; n++) {
                    var i = u[n];
                    i.ref.impl = i.nextImpl
                }
            Yl(t, l, a), jl(l), e & 4 && (Sa(3, l, l.return), Re(3, l), Sa(5, l, l.return));
            break;
        case 1:
            Yl(t, l, a), jl(l), e & 512 && (W || u === null || pl(u, u.return)), e & 64 && Al && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? t : a.concat(t))));
            break;
        case 26:
            if (n = St, Yl(t, l, a), jl(l), e & 512 && (W || u === null || pl(u, u.return)), e & 4)
                if (e = u !== null ? u.memoizedState : null, a = l.memoizedState, u === null)
                    if (a === null)
                        if (l.stateNode === null)
                            if (Al) l.stateNode = zd(l.type, l.memoizedProps, t.containerInfo, l);
                            else {
                                l: {
                                    t = l.type,
                                    a = l.memoizedProps,
                                    e = n.ownerDocument || n;t: switch (t) {
                                    case "title":
                                        u = e.getElementsByTagName("title")[0], (!u || u[fe] || u[_l] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = e.createElement(t), e.head.insertBefore(u, e.querySelector("head > title"))), Hl(u, t, a), u[_l] = l, zl(u), t = u;
                                        break l;
                                    case "link":
                                        if (n = Kd("link", "href", e).get(t + (a.href || ""))) {
                                            for (i = 0; i < n.length; i++)
                                                if (u = n[i], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                    n.splice(i, 1);
                                                    break t
                                                }
                                        }
                                        u = e.createElement(t), Hl(u, t, a), e.head.appendChild(u);
                                        break;
                                    case "meta":
                                        if (n = Kd("meta", "content", e).get(t + (a.content || ""))) {
                                            for (i = 0; i < n.length; i++)
                                                if (u = n[i], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                    n.splice(i, 1);
                                                    break t
                                                }
                                        }
                                        u = e.createElement(t), Hl(u, t, a), e.head.appendChild(u);
                                        break;
                                    default:
                                        throw Error(m(468, t))
                                    }
                                    u[_l] = l,
                                    zl(u),
                                    t = u
                                }
                                l.stateNode = t
                            }
            else Al || bo(n, l.type, l.stateNode);
            else l.stateNode = Ld(n, a, l.memoizedProps);
            else e !== a ? (e === null ? (t = u.stateNode, t === null || W || t.parentNode.removeChild(t)) : e.count--, a === null ? Al || bo(n, l.type, l.stateNode) : Ld(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && Ec(l, l.memoizedProps, u.memoizedProps);
            break;
        case 27:
            Yl(t, l, a), jl(l), e & 512 && (W || u === null || pl(u, u.return)), u !== null && e & 4 && Ec(l, l.memoizedProps, u.memoizedProps);
            break;
        case 5:
            if (n = Rt, Rt = !1, Yl(t, l, a), Rt = n, jl(l), e & 512 && (W || u === null || pl(u, u.return)), l.flags & 32) {
                t = l.stateNode;
                try {
                    gu(t, ""), J = !0
                } catch (r) {
                    P(l, l.return, r)
                }
            }
            e & 4 && l.stateNode != null && (t = l.memoizedProps, Ec(l, t, u !== null ? u.memoizedProps : t)), e & 1024 && (pc = !0);
            break;
        case 6:
            if (Yl(t, l, a), jl(l), e & 4) {
                if (l.stateNode === null) throw Error(m(162));
                t = l.memoizedProps, a = l.stateNode;
                try {
                    a.nodeValue = t, J = !0
                } catch (r) {
                    P(l, l.return, r)
                }
            }
            break;
        case 3:
            if (J = !1, _i = null, n = St, St = Le(t.containerInfo), Yl(t, l, a), St = n, jl(l), e & 4 && u !== null && u.memoizedState.isDehydrated) try {
                Pu(t.containerInfo)
            } catch (r) {
                P(l, l.return, r)
            }
            pc && (pc = !1, Q0(l)), J = !1;
            break;
        case 4:
            e = Rt, Rt = Al, u = ns(), n = St, St = Le(l.stateNode.containerInfo), Yl(t, l, a), jl(l), St = n, J && Be && (oi = !0), J = u, Rt = e;
            break;
        case 12:
            Yl(t, l, a), jl(l);
            break;
        case 31:
            Yl(t, l, a), jl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mi(l, t)));
            break;
        case 13:
            Yl(t, l, a), jl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (yi = kl()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mi(l, t)));
            break;
        case 22:
            n = l.memoizedState !== null, i = u !== null && u.memoizedState !== null;
            var f = Al,
                c = W,
                y = Rt;
            Al = f || n, Rt = y || n, W = c || i, Yl(t, l, a), W = c, Rt = y, Al = f, jl(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || u === null || i || Al || W || (t = i || W, a = Al, u = W, Al = n || Al, W = t, Ta(l, 2), Al = a, W = u), !n && Rt || Cc(l, n)), e & 4 && (t = l.updateQueue, t !== null && (a = t.retryQueue, a !== null && (t.retryQueue = null, mi(l, a))));
            break;
        case 19:
            Yl(t, l, a), jl(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, mi(l, t)));
            break;
        case 30:
            e & 512 && (W || u === null || pl(u, u.return)), e = ns(), n = Be, i = (a & 335544064) === a, f = l.memoizedProps, Be = i && Lt(f.default, f.update) !== "none", Yl(t, l, a), jl(l), i && u !== null && J && (l.flags |= 4), Be = n, J = e;
            break;
        case 21:
            break;
        case 7:
            e & 512 && (W || u === null || pl(u, u.return)), u && u.stateNode !== null && (u.stateNode._fragmentFiber = l);
        default:
            Yl(t, l, a), jl(l)
        }
    }

    function jl(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var a, u = l.return; u !== null;) {
                    if (A0(u)) {
                        a = u;
                        break
                    }
                    u = u.return
                }
                u = null;
                for (var e = l.return; e !== null;) {
                    if (Tc(e)) {
                        var n = e.stateNode;
                        u === null ? u = [n] : u.push(n)
                    }
                    if (Sc(e)) break;
                    e = e.return
                }
                var i = u;
                if (a == null) throw Error(m(160));
                switch (a.tag) {
                case 27:
                    var f = a.stateNode,
                        c = Ac(l);
                    ni(l, c, f, i);
                    break;
                case 5:
                    var y = a.stateNode;
                    a.flags & 32 && (gu(y, ""), a.flags &= -33);
                    var r = Ac(l);
                    ni(l, r, y, i);
                    break;
                case 3:
                case 4:
                    var T = a.stateNode.containerInfo,
                        d = Ac(l);
                    Oc(l, d, T, i);
                    break;
                default:
                    throw Error(m(161))
                }
            } catch (g) {
                P(l, l.return, g)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }

    function Q0(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var t = l;
                Q0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Iu = !0, t.reset(), Iu = !1), l = l.sibling
            }
    }

    function Bu(l, t) {
        if (t.subtreeFlags & 9270)
            for (t = t.child; t !== null;) X0(t, l), t = t.sibling;
        else p0(t)
    }

    function X0(l, t) {
        var a = l.alternate;
        if (a === null) Nc(l, !1);
        else switch (l.tag) {
        case 3:
            if (Hc = qt = !1, _0(), Bu(t, l), !qt && !oi) {
                if (l = Ht, l !== null)
                    for (var u = 0; u < l.length; u += 3) {
                        a = l[u];
                        var e = l[u + 1];
                        Dd(a, l[u + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate({
                            opacity: [0, 0],
                            pointerEvents: ["none", "none"]
                        }, {
                            duration: 0,
                            fill: "forwards",
                            pseudoElement: "::view-transition-group(" + e + ")"
                        })
                    }
                l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate({
                    opacity: [0, 0],
                    pointerEvents: ["none", "none"]
                }, {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)"
                }), l.animate({
                    width: [0, 0],
                    height: [0, 0]
                }, {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition"
                })), Hc = !0
            }
            Ht = null;
            break;
        case 5:
            Bu(t, l);
            break;
        case 4:
            u = qt, qt = !1, Bu(t, l), qt && (oi = !0), qt = u;
            break;
        case 22:
            l.memoizedState === null && (a.memoizedState !== null ? Nc(l, !1) : Bu(t, l));
            break;
        case 30:
            u = qt, e = _0(), qt = !1, Bu(t, l), qt && (l.flags |= 4);
            var n = l.memoizedProps,
                i = l.stateNode;
            t = xt(n, i), i = xt(a.memoizedProps, i);
            var f = Lt(n.default, n.update);
            f === "none" ? t = !1 : (n = a.memoizedState, a.memoizedState = null, a = l.child, Vl = 0, t = Uc(l, a, t, i, f, n, !0), Vl !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Vu(l, l.memoizedProps.onUpdate), Ht = e) : e !== null && (e.push.apply(e, Ht), Ht = e), qt = (l.flags & 32) !== 0 ? !0 : u;
            break;
        default:
            Bu(t, l)
        }
    }

    function Bt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) C0(l, t.alternate, t), t = t.sibling
    }

    function Ta(l, t) {
        for (l = l.child; l !== null;) {
            var a = l,
                u = t;
            switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Sa(4, a, a.return), Ta(a, u);
                break;
            case 1:
                pl(a, a.return);
                var e = a.stateNode;
                typeof e.componentWillUnmount == "function" && z0(a, a.return, e), Ta(a, u);
                break;
            case 27:
                (u & 2) !== 0 && Qd(a.stateNode, a.type, a.memoizedProps);
            case 5:
                pl(a, a.return), a.tag !== 5 && a.tag !== 27 || qe(a), Ta(a, u);
                break;
            case 6:
                qe(a);
                break;
            case 26:
                pl(a, a.return), e = a.stateNode, a.memoizedState !== null || e === null || W || e.parentNode.removeChild(e), Ta(a, u);
                break;
            case 22:
                a.memoizedState === null && Ta(a, u);
                break;
            case 30:
                pl(a, a.return), Ta(a, u);
                break;
            case 7:
                pl(a, a.return);
            default:
                Ta(a, u)
            }
            l = l.sibling
        }
    }

    function Tt(l, t, a) {
        for (a = (t.subtreeFlags & 8772) !== 0 ? a : a & -2, t = t.child; t !== null;) {
            var u = t.alternate,
                e = l,
                n = t,
                i = n.flags,
                f = (a & 1) !== 0;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Tt(e, n, a), Re(4, n);
                break;
            case 1:
                if (Tt(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function") try {
                    e.componentDidMount()
                } catch (r) {
                    P(u, u.return, r)
                }
                if (u = n, e = u.updateQueue, e !== null) {
                    var c = u.stateNode;
                    try {
                        var y = e.shared.hiddenCallbacks;
                        if (y !== null)
                            for (e.shared.hiddenCallbacks = null, e = 0; e < y.length; e++) cm(y[e], c)
                    } catch (r) {
                        P(u, u.return, r)
                    }
                }
                f && i & 64 && T0(n), pt(n, n.return);
                break;
            case 27:
                (a & 2) !== 0 && O0(n);
            case 5:
                n.tag !== 5 && n.tag !== 27 || E0(n), Tt(e, n, a), f && u === null && i & 4 && zc(n), pt(n, n.return);
                break;
            case 6:
                E0(n);
                break;
            case 26:
                c = n.stateNode, n.memoizedState !== null || c === null || Al || bo(Le(c.ownerDocument), n.type, c), Tt(e, n, a), f && u === null && i & 4 && zc(n), pt(n, n.return);
                break;
            case 12:
                Tt(e, n, a);
                break;
            case 31:
                Tt(e, n, a), f && i & 4 && Y0(e, n);
                break;
            case 13:
                Tt(e, n, a), f && i & 4 && j0(e, n);
                break;
            case 22:
                n.memoizedState === null && Tt(e, n, a), pt(n, n.return);
                break;
            case 30:
                Tt(e, n, a), pt(n, n.return);
                break;
            case 7:
                pt(n, n.return);
            default:
                Tt(e, n, a)
            }
            t = t.sibling
        }
    }

    function qc(l, t) {
        var a = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Te(a))
    }

    function Bc(l, t) {
        l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Te(l))
    }

    function mt(l, t, a, u) {
        var e = (a & 335544064) === a;
        if (t.subtreeFlags & (e ? 10262 : 10256))
            for (t = t.child; t !== null;) Z0(l, t, a, u), t = t.sibling;
        else e && U0(t)
    }

    function Z0(l, t, a, u) {
        var e = (a & 335544064) === a;
        e && t.alternate === null && t.return !== null && t.return.alternate !== null && ci(t);
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            mt(l, t, a, u), n & 2048 && Re(9, t);
            break;
        case 1:
            mt(l, t, a, u);
            break;
        case 3:
            mt(l, t, a, u), e && Hc && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Te(n)));
            break;
        case 12:
            if (n & 2048) {
                mt(l, t, a, u), n = t.stateNode;
                try {
                    var i = t.memoizedProps,
                        f = i.id,
                        c = i.onPostCommit;
                    typeof c == "function" && c(f, t.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0)
                } catch (y) {
                    P(t, t.return, y)
                }
            } else mt(l, t, a, u);
            break;
        case 31:
            mt(l, t, a, u);
            break;
        case 13:
            mt(l, t, a, u);
            break;
        case 23:
            break;
        case 22:
            i = t.stateNode, f = t.alternate, t.memoizedState !== null ? (e && f !== null && f.memoizedState === null && ci(f), i._visibility & 2 ? mt(l, t, a, u) : Ye(l, t)) : (e && f !== null && f.memoizedState !== null && ci(t), i._visibility & 2 ? mt(l, t, a, u) : (i._visibility |= 2, Yu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1))), n & 2048 && qc(f, t);
            break;
        case 24:
            mt(l, t, a, u), n & 2048 && Bc(t.alternate, t);
            break;
        case 30:
            e && (n = t.alternate, n !== null && (Ct(n.child, !0), Ct(t.child, !0))), mt(l, t, a, u);
            break;
        default:
            mt(l, t, a, u)
        }
    }

    function Yu(l, t, a, u, e) {
        for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
            var n = l,
                i = t,
                f = a,
                c = u,
                y = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Yu(n, i, f, c, e), Re(8, i);
                break;
            case 23:
                break;
            case 22:
                var r = i.stateNode;
                i.memoizedState !== null ? r._visibility & 2 ? Yu(n, i, f, c, e) : Ye(n, i) : (r._visibility |= 2, Yu(n, i, f, c, e)), e && y & 2048 && qc(i.alternate, i);
                break;
            case 24:
                Yu(n, i, f, c, e), e && y & 2048 && Bc(i.alternate, i);
                break;
            default:
                Yu(n, i, f, c, e)
            }
            t = t.sibling
        }
    }

    function Ye(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = l,
                    u = t,
                    e = u.flags;
                switch (u.tag) {
                case 22:
                    Ye(a, u), e & 2048 && qc(u.alternate, u);
                    break;
                case 24:
                    Ye(a, u), e & 2048 && Bc(u.alternate, u);
                    break;
                default:
                    Ye(a, u)
                }
                t = t.sibling
            }
    }
    var lu = 8192;

    function tu(l, t, a) {
        if (l.subtreeFlags & lu)
            for (l = l.child; l !== null;) V0(l, t, a), l = l.sibling
    }

    function V0(l, t, a) {
        switch (l.tag) {
        case 26:
            tu(l, t, a), l.flags & lu && (l.memoizedState !== null ? Sg(a, St, l.memoizedState, l.memoizedProps) : (l = l.stateNode, (t & 335544128) === t && Fd(a, l)));
            break;
        case 5:
            tu(l, t, a), l.flags & lu && (l = l.stateNode, (t & 335544128) === t && Fd(a, l));
            break;
        case 3:
        case 4:
            var u = St;
            St = Le(l.stateNode.containerInfo), tu(l, t, a), St = u;
            break;
        case 22:
            l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = lu, lu = 16777216, tu(l, t, a), lu = u) : tu(l, t, a));
            break;
        case 30:
            if ((l.flags & lu) !== 0 && (u = l.memoizedProps.name, u != null && u !== "auto")) {
                var e = l.stateNode;
                e.paired = null, lt === null && (lt = new Map), lt.set(u, e)
            }
            tu(l, t, a);
            break;
        default:
            tu(l, t, a)
        }
    }

    function x0(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling, l.sibling = null, l = t; while (l !== null)
        }
    }

    function je(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    Ol = u, K0(u, l)
                }
            x0(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) L0(l), l = l.sibling
    }

    function L0(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            je(l), l.flags & 2048 && Sa(9, l, l.return);
            break;
        case 3:
            je(l);
            break;
        case 12:
            je(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, di(l)) : je(l);
            break;
        default:
            je(l)
        }
    }

    function di(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    Ol = u, K0(u, l)
                }
            x0(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
            case 0:
            case 11:
            case 15:
                Sa(8, t, t.return), di(t);
                break;
            case 22:
                a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, di(t));
                break;
            default:
                di(t)
            }
            l = l.sibling
        }
    }

    function K0(l, t) {
        for (; Ol !== null;) {
            var a = Ol;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Sa(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var u = a.memoizedState.cachePool.pool;
                    u != null && u.refCount++
                }
                break;
            case 24:
                Te(a.memoizedState.cache)
            }
            if (u = a.child, u !== null) u.return = a, Ol = u;
            else l: for (a = l; Ol !== null;) {
                u = Ol;
                var e = u.sibling,
                    n = u.return;
                if (q0(u), u === a) {
                    Ol = null;
                    break l
                }
                if (e !== null) {
                    e.return = n, Ol = e;
                    break l
                }
                Ol = n
            }
        }
    }
    var yv = {
            getCacheForType: function (l) {
                var t = Dl(gl),
                    a = t.data.get(l);
                return a === void 0 && (a = l(), t.data.set(l, a)), a
            },
            cacheSignal: function () {
                return Dl(gl).controller.signal
            }
        },
        vv = typeof WeakMap == "function" ? WeakMap : Map,
        F = 0,
        ul = null,
        G = null,
        V = 0,
        I = 0,
        tt = null,
        za = !1,
        ju = !1,
        Yc = !1,
        Pt = 0,
        hl = 0,
        Ea = 0,
        au = 0,
        hi = 0,
        at = 0,
        Gu = 0,
        Ge = null,
        Ll = null,
        jc = !1,
        yi = 0,
        w0 = 0,
        vi = 1 / 0,
        gi = null,
        Aa = null,
        ml = 0,
        zt = null,
        uu = null,
        Yt = 0,
        Gc = 0,
        Qc = null,
        J0 = null,
        Qu = null,
        Xu = null,
        Zu = null,
        Qe = 0,
        ri = null;

    function ut() {
        return (F & 2) !== 0 && V !== 0 ? V & -V : H.T !== null ? Fc() : Wo()
    }

    function k0() {
        if (at === 0)
            if ((V & 536870912) === 0 || j) {
                var l = mn;
                mn <<= 1, (mn & 3932160) === 0 && (mn = 262144), at = l
            } else at = 536870912;
        return l = Ml.current, l !== null && (l.flags |= 32), at
    }

    function Vu(l, t) {
        if (t != null) {
            var a = l.stateNode,
                u = a.ref;
            u === null && (u = a.ref = Md(xt(l.memoizedProps, a))), Xu === null && (Xu = []), Xu.push(t.bind(null, u))
        }
    }

    function Kl(l, t, a) {
        (l === ul && (I === 2 || I === 9) || l.cancelPendingCommit !== null) && (xu(l, 0), Oa(l, V, at, !1)), ie(l, a), ((F & 2) === 0 || l !== ul) && (l === ul && ((F & 2) === 0 && (au |= a), hl === 4 && Oa(l, V, at, !1)), jt(l))
    }

    function F0(l, t, a) {
        if ((F & 6) !== 0) throw Error(m(327));
        var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ne(l, t),
            e = u ? bv(l, t) : Zc(l, t, !0),
            n = u;
        do {
            if (e === 0) {
                ju && !u && Oa(l, t, 0, !1);
                break
            } else {
                if (a = l.current.alternate, n && !gv(a)) {
                    e = Zc(l, t, !1), n = !1;
                    continue
                }
                if (e === 2) {
                    if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
                    else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l: {
                            var f = l;e = Ge;
                            var c = f.current.memoizedState.isDehydrated;
                            if (c && (xu(f, i).flags |= 256), i = Zc(f, i, !1), i !== 2 && i !== 6) {
                                if (Yc && !c) {
                                    f.errorRecoveryDisabledLanes |= n, au |= n, e = 4;
                                    break l
                                }
                                n = Ll, Ll = e, n !== null && (Ll === null ? Ll = n : Ll.push.apply(Ll, n))
                            }
                            e = i
                        }
                        if (n = !1, e !== 2) continue
                    }
                }
                if (e === 1) {
                    xu(l, 0), Oa(l, t, 0, !0);
                    break
                }
                l: {
                    switch (u = l, n = e, n) {
                    case 0:
                    case 1:
                        throw Error(m(345));
                    case 4:
                        if ((t & 4194048) !== t && (t & 62914560) !== t) break;
                    case 6:
                        Oa(u, t, at, !za);
                        break l;
                    case 2:
                        Ll = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(m(329))
                    }
                    if ((t & 62914560) === t && (e = yi + 300 - kl(), 10 < e)) {
                        if (Oa(u, t, at, !za), hn(u, 0, !0) !== 0) break l;
                        Yt = t, u.timeoutHandle = io(W0.bind(null, u, a, Ll, gi, jc, t, at, au, Gu, za, n, "Throttled", -0, 0), e);
                        break l
                    }
                    W0(u, a, Ll, gi, jc, t, at, au, Gu, za, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        jt(l)
    }

    function W0(l, t, a, u, e, n, i, f, c, y, r, T, d, g) {
        l.timeoutHandle = -1;
        var A = t.subtreeFlags,
            _ = (n & 335544064) === n;
        if (T = null, (_ || A & 8192 || (A & 16785408) === 16785408) && (T = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Dt
            }, lt = null, V0(t, n, T), _ && (A = T, _ = l.containerInfo, _ = (_.nodeType === 9 ? _ : _.ownerDocument).__reactViewTransition, _ != null && (A.count++, A.waitingForViewTransition = !0, A = Je.bind(A), _.finished.then(A, A))), A = (n & 62914560) === n ? yi - kl() : (n & 4194048) === n ? w0 - kl() : 0, A = Tg(T, A), A !== null)) {
            Yt = n, l.cancelPendingCommit = A(ed.bind(null, l, t, n, a, u, e, i, f, c, y, r, T, null, d, g)), Oa(l, n, i, !y);
            return
        }
        ed(l, t, n, a, u, e, i, f, c, y, r, T)
    }

    function gv(l) {
        for (var t = l;;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var u = 0; u < a.length; u++) {
                    var e = a[u],
                        n = e.getSnapshot;
                    e = e.value;
                    try {
                        if (!Il(n(), e)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
            else {
                if (t === l) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Oa(l, t, a, u) {
        t = Ko(l, t), t &= ~hi, t &= ~au, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
        for (var e = t; 0 < e;) {
            var n = 31 - Wl(e),
                i = 1 << n;
            u[n] = -1, e &= ~i
        }
        a !== 0 && Jo(l, a, t)
    }

    function bi() {
        return (F & 6) === 0 ? (Xe(0), !1) : !0
    }

    function Xc() {
        if (G !== null) {
            if (I === 0) var l = G.return;
            else l = G, Jt = La = null, kf(l), Uu = null, Ae = 0, l = G;
            for (; l !== null;) S0(l.alternate, l), l = l.return;
            G = null
        }
    }

    function xu(l, t) {
        var a = l.timeoutHandle;
        return a !== -1 && (l.timeoutHandle = -1, Xv(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Yt = 0, Xc(), ul = l, G = a = Kt(l.current, null), V = t, I = 0, tt = null, za = !1, ju = ne(l, t), Yc = !1, Gu = at = hi = au = Ea = hl = 0, Ll = Ge = null, jc = !1, Pt = Ko(l, t), _n(), a
    }

    function $0(l, t) {
        R = null, H.H = $n, t === Mu || t === jn ? (t = em(), I = 3) : t === Bf ? (t = em(), I = 4) : I = t === oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, tt = t, G === null && (hl = 1, In(l, ft(t, l.current)))
    }

    function I0() {
        var l = Ml.current;
        return l === null ? !0 : (V & 4194048) === V ? Cl === null : (V & 62914560) === V || (V & 536870912) !== 0 ? l === Cl : !1
    }

    function P0() {
        var l = H.H;
        return H.H = $n, l === null ? $n : l
    }

    function ld() {
        var l = H.A;
        return H.A = yv, l
    }

    function Si() {
        hl = 4, za || (V & 4194048) !== V && Ml.current !== null || (ju = !0), (Ea & 134217727) === 0 && (au & 134217727) === 0 || ul === null || Oa(ul, V, at, !1)
    }

    function Zc(l, t, a) {
        var u = F;
        F |= 2;
        var e = P0(),
            n = ld();
        (ul !== l || V !== t) && (gi = null, xu(l, t)), t = !1;
        var i = hl;
        l: do try {
                if (I !== 0 && G !== null) {
                    var f = G,
                        c = tt;
                    switch (I) {
                    case 8:
                        Xc(), i = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Ml.current === null && (t = !0);
                        var y = I;
                        if (I = 0, tt = null, Lu(l, f, c, y), a && ju) {
                            i = 0;
                            break l
                        }
                        break;
                    default:
                        y = I, I = 0, tt = null, Lu(l, f, c, y)
                    }
                }
                rv(), i = hl;
                break
            } catch (r) {
                $0(l, r)
            }
            while (!0);
            return t && l.shellSuspendCounter++, Jt = La = null, F = u, H.H = e, H.A = n, G === null && (ul = null, V = 0, _n()), i
    }

    function rv() {
        for (; G !== null;) td(G)
    }

    function bv(l, t) {
        var a = F;
        F |= 2;
        var u = P0(),
            e = ld();
        ul !== l || V !== t ? (gi = null, vi = kl() + 500, xu(l, t)) : ju = ne(l, t);
        l: do try {
                if (I !== 0 && G !== null) {
                    t = G;
                    var n = tt;
                    t: switch (I) {
                    case 1:
                        I = 0, tt = null, Lu(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (am(n)) {
                            I = 0, tt = null, ad(t);
                            break
                        }
                        t = function () {
                            I !== 2 && I !== 9 || ul !== l || (I = 7), jt(l)
                        }, n.then(t, t);
                        break l;
                    case 3:
                        I = 7;
                        break l;
                    case 4:
                        I = 5;
                        break l;
                    case 7:
                        am(n) ? (I = 0, tt = null, ad(t)) : (I = 0, tt = null, Lu(l, t, n, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (G.tag) {
                        case 26:
                            i = G.memoizedState;
                        case 5:
                        case 27:
                            var f = G;
                            if (i ? Jd(i) : f.stateNode.complete) {
                                I = 0, tt = null;
                                var c = f.sibling;
                                if (c !== null) G = c;
                                else {
                                    var y = f.return;
                                    y !== null ? (G = y, Ti(y)) : G = null
                                }
                                break t
                            }
                        }
                        I = 0, tt = null, Lu(l, t, n, 5);
                        break;
                    case 6:
                        I = 0, tt = null, Lu(l, t, n, 6);
                        break;
                    case 8:
                        Xc(), hl = 6;
                        break l;
                    default:
                        throw Error(m(462))
                    }
                }
                Sv();
                break
            } catch (r) {
                $0(l, r)
            }
            while (!0);
            return Jt = La = null, H.H = u, H.A = e, F = a, G !== null ? 0 : (ul = null, V = 0, _n(), hl)
    }

    function Sv() {
        for (; G !== null && !Yh();) td(G)
    }

    function td(l) {
        var t = r0(l.alternate, l, Pt);
        l.memoizedProps = l.pendingProps, t === null ? Ti(l) : G = t
    }

    function ad(l) {
        var t = l,
            a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = s0(a, t, t.pendingProps, t.type, void 0, V);
            break;
        case 11:
            t = s0(a, t, t.pendingProps, t.type.render, t.ref, V);
            break;
        case 5:
            kf(t);
            var u = t;
            u === El && (j ? (Cn(u), u.tag === 5 && u.stateNode != null && (il = u.stateNode)) : (Cn(u), j = !0));
        default:
            S0(a, t), t = G = Ks(t, Pt), t = r0(a, t, Pt)
        }
        l.memoizedProps = l.pendingProps, t === null ? Ti(l) : G = t
    }

    function Lu(l, t, a, u) {
        Jt = La = null, kf(t), Uu = null, Ae = 0;
        var e = t.return;
        try {
            if (iv(l, e, t, a, V)) {
                hl = 1, In(l, ft(a, l.current)), G = null;
                return
            }
        } catch (n) {
            if (e !== null) throw G = e, n;
            hl = 1, In(l, ft(a, l.current)), G = null;
            return
        }
        t.flags & 32768 ? (j || u === 1 ? l = !0 : ju || (V & 536870912) !== 0 ? l = !1 : (za = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Ml.current, u !== null && u.tag === 13 && (u.flags |= 16384))), ud(t, l)) : Ti(t)
    }

    function Ti(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                ud(t, za);
                return
            }
            l = t.return;
            var a = sv(t.alternate, t, Pt);
            if (a !== null) {
                G = a;
                return
            }
            if (t = t.sibling, t !== null) {
                G = t;
                return
            }
            G = t = l
        } while (t !== null);
        hl === 0 && (hl = 5)
    }

    function ud(l, t) {
        do {
            var a = mv(l.alternate, l);
            if (a !== null) {
                a.flags &= 32767, G = a;
                return
            }
            if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
                G = l;
                return
            }
            G = l = a
        } while (l !== null);
        hl = 6, G = null
    }

    function ed(l, t, a, u, e, n, i, f, c, y, r, T) {
        l.cancelPendingCommit = null;
        do zi(); while (ml !== 0);
        if ((F & 6) !== 0) throw Error(m(327));
        if (t !== null) {
            if (t === l.current) throw Error(m(177));
            l === ul && (G = ul = null, V = 0), uu = t, zt = l, Yt = a, Qc = e, J0 = u, Tv(l, t, a, i, f, c, T)
        }
    }

    function Tv(l, t, a, u, e, n, i) {
        var f = t.lanes | t.childLanes;
        if (Gc = f, f |= Ef, wh(l, a, f, u, e, n), Xu = null, (a & 335544064) === a ? (Zu = ky(l), u = 10262) : (Zu = null, u = 10256), (t.subtreeFlags & u) !== 0 || (t.flags & u) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, _v(on, function () {
                return Kc(), null
            })) : (l.callbackNode = null, l.callbackPriority = 0), ii = !1, u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
            u = H.T, H.T = null, e = k.p, k.p = 2, n = F, F |= 4;
            try {
                dv(l, t, a)
            } finally {
                F = n, k.p = e, H.T = u
            }
        }
        ml = 1, ii ? Qu = wv(i, l.containerInfo, Zu, Vc, xc, Ev, Lc, Kc, zv) : (Vc(), xc(), Lc())
    }

    function zv(l) {
        if (ml !== 0) {
            var t = zt.onRecoverableError;
            t(l, {
                componentStack: null
            })
        }
    }

    function Ev() {
        ml === 3 && (ml = 0, X0(uu, zt), ml = 4)
    }

    function Vc() {
        if (ml === 1) {
            ml = 0;
            var l = zt,
                t = uu,
                a = Yt,
                u = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || u) {
                u = H.T, H.T = null;
                var e = k.p;
                k.p = 2;
                var n = F;
                F |= 4;
                try {
                    Be = oi = !1, G0(t, l, a), a = uo;
                    var i = Bs(l.containerInfo),
                        f = a.focusedElem,
                        c = a.selectionRange;
                    if (i !== f && f && f.ownerDocument && qs(f.ownerDocument.documentElement, f)) {
                        if (c !== null && rf(f)) {
                            var y = c.start,
                                r = c.end;
                            if (r === void 0 && (r = y), "selectionStart" in f) f.selectionStart = y, f.selectionEnd = Math.min(r, f.value.length);
                            else {
                                var T = f.ownerDocument || document,
                                    d = T && T.defaultView || window;
                                if (d.getSelection) {
                                    var g = d.getSelection(),
                                        A = f.textContent.length,
                                        _ = Math.min(c.start, A),
                                        q = c.end === void 0 ? _ : Math.min(c.end, A);
                                    !g.extend && _ > q && (i = q, q = _, _ = i);
                                    var h = Rs(f, _),
                                        o = Rs(f, q);
                                    if (h && o && (g.rangeCount !== 1 || g.anchorNode !== h.node || g.anchorOffset !== h.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                                        var v = T.createRange();
                                        v.setStart(h.node, h.offset), g.removeAllRanges(), _ > q ? (g.addRange(v), g.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), g.addRange(v))
                                    }
                                }
                            }
                        }
                        for (T = [], g = f; g = g.parentNode;) g.nodeType === 1 && T.push({
                            element: g,
                            left: g.scrollLeft,
                            top: g.scrollTop
                        });
                        for (typeof f.focus == "function" && f.focus(), f = 0; f < T.length; f++) {
                            var S = T[f];
                            S.element.scrollLeft = S.left, S.element.scrollTop = S.top
                        }
                    }
                    Iu = !!ao, uo = ao = null
                } finally {
                    F = n, k.p = e, H.T = u
                }
            }
            l.current = t, ml = 2
        }
    }

    function xc() {
        if (ml === 2) {
            ml = 0;
            var l = zt,
                t = uu,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = H.T, H.T = null;
                var u = k.p;
                k.p = 2;
                var e = F;
                F |= 4;
                try {
                    C0(l, t.alternate, t)
                } finally {
                    F = e, k.p = u, H.T = a
                }
            }
            ml = 3
        }
    }

    function Lc() {
        if (ml === 4 || ml === 3) {
            ml = 0;
            var l = Qu;
            Qu = null, jh();
            var t = zt,
                a = uu,
                u = Yt,
                e = J0,
                n = (u & 335544064) === u ? 10262 : 10256;
            if ((a.subtreeFlags & n) !== 0 || (a.flags & n) !== 0 ? ml = 5 : (ml = 0, uu = zt = null, nd(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (Aa = null), Ii(u), a = a.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function") try {
                Fl.onCommitFiberRoot(ee, a, void 0, (a.current.flags & 128) === 128)
            } catch {}
            if (e !== null) {
                a = H.T, n = k.p, k.p = 2, H.T = null;
                try {
                    for (var i = t.onRecoverableError, f = 0; f < e.length; f++) {
                        var c = e[f];
                        i(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    H.T = a, k.p = n
                }
            }
            if (e = Xu, i = Zu, Zu = null, e !== null && (Xu = null, i === null && (i = []), l !== null))
                for (c = 0; c < e.length; c++) a = (0, e[c])(i), a !== void 0 && l.finished.finally(a);
            (Yt & 3) !== 0 && zi(), jt(t), n = t.pendingLanes, (u & 261930) !== 0 && (n & 42) !== 0 ? t === ri ? Qe++ : (Qe = 0, ri = t) : (Qe = 0, ri = null), Xe(0)
        }
    }

    function nd(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Te(t)))
    }

    function zi() {
        return Qu !== null && (Qu.skipTransition(), Qu = null), Vc(), xc(), Lc(), Kc()
    }

    function Kc() {
        if (ml !== 5) return !1;
        var l = zt,
            t = Gc;
        Gc = 0;
        var a = Ii(Yt),
            u = H.T,
            e = k.p;
        try {
            k.p = 32 > a ? 32 : a, H.T = null, a = Qc, Qc = null;
            var n = zt,
                i = Yt;
            if (ml = 0, uu = zt = null, Yt = 0, (F & 6) !== 0) throw Error(m(331));
            var f = F;
            if (F |= 4, L0(n.current), Z0(n, n.current, i, a), F = f, Xe(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function") try {
                Fl.onPostCommitFiberRoot(ee, n)
            } catch {}
            return !0
        } finally {
            k.p = e, H.T = u, nd(l, t)
        }
    }

    function id(l, t, a) {
        t = ft(a, t), t = cc(l.stateNode, t, 2), l = va(l, t, 2), l !== null && (ie(l, 2), jt(l))
    }

    function P(l, t, a) {
        if (l.tag === 3) id(l, l, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    id(t, l, a);
                    break
                } else if (t.tag === 1) {
                    var u = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Aa === null || !Aa.has(u))) {
                        l = ft(a, l), a = a0(2), u = va(t, a, 2), u !== null && (u0(a, u, t, l), ie(u, 2), jt(u));
                        break
                    }
                }
                t = t.return
            }
    }

    function wc(l, t, a) {
        var u = l.pingCache;
        if (u === null) {
            u = l.pingCache = new vv;
            var e = new Set;
            u.set(t, e)
        } else e = u.get(t), e === void 0 && (e = new Set, u.set(t, e));
        e.has(a) || (Yc = !0, e.add(a), l = Av.bind(null, l, t, a), t.then(l, l))
    }

    function Av(l, t, a) {
        var u = l.pingCache;
        u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, ul === l && (V & a) === a && ((hl === 4 || hl === 3 && (V & 62914560) === V && 300 > kl() - yi) && (F & 2) === 0 ? xu(l, 0) : hi |= a, Gu === V && (Gu = 0)), jt(l)
    }

    function fd(l, t) {
        t === 0 && (t = wo()), l = Za(l, t), l !== null && (ie(l, t), jt(l))
    }

    function Ov(l) {
        var t = l.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane), fd(l, a)
    }

    function Nv(l, t) {
        var a = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var u = l.stateNode,
                e = l.memoizedState;
            e !== null && (a = e.retryLane);
            break;
        case 19:
            u = l.stateNode;
            break;
        case 22:
            u = l.stateNode._retryCache;
            break;
        default:
            throw Error(m(314))
        }
        u !== null && u.delete(t), fd(l, a)
    }

    function _v(l, t) {
        return ki(l, t)
    }
    var Ku = null,
        wu = null,
        Jc = !1,
        Ei = !1,
        kc = !1,
        Na = 0;

    function jt(l) {
        l !== wu && l.next === null && (wu === null ? Ku = wu = l : wu = wu.next = l), Ei = !0, Jc || (Jc = !0, Mv())
    }

    function Xe(l, t) {
        if (!kc && Ei) {
            kc = !0;
            do
                for (var a = !1, u = Ku; u !== null;) {
                    if (l !== 0) {
                        var e = u.pendingLanes;
                        if (e === 0) var n = 0;
                        else {
                            var i = u.suspendedLanes,
                                f = u.pingedLanes;
                            n = (1 << 31 - Wl(42 | l) + 1) - 1, n &= e & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (a = !0, md(u, n))
                    } else n = V, n = hn(u, u === ul ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || ne(u, n) || (a = !0, md(u, n));
                    u = u.next
                }
            while (a);
            kc = !1
        }
    }

    function Dv() {
        cd()
    }

    function cd() {
        Ei = Jc = !1;
        var l = 0;
        Na !== 0 && Qv() && (l = Na);
        for (var t = kl(), a = null, u = Ku; u !== null;) {
            var e = u.next,
                n = od(u, t);
            n === 0 ? (u.next = null, a === null ? Ku = e : a.next = e, e === null && (wu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Ei = !0)), u = e
        }
        ml !== 0 && ml !== 5 || Xe(l), Na !== 0 && (Na = 0)
    }

    function od(l, t) {
        for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
            var i = 31 - Wl(n),
                f = 1 << i,
                c = e[i];
            c === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[i] = Kh(f, t)) : c <= t && (l.expiredLanes |= f), n &= ~f
        }
        if (t = ul, a = V, a = hn(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (I === 2 || I === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Fi(u), l.callbackNode = null, l.callbackPriority = 0;
        if ((a & 3) === 0 || ne(l, a)) {
            if (t = a & -a, t === l.callbackPriority) return t;
            switch (u !== null && Fi(u), Ii(a)) {
            case 2:
            case 8:
                a = xo;
                break;
            case 32:
                a = on;
                break;
            case 268435456:
                a = Lo;
                break;
            default:
                a = on
            }
            return u = sd.bind(null, l), a = ki(a, u), l.callbackPriority = t, l.callbackNode = a, t
        }
        return u !== null && u !== null && Fi(u), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function sd(l, t) {
        if (ml !== 0 && ml !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var a = l.callbackNode;
        if (zi() && l.callbackNode !== a) return null;
        var u = V;
        return u = hn(l, l === ul ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (F0(l, u, t), od(l, kl()), l.callbackNode != null && l.callbackNode === a ? sd.bind(null, l) : null)
    }

    function md(l, t) {
        if (zi()) return null;
        F0(l, t, !0)
    }

    function Mv() {
        Zv(function () {
            (F & 6) !== 0 ? ki(Vo, Dv) : cd()
        })
    }

    function Fc() {
        if (Na === 0) {
            var l = Ja;
            l === 0 && (l = sn, sn <<= 1, (sn & 261888) === 0 && (sn = 256)), Na = l
        }
        return Na
    }

    function dd(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : bn(l)
    }

    function Uv(l, t, a, u, e) {
        if (t === "submit" && a && a.stateNode === e) {
            var n = dd((e[Xl] || null).action),
                i = u.submitter;
            i && (t = (t = i[Xl] || null) ? dd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
            var f = new En("action", "action", null, u, e);
            l.push({
                event: f,
                listeners: [{
                    instance: null,
                    listener: function () {
                        if (u.defaultPrevented) {
                            if (Na !== 0) {
                                var c = new FormData(e, i);
                                uc(a, {
                                    pending: !0,
                                    data: c,
                                    method: e.method,
                                    action: n
                                }, null, c)
                            }
                        } else typeof n == "function" && (f.preventDefault(), c = new FormData(e, i), uc(a, {
                            pending: !0,
                            data: c,
                            method: e.method,
                            action: n
                        }, n, c))
                    },
                    currentTarget: e
                }]
            })
        }
    }
    for (var Wc = 0; Wc < zf.length; Wc++) {
        var $c = zf[Wc],
            pv = $c.toLowerCase(),
            Hv = $c[0].toUpperCase() + $c.slice(1);
        rt(pv, "on" + Hv)
    }
    rt(Gs, "onAnimationEnd"), rt(Qs, "onAnimationIteration"), rt(Xs, "onAnimationStart"), rt("dblclick", "onDoubleClick"), rt("focusin", "onFocus"), rt("focusout", "onBlur"), rt(Xy, "onTransitionRun"), rt(Zy, "onTransitionStart"), rt(Vy, "onTransitionCancel"), rt(Zs, "onTransitionEnd"), yu("onMouseEnter", ["mouseout", "mouseover"]), yu("onMouseLeave", ["mouseout", "mouseover"]), yu("onPointerEnter", ["pointerout", "pointerover"]), yu("onPointerLeave", ["pointerout", "pointerover"]), Ga("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ga("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ga("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ga("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ga("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ga("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ze = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Cv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ze));

    function hd(l, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < l.length; a++) {
            var u = l[a],
                e = u.event;
            u = u.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = u.length - 1; 0 <= i; i--) {
                        var f = u[i],
                            c = f.instance,
                            y = f.currentTarget;
                        if (f = f.listener, c !== n && e.isPropagationStopped()) break l;
                        n = f, e.currentTarget = y;
                        try {
                            n(e)
                        } catch (r) {
                            Nn(r)
                        }
                        e.currentTarget = null, n = c
                    } else
                        for (i = 0; i < u.length; i++) {
                            if (f = u[i], c = f.instance, y = f.currentTarget, f = f.listener, c !== n && e.isPropagationStopped()) break l;
                            n = f, e.currentTarget = y;
                            try {
                                n(e)
                            } catch (r) {
                                Nn(r)
                            }
                            e.currentTarget = null, n = c
                        }
            }
        }
    }

    function Q(l, t) {
        var a = t[Io];
        a === void 0 && (a = t[Io] = new Set);
        var u = l + "__bubble";
        a.has(u) || (yd(t, l, 2, !1), a.add(u))
    }

    function Ic(l, t, a) {
        var u = 0;
        t && (u |= 4), yd(a, l, u, t)
    }
    var Ai = "_reactListening" + Math.random().toString(36).slice(2);

    function Pc(l) {
        if (!l[Ai]) {
            l[Ai] = !0, ts.forEach(function (a) {
                a !== "selectionchange" && (Cv.has(a) || Ic(a, !1, l), Ic(a, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[Ai] || (t[Ai] = !0, Ic("selectionchange", !1, t))
        }
    }

    function yd(l, t, a, u) {
        switch (uh(t)) {
        case 2:
            var e = Og;
            break;
        case 8:
            e = Ng;
            break;
        default:
            e = To
        }
        a = e.bind(null, t, a, l), e = void 0, !ff || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
            capture: !0,
            passive: e
        }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
            passive: e
        }) : l.addEventListener(t, a, !1)
    }

    function lo(l, t, a, u, e) {
        var n = u;
        if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (;;) {
            if (u === null) return;
            var i = u.tag;
            if (i === 3 || i === 4) {
                var f = u.stateNode.containerInfo;
                if (f === e) break;
                if (i === 4)
                    for (i = u.return; i !== null;) {
                        var c = i.tag;
                        if ((c === 3 || c === 4) && i.stateNode.containerInfo === e) return;
                        i = i.return
                    }
                for (; f !== null;) {
                    if (i = ja(f), i === null) return;
                    if (c = i.tag, c === 5 || c === 6 || c === 26 || c === 27) {
                        u = n = i;
                        continue l
                    }
                    f = f.parentNode
                }
            }
            u = u.return
        }
        ys(function () {
            var y = n,
                r = ef(a),
                T = [];
            l: {
                var d = Vs.get(l);
                if (d !== void 0) {
                    var g = En,
                        A = l;
                    switch (l) {
                    case "keypress":
                        if (Tn(a) === 0) break l;
                    case "keydown":
                    case "keyup":
                        g = gy;
                        break;
                    case "focusin":
                        A = "focus", g = mf;
                        break;
                    case "focusout":
                        A = "blur", g = mf;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = mf;
                        break;
                    case "click":
                        if (a.button === 2) break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = rs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = ey;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = zy;
                        break;
                    case Gs:
                    case Qs:
                    case Xs:
                        g = fy;
                        break;
                    case Zs:
                        g = Ay;
                        break;
                    case "scroll":
                    case "scrollend":
                        g = ay;
                        break;
                    case "wheel":
                        g = Ny;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = oy;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Ss;
                        break;
                    case "submit":
                        g = Sy;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        g = Dy
                    }
                    var _ = (t & 4) !== 0,
                        q = !_ && (l === "scroll" || l === "scrollend"),
                        h = _ ? d !== null ? d + "Capture" : null : d;
                    _ = [];
                    for (var o = y, v; o !== null;) {
                        var S = o;
                        if (v = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || v === null || h === null || (S = oe(o, h), S != null && _.push(Ve(o, S, v))), q) break;
                        o = o.return
                    }
                    0 < _.length && (d = new g(d, A, null, a, r), T.push({
                        event: d,
                        listeners: _
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (g = l === "mouseover" || l === "pointerover", d = l === "mouseout" || l === "pointerout", g && a !== uf && (A = a.relatedTarget || a.fromElement) && (ja(A) || A[mu])) break l;
                    (d || g) && (A = r.window === r ? r : (g = r.ownerDocument) ? g.defaultView || g.parentWindow : window, d ? (g = a.relatedTarget || a.toElement, d = y, g = g ? ja(g) : null, g !== null && (q = D(g), _ = g.tag, g !== q || _ !== 5 && _ !== 27 && _ !== 6) && (g = null)) : (d = null, g = y), d !== g && (_ = rs, S = "onMouseLeave", h = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (_ = Ss, S = "onPointerLeave", h = "onPointerEnter", o = "pointer"), q = d == null ? A : ce(d), v = g == null ? A : ce(g), A = new _(S, o + "leave", d, a, r), A.target = q, A.relatedTarget = v, S = null, ja(r) === y && (_ = new _(h, o + "enter", g, a, r), _.target = v, _.relatedTarget = q, S = _), q = S, _ = d && g ? Rl(d, g, Rv) : null, d !== null && vd(T, A, d, _, !1), g !== null && q !== null && vd(T, q, g, _, !0)))
                }
                l: {
                    if (d = y ? ce(y) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var N = Ds;
                    else if (Ns(d))
                        if (Ms) N = jy;
                        else {
                            N = By;
                            var x = qy
                        }
                    else g = d.nodeName,
                    !g || g.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? y && af(y.elementType) && (N = Ds) : N = Yy;
                    if (N && (N = N(l, y))) {
                        _s(T, N, a, r);
                        break l
                    }
                    x && x(l, d, y)
                }
                switch (x = y ? ce(y) : window, l) {
                case "focusin":
                    (Ns(x) || x.contentEditable === "true") && (Tu = x, bf = y, re = null);
                    break;
                case "focusout":
                    re = bf = Tu = null;
                    break;
                case "mousedown":
                    Sf = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Sf = !1, Ys(T, a, r);
                    break;
                case "selectionchange":
                    if (Qy) break;
                case "keydown":
                case "keyup":
                    Ys(T, a, r)
                }
                var M;
                if (hf) l: {
                    switch (l) {
                    case "compositionstart":
                        var p = "onCompositionStart";
                        break l;
                    case "compositionend":
                        p = "onCompositionEnd";
                        break l;
                    case "compositionupdate":
                        p = "onCompositionUpdate";
                        break l
                    }
                    p = void 0
                }
                else Su ? As(l, a) && (p = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (p = "onCompositionStart");p && (Ts && a.locale !== "ko" && (Su || p !== "onCompositionStart" ? p === "onCompositionEnd" && Su && (M = vs()) : (ia = r, cf = "value" in ia ? ia.value : ia.textContent, Su = !0)), x = Oi(y, p), 0 < x.length && (p = new bs(p, l, null, a, r), T.push({
                    event: p,
                    listeners: x
                }), M ? p.data = M : (M = Os(a), M !== null && (p.data = M)))),
                (M = Uy ? py(l, a) : Hy(l, a)) && (p = Oi(y, "onBeforeInput"), 0 < p.length && (x = new bs("onBeforeInput", "beforeinput", null, a, r), T.push({
                    event: x,
                    listeners: p
                }), x.data = M)),
                Uv(T, l, y, a, r)
            }
            hd(T, t)
        })
    }

    function Ve(l, t, a) {
        return {
            instance: l,
            listener: t,
            currentTarget: a
        }
    }

    function Oi(l, t) {
        for (var a = t + "Capture", u = []; l !== null;) {
            var e = l,
                n = e.stateNode;
            if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = oe(l, a), e != null && u.unshift(Ve(l, e, n)), e = oe(l, t), e != null && u.push(Ve(l, e, n))), l.tag === 3) return u;
            l = l.return
        }
        return []
    }

    function Rv(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function vd(l, t, a, u, e) {
        for (var n = t._reactName, i = []; a !== null && a !== u;) {
            var f = a,
                c = f.alternate,
                y = f.stateNode;
            if (f = f.tag, c !== null && c === u) break;
            f !== 5 && f !== 26 && f !== 27 || y === null || (c = y, e ? (y = oe(a, n), y != null && i.unshift(Ve(a, y, c))) : e || (y = oe(a, n), y != null && i.push(Ve(a, y, c)))), a = a.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var qv = /\r\n?/g,
        Bv = /\u0000|\uFFFD/g;

    function gd(l) {
        return (typeof l == "string" ? l : "" + l).replace(qv, `
`).replace(Bv, "")
    }

    function rd(l, t) {
        return t = gd(t), gd(l) === t
    }

    function ll(l, t, a, u, e, n) {
        switch (a) {
        case "children":
            if (typeof u == "string") t === "body" || t === "textarea" && u === "" || gu(l, u);
            else if (typeof u == "number" || typeof u == "bigint") t !== "body" && gu(l, "" + u);
            else return;
            break;
        case "className":
            rn(l, "class", u);
            break;
        case "tabIndex":
            rn(l, "tabindex", u);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            rn(l, a, u);
            break;
        case "style":
            ds(l, u, n);
            return;
        case "data":
            if (t !== "object") {
                rn(l, "data", u);
                break
            }
            case "src":
            case "href":
                if (u === "" && (t !== "a" || a !== "href")) {
                    l.removeAttribute(a);
                    break
                }
                if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
                    l.removeAttribute(a);
                    break
                }
                u = bn(u), l.setAttribute(a, u);
                break;
            case "action":
            case "formAction":
                if (typeof u == "function") {
                    l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof n == "function" && (a === "formAction" ? (t !== "input" && ll(l, t, "name", e.name, e, null), ll(l, t, "formEncType", e.formEncType, e, null), ll(l, t, "formMethod", e.formMethod, e, null), ll(l, t, "formTarget", e.formTarget, e, null)) : (ll(l, t, "encType", e.encType, e, null), ll(l, t, "method", e.method, e, null), ll(l, t, "target", e.target, e, null)));
                if (u == null || typeof u == "symbol" || typeof u == "boolean") {
                    l.removeAttribute(a);
                    break
                }
                u = bn(u), l.setAttribute(a, u);
                break;
            case "onClick":
                u != null && (l.onclick = Dt);
                return;
            case "onScroll":
                u != null && Q("scroll", l);
                return;
            case "onScrollEnd":
                u != null && Q("scrollend", l);
                return;
            case "dangerouslySetInnerHTML":
                if (u != null) {
                    if (typeof u != "object" || !("__html" in u)) throw Error(m(61));
                    if (a = u.__html, a != null) {
                        if (e.children != null) throw Error(m(60));
                        n?.__html !== a && (l.innerHTML = a)
                    }
                }
                break;
            case "multiple":
                l.multiple = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "muted":
                l.muted = u && typeof u != "function" && typeof u != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
                    l.removeAttribute("xlink:href");
                    break
                }
                a = bn(u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "credentialless":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
                break;
            case "capture":
            case "download":
                u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
                break;
            case "popover":
                Q("beforetoggle", l), Q("toggle", l), gn(l, "popover", u);
                break;
            case "xlinkActuate":
                Zt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
                break;
            case "xlinkArcrole":
                Zt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
                break;
            case "xlinkRole":
                Zt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
                break;
            case "xlinkShow":
                Zt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
                break;
            case "xlinkTitle":
                Zt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
                break;
            case "xlinkType":
                Zt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
                break;
            case "xmlBase":
                Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
                break;
            case "xmlLang":
                Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
                break;
            case "xmlSpace":
                Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
                break;
            case "is":
                gn(l, "is", u);
                break;
            case "innerText":
            case "textContent":
                return;
            default:
                if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") a = ly.get(a) || a, gn(l, a, u);
                else return
        }
        J = !0
    }

    function to(l, t, a, u, e, n) {
        switch (a) {
        case "style":
            ds(l, u, n);
            return;
        case "dangerouslySetInnerHTML":
            if (u != null) {
                if (typeof u != "object" || !("__html" in u)) throw Error(m(61));
                if (a = u.__html, a != null) {
                    if (e.children != null) throw Error(m(60));
                    n?.__html !== a && (l.innerHTML = a)
                }
            }
            break;
        case "children":
            if (typeof u == "string") gu(l, u);
            else if (typeof u == "number" || typeof u == "bigint") gu(l, "" + u);
            else return;
            break;
        case "onScroll":
            u != null && Q("scroll", l);
            return;
        case "onScrollEnd":
            u != null && Q("scrollend", l);
            return;
        case "onClick":
            u != null && (l.onclick = Dt);
            return;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            return;
        case "innerText":
        case "textContent":
            return;
        default:
            if (!as.hasOwnProperty(a)) l: {
                if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), n = a.slice(2, e ? a.length - 7 : void 0), t = l[Xl] || null, t = t != null ? t[a] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof u == "function")) {
                    typeof t != "function" && t !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(n, u, e);
                    break l
                }
                J = !0,
                a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : gn(l, a, u)
            }
            return
        }
        J = !0
    }

    function Hl(l, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Q("error", l), Q("load", l);
            var u = !1,
                e = !1,
                n;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var i = a[n];
                    if (i != null) switch (n) {
                    case "src":
                        u = !0;
                        break;
                    case "srcSet":
                        e = !0;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(m(137, t));
                    default:
                        ll(l, t, n, i, a, null)
                    }
                } e && ll(l, t, "srcSet", a.srcSet, a, null), u && ll(l, t, "src", a.src, a, null);
            return;
        case "input":
            Q("invalid", l);
            var f = n = i = e = null,
                c = null,
                y = null;
            for (u in a)
                if (a.hasOwnProperty(u)) {
                    var r = a[u];
                    if (r != null) switch (u) {
                    case "name":
                        e = r;
                        break;
                    case "type":
                        i = r;
                        break;
                    case "checked":
                        c = r;
                        break;
                    case "defaultChecked":
                        y = r;
                        break;
                    case "value":
                        n = r;
                        break;
                    case "defaultValue":
                        f = r;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (r != null) throw Error(m(137, t));
                        break;
                    default:
                        ll(l, t, u, r, a, null)
                    }
                } cs(l, n, f, c, y, i, e, !1);
            return;
        case "select":
            Q("invalid", l), u = i = n = null;
            for (e in a)
                if (a.hasOwnProperty(e) && (f = a[e], f != null)) switch (e) {
                case "value":
                    n = f;
                    break;
                case "defaultValue":
                    i = f;
                    break;
                case "multiple":
                    u = f;
                default:
                    ll(l, t, e, f, a, null)
                }
            t = n, a = i, l.multiple = !!u, t != null ? vu(l, !!u, t, !1) : a != null && vu(l, !!u, a, !0);
            return;
        case "textarea":
            Q("invalid", l), n = e = u = null;
            for (i in a)
                if (a.hasOwnProperty(i) && (f = a[i], f != null)) switch (i) {
                case "value":
                    u = f;
                    break;
                case "defaultValue":
                    e = f;
                    break;
                case "children":
                    n = f;
                    break;
                case "dangerouslySetInnerHTML":
                    if (f != null) throw Error(m(91));
                    break;
                default:
                    ll(l, t, i, f, a, null)
                }
            ss(l, u, e, n);
            return;
        case "option":
            for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null) && (c === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : ll(l, t, c, u, a, null));
            return;
        case "dialog":
            Q("beforetoggle", l), Q("toggle", l), Q("cancel", l), Q("close", l);
            break;
        case "iframe":
        case "object":
            Q("load", l);
            break;
        case "video":
        case "audio":
            for (u = 0; u < Ze.length; u++) Q(Ze[u], l);
            break;
        case "image":
            Q("error", l), Q("load", l);
            break;
        case "details":
            Q("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            Q("error", l), Q("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (y in a)
                if (a.hasOwnProperty(y) && (u = a[y], u != null)) switch (y) {
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(m(137, t));
                default:
                    ll(l, t, y, u, a, null)
                }
            return;
        default:
            if (af(t)) {
                for (r in a) a.hasOwnProperty(r) && (u = a[r], u !== void 0 && to(l, t, r, u, a, void 0));
                return
            }
        }
        for (f in a) a.hasOwnProperty(f) && (u = a[f], u != null && ll(l, t, f, u, a, null))
    }
    var Yv = {};

    function jv(l, t, a, u) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var e = null,
                n = null,
                i = null,
                f = null,
                c = null,
                y = null,
                r = null;
            for (g in a) {
                var T = a[g];
                if (a.hasOwnProperty(g) && T != null) switch (g) {
                case "checked":
                    break;
                case "value":
                    break;
                case "defaultValue":
                    c = T;
                default:
                    u.hasOwnProperty(g) || ll(l, t, g, null, u, T)
                }
            }
            for (var d in u) {
                var g = u[d];
                if (T = a[d], u.hasOwnProperty(d) && (g != null || T != null)) switch (d) {
                case "type":
                    g !== T && (J = !0), n = g;
                    break;
                case "name":
                    g !== T && (J = !0), e = g;
                    break;
                case "checked":
                    g !== T && (J = !0), y = g;
                    break;
                case "defaultChecked":
                    g !== T && (J = !0), r = g;
                    break;
                case "value":
                    g !== T && (J = !0), i = g;
                    break;
                case "defaultValue":
                    g !== T && (J = !0), f = g;
                    break;
                case "children":
                case "dangerouslySetInnerHTML":
                    if (g != null) throw Error(m(137, t));
                    break;
                default:
                    g !== T && ll(l, t, d, g, u, T)
                }
            }
            lf(l, i, f, c, y, r, n, e);
            return;
        case "select":
            g = i = f = d = null;
            for (n in a)
                if (c = a[n], a.hasOwnProperty(n) && c != null) switch (n) {
                case "value":
                    break;
                case "multiple":
                    g = c;
                default:
                    u.hasOwnProperty(n) || ll(l, t, n, null, u, c)
                }
            for (e in u)
                if (n = u[e], c = a[e], u.hasOwnProperty(e) && (n != null || c != null)) switch (e) {
                case "value":
                    n !== c && (J = !0), d = n;
                    break;
                case "defaultValue":
                    n !== c && (J = !0), f = n;
                    break;
                case "multiple":
                    n !== c && (J = !0), i = n;
                default:
                    n !== c && ll(l, t, e, n, u, c)
                }
            t = f, a = i, u = g, d != null ? vu(l, !!a, d, !1) : !!u != !!a && (t != null ? vu(l, !!a, t, !0) : vu(l, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            g = d = null;
            for (f in a)
                if (e = a[f], a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f)) switch (f) {
                case "value":
                    break;
                case "children":
                    break;
                default:
                    ll(l, t, f, null, u, e)
                }
            for (i in u)
                if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null)) switch (i) {
                case "value":
                    e !== n && (J = !0), d = e;
                    break;
                case "defaultValue":
                    e !== n && (J = !0), g = e;
                    break;
                case "children":
                    break;
                case "dangerouslySetInnerHTML":
                    if (e != null) throw Error(m(91));
                    break;
                default:
                    e !== n && ll(l, t, i, e, u, n)
                }
            os(l, d, g);
            return;
        case "option":
            for (var A in a) d = a[A], a.hasOwnProperty(A) && d != null && !u.hasOwnProperty(A) && (A === "selected" ? l.selected = !1 : ll(l, t, A, null, u, d));
            for (c in u) d = u[c], g = a[c], u.hasOwnProperty(c) && d !== g && (d != null || g != null) && (c === "selected" ? (d !== g && (J = !0), l.selected = d && typeof d != "function" && typeof d != "symbol") : ll(l, t, c, d, u, g));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var _ in a) d = a[_], a.hasOwnProperty(_) && d != null && !u.hasOwnProperty(_) && ll(l, t, _, null, u, d);
            for (y in u)
                if (d = u[y], g = a[y], u.hasOwnProperty(y) && d !== g && (d != null || g != null)) switch (y) {
                case "children":
                case "dangerouslySetInnerHTML":
                    if (d != null) throw Error(m(137, t));
                    break;
                default:
                    ll(l, t, y, d, u, g)
                }
            return;
        default:
            if (af(t)) {
                for (var q in a) d = a[q], a.hasOwnProperty(q) && d !== void 0 && !u.hasOwnProperty(q) && to(l, t, q, void 0, u, d);
                for (r in u) d = u[r], g = a[r], !u.hasOwnProperty(r) || d === g || d === void 0 && g === void 0 || to(l, t, r, d, u, g);
                return
            }
        }
        for (var h in a) d = a[h], a.hasOwnProperty(h) && d != null && !u.hasOwnProperty(h) && ll(l, t, h, null, u, d);
        for (T in u) d = u[T], g = a[T], !u.hasOwnProperty(T) || d === g || d == null && g == null || ll(l, t, T, d, u, g)
    }

    function bd(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }

    function Gv() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
                var e = a[u],
                    n = e.transferSize,
                    i = e.initiatorType,
                    f = e.duration;
                if (n && f && bd(i)) {
                    for (i = 0, f = e.responseEnd, u += 1; u < a.length; u++) {
                        var c = a[u],
                            y = c.startTime;
                        if (y > f) break;
                        var r = c.transferSize,
                            T = c.initiatorType;
                        r && bd(T) && (c = c.responseEnd, i += r * (c < f ? 1 : (f - y) / (c - y)))
                    }
                    if (--u, t += 8 * (n + i) / (e.duration / 1e3), l++, 10 < l) break
                }
            }
            if (0 < l) return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5
    }
    var ao = null,
        uo = null;

    function xe(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function Sd(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }

    function Td(l, t) {
        if (l === 0) switch (t) {
        case "svg":
            return 1;
        case "math":
            return 2;
        default:
            return 0
        }
        return l === 1 && t === "foreignObject" ? 0 : l
    }

    function zd(l, t, a, u) {
        return a = xe(a).createElement(l), a[_l] = u, a[Xl] = t, Hl(a, l, t), zl(a), a
    }

    function eo(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var no = null;

    function Qv() {
        var l = window.event;
        return l && l.type === "popstate" ? l === no ? !1 : (no = l, !0) : (no = null, !1)
    }
    var io = typeof setTimeout == "function" ? setTimeout : void 0,
        Xv = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ed = typeof Promise == "function" ? Promise : void 0,
        Ad = typeof requestAnimationFrame == "function" ? requestAnimationFrame : io,
        Zv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ed < "u" ? function (l) {
            return Ed.resolve(null).then(l).catch(Vv)
        } : io;

    function Vv(l) {
        setTimeout(function () {
            throw l
        })
    }

    function _a(l) {
        return l === "head"
    }

    function Od(l, t) {
        var a = t,
            u = 0;
        do {
            var e = a.nextSibling;
            if (l.removeChild(a), e && e.nodeType === 8)
                if (a = e.data, a === "/$" || a === "/&") {
                    if (u === 0) {
                        l.removeChild(e), Pu(t);
                        return
                    }
                    u--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
            else if (a === "html") vo(l.ownerDocument.documentElement);
            else if (a === "head") {
                a = l.ownerDocument.head, vo(a);
                for (var n = a.firstChild; n;) {
                    var i = n.nextSibling,
                        f = n.nodeName;
                    n[fe] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i
                }
            } else a === "body" && vo(l.ownerDocument.body);
            a = e
        } while (a);
        Pu(t)
    }

    function Nd(l, t) {
        var a = l;
        l = 0;
        do {
            var u = a.nextSibling;
            if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
                if (a = u.data, a === "/$") {
                    if (l === 0) break;
                    l--
                } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
            a = u
        } while (a)
    }

    function _d(l, t, a) {
        if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, a != null && (l.style.viewTransitionClass = a), a = getComputedStyle(l), a.display === "inline") {
            if (t = l.getClientRects(), t.length === 1) var u = 1;
            else
                for (var e = u = 0; e < t.length; e++) {
                    var n = t[e];
                    0 < n.width && 0 < n.height && u++
                }
            u === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + a.paddingTop, l.marginBottom = "-" + a.paddingBottom)
        }
    }

    function Dd(l, t) {
        l = l.style, t = t.style;
        var a = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
        l.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (a = t.display, l.display = a == null || typeof a == "boolean" ? "" : a, a = t.margin, a != null ? l.margin = a : (a = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = a == null || typeof a == "boolean" ? "" : a, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)))
    }

    function xv(l, t, a) {
        return a = a.ownerDocument.defaultView, {
            rect: l,
            abs: t.position === "absolute" || t.position === "fixed",
            clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
            view: 0 <= l.bottom && 0 <= l.right && l.top <= a.innerHeight && l.left <= a.innerWidth
        }
    }

    function fo(l) {
        var t = l.getBoundingClientRect(),
            a = getComputedStyle(l);
        return xv(t, a, l)
    }

    function Lv(l) {
        return l.documentElement.clientHeight
    }

    function Kv(l) {
        this.addEventListener("load", l), this.addEventListener("error", l)
    }

    function wv(l, t, a, u, e, n, i, f, c) {
        var y = t.nodeType === 9 ? t : t.ownerDocument;
        try {
            var r = y.startViewTransition({
                update: function () {
                    var d = y.defaultView,
                        g = d.navigation && d.navigation.transition,
                        A = y.fonts.status;
                    u();
                    var _ = [];
                    if (A === "loaded" && (Lv(y), y.fonts.status === "loading" && _.push(y.fonts.ready)), A = _.length, l !== null)
                        for (var q = l.suspenseyImages, h = 0, o = 0; o < q.length; o++) {
                            var v = q[o];
                            if (!v.complete) {
                                var S = v.getBoundingClientRect();
                                if (0 < S.bottom && 0 < S.right && S.top < d.innerHeight && S.left < d.innerWidth) {
                                    if (h += kd(v), h > Di) {
                                        _.length = A;
                                        break
                                    }
                                    v = new Promise(Kv.bind(v)), _.push(v)
                                }
                            }
                        }
                    if (0 < _.length) return d = Promise.race([Promise.all(_), new Promise(function (N) {
                        return setTimeout(N, 500)
                    })]).then(e, e), (g ? Promise.allSettled([g.finished, d]) : d).then(n, n);
                    if (e(), g) return g.finished.then(n, n);
                    n()
                },
                types: a
            });
            y.__reactViewTransition = r;
            var T = [];
            return r.ready.then(function () {
                for (var d = y.documentElement.getAnimations({
                        subtree: !0
                    }), g = 0; g < d.length; g++) {
                    var A = d[g],
                        _ = A.effect,
                        q = _.pseudoElement;
                    if (q != null && q.startsWith("::view-transition")) {
                        T.push(A), A = _.getKeyframes();
                        for (var h = q = void 0, o = !0, v = 0; v < A.length; v++) {
                            var S = A[v],
                                N = S.width;
                            if (q === void 0) q = N;
                            else if (q !== N) {
                                o = !1;
                                break
                            }
                            if (N = S.height, h === void 0) h = N;
                            else if (h !== N) {
                                o = !1;
                                break
                            }
                            delete S.width, delete S.height, S.transform === "none" && delete S.transform
                        }
                        o && q !== void 0 && h !== void 0 && (_.setKeyframes(A), o = getComputedStyle(_.target, _.pseudoElement), o.width !== q || o.height !== h) && (o = A[0], o.width = q, o.height = h, o = A[A.length - 1], o.width = q, o.height = h, _.setKeyframes(A))
                    }
                }
                i()
            }, function (d) {
                y.__reactViewTransition === r && (y.__reactViewTransition = null);
                try {
                    typeof d == "object" && d !== null && d.name === "InvalidStateError" && (d.message === "View transition was skipped because document visibility state is hidden." || d.message === "Skipping view transition because document visibility state has become hidden." || d.message === "Skipping view transition because viewport size changed." || d.message === "Transition was aborted because of invalid state") && (d = null), d !== null && c(d)
                } finally {
                    u(), e(), i()
                }
            }), r.finished.finally(function () {
                for (var d = 0; d < T.length; d++) T[d].cancel();
                y.__reactViewTransition === r && (y.__reactViewTransition = null), f()
            }), r
        } catch {
            return u(), e(), i(), null
        }
    }

    function eu(l, t) {
        this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")"
    }
    eu.prototype.animate = function (l, t) {
        return t = typeof t == "number" ? {
            duration: t
        } : w({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t)
    }, eu.prototype.getAnimations = function () {
        for (var l = this._scope, t = this._selector, a = l.getAnimations({
                subtree: !0
            }), u = [], e = 0; e < a.length; e++) {
            var n = a[e].effect;
            n !== null && n.target === l && n.pseudoElement === t && u.push(a[e])
        }
        return u
    }, eu.prototype.getComputedStyle = function () {
        return getComputedStyle(this._scope, this._selector)
    };

    function Md(l) {
        return {
            name: l,
            group: new eu("group", l),
            imagePair: new eu("image-pair", l),
            old: new eu("old", l),
            new: new eu("new", l)
        }
    }

    function et(l) {
        this._fragmentFiber = l, this._observers = this._eventListeners = null
    }
    et.prototype.addEventListener = function (l, t, a) {
        var u = null,
            e = null;
        if (!(a != null && typeof a != "boolean" && (u = a.signal || null, u !== null && u.aborted))) {
            this._eventListeners === null && (this._eventListeners = []);
            var n = this._eventListeners;
            if (pd(n, l, t, a) === -1) {
                var i = this,
                    f = t;
                a != null && typeof a != "boolean" && a.once === !0 && (f = function (c) {
                    i.removeEventListener(l, t, a), typeof t == "function" ? t.call(this, c) : t.handleEvent(c)
                }), u !== null && (e = i.removeEventListener.bind(i, l, t, a), u.addEventListener("abort", e, {
                    once: !0
                }), e = u.removeEventListener.bind(u, "abort", e)), u = Ju(a), n.push({
                    type: l,
                    listener: t,
                    optionsOrUseCapture: a,
                    attachedListener: f,
                    cleanup: e
                }), L(this._fragmentFiber.child, !1, Jv, l, f, u)
            }
            this._eventListeners = n
        }
    };

    function Jv(l, t, a, u) {
        return cl(l).addEventListener(t, a, u), !1
    }
    et.prototype.removeEventListener = function (l, t, a) {
        var u = this._eventListeners;
        if (u !== null && (t = pd(u, l, t, a), t !== -1)) {
            var e = u[t];
            a = e.attachedListener;
            var n = e.cleanup;
            e = Ju(e.optionsOrUseCapture), L(this._fragmentFiber.child, !1, kv, l, a, e), u.splice(t, 1), n !== null && n()
        }
    };

    function kv(l, t, a, u) {
        return cl(l).removeEventListener(t, a, u), !1
    }

    function Ju(l) {
        return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? {
            capture: l.capture,
            passive: l.passive
        } : l
    }

    function Ud(l) {
        return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0")
    }

    function pd(l, t, a, u) {
        if (l.length === 0) return -1;
        u = Ud(u);
        for (var e = 0; e < l.length; e++) {
            var n = l[e];
            if (n.type === t && n.listener === a && Ud(n.optionsOrUseCapture) === u) return e
        }
        return -1
    }
    et.prototype.dispatchEvent = function (l) {
        var t = Z(this._fragmentFiber);
        if (t === null) return !0;
        t = cl(t);
        var a = this._eventListeners;
        if (a !== null && 0 < a.length || !l.bubbles) {
            var u = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
            if (a)
                for (var e = 0; e < a.length; e++) {
                    var n = a[e];
                    u.addEventListener(n.type, n.attachedListener, Ju(n.optionsOrUseCapture))
                }
            if (t.appendChild(u), l = u.dispatchEvent(l), a)
                for (e = 0; e < a.length; e++) n = a[e], u.removeEventListener(n.type, n.attachedListener, Ju(n.optionsOrUseCapture));
            return t.removeChild(u), l
        }
        return t.dispatchEvent(l)
    }, et.prototype.focus = function (l) {
        L(this._fragmentFiber.child, !0, Hd, l, void 0, void 0)
    };

    function Hd(l, t) {
        return l.tag === 6 ? !1 : (l = cl(l), ig(l, t))
    }
    et.prototype.focusLast = function (l) {
        var t = [];
        L(this._fragmentFiber.child, !0, co, t, void 0, void 0);
        for (var a = t.length - 1; 0 <= a && !Hd(t[a], l); a--);
    };

    function co(l, t) {
        return t.push(l), !1
    }
    et.prototype.blur = function () {
        var l = Z(this._fragmentFiber);
        l !== null && (l = cl(l), l = xe(l).activeElement, l !== null && L(this._fragmentFiber.child, !1, Fv, l, void 0, void 0))
    };

    function Fv(l, t) {
        return l.tag === 6 ? !1 : (l = cl(l), l === t || l.contains(t) ? (t.blur(), !0) : !1)
    }
    et.prototype.observeUsing = function (l) {
        this._observers === null && (this._observers = new Set), this._observers.add(l), L(this._fragmentFiber.child, !1, Wv, l, void 0, void 0)
    };

    function Wv(l, t) {
        return l.tag === 6 || (l = cl(l), t.observe(l)), !1
    }
    et.prototype.unobserveUsing = function (l) {
        var t = this._observers;
        if (t !== null && t.has(l)) {
            t.delete(l), L(this._fragmentFiber.child, !1, $v, l, void 0, void 0);
            for (var a = t = 0; a < Et.length; a++) {
                var u = Et[a];
                u.fragmentInstance === this && u.observer === l ? l.unobserve(u.instance) : Et[t++] = u
            }
            Et.length = t
        }
    };

    function $v(l, t) {
        return l.tag === 6 || (l = cl(l), t.unobserve(l)), !1
    }
    var Et = [],
        oo = !1;

    function Iv(l, t, a) {
        Et.push({
            fragmentInstance: l,
            observer: t,
            instance: a
        }), oo || (oo = !0, fg(function () {
            oo = !1;
            var u = Et;
            Et = [];
            for (var e = 0; e < u.length; e++) {
                var n = u[e];
                n.observer.unobserve(n.instance)
            }
        }))
    }
    et.prototype.getClientRects = function () {
        var l = [];
        return L(this._fragmentFiber.child, !1, Pv, l, void 0, void 0), l
    };

    function Pv(l, t) {
        if (l.tag === 6) {
            l = l.stateNode;
            var a = l.ownerDocument.createRange();
            a.selectNodeContents(l), t.push.apply(t, a.getClientRects())
        } else l = cl(l), t.push.apply(t, l.getClientRects());
        return !1
    }
    et.prototype.getRootNode = function (l) {
        var t = Z(this._fragmentFiber);
        return t === null ? this : cl(t).getRootNode(l)
    }, et.prototype.compareDocumentPosition = function (l) {
        var t = Z(this._fragmentFiber);
        if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var a = [];
        L(this._fragmentFiber.child, !1, co, a, void 0, void 0);
        var u = cl(t);
        if (a.length === 0) {
            if (a = u, yt(this._fragmentFiber)) {
                l: {
                    for (t = this._fragmentFiber.return; t !== null;) {
                        if (t.tag === 4) {
                            t = t.stateNode.containerInfo;
                            break l
                        }
                        if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                        t = t.return
                    }
                    t = null
                }
                t != null && (a = t)
            }
            t = this._fragmentFiber;
            var e = u = a.compareDocumentPosition(l);
            return a === l ? e = Node.DOCUMENT_POSITION_CONTAINS : u & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = wl(t)[1], a === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = cl(a).compareDocumentPosition(l), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        }
        t = cl(a[0]), e = cl(a[a.length - 1]);
        var n = yt(this._fragmentFiber) ? t.parentElement : u;
        if (n == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        u = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
        var i = t.compareDocumentPosition(l),
            f = e.compareDocumentPosition(l),
            c = i & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return f = u && n && i & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = u && t === l || n && e === l || c || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !u && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || lg(t, this._fragmentFiber, a[0], a[a.length - 1], l) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    };

    function lg(l, t, a, u, e) {
        var n = ja(e);
        if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            if (a = !!n) l: {
                for (; n !== null;) {
                    if (n.tag === 7 && (n === t || n.alternate === t)) {
                        a = !0;
                        break l
                    }
                    n = n.return
                }
                a = !1
            }
            return a
        }
        if (l & Node.DOCUMENT_POSITION_CONTAINS) {
            if (n === null) return n = e.ownerDocument, e === n || e === n.documentElement || e === n.body;
            l: {
                for (n = t, t = Z(t); n !== null;) {
                    if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
                        n = !0;
                        break l
                    }
                    n = n.return
                }
                n = !1
            }
            return n
        }
        return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === a) && (t = Rl(a, n, Jl), t === null ? t = !1 : (L(t, !0, nu, n, a), n = vt, vt = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === u) && (t = Rl(u, n, Jl), t === null ? t = !1 : (L(t, !0, Y, n, u), n = vt, Gt = vt = null, t = n !== null)), t) : !1
    }

    function Cd(l, t) {
        var a = l.ownerDocument.createRange();
        a.selectNodeContents(l), l = a.getBoundingClientRect(), window.scrollTo(window.scrollX + l.left, t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight)
    }
    et.prototype.scrollIntoView = function (l) {
        if (typeof l == "object") throw Error(m(566));
        var t = [];
        L(this._fragmentFiber.child, !1, co, t, void 0, void 0);
        var a = l !== !1;
        if (t.length === 0) {
            var u = wl(this._fragmentFiber);
            if (u = a ? u[1] || u[0] || Z(this._fragmentFiber) : u[0] || u[1], u === null) return;
            if (u.tag === 6) {
                l = cl(u), Cd(l, a);
                return
            }
            if (u = cl(u), u.nodeType !== 9) {
                if (u.nodeType === 11) {
                    a = "host" in u ? u.host : null, a !== null && a.scrollIntoView(l);
                    return
                }
                u.scrollIntoView(l)
            }
        }
        for (u = a ? t.length - 1 : 0; u !== (a ? -1 : t.length);) {
            var e = t[u];
            e.tag === 6 ? (e = cl(e), Cd(e, a)) : cl(e).scrollIntoView(l), u += a ? -1 : 1
        }
    };

    function tg(l, t) {
        return l = cl(l), Rd(l, t), !1
    }

    function Rd(l, t) {
        l.reactFragments == null && (l.reactFragments = new Set), l.reactFragments.add(t)
    }

    function qd(l, t) {
        var a = t._eventListeners;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = a[u];
                l.addEventListener(e.type, e.attachedListener, Ju(e.optionsOrUseCapture))
            }
        l.nodeType !== 3 && (a = t._observers, a !== null && a.forEach(function (n) {
            for (var i = 0, f = 0; f < Et.length; f++) {
                var c = Et[f];
                (c.fragmentInstance !== t || c.observer !== n || c.instance !== l) && (Et[i++] = c)
            }
            Et.length = i, n.observe(l)
        }), Rd(l, t))
    }

    function ag(l, t) {
        var a = t._eventListeners;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = a[u];
                l.removeEventListener(e.type, e.attachedListener, Ju(e.optionsOrUseCapture))
            }
        l.nodeType !== 3 && (a = t._observers, a !== null && a.forEach(function (n) {
            typeof n.rootMargin == "string" ? Iv(t, n, l) : n.unobserve(l)
        }), l.reactFragments != null && l.reactFragments.delete(t))
    }

    function so(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling, a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                so(a), vn(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet") continue
            }
            l.removeChild(a)
        }
    }

    function ug(l, t, a, u) {
        for (; l.nodeType === 1;) {
            var e = a;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (u) {
                if (!l[fe]) switch (t) {
                case "meta":
                    if (!l.hasAttribute("itemprop")) break;
                    return l;
                case "link":
                    if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
                    if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
                    return l;
                case "style":
                    if (l.hasAttribute("data-precedence")) break;
                    return l;
                case "script":
                    if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                    return l;
                default:
                    return l
                }
            } else if (t === "input" && l.type === "hidden") {
                var n = e.name == null ? null : "" + e.name;
                if (e.type === "hidden" && l.getAttribute("name") === n) return l
            } else return l;
            if (l = dt(l.nextSibling), l === null) break
        }
        return null
    }

    function eg(l, t, a) {
        if (t === "") return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = dt(l.nextSibling), l === null)) return null;
        return l
    }

    function Bd(l, t) {
        for (; l.nodeType !== 8;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = dt(l.nextSibling), l === null)) return null;
        return l
    }

    function mo(l) {
        return l.data === "$?" || l.data === "$~"
    }

    function ho(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }

    function ng(l, t) {
        var a = l.ownerDocument;
        if (l.data === "$~") l._reactRetry = t;
        else if (l.data !== "$?" || a.readyState !== "loading") t();
        else {
            var u = function () {
                t(), a.removeEventListener("DOMContentLoaded", u)
            };
            a.addEventListener("DOMContentLoaded", u), l._reactRetry = u
        }
    }

    function dt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                if (t === "/$" || t === "/&") return null
            }
        }
        return l
    }
    var yo = null;

    function Yd(l) {
        l = l.nextSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "/$" || a === "/&") {
                    if (t === 0) return dt(l.nextSibling);
                    t--
                } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }

    function jd(l) {
        l = l.previousSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (t === 0) return l;
                    t--
                } else a !== "/$" && a !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }

    function ig(l, t) {
        function a() {
            u = !0
        }
        if (l.ownerDocument.activeElement === l) return !0;
        var u = !1;
        try {
            l.ownerDocument.addEventListener("focus", a, !0), (l.focus || HTMLElement.prototype.focus).call(l, t)
        } finally {
            l.ownerDocument.removeEventListener("focus", a, !0)
        }
        return u
    }

    function fg(l) {
        Ad(function () {
            Ad(function (t) {
                return l(t)
            })
        })
    }

    function Gd(l, t, a) {
        switch (t = xe(a), l) {
        case "html":
            if (l = t.documentElement, !l) throw Error(m(452));
            return l;
        case "head":
            if (l = t.head, !l) throw Error(m(453));
            return l;
        case "body":
            if (l = t.body, !l) throw Error(m(454));
            return l;
        default:
            throw Error(m(451))
        }
    }

    function Qd(l, t, a) {
        for (var u in a) {
            var e = a[u];
            a.hasOwnProperty(u) && e != null && ll(l, t, u, null, Yv, e)
        }
        a.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Dt && (l.onclick = null), vn(l)
    }

    function vo(l) {
        for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
        vn(l)
    }
    var ht = new Map,
        Xd = new Set;

    function Le(l) {
        if (typeof l.getRootNode == "function") {
            var t = l.getRootNode();
            if (t.nodeType === 9 || t.nodeType === 11) return t
        }
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    var la = k.d;
    k.d = {
        f: cg,
        r: og,
        D: sg,
        C: mg,
        L: dg,
        m: hg,
        X: vg,
        S: yg,
        M: gg
    };

    function cg() {
        var l = la.f(),
            t = bi();
        return l || t
    }

    function og(l) {
        var t = du(l);
        t !== null && t.tag === 5 && t.type === "form" ? Vm(t) : la.r(l)
    }
    var ku = typeof document > "u" ? null : document;

    function Zd(l, t, a) {
        var u = ku;
        if (u && typeof t == "string" && t) {
            var e = nt(t);
            e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Xd.has(e) || (Xd.add(e), l = {
                rel: l,
                crossOrigin: a,
                href: t
            }, u.querySelector(e) === null && (t = u.createElement("link"), Hl(t, "link", l), zl(t), u.head.appendChild(t)))
        }
    }

    function sg(l) {
        la.D(l), Zd("dns-prefetch", l, null)
    }

    function mg(l, t) {
        la.C(l, t), Zd("preconnect", l, t)
    }

    function dg(l, t, a) {
        la.L(l, t, a);
        var u = ku;
        if (u && l && t) {
            var e = 'link[rel="preload"][as="' + nt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + nt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + nt(a.imageSizes) + '"]')) : e += '[href="' + nt(l) + '"]';
            var n = e;
            switch (t) {
            case "style":
                n = Fu(l);
                break;
            case "script":
                n = Wu(l)
            }
            if (!(ht.has(n) || (l = w({
                    rel: "preload",
                    href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                    as: t
                }, a), ht.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(Ke(n)) || t === "script" && u.querySelector(we(n))))) {
                var i = u.createElement("link");
                Hl(i, "link", l), t === "style" && (i[yn] = !0, i.onload = i.onerror = function () {
                    ls(i)
                }), zl(i), u.head.appendChild(i)
            }
        }
    }

    function hg(l, t) {
        la.m(l, t);
        var a = ku;
        if (a && l) {
            var u = t && typeof t.as == "string" ? t.as : "script",
                e = 'link[rel="modulepreload"][as="' + nt(u) + '"][href="' + nt(l) + '"]',
                n = e;
            switch (u) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Wu(l)
            }
            if (!ht.has(n) && (l = w({
                    rel: "modulepreload",
                    href: l
                }, t), ht.set(n, l), a.querySelector(e) === null)) {
                switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(we(n))) return
                }
                u = a.createElement("link"), Hl(u, "link", l), zl(u), a.head.appendChild(u)
            }
        }
    }

    function yg(l, t, a) {
        la.S(l, t, a);
        var u = ku;
        if (u && l) {
            var e = hu(u).hoistableStyles,
                n = Fu(l);
            t = t || "default";
            var i = e.get(n);
            if (!i) {
                var f = {
                    loading: 0,
                    preload: null
                };
                if (i = u.querySelector(Ke(n))) f.loading = 5;
                else {
                    l = w({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, a), (a = ht.get(n)) && go(l, a);
                    var c = i = u.createElement("link");
                    zl(c), Hl(c, "link", l), c._p = new Promise(function (y, r) {
                        c.onload = y, c.onerror = r
                    }), c.addEventListener("load", function () {
                        f.loading |= 1
                    }), c.addEventListener("error", function () {
                        f.loading |= 2
                    }), f.loading |= 4, Ni(i, t, u)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: f
                }, e.set(n, i)
            }
        }
    }

    function vg(l, t) {
        la.X(l, t);
        var a = ku;
        if (a && l) {
            var u = hu(a).hoistableScripts,
                e = Wu(l),
                n = u.get(e);
            n || (n = a.querySelector(we(e)), n || (l = w({
                src: l,
                async: !0
            }, t), (t = ht.get(e)) && ro(l, t), n = a.createElement("script"), zl(n), Hl(n, "link", l), a.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(e, n))
        }
    }

    function gg(l, t) {
        la.M(l, t);
        var a = ku;
        if (a && l) {
            var u = hu(a).hoistableScripts,
                e = Wu(l),
                n = u.get(e);
            n || (n = a.querySelector(we(e)), n || (l = w({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = ht.get(e)) && ro(l, t), n = a.createElement("script"), zl(n), Hl(n, "link", l), a.head.appendChild(n)), n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            }, u.set(e, n))
        }
    }

    function Vd(l, t, a, u) {
        var e = (e = ua.current) ? Le(e) : null;
        if (!e) throw Error(m(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Fu(a.href), t = hu(e).hoistableStyles, u = t.get(a), u || (u = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            }, t.set(a, u)), u) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                l = Fu(a.href);
                var n = hu(e).hoistableStyles,
                    i = n.get(l);
                if (i || (e = e.ownerDocument || e, i = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {
                            loading: 0,
                            preload: null
                        }
                    }, n.set(l, i), (n = e.querySelector(Ke(l))) ? n._p || (i.instance = n, i.state.loading = 5) : (n = ht.get(l), n || (n = {
                        rel: "preload",
                        as: "style",
                        href: a.href,
                        crossOrigin: a.crossOrigin,
                        integrity: a.integrity,
                        media: a.media,
                        hrefLang: a.hrefLang,
                        referrerPolicy: a.referrerPolicy
                    }, ht.set(l, n)), rg(e, l, n, i.state))), t && u === null) throw Error(m(528, ""));
                return i
            }
            if (t && u !== null) throw Error(m(529, ""));
            return null;
        case "script":
            return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Wu(a), t = hu(e).hoistableScripts, u = t.get(a), u || (u = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            }, t.set(a, u)), u) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(m(444, l))
        }
    }

    function Fu(l) {
        return 'href="' + nt(l) + '"'
    }

    function Ke(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function xd(l) {
        return w({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }

    function rg(l, t, a, u) {
        if (t = l.querySelector('link[rel="preload"][as="style"][' + t + "]")) {
            if (t[yn] !== !0) {
                u.loading = 1;
                return
            }
        } else t = l.createElement("link"), t[yn] = !0, t.onload = t.onerror = ls.bind(null, t), Hl(t, "link", a), zl(t), l.head.appendChild(t);
        u.preload = t, t.addEventListener("load", function () {
            return u.loading |= 1
        }), t.addEventListener("error", function () {
            return u.loading |= 2
        })
    }

    function Wu(l) {
        return '[src="' + nt(l) + '"]'
    }

    function we(l) {
        return "script[async]" + l
    }

    function Ld(l, t, a) {
        if (t.count++, t.instance === null) switch (t.type) {
        case "style":
            var u = l.querySelector('style[data-href~="' + nt(a.href) + '"]');
            if (u) return t.instance = u, zl(u), u;
            var e = w({}, a, {
                "data-href": a.href,
                "data-precedence": a.precedence,
                href: null,
                precedence: null
            });
            return u = (l.ownerDocument || l).createElement("style"), zl(u), Hl(u, "style", e), Ni(u, a.precedence, l), t.instance = u;
        case "stylesheet":
            e = Fu(a.href);
            var n = l.querySelector(Ke(e));
            if (n) return t.state.loading |= 4, t.instance = n, zl(n), n;
            u = xd(a), (e = ht.get(e)) && go(u, e), n = (l.ownerDocument || l).createElement("link"), zl(n);
            var i = n;
            return i._p = new Promise(function (f, c) {
                i.onload = f, i.onerror = c
            }), Hl(n, "link", u), t.state.loading |= 4, Ni(n, a.precedence, l), t.instance = n;
        case "script":
            return n = Wu(a.src), (e = l.querySelector(we(n))) ? (t.instance = e, zl(e), e) : (u = a, (e = ht.get(n)) && (u = w({}, a), ro(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), zl(e), Hl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
            return null;
        default:
            throw Error(m(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Ni(u, a.precedence, l));
        return t.instance
    }

    function Ni(l, t, a) {
        for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
            var f = u[i];
            if (f.dataset.precedence === t) n = f;
            else if (n !== e) break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild))
    }

    function go(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
    }

    function ro(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
    }
    var _i = null;

    function Kd(l, t, a) {
        if (_i === null) {
            var u = new Map,
                e = _i = new Map;
            e.set(a, u)
        } else e = _i, u = e.get(a), u || (u = new Map, e.set(a, u));
        if (u.has(l)) return u;
        for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
            var n = a[e];
            if (!(n[fe] || n[_l] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var f = u.get(i);
                f ? f.push(n) : u.set(i, [n])
            }
        }
        return u
    }

    function bo(l, t, a) {
        l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null)
    }

    function bg(l, t, a) {
        if (a === 1 || t.itemProp != null) return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
            return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function wd(l, t) {
        return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy"
    }

    function Jd(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }

    function kd(l) {
        return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25
    }

    function Fd(l, t) {
        typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += kd(t), l.suspenseyImages.push(t)), l = zg.bind(l), t.decode().then(l, l))
    }

    function Sg(l, t, a, u) {
        if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var e = Fu(u.href),
                    n = t.querySelector(Ke(e));
                if (n) {
                    t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Je.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, zl(n);
                    return
                }
                n = t.ownerDocument || t, u = xd(u), (e = ht.get(e)) && go(u, e), n = n.createElement("link"), zl(n);
                var i = n;
                i._p = new Promise(function (f, c) {
                    i.onload = f, i.onerror = c
                }), Hl(n, "link", u), a.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Je.bind(l), t.addEventListener("load", a), t.addEventListener("error", a))
        }
    }
    var Di = 0;

    function Tg(l, t) {
        return l.stylesheets && l.count === 0 && Ui(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function (a) {
            var u = setTimeout(function () {
                if (l.stylesheets && Ui(l, l.stylesheets), l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null, n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && Di === 0 && (Di = 62500 * Gv());
            var e = setTimeout(function () {
                if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Ui(l, l.stylesheets), l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null, n()
                }
            }, (l.imgBytes > Di ? 50 : 800) + t);
            return l.unsuspend = a,
                function () {
                    l.unsuspend = null, clearTimeout(u), clearTimeout(e)
                }
        } : null
    }

    function Wd(l) {
        if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
            if (l.stylesheets) Ui(l, l.stylesheets);
            else if (l.unsuspend) {
                var t = l.unsuspend;
                l.unsuspend = null, t()
            }
        }
    }

    function Je() {
        this.count--, Wd(this)
    }

    function zg() {
        this.imgCount--, Wd(this)
    }
    var Mi = null;

    function Ui(l, t) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, Mi = new Map, t.forEach(Eg, l), Mi = null, Je.call(l))
    }

    function Eg(l, t) {
        if (!(t.state.loading & 4)) {
            var a = Mi.get(l);
            if (a) var u = a.get(null);
            else {
                a = new Map, Mi.set(l, a);
                for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i)
                }
                u && a.set(null, u)
            }
            e = t.instance, i = e.getAttribute("data-precedence"), n = a.get(i) || u, n === u && a.set(null, e), a.set(i, e), this.count++, u = Je.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4
        }
    }
    var $u = {
        $$typeof: Ql,
        Provider: null,
        Consumer: null,
        _currentValue: Ba,
        _currentValue2: Ba,
        _threadCount: 0
    };

    function Ag(l, t, a, u, e, n, i, f, c) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wi(0), this.hiddenUpdates = Wi(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = new Map
    }

    function $d(l, t, a, u, e, n, i, f, c, y, r, T) {
        return l = new Ag(l, t, a, i, c, y, r, T, f), t = 1, n === !0 && (t |= 24), n = Zl(3, null, null, t), l.current = n, n.stateNode = l, t = Cf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
            element: u,
            isDehydrated: a,
            cache: t
        }, Yf(n), l
    }

    function Id(l) {
        return l ? (l = Au, l) : Au
    }

    function Pd(l, t, a, u, e, n) {
        e = Id(e), u.context === null ? u.context = e : u.pendingContext = e, u = ya(t), u.payload = {
            element: a
        }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = va(l, u, t), a !== null && (Kl(a, l, t), Oe(a, l, t))
    }

    function lh(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var a = l.retryLane;
            l.retryLane = a !== 0 && a < t ? a : t
        }
    }

    function So(l, t) {
        lh(l, t), (l = l.alternate) && lh(l, t)
    }

    function th(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Za(l, 67108864);
            t !== null && Kl(t, l, 67108864), So(l, 67108864)
        }
    }

    function ah(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = ut();
            t = $i(t);
            var a = Za(l, t);
            a !== null && Kl(a, l, t), So(l, t)
        }
    }
    var Iu = !0;

    function Og(l, t, a, u) {
        var e = H.T;
        H.T = null;
        var n = k.p;
        try {
            k.p = 2, To(l, t, a, u)
        } finally {
            k.p = n, H.T = e
        }
    }

    function Ng(l, t, a, u) {
        var e = H.T;
        H.T = null;
        var n = k.p;
        try {
            k.p = 8, To(l, t, a, u)
        } finally {
            k.p = n, H.T = e
        }
    }

    function To(l, t, a, u) {
        if (Iu) {
            var e = zo(u);
            if (e === null) lo(l, t, u, pi, a), eh(l, u);
            else if (Dg(e, l, t, a, u)) u.stopPropagation();
            else if (eh(l, u), t & 4 && -1 < _g.indexOf(l)) {
                for (; e !== null;) {
                    var n = du(e);
                    if (n !== null) switch (n.tag) {
                    case 3:
                        if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                            var i = Ya(n.pendingLanes);
                            if (i !== 0) {
                                var f = n;
                                for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                                    var c = 1 << 31 - Wl(i);
                                    f.entanglements[1] |= c, i &= ~c
                                }
                                jt(n), (F & 6) === 0 && (vi = kl() + 500, Xe(0))
                            }
                        }
                        break;
                    case 31:
                    case 13:
                        f = Za(n, 2), f !== null && Kl(f, n, 2), bi(), So(n, 2)
                    }
                    if (n = zo(u), n === null && lo(l, t, u, pi, a), n === e) break;
                    e = n
                }
                e !== null && u.stopPropagation()
            } else lo(l, t, u, null, a)
        }
    }

    function zo(l) {
        return l = ef(l), Eo(l)
    }
    var pi = null;

    function Eo(l) {
        if (pi = null, l = ja(l), l !== null) {
            var t = D(l);
            if (t === null) l = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (l = X(t), l !== null) return l;
                    l = null
                } else if (a === 31) {
                    if (l = U(t), l !== null) return l;
                    l = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else t !== l && (l = null)
            }
        }
        return pi = l, null
    }

    function uh(l) {
        switch (l) {
        case "beforetoggle":
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
        case "seeked":
        case "submit":
        case "toggle":
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
        case "fullscreenerror":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
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
        case "resize":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Gh()) {
            case Vo:
                return 2;
            case xo:
                return 8;
            case on:
            case Qh:
                return 32;
            case Lo:
                return 268435456;
            default:
                return 32
            }
            default:
                return 32
        }
    }
    var Ao = !1,
        Da = null,
        Ma = null,
        Ua = null,
        ke = new Map,
        Fe = new Map,
        pa = [],
        _g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function eh(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            Da = null;
            break;
        case "dragenter":
        case "dragleave":
            Ma = null;
            break;
        case "mouseover":
        case "mouseout":
            Ua = null;
            break;
        case "pointerover":
        case "pointerout":
            ke.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Fe.delete(t.pointerId)
        }
    }

    function We(l, t, a, u, e, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: u,
            nativeEvent: n,
            targetContainers: [e]
        }, t !== null && (t = du(t), t !== null && th(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l)
    }

    function Dg(l, t, a, u, e) {
        switch (t) {
        case "focusin":
            return Da = We(Da, l, t, a, u, e), !0;
        case "dragenter":
            return Ma = We(Ma, l, t, a, u, e), !0;
        case "mouseover":
            return Ua = We(Ua, l, t, a, u, e), !0;
        case "pointerover":
            var n = e.pointerId;
            return ke.set(n, We(ke.get(n) || null, l, t, a, u, e)), !0;
        case "gotpointercapture":
            return n = e.pointerId, Fe.set(n, We(Fe.get(n) || null, l, t, a, u, e)), !0
        }
        return !1
    }

    function nh(l) {
        var t = ja(l.target);
        if (t !== null) {
            var a = D(t);
            if (a !== null) {
                if (t = a.tag, t === 13) {
                    if (t = X(a), t !== null) {
                        l.blockedOn = t, $o(l.priority, function () {
                            ah(a)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = U(a), t !== null) {
                        l.blockedOn = t, $o(l.priority, function () {
                            ah(a)
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }

    function Hi(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var a = zo(l.nativeEvent);
            if (a === null) {
                a = l.nativeEvent;
                var u = new a.constructor(a.type, a);
                uf = u, a.target.dispatchEvent(u), uf = null
            } else return t = du(a), t !== null && th(t), l.blockedOn = a, !1;
            t.shift()
        }
        return !0
    }

    function ih(l, t, a) {
        Hi(l) && a.delete(t)
    }

    function Mg() {
        Ao = !1, Da !== null && Hi(Da) && (Da = null), Ma !== null && Hi(Ma) && (Ma = null), Ua !== null && Hi(Ua) && (Ua = null), ke.forEach(ih), Fe.forEach(ih)
    }

    function Ci(l, t) {
        l.blockedOn === t && (l.blockedOn = null, Ao || (Ao = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Mg)))
    }
    var Ri = null;

    function fh(l) {
        Ri !== l && (Ri = l, s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
            Ri === l && (Ri = null);
            for (var t = 0; t < l.length; t += 3) {
                var a = l[t],
                    u = l[t + 1],
                    e = l[t + 2];
                if (typeof u != "function") {
                    if (Eo(u || a) === null) continue;
                    break
                }
                var n = du(a);
                n !== null && (l.splice(t, 3), t -= 3, uc(n, {
                    pending: !0,
                    data: e,
                    method: a.method,
                    action: u
                }, u, e))
            }
        }))
    }

    function Pu(l) {
        function t(c) {
            return Ci(c, l)
        }
        Da !== null && Ci(Da, l), Ma !== null && Ci(Ma, l), Ua !== null && Ci(Ua, l), ke.forEach(t), Fe.forEach(t);
        for (var a = 0; a < pa.length; a++) {
            var u = pa[a];
            u.blockedOn === l && (u.blockedOn = null)
        }
        for (; 0 < pa.length && (a = pa[0], a.blockedOn === null);) nh(a), a.blockedOn === null && pa.shift();
        if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
            for (u = 0; u < a.length; u += 3) {
                var e = a[u],
                    n = a[u + 1],
                    i = e[Xl] || null;
                if (typeof n == "function") i || fh(a);
                else if (i) {
                    var f = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (e = n, i = n[Xl] || null) f = i.formAction;
                        else if (Eo(e) !== null) continue
                    } else f = i.action;
                    typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3), u -= 3), fh(a)
                }
            }
    }

    function ch() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function () {
                    return new Promise(function (i) {
                        return e = i
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function t() {
            e !== null && (e(), e = null), u || setTimeout(a, 20)
        }

        function a() {
            if (!u && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var u = !1,
                e = null;
            return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100),
                function () {
                    u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null)
                }
        }
    }

    function Oo(l) {
        this._internalRoot = l
    }
    qi.prototype.render = Oo.prototype.render = function (l) {
        var t = this._internalRoot;
        if (t === null) throw Error(m(409));
        var a = t.current,
            u = ut();
        Pd(a, u, l, t, null, null)
    }, qi.prototype.unmount = Oo.prototype.unmount = function () {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            Pd(l.current, 2, null, l, null, null), bi(), t[mu] = null
        }
    };

    function qi(l) {
        this._internalRoot = l
    }
    qi.prototype.unstable_scheduleHydration = function (l) {
        if (l) {
            var t = Wo();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var a = 0; a < pa.length && t !== 0 && t < pa[a].priority; a++);
            pa.splice(a, 0, l), a === 0 && nh(l)
        }
    };
    var oh = b.version;
    if (oh !== "19.3.0") throw Error(m(527, oh, "19.3.0"));
    k.findDOMNode = function (l) {
        var t = l._reactInternals;
        if (t === void 0) throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
        return l = el(t), l = l !== null ? Gl(l) : null, l = l === null ? null : l.stateNode, l
    };
    var Ug = {
        bundleType: 0,
        version: "19.3.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        reconcilerVersion: "19.3.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Bi.isDisabled && Bi.supportsFiber) try {
            ee = Bi.inject(Ug), Fl = Bi
        } catch {}
    }
    return Ie.createRoot = function (l, t) {
        if (!E(l)) throw Error(m(299));
        var a = !1,
            u = "",
            e = Im,
            n = Pm,
            i = l0;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = $d(l, 1, !1, null, null, a, u, null, e, n, i, ch), l[mu] = t.current, Pc(l), new Oo(t)
    }, Ie.hydrateRoot = function (l, t, a) {
        if (!E(l)) throw Error(m(299));
        var u = !1,
            e = "",
            n = Im,
            i = Pm,
            f = l0,
            c = null;
        return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.formState !== void 0 && (c = a.formState)), t = $d(l, 1, !0, t, a ?? null, u, e, c, n, i, f, ch), t.context = Id(null), a = t.current, u = ut(), u = $i(u), e = ya(u), e.callback = null, va(a, e, u), a = u, t.current.lanes = a, ie(t, a), jt(t), l[mu] = t.current, Pc(l), new qi(t)
    }, Ie.version = "19.3.0", Ie
}
var Th;

function Kg() {
    if (Th) return _o.exports;
    Th = 1;

    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
        } catch (b) {
            console.error(b)
        }
    }
    return s(), _o.exports = Lg(), _o.exports
}
var wg = Kg();
const Jg = "nara-arka",
    Ra = ["./assets/memory-0.webp", "./assets/memory-1.webp", "./assets/memory-2.webp", "./assets/memory-3.webp"],
    kg = {
        names: {
            recipient: "Zahra",
            sender: "Aku"
        },
        intro: "Ada taman kecil yang kusiapkan khusus untuk hari ulang tahunmu. Jalan pelan-pelan, ya. Beberapa hal baik sedang menunggumu. Semoga kamu menikmatinya dan suka, yaa.",
        welcome: "Aku menyiapkan sesuatu di dalam rumah yang berada di ujung jalan. Ikuti jalan besar di depan dan rumah tersebut berada setelah tangga besar dan taman bunga. Ada kejutan kecil yang menunggumu di sana.",
        photos: [{
            src: Ra[0],
            title: "Dari satu halo",
            caption: "Hujan sore itu membuat kita tinggal sedikit lebih lama di kedai buku. Aku memesan kopi, kamu membuka buku yang sama untuk ketiga kalinya. Lalu kita mulai bicara. Tentang cerita yang belum selesai, tentang lagu yang selalu diputar ulang. Aku belum tahu saat itu: obrolan sederhana ini akan menjadi sesuatu yang paling kutunggu."
        }, {
            src: Ra[1],
            title: "Hari yang tidak terburu-buru",
            caption: "Bekalnya terlalu banyak, tikarnya terlalu kecil, dan kita lupa membawa sendok. Tapi sore di taman itu tetap jadi salah satu hari favoritku. Rupanya bahagia tidak selalu perlu rencana besar. Kadang cukup ada kamu, buah yang manis, dan waktu yang terasa melambat."
        }, {
            src: Ra[2],
            title: "Ke mana pun, asal bersamamu",
            caption: "Kita duduk dekat jendela dan menebak nama setiap gunung yang lewat. Tidak satu pun tebakan kita benar. Kamu tertawa sampai lupa memotret pemandangannya. Foto ini mengingatkanku bahwa perjalanan terbaik selalu punya teman yang tepat."
        }, {
            src: Ra[3],
            title: "Sampai langit berubah warna",
            caption: "Kita menunggu matahari turun tanpa banyak bicara. Suara ombak mengisi semua jeda. Aku ingin menyimpan sore ini, bukan karena semuanya sempurna, tapi karena di sebelahmu, diam pun terasa seperti pulang."
        }],
        adventure: {
            sage: ["Ah, rupanya tamu yang ditunggu sudah datang. Selamat ulang tahun, {recipient}. Rumah itu memang belum bisa dibuka begitu saja.", "Kuncinya terselip di gerai buah seberang sungai. Cari di antara buah merah, dekat kain biru. Perhatikan baik-baik—benda kecil sering bersembunyi di tempat yang ramai.", "Sampaikan kepada penjaga jembatan bahwa kamu sedang mencari kunci rumah. Aku menunggu kabar baikmu di sini."],
            questions: [{
                text: "Sebentar, ada keperluan apa di seberang?",
                answers: ["Aku mencari kunci rumah di gerai buah.", "Aku sedang mencari jalan keluar taman."]
            }, {
                text: "Kalau begitu, petunjuk Kakek tadi menyebut tempat yang mana?",
                answers: ["Di antara buah merah, dekat kain biru.", "Di bawah papan jembatan."]
            }],
            hint: "Petunjuk Kakek: cari kunci rumah di antara buah merah, dekat kain biru pada gerai buah seberang sungai."
        },
        wishes: [{
            title: "Untuk hatimu",
            text: "Semoga kamu selalu punya alasan kecil untuk tersenyum. Semoga hari yang berat bertemu pelukan yang hangat, dan semoga kamu ingat: kamu tidak harus menghadapi semuanya sendirian."
        }, {
            title: "Untuk mimpimu",
            text: "Semoga langkahmu menuju hal yang kamu impikan selalu menemukan jalan. Tidak apa-apa berjalan pelan, beristirahat, atau memulai lagi. Aku bangga pada keberanianmu untuk terus mencoba."
        }, {
            title: "Untuk kita",
            text: "Semoga masih ada banyak pagi sederhana, perjalanan spontan, dan cerita konyol yang kita bagi. Aku tidak meminta hari yang selalu sempurna. Aku hanya ingin terus belajar menemanimu dengan lebih baik."
        }],
        letterTitle: "Untukmu, Zahra",
        letter: ["{recipient},", "Selamat ulang tahun. Hari ini aku ingin kamu berhenti sebentar dari semua hal yang sedang kamu kejar. Tarik napas, lihat sekeliling, dan izinkan dirimu dirayakan. Kamu pantas mendapatkan hari yang hangat, tanpa perlu melakukan apa-apa untuk layak menerimanya.", "Terima kasih sudah hadir dengan caramu sendiri. Untuk cerita panjang di akhir hari, untuk perhatian kecil yang sering kamu anggap biasa, dan untuk tawa yang bisa mengubah suasana paling melelahkan menjadi lebih ringan.", "Aku tahu tahun ini tidak selalu mudah. Ada rencana yang berubah dan hari-hari yang meminta lebih banyak tenaga. Tapi aku melihat kamu terus mencoba. Aku harap kamu nggak terlalu keras sama diri sendiri, ya. Pelan-pelan aja, kamu nggak harus memaksakan semuanya.", "Di usia yang baru, semoga kamu semakin dekat dengan hal-hal yang membuatmu merasa hidup. Semoga ada ruang untuk istirahat, keberanian untuk memilih, dan banyak kesempatan untuk menjadi dirimu sendiri.", "Aku tidak bisa menjanjikan jalan yang selalu mudah. Tapi aku ingin tetap ada: mendengarkan, menemani, dan merayakan setiap langkah kecilmu. Taman ini mungkin kecil, tetapi rasa syukurku karena mengenalmu jauh lebih besar.", "Terima kasih sudah menjadi kamu. Hari ini, dan di hari-hari berikutnya, semoga kamu selalu merasa dicintai.", "Salam hangat, {sender}"],
        greeting: ["Akhirnya sampai juga, Zahra. Maaf membuatmu mencari sedikit lebih lama. Aku ingin hari ini punya cerita yang bisa dikenang. Semua yang kamu temukan tadi cuma sebagian kecil dari alasan aku bersyukur kenal kamu."]
    },
    Fg = {
        names: {
            recipient: "Darling",
            sender: "Me"
        },
        intro: "I made a little garden just for your birthday. Take your time walking through it. A few good things are waiting for you.",
        welcome: "I prepared something in the house at the end of the path. Follow the flower path after the big stairs. A surprise is waiting for you there.",
        photos: [{
            src: Ra[0],
            title: "It started with hello",
            caption: "That rainy afternoon kept us a little longer at the bookshop. I ordered coffee, and you opened the same book for the third time. Then we started talking, about unfinished stories and songs we kept replaying. I didn't know it yet, but that simple conversation would become the thing I look forward to most."
        }, {
            src: Ra[1],
            title: "A day with no rush",
            caption: "Too much food, too small a blanket, and we forgot the spoons. Still, that afternoon in the park is one of my favorite days. Happiness doesn't always need big plans. Sometimes it is just you, sweet fruit, and time that seems to slow down."
        }, {
            src: Ra[2],
            title: "Anywhere, as long as it's with you",
            caption: "We sat by the window and guessed the name of every mountain we passed. We didn't get a single one right. You laughed so hard you forgot to take a picture of the view. This photo reminds me that the best journeys always have the right company."
        }, {
            src: Ra[3],
            title: "Until the sky changed color",
            caption: "We waited for the sun to go down without saying much. The waves filled every pause. I want to keep this evening, not because everything was perfect, but because next to you, even silence feels like coming home."
        }],
        adventure: {
            sage: ["Ah, the guest we have been waiting for has arrived. Happy birthday, {recipient}. That house cannot simply be opened just yet.", "The key is tucked away at the fruit stall across the river. Look among the red fruit, near the blue cloth. Look closely: small things love to hide in busy places.", "Tell the bridge keeper that you are looking for the house key. I will wait here for your good news."],
            questions: [{
                text: "Just a moment. What brings you across the river?",
                answers: ["I am looking for the house key at the fruit stall.", "I am looking for the way out of the garden."]
            }, {
                text: "Then where did the Old Sage's clue tell you to look?",
                answers: ["Among the red fruit, near the blue cloth.", "Under the bridge planks."]
            }],
            hint: "The Old Sage's clue: look for the house key among the red fruit, near the blue cloth at the fruit stall across the river."
        },
        wishes: [{
            title: "For your heart",
            text: "May you always have small reasons to smile. May hard days meet warm hugs, and may you remember that you never have to face everything alone."
        }, {
            title: "For your dreams",
            text: "May your steps toward what you dream of always find a way. It is okay to walk slowly, to rest, or to begin again. I am proud of your courage to keep trying."
        }, {
            title: "For us",
            text: "May there be many more simple mornings, spontaneous trips and silly stories for us to share. I am not asking for perfect days. I only want to keep learning to be there for you, a little better each time."
        }],
        letterTitle: "Always, for you.",
        letter: ["Dear {recipient},", "Happy birthday. Today I want you to pause from everything you have been chasing. Take a breath, look around, and let yourself be celebrated. You deserve a warm day without having to do anything to earn it.", "Thank you for showing up in your own way. For the long stories at the end of the day, for the small kindnesses you think are nothing special, and for the laughter that makes the most tiring moments feel lighter. I keep all of it, even the parts you may have forgotten.", "I know this year has not always been easy. Plans changed, and some days asked more of you than usual. But I saw you keep trying. I hope you can see yourself with the same tenderness I see you with.", "In this new year of your life, may you come closer to the things that make you feel alive. May there be room to rest, courage to choose, and plenty of chances to be yourself.", "I cannot promise the road will always be easy. But I want to stay: listening, keeping you company, and celebrating every small step you take. This garden may be small, but my gratitude for knowing you is far bigger.", "Thank you for being you. Today, and every day after, I hope you always feel loved.", "With love, {sender}"],
        greeting: ["You made it, {recipient}. Sorry for making you search a little longer. I wanted today to have a story we can remember together.", "Everything you found along the way is only a small part of why I am grateful to have you."]
    },
    Wg = {
        id: kg,
        en: Fg
    };

function Dh(s) {
    return JSON.parse(JSON.stringify(Wg[s]))
}

function Mh(s, b, z) {
    return s.replaceAll("{recipient}", b).replaceAll("{name}", b).replaceAll("{sender}", z)
}

function Ho(s = "id") {
    const b = Dh(s),
        z = "Zahra",
        m = "Raihan",
        E = D => Mh(D, z, m);
    return {
        id: Jg,
        name: z,
        from: m,
        senderAvatar: null,
        recipientAvatar: null,
        intro: E(b.intro),
        welcome: E(b.welcome),
        photos: b.photos,
        adventure: {
            sage: b.adventure.sage.map(E),
            questions: b.adventure.questions,
            hint: E(b.adventure.hint)
        },
        wishes: b.wishes.map(D => ({
            title: E(D.title),
            text: E(D.text)
        })),
        letterTitle: E(b.letterTitle),
        letter: b.letter.map(E),
        greeting: [E(b.greeting[0]), E(b.greeting[1])],
        songs: [],
        gombalan: [],
        watermark: !0
    }
}
const Uh = Ho("id");

function $g(s) {
    Object.assign(Uh, s)
}
const Ig = {
    id: "id",
    en: "en"
};
let tn = "id";
const Pg = new Set;

function Yi() {
    return tn
}

function lr(s) {
    return s === "en" || s === "ko" || s === "ja" || s === "zh" || s === "th" ? "en" : "id"
}

function tr(s) {
    const b = lr(s),
        z = b !== tn;
    return tn = b, typeof document < "u" && document.documentElement && (document.documentElement.lang = Ig[b]), z && Pg.forEach(m => m(b)), z
}

function ar(s, b) {
    return tn === "en" ? b : s
}

function ur(s, b) {
    return s.replace(/\{(\w+)\}/g, (z, m) => m in b ? String(b[m]) : z)
}

function pr(s, b, z) {
    return ur(ar(s, b), z)
}
const ph = () => tn === "en" ? "en-GB" : "id-ID";

function Hr(s) {
    return s.toLocaleDateString(ph(), {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}

function Cr(s) {
    return s.toLocaleString(ph())
}
const vl = {
        recipient: 20,
        sender: 20,
        intro: 200,
        welcome: 240,
        wishTitle: 24,
        wishText: 260,
        letterTitle: 40,
        letter: 1800,
        letterParagraphs: 10,
        greetingLine: 240,
        photos: 8,
        photoTitle: 40,
        photoCaption: 340,
        songs: 3,
        songTitle: 60,
        songArtist: 60,
        gombalan: 3,
        gombal: 140
    },
    er = ["g01", "g02", "g03", "g04", "g05", "g06", "g07", "b01", "b02", "b03", "b04", "b05", "b06", "b07"],
    zh = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
        granularity: "grapheme"
    }) : null;

function Hh(s) {
    return zh ? Array.from(zh.segment(s), b => b.segment) : Array.from(s)
}

function Pe(s, b) {
    if (typeof s != "string") return "";
    const z = s.normalize("NFC").replace(/\r\n?/g, `
`).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f​‎‏⁠﻿]/g, "").trim();
    return Hh(z).slice(0, b).join("").trim()
}

function Ca(s, b) {
    return Pe(typeof s == "string" ? s.replace(/\s*\n\s*/g, " ") : s, b)
}

function nr(s) {
    const b = Array.isArray(s) ? s.filter(E => typeof E == "string").join(`
`) : typeof s == "string" ? s : "";
    let z = vl.letter;
    const m = [];
    for (const E of b.normalize("NFC").replace(/\r\n?/g, `
`).split(`
`)) {
        const D = Pe(E, z);
        !D || z <= 0 || (z -= Hh(D).length, m.push(D))
    }
    return m.length > vl.letterParagraphs && m.splice(vl.letterParagraphs - 1, m.length, m.slice(vl.letterParagraphs - 1).join(" ")), m
}
const ir = /^(https?:\/\/|\/(?!\/)|gifts\/|assets\/)/i;

function Uo(s, b = !1) {
    if (typeof s != "string") return "";
    const z = s.trim();
    return ir.test(z) || b && /^blob:/i.test(z) ? z : ""
}
const ln = s => (Array.isArray(s) ? s : []).filter(b => !!b && typeof b == "object");

function fr(s, b, z) {
    if (typeof s.id == "string" && /^[a-z0-9][a-z0-9-]{0,47}$/.test(s.id)) return s.id;
    let m = 2166136261;
    for (const E of b + "|" + z) m ^= E.codePointAt(0), m = Math.imul(m, 16777619) >>> 0;
    return "g-" + m.toString(36)
}
const cr = s => Object.keys(s).every(b => b === "schema" || b === "demo" || b === "language" || b === "features"),
    or = s => !(s.features && typeof s.features == "object" && s.features.watermark === !1);

function sr(s, b = !1) {
    const z = Yi(),
        m = or(s);
    if (cr(s)) return {
        ...Ho(z),
        watermark: m
    };
    const E = Dh(z),
        D = Ho(z),
        X = Ca(s.recipient, vl.recipient) || E.names.recipient,
        U = Ca(s.sender, vl.sender) || E.names.sender,
        $ = Y => Mh(Y, X, U),
        el = (Y, Jl, Rl) => $(Pe(Y, Jl) || Rl),
        Gl = ln(s.wishes),
        L = E.wishes.map((Y, Jl) => {
            const Rl = Pe(Gl[Jl]?.text, vl.wishText);
            return Rl ? {
                title: $(Ca(Gl[Jl]?.title, vl.wishTitle) || Y.title),
                text: $(Rl)
            } : {
                title: $(Y.title),
                text: $(Y.text)
            }
        }),
        Z = Array.isArray(s.greeting) ? s.greeting : [],
        yt = nr(s.letter),
        wl = Array.isArray(s.photos) ? ln(s.photos).map(Y => ({
            src: Uo(Y.src, b),
            thumb: Uo(Y.thumb, b) || void 0,
            title: Ca(Y.title, vl.photoTitle),
            caption: Pe(Y.caption, vl.photoCaption)
        })).filter(Y => Y.src).slice(0, vl.photos) : null,
        At = wl ? wl.map((Y, Jl) => ({
            src: Y.src,
            ...Y.thumb ? {
                thumb: Y.thumb
            } : {},
            title: $(Y.title || (z === "en" ? "Memory " : "Kenangan ") + (Jl + 1)),
            caption: $(Y.caption)
        })) : D.photos,
        cl = ln(s.songs).map(Y => ({
            src: Uo(Y.src, b),
            title: Ca(Y.title, vl.songTitle),
            artist: Ca(Y.artist ?? Y.caption, vl.songArtist)
        })).filter(Y => Y.src).slice(0, vl.songs),
        vt = (Array.isArray(s.gombalan) ? s.gombalan : []).map(Y => Ca(Y, vl.gombal)).filter(Boolean).slice(0, vl.gombalan).map($),
        Gt = Y => typeof Y == "string" && er.includes(Y) ? Y : null,
        nu = Gt(s.senderAvatar);
    return {
        id: fr(s, X, U),
        name: X,
        from: U,
        senderAvatar: nu,
        recipientAvatar: Gt(s.recipientAvatar),
        intro: el(s.intro, vl.intro, E.intro),
        welcome: el(s.welcome, vl.welcome, E.welcome),
        photos: At,
        adventure: {
            sage: E.adventure.sage.map($),
            questions: E.adventure.questions,
            hint: $(E.adventure.hint)
        },
        wishes: L,
        letterTitle: $(Ca(s.letterTitle, vl.letterTitle) || E.letterTitle),
        letter: (yt.length ? yt : E.letter).map($),
        greeting: [el(Z[0], vl.greetingLine, E.greeting[0]), el(Z[1], vl.greetingLine, E.greeting[1])],
        songs: cl,
        gombalan: vt,
        watermark: m
    }
}
let Ch = 0,
    Eh = "";
const Co = new Set,
    Rr = {
        version: () => Ch,
        subscribe(s) {
            return Co.add(s), () => {
                Co.delete(s)
            }
        }
    },
    mr = {
        any: !1,
        lang: !1,
        names: !1,
        avatar: !1,
        photos: !1,
        songs: !1,
        brand: !1,
        text: !1
    };

function jo(s, b = !1) {
    const z = {
            ...Uh
        },
        m = Yi();
    s && "language" in s && tr(s.language);
    const E = sr(s ?? {}, b),
        D = Yi() + JSON.stringify(E);
    if (D === Eh) return mr;
    Eh = D, $g(E), Ch++;
    const X = {
        any: !0,
        lang: Yi() !== m,
        names: E.name !== z.name || E.from !== z.from,
        avatar: E.senderAvatar !== z.senderAvatar || E.recipientAvatar !== z.recipientAvatar,
        photos: JSON.stringify(E.photos) !== JSON.stringify(z.photos),
        songs: JSON.stringify(E.songs) !== JSON.stringify(z.songs),
        brand: E.watermark !== z.watermark,
        text: !0
    };
    return Co.forEach(U => U()), X
}

function dr(s) {
    const b = s.pixelquest ?? {},
        z = U => U && typeof U == "object" ? U.name : U,
        m = ln(b.photos).map(U => U).filter(U => typeof U.url == "string" && U.url).map(U => ({
            src: U.url,
            thumb: U.thumb,
            title: U.title,
            caption: U.caption
        })),
        E = ln(s.playlist).map(U => U).filter(U => typeof U.file == "string" && U.file).map(U => ({
            src: U.file,
            title: U.title,
            artist: U.artist
        })),
        D = {
            recipient: z(s.recipient),
            sender: z(s.sender),
            senderAvatar: b.senderAvatar,
            recipientAvatar: b.recipientAvatar,
            intro: b.intro,
            welcome: b.welcome,
            wishes: b.wishes,
            letterTitle: b.letterTitle,
            letter: b.letterBody ?? b.letter,
            greeting: b.greeting,
            songs: E,
            gombalan: b.gombalan
        };
    m.length && (D.photos = m), "language" in s && (D.language = s.language);
    const X = s.features && typeof s.features == "object" ? s.features : {};
    return D.features = {
        watermark: !(X.noWatermark === !0 || X.no_watermark === !0 || X.watermark === !1)
    }, D
}
async function hr(s) {
    for (let b = 0; b < 2; b++) {
        try {
            const z = await fetch(s, {
                cache: "no-store"
            });
            if (z.status === 404) return "missing";
            if (z.ok) {
                if (!(z.headers.get("content-type") ?? "").includes("json")) return "missing";
                const m = await z.json();
                return jo({
                    language: "id",
                    ...m && typeof m == "object" ? m : {}
                }), "ok"
            }
        } catch {}
        b === 0 && await new Promise(z => setTimeout(z, 900))
    }
    return "failed"
}
const an = (() => {
        if (typeof window > "u") return !1;
        try {
            return window.self !== window.top
        } catch {
            return !0
        }
    })(),
    yr = "./",
    vr = ["title", "avatar", "postcard", "album", "wishes", "letter", "greeting", "cassette", "arcade"],
    gr = ["album", "wishes", "cassette", "arcade"];

function rr(s) {
    if (typeof s != "string") return null;
    const b = s.match(/^([a-z]+)(?::(\d{1,2}))?$/);
    if (!b || !vr.includes(b[1])) return null;
    const z = b[1];
    return b[2] && !gr.includes(z) ? null : {
        screen: z,
        index: b[2] ? Math.max(0, Number(b[2]) - 1) : 0
    }
}

function br(s) {
    if (typeof window < "u" && s === window.location.origin) return !0;
    try {
        const {
            hostname: b
        } = new URL(s);
        return b === "localhost" || b === "127.0.0.1" || b === "heytml.com" || b.endsWith(".heytml.com")
    } catch {
        return !1
    }
}
const Qi = {
    changes: new Set,
    jump: new Set,
    mute: new Set
};

function qr(s, b) {
    if (Qi[s].add(b), s === "jump" && ji) {
        const z = ji;
        ji = null, b(z)
    }
    return s === "mute" && Ro !== null && b(Ro), () => {
        Qi[s].delete(b)
    }
}
let ji = null,
    Ro = null;

function po(s, b) {
    if (s === "jump" && !Qi.jump.size) {
        ji = b;
        return
    }
    s === "mute" && (Ro = b), Qi[s].forEach(z => z(b))
}

function Go(s) {
    try {
        window.parent.postMessage(s, "*")
    } catch {}
}
let Ah = "";

function Br(s) {
    !an || s === Ah || (Ah = s, Go({
        type: "HEYTML_PIXELQUEST_STAGE",
        stage: s
    }))
}
let Gi = null,
    Rh = !1,
    qo = null;

function Sr(s) {
    if (!br(s.origin)) return;
    const b = s.data;
    if (!(!b || typeof b != "object")) {
        if (b.type === "HEYTML_STUDIO_UPDATE" && b.payload && typeof b.payload == "object") {
            const z = b.payload,
                E = "pixelquest" in z || "playlist" in z || typeof z.recipient == "object" && z.recipient !== null ? dr(z) : z,
                D = jo(E, !0);
            qo = E, Rh = !0, Gi?.(), D.any && po("changes", D);
            return
        }
        if (b.type === "HEYTML_PIXELQUEST_JUMP") {
            const z = rr(b.to);
            z && po("jump", z);
            return
        }
        b.type === "HEYTML_PREVIEW_MUTE" && po("mute", b.muted === !0)
    }
}

function Tr() {
    an && (window.addEventListener("message", Sr), Go({
        type: "HEYTML_PREVIEW_READY"
    }))
}

function zr(s) {
    return Rh ? Promise.resolve(!0) : new Promise(b => {
        const z = setTimeout(() => {
            Gi = null, b(!1)
        }, s);
        Gi = () => {
            clearTimeout(z), Gi = null, b(!0)
        }
    })
}

function Er() {
    qo && jo(qo, !0)
}

function Yr() {
    an && Go({
        type: "HEYTML_PIXELQUEST_READY"
    })
}
let Bo = 0,
    Yo = !1,
    Oh = !1;
const Xi = new Set,
    Ar = /\/(assets\/)?(optimized|birthday|reference|i18n)\/|\/memory-\d+\.webp/;

function jr(s) {
    return Xi.add(s), s(Bo), () => {
        Xi.delete(s)
    }
}

function Gr() {
    Yo = !1, Xi.clear()
}

function Or() {
    if (Oh || typeof globalThis.fetch != "function" || typeof TransformStream != "function") return;
    Oh = !0, Yo = !0;
    const s = globalThis.fetch.bind(globalThis);
    globalThis.fetch = (async (b, z) => {
        const m = await s(b, z);
        if (!Yo || !m.body || !m.ok || !Ar.test(m.url)) return m;
        const E = new TransformStream({
                transform(X, U) {
                    Bo += X.byteLength;
                    for (const $ of Xi) $(Bo);
                    U.enqueue(X)
                }
            }),
            D = new Response(m.body.pipeThrough(E), {
                status: m.status,
                statusText: m.statusText,
                headers: m.headers
            });
        return Object.defineProperty(D, "url", {
            value: m.url
        }), D
    })
}
Tr();
Or();
const Nr = {
    en: ["Your gift has not loaded yet. Check the connection, then reload.", "Reload"]
};

function _r() {
    const s = document.getElementById("root");
    if (!s) return;
    s.textContent = "";
    const b = document.createElement("div"),
        z = document.createElement("div"),
        m = document.createElement("p"),
        E = document.createElement("button");
    b.className = "boot-splash", b.setAttribute("role", "alert"), z.className = "boot-stack";
    const [D, X] = Nr[document.documentElement.lang] ?? ["Hadiahmu belum termuat. Periksa koneksi internet, lalu muat ulang.", "Muat ulang"];
    m.textContent = D, E.type = "button", E.textContent = X, E.addEventListener("click", () => location.reload()), z.append(m, E), b.append(z), s.append(b)
}
async function Dr() {
    if (await hr(yr + "gifts/demo/config.json") === "failed" && !an) {
        _r();
        return
    }
    an && (await zr(1500), Er());
    const {
        default: b
    } = await Bg(async () => {
        const {
            default: z
        } = await import("./App-WFSxzp0l.js").then(m => m.ao);
        return {
            default: z
        }
    }, __vite__mapDeps([0, 1]));
    wg.createRoot(document.getElementById("root")).render(hh.jsx(Zg.StrictMode, {
        children: hh.jsx(b, {})
    }))
}
Dr();
export {
    Jg as D, an as P, Bg as _, vh as a, pr as b, Ur as c, Rr as d, qr as e, Br as f, Uh as g, Cr as h, Hr as i, hh as j, Yi as l, jr as o, Yr as p, Xg as r, Gr as s, ar as t
};
