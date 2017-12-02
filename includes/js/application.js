function slug(e) {
    return st = e.toLowerCase(), st = st.replace(/[\u00C0-\u00C5]/gi, "a"), st = st.replace(/[\u00C8-\u00CB]/gi, "e"), st = st.replace(/[\u00CC-\u00CF]/gi, "i"), st = st.replace(/[\u00D2-\u00D6]/gi, "o"), st = st.replace(/[\u00D9-\u00DC]/gi, "u"), st = st.replace(/[\u00D1]/gi, "n"), st = st.replace(/[^a-z0-9 ]+/gi, ""), st = st.trim().replace(/ /g, "-"), st = st.replace(/[\-]{2}/g, ""), st.replace(/[^a-z\- ]*/gi, "")
}

function truncate(e, t) {
        return t > e.length ? e : (e = e.substring(0, t)) + "..."
    }! function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function a(e, t) {
            var a = (t = t || te).createElement("script");
            a.text = e, t.head.appendChild(a).parentNode.removeChild(a)
        }

        function n(e) {
            var t = !!e && "length" in e && e.length,
                a = fe.type(e);
            return "function" !== a && !fe.isWindow(e) && ("array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function i(e, t, a) {
            return fe.isFunction(t) ? fe.grep(e, function(e, n) {
                return !!t.call(e, n, e) !== a
            }) : t.nodeType ? fe.grep(e, function(e) {
                return e === t !== a
            }) : "string" != typeof t ? fe.grep(e, function(e) {
                return se.call(t, e) > -1 !== a
            }) : Ce.test(t) ? fe.filter(t, e, a) : (t = fe.filter(t, e), fe.grep(e, function(e) {
                return se.call(t, e) > -1 !== a && 1 === e.nodeType
            }))
        }

        function s(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return fe.each(e.match(Me) || [], function(e, a) {
                t[a] = !0
            }), t
        }

        function l(e) {
            return e
        }

        function p(e) {
            throw e
        }

        function u(e, t, a, n) {
            var r;
            try {
                e && fe.isFunction(r = e.promise) ? r.call(e).done(t).fail(a) : e && fe.isFunction(r = e.then) ? r.call(e, t, a) : t.apply(void 0, [e].slice(n))
            } catch (e) {
                a.apply(void 0, [e])
            }
        }

        function d() {
            te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), fe.ready()
        }

        function c() {
            this.expando = fe.expando + c.uid++
        }

        function f(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
        }

        function h(e, t, a) {
            var n;
            if (void 0 === a && 1 === e.nodeType)
                if (n = "data-" + t.replace(Be, "-$&").toLowerCase(), "string" == typeof(a = e.getAttribute(n))) {
                    try {
                        a = f(a)
                    } catch (e) {}
                    Ne.set(e, t, a)
                } else a = void 0;
            return a
        }

        function m(e, t, a, n) {
            var r, i = 1,
                s = 20,
                o = n ? function() {
                    return n.cur()
                } : function() {
                    return fe.css(e, t, "")
                },
                l = o(),
                p = a && a[3] || (fe.cssNumber[t] ? "" : "px"),
                u = (fe.cssNumber[t] || "px" !== p && +l) && je.exec(fe.css(e, t));
            if (u && u[3] !== p) {
                p = p || u[3], a = a || [], u = +l || 1;
                do {
                    u /= i = i || ".5", fe.style(e, t, u + p)
                } while (i !== (i = o() / l) && 1 !== i && --s)
            }
            return a && (u = +u || +l || 0, r = a[1] ? u + (a[1] + 1) * a[2] : +a[2], n && (n.unit = p, n.start = u, n.end = r)), r
        }

        function g(e) {
            var t, a = e.ownerDocument,
                n = e.nodeName,
                r = We[n];
            return r || (t = a.body.appendChild(a.createElement(n)), r = fe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), We[n] = r, r)
        }

        function v(e, t) {
            for (var a, n, r = [], i = 0, s = e.length; i < s; i++)(n = e[i]).style && (a = n.style.display, t ? ("none" === a && (r[i] = Ae.get(n, "display") || null, r[i] || (n.style.display = "")), "" === n.style.display && Re(n) && (r[i] = g(n))) : "none" !== a && (r[i] = "none", Ae.set(n, "display", a)));
            for (i = 0; i < s; i++) null != r[i] && (e[i].style.display = r[i]);
            return e
        }

        function y(e, t) {
            var a;
            return a = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? fe.merge([e], a) : a
        }

        function w(e, t) {
            for (var a = 0, n = e.length; a < n; a++) Ae.set(e[a], "globalEval", !t || Ae.get(t[a], "globalEval"))
        }

        function x(e, t, a, n, r) {
            for (var i, s, o, l, p, u, d = t.createDocumentFragment(), c = [], f = 0, h = e.length; f < h; f++)
                if ((i = e[f]) || 0 === i)
                    if ("object" === fe.type(i)) fe.merge(c, i.nodeType ? [i] : i);
                    else if ($e.test(i)) {
                for (s = s || d.appendChild(t.createElement("div")), o = (Fe.exec(i) || ["", ""])[1].toLowerCase(), l = Ve[o] || Ve._default, s.innerHTML = l[1] + fe.htmlPrefilter(i) + l[2], u = l[0]; u--;) s = s.lastChild;
                fe.merge(c, s.childNodes), (s = d.firstChild).textContent = ""
            } else c.push(t.createTextNode(i));
            for (d.textContent = "", f = 0; i = c[f++];)
                if (n && fe.inArray(i, n) > -1) r && r.push(i);
                else if (p = fe.contains(i.ownerDocument, i), s = y(d.appendChild(i), "script"), p && w(s), a)
                for (u = 0; i = s[u++];) Ye.test(i.type || "") && a.push(i);
            return d
        }

        function b() {
            return !0
        }

        function T() {
            return !1
        }

        function C() {
            try {
                return te.activeElement
            } catch (e) {}
        }

        function S(e, t, a, n, r, i) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof a && (n = n || a, a = void 0);
                for (o in t) S(e, o, a, n, t[o], i);
                return e
            }
            if (null == n && null == r ? (r = a, n = a = void 0) : null == r && ("string" == typeof a ? (r = n, n = void 0) : (r = n, n = a, a = void 0)), !1 === r) r = T;
            else if (!r) return e;
            return 1 === i && (s = r, (r = function(e) {
                return fe().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
                fe.event.add(this, t, r, n, a)
            })
        }

        function E(e, t) {
            return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? fe(">tbody", e)[0] || e : e
        }

        function z(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function k(e) {
            var t = tt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function M(e, t) {
            var a, n, r, i, s, o, l, p;
            if (1 === t.nodeType) {
                if (Ae.hasData(e) && (i = Ae.access(e), s = Ae.set(t, i), p = i.events)) {
                    delete s.handle, s.events = {};
                    for (r in p)
                        for (a = 0, n = p[r].length; a < n; a++) fe.event.add(t, r, p[r][a])
                }
                Ne.hasData(e) && (o = Ne.access(e), l = fe.extend({}, o), Ne.set(t, l))
            }
        }

        function P(e, t) {
            var a = t.nodeName.toLowerCase();
            "input" === a && Ge.test(e.type) ? t.checked = e.checked : "input" !== a && "textarea" !== a || (t.defaultValue = e.defaultValue)
        }

        function D(e, t, n, r) {
            t = re.apply([], t);
            var i, s, o, l, p, u, d = 0,
                c = e.length,
                f = c - 1,
                h = t[0],
                m = fe.isFunction(h);
            if (m || c > 1 && "string" == typeof h && !ce.checkClone && et.test(h)) return e.each(function(a) {
                var i = e.eq(a);
                m && (t[0] = h.call(this, a, i.html())), D(i, t, n, r)
            });
            if (c && (i = x(t, e[0].ownerDocument, !1, e, r), s = i.firstChild, 1 === i.childNodes.length && (i = s), s || r)) {
                for (l = (o = fe.map(y(i, "script"), z)).length; d < c; d++) p = i, d !== f && (p = fe.clone(p, !0, !0), l && fe.merge(o, y(p, "script"))), n.call(e[d], p, d);
                if (l)
                    for (u = o[o.length - 1].ownerDocument, fe.map(o, k), d = 0; d < l; d++) p = o[d], Ye.test(p.type || "") && !Ae.access(p, "globalEval") && fe.contains(u, p) && (p.src ? fe._evalUrl && fe._evalUrl(p.src) : a(p.textContent.replace(at, ""), u))
            }
            return e
        }

        function I(e, t, a) {
            for (var n, r = t ? fe.filter(t, e) : e, i = 0; null != (n = r[i]); i++) a || 1 !== n.nodeType || fe.cleanData(y(n)), n.parentNode && (a && fe.contains(n.ownerDocument, n) && w(y(n, "script")), n.parentNode.removeChild(n));
            return e
        }

        function L(e, t, a) {
            var n, r, i, s, o = e.style;
            return (a = a || it(e)) && ("" !== (s = a.getPropertyValue(t) || a[t]) || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), !ce.pixelMarginRight() && rt.test(s) && nt.test(t) && (n = o.width, r = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = a.width, o.width = n, o.minWidth = r, o.maxWidth = i)), void 0 !== s ? s + "" : s
        }

        function A(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function N(e) {
            if (e in dt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), a = ut.length; a--;)
                if ((e = ut[a] + t) in dt) return e
        }

        function H(e) {
            var t = fe.cssProps[e];
            return t || (t = fe.cssProps[e] = N(e) || e), t
        }

        function B(e, t, a) {
            var n = je.exec(t);
            return n ? Math.max(0, n[2] - (a || 0)) + (n[3] || "px") : t
        }

        function O(e, t, a, n, r) {
            var i, s = 0;
            for (i = a === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2) "margin" === a && (s += fe.css(e, a + qe[i], !0, r)), n ? ("content" === a && (s -= fe.css(e, "padding" + qe[i], !0, r)), "margin" !== a && (s -= fe.css(e, "border" + qe[i] + "Width", !0, r))) : (s += fe.css(e, "padding" + qe[i], !0, r), "padding" !== a && (s += fe.css(e, "border" + qe[i] + "Width", !0, r)));
            return s
        }

        function j(e, t, a) {
            var n, r = it(e),
                i = L(e, t, r),
                s = "border-box" === fe.css(e, "boxSizing", !1, r);
            return rt.test(i) ? i : (n = s && (ce.boxSizingReliable() || i === e.style[t]), "auto" === i && (i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (i = parseFloat(i) || 0) + O(e, t, a || (s ? "border" : "content"), n, r) + "px")
        }

        function q(e, t, a, n, r) {
            return new q.prototype.init(e, t, a, n, r)
        }

        function R() {
            ft && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, fe.fx.interval), fe.fx.tick())
        }

        function X() {
            return e.setTimeout(function() {
                ct = void 0
            }), ct = fe.now()
        }

        function W(e, t) {
            var a, n = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (a = qe[n])] = r["padding" + a] = e;
            return t && (r.opacity = r.width = e), r
        }

        function G(e, t, a) {
            for (var n, r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), i = 0, s = r.length; i < s; i++)
                if (n = r[i].call(a, t, e)) return n
        }

        function F(e, t) {
            var a, n, r, i, s;
            for (a in e)
                if (n = fe.camelCase(a), r = t[n], i = e[a], Array.isArray(i) && (r = i[1], i = e[a] = i[0]), a !== n && (e[n] = i, delete e[a]), (s = fe.cssHooks[n]) && "expand" in s) {
                    i = s.expand(i), delete e[n];
                    for (a in i) a in e || (e[a] = i[a], t[a] = r)
                } else t[n] = r
        }

        function Y(e, t, a) {
            var n, r, i = 0,
                s = Y.prefilters.length,
                o = fe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = ct || X(), a = Math.max(0, p.startTime + p.duration - t), n = 1 - (a / p.duration || 0), i = 0, s = p.tweens.length; i < s; i++) p.tweens[i].run(n);
                    return o.notifyWith(e, [p, n, a]), n < 1 && s ? a : (s || o.notifyWith(e, [p, 1, 0]), o.resolveWith(e, [p]), !1)
                },
                p = o.promise({
                    elem: e,
                    props: fe.extend({}, t),
                    opts: fe.extend(!0, {
                        specialEasing: {},
                        easing: fe.easing._default
                    }, a),
                    originalProperties: t,
                    originalOptions: a,
                    startTime: ct || X(),
                    duration: a.duration,
                    tweens: [],
                    createTween: function(t, a) {
                        var n = fe.Tween(e, p.opts, t, a, p.opts.specialEasing[t] || p.opts.easing);
                        return p.tweens.push(n), n
                    },
                    stop: function(t) {
                        var a = 0,
                            n = t ? p.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; a < n; a++) p.tweens[a].run(1);
                        return t ? (o.notifyWith(e, [p, 1, 0]), o.resolveWith(e, [p, t])) : o.rejectWith(e, [p, t]), this
                    }
                }),
                u = p.props;
            for (F(u, p.opts.specialEasing); i < s; i++)
                if (n = Y.prefilters[i].call(p, e, u, p.opts)) return fe.isFunction(n.stop) && (fe._queueHooks(p.elem, p.opts.queue).stop = fe.proxy(n.stop, n)), n;
            return fe.map(u, G, p), fe.isFunction(p.opts.start) && p.opts.start.call(e, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), fe.fx.timer(fe.extend(l, {
                elem: e,
                anim: p,
                queue: p.opts.queue
            })), p
        }

        function V(e) {
            return (e.match(Me) || []).join(" ")
        }

        function $(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function _(e, t, a, n) {
            var r;
            if (Array.isArray(t)) fe.each(t, function(t, r) {
                a || Et.test(e) ? n(e, r) : _(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, a, n)
            });
            else if (a || "object" !== fe.type(t)) n(e, t);
            else
                for (r in t) _(e + "[" + r + "]", t[r], a, n)
        }

        function U(e) {
            return function(t, a) {
                "string" != typeof t && (a = t, t = "*");
                var n, r = 0,
                    i = t.toLowerCase().match(Me) || [];
                if (fe.isFunction(a))
                    for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(a)) : (e[n] = e[n] || []).push(a)
            }
        }

        function K(e, t, a, n) {
            function r(o) {
                var l;
                return i[o] = !0, fe.each(e[o] || [], function(e, o) {
                    var p = o(t, a, n);
                    return "string" != typeof p || s || i[p] ? s ? !(l = p) : void 0 : (t.dataTypes.unshift(p), r(p), !1)
                }), l
            }
            var i = {},
                s = e === Ot;
            return r(t.dataTypes[0]) || !i["*"] && r("*")
        }

        function Q(e, t) {
            var a, n, r = fe.ajaxSettings.flatOptions || {};
            for (a in t) void 0 !== t[a] && ((r[a] ? e : n || (n = {}))[a] = t[a]);
            return n && fe.extend(!0, e, n), e
        }

        function Z(e, t, a) {
            for (var n, r, i, s, o = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
            if (n)
                for (r in o)
                    if (o[r] && o[r].test(n)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in a) i = l[0];
            else {
                for (r in a) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        i = r;
                        break
                    }
                    s || (s = r)
                }
                i = i || s
            }
            if (i) return i !== l[0] && l.unshift(i), a[i]
        }

        function J(e, t, a, n) {
            var r, i, s, o, l, p = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) p[s.toLowerCase()] = e.converters[s];
            for (i = u.shift(); i;)
                if (e.responseFields[i] && (a[e.responseFields[i]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
                    if ("*" === i) i = l;
                    else if ("*" !== l && l !== i) {
                if (!(s = p[l + " " + i] || p["* " + i]))
                    for (r in p)
                        if ((o = r.split(" "))[1] === i && (s = p[l + " " + o[0]] || p["* " + o[0]])) {
                            !0 === s ? s = p[r] : !0 !== p[r] && (i = o[0], u.unshift(o[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && e.throws) t = s(t);
                    else try {
                        t = s(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: s ? e : "No conversion from " + l + " to " + i
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var ee = [],
            te = e.document,
            ae = Object.getPrototypeOf,
            ne = ee.slice,
            re = ee.concat,
            ie = ee.push,
            se = ee.indexOf,
            oe = {},
            le = oe.toString,
            pe = oe.hasOwnProperty,
            ue = pe.toString,
            de = ue.call(Object),
            ce = {},
            fe = function(e, t) {
                return new fe.fn.init(e, t)
            },
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([a-z])/g,
            ve = function(e, t) {
                return t.toUpperCase()
            };
        fe.fn = fe.prototype = {
            jquery: "3.2.1",
            constructor: fe,
            length: 0,
            toArray: function() {
                return ne.call(this)
            },
            get: function(e) {
                return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = fe.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return fe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(fe.map(this, function(t, a) {
                    return e.call(t, a, t)
                }))
            },
            slice: function() {
                return this.pushStack(ne.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    a = +e + (e < 0 ? t : 0);
                return this.pushStack(a >= 0 && a < t ? [this[a]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ie,
            sort: ee.sort,
            splice: ee.splice
        }, fe.extend = fe.fn.extend = function() {
            var e, t, a, n, r, i, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                p = !1;
            for ("boolean" == typeof s && (p = s, s = arguments[o] || {}, o++), "object" == typeof s || fe.isFunction(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
                if (null != (e = arguments[o]))
                    for (t in e) a = s[t], s !== (n = e[t]) && (p && n && (fe.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, i = a && Array.isArray(a) ? a : []) : i = a && fe.isPlainObject(a) ? a : {}, s[t] = fe.extend(p, i, n)) : void 0 !== n && (s[t] = n));
            return s
        }, fe.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === fe.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = fe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, a;
                return !(!e || "[object Object]" !== le.call(e)) && (!(t = ae(e)) || "function" == typeof(a = pe.call(t, "constructor") && t.constructor) && ue.call(a) === de)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[le.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                a(e)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(ge, ve)
            },
            each: function(e, t) {
                var a, r = 0;
                if (n(e))
                    for (a = e.length; r < a && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(he, "")
            },
            makeArray: function(e, t) {
                var a = t || [];
                return null != e && (n(Object(e)) ? fe.merge(a, "string" == typeof e ? [e] : e) : ie.call(a, e)), a
            },
            inArray: function(e, t, a) {
                return null == t ? -1 : se.call(t, e, a)
            },
            merge: function(e, t) {
                for (var a = +t.length, n = 0, r = e.length; n < a; n++) e[r++] = t[n];
                return e.length = r, e
            },
            grep: function(e, t, a) {
                for (var n = [], r = 0, i = e.length, s = !a; r < i; r++) !t(e[r], r) !== s && n.push(e[r]);
                return n
            },
            map: function(e, t, a) {
                var r, i, s = 0,
                    o = [];
                if (n(e))
                    for (r = e.length; s < r; s++) null != (i = t(e[s], s, a)) && o.push(i);
                else
                    for (s in e) null != (i = t(e[s], s, a)) && o.push(i);
                return re.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var a, n, r;
                if ("string" == typeof t && (a = e[t], t = e, e = a), fe.isFunction(e)) return n = ne.call(arguments, 2), r = function() {
                    return e.apply(t || this, n.concat(ne.call(arguments)))
                }, r.guid = e.guid = e.guid || fe.guid++, r
            },
            now: Date.now,
            support: ce
        }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ee[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            oe["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(e) {
            function t(e, t, a, n) {
                var r, i, s, o, l, u, c, f = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (a = a || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return a;
                if (!n && ((t ? t.ownerDocument || t : q) !== I && D(t), t = t || I, A)) {
                    if (11 !== h && (l = me.exec(e)))
                        if (r = l[1]) {
                            if (9 === h) {
                                if (!(s = t.getElementById(r))) return a;
                                if (s.id === r) return a.push(s), a
                            } else if (f && (s = f.getElementById(r)) && O(t, s) && s.id === r) return a.push(s), a
                        } else {
                            if (l[2]) return K.apply(a, t.getElementsByTagName(e)), a;
                            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(a, t.getElementsByClassName(r)), a
                        }
                    if (x.qsa && !F[e + " "] && (!N || !N.test(e))) {
                        if (1 !== h) f = t, c = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(we, xe) : t.setAttribute("id", o = j), i = (u = S(e)).length; i--;) u[i] = "#" + o + " " + d(u[i]);
                            c = u.join(","), f = ge.test(e) && p(t.parentNode) || t
                        }
                        if (c) try {
                            return K.apply(a, f.querySelectorAll(c)), a
                        } catch (e) {} finally {
                            o === j && t.removeAttribute("id")
                        }
                    }
                }
                return z(e.replace(ie, "$1"), t, a, n)
            }

            function a() {
                function e(a, n) {
                    return t.push(a + " ") > b.cacheLength && delete e[t.shift()], e[a + " "] = n
                }
                var t = [];
                return e
            }

            function n(e) {
                return e[j] = !0, e
            }

            function r(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function i(e, t) {
                for (var a = e.split("|"), n = a.length; n--;) b.attrHandle[a[n]] = t
            }

            function s(e, t) {
                var a = t && e,
                    n = a && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (n) return n;
                if (a)
                    for (; a = a.nextSibling;)
                        if (a === t) return -1;
                return e ? 1 : -1
            }

            function o(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return n(function(t) {
                    return t = +t, n(function(a, n) {
                        for (var r, i = e([], a.length, t), s = i.length; s--;) a[r = i[s]] && (a[r] = !(n[r] = a[r]))
                    })
                })
            }

            function p(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function u() {}

            function d(e) {
                for (var t = 0, a = e.length, n = ""; t < a; t++) n += e[t].value;
                return n
            }

            function c(e, t, a) {
                var n = t.dir,
                    r = t.next,
                    i = r || n,
                    s = a && "parentNode" === i,
                    o = X++;
                return t.first ? function(t, a, r) {
                    for (; t = t[n];)
                        if (1 === t.nodeType || s) return e(t, a, r);
                    return !1
                } : function(t, a, l) {
                    var p, u, d, c = [R, o];
                    if (l) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || s) && e(t, a, l)) return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || s)
                                if (d = t[j] || (t[j] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                                else {
                                    if ((p = u[i]) && p[0] === R && p[1] === o) return c[2] = p[2];
                                    if (u[i] = c, c[2] = e(t, a, l)) return !0
                                } return !1
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, a, n) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, a, n)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, a, n) {
                for (var r = 0, i = a.length; r < i; r++) t(e, a[r], n);
                return n
            }

            function m(e, t, a, n, r) {
                for (var i, s = [], o = 0, l = e.length, p = null != t; o < l; o++)(i = e[o]) && (a && !a(i, n, r) || (s.push(i), p && t.push(o)));
                return s
            }

            function g(e, t, a, r, i, s) {
                return r && !r[j] && (r = g(r)), i && !i[j] && (i = g(i, s)), n(function(n, s, o, l) {
                    var p, u, d, c = [],
                        f = [],
                        g = s.length,
                        v = n || h(t || "*", o.nodeType ? [o] : o, []),
                        y = !e || !n && t ? v : m(v, c, e, o, l),
                        w = a ? i || (n ? e : g || r) ? [] : s : y;
                    if (a && a(y, w, o, l), r)
                        for (p = m(w, f), r(p, [], o, l), u = p.length; u--;)(d = p[u]) && (w[f[u]] = !(y[f[u]] = d));
                    if (n) {
                        if (i || e) {
                            if (i) {
                                for (p = [], u = w.length; u--;)(d = w[u]) && p.push(y[u] = d);
                                i(null, w = [], p, l)
                            }
                            for (u = w.length; u--;)(d = w[u]) && (p = i ? Z(n, d) : c[u]) > -1 && (n[p] = !(s[p] = d))
                        }
                    } else w = m(w === s ? w.splice(g, w.length) : w), i ? i(null, s, w, l) : K.apply(s, w)
                })
            }

            function v(e) {
                for (var t, a, n, r = e.length, i = b.relative[e[0].type], s = i || b.relative[" "], o = i ? 1 : 0, l = c(function(e) {
                        return e === t
                    }, s, !0), p = c(function(e) {
                        return Z(t, e) > -1
                    }, s, !0), u = [function(e, a, n) {
                        var r = !i && (n || a !== k) || ((t = a).nodeType ? l(e, a, n) : p(e, a, n));
                        return t = null, r
                    }]; o < r; o++)
                    if (a = b.relative[e[o].type]) u = [c(f(u), a)];
                    else {
                        if ((a = b.filter[e[o].type].apply(null, e[o].matches))[j]) {
                            for (n = ++o; n < r && !b.relative[e[n].type]; n++);
                            return g(o > 1 && f(u), o > 1 && d(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(ie, "$1"), a, o < n && v(e.slice(o, n)), n < r && v(e = e.slice(n)), n < r && d(e))
                        }
                        u.push(a)
                    }
                return f(u)
            }

            function y(e, a) {
                var r = a.length > 0,
                    i = e.length > 0,
                    s = function(n, s, o, l, p) {
                        var u, d, c, f = 0,
                            h = "0",
                            g = n && [],
                            v = [],
                            y = k,
                            w = n || i && b.find.TAG("*", p),
                            x = R += null == y ? 1 : Math.random() || .1,
                            T = w.length;
                        for (p && (k = s === I || s || p); h !== T && null != (u = w[h]); h++) {
                            if (i && u) {
                                for (d = 0, s || u.ownerDocument === I || (D(u), o = !A); c = e[d++];)
                                    if (c(u, s || I, o)) {
                                        l.push(u);
                                        break
                                    }
                                p && (R = x)
                            }
                            r && ((u = !c && u) && f--, n && g.push(u))
                        }
                        if (f += h, r && h !== f) {
                            for (d = 0; c = a[d++];) c(g, v, s, o);
                            if (n) {
                                if (f > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = _.call(l));
                                v = m(v)
                            }
                            K.apply(l, v), p && !n && v.length > 0 && f + a.length > 1 && t.uniqueSort(l)
                        }
                        return p && (R = x, k = y), g
                    };
                return r ? n(s) : s
            }
            var w, x, b, T, C, S, E, z, k, M, P, D, I, L, A, N, H, B, O, j = "sizzle" + 1 * new Date,
                q = e.document,
                R = 0,
                X = 0,
                W = a(),
                G = a(),
                F = a(),
                Y = function(e, t) {
                    return e === t && (P = !0), 0
                },
                V = {}.hasOwnProperty,
                $ = [],
                _ = $.pop,
                U = $.push,
                K = $.push,
                Q = $.slice,
                Z = function(e, t) {
                    for (var a = 0, n = e.length; a < n; a++)
                        if (e[a] === t) return a;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ae = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                re = new RegExp(ee + "+", "g"),
                ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                se = new RegExp("^" + ee + "*," + ee + "*"),
                oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                pe = new RegExp(ne),
                ue = new RegExp("^" + te + "$"),
                de = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te + "|[*])"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + ne),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                ce = /^(?:input|select|textarea|button)$/i,
                fe = /^h\d$/i,
                he = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ge = /[+~]/,
                ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                ye = function(e, t, a) {
                    var n = "0x" + t - 65536;
                    return n !== n || a ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                xe = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                be = function() {
                    D()
                },
                Te = c(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply($ = Q.call(q.childNodes), q.childNodes), $[q.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: $.length ? function(e, t) {
                        U.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var a = e.length, n = 0; e[a++] = t[n++];);
                        e.length = a - 1
                    }
                }
            }
            x = t.support = {}, C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, D = t.setDocument = function(e) {
                var t, a, n = e ? e.ownerDocument || e : q;
                return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, L = I.documentElement, A = !C(I), q !== I && (a = I.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", be, !1) : a.attachEvent && a.attachEvent("onunload", be)), x.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = r(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = he.test(I.getElementsByClassName), x.getById = r(function(e) {
                    return L.appendChild(e).id = j, !I.getElementsByName || !I.getElementsByName(j).length
                }), x.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && A) {
                        var a = t.getElementById(e);
                        return a ? [a] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var t = e.replace(ve, ye);
                    return function(e) {
                        var a = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return a && a.value === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && A) {
                        var a, n, r, i = t.getElementById(e);
                        if (i) {
                            if ((a = i.getAttributeNode("id")) && a.value === e) return [i];
                            for (r = t.getElementsByName(e), n = 0; i = r[n++];)
                                if ((a = i.getAttributeNode("id")) && a.value === e) return [i]
                        }
                        return []
                    }
                }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var a, n = [],
                        r = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; a = i[r++];) 1 === a.nodeType && n.push(a);
                        return n
                    }
                    return i
                }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e)
                }, H = [], N = [], (x.qsa = he.test(I.querySelectorAll)) && (r(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + j + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || N.push(".#.+[+~]")
                }), r(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                })), (x.matchesSelector = he.test(B = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                    x.disconnectedMatch = B.call(e, "*"), B.call(e, "[s!='']:x"), H.push("!=", ne)
                }), N = N.length && new RegExp(N.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(L.compareDocumentPosition), O = t || he.test(L.contains) ? function(e, t) {
                    var a = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(a.contains ? a.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = t ? function(e, t) {
                    if (e === t) return P = !0, 0;
                    var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return a || (1 & (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === a ? e === I || e.ownerDocument === q && O(q, e) ? -1 : t === I || t.ownerDocument === q && O(q, t) ? 1 : M ? Z(M, e) - Z(M, t) : 0 : 4 & a ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return P = !0, 0;
                    var a, n = 0,
                        r = e.parentNode,
                        i = t.parentNode,
                        o = [e],
                        l = [t];
                    if (!r || !i) return e === I ? -1 : t === I ? 1 : r ? -1 : i ? 1 : M ? Z(M, e) - Z(M, t) : 0;
                    if (r === i) return s(e, t);
                    for (a = e; a = a.parentNode;) o.unshift(a);
                    for (a = t; a = a.parentNode;) l.unshift(a);
                    for (; o[n] === l[n];) n++;
                    return n ? s(o[n], l[n]) : o[n] === q ? -1 : l[n] === q ? 1 : 0
                }, I) : I
            }, t.matches = function(e, a) {
                return t(e, null, null, a)
            }, t.matchesSelector = function(e, a) {
                if ((e.ownerDocument || e) !== I && D(e), a = a.replace(le, "='$1']"), x.matchesSelector && A && !F[a + " "] && (!H || !H.test(a)) && (!N || !N.test(a))) try {
                    var n = B.call(e, a);
                    if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return t(a, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && D(e), O(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && D(e);
                var a = b.attrHandle[t.toLowerCase()],
                    n = a && V.call(b.attrHandle, t.toLowerCase()) ? a(e, t, !A) : void 0;
                return void 0 !== n ? n : x.attributes || !A ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, t.escape = function(e) {
                return (e + "").replace(we, xe)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, a = [],
                    n = 0,
                    r = 0;
                if (P = !x.detectDuplicates, M = !x.sortStable && e.slice(0), e.sort(Y), P) {
                    for (; t = e[r++];) t === e[r] && (n = a.push(r));
                    for (; n--;) e.splice(a[n], 1)
                }
                return M = null, e
            }, T = t.getText = function(e) {
                var t, a = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) a += T(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n++];) a += T(t);
                return a
            }, (b = t.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, a = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : a && pe.test(a) && (t = S(a, !0)) && (t = a.indexOf(")", a.length - t) - a.length) && (e[0] = e[0].slice(0, t), e[2] = a.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ve, ye).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, a, n) {
                        return function(r) {
                            var i = t.attr(r, e);
                            return null == i ? "!=" === a : !a || (i += "", "=" === a ? i === n : "!=" === a ? i !== n : "^=" === a ? n && 0 === i.indexOf(n) : "*=" === a ? n && i.indexOf(n) > -1 : "$=" === a ? n && i.slice(-n.length) === n : "~=" === a ? (" " + i.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === a && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, a, n, r) {
                        var i = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, a, l) {
                            var p, u, d, c, f, h, m = i !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(),
                                y = !l && !o,
                                w = !1;
                            if (g) {
                                if (i) {
                                    for (; m;) {
                                        for (c = t; c = c[m];)
                                            if (o ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (w = (f = (p = (u = (d = (c = g)[j] || (c[j] = {}))[c.uniqueID] || (d[c.uniqueID] = {}))[e] || [])[0] === R && p[1]) && p[2], c = f && g.childNodes[f]; c = ++f && c && c[m] || (w = f = 0) || h.pop();)
                                        if (1 === c.nodeType && ++w && c === t) {
                                            u[e] = [R, f, w];
                                            break
                                        }
                                } else if (y && (w = f = (p = (u = (d = (c = t)[j] || (c[j] = {}))[c.uniqueID] || (d[c.uniqueID] = {}))[e] || [])[0] === R && p[1]), !1 === w)
                                    for (;
                                        (c = ++f && c && c[m] || (w = f = 0) || h.pop()) && ((o ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++w || (y && ((u = (d = c[j] || (c[j] = {}))[c.uniqueID] || (d[c.uniqueID] = {}))[e] = [R, w]), c !== t)););
                                return (w -= r) === n || w % n == 0 && w / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return i[j] ? i(a) : i.length > 1 ? (r = [e, e, "", a], b.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                            for (var n, r = i(e, a), s = r.length; s--;) e[n = Z(e, r[s])] = !(t[n] = r[s])
                        }) : function(e) {
                            return i(e, 0, r)
                        }) : i
                    }
                },
                pseudos: {
                    not: n(function(e) {
                        var t = [],
                            a = [],
                            r = E(e.replace(ie, "$1"));
                        return r[j] ? n(function(e, t, a, n) {
                            for (var i, s = r(e, null, n, []), o = e.length; o--;)(i = s[o]) && (e[o] = !(t[o] = i))
                        }) : function(e, n, i) {
                            return t[0] = e, r(t, null, i, a), t[0] = null, !a.pop()
                        }
                    }),
                    has: n(function(e) {
                        return function(a) {
                            return t(e, a).length > 0
                        }
                    }),
                    contains: n(function(e) {
                        return e = e.replace(ve, ye),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: n(function(e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                            function(t) {
                                var a;
                                do {
                                    if (a = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (a = a.toLowerCase()) === e || 0 === a.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var a = e.location && e.location.hash;
                        return a && a.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: o(!1),
                    disabled: o(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return fe.test(e.nodeName)
                    },
                    input: function(e) {
                        return ce.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, a) {
                        return [a < 0 ? a + t : a]
                    }),
                    even: l(function(e, t) {
                        for (var a = 0; a < t; a += 2) e.push(a);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var a = 1; a < t; a += 2) e.push(a);
                        return e
                    }),
                    lt: l(function(e, t, a) {
                        for (var n = a < 0 ? a + t : a; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: l(function(e, t, a) {
                        for (var n = a < 0 ? a + t : a; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[w] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[w] = function(e) {
                return function(t) {
                    var a = t.nodeName.toLowerCase();
                    return ("input" === a || "button" === a) && t.type === e
                }
            }(w);
            return u.prototype = b.filters = b.pseudos, b.setFilters = new u, S = t.tokenize = function(e, a) {
                var n, r, i, s, o, l, p, u = G[e + " "];
                if (u) return a ? 0 : u.slice(0);
                for (o = e, l = [], p = b.preFilter; o;) {
                    n && !(r = se.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(i = [])), n = !1, (r = oe.exec(o)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ie, " ")
                    }), o = o.slice(n.length));
                    for (s in b.filter) !(r = de[s].exec(o)) || p[s] && !(r = p[s](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: s,
                        matches: r
                    }), o = o.slice(n.length));
                    if (!n) break
                }
                return a ? o.length : o ? t.error(e) : G(e, l).slice(0)
            }, E = t.compile = function(e, t) {
                var a, n = [],
                    r = [],
                    i = F[e + " "];
                if (!i) {
                    for (t || (t = S(e)), a = t.length; a--;)(i = v(t[a]))[j] ? n.push(i) : r.push(i);
                    (i = F(e, y(r, n))).selector = e
                }
                return i
            }, z = t.select = function(e, t, a, n) {
                var r, i, s, o, l, u = "function" == typeof e && e,
                    c = !n && S(e = u.selector || e);
                if (a = a || [], 1 === c.length) {
                    if ((i = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = i[0]).type && 9 === t.nodeType && A && b.relative[i[1].type]) {
                        if (!(t = (b.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return a;
                        u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (r = de.needsContext.test(e) ? 0 : i.length; r-- && (s = i[r], !b.relative[o = s.type]);)
                        if ((l = b.find[o]) && (n = l(s.matches[0].replace(ve, ye), ge.test(i[0].type) && p(t.parentNode) || t))) {
                            if (i.splice(r, 1), !(e = n.length && d(i))) return K.apply(a, n), a;
                            break
                        }
                }
                return (u || E(e, c))(n, t, !A, a, !t || ge.test(e) && p(t.parentNode) || t), a
            }, x.sortStable = j.split("").sort(Y).join("") === j, x.detectDuplicates = !!P, D(), x.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function(e, t, a) {
                if (!a) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || i("value", function(e, t, a) {
                if (!a && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || i(J, function(e, t, a) {
                var n;
                if (!a) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }), t
        }(e);
        fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains, fe.escapeSelector = ye.escape;
        var we = function(e, t, a) {
                for (var n = [], r = void 0 !== a;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && fe(e).is(a)) break;
                        n.push(e)
                    }
                return n
            },
            xe = function(e, t) {
                for (var a = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && a.push(e);
                return a
            },
            be = fe.expr.match.needsContext,
            Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Ce = /^.[^:#\[\.,]*$/;
        fe.filter = function(e, t, a) {
            var n = t[0];
            return a && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? fe.find.matchesSelector(n, e) ? [n] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, fe.fn.extend({
            find: function(e) {
                var t, a, n = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (fe.contains(r[t], this)) return !0
                }));
                for (a = this.pushStack([]), t = 0; t < n; t++) fe.find(e, r[t], a);
                return n > 1 ? fe.uniqueSort(a) : a
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && be.test(e) ? fe(e) : e || [], !1).length
            }
        });
        var Se, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (fe.fn.init = function(e, t, a) {
            var n, r;
            if (!e) return this;
            if (a = a || Se, "string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || a).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Te.test(n[1]) && fe.isPlainObject(t))
                        for (n in t) fe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (r = te.getElementById(n[2])) && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== a.ready ? a.ready(e) : e(fe) : fe.makeArray(e, this)
        }).prototype = fe.fn, Se = fe(te);
        var ze = /^(?:parents|prev(?:Until|All))/,
            ke = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fe.fn.extend({
            has: function(e) {
                var t = fe(e, this),
                    a = t.length;
                return this.filter(function() {
                    for (var e = 0; e < a; e++)
                        if (fe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var a, n = 0,
                    r = this.length,
                    i = [],
                    s = "string" != typeof e && fe(e);
                if (!be.test(e))
                    for (; n < r; n++)
                        for (a = this[n]; a && a !== t; a = a.parentNode)
                            if (a.nodeType < 11 && (s ? s.index(a) > -1 : 1 === a.nodeType && fe.find.matchesSelector(a, e))) {
                                i.push(a);
                                break
                            }
                return this.pushStack(i.length > 1 ? fe.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? se.call(fe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), fe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return we(e, "parentNode")
            },
            parentsUntil: function(e, t, a) {
                return we(e, "parentNode", a)
            },
            next: function(e) {
                return s(e, "nextSibling")
            },
            prev: function(e) {
                return s(e, "previousSibling")
            },
            nextAll: function(e) {
                return we(e, "nextSibling")
            },
            prevAll: function(e) {
                return we(e, "previousSibling")
            },
            nextUntil: function(e, t, a) {
                return we(e, "nextSibling", a)
            },
            prevUntil: function(e, t, a) {
                return we(e, "previousSibling", a)
            },
            siblings: function(e) {
                return xe((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return xe(e.firstChild)
            },
            contents: function(e) {
                return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), fe.merge([], e.childNodes))
            }
        }, function(e, t) {
            fe.fn[e] = function(a, n) {
                var r = fe.map(this, t, a);
                return "Until" !== e.slice(-5) && (n = a), n && "string" == typeof n && (r = fe.filter(n, r)), this.length > 1 && (ke[e] || fe.uniqueSort(r), ze.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var Me = /[^\x20\t\r\n\f]+/g;
        fe.Callbacks = function(e) {
            e = "string" == typeof e ? o(e) : fe.extend({}, e);
            var t, a, n, r, i = [],
                s = [],
                l = -1,
                p = function() {
                    for (r = r || e.once, n = t = !0; s.length; l = -1)
                        for (a = s.shift(); ++l < i.length;) !1 === i[l].apply(a[0], a[1]) && e.stopOnFalse && (l = i.length, a = !1);
                    e.memory || (a = !1), t = !1, r && (i = a ? [] : "")
                },
                u = {
                    add: function() {
                        return i && (a && !t && (l = i.length - 1, s.push(a)), function t(a) {
                            fe.each(a, function(a, n) {
                                fe.isFunction(n) ? e.unique && u.has(n) || i.push(n) : n && n.length && "string" !== fe.type(n) && t(n)
                            })
                        }(arguments), a && !t && p()), this
                    },
                    remove: function() {
                        return fe.each(arguments, function(e, t) {
                            for (var a;
                                (a = fe.inArray(t, i, a)) > -1;) i.splice(a, 1), a <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? fe.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return r = s = [], i = a = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return r = s = [], a || t || (i = a = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, a) {
                        return r || (a = [e, (a = a || []).slice ? a.slice() : a], s.push(a), t || p()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, fe.extend({
            Deferred: function(t) {
                var a = [
                        ["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
                        ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return fe.Deferred(function(t) {
                                fe.each(a, function(a, n) {
                                    var r = fe.isFunction(e[n[4]]) && e[n[4]];
                                    i[n[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            function i(t, a, n, r) {
                                return function() {
                                    var o = this,
                                        u = arguments,
                                        d = function() {
                                            var e, d;
                                            if (!(t < s)) {
                                                if ((e = n.apply(o, u)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, fe.isFunction(d) ? r ? d.call(e, i(s, a, l, r), i(s, a, p, r)) : (s++, d.call(e, i(s, a, l, r), i(s, a, p, r), i(s, a, l, a.notifyWith))) : (n !== l && (o = void 0, u = [e]), (r || a.resolveWith)(o, u))
                                            }
                                        },
                                        c = r ? d : function() {
                                            try {
                                                d()
                                            } catch (e) {
                                                fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= s && (n !== p && (o = void 0, u = [e]), a.rejectWith(o, u))
                                            }
                                        };
                                    t ? c() : (fe.Deferred.getStackHook && (c.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(c))
                                }
                            }
                            var s = 0;
                            return fe.Deferred(function(e) {
                                a[0][3].add(i(0, e, fe.isFunction(r) ? r : l, e.notifyWith)), a[1][3].add(i(0, e, fe.isFunction(t) ? t : l)), a[2][3].add(i(0, e, fe.isFunction(n) ? n : p))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? fe.extend(e, r) : r
                        }
                    },
                    i = {};
                return fe.each(a, function(e, t) {
                    var s = t[2],
                        o = t[5];
                    r[t[1]] = s.add, o && s.add(function() {
                        n = o
                    }, a[3 - e][2].disable, a[0][2].lock), s.add(t[3].fire), i[t[0]] = function() {
                        return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[t[0] + "With"] = s.fireWith
                }), r.promise(i), t && t.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    a = t,
                    n = Array(a),
                    r = ne.call(arguments),
                    i = fe.Deferred(),
                    s = function(e) {
                        return function(a) {
                            n[e] = this, r[e] = arguments.length > 1 ? ne.call(arguments) : a, --t || i.resolveWith(n, r)
                        }
                    };
                if (t <= 1 && (u(e, i.done(s(a)).resolve, i.reject, !t), "pending" === i.state() || fe.isFunction(r[a] && r[a].then))) return i.then();
                for (; a--;) u(r[a], s(a), i.reject);
                return i.promise()
            }
        });
        var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        fe.Deferred.exceptionHook = function(t, a) {
            e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, a)
        }, fe.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var De = fe.Deferred();
        fe.fn.ready = function(e) {
            return De.then(e).catch(function(e) {
                fe.readyException(e)
            }), this
        }, fe.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || De.resolveWith(te, [fe]))
            }
        }), fe.ready.then = De.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(fe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
        var Ie = function(e, t, a, n, r, i, s) {
                var o = 0,
                    l = e.length,
                    p = null == a;
                if ("object" === fe.type(a)) {
                    r = !0;
                    for (o in a) Ie(e, t, o, a[o], !0, i, s)
                } else if (void 0 !== n && (r = !0, fe.isFunction(n) || (s = !0), p && (s ? (t.call(e, n), t = null) : (p = t, t = function(e, t, a) {
                        return p.call(fe(e), a)
                    })), t))
                    for (; o < l; o++) t(e[o], a, s ? n : n.call(e[o], o, t(e[o], a)));
                return r ? e : p ? t.call(e) : l ? t(e[0], a) : i
            },
            Le = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        c.uid = 1, c.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, a) {
                var n, r = this.cache(e);
                if ("string" == typeof t) r[fe.camelCase(t)] = a;
                else
                    for (n in t) r[fe.camelCase(n)] = t[n];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)]
            },
            access: function(e, t, a) {
                return void 0 === t || t && "string" == typeof t && void 0 === a ? this.get(e, t) : (this.set(e, t, a), void 0 !== a ? a : t)
            },
            remove: function(e, t) {
                var a, n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        a = (t = Array.isArray(t) ? t.map(fe.camelCase) : (t = fe.camelCase(t)) in n ? [t] : t.match(Me) || []).length;
                        for (; a--;) delete n[t[a]]
                    }(void 0 === t || fe.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !fe.isEmptyObject(t)
            }
        };
        var Ae = new c,
            Ne = new c,
            He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Be = /[A-Z]/g;
        fe.extend({
            hasData: function(e) {
                return Ne.hasData(e) || Ae.hasData(e)
            },
            data: function(e, t, a) {
                return Ne.access(e, t, a)
            },
            removeData: function(e, t) {
                Ne.remove(e, t)
            },
            _data: function(e, t, a) {
                return Ae.access(e, t, a)
            },
            _removeData: function(e, t) {
                Ae.remove(e, t)
            }
        }), fe.fn.extend({
            data: function(e, t) {
                var a, n, r, i = this[0],
                    s = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Ne.get(i), 1 === i.nodeType && !Ae.get(i, "hasDataAttrs"))) {
                        for (a = s.length; a--;) s[a] && 0 === (n = s[a].name).indexOf("data-") && (n = fe.camelCase(n.slice(5)), h(i, n, r[n]));
                        Ae.set(i, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    Ne.set(this, e)
                }) : Ie(this, function(t) {
                    var a;
                    if (i && void 0 === t) {
                        if (void 0 !== (a = Ne.get(i, e))) return a;
                        if (void 0 !== (a = h(i, e))) return a
                    } else this.each(function() {
                        Ne.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Ne.remove(this, e)
                })
            }
        }), fe.extend({
            queue: function(e, t, a) {
                var n;
                if (e) return t = (t || "fx") + "queue", n = Ae.get(e, t), a && (!n || Array.isArray(a) ? n = Ae.access(e, t, fe.makeArray(a)) : n.push(a)), n || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var a = fe.queue(e, t),
                    n = a.length,
                    r = a.shift(),
                    i = fe._queueHooks(e, t);
                "inprogress" === r && (r = a.shift(), n--), r && ("fx" === t && a.unshift("inprogress"), delete i.stop, r.call(e, function() {
                    fe.dequeue(e, t)
                }, i)), !n && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var a = t + "queueHooks";
                return Ae.get(e, a) || Ae.access(e, a, {
                    empty: fe.Callbacks("once memory").add(function() {
                        Ae.remove(e, [t + "queue", a])
                    })
                })
            }
        }), fe.fn.extend({
            queue: function(e, t) {
                var a = 2;
                return "string" != typeof e && (t = e, e = "fx", a--), arguments.length < a ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var a = fe.queue(this, e, t);
                    fe._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && fe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    fe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var a, n = 1,
                    r = fe.Deferred(),
                    i = this,
                    s = this.length,
                    o = function() {
                        --n || r.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(a = Ae.get(i[s], e + "queueHooks")) && a.empty && (n++, a.empty.add(o));
                return o(), r.promise(t)
            }
        });
        var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            je = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
            qe = ["Top", "Right", "Bottom", "Left"],
            Re = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
            },
            Xe = function(e, t, a, n) {
                var r, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                r = a.apply(e, n || []);
                for (i in t) e.style[i] = s[i];
                return r
            },
            We = {};
        fe.fn.extend({
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Re(this) ? fe(this).show() : fe(this).hide()
                })
            }
        });
        var Ge = /^(?:checkbox|radio)$/i,
            Fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ye = /^$|\/(?:java|ecma)script/i,
            Ve = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
        var $e = /<|&#?\w+;/;
        ! function() {
            var e = te.createDocumentFragment().appendChild(te.createElement("div")),
                t = te.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var _e = te.documentElement,
            Ue = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Qe = /^([^.]*)(?:\.(.+)|)/;
        fe.event = {
            global: {},
            add: function(e, t, a, n, r) {
                var i, s, o, l, p, u, d, c, f, h, m, g = Ae.get(e);
                if (g)
                    for (a.handler && (a = (i = a).handler, r = i.selector), r && fe.find.matchesSelector(_e, r), a.guid || (a.guid = fe.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                            return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
                        }), p = (t = (t || "").match(Me) || [""]).length; p--;) f = m = (o = Qe.exec(t[p]) || [])[1], h = (o[2] || "").split(".").sort(), f && (d = fe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = fe.event.special[f] || {}, u = fe.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: a,
                        guid: a.guid,
                        selector: r,
                        needsContext: r && fe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, i), (c = l[f]) || ((c = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = a.guid)), r ? c.splice(c.delegateCount++, 0, u) : c.push(u), fe.event.global[f] = !0)
            },
            remove: function(e, t, a, n, r) {
                var i, s, o, l, p, u, d, c, f, h, m, g = Ae.hasData(e) && Ae.get(e);
                if (g && (l = g.events)) {
                    for (p = (t = (t || "").match(Me) || [""]).length; p--;)
                        if (o = Qe.exec(t[p]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f) {
                            for (d = fe.event.special[f] || {}, c = l[f = (n ? d.delegateType : d.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = c.length; i--;) u = c[i], !r && m !== u.origType || a && a.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (c.splice(i, 1), u.selector && c.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !c.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || fe.removeEvent(e, f, g.handle), delete l[f])
                        } else
                            for (f in l) fe.event.remove(e, f + t[p], a, n, !0);
                    fe.isEmptyObject(l) && Ae.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, a, n, r, i, s, o = fe.event.fix(e),
                    l = new Array(arguments.length),
                    p = (Ae.get(this, "events") || {})[o.type] || [],
                    u = fe.event.special[o.type] || {};
                for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                    for (s = fe.event.handlers.call(this, o, p), t = 0;
                        (r = s[t++]) && !o.isPropagationStopped();)
                        for (o.currentTarget = r.elem, a = 0;
                            (i = r.handlers[a++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(i.namespace) || (o.handleObj = i, o.data = i.data, void 0 !== (n = ((fe.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, o), o.result
                }
            },
            handlers: function(e, t) {
                var a, n, r, i, s, o = [],
                    l = t.delegateCount,
                    p = e.target;
                if (l && p.nodeType && !("click" === e.type && e.button >= 1))
                    for (; p !== this; p = p.parentNode || this)
                        if (1 === p.nodeType && ("click" !== e.type || !0 !== p.disabled)) {
                            for (i = [], s = {}, a = 0; a < l; a++) void 0 === s[r = (n = t[a]).selector + " "] && (s[r] = n.needsContext ? fe(r, this).index(p) > -1 : fe.find(r, this, null, [p]).length), s[r] && i.push(n);
                            i.length && o.push({
                                elem: p,
                                handlers: i
                            })
                        }
                return p = this, l < t.length && o.push({
                    elem: p,
                    handlers: t.slice(l)
                }), o
            },
            addProp: function(e, t) {
                Object.defineProperty(fe.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: fe.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[fe.expando] ? e : new fe.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== C() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === C() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return r(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, fe.removeEvent = function(e, t, a) {
            e.removeEventListener && e.removeEventListener(t, a)
        }, fe.Event = function(e, t) {
            if (!(this instanceof fe.Event)) return new fe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0
        }, fe.Event.prototype = {
            constructor: fe.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, fe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ue.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, fe.event.addProp), fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            fe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var a, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    return r && (r === n || fe.contains(n, r)) || (e.type = i.origType, a = i.handler.apply(this, arguments), e.type = t), a
                }
            }
        }), fe.fn.extend({
            on: function(e, t, a, n) {
                return S(this, e, t, a, n)
            },
            one: function(e, t, a, n) {
                return S(this, e, t, a, n, 1)
            },
            off: function(e, t, a) {
                var n, r;
                if (e && e.preventDefault && e.handleObj) return n = e.handleObj, fe(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (a = t, t = void 0), !1 === a && (a = T), this.each(function() {
                    fe.event.remove(this, e, a, t)
                })
            }
        });
        var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Je = /<script|<style|<link/i,
            et = /checked\s*(?:[^=]|=\s*.checked.)/i,
            tt = /^true\/(.*)/,
            at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        fe.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ze, "<$1></$2>")
            },
            clone: function(e, t, a) {
                var n, r, i, s, o = e.cloneNode(!0),
                    l = fe.contains(e.ownerDocument, e);
                if (!(ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                    for (s = y(o), n = 0, r = (i = y(e)).length; n < r; n++) P(i[n], s[n]);
                if (t)
                    if (a)
                        for (i = i || y(e), s = s || y(o), n = 0, r = i.length; n < r; n++) M(i[n], s[n]);
                    else M(e, o);
                return (s = y(o, "script")).length > 0 && w(s, !l && y(e, "script")), o
            },
            cleanData: function(e) {
                for (var t, a, n, r = fe.event.special, i = 0; void 0 !== (a = e[i]); i++)
                    if (Le(a)) {
                        if (t = a[Ae.expando]) {
                            if (t.events)
                                for (n in t.events) r[n] ? fe.event.remove(a, n) : fe.removeEvent(a, n, t.handle);
                            a[Ae.expando] = void 0
                        }
                        a[Ne.expando] && (a[Ne.expando] = void 0)
                    }
            }
        }), fe.fn.extend({
            detach: function(e) {
                return I(this, e, !0)
            },
            remove: function(e) {
                return I(this, e)
            },
            text: function(e) {
                return Ie(this, function(e) {
                    return void 0 === e ? fe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return D(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return D(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = E(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return D(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(y(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return fe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ie(this, function(e) {
                    var t = this[0] || {},
                        a = 0,
                        n = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Je.test(e) && !Ve[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = fe.htmlPrefilter(e);
                        try {
                            for (; a < n; a++) 1 === (t = this[a] || {}).nodeType && (fe.cleanData(y(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return D(this, arguments, function(t) {
                    var a = this.parentNode;
                    fe.inArray(this, e) < 0 && (fe.cleanData(y(this)), a && a.replaceChild(t, this))
                }, e)
            }
        }), fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            fe.fn[e] = function(e) {
                for (var a, n = [], r = fe(e), i = r.length - 1, s = 0; s <= i; s++) a = s === i ? this : this.clone(!0), fe(r[s])[t](a), ie.apply(n, a.get());
                return this.pushStack(n)
            }
        });
        var nt = /^margin/,
            rt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
            it = function(t) {
                var a = t.ownerDocument.defaultView;
                return a && a.opener || (a = e), a.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (o) {
                    o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", _e.appendChild(s);
                    var t = e.getComputedStyle(o);
                    a = "1%" !== t.top, i = "2px" === t.marginLeft, n = "4px" === t.width, o.style.marginRight = "50%", r = "4px" === t.marginRight, _e.removeChild(s), o = null
                }
            }
            var a, n, r, i, s = te.createElement("div"),
                o = te.createElement("div");
            o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), fe.extend(ce, {
                pixelPosition: function() {
                    return t(), a
                },
                boxSizingReliable: function() {
                    return t(), n
                },
                pixelMarginRight: function() {
                    return t(), r
                },
                reliableMarginLeft: function() {
                    return t(), i
                }
            }))
        }();
        var st = /^(none|table(?!-c[ea]).+)/,
            ot = /^--/,
            lt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            pt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ut = ["Webkit", "Moz", "ms"],
            dt = te.createElement("div").style;
        fe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var a = L(e, "opacity");
                            return "" === a ? "1" : a
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, a, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, i, s, o = fe.camelCase(t),
                        l = ot.test(t),
                        p = e.style;
                    if (l || (t = H(o)), s = fe.cssHooks[t] || fe.cssHooks[o], void 0 === a) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : p[t];
                    "string" == (i = typeof a) && (r = je.exec(a)) && r[1] && (a = m(e, t, r), i = "number"), null != a && a === a && ("number" === i && (a += r && r[3] || (fe.cssNumber[o] ? "" : "px")), ce.clearCloneStyle || "" !== a || 0 !== t.indexOf("background") || (p[t] = "inherit"), s && "set" in s && void 0 === (a = s.set(e, a, n)) || (l ? p.setProperty(t, a) : p[t] = a))
                }
            },
            css: function(e, t, a, n) {
                var r, i, s, o = fe.camelCase(t);
                return ot.test(t) || (t = H(o)), (s = fe.cssHooks[t] || fe.cssHooks[o]) && "get" in s && (r = s.get(e, !0, a)), void 0 === r && (r = L(e, t, n)), "normal" === r && t in pt && (r = pt[t]), "" === a || a ? (i = parseFloat(r), !0 === a || isFinite(i) ? i || 0 : r) : r
            }
        }), fe.each(["height", "width"], function(e, t) {
            fe.cssHooks[t] = {
                get: function(e, a, n) {
                    if (a) return !st.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, n) : Xe(e, lt, function() {
                        return j(e, t, n)
                    })
                },
                set: function(e, a, n) {
                    var r, i = n && it(e),
                        s = n && O(e, t, n, "border-box" === fe.css(e, "boxSizing", !1, i), i);
                    return s && (r = je.exec(a)) && "px" !== (r[3] || "px") && (e.style[t] = a, a = fe.css(e, t)), B(0, a, s)
                }
            }
        }), fe.cssHooks.marginLeft = A(ce.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            fe.cssHooks[e + t] = {
                expand: function(a) {
                    for (var n = 0, r = {}, i = "string" == typeof a ? a.split(" ") : [a]; n < 4; n++) r[e + qe[n] + t] = i[n] || i[n - 2] || i[0];
                    return r
                }
            }, nt.test(e) || (fe.cssHooks[e + t].set = B)
        }), fe.fn.extend({
            css: function(e, t) {
                return Ie(this, function(e, t, a) {
                    var n, r, i = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (n = it(e), r = t.length; s < r; s++) i[t[s]] = fe.css(e, t[s], !1, n);
                        return i
                    }
                    return void 0 !== a ? fe.style(e, t, a) : fe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), fe.Tween = q, q.prototype = {
            constructor: q,
            init: function(e, t, a, n, r, i) {
                this.elem = e, this.prop = a, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = i || (fe.cssNumber[a] ? "" : "px")
            },
            cur: function() {
                var e = q.propHooks[this.prop];
                return e && e.get ? e.get(this) : q.propHooks._default.get(this)
            },
            run: function(e) {
                var t, a = q.propHooks[this.prop];
                return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), a && a.set ? a.set(this) : q.propHooks._default.set(this), this
            }
        }, q.prototype.init.prototype = q.prototype, q.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, fe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, fe.fx = q.prototype.init, fe.fx.step = {};
        var ct, ft, ht = /^(?:toggle|show|hide)$/,
            mt = /queueHooks$/;
        fe.Animation = fe.extend(Y, {
                tweeners: {
                    "*": [function(e, t) {
                        var a = this.createTween(e, t);
                        return m(a.elem, e, je.exec(t), a), a
                    }]
                },
                tweener: function(e, t) {
                    fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Me);
                    for (var a, n = 0, r = e.length; n < r; n++) a = e[n], Y.tweeners[a] = Y.tweeners[a] || [], Y.tweeners[a].unshift(t)
                },
                prefilters: [function(e, t, a) {
                    var n, r, i, s, o, l, p, u, d = "width" in t || "height" in t,
                        c = this,
                        f = {},
                        h = e.style,
                        m = e.nodeType && Re(e),
                        g = Ae.get(e, "fxshow");
                    a.queue || (null == (s = fe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || o()
                    }), s.unqueued++, c.always(function() {
                        c.always(function() {
                            s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
                        })
                    }));
                    for (n in t)
                        if (r = t[n], ht.test(r)) {
                            if (delete t[n], i = i || "toggle" === r, r === (m ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[n]) continue;
                                m = !0
                            }
                            f[n] = g && g[n] || fe.style(e, n)
                        }
                    if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(f)) {
                        d && 1 === e.nodeType && (a.overflow = [h.overflow, h.overflowX, h.overflowY], null == (p = g && g.display) && (p = Ae.get(e, "display")), "none" === (u = fe.css(e, "display")) && (p ? u = p : (v([e], !0), p = e.style.display || p, u = fe.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != p) && "none" === fe.css(e, "float") && (l || (c.done(function() {
                            h.display = p
                        }), null == p && (u = h.display, p = "none" === u ? "" : u)), h.display = "inline-block")), a.overflow && (h.overflow = "hidden", c.always(function() {
                            h.overflow = a.overflow[0], h.overflowX = a.overflow[1], h.overflowY = a.overflow[2]
                        })), l = !1;
                        for (n in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Ae.access(e, "fxshow", {
                            display: p
                        }), i && (g.hidden = !m), m && v([e], !0), c.done(function() {
                            m || v([e]), Ae.remove(e, "fxshow");
                            for (n in f) fe.style(e, n, f[n])
                        })), l = G(m ? g[n] : 0, n, c), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
                    }
                }],
                prefilter: function(e, t) {
                    t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
                }
            }), fe.speed = function(e, t, a) {
                var n = e && "object" == typeof e ? fe.extend({}, e) : {
                    complete: a || !a && t || fe.isFunction(e) && e,
                    duration: e,
                    easing: a && t || t && !fe.isFunction(t) && t
                };
                return fe.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in fe.fx.speeds ? n.duration = fe.fx.speeds[n.duration] : n.duration = fe.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    fe.isFunction(n.old) && n.old.call(this), n.queue && fe.dequeue(this, n.queue)
                }, n
            }, fe.fn.extend({
                fadeTo: function(e, t, a, n) {
                    return this.filter(Re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, a, n)
                },
                animate: function(e, t, a, n) {
                    var r = fe.isEmptyObject(e),
                        i = fe.speed(t, a, n),
                        s = function() {
                            var t = Y(this, fe.extend({}, e), i);
                            (r || Ae.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
                },
                stop: function(e, t, a) {
                    var n = function(e) {
                        var t = e.stop;
                        delete e.stop, t(a)
                    };
                    return "string" != typeof e && (a = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            i = fe.timers,
                            s = Ae.get(this);
                        if (r) s[r] && s[r].stop && n(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && mt.test(r) && n(s[r]);
                        for (r = i.length; r--;) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(a), t = !1, i.splice(r, 1));
                        !t && a || fe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, a = Ae.get(this),
                            n = a[e + "queue"],
                            r = a[e + "queueHooks"],
                            i = fe.timers,
                            s = n ? n.length : 0;
                        for (a.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                        delete a.finish
                    })
                }
            }), fe.each(["toggle", "show", "hide"], function(e, t) {
                var a = fe.fn[t];
                fe.fn[t] = function(e, n, r) {
                    return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(W(t, !0), e, n, r)
                }
            }), fe.each({
                slideDown: W("show"),
                slideUp: W("hide"),
                slideToggle: W("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                fe.fn[e] = function(e, a, n) {
                    return this.animate(t, e, a, n)
                }
            }), fe.timers = [], fe.fx.tick = function() {
                var e, t = 0,
                    a = fe.timers;
                for (ct = fe.now(); t < a.length; t++)(e = a[t])() || a[t] !== e || a.splice(t--, 1);
                a.length || fe.fx.stop(), ct = void 0
            }, fe.fx.timer = function(e) {
                fe.timers.push(e), fe.fx.start()
            }, fe.fx.interval = 13, fe.fx.start = function() {
                ft || (ft = !0, R())
            }, fe.fx.stop = function() {
                ft = null
            }, fe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, fe.fn.delay = function(t, a) {
                return t = fe.fx ? fe.fx.speeds[t] || t : t, a = a || "fx", this.queue(a, function(a, n) {
                    var r = e.setTimeout(a, t);
                    n.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = te.createElement("input"),
                    t = te.createElement("select").appendChild(te.createElement("option"));
                e.type = "checkbox", ce.checkOn = "" !== e.value, ce.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", ce.radioValue = "t" === e.value
            }();
        var gt, vt = fe.expr.attrHandle;
        fe.fn.extend({
            attr: function(e, t) {
                return Ie(this, fe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    fe.removeAttr(this, e)
                })
            }
        }), fe.extend({
            attr: function(e, t, a) {
                var n, r, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? fe.prop(e, t, a) : (1 === i && fe.isXMLDoc(e) || (r = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? gt : void 0)), void 0 !== a ? null === a ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, a, t)) ? n : (e.setAttribute(t, a + ""), a) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = fe.find.attr(e, t)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ce.radioValue && "radio" === t && r(e, "input")) {
                            var a = e.value;
                            return e.setAttribute("type", t), a && (e.value = a), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var a, n = 0,
                    r = t && t.match(Me);
                if (r && 1 === e.nodeType)
                    for (; a = r[n++];) e.removeAttribute(a)
            }
        }), gt = {
            set: function(e, t, a) {
                return !1 === t ? fe.removeAttr(e, a) : e.setAttribute(a, a), a
            }
        }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = vt[t] || fe.find.attr;
            vt[t] = function(e, t, n) {
                var r, i, s = t.toLowerCase();
                return n || (i = vt[s], vt[s] = r, r = null != a(e, t, n) ? s : null, vt[s] = i), r
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i,
            wt = /^(?:a|area)$/i;
        fe.fn.extend({
            prop: function(e, t) {
                return Ie(this, fe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[fe.propFix[e] || e]
                })
            }
        }), fe.extend({
            prop: function(e, t, a) {
                var n, r, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== a ? r && "set" in r && void 0 !== (n = r.set(e, a, t)) ? n : e[t] = a : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = fe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ce.optSelected || (fe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fe.propFix[this.toLowerCase()] = this
        }), fe.fn.extend({
            addClass: function(e) {
                var t, a, n, r, i, s, o, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, $(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Me) || []; a = this[l++];)
                        if (r = $(a), n = 1 === a.nodeType && " " + V(r) + " ") {
                            for (s = 0; i = t[s++];) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                            r !== (o = V(n)) && a.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, a, n, r, i, s, o, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, $(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Me) || []; a = this[l++];)
                        if (r = $(a), n = 1 === a.nodeType && " " + V(r) + " ") {
                            for (s = 0; i = t[s++];)
                                for (; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                            r !== (o = V(n)) && a.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var a = typeof e;
                return "boolean" == typeof t && "string" === a ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(a) {
                    fe(this).toggleClass(e.call(this, a, $(this), t), t)
                }) : this.each(function() {
                    var t, n, r, i;
                    if ("string" === a)
                        for (n = 0, r = fe(this), i = e.match(Me) || []; t = i[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== a || ((t = $(this)) && Ae.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ae.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, a, n = 0;
                for (t = " " + e + " "; a = this[n++];)
                    if (1 === a.nodeType && (" " + V($(a)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var xt = /\r/g;
        fe.fn.extend({
            val: function(e) {
                var t, a, n, r = this[0]; {
                    if (arguments.length) return n = fe.isFunction(e), this.each(function(a) {
                        var r;
                        1 === this.nodeType && (null == (r = n ? e.call(this, a, fe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = fe.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (a = t.get(r, "value")) ? a : "string" == typeof(a = r.value) ? a.replace(xt, "") : null == a ? "" : a
                }
            }
        }), fe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = fe.find.attr(e, "value");
                        return null != t ? t : V(fe.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, a, n, i = e.options,
                            s = e.selectedIndex,
                            o = "select-one" === e.type,
                            l = o ? null : [],
                            p = o ? s + 1 : i.length;
                        for (n = s < 0 ? p : o ? s : 0; n < p; n++)
                            if (((a = i[n]).selected || n === s) && !a.disabled && (!a.parentNode.disabled || !r(a.parentNode, "optgroup"))) {
                                if (t = fe(a).val(), o) return t;
                                l.push(t)
                            }
                        return l
                    },
                    set: function(e, t) {
                        for (var a, n, r = e.options, i = fe.makeArray(t), s = r.length; s--;)((n = r[s]).selected = fe.inArray(fe.valHooks.option.get(n), i) > -1) && (a = !0);
                        return a || (e.selectedIndex = -1), i
                    }
                }
            }
        }), fe.each(["radio", "checkbox"], function() {
            fe.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
                }
            }, ce.checkOn || (fe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var bt = /^(?:focusinfocus|focusoutblur)$/;
        fe.extend(fe.event, {
            trigger: function(t, a, n, r) {
                var i, s, o, l, p, u, d, c = [n || te],
                    f = pe.call(t, "type") ? t.type : t,
                    h = pe.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = o = n = n || te, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (f = (h = f.split(".")).shift(), h.sort()), p = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), a = null == a ? [t] : fe.makeArray(a, [t]), d = fe.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, a))) {
                    if (!r && !d.noBubble && !fe.isWindow(n)) {
                        for (l = d.delegateType || f, bt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) c.push(s), o = s;
                        o === (n.ownerDocument || te) && c.push(o.defaultView || o.parentWindow || e)
                    }
                    for (i = 0;
                        (s = c[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : d.bindType || f, (u = (Ae.get(s, "events") || {})[t.type] && Ae.get(s, "handle")) && u.apply(s, a), (u = p && s[p]) && u.apply && Le(s) && (t.result = u.apply(s, a), !1 === t.result && t.preventDefault());
                    return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(c.pop(), a) || !Le(n) || p && fe.isFunction(n[f]) && !fe.isWindow(n) && ((o = n[p]) && (n[p] = null), fe.event.triggered = f, n[f](), fe.event.triggered = void 0, o && (n[p] = o)), t.result
                }
            },
            simulate: function(e, t, a) {
                var n = fe.extend(new fe.Event, a, {
                    type: e,
                    isSimulated: !0
                });
                fe.event.trigger(n, null, t)
            }
        }), fe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var a = this[0];
                if (a) return fe.event.trigger(e, t, a, !0)
            }
        }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            fe.fn[t] = function(e, a) {
                return arguments.length > 0 ? this.on(t, null, e, a) : this.trigger(t)
            }
        }), fe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ce.focusin = "onfocusin" in e, ce.focusin || fe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var a = function(e) {
                fe.event.simulate(t, e.target, fe.event.fix(e))
            };
            fe.event.special[t] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = Ae.access(n, t);
                    r || n.addEventListener(e, a, !0), Ae.access(n, t, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = Ae.access(n, t) - 1;
                    r ? Ae.access(n, t, r) : (n.removeEventListener(e, a, !0), Ae.remove(n, t))
                }
            }
        });
        var Tt = e.location,
            Ct = fe.now(),
            St = /\?/;
        fe.parseXML = function(t) {
            var a;
            if (!t || "string" != typeof t) return null;
            try {
                a = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                a = void 0
            }
            return a && !a.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), a
        };
        var Et = /\[\]$/,
            zt = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
        fe.param = function(e, t) {
            var a, n = [],
                r = function(e, t) {
                    var a = fe.isFunction(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == a ? "" : a)
                };
            if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (a in e) _(a, e[a], t, r);
            return n.join("&")
        }, fe.fn.extend({
            serialize: function() {
                return fe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !fe(this).is(":disabled") && Mt.test(this.nodeName) && !kt.test(e) && (this.checked || !Ge.test(e))
                }).map(function(e, t) {
                    var a = fe(this).val();
                    return null == a ? null : Array.isArray(a) ? fe.map(a, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(zt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: a.replace(zt, "\r\n")
                    }
                }).get()
            }
        });
        var Pt = /%20/g,
            Dt = /#.*$/,
            It = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            At = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nt = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            Bt = {},
            Ot = {},
            jt = "*/".concat("*"),
            qt = te.createElement("a");
        qt.href = Tt.href, fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: At.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": jt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": fe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Q(Q(e, fe.ajaxSettings), t) : Q(fe.ajaxSettings, e)
            },
            ajaxPrefilter: U(Bt),
            ajaxTransport: U(Ot),
            ajax: function(t, a) {
                function n(t, a, n, o) {
                    var p, c, f, x, b, T = a;
                    u || (u = !0, l && e.clearTimeout(l), r = void 0, s = o || "", C.readyState = t > 0 ? 4 : 0, p = t >= 200 && t < 300 || 304 === t, n && (x = Z(h, C, n)), x = J(h, x, C, p), p ? (h.ifModified && ((b = C.getResponseHeader("Last-Modified")) && (fe.lastModified[i] = b), (b = C.getResponseHeader("etag")) && (fe.etag[i] = b)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, c = x.data, p = !(f = x.error))) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (a || T) + "", p ? v.resolveWith(m, [c, T, C]) : v.rejectWith(m, [C, T, f]), C.statusCode(w), w = void 0, d && g.trigger(p ? "ajaxSuccess" : "ajaxError", [C, h, p ? c : f]), y.fireWith(m, [C, T]), d && (g.trigger("ajaxComplete", [C, h]), --fe.active || fe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (a = t, t = void 0), a = a || {};
                var r, i, s, o, l, p, u, d, c, f, h = fe.ajaxSetup({}, a),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? fe(m) : fe.event,
                    v = fe.Deferred(),
                    y = fe.Callbacks("once memory"),
                    w = h.statusCode || {},
                    x = {},
                    b = {},
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!o)
                                    for (o = {}; t = Lt.exec(s);) o[t[1].toLowerCase()] = t[2];
                                t = o[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) C.always(e[C.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t), n(0, t), this
                        }
                    };
                if (v.promise(C), h.url = ((t || h.url || Tt.href) + "").replace(Ht, Tt.protocol + "//"), h.type = a.method || a.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Me) || [""], null == h.crossDomain) {
                    p = te.createElement("a");
                    try {
                        p.href = h.url, p.href = p.href, h.crossDomain = qt.protocol + "//" + qt.host != p.protocol + "//" + p.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)), K(Bt, h, a, C), u) return C;
                (d = fe.event && h.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Nt.test(h.type), i = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+")) : (f = h.url.slice(i.length), h.data && (i += (St.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(It, "$1"), f = (St.test(i) ? "&" : "?") + "_=" + Ct++ +f), h.url = i + f), h.ifModified && (fe.lastModified[i] && C.setRequestHeader("If-Modified-Since", fe.lastModified[i]), fe.etag[i] && C.setRequestHeader("If-None-Match", fe.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || a.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : h.accepts["*"]);
                for (c in h.headers) C.setRequestHeader(c, h.headers[c]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || u)) return C.abort();
                if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = K(Ot, h, a, C)) {
                    if (C.readyState = 1, d && g.trigger("ajaxSend", [C, h]), u) return C;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, r.send(x, n)
                    } catch (e) {
                        if (u) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, a) {
                return fe.get(e, t, a, "json")
            },
            getScript: function(e, t) {
                return fe.get(e, void 0, t, "script")
            }
        }), fe.each(["get", "post"], function(e, t) {
            fe[t] = function(e, a, n, r) {
                return fe.isFunction(a) && (r = r || n, n = a, a = void 0), fe.ajax(fe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: a,
                    success: n
                }, fe.isPlainObject(e) && e))
            }
        }), fe._evalUrl = function(e) {
            return fe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, fe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return fe.isFunction(e) ? this.each(function(t) {
                    fe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = fe(this),
                        a = t.contents();
                    a.length ? a.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = fe.isFunction(e);
                return this.each(function(a) {
                    fe(this).wrapAll(t ? e.call(this, a) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    fe(this).replaceWith(this.childNodes)
                }), this
            }
        }), fe.expr.pseudos.hidden = function(e) {
            return !fe.expr.pseudos.visible(e)
        }, fe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, fe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var Rt = {
                0: 200,
                1223: 204
            },
            Xt = fe.ajaxSettings.xhr();
        ce.cors = !!Xt && "withCredentials" in Xt, ce.ajax = Xt = !!Xt, fe.ajaxTransport(function(t) {
            var a, n;
            if (ce.cors || Xt && !t.crossDomain) return {
                send: function(r, i) {
                    var s, o = t.xhr();
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) o.setRequestHeader(s, r[s]);
                    a = function(e) {
                        return function() {
                            a && (a = n = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i(Rt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = a(), n = o.onerror = a("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
                        4 === o.readyState && e.setTimeout(function() {
                            a && n()
                        })
                    }, a = a("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (a) throw e
                    }
                },
                abort: function() {
                    a && a()
                }
            }
        }), fe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), fe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return fe.globalEval(e), e
                }
            }
        }), fe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), fe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, a;
                return {
                    send: function(n, r) {
                        t = fe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", a = function(e) {
                            t.remove(), a = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), te.head.appendChild(t[0])
                    },
                    abort: function() {
                        a && a()
                    }
                }
            }
        });
        var Wt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
        fe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Wt.pop() || fe.expando + "_" + Ct++;
                return this[e] = !0, e
            }
        }), fe.ajaxPrefilter("json jsonp", function(t, a, n) {
            var r, i, s, o = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
            if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Gt, "$1" + r) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || fe.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", i = e[r], e[r] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === i ? fe(e).removeProp(r) : e[r] = i, t[r] && (t.jsonpCallback = a.jsonpCallback, Wt.push(r)), s && fe.isFunction(i) && i(s[0]), s = i = void 0
            }), "script"
        }), ce.createHTMLDocument = function() {
            var e = te.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), fe.parseHTML = function(e, t, a) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (a = t, t = !1);
            var n, r, i;
            return t || (ce.createHTMLDocument ? ((n = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href, t.head.appendChild(n)) : t = te), r = Te.exec(e), i = !a && [], r ? [t.createElement(r[1])] : (r = x([e], t, i), i && i.length && fe(i).remove(), fe.merge([], r.childNodes))
        }, fe.fn.load = function(e, t, a) {
            var n, r, i, s = this,
                o = e.indexOf(" ");
            return o > -1 && (n = V(e.slice(o)), e = e.slice(0, o)), fe.isFunction(t) ? (a = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && fe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments, s.html(n ? fe("<div>").append(fe.parseHTML(e)).find(n) : e)
            }).always(a && function(e, t) {
                s.each(function() {
                    a.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            fe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), fe.expr.pseudos.animated = function(e) {
            return fe.grep(fe.timers, function(t) {
                return e === t.elem
            }).length
        }, fe.offset = {
            setOffset: function(e, t, a) {
                var n, r, i, s, o, l, p = fe.css(e, "position"),
                    u = fe(e),
                    d = {};
                "static" === p && (e.style.position = "relative"), o = u.offset(), i = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === p || "fixed" === p) && (i + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(i) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, a, fe.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, fe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    fe.offset.setOffset(this, e, t)
                });
                var t, a, n, r, i = this[0];
                if (i) return i.getClientRects().length ? (n = i.getBoundingClientRect(), t = i.ownerDocument, a = t.documentElement, r = t.defaultView, {
                    top: n.top + r.pageYOffset - a.clientTop,
                    left: n.left + r.pageXOffset - a.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, a = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === fe.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (n = e.offset()), n = {
                        top: n.top + fe.css(e[0], "borderTopWidth", !0),
                        left: n.left + fe.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - n.top - fe.css(a, "marginTop", !0),
                        left: t.left - n.left - fe.css(a, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
                    return e || _e
                })
            }
        }), fe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var a = "pageYOffset" === t;
            fe.fn[e] = function(n) {
                return Ie(this, function(e, n, r) {
                    var i;
                    if (fe.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r) return i ? i[t] : e[n];
                    i ? i.scrollTo(a ? i.pageXOffset : r, a ? r : i.pageYOffset) : e[n] = r
                }, e, n, arguments.length)
            }
        }), fe.each(["top", "left"], function(e, t) {
            fe.cssHooks[t] = A(ce.pixelPosition, function(e, a) {
                if (a) return a = L(e, t), rt.test(a) ? fe(e).position()[t] + "px" : a
            })
        }), fe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            fe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(a, n) {
                fe.fn[n] = function(r, i) {
                    var s = arguments.length && (a || "boolean" != typeof r),
                        o = a || (!0 === r || !0 === i ? "margin" : "border");
                    return Ie(this, function(t, a, r) {
                        var i;
                        return fe.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? fe.css(t, a, o) : fe.style(t, a, r, o)
                    }, t, s ? r : void 0, s)
                }
            })
        }), fe.fn.extend({
            bind: function(e, t, a) {
                return this.on(e, null, t, a)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, a, n) {
                return this.on(t, e, a, n)
            },
            undelegate: function(e, t, a) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", a)
            }
        }), fe.holdReady = function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        }, fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
            return fe
        });
        var Ft = e.jQuery,
            Yt = e.$;
        return fe.noConflict = function(t) {
            return e.$ === fe && (e.$ = Yt), t && e.jQuery === fe && (e.jQuery = Ft), fe
        }, t || (e.jQuery = e.$ = fe), fe
    }),
    function() {
        "use strict";
        var e, t = function(a, n) {
            function r(e) {
                return Math.floor(e)
            }

            function i() {
                var e = x.params.autoplay,
                    t = x.slides.eq(x.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay), x.autoplayTimeoutId = setTimeout(function() {
                    x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? n.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
                }, e)
            }

            function s(t, a) {
                var n = e(t.target);
                if (!n.is(a))
                    if ("string" == typeof a) n = n.parents(a);
                    else if (a.nodeType) {
                    var r;
                    return n.parents().each(function(e, t) {
                        t === a && (r = a)
                    }), r ? a : void 0
                }
                if (0 !== n.length) return n[0]
            }

            function o(e, t) {
                t = t || {};
                var a = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                    e.forEach(function(e) {
                        x.onResize(!0), x.emit("onObserverUpdate", x, e)
                    })
                });
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), x.observers.push(a)
            }

            function l(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return !1;
                if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var a = !1;
                        if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
                        var n = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            r = window.innerWidth,
                            i = window.innerHeight,
                            s = x.container.offset();
                        x.rtl && (s.left = s.left - x.container[0].scrollLeft);
                        for (var o = [
                                [s.left, s.top],
                                [s.left + x.width, s.top],
                                [s.left, s.top + x.height],
                                [s.left + x.width, s.top + x.height]
                            ], l = 0; l < o.length; l++) {
                            var p = o[l];
                            p[0] >= n.left && p[0] <= n.left + r && p[1] >= n.top && p[1] <= n.top + i && (a = !0)
                        }
                        if (!a) return
                    }
                    x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev()), x.emit("onKeyPress", x, t)
                }
            }

            function p(e) {
                var t = 0,
                    a = 0,
                    n = 0,
                    r = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), n = 10 * t, r = 10 * a, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !a && (a = r < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: n,
                    pixelY: r
                }
            }

            function u(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0,
                    a = x.rtl ? -1 : 1,
                    n = p(e);
                if (x.params.mousewheelForceToAxis)
                    if (x.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
                        t = n.pixelX * a
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
                        t = n.pixelY
                    } else t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * a : -n.pixelY;
                if (0 !== t) {
                    if (x.params.mousewheelInvert && (t = -t), x.params.freeMode) {
                        var r = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity,
                            i = x.isBeginning,
                            s = x.isEnd;
                        if (r >= x.minTranslate() && (r = x.minTranslate()), r <= x.maxTranslate() && (r = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(r), x.updateProgress(), x.updateActiveIndex(), (!i && x.isBeginning || !s && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function() {
                                x.slideReset()
                            }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === r || r === x.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
                            if (t < 0)
                                if (x.isEnd && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges) return !0
                                } else x.slideNext(), x.emit("onScroll", x, e);
                        else if (x.isBeginning && !x.params.loop || x.animating) {
                            if (x.params.mousewheelReleaseOnEdges) return !0
                        } else x.slidePrev(), x.emit("onScroll", x, e);
                        x.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function d(t, a) {
                t = e(t);
                var n, r, i, s = x.rtl ? -1 : 1;
                n = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), i = t.attr("data-swiper-parallax-y"), r || i ? (r = r || "0", i = i || "0") : x.isHorizontal() ? (r = n, i = "0") : (i = n, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a * s + "%" : r * a * s + "px", i = i.indexOf("%") >= 0 ? parseInt(i, 10) * a + "%" : i * a + "px", t.transform("translate3d(" + r + ", " + i + ",0px)")
            }

            function c(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof t)) return new t(a, n);
            var f = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                h = n && n.virtualTranslate;
            n = n || {};
            var m = {};
            for (var g in n)
                if ("object" != typeof n[g] || null === n[g] || (n[g].nodeType || n[g] === window || n[g] === document || "undefined" != typeof Dom7 && n[g] instanceof Dom7 || "undefined" != typeof jQuery && n[g] instanceof jQuery)) m[g] = n[g];
                else {
                    m[g] = {};
                    for (var v in n[g]) m[g][v] = n[g][v]
                }
            for (var y in f)
                if (void 0 === n[y]) n[y] = f[y];
                else if ("object" == typeof n[y])
                for (var w in f[y]) void 0 === n[y][w] && (n[y][w] = f[y][w]);
            var x = this;
            if (x.params = n, x.originalParams = m, x.classNames = [], void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7), (void 0 !== e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function() {
                    if (!x.params.breakpoints) return !1;
                    var e, t = !1,
                        a = [];
                    for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && a.push(e);
                    a.sort(function(e, t) {
                        return parseInt(e, 10) > parseInt(t, 10)
                    });
                    for (var n = 0; n < a.length; n++)(e = a[n]) >= window.innerWidth && !t && (t = e);
                    return t || "max"
                }, x.setBreakpoint = function() {
                    var e = x.getActiveBreakpoint();
                    if (e && x.currentBreakpoint !== e) {
                        var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                            a = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                        for (var n in t) x.params[n] = t[n];
                        x.currentBreakpoint = e, a && x.destroyLoop && x.reLoop(!0)
                    }
                }, x.params.breakpoints && x.setBreakpoint(), x.container = e(a), 0 !== x.container.length)) {
                if (x.container.length > 1) {
                    var b = [];
                    return x.container.each(function() {
                        b.push(new t(this, n))
                    }), b
                }
                x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, void 0 === h && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function() {
                    return "horizontal" === x.params.direction
                }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"), x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function() {
                    x.params.allowSwipeToNext = !1, !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
                }, x.lockSwipeToPrev = function() {
                    x.params.allowSwipeToPrev = !1, !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
                }, x.lockSwipes = function() {
                    x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor()
                }, x.unlockSwipeToNext = function() {
                    x.params.allowSwipeToNext = !0, !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
                }, x.unlockSwipeToPrev = function() {
                    x.params.allowSwipeToPrev = !0, !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
                }, x.unlockSwipes = function() {
                    x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor()
                }, x.setGrabCursor = function(e) {
                    x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab"
                }, x.unsetGrabCursor = function() {
                    x.container[0].style.cursor = ""
                }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function(e, t, a, n, r, i) {
                    function s() {
                        i && i()
                    }
                    var o;
                    e.complete && r ? s() : t ? ((o = new window.Image).onload = s, o.onerror = s, n && (o.sizes = n), a && (o.srcset = a), t && (o.src = t)) : s()
                }, x.preloadImages = function() {
                    x.imagesToLoad = x.container.find("img");
                    for (var e = 0; e < x.imagesToLoad.length; e++) x.loadImage(x.imagesToLoad[e], x.imagesToLoad[e].currentSrc || x.imagesToLoad[e].getAttribute("src"), x.imagesToLoad[e].srcset || x.imagesToLoad[e].getAttribute("srcset"), x.imagesToLoad[e].sizes || x.imagesToLoad[e].getAttribute("sizes"), !0, function() {
                        void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                    })
                }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function() {
                    return void 0 === x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void i())))
                }, x.stopAutoplay = function(e) {
                    x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
                }, x.pauseAutoplay = function(e) {
                    x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, i()) : x.wrapper.transitionEnd(function() {
                        x && (x.autoplayPaused = !1, x.autoplaying ? i() : x.stopAutoplay())
                    }))
                }, x.minTranslate = function() {
                    return -x.snapGrid[0]
                }, x.maxTranslate = function() {
                    return -x.snapGrid[x.snapGrid.length - 1]
                }, x.updateAutoHeight = function() {
                    var e, t = [],
                        a = 0;
                    if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                            var n = x.activeIndex + e;
                            if (n > x.slides.length) break;
                            t.push(x.slides.eq(n)[0])
                        } else t.push(x.slides.eq(x.activeIndex)[0]);
                    for (e = 0; e < t.length; e++)
                        if (void 0 !== t[e]) {
                            var r = t[e].offsetHeight;
                            a = r > a ? r : a
                        }
                    a && x.wrapper.css("height", a + "px")
                }, x.updateContainerSize = function() {
                    var e, t;
                    e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width : x.height)
                }, x.updateSlidesSize = function() {
                    x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
                    var e, t = x.params.spaceBetween,
                        a = -x.params.slidesOffsetBefore,
                        n = 0,
                        i = 0;
                    if (void 0 !== x.size) {
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size), x.virtualSize = -t, x.rtl ? x.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : x.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var s;
                        x.params.slidesPerColumn > 1 && (s = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (s = Math.max(s, x.params.slidesPerView * x.params.slidesPerColumn)));
                        var o, l = x.params.slidesPerColumn,
                            p = s / l,
                            u = p - (x.params.slidesPerColumn * p - x.slides.length);
                        for (e = 0; e < x.slides.length; e++) {
                            o = 0;
                            var d = x.slides.eq(e);
                            if (x.params.slidesPerColumn > 1) {
                                var c, f, h;
                                "column" === x.params.slidesPerColumnFill ? (h = e - (f = Math.floor(e / l)) * l, (f > u || f === u && h === l - 1) && ++h >= l && (h = 0, f++), c = f + h * s / l, d.css({
                                    "-webkit-box-ordinal-group": c,
                                    "-moz-box-ordinal-group": c,
                                    "-ms-flex-order": c,
                                    "-webkit-order": c,
                                    order: c
                                })) : f = e - (h = Math.floor(e / p)) * p, d.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", h)
                            }
                            "none" !== d.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), x.params.roundLengths && (o = r(o))) : (o = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (o = r(o)), x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"), x.slides[e].swiperSlideSize = o, x.slidesSizesGrid.push(o), x.params.centeredSlides ? (a = a + o / 2 + n / 2 + t, 0 === n && 0 !== e && (a = a - x.size / 2 - t), 0 === e && (a = a - x.size / 2 - t), Math.abs(a) < .001 && (a = 0), i % x.params.slidesPerGroup == 0 && x.snapGrid.push(a), x.slidesGrid.push(a)) : (i % x.params.slidesPerGroup == 0 && x.snapGrid.push(a), x.slidesGrid.push(a), a = a + o + t), x.virtualSize += o + t, n = o, i++)
                        }
                        x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                        var m;
                        if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                                width: x.virtualSize + x.params.spaceBetween + "px"
                            }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                                width: x.virtualSize + x.params.spaceBetween + "px"
                            }) : x.wrapper.css({
                                height: x.virtualSize + x.params.spaceBetween + "px"
                            })), x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * s, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({
                                width: x.virtualSize + x.params.spaceBetween + "px"
                            }) : x.wrapper.css({
                                height: x.virtualSize + x.params.spaceBetween + "px"
                            }), x.params.centeredSlides)) {
                            for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                            x.snapGrid = m
                        }
                        if (!x.params.centeredSlides) {
                            for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                            x.snapGrid = m, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                        }
                        0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                            marginLeft: t + "px"
                        }) : x.slides.css({
                            marginRight: t + "px"
                        }) : x.slides.css({
                            marginBottom: t + "px"
                        })), x.params.watchSlidesProgress && x.updateSlidesOffset()
                    }
                }, x.updateSlidesOffset = function() {
                    for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
                }, x.currentSlidesPerView = function() {
                    var e, t, a = 1;
                    if (x.params.centeredSlides) {
                        var n, r = x.slides[x.activeIndex].swiperSlideSize;
                        for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slides[e] && !n && (a++, (r += x.slides[e].swiperSlideSize) > x.size && (n = !0));
                        for (t = x.activeIndex - 1; t >= 0; t--) x.slides[t] && !n && (a++, (r += x.slides[t].swiperSlideSize) > x.size && (n = !0))
                    } else
                        for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && a++;
                    return a
                }, x.updateSlidesProgress = function(e) {
                    if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
                        void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                        var t = -e;
                        x.rtl && (t = e), x.slides.removeClass(x.params.slideVisibleClass);
                        for (var a = 0; a < x.slides.length; a++) {
                            var n = x.slides[a],
                                r = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + x.params.spaceBetween);
                            if (x.params.watchSlidesVisibility) {
                                var i = -(t - n.swiperSlideOffset),
                                    s = i + x.slidesSizesGrid[a];
                                (i >= 0 && i < x.size || s > 0 && s <= x.size || i <= 0 && s >= x.size) && x.slides.eq(a).addClass(x.params.slideVisibleClass)
                            }
                            n.progress = x.rtl ? -r : r
                        }
                    }
                }, x.updateProgress = function(e) {
                    void 0 === e && (e = x.translate || 0);
                    var t = x.maxTranslate() - x.minTranslate(),
                        a = x.isBeginning,
                        n = x.isEnd;
                    0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !a && x.emit("onReachBeginning", x), x.isEnd && !n && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress)
                }, x.updateActiveIndex = function() {
                    var e, t, a, n = x.rtl ? x.translate : -x.translate;
                    for (t = 0; t < x.slidesGrid.length; t++) void 0 !== x.slidesGrid[t + 1] ? n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] && (e = t + 1) : n >= x.slidesGrid[t] && (e = t);
                    x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (a = Math.floor(e / x.params.slidesPerGroup)) >= x.snapGrid.length && (a = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = a, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex())
                }, x.updateRealIndex = function() {
                    x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
                }, x.updateClasses = function() {
                    x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                    var t = x.slides.eq(x.activeIndex);
                    t.addClass(x.params.slideActiveClass), n.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                    var a = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                    x.params.loop && 0 === a.length && (a = x.slides.eq(0)).addClass(x.params.slideNextClass);
                    var r = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                    if (x.params.loop && 0 === r.length && (r = x.slides.eq(-1)).addClass(x.params.slidePrevClass), n.loop && (a.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), r.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && x.paginationContainer.length > 0) {
                        var i, s = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                        if (x.params.loop ? ((i = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup)) > x.slides.length - 1 - 2 * x.loopedSlides && (i -= x.slides.length - 2 * x.loopedSlides), i > s - 1 && (i -= s), i < 0 && "bullets" !== x.params.paginationType && (i = s + i)) : i = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function() {
                                e(this).index() === i && e(this).addClass(x.params.bulletActiveClass)
                            }) : x.bullets.eq(i).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(i + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(s)), "progress" === x.params.paginationType) {
                            var o = (i + 1) / s,
                                l = o,
                                p = 1;
                            x.isHorizontal() || (p = o, l = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(x.params.speed)
                        }
                        "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, i + 1, s)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                    }
                    x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
                }, x.updatePagination = function() {
                    if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === x.params.paginationType) {
                            for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, a = 0; a < t; a++) x.params.paginationBulletRender ? e += x.params.paginationBulletRender(x, a, x.params.bulletClass) : e += "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                            x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                        }
                        "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                    }
                }, x.update = function(e) {
                    function t() {
                        x.rtl, x.translate;
                        a = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(a), x.updateActiveIndex(), x.updateClasses()
                    }
                    if (x) {
                        x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                        var a;
                        if (e) {
                            x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()
                        } else x.params.autoHeight && x.updateAutoHeight()
                    }
                }, x.onResize = function(e) {
                    x.params.onBeforeResize && x.params.onBeforeResize(x), x.params.breakpoints && x.setBreakpoint();
                    var t = x.params.allowSwipeToPrev,
                        a = x.params.allowSwipeToNext;
                    x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                    var n = !1;
                    if (x.params.freeMode) {
                        var r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                        x.setWrapperTranslate(r), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight()
                    } else x.updateClasses(), n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                    x.params.lazyLoading && !n && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = t, x.params.allowSwipeToNext = a, x.params.onAfterResize && x.params.onAfterResize(x)
                }, x.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), x.touchEvents = {
                    start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                    move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                    end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function(e) {
                    var t = e ? "off" : "on",
                        a = e ? "removeEventListener" : "addEventListener",
                        r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                        i = x.support.touch ? r : document,
                        s = !!x.params.nested;
                    if (x.browser.ie) r[a](x.touchEvents.start, x.onTouchStart, !1), i[a](x.touchEvents.move, x.onTouchMove, s), i[a](x.touchEvents.end, x.onTouchEnd, !1);
                    else {
                        if (x.support.touch) {
                            var o = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r[a](x.touchEvents.start, x.onTouchStart, o), r[a](x.touchEvents.move, x.onTouchMove, s), r[a](x.touchEvents.end, x.onTouchEnd, o)
                        }(n.simulateTouch && !x.device.ios && !x.device.android || n.simulateTouch && !x.support.touch && x.device.ios) && (r[a]("mousedown", x.onTouchStart, !1), document[a]("mousemove", x.onTouchMove, s), document[a]("mouseup", x.onTouchEnd, !1))
                    }
                    window[a]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && r[a]("click", x.preventClicks, !0)
                }, x.attachEvents = function() {
                    x.initEvents()
                }, x.detachEvents = function() {
                    x.initEvents(!0)
                }, x.allowClick = !0, x.preventClicks = function(e) {
                    x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, x.onClickNext = function(e) {
                    e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext()
                }, x.onClickPrev = function(e) {
                    e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev()
                }, x.onClickIndex = function(t) {
                    t.preventDefault();
                    var a = e(this).index() * x.params.slidesPerGroup;
                    x.params.loop && (a += x.loopedSlides), x.slideTo(a)
                }, x.updateClickedSlide = function(t) {
                    var a = s(t, "." + x.params.slideClass),
                        n = !1;
                    if (a)
                        for (var r = 0; r < x.slides.length; r++) x.slides[r] === a && (n = !0);
                    if (!a || !n) return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                    if (x.clickedSlide = a, x.clickedIndex = e(a).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                        var i, o = x.clickedIndex,
                            l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                        if (x.params.loop) {
                            if (x.animating) return;
                            i = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10), x.params.centeredSlides ? o < x.loopedSlides - l / 2 || o > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                x.slideTo(o)
                            }, 0)) : x.slideTo(o) : o > x.slides.length - l ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                x.slideTo(o)
                            }, 0)) : x.slideTo(o)
                        } else x.slideTo(o)
                    }
                };
                var T, C, S, E, z, k, M, P, D, I, L = "input, select, textarea, button, video",
                    A = Date.now(),
                    N = [];
                x.animating = !1, x.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var H, B;
                x.onTouchStart = function(t) {
                    if (t.originalEvent && (t = t.originalEvent), (H = "touchstart" === t.type) || !("which" in t) || 3 !== t.which)
                        if (x.params.noSwiping && s(t, "." + x.params.noSwipingClass)) x.allowClick = !0;
                        else if (!x.params.swipeHandler || s(t, x.params.swipeHandler)) {
                        var a = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            n = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                        if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && a <= x.params.iOSEdgeSwipeThreshold)) {
                            if (T = !0, C = !1, S = !0, z = void 0, B = void 0, x.touches.startX = a, x.touches.startY = n, E = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (P = !1), "touchstart" !== t.type) {
                                var r = !0;
                                e(t.target).is(L) && (r = !1), document.activeElement && e(document.activeElement).is(L) && document.activeElement.blur(), r && t.preventDefault()
                            }
                            x.emit("onTouchStart", x, t)
                        }
                    }
                }, x.onTouchMove = function(t) {
                    if (t.originalEvent && (t = t.originalEvent), !H || "mousemove" !== t.type) {
                        if (t.preventedByNestedSwiper) return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                        if (x.params.onlyExternal) return x.allowClick = !1, void(T && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, E = Date.now()));
                        if (H && x.params.touchReleaseOnEdges && !x.params.loop)
                            if (x.isHorizontal()) {
                                if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return
                            } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
                        if (H && document.activeElement && t.target === document.activeElement && e(t.target).is(L)) return C = !0, void(x.allowClick = !1);
                        if (S && x.emit("onTouchMove", x, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                            if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === z) {
                                var a;
                                x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? z = !1 : (a = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, z = x.isHorizontal() ? a > x.params.touchAngle : 90 - a > x.params.touchAngle)
                            }
                            if (z && x.emit("onTouchMoveOpposite", x, t), void 0 === B && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (B = !0)), T)
                                if (z) T = !1;
                                else if (B) {
                                x.allowClick = !1, x.emit("onSliderMove", x, t), t.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(), C || (n.loop && x.fixLoop(), M = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), I = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)), C = !0;
                                var r = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                r *= x.params.touchRatio, x.rtl && (r = -r), x.swipeDirection = r > 0 ? "prev" : "next", k = r + M;
                                var i = !0;
                                if (r > 0 && k > x.minTranslate() ? (i = !1, x.params.resistance && (k = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + M + r, x.params.resistanceRatio))) : r < 0 && k < x.maxTranslate() && (i = !1, x.params.resistance && (k = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - M - r, x.params.resistanceRatio))), i && (t.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && k < M && (k = M), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && k > M && (k = M), x.params.threshold > 0) {
                                    if (!(Math.abs(r) > x.params.threshold || P)) return void(k = M);
                                    if (!P) return P = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, k = M, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                }
                                x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === N.length && N.push({
                                    position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                    time: E
                                }), N.push({
                                    position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), x.updateProgress(k), x.setWrapperTranslate(k))
                            }
                        }
                    }
                }, x.onTouchEnd = function(t) {
                    if (t.originalEvent && (t = t.originalEvent), S && x.emit("onTouchEnd", x, t), S = !1, T) {
                        x.params.grabCursor && C && T && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                        var a = Date.now(),
                            n = a - E;
                        if (x.allowClick && (x.updateClickedSlide(t), x.emit("onTap", x, t), n < 300 && a - A > 300 && (D && clearTimeout(D), D = setTimeout(function() {
                                x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, t))
                            }, 300)), n < 300 && a - A < 300 && (D && clearTimeout(D), x.emit("onDoubleTap", x, t))), A = Date.now(), setTimeout(function() {
                                x && (x.allowClick = !0)
                            }, 0), T && C && x.swipeDirection && 0 !== x.touches.diff && k !== M) {
                            T = C = !1;
                            var r;
                            if (r = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -k, x.params.freeMode) {
                                if (r < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                                if (r > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                                if (x.params.freeModeMomentum) {
                                    if (N.length > 1) {
                                        var i = N.pop(),
                                            s = N.pop(),
                                            o = i.position - s.position,
                                            l = i.time - s.time;
                                        x.velocity = o / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (x.velocity = 0)
                                    } else x.velocity = 0;
                                    x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, N.length = 0;
                                    var p = 1e3 * x.params.freeModeMomentumRatio,
                                        u = x.velocity * p,
                                        d = x.translate + u;
                                    x.rtl && (d = -d);
                                    var c, f = !1,
                                        h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                    if (d < x.maxTranslate()) x.params.freeModeMomentumBounce ? (d + x.maxTranslate() < -h && (d = x.maxTranslate() - h), c = x.maxTranslate(), f = !0, I = !0) : d = x.maxTranslate();
                                    else if (d > x.minTranslate()) x.params.freeModeMomentumBounce ? (d - x.minTranslate() > h && (d = x.minTranslate() + h), c = x.minTranslate(), f = !0, I = !0) : d = x.minTranslate();
                                    else if (x.params.freeModeSticky) {
                                        var m, g = 0;
                                        for (g = 0; g < x.snapGrid.length; g += 1)
                                            if (x.snapGrid[g] > -d) {
                                                m = g;
                                                break
                                            }
                                        d = Math.abs(x.snapGrid[m] - d) < Math.abs(x.snapGrid[m - 1] - d) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1], x.rtl || (d = -d)
                                    }
                                    if (0 !== x.velocity) p = x.rtl ? Math.abs((-d - x.translate) / x.velocity) : Math.abs((d - x.translate) / x.velocity);
                                    else if (x.params.freeModeSticky) return void x.slideReset();
                                    x.params.freeModeMomentumBounce && f ? (x.updateProgress(c), x.setWrapperTransition(p), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function() {
                                        x && I && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(c), x.wrapper.transitionEnd(function() {
                                            x && x.onTransitionEnd()
                                        }))
                                    })) : x.velocity ? (x.updateProgress(d), x.setWrapperTransition(p), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                                        x && x.onTransitionEnd()
                                    }))) : x.updateProgress(d), x.updateActiveIndex()
                                }(!x.params.freeModeMomentum || n >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex())
                            } else {
                                var v, y = 0,
                                    w = x.slidesSizesGrid[0];
                                for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup) void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? r >= x.slidesGrid[v] && r < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : r >= x.slidesGrid[v] && (y = v, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                                var b = (r - x.slidesGrid[y]) / w;
                                if (n > x.params.longSwipesMs) {
                                    if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                                    "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)), "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                                } else {
                                    if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                                    "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(y)
                                }
                            }
                        } else T = C = !1
                    }
                }, x._slideTo = function(e, t) {
                    return x.slideTo(e, t, !0, !0)
                }, x.slideTo = function(e, t, a, n) {
                    void 0 === a && (a = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                    var r = -x.snapGrid[x.snapIndex];
                    if (x.params.autoplay && x.autoplaying && (n || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), x.updateProgress(r), x.params.normalizeSlideIndex)
                        for (var i = 0; i < x.slidesGrid.length; i++) - Math.floor(100 * r) >= Math.floor(100 * x.slidesGrid[i]) && (e = i);
                    return !(!x.params.allowSwipeToNext && r < x.translate && r < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && r > x.translate && r > x.maxTranslate() && (x.activeIndex || 0) !== e) && (void 0 === t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -r === x.translate || !x.rtl && r === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(r), !1) : (x.updateClasses(), x.onTransitionStart(a), 0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(r), x.setWrapperTransition(0), x.onTransitionEnd(a)) : (x.setWrapperTranslate(r), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                        x && x.onTransitionEnd(a)
                    }))), !0)))
                }, x.onTransitionStart = function(e) {
                    void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
                }, x.onTransitionEnd = function(e) {
                    x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), x.params.hashnav && x.hashnav && x.hashnav.setHash()
                }, x.slideNext = function(e, t, a) {
                    if (x.params.loop) {
                        if (x.animating) return !1;
                        x.fixLoop();
                        x.container[0].clientLeft;
                        return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a)
                    }
                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, a)
                }, x._slideNext = function(e) {
                    return x.slideNext(!0, e, !0)
                }, x.slidePrev = function(e, t, a) {
                    if (x.params.loop) {
                        if (x.animating) return !1;
                        x.fixLoop();
                        x.container[0].clientLeft;
                        return x.slideTo(x.activeIndex - 1, t, e, a)
                    }
                    return x.slideTo(x.activeIndex - 1, t, e, a)
                }, x._slidePrev = function(e) {
                    return x.slidePrev(!0, e, !0)
                }, x.slideReset = function(e, t, a) {
                    return x.slideTo(x.activeIndex, t, e)
                }, x.disableTouchControl = function() {
                    return x.params.onlyExternal = !0, !0
                }, x.enableTouchControl = function() {
                    return x.params.onlyExternal = !1, !0
                }, x.setWrapperTransition = function(e, t) {
                    x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, t), x.emit("onSetTransition", x, e)
                }, x.setWrapperTranslate = function(e, t, a) {
                    var n = 0,
                        i = 0;
                    x.isHorizontal() ? n = x.rtl ? -e : e : i = e, x.params.roundLengths && (n = r(n), i = r(i)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + n + "px, " + i + "px, 0px)") : x.wrapper.transform("translate(" + n + "px, " + i + "px)")), x.translate = x.isHorizontal() ? n : i;
                    var s = x.maxTranslate() - x.minTranslate();
                    (0 === s ? 0 : (e - x.minTranslate()) / s) !== x.progress && x.updateProgress(e), t && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, a), x.emit("onSetTranslate", x, x.translate)
                }, x.getTranslate = function(e, t) {
                    var a, n, r, i;
                    return void 0 === t && (t = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), i = new window.WebKitCSSMatrix("none" === n ? "" : n)) : a = (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? i.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (n = window.WebKitCSSMatrix ? i.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), x.rtl && n && (n = -n), n || 0)
                }, x.getWrapperTranslate = function(e) {
                    return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e)
                }, x.observers = [], x.initObservers = function() {
                    if (x.params.observeParents)
                        for (var e = x.container.parents(), t = 0; t < e.length; t++) o(e[t]);
                    o(x.container[0], {
                        childList: !1
                    }), o(x.wrapper[0], {
                        attributes: !1
                    })
                }, x.disconnectObservers = function() {
                    for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                    x.observers = []
                }, x.createLoop = function() {
                    x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                    var t = x.wrapper.children("." + x.params.slideClass);
                    "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > t.length && (x.loopedSlides = t.length);
                    var a, n = [],
                        r = [];
                    for (t.each(function(a, i) {
                            var s = e(this);
                            a < x.loopedSlides && r.push(i), a < t.length && a >= t.length - x.loopedSlides && n.push(i), s.attr("data-swiper-slide-index", a)
                        }), a = 0; a < r.length; a++) x.wrapper.append(e(r[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                    for (a = n.length - 1; a >= 0; a--) x.wrapper.prepend(e(n[a].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
                }, x.destroyLoop = function() {
                    x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index")
                }, x.reLoop = function(e) {
                    var t = x.activeIndex - x.loopedSlides;
                    x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(t + x.loopedSlides, 0, !1)
                }, x.fixLoop = function() {
                    var e;
                    x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
                }, x.appendSlide = function(e) {
                    if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length)
                        for (var t = 0; t < e.length; t++) e[t] && x.wrapper.append(e[t]);
                    else x.wrapper.append(e);
                    x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0)
                }, x.prependSlide = function(e) {
                    x.params.loop && x.destroyLoop();
                    var t = x.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var a = 0; a < e.length; a++) e[a] && x.wrapper.prepend(e[a]);
                        t = x.activeIndex + e.length
                    } else x.wrapper.prepend(e);
                    x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(t, 0, !1)
                }, x.removeSlide = function(e) {
                    x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                    var t, a = x.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var n = 0; n < e.length; n++) t = e[n], x.slides[t] && x.slides.eq(t).remove(), t < a && a--;
                        a = Math.max(a, 0)
                    } else t = e, x.slides[t] && x.slides.eq(t).remove(), t < a && a--, a = Math.max(a, 0);
                    x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(a + x.loopedSlides, 0, !1) : x.slideTo(a, 0, !1)
                }, x.removeAllSlides = function() {
                    for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
                    x.removeSlide(e)
                }, x.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < x.slides.length; e++) {
                                var t = x.slides.eq(e),
                                    a = -t[0].swiperSlideOffset;
                                x.params.virtualTranslate || (a -= x.translate);
                                var n = 0;
                                x.isHorizontal() || (n = a, a = 0);
                                var r = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: r
                                }).transform("translate3d(" + a + "px, " + n + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                x.slides.transitionEnd(function() {
                                    if (!t && x) {
                                        t = !0, x.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) x.wrapper.trigger(e[a])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var t = 0; t < x.slides.length; t++) {
                                var a = x.slides.eq(t),
                                    n = a[0].progress;
                                x.params.flip.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                                var r = -180 * n,
                                    i = 0,
                                    s = -a[0].swiperSlideOffset,
                                    o = 0;
                                if (x.isHorizontal() ? x.rtl && (r = -r) : (o = s, s = 0, i = -r, r = 0), a[0].style.zIndex = -Math.abs(Math.round(n)) + x.slides.length, x.params.flip.slideShadows) {
                                    var l = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                        p = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                    0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), a.append(l)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), l.length && (l[0].style.opacity = Math.max(-n, 0)), p.length && (p[0].style.opacity = Math.max(n, 0))
                                }
                                a.transform("translate3d(" + s + "px, " + o + "px, 0px) rotateX(" + i + "deg) rotateY(" + r + "deg)")
                            }
                        },
                        setTransition: function(t) {
                            if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), x.params.virtualTranslate && 0 !== t) {
                                var a = !1;
                                x.slides.eq(x.activeIndex).transitionEnd(function() {
                                    if (!a && x && e(this).hasClass(x.params.slideActiveClass)) {
                                        a = !0, x.animating = !1;
                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) x.wrapper.trigger(t[n])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var t, a = 0;
                            x.params.cube.shadow && (x.isHorizontal() ? (0 === (t = x.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(t)), t.css({
                                height: x.width + "px"
                            })) : 0 === (t = x.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), x.container.append(t)));
                            for (var n = 0; n < x.slides.length; n++) {
                                var r = x.slides.eq(n),
                                    i = 90 * n,
                                    s = Math.floor(i / 360);
                                x.rtl && (i = -i, s = Math.floor(-i / 360));
                                var o = Math.max(Math.min(r[0].progress, 1), -1),
                                    l = 0,
                                    p = 0,
                                    u = 0;
                                n % 4 == 0 ? (l = 4 * -s * x.size, u = 0) : (n - 1) % 4 == 0 ? (l = 0, u = 4 * -s * x.size) : (n - 2) % 4 == 0 ? (l = x.size + 4 * s * x.size, u = x.size) : (n - 3) % 4 == 0 && (l = -x.size, u = 3 * x.size + 4 * x.size * s), x.rtl && (l = -l), x.isHorizontal() || (p = l, l = 0);
                                var d = "rotateX(" + (x.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (x.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + u + "px)";
                                if (o <= 1 && o > -1 && (a = 90 * n + 90 * o, x.rtl && (a = 90 * -n - 90 * o)), r.transform(d), x.params.cube.slideShadows) {
                                    var c = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                        f = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), r.append(c)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(f)), c.length && (c[0].style.opacity = Math.max(-o, 0)), f.length && (f[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (x.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + x.size / 2 + "px"
                                }), x.params.cube.shadow)
                                if (x.isHorizontal()) t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                        m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        g = x.params.cube.shadowScale,
                                        v = x.params.cube.shadowScale / m,
                                        y = x.params.cube.shadowOffset;
                                    t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                            x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : a) + "deg) rotateY(" + (x.isHorizontal() ? -a : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var t = x.translate, a = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, n = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, r = x.params.coverflow.depth, i = 0, s = x.slides.length; i < s; i++) {
                                var o = x.slides.eq(i),
                                    l = x.slidesSizesGrid[i],
                                    p = (a - o[0].swiperSlideOffset - l / 2) / l * x.params.coverflow.modifier,
                                    u = x.isHorizontal() ? n * p : 0,
                                    d = x.isHorizontal() ? 0 : n * p,
                                    c = -r * Math.abs(p),
                                    f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * p,
                                    h = x.isHorizontal() ? x.params.coverflow.stretch * p : 0;
                                Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0), Math.abs(d) < .001 && (d = 0);
                                var m = "translate3d(" + h + "px," + f + "px," + c + "px)  rotateX(" + d + "deg) rotateY(" + u + "deg)";
                                if (o.transform(m), o[0].style.zIndex = 1 - Math.abs(Math.round(p)), x.params.coverflow.slideShadows) {
                                    var g = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                        v = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === g.length && (g = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), o.append(g)), 0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(v)), g.length && (g[0].style.opacity = p > 0 ? p : 0), v.length && (v[0].style.opacity = -p > 0 ? -p : 0)
                                }
                            }
                            x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = a + "px 50%")
                        },
                        setTransition: function(e) {
                            x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, x.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(t, a) {
                        if (void 0 !== t && (void 0 === a && (a = !0), 0 !== x.slides.length)) {
                            var n = x.slides.eq(t),
                                r = n.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                            !n.hasClass(x.params.lazyLoadingClass) || n.hasClass(x.params.lazyStatusLoadedClass) || n.hasClass(x.params.lazyStatusLoadingClass) || (r = r.add(n[0])), 0 !== r.length && r.each(function() {
                                var t = e(this);
                                t.addClass(x.params.lazyStatusLoadingClass);
                                var r = t.attr("data-background"),
                                    i = t.attr("data-src"),
                                    s = t.attr("data-srcset"),
                                    o = t.attr("data-sizes");
                                x.loadImage(t[0], i || r, s, o, !1, function() {
                                    if (void 0 !== x && null !== x && x) {
                                        if (r ? (t.css("background-image", 'url("' + r + '")'), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), i && (t.attr("src", i), t.removeAttr("data-src"))), t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), n.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && a) {
                                            var e = n.attr("data-swiper-slide-index");
                                            if (n.hasClass(x.params.slideDuplicateClass)) {
                                                var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                                x.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var p = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                x.lazy.loadImageInSlide(p.index(), !1)
                                            }
                                        }
                                        x.emit("onLazyImageReady", x, n[0], t[0])
                                    }
                                }), x.emit("onLazyImageLoad", x, n[0], t[0])
                            })
                        }
                    },
                    load: function() {
                        var t, a = x.params.slidesPerView;
                        if ("auto" === a && (a = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                            x.lazy.loadImageInSlide(e(this).index())
                        });
                        else if (a > 1)
                            for (t = x.activeIndex; t < x.activeIndex + a; t++) x.slides[t] && x.lazy.loadImageInSlide(t);
                        else x.lazy.loadImageInSlide(x.activeIndex);
                        if (x.params.lazyLoadingInPrevNext)
                            if (a > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                                var n = x.params.lazyLoadingInPrevNextAmount,
                                    r = a,
                                    i = Math.min(x.activeIndex + r + Math.max(n, r), x.slides.length),
                                    s = Math.max(x.activeIndex - Math.max(r, n), 0);
                                for (t = x.activeIndex + a; t < i; t++) x.slides[t] && x.lazy.loadImageInSlide(t);
                                for (t = s; t < x.activeIndex; t++) x.slides[t] && x.lazy.loadImageInSlide(t)
                            } else {
                                var o = x.wrapper.children("." + x.params.slideNextClass);
                                o.length > 0 && x.lazy.loadImageInSlide(o.index());
                                var l = x.wrapper.children("." + x.params.slidePrevClass);
                                l.length > 0 && x.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function() {
                        x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                    },
                    onTransitionEnd: function() {
                        x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                    }
                }, x.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var t = x.scrollbar,
                            a = (x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                            n = -x.minTranslate() * t.moveDivider,
                            r = -x.maxTranslate() * t.moveDivider;
                        a < n ? a = n : a > r && (a = r), a = -a / t.moveDivider, x.updateProgress(a), x.setWrapperTranslate(a, !0)
                    },
                    dragStart: function(e) {
                        var t = x.scrollbar;
                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), x.params.scrollbarHide && t.track.css("opacity", 1), x.wrapper.transition(100), t.drag.transition(100), x.emit("onScrollbarDragStart", x)
                    },
                    dragMove: function(e) {
                        var t = x.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x))
                    },
                    dragEnd: function(e) {
                        var t = x.scrollbar;
                        t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                            t.track.css("opacity", 0), t.track.transition(400)
                        }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                    },
                    draggableEvents: !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop,
                    enableDraggable: function() {
                        var t = x.scrollbar,
                            a = x.support.touch ? t.track : document;
                        e(t.track).on(t.draggableEvents.start, t.dragStart), e(a).on(t.draggableEvents.move, t.dragMove), e(a).on(t.draggableEvents.end, t.dragEnd)
                    },
                    disableDraggable: function() {
                        var t = x.scrollbar,
                            a = x.support.touch ? t.track : document;
                        e(t.track).off(t.draggableEvents.start, t.dragStart), e(a).off(t.draggableEvents.move, t.dragMove), e(a).off(t.draggableEvents.end, t.dragEnd)
                    },
                    set: function() {
                        if (x.params.scrollbar) {
                            var t = x.scrollbar;
                            t.track = e(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = x.size / x.virtualSize, t.moveDivider = t.divider * (t.trackSize / x.size), t.dragSize = t.trackSize * t.divider, x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", x.params.scrollbarHide && (t.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (x.params.scrollbar) {
                            var e, t = x.scrollbar,
                                a = (x.translate, t.dragSize);
                            e = (t.trackSize - t.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e) > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e) : e < 0 ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"), x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                t.track[0].style.opacity = 0, t.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        x.params.scrollbar && x.scrollbar.drag.transition(e)
                    }
                }, x.controller = {
                    LinearSpline: function(e, t) {
                        var a = function() {
                            var e, t, a;
                            return function(n, r) {
                                for (t = -1, e = n.length; e - t > 1;) n[a = e + t >> 1] <= r ? t = a : e = a;
                                return e
                            }
                        }();
                        this.x = e, this.y = t, this.lastIndex = e.length - 1;
                        var n, r;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (r = a(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                        }
                    },
                    getInterpolateFunction: function(e) {
                        x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, a) {
                        function n(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), i = -x.controller.spline.interpolate(-e)), i && "container" !== x.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), i = (e - x.minTranslate()) * r + t.minTranslate()), x.params.controlInverse && (i = t.maxTranslate() - i), t.updateProgress(i), t.setWrapperTranslate(i, !1, x), t.updateActiveIndex()
                        }
                        var r, i, s = x.params.control;
                        if (Array.isArray(s))
                            for (var o = 0; o < s.length; o++) s[o] !== a && s[o] instanceof t && n(s[o]);
                        else s instanceof t && a !== s && n(s)
                    },
                    setTransition: function(e, a) {
                        function n(t) {
                            t.setWrapperTransition(e, x), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                i && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                            }))
                        }
                        var r, i = x.params.control;
                        if (Array.isArray(i))
                            for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && n(i[r]);
                        else i instanceof t && a !== i && n(i)
                    }
                }, x.hashnav = {
                    onHashCange: function(e, t) {
                        var a = document.location.hash.replace("#", "");
                        a !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + a + '"]').index())
                    },
                    attachEvents: function(t) {
                        var a = t ? "off" : "on";
                        e(window)[a]("hashchange", x.hashnav.onHashCange)
                    },
                    setHash: function() {
                        if (x.hashnav.initialized && x.params.hashnav)
                            if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                            else {
                                var e = x.slides.eq(x.activeIndex),
                                    t = e.attr("data-hash") || e.attr("data-history");
                                document.location.hash = t || ""
                            }
                    },
                    init: function() {
                        if (x.params.hashnav && !x.params.history) {
                            x.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var t = 0, a = x.slides.length; t < a; t++) {
                                    var n = x.slides.eq(t);
                                    if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(x.params.slideDuplicateClass)) {
                                        var r = n.index();
                                        x.slideTo(r, 0, x.params.runCallbacksOnInit, !0)
                                    }
                                }
                            x.params.hashnavWatchState && x.hashnav.attachEvents()
                        }
                    },
                    destroy: function() {
                        x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                    }
                }, x.history = {
                    init: function() {
                        if (x.params.history) {
                            if (!window.history || !window.history.pushState) return x.params.history = !1, void(x.params.hashnav = !0);
                            x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function() {
                        x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var e = window.location.pathname.slice(1).split("/"),
                            t = e.length;
                        return {
                            key: e[t - 2],
                            value: e[t - 1]
                        }
                    },
                    setHistory: function(e, t) {
                        if (x.history.initialized && x.params.history) {
                            var a = x.slides.eq(t),
                                n = this.slugify(a.attr("data-history"));
                            window.location.pathname.includes(e) || (n = e + "/" + n), x.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                        }
                    },
                    slugify: function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(e, t, a) {
                        if (t)
                            for (var n = 0, r = x.slides.length; n < r; n++) {
                                var i = x.slides.eq(n);
                                if (this.slugify(i.attr("data-history")) === t && !i.hasClass(x.params.slideDuplicateClass)) {
                                    var s = i.index();
                                    x.slideTo(s, e, a)
                                }
                            } else x.slideTo(0, e, a)
                    }
                }, x.disableKeyboardControl = function() {
                    x.params.keyboardControl = !1, e(document).off("keydown", l)
                }, x.enableKeyboardControl = function() {
                    x.params.keyboardControl = !0, e(document).on("keydown", l)
                }, x.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var e = "onwheel" in document;
                    if (!e) {
                        var t = document.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function() {
                    if (!x.mousewheel.event) return !1;
                    var t = x.container;
                    return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)), t.off(x.mousewheel.event, u), x.params.mousewheelControl = !1, !0
                }, x.enableMousewheelControl = function() {
                    if (!x.mousewheel.event) return !1;
                    var t = x.container;
                    return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)), t.on(x.mousewheel.event, u), x.params.mousewheelControl = !0, !0
                }, x.parallax = {
                    setTranslate: function() {
                        x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            d(this, x.progress)
                        }), x.slides.each(function() {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                d(this, Math.min(Math.max(t[0].progress, -1), 1))
                            })
                        })
                    },
                    setTransition: function(t) {
                        void 0 === t && (t = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = e(this),
                                n = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (n = 0), a.transition(n)
                        })
                    }
                }, x.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: x.params.zoomMax
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    getDistanceBetweenTouches: function(e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX,
                            a = e.targetTouches[0].pageY,
                            n = e.targetTouches[1].pageX,
                            r = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - a, 2))
                    },
                    onGestureStart: function(t) {
                        var a = x.zoom;
                        if (!x.support.gestures) {
                            if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                            a.gesture.scaleStart = a.getDistanceBetweenTouches(t)
                        }
                        a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = e(this), 0 === a.gesture.slide.length && (a.gesture.slide = x.slides.eq(x.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + x.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== a.gesture.imageWrap.length) ? (a.gesture.image.transition(0), a.isScaling = !0) : a.gesture.image = void 0
                    },
                    onGestureChange: function(e) {
                        var t = x.zoom;
                        if (!x.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                        }
                        t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                    },
                    onGestureEnd: function(e) {
                        var t = x.zoom;
                        !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin), t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                    },
                    onTouchStart: function(e, t) {
                        var a = e.zoom;
                        a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === e.device.os && t.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, a.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                    },
                    onTouchMove: function(e) {
                        var t = x.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                            t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), x.rtl && (t.image.startX = -t.image.startX), x.rtl && (t.image.startY = -t.image.startY));
                            var a = t.image.width * t.scale,
                                n = t.image.height * t.scale;
                            if (!(a < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - a / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                    if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                    if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                }
                                e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function(e, t) {
                        var a = e.zoom;
                        if (a.gesture.image && 0 !== a.gesture.image.length) {
                            if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void(a.image.isMoved = !1);
                            a.image.isTouched = !1, a.image.isMoved = !1;
                            var n = 300,
                                r = 300,
                                i = a.velocity.x * n,
                                s = a.image.currentX + i,
                                o = a.velocity.y * r,
                                l = a.image.currentY + o;
                            0 !== a.velocity.x && (n = Math.abs((s - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (r = Math.abs((l - a.image.currentY) / a.velocity.y));
                            var p = Math.max(n, r);
                            a.image.currentX = s, a.image.currentY = l;
                            var u = a.image.width * a.scale,
                                d = a.image.height * a.scale;
                            a.image.minX = Math.min(a.gesture.slideWidth / 2 - u / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - d / 2, 0), a.image.maxY = -a.image.minY, a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), a.gesture.imageWrap.transition(p).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function(e) {
                        var t = e.zoom;
                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                    },
                    toggleZoom: function(t, a) {
                        var n = t.zoom;
                        if (n.gesture.slide || (n.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), n.gesture.image = n.gesture.slide.find("img, svg, canvas"), n.gesture.imageWrap = n.gesture.image.parent("." + t.params.zoomContainerClass)), n.gesture.image && 0 !== n.gesture.image.length) {
                            var r, i, s, o, l, p, u, d, c, f, h, m, g, v, y, w;
                            void 0 === n.image.touchesStart.x && a ? (r = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, i = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (r = n.image.touchesStart.x, i = n.image.touchesStart.y), n.scale && 1 !== n.scale ? (n.scale = n.currentScale = 1, n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), n.gesture.slide = void 0) : (n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, a ? (y = n.gesture.slide[0].offsetWidth, w = n.gesture.slide[0].offsetHeight, s = n.gesture.slide.offset().left + y / 2 - r, o = n.gesture.slide.offset().top + w / 2 - i, u = n.gesture.image[0].offsetWidth, d = n.gesture.image[0].offsetHeight, c = u * n.scale, f = d * n.scale, g = -(h = Math.min(y / 2 - c / 2, 0)), v = -(m = Math.min(w / 2 - f / 2, 0)), l = s * n.scale, p = o * n.scale, l < h && (l = h), l > g && (l = g), p < m && (p = m), p > v && (p = v)) : (l = 0, p = 0), n.gesture.imageWrap.transition(300).transform("translate3d(" + l + "px, " + p + "px,0)"), n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                        }
                    },
                    attachEvents: function(t) {
                        var a = t ? "off" : "on";
                        if (x.params.zoom) {
                            x.slides;
                            var n = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            x.support.gestures ? (x.slides[a]("gesturestart", x.zoom.onGestureStart, n), x.slides[a]("gesturechange", x.zoom.onGestureChange, n), x.slides[a]("gestureend", x.zoom.onGestureEnd, n)) : "touchstart" === x.touchEvents.start && (x.slides[a](x.touchEvents.start, x.zoom.onGestureStart, n), x.slides[a](x.touchEvents.move, x.zoom.onGestureChange, n), x.slides[a](x.touchEvents.end, x.zoom.onGestureEnd, n)), x[a]("touchStart", x.zoom.onTouchStart), x.slides.each(function(t, n) {
                                e(n).find("." + x.params.zoomContainerClass).length > 0 && e(n)[a](x.touchEvents.move, x.zoom.onTouchMove)
                            }), x[a]("touchEnd", x.zoom.onTouchEnd), x[a]("transitionEnd", x.zoom.onTransitionEnd), x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                        }
                    },
                    init: function() {
                        x.zoom.attachEvents()
                    },
                    destroy: function() {
                        x.zoom.attachEvents(!0)
                    }
                }, x._plugins = [];
                for (var O in x.plugins) {
                    var j = x.plugins[O](x, x.params[O]);
                    j && x._plugins.push(j)
                }
                return x.callPlugins = function(e) {
                    for (var t = 0; t < x._plugins.length; t++) e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, x.emitterEventListeners = {}, x.emit = function(e) {
                    x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (x.emitterEventListeners[e])
                        for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, x.on = function(e, t) {
                    return e = c(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(t), x
                }, x.off = function(e, t) {
                    var a;
                    if (e = c(e), void 0 === t) return x.emitterEventListeners[e] = [], x;
                    if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                        for (a = 0; a < x.emitterEventListeners[e].length; a++) x.emitterEventListeners[e][a] === t && x.emitterEventListeners[e].splice(a, 1);
                        return x
                    }
                }, x.once = function(e, t) {
                    e = c(e);
                    var a = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, a)
                    };
                    return x.on(e, a), x
                }, x.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(t) {
                        13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
                    },
                    liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = x.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init: function() {
                        x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), e(x.container).append(x.a11y.liveRegion)
                    },
                    initPagination: function() {
                        x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                            var t = e(this);
                            x.a11y.makeFocusable(t), x.a11y.addRole(t, "button"), x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy: function() {
                        x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                    }
                }, x.init = function() {
                    x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x)
                }, x.cleanupStyles = function() {
                    x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
                }, x.destroy = function(e, t) {
                    x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), t && x.cleanupStyles(), x.disconnectObservers(), x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), !1 !== e && (x = null)
                }, x.init(), x
            }
        };
        t.prototype = {
            isSafari: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var e = document.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
                }()
            },
            device: function() {
                var e = window.navigator.userAgent,
                    t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    a = e.match(/(iPad).*OS\s([\d_]+)/),
                    n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    r = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {
                    ios: a || r || n,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++)
                        if (t[a] in e) return !0
                }(),
                observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in window
            },
            plugins: {}
        };
        for (var a = ["jQuery", "Zepto", "Dom7"], n = 0; n < a.length; n++) window[a[n]] && function(e) {
            e.fn.swiper = function(a) {
                var n;
                return e(this).each(function() {
                    var e = new t(this, a);
                    n || (n = e)
                }), n
            }
        }(window[a[n]]);
        var r;
        (r = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
            function t(i) {
                if (i.target === this)
                    for (e.call(this, i), a = 0; a < n.length; a++) r.off(n[a], t)
            }
            var a, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
            if (e)
                for (a = 0; a < n.length; a++) r.on(n[a], t);
            return this
        }), "transform" in r.fn || (r.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var a = this[t].style;
                a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
            }
            return this
        }), "transition" in r.fn || (r.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var a = this[t].style;
                a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
            }
            return this
        }), "outerWidth" in r.fn || (r.fn.outerWidth = function(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = t
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    }), $(function() {
        var e = $(".hero"),
            t = $(".header");
        $(window).width() >= 992 && $(window).scroll(function() {
            $(this).scrollTop() > e.outerHeight() ? t.addClass("is-active") : t.removeClass("is-active")
        })
    }), $(function() {
        $(".agenda .swiper-container").swiper({
            speed: 500,
            touchRatio: .5,
            slidesPerView: 4,
            prevButton: ".agenda-list__nav--prev",
            nextButton: ".agenda-list__nav--next",
            breakpoints: {
                544: {
                    loop: !0,
                    slidesPerView: 1.6,
                    centeredSlides: !0
                },
                768: {
                    loop: !0,
                    slidesPerView: 1.8,
                    centeredSlides: !0
                },
                992: {
                    loop: !0,
                    slidesPerView: 2,
                    centeredSlides: !0
                },
                1200: {
                    slidesPerView: 3
                },
                3e3: {
                    slidesPerView: 4
                }
            }
        })
    }), $(function() {
        $.ajax({
            url: "https://api.instagram.com/v1/users/self/media/recent?count=20&access_token=3225360069.1677ed0.baa5236f6e8d403db6abbd7f4da36712",
            type: "GET",
            async: !0,
            dataType: "jsonp",
            success: function(e) {
                var t = "";
                $.each(e.data, function(e, a) {
                    var n = this.link,
                        r = this.caption ? this.caption.text : "Veja no Instagram",
                        i = this.images.thumbnail.url.replace("150x150", "640x640");
                    t += '<a class="photos-list__item swiper-slide" href="' + n + '" target="_blank">', t += '<div class="photos-list__item-info">', t += '<div class="photos-list__item-text">' + truncate(r, 80) + "</div>", t += "</div>", t += '<img class="photos-list__item-image" src="' + i + '" alt="image">', t += "</a>"
                }), $(".photos .swiper-wrapper").html(t);
                $(".photos .swiper-container").swiper({
                    speed: 500,
                    touchRatio: .5,
                    slidesPerView: 4,
                    spaceBetween: 0,
                    slidesPerColumn: 2,
                    breakpoints: {
                        544: {
                            loop: !0,
                            slidesPerColumn: 1,
                            slidesPerView: 1.4,
                            centeredSlides: !0
                        },
                        768: {
                            loop: !0,
                            slidesPerColumn: 1,
                            slidesPerView: 1.5,
                            centeredSlides: !0
                        },
                        992: {
                            loop: !0,
                            slidesPerView: 2,
                            slidesPerColumn: 1,
                            centeredSlides: !0
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1500: {
                            slidesPerView: 5
                        },
                        3e3: {
                            slidesPerView: 7
                        }
                    }
                })
            }
        })
    });
