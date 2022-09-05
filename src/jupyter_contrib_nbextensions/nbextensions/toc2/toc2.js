function myFunction(myD3) {
    var d3 = Object.assign(myD3 || {}, (() => {
        var d3 = (() => {
            var li = Object.create; var dt = Object.defineProperty; var hi = Object.getOwnPropertyDescriptor; var fi = Object.getOwnPropertyNames; var ui = Object.getPrototypeOf, ci = Object.prototype.hasOwnProperty; var de = t => dt(t, "__esModule", { value: !0 }); var pe = t => { if (typeof require != "undefined") return require(t); throw new Error('Dynamic require of "' + t + '" is not supported') }; var A = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), di = (t, e) => { de(t); for (var r in e) dt(t, r, { get: e[r], enumerable: !0 }) }, pi = (t, e, r) => { if (e && typeof e == "object" || typeof e == "function") for (let i of fi(e)) !ci.call(t, i) && i !== "default" && dt(t, i, { get: () => e[i], enumerable: !(r = hi(e, i)) || r.enumerable }); return t }, rt = t => pi(de(dt(t != null ? li(ui(t)) : {}, "default", t && t.__esModule && "default" in t ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 })), t); var ge = A((ln, ve) => { "use strict"; function P(t, e) { var e = e || {}; this._head = 0, this._tail = 0, this._capacity = e.capacity, this._capacityMask = 3, this._list = new Array(4), Array.isArray(t) && this._fromArray(t) } P.prototype.peekAt = function (e) { var r = e; if (r === (r | 0)) { var i = this.size(); if (!(r >= i || r < -i)) return r < 0 && (r += i), r = this._head + r & this._capacityMask, this._list[r] } }; P.prototype.get = function (e) { return this.peekAt(e) }; P.prototype.peek = function () { if (this._head !== this._tail) return this._list[this._head] }; P.prototype.peekFront = function () { return this.peek() }; P.prototype.peekBack = function () { return this.peekAt(-1) }; Object.defineProperty(P.prototype, "length", { get: function () { return this.size() } }); P.prototype.size = function () { return this._head === this._tail ? 0 : this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail) }; P.prototype.unshift = function (e) { if (e === void 0) return this.size(); var r = this._list.length; return this._head = this._head - 1 + r & this._capacityMask, this._list[this._head] = e, this._tail === this._head && this._growArray(), this._capacity && this.size() > this._capacity && this.pop(), this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail) }; P.prototype.shift = function () { var e = this._head; if (e !== this._tail) { var r = this._list[e]; return this._list[e] = void 0, this._head = e + 1 & this._capacityMask, e < 2 && this._tail > 1e4 && this._tail <= this._list.length >>> 2 && this._shrinkArray(), r } }; P.prototype.push = function (e) { if (e === void 0) return this.size(); var r = this._tail; return this._list[r] = e, this._tail = r + 1 & this._capacityMask, this._tail === this._head && this._growArray(), this._capacity && this.size() > this._capacity && this.shift(), this._head < this._tail ? this._tail - this._head : this._capacityMask + 1 - (this._head - this._tail) }; P.prototype.pop = function () { var e = this._tail; if (e !== this._head) { var r = this._list.length; this._tail = e - 1 + r & this._capacityMask; var i = this._list[this._tail]; return this._list[this._tail] = void 0, this._head < 2 && e > 1e4 && e <= r >>> 2 && this._shrinkArray(), i } }; P.prototype.removeOne = function (e) { var r = e; if (r === (r | 0) && this._head !== this._tail) { var i = this.size(), n = this._list.length; if (!(r >= i || r < -i)) { r < 0 && (r += i), r = this._head + r & this._capacityMask; var s = this._list[r], o; if (e < i / 2) { for (o = e; o > 0; o--)this._list[r] = this._list[r = r - 1 + n & this._capacityMask]; this._list[r] = void 0, this._head = this._head + 1 + n & this._capacityMask } else { for (o = i - 1 - e; o > 0; o--)this._list[r] = this._list[r = r + 1 + n & this._capacityMask]; this._list[r] = void 0, this._tail = this._tail - 1 + n & this._capacityMask } return s } } }; P.prototype.remove = function (e, r) { var i = e, n, s = r; if (i === (i | 0) && this._head !== this._tail) { var o = this.size(), a = this._list.length; if (!(i >= o || i < -o || r < 1)) { if (i < 0 && (i += o), r === 1 || !r) return n = new Array(1), n[0] = this.removeOne(i), n; if (i === 0 && i + r >= o) return n = this.toArray(), this.clear(), n; i + r > o && (r = o - i); var l; for (n = new Array(r), l = 0; l < r; l++)n[l] = this._list[this._head + i + l & this._capacityMask]; if (i = this._head + i & this._capacityMask, e + r === o) { for (this._tail = this._tail - r + a & this._capacityMask, l = r; l > 0; l--)this._list[i = i + 1 + a & this._capacityMask] = void 0; return n } if (e === 0) { for (this._head = this._head + r + a & this._capacityMask, l = r - 1; l > 0; l--)this._list[i = i + 1 + a & this._capacityMask] = void 0; return n } if (i < o / 2) { for (this._head = this._head + e + r + a & this._capacityMask, l = e; l > 0; l--)this.unshift(this._list[i = i - 1 + a & this._capacityMask]); for (i = this._head - 1 + a & this._capacityMask; s > 0;)this._list[i = i - 1 + a & this._capacityMask] = void 0, s--; e < 0 && (this._tail = i) } else { for (this._tail = i, i = i + r + a & this._capacityMask, l = o - (r + e); l > 0; l--)this.push(this._list[i++]); for (i = this._tail; s > 0;)this._list[i = i + 1 + a & this._capacityMask] = void 0, s-- } return this._head < 2 && this._tail > 1e4 && this._tail <= a >>> 2 && this._shrinkArray(), n } } }; P.prototype.splice = function (e, r) { var i = e; if (i === (i | 0)) { var n = this.size(); if (i < 0 && (i += n), !(i > n)) if (arguments.length > 2) { var s, o, a, l = arguments.length, u = this._list.length, h = 2; if (!n || i < n / 2) { for (o = new Array(i), s = 0; s < i; s++)o[s] = this._list[this._head + s & this._capacityMask]; for (r === 0 ? (a = [], i > 0 && (this._head = this._head + i + u & this._capacityMask)) : (a = this.remove(i, r), this._head = this._head + i + u & this._capacityMask); l > h;)this.unshift(arguments[--l]); for (s = i; s > 0; s--)this.unshift(o[s - 1]) } else { o = new Array(n - (i + r)); var f = o.length; for (s = 0; s < f; s++)o[s] = this._list[this._head + i + r + s & this._capacityMask]; for (r === 0 ? (a = [], i != n && (this._tail = this._head + i + u & this._capacityMask)) : (a = this.remove(i, r), this._tail = this._tail - f + u & this._capacityMask); h < l;)this.push(arguments[h++]); for (s = 0; s < f; s++)this.push(o[s]) } return a } else return this.remove(i, r) } }; P.prototype.clear = function () { this._head = 0, this._tail = 0 }; P.prototype.isEmpty = function () { return this._head === this._tail }; P.prototype.toArray = function () { return this._copyArray(!1) }; P.prototype._fromArray = function (e) { for (var r = 0; r < e.length; r++)this.push(e[r]) }; P.prototype._copyArray = function (e) { var r = [], i = this._list, n = i.length, s; if (e || this._head > this._tail) { for (s = this._head; s < n; s++)r.push(i[s]); for (s = 0; s < this._tail; s++)r.push(i[s]) } else for (s = this._head; s < this._tail; s++)r.push(i[s]); return r }; P.prototype._growArray = function () { this._head && (this._list = this._copyArray(!0), this._head = 0), this._tail = this._list.length, this._list.length *= 2, this._capacityMask = this._capacityMask << 1 | 1 }; P.prototype._shrinkArray = function () { this._list.length >>>= 1, this._capacityMask >>>= 1 }; ve.exports = P }); var Ee = A((mn, ze) => { "use strict"; var lt = 1e-60, Ce, Be; do lt += lt, Ce = 1 + .1 * lt, Be = 1 + .2 * lt; while (Ce <= 1 || Be <= 1); ze.exports = lt }); var Se = A((yn, Ve) => { "use strict"; function Ci(t, e, r) { let i, n; for (let s = 1; s <= r; s += 1) { t[s][s] = 1 / t[s][s], n = -t[s][s]; for (let o = 1; o < s; o += 1)t[o][s] *= n; if (i = s + 1, r < i) break; for (let o = i; o <= r; o += 1) { n = t[s][o], t[s][o] = 0; for (let a = 1; a <= s; a += 1)t[a][o] += n * t[a][s] } } } Ve.exports = Ci }); var Ae = A((bn, qe) => { "use strict"; function Bi(t, e, r, i) { let n, s; for (n = 1; n <= r; n += 1) { s = 0; for (let o = 1; o < n; o += 1)s += t[o][n] * i[o]; i[n] = (i[n] - s) / t[n][n] } for (let o = 1; o <= r; o += 1) { n = r + 1 - o, i[n] /= t[n][n], s = -i[n]; for (let a = 1; a < n; a += 1)i[a] += s * t[a][n] } } qe.exports = Bi }); var Te = A((xn, Ne) => { "use strict"; function zi(t, e, r, i) { let n, s, o; for (let a = 1; a <= r; a += 1) { if (i[1] = a, o = 0, n = a - 1, n < 1) { if (o = t[a][a] - o, o <= 0) break; t[a][a] = Math.sqrt(o) } else { for (let l = 1; l <= n; l += 1) { s = t[l][a]; for (let u = 1; u < l; u += 1)s -= t[u][a] * t[u][l]; s /= t[l][l], t[l][a] = s, o += s * s } if (o = t[a][a] - o, o <= 0) break; t[a][a] = Math.sqrt(o) } i[1] = 0 } } Ne.exports = zi }); var Pe = A((wn, ke) => { "use strict"; var Ut = Ee(), Ei = Se(), Vi = Ae(), Si = Te(); function qi(t, e, r, i, n, s, o, a, l, u, h, f, d, v = 0, g, c, I) { let y, m, b, _, w, x, z, M, C, O, E, V, S, N, R = Math.min(i, h), q = 2 * i + R * (R + 5) / 2 + 2 * h + 1; for (let p = 1; p <= i; p += 1)c[p] = e[p]; for (let p = i + 1; p <= q; p += 1)c[p] = 0; for (let p = 1; p <= h; p += 1)d[p] = 0, s[p] = 0; let G = []; if (I[1] === 0) { if (Si(t, r, i, G), G[1] !== 0) { I[1] = 2; return } Vi(t, r, i, e), Ei(t, r, i) } else { for (let p = 1; p <= i; p += 1) { n[p] = 0; for (let B = 1; B <= p; B += 1)n[p] += t[B][p] * e[B] } for (let p = 1; p <= i; p += 1) { e[p] = 0; for (let B = p; B <= i; B += 1)e[p] += t[p][B] * n[B] } } o[1] = 0; for (let p = 1; p <= i; p += 1) { n[p] = e[p], o[1] += c[p] * n[p], c[p] = 0; for (let B = p + 1; B <= i; B += 1)t[B][p] = 0 } o[1] = -o[1] / 2, I[1] = 0; let L = i, H = L + i, $ = H + R, Q = $ + R + 1, X = Q + R * (R + 1) / 2, Dt = X + h; for (let p = 1; p <= h; p += 1) { x = 0; for (let B = 1; B <= i; B += 1)x += a[B][p] * a[B][p]; c[Dt + p] = Math.sqrt(x) } _ = v, g[1] = 0, g[2] = 0; function ni() { g[1] += 1, q = X; for (let p = 1; p <= h; p += 1) { q += 1, x = -l[p]; for (let B = 1; B <= i; B += 1)x += a[B][p] * n[B]; if (Math.abs(x) < Ut && (x = 0), p > f) c[q] = x; else if (c[q] = -Math.abs(x), x > 0) { for (let B = 1; B <= i; B += 1)a[B][p] = -a[B][p]; l[p] = -l[p] } } for (let p = 1; p <= _; p += 1)c[X + d[p]] = 0; b = 0, w = 0; for (let p = 1; p <= h; p += 1)c[X + p] < w * c[Dt + p] && (b = p, w = c[X + p] / c[Dt + p]); if (b === 0) { for (let p = 1; p <= _; p += 1)s[d[p]] = c[$ + p]; return 999 } return 0 } function si() { for (let p = 1; p <= i; p += 1) { x = 0; for (let B = 1; B <= i; B += 1)x += t[B][p] * a[B][b]; c[p] = x } y = L; for (let p = 1; p <= i; p += 1)c[y + p] = 0; for (let p = _ + 1; p <= i; p += 1)for (let B = 1; B <= i; B += 1)c[y + B] = c[y + B] + t[B][p] * c[p]; V = !0; for (let p = _; p >= 1; p -= 1) { x = c[p], q = Q + p * (p + 3) / 2, y = q - p; for (let B = p + 1; B <= _; B += 1)x -= c[q] * c[H + B], q += B; x /= c[y], c[H + p] = x, !(d[p] <= f) && (x <= 0 || (V = !1, m = p)) } if (!V) { z = c[$ + m] / c[H + m]; for (let p = 1; p <= _; p += 1)d[p] <= f || c[H + p] <= 0 || (w = c[$ + p] / c[H + p], w < z && (z = w, m = p)) } x = 0; for (let p = L + 1; p <= L + i; p += 1)x += c[p] * c[p]; if (Math.abs(x) <= Ut) { if (V) return I[1] = 1, 999; for (let p = 1; p <= _; p += 1)c[$ + p] = c[$ + p] - z * c[H + p]; return c[$ + _ + 1] = c[$ + _ + 1] + z, 700 } x = 0; for (let p = 1; p <= i; p += 1)x += c[L + p] * a[p][b]; M = -c[X + b] / x, S = !0, V || z < M && (M = z, S = !1); for (let p = 1; p <= i; p += 1)n[p] += M * c[L + p], Math.abs(n[p]) < Ut && (n[p] = 0); o[1] += M * x * (M / 2 + c[$ + _ + 1]); for (let p = 1; p <= _; p += 1)c[$ + p] = c[$ + p] - M * c[H + p]; if (c[$ + _ + 1] = c[$ + _ + 1] + M, S) { _ += 1, d[_] = b, q = Q + (_ - 1) * _ / 2 + 1; for (let p = 1; p <= _ - 1; p += 1)c[q] = c[p], q += 1; if (_ === i) c[q] = c[i]; else { for (let p = i; p >= _ + 1; p -= 1)if (c[p] !== 0 && (C = Math.max(Math.abs(c[p - 1]), Math.abs(c[p])), O = Math.min(Math.abs(c[p - 1]), Math.abs(c[p])), c[p - 1] >= 0 ? w = Math.abs(C * Math.sqrt(1 + O * O / (C * C))) : w = -Math.abs(C * Math.sqrt(1 + O * O / (C * C))), C = c[p - 1] / w, O = c[p] / w, C !== 1)) if (C === 0) { c[p - 1] = O * w; for (let B = 1; B <= i; B += 1)w = t[B][p - 1], t[B][p - 1] = t[B][p], t[B][p] = w } else { c[p - 1] = w, E = O / (1 + C); for (let B = 1; B <= i; B += 1)w = C * t[B][p - 1] + O * t[B][p], t[B][p] = E * (t[B][p - 1] + w) - t[B][p], t[B][p - 1] = w } c[q] = c[_] } } else { x = -l[b]; for (let p = 1; p <= i; p += 1)x += n[p] * a[p][b]; if (b > f) c[X + b] = x; else if (c[X + b] = -Math.abs(x), x > 0) { for (let p = 1; p <= i; p += 1)a[p][b] = -a[p][b]; l[b] = -l[b] } return 700 } return 0 } function oi() { if (q = Q + m * (m + 1) / 2 + 1, y = q + m, c[y] === 0 || (C = Math.max(Math.abs(c[y - 1]), Math.abs(c[y])), O = Math.min(Math.abs(c[y - 1]), Math.abs(c[y])), c[y - 1] >= 0 ? w = Math.abs(C * Math.sqrt(1 + O * O / (C * C))) : w = -Math.abs(C * Math.sqrt(1 + O * O / (C * C))), C = c[y - 1] / w, O = c[y] / w, C === 1)) return 798; if (C === 0) { for (let p = m + 1; p <= _; p += 1)w = c[y - 1], c[y - 1] = c[y], c[y] = w, y += p; for (let p = 1; p <= i; p += 1)w = t[p][m], t[p][m] = t[p][m + 1], t[p][m + 1] = w } else { E = O / (1 + C); for (let p = m + 1; p <= _; p += 1)w = C * c[y - 1] + O * c[y], c[y] = E * (c[y - 1] + w) - c[y], c[y - 1] = w, y += p; for (let p = 1; p <= i; p += 1)w = C * t[p][m] + O * t[p][m + 1], t[p][m + 1] = E * (t[p][m] + w) - t[p][m + 1], t[p][m] = w } return 0 } function ai() { y = q - m; for (let p = 1; p <= m; p += 1)c[y] = c[q], q += 1, y += 1; return c[$ + m] = c[$ + m + 1], d[m] = d[m + 1], m += 1, m < _ ? 797 : 0 } function ce() { return c[$ + _] = c[$ + _ + 1], c[$ + _ + 1] = 0, d[_] = 0, _ -= 1, g[2] += 1, 0 } for (N = 0; ;) { if (N = ni(), N === 999) return; for (; N = si(), N !== 0;) { if (N === 999) return; if (N === 700) if (m === _) ce(); else { for (; oi(), N = ai(), N === 797;); ce() } } } } ke.exports = qi }); var $e = A(Re => { "use strict"; var Ai = Pe(); function Ni(t, e, r, i = [], n = 0, s = [0, 0]) { let o = [], a = [], l = [], u = [], h = [], f = [], d = "", v = t.length - 1, g = r[1].length - 1; if (!i) for (let y = 1; y <= g; y += 1)i[y] = 0; if (v !== t[1].length - 1 && (d = "Dmat is not symmetric!"), v !== e.length - 1 && (d = "Dmat and dvec are incompatible!"), v !== r.length - 1 && (d = "Amat and dvec are incompatible!"), g !== i.length - 1 && (d = "Amat and bvec are incompatible!"), (n > g || n < 0) && (d = "Value of meq is invalid!"), d !== "") return { message: d }; for (let y = 1; y <= g; y += 1)a[y] = 0, u[y] = 0; let c = 0, I = Math.min(v, g); for (let y = 1; y <= v; y += 1)l[y] = 0; o[1] = 0; for (let y = 1; y <= 2 * v + I * (I + 5) / 2 + 2 * g + 1; y += 1)h[y] = 0; for (let y = 1; y <= 2; y += 1)f[y] = 0; return Ai(t, e, v, v, l, u, o, r, i, v, g, n, a, c, f, h, s), s[1] === 1 && (d = "constraints are inconsistent, no solution!"), s[1] === 2 && (d = "matrix D in quadratic function is not positive definite!"), { solution: l, Lagrangian: u, value: o, unconstrained_solution: e, iterations: f, iact: a, message: d } } Re.solveQP = Ni }); var Fe = A((In, De) => { "use strict"; De.exports = $e() }); var Wt = A((zn, We) => { function Ge(t, e, r, i) { this.feasible = r, this.evaluation = e, this.bounded = i, this._tableau = t } We.exports = Ge; Ge.prototype.generateSolutionSet = function () { for (var t = {}, e = this._tableau, r = e.varIndexByRow, i = e.variablesPerIndex, n = e.matrix, s = e.rhsColumn, o = e.height - 1, a = Math.round(1 / e.precision), l = 1; l <= o; l += 1) { var u = r[l], h = i[u]; if (!(h === void 0 || h.isSlack === !0)) { var f = n[l][s]; t[h.id] = Math.round((Number.EPSILON + f) * a) / a } } return t } }); var Ze = A((En, Je) => { var He = Wt(); function Mt(t, e, r, i, n) { He.call(this, t, e, r, i), this.iter = n } Je.exports = Mt; Mt.prototype = Object.create(He.prototype); Mt.constructor = Mt }); var J = A((Vn, Ye) => { var Ri = Wt(), $i = Ze(); function Z(t) { this.model = null, this.matrix = null, this.width = 0, this.height = 0, this.costRowIndex = 0, this.rhsColumn = 0, this.variablesPerIndex = [], this.unrestrictedVars = null, this.feasible = !0, this.evaluation = 0, this.simplexIters = 0, this.varIndexByRow = null, this.varIndexByCol = null, this.rowByVarIndex = null, this.colByVarIndex = null, this.precision = t || 1e-8, this.optionalObjectives = [], this.objectivesByPriority = {}, this.savedState = null, this.availableIndexes = [], this.lastElementIndex = 0, this.variables = null, this.nVars = 0, this.bounded = !0, this.unboundedVarIndex = null, this.branchAndCutIterations = 0 } Ye.exports = Z; Z.prototype.solve = function () { return this.model.getNumberOfIntegerVariables() > 0 ? this.branchAndCut() : this.simplex(), this.updateVariableValues(), this.getSolution() }; function Ht(t, e) { this.priority = t, this.reducedCosts = new Array(e); for (var r = 0; r < e; r += 1)this.reducedCosts[r] = 0 } Ht.prototype.copy = function () { var t = new Ht(this.priority, this.reducedCosts.length); return t.reducedCosts = this.reducedCosts.slice(), t }; Z.prototype.setOptionalObjective = function (t, e, r) { var i = this.objectivesByPriority[t]; if (i === void 0) { var n = Math.max(this.width, e + 1); i = new Ht(t, n), this.objectivesByPriority[t] = i, this.optionalObjectives.push(i), this.optionalObjectives.sort(function (s, o) { return s.priority - o.priority }) } i.reducedCosts[e] = r }; Z.prototype.initialize = function (t, e, r, i) { this.variables = r, this.unrestrictedVars = i, this.width = t, this.height = e; for (var n = new Array(t), s = 0; s < t; s++)n[s] = 0; this.matrix = new Array(e); for (var o = 0; o < e; o++)this.matrix[o] = n.slice(); this.varIndexByRow = new Array(this.height), this.varIndexByCol = new Array(this.width), this.varIndexByRow[0] = -1, this.varIndexByCol[0] = -1, this.nVars = t + e - 2, this.rowByVarIndex = new Array(this.nVars), this.colByVarIndex = new Array(this.nVars), this.lastElementIndex = this.nVars }; Z.prototype._resetMatrix = function () { var t = this.model.variables, e = this.model.constraints, r = t.length, i = e.length, n, s, o = this.matrix[0], a = this.model.isMinimization === !0 ? -1 : 1; for (n = 0; n < r; n += 1) { var l = t[n], u = l.priority, h = a * l.cost; u === 0 ? o[n + 1] = h : this.setOptionalObjective(u, n + 1, h), s = t[n].index, this.rowByVarIndex[s] = -1, this.colByVarIndex[s] = n + 1, this.varIndexByCol[n + 1] = s } for (var f = 1, d = 0; d < i; d += 1) { var v = e[d], g = v.index; this.rowByVarIndex[g] = f, this.colByVarIndex[g] = -1, this.varIndexByRow[f] = g; var c, I, y, m = v.terms, b = m.length, _ = this.matrix[f++]; if (v.isUpperBound) { for (c = 0; c < b; c += 1)I = m[c], y = this.colByVarIndex[I.variable.index], _[y] = I.coefficient; _[0] = v.rhs } else { for (c = 0; c < b; c += 1)I = m[c], y = this.colByVarIndex[I.variable.index], _[y] = -I.coefficient; _[0] = -v.rhs } } }; Z.prototype.setModel = function (t) { this.model = t; var e = t.nVariables + 1, r = t.nConstraints + 1; return this.initialize(e, r, t.variables, t.unrestrictedVariables), this._resetMatrix(), this }; Z.prototype.getNewElementIndex = function () { if (this.availableIndexes.length > 0) return this.availableIndexes.pop(); var t = this.lastElementIndex; return this.lastElementIndex += 1, t }; Z.prototype.density = function () { for (var t = 0, e = this.matrix, r = 0; r < this.height; r++)for (var i = e[r], n = 0; n < this.width; n++)i[n] !== 0 && (t += 1); return t / (this.height * this.width) }; Z.prototype.setEvaluation = function () { var t = Math.round(1 / this.precision), e = this.matrix[this.costRowIndex][this.rhsColumn], r = Math.round((Number.EPSILON + e) * t) / t; this.evaluation = r, this.simplexIters === 0 && (this.bestPossibleEval = r) }; Z.prototype.getSolution = function () { var t = this.model.isMinimization === !0 ? this.evaluation : -this.evaluation; return this.model.getNumberOfIntegerVariables() > 0 ? new $i(this, t, this.feasible, this.bounded, this.branchAndCutIterations) : new Ri(this, t, this.feasible, this.bounded) } }); var Xe = A(() => { var ht = J(); ht.prototype.simplex = function () { return this.bounded = !0, this.phase1(), this.feasible === !0 && this.phase2(), this }; ht.prototype.phase1 = function () { for (var t = this.model.checkForCycles, e = [], r = this.matrix, i = this.rhsColumn, n = this.width - 1, s = this.height - 1, o, a = 0; ;) { for (var l = 0, u = -this.precision, h = 1; h <= s; h++) { o = this.unrestrictedVars[this.varIndexByRow[h]] === !0; var f = r[h][i]; f < u && (u = f, l = h) } if (l === 0) return this.feasible = !0, a; for (var d = 0, v = -1 / 0, g = r[0], c = r[l], I = 1; I <= n; I++) { var y = c[I]; if (o = this.unrestrictedVars[this.varIndexByCol[I]] === !0, o || y < -this.precision) { var m = -g[I] / y; v < m && (v = m, d = I) } } if (d === 0) return this.feasible = !1, a; if (t) { e.push([this.varIndexByRow[l], this.varIndexByCol[d]]); var b = this.checkForCycles(e); if (b.length > 0) return this.model.messages.push("Cycle in phase 1"), this.model.messages.push("Start :" + b[0]), this.model.messages.push("Length :" + b[1]), this.feasible = !1, a } this.pivot(l, d), a += 1 } }; ht.prototype.phase2 = function () { for (var t = this.model.checkForCycles, e = [], r = this.matrix, i = this.rhsColumn, n = this.width - 1, s = this.height - 1, o = this.precision, a = this.optionalObjectives.length, l = null, u = 0, h, f; ;) { var d = r[this.costRowIndex]; a > 0 && (l = []); for (var v = 0, g = o, c = !1, I = 1; I <= n; I++) { if (h = d[I], f = this.unrestrictedVars[this.varIndexByCol[I]] === !0, a > 0 && -o < h && h < o) { l.push(I); continue } if (f && h < 0) { -h > g && (g = -h, v = I, c = !0); continue } h > g && (g = h, v = I, c = !1) } if (a > 0) for (var y = 0; v === 0 && l.length > 0 && y < a;) { var m = [], b = this.optionalObjectives[y].reducedCosts; g = o; for (var _ = 0; _ < l.length; _++) { if (I = l[_], h = b[I], f = this.unrestrictedVars[this.varIndexByCol[I]] === !0, -o < h && h < o) { m.push(I); continue } if (f && h < 0) { -h > g && (g = -h, v = I, c = !0); continue } h > g && (g = h, v = I, c = !1) } l = m, y += 1 } if (v === 0) return this.setEvaluation(), this.simplexIters += 1, u; for (var w = 0, x = 1 / 0, z = this.varIndexByRow, M = 1; M <= s; M++) { var C = r[M], O = C[i], E = C[v]; if (!(-o < E && E < o)) { if (E > 0 && o > O && O > -o) { x = 0, w = M; break } var V = c ? -O / E : O / E; V > o && x > V && (x = V, w = M) } } if (x === 1 / 0) return this.evaluation = -1 / 0, this.bounded = !1, this.unboundedVarIndex = this.varIndexByCol[v], u; if (t) { e.push([this.varIndexByRow[w], this.varIndexByCol[v]]); var S = this.checkForCycles(e); if (S.length > 0) return this.model.messages.push("Cycle in phase 2"), this.model.messages.push("Start :" + S[0]), this.model.messages.push("Length :" + S[1]), this.feasible = !1, u } this.pivot(w, v, !0), u += 1 } }; var Jt = []; ht.prototype.pivot = function (t, e) { var r = this.matrix, i = r[t][e], n = this.height - 1, s = this.width - 1, o = this.varIndexByRow[t], a = this.varIndexByCol[e]; this.varIndexByRow[t] = a, this.varIndexByCol[e] = o, this.rowByVarIndex[a] = t, this.rowByVarIndex[o] = -1, this.colByVarIndex[a] = -1, this.colByVarIndex[o] = e; for (var l = r[t], u = 0, h = 0; h <= s; h++)l[h] >= -1e-16 && l[h] <= 1e-16 ? l[h] = 0 : (l[h] /= i, Jt[u] = h, u += 1); l[e] = 1 / i; for (var f, d, v, g = this.precision, c = 0; c <= n; c++)if (c !== t && !(r[c][e] >= -1e-16 && r[c][e] <= 1e-16)) { var I = r[c]; if (f = I[e], f >= -1e-16 && f <= 1e-16) f !== 0 && (I[e] = 0); else { for (d = 0; d < u; d++)h = Jt[d], v = l[h], v >= -1e-16 && v <= 1e-16 ? v !== 0 && (l[h] = 0) : I[h] = I[h] - f * v; I[e] = -f / i } } var y = this.optionalObjectives.length; if (y > 0) for (var m = 0; m < y; m += 1) { var b = this.optionalObjectives[m].reducedCosts; if (f = b[e], f !== 0) { for (d = 0; d < u; d++)h = Jt[d], v = l[h], v !== 0 && (b[h] = b[h] - f * v); b[e] = -f / i } } }; ht.prototype.checkForCycles = function (t) { for (var e = 0; e < t.length - 1; e++)for (var r = e + 1; r < t.length; r++) { var i = t[e], n = t[r]; if (i[0] === n[0] && i[1] === n[1]) { if (r - e > t.length - r) break; for (var s = !0, o = 1; o < r - e; o++) { var a = t[e + o], l = t[r + o]; if (a[0] !== l[0] || a[1] !== l[1]) { s = !1; break } } if (s) return [e, r - e] } } return [] } }); var Ot = A((An, er) => { function Zt(t, e, r, i) { this.id = t, this.cost = e, this.index = r, this.value = 0, this.priority = i } function Ke(t, e, r, i) { Zt.call(this, t, e, r, i) } Ke.prototype.isInteger = !0; function Yt(t, e) { Zt.call(this, t, 0, e, 0) } Yt.prototype.isSlack = !0; function Qe(t, e) { this.variable = t, this.coefficient = e } function tr(t, e, r) { return r === 0 || r === "required" ? null : (e = e || 1, r = r || 1, t.isMinimization === !1 && (e = -e), t.addVariable(e, "r" + t.relaxationIndex++, !1, !1, r)) } function tt(t, e, r, i) { this.slack = new Yt("s" + r, r), this.index = r, this.model = i, this.rhs = t, this.isUpperBound = e, this.terms = [], this.termsByVarIndex = {}, this.relaxation = null } tt.prototype.addTerm = function (t, e) { var r = e.index, i = this.termsByVarIndex[r]; if (i === void 0) i = new Qe(e, t), this.termsByVarIndex[r] = i, this.terms.push(i), this.isUpperBound === !0 && (t = -t), this.model.updateConstraintCoefficient(this, e, t); else { var n = i.coefficient + t; this.setVariableCoefficient(n, e) } return this }; tt.prototype.removeTerm = function (t) { return this }; tt.prototype.setRightHandSide = function (t) { if (t !== this.rhs) { var e = t - this.rhs; this.isUpperBound === !0 && (e = -e), this.rhs = t, this.model.updateRightHandSide(this, e) } return this }; tt.prototype.setVariableCoefficient = function (t, e) { var r = e.index; if (r === -1) { console.warn("[Constraint.setVariableCoefficient] Trying to change coefficient of inexistant variable."); return } var i = this.termsByVarIndex[r]; if (i === void 0) this.addTerm(t, e); else if (t !== i.coefficient) { var n = t - i.coefficient; this.isUpperBound === !0 && (n = -n), i.coefficient = t, this.model.updateConstraintCoefficient(this, e, n) } return this }; tt.prototype.relax = function (t, e) { this.relaxation = tr(this.model, t, e), this._relax(this.relaxation) }; tt.prototype._relax = function (t) { t !== null && (this.isUpperBound ? this.setVariableCoefficient(-1, t) : this.setVariableCoefficient(1, t)) }; function it(t, e) { this.upperBound = t, this.lowerBound = e, this.model = t.model, this.rhs = t.rhs, this.relaxation = null } it.prototype.isEquality = !0; it.prototype.addTerm = function (t, e) { return this.upperBound.addTerm(t, e), this.lowerBound.addTerm(t, e), this }; it.prototype.removeTerm = function (t) { return this.upperBound.removeTerm(t), this.lowerBound.removeTerm(t), this }; it.prototype.setRightHandSide = function (t) { this.upperBound.setRightHandSide(t), this.lowerBound.setRightHandSide(t), this.rhs = t }; it.prototype.relax = function (t, e) { this.relaxation = tr(this.model, t, e), this.upperBound.relaxation = this.relaxation, this.upperBound._relax(this.relaxation), this.lowerBound.relaxation = this.relaxation, this.lowerBound._relax(this.relaxation) }; er.exports = { Constraint: tt, Variable: Zt, IntegerVariable: Ke, SlackVariable: Yt, Equality: it, Term: Qe } }); var rr = A(() => { var Ct = J(), Xt = Ot().SlackVariable; Ct.prototype.addCutConstraints = function (t) { for (var e = t.length, r = this.height, i = r + e, n = r; n < i; n += 1)this.matrix[n] === void 0 && (this.matrix[n] = this.matrix[n - 1].slice()); this.height = i, this.nVars = this.width + this.height - 2; for (var s, o = this.width - 1, a = 0; a < e; a += 1) { var l = t[a], u = r + a, h = l.type === "min" ? -1 : 1, f = l.varIndex, d = this.rowByVarIndex[f], v = this.matrix[u]; if (d === -1) { for (v[this.rhsColumn] = h * l.value, s = 1; s <= o; s += 1)v[s] = 0; v[this.colByVarIndex[f]] = h } else { var g = this.matrix[d], c = g[this.rhsColumn]; for (v[this.rhsColumn] = h * (l.value - c), s = 1; s <= o; s += 1)v[s] = -h * g[s] } var I = this.getNewElementIndex(); this.varIndexByRow[u] = I, this.rowByVarIndex[I] = u, this.colByVarIndex[I] = -1, this.variablesPerIndex[I] = new Xt("s" + I, I), this.nVars += 1 } }; Ct.prototype._addLowerBoundMIRCut = function (t) { if (t === this.costRowIndex) return !1; var e = this.model, r = this.matrix, i = this.variablesPerIndex[this.varIndexByRow[t]]; if (!i.isInteger) return !1; var n = r[t][this.rhsColumn], s = n - Math.floor(n); if (s < this.precision || 1 - this.precision < s) return !1; var o = this.height; r[o] = r[o - 1].slice(), this.height += 1, this.nVars += 1; var a = this.getNewElementIndex(); this.varIndexByRow[o] = a, this.rowByVarIndex[a] = o, this.colByVarIndex[a] = -1, this.variablesPerIndex[a] = new Xt("s" + a, a), r[o][this.rhsColumn] = Math.floor(n); for (var l = 1; l < this.varIndexByCol.length; l += 1) { var u = this.variablesPerIndex[this.varIndexByCol[l]]; if (!u.isInteger) r[o][l] = Math.min(0, r[t][l] / (1 - s)); else { var h = r[t][l], f = Math.floor(h) + Math.max(0, h - Math.floor(h) - s) / (1 - s); r[o][l] = f } } for (var d = 0; d < this.width; d += 1)r[o][d] -= r[t][d]; return !0 }; Ct.prototype._addUpperBoundMIRCut = function (t) { if (t === this.costRowIndex) return !1; var e = this.model, r = this.matrix, i = this.variablesPerIndex[this.varIndexByRow[t]]; if (!i.isInteger) return !1; var n = r[t][this.rhsColumn], s = n - Math.floor(n); if (s < this.precision || 1 - this.precision < s) return !1; var o = this.height; r[o] = r[o - 1].slice(), this.height += 1, this.nVars += 1; var a = this.getNewElementIndex(); this.varIndexByRow[o] = a, this.rowByVarIndex[a] = o, this.colByVarIndex[a] = -1, this.variablesPerIndex[a] = new Xt("s" + a, a), r[o][this.rhsColumn] = -s; for (var l = 1; l < this.varIndexByCol.length; l += 1) { var u = this.variablesPerIndex[this.varIndexByCol[l]], h = r[t][l], f = h - Math.floor(h); u.isInteger ? f <= s ? r[o][l] = -f : r[o][l] = -(1 - f) * s / f : h >= 0 ? r[o][l] = -h : r[o][l] = h * s / (1 - s) } return !0 }; Ct.prototype.applyMIRCuts = function () { } }); var ir = A(() => { var Y = J(); Y.prototype._putInBase = function (t) { var e = this.rowByVarIndex[t]; if (e === -1) { for (var r = this.colByVarIndex[t], i = 1; i < this.height; i += 1) { var n = this.matrix[i][r]; if (n < -this.precision || this.precision < n) { e = i; break } } this.pivot(e, r) } return e }; Y.prototype._takeOutOfBase = function (t) { var e = this.colByVarIndex[t]; if (e === -1) { for (var r = this.rowByVarIndex[t], i = this.matrix[r], n = 1; n < this.height; n += 1) { var s = i[n]; if (s < -this.precision || this.precision < s) { e = n; break } } this.pivot(r, e) } return e }; Y.prototype.updateVariableValues = function () { for (var t = this.variables.length, e = Math.round(1 / this.precision), r = 0; r < t; r += 1) { var i = this.variables[r], n = i.index, s = this.rowByVarIndex[n]; if (s === -1) i.value = 0; else { var o = this.matrix[s][this.rhsColumn]; i.value = Math.round((o + Number.EPSILON) * e) / e } } }; Y.prototype.updateRightHandSide = function (t, e) { var r = this.height - 1, i = this.rowByVarIndex[t.index]; if (i === -1) { for (var n = this.colByVarIndex[t.index], s = 0; s <= r; s += 1) { var o = this.matrix[s]; o[this.rhsColumn] -= e * o[n] } var a = this.optionalObjectives.length; if (a > 0) for (var l = 0; l < a; l += 1) { var u = this.optionalObjectives[l].reducedCosts; u[this.rhsColumn] -= e * u[n] } } else this.matrix[i][this.rhsColumn] -= e }; Y.prototype.updateConstraintCoefficient = function (t, e, r) { if (t.index === e.index) throw new Error("[Tableau.updateConstraintCoefficient] constraint index should not be equal to variable index !"); var i = this._putInBase(t.index), n = this.colByVarIndex[e.index]; if (n === -1) for (var s = this.rowByVarIndex[e.index], o = 0; o < this.width; o += 1)this.matrix[i][o] += r * this.matrix[s][o]; else this.matrix[i][n] -= r }; Y.prototype.updateCost = function (t, e) { var r = t.index, i = this.width - 1, n = this.colByVarIndex[r]; if (n === -1) { var s = this.matrix[this.rowByVarIndex[r]], o; if (t.priority === 0) { var a = this.matrix[0]; for (o = 0; o <= i; o += 1)a[o] += e * s[o] } else { var l = this.objectivesByPriority[t.priority].reducedCosts; for (o = 0; o <= i; o += 1)l[o] += e * s[o] } } else this.matrix[0][n] -= e }; Y.prototype.addConstraint = function (t) { var e = t.isUpperBound ? 1 : -1, r = this.height, i = this.matrix[r]; i === void 0 && (i = this.matrix[0].slice(), this.matrix[r] = i); for (var n = this.width - 1, s = 0; s <= n; s += 1)i[s] = 0; i[this.rhsColumn] = e * t.rhs; for (var o = t.terms, a = o.length, l = 0; l < a; l += 1) { var u = o[l], h = u.coefficient, f = u.variable.index, d = this.rowByVarIndex[f]; if (d === -1) i[this.colByVarIndex[f]] += e * h; else { var v = this.matrix[d], g = v[this.rhsColumn]; for (s = 0; s <= n; s += 1)i[s] -= e * h * v[s] } } var c = t.index; this.varIndexByRow[r] = c, this.rowByVarIndex[c] = r, this.colByVarIndex[c] = -1, this.height += 1 }; Y.prototype.removeConstraint = function (t) { var e = t.index, r = this.height - 1, i = this._putInBase(e), n = this.matrix[r]; this.matrix[r] = this.matrix[i], this.matrix[i] = n, this.varIndexByRow[i] = this.varIndexByRow[r], this.varIndexByRow[r] = -1, this.rowByVarIndex[e] = -1, this.availableIndexes[this.availableIndexes.length] = e, t.slack.index = -1, this.height -= 1 }; Y.prototype.addVariable = function (t) { var e = this.height - 1, r = this.width, i = this.model.isMinimization === !0 ? -t.cost : t.cost, n = t.priority, s = this.optionalObjectives.length; if (s > 0) for (var o = 0; o < s; o += 1)this.optionalObjectives[o].reducedCosts[r] = 0; n === 0 ? this.matrix[0][r] = i : (this.setOptionalObjective(n, r, i), this.matrix[0][r] = 0); for (var a = 1; a <= e; a += 1)this.matrix[a][r] = 0; var l = t.index; this.varIndexByCol[r] = l, this.rowByVarIndex[l] = -1, this.colByVarIndex[l] = r, this.width += 1 }; Y.prototype.removeVariable = function (t) { var e = t.index, r = this._takeOutOfBase(e), i = this.width - 1; if (r !== i) { for (var n = this.height - 1, s = 0; s <= n; s += 1) { var o = this.matrix[s]; o[r] = o[i] } var a = this.optionalObjectives.length; if (a > 0) for (var l = 0; l < a; l += 1) { var u = this.optionalObjectives[l].reducedCosts; u[r] = u[i] } var h = this.varIndexByCol[i]; this.varIndexByCol[r] = h, this.colByVarIndex[h] = r } this.varIndexByCol[i] = -1, this.colByVarIndex[e] = -1, this.availableIndexes[this.availableIndexes.length] = e, t.index = -1, this.width -= 1 } }); var nr = A(() => { var Di = J(); Di.prototype.log = function (t, e) { console.log("****", t, "****"), console.log("Nb Variables", this.width - 1), console.log("Nb Constraints", this.height - 1), console.log("Basic Indexes", this.varIndexByRow), console.log("Non Basic Indexes", this.varIndexByCol), console.log("Rows", this.rowByVarIndex), console.log("Cols", this.colByVarIndex); var r = 5, i = "", n = [" "], s, o, a, l, u, h, f, d, v, g, c, I, y; for (o = 1; o < this.width; o += 1)h = this.varIndexByCol[o], u = this.variablesPerIndex[h], u === void 0 ? f = "c" + h : f = u.id, d = f.length, v = Math.abs(d - 5), g = " ", c = "	", d > 5 ? g += " " : c += "	", n[o] = g, i += c + f; console.log(i); var m, b = this.matrix[this.costRowIndex], _ = "	"; for (s = 1; s < this.width; s += 1)m = "	", _ += m, _ += n[s], _ += b[s].toFixed(r); for (m = "	", _ += m + n[0] + b[0].toFixed(r), console.log(_ + "	Z"), l = 1; l < this.height; l += 1) { for (I = this.matrix[l], y = "	", o = 1; o < this.width; o += 1)m = "	", y += m + n[o] + I[o].toFixed(r); m = "	", y += m + n[0] + I[0].toFixed(r), h = this.varIndexByRow[l], u = this.variablesPerIndex[h], u === void 0 ? f = "c" + h : f = u.id, console.log(y + "	" + f) } console.log(""); var w = this.optionalObjectives.length; if (w > 0) { console.log("    Optional objectives:"); for (var x = 0; x < w; x += 1) { var z = this.optionalObjectives[x].reducedCosts, M = ""; for (s = 1; s < this.width; s += 1)m = z[s] < 0 ? "" : " ", M += m, M += n[s], M += z[s].toFixed(r); m = z[0] < 0 ? "" : " ", M += m + n[0] + z[0].toFixed(r), console.log(M + " z" + x) } } return console.log("Feasible?", this.feasible), console.log("evaluation", this.evaluation), this } }); var sr = A(() => { var Bt = J(); Bt.prototype.copy = function () { var t = new Bt(this.precision); t.width = this.width, t.height = this.height, t.nVars = this.nVars, t.model = this.model, t.variables = this.variables, t.variablesPerIndex = this.variablesPerIndex, t.unrestrictedVars = this.unrestrictedVars, t.lastElementIndex = this.lastElementIndex, t.varIndexByRow = this.varIndexByRow.slice(), t.varIndexByCol = this.varIndexByCol.slice(), t.rowByVarIndex = this.rowByVarIndex.slice(), t.colByVarIndex = this.colByVarIndex.slice(), t.availableIndexes = this.availableIndexes.slice(); for (var e = [], r = 0; r < this.optionalObjectives.length; r++)e[r] = this.optionalObjectives[r].copy(); t.optionalObjectives = e; for (var i = this.matrix, n = new Array(this.height), s = 0; s < this.height; s++)n[s] = i[s].slice(); return t.matrix = n, t }; Bt.prototype.save = function () { this.savedState = this.copy() }; Bt.prototype.restore = function () { if (this.savedState !== null) { var t = this.savedState, e = t.matrix; this.nVars = t.nVars, this.model = t.model, this.variables = t.variables, this.variablesPerIndex = t.variablesPerIndex, this.unrestrictedVars = t.unrestrictedVars, this.lastElementIndex = t.lastElementIndex, this.width = t.width, this.height = t.height; var r, i; for (r = 0; r < this.height; r += 1) { var n = e[r], s = this.matrix[r]; for (i = 0; i < this.width; i += 1)s[i] = n[i] } var o = t.varIndexByRow; for (i = 0; i < this.height; i += 1)this.varIndexByRow[i] = o[i]; for (; this.varIndexByRow.length > this.height;)this.varIndexByRow.pop(); var a = t.varIndexByCol; for (r = 0; r < this.width; r += 1)this.varIndexByCol[r] = a[r]; for (; this.varIndexByCol.length > this.width;)this.varIndexByCol.pop(); for (var l = t.rowByVarIndex, u = t.colByVarIndex, h = 0; h < this.nVars; h += 1)this.rowByVarIndex[h] = l[h], this.colByVarIndex[h] = u[h]; if (t.optionalObjectives.length > 0 && this.optionalObjectives.length > 0) { this.optionalObjectives = [], this.optionalObjectivePerPriority = {}; for (var f = 0; f < t.optionalObjectives.length; f++) { var d = t.optionalObjectives[f].copy(); this.optionalObjectives[f] = d, this.optionalObjectivePerPriority[d.priority] = d } } } } }); var lr = A(() => { var or = J(); function ar(t, e) { this.index = t, this.value = e } or.prototype.getMostFractionalVar = function () { for (var t = 0, e = null, r = null, i = .5, n = this.model.integerVariables, s = n.length, o = 0; o < s; o++) { var a = n[o].index, l = this.rowByVarIndex[a]; if (l !== -1) { var u = this.matrix[l][this.rhsColumn], h = Math.abs(u - Math.round(u)); t < h && (t = h, e = a, r = u) } } return new ar(e, r) }; or.prototype.getFractionalVarWithLowestCost = function () { for (var t = 1 / 0, e = null, r = null, i = this.model.integerVariables, n = i.length, s = 0; s < n; s++) { var o = i[s], a = o.index, l = this.rowByVarIndex[a]; if (l !== -1) { var u = this.matrix[l][this.rhsColumn]; if (Math.abs(u - Math.round(u)) > this.precision) { var h = o.cost; t > h && (t = h, e = a, r = u) } } } return new ar(e, r) } }); var hr = A(() => { var Kt = J(); Kt.prototype.countIntegerValues = function () { for (var t = 0, e = 1; e < this.height; e += 1)if (this.variablesPerIndex[this.varIndexByRow[e]].isInteger) { var r = this.matrix[e][this.rhsColumn]; r = r - Math.floor(r), r < this.precision && -r < this.precision && (t += 1) } return t }; Kt.prototype.isIntegral = function () { for (var t = this.model.integerVariables, e = t.length, r = 0; r < e; r++) { var i = this.rowByVarIndex[t[r].index]; if (i !== -1) { var n = this.matrix[i][this.rhsColumn]; if (Math.abs(n - Math.round(n)) > this.precision) return !1 } } return !0 }; Kt.prototype.computeFractionalVolume = function (t) { for (var e = -1, r = 1; r < this.height; r += 1)if (this.variablesPerIndex[this.varIndexByRow[r]].isInteger) { var i = this.matrix[r][this.rhsColumn]; i = Math.abs(i); var n = Math.min(i - Math.floor(i), Math.floor(i + 1)); if (n < this.precision) { if (!t) return 0 } else e === -1 ? e = i : e *= i } return e === -1 ? 0 : e } }); var ur = A((Hn, fr) => { Xe(); rr(); ir(); nr(); sr(); lr(); hr(); fr.exports = J() }); var te = A(() => { var cr = J(); function dr(t, e, r) { this.type = t, this.varIndex = e, this.value = r } function Qt(t, e) { this.relaxedEvaluation = t, this.cuts = e } function Fi(t, e) { return e.relaxedEvaluation - t.relaxedEvaluation } cr.prototype.applyCuts = function (t) { if (this.restore(), this.addCutConstraints(t), this.simplex(), this.model.useMIRCuts) for (var e = !0; e;) { var r = this.computeFractionalVolume(!0); this.applyMIRCuts(), this.simplex(); var i = this.computeFractionalVolume(!0); i >= .9 * r && (e = !1) } }; cr.prototype.branchAndCut = function () { var t = [], e = 0, r = this.model.tolerance, i = !0, n = 1e99; this.model.timeout && (n = Date.now() + this.model.timeout); for (var s = 1 / 0, o = null, a = [], l = 0; l < this.optionalObjectives.length; l += 1)a.push(1 / 0); var u = new Qt(-1 / 0, []), h; for (t.push(u); t.length > 0 && i === !0 && Date.now() < n;)if (this.model.isMinimization ? h = this.bestPossibleEval * (1 + r) : h = this.bestPossibleEval * (1 - r), r > 0 && s < h && (i = !1), u = t.pop(), !(u.relaxedEvaluation > s)) { var f = u.cuts; if (this.applyCuts(f), e++, this.feasible !== !1) { var d = this.evaluation; if (!(d > s)) { if (d === s) { for (var v = !0, g = 0; g < this.optionalObjectives.length && !(this.optionalObjectives[g].reducedCosts[0] > a[g]); g += 1)if (this.optionalObjectives[g].reducedCosts[0] < a[g]) { v = !1; break } if (v) continue } if (this.isIntegral() === !0) { if (this.__isIntegral = !0, e === 1) { this.branchAndCutIterations = e; return } o = u, s = d; for (var c = 0; c < this.optionalObjectives.length; c += 1)a[c] = this.optionalObjectives[c].reducedCosts[0] } else { e === 1 && this.save(); for (var I = this.getMostFractionalVar(), y = I.index, m = [], b = [], _ = f.length, w = 0; w < _; w += 1) { var x = f[w]; x.varIndex === y ? x.type === "min" ? b.push(x) : m.push(x) : (m.push(x), b.push(x)) } var z = Math.ceil(I.value), M = Math.floor(I.value), C = new dr("min", y, z); m.push(C); var O = new dr("max", y, M); b.push(O), t.push(new Qt(d, m)), t.push(new Qt(d, b)), t.sort(Fi) } } } } o !== null && this.applyCuts(o.cuts), this.branchAndCutIterations = e } }); var gr = A((Kn, vr) => { var Li = J(), Yn = te(), ft = Ot(), zt = ft.Constraint, pr = ft.Equality, Ui = ft.Variable, Gi = ft.IntegerVariable, Xn = ft.Term; function k(t, e) { this.tableau = new Li(t), this.name = e, this.variables = [], this.integerVariables = [], this.unrestrictedVariables = {}, this.constraints = [], this.nConstraints = 0, this.nVariables = 0, this.isMinimization = !0, this.tableauInitialized = !1, this.relaxationIndex = 1, this.useMIRCuts = !1, this.checkForCycles = !0, this.messages = [] } vr.exports = k; k.prototype.minimize = function () { return this.isMinimization = !0, this }; k.prototype.maximize = function () { return this.isMinimization = !1, this }; k.prototype._getNewElementIndex = function () { if (this.availableIndexes.length > 0) return this.availableIndexes.pop(); var t = this.lastElementIndex; return this.lastElementIndex += 1, t }; k.prototype._addConstraint = function (t) { var e = t.slack; this.tableau.variablesPerIndex[e.index] = e, this.constraints.push(t), this.nConstraints += 1, this.tableauInitialized === !0 && this.tableau.addConstraint(t) }; k.prototype.smallerThan = function (t) { var e = new zt(t, !0, this.tableau.getNewElementIndex(), this); return this._addConstraint(e), e }; k.prototype.greaterThan = function (t) { var e = new zt(t, !1, this.tableau.getNewElementIndex(), this); return this._addConstraint(e), e }; k.prototype.equal = function (t) { var e = new zt(t, !0, this.tableau.getNewElementIndex(), this); this._addConstraint(e); var r = new zt(t, !1, this.tableau.getNewElementIndex(), this); return this._addConstraint(r), new pr(e, r) }; k.prototype.addVariable = function (t, e, r, i, n) { if (typeof n == "string") switch (n) { case "required": n = 0; break; case "strong": n = 1; break; case "medium": n = 2; break; case "weak": n = 3; break; default: n = 0; break }var s = this.tableau.getNewElementIndex(); e == null && (e = "v" + s), t == null && (t = 0), n == null && (n = 0); var o; return r ? (o = new Gi(e, t, s, n), this.integerVariables.push(o)) : o = new Ui(e, t, s, n), this.variables.push(o), this.tableau.variablesPerIndex[s] = o, i && (this.unrestrictedVariables[s] = !0), this.nVariables += 1, this.tableauInitialized === !0 && this.tableau.addVariable(o), o }; k.prototype._removeConstraint = function (t) { var e = this.constraints.indexOf(t); if (e === -1) { console.warn("[Model.removeConstraint] Constraint not present in model"); return } this.constraints.splice(e, 1), this.nConstraints -= 1, this.tableauInitialized === !0 && this.tableau.removeConstraint(t), t.relaxation && this.removeVariable(t.relaxation) }; k.prototype.removeConstraint = function (t) { return t.isEquality ? (this._removeConstraint(t.upperBound), this._removeConstraint(t.lowerBound)) : this._removeConstraint(t), this }; k.prototype.removeVariable = function (t) { var e = this.variables.indexOf(t); if (e === -1) { console.warn("[Model.removeVariable] Variable not present in model"); return } return this.variables.splice(e, 1), this.tableauInitialized === !0 && this.tableau.removeVariable(t), this }; k.prototype.updateRightHandSide = function (t, e) { return this.tableauInitialized === !0 && this.tableau.updateRightHandSide(t, e), this }; k.prototype.updateConstraintCoefficient = function (t, e, r) { return this.tableauInitialized === !0 && this.tableau.updateConstraintCoefficient(t, e, r), this }; k.prototype.setCost = function (t, e) { var r = t - e.cost; return this.isMinimization === !1 && (r = -r), e.cost = t, this.tableau.updateCost(e, r), this }; k.prototype.loadJson = function (t) { this.isMinimization = t.opType !== "max"; for (var e = t.variables, r = t.constraints, i = {}, n = {}, s = Object.keys(r), o = s.length, a = 0; a < o; a += 1) { var l = s[a], u = r[l], h = u.equal, f = u.weight, d = u.priority, v = f !== void 0 || d !== void 0, g, c; if (h === void 0) { var I = u.min; I !== void 0 && (g = this.greaterThan(I), i[l] = g, v && g.relax(f, d)); var y = u.max; y !== void 0 && (c = this.smallerThan(y), n[l] = c, v && c.relax(f, d)) } else { g = this.greaterThan(h), i[l] = g, c = this.smallerThan(h), n[l] = c; var m = new pr(g, c); v && m.relax(f, d) } } var b = Object.keys(e), _ = b.length; this.tolerance = t.tolerance || 0, t.timeout && (this.timeout = t.timeout), t.options && (t.options.timeout && (this.timeout = t.options.timeout), this.tolerance === 0 && (this.tolerance = t.options.tolerance || 0), t.options.useMIRCuts && (this.useMIRCuts = t.options.useMIRCuts), typeof t.options.exitOnCycles == "undefined" ? this.checkForCycles = !0 : this.checkForCycles = t.options.exitOnCycles); for (var w = t.ints || {}, x = t.binaries || {}, z = t.unrestricted || {}, M = t.optimize, C = 0; C < _; C += 1) { var O = b[C], E = e[O], V = E[M] || 0, S = !!x[O], N = !!w[O] || S, R = !!z[O], q = this.addVariable(V, O, N, R); S && this.smallerThan(1).addTerm(1, q); var G = Object.keys(E); for (a = 0; a < G.length; a += 1) { var L = G[a]; if (L !== M) { var H = E[L], $ = i[L]; $ !== void 0 && $.addTerm(H, q); var Q = n[L]; Q !== void 0 && Q.addTerm(H, q) } } } return this }; k.prototype.getNumberOfIntegerVariables = function () { return this.integerVariables.length }; k.prototype.solve = function () { return this.tableauInitialized === !1 && (this.tableau.setModel(this), this.tableauInitialized = !0), this.tableau.solve() }; k.prototype.isFeasible = function () { return this.tableau.feasible }; k.prototype.save = function () { return this.tableau.save() }; k.prototype.restore = function () { return this.tableau.restore() }; k.prototype.activateMIRCuts = function (t) { this.useMIRCuts = t }; k.prototype.debug = function (t) { this.checkForCycles = t }; k.prototype.log = function (t) { return this.tableau.log(t) } }); var yr = A(mr => { mr.CleanObjectiveAttributes = function (t) { var e, r, i; if (typeof t.optimize == "string") if (t.constraints[t.optimize]) { e = Math.random(); for (r in t.variables) t.variables[r][t.optimize] && (t.variables[r][e] = t.variables[r][t.optimize]); return t.constraints[e] = t.constraints[t.optimize], delete t.constraints[t.optimize], t } else return t; else { for (i in t.optimize) if (t.constraints[i]) if (t.constraints[i] === "equal") delete t.optimize[i]; else { e = Math.random(); for (r in t.variables) t.variables[r][i] && (t.variables[r][e] = t.variables[r][i]); t.constraints[e] = t.constraints[i], delete t.constraints[i] } return t } } }); var Et = A((ts, br) => {
                function Wi(t) {
                    var e = { is_blank: /^\W{0,}$/, is_objective: /(max|min)(imize){0,}\:/i, is_int: /^(?!\/\*)\W{0,}int/i, is_bin: /^(?!\/\*)\W{0,}bin/i, is_constraint: /(\>|\<){0,}\=/i, is_unrestricted: /^\S{0,}unrestricted/i, parse_lhs: /(\-|\+){0,1}\s{0,1}\d{0,}\.{0,}\d{0,}\s{0,}[A-Za-z]\S{0,}/gi, parse_rhs: /(\-|\+){0,1}\d{1,}\.{0,}\d{0,}\W{0,}\;{0,1}$/i, parse_dir: /(\>|\<){0,}\=/gi, parse_int: /[^\s|^\,]+/gi, parse_bin: /[^\s|^\,]+/gi, get_num: /(\-|\+){0,1}(\W|^)\d+\.{0,1}\d{0,}/g, get_word: /[A-Za-z].*/ }, r = { opType: "", optimize: "_obj", constraints: {}, variables: {} }, i = { ">=": "min", "<=": "max", "=": "equal" }, n = "", s = 0, o = null, a = "", l = "", u = "", h = 0; typeof t == "string" && (t = t.split(`
    `)); for (var f = 0; f < t.length; f++)if (u = "__" + f, n = t[f], s = 0, o = null, e.is_objective.test(n)) r.opType = n.match(/(max|min)/gi)[0], o = n.match(e.parse_lhs).map(function (g) { return g.replace(/\s+/, "") }).slice(1), o.forEach(function (g) { a = g.match(e.get_num), a === null ? g.substr(0, 1) === "-" ? a = -1 : a = 1 : a = a[0], a = parseFloat(a), l = g.match(e.get_word)[0].replace(/\;$/, ""), r.variables[l] = r.variables[l] || {}, r.variables[l]._obj = a }); else if (e.is_int.test(n)) o = n.match(e.parse_int).slice(1), r.ints = r.ints || {}, o.forEach(function (g) { g = g.replace(";", ""), r.ints[g] = 1 }); else if (e.is_bin.test(n)) o = n.match(e.parse_bin).slice(1), r.binaries = r.binaries || {}, o.forEach(function (g) { g = g.replace(";", ""), r.binaries[g] = 1 }); else if (e.is_constraint.test(n)) { var d = n.indexOf(":"), v = d === -1 ? n : n.slice(d + 1); o = v.match(e.parse_lhs).map(function (g) { return g.replace(/\s+/, "") }), o.forEach(function (g) { a = g.match(e.get_num), a === null ? g.substr(0, 1) === "-" ? a = -1 : a = 1 : a = a[0], a = parseFloat(a), l = g.match(e.get_word)[0], r.variables[l] = r.variables[l] || {}, r.variables[l][u] = a }), h = parseFloat(n.match(e.parse_rhs)[0]), n = i[n.match(e.parse_dir)[0]], r.constraints[u] = r.constraints[u] || {}, r.constraints[u][n] = h } else e.is_unrestricted.test(n) && (o = n.match(e.parse_int).slice(1), r.unrestricted = r.unrestricted || {}, o.forEach(function (g) { g = g.replace(";", ""), r.unrestricted[g] = 1 })); return r
                } function Hi(t) {
                    if (!t) throw new Error("Solver requires a model to operate on"); var e = "", r = [], i = 1, n = { max: "<=", min: ">=", equal: "=" }, s = new RegExp("[^A-Za-z0-9_[{}/.&#$%~'@^]", "gi"); if (t.opType) { e += t.opType + ":"; for (var o in t.variables) t.variables[o][o] = t.variables[o][o] ? t.variables[o][o] : 1, t.variables[o][t.optimize] && (e += " " + t.variables[o][t.optimize] + " " + o.replace(s, "_")) } else e += "max:"; e += `;
    
    `; for (var a in t.constraints) for (var l in t.constraints[a]) if (typeof n[l] != "undefined") {
                        for (var u in t.variables) typeof t.variables[u][a] != "undefined" && (e += " " + t.variables[u][a] + " " + u.replace(s, "_")); e += " " + n[l] + " " + t.constraints[a][l], e += `;
    `} if (t.ints) {
                        e += `
    
    `; for (var h in t.ints) e += "int " + h.replace(s, "_") + `;
    `} if (t.unrestricted) {
                        e += `
    
    `; for (var f in t.unrestricted) e += "unrestricted " + f.replace(s, "_") + `;
    `} return e
                } br.exports = function (t) { return t.length ? Wi(t) : Hi(t) }
            }); var wr = A(ee => {
                ee.reformat = Et(); function xr(t) {
                    return t = t.replace("\\r\\n", `\r
    `), t = t.split(`\r
    `), t = t.filter(function (e) { var r; return r = new RegExp(" 0$", "gi"), !(r.test(e) === !0 || (r = new RegExp("\\d$", "gi"), r.test(e) === !1)) }).map(function (e) { return e.split(/\:{0,1} +(?=\d)/) }).reduce(function (e, r, i) { return e[r[0]] = r[1], e }, {}), t
                } ee.solve = function (t) { return new Promise(function (e, r) { typeof window != "undefined" && r("Function Not Available in Browser"); var i = Et()(t); t.external || r("Data for this function must be contained in the 'external' attribute. Not seeing anything there."), t.external.binPath || r("No Executable | Binary path provided in arguments as 'binPath'"), t.external.args || r("No arguments array for cli | bash provided on 'args' attribute"), t.external.tempName || r("No 'tempName' given. This is necessary to produce a staging file for the solver to operate on"); var n = pe("fs"); n.writeFile(t.external.tempName, i, function (s, o) { if (s) r(s); else { var a = pe("child_process").execFile; t.external.args.push(t.external.tempName), a(t.external.binPath, t.external.args, function (l, u) { if (l) if (l.code === 1) e(xr(u)); else { var h = { "-2": "Out of Memory", "1": "SUBOPTIMAL", "2": "INFEASIBLE", "3": "UNBOUNDED", "4": "DEGENERATE", "5": "NUMFAILURE", "6": "USER-ABORT", "7": "TIMEOUT", "9": "PRESOLVED", "25": "ACCURACY ERROR", "255": "FILE-ERROR" }, f = { code: l.code, meaning: h[l.code], data: u }; r(f) } else e(xr(u)) }) } }) }) }
            }); var Ir = A((rs, _r) => { _r.exports = { lpsolve: wr() } }); var re = A((is, jr) => { jr.exports = function (t, e) { var r = e.optimize, i = JSON.parse(JSON.stringify(e.optimize)), n = Object.keys(e.optimize), s, o = 0, a = {}, l = "", u = {}, h = [], f, d, v, g, c; for (delete e.optimize, f = 0; f < n.length; f++)i[n[f]] = 0; for (f = 0; f < n.length; f++) { e.optimize = n[f], e.opType = r[n[f]], s = t.Solve(e, void 0, void 0, !0); for (g in n) if (!e.variables[n[g]]) { s[n[g]] = s[n[g]] ? s[n[g]] : 0; for (v in e.variables) e.variables[v][n[g]] && s[v] && (s[n[g]] += s[v] * e.variables[v][n[g]]) } for (l = "base", d = 0; d < n.length; d++)s[n[d]] ? l += "-" + (s[n[d]] * 1e3 | 0) / 1e3 : l += "-0"; if (!a[l]) { for (a[l] = 1, o++, d = 0; d < n.length; d++)s[n[d]] && (i[n[d]] += s[n[d]]); delete s.feasible, delete s.result, h.push(s) } } for (f = 0; f < n.length; f++)e.constraints[n[f]] = { equal: i[n[f]] / o }; e.optimize = "cheater-" + Math.random(), e.opType = "max"; for (f in e.variables) e.variables[f].cheater = 1; for (f in h) for (v in h[f]) u[v] = u[v] || { min: 1e99, max: -1e99 }; for (f in u) for (v in h) h[v][f] ? (h[v][f] > u[f].max && (u[f].max = h[v][f]), h[v][f] < u[f].min && (u[f].min = h[v][f])) : (h[v][f] = 0, u[f].min = 0); return s = t.Solve(e, void 0, void 0, !0), { midpoint: s, vertices: h, ranges: u } } }); var At = A((ns, Or) => { var Ji = ur(), ie = gr(), Zi = te(), Vt = Ot(), Mr = yr(), Yi = Vt.Constraint, Xi = Vt.Variable, Ki = Vt.Numeral, Qi = Vt.Term, St = Ir(), qt = function () { "use strict"; this.Model = ie, this.branchAndCut = Zi, this.Constraint = Yi, this.Variable = Xi, this.Numeral = Ki, this.Term = Qi, this.Tableau = Ji, this.lastSolvedModel = null, this.External = St, this.Solve = function (t, e, r, i) { if (i) for (var n in Mr) t = Mr[n](t); if (!t) throw new Error("Solver requires a model to operate on"); if (typeof t.optimize == "object" && Object.keys(t.optimize > 1)) return re()(this, t); if (t.external) { var s = Object.keys(St); if (s = JSON.stringify(s), !t.external.solver) throw new Error("The model you provided has an 'external' object that doesn't have a solver attribute. Use one of the following:" + s); if (!St[t.external.solver]) throw new Error("No support (yet) for " + t.external.solver + ". Please use one of these instead:" + s); return St[t.external.solver].solve(t) } else { t instanceof ie || (t = new ie(e).loadJson(t)); var o = t.solve(); if (this.lastSolvedModel = t, o.solutionSet = o.generateSolutionSet(), r) return o; var a = {}; return a.feasible = o.feasible, a.result = o.evaluation, a.bounded = o.bounded, o._tableau.__isIntegral && (a.isIntegral = !0), Object.keys(o.solutionSet).forEach(function (l) { o.solutionSet[l] !== 0 && (a[l] = o.solutionSet[l]) }), a } }, this.ReformatLP = Et(), this.MultiObjective = function (t) { return re()(this, t) } }; typeof define == "function" ? define([], function () { return new qt }) : typeof window == "object" ? window.solver = new qt : typeof self == "object" && (self.solver = new qt); Or.exports = new qt }); var Lr = A((Ps, Fr) => { "use strict"; var nn = function (t, e) { return t < e }; function D(t) { if (!(this instanceof D)) return new D(t); this.array = [], this.size = 0, this.compare = t || nn } D.prototype.clone = function () { var t = new D(this.compare); return t.size = this.size, t.array = this.array.slice(0, this.size), t }; D.prototype.add = function (t) { var e = this.size; this.array[this.size] = t, this.size += 1; for (var r, i; e > 0 && (r = e - 1 >> 1, i = this.array[r], !!this.compare(t, i));)this.array[e] = i, e = r; this.array[e] = t }; D.prototype.heapify = function (t) { this.array = t, this.size = t.length; var e; for (e = this.size >> 1; e >= 0; e--)this._percolateDown(e) }; D.prototype._percolateUp = function (t, e) { for (var r = this.array[t], i, n; t > 0 && (i = t - 1 >> 1, n = this.array[i], !(!e && !this.compare(r, n)));)this.array[t] = n, t = i; this.array[t] = r }; D.prototype._percolateDown = function (t) { for (var e = this.size, r = this.size >>> 1, i = this.array[t], n, s, o; t < r && (n = (t << 1) + 1, s = n + 1, o = this.array[n], s < e && this.compare(this.array[s], o) && (n = s, o = this.array[s]), !!this.compare(o, i));)this.array[t] = o, t = n; this.array[t] = i }; D.prototype._removeAt = function (t) { if (!(t > this.size - 1 || t < 0)) return this._percolateUp(t, !0), this.poll() }; D.prototype.remove = function (t) { for (var e = 0; e < this.size; e++)if (!this.compare(this.array[e], t) && !this.compare(t, this.array[e])) return this._removeAt(e), !0; return !1 }; D.prototype.removeOne = function (t) { if (typeof t == "function") { for (var e = 0; e < this.size; e++)if (t(this.array[e])) return this._removeAt(e) } }; D.prototype.removeMany = function (t, e) { if (typeof t != "function" || this.size < 1) return []; e = e ? Math.min(e, this.size) : this.size; for (var r = 0, i = new Array(e), n = 0, s = new Array(this.size); r < e && !this.isEmpty();) { var o = this.poll(); t(o) ? i[r++] = o : s[n++] = o } i.length = r; for (var a = 0; a < n;)this.add(s[a++]); return i }; D.prototype.peek = function () { if (this.size != 0) return this.array[0] }; D.prototype.poll = function () { if (this.size != 0) { var t = this.array[0]; return this.size > 1 ? (this.array[0] = this.array[--this.size], this._percolateDown(0)) : this.size -= 1, t } }; D.prototype.replaceTop = function (t) { if (this.size != 0) { var e = this.array[0]; return this.array[0] = t, this._percolateDown(0), e } }; D.prototype.trim = function () { this.array = this.array.slice(0, this.size) }; D.prototype.isEmpty = function () { return this.size === 0 }; D.prototype.forEach = function (t) { if (!(this.isEmpty() || typeof t != "function")) for (var e = 0, r = this.clone(); !r.isEmpty();)t(r.poll(), e++) }; D.prototype.kSmallest = function (t) { if (this.size == 0) return []; t = Math.min(this.size, t); var e = new D(this.compare); let r = Math.min((t > 0 ? Math.pow(2, t - 1) : 0) + 1, this.size); e.size = r, e.array = this.array.slice(0, r); for (var i = new Array(t), n = 0; n < t; n++)i[n] = e.poll(); return i }; Fr.exports = D }); var on = {}; di(on, { aggMeanFactory: () => Sr, aggMedianFactory: () => le, coordCenter: () => Zr, coordGreedy: () => Yr, coordQuad: () => jt, coordTopological: () => Xr, dagConnect: () => xe, dagHierarchy: () => mt, dagStratify: () => Me, decrossOpt: () => Jr, decrossTwoLayer: () => $t, layeringCoffmanGraham: () => Wr, layeringLongestPath: () => Dr, layeringSimplex: () => Nt, layeringTopological: () => Rr, sugiyama: () => Pr, twolayerAgg: () => Rt, twolayerOpt: () => Qr, zherebko: () => ii }); var nt = rt(ge()), me = class { constructor(e) { this.base = e } [Symbol.iterator]() { return this.base[Symbol.iterator]() } *gconcat(...e) { yield* this; for (let r of e) yield* r } concat(...e) { return T(this.gconcat(...e)) } *gentries() { let e = 0; for (let r of this) yield [e++, r] } entries() { return T(this.gentries()) } every(e) { return !this.some((r, i) => !e(r, i)) } fill(e) { return this.map(() => e) } *gfilter(e) { for (let [r, i] of this.gentries()) e(i, r) && (yield i) } filter(e) { return T(this.gfilter(e)) } find(e) { return this.filter(e).shift() } findIndex(e) { for (let [r, i] of this.gentries()) if (e(i, r)) return r; return -1 } *gflatMap(e) { for (let [r, i] of this.gentries()) yield* e(i, r) } flatMap(e) { return T(this.gflatMap(e)) } forEach(e) { for (let [r, i] of this.gentries()) e(i, r) } includes(e, r = 0) { return this.indexOf(e, r) >= 0 } indexOf(e, r = 0) { if (r < 0) { let i = 0, n = new nt.default; for (let o of this) i >= -r && n.shift(), n.push(o), i++; let s = n.toArray().indexOf(e); return s === -1 ? -1 : s + i + r } else { for (let [i, n] of this.gentries()) if (i >= r && n === e) return i; return -1 } } join(e = ",") { return [...this].join(e) } *gkeys() { let e = 0; for (let r of this) yield e++ } keys() { return T(this.gkeys()) } lastIndexOf(e, r = 1 / 0) { let i = -1; if (r < 0) { let n = new nt.default; for (let [s, o] of this.gentries()) { o === e && n.push(s); let a = n.peekFront(); a !== void 0 && a <= s + r + 1 && (n.shift(), i = a) } } else for (let [n, s] of this.gentries()) n <= r && s === e && (i = n); return i } get length() { return this.reduce(e => e + 1, 0) } *gmap(e) { for (let [r, i] of this.gentries()) yield e(i, r) } map(e) { return T(this.gmap(e)) } pop() { let e; for (e of this); return e } push(...e) { return this.concat(e) } reduce(e, r) { if (r === void 0) { let i = e, n = !0, s; for (let [o, a] of this.gentries()) n ? (s = a, n = !1) : s = i(s, a, o); if (n) throw new TypeError("Reduce of empty iterable with no initial value"); return s } else { let i = e, n = r; for (let [s, o] of this.gentries()) n = i(n, o, s); return n } } reverse() { return T([...this].reverse()) } shift() { for (let e of this) return e } *gslice(e, r) { for (let [i, n] of this.gentries()) { if (i >= r) break; i >= e && (yield n) } } *gnegslice(e, r) { let i = new nt.default, n = e - r; for (let [s, o] of this.gentries()) s >= n ? (yield i.shift(), i.push(o)) : s >= e && i.push(o) } slice(e = 0, r = 1 / 0) { if (e < 0) { let i = 0, n = new nt.default; for (let a of this) i >= -e && n.shift(), n.push(a), i++; let s = n.toArray(), o = r - i - e; return r < 0 ? T(s.slice(0, r)) : o > 0 ? T(s.slice(0, o)) : T() } else return r < 0 ? T(this.gnegslice(e, r)) : T(this.gslice(e, r)) } some(e) { for (let [r, i] of this.gentries()) if (e(i, r)) return !0; return !1 } sort(e) { return T([...this].sort(e)) } *gsplice(e, r, ...i) { for (let [n, s] of this.gentries()) n === e && (yield* i), (n < e || n >= e + r) && (yield s) } splice(e, r = 0, ...i) { return T(this.gsplice(e, r, ...i)) } unshift(...e) { return T(e).concat(this) } values() { return this } }; function T(t = []) { return new me(t) } function j(t) { if (t !== void 0) return t; throw new Error("internal error: got unexpected undefined value") } function F(t) { if (!t) throw new Error("internal error: failed assert") } function ye(t, e) { e.size < t.size && ([e, t] = [t, e]); for (let r of t) if (e.has(r)) return !0; return !1 } function vi() { let t = new WeakSet; return (e, r) => { if (typeof r == "object" && r !== null) { if (t.has(r)) return "[circular]"; t.add(r) } return r } } function U(t, ...e) { let [r, ...i] = t; return [r].concat(...i.map((n, s) => [JSON.stringify(e[s], vi()), n])).join("") } function* W(t) { let [e, ...r] = t; for (let i of r) yield [e, i], e = i } function* st(t, ...e) { let r = new Set, i; for (; i = e.pop();)r.has(i) || (yield i, r.add(i), e.push(...t(i))) } var ot = window && window.__rest || function (t, e) { var r = {}; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]); if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]); return r }, pt = class { constructor(e, r, i = []) { this.child = e, this.data = r, this.points = i } }, be = class { constructor(e, r, i, n) { this.source = e, this.target = r, this.data = i, this.points = n } }, K = class { constructor(e) { e && (this.proots = e) } [Symbol.iterator]() { return this.idescendants()[Symbol.iterator]() } iroots() { return T(j(this.proots)) } roots() { return [...this.iroots()] } *gdepth() { yield* st(r => r.ichildren(), ...this.iroots()) } *gbreadth() { let e = new Set, r = this.roots(), i = []; do { i = r.reverse(), r = []; let n; for (; n = i.pop();)e.has(n) || (e.add(n), yield n, r.push(...n.ichildren())) } while (r.length) } *gbefore() { let e = new Map; for (let n of this) for (let s of n.ichildren()) e.set(s, (e.get(s) || 0) + 1); let r = this.roots(), i; for (; i = r.pop();) { yield i; for (let n of i.ichildren()) { let s = j(e.get(n)); s > 1 ? e.set(n, s - 1) : r.push(n) } } } *gafter() { let e = this.roots(), r = new Set, i; for (; i = e.pop();)r.has(i) || (i.ichildren().every(n => r.has(n)) ? (r.add(i), yield i) : (e.push(i), e.push(...i.ichildren()))) } idescendants(e = "depth") { if (e === "depth") return T(this.gdepth()); if (e === "breadth") return T(this.gbreadth()); if (e === "before") return T(this.gbefore()); if (e === "after") return T(this.gafter()); throw new Error(`unknown iteration style: ${e}`) } descendants(e = "depth") { return [...this.idescendants(e)] } ilinks() { return this.idescendants().flatMap(e => e.ichildLinks()) } links() { return [...this.ilinks()] } size() { return this.idescendants().reduce(e => e + 1, 0) } sum(e) { let r = new Map; for (let [i, n] of this.idescendants("after").entries()) { let s = e(n, i), o = new Map; o.set(n, s); for (let a of n.ichildren()) { let l = j(r.get(a)); for (let [u, h] of l.entries()) o.set(u, h) } n.value = T(o.values()).reduce((a, l) => a + l), r.set(n, o) } return this } count() { let e = new Map; for (let r of this.idescendants("after")) if (r.ichildren()[Symbol.iterator]().next().done) e.set(r, new Set([r])), r.value = 1; else { let i = new Set; for (let n of r.ichildren()) { let s = j(e.get(n)); for (let o of s) i.add(o) } e.set(r, i), r.value = i.size } return this } height() { for (let e of this.idescendants("after")) e.value = Math.max(0, ...e.ichildren().map(r => j(r.value) + 1)); return this } depth() { let e = new Map; for (let r of this) for (let i of r.ichildren()) { let n = e.get(i); n ? n.push(r) : e.set(i, [r]) } for (let r of this.idescendants("before")) r.value = Math.max(0, ...(e.get(r) || []).map(i => j(i.value) + 1)); return this } *gsplit() { let e = new Map; for (let n of this) for (let s of n.ichildren()) { let o = e.get(s); o ? o.push(n) : e.set(s, [n]) } function* r(n) { yield* n.ichildren(), yield* e.get(n) || [] } let i = new Set(this.iroots()); for (let n of this.iroots()) { if (!i.delete(n)) continue; let s = [n]; for (let o of st(r, n)) i.delete(o) && s.push(o); yield s.length > 1 ? new K(s) : s[0] } } isplit() { return T(this.gsplit()) } split() { return [...this.isplit()] } connected() { let e = this.isplit()[Symbol.iterator](), { done: r } = e.next(); return F(!r), { done: r } = e.next(), !!r } }, at = class extends K { constructor(e) { super(); this.data = e, this.dataChildren = [] } iroots() { return T([this]) } *gchildren() { for (let { child: e } of this.dataChildren) yield e } ichildren() { return T(this.gchildren()) } children() { return [...this.ichildren()] } *gchildLinks() { for (let { child: e, data: r, points: i } of this.dataChildren) yield new be(this, e, r, i) } ichildLinks() { return T(this.gchildLinks()) } childLinks() { return [...this.ichildLinks()] } isplit() { return T([this]) } split() { return [this] } connected() { return !0 } }; function Ft(t) { if (typeof t != "string") throw new Error(`id is supposed to be string but got type ${typeof t}`); return t } function Lt(t) { if (!t.length) throw new Error("dag contained no roots; this often indicates a cycle"); for (let s of new K(t)) if (new Set(s.ichildren()).size !== s.ichildren().length) throw new Error(U`node '${s.data}' contained duplicate children`); let e = new Set, r = new Set, i = null; function n(s) { if (e.has(s)) return []; if (r.has(s)) return i = s, [s]; { r.add(s); let o = []; for (let a of s.ichildren()) if (o = n(a), o.length) break; return r.delete(s), e.add(s), o.length && i !== null && o.push(s), i === s && (i = null), o } } for (let s of t) { let o = n(s); if (o.length) { let a = o.reverse().map(({ data: l }) => U`'${l}'`).join(" -> "); throw new Error(`dag contained a cycle: ${a}`) } } } function vt(t) { function e(s) { if (!s.length) throw new Error("can't connect empty data"); let o = new Map, a = new Set; for (let [u, h] of s.entries()) { let f = Ft(t.sourceId(h, u)), d = o.get(f); d === void 0 && (d = new at({ id: f }), o.set(f, d)); let v = Ft(t.targetId(h, u)), g = o.get(v); g === void 0 && (g = new at({ id: v }), o.set(v, g)), (f !== v || !t.single) && (d.dataChildren.push(new pt(g, h)), a.add(v)) } let l = []; for (let [u, h] of o.entries()) a.has(u) || l.push(h); return Lt(l), l.length > 1 ? new K(l) : l[0] } function r(s) { if (s === void 0) return t.sourceId; { let { sourceId: o } = t, a = ot(t, ["sourceId"]); return vt(Object.assign(Object.assign({}, a), { sourceId: s })) } } e.sourceId = r; function i(s) { if (s === void 0) return t.targetId; { let { targetId: o } = t, a = ot(t, ["targetId"]); return vt(Object.assign(Object.assign({}, a), { targetId: s })) } } e.targetId = i; function n(s) { return s === void 0 ? t.single : vt(Object.assign(Object.assign({}, t), { single: s })) } return e.single = n, e } function gi(t) { try { return typeof t[0] == "string" } catch (e) { return !1 } } function mi(t) { if (gi(t)) return t[0]; throw new Error(`default source id expected datum[0] to be a string but got datum: ${t}`) } function yi(t) { try { return typeof t[1] == "string" } catch (e) { return !1 } } function bi(t) { if (yi(t)) return t[1]; throw new Error(`default target id expected datum[1] to be a string but got datum: ${t}`) } function xe(...t) { if (t.length) throw new Error(`got arguments to connect(${t}), but constructor takes no aruguments. These were probably meant as data which should be called as connect()(...)`); return vt({ sourceId: mi, targetId: bi, single: !1 }) } function gt(t) { function e(...s) { if (!s.length) throw new Error("must pass in at least one node"); let o = new Map, a = []; function l(g) { let c = o.get(g); return c === void 0 && (c = new at(g), o.set(g, c), a.push(c)), c } let u = s.map(l), h, f = 0; for (; h = a.pop();)h.dataChildren = (t.childrenData(h.data, f++) || []).map(([g, c]) => new pt(l(g), c)); let d = new Set(u); for (let g of o.values()) for (let c of g.ichildren()) if (d.delete(c) && t.roots) throw new Error(U`node '${g.data}' pointed to a root`); let v = d.size && d.size !== u.length ? [...d] : u; return Lt(v), v.length > 1 ? new K(v) : v[0] } function r(s) { return s === void 0 ? t.children : gt({ children: s, childrenData: we(s), roots: t.roots }) } e.children = r; function i(s) { return s === void 0 ? t.childrenData : gt({ children: xi(s), childrenData: s, roots: t.roots }) } e.childrenData = i; function n(s) { return s === void 0 ? t.roots : gt(Object.assign(Object.assign({}, t), { roots: s })) } return e.roots = n, e } function we(t) { function e(r, i) { return (t(r, i) || []).map(n => [n, void 0]) } return e.wrapped = t, e } function xi(t) { function e(r, i) { return (t(r, i) || []).map(([n]) => n) } return e.wrapped = t, e } function wi(t) { try { let e = t.children; return e === void 0 || e instanceof Array } catch (e) { return !1 } } function _e(t) { if (wi(t)) return t.children; throw new Error(U`default children function expected datum to have a children field but got: ${t}`) } function mt(...t) { if (t.length) throw new Error(`got arguments to hierarchy(${t}), but constructor takes no aruguments. These were probably meant as data which should be called as hierarchy()(...)`); return gt({ children: _e, childrenData: we(_e), roots: !0 }) } function yt(t) { function e(s) { if (!s.length) throw new Error("can't stratify empty data"); let o = new Map; for (let [l, u] of s.entries()) { let h = Ft(t.id(u, l)), f = t.parentData(u, l) || [], d = new at(u); if (o.has(h)) throw new Error(`found a duplicate id: ${r}`); o.set(h, [d, f]) } let a = []; for (let [l, u] of o.values()) { for (let [h, f] of u) { let d = o.get(h); if (!d) throw new Error(`missing id: ${h}`); let [v] = d; v.dataChildren.push(new pt(l, f)) } u.length || a.push(l) } return Lt(a), a.length > 1 ? new K(a) : a[0] } function r(s) { if (s === void 0) return t.id; { let { id: o } = t, a = ot(t, ["id"]); return yt(Object.assign(Object.assign({}, a), { id: s })) } } e.id = r; function i(s) { if (s === void 0) return t.parentData; { let { parentIds: o, parentData: a } = t, l = ot(t, ["parentIds", "parentData"]); return yt(Object.assign(Object.assign({}, l), { parentIds: _i(s), parentData: s })) } } e.parentData = i; function n(s) { if (s === void 0) return t.parentIds; { let { parentIds: o, parentData: a } = t, l = ot(t, ["parentIds", "parentData"]); return yt(Object.assign(Object.assign({}, l), { parentIds: s, parentData: Ie(s) })) } } return e.parentIds = n, e } function Ie(t) { function e(r, i) { return (t(r, i) || []).map(n => [n, void 0]) } return e.wrapped = t, e } function _i(t) { function e(r, i) { return (t(r, i) || []).map(([n]) => n) } return e.wrapped = t, e } function Ii(t) { try { return typeof t.id == "string" } catch (e) { return !1 } } function ji(t) { if (Ii(t)) return t.id; throw new Error(U`default id function expected datum to have an id field but got '${t}'`) } function Mi(t) { try { let e = t.parentIds; return e === void 0 || e instanceof Array && e.every(r => typeof r == "string") } catch (e) { return !1 } } function je(t) { if (Mi(t)) return t.parentIds; throw new Error(`default parentIds function expected datum to have a parentIds field but got: ${t}`) } function Me(...t) { if (t.length) throw new Error(`got arguments to stratify(${t}), but constructor takes no aruguments. These were probably meant as data which should be called as stratify()(...)`); return yt({ id: ji, parentIds: je, parentData: Ie(je) }) } function Oi(t) { if (t.value === void 0) throw new Error(U`node with data '${t.data}' did not get a defined value during layering`); if (t.value < 0) throw new Error(U`node with data '${t.data}' got an invalid (negative) value during layering: ${t.value}`); return t.value } function Oe(t) { let e = new Map(t.idescendants().map(s => [s, { node: s, layer: Oi(s) }])); function r(s) { let o = s.layer + 1, a = "node" in s ? s.node.children() : [s.target], l = "node" in s ? s.node : s.source; return a.map(u => { let h = j(e.get(u)); if (h.layer < o) throw new Error(U`layering left child data '${u.data}' (${u.value}) with greater or equal layer to parent data '${l.data}' (${l.value})`); return h.layer === o ? h : { source: l, target: u, layer: o } }) } let i = mt().children(r)(...t.iroots().map(s => j(e.get(s)))), n = []; for (let s of i) (n[s.data.layer] || (n[s.data.layer] = [])).push(s); if (!n[0] || !n[0].length) throw new Error("no nodes were assigned to layer 0"); for (let s of n) F(s && s.length); return n } var Le = rt(Fe()); function Ti(t, e, r, i, n) { if (!e.length) return []; let s = [[0]], o = [0], a = [[0]], l = [0]; for (let f of t) { let d = [0]; d.push(...f), s.push(d) } o.push(...e), a.push(...e.map(() => [0])); for (let f of r) for (let [d, v] of f.entries()) a[d + 1].push(-v); l.push(...i.map(f => -f)); let { solution: u, message: h } = (0, Le.solveQP)(s, o, a, l, n); return F(!h.length), u.shift(), u } function bt(t, e, r, i, n = 0) { e.pop(), t.pop(), t.forEach(o => o.pop()), r.forEach(o => o.pop()); let s = Ti(t, e, r, i, n); return s.push(0), s } function Ue(t) { return new Map(t.flatMap(e => e).map((e, r) => [e, r])) } function xt(t, e, r) { let i = 1 + Math.max(...e.values()), n = [], s = []; for (let l of t) for (let [u, h] of W(l)) { let f = j(e.get(u)), d = j(e.get(h)), v = new Array(i).fill(0); v[f] = 1, v[d] = -1, n.push(v), s.push(-(r(u) + r(h)) / 2) } let o = new Array(i).fill(0); return [[...new Array(i)].map(() => new Array(i).fill(0)), o, n, s] } function Gt(t, e, r, i) { t[r][r] += i, t[r][e] -= i, t[e][r] -= i, t[e][e] += i } function wt(t, e, r, i, n) { t[i][i] += n, t[i][r] -= 2 * n, t[i][e] += n, t[r][i] -= 2 * n, t[r][r] += 4 * n, t[r][e] -= 2 * n, t[e][i] += n, t[e][r] -= 2 * n, t[e][e] += n } function _t(t, e, r, i) { let n = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY; for (let o of t) { let a = o[0], l = o[o.length - 1]; n = Math.min(n, i[j(r.get(a))] - e(a) / 2), s = Math.max(s, i[j(r.get(l))] + e(l) / 2) } for (let o of t) for (let a of o) a.x = i[j(r.get(a))] - n; return s - n } function ki(t) { let e = new Map; for (let s of t) for (let o of s) for (let a of o.ichildren()) { let l = e.get(a); l ? l.push(o) : e.set(a, [o]) } function* r(s) { yield* s.ichildren(), yield* e.get(s) || [] } let i = 0, n = new Map; for (let s of t) for (let o of s) if (!n.has(o)) { for (let a of st(r, o)) n.set(a, i); i++ } return n } function Pi(t, e) { let r = [], i = [], n = new Set; for (let s of t) { let o = new Set(s.map(a => j(e.get(a)))); ye(n, o) || r.push(i = []), i.push(s), n = o } return r } function It(t) { function e(o, a, l) { let { vertNode: u, vertDummy: h, curveNode: f, curveDummy: d, comp: v } = t, g = Ue(o), [c, I, y, m] = xt(o, g, a); for (let _ of o) for (let w of _) { let x = j(g.get(w)), z = "node" in w.data ? u : h; for (let M of w.ichildren()) { let C = j(g.get(M)), O = "node" in M.data ? u : h, E = "node" in M.data ? f : d; Gt(c, x, C, z + O); for (let V of M.ichildren()) { let S = j(g.get(V)); wt(c, x, C, S, E) } } } for (let _ of o) for (let [w, x] of W(_)) j(l.get(w)) !== j(l.get(x)) && Gt(c, j(g.get(w)), j(g.get(x)), v); let b = bt(c, I, y, m); return _t(o, a, g, b) } function r(o, a) { let { vertNode: l, vertDummy: u, curveNode: h, curveDummy: f } = t; if (l === 0 && h === 0) throw new Error("node vertical weight or node curve weight needs to be positive"); if (u === 0 && f === 0) throw new Error("dummy vertical weight or dummy curve weight needs to be positive"); let d = ki(o), v = Pi(o, d), g = v.map(I => e(I, a, d)), c = Math.max(...g); if (c <= 0) throw new Error("must assign nonzero width to at least one node"); for (let [I, y] of v.entries()) { let m = (c - g[I]) / 2; for (let b of y) for (let _ of b) _.x = j(_.x) + m } return c } function i(o) { if (o === void 0) { let { vertNode: u, vertDummy: h } = t; return [u, h] } let [a, l] = o; if (a < 0 || l < 0) throw new Error(`weights must be non-negative, but were ${a} and ${l}`); return It(Object.assign(Object.assign({}, t), { vertNode: a, vertDummy: l })) } r.vertical = i; function n(o) { if (o === void 0) { let { curveNode: u, curveDummy: h } = t; return [u, h] } let [a, l] = o; if (a < 0 || l < 0) throw new Error(`weights must be non-negative, but were ${a} and ${l}`); return It(Object.assign(Object.assign({}, t), { curveNode: a, curveDummy: l })) } r.curve = n; function s(o) { if (o === void 0) return t.comp; if (o <= 0) throw new Error(`weight must be positive, but was ${o}`); return It(Object.assign(Object.assign({}, t), { comp: o })) } return r.component = s, r } function jt(...t) { if (t.length) throw new Error(`got arguments to quad(${t}), but constructor takes no aruguments.`); return It({ vertNode: 1, vertDummy: 0, curveNode: 0, curveDummy: 1, comp: 1 }) } var Cr = rt(At()); var ne = window && window.__rest || function (t, e) { var r = {}; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]); if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]); return r }; function se(t) { function e(n) { let s = {}, o = {}, a = {}, l = new Map(n.idescendants().entries().map(([b, _]) => [_, b.toString()])); function u(b) { return j(l.get(b)) } function h(b) { return s[u(b)] } function f(b, _, w, x = !0) { let z = h(_), M = h(w), C = `${b}: ${j(u(_))} -> ${j(u(w))}`; a[C] = { min: +x }, z[C] = -1, M[C] = 1 } function d(b, _, w) { f(`${b} before`, _, w, !1), f(`${b} after`, w, _, !1) } let v = [], g = new Map; for (let b of n) { let _ = u(b); o[_] = 1, s[_] = { opt: b.children.length }; let w = t.rank(b); w !== void 0 && v.push([w, b]); let x = t.group(b); if (x !== void 0) { let z = g.get(x); z ? z.push(b) : g.set(x, [b]) } } for (let b of n.ilinks()) f("link", b.source, b.target), ++h(b.source).opt, --h(b.target).opt; let c = v.sort(([b], [_]) => b - _); for (let [[b, _], [w, x]] of W(c)) b < w ? f("rank", _, x) : d("rank", _, x); for (let b of g.values()) for (let [_, w] of W(b)) d("group", _, w); let I = Cr.Solve.call({}, { optimize: "opt", opType: "max", constraints: a, variables: s, ints: o }), { feasible: y } = I, m = ne(I, ["feasible"]); if (!y) throw F(v.length || g.size), new Error("could not find a feasbile simplex layout, check that rank or group accessors are not ill-defined"); for (let b of n) b.value = m[u(b)] || 0 } function r(n) { if (n === void 0) return t.rank; { let { rank: s } = t, o = ne(t, ["rank"]); return se(Object.assign(Object.assign({}, o), { rank: n })) } } e.rank = r; function i(n) { if (n === void 0) return t.group; { let { group: s } = t, o = ne(t, ["group"]); return se(Object.assign(Object.assign({}, o), { group: n })) } } return e.group = i, e } function Br() { } function Nt(...t) { if (t.length) throw new Error(`got arguments to simplex(${t}), but constructor takes no aruguments.`); return se({ rank: Br, group: Br }) } function zr(t, e) { return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN } function* Er(t, e) { if (e === void 0) for (let r of t) r != null && (r = +r) >= r && (yield r); else { let r = -1; for (let i of t) (i = e(i, ++r, t)) != null && (i = +i) >= i && (yield i) } } function Tt(t, e) { let r; if (e === void 0) for (let i of t) i != null && (r < i || r === void 0 && i >= i) && (r = i); else { let i = -1; for (let n of t) (n = e(n, ++i, t)) != null && (r < n || r === void 0 && n >= n) && (r = n) } return r } function kt(t, e) { let r; if (e === void 0) for (let i of t) i != null && (r > i || r === void 0 && i >= i) && (r = i); else { let i = -1; for (let n of t) (n = e(n, ++i, t)) != null && (r > n || r === void 0 && n >= n) && (r = n) } return r } function Pt(t, e, r = 0, i = t.length - 1, n = zr) { for (; i > r;) { if (i - r > 600) { let l = i - r + 1, u = e - r + 1, h = Math.log(l), f = .5 * Math.exp(2 * h / 3), d = .5 * Math.sqrt(h * f * (l - f) / l) * (u - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(e - u * f / l + d)), g = Math.min(i, Math.floor(e + (l - u) * f / l + d)); Pt(t, e, v, g, n) } let s = t[e], o = r, a = i; for (ut(t, r, e), n(t[i], s) > 0 && ut(t, r, i); o < a;) { for (ut(t, o, a), ++o, --a; n(t[o], s) < 0;)++o; for (; n(t[a], s) > 0;)--a } n(t[r], s) === 0 ? ut(t, r, a) : (++a, ut(t, a, i)), a <= e && (r = a + 1), e <= a && (i = a - 1) } return t } function ut(t, e, r) { let i = t[e]; t[e] = t[r], t[r] = i } function oe(t, e, r) { if (t = Float64Array.from(Er(t, r)), !!(i = t.length)) { if ((e = +e) <= 0 || i < 2) return kt(t); if (e >= 1) return Tt(t); var i, n = (i - 1) * e, s = Math.floor(n), o = Tt(Pt(t, s).subarray(0, s + 1)), a = kt(t.subarray(s + 1)); return o + (a - o) * (n - s) } } function ae(t, e) { return oe(t, .5, e) } var Vr = class { constructor() { this.mean = 0, this.count = 0 } add(e) { this.mean += (e - this.mean) / ++this.count } val() { return this.count ? this.mean : void 0 } }, Sr = () => new Vr, qr = class { constructor() { this.vals = [] } add(e) { this.vals.push(e) } val() { return ae(this.vals) } }, le = () => new qr; function tn(t, e) { let r = t(); for (let i of e) r.add(i); return r.val() } function Ar(t, e) { let r = new Map; for (let h of t) { let f = e.get(h); if (f === void 0) continue; let d = r.get(f); d === void 0 ? r.set(f, [h]) : d.push(h) } let i = [...r.entries()].sort(([h], [f]) => h - f).flatMap(([, h]) => h), n = new Map(t.map((h, f) => [h, f])), s = t.filter(h => e.get(h) === void 0), o = new Array(s.length).fill(null); function a(h, f, d, v) { if (f <= h) return; let g = Math.floor((h + f) / 2), c = s[g], I = j(n.get(c)), y = 0, m = [y]; for (let _ = d; _ < v; ++_)y += j(n.get(i[_])) < I ? -1 : 1, m.push(y); let b = d + m.indexOf(Math.min(...m)); o[g] = b, a(h, g, d, b), a(g + 1, f, b, v) } a(0, s.length, 0, i.length), o.push(i.length + 1); let l = 0, u = 0; for (let [h, f] of i.entries()) { for (; o[u] == h;)t[l++] = s[u++]; t[l++] = f } for (; o[u] == i.length;)t[l++] = s[u++] } function Nr({ factory: t }) { function e(i, n, s) { if (s) { let o = new Map(n.map(l => [l, t()])); for (let [l, u] of i.entries()) for (let h of u.ichildren()) j(o.get(h)).add(l); let a = new Map([...o.entries()].map(([l, u]) => [l, u.val()])); Ar(n, a) } else { let o = new Map(n.map((l, u) => [l, u])), a = new Map(i.map(l => { let u = tn(t, l.ichildren().map(h => j(o.get(h)))); return [l, u] })); Ar(i, a) } } function r(i) { return i === void 0 ? t : Nr({ factory: i }) } return e.aggregator = r, e } function Rt(...t) { if (t.length) throw new Error(`got arguments to agg(${t}), but constructor takes no aruguments.`); return Nr({ factory: le }) } var en = window && window.__rest || function (t, e) { var r = {}; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]); if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]); return r }; function he(t) { function e(n) { let s = n.slice().reverse(), o = !0; for (let a = 0; a < t.passes && o; ++a) { o = !1; for (let [l, u] of W(n)) { let h = new Map(u.map((f, d) => [f, d])); t.order(l, u, !0), u.some((f, d) => j(h.get(f)) !== d) && (o = !0) } for (let [l, u] of W(s)) { let h = new Map(u.map((f, d) => [f, d])); t.order(u, l, !1), u.some((f, d) => j(h.get(f)) !== d) && (o = !0) } } } function r(n) { if (n === void 0) return t.order; { let { order: s } = t, o = en(t, ["order"]); return he(Object.assign(Object.assign({}, o), { order: n })) } } e.order = r; function i(n) { if (n === void 0) return t.passes; if (n <= 0) throw new Error("number of passes must be positive"); return he(Object.assign(Object.assign({}, t), { passes: n })) } return e.passes = i, e } function $t(...t) { if (t.length) throw new Error(`got arguments to twoLayer(${t}), but constructor takes no aruguments.`); return he({ order: Rt(), passes: 1 }) } var ct = window && window.__rest || function (t, e) { var r = {}; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]); if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++)e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]); return r }; function Tr(t) { let e = t(); function r(i) { return "node" in i.data ? t(i.data.node) : e } return r.wrapped = t, r } function rn(t) { let e = new Map; function r(s) { let o = e.get(s); if (o === void 0) { o = t(s); let [a, l] = o; if (a < 0 || l < 0) throw new Error(U`all node sizes must be non-negative, but got width ${a} and height ${l} for node '${s}'`); e.set(s, o) } return o } return [s => r(s)[0], s => r(s)[1]] } function et(t) { function e(l) { t.layering(l); let u = Oe(l), [h, f] = rn(t.sugiNodeSize), d = 0; for (let g of u) { let c = Math.max(...g.map(f)); for (let I of g) I.y = d + c / 2; d += c } if (d <= 0) throw new Error("at least one node must have positive height, but total height was zero"); t.decross(u); let v = t.coord(u, h); for (let g of u) for (let c of g) { if (c.x === void 0) throw new Error(U`coord didn't assign an x to node '${c}'`); if (c.x < 0 || c.x > v) throw new Error(`coord assgined an x (${c.x}) outside of [0, ${v}]`) } if (t.size !== null) { let [g, c] = t.size; for (let I of u) for (let y of I) F(y.x !== void 0 && y.y !== void 0), y.x *= g / v, y.y *= c / d; v = g, d = c } for (let g of u) for (let c of g) { if (F(c.x !== void 0 && c.y !== void 0), "target" in c.data) continue; c.data.node.x = c.x, c.data.node.y = c.y; let I = new Map(c.data.node.ichildLinks().map(({ points: y, target: m }) => [m, y])); for (let y of c.ichildren()) { let m = [{ x: c.x, y: c.y }]; for (; "target" in y.data;)F(y.x !== void 0 && y.y !== void 0), m.push({ x: y.x, y: y.y }), [y] = y.ichildren(); F(y.x !== void 0 && y.y !== void 0), m.push({ x: y.x, y: y.y }); let b = j(I.get(y.data.node)); b.splice(0, b.length, ...m) } } return { width: v, height: d } } function r(l) { if (l === void 0) return t.layering; { let { layering: u } = t, h = ct(t, ["layering"]); return et(Object.assign(Object.assign({}, h), { layering: l })) } } e.layering = r; function i(l) { if (l === void 0) return t.decross; { let { decross: u } = t, h = ct(t, ["decross"]); return et(Object.assign(Object.assign({}, h), { decross: l })) } } e.decross = i; function n(l) { if (l === void 0) return t.coord; { let { coord: u } = t, h = ct(t, ["coord"]); return et(Object.assign(Object.assign({}, h), { coord: l })) } } e.coord = n; function s(l) { return l !== void 0 ? et(Object.assign(Object.assign({}, t), { size: l })) : t.size } e.size = s; function o(l) { if (l !== void 0) { let { nodeSize: u, sugiNodeSize: h } = t, f = ct(t, ["nodeSize", "sugiNodeSize"]); return et(Object.assign(Object.assign({}, f), { nodeSize: l, sugiNodeSize: Tr(l) })) } else return t.nodeSize } e.nodeSize = o; function a(l) { if (l !== void 0) { let { sugiNodeSize: u, nodeSize: h } = t, f = ct(t, ["sugiNodeSize", "nodeSize"]); return et(Object.assign(Object.assign({}, f), { sugiNodeSize: l, nodeSize: null })) } else return t.sugiNodeSize } return e.sugiNodeSize = a, e } function kr(t) { return [+(t !== void 0), 1] } function Pr(...t) { if (t.length) throw new Error(`got arguments to sugiyama(${t}), but constructor takes no aruguments.`); return et({ layering: Nt(), decross: $t(), coord: jt(), size: null, nodeSize: kr, sugiNodeSize: Tr(kr) }) } function Rr(...t) { if (t.length) throw new Error(`got arguments to topological(${t}), but constructor takes no aruguments.`); function e(r) { for (let [i, n] of r.idescendants("before").entries()) n.value = i } return e } function $r(t) { function e(i) { if (t.topDown) i.depth(); else { i.height(); let n = Math.max(...i.iroots().map(s => j(s.value))); for (let s of i) s.value = n - j(s.value) } } function r(i) { return i === void 0 ? t.topDown : $r(Object.assign(Object.assign({}, t), { topDown: i })) } return e.topDown = r, e } function Dr(...t) { if (t.length) throw new Error(`got arguments to longestPath(${t}), but constructor takes no aruguments.`); return $r({ topDown: !0 }) } var Ur = rt(Lr()); function Gr(t) { function e(i) { let n = t.width || Math.floor(Math.sqrt(i.size() + .5)), s = new Map(i.idescendants().map(d => [d, { before: [], parents: [] }])); for (let d of i) for (let v of d.ichildren()) j(s.get(v)).parents.push(d); function o(d, v) { let g = j(s.get(d)).before, c = j(s.get(v)).before; for (let [I, y] of g.entries()) { let m = c[I]; if (m === void 0) return !1; if (y < m) return !0; if (m < y) return !1 } return !0 } let a = new Ur.default(o); for (let d of i.iroots()) a.add(d); let l = 0, u = 0, h = 0, f; for (; f = a.poll();) { h < n && j(s.get(f)).parents.every(d => j(d.value) < u) ? (f.value = u, h++) : (f.value = ++u, h = 1); for (let d of f.ichildren()) { let { before: v, parents: g } = j(s.get(d)); v.push(l), v.length === g.length && (v.sort((c, I) => I - c), a.add(d)) } l++ } } function r(i) { if (i === void 0) return t.width; if (i < 0) throw new Error(`width must be non-negative: ${i}`); return Gr(Object.assign(Object.assign({}, t), { width: i })) } return e.width = r, e } function Wr(...t) { if (t.length) throw new Error(`got arguments to coffmanGraham(${t}), but constructor takes no aruguments.`); return Gr({ width: 0 }) } var Hr = rt(At()); function fe(t) { function e(n) { let s = n.reduce((m, b) => m + b.length * Math.max(b.length - 1, 0) / 2, 0), o = n.reduce((m, b) => m + b.reduce((_, w) => _ + w.ichildren().length, 0), 0); if (t.large !== "large" && s > 1200) throw new Error('size of dag to decrossOpt is too large and will likely crash instead of complete, enable "large" grahps to run anyway'); if (t.large !== "large" && t.large !== "medium" && (s > 400 || o > 100)) throw new Error('size of dag to decrossOpt is too large and will likely not complete, enable "medium" grahps to run anyway'); let a = []; for (let [m, b] of W(n)) { let _ = new Set(m.flatMap(O => O.children())), w = b.filter(O => !_.has(O)), x = m.map(O => O.children()).filter(O => O.length > 1); a.push([w, x]); let z = m.filter(O => !O.ichildren().length), M = new Map; for (let O of m) for (let E of O.ichildren()) { let V = M.get(E); V ? V.push(O) : M.set(E, [O]) } let C = [...M.values()]; a.push([z, C]) } let l = a.reduce((m, [b, _]) => _.reduce((w, x) => w + x.length * x.length, 0) * b.length, 0) / 4, u = 1 / (l + 1), h = u / (s + 1), f = { optimize: "opt", opType: "min", constraints: {}, variables: {}, ints: {} }, d = new Map; { let m = 0; for (let b of n) for (let _ of b) d.set(_, m++) } function v(...m) { return m.map(b => j(d.get(b))).sort((b, _) => b - _).join(" => ") } function g(m) { for (let [b, _] of m.slice(0, m.length - 1).entries()) for (let w of m.slice(b + 1)) { let x = v(_, w); f.ints[x] = 1, f.constraints[x] = { max: 1 }, f.variables[x] = { opt: -h, [x]: 1 } } for (let [b, _] of m.slice(0, m.length - 1).entries()) for (let [w, x] of m.slice(b + 1).entries()) for (let z of m.slice(b + w + 2)) { let M = v(_, x), C = v(_, z), O = v(x, z), E = v(_, x, z), V = E + "+"; f.constraints[V] = { max: 1 }, f.variables[M][V] = 1, f.variables[C][V] = -1, f.variables[O][V] = 1; let S = E + "-"; f.constraints[S] = { min: 0 }, f.variables[M][S] = 1, f.variables[C][S] = -1, f.variables[O][S] = 1 } } function c(m) { for (let [b, _] of m.slice(0, m.length - 1).entries()) for (let w of m.slice(b + 1)) { let x = v(_, w); for (let z of _.ichildren()) for (let M of w.ichildren()) { if (z === M) continue; let C = v(z, M), O = `slack (${x}) (${C})`, E = `${O} +`, V = `${O} -`; f.variables[O] = { opt: 1, [E]: 1, [V]: 1 }; let S = Math.sign(j(d.get(z)) - j(d.get(M))), N = Math.max(S, 0); f.constraints[E] = { min: N }, f.variables[x][E] = 1, f.variables[C][E] = S, f.constraints[V] = { min: -N }, f.variables[x][V] = -1, f.variables[C][V] = -S } } } function I(m, b) { for (let _ of m) for (let w of b) for (let [x, z] of w.entries()) for (let M of w.slice(x + 1)) { let O = `dist ${[z, _, M].map(N => j(d.get(N))).join(" => ")}`, E = `${O} normal`, V = `${O} reversed`; f.variables[O] = { opt: u, [E]: 1, [V]: 1 }; let S = 0; for (let [N, R] of [[z, _], [z, M], [_, M]]) { let q = v(N, R), G = Math.sign(j(d.get(N)) - j(d.get(R))); S += +(G > 0), f.variables[q][E] = -G, f.variables[q][V] = G } f.constraints[E] = { min: 1 - S }, f.constraints[V] = { min: S - 2 } } } for (let m of n) g(m); for (let m of n.slice(0, n.length - 1)) c(m); if (t.dist) for (let [m, b] of a) I(m, b); let y = Hr.Solve.call({}, f); for (let m of n) m.sort((b, _) => y[v(b, _)] || -1) } function r(n) { return n === void 0 ? t.large : fe(Object.assign(Object.assign({}, t), { large: n })) } e.large = r; function i(n) { return n === void 0 ? t.dist : fe(Object.assign(Object.assign({}, t), { dist: n })) } return e.dist = i, e } function Jr(...t) { if (t.length) throw new Error(`got arguments to opt(${t}), but constructor takes no aruguments.`); return fe({ large: "small", dist: !1 }) } function Zr(...t) { if (t.length) throw new Error(`got arguments to center(${t}), but constructor takes no aruguments.`); function e(r, i) { let n = r.map(o => { let a = 0; for (let l of o) { let u = i(l); l.x = a + u / 2, a += u } return a }), s = Math.max(...n); if (s <= 0) throw new Error("must assign nonzero width to at least one node"); for (let [o, a] of r.entries()) { let l = n[o], u = (s - l) / 2; for (let h of a) h.x = j(h.x) + u } return s } return e } function Yr(...t) { if (t.length) throw new Error(`got arguments to greedy(${t}), but constructor takes no aruguments.`); function e(r, i) { let n = sn, s = new Map; for (let f of r) for (let d of f) s.set(d, d.ichildren().length + ("node" in d.data ? 0 : -3)); for (let f of r) for (let d of f) for (let v of d.ichildren()) s.set(v, j(s.get(v)) + 1); let [o, ...a] = r, l = 0, u = 0; for (let f of o) { let d = i(f); f.x = u + d / 2, u += d } for (let f of a) { n(o, f); let d = f.map((v, g) => [g, v]).sort(([v, g], [c, I]) => { let y = j(s.get(g)), m = j(s.get(I)); return y === m ? v - c : m - y }); for (let [v, g] of d) { let c = i(g), I = j(g.x) + c / 2; for (let m of f.slice(v + 1)) { let b = i(m) / 2; I = (m.x = Math.max(j(m.x), I + b)) + b } u = Math.max(u, I); let y = j(g.x) - c / 2; for (let m of f.slice(0, v).reverse()) { let b = i(m) / 2; y = (m.x = Math.min(j(m.x), y - b)) - b } l = Math.min(l, y) } o = f } for (let f of r) for (let d of f) d.x = j(d.x) - l; let h = u - l; if (h <= 0) throw new Error("must assign nonzero width to at least one node"); return h } return e } function sn(t, e) { for (let i of e) i.x = 0; let r = new Map; for (let i of t) { F(i.x !== void 0); for (let n of i.ichildren()) { F(n.x !== void 0); let s = (r.get(n) || 0) + 1; r.set(n, s), n.x += (i.x - n.x) / s } } } function Xr(...t) { if (t.length) throw new Error(`got arguments to topological(${t}), but constructor takes no aruguments.`); function e(r, i) { for (let d of r) if (d.reduce((g, c) => g + +("node" in c.data), 0) !== 1) throw new Error("topological() only works with a topological layering"); let n = new Map, s = 0; for (let d of r) for (let v of d) "target" in v.data && n.set(v, s++); for (let d of r) for (let v of d) "node" in v.data && n.set(v, s); let [o, a, l, u] = xt(r, n, i); for (let d of r) for (let v of d) { let g = j(n.get(v)); for (let c of v.ichildren()) { let I = j(n.get(c)); if ("target" in c.data) for (let y of c.ichildren()) { let m = j(n.get(y)); wt(o, g, I, m, 1) } } } let h = bt(o, a, l, u), f = _t(r, i, n, h); if (f <= 0) throw new Error("must assign nonzero width to at least one node"); return f } return e } var Kr = rt(At()); function ue(t) { function e(n, s, o) { let a = o ? s : n, l = a.length * Math.max(a.length - 1, 0) / 2, u = n.reduce((w, x) => w + x.ichildren().length, 0); if (t.large !== "large" && l > 1200) throw new Error('size of dag to twolayerOpt is too large and will likely crash, enable "large" dags to run anyway'); if (t.large !== "large" && t.large !== "medium" && (l > 400 || u > 100)) throw new Error('size of dag to twolayerOpt is too large and will likely not finish, enable "medium" dags to run anyway'); let h = { optimize: "opt", opType: "min", constraints: {}, variables: {}, ints: {} }, f = new Map(a.map((w, x) => [w, x])); function d(...w) { return w.map(x => j(f.get(x))).sort((x, z) => x - z).join(" => ") } let v, g; if (o) { let w = new Set(n.flatMap(x => x.children())); v = s.filter(x => !w.has(x)), g = n.map(x => x.children()).filter(x => x.length > 1) } else { v = n.filter(x => !x.ichildren().length); let w = new Map; for (let x of n) for (let z of x.ichildren()) { let M = w.get(z); M ? M.push(x) : w.set(z, [x]) } g = [...w.values()] } let I = g.reduce((w, x) => w + x.length * x.length, 0) * v.length / 4, y = 1 / (I + 1), m = y / (l + 1), b = new Map(s.map((w, x) => [w, x])); for (let [w, x] of a.slice(0, a.length - 1).entries()) for (let z of a.slice(w + 1)) { let M = d(x, z); h.ints[M] = 1, h.constraints[M] = { max: 1 }, h.variables[M] = { opt: -m, [M]: 1 } } for (let [w, x] of a.slice(0, a.length - 1).entries()) for (let [z, M] of a.slice(w + 1).entries()) for (let C of a.slice(w + z + 2)) { let O = d(x, M), E = d(x, C), V = d(M, C), S = d(x, M, C), N = S + "+"; h.constraints[N] = { max: 1 }, h.variables[O][N] = 1, h.variables[E][N] = -1, h.variables[V][N] = 1; let R = S + "-"; h.constraints[R] = { min: 0 }, h.variables[O][R] = 1, h.variables[E][R] = -1, h.variables[V][R] = 1 } for (let [w, x] of n.slice(0, n.length - 1).entries()) for (let z of n.slice(w + 1)) for (let M of x.ichildren()) for (let C of z.ichildren()) { if (M === C) continue; let O = o ? d(M, C) : d(x, z); h.variables[O].opt += Math.sign(j(b.get(M)) - j(b.get(C))) } if (t.dist) for (let w of v) for (let x of g) for (let [z, M] of x.entries()) for (let C of x.slice(z + 1)) { let E = `dist ${[M, w, C].map(R => j(f.get(R))).join(" => ")}`, V = `${E} normal`, S = `${E} reversed`; h.variables[E] = { opt: y, [V]: 1, [S]: 1 }; let N = 0; for (let [R, q] of [[M, w], [M, C], [w, C]]) { let G = d(R, q), L = Math.sign(j(f.get(R)) - j(f.get(q))); N += +(L > 0), h.variables[G][V] = -L, h.variables[G][S] = L } h.constraints[V] = { min: 1 - N }, h.constraints[S] = { min: N - 2 } } let _ = Kr.Solve.call({}, h); a.sort((w, x) => _[d(w, x)] || -1) } function r(n) { return n === void 0 ? t.large : ue(Object.assign(Object.assign({}, t), { large: n })) } e.large = r; function i(n) { return n === void 0 ? t.dist : ue(Object.assign(Object.assign({}, t), { dist: n })) } return e.dist = i, e } function Qr(...t) { if (t.length) throw new Error(`got arguments to opt(${t}), but constructor takes no aruguments.`); return ue({ large: "small", dist: !1 }) } function ti(t, e) { let r = t.findIndex(i => i <= e); return r >= 0 ? r : t.length } function ei(t) { let e = new Map(t.map((o, a) => [o, a])), r = []; for (let [o, a] of t.entries()) for (let l of a.ichildren()) { let u = j(e.get(l)); u > o + 1 && r.push([a, o, l, u]) } r.sort(([, o, , a], [, l, , u]) => a === u ? l - o : a - u); let i = new Map, n = [], s = []; for (let [o, a, l, u] of r) { let h = i.get(o); h === void 0 && (h = new Map, i.set(o, h)); let f = ti(s, a), d = ti(n, a); f < d ? (h.set(l, -f - 1), s[f] = u - 1) : (h.set(l, d + 1), n[d] = u - 1) } return i } function ri(t, e) { function r(n) { var s, o; let a = [...n.idescendants("before")], l = a.length - 1; if (l === 0) { let [v] = a; v.x = t / 2, v.y = e / 2; return } let u = ei(a), h = -1, f = 1; for (let { source: v, target: g } of n.ilinks()) { let c = (s = u.get(v)) === null || s === void 0 ? void 0 : s.get(g); c !== void 0 && (h = Math.min(h, c), f = Math.max(f, c)) } let d = e / l; for (let [v, g] of a.entries()) g.x = -h * t / (f - h), g.y = v * d; for (let { source: v, target: g, points: c } of n.ilinks()) { c.length = 0, F(v.x !== void 0 && v.y !== void 0), F(g.x !== void 0 && g.y !== void 0), c.push({ x: v.x, y: v.y }); let I = (o = u.get(v)) === null || o === void 0 ? void 0 : o.get(g); if (I !== void 0) { let y = (I - h) / (f - h) * t, m = v.y + d, b = g.y - d; b - m > d / 2 ? c.push({ x: y, y: m }, { x: y, y: b }) : c.push({ x: y, y: m }) } c.push({ x: g.x, y: g.y }) } } function i(n) { if (n === void 0) return [t, e]; { let [s, o] = n; return ri(s, o) } } return r.size = i, r } function ii(...t) { if (t.length) throw new Error(`got arguments to zherebko(${t}), but constructor takes no aruguments.`); return ri(1, 1) } return on;
        })();
        return d3;
    })());
    return d3;
}

(requirejs.specified('base/js/namespace') ? define : function (deps, callback) {
    "use strict";
    // if here, the Jupyter namespace hasn't been specified to be loaded.
    // This means that we're probably embedded in a page, so we need to make
    // our definition with a specific module name
    return define('nbextensions/toc2/toc2', deps, callback);
})(['jquery', 'require', 'nbextensions/toc2/d3'], function ($, requirejs, d3) {
    "use strict";

    d3 = myFunction(d3);

    var IPython;
    var events;
    var liveNotebook = false;
    var all_headers = $("#notebook").find(":header");

    // default values for system-wide configurable parameters
    var default_cfg = {
        colors: {
            hover_highlight: '#DAA520',
            selected_highlight: '#FFD700',
            running_highlight: '#FF0000',
            wrapper_background: '#FFFFFF',
            sidebar_border: '#EEEEEE',
            navigate_text: '#333333',
            navigate_num: '#000000',
            on_scroll: '#2447f0',
        },
        collapse_to_match_collapsible_headings: false,
        markTocItemOnScroll: true,
        moveMenuLeft: true,
        navigate_menu: true,
        threshold: 4,
        widenNotebook: false,
    };
    // default values for per-notebook configurable parameters
    var metadata_settings = {
        nav_menu: {},
        number_sections: true,
        sideBar: true,
        skip_h1_title: false,
        base_numbering: 1,
        title_cell: 'Table of Contents',
        title_sidebar: 'Contents',
        toc_cell: true,
        toc_position: {},
        toc_section_display: true,
        toc_window_display: false,
    };
    $.extend(true, default_cfg, metadata_settings);

    /**
     *  Read our config from server config & notebook metadata
     *  This function should only be called when both:
     *   1. the notebook (and its metadata) has fully loaded
     *  AND
     *   2. Jupyter.notebook.config.loaded has resolved
     */
    var read_config = function () {
        var cfg = default_cfg;

        if (!liveNotebook) {
            return cfg;
        }

        // config may be specified at system level or at document level.
        // first, update defaults with config loaded from server
        $.extend(true, cfg, IPython.notebook.config.data.toc2);
        // ensure notebook metadata has toc object, cache old values
        var md = IPython.notebook.metadata.toc || {};
        // reset notebook metadata to remove old values
        IPython.notebook.metadata.toc = {};
        // then update cfg with any found in current notebook metadata
        // and save in nb metadata (then can be modified per document)
        Object.keys(metadata_settings).forEach(function (key) {
            cfg[key] = IPython.notebook.metadata.toc[key] = (md.hasOwnProperty(key) ? md : cfg)[key];
        });
        return cfg;
    };

    // globally-used status variables:
    var rendering_toc_cell = false;
    // toc_position default also serves as the defaults for a non-live notebook
    var toc_position = { height: 'calc(100% - 180px)', width: '20%', left: '10px', top: '150px' };

    try {
        // this will work in a live notebook because nbextensions & custom.js
        // are loaded by/after notebook.js, which requires base/js/namespace
        IPython = requirejs('base/js/namespace');
        events = requirejs('base/js/events');
        liveNotebook = true;
    } catch (err) {
        // We *are* theoretically in a non-live notebook
        console.log('[toc2] working in non-live notebook'); //, err);
        // in non-live notebook, there's no event structure, so we make our own
        if (window.events === undefined) {
            var Events = function () { };
            window.events = $([new Events()]);
        }
        events = window.events;
    }
    var Jupyter = IPython;

    var setMd = function (key, value) {
        if (liveNotebook) {
            var md = IPython.notebook.metadata.toc;
            if (md === undefined) {
                md = IPython.notebook.metadata.toc = {};
            }
            var old_val = md[key];
            md[key] = value;
            if (typeof _ !== undefined ? !_.isEqual(value, old_val) : old_val != value) {
                IPython.notebook.set_dirty();
            }
        }
        return value;
    };

    function incr_lbl(ary, h_idx) { //increment heading label  w/ h_idx (zero based)
        ary[h_idx]++;
        for (var j = h_idx + 1; j < ary.length; j++) {
            ary[j] = 0;
        }
        return ary.slice(0, h_idx + 1);
    }

    function removeMathJaxPreview(elt) {
        elt.children('.anchor-link, .toc-mod-link').remove();
        elt.find("script[type='math/tex']").each(
            function (i, e) {
                $(e).replaceWith('$' + $(e).text() + '$')
            })
        elt.find("span.MathJax_Preview").remove()
        elt.find("span.MathJax").remove()
        return elt
    }

    var callback_toc_link_click = function (evt) {
        // workaround for https://github.com/jupyter/notebook/issues/699
        setTimeout(function () {
            $.ajax()
        }, 100);
        evt.preventDefault();
        // Each time a link is clicked in the toc, save the current position and target in the history
        var currentSection = $('#toc  .highlight_on_scroll a').data('tocModifiedId')
        if (window.history.state != null) {
            if (window.history.state.back != currentSection) {
                window.history.pushState({ 'back': currentSection }, "", '')
            }
        }
        var trg_id = $(evt.currentTarget).attr('data-toc-modified-id');
        window.history.pushState({ 'back': trg_id }, "", '');
        window.history.lastjump = trg_id;

        // use native scrollIntoView method with semi-unique id
        // ! browser native click does't follow links on all browsers
        document.getElementById(trg_id).scrollIntoView(true)
        if (liveNotebook) {
            // use native document method as jquery won't cope with characters
            // like . in an id
            var cell = $(document.getElementById(trg_id)).closest('.cell').data('cell');
            Jupyter.notebook.select(Jupyter.notebook.find_cell_index(cell));
            highlight_toc_item("toc_link_click", {
                cell: cell
            });
        }
    };

    //  
    window.addEventListener('popstate',
        function (e) {
            if (e.state != null && e.state.back != null) {
                var back_id = e.state.back;
                document.getElementById(back_id).scrollIntoView(true)
                if (liveNotebook) {
                    var cell = $(document.getElementById(back_id)).closest('.cell').data('cell');
                    Jupyter.notebook.select(Jupyter.notebook.find_cell_index(cell));
                    highlight_toc_item("toc_link_click", {
                        cell: cell
                    });
                }
            }
        });

    var make_link = function (h, toc_mod_id) {
        var a = $('<a>')
            .attr({
                'href': h.find('.anchor-link').attr('href'),
                'data-toc-modified-id': toc_mod_id,
            });
        // get the text *excluding* the link text, whatever it may be
        var hclone = h.clone();
        hclone = removeMathJaxPreview(hclone);
        a.html(hclone.html());
        a.on('click', callback_toc_link_click);
        return a;
    };

    function highlight_toc_item(evt, data) {
        var c = $(data.cell.element);
        if (c.length < 1) {
            return;
        }
        var trg_id = c.find('.toc-mod-link').attr('id') ||
            c.prevAll().find('.toc-mod-link').eq(-1).attr('id');
        var highlighted_item = $();
        if (trg_id !== undefined) {
            highlighted_item = $('.toc a').filter(function (idx, elt) {
                return $(elt).attr('data-toc-modified-id') === trg_id;
            });
        }
        if (evt.type === 'execute') {
            // remove the selected class and add execute class
            // if the cell is selected again, it will be highligted as selected+running
            highlighted_item.removeClass('toc-item-highlight-select').addClass('toc-item-highlight-execute');
        } else {
            $('.toc .toc-item-highlight-select').removeClass('toc-item-highlight-select');
            highlighted_item.addClass('toc-item-highlight-select');
        }
    }

    var create_navigate_menu = function (cfg, callback) {
        $('#kernel_menu').parent().after('<li id="Navigate"/>')
        $('#Navigate').addClass('dropdown').append($('<a/>').attr('href', '#').attr('id', 'Navigate_sub'))
        $('#Navigate_sub').text('Navigate').addClass('dropdown-toggle').attr('data-toggle', 'dropdown')
        $('#Navigate').append($('<ul/>').attr('id', 'Navigate_menu').addClass('dropdown-menu')
            .append($("<div/>").attr("id", "navigate_menu").addClass('toc')))

        if (cfg['nav_menu']) {
            $('#Navigate_menu').css(cfg['nav_menu'])
            $('#navigate_menu').css('width', $('#Navigate_menu').css('width'))
            $('#navigate_menu').css('height', $('#Navigate_menu').height())
        } else {
            cfg.nav_menu = {};
            events.on("before_save.Notebook",
                function () {
                    try {
                        cfg.nav_menu['width'] = $('#Navigate_menu').css('width')
                        cfg.nav_menu['height'] = $('#Navigate_menu').css('height')
                    } catch (e) {
                        console.log("[toc2] Error in metadata (navigation menu) - Proceeding", e)
                    }
                })
        }

        $('#Navigate_menu').resizable({
            resize: function (event, ui) {
                $('#navigate_menu').css('width', $('#Navigate_menu').css('width'))
                $('#navigate_menu').css('height', $('#Navigate_menu').height())
            },
            stop: function (event, ui) {
                cfg.nav_menu['width'] = $('#Navigate_menu').css('width')
                cfg.nav_menu['height'] = $('#Navigate_menu').css('height')
            }
        })

        callback && callback();
    }

    function setNotebookWidth(cfg, st) {
        var margin = 20;
        var nb_inner = $('#notebook-container');
        var nb_wrap_w = $('#notebook').width();
        var sidebar = $('#toc-wrapper');
        var visible_sidebar = cfg.sideBar && sidebar.is(':visible');
        var sidebar_w = visible_sidebar ? sidebar.outerWidth() : 0;
        var available_space = nb_wrap_w - 2 * margin - sidebar_w;
        var inner_css = { marginLeft: '', width: '' };
        if (cfg.widenNotebook) {
            inner_css.width = available_space;
        }
        if (visible_sidebar) {
            var nb_inner_w = nb_inner.outerWidth();
            inner_css.marginLeft = sidebar_w + margin; // shift notebook rightward to fit the sidebar in
            if (available_space <= nb_inner_w) {
                inner_css.width = available_space; // also slim notebook to fit sidebar
            }
        }
        nb_inner.css(inner_css);
    }

    var saveTocPosition = function () {
        var toc_wrapper = $('#toc-wrapper');
        var new_values = toc_wrapper.hasClass('sidebar-wrapper') ? ['width'] : ['left', 'top', 'height', 'width'];
        $.extend(toc_position, toc_wrapper.css(new_values));
        setMd('toc_position', toc_position);
    };

    var makeUnmakeMinimized = function (cfg, animate) {
        var open = cfg.sideBar || cfg.toc_section_display;
        var new_css, wrap = $('#toc-wrapper');
        var anim_opts = { duration: animate ? 'fast' : 0 };
        if (open) {
            $('#toc').show();
            new_css = cfg.sideBar ? {} : { height: toc_position.height, width: toc_position.width };
        }
        else {
            new_css = {
                height: wrap.outerHeight() - wrap.find('#toc').outerHeight(),
            };
            anim_opts.complete = function () {
                $('#toc').hide();
                $('#toc-wrapper').css('width', '');
            };
        }
        wrap.toggleClass('closed', !open)
            .animate(new_css, anim_opts)
            .find('.hide-btn').attr('title', open ? 'Hide ToC' : 'Show ToC');
        return open;
    };

    var makeUnmakeSidebar = function (cfg) {
        var make_sidebar = cfg.sideBar;
        var wrap = $('#toc-wrapper')
            .toggleClass('sidebar-wrapper', make_sidebar)
            .toggleClass('float-wrapper', !make_sidebar)
            .resizable('option', 'handles', make_sidebar ? 'e' : 'all');
        wrap.children('.ui-resizable-se').toggleClass('ui-icon', !make_sidebar);
        wrap.children('.ui-resizable-e').toggleClass('ui-icon ui-icon-grip-dotted-vertical', make_sidebar);
        if (make_sidebar) {
            var sidebar_top = liveNotebook ? document.getElementById('site').top : 0
            wrap.css({ top: sidebar_top, height: "", left: 0 });
        }
        else {
            wrap.css({ height: toc_position.height });
        }
        setNotebookWidth(cfg);
    };

    var create_toc_div = function (cfg, st) {

        var callbackPageResize = function (evt) {
            setNotebookWidth(cfg);
        };

        var toc_wrapper = $('<div id="toc-wrapper"/>')
            .css('display', 'none')
            .append(
                $('<div id="toc-header"/>')
                    .append('<span class="header"/>')
                    .append(
                        $('<i class="fa fa-fw hide-btn" title="Hide ToC">')
                            .on('click', function (evt) {
                                cfg.toc_section_display = setMd('toc_section_display', !cfg.toc_section_display);
                                makeUnmakeMinimized(cfg, true);
                            })
                    ).append(
                        $('<i class="fa fa-fw fa-refresh" title="Reload ToC">')
                            .on('click', function (evt) {
                                var icon = $(evt.currentTarget).addClass('fa-spin');
                                table_of_contents(cfg, st);
                                icon.removeClass('fa-spin');
                            })
                    ).append(
                        $('<i class="fa fa-fw fa-cog" title="ToC settings"/>')
                            .on('click', function (evt) {
                                show_settings_dialog(cfg, st);
                            })
                    )
            ).append(
                $("<div/>").attr("id", "toc").addClass('toc')
            )
            .prependTo(liveNotebook ? '#site' : document.body);

        d3.select('#toc').append('svg').attr('id', 'dagCanvas').attr('width', 300).attr('height', 300);

        // enable dragging and save position on stop moving
        toc_wrapper.draggable({
            drag: function (event, ui) {
                var make_sidebar = ui.position.left < 20; // 20 is snapTolerance
                if (make_sidebar) {
                    ui.position.top = liveNotebook ? document.getElementById('site').top : 0
                    ui.position.left = 0;
                }
                if (make_sidebar !== cfg.sideBar) {
                    cfg.toc_section_display = setMd('toc_section_display', true);
                    cfg.sideBar = setMd('sideBar', make_sidebar);
                    makeUnmakeMinimized(cfg);
                    makeUnmakeSidebar(cfg);
                }
            }, //end of drag function
            stop: saveTocPosition,
            containment: 'parent',
            snap: 'body, #site',
            snapTolerance: 20,
        });

        toc_wrapper.resizable({
            handles: 'all',
            resize: function (event, ui) {
                if (cfg.sideBar) {
                    // unset the height set by jquery resizable
                    $('#toc-wrapper').css('height', '');
                    setNotebookWidth(cfg, st)
                }
            },
            start: function (event, ui) {
                if (!cfg.sideBar) {
                    cfg.toc_section_display = setMd('toc_section_display', true);
                    makeUnmakeMinimized(cfg);
                }
            },
            stop: saveTocPosition,
            containment: 'parent',
            minHeight: 100,
            minWidth: 165,
        });

        // On header/menu/toolbar resize, resize the toc itself
        $(window).on('resize', callbackPageResize);
        if (liveNotebook) {
            events.on("resize-header.Page toggle-all-headers", callbackPageResize);
            $.extend(toc_position, IPython.notebook.metadata.toc.toc_position);
        }
        else {
            // default to true for non-live notebook
            cfg.toc_window_display = true;
        }
        // restore toc position at load
        toc_wrapper.css(cfg.sideBar ? { width: toc_position.width } : toc_position);
        // older toc2 versions stored string representations, so update those
        if (cfg.toc_window_display === 'none') {
            cfg.toc_window_display = setMd('toc_window_display', false);
        }
        if (cfg.toc_section_display === 'none') {
            cfg.toc_section_display = setMd('toc_section_display', false);
        }
        toc_wrapper.toggle(cfg.toc_window_display);
        makeUnmakeSidebar(cfg);
        $("#toc_button").toggleClass('active', cfg.toc_window_display);
        if (!cfg.toc_section_display) {
            makeUnmakeMinimized(cfg);
        }

    };

    //----------------------------------------------------------------------------
    // on scroll - mark the toc item corresponding to the first header visible in
    // the viewport with 'highlight_on_scroll' class
    // some elements from https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
    function highlightTocItemOnScroll(cfg, st) {
        if (cfg.markTocItemOnScroll) {
            var scrolling_elt = liveNotebook ? '#site' : window
            $(scrolling_elt).scroll(function () {
                var headerVisibleHeight = $('#header').is(':visible') ? $('#header').height() : 0
                var headerHeight = liveNotebook ? headerVisibleHeight : 0
                var bottom_of_screen = $(window).scrollTop() + $(scrolling_elt).height() + headerHeight;
                var top_of_screen = $(window).scrollTop() + headerHeight;
                //loop over all headers
                all_headers.each(function (i, h) {
                    var top_of_element = $(h).offset().top;

                    if ((bottom_of_screen > top_of_element) && (top_of_screen < top_of_element)) {
                        // The element is visible
                        var trg_id = $(h).attr('data-toc-modified-id')
                        if (trg_id !== undefined) {
                            var highlighted_item = $('#toc a').filter(function (idx, elt) {
                                return $(elt).attr('data-toc-modified-id') === trg_id;
                            });
                            $('#toc .highlight_on_scroll').removeClass('highlight_on_scroll')
                            highlighted_item.parent().addClass('highlight_on_scroll')
                        }
                        return false;
                    } else {
                        // The element is not visible
                        // If the current header is already below the viewport then break
                        if (bottom_of_screen < top_of_element) return false
                        else return
                    }
                })
            });
        }
    }
    //----------------------------------------------------------------------------
    // TOC CELL -- if cfg.toc_cell=true, add and update a toc cell in the notebook.
    //             This cell, initially at the very beginning, can be moved.
    //             Its contents are automatically updated.
    //             Optionnaly, the sections in the toc can be numbered.

    function process_cell_toc(cfg, st) {
        // var new_html = '<h1>' +
        //     $('<div>').text(cfg.title_cell).html() + '<span class="tocSkip"></span></h1>\n' +
        //     '<div class="toc">' +
        //     $('#toc').html() +
        //     '</div>';
        var new_html = '<div><p>MMDMFDF</p><svg "width"=900 "height"=400></svg></div>';

        if (!liveNotebook) {
            if (cfg.toc_cell) {
                $('.cell > .toc').parent(':has(.tocSkip)')
                    .html(new_html)
                    .find('.toc-item li a')
                    .on('click', callback_toc_link_click);
            }
            return;
        }
        var cell_toc;
        // look for a possible toc cell
        var cells = IPython.notebook.get_cells();
        var lcells = cells.length;
        for (var i = 0; i < lcells; i++) {
            if (cells[i].metadata.toc) {
                // delete if we don't want it
                if (!cfg.toc_cell) {
                    return IPython.notebook.delete_cell(i);
                }
                cell_toc = cells[i];
                break;
            }
        }
        //if toc_cell=true, we want a cell_toc.
        //  If it does not exist, create it at the beginning of the notebook
        if (cfg.toc_cell) {
            if (cell_toc === undefined) {
                // set rendering_toc_cell flag to avoid loop on insert_cell_above
                rendering_toc_cell = true;
                cell_toc = IPython.notebook.insert_cell_above('markdown', 0);
                cell_toc.metadata.toc = true;
                rendering_toc_cell = false;
            }
            // set rendering_toc_cell flag to avoid loop on render            
            rendering_toc_cell = true;
            cell_toc.set_text(new_html);
            cell_toc.render();
            rendering_toc_cell = false;
            cell_toc.element.find('.toc-item li a').on('click', callback_toc_link_click);
        }
    } //end function process_cell_toc --------------------------

    var collapse_by_id = function (trg_id, show, trigger_event) {
        var anchors = $('.toc .toc-item > li > span > a').filter(function (idx, elt) {
            return $(elt).attr('data-toc-modified-id') === trg_id;
        });
        anchors.siblings('i')
            .toggleClass('fa-caret-right', !show)
            .toggleClass('fa-caret-down', show);
        anchors.parent().siblings('ul')[show ? 'slideDown' : 'slideUp']('fast');
        if (trigger_event !== false) {
            // fire event for collapsible_heading to catch
            var cell = $(document.getElementById(trg_id)).closest('.cell').data('cell');
            events.trigger((show ? 'un' : '') + 'collapse.Toc', {
                cell: cell
            });
        }
    };

    var callback_toc2_collapsible_headings = function (evt, data) {
        var trg_id = data.cell.element.find(':header').filter(function (idx, elt) {
            return Boolean($(elt).attr('data-toc-modified-id'));
        }).attr('data-toc-modified-id');
        var show = evt.type.indexOf('un') >= 0;
        // use trigger_event false to avoid re-triggering collapsible_headings
        collapse_by_id(trg_id, show, false);
    };

    var callback_collapser = function (evt) {
        var clicked_i = $(evt.currentTarget);
        var trg_id = clicked_i.siblings('a').attr('data-toc-modified-id');
        var show = clicked_i.hasClass('fa-caret-right');
        collapse_by_id(trg_id, show);
    };

    // Table of Contents =================================================================
    var table_of_contents = function (cfg, st) {

        // if this call is a result of toc_cell rendering, do nothing to avoid
        // looping, as we're already in a table_of_contents call
        if (rendering_toc_cell) {
            return
        }

        // In a live notebook, read_config will have been called already, but
        // in non-live notebooks, ensure that all config values are defined.
        if (!liveNotebook) {
            cfg = $.extend(true, {}, default_cfg, cfg);
        }

        var toc_wrapper = $("#toc-wrapper");
        if (toc_wrapper.length === 0) { // toc window doesn't exist at all
            create_toc_div(cfg, st); // create it
            highlightTocItemOnScroll(cfg, st); // initialize highlighting on scroll
        }
        // var ul = $('<ul/>').addClass('toc-item');

        // // update sidebar/window title
        // //$('#toc-header > .header').text(cfg.title_sidebar + ' ');
        // $('#toc-header > .header').text('Widgets' + ' ');

        // // update toc element
        // $("#toc").empty().append(ul);
        // var depth = 1;

        // update all headers with id that are in rendered text cell outputs,
        // excepting any header which contains an html tag with class 'tocSkip'
        // eg in ## title <a class='tocSkip'>,
        // or the ToC cell.
        all_headers = $('.text_cell_render').find('[id]:header:not(:has(.tocSkip))');

        //
        var min_lvl = 1 + Number(Boolean(cfg.skip_h1_title)),
            lbl_ary = [];
        for (; min_lvl <= 6; min_lvl++) {
            if (all_headers.is('h' + min_lvl)) {
                break;
            }
        }
        lbl_ary[0] = cfg.base_numbering - 1 // begin numbering at base_numbering
        for (var i = min_lvl + 1; i <= 6; i++) {
            lbl_ary[i - min_lvl] = 0;
        }

        //
        //parse dag
        var dags = {};
        all_headers.each(function (i, h) {
            var espec = h.id.split(':');
            var dagID = espec[0];
            if (!(dagID in dags)) {
                dags[dagID] = { 'nodes': new Set(), 'edges': new Set(), 'obj': [] };
            }
            //add node            
            var nodeName = espec[1];
            dags[dagID].nodes.add(nodeName);
            var parents = espec[2].length > 0 ? espec[2].split(',') : undefined;
            if (parents) {
                parents.forEach(function (parent) {
                    dags[dagID].edges.add([parent, nodeName]);
                });
            }
            else {
                parents = [];
            }
            dags[dagID].obj.push({ 'id': nodeName, 'parentIds': parents })
        });

        if (Object.keys(dags).length > 0) {
            var dagID = Object.keys(dags)[0];
            const dag = d3.dagStratify()(dags[dagID].obj);
            const nodeRadius = 20;

            const layout = d3
                .sugiyama() // base layout
                .decross(d3.decrossOpt()) // minimize number of crossings
                .nodeSize((node) => [(node ? 3.6 : 0.25) * nodeRadius, 3 * nodeRadius]); // set node size instead of constraining to fit

            const { width, height } = layout(dag);

            //
            const line = d3
                .line()
                .curve(d3.curveCatmullRom)
                .x((d) => d.x)
                .y((d) => d.y);

            // Plot edges
            const edgeGroup = d3.select('#dagCanvas').select('.edgeGroup').node()
                ? d3.select('#dagCanvas').select('.edgeGroup')
                : d3.select('#dagCanvas').append('g')
                    .attr('class', 'edgeGroup');
            edgeGroup.select('*').remove();
            edgeGroup
                .selectAll("path")
                .data(dag.links())
                .join("path")
                .attr("d", ({ points }) => line(points))
                .attr('id', d => 'eS' + d.source.data.id + 'T' + d.target.data.id)
                .attr("fill", "none")
                .attr("stroke-width", 3)
                .attr("stroke", 'black');
            //plot nodes
            const nodeGroup = d3.select('#dagCanvas').select('.nodeGroup').node()
                ? d3.select('#dagCanvas').select('.nodeGroup')
                : d3.select('#dagCanvas').append('g')
                    .attr('class', 'nodeGroup');

            nodeGroup.selectAll('*').remove();
            const nodes = nodeGroup
                .selectAll("g")
                .data(dag.descendants())
                .enter()
                .append("g")
                .attr('id', d => 'nD' + dagID + 'N' + d.data.id)
                .attr("transform", ({ x, y }) => `translate(${x}, ${y})`);

            // Plot node circles
            nodes
                .append("circle")
                .attr("r", nodeRadius)
                .attr("fill", 'white')
                .attr("stroke", 'black');

            // Add text to nodes
            nodes
                .append("text")
                .text((d) => d.data.id)
                .attr("font-weight", "bold")
                .attr("font-family", "sans-serif")
                .attr("text-anchor", "middle")
                .attr("alignment-baseline", "middle")
                .attr("fill", "black");
        }
        else {
            console.log('dag empty');
        }

        // //loop over all headers
        // all_headers.each(function (i, h) {
        //     // remove pre-existing number
        //     $(h).children('.toc-item-num').remove();

        //     var level = parseInt(h.tagName.slice(1), 10) - min_lvl + 1;
        //     // skip below threshold, or h1 ruled out by cfg.skip_h1_title
        //     if (level < 1 || level > cfg.threshold) {
        //         return;
        //     }
        //     h = $(h);
        //     // numbered heading labels
        //     var num_str = incr_lbl(lbl_ary, level - 1).join('.');
        //     if (cfg.number_sections) {
        //         $('<span>')
        //             .text(num_str + '\u00a0\u00a0')
        //             .addClass('toc-item-num')
        //             .prependTo(h);
        //     }

        //     // walk down levels
        //     for (; depth < level; depth++) {
        //         var li = ul.children('li:last-child');
        //         if (li.length < 1) {
        //             li = $('<li>').appendTo(ul);
        //         }
        //         ul = $('<ul class="toc-item">').appendTo(li);
        //     }
        //     // walk up levels
        //     for (; depth > level; depth--) {
        //         ul = ul.parent().closest('.toc-item');
        //     }

        //     var toc_mod_id = h.attr('id') + '-' + num_str;
        //     h.attr('data-toc-modified-id', toc_mod_id);
        //     // add an anchor with modified id (if it doesn't already exist)
        //     h.children('.toc-mod-link').remove();
        //     $('<a>').addClass('toc-mod-link').attr('id', toc_mod_id).prependTo(h);

        //     // Create toc entry, append <li> tag to the current <ol>.
        //     ul.append(
        //         $('<li>').append(
        //             $('<span>').append(
        //                 make_link(h, toc_mod_id))));
        // });

        // // update navigation menu
        // if (cfg.navigate_menu) {
        //     var pop_nav = function () { //callback for create_nav_menu
        //         $('#navigate_menu').empty().append($('#toc > .toc-item').clone());
        //     }
        //     if ($('#Navigate_menu').length == 0) {
        //         create_navigate_menu((liveNotebook ? IPython.notebook.metadata.toc : cfg), pop_nav);
        //     } else {
        //         pop_nav()
        //     }
        // } else { // If navigate_menu is false but the menu already exists, then remove it
        //     if ($('#Navigate_menu').length > 0) $('#Navigate_sub').remove()
        // }

        // // if cfg.toc_cell=true, find/add and update a toc cell in the notebook.
        // process_cell_toc(cfg, st);

        // // add collapse controls
        // $('<i>')
        //     .addClass('fa fa-fw fa-caret-down')
        //     .on('click', callback_collapser) // callback
        //     .prependTo('.toc li:has(ul) > span'); // only if li has descendants
        // $('<i>').addClass('fa fa-fw ').prependTo('.toc li:not(:has(ul)) > span'); // otherwise still add <i> to keep things aligned

        // events[cfg.collapse_to_match_collapsible_headings ? 'on' : 'off'](
        //     'collapse.CollapsibleHeading uncollapse.CollapsibleHeading', callback_toc2_collapsible_headings);
    };

    var toggle_toc = function (cfg, st) {
        // toggle draw (first because of first-click behavior)
        var wrap = $("#toc-wrapper");
        var show = wrap.is(':hidden');
        wrap.toggle(show);
        cfg['toc_window_display'] = setMd('toc_window_display', show);
        setNotebookWidth(cfg);
        table_of_contents(cfg);
        $("#toc_button").toggleClass('active', show);
    };

    var show_settings_dialog = function (cfg, st) {

        var callback_setting_change = function (evt) {
            var input = $(evt.currentTarget);
            var md_key = input.attr('tocMdKey');
            cfg[md_key] = setMd(md_key, input.attr('type') == 'checkbox' ? Boolean(input.prop('checked')) : input.val());
            table_of_contents(cfg, st);
        };
        var build_setting_input = function (md_key, md_label, input_type) {
            var opts = liveNotebook ? IPython.notebook.metadata.toc : cfg;
            var id = 'toc-settings-' + md_key;
            var fg = $('<div>').append(
                $('<label>').text(md_label).attr('for', id));
            var input = $('<input/>').attr({
                type: input_type || 'text', id: id, tocMdKey: md_key,
            }).on('change', callback_setting_change);
            if (input_type == 'checkbox') {
                fg.addClass('checkbox');
                input
                    .prop('checked', opts[md_key])
                    .prependTo(fg.children('label'));
            }
            else {
                fg.addClass('form-group');
                input
                    .addClass('form-control')
                    .val(opts[md_key])
                    .appendTo(fg);
            }
            return fg;
        };

        var modal = $('<div class="modal fade" role="dialog"/>');
        var dialog_content = $("<div/>")
            .addClass("modal-content")
            .appendTo($('<div class="modal-dialog">').appendTo(modal));
        $('<div class="modal-header">')
            .append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>')
            .append('<h4 class="modal-title">ToC2 settings</h4>')
            .on('mousedown', function () { $('.modal').draggable({ handle: '.modal-header' }); })
            .appendTo(dialog_content);
        $('<div>')
            .addClass('modal-body')
            .append([
                $('<div>').text(
                    'These settings apply to this notebook only, and are stored in its metadata. ' +
                        liveNotebook ? 'The defaults for new notebooks can be edited from the nbextensions configurator.' :
                        'The settings won\'t persist in non-live notebooks though.'),
                build_setting_input('number_sections', 'Automatically number headings', 'checkbox'),
                build_setting_input('skip_h1_title', 'Leave h1 items out of ToC', 'checkbox'),
                build_setting_input('base_numbering', 'Begin numbering at'),
                build_setting_input('toc_cell', 'Add notebook ToC cell', 'checkbox'),
                build_setting_input('title_cell', 'ToC cell title'),
                build_setting_input('title_sidebar', 'Sidebar/window title'),
                build_setting_input('sideBar', 'Display as a sidebar (otherwise as a floating window)', 'checkbox'),
                build_setting_input('toc_window_display', 'Display ToC window/sidebar at startup', 'checkbox'),
                build_setting_input('toc_section_display', 'Expand window/sidebar at startup', 'checkbox'),
            ])
            .appendTo(dialog_content);
        $('<div class="modal-footer">')
            .append('<button class="btn btn-default btn-sm btn-primary" data-dismiss="modal">Ok</button>')
            .appendTo(dialog_content);
        // focus button on open
        modal.on('shown.bs.modal', function () {
            setTimeout(function () {
                dialog_content.find('.modal-footer button').last().focus();
            }, 0);
        });

        if (liveNotebook) {
            Jupyter.notebook.keyboard_manager.disable();
            modal.on('hidden.bs.modal', function () {
                modal.remove(); // destroy modal on hide
                Jupyter.notebook.keyboard_manager.enable();
                Jupyter.notebook.keyboard_manager.command_mode();
                var cell = Jupyter.notebook.get_selected_cell();
                if (cell) cell.select();
            });
        }

        // Try to use bootstrap modal, but bootstrap's js may not be available
        // (e.g. as in non-live notebook), so we provide a poor-man's version
        try {
            return modal.modal({ backdrop: 'static' });
        }
        catch (err) {
            // show the backdrop
            $(document.body).addClass('modal-open');
            var $backdrop = $('<div class="modal-backdrop fade">').appendTo($(document.body));
            $backdrop[0].offsetWidth; // force reflow
            $backdrop.addClass('in');
            // hook up removals
            modal.on('click', '[data-dismiss="modal"]', function modal_close() {
                // hide the modal foreground
                modal.removeClass('in');
                setTimeout(function on_foreground_hidden() {
                    modal.remove();
                    // now hide the backdrop
                    $backdrop.removeClass('in');
                    // wait for transition
                    setTimeout(function on_backdrop_hidden() {
                        $(document.body).removeClass('modal-open');
                        $backdrop.remove();
                    }, 150);
                }, 300);
            });
            // wait for transition
            setTimeout(function () {
                // now show the modal foreground
                modal.appendTo(document.body).show().scrollTop(0);
                modal[0].offsetWidth; // force reflow
                modal.addClass('in');
                // wait for transition, then trigger callbacks
                setTimeout(function on_foreground_shown() {
                    modal.trigger('shown.bs.modal');
                }, 300);
            }, 150);
            return modal;
        }
    };

    return {
        highlight_toc_item: highlight_toc_item,
        table_of_contents: table_of_contents,
        toggle_toc: toggle_toc,
        read_config: read_config,
    };
});
// export table_of_contents to global namespace for backwards compatibility
// Do export synchronously, so that it's defined as soon as this file is loaded
if (!requirejs.specified('base/js/namespace')) {
    window.table_of_contents = function (cfg, st) {
        "use strict";
        // use require to ensure the module is correctly loaded before the
        // actual call is made
        requirejs(['nbextensions/toc2/toc2'], function (toc2) {
            toc2.table_of_contents(cfg, st);
        });
    };
}
