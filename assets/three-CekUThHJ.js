const fg = 1; const pg = 0, mg = 1, gg = 2, _g = 0; const xg = 5; const vg = 102; const yg = 201; const Mg = 1, Sg = 2, bg = 3, Eg = 4; const Tg = 0; const Ag = 4; const Ca = "attached", Xl = "detached"; const wg = 306, Rg = 1e3, Cg = 1001, Ig = 1002, Pg = 1003, Lg = 1004, Dg = 1005, Ug = 1006, Ng = 1007, Fg = 1008, Bg = 1009; const Og = 1014, zg = 1015, Vg = 1016; const Gg = 1020, kg = 35902, Hg = 35899; const Wg = 1022, Xg = 1023; const qg = 1027, Yg = 1028; const Jg = 1030; const $g = 33776, Zg = 33777, Kg = 33778, Qg = 33779, jg = 35840; const e_ = 35842, t_ = 35843, n_ = 36196, i_ = 37492, r_ = 37496, s_ = 37808; const a_ = 37812; const o_ = 36492; const l_ = 36495, c_ = 36283, h_ = 36284, u_ = 36285, d_ = 36286, f_ = 2300, p_ = 2301; const m_ = 0, g_ = 1, __ = 2, x_ = 3200, v_ = 3201; const y_ = "", kt = "srgb", hi = "srgb-linear", Br = "linear", rt = "srgb"; const M_ = 515; const Ia = "300 es"; class mi { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { const n = this._listeners; return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { const n = this._listeners; if (n === void 0) return; const i = n[e]; if (i !== void 0) { const s = i.indexOf(t); s !== -1 && i.splice(s, 1) } } dispatchEvent(e) { const t = this._listeners; if (t === void 0) return; const n = t[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let s = 0, a = i.length; s < a; s++)i[s].call(this, e); e.target = null } } } const Mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let Pa = 1234567; const li = Math.PI / 180, ui = 180 / Math.PI; function Ht() { const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (Mt[r & 255] + Mt[r >> 8 & 255] + Mt[r >> 16 & 255] + Mt[r >> 24 & 255] + "-" + Mt[e & 255] + Mt[e >> 8 & 255] + "-" + Mt[e >> 16 & 15 | 64] + Mt[e >> 24 & 255] + "-" + Mt[t & 63 | 128] + Mt[t >> 8 & 255] + "-" + Mt[t >> 16 & 255] + Mt[t >> 24 & 255] + Mt[n & 255] + Mt[n >> 8 & 255] + Mt[n >> 16 & 255] + Mt[n >> 24 & 255]).toLowerCase() } function We(r, e, t) { return Math.max(e, Math.min(t, r)) } function Ws(r, e) { return (r % e + e) % e } function ql(r, e, t, n, i) { return n + (r - e) * (i - n) / (t - e) } function Yl(r, e, t) { return r !== e ? (t - r) / (e - r) : 0 } function Bi(r, e, t) { return (1 - t) * r + t * e } function Jl(r, e, t, n) { return Bi(r, e, 1 - Math.exp(-t * n)) } function $l(r, e = 1) { return e - Math.abs(Ws(r, e * 2) - e) } function Zl(r, e, t) { return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r)) } function Kl(r, e, t) { return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10)) } function Ql(r, e) { return r + Math.floor(Math.random() * (e - r + 1)) } function jl(r, e) { return r + Math.random() * (e - r) } function ec(r) { return r * (.5 - Math.random()) } function tc(r) { r !== void 0 && (Pa = r); let e = Pa += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function nc(r) { return r * li } function ic(r) { return r * ui } function rc(r) { return (r & r - 1) === 0 && r !== 0 } function sc(r) { return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2)) } function ac(r) { return Math.pow(2, Math.floor(Math.log(r) / Math.LN2)) } function oc(r, e, t, n, i) { const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), f = s((n - e) / 2), g = a((n - e) / 2); switch (i) { case "XYX": r.set(o * h, l * u, l * d, o * c); break; case "YZY": r.set(l * d, o * h, l * u, o * c); break; case "ZXZ": r.set(l * u, l * d, o * h, o * c); break; case "XZX": r.set(o * h, l * g, l * f, o * c); break; case "YXY": r.set(l * f, o * h, l * g, o * c); break; case "ZYZ": r.set(l * g, l * f, o * h, o * c); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i) } } function Jt(r, e) { switch (e.constructor) { case Float32Array: return r; case Uint32Array: return r / 4294967295; case Uint16Array: return r / 65535; case Uint8Array: return r / 255; case Int32Array: return Math.max(r / 2147483647, -1); case Int16Array: return Math.max(r / 32767, -1); case Int8Array: return Math.max(r / 127, -1); default: throw new Error("Invalid component type.") } } function tt(r, e) { switch (e.constructor) { case Float32Array: return r; case Uint32Array: return Math.round(r * 4294967295); case Uint16Array: return Math.round(r * 65535); case Uint8Array: return Math.round(r * 255); case Int32Array: return Math.round(r * 2147483647); case Int16Array: return Math.round(r * 32767); case Int8Array: return Math.round(r * 127); default: throw new Error("Invalid component type.") } } const S_ = { DEG2RAD: li, RAD2DEG: ui, generateUUID: Ht, clamp: We, euclideanModulo: Ws, mapLinear: ql, inverseLerp: Yl, lerp: Bi, damp: Jl, pingpong: $l, smoothstep: Zl, smootherstep: Kl, randInt: Ql, randFloat: jl, randFloatSpread: ec, seededRandom: tc, degToRad: nc, radToDeg: ic, isPowerOfTwo: rc, ceilPowerOfTwo: sc, floorPowerOfTwo: ac, setQuaternionFromProperEuler: oc, normalize: tt, denormalize: Jt }; class Q { constructor(e = 0, t = 0) { Q.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x, n = this.y, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = We(this.x, e.x, t.x), this.y = We(this.y, e.y, t.y), this } clampScalar(e, t) { return this.x = We(this.x, e, t), this.y = We(this.y, e, t), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(We(n, e, t)) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(We(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y; return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class gi { constructor(e = 0, t = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i } static slerpFlat(e, t, n, i, s, a, o) { let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3]; const d = s[a + 0], f = s[a + 1], g = s[a + 2], _ = s[a + 3]; if (o === 0) { e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u; return } if (o === 1) { e[t + 0] = d, e[t + 1] = f, e[t + 2] = g, e[t + 3] = _; return } if (u !== _ || l !== d || c !== f || h !== g) { let m = 1 - o; const p = l * d + c * f + h * g + u * _, M = p >= 0 ? 1 : -1, v = 1 - p * p; if (v > Number.EPSILON) { const w = Math.sqrt(v), T = Math.atan2(w, p * M); m = Math.sin(m * T) / w, o = Math.sin(o * T) / w } const x = o * M; if (l = l * m + d * x, c = c * m + f * x, h = h * m + g * x, u = u * m + _ * x, m === 1 - o) { const w = 1 / Math.sqrt(l * l + c * c + h * h + u * u); l *= w, c *= w, h *= w, u *= w } } e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u } static multiplyQuaternionsFlat(e, t, n, i, s, a) { const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], f = s[a + 2], g = s[a + 3]; return e[t] = o * g + h * u + l * f - c * d, e[t + 1] = l * g + h * d + c * u - o * f, e[t + 2] = c * g + h * f + o * d - l * u, e[t + 3] = h * g - o * u - l * d - c * f, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(s / 2), d = l(n / 2), f = l(i / 2), g = l(s / 2); switch (a) { case "XYZ": this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g; break; case "YXZ": this._x = d * h * u + c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g; break; case "ZXY": this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u - d * f * g; break; case "ZYX": this._x = d * h * u - c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u + d * f * g; break; case "YZX": this._x = d * h * u + c * f * g, this._y = c * f * u + d * h * g, this._z = c * h * g - d * f * u, this._w = c * h * u - d * f * g; break; case "XZY": this._x = d * h * u - c * f * g, this._y = c * f * u - d * h * g, this._z = c * h * g + d * f * u, this._w = c * h * u + d * f * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a) }return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n = t / 2, i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u; if (d > 0) { const f = .5 / Math.sqrt(d + 1); this._w = .25 / f, this._x = (h - l) * f, this._y = (s - c) * f, this._z = (a - i) * f } else if (n > o && n > u) { const f = 2 * Math.sqrt(1 + n - o - u); this._w = (h - l) / f, this._x = .25 * f, this._y = (i + a) / f, this._z = (s + c) / f } else if (o > u) { const f = 2 * Math.sqrt(1 + o - n - u); this._w = (s - c) / f, this._x = (i + a) / f, this._y = .25 * f, this._z = (l + h) / f } else { const f = 2 * Math.sqrt(1 + u - n - o); this._w = (a - i) / f, this._x = (s + c) / f, this._y = (l + h) / f, this._z = .25 * f } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(We(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w; return this._x = n * h + a * o + i * c - s * l, this._y = i * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - s * c, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x, i = this._y, s = this._z, a = this._w; let o = a * e._w + n * e._x + i * e._y + s * e._z; if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = s, this; const l = 1 - o * o; if (l <= Number.EPSILON) { const f = 1 - t; return this._w = f * a + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this } const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c; return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n); return this.set(i * Math.sin(e), i * Math.cos(e), s * Math.sin(t), s * Math.cos(t)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class R { constructor(e = 0, t = 0, n = 0) { R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(La.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(La.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t = this.x, n = this.y, i = this.z, s = e.elements; return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]); return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this } applyQuaternion(e) { const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t); return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - s * u, this.z = i + l * u + s * h - a * c, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const t = this.x, n = this.y, i = this.z, s = e.elements; return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = We(this.x, e.x, t.x), this.y = We(this.y, e.y, t.y), this.z = We(this.z, e.z, t.z), this } clampScalar(e, t) { return this.x = We(this.x, e, t), this.y = We(this.y, e, t), this.z = We(this.z, e, t), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(We(n, e, t)) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z; return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return Kr.copy(this).projectOnVector(e), this.sub(Kr) } reflect(e) { return this.sub(Kr.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(We(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z; return t * t + n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t); return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const Kr = new R, La = new gi; class Ge { constructor(e, t, n, i, s, a, o, l, c) { Ge.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c) } set(e, t, n, i, s, a, o, l, c) { const h = this.elements; return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], _ = i[0], m = i[3], p = i[6], M = i[1], v = i[4], x = i[7], w = i[2], T = i[5], C = i[8]; return s[0] = a * _ + o * M + l * w, s[3] = a * m + o * v + l * T, s[6] = a * p + o * x + l * C, s[1] = c * _ + h * M + u * w, s[4] = c * m + h * v + u * T, s[7] = c * p + h * x + u * C, s[2] = d * _ + f * M + g * w, s[5] = d * m + f * v + g * T, s[8] = d * p + f * x + g * C, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8]; return t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * s, f = c * s - a * l, g = t * u + n * d + i * f; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const _ = 1 / g; return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * s - o * t) * _, e[6] = f * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * s) * _, this } transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, i, s, a, o) { const l = Math.cos(s), c = Math.sin(s); return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(Qr.makeScale(e, t)), this } rotate(e) { return this.premultiply(Qr.makeRotation(-e)), this } translate(e, t) { return this.premultiply(Qr.makeTranslation(e, t)), this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e, t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } } const Qr = new Ge; function il(r) { for (let e = r.length - 1; e >= 0; --e)if (r[e] >= 65535) return !0; return !1 } const lc = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array }; function ai(r, e) { return new lc[r](e) } function Vi(r) { return document.createElementNS("http://www.w3.org/1999/xhtml", r) } function cc() { const r = Vi("canvas"); return r.style.display = "block", r } const Da = {}; function Gi(r) { r in Da || (Da[r] = !0, console.warn(r)) } function hc(r, e, t) { return new Promise(function (n, i) { function s() { switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) { case r.WAIT_FAILED: i(); break; case r.TIMEOUT_EXPIRED: setTimeout(s, t); break; default: n() } } setTimeout(s, t) }) } const Ua = new Ge().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Na = new Ge().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715); function uc() { const r = { enabled: !0, workingColorSpace: hi, spaces: {}, convert: function (i, s, a) { return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === rt && (i.r = fn(i.r), i.g = fn(i.g), i.b = fn(i.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[s].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === rt && (i.r = ci(i.r), i.g = ci(i.g), i.b = ci(i.b))), i }, workingToColorSpace: function (i, s) { return this.convert(i, this.workingColorSpace, s) }, colorSpaceToWorking: function (i, s) { return this.convert(i, s, this.workingColorSpace) }, getPrimaries: function (i) { return this.spaces[i].primaries }, getTransfer: function (i) { return i === "" ? Br : this.spaces[i].transfer }, getToneMappingMode: function (i) { return this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard" }, getLuminanceCoefficients: function (i, s = this.workingColorSpace) { return i.fromArray(this.spaces[s].luminanceCoefficients) }, define: function (i) { Object.assign(this.spaces, i) }, _getMatrix: function (i, s, a) { return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ) }, _getDrawingBufferColorSpace: function (i) { return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace }, _getUnpackColorSpace: function (i = this.workingColorSpace) { return this.spaces[i].workingColorSpaceConfig.unpackColorSpace }, fromWorkingColorSpace: function (i, s) { return Gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), r.workingToColorSpace(i, s) }, toWorkingColorSpace: function (i, s) { return Gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), r.colorSpaceToWorking(i, s) } }, e = [.64, .33, .3, .6, .15, .06], t = [.2126, .7152, .0722], n = [.3127, .329]; return r.define({ [hi]: { primaries: e, whitePoint: n, transfer: Br, toXYZ: Ua, fromXYZ: Na, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: kt }, outputColorSpaceConfig: { drawingBufferColorSpace: kt } }, [kt]: { primaries: e, whitePoint: n, transfer: rt, toXYZ: Ua, fromXYZ: Na, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: kt } } }), r } const Ze = uc(); function fn(r) { return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4) } function ci(r) { return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055 } let Gn; class dc { static getDataURL(e, t = "image/png") { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let n; if (e instanceof HTMLCanvasElement) n = e; else { Gn === void 0 && (Gn = Vi("canvas")), Gn.width = e.width, Gn.height = e.height; const i = Gn.getContext("2d"); e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = Gn } return n.toDataURL(t) } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const t = Vi("canvas"); t.width = e.width, t.height = e.height; const n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height), s = i.data; for (let a = 0; a < s.length; a++)s[a] = fn(s[a] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(fn(t[n] / 255) * 255) : t[n] = fn(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } let fc = 0; class Nn { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: fc++ }), this.uuid = Ht(), this.data = e, this.dataReady = !0, this.version = 0 } getSize(e) { const t = this.data; return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) { let s; if (Array.isArray(i)) { s = []; for (let a = 0, o = i.length; a < o; a++)i[a].isDataTexture ? s.push(jr(i[a].image)) : s.push(jr(i[a])) } else s = jr(i); n.url = s } return t || (e.images[this.uuid] = n), n } } function jr(r) { return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? dc.getDataURL(r) : r.data ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let pc = 0; const es = new R; class gt extends mi { constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = gt.DEFAULT_ANISOTROPY, h = "") { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: pc++ }), this.uuid = Ht(), this.name = "", this.source = new Nn(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Q(0, 0), this.repeat = new Q(1, 1), this.center = new Q(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ge, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0 } get width() { return this.source.getSize(es).x } get height() { return this.source.getSize(es).y } get depth() { return this.source.getSize(es).z } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } setValues(e) { for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`); continue } const i = this[t]; if (i === void 0) { console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`); continue } i && n && i.isVector2 && n.isVector2 || i && n && i.isVector3 && n.isVector3 || i && n && i.isMatrix3 && n.isMatrix3 ? i.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== 300) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case 1e3: e.x = e.x - Math.floor(e.x); break; case 1001: e.x = e.x < 0 ? 0 : 1; break; case 1002: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case 1e3: e.y = e.y - Math.floor(e.y); break; case 1001: e.y = e.y < 0 ? 0 : 1; break; case 1002: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate(e) { e === !0 && this.pmremVersion++ } } gt.DEFAULT_IMAGE = null; gt.DEFAULT_MAPPING = 300; gt.DEFAULT_ANISOTROPY = 1; class Qe { constructor(e = 0, t = 0, n = 0, i = 1) { Qe.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements; return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, i, s; const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], g = l[9], _ = l[2], m = l[6], p = l[10]; if (Math.abs(h - d) < .01 && Math.abs(u - _) < .01 && Math.abs(g - m) < .01) { if (Math.abs(h + d) < .1 && Math.abs(u + _) < .1 && Math.abs(g + m) < .1 && Math.abs(c + f + p - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; const v = (c + 1) / 2, x = (f + 1) / 2, w = (p + 1) / 2, T = (h + d) / 4, C = (u + _) / 4, P = (g + m) / 4; return v > x && v > w ? v < .01 ? (n = 0, i = .707106781, s = .707106781) : (n = Math.sqrt(v), i = T / n, s = C / n) : x > w ? x < .01 ? (n = .707106781, i = 0, s = .707106781) : (i = Math.sqrt(x), n = T / i, s = P / i) : w < .01 ? (n = .707106781, i = .707106781, s = 0) : (s = Math.sqrt(w), n = C / s, i = P / s), this.set(n, i, s, t), this } let M = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h)); return Math.abs(M) < .001 && (M = 1), this.x = (m - g) / M, this.y = (u - _) / M, this.z = (d - h) / M, this.w = Math.acos((c + f + p - 1) / 2), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = We(this.x, e.x, t.x), this.y = We(this.y, e.y, t.y), this.z = We(this.z, e.z, t.z), this.w = We(this.w, e.w, t.w), this } clampScalar(e, t) { return this.x = We(this.x, e, t), this.y = We(this.y, e, t), this.z = We(this.z, e, t), this.w = We(this.w, e, t), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(We(n, e, t)) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class mc extends mi { constructor(e = 1, t = 1, n = {}) { super(), n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: 1006, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: !1 }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Qe(0, 0, e, t), this.scissorTest = !1, this.viewport = new Qe(0, 0, e, t); const i = { width: e, height: t, depth: n.depth }, s = new gt(i); this.textures = []; const a = n.count; for (let o = 0; o < a; o++)this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this; this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview } _setTextureOptions(e = {}) { const t = { minFilter: 1006, generateMipmaps: !1, flipY: !1, internalFormat: null }; e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat); for (let n = 0; n < this.textures.length; n++)this.textures[n].setValues(t) } get texture() { return this.textures[0] } set texture(e) { this.textures[0] = e } set depthTexture(e) { this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e } get depthTexture() { return this._depthTexture } setSize(e, t, n = 1) { if (this.width !== e || this.height !== t || this.depth !== n) { this.width = e, this.height = t, this.depth = n; for (let i = 0, s = this.textures.length; i < s; i++)this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n, this.textures[i].isArrayTexture = this.textures[i].image.depth > 1; this.dispose() } this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0; for (let t = 0, n = e.textures.length; t < n; t++) { this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this; const i = Object.assign({}, e.textures[t].image); this.textures[t].source = new Nn(i) } return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class Fn extends mc { constructor(e = 1, t = 1, n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } } class rl extends gt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set } addLayerUpdate(e) { this.layerUpdates.add(e) } clearLayerUpdates() { this.layerUpdates.clear() } } class gc extends gt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class Dt { constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(Xt.fromArray(e, t)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++)this.expandByPoint(Xt.fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = Xt.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0) { const s = n.getAttribute("position"); if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0) for (let a = 0, o = s.count; a < o; a++)e.isMesh === !0 ? e.getVertexPosition(a, Xt) : Xt.fromBufferAttribute(s, a), Xt.applyMatrix4(e.matrixWorld), this.expandByPoint(Xt); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ki.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ki.copy(n.boundingBox)), Ki.applyMatrix4(e.matrixWorld), this.union(Ki) } const i = e.children; for (let s = 0, a = i.length; s < a; s++)this.expandByObject(i[s], t); return this } containsPoint(e) { return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z } intersectsSphere(e) { return this.clampPoint(e.center, Xt), Xt.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(Si), Qi.subVectors(this.max, Si), kn.subVectors(e.a, Si), Hn.subVectors(e.b, Si), Wn.subVectors(e.c, Si), pn.subVectors(Hn, kn), mn.subVectors(Wn, Hn), En.subVectors(kn, Wn); let t = [0, -pn.z, pn.y, 0, -mn.z, mn.y, 0, -En.z, En.y, pn.z, 0, -pn.x, mn.z, 0, -mn.x, En.z, 0, -En.x, -pn.y, pn.x, 0, -mn.y, mn.x, 0, -En.y, En.x, 0]; return !ts(t, kn, Hn, Wn, Qi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ts(t, kn, Hn, Wn, Qi)) ? !1 : (ji.crossVectors(pn, mn), t = [ji.x, ji.y, ji.z], ts(t, kn, Hn, Wn, Qi)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Xt).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Xt).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(rn), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } toJSON() { return { min: this.min.toArray(), max: this.max.toArray() } } fromJSON(e) { return this.min.fromArray(e.min), this.max.fromArray(e.max), this } } const rn = [new R, new R, new R, new R, new R, new R, new R, new R], Xt = new R, Ki = new Dt, kn = new R, Hn = new R, Wn = new R, pn = new R, mn = new R, En = new R, Si = new R, Qi = new R, ji = new R, Tn = new R; function ts(r, e, t, n, i) { for (let s = 0, a = r.length - 3; s <= a; s += 3) { Tn.fromArray(r, s); const o = i.x * Math.abs(Tn.x) + i.y * Math.abs(Tn.y) + i.z * Math.abs(Tn.z), l = e.dot(Tn), c = t.dot(Tn), h = n.dot(Tn); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1 } return !0 } const _c = new Dt, bi = new R, ns = new R; class Et { constructor(e = new R, t = -1) { this.isSphere = !0, this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { const n = this.center; t !== void 0 ? n.copy(t) : _c.setFromPoints(e).getCenter(n); let i = 0; for (let s = 0, a = e.length; s < a; s++)i = Math.max(i, n.distanceToSquared(e[s])); return this.radius = Math.sqrt(i), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; bi.subVectors(e, this.center); const t = bi.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t), i = (n - this.radius) * .5; this.center.addScaledVector(bi, i / n), this.radius += i } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ns.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(bi.copy(e.center).add(ns)), this.expandByPoint(bi.copy(e.center).sub(ns))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } toJSON() { return { radius: this.radius, center: this.center.toArray() } } fromJSON(e) { return this.radius = e.radius, this.center.fromArray(e.center), this } } const sn = new R, is = new R, er = new R, gn = new R, rs = new R, tr = new R, ss = new R; class qi { constructor(e = new R, t = new R(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, sn)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const t = sn.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (sn.copy(this.origin).addScaledVector(this.direction, t), sn.distanceToSquared(e)) } distanceSqToSegment(e, t, n, i) { is.copy(e).add(t).multiplyScalar(.5), er.copy(t).sub(e).normalize(), gn.copy(this.origin).sub(is); const s = e.distanceTo(t) * .5, a = -this.direction.dot(er), o = gn.dot(this.direction), l = -gn.dot(er), c = gn.lengthSq(), h = Math.abs(1 - a * a); let u, d, f, g; if (h > 0) if (u = a * l - o, d = a * o - l, g = s * h, u >= 0) if (d >= -g) if (d <= g) { const _ = 1 / h; u *= _, d *= _, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c } else d = s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c; else d = -s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c; else d <= -g ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c); else d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c; return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(is).addScaledVector(er, d), f } intersectSphere(e, t) { sn.subVectors(e.center, this.origin); const n = sn.dot(this.direction), i = sn.dot(sn) - n * n, s = e.radius * e.radius; if (i > s) return null; const a = Math.sqrt(s - i), o = n - a, l = n + a; return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t) } intersectsSphere(e) { return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, i, s, a, o, l; const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin; return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t) } intersectsBox(e) { return this.intersectBox(e, sn) !== null } intersectTriangle(e, t, n, i, s) { rs.subVectors(t, e), tr.subVectors(n, e), ss.crossVectors(rs, tr); let a = this.direction.dot(ss), o; if (a > 0) { if (i) return null; o = 1 } else if (a < 0) o = -1, a = -a; else return null; gn.subVectors(this.origin, e); const l = o * this.direction.dot(tr.crossVectors(gn, tr)); if (l < 0) return null; const c = o * this.direction.dot(rs.cross(gn)); if (c < 0 || l + c > a) return null; const h = -o * gn.dot(ss); return h < 0 ? null : this.at(h / a, s) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class ke { constructor(e, t, n, i, s, a, o, l, c, h, u, d, f, g, _, m) { ke.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c, h, u, d, f, g, _, m) } set(e, t, n, i, s, a, o, l, c, h, u, d, f, g, _, m) { const p = this.elements; return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = _, p[15] = m, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new ke().fromArray(this.elements) } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const t = this.elements, n = e.elements, i = 1 / Xn.setFromMatrixColumn(e, 0).length(), s = 1 / Xn.setFromMatrixColumn(e, 1).length(), a = 1 / Xn.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s); if (e.order === "XYZ") { const d = a * h, f = a * u, g = o * h, _ = o * u; t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = f + g * c, t[5] = d - _ * c, t[9] = -o * l, t[2] = _ - d * c, t[6] = g + f * c, t[10] = a * l } else if (e.order === "YXZ") { const d = l * h, f = l * u, g = c * h, _ = c * u; t[0] = d + _ * o, t[4] = g * o - f, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = f * o - g, t[6] = _ + d * o, t[10] = a * l } else if (e.order === "ZXY") { const d = l * h, f = l * u, g = c * h, _ = c * u; t[0] = d - _ * o, t[4] = -a * u, t[8] = g + f * o, t[1] = f + g * o, t[5] = a * h, t[9] = _ - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l } else if (e.order === "ZYX") { const d = a * h, f = a * u, g = o * h, _ = o * u; t[0] = l * h, t[4] = g * c - f, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = f * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l } else if (e.order === "YZX") { const d = a * l, f = a * c, g = o * l, _ = o * c; t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + f, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = f * u + g, t[10] = d - _ * u } else if (e.order === "XZY") { const d = a * l, f = a * c, g = o * l, _ = o * c; t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = a * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = o * h, t[10] = _ * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(xc, e, vc) } lookAt(e, t, n) { const i = this.elements; return Ft.subVectors(e, t), Ft.lengthSq() === 0 && (Ft.z = 1), Ft.normalize(), _n.crossVectors(n, Ft), _n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ft.x += 1e-4 : Ft.z += 1e-4, Ft.normalize(), _n.crossVectors(n, Ft)), _n.normalize(), nr.crossVectors(Ft, _n), i[0] = _n.x, i[4] = nr.x, i[8] = Ft.x, i[1] = _n.y, i[5] = nr.y, i[9] = Ft.y, i[2] = _n.z, i[6] = nr.z, i[10] = Ft.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], _ = n[6], m = n[10], p = n[14], M = n[3], v = n[7], x = n[11], w = n[15], T = i[0], C = i[4], P = i[8], b = i[12], S = i[1], L = i[5], F = i[9], z = i[13], H = i[2], q = i[6], W = i[10], ne = i[14], k = i[3], ue = i[7], _e = i[11], ye = i[15]; return s[0] = a * T + o * S + l * H + c * k, s[4] = a * C + o * L + l * q + c * ue, s[8] = a * P + o * F + l * W + c * _e, s[12] = a * b + o * z + l * ne + c * ye, s[1] = h * T + u * S + d * H + f * k, s[5] = h * C + u * L + d * q + f * ue, s[9] = h * P + u * F + d * W + f * _e, s[13] = h * b + u * z + d * ne + f * ye, s[2] = g * T + _ * S + m * H + p * k, s[6] = g * C + _ * L + m * q + p * ue, s[10] = g * P + _ * F + m * W + p * _e, s[14] = g * b + _ * z + m * ne + p * ye, s[3] = M * T + v * S + x * H + w * k, s[7] = M * C + v * L + x * q + w * ue, s[11] = M * P + v * F + x * W + w * _e, s[15] = M * b + v * z + x * ne + w * ye, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], f = e[14], g = e[3], _ = e[7], m = e[11], p = e[15]; return g * (+s * l * u - i * c * u - s * o * d + n * c * d + i * o * f - n * l * f) + _ * (+t * l * f - t * c * d + s * a * d - i * a * f + i * c * h - s * l * h) + m * (+t * c * u - t * o * f - s * a * u + n * a * f + s * o * h - n * c * h) + p * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h) } transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], f = e[11], g = e[12], _ = e[13], m = e[14], p = e[15], M = u * m * c - _ * d * c + _ * l * f - o * m * f - u * l * p + o * d * p, v = g * d * c - h * m * c - g * l * f + a * m * f + h * l * p - a * d * p, x = h * _ * c - g * u * c + g * o * f - a * _ * f - h * o * p + a * u * p, w = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * m - a * u * m, T = t * M + n * v + i * x + s * w; if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const C = 1 / T; return e[0] = M * C, e[1] = (_ * d * s - u * m * s - _ * i * f + n * m * f + u * i * p - n * d * p) * C, e[2] = (o * m * s - _ * l * s + _ * i * c - n * m * c - o * i * p + n * l * p) * C, e[3] = (u * l * s - o * d * s - u * i * c + n * d * c + o * i * f - n * l * f) * C, e[4] = v * C, e[5] = (h * m * s - g * d * s + g * i * f - t * m * f - h * i * p + t * d * p) * C, e[6] = (g * l * s - a * m * s - g * i * c + t * m * c + a * i * p - t * l * p) * C, e[7] = (a * d * s - h * l * s + h * i * c - t * d * c - a * i * f + t * l * f) * C, e[8] = x * C, e[9] = (g * u * s - h * _ * s - g * n * f + t * _ * f + h * n * p - t * u * p) * C, e[10] = (a * _ * s - g * o * s + g * n * c - t * _ * c - a * n * p + t * o * p) * C, e[11] = (h * o * s - a * u * s - h * n * c + t * u * c + a * n * f - t * o * f) * C, e[12] = w * C, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * C, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * m - t * o * m) * C, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * C, this } scale(e) { const t = this.elements, n = e.x, i = e.y, s = e.z; return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this } getMaxScaleOnAxis() { const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o; return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, s * l * l + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, i, s, a) { return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, u = o + o, d = s * c, f = s * h, g = s * u, _ = a * h, m = a * u, p = o * u, M = l * c, v = l * h, x = l * u, w = n.x, T = n.y, C = n.z; return i[0] = (1 - (_ + p)) * w, i[1] = (f + x) * w, i[2] = (g - v) * w, i[3] = 0, i[4] = (f - x) * T, i[5] = (1 - (d + p)) * T, i[6] = (m + M) * T, i[7] = 0, i[8] = (g + v) * C, i[9] = (m - M) * C, i[10] = (1 - (d + _)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this } decompose(e, t, n) { const i = this.elements; let s = Xn.set(i[0], i[1], i[2]).length(); const a = Xn.set(i[4], i[5], i[6]).length(), o = Xn.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], qt.copy(this); const c = 1 / s, h = 1 / a, u = 1 / o; return qt.elements[0] *= c, qt.elements[1] *= c, qt.elements[2] *= c, qt.elements[4] *= h, qt.elements[5] *= h, qt.elements[6] *= h, qt.elements[8] *= u, qt.elements[9] *= u, qt.elements[10] *= u, t.setFromRotationMatrix(qt), n.x = s, n.y = a, n.z = o, this } makePerspective(e, t, n, i, s, a, o = 2e3, l = !1) { const c = this.elements, h = 2 * s / (t - e), u = 2 * s / (n - i), d = (t + e) / (t - e), f = (n + i) / (n - i); let g, _; if (l) g = s / (a - s), _ = a * s / (a - s); else if (o === 2e3) g = -(a + s) / (a - s), _ = -2 * a * s / (a - s); else if (o === 2001) g = -a / (a - s), _ = -a * s / (a - s); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o); return c[0] = h, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this } makeOrthographic(e, t, n, i, s, a, o = 2e3, l = !1) { const c = this.elements, h = 2 / (t - e), u = 2 / (n - i), d = -(t + e) / (t - e), f = -(n + i) / (n - i); let g, _; if (l) g = 1 / (a - s), _ = a / (a - s); else if (o === 2e3) g = -2 / (a - s), _ = -(a + s) / (a - s); else if (o === 2001) g = -1 / (a - s), _ = -s / (a - s); else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o); return c[0] = h, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } } const Xn = new R, qt = new ke, xc = new R(0, 0, 0), vc = new R(1, 1, 1), _n = new R, nr = new R, Ft = new R, Fa = new ke, Ba = new gi; class Wt { constructor(e = 0, t = 0, n = 0, i = Wt.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], f = i[10]; switch (t) { case "XYZ": this._y = Math.asin(We(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0); break; case "YXZ": this._x = Math.asin(-We(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0); break; case "ZXY": this._x = Math.asin(We(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s)); break; case "ZYX": this._y = Math.asin(-We(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c)); break; case "YZX": this._z = Math.asin(We(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, f)); break; case "XZY": this._z = Math.asin(-We(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return Fa.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Fa, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return Ba.setFromEuler(this), this.setFromQuaternion(Ba, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } Wt.DEFAULT_ORDER = "XYZ"; class Xs { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let yc = 0; const Oa = new R, qn = new gi, an = new ke, ir = new R, Ei = new R, Mc = new R, Sc = new gi, za = new R(1, 0, 0), Va = new R(0, 1, 0), Ga = new R(0, 0, 1), ka = { type: "added" }, bc = { type: "removed" }, Yn = { type: "childadded", child: null }, as = { type: "childremoved", child: null }; class ct extends mi { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: yc++ }), this.uuid = Ht(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ct.DEFAULT_UP.clone(); const e = new R, t = new Wt, n = new gi, i = new R(1, 1, 1); function s() { n.setFromEuler(t, !1) } function a() { t.setFromQuaternion(n, void 0, !1) } t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new ke }, normalMatrix: { value: new Ge } }), this.matrix = new ke, this.matrixWorld = new ke, this.matrixAutoUpdate = ct.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Xs, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return qn.setFromAxisAngle(e, t), this.quaternion.multiply(qn), this } rotateOnWorldAxis(e, t) { return qn.setFromAxisAngle(e, t), this.quaternion.premultiply(qn), this } rotateX(e) { return this.rotateOnAxis(za, e) } rotateY(e) { return this.rotateOnAxis(Va, e) } rotateZ(e) { return this.rotateOnAxis(Ga, e) } translateOnAxis(e, t) { return Oa.copy(e).applyQuaternion(this.quaternion), this.position.add(Oa.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(za, e) } translateY(e) { return this.translateOnAxis(Va, e) } translateZ(e) { return this.translateOnAxis(Ga, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(an.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? ir.copy(e) : ir.set(e, t, n); const i = this.parent; this.updateWorldMatrix(!0, !1), Ei.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? an.lookAt(Ei, ir, this.up) : an.lookAt(ir, Ei, this.up), this.quaternion.setFromRotationMatrix(an), i && (an.extractRotation(i.matrixWorld), qn.setFromRotationMatrix(an), this.quaternion.premultiply(qn.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ka), Yn.child = e, this.dispatchEvent(Yn), Yn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(bc), as.child = e, this.dispatchEvent(as), as.child = null), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), an.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), an.multiply(e.parent.matrixWorld)), e.applyMatrix4(an), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(ka), Yn.child = e, this.dispatchEvent(Yn), Yn.child = null, this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const a = this.children[n].getObjectByProperty(e, t); if (a !== void 0) return a } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(this); const i = this.children; for (let s = 0, a = i.length; s < a; s++)i[s].getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ei, e, Mc), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ei, Sc, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e) } traverseAncestors(e) { const t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].updateMatrixWorld(e) } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) { const i = this.children; for (let s = 0, a = i.length; s < a; s++)i[s].updateWorldMatrix(!1, !0) } } toJSON(e) { const t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" }); const i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map(o => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), i.instanceInfo = this._instanceInfo.map(o => ({ ...o })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(e), i.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i.boundingBox = this.boundingBox.toJSON())); function s(o, l) { return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = s(e.geometries, this.geometry); const o = this.geometry.parameters; if (o !== void 0 && o.shapes !== void 0) { const l = o.shapes; if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) { const u = l[c]; s(e.shapes, u) } else s(e.shapes, l) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const o = []; for (let l = 0, c = this.material.length; l < c; l++)o.push(s(e.materials, this.material[l])); i.material = o } else i.material = s(e.materials, this.material); if (this.children.length > 0) { i.children = []; for (let o = 0; o < this.children.length; o++)i.children.push(this.children[o].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let o = 0; o < this.animations.length; o++) { const l = this.animations[o]; i.animations.push(s(e.animations, l)) } } if (t) { const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), f = a(e.animations), g = a(e.nodes); o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g) } return n.object = i, n; function a(o) { const l = []; for (const c in o) { const h = o[c]; delete h.metadata, l.push(h) } return l } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { const i = e.children[n]; this.add(i.clone()) } return this } } ct.DEFAULT_UP = new R(0, 1, 0); ct.DEFAULT_MATRIX_AUTO_UPDATE = !0; ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const Yt = new R, on = new R, os = new R, ln = new R, Jn = new R, $n = new R, Ha = new R, ls = new R, cs = new R, hs = new R, us = new Qe, ds = new Qe, fs = new Qe; class Ot { constructor(e = new R, t = new R, n = new R) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, i) { i.subVectors(n, t), Yt.subVectors(e, t), i.cross(Yt); const s = i.lengthSq(); return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0) } static getBarycoord(e, t, n, i, s) { Yt.subVectors(i, t), on.subVectors(n, t), os.subVectors(e, t); const a = Yt.dot(Yt), o = Yt.dot(on), l = Yt.dot(os), c = on.dot(on), h = on.dot(os), u = a * c - o * o; if (u === 0) return s.set(0, 0, 0), null; const d = 1 / u, f = (c * l - o * h) * d, g = (a * h - o * l) * d; return s.set(1 - f - g, g, f) } static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, ln) === null ? !1 : ln.x >= 0 && ln.y >= 0 && ln.x + ln.y <= 1 } static getInterpolation(e, t, n, i, s, a, o, l) { return this.getBarycoord(e, t, n, i, ln) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, ln.x), l.addScaledVector(a, ln.y), l.addScaledVector(o, ln.z), l) } static getInterpolatedAttribute(e, t, n, i, s, a) { return us.setScalar(0), ds.setScalar(0), fs.setScalar(0), us.fromBufferAttribute(e, t), ds.fromBufferAttribute(e, n), fs.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(us, s.x), a.addScaledVector(ds, s.y), a.addScaledVector(fs, s.z), a } static isFrontFacing(e, t, n, i) { return Yt.subVectors(n, t), on.subVectors(e, t), Yt.cross(on).dot(i) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this } setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return Yt.subVectors(this.c, this.b), on.subVectors(this.a, this.b), Yt.cross(on).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return Ot.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return Ot.getBarycoord(e, this.a, this.b, this.c, t) } getInterpolation(e, t, n, i, s) { return Ot.getInterpolation(e, this.a, this.b, this.c, t, n, i, s) } containsPoint(e) { return Ot.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return Ot.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { const n = this.a, i = this.b, s = this.c; let a, o; Jn.subVectors(i, n), $n.subVectors(s, n), ls.subVectors(e, n); const l = Jn.dot(ls), c = $n.dot(ls); if (l <= 0 && c <= 0) return t.copy(n); cs.subVectors(e, i); const h = Jn.dot(cs), u = $n.dot(cs); if (h >= 0 && u <= h) return t.copy(i); const d = l * u - h * c; if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(Jn, a); hs.subVectors(e, s); const f = Jn.dot(hs), g = $n.dot(hs); if (g >= 0 && f <= g) return t.copy(s); const _ = f * c - l * g; if (_ <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector($n, o); const m = h * g - f * u; if (m <= 0 && u - h >= 0 && f - g >= 0) return Ha.subVectors(s, i), o = (u - h) / (u - h + (f - g)), t.copy(i).addScaledVector(Ha, o); const p = 1 / (m + _ + d); return a = _ * p, o = d * p, t.copy(n).addScaledVector(Jn, a).addScaledVector($n, o) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } const sl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, xn = { h: 0, s: 0, l: 0 }, rr = { h: 0, s: 0, l: 0 }; function ps(r, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r } class Pe { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e, t, n) { if (t === void 0 && n === void 0) { const i = e; i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i) } else this.setRGB(e, t, n); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = kt) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ze.colorSpaceToWorking(this, t), this } setRGB(e, t, n, i = Ze.workingColorSpace) { return this.r = e, this.g = t, this.b = n, Ze.colorSpaceToWorking(this, i), this } setHSL(e, t, n, i = Ze.workingColorSpace) { if (e = Ws(e, 1), t = We(t, 0, 1), n = We(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { const s = n <= .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s; this.r = ps(a, s, e + 1 / 3), this.g = ps(a, s, e), this.b = ps(a, s, e - 1 / 3) } return Ze.colorSpaceToWorking(this, i), this } setStyle(e, t = kt) { function n(s) { s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let i; if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) { let s; const a = i[1], o = i[2]; switch (a) { case "rgb": case "rgba": if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t); if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t); break; case "hsl": case "hsla": if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) { const s = i[1], a = s.length; if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t); if (a === 6) return this.setHex(parseInt(s, 16), t); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, t); return this } setColorName(e, t = kt) { const n = sl[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = fn(e.r), this.g = fn(e.g), this.b = fn(e.b), this } copyLinearToSRGB(e) { return this.r = ci(e.r), this.g = ci(e.g), this.b = ci(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = kt) { return Ze.workingToColorSpace(St.copy(this), e), Math.round(We(St.r * 255, 0, 255)) * 65536 + Math.round(We(St.g * 255, 0, 255)) * 256 + Math.round(We(St.b * 255, 0, 255)) } getHexString(e = kt) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = Ze.workingColorSpace) { Ze.workingToColorSpace(St.copy(this), t); const n = St.r, i = St.g, s = St.b, a = Math.max(n, i, s), o = Math.min(n, i, s); let l, c; const h = (o + a) / 2; if (o === a) l = 0, c = 0; else { const u = a - o; switch (c = h <= .5 ? u / (a + o) : u / (2 - a - o), a) { case n: l = (i - s) / u + (i < s ? 6 : 0); break; case i: l = (s - n) / u + 2; break; case s: l = (n - i) / u + 4; break }l /= 6 } return e.h = l, e.s = c, e.l = h, e } getRGB(e, t = Ze.workingColorSpace) { return Ze.workingToColorSpace(St.copy(this), t), e.r = St.r, e.g = St.g, e.b = St.b, e } getStyle(e = kt) { Ze.workingToColorSpace(St.copy(this), e); const t = St.r, n = St.g, i = St.b; return e !== kt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})` } offsetHSL(e, t, n) { return this.getHSL(xn), this.setHSL(xn.h + e, xn.s + t, xn.l + n) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(xn), e.getHSL(rr); const n = Bi(xn.h, rr.h, t), i = Bi(xn.s, rr.s, t), s = Bi(xn.l, rr.l, t); return this.setHSL(n, i, s), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const t = this.r, n = this.g, i = this.b, s = e.elements; return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } const St = new Pe; Pe.NAMES = sl; let Ec = 0; class Ct extends mi { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ec++ }), this.uuid = Ht(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Material: parameter '${t}' has value of undefined.`); continue } const i = this[t]; if (i === void 0) { console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function i(s) { const a = []; for (const o in s) { const l = s[o]; delete l.metadata, a.push(l) } return a } if (t) { const s = i(e.textures), a = i(e.images); s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length; n = new Array(i); for (let s = 0; s !== i; ++s)n[s] = t[s].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } } class qs extends Ct { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Pe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wt, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const hn = Tc(); function Tc() { const r = new ArrayBuffer(4), e = new Float32Array(r), t = new Uint32Array(r), n = new Uint32Array(512), i = new Uint32Array(512); for (let l = 0; l < 256; ++l) { const c = l - 127; c < -27 ? (n[l] = 0, n[l | 256] = 32768, i[l] = 24, i[l | 256] = 24) : c < -14 ? (n[l] = 1024 >> -c - 14, n[l | 256] = 1024 >> -c - 14 | 32768, i[l] = -c - 1, i[l | 256] = -c - 1) : c <= 15 ? (n[l] = c + 15 << 10, n[l | 256] = c + 15 << 10 | 32768, i[l] = 13, i[l | 256] = 13) : c < 128 ? (n[l] = 31744, n[l | 256] = 64512, i[l] = 24, i[l | 256] = 24) : (n[l] = 31744, n[l | 256] = 64512, i[l] = 13, i[l | 256] = 13) } const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64); for (let l = 1; l < 1024; ++l) { let c = l << 13, h = 0; for (; (c & 8388608) === 0;)c <<= 1, h -= 8388608; c &= -8388609, h += 947912704, s[l] = c | h } for (let l = 1024; l < 2048; ++l)s[l] = 939524096 + (l - 1024 << 13); for (let l = 1; l < 31; ++l)a[l] = l << 23; a[31] = 1199570944, a[32] = 2147483648; for (let l = 33; l < 63; ++l)a[l] = 2147483648 + (l - 32 << 23); a[63] = 3347054592; for (let l = 1; l < 64; ++l)l !== 32 && (o[l] = 1024); return { floatView: e, uint32View: t, baseTable: n, shiftTable: i, mantissaTable: s, exponentTable: a, offsetTable: o } } function Ac(r) { Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), r = We(r, -65504, 65504), hn.floatView[0] = r; const e = hn.uint32View[0], t = e >> 23 & 511; return hn.baseTable[t] + ((e & 8388607) >> hn.shiftTable[t]) } function wc(r) { const e = r >> 10; return hn.uint32View[0] = hn.mantissaTable[hn.offsetTable[e] + (r & 1023)] + hn.exponentTable[e], hn.floatView[0] } class b_ { static toHalfFloat(e) { return Ac(e) } static fromHalfFloat(e) { return wc(e) } } const mt = new R, sr = new Q; let Rc = 0; class yt { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Rc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, s = this.itemSize; i < s; i++)this.array[e + i] = t.array[n + i]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)sr.fromBufferAttribute(this, t), sr.applyMatrix3(e), this.setXY(t, sr.x, sr.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this.normalized && (n = Jt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = tt(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = Jt(t, this.array)), t } setX(e, t) { return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this.normalized && (t = Jt(t, this.array)), t } setY(e, t) { return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[e * this.itemSize + 2]; return this.normalized && (t = Jt(t, this.array)), t } setZ(e, t) { return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize + 2] = t, this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t = Jt(t, this.array)), t } setW(e, t) { return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.normalized && (t = tt(t, this.array), n = tt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e *= this.itemSize, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this } setXYZW(e, t, n, i, s) { return e *= this.itemSize, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array), s = tt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e } } class al extends yt { constructor(e, t, n) { super(new Uint16Array(e), t, n) } } class ol extends yt { constructor(e, t, n) { super(new Uint32Array(e), t, n) } } class Fe extends yt { constructor(e, t, n) { super(new Float32Array(e), t, n) } } let Cc = 0; const Gt = new ke, ms = new ct, Zn = new R, Bt = new Dt, Ti = new Dt, vt = new R; class nt extends mi { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Cc++ }), this.uuid = Ht(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (il(e) ? ol : al)(e, 1) : this.index = e, this } setIndirect(e) { return this.indirect = e, this } getIndirect() { return this.indirect } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const s = new Ge().getNormalMatrix(e); n.applyNormalMatrix(s), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return Gt.makeRotationFromQuaternion(e), this.applyMatrix4(Gt), this } rotateX(e) { return Gt.makeRotationX(e), this.applyMatrix4(Gt), this } rotateY(e) { return Gt.makeRotationY(e), this.applyMatrix4(Gt), this } rotateZ(e) { return Gt.makeRotationZ(e), this.applyMatrix4(Gt), this } translate(e, t, n) { return Gt.makeTranslation(e, t, n), this.applyMatrix4(Gt), this } scale(e, t, n) { return Gt.makeScale(e, t, n), this.applyMatrix4(Gt), this } lookAt(e) { return ms.lookAt(e), ms.updateMatrix(), this.applyMatrix4(ms.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Zn).negate(), this.translate(Zn.x, Zn.y, Zn.z), this } setFromPoints(e) { const t = this.getAttribute("position"); if (t === void 0) { const n = []; for (let i = 0, s = e.length; i < s; i++) { const a = e[i]; n.push(a.x, a.y, a.z || 0) } this.setAttribute("position", new Fe(n, 3)) } else { const n = Math.min(e.length, t.count); for (let i = 0; i < n; i++) { const s = e[i]; t.setXYZ(i, s.x, s.y, s.z || 0) } e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0 } return this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Dt); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) { const s = t[n]; Bt.setFromBufferAttribute(s), this.morphTargetsRelative ? (vt.addVectors(this.boundingBox.min, Bt.min), this.boundingBox.expandByPoint(vt), vt.addVectors(this.boundingBox.max, Bt.max), this.boundingBox.expandByPoint(vt)) : (this.boundingBox.expandByPoint(Bt.min), this.boundingBox.expandByPoint(Bt.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new Et); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (Bt.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) { const o = t[s]; Ti.setFromBufferAttribute(o), this.morphTargetsRelative ? (vt.addVectors(Bt.min, Ti.min), Bt.expandByPoint(vt), vt.addVectors(Bt.max, Ti.max), Bt.expandByPoint(vt)) : (Bt.expandByPoint(Ti.min), Bt.expandByPoint(Ti.max)) } Bt.getCenter(n); let i = 0; for (let s = 0, a = e.count; s < a; s++)vt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(vt)); if (t) for (let s = 0, a = t.length; s < a; s++) { const o = t[s], l = this.morphTargetsRelative; for (let c = 0, h = o.count; c < h; c++)vt.fromBufferAttribute(o, c), l && (Zn.fromBufferAttribute(e, c), vt.add(Zn)), i = Math.max(i, n.distanceToSquared(vt)) } this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = t.position, i = t.normal, s = t.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new yt(new Float32Array(4 * n.count), 4)); const a = this.getAttribute("tangent"), o = [], l = []; for (let P = 0; P < n.count; P++)o[P] = new R, l[P] = new R; const c = new R, h = new R, u = new R, d = new Q, f = new Q, g = new Q, _ = new R, m = new R; function p(P, b, S) { c.fromBufferAttribute(n, P), h.fromBufferAttribute(n, b), u.fromBufferAttribute(n, S), d.fromBufferAttribute(s, P), f.fromBufferAttribute(s, b), g.fromBufferAttribute(s, S), h.sub(c), u.sub(c), f.sub(d), g.sub(d); const L = 1 / (f.x * g.y - g.x * f.y); isFinite(L) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -f.y).multiplyScalar(L), m.copy(u).multiplyScalar(f.x).addScaledVector(h, -g.x).multiplyScalar(L), o[P].add(_), o[b].add(_), o[S].add(_), l[P].add(m), l[b].add(m), l[S].add(m)) } let M = this.groups; M.length === 0 && (M = [{ start: 0, count: e.count }]); for (let P = 0, b = M.length; P < b; ++P) { const S = M[P], L = S.start, F = S.count; for (let z = L, H = L + F; z < H; z += 3)p(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2)) } const v = new R, x = new R, w = new R, T = new R; function C(P) { w.fromBufferAttribute(i, P), T.copy(w); const b = o[P]; v.copy(b), v.sub(w.multiplyScalar(w.dot(b))).normalize(), x.crossVectors(T, b); const L = x.dot(l[P]) < 0 ? -1 : 1; a.setXYZW(P, v.x, v.y, v.z, L) } for (let P = 0, b = M.length; P < b; ++P) { const S = M[P], L = S.start, F = S.count; for (let z = L, H = L + F; z < H; z += 3)C(e.getX(z + 0)), C(e.getX(z + 1)), C(e.getX(z + 2)) } } computeVertexNormals() { const e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new yt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, f = n.count; d < f; d++)n.setXYZ(d, 0, 0, 0); const i = new R, s = new R, a = new R, o = new R, l = new R, c = new R, h = new R, u = new R; if (e) for (let d = 0, f = e.count; d < f; d += 3) { const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2); i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z) } else for (let d = 0, f = t.count; d < f; d += 3)i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)vt.fromBufferAttribute(e, t), vt.normalize(), e.setXYZ(t, vt.x, vt.y, vt.z) } toNonIndexed() { function e(o, l) { const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h); let f = 0, g = 0; for (let _ = 0, m = l.length; _ < m; _++) { o.isInterleavedBufferAttribute ? f = l[_] * o.data.stride + o.offset : f = l[_] * h; for (let p = 0; p < h; p++)d[g++] = c[f++] } return new yt(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new nt, n = this.index.array, i = this.attributes; for (const o in i) { const l = i[o], c = e(l, n); t.setAttribute(o, c) } const s = this.morphAttributes; for (const o in s) { const l = [], c = s[o]; for (let h = 0, u = c.length; h < u; h++) { const d = c[h], f = e(d, n); l.push(f) } t.morphAttributes[o] = l } t.morphTargetsRelative = this.morphTargetsRelative; const a = this.groups; for (let o = 0, l = a.length; o < l; o++) { const c = a[o]; t.addGroup(c.start, c.count, c.materialIndex) } return t } toJSON() { const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (e[c] = l[c]); return e } e.data = { attributes: {} }; const t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const l in n) { const c = n[l]; e.data.attributes[l] = c.toJSON(e.data) } const i = {}; let s = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l], h = []; for (let u = 0, d = c.length; u < d; u++) { const f = c[u]; h.push(f.toJSON(e.data)) } h.length > 0 && (i[l] = h, s = !0) } s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const a = this.groups; a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a))); const o = this.boundingSphere; return o !== null && (e.data.boundingSphere = o.toJSON()), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {}; this.name = e.name; const n = e.index; n !== null && this.setIndex(n.clone()); const i = e.attributes; for (const c in i) { const h = i[c]; this.setAttribute(c, h.clone(t)) } const s = e.morphAttributes; for (const c in s) { const h = [], u = s[c]; for (let d = 0, f = u.length; d < f; d++)h.push(u[d].clone(t)); this.morphAttributes[c] = h } this.morphTargetsRelative = e.morphTargetsRelative; const a = e.groups; for (let c = 0, h = a.length; c < h; c++) { const u = a[c]; this.addGroup(u.start, u.count, u.materialIndex) } const o = e.boundingBox; o !== null && (this.boundingBox = o.clone()); const l = e.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const Wa = new ke, An = new qi, ar = new Et, Xa = new R, or = new R, lr = new R, cr = new R, gs = new R, hr = new R, qa = new R, ur = new R; class Rt extends ct { constructor(e = new nt, t = new qs) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = i.length; s < a; s++) { const o = i[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } getVertexPosition(e, t) { const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative; t.fromBufferAttribute(i, e); const o = this.morphTargetInfluences; if (s && o) { hr.set(0, 0, 0); for (let l = 0, c = s.length; l < c; l++) { const h = o[l], u = s[l]; h !== 0 && (gs.fromBufferAttribute(u, e), a ? hr.addScaledVector(gs, h) : hr.addScaledVector(gs.sub(t), h)) } t.add(hr) } return t } raycast(e, t) { const n = this.geometry, i = this.material, s = this.matrixWorld; i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ar.copy(n.boundingSphere), ar.applyMatrix4(s), An.copy(e.ray).recast(e.near), !(ar.containsPoint(An.origin) === !1 && (An.intersectSphere(ar, Xa) === null || An.origin.distanceToSquared(Xa) > (e.far - e.near) ** 2)) && (Wa.copy(s).invert(), An.copy(e.ray).applyMatrix4(Wa), !(n.boundingBox !== null && An.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, An))) } _computeIntersections(e, t, n) { let i; const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange; if (o !== null) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) { const m = d[g], p = a[m.materialIndex], M = Math.max(m.start, f.start), v = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count)); for (let x = M, w = v; x < w; x += 3) { const T = o.getX(x), C = o.getX(x + 1), P = o.getX(x + 2); i = dr(this, p, e, n, c, h, u, T, C, P), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, t.push(i)) } } else { const g = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count); for (let m = g, p = _; m < p; m += 3) { const M = o.getX(m), v = o.getX(m + 1), x = o.getX(m + 2); i = dr(this, a, e, n, c, h, u, M, v, x), i && (i.faceIndex = Math.floor(m / 3), t.push(i)) } } else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) { const m = d[g], p = a[m.materialIndex], M = Math.max(m.start, f.start), v = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count)); for (let x = M, w = v; x < w; x += 3) { const T = x, C = x + 1, P = x + 2; i = dr(this, p, e, n, c, h, u, T, C, P), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = m.materialIndex, t.push(i)) } } else { const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count); for (let m = g, p = _; m < p; m += 3) { const M = m, v = m + 1, x = m + 2; i = dr(this, a, e, n, c, h, u, M, v, x), i && (i.faceIndex = Math.floor(m / 3), t.push(i)) } } } } function Ic(r, e, t, n, i, s, a, o) { let l; if (e.side === 1 ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, e.side === 0, o), l === null) return null; ur.copy(o), ur.applyMatrix4(r.matrixWorld); const c = t.ray.origin.distanceTo(ur); return c < t.near || c > t.far ? null : { distance: c, point: ur.clone(), object: r } } function dr(r, e, t, n, i, s, a, o, l, c) { r.getVertexPosition(o, or), r.getVertexPosition(l, lr), r.getVertexPosition(c, cr); const h = Ic(r, e, t, n, or, lr, cr, qa); if (h) { const u = new R; Ot.getBarycoord(qa, or, lr, cr, u), i && (h.uv = Ot.getInterpolatedAttribute(i, o, l, c, u, new Q)), s && (h.uv1 = Ot.getInterpolatedAttribute(s, o, l, c, u, new Q)), a && (h.normal = Ot.getInterpolatedAttribute(a, o, l, c, u, new R), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)); const d = { a: o, b: l, c, normal: new R, materialIndex: 0 }; Ot.getNormal(or, lr, cr, d.normal), h.face = d, h.barycoord = u } return h } class _i extends nt { constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: a }; const o = this; i = Math.floor(i), s = Math.floor(s), a = Math.floor(a); const l = [], c = [], h = [], u = []; let d = 0, f = 0; g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Fe(c, 3)), this.setAttribute("normal", new Fe(h, 3)), this.setAttribute("uv", new Fe(u, 2)); function g(_, m, p, M, v, x, w, T, C, P, b) { const S = x / C, L = w / P, F = x / 2, z = w / 2, H = T / 2, q = C + 1, W = P + 1; let ne = 0, k = 0; const ue = new R; for (let _e = 0; _e < W; _e++) { const ye = _e * L - z; for (let Ve = 0; Ve < q; Ve++) { const Je = Ve * S - F; ue[_] = Je * M, ue[m] = ye * v, ue[p] = H, c.push(ue.x, ue.y, ue.z), ue[_] = 0, ue[m] = 0, ue[p] = T > 0 ? 1 : -1, h.push(ue.x, ue.y, ue.z), u.push(Ve / C), u.push(1 - _e / P), ne += 1 } } for (let _e = 0; _e < P; _e++)for (let ye = 0; ye < C; ye++) { const Ve = d + ye + q * _e, Je = d + ye + q * (_e + 1), et = d + (ye + 1) + q * (_e + 1), $e = d + (ye + 1) + q * _e; l.push(Ve, Je, $e), l.push(Je, et, $e), k += 6 } o.addGroup(f, k, b), f += k, d += ne } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new _i(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function di(r) { const e = {}; for (const t in r) { e[t] = {}; for (const n in r[t]) { const i = r[t][n]; i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e } function wt(r) { const e = {}; for (let t = 0; t < r.length; t++) { const n = di(r[t]); for (const i in n) e[i] = n[i] } return e } function Pc(r) { const e = []; for (let t = 0; t < r.length; t++)e.push(r[t].clone()); return e } function ll(r) { const e = r.getRenderTarget(); return e === null ? r.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ze.workingColorSpace } const Lc = { clone: di, merge: wt }; var Dc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Uc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class en extends Ct { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Dc, this.fragmentShader = Uc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = di(e.uniforms), this.uniformsGroups = Pc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const a = this.uniforms[i].value; a && a.isTexture ? t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[i] = { type: "m4", value: a.toArray() } : t.uniforms[i] = { value: a } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } } class cl extends ct { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ke, this.projectionMatrix = new ke, this.projectionMatrixInverse = new ke, this.coordinateSystem = 2e3, this._reversedDepth = !1 } get reversedDepth() { return this._reversedDepth } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } const vn = new R, Ya = new Q, Ja = new Q; class Lt extends cl { constructor(e = 50, t = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e; this.fov = ui * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(li * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return ui * 2 * Math.atan(Math.tan(li * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, t, n) { vn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(vn.x, vn.y).multiplyScalar(-e / vn.z), vn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(vn.x, vn.y).multiplyScalar(-e / vn.z) } getViewSize(e, t) { return this.getViewBounds(e, Ya, Ja), t.subVectors(Ja, Ya) } setViewOffset(e, t, n, i, s, a) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(li * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -.5 * i; const a = this.view; if (this.view !== null && this.view.enabled) { const l = a.fullWidth, c = a.fullHeight; s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c } const o = this.filmOffset; o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } } const Kn = -90, Qn = 1; class Nc extends ct { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const i = new Lt(Kn, Qn, e, t); i.layers = this.layers, this.add(i); const s = new Lt(Kn, Qn, e, t); s.layers = this.layers, this.add(s); const a = new Lt(Kn, Qn, e, t); a.layers = this.layers, this.add(a); const o = new Lt(Kn, Qn, e, t); o.layers = this.layers, this.add(o); const l = new Lt(Kn, Qn, e, t); l.layers = this.layers, this.add(l); const c = new Lt(Kn, Qn, e, t); c.layers = this.layers, this.add(c) } updateCoordinateSystem() { const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, l] = t; for (const c of t) this.remove(c); if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1); else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const c of t) this.add(c), c.updateMatrixWorld() } update(e, t) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: i } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); const [s, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled; e.xr.enabled = !1; const _ = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0 } } class Ys extends gt { constructor(e = [], t = 301, n, i, s, a, o, l, c, h) { super(e, t, n, i, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class Fc extends Fn {
	constructor(e = 1, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n]; this.texture = new Ys(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0 } fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, i = new _i(5, 5, 5), s = new en({ name: "CubemapFromEquirect", uniforms: di(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 }); s.uniforms.tEquirect.value = t; const a = new Rt(i, s), o = t.minFilter; return t.minFilter === 1008 && (t.minFilter = 1006), new Nc(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
	} clear(e, t = !0, n = !0, i = !0) { const s = e.getRenderTarget(); for (let a = 0; a < 6; a++)e.setRenderTarget(this, a), e.clear(t, n, i); e.setRenderTarget(s) }
} class Ui extends ct { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const Bc = { type: "move" }; class _s { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new Ui, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new Ui, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new Ui, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { const t = this._hand; if (t) for (const n of e.hand.values()) this._getHandJoint(t, n) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let i = null, s = null, a = null; const o = this._targetRay, l = this._grip, c = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (c && e.hand) { a = !0; for (const _ of e.hand.values()) { const m = t.getJointPose(_, n), p = this._getHandJoint(c, _); m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null } const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = .02, g = .005; c.inputState.pinching && d > f + g ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= f - g && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1)); o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Bc))) } return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this } _getHandJoint(e, t) { if (e.joints[t.jointName] === void 0) { const n = new Ui; n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e.joints[t.jointName] } } class Js { constructor(e, t = 25e-5) { this.isFogExp2 = !0, this.name = "", this.color = new Pe(e), this.density = t } clone() { return new Js(this.color, this.density) } toJSON() { return { type: "FogExp2", name: this.name, color: this.color.getHex(), density: this.density } } } class $s { constructor(e, t = 1, n = 1e3) { this.isFog = !0, this.name = "", this.color = new Pe(e), this.near = t, this.far = n } clone() { return new $s(this.color, this.near, this.far) } toJSON() { return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far } } } class Oc extends ct { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Wt, this.environmentIntensity = 1, this.environmentRotation = new Wt, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t } } class hl { constructor(e, t) { this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = Ht() } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, s = this.stride; i < s; i++)this.array[e + i] = t.array[n + i]; return this } set(e, t = 0) { return this.array.set(e, t), this } clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ht()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n } onUpload(e) { return this.onUploadCallback = e, this } toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ht()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } } const At = new R; class fi { constructor(e, t, n, i = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i } get count() { return this.data.count } get array() { return this.data.array } set needsUpdate(e) { this.data.needsUpdate = e } applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++)At.fromBufferAttribute(this, t), At.applyMatrix4(e), this.setXYZ(t, At.x, At.y, At.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)At.fromBufferAttribute(this, t), At.applyNormalMatrix(e), this.setXYZ(t, At.x, At.y, At.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)At.fromBufferAttribute(this, t), At.transformDirection(e), this.setXYZ(t, At.x, At.y, At.z); return this } getComponent(e, t) { let n = this.array[e * this.data.stride + this.offset + t]; return this.normalized && (n = Jt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = tt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this } setX(e, t) { return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this } setY(e, t) { return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this } setZ(e, t) { return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this } setW(e, t) { return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this } getX(e) { let t = this.data.array[e * this.data.stride + this.offset]; return this.normalized && (t = Jt(t, this.array)), t } getY(e) { let t = this.data.array[e * this.data.stride + this.offset + 1]; return this.normalized && (t = Jt(t, this.array)), t } getZ(e) { let t = this.data.array[e * this.data.stride + this.offset + 2]; return this.normalized && (t = Jt(t, this.array)), t } getW(e) { let t = this.data.array[e * this.data.stride + this.offset + 3]; return this.normalized && (t = Jt(t, this.array)), t } setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.normalized && (t = tt(t, this.array), n = tt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e = e * this.data.stride + this.offset, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this } setXYZW(e, t, n, i, s) { return e = e * this.data.stride + this.offset, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array), s = tt(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this } clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let s = 0; s < this.itemSize; s++)t.push(this.data.array[i + s]) } return new yt(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new fi(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) } toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let s = 0; s < this.itemSize; s++)t.push(this.data.array[i + s]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } } class ul extends Ct { constructor(e) { super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Pe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this } } let jn; const Ai = new R, ei = new R, ti = new R, ni = new Q, wi = new Q, dl = new ke, fr = new R, Ri = new R, pr = new R, $a = new Q, xs = new Q, Za = new Q; class zc extends ct { constructor(e = new ul) { if (super(), this.isSprite = !0, this.type = "Sprite", jn === void 0) { jn = new nt; const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), n = new hl(t, 5); jn.setIndex([0, 1, 2, 0, 2, 3]), jn.setAttribute("position", new fi(n, 3, 0, !1)), jn.setAttribute("uv", new fi(n, 2, 3, !1)) } this.geometry = jn, this.material = e, this.center = new Q(.5, .5), this.count = 1 } raycast(e, t) { e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ei.setFromMatrixScale(this.matrixWorld), dl.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), ti.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && ei.multiplyScalar(-ti.z); const n = this.material.rotation; let i, s; n !== 0 && (s = Math.cos(n), i = Math.sin(n)); const a = this.center; mr(fr.set(-.5, -.5, 0), ti, a, ei, i, s), mr(Ri.set(.5, -.5, 0), ti, a, ei, i, s), mr(pr.set(.5, .5, 0), ti, a, ei, i, s), $a.set(0, 0), xs.set(1, 0), Za.set(1, 1); let o = e.ray.intersectTriangle(fr, Ri, pr, !1, Ai); if (o === null && (mr(Ri.set(-.5, .5, 0), ti, a, ei, i, s), xs.set(0, 1), o = e.ray.intersectTriangle(fr, pr, Ri, !1, Ai), o === null)) return; const l = e.ray.origin.distanceTo(Ai); l < e.near || l > e.far || t.push({ distance: l, point: Ai.clone(), uv: Ot.getInterpolation(Ai, fr, Ri, pr, $a, xs, Za, new Q), face: null, object: this }) } copy(e, t) { return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this } } function mr(r, e, t, n, i, s) { ni.subVectors(r, t).addScalar(.5).multiply(n), i !== void 0 ? (wi.x = s * ni.x - i * ni.y, wi.y = i * ni.x + s * ni.y) : wi.copy(ni), r.copy(e), r.x += wi.x, r.y += wi.y, r.applyMatrix4(dl) } const gr = new R, Ka = new R; class Vc extends ct { constructor() { super(), this.isLOD = !0, this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }), this.autoUpdate = !0 } copy(e) { super.copy(e, !1); const t = e.levels; for (let n = 0, i = t.length; n < i; n++) { const s = t[n]; this.addLevel(s.object.clone(), s.distance, s.hysteresis) } return this.autoUpdate = e.autoUpdate, this } addLevel(e, t = 0, n = 0) { t = Math.abs(t); const i = this.levels; let s; for (s = 0; s < i.length && !(t < i[s].distance); s++); return i.splice(s, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this } removeLevel(e) { const t = this.levels; for (let n = 0; n < t.length; n++)if (t[n].distance === e) { const i = t.splice(n, 1); return this.remove(i[0].object), !0 } return !1 } getCurrentLevel() { return this._currentLevel } getObjectForDistance(e) { const t = this.levels; if (t.length > 0) { let n, i; for (n = 1, i = t.length; n < i; n++) { let s = t[n].distance; if (t[n].object.visible && (s -= s * t[n].hysteresis), e < s) break } return t[n - 1].object } return null } raycast(e, t) { if (this.levels.length > 0) { gr.setFromMatrixPosition(this.matrixWorld); const i = e.ray.origin.distanceTo(gr); this.getObjectForDistance(i).raycast(e, t) } } update(e) { const t = this.levels; if (t.length > 1) { gr.setFromMatrixPosition(e.matrixWorld), Ka.setFromMatrixPosition(this.matrixWorld); const n = gr.distanceTo(Ka) / e.zoom; t[0].object.visible = !0; let i, s; for (i = 1, s = t.length; i < s; i++) { let a = t[i].distance; if (t[i].object.visible && (a -= a * t[i].hysteresis), n >= a) t[i - 1].object.visible = !1, t[i].object.visible = !0; else break } for (this._currentLevel = i - 1; i < s; i++)t[i].object.visible = !1 } } toJSON(e) { const t = super.toJSON(e); this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = []; const n = this.levels; for (let i = 0, s = n.length; i < s; i++) { const a = n[i]; t.object.levels.push({ object: a.object.uuid, distance: a.distance, hysteresis: a.hysteresis }) } return t } } const Qa = new R, ja = new Qe, eo = new Qe, Gc = new R, to = new ke, _r = new R, vs = new Et, no = new ke, ys = new qi; class kc extends Rt { constructor(e, t) { super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Ca, this.bindMatrix = new ke, this.bindMatrixInverse = new ke, this.boundingBox = null, this.boundingSphere = null } computeBoundingBox() { const e = this.geometry; this.boundingBox === null && (this.boundingBox = new Dt), this.boundingBox.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, _r), this.boundingBox.expandByPoint(_r) } computeBoundingSphere() { const e = this.geometry; this.boundingSphere === null && (this.boundingSphere = new Et), this.boundingSphere.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, _r), this.boundingSphere.expandByPoint(_r) } copy(e, t) { return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } raycast(e, t) { const n = this.material, i = this.matrixWorld; n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), vs.copy(this.boundingSphere), vs.applyMatrix4(i), e.ray.intersectsSphere(vs) !== !1 && (no.copy(i).invert(), ys.copy(e.ray).applyMatrix4(no), !(this.boundingBox !== null && ys.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ys))) } getVertexPosition(e, t) { return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t } bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() } pose() { this.skeleton.pose() } normalizeSkinWeights() { const e = new Qe, t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.fromBufferAttribute(t, n); const s = 1 / e.manhattanLength(); s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === Ca ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Xl ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) } applyBoneTransform(e, t) { const n = this.skeleton, i = this.geometry; ja.fromBufferAttribute(i.attributes.skinIndex, e), eo.fromBufferAttribute(i.attributes.skinWeight, e), Qa.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let s = 0; s < 4; s++) { const a = eo.getComponent(s); if (a !== 0) { const o = ja.getComponent(s); to.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Gc.copy(Qa).applyMatrix4(to), a) } } return t.applyMatrix4(this.bindMatrixInverse) } } class fl extends ct { constructor() { super(), this.isBone = !0, this.type = "Bone" } } class yn extends gt { constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = 1003, h = 1003, u, d) { super(null, a, o, l, c, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } const io = new ke, Hc = new ke; class Zs { constructor(e = [], t = []) { this.uuid = Ht(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init() } init() { const e = this.bones, t = this.boneInverses; if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses(); else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let n = 0, i = this.bones.length; n < i; n++)this.boneInverses.push(new ke) } } calculateInverses() { this.boneInverses.length = 0; for (let e = 0, t = this.bones.length; e < t; e++) { const n = new ke; this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n) } } pose() { for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && n.matrixWorld.copy(this.boneInverses[e]).invert() } for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale)) } } update() { const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture; for (let s = 0, a = e.length; s < a; s++) { const o = e[s] ? e[s].matrixWorld : Hc; io.multiplyMatrices(o, t[s]), io.toArray(n, s * 16) } i !== null && (i.needsUpdate = !0) } clone() { return new Zs(this.bones, this.boneInverses) } computeBoneTexture() { let e = Math.sqrt(this.bones.length * 4); e = Math.ceil(e / 4) * 4, e = Math.max(e, 4); const t = new Float32Array(e * e * 4); t.set(this.boneMatrices); const n = new yn(t, e, e, 1023, 1015); return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this } getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { const i = this.bones[t]; if (i.name === e) return i } } dispose() { this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null) } fromJSON(e, t) { this.uuid = e.uuid; for (let n = 0, i = e.bones.length; n < i; n++) { const s = e.bones[n]; let a = t[s]; a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new fl), this.bones.push(a), this.boneInverses.push(new ke().fromArray(e.boneInverses[n])) } return this.init(), this } toJSON() { const e = { metadata: { version: 4.7, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; e.uuid = this.uuid; const t = this.bones, n = this.boneInverses; for (let i = 0, s = t.length; i < s; i++) { const a = t[i]; e.bones.push(a.uuid); const o = n[i]; e.boneInverses.push(o.toArray()) } return e } } class ki extends yt { constructor(e, t, n, i = 1) { super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i } copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this } toJSON() { const e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } } const ii = new ke, ro = new ke, xr = [], so = new Dt, Wc = new ke, Ci = new Rt, Ii = new Et; class Xc extends Rt { constructor(e, t, n) { super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ki(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null; for (let i = 0; i < n; i++)this.setMatrixAt(i, Wc) } computeBoundingBox() { const e = this.geometry, t = this.count; this.boundingBox === null && (this.boundingBox = new Dt), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, ii), so.copy(e.boundingBox).applyMatrix4(ii), this.boundingBox.union(so) } computeBoundingSphere() { const e = this.geometry, t = this.count; this.boundingSphere === null && (this.boundingSphere = new Et), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, ii), Ii.copy(e.boundingSphere).applyMatrix4(ii), this.boundingSphere.union(Ii) } copy(e, t) { return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) } getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) } getMorphAt(e, t) { const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, a = e * s + 1; for (let o = 0; o < n.length; o++)n[o] = i[a + o] } raycast(e, t) { const n = this.matrixWorld, i = this.count; if (Ci.geometry = this.geometry, Ci.material = this.material, Ci.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ii.copy(this.boundingSphere), Ii.applyMatrix4(n), e.ray.intersectsSphere(Ii) !== !1)) for (let s = 0; s < i; s++) { this.getMatrixAt(s, ii), ro.multiplyMatrices(n, ii), Ci.matrixWorld = ro, Ci.raycast(e, xr); for (let a = 0, o = xr.length; a < o; a++) { const l = xr[a]; l.instanceId = s, l.object = this, t.push(l) } xr.length = 0 } } setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new ki(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3) } setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) } setMorphAt(e, t) { const n = t.morphTargetInfluences, i = n.length + 1; this.morphTexture === null && (this.morphTexture = new yn(new Float32Array(i * this.count), i, this.count, 1028, 1015)); const s = this.morphTexture.source.data.data; let a = 0; for (let c = 0; c < n.length; c++)a += n[c]; const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e; s[l] = o, s.set(n, l + 1) } updateMorphTargets() { } dispose() { this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null) } } const Ms = new R, qc = new R, Yc = new Ge; class Ln { constructor(e = new R(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const i = Ms.subVectors(n, t).cross(qc.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { const n = e.delta(Ms), i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const s = -(e.start.dot(this.normal) + this.constant) / i; return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s) } intersectsLine(e) { const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { const n = t || Yc.getNormalMatrix(e), i = this.coplanarPoint(Ms).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(s), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const wn = new Et, Jc = new Q(.5, .5), vr = new R; class Yi { constructor(e = new Ln, t = new Ln, n = new Ln, i = new Ln, s = new Ln, a = new Ln) { this.planes = [e, t, n, i, s, a] } set(e, t, n, i, s, a) { const o = this.planes; return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e, t = 2e3, n = !1) { const i = this.planes, s = e.elements, a = s[0], o = s[1], l = s[2], c = s[3], h = s[4], u = s[5], d = s[6], f = s[7], g = s[8], _ = s[9], m = s[10], p = s[11], M = s[12], v = s[13], x = s[14], w = s[15]; if (i[0].setComponents(c - a, f - h, p - g, w - M).normalize(), i[1].setComponents(c + a, f + h, p + g, w + M).normalize(), i[2].setComponents(c + o, f + u, p + _, w + v).normalize(), i[3].setComponents(c - o, f - u, p - _, w - v).normalize(), n) i[4].setComponents(l, d, m, x).normalize(), i[5].setComponents(c - l, f - d, p - m, w - x).normalize(); else if (i[4].setComponents(c - l, f - d, p - m, w - x).normalize(), t === 2e3) i[5].setComponents(c + l, f + d, p + m, w + x).normalize(); else if (t === 2001) i[5].setComponents(l, d, m, x).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { const t = e.geometry; t.boundingSphere === null && t.computeBoundingSphere(), wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(wn) } intersectsSprite(e) { wn.center.set(0, 0, 0); const t = Jc.distanceTo(e.center); return wn.radius = .7071067811865476 + t, wn.applyMatrix4(e.matrixWorld), this.intersectsSphere(wn) } intersectsSphere(e) { const t = this.planes, n = e.center, i = -e.radius; for (let s = 0; s < 6; s++)if (t[s].distanceToPoint(n) < i) return !1; return !0 } intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (vr.x = i.normal.x > 0 ? e.max.x : e.min.x, vr.y = i.normal.y > 0 ? e.max.y : e.min.y, vr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(vr) < 0) return !1 } return !0 } containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } const Kt = new ke, Qt = new Yi; class Ks { constructor() { this.coordinateSystem = 2e3 } intersectsObject(e, t) { if (!t.isArrayCamera || t.cameras.length === 0) return !1; for (let n = 0; n < t.cameras.length; n++) { const i = t.cameras[n]; if (Kt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), Qt.setFromProjectionMatrix(Kt, i.coordinateSystem, i.reversedDepth), Qt.intersectsObject(e)) return !0 } return !1 } intersectsSprite(e, t) { if (!t || !t.cameras || t.cameras.length === 0) return !1; for (let n = 0; n < t.cameras.length; n++) { const i = t.cameras[n]; if (Kt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), Qt.setFromProjectionMatrix(Kt, i.coordinateSystem, i.reversedDepth), Qt.intersectsSprite(e)) return !0 } return !1 } intersectsSphere(e, t) { if (!t || !t.cameras || t.cameras.length === 0) return !1; for (let n = 0; n < t.cameras.length; n++) { const i = t.cameras[n]; if (Kt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), Qt.setFromProjectionMatrix(Kt, i.coordinateSystem, i.reversedDepth), Qt.intersectsSphere(e)) return !0 } return !1 } intersectsBox(e, t) { if (!t || !t.cameras || t.cameras.length === 0) return !1; for (let n = 0; n < t.cameras.length; n++) { const i = t.cameras[n]; if (Kt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), Qt.setFromProjectionMatrix(Kt, i.coordinateSystem, i.reversedDepth), Qt.intersectsBox(e)) return !0 } return !1 } containsPoint(e, t) { if (!t || !t.cameras || t.cameras.length === 0) return !1; for (let n = 0; n < t.cameras.length; n++) { const i = t.cameras[n]; if (Kt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), Qt.setFromProjectionMatrix(Kt, i.coordinateSystem, i.reversedDepth), Qt.containsPoint(e)) return !0 } return !1 } clone() { return new Ks } } function Ss(r, e) { return r - e } function $c(r, e) { return r.z - e.z } function Zc(r, e) { return e.z - r.z } class Kc { constructor() { this.index = 0, this.pool = [], this.list = [] } push(e, t, n, i) { const s = this.pool, a = this.list; this.index >= s.length && s.push({ start: -1, count: -1, z: -1, index: -1 }); const o = s[this.index]; a.push(o), this.index++, o.start = e, o.count = t, o.z = n, o.index = i } reset() { this.list.length = 0, this.index = 0 } } const Pt = new ke, Qc = new Pe(1, 1, 1), ao = new Yi, jc = new Ks, yr = new Dt, Rn = new Et, Pi = new R, oo = new R, eh = new R, bs = new Kc, bt = new Rt, Mr = []; function th(r, e, t = 0) { const n = e.itemSize; if (r.isInterleavedBufferAttribute || r.array.constructor !== e.array.constructor) { const i = r.count; for (let s = 0; s < i; s++)for (let a = 0; a < n; a++)e.setComponent(s + t, a, r.getComponent(s, a)) } else e.array.set(r.array, t * n); e.needsUpdate = !0 } function Cn(r, e) { if (r.constructor !== e.constructor) { const t = Math.min(r.length, e.length); for (let n = 0; n < t; n++)e[n] = r[n] } else { const t = Math.min(r.length, e.length); e.set(new r.constructor(r.buffer, 0, t)) } } class nh extends Rt { constructor(e, t, n = t * 2, i) { super(new nt, i), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._instanceInfo = [], this._geometryInfo = [], this._availableInstanceIds = [], this._availableGeometryIds = [], this._nextIndexStart = 0, this._nextVertexStart = 0, this._geometryCount = 0, this._visibilityChanged = !0, this._geometryInitialized = !1, this._maxInstanceCount = e, this._maxVertexCount = t, this._maxIndexCount = n, this._multiDrawCounts = new Int32Array(e), this._multiDrawStarts = new Int32Array(e), this._multiDrawCount = 0, this._multiDrawInstances = null, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture() } get maxInstanceCount() { return this._maxInstanceCount } get instanceCount() { return this._instanceInfo.length - this._availableInstanceIds.length } get unusedVertexCount() { return this._maxVertexCount - this._nextVertexStart } get unusedIndexCount() { return this._maxIndexCount - this._nextIndexStart } _initMatricesTexture() { let e = Math.sqrt(this._maxInstanceCount * 4); e = Math.ceil(e / 4) * 4, e = Math.max(e, 4); const t = new Float32Array(e * e * 4), n = new yn(t, e, e, 1023, 1015); this._matricesTexture = n } _initIndirectTexture() { let e = Math.sqrt(this._maxInstanceCount); e = Math.ceil(e); const t = new Uint32Array(e * e), n = new yn(t, e, e, 1029, 1014); this._indirectTexture = n } _initColorsTexture() { let e = Math.sqrt(this._maxInstanceCount); e = Math.ceil(e); const t = new Float32Array(e * e * 4).fill(1), n = new yn(t, e, e, 1023, 1015); n.colorSpace = Ze.workingColorSpace, this._colorsTexture = n } _initializeGeometry(e) { const t = this.geometry, n = this._maxVertexCount, i = this._maxIndexCount; if (this._geometryInitialized === !1) { for (const s in e.attributes) { const a = e.getAttribute(s), { array: o, itemSize: l, normalized: c } = a, h = new o.constructor(n * l), u = new yt(h, l, c); t.setAttribute(s, u) } if (e.getIndex() !== null) { const s = n > 65535 ? new Uint32Array(i) : new Uint16Array(i); t.setIndex(new yt(s, 1)) } this._geometryInitialized = !0 } } _validateGeometry(e) { const t = this.geometry; if (!!e.getIndex() != !!t.getIndex()) throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".'); for (const n in t.attributes) { if (!e.hasAttribute(n)) throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`); const i = e.getAttribute(n), s = t.getAttribute(n); if (i.itemSize !== s.itemSize || i.normalized !== s.normalized) throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.") } } validateInstanceId(e) { const t = this._instanceInfo; if (e < 0 || e >= t.length || t[e].active === !1) throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`) } validateGeometryId(e) { const t = this._geometryInfo; if (e < 0 || e >= t.length || t[e].active === !1) throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`) } setCustomSort(e) { return this.customSort = e, this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Dt); const e = this.boundingBox, t = this._instanceInfo; e.makeEmpty(); for (let n = 0, i = t.length; n < i; n++) { if (t[n].active === !1) continue; const s = t[n].geometryIndex; this.getMatrixAt(n, Pt), this.getBoundingBoxAt(s, yr).applyMatrix4(Pt), e.union(yr) } } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new Et); const e = this.boundingSphere, t = this._instanceInfo; e.makeEmpty(); for (let n = 0, i = t.length; n < i; n++) { if (t[n].active === !1) continue; const s = t[n].geometryIndex; this.getMatrixAt(n, Pt), this.getBoundingSphereAt(s, Rn).applyMatrix4(Pt), e.union(Rn) } } addInstance(e) { if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0) throw new Error("THREE.BatchedMesh: Maximum item count reached."); const n = { visible: !0, active: !0, geometryIndex: e }; let i = null; this._availableInstanceIds.length > 0 ? (this._availableInstanceIds.sort(Ss), i = this._availableInstanceIds.shift(), this._instanceInfo[i] = n) : (i = this._instanceInfo.length, this._instanceInfo.push(n)); const s = this._matricesTexture; Pt.identity().toArray(s.image.data, i * 16), s.needsUpdate = !0; const a = this._colorsTexture; return a && (Qc.toArray(a.image.data, i * 4), a.needsUpdate = !0), this._visibilityChanged = !0, i } addGeometry(e, t = -1, n = -1) { this._initializeGeometry(e), this._validateGeometry(e); const i = { vertexStart: -1, vertexCount: -1, reservedVertexCount: -1, indexStart: -1, indexCount: -1, reservedIndexCount: -1, start: -1, count: -1, boundingBox: null, boundingSphere: null, active: !0 }, s = this._geometryInfo; i.vertexStart = this._nextVertexStart, i.reservedVertexCount = t === -1 ? e.getAttribute("position").count : t; const a = e.getIndex(); if (a !== null && (i.indexStart = this._nextIndexStart, i.reservedIndexCount = n === -1 ? a.count : n), i.indexStart !== -1 && i.indexStart + i.reservedIndexCount > this._maxIndexCount || i.vertexStart + i.reservedVertexCount > this._maxVertexCount) throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size."); let l; return this._availableGeometryIds.length > 0 ? (this._availableGeometryIds.sort(Ss), l = this._availableGeometryIds.shift(), s[l] = i) : (l = this._geometryCount, this._geometryCount++, s.push(i)), this.setGeometryAt(l, e), this._nextIndexStart = i.indexStart + i.reservedIndexCount, this._nextVertexStart = i.vertexStart + i.reservedVertexCount, l } setGeometryAt(e, t) { if (e >= this._geometryCount) throw new Error("THREE.BatchedMesh: Maximum geometry count reached."); this._validateGeometry(t); const n = this.geometry, i = n.getIndex() !== null, s = n.getIndex(), a = t.getIndex(), o = this._geometryInfo[e]; if (i && a.count > o.reservedIndexCount || t.attributes.position.count > o.reservedVertexCount) throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry."); const l = o.vertexStart, c = o.reservedVertexCount; o.vertexCount = t.getAttribute("position").count; for (const h in n.attributes) { const u = t.getAttribute(h), d = n.getAttribute(h); th(u, d, l); const f = u.itemSize; for (let g = u.count, _ = c; g < _; g++) { const m = l + g; for (let p = 0; p < f; p++)d.setComponent(m, p, 0) } d.needsUpdate = !0, d.addUpdateRange(l * f, c * f) } if (i) { const h = o.indexStart, u = o.reservedIndexCount; o.indexCount = t.getIndex().count; for (let d = 0; d < a.count; d++)s.setX(h + d, l + a.getX(d)); for (let d = a.count, f = u; d < f; d++)s.setX(h + d, l); s.needsUpdate = !0, s.addUpdateRange(h, o.reservedIndexCount) } return o.start = i ? o.indexStart : o.vertexStart, o.count = i ? o.indexCount : o.vertexCount, o.boundingBox = null, t.boundingBox !== null && (o.boundingBox = t.boundingBox.clone()), o.boundingSphere = null, t.boundingSphere !== null && (o.boundingSphere = t.boundingSphere.clone()), this._visibilityChanged = !0, e } deleteGeometry(e) { const t = this._geometryInfo; if (e >= t.length || t[e].active === !1) return this; const n = this._instanceInfo; for (let i = 0, s = n.length; i < s; i++)n[i].active && n[i].geometryIndex === e && this.deleteInstance(i); return t[e].active = !1, this._availableGeometryIds.push(e), this._visibilityChanged = !0, this } deleteInstance(e) { return this.validateInstanceId(e), this._instanceInfo[e].active = !1, this._availableInstanceIds.push(e), this._visibilityChanged = !0, this } optimize() { let e = 0, t = 0; const n = this._geometryInfo, i = n.map((a, o) => o).sort((a, o) => n[a].vertexStart - n[o].vertexStart), s = this.geometry; for (let a = 0, o = n.length; a < o; a++) { const l = i[a], c = n[l]; if (c.active !== !1) { if (s.index !== null) { if (c.indexStart !== t) { const { indexStart: h, vertexStart: u, reservedIndexCount: d } = c, f = s.index, g = f.array, _ = e - u; for (let m = h; m < h + d; m++)g[m] = g[m] + _; f.array.copyWithin(t, h, h + d), f.addUpdateRange(t, d), c.indexStart = t } t += c.reservedIndexCount } if (c.vertexStart !== e) { const { vertexStart: h, reservedVertexCount: u } = c, d = s.attributes; for (const f in d) { const g = d[f], { array: _, itemSize: m } = g; _.copyWithin(e * m, h * m, (h + u) * m), g.addUpdateRange(e * m, u * m) } c.vertexStart = e } e += c.reservedVertexCount, c.start = s.index ? c.indexStart : c.vertexStart, this._nextIndexStart = s.index ? c.indexStart + c.reservedIndexCount : 0, this._nextVertexStart = c.vertexStart + c.reservedVertexCount } } return this } getBoundingBoxAt(e, t) { if (e >= this._geometryCount) return null; const n = this.geometry, i = this._geometryInfo[e]; if (i.boundingBox === null) { const s = new Dt, a = n.index, o = n.attributes.position; for (let l = i.start, c = i.start + i.count; l < c; l++) { let h = l; a && (h = a.getX(h)), s.expandByPoint(Pi.fromBufferAttribute(o, h)) } i.boundingBox = s } return t.copy(i.boundingBox), t } getBoundingSphereAt(e, t) { if (e >= this._geometryCount) return null; const n = this.geometry, i = this._geometryInfo[e]; if (i.boundingSphere === null) { const s = new Et; this.getBoundingBoxAt(e, yr), yr.getCenter(s.center); const a = n.index, o = n.attributes.position; let l = 0; for (let c = i.start, h = i.start + i.count; c < h; c++) { let u = c; a && (u = a.getX(u)), Pi.fromBufferAttribute(o, u), l = Math.max(l, s.center.distanceToSquared(Pi)) } s.radius = Math.sqrt(l), i.boundingSphere = s } return t.copy(i.boundingSphere), t } setMatrixAt(e, t) { this.validateInstanceId(e); const n = this._matricesTexture, i = this._matricesTexture.image.data; return t.toArray(i, e * 16), n.needsUpdate = !0, this } getMatrixAt(e, t) { return this.validateInstanceId(e), t.fromArray(this._matricesTexture.image.data, e * 16) } setColorAt(e, t) { return this.validateInstanceId(e), this._colorsTexture === null && this._initColorsTexture(), t.toArray(this._colorsTexture.image.data, e * 4), this._colorsTexture.needsUpdate = !0, this } getColorAt(e, t) { return this.validateInstanceId(e), t.fromArray(this._colorsTexture.image.data, e * 4) } setVisibleAt(e, t) { return this.validateInstanceId(e), this._instanceInfo[e].visible === t ? this : (this._instanceInfo[e].visible = t, this._visibilityChanged = !0, this) } getVisibleAt(e) { return this.validateInstanceId(e), this._instanceInfo[e].visible } setGeometryIdAt(e, t) { return this.validateInstanceId(e), this.validateGeometryId(t), this._instanceInfo[e].geometryIndex = t, this } getGeometryIdAt(e) { return this.validateInstanceId(e), this._instanceInfo[e].geometryIndex } getGeometryRangeAt(e, t = {}) { this.validateGeometryId(e); const n = this._geometryInfo[e]; return t.vertexStart = n.vertexStart, t.vertexCount = n.vertexCount, t.reservedVertexCount = n.reservedVertexCount, t.indexStart = n.indexStart, t.indexCount = n.indexCount, t.reservedIndexCount = n.reservedIndexCount, t.start = n.start, t.count = n.count, t } setInstanceCount(e) { const t = this._availableInstanceIds, n = this._instanceInfo; for (t.sort(Ss); t[t.length - 1] === n.length - 1;)n.pop(), t.pop(); if (e < n.length) throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`); const i = new Int32Array(e), s = new Int32Array(e); Cn(this._multiDrawCounts, i), Cn(this._multiDrawStarts, s), this._multiDrawCounts = i, this._multiDrawStarts = s, this._maxInstanceCount = e; const a = this._indirectTexture, o = this._matricesTexture, l = this._colorsTexture; a.dispose(), this._initIndirectTexture(), Cn(a.image.data, this._indirectTexture.image.data), o.dispose(), this._initMatricesTexture(), Cn(o.image.data, this._matricesTexture.image.data), l && (l.dispose(), this._initColorsTexture(), Cn(l.image.data, this._colorsTexture.image.data)) } setGeometrySize(e, t) { const n = [...this._geometryInfo].filter(o => o.active); if (Math.max(...n.map(o => o.vertexStart + o.reservedVertexCount)) > e) throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`); if (this.geometry.index && Math.max(...n.map(l => l.indexStart + l.reservedIndexCount)) > t) throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`); const s = this.geometry; s.dispose(), this._maxVertexCount = e, this._maxIndexCount = t, this._geometryInitialized && (this._geometryInitialized = !1, this.geometry = new nt, this._initializeGeometry(s)); const a = this.geometry; s.index && Cn(s.index.array, a.index.array); for (const o in s.attributes) Cn(s.attributes[o].array, a.attributes[o].array) } raycast(e, t) { const n = this._instanceInfo, i = this._geometryInfo, s = this.matrixWorld, a = this.geometry; bt.material = this.material, bt.geometry.index = a.index, bt.geometry.attributes = a.attributes, bt.geometry.boundingBox === null && (bt.geometry.boundingBox = new Dt), bt.geometry.boundingSphere === null && (bt.geometry.boundingSphere = new Et); for (let o = 0, l = n.length; o < l; o++) { if (!n[o].visible || !n[o].active) continue; const c = n[o].geometryIndex, h = i[c]; bt.geometry.setDrawRange(h.start, h.count), this.getMatrixAt(o, bt.matrixWorld).premultiply(s), this.getBoundingBoxAt(c, bt.geometry.boundingBox), this.getBoundingSphereAt(c, bt.geometry.boundingSphere), bt.raycast(e, Mr); for (let u = 0, d = Mr.length; u < d; u++) { const f = Mr[u]; f.object = this, f.batchId = o, t.push(f) } Mr.length = 0 } bt.material = null, bt.geometry.index = null, bt.geometry.attributes = {}, bt.geometry.setDrawRange(0, 1 / 0) } copy(e) { return super.copy(e), this.geometry = e.geometry.clone(), this.perObjectFrustumCulled = e.perObjectFrustumCulled, this.sortObjects = e.sortObjects, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this._geometryInfo = e._geometryInfo.map(t => ({ ...t, boundingBox: t.boundingBox !== null ? t.boundingBox.clone() : null, boundingSphere: t.boundingSphere !== null ? t.boundingSphere.clone() : null })), this._instanceInfo = e._instanceInfo.map(t => ({ ...t })), this._availableInstanceIds = e._availableInstanceIds.slice(), this._availableGeometryIds = e._availableGeometryIds.slice(), this._nextIndexStart = e._nextIndexStart, this._nextVertexStart = e._nextVertexStart, this._geometryCount = e._geometryCount, this._maxInstanceCount = e._maxInstanceCount, this._maxVertexCount = e._maxVertexCount, this._maxIndexCount = e._maxIndexCount, this._geometryInitialized = e._geometryInitialized, this._multiDrawCounts = e._multiDrawCounts.slice(), this._multiDrawStarts = e._multiDrawStarts.slice(), this._indirectTexture = e._indirectTexture.clone(), this._indirectTexture.image.data = this._indirectTexture.image.data.slice(), this._matricesTexture = e._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = e._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this } dispose() { this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null) } onBeforeRender(e, t, n, i, s) { if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) return; const a = i.getIndex(), o = a === null ? 1 : a.array.BYTES_PER_ELEMENT, l = this._instanceInfo, c = this._multiDrawStarts, h = this._multiDrawCounts, u = this._geometryInfo, d = this.perObjectFrustumCulled, f = this._indirectTexture, g = f.image.data, _ = n.isArrayCamera ? jc : ao; d && !n.isArrayCamera && (Pt.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), ao.setFromProjectionMatrix(Pt, n.coordinateSystem, n.reversedDepth)); let m = 0; if (this.sortObjects) { Pt.copy(this.matrixWorld).invert(), Pi.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Pt), oo.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection(Pt); for (let v = 0, x = l.length; v < x; v++)if (l[v].visible && l[v].active) { const w = l[v].geometryIndex; this.getMatrixAt(v, Pt), this.getBoundingSphereAt(w, Rn).applyMatrix4(Pt); let T = !1; if (d && (T = !_.intersectsSphere(Rn, n)), !T) { const C = u[w], P = eh.subVectors(Rn.center, Pi).dot(oo); bs.push(C.start, C.count, P, v) } } const p = bs.list, M = this.customSort; M === null ? p.sort(s.transparent ? Zc : $c) : M.call(this, p, n); for (let v = 0, x = p.length; v < x; v++) { const w = p[v]; c[m] = w.start * o, h[m] = w.count, g[m] = w.index, m++ } bs.reset() } else for (let p = 0, M = l.length; p < M; p++)if (l[p].visible && l[p].active) { const v = l[p].geometryIndex; let x = !1; if (d && (this.getMatrixAt(p, Pt), this.getBoundingSphereAt(v, Rn).applyMatrix4(Pt), x = !_.intersectsSphere(Rn, n)), !x) { const w = u[v]; c[m] = w.start * o, h[m] = w.count, g[m] = p, m++ } } f.needsUpdate = !0, this._multiDrawCount = m, this._visibilityChanged = !1 } onBeforeShadow(e, t, n, i, s, a) { this.onBeforeRender(e, null, i, s, a) } } class Wr extends Ct { constructor(e) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Pe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this } } const Or = new R, zr = new R, lo = new ke, Li = new qi, Sr = new Et, Es = new R, co = new R; class Qs extends ct { constructor(e = new nt, t = new Wr) { super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = [0]; for (let i = 1, s = t.count; i < s; i++)Or.fromBufferAttribute(t, i - 1), zr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Or.distanceTo(zr); e.setAttribute("lineDistance", new Fe(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Sr.copy(n.boundingSphere), Sr.applyMatrix4(i), Sr.radius += s, e.ray.intersectsSphere(Sr) === !1) return; lo.copy(i).invert(), Li.copy(e.ray).applyMatrix4(lo); const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position; if (h !== null) { const f = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count); for (let _ = f, m = g - 1; _ < m; _ += c) { const p = h.getX(_), M = h.getX(_ + 1), v = br(this, e, Li, l, p, M, _); v && t.push(v) } if (this.isLineLoop) { const _ = h.getX(g - 1), m = h.getX(f), p = br(this, e, Li, l, _, m, g - 1); p && t.push(p) } } else { const f = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count); for (let _ = f, m = g - 1; _ < m; _ += c) { const p = br(this, e, Li, l, _, _ + 1, _); p && t.push(p) } if (this.isLineLoop) { const _ = br(this, e, Li, l, g - 1, f, g - 1); _ && t.push(_) } } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = i.length; s < a; s++) { const o = i[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } } function br(r, e, t, n, i, s, a) { const o = r.geometry.attributes.position; if (Or.fromBufferAttribute(o, i), zr.fromBufferAttribute(o, s), t.distanceSqToSegment(Or, zr, Es, co) > n) return; Es.applyMatrix4(r.matrixWorld); const c = e.ray.origin.distanceTo(Es); if (!(c < e.near || c > e.far)) return { distance: c, point: co.clone().applyMatrix4(r.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: r } } const ho = new R, uo = new R; class pl extends Qs { constructor(e, t) { super(e, t), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = []; for (let i = 0, s = t.count; i < s; i += 2)ho.fromBufferAttribute(t, i), uo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ho.distanceTo(uo); e.setAttribute("lineDistance", new Fe(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } } class ih extends Qs { constructor(e, t) { super(e, t), this.isLineLoop = !0, this.type = "LineLoop" } } class ml extends Ct { constructor(e) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Pe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this } } const fo = new ke, Os = new qi, Er = new Et, Tr = new R; class rh extends ct { constructor(e = new nt, t = new ml) { super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Er.copy(n.boundingSphere), Er.applyMatrix4(i), Er.radius += s, e.ray.intersectsSphere(Er) === !1) return; fo.copy(i).invert(), Os.copy(e.ray).applyMatrix4(fo); const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position; if (c !== null) { const d = Math.max(0, a.start), f = Math.min(c.count, a.start + a.count); for (let g = d, _ = f; g < _; g++) { const m = c.getX(g); Tr.fromBufferAttribute(u, m), po(Tr, m, l, i, e, t, this) } } else { const d = Math.max(0, a.start), f = Math.min(u.count, a.start + a.count); for (let g = d, _ = f; g < _; g++)Tr.fromBufferAttribute(u, g), po(Tr, g, l, i, e, t, this) } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = i.length; s < a; s++) { const o = i[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } } function po(r, e, t, n, i, s, a) { const o = Os.distanceSqToPoint(r); if (o < t) { const l = new R; Os.closestPointToPoint(r, l), l.applyMatrix4(n); const c = i.ray.origin.distanceTo(l); if (c < i.near || c > i.far) return; s.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a }) } } class gl extends gt { constructor(e, t, n, i, s, a, o, l, c, h, u, d) { super(null, a, o, l, c, h, i, s, u, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1 } } class E_ extends gl { constructor(e, t, n, i, s, a) { super(e, t, n, s, a), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = 1001, this.layerUpdates = new Set } addLayerUpdate(e) { this.layerUpdates.add(e) } clearLayerUpdates() { this.layerUpdates.clear() } } class T_ extends gl { constructor(e, t, n) { super(void 0, e[0].width, e[0].height, t, n, 301), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e } } class A_ extends gt { constructor(e, t, n, i, s, a, o, l, c) { super(e, t, n, i, s, a, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0 } } class _l extends gt { constructor(e, t, n = 1014, i, s, a, o = 1003, l = 1003, c, h = 1026, u = 1) { if (h !== 1026 && h !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); const d = { width: e, height: t, depth: u }; super(d, i, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.source = new Nn(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this } toJSON(e) { const t = super.toJSON(e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } } class xl extends gt { constructor(e = null) { super(), this.sourceTexture = e, this.isExternalTexture = !0 } copy(e) { return super.copy(e), this.sourceTexture = e.sourceTexture, this } } class js extends nt { constructor(e = 1, t = 1, n = 4, i = 8, s = 1) { super(), this.type = "CapsuleGeometry", this.parameters = { radius: e, height: t, capSegments: n, radialSegments: i, heightSegments: s }, t = Math.max(0, t), n = Math.max(1, Math.floor(n)), i = Math.max(3, Math.floor(i)), s = Math.max(1, Math.floor(s)); const a = [], o = [], l = [], c = [], h = t / 2, u = Math.PI / 2 * e, d = t, f = 2 * u + d, g = n * 2 + s, _ = i + 1, m = new R, p = new R; for (let M = 0; M <= g; M++) { let v = 0, x = 0, w = 0, T = 0; if (M <= n) { const b = M / n, S = b * Math.PI / 2; x = -h - e * Math.cos(S), w = e * Math.sin(S), T = -e * Math.cos(S), v = b * u } else if (M <= n + s) { const b = (M - n) / s; x = -h + b * t, w = e, T = 0, v = u + b * d } else { const b = (M - n - s) / n, S = b * Math.PI / 2; x = h + e * Math.sin(S), w = e * Math.cos(S), T = e * Math.sin(S), v = u + d + b * u } const C = Math.max(0, Math.min(1, v / f)); let P = 0; M === 0 ? P = .5 / i : M === g && (P = -.5 / i); for (let b = 0; b <= i; b++) { const S = b / i, L = S * Math.PI * 2, F = Math.sin(L), z = Math.cos(L); p.x = -w * z, p.y = x, p.z = w * F, o.push(p.x, p.y, p.z), m.set(-w * z, T, w * F), m.normalize(), l.push(m.x, m.y, m.z), c.push(S + P, C) } if (M > 0) { const b = (M - 1) * _; for (let S = 0; S < i; S++) { const L = b + S, F = b + S + 1, z = M * _ + S, H = M * _ + S + 1; a.push(L, F, z), a.push(F, H, z) } } } this.setIndex(a), this.setAttribute("position", new Fe(o, 3)), this.setAttribute("normal", new Fe(l, 3)), this.setAttribute("uv", new Fe(c, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new js(e.radius, e.height, e.capSegments, e.radialSegments, e.heightSegments) } } class ea extends nt { constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) { super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: i }, t = Math.max(3, t); const s = [], a = [], o = [], l = [], c = new R, h = new Q; a.push(0, 0, 0), o.push(0, 0, 1), l.push(.5, .5); for (let u = 0, d = 3; u <= t; u++, d += 3) { const f = n + u / t * i; c.x = e * Math.cos(f), c.y = e * Math.sin(f), a.push(c.x, c.y, c.z), o.push(0, 0, 1), h.x = (a[d] / e + 1) / 2, h.y = (a[d + 1] / e + 1) / 2, l.push(h.x, h.y) } for (let u = 1; u <= t; u++)s.push(u, u + 1, 0); this.setIndex(s), this.setAttribute("position", new Fe(a, 3)), this.setAttribute("normal", new Fe(o, 3)), this.setAttribute("uv", new Fe(l, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ea(e.radius, e.segments, e.thetaStart, e.thetaLength) } } class Xr extends nt { constructor(e = 1, t = 1, n = 1, i = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) { super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: i, heightSegments: s, openEnded: a, thetaStart: o, thetaLength: l }; const c = this; i = Math.floor(i), s = Math.floor(s); const h = [], u = [], d = [], f = []; let g = 0; const _ = [], m = n / 2; let p = 0; M(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(h), this.setAttribute("position", new Fe(u, 3)), this.setAttribute("normal", new Fe(d, 3)), this.setAttribute("uv", new Fe(f, 2)); function M() { const x = new R, w = new R; let T = 0; const C = (t - e) / n; for (let P = 0; P <= s; P++) { const b = [], S = P / s, L = S * (t - e) + e; for (let F = 0; F <= i; F++) { const z = F / i, H = z * l + o, q = Math.sin(H), W = Math.cos(H); w.x = L * q, w.y = -S * n + m, w.z = L * W, u.push(w.x, w.y, w.z), x.set(q, C, W).normalize(), d.push(x.x, x.y, x.z), f.push(z, 1 - S), b.push(g++) } _.push(b) } for (let P = 0; P < i; P++)for (let b = 0; b < s; b++) { const S = _[b][P], L = _[b + 1][P], F = _[b + 1][P + 1], z = _[b][P + 1]; (e > 0 || b !== 0) && (h.push(S, L, z), T += 3), (t > 0 || b !== s - 1) && (h.push(L, F, z), T += 3) } c.addGroup(p, T, 0), p += T } function v(x) { const w = g, T = new Q, C = new R; let P = 0; const b = x === !0 ? e : t, S = x === !0 ? 1 : -1; for (let F = 1; F <= i; F++)u.push(0, m * S, 0), d.push(0, S, 0), f.push(.5, .5), g++; const L = g; for (let F = 0; F <= i; F++) { const H = F / i * l + o, q = Math.cos(H), W = Math.sin(H); C.x = b * W, C.y = m * S, C.z = b * q, u.push(C.x, C.y, C.z), d.push(0, S, 0), T.x = q * .5 + .5, T.y = W * .5 * S + .5, f.push(T.x, T.y), g++ } for (let F = 0; F < i; F++) { const z = w + F, H = L + F; x === !0 ? h.push(H, H + 1, z) : h.push(H + 1, H, z), P += 3 } c.addGroup(p, P, x === !0 ? 1 : 2), p += P } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Xr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength) } } class ta extends Xr { constructor(e = 1, t = 1, n = 32, i = 1, s = !1, a = 0, o = Math.PI * 2) { super(0, e, t, n, i, s, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: i, openEnded: s, thetaStart: a, thetaLength: o } } static fromJSON(e) { return new ta(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength) } } class On extends nt { constructor(e = [], t = [], n = 1, i = 0) { super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: i }; const s = [], a = []; o(i), c(n), h(), this.setAttribute("position", new Fe(s, 3)), this.setAttribute("normal", new Fe(s.slice(), 3)), this.setAttribute("uv", new Fe(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals(); function o(M) { const v = new R, x = new R, w = new R; for (let T = 0; T < t.length; T += 3)f(t[T + 0], v), f(t[T + 1], x), f(t[T + 2], w), l(v, x, w, M) } function l(M, v, x, w) { const T = w + 1, C = []; for (let P = 0; P <= T; P++) { C[P] = []; const b = M.clone().lerp(x, P / T), S = v.clone().lerp(x, P / T), L = T - P; for (let F = 0; F <= L; F++)F === 0 && P === T ? C[P][F] = b : C[P][F] = b.clone().lerp(S, F / L) } for (let P = 0; P < T; P++)for (let b = 0; b < 2 * (T - P) - 1; b++) { const S = Math.floor(b / 2); b % 2 === 0 ? (d(C[P][S + 1]), d(C[P + 1][S]), d(C[P][S])) : (d(C[P][S + 1]), d(C[P + 1][S + 1]), d(C[P + 1][S])) } } function c(M) { const v = new R; for (let x = 0; x < s.length; x += 3)v.x = s[x + 0], v.y = s[x + 1], v.z = s[x + 2], v.normalize().multiplyScalar(M), s[x + 0] = v.x, s[x + 1] = v.y, s[x + 2] = v.z } function h() { const M = new R; for (let v = 0; v < s.length; v += 3) { M.x = s[v + 0], M.y = s[v + 1], M.z = s[v + 2]; const x = m(M) / 2 / Math.PI + .5, w = p(M) / Math.PI + .5; a.push(x, 1 - w) } g(), u() } function u() { for (let M = 0; M < a.length; M += 6) { const v = a[M + 0], x = a[M + 2], w = a[M + 4], T = Math.max(v, x, w), C = Math.min(v, x, w); T > .9 && C < .1 && (v < .2 && (a[M + 0] += 1), x < .2 && (a[M + 2] += 1), w < .2 && (a[M + 4] += 1)) } } function d(M) { s.push(M.x, M.y, M.z) } function f(M, v) { const x = M * 3; v.x = e[x + 0], v.y = e[x + 1], v.z = e[x + 2] } function g() { const M = new R, v = new R, x = new R, w = new R, T = new Q, C = new Q, P = new Q; for (let b = 0, S = 0; b < s.length; b += 9, S += 6) { M.set(s[b + 0], s[b + 1], s[b + 2]), v.set(s[b + 3], s[b + 4], s[b + 5]), x.set(s[b + 6], s[b + 7], s[b + 8]), T.set(a[S + 0], a[S + 1]), C.set(a[S + 2], a[S + 3]), P.set(a[S + 4], a[S + 5]), w.copy(M).add(v).add(x).divideScalar(3); const L = m(w); _(T, S + 0, M, L), _(C, S + 2, v, L), _(P, S + 4, x, L) } } function _(M, v, x, w) { w < 0 && M.x === 1 && (a[v] = M.x - 1), x.x === 0 && x.z === 0 && (a[v] = w / 2 / Math.PI + .5) } function m(M) { return Math.atan2(M.z, -M.x) } function p(M) { return Math.atan2(-M.y, Math.sqrt(M.x * M.x + M.z * M.z)) } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new On(e.vertices, e.indices, e.radius, e.details) } } class na extends On { constructor(e = 1, t = 0) { const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9]; super(s, a, e, t), this.type = "DodecahedronGeometry", this.parameters = { radius: e, detail: t } } static fromJSON(e) { return new na(e.radius, e.detail) } } const Ar = new R, wr = new R, Ts = new R, Rr = new Ot; class sh extends nt { constructor(e = null, t = 1) { if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: e, thresholdAngle: t }, e !== null) { const i = Math.pow(10, 4), s = Math.cos(li * t), a = e.getIndex(), o = e.getAttribute("position"), l = a ? a.count : o.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = []; for (let g = 0; g < l; g += 3) { a ? (c[0] = a.getX(g), c[1] = a.getX(g + 1), c[2] = a.getX(g + 2)) : (c[0] = g, c[1] = g + 1, c[2] = g + 2); const { a: _, b: m, c: p } = Rr; if (_.fromBufferAttribute(o, c[0]), m.fromBufferAttribute(o, c[1]), p.fromBufferAttribute(o, c[2]), Rr.getNormal(Ts), u[0] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, u[1] = `${Math.round(m.x * i)},${Math.round(m.y * i)},${Math.round(m.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0])) for (let M = 0; M < 3; M++) { const v = (M + 1) % 3, x = u[M], w = u[v], T = Rr[h[M]], C = Rr[h[v]], P = `${x}_${w}`, b = `${w}_${x}`; b in d && d[b] ? (Ts.dot(d[b].normal) <= s && (f.push(T.x, T.y, T.z), f.push(C.x, C.y, C.z)), d[b] = null) : P in d || (d[P] = { index0: c[M], index1: c[v], normal: Ts.clone() }) } } for (const g in d) if (d[g]) { const { index0: _, index1: m } = d[g]; Ar.fromBufferAttribute(o, _), wr.fromBufferAttribute(o, m), f.push(Ar.x, Ar.y, Ar.z), f.push(wr.x, wr.y, wr.z) } this.setAttribute("position", new Fe(f, 3)) } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } } class tn { constructor() { this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null } getPoint() { console.warn("THREE.Curve: .getPoint() not implemented.") } getPointAt(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) } getPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return t } getSpacedPoints(e = 5) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPointAt(n / e)); return t } getLength() { const e = this.getLengths(); return e[e.length - 1] } getLengths(e = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths; this.needsUpdate = !1; const t = []; let n, i = this.getPoint(0), s = 0; t.push(0); for (let a = 1; a <= e; a++)n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n; return this.cacheArcLengths = t, t } updateArcLengths() { this.needsUpdate = !0, this.getLengths() } getUtoTmapping(e, t = null) { const n = this.getLengths(); let i = 0; const s = n.length; let a; t ? a = t : a = e * n[s - 1]; let o = 0, l = s - 1, c; for (; o <= l;)if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0) o = i + 1; else if (c > 0) l = i - 1; else { l = i; break } if (i = l, n[i] === a) return i / (s - 1); const h = n[i], d = n[i + 1] - h, f = (a - h) / d; return (i + f) / (s - 1) } getTangent(e, t) { let i = e - 1e-4, s = e + 1e-4; i < 0 && (i = 0), s > 1 && (s = 1); const a = this.getPoint(i), o = this.getPoint(s), l = t || (a.isVector2 ? new Q : new R); return l.copy(o).sub(a).normalize(), l } getTangentAt(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) } computeFrenetFrames(e, t = !1) { const n = new R, i = [], s = [], a = [], o = new R, l = new ke; for (let f = 0; f <= e; f++) { const g = f / e; i[f] = this.getTangentAt(g, new R) } s[0] = new R, a[0] = new R; let c = Number.MAX_VALUE; const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z); h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]); for (let f = 1; f <= e; f++) { if (s[f] = s[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) { o.normalize(); const g = Math.acos(We(i[f - 1].dot(i[f]), -1, 1)); s[f].applyMatrix4(l.makeRotationAxis(o, g)) } a[f].crossVectors(i[f], s[f]) } if (t === !0) { let f = Math.acos(We(s[0].dot(s[e]), -1, 1)); f /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (f = -f); for (let g = 1; g <= e; g++)s[g].applyMatrix4(l.makeRotationAxis(i[g], f * g)), a[g].crossVectors(i[g], s[g]) } return { tangents: i, normals: s, binormals: a } } clone() { return new this.constructor().copy(this) } copy(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } toJSON() { const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e } fromJSON(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this } } class ia extends tn { constructor(e = 0, t = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l } getPoint(e, t = new Q) { const n = t, i = Math.PI * 2; let s = this.aEndAngle - this.aStartAngle; const a = Math.abs(s) < Number.EPSILON; for (; s < 0;)s += i; for (; s > i;)s -= i; s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i); const o = this.aStartAngle + e * s; let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o); if (this.aRotation !== 0) { const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY; l = d * h - f * u + this.aX, c = d * u + f * h + this.aY } return n.set(l, c) } copy(e) { return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } toJSON() { const e = super.toJSON(); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e } fromJSON(e) { return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this } } class ah extends ia { constructor(e, t, n, i, s, a) { super(e, t, n, n, i, s, a), this.isArcCurve = !0, this.type = "ArcCurve" } } function ra() { let r = 0, e = 0, t = 0, n = 0; function i(s, a, o, l) { r = s, e = o, t = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l } return { initCatmullRom: function (s, a, o, l, c) { i(a, o, c * (o - s), c * (l - a)) }, initNonuniformCatmullRom: function (s, a, o, l, c, h, u) { let d = (a - s) / c - (o - s) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + u) + (l - o) / u; d *= h, f *= h, i(a, o, d, f) }, calc: function (s) { const a = s * s, o = a * s; return r + e * s + t * a + n * o } } } const Cr = new R, As = new ra, ws = new ra, Rs = new ra; class oh extends tn { constructor(e = [], t = !1, n = "centripetal", i = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i } getPoint(e, t = new R) { const n = t, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * e; let o = Math.floor(a), l = a - o; this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1); let c, h; this.closed || o > 0 ? c = i[(o - 1) % s] : (Cr.subVectors(i[0], i[1]).add(i[0]), c = Cr); const u = i[o % s], d = i[(o + 1) % s]; if (this.closed || o + 2 < s ? h = i[(o + 2) % s] : (Cr.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = Cr), this.curveType === "centripetal" || this.curveType === "chordal") { const f = this.curveType === "chordal" ? .5 : .25; let g = Math.pow(c.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f); _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), m < 1e-4 && (m = _), As.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, g, _, m), ws.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, g, _, m), Rs.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, g, _, m) } else this.curveType === "catmullrom" && (As.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), ws.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), Rs.initCatmullRom(c.z, u.z, d.z, h.z, this.tension)); return n.set(As.calc(l), ws.calc(l), Rs.calc(l)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(i.clone()) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t]; e.points.push(i.toArray()) } return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(new R().fromArray(i)) } return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this } } function mo(r, e, t, n, i) { const s = (n - e) * .5, a = (i - t) * .5, o = r * r, l = r * o; return (2 * t - 2 * n + s + a) * l + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t } function lh(r, e) { const t = 1 - r; return t * t * e } function ch(r, e) { return 2 * (1 - r) * r * e } function hh(r, e) { return r * r * e } function Oi(r, e, t, n) { return lh(r, e) + ch(r, t) + hh(r, n) } function uh(r, e) { const t = 1 - r; return t * t * t * e } function dh(r, e) { const t = 1 - r; return 3 * t * t * r * e } function fh(r, e) { return 3 * (1 - r) * r * r * e } function ph(r, e) { return r * r * r * e } function zi(r, e, t, n, i) { return uh(r, e) + dh(r, t) + fh(r, n) + ph(r, i) } class vl extends tn { constructor(e = new Q, t = new Q, n = new Q, i = new Q) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i } getPoint(e, t = new Q) { const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3; return n.set(zi(e, i.x, s.x, a.x, o.x), zi(e, i.y, s.y, a.y, o.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class mh extends tn { constructor(e = new R, t = new R, n = new R, i = new R) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i } getPoint(e, t = new R) { const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3; return n.set(zi(e, i.x, s.x, a.x, o.x), zi(e, i.y, s.y, a.y, o.y), zi(e, i.z, s.z, a.z, o.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this } } class yl extends tn { constructor(e = new Q, t = new Q) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t } getPoint(e, t = new Q) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t = new Q) { return t.subVectors(this.v2, this.v1).normalize() } getTangentAt(e, t) { return this.getTangent(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class gh extends tn { constructor(e = new R, t = new R) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t } getPoint(e, t = new R) { const n = t; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n } getPointAt(e, t) { return this.getPoint(e, t) } getTangent(e, t = new R) { return t.subVectors(this.v2, this.v1).normalize() } getTangentAt(e, t) { return this.getTangent(e, t) } copy(e) { return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Ml extends tn { constructor(e = new Q, t = new Q, n = new Q) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new Q) { const n = t, i = this.v0, s = this.v1, a = this.v2; return n.set(Oi(e, i.x, s.x, a.x), Oi(e, i.y, s.y, a.y)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class Sl extends tn { constructor(e = new R, t = new R, n = new R) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n } getPoint(e, t = new R) { const n = t, i = this.v0, s = this.v1, a = this.v2; return n.set(Oi(e, i.x, s.x, a.x), Oi(e, i.y, s.y, a.y), Oi(e, i.z, s.z, a.z)), n } copy(e) { return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this } toJSON() { const e = super.toJSON(); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this } } class bl extends tn { constructor(e = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e } getPoint(e, t = new Q) { const n = t, i = this.points, s = (i.length - 1) * e, a = Math.floor(s), o = s - a, l = i[a === 0 ? a : a - 1], c = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2]; return n.set(mo(o, l.x, c.x, h.x, u.x), mo(o, l.y, c.y, h.y, u.y)), n } copy(e) { super.copy(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(i.clone()) } return this } toJSON() { const e = super.toJSON(); e.points = []; for (let t = 0, n = this.points.length; t < n; t++) { const i = this.points[t]; e.points.push(i.toArray()) } return e } fromJSON(e) { super.fromJSON(e), this.points = []; for (let t = 0, n = e.points.length; t < n; t++) { const i = e.points[t]; this.points.push(new Q().fromArray(i)) } return this } } var Vr = Object.freeze({ __proto__: null, ArcCurve: ah, CatmullRomCurve3: oh, CubicBezierCurve: vl, CubicBezierCurve3: mh, EllipseCurve: ia, LineCurve: yl, LineCurve3: gh, QuadraticBezierCurve: Ml, QuadraticBezierCurve3: Sl, SplineCurve: bl }); class _h extends tn { constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1 } add(e) { this.curves.push(e) } closePath() { const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1); if (!e.equals(t)) { const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3"; this.curves.push(new Vr[n](t, e)) } return this } getPoint(e, t) { const n = e * this.getLength(), i = this.getCurveLengths(); let s = 0; for (; s < i.length;) { if (i[s] >= n) { const a = i[s] - n, o = this.curves[s], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l; return o.getPointAt(c, t) } s++ } return null } getLength() { const e = this.getCurveLengths(); return e[e.length - 1] } updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() } getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const e = []; let t = 0; for (let n = 0, i = this.curves.length; n < i; n++)t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e } getSpacedPoints(e = 40) { const t = []; for (let n = 0; n <= e; n++)t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t } getPoints(e = 12) { const t = []; let n; for (let i = 0, s = this.curves; i < s.length; i++) { const a = s[i], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, l = a.getPoints(o); for (let c = 0; c < l.length; c++) { const h = l[c]; n && n.equals(h) || (t.push(h), n = h) } } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t } copy(e) { super.copy(e), this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t]; this.curves.push(i.clone()) } return this.autoClose = e.autoClose, this } toJSON() { const e = super.toJSON(); e.autoClose = this.autoClose, e.curves = []; for (let t = 0, n = this.curves.length; t < n; t++) { const i = this.curves[t]; e.curves.push(i.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.autoClose = e.autoClose, this.curves = []; for (let t = 0, n = e.curves.length; t < n; t++) { const i = e.curves[t]; this.curves.push(new Vr[i.type]().fromJSON(i)) } return this } } class go extends _h { constructor(e) { super(), this.type = "Path", this.currentPoint = new Q, e && this.setFromPoints(e) } setFromPoints(e) { this.moveTo(e[0].x, e[0].y); for (let t = 1, n = e.length; t < n; t++)this.lineTo(e[t].x, e[t].y); return this } moveTo(e, t) { return this.currentPoint.set(e, t), this } lineTo(e, t) { const n = new yl(this.currentPoint.clone(), new Q(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this } quadraticCurveTo(e, t, n, i) { const s = new Ml(this.currentPoint.clone(), new Q(e, t), new Q(n, i)); return this.curves.push(s), this.currentPoint.set(n, i), this } bezierCurveTo(e, t, n, i, s, a) { const o = new vl(this.currentPoint.clone(), new Q(e, t), new Q(n, i), new Q(s, a)); return this.curves.push(o), this.currentPoint.set(s, a), this } splineThru(e) { const t = [this.currentPoint.clone()].concat(e), n = new bl(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this } arc(e, t, n, i, s, a) { const o = this.currentPoint.x, l = this.currentPoint.y; return this.absarc(e + o, t + l, n, i, s, a), this } absarc(e, t, n, i, s, a) { return this.absellipse(e, t, n, n, i, s, a), this } ellipse(e, t, n, i, s, a, o, l) { const c = this.currentPoint.x, h = this.currentPoint.y; return this.absellipse(e + c, t + h, n, i, s, a, o, l), this } absellipse(e, t, n, i, s, a, o, l) { const c = new ia(e, t, n, i, s, a, o, l); if (this.curves.length > 0) { const u = c.getPoint(0); u.equals(this.currentPoint) || this.lineTo(u.x, u.y) } this.curves.push(c); const h = c.getPoint(1); return this.currentPoint.copy(h), this } copy(e) { return super.copy(e), this.currentPoint.copy(e.currentPoint), this } toJSON() { const e = super.toJSON(); return e.currentPoint = this.currentPoint.toArray(), e } fromJSON(e) { return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this } } class sa extends go { constructor(e) { super(e), this.uuid = Ht(), this.type = "Shape", this.holes = [] } getPointsHoles(e) { const t = []; for (let n = 0, i = this.holes.length; n < i; n++)t[n] = this.holes[n].getPoints(e); return t } extractPoints(e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) } } copy(e) { super.copy(e), this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t]; this.holes.push(i.clone()) } return this } toJSON() { const e = super.toJSON(); e.uuid = this.uuid, e.holes = []; for (let t = 0, n = this.holes.length; t < n; t++) { const i = this.holes[t]; e.holes.push(i.toJSON()) } return e } fromJSON(e) { super.fromJSON(e), this.uuid = e.uuid, this.holes = []; for (let t = 0, n = e.holes.length; t < n; t++) { const i = e.holes[t]; this.holes.push(new go().fromJSON(i)) } return this } } function xh(r, e, t = 2) { const n = e && e.length, i = n ? e[0] * t : r.length; let s = El(r, 0, i, t, !0); const a = []; if (!s || s.next === s.prev) return a; let o, l, c; if (n && (s = bh(r, e, s, t)), r.length > 80 * t) { o = 1 / 0, l = 1 / 0; let h = -1 / 0, u = -1 / 0; for (let d = t; d < i; d += t) { const f = r[d], g = r[d + 1]; f < o && (o = f), g < l && (l = g), f > h && (h = f), g > u && (u = g) } c = Math.max(h - o, u - l), c = c !== 0 ? 32767 / c : 0 } return Hi(s, a, t, o, l, c, 0), a } function El(r, e, t, n, i) { let s; if (i === Uh(r, e, t, n) > 0) for (let a = e; a < t; a += n)s = _o(a / n | 0, r[a], r[a + 1], s); else for (let a = t - n; a >= e; a -= n)s = _o(a / n | 0, r[a], r[a + 1], s); return s && pi(s, s.next) && (Xi(s), s = s.next), s } function Bn(r, e) { if (!r) return r; e || (e = r); let t = r, n; do if (n = !1, !t.steiner && (pi(t, t.next) || ft(t.prev, t, t.next) === 0)) { if (Xi(t), t = e = t.prev, t === t.next) break; n = !0 } else t = t.next; while (n || t !== e); return e } function Hi(r, e, t, n, i, s, a) { if (!r) return; !a && s && Rh(r, n, i, s); let o = r; for (; r.prev !== r.next;) { const l = r.prev, c = r.next; if (s ? yh(r, n, i, s) : vh(r)) { e.push(l.i, r.i, c.i), Xi(r), r = c.next, o = c.next; continue } if (r = c, r === o) { a ? a === 1 ? (r = Mh(Bn(r), e), Hi(r, e, t, n, i, s, 2)) : a === 2 && Sh(r, e, t, n, i, s) : Hi(Bn(r), e, t, n, i, s, 1); break } } } function vh(r) { const e = r.prev, t = r, n = r.next; if (ft(e, t, n) >= 0) return !1; const i = e.x, s = t.x, a = n.x, o = e.y, l = t.y, c = n.y, h = Math.min(i, s, a), u = Math.min(o, l, c), d = Math.max(i, s, a), f = Math.max(o, l, c); let g = n.next; for (; g !== e;) { if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && Ni(i, o, s, l, a, c, g.x, g.y) && ft(g.prev, g, g.next) >= 0) return !1; g = g.next } return !0 } function yh(r, e, t, n) { const i = r.prev, s = r, a = r.next; if (ft(i, s, a) >= 0) return !1; const o = i.x, l = s.x, c = a.x, h = i.y, u = s.y, d = a.y, f = Math.min(o, l, c), g = Math.min(h, u, d), _ = Math.max(o, l, c), m = Math.max(h, u, d), p = zs(f, g, e, t, n), M = zs(_, m, e, t, n); let v = r.prevZ, x = r.nextZ; for (; v && v.z >= p && x && x.z <= M;) { if (v.x >= f && v.x <= _ && v.y >= g && v.y <= m && v !== i && v !== a && Ni(o, h, l, u, c, d, v.x, v.y) && ft(v.prev, v, v.next) >= 0 || (v = v.prevZ, x.x >= f && x.x <= _ && x.y >= g && x.y <= m && x !== i && x !== a && Ni(o, h, l, u, c, d, x.x, x.y) && ft(x.prev, x, x.next) >= 0)) return !1; x = x.nextZ } for (; v && v.z >= p;) { if (v.x >= f && v.x <= _ && v.y >= g && v.y <= m && v !== i && v !== a && Ni(o, h, l, u, c, d, v.x, v.y) && ft(v.prev, v, v.next) >= 0) return !1; v = v.prevZ } for (; x && x.z <= M;) { if (x.x >= f && x.x <= _ && x.y >= g && x.y <= m && x !== i && x !== a && Ni(o, h, l, u, c, d, x.x, x.y) && ft(x.prev, x, x.next) >= 0) return !1; x = x.nextZ } return !0 } function Mh(r, e) { let t = r; do { const n = t.prev, i = t.next.next; !pi(n, i) && Al(n, t, t.next, i) && Wi(n, i) && Wi(i, n) && (e.push(n.i, t.i, i.i), Xi(t), Xi(t.next), t = r = i), t = t.next } while (t !== r); return Bn(t) } function Sh(r, e, t, n, i, s) { let a = r; do { let o = a.next.next; for (; o !== a.prev;) { if (a.i !== o.i && Ph(a, o)) { let l = wl(a, o); a = Bn(a, a.next), l = Bn(l, l.next), Hi(a, e, t, n, i, s, 0), Hi(l, e, t, n, i, s, 0); return } o = o.next } a = a.next } while (a !== r) } function bh(r, e, t, n) { const i = []; for (let s = 0, a = e.length; s < a; s++) { const o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : r.length, c = El(r, o, l, n, !1); c === c.next && (c.steiner = !0), i.push(Ih(c)) } i.sort(Eh); for (let s = 0; s < i.length; s++)t = Th(i[s], t); return t } function Eh(r, e) { let t = r.x - e.x; if (t === 0 && (t = r.y - e.y, t === 0)) { const n = (r.next.y - r.y) / (r.next.x - r.x), i = (e.next.y - e.y) / (e.next.x - e.x); t = n - i } return t } function Th(r, e) { const t = Ah(r, e); if (!t) return e; const n = wl(t, r); return Bn(n, n.next), Bn(t, t.next) } function Ah(r, e) { let t = e; const n = r.x, i = r.y; let s = -1 / 0, a; if (pi(r, t)) return t; do { if (pi(r, t.next)) return t.next; if (i <= t.y && i >= t.next.y && t.next.y !== t.y) { const u = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y); if (u <= n && u > s && (s = u, a = t.x < t.next.x ? t : t.next, u === n)) return a } t = t.next } while (t !== e); if (!a) return null; const o = a, l = a.x, c = a.y; let h = 1 / 0; t = a; do { if (n >= t.x && t.x >= l && n !== t.x && Tl(i < c ? n : s, i, l, c, i < c ? s : n, i, t.x, t.y)) { const u = Math.abs(i - t.y) / (n - t.x); Wi(t, r) && (u < h || u === h && (t.x > a.x || t.x === a.x && wh(a, t))) && (a = t, h = u) } t = t.next } while (t !== o); return a } function wh(r, e) { return ft(r.prev, r, e.prev) < 0 && ft(e.next, r, r.next) < 0 } function Rh(r, e, t, n) { let i = r; do i.z === 0 && (i.z = zs(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== r); i.prevZ.nextZ = null, i.prevZ = null, Ch(i) } function Ch(r) { let e, t = 1; do { let n = r, i; r = null; let s = null; for (e = 0; n;) { e++; let a = n, o = 0; for (let c = 0; c < t && (o++, a = a.nextZ, !!a); c++); let l = t; for (; o > 0 || l > 0 && a;)o !== 0 && (l === 0 || !a || n.z <= a.z) ? (i = n, n = n.nextZ, o--) : (i = a, a = a.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i; n = a } s.nextZ = null, t *= 2 } while (e > 1); return r } function zs(r, e, t, n, i) { return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1 } function Ih(r) { let e = r, t = r; do (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== r); return t } function Tl(r, e, t, n, i, s, a, o) { return (i - a) * (e - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (i - a) * (n - o) } function Ni(r, e, t, n, i, s, a, o) { return !(r === a && e === o) && Tl(r, e, t, n, i, s, a, o) } function Ph(r, e) { return r.next.i !== e.i && r.prev.i !== e.i && !Lh(r, e) && (Wi(r, e) && Wi(e, r) && Dh(r, e) && (ft(r.prev, r, e.prev) || ft(r, e.prev, e)) || pi(r, e) && ft(r.prev, r, r.next) > 0 && ft(e.prev, e, e.next) > 0) } function ft(r, e, t) { return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y) } function pi(r, e) { return r.x === e.x && r.y === e.y } function Al(r, e, t, n) { const i = Pr(ft(r, e, t)), s = Pr(ft(r, e, n)), a = Pr(ft(t, n, r)), o = Pr(ft(t, n, e)); return !!(i !== s && a !== o || i === 0 && Ir(r, t, e) || s === 0 && Ir(r, n, e) || a === 0 && Ir(t, r, n) || o === 0 && Ir(t, e, n)) } function Ir(r, e, t) { return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y) } function Pr(r) { return r > 0 ? 1 : r < 0 ? -1 : 0 } function Lh(r, e) { let t = r; do { if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Al(t, t.next, r, e)) return !0; t = t.next } while (t !== r); return !1 } function Wi(r, e) { return ft(r.prev, r, r.next) < 0 ? ft(r, e, r.next) >= 0 && ft(r, r.prev, e) >= 0 : ft(r, e, r.prev) < 0 || ft(r, r.next, e) < 0 } function Dh(r, e) { let t = r, n = !1; const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2; do t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== r); return n } function wl(r, e) { const t = Vs(r.i, r.x, r.y), n = Vs(e.i, e.x, e.y), i = r.next, s = e.prev; return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n } function _o(r, e, t, n) { const i = Vs(r, e, t); return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i } function Xi(r) { r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ) } function Vs(r, e, t) { return { i: r, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: !1 } } function Uh(r, e, t, n) { let i = 0; for (let s = e, a = t - n; s < t; s += n)i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s; return i } class Nh { static triangulate(e, t, n = 2) { return xh(e, t, n) } } class un { static area(e) { const t = e.length; let n = 0; for (let i = t - 1, s = 0; s < t; i = s++)n += e[i].x * e[s].y - e[s].x * e[i].y; return n * .5 } static isClockWise(e) { return un.area(e) < 0 } static triangulateShape(e, t) { const n = [], i = [], s = []; xo(e), vo(n, e); let a = e.length; t.forEach(xo); for (let l = 0; l < t.length; l++)i.push(a), a += t[l].length, vo(n, t[l]); const o = Nh.triangulate(n, i); for (let l = 0; l < o.length; l += 3)s.push(o.slice(l, l + 3)); return s } } function xo(r) { const e = r.length; e > 2 && r[e - 1].equals(r[0]) && r.pop() } function vo(r, e) { for (let t = 0; t < e.length; t++)r.push(e[t].x), r.push(e[t].y) } class aa extends nt { constructor(e = new sa([new Q(.5, .5), new Q(-.5, .5), new Q(-.5, -.5), new Q(.5, -.5)]), t = {}) { super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e]; const n = this, i = [], s = []; for (let o = 0, l = e.length; o < l; o++) { const c = e[o]; a(c) } this.setAttribute("position", new Fe(i, 3)), this.setAttribute("uv", new Fe(s, 2)), this.computeVertexNormals(); function a(o) { const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1; let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : .2, g = t.bevelSize !== void 0 ? t.bevelSize : f - .1, _ = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3; const p = t.extrudePath, M = t.UVGenerator !== void 0 ? t.UVGenerator : Fh; let v, x = !1, w, T, C, P; p && (v = p.getSpacedPoints(h), x = !0, d = !1, w = p.computeFrenetFrames(h, !1), T = new R, C = new R, P = new R), d || (m = 0, f = 0, g = 0, _ = 0); const b = o.extractPoints(c); let S = b.shape; const L = b.holes; if (!un.isClockWise(S)) { S = S.reverse(); for (let ee = 0, Z = L.length; ee < Z; ee++) { const $ = L[ee]; un.isClockWise($) && (L[ee] = $.reverse()) } } function z(ee) { const $ = 10000000000000001e-36; let J = ee[0]; for (let ce = 1; ce <= ee.length; ce++) { const ie = ce % ee.length, he = ee[ie], Oe = he.x - J.x, Be = he.y - J.y, A = Oe * Oe + Be * Be, y = Math.max(Math.abs(he.x), Math.abs(he.y), Math.abs(J.x), Math.abs(J.y)), B = $ * y * y; if (A <= B) { ee.splice(ie, 1), ce--; continue } J = he } } z(S), L.forEach(z); const H = L.length, q = S; for (let ee = 0; ee < H; ee++) { const Z = L[ee]; S = S.concat(Z) } function W(ee, Z, $) { return Z || console.error("THREE.ExtrudeGeometry: vec does not exist"), ee.clone().addScaledVector(Z, $) } const ne = S.length; function k(ee, Z, $) { let J, ce, ie; const he = ee.x - Z.x, Oe = ee.y - Z.y, Be = $.x - ee.x, A = $.y - ee.y, y = he * he + Oe * Oe, B = he * A - Oe * Be; if (Math.abs(B) > Number.EPSILON) { const G = Math.sqrt(y), j = Math.sqrt(Be * Be + A * A), X = Z.x - Oe / G, we = Z.y + he / G, le = $.x - A / j, Ee = $.y + Be / j, Te = ((le - X) * A - (Ee - we) * Be) / (he * A - Oe * Be); J = X + he * Te - ee.x, ce = we + Oe * Te - ee.y; const re = J * J + ce * ce; if (re <= 2) return new Q(J, ce); ie = Math.sqrt(re / 2) } else { let G = !1; he > Number.EPSILON ? Be > Number.EPSILON && (G = !0) : he < -Number.EPSILON ? Be < -Number.EPSILON && (G = !0) : Math.sign(Oe) === Math.sign(A) && (G = !0), G ? (J = -Oe, ce = he, ie = Math.sqrt(y)) : (J = he, ce = Oe, ie = Math.sqrt(y / 2)) } return new Q(J / ie, ce / ie) } const ue = []; for (let ee = 0, Z = q.length, $ = Z - 1, J = ee + 1; ee < Z; ee++, $++, J++)$ === Z && ($ = 0), J === Z && (J = 0), ue[ee] = k(q[ee], q[$], q[J]); const _e = []; let ye, Ve = ue.concat(); for (let ee = 0, Z = H; ee < Z; ee++) { const $ = L[ee]; ye = []; for (let J = 0, ce = $.length, ie = ce - 1, he = J + 1; J < ce; J++, ie++, he++)ie === ce && (ie = 0), he === ce && (he = 0), ye[J] = k($[J], $[ie], $[he]); _e.push(ye), Ve = Ve.concat(ye) } let Je; if (m === 0) Je = un.triangulateShape(q, L); else { const ee = [], Z = []; for (let $ = 0; $ < m; $++) { const J = $ / m, ce = f * Math.cos(J * Math.PI / 2), ie = g * Math.sin(J * Math.PI / 2) + _; for (let he = 0, Oe = q.length; he < Oe; he++) { const Be = W(q[he], ue[he], ie); Ce(Be.x, Be.y, -ce), J === 0 && ee.push(Be) } for (let he = 0, Oe = H; he < Oe; he++) { const Be = L[he]; ye = _e[he]; const A = []; for (let y = 0, B = Be.length; y < B; y++) { const G = W(Be[y], ye[y], ie); Ce(G.x, G.y, -ce), J === 0 && A.push(G) } J === 0 && Z.push(A) } } Je = un.triangulateShape(ee, Z) } const et = Je.length, $e = g + _; for (let ee = 0; ee < ne; ee++) { const Z = d ? W(S[ee], Ve[ee], $e) : S[ee]; x ? (C.copy(w.normals[0]).multiplyScalar(Z.x), T.copy(w.binormals[0]).multiplyScalar(Z.y), P.copy(v[0]).add(C).add(T), Ce(P.x, P.y, P.z)) : Ce(Z.x, Z.y, 0) } for (let ee = 1; ee <= h; ee++)for (let Z = 0; Z < ne; Z++) { const $ = d ? W(S[Z], Ve[Z], $e) : S[Z]; x ? (C.copy(w.normals[ee]).multiplyScalar($.x), T.copy(w.binormals[ee]).multiplyScalar($.y), P.copy(v[ee]).add(C).add(T), Ce(P.x, P.y, P.z)) : Ce($.x, $.y, u / h * ee) } for (let ee = m - 1; ee >= 0; ee--) { const Z = ee / m, $ = f * Math.cos(Z * Math.PI / 2), J = g * Math.sin(Z * Math.PI / 2) + _; for (let ce = 0, ie = q.length; ce < ie; ce++) { const he = W(q[ce], ue[ce], J); Ce(he.x, he.y, u + $) } for (let ce = 0, ie = L.length; ce < ie; ce++) { const he = L[ce]; ye = _e[ce]; for (let Oe = 0, Be = he.length; Oe < Be; Oe++) { const A = W(he[Oe], ye[Oe], J); x ? Ce(A.x, A.y + v[h - 1].y, v[h - 1].x + $) : Ce(A.x, A.y, u + $) } } } Y(), te(); function Y() { const ee = i.length / 3; if (d) { let Z = 0, $ = ne * Z; for (let J = 0; J < et; J++) { const ce = Je[J]; be(ce[2] + $, ce[1] + $, ce[0] + $) } Z = h + m * 2, $ = ne * Z; for (let J = 0; J < et; J++) { const ce = Je[J]; be(ce[0] + $, ce[1] + $, ce[2] + $) } } else { for (let Z = 0; Z < et; Z++) { const $ = Je[Z]; be($[2], $[1], $[0]) } for (let Z = 0; Z < et; Z++) { const $ = Je[Z]; be($[0] + ne * h, $[1] + ne * h, $[2] + ne * h) } } n.addGroup(ee, i.length / 3 - ee, 0) } function te() { const ee = i.length / 3; let Z = 0; ve(q, Z), Z += q.length; for (let $ = 0, J = L.length; $ < J; $++) { const ce = L[$]; ve(ce, Z), Z += ce.length } n.addGroup(ee, i.length / 3 - ee, 1) } function ve(ee, Z) { let $ = ee.length; for (; --$ >= 0;) { const J = $; let ce = $ - 1; ce < 0 && (ce = ee.length - 1); for (let ie = 0, he = h + m * 2; ie < he; ie++) { const Oe = ne * ie, Be = ne * (ie + 1), A = Z + J + Oe, y = Z + ce + Oe, B = Z + ce + Be, G = Z + J + Be; qe(A, y, B, G) } } } function Ce(ee, Z, $) { l.push(ee), l.push(Z), l.push($) } function be(ee, Z, $) { ot(ee), ot(Z), ot($); const J = i.length / 3, ce = M.generateTopUV(n, i, J - 3, J - 2, J - 1); I(ce[0]), I(ce[1]), I(ce[2]) } function qe(ee, Z, $, J) { ot(ee), ot(Z), ot(J), ot(Z), ot($), ot(J); const ce = i.length / 3, ie = M.generateSideWallUV(n, i, ce - 6, ce - 3, ce - 2, ce - 1); I(ie[0]), I(ie[1]), I(ie[3]), I(ie[1]), I(ie[2]), I(ie[3]) } function ot(ee) { i.push(l[ee * 3 + 0]), i.push(l[ee * 3 + 1]), i.push(l[ee * 3 + 2]) } function I(ee) { s.push(ee.x), s.push(ee.y) } } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } toJSON() { const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options; return Bh(t, n, e) } static fromJSON(e, t) { const n = []; for (let s = 0, a = e.shapes.length; s < a; s++) { const o = t[e.shapes[s]]; n.push(o) } const i = e.options.extrudePath; return i !== void 0 && (e.options.extrudePath = new Vr[i.type]().fromJSON(i)), new aa(n, e.options) } } const Fh = { generateTopUV: function (r, e, t, n, i) { const s = e[t * 3], a = e[t * 3 + 1], o = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], h = e[i * 3 + 1]; return [new Q(s, a), new Q(o, l), new Q(c, h)] }, generateSideWallUV: function (r, e, t, n, i, s) { const a = e[t * 3], o = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], g = e[i * 3 + 2], _ = e[s * 3], m = e[s * 3 + 1], p = e[s * 3 + 2]; return Math.abs(o - h) < Math.abs(a - c) ? [new Q(a, 1 - l), new Q(c, 1 - u), new Q(d, 1 - g), new Q(_, 1 - p)] : [new Q(o, 1 - l), new Q(h, 1 - u), new Q(f, 1 - g), new Q(m, 1 - p)] } }; function Bh(r, e, t) { if (t.shapes = [], Array.isArray(r)) for (let n = 0, i = r.length; n < i; n++) { const s = r[n]; t.shapes.push(s.uuid) } else t.shapes.push(r.uuid); return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t } class oa extends On { constructor(e = 1, t = 0) { const n = (1 + Math.sqrt(5)) / 2, i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], s = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1]; super(i, s, e, t), this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t } } static fromJSON(e) { return new oa(e.radius, e.detail) } } class la extends nt { constructor(e = [new Q(0, -.5), new Q(.5, 0), new Q(0, .5)], t = 12, n = 0, i = Math.PI * 2) { super(), this.type = "LatheGeometry", this.parameters = { points: e, segments: t, phiStart: n, phiLength: i }, t = Math.floor(t), i = We(i, 0, Math.PI * 2); const s = [], a = [], o = [], l = [], c = [], h = 1 / t, u = new R, d = new Q, f = new R, g = new R, _ = new R; let m = 0, p = 0; for (let M = 0; M <= e.length - 1; M++)switch (M) { case 0: m = e[M + 1].x - e[M].x, p = e[M + 1].y - e[M].y, f.x = p * 1, f.y = -m, f.z = p * 0, _.copy(f), f.normalize(), l.push(f.x, f.y, f.z); break; case e.length - 1: l.push(_.x, _.y, _.z); break; default: m = e[M + 1].x - e[M].x, p = e[M + 1].y - e[M].y, f.x = p * 1, f.y = -m, f.z = p * 0, g.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), l.push(f.x, f.y, f.z), _.copy(g) }for (let M = 0; M <= t; M++) { const v = n + M * h * i, x = Math.sin(v), w = Math.cos(v); for (let T = 0; T <= e.length - 1; T++) { u.x = e[T].x * x, u.y = e[T].y, u.z = e[T].x * w, a.push(u.x, u.y, u.z), d.x = M / t, d.y = T / (e.length - 1), o.push(d.x, d.y); const C = l[3 * T + 0] * x, P = l[3 * T + 1], b = l[3 * T + 0] * w; c.push(C, P, b) } } for (let M = 0; M < t; M++)for (let v = 0; v < e.length - 1; v++) { const x = v + M * e.length, w = x, T = x + e.length, C = x + e.length + 1, P = x + 1; s.push(w, T, P), s.push(C, P, T) } this.setIndex(s), this.setAttribute("position", new Fe(a, 3)), this.setAttribute("uv", new Fe(o, 2)), this.setAttribute("normal", new Fe(c, 3)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new la(e.points, e.segments, e.phiStart, e.phiLength) } } class ca extends On { constructor(e = 1, t = 0) { const n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2]; super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t } } static fromJSON(e) { return new ca(e.radius, e.detail) } } class Ji extends nt { constructor(e = 1, t = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, f = [], g = [], _ = [], m = []; for (let p = 0; p < h; p++) { const M = p * d - a; for (let v = 0; v < c; v++) { const x = v * u - s; g.push(x, -M, 0), _.push(0, 0, 1), m.push(v / o), m.push(1 - p / l) } } for (let p = 0; p < l; p++)for (let M = 0; M < o; M++) { const v = M + c * p, x = M + c * (p + 1), w = M + 1 + c * (p + 1), T = M + 1 + c * p; f.push(v, x, T), f.push(x, w, T) } this.setIndex(f), this.setAttribute("position", new Fe(g, 3)), this.setAttribute("normal", new Fe(_, 3)), this.setAttribute("uv", new Fe(m, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Ji(e.width, e.height, e.widthSegments, e.heightSegments) } } class ha extends nt { constructor(e = .5, t = 1, n = 32, i = 1, s = 0, a = Math.PI * 2) { super(), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: n, phiSegments: i, thetaStart: s, thetaLength: a }, n = Math.max(3, n), i = Math.max(1, i); const o = [], l = [], c = [], h = []; let u = e; const d = (t - e) / i, f = new R, g = new Q; for (let _ = 0; _ <= i; _++) { for (let m = 0; m <= n; m++) { const p = s + m / n * a; f.x = u * Math.cos(p), f.y = u * Math.sin(p), l.push(f.x, f.y, f.z), c.push(0, 0, 1), g.x = (f.x / t + 1) / 2, g.y = (f.y / t + 1) / 2, h.push(g.x, g.y) } u += d } for (let _ = 0; _ < i; _++) { const m = _ * (n + 1); for (let p = 0; p < n; p++) { const M = p + m, v = M, x = M + n + 1, w = M + n + 2, T = M + 1; o.push(v, x, T), o.push(x, w, T) } } this.setIndex(o), this.setAttribute("position", new Fe(l, 3)), this.setAttribute("normal", new Fe(c, 3)), this.setAttribute("uv", new Fe(h, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ha(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength) } } class ua extends nt { constructor(e = new sa([new Q(0, .5), new Q(-.5, -.5), new Q(.5, -.5)]), t = 12) { super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t }; const n = [], i = [], s = [], a = []; let o = 0, l = 0; if (Array.isArray(e) === !1) c(e); else for (let h = 0; h < e.length; h++)c(e[h]), this.addGroup(o, l, h), o += l, l = 0; this.setIndex(n), this.setAttribute("position", new Fe(i, 3)), this.setAttribute("normal", new Fe(s, 3)), this.setAttribute("uv", new Fe(a, 2)); function c(h) { const u = i.length / 3, d = h.extractPoints(t); let f = d.shape; const g = d.holes; un.isClockWise(f) === !1 && (f = f.reverse()); for (let m = 0, p = g.length; m < p; m++) { const M = g[m]; un.isClockWise(M) === !0 && (g[m] = M.reverse()) } const _ = un.triangulateShape(f, g); for (let m = 0, p = g.length; m < p; m++) { const M = g[m]; f = f.concat(M) } for (let m = 0, p = f.length; m < p; m++) { const M = f[m]; i.push(M.x, M.y, 0), s.push(0, 0, 1), a.push(M.x, M.y) } for (let m = 0, p = _.length; m < p; m++) { const M = _[m], v = M[0] + u, x = M[1] + u, w = M[2] + u; n.push(v, x, w), l += 3 } } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } toJSON() { const e = super.toJSON(), t = this.parameters.shapes; return Oh(t, e) } static fromJSON(e, t) { const n = []; for (let i = 0, s = e.shapes.length; i < s; i++) { const a = t[e.shapes[i]]; n.push(a) } return new ua(n, e.curveSegments) } } function Oh(r, e) { if (e.shapes = [], Array.isArray(r)) for (let t = 0, n = r.length; t < n; t++) { const i = r[t]; e.shapes.push(i.uuid) } else e.shapes.push(r.uuid); return e } class da extends nt { constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: s, thetaStart: a, thetaLength: o }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n)); const l = Math.min(a + o, Math.PI); let c = 0; const h = [], u = new R, d = new R, f = [], g = [], _ = [], m = []; for (let p = 0; p <= n; p++) { const M = [], v = p / n; let x = 0; p === 0 && a === 0 ? x = .5 / t : p === n && l === Math.PI && (x = -.5 / t); for (let w = 0; w <= t; w++) { const T = w / t; u.x = -e * Math.cos(i + T * s) * Math.sin(a + v * o), u.y = e * Math.cos(a + v * o), u.z = e * Math.sin(i + T * s) * Math.sin(a + v * o), g.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), m.push(T + x, 1 - v), M.push(c++) } h.push(M) } for (let p = 0; p < n; p++)for (let M = 0; M < t; M++) { const v = h[p][M + 1], x = h[p][M], w = h[p + 1][M], T = h[p + 1][M + 1]; (p !== 0 || a > 0) && f.push(v, x, T), (p !== n - 1 || l < Math.PI) && f.push(x, w, T) } this.setIndex(f), this.setAttribute("position", new Fe(g, 3)), this.setAttribute("normal", new Fe(_, 3)), this.setAttribute("uv", new Fe(m, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new da(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength) } } class fa extends On { constructor(e = 1, t = 0) { const n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1]; super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = { radius: e, detail: t } } static fromJSON(e) { return new fa(e.radius, e.detail) } } class pa extends nt { constructor(e = 1, t = .4, n = 12, i = 48, s = Math.PI * 2) { super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: i, arc: s }, n = Math.floor(n), i = Math.floor(i); const a = [], o = [], l = [], c = [], h = new R, u = new R, d = new R; for (let f = 0; f <= n; f++)for (let g = 0; g <= i; g++) { const _ = g / i * s, m = f / n * Math.PI * 2; u.x = (e + t * Math.cos(m)) * Math.cos(_), u.y = (e + t * Math.cos(m)) * Math.sin(_), u.z = t * Math.sin(m), o.push(u.x, u.y, u.z), h.x = e * Math.cos(_), h.y = e * Math.sin(_), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(g / i), c.push(f / n) } for (let f = 1; f <= n; f++)for (let g = 1; g <= i; g++) { const _ = (i + 1) * f + g - 1, m = (i + 1) * (f - 1) + g - 1, p = (i + 1) * (f - 1) + g, M = (i + 1) * f + g; a.push(_, m, M), a.push(m, p, M) } this.setIndex(a), this.setAttribute("position", new Fe(o, 3)), this.setAttribute("normal", new Fe(l, 3)), this.setAttribute("uv", new Fe(c, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new pa(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc) } } class ma extends nt { constructor(e = 1, t = .4, n = 64, i = 8, s = 2, a = 3) { super(), this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: i, p: s, q: a }, n = Math.floor(n), i = Math.floor(i); const o = [], l = [], c = [], h = [], u = new R, d = new R, f = new R, g = new R, _ = new R, m = new R, p = new R; for (let v = 0; v <= n; ++v) { const x = v / n * s * Math.PI * 2; M(x, s, a, e, f), M(x + .01, s, a, e, g), m.subVectors(g, f), p.addVectors(g, f), _.crossVectors(m, p), p.crossVectors(_, m), _.normalize(), p.normalize(); for (let w = 0; w <= i; ++w) { const T = w / i * Math.PI * 2, C = -t * Math.cos(T), P = t * Math.sin(T); u.x = f.x + (C * p.x + P * _.x), u.y = f.y + (C * p.y + P * _.y), u.z = f.z + (C * p.z + P * _.z), l.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), h.push(v / n), h.push(w / i) } } for (let v = 1; v <= n; v++)for (let x = 1; x <= i; x++) { const w = (i + 1) * (v - 1) + (x - 1), T = (i + 1) * v + (x - 1), C = (i + 1) * v + x, P = (i + 1) * (v - 1) + x; o.push(w, T, P), o.push(T, C, P) } this.setIndex(o), this.setAttribute("position", new Fe(l, 3)), this.setAttribute("normal", new Fe(c, 3)), this.setAttribute("uv", new Fe(h, 2)); function M(v, x, w, T, C) { const P = Math.cos(v), b = Math.sin(v), S = w / x * v, L = Math.cos(S); C.x = T * (2 + L) * .5 * P, C.y = T * (2 + L) * b * .5, C.z = T * Math.sin(S) * .5 } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ma(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q) } } class ga extends nt { constructor(e = new Sl(new R(-1, -1, 0), new R(-1, 1, 0), new R(1, 1, 0)), t = 64, n = 1, i = 8, s = !1) { super(), this.type = "TubeGeometry", this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: i, closed: s }; const a = e.computeFrenetFrames(t, s); this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals; const o = new R, l = new R, c = new Q; let h = new R; const u = [], d = [], f = [], g = []; _(), this.setIndex(g), this.setAttribute("position", new Fe(u, 3)), this.setAttribute("normal", new Fe(d, 3)), this.setAttribute("uv", new Fe(f, 2)); function _() { for (let v = 0; v < t; v++)m(v); m(s === !1 ? t : 0), M(), p() } function m(v) { h = e.getPointAt(v / t, h); const x = a.normals[v], w = a.binormals[v]; for (let T = 0; T <= i; T++) { const C = T / i * Math.PI * 2, P = Math.sin(C), b = -Math.cos(C); l.x = b * x.x + P * w.x, l.y = b * x.y + P * w.y, l.z = b * x.z + P * w.z, l.normalize(), d.push(l.x, l.y, l.z), o.x = h.x + n * l.x, o.y = h.y + n * l.y, o.z = h.z + n * l.z, u.push(o.x, o.y, o.z) } } function p() { for (let v = 1; v <= t; v++)for (let x = 1; x <= i; x++) { const w = (i + 1) * (v - 1) + (x - 1), T = (i + 1) * v + (x - 1), C = (i + 1) * v + x, P = (i + 1) * (v - 1) + x; g.push(w, T, P), g.push(T, C, P) } } function M() { for (let v = 0; v <= t; v++)for (let x = 0; x <= i; x++)c.x = v / t, c.y = x / i, f.push(c.x, c.y) } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } toJSON() { const e = super.toJSON(); return e.path = this.parameters.path.toJSON(), e } static fromJSON(e) { return new ga(new Vr[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed) } } class zh extends nt { constructor(e = null) { if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) { const t = [], n = new Set, i = new R, s = new R; if (e.index !== null) { const a = e.attributes.position, o = e.index; let l = e.groups; l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]); for (let c = 0, h = l.length; c < h; ++c) { const u = l[c], d = u.start, f = u.count; for (let g = d, _ = d + f; g < _; g += 3)for (let m = 0; m < 3; m++) { const p = o.getX(g + m), M = o.getX(g + (m + 1) % 3); i.fromBufferAttribute(a, p), s.fromBufferAttribute(a, M), yo(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z)) } } } else { const a = e.attributes.position; for (let o = 0, l = a.count / 3; o < l; o++)for (let c = 0; c < 3; c++) { const h = 3 * o + c, u = 3 * o + (c + 1) % 3; i.fromBufferAttribute(a, h), s.fromBufferAttribute(a, u), yo(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z)) } } this.setAttribute("position", new Fe(t, 3)) } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } } function yo(r, e, t) { const n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`; return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n), t.add(i), !0) } var Mo = Object.freeze({ __proto__: null, BoxGeometry: _i, CapsuleGeometry: js, CircleGeometry: ea, ConeGeometry: ta, CylinderGeometry: Xr, DodecahedronGeometry: na, EdgesGeometry: sh, ExtrudeGeometry: aa, IcosahedronGeometry: oa, LatheGeometry: la, OctahedronGeometry: ca, PlaneGeometry: Ji, PolyhedronGeometry: On, RingGeometry: ha, ShapeGeometry: ua, SphereGeometry: da, TetrahedronGeometry: fa, TorusGeometry: pa, TorusKnotGeometry: ma, TubeGeometry: ga, WireframeGeometry: zh }); class Vh extends Ct { constructor(e) { super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Pe(0), this.transparent = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this } } class Gh extends en { constructor(e) { super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial" } } class Rl extends Ct { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Pe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wt, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class kh extends Rl { constructor(e) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Q(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return We(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function (t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Pe(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Pe(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Pe(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e) } get anisotropy() { return this._anisotropy } set anisotropy(e) { this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e } get clearcoat() { return this._clearcoat } set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e } get iridescence() { return this._iridescence } set iridescence(e) { this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e } get dispersion() { return this._dispersion } set dispersion(e) { this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e } get sheen() { return this._sheen } set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e } get transmission() { return this._transmission } set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e } copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } } class Hh extends Ct { constructor(e) { super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Pe(16777215), this.specular = new Pe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wt, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class Wh extends Ct { constructor(e) { super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new Pe(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } class Xh extends Ct { constructor(e) { super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e) } copy(e) { return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this } } class qh extends Ct { constructor(e) { super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Pe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wt, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class Cl extends Ct { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class Il extends Ct { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } class Yh extends Ct { constructor(e) { super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new Pe(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this } } class Jh extends Wr { constructor(e) { super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e) } copy(e) { return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this } } function Lr(r, e) { return !r || r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r) } function $h(r) { return ArrayBuffer.isView(r) && !(r instanceof DataView) } function Zh(r) { function e(i, s) { return r[i] - r[s] } const t = r.length, n = new Array(t); for (let i = 0; i !== t; ++i)n[i] = i; return n.sort(e), n } function So(r, e, t) { const n = r.length, i = new r.constructor(n); for (let s = 0, a = 0; a !== n; ++s) { const o = t[s] * e; for (let l = 0; l !== e; ++l)i[a++] = r[o + l] } return i } function Pl(r, e, t, n) { let i = 1, s = r[0]; for (; s !== void 0 && s[n] === void 0;)s = r[i++]; if (s === void 0) return; let a = s[n]; if (a !== void 0) if (Array.isArray(a)) do a = s[n], a !== void 0 && (e.push(s.time), t.push(...a)), s = r[i++]; while (s !== void 0); else if (a.toArray !== void 0) do a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++]; while (s !== void 0); else do a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++]; while (s !== void 0) } class qr { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} } evaluate(e) { const t = this.parameterPositions; let n = this._cachedIndex, i = t[n], s = t[n - 1]; n: { e: { let a; t: { i: if (!(e < i)) { for (let o = n + 2; ;) { if (i === void 0) { if (e < s) break i; return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } if (n === o) break; if (s = i, i = t[++n], e < i) break e } a = t.length; break t } if (!(e >= s)) { const o = t[1]; e < o && (n = 2, s = o); for (let l = n - 2; ;) { if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (n === l) break; if (i = s, s = t[--n - 1], e >= s) break e } a = n, n = 0; break t } break n } for (; n < a;) { const o = n + a >>> 1; e < t[o] ? a = o : n = o + 1 } if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } this._cachedIndex = n, this.intervalChanged_(n, s, i) } return this.interpolate_(n, s, e, i) } getSettings_() { return this.settings || this.DefaultSettings_ } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i; for (let a = 0; a !== i; ++a)t[a] = n[s + a]; return t } interpolate_() { throw new Error("call to abstract method") } intervalChanged_() { } } class Kh extends qr { constructor(e, t, n, i) { super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 } } intervalChanged_(e, t, n) { const i = this.parameterPositions; let s = e - 2, a = e + 1, o = i[s], l = i[a]; if (o === void 0) switch (this.getSettings_().endingStart) { case 2401: s = e, o = 2 * t - n; break; case 2402: s = i.length - 2, o = t + i[s] - i[s + 1]; break; default: s = e, o = n }if (l === void 0) switch (this.getSettings_().endingEnd) { case 2401: a = e, l = 2 * n - t; break; case 2402: a = 1, l = n + i[1] - i[0]; break; default: a = e - 1, l = t }const c = (n - t) * .5, h = this.valueSize; this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, p = -d * m + 2 * d * _ - d * g, M = (1 + d) * m + (-1.5 - 2 * d) * _ + (-.5 + d) * g + 1, v = (-1 - f) * m + (1.5 + f) * _ + .5 * g, x = f * m - f * _; for (let w = 0; w !== o; ++w)s[w] = p * a[h + w] + M * a[c + w] + v * a[l + w] + x * a[u + w]; return s } } class Qh extends qr { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h; for (let d = 0; d !== o; ++d)s[d] = a[c + d] * u + a[l + d] * h; return s } } class jh extends qr { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e) { return this.copySampleValue_(e - 1) } } class $t { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e); this.name = e, this.times = Lr(t, this.TimeBufferType), this.values = Lr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) } static toJSON(e) { const t = e.constructor; let n; if (t.toJSON !== this.toJSON) n = t.toJSON(e); else { n = { name: e.name, times: Lr(e.times, Array), values: Lr(e.values, Array) }; const i = e.getInterpolation(); i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n } InterpolantFactoryMethodDiscrete(e) { return new jh(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodLinear(e) { return new Qh(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodSmooth(e) { return new Kh(this.times, this.values, this.getValueSize(), e) } setInterpolation(e) { let t; switch (e) { case 2300: t = this.InterpolantFactoryMethodDiscrete; break; case 2301: t = this.InterpolantFactoryMethodLinear; break; case 2302: t = this.InterpolantFactoryMethodSmooth; break }if (t === void 0) { const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw new Error(n); return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this } getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return 2300; case this.InterpolantFactoryMethodLinear: return 2301; case this.InterpolantFactoryMethodSmooth: return 2302 } } getValueSize() { return this.values.length / this.times.length } shift(e) { if (e !== 0) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] += e } return this } scale(e) { if (e !== 1) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] *= e } return this } trim(e, t) { const n = this.times, i = n.length; let s = 0, a = i - 1; for (; s !== i && n[s] < e;)++s; for (; a !== -1 && n[a] > t;)--a; if (++a, s !== 0 || a !== i) { s >= a && (a = Math.max(a, 1), s = a - 1); const o = this.getValueSize(); this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o) } return this } validate() { let e = !0; const t = this.getValueSize(); t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); const n = this.times, i = this.values, s = n.length; s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let a = null; for (let o = 0; o !== s; o++) { const l = n[o]; if (typeof l == "number" && isNaN(l)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1; break } if (a !== null && a > l) { console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1; break } a = l } if (i !== void 0 && $h(i)) for (let o = 0, l = i.length; o !== l; ++o) { const c = i[o]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1; break } } return e } optimize() { const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1; let a = 1; for (let o = 1; o < s; ++o) { let l = !1; const c = e[o], h = e[o + 1]; if (c !== h && (o !== 1 || c !== e[0])) if (i) l = !0; else { const u = o * n, d = u - n, f = u + n; for (let g = 0; g !== n; ++g) { const _ = t[u + g]; if (_ !== t[d + g] || _ !== t[f + g]) { l = !0; break } } } if (l) { if (o !== a) { e[a] = e[o]; const u = o * n, d = a * n; for (let f = 0; f !== n; ++f)t[d + f] = t[u + f] } ++a } } if (s > 0) { e[a] = e[s]; for (let o = s * n, l = a * n, c = 0; c !== n; ++c)t[l + c] = t[o + c]; ++a } return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this } clone() { const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } } $t.prototype.ValueTypeName = ""; $t.prototype.TimeBufferType = Float32Array; $t.prototype.ValueBufferType = Float32Array; $t.prototype.DefaultInterpolation = 2301; class xi extends $t { constructor(e, t, n) { super(e, t, n) } } xi.prototype.ValueTypeName = "bool"; xi.prototype.ValueBufferType = Array; xi.prototype.DefaultInterpolation = 2300; xi.prototype.InterpolantFactoryMethodLinear = void 0; xi.prototype.InterpolantFactoryMethodSmooth = void 0; class Ll extends $t { constructor(e, t, n, i) { super(e, t, n, i) } } Ll.prototype.ValueTypeName = "color"; class Gr extends $t { constructor(e, t, n, i) { super(e, t, n, i) } } Gr.prototype.ValueTypeName = "number"; class eu extends qr { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t); let c = e * o; for (let h = c + o; c !== h; c += 4)gi.slerpFlat(s, 0, a, c - o, a, c, l); return s } } class Yr extends $t { constructor(e, t, n, i) { super(e, t, n, i) } InterpolantFactoryMethodLinear(e) { return new eu(this.times, this.values, this.getValueSize(), e) } } Yr.prototype.ValueTypeName = "quaternion"; Yr.prototype.InterpolantFactoryMethodSmooth = void 0; class vi extends $t { constructor(e, t, n) { super(e, t, n) } } vi.prototype.ValueTypeName = "string"; vi.prototype.ValueBufferType = Array; vi.prototype.DefaultInterpolation = 2300; vi.prototype.InterpolantFactoryMethodLinear = void 0; vi.prototype.InterpolantFactoryMethodSmooth = void 0; class kr extends $t { constructor(e, t, n, i) { super(e, t, n, i) } } kr.prototype.ValueTypeName = "vector"; class tu { constructor(e = "", t = -1, n = [], i = 2500) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Ht(), this.userData = {}, this.duration < 0 && this.resetDuration() } static parse(e) { const t = [], n = e.tracks, i = 1 / (e.fps || 1); for (let a = 0, o = n.length; a !== o; ++a)t.push(iu(n[a]).scale(i)); const s = new this(e.name, e.duration, t, e.blendMode); return s.uuid = e.uuid, s.userData = JSON.parse(e.userData || "{}"), s } static toJSON(e) { const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode, userData: JSON.stringify(e.userData) }; for (let s = 0, a = n.length; s !== a; ++s)t.push($t.toJSON(n[s])); return i } static CreateFromMorphTargetSequence(e, t, n, i) { const s = t.length, a = []; for (let o = 0; o < s; o++) { let l = [], c = []; l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0); const h = Zh(l); l = So(l, 1, h), c = So(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(new Gr(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n)) } return new this(e, -1, a) } static findByName(e, t) { let n = e; if (!Array.isArray(e)) { const i = e; n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)if (n[i].name === t) return n[i]; return null } static CreateClipsFromMorphTargetSequences(e, t, n) { const i = {}, s = /^([\w-]*?)([\d]+)$/; for (let o = 0, l = e.length; o < l; o++) { const c = e[o], h = c.name.match(s); if (h && h.length > 1) { const u = h[1]; let d = i[u]; d || (i[u] = d = []), d.push(c) } } const a = []; for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n)); return a } static parseAnimation(e, t) { if (console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function (u, d, f, g, _) { if (f.length !== 0) { const m = [], p = []; Pl(f, m, p, g), m.length !== 0 && _.push(new u(d, m, p)) } }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode; let l = e.length || -1; const c = e.hierarchy || []; for (let u = 0; u < c.length; u++) { const d = c[u].keys; if (!(!d || d.length === 0)) if (d[0].morphTargets) { const f = {}; let g; for (g = 0; g < d.length; g++)if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++)f[d[g].morphTargets[_]] = -1; for (const _ in f) { const m = [], p = []; for (let M = 0; M !== d[g].morphTargets.length; ++M) { const v = d[g]; m.push(v.time), p.push(v.morphTarget === _ ? 1 : 0) } i.push(new Gr(".morphTargetInfluence[" + _ + "]", m, p)) } l = f.length * a } else { const f = ".bones[" + t[u].name + "]"; n(kr, f + ".position", d, "pos", i), n(Yr, f + ".quaternion", d, "rot", i), n(kr, f + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(s, l, i, o) } resetDuration() { const e = this.tracks; let t = 0; for (let n = 0, i = e.length; n !== i; ++n) { const s = this.tracks[n]; t = Math.max(t, s.times[s.times.length - 1]) } return this.duration = t, this } trim() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration); return this } validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++)e = e && this.tracks[t].validate(); return e } optimize() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].optimize(); return this } clone() { const e = []; for (let n = 0; n < this.tracks.length; n++)e.push(this.tracks[n].clone()); const t = new this.constructor(this.name, this.duration, e, this.blendMode); return t.userData = JSON.parse(JSON.stringify(this.userData)), t } toJSON() { return this.constructor.toJSON(this) } } function nu(r) { switch (r.toLowerCase()) { case "scalar": case "double": case "float": case "number": case "integer": return Gr; case "vector": case "vector2": case "vector3": case "vector4": return kr; case "color": return Ll; case "quaternion": return Yr; case "bool": case "boolean": return xi; case "string": return vi }throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r) } function iu(r) { if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = nu(r.type); if (r.times === void 0) { const t = [], n = []; Pl(r.keys, t, n, "value"), r.times = t, r.values = n } return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation) } const dn = { enabled: !1, files: {}, add: function (r, e) { this.enabled !== !1 && (this.files[r] = e) }, get: function (r) { if (this.enabled !== !1) return this.files[r] }, remove: function (r) { delete this.files[r] }, clear: function () { this.files = {} } }; class Dl { constructor(e, t, n) { const i = this; let s = !1, a = 0, o = 0, l; const c = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.abortController = new AbortController, this.itemStart = function (h) { o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0 }, this.itemEnd = function (h) { a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function (h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function (h) { return l ? l(h) : h }, this.setURLModifier = function (h) { return l = h, this }, this.addHandler = function (h, u) { return c.push(h, u), this }, this.removeHandler = function (h) { const u = c.indexOf(h); return u !== -1 && c.splice(u, 2), this }, this.getHandler = function (h) { for (let u = 0, d = c.length; u < d; u += 2) { const f = c[u], g = c[u + 1]; if (f.global && (f.lastIndex = 0), f.test(h)) return g } return null }, this.abort = function () { return this.abortController.abort(), this.abortController = new AbortController, this } } } const ru = new Dl; class Mn { constructor(e) { this.manager = e !== void 0 ? e : ru, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { const n = this; return new Promise(function (i, s) { n.load(e, i, t, s) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } abort() { return this } } Mn.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const cn = {}; class su extends Error { constructor(e, t) { super(e), this.response = t } } class Hr extends Mn { constructor(e) { super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = dn.get(`file:${e}`); if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(s), this.manager.itemEnd(e) }, 0), s; if (cn[e] !== void 0) { cn[e].push({ onLoad: t, onProgress: n, onError: i }); return } cn[e] = [], cn[e].push({ onLoad: t, onProgress: n, onError: i }); const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin", signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal }), o = this.mimeType, l = this.responseType; fetch(a).then(c => { if (c.status === 200 || c.status === 0) { if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c; const h = cn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), f = d ? parseInt(d) : 0, g = f !== 0; let _ = 0; const m = new ReadableStream({ start(p) { M(); function M() { u.read().then(({ done: v, value: x }) => { if (v) p.close(); else { _ += x.byteLength; const w = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f }); for (let T = 0, C = h.length; T < C; T++) { const P = h[T]; P.onProgress && P.onProgress(w) } p.enqueue(x), M() } }, v => { p.error(v) }) } } }); return new Response(m) } else throw new su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c) }).then(c => { switch (l) { case "arraybuffer": return c.arrayBuffer(); case "blob": return c.blob(); case "document": return c.text().then(h => new DOMParser().parseFromString(h, o)); case "json": return c.json(); default: if (o === "") return c.text(); { const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d); return c.arrayBuffer().then(g => f.decode(g)) } } }).then(c => { dn.add(`file:${e}`, c); const h = cn[e]; delete cn[e]; for (let u = 0, d = h.length; u < d; u++) { const f = h[u]; f.onLoad && f.onLoad(c) } }).catch(c => { const h = cn[e]; if (h === void 0) throw this.manager.itemError(e), c; delete cn[e]; for (let u = 0, d = h.length; u < d; u++) { const f = h[u]; f.onError && f.onError(c) } this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) } setResponseType(e) { return this.responseType = e, this } setMimeType(e) { return this.mimeType = e, this } abort() { return this._abortController.abort(), this._abortController = new AbortController, this } } const ri = new WeakMap; class Gs extends Mn { constructor(e) { super(e) } load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = this, a = dn.get(`image:${e}`); if (a !== void 0) { if (a.complete === !0) s.manager.itemStart(e), setTimeout(function () { t && t(a), s.manager.itemEnd(e) }, 0); else { let u = ri.get(a); u === void 0 && (u = [], ri.set(a, u)), u.push({ onLoad: t, onError: i }) } return a } const o = Vi("img"); function l() { h(), t && t(this); const u = ri.get(this) || []; for (let d = 0; d < u.length; d++) { const f = u[d]; f.onLoad && f.onLoad(this) } ri.delete(this), s.manager.itemEnd(e) } function c(u) { h(), i && i(u), dn.remove(`image:${e}`); const d = ri.get(this) || []; for (let f = 0; f < d.length; f++) { const g = d[f]; g.onError && g.onError(u) } ri.delete(this), s.manager.itemError(e), s.manager.itemEnd(e) } function h() { o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1) } return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), dn.add(`image:${e}`, o), s.manager.itemStart(e), o.src = e, o } } class w_ extends Mn { constructor(e) { super(e) } load(e, t, n, i) { const s = new gt, a = new Gs(this.manager); return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function (o) { s.image = o, s.needsUpdate = !0, t !== void 0 && t(s) }, n, i), s } } class zn extends ct { constructor(e, t = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Pe(e), this.intensity = t } dispose() { } copy(e, t) { return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t } } class au extends zn { constructor(e, t, n) { super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Pe(t) } copy(e, t) { return super.copy(e, t), this.groundColor.copy(e.groundColor), this } } const Cs = new ke, bo = new R, Eo = new R; class _a { constructor(e) { this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Q(512, 512), this.mapType = 1009, this.map = null, this.mapPass = null, this.matrix = new ke, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Yi, this._frameExtents = new Q(1, 1), this._viewportCount = 1, this._viewports = [new Qe(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { const t = this.camera, n = this.matrix; bo.setFromMatrixPosition(e.matrixWorld), t.position.copy(bo), Eo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Eo), t.updateMatrixWorld(), Cs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Cs, t.coordinateSystem, t.reversedDepth), t.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Cs) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const e = {}; return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } } class ou extends _a { constructor() { super(new Lt(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1 } updateMatrices(e) { const t = this.camera, n = ui * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height * this.aspect, s = e.distance || t.far; (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e) } copy(e) { return super.copy(e), this.focus = e.focus, this } } class lu extends zn { constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) { super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct, this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new ou } get power() { return this.intensity * Math.PI } set power(e) { this.intensity = e / Math.PI } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } const To = new ke, Di = new R, Is = new R; class cu extends _a { constructor() { super(new Lt(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Q(4, 2), this._viewportCount = 6, this._viewports = [new Qe(2, 1, 1, 1), new Qe(0, 1, 1, 1), new Qe(3, 1, 1, 1), new Qe(1, 1, 1, 1), new Qe(3, 0, 1, 1), new Qe(1, 0, 1, 1)], this._cubeDirections = [new R(1, 0, 0), new R(-1, 0, 0), new R(0, 0, 1), new R(0, 0, -1), new R(0, 1, 0), new R(0, -1, 0)], this._cubeUps = [new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 0, 1), new R(0, 0, -1)] } updateMatrices(e, t = 0) { const n = this.camera, i = this.matrix, s = e.distance || n.far; s !== n.far && (n.far = s, n.updateProjectionMatrix()), Di.setFromMatrixPosition(e.matrixWorld), n.position.copy(Di), Is.copy(n.position), Is.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Is), n.updateMatrixWorld(), i.makeTranslation(-Di.x, -Di.y, -Di.z), To.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(To, n.coordinateSystem, n.reversedDepth) } } class hu extends zn { constructor(e, t, n = 0, i = 2) { super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new cu } get power() { return this.intensity * 4 * Math.PI } set power(e) { this.intensity = e / (4 * Math.PI) } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } } class xa extends cl { constructor(e = -1, t = 1, n = 1, i = -1, s = .1, a = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, i, s, a) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; let s = n - e, a = n + e, o = i + t, l = i - t; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom; s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height } this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } } class uu extends _a { constructor() { super(new xa(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class du extends zn { constructor(e, t) { super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct, this.shadow = new uu } dispose() { this.shadow.dispose() } copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } class fu extends zn { constructor(e, t) { super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight" } } class pu extends zn { constructor(e, t, n = 10, i = 10) { super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i } get power() { return this.intensity * this.width * this.height * Math.PI } set power(e) { this.intensity = e / (this.width * this.height * Math.PI) } copy(e) { return super.copy(e), this.width = e.width, this.height = e.height, this } toJSON(e) { const t = super.toJSON(e); return t.object.width = this.width, t.object.height = this.height, t } } class mu { constructor() { this.isSphericalHarmonics3 = !0, this.coefficients = []; for (let e = 0; e < 9; e++)this.coefficients.push(new R) } set(e) { for (let t = 0; t < 9; t++)this.coefficients[t].copy(e[t]); return this } zero() { for (let e = 0; e < 9; e++)this.coefficients[e].set(0, 0, 0); return this } getAt(e, t) { const n = e.x, i = e.y, s = e.z, a = this.coefficients; return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * i), t.addScaledVector(a[2], .488603 * s), t.addScaledVector(a[3], .488603 * n), t.addScaledVector(a[4], 1.092548 * (n * i)), t.addScaledVector(a[5], 1.092548 * (i * s)), t.addScaledVector(a[6], .315392 * (3 * s * s - 1)), t.addScaledVector(a[7], 1.092548 * (n * s)), t.addScaledVector(a[8], .546274 * (n * n - i * i)), t } getIrradianceAt(e, t) { const n = e.x, i = e.y, s = e.z, a = this.coefficients; return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 2 * .511664 * i), t.addScaledVector(a[2], 2 * .511664 * s), t.addScaledVector(a[3], 2 * .511664 * n), t.addScaledVector(a[4], 2 * .429043 * n * i), t.addScaledVector(a[5], 2 * .429043 * i * s), t.addScaledVector(a[6], .743125 * s * s - .247708), t.addScaledVector(a[7], 2 * .429043 * n * s), t.addScaledVector(a[8], .429043 * (n * n - i * i)), t } add(e) { for (let t = 0; t < 9; t++)this.coefficients[t].add(e.coefficients[t]); return this } addScaledSH(e, t) { for (let n = 0; n < 9; n++)this.coefficients[n].addScaledVector(e.coefficients[n], t); return this } scale(e) { for (let t = 0; t < 9; t++)this.coefficients[t].multiplyScalar(e); return this } lerp(e, t) { for (let n = 0; n < 9; n++)this.coefficients[n].lerp(e.coefficients[n], t); return this } equals(e) { for (let t = 0; t < 9; t++)if (!this.coefficients[t].equals(e.coefficients[t])) return !1; return !0 } copy(e) { return this.set(e.coefficients) } clone() { return new this.constructor().copy(this) } fromArray(e, t = 0) { const n = this.coefficients; for (let i = 0; i < 9; i++)n[i].fromArray(e, t + i * 3); return this } toArray(e = [], t = 0) { const n = this.coefficients; for (let i = 0; i < 9; i++)n[i].toArray(e, t + i * 3); return e } static getBasisAt(e, t) { const n = e.x, i = e.y, s = e.z; t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * s, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = .315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = .546274 * (n * n - i * i) } } class gu extends zn { constructor(e = new mu, t = 1) { super(void 0, t), this.isLightProbe = !0, this.sh = e } copy(e) { return super.copy(e), this.sh.copy(e.sh), this } fromJSON(e) { return this.intensity = e.intensity, this.sh.fromArray(e.sh), this } toJSON(e) { const t = super.toJSON(e); return t.object.sh = this.sh.toArray(), t } } class va extends Mn { constructor(e) { super(e), this.textures = {} } load(e, t, n, i) { const s = this, a = new Hr(s.manager); a.setPath(s.path), a.setRequestHeader(s.requestHeader), a.setWithCredentials(s.withCredentials), a.load(e, function (o) { try { t(s.parse(JSON.parse(o))) } catch (l) { i ? i(l) : console.error(l), s.manager.itemError(e) } }, n, i) } parse(e) { const t = this.textures; function n(s) { return t[s] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", s), t[s] } const i = this.createMaterialFromType(e.type); if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new Pe().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (i.dispersion = e.dispersion), e.iridescence !== void 0 && (i.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (i.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (i.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (i.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (i.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (i.depthFunc = e.depthFunc), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (i.blendSrc = e.blendSrc), e.blendDst !== void 0 && (i.blendDst = e.blendDst), e.blendEquation !== void 0 && (i.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (i.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (i.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (i.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && i.blendColor !== void 0 && i.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (i.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== void 0 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (i.forceSinglePass = e.forceSinglePass), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0) for (const s in e.uniforms) { const a = e.uniforms[s]; switch (i.uniforms[s] = {}, a.type) { case "t": i.uniforms[s].value = n(a.value); break; case "c": i.uniforms[s].value = new Pe().setHex(a.value); break; case "v2": i.uniforms[s].value = new Q().fromArray(a.value); break; case "v3": i.uniforms[s].value = new R().fromArray(a.value); break; case "v4": i.uniforms[s].value = new Qe().fromArray(a.value); break; case "m3": i.uniforms[s].value = new Ge().fromArray(a.value); break; case "m4": i.uniforms[s].value = new ke().fromArray(a.value); break; default: i.uniforms[s].value = a.value } } if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (i.glslVersion = e.glslVersion), e.extensions !== void 0) for (const s in e.extensions) i.extensions[s] = e.extensions[s]; if (e.lights !== void 0 && (i.lights = e.lights), e.clipping !== void 0 && (i.clipping = e.clipping), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) { let s = e.normalScale; Array.isArray(s) === !1 && (s = [s, s]), i.normalScale = new Q().fromArray(s) } return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapRotation !== void 0 && i.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new Q().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (i.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i } setTextures(e) { return this.textures = e, this } createMaterialFromType(e) { return va.createMaterialFromType(e) } static createMaterialFromType(e) { const t = { ShadowMaterial: Vh, SpriteMaterial: ul, RawShaderMaterial: Gh, ShaderMaterial: en, PointsMaterial: ml, MeshPhysicalMaterial: kh, MeshStandardMaterial: Rl, MeshPhongMaterial: Hh, MeshToonMaterial: Wh, MeshNormalMaterial: Xh, MeshLambertMaterial: qh, MeshDepthMaterial: Cl, MeshDistanceMaterial: Il, MeshBasicMaterial: qs, MeshMatcapMaterial: Yh, LineDashedMaterial: Jh, LineBasicMaterial: Wr, Material: Ct }; return new t[e] } } class Ao { static extractUrlBase(e) { const t = e.lastIndexOf("/"); return t === -1 ? "./" : e.slice(0, t + 1) } static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } } class _u extends nt { constructor() { super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0 } copy(e) { return super.copy(e), this.instanceCount = e.instanceCount, this } toJSON() { const e = super.toJSON(); return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e } } class xu extends Mn { constructor(e) { super(e) } load(e, t, n, i) { const s = this, a = new Hr(s.manager); a.setPath(s.path), a.setRequestHeader(s.requestHeader), a.setWithCredentials(s.withCredentials), a.load(e, function (o) { try { t(s.parse(JSON.parse(o))) } catch (l) { i ? i(l) : console.error(l), s.manager.itemError(e) } }, n, i) } parse(e) { const t = {}, n = {}; function i(f, g) { if (t[g] !== void 0) return t[g]; const m = f.interleavedBuffers[g], p = s(f, m.buffer), M = ai(m.type, p), v = new hl(M, m.stride); return v.uuid = m.uuid, t[g] = v, v } function s(f, g) { if (n[g] !== void 0) return n[g]; const m = f.arrayBuffers[g], p = new Uint32Array(m).buffer; return n[g] = p, p } const a = e.isInstancedBufferGeometry ? new _u : new nt, o = e.data.index; if (o !== void 0) { const f = ai(o.type, o.array); a.setIndex(new yt(f, 1)) } const l = e.data.attributes; for (const f in l) { const g = l[f]; let _; if (g.isInterleavedBufferAttribute) { const m = i(e.data, g.data); _ = new fi(m, g.itemSize, g.offset, g.normalized) } else { const m = ai(g.type, g.array), p = g.isInstancedBufferAttribute ? ki : yt; _ = new p(m, g.itemSize, g.normalized) } g.name !== void 0 && (_.name = g.name), g.usage !== void 0 && _.setUsage(g.usage), a.setAttribute(f, _) } const c = e.data.morphAttributes; if (c) for (const f in c) { const g = c[f], _ = []; for (let m = 0, p = g.length; m < p; m++) { const M = g[m]; let v; if (M.isInterleavedBufferAttribute) { const x = i(e.data, M.data); v = new fi(x, M.itemSize, M.offset, M.normalized) } else { const x = ai(M.type, M.array); v = new yt(x, M.itemSize, M.normalized) } M.name !== void 0 && (v.name = M.name), _.push(v) } a.morphAttributes[f] = _ } e.data.morphTargetsRelative && (a.morphTargetsRelative = !0); const u = e.data.groups || e.data.drawcalls || e.data.offsets; if (u !== void 0) for (let f = 0, g = u.length; f !== g; ++f) { const _ = u[f]; a.addGroup(_.start, _.count, _.materialIndex) } const d = e.data.boundingSphere; return d !== void 0 && (a.boundingSphere = new Et().fromJSON(d)), e.name && (a.name = e.name), e.userData && (a.userData = e.userData), a } } class R_ extends Mn { constructor(e) { super(e) } load(e, t, n, i) { const s = this, a = this.path === "" ? Ao.extractUrlBase(e) : this.path; this.resourcePath = this.resourcePath || a; const o = new Hr(this.manager); o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function (l) { let c = null; try { c = JSON.parse(l) } catch (u) { i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message); return } const h = c.metadata; if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") { i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e); return } s.parse(c, t) }, n, i) } async loadAsync(e, t) { const n = this, i = this.path === "" ? Ao.extractUrlBase(e) : this.path; this.resourcePath = this.resourcePath || i; const s = new Hr(this.manager); s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials); const a = await s.loadAsync(e, t), o = JSON.parse(a), l = o.metadata; if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") throw new Error("THREE.ObjectLoader: Can't load " + e); return await n.parseAsync(o) } parse(e, t) { const n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), s = this.parseGeometries(e.geometries, i), a = this.parseImages(e.images, function () { t !== void 0 && t(c) }), o = this.parseTextures(e.textures, a), l = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, s, l, o, n), h = this.parseSkeletons(e.skeletons, c); if (this.bindSkeletons(c, h), this.bindLightTargets(c), t !== void 0) { let u = !1; for (const d in a) if (a[d].data instanceof HTMLImageElement) { u = !0; break } u === !1 && t(c) } return c } async parseAsync(e) { const t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), s = await this.parseImagesAsync(e.images), a = this.parseTextures(e.textures, s), o = this.parseMaterials(e.materials, a), l = this.parseObject(e.object, i, o, a, t), c = this.parseSkeletons(e.skeletons, l); return this.bindSkeletons(l, c), this.bindLightTargets(l), l } parseShapes(e) { const t = {}; if (e !== void 0) for (let n = 0, i = e.length; n < i; n++) { const s = new sa().fromJSON(e[n]); t[s.uuid] = s } return t } parseSkeletons(e, t) { const n = {}, i = {}; if (t.traverse(function (s) { s.isBone && (i[s.uuid] = s) }), e !== void 0) for (let s = 0, a = e.length; s < a; s++) { const o = new Zs().fromJSON(e[s], i); n[o.uuid] = o } return n } parseGeometries(e, t) { const n = {}; if (e !== void 0) { const i = new xu; for (let s = 0, a = e.length; s < a; s++) { let o; const l = e[s]; switch (l.type) { case "BufferGeometry": case "InstancedBufferGeometry": o = i.parse(l); break; default: l.type in Mo ? o = Mo[l.type].fromJSON(l, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`) }o.uuid = l.uuid, l.name !== void 0 && (o.name = l.name), l.userData !== void 0 && (o.userData = l.userData), n[l.uuid] = o } } return n } parseMaterials(e, t) { const n = {}, i = {}; if (e !== void 0) { const s = new va; s.setTextures(t); for (let a = 0, o = e.length; a < o; a++) { const l = e[a]; n[l.uuid] === void 0 && (n[l.uuid] = s.parse(l)), i[l.uuid] = n[l.uuid] } } return i } parseAnimations(e) { const t = {}; if (e !== void 0) for (let n = 0; n < e.length; n++) { const i = e[n], s = tu.parse(i); t[s.uuid] = s } return t } parseImages(e, t) { const n = this, i = {}; let s; function a(l) { return n.manager.itemStart(l), s.load(l, function () { n.manager.itemEnd(l) }, void 0, function () { n.manager.itemError(l), n.manager.itemEnd(l) }) } function o(l) { if (typeof l == "string") { const c = l, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c) ? c : n.resourcePath + c; return a(h) } else return l.data ? { data: ai(l.type, l.data), width: l.width, height: l.height } : null } if (e !== void 0 && e.length > 0) { const l = new Dl(t); s = new Gs(l), s.setCrossOrigin(this.crossOrigin); for (let c = 0, h = e.length; c < h; c++) { const u = e[c], d = u.url; if (Array.isArray(d)) { const f = []; for (let g = 0, _ = d.length; g < _; g++) { const m = d[g], p = o(m); p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new yn(p.data, p.width, p.height))) } i[u.uuid] = new Nn(f) } else { const f = o(u.url); i[u.uuid] = new Nn(f) } } } return i } async parseImagesAsync(e) { const t = this, n = {}; let i; async function s(a) { if (typeof a == "string") { const o = a, l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(o) ? o : t.resourcePath + o; return await i.loadAsync(l) } else return a.data ? { data: ai(a.type, a.data), width: a.width, height: a.height } : null } if (e !== void 0 && e.length > 0) { i = new Gs(this.manager), i.setCrossOrigin(this.crossOrigin); for (let a = 0, o = e.length; a < o; a++) { const l = e[a], c = l.url; if (Array.isArray(c)) { const h = []; for (let u = 0, d = c.length; u < d; u++) { const f = c[u], g = await s(f); g !== null && (g instanceof HTMLImageElement ? h.push(g) : h.push(new yn(g.data, g.width, g.height))) } n[l.uuid] = new Nn(h) } else { const h = await s(l.url); n[l.uuid] = new Nn(h) } } } return n } parseTextures(e, t) { function n(s, a) { return typeof s == "number" ? s : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", s), a[s]) } const i = {}; if (e !== void 0) for (let s = 0, a = e.length; s < a; s++) { const o = e[s]; o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image); const l = t[o.image], c = l.data; let h; Array.isArray(c) ? (h = new Ys, c.length === 6 && (h.needsUpdate = !0)) : (c && c.data ? h = new yn : h = new gt, c && (h.needsUpdate = !0)), h.source = l, h.uuid = o.uuid, o.name !== void 0 && (h.name = o.name), o.mapping !== void 0 && (h.mapping = n(o.mapping, vu)), o.channel !== void 0 && (h.channel = o.channel), o.offset !== void 0 && h.offset.fromArray(o.offset), o.repeat !== void 0 && h.repeat.fromArray(o.repeat), o.center !== void 0 && h.center.fromArray(o.center), o.rotation !== void 0 && (h.rotation = o.rotation), o.wrap !== void 0 && (h.wrapS = n(o.wrap[0], wo), h.wrapT = n(o.wrap[1], wo)), o.format !== void 0 && (h.format = o.format), o.internalFormat !== void 0 && (h.internalFormat = o.internalFormat), o.type !== void 0 && (h.type = o.type), o.colorSpace !== void 0 && (h.colorSpace = o.colorSpace), o.minFilter !== void 0 && (h.minFilter = n(o.minFilter, Ro)), o.magFilter !== void 0 && (h.magFilter = n(o.magFilter, Ro)), o.anisotropy !== void 0 && (h.anisotropy = o.anisotropy), o.flipY !== void 0 && (h.flipY = o.flipY), o.generateMipmaps !== void 0 && (h.generateMipmaps = o.generateMipmaps), o.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (h.unpackAlignment = o.unpackAlignment), o.compareFunction !== void 0 && (h.compareFunction = o.compareFunction), o.userData !== void 0 && (h.userData = o.userData), i[o.uuid] = h } return i } parseObject(e, t, n, i, s) { let a; function o(d) { return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d] } function l(d) { if (d !== void 0) { if (Array.isArray(d)) { const f = []; for (let g = 0, _ = d.length; g < _; g++) { const m = d[g]; n[m] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", m), f.push(n[m]) } return f } return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d] } } function c(d) { return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d] } let h, u; switch (e.type) { case "Scene": a = new Oc, e.background !== void 0 && (Number.isInteger(e.background) ? a.background = new Pe(e.background) : a.background = c(e.background)), e.environment !== void 0 && (a.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? a.fog = new $s(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (a.fog = new Js(e.fog.color, e.fog.density)), e.fog.name !== "" && (a.fog.name = e.fog.name)), e.backgroundBlurriness !== void 0 && (a.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (a.backgroundIntensity = e.backgroundIntensity), e.backgroundRotation !== void 0 && a.backgroundRotation.fromArray(e.backgroundRotation), e.environmentIntensity !== void 0 && (a.environmentIntensity = e.environmentIntensity), e.environmentRotation !== void 0 && a.environmentRotation.fromArray(e.environmentRotation); break; case "PerspectiveCamera": a = new Lt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (a.focus = e.focus), e.zoom !== void 0 && (a.zoom = e.zoom), e.filmGauge !== void 0 && (a.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (a.filmOffset = e.filmOffset), e.view !== void 0 && (a.view = Object.assign({}, e.view)); break; case "OrthographicCamera": a = new xa(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (a.zoom = e.zoom), e.view !== void 0 && (a.view = Object.assign({}, e.view)); break; case "AmbientLight": a = new fu(e.color, e.intensity); break; case "DirectionalLight": a = new du(e.color, e.intensity), a.target = e.target || ""; break; case "PointLight": a = new hu(e.color, e.intensity, e.distance, e.decay); break; case "RectAreaLight": a = new pu(e.color, e.intensity, e.width, e.height); break; case "SpotLight": a = new lu(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay), a.target = e.target || ""; break; case "HemisphereLight": a = new au(e.color, e.groundColor, e.intensity); break; case "LightProbe": a = new gu().fromJSON(e); break; case "SkinnedMesh": h = o(e.geometry), u = l(e.material), a = new kc(h, u), e.bindMode !== void 0 && (a.bindMode = e.bindMode), e.bindMatrix !== void 0 && a.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (a.skeleton = e.skeleton); break; case "Mesh": h = o(e.geometry), u = l(e.material), a = new Rt(h, u); break; case "InstancedMesh": h = o(e.geometry), u = l(e.material); const d = e.count, f = e.instanceMatrix, g = e.instanceColor; a = new Xc(h, u, d), a.instanceMatrix = new ki(new Float32Array(f.array), 16), g !== void 0 && (a.instanceColor = new ki(new Float32Array(g.array), g.itemSize)); break; case "BatchedMesh": h = o(e.geometry), u = l(e.material), a = new nh(e.maxInstanceCount, e.maxVertexCount, e.maxIndexCount, u), a.geometry = h, a.perObjectFrustumCulled = e.perObjectFrustumCulled, a.sortObjects = e.sortObjects, a._drawRanges = e.drawRanges, a._reservedRanges = e.reservedRanges, a._geometryInfo = e.geometryInfo.map(_ => { let m = null, p = null; return _.boundingBox !== void 0 && (m = new Dt().fromJSON(_.boundingBox)), _.boundingSphere !== void 0 && (p = new Et().fromJSON(_.boundingSphere)), { ..._, boundingBox: m, boundingSphere: p } }), a._instanceInfo = e.instanceInfo, a._availableInstanceIds = e._availableInstanceIds, a._availableGeometryIds = e._availableGeometryIds, a._nextIndexStart = e.nextIndexStart, a._nextVertexStart = e.nextVertexStart, a._geometryCount = e.geometryCount, a._maxInstanceCount = e.maxInstanceCount, a._maxVertexCount = e.maxVertexCount, a._maxIndexCount = e.maxIndexCount, a._geometryInitialized = e.geometryInitialized, a._matricesTexture = c(e.matricesTexture.uuid), a._indirectTexture = c(e.indirectTexture.uuid), e.colorsTexture !== void 0 && (a._colorsTexture = c(e.colorsTexture.uuid)), e.boundingSphere !== void 0 && (a.boundingSphere = new Et().fromJSON(e.boundingSphere)), e.boundingBox !== void 0 && (a.boundingBox = new Dt().fromJSON(e.boundingBox)); break; case "LOD": a = new Vc; break; case "Line": a = new Qs(o(e.geometry), l(e.material)); break; case "LineLoop": a = new ih(o(e.geometry), l(e.material)); break; case "LineSegments": a = new pl(o(e.geometry), l(e.material)); break; case "PointCloud": case "Points": a = new rh(o(e.geometry), l(e.material)); break; case "Sprite": a = new zc(l(e.material)); break; case "Group": a = new Ui; break; case "Bone": a = new fl; break; default: a = new ct }if (a.uuid = e.uuid, e.name !== void 0 && (a.name = e.name), e.matrix !== void 0 ? (a.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (a.matrixAutoUpdate = e.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)) : (e.position !== void 0 && a.position.fromArray(e.position), e.rotation !== void 0 && a.rotation.fromArray(e.rotation), e.quaternion !== void 0 && a.quaternion.fromArray(e.quaternion), e.scale !== void 0 && a.scale.fromArray(e.scale)), e.up !== void 0 && a.up.fromArray(e.up), e.castShadow !== void 0 && (a.castShadow = e.castShadow), e.receiveShadow !== void 0 && (a.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.intensity !== void 0 && (a.shadow.intensity = e.shadow.intensity), e.shadow.bias !== void 0 && (a.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (a.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (a.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && a.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (a.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (a.visible = e.visible), e.frustumCulled !== void 0 && (a.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (a.renderOrder = e.renderOrder), e.userData !== void 0 && (a.userData = e.userData), e.layers !== void 0 && (a.layers.mask = e.layers), e.children !== void 0) { const d = e.children; for (let f = 0; f < d.length; f++)a.add(this.parseObject(d[f], t, n, i, s)) } if (e.animations !== void 0) { const d = e.animations; for (let f = 0; f < d.length; f++) { const g = d[f]; a.animations.push(s[g]) } } if (e.type === "LOD") { e.autoUpdate !== void 0 && (a.autoUpdate = e.autoUpdate); const d = e.levels; for (let f = 0; f < d.length; f++) { const g = d[f], _ = a.getObjectByProperty("uuid", g.object); _ !== void 0 && a.addLevel(_, g.distance, g.hysteresis) } } return a } bindSkeletons(e, t) { Object.keys(t).length !== 0 && e.traverse(function (n) { if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) { const i = t[n.skeleton]; i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix) } }) } bindLightTargets(e) { e.traverse(function (t) { if (t.isDirectionalLight || t.isSpotLight) { const n = t.target, i = e.getObjectByProperty("uuid", n); i !== void 0 ? t.target = i : t.target = new ct } }) } } const vu = { UVMapping: 300, CubeReflectionMapping: 301, CubeRefractionMapping: 302, EquirectangularReflectionMapping: 303, EquirectangularRefractionMapping: 304, CubeUVReflectionMapping: 306 }, wo = { RepeatWrapping: 1e3, ClampToEdgeWrapping: 1001, MirroredRepeatWrapping: 1002 }, Ro = { NearestFilter: 1003, NearestMipmapNearestFilter: 1004, NearestMipmapLinearFilter: 1005, LinearFilter: 1006, LinearMipmapNearestFilter: 1007, LinearMipmapLinearFilter: 1008 }, Ps = new WeakMap; class C_ extends Mn { constructor(e) { super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController } setOptions(e) { return this.options = e, this } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = this, a = dn.get(`image-bitmap:${e}`); if (a !== void 0) { if (s.manager.itemStart(e), a.then) { a.then(c => { if (Ps.has(a) === !0) i && i(Ps.get(a)), s.manager.itemError(e), s.manager.itemEnd(e); else return t && t(c), s.manager.itemEnd(e), c }); return } return setTimeout(function () { t && t(a), s.manager.itemEnd(e) }, 0), a } const o = {}; o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, o.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal; const l = fetch(e, o).then(function (c) { return c.blob() }).then(function (c) { return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" })) }).then(function (c) { return dn.add(`image-bitmap:${e}`, c), t && t(c), s.manager.itemEnd(e), c }).catch(function (c) { i && i(c), Ps.set(l, c), dn.remove(`image-bitmap:${e}`), s.manager.itemError(e), s.manager.itemEnd(e) }); dn.add(`image-bitmap:${e}`, l), s.manager.itemStart(e) } abort() { return this._abortController.abort(), this._abortController = new AbortController, this } } class yu extends Lt { constructor(e = []) { super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e } } const ya = "\\[\\]\\.:\\/", Mu = new RegExp("[" + ya + "]", "g"), Ma = "[^" + ya + "]", Su = "[^" + ya.replace("\\.", "") + "]", bu = /((?:WC+[\/:])*)/.source.replace("WC", Ma), Eu = /(WCOD+)?/.source.replace("WCOD", Su), Tu = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ma), Au = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ma), wu = new RegExp("^" + bu + Eu + Tu + Au + "$"), Ru = ["material", "materials", "bones", "map"]; class Cu { constructor(e, t, n) { const i = n || st.parseTrackName(t); this._targetGroup = e, this._bindings = e.subscribe_(t, i) } getValue(e, t) { this.bind(); const n = this._targetGroup.nCachedObjects_, i = this._bindings[n]; i !== void 0 && i.getValue(e, t) } setValue(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)n[i].setValue(e, t) } bind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind() } unbind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind() } } class st { constructor(e, t, n) { this.path = t, this.parsedPath = n || st.parseTrackName(t), this.node = st.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } static create(e, t, n) { return e && e.isAnimationObjectGroup ? new st.Composite(e, t, n) : new st(e, t, n) } static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(Mu, "") } static parseTrackName(e) { const t = wu.exec(e); if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e); const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { const s = n.nodeName.substring(i + 1); Ru.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n } static findNode(e, t) { if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { const n = function (s) { for (let a = 0; a < s.length; a++) { const o = s[a]; if (o.name === t || o.uuid === t) return o; const l = n(o.children); if (l) return l } return null }, i = n(e.children); if (i) return i } return null } _getValue_unavailable() { } _setValue_unavailable() { } _getValue_direct(e, t) { e[t] = this.targetObject[this.propertyName] } _getValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)e[t++] = n[i] } _getValue_arrayElement(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] } _getValue_toArray(e, t) { this.resolvedProperty.toArray(e, t) } _setValue_direct(e, t) { this.targetObject[this.propertyName] = e[t] } _setValue_direct_setNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 } _setValue_direct_setMatrixWorldNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++] } _setValue_array_setNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++]; this.targetObject.needsUpdate = !0 } _setValue_array_setMatrixWorldNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++]; this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_arrayElement(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] } _setValue_arrayElement_setNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 } _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_fromArray(e, t) { this.resolvedProperty.fromArray(e, t) } _setValue_fromArray_setNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 } _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 } _getValue_unbound(e, t) { this.bind(), this.getValue(e, t) } _setValue_unbound(e, t) { this.bind(), this.setValue(e, t) } bind() { let e = this.node; const t = this.parsedPath, n = t.objectName, i = t.propertyName; let s = t.propertyIndex; if (e || (e = st.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + "."); return } if (n) { let c = t.objectIndex; switch (n) { case "materials": if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return } e = e.material.materials; break; case "bones": if (!e.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return } e = e.skeleton.bones; for (let h = 0; h < e.length; h++)if (e[h].name === c) { c = h; break } break; case "map": if ("map" in e) { e = e.map; break } if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.map) { console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this); return } e = e.material.map; break; default: if (e[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return } e = e[n] }if (c !== void 0) { if (e[c] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e); return } e = e[c] } } const a = e[i]; if (a === void 0) { const c = t.nodeName; console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e); return } let o = this.Versioning.None; this.targetObject = e, e.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : e.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate); let l = this.BindingType.Direct; if (s !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return } e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]) } l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i; this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o] } unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } } st.Composite = Cu; st.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }; st.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }; st.prototype.GetterByBindingType = [st.prototype._getValue_direct, st.prototype._getValue_array, st.prototype._getValue_arrayElement, st.prototype._getValue_toArray]; st.prototype.SetterByBindingTypeAndVersioning = [[st.prototype._setValue_direct, st.prototype._setValue_direct_setNeedsUpdate, st.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [st.prototype._setValue_array, st.prototype._setValue_array_setNeedsUpdate, st.prototype._setValue_array_setMatrixWorldNeedsUpdate], [st.prototype._setValue_arrayElement, st.prototype._setValue_arrayElement_setNeedsUpdate, st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [st.prototype._setValue_fromArray, st.prototype._setValue_fromArray_setNeedsUpdate, st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]; const Co = new ke; class I_ { constructor(e, t, n = 0, i = 1 / 0) { this.ray = new qi(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Xs, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} } } set(e, t) { this.ray.set(e, t) } setFromCamera(e, t) { t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type) } setFromXRController(e) { return Co.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Co), this } intersectObject(e, t = !0, n = []) { return ks(e, this, n, t), n.sort(Io), n } intersectObjects(e, t = !0, n = []) { for (let i = 0, s = e.length; i < s; i++)ks(e[i], this, n, t); return n.sort(Io), n } } function Io(r, e) { return r.distance - e.distance } function ks(r, e, t, n) { let i = !0; if (r.layers.test(e.layers) && r.raycast(e, t) === !1 && (i = !1), i === !0 && n === !0) { const s = r.children; for (let a = 0, o = s.length; a < o; a++)ks(s[a], e, t, !0) } } const Po = new Q; class P_ { constructor(e = new Q(1 / 0, 1 / 0), t = new Q(-1 / 0, -1 / 0)) { this.isBox2 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = Po.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y } getCenter(e) { return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } containsPoint(e) { return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y)) } intersectsBox(e) { return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Po).distanceTo(e) } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } } class L_ extends pl { constructor(e, t = 16776960) { const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], s = new nt; s.setIndex(new yt(n, 1)), s.setAttribute("position", new Fe(i, 3)), super(s, new Wr({ color: t, toneMapped: !1 })), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere() } updateMatrixWorld(e) { const t = this.box; t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(e)) } dispose() { this.geometry.dispose(), this.material.dispose() } } function Lo(r, e, t, n) { const i = Iu(n); switch (t) { case 1021: return r * e; case 1028: return r * e / i.components * i.byteLength; case 1029: return r * e / i.components * i.byteLength; case 1030: return r * e * 2 / i.components * i.byteLength; case 1031: return r * e * 2 / i.components * i.byteLength; case 1022: return r * e * 3 / i.components * i.byteLength; case 1023: return r * e * 4 / i.components * i.byteLength; case 1033: return r * e * 4 / i.components * i.byteLength; case 33776: case 33777: return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8; case 33778: case 33779: return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16; case 35841: case 35843: return Math.max(r, 16) * Math.max(e, 8) / 4; case 35840: case 35842: return Math.max(r, 8) * Math.max(e, 8) / 2; case 36196: case 37492: return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8; case 37496: return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16; case 37808: return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16; case 37809: return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16; case 37810: return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16; case 37811: return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16; case 37812: return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16; case 37813: return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16; case 37814: return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16; case 37815: return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16; case 37816: return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16; case 37817: return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16; case 37818: return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16; case 37819: return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16; case 37820: return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16; case 37821: return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16; case 36492: case 36494: case 36495: return Math.ceil(r / 4) * Math.ceil(e / 4) * 16; case 36283: case 36284: return Math.ceil(r / 4) * Math.ceil(e / 4) * 8; case 36285: case 36286: return Math.ceil(r / 4) * Math.ceil(e / 4) * 16 }throw new Error(`Unable to determine texture byte length for ${t} format.`) } function Iu(r) { switch (r) { case 1009: case 1010: return { byteLength: 1, components: 1 }; case 1012: case 1011: case 1016: return { byteLength: 2, components: 1 }; case 1017: case 1018: return { byteLength: 2, components: 4 }; case 1014: case 1013: case 1015: return { byteLength: 4, components: 1 }; case 35902: case 35899: return { byteLength: 4, components: 3 } }throw new Error(`Unknown texture type ${r}.`) } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "180" } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180"); function Ul() { let r = null, e = !1, t = null, n = null; function i(s, a) { t(s, a), n = r.requestAnimationFrame(i) } return { start: function () { e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0) }, stop: function () { r.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (s) { t = s }, setContext: function (s) { r = s } } } function Pu(r) { const e = new WeakMap; function t(o, l) { const c = o.array, h = o.usage, u = c.byteLength, d = r.createBuffer(); r.bindBuffer(l, d), r.bufferData(l, c, h), o.onUploadCallback(); let f; if (c instanceof Float32Array) f = r.FLOAT; else if (typeof Float16Array < "u" && c instanceof Float16Array) f = r.HALF_FLOAT; else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? f = r.HALF_FLOAT : f = r.UNSIGNED_SHORT; else if (c instanceof Int16Array) f = r.SHORT; else if (c instanceof Uint32Array) f = r.UNSIGNED_INT; else if (c instanceof Int32Array) f = r.INT; else if (c instanceof Int8Array) f = r.BYTE; else if (c instanceof Uint8Array) f = r.UNSIGNED_BYTE; else if (c instanceof Uint8ClampedArray) f = r.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c); return { buffer: d, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u } } function n(o, l, c) { const h = l.array, u = l.updateRanges; if (r.bindBuffer(c, o), u.length === 0) r.bufferSubData(c, 0, h); else { u.sort((f, g) => f.start - g.start); let d = 0; for (let f = 1; f < u.length; f++) { const g = u[d], _ = u[f]; _.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, _.start + _.count - g.start) : (++d, u[d] = _) } u.length = d + 1; for (let f = 0, g = u.length; f < g; f++) { const _ = u[f]; r.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count) } l.clearUpdateRanges() } l.onUploadCallback() } function i(o) { return o.isInterleavedBufferAttribute && (o = o.data), e.get(o) } function s(o) { o.isInterleavedBufferAttribute && (o = o.data); const l = e.get(o); l && (r.deleteBuffer(l.buffer), e.delete(o)) } function a(o, l) { if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) { const h = e.get(o); (!h || h.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version }); return } const c = e.get(o); if (c === void 0) e.set(o, t(o, l)); else if (c.version < o.version) { if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); n(c.buffer, o, l), c.version = o.version } } return { get: i, remove: s, update: a } } var Lu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Du = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Uu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Nu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Fu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Bu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ou = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, zu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Vu = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Gu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, ku = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Hu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Wu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Xu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, qu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Yu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ju = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, $u = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Zu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ku = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Qu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ju = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, ed = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, td = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, nd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, id = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, rd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, sd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ad = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, od = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ld = "gl_FragColor = linearToOutputTexel( gl_FragColor );", cd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, hd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ud = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, dd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, fd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, pd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, md = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, gd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, _d = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, xd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, vd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, yd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Md = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Sd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, bd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Ed = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Td = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ad = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, wd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Rd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Cd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Id = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Pd = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Ld = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Dd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Ud = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Nd = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Fd = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Bd = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Od = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, zd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Vd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Gd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, kd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Hd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Wd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Xd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, qd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Yd = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Jd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, $d = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Zd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Kd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Qd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, jd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ef = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, tf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, nf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, rf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, sf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, af = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, of = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, lf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, cf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, hf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, uf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, df = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, ff = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, pf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, mf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, gf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, _f = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, xf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, vf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, yf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Mf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Sf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, bf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ef = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Tf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Af = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, wf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Rf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Cf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, If = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Pf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Lf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Df = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Uf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Nf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ff = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Bf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Of = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, zf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Vf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Gf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, kf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Hf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Wf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Xf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, qf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Yf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $f = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Kf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Qf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, jf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, ep = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, tp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, np = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, ip = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ap = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, op = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, lp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, cp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, hp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, up = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Xe = { alphahash_fragment: Lu, alphahash_pars_fragment: Du, alphamap_fragment: Uu, alphamap_pars_fragment: Nu, alphatest_fragment: Fu, alphatest_pars_fragment: Bu, aomap_fragment: Ou, aomap_pars_fragment: zu, batching_pars_vertex: Vu, batching_vertex: Gu, begin_vertex: ku, beginnormal_vertex: Hu, bsdfs: Wu, iridescence_fragment: Xu, bumpmap_pars_fragment: qu, clipping_planes_fragment: Yu, clipping_planes_pars_fragment: Ju, clipping_planes_pars_vertex: $u, clipping_planes_vertex: Zu, color_fragment: Ku, color_pars_fragment: Qu, color_pars_vertex: ju, color_vertex: ed, common: td, cube_uv_reflection_fragment: nd, defaultnormal_vertex: id, displacementmap_pars_vertex: rd, displacementmap_vertex: sd, emissivemap_fragment: ad, emissivemap_pars_fragment: od, colorspace_fragment: ld, colorspace_pars_fragment: cd, envmap_fragment: hd, envmap_common_pars_fragment: ud, envmap_pars_fragment: dd, envmap_pars_vertex: fd, envmap_physical_pars_fragment: Ed, envmap_vertex: pd, fog_vertex: md, fog_pars_vertex: gd, fog_fragment: _d, fog_pars_fragment: xd, gradientmap_pars_fragment: vd, lightmap_pars_fragment: yd, lights_lambert_fragment: Md, lights_lambert_pars_fragment: Sd, lights_pars_begin: bd, lights_toon_fragment: Td, lights_toon_pars_fragment: Ad, lights_phong_fragment: wd, lights_phong_pars_fragment: Rd, lights_physical_fragment: Cd, lights_physical_pars_fragment: Id, lights_fragment_begin: Pd, lights_fragment_maps: Ld, lights_fragment_end: Dd, logdepthbuf_fragment: Ud, logdepthbuf_pars_fragment: Nd, logdepthbuf_pars_vertex: Fd, logdepthbuf_vertex: Bd, map_fragment: Od, map_pars_fragment: zd, map_particle_fragment: Vd, map_particle_pars_fragment: Gd, metalnessmap_fragment: kd, metalnessmap_pars_fragment: Hd, morphinstance_vertex: Wd, morphcolor_vertex: Xd, morphnormal_vertex: qd, morphtarget_pars_vertex: Yd, morphtarget_vertex: Jd, normal_fragment_begin: $d, normal_fragment_maps: Zd, normal_pars_fragment: Kd, normal_pars_vertex: Qd, normal_vertex: jd, normalmap_pars_fragment: ef, clearcoat_normal_fragment_begin: tf, clearcoat_normal_fragment_maps: nf, clearcoat_pars_fragment: rf, iridescence_pars_fragment: sf, opaque_fragment: af, packing: of, premultiplied_alpha_fragment: lf, project_vertex: cf, dithering_fragment: hf, dithering_pars_fragment: uf, roughnessmap_fragment: df, roughnessmap_pars_fragment: ff, shadowmap_pars_fragment: pf, shadowmap_pars_vertex: mf, shadowmap_vertex: gf, shadowmask_pars_fragment: _f, skinbase_vertex: xf, skinning_pars_vertex: vf, skinning_vertex: yf, skinnormal_vertex: Mf, specularmap_fragment: Sf, specularmap_pars_fragment: bf, tonemapping_fragment: Ef, tonemapping_pars_fragment: Tf, transmission_fragment: Af, transmission_pars_fragment: wf, uv_pars_fragment: Rf, uv_pars_vertex: Cf, uv_vertex: If, worldpos_vertex: Pf, background_vert: Lf, background_frag: Df, backgroundCube_vert: Uf, backgroundCube_frag: Nf, cube_vert: Ff, cube_frag: Bf, depth_vert: Of, depth_frag: zf, distanceRGBA_vert: Vf, distanceRGBA_frag: Gf, equirect_vert: kf, equirect_frag: Hf, linedashed_vert: Wf, linedashed_frag: Xf, meshbasic_vert: qf, meshbasic_frag: Yf, meshlambert_vert: Jf, meshlambert_frag: $f, meshmatcap_vert: Zf, meshmatcap_frag: Kf, meshnormal_vert: Qf, meshnormal_frag: jf, meshphong_vert: ep, meshphong_frag: tp, meshphysical_vert: np, meshphysical_frag: ip, meshtoon_vert: rp, meshtoon_frag: sp, points_vert: ap, points_frag: op, shadow_vert: lp, shadow_frag: cp, sprite_vert: hp, sprite_frag: up }, fe = { common: { diffuse: { value: new Pe(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ge }, alphaMap: { value: null }, alphaMapTransform: { value: new Ge }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ge } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ge }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ge } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ge } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ge }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ge }, normalScale: { value: new Q(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ge }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ge } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ge } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ge } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Pe(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Pe(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ge }, alphaTest: { value: 0 }, uvTransform: { value: new Ge } }, sprite: { diffuse: { value: new Pe(16777215) }, opacity: { value: 1 }, center: { value: new Q(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ge }, alphaMap: { value: null }, alphaMapTransform: { value: new Ge }, alphaTest: { value: 0 } } }, jt = { basic: { uniforms: wt([fe.common, fe.specularmap, fe.envmap, fe.aomap, fe.lightmap, fe.fog]), vertexShader: Xe.meshbasic_vert, fragmentShader: Xe.meshbasic_frag }, lambert: { uniforms: wt([fe.common, fe.specularmap, fe.envmap, fe.aomap, fe.lightmap, fe.emissivemap, fe.bumpmap, fe.normalmap, fe.displacementmap, fe.fog, fe.lights, { emissive: { value: new Pe(0) } }]), vertexShader: Xe.meshlambert_vert, fragmentShader: Xe.meshlambert_frag }, phong: { uniforms: wt([fe.common, fe.specularmap, fe.envmap, fe.aomap, fe.lightmap, fe.emissivemap, fe.bumpmap, fe.normalmap, fe.displacementmap, fe.fog, fe.lights, { emissive: { value: new Pe(0) }, specular: { value: new Pe(1118481) }, shininess: { value: 30 } }]), vertexShader: Xe.meshphong_vert, fragmentShader: Xe.meshphong_frag }, standard: { uniforms: wt([fe.common, fe.envmap, fe.aomap, fe.lightmap, fe.emissivemap, fe.bumpmap, fe.normalmap, fe.displacementmap, fe.roughnessmap, fe.metalnessmap, fe.fog, fe.lights, { emissive: { value: new Pe(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Xe.meshphysical_vert, fragmentShader: Xe.meshphysical_frag }, toon: { uniforms: wt([fe.common, fe.aomap, fe.lightmap, fe.emissivemap, fe.bumpmap, fe.normalmap, fe.displacementmap, fe.gradientmap, fe.fog, fe.lights, { emissive: { value: new Pe(0) } }]), vertexShader: Xe.meshtoon_vert, fragmentShader: Xe.meshtoon_frag }, matcap: { uniforms: wt([fe.common, fe.bumpmap, fe.normalmap, fe.displacementmap, fe.fog, { matcap: { value: null } }]), vertexShader: Xe.meshmatcap_vert, fragmentShader: Xe.meshmatcap_frag }, points: { uniforms: wt([fe.points, fe.fog]), vertexShader: Xe.points_vert, fragmentShader: Xe.points_frag }, dashed: { uniforms: wt([fe.common, fe.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Xe.linedashed_vert, fragmentShader: Xe.linedashed_frag }, depth: { uniforms: wt([fe.common, fe.displacementmap]), vertexShader: Xe.depth_vert, fragmentShader: Xe.depth_frag }, normal: { uniforms: wt([fe.common, fe.bumpmap, fe.normalmap, fe.displacementmap, { opacity: { value: 1 } }]), vertexShader: Xe.meshnormal_vert, fragmentShader: Xe.meshnormal_frag }, sprite: { uniforms: wt([fe.sprite, fe.fog]), vertexShader: Xe.sprite_vert, fragmentShader: Xe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ge }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Xe.background_vert, fragmentShader: Xe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ge } }, vertexShader: Xe.backgroundCube_vert, fragmentShader: Xe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Xe.cube_vert, fragmentShader: Xe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Xe.equirect_vert, fragmentShader: Xe.equirect_frag }, distanceRGBA: { uniforms: wt([fe.common, fe.displacementmap, { referencePosition: { value: new R }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Xe.distanceRGBA_vert, fragmentShader: Xe.distanceRGBA_frag }, shadow: { uniforms: wt([fe.lights, fe.fog, { color: { value: new Pe(0) }, opacity: { value: 1 } }]), vertexShader: Xe.shadow_vert, fragmentShader: Xe.shadow_frag } }; jt.physical = { uniforms: wt([jt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ge }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ge }, clearcoatNormalScale: { value: new Q(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ge }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ge }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ge }, sheen: { value: 0 }, sheenColor: { value: new Pe(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ge }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ge }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ge }, transmissionSamplerSize: { value: new Q }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ge }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Pe(0) }, specularColor: { value: new Pe(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ge }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ge }, anisotropyVector: { value: new Q }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ge } }]), vertexShader: Xe.meshphysical_vert, fragmentShader: Xe.meshphysical_frag }; const Dr = { r: 0, b: 0, g: 0 }, In = new Wt, dp = new ke; function fp(r, e, t, n, i, s, a) { const o = new Pe(0); let l = s === !0 ? 0 : 1, c, h, u = null, d = 0, f = null; function g(v) { let x = v.isScene === !0 ? v.background : null; return x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? t : e).get(x)), x } function _(v) { let x = !1; const w = g(v); w === null ? p(o, l) : w && w.isColor && (p(w, 1), x = !0); const T = r.xr.getEnvironmentBlendMode(); T === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || x) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil)) } function m(v, x) { const w = g(x); w && (w.isCubeTexture || w.mapping === 306) ? (h === void 0 && (h = new Rt(new _i(1, 1, 1), new en({ name: "BackgroundCubeMaterial", uniforms: di(jt.backgroundCube.uniforms), vertexShader: jt.backgroundCube.vertexShader, fragmentShader: jt.backgroundCube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (T, C, P) { this.matrixWorld.copyPosition(P.matrixWorld) }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), i.update(h)), In.copy(x.backgroundRotation), In.x *= -1, In.y *= -1, In.z *= -1, w.isCubeTexture && w.isRenderTargetTexture === !1 && (In.y *= -1, In.z *= -1), h.material.uniforms.envMap.value = w, h.material.uniforms.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(In)), h.material.toneMapped = Ze.getTransfer(w.colorSpace) !== rt, (u !== w || d !== w.version || f !== r.toneMapping) && (h.material.needsUpdate = !0, u = w, d = w.version, f = r.toneMapping), h.layers.enableAll(), v.unshift(h, h.geometry, h.material, 0, 0, null)) : w && w.isTexture && (c === void 0 && (c = new Rt(new Ji(2, 2), new en({ name: "BackgroundMaterial", uniforms: di(jt.background.uniforms), vertexShader: jt.background.vertexShader, fragmentShader: jt.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1, allowOverride: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), i.update(c)), c.material.uniforms.t2D.value = w, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = Ze.getTransfer(w.colorSpace) !== rt, w.matrixAutoUpdate === !0 && w.updateMatrix(), c.material.uniforms.uvTransform.value.copy(w.matrix), (u !== w || d !== w.version || f !== r.toneMapping) && (c.material.needsUpdate = !0, u = w, d = w.version, f = r.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null)) } function p(v, x) { v.getRGB(Dr, ll(r)), n.buffers.color.setClear(Dr.r, Dr.g, Dr.b, x, a) } function M() { h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0) } return { getClearColor: function () { return o }, setClearColor: function (v, x = 1) { o.set(v), l = x, p(o, l) }, getClearAlpha: function () { return l }, setClearAlpha: function (v) { l = v, p(o, l) }, render: _, addToRenderList: m, dispose: M } } function pp(r, e) { const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = d(null); let s = i, a = !1; function o(S, L, F, z, H) { let q = !1; const W = u(z, F, L); s !== W && (s = W, c(s.object)), q = f(S, z, F, H), q && g(S, z, F, H), H !== null && e.update(H, r.ELEMENT_ARRAY_BUFFER), (q || a) && (a = !1, x(S, L, F, z), H !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(H).buffer)) } function l() { return r.createVertexArray() } function c(S) { return r.bindVertexArray(S) } function h(S) { return r.deleteVertexArray(S) } function u(S, L, F) { const z = F.wireframe === !0; let H = n[S.id]; H === void 0 && (H = {}, n[S.id] = H); let q = H[L.id]; q === void 0 && (q = {}, H[L.id] = q); let W = q[z]; return W === void 0 && (W = d(l()), q[z] = W), W } function d(S) { const L = [], F = [], z = []; for (let H = 0; H < t; H++)L[H] = 0, F[H] = 0, z[H] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: L, enabledAttributes: F, attributeDivisors: z, object: S, attributes: {}, index: null } } function f(S, L, F, z) { const H = s.attributes, q = L.attributes; let W = 0; const ne = F.getAttributes(); for (const k in ne) if (ne[k].location >= 0) { const _e = H[k]; let ye = q[k]; if (ye === void 0 && (k === "instanceMatrix" && S.instanceMatrix && (ye = S.instanceMatrix), k === "instanceColor" && S.instanceColor && (ye = S.instanceColor)), _e === void 0 || _e.attribute !== ye || ye && _e.data !== ye.data) return !0; W++ } return s.attributesNum !== W || s.index !== z } function g(S, L, F, z) { const H = {}, q = L.attributes; let W = 0; const ne = F.getAttributes(); for (const k in ne) if (ne[k].location >= 0) { let _e = q[k]; _e === void 0 && (k === "instanceMatrix" && S.instanceMatrix && (_e = S.instanceMatrix), k === "instanceColor" && S.instanceColor && (_e = S.instanceColor)); const ye = {}; ye.attribute = _e, _e && _e.data && (ye.data = _e.data), H[k] = ye, W++ } s.attributes = H, s.attributesNum = W, s.index = z } function _() { const S = s.newAttributes; for (let L = 0, F = S.length; L < F; L++)S[L] = 0 } function m(S) { p(S, 0) } function p(S, L) { const F = s.newAttributes, z = s.enabledAttributes, H = s.attributeDivisors; F[S] = 1, z[S] === 0 && (r.enableVertexAttribArray(S), z[S] = 1), H[S] !== L && (r.vertexAttribDivisor(S, L), H[S] = L) } function M() { const S = s.newAttributes, L = s.enabledAttributes; for (let F = 0, z = L.length; F < z; F++)L[F] !== S[F] && (r.disableVertexAttribArray(F), L[F] = 0) } function v(S, L, F, z, H, q, W) { W === !0 ? r.vertexAttribIPointer(S, L, F, H, q) : r.vertexAttribPointer(S, L, F, z, H, q) } function x(S, L, F, z) { _(); const H = z.attributes, q = F.getAttributes(), W = L.defaultAttributeValues; for (const ne in q) { const k = q[ne]; if (k.location >= 0) { let ue = H[ne]; if (ue === void 0 && (ne === "instanceMatrix" && S.instanceMatrix && (ue = S.instanceMatrix), ne === "instanceColor" && S.instanceColor && (ue = S.instanceColor)), ue !== void 0) { const _e = ue.normalized, ye = ue.itemSize, Ve = e.get(ue); if (Ve === void 0) continue; const Je = Ve.buffer, et = Ve.type, $e = Ve.bytesPerElement, Y = et === r.INT || et === r.UNSIGNED_INT || ue.gpuType === 1013; if (ue.isInterleavedBufferAttribute) { const te = ue.data, ve = te.stride, Ce = ue.offset; if (te.isInstancedInterleavedBuffer) { for (let be = 0; be < k.locationSize; be++)p(k.location + be, te.meshPerAttribute); S.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = te.meshPerAttribute * te.count) } else for (let be = 0; be < k.locationSize; be++)m(k.location + be); r.bindBuffer(r.ARRAY_BUFFER, Je); for (let be = 0; be < k.locationSize; be++)v(k.location + be, ye / k.locationSize, et, _e, ve * $e, (Ce + ye / k.locationSize * be) * $e, Y) } else { if (ue.isInstancedBufferAttribute) { for (let te = 0; te < k.locationSize; te++)p(k.location + te, ue.meshPerAttribute); S.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ue.meshPerAttribute * ue.count) } else for (let te = 0; te < k.locationSize; te++)m(k.location + te); r.bindBuffer(r.ARRAY_BUFFER, Je); for (let te = 0; te < k.locationSize; te++)v(k.location + te, ye / k.locationSize, et, _e, ye * $e, ye / k.locationSize * te * $e, Y) } } else if (W !== void 0) { const _e = W[ne]; if (_e !== void 0) switch (_e.length) { case 2: r.vertexAttrib2fv(k.location, _e); break; case 3: r.vertexAttrib3fv(k.location, _e); break; case 4: r.vertexAttrib4fv(k.location, _e); break; default: r.vertexAttrib1fv(k.location, _e) } } } } M() } function w() { P(); for (const S in n) { const L = n[S]; for (const F in L) { const z = L[F]; for (const H in z) h(z[H].object), delete z[H]; delete L[F] } delete n[S] } } function T(S) { if (n[S.id] === void 0) return; const L = n[S.id]; for (const F in L) { const z = L[F]; for (const H in z) h(z[H].object), delete z[H]; delete L[F] } delete n[S.id] } function C(S) { for (const L in n) { const F = n[L]; if (F[S.id] === void 0) continue; const z = F[S.id]; for (const H in z) h(z[H].object), delete z[H]; delete F[S.id] } } function P() { b(), a = !0, s !== i && (s = i, c(s.object)) } function b() { i.geometry = null, i.program = null, i.wireframe = !1 } return { setup: o, reset: P, resetDefaultState: b, dispose: w, releaseStatesOfGeometry: T, releaseStatesOfProgram: C, initAttributes: _, enableAttribute: m, disableUnusedAttributes: M } } function mp(r, e, t) { let n; function i(c) { n = c } function s(c, h) { r.drawArrays(n, c, h), t.update(h, n, 1) } function a(c, h, u) { u !== 0 && (r.drawArraysInstanced(n, c, h, u), t.update(h, n, u)) } function o(c, h, u) { if (u === 0) return; e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u); let f = 0; for (let g = 0; g < u; g++)f += h[g]; t.update(f, n, 1) } function l(c, h, u, d) { if (u === 0) return; const f = e.get("WEBGL_multi_draw"); if (f === null) for (let g = 0; g < c.length; g++)a(c[g], h[g], d[g]); else { f.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u); let g = 0; for (let _ = 0; _ < u; _++)g += h[_] * d[_]; t.update(g, n, 1) } } this.setMode = i, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l } function gp(r, e, t, n) { let i; function s() { if (i !== void 0) return i; if (e.has("EXT_texture_filter_anisotropic") === !0) { const C = e.get("EXT_texture_filter_anisotropic"); i = r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else i = 0; return i } function a(C) { return !(C !== 1023 && n.convert(C) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)) } function o(C) { const P = C === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float")); return !(C !== 1009 && n.convert(C) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && C !== 1015 && !P) } function l(C) { if (C === "highp") { if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp"; C = "mediump" } return C === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let c = t.precision !== void 0 ? t.precision : "highp"; const h = l(c); h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h); const u = t.logarithmicDepthBuffer === !0, d = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"), f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), M = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), v = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), w = g > 0, T = r.getParameter(r.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reversedDepthBuffer: d, maxTextures: f, maxVertexTextures: g, maxTextureSize: _, maxCubemapSize: m, maxAttributes: p, maxVertexUniforms: M, maxVaryings: v, maxFragmentUniforms: x, vertexTextures: w, maxSamples: T } } function _p(r) { const e = this; let t = null, n = 0, i = !1, s = !1; const a = new Ln, o = new Ge, l = { value: null, needsUpdate: !1 }; this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d) { const f = u.length !== 0 || d || n !== 0 || i; return i = d, n = u.length, f }, this.beginShadows = function () { s = !0, h(null) }, this.endShadows = function () { s = !1 }, this.setGlobalState = function (u, d) { t = h(u, d, 0) }, this.setState = function (u, d, f) { const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, p = r.get(u); if (!i || g === null || g.length === 0 || s && !m) s ? h(null) : c(); else { const M = s ? 0 : n, v = M * 4; let x = p.clippingState || null; l.value = x, x = h(g, d, v, f); for (let w = 0; w !== v; ++w)x[w] = t[w]; p.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += M } }; function c() { l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function h(u, d, f, g) { const _ = u !== null ? u.length : 0; let m = null; if (_ !== 0) { if (m = l.value, g !== !0 || m === null) { const p = f + _ * 4, M = d.matrixWorldInverse; o.getNormalMatrix(M), (m === null || m.length < p) && (m = new Float32Array(p)); for (let v = 0, x = f; v !== _; ++v, x += 4)a.copy(u[v]).applyMatrix4(M, o), a.normal.toArray(m, x), m[x + 3] = a.constant } l.value = m, l.needsUpdate = !0 } return e.numPlanes = _, e.numIntersection = 0, m } } function xp(r) { let e = new WeakMap; function t(a, o) { return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a } function n(a) { if (a && a.isTexture) { const o = a.mapping; if (o === 303 || o === 304) if (e.has(a)) { const l = e.get(a).texture; return t(l, a.mapping) } else { const l = a.image; if (l && l.height > 0) { const c = new Fc(l.height); return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping) } else return null } } return a } function i(a) { const o = a.target; o.removeEventListener("dispose", i); const l = e.get(o); l !== void 0 && (e.delete(o), l.dispose()) } function s() { e = new WeakMap } return { get: n, dispose: s } } const oi = 4, Do = [.125, .215, .35, .446, .526, .582], Un = 20, Ls = new xa, Uo = new Pe; let Ds = null, Us = 0, Ns = 0, Fs = !1; const Dn = (1 + Math.sqrt(5)) / 2, si = 1 / Dn, No = [new R(-Dn, si, 0), new R(Dn, si, 0), new R(-si, 0, Dn), new R(si, 0, Dn), new R(0, Dn, -si), new R(0, Dn, si), new R(-1, 1, -1), new R(1, 1, -1), new R(-1, 1, 1), new R(1, 1, 1)], vp = new R; class Fo { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, i = 100, s = {}) { const { size: a = 256, position: o = vp } = s; Ds = this._renderer.getRenderTarget(), Us = this._renderer.getActiveCubeFace(), Ns = this._renderer.getActiveMipmapLevel(), Fs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a); const l = this._allocateTargets(); return l.depthBuffer = !0, this._sceneToCubeUV(e, n, i, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = zo(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = Oo(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(Ds, Us, Ns), this._renderer.xr.enabled = Fs, e.scissorTest = !1, Ur(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ds = this._renderer.getRenderTarget(), Us = this._renderer.getActiveCubeFace(), Ns = this._renderer.getActiveMipmapLevel(), Fs = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; const n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: 1006, minFilter: 1006, generateMipmaps: !1, type: 1016, format: 1023, colorSpace: hi, depthBuffer: !1 }, i = Bo(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Bo(e, t, n); const { _lodMax: s } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = yp(s)), this._blurMaterial = Mp(s, e, t) } return i } _compileMaterial(e) { const t = new Rt(this._lodPlanes[0], e); this._renderer.compile(t, Ls) } _sceneToCubeUV(e, t, n, i, s) { const l = new Lt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping; u.getClearColor(Uo), u.toneMapping = 0, u.autoClear = !1, u.state.buffers.depth.getReversed() && (u.setRenderTarget(i), u.clearDepth(), u.setRenderTarget(null)); const _ = new qs({ name: "PMREM.Background", side: 1, depthWrite: !1, depthTest: !1 }), m = new Rt(new _i, _); let p = !1; const M = e.background; M ? M.isColor && (_.color.copy(M), e.background = null, p = !0) : (_.color.copy(Uo), p = !0); for (let v = 0; v < 6; v++) { const x = v % 3; x === 0 ? (l.up.set(0, c[v], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x + h[v], s.y, s.z)) : x === 1 ? (l.up.set(0, 0, c[v]), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y + h[v], s.z)) : (l.up.set(0, c[v], 0), l.position.set(s.x, s.y, s.z), l.lookAt(s.x, s.y, s.z + h[v])); const w = this._cubeSize; Ur(i, x * w, v > 2 ? w : 0, w, w), u.setRenderTarget(i), p && u.render(m, l), u.render(e, l) } m.geometry.dispose(), m.material.dispose(), u.toneMapping = f, u.autoClear = d, e.background = M } _textureToCubeUV(e, t) { const n = this._renderer, i = e.mapping === 301 || e.mapping === 302; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = zo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Oo()); const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Rt(this._lodPlanes[0], s), o = s.uniforms; o.envMap.value = e; const l = this._cubeSize; Ur(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Ls) } _applyPMREM(e) { const t = this._renderer, n = t.autoClear; t.autoClear = !1; const i = this._lodPlanes.length; for (let s = 1; s < i; s++) { const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = No[(i - s - 1) % No.length]; this._blur(e, s - 1, s, a, o) } t.autoClear = n } _blur(e, t, n, i, s) { const a = this._pingPongRenderTarget; this._halfBlur(e, a, t, n, i, "latitudinal", s), this._halfBlur(a, e, n, n, i, "longitudinal", s) } _halfBlur(e, t, n, i, s, a, o) { const l = this._renderer, c = this._blurMaterial; a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3, u = new Rt(this._lodPlanes[i], c), d = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Un - 1), _ = s / g, m = isFinite(s) ? 1 + Math.floor(h * _) : Un; m > Un && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`); const p = []; let M = 0; for (let C = 0; C < Un; ++C) { const P = C / _, b = Math.exp(-P * P / 2); p.push(b), C === 0 ? M += b : C < m && (M += 2 * b) } for (let C = 0; C < p.length; C++)p[C] = p[C] / M; d.envMap.value = e.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o); const { _lodMax: v } = this; d.dTheta.value = g, d.mipInt.value = v - n; const x = this._sizeLods[i], w = 3 * x * (i > v - oi ? i - v + oi : 0), T = 4 * (this._cubeSize - x); Ur(t, w, T, 3 * x, 2 * x), l.setRenderTarget(t), l.render(u, Ls) } } function yp(r) { const e = [], t = [], n = []; let i = r; const s = r - oi + 1 + Do.length; for (let a = 0; a < s; a++) { const o = Math.pow(2, i); t.push(o); let l = 1 / o; a > r - oi ? l = Do[a - r + oi - 1] : a === 0 && (l = 0), n.push(l); const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, _ = 3, m = 2, p = 1, M = new Float32Array(_ * g * f), v = new Float32Array(m * g * f), x = new Float32Array(p * g * f); for (let T = 0; T < f; T++) { const C = T % 3 * 2 / 3 - 1, P = T > 2 ? 0 : -1, b = [C, P, 0, C + 2 / 3, P, 0, C + 2 / 3, P + 1, 0, C, P, 0, C + 2 / 3, P + 1, 0, C, P + 1, 0]; M.set(b, _ * g * T), v.set(d, m * g * T); const S = [T, T, T, T, T, T]; x.set(S, p * g * T) } const w = new nt; w.setAttribute("position", new yt(M, _)), w.setAttribute("uv", new yt(v, m)), w.setAttribute("faceIndex", new yt(x, p)), e.push(w), i > oi && i-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function Bo(r, e, t) { const n = new Fn(r, e, t); return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function Ur(r, e, t, n, i) { r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i) } function Mp(r, e, t) {
	const n = new Float32Array(Un), i = new R(0, 1, 0); return new en({
		name: "SphericalGaussianBlur", defines: { n: Un, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Sa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: !1, depthWrite: !1
	})
} function Oo() {
	return new en({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Sa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1
	})
} function zo() {
	return new en({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Sa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1
	})
} function Sa() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function Sp(r) { let e = new WeakMap, t = null; function n(o) { if (o && o.isTexture) { const l = o.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302; if (c || h) { let u = e.get(o); const d = u !== void 0 ? u.texture.pmremVersion : 0; if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new Fo(r)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture; if (u !== void 0) return u.texture; { const f = o.image; return c && f && f.height > 0 || h && f && i(f) ? (t === null && (t = new Fo(r)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", s), u.texture) : null } } } return o } function i(o) { let l = 0; const c = 6; for (let h = 0; h < c; h++)o[h] !== void 0 && l++; return l === c } function s(o) { const l = o.target; l.removeEventListener("dispose", s); const c = e.get(l); c !== void 0 && (e.delete(l), c.dispose()) } function a() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: a } } function bp(r) { const e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) { case "WEBGL_depth_texture": i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: i = r.getExtension(n) }return e[n] = i, i } return { has: function (n) { return t(n) !== null }, init: function () { t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent") }, get: function (n) { const i = t(n); return i === null && Gi("THREE.WebGLRenderer: " + n + " extension not supported."), i } } } function Ep(r, e, t, n) { const i = {}, s = new WeakMap; function a(u) { const d = u.target; d.index !== null && e.remove(d.index); for (const g in d.attributes) e.remove(d.attributes[g]); d.removeEventListener("dispose", a), delete i[d.id]; const f = s.get(d); f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- } function o(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d } function l(u) { const d = u.attributes; for (const f in d) e.update(d[f], r.ARRAY_BUFFER) } function c(u) { const d = [], f = u.index, g = u.attributes.position; let _ = 0; if (f !== null) { const M = f.array; _ = f.version; for (let v = 0, x = M.length; v < x; v += 3) { const w = M[v + 0], T = M[v + 1], C = M[v + 2]; d.push(w, T, T, C, C, w) } } else if (g !== void 0) { const M = g.array; _ = g.version; for (let v = 0, x = M.length / 3 - 1; v < x; v += 3) { const w = v + 0, T = v + 1, C = v + 2; d.push(w, T, T, C, C, w) } } else return; const m = new (il(d) ? ol : al)(d, 1); m.version = _; const p = s.get(u); p && e.remove(p), s.set(u, m) } function h(u) { const d = s.get(u); if (d) { const f = u.index; f !== null && d.version < f.version && c(u) } else c(u); return s.get(u) } return { get: o, update: l, getWireframeAttribute: h } } function Tp(r, e, t) { let n; function i(d) { n = d } let s, a; function o(d) { s = d.type, a = d.bytesPerElement } function l(d, f) { r.drawElements(n, f, s, d * a), t.update(f, n, 1) } function c(d, f, g) { g !== 0 && (r.drawElementsInstanced(n, f, s, d * a, g), t.update(f, n, g)) } function h(d, f, g) { if (g === 0) return; e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, d, 0, g); let m = 0; for (let p = 0; p < g; p++)m += f[p]; t.update(m, n, 1) } function u(d, f, g, _) { if (g === 0) return; const m = e.get("WEBGL_multi_draw"); if (m === null) for (let p = 0; p < d.length; p++)c(d[p] / a, f[p], _[p]); else { m.multiDrawElementsInstancedWEBGL(n, f, 0, s, d, 0, _, 0, g); let p = 0; for (let M = 0; M < g; M++)p += f[M] * _[M]; t.update(p, n, 1) } } this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u } function Ap(r) { const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(s, a, o) { switch (t.calls++, a) { case r.TRIANGLES: t.triangles += o * (s / 3); break; case r.LINES: t.lines += o * (s / 2); break; case r.LINE_STRIP: t.lines += o * (s - 1); break; case r.LINE_LOOP: t.lines += o * s; break; case r.POINTS: t.points += o * s; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", a); break } } function i() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } } function wp(r, e, t) { const n = new WeakMap, i = new Qe; function s(a, o, l) { const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0; let d = n.get(o); if (d === void 0 || d.count !== u) { let b = function () { C.dispose(), n.delete(o), o.removeEventListener("dispose", b) }; d !== void 0 && d.texture.dispose(); const f = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], M = o.morphAttributes.color || []; let v = 0; f === !0 && (v = 1), g === !0 && (v = 2), _ === !0 && (v = 3); let x = o.attributes.position.count * v, w = 1; x > e.maxTextureSize && (w = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize); const T = new Float32Array(x * w * 4 * u), C = new rl(T, x, w, u); C.type = 1015, C.needsUpdate = !0; const P = v * 4; for (let S = 0; S < u; S++) { const L = m[S], F = p[S], z = M[S], H = x * w * 4 * S; for (let q = 0; q < L.count; q++) { const W = q * P; f === !0 && (i.fromBufferAttribute(L, q), T[H + W + 0] = i.x, T[H + W + 1] = i.y, T[H + W + 2] = i.z, T[H + W + 3] = 0), g === !0 && (i.fromBufferAttribute(F, q), T[H + W + 4] = i.x, T[H + W + 5] = i.y, T[H + W + 6] = i.z, T[H + W + 7] = 0), _ === !0 && (i.fromBufferAttribute(z, q), T[H + W + 8] = i.x, T[H + W + 9] = i.y, T[H + W + 10] = i.z, T[H + W + 11] = z.itemSize === 4 ? i.w : 1) } } d = { count: u, texture: C, size: new Q(x, w) }, n.set(o, d), o.addEventListener("dispose", b) } if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(r, "morphTexture", a.morphTexture, t); else { let f = 0; for (let _ = 0; _ < c.length; _++)f += c[_]; const g = o.morphTargetsRelative ? 1 : 1 - f; l.getUniforms().setValue(r, "morphTargetBaseInfluence", g), l.getUniforms().setValue(r, "morphTargetInfluences", c) } l.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", d.size) } return { update: s } } function Rp(r, e, t, n) { let i = new WeakMap; function s(l) { const c = n.render.frame, h = l.geometry, u = e.get(l, h); if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) { const d = l.skeleton; i.get(d) !== c && (d.update(), i.set(d, c)) } return u } function a() { i = new WeakMap } function o(l) { const c = l.target; c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor) } return { update: s, dispose: a } } const Nl = new gt, Vo = new _l(1, 1), Fl = new rl, Bl = new gc, Ol = new Ys, Go = [], ko = [], Ho = new Float32Array(16), Wo = new Float32Array(9), Xo = new Float32Array(4); function yi(r, e, t) { const n = r[0]; if (n <= 0 || n > 0) return r; const i = e * t; let s = Go[i]; if (s === void 0 && (s = new Float32Array(i), Go[i] = s), e !== 0) { n.toArray(s, 0); for (let a = 1, o = 0; a !== e; ++a)o += t, r[a].toArray(s, o) } return s } function _t(r, e) { if (r.length !== e.length) return !1; for (let t = 0, n = r.length; t < n; t++)if (r[t] !== e[t]) return !1; return !0 } function xt(r, e) { for (let t = 0, n = e.length; t < n; t++)r[t] = e[t] } function Jr(r, e) { let t = ko[e]; t === void 0 && (t = new Int32Array(e), ko[e] = t); for (let n = 0; n !== e; ++n)t[n] = r.allocateTextureUnit(); return t } function Cp(r, e) { const t = this.cache; t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e) } function Ip(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (_t(t, e)) return; r.uniform2fv(this.addr, e), xt(t, e) } } function Pp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (_t(t, e)) return; r.uniform3fv(this.addr, e), xt(t, e) } } function Lp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (_t(t, e)) return; r.uniform4fv(this.addr, e), xt(t, e) } } function Dp(r, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (_t(t, e)) return; r.uniformMatrix2fv(this.addr, !1, e), xt(t, e) } else { if (_t(t, n)) return; Xo.set(n), r.uniformMatrix2fv(this.addr, !1, Xo), xt(t, n) } } function Up(r, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (_t(t, e)) return; r.uniformMatrix3fv(this.addr, !1, e), xt(t, e) } else { if (_t(t, n)) return; Wo.set(n), r.uniformMatrix3fv(this.addr, !1, Wo), xt(t, n) } } function Np(r, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (_t(t, e)) return; r.uniformMatrix4fv(this.addr, !1, e), xt(t, e) } else { if (_t(t, n)) return; Ho.set(n), r.uniformMatrix4fv(this.addr, !1, Ho), xt(t, n) } } function Fp(r, e) { const t = this.cache; t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e) } function Bp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (_t(t, e)) return; r.uniform2iv(this.addr, e), xt(t, e) } } function Op(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (_t(t, e)) return; r.uniform3iv(this.addr, e), xt(t, e) } } function zp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (_t(t, e)) return; r.uniform4iv(this.addr, e), xt(t, e) } } function Vp(r, e) { const t = this.cache; t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e) } function Gp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (_t(t, e)) return; r.uniform2uiv(this.addr, e), xt(t, e) } } function kp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (_t(t, e)) return; r.uniform3uiv(this.addr, e), xt(t, e) } } function Hp(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (_t(t, e)) return; r.uniform4uiv(this.addr, e), xt(t, e) } } function Wp(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i); let s; this.type === r.SAMPLER_2D_SHADOW ? (Vo.compareFunction = 515, s = Vo) : s = Nl, t.setTexture2D(e || s, i) } function Xp(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Bl, i) } function qp(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ol, i) } function Yp(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Fl, i) } function Jp(r) { switch (r) { case 5126: return Cp; case 35664: return Ip; case 35665: return Pp; case 35666: return Lp; case 35674: return Dp; case 35675: return Up; case 35676: return Np; case 5124: case 35670: return Fp; case 35667: case 35671: return Bp; case 35668: case 35672: return Op; case 35669: case 35673: return zp; case 5125: return Vp; case 36294: return Gp; case 36295: return kp; case 36296: return Hp; case 35678: case 36198: case 36298: case 36306: case 35682: return Wp; case 35679: case 36299: case 36307: return Xp; case 35680: case 36300: case 36308: case 36293: return qp; case 36289: case 36303: case 36311: case 36292: return Yp } } function $p(r, e) { r.uniform1fv(this.addr, e) } function Zp(r, e) { const t = yi(e, this.size, 2); r.uniform2fv(this.addr, t) } function Kp(r, e) { const t = yi(e, this.size, 3); r.uniform3fv(this.addr, t) } function Qp(r, e) { const t = yi(e, this.size, 4); r.uniform4fv(this.addr, t) } function jp(r, e) { const t = yi(e, this.size, 4); r.uniformMatrix2fv(this.addr, !1, t) } function em(r, e) { const t = yi(e, this.size, 9); r.uniformMatrix3fv(this.addr, !1, t) } function tm(r, e) { const t = yi(e, this.size, 16); r.uniformMatrix4fv(this.addr, !1, t) } function nm(r, e) { r.uniform1iv(this.addr, e) } function im(r, e) { r.uniform2iv(this.addr, e) } function rm(r, e) { r.uniform3iv(this.addr, e) } function sm(r, e) { r.uniform4iv(this.addr, e) } function am(r, e) { r.uniform1uiv(this.addr, e) } function om(r, e) { r.uniform2uiv(this.addr, e) } function lm(r, e) { r.uniform3uiv(this.addr, e) } function cm(r, e) { r.uniform4uiv(this.addr, e) } function hm(r, e, t) { const n = this.cache, i = e.length, s = Jr(t, i); _t(n, s) || (r.uniform1iv(this.addr, s), xt(n, s)); for (let a = 0; a !== i; ++a)t.setTexture2D(e[a] || Nl, s[a]) } function um(r, e, t) { const n = this.cache, i = e.length, s = Jr(t, i); _t(n, s) || (r.uniform1iv(this.addr, s), xt(n, s)); for (let a = 0; a !== i; ++a)t.setTexture3D(e[a] || Bl, s[a]) } function dm(r, e, t) { const n = this.cache, i = e.length, s = Jr(t, i); _t(n, s) || (r.uniform1iv(this.addr, s), xt(n, s)); for (let a = 0; a !== i; ++a)t.setTextureCube(e[a] || Ol, s[a]) } function fm(r, e, t) { const n = this.cache, i = e.length, s = Jr(t, i); _t(n, s) || (r.uniform1iv(this.addr, s), xt(n, s)); for (let a = 0; a !== i; ++a)t.setTexture2DArray(e[a] || Fl, s[a]) } function pm(r) { switch (r) { case 5126: return $p; case 35664: return Zp; case 35665: return Kp; case 35666: return Qp; case 35674: return jp; case 35675: return em; case 35676: return tm; case 5124: case 35670: return nm; case 35667: case 35671: return im; case 35668: case 35672: return rm; case 35669: case 35673: return sm; case 5125: return am; case 36294: return om; case 36295: return lm; case 36296: return cm; case 35678: case 36198: case 36298: case 36306: case 35682: return hm; case 35679: case 36299: case 36307: return um; case 35680: case 36300: case 36308: case 36293: return dm; case 36289: case 36303: case 36311: case 36292: return fm } } class mm { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Jp(t.type) } } class gm { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = pm(t.type) } } class _m { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { const i = this.seq; for (let s = 0, a = i.length; s !== a; ++s) { const o = i[s]; o.setValue(e, t[o.id], n) } } } const Bs = /(\w+)(\])?(\[|\.)?/g; function qo(r, e) { r.seq.push(e), r.map[e.id] = e } function xm(r, e, t) { const n = r.name, i = n.length; for (Bs.lastIndex = 0; ;) { const s = Bs.exec(n), a = Bs.lastIndex; let o = s[1]; const l = s[2] === "]", c = s[3]; if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) { qo(t, c === void 0 ? new mm(o, r, e) : new gm(o, r, e)); break } else { let u = t.map[o]; u === void 0 && (u = new _m(o), qo(t, u)), t = u } } } class Fr { constructor(e, t) { this.seq = [], this.map = {}; const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let i = 0; i < n; ++i) { const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name); xm(s, a, this) } } setValue(e, t, n, i) { const s = this.map[t]; s !== void 0 && s.setValue(e, n, i) } setOptional(e, t, n) { const i = t[n]; i !== void 0 && this.setValue(e, n, i) } static upload(e, t, n, i) { for (let s = 0, a = t.length; s !== a; ++s) { const o = t[s], l = n[o.id]; l.needsUpdate !== !1 && o.setValue(e, l.value, i) } } static seqWithValue(e, t) { const n = []; for (let i = 0, s = e.length; i !== s; ++i) { const a = e[i]; a.id in t && n.push(a) } return n } } function Yo(r, e, t) { const n = r.createShader(e); return r.shaderSource(n, t), r.compileShader(n), n } const vm = 37297; let ym = 0; function Mm(r, e) {
	const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length); for (let a = i; a < s; a++) { const o = a + 1; n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`) } return n.join(`
`)
} const Jo = new Ge; function Sm(r) { Ze._getMatrix(Jo, Ze.workingColorSpace, r); const e = `mat3( ${Jo.elements.map(t => t.toFixed(4))} )`; switch (Ze.getTransfer(r)) { case Br: return [e, "LinearTransferOETF"]; case rt: return [e, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space: ", r), [e, "LinearTransferOETF"] } } function $o(r, e, t) {
	const n = r.getShaderParameter(e, r.COMPILE_STATUS), s = (r.getShaderInfoLog(e) || "").trim(); if (n && s === "") return ""; const a = /ERROR: 0:(\d+)/.exec(s); if (a) {
		const o = parseInt(a[1]); return t.toUpperCase() + `

`+ s + `

`+ Mm(r.getShaderSource(e), o)
	} else return s
} function bm(r, e) {
	const t = Sm(e); return [`vec4 ${r}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
} function Em(r, e) { let t; switch (e) { case 1: t = "Linear"; break; case 2: t = "Reinhard"; break; case 3: t = "Cineon"; break; case 4: t = "ACESFilmic"; break; case 6: t = "AgX"; break; case 7: t = "Neutral"; break; case 5: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } const Nr = new R; function Tm() {
	Ze.getLuminanceCoefficients(Nr); const r = Nr.x.toFixed(4), e = Nr.y.toFixed(4), t = Nr.z.toFixed(4); return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
} function Am(r) {
	return [r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Fi).join(`
`)
} function wm(r) {
	const e = []; for (const t in r) { const n = r[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
} function Rm(r, e) { const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES); for (let i = 0; i < n; i++) { const s = r.getActiveAttrib(e, i), a = s.name; let o = 1; s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: r.getAttribLocation(e, a), locationSize: o } } return t } function Fi(r) { return r !== "" } function Zo(r, e) { const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function Ko(r, e) { return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const Cm = /^[ \t]*#include +<([\w\d./]+)>/gm; function Hs(r) { return r.replace(Cm, Pm) } const Im = new Map; function Pm(r, e) { let t = Xe[e]; if (t === void 0) { const n = Im.get(e); if (n !== void 0) t = Xe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n); else throw new Error("Can not resolve #include <" + e + ">") } return Hs(t) } const Lm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function Qo(r) { return r.replace(Lm, Dm) } function Dm(r, e, t, n) { let i = ""; for (let s = parseInt(e); s < parseInt(t); s++)i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return i } function jo(r) {
	let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`; return r.precision === "highp" ? e += `
#define HIGH_PRECISION`: r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function Um(r) { let e = "SHADOWMAP_TYPE_BASIC"; return r.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e } function Nm(r) { let e = "ENVMAP_TYPE_CUBE"; if (r.envMap) switch (r.envMapMode) { case 301: case 302: e = "ENVMAP_TYPE_CUBE"; break; case 306: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function Fm(r) { let e = "ENVMAP_MODE_REFLECTION"; return r.envMap && r.envMapMode === 302 && (e = "ENVMAP_MODE_REFRACTION"), e } function Bm(r) { let e = "ENVMAP_BLENDING_NONE"; if (r.envMap) switch (r.combine) { case 0: e = "ENVMAP_BLENDING_MULTIPLY"; break; case 1: e = "ENVMAP_BLENDING_MIX"; break; case 2: e = "ENVMAP_BLENDING_ADD"; break }return e } function Om(r) { const e = r.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t } } function zm(r, e, t, n) {
	const i = r.getContext(), s = t.defines; let a = t.vertexShader, o = t.fragmentShader; const l = Um(t), c = Nm(t), h = Fm(t), u = Bm(t), d = Om(t), f = Am(t), g = wm(s), _ = i.createProgram(); let m, p, M = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Fi).join(`
`), m.length > 0 && (m += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Fi).join(`
`), p.length > 0 && (p += `
`)) : (m = [jo(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Fi).join(`
`), p = [jo(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? Xe.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? Em("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Xe.colorspace_pars_fragment, bm("linearToOutputTexel", t.outputColorSpace), Tm(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Fi).join(`
`)), a = Hs(a), a = Zo(a, t), a = Ko(a, t), o = Hs(o), o = Zo(o, t), o = Ko(o, t), a = Qo(a), o = Qo(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, m = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ m, p = ["#define varying in", t.glslVersion === Ia ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ia ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ p); const v = M + m + a, x = M + p + o, w = Yo(i, i.VERTEX_SHADER, v), T = Yo(i, i.FRAGMENT_SHADER, x); i.attachShader(_, w), i.attachShader(_, T), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_); function C(L) {
		if (r.debug.checkShaderErrors) {
			const F = i.getProgramInfoLog(_) || "", z = i.getShaderInfoLog(w) || "", H = i.getShaderInfoLog(T) || "", q = F.trim(), W = z.trim(), ne = H.trim(); let k = !0, ue = !0; if (i.getProgramParameter(_, i.LINK_STATUS) === !1) if (k = !1, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, _, w, T); else {
				const _e = $o(i, w, "vertex"), ye = $o(i, T, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: `+ L.name + `
Material Type: `+ L.type + `

Program Info Log: `+ q + `
`+ _e + `
`+ ye)
			} else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (W === "" || ne === "") && (ue = !1); ue && (L.diagnostics = { runnable: k, programLog: q, vertexShader: { log: W, prefix: m }, fragmentShader: { log: ne, prefix: p } })
		} i.deleteShader(w), i.deleteShader(T), P = new Fr(i, _), b = Rm(i, _)
	} let P; this.getUniforms = function () { return P === void 0 && C(this), P }; let b; this.getAttributes = function () { return b === void 0 && C(this), b }; let S = t.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return S === !1 && (S = i.getProgramParameter(_, vm)), S }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0 }, this.type = t.shaderType, this.name = t.shaderName, this.id = ym++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = w, this.fragmentShader = T, this
} let Vm = 0; class Gm { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e); return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this } remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; let n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(e) { const t = this.shaderCache; let n = t.get(e); return n === void 0 && (n = new km(e), t.set(e, n)), n } } class km { constructor(e) { this.id = Vm++, this.code = e, this.usedTimes = 0 } } function Hm(r, e, t, n, i, s, a) { const o = new Xs, l = new Gm, c = new Set, h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures; let f = i.precision; const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function _(b) { return c.add(b), b === 0 ? "uv" : `uv${b}` } function m(b, S, L, F, z) { const H = F.fog, q = z.geometry, W = b.isMeshStandardMaterial ? F.environment : null, ne = (b.isMeshStandardMaterial ? t : e).get(b.envMap || W), k = ne && ne.mapping === 306 ? ne.image.height : null, ue = g[b.type]; b.precision !== null && (f = i.getMaxPrecision(b.precision), f !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", f, "instead.")); const _e = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, ye = _e !== void 0 ? _e.length : 0; let Ve = 0; q.morphAttributes.position !== void 0 && (Ve = 1), q.morphAttributes.normal !== void 0 && (Ve = 2), q.morphAttributes.color !== void 0 && (Ve = 3); let Je, et, $e, Y; if (ue) { const je = jt[ue]; Je = je.vertexShader, et = je.fragmentShader } else Je = b.vertexShader, et = b.fragmentShader, l.update(b), $e = l.getVertexShaderID(b), Y = l.getFragmentShaderID(b); const te = r.getRenderTarget(), ve = r.state.buffers.depth.getReversed(), Ce = z.isInstancedMesh === !0, be = z.isBatchedMesh === !0, qe = !!b.map, ot = !!b.matcap, I = !!ne, ee = !!b.aoMap, Z = !!b.lightMap, $ = !!b.bumpMap, J = !!b.normalMap, ce = !!b.displacementMap, ie = !!b.emissiveMap, he = !!b.metalnessMap, Oe = !!b.roughnessMap, Be = b.anisotropy > 0, A = b.clearcoat > 0, y = b.dispersion > 0, B = b.iridescence > 0, G = b.sheen > 0, j = b.transmission > 0, X = Be && !!b.anisotropyMap, we = A && !!b.clearcoatMap, le = A && !!b.clearcoatNormalMap, Ee = A && !!b.clearcoatRoughnessMap, Te = B && !!b.iridescenceMap, re = B && !!b.iridescenceThicknessMap, ge = G && !!b.sheenColorMap, Ue = G && !!b.sheenRoughnessMap, Re = !!b.specularMap, pe = !!b.specularColorMap, He = !!b.specularIntensityMap, D = j && !!b.transmissionMap, oe = j && !!b.thicknessMap, de = !!b.gradientMap, Me = !!b.alphaMap, se = b.alphaTest > 0, K = !!b.alphaHash, Ae = !!b.extensions; let ze = 0; b.toneMapped && (te === null || te.isXRRenderTarget === !0) && (ze = r.toneMapping); const lt = { shaderID: ue, shaderType: b.type, shaderName: b.name, vertexShader: Je, fragmentShader: et, defines: b.defines, customVertexShaderID: $e, customFragmentShaderID: Y, isRawShaderMaterial: b.isRawShaderMaterial === !0, glslVersion: b.glslVersion, precision: f, batching: be, batchingColor: be && z._colorsTexture !== null, instancing: Ce, instancingColor: Ce && z.instanceColor !== null, instancingMorph: Ce && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: te === null ? r.outputColorSpace : te.isXRRenderTarget === !0 ? te.texture.colorSpace : hi, alphaToCoverage: !!b.alphaToCoverage, map: qe, matcap: ot, envMap: I, envMapMode: I && ne.mapping, envMapCubeUVHeight: k, aoMap: ee, lightMap: Z, bumpMap: $, normalMap: J, displacementMap: d && ce, emissiveMap: ie, normalMapObjectSpace: J && b.normalMapType === 1, normalMapTangentSpace: J && b.normalMapType === 0, metalnessMap: he, roughnessMap: Oe, anisotropy: Be, anisotropyMap: X, clearcoat: A, clearcoatMap: we, clearcoatNormalMap: le, clearcoatRoughnessMap: Ee, dispersion: y, iridescence: B, iridescenceMap: Te, iridescenceThicknessMap: re, sheen: G, sheenColorMap: ge, sheenRoughnessMap: Ue, specularMap: Re, specularColorMap: pe, specularIntensityMap: He, transmission: j, transmissionMap: D, thicknessMap: oe, gradientMap: de, opaque: b.transparent === !1 && b.blending === 1 && b.alphaToCoverage === !1, alphaMap: Me, alphaTest: se, alphaHash: K, combine: b.combine, mapUv: qe && _(b.map.channel), aoMapUv: ee && _(b.aoMap.channel), lightMapUv: Z && _(b.lightMap.channel), bumpMapUv: $ && _(b.bumpMap.channel), normalMapUv: J && _(b.normalMap.channel), displacementMapUv: ce && _(b.displacementMap.channel), emissiveMapUv: ie && _(b.emissiveMap.channel), metalnessMapUv: he && _(b.metalnessMap.channel), roughnessMapUv: Oe && _(b.roughnessMap.channel), anisotropyMapUv: X && _(b.anisotropyMap.channel), clearcoatMapUv: we && _(b.clearcoatMap.channel), clearcoatNormalMapUv: le && _(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Ee && _(b.clearcoatRoughnessMap.channel), iridescenceMapUv: Te && _(b.iridescenceMap.channel), iridescenceThicknessMapUv: re && _(b.iridescenceThicknessMap.channel), sheenColorMapUv: ge && _(b.sheenColorMap.channel), sheenRoughnessMapUv: Ue && _(b.sheenRoughnessMap.channel), specularMapUv: Re && _(b.specularMap.channel), specularColorMapUv: pe && _(b.specularColorMap.channel), specularIntensityMapUv: He && _(b.specularIntensityMap.channel), transmissionMapUv: D && _(b.transmissionMap.channel), thicknessMapUv: oe && _(b.thicknessMap.channel), alphaMapUv: Me && _(b.alphaMap.channel), vertexTangents: !!q.attributes.tangent && (J || Be), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4, pointsUvs: z.isPoints === !0 && !!q.attributes.uv && (qe || Me), fog: !!H, useFog: b.fog === !0, fogExp2: !!H && H.isFogExp2, flatShading: b.flatShading === !0 && b.wireframe === !1, sizeAttenuation: b.sizeAttenuation === !0, logarithmicDepthBuffer: u, reversedDepthBuffer: ve, skinning: z.isSkinnedMesh === !0, morphTargets: q.morphAttributes.position !== void 0, morphNormals: q.morphAttributes.normal !== void 0, morphColors: q.morphAttributes.color !== void 0, morphTargetsCount: ye, morphTextureStride: Ve, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: b.dithering, shadowMapEnabled: r.shadowMap.enabled && L.length > 0, shadowMapType: r.shadowMap.type, toneMapping: ze, decodeVideoTexture: qe && b.map.isVideoTexture === !0 && Ze.getTransfer(b.map.colorSpace) === rt, decodeVideoTextureEmissive: ie && b.emissiveMap.isVideoTexture === !0 && Ze.getTransfer(b.emissiveMap.colorSpace) === rt, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === 2, flipSided: b.side === 1, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: Ae && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Ae && b.extensions.multiDraw === !0 || be) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() }; return lt.vertexUv1s = c.has(1), lt.vertexUv2s = c.has(2), lt.vertexUv3s = c.has(3), c.clear(), lt } function p(b) { const S = []; if (b.shaderID ? S.push(b.shaderID) : (S.push(b.customVertexShaderID), S.push(b.customFragmentShaderID)), b.defines !== void 0) for (const L in b.defines) S.push(L), S.push(b.defines[L]); return b.isRawShaderMaterial === !1 && (M(S, b), v(S, b), S.push(r.outputColorSpace)), S.push(b.customProgramCacheKey), S.join() } function M(b, S) { b.push(S.precision), b.push(S.outputColorSpace), b.push(S.envMapMode), b.push(S.envMapCubeUVHeight), b.push(S.mapUv), b.push(S.alphaMapUv), b.push(S.lightMapUv), b.push(S.aoMapUv), b.push(S.bumpMapUv), b.push(S.normalMapUv), b.push(S.displacementMapUv), b.push(S.emissiveMapUv), b.push(S.metalnessMapUv), b.push(S.roughnessMapUv), b.push(S.anisotropyMapUv), b.push(S.clearcoatMapUv), b.push(S.clearcoatNormalMapUv), b.push(S.clearcoatRoughnessMapUv), b.push(S.iridescenceMapUv), b.push(S.iridescenceThicknessMapUv), b.push(S.sheenColorMapUv), b.push(S.sheenRoughnessMapUv), b.push(S.specularMapUv), b.push(S.specularColorMapUv), b.push(S.specularIntensityMapUv), b.push(S.transmissionMapUv), b.push(S.thicknessMapUv), b.push(S.combine), b.push(S.fogExp2), b.push(S.sizeAttenuation), b.push(S.morphTargetsCount), b.push(S.morphAttributeCount), b.push(S.numDirLights), b.push(S.numPointLights), b.push(S.numSpotLights), b.push(S.numSpotLightMaps), b.push(S.numHemiLights), b.push(S.numRectAreaLights), b.push(S.numDirLightShadows), b.push(S.numPointLightShadows), b.push(S.numSpotLightShadows), b.push(S.numSpotLightShadowsWithMaps), b.push(S.numLightProbes), b.push(S.shadowMapType), b.push(S.toneMapping), b.push(S.numClippingPlanes), b.push(S.numClipIntersection), b.push(S.depthPacking) } function v(b, S) { o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), S.gradientMap && o.enable(22), b.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reversedDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), b.push(o.mask) } function x(b) { const S = g[b.type]; let L; if (S) { const F = jt[S]; L = Lc.clone(F.uniforms) } else L = b.uniforms; return L } function w(b, S) { let L; for (let F = 0, z = h.length; F < z; F++) { const H = h[F]; if (H.cacheKey === S) { L = H, ++L.usedTimes; break } } return L === void 0 && (L = new zm(r, S, b, s), h.push(L)), L } function T(b) { if (--b.usedTimes === 0) { const S = h.indexOf(b); h[S] = h[h.length - 1], h.pop(), b.destroy() } } function C(b) { l.remove(b) } function P() { l.dispose() } return { getParameters: m, getProgramCacheKey: p, getUniforms: x, acquireProgram: w, releaseProgram: T, releaseShaderCache: C, programs: h, dispose: P } } function Wm() { let r = new WeakMap; function e(a) { return r.has(a) } function t(a) { let o = r.get(a); return o === void 0 && (o = {}, r.set(a, o)), o } function n(a) { r.delete(a) } function i(a, o, l) { r.get(a)[o] = l } function s() { r = new WeakMap } return { has: e, get: t, remove: n, update: i, dispose: s } } function Xm(r, e) { return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id } function el(r, e) { return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id } function tl() { const r = []; let e = 0; const t = [], n = [], i = []; function s() { e = 0, t.length = 0, n.length = 0, i.length = 0 } function a(u, d, f, g, _, m) { let p = r[e]; return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = m), e++, p } function o(u, d, f, g, _, m) { const p = a(u, d, f, g, _, m); f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p) } function l(u, d, f, g, _, m) { const p = a(u, d, f, g, _, m); f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p) } function c(u, d) { t.length > 1 && t.sort(u || Xm), n.length > 1 && n.sort(d || el), i.length > 1 && i.sort(d || el) } function h() { for (let u = e, d = r.length; u < d; u++) { const f = r[u]; if (f.id === null) break; f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null } } return { opaque: t, transmissive: n, transparent: i, init: s, push: o, unshift: l, finish: h, sort: c } } function qm() { let r = new WeakMap; function e(n, i) { const s = r.get(n); let a; return s === void 0 ? (a = new tl, r.set(n, [a])) : i >= s.length ? (a = new tl, s.push(a)) : a = s[i], a } function t() { r = new WeakMap } return { get: e, dispose: t } } function Ym() { const r = {}; return { get: function (e) { if (r[e.id] !== void 0) return r[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new R, color: new Pe }; break; case "SpotLight": t = { position: new R, direction: new R, color: new Pe, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new R, color: new Pe, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new R, skyColor: new Pe, groundColor: new Pe }; break; case "RectAreaLight": t = { color: new Pe, position: new R, halfWidth: new R, halfHeight: new R }; break }return r[e.id] = t, t } } } function Jm() { const r = {}; return { get: function (e) { if (r[e.id] !== void 0) return r[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q }; break; case "SpotLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q }; break; case "PointLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Q, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return r[e.id] = t, t } } } let $m = 0; function Zm(r, e) { return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0) } function Km(r) { const e = new Ym, t = Jm(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let c = 0; c < 9; c++)n.probe.push(new R); const i = new R, s = new ke, a = new ke; function o(c) { let h = 0, u = 0, d = 0; for (let b = 0; b < 9; b++)n.probe[b].set(0, 0, 0); let f = 0, g = 0, _ = 0, m = 0, p = 0, M = 0, v = 0, x = 0, w = 0, T = 0, C = 0; c.sort(Zm); for (let b = 0, S = c.length; b < S; b++) { const L = c[b], F = L.color, z = L.intensity, H = L.distance, q = L.shadow && L.shadow.map ? L.shadow.map.texture : null; if (L.isAmbientLight) h += F.r * z, u += F.g * z, d += F.b * z; else if (L.isLightProbe) { for (let W = 0; W < 9; W++)n.probe[W].addScaledVector(L.sh.coefficients[W], z); C++ } else if (L.isDirectionalLight) { const W = e.get(L); if (W.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) { const ne = L.shadow, k = t.get(L); k.shadowIntensity = ne.intensity, k.shadowBias = ne.bias, k.shadowNormalBias = ne.normalBias, k.shadowRadius = ne.radius, k.shadowMapSize = ne.mapSize, n.directionalShadow[f] = k, n.directionalShadowMap[f] = q, n.directionalShadowMatrix[f] = L.shadow.matrix, M++ } n.directional[f] = W, f++ } else if (L.isSpotLight) { const W = e.get(L); W.position.setFromMatrixPosition(L.matrixWorld), W.color.copy(F).multiplyScalar(z), W.distance = H, W.coneCos = Math.cos(L.angle), W.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), W.decay = L.decay, n.spot[_] = W; const ne = L.shadow; if (L.map && (n.spotLightMap[w] = L.map, w++, ne.updateMatrices(L), L.castShadow && T++), n.spotLightMatrix[_] = ne.matrix, L.castShadow) { const k = t.get(L); k.shadowIntensity = ne.intensity, k.shadowBias = ne.bias, k.shadowNormalBias = ne.normalBias, k.shadowRadius = ne.radius, k.shadowMapSize = ne.mapSize, n.spotShadow[_] = k, n.spotShadowMap[_] = q, x++ } _++ } else if (L.isRectAreaLight) { const W = e.get(L); W.color.copy(F).multiplyScalar(z), W.halfWidth.set(L.width * .5, 0, 0), W.halfHeight.set(0, L.height * .5, 0), n.rectArea[m] = W, m++ } else if (L.isPointLight) { const W = e.get(L); if (W.color.copy(L.color).multiplyScalar(L.intensity), W.distance = L.distance, W.decay = L.decay, L.castShadow) { const ne = L.shadow, k = t.get(L); k.shadowIntensity = ne.intensity, k.shadowBias = ne.bias, k.shadowNormalBias = ne.normalBias, k.shadowRadius = ne.radius, k.shadowMapSize = ne.mapSize, k.shadowCameraNear = ne.camera.near, k.shadowCameraFar = ne.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = q, n.pointShadowMatrix[g] = L.shadow.matrix, v++ } n.point[g] = W, g++ } else if (L.isHemisphereLight) { const W = e.get(L); W.skyColor.copy(L.color).multiplyScalar(z), W.groundColor.copy(L.groundColor).multiplyScalar(z), n.hemi[p] = W, p++ } } m > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = fe.LTC_FLOAT_1, n.rectAreaLTC2 = fe.LTC_FLOAT_2) : (n.rectAreaLTC1 = fe.LTC_HALF_1, n.rectAreaLTC2 = fe.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d; const P = n.hash; (P.directionalLength !== f || P.pointLength !== g || P.spotLength !== _ || P.rectAreaLength !== m || P.hemiLength !== p || P.numDirectionalShadows !== M || P.numPointShadows !== v || P.numSpotShadows !== x || P.numSpotMaps !== w || P.numLightProbes !== C) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = x + w - T, n.spotLightMap.length = w, n.numSpotLightShadowsWithMaps = T, n.numLightProbes = C, P.directionalLength = f, P.pointLength = g, P.spotLength = _, P.rectAreaLength = m, P.hemiLength = p, P.numDirectionalShadows = M, P.numPointShadows = v, P.numSpotShadows = x, P.numSpotMaps = w, P.numLightProbes = C, n.version = $m++) } function l(c, h) { let u = 0, d = 0, f = 0, g = 0, _ = 0; const m = h.matrixWorldInverse; for (let p = 0, M = c.length; p < M; p++) { const v = c[p]; if (v.isDirectionalLight) { const x = n.directional[u]; x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), u++ } else if (v.isSpotLight) { const x = n.spot[f]; x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(m), f++ } else if (v.isRectAreaLight) { const x = n.rectArea[g]; x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), a.identity(), s.copy(v.matrixWorld), s.premultiply(m), a.extractRotation(s), x.halfWidth.set(v.width * .5, 0, 0), x.halfHeight.set(0, v.height * .5, 0), x.halfWidth.applyMatrix4(a), x.halfHeight.applyMatrix4(a), g++ } else if (v.isPointLight) { const x = n.point[d]; x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(m), d++ } else if (v.isHemisphereLight) { const x = n.hemi[_]; x.direction.setFromMatrixPosition(v.matrixWorld), x.direction.transformDirection(m), _++ } } } return { setup: o, setupView: l, state: n } } function nl(r) { const e = new Km(r), t = [], n = []; function i(h) { c.camera = h, t.length = 0, n.length = 0 } function s(h) { t.push(h) } function a(h) { n.push(h) } function o() { e.setup(t) } function l(h) { e.setupView(t, h) } const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} }; return { init: i, state: c, setupLights: o, setupLightsView: l, pushLight: s, pushShadow: a } } function Qm(r) { let e = new WeakMap; function t(i, s = 0) { const a = e.get(i); let o; return a === void 0 ? (o = new nl(r), e.set(i, [o])) : s >= a.length ? (o = new nl(r), a.push(o)) : o = a[s], o } function n() { e = new WeakMap } return { get: t, dispose: n } } const jm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, eg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function tg(r, e, t) { let n = new Yi; const i = new Q, s = new Q, a = new Qe, o = new Cl({ depthPacking: 3201 }), l = new Il, c = {}, h = t.maxTextureSize, u = { 0: 1, 1: 0, 2: 2 }, d = new en({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Q }, radius: { value: 4 } }, vertexShader: jm, fragmentShader: eg }), f = d.clone(); f.defines.HORIZONTAL_PASS = 1; const g = new nt; g.setAttribute("position", new yt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const _ = new Rt(g, d), m = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1; let p = this.type; this.render = function (T, C, P) { if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || T.length === 0) return; const b = r.getRenderTarget(), S = r.getActiveCubeFace(), L = r.getActiveMipmapLevel(), F = r.state; F.setBlending(0), F.buffers.depth.getReversed() === !0 ? F.buffers.color.setClear(0, 0, 0, 0) : F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1); const z = p !== 3 && this.type === 3, H = p === 3 && this.type !== 3; for (let q = 0, W = T.length; q < W; q++) { const ne = T[q], k = ne.shadow; if (k === void 0) { console.warn("THREE.WebGLShadowMap:", ne, "has no shadow."); continue } if (k.autoUpdate === !1 && k.needsUpdate === !1) continue; i.copy(k.mapSize); const ue = k.getFrameExtents(); if (i.multiply(ue), s.copy(k.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / ue.x), i.x = s.x * ue.x, k.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / ue.y), i.y = s.y * ue.y, k.mapSize.y = s.y)), k.map === null || z === !0 || H === !0) { const ye = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {}; k.map !== null && k.map.dispose(), k.map = new Fn(i.x, i.y, ye), k.map.texture.name = ne.name + ".shadowMap", k.camera.updateProjectionMatrix() } r.setRenderTarget(k.map), r.clear(); const _e = k.getViewportCount(); for (let ye = 0; ye < _e; ye++) { const Ve = k.getViewport(ye); a.set(s.x * Ve.x, s.y * Ve.y, s.x * Ve.z, s.y * Ve.w), F.viewport(a), k.updateMatrices(ne, ye), n = k.getFrustum(), x(C, P, k.camera, ne, this.type) } k.isPointLightShadow !== !0 && this.type === 3 && M(k, P), k.needsUpdate = !1 } p = this.type, m.needsUpdate = !1, r.setRenderTarget(b, S, L) }; function M(T, C) { const P = e.update(_); d.defines.VSM_SAMPLES !== T.blurSamples && (d.defines.VSM_SAMPLES = T.blurSamples, f.defines.VSM_SAMPLES = T.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), T.mapPass === null && (T.mapPass = new Fn(i.x, i.y)), d.uniforms.shadow_pass.value = T.map.texture, d.uniforms.resolution.value = T.mapSize, d.uniforms.radius.value = T.radius, r.setRenderTarget(T.mapPass), r.clear(), r.renderBufferDirect(C, null, P, d, _, null), f.uniforms.shadow_pass.value = T.mapPass.texture, f.uniforms.resolution.value = T.mapSize, f.uniforms.radius.value = T.radius, r.setRenderTarget(T.map), r.clear(), r.renderBufferDirect(C, null, P, f, _, null) } function v(T, C, P, b) { let S = null; const L = P.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial; if (L !== void 0) S = L; else if (S = P.isPointLight === !0 ? l : o, r.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0 || C.alphaToCoverage === !0) { const F = S.uuid, z = C.uuid; let H = c[F]; H === void 0 && (H = {}, c[F] = H); let q = H[z]; q === void 0 && (q = S.clone(), H[z] = q, C.addEventListener("dispose", w)), S = q } if (S.visible = C.visible, S.wireframe = C.wireframe, b === 3 ? S.side = C.shadowSide !== null ? C.shadowSide : C.side : S.side = C.shadowSide !== null ? C.shadowSide : u[C.side], S.alphaMap = C.alphaMap, S.alphaTest = C.alphaToCoverage === !0 ? .5 : C.alphaTest, S.map = C.map, S.clipShadows = C.clipShadows, S.clippingPlanes = C.clippingPlanes, S.clipIntersection = C.clipIntersection, S.displacementMap = C.displacementMap, S.displacementScale = C.displacementScale, S.displacementBias = C.displacementBias, S.wireframeLinewidth = C.wireframeLinewidth, S.linewidth = C.linewidth, P.isPointLight === !0 && S.isMeshDistanceMaterial === !0) { const F = r.properties.get(S); F.light = P } return S } function x(T, C, P, b, S) { if (T.visible === !1) return; if (T.layers.test(C.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && S === 3) && (!T.frustumCulled || n.intersectsObject(T))) { T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, T.matrixWorld); const z = e.update(T), H = T.material; if (Array.isArray(H)) { const q = z.groups; for (let W = 0, ne = q.length; W < ne; W++) { const k = q[W], ue = H[k.materialIndex]; if (ue && ue.visible) { const _e = v(T, ue, b, S); T.onBeforeShadow(r, T, C, P, z, _e, k), r.renderBufferDirect(P, null, z, _e, T, k), T.onAfterShadow(r, T, C, P, z, _e, k) } } } else if (H.visible) { const q = v(T, H, b, S); T.onBeforeShadow(r, T, C, P, z, q, null), r.renderBufferDirect(P, null, z, q, T, null), T.onAfterShadow(r, T, C, P, z, q, null) } } const F = T.children; for (let z = 0, H = F.length; z < H; z++)x(F[z], C, P, b, S) } function w(T) { T.target.removeEventListener("dispose", w); for (const P in c) { const b = c[P], S = T.target.uuid; S in b && (b[S].dispose(), delete b[S]) } } } const ng = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 }; function ig(r, e) { function t() { let D = !1; const oe = new Qe; let de = null; const Me = new Qe(0, 0, 0, 0); return { setMask: function (se) { de !== se && !D && (r.colorMask(se, se, se, se), de = se) }, setLocked: function (se) { D = se }, setClear: function (se, K, Ae, ze, lt) { lt === !0 && (se *= ze, K *= ze, Ae *= ze), oe.set(se, K, Ae, ze), Me.equals(oe) === !1 && (r.clearColor(se, K, Ae, ze), Me.copy(oe)) }, reset: function () { D = !1, de = null, Me.set(-1, 0, 0, 0) } } } function n() { let D = !1, oe = !1, de = null, Me = null, se = null; return { setReversed: function (K) { if (oe !== K) { const Ae = e.get("EXT_clip_control"); K ? Ae.clipControlEXT(Ae.LOWER_LEFT_EXT, Ae.ZERO_TO_ONE_EXT) : Ae.clipControlEXT(Ae.LOWER_LEFT_EXT, Ae.NEGATIVE_ONE_TO_ONE_EXT), oe = K; const ze = se; se = null, this.setClear(ze) } }, getReversed: function () { return oe }, setTest: function (K) { K ? te(r.DEPTH_TEST) : ve(r.DEPTH_TEST) }, setMask: function (K) { de !== K && !D && (r.depthMask(K), de = K) }, setFunc: function (K) { if (oe && (K = ng[K]), Me !== K) { switch (K) { case 0: r.depthFunc(r.NEVER); break; case 1: r.depthFunc(r.ALWAYS); break; case 2: r.depthFunc(r.LESS); break; case 3: r.depthFunc(r.LEQUAL); break; case 4: r.depthFunc(r.EQUAL); break; case 5: r.depthFunc(r.GEQUAL); break; case 6: r.depthFunc(r.GREATER); break; case 7: r.depthFunc(r.NOTEQUAL); break; default: r.depthFunc(r.LEQUAL) }Me = K } }, setLocked: function (K) { D = K }, setClear: function (K) { se !== K && (oe && (K = 1 - K), r.clearDepth(K), se = K) }, reset: function () { D = !1, de = null, Me = null, se = null, oe = !1 } } } function i() { let D = !1, oe = null, de = null, Me = null, se = null, K = null, Ae = null, ze = null, lt = null; return { setTest: function (je) { D || (je ? te(r.STENCIL_TEST) : ve(r.STENCIL_TEST)) }, setMask: function (je) { oe !== je && !D && (r.stencilMask(je), oe = je) }, setFunc: function (je, nn, Zt) { (de !== je || Me !== nn || se !== Zt) && (r.stencilFunc(je, nn, Zt), de = je, Me = nn, se = Zt) }, setOp: function (je, nn, Zt) { (K !== je || Ae !== nn || ze !== Zt) && (r.stencilOp(je, nn, Zt), K = je, Ae = nn, ze = Zt) }, setLocked: function (je) { D = je }, setClear: function (je) { lt !== je && (r.clearStencil(je), lt = je) }, reset: function () { D = !1, oe = null, de = null, Me = null, se = null, K = null, Ae = null, ze = null, lt = null } } } const s = new t, a = new n, o = new i, l = new WeakMap, c = new WeakMap; let h = {}, u = {}, d = new WeakMap, f = [], g = null, _ = !1, m = null, p = null, M = null, v = null, x = null, w = null, T = null, C = new Pe(0, 0, 0), P = 0, b = !1, S = null, L = null, F = null, z = null, H = null; const q = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let W = !1, ne = 0; const k = r.getParameter(r.VERSION); k.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(k)[1]), W = ne >= 1) : k.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), W = ne >= 2); let ue = null, _e = {}; const ye = r.getParameter(r.SCISSOR_BOX), Ve = r.getParameter(r.VIEWPORT), Je = new Qe().fromArray(ye), et = new Qe().fromArray(Ve); function $e(D, oe, de, Me) { const se = new Uint8Array(4), K = r.createTexture(); r.bindTexture(D, K), r.texParameteri(D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(D, r.TEXTURE_MAG_FILTER, r.NEAREST); for (let Ae = 0; Ae < de; Ae++)D === r.TEXTURE_3D || D === r.TEXTURE_2D_ARRAY ? r.texImage3D(oe, 0, r.RGBA, 1, 1, Me, 0, r.RGBA, r.UNSIGNED_BYTE, se) : r.texImage2D(oe + Ae, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, se); return K } const Y = {}; Y[r.TEXTURE_2D] = $e(r.TEXTURE_2D, r.TEXTURE_2D, 1), Y[r.TEXTURE_CUBE_MAP] = $e(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[r.TEXTURE_2D_ARRAY] = $e(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Y[r.TEXTURE_3D] = $e(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), te(r.DEPTH_TEST), a.setFunc(3), $(!1), J(1), te(r.CULL_FACE), ee(0); function te(D) { h[D] !== !0 && (r.enable(D), h[D] = !0) } function ve(D) { h[D] !== !1 && (r.disable(D), h[D] = !1) } function Ce(D, oe) { return u[D] !== oe ? (r.bindFramebuffer(D, oe), u[D] = oe, D === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = oe), D === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = oe), !0) : !1 } function be(D, oe) { let de = f, Me = !1; if (D) { de = d.get(oe), de === void 0 && (de = [], d.set(oe, de)); const se = D.textures; if (de.length !== se.length || de[0] !== r.COLOR_ATTACHMENT0) { for (let K = 0, Ae = se.length; K < Ae; K++)de[K] = r.COLOR_ATTACHMENT0 + K; de.length = se.length, Me = !0 } } else de[0] !== r.BACK && (de[0] = r.BACK, Me = !0); Me && r.drawBuffers(de) } function qe(D) { return g !== D ? (r.useProgram(D), g = D, !0) : !1 } const ot = { 100: r.FUNC_ADD, 101: r.FUNC_SUBTRACT, 102: r.FUNC_REVERSE_SUBTRACT }; ot[103] = r.MIN, ot[104] = r.MAX; const I = { 200: r.ZERO, 201: r.ONE, 202: r.SRC_COLOR, 204: r.SRC_ALPHA, 210: r.SRC_ALPHA_SATURATE, 208: r.DST_COLOR, 206: r.DST_ALPHA, 203: r.ONE_MINUS_SRC_COLOR, 205: r.ONE_MINUS_SRC_ALPHA, 209: r.ONE_MINUS_DST_COLOR, 207: r.ONE_MINUS_DST_ALPHA, 211: r.CONSTANT_COLOR, 212: r.ONE_MINUS_CONSTANT_COLOR, 213: r.CONSTANT_ALPHA, 214: r.ONE_MINUS_CONSTANT_ALPHA }; function ee(D, oe, de, Me, se, K, Ae, ze, lt, je) { if (D === 0) { _ === !0 && (ve(r.BLEND), _ = !1); return } if (_ === !1 && (te(r.BLEND), _ = !0), D !== 5) { if (D !== m || je !== b) { if ((p !== 100 || x !== 100) && (r.blendEquation(r.FUNC_ADD), p = 100, x = 100), je) switch (D) { case 1: r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA); break; case 2: r.blendFunc(r.ONE, r.ONE); break; case 3: r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE); break; case 4: r.blendFuncSeparate(r.DST_COLOR, r.ONE_MINUS_SRC_ALPHA, r.ZERO, r.ONE); break; default: console.error("THREE.WebGLState: Invalid blending: ", D); break } else switch (D) { case 1: r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA); break; case 2: r.blendFuncSeparate(r.SRC_ALPHA, r.ONE, r.ONE, r.ONE); break; case 3: console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"); break; case 4: console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"); break; default: console.error("THREE.WebGLState: Invalid blending: ", D); break }M = null, v = null, w = null, T = null, C.set(0, 0, 0), P = 0, m = D, b = je } return } se = se || oe, K = K || de, Ae = Ae || Me, (oe !== p || se !== x) && (r.blendEquationSeparate(ot[oe], ot[se]), p = oe, x = se), (de !== M || Me !== v || K !== w || Ae !== T) && (r.blendFuncSeparate(I[de], I[Me], I[K], I[Ae]), M = de, v = Me, w = K, T = Ae), (ze.equals(C) === !1 || lt !== P) && (r.blendColor(ze.r, ze.g, ze.b, lt), C.copy(ze), P = lt), m = D, b = !1 } function Z(D, oe) { D.side === 2 ? ve(r.CULL_FACE) : te(r.CULL_FACE); let de = D.side === 1; oe && (de = !de), $(de), D.blending === 1 && D.transparent === !1 ? ee(0) : ee(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), s.setMask(D.colorWrite); const Me = D.stencilWrite; o.setTest(Me), Me && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ie(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? te(r.SAMPLE_ALPHA_TO_COVERAGE) : ve(r.SAMPLE_ALPHA_TO_COVERAGE) } function $(D) { S !== D && (D ? r.frontFace(r.CW) : r.frontFace(r.CCW), S = D) } function J(D) { D !== 0 ? (te(r.CULL_FACE), D !== L && (D === 1 ? r.cullFace(r.BACK) : D === 2 ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : ve(r.CULL_FACE), L = D } function ce(D) { D !== F && (W && r.lineWidth(D), F = D) } function ie(D, oe, de) { D ? (te(r.POLYGON_OFFSET_FILL), (z !== oe || H !== de) && (r.polygonOffset(oe, de), z = oe, H = de)) : ve(r.POLYGON_OFFSET_FILL) } function he(D) { D ? te(r.SCISSOR_TEST) : ve(r.SCISSOR_TEST) } function Oe(D) { D === void 0 && (D = r.TEXTURE0 + q - 1), ue !== D && (r.activeTexture(D), ue = D) } function Be(D, oe, de) { de === void 0 && (ue === null ? de = r.TEXTURE0 + q - 1 : de = ue); let Me = _e[de]; Me === void 0 && (Me = { type: void 0, texture: void 0 }, _e[de] = Me), (Me.type !== D || Me.texture !== oe) && (ue !== de && (r.activeTexture(de), ue = de), r.bindTexture(D, oe || Y[D]), Me.type = D, Me.texture = oe) } function A() { const D = _e[ue]; D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0) } function y() { try { r.compressedTexImage2D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function B() { try { r.compressedTexImage3D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function G() { try { r.texSubImage2D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function j() { try { r.texSubImage3D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function X() { try { r.compressedTexSubImage2D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function we() { try { r.compressedTexSubImage3D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function le() { try { r.texStorage2D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function Ee() { try { r.texStorage3D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function Te() { try { r.texImage2D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function re() { try { r.texImage3D(...arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function ge(D) { Je.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), Je.copy(D)) } function Ue(D) { et.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), et.copy(D)) } function Re(D, oe) { let de = c.get(oe); de === void 0 && (de = new WeakMap, c.set(oe, de)); let Me = de.get(D); Me === void 0 && (Me = r.getUniformBlockIndex(oe, D.name), de.set(D, Me)) } function pe(D, oe) { const Me = c.get(oe).get(D); l.get(oe) !== Me && (r.uniformBlockBinding(oe, Me, D.__bindingPointIndex), l.set(oe, Me)) } function He() { r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), a.setReversed(!1), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), h = {}, ue = null, _e = {}, u = {}, d = new WeakMap, f = [], g = null, _ = !1, m = null, p = null, M = null, v = null, x = null, w = null, T = null, C = new Pe(0, 0, 0), P = 0, b = !1, S = null, L = null, F = null, z = null, H = null, Je.set(0, 0, r.canvas.width, r.canvas.height), et.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), a.reset(), o.reset() } return { buffers: { color: s, depth: a, stencil: o }, enable: te, disable: ve, bindFramebuffer: Ce, drawBuffers: be, useProgram: qe, setBlending: ee, setMaterial: Z, setFlipSided: $, setCullFace: J, setLineWidth: ce, setPolygonOffset: ie, setScissorTest: he, activeTexture: Oe, bindTexture: Be, unbindTexture: A, compressedTexImage2D: y, compressedTexImage3D: B, texImage2D: Te, texImage3D: re, updateUBOMapping: Re, uniformBlockBinding: pe, texStorage2D: le, texStorage3D: Ee, texSubImage2D: G, texSubImage3D: j, compressedTexSubImage2D: X, compressedTexSubImage3D: we, scissor: ge, viewport: Ue, reset: He } } function rg(r, e, t, n, i, s, a) { const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Q, h = new WeakMap; let u; const d = new WeakMap; let f = !1; try { f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function g(A, y) { return f ? new OffscreenCanvas(A, y) : Vi("canvas") } function _(A, y, B) { let G = 1; const j = Be(A); if ((j.width > B || j.height > B) && (G = B / Math.max(j.width, j.height)), G < 1) if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) { const X = Math.floor(G * j.width), we = Math.floor(G * j.height); u === void 0 && (u = g(X, we)); const le = y ? g(X, we) : u; return le.width = X, le.height = we, le.getContext("2d").drawImage(A, 0, 0, X, we), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + X + "x" + we + ")."), le } else return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), A; return A } function m(A) { return A.generateMipmaps } function p(A) { r.generateMipmap(A) } function M(A) { return A.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : A.isWebGL3DRenderTarget ? r.TEXTURE_3D : A.isWebGLArrayRenderTarget || A.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D } function v(A, y, B, G, j = !1) { if (A !== null) { if (r[A] !== void 0) return r[A]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'") } let X = y; if (y === r.RED && (B === r.FLOAT && (X = r.R32F), B === r.HALF_FLOAT && (X = r.R16F), B === r.UNSIGNED_BYTE && (X = r.R8)), y === r.RED_INTEGER && (B === r.UNSIGNED_BYTE && (X = r.R8UI), B === r.UNSIGNED_SHORT && (X = r.R16UI), B === r.UNSIGNED_INT && (X = r.R32UI), B === r.BYTE && (X = r.R8I), B === r.SHORT && (X = r.R16I), B === r.INT && (X = r.R32I)), y === r.RG && (B === r.FLOAT && (X = r.RG32F), B === r.HALF_FLOAT && (X = r.RG16F), B === r.UNSIGNED_BYTE && (X = r.RG8)), y === r.RG_INTEGER && (B === r.UNSIGNED_BYTE && (X = r.RG8UI), B === r.UNSIGNED_SHORT && (X = r.RG16UI), B === r.UNSIGNED_INT && (X = r.RG32UI), B === r.BYTE && (X = r.RG8I), B === r.SHORT && (X = r.RG16I), B === r.INT && (X = r.RG32I)), y === r.RGB_INTEGER && (B === r.UNSIGNED_BYTE && (X = r.RGB8UI), B === r.UNSIGNED_SHORT && (X = r.RGB16UI), B === r.UNSIGNED_INT && (X = r.RGB32UI), B === r.BYTE && (X = r.RGB8I), B === r.SHORT && (X = r.RGB16I), B === r.INT && (X = r.RGB32I)), y === r.RGBA_INTEGER && (B === r.UNSIGNED_BYTE && (X = r.RGBA8UI), B === r.UNSIGNED_SHORT && (X = r.RGBA16UI), B === r.UNSIGNED_INT && (X = r.RGBA32UI), B === r.BYTE && (X = r.RGBA8I), B === r.SHORT && (X = r.RGBA16I), B === r.INT && (X = r.RGBA32I)), y === r.RGB && (B === r.UNSIGNED_INT_5_9_9_9_REV && (X = r.RGB9_E5), B === r.UNSIGNED_INT_10F_11F_11F_REV && (X = r.R11F_G11F_B10F)), y === r.RGBA) { const we = j ? Br : Ze.getTransfer(G); B === r.FLOAT && (X = r.RGBA32F), B === r.HALF_FLOAT && (X = r.RGBA16F), B === r.UNSIGNED_BYTE && (X = we === rt ? r.SRGB8_ALPHA8 : r.RGBA8), B === r.UNSIGNED_SHORT_4_4_4_4 && (X = r.RGBA4), B === r.UNSIGNED_SHORT_5_5_5_1 && (X = r.RGB5_A1) } return (X === r.R16F || X === r.R32F || X === r.RG16F || X === r.RG32F || X === r.RGBA16F || X === r.RGBA32F) && e.get("EXT_color_buffer_float"), X } function x(A, y) { let B; return A ? y === null || y === 1014 || y === 1020 ? B = r.DEPTH24_STENCIL8 : y === 1015 ? B = r.DEPTH32F_STENCIL8 : y === 1012 && (B = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y === null || y === 1014 || y === 1020 ? B = r.DEPTH_COMPONENT24 : y === 1015 ? B = r.DEPTH_COMPONENT32F : y === 1012 && (B = r.DEPTH_COMPONENT16), B } function w(A, y) { return m(A) === !0 || A.isFramebufferTexture && A.minFilter !== 1003 && A.minFilter !== 1006 ? Math.log2(Math.max(y.width, y.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? y.mipmaps.length : 1 } function T(A) { const y = A.target; y.removeEventListener("dispose", T), P(y), y.isVideoTexture && h.delete(y) } function C(A) { const y = A.target; y.removeEventListener("dispose", C), S(y) } function P(A) { const y = n.get(A); if (y.__webglInit === void 0) return; const B = A.source, G = d.get(B); if (G) { const j = G[y.__cacheKey]; j.usedTimes--, j.usedTimes === 0 && b(A), Object.keys(G).length === 0 && d.delete(B) } n.remove(A) } function b(A) { const y = n.get(A); r.deleteTexture(y.__webglTexture); const B = A.source, G = d.get(B); delete G[y.__cacheKey], a.memory.textures-- } function S(A) { const y = n.get(A); if (A.depthTexture && (A.depthTexture.dispose(), n.remove(A.depthTexture)), A.isWebGLCubeRenderTarget) for (let G = 0; G < 6; G++) { if (Array.isArray(y.__webglFramebuffer[G])) for (let j = 0; j < y.__webglFramebuffer[G].length; j++)r.deleteFramebuffer(y.__webglFramebuffer[G][j]); else r.deleteFramebuffer(y.__webglFramebuffer[G]); y.__webglDepthbuffer && r.deleteRenderbuffer(y.__webglDepthbuffer[G]) } else { if (Array.isArray(y.__webglFramebuffer)) for (let G = 0; G < y.__webglFramebuffer.length; G++)r.deleteFramebuffer(y.__webglFramebuffer[G]); else r.deleteFramebuffer(y.__webglFramebuffer); if (y.__webglDepthbuffer && r.deleteRenderbuffer(y.__webglDepthbuffer), y.__webglMultisampledFramebuffer && r.deleteFramebuffer(y.__webglMultisampledFramebuffer), y.__webglColorRenderbuffer) for (let G = 0; G < y.__webglColorRenderbuffer.length; G++)y.__webglColorRenderbuffer[G] && r.deleteRenderbuffer(y.__webglColorRenderbuffer[G]); y.__webglDepthRenderbuffer && r.deleteRenderbuffer(y.__webglDepthRenderbuffer) } const B = A.textures; for (let G = 0, j = B.length; G < j; G++) { const X = n.get(B[G]); X.__webglTexture && (r.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(B[G]) } n.remove(A) } let L = 0; function F() { L = 0 } function z() { const A = L; return A >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + i.maxTextures), L += 1, A } function H(A) { const y = []; return y.push(A.wrapS), y.push(A.wrapT), y.push(A.wrapR || 0), y.push(A.magFilter), y.push(A.minFilter), y.push(A.anisotropy), y.push(A.internalFormat), y.push(A.format), y.push(A.type), y.push(A.generateMipmaps), y.push(A.premultiplyAlpha), y.push(A.flipY), y.push(A.unpackAlignment), y.push(A.colorSpace), y.join() } function q(A, y) { const B = n.get(A); if (A.isVideoTexture && he(A), A.isRenderTargetTexture === !1 && A.isExternalTexture !== !0 && A.version > 0 && B.__version !== A.version) { const G = A.image; if (G === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (G.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { Y(B, A, y); return } } else A.isExternalTexture && (B.__webglTexture = A.sourceTexture ? A.sourceTexture : null); t.bindTexture(r.TEXTURE_2D, B.__webglTexture, r.TEXTURE0 + y) } function W(A, y) { const B = n.get(A); if (A.isRenderTargetTexture === !1 && A.version > 0 && B.__version !== A.version) { Y(B, A, y); return } t.bindTexture(r.TEXTURE_2D_ARRAY, B.__webglTexture, r.TEXTURE0 + y) } function ne(A, y) { const B = n.get(A); if (A.isRenderTargetTexture === !1 && A.version > 0 && B.__version !== A.version) { Y(B, A, y); return } t.bindTexture(r.TEXTURE_3D, B.__webglTexture, r.TEXTURE0 + y) } function k(A, y) { const B = n.get(A); if (A.version > 0 && B.__version !== A.version) { te(B, A, y); return } t.bindTexture(r.TEXTURE_CUBE_MAP, B.__webglTexture, r.TEXTURE0 + y) } const ue = { 1e3: r.REPEAT, 1001: r.CLAMP_TO_EDGE, 1002: r.MIRRORED_REPEAT }, _e = { 1003: r.NEAREST, 1004: r.NEAREST_MIPMAP_NEAREST, 1005: r.NEAREST_MIPMAP_LINEAR, 1006: r.LINEAR, 1007: r.LINEAR_MIPMAP_NEAREST, 1008: r.LINEAR_MIPMAP_LINEAR }, ye = { 512: r.NEVER, 519: r.ALWAYS, 513: r.LESS, 515: r.LEQUAL, 514: r.EQUAL, 518: r.GEQUAL, 516: r.GREATER, 517: r.NOTEQUAL }; function Ve(A, y) { if (y.type === 1015 && e.has("OES_texture_float_linear") === !1 && (y.magFilter === 1006 || y.magFilter === 1007 || y.magFilter === 1005 || y.magFilter === 1008 || y.minFilter === 1006 || y.minFilter === 1007 || y.minFilter === 1005 || y.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(A, r.TEXTURE_WRAP_S, ue[y.wrapS]), r.texParameteri(A, r.TEXTURE_WRAP_T, ue[y.wrapT]), (A === r.TEXTURE_3D || A === r.TEXTURE_2D_ARRAY) && r.texParameteri(A, r.TEXTURE_WRAP_R, ue[y.wrapR]), r.texParameteri(A, r.TEXTURE_MAG_FILTER, _e[y.magFilter]), r.texParameteri(A, r.TEXTURE_MIN_FILTER, _e[y.minFilter]), y.compareFunction && (r.texParameteri(A, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(A, r.TEXTURE_COMPARE_FUNC, ye[y.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { if (y.magFilter === 1003 || y.minFilter !== 1005 && y.minFilter !== 1008 || y.type === 1015 && e.has("OES_texture_float_linear") === !1) return; if (y.anisotropy > 1 || n.get(y).__currentAnisotropy) { const B = e.get("EXT_texture_filter_anisotropic"); r.texParameterf(A, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, i.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy } } } function Je(A, y) { let B = !1; A.__webglInit === void 0 && (A.__webglInit = !0, y.addEventListener("dispose", T)); const G = y.source; let j = d.get(G); j === void 0 && (j = {}, d.set(G, j)); const X = H(y); if (X !== A.__cacheKey) { j[X] === void 0 && (j[X] = { texture: r.createTexture(), usedTimes: 0 }, a.memory.textures++, B = !0), j[X].usedTimes++; const we = j[A.__cacheKey]; we !== void 0 && (j[A.__cacheKey].usedTimes--, we.usedTimes === 0 && b(y)), A.__cacheKey = X, A.__webglTexture = j[X].texture } return B } function et(A, y, B) { return Math.floor(Math.floor(A / B) / y) } function $e(A, y, B, G) { const X = A.updateRanges; if (X.length === 0) t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, y.width, y.height, B, G, y.data); else { X.sort((re, ge) => re.start - ge.start); let we = 0; for (let re = 1; re < X.length; re++) { const ge = X[we], Ue = X[re], Re = ge.start + ge.count, pe = et(Ue.start, y.width, 4), He = et(ge.start, y.width, 4); Ue.start <= Re + 1 && pe === He && et(Ue.start + Ue.count - 1, y.width, 4) === pe ? ge.count = Math.max(ge.count, Ue.start + Ue.count - ge.start) : (++we, X[we] = Ue) } X.length = we + 1; const le = r.getParameter(r.UNPACK_ROW_LENGTH), Ee = r.getParameter(r.UNPACK_SKIP_PIXELS), Te = r.getParameter(r.UNPACK_SKIP_ROWS); r.pixelStorei(r.UNPACK_ROW_LENGTH, y.width); for (let re = 0, ge = X.length; re < ge; re++) { const Ue = X[re], Re = Math.floor(Ue.start / 4), pe = Math.ceil(Ue.count / 4), He = Re % y.width, D = Math.floor(Re / y.width), oe = pe, de = 1; r.pixelStorei(r.UNPACK_SKIP_PIXELS, He), r.pixelStorei(r.UNPACK_SKIP_ROWS, D), t.texSubImage2D(r.TEXTURE_2D, 0, He, D, oe, de, B, G, y.data) } A.clearUpdateRanges(), r.pixelStorei(r.UNPACK_ROW_LENGTH, le), r.pixelStorei(r.UNPACK_SKIP_PIXELS, Ee), r.pixelStorei(r.UNPACK_SKIP_ROWS, Te) } } function Y(A, y, B) { let G = r.TEXTURE_2D; (y.isDataArrayTexture || y.isCompressedArrayTexture) && (G = r.TEXTURE_2D_ARRAY), y.isData3DTexture && (G = r.TEXTURE_3D); const j = Je(A, y), X = y.source; t.bindTexture(G, A.__webglTexture, r.TEXTURE0 + B); const we = n.get(X); if (X.version !== we.__version || j === !0) { t.activeTexture(r.TEXTURE0 + B); const le = Ze.getPrimaries(Ze.workingColorSpace), Ee = y.colorSpace === "" ? null : Ze.getPrimaries(y.colorSpace), Te = y.colorSpace === "" || le === Ee ? r.NONE : r.BROWSER_DEFAULT_WEBGL; r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, y.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, y.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te); let re = _(y.image, !1, i.maxTextureSize); re = Oe(y, re); const ge = s.convert(y.format, y.colorSpace), Ue = s.convert(y.type); let Re = v(y.internalFormat, ge, Ue, y.colorSpace, y.isVideoTexture); Ve(G, y); let pe; const He = y.mipmaps, D = y.isVideoTexture !== !0, oe = we.__version === void 0 || j === !0, de = X.dataReady, Me = w(y, re); if (y.isDepthTexture) Re = x(y.format === 1027, y.type), oe && (D ? t.texStorage2D(r.TEXTURE_2D, 1, Re, re.width, re.height) : t.texImage2D(r.TEXTURE_2D, 0, Re, re.width, re.height, 0, ge, Ue, null)); else if (y.isDataTexture) if (He.length > 0) { D && oe && t.texStorage2D(r.TEXTURE_2D, Me, Re, He[0].width, He[0].height); for (let se = 0, K = He.length; se < K; se++)pe = He[se], D ? de && t.texSubImage2D(r.TEXTURE_2D, se, 0, 0, pe.width, pe.height, ge, Ue, pe.data) : t.texImage2D(r.TEXTURE_2D, se, Re, pe.width, pe.height, 0, ge, Ue, pe.data); y.generateMipmaps = !1 } else D ? (oe && t.texStorage2D(r.TEXTURE_2D, Me, Re, re.width, re.height), de && $e(y, re, ge, Ue)) : t.texImage2D(r.TEXTURE_2D, 0, Re, re.width, re.height, 0, ge, Ue, re.data); else if (y.isCompressedTexture) if (y.isCompressedArrayTexture) { D && oe && t.texStorage3D(r.TEXTURE_2D_ARRAY, Me, Re, He[0].width, He[0].height, re.depth); for (let se = 0, K = He.length; se < K; se++)if (pe = He[se], y.format !== 1023) if (ge !== null) if (D) { if (de) if (y.layerUpdates.size > 0) { const Ae = Lo(pe.width, pe.height, y.format, y.type); for (const ze of y.layerUpdates) { const lt = pe.data.subarray(ze * Ae / pe.data.BYTES_PER_ELEMENT, (ze + 1) * Ae / pe.data.BYTES_PER_ELEMENT); t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, se, 0, 0, ze, pe.width, pe.height, 1, ge, lt) } y.clearLayerUpdates() } else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, se, 0, 0, 0, pe.width, pe.height, re.depth, ge, pe.data) } else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, se, Re, pe.width, pe.height, re.depth, 0, pe.data, 0, 0); else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"); else D ? de && t.texSubImage3D(r.TEXTURE_2D_ARRAY, se, 0, 0, 0, pe.width, pe.height, re.depth, ge, Ue, pe.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, se, Re, pe.width, pe.height, re.depth, 0, ge, Ue, pe.data) } else { D && oe && t.texStorage2D(r.TEXTURE_2D, Me, Re, He[0].width, He[0].height); for (let se = 0, K = He.length; se < K; se++)pe = He[se], y.format !== 1023 ? ge !== null ? D ? de && t.compressedTexSubImage2D(r.TEXTURE_2D, se, 0, 0, pe.width, pe.height, ge, pe.data) : t.compressedTexImage2D(r.TEXTURE_2D, se, Re, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : D ? de && t.texSubImage2D(r.TEXTURE_2D, se, 0, 0, pe.width, pe.height, ge, Ue, pe.data) : t.texImage2D(r.TEXTURE_2D, se, Re, pe.width, pe.height, 0, ge, Ue, pe.data) } else if (y.isDataArrayTexture) if (D) { if (oe && t.texStorage3D(r.TEXTURE_2D_ARRAY, Me, Re, re.width, re.height, re.depth), de) if (y.layerUpdates.size > 0) { const se = Lo(re.width, re.height, y.format, y.type); for (const K of y.layerUpdates) { const Ae = re.data.subarray(K * se / re.data.BYTES_PER_ELEMENT, (K + 1) * se / re.data.BYTES_PER_ELEMENT); t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, K, re.width, re.height, 1, ge, Ue, Ae) } y.clearLayerUpdates() } else t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, re.width, re.height, re.depth, ge, Ue, re.data) } else t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Re, re.width, re.height, re.depth, 0, ge, Ue, re.data); else if (y.isData3DTexture) D ? (oe && t.texStorage3D(r.TEXTURE_3D, Me, Re, re.width, re.height, re.depth), de && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, re.width, re.height, re.depth, ge, Ue, re.data)) : t.texImage3D(r.TEXTURE_3D, 0, Re, re.width, re.height, re.depth, 0, ge, Ue, re.data); else if (y.isFramebufferTexture) { if (oe) if (D) t.texStorage2D(r.TEXTURE_2D, Me, Re, re.width, re.height); else { let se = re.width, K = re.height; for (let Ae = 0; Ae < Me; Ae++)t.texImage2D(r.TEXTURE_2D, Ae, Re, se, K, 0, ge, Ue, null), se >>= 1, K >>= 1 } } else if (He.length > 0) { if (D && oe) { const se = Be(He[0]); t.texStorage2D(r.TEXTURE_2D, Me, Re, se.width, se.height) } for (let se = 0, K = He.length; se < K; se++)pe = He[se], D ? de && t.texSubImage2D(r.TEXTURE_2D, se, 0, 0, ge, Ue, pe) : t.texImage2D(r.TEXTURE_2D, se, Re, ge, Ue, pe); y.generateMipmaps = !1 } else if (D) { if (oe) { const se = Be(re); t.texStorage2D(r.TEXTURE_2D, Me, Re, se.width, se.height) } de && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ge, Ue, re) } else t.texImage2D(r.TEXTURE_2D, 0, Re, ge, Ue, re); m(y) && p(G), we.__version = X.version, y.onUpdate && y.onUpdate(y) } A.__version = y.version } function te(A, y, B) { if (y.image.length !== 6) return; const G = Je(A, y), j = y.source; t.bindTexture(r.TEXTURE_CUBE_MAP, A.__webglTexture, r.TEXTURE0 + B); const X = n.get(j); if (j.version !== X.__version || G === !0) { t.activeTexture(r.TEXTURE0 + B); const we = Ze.getPrimaries(Ze.workingColorSpace), le = y.colorSpace === "" ? null : Ze.getPrimaries(y.colorSpace), Ee = y.colorSpace === "" || we === le ? r.NONE : r.BROWSER_DEFAULT_WEBGL; r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, y.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, y.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ee); const Te = y.isCompressedTexture || y.image[0].isCompressedTexture, re = y.image[0] && y.image[0].isDataTexture, ge = []; for (let K = 0; K < 6; K++)!Te && !re ? ge[K] = _(y.image[K], !0, i.maxCubemapSize) : ge[K] = re ? y.image[K].image : y.image[K], ge[K] = Oe(y, ge[K]); const Ue = ge[0], Re = s.convert(y.format, y.colorSpace), pe = s.convert(y.type), He = v(y.internalFormat, Re, pe, y.colorSpace), D = y.isVideoTexture !== !0, oe = X.__version === void 0 || G === !0, de = j.dataReady; let Me = w(y, Ue); Ve(r.TEXTURE_CUBE_MAP, y); let se; if (Te) { D && oe && t.texStorage2D(r.TEXTURE_CUBE_MAP, Me, He, Ue.width, Ue.height); for (let K = 0; K < 6; K++) { se = ge[K].mipmaps; for (let Ae = 0; Ae < se.length; Ae++) { const ze = se[Ae]; y.format !== 1023 ? Re !== null ? D ? de && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae, 0, 0, ze.width, ze.height, Re, ze.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae, He, ze.width, ze.height, 0, ze.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : D ? de && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae, 0, 0, ze.width, ze.height, Re, pe, ze.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae, He, ze.width, ze.height, 0, Re, pe, ze.data) } } } else { if (se = y.mipmaps, D && oe) { se.length > 0 && Me++; const K = Be(ge[0]); t.texStorage2D(r.TEXTURE_CUBE_MAP, Me, He, K.width, K.height) } for (let K = 0; K < 6; K++)if (re) { D ? de && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, ge[K].width, ge[K].height, Re, pe, ge[K].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, He, ge[K].width, ge[K].height, 0, Re, pe, ge[K].data); for (let Ae = 0; Ae < se.length; Ae++) { const lt = se[Ae].image[K].image; D ? de && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae + 1, 0, 0, lt.width, lt.height, Re, pe, lt.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae + 1, He, lt.width, lt.height, 0, Re, pe, lt.data) } } else { D ? de && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Re, pe, ge[K]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, He, Re, pe, ge[K]); for (let Ae = 0; Ae < se.length; Ae++) { const ze = se[Ae]; D ? de && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae + 1, 0, 0, Re, pe, ze.image[K]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, Ae + 1, He, Re, pe, ze.image[K]) } } } m(y) && p(r.TEXTURE_CUBE_MAP), X.__version = j.version, y.onUpdate && y.onUpdate(y) } A.__version = y.version } function ve(A, y, B, G, j, X) { const we = s.convert(B.format, B.colorSpace), le = s.convert(B.type), Ee = v(B.internalFormat, we, le, B.colorSpace), Te = n.get(y), re = n.get(B); if (re.__renderTarget = y, !Te.__hasExternalTextures) { const ge = Math.max(1, y.width >> X), Ue = Math.max(1, y.height >> X); j === r.TEXTURE_3D || j === r.TEXTURE_2D_ARRAY ? t.texImage3D(j, X, Ee, ge, Ue, y.depth, 0, we, le, null) : t.texImage2D(j, X, Ee, ge, Ue, 0, we, le, null) } t.bindFramebuffer(r.FRAMEBUFFER, A), ie(y) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, G, j, re.__webglTexture, 0, ce(y)) : (j === r.TEXTURE_2D || j >= r.TEXTURE_CUBE_MAP_POSITIVE_X && j <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, G, j, re.__webglTexture, X), t.bindFramebuffer(r.FRAMEBUFFER, null) } function Ce(A, y, B) { if (r.bindRenderbuffer(r.RENDERBUFFER, A), y.depthBuffer) { const G = y.depthTexture, j = G && G.isDepthTexture ? G.type : null, X = x(y.stencilBuffer, j), we = y.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, le = ce(y); ie(y) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, le, X, y.width, y.height) : B ? r.renderbufferStorageMultisample(r.RENDERBUFFER, le, X, y.width, y.height) : r.renderbufferStorage(r.RENDERBUFFER, X, y.width, y.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, we, r.RENDERBUFFER, A) } else { const G = y.textures; for (let j = 0; j < G.length; j++) { const X = G[j], we = s.convert(X.format, X.colorSpace), le = s.convert(X.type), Ee = v(X.internalFormat, we, le, X.colorSpace), Te = ce(y); B && ie(y) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Te, Ee, y.width, y.height) : ie(y) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Te, Ee, y.width, y.height) : r.renderbufferStorage(r.RENDERBUFFER, Ee, y.width, y.height) } } r.bindRenderbuffer(r.RENDERBUFFER, null) } function be(A, y) { if (y && y.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(r.FRAMEBUFFER, A), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); const G = n.get(y.depthTexture); G.__renderTarget = y, (!G.__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), q(y.depthTexture, 0); const j = G.__webglTexture, X = ce(y); if (y.depthTexture.format === 1026) ie(y) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, j, 0, X) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, j, 0); else if (y.depthTexture.format === 1027) ie(y) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, j, 0, X) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, j, 0); else throw new Error("Unknown depthTexture format") } function qe(A) { const y = n.get(A), B = A.isWebGLCubeRenderTarget === !0; if (y.__boundDepthTexture !== A.depthTexture) { const G = A.depthTexture; if (y.__depthDisposeCallback && y.__depthDisposeCallback(), G) { const j = () => { delete y.__boundDepthTexture, delete y.__depthDisposeCallback, G.removeEventListener("dispose", j) }; G.addEventListener("dispose", j), y.__depthDisposeCallback = j } y.__boundDepthTexture = G } if (A.depthTexture && !y.__autoAllocateDepthBuffer) { if (B) throw new Error("target.depthTexture not supported in Cube render targets"); const G = A.texture.mipmaps; G && G.length > 0 ? be(y.__webglFramebuffer[0], A) : be(y.__webglFramebuffer, A) } else if (B) { y.__webglDepthbuffer = []; for (let G = 0; G < 6; G++)if (t.bindFramebuffer(r.FRAMEBUFFER, y.__webglFramebuffer[G]), y.__webglDepthbuffer[G] === void 0) y.__webglDepthbuffer[G] = r.createRenderbuffer(), Ce(y.__webglDepthbuffer[G], A, !1); else { const j = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, X = y.__webglDepthbuffer[G]; r.bindRenderbuffer(r.RENDERBUFFER, X), r.framebufferRenderbuffer(r.FRAMEBUFFER, j, r.RENDERBUFFER, X) } } else { const G = A.texture.mipmaps; if (G && G.length > 0 ? t.bindFramebuffer(r.FRAMEBUFFER, y.__webglFramebuffer[0]) : t.bindFramebuffer(r.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer === void 0) y.__webglDepthbuffer = r.createRenderbuffer(), Ce(y.__webglDepthbuffer, A, !1); else { const j = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, X = y.__webglDepthbuffer; r.bindRenderbuffer(r.RENDERBUFFER, X), r.framebufferRenderbuffer(r.FRAMEBUFFER, j, r.RENDERBUFFER, X) } } t.bindFramebuffer(r.FRAMEBUFFER, null) } function ot(A, y, B) { const G = n.get(A); y !== void 0 && ve(G.__webglFramebuffer, A, A.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), B !== void 0 && qe(A) } function I(A) { const y = A.texture, B = n.get(A), G = n.get(y); A.addEventListener("dispose", C); const j = A.textures, X = A.isWebGLCubeRenderTarget === !0, we = j.length > 1; if (we || (G.__webglTexture === void 0 && (G.__webglTexture = r.createTexture()), G.__version = y.version, a.memory.textures++), X) { B.__webglFramebuffer = []; for (let le = 0; le < 6; le++)if (y.mipmaps && y.mipmaps.length > 0) { B.__webglFramebuffer[le] = []; for (let Ee = 0; Ee < y.mipmaps.length; Ee++)B.__webglFramebuffer[le][Ee] = r.createFramebuffer() } else B.__webglFramebuffer[le] = r.createFramebuffer() } else { if (y.mipmaps && y.mipmaps.length > 0) { B.__webglFramebuffer = []; for (let le = 0; le < y.mipmaps.length; le++)B.__webglFramebuffer[le] = r.createFramebuffer() } else B.__webglFramebuffer = r.createFramebuffer(); if (we) for (let le = 0, Ee = j.length; le < Ee; le++) { const Te = n.get(j[le]); Te.__webglTexture === void 0 && (Te.__webglTexture = r.createTexture(), a.memory.textures++) } if (A.samples > 0 && ie(A) === !1) { B.__webglMultisampledFramebuffer = r.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, B.__webglMultisampledFramebuffer); for (let le = 0; le < j.length; le++) { const Ee = j[le]; B.__webglColorRenderbuffer[le] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, B.__webglColorRenderbuffer[le]); const Te = s.convert(Ee.format, Ee.colorSpace), re = s.convert(Ee.type), ge = v(Ee.internalFormat, Te, re, Ee.colorSpace, A.isXRRenderTarget === !0), Ue = ce(A); r.renderbufferStorageMultisample(r.RENDERBUFFER, Ue, ge, A.width, A.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + le, r.RENDERBUFFER, B.__webglColorRenderbuffer[le]) } r.bindRenderbuffer(r.RENDERBUFFER, null), A.depthBuffer && (B.__webglDepthRenderbuffer = r.createRenderbuffer(), Ce(B.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null) } } if (X) { t.bindTexture(r.TEXTURE_CUBE_MAP, G.__webglTexture), Ve(r.TEXTURE_CUBE_MAP, y); for (let le = 0; le < 6; le++)if (y.mipmaps && y.mipmaps.length > 0) for (let Ee = 0; Ee < y.mipmaps.length; Ee++)ve(B.__webglFramebuffer[le][Ee], A, y, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + le, Ee); else ve(B.__webglFramebuffer[le], A, y, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0); m(y) && p(r.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (we) { for (let le = 0, Ee = j.length; le < Ee; le++) { const Te = j[le], re = n.get(Te); let ge = r.TEXTURE_2D; (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (ge = A.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(ge, re.__webglTexture), Ve(ge, Te), ve(B.__webglFramebuffer, A, Te, r.COLOR_ATTACHMENT0 + le, ge, 0), m(Te) && p(ge) } t.unbindTexture() } else { let le = r.TEXTURE_2D; if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (le = A.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(le, G.__webglTexture), Ve(le, y), y.mipmaps && y.mipmaps.length > 0) for (let Ee = 0; Ee < y.mipmaps.length; Ee++)ve(B.__webglFramebuffer[Ee], A, y, r.COLOR_ATTACHMENT0, le, Ee); else ve(B.__webglFramebuffer, A, y, r.COLOR_ATTACHMENT0, le, 0); m(y) && p(le), t.unbindTexture() } A.depthBuffer && qe(A) } function ee(A) { const y = A.textures; for (let B = 0, G = y.length; B < G; B++) { const j = y[B]; if (m(j)) { const X = M(A), we = n.get(j).__webglTexture; t.bindTexture(X, we), p(X), t.unbindTexture() } } } const Z = [], $ = []; function J(A) { if (A.samples > 0) { if (ie(A) === !1) { const y = A.textures, B = A.width, G = A.height; let j = r.COLOR_BUFFER_BIT; const X = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, we = n.get(A), le = y.length > 1; if (le) for (let Te = 0; Te < y.length; Te++)t.bindFramebuffer(r.FRAMEBUFFER, we.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, we.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.TEXTURE_2D, null, 0); t.bindFramebuffer(r.READ_FRAMEBUFFER, we.__webglMultisampledFramebuffer); const Ee = A.texture.mipmaps; Ee && Ee.length > 0 ? t.bindFramebuffer(r.DRAW_FRAMEBUFFER, we.__webglFramebuffer[0]) : t.bindFramebuffer(r.DRAW_FRAMEBUFFER, we.__webglFramebuffer); for (let Te = 0; Te < y.length; Te++) { if (A.resolveDepthBuffer && (A.depthBuffer && (j |= r.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (j |= r.STENCIL_BUFFER_BIT)), le) { r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, we.__webglColorRenderbuffer[Te]); const re = n.get(y[Te]).__webglTexture; r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, re, 0) } r.blitFramebuffer(0, 0, B, G, 0, 0, B, G, j, r.NEAREST), l === !0 && (Z.length = 0, $.length = 0, Z.push(r.COLOR_ATTACHMENT0 + Te), A.depthBuffer && A.resolveDepthBuffer === !1 && (Z.push(X), $.push(X), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, $)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, Z)) } if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), le) for (let Te = 0; Te < y.length; Te++) { t.bindFramebuffer(r.FRAMEBUFFER, we.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.RENDERBUFFER, we.__webglColorRenderbuffer[Te]); const re = n.get(y[Te]).__webglTexture; t.bindFramebuffer(r.FRAMEBUFFER, we.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.TEXTURE_2D, re, 0) } t.bindFramebuffer(r.DRAW_FRAMEBUFFER, we.__webglMultisampledFramebuffer) } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && l) { const y = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT; r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [y]) } } } function ce(A) { return Math.min(i.maxSamples, A.samples) } function ie(A) { const y = n.get(A); return A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1 } function he(A) { const y = a.render.frame; h.get(A) !== y && (h.set(A, y), A.update()) } function Oe(A, y) { const B = A.colorSpace, G = A.format, j = A.type; return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || B !== hi && B !== "" && (Ze.getTransfer(B) === rt ? (G !== 1023 || j !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), y } function Be(A) { return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width, c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth, c.height = A.displayHeight) : (c.width = A.width, c.height = A.height), c } this.allocateTextureUnit = z, this.resetTextureUnits = F, this.setTexture2D = q, this.setTexture2DArray = W, this.setTexture3D = ne, this.setTextureCube = k, this.rebindTextures = ot, this.setupRenderTarget = I, this.updateRenderTargetMipmap = ee, this.updateMultisampleRenderTarget = J, this.setupDepthRenderbuffer = qe, this.setupFrameBufferTexture = ve, this.useMultisampledRTT = ie } function sg(r, e) { function t(n, i = "") { let s; const a = Ze.getTransfer(i); if (n === 1009) return r.UNSIGNED_BYTE; if (n === 1017) return r.UNSIGNED_SHORT_4_4_4_4; if (n === 1018) return r.UNSIGNED_SHORT_5_5_5_1; if (n === 35902) return r.UNSIGNED_INT_5_9_9_9_REV; if (n === 35899) return r.UNSIGNED_INT_10F_11F_11F_REV; if (n === 1010) return r.BYTE; if (n === 1011) return r.SHORT; if (n === 1012) return r.UNSIGNED_SHORT; if (n === 1013) return r.INT; if (n === 1014) return r.UNSIGNED_INT; if (n === 1015) return r.FLOAT; if (n === 1016) return r.HALF_FLOAT; if (n === 1021) return r.ALPHA; if (n === 1022) return r.RGB; if (n === 1023) return r.RGBA; if (n === 1026) return r.DEPTH_COMPONENT; if (n === 1027) return r.DEPTH_STENCIL; if (n === 1028) return r.RED; if (n === 1029) return r.RED_INTEGER; if (n === 1030) return r.RG; if (n === 1031) return r.RG_INTEGER; if (n === 1033) return r.RGBA_INTEGER; if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (a === rt) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) { if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) { if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT; if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (n === 35840 || n === 35841 || n === 35842 || n === 35843) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) { if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (n === 36196 || n === 37492 || n === 37496) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) { if (n === 36196 || n === 37492) return a === rt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2; if (n === 37496) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) { if (n === 37808) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR; if (n === 37809) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR; if (n === 37810) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR; if (n === 37811) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR; if (n === 37812) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR; if (n === 37813) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR; if (n === 37814) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR; if (n === 37815) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR; if (n === 37816) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR; if (n === 37817) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR; if (n === 37818) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR; if (n === 37819) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR; if (n === 37820) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR; if (n === 37821) return a === rt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (n === 36492 || n === 36494 || n === 36495) if (s = e.get("EXT_texture_compression_bptc"), s !== null) { if (n === 36492) return a === rt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (n === 36283 || n === 36284 || n === 36285 || n === 36286) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) { if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT; if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT; if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return n === 1020 ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null } return { convert: t } } const ag = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, og = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class lg { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, t) { if (this.texture === null) { const n = new xl(e.texture); (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n } } getMesh(e) { if (this.texture !== null && this.mesh === null) { const t = e.cameras[0].viewport, n = new en({ vertexShader: ag, fragmentShader: og, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } }); this.mesh = new Rt(new Ji(20, 20), n) } return this.mesh } reset() { this.texture = null, this.mesh = null } getDepthTexture() { return this.texture } } class cg extends mi { constructor(e, t) { super(); const n = this; let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, g = null; const _ = typeof XRWebGLBinding < "u", m = new lg, p = {}, M = t.getContextAttributes(); let v = null, x = null; const w = [], T = [], C = new Q; let P = null; const b = new Lt; b.viewport = new Qe; const S = new Lt; S.viewport = new Qe; const L = [b, S], F = new yu; let z = null, H = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (Y) { let te = w[Y]; return te === void 0 && (te = new _s, w[Y] = te), te.getTargetRaySpace() }, this.getControllerGrip = function (Y) { let te = w[Y]; return te === void 0 && (te = new _s, w[Y] = te), te.getGripSpace() }, this.getHand = function (Y) { let te = w[Y]; return te === void 0 && (te = new _s, w[Y] = te), te.getHandSpace() }; function q(Y) { const te = T.indexOf(Y.inputSource); if (te === -1) return; const ve = w[te]; ve !== void 0 && (ve.update(Y.inputSource, Y.frame, c || a), ve.dispatchEvent({ type: Y.type, data: Y.inputSource })) } function W() { i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", W), i.removeEventListener("inputsourceschange", ne); for (let Y = 0; Y < w.length; Y++) { const te = T[Y]; te !== null && (T[Y] = null, w[Y].disconnect(te)) } z = null, H = null, m.reset(); for (const Y in p) delete p[Y]; e.setRenderTarget(v), f = null, d = null, u = null, i = null, x = null, $e.stop(), n.isPresenting = !1, e.setPixelRatio(P), e.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (Y) { s = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (Y) { o = Y, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || a }, this.setReferenceSpace = function (Y) { c = Y }, this.getBaseLayer = function () { return d !== null ? d : f }, this.getBinding = function () { return u === null && _ && (u = new XRWebGLBinding(i, t)), u }, this.getFrame = function () { return g }, this.getSession = function () { return i }, this.setSession = async function (Y) { if (i = Y, i !== null) { if (v = e.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", W), i.addEventListener("inputsourceschange", ne), M.xrCompatible !== !0 && await t.makeXRCompatible(), P = e.getPixelRatio(), e.getSize(C), _ && "createProjectionLayer" in XRWebGLBinding.prototype) { let ve = null, Ce = null, be = null; M.depth && (be = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ve = M.stencil ? 1027 : 1026, Ce = M.stencil ? 1020 : 1014); const qe = { colorFormat: t.RGBA8, depthFormat: be, scaleFactor: s }; u = this.getBinding(), d = u.createProjectionLayer(qe), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), x = new Fn(d.textureWidth, d.textureHeight, { format: 1023, type: 1009, depthTexture: new _l(d.textureWidth, d.textureHeight, Ce, void 0, void 0, void 0, void 0, void 0, void 0, ve), stencilBuffer: M.stencil, colorSpace: e.outputColorSpace, samples: M.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === !1, resolveStencilBuffer: d.ignoreDepthValues === !1 }) } else { const ve = { antialias: M.antialias, alpha: !0, depth: M.depth, stencil: M.stencil, framebufferScaleFactor: s }; f = new XRWebGLLayer(i, t, ve), i.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), x = new Fn(f.framebufferWidth, f.framebufferHeight, { format: 1023, type: 1009, colorSpace: e.outputColorSpace, stencilBuffer: M.stencil, resolveDepthBuffer: f.ignoreDepthValues === !1, resolveStencilBuffer: f.ignoreDepthValues === !1 }) } x.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), $e.setContext(i), $e.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (i !== null) return i.environmentBlendMode }, this.getDepthTexture = function () { return m.getDepthTexture() }; function ne(Y) { for (let te = 0; te < Y.removed.length; te++) { const ve = Y.removed[te], Ce = T.indexOf(ve); Ce >= 0 && (T[Ce] = null, w[Ce].disconnect(ve)) } for (let te = 0; te < Y.added.length; te++) { const ve = Y.added[te]; let Ce = T.indexOf(ve); if (Ce === -1) { for (let qe = 0; qe < w.length; qe++)if (qe >= T.length) { T.push(ve), Ce = qe; break } else if (T[qe] === null) { T[qe] = ve, Ce = qe; break } if (Ce === -1) break } const be = w[Ce]; be && be.connect(ve) } } const k = new R, ue = new R; function _e(Y, te, ve) { k.setFromMatrixPosition(te.matrixWorld), ue.setFromMatrixPosition(ve.matrixWorld); const Ce = k.distanceTo(ue), be = te.projectionMatrix.elements, qe = ve.projectionMatrix.elements, ot = be[14] / (be[10] - 1), I = be[14] / (be[10] + 1), ee = (be[9] + 1) / be[5], Z = (be[9] - 1) / be[5], $ = (be[8] - 1) / be[0], J = (qe[8] + 1) / qe[0], ce = ot * $, ie = ot * J, he = Ce / (-$ + J), Oe = he * -$; if (te.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(Oe), Y.translateZ(he), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), be[10] === -1) Y.projectionMatrix.copy(te.projectionMatrix), Y.projectionMatrixInverse.copy(te.projectionMatrixInverse); else { const Be = ot + he, A = I + he, y = ce - Oe, B = ie + (Ce - Oe), G = ee * I / A * Be, j = Z * I / A * Be; Y.projectionMatrix.makePerspective(y, B, G, j, Be, A), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert() } } function ye(Y, te) { te === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(te.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert() } this.updateCamera = function (Y) { if (i === null) return; let te = Y.near, ve = Y.far; m.texture !== null && (m.depthNear > 0 && (te = m.depthNear), m.depthFar > 0 && (ve = m.depthFar)), F.near = S.near = b.near = te, F.far = S.far = b.far = ve, (z !== F.near || H !== F.far) && (i.updateRenderState({ depthNear: F.near, depthFar: F.far }), z = F.near, H = F.far), F.layers.mask = Y.layers.mask | 6, b.layers.mask = F.layers.mask & 3, S.layers.mask = F.layers.mask & 5; const Ce = Y.parent, be = F.cameras; ye(F, Ce); for (let qe = 0; qe < be.length; qe++)ye(be[qe], Ce); be.length === 2 ? _e(F, b, S) : F.projectionMatrix.copy(b.projectionMatrix), Ve(Y, F, Ce) }; function Ve(Y, te, ve) { ve === null ? Y.matrix.copy(te.matrixWorld) : (Y.matrix.copy(ve.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(te.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(!0), Y.projectionMatrix.copy(te.projectionMatrix), Y.projectionMatrixInverse.copy(te.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = ui * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1) } this.getCamera = function () { return F }, this.getFoveation = function () { if (!(d === null && f === null)) return l }, this.setFoveation = function (Y) { l = Y, d !== null && (d.fixedFoveation = Y), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = Y) }, this.hasDepthSensing = function () { return m.texture !== null }, this.getDepthSensingMesh = function () { return m.getMesh(F) }, this.getCameraTexture = function (Y) { return p[Y] }; let Je = null; function et(Y, te) { if (h = te.getViewerPose(c || a), g = te, h !== null) { const ve = h.views; f !== null && (e.setRenderTargetFramebuffer(x, f.framebuffer), e.setRenderTarget(x)); let Ce = !1; ve.length !== F.cameras.length && (F.cameras.length = 0, Ce = !0); for (let I = 0; I < ve.length; I++) { const ee = ve[I]; let Z = null; if (f !== null) Z = f.getViewport(ee); else { const J = u.getViewSubImage(d, ee); Z = J.viewport, I === 0 && (e.setRenderTargetTextures(x, J.colorTexture, J.depthStencilTexture), e.setRenderTarget(x)) } let $ = L[I]; $ === void 0 && ($ = new Lt, $.layers.enable(I), $.viewport = new Qe, L[I] = $), $.matrix.fromArray(ee.transform.matrix), $.matrix.decompose($.position, $.quaternion, $.scale), $.projectionMatrix.fromArray(ee.projectionMatrix), $.projectionMatrixInverse.copy($.projectionMatrix).invert(), $.viewport.set(Z.x, Z.y, Z.width, Z.height), I === 0 && (F.matrix.copy($.matrix), F.matrix.decompose(F.position, F.quaternion, F.scale)), Ce === !0 && F.cameras.push($) } const be = i.enabledFeatures; if (be && be.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && _) { u = n.getBinding(); const I = u.getDepthInformation(ve[0]); I && I.isValid && I.texture && m.init(I, i.renderState) } if (be && be.includes("camera-access") && _) { e.state.unbindTexture(), u = n.getBinding(); for (let I = 0; I < ve.length; I++) { const ee = ve[I].camera; if (ee) { let Z = p[ee]; Z || (Z = new xl, p[ee] = Z); const $ = u.getCameraImage(ee); Z.sourceTexture = $ } } } } for (let ve = 0; ve < w.length; ve++) { const Ce = T[ve], be = w[ve]; Ce !== null && be !== void 0 && be.update(Ce, te, c || a) } Je && Je(Y, te), te.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: te }), g = null } const $e = new Ul; $e.setAnimationLoop(et), this.setAnimationLoop = function (Y) { Je = Y }, this.dispose = function () { } } } const Pn = new Wt, hg = new ke; function ug(r, e) { function t(m, p) { m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix) } function n(m, p) { p.color.getRGB(m.fogColor.value, ll(r)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density) } function i(m, p, M, v, x) { p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(m, p) : p.isMeshToonMaterial ? (s(m, p), u(m, p)) : p.isMeshPhongMaterial ? (s(m, p), h(m, p)) : p.isMeshStandardMaterial ? (s(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, x)) : p.isMeshMatcapMaterial ? (s(m, p), g(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), _(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, M, v) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1) } function s(m, p) { m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === 1 && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === 1 && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); const M = e.get(p), v = M.envMap, x = M.envMapRotation; v && (m.envMap.value = v, Pn.copy(x), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (Pn.y *= -1, Pn.z *= -1), m.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(Pn)), m.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform)) } function a(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)) } function o(m, p) { m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale } function l(m, p, M, v) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * M, m.scale.value = v * .5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest) } function c(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest) } function h(m, p) { m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4) } function u(m, p) { p.gradientMap && (m.gradientMap.value = p.gradientMap) } function d(m, p) { m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity) } function f(m, p, M) { m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = M.texture, m.transmissionSamplerSize.value.set(M.width, M.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform)) } function g(m, p) { p.matcap && (m.matcap.value = p.matcap) } function _(m, p) { const M = e.get(p).light; m.referencePosition.value.setFromMatrixPosition(M.matrixWorld), m.nearDistance.value = M.shadow.camera.near, m.farDistance.value = M.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: i } } function dg(r, e, t, n) { let i = {}, s = {}, a = []; const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS); function l(M, v) { const x = v.program; n.uniformBlockBinding(M, x) } function c(M, v) { let x = i[M.id]; x === void 0 && (g(M), x = h(M), i[M.id] = x, M.addEventListener("dispose", m)); const w = v.program; n.updateUBOMapping(M, w); const T = e.render.frame; s[M.id] !== T && (d(M), s[M.id] = T) } function h(M) { const v = u(); M.__bindingPointIndex = v; const x = r.createBuffer(), w = M.__size, T = M.usage; return r.bindBuffer(r.UNIFORM_BUFFER, x), r.bufferData(r.UNIFORM_BUFFER, w, T), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, x), x } function u() { for (let M = 0; M < o; M++)if (a.indexOf(M) === -1) return a.push(M), M; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(M) { const v = i[M.id], x = M.uniforms, w = M.__cache; r.bindBuffer(r.UNIFORM_BUFFER, v); for (let T = 0, C = x.length; T < C; T++) { const P = Array.isArray(x[T]) ? x[T] : [x[T]]; for (let b = 0, S = P.length; b < S; b++) { const L = P[b]; if (f(L, T, b, w) === !0) { const F = L.__offset, z = Array.isArray(L.value) ? L.value : [L.value]; let H = 0; for (let q = 0; q < z.length; q++) { const W = z[q], ne = _(W); typeof W == "number" || typeof W == "boolean" ? (L.__data[0] = W, r.bufferSubData(r.UNIFORM_BUFFER, F + H, L.__data)) : W.isMatrix3 ? (L.__data[0] = W.elements[0], L.__data[1] = W.elements[1], L.__data[2] = W.elements[2], L.__data[3] = 0, L.__data[4] = W.elements[3], L.__data[5] = W.elements[4], L.__data[6] = W.elements[5], L.__data[7] = 0, L.__data[8] = W.elements[6], L.__data[9] = W.elements[7], L.__data[10] = W.elements[8], L.__data[11] = 0) : (W.toArray(L.__data, H), H += ne.storage / Float32Array.BYTES_PER_ELEMENT) } r.bufferSubData(r.UNIFORM_BUFFER, F, L.__data) } } } r.bindBuffer(r.UNIFORM_BUFFER, null) } function f(M, v, x, w) { const T = M.value, C = v + "_" + x; if (w[C] === void 0) return typeof T == "number" || typeof T == "boolean" ? w[C] = T : w[C] = T.clone(), !0; { const P = w[C]; if (typeof T == "number" || typeof T == "boolean") { if (P !== T) return w[C] = T, !0 } else if (P.equals(T) === !1) return P.copy(T), !0 } return !1 } function g(M) { const v = M.uniforms; let x = 0; const w = 16; for (let C = 0, P = v.length; C < P; C++) { const b = Array.isArray(v[C]) ? v[C] : [v[C]]; for (let S = 0, L = b.length; S < L; S++) { const F = b[S], z = Array.isArray(F.value) ? F.value : [F.value]; for (let H = 0, q = z.length; H < q; H++) { const W = z[H], ne = _(W), k = x % w, ue = k % ne.boundary, _e = k + ue; x += ue, _e !== 0 && w - _e < ne.storage && (x += w - _e), F.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT), F.__offset = x, x += ne.storage } } } const T = x % w; return T > 0 && (x += w - T), M.__size = x, M.__cache = {}, this } function _(M) { const v = { boundary: 0, storage: 0 }; return typeof M == "number" || typeof M == "boolean" ? (v.boundary = 4, v.storage = 4) : M.isVector2 ? (v.boundary = 8, v.storage = 8) : M.isVector3 || M.isColor ? (v.boundary = 16, v.storage = 12) : M.isVector4 ? (v.boundary = 16, v.storage = 16) : M.isMatrix3 ? (v.boundary = 48, v.storage = 48) : M.isMatrix4 ? (v.boundary = 64, v.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), v } function m(M) { const v = M.target; v.removeEventListener("dispose", m); const x = a.indexOf(v.__bindingPointIndex); a.splice(x, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id] } function p() { for (const M in i) r.deleteBuffer(i[M]); a = [], i = {}, s = {} } return { bind: l, update: c, dispose: p } } class D_ { constructor(e = {}) { const { canvas: t = cc(), context: n = null, depth: i = !0, stencil: s = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1 } = e; this.isWebGLRenderer = !0; let f; if (n !== null) { if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); f = n.getContextAttributes().alpha } else f = a; const g = new Uint32Array(4), _ = new Int32Array(4); let m = null, p = null; const M = [], v = []; this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1; const x = this; let w = !1; this._outputColorSpace = kt; let T = 0, C = 0, P = null, b = -1, S = null; const L = new Qe, F = new Qe; let z = null; const H = new Pe(0); let q = 0, W = t.width, ne = t.height, k = 1, ue = null, _e = null; const ye = new Qe(0, 0, W, ne), Ve = new Qe(0, 0, W, ne); let Je = !1; const et = new Yi; let $e = !1, Y = !1; const te = new ke, ve = new R, Ce = new Qe, be = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; let qe = !1; function ot() { return P === null ? k : 1 } let I = n; function ee(E, U) { return t.getContext(E, U) } try { const E = { alpha: !0, depth: i, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u }; if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r180"), t.addEventListener("webglcontextlost", de, !1), t.addEventListener("webglcontextrestored", Me, !1), t.addEventListener("webglcontextcreationerror", se, !1), I === null) { const U = "webgl2"; if (I = ee(U, E), I === null) throw ee(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (E) { throw console.error("THREE.WebGLRenderer: " + E.message), E } let Z, $, J, ce, ie, he, Oe, Be, A, y, B, G, j, X, we, le, Ee, Te, re, ge, Ue, Re, pe, He; function D() { Z = new bp(I), Z.init(), Re = new sg(I, Z), $ = new gp(I, Z, e, Re), J = new ig(I, Z), $.reversedDepthBuffer && d && J.buffers.depth.setReversed(!0), ce = new Ap(I), ie = new Wm, he = new rg(I, Z, J, ie, $, Re, ce), Oe = new xp(x), Be = new Sp(x), A = new Pu(I), pe = new pp(I, A), y = new Ep(I, A, ce, pe), B = new Rp(I, y, A, ce), re = new wp(I, $, he), le = new _p(ie), G = new Hm(x, Oe, Be, Z, $, pe, le), j = new ug(x, ie), X = new qm, we = new Qm(Z), Te = new fp(x, Oe, Be, J, B, f, l), Ee = new tg(x, B, $), He = new dg(I, ce, $, J), ge = new mp(I, Z, ce), Ue = new Tp(I, Z, ce), ce.programs = G.programs, x.capabilities = $, x.extensions = Z, x.properties = ie, x.renderLists = X, x.shadowMap = Ee, x.state = J, x.info = ce } D(); const oe = new cg(x, I); this.xr = oe, this.getContext = function () { return I }, this.getContextAttributes = function () { return I.getContextAttributes() }, this.forceContextLoss = function () { const E = Z.get("WEBGL_lose_context"); E && E.loseContext() }, this.forceContextRestore = function () { const E = Z.get("WEBGL_lose_context"); E && E.restoreContext() }, this.getPixelRatio = function () { return k }, this.setPixelRatio = function (E) { E !== void 0 && (k = E, this.setSize(W, ne, !1)) }, this.getSize = function (E) { return E.set(W, ne) }, this.setSize = function (E, U, O = !0) { if (oe.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } W = E, ne = U, t.width = Math.floor(E * k), t.height = Math.floor(U * k), O === !0 && (t.style.width = E + "px", t.style.height = U + "px"), this.setViewport(0, 0, E, U) }, this.getDrawingBufferSize = function (E) { return E.set(W * k, ne * k).floor() }, this.setDrawingBufferSize = function (E, U, O) { W = E, ne = U, k = O, t.width = Math.floor(E * O), t.height = Math.floor(U * O), this.setViewport(0, 0, E, U) }, this.getCurrentViewport = function (E) { return E.copy(L) }, this.getViewport = function (E) { return E.copy(ye) }, this.setViewport = function (E, U, O, V) { E.isVector4 ? ye.set(E.x, E.y, E.z, E.w) : ye.set(E, U, O, V), J.viewport(L.copy(ye).multiplyScalar(k).round()) }, this.getScissor = function (E) { return E.copy(Ve) }, this.setScissor = function (E, U, O, V) { E.isVector4 ? Ve.set(E.x, E.y, E.z, E.w) : Ve.set(E, U, O, V), J.scissor(F.copy(Ve).multiplyScalar(k).round()) }, this.getScissorTest = function () { return Je }, this.setScissorTest = function (E) { J.setScissorTest(Je = E) }, this.setOpaqueSort = function (E) { ue = E }, this.setTransparentSort = function (E) { _e = E }, this.getClearColor = function (E) { return E.copy(Te.getClearColor()) }, this.setClearColor = function () { Te.setClearColor(...arguments) }, this.getClearAlpha = function () { return Te.getClearAlpha() }, this.setClearAlpha = function () { Te.setClearAlpha(...arguments) }, this.clear = function (E = !0, U = !0, O = !0) { let V = 0; if (E) { let N = !1; if (P !== null) { const ae = P.texture.format; N = ae === 1033 || ae === 1031 || ae === 1029 } if (N) { const ae = P.texture.type, me = ae === 1009 || ae === 1014 || ae === 1012 || ae === 1020 || ae === 1017 || ae === 1018, Se = Te.getClearColor(), xe = Te.getClearAlpha(), De = Se.r, Ne = Se.g, Ie = Se.b; me ? (g[0] = De, g[1] = Ne, g[2] = Ie, g[3] = xe, I.clearBufferuiv(I.COLOR, 0, g)) : (_[0] = De, _[1] = Ne, _[2] = Ie, _[3] = xe, I.clearBufferiv(I.COLOR, 0, _)) } else V |= I.COLOR_BUFFER_BIT } U && (V |= I.DEPTH_BUFFER_BIT), O && (V |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(V) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { t.removeEventListener("webglcontextlost", de, !1), t.removeEventListener("webglcontextrestored", Me, !1), t.removeEventListener("webglcontextcreationerror", se, !1), Te.dispose(), X.dispose(), we.dispose(), ie.dispose(), Oe.dispose(), Be.dispose(), B.dispose(), pe.dispose(), He.dispose(), G.dispose(), oe.dispose(), oe.removeEventListener("sessionstart", Zt), oe.removeEventListener("sessionend", ba), Sn.stop() }; function de(E) { E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), w = !0 } function Me() { console.log("THREE.WebGLRenderer: Context Restored."), w = !1; const E = ce.autoReset, U = Ee.enabled, O = Ee.autoUpdate, V = Ee.needsUpdate, N = Ee.type; D(), ce.autoReset = E, Ee.enabled = U, Ee.autoUpdate = O, Ee.needsUpdate = V, Ee.type = N } function se(E) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage) } function K(E) { const U = E.target; U.removeEventListener("dispose", K), Ae(U) } function Ae(E) { ze(E), ie.remove(E) } function ze(E) { const U = ie.get(E).programs; U !== void 0 && (U.forEach(function (O) { G.releaseProgram(O) }), E.isShaderMaterial && G.releaseShaderCache(E)) } this.renderBufferDirect = function (E, U, O, V, N, ae) { U === null && (U = be); const me = N.isMesh && N.matrixWorld.determinant() < 0, Se = zl(E, U, O, V, N); J.setMaterial(V, me); let xe = O.index, De = 1; if (V.wireframe === !0) { if (xe = y.getWireframeAttribute(O), xe === void 0) return; De = 2 } const Ne = O.drawRange, Ie = O.attributes.position; let Ye = Ne.start * De, it = (Ne.start + Ne.count) * De; ae !== null && (Ye = Math.max(Ye, ae.start * De), it = Math.min(it, (ae.start + ae.count) * De)), xe !== null ? (Ye = Math.max(Ye, 0), it = Math.min(it, xe.count)) : Ie != null && (Ye = Math.max(Ye, 0), it = Math.min(it, Ie.count)); const pt = it - Ye; if (pt < 0 || pt === 1 / 0) return; pe.setup(N, V, Se, O, xe); let ht, at = ge; if (xe !== null && (ht = A.get(xe), at = Ue, at.setIndex(ht)), N.isMesh) V.wireframe === !0 ? (J.setLineWidth(V.wireframeLinewidth * ot()), at.setMode(I.LINES)) : at.setMode(I.TRIANGLES); else if (N.isLine) { let Le = V.linewidth; Le === void 0 && (Le = 1), J.setLineWidth(Le * ot()), N.isLineSegments ? at.setMode(I.LINES) : N.isLineLoop ? at.setMode(I.LINE_LOOP) : at.setMode(I.LINE_STRIP) } else N.isPoints ? at.setMode(I.POINTS) : N.isSprite && at.setMode(I.TRIANGLES); if (N.isBatchedMesh) if (N._multiDrawInstances !== null) Gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), at.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances); else if (Z.get("WEBGL_multi_draw")) at.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount); else { const Le = N._multiDrawStarts, ut = N._multiDrawCounts, Ke = N._multiDrawCount, Ut = xe ? A.get(xe).bytesPerElement : 1, Vn = ie.get(V).currentProgram.getUniforms(); for (let Nt = 0; Nt < Ke; Nt++)Vn.setValue(I, "_gl_DrawID", Nt), at.render(Le[Nt] / Ut, ut[Nt]) } else if (N.isInstancedMesh) at.renderInstances(Ye, pt, N.count); else if (O.isInstancedBufferGeometry) { const Le = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, ut = Math.min(O.instanceCount, Le); at.renderInstances(Ye, pt, ut) } else at.render(Ye, pt) }; function lt(E, U, O) { E.transparent === !0 && E.side === 2 && E.forceSinglePass === !1 ? (E.side = 1, E.needsUpdate = !0, Zi(E, U, O), E.side = 0, E.needsUpdate = !0, Zi(E, U, O), E.side = 2) : Zi(E, U, O) } this.compile = function (E, U, O = null) { O === null && (O = E), p = we.get(O), p.init(U), v.push(p), O.traverseVisible(function (N) { N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N)) }), E !== O && E.traverseVisible(function (N) { N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N)) }), p.setupLights(); const V = new Set; return E.traverse(function (N) { if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite)) return; const ae = N.material; if (ae) if (Array.isArray(ae)) for (let me = 0; me < ae.length; me++) { const Se = ae[me]; lt(Se, O, N), V.add(Se) } else lt(ae, O, N), V.add(ae) }), p = v.pop(), V }, this.compileAsync = function (E, U, O = null) { const V = this.compile(E, U, O); return new Promise(N => { function ae() { if (V.forEach(function (me) { ie.get(me).currentProgram.isReady() && V.delete(me) }), V.size === 0) { N(E); return } setTimeout(ae, 10) } Z.get("KHR_parallel_shader_compile") !== null ? ae() : setTimeout(ae, 10) }) }; let je = null; function nn(E) { je && je(E) } function Zt() { Sn.stop() } function ba() { Sn.start() } const Sn = new Ul; Sn.setAnimationLoop(nn), typeof self < "u" && Sn.setContext(self), this.setAnimationLoop = function (E) { je = E, oe.setAnimationLoop(E), E === null ? Sn.stop() : Sn.start() }, oe.addEventListener("sessionstart", Zt), oe.addEventListener("sessionend", ba), this.render = function (E, U) { if (U !== void 0 && U.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (w === !0) return; if (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), oe.enabled === !0 && oe.isPresenting === !0 && (oe.cameraAutoUpdate === !0 && oe.updateCamera(U), U = oe.getCamera()), E.isScene === !0 && E.onBeforeRender(x, E, U, P), p = we.get(E, v.length), p.init(U), v.push(p), te.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), et.setFromProjectionMatrix(te, 2e3, U.reversedDepth), Y = this.localClippingEnabled, $e = le.init(this.clippingPlanes, Y), m = X.get(E, M.length), m.init(), M.push(m), oe.enabled === !0 && oe.isPresenting === !0) { const ae = x.xr.getDepthSensingMesh(); ae !== null && $r(ae, U, -1 / 0, x.sortObjects) } $r(E, U, 0, x.sortObjects), m.finish(), x.sortObjects === !0 && m.sort(ue, _e), qe = oe.enabled === !1 || oe.isPresenting === !1 || oe.hasDepthSensing() === !1, qe && Te.addToRenderList(m, E), this.info.render.frame++, $e === !0 && le.beginShadows(); const O = p.state.shadowsArray; Ee.render(O, E, U), $e === !0 && le.endShadows(), this.info.autoReset === !0 && this.info.reset(); const V = m.opaque, N = m.transmissive; if (p.setupLights(), U.isArrayCamera) { const ae = U.cameras; if (N.length > 0) for (let me = 0, Se = ae.length; me < Se; me++) { const xe = ae[me]; Ta(V, N, E, xe) } qe && Te.render(E); for (let me = 0, Se = ae.length; me < Se; me++) { const xe = ae[me]; Ea(m, E, xe, xe.viewport) } } else N.length > 0 && Ta(V, N, E, U), qe && Te.render(E), Ea(m, E, U); P !== null && C === 0 && (he.updateMultisampleRenderTarget(P), he.updateRenderTargetMipmap(P)), E.isScene === !0 && E.onAfterRender(x, E, U), pe.resetDefaultState(), b = -1, S = null, v.pop(), v.length > 0 ? (p = v[v.length - 1], $e === !0 && le.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, M.pop(), M.length > 0 ? m = M[M.length - 1] : m = null }; function $r(E, U, O, V) { if (E.visible === !1) return; if (E.layers.test(U.layers)) { if (E.isGroup) O = E.renderOrder; else if (E.isLOD) E.autoUpdate === !0 && E.update(U); else if (E.isLight) p.pushLight(E), E.castShadow && p.pushShadow(E); else if (E.isSprite) { if (!E.frustumCulled || et.intersectsSprite(E)) { V && Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te); const me = B.update(E), Se = E.material; Se.visible && m.push(E, me, Se, O, Ce.z, null) } } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || et.intersectsObject(E))) { const me = B.update(E), Se = E.material; if (V && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Ce.copy(E.boundingSphere.center)) : (me.boundingSphere === null && me.computeBoundingSphere(), Ce.copy(me.boundingSphere.center)), Ce.applyMatrix4(E.matrixWorld).applyMatrix4(te)), Array.isArray(Se)) { const xe = me.groups; for (let De = 0, Ne = xe.length; De < Ne; De++) { const Ie = xe[De], Ye = Se[Ie.materialIndex]; Ye && Ye.visible && m.push(E, me, Ye, O, Ce.z, Ie) } } else Se.visible && m.push(E, me, Se, O, Ce.z, null) } } const ae = E.children; for (let me = 0, Se = ae.length; me < Se; me++)$r(ae[me], U, O, V) } function Ea(E, U, O, V) { const N = E.opaque, ae = E.transmissive, me = E.transparent; p.setupLightsView(O), $e === !0 && le.setGlobalState(x.clippingPlanes, O), V && J.viewport(L.copy(V)), N.length > 0 && $i(N, U, O), ae.length > 0 && $i(ae, U, O), me.length > 0 && $i(me, U, O), J.buffers.depth.setTest(!0), J.buffers.depth.setMask(!0), J.buffers.color.setMask(!0), J.setPolygonOffset(!1) } function Ta(E, U, O, V) { if ((O.isScene === !0 ? O.overrideMaterial : null) !== null) return; p.state.transmissionRenderTarget[V.id] === void 0 && (p.state.transmissionRenderTarget[V.id] = new Fn(1, 1, { generateMipmaps: !0, type: Z.has("EXT_color_buffer_half_float") || Z.has("EXT_color_buffer_float") ? 1016 : 1009, minFilter: 1008, samples: 4, stencilBuffer: s, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: Ze.workingColorSpace })); const ae = p.state.transmissionRenderTarget[V.id], me = V.viewport || L; ae.setSize(me.z * x.transmissionResolutionScale, me.w * x.transmissionResolutionScale); const Se = x.getRenderTarget(), xe = x.getActiveCubeFace(), De = x.getActiveMipmapLevel(); x.setRenderTarget(ae), x.getClearColor(H), q = x.getClearAlpha(), q < 1 && x.setClearColor(16777215, .5), x.clear(), qe && Te.render(O); const Ne = x.toneMapping; x.toneMapping = 0; const Ie = V.viewport; if (V.viewport !== void 0 && (V.viewport = void 0), p.setupLightsView(V), $e === !0 && le.setGlobalState(x.clippingPlanes, V), $i(E, O, V), he.updateMultisampleRenderTarget(ae), he.updateRenderTargetMipmap(ae), Z.has("WEBGL_multisampled_render_to_texture") === !1) { let Ye = !1; for (let it = 0, pt = U.length; it < pt; it++) { const ht = U[it], at = ht.object, Le = ht.geometry, ut = ht.material, Ke = ht.group; if (ut.side === 2 && at.layers.test(V.layers)) { const Ut = ut.side; ut.side = 1, ut.needsUpdate = !0, Aa(at, O, V, Le, ut, Ke), ut.side = Ut, ut.needsUpdate = !0, Ye = !0 } } Ye === !0 && (he.updateMultisampleRenderTarget(ae), he.updateRenderTargetMipmap(ae)) } x.setRenderTarget(Se, xe, De), x.setClearColor(H, q), Ie !== void 0 && (V.viewport = Ie), x.toneMapping = Ne } function $i(E, U, O) { const V = U.isScene === !0 ? U.overrideMaterial : null; for (let N = 0, ae = E.length; N < ae; N++) { const me = E[N], Se = me.object, xe = me.geometry, De = me.group; let Ne = me.material; Ne.allowOverride === !0 && V !== null && (Ne = V), Se.layers.test(O.layers) && Aa(Se, U, O, xe, Ne, De) } } function Aa(E, U, O, V, N, ae) { E.onBeforeRender(x, U, O, V, N, ae), E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), N.onBeforeRender(x, U, O, V, E, ae), N.transparent === !0 && N.side === 2 && N.forceSinglePass === !1 ? (N.side = 1, N.needsUpdate = !0, x.renderBufferDirect(O, U, V, N, E, ae), N.side = 0, N.needsUpdate = !0, x.renderBufferDirect(O, U, V, N, E, ae), N.side = 2) : x.renderBufferDirect(O, U, V, N, E, ae), E.onAfterRender(x, U, O, V, N, ae) } function Zi(E, U, O) { U.isScene !== !0 && (U = be); const V = ie.get(E), N = p.state.lights, ae = p.state.shadowsArray, me = N.state.version, Se = G.getParameters(E, N.state, ae, U, O), xe = G.getProgramCacheKey(Se); let De = V.programs; V.environment = E.isMeshStandardMaterial ? U.environment : null, V.fog = U.fog, V.envMap = (E.isMeshStandardMaterial ? Be : Oe).get(E.envMap || V.environment), V.envMapRotation = V.environment !== null && E.envMap === null ? U.environmentRotation : E.envMapRotation, De === void 0 && (E.addEventListener("dispose", K), De = new Map, V.programs = De); let Ne = De.get(xe); if (Ne !== void 0) { if (V.currentProgram === Ne && V.lightsStateVersion === me) return Ra(E, Se), Ne } else Se.uniforms = G.getUniforms(E), E.onBeforeCompile(Se, x), Ne = G.acquireProgram(Se, xe), De.set(xe, Ne), V.uniforms = Se.uniforms; const Ie = V.uniforms; return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Ie.clippingPlanes = le.uniform), Ra(E, Se), V.needsLights = Gl(E), V.lightsStateVersion = me, V.needsLights && (Ie.ambientLightColor.value = N.state.ambient, Ie.lightProbe.value = N.state.probe, Ie.directionalLights.value = N.state.directional, Ie.directionalLightShadows.value = N.state.directionalShadow, Ie.spotLights.value = N.state.spot, Ie.spotLightShadows.value = N.state.spotShadow, Ie.rectAreaLights.value = N.state.rectArea, Ie.ltc_1.value = N.state.rectAreaLTC1, Ie.ltc_2.value = N.state.rectAreaLTC2, Ie.pointLights.value = N.state.point, Ie.pointLightShadows.value = N.state.pointShadow, Ie.hemisphereLights.value = N.state.hemi, Ie.directionalShadowMap.value = N.state.directionalShadowMap, Ie.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Ie.spotShadowMap.value = N.state.spotShadowMap, Ie.spotLightMatrix.value = N.state.spotLightMatrix, Ie.spotLightMap.value = N.state.spotLightMap, Ie.pointShadowMap.value = N.state.pointShadowMap, Ie.pointShadowMatrix.value = N.state.pointShadowMatrix), V.currentProgram = Ne, V.uniformsList = null, Ne } function wa(E) { if (E.uniformsList === null) { const U = E.currentProgram.getUniforms(); E.uniformsList = Fr.seqWithValue(U.seq, E.uniforms) } return E.uniformsList } function Ra(E, U) { const O = ie.get(E); O.outputColorSpace = U.outputColorSpace, O.batching = U.batching, O.batchingColor = U.batchingColor, O.instancing = U.instancing, O.instancingColor = U.instancingColor, O.instancingMorph = U.instancingMorph, O.skinning = U.skinning, O.morphTargets = U.morphTargets, O.morphNormals = U.morphNormals, O.morphColors = U.morphColors, O.morphTargetsCount = U.morphTargetsCount, O.numClippingPlanes = U.numClippingPlanes, O.numIntersection = U.numClipIntersection, O.vertexAlphas = U.vertexAlphas, O.vertexTangents = U.vertexTangents, O.toneMapping = U.toneMapping } function zl(E, U, O, V, N) { U.isScene !== !0 && (U = be), he.resetTextureUnits(); const ae = U.fog, me = V.isMeshStandardMaterial ? U.environment : null, Se = P === null ? x.outputColorSpace : P.isXRRenderTarget === !0 ? P.texture.colorSpace : hi, xe = (V.isMeshStandardMaterial ? Be : Oe).get(V.envMap || me), De = V.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, Ne = !!O.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Ie = !!O.morphAttributes.position, Ye = !!O.morphAttributes.normal, it = !!O.morphAttributes.color; let pt = 0; V.toneMapped && (P === null || P.isXRRenderTarget === !0) && (pt = x.toneMapping); const ht = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, at = ht !== void 0 ? ht.length : 0, Le = ie.get(V), ut = p.state.lights; if ($e === !0 && (Y === !0 || E !== S)) { const Tt = E === S && V.id === b; le.setState(V, E, Tt) } let Ke = !1; V.version === Le.__version ? (Le.needsLights && Le.lightsStateVersion !== ut.state.version || Le.outputColorSpace !== Se || N.isBatchedMesh && Le.batching === !1 || !N.isBatchedMesh && Le.batching === !0 || N.isBatchedMesh && Le.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Le.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Le.instancing === !1 || !N.isInstancedMesh && Le.instancing === !0 || N.isSkinnedMesh && Le.skinning === !1 || !N.isSkinnedMesh && Le.skinning === !0 || N.isInstancedMesh && Le.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Le.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Le.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Le.instancingMorph === !1 && N.morphTexture !== null || Le.envMap !== xe || V.fog === !0 && Le.fog !== ae || Le.numClippingPlanes !== void 0 && (Le.numClippingPlanes !== le.numPlanes || Le.numIntersection !== le.numIntersection) || Le.vertexAlphas !== De || Le.vertexTangents !== Ne || Le.morphTargets !== Ie || Le.morphNormals !== Ye || Le.morphColors !== it || Le.toneMapping !== pt || Le.morphTargetsCount !== at) && (Ke = !0) : (Ke = !0, Le.__version = V.version); let Ut = Le.currentProgram; Ke === !0 && (Ut = Zi(V, U, N)); let Vn = !1, Nt = !1, Mi = !1; const dt = Ut.getUniforms(), zt = Le.uniforms; if (J.useProgram(Ut.program) && (Vn = !0, Nt = !0, Mi = !0), V.id !== b && (b = V.id, Nt = !0), Vn || S !== E) { J.buffers.depth.getReversed() && E.reversedDepth !== !0 && (E._reversedDepth = !0, E.updateProjectionMatrix()), dt.setValue(I, "projectionMatrix", E.projectionMatrix), dt.setValue(I, "viewMatrix", E.matrixWorldInverse); const It = dt.map.cameraPosition; It !== void 0 && It.setValue(I, ve.setFromMatrixPosition(E.matrixWorld)), $.logarithmicDepthBuffer && dt.setValue(I, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && dt.setValue(I, "isOrthographic", E.isOrthographicCamera === !0), S !== E && (S = E, Nt = !0, Mi = !0) } if (N.isSkinnedMesh) { dt.setOptional(I, N, "bindMatrix"), dt.setOptional(I, N, "bindMatrixInverse"); const Tt = N.skeleton; Tt && (Tt.boneTexture === null && Tt.computeBoneTexture(), dt.setValue(I, "boneTexture", Tt.boneTexture, he)) } N.isBatchedMesh && (dt.setOptional(I, N, "batchingTexture"), dt.setValue(I, "batchingTexture", N._matricesTexture, he), dt.setOptional(I, N, "batchingIdTexture"), dt.setValue(I, "batchingIdTexture", N._indirectTexture, he), dt.setOptional(I, N, "batchingColorTexture"), N._colorsTexture !== null && dt.setValue(I, "batchingColorTexture", N._colorsTexture, he)); const Vt = O.morphAttributes; if ((Vt.position !== void 0 || Vt.normal !== void 0 || Vt.color !== void 0) && re.update(N, O, Ut), (Nt || Le.receiveShadow !== N.receiveShadow) && (Le.receiveShadow = N.receiveShadow, dt.setValue(I, "receiveShadow", N.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (zt.envMap.value = xe, zt.flipEnvMap.value = xe.isCubeTexture && xe.isRenderTargetTexture === !1 ? -1 : 1), V.isMeshStandardMaterial && V.envMap === null && U.environment !== null && (zt.envMapIntensity.value = U.environmentIntensity), Nt && (dt.setValue(I, "toneMappingExposure", x.toneMappingExposure), Le.needsLights && Vl(zt, Mi), ae && V.fog === !0 && j.refreshFogUniforms(zt, ae), j.refreshMaterialUniforms(zt, V, k, ne, p.state.transmissionRenderTarget[E.id]), Fr.upload(I, wa(Le), zt, he)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (Fr.upload(I, wa(Le), zt, he), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && dt.setValue(I, "center", N.center), dt.setValue(I, "modelViewMatrix", N.modelViewMatrix), dt.setValue(I, "normalMatrix", N.normalMatrix), dt.setValue(I, "modelMatrix", N.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) { const Tt = V.uniformsGroups; for (let It = 0, Zr = Tt.length; It < Zr; It++) { const bn = Tt[It]; He.update(bn, Ut), He.bind(bn, Ut) } } return Ut } function Vl(E, U) { E.ambientLightColor.needsUpdate = U, E.lightProbe.needsUpdate = U, E.directionalLights.needsUpdate = U, E.directionalLightShadows.needsUpdate = U, E.pointLights.needsUpdate = U, E.pointLightShadows.needsUpdate = U, E.spotLights.needsUpdate = U, E.spotLightShadows.needsUpdate = U, E.rectAreaLights.needsUpdate = U, E.hemisphereLights.needsUpdate = U } function Gl(E) { return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0 } this.getActiveCubeFace = function () { return T }, this.getActiveMipmapLevel = function () { return C }, this.getRenderTarget = function () { return P }, this.setRenderTargetTextures = function (E, U, O) { const V = ie.get(E); V.__autoAllocateDepthBuffer = E.resolveDepthBuffer === !1, V.__autoAllocateDepthBuffer === !1 && (V.__useRenderToTexture = !1), ie.get(E.texture).__webglTexture = U, ie.get(E.depthTexture).__webglTexture = V.__autoAllocateDepthBuffer ? void 0 : O, V.__hasExternalTextures = !0 }, this.setRenderTargetFramebuffer = function (E, U) { const O = ie.get(E); O.__webglFramebuffer = U, O.__useDefaultFramebuffer = U === void 0 }; const kl = I.createFramebuffer(); this.setRenderTarget = function (E, U = 0, O = 0) { P = E, T = U, C = O; let V = !0, N = null, ae = !1, me = !1; if (E) { const xe = ie.get(E); if (xe.__useDefaultFramebuffer !== void 0) J.bindFramebuffer(I.FRAMEBUFFER, null), V = !1; else if (xe.__webglFramebuffer === void 0) he.setupRenderTarget(E); else if (xe.__hasExternalTextures) he.rebindTextures(E, ie.get(E.texture).__webglTexture, ie.get(E.depthTexture).__webglTexture); else if (E.depthBuffer) { const Ie = E.depthTexture; if (xe.__boundDepthTexture !== Ie) { if (Ie !== null && ie.has(Ie) && (E.width !== Ie.image.width || E.height !== Ie.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."); he.setupDepthRenderbuffer(E) } } const De = E.texture; (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (me = !0); const Ne = ie.get(E).__webglFramebuffer; E.isWebGLCubeRenderTarget ? (Array.isArray(Ne[U]) ? N = Ne[U][O] : N = Ne[U], ae = !0) : E.samples > 0 && he.useMultisampledRTT(E) === !1 ? N = ie.get(E).__webglMultisampledFramebuffer : Array.isArray(Ne) ? N = Ne[O] : N = Ne, L.copy(E.viewport), F.copy(E.scissor), z = E.scissorTest } else L.copy(ye).multiplyScalar(k).floor(), F.copy(Ve).multiplyScalar(k).floor(), z = Je; if (O !== 0 && (N = kl), J.bindFramebuffer(I.FRAMEBUFFER, N) && V && J.drawBuffers(E, N), J.viewport(L), J.scissor(F), J.setScissorTest(z), ae) { const xe = ie.get(E.texture); I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + U, xe.__webglTexture, O) } else if (me) { const xe = U; for (let De = 0; De < E.textures.length; De++) { const Ne = ie.get(E.textures[De]); I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0 + De, Ne.__webglTexture, O, xe) } } else if (E !== null && O !== 0) { const xe = ie.get(E.texture); I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, xe.__webglTexture, O) } b = -1 }, this.readRenderTargetPixels = function (E, U, O, V, N, ae, me, Se = 0) { if (!(E && E.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let xe = ie.get(E).__webglFramebuffer; if (E.isWebGLCubeRenderTarget && me !== void 0 && (xe = xe[me]), xe) { J.bindFramebuffer(I.FRAMEBUFFER, xe); try { const De = E.textures[Se], Ne = De.format, Ie = De.type; if (!$.textureFormatReadable(Ne)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!$.textureTypeReadable(Ie)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } U >= 0 && U <= E.width - V && O >= 0 && O <= E.height - N && (E.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + Se), I.readPixels(U, O, V, N, Re.convert(Ne), Re.convert(Ie), ae)) } finally { const De = P !== null ? ie.get(P).__webglFramebuffer : null; J.bindFramebuffer(I.FRAMEBUFFER, De) } } }, this.readRenderTargetPixelsAsync = async function (E, U, O, V, N, ae, me, Se = 0) { if (!(E && E.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let xe = ie.get(E).__webglFramebuffer; if (E.isWebGLCubeRenderTarget && me !== void 0 && (xe = xe[me]), xe) if (U >= 0 && U <= E.width - V && O >= 0 && O <= E.height - N) { J.bindFramebuffer(I.FRAMEBUFFER, xe); const De = E.textures[Se], Ne = De.format, Ie = De.type; if (!$.textureFormatReadable(Ne)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."); if (!$.textureTypeReadable(Ie)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."); const Ye = I.createBuffer(); I.bindBuffer(I.PIXEL_PACK_BUFFER, Ye), I.bufferData(I.PIXEL_PACK_BUFFER, ae.byteLength, I.STREAM_READ), E.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + Se), I.readPixels(U, O, V, N, Re.convert(Ne), Re.convert(Ie), 0); const it = P !== null ? ie.get(P).__webglFramebuffer : null; J.bindFramebuffer(I.FRAMEBUFFER, it); const pt = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0); return I.flush(), await hc(I, pt, 4), I.bindBuffer(I.PIXEL_PACK_BUFFER, Ye), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, ae), I.deleteBuffer(Ye), I.deleteSync(pt), ae } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.") }, this.copyFramebufferToTexture = function (E, U = null, O = 0) { const V = Math.pow(2, -O), N = Math.floor(E.image.width * V), ae = Math.floor(E.image.height * V), me = U !== null ? U.x : 0, Se = U !== null ? U.y : 0; he.setTexture2D(E, 0), I.copyTexSubImage2D(I.TEXTURE_2D, O, 0, 0, me, Se, N, ae), J.unbindTexture() }; const Hl = I.createFramebuffer(), Wl = I.createFramebuffer(); this.copyTextureToTexture = function (E, U, O = null, V = null, N = 0, ae = null) { ae === null && (N !== 0 ? (Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ae = N, N = 0) : ae = 0); let me, Se, xe, De, Ne, Ie, Ye, it, pt; const ht = E.isCompressedTexture ? E.mipmaps[ae] : E.image; if (O !== null) me = O.max.x - O.min.x, Se = O.max.y - O.min.y, xe = O.isBox3 ? O.max.z - O.min.z : 1, De = O.min.x, Ne = O.min.y, Ie = O.isBox3 ? O.min.z : 0; else { const Vt = Math.pow(2, -N); me = Math.floor(ht.width * Vt), Se = Math.floor(ht.height * Vt), E.isDataArrayTexture ? xe = ht.depth : E.isData3DTexture ? xe = Math.floor(ht.depth * Vt) : xe = 1, De = 0, Ne = 0, Ie = 0 } V !== null ? (Ye = V.x, it = V.y, pt = V.z) : (Ye = 0, it = 0, pt = 0); const at = Re.convert(U.format), Le = Re.convert(U.type); let ut; U.isData3DTexture ? (he.setTexture3D(U, 0), ut = I.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (he.setTexture2DArray(U, 0), ut = I.TEXTURE_2D_ARRAY) : (he.setTexture2D(U, 0), ut = I.TEXTURE_2D), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, U.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, U.unpackAlignment); const Ke = I.getParameter(I.UNPACK_ROW_LENGTH), Ut = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Vn = I.getParameter(I.UNPACK_SKIP_PIXELS), Nt = I.getParameter(I.UNPACK_SKIP_ROWS), Mi = I.getParameter(I.UNPACK_SKIP_IMAGES); I.pixelStorei(I.UNPACK_ROW_LENGTH, ht.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, ht.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, De), I.pixelStorei(I.UNPACK_SKIP_ROWS, Ne), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Ie); const dt = E.isDataArrayTexture || E.isData3DTexture, zt = U.isDataArrayTexture || U.isData3DTexture; if (E.isDepthTexture) { const Vt = ie.get(E), Tt = ie.get(U), It = ie.get(Vt.__renderTarget), Zr = ie.get(Tt.__renderTarget); J.bindFramebuffer(I.READ_FRAMEBUFFER, It.__webglFramebuffer), J.bindFramebuffer(I.DRAW_FRAMEBUFFER, Zr.__webglFramebuffer); for (let bn = 0; bn < xe; bn++)dt && (I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, ie.get(E).__webglTexture, N, Ie + bn), I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, ie.get(U).__webglTexture, ae, pt + bn)), I.blitFramebuffer(De, Ne, me, Se, Ye, it, me, Se, I.DEPTH_BUFFER_BIT, I.NEAREST); J.bindFramebuffer(I.READ_FRAMEBUFFER, null), J.bindFramebuffer(I.DRAW_FRAMEBUFFER, null) } else if (N !== 0 || E.isRenderTargetTexture || ie.has(E)) { const Vt = ie.get(E), Tt = ie.get(U); J.bindFramebuffer(I.READ_FRAMEBUFFER, Hl), J.bindFramebuffer(I.DRAW_FRAMEBUFFER, Wl); for (let It = 0; It < xe; It++)dt ? I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Vt.__webglTexture, N, Ie + It) : I.framebufferTexture2D(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, Vt.__webglTexture, N), zt ? I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Tt.__webglTexture, ae, pt + It) : I.framebufferTexture2D(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, Tt.__webglTexture, ae), N !== 0 ? I.blitFramebuffer(De, Ne, me, Se, Ye, it, me, Se, I.COLOR_BUFFER_BIT, I.NEAREST) : zt ? I.copyTexSubImage3D(ut, ae, Ye, it, pt + It, De, Ne, me, Se) : I.copyTexSubImage2D(ut, ae, Ye, it, De, Ne, me, Se); J.bindFramebuffer(I.READ_FRAMEBUFFER, null), J.bindFramebuffer(I.DRAW_FRAMEBUFFER, null) } else zt ? E.isDataTexture || E.isData3DTexture ? I.texSubImage3D(ut, ae, Ye, it, pt, me, Se, xe, at, Le, ht.data) : U.isCompressedArrayTexture ? I.compressedTexSubImage3D(ut, ae, Ye, it, pt, me, Se, xe, at, ht.data) : I.texSubImage3D(ut, ae, Ye, it, pt, me, Se, xe, at, Le, ht) : E.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, ae, Ye, it, me, Se, at, Le, ht.data) : E.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, ae, Ye, it, ht.width, ht.height, at, ht.data) : I.texSubImage2D(I.TEXTURE_2D, ae, Ye, it, me, Se, at, Le, ht); I.pixelStorei(I.UNPACK_ROW_LENGTH, Ke), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ut), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Vn), I.pixelStorei(I.UNPACK_SKIP_ROWS, Nt), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Mi), ae === 0 && U.generateMipmaps && I.generateMipmap(ut), J.unbindTexture() }, this.initRenderTarget = function (E) { ie.get(E).__webglFramebuffer === void 0 && he.setupRenderTarget(E) }, this.initTexture = function (E) { E.isCubeTexture ? he.setTextureCube(E, 0) : E.isData3DTexture ? he.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? he.setTexture2DArray(E, 0) : he.setTexture2D(E, 0), J.unbindTexture() }, this.resetState = function () { T = 0, C = 0, P = null, J.reset(), pe.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return 2e3 } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const t = this.getContext(); t.drawingBufferColorSpace = Ze._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ze._getUnpackColorSpace() } } export { Q as $, gg as A, xu as B, cl as C, ru as D, v_ as E, Fe as F, Ui as G, A_ as H, Xc as I, kt as J, Pg as K, Ug as L, Rt as M, y_ as N, xa as O, Ji as P, Xr as Q, Yg as R, jt as S, w_ as T, Lc as U, R as V, Fn as W, Rg as X, Fg as Y, Jg as Z, zg as _, ki as a, Ln as a$, rh as a0, pl as a1, gt as a2, ta as a3, Wt as a4, gc as a5, Bg as a6, Vg as a7, b_ as a8, Mg as a9, lu as aA, ea as aB, oa as aC, gi as aD, da as aE, _i as aF, au as aG, D_ as aH, fg as aI, $s as aJ, zn as aK, Fc as aL, Nc as aM, Fo as aN, wg as aO, hu as aP, Xs as aQ, I_ as aR, L_ as aS, pa as aT, la as aU, bl as aV, oh as aW, ga as aX, Et as aY, pg as aZ, mg as a_, Sg as aa, bg as ab, Ia as ac, Hh as ad, Wh as ae, Xh as af, Il as ag, ml as ah, ul as ai, Jh as aj, Wr as ak, Vh as al, x_ as am, _g as an, Eg as ao, qg as ap, Gg as aq, Hg as ar, Wg as as, Xg as at, Qs as au, Ag as av, ct as aw, yg as ax, vg as ay, xg as az, yt as b, m_ as b0, __ as b1, g_ as b2, Ze as b3, Mn as b4, Hr as b5, T_ as b6, E_ as b7, gl as b8, hi as b9, Dg as bA, Ng as bB, Ig as bC, st as bD, kc as bE, ih as bF, Zs as bG, tu as bH, fl as bI, f_ as bJ, p_ as bK, fi as bL, kr as bM, Gr as bN, Yr as bO, qr as bP, sa as bQ, ua as bR, t_ as ba, e_ as bb, o_ as bc, u_ as bd, d_ as be, c_ as bf, h_ as bg, Kg as bh, $g as bi, Zg as bj, a_ as bk, s_ as bl, i_ as bm, r_ as bn, kg as bo, Lg as bp, jg as bq, n_ as br, Qg as bs, l_ as bt, Gs as bu, R_ as bv, Cg as bw, Ao as bx, C_ as by, hl as bz, kh as c, qs as d, Ct as e, Xe as f, nt as g, ke as h, S_ as i, Oc as j, Dt as k, Rl as l, qh as m, Qe as n, du as o, en as p, Lt as q, _l as r, Og as s, M_ as t, yn as u, P_ as v, Yi as w, Pe as x, Tg as y, Cl as z };
