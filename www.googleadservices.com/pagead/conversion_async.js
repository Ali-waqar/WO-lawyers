(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function v(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    v("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    v("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ja(this, function(b) {
                return b
            })
        }
    }, "es6");
    var ka = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    v("Object.assign", function(a) {
        return a || ka
    }, "es6");

    function la(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    v("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = la(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    v("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    v("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ja(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    v("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    v("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    v("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== la(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var x = this || self;

    function ma(a) {
        return a
    };

    function z(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function na(a, b) {
        this.i = a === oa && b || "";
        this.g = pa
    }
    var pa = {},
        oa = {};
    var qa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ra = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var va;

    function wa(a, b) {
        this.g = b === xa ? a : ""
    }
    wa.prototype.toString = function() {
        return this.g + ""
    };

    function ya(a) {
        return a instanceof wa && a.constructor === wa ? a.g : "type_error:TrustedResourceUrl"
    }
    var za = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        xa = {};

    function Aa(a) {
        if (void 0 === va) {
            var b = null;
            var c = x.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (d) {
                    x.console && x.console.error(d.message)
                }
                va = b
            } else va = b
        }
        a = (b = va) ? b.createScriptURL(a) : a;
        return new wa(a, xa)
    }

    function Ba(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function Ca(a) {
        var b;
        a: {
            if (b = x.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function Da(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Ea(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Fa(a) {
        Fa[" "](a);
        return a
    }
    Fa[" "] = function() {};
    var Ga = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ha(a) {
        var b = a.match(Ga);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Ia(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Ja = /#|$/;

    function A(a, b) {
        var c = a.search(Ja),
            d = Ia(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var Ka = /[?&]($|#)/;

    function C(a, b, c) {
        for (var d = a.search(Ja), e = 0, f, g = []; 0 <= (f = Ia(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(Ka, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function La() {
        if (!l.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            l.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Ma(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Oa = Ea(function() {
            return ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Na) || 1E-4 > Math.random()
        }),
        Pa = Ea(function() {
            return Ca("MSIE")
        });

    function Na(a) {
        return Ca(a)
    }

    function D(a) {
        return /^true$/.test(a)
    }

    function Qa(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Ra = z("0.20"),
        Sa = z("0.002"),
        Ta = z("0.00"),
        Ua = z("0.00"),
        Va = z("0.00"),
        Wa = D("true"),
        Xa = D("true"),
        Ya = D("true"),
        Za = D("true");
    var $a = null;

    function ab() {
        if (null === $a) {
            $a = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    $a = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return $a
    }

    function E(a, b, c) {
        var d = F;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = ab()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!Pa() && !Oa() && (e = Math.random(), e < b)) {
                    e = La();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function G(a) {
        var b = F;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function bb() {
        var a = F,
            b = [];
        Ma(a.i, function(c, d) {
            b.push(d)
        });
        Ma(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var cb = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18,
            J: 19,
            T: 20
        },
        F = null;

    function db() {
        return !!F && ("466465926" == G(20) || "466465925" == G(20))
    }

    function eb() {
        return !!F && "592230571" == G(16)
    };

    function fb(a) {
        var b = void 0 === b ? x : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };

    function J(a) {
        var b = "u";
        if (a.u && a.hasOwnProperty(b)) return a.u;
        b = new a;
        return a.u = b
    };
    var gb = {
        O: 0,
        G: 1,
        P: 2,
        I: 3,
        H: 4
    };

    function hb() {
        this.g = {}
    }

    function ib(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function jb(a) {
        var b = J(hb);
        var c = void 0 === c ? x : c;
        c = c.performance;
        ib(b, a, c && c.now ? c.now() : null)
    }

    function kb() {
        function a() {
            return ib(b, 0, fb("loadEventStart") - fb("navigationStart"))
        }
        var b = J(hb);
        0 != fb("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function lb(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, ib(a, 4, b.cbt), ib(a, 3, b.cst))
    }

    function mb() {
        var a = J(hb);
        return r(Object, "values").call(Object, gb).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var nb = D("false");
    var ob = {};

    function K(a) {
        ob.TAGGING = ob.TAGGING || [];
        ob.TAGGING[a] = !0
    };

    function pb(a) {
        return "function" === typeof a
    }
    var qb = Array.isArray;

    function rb(a, b) {
        if (a && qb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function sb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function tb() {
        return new Date(Date.now())
    };
    var L = window,
        M = document;

    function ub(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    }
    var vb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        wb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function xb(a, b, c) {
        b && sb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function yb(a, b, c) {
        var d = M.createElement("script");
        xb(d, void 0, vb);
        d.type = "text/javascript";
        d.async = !0;
        a = Aa(a);
        d.src = ya(a);
        Da(d);
        ub(d, b);
        c ? c.appendChild(d) : (b = M.getElementsByTagName("script")[0] || M.body || M.head, b.parentNode.insertBefore(d, b))
    }

    function zb(a, b, c, d, e, f) {
        f = void 0 === f ? !0 : f;
        var g = e;
        e = !1;
        g || (g = M.createElement("iframe"), e = !0);
        xb(g, c, wb);
        d && sb(d, function(h, k) {
            g.dataset[h] = k
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        e && (c = M.body && M.body.lastChild || M.body || M.head, c.parentNode.insertBefore(g, c));
        ub(g, b);
        void 0 !== a && (g.src = a)
    };

    function Ab() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !(aa = b.allowedFeatures(), r(aa, "includes")).call(aa, "attribution-reporting"))
    };

    function Bb(a, b, c) {
        a = Cb(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Cb(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var Db = {},
        Eb = null;

    function Fb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Eb)
            for (Eb = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Db[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Eb[h] && (Eb[h] = g)
                }
            }
        a = Db[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Gb(a, b, c, d) {
        var e = A(c, "fmt");
        if (d) {
            var f = A(c, "random"),
                g = A(c, "label") || "";
            if (!f) return !1;
            f = Fb(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Bb(a, f, d)) return !1
        }
        e && 4 != e && (c = C(c, "rfmt", e));
        c = C(c, "fmt", 4);
        yb(c, function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        }, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Hb = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);

    function Ib() {
        var a = {};
        this.g = function() {
            var b = Hb.g,
                c = Hb.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[Hb.g] = b
        }
    };
    var N = [];

    function O() {
        var a = {};
        var b = L.google_tag_data;
        L.google_tag_data = void 0 === b ? a : b;
        a = L.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: Jb,
            update: Kb,
            addListener: Lb,
            notifyListeners: Mb,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Jb(a, b, c, d, e, f) {
        var g = O();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" === typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && L.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, Nb(a),
                        Mb(), K(2))
                }, f)
            }
        }
    }

    function Kb(a, b) {
        var c = O();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ob(c, a),
                e = c.entries;
            e = e[a] = e[a] || {};
            e.update = "granted" === b;
            b = Ob(c, a);
            e.quiet ? (e.quiet = !1, Nb(a)) : b !== d && Nb(a)
        }
    }

    function Lb(a, b) {
        N.push({
            s: a,
            C: b
        })
    }

    function Nb(a) {
        for (var b = 0; b < N.length; ++b) {
            var c = N[b];
            qb(c.s) && -1 !== c.s.indexOf(a) && (c.B = !0)
        }
    }

    function Mb(a, b) {
        for (var c = 0; c < N.length; ++c) {
            var d = N[c];
            if (d.B) {
                d.B = !1;
                try {
                    d.C({
                        U: a,
                        V: b
                    })
                } catch (e) {}
            }
        }
    }

    function Ob(a, b) {
        a = a.entries[b] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function Pb(a) {
        var b = O();
        b.accessedAny = !0;
        return Ob(b, a)
    }

    function Qb(a) {
        var b = O();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Rb() {
        if (!J(Ib).g()) return !1;
        var a = O();
        a.accessedAny = !0;
        return a.active
    }

    function Sb(a, b) {
        O().addListener(a, b)
    }

    function Tb(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!Qb(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            Sb(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function Ub(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === Pb(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && Sb(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function Vb(a, b, c, d) {
        if (Wb(d)) {
            d = [];
            b = String(b || Xb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function Yb(a, b, c, d) {
        var e = Xb(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = Xb();
        return e != a || void 0 != c && 0 <= Vb(b, a, !1, d).indexOf(c)
    }

    function $b(a, b, c) {
        function d(p, q, t) {
            if (null == t) return delete g[q], p;
            g[q] = t;
            return p + "; " + q + "=" + t
        }

        function e(p, q) {
            if (null == q) return delete g[q], p;
            g[q] = !0;
            return p + "; " + q
        }
        if (Wb(c.j)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = ac(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.W);
            f = d(f, "samesite", c.X);
            c.Y &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = bc();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!cc(m, c.path) && Yb(n, a, b, c.j)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), cc(h, c.path) || Yb(f, a, b, c.j)
        }
    }

    function dc(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        $b(a, b, c)
    }

    function ac(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var ec = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        fc = /(^|\.)doubleclick\.net$/i;

    function cc(a, b) {
        return fc.test(window.document.location.hostname) || "/" === b && ec.test(a)
    }

    function Xb() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function bc() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        fc.test(b) || ec.test(b) || a.push("none");
        return a
    }

    function Wb(a) {
        if (!J(Ib).g() || !a || !Rb()) return !0;
        if (!Qb(a)) return !1;
        a = Pb(a);
        return null == a ? !0 : !!a
    };

    function gc(a, b) {
        var c, d = Number(null != a.A ? a.A : void 0);
        0 !== d && (c = new Date((b || tb().getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c,
            j: void 0
        }
    };

    function hc(a) {
        var b = [],
            c = M.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                v: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function P(a, b) {
        a = hc(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f)
            }
        }
        return c
    };
    var ic = /:[0-9]+$/;

    function jc(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function kc(a, b) {
        var c = "query",
            d = lc(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(ic, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || K(1);
                a = "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length -
                    1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = jc(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function lc(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };
    var mc = {};
    var nc = /^\w+$/,
        oc = /^[\w-]+$/,
        pc = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Q() {
        if (!J(Ib).g() || !Rb()) return !0;
        var a = Pb("ad_storage");
        return null == a ? !0 : !!a
    }

    function qc(a, b) {
        Qb("ad_storage") ? Q() ? a() : Ub(a) : b ? K(3) : Tb(function() {
            qc(a, !0)
        })
    }

    function rc(a) {
        return R(a).map(function(b) {
            return b.h
        })
    }

    function R(a) {
        var b = [];
        if ("null" === L.origin || !M.cookie) return b;
        a = Vb(a, M.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                l: c.l
            }, d++) {
            var e = sc(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.l = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = rb(b, function(k) {
                    return function(m) {
                        return m.h === k.l
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = tc(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.l,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return uc(b)
    }

    function tc(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function vc(a) {
        return a && "string" == typeof a && a.match(nc) ? a : "_gcl"
    }

    function wc() {
        var a = L.location.href,
            b = M.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || K(1), c = "/" + c);
        a = b.hostname.replace(ic, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = kc(d, "gclid");
        c = kc(d, "gclsrc");
        a = kc(d, "wbraid");
        var e = kc(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || jc(d, "gclid"), c = c || jc(d, "gclsrc"), a = a || jc(d, "wbraid"));
        return xc(b, c, e, a)
    }

    function xc(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && oc.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(oc)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function yc() {
        var a = {},
            b = wc();
        qc(function() {
            zc(b, !1, a)
        })
    }

    function zc(a, b, c, d, e) {
        function f(p) {
            p = ["GCL", n, p];
            0 < e.length && p.push(e.join("."));
            return p.join(".")
        }

        function g(p, q) {
            if (p = Ac(p, h)) dc(p, q, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = vc(c.prefix);
        d = d || tb().getTime();
        var k = gc(c, d);
        k.j = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == mc.enable_gbraid_cookie_write ? 0 : mc.enable_gbraid_cookie_write) && !m && a.gb) {
            a = a.gb[0];
            d = Ac("gb", h);
            c = !1;
            if (!b)
                for (b =
                    R(d), d = 0; d < b.length; d++) b[d].h === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }

    function Ac(a, b) {
        a = pc[a];
        if (void 0 !== a) return b + a
    }

    function Bc(a) {
        return 0 !== Cc(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function sc(a) {
        a = Cc(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function Cc(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !oc.test(a[2]) ? [] : a
    }

    function uc(a) {
        return a.filter(function(b) {
            return oc.test(b.h)
        })
    }

    function Dc() {
        var a = ["aw"],
            b = {};
        if ("null" !== L.origin) {
            for (var c = vc(b.prefix), d = {}, e = 0; e < a.length; e++) pc[a[e]] && (d[a[e]] = pc[a[e]]);
            qc(function() {
                sb(d, function(f, g) {
                    g = Vb(c + g, M.cookie, void 0, "ad_storage");
                    g.sort(function(n, p) {
                        return Bc(p) - Bc(n)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = Bc(h);
                        var k = 0 !== Cc(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== Cc(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        zc(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function Ec(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Q()) return e;
        var f = R(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = gc(c, f), c.j = "ad_storage", dc(a, b, c));
        return e
    }

    function Fc(a, b) {
        b = vc(b);
        a = Ac(a, b);
        if (!a) return 0;
        a = R(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function Gc(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Hc = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Ic = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Jc = /^\d+\.fls\.doubleclick\.net$/,
        Kc = /;gac=([^;?]+)/,
        Lc = /;gacgb=([^;?]+)/,
        Mc = /;gclaw=([^;?]+)/,
        Nc = /;gclgb=([^;?]+)/;

    function Oc(a, b, c) {
        if (Jc.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(Hc) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function Pc(a, b, c, d) {
        var e = Q() ? P("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = Ec("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            F: g ? f.join(";") : "",
            D: Oc(a, e, Lc)
        }
    }

    function Qc(a, b, c, d) {
        if (Jc.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(Ic)) return [{
                h: a[1]
            }]
        } else return R((b || "_gcl") + c);
        return []
    }

    function Rc(a, b) {
        return Qc(a, b, "_aw", Mc).map(function(c) {
            return c.h
        }).join(".")
    }

    function Sc(a, b) {
        return Qc(a, b, "_gb", Nc).map(function(c) {
            return c.h
        }).join(".")
    }

    function Tc(a, b) {
        var c = "" !== Sc(a, b) || 0 < r(Object, "keys").call(Object, Q() ? P("_gac_gb", !0) : {}).length;
        a = "" !== Rc(a, b) || "" !== Oc(a, Q() ? P() : {}, Kc);
        return c && a
    }

    function Uc(a) {
        0 !== rc("_gcl_aw").length || a && 0 !== rc(a + "_aw").length || (yc(), Dc())
    }

    function Vc(a, b, c) {
        a = Ec((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function Wc() {
        if (pb(L.__uspapi)) {
            var a = "";
            try {
                L.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Xc = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Yc(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Zc(a) {
        a = a.google_tag_data;
        if (null != a && a.uach) {
            a = a.uach;
            var b = r(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function $c(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function ad() {
        var a = window;
        if ($c(a)) {
            var b = Yc(a);
            b.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(Xc).then(function(c) {
                null != b.uach || (b.uach = c);
                return c
            }), b.uach_promise = a)
        }
    };
    var bd = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        cd = /^[a-zA-Z0-9_]+$/,
        dd = !1,
        ed = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function fd(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function S(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function gd(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function T(a, b) {
        b = S(b);
        return "" != b && (a = S(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function hd(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function id(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = hd(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = hd(d);
                (e = hd(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function U(a) {
        return "number" != typeof a && "string" != typeof a ? "" : S(a.toString())
    }

    function jd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = kd(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.A = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (ld(b) && b.m) var f = void 0 === b.o;
        else Jc.test(a.location.host) ? f = !(Mc.test(a.location.href) || Kc.test(a.location.href)) : (f = Math.max(Fc("aw", d), Gc(Q() ? P() : {})), f = Math.max(Fc("gb", d), Gc(Q() ? P("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.o) return b.o;
            c = Sc(a, d || void 0);
            f = b.google_conversion_label;
            var g = Vc(f, e, b.m);
            c = T("gclgb", c) + (g ? T("mcov", g) : "");
            if (d) return b.o = c;
            d = Pc(a, f, e, b.m);
            a = d.D;
            d = d.F;
            c += (a ? T("gacgb", a) : "") + (d ? T("gacmcov", d) : "");
            return b.o = c
        }
        if (d) return b = Rc(a, d), T("gclaw", b);
        (b = Rc(a)) && (c = T("gclaw",
            b));
        b = Oc(a, Q() ? P() : {}, Kc);
        return c + (b ? T("gac", b) : "")
    }

    function md(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function nd(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 6:
                    k = "www.google.com/";m = "ccm/conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 5:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "ccm/conversion/";
                break;
            case 4:
                    k = (k = d.google_gtm_experiments) && k.apcm ? "www.google.com" : k && k.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";m = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    k = "googleads.g.doubleclick.net/",
                m = "td/rul/"
        }
        Wa && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, S(d.google_conversion_id), h, "?random=", S(d.google_conversion_time)].join("");
        h = T("cv", d.google_conversion_js_version);
        k = T("fst", d.google_conversion_first_time);
        m = T("num", d.google_conversion_snippets);
        var n = T("fmt", d.google_conversion_format),
            p = d.google_remarketing_only ? T("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 !== q && 1 !== q ? "" : T("tfcd", q);
        var t = d.google_tag_for_under_age_of_consent;
        t = null == t || 0 !== t && 1 !== t ? "" : T("tfua", t);
        var X = d.google_allow_ad_personalization_signals;
        X = !1 === X ? T("npa", 1) : !0 === X ? T("npa", 0) : "";
        var sa = d.google_restricted_data_processing;
        sa = Ya ? !0 === sa ? T("rdp",
            1) : !1 === sa ? T("rdp", 0) : "" : "";
        var xd = T("value", d.google_conversion_value),
            yd = T("currency_code", d.google_conversion_currency),
            zd = T("label", d.google_conversion_label),
            Ad = T("oid", d.google_conversion_order_id),
            Bd = T("bg", d.google_conversion_color);
        a: {
            var y = d.google_conversion_language;
            if (null != y) {
                y = y.toString();
                if (2 == y.length) {
                    y = T("hl", y);
                    break a
                }
                if (5 == y.length) {
                    y = T("hl", y.substring(0, 2)) + T("gl", y.substring(3, 5));
                    break a
                }
            }
            y = ""
        }
        var Cd = T("guid", "ON"),
            Dd = !d.google_conversion_domain && "GooglemKTybQhCsO" in x &&
            "function" == typeof x.GooglemKTybQhCsO ? T("resp", "GooglemKTybQhCsO") : "",
            Ed = T("disvt", d.google_disable_viewthrough),
            Fd = T("eid", bb().join());
        var Y = d.google_conversion_date;
        var w = [];
        if (a) {
            var H = a.screen;
            H && (w.push(T("u_h", H.height)), w.push(T("u_w", H.width)), w.push(T("u_ah", H.availHeight)), w.push(T("u_aw", H.availWidth)), w.push(T("u_cd", H.colorDepth)));
            a.history && w.push(T("u_his", a.history.length))
        }
        Y && "function" == typeof Y.getTimezoneOffset && w.push(T("u_tz", -Y.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled &&
            w.push(T("u_java", b.javaEnabled())), b.plugins && w.push(T("u_nplug", b.plugins.length)), b.mimeTypes && w.push(T("u_nmime", b.mimeTypes.length)));
        Y = w.join("");
        w = T("gtm", d.google_gtm);
        b = b && b.sendBeacon ? T("sendb", "1") : "";
        H = od();
        var Hd = T("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            ta = id(d.google_custom_params);
        f = id(f);
        f = ta.concat(0 < ta.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        ta = jd(c, d);
        var Zb = d.google_conversion_page_url,
            Id = d.google_conversion_referrer_url,
            ua = "";
        if (c) {
            if (a.top == a) var u = 0;
            else {
                var I = a.location.ancestorOrigins;
                if (I) u = I[I.length - 1] == a.location.origin ? 1 : 2;
                else {
                    I = a.top;
                    try {
                        var B;
                        if (B = !!I && null != I.location.href) c: {
                            try {
                                Fa(I.foo);
                                B = !0;
                                break c
                            } catch (Jd) {}
                            B = !1
                        }
                        u = B
                    } catch (Jd) {
                        u = !1
                    }
                    u = u ? 1 : 2
                }
            }
            B = Zb ? Zb : 1 == u ? a.top.location.href : a.location.href;
            ua += T("frm", u);
            ua += T("url", gd(B));
            ua += T("ref", gd(Id || c.referrer))
        }
        a = [h, k, m, n, p, q, t, X, sa, xd, yd, zd, Ad, Bd, y, Cd, Dd, Ed, Fd, Y, w, b, H, Hd, f, ta, ua, md(c), pd(d.google_additional_params), pd(d.google_remarketing_only ? {} : d.google_additional_conversion_params),
            "&hn=" + S("www.googleadservices.com"), qd(a), rd(a)
        ].join("");
        c = ab();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [T("mid", d.google_conversion_merchant_id), T("fcntr", d.google_basket_feed_country), T("flng", d.google_basket_feed_language), T("dscnt", d.google_basket_discount), T("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (u = d.google_conversion_items) {
                    B = [];
                    h = 0;
                    for (k = u.length; h < k; h++) m = u[h], n = [], m && (n.push(U(m.value)), n.push(U(m.quantity)),
                        n.push(U(m.item_id)), n.push(U(m.start_date)), n.push(U(m.end_date)), B.push("(" + n.join("*") + ")"));
                    u = 0 < B.length ? "&item=" + B.join("") : ""
                } else u = "";
            else u = "";
            c = [a, c, u].join("");
            a = 4E3 < c.length ? [a, T("item", "elngth")].join("") : c
        }
        g += a;
        1 === e || 6 === e ? g += [T("gcp", 1), T("sscte", 1), T("ct_cookie_present", 1)].join("") : 3 == e && (g += T("gcp", 1), g += T("ct_cookie_present", 1));
        Xa && (e = Wc(), void 0 !== e && (g += T("us_privacy", e || "error")));
        ld(d) && (g = d.m ? g + T("gbcov", 1) : g + T("gbcov", 0));
        return g
    }

    function sd(a) {
        if (!nb) {
            var b = document;
            var c = "IFRAME";
            "application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
            c = b.createElement(c);
            c.style.display = "none";
            c.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(c)
        }
    }

    function td() {
        return new Image
    }

    function ud(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? h = g : h = function() {};
        d += T("async", "1");
        e = c.google_gtm_url_processor;
        pb(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else try {
                k = Gb(a, b, d, h)
            } catch (m) {
                k = !1
            }
            f = !k
        }
        f && (a = td, g && (a = e), a = a(), a.src = d, a.onload = h)
    }

    function vd(a, b) {
        F && "376635471" == G(2) && ("complete" === b.readyState ? sd(b) : a.addEventListener ? a.addEventListener("load", function() {
            sd(b)
        }) : a.attachEvent("onload", function() {
            sd(b)
        }))
    }

    function wd(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function Gd(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < ed.length; e++) c(ed[e]);
        c("onload_callback");
        return d
    }

    function Kd(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = r(Object, "keys").call(Object, d).filter(function(k) {
                    return bd.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return r(Object, "values").call(Object, b)
    }

    function od() {
        var a = "";
        eb() && (a = mb().map(function(b) {
            return b.join("-")
        }).join("_"));
        return T("li", a)
    }

    function qd(a) {
        if (!Za || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!pb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : T("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function rd(a) {
        function b(d, e) {
            null != e && c.push(d + "=" + e)
        }
        if (!db()) return "";
        a = Zc(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        null != a.wow64 && c.push("&uaw=" + (a.wow64 ? "1" : "0"));
        a.fullVersionList && c.push("&uafvl=" + a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function pd(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += T(c, a[c]));
        return b
    }

    function ld(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function kd(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && cd.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function Ld(a, b) {
        if (!b.google_remarketing_only && Md(a, b)) {
            a = b.google_additional_conversion_params || {};
            var c = b.google_gtm_experiments;
            a.capi = c && c.apcm ? "2" : "1";
            b.google_additional_conversion_params = a
        }
    }

    function Md(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        a: {
            if (!dd && !Ab()) {
                if (b = r("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "AwfiJ+ITEOHGsyR7mKDk6NmR0nb7ZXBkH2A13Wc0XRmgWRH7aF5Xr0a1qB2MvWAZUh9p601rOqFPDpTjfg0ovQ0AAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2Njk3NjYzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a.head) {
                    var c = Qa("META");
                    a.head.appendChild(c);
                    c.httpEquiv = "origin-trial";
                    c.content = b;
                    a = c
                } else a = null;
                if (!a) {
                    a = !1;
                    break a
                }
                dd = !0
            }
            a = Ab()
        }
        return a
    }

    function Nd(a, b, c, d, e) {
        a = nd(a, b, c, d, 7, e);
        b = "AW-" + d.google_conversion_id;
        (d = d.google_conversion_label) && (b = b + "/" + d);
        a: {
            d = b;b = void 0;
            try {
                b = M.querySelector('iframe[data-tagging-id="' + d + '"]')
            } catch (f) {}
            if (b) {
                if ((c = Number(b.dataset.loadTime)) && 6E4 > tb().getTime() - c) {
                    K(9);
                    break a
                }
            } else try {
                if (50 <= M.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    K(10);
                    break a
                }
            } catch (f) {}
            zb(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: d,
                loadTime: tb().getTime()
            }, b)
        }
    };
    var Od = !1,
        Pd = document.currentScript && document.currentScript.src || "";

    function Qd(a, b, c) {
        try {
            if (!Od && (Od = !0, !c.google_gtm)) {
                var d = void 0,
                    e = void 0,
                    f = A(a.location.href, "gtm_debug");
                Rd(f) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                !d && 0 <= qa(b.cookie.split("; "), "__TAG_ASSISTANT=x") && (d = 4);
                d || (e = b.documentElement.getAttribute("data-tag-assistant-present"), Rd(e) && (d = 5));
                if (d) {
                    var g = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var h = new na(oa, "https://www.googletagmanager.com/debug/bootstrap");
                        var k = Aa(h instanceof na && h.constructor === na && h.g === pa ? h.i : "type_error:Const");
                        c = {
                            id: g,
                            src: "LEGACY",
                            cond: d
                        };
                        var m = za.exec(ya(k).toString()),
                            n = m[3] || "";
                        var p = Aa(m[1] + Ba("?", m[2] || "", c) + Ba("#", n));
                        var q = Qa("SCRIPT", b);
                        q.src = ya(p);
                        Da(q);
                        var t = b.getElementsByTagName("script")[0];
                        t && t.parentNode && t.parentNode.insertBefore(q, t)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: g,
                            scriptSource: Pd
                        }
                    })
                }
            }
        } catch (X) {}
    }

    function Rd(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function Sd(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ? a.onload_callback = fd(b, a.onload_callback) : a.onload_callback = function() {}
    }

    function Td(a, b, c, d) {
        Qd(a, c, d);
        eb() && (jb(2), d.google_gtm && lb(J(hb), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (wd(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !nb && F && E(["376635470", "376635471"], Ra, 2);
                d.google_remarketing_only && !d.google_conversion_domain && F && E(["759238990", "759238991"], Va, 13);
                !d.google_remarketing_only || d.google_conversion_domain || F && ("759248991" == G(14) || "759248990" == G(14)) || F && E(["759248990", "759248991"], Ua, 14);
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || Uc(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) Ud(a, b, c, d);
                else {
                    var f = d.google_gtm_experiments && d.google_gtm_experiments.ccmpp;
                    if (d.google_conversion_domain || d.google_transport_url && "https://pagead2.googlesyndication.com/" !== d.google_transport_url) f = !1;
                    var g = !1;
                    r("www.googleadservices.com", "endsWith").call("www.googleadservices.com",
                        "google.com") && (g = !0);
                    var h = d.google_additional_params;
                    h && h.dg && (g = "e" === h.dg);
                    h = function(k, m, n) {
                        m = void 0 === m ? !0 : m;
                        n = void 0 === n ? !0 : n;
                        ud(a, c, d, nd(a, b, c, d, k), m, n)
                    };
                    d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
                    d.google_remarketing_only ? h(2) : g ? (Sd(d, f ? 3 : 2), Ld(c, d), h(1), h(3), f && h(6, !0, !1)) : (Sd(d, f ? 2 : 1), Ld(c, d), h(0), f && h(5, !0, !1), ld(d) && Tc(c, kd(d)) && (d.m = !0, h(0, !1)));
                    d.google_gtm_experiments &&
                        d.google_gtm_experiments.fledge && Nd(a, b, c, d)
                }
                d.google_remarketing_only && d.google_enable_display_cookie_match && vd(a, c);
                e = !0
            }
        } catch (k) {}
        return e
    }

    function Ud(a, b, c, d) {
        var e = Kd(d.google_gtag_event_data.items);
        Sd(d, e.length);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
            ud(a, c, d, nd(a, b, c, d, 2, g), !0, !0);
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && Nd(a, b, c, d, g);
            d.google_conversion_time = d.google_conversion_time + 1
        }
    };
    F = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in cb) a[b++] = cb[c];
        a = void 0 === a ? [] : a;
        this.i = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    E(["466465925", "466465926"], Ta, 20);
    db() && ad();
    F && E(["592230570", "592230571"], Sa, 16);
    eb() && (jb(1), kb());

    function Vd(a, b, c) {
        function d(m, n) {
            var p = new Image;
            p.onload = m;
            p.src = n
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Cb(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ia(g, 0, "rmt_tld", g.search(Ja)) && 0 <= Ia(g, 0, "ipr", g.search(Ja)) && !h.match(Ga)[6] && (h += Ha(g), c[1] = C(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = A(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? zb(h, e, void 0, void 0, k, !1) : d(e,
                        h);
                    break;
                case 4:
                    Gb(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = C(h, "sendb", 2);
                    h = C(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var V = ["GooglemKTybQhCsO"],
        W = x;
    V[0] in W || "undefined" == typeof W.execScript || W.execScript("var " + V[0]);
    for (var Z; V.length && (Z = V.shift());) V.length || void 0 === Vd ? W[Z] && W[Z] !== Object.prototype[Z] ? W = W[Z] : W = W[Z] = {} : W[Z] = Vd;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = Gd(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        J(Ib).i(e);
        return Td(b, c, d, a)
    };
}).call(this);