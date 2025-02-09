/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var Z_ = Object.create;
    var sn = Object.defineProperty;
    var J_ = Object.getOwnPropertyDescriptor;
    var eb = Object.getOwnPropertyNames;
    var tb = Object.getPrototypeOf,
        rb = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Fe = (e, t) => {
            for (var r in t) sn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ns = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of eb(t)) !rb.call(e, i) && i !== r && sn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = J_(t, i)) || n.enumerable
                });
            return e
        };
    var le = (e, t, r) => (r = e != null ? Z_(tb(e)) : {}, Ns(t || !e || !e.__esModule ? sn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        nt = e => Ns(sn({}, "__esModule", {
            value: !0
        }), e);
    var Ni = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, b) {
                var A = new E.Bare;
                return A.init(f, b)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(b) {
                    return "-" + b.toLowerCase()
                })
            }

            function n(f) {
                var b = parseInt(f.slice(1), 16),
                    A = b >> 16 & 255,
                    P = b >> 8 & 255,
                    w = 255 & b;
                return [A, P, w]
            }

            function i(f, b, A) {
                return "#" + (1 << 24 | f << 16 | b << 8 | A).toString(16).slice(1)
            }

            function o() {}

            function a(f, b) {
                d("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b)
            }

            function u(f, b, A) {
                d("Units do not match [" + f + "]: " + b + ", " + A)
            }

            function s(f, b, A) {
                if (b !== void 0 && (A = b), f === void 0) return A;
                var P = A;
                return De.test(f) || !Be.test(f) ? P = parseInt(f, 10) : Be.test(f) && (P = 1e3 * parseFloat(f)), 0 > P && (P = 0), P === P ? P : A
            }

            function d(f) {
                oe.debug && window && window.console.warn(f)
            }

            function y(f) {
                for (var b = -1, A = f ? f.length : 0, P = []; ++b < A;) {
                    var w = f[b];
                    w && P.push(w)
                }
                return P
            }
            var h = function(f, b, A) {
                    function P(ae) {
                        return typeof ae == "object"
                    }

                    function w(ae) {
                        return typeof ae == "function"
                    }

                    function N() {}

                    function Z(ae, ve) {
                        function z() {
                            var Ce = new se;
                            return w(Ce.init) && Ce.init.apply(Ce, arguments), Ce
                        }

                        function se() {}
                        ve === A && (ve = ae, ae = Object), z.Bare = se;
                        var ue, be = N[f] = ae[f],
                            rt = se[f] = z[f] = new N;
                        return rt.constructor = z, z.mixin = function(Ce) {
                            return se[f] = z[f] = Z(z, Ce)[f], z
                        }, z.open = function(Ce) {
                            if (ue = {}, w(Ce) ? ue = Ce.call(z, rt, be, z, ae) : P(Ce) && (ue = Ce), P(ue))
                                for (var _r in ue) b.call(ue, _r) && (rt[_r] = ue[_r]);
                            return w(rt.init) || (rt.init = ae), z
                        }, z.open(ve)
                    }
                    return Z
                }("prototype", {}.hasOwnProperty),
                v = {
                    ease: ["ease", function(f, b, A, P) {
                        var w = (f /= P) * f,
                            N = w * f;
                        return b + A * (-2.75 * N * w + 11 * w * w + -15.5 * N + 8 * w + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, b, A, P) {
                        var w = (f /= P) * f,
                            N = w * f;
                        return b + A * (-1 * N * w + 3 * w * w + -3 * N + 2 * w)
                    }],
                    "ease-out": ["ease-out", function(f, b, A, P) {
                        var w = (f /= P) * f,
                            N = w * f;
                        return b + A * (.3 * N * w + -1.6 * w * w + 2.2 * N + -1.8 * w + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, b, A, P) {
                        var w = (f /= P) * f,
                            N = w * f;
                        return b + A * (2 * N * w + -5 * w * w + 2 * N + 2 * w)
                    }],
                    linear: ["linear", function(f, b, A, P) {
                        return A * f / P + b
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, b, A, P) {
                        return A * (f /= P) * f + b
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, b, A, P) {
                        return -A * (f /= P) * (f - 2) + b
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, b, A, P) {
                        return (f /= P / 2) < 1 ? A / 2 * f * f + b : -A / 2 * (--f * (f - 2) - 1) + b
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, b, A, P) {
                        return A * (f /= P) * f * f + b
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, b, A, P) {
                        return A * ((f = f / P - 1) * f * f + 1) + b
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, b, A, P) {
                        return (f /= P / 2) < 1 ? A / 2 * f * f * f + b : A / 2 * ((f -= 2) * f * f + 2) + b
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, b, A, P) {
                        return A * (f /= P) * f * f * f + b
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, b, A, P) {
                        return -A * ((f = f / P - 1) * f * f * f - 1) + b
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, b, A, P) {
                        return (f /= P / 2) < 1 ? A / 2 * f * f * f * f + b : -A / 2 * ((f -= 2) * f * f * f - 2) + b
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, b, A, P) {
                        return A * (f /= P) * f * f * f * f + b
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, b, A, P) {
                        return A * ((f = f / P - 1) * f * f * f * f + 1) + b
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, b, A, P) {
                        return (f /= P / 2) < 1 ? A / 2 * f * f * f * f * f + b : A / 2 * ((f -= 2) * f * f * f * f + 2) + b
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, b, A, P) {
                        return -A * Math.cos(f / P * (Math.PI / 2)) + A + b
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, b, A, P) {
                        return A * Math.sin(f / P * (Math.PI / 2)) + b
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, b, A, P) {
                        return -A / 2 * (Math.cos(Math.PI * f / P) - 1) + b
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, b, A, P) {
                        return f === 0 ? b : A * Math.pow(2, 10 * (f / P - 1)) + b
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, b, A, P) {
                        return f === P ? b + A : A * (-Math.pow(2, -10 * f / P) + 1) + b
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, b, A, P) {
                        return f === 0 ? b : f === P ? b + A : (f /= P / 2) < 1 ? A / 2 * Math.pow(2, 10 * (f - 1)) + b : A / 2 * (-Math.pow(2, -10 * --f) + 2) + b
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, b, A, P) {
                        return -A * (Math.sqrt(1 - (f /= P) * f) - 1) + b
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, b, A, P) {
                        return A * Math.sqrt(1 - (f = f / P - 1) * f) + b
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, b, A, P) {
                        return (f /= P / 2) < 1 ? -A / 2 * (Math.sqrt(1 - f * f) - 1) + b : A / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + b
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, b, A, P, w) {
                        return w === void 0 && (w = 1.70158), A * (f /= P) * f * ((w + 1) * f - w) + b
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, b, A, P, w) {
                        return w === void 0 && (w = 1.70158), A * ((f = f / P - 1) * f * ((w + 1) * f + w) + 1) + b
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, b, A, P, w) {
                        return w === void 0 && (w = 1.70158), (f /= P / 2) < 1 ? A / 2 * f * f * (((w *= 1.525) + 1) * f - w) + b : A / 2 * ((f -= 2) * f * (((w *= 1.525) + 1) * f + w) + 2) + b
                    }]
                },
                m = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                O = document,
                T = window,
                R = "bkwld-tram",
                I = /[\-\.0-9]/g,
                L = /[A-Z]/,
                C = "number",
                q = /^(rgb|#)/,
                M = /(em|cm|mm|in|pt|pc|px)$/,
                D = /(em|cm|mm|in|pt|pc|px|%)$/,
                B = /(deg|rad|turn)$/,
                K = "unitless",
                $ = /(all|none) 0s ease 0s/,
                J = /^(width|height)$/,
                ee = " ",
                G = O.createElement("a"),
                x = ["Webkit", "Moz", "O", "ms"],
                F = ["-webkit-", "-moz-", "-o-", "-ms-"],
                H = function(f) {
                    if (f in G.style) return {
                        dom: f,
                        css: f
                    };
                    var b, A, P = "",
                        w = f.split("-");
                    for (b = 0; b < w.length; b++) P += w[b].charAt(0).toUpperCase() + w[b].slice(1);
                    for (b = 0; b < x.length; b++)
                        if (A = x[b] + P, A in G.style) return {
                            dom: A,
                            css: F[b] + f
                        }
                },
                V = t.support = {
                    bind: Function.prototype.bind,
                    transform: H("transform"),
                    transition: H("transition"),
                    backface: H("backface-visibility"),
                    timing: H("transition-timing-function")
                };
            if (V.transition) {
                var te = V.timing.dom;
                if (G.style[te] = v["ease-in-back"][0], !G.style[te])
                    for (var re in m) v[re][0] = m[re]
            }
            var X = t.frame = function() {
                    var f = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                    return f && V.bind ? f.bind(T) : function(b) {
                        T.setTimeout(b, 16)
                    }
                }(),
                Y = t.now = function() {
                    var f = T.performance,
                        b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return b && V.bind ? b.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                p = h(function(f) {
                    function b(ne, ce) {
                        var Ee = y(("" + ne).split(ee)),
                            pe = Ee[0];
                        ce = ce || {};
                        var Pe = j[pe];
                        if (!Pe) return d("Unsupported property: " + pe);
                        if (!ce.weak || !this.props[pe]) {
                            var je = Pe[0],
                                Me = this.props[pe];
                            return Me || (Me = this.props[pe] = new je.Bare), Me.init(this.$el, Ee, Pe, ce), Me
                        }
                    }

                    function A(ne, ce, Ee) {
                        if (ne) {
                            var pe = typeof ne;
                            if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && ce) return this.timer = new ie({
                                duration: ne,
                                context: this,
                                complete: N
                            }), void(this.active = !0);
                            if (pe == "string" && ce) {
                                switch (ne) {
                                    case "hide":
                                        z.call(this);
                                        break;
                                    case "stop":
                                        Z.call(this);
                                        break;
                                    case "redraw":
                                        se.call(this);
                                        break;
                                    default:
                                        b.call(this, ne, Ee && Ee[1])
                                }
                                return N.call(this)
                            }
                            if (pe == "function") return void ne.call(this, this);
                            if (pe == "object") {
                                var Pe = 0;
                                rt.call(this, ne, function(Ie, Q_) {
                                    Ie.span > Pe && (Pe = Ie.span), Ie.stop(), Ie.animate(Q_)
                                }, function(Ie) {
                                    "wait" in Ie && (Pe = s(Ie.wait, 0))
                                }), be.call(this), Pe > 0 && (this.timer = new ie({
                                    duration: Pe,
                                    context: this
                                }), this.active = !0, ce && (this.timer.complete = N));
                                var je = this,
                                    Me = !1,
                                    an = {};
                                X(function() {
                                    rt.call(je, ne, function(Ie) {
                                        Ie.active && (Me = !0, an[Ie.name] = Ie.nextStyle)
                                    }), Me && je.$el.css(an)
                                })
                            }
                        }
                    }

                    function P(ne) {
                        ne = s(ne, 0), this.active ? this.queue.push({
                            options: ne
                        }) : (this.timer = new ie({
                            duration: ne,
                            context: this,
                            complete: N
                        }), this.active = !0)
                    }

                    function w(ne) {
                        return this.active ? (this.queue.push({
                            options: ne,
                            args: arguments
                        }), void(this.timer.complete = N)) : d("No active transition timer. Use start() or wait() before then().")
                    }

                    function N() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ne = this.queue.shift();
                            A.call(this, ne.options, !0, ne.args)
                        }
                    }

                    function Z(ne) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ce;
                        typeof ne == "string" ? (ce = {}, ce[ne] = 1) : ce = typeof ne == "object" && ne != null ? ne : this.props, rt.call(this, ce, Ce), be.call(this)
                    }

                    function ae(ne) {
                        Z.call(this, ne), rt.call(this, ne, _r, Y_)
                    }

                    function ve(ne) {
                        typeof ne != "string" && (ne = "block"), this.el.style.display = ne
                    }

                    function z() {
                        Z.call(this), this.el.style.display = "none"
                    }

                    function se() {
                        this.el.offsetHeight
                    }

                    function ue() {
                        Z.call(this), e.removeData(this.el, R), this.$el = this.el = null
                    }

                    function be() {
                        var ne, ce, Ee = [];
                        this.upstream && Ee.push(this.upstream);
                        for (ne in this.props) ce = this.props[ne], ce.active && Ee.push(ce.string);
                        Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[V.transition.dom] = Ee)
                    }

                    function rt(ne, ce, Ee) {
                        var pe, Pe, je, Me, an = ce !== Ce,
                            Ie = {};
                        for (pe in ne) je = ne[pe], pe in de ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = je) : (L.test(pe) && (pe = r(pe)), pe in j ? Ie[pe] = je : (Me || (Me = {}), Me[pe] = je));
                        for (pe in Ie) {
                            if (je = Ie[pe], Pe = this.props[pe], !Pe) {
                                if (!an) continue;
                                Pe = b.call(this, pe)
                            }
                            ce.call(this, Pe, je)
                        }
                        Ee && Me && Ee.call(this, Me)
                    }

                    function Ce(ne) {
                        ne.stop()
                    }

                    function _r(ne, ce) {
                        ne.set(ce)
                    }

                    function Y_(ne) {
                        this.$el.css(ne)
                    }

                    function He(ne, ce) {
                        f[ne] = function() {
                            return this.children ? $_.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
                        }
                    }

                    function $_(ne, ce) {
                        var Ee, pe = this.children.length;
                        for (Ee = 0; pe > Ee; Ee++) ne.apply(this.children[Ee], ce);
                        return this
                    }
                    f.init = function(ne) {
                        if (this.$el = e(ne), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, oe.keepInherited && !oe.fallback) {
                            var ce = W(this.el, "transition");
                            ce && !$.test(ce) && (this.upstream = ce)
                        }
                        V.backface && oe.hideBackface && g(this.el, V.backface.css, "hidden")
                    }, He("add", b), He("start", A), He("wait", P), He("then", w), He("next", N), He("stop", Z), He("set", ae), He("show", ve), He("hide", z), He("redraw", se), He("destroy", ue)
                }),
                E = h(p, function(f) {
                    function b(A, P) {
                        var w = e.data(A, R) || e.data(A, R, new p.Bare);
                        return w.el || w.init(A), P ? w.start(P) : w
                    }
                    f.init = function(A, P) {
                        var w = e(A);
                        if (!w.length) return this;
                        if (w.length === 1) return b(w[0], P);
                        var N = [];
                        return w.each(function(Z, ae) {
                            N.push(b(ae, P))
                        }), this.children = N, this
                    }
                }),
                _ = h(function(f) {
                    function b() {
                        var N = this.get();
                        this.update("auto");
                        var Z = this.get();
                        return this.update(N), Z
                    }

                    function A(N, Z, ae) {
                        return Z !== void 0 && (ae = Z), N in v ? N : ae
                    }

                    function P(N) {
                        var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
                        return (Z ? i(Z[1], Z[2], Z[3]) : N).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var w = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(N, Z, ae, ve) {
                        this.$el = N, this.el = N[0];
                        var z = Z[0];
                        ae[2] && (z = ae[2]), Q[z] && (z = Q[z]), this.name = z, this.type = ae[1], this.duration = s(Z[1], this.duration, w.duration), this.ease = A(Z[2], this.ease, w.ease), this.delay = s(Z[3], this.delay, w.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = J.test(this.name), this.unit = ve.unit || this.unit || oe.defaultUnit, this.angle = ve.angle || this.angle || oe.defaultAngle, oe.fallback || ve.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + ee + this.duration + "ms" + (this.ease != "ease" ? ee + v[this.ease][0] : "") + (this.delay ? ee + this.delay + "ms" : ""))
                    }, f.set = function(N) {
                        N = this.convert(N, this.type), this.update(N), this.redraw()
                    }, f.transition = function(N) {
                        this.active = !0, N = this.convert(N, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), N == "auto" && (N = b.call(this))), this.nextStyle = N
                    }, f.fallback = function(N) {
                        var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        N = this.convert(N, this.type), this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)), N == "auto" && (N = b.call(this))), this.tween = new S({
                            from: Z,
                            to: N,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return W(this.el, this.name)
                    }, f.update = function(N) {
                        g(this.el, this.name, N)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, g(this.el, this.name, this.get()));
                        var N = this.tween;
                        N && N.context && N.destroy()
                    }, f.convert = function(N, Z) {
                        if (N == "auto" && this.auto) return N;
                        var ae, ve = typeof N == "number",
                            z = typeof N == "string";
                        switch (Z) {
                            case C:
                                if (ve) return N;
                                if (z && N.replace(I, "") === "") return +N;
                                ae = "number(unitless)";
                                break;
                            case q:
                                if (z) {
                                    if (N === "" && this.original) return this.original;
                                    if (Z.test(N)) return N.charAt(0) == "#" && N.length == 7 ? N : P(N)
                                }
                                ae = "hex or rgb string";
                                break;
                            case M:
                                if (ve) return N + this.unit;
                                if (z && Z.test(N)) return N;
                                ae = "number(px) or string(unit)";
                                break;
                            case D:
                                if (ve) return N + this.unit;
                                if (z && Z.test(N)) return N;
                                ae = "number(px) or string(unit or %)";
                                break;
                            case B:
                                if (ve) return N + this.angle;
                                if (z && Z.test(N)) return N;
                                ae = "number(deg) or string(angle)";
                                break;
                            case K:
                                if (ve || z && D.test(N)) return N;
                                ae = "number(unitless) or string(unit or %)"
                        }
                        return a(ae, N), N
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                l = h(_, function(f, b) {
                    f.init = function() {
                        b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), q))
                    }
                }),
                k = h(_, function(f, b) {
                    f.init = function() {
                        b.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(A) {
                        this.$el[this.name](A)
                    }
                }),
                U = h(_, function(f, b) {
                    function A(P, w) {
                        var N, Z, ae, ve, z;
                        for (N in P) ve = de[N], ae = ve[0], Z = ve[1] || N, z = this.convert(P[N], ae), w.call(this, Z, z, ae)
                    }
                    f.init = function() {
                        b.init.apply(this, arguments), this.current || (this.current = {}, de.perspective && oe.perspective && (this.current.perspective = oe.perspective, g(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(P) {
                        A.call(this, P, function(w, N) {
                            this.current[w] = N
                        }), g(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(P) {
                        var w = this.values(P);
                        this.tween = new fe({
                            current: this.current,
                            values: w,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var N, Z = {};
                        for (N in this.current) Z[N] = N in w ? w[N] : this.current[N];
                        this.active = !0, this.nextStyle = this.style(Z)
                    }, f.fallback = function(P) {
                        var w = this.values(P);
                        this.tween = new fe({
                            current: this.current,
                            values: w,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        g(this.el, this.name, this.style(this.current))
                    }, f.style = function(P) {
                        var w, N = "";
                        for (w in P) N += w + "(" + P[w] + ") ";
                        return N
                    }, f.values = function(P) {
                        var w, N = {};
                        return A.call(this, P, function(Z, ae, ve) {
                            N[Z] = ae, this.current[Z] === void 0 && (w = 0, ~Z.indexOf("scale") && (w = 1), this.current[Z] = this.convert(w, ve))
                        }), N
                    }
                }),
                S = h(function(f) {
                    function b(z) {
                        ae.push(z) === 1 && X(A)
                    }

                    function A() {
                        var z, se, ue, be = ae.length;
                        if (be)
                            for (X(A), se = Y(), z = be; z--;) ue = ae[z], ue && ue.render(se)
                    }

                    function P(z) {
                        var se, ue = e.inArray(z, ae);
                        ue >= 0 && (se = ae.slice(ue + 1), ae.length = ue, se.length && (ae = ae.concat(se)))
                    }

                    function w(z) {
                        return Math.round(z * ve) / ve
                    }

                    function N(z, se, ue) {
                        return i(z[0] + ue * (se[0] - z[0]), z[1] + ue * (se[1] - z[1]), z[2] + ue * (se[2] - z[2]))
                    }
                    var Z = {
                        ease: v.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function(z) {
                        this.duration = z.duration || 0, this.delay = z.delay || 0;
                        var se = z.ease || Z.ease;
                        v[se] && (se = v[se][1]), typeof se != "function" && (se = Z.ease), this.ease = se, this.update = z.update || o, this.complete = z.complete || o, this.context = z.context || this, this.name = z.name;
                        var ue = z.from,
                            be = z.to;
                        ue === void 0 && (ue = Z.from), be === void 0 && (be = Z.to), this.unit = z.unit || "", typeof ue == "number" && typeof be == "number" ? (this.begin = ue, this.change = be - ue) : this.format(be, ue), this.value = this.begin + this.unit, this.start = Y(), z.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = Y()), this.active = !0, b(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, P(this))
                    }, f.render = function(z) {
                        var se, ue = z - this.start;
                        if (this.delay) {
                            if (ue <= this.delay) return;
                            ue -= this.delay
                        }
                        if (ue < this.duration) {
                            var be = this.ease(ue, 0, 1, this.duration);
                            return se = this.startRGB ? N(this.startRGB, this.endRGB, be) : w(this.begin + be * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value)
                        }
                        se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function(z, se) {
                        if (se += "", z += "", z.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(z), this.endHex = z, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ue = se.replace(I, ""),
                                be = z.replace(I, "");
                            ue !== be && u("tween", se, z), this.unit = ue
                        }
                        se = parseFloat(se), z = parseFloat(z), this.begin = this.value = se, this.change = z - se
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ae = [],
                        ve = 1e3
                }),
                ie = h(S, function(f) {
                    f.init = function(b) {
                        this.duration = b.duration || 0, this.complete = b.complete || o, this.context = b.context, this.play()
                    }, f.render = function(b) {
                        var A = b - this.start;
                        A < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                fe = h(S, function(f, b) {
                    f.init = function(A) {
                        this.context = A.context, this.update = A.update, this.tweens = [], this.current = A.current;
                        var P, w;
                        for (P in A.values) w = A.values[P], this.current[P] !== w && this.tweens.push(new S({
                            name: P,
                            from: this.current[P],
                            to: w,
                            duration: A.duration,
                            delay: A.delay,
                            ease: A.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(A) {
                        var P, w, N = this.tweens.length,
                            Z = !1;
                        for (P = N; P--;) w = this.tweens[P], w.context && (w.render(A), this.current[w.name] = w.value, Z = !0);
                        return Z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (b.destroy.call(this), this.tweens) {
                            var A, P = this.tweens.length;
                            for (A = P; A--;) this.tweens[A].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                oe = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !V.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!V.transition) return oe.fallback = !0;
                oe.agentTests.push("(" + f + ")");
                var b = new RegExp(oe.agentTests.join("|"), "i");
                oe.fallback = b.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new S(f)
            }, t.delay = function(f, b, A) {
                return new ie({
                    complete: b,
                    duration: f,
                    context: A
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var g = e.style,
                W = e.css,
                Q = {
                    transform: V.transform && V.transform.css
                },
                j = {
                    color: [l, q],
                    background: [l, q, "background-color"],
                    "outline-color": [l, q],
                    "border-color": [l, q],
                    "border-top-color": [l, q],
                    "border-right-color": [l, q],
                    "border-bottom-color": [l, q],
                    "border-left-color": [l, q],
                    "border-width": [_, M],
                    "border-top-width": [_, M],
                    "border-right-width": [_, M],
                    "border-bottom-width": [_, M],
                    "border-left-width": [_, M],
                    "border-spacing": [_, M],
                    "letter-spacing": [_, M],
                    margin: [_, M],
                    "margin-top": [_, M],
                    "margin-right": [_, M],
                    "margin-bottom": [_, M],
                    "margin-left": [_, M],
                    padding: [_, M],
                    "padding-top": [_, M],
                    "padding-right": [_, M],
                    "padding-bottom": [_, M],
                    "padding-left": [_, M],
                    "outline-width": [_, M],
                    opacity: [_, C],
                    top: [_, D],
                    right: [_, D],
                    bottom: [_, D],
                    left: [_, D],
                    "font-size": [_, D],
                    "text-indent": [_, D],
                    "word-spacing": [_, D],
                    width: [_, D],
                    "min-width": [_, D],
                    "max-width": [_, D],
                    height: [_, D],
                    "min-height": [_, D],
                    "max-height": [_, D],
                    "line-height": [_, K],
                    "scroll-top": [k, C, "scrollTop"],
                    "scroll-left": [k, C, "scrollLeft"]
                },
                de = {};
            V.transform && (j.transform = [U], de = {
                x: [D, "translateX"],
                y: [D, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }), V.transform && V.backface && (de.z = [D, "translateZ"], de.rotateZ = [B], de.scaleZ = [C], de.perspective = [M]);
            var De = /ms/,
                Be = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ds = c((HU, qs) => {
        "use strict";
        var nb = window.$,
            ib = Ni() && nb.tram;
        qs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                u = r.concat,
                s = n.toString,
                d = n.hasOwnProperty,
                y = r.forEach,
                h = r.map,
                v = r.reduce,
                m = r.reduceRight,
                O = r.filter,
                T = r.every,
                R = r.some,
                I = r.indexOf,
                L = r.lastIndexOf,
                C = Array.isArray,
                q = Object.keys,
                M = i.bind,
                D = e.each = e.forEach = function(x, F, H) {
                    if (x == null) return x;
                    if (y && x.forEach === y) x.forEach(F, H);
                    else if (x.length === +x.length) {
                        for (var V = 0, te = x.length; V < te; V++)
                            if (F.call(H, x[V], V, x) === t) return
                    } else
                        for (var re = e.keys(x), V = 0, te = re.length; V < te; V++)
                            if (F.call(H, x[re[V]], re[V], x) === t) return;
                    return x
                };
            e.map = e.collect = function(x, F, H) {
                var V = [];
                return x == null ? V : h && x.map === h ? x.map(F, H) : (D(x, function(te, re, X) {
                    V.push(F.call(H, te, re, X))
                }), V)
            }, e.find = e.detect = function(x, F, H) {
                var V;
                return B(x, function(te, re, X) {
                    if (F.call(H, te, re, X)) return V = te, !0
                }), V
            }, e.filter = e.select = function(x, F, H) {
                var V = [];
                return x == null ? V : O && x.filter === O ? x.filter(F, H) : (D(x, function(te, re, X) {
                    F.call(H, te, re, X) && V.push(te)
                }), V)
            };
            var B = e.some = e.any = function(x, F, H) {
                F || (F = e.identity);
                var V = !1;
                return x == null ? V : R && x.some === R ? x.some(F, H) : (D(x, function(te, re, X) {
                    if (V || (V = F.call(H, te, re, X))) return t
                }), !!V)
            };
            e.contains = e.include = function(x, F) {
                return x == null ? !1 : I && x.indexOf === I ? x.indexOf(F) != -1 : B(x, function(H) {
                    return H === F
                })
            }, e.delay = function(x, F) {
                var H = a.call(arguments, 2);
                return setTimeout(function() {
                    return x.apply(null, H)
                }, F)
            }, e.defer = function(x) {
                return e.delay.apply(e, [x, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(x) {
                var F, H, V;
                return function() {
                    F || (F = !0, H = arguments, V = this, ib.frame(function() {
                        F = !1, x.apply(V, H)
                    }))
                }
            }, e.debounce = function(x, F, H) {
                var V, te, re, X, Y, p = function() {
                    var E = e.now() - X;
                    E < F ? V = setTimeout(p, F - E) : (V = null, H || (Y = x.apply(re, te), re = te = null))
                };
                return function() {
                    re = this, te = arguments, X = e.now();
                    var E = H && !V;
                    return V || (V = setTimeout(p, F)), E && (Y = x.apply(re, te), re = te = null), Y
                }
            }, e.defaults = function(x) {
                if (!e.isObject(x)) return x;
                for (var F = 1, H = arguments.length; F < H; F++) {
                    var V = arguments[F];
                    for (var te in V) x[te] === void 0 && (x[te] = V[te])
                }
                return x
            }, e.keys = function(x) {
                if (!e.isObject(x)) return [];
                if (q) return q(x);
                var F = [];
                for (var H in x) e.has(x, H) && F.push(H);
                return F
            }, e.has = function(x, F) {
                return d.call(x, F)
            }, e.isObject = function(x) {
                return x === Object(x)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/,
                $ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                J = /\\|'|\r|\n|\u2028|\u2029/g,
                ee = function(x) {
                    return "\\" + $[x]
                },
                G = /^\s*(\w|\$)+\s*$/;
            return e.template = function(x, F, H) {
                !F && H && (F = H), F = e.defaults({}, F, e.templateSettings);
                var V = RegExp([(F.escape || K).source, (F.interpolate || K).source, (F.evaluate || K).source].join("|") + "|$", "g"),
                    te = 0,
                    re = "__p+='";
                x.replace(V, function(E, _, l, k, U) {
                    return re += x.slice(te, U).replace(J, ee), te = U + E.length, _ ? re += `'+
((__t=(` + _ + `))==null?'':_.escape(__t))+
'` : l ? re += `'+
((__t=(` + l + `))==null?'':__t)+
'` : k && (re += `';
` + k + `
__p+='`), E
                }), re += `';
`;
                var X = F.variable;
                if (X) {
                    if (!G.test(X)) throw new Error("variable is not a bare identifier: " + X)
                } else re = `with(obj||{}){
` + re + `}
`, X = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var Y;
                try {
                    Y = new Function(F.variable || "obj", "_", re)
                } catch (E) {
                    throw E.source = re, E
                }
                var p = function(E) {
                    return Y.call(this, E, e)
                };
                return p.source = "function(" + X + `){
` + re + "}", p
            }, e
        }()
    });
    var ke = c((jU, Vs) => {
        "use strict";
        var ge = {},
            Wt = {},
            Vt = [],
            Di = window.Webflow || [],
            _t = window.jQuery,
            Ke = _t(window),
            ob = _t(document),
            it = _t.isFunction,
            ze = ge._ = Ds(),
            Fs = ge.tram = Ni() && _t.tram,
            cn = !1,
            Mi = !1;
        Fs.config.hideBackface = !1;
        Fs.config.keepInherited = !0;
        ge.define = function(e, t, r) {
            Wt[e] && Gs(Wt[e]);
            var n = Wt[e] = t(_t, ze, r) || {};
            return ks(n), n
        };
        ge.require = function(e) {
            return Wt[e]
        };

        function ks(e) {
            ge.env() && (it(e.design) && Ke.on("__wf_design", e.design), it(e.preview) && Ke.on("__wf_preview", e.preview)), it(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && it(e.ready) && ab(e)
        }

        function ab(e) {
            if (cn) {
                e.ready();
                return
            }
            ze.contains(Vt, e.ready) || Vt.push(e.ready)
        }

        function Gs(e) {
            it(e.design) && Ke.off("__wf_design", e.design), it(e.preview) && Ke.off("__wf_preview", e.preview), it(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && it(e.ready) && sb(e)
        }

        function sb(e) {
            Vt = ze.filter(Vt, function(t) {
                return t !== e.ready
            })
        }
        ge.push = function(e) {
            if (cn) {
                it(e) && e();
                return
            }
            Di.push(e)
        };
        ge.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var un = navigator.userAgent.toLowerCase(),
            Xs = ge.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            ub = ge.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10),
            cb = ge.env.ios = /(ipod|iphone|ipad)/.test(un);
        ge.env.safari = /safari/.test(un) && !ub && !cb;
        var qi;
        Xs && ob.on("touchstart mousedown", function(e) {
            qi = e.target
        });
        ge.validClick = Xs ? function(e) {
            return e === qi || _t.contains(e, qi)
        } : function() {
            return !0
        };
        var Us = "resize.webflow orientationchange.webflow load.webflow",
            lb = "scroll.webflow " + Us;
        ge.resize = Fi(Ke, Us);
        ge.scroll = Fi(Ke, lb);
        ge.redraw = Fi();

        function Fi(e, t) {
            var r = [],
                n = {};
            return n.up = ze.throttle(function(i) {
                ze.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ze.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ge.location = function(e) {
            window.location = e
        };
        ge.env() && (ge.location = function() {});
        ge.ready = function() {
            cn = !0, Mi ? fb() : ze.each(Vt, Ms), ze.each(Di, Ms), ge.resize.up()
        };

        function Ms(e) {
            it(e) && e()
        }

        function fb() {
            Mi = !1, ze.each(Wt, ks)
        }
        var Ct;
        ge.load = function(e) {
            Ct.then(e)
        };

        function Ws() {
            Ct && (Ct.reject(), Ke.off("load", Ct.resolve)), Ct = new _t.Deferred, Ke.on("load", Ct.resolve)
        }
        ge.destroy = function(e) {
            e = e || {}, Mi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (cn = e.domready), ze.each(Wt, Gs), ge.resize.off(), ge.scroll.off(), ge.redraw.off(), Vt = [], Di = [], Ct.state() === "pending" && Ws()
        };
        _t(ge.ready);
        Ws();
        Vs.exports = window.Webflow = ge
    });
    var js = c((zU, Hs) => {
        "use strict";
        var Bs = ke();
        Bs.define("brand", Hs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                u = /PhantomJS/i.test(navigator.userAgent),
                s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                d;
            t.ready = function() {
                var m = n.attr("data-wf-status"),
                    O = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(O) && a.hostname !== O && (m = !0), m && !u && (d = d || h(), v(), setTimeout(v, 500), e(r).off(s, y).on(s, y))
            };

            function y() {
                var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", m ? "display: none !important;" : "")
            }

            function h() {
                
            }

            function v() {
                var m = i.children(o),
                    O = m.length && m.get(0) === d,
                    T = Bs.env("editor");
                if (O) {
                    T && m.remove();
                    return
                }
                m.length && m.remove(), T || i.append(d)
            }
            return t
        })
    });
    var Ks = c((KU, zs) => {
        "use strict";
        var ki = ke();
        ki.define("edit", zs.exports = function(e, t, r) {
            if (r = r || {}, (ki.env("test") || ki.env("frame")) && !r.fixture && !db()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                u = "hashchange",
                s, d = r.load || v,
                y = !1;
            try {
                y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            y ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : i.on(u, h).triggerHandler(u);

            function h() {
                s || /\?edit/.test(a.hash) && d()
            }

            function v() {
                s = !0, window.WebflowEditor = !0, i.off(u, h), L(function(q) {
                    e.ajax({
                        url: I("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: m(q)
                    })
                })
            }

            function m(q) {
                return function(M) {
                    if (!M) {
                        console.error("Could not load editor data");
                        return
                    }
                    M.thirdPartyCookiesSupported = q, O(R(M.scriptPath), function() {
                        window.WebflowEditor(M)
                    })
                }
            }

            function O(q, M) {
                e.ajax({
                    type: "GET",
                    url: q,
                    dataType: "script",
                    cache: !0
                }).then(M, T)
            }

            function T(q, M, D) {
                throw console.error("Could not load editor script: " + M), D
            }

            function R(q) {
                return q.indexOf("//") >= 0 ? q : I("https://editor-api.webflow.com" + q)
            }

            function I(q) {
                return q.replace(/([^:])\/\//g, "$1/")
            }

            function L(q) {
                var M = window.document.createElement("iframe");
                M.src = "https://webflow.com/site/third-party-cookie-check.html", M.style.display = "none", M.sandbox = "allow-scripts allow-same-origin";
                var D = function(B) {
                    B.data === "WF_third_party_cookies_unsupported" ? (C(M, D), q(!1)) : B.data === "WF_third_party_cookies_supported" && (C(M, D), q(!0))
                };
                M.onerror = function() {
                    C(M, D), q(!1)
                }, window.addEventListener("message", D, !1), window.document.body.appendChild(M)
            }

            function C(q, M) {
                window.removeEventListener("message", M, !1), q.remove()
            }
            return n
        });

        function db() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var $s = c((YU, Ys) => {
        "use strict";
        var pb = ke();
        pb.define("focus-visible", Ys.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function u(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList" in C && "contains" in C.classList)
                }

                function s(C) {
                    var q = C.type,
                        M = C.tagName;
                    return !!(M === "INPUT" && a[q] && !C.readOnly || M === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }

                function d(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }

                function y(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }

                function h(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (u(r.activeElement) && d(r.activeElement), n = !0)
                }

                function v() {
                    n = !1
                }

                function m(C) {
                    u(C.target) && (n || s(C.target)) && d(C.target)
                }

                function O(C) {
                    u(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), y(C.target))
                }

                function T() {
                    document.visibilityState === "hidden" && (i && (n = !0), R())
                }

                function R() {
                    document.addEventListener("mousemove", L), document.addEventListener("mousedown", L), document.addEventListener("mouseup", L), document.addEventListener("pointermove", L), document.addEventListener("pointerdown", L), document.addEventListener("pointerup", L), document.addEventListener("touchmove", L), document.addEventListener("touchstart", L), document.addEventListener("touchend", L)
                }

                function I() {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", L), document.removeEventListener("pointermove", L), document.removeEventListener("pointerdown", L), document.removeEventListener("pointerup", L), document.removeEventListener("touchmove", L), document.removeEventListener("touchstart", L), document.removeEventListener("touchend", L)
                }

                function L(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1, I())
                }
                document.addEventListener("keydown", h, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("visibilitychange", T, !0), R(), r.addEventListener("focus", m, !0), r.addEventListener("blur", O, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Js = c(($U, Zs) => {
        "use strict";
        var Qs = ke();
        Qs.define("focus", Zs.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var u = a.target,
                    s = u.tagName;
                return /^a$/i.test(s) && u.href != null || /^(button|textarea)$/i.test(s) && u.disabled !== !0 || /^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(s) || /^video$/i.test(s) && u.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var u = e.pop();
                        u.target.dispatchEvent(new MouseEvent(u.type, u))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Qs.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var ru = c((QU, tu) => {
        "use strict";
        var Gi = window.jQuery,
            ot = {},
            ln = [],
            eu = ".w-ix",
            fn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Gi(t).triggerHandler(ot.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Gi(t).triggerHandler(ot.types.OUTRO))
                }
            };
        ot.triggers = {};
        ot.types = {
            INTRO: "w-ix-intro" + eu,
            OUTRO: "w-ix-outro" + eu
        };
        ot.init = function() {
            for (var e = ln.length, t = 0; t < e; t++) {
                var r = ln[t];
                r[0](0, r[1])
            }
            ln = [], Gi.extend(ot.triggers, fn)
        };
        ot.async = function() {
            for (var e in fn) {
                var t = fn[e];
                fn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
                    ln.push([t, n])
                })
            }
        };
        ot.async();
        tu.exports = ot
    });
    var br = c((ZU, ou) => {
        "use strict";
        var Xi = ru();

        function nu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var gb = window.jQuery,
            dn = {},
            iu = ".w-ix",
            vb = {
                reset: function(e, t) {
                    Xi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Xi.triggers.intro(e, t), nu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Xi.triggers.outro(e, t), nu(t, "COMPONENT_INACTIVE")
                }
            };
        dn.triggers = {};
        dn.types = {
            INTRO: "w-ix-intro" + iu,
            OUTRO: "w-ix-outro" + iu
        };
        gb.extend(dn.triggers, vb);
        ou.exports = dn
    });
    var au = c((JU, pt) => {
        function Ui(e) {
            return pt.exports = Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, pt.exports.__esModule = !0, pt.exports.default = pt.exports, Ui(e)
        }
        pt.exports = Ui, pt.exports.__esModule = !0, pt.exports.default = pt.exports
    });
    var pn = c((eW, Ir) => {
        var hb = au().default;

        function su(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (su = function(i) {
                return i ? r : t
            })(e)
        }

        function yb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || hb(e) != "object" && typeof e != "function") return {
                default: e
            };
            var r = su(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                } return n.default = e, r && r.set(e, n), n
        }
        Ir.exports = yb, Ir.exports.__esModule = !0, Ir.exports.default = Ir.exports
    });
    var uu = c((tW, Tr) => {
        function mb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Tr.exports = mb, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
    });
    var me = c((rW, cu) => {
        var gn = function(e) {
            return e && e.Math == Math && e
        };
        cu.exports = gn(typeof globalThis == "object" && globalThis) || gn(typeof window == "object" && window) || gn(typeof self == "object" && self) || gn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Bt = c((nW, lu) => {
        lu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Pt = c((iW, fu) => {
        var Eb = Bt();
        fu.exports = !Eb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var vn = c((oW, du) => {
        var wr = Function.prototype.call;
        du.exports = wr.bind ? wr.bind(wr) : function() {
            return wr.apply(wr, arguments)
        }
    });
    var hu = c(vu => {
        "use strict";
        var pu = {}.propertyIsEnumerable,
            gu = Object.getOwnPropertyDescriptor,
            _b = gu && !pu.call({
                1: 2
            }, 1);
        vu.f = _b ? function(t) {
            var r = gu(this, t);
            return !!r && r.enumerable
        } : pu
    });
    var Wi = c((sW, yu) => {
        yu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Ye = c((uW, Eu) => {
        var mu = Function.prototype,
            Vi = mu.bind,
            Bi = mu.call,
            bb = Vi && Vi.bind(Bi);
        Eu.exports = Vi ? function(e) {
            return e && bb(Bi, e)
        } : function(e) {
            return e && function() {
                return Bi.apply(e, arguments)
            }
        }
    });
    var Iu = c((cW, bu) => {
        var _u = Ye(),
            Ib = _u({}.toString),
            Tb = _u("".slice);
        bu.exports = function(e) {
            return Tb(Ib(e), 8, -1)
        }
    });
    var wu = c((lW, Tu) => {
        var wb = me(),
            Ob = Ye(),
            Ab = Bt(),
            xb = Iu(),
            Hi = wb.Object,
            Sb = Ob("".split);
        Tu.exports = Ab(function() {
            return !Hi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return xb(e) == "String" ? Sb(e, "") : Hi(e)
        } : Hi
    });
    var ji = c((fW, Ou) => {
        var Rb = me(),
            Cb = Rb.TypeError;
        Ou.exports = function(e) {
            if (e == null) throw Cb("Can't call method on " + e);
            return e
        }
    });
    var Or = c((dW, Au) => {
        var Pb = wu(),
            Lb = ji();
        Au.exports = function(e) {
            return Pb(Lb(e))
        }
    });
    var at = c((pW, xu) => {
        xu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Ht = c((gW, Su) => {
        var Nb = at();
        Su.exports = function(e) {
            return typeof e == "object" ? e !== null : Nb(e)
        }
    });
    var Ar = c((vW, Ru) => {
        var zi = me(),
            qb = at(),
            Db = function(e) {
                return qb(e) ? e : void 0
            };
        Ru.exports = function(e, t) {
            return arguments.length < 2 ? Db(zi[e]) : zi[e] && zi[e][t]
        }
    });
    var Pu = c((hW, Cu) => {
        var Mb = Ye();
        Cu.exports = Mb({}.isPrototypeOf)
    });
    var Nu = c((yW, Lu) => {
        var Fb = Ar();
        Lu.exports = Fb("navigator", "userAgent") || ""
    });
    var Xu = c((mW, Gu) => {
        var ku = me(),
            Ki = Nu(),
            qu = ku.process,
            Du = ku.Deno,
            Mu = qu && qu.versions || Du && Du.version,
            Fu = Mu && Mu.v8,
            $e, hn;
        Fu && ($e = Fu.split("."), hn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !hn && Ki && ($e = Ki.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = Ki.match(/Chrome\/(\d+)/), $e && (hn = +$e[1])));
        Gu.exports = hn
    });
    var Yi = c((EW, Wu) => {
        var Uu = Xu(),
            kb = Bt();
        Wu.exports = !!Object.getOwnPropertySymbols && !kb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Uu && Uu < 41
        })
    });
    var $i = c((_W, Vu) => {
        var Gb = Yi();
        Vu.exports = Gb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Qi = c((bW, Bu) => {
        var Xb = me(),
            Ub = Ar(),
            Wb = at(),
            Vb = Pu(),
            Bb = $i(),
            Hb = Xb.Object;
        Bu.exports = Bb ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Ub("Symbol");
            return Wb(t) && Vb(t.prototype, Hb(e))
        }
    });
    var ju = c((IW, Hu) => {
        var jb = me(),
            zb = jb.String;
        Hu.exports = function(e) {
            try {
                return zb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Ku = c((TW, zu) => {
        var Kb = me(),
            Yb = at(),
            $b = ju(),
            Qb = Kb.TypeError;
        zu.exports = function(e) {
            if (Yb(e)) return e;
            throw Qb($b(e) + " is not a function")
        }
    });
    var $u = c((wW, Yu) => {
        var Zb = Ku();
        Yu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : Zb(r)
        }
    });
    var Zu = c((OW, Qu) => {
        var Jb = me(),
            Zi = vn(),
            Ji = at(),
            eo = Ht(),
            eI = Jb.TypeError;
        Qu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Ji(r = e.toString) && !eo(n = Zi(r, e)) || Ji(r = e.valueOf) && !eo(n = Zi(r, e)) || t !== "string" && Ji(r = e.toString) && !eo(n = Zi(r, e))) return n;
            throw eI("Can't convert object to primitive value")
        }
    });
    var ec = c((AW, Ju) => {
        Ju.exports = !1
    });
    var yn = c((xW, rc) => {
        var tc = me(),
            tI = Object.defineProperty;
        rc.exports = function(e, t) {
            try {
                tI(tc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                tc[e] = t
            }
            return t
        }
    });
    var mn = c((SW, ic) => {
        var rI = me(),
            nI = yn(),
            nc = "__core-js_shared__",
            iI = rI[nc] || nI(nc, {});
        ic.exports = iI
    });
    var to = c((RW, ac) => {
        var oI = ec(),
            oc = mn();
        (ac.exports = function(e, t) {
            return oc[e] || (oc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: oI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var uc = c((CW, sc) => {
        var aI = me(),
            sI = ji(),
            uI = aI.Object;
        sc.exports = function(e) {
            return uI(sI(e))
        }
    });
    var bt = c((PW, cc) => {
        var cI = Ye(),
            lI = uc(),
            fI = cI({}.hasOwnProperty);
        cc.exports = Object.hasOwn || function(t, r) {
            return fI(lI(t), r)
        }
    });
    var ro = c((LW, lc) => {
        var dI = Ye(),
            pI = 0,
            gI = Math.random(),
            vI = dI(1 .toString);
        lc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + vI(++pI + gI, 36)
        }
    });
    var no = c((NW, vc) => {
        var hI = me(),
            yI = to(),
            fc = bt(),
            mI = ro(),
            dc = Yi(),
            gc = $i(),
            jt = yI("wks"),
            Lt = hI.Symbol,
            pc = Lt && Lt.for,
            EI = gc ? Lt : Lt && Lt.withoutSetter || mI;
        vc.exports = function(e) {
            if (!fc(jt, e) || !(dc || typeof jt[e] == "string")) {
                var t = "Symbol." + e;
                dc && fc(Lt, e) ? jt[e] = Lt[e] : gc && pc ? jt[e] = pc(t) : jt[e] = EI(t)
            }
            return jt[e]
        }
    });
    var Ec = c((qW, mc) => {
        var _I = me(),
            bI = vn(),
            hc = Ht(),
            yc = Qi(),
            II = $u(),
            TI = Zu(),
            wI = no(),
            OI = _I.TypeError,
            AI = wI("toPrimitive");
        mc.exports = function(e, t) {
            if (!hc(e) || yc(e)) return e;
            var r = II(e, AI),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = bI(r, e, t), !hc(n) || yc(n)) return n;
                throw OI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), TI(e, t)
        }
    });
    var io = c((DW, _c) => {
        var xI = Ec(),
            SI = Qi();
        _c.exports = function(e) {
            var t = xI(e, "string");
            return SI(t) ? t : t + ""
        }
    });
    var ao = c((MW, Ic) => {
        var RI = me(),
            bc = Ht(),
            oo = RI.document,
            CI = bc(oo) && bc(oo.createElement);
        Ic.exports = function(e) {
            return CI ? oo.createElement(e) : {}
        }
    });
    var so = c((FW, Tc) => {
        var PI = Pt(),
            LI = Bt(),
            NI = ao();
        Tc.exports = !PI && !LI(function() {
            return Object.defineProperty(NI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var uo = c(Oc => {
        var qI = Pt(),
            DI = vn(),
            MI = hu(),
            FI = Wi(),
            kI = Or(),
            GI = io(),
            XI = bt(),
            UI = so(),
            wc = Object.getOwnPropertyDescriptor;
        Oc.f = qI ? wc : function(t, r) {
            if (t = kI(t), r = GI(r), UI) try {
                return wc(t, r)
            } catch {}
            if (XI(t, r)) return FI(!DI(MI.f, t, r), t[r])
        }
    });
    var xr = c((GW, xc) => {
        var Ac = me(),
            WI = Ht(),
            VI = Ac.String,
            BI = Ac.TypeError;
        xc.exports = function(e) {
            if (WI(e)) return e;
            throw BI(VI(e) + " is not an object")
        }
    });
    var Sr = c(Cc => {
        var HI = me(),
            jI = Pt(),
            zI = so(),
            Sc = xr(),
            KI = io(),
            YI = HI.TypeError,
            Rc = Object.defineProperty;
        Cc.f = jI ? Rc : function(t, r, n) {
            if (Sc(t), r = KI(r), Sc(n), zI) try {
                return Rc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw YI("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var En = c((UW, Pc) => {
        var $I = Pt(),
            QI = Sr(),
            ZI = Wi();
        Pc.exports = $I ? function(e, t, r) {
            return QI.f(e, t, ZI(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var lo = c((WW, Lc) => {
        var JI = Ye(),
            eT = at(),
            co = mn(),
            tT = JI(Function.toString);
        eT(co.inspectSource) || (co.inspectSource = function(e) {
            return tT(e)
        });
        Lc.exports = co.inspectSource
    });
    var Dc = c((VW, qc) => {
        var rT = me(),
            nT = at(),
            iT = lo(),
            Nc = rT.WeakMap;
        qc.exports = nT(Nc) && /native code/.test(iT(Nc))
    });
    var fo = c((BW, Fc) => {
        var oT = to(),
            aT = ro(),
            Mc = oT("keys");
        Fc.exports = function(e) {
            return Mc[e] || (Mc[e] = aT(e))
        }
    });
    var _n = c((HW, kc) => {
        kc.exports = {}
    });
    var Bc = c((jW, Vc) => {
        var sT = Dc(),
            Wc = me(),
            po = Ye(),
            uT = Ht(),
            cT = En(),
            go = bt(),
            vo = mn(),
            lT = fo(),
            fT = _n(),
            Gc = "Object already initialized",
            yo = Wc.TypeError,
            dT = Wc.WeakMap,
            bn, Rr, In, pT = function(e) {
                return In(e) ? Rr(e) : bn(e, {})
            },
            gT = function(e) {
                return function(t) {
                    var r;
                    if (!uT(t) || (r = Rr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        sT || vo.state ? (It = vo.state || (vo.state = new dT), Xc = po(It.get), ho = po(It.has), Uc = po(It.set), bn = function(e, t) {
            if (ho(It, e)) throw new yo(Gc);
            return t.facade = e, Uc(It, e, t), t
        }, Rr = function(e) {
            return Xc(It, e) || {}
        }, In = function(e) {
            return ho(It, e)
        }) : (Nt = lT("state"), fT[Nt] = !0, bn = function(e, t) {
            if (go(e, Nt)) throw new yo(Gc);
            return t.facade = e, cT(e, Nt, t), t
        }, Rr = function(e) {
            return go(e, Nt) ? e[Nt] : {}
        }, In = function(e) {
            return go(e, Nt)
        });
        var It, Xc, ho, Uc, Nt;
        Vc.exports = {
            set: bn,
            get: Rr,
            has: In,
            enforce: pT,
            getterFor: gT
        }
    });
    var zc = c((zW, jc) => {
        var mo = Pt(),
            vT = bt(),
            Hc = Function.prototype,
            hT = mo && Object.getOwnPropertyDescriptor,
            Eo = vT(Hc, "name"),
            yT = Eo && function() {}.name === "something",
            mT = Eo && (!mo || mo && hT(Hc, "name").configurable);
        jc.exports = {
            EXISTS: Eo,
            PROPER: yT,
            CONFIGURABLE: mT
        }
    });
    var Zc = c((KW, Qc) => {
        var ET = me(),
            Kc = at(),
            _T = bt(),
            Yc = En(),
            bT = yn(),
            IT = lo(),
            $c = Bc(),
            TT = zc().CONFIGURABLE,
            wT = $c.get,
            OT = $c.enforce,
            AT = String(String).split("String");
        (Qc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                u = n && n.name !== void 0 ? n.name : t,
                s;
            if (Kc(r) && (String(u).slice(0, 7) === "Symbol(" && (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!_T(r, "name") || TT && r.name !== u) && Yc(r, "name", u), s = OT(r), s.source || (s.source = AT.join(typeof u == "string" ? u : ""))), e === ET) {
                o ? e[t] = r : bT(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Yc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Kc(this) && wT(this).source || IT(this)
        })
    });
    var _o = c((YW, Jc) => {
        var xT = Math.ceil,
            ST = Math.floor;
        Jc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? ST : xT)(t)
        }
    });
    var tl = c(($W, el) => {
        var RT = _o(),
            CT = Math.max,
            PT = Math.min;
        el.exports = function(e, t) {
            var r = RT(e);
            return r < 0 ? CT(r + t, 0) : PT(r, t)
        }
    });
    var nl = c((QW, rl) => {
        var LT = _o(),
            NT = Math.min;
        rl.exports = function(e) {
            return e > 0 ? NT(LT(e), 9007199254740991) : 0
        }
    });
    var ol = c((ZW, il) => {
        var qT = nl();
        il.exports = function(e) {
            return qT(e.length)
        }
    });
    var bo = c((JW, sl) => {
        var DT = Or(),
            MT = tl(),
            FT = ol(),
            al = function(e) {
                return function(t, r, n) {
                    var i = DT(t),
                        o = FT(i),
                        a = MT(n, o),
                        u;
                    if (e && r != r) {
                        for (; o > a;)
                            if (u = i[a++], u != u) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        sl.exports = {
            includes: al(!0),
            indexOf: al(!1)
        }
    });
    var To = c((eV, cl) => {
        var kT = Ye(),
            Io = bt(),
            GT = Or(),
            XT = bo().indexOf,
            UT = _n(),
            ul = kT([].push);
        cl.exports = function(e, t) {
            var r = GT(e),
                n = 0,
                i = [],
                o;
            for (o in r) !Io(UT, o) && Io(r, o) && ul(i, o);
            for (; t.length > n;) Io(r, o = t[n++]) && (~XT(i, o) || ul(i, o));
            return i
        }
    });
    var Tn = c((tV, ll) => {
        ll.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var dl = c(fl => {
        var WT = To(),
            VT = Tn(),
            BT = VT.concat("length", "prototype");
        fl.f = Object.getOwnPropertyNames || function(t) {
            return WT(t, BT)
        }
    });
    var gl = c(pl => {
        pl.f = Object.getOwnPropertySymbols
    });
    var hl = c((iV, vl) => {
        var HT = Ar(),
            jT = Ye(),
            zT = dl(),
            KT = gl(),
            YT = xr(),
            $T = jT([].concat);
        vl.exports = HT("Reflect", "ownKeys") || function(t) {
            var r = zT.f(YT(t)),
                n = KT.f;
            return n ? $T(r, n(t)) : r
        }
    });
    var ml = c((oV, yl) => {
        var QT = bt(),
            ZT = hl(),
            JT = uo(),
            ew = Sr();
        yl.exports = function(e, t) {
            for (var r = ZT(t), n = ew.f, i = JT.f, o = 0; o < r.length; o++) {
                var a = r[o];
                QT(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var _l = c((aV, El) => {
        var tw = Bt(),
            rw = at(),
            nw = /#|\.prototype\./,
            Cr = function(e, t) {
                var r = ow[iw(e)];
                return r == sw ? !0 : r == aw ? !1 : rw(t) ? tw(t) : !!t
            },
            iw = Cr.normalize = function(e) {
                return String(e).replace(nw, ".").toLowerCase()
            },
            ow = Cr.data = {},
            aw = Cr.NATIVE = "N",
            sw = Cr.POLYFILL = "P";
        El.exports = Cr
    });
    var Il = c((sV, bl) => {
        var wo = me(),
            uw = uo().f,
            cw = En(),
            lw = Zc(),
            fw = yn(),
            dw = ml(),
            pw = _l();
        bl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, u, s, d, y;
            if (n ? a = wo : i ? a = wo[r] || fw(r, {}) : a = (wo[r] || {}).prototype, a)
                for (u in t) {
                    if (d = t[u], e.noTargetGet ? (y = uw(a, u), s = y && y.value) : s = a[u], o = pw(n ? u : r + (i ? "." : "#") + u, e.forced), !o && s !== void 0) {
                        if (typeof d == typeof s) continue;
                        dw(d, s)
                    }(e.sham || s && s.sham) && cw(d, "sham", !0), lw(a, u, d, e)
                }
        }
    });
    var wl = c((uV, Tl) => {
        var gw = To(),
            vw = Tn();
        Tl.exports = Object.keys || function(t) {
            return gw(t, vw)
        }
    });
    var Al = c((cV, Ol) => {
        var hw = Pt(),
            yw = Sr(),
            mw = xr(),
            Ew = Or(),
            _w = wl();
        Ol.exports = hw ? Object.defineProperties : function(t, r) {
            mw(t);
            for (var n = Ew(r), i = _w(r), o = i.length, a = 0, u; o > a;) yw.f(t, u = i[a++], n[u]);
            return t
        }
    });
    var Sl = c((lV, xl) => {
        var bw = Ar();
        xl.exports = bw("document", "documentElement")
    });
    var Ml = c((fV, Dl) => {
        var Iw = xr(),
            Tw = Al(),
            Rl = Tn(),
            ww = _n(),
            Ow = Sl(),
            Aw = ao(),
            xw = fo(),
            Cl = ">",
            Pl = "<",
            Ao = "prototype",
            xo = "script",
            Nl = xw("IE_PROTO"),
            Oo = function() {},
            ql = function(e) {
                return Pl + xo + Cl + e + Pl + "/" + xo + Cl
            },
            Ll = function(e) {
                e.write(ql("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            Sw = function() {
                var e = Aw("iframe"),
                    t = "java" + xo + ":",
                    r;
                return e.style.display = "none", Ow.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(ql("document.F=Object")), r.close(), r.F
            },
            wn, On = function() {
                try {
                    wn = new ActiveXObject("htmlfile")
                } catch {}
                On = typeof document < "u" ? document.domain && wn ? Ll(wn) : Sw() : Ll(wn);
                for (var e = Rl.length; e--;) delete On[Ao][Rl[e]];
                return On()
            };
        ww[Nl] = !0;
        Dl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[Ao] = Iw(t), n = new Oo, Oo[Ao] = null, n[Nl] = t) : n = On(), r === void 0 ? n : Tw(n, r)
        }
    });
    var kl = c((dV, Fl) => {
        var Rw = no(),
            Cw = Ml(),
            Pw = Sr(),
            So = Rw("unscopables"),
            Ro = Array.prototype;
        Ro[So] == null && Pw.f(Ro, So, {
            configurable: !0,
            value: Cw(null)
        });
        Fl.exports = function(e) {
            Ro[So][e] = !0
        }
    });
    var Gl = c(() => {
        "use strict";
        var Lw = Il(),
            Nw = bo().includes,
            qw = kl();
        Lw({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return Nw(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        qw("includes")
    });
    var Ul = c((vV, Xl) => {
        var Dw = me(),
            Mw = Ye();
        Xl.exports = function(e, t) {
            return Mw(Dw[e].prototype[t])
        }
    });
    var Vl = c((hV, Wl) => {
        Gl();
        var Fw = Ul();
        Wl.exports = Fw("Array", "includes")
    });
    var Hl = c((yV, Bl) => {
        var kw = Vl();
        Bl.exports = kw
    });
    var zl = c((mV, jl) => {
        var Gw = Hl();
        jl.exports = Gw
    });
    var Co = c((EV, Kl) => {
        var Xw = typeof global == "object" && global && global.Object === Object && global;
        Kl.exports = Xw
    });
    var Qe = c((_V, Yl) => {
        var Uw = Co(),
            Ww = typeof self == "object" && self && self.Object === Object && self,
            Vw = Uw || Ww || Function("return this")();
        Yl.exports = Vw
    });
    var zt = c((bV, $l) => {
        var Bw = Qe(),
            Hw = Bw.Symbol;
        $l.exports = Hw
    });
    var ef = c((IV, Jl) => {
        var Ql = zt(),
            Zl = Object.prototype,
            jw = Zl.hasOwnProperty,
            zw = Zl.toString,
            Pr = Ql ? Ql.toStringTag : void 0;

        function Kw(e) {
            var t = jw.call(e, Pr),
                r = e[Pr];
            try {
                e[Pr] = void 0;
                var n = !0
            } catch {}
            var i = zw.call(e);
            return n && (t ? e[Pr] = r : delete e[Pr]), i
        }
        Jl.exports = Kw
    });
    var rf = c((TV, tf) => {
        var Yw = Object.prototype,
            $w = Yw.toString;

        function Qw(e) {
            return $w.call(e)
        }
        tf.exports = Qw
    });
    var Tt = c((wV, af) => {
        var nf = zt(),
            Zw = ef(),
            Jw = rf(),
            eO = "[object Null]",
            tO = "[object Undefined]",
            of = nf ? nf.toStringTag : void 0;

        function rO(e) {
            return e == null ? e === void 0 ? tO : eO : of && of in Object(e) ? Zw(e) : Jw(e)
        }
        af.exports = rO
    });
    var Po = c((OV, sf) => {
        function nO(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        sf.exports = nO
    });
    var Lo = c((AV, uf) => {
        var iO = Po(),
            oO = iO(Object.getPrototypeOf, Object);
        uf.exports = oO
    });
    var gt = c((xV, cf) => {
        function aO(e) {
            return e != null && typeof e == "object"
        }
        cf.exports = aO
    });
    var No = c((SV, ff) => {
        var sO = Tt(),
            uO = Lo(),
            cO = gt(),
            lO = "[object Object]",
            fO = Function.prototype,
            dO = Object.prototype,
            lf = fO.toString,
            pO = dO.hasOwnProperty,
            gO = lf.call(Object);

        function vO(e) {
            if (!cO(e) || sO(e) != lO) return !1;
            var t = uO(e);
            if (t === null) return !0;
            var r = pO.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && lf.call(r) == gO
        }
        ff.exports = vO
    });
    var df = c(qo => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        qo.default = hO;

        function hO(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var pf = c((Mo, Do) => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        var yO = df(),
            mO = EO(yO);

        function EO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Kt;
        typeof self < "u" ? Kt = self : typeof window < "u" ? Kt = window : typeof global < "u" ? Kt = global : typeof Do < "u" ? Kt = Do : Kt = Function("return this")();
        var _O = (0, mO.default)(Kt);
        Mo.default = _O
    });
    var Fo = c(Lr => {
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = yf;
        var bO = No(),
            IO = hf(bO),
            TO = pf(),
            gf = hf(TO);

        function hf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var vf = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function yf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(yf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                u = a,
                s = !1;

            function d() {
                u === a && (u = a.slice())
            }

            function y() {
                return o
            }

            function h(T) {
                if (typeof T != "function") throw new Error("Expected listener to be a function.");
                var R = !0;
                return d(), u.push(T),
                    function() {
                        if (R) {
                            R = !1, d();
                            var L = u.indexOf(T);
                            u.splice(L, 1)
                        }
                    }
            }

            function v(T) {
                if (!(0, IO.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (s) throw new Error("Reducers may not dispatch actions.");
                try {
                    s = !0, o = i(o, T)
                } finally {
                    s = !1
                }
                for (var R = a = u, I = 0; I < R.length; I++) R[I]();
                return T
            }

            function m(T) {
                if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
                i = T, v({
                    type: vf.INIT
                })
            }

            function O() {
                var T, R = h;
                return T = {
                    subscribe: function(L) {
                        if (typeof L != "object") throw new TypeError("Expected the observer to be an object.");

                        function C() {
                            L.next && L.next(y())
                        }
                        C();
                        var q = R(C);
                        return {
                            unsubscribe: q
                        }
                    }
                }, T[gf.default] = function() {
                    return this
                }, T
            }
            return v({
                type: vf.INIT
            }), n = {
                dispatch: v,
                subscribe: h,
                getState: y,
                replaceReducer: m
            }, n[gf.default] = O, n
        }
    });
    var Go = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = wO;

        function wO(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var _f = c(Xo => {
        "use strict";
        Xo.__esModule = !0;
        Xo.default = RO;
        var mf = Fo(),
            OO = No(),
            LV = Ef(OO),
            AO = Go(),
            NV = Ef(AO);

        function Ef(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function xO(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function SO(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: mf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + mf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function RO(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var u;
            try {
                SO(r)
            } catch (s) {
                u = s
            }
            return function() {
                var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    y = arguments[1];
                if (u) throw u;
                if (!1) var h;
                for (var v = !1, m = {}, O = 0; O < o.length; O++) {
                    var T = o[O],
                        R = r[T],
                        I = d[T],
                        L = R(I, y);
                    if (typeof L > "u") {
                        var C = xO(T, y);
                        throw new Error(C)
                    }
                    m[T] = L, v = v || L !== I
                }
                return v ? m : d
            }
        }
    });
    var If = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = CO;

        function bf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function CO(e, t) {
            if (typeof e == "function") return bf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = bf(a, t))
            }
            return n
        }
    });
    var Vo = c(Wo => {
        "use strict";
        Wo.__esModule = !0;
        Wo.default = PO;

        function PO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var Tf = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        var LO = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Bo.default = MO;
        var NO = Vo(),
            qO = DO(NO);

        function DO(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function MO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var u = n(i, o, a),
                        s = u.dispatch,
                        d = [],
                        y = {
                            getState: u.getState,
                            dispatch: function(v) {
                                return s(v)
                            }
                        };
                    return d = t.map(function(h) {
                        return h(y)
                    }), s = qO.default.apply(void 0, d)(u.dispatch), LO({}, u, {
                        dispatch: s
                    })
                }
            }
        }
    });
    var Ho = c(Ve => {
        "use strict";
        Ve.__esModule = !0;
        Ve.compose = Ve.applyMiddleware = Ve.bindActionCreators = Ve.combineReducers = Ve.createStore = void 0;
        var FO = Fo(),
            kO = Yt(FO),
            GO = _f(),
            XO = Yt(GO),
            UO = If(),
            WO = Yt(UO),
            VO = Tf(),
            BO = Yt(VO),
            HO = Vo(),
            jO = Yt(HO),
            zO = Go(),
            kV = Yt(zO);

        function Yt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ve.createStore = kO.default;
        Ve.combineReducers = XO.default;
        Ve.bindActionCreators = WO.default;
        Ve.applyMiddleware = BO.default;
        Ve.compose = jO.default
    });
    var Ze, jo, st, KO, YO, An, $O, zo = ye(() => {
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, jo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, st = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, KO = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, YO = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, An = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, $O = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ge, QO, xn = ye(() => {
        "use strict";
        Ge = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, QO = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var ZO, wf = ye(() => {
        "use strict";
        ZO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var JO, eA, tA, rA, nA, iA, oA, Ko, Of = ye(() => {
        "use strict";
        xn();
        ({
            TRANSFORM_MOVE: JO,
            TRANSFORM_SCALE: eA,
            TRANSFORM_ROTATE: tA,
            TRANSFORM_SKEW: rA,
            STYLE_SIZE: nA,
            STYLE_FILTER: iA,
            STYLE_FONT_VARIATION: oA
        } = Ge), Ko = {
            [JO]: !0,
            [eA]: !0,
            [tA]: !0,
            [rA]: !0,
            [nA]: !0,
            [iA]: !0,
            [oA]: !0
        }
    });
    var Te = {};
    Fe(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IA,
        IX2_ANIMATION_FRAME_CHANGED: () => hA,
        IX2_CLEAR_REQUESTED: () => pA,
        IX2_ELEMENT_STATE_CHANGED: () => bA,
        IX2_EVENT_LISTENER_ADDED: () => gA,
        IX2_EVENT_STATE_CHANGED: () => vA,
        IX2_INSTANCE_ADDED: () => mA,
        IX2_INSTANCE_REMOVED: () => _A,
        IX2_INSTANCE_STARTED: () => EA,
        IX2_MEDIA_QUERIES_DEFINED: () => wA,
        IX2_PARAMETER_CHANGED: () => yA,
        IX2_PLAYBACK_REQUESTED: () => fA,
        IX2_PREVIEW_REQUESTED: () => lA,
        IX2_RAW_DATA_IMPORTED: () => aA,
        IX2_SESSION_INITIALIZED: () => sA,
        IX2_SESSION_STARTED: () => uA,
        IX2_SESSION_STOPPED: () => cA,
        IX2_STOP_REQUESTED: () => dA,
        IX2_TEST_FRAME_RENDERED: () => OA,
        IX2_VIEWPORT_WIDTH_CHANGED: () => TA
    });
    var aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, yA, mA, EA, _A, bA, IA, TA, wA, OA, Af = ye(() => {
        "use strict";
        aA = "IX2_RAW_DATA_IMPORTED", sA = "IX2_SESSION_INITIALIZED", uA = "IX2_SESSION_STARTED", cA = "IX2_SESSION_STOPPED", lA = "IX2_PREVIEW_REQUESTED", fA = "IX2_PLAYBACK_REQUESTED", dA = "IX2_STOP_REQUESTED", pA = "IX2_CLEAR_REQUESTED", gA = "IX2_EVENT_LISTENER_ADDED", vA = "IX2_EVENT_STATE_CHANGED", hA = "IX2_ANIMATION_FRAME_CHANGED", yA = "IX2_PARAMETER_CHANGED", mA = "IX2_INSTANCE_ADDED", EA = "IX2_INSTANCE_STARTED", _A = "IX2_INSTANCE_REMOVED", bA = "IX2_ELEMENT_STATE_CHANGED", IA = "IX2_ACTION_LIST_PLAYBACK_CHANGED", TA = "IX2_VIEWPORT_WIDTH_CHANGED", wA = "IX2_MEDIA_QUERIES_DEFINED", OA = "IX2_TEST_FRAME_RENDERED"
    });
    var Re = {};
    Fe(Re, {
        ABSTRACT_NODE: () => T0,
        AUTO: () => d0,
        BACKGROUND: () => a0,
        BACKGROUND_COLOR: () => o0,
        BAR_DELIMITER: () => v0,
        BORDER_COLOR: () => s0,
        BOUNDARY_SELECTOR: () => CA,
        CHILDREN: () => h0,
        COLON_DELIMITER: () => g0,
        COLOR: () => u0,
        COMMA_DELIMITER: () => p0,
        CONFIG_UNIT: () => kA,
        CONFIG_VALUE: () => qA,
        CONFIG_X_UNIT: () => DA,
        CONFIG_X_VALUE: () => PA,
        CONFIG_Y_UNIT: () => MA,
        CONFIG_Y_VALUE: () => LA,
        CONFIG_Z_UNIT: () => FA,
        CONFIG_Z_VALUE: () => NA,
        DISPLAY: () => c0,
        FILTER: () => t0,
        FLEX: () => l0,
        FONT_VARIATION_SETTINGS: () => r0,
        HEIGHT: () => i0,
        HTML_ELEMENT: () => b0,
        IMMEDIATE_CHILDREN: () => y0,
        IX2_ID_DELIMITER: () => AA,
        OPACITY: () => e0,
        PARENT: () => E0,
        PLAIN_OBJECT: () => I0,
        PRESERVE_3D: () => _0,
        RENDER_GENERAL: () => O0,
        RENDER_PLUGIN: () => x0,
        RENDER_STYLE: () => A0,
        RENDER_TRANSFORM: () => w0,
        ROTATE_X: () => KA,
        ROTATE_Y: () => YA,
        ROTATE_Z: () => $A,
        SCALE_3D: () => zA,
        SCALE_X: () => BA,
        SCALE_Y: () => HA,
        SCALE_Z: () => jA,
        SIBLINGS: () => m0,
        SKEW: () => QA,
        SKEW_X: () => ZA,
        SKEW_Y: () => JA,
        TRANSFORM: () => GA,
        TRANSLATE_3D: () => VA,
        TRANSLATE_X: () => XA,
        TRANSLATE_Y: () => UA,
        TRANSLATE_Z: () => WA,
        WF_PAGE: () => xA,
        WIDTH: () => n0,
        WILL_CHANGE: () => f0,
        W_MOD_IX: () => RA,
        W_MOD_JS: () => SA
    });
    var AA, xA, SA, RA, CA, PA, LA, NA, qA, DA, MA, FA, kA, GA, XA, UA, WA, VA, BA, HA, jA, zA, KA, YA, $A, QA, ZA, JA, e0, t0, r0, n0, i0, o0, a0, s0, u0, c0, l0, f0, d0, p0, g0, v0, h0, y0, m0, E0, _0, b0, I0, T0, w0, O0, A0, x0, xf = ye(() => {
        "use strict";
        AA = "|", xA = "data-wf-page", SA = "w-mod-js", RA = "w-mod-ix", CA = ".w-dyn-item", PA = "xValue", LA = "yValue", NA = "zValue", qA = "value", DA = "xUnit", MA = "yUnit", FA = "zUnit", kA = "unit", GA = "transform", XA = "translateX", UA = "translateY", WA = "translateZ", VA = "translate3d", BA = "scaleX", HA = "scaleY", jA = "scaleZ", zA = "scale3d", KA = "rotateX", YA = "rotateY", $A = "rotateZ", QA = "skew", ZA = "skewX", JA = "skewY", e0 = "opacity", t0 = "filter", r0 = "font-variation-settings", n0 = "width", i0 = "height", o0 = "backgroundColor", a0 = "background", s0 = "borderColor", u0 = "color", c0 = "display", l0 = "flex", f0 = "willChange", d0 = "AUTO", p0 = ",", g0 = ":", v0 = "|", h0 = "CHILDREN", y0 = "IMMEDIATE_CHILDREN", m0 = "SIBLINGS", E0 = "PARENT", _0 = "preserve-3d", b0 = "HTML_ELEMENT", I0 = "PLAIN_OBJECT", T0 = "ABSTRACT_NODE", w0 = "RENDER_TRANSFORM", O0 = "RENDER_GENERAL", A0 = "RENDER_STYLE", x0 = "RENDER_PLUGIN"
    });
    var Sf = {};
    Fe(Sf, {
        ActionAppliesTo: () => QO,
        ActionTypeConsts: () => Ge,
        EventAppliesTo: () => jo,
        EventBasedOn: () => st,
        EventContinuousMouseAxes: () => KO,
        EventLimitAffectedElements: () => YO,
        EventTypeConsts: () => Ze,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Re,
        InteractionTypeConsts: () => ZO,
        QuickEffectDirectionConsts: () => $O,
        QuickEffectIds: () => An,
        ReducedMotionTypes: () => Ko
    });
    var Xe = ye(() => {
        "use strict";
        zo();
        xn();
        wf();
        Of();
        Af();
        xf();
        xn();
        zo()
    });
    var S0, Rf, Cf = ye(() => {
        "use strict";
        Xe();
        ({
            IX2_RAW_DATA_IMPORTED: S0
        } = Te), Rf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case S0:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var $t = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        var R0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        _e.clone = Rn;
        _e.addLast = Nf;
        _e.addFirst = qf;
        _e.removeLast = Df;
        _e.removeFirst = Mf;
        _e.insert = Ff;
        _e.removeAt = kf;
        _e.replaceAt = Gf;
        _e.getIn = Cn;
        _e.set = Pn;
        _e.setIn = Ln;
        _e.update = Uf;
        _e.updateIn = Wf;
        _e.merge = Vf;
        _e.mergeDeep = Bf;
        _e.mergeIn = Hf;
        _e.omit = jf;
        _e.addDefaults = zf;
        var Pf = "INVALID_ARGS";

        function Lf(e) {
            throw new Error(e)
        }

        function Yo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var C0 = {}.hasOwnProperty;

        function Rn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ue(e, t, r) {
            var n = r;
            n == null && Lf(Pf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) a[u - 3] = arguments[u];
            for (var s = 0; s < a.length; s++) {
                var d = a[s];
                if (d != null) {
                    var y = Yo(d);
                    if (y.length)
                        for (var h = 0; h <= y.length; h++) {
                            var v = y[h];
                            if (!(e && n[v] !== void 0)) {
                                var m = d[v];
                                t && Sn(n[v]) && Sn(m) && (m = Ue(e, t, n[v], m)), !(m === void 0 || m === n[v]) && (i || (i = !0, n = Rn(n)), n[v] = m)
                            }
                        }
                }
            }
            return n
        }

        function Sn(e) {
            var t = typeof e > "u" ? "undefined" : R0(e);
            return e != null && (t === "object" || t === "function")
        }

        function Nf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function qf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Df(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Mf(e) {
            return e.length ? e.slice(1) : e
        }

        function Ff(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function kf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Gf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Cn(e, t) {
            if (!Array.isArray(t) && Lf(Pf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i], r === void 0) return r
                }
                return r
            }
        }

        function Pn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ?? n;
            if (i[t] === r) return i;
            var o = Rn(i);
            return o[t] = r, o
        }

        function Xf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = Sn(e) && Sn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Xf(a, t, r, n + 1)
            }
            return Pn(e, o, i)
        }

        function Ln(e, t, r) {
            return t.length ? Xf(e, t, r, 0) : r
        }

        function Uf(e, t, r) {
            var n = e?.[t],
                i = r(n);
            return Pn(e, t, i)
        }

        function Wf(e, t, r) {
            var n = Cn(e, t),
                i = r(n);
            return Ln(e, t, i)
        }

        function Vf(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(u)) : Ue(!1, !1, e, t, r, n, i, o)
        }

        function Bf(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(u)) : Ue(!1, !0, e, t, r, n, i, o)
        }

        function Hf(e, t, r, n, i, o, a) {
            var u = Cn(e, t);
            u == null && (u = {});
            for (var s = void 0, d = arguments.length, y = Array(d > 7 ? d - 7 : 0), h = 7; h < d; h++) y[h - 7] = arguments[h];
            return y.length ? s = Ue.call.apply(Ue, [null, !1, !1, u, r, n, i, o, a].concat(y)) : s = Ue(!1, !1, u, r, n, i, o, a), Ln(e, t, s)
        }

        function jf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (C0.call(e, r[i])) {
                    n = !0;
                    break
                } if (!n) return e;
            for (var o = {}, a = Yo(e), u = 0; u < a.length; u++) {
                var s = a[u];
                r.indexOf(s) >= 0 || (o[s] = e[s])
            }
            return o
        }

        function zf(e, t, r, n, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
            return u.length ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(u)) : Ue(!0, !1, e, t, r, n, i, o)
        }
        var P0 = {
            clone: Rn,
            addLast: Nf,
            addFirst: qf,
            removeLast: Df,
            removeFirst: Mf,
            insert: Ff,
            removeAt: kf,
            replaceAt: Gf,
            getIn: Cn,
            set: Pn,
            setIn: Ln,
            update: Uf,
            updateIn: Wf,
            merge: Vf,
            mergeDeep: Bf,
            mergeIn: Hf,
            omit: jf,
            addDefaults: zf
        };
        _e.default = P0
    });
    var Yf, L0, N0, q0, D0, M0, Kf, $f, Qf = ye(() => {
        "use strict";
        Xe();
        Yf = le($t()), {
            IX2_PREVIEW_REQUESTED: L0,
            IX2_PLAYBACK_REQUESTED: N0,
            IX2_STOP_REQUESTED: q0,
            IX2_CLEAR_REQUESTED: D0
        } = Te, M0 = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Kf = Object.create(null, {
            [L0]: {
                value: "preview"
            },
            [N0]: {
                value: "playback"
            },
            [q0]: {
                value: "stop"
            },
            [D0]: {
                value: "clear"
            }
        }), $f = (e = M0, t) => {
            if (t.type in Kf) {
                let r = [Kf[t.type]];
                return (0, Yf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    });
    var Le, F0, k0, G0, X0, U0, W0, V0, B0, H0, j0, Zf, z0, Jf, ed = ye(() => {
        "use strict";
        Xe();
        Le = le($t()), {
            IX2_SESSION_INITIALIZED: F0,
            IX2_SESSION_STARTED: k0,
            IX2_TEST_FRAME_RENDERED: G0,
            IX2_SESSION_STOPPED: X0,
            IX2_EVENT_LISTENER_ADDED: U0,
            IX2_EVENT_STATE_CHANGED: W0,
            IX2_ANIMATION_FRAME_CHANGED: V0,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: B0,
            IX2_VIEWPORT_WIDTH_CHANGED: H0,
            IX2_MEDIA_QUERIES_DEFINED: j0
        } = Te, Zf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, z0 = 20, Jf = (e = Zf, t) => {
            switch (t.type) {
                case F0: {
                    let {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    } = t.payload;
                    return (0, Le.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
                case k0:
                    return (0, Le.set)(e, "active", !0);
                case G0: {
                    let {
                        payload: {
                            step: r = z0
                        }
                    } = t;
                    return (0, Le.set)(e, "tick", e.tick + r)
                }
                case X0:
                    return Zf;
                case V0: {
                    let {
                        payload: {
                            now: r
                        }
                    } = t;
                    return (0, Le.set)(e, "tick", r)
                }
                case U0: {
                    let r = (0, Le.addLast)(e.eventListeners, t.payload);
                    return (0, Le.set)(e, "eventListeners", r)
                }
                case W0: {
                    let {
                        stateKey: r,
                        newState: n
                    } = t.payload;
                    return (0, Le.setIn)(e, ["eventState", r], n)
                }
                case B0: {
                    let {
                        actionListId: r,
                        isPlaying: n
                    } = t.payload;
                    return (0, Le.setIn)(e, ["playbackState", r], n)
                }
                case H0: {
                    let {
                        width: r,
                        mediaQueries: n
                    } = t.payload, i = n.length, o = null;
                    for (let a = 0; a < i; a++) {
                        let {
                            key: u,
                            min: s,
                            max: d
                        } = n[a];
                        if (r >= s && r <= d) {
                            o = u;
                            break
                        }
                    }
                    return (0, Le.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
                case j0:
                    return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var rd = c((iB, td) => {
        function K0() {
            this.__data__ = [], this.size = 0
        }
        td.exports = K0
    });
    var Nn = c((oB, nd) => {
        function Y0(e, t) {
            return e === t || e !== e && t !== t
        }
        nd.exports = Y0
    });
    var Nr = c((aB, id) => {
        var $0 = Nn();

        function Q0(e, t) {
            for (var r = e.length; r--;)
                if ($0(e[r][0], t)) return r;
            return -1
        }
        id.exports = Q0
    });
    var ad = c((sB, od) => {
        var Z0 = Nr(),
            J0 = Array.prototype,
            ex = J0.splice;

        function tx(e) {
            var t = this.__data__,
                r = Z0(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : ex.call(t, r, 1), --this.size, !0
        }
        od.exports = tx
    });
    var ud = c((uB, sd) => {
        var rx = Nr();

        function nx(e) {
            var t = this.__data__,
                r = rx(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        sd.exports = nx
    });
    var ld = c((cB, cd) => {
        var ix = Nr();

        function ox(e) {
            return ix(this.__data__, e) > -1
        }
        cd.exports = ox
    });
    var dd = c((lB, fd) => {
        var ax = Nr();

        function sx(e, t) {
            var r = this.__data__,
                n = ax(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        fd.exports = sx
    });
    var qr = c((fB, pd) => {
        var ux = rd(),
            cx = ad(),
            lx = ud(),
            fx = ld(),
            dx = dd();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = ux;
        Qt.prototype.delete = cx;
        Qt.prototype.get = lx;
        Qt.prototype.has = fx;
        Qt.prototype.set = dx;
        pd.exports = Qt
    });
    var vd = c((dB, gd) => {
        var px = qr();

        function gx() {
            this.__data__ = new px, this.size = 0
        }
        gd.exports = gx
    });
    var yd = c((pB, hd) => {
        function vx(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        hd.exports = vx
    });
    var Ed = c((gB, md) => {
        function hx(e) {
            return this.__data__.get(e)
        }
        md.exports = hx
    });
    var bd = c((vB, _d) => {
        function yx(e) {
            return this.__data__.has(e)
        }
        _d.exports = yx
    });
    var ut = c((hB, Id) => {
        function mx(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Id.exports = mx
    });
    var $o = c((yB, Td) => {
        var Ex = Tt(),
            _x = ut(),
            bx = "[object AsyncFunction]",
            Ix = "[object Function]",
            Tx = "[object GeneratorFunction]",
            wx = "[object Proxy]";

        function Ox(e) {
            if (!_x(e)) return !1;
            var t = Ex(e);
            return t == Ix || t == Tx || t == bx || t == wx
        }
        Td.exports = Ox
    });
    var Od = c((mB, wd) => {
        var Ax = Qe(),
            xx = Ax["__core-js_shared__"];
        wd.exports = xx
    });
    var Sd = c((EB, xd) => {
        var Qo = Od(),
            Ad = function() {
                var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function Sx(e) {
            return !!Ad && Ad in e
        }
        xd.exports = Sx
    });
    var Zo = c((_B, Rd) => {
        var Rx = Function.prototype,
            Cx = Rx.toString;

        function Px(e) {
            if (e != null) {
                try {
                    return Cx.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Rd.exports = Px
    });
    var Pd = c((bB, Cd) => {
        var Lx = $o(),
            Nx = Sd(),
            qx = ut(),
            Dx = Zo(),
            Mx = /[\\^$.*+?()[\]{}|]/g,
            Fx = /^\[object .+?Constructor\]$/,
            kx = Function.prototype,
            Gx = Object.prototype,
            Xx = kx.toString,
            Ux = Gx.hasOwnProperty,
            Wx = RegExp("^" + Xx.call(Ux).replace(Mx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Vx(e) {
            if (!qx(e) || Nx(e)) return !1;
            var t = Lx(e) ? Wx : Fx;
            return t.test(Dx(e))
        }
        Cd.exports = Vx
    });
    var Nd = c((IB, Ld) => {
        function Bx(e, t) {
            return e?.[t]
        }
        Ld.exports = Bx
    });
    var wt = c((TB, qd) => {
        var Hx = Pd(),
            jx = Nd();

        function zx(e, t) {
            var r = jx(e, t);
            return Hx(r) ? r : void 0
        }
        qd.exports = zx
    });
    var qn = c((wB, Dd) => {
        var Kx = wt(),
            Yx = Qe(),
            $x = Kx(Yx, "Map");
        Dd.exports = $x
    });
    var Dr = c((OB, Md) => {
        var Qx = wt(),
            Zx = Qx(Object, "create");
        Md.exports = Zx
    });
    var Gd = c((AB, kd) => {
        var Fd = Dr();

        function Jx() {
            this.__data__ = Fd ? Fd(null) : {}, this.size = 0
        }
        kd.exports = Jx
    });
    var Ud = c((xB, Xd) => {
        function eS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Xd.exports = eS
    });
    var Vd = c((SB, Wd) => {
        var tS = Dr(),
            rS = "__lodash_hash_undefined__",
            nS = Object.prototype,
            iS = nS.hasOwnProperty;

        function oS(e) {
            var t = this.__data__;
            if (tS) {
                var r = t[e];
                return r === rS ? void 0 : r
            }
            return iS.call(t, e) ? t[e] : void 0
        }
        Wd.exports = oS
    });
    var Hd = c((RB, Bd) => {
        var aS = Dr(),
            sS = Object.prototype,
            uS = sS.hasOwnProperty;

        function cS(e) {
            var t = this.__data__;
            return aS ? t[e] !== void 0 : uS.call(t, e)
        }
        Bd.exports = cS
    });
    var zd = c((CB, jd) => {
        var lS = Dr(),
            fS = "__lodash_hash_undefined__";

        function dS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = lS && t === void 0 ? fS : t, this
        }
        jd.exports = dS
    });
    var Yd = c((PB, Kd) => {
        var pS = Gd(),
            gS = Ud(),
            vS = Vd(),
            hS = Hd(),
            yS = zd();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = pS;
        Zt.prototype.delete = gS;
        Zt.prototype.get = vS;
        Zt.prototype.has = hS;
        Zt.prototype.set = yS;
        Kd.exports = Zt
    });
    var Zd = c((LB, Qd) => {
        var $d = Yd(),
            mS = qr(),
            ES = qn();

        function _S() {
            this.size = 0, this.__data__ = {
                hash: new $d,
                map: new(ES || mS),
                string: new $d
            }
        }
        Qd.exports = _S
    });
    var ep = c((NB, Jd) => {
        function bS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Jd.exports = bS
    });
    var Mr = c((qB, tp) => {
        var IS = ep();

        function TS(e, t) {
            var r = e.__data__;
            return IS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        tp.exports = TS
    });
    var np = c((DB, rp) => {
        var wS = Mr();

        function OS(e) {
            var t = wS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        rp.exports = OS
    });
    var op = c((MB, ip) => {
        var AS = Mr();

        function xS(e) {
            return AS(this, e).get(e)
        }
        ip.exports = xS
    });
    var sp = c((FB, ap) => {
        var SS = Mr();

        function RS(e) {
            return SS(this, e).has(e)
        }
        ap.exports = RS
    });
    var cp = c((kB, up) => {
        var CS = Mr();

        function PS(e, t) {
            var r = CS(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        up.exports = PS
    });
    var Dn = c((GB, lp) => {
        var LS = Zd(),
            NS = np(),
            qS = op(),
            DS = sp(),
            MS = cp();

        function Jt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Jt.prototype.clear = LS;
        Jt.prototype.delete = NS;
        Jt.prototype.get = qS;
        Jt.prototype.has = DS;
        Jt.prototype.set = MS;
        lp.exports = Jt
    });
    var dp = c((XB, fp) => {
        var FS = qr(),
            kS = qn(),
            GS = Dn(),
            XS = 200;

        function US(e, t) {
            var r = this.__data__;
            if (r instanceof FS) {
                var n = r.__data__;
                if (!kS || n.length < XS - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new GS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        fp.exports = US
    });
    var Jo = c((UB, pp) => {
        var WS = qr(),
            VS = vd(),
            BS = yd(),
            HS = Ed(),
            jS = bd(),
            zS = dp();

        function er(e) {
            var t = this.__data__ = new WS(e);
            this.size = t.size
        }
        er.prototype.clear = VS;
        er.prototype.delete = BS;
        er.prototype.get = HS;
        er.prototype.has = jS;
        er.prototype.set = zS;
        pp.exports = er
    });
    var vp = c((WB, gp) => {
        var KS = "__lodash_hash_undefined__";

        function YS(e) {
            return this.__data__.set(e, KS), this
        }
        gp.exports = YS
    });
    var yp = c((VB, hp) => {
        function $S(e) {
            return this.__data__.has(e)
        }
        hp.exports = $S
    });
    var Ep = c((BB, mp) => {
        var QS = Dn(),
            ZS = vp(),
            JS = yp();

        function Mn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new QS; ++t < r;) this.add(e[t])
        }
        Mn.prototype.add = Mn.prototype.push = ZS;
        Mn.prototype.has = JS;
        mp.exports = Mn
    });
    var bp = c((HB, _p) => {
        function eR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        _p.exports = eR
    });
    var Tp = c((jB, Ip) => {
        function tR(e, t) {
            return e.has(t)
        }
        Ip.exports = tR
    });
    var ea = c((zB, wp) => {
        var rR = Ep(),
            nR = bp(),
            iR = Tp(),
            oR = 1,
            aR = 2;

        function sR(e, t, r, n, i, o) {
            var a = r & oR,
                u = e.length,
                s = t.length;
            if (u != s && !(a && s > u)) return !1;
            var d = o.get(e),
                y = o.get(t);
            if (d && y) return d == t && y == e;
            var h = -1,
                v = !0,
                m = r & aR ? new rR : void 0;
            for (o.set(e, t), o.set(t, e); ++h < u;) {
                var O = e[h],
                    T = t[h];
                if (n) var R = a ? n(T, O, h, t, e, o) : n(O, T, h, e, t, o);
                if (R !== void 0) {
                    if (R) continue;
                    v = !1;
                    break
                }
                if (m) {
                    if (!nR(t, function(I, L) {
                            if (!iR(m, L) && (O === I || i(O, I, r, n, o))) return m.push(L)
                        })) {
                        v = !1;
                        break
                    }
                } else if (!(O === T || i(O, T, r, n, o))) {
                    v = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), v
        }
        wp.exports = sR
    });
    var Ap = c((KB, Op) => {
        var uR = Qe(),
            cR = uR.Uint8Array;
        Op.exports = cR
    });
    var Sp = c((YB, xp) => {
        function lR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        xp.exports = lR
    });
    var Cp = c(($B, Rp) => {
        function fR(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Rp.exports = fR
    });
    var Dp = c((QB, qp) => {
        var Pp = zt(),
            Lp = Ap(),
            dR = Nn(),
            pR = ea(),
            gR = Sp(),
            vR = Cp(),
            hR = 1,
            yR = 2,
            mR = "[object Boolean]",
            ER = "[object Date]",
            _R = "[object Error]",
            bR = "[object Map]",
            IR = "[object Number]",
            TR = "[object RegExp]",
            wR = "[object Set]",
            OR = "[object String]",
            AR = "[object Symbol]",
            xR = "[object ArrayBuffer]",
            SR = "[object DataView]",
            Np = Pp ? Pp.prototype : void 0,
            ta = Np ? Np.valueOf : void 0;

        function RR(e, t, r, n, i, o, a) {
            switch (r) {
                case SR:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case xR:
                    return !(e.byteLength != t.byteLength || !o(new Lp(e), new Lp(t)));
                case mR:
                case ER:
                case IR:
                    return dR(+e, +t);
                case _R:
                    return e.name == t.name && e.message == t.message;
                case TR:
                case OR:
                    return e == t + "";
                case bR:
                    var u = gR;
                case wR:
                    var s = n & hR;
                    if (u || (u = vR), e.size != t.size && !s) return !1;
                    var d = a.get(e);
                    if (d) return d == t;
                    n |= yR, a.set(e, t);
                    var y = pR(u(e), u(t), n, i, o, a);
                    return a.delete(e), y;
                case AR:
                    if (ta) return ta.call(e) == ta.call(t)
            }
            return !1
        }
        qp.exports = RR
    });
    var Fn = c((ZB, Mp) => {
        function CR(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Mp.exports = CR
    });
    var we = c((JB, Fp) => {
        var PR = Array.isArray;
        Fp.exports = PR
    });
    var ra = c((eH, kp) => {
        var LR = Fn(),
            NR = we();

        function qR(e, t, r) {
            var n = t(e);
            return NR(e) ? n : LR(n, r(e))
        }
        kp.exports = qR
    });
    var Xp = c((tH, Gp) => {
        function DR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Gp.exports = DR
    });
    var na = c((rH, Up) => {
        function MR() {
            return []
        }
        Up.exports = MR
    });
    var ia = c((nH, Vp) => {
        var FR = Xp(),
            kR = na(),
            GR = Object.prototype,
            XR = GR.propertyIsEnumerable,
            Wp = Object.getOwnPropertySymbols,
            UR = Wp ? function(e) {
                return e == null ? [] : (e = Object(e), FR(Wp(e), function(t) {
                    return XR.call(e, t)
                }))
            } : kR;
        Vp.exports = UR
    });
    var Hp = c((iH, Bp) => {
        function WR(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Bp.exports = WR
    });
    var zp = c((oH, jp) => {
        var VR = Tt(),
            BR = gt(),
            HR = "[object Arguments]";

        function jR(e) {
            return BR(e) && VR(e) == HR
        }
        jp.exports = jR
    });
    var Fr = c((aH, $p) => {
        var Kp = zp(),
            zR = gt(),
            Yp = Object.prototype,
            KR = Yp.hasOwnProperty,
            YR = Yp.propertyIsEnumerable,
            $R = Kp(function() {
                return arguments
            }()) ? Kp : function(e) {
                return zR(e) && KR.call(e, "callee") && !YR.call(e, "callee")
            };
        $p.exports = $R
    });
    var Zp = c((sH, Qp) => {
        function QR() {
            return !1
        }
        Qp.exports = QR
    });
    var kn = c((kr, tr) => {
        var ZR = Qe(),
            JR = Zp(),
            tg = typeof kr == "object" && kr && !kr.nodeType && kr,
            Jp = tg && typeof tr == "object" && tr && !tr.nodeType && tr,
            eC = Jp && Jp.exports === tg,
            eg = eC ? ZR.Buffer : void 0,
            tC = eg ? eg.isBuffer : void 0,
            rC = tC || JR;
        tr.exports = rC
    });
    var Gn = c((uH, rg) => {
        var nC = 9007199254740991,
            iC = /^(?:0|[1-9]\d*)$/;

        function oC(e, t) {
            var r = typeof e;
            return t = t ?? nC, !!t && (r == "number" || r != "symbol" && iC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        rg.exports = oC
    });
    var Xn = c((cH, ng) => {
        var aC = 9007199254740991;

        function sC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= aC
        }
        ng.exports = sC
    });
    var og = c((lH, ig) => {
        var uC = Tt(),
            cC = Xn(),
            lC = gt(),
            fC = "[object Arguments]",
            dC = "[object Array]",
            pC = "[object Boolean]",
            gC = "[object Date]",
            vC = "[object Error]",
            hC = "[object Function]",
            yC = "[object Map]",
            mC = "[object Number]",
            EC = "[object Object]",
            _C = "[object RegExp]",
            bC = "[object Set]",
            IC = "[object String]",
            TC = "[object WeakMap]",
            wC = "[object ArrayBuffer]",
            OC = "[object DataView]",
            AC = "[object Float32Array]",
            xC = "[object Float64Array]",
            SC = "[object Int8Array]",
            RC = "[object Int16Array]",
            CC = "[object Int32Array]",
            PC = "[object Uint8Array]",
            LC = "[object Uint8ClampedArray]",
            NC = "[object Uint16Array]",
            qC = "[object Uint32Array]",
            he = {};
        he[AC] = he[xC] = he[SC] = he[RC] = he[CC] = he[PC] = he[LC] = he[NC] = he[qC] = !0;
        he[fC] = he[dC] = he[wC] = he[pC] = he[OC] = he[gC] = he[vC] = he[hC] = he[yC] = he[mC] = he[EC] = he[_C] = he[bC] = he[IC] = he[TC] = !1;

        function DC(e) {
            return lC(e) && cC(e.length) && !!he[uC(e)]
        }
        ig.exports = DC
    });
    var sg = c((fH, ag) => {
        function MC(e) {
            return function(t) {
                return e(t)
            }
        }
        ag.exports = MC
    });
    var cg = c((Gr, rr) => {
        var FC = Co(),
            ug = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
            Xr = ug && typeof rr == "object" && rr && !rr.nodeType && rr,
            kC = Xr && Xr.exports === ug,
            oa = kC && FC.process,
            GC = function() {
                try {
                    var e = Xr && Xr.require && Xr.require("util").types;
                    return e || oa && oa.binding && oa.binding("util")
                } catch {}
            }();
        rr.exports = GC
    });
    var Un = c((dH, dg) => {
        var XC = og(),
            UC = sg(),
            lg = cg(),
            fg = lg && lg.isTypedArray,
            WC = fg ? UC(fg) : XC;
        dg.exports = WC
    });
    var aa = c((pH, pg) => {
        var VC = Hp(),
            BC = Fr(),
            HC = we(),
            jC = kn(),
            zC = Gn(),
            KC = Un(),
            YC = Object.prototype,
            $C = YC.hasOwnProperty;

        function QC(e, t) {
            var r = HC(e),
                n = !r && BC(e),
                i = !r && !n && jC(e),
                o = !r && !n && !i && KC(e),
                a = r || n || i || o,
                u = a ? VC(e.length, String) : [],
                s = u.length;
            for (var d in e)(t || $C.call(e, d)) && !(a && (d == "length" || i && (d == "offset" || d == "parent") || o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || zC(d, s))) && u.push(d);
            return u
        }
        pg.exports = QC
    });
    var Wn = c((gH, gg) => {
        var ZC = Object.prototype;

        function JC(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || ZC;
            return e === r
        }
        gg.exports = JC
    });
    var hg = c((vH, vg) => {
        var eP = Po(),
            tP = eP(Object.keys, Object);
        vg.exports = tP
    });
    var Vn = c((hH, yg) => {
        var rP = Wn(),
            nP = hg(),
            iP = Object.prototype,
            oP = iP.hasOwnProperty;

        function aP(e) {
            if (!rP(e)) return nP(e);
            var t = [];
            for (var r in Object(e)) oP.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        yg.exports = aP
    });
    var qt = c((yH, mg) => {
        var sP = $o(),
            uP = Xn();

        function cP(e) {
            return e != null && uP(e.length) && !sP(e)
        }
        mg.exports = cP
    });
    var Ur = c((mH, Eg) => {
        var lP = aa(),
            fP = Vn(),
            dP = qt();

        function pP(e) {
            return dP(e) ? lP(e) : fP(e)
        }
        Eg.exports = pP
    });
    var bg = c((EH, _g) => {
        var gP = ra(),
            vP = ia(),
            hP = Ur();

        function yP(e) {
            return gP(e, hP, vP)
        }
        _g.exports = yP
    });
    var wg = c((_H, Tg) => {
        var Ig = bg(),
            mP = 1,
            EP = Object.prototype,
            _P = EP.hasOwnProperty;

        function bP(e, t, r, n, i, o) {
            var a = r & mP,
                u = Ig(e),
                s = u.length,
                d = Ig(t),
                y = d.length;
            if (s != y && !a) return !1;
            for (var h = s; h--;) {
                var v = u[h];
                if (!(a ? v in t : _P.call(t, v))) return !1
            }
            var m = o.get(e),
                O = o.get(t);
            if (m && O) return m == t && O == e;
            var T = !0;
            o.set(e, t), o.set(t, e);
            for (var R = a; ++h < s;) {
                v = u[h];
                var I = e[v],
                    L = t[v];
                if (n) var C = a ? n(L, I, v, t, e, o) : n(I, L, v, e, t, o);
                if (!(C === void 0 ? I === L || i(I, L, r, n, o) : C)) {
                    T = !1;
                    break
                }
                R || (R = v == "constructor")
            }
            if (T && !R) {
                var q = e.constructor,
                    M = t.constructor;
                q != M && "constructor" in e && "constructor" in t && !(typeof q == "function" && q instanceof q && typeof M == "function" && M instanceof M) && (T = !1)
            }
            return o.delete(e), o.delete(t), T
        }
        Tg.exports = bP
    });
    var Ag = c((bH, Og) => {
        var IP = wt(),
            TP = Qe(),
            wP = IP(TP, "DataView");
        Og.exports = wP
    });
    var Sg = c((IH, xg) => {
        var OP = wt(),
            AP = Qe(),
            xP = OP(AP, "Promise");
        xg.exports = xP
    });
    var Cg = c((TH, Rg) => {
        var SP = wt(),
            RP = Qe(),
            CP = SP(RP, "Set");
        Rg.exports = CP
    });
    var sa = c((wH, Pg) => {
        var PP = wt(),
            LP = Qe(),
            NP = PP(LP, "WeakMap");
        Pg.exports = NP
    });
    var Bn = c((OH, kg) => {
        var ua = Ag(),
            ca = qn(),
            la = Sg(),
            fa = Cg(),
            da = sa(),
            Fg = Tt(),
            nr = Zo(),
            Lg = "[object Map]",
            qP = "[object Object]",
            Ng = "[object Promise]",
            qg = "[object Set]",
            Dg = "[object WeakMap]",
            Mg = "[object DataView]",
            DP = nr(ua),
            MP = nr(ca),
            FP = nr(la),
            kP = nr(fa),
            GP = nr(da),
            Dt = Fg;
        (ua && Dt(new ua(new ArrayBuffer(1))) != Mg || ca && Dt(new ca) != Lg || la && Dt(la.resolve()) != Ng || fa && Dt(new fa) != qg || da && Dt(new da) != Dg) && (Dt = function(e) {
            var t = Fg(e),
                r = t == qP ? e.constructor : void 0,
                n = r ? nr(r) : "";
            if (n) switch (n) {
                case DP:
                    return Mg;
                case MP:
                    return Lg;
                case FP:
                    return Ng;
                case kP:
                    return qg;
                case GP:
                    return Dg
            }
            return t
        });
        kg.exports = Dt
    });
    var jg = c((AH, Hg) => {
        var pa = Jo(),
            XP = ea(),
            UP = Dp(),
            WP = wg(),
            Gg = Bn(),
            Xg = we(),
            Ug = kn(),
            VP = Un(),
            BP = 1,
            Wg = "[object Arguments]",
            Vg = "[object Array]",
            Hn = "[object Object]",
            HP = Object.prototype,
            Bg = HP.hasOwnProperty;

        function jP(e, t, r, n, i, o) {
            var a = Xg(e),
                u = Xg(t),
                s = a ? Vg : Gg(e),
                d = u ? Vg : Gg(t);
            s = s == Wg ? Hn : s, d = d == Wg ? Hn : d;
            var y = s == Hn,
                h = d == Hn,
                v = s == d;
            if (v && Ug(e)) {
                if (!Ug(t)) return !1;
                a = !0, y = !1
            }
            if (v && !y) return o || (o = new pa), a || VP(e) ? XP(e, t, r, n, i, o) : UP(e, t, s, r, n, i, o);
            if (!(r & BP)) {
                var m = y && Bg.call(e, "__wrapped__"),
                    O = h && Bg.call(t, "__wrapped__");
                if (m || O) {
                    var T = m ? e.value() : e,
                        R = O ? t.value() : t;
                    return o || (o = new pa), i(T, R, r, n, o)
                }
            }
            return v ? (o || (o = new pa), WP(e, t, r, n, i, o)) : !1
        }
        Hg.exports = jP
    });
    var ga = c((xH, Yg) => {
        var zP = jg(),
            zg = gt();

        function Kg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !zg(e) && !zg(t) ? e !== e && t !== t : zP(e, t, r, n, Kg, i)
        }
        Yg.exports = Kg
    });
    var Qg = c((SH, $g) => {
        var KP = Jo(),
            YP = ga(),
            $P = 1,
            QP = 2;

        function ZP(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var u = r[i];
                if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++i < o;) {
                u = r[i];
                var s = u[0],
                    d = e[s],
                    y = u[1];
                if (a && u[2]) {
                    if (d === void 0 && !(s in e)) return !1
                } else {
                    var h = new KP;
                    if (n) var v = n(d, y, s, e, t, h);
                    if (!(v === void 0 ? YP(y, d, $P | QP, n, h) : v)) return !1
                }
            }
            return !0
        }
        $g.exports = ZP
    });
    var va = c((RH, Zg) => {
        var JP = ut();

        function eL(e) {
            return e === e && !JP(e)
        }
        Zg.exports = eL
    });
    var ev = c((CH, Jg) => {
        var tL = va(),
            rL = Ur();

        function nL(e) {
            for (var t = rL(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, tL(i)]
            }
            return t
        }
        Jg.exports = nL
    });
    var ha = c((PH, tv) => {
        function iL(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        tv.exports = iL
    });
    var nv = c((LH, rv) => {
        var oL = Qg(),
            aL = ev(),
            sL = ha();

        function uL(e) {
            var t = aL(e);
            return t.length == 1 && t[0][2] ? sL(t[0][0], t[0][1]) : function(r) {
                return r === e || oL(r, e, t)
            }
        }
        rv.exports = uL
    });
    var Wr = c((NH, iv) => {
        var cL = Tt(),
            lL = gt(),
            fL = "[object Symbol]";

        function dL(e) {
            return typeof e == "symbol" || lL(e) && cL(e) == fL
        }
        iv.exports = dL
    });
    var jn = c((qH, ov) => {
        var pL = we(),
            gL = Wr(),
            vL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            hL = /^\w*$/;

        function yL(e, t) {
            if (pL(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || gL(e) ? !0 : hL.test(e) || !vL.test(e) || t != null && e in Object(t)
        }
        ov.exports = yL
    });
    var uv = c((DH, sv) => {
        var av = Dn(),
            mL = "Expected a function";

        function ya(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(mL);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(ya.Cache || av), r
        }
        ya.Cache = av;
        sv.exports = ya
    });
    var lv = c((MH, cv) => {
        var EL = uv(),
            _L = 500;

        function bL(e) {
            var t = EL(e, function(n) {
                    return r.size === _L && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        cv.exports = bL
    });
    var dv = c((FH, fv) => {
        var IL = lv(),
            TL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            wL = /\\(\\)?/g,
            OL = IL(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(TL, function(r, n, i, o) {
                    t.push(i ? o.replace(wL, "$1") : n || r)
                }), t
            });
        fv.exports = OL
    });
    var ma = c((kH, pv) => {
        function AL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        pv.exports = AL
    });
    var Ev = c((GH, mv) => {
        var gv = zt(),
            xL = ma(),
            SL = we(),
            RL = Wr(),
            CL = 1 / 0,
            vv = gv ? gv.prototype : void 0,
            hv = vv ? vv.toString : void 0;

        function yv(e) {
            if (typeof e == "string") return e;
            if (SL(e)) return xL(e, yv) + "";
            if (RL(e)) return hv ? hv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -CL ? "-0" : t
        }
        mv.exports = yv
    });
    var bv = c((XH, _v) => {
        var PL = Ev();

        function LL(e) {
            return e == null ? "" : PL(e)
        }
        _v.exports = LL
    });
    var Vr = c((UH, Iv) => {
        var NL = we(),
            qL = jn(),
            DL = dv(),
            ML = bv();

        function FL(e, t) {
            return NL(e) ? e : qL(e, t) ? [e] : DL(ML(e))
        }
        Iv.exports = FL
    });
    var ir = c((WH, Tv) => {
        var kL = Wr(),
            GL = 1 / 0;

        function XL(e) {
            if (typeof e == "string" || kL(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -GL ? "-0" : t
        }
        Tv.exports = XL
    });
    var zn = c((VH, wv) => {
        var UL = Vr(),
            WL = ir();

        function VL(e, t) {
            t = UL(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[WL(t[r++])];
            return r && r == n ? e : void 0
        }
        wv.exports = VL
    });
    var Kn = c((BH, Ov) => {
        var BL = zn();

        function HL(e, t, r) {
            var n = e == null ? void 0 : BL(e, t);
            return n === void 0 ? r : n
        }
        Ov.exports = HL
    });
    var xv = c((HH, Av) => {
        function jL(e, t) {
            return e != null && t in Object(e)
        }
        Av.exports = jL
    });
    var Rv = c((jH, Sv) => {
        var zL = Vr(),
            KL = Fr(),
            YL = we(),
            $L = Gn(),
            QL = Xn(),
            ZL = ir();

        function JL(e, t, r) {
            t = zL(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = ZL(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && QL(i) && $L(a, i) && (YL(e) || KL(e)))
        }
        Sv.exports = JL
    });
    var Pv = c((zH, Cv) => {
        var eN = xv(),
            tN = Rv();

        function rN(e, t) {
            return e != null && tN(e, t, eN)
        }
        Cv.exports = rN
    });
    var Nv = c((KH, Lv) => {
        var nN = ga(),
            iN = Kn(),
            oN = Pv(),
            aN = jn(),
            sN = va(),
            uN = ha(),
            cN = ir(),
            lN = 1,
            fN = 2;

        function dN(e, t) {
            return aN(e) && sN(t) ? uN(cN(e), t) : function(r) {
                var n = iN(r, e);
                return n === void 0 && n === t ? oN(r, e) : nN(t, n, lN | fN)
            }
        }
        Lv.exports = dN
    });
    var Yn = c((YH, qv) => {
        function pN(e) {
            return e
        }
        qv.exports = pN
    });
    var Ea = c(($H, Dv) => {
        function gN(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Dv.exports = gN
    });
    var Fv = c((QH, Mv) => {
        var vN = zn();

        function hN(e) {
            return function(t) {
                return vN(t, e)
            }
        }
        Mv.exports = hN
    });
    var Gv = c((ZH, kv) => {
        var yN = Ea(),
            mN = Fv(),
            EN = jn(),
            _N = ir();

        function bN(e) {
            return EN(e) ? yN(_N(e)) : mN(e)
        }
        kv.exports = bN
    });
    var Ot = c((JH, Xv) => {
        var IN = nv(),
            TN = Nv(),
            wN = Yn(),
            ON = we(),
            AN = Gv();

        function xN(e) {
            return typeof e == "function" ? e : e == null ? wN : typeof e == "object" ? ON(e) ? TN(e[0], e[1]) : IN(e) : AN(e)
        }
        Xv.exports = xN
    });
    var _a = c((e5, Uv) => {
        var SN = Ot(),
            RN = qt(),
            CN = Ur();

        function PN(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!RN(t)) {
                    var o = SN(r, 3);
                    t = CN(t), r = function(u) {
                        return o(i[u], u, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Uv.exports = PN
    });
    var ba = c((t5, Wv) => {
        function LN(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Wv.exports = LN
    });
    var Bv = c((r5, Vv) => {
        var NN = /\s/;

        function qN(e) {
            for (var t = e.length; t-- && NN.test(e.charAt(t)););
            return t
        }
        Vv.exports = qN
    });
    var jv = c((n5, Hv) => {
        var DN = Bv(),
            MN = /^\s+/;

        function FN(e) {
            return e && e.slice(0, DN(e) + 1).replace(MN, "")
        }
        Hv.exports = FN
    });
    var $n = c((i5, Yv) => {
        var kN = jv(),
            zv = ut(),
            GN = Wr(),
            Kv = 0 / 0,
            XN = /^[-+]0x[0-9a-f]+$/i,
            UN = /^0b[01]+$/i,
            WN = /^0o[0-7]+$/i,
            VN = parseInt;

        function BN(e) {
            if (typeof e == "number") return e;
            if (GN(e)) return Kv;
            if (zv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = zv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = kN(e);
            var r = UN.test(e);
            return r || WN.test(e) ? VN(e.slice(2), r ? 2 : 8) : XN.test(e) ? Kv : +e
        }
        Yv.exports = BN
    });
    var Zv = c((o5, Qv) => {
        var HN = $n(),
            $v = 1 / 0,
            jN = 17976931348623157e292;

        function zN(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = HN(e), e === $v || e === -$v) {
                var t = e < 0 ? -1 : 1;
                return t * jN
            }
            return e === e ? e : 0
        }
        Qv.exports = zN
    });
    var Ia = c((a5, Jv) => {
        var KN = Zv();

        function YN(e) {
            var t = KN(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Jv.exports = YN
    });
    var th = c((s5, eh) => {
        var $N = ba(),
            QN = Ot(),
            ZN = Ia(),
            JN = Math.max;

        function eq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : ZN(r);
            return i < 0 && (i = JN(n + i, 0)), $N(e, QN(t, 3), i)
        }
        eh.exports = eq
    });
    var Ta = c((u5, rh) => {
        var tq = _a(),
            rq = th(),
            nq = tq(rq);
        rh.exports = nq
    });
    var oh = {};
    Fe(oh, {
        ELEMENT_MATCHES: () => iq,
        FLEX_PREFIXED: () => wa,
        IS_BROWSER_ENV: () => Je,
        TRANSFORM_PREFIXED: () => At,
        TRANSFORM_STYLE_PREFIXED: () => Zn,
        withBrowser: () => Qn
    });
    var ih, Je, Qn, iq, wa, At, nh, Zn, Jn = ye(() => {
        "use strict";
        ih = le(Ta()), Je = typeof window < "u", Qn = (e, t) => Je ? e() : t, iq = Qn(() => (0, ih.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), wa = Qn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), At = Qn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), nh = At.split("transform")[0], Zn = nh ? nh + "TransformStyle" : "transformStyle"
    });
    var Oa = c((c5, lh) => {
        var oq = 4,
            aq = .001,
            sq = 1e-7,
            uq = 10,
            Br = 11,
            ei = 1 / (Br - 1),
            cq = typeof Float32Array == "function";

        function ah(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function sh(e, t) {
            return 3 * t - 6 * e
        }

        function uh(e) {
            return 3 * e
        }

        function ti(e, t, r) {
            return ((ah(t, r) * e + sh(t, r)) * e + uh(t)) * e
        }

        function ch(e, t, r) {
            return 3 * ah(t, r) * e * e + 2 * sh(t, r) * e + uh(t)
        }

        function lq(e, t, r, n, i) {
            var o, a, u = 0;
            do a = t + (r - t) / 2, o = ti(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > sq && ++u < uq);
            return a
        }

        function fq(e, t, r, n) {
            for (var i = 0; i < oq; ++i) {
                var o = ch(t, r, n);
                if (o === 0) return t;
                var a = ti(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        lh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = cq ? new Float32Array(Br) : new Array(Br);
            if (t !== r || n !== i)
                for (var a = 0; a < Br; ++a) o[a] = ti(a * ei, t, n);

            function u(s) {
                for (var d = 0, y = 1, h = Br - 1; y !== h && o[y] <= s; ++y) d += ei;
                --y;
                var v = (s - o[y]) / (o[y + 1] - o[y]),
                    m = d + v * ei,
                    O = ch(m, t, n);
                return O >= aq ? fq(s, m, t, n) : O === 0 ? m : lq(s, d, d + ei, t, n)
            }
            return function(d) {
                return t === r && n === i ? d : d === 0 ? 0 : d === 1 ? 1 : ti(u(d), r, i)
            }
        }
    });
    var jr = {};
    Fe(jr, {
        bounce: () => zq,
        bouncePast: () => Kq,
        ease: () => dq,
        easeIn: () => pq,
        easeInOut: () => vq,
        easeOut: () => gq,
        inBack: () => kq,
        inCirc: () => qq,
        inCubic: () => Eq,
        inElastic: () => Uq,
        inExpo: () => Pq,
        inOutBack: () => Xq,
        inOutCirc: () => Mq,
        inOutCubic: () => bq,
        inOutElastic: () => Vq,
        inOutExpo: () => Nq,
        inOutQuad: () => mq,
        inOutQuart: () => wq,
        inOutQuint: () => xq,
        inOutSine: () => Cq,
        inQuad: () => hq,
        inQuart: () => Iq,
        inQuint: () => Oq,
        inSine: () => Sq,
        outBack: () => Gq,
        outBounce: () => Fq,
        outCirc: () => Dq,
        outCubic: () => _q,
        outElastic: () => Wq,
        outExpo: () => Lq,
        outQuad: () => yq,
        outQuart: () => Tq,
        outQuint: () => Aq,
        outSine: () => Rq,
        swingFrom: () => Hq,
        swingFromTo: () => Bq,
        swingTo: () => jq
    });

    function hq(e) {
        return Math.pow(e, 2)
    }

    function yq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function mq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function Eq(e) {
        return Math.pow(e, 3)
    }

    function _q(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function bq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Iq(e) {
        return Math.pow(e, 4)
    }

    function Tq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function wq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Oq(e) {
        return Math.pow(e, 5)
    }

    function Aq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function xq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Sq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Rq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Cq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Pq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Lq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Nq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function qq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Dq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Mq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Fq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function kq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function Gq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Xq(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Uq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Wq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Vq(e) {
        let t = vt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Bq(e) {
        let t = vt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Hq(e) {
        let t = vt;
        return e * e * ((t + 1) * e - t)
    }

    function jq(e) {
        let t = vt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function zq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Hr, vt, dq, pq, gq, vq, Aa = ye(() => {
        "use strict";
        Hr = le(Oa()), vt = 1.70158, dq = (0, Hr.default)(.25, .1, .25, 1), pq = (0, Hr.default)(.42, 0, 1, 1), gq = (0, Hr.default)(0, 0, .58, 1), vq = (0, Hr.default)(.42, 0, .58, 1)
    });
    var dh = {};
    Fe(dh, {
        applyEasing: () => $q,
        createBezierEasing: () => Yq,
        optimizeFloat: () => zr
    });

    function zr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Yq(e) {
        return (0, fh.default)(...e)
    }

    function $q(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : zr(r ? t > 0 ? r(t) : t : t > 0 && e && jr[e] ? jr[e](t) : t)
    }
    var fh, xa = ye(() => {
        "use strict";
        Aa();
        fh = le(Oa())
    });
    var vh = {};
    Fe(vh, {
        createElementState: () => gh,
        ixElements: () => lD,
        mergeActionState: () => Sa
    });

    function gh(e, t, r, n, i) {
        let o = r === Qq ? (0, or.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, or.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Sa(e, t, r, n, i) {
        let o = dD(i);
        return (0, or.mergeIn)(e, [t, cD, r], n, o)
    }

    function dD(e) {
        let {
            config: t
        } = e;
        return fD.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                u = t[o];
            return a != null && u != null && (r[o] = u), r
        }, {})
    }
    var or, f5, Qq, d5, Zq, Jq, eD, tD, rD, nD, iD, oD, aD, sD, uD, ph, cD, lD, fD, hh = ye(() => {
        "use strict";
        or = le($t());
        Xe();
        ({
            HTML_ELEMENT: f5,
            PLAIN_OBJECT: Qq,
            ABSTRACT_NODE: d5,
            CONFIG_X_VALUE: Zq,
            CONFIG_Y_VALUE: Jq,
            CONFIG_Z_VALUE: eD,
            CONFIG_VALUE: tD,
            CONFIG_X_UNIT: rD,
            CONFIG_Y_UNIT: nD,
            CONFIG_Z_UNIT: iD,
            CONFIG_UNIT: oD
        } = Re), {
            IX2_SESSION_STOPPED: aD,
            IX2_INSTANCE_ADDED: sD,
            IX2_ELEMENT_STATE_CHANGED: uD
        } = Te, ph = {}, cD = "refState", lD = (e = ph, t = {}) => {
            switch (t.type) {
                case aD:
                    return ph;
                case sD: {
                    let {
                        elementId: r,
                        element: n,
                        origin: i,
                        actionItem: o,
                        refType: a
                    } = t.payload, {
                        actionTypeId: u
                    } = o, s = e;
                    return (0, or.getIn)(s, [r, n]) !== n && (s = gh(s, n, a, r, o)), Sa(s, r, u, i, o)
                }
                case uD: {
                    let {
                        elementId: r,
                        actionTypeId: n,
                        current: i,
                        actionItem: o
                    } = t.payload;
                    return Sa(e, r, n, i, o)
                }
                default:
                    return e
            }
        };
        fD = [
            [Zq, rD],
            [Jq, nD],
            [eD, iD],
            [tD, oD]
        ]
    });
    var yh = c(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        var pD = e => e.value;
        Oe.getPluginConfig = pD;
        var gD = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Oe.getPluginDuration = gD;
        var vD = e => e || {
            value: 0
        };
        Oe.getPluginOrigin = vD;
        var hD = e => ({
            value: e.value
        });
        Oe.getPluginDestination = hD;
        var yD = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Oe.createPluginInstance = yD;
        var mD = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Oe.renderPlugin = mD;
        var ED = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Oe.clearPlugin = ED
    });
    var Eh = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var _D = e => document.querySelector(`[data-w-id="${e}"]`),
            bD = () => window.Webflow.require("spline"),
            ID = (e, t) => e.filter(r => !t.includes(r)),
            TD = (e, t) => e.value[t];
        Ae.getPluginConfig = TD;
        var wD = () => null;
        Ae.getPluginDuration = wD;
        var mh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            OD = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = ID(n, o);
                    return a.length ? a.reduce((s, d) => (s[d] = mh[d], s), e) : e
                }
                return n.reduce((o, a) => (o[a] = mh[a], o), {})
            };
        Ae.getPluginOrigin = OD;
        var AD = e => e.value;
        Ae.getPluginDestination = AD;
        var xD = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? _D(n) : null
        };
        Ae.createPluginInstance = xD;
        var SD = (e, t, r) => {
            let n = bD(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                a = u => {
                    if (!u) throw new Error("Invalid spline app passed to renderSpline");
                    let s = o && u.findObjectById(o);
                    if (!s) return;
                    let {
                        PLUGIN_SPLINE: d
                    } = t;
                    d.positionX != null && (s.position.x = d.positionX), d.positionY != null && (s.position.y = d.positionY), d.positionZ != null && (s.position.z = d.positionZ), d.rotationX != null && (s.rotation.x = d.rotationX), d.rotationY != null && (s.rotation.y = d.rotationY), d.rotationZ != null && (s.rotation.z = d.rotationZ), d.scaleX != null && (s.scale.x = d.scaleX), d.scaleY != null && (s.scale.y = d.scaleY), d.scaleZ != null && (s.scale.z = d.scaleZ)
                };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Ae.renderPlugin = SD;
        var RD = () => null;
        Ae.clearPlugin = RD
    });
    var Ca = c(Ra => {
        "use strict";
        Object.defineProperty(Ra, "__esModule", {
            value: !0
        });
        Ra.normalizeColor = CD;
        var _h = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function CD(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                u = (typeof _h[o] == "string" ? _h[o].toLowerCase() : null) || o;
            if (u.startsWith("#")) {
                let s = u.substring(1);
                s.length === 3 || s.length === 4 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16), s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16), s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255))
            } else if (u.startsWith("rgba")) {
                let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (u.startsWith("rgb")) {
                let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (u.startsWith("hsla")) {
                let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
                    d = parseFloat(s[0]),
                    y = parseFloat(s[1].replace("%", "")) / 100,
                    h = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let v = (1 - Math.abs(2 * h - 1)) * y,
                    m = v * (1 - Math.abs(d / 60 % 2 - 1)),
                    O = h - v / 2,
                    T, R, I;
                d >= 0 && d < 60 ? (T = v, R = m, I = 0) : d >= 60 && d < 120 ? (T = m, R = v, I = 0) : d >= 120 && d < 180 ? (T = 0, R = v, I = m) : d >= 180 && d < 240 ? (T = 0, R = m, I = v) : d >= 240 && d < 300 ? (T = m, R = 0, I = v) : (T = v, R = 0, I = m), t = Math.round((T + O) * 255), r = Math.round((R + O) * 255), n = Math.round((I + O) * 255)
            } else if (u.startsWith("hsl")) {
                let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
                    d = parseFloat(s[0]),
                    y = parseFloat(s[1].replace("%", "")) / 100,
                    h = parseFloat(s[2].replace("%", "")) / 100,
                    v = (1 - Math.abs(2 * h - 1)) * y,
                    m = v * (1 - Math.abs(d / 60 % 2 - 1)),
                    O = h - v / 2,
                    T, R, I;
                d >= 0 && d < 60 ? (T = v, R = m, I = 0) : d >= 60 && d < 120 ? (T = m, R = v, I = 0) : d >= 120 && d < 180 ? (T = 0, R = v, I = m) : d >= 180 && d < 240 ? (T = 0, R = m, I = v) : d >= 240 && d < 300 ? (T = m, R = 0, I = v) : (T = v, R = 0, I = m), t = Math.round((T + O) * 255), r = Math.round((R + O) * 255), n = Math.round((I + O) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var bh = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var PD = Ca(),
            LD = (e, t) => e.value[t];
        xe.getPluginConfig = LD;
        var ND = () => null;
        xe.getPluginDuration = ND;
        var qD = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, PD.normalizeColor)(i)
        };
        xe.getPluginOrigin = qD;
        var DD = e => e.value;
        xe.getPluginDestination = DD;
        var MD = () => null;
        xe.createPluginInstance = MD;
        var FD = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: a,
                    red: u,
                    green: s,
                    blue: d,
                    alpha: y
                } = o,
                h;
            a != null && (h = a + i), u != null && d != null && s != null && y != null && (h = `rgba(${u}, ${s}, ${d}, ${y})`), h != null && document.documentElement.style.setProperty(n, h)
        };
        xe.renderPlugin = FD;
        var kD = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        xe.clearPlugin = kD
    });
    var Ih = c(ri => {
        "use strict";
        var La = pn().default;
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        ri.pluginMethodMap = void 0;
        var Pa = (Xe(), nt(Sf)),
            GD = La(yh()),
            XD = La(Eh()),
            UD = La(bh()),
            y5 = ri.pluginMethodMap = new Map([
                [Pa.ActionTypeConsts.PLUGIN_LOTTIE, {
                    ...GD
                }],
                [Pa.ActionTypeConsts.PLUGIN_SPLINE, {
                    ...XD
                }],
                [Pa.ActionTypeConsts.PLUGIN_VARIABLE, {
                    ...UD
                }]
            ])
    });
    var Th = {};
    Fe(Th, {
        clearPlugin: () => ka,
        createPluginInstance: () => VD,
        getPluginConfig: () => qa,
        getPluginDestination: () => Ma,
        getPluginDuration: () => WD,
        getPluginOrigin: () => Da,
        isPluginType: () => Mt,
        renderPlugin: () => Fa
    });

    function Mt(e) {
        return Na.pluginMethodMap.has(e)
    }
    var Na, Ft, qa, Da, WD, Ma, VD, Fa, ka, Ga = ye(() => {
        "use strict";
        Jn();
        Na = le(Ih());
        Ft = e => t => {
            if (!Je) return () => null;
            let r = Na.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, qa = Ft("getPluginConfig"), Da = Ft("getPluginOrigin"), WD = Ft("getPluginDuration"), Ma = Ft("getPluginDestination"), VD = Ft("createPluginInstance"), Fa = Ft("renderPlugin"), ka = Ft("clearPlugin")
    });
    var Oh = c((_5, wh) => {
        function BD(e, t) {
            return e == null || e !== e ? t : e
        }
        wh.exports = BD
    });
    var xh = c((b5, Ah) => {
        function HD(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Ah.exports = HD
    });
    var Rh = c((I5, Sh) => {
        function jD(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), u = a.length; u--;) {
                    var s = a[e ? u : ++i];
                    if (r(o[s], s, o) === !1) break
                }
                return t
            }
        }
        Sh.exports = jD
    });
    var Ph = c((T5, Ch) => {
        var zD = Rh(),
            KD = zD();
        Ch.exports = KD
    });
    var Xa = c((w5, Lh) => {
        var YD = Ph(),
            $D = Ur();

        function QD(e, t) {
            return e && YD(e, t, $D)
        }
        Lh.exports = QD
    });
    var qh = c((O5, Nh) => {
        var ZD = qt();

        function JD(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!ZD(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Nh.exports = JD
    });
    var Ua = c((A5, Dh) => {
        var eM = Xa(),
            tM = qh(),
            rM = tM(eM);
        Dh.exports = rM
    });
    var Fh = c((x5, Mh) => {
        function nM(e, t, r, n, i) {
            return i(e, function(o, a, u) {
                r = n ? (n = !1, o) : t(r, o, a, u)
            }), r
        }
        Mh.exports = nM
    });
    var Gh = c((S5, kh) => {
        var iM = xh(),
            oM = Ua(),
            aM = Ot(),
            sM = Fh(),
            uM = we();

        function cM(e, t, r) {
            var n = uM(e) ? iM : sM,
                i = arguments.length < 3;
            return n(e, aM(t, 4), r, i, oM)
        }
        kh.exports = cM
    });
    var Uh = c((R5, Xh) => {
        var lM = ba(),
            fM = Ot(),
            dM = Ia(),
            pM = Math.max,
            gM = Math.min;

        function vM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = dM(r), i = r < 0 ? pM(n + i, 0) : gM(i, n - 1)), lM(e, fM(t, 3), i, !0)
        }
        Xh.exports = vM
    });
    var Vh = c((C5, Wh) => {
        var hM = _a(),
            yM = Uh(),
            mM = hM(yM);
        Wh.exports = mM
    });

    function Bh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function EM(e, t) {
        if (Bh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Bh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var Wa, Hh = ye(() => {
        "use strict";
        Wa = EM
    });
    var cy = {};
    Fe(cy, {
        cleanupHTMLElement: () => hF,
        clearAllStyles: () => vF,
        clearObjectCache: () => MM,
        getActionListProgress: () => mF,
        getAffectedElements: () => za,
        getComputedStyle: () => BM,
        getDestinationValues: () => QM,
        getElementId: () => XM,
        getInstanceId: () => kM,
        getInstanceOrigin: () => zM,
        getItemConfigByKey: () => $M,
        getMaxDurationItemIndex: () => uy,
        getNamespacedParameterId: () => bF,
        getRenderType: () => oy,
        getStyleProp: () => ZM,
        mediaQueriesEqual: () => TF,
        observeStore: () => VM,
        reduceListToGroup: () => EF,
        reifyState: () => UM,
        renderHTMLElement: () => JM,
        shallowEqual: () => Wa,
        shouldAllowMediaQuery: () => IF,
        shouldNamespaceEventParameter: () => _F,
        stringifyTarget: () => wF
    });

    function MM() {
        ni.clear()
    }

    function kM() {
        return "i" + FM++
    }

    function XM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + GM++
    }

    function UM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, si.default)(e, (a, u) => {
                let {
                    eventTypeId: s
                } = u;
                return a[s] || (a[s] = {}), a[s][u.id] = u, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function VM({
        store: e,
        select: t,
        onChange: r,
        comparator: n = WM
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(s), u = t(i());

        function s() {
            let d = t(i());
            if (d == null) {
                a();
                return
            }
            n(d, u) || (u = d, r(u, e))
        }
        return a
    }

    function Kh(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: u
            }
        }
        return {}
    }

    function za({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((G, x) => G.concat(za({
            config: {
                target: x
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: u,
            queryDocument: s,
            getChildElements: d,
            getSiblingElements: y,
            matchSelector: h,
            elementContains: v,
            isSiblingNode: m
        } = i, {
            target: O
        } = e;
        if (!O) return [];
        let {
            id: T,
            objectId: R,
            selector: I,
            selectorGuids: L,
            appliesTo: C,
            useEventTarget: q
        } = Kh(O);
        if (R) return [ni.has(R) ? ni.get(R) : ni.set(R, {}).get(R)];
        if (C === jo.PAGE) {
            let G = a(T);
            return G ? [G] : []
        }
        let D = (t?.action?.config?.affectedElements ?? {})[T || I] || {},
            B = !!(D.id || D.selector),
            K, $, J, ee = t && u(Kh(t.target));
        if (B ? (K = D.limitAffectedElements, $ = ee, J = u(D)) : $ = J = u({
                id: T,
                selector: I,
                selectorGuids: L
            }), t && q) {
            let G = r && (J || q === !0) ? [r] : s(ee);
            if (J) {
                if (q === NM) return s(J).filter(x => G.some(F => v(x, F)));
                if (q === jh) return s(J).filter(x => G.some(F => v(F, x)));
                if (q === zh) return s(J).filter(x => G.some(F => m(F, x)))
            }
            return G
        }
        return $ == null || J == null ? [] : Je && n ? s(J).filter(G => n.contains(G)) : K === jh ? s($, J) : K === LM ? d(s($)).filter(h(J)) : K === zh ? y(s($)).filter(h(J)) : s(J)
    }

    function BM({
        element: e,
        actionItem: t
    }) {
        if (!Je) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case lr:
            case fr:
            case dr:
            case pr:
            case ci:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function zM(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (Mt(a)) return Da(a)(t[a], n);
        switch (n.actionTypeId) {
            case sr:
            case ur:
            case cr:
            case Qr:
                return t[n.actionTypeId] || Ka[n.actionTypeId];
            case Zr:
                return HM(t[n.actionTypeId], n.config.filters);
            case Jr:
                return jM(t[n.actionTypeId], n.config.fontVariations);
            case ry:
                return {
                    value: (0, ht.default)(parseFloat(o(e, oi)), 1)
                };
            case lr: {
                let u = o(e, ct),
                    s = o(e, lt),
                    d, y;
                return n.config.widthUnit === xt ? d = Yh.test(u) ? parseFloat(u) : parseFloat(r.width) : d = (0, ht.default)(parseFloat(u), parseFloat(r.width)), n.config.heightUnit === xt ? y = Yh.test(s) ? parseFloat(s) : parseFloat(r.height) : y = (0, ht.default)(parseFloat(s), parseFloat(r.height)), {
                    widthValue: d,
                    heightValue: y
                }
            }
            case fr:
            case dr:
            case pr:
                return dF({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case ci:
                return {
                    value: (0, ht.default)(o(e, ai), r.display)
                };
            case DM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function QM({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Mt(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case sr:
            case ur:
            case cr:
            case Qr: {
                let {
                    xValue: n,
                    yValue: i,
                    zValue: o
                } = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
            case lr: {
                let {
                    getStyle: n,
                    setStyle: i,
                    getProperty: o
                } = r, {
                    widthUnit: a,
                    heightUnit: u
                } = t.config, {
                    widthValue: s,
                    heightValue: d
                } = t.config;
                if (!Je) return {
                    widthValue: s,
                    heightValue: d
                };
                if (a === xt) {
                    let y = n(e, ct);
                    i(e, ct, ""), s = o(e, "offsetWidth"), i(e, ct, y)
                }
                if (u === xt) {
                    let y = n(e, lt);
                    i(e, lt, ""), d = o(e, "offsetHeight"), i(e, lt, y)
                }
                return {
                    widthValue: s,
                    heightValue: d
                }
            }
            case fr:
            case dr:
            case pr: {
                let {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a,
                    globalSwatchId: u
                } = t.config;
                if (u && u.startsWith("--")) {
                    let {
                        getStyle: s
                    } = r, d = s(e, u), y = (0, Zh.normalizeColor)(d);
                    return {
                        rValue: y.red,
                        gValue: y.green,
                        bValue: y.blue,
                        aValue: y.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
            case Zr:
                return t.config.filters.reduce(KM, {});
            case Jr:
                return t.config.fontVariations.reduce(YM, {});
            default: {
                let {
                    value: n
                } = t.config;
                return {
                    value: n
                }
            }
        }
    }

    function oy(e) {
        if (/^TRANSFORM_/.test(e)) return ey;
        if (/^STYLE_/.test(e)) return Ha;
        if (/^GENERAL_/.test(e)) return Ba;
        if (/^PLUGIN_/.test(e)) return ty
    }

    function ZM(e, t) {
        return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function JM(e, t, r, n, i, o, a, u, s) {
        switch (u) {
            case ey:
                return iF(e, t, r, i, a);
            case Ha:
                return pF(e, t, r, i, o, a);
            case Ba:
                return gF(e, i, a);
            case ty: {
                let {
                    actionTypeId: d
                } = i;
                if (Mt(d)) return Fa(d)(s, t, i)
            }
        }
    }

    function iF(e, t, r, n, i) {
        let o = nF.map(u => {
                let s = Ka[u],
                    {
                        xValue: d = s.xValue,
                        yValue: y = s.yValue,
                        zValue: h = s.zValue,
                        xUnit: v = "",
                        yUnit: m = "",
                        zUnit: O = ""
                    } = t[u] || {};
                switch (u) {
                    case sr:
                        return `${IM}(${d}${v}, ${y}${m}, ${h}${O})`;
                    case ur:
                        return `${TM}(${d}${v}, ${y}${m}, ${h}${O})`;
                    case cr:
                        return `${wM}(${d}${v}) ${OM}(${y}${m}) ${AM}(${h}${O})`;
                    case Qr:
                        return `${xM}(${d}${v}, ${y}${m})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        kt(e, At, i), a(e, At, o), sF(n, r) && a(e, Zn, SM)
    }

    function oF(e, t, r, n) {
        let i = (0, si.default)(t, (a, u, s) => `${a} ${s}(${u}${rF(s, r)})`, ""),
            {
                setStyle: o
            } = n;
        kt(e, Kr, n), o(e, Kr, i)
    }

    function aF(e, t, r, n) {
        let i = (0, si.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        kt(e, Yr, n), o(e, Yr, i)
    }

    function sF({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === sr && n !== void 0 || e === ur && n !== void 0 || e === cr && (t !== void 0 || r !== void 0)
    }

    function fF(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function dF({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = ja[t],
            o = n(e, i),
            a = cF.test(o) ? o : r[i],
            u = fF(lF, a).split($r);
        return {
            rValue: (0, ht.default)(parseInt(u[0], 10), 255),
            gValue: (0, ht.default)(parseInt(u[1], 10), 255),
            bValue: (0, ht.default)(parseInt(u[2], 10), 255),
            aValue: (0, ht.default)(parseFloat(u[3]), 1)
        }
    }

    function pF(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case lr: {
                let {
                    widthUnit: u = "",
                    heightUnit: s = ""
                } = n.config, {
                    widthValue: d,
                    heightValue: y
                } = r;
                d !== void 0 && (u === xt && (u = "px"), kt(e, ct, o), a(e, ct, d + u)), y !== void 0 && (s === xt && (s = "px"), kt(e, lt, o), a(e, lt, y + s));
                break
            }
            case Zr: {
                oF(e, r, n.config, o);
                break
            }
            case Jr: {
                aF(e, r, n.config, o);
                break
            }
            case fr:
            case dr:
            case pr: {
                let u = ja[n.actionTypeId],
                    s = Math.round(r.rValue),
                    d = Math.round(r.gValue),
                    y = Math.round(r.bValue),
                    h = r.aValue;
                kt(e, u, o), a(e, u, h >= 1 ? `rgb(${s},${d},${y})` : `rgba(${s},${d},${y},${h})`);
                break
            }
            default: {
                let {
                    unit: u = ""
                } = n.config;
                kt(e, i, o), a(e, i, r.value + u);
                break
            }
        }
    }

    function gF(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ci: {
                let {
                    value: i
                } = t.config;
                i === RM && Je ? n(e, ai, wa) : n(e, ai, i);
                return
            }
        }
    }

    function kt(e, t, r) {
        if (!Je) return;
        let n = iy[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, ar);
        if (!a) {
            o(e, ar, n);
            return
        }
        let u = a.split($r).map(ny);
        u.indexOf(n) === -1 && o(e, ar, u.concat(n).join($r))
    }

    function ay(e, t, r) {
        if (!Je) return;
        let n = iy[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, ar);
        !a || a.indexOf(n) === -1 || o(e, ar, a.split($r).map(ny).filter(u => u !== n).join($r))
    }

    function vF({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: u
                } = a.action,
                {
                    actionListId: s
                } = u,
                d = i[s];
            d && $h({
                actionList: d,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            $h({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function $h({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Qh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(u => {
                Qh({
                    actionGroup: u,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Qh({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, u;
            Mt(o) ? u = s => ka(o)(s, i) : u = sy({
                effect: yF,
                actionTypeId: o,
                elementApi: r
            }), za({
                config: a,
                event: t,
                elementApi: r
            }).forEach(u)
        })
    }

    function hF(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === lr) {
            let {
                config: a
            } = t;
            a.widthUnit === xt && n(e, ct, ""), a.heightUnit === xt && n(e, lt, "")
        }
        i(e, ar) && sy({
            effect: ay,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function yF(e, t, r) {
        let {
            setStyle: n
        } = r;
        ay(e, t, r), n(e, t, ""), t === At && n(e, Zn, "")
    }

    function uy(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function mF(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, u = 0;
        return r.forEach((s, d) => {
            if (n && d === 0) return;
            let {
                actionItems: y
            } = s, h = y[uy(y)], {
                config: v,
                actionTypeId: m
            } = h;
            i.id === h.id && (u = a + o);
            let O = oy(m) === Ba ? 0 : v.duration;
            a += v.delay + O
        }), a > 0 ? zr(u / a) : 0
    }

    function EF({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = u => (o.push((0, ui.mergeIn)(u, ["config"], {
            delay: 0,
            duration: 0
        })), u.id === t);
        return n && n.some(({
            actionItems: u
        }) => u.some(a)), i && i.some(u => {
            let {
                continuousActionGroups: s
            } = u;
            return s.some(({
                actionItems: d
            }) => d.some(a))
        }), (0, ui.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function _F(e, {
        basedOn: t
    }) {
        return e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === st.ELEMENT
    }

    function bF(e, t) {
        return e + qM + t
    }

    function IF(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function TF(e, t) {
        return Wa(e && e.sort(), t && t.sort())
    }

    function wF(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Va + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Va + r + Va + n
    }
    var ht, si, ii, ui, Zh, _M, bM, IM, TM, wM, OM, AM, xM, SM, RM, oi, Kr, Yr, ct, lt, Jh, CM, PM, jh, LM, zh, NM, ai, ar, xt, $r, qM, Va, ey, Ba, Ha, ty, sr, ur, cr, Qr, ry, Zr, Jr, lr, fr, dr, pr, ci, DM, ny, ja, iy, ni, FM, GM, WM, Yh, HM, jM, KM, YM, $M, Ka, eF, tF, rF, nF, uF, cF, lF, sy, ly = ye(() => {
        "use strict";
        ht = le(Oh()), si = le(Gh()), ii = le(Vh()), ui = le($t());
        Xe();
        Hh();
        xa();
        Zh = le(Ca());
        Ga();
        Jn();
        ({
            BACKGROUND: _M,
            TRANSFORM: bM,
            TRANSLATE_3D: IM,
            SCALE_3D: TM,
            ROTATE_X: wM,
            ROTATE_Y: OM,
            ROTATE_Z: AM,
            SKEW: xM,
            PRESERVE_3D: SM,
            FLEX: RM,
            OPACITY: oi,
            FILTER: Kr,
            FONT_VARIATION_SETTINGS: Yr,
            WIDTH: ct,
            HEIGHT: lt,
            BACKGROUND_COLOR: Jh,
            BORDER_COLOR: CM,
            COLOR: PM,
            CHILDREN: jh,
            IMMEDIATE_CHILDREN: LM,
            SIBLINGS: zh,
            PARENT: NM,
            DISPLAY: ai,
            WILL_CHANGE: ar,
            AUTO: xt,
            COMMA_DELIMITER: $r,
            COLON_DELIMITER: qM,
            BAR_DELIMITER: Va,
            RENDER_TRANSFORM: ey,
            RENDER_GENERAL: Ba,
            RENDER_STYLE: Ha,
            RENDER_PLUGIN: ty
        } = Re), {
            TRANSFORM_MOVE: sr,
            TRANSFORM_SCALE: ur,
            TRANSFORM_ROTATE: cr,
            TRANSFORM_SKEW: Qr,
            STYLE_OPACITY: ry,
            STYLE_FILTER: Zr,
            STYLE_FONT_VARIATION: Jr,
            STYLE_SIZE: lr,
            STYLE_BACKGROUND_COLOR: fr,
            STYLE_BORDER: dr,
            STYLE_TEXT_COLOR: pr,
            GENERAL_DISPLAY: ci,
            OBJECT_VALUE: DM
        } = Ge, ny = e => e.trim(), ja = Object.freeze({
            [fr]: Jh,
            [dr]: CM,
            [pr]: PM
        }), iy = Object.freeze({
            [At]: bM,
            [Jh]: _M,
            [oi]: oi,
            [Kr]: Kr,
            [ct]: ct,
            [lt]: lt,
            [Yr]: Yr
        }), ni = new Map;
        FM = 1;
        GM = 1;
        WM = (e, t) => e === t;
        Yh = /px/, HM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = eF[n.type]), r), e || {}), jM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = tF[n.type] || n.defaultValue || 0), r), e || {});
        KM = (e, t) => (t && (e[t.type] = t.value || 0), e), YM = (e, t) => (t && (e[t.type] = t.value || 0), e), $M = (e, t, r) => {
            if (Mt(e)) return qa(e)(r, t);
            switch (e) {
                case Zr: {
                    let n = (0, ii.default)(r.filters, ({
                        type: i
                    }) => i === t);
                    return n ? n.value : 0
                }
                case Jr: {
                    let n = (0, ii.default)(r.fontVariations, ({
                        type: i
                    }) => i === t);
                    return n ? n.value : 0
                }
                default:
                    return r[t]
            }
        };
        Ka = {
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ur]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [cr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, eF = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), tF = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), rF = (e, t) => {
            let r = (0, ii.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, nF = Object.keys(Ka);
        uF = "\\(([^)]+)\\)", cF = /^rgb/, lF = RegExp(`rgba?${uF}`);
        sy = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case sr:
                case ur:
                case cr:
                case Qr:
                    e(n, At, r);
                    break;
                case Zr:
                    e(n, Kr, r);
                    break;
                case Jr:
                    e(n, Yr, r);
                    break;
                case ry:
                    e(n, oi, r);
                    break;
                case lr:
                    e(n, ct, r), e(n, lt, r);
                    break;
                case fr:
                case dr:
                case pr:
                    e(n, ja[t], r);
                    break;
                case ci:
                    e(n, ai, r);
                    break
            }
        }
    });
    var Gt = c(Ne => {
        "use strict";
        var gr = pn().default;
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.IX2VanillaUtils = Ne.IX2VanillaPlugins = Ne.IX2ElementsReducer = Ne.IX2Easings = Ne.IX2EasingUtils = Ne.IX2BrowserSupport = void 0;
        var OF = gr((Jn(), nt(oh)));
        Ne.IX2BrowserSupport = OF;
        var AF = gr((Aa(), nt(jr)));
        Ne.IX2Easings = AF;
        var xF = gr((xa(), nt(dh)));
        Ne.IX2EasingUtils = xF;
        var SF = gr((hh(), nt(vh)));
        Ne.IX2ElementsReducer = SF;
        var RF = gr((Ga(), nt(Th)));
        Ne.IX2VanillaPlugins = RF;
        var CF = gr((ly(), nt(cy)));
        Ne.IX2VanillaUtils = CF
    });
    var fi, yt, PF, LF, NF, qF, DF, MF, li, fy, FF, kF, Ya, GF, XF, UF, WF, dy, py = ye(() => {
        "use strict";
        Xe();
        fi = le(Gt()), yt = le($t()), {
            IX2_RAW_DATA_IMPORTED: PF,
            IX2_SESSION_STOPPED: LF,
            IX2_INSTANCE_ADDED: NF,
            IX2_INSTANCE_STARTED: qF,
            IX2_INSTANCE_REMOVED: DF,
            IX2_ANIMATION_FRAME_CHANGED: MF
        } = Te, {
            optimizeFloat: li,
            applyEasing: fy,
            createBezierEasing: FF
        } = fi.IX2EasingUtils, {
            RENDER_GENERAL: kF
        } = Re, {
            getItemConfigByKey: Ya,
            getRenderType: GF,
            getStyleProp: XF
        } = fi.IX2VanillaUtils, UF = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: u,
                actionTypeId: s,
                customEasingFn: d,
                skipMotion: y,
                skipToValue: h
            } = e, {
                parameters: v
            } = t.payload, m = Math.max(1 - a, .01), O = v[n];
            O == null && (m = 1, O = u);
            let T = Math.max(O, 0) || 0,
                R = li(T - r),
                I = y ? h : li(r + R * m),
                L = I * 100;
            if (I === r && e.current) return e;
            let C, q, M, D;
            for (let K = 0, {
                    length: $
                } = i; K < $; K++) {
                let {
                    keyframe: J,
                    actionItems: ee
                } = i[K];
                if (K === 0 && (C = ee[0]), L >= J) {
                    C = ee[0];
                    let G = i[K + 1],
                        x = G && L !== J;
                    q = x ? G.actionItems[0] : null, x && (M = J / 100, D = (G.keyframe - J) / 100)
                }
            }
            let B = {};
            if (C && !q)
                for (let K = 0, {
                        length: $
                    } = o; K < $; K++) {
                    let J = o[K];
                    B[J] = Ya(s, J, C.config)
                } else if (C && q && M !== void 0 && D !== void 0) {
                    let K = (I - M) / D,
                        $ = C.config.easing,
                        J = fy($, K, d);
                    for (let ee = 0, {
                            length: G
                        } = o; ee < G; ee++) {
                        let x = o[ee],
                            F = Ya(s, x, C.config),
                            te = (Ya(s, x, q.config) - F) * J + F;
                        B[x] = te
                    }
                } return (0, yt.merge)(e, {
                position: I,
                current: B
            })
        }, WF = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: u,
                actionItem: s,
                destination: d,
                destinationKeys: y,
                pluginDuration: h,
                instanceDelay: v,
                customEasingFn: m,
                skipMotion: O
            } = e, T = s.config.easing, {
                duration: R,
                delay: I
            } = s.config;
            h != null && (R = h), I = v ?? I, a === kF ? R = 0 : (o || O) && (R = I = 0);
            let {
                now: L
            } = t.payload;
            if (r && n) {
                let C = L - (i + I);
                if (u) {
                    let K = L - i,
                        $ = R + I,
                        J = li(Math.min(Math.max(0, K / $), 1));
                    e = (0, yt.set)(e, "verboseTimeElapsed", $ * J)
                }
                if (C < 0) return e;
                let q = li(Math.min(Math.max(0, C / R), 1)),
                    M = fy(T, q, m),
                    D = {},
                    B = null;
                return y.length && (B = y.reduce((K, $) => {
                    let J = d[$],
                        ee = parseFloat(n[$]) || 0,
                        x = (parseFloat(J) - ee) * M + ee;
                    return K[$] = x, K
                }, {})), D.current = B, D.position = q, q === 1 && (D.active = !1, D.complete = !0), (0, yt.merge)(e, D)
            }
            return e
        }, dy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case PF:
                    return t.payload.ixInstances || Object.freeze({});
                case LF:
                    return Object.freeze({});
                case NF: {
                    let {
                        instanceId: r,
                        elementId: n,
                        actionItem: i,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: u,
                        actionListId: s,
                        groupIndex: d,
                        isCarrier: y,
                        origin: h,
                        destination: v,
                        immediate: m,
                        verbose: O,
                        continuous: T,
                        parameterId: R,
                        actionGroups: I,
                        smoothing: L,
                        restingValue: C,
                        pluginInstance: q,
                        pluginDuration: M,
                        instanceDelay: D,
                        skipMotion: B,
                        skipToValue: K
                    } = t.payload, {
                        actionTypeId: $
                    } = i, J = GF($), ee = XF(J, $), G = Object.keys(v).filter(F => v[F] != null && typeof v[F] != "string"), {
                        easing: x
                    } = i.config;
                    return (0, yt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: h,
                        destination: v,
                        destinationKeys: G,
                        immediate: m,
                        verbose: O,
                        current: null,
                        actionItem: i,
                        actionTypeId: $,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: u,
                        actionListId: s,
                        groupIndex: d,
                        renderType: J,
                        isCarrier: y,
                        styleProp: ee,
                        continuous: T,
                        parameterId: R,
                        actionGroups: I,
                        smoothing: L,
                        restingValue: C,
                        pluginInstance: q,
                        pluginDuration: M,
                        instanceDelay: D,
                        skipMotion: B,
                        skipToValue: K,
                        customEasingFn: Array.isArray(x) && x.length === 4 ? FF(x) : void 0
                    })
                }
                case qF: {
                    let {
                        instanceId: r,
                        time: n
                    } = t.payload;
                    return (0, yt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
                case DF: {
                    let {
                        instanceId: r
                    } = t.payload;
                    if (!e[r]) return e;
                    let n = {},
                        i = Object.keys(e),
                        {
                            length: o
                        } = i;
                    for (let a = 0; a < o; a++) {
                        let u = i[a];
                        u !== r && (n[u] = e[u])
                    }
                    return n
                }
                case MF: {
                    let r = e,
                        n = Object.keys(e),
                        {
                            length: i
                        } = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o],
                            u = e[a],
                            s = u.continuous ? UF : WF;
                        r = (0, yt.set)(r, a, s(u, t))
                    }
                    return r
                }
                default:
                    return e
            }
        }
    });
    var VF, BF, HF, gy, vy = ye(() => {
        "use strict";
        Xe();
        ({
            IX2_RAW_DATA_IMPORTED: VF,
            IX2_SESSION_STOPPED: BF,
            IX2_PARAMETER_CHANGED: HF
        } = Te), gy = (e = {}, t) => {
            switch (t.type) {
                case VF:
                    return t.payload.ixParameters || {};
                case BF:
                    return {};
                case HF: {
                    let {
                        key: r,
                        value: n
                    } = t.payload;
                    return e[r] = n, e
                }
                default:
                    return e
            }
        }
    });
    var my = {};
    Fe(my, {
        default: () => zF
    });
    var hy, yy, jF, zF, Ey = ye(() => {
        "use strict";
        hy = le(Ho());
        Cf();
        Qf();
        ed();
        yy = le(Gt());
        py();
        vy();
        ({
            ixElements: jF
        } = yy.IX2ElementsReducer), zF = (0, hy.combineReducers)({
            ixData: Rf,
            ixRequest: $f,
            ixSession: Jf,
            ixElements: jF,
            ixInstances: dy,
            ixParameters: gy
        })
    });
    var by = c((K5, _y) => {
        var KF = Tt(),
            YF = we(),
            $F = gt(),
            QF = "[object String]";

        function ZF(e) {
            return typeof e == "string" || !YF(e) && $F(e) && KF(e) == QF
        }
        _y.exports = ZF
    });
    var Ty = c((Y5, Iy) => {
        var JF = Ea(),
            e1 = JF("length");
        Iy.exports = e1
    });
    var Oy = c(($5, wy) => {
        var t1 = "\\ud800-\\udfff",
            r1 = "\\u0300-\\u036f",
            n1 = "\\ufe20-\\ufe2f",
            i1 = "\\u20d0-\\u20ff",
            o1 = r1 + n1 + i1,
            a1 = "\\ufe0e\\ufe0f",
            s1 = "\\u200d",
            u1 = RegExp("[" + s1 + t1 + o1 + a1 + "]");

        function c1(e) {
            return u1.test(e)
        }
        wy.exports = c1
    });
    var qy = c((Q5, Ny) => {
        var xy = "\\ud800-\\udfff",
            l1 = "\\u0300-\\u036f",
            f1 = "\\ufe20-\\ufe2f",
            d1 = "\\u20d0-\\u20ff",
            p1 = l1 + f1 + d1,
            g1 = "\\ufe0e\\ufe0f",
            v1 = "[" + xy + "]",
            $a = "[" + p1 + "]",
            Qa = "\\ud83c[\\udffb-\\udfff]",
            h1 = "(?:" + $a + "|" + Qa + ")",
            Sy = "[^" + xy + "]",
            Ry = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Cy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            y1 = "\\u200d",
            Py = h1 + "?",
            Ly = "[" + g1 + "]?",
            m1 = "(?:" + y1 + "(?:" + [Sy, Ry, Cy].join("|") + ")" + Ly + Py + ")*",
            E1 = Ly + Py + m1,
            _1 = "(?:" + [Sy + $a + "?", $a, Ry, Cy, v1].join("|") + ")",
            Ay = RegExp(Qa + "(?=" + Qa + ")|" + _1 + E1, "g");

        function b1(e) {
            for (var t = Ay.lastIndex = 0; Ay.test(e);) ++t;
            return t
        }
        Ny.exports = b1
    });
    var My = c((Z5, Dy) => {
        var I1 = Ty(),
            T1 = Oy(),
            w1 = qy();

        function O1(e) {
            return T1(e) ? w1(e) : I1(e)
        }
        Dy.exports = O1
    });
    var ky = c((J5, Fy) => {
        var A1 = Vn(),
            x1 = Bn(),
            S1 = qt(),
            R1 = by(),
            C1 = My(),
            P1 = "[object Map]",
            L1 = "[object Set]";

        function N1(e) {
            if (e == null) return 0;
            if (S1(e)) return R1(e) ? C1(e) : e.length;
            var t = x1(e);
            return t == P1 || t == L1 ? e.size : A1(e).length
        }
        Fy.exports = N1
    });
    var Xy = c((ej, Gy) => {
        var q1 = "Expected a function";

        function D1(e) {
            if (typeof e != "function") throw new TypeError(q1);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Gy.exports = D1
    });
    var Za = c((tj, Uy) => {
        var M1 = wt(),
            F1 = function() {
                try {
                    var e = M1(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Uy.exports = F1
    });
    var Ja = c((rj, Vy) => {
        var Wy = Za();

        function k1(e, t, r) {
            t == "__proto__" && Wy ? Wy(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Vy.exports = k1
    });
    var Hy = c((nj, By) => {
        var G1 = Ja(),
            X1 = Nn(),
            U1 = Object.prototype,
            W1 = U1.hasOwnProperty;

        function V1(e, t, r) {
            var n = e[t];
            (!(W1.call(e, t) && X1(n, r)) || r === void 0 && !(t in e)) && G1(e, t, r)
        }
        By.exports = V1
    });
    var Ky = c((ij, zy) => {
        var B1 = Hy(),
            H1 = Vr(),
            j1 = Gn(),
            jy = ut(),
            z1 = ir();

        function K1(e, t, r, n) {
            if (!jy(e)) return e;
            t = H1(t, e);
            for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o;) {
                var s = z1(t[i]),
                    d = r;
                if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
                if (i != a) {
                    var y = u[s];
                    d = n ? n(y, s, u) : void 0, d === void 0 && (d = jy(y) ? y : j1(t[i + 1]) ? [] : {})
                }
                B1(u, s, d), u = u[s]
            }
            return e
        }
        zy.exports = K1
    });
    var $y = c((oj, Yy) => {
        var Y1 = zn(),
            $1 = Ky(),
            Q1 = Vr();

        function Z1(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    u = Y1(e, a);
                r(u, a) && $1(o, Q1(a, e), u)
            }
            return o
        }
        Yy.exports = Z1
    });
    var Zy = c((aj, Qy) => {
        var J1 = Fn(),
            e2 = Lo(),
            t2 = ia(),
            r2 = na(),
            n2 = Object.getOwnPropertySymbols,
            i2 = n2 ? function(e) {
                for (var t = []; e;) J1(t, t2(e)), e = e2(e);
                return t
            } : r2;
        Qy.exports = i2
    });
    var em = c((sj, Jy) => {
        function o2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Jy.exports = o2
    });
    var rm = c((uj, tm) => {
        var a2 = ut(),
            s2 = Wn(),
            u2 = em(),
            c2 = Object.prototype,
            l2 = c2.hasOwnProperty;

        function f2(e) {
            if (!a2(e)) return u2(e);
            var t = s2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !l2.call(e, n)) || r.push(n);
            return r
        }
        tm.exports = f2
    });
    var im = c((cj, nm) => {
        var d2 = aa(),
            p2 = rm(),
            g2 = qt();

        function v2(e) {
            return g2(e) ? d2(e, !0) : p2(e)
        }
        nm.exports = v2
    });
    var am = c((lj, om) => {
        var h2 = ra(),
            y2 = Zy(),
            m2 = im();

        function E2(e) {
            return h2(e, m2, y2)
        }
        om.exports = E2
    });
    var um = c((fj, sm) => {
        var _2 = ma(),
            b2 = Ot(),
            I2 = $y(),
            T2 = am();

        function w2(e, t) {
            if (e == null) return {};
            var r = _2(T2(e), function(n) {
                return [n]
            });
            return t = b2(t), I2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        sm.exports = w2
    });
    var lm = c((dj, cm) => {
        var O2 = Ot(),
            A2 = Xy(),
            x2 = um();

        function S2(e, t) {
            return x2(e, A2(O2(t)))
        }
        cm.exports = S2
    });
    var dm = c((pj, fm) => {
        var R2 = Vn(),
            C2 = Bn(),
            P2 = Fr(),
            L2 = we(),
            N2 = qt(),
            q2 = kn(),
            D2 = Wn(),
            M2 = Un(),
            F2 = "[object Map]",
            k2 = "[object Set]",
            G2 = Object.prototype,
            X2 = G2.hasOwnProperty;

        function U2(e) {
            if (e == null) return !0;
            if (N2(e) && (L2(e) || typeof e == "string" || typeof e.splice == "function" || q2(e) || M2(e) || P2(e))) return !e.length;
            var t = C2(e);
            if (t == F2 || t == k2) return !e.size;
            if (D2(e)) return !R2(e).length;
            for (var r in e)
                if (X2.call(e, r)) return !1;
            return !0
        }
        fm.exports = U2
    });
    var gm = c((gj, pm) => {
        var W2 = Ja(),
            V2 = Xa(),
            B2 = Ot();

        function H2(e, t) {
            var r = {};
            return t = B2(t, 3), V2(e, function(n, i, o) {
                W2(r, i, t(n, i, o))
            }), r
        }
        pm.exports = H2
    });
    var hm = c((vj, vm) => {
        function j2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        vm.exports = j2
    });
    var mm = c((hj, ym) => {
        var z2 = Yn();

        function K2(e) {
            return typeof e == "function" ? e : z2
        }
        ym.exports = K2
    });
    var _m = c((yj, Em) => {
        var Y2 = hm(),
            $2 = Ua(),
            Q2 = mm(),
            Z2 = we();

        function J2(e, t) {
            var r = Z2(e) ? Y2 : $2;
            return r(e, Q2(t))
        }
        Em.exports = J2
    });
    var Im = c((mj, bm) => {
        var ek = Qe(),
            tk = function() {
                return ek.Date.now()
            };
        bm.exports = tk
    });
    var Om = c((Ej, wm) => {
        var rk = ut(),
            es = Im(),
            Tm = $n(),
            nk = "Expected a function",
            ik = Math.max,
            ok = Math.min;

        function ak(e, t, r) {
            var n, i, o, a, u, s, d = 0,
                y = !1,
                h = !1,
                v = !0;
            if (typeof e != "function") throw new TypeError(nk);
            t = Tm(t) || 0, rk(r) && (y = !!r.leading, h = "maxWait" in r, o = h ? ik(Tm(r.maxWait) || 0, t) : o, v = "trailing" in r ? !!r.trailing : v);

            function m(D) {
                var B = n,
                    K = i;
                return n = i = void 0, d = D, a = e.apply(K, B), a
            }

            function O(D) {
                return d = D, u = setTimeout(I, t), y ? m(D) : a
            }

            function T(D) {
                var B = D - s,
                    K = D - d,
                    $ = t - B;
                return h ? ok($, o - K) : $
            }

            function R(D) {
                var B = D - s,
                    K = D - d;
                return s === void 0 || B >= t || B < 0 || h && K >= o
            }

            function I() {
                var D = es();
                if (R(D)) return L(D);
                u = setTimeout(I, T(D))
            }

            function L(D) {
                return u = void 0, v && n ? m(D) : (n = i = void 0, a)
            }

            function C() {
                u !== void 0 && clearTimeout(u), d = 0, n = s = i = u = void 0
            }

            function q() {
                return u === void 0 ? a : L(es())
            }

            function M() {
                var D = es(),
                    B = R(D);
                if (n = arguments, i = this, s = D, B) {
                    if (u === void 0) return O(s);
                    if (h) return clearTimeout(u), u = setTimeout(I, t), m(s)
                }
                return u === void 0 && (u = setTimeout(I, t)), a
            }
            return M.cancel = C, M.flush = q, M
        }
        wm.exports = ak
    });
    var xm = c((_j, Am) => {
        var sk = Om(),
            uk = ut(),
            ck = "Expected a function";

        function lk(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(ck);
            return uk(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), sk(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Am.exports = lk
    });
    var Rm = {};
    Fe(Rm, {
        actionListPlaybackChanged: () => hr,
        animationFrameChanged: () => pi,
        clearRequested: () => Dk,
        elementStateChanged: () => us,
        eventListenerAdded: () => di,
        eventStateChanged: () => os,
        instanceAdded: () => as,
        instanceRemoved: () => ss,
        instanceStarted: () => gi,
        mediaQueriesDefined: () => ls,
        parameterChanged: () => vr,
        playbackRequested: () => Nk,
        previewRequested: () => Lk,
        rawDataImported: () => ts,
        sessionInitialized: () => rs,
        sessionStarted: () => ns,
        sessionStopped: () => is,
        stopRequested: () => qk,
        testFrameRendered: () => Mk,
        viewportWidthChanged: () => cs
    });
    var Sm, fk, dk, pk, gk, vk, hk, yk, mk, Ek, _k, bk, Ik, Tk, wk, Ok, Ak, xk, Sk, Rk, Ck, Pk, ts, rs, ns, is, Lk, Nk, qk, Dk, di, Mk, os, pi, vr, as, gi, ss, us, hr, cs, ls, vi = ye(() => {
        "use strict";
        Xe();
        Sm = le(Gt()), {
            IX2_RAW_DATA_IMPORTED: fk,
            IX2_SESSION_INITIALIZED: dk,
            IX2_SESSION_STARTED: pk,
            IX2_SESSION_STOPPED: gk,
            IX2_PREVIEW_REQUESTED: vk,
            IX2_PLAYBACK_REQUESTED: hk,
            IX2_STOP_REQUESTED: yk,
            IX2_CLEAR_REQUESTED: mk,
            IX2_EVENT_LISTENER_ADDED: Ek,
            IX2_TEST_FRAME_RENDERED: _k,
            IX2_EVENT_STATE_CHANGED: bk,
            IX2_ANIMATION_FRAME_CHANGED: Ik,
            IX2_PARAMETER_CHANGED: Tk,
            IX2_INSTANCE_ADDED: wk,
            IX2_INSTANCE_STARTED: Ok,
            IX2_INSTANCE_REMOVED: Ak,
            IX2_ELEMENT_STATE_CHANGED: xk,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Sk,
            IX2_VIEWPORT_WIDTH_CHANGED: Rk,
            IX2_MEDIA_QUERIES_DEFINED: Ck
        } = Te, {
            reifyState: Pk
        } = Sm.IX2VanillaUtils, ts = e => ({
            type: fk,
            payload: {
                ...Pk(e)
            }
        }), rs = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: dk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), ns = () => ({
            type: pk
        }), is = () => ({
            type: gk
        }), Lk = ({
            rawData: e,
            defer: t
        }) => ({
            type: vk,
            payload: {
                defer: t,
                rawData: e
            }
        }), Nk = ({
            actionTypeId: e = Ge.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: u,
            rawData: s
        }) => ({
            type: hk,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: u,
                rawData: s
            }
        }), qk = e => ({
            type: yk,
            payload: {
                actionListId: e
            }
        }), Dk = () => ({
            type: mk
        }), di = (e, t) => ({
            type: Ek,
            payload: {
                target: e,
                listenerParams: t
            }
        }), Mk = (e = 1) => ({
            type: _k,
            payload: {
                step: e
            }
        }), os = (e, t) => ({
            type: bk,
            payload: {
                stateKey: e,
                newState: t
            }
        }), pi = (e, t) => ({
            type: Ik,
            payload: {
                now: e,
                parameters: t
            }
        }), vr = (e, t) => ({
            type: Tk,
            payload: {
                key: e,
                value: t
            }
        }), as = e => ({
            type: wk,
            payload: {
                ...e
            }
        }), gi = (e, t) => ({
            type: Ok,
            payload: {
                instanceId: e,
                time: t
            }
        }), ss = e => ({
            type: Ak,
            payload: {
                instanceId: e
            }
        }), us = (e, t, r, n) => ({
            type: xk,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), hr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: Sk,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), cs = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: Rk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ls = () => ({
            type: Ck
        })
    });
    var qe = {};
    Fe(qe, {
        elementContains: () => ps,
        getChildElements: () => jk,
        getClosestElement: () => en,
        getProperty: () => Uk,
        getQuerySelector: () => ds,
        getRefType: () => gs,
        getSiblingElements: () => zk,
        getStyle: () => Xk,
        getValidDocument: () => Vk,
        isSiblingNode: () => Hk,
        matchSelector: () => Wk,
        queryDocument: () => Bk,
        setStyle: () => Gk
    });

    function Gk(e, t, r) {
        e.style[t] = r
    }

    function Xk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function Uk(e, t) {
        return e[t]
    }

    function Wk(e) {
        return t => t[fs](e)
    }

    function ds({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Cm) !== -1) {
                let n = e.split(Cm),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Lm)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function Vk(e) {
        return e == null || e === document.documentElement.getAttribute(Lm) ? document : null
    }

    function Bk(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ps(e, t) {
        return e.contains(t)
    }

    function Hk(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function jk(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function zk(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function gs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? Fk : kk : null
    }
    var Pm, fs, Cm, Fk, kk, Lm, en, Nm = ye(() => {
        "use strict";
        Pm = le(Gt());
        Xe();
        ({
            ELEMENT_MATCHES: fs
        } = Pm.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Cm,
            HTML_ELEMENT: Fk,
            PLAIN_OBJECT: kk,
            WF_PAGE: Lm
        } = Re;
        en = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[fs] && r[fs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var vs = c((Tj, Dm) => {
        var Kk = ut(),
            qm = Object.create,
            Yk = function() {
                function e() {}
                return function(t) {
                    if (!Kk(t)) return {};
                    if (qm) return qm(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Dm.exports = Yk
    });
    var hi = c((wj, Mm) => {
        function $k() {}
        Mm.exports = $k
    });
    var mi = c((Oj, Fm) => {
        var Qk = vs(),
            Zk = hi();

        function yi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        yi.prototype = Qk(Zk.prototype);
        yi.prototype.constructor = yi;
        Fm.exports = yi
    });
    var Um = c((Aj, Xm) => {
        var km = zt(),
            Jk = Fr(),
            eG = we(),
            Gm = km ? km.isConcatSpreadable : void 0;

        function tG(e) {
            return eG(e) || Jk(e) || !!(Gm && e && e[Gm])
        }
        Xm.exports = tG
    });
    var Bm = c((xj, Vm) => {
        var rG = Fn(),
            nG = Um();

        function Wm(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = nG), i || (i = []); ++o < a;) {
                var u = e[o];
                t > 0 && r(u) ? t > 1 ? Wm(u, t - 1, r, n, i) : rG(i, u) : n || (i[i.length] = u)
            }
            return i
        }
        Vm.exports = Wm
    });
    var jm = c((Sj, Hm) => {
        var iG = Bm();

        function oG(e) {
            var t = e == null ? 0 : e.length;
            return t ? iG(e, 1) : []
        }
        Hm.exports = oG
    });
    var Km = c((Rj, zm) => {
        function aG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        zm.exports = aG
    });
    var Qm = c((Cj, $m) => {
        var sG = Km(),
            Ym = Math.max;

        function uG(e, t, r) {
            return t = Ym(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = Ym(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var u = Array(t + 1); ++i < t;) u[i] = n[i];
                    return u[t] = r(a), sG(e, this, u)
                }
        }
        $m.exports = uG
    });
    var Jm = c((Pj, Zm) => {
        function cG(e) {
            return function() {
                return e
            }
        }
        Zm.exports = cG
    });
    var rE = c((Lj, tE) => {
        var lG = Jm(),
            eE = Za(),
            fG = Yn(),
            dG = eE ? function(e, t) {
                return eE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: lG(t),
                    writable: !0
                })
            } : fG;
        tE.exports = dG
    });
    var iE = c((Nj, nE) => {
        var pG = 800,
            gG = 16,
            vG = Date.now;

        function hG(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = vG(),
                    i = gG - (n - r);
                if (r = n, i > 0) {
                    if (++t >= pG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        nE.exports = hG
    });
    var aE = c((qj, oE) => {
        var yG = rE(),
            mG = iE(),
            EG = mG(yG);
        oE.exports = EG
    });
    var uE = c((Dj, sE) => {
        var _G = jm(),
            bG = Qm(),
            IG = aE();

        function TG(e) {
            return IG(bG(e, void 0, _G), e + "")
        }
        sE.exports = TG
    });
    var fE = c((Mj, lE) => {
        var cE = sa(),
            wG = cE && new cE;
        lE.exports = wG
    });
    var pE = c((Fj, dE) => {
        function OG() {}
        dE.exports = OG
    });
    var hs = c((kj, vE) => {
        var gE = fE(),
            AG = pE(),
            xG = gE ? function(e) {
                return gE.get(e)
            } : AG;
        vE.exports = xG
    });
    var yE = c((Gj, hE) => {
        var SG = {};
        hE.exports = SG
    });
    var ys = c((Xj, EE) => {
        var mE = yE(),
            RG = Object.prototype,
            CG = RG.hasOwnProperty;

        function PG(e) {
            for (var t = e.name + "", r = mE[t], n = CG.call(mE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        EE.exports = PG
    });
    var _i = c((Uj, _E) => {
        var LG = vs(),
            NG = hi(),
            qG = 4294967295;

        function Ei(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = qG, this.__views__ = []
        }
        Ei.prototype = LG(NG.prototype);
        Ei.prototype.constructor = Ei;
        _E.exports = Ei
    });
    var IE = c((Wj, bE) => {
        function DG(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        bE.exports = DG
    });
    var wE = c((Vj, TE) => {
        var MG = _i(),
            FG = mi(),
            kG = IE();

        function GG(e) {
            if (e instanceof MG) return e.clone();
            var t = new FG(e.__wrapped__, e.__chain__);
            return t.__actions__ = kG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        TE.exports = GG
    });
    var xE = c((Bj, AE) => {
        var XG = _i(),
            OE = mi(),
            UG = hi(),
            WG = we(),
            VG = gt(),
            BG = wE(),
            HG = Object.prototype,
            jG = HG.hasOwnProperty;

        function bi(e) {
            if (VG(e) && !WG(e) && !(e instanceof XG)) {
                if (e instanceof OE) return e;
                if (jG.call(e, "__wrapped__")) return BG(e)
            }
            return new OE(e)
        }
        bi.prototype = UG.prototype;
        bi.prototype.constructor = bi;
        AE.exports = bi
    });
    var RE = c((Hj, SE) => {
        var zG = _i(),
            KG = hs(),
            YG = ys(),
            $G = xE();

        function QG(e) {
            var t = YG(e),
                r = $G[t];
            if (typeof r != "function" || !(t in zG.prototype)) return !1;
            if (e === r) return !0;
            var n = KG(r);
            return !!n && e === n[0]
        }
        SE.exports = QG
    });
    var NE = c((jj, LE) => {
        var CE = mi(),
            ZG = uE(),
            JG = hs(),
            ms = ys(),
            eX = we(),
            PE = RE(),
            tX = "Expected a function",
            rX = 8,
            nX = 32,
            iX = 128,
            oX = 256;

        function aX(e) {
            return ZG(function(t) {
                var r = t.length,
                    n = r,
                    i = CE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(tX);
                    if (i && !a && ms(o) == "wrapper") var a = new CE([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var u = ms(o),
                        s = u == "wrapper" ? JG(o) : void 0;
                    s && PE(s[0]) && s[1] == (iX | rX | nX | oX) && !s[4].length && s[9] == 1 ? a = a[ms(s[0])].apply(a, s[3]) : a = o.length == 1 && PE(o) ? a[u]() : a.thru(o)
                }
                return function() {
                    var d = arguments,
                        y = d[0];
                    if (a && d.length == 1 && eX(y)) return a.plant(y).value();
                    for (var h = 0, v = r ? t[h].apply(this, d) : y; ++h < r;) v = t[h].call(this, v);
                    return v
                }
            })
        }
        LE.exports = aX
    });
    var DE = c((zj, qE) => {
        var sX = NE(),
            uX = sX();
        qE.exports = uX
    });
    var FE = c((Kj, ME) => {
        function cX(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        ME.exports = cX
    });
    var GE = c((Yj, kE) => {
        var lX = FE(),
            Es = $n();

        function fX(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Es(r), r = r === r ? r : 0), t !== void 0 && (t = Es(t), t = t === t ? t : 0), lX(Es(e), t, r)
        }
        kE.exports = fX
    });
    var KE, YE, $E, QE, dX, pX, gX, vX, hX, yX, mX, EX, _X, bX, IX, TX, wX, OX, AX, ZE, JE, xX, SX, RX, e_, CX, PX, t_, LX, _s, r_, XE, UE, n_, rn, NX, ft, i_, qX, We, et, nn, o_, bs, WE, Is, DX, tn, MX, FX, kX, a_, VE, GX, BE, XX, UX, WX, HE, Ii, Ti, jE, zE, s_, u_ = ye(() => {
        "use strict";
        KE = le(DE()), YE = le(Kn()), $E = le(GE());
        Xe();
        Ts();
        vi();
        QE = le(Gt()), {
            MOUSE_CLICK: dX,
            MOUSE_SECOND_CLICK: pX,
            MOUSE_DOWN: gX,
            MOUSE_UP: vX,
            MOUSE_OVER: hX,
            MOUSE_OUT: yX,
            DROPDOWN_CLOSE: mX,
            DROPDOWN_OPEN: EX,
            SLIDER_ACTIVE: _X,
            SLIDER_INACTIVE: bX,
            TAB_ACTIVE: IX,
            TAB_INACTIVE: TX,
            NAVBAR_CLOSE: wX,
            NAVBAR_OPEN: OX,
            MOUSE_MOVE: AX,
            PAGE_SCROLL_DOWN: ZE,
            SCROLL_INTO_VIEW: JE,
            SCROLL_OUT_OF_VIEW: xX,
            PAGE_SCROLL_UP: SX,
            SCROLLING_IN_VIEW: RX,
            PAGE_FINISH: e_,
            ECOMMERCE_CART_CLOSE: CX,
            ECOMMERCE_CART_OPEN: PX,
            PAGE_START: t_,
            PAGE_SCROLL: LX
        } = Ze, _s = "COMPONENT_ACTIVE", r_ = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: XE
        } = Re, {
            getNamespacedParameterId: UE
        } = QE.IX2VanillaUtils, n_ = e => t => typeof t == "object" && e(t) ? !0 : t, rn = n_(({
            element: e,
            nativeEvent: t
        }) => e === t.target), NX = n_(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ft = (0, KE.default)([rn, NX]), i_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !DX[i.eventTypeId]) return i
            }
            return null
        }, qX = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!i_(e, n)
        }, We = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: u,
                autoStopEventId: s
            } = o.config, d = i_(e, s);
            return d && yr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: s + XE + n.split(XE)[1],
                actionListId: (0, YE.default)(d, "action.config.actionListId")
            }), yr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }), on({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: u
            }), i
        }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, nn = {
            handler: et(ft, We)
        }, o_ = {
            ...nn,
            types: [_s, r_].join(" ")
        }, bs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], WE = "mouseover mouseout", Is = {
            types: bs
        }, DX = {
            PAGE_START: t_,
            PAGE_FINISH: e_
        }, tn = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, $E.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), MX = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), FX = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, kX = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = tn(), o = r.scrollOffsetValue, s = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return MX(t.getBoundingClientRect(), {
                left: 0,
                top: s,
                right: n,
                bottom: i - s
            })
        }, a_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [_s, r_].indexOf(n) !== -1 ? n === _s : r.isActive, o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, VE = e => (t, r) => {
            let n = {
                elementHovered: FX(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, GX = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: kX(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, BE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = tn(), {
                event: {
                    config: a,
                    eventTypeId: u
                }
            } = t, {
                scrollOffsetValue: s,
                scrollOffsetUnit: d
            } = a, y = d === "PX", h = i - o, v = Number((n / h).toFixed(2));
            if (r && r.percentTop === v) return r;
            let m = (y ? s : o * (s || 0) / 100) / h,
                O, T, R = 0;
            r && (O = v > r.percentTop, T = r.scrollingDown !== O, R = T ? v : r.anchorTop);
            let I = u === ZE ? v >= R + m : v <= R - m,
                L = {
                    ...r,
                    percentTop: v,
                    inBounds: I,
                    anchorTop: R,
                    scrollingDown: O
                };
            return r && I && (T || L.inBounds !== r.inBounds) && e(t, L) || L
        }, XX = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, UX = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, WX = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, HE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Ii = (e = !0) => ({
            ...o_,
            handler: et(e ? ft : rn, a_((t, r) => r.isActive ? nn.handler(t, r) : r))
        }), Ti = (e = !0) => ({
            ...o_,
            handler: et(e ? ft : rn, a_((t, r) => r.isActive ? r : nn.handler(t, r)))
        }), jE = {
            ...Is,
            handler: GX((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === JE === r ? (We(e), {
                    ...t,
                    triggered: !0
                }) : t
            })
        }, zE = .05, s_ = {
            [_X]: Ii(),
            [bX]: Ti(),
            [EX]: Ii(),
            [mX]: Ti(),
            [OX]: Ii(!1),
            [wX]: Ti(!1),
            [IX]: Ii(),
            [TX]: Ti(),
            [PX]: {
                types: "ecommerce-cart-open",
                handler: et(ft, We)
            },
            [CX]: {
                types: "ecommerce-cart-close",
                handler: et(ft, We)
            },
            [dX]: {
                types: "click",
                handler: et(ft, HE((e, {
                    clickCount: t
                }) => {
                    qX(e) ? t === 1 && We(e) : We(e)
                }))
            },
            [pX]: {
                types: "click",
                handler: et(ft, HE((e, {
                    clickCount: t
                }) => {
                    t === 2 && We(e)
                }))
            },
            [gX]: {
                ...nn,
                types: "mousedown"
            },
            [vX]: {
                ...nn,
                types: "mouseup"
            },
            [hX]: {
                types: WE,
                handler: et(ft, VE((e, t) => {
                    t.elementHovered && We(e)
                }))
            },
            [yX]: {
                types: WE,
                handler: et(ft, VE((e, t) => {
                    t.elementHovered || We(e)
                }))
            },
            [AX]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: u,
                        continuousParameterGroupId: s,
                        reverse: d,
                        restingState: y = 0
                    } = r, {
                        clientX: h = o.clientX,
                        clientY: v = o.clientY,
                        pageX: m = o.pageX,
                        pageY: O = o.pageY
                    } = n, T = u === "X_AXIS", R = n.type === "mouseout", I = y / 100, L = s, C = !1;
                    switch (a) {
                        case st.VIEWPORT: {
                            I = T ? Math.min(h, window.innerWidth) / window.innerWidth : Math.min(v, window.innerHeight) / window.innerHeight;
                            break
                        }
                        case st.PAGE: {
                            let {
                                scrollLeft: q,
                                scrollTop: M,
                                scrollWidth: D,
                                scrollHeight: B
                            } = tn();
                            I = T ? Math.min(q + m, D) / D : Math.min(M + O, B) / B;
                            break
                        }
                        case st.ELEMENT:
                        default: {
                            L = UE(i, s);
                            let q = n.type.indexOf("mouse") === 0;
                            if (q && ft({
                                    element: t,
                                    nativeEvent: n
                                }) !== !0) break;
                            let M = t.getBoundingClientRect(),
                                {
                                    left: D,
                                    top: B,
                                    width: K,
                                    height: $
                                } = M;
                            if (!q && !XX({
                                    left: h,
                                    top: v
                                }, M)) break;
                            C = !0, I = T ? (h - D) / K : (v - B) / $;
                            break
                        }
                    }
                    return R && (I > 1 - zE || I < zE) && (I = Math.round(I)), (a !== st.ELEMENT || C || C !== o.elementHovered) && (I = d ? 1 - I : I, e.dispatch(vr(L, I))), {
                        elementHovered: C,
                        clientX: h,
                        clientY: v,
                        pageX: m,
                        pageY: O
                    }
                }
            },
            [LX]: {
                types: bs,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = tn(), u = i / (o - a);
                    u = n ? 1 - u : u, e.dispatch(vr(r, u))
                }
            },
            [RX]: {
                types: bs,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: u,
                        scrollHeight: s,
                        clientHeight: d
                    } = tn(), {
                        basedOn: y,
                        selectedAxis: h,
                        continuousParameterGroupId: v,
                        startsEntering: m,
                        startsExiting: O,
                        addEndOffset: T,
                        addStartOffset: R,
                        addOffsetValue: I = 0,
                        endOffsetValue: L = 0
                    } = r, C = h === "X_AXIS";
                    if (y === st.VIEWPORT) {
                        let q = C ? o / u : a / s;
                        return q !== i.scrollPercent && t.dispatch(vr(v, q)), {
                            scrollPercent: q
                        }
                    } else {
                        let q = UE(n, v),
                            M = e.getBoundingClientRect(),
                            D = (R ? I : 0) / 100,
                            B = (T ? L : 0) / 100;
                        D = m ? D : 1 - D, B = O ? B : 1 - B;
                        let K = M.top + Math.min(M.height * D, d),
                            J = M.top + M.height * B - K,
                            ee = Math.min(d + J, s),
                            x = Math.min(Math.max(0, d - K), ee) / ee;
                        return x !== i.scrollPercent && t.dispatch(vr(q, x)), {
                            scrollPercent: x
                        }
                    }
                }
            },
            [JE]: jE,
            [xX]: jE,
            [ZE]: {
                ...Is,
                handler: BE((e, t) => {
                    t.scrollingDown && We(e)
                })
            },
            [SX]: {
                ...Is,
                handler: BE((e, t) => {
                    t.scrollingDown || We(e)
                })
            },
            [e_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(rn, UX(We))
            },
            [t_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(rn, WX(We))
            }
        }
    });
    var O_ = {};
    Fe(O_, {
        observeRequests: () => uU,
        startActionGroup: () => on,
        startEngine: () => Ri,
        stopActionGroup: () => yr,
        stopAllActionGroups: () => I_,
        stopEngine: () => Ci
    });

    function uU(e) {
        Xt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: fU
        }), Xt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: dU
        }), Xt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: pU
        }), Xt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: gU
        })
    }

    function cU(e) {
        Xt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ci(e), m_({
                    store: e,
                    elementApi: qe
                }), Ri({
                    store: e,
                    allowEvents: !0
                }), E_()
            }
        })
    }

    function lU(e, t) {
        let r = Xt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function fU({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Ri({
                store: r,
                rawData: e,
                allowEvents: !0
            }), E_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function E_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function dU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: u,
            testManual: s,
            verbose: d = !0
        } = e, {
            rawData: y
        } = e;
        if (n && i && y && u) {
            let h = y.actionLists[n];
            h && (y = QX({
                actionList: h,
                actionItemId: i,
                rawData: y
            }))
        }
        if (Ri({
                store: t,
                rawData: y,
                allowEvents: a,
                testManual: s
            }), n && r === Ge.GENERAL_START_ACTION || ws(r)) {
            yr({
                store: t,
                actionListId: n
            }), b_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let h = on({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: u,
                verbose: d
            });
            d && h && t.dispatch(hr({
                actionListId: n,
                isPlaying: !u
            }))
        }
    }

    function pU({
        actionListId: e
    }, t) {
        e ? yr({
            store: t,
            actionListId: e
        }) : I_({
            store: t
        }), Ci(t)
    }

    function gU(e, t) {
        Ci(t), m_({
            store: t,
            elementApi: qe
        })
    }

    function Ri({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(ts(t)), i.active || (e.dispatch(rs({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (_U(e), vU(), e.getState().ixSession.hasDefinedMediaQueries && cU(e)), e.dispatch(ns()), hU(e, n))
    }

    function vU() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(c_) === -1 && (e.className += ` ${c_}`)
    }

    function hU(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(pi(n, o)), t ? lU(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ci(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(yU), tU(), e.dispatch(is())
        }
    }

    function yU({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function mU({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: u,
        restingValue: s
    }) {
        let {
            ixData: d,
            ixSession: y
        } = e.getState(), {
            events: h
        } = d, v = h[n], {
            eventTypeId: m
        } = v, O = {}, T = {}, R = [], {
            continuousActionGroups: I
        } = a, {
            id: L
        } = a;
        ZX(m, i) && (L = JX(t, L));
        let C = y.hasBoundaryNodes && r ? en(r, Oi) : null;
        I.forEach(q => {
            let {
                keyframe: M,
                actionItems: D
            } = q;
            D.forEach(B => {
                let {
                    actionTypeId: K
                } = B, {
                    target: $
                } = B.config;
                if (!$) return;
                let J = $.boundaryMode ? C : null,
                    ee = rU($) + Os + K;
                if (T[ee] = EU(T[ee], M, B), !O[ee]) {
                    O[ee] = !0;
                    let {
                        config: G
                    } = B;
                    Ai({
                        config: G,
                        event: v,
                        eventTarget: r,
                        elementRoot: J,
                        elementApi: qe
                    }).forEach(x => {
                        R.push({
                            element: x,
                            key: ee
                        })
                    })
                }
            })
        }), R.forEach(({
            element: q,
            key: M
        }) => {
            let D = T[M],
                B = (0, mt.default)(D, "[0].actionItems[0]", {}),
                {
                    actionTypeId: K
                } = B,
                $ = Si(K) ? xs(K)(q, B) : null,
                J = As({
                    element: q,
                    actionItem: B,
                    elementApi: qe
                }, $);
            Ss({
                store: e,
                element: q,
                eventId: n,
                actionListId: o,
                actionItem: B,
                destination: J,
                continuous: !0,
                parameterId: L,
                actionGroups: D,
                smoothing: u,
                restingValue: s,
                pluginInstance: $
            })
        })
    }

    function EU(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function _U(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        __(e), (0, mr.default)(r, (i, o) => {
            let a = s_[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            AU({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && IU(e)
    }

    function IU(e) {
        let t = () => {
            __(e)
        };
        bU.forEach(r => {
            window.addEventListener(r, t), e.dispatch(di(window, [r, t]))
        }), t()
    }

    function __(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(cs({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function AU({
        logic: e,
        store: t,
        events: r
    }) {
        xU(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, u = TU(r, OU);
        if (!(0, d_.default)(u)) return;
        (0, mr.default)(u, (h, v) => {
            let m = r[v],
                {
                    action: O,
                    id: T,
                    mediaQueries: R = o.mediaQueryKeys
                } = m,
                {
                    actionListId: I
                } = O.config;
            nU(R, o.mediaQueryKeys) || t.dispatch(ls()), O.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(C => {
                let {
                    continuousParameterGroupId: q
                } = C, M = (0, mt.default)(a, `${I}.continuousParameterGroups`, []), D = (0, f_.default)(M, ({
                    id: $
                }) => $ === q), B = (C.smoothing || 0) / 100, K = (C.restingState || 0) / 100;
                D && h.forEach(($, J) => {
                    let ee = T + Os + J;
                    mU({
                        store: t,
                        eventStateKey: ee,
                        eventTarget: $,
                        eventId: T,
                        eventConfig: C,
                        actionListId: I,
                        parameterGroup: D,
                        smoothing: B,
                        restingValue: K
                    })
                })
            }), (O.actionTypeId === Ge.GENERAL_START_ACTION || ws(O.actionTypeId)) && b_({
                store: t,
                actionListId: I,
                eventId: T
            })
        });
        let s = h => {
                let {
                    ixSession: v
                } = t.getState();
                wU(u, (m, O, T) => {
                    let R = r[O],
                        I = v.eventState[T],
                        {
                            action: L,
                            mediaQueries: C = o.mediaQueryKeys
                        } = R;
                    if (!xi(C, v.mediaQueryKey)) return;
                    let q = (M = {}) => {
                        let D = i({
                            store: t,
                            element: m,
                            event: R,
                            eventConfig: M,
                            nativeEvent: h,
                            eventStateKey: T
                        }, I);
                        iU(D, I) || t.dispatch(os(T, D))
                    };
                    L.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(q) : q()
                })
            },
            d = (0, h_.default)(s, sU),
            y = ({
                target: h = document,
                types: v,
                throttle: m
            }) => {
                v.split(" ").filter(Boolean).forEach(O => {
                    let T = m ? d : s;
                    h.addEventListener(O, T), t.dispatch(di(h, [O, T]))
                })
            };
        Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e)
    }

    function xU(e) {
        if (!aU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = ds(o);
            t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function b_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, u = a[r], s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
            let d = (0, mt.default)(s, "actionItemGroups[0].actionItems", []),
                y = (0, mt.default)(u, "mediaQueries", n.mediaQueryKeys);
            if (!xi(y, i.mediaQueryKey)) return;
            d.forEach(h => {
                let {
                    config: v,
                    actionTypeId: m
                } = h, O = v?.target?.useEventTarget === !0 && v?.target?.objectId == null ? {
                    target: u.target,
                    targets: u.targets
                } : v, T = Ai({
                    config: O,
                    event: u,
                    elementApi: qe
                }), R = Si(m);
                T.forEach(I => {
                    let L = R ? xs(m)(I, h) : null;
                    Ss({
                        destination: As({
                            element: I,
                            actionItem: h,
                            elementApi: qe
                        }, L),
                        immediate: !0,
                        store: e,
                        element: I,
                        eventId: r,
                        actionItem: h,
                        actionListId: t,
                        pluginInstance: L
                    })
                })
            })
        }
    }

    function I_({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, mr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Rs(r, e), i && e.dispatch(hr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function yr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), u = a.hasBoundaryNodes && r ? en(r, Oi) : null;
        (0, mr.default)(o, s => {
            let d = (0, mt.default)(s, "actionItem.config.target.boundaryMode"),
                y = n ? s.eventStateKey === n : !0;
            if (s.actionListId === i && s.eventId === t && y) {
                if (u && d && !ps(u, s.element)) return;
                Rs(s, e), s.verbose && e.dispatch(hr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function on({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: u
    }) {
        let {
            ixData: s,
            ixSession: d
        } = e.getState(), {
            events: y
        } = s, h = y[t] || {}, {
            mediaQueries: v = s.mediaQueryKeys
        } = h, m = (0, mt.default)(s, `actionLists.${i}`, {}), {
            actionItemGroups: O,
            useFirstGroupAsInitialState: T
        } = m;
        if (!O || !O.length) return !1;
        o >= O.length && (0, mt.default)(h, "config.loop") && (o = 0), o === 0 && T && o++;
        let I = (o === 0 || o === 1 && T) && ws(h.action?.actionTypeId) ? h.config.delay : void 0,
            L = (0, mt.default)(O, [o, "actionItems"], []);
        if (!L.length || !xi(v, d.mediaQueryKey)) return !1;
        let C = d.hasBoundaryNodes && r ? en(r, Oi) : null,
            q = KX(L),
            M = !1;
        return L.forEach((D, B) => {
            let {
                config: K,
                actionTypeId: $
            } = D, J = Si($), {
                target: ee
            } = K;
            if (!ee) return;
            let G = ee.boundaryMode ? C : null;
            Ai({
                config: K,
                event: h,
                eventTarget: r,
                elementRoot: G,
                elementApi: qe
            }).forEach((F, H) => {
                let V = J ? xs($)(F, D) : null,
                    te = J ? oU($)(F, D) : null;
                M = !0;
                let re = q === B && H === 0,
                    X = YX({
                        element: F,
                        actionItem: D
                    }),
                    Y = As({
                        element: F,
                        actionItem: D,
                        elementApi: qe
                    }, V);
                Ss({
                    store: e,
                    element: F,
                    actionItem: D,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: re,
                    computedStyle: X,
                    destination: Y,
                    immediate: a,
                    verbose: u,
                    pluginInstance: V,
                    pluginDuration: te,
                    instanceDelay: I
                })
            })
        }), M
    }

    function Ss(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: u,
            continuous: s,
            restingValue: d,
            eventId: y
        } = n, h = !s, v = jX(), {
            ixElements: m,
            ixSession: O,
            ixData: T
        } = t.getState(), R = HX(m, i), {
            refState: I
        } = m[R] || {}, L = gs(i), C = O.reducedMotion && Ko[o.actionTypeId], q;
        if (C && s) switch (T.events[y]?.eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                q = d;
                break;
            default:
                q = .5;
                break
        }
        let M = $X(i, I, r, o, qe, u);
        if (t.dispatch(as({
                instanceId: v,
                elementId: R,
                origin: M,
                refType: L,
                skipMotion: C,
                skipToValue: q,
                ...n
            })), T_(document.body, "ix2-animation-started", v), a) {
            SU(t, v);
            return
        }
        Xt({
            store: t,
            select: ({
                ixInstances: D
            }) => D[v],
            onChange: w_
        }), h && t.dispatch(gi(v, O.tick))
    }

    function Rs(e, t) {
        T_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === y_ && eU(o, n, qe), t.dispatch(ss(e.id))
    }

    function T_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function SU(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(gi(t, 0)), e.dispatch(pi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        w_(n[t], e)
    }

    function w_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: u,
            renderType: s,
            current: d,
            groupIndex: y,
            eventId: h,
            eventTarget: v,
            eventStateKey: m,
            actionListId: O,
            isCarrier: T,
            styleProp: R,
            verbose: I,
            pluginInstance: L
        } = e, {
            ixData: C,
            ixSession: q
        } = t.getState(), {
            events: M
        } = C, D = M && M[h] ? M[h] : {}, {
            mediaQueries: B = C.mediaQueryKeys
        } = D;
        if (xi(B, q.mediaQueryKey) && (n || r || i)) {
            if (d || s === BX && i) {
                t.dispatch(us(o, u, d, a));
                let {
                    ixElements: K
                } = t.getState(), {
                    ref: $,
                    refType: J,
                    refState: ee
                } = K[o] || {}, G = ee && ee[u];
                (J === y_ || Si(u)) && zX($, ee, G, h, a, R, qe, s, L)
            }
            if (i) {
                if (T) {
                    let K = on({
                        store: t,
                        eventId: h,
                        eventTarget: v,
                        eventStateKey: m,
                        actionListId: O,
                        groupIndex: y + 1,
                        verbose: I
                    });
                    I && !K && t.dispatch(hr({
                        actionListId: O,
                        isPlaying: !1
                    }))
                }
                Rs(e, t)
            }
        }
    }
    var f_, mt, d_, p_, g_, v_, mr, h_, wi, VX, ws, Os, Oi, y_, BX, c_, Ai, HX, As, Xt, jX, zX, m_, KX, YX, $X, QX, ZX, JX, xi, eU, tU, rU, nU, iU, Si, xs, oU, l_, aU, sU, bU, TU, wU, OU, Ts = ye(() => {
        "use strict";
        f_ = le(Ta()), mt = le(Kn()), d_ = le(ky()), p_ = le(lm()), g_ = le(dm()), v_ = le(gm()), mr = le(_m()), h_ = le(xm());
        Xe();
        wi = le(Gt());
        vi();
        Nm();
        u_();
        VX = Object.keys(An), ws = e => VX.includes(e), {
            COLON_DELIMITER: Os,
            BOUNDARY_SELECTOR: Oi,
            HTML_ELEMENT: y_,
            RENDER_GENERAL: BX,
            W_MOD_IX: c_
        } = Re, {
            getAffectedElements: Ai,
            getElementId: HX,
            getDestinationValues: As,
            observeStore: Xt,
            getInstanceId: jX,
            renderHTMLElement: zX,
            clearAllStyles: m_,
            getMaxDurationItemIndex: KX,
            getComputedStyle: YX,
            getInstanceOrigin: $X,
            reduceListToGroup: QX,
            shouldNamespaceEventParameter: ZX,
            getNamespacedParameterId: JX,
            shouldAllowMediaQuery: xi,
            cleanupHTMLElement: eU,
            clearObjectCache: tU,
            stringifyTarget: rU,
            mediaQueriesEqual: nU,
            shallowEqual: iU
        } = wi.IX2VanillaUtils, {
            isPluginType: Si,
            createPluginInstance: xs,
            getPluginDuration: oU
        } = wi.IX2VanillaPlugins, l_ = navigator.userAgent, aU = l_.match(/iPad/i) || l_.match(/iPhone/), sU = 12;
        bU = ["resize", "orientationchange"];
        TU = (e, t) => (0, p_.default)((0, v_.default)(e, t), g_.default), wU = (e, t) => {
            (0, mr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + Os + o;
                    t(i, n, a)
                })
            })
        }, OU = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ai({
                config: t,
                elementApi: qe
            })
        }
    });
    var x_ = c(Et => {
        "use strict";
        var RU = pn().default,
            CU = uu().default;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Et.actions = void 0;
        Et.destroy = A_;
        Et.init = DU;
        Et.setEnv = qU;
        Et.store = void 0;
        zl();
        var PU = Ho(),
            LU = CU((Ey(), nt(my))),
            Cs = (Ts(), nt(O_)),
            NU = RU((vi(), nt(Rm)));
        Et.actions = NU;
        var Ps = Et.store = (0, PU.createStore)(LU.default);

        function qU(e) {
            e() && (0, Cs.observeRequests)(Ps)
        }

        function DU(e) {
            A_(), (0, Cs.startEngine)({
                store: Ps,
                rawData: e,
                allowEvents: !0
            })
        }

        function A_() {
            (0, Cs.stopEngine)(Ps)
        }
    });
    var P_ = c((oz, C_) => {
        "use strict";
        var S_ = ke(),
            R_ = x_();
        R_.setEnv(S_.env);
        S_.define("ix2", C_.exports = function() {
            return R_
        })
    });
    var N_ = c((az, L_) => {
        "use strict";
        var Er = ke();
        Er.define("links", L_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Er.env(),
                a = window.location,
                u = document.createElement("a"),
                s = "w--current",
                d = /index\.(html|php)$/,
                y = /\/$/,
                h, v;
            r.ready = r.design = r.preview = m;

            function m() {
                i = o && Er.env("design"), v = Er.env("slug") || a.pathname || "", Er.scroll.off(T), h = [];
                for (var I = document.links, L = 0; L < I.length; ++L) O(I[L]);
                h.length && (Er.scroll.on(T), T())
            }

            function O(I) {
                if (!I.getAttribute("hreflang")) {
                    var L = i && I.getAttribute("href-disabled") || I.getAttribute("href");
                    if (u.href = L, !(L.indexOf(":") >= 0)) {
                        var C = e(I);
                        if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                            var q = e(u.hash);
                            q.length && h.push({
                                link: C,
                                sec: q,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var M = u.href === a.href || L === v || d.test(L) && y.test(v);
                            R(C, s, M)
                        }
                    }
                }
            }

            function T() {
                var I = n.scrollTop(),
                    L = n.height();
                t.each(h, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var q = C.link,
                            M = C.sec,
                            D = M.offset().top,
                            B = M.outerHeight(),
                            K = L * .5,
                            $ = M.is(":visible") && D + B - K >= I && D + K <= I + L;
                        C.active !== $ && (C.active = $, R(q, s, $))
                    }
                })
            }

            function R(I, L, C) {
                var q = I.hasClass(L);
                C && q || !C && !q || (C ? I.addClass(L) : I.removeClass(L))
            }
            return r
        })
    });
    var D_ = c((sz, q_) => {
        "use strict";
        var Pi = ke();
        Pi.define("scroll", q_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = O() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(G) {
                    window.setTimeout(G, 15)
                },
                s = Pi.env("editor") ? ".w-editor-body" : "body",
                d = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
                y = 'a[href="#"]',
                h = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
                v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                m = document.createElement("style");
            m.appendChild(document.createTextNode(v));

            function O() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var T = /^#[a-zA-Z0-9][\w:.-]*$/;

            function R(G) {
                return T.test(G.hash) && G.host + G.pathname === r.host + r.pathname
            }
            let I = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || I.matches
            }

            function C(G, x) {
                var F;
                switch (x) {
                    case "add":
                        F = G.attr("tabindex"), F ? G.attr("data-wf-tabindex-swap", F) : G.attr("tabindex", "-1");
                        break;
                    case "remove":
                        F = G.attr("data-wf-tabindex-swap"), F ? (G.attr("tabindex", F), G.removeAttr("data-wf-tabindex-swap")) : G.removeAttr("tabindex");
                        break
                }
                G.toggleClass("wf-force-outline-none", x === "add")
            }

            function q(G) {
                var x = G.currentTarget;
                if (!(Pi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(x.className))) {
                    var F = R(x) ? x.hash : "";
                    if (F !== "") {
                        var H = e(F);
                        H.length && (G && (G.preventDefault(), G.stopPropagation()), M(F, G), window.setTimeout(function() {
                            D(H, function() {
                                C(H, "add"), H.get(0).focus({
                                    preventScroll: !0
                                }), C(H, "remove")
                            })
                        }, G ? 0 : 300))
                    }
                }
            }

            function M(G) {
                if (r.hash !== G && n && n.pushState && !(Pi.env.chrome && r.protocol === "file:")) {
                    var x = n.state && n.state.hash;
                    x !== G && n.pushState({
                        hash: G
                    }, "", G)
                }
            }

            function D(G, x) {
                var F = i.scrollTop(),
                    H = B(G);
                if (F !== H) {
                    var V = K(G, F, H),
                        te = Date.now(),
                        re = function() {
                            var X = Date.now() - te;
                            window.scroll(0, $(F, H, X, V)), X <= V ? u(re) : typeof x == "function" && x()
                        };
                    u(re)
                }
            }

            function B(G) {
                var x = e(d),
                    F = x.css("position") === "fixed" ? x.outerHeight() : 0,
                    H = G.offset().top - F;
                if (G.data("scroll") === "mid") {
                    var V = i.height() - F,
                        te = G.outerHeight();
                    te < V && (H -= Math.round((V - te) / 2))
                }
                return H
            }

            function K(G, x, F) {
                if (L()) return 0;
                var H = 1;
                return a.add(G).each(function(V, te) {
                    var re = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (H = re)
                }), (472.143 * Math.log(Math.abs(x - F) + 125) - 2e3) * H
            }

            function $(G, x, F, H) {
                return F > H ? x : G + (x - G) * J(F / H)
            }

            function J(G) {
                return G < .5 ? 4 * G * G * G : (G - 1) * (2 * G - 2) * (2 * G - 2) + 1
            }

            function ee() {
                var {
                    WF_CLICK_EMPTY: G,
                    WF_CLICK_SCROLL: x
                } = t;
                o.on(x, h, q), o.on(G, y, function(F) {
                    F.preventDefault()
                }), document.head.insertBefore(m, document.head.firstChild)
            }
            return {
                ready: ee
            }
        })
    });
    var F_ = c((uz, M_) => {
        "use strict";
        var MU = ke();
        MU.define("touch", M_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    u = !1,
                    s = Math.min(Math.round(window.innerWidth * .04), 40),
                    d, y;
                o.addEventListener("touchstart", h, !1), o.addEventListener("touchmove", v, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", O, !1), o.addEventListener("mousedown", h, !1), o.addEventListener("mousemove", v, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", O, !1);

                function h(R) {
                    var I = R.touches;
                    I && I.length > 1 || (a = !0, I ? (u = !0, d = I[0].clientX) : d = R.clientX, y = d)
                }

                function v(R) {
                    if (a) {
                        if (u && R.type === "mousemove") {
                            R.preventDefault(), R.stopPropagation();
                            return
                        }
                        var I = R.touches,
                            L = I ? I[0].clientX : R.clientX,
                            C = L - y;
                        y = L, Math.abs(C) > s && r && String(r()) === "" && (i("swipe", R, {
                            direction: C > 0 ? "right" : "left"
                        }), O())
                    }
                }

                function m(R) {
                    if (a && (a = !1, u && R.type === "mouseup")) {
                        R.preventDefault(), R.stopPropagation(), u = !1;
                        return
                    }
                }

                function O() {
                    a = !1
                }

                function T() {
                    o.removeEventListener("touchstart", h, !1), o.removeEventListener("touchmove", v, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", O, !1), o.removeEventListener("mousedown", h, !1), o.removeEventListener("mousemove", v, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", O, !1), o = null
                }
                this.destroy = T
            }

            function i(o, a, u) {
                var s = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(s, u)
            }
            return t.instance = t.init(document), t
        })
    });
    var X_ = c((cz, G_) => {
        "use strict";
        var Ut = ke(),
            FU = br(),
            tt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            k_ = !0,
            kU = /^#[a-zA-Z0-9\-_]+$/;
        Ut.define("dropdown", G_.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Ut.env(),
                o = !1,
                a, u = Ut.env.touch,
                s = ".w-dropdown",
                d = "w--open",
                y = FU.triggers,
                h = 900,
                v = "focusout" + s,
                m = "keydown" + s,
                O = "mouseenter" + s,
                T = "mousemove" + s,
                R = "mouseleave" + s,
                I = (u ? "click" : "mouseup") + s,
                L = "w-close" + s,
                C = "setting" + s,
                q = e(document),
                M;
            n.ready = D, n.design = function() {
                o && x(), o = !1, D()
            }, n.preview = function() {
                o = !0, D()
            };

            function D() {
                a = i && Ut.env("design"), M = q.find(s), M.each(B)
            }

            function B(l, k) {
                var U = e(k),
                    S = e.data(k, s);
                S || (S = e.data(k, s, {
                    open: !1,
                    el: U,
                    config: {},
                    selectedIdx: -1
                })), S.toggle = S.el.children(".w-dropdown-toggle"), S.list = S.el.children(".w-dropdown-list"), S.links = S.list.find("a:not(.w-dropdown .w-dropdown a)"), S.complete = V(S), S.mouseLeave = re(S), S.mouseUpOutside = H(S), S.mouseMoveOutside = X(S), K(S);
                var ie = S.toggle.attr("id"),
                    fe = S.list.attr("id");
                ie || (ie = "w-dropdown-toggle-" + l), fe || (fe = "w-dropdown-list-" + l), S.toggle.attr("id", ie), S.toggle.attr("aria-controls", fe), S.toggle.attr("aria-haspopup", "menu"), S.toggle.attr("aria-expanded", "false"), S.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), S.toggle.prop("tagName") !== "BUTTON" && (S.toggle.attr("role", "button"), S.toggle.attr("tabindex") || S.toggle.attr("tabindex", "0")), S.list.attr("id", fe), S.list.attr("aria-labelledby", ie), S.links.each(function(g, W) {
                    W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"), kU.test(W.hash) && W.addEventListener("click", G.bind(null, S))
                }), S.el.off(s), S.toggle.off(s), S.nav && S.nav.off(s);
                var oe = J(S, k_);
                a && S.el.on(C, $(S)), a || (i && (S.hovering = !1, G(S)), S.config.hover && S.toggle.on(O, te(S)), S.el.on(L, oe), S.el.on(m, Y(S)), S.el.on(v, _(S)), S.toggle.on(I, oe), S.toggle.on(m, E(S)), S.nav = S.el.closest(".w-nav"), S.nav.on(L, oe))
            }

            function K(l) {
                var k = Number(l.el.css("z-index"));
                l.manageZ = k === h || k === h + 1, l.config = {
                    hover: l.el.attr("data-hover") === "true" && !u,
                    delay: l.el.attr("data-delay")
                }
            }

            function $(l) {
                return function(k, U) {
                    U = U || {}, K(l), U.open === !0 && ee(l, !0), U.open === !1 && G(l, {
                        immediate: !0
                    })
                }
            }

            function J(l, k) {
                return r(function(U) {
                    if (l.open || U && U.type === "w-close") return G(l, {
                        forceClose: k
                    });
                    ee(l)
                })
            }

            function ee(l) {
                if (!l.open) {
                    F(l), l.open = !0, l.list.addClass(d), l.toggle.addClass(d), l.toggle.attr("aria-expanded", "true"), y.intro(0, l.el[0]), Ut.redraw.up(), l.manageZ && l.el.css("z-index", h + 1);
                    var k = Ut.env("editor");
                    a || q.on(I, l.mouseUpOutside), l.hovering && !k && l.el.on(R, l.mouseLeave), l.hovering && k && q.on(T, l.mouseMoveOutside), window.clearTimeout(l.delayId)
                }
            }

            function G(l, {
                immediate: k,
                forceClose: U
            } = {}) {
                if (l.open && !(l.config.hover && l.hovering && !U)) {
                    l.toggle.attr("aria-expanded", "false"), l.open = !1;
                    var S = l.config;
                    if (y.outro(0, l.el[0]), q.off(I, l.mouseUpOutside), q.off(T, l.mouseMoveOutside), l.el.off(R, l.mouseLeave), window.clearTimeout(l.delayId), !S.delay || k) return l.complete();
                    l.delayId = window.setTimeout(l.complete, S.delay)
                }
            }

            function x() {
                q.find(s).each(function(l, k) {
                    e(k).triggerHandler(L)
                })
            }

            function F(l) {
                var k = l.el[0];
                M.each(function(U, S) {
                    var ie = e(S);
                    ie.is(k) || ie.has(k).length || ie.triggerHandler(L)
                })
            }

            function H(l) {
                return l.mouseUpOutside && q.off(I, l.mouseUpOutside), r(function(k) {
                    if (l.open) {
                        var U = e(k.target);
                        if (!U.closest(".w-dropdown-toggle").length) {
                            var S = e.inArray(l.el[0], U.parents(s)) === -1,
                                ie = Ut.env("editor");
                            if (S) {
                                if (ie) {
                                    var fe = U.parents().length === 1 && U.parents("svg").length === 1,
                                        oe = U.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (fe || oe) return
                                }
                                G(l)
                            }
                        }
                    }
                })
            }

            function V(l) {
                return function() {
                    l.list.removeClass(d), l.toggle.removeClass(d), l.manageZ && l.el.css("z-index", "")
                }
            }

            function te(l) {
                return function() {
                    l.hovering = !0, ee(l)
                }
            }

            function re(l) {
                return function() {
                    l.hovering = !1, l.links.is(":focus") || G(l)
                }
            }

            function X(l) {
                return r(function(k) {
                    if (l.open) {
                        var U = e(k.target),
                            S = e.inArray(l.el[0], U.parents(s)) === -1;
                        if (S) {
                            var ie = U.parents(".w-editor-bem-EditorHoverControls").length,
                                fe = U.parents(".w-editor-bem-RTToolbar").length,
                                oe = e(".w-editor-bem-EditorOverlay"),
                                g = oe.find(".w-editor-edit-outline").length || oe.find(".w-editor-bem-RTToolbar").length;
                            if (ie || fe || g) return;
                            l.hovering = !1, G(l)
                        }
                    }
                })
            }

            function Y(l) {
                return function(k) {
                    if (!(a || !l.open)) switch (l.selectedIdx = l.links.index(document.activeElement), k.keyCode) {
                        case tt.HOME:
                            return l.open ? (l.selectedIdx = 0, p(l), k.preventDefault()) : void 0;
                        case tt.END:
                            return l.open ? (l.selectedIdx = l.links.length - 1, p(l), k.preventDefault()) : void 0;
                        case tt.ESCAPE:
                            return G(l), l.toggle.focus(), k.stopPropagation();
                        case tt.ARROW_RIGHT:
                        case tt.ARROW_DOWN:
                            return l.selectedIdx = Math.min(l.links.length - 1, l.selectedIdx + 1), p(l), k.preventDefault();
                        case tt.ARROW_LEFT:
                        case tt.ARROW_UP:
                            return l.selectedIdx = Math.max(-1, l.selectedIdx - 1), p(l), k.preventDefault()
                    }
                }
            }

            function p(l) {
                l.links[l.selectedIdx] && l.links[l.selectedIdx].focus()
            }

            function E(l) {
                var k = J(l, k_);
                return function(U) {
                    if (!a) {
                        if (!l.open) switch (U.keyCode) {
                            case tt.ARROW_UP:
                            case tt.ARROW_DOWN:
                                return U.stopPropagation()
                        }
                        switch (U.keyCode) {
                            case tt.SPACE:
                            case tt.ENTER:
                                return k(), U.stopPropagation(), U.preventDefault()
                        }
                    }
                }
            }

            function _(l) {
                return r(function(k) {
                    var {
                        relatedTarget: U,
                        target: S
                    } = k, ie = l.el[0], fe = ie.contains(U) || ie.contains(S);
                    return fe || G(l), k.stopPropagation()
                })
            }
            return n
        })
    });
    var U_ = c(Ls => {
        "use strict";
        Object.defineProperty(Ls, "__esModule", {
            value: !0
        });
        Ls.default = GU;

        function GU(e, t, r, n, i, o, a, u, s, d, y, h, v) {
            return function(m) {
                e(m);
                var O = m.form,
                    T = {
                        name: O.attr("data-name") || O.attr("name") || "Untitled Form",
                        pageId: O.attr("data-wf-page-id") || "",
                        elementId: O.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(O.html()),
                        trackingCookies: n()
                    };
                let R = O.attr("data-wf-flow");
                R && (T.wfFlow = R), i(m);
                var I = o(O, T.fields);
                if (I) return a(I);
                if (T.fileUploads = u(O), s(m), !d) {
                    y(m);
                    return
                }
                h.ajax({
                    url: v,
                    type: "POST",
                    data: T,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(L) {
                    L && L.code === 200 && (m.success = !0), y(m)
                }).fail(function() {
                    y(m)
                })
            }
        }
    });
    var V_ = c((fz, W_) => {
        "use strict";
        var Li = ke();
        Li.define("forms", W_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                u = ".w-form",
                s, d = /e(-)?mail/i,
                y = /^\S+@\S+$/,
                h = window.alert,
                v = Li.env(),
                m, O, T, R = /list-manage[1-9]?.com/i,
                I = t.debounce(function() {
                    h("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                L(), !v && !m && q()
            };

            function L() {
                s = e("html").attr("data-wf-site"), O = "https://webflow.com/api/v1/form/" + s, a && O.indexOf("https://webflow.com") >= 0 && (O = O.replace("https://webflow.com", "https://formdata.webflow.com")), T = `${O}/signFile`, i = e(u + " form"), i.length && i.each(C)
            }

            function C(X, Y) {
                var p = e(Y),
                    E = e.data(Y, u);
                E || (E = e.data(Y, u, {
                    form: p
                })), M(E);
                var _ = p.closest("div.w-form");
                E.done = _.find("> .w-form-done"), E.fail = _.find("> .w-form-fail"), E.fileUploads = _.find(".w-file-upload"), E.fileUploads.each(function(U) {
                    V(U, E)
                });
                var l = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
                E.done.attr("aria-label") || E.form.attr("aria-label", l), E.done.attr("tabindex", "-1"), E.done.attr("role", "region"), E.done.attr("aria-label") || E.done.attr("aria-label", l + " success"), E.fail.attr("tabindex", "-1"), E.fail.attr("role", "region"), E.fail.attr("aria-label") || E.fail.attr("aria-label", l + " failure");
                var k = E.action = p.attr("action");
                if (E.handler = null, E.redirect = p.attr("data-redirect"), R.test(k)) {
                    E.handler = x;
                    return
                }
                if (!k) {
                    if (s) {
                        E.handler = (() => {
                            let U = U_().default;
                            return U(M, o, Li, J, H, B, h, K, D, s, F, e, O)
                        })();
                        return
                    }
                    I()
                }
            }

            function q() {
                m = !0, n.on("submit", u + " form", function(U) {
                    var S = e.data(this, u);
                    S.handler && (S.evt = U, S.handler(S))
                });
                let X = ".w-checkbox-input",
                    Y = ".w-radio-input",
                    p = "w--redirected-checked",
                    E = "w--redirected-focus",
                    _ = "w--redirected-focus-visible",
                    l = ":focus-visible, [data-wf-focus-visible]",
                    k = [
                        ["checkbox", X],
                        ["radio", Y]
                    ];
                n.on("change", u + ' form input[type="checkbox"]:not(' + X + ")", U => {
                    e(U.target).siblings(X).toggleClass(p)
                }), n.on("change", u + ' form input[type="radio"]', U => {
                    e(`input[name="${U.target.name}"]:not(${X})`).map((ie, fe) => e(fe).siblings(Y).removeClass(p));
                    let S = e(U.target);
                    S.hasClass("w-radio-input") || S.siblings(Y).addClass(p)
                }), k.forEach(([U, S]) => {
                    n.on("focus", u + ` form input[type="${U}"]:not(` + S + ")", ie => {
                        e(ie.target).siblings(S).addClass(E), e(ie.target).filter(l).siblings(S).addClass(_)
                    }), n.on("blur", u + ` form input[type="${U}"]:not(` + S + ")", ie => {
                        e(ie.target).siblings(S).removeClass(`${E} ${_}`)
                    })
                })
            }

            function M(X) {
                var Y = X.btn = X.form.find(':input[type="submit"]');
                X.wait = X.btn.attr("data-wait") || null, X.success = !1, Y.prop("disabled", !1), X.label && Y.val(X.label)
            }

            function D(X) {
                var Y = X.btn,
                    p = X.wait;
                Y.prop("disabled", !0), p && (X.label = Y.val(), Y.val(p))
            }

            function B(X, Y) {
                var p = null;
                return Y = Y || {}, X.find(':input:not([type="submit"]):not([type="file"])').each(function(E, _) {
                    var l = e(_),
                        k = l.attr("type"),
                        U = l.attr("data-name") || l.attr("name") || "Field " + (E + 1);
                    U = encodeURIComponent(U);
                    var S = l.val();
                    if (k === "checkbox") S = l.is(":checked");
                    else if (k === "radio") {
                        if (Y[U] === null || typeof Y[U] == "string") return;
                        S = X.find('input[name="' + l.attr("name") + '"]:checked').val() || null
                    }
                    typeof S == "string" && (S = e.trim(S)), Y[U] = S, p = p || ee(l, k, U, S)
                }), p
            }

            function K(X) {
                var Y = {};
                return X.find(':input[type="file"]').each(function(p, E) {
                    var _ = e(E),
                        l = _.attr("data-name") || _.attr("name") || "File " + (p + 1),
                        k = _.attr("data-value");
                    typeof k == "string" && (k = e.trim(k)), Y[l] = k
                }), Y
            }
            let $ = {
                _mkto_trk: "marketo"
            };

            function J() {
                return document.cookie.split("; ").reduce(function(Y, p) {
                    let E = p.split("="),
                        _ = E[0];
                    if (_ in $) {
                        let l = $[_],
                            k = E.slice(1).join("=");
                        Y[l] = k
                    }
                    return Y
                }, {})
            }

            function ee(X, Y, p, E) {
                var _ = null;
                return Y === "password" ? _ = "Passwords cannot be submitted." : X.attr("required") ? E ? d.test(X.attr("type")) && (y.test(E) || (_ = "Please enter a valid email address for: " + p)) : _ = "Please fill out the required field: " + p : p === "g-recaptcha-response" && !E && (_ = "Please confirm you\u2019re not a robot."), _
            }

            function G(X) {
                H(X), F(X)
            }

            function x(X) {
                M(X);
                var Y = X.form,
                    p = {};
                if (/^https/.test(o.href) && !/^https/.test(X.action)) {
                    Y.attr("method", "post");
                    return
                }
                H(X);
                var E = B(Y, p);
                if (E) return h(E);
                D(X);
                var _;
                t.each(p, function(S, ie) {
                    d.test(ie) && (p.EMAIL = S), /^((full[ _-]?)?name)$/i.test(ie) && (_ = S), /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = S), /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = S)
                }), _ && !p.FNAME && (_ = _.split(" "), p.FNAME = _[0], p.LNAME = p.LNAME || _[1]);
                var l = X.action.replace("/post?", "/post-json?") + "&c=?",
                    k = l.indexOf("u=") + 2;
                k = l.substring(k, l.indexOf("&", k));
                var U = l.indexOf("id=") + 3;
                U = l.substring(U, l.indexOf("&", U)), p["b_" + k + "_" + U] = "", e.ajax({
                    url: l,
                    data: p,
                    dataType: "jsonp"
                }).done(function(S) {
                    X.success = S.result === "success" || /already/.test(S.msg), X.success || console.info("MailChimp error: " + S.msg), F(X)
                }).fail(function() {
                    F(X)
                })
            }

            function F(X) {
                var Y = X.form,
                    p = X.redirect,
                    E = X.success;
                if (E && p) {
                    Li.location(p);
                    return
                }
                X.done.toggle(E), X.fail.toggle(!E), E ? X.done.focus() : X.fail.focus(), Y.toggle(!E), M(X)
            }

            function H(X) {
                X.evt && X.evt.preventDefault(), X.evt = null
            }

            function V(X, Y) {
                if (!Y.fileUploads || !Y.fileUploads[X]) return;
                var p, E = e(Y.fileUploads[X]),
                    _ = E.find("> .w-file-upload-default"),
                    l = E.find("> .w-file-upload-uploading"),
                    k = E.find("> .w-file-upload-success"),
                    U = E.find("> .w-file-upload-error"),
                    S = _.find(".w-file-upload-input"),
                    ie = _.find(".w-file-upload-label"),
                    fe = ie.children(),
                    oe = U.find(".w-file-upload-error-msg"),
                    g = k.find(".w-file-upload-file"),
                    W = k.find(".w-file-remove-link"),
                    Q = g.find(".w-file-upload-file-name"),
                    j = oe.attr("data-w-size-error"),
                    de = oe.attr("data-w-type-error"),
                    De = oe.attr("data-w-generic-error");
                if (v || ie.on("click keydown", function(w) {
                        w.type === "keydown" && w.which !== 13 && w.which !== 32 || (w.preventDefault(), S.click())
                    }), ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), v) S.on("click", function(w) {
                    w.preventDefault()
                }), ie.on("click", function(w) {
                    w.preventDefault()
                }), fe.on("click", function(w) {
                    w.preventDefault()
                });
                else {
                    W.on("click keydown", function(w) {
                        if (w.type === "keydown") {
                            if (w.which !== 13 && w.which !== 32) return;
                            w.preventDefault()
                        }
                        S.removeAttr("data-value"), S.val(""), Q.html(""), _.toggle(!0), k.toggle(!1), ie.focus()
                    }), S.on("change", function(w) {
                        p = w.target && w.target.files && w.target.files[0], p && (_.toggle(!1), U.toggle(!1), l.toggle(!0), l.focus(), Q.text(p.name), P() || D(Y), Y.fileUploads[X].uploading = !0, te(p, b))
                    });
                    var Be = ie.outerHeight();
                    S.height(Be), S.width(1)
                }

                function f(w) {
                    var N = w.responseJSON && w.responseJSON.msg,
                        Z = De;
                    typeof N == "string" && N.indexOf("InvalidFileTypeError") === 0 ? Z = de : typeof N == "string" && N.indexOf("MaxFileSizeError") === 0 && (Z = j), oe.text(Z), S.removeAttr("data-value"), S.val(""), l.toggle(!1), _.toggle(!0), U.toggle(!0), U.focus(), Y.fileUploads[X].uploading = !1, P() || M(Y)
                }

                function b(w, N) {
                    if (w) return f(w);
                    var Z = N.fileName,
                        ae = N.postData,
                        ve = N.fileId,
                        z = N.s3Url;
                    S.attr("data-value", ve), re(z, ae, p, Z, A)
                }

                function A(w) {
                    if (w) return f(w);
                    l.toggle(!1), k.css("display", "inline-block"), k.focus(), Y.fileUploads[X].uploading = !1, P() || M(Y)
                }

                function P() {
                    var w = Y.fileUploads && Y.fileUploads.toArray() || [];
                    return w.some(function(N) {
                        return N.uploading
                    })
                }
            }

            function te(X, Y) {
                var p = new URLSearchParams({
                    name: X.name,
                    size: X.size
                });
                e.ajax({
                    type: "GET",
                    url: `${T}?${p}`,
                    crossDomain: !0
                }).done(function(E) {
                    Y(null, E)
                }).fail(function(E) {
                    Y(E)
                })
            }

            function re(X, Y, p, E, _) {
                var l = new FormData;
                for (var k in Y) l.append(k, Y[k]);
                l.append("file", p, E), e.ajax({
                    type: "POST",
                    url: X,
                    data: l,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    _(null)
                }).fail(function(U) {
                    _(U)
                })
            }
            return r
        })
    });
    var H_ = c((dz, B_) => {
        "use strict";
        var St = ke(),
            XU = br(),
            Se = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        St.define("navbar", B_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                u, s, d, y, h = St.env(),
                v = '<div class="w-nav-overlay" data-wf-ignore />',
                m = ".w-nav",
                O = "w--open",
                T = "w--nav-dropdown-open",
                R = "w--nav-dropdown-toggle-open",
                I = "w--nav-dropdown-list-open",
                L = "w--nav-link-open",
                C = XU.triggers,
                q = e();
            r.ready = r.design = r.preview = M, r.destroy = function() {
                q = e(), D(), s && s.length && s.each(J)
            };

            function M() {
                d = h && St.env("design"), y = St.env("editor"), u = e(document.body), s = o.find(m), s.length && (s.each($), D(), B())
            }

            function D() {
                St.resize.off(K)
            }

            function B() {
                St.resize.on(K)
            }

            function K() {
                s.each(_)
            }

            function $(g, W) {
                var Q = e(W),
                    j = e.data(W, m);
                j || (j = e.data(W, m, {
                    open: !1,
                    el: Q,
                    config: {},
                    selectedIdx: -1
                })), j.menu = Q.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = Q.find(".w-nav-button"), j.container = Q.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + g, j.outside = p(j);
                var de = Q.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(m), j.button.off(m), j.menu.off(m), x(j), d ? (ee(j), j.el.on("setting" + m, F(j))) : (G(j), j.button.on("click" + m, X(j)), j.menu.on("click" + m, "a", Y(j)), j.button.on("keydown" + m, H(j)), j.el.on("keydown" + m, V(j))), _(g, W)
            }

            function J(g, W) {
                var Q = e.data(W, m);
                Q && (ee(Q), e.removeData(W, m))
            }

            function ee(g) {
                g.overlay && (oe(g, !0), g.overlay.remove(), g.overlay = null)
            }

            function G(g) {
                g.overlay || (g.overlay = e(v).appendTo(g.el), g.overlay.attr("id", g.overlayContainerId), g.parent = g.menu.parent(), oe(g, !0))
            }

            function x(g) {
                var W = {},
                    Q = g.config || {},
                    j = W.animation = g.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(j), W.animDirect = /left$/.test(j) ? -1 : 1, Q.animation !== j && g.open && t.defer(re, g), W.easing = g.el.attr("data-easing") || "ease", W.easing2 = g.el.attr("data-easing2") || "ease";
                var de = g.el.attr("data-duration");
                W.duration = de != null ? Number(de) : 400, W.docHeight = g.el.attr("data-doc-height"), g.config = W
            }

            function F(g) {
                return function(W, Q) {
                    Q = Q || {};
                    var j = i.width();
                    x(g), Q.open === !0 && ie(g, !0), Q.open === !1 && oe(g, !0), g.open && t.defer(function() {
                        j !== i.width() && re(g)
                    })
                }
            }

            function H(g) {
                return function(W) {
                    switch (W.keyCode) {
                        case Se.SPACE:
                        case Se.ENTER:
                            return X(g)(), W.preventDefault(), W.stopPropagation();
                        case Se.ESCAPE:
                            return oe(g), W.preventDefault(), W.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                        case Se.HOME:
                        case Se.END:
                            return g.open ? (W.keyCode === Se.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, te(g), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation())
                    }
                }
            }

            function V(g) {
                return function(W) {
                    if (g.open) switch (g.selectedIdx = g.links.index(document.activeElement), W.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return W.keyCode === Se.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, te(g), W.preventDefault(), W.stopPropagation();
                        case Se.ESCAPE:
                            return oe(g), g.button.focus(), W.preventDefault(), W.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), te(g), W.preventDefault(), W.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), te(g), W.preventDefault(), W.stopPropagation()
                    }
                }
            }

            function te(g) {
                if (g.links[g.selectedIdx]) {
                    var W = g.links[g.selectedIdx];
                    W.focus(), Y(W)
                }
            }

            function re(g) {
                g.open && (oe(g, !0), ie(g, !0))
            }

            function X(g) {
                return a(function() {
                    g.open ? oe(g) : ie(g)
                })
            }

            function Y(g) {
                return function(W) {
                    var Q = e(this),
                        j = Q.attr("href");
                    if (!St.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    j && j.indexOf("#") === 0 && g.open && oe(g)
                }
            }

            function p(g) {
                return g.outside && o.off("click" + m, g.outside),
                    function(W) {
                        var Q = e(W.target);
                        y && Q.closest(".w-editor-bem-EditorOverlay").length || E(g, Q)
                    }
            }
            var E = a(function(g, W) {
                if (g.open) {
                    var Q = W.closest(".w-nav-menu");
                    g.menu.is(Q) || oe(g)
                }
            });

            function _(g, W) {
                var Q = e.data(W, m),
                    j = Q.collapsed = Q.button.css("display") !== "none";
                if (Q.open && !j && !d && oe(Q, !0), Q.container.length) {
                    var de = k(Q);
                    Q.links.each(de), Q.dropdowns.each(de)
                }
                Q.open && fe(Q)
            }
            var l = "max-width";

            function k(g) {
                var W = g.container.css(l);
                return W === "none" && (W = ""),
                    function(Q, j) {
                        j = e(j), j.css(l, ""), j.css(l) === "none" && j.css(l, W)
                    }
            }

            function U(g, W) {
                W.setAttribute("data-nav-menu-open", "")
            }

            function S(g, W) {
                W.removeAttribute("data-nav-menu-open")
            }

            function ie(g, W) {
                if (g.open) return;
                g.open = !0, g.menu.each(U), g.links.addClass(L), g.dropdowns.addClass(T), g.dropdownToggle.addClass(R), g.dropdownList.addClass(I), g.button.addClass(O);
                var Q = g.config,
                    j = Q.animation;
                (j === "none" || !n.support.transform || Q.duration <= 0) && (W = !0);
                var de = fe(g),
                    De = g.menu.outerHeight(!0),
                    Be = g.menu.outerWidth(!0),
                    f = g.el.height(),
                    b = g.el[0];
                if (_(0, b), C.intro(0, b), St.redraw.up(), d || o.on("click" + m, g.outside), W) {
                    w();
                    return
                }
                var A = "transform " + Q.duration + "ms " + Q.easing;
                if (g.overlay && (q = g.menu.prev(), g.overlay.show().append(g.menu)), Q.animOver) {
                    n(g.menu).add(A).set({
                        x: Q.animDirect * Be,
                        height: de
                    }).start({
                        x: 0
                    }).then(w), g.overlay && g.overlay.width(Be);
                    return
                }
                var P = f + De;
                n(g.menu).add(A).set({
                    y: -P
                }).start({
                    y: 0
                }).then(w);

                function w() {
                    g.button.attr("aria-expanded", "true")
                }
            }

            function fe(g) {
                var W = g.config,
                    Q = W.docHeight ? o.height() : u.height();
                return W.animOver ? g.menu.height(Q) : g.el.css("position") !== "fixed" && (Q -= g.el.outerHeight(!0)), g.overlay && g.overlay.height(Q), Q
            }

            function oe(g, W) {
                if (!g.open) return;
                g.open = !1, g.button.removeClass(O);
                var Q = g.config;
                if ((Q.animation === "none" || !n.support.transform || Q.duration <= 0) && (W = !0), C.outro(0, g.el[0]), o.off("click" + m, g.outside), W) {
                    n(g.menu).stop(), b();
                    return
                }
                var j = "transform " + Q.duration + "ms " + Q.easing2,
                    de = g.menu.outerHeight(!0),
                    De = g.menu.outerWidth(!0),
                    Be = g.el.height();
                if (Q.animOver) {
                    n(g.menu).add(j).start({
                        x: De * Q.animDirect
                    }).then(b);
                    return
                }
                var f = Be + de;
                n(g.menu).add(j).start({
                    y: -f
                }).then(b);

                function b() {
                    g.menu.height(""), n(g.menu).set({
                        x: 0,
                        y: 0
                    }), g.menu.each(S), g.links.removeClass(L), g.dropdowns.removeClass(T), g.dropdownToggle.removeClass(R), g.dropdownList.removeClass(I), g.overlay && g.overlay.children().length && (q.length ? g.menu.insertAfter(q) : g.menu.prependTo(g.parent), g.overlay.attr("style", "").hide()), g.el.triggerHandler("w-close"), g.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var K_ = c((pz, z_) => {
        "use strict";
        var Rt = ke(),
            UU = br(),
            dt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            j_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Rt.define("slider", z_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, a, u = Rt.env(),
                s = ".w-slider",
                d = '<div class="w-slider-dot" data-wf-ignore />',
                y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                h = "w-slider-force-show",
                v = UU.triggers,
                m, O = !1;
            r.ready = function() {
                a = Rt.env("design"), T()
            }, r.design = function() {
                a = !0, setTimeout(T, 1e3)
            }, r.preview = function() {
                a = !1, T()
            }, r.redraw = function() {
                O = !0, T(), O = !1
            }, r.destroy = R;

            function T() {
                o = i.find(s), o.length && (o.each(C), !m && (R(), I()))
            }

            function R() {
                Rt.resize.off(L), Rt.redraw.off(r.redraw)
            }

            function I() {
                Rt.resize.on(L), Rt.redraw.on(r.redraw)
            }

            function L() {
                o.filter(":visible").each(V)
            }

            function C(p, E) {
                var _ = e(E),
                    l = e.data(E, s);
                l || (l = e.data(E, s, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: _,
                    config: {}
                })), l.mask = _.children(".w-slider-mask"), l.left = _.children(".w-slider-arrow-left"), l.right = _.children(".w-slider-arrow-right"), l.nav = _.children(".w-slider-nav"), l.slides = l.mask.children(".w-slide"), l.slides.each(v.reset), O && (l.maskWidth = 0), _.attr("role") === void 0 && _.attr("role", "region"), _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
                var k = l.mask.attr("id");
                if (k || (k = "w-slider-mask-" + p, l.mask.attr("id", k)), !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(y).appendTo(l.mask)), l.left.attr("role", "button"), l.left.attr("tabindex", "0"), l.left.attr("aria-controls", k), l.left.attr("aria-label") === void 0 && l.left.attr("aria-label", "previous slide"), l.right.attr("role", "button"), l.right.attr("tabindex", "0"), l.right.attr("aria-controls", k), l.right.attr("aria-label") === void 0 && l.right.attr("aria-label", "next slide"), !n.support.transform) {
                    l.left.hide(), l.right.hide(), l.nav.hide(), m = !0;
                    return
                }
                l.el.off(s), l.left.off(s), l.right.off(s), l.nav.off(s), q(l), a ? (l.el.on("setting" + s, x(l)), G(l), l.hasTimer = !1) : (l.el.on("swipe" + s, x(l)), l.left.on("click" + s, K(l)), l.right.on("click" + s, $(l)), l.left.on("keydown" + s, B(l, K)), l.right.on("keydown" + s, B(l, $)), l.nav.on("keydown" + s, "> div", x(l)), l.config.autoplay && !l.hasTimer && (l.hasTimer = !0, l.timerCount = 1, ee(l)), l.el.on("mouseenter" + s, D(l, !0, "mouse")), l.el.on("focusin" + s, D(l, !0, "keyboard")), l.el.on("mouseleave" + s, D(l, !1, "mouse")), l.el.on("focusout" + s, D(l, !1, "keyboard"))), l.nav.on("click" + s, "> div", x(l)), u || l.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var U = _.filter(":hidden");
                U.addClass(h);
                var S = _.parents(":hidden");
                S.addClass(h), O || V(p, E), U.removeClass(h), S.removeClass(h)
            }

            function q(p) {
                var E = {};
                E.crossOver = 0, E.animation = p.el.attr("data-animation") || "slide", E.animation === "outin" && (E.animation = "cross", E.crossOver = .5), E.easing = p.el.attr("data-easing") || "ease";
                var _ = p.el.attr("data-duration");
                if (E.duration = _ != null ? parseInt(_, 10) : 500, M(p.el.attr("data-infinite")) && (E.infinite = !0), M(p.el.attr("data-disable-swipe")) && (E.disableSwipe = !0), M(p.el.attr("data-hide-arrows")) ? E.hideArrows = !0 : p.config.hideArrows && (p.left.show(), p.right.show()), M(p.el.attr("data-autoplay"))) {
                    E.autoplay = !0, E.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3, E.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10);
                    var l = "mousedown" + s + " touchstart" + s;
                    a || p.el.off(l).one(l, function() {
                        G(p)
                    })
                }
                var k = p.right.width();
                E.edge = k ? k + 40 : 100, p.config = E
            }

            function M(p) {
                return p === "1" || p === "true"
            }

            function D(p, E, _) {
                return function(l) {
                    if (E) p.hasFocus[_] = E;
                    else if (e.contains(p.el.get(0), l.relatedTarget) || (p.hasFocus[_] = E, p.hasFocus.mouse && _ === "keyboard" || p.hasFocus.keyboard && _ === "mouse")) return;
                    E ? (p.ariaLiveLabel.attr("aria-live", "polite"), p.hasTimer && G(p)) : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && ee(p))
                }
            }

            function B(p, E) {
                return function(_) {
                    switch (_.keyCode) {
                        case dt.SPACE:
                        case dt.ENTER:
                            return E(p)(), _.preventDefault(), _.stopPropagation()
                    }
                }
            }

            function K(p) {
                return function() {
                    H(p, {
                        index: p.index - 1,
                        vector: -1
                    })
                }
            }

            function $(p) {
                return function() {
                    H(p, {
                        index: p.index + 1,
                        vector: 1
                    })
                }
            }

            function J(p, E) {
                var _ = null;
                E === p.slides.length && (T(), te(p)), t.each(p.anchors, function(l, k) {
                    e(l.els).each(function(U, S) {
                        e(S).index() === E && (_ = k)
                    })
                }), _ != null && H(p, {
                    index: _,
                    immediate: !0
                })
            }

            function ee(p) {
                G(p);
                var E = p.config,
                    _ = E.timerMax;
                _ && p.timerCount++ > _ || (p.timerId = window.setTimeout(function() {
                    p.timerId == null || a || ($(p)(), ee(p))
                }, E.delay))
            }

            function G(p) {
                window.clearTimeout(p.timerId), p.timerId = null
            }

            function x(p) {
                return function(E, _) {
                    _ = _ || {};
                    var l = p.config;
                    if (a && E.type === "setting") {
                        if (_.select === "prev") return K(p)();
                        if (_.select === "next") return $(p)();
                        if (q(p), te(p), _.select == null) return;
                        J(p, _.select);
                        return
                    }
                    if (E.type === "swipe") return l.disableSwipe || Rt.env("editor") ? void 0 : _.direction === "left" ? $(p)() : _.direction === "right" ? K(p)() : void 0;
                    if (p.nav.has(E.target).length) {
                        var k = e(E.target).index();
                        if (E.type === "click" && H(p, {
                                index: k
                            }), E.type === "keydown") switch (E.keyCode) {
                            case dt.ENTER:
                            case dt.SPACE: {
                                H(p, {
                                    index: k
                                }), E.preventDefault();
                                break
                            }
                            case dt.ARROW_LEFT:
                            case dt.ARROW_UP: {
                                F(p.nav, Math.max(k - 1, 0)), E.preventDefault();
                                break
                            }
                            case dt.ARROW_RIGHT:
                            case dt.ARROW_DOWN: {
                                F(p.nav, Math.min(k + 1, p.pages)), E.preventDefault();
                                break
                            }
                            case dt.HOME: {
                                F(p.nav, 0), E.preventDefault();
                                break
                            }
                            case dt.END: {
                                F(p.nav, p.pages), E.preventDefault();
                                break
                            }
                            default:
                                return
                        }
                    }
                }
            }

            function F(p, E) {
                var _ = p.children().eq(E).focus();
                p.children().not(_)
            }

            function H(p, E) {
                E = E || {};
                var _ = p.config,
                    l = p.anchors;
                p.previous = p.index;
                var k = E.index,
                    U = {};
                k < 0 ? (k = l.length - 1, _.infinite && (U.x = -p.endX, U.from = 0, U.to = l[0].width)) : k >= l.length && (k = 0, _.infinite && (U.x = l[l.length - 1].width, U.from = -l[l.length - 1].x, U.to = U.from - U.x)), p.index = k;
                var S = p.nav.children().eq(k).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                p.nav.children().not(S).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), _.hideArrows && (p.index === l.length - 1 ? p.right.hide() : p.right.show(), p.index === 0 ? p.left.hide() : p.left.show());
                var ie = p.offsetX || 0,
                    fe = p.offsetX = -l[p.index].x,
                    oe = {
                        x: fe,
                        opacity: 1,
                        visibility: ""
                    },
                    g = e(l[p.index].els),
                    W = e(l[p.previous] && l[p.previous].els),
                    Q = p.slides.not(g),
                    j = _.animation,
                    de = _.easing,
                    De = Math.round(_.duration),
                    Be = E.vector || (p.index > p.previous ? 1 : -1),
                    f = "opacity " + De + "ms " + de,
                    b = "transform " + De + "ms " + de;
                if (g.find(j_).removeAttr("tabindex"), g.removeAttr("aria-hidden"), g.find("*").removeAttr("aria-hidden"), Q.find(j_).attr("tabindex", "-1"), Q.attr("aria-hidden", "true"), Q.find("*").attr("aria-hidden", "true"), a || (g.each(v.intro), Q.each(v.outro)), E.immediate && !O) {
                    n(g).set(oe), w();
                    return
                }
                if (p.index === p.previous) return;
                if (a || p.ariaLiveLabel.text(`Slide ${k + 1} of ${l.length}.`), j === "cross") {
                    var A = Math.round(De - De * _.crossOver),
                        P = Math.round(De - A);
                    f = "opacity " + A + "ms " + de, n(W).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }), n(g).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(f).wait(P).then({
                        opacity: 1
                    }).then(w);
                    return
                }
                if (j === "fade") {
                    n(W).set({
                        visibility: ""
                    }).stop(), n(g).set({
                        visibility: "",
                        x: fe,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(w);
                    return
                }
                if (j === "over") {
                    oe = {
                        x: p.endX
                    }, n(W).set({
                        visibility: ""
                    }).stop(), n(g).set({
                        visibility: "",
                        zIndex: p.depth++,
                        x: fe + l[p.index].width * Be
                    }).add(b).start({
                        x: fe
                    }).then(w);
                    return
                }
                _.infinite && U.x ? (n(p.slides.not(W)).set({
                    visibility: "",
                    x: U.x
                }).add(b).start({
                    x: fe
                }), n(W).set({
                    visibility: "",
                    x: U.from
                }).add(b).start({
                    x: U.to
                }), p.shifted = W) : (_.infinite && p.shifted && (n(p.shifted).set({
                    visibility: "",
                    x: ie
                }), p.shifted = null), n(p.slides).set({
                    visibility: ""
                }).add(b).start({
                    x: fe
                }));

                function w() {
                    g = e(l[p.index].els), Q = p.slides.not(g), j !== "slide" && (oe.visibility = "hidden"), n(Q).set(oe)
                }
            }

            function V(p, E) {
                var _ = e.data(E, s);
                if (_) {
                    if (X(_)) return te(_);
                    a && Y(_) && te(_)
                }
            }

            function te(p) {
                var E = 1,
                    _ = 0,
                    l = 0,
                    k = 0,
                    U = p.maskWidth,
                    S = U - p.config.edge;
                S < 0 && (S = 0), p.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], p.slides.each(function(fe, oe) {
                    l - _ > S && (E++, _ += U, p.anchors[E - 1] = {
                        els: [],
                        x: l,
                        width: 0
                    }), k = e(oe).outerWidth(!0), l += k, p.anchors[E - 1].width += k, p.anchors[E - 1].els.push(oe);
                    var g = fe + 1 + " of " + p.slides.length;
                    e(oe).attr("aria-label", g), e(oe).attr("role", "group")
                }), p.endX = l, a && (p.pages = null), p.nav.length && p.pages !== E && (p.pages = E, re(p));
                var ie = p.index;
                ie >= E && (ie = E - 1), H(p, {
                    immediate: !0,
                    index: ie
                })
            }

            function re(p) {
                var E = [],
                    _, l = p.el.attr("data-nav-spacing");
                l && (l = parseFloat(l) + "px");
                for (var k = 0, U = p.pages; k < U; k++) _ = e(d), _.attr("aria-label", "Show slide " + (k + 1) + " of " + U).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), p.nav.hasClass("w-num") && _.text(k + 1), l != null && _.css({
                    "margin-left": l,
                    "margin-right": l
                }), E.push(_);
                p.nav.empty().append(E)
            }

            function X(p) {
                var E = p.mask.width();
                return p.maskWidth !== E ? (p.maskWidth = E, !0) : !1
            }

            function Y(p) {
                var E = 0;
                return p.slides.each(function(_, l) {
                    E += e(l).outerWidth(!0)
                }), p.slidesWidth !== E ? (p.slidesWidth = E, !0) : !1
            }
            return r
        })
    });
    js();
    Ks();
    $s();
    Js();
    br();
    P_();
    N_();
    D_();
    F_();
    X_();
    V_();
    H_();
    K_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".dropdown-5",
                "originalId": "085e5ee0-98fc-e8f6-a380-717c967f5118",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown-5",
                "originalId": "085e5ee0-98fc-e8f6-a380-717c967f5118",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675459385598
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".dropdown-5",
                "originalId": "085e5ee0-98fc-e8f6-a380-717c967f5118",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".dropdown-5",
                "originalId": "085e5ee0-98fc-e8f6-a380-717c967f5118",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675459385602
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a20d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a20d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694838986164
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a20d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a20d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1694838986164
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a22d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a22d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752098504
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a22d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a22d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752098504
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a225",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a225",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752099496
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a225",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a225",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752099496
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a21d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a21d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752109655
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a21d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a21d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752109655
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a215",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a215",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752109871
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a215",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a215",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711752109871
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1709663146364
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".arrow-icon",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f64",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".arrow-icon",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f64",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710867256018
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".arrow-icon",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f64",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".arrow-icon",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f64",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710867256021
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".blog-slide",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f44",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-slide",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f44",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711881718714
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".blog-slide",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f44",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-slide",
                "originalId": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f44",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711881718715
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711905722316
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711905722316
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711905722316
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711907396083
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711907396083
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711907397261
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711907397261
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711907403225
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711907403225
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c17",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c17",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c17",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c17",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa64|d024ff51-b7bd-da61-46ae-2fa140cb9c1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915578115
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a59",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa61|a410a293-26d3-07bc-c70a-256ea6598a35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711915606248
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|560102f6-8d1e-037d-6936-955a5dcdab2a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|560102f6-8d1e-037d-6936-955a5dcdab2a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711918710439
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|560102f6-8d1e-037d-6936-955a5dcdab2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|560102f6-8d1e-037d-6936-955a5dcdab2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711918710439
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|560102f6-8d1e-037d-6936-955a5dcdab2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|560102f6-8d1e-037d-6936-955a5dcdab2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711918710439
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|bb3ce447-8954-dba3-1449-133253fcd0a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|bb3ce447-8954-dba3-1449-133253fcd0a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711919403306
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|bb3ce447-8954-dba3-1449-133253fcd0a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|bb3ce447-8954-dba3-1449-133253fcd0a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711919403306
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|a7031e29-93cc-18de-5949-ca545fbe1ace",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|a7031e29-93cc-18de-5949-ca545fbe1ace",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711919404426
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|a7031e29-93cc-18de-5949-ca545fbe1ace",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|a7031e29-93cc-18de-5949-ca545fbe1ace",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711919404426
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|f8a5ce34-dafe-1b23-cafc-fc17ce247de7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|f8a5ce34-dafe-1b23-cafc-fc17ce247de7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711919405567
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|f8a5ce34-dafe-1b23-cafc-fc17ce247de7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|f8a5ce34-dafe-1b23-cafc-fc17ce247de7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711919405567
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".op70",
                "originalId": "c3c8327c-b1c7-9fd1-2b54-c1694ec2e201",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".op70",
                "originalId": "c3c8327c-b1c7-9fd1-2b54-c1694ec2e201",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695405007699
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".op70",
                "originalId": "c3c8327c-b1c7-9fd1-2b54-c1694ec2e201",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".op70",
                "originalId": "c3c8327c-b1c7-9fd1-2b54-c1694ec2e201",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1695405007702
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|98057a1a-df6e-34b5-d8d2-c4ef5da74773",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|98057a1a-df6e-34b5-d8d2-c4ef5da74773",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990462885
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|e288cc45-ec90-833b-15c4-6e5de31cacbc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|e288cc45-ec90-833b-15c4-6e5de31cacbc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990605830
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|089bd05b-0f7c-55d4-678f-99b168f56545",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|089bd05b-0f7c-55d4-678f-99b168f56545",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990613187
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|8d68bc32-28bd-9a6f-ac1d-e2058f3fb190",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|8d68bc32-28bd-9a6f-ac1d-e2058f3fb190",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990661076
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|30edd6f9-258b-af97-b343-802cb6a24a00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|30edd6f9-258b-af97-b343-802cb6a24a00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990718998
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|9744973b-ad22-41ef-f99d-c33d5d43f714",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|9744973b-ad22-41ef-f99d-c33d5d43f714",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990872166
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|3f13c3b7-ff49-79b8-2de8-2ee605154f03",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|3f13c3b7-ff49-79b8-2de8-2ee605154f03",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990906144
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|a15dbd36-78f2-a350-899c-89c90b0ad589",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|a15dbd36-78f2-a350-899c-89c90b0ad589",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990913553
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|f2cba43d-3d11-bdf4-4958-8e0d68d2696a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|f2cba43d-3d11-bdf4-4958-8e0d68d2696a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990921981
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|a90e4698-974f-07da-ab8e-b8b7650845ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|a90e4698-974f-07da-ab8e-b8b7650845ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990952675
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|a90e4698-974f-07da-ab8e-b8b765084602",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|a90e4698-974f-07da-ab8e-b8b765084602",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990961703
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|a90e4698-974f-07da-ab8e-b8b765084617",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|a90e4698-974f-07da-ab8e-b8b765084617",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990970781
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4a2027ae-29a2-5a4e-982c-2fe0286c28b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711990987683
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|11ea4f9c-b7c5-8621-8ec6-39f65df0673b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|11ea4f9c-b7c5-8621-8ec6-39f65df0673b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991011204
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d0094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d0094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991025703
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d00a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d00a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991034907
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d00b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991043345
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d00c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa4c|d79194aa-6a60-4b4f-333a-3303944d00c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991051397
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a207",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a207",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991138965
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a20a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "da9f3c38-b1e4-08b1-988e-70d68877a20a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991149917
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-link",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c2d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c2d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991263206
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-link",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c2d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c2d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991263208
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".basecom",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c41",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".basecom",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c41",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991775605
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".basecom",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c41",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".basecom",
                "originalId": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c41",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711991775607
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|f1166cda-ec52-b27c-d864-8ee2bd49e751",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|f1166cda-ec52-b27c-d864-8ee2bd49e751",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992054132
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|b2302e8f-d039-7222-f4df-e470a0bf8eaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|b2302e8f-d039-7222-f4df-e470a0bf8eaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992064626
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|240d39f2-2c88-8e21-fc37-064e49854f6d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|240d39f2-2c88-8e21-fc37-064e49854f6d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992092774
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|6134b3f3-500a-14f6-2b79-ac7c1cc67535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|6134b3f3-500a-14f6-2b79-ac7c1cc67535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992119868
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|e0780ae9-61ea-4ec1-bc97-b19ad8effe25",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|e0780ae9-61ea-4ec1-bc97-b19ad8effe25",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992127715
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|6c257cc6-8825-ec6c-9d84-40aac6132cb7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|6c257cc6-8825-ec6c-9d84-40aac6132cb7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992134574
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|5033172f-44df-9d97-9e99-0f78ff2d118f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|5033172f-44df-9d97-9e99-0f78ff2d118f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992140475
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|e68c3c8e-c713-9315-66e8-ab9e69e0c4f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|e68c3c8e-c713-9315-66e8-ab9e69e0c4f6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992216012
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|2d143914-067f-d47d-821d-80c4d3113af0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|2d143914-067f-d47d-821d-80c4d3113af0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992222387
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|2b1d9f4f-e6eb-8269-7055-56df9e180bfd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|2b1d9f4f-e6eb-8269-7055-56df9e180bfd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992228709
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa66|b3092c93-280d-ee1b-1b8b-4aeb0f6003cf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa66|b3092c93-280d-ee1b-1b8b-4aeb0f6003cf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992249005
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992288548
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c1d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c1d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992295868
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992303500
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992310285
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "fba6a1ea-3ad6-b7be-642f-bb003d9f5c3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992318781
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa63|d4b3b3b3-9391-8a48-82e1-57db8fbc5c7f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa63|d4b3b3b3-9391-8a48-82e1-57db8fbc5c7f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992369564
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa63|ab2501f9-5bac-a832-6011-7394f564c9be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa63|ab2501f9-5bac-a832-6011-7394f564c9be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992380204
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa63|ed84088b-2640-e579-b19f-7e14173ce6c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa63|ed84088b-2640-e579-b19f-7e14173ce6c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992398444
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa63|77ec1b48-eaaf-a78e-2c47-49765ab4b5e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa63|77ec1b48-eaaf-a78e-2c47-49765ab4b5e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992449380
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa63|82a2df33-d691-5659-34bc-699f4018cf8d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa63|82a2df33-d691-5659-34bc-699f4018cf8d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992466437
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|d9bd39ac-a06d-4e3f-a781-81dd1c878f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992539556
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|f1004f7f-b4c4-8e62-0ebf-ab0b68d722b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|f1004f7f-b4c4-8e62-0ebf-ab0b68d722b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992618957
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|3e2c24ec-7907-aca3-4a9c-310ea8520dfc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|3e2c24ec-7907-aca3-4a9c-310ea8520dfc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992627580
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|29fc1589-0a9f-a9b0-7d76-170a7c469cae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|29fc1589-0a9f-a9b0-7d76-170a7c469cae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992633859
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|0dd3ee6f-6266-5631-2481-2e859777474b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|0dd3ee6f-6266-5631-2481-2e859777474b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992641629
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|03fb368a-9d0c-31ec-d944-c28d687c36df",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|03fb368a-9d0c-31ec-d944-c28d687c36df",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992647588
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa60|50e3f495-0d61-e6e6-e759-0e64b9ffa421",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa60|50e3f495-0d61-e6e6-e759-0e64b9ffa421",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992653045
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5b|ec81fe9b-be59-12d4-38d7-77a3e58bd41b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5b|ec81fe9b-be59-12d4-38d7-77a3e58bd41b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992682936
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5b|ff2311c0-6f65-7f7c-f26e-a4396231e32e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5b|ff2311c0-6f65-7f7c-f26e-a4396231e32e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992691414
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5b|8ad362fd-19f0-2310-6575-2322130462e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5b|8ad362fd-19f0-2310-6575-2322130462e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992700008
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5b|e78c05d0-64be-4636-de2c-d0dc0038fecb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5b|e78c05d0-64be-4636-de2c-d0dc0038fecb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992706662
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5b|df7f715e-7973-f3c4-9ca8-d6fbc060e1a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5b|df7f715e-7973-f3c4-9ca8-d6fbc060e1a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992794438
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5d|893d18e6-cb49-881d-b1a2-5c84d6ecc7d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5d|893d18e6-cb49-881d-b1a2-5c84d6ecc7d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992818438
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5d|893d18e6-cb49-881d-b1a2-5c84d6ecc7d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5d|893d18e6-cb49-881d-b1a2-5c84d6ecc7d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992829429
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5e|d349f754-bbeb-1670-b0b8-767c95547a9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5e|d349f754-bbeb-1670-b0b8-767c95547a9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711992845365
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5f|c422d1e5-3d07-9f97-1c95-af1648ecd802",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5f|c422d1e5-3d07-9f97-1c95-af1648ecd802",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995046028
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5f|c422d1e5-3d07-9f97-1c95-af1648ecd804",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5f|c422d1e5-3d07-9f97-1c95-af1648ecd804",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995057301
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|846eeaf5-2d15-6f3d-940a-022c84b98118",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|846eeaf5-2d15-6f3d-940a-022c84b98118",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995181750
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|d5d04e51-5155-e84e-ff12-11072905ac88",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|d5d04e51-5155-e84e-ff12-11072905ac88",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995199178
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|d5d04e51-5155-e84e-ff12-11072905ac96",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|d5d04e51-5155-e84e-ff12-11072905ac96",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995215633
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|51d5a3bc-f513-2610-f54b-a6dbcfd15a9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|51d5a3bc-f513-2610-f54b-a6dbcfd15a9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995273987
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|3f8aab65-5f1e-fed7-ec16-b17b5897a5eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|3f8aab65-5f1e-fed7-ec16-b17b5897a5eb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995283187
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|81a216cf-1eca-dccf-0881-18c4e99e1eb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|81a216cf-1eca-dccf-0881-18c4e99e1eb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995289299
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|d5d04e51-5155-e84e-ff12-11072905ac98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|d5d04e51-5155-e84e-ff12-11072905ac98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995339451
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|3c932605-b173-cb24-2b63-a437b007b2d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|3c932605-b173-cb24-2b63-a437b007b2d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995438665
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-216"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|a2dd9626-9f29-f5ca-67af-d0dd87e62c97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|a2dd9626-9f29-f5ca-67af-d0dd87e62c97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995604504
        },
        "e-217": {
            "id": "e-217",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|a2dd9626-9f29-f5ca-67af-d0dd87e62c9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|a2dd9626-9f29-f5ca-67af-d0dd87e62c9a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995604504
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa65|a2dd9626-9f29-f5ca-67af-d0dd87e62caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa65|a2dd9626-9f29-f5ca-67af-d0dd87e62caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995604504
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-222"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259a3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995883884
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995890166
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995895875
        },
        "e-227": {
            "id": "e-227",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|a073e464-d96c-c799-337d-503040a259d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995904804
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|2a37d0c2-d6f2-4777-8316-dec91b0b477f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|2a37d0c2-d6f2-4777-8316-dec91b0b477f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995989004
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-232"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|7dcfc027-3d5d-ad91-2a5e-2e1799561ffa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|7dcfc027-3d5d-ad91-2a5e-2e1799561ffa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711995997227
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-234"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa62|49ff0701-1f80-e8a7-4817-5b342a242aab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa62|49ff0701-1f80-e8a7-4817-5b342a242aab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711996004843
        },
        "e-235": {
            "id": "e-235",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-236"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711996122240
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711996122286
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663723e2b96f134e21a8fa5e|5060c5e3-16a0-7973-09bc-d2934aa6b943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663723e2b96f134e21a8fa5e|5060c5e3-16a0-7973-09bc-d2934aa6b943",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711998262165
        },
        "e-239": {
            "id": "e-239",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".project-items",
                "originalId": "663723e2b96f134e21a8fa63|ab2501f9-5bac-a832-6011-7394f564c9c6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-items",
                "originalId": "663723e2b96f134e21a8fa63|ab2501f9-5bac-a832-6011-7394f564c9c6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714363329256
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".project-items",
                "originalId": "663723e2b96f134e21a8fa63|ab2501f9-5bac-a832-6011-7394f564c9c6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-items",
                "originalId": "663723e2b96f134e21a8fa63|ab2501f9-5bac-a832-6011-7394f564c9c6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714363329260
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-items",
                "originalId": "663723e2b96f134e21a8fa60|76b9bd91-2840-efd0-f46c-e00edff2bff5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-items",
                "originalId": "663723e2b96f134e21a8fa60|76b9bd91-2840-efd0-f46c-e00edff2bff5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714363593893
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-items",
                "originalId": "663723e2b96f134e21a8fa60|76b9bd91-2840-efd0-f46c-e00edff2bff5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-items",
                "originalId": "663723e2b96f134e21a8fa60|76b9bd91-2840-efd0-f46c-e00edff2bff5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714363593903
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-244"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-item",
                "originalId": "663723e2b96f134e21a8fa60|c033e26f-386d-02a8-1040-ac4364aaa500",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-item",
                "originalId": "663723e2b96f134e21a8fa60|c033e26f-386d-02a8-1040-ac4364aaa500",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714363729685
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-item",
                "originalId": "663723e2b96f134e21a8fa60|c033e26f-386d-02a8-1040-ac4364aaa500",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-item",
                "originalId": "663723e2b96f134e21a8fa60|c033e26f-386d-02a8-1040-ac4364aaa500",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714363729692
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Nav Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list-5",
                            "selectorGuids": ["bfd3de40-a718-7969-5c4b-9e0b8a6429a4"]
                        },
                        "xValue": -20,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list-5",
                            "selectorGuids": ["bfd3de40-a718-7969-5c4b-9e0b8a6429a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list-5",
                            "selectorGuids": ["bfd3de40-a718-7969-5c4b-9e0b8a6429a4"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list-5",
                            "selectorGuids": ["bfd3de40-a718-7969-5c4b-9e0b8a6429a4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1675459392400
        },
        "a-2": {
            "id": "a-2",
            "title": "Nav Hover 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list-5",
                            "selectorGuids": ["bfd3de40-a718-7969-5c4b-9e0b8a6429a4"]
                        },
                        "xValue": -20,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown-list-5",
                            "selectorGuids": ["bfd3de40-a718-7969-5c4b-9e0b8a6429a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1675459392400
        },
        "a-5": {
            "id": "a-5",
            "title": "Faq Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d8"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1672738597447
        },
        "a-4": {
            "id": "a-4",
            "title": "Faq Show",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d8"]
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672738331495
        },
        "a-29": {
            "id": "a-29",
            "title": "Slide Top 02",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 150,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 150,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-7": {
            "id": "a-7",
            "title": "hover Color in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-icon",
                            "selectorGuids": ["9a2ea854-96f0-f198-d618-9bb56569e142"]
                        },
                        "globalSwatchId": "",
                        "rValue": 243,
                        "bValue": 244,
                        "gValue": 244,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-icon",
                            "selectorGuids": ["9a2ea854-96f0-f198-d618-9bb56569e142"]
                        },
                        "globalSwatchId": "",
                        "rValue": 237,
                        "bValue": 108,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710867266795
        },
        "a-8": {
            "id": "a-8",
            "title": "hover Color in 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-icon",
                            "selectorGuids": ["9a2ea854-96f0-f198-d618-9bb56569e142"]
                        },
                        "globalSwatchId": "",
                        "rValue": 243,
                        "bValue": 244,
                        "gValue": 244,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710867266795
        },
        "a-9": {
            "id": "a-9",
            "title": "Blog Scale In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-wrap",
                            "selectorGuids": ["4b1c7b74-58f9-64cb-f6c1-0c5abebfe783"]
                        },
                        "xValue": 1.15,
                        "yValue": 1.15,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1665298958061
        },
        "a-10": {
            "id": "a-10",
            "title": "Blog Scale Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-wrap",
                            "selectorGuids": ["4b1c7b74-58f9-64cb-f6c1-0c5abebfe783"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1665298958061
        },
        "a-11": {
            "id": "a-11",
            "title": "Slide Top 01 D 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa4c|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "yValue": 60,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa4c|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa4c|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa4c|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-14": {
            "id": "a-14",
            "title": "Faq Show 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672738331495
        },
        "a-15": {
            "id": "a-15",
            "title": "Faq Hide 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1672738597447
        },
        "a-16": {
            "id": "a-16",
            "title": "Slide Top 01 D 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa64|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "yValue": 60,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa64|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa64|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa64|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-17": {
            "id": "a-17",
            "title": "Faq Show 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d8"]
                        },
                        "heightValue": 90,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672738331495
        },
        "a-18": {
            "id": "a-18",
            "title": "Faq Hide 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answer",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d8"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1672738597447
        },
        "a-19": {
            "id": "a-19",
            "title": "Slide Top 01 D 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa61|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "yValue": 60,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa61|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa61|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "663723e2b96f134e21a8fa61|49e27e84-749b-edea-be60-134379a9f9d4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-20": {
            "id": "a-20",
            "title": "Faq Show 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672738331495
        },
        "a-21": {
            "id": "a-21",
            "title": "Faq Hide 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1672738597447
        },
        "a-6": {
            "id": "a-6",
            "title": "Slide Top 01",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-25": {
            "id": "a-25",
            "title": "Faq Show 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672738331495
        },
        "a-26": {
            "id": "a-26",
            "title": "Faq Hide 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq-answers",
                            "selectorGuids": ["8e66cedf-3d70-dff0-bcd0-10b19ed6b11b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".down-caret-icon",
                            "selectorGuids": ["adcc4a08-48f6-65ab-0d9f-2fa6acc6b5d4"]
                        },
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1672738597447
        },
        "a-27": {
            "id": "a-27",
            "title": "Opacity 70",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".op70",
                            "selectorGuids": ["66cdd351-2c89-422b-6ed0-dd6e7e9c06a8"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".op70",
                            "selectorGuids": ["66cdd351-2c89-422b-6ed0-dd6e7e9c06a8"]
                        },
                        "value": 0.7,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695405012953
        },
        "a-28": {
            "id": "a-28",
            "title": "Opacity 70 out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".op70",
                            "selectorGuids": ["66cdd351-2c89-422b-6ed0-dd6e7e9c06a8"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1695405012953
        },
        "a-30": {
            "id": "a-30",
            "title": "Slide Top 03",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-31": {
            "id": "a-31",
            "title": "Slide Top 04",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 450,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 450,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "65c7096a4625ef0ba7f5926a|734265a1-fcf1-c66e-11ea-f9fb544b0f24"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1695400121909
        },
        "a-32": {
            "id": "a-32",
            "title": "F Link Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link",
                            "selectorGuids": ["848b088e-31ee-5210-4375-840c5b3a5661"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.4
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link",
                            "selectorGuids": ["848b088e-31ee-5210-4375-840c5b3a5661"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1711991288488
        },
        "a-33": {
            "id": "a-33",
            "title": "F Link Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-link",
                            "selectorGuids": ["848b088e-31ee-5210-4375-840c5b3a5661"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.4
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1711991288488
        },
        "a-34": {
            "id": "a-34",
            "title": "CP Link",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".basecom",
                            "selectorGuids": ["7cd7d730-3438-4d96-b00d-f2778b840d67"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.6
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".basecom",
                            "selectorGuids": ["7cd7d730-3438-4d96-b00d-f2778b840d67"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1711991288488
        },
        "a-35": {
            "id": "a-35",
            "title": "CP Link 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".basecom",
                            "selectorGuids": ["7cd7d730-3438-4d96-b00d-f2778b840d67"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.6
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1711991288488
        },
        "a-36": {
            "id": "a-36",
            "title": "Nav Btn In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--black",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--black",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-36-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--white",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-4",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0.1
                    }
                }, {
                    "id": "a-36-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--black",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-36-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--white",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1711996138840
        },
        "a-37": {
            "id": "a-37",
            "title": "Nav Btn Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--black",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--black",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-37-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "4dd956af-2a7e-6437-e1d3-50c2e459399f"
                        },
                        "globalSwatchId": "--white",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1711996138840
        },
        "a-38": {
            "id": "a-38",
            "title": "Project Zoom In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbs-img",
                            "selectorGuids": ["e0d09fd6-ac78-3927-eb54-b05c64d6e3a2"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbs-img",
                            "selectorGuids": ["e0d09fd6-ac78-3927-eb54-b05c64d6e3a2"]
                        },
                        "xValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbs-img",
                            "selectorGuids": ["e0d09fd6-ac78-3927-eb54-b05c64d6e3a2"]
                        },
                        "xValue": 1.125,
                        "yValue": 1.125,
                        "locked": true
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbs-img",
                            "selectorGuids": ["e0d09fd6-ac78-3927-eb54-b05c64d6e3a2"]
                        },
                        "xValue": 0,
                        "zValue": 5,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1714363336703
        },
        "a-39": {
            "id": "a-39",
            "title": "Project Zoom Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbs-img",
                            "selectorGuids": ["e0d09fd6-ac78-3927-eb54-b05c64d6e3a2"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-39-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-thumbs-img",
                            "selectorGuids": ["e0d09fd6-ac78-3927-eb54-b05c64d6e3a2"]
                        },
                        "xValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714363336703
        },
        "a-40": {
            "id": "a-40",
            "title": "Blog Zoom In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbs-img",
                            "selectorGuids": ["438492c9-8962-2dce-e260-a5be487a59b2"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-40-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbs-img",
                            "selectorGuids": ["438492c9-8962-2dce-e260-a5be487a59b2"]
                        },
                        "xValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbs-img",
                            "selectorGuids": ["438492c9-8962-2dce-e260-a5be487a59b2"]
                        },
                        "xValue": 1.125,
                        "yValue": 1.125,
                        "locked": true
                    }
                }, {
                    "id": "a-40-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbs-img",
                            "selectorGuids": ["438492c9-8962-2dce-e260-a5be487a59b2"]
                        },
                        "xValue": 0,
                        "zValue": 5,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1714363336703
        },
        "a-41": {
            "id": "a-41",
            "title": "Blog Zoom Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbs-img",
                            "selectorGuids": ["438492c9-8962-2dce-e260-a5be487a59b2"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-41-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumbs-img",
                            "selectorGuids": ["438492c9-8962-2dce-e260-a5be487a59b2"]
                        },
                        "xValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714363336703
        },
        "a-42": {
            "id": "a-42",
            "title": "Blog Zoom In 02",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumb-img",
                            "selectorGuids": ["ca949c47-451d-a20d-5542-aef36f478258"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumb-img",
                            "selectorGuids": ["ca949c47-451d-a20d-5542-aef36f478258"]
                        },
                        "xValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumb-img",
                            "selectorGuids": ["ca949c47-451d-a20d-5542-aef36f478258"]
                        },
                        "xValue": 1.125,
                        "yValue": 1.125,
                        "locked": true
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumb-img",
                            "selectorGuids": ["ca949c47-451d-a20d-5542-aef36f478258"]
                        },
                        "xValue": 0,
                        "zValue": 3,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1714363336703
        },
        "a-43": {
            "id": "a-43",
            "title": "Blog Zoom Out 02",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumb-img",
                            "selectorGuids": ["ca949c47-451d-a20d-5542-aef36f478258"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-thumb-img",
                            "selectorGuids": ["ca949c47-451d-a20d-5542-aef36f478258"]
                        },
                        "xValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714363336703
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});