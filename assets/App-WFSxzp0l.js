const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ActivityPanel-g_ZufjRB.js", "assets/index-DmVWTH9b.js", "assets/react-D-vXKkXw.js", "assets/index-BBq7hkAk.css", "assets/ActivityPanel-CXOWwhn6.css", "assets/LaptopPanel-kDWQ_D6O.js", "assets/LaptopPanel-DfvxuvHW.css", "assets/StallPanel-b1VUk_Fb.js", "assets/engine-x8HDQp8W.js", "assets/three-CekUThHJ.js", "assets/BufferGeometryUtils-7h4j3Em2.js", "assets/stall-BlztlQCG.js", "assets/types-B6TbjEfu.js", "assets/prepared-rooms-DjOS5PQk.js", "assets/photo-backdrops-DDUsTx7f.js", "assets/static-shadows-nnm2sGii.js", "assets/interior-materials-cOTlI4YR.js", "assets/Arcade-BbdCp5rf.js", "assets/Arcade-Dl3osAH0.css", "assets/PhotoBooth-NhhWbmMV.js", "assets/PhotoBooth-DhLSQ6bD.css", "assets/stall-inspection-DmqXhp7o.js", "assets/laptop-focus-E47woO5e.js", "assets/interior-DQ1YXADg.js"]))) => i.map(i => d[i]);
import {
    r as h,
    t as s,
    g as j,
    j as a,
    a as Ra,
    c as Pa,
    b as I,
    o as fn,
    P as Ot,
    D as Ca,
    d as ma,
    _ as X,
    p as gn,
    e as Lt,
    f as yn,
    s as xn
} from "./index-DmVWTH9b.js";

function It(e, t, n = 7) {
    const [r, o] = h.useState(!1), i = h.useRef(0), c = h.useRef(null), l = h.useRef(t);
    return l.current = t, h.useEffect(() => {
        if (e === null) {
            c.current = null, i.current = 0, o(!1);
            return
        }
        e !== c.current && (c.current = e, i.current = n, o(!0))
    }, [e, n]), h.useEffect(() => {
        let f = performance.now();
        const k = window.setInterval(() => {
            const p = performance.now(),
                u = Math.min(.25, (p - f) / 1e3);
            f = p, !document.hidden && !l.current && i.current > 0 && (i.current = Math.max(0, i.current - u), i.current === 0 && o(!1))
        }, 100);
        return () => clearInterval(k)
    }, []), r
}
const bn = [
        ["g01", "Krem Hangat", "Warm Cream", "Cardigan krem, rok coral, dan rambut bob hitam.", "Cream cardigan, coral skirt and a black bob."],
        ["g02", "Sage Anggun", "Graceful Sage", "Hijab sage, blus gading, dan rok panjang beige.", "Sage hijab, ivory blouse and a long beige skirt."],
        ["g03", "Denim Ceria", "Cheerful Denim", "Jaket denim, celana beige, dan rambut kuncir.", "Denim jacket, beige trousers and a ponytail."],
        ["g04", "Coral Manis", "Sweet Coral", "Gaun coral dan rambut panjang bergelombang.", "Coral dress and long wavy hair."],
        ["g05", "Lavender Tenang", "Calm Lavender", "Sweater lavender, kacamata, dan rambut sebahu.", "Lavender sweater, glasses and shoulder-length hair."],
        ["g06", "Mustard Aktif", "Lively Mustard", "Overshirt mustard, celana olive, dan rambut ikal pendek.", "Mustard overshirt, olive trousers and short curly hair."],
        ["g07", "Biru Senja", "Twilight Blue", "Jaket navy, rok krem, dan rambut panjang lurus.", "Navy jacket, cream skirt and long straight hair."],
        ["b01", "Sage Santai", "Easy Sage", "Overshirt krem, celana sage, dan rambut belah samping.", "Cream overshirt, sage trousers and side-parted hair."],
        ["b02", "Navy Hangat", "Warm Navy", "Sweater navy, celana krem, dan rambut bergelombang.", "Navy sweater, cream trousers and wavy hair."],
        ["b03", "Terracotta", "Terracotta", "Jaket terracotta, kaus gelap, dan celana khaki.", "Terracotta jacket, dark tee and khaki trousers."],
        ["b04", "Olive Klasik", "Classic Olive", "Kemeja olive, celana gelap, dan kacamata bulat.", "Olive shirt, dark trousers and round glasses."],
        ["b05", "Biru Langit", "Sky Blue", "Kemeja biru muda berlengan gulung dan rambut ikal.", "Light blue shirt with rolled sleeves and curly hair."],
        ["b06", "Pasir Hangat", "Warm Sand", "Sweater beige, celana cokelat, dan rambut pendek.", "Beige sweater, brown trousers and short hair."],
        ["b07", "Marun Santai", "Easy Maroon", "Cardigan marun, celana charcoal, dan rambut belah tengah.", "Maroon cardigan, charcoal trousers and center-parted hair."]
    ],
    wn = {
        "walk-front": {
            start: 0,
            frames: 8,
            fps: 9
        },
        "walk-left": {
            start: 8,
            frames: 8,
            fps: 9
        },
        "walk-right": {
            start: 16,
            frames: 8,
            fps: 9
        },
        "walk-back": {
            start: 24,
            frames: 8,
            fps: 9
        },
        "idle-front": {
            start: 32,
            frames: 2,
            fps: 1.2,
            durations: [4.9, .12]
        },
        "idle-left": {
            start: 34,
            frames: 2,
            fps: 1.2,
            durations: [4.9, .12]
        },
        "idle-right": {
            start: 36,
            frames: 2,
            fps: 1.2,
            durations: [4.9, .12]
        },
        "idle-back": {
            start: 38,
            frames: 2,
            fps: 1.2,
            durations: [4.9, .12]
        },
        greet: {
            start: 40,
            frames: 4,
            fps: 4,
            sequence: [40, 41, 42, 43, 40],
            durations: [.12, .22, .28, .22, .26],
            loop: !1
        },
        happy: {
            start: 44,
            frames: 4,
            fps: 4,
            sequence: [32, 44, 46, 47, 32],
            durations: [.12, .18, .24, .2, .16],
            loop: !1
        },
        nod: {
            start: 45,
            frames: 1,
            fps: 4,
            sequence: [32, 45, 32],
            durations: [.12, .32, .26],
            loop: !1
        }
    },
    Fe = bn.map(([e, t, n, r, o]) => ({
        id: e,
        group: e.startsWith("g") ? "f" : "m",
        get label() {
            return s(t, n)
        },
        get description() {
            return s(r, o)
        },
        atlas: `./assets/birthday/avatars/${e}.webp`,
        thumbnail: `./assets/birthday/avatars/${e}-thumb.webp`,
        columns: 8,
        rows: 6,
        cellWidth: 96,
        cellHeight: 128,
        footY: 120,
        height: 2.3,
        animations: wn
    })),
    oe = e => Fe.find(t => t.id === e),
    Ce = e => Fe.some(t => t.id === e),
    _t = () => Ce(j.senderAvatar) ? j.senderAvatar : null,
    Oa = () => Ce(j.recipientAvatar) ? j.recipientAvatar : null,
    La = () => ({
        recipient: Oa() ?? "g01",
        sender: _t() ?? "b01",
        confirmed: !1
    });

function Wt(e) {
    const t = La();
    if (!e || typeof e != "object") return t;
    const n = e;
    return t.confirmed = n.confirmed === !0 && Ce(n.recipient) && Ce(n.sender), Ce(n.recipient) && (t.confirmed || !Oa()) && (t.recipient = n.recipient), Ce(n.sender) && (t.sender = n.sender), t.sender = _t() ?? t.sender, t
}

function jn(e, t) {
    const n = e.sequence ?? Array.from({
            length: e.frames
        }, (c, l) => e.start + l),
        r = e.durations ?? n.map(() => 1 / e.fps),
        o = r.reduce((c, l) => c + l, 0);
    let i = Math.max(0, t);
    if (e.loop === !1 && i >= o) return n[n.length - 1];
    i %= o;
    for (let c = 0; c < n.length; c++) {
        if (i < r[c] - 1e-9) return n[c];
        i -= r[c]
    }
    return n[n.length - 1]
}
const Ia = {
        k: "#3b2a1e",
        e: "#8a6d55",
        w: "#ffffff",
        W: "#fff6d8",
        y: "#ffd23f",
        Y: "#d98c1f",
        o: "#8f4f12",
        r: "#ec3b4f",
        R: "#9c1d3a",
        p: "#ff92b6",
        P: "#d3557f",
        g: "#62d26a",
        G: "#2a8a47",
        b: "#5cc0ff",
        B: "#2f6bd3",
        n: "#b4733a",
        N: "#6b3a17",
        c: "#f8e9c4",
        C: "#d6b177",
        s: "#d4d8ea",
        S: "#7f86ab",
        v: "#b18bff",
        V: "#6c47cc",
        t: "#58d6c1",
        T: "#22897c"
    },
    pa = e => e.map(t => [...t].reverse().join("")),
    Yt = {
        arrowRight: ["................", "................", "................", "........#.......", "........##......", "........###.....", "........####....", "..###########...", "..###########...", "........####....", "........###.....", "........##......", "........#.......", "................", "................", "................"],
        chevronRight: ["................", "................", ".....##.........", ".....###........", "......###.......", ".......###......", "........###.....", ".........###....", ".........###....", "........###.....", ".......###......", "......###.......", ".....###........", ".....##.........", "................", "................"],
        close: ["................", "................", "..##........##..", "..###......###..", "...###....###...", "....###..###....", ".....######.....", "......####......", "......####......", ".....######.....", "....###..###....", "...###....###...", "..###......###..", "..##........##..", "................", "................"],
        check: ["................", "................", "................", "............##..", "...........###..", "..........###...", ".........###....", "..##....###.....", "..###..###......", "...######.......", "....####........", ".....##.........", "................", "................", "................", "................"],
        gear: ["................", "......####......", "......####......", "..##.######.##..", "..############..", "...###....###...", ".####......####.", ".####......####.", ".####......####.", ".####......####.", "...###....###...", "..############..", "..##.######.##..", "......####......", "......####......", "................"],
        soundOn: ["................", "................", ".......#........", "......##....#...", ".....###.....#..", ".#######..#...#.", ".#######...#..#.", ".#######...#..#.", ".#######...#..#.", ".#######...#..#.", ".#######..#...#.", ".....###.....#..", "......##....#...", ".......#........", "................", "................"],
        soundOff: ["................", "................", ".......#........", "......##........", ".....###........", ".#######.#....#.", ".#######..#..#..", ".#######...##...", ".#######...##...", ".#######..#..#..", ".#######.#....#.", ".....###........", "......##........", ".......#........", "................", "................"],
        camera: ["................", "................", "................", ".....####.......", "..############..", ".##############.", ".#####....#####.", ".####..##..####.", ".####.####.####.", ".####.####.####.", ".####..##..####.", ".#####....#####.", ".##############.", "..############..", "................", "................"],
        search: ["................", "....######......", "...########.....", "..###....###....", ".###......###...", ".##........##...", ".##........##...", ".##........##...", ".###......###...", "..###....####...", "...##########...", "....######.###..", "...........####.", "............####", ".............##.", "................"],
        images: ["................", "................", "................", "################", "#..........##..#", "#..........##..#", "#..............#", "#.....#........#", "#....###.......#", "#...#####...#..#", "#..#######.###.#", "#.##############", "################", "................", "................", "................"],
        music: ["................", "................", ".....#########..", ".....#########..", ".....##.....##..", ".....##.....##..", ".....##.....##..", ".....##.....##..", ".....##.....##..", ".....##.....##..", "..#####..#####..", ".######.######..", ".######.######..", "..####...####...", "................", "................"],
        play: ["................", "................", "...##...........", "...####.........", "...######.......", "...########.....", "...##########...", "...###########..", "...###########..", "...##########...", "...########.....", "...######.......", "...####.........", "...##...........", "................", "................"],
        pause: ["................", "................", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "...####..####...", "................", "................"],
        expand: ["................", ".#####....#####.", ".#####....#####.", ".##..........##.", ".##..........##.", ".##..........##.", "................", "................", "................", "................", ".##..........##.", ".##..........##.", ".##..........##.", ".#####....#####.", ".#####....#####.", "................"],
        shrink: ["................", "....##....##....", "....##....##....", "....##....##....", ".#####....#####.", ".#####....#####.", "................", "................", "................", "................", ".#####....#####.", ".#####....#####.", "....##....##....", "....##....##....", "....##....##....", "................"],
        reset: ["................", "......######....", "....##########..", "...###......###.", "..###........###", "######........##", ".####.........##", "..##..........##", "..............##", "..............##", "..##.........###", "..###.......###.", "...####...####..", "....#########...", "......#####.....", "................"],
        bookOpen: ["................", "................", "................", ".######..######.", "#......##......#", "#.####.##.####.#", "#......##......#", "#.####.##.####.#", "#......##......#", "#.###..##..###.#", "#......##......#", "#######..#######", ".......##.......", "................", "................", "................"],
        sparkle: [".............#..", "............###.", "......#......#..", "......#.........", "......#.........", ".....###........", ".....###........", "...#######......", "#############...", "...#######......", ".....###........", ".....###........", "......#.........", "......#.........", "......#.........", "................"],
        battery: ["................", "................", "................", "................", ".#############..", ".#...........#..", ".#.###.###.#.##.", ".#.###.###.#.##.", ".#.###.###.#.##.", ".#...........#..", ".#############..", "................", "................", "................", "................", "................"],
        heart: ["................", "................", "...kkk...kkk....", "..krrrk.krrrk...", ".krwwrrkrrrrrk..", ".krwrrrrrrrrrk..", ".krrrrrrrrrrrk..", ".krrrrrrrrrrRk..", "..krrrrrrrrRk...", "...krrrrrrRk....", "....krrrrRk.....", ".....krrRk......", "......kRk.......", ".......k........", "................", "................"],
        heartEmpty: ["................", "................", "...kkk...kkk....", "..keeek.keeek...", ".keeeeekeeeeek..", ".keeeeeeeeeeek..", ".keeeeeeeeeeek..", ".keeeeeeeeeeek..", "..keeeeeeeeek...", "...keeeeeeek....", "....keeeeek.....", ".....keeek......", "......kek.......", ".......k........", "................", "................"],
        star: [".......k........", "......kyk.......", "......kyk.......", ".....kyyyk......", "kkkkkkywykkkkkk.", ".kyyyyyyyyyyyk..", "..kyyyyyyyyYk...", "...kyyyyyyYk....", "....kyyyyyYk....", "....kyyyyyYk....", "...kyyykyyYYk...", "...kyyk.kyYYk...", "..kyyk...kYYYk..", "..kyk.....kYYk..", "..kk.......kkk..", "................"],
        mail: ["................", "................", "................", "kkkkkkkkkkkkkkkk", "kCccccccccccccCk", "kcCccccccccccCck", "kccCccccccccCcck", "kcccCccccccCccck", "kccccCccccCcccck", "kcccccCrrCccccck", "kccCccrprrccCcck", "kcCcccrrrrcccCck", "kCcccccrrcccccCk", "kkkkkkkkkkkkkkkk", "................", "................"],
        key: ["................", "................", "................", "..kkk...........", ".kyyyk..........", "kyykyyk.........", "kyk.kykkkkkkkkk.", "kyk.kyyyyyyyyyyk", "kyykyyYYYYYYYYYk", ".kYYYkkkkkkYYkYk", "..kkk.....kYkkYk", "..........kYk.kk", "..........kkk...", "................", "................", "................"],
        lock: ["................", ".....kkkkkk.....", "....kssssssk....", "...ksskkkkSSk...", "...ksk....kSk...", "...ksk....kSk...", "...ksk....kSk...", ".kkkkkkkkkkkkkk.", ".kywyyyyyyyyyYk.", ".kwyyyykkyyyyYk.", ".kyyyyykkyyyyYk.", ".kyyyyyykyyyyYk.", ".kyyyyyykyyyyYk.", ".kYYYYYYYYYYYYk.", ".kkkkkkkkkkkkkk.", "................"],
        flower: ["................", "......kkkk......", ".....kppppk.....", "..kkkkpwppkkkk..", ".kppppkppkppppk.", ".kpwppkkkkpppPk.", ".kpppkyyyykppPk.", "..kkkkywyYkkkk..", ".kpppkyyYYkpppk.", ".kpppPkkkkkpPPk.", "..kkkkpppPkkkk..", ".....kpPPPk.....", ".....gkkkkg.....", ".....Gg.gGG.....", "......Gggg......", ".......GG......."],
        leaf: ["................", "............kkk.", ".........kkkggk.", ".......kkgggggk.", "......kgggggggk.", ".....kggggggGgk.", "....kggggggGggk.", "....kgggggGgggk.", "...kggggGGgggk..", "...kgggGgggggk..", "...kggGgggggk...", "..kgGGgggggk....", "..kGkkkkkkk.....", ".kGk............", ".kk.............", "................"],
        journal: ["................", "..kkkkkkkkkkkk..", ".kNnnnnnnnnnnnk.", ".kNnnnnnnnnnnnk.", ".kNnnkkkkkknnnk.", ".kNnnkyyyykknnk.", ".kNnnkyWyyyknnk.", ".kNnnkyyyYYknnk.", ".kNnnkkkkkkknnk.", ".kNnnnnnnnnnnnk.", ".kNnnnnnnnnnnnk.", ".kNnnnnnnnnnnnk.", ".kNkkkkkkkkkkkk.", ".kNcccccccccccck", "..kkkkkkkkrrkkk.", "..........rk...."],
        gift: ["................", "....kk....kk....", "...krrk..krrk...", "...kkrrkkrrkk...", ".kkkkkkrrkkkkkk.", ".krrrrrrrrrrrrk.", ".kRRRRRrrRRRRRk.", ".kkkkkkrrkkkkkk.", "..kyyyyrryyyyk..", "..kyWyyrryyyYk..", "..kyyyyrryyyYk..", "..kyyyyrryyyYk..", "..kyyyyrryyyYk..", "..kYYYYrrYYYYk..", "..kkkkkkkkkkkk..", "................"],
        house: ["................", ".......kk.......", "......krrk......", ".....krrrrk.kk..", "....krrrrrrkNk..", "...krrrrrrrrkk..", "..kRRRRRRRRRRk..", ".kkkkkkkkkkkkkk.", "..kccccccccccck.", "..kcbbkccnnnnck.", "..kcbbkccnnnnck.", "..kckkkccnnnnck.", "..kccccccnnyNck.", "..kccccccnnnnck.", ".kkkkkkkkkkkkkkk", "................"],
        cake: ["................", ".......y........", "......yWy.......", ".......y........", ".......k........", ".......p........", "..kkkkkpkkkkkk..", ".kcccccccccccck.", ".kpcpppcpppcppk.", ".kpppppppppppPk.", ".kppPpppPpppPPk.", ".kcccccccccccck.", ".kppppppppppPPk.", ".kPPPPPPPPPPPPk.", "kssssssssssssssk", ".kkkkkkkkkkkkkk."],
        memo: ["................", ".......rr.......", "......rRRr......", ".kkkkkkRRkkkkkk.", ".kyyyyyyyyyyyyk.", ".kyyyyyyyyyyyyk.", ".kyYYYYYYYYYyyk.", ".kyyyyyyyyyyyyk.", ".kyYYYYYYYYYyyk.", ".kyyyyyyyyyyyyk.", ".kyYYYYYYyyyyyk.", ".kyyyyyyyyyyyYk.", ".kyyyyyyyyyyYYk.", ".kyyyyyyyyyYkkk.", ".kkkkkkkkkkkk...", "................"],
        photo: ["................", "................", ".kkkkkkkkkkkkkk.", ".kwwwwwwwwwwwwk.", ".kwbbbbbbbbyywk.", ".kwbbbbbbbbyywk.", ".kwbbbbbbbbbbwk.", ".kwbbbbgbbbbbwk.", ".kwbbbgggbbbbwk.", ".kwbbgggggbgbwk.", ".kwbgggggggggwk.", ".kwGGGGGGGGGGwk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kkkkkkkkkkkkkk.", "................"],
        cassette: ["................", "................", ".kkkkkkkkkkkkkk.", ".kVVVVVVVVVVVVk.", ".kVccccccccccVk.", ".kVcrrrrrrrrcVk.", ".kVccccccccccVk.", ".kVkkkVVVVkkkVk.", ".kVkwkVVVVkwkVk.", ".kVkkkVVVVkkkVk.", ".kVVVVVVVVVVVVk.", ".kVVkkkkkkkkVVk.", ".kVkSSSSSSSSkVk.", ".kkkkkkkkkkkkkk.", "................", "................"],
        rainbow: ["................", "................", "................", ".....rrrrrr.....", "...rryyyyyyrr...", "..ryyggggggyyr..", ".rygbbbbbbbbgyr.", ".rygb......bgyr.", "rygb........bgyr", "rygb........bgyr", "rygb........bgyr", "................", "..kWWk....kWWk..", ".kWWWWk..kWWWWk.", "..kkkk....kkkk..", "................"],
        trophy: ["................", "..kkkkkkkkkkkk..", "kkkyWyyyyyyyYkkk", "kykyWyyyyyyyYkyk", "kykyWyyyyyyyYkyk", ".kkyyyyyyyyyYkk.", "...kyyyyyyyYk...", "....kyyyyyYk....", ".....kkyYkk.....", ".......yY.......", "......kyYk......", ".....kyyYYk.....", "....kkkkkkkk....", "....kNNNNNNk....", "....kkkkkkkk....", "................"],
        chat: ["................", "................", ".kkkkkkkkkkkkkk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kwwkkwwkkwwkkk.", ".kwwkkwwkkwwkkk.", ".kwwwwwwwwwwwwk.", ".kwwwwwwwwwwwwk.", ".kkkkkwwkkkkkkk.", ".....kwk........", ".....kk.........", "................", "................", "................", "................"]
    },
    Ft = {
        ...Yt,
        arrowLeft: pa(Yt.arrowRight),
        chevronLeft: pa(Yt.chevronRight)
    },
    fa = new Map;

function vn(e) {
    const t = fa.get(e);
    if (t) return t;
    const n = Ft[e],
        r = new Map;
    n.forEach((i, c) => {
        for (let l = 0; l < i.length;) {
            const f = i[l];
            if (f === ".") {
                l++;
                continue
            }
            let k = 1;
            for (; i[l + k] === f;) k++;
            const p = f === "#" ? "currentColor" : Ia[f] ?? "currentColor";
            r.set(p, (r.get(p) ?? "") + `M${l} ${c}h${k}v1h-${k}z`), l += k
        }
    });
    const o = [...r].map(([i, c]) => ({
        fill: i,
        d: c
    }));
    return fa.set(e, o), o
}
const ga = new Map;

function ns(e, t, n = "#ffffff") {
    const r = e + t + n;
    let o = ga.get(r);
    if (o) return o;
    const i = Ft[e];
    o = document.createElement("canvas"), o.width = i[0].length * t, o.height = i.length * t;
    const c = o.getContext("2d");
    return i.forEach((l, f) => [...l].forEach((k, p) => {
        k !== "." && (c.fillStyle = k === "#" ? n : Ia[k] ?? n, c.fillRect(p * t, f * t, t, t))
    })), ga.set(r, o), o
}

function N({
    name: e,
    size: t = 16,
    className: n = "",
    label: r,
    style: o
}) {
    const i = Ft[e],
        c = i[0].length,
        l = i.length;
    return a.jsx("svg", {
        className: "px-icon " + n,
        width: t,
        height: t * l / c,
        viewBox: `0 0 ${c} ${l}`,
        shapeRendering: "crispEdges",
        focusable: "false",
        style: o,
        ...r ? {
            role: "img",
            "aria-label": r
        } : {
            "aria-hidden": !0
        },
        children: vn(e).map(f => a.jsx("path", {
            fill: f.fill,
            d: f.d
        }, f.fill))
    })
}

function Jt({
    width: e,
    height: t,
    rects: n,
    scale: r = 4,
    className: o = "",
    fit: i = "xMidYMid meet",
    children: c
}) {
    return a.jsxs("svg", {
        className: "px-art " + o,
        width: e * r,
        height: t * r,
        viewBox: `0 0 ${e} ${t}`,
        shapeRendering: "crispEdges",
        focusable: "false",
        "aria-hidden": "true",
        preserveAspectRatio: i,
        children: [n.map(([l, f, k, p, u], m) => a.jsx("rect", {
            x: l,
            y: f,
            width: k,
            height: p,
            fill: u
        }, m)), c]
    })
}
const be = new Map,
    Gt = new Set;

function Nn(e) {
    return Gt.add(e), () => {
        Gt.delete(e)
    }
}
const Mn = () => Gt.forEach(e => e());

function Ya(e) {
    const t = be.get(e);
    if (t) return t.promise;
    const n = {
        promise: Promise.resolve(null),
        image: null,
        url: null
    };
    return n.promise = (async () => {
        const r = Ra(e);
        let o = r;
        try {
            const c = await fetch(r);
            c.ok && (o = URL.createObjectURL(await c.blob()))
        } catch {}
        const i = new Image;
        i.decoding = "async", o === r && Pa(r) && (i.crossOrigin = "anonymous"), i.src = o;
        try {
            await i.decode()
        } catch {
            if (!i.complete || !i.naturalWidth) throw o !== r && URL.revokeObjectURL(o), Error("Image could not load: " + e)
        }
        return n.image = i, n.url = o, Mn(), i
    })(), be.set(e, n), n.promise.catch(() => {
        be.get(e) === n && be.delete(e)
    }), n.promise
}

function ct(e, t = 3) {
    const n = e.filter(i => !be.has(i));
    let r = 0;
    const o = async () => {
        for (; r < n.length;) {
            const i = n[r++];
            await Ya(i).catch(() => {})
        }
    };
    return Promise.all(Array.from({
        length: Math.min(t, n.length)
    }, o)).then(() => {})
}

function zn(e) {
    return be.get(e)?.url ?? Ra(e)
}

function rs(e) {
    return be.get(e)?.image ?? null
}

function Vt(e) {
    return !!be.get(e)?.image
}

function Sn() {
    if (typeof document > "u" || !document.fonts) return Promise.resolve();
    const e = "AaBbGgJj 0123 ·!?";
    return Promise.all(['400 16px "Press Start 2P"', '400 16px "Pixelify Sans"', '500 16px "Pixelify Sans"', '600 16px "Pixelify Sans"', '700 16px "Pixelify Sans"'].map(t => document.fonts.load(t, e).catch(() => []))).then(() => {})
}

function pt(e) {
    const [, t] = h.useState(0);
    return h.useEffect(() => {
        if (Vt(e)) return;
        const n = Nn(() => {
            Vt(e) && t(r => r + 1)
        });
        return Ya(e).catch(() => {}), n
    }, [e]), zn(e)
}

function An(e) {
    return pt(e), Vt(e)
}

function $t({
    src: e,
    ...t
}) {
    const n = pt(e);
    return a.jsx("img", {
        ...t,
        crossOrigin: Pa(n) ? "anonymous" : t.crossOrigin,
        src: n
    })
}

function qt({
    id: e,
    walking: t = !1
}) {
    const n = oe(e),
        r = An(n.atlas),
        o = pt(n.atlas),
        [i, c] = h.useState(32);
    return h.useEffect(() => {
        const l = performance.now(),
            f = setInterval(() => {
                const k = (performance.now() - l) / 1e3;
                c(jn(n.animations[t ? "walk-front" : "idle-front"], k))
            }, 100);
        return () => clearInterval(f)
    }, [e, t]), r ? a.jsx("span", {
        "aria-hidden": "true",
        className: "avatar-sprite",
        style: {
            backgroundImage: `url('${o}')`,
            backgroundPosition: `-${i % 8 * 96}px -${Math.floor(i / 8) * 128}px`
        }
    }) : a.jsx("span", {
        "aria-hidden": "true",
        className: "avatar-sprite",
        children: a.jsx($t, {
            src: n.thumbnail,
            alt: "",
            width: 96,
            height: 128,
            draggable: !1
        })
    })
}

function Tn(e) {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    const t = [...e.currentTarget.querySelectorAll(".avatar-option")],
        n = t.indexOf(document.activeElement);
    if (n < 0) return;
    const r = t.filter(c => c.offsetTop === t[0].offsetTop).length || 1,
        o = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" ? -r : r,
        i = t[n + o];
    i && (e.preventDefault(), i.focus(), i.click())
}

function En({
    selection: e,
    onChoose: t,
    onClose: n,
    initialStep: r = 0
}) {
    const o = _t(),
        i = ["recipient"],
        c = i.length,
        [l, f] = h.useState(() => ({
            ...e,
            sender: o ?? e.sender
        })),
        [k, p] = h.useState(Math.min(r, c)),
        [u, m] = h.useState(!1),
        [g, b] = h.useState(""),
        w = k < c ? i[k] : null,
        [v, H] = h.useState(() => oe(w ? l[w] : l.recipient).group);
    h.useEffect(() => {
        w && H(oe(l[w]).group)
    }, [w]), h.useEffect(() => {
        if (!w) return;
        const M = oe(l[w]).atlas,
            C = Fe.filter(_ => _.group === v).map(_ => _.atlas);
        ct([M, ...C.filter(_ => _ !== M)], 2)
    }, [w, v]);
    const E = w === "sender" ? j.from : j.name;
    return a.jsxs("div", {
        className: "avatar-picker",
        children: [a.jsxs("div", {
            className: "picker-head",
            children: [a.jsx("span", {
                className: "eyebrow",
                children: I("SEBUAH PETUALANGAN UNTUK BERDUA · {n}/{total}", "AN ADVENTURE FOR TWO · {n}/{total}", {
                    n: k + 1,
                    total: c + 1
                })
            }), a.jsx("span", {
                className: "step-pips",
                "aria-hidden": "true",
                children: Array.from({
                    length: c + 1
                }, (M, C) => a.jsx("b", {
                    className: C < k ? "done" : C === k ? "now" : ""
                }, C))
            })]
        }), a.jsx("h2", {
            children: w === "recipient" ? s("Pilih penampilanmu", "Choose your look") : w === "sender" ? I("Pilih penampilan {name}", "Choose {name}'s look", {
                name: j.from
            }) : s("Kisah kecil kalian dimulai di sini.", "Your little story starts here.")
        }), a.jsx("p", {
            children: w ? s("Pilih gaya yang paling kamu suka. Nama dalam cerita tetap sama.", "Pick the style you like best. The names in the story stay the same.") : I("Hari ini, {name} punya undangan istimewa dari {from}.", "Today, {name} has a special invitation from {from}.", {
                name: j.name,
                from: j.from
            })
        }), w ? a.jsxs(a.Fragment, {
            children: [a.jsx("div", {
                className: "avatar-tabs",
                role: "tablist",
                "aria-label": s("Kelompok gaya", "Style groups"),
                children: ["f", "m"].map(M => a.jsx("button", {
                    role: "tab",
                    "aria-selected": v === M,
                    className: v === M ? "selected" : "",
                    onClick: () => H(M),
                    children: M === "f" ? s("Perempuan", "Women") : s("Laki-laki", "Men")
                }, M))
            }), a.jsx("div", {
                className: "avatar-grid",
                role: "group",
                "aria-label": v === "f" ? s("Pilihan perempuan", "Women's looks") : s("Pilihan laki-laki", "Men's looks"),
                onKeyDown: Tn,
                children: Fe.filter(M => M.group === v).map(M => a.jsxs("button", {
                    className: "avatar-option" + (l[w] === M.id ? " selected" : ""),
                    "aria-pressed": l[w] === M.id,
                    onClick: () => f(C => ({
                        ...C,
                        [w]: M.id
                    })),
                    children: [a.jsx($t, {
                        src: M.thumbnail,
                        alt: M.description,
                        draggable: !1
                    }), a.jsx("strong", {
                        children: M.label
                    }), l[w] === M.id && a.jsx(N, {
                        name: "check",
                        size: 16,
                        className: "picked"
                    })]
                }, M.id))
            }), a.jsxs("div", {
                className: "avatar-preview-line",
                children: [a.jsx("div", {
                    className: "preview-stage",
                    children: a.jsx(qt, {
                        id: l[w],
                        walking: !0
                    })
                }), a.jsxs("span", {
                    className: "preview-card",
                    children: [a.jsx("small", {
                        className: "preview-role",
                        children: I("{name} · GAYA TERPILIH", "{name} · CHOSEN STYLE", {
                            name: E.toUpperCase()
                        })
                    }), a.jsx("strong", {
                        children: oe(l[w]).label
                    }), a.jsx("small", {
                        children: oe(l[w]).description
                    })]
                })]
            })]
        }) : a.jsxs("div", {
            className: "couple-preview",
            children: [a.jsxs("div", {
                children: [a.jsx("div", {
                    className: "preview-stage",
                    children: a.jsx(qt, {
                        id: l.recipient
                    })
                }), a.jsx("strong", {
                    children: j.name
                })]
            }), a.jsx(N, {
                name: "heart",
                size: 48,
                className: "couple-heart"
            }), a.jsxs("div", {
                children: [a.jsx("div", {
                    className: "preview-stage",
                    children: a.jsx(qt, {
                        id: l.sender
                    })
                }), a.jsx("strong", {
                    children: j.from
                }), a.jsx("small", {
                    className: "couple-note",
                    children: I("Gaya pilihan {from}", "{from}'s own pick", {
                        from: j.from
                    })
                })]
            })]
        }), g && a.jsx("p", {
            role: "alert",
            className: "picker-error",
            children: g
        }), a.jsxs("div", {
            className: "avatar-actions",
            children: [a.jsxs("button", {
                className: "text-button",
                "data-cancel": k > 0 || void 0,
                disabled: u,
                onClick: () => k ? p(k - 1) : n(),
                children: [a.jsx(N, {
                    name: "arrowLeft",
                    size: 16
                }), k ? s("Kembali", "Back") : s("Nanti dulu", "Not now")]
            }), a.jsxs("button", {
                className: "primary",
                disabled: u,
                onClick: async () => {
                    if (k < c) {
                        p(k + 1);
                        return
                    }
                    m(!0), b("");
                    try {
                        await t({
                            ...l,
                            sender: o ?? l.sender,
                            confirmed: !0
                        })
                    } catch {
                        b(s("Penampilan belum berhasil dimuat. Coba sekali lagi.", "The looks did not load. Try once more.")), m(!1)
                    }
                },
                children: [u ? s("Menyiapkan pasangan…", "Preparing your pair…") : k < c ? s("Lanjut", "Next") : s("Simpan penampilan", "Save my look"), a.jsx(N, {
                    name: "arrowRight",
                    size: 16
                })]
            })]
        })]
    })
}

function ft(e, t, n) {
    const [r, o] = h.useState({
        text: "",
        chars: 0
    }), i = h.useRef(() => {}), c = h.useRef(n);
    c.current = n;
    const l = t ? e.length : r.text === e ? r.chars : 0;
    return h.useEffect(() => {
        if (t) {
            i.current = () => {};
            return
        }
        let f = 0,
            k = 0;
        o({
            text: e,
            chars: 0
        });
        const p = window.setInterval(() => {
            f = Math.min(e.length, f + 2), o({
                text: e,
                chars: f
            }), ++k % 3 === 0 && /\S/.test(e.charAt(f - 1)) && c.current?.(), f >= e.length && window.clearInterval(p)
        }, 24);
        return i.current = () => {
            window.clearInterval(p), o({
                text: e,
                chars: e.length
            })
        }, () => window.clearInterval(p)
    }, [e, t]), {
        shown: e.slice(0, l),
        rest: e.slice(l),
        complete: l >= e.length,
        skip: () => i.current()
    }
}
const qa = h.createContext(() => {}),
    Ha = () => h.useContext(qa);

function Da(e = "open", t = "close") {
    const n = Ha(),
        r = h.useRef(0);
    h.useEffect(() => (r.current ? (clearTimeout(r.current), r.current = 0) : n(e), () => {
        r.current = window.setTimeout(() => {
            r.current = 0, n(t)
        }, 40)
    }), [])
}
const Rn = {
    sage: {
        get name() {
            return s("Kakek Misterius", "The Old Sage")
        },
        get title() {
            return s("Penjaga rahasia rumah", "Keeper of the house's secret")
        },
        portrait: "./assets/birthday/avatars/sage-thumb.webp"
    },
    keeper: {
        get name() {
            return s("Pak Jati", "Mr. Jati")
        },
        get title() {
            return s("Penjaga taman", "Garden keeper")
        },
        portrait: "./assets/birthday/avatars/pakjati-thumb.webp"
    }
};

function Ba({
    src: e,
    talking: t,
    title: n
}) {
    const r = pt(e);
    return a.jsxs("figure", {
        className: "speaker-card",
        "aria-hidden": "true",
        children: [a.jsx("div", {
            className: "portrait-frame" + (t ? " talking" : ""),
            children: a.jsx("img", {
                src: r,
                alt: "",
                decoding: "sync",
                draggable: !1
            })
        }), n && a.jsx("figcaption", {
            children: n
        })]
    })
}

function Ua({
    name: e
}) {
    return a.jsx("span", {
        className: "name-tab",
        children: e
    })
}

function Pn({
    who: e,
    progress: t,
    screen: n,
    reduced: r,
    event: o,
    onClose: i,
    gesture: c,
    voice: l,
    cursor: f
}) {
    const [k, p] = h.useState(0), [u, m] = h.useState(""), [g, b] = h.useState(!1), w = h.useRef(null), v = t.quest, H = Ha();
    Da();
    const E = j.adventure.sage,
        M = j.adventure.questions,
        C = v.noteRead ? v.doorChecked ? null : s("Undanganmu mengarah ke rumah di ujung jalan bunga. Coba periksa pintunya dahulu.", "Your invitation points to the house at the end of the flower path. Try its door first.") : s("Ada sepucuk surat di peti pelataran. Bacalah dahulu; seseorang menyiapkannya khusus untukmu.", "There is a letter on the chest in the courtyard. Read it first; someone prepared it just for you."),
        _ = v.noteRead ? v.doorChecked ? s("Pintunya terkunci, ya? Temui Kakek Misterius di dekat rumah; beliau tahu keperluan tamu hari ini. Setelah itu, kembali ke sini.", "The door is locked, is it not? Go and see the Old Sage near the house; he knows why today's guest is here. Then come back to me.") : s("Sudah baca suratnya? Bagus. Sekarang periksa pintu rumah di ujung jalan bunga, di atas tangga.", "Read the letter? Good. Now check the door of the house at the end of the flower path, up the stairs.") : s("Selamat datang! Jembatan ini masih kujaga. Baca dulu surat di atas peti pelataran—surat itu disiapkan khusus untukmu.", "Welcome! I am still guarding this bridge. First read the letter on the courtyard chest. It was prepared just for you."),
        x = e === "sage" ? !C : v.sageClue && !t.bridgeOpen && v.guardAnswers < 2,
        W = g ? j.adventure.hint : u || (e === "sage" ? C ?? (v.key !== "hidden" ? s("Hebat, ketelitianmu membuahkan hasil. Sekarang rumah itu menunggumu.", "Well done, your sharp eyes paid off. Now the house is waiting for you.") : E[k]) : t.bridgeOpen ? s("Silakan menyeberang. Semoga yang kamu cari segera ditemukan.", "Please, go ahead and cross. I hope you find what you are looking for soon.") : v.sageClue ? v.guardAnswers === 2 ? s("Tepat sekali. Petunjuknya sudah kamu ingat. Aku menepi dahulu—silakan lewat setelah jalurnya kosong.", "Exactly right. You remembered the clue. Let me step aside; go ahead once the path is clear.") : M[v.guardAnswers].text : _),
        pe = ft(W, r, l),
        F = pe.complete,
        fe = e === "keeper" && x && !u && !g && F,
        Ee = () => {
            if (!F) {
                pe.skip();
                return
            }
            if (g) {
                b(!1);
                return
            }
            if (u) {
                m("");
                return
            }
            if (e === "sage") {
                if (C || v.key !== "hidden") {
                    i();
                    return
                }
                if (k < E.length - 1) {
                    p(k + 1), c();
                    return
                }
                o({
                    type: "sage-clue"
                }), c(!0), i()
            } else v.guardAnswers === 2 && !t.bridgeOpen && (c(!0), o({
                type: "bridge"
            })), i()
        },
        ge = h.useRef(Ee);
    ge.current = Ee;
    const Ze = !u && !g && (e === "sage" ? !!C || v.key !== "hidden" : t.bridgeOpen || !v.sageClue),
        Re = F ? g ? "back" : e === "sage" && !C && k === E.length - 1 ? "keep" : e === "keeper" && v.guardAnswers === 2 && !u ? "thanks" : Ze ? "ok" : "next" : "all",
        jt = {
            all: s("Tampilkan semua", "Show all"),
            back: s("Kembali ke pertanyaan", "Back to the question"),
            keep: s("Simpan petunjuk", "Keep the clue"),
            thanks: s("Terima kasih, Pak", "Thank you, sir"),
            ok: s("Mengerti", "Got it"),
            next: s("Lanjut", "Next")
        } [Re],
        Xe = Re === "next" || Re === "back";
    h.useEffect(() => {
        c();
        const Q = B => {
            const ve = w.current;
            if (!ve) return;
            if (B.key === "Escape") {
                B.preventDefault(), B.stopPropagation(), i();
                return
            }
            const Ie = [...ve.querySelectorAll("button:not(:disabled)")];
            if (B.key === "Tab") {
                const U = Ie[0],
                    Me = Ie.at(-1);
                B.shiftKey && document.activeElement === U ? (B.preventDefault(), Me?.focus()) : !B.shiftKey && document.activeElement === Me && (B.preventDefault(), U?.focus());
                return
            }
            const Ne = [...ve.querySelectorAll(".quest-answers button")];
            if ((B.key === "ArrowDown" || B.key === "ArrowUp") && Ne.length) {
                B.preventDefault(), B.stopPropagation();
                const U = Ne.indexOf(document.activeElement);
                Ne[(U + (B.key === "ArrowDown" ? 1 : -1) + Ne.length) % Ne.length].focus(), f?.();
                return
            }
            if (B.key === "e" || B.key === "E") {
                if (B.preventDefault(), B.stopPropagation(), B.repeat) return;
                const U = document.activeElement;
                U instanceof HTMLButtonElement && ve.contains(U) && !U.classList.contains("speech-close") ? U.click() : ge.current()
            }
        };
        return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q)
    }, []), h.useEffect(() => {
        w.current?.querySelector(fe ? ".quest-answers button" : ".speech-next")?.focus({
            preventScroll: !0
        })
    }, [fe, W]);
    const je = Rn[e],
        Xt = v.guardAnswers === 1 ? [1, 0] : [0, 1];
    return a.jsxs("div", {
        ref: w,
        className: "conversation-layer birthday-dialogue",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": je.name,
        children: [a.jsx("span", {
            className: "speaker-marker",
            style: {
                left: n.x,
                top: n.y
            },
            "aria-hidden": "true",
            children: a.jsx(N, {
                name: "chat",
                size: 32
            })
        }), fe && a.jsxs("div", {
            className: "quest-answers",
            role: "group",
            "aria-label": s("Pilihan jawaban", "Answer choices"),
            children: [Xt.map(Q => {
                const B = M[v.guardAnswers].answers[Q];
                return a.jsxs("button", {
                    onClick: () => {
                        o({
                            type: "guard-answer",
                            question: v.guardAnswers,
                            correct: Q === 0
                        }), H(Q === 0 ? "confirm" : "error"), m(Q === 0 ? s("Baik, itu jawaban yang kutunggu.", "Good, that is the answer I was waiting for.") : v.guardAnswers === 0 ? s("Coba ingat pesan Kakek. Ada sesuatu yang kamu butuhkan untuk membuka rumah.", "Try to remember the Old Sage's message. There is something you need to open the house.") : s("Belum tepat. Kakek menyebut warna buah dan sehelai kain. Coba ingat lagi.", "Not quite. The Old Sage mentioned the color of the fruit and a piece of cloth. Try to remember again.")), c(Q === 0)
                    },
                    "data-sfx": "none",
                    children: [a.jsx("span", {
                        className: "answer-cursor",
                        "aria-hidden": "true"
                    }), B]
                }, Q)
            }), a.jsx("button", {
                className: "quest-help",
                onClick: () => b(!0),
                children: s("Baca petunjuk Kakek", "Read the Old Sage's clue")
            })]
        }), a.jsxs("section", {
            className: "quest-speech",
            children: [a.jsx(Ua, {
                name: je.name
            }), a.jsx(Ba, {
                src: je.portrait,
                talking: !F,
                title: je.title
            }), a.jsxs("div", {
                className: "speech-body",
                children: [a.jsx("button", {
                    className: "speech-close",
                    onClick: i,
                    "aria-label": s("Tutup percakapan", "Close the conversation"),
                    children: a.jsx(N, {
                        name: "close",
                        size: 16
                    })
                }), a.jsxs("p", {
                    className: "speech-text",
                    onClick: () => {
                        F || pe.skip()
                    },
                    children: [a.jsx("span", {
                        children: pe.shown
                    }), !F && a.jsx("span", {
                        className: "typing-cursor",
                        children: "▌"
                    }), a.jsx("span", {
                        className: "typing-ghost",
                        "aria-hidden": "true",
                        children: pe.rest
                    })]
                }), a.jsxs("div", {
                    className: "speech-foot",
                    children: [fe ? a.jsx("span", {
                        className: "speech-hint",
                        "aria-hidden": "true",
                        children: s("Pilih jawaban di atas", "Choose an answer above")
                    }) : a.jsxs("button", {
                        className: "speech-next",
                        onClick: Ee,
                        children: [jt, " ▸"]
                    }), F && !fe && Xe && a.jsx("span", {
                        className: "more-indicator",
                        "aria-hidden": "true"
                    })]
                })]
            })]
        })]
    })
}
const _e = 256,
    lt = 160;
let Ht = null;

function Cn(e) {
    return () => (e = e * 1664525 + 1013904223 >>> 0, e / 4294967296)
}

function Ga() {
    if (Ht) return Ht;
    const e = [],
        t = (u, m, g, b, w) => {
            g > 0 && b > 0 && e.push([Math.round(u), Math.round(m), Math.round(g), Math.round(b), w])
        };
    [
        ["#3f9ff0", 0],
        ["#52adf4", 14],
        ["#66baf7", 28],
        ["#7ac7fa", 42],
        ["#92d3fc", 56],
        ["#addffd", 70],
        ["#cbeafd", 84],
        ["#f6e7c8", 98]
    ].forEach(([u, m], g, b) => t(0, m, _e, (b[g + 1]?.[1] ?? lt) - m, u));
    const n = (u, m, g, b) => {
        for (let w = -g; w <= g; w++) {
            const v = Math.floor(Math.sqrt(g * g - w * w + .5));
            t(u - v, m + w, v * 2 + 1, 1, b)
        }
    };
    n(224, 27, 15, "#fff3c4"), n(224, 27, 12, "#ffdf72"), n(224, 27, 9, "#ffe98f"), t(218, 20, 4, 3, "#fffbe6");
    const r = (u, m, g) => {
        t(u, m + 5 * g, 30 * g, 5 * g, "#ffffff"), t(u + 4 * g, m + 2 * g, 10 * g, 3 * g, "#ffffff"), t(u + 11 * g, m, 11 * g, 5 * g, "#ffffff"), t(u + 20 * g, m + 3 * g, 7 * g, 2 * g, "#ffffff"), t(u + 2 * g, m + 9 * g, 26 * g, 1 * g, "#d4eaff"), t(u, m + 8 * g, 30 * g, 1 * g, "#e9f5ff")
    };
    r(6, 20, 1), r(14, 62, .67), r(204, 58, .67), r(150, 14, .5);
    for (const [u, m] of [
            [232, 48],
            [240, 44]
        ]) t(u, m, 1, 1, "#2b3a6b"), t(u + 1, m + 1, 1, 1, "#2b3a6b"), t(u + 2, m, 1, 1, "#2b3a6b");
    const o = (u, m, g, b, w) => {
        for (let v = m; v < g; v++) {
            const H = (v - m) * 1.6;
            t(u - H, v, H * 2 + 1, 1, b), v < m + 4 && t(u - H, v, H * 2 + 1, 1, w)
        }
    };
    o(46, 66, 104, "#8db0d6", "#f4f8ff"), o(92, 74, 104, "#7fa3cb", "#e9f1ff"), o(250, 70, 104, "#8db0d6", "#f4f8ff");
    const i = (u, m, g) => {
        let b = 0,
            w = Math.round(u(0));
        for (let v = 1; v <= _e; v++) {
            const H = v < _e ? Math.round(u(v)) : -1;
            H !== w && (t(b, w, v - b, 2, m), t(b, w + 2, v - b, lt - w - 2, g), b = v, w = H)
        }
    };
    i(u => 97 + 6 * Math.sin(u / 23) + 3 * Math.sin(u / 9 + 1), "#9ed68a", "#7cc47a");
    const c = 170,
        l = Math.round(97 + 6 * Math.sin(c / 23) + 3 * Math.sin(c / 9 + 1)) - 13;
    t(c, l + 6, 18, 8, "#f6e7c8"), t(c + 1, l + 13, 16, 1, "#d6b177");
    for (let u = 0; u < 7; u++) t(c - 1 + u, l + 6 - u, 20 - u * 2, 1, u % 2 ? "#e9535a" : "#d0404a");
    t(c + 12, l - 2, 3, 5, "#7a4a24"), t(c + 3, l + 8, 4, 3, "#5cc0ff"), t(c + 11, l + 8, 4, 6, "#8a5126"), t(c + 14, l + 11, 1, 1, "#ffd23f"), i(u => 116 + 7 * Math.sin((u + 40) / 31) + 2 * Math.sin(u / 7), "#6cc070", "#4fa35a");
    const f = (u, m) => {
        t(u - 1, m - 6, 3, 7, "#7a4a24"), n(u, m - 10, 5, "#2f8a47"), t(u - 3, m - 14, 3, 2, "#56b763"), t(u - 4, m - 12, 2, 2, "#48a85a")
    };
    for (const u of [22, 38, 214, 232]) f(u, Math.round(116 + 7 * Math.sin((u + 40) / 31) + 2 * Math.sin(u / 7)) + 3);
    i(u => 134 + 3 * Math.sin(u / 17), "#5cc46a", "#358f4c");
    for (let u = 118; u < lt; u++) {
        const m = (u - 118) / 42,
            g = 158 - 26 * m + 10 * Math.sin(u / 9),
            b = 4 + m * 30;
        t(g - b / 2 - 1, u, b + 2, 1, "#c9a05e"), t(g - b / 2, u, b, 1, u % 5 ? "#ecd29a" : "#e2c486")
    }
    const k = Cn(4242),
        p = ["#ff92b6", "#ffffff", "#ffd23f", "#ff92b6", "#b18bff"];
    for (let u = 0; u < 70; u++) {
        const m = Math.floor(k() * _e),
            g = 136 + Math.floor(k() * 22),
            b = p[u % p.length],
            w = 158 - 26 * ((g - 118) / 42) + 10 * Math.sin(g / 9),
            v = (4 + (g - 118) / 42 * 30) / 2 + 3;
        Math.abs(m - w) < v || (u % 3 ? t(m, g, 1, 2, "#7fdc77") : (t(m, g + 1, 1, 2, "#2a8a47"), t(m - 1, g, 3, 1, b), t(m, g - 1, 1, 3, b), t(m, g, 1, 1, "#ffd23f")))
    }
    return Ht = e, e
}

function ss(e, t) {
    for (const [n, r, o, i, c] of Ga()) e.fillStyle = c, e.fillRect(n * t, r * t, o * t, i * t)
}
const D = "#14121f",
    On = [
        [1, 29, 38, 1, D],
        [0, 30, 1, 2, D],
        [39, 30, 1, 2, D],
        [1, 30, 38, 2, "#eef0fb"],
        [2, 31, 36, 1, "#c9cde6"],
        [1, 32, 1, 1, D],
        [38, 32, 1, 1, D],
        [2, 32, 36, 1, "#9aa0c4"],
        [2, 33, 36, 1, D],
        [4, 16, 32, 1, D],
        [3, 17, 1, 12, D],
        [36, 17, 1, 12, D],
        [4, 21, 32, 8, "#ff9ec0"],
        [31, 21, 5, 8, "#f2789f"],
        [4, 24, 32, 2, "#fff0c7"],
        [31, 24, 5, 2, "#f0d9a8"],
        [4, 28, 32, 1, "#c94f7a"],
        [4, 17, 32, 4, "#fff6e0"],
        [4, 20, 32, 1, "#f0d9a8"],
        [6, 21, 2, 2, "#fff6e0"],
        [11, 21, 3, 3, "#fff6e0"],
        [17, 21, 2, 2, "#fff6e0"],
        [23, 21, 3, 2, "#fff6e0"],
        [28, 21, 2, 3, "#fff6e0"],
        [33, 21, 2, 2, "#f0d9a8"],
        [8, 26, 1, 1, "#ffd23f"],
        [14, 27, 1, 1, "#5cc0ff"],
        [20, 26, 1, 1, "#ffffff"],
        [25, 27, 1, 1, "#ffd23f"],
        [10, 22, 1, 1, "#5cc0ff"],
        [27, 26, 1, 1, "#62d26a"],
        [7, 14, 3, 3, "#ec3b4f"],
        [7, 14, 1, 1, "#ff9aa5"],
        [8, 13, 1, 1, "#2a8a47"],
        [13, 14, 3, 3, "#ec3b4f"],
        [13, 14, 1, 1, "#ff9aa5"],
        [14, 13, 1, 1, "#2a8a47"],
        [24, 14, 3, 3, "#ec3b4f"],
        [24, 14, 1, 1, "#ff9aa5"],
        [25, 13, 1, 1, "#2a8a47"],
        [30, 14, 3, 3, "#ec3b4f"],
        [30, 14, 1, 1, "#ff9aa5"],
        [31, 13, 1, 1, "#2a8a47"],
        [18, 8, 4, 9, D],
        [19, 9, 2, 7, "#ffffff"],
        [19, 10, 2, 1, "#ff6f9a"],
        [19, 12, 2, 1, "#ff6f9a"],
        [19, 14, 2, 1, "#ff6f9a"],
        [20, 9, 1, 7, "#e8e2f4"],
        [19, 6, 2, 2, "#3a2a1a"]
    ],
    Ln = e => [
        [19 + e, 0, 2, 1, "#ff8a3d"],
        [18 + e, 1, 4, 2, "#ff8a3d"],
        [17, 3, 6, 2, "#ff8a3d"],
        [18, 5, 4, 1, "#ff8a3d"],
        [19 + e, 1, 2, 1, "#ffd23f"],
        [18 + Math.max(0, e), 3, 4 - Math.abs(e), 2, "#ffd23f"],
        [19, 4, 2, 2, "#fff6c0"]
    ],
    In = h.memo(function () {
        return a.jsxs(Jt, {
            width: 40,
            height: 34,
            scale: 5,
            rects: On,
            className: "pixel-cake",
            children: [a.jsx("rect", {
                x: "15",
                y: "-1",
                width: "10",
                height: "9",
                fill: "#ffd23f",
                opacity: ".16",
                className: "flame-glow"
            }), [0, -1, 1].map((t, n) => a.jsx("g", {
                className: "flame flame-" + n,
                children: Ln(t).map(([r, o, i, c, l], f) => a.jsx("rect", {
                    x: r,
                    y: o,
                    width: i,
                    height: c,
                    fill: l
                }, f))
            }, n))]
        })
    }),
    ya = e => [
        [e + 1, 20, 22, 1, D],
        [e, 21, 1, 2, D],
        [e + 23, 21, 1, 2, D],
        [e + 1, 21, 22, 2, "#eef0fb"],
        [e + 2, 22, 20, 1, "#c9cde6"],
        [e + 2, 23, 20, 1, D],
        [e + 4, 9, 15, 1, D],
        [e + 3, 10, 1, 8, D],
        [e + 19, 10, 1, 8, D],
        [e + 4, 18, 15, 1, D],
        [e + 4, 10, 15, 8, "#fff6e0"],
        [e + 4, 10, 15, 2, "#b5652b"],
        [e + 5, 10, 6, 1, "#d98a4a"],
        [e + 4, 14, 15, 2, "#58d6c1"],
        [e + 15, 12, 4, 6, "#f0d9a8"],
        [e + 15, 14, 4, 2, "#22897c"],
        [e + 5, 19, 13, 1, D],
        [e + 20, 11, 3, 1, D],
        [e + 22, 12, 1, 4, D],
        [e + 20, 16, 3, 1, D],
        [e + 20, 12, 2, 4, "#fff6e0"]
    ],
    Yn = h.memo(function () {
        return a.jsx(Jt, {
            width: 48,
            height: 26,
            scale: 4,
            rects: [...ya(0), ...ya(24)],
            className: "pixel-tea",
            children: [6, 11, 30, 35].map((t, n) => a.jsxs("g", {
                className: "steam steam-" + n % 2,
                children: [a.jsx("rect", {
                    x: t,
                    y: "5",
                    width: "1",
                    height: "2",
                    fill: "#ffffff"
                }), a.jsx("rect", {
                    x: t + 1,
                    y: "3",
                    width: "1",
                    height: "2",
                    fill: "#ffffff"
                }), a.jsx("rect", {
                    x: t,
                    y: "1",
                    width: "1",
                    height: "2",
                    fill: "#ffffff"
                })]
            }, t))
        })
    }),
    is = h.memo(function () {
        return a.jsx(Jt, {
            width: _e,
            height: lt,
            scale: 1,
            rects: Ga(),
            className: "desk-wallpaper",
            fit: "xMidYMax slice"
        })
    }),
    qn = [0, .05, .45, .8, .85, .97, 1],
    Hn = e => e < .05 ? 0 : e < .45 ? 1 : e < .8 ? 2 : e < .97 ? 3 : 4;

function Dn({
    progress: e,
    done: t,
    reduced: n,
    name: r,
    onLeave: o,
    onGone: i
}) {
    const c = h.useRef(null),
        l = h.useRef(null),
        [f, k] = h.useState(!1),
        [p, u] = h.useState(!1),
        [m, g] = h.useState(0),
        b = t ? 4 : Hn(e),
        w = [s("Menyiapkan kadomu…", "Preparing your gift…"), s("Mengunduh tamanmu", "Downloading your garden"), s("Mengundang para penghuni taman…", "Inviting the garden folk…"), s("Menata cahaya matahari…", "Arranging the sunlight…"), s("Hampir siap…", "Almost ready…")],
        v = ft(w[b], n || b === 0);
    h.useEffect(() => fn(E => g(Math.floor(E / 104857.6) / 10)), []), h.useEffect(() => {
        const E = window.setTimeout(() => u(!0), 12e3);
        return () => window.clearTimeout(E)
    }, []);
    const H = h.useRef({
        target: 0,
        since: performance.now()
    });
    return h.useEffect(() => {
        const E = H.current,
            M = t ? 1 : e;
        M !== E.target && (E.target = M, E.since = performance.now())
    }, [e, t]), h.useEffect(() => {
        let E = 0,
            M = performance.now(),
            C = 0;
        const _ = x => {
            const W = H.current,
                pe = Math.min(.1, (x - M) / 1e3);
            M = x;
            const F = qn.find(Ee => Ee > W.target + 1e-6) ?? 1,
                fe = W.target >= 1 ? 1 : W.target + (F - W.target) * .85 * (1 - Math.exp(-(x - W.since) / 9e3));
            C = n ? fe : Math.max(C, C + (fe - C) * Math.min(1, pe * 5)), c.current && (c.current.style.transform = `scaleX(${C.toFixed(4)})`), l.current && (l.current.textContent = Math.round(C * 100) + "%"), E = requestAnimationFrame(_)
        };
        return E = requestAnimationFrame(_), () => cancelAnimationFrame(E)
    }, [n]), h.useEffect(() => {
        if (!t) return;
        const E = window.setTimeout(() => {
                k(!0), o()
            }, n ? 0 : 520),
            M = window.setTimeout(i, n ? 220 : 1320);
        return () => {
            window.clearTimeout(E), window.clearTimeout(M)
        }
    }, [t]), a.jsx("div", {
        className: "pq-loading" + (f ? " leaving" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-busy": !t,
        children: a.jsxs("div", {
            className: "pq-load-stack",
            children: [a.jsx("span", {
                className: "pq-load-for",
                children: I("Untuk {name}", "For {name}", {
                    name: r
                })
            }), a.jsx("h1", {
                className: "pq-load-title",
                children: s("Taman kecil sedang disiapkan", "A little garden is being prepared")
            }), a.jsxs("p", {
                className: "pq-load-status",
                children: [a.jsx("span", {
                    children: v.shown
                }), !v.complete && a.jsx("i", {
                    className: "pq-caret",
                    "aria-hidden": "true"
                }), b === 1 && v.complete && m > 0 && a.jsxs("span", {
                    className: "pq-load-mb",
                    children: [" · ", m.toFixed(1), " MB"]
                })]
            }, b), a.jsx("span", {
                className: "pq-load-bar",
                "aria-hidden": "true",
                children: a.jsx("i", {
                    ref: c
                })
            }), a.jsx("span", {
                className: "pq-load-pct",
                ref: l,
                "aria-hidden": "true",
                children: "0%"
            }), a.jsx("small", {
                className: "pq-load-slow" + (p && !t && e < .8 ? " shown" : ""),
                children: s("Koneksinya agak pelan. Tamanmu tetap disiapkan.", "The connection is a little slow. Your garden is still on its way.")
            })]
        })
    })
}

function Bn({
    cover: e,
    ms: t = 380
}) {
    const n = h.useRef(null),
        r = h.useRef({
            level: 0,
            order: [],
            cols: 0,
            rows: 0
        });
    return h.useEffect(() => {
        const o = n.current;
        if (!o) return;
        const i = r.current,
            c = () => {
                const m = Math.max(18, Math.round(Math.min(innerWidth, innerHeight) / 22));
                i.cols = Math.ceil(innerWidth / m), i.rows = Math.ceil(innerHeight / m), o.width = i.cols, o.height = i.rows;
                let g = 9;
                i.order = Array.from({
                    length: i.cols * i.rows
                }, (b, w) => w);
                for (let b = i.order.length - 1; b > 0; b--) {
                    g = g * 16807 % 2147483647;
                    const w = g % (b + 1);
                    [i.order[b], i.order[w]] = [i.order[w], i.order[b]]
                }
                l()
            },
            l = () => {
                const m = o.getContext("2d");
                if (!m) return;
                m.clearRect(0, 0, i.cols, i.rows), m.fillStyle = "#1a1310";
                const g = Math.round(i.level * i.order.length);
                for (let b = 0; b < g; b++) {
                    const w = i.order[b];
                    m.fillRect(w % i.cols, Math.floor(w / i.cols), 1, 1)
                }
            };
        c(), addEventListener("resize", c);
        let f = 0,
            k = performance.now();
        const p = e ? 1 : 0,
            u = m => {
                const g = m - k;
                k = m, i.level = p > i.level ? Math.min(p, i.level + g / t) : Math.max(p, i.level - g / t), l(), i.level !== p && (f = requestAnimationFrame(u))
            };
        return f = requestAnimationFrame(u), () => {
            cancelAnimationFrame(f), removeEventListener("resize", c)
        }
    }, [e, t]), a.jsx("canvas", {
        ref: n,
        className: "pq-cut",
        "aria-hidden": "true"
    })
}
const os = {
    garden: 8.4,
    house: 7.6
};

function Un(e, t, n, r = 50, o = 32, i = .5) {
    const c = Math.tan(e.fov * Math.PI / 360),
        l = 2 * e.distance * c * t;
    if (!(t > 0) || !(l < n)) return {
        ...e
    };
    const f = n / l;
    let k = f ** .55,
        p = 2 * Math.atan(c * f / k) * 180 / Math.PI;
    return p > r && (p = r, k = f * c / Math.tan(r * Math.PI / 360)), {
        fov: p,
        distance: e.distance * k,
        pitch: Math.min(o, e.pitch + (p - e.fov) * i)
    }
}

function cs(e, t, n, r, o = 1) {
    const i = k => {
            const p = k.pitch * Math.PI / 180,
                u = p + k.fov * Math.PI / 360;
            return {
                reach: Math.cos(p) * k.distance - Math.sin(p) * k.distance / Math.tan(u),
                slope: Math.tan(u)
            }
        },
        c = i(e),
        l = i(t),
        f = Math.max(0, r + c.reach - n) * c.slope * o;
    return Math.min(r, n + f / l.slope - l.reach)
}
const Gn = 7,
    Vn = [{
        id: "bridge",
        from: [.6, 3.3, 10.2],
        to: [-1.3, 2.9, 9.5],
        look: [-3.6, 1.2, 3.6],
        lookTo: [-3.8, 1.2, 3.5],
        width: 9,
        fov: 34
    }, {
        id: "stall",
        from: [-4.6, 3.4, 2.6],
        to: [-5.8, 3.1, 1.6],
        look: [-9, 1.3, -3.1],
        lookTo: [-9.1, 1.2, -3.3],
        width: 8,
        fov: 34
    }, {
        id: "house",
        from: [7.6, 4.7, 9.8],
        to: [5.8, 5.4, 7.6],
        look: [4.5, 2.4, -7],
        lookTo: [4.5, 2.8, -9.8],
        width: 12,
        fov: 36
    }, {
        id: "play",
        from: [8.6, 4.6, 7.4],
        to: [10.6, 4.3, 6.6],
        look: [12.1, 1.6, -1.6],
        lookTo: [12.4, 1.6, -1.7],
        width: 9,
        fov: 34
    }, {
        id: "hill",
        from: [-4.4, 4.4, -1.6],
        to: [-3.1, 4.7, -2.8],
        look: [-.6, 2.4, -8.7],
        lookTo: [-.4, 2.5, -8.9],
        width: 8,
        fov: 34
    }],
    Kn = e => .5 - Math.cos(Math.PI * Math.min(1, Math.max(0, e))) / 2,
    xa = (e, t, n) => [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];

function _n(e) {
    return e >= 1.15 ? [.34, 0] : e < .8 ? [0, .24] : [0, .1]
}

function ls(e, t, n) {
    const r = Kn(t),
        o = xa(e.from, e.to, r),
        i = xa(e.look, e.lookTo, r),
        c = Math.hypot(o[0] - i[0], o[1] - i[1], o[2] - i[2]),
        l = Un({
            fov: e.fov,
            distance: c,
            pitch: 0
        }, n, n < 1 ? e.width * .8 : e.width, 55),
        f = l.distance / c,
        k = [i[0] + (o[0] - i[0]) * f, i[1] + (o[1] - i[1]) * f, i[2] + (o[2] - i[2]) * f],
        p = [i[0] - k[0], i[1] - k[1], i[2] - k[2]],
        u = Math.hypot(...p);
    p[0] /= u, p[1] /= u, p[2] /= u;
    let m = [-p[2], 0, p[0]];
    const g = Math.hypot(...m) || 1;
    m = m.map(_ => _ / g);
    const b = [m[1] * p[2] - m[2] * p[1], m[2] * p[0] - m[0] * p[2], m[0] * p[1] - m[1] * p[0]],
        [w, v] = _n(n),
        H = Math.tan(l.fov * Math.PI / 360),
        E = w * u * H * n,
        M = v * u * H,
        C = [i[0] - m[0] * E - b[0] * M, i[1] - m[1] * E - b[1] * M, i[2] - m[2] * E - b[2] * M];
    return {
        position: k,
        aim: C,
        look: i,
        fov: l.fov
    }
}

function Wn({
    name: e,
    from: t,
    intro: n,
    house: r,
    chapter: o,
    continuing: i,
    muted: c,
    reduced: l,
    revealed: f,
    leaving: k,
    covered: p,
    onStart: u,
    onSettings: m,
    onToggleSound: g,
    attract: b,
    startRef: w
}) {
    const v = ft(f ? n : "", l),
        [H, E] = h.useState(!1),
        M = h.useRef(!0);
    return h.useEffect(() => {
        if (r || k) return;
        M.current = !0;
        let C = 0,
            _ = 0,
            x = 0;
        b(0);
        const W = () => {
            _ = window.setTimeout(() => {
                M.current && (E(!0), x = window.setTimeout(() => {
                    M.current && (C = (C + 1) % Vn.length, b(C), E(!1), W())
                }, l ? 0 : 400))
            }, Gn * 1e3 - (l ? 0 : 400))
        };
        return W(), () => {
            window.clearTimeout(_), window.clearTimeout(x), E(!1)
        }
    }, [r, k, l]), a.jsxs("section", {
        className: "pq-title" + (f ? " revealed" : "") + (k ? " leaving" : "") + (p ? " covered" : "") + (r ? " house" : ""),
        "aria-labelledby": "pq-title-heading",
        children: [!l && a.jsx(Bn, {
            cover: H
        }), a.jsxs("div", {
            className: "pq-title-block",
            children: [a.jsx("span", {
                className: "pq-eyebrow pq-rise",
                children: I("HADIAH UNTUK {name}", "A GIFT FOR {name}", {
                    name: e.toUpperCase()
                })
            }), a.jsxs("h1", {
                id: "pq-title-heading",
                className: "pq-wordmark pq-rise",
                children: [r ? s("Ruang Singgah", "A Room to Rest") : s("Taman Kecil", "Little Garden"), a.jsx("b", {
                    "aria-hidden": "true",
                    children: "."
                })]
            }), a.jsxs("p", {
                className: "pq-intro pq-rise",
                children: [a.jsx("span", {
                    children: v.shown
                }), !v.complete && a.jsx("span", {
                    className: "pq-ghost-text",
                    "aria-hidden": "true",
                    children: v.rest
                })]
            }), a.jsxs("button", {
                ref: w,
                className: "pq-play pq-rise",
                onClick: () => {
                    M.current = !1, E(!1), u()
                },
                "data-sfx": "confirm",
                "aria-label": i ? s("Lanjutkan", "Continue") : s("Mulai", "Start"),
                "aria-describedby": "pq-chapter",
                children: [a.jsx("span", {
                    className: "pq-play-icon",
                    "aria-hidden": "true",
                    children: a.jsx(N, {
                        name: "play",
                        size: 24
                    })
                }), a.jsxs("span", {
                    className: "pq-play-text",
                    children: [a.jsx("strong", {
                        children: i ? s("Lanjutkan", "Continue") : s("Mulai", "Start")
                    }), a.jsx("small", {
                        id: "pq-chapter",
                        children: I("Bab {n} · {title}", "Chapter {n} · {title}", {
                            n: o.n,
                            title: o.title
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "pq-row pq-rise",
                children: [a.jsxs("button", {
                    className: "pq-glass",
                    onClick: m,
                    children: [a.jsx(N, {
                        name: "gear",
                        size: 16
                    }), s("Pengaturan", "Settings")]
                }), a.jsxs("button", {
                    className: "pq-glass",
                    onClick: g,
                    "aria-pressed": !c,
                    children: [a.jsx(N, {
                        name: c ? "soundOff" : "soundOn",
                        size: 16
                    }), s("Musik", "Music")]
                })]
            }), a.jsxs("small", {
                className: "pq-keys pq-rise",
                children: [a.jsx("kbd", {
                    children: "W"
                }), a.jsx("kbd", {
                    children: "A"
                }), a.jsx("kbd", {
                    children: "S"
                }), a.jsx("kbd", {
                    children: "D"
                }), a.jsx("span", {
                    children: s("/ panah untuk berjalan", "/ arrows to walk")
                }), a.jsx("kbd", {
                    children: "E"
                }), a.jsx("span", {
                    children: s("untuk berbicara", "to talk")
                })]
            })]
        }), a.jsxs("span", {
            className: "pq-credit pq-rise",
            children: [a.jsx(N, {
                name: "heart",
                size: 16
            }), I("Dari {from}", "From {from}", {
                from: t
            })]
        })]
    })
}
const Fn = typeof matchMedia == "function" && matchMedia("(pointer: coarse)").matches;

function ba(e = 8) {
    if (!(!Fn || typeof navigator > "u" || typeof navigator.vibrate != "function")) try {
        navigator.vibrate(e)
    } catch {}
}
const Ve = new Map,
    Je = {
        get(e) {
            if (Ot) return Ve.get(e) ?? null;
            try {
                return localStorage.getItem(e)
            } catch {
                return Ve.get(e) ?? null
            }
        },
        set(e, t) {
            if (Ot) {
                Ve.set(e, t);
                return
            }
            try {
                localStorage.setItem(e, t)
            } catch {
                Ve.set(e, t)
            }
        },
        remove(e) {
            if (Ve.delete(e), !Ot) try {
                localStorage.removeItem(e)
            } catch {}
        }
    },
    us = e => j.watermark ? I("HeyTML · untuk {name}", "HeyTML · for {name}", {
        name: e
    }) : I("Untuk {name}", "For {name}", {
        name: e
    }),
    ds = () => j.watermark ? "HeyTML PLAY" : "PIXEL PLAY",
    hs = () => j.watermark ? "HEYTML / LITTLE MOMENTS" : "LITTLE MOMENTS",
    ks = e => `${j.watermark ? "HeyTML" : s("Kenangan", "Memory")}-${j.name}-${e}.png`,
    Jn = () => j.watermark ? s("SEBUAH TAMAN KECIL DARI HEYTML", "A LITTLE GARDEN FROM HEYTML") : I("SEBUAH TAMAN KECIL DARI {name}", "A LITTLE GARDEN FROM {name}", {
        name: j.from.toUpperCase()
    }),
    ms = () => j.watermark ? s("Instrumental orisinal HeyTML · diputar melalui audio taman", "HeyTML original instrumental · played through the garden's audio") : s("Instrumental orisinal · diputar melalui audio taman", "Original instrumental · played through the garden's audio"),
    Va = {
        left: -16,
        right: 17,
        front: 6.5,
        back: -19
    },
    me = {
        ...Va,
        right: 24,
        back: -26.5
    },
    Oe = {
        x: 12.4,
        z: .1,
        width: 7.4,
        depth: 6.6,
        ground: .28
    },
    wa = {
        arcade: {
            x: 10.2,
            z: -1.7
        },
        arcadeSpot: {
            x: 10.2,
            z: .1
        },
        backdrop: {
            x: 14.2,
            z: -2
        },
        photoSpot: {
            x: 14.2,
            z: 2.7
        },
        floor: .34
    },
    $n = [{
        x: 9,
        z: 2,
        w: 1.5,
        d: .07
    }, {
        x: 15.75,
        z: 1.17,
        w: .9,
        d: .04
    }, {
        x: 10.2,
        z: -1.7,
        w: 1.12,
        d: 1.74
    }, {
        x: 14.2,
        z: -2,
        w: 3.5,
        d: .18
    }, {
        x: 14.2,
        z: 1.6,
        w: .8,
        d: .8
    }, ...[
        [8.83, -1.7],
        [11.57, -1.7],
        [12.43, -1.98],
        [15.97, -1.98],
        [12.55, -.58],
        [15.85, -.58]
    ].map(([e, t]) => ({
        x: e,
        z: t,
        w: .48,
        d: .48
    }))],
    $ = {
        x: 4.5,
        z: 4.7,
        width: 3.6,
        depth: 2.2,
        ground: .14,
        targetZ: 2.8,
        facing: "north"
    },
    Ka = {
        x: -9,
        z: -2.8,
        width: 2.7,
        depth: 2.1,
        ground: .78
    },
    ke = {
        x: -9,
        z: -2.1,
        width: 4.4,
        depth: 4,
        ground: Ka.ground
    },
    We = {
        x: 6.1,
        z: 4.65,
        width: .65,
        depth: .55
    },
    Dt = {
        x: 6.55,
        z: 3.72,
        width: .95,
        depth: .18
    },
    ps = [{
        x: 7.25,
        z: 4.55
    }, {
        x: 7.5,
        z: -.65
    }],
    Z = {
        x: -3.85,
        z: 3.6,
        width: 6.8,
        depth: 2.5,
        level: .22
    },
    Zn = {
        x: -3.6,
        z: 3.6
    },
    Xn = {
        x: -7.65,
        z: 2.08
    },
    Qn = [{
        x: -7.3,
        z: -6.1,
        height: 3.8,
        kind: "pine"
    }, {
        x: 8.8,
        z: -5.3,
        height: 5.6,
        kind: "pine"
    }, {
        x: -9.4,
        z: -7.1,
        height: 6.8,
        kind: "maple"
    }, {
        x: -12.8,
        z: -4.6,
        height: 6.2,
        kind: "maple"
    }, {
        x: -14.5,
        z: 5.2,
        height: 6.4,
        kind: "pine"
    }, {
        x: 14.6,
        z: -10.5,
        height: 7.2,
        kind: "pine"
    }, {
        x: 15.3,
        z: -17.5,
        height: 8,
        kind: "pine"
    }, {
        x: -8.6,
        z: -14,
        height: 8,
        kind: "oak"
    }, {
        x: -11.5,
        z: -10,
        height: 7.8,
        kind: "pine"
    }, {
        x: 19,
        z: -2.5,
        height: 7,
        kind: "oak"
    }, {
        x: 16,
        z: -13,
        height: 8.5,
        kind: "pine"
    }, {
        x: 10.2,
        z: -24,
        height: 7.2,
        kind: "pine"
    }, {
        x: -14,
        z: -16,
        height: 8,
        kind: "pine"
    }, {
        x: 1,
        z: -24,
        height: 10,
        kind: "pine"
    }],
    fs = [
        [-1, -17.8, .32],
        [-1, -17.35, .16],
        [1, -12, .25],
        [1, -11.63, .13],
        [-1, -9.3, .35],
        [-1, -8.91, .18],
        [1, -7.5, .3],
        [1, -7.09, .19],
        [1, -6.67, .13],
        [-1, -2.4, .28],
        [-1, -2.03, .14],
        [1, .9, .18],
        [-1, 5.4, .25]
    ],
    rt = [{
        z: -26.5,
        x: -4.5,
        width: 3.6,
        level: 1.55
    }, {
        z: -19,
        x: -4.5,
        width: 3.6,
        level: 1.55
    }, {
        z: -12,
        x: -4,
        width: 3.8,
        level: 1.45
    }, {
        z: -8,
        x: -4.6,
        width: 3.6,
        level: 1.15
    }, {
        z: -4,
        x: -4.5,
        width: 3.8,
        level: .35
    }, {
        z: 0,
        x: -4.1,
        width: 3.8,
        level: -.08
    }, {
        z: 3.6,
        x: -3.95,
        width: 4.2,
        level: -.14
    }, {
        z: 6.5,
        x: -3.95,
        width: 4.2,
        level: -.14
    }],
    Zt = (e, t = 0, n = 1) => Math.max(t, Math.min(n, e)),
    ht = e => (e = Zt(e), e * e * (3 - 2 * e));

function gt(e) {
    const t = Zt(e, me.back, me.front);
    let n = 0;
    for (; n < rt.length - 2 && t > rt[n + 1].z;) n++;
    const r = rt[n],
        o = rt[n + 1],
        i = (t - r.z) / (o.z - r.z),
        c = ht(i),
        l = 6 * i * (1 - i) / (o.z - r.z),
        f = r.x + (o.x - r.x) * c,
        k = r.width + (o.width - r.width) * c,
        p = r.level + (o.level - r.level) * c;
    return {
        x: f,
        width: k,
        left: f - k / 2,
        right: f + k / 2,
        level: p,
        dx: (o.x - r.x) * l,
        slope: (o.level - r.level) * l,
        depth: .29 + .12 * Math.sin(c * Math.PI)
    }
}

function yt(e) {
    if (e < me.back || e > me.front) return null;
    const t = gt(e);
    return {
        left: t.left,
        right: t.right
    }
}

function er(e, t) {
    const n = gt(t);
    return t < me.back || t > me.front ? Math.hypot(Math.max(n.left - e, e - n.right, 0), Math.max(me.back - t, t - me.front)) : Math.max(n.left - e, e - n.right)
}

function tr(e) {
    const t = Zt(e.z, me.back, me.front),
        n = gt(t);
    return Math.hypot(Math.max(n.left - e.x, 0, e.x - n.right), e.z - t)
}
const ar = [{
    id: "activities",
    control: [{
        x: 4.5,
        z: 2.4
    }, {
        x: 6.4,
        z: 2.4
    }, {
        x: 7.2,
        z: 2.7
    }, {
        x: 8.8,
        z: 2.7
    }],
    width: 1.4
}, {
    id: "main",
    control: [{
        x: 4.5,
        z: 4
    }, {
        x: 4.5,
        z: 2.6
    }, {
        x: 4.5,
        z: .8
    }, {
        x: 4.5,
        z: -.7
    }],
    width: 1.4
}, {
    id: "bridgeEast",
    control: [{
        x: 2.95,
        z: 4.55
    }, {
        x: 1.65,
        z: 4.55
    }, {
        x: .95,
        z: 3.6
    }, {
        x: -.48,
        z: 3.6
    }],
    width: 1.4,
    endWidth: 2.5
}, {
    id: "bridgeWest",
    control: [{
        x: -7.22,
        z: 3.6
    }, {
        x: -9,
        z: 3.6
    }, {
        x: -9,
        z: 2.7
    }, {
        x: -9,
        z: -.1
    }],
    width: 1.35,
    startWidth: 2.5
}, {
    id: "smallStairLower",
    control: [{
        x: .35,
        z: 3.6
    }, {
        x: .65,
        z: 1.25
    }, {
        x: -.6,
        z: -.8
    }, {
        x: -.6,
        z: -3.62
    }],
    width: 1.2,
    endWidth: 1.5
}, {
    id: "mainStairLink",
    control: [{
        x: .03,
        z: .2
    }, {
        x: .95,
        z: .2
    }, {
        x: 1.45,
        z: -.65
    }, {
        x: 2.3,
        z: -.65
    }],
    width: 1.2
}, {
    id: "smallStairUpper",
    control: [{
        x: -.6,
        z: -8.18
    }, {
        x: -.6,
        z: -9.75
    }, {
        x: 1.2,
        z: -9.24
    }, {
        x: 2.6,
        z: -9.1
    }],
    width: 1.2,
    startWidth: 1.5
}, {
    id: "upperHouseLink",
    control: [{
        x: 2.6,
        z: -9.1
    }, {
        x: 3.15,
        z: -9.04
    }, {
        x: 3.7,
        z: -8.9
    }, {
        x: 4.5,
        z: -8.9
    }],
    width: 1.2
}];

function nr(e) {
    const t = e.control,
        n = t.slice(1).reduce((i, c, l) => i + Math.hypot(c.x - t[l].x, c.z - t[l].z), 0),
        r = Math.ceil(n / .1),
        o = [];
    for (let i = 0; i <= r; i++) {
        const c = i / r,
            l = 1 - c,
            f = l * l * l * t[0].x + 3 * l * l * c * t[1].x + 3 * l * c * c * t[2].x + c * c * c * t[3].x,
            k = l * l * l * t[0].z + 3 * l * l * c * t[1].z + 3 * l * c * c * t[2].z + c * c * c * t[3].z,
            p = e.width + (e.startWidth ? (e.startWidth - e.width) * (1 - ht(c / .46)) : 0) + (e.endWidth ? (e.endWidth - e.width) * ht((c - .54) / .46) : 0);
        o.push([f, k, p / 2])
    }
    return o
}
const rr = Object.fromEntries(ar.map(e => [e.id, nr(e)])),
    gs = [{
        id: "play-mouth",
        x: 7.95,
        z: 3.75,
        rx: .58,
        rz: .28,
        angle: 0,
        tone: "ivory",
        fern: !1
    }, {
        id: "play-back",
        x: 10.4,
        z: -3.8,
        rx: .9,
        rz: .28,
        angle: 0,
        tone: "gold",
        fern: !0
    }, {
        id: "play-divider",
        x: 11.95,
        z: -2.6,
        rx: .25,
        rz: .5,
        angle: 0,
        tone: "ivory",
        fern: !0
    }, {
        id: "photo-back",
        x: 14.2,
        z: -3.8,
        rx: 1.2,
        rz: .26,
        angle: 0,
        tone: "ivory",
        fern: !0
    }, {
        id: "photo-east",
        x: 16.6,
        z: .2,
        rx: .24,
        rz: .85,
        angle: 0,
        tone: "gold",
        fern: !0
    }, {
        id: "spawn-left",
        x: 2.24,
        z: 5.13,
        rx: .52,
        rz: .35,
        angle: -.15,
        tone: "ivory",
        fern: !0
    }, {
        id: "spawn-sign",
        x: 7,
        z: 3.5,
        rx: .52,
        rz: .4,
        angle: .15,
        tone: "gold",
        fern: !0
    }, {
        id: "spawn-front",
        x: 4.45,
        z: 6.1,
        rx: 1.28,
        rz: .13,
        angle: 0,
        tone: "ivory",
        fern: !1
    }, {
        id: "stall-west",
        x: -11.62,
        z: -1.28,
        rx: .38,
        rz: .75,
        angle: .12,
        tone: "gold",
        fern: !0
    }, {
        id: "stall-east",
        x: -6.6,
        z: -1.56,
        rx: .27,
        rz: .65,
        angle: 0,
        tone: "ivory",
        fern: !0
    }, {
        id: "stall-entry",
        x: -10.23,
        z: .57,
        rx: .52,
        rz: .3,
        angle: .3,
        tone: "lavender",
        fern: !0
    }, {
        id: "bank-bridge-east",
        x: -1.12,
        z: 1.2,
        rx: .24,
        rz: .73,
        angle: .1,
        tone: "ivory",
        fern: !0
    }, {
        id: "bank-small-stair",
        x: -1.87,
        z: -5,
        rx: .18,
        rz: .78,
        angle: .02,
        tone: "ivory",
        fern: !0
    }, {
        id: "bank-upper-east",
        x: -1.85,
        z: -11.6,
        rx: .2,
        rz: .9,
        angle: -.2,
        tone: "lavender",
        fern: !0
    }, {
        id: "bank-upper-west",
        x: -7.12,
        z: -9.2,
        rx: .3,
        rz: .8,
        angle: .25,
        tone: "ivory",
        fern: !0
    }, {
        id: "small-stair-east",
        x: .48,
        z: -5.5,
        rx: .24,
        rz: .85,
        angle: .02,
        tone: "ivory",
        fern: !0
    }, {
        id: "small-stair-foot",
        x: .46,
        z: -2.5,
        rx: .26,
        rz: .6,
        angle: .1,
        tone: "lavender",
        fern: !0
    }, {
        id: "junction-east",
        x: 1.55,
        z: 2.1,
        rx: .4,
        rz: .56,
        angle: -.2,
        tone: "ivory",
        fern: !0
    }, {
        id: "upper-north",
        x: 1.3,
        z: -10.1,
        rx: .7,
        rz: .28,
        angle: .02,
        tone: "lavender",
        fern: !0
    }],
    we = {
        playBounds: Va,
        kiosk: Ka,
        bridge: Z,
        guard: Zn,
        guardRest: Xn,
        trees: Qn
    };

function sr(e, t, n) {
    const r = Math.round(e * t),
        o = Math.round(e * .15),
        i = new Float32Array(r + o);
    let c = n >>> 0,
        l = 0,
        f = 0;
    for (let p = 0; p < i.length; p++) {
        c = Math.imul(c, 1664525) + 1013904223 >>> 0;
        const u = c / 4294967296 * 2 - 1;
        l = .984 * l + .016 * u, f = .82 * f + .18 * u;
        const m = .86 + .1 * Math.sin(p / e * Math.PI * .75) + .04 * Math.sin(p / e * Math.PI * 2.5);
        i[p] = (l * 1.7 + f * .42) * m
    }
    const k = i.slice(0, r);
    for (let p = 0; p < o; p++) {
        const u = p / o;
        k[p] = i[r + p] * (1 - u) + i[p] * u
    }
    return k
}
const K = {
        attack: .025
    },
    ja = ["noise", 3800, 0, .012, .05, {
        filter: "highpass"
    }],
    te = (e, t, n, r, o, i, c = 0) => t.map((l, f) => [e, l, c + f * n, r, o, i]),
    kt = {
        click: [
            ["triangle", 1700, 0, .028, .12, K],
            ["triangle", 680, .012, .032, .065, K]
        ],
        tap: [
            ["sine", 640, 0, .5, .3, K]
        ],
        memory: te("sine", [659, 784, 1046], .12, .5, .3, K),
        bridge: te("sine", [392, 523, 659], .12, .5, .3, K),
        candle: te("sine", [880, 440], .12, .5, .3, K),
        celebrate: te("sine", [523, 659, 784, 1046], .12, .5, .3, K),
        step: [
            ["sine", 90, 0, .07, .045, K]
        ],
        locked: [
            ["triangle", 125, 0, .055, .22, K],
            ["triangle", 82, .07, .08, .12, K]
        ],
        key: te("triangle", [1320, 1760, 2200], .055, .22, .12, K),
        paper: [
            ["triangle", 430, 0, .09, .045, K],
            ["triangle", 580, .04, .07, .025, K]
        ],
        item: [...te("square", [784, 988, 1175], .11, .12, .09, K), ["square", 1568, .33, .55, .09, K],
            ["triangle", 392, .33, .6, .08, K]
        ],
        door: [
            ["thin", 44, 0, .18, .6, {
                to: 66,
                attack: .04,
                hold: .08,
                filter: "bandpass",
                cut: 760,
                q: 6
            }],
            ["thin", 62, .15, .17, .5, {
                to: 48,
                attack: .03,
                hold: .06,
                filter: "bandpass",
                cut: 880,
                q: 6
            }],
            ["triangle", 150, .3, .16, .26, {
                to: 55
            }],
            ["noise", 420, .3, .1, .16, {
                filter: "lowpass",
                to: 150
            }]
        ],
        cursor: [
            ["square", 1320, 0, .035, .07, K]
        ],
        select: [ja, ["pulse", 1174.66, 0, .055, .1]],
        confirm: [ja, ["pulse", 1046.5, 0, .045, .085],
            ["pulse", 1567.98, .045, .075, .085, {
                hold: .02
            }]
        ],
        cancel: [
            ["square", 783.99, 0, .04, .055],
            ["square", 523.25, .04, .07, .05]
        ],
        open: [
            ["triangle", 392, 0, .12, .075, {
                to: 1174.66,
                hold: .05
            }],
            ["thin", 784, .01, .1, .02, {
                to: 2349.32,
                hold: .04
            }]
        ],
        close: [
            ["triangle", 1174.66, 0, .11, .07, {
                to: 392,
                hold: .04
            }],
            ["thin", 2349.32, 0, .08, .018, {
                to: 784,
                hold: .03
            }]
        ],
        toggle: [
            ["noise", 4500, 0, .01, .06, {
                filter: "highpass"
            }],
            ["pulse", 1318.51, .003, .045, .08, {
                to: 880
            }]
        ],
        tick: [
            ["thin", 2093, 0, .03, .05]
        ],
        page: [
            ["noise", 1400, 0, .12, .11, {
                to: 4200,
                attack: .03,
                q: .8
            }],
            ["noise", 5200, .085, .03, .04, {
                filter: "highpass"
            }]
        ],
        notify: [
            ["triangle", 1046.5, 0, .26, .08, {
                hold: .03
            }],
            ["triangle", 1567.98, .07, .3, .07, {
                hold: .03
            }],
            ["thin", 3135.96, .07, .05, .012]
        ],
        achievement: [...te("pulse", [783.99, 1046.5, 1318.51], .075, .065, .085), ["pulse", 1567.98, .225, .45, .085, {
                hold: .18
            }],
            ["thin", 1318.51, .225, .45, .045, {
                hold: .18
            }],
            ["triangle", 261.63, 0, .2, .17, {
                hold: .12
            }],
            ["triangle", 523.25, .225, .45, .17, {
                hold: .18
            }], ...te("thin", [2093, 2637.02, 3135.96], .06, .06, .02, void 0, .3)
        ],
        error: [
            ["square", 110, 0, .09, .06, {
                hold: .05,
                filter: "lowpass",
                cut: 1e3
            }],
            ["square", 98, .12, .14, .06, {
                hold: .08,
                filter: "lowpass",
                cut: 1e3
            }]
        ],
        countdown: [
            ["pulse", 987.77, 0, .11, .08, {
                hold: .06
            }],
            ["triangle", 493.88, 0, .11, .08, {
                hold: .06
            }]
        ],
        shutter: [
            ["noise", 5e3, 0, .012, .16, {
                filter: "highpass"
            }],
            ["noise", 1900, .008, .07, .11, {
                to: 700,
                q: .9
            }],
            ["noise", 4200, .075, .012, .12, {
                filter: "highpass"
            }]
        ],
        "tetris-start": [
            ["pulse", 783.99, 0, .07, .085],
            ["pulse", 783.99, .1, .07, .085],
            ["pulse", 1046.5, .2, .32, .085, {
                hold: .14
            }],
            ["thin", 1318.51, .2, .32, .04, {
                hold: .14
            }],
            ["triangle", 196, 0, .17, .16, {
                hold: .1
            }],
            ["triangle", 261.63, .2, .32, .17, {
                hold: .14
            }]
        ],
        "tetris-move": [
            ["pulse", 659.25, 0, .03, .07]
        ],
        "tetris-rotate": [
            ["pulse", 880, 0, .045, .065, {
                to: 1318.51
            }]
        ],
        "tetris-soft": [
            ["triangle", 330, 0, .025, .07]
        ],
        "tetris-drop": [
            ["triangle", 190, 0, .13, .24, {
                to: 50
            }],
            ["noise", 700, 0, .07, .13, {
                filter: "lowpass",
                to: 160
            }]
        ],
        "tetris-lock": [
            ["noise", 2800, 0, .014, .08, {
                filter: "highpass"
            }],
            ["pulse", 293.66, 0, .035, .06]
        ],
        "tetris-hold": [
            ["thin", 600, 0, .04, .085, {
                to: 1200
            }],
            ["thin", 1200, .04, .045, .08, {
                to: 600
            }]
        ],
        "tetris-clear": [...te("pulse", [523.25, 659.25, 783.99], .05, .05, .09), ["pulse", 1046.5, .15, .12, .09, {
                hold: .04
            }],
            ["thin", 2093, .15, .12, .035, {
                hold: .04
            }]
        ],
        "tetris-tetris": [...te("pulse", [1318.51, 1567.98], .05, .05, .085, void 0, .2), ["pulse", 2093, .3, .32, .085, {
                hold: .14
            }],
            ["thin", 1567.98, .3, .32, .045, {
                hold: .14
            }],
            ["thin", 1318.51, .3, .32, .04, {
                hold: .14
            }],
            ["triangle", 130.81, .15, .15, .16, {
                hold: .08
            }],
            ["triangle", 261.63, .3, .32, .18, {
                hold: .14
            }],
            ["noise", 6e3, .3, .08, .04, {
                filter: "highpass"
            }]
        ],
        "tetris-level": [...te("pulse", [783.99, 880, 987.77], .055, .05, .08), ["pulse", 1046.5, .165, .28, .085, {
                hold: .12
            }],
            ["thin", 1318.51, .165, .28, .04, {
                hold: .12
            }],
            ["triangle", 523.25, .165, .28, .16, {
                hold: .12
            }]
        ],
        "tetris-pause": [
            ["pulse", 1567.98, 0, .06, .07],
            ["pulse", 783.99, .07, .09, .07]
        ],
        "tetris-over": [...te("pulse", [523.25, 493.88, 466.16], .17, .15, .08, {
            hold: .09
        }), ["pulse", 440, .51, .38, .08, {
            hold: .2,
            to: 415.3
        }], ...te("triangle", [261.63, 246.94, 233.08], .17, .15, .15, {
            hold: .09
        }), ["triangle", 220, .51, .38, .15, {
            hold: .2,
            to: 207.65
        }]]
    },
    ir = {
        cursor: 50,
        tick: 40,
        "tetris-move": 30,
        "tetris-soft": 45
    },
    or = new Set(Object.keys(kt).filter(e => kt[e].some(([, , t, n]) => t + n > .15))),
    va = .01;
class cr {
    laptopPlayback = null;
    setLaptopPlayback(t) {
        this.laptopPlayback = t, this.apply()
    }
    ac = null;
    acSource = null;
    acActive = !1;
    ctx = null;
    music = null;
    effects = null;
    timer = 0;
    step = 0;
    settings = null;
    duck = !1;
    stream = null;
    ambienceBus = null;
    ambience = [];
    indoors = !1;
    waterDistance = 20;
    paused = !1;
    closed = !1;
    halt = 0;
    busy = 0;
    voices = 0;
    hiss = null;
    waves = new Map;
    cues = new Map;
    async unlock() {
        if (!this.closed) try {
            const t = this.boot();
            t.state !== "running" && await t.resume()
        } catch {}
    }
    prepare() {
        if (!this.closed) try {
            const t = this.boot();
            this.music || (this.music = t.createGain(), this.music.gain.value = 0, this.music.connect(t.destination), this.createAmbience())
        } catch {}
    }
    async start() {
        if (this.closed) return;
        const t = this.boot();
        this.music || (this.music = t.createGain(), this.music.gain.value = 0, this.music.connect(t.destination), this.createAmbience()), this.paused = !1, clearTimeout(this.halt), this.halt = 0, await t.resume(), this.ctx === t && (this.apply(), this.timer || (this.tick(), this.timer = window.setInterval(() => this.tick(), 400)))
    }
    boot() {
        if (!this.ctx) {
            const t = new AudioContext,
                n = t.createGain(),
                r = this.settings;
            n.gain.value = r && !r.muted ? r.sfx * .2 : 0, n.connect(t.destination), this.ctx = t, this.effects = n
        }
        return this.ctx
    }
    configure(t, n = !1) {
        this.settings = t, this.duck = n, this.apply()
    }
    apply() {
        if (!this.ctx || !this.settings) return;
        const t = this.settings,
            n = this.ctx.currentTime,
            r = t.muted || this.paused;
        this.music?.gain.setTargetAtTime(r || this.laptopPlayback === !1 ? 0 : t.music * (this.laptopPlayback === !0 ? .3 : this.duck ? .12 : .3), n, this.paused ? .04 : .3), this.effects?.gain.setTargetAtTime(t.muted ? 0 : t.sfx * .2, n, .1), this.ambienceBus?.gain.setTargetAtTime(r ? 0 : t.sfx * .65, n, this.paused ? .04 : .1)
    }
    createAmbience() {
        const t = this.ctx;
        this.ambienceBus = t.createGain(), this.ambienceBus.gain.value = 0, this.ambienceBus.connect(t.destination), this.stream = t.createGain(), this.stream.gain.value = this.streamLevel();
        const n = t.createBiquadFilter();
        n.type = "lowpass", n.frequency.value = 920, n.Q.value = .25, n.connect(this.stream), this.stream.connect(this.ambienceBus);
        const r = 24e3,
            o = t.createBuffer(2, r * 8, r);
        for (let c = 0; c < 2; c++) o.copyToChannel(sr(r, 8, 71931 + c * 119), c);
        const i = t.createBufferSource();
        i.buffer = o, i.loop = !0, i.connect(n), i.start(), this.ambience.push(i), this.ac = t.createGain(), this.ac.gain.value = this.acActive ? .025 : 0, this.ac.connect(this.ambienceBus), this.acSource = t.createOscillator(), this.acSource.type = "sine", this.acSource.frequency.value = 115, this.acSource.connect(this.ac), this.acSource.start()
    }
    environment(t, n) {
        const r = tr(n);
        this.indoors === (t === "house") && Math.abs(r - this.waterDistance) < .15 || (this.indoors = t === "house", this.waterDistance = r, this.updateAmbience())
    }
    airConditioning(t) {
        t !== this.acActive && (this.acActive = t, this.ctx && this.ac?.gain.setTargetAtTime(t ? .025 : 0, this.ctx.currentTime, .5))
    }
    updateAmbience() {
        this.ctx && this.stream?.gain.setTargetAtTime(this.streamLevel(), this.ctx.currentTime, .65)
    }
    streamLevel() {
        return this.indoors ? 0 : .38 * Math.max(0, 1 - this.waterDistance / 5)
    }
    note(t, n, r, o, i, c = "sine") {
        if (!this.ctx) return;
        const l = this.ctx.createOscillator(),
            f = this.ctx.createGain();
        l.type = c, l.frequency.value = t, f.gain.setValueAtTime(0, n), f.gain.linearRampToValueAtTime(o, n + .025), f.gain.exponentialRampToValueAtTime(.001, n + r), l.connect(f), f.connect(i), l.start(n), l.stop(n + r + .04), l.onended = () => {
            l.disconnect(), f.disconnect()
        }
    }
    tick() {
        if (!this.ctx || !this.music || this.paused || this.ctx.state !== "running") return;
        const n = [
                [261.63, 329.63, 392, 523.25],
                [220, 261.63, 329.63, 440],
                [174.61, 261.63, 349.23, 440],
                [196, 246.94, 293.66, 392]
            ][Math.floor(this.step / 12) % 4],
            o = n[[0, 2, 1, 3, 2, 1, 0, 2, 3, 1, 2, 1][this.step % 12]],
            i = this.ctx.currentTime;
        this.note(o, i, 1.5, .35, this.music), this.note(o * 2, i, 1.05, .045, this.music, "triangle"), this.step % 12 === 0 && this.note(n[0] / 2, i, 4.6, .28, this.music), this.step % 24 === 18 && (this.note(1550, i, .09, .018, this.music), this.note(1880, i + .13, .12, .013, this.music)), this.step = (this.step + 1) % 192
    }
    voice(t) {
        const n = this.settings;
        if (!this.ctx || !this.effects || !n || n.muted || !n.sfx || this.voices >= 24) return;
        const r = t === "sage" ? 185 : t === "keeper" ? 247 : 330,
            o = [0, 2, 4, 5, 7][Math.floor(Math.random() * 5)];
        this.wake(), this.layer(["square", r * 2 ** (o / 12), 0, .045, .11, K], this.ctx.currentTime + va)
    }
    effect(t) {
        const n = this.ctx,
            r = this.settings,
            o = kt[t],
            i = performance.now(),
            c = this.cues.get(t);
        if (!n || !this.effects || !r || r.muted || !r.sfx || !o || c && i - c[0] < (ir[t] ?? 20) || this.voices >= (or.has(t) ? 48 : 24)) return;
        const l = u => {
                const m = this.cues.get(u);
                return m && i - m[0] < 80 ? m[1] : null
            },
            f = l("tetris-clear"),
            k = l("tetris-tetris");
        let p = n.currentTime + va;
        t === "tetris-clear" && k !== null || (t === "tetris-tetris" && (f === null ? kt["tetris-clear"].forEach(u => this.layer(u, p)) : p = f), t === "tetris-level" && (p = Math.max(p, k !== null ? k + .62 : f !== null ? f + .27 : 0)), this.wake(), this.cues.set(t, [i, p]), o.forEach(u => this.layer(u, p)))
    }
    layer([t, n, r, o, i, c = {}], l) {
        const f = this.ctx,
            k = Math.max(l + r, f.currentTime),
            p = k + o,
            u = Math.min(c.attack ?? .003, o * .9),
            m = Math.max(0, Math.min(c.hold ?? 0, o * .8 - u)),
            g = f.createGain();
        let b, w = null;
        if (t === "noise") {
            const v = f.createBufferSource();
            v.buffer = this.noise(), v.loop = !0, w = f.createBiquadFilter(), w.type = c.filter ?? "bandpass", w.Q.value = c.q ?? 1, this.glide(w.frequency, n, c.to, k, p), v.start(k, Math.random() * .5), b = v
        } else {
            const v = f.createOscillator();
            t === "pulse" || t === "thin" ? v.setPeriodicWave(this.pulse(t === "pulse" ? .25 : .125)) : v.type = t, this.glide(v.frequency, n, c.to, k, p), c.filter && (w = f.createBiquadFilter(), w.type = c.filter, w.frequency.value = c.cut ?? 1e3, w.Q.value = c.q ?? 1), v.start(k), b = v
        }
        g.gain.setValueAtTime(0, k), g.gain.linearRampToValueAtTime(i, k + u), m && g.gain.setValueAtTime(i, k + u + m), g.gain.exponentialRampToValueAtTime(5e-4, p), (w ? b.connect(w).connect(g) : b.connect(g)).connect(this.effects), b.stop(p + .02), this.voices++, this.busy = Math.max(this.busy, p + .02), b.onended = () => {
            this.voices--, b.disconnect(), w?.disconnect(), g.disconnect()
        }
    }
    glide(t, n, r, o, i) {
        t.setValueAtTime(n, o), r && t.exponentialRampToValueAtTime(r, i)
    }
    noise() {
        if (!this.hiss) {
            const t = this.ctx,
                n = t.createBuffer(1, t.sampleRate, t.sampleRate),
                r = n.getChannelData(0);
            for (let o = 0; o < r.length; o++) r[o] = Math.random() * 2 - 1;
            this.hiss = n
        }
        return this.hiss
    }
    pulse(t) {
        let n = this.waves.get(t);
        if (!n) {
            const r = [0],
                o = [0];
            for (let i = 1; i < 128; i++) r.push(Math.sin(Math.PI * i * t) / i), o.push(0);
            n = this.ctx.createPeriodicWave(r, o), this.waves.set(t, n)
        }
        return n
    }
    wake() {
        const t = this.ctx;
        t && t.state !== "running" && !document.hidden && t.resume().catch(() => {})
    }
    suspend() {
        this.paused = !0, this.ctx && (this.apply(), this.park(.25))
    }
    resume() {
        this.paused = !1, clearTimeout(this.halt), this.halt = 0, this.ctx && (this.ctx.resume().catch(() => {}), this.apply())
    }
    park(t) {
        clearTimeout(this.halt), this.halt = window.setTimeout(() => {
            this.halt = 0;
            const n = this.ctx;
            if (!n || !this.paused || n.state !== "running") return;
            const r = this.busy - n.currentTime;
            r > 0 ? this.park(r + .05) : n.suspend().catch(() => {})
        }, t * 1e3)
    }
    dispose() {
        this.closed = !0, clearInterval(this.timer), clearTimeout(this.halt), this.timer = this.halt = 0, this.ambience.forEach(t => {
            t.stop(), t.disconnect()
        }), this.ambience = [], this.acSource?.stop(), this.acSource?.disconnect(), this.ctx?.close().catch(() => {}), this.ctx = this.music = this.effects = this.stream = this.ambienceBus = this.ac = null, this.acSource = null, this.hiss = null, this.waves.clear(), this.cues.clear(), this.voices = 0
    }
}
const _a = () => ({
    noteRead: !1,
    doorChecked: !1,
    sageClue: !1,
    guardAnswers: 0,
    movedFruit: [],
    key: "hidden",
    houseUnlocked: !1,
    enteredHouse: !1
});

function lr(e, t) {
    switch (t.type) {
    case "read-note":
        return e.noteRead ? e : {
            ...e,
            noteRead: !0
        };
    case "check-door":
        return e.noteRead && !e.doorChecked ? {
            ...e,
            doorChecked: !0
        } : e;
    case "sage-clue":
        return e.doorChecked && !e.sageClue ? {
            ...e,
            sageClue: !0
        } : e;
    case "guard-answer":
        return e.sageClue && t.correct && t.question === e.guardAnswers ? {
            ...e,
            guardAnswers: e.guardAnswers + 1
        } : e;
    case "move-fruit":
        return e.guardAnswers === 2 && !e.movedFruit.includes(t.id) ? {
            ...e,
            movedFruit: [...e.movedFruit, t.id]
        } : e;
    case "take-key":
        return e.guardAnswers === 2 && e.movedFruit.length === 2 && e.key === "hidden" ? {
            ...e,
            key: "held"
        } : e;
    case "unlock-house":
        return e.key === "held" ? {
            ...e,
            key: "used",
            houseUnlocked: !0
        } : e;
    case "enter-house":
        return e.houseUnlocked && !e.enteredHouse ? {
            ...e,
            enteredHouse: !0
        } : e
    }
}

function ur(e) {
    const t = _a();
    if (!e || typeof e != "object") return t;
    const n = e;
    return t.noteRead = n.noteRead === !0, t.doorChecked = t.noteRead && n.doorChecked === !0, t.sageClue = t.doorChecked && n.sageClue === !0, t.guardAnswers = t.sageClue && (n.guardAnswers === 1 || n.guardAnswers === 2) ? n.guardAnswers : 0, t.movedFruit = t.guardAnswers === 2 && Array.isArray(n.movedFruit) ? ["apple-a", "apple-b"].filter(r => n.movedFruit.includes(r)) : [], t.key = t.movedFruit.length === 2 && (n.key === "held" || n.key === "used") ? n.key : "hidden", t.houseUnlocked = t.key === "used" && n.houseUnlocked === !0, t.key === "used" && !t.houseUnlocked && (t.key = "held"), t.enteredHouse = t.houseUnlocked && n.enteredHouse === !0, t
}

function ys(e, t) {
    return e.sageClue && e.guardAnswers === 2 && t
}
const dr = {
    balanced: {
        id: "balanced",
        dpr: 1.5,
        pixels: 1920 * 1080,
        foliageHz: 15,
        farFoliageHz: 8,
        actorShadowHz: 30,
        mirrorHz: 30,
        lodPixels: 1
    },
    high: {
        id: "high",
        dpr: 2,
        pixels: 1 / 0,
        foliageHz: 30,
        farFoliageHz: 15,
        actorShadowHz: 30,
        mirrorHz: 30,
        lodPixels: 0
    },
    low: {
        id: "low",
        dpr: .8,
        pixels: 1280 * 720,
        foliageHz: 8,
        farFoliageHz: 4,
        actorShadowHz: 20,
        mirrorHz: 20,
        lodPixels: 1.5
    }
};

function xs(e, t, n, r) {
    const o = dr[r];
    return Math.min(n, o.dpr, Math.sqrt(o.pixels / Math.max(1, e * t)))
}

function hr(e) {
    return e === "standard" || e === "high" ? "high" : e === "low" ? "low" : "balanced"
}
const he = {
        x: 6.2,
        z: -16.1,
        width: 12.4,
        depth: 11.2,
        ground: 2.02,
        wallHeight: 3.55,
        wall: .24,
        roofPitch: 24,
        eaves: .45,
        doorX: 4.5
    },
    Wa = {
        living: {
            label: "Ruang keluarga",
            left: -5.96,
            right: 5.96,
            back: -.6,
            front: 5.36,
            checkpoint: {
                x: -1.7,
                z: 4.55
            }
        },
        hall: {
            label: "Koridor",
            left: -.78,
            right: .78,
            back: -5.36,
            front: -.6,
            checkpoint: {
                x: 0,
                z: -1.2
            }
        },
        bedroom: {
            label: "Kamar tidur",
            left: -5.96,
            right: -.94,
            back: -5.36,
            front: -.76,
            checkpoint: {
                x: -1.65,
                z: -2.15
            }
        },
        bathroom: {
            label: "Kamar mandi",
            left: .94,
            right: 5.96,
            back: -5.36,
            front: -.76,
            checkpoint: {
                x: 1.65,
                z: -2.15
            }
        }
    },
    $e = [{
        id: "bedroom",
        x: -.86,
        z: -2.67,
        width: 1.3,
        sign: -1
    }, {
        id: "bathroom",
        x: .86,
        z: -2.67,
        width: 1.3,
        sign: 1
    }],
    Fa = [{
        id: "living-left",
        room: "living",
        label: "lampu ruang keluarga kiri",
        position: [-1.75, 2.8, -.38],
        switch: [-.92, 5.26],
        target: [-2.4, .2, 2.6],
        color: 16760691,
        power: 30,
        reach: 9,
        kind: "wall",
        on: !0
    }, {
        id: "living-right",
        room: "living",
        label: "lampu ruang keluarga kanan",
        position: [4.72, 2.8, -.38],
        switch: [-.64, 5.26],
        target: [2, .2, 2.8],
        color: 16762239,
        power: 30,
        reach: 9,
        kind: "wall",
        on: !0
    }, {
        id: "desk-lamp",
        room: "living",
        label: "lampu meja surat",
        position: [5.15, 1.59, 2.46],
        switch: [3.82, 2.75],
        target: [4.85, 1.14, 1.7],
        color: 16767388,
        power: 4,
        reach: 3.5,
        kind: "table",
        on: !0
    }, {
        id: "hall-lamp",
        room: "hall",
        label: "lampu koridor",
        position: [0, 2.8, -5.1],
        switch: [.45, -.92],
        target: [0, .1, -1.8],
        color: 16762242,
        power: 15,
        reach: 6,
        kind: "wall",
        on: !0
    }, {
        id: "bedroom-main",
        room: "bedroom",
        label: "lampu kamar tidur",
        position: [-3.3, 3.2, -2.6],
        switch: [-1.28, -2.35],
        target: [-3.4, 0, -2.8],
        color: 16762251,
        power: 24,
        reach: 6.5,
        kind: "ceiling",
        on: !0
    }, {
        id: "bedside-left",
        room: "bedroom",
        label: "lampu nakas kiri",
        position: [-4.82, 1.28, -4.58],
        switch: [-4.8, -3.65],
        target: [-4.6, .2, -3.6],
        color: 16760177,
        power: 3.5,
        reach: 3,
        kind: "table",
        on: !1
    }, {
        id: "bedside-right",
        room: "bedroom",
        label: "lampu nakas kanan",
        position: [-1.85, 1.28, -4.58],
        switch: [-1.85, -3.6],
        target: [-2.2, .2, -3.6],
        color: 16760177,
        power: 3.5,
        reach: 3,
        kind: "table",
        on: !1
    }, {
        id: "bath-main",
        room: "bathroom",
        label: "lampu kamar mandi",
        position: [3.4, 3.22, -2.8],
        switch: [1.28, -2.35],
        target: [3.4, .1, -3.1],
        color: 16769204,
        power: 28,
        reach: 6,
        kind: "ceiling",
        on: !0
    }, {
        id: "mirror-lamp",
        room: "bathroom",
        label: "lampu cermin",
        position: [2.23, 2.78, -5.1],
        switch: [2.86, -3.95],
        target: [2.2, 1.1, -4],
        color: 16770247,
        power: 9,
        reach: 3.4,
        kind: "wall",
        on: !0
    }],
    Ja = [{
        id: "spawn",
        x: 6.95,
        z: 4.8,
        label: "pelataran"
    }, {
        id: "fork",
        x: 7.65,
        z: -.6,
        label: "persimpangan"
    }, {
        id: "bridge-east",
        x: 1.7,
        z: 2.1,
        label: "jembatan timur"
    }, {
        id: "kiosk",
        x: -10.4,
        z: 1.7,
        label: "halaman kios"
    }, {
        id: "small-stair",
        x: 1.1,
        z: -5.9,
        label: "tangga kecil"
    }, {
        id: "main-stair",
        x: 7.65,
        z: -3.6,
        label: "tangga utama"
    }, {
        id: "approach",
        x: 7.65,
        z: -8.4,
        label: "jalan rumah"
    }, {
        id: "east-path",
        x: 8.2,
        z: 3.85,
        label: "jalan aktivitas"
    }, {
        id: "activities",
        x: 12.25,
        z: 3.95,
        label: "pelataran aktivitas"
    }, {
        id: "porch-left",
        x: 3.63,
        z: -10.2,
        label: "teras kiri",
        porch: !0
    }, {
        id: "porch-right",
        x: 5.54,
        z: -10.2,
        label: "teras kanan",
        porch: !0
    }],
    bs = [...[-4.85, -3.25, 1.5, 4.35].map((e, t) => ({
        id: "front-" + t,
        wall: "front",
        at: e,
        room: "living",
        width: t < 2 ? 1.05 : 1.5,
        bottom: 1.05,
        height: 1.55
    })), {
        id: "left-living",
        wall: "left",
        at: 2.6,
        room: "living",
        width: 1.65,
        bottom: 1.05,
        height: 1.55
    }, {
        id: "left-bed",
        wall: "left",
        at: -3.3,
        room: "bedroom",
        width: 1.65,
        bottom: 1.15,
        height: 1.45
    }, {
        id: "right-desk",
        wall: "right",
        at: 1.35,
        room: "living",
        width: 1.8,
        bottom: 1.3,
        height: 1.55
    }, {
        id: "right-bath",
        wall: "right",
        at: -3.9,
        room: "bathroom",
        width: 1.1,
        bottom: 2.05,
        height: .72,
        frost: !0
    }, {
        id: "back-bed",
        wall: "back",
        at: -3.4,
        room: "bedroom",
        width: 1.65,
        bottom: 1.7,
        height: 1.05
    }, {
        id: "back-bath",
        wall: "back",
        at: 4.65,
        room: "bathroom",
        width: 1.15,
        bottom: 2.05,
        height: .72,
        frost: !0
    }];

function ws(e, t) {
    const n = Math.min(he.width / 2 + he.eaves - Math.abs(e - he.x), he.depth / 2 + he.eaves - Math.abs(t - he.z));
    return he.ground + .16 + he.wallHeight + Math.max(0, n) * Math.tan(he.roofPitch * Math.PI / 180)
}

function kr() {
    return {
        version: 3,
        senderGreeted: !1,
        area: "garden",
        room: "living",
        fireOn: !1,
        teaPoured: !1,
        acOn: !1,
        doors: {
            bedroom: !1,
            bathroom: !1
        },
        lights: Object.fromEntries(Fa.map(e => [e.id, !1])),
        outdoor: Object.fromEntries(Ja.map(e => [e.id, "off"]))
    }
}

function js(e) {
    const t = kr();
    try {
        const n = JSON.parse(e ?? "null");
        return !n || typeof n != "object" || (t.area = n.area === "house" ? "house" : "garden", t.senderGreeted = n.senderGreeted === !0, t.teaPoured = n.teaPoured === !0, t.acOn = n.acOn === !0, typeof n.room == "string" && Object.hasOwn(Wa, n.room) && (t.room = n.room)), t
    } catch {
        return t
    }
}

function vs(e, t = "living") {
    return e.z > -.5 || e.z > -.82 && t === "living" ? "living" : e.x < -.92 ? "bedroom" : e.x > .92 ? "bathroom" : "hall"
}
const ie = he,
    ce = {
        x: 4.5,
        startZ: -5.38,
        endZ: -9.95,
        width: 2.12
    },
    mr = {
        x: ce.x,
        z: ie.z + ie.depth / 2 + .95
    },
    pr = {
        x: ce.x,
        z: ie.z + ie.depth / 2 + 1.5
    },
    Ns = [{
        x: 2.48,
        z: -6.45,
        rx: .63,
        rz: .66,
        count: 35,
        tone: "ivory"
    }, {
        x: 2.49,
        z: -7.8,
        rx: .63,
        rz: .71,
        count: 40,
        tone: "coral"
    }, {
        x: 2.44,
        z: -9.22,
        rx: .7,
        rz: .61,
        count: 38,
        tone: "lavender"
    }, {
        x: 6.53,
        z: -6.45,
        rx: .63,
        rz: .66,
        count: 35,
        tone: "ivory"
    }, {
        x: 6.5,
        z: -7.8,
        rx: .63,
        rz: .71,
        count: 40,
        tone: "coral"
    }, {
        x: 6.52,
        z: -9.22,
        rx: .65,
        rz: .61,
        count: 38,
        tone: "lavender"
    }],
    xt = (e, t, n) => Math.max(t, Math.min(n, e)),
    st = (e, t, n) => {
        const r = xt(.5 + .5 * (t - e) / n, 0, 1);
        return t * (1 - r) + e * r - n * r * (1 - r)
    };

function fr(e) {
    const t = xt((ce.startZ - e) / .87, 0, 1);
    return 2.32 + (ce.width / 2 - 2.32) * t * t * (3 - 2 * t)
}

function gr(e, t) {
    return Math.max(Math.abs(e - ce.x) - fr(t), t - ce.startZ, -10.47 - t)
}

function it(e, t, n, r, o, i, c = .16) {
    const l = Math.abs(e - n) - (o / 2 - c),
        f = Math.abs(t - r) - (i / 2 - c);
    return Math.hypot(Math.max(l, 0), Math.max(f, 0)) + Math.min(Math.max(l, f), 0) - c
}
const Kt = new Map;
for (const e of Object.values(rr))
    for (let t = 1; t < e.length; t++) {
        const n = e[t - 1],
            r = e[t],
            o = r[0] - n[0],
            i = r[1] - n[1],
            c = {
                x: n[0],
                z: n[1],
                dx: o,
                dz: i,
                lengthSq: o * o + i * i,
                r: n[2],
                dr: r[2] - n[2]
            },
            l = Math.max(n[2], r[2]) + 1.1;
        for (let f = Math.floor(Math.min(n[0], r[0]) - l); f <= Math.floor(Math.max(n[0], r[0]) + l); f++)
            for (let k = Math.floor(Math.min(n[1], r[1]) - l); k <= Math.floor(Math.max(n[1], r[1]) + l); k++) {
                const p = f + ":" + k;
                let u = Kt.get(p);
                u || (u = [], Kt.set(p, u)), u.push(c)
            }
    }

function yr(e, t) {
    let n = 4;
    const r = Kt.get(Math.floor(e) + ":" + Math.floor(t));
    if (r)
        for (const i of r) {
            const c = xt(((e - i.x) * i.dx + (t - i.z) * i.dz) / i.lengthSq, 0, 1);
            n = Math.min(n, Math.hypot(e - i.x - i.dx * c, t - i.z - i.dz * c) - i.r - i.dr * c)
        }
    let o = st(n, it(e, t, 4.5, -1.175, 4.8, 1.25, .18), .12);
    return o = st(o, it(e, t, $.x, $.z, $.width, $.depth, .2), .08), o = st(o, it(e, t, ke.x, ke.z, ke.width, ke.depth, .22), .12), o = st(o, it(e, t, Oe.x, Oe.z, Oe.width, Oe.depth, .32), .12), Math.min(o, gr(e, t))
}

function xr(e, t) {
    const n = xt((.22 - yr(e, t)) / .4, 0, 1);
    return n * n * (3 - 2 * n)
}
const Ms = {
        fov: 32,
        pitch: 18,
        yaw: 0,
        distance: 14,
        targetOffset: {
            x: 0,
            y: .75,
            z: -.65
        }
    },
    $a = [{
        id: "bridge",
        kind: "deck",
        ...we.bridge,
        bottom: we.bridge.level,
        top: we.bridge.level
    }, {
        id: "stairs-main",
        kind: "ramp",
        x: 4.5,
        z: -3.6,
        width: 4.8,
        depth: 3.6,
        bottom: .08,
        top: 1.7
    }, {
        id: "stairs-small",
        kind: "ramp",
        x: -.6,
        z: -5.9,
        width: 1.5,
        depth: 4.6,
        bottom: .35,
        top: 2.65
    }],
    br = we.trees,
    re = (e, t, n) => {
        const r = Math.max(0, Math.min(1, (n - e) / (t - e)));
        return r * r * (3 - 2 * r)
    };

function Le(e, t) {
    const n = re(-1.4, 8, -t),
        r = .7 * Math.exp(-((e + .6) ** 2 / 8 + (t + 8) ** 2 / 17)),
        o = .4 * Math.exp(-((e - 6) ** 2 / 19 + (t + 8) ** 2 / 12));
    let i = .07 + Math.sin(e * .37) * .065 + Math.cos(t * .48 + e * .15) * .055 + n * (1.8 + r + o) + .26 * Math.exp(-((e - 1) ** 2 / 5 + (t + 3.2) ** 2 / 8));
    i += .6 * Math.exp(-((e - 1.3) ** 2 / 2.9)) * re(.9, 4.8, -t) * (1 - re(8.7, 12, -t)), i += .46 * Math.exp(-((e + 2.05) ** 2 / 1.3)) * re(1.8, 5.2, -t) * (1 - re(8.4, 11, -t)), i += .34 * Math.exp(-((e - 7.4) ** 2 / 3 + (t + 7.1) ** 2 / 2.5)), i += .25 * Math.exp(-((e - 2.6) ** 2 / 3.1 + (t - 2.8) ** 2 / 5.5)), i += .22 * Math.exp(-((e - 6.5) ** 2 / 3.5 + (t - 3.1) ** 2 / 6)), i -= .026 * xr(e, t);
    for (const k of $a.filter(p => p.kind === "ramp")) {
        const p = Math.max(0, Math.abs(e - k.x) - k.width / 2),
            u = Math.max(0, Math.abs(t - k.z) - k.depth / 2),
            m = Math.hypot(p, u);
        if (m < 1.45) {
            const g = Math.max(0, Math.min(1, (k.z + k.depth / 2 - t) / k.depth)),
                b = k.bottom + (k.top - k.bottom) * g,
                w = 1 - re(0, 1.45, m);
            i = i * (1 - w) + b * w
        }
    }
    if (yt(t)) {
        const k = Math.max(0, er(e, t)),
            p = gt(t),
            u = 1 - re(0, 1.15, k);
        i = i * (1 - u) + (p.level + .15) * u
    }
    const c = Math.max(0, Math.abs(e - ie.x) - ie.width / 2 - .25),
        l = Math.max(0, Math.abs(t - ie.z) - ie.depth / 2 - .35),
        f = 1 - re(0, 1.15, Math.hypot(c, l));
    if (i = i * (1 - f) + ie.ground * f, t <= ce.startZ && t >= ce.endZ) {
        const k = re(ce.startZ, ce.endZ, t),
            p = 1.7 + (ie.ground - 1.7) * k,
            u = 1 - re(1.28, 2.05, Math.abs(e - ce.x));
        i = i * (1 - u) + p * u
    }
    for (const k of [$, ke, Oe]) {
        const p = Math.max(0, Math.abs(e - k.x) - k.width / 2),
            u = Math.max(0, Math.abs(t - k.z) - k.depth / 2),
            m = 1 - re(0, k === $ ? .55 : k === Oe ? 1.2 : 1.45, Math.hypot(p, u));
        i = i * (1 - m) + k.ground * m
    }
    if (e < -7.3 && t > ke.z + ke.depth / 2 && t < 3.6) {
        const k = ke.z + ke.depth / 2,
            p = ht((3.6 - t) / (3.6 - k)),
            u = .13 + (ke.ground - .13) * p,
            m = 1 - re(.8, 1.6, Math.abs(e + 9));
        i = i * (1 - m) + u * m
    }
    return i
}

function bt(e) {
    if (e.x > 8.7 && e.x < 16 && e.z > -2.85 && e.z < 1.05) return {
        id: "activity-deck",
        height: .34
    };
    for (const t of $a)
        if (Math.abs(e.x - t.x) <= t.width / 2 && Math.abs(e.z - t.z) <= t.depth / 2) {
            const n = (t.z + t.depth / 2 - e.z) / t.depth;
            return {
                id: t.id,
                height: t.kind === "deck" ? t.top : t.bottom + (t.top - t.bottom) * Math.max(0, Math.min(1, n))
            }
        } return {
        id: "ground",
        height: Le(e.x, e.z)
    }
}

function zs(e, t) {
    const n = bt({
        x: e,
        z: t
    });
    return n.id.startsWith("stairs") ? n.height - .19 : Le(e, t)
}
const G = {
    bounds: we.playBounds,
    river: yt(3.6),
    player: {
        x: $.x,
        z: $.z
    },
    guard: we.guard,
    guardRest: we.guardRest,
    sage: {
        x: -.6,
        z: -8.7
    },
    house: ie,
    kiosk: we.kiosk
};
$.x, $.z, $.x, $.targetZ + .65;
const Ss = {
        guard: {
            height: 2.2
        },
        chicken: {
            rows: 2,
            height: 1.05
        }
    },
    wr = {
        ...mr
    },
    jr = {
        ...pr
    };
({
    ...Wa.living.checkpoint
});
const vr = [{
        x: -4.4,
        z: 2.25,
        w: 1.55,
        d: 2.45
    }, {
        x: -1,
        z: 2.3,
        w: 2.2,
        d: 1.2
    }, {
        x: 2.7,
        z: 2.75,
        w: 1.3,
        d: 1.45
    }, {
        x: 2.75,
        z: -.29,
        w: 2.75,
        d: .76
    }, {
        x: -3.45,
        z: .3,
        w: 2.9,
        d: 1.17
    }, {
        x: 5.02,
        z: 1.52,
        w: 1.02,
        d: 2.65
    }, {
        x: -4.4,
        z: 4.65,
        w: 1.9,
        d: .8
    }, {
        x: 5,
        z: 4.6,
        w: .75,
        d: .8
    }, {
        x: -3.35,
        z: -3.72,
        w: 2.22,
        d: 2.85
    }, {
        x: -4.82,
        z: -4.58,
        w: .64,
        d: .64
    }, {
        x: -1.85,
        z: -4.58,
        w: .64,
        d: .64
    }, {
        x: -5.53,
        z: -1.77,
        w: .7,
        d: 1.7
    }, {
        x: 2.22,
        z: -4.93,
        w: 1.5,
        d: .72
    }, {
        x: 5.04,
        z: -2.08,
        w: .76,
        d: 1.22
    }, {
        x: 3.65,
        z: -1.08,
        w: 1.35,
        d: .55
    }, {
        x: 4.89,
        z: -4.4,
        w: 1.75,
        d: 1.65
    }],
    Za = [{
        x: -3.45,
        z: -.68,
        w: 5.02,
        d: .16
    }, {
        x: 3.45,
        z: -.68,
        w: 5.02,
        d: .16
    }, ...[-.86, .86].flatMap(e => [{
        x: e,
        z: -4.095,
        w: .16,
        d: 2.53
    }, {
        x: e,
        z: -1.025,
        w: .16,
        d: .51
    }])],
    Nr = [{
        id: "sender",
        label: "Bicara dengan Raihan",
        point: {
            x: .72,
            z: 1.6
        },
        radius: 1.25
    }, {
        id: "exit",
        label: "Keluar ke taman",
        point: {
            x: -1.7,
            z: 5.07
        },
        radius: .82
    }, {
        id: "books",
        label: "Baca buku",
        point: {
            x: 2.75,
            z: .83
        },
        radius: .85
    }, {
        id: "tea",
        label: "Nikmati teh",
        point: {
            x: -1,
            z: 3.62
        },
        radius: .85
    }, {
        id: "desk",
        label: "Baca surat",
        point: {
            x: 3.69,
            z: 2.12
        },
        radius: .58
    }, {
        id: "laptop",
        label: "Gunakan laptop",
        point: {
            x: 3.69,
            z: .95
        },
        radius: .7
    }, {
        id: "ac",
        label: "Atur AC kamar",
        point: {
            x: -1.3,
            z: -3.2
        },
        radius: .7
    }, ...$e.map(e => ({
        id: `door:${e.id}`,
        label: e.id === "bedroom" ? "Pintu kamar tidur" : "Pintu kamar mandi",
        point: {
            x: e.x,
            z: e.z + e.width * .6
        },
        radius: 1.12
    }))];

function Xa(e, t, n) {
    const r = n.x - t.x,
        o = n.z - t.z,
        i = Math.max(0, Math.min(1, ((e.x - t.x) * r + (e.z - t.z) * o) / (r * r + o * o || 1)));
    return Math.hypot(e.x - t.x - i * r, e.z - t.z - i * o)
}

function Qa(e, t) {
    const n = $e.find(o => o.id === e),
        r = Math.PI - t * Math.PI / 2 * n.sign;
    return {
        a: {
            x: n.x,
            z: n.z + n.width
        },
        b: {
            x: n.x + Math.sin(r) * n.width,
            z: n.z + n.width + Math.cos(r) * n.width
        }
    }
}

function As(e, t) {
    const n = $e.find(r => r.id === t);
    return Math.hypot(e.x - n.x, e.z - n.z - n.width) > n.width + .28 || (e.x - n.x) * n.sign < -.3 || e.z > n.z + n.width + .28
}
const wt = {
    bedroom: 0,
    bathroom: 0
};

function Na(e, t = wt) {
    return e.x <= -5.96 + .23 || e.x >= 5.96 - .23 || e.z <= -5.36 + .23 || e.z >= 5.36 - .23 || [...vr, ...Za].some(r => Math.abs(e.x - r.x) < r.w / 2 + .23 && Math.abs(e.z - r.z) < r.d / 2 + .23) ? !1 : $e.every(r => {
        const o = Qa(r.id, t[r.id]);
        return Xa(e, o.a, o.b) > .23 + .035
    })
}

function Ts(e, t, n, r, o = wt) {
    const i = Math.max(1, Math.hypot(t, n)),
        c = 2.8 * Math.max(0, Math.min(.05, r));
    let l = {
        ...e
    };
    const f = {
        x: l.x + t / i * c,
        z: l.z
    };
    Na(f, o) && (l = f);
    const k = {
        x: l.x,
        z: l.z + n / i * c
    };
    return Na(k, o) && (l = k), l
}

function Mr(e, t, n = wt, r) {
    const o = Math.ceil(Math.hypot(e.x - t.x, e.z - t.z) / .06);
    for (let i = 1; i < o; i++) {
        const c = {
            x: e.x + (t.x - e.x) * i / o,
            z: e.z + (t.z - e.z) * i / o
        };
        if (Za.some(l => Math.abs(c.x - l.x) < l.w / 2 && Math.abs(c.z - l.z) < l.d / 2)) return !1;
        for (const l of $e) {
            if (l.id === r) continue;
            const f = Qa(l.id, n[l.id]);
            if (Xa(c, f.a, f.b) < .035) return !1
        }
    }
    return !0
}

function Es(e, t = wt) {
    return Nr.filter(n => Math.hypot(n.point.x - e.x, n.point.z - e.z) < n.radius && Mr(e, n.point, t, n.id.startsWith("door:") ? n.id.slice(5) : void 0)).sort((n, r) => Math.hypot(n.point.x - e.x, n.point.z - e.z) - Math.hypot(r.point.x - e.x, r.point.z - e.z))[0]?.id ?? null
}
const zr = {
        living: ["Ruang keluarga", "Living room"],
        hall: ["Koridor", "Hallway"],
        bedroom: ["Kamar tidur", "Bedroom"],
        bathroom: ["Kamar mandi", "Bathroom"]
    },
    Ma = {
        "living-left": ["lampu ruang keluarga kiri", "left living room lamp"],
        "living-right": ["lampu ruang keluarga kanan", "right living room lamp"],
        "desk-lamp": ["lampu meja surat", "desk lamp"],
        "hall-lamp": ["lampu koridor", "hallway lamp"],
        "bedroom-main": ["lampu kamar tidur", "bedroom lamp"],
        "bedside-left": ["lampu nakas kiri", "left bedside lamp"],
        "bedside-right": ["lampu nakas kanan", "right bedside lamp"],
        "bath-main": ["lampu kamar mandi", "bathroom lamp"],
        "mirror-lamp": ["lampu cermin", "mirror lamp"]
    },
    za = {
        arcade: ["Main arcade", "Play the arcade"],
        photoBooth: ["Ambil foto", "Take a photo"],
        postcard: ["Baca surat sambutan", "Read the welcome letter"],
        album: ["Periksa tumpukan buah", "Check the fruit pile"],
        bridge: ["Bicara", "Talk"],
        wishes: ["Kakek Misterius", "The Old Sage"],
        finale: ["Masuk rumah", "Enter the house"],
        exit: ["Keluar ke taman", "Go out to the garden"],
        books: ["Baca buku", "Read a book"],
        tea: ["Nikmati teh", "Enjoy some tea"],
        desk: ["Baca surat", "Read the letter"],
        laptop: ["Gunakan laptop", "Use the laptop"]
    },
    Sr = e => s(...zr[e]),
    Ar = e => Ma[e] ? s(...Ma[e]) : e;

function en(e, t, n = "") {
    if (e === "sender") return I("Bicara dengan {name}", "Talk to {name}", {
        name: n
    });
    if (e.startsWith("switch:")) {
        const r = e.slice(7),
            o = !!t?.lights[r],
            i = Ar(Fa.find(c => c.id === r)?.id ?? r);
        return o ? I("Matikan {light}", "Turn off the {light}", {
            light: i
        }) : I("Nyalakan {light}", "Turn on the {light}", {
            light: i
        })
    }
    if (e.startsWith("door:")) {
        const r = e.slice(5) === "bedroom",
            o = !!t?.doors[e.slice(5)];
        return r ? o ? s("Tutup pintu kamar tidur", "Close the bedroom door") : s("Buka pintu kamar tidur", "Open the bedroom door") : o ? s("Tutup pintu kamar mandi", "Close the bathroom door") : s("Buka pintu kamar mandi", "Open the bathroom door")
    }
    return e === "ac" ? t?.acOn ? s("Matikan AC kamar", "Turn off the bedroom AC") : s("Nyalakan AC kamar", "Turn on the bedroom AC") : za[e] ? s(...za[e]) : ""
}
const Te = "gift",
    ut = (e = j.id) => "heytml:3d-journey:v4:" + e + ":" + Te;
ut(Ca);
const Tr = "heytml:3d-journey:v3:" + Te,
    Er = "heytml:3d-journey:v1:nara-arka",
    Sa = "heytml:3d-journey:settings",
    tn = () => ({
        version: 4,
        quest: _a(),
        avatars: La(),
        giftId: j.id,
        memories: [],
        bridgeOpen: !1,
        ended: !1,
        checkpoint: "entrance"
    }),
    Rr = () => ({
        music: .3,
        sfx: .4,
        muted: !1,
        reduced: !1,
        quality: "balanced",
        timeOfDay: "day"
    }),
    dt = {
        entrance: {
            ...G.player
        },
        bench: {
            x: 5.2,
            z: 4.7
        },
        kiosk: {
            x: G.kiosk.x,
            z: G.kiosk.z + 2.4
        },
        bridge: {
            x: -1.2,
            z: 3.6
        },
        hill: {
            x: -.6,
            z: -8.35
        },
        gazebo: {
            ...jr
        }
    },
    Ae = (e, t, n) => ({
        id: e,
        point: t,
        radius: n,
        get label() {
            return en(e)
        }
    }),
    Pr = [Ae("arcade", wa.arcadeSpot, 1.2), Ae("photoBooth", wa.photoSpot, 1.1), Ae("postcard", {
        x: We.x - .45,
        z: We.z
    }, 1.15), Ae("album", {
        x: G.kiosk.x,
        z: G.kiosk.z + 2
    }, 1.35), Ae("bridge", {
        ...G.guard
    }, 2.1), Ae("wishes", {
        ...G.sage
    }, 1.4), Ae("finale", wr, 1.5)],
    an = [...Ja.filter(e => !e.porch).map(e => ({
        ...e,
        w: .18,
        d: .18
    })), ...$n, {
        ...G.kiosk,
        w: 2.7,
        d: 2.1
    }, {
        x: G.kiosk.x + 1.65,
        z: G.kiosk.z + .28,
        w: .62,
        d: .62
    }, {
        x: G.kiosk.x,
        z: G.kiosk.z + 1.36,
        w: 3.2,
        d: .78
    }, {
        ...G.house,
        w: G.house.width,
        d: G.house.depth
    }, {
        ...We,
        w: We.width,
        d: We.depth
    }, {
        ...Dt,
        w: Dt.width,
        d: Dt.depth
    }, {
        x: $.x,
        z: $.z + $.depth / 2 + .08,
        w: $.width,
        d: .12
    }];

function mt(e) {
    return bt(e).height
}

function Cr(e, t) {
    const r = G.bounds;
    if (e.x < r.left + .22 || e.x > r.right - .22 || e.z > r.front - .4 || e.z < r.back + .4) return !1;
    const o = yt(e.z),
        i = o && e.x > o.left - .22 && e.x < o.right + .22,
        c = Math.abs(e.x - Z.x) <= Z.width / 2 && Math.abs(e.z - Z.z) < Z.depth / 2 - .22;
    if (i && !c || Math.abs(e.x - Z.x) < Z.width / 2 + .05 && Math.abs(Math.abs(e.z - Z.z) - (Z.depth / 2 + .01)) < .23 || !t && e.x < G.guard.x + .68 && e.x > G.guard.x - .55 && Math.abs(e.z - Z.z) < Z.depth / 2 + .25) return !1;
    for (const l of br)
        if (Math.hypot(e.x - l.x, e.z - l.z) < .24 + l.height * .023) return !1;
    for (const l of an)
        if (Math.abs(e.x - l.x) < l.w / 2 + .22 && Math.abs(e.z - l.z) < l.d / 2 + .22) return !1;
    if (bt(e).id === "ground") {
        const l = (Le(e.x + .12, e.z) - Le(e.x - .12, e.z)) / .24,
            f = (Le(e.x, e.z + .12) - Le(e.x, e.z - .12)) / .24;
        if (Math.hypot(l, f) > 1.4) return !1
    }
    return !0
}

function Rs(e, t, n, r, o) {
    const i = Math.hypot(t, n);
    i > 1 && (t /= i, n /= i);
    const c = 3.15 * Math.min(Math.max(r, 0), .05);
    let l = {
        ...e
    };
    const f = u => Cr(u, o) && Math.abs(mt(u) - mt(l)) < .27,
        k = {
            x: l.x + t * c,
            z: l.z
        };
    f(k) && (l = k);
    const p = {
        x: l.x,
        z: l.z + n * c
    };
    return f(p) && (l = p), l
}

function Or(e, t) {
    const n = Math.ceil(Math.hypot(e.x - t.x, e.z - t.z) / .12);
    for (let r = 1; r < n; r++) {
        const o = r / n,
            i = {
                x: e.x + (t.x - e.x) * o,
                z: e.z + (t.z - e.z) * o
            },
            c = yt(i.z);
        if (c && i.x > c.left && i.x < c.right && bt(i).id !== "bridge" || Math.abs(i.x - Z.x) < Z.width / 2 + .05 && Math.abs(Math.abs(i.z - Z.z) - (Z.depth / 2 + .01)) < .1 || an.some(l => Math.abs(i.x - l.x) < l.w / 2 && Math.abs(i.z - l.z) < l.d / 2)) return !1
    }
    return !0
}

function Ps(e, t) {
    return Pr.map(r => r.id === "bridge" && t.bridgeOpen ? {
        ...r,
        point: G.guardRest
    } : r).filter(r => Math.hypot(e.x - r.point.x, e.z - r.point.z) < r.radius && Math.abs(mt(e) - mt(r.point)) < .65 && Or(e, r.point)).sort((r, o) => Math.hypot(e.x - r.point.x, e.z - r.point.z) - Math.hypot(e.x - o.point.x, e.z - o.point.z))[0]?.id ?? null
}

function nn(e) {
    return e.quest.sageClue && e.quest.guardAnswers === 2
}

function Bt(e, t) {
    if (t.type === "reset") return tn();
    if (t.type === "avatars") return {
        ...e,
        avatars: Wt(t.selection)
    };
    if (t.type === "bridge") return nn(e) ? {
        ...e,
        bridgeOpen: !0,
        checkpoint: "bridge"
    } : e;
    if (t.type === "finish") return e.quest.enteredHouse ? {
        ...e,
        ended: !0,
        checkpoint: "gazebo"
    } : e;
    if (t.type === "memory") return {
        ...e,
        memories: [...new Set([...e.memories, t.id])]
    };
    if ((t.type === "move-fruit" || t.type === "take-key") && !e.bridgeOpen) return e;
    const n = lr(e.quest, t);
    if (n === e.quest) return e;
    const r = t.type === "read-note" ? "bench" : t.type === "sage-clue" ? "hill" : t.type === "take-key" ? "kiosk" : t.type === "unlock-house" ? "gazebo" : e.checkpoint;
    return {
        ...e,
        quest: n,
        checkpoint: r
    }
}

function Lr(e, t = Te) {
    const n = tn();
    try {
        const r = JSON.parse(e || "null");
        return !r || r.version !== 4 || r.giftId !== n.giftId || (n.avatars = Wt(r.avatars), n.quest = ur(r.quest), n.bridgeOpen = r.bridgeOpen === !0 && nn(n), n.bridgeOpen || (n.quest.movedFruit = [], n.quest.key = "hidden", n.quest.houseUnlocked = !1, n.quest.enteredHouse = !1), Array.isArray(r.memories) && (n.memories = ["postcard", "album", "wishes"].filter(o => r.memories.includes(o))), n.ended = r.ended === !0 && n.quest.enteredHouse, typeof r.checkpoint == "string" && Object.hasOwn(dt, r.checkpoint) && (n.checkpoint = r.checkpoint), (n.checkpoint === "kiosk" && !n.bridgeOpen || n.checkpoint === "gazebo" && !n.quest.houseUnlocked) && (n.checkpoint = "entrance")), n
    } catch {
        return n
    }
}

function Ir(e, t = !1) {
    const n = {
        ...Rr(),
        reduced: t
    };
    try {
        const r = JSON.parse(e || "null");
        if (!r) return n;
        for (const o of ["music", "sfx"]) typeof r[o] == "number" && Number.isFinite(r[o]) && (n[o] = Math.max(0, Math.min(1, r[o])));
        for (const o of ["muted", "reduced"]) typeof r[o] == "boolean" && (n[o] = r[o]);
        return n.quality = hr(r.quality), n
    } catch {
        return n
    }
}

function Yr(e, t = j.from) {
    const n = e.quest;
    return n.noteRead ? n.doorChecked ? n.sageClue ? e.bridgeOpen ? n.key === "hidden" ? {
        title: s("Kunci yang terselip", "The hidden key"),
        hint: s("Periksa buah merah dekat kain biru di gerai seberang.", "Check the red fruit near the blue cloth at the stall across the river."),
        target: "album",
        chapter: s("05 · CARI DENGAN TELITI", "05 · LOOK CLOSELY")
    } : n.houseUnlocked ? e.ended ? {
        title: s("Taman ini milikmu", "This garden is yours"),
        hint: s("Baca surat lagi, berfoto, atau jelajahi taman bersama.", "Read the letter again, take photos, or explore the garden together."),
        target: "finale",
        chapter: s("SELAMAT ULANG TAHUN", "HAPPY BIRTHDAY")
    } : {
        title: s("Selamat ulang tahun", "Happy birthday"),
        hint: I("{sender} menunggumu di ruang keluarga.", "{sender} is waiting for you in the living room.", {
            sender: t
        }),
        target: "finale",
        chapter: s("07 · KHUSUS UNTUKMU", "07 · JUST FOR YOU")
    } : {
        title: s("Kuncinya ditemukan", "Key found"),
        hint: s("Kembali ke rumah dan gunakan kuncinya.", "Go back to the house and use the key."),
        target: "finale",
        chapter: s("06 · KEJUTAN MENUNGGU", "06 · A SURPRISE AWAITS")
    } : {
        title: s("Izin menyeberang", "Permission to cross"),
        hint: s("Sampaikan keperluanmu kepada Pak Jati di jembatan.", "Tell Mr. Jati at the bridge why you are here."),
        target: "bridge",
        chapter: s("04 · PENJAGA JEMBATAN", "04 · THE BRIDGE KEEPER")
    } : {
        title: s("Kakek Misterius", "The Old Sage"),
        hint: s("Temui kakek berbaju hijau di sebelah kiri rumah.", "Find the old man in green to the left of the house."),
        target: "wishes",
        chapter: s("03 · SEBUAH PETUNJUK", "03 · A CLUE")
    } : {
        title: s("Rumah di ujung jalan", "The house at the end of the path"),
        hint: s("Naiki tangga besar, lalu ikuti jalan bunga ke pintu rumah.", "Climb the big stairs, then follow the flower path to the front door."),
        target: "finale",
        chapter: s("02 · PINTU RAHASIA", "02 · THE SECRET DOOR")
    } : {
        title: s("Pesan untukmu", "A message for you"),
        hint: s("Baca surat di atas peti pelataran.", "Read the letter on the chest in the courtyard."),
        target: "postcard",
        chapter: s("01 · SEBUAH UNDANGAN", "01 · AN INVITATION")
    }
}

function Cs(e, t) {
    const n = G.guardRest,
        r = Math.min(Math.max(t, 0), .05) * 1.55,
        o = e.x > n.x ? Math.max(n.x, e.x - r) : n.x,
        i = r - Math.abs(o - e.x),
        c = o === n.x ? Math.max(n.z, e.z - Math.max(0, i)) : e.z;
    return {
        point: {
            x: o,
            z: c
        },
        done: o === n.x && c === n.z
    }
}
const qr = ["near", "nearLabel", "room", "acOn", "gateOpen", "area", "transitioning", "fireOn", "teaPoured", "roomLoadProgress"];

function Hr(e, t, n = null) {
    if (qr.some(r => e[r] !== t[r])) return !1;
    if (n) {
        const r = n === "sage" ? "sageScreen" : "keeperScreen",
            o = e[r] ?? e.screen,
            i = t[r] ?? t.screen;
        return Math.round(o.x) === Math.round(i.x) && Math.round(o.y) === Math.round(i.y)
    }
    return !0
}

function Dr(e, t) {
    const n = {
        room: t.room ?? "",
        acOn: String(t.acOn ?? !1),
        area: t.area ?? "garden",
        transitioning: String(!!t.transitioning),
        fireOn: String(t.fireOn ?? !1),
        teaPoured: String(t.teaPoured ?? !1),
        playerX: t.position.x.toFixed(2),
        playerZ: t.position.z.toFixed(2),
        near: t.near ?? "",
        fps: String(Math.round(t.fps)),
        drawCalls: String(t.drawCalls),
        triangles: String(t.triangles),
        gateOpen: String(!!t.gateOpen),
        surface: t.surface ?? ""
    };
    for (const [r, o] of Object.entries(n)) e.dataset[r] !== o && (e.dataset[r] = o)
}

function Br(e, t, n) {
    return !n || t.score > n.score
}
const Ur = (e, t) => `heytml:activities:v1:${e}:${t}`;

function Gr(e) {
    const t = {
        version: 1,
        records: {},
        layout: "strip",
        color: "cream"
    };
    try {
        const n = JSON.parse(Je.get(e) ?? "null");
        if (n?.version !== 1) return t;
        for (const r of ["stars", "memory", "rainbow", "tetris"]) {
            const o = n.records?.[r];
            o && Number.isFinite(o.score) && o.score >= 0 && Number.isFinite(o.seconds) && o.seconds >= 0 && typeof o.won == "boolean" && (r !== "memory" || Number.isInteger(o.moves) && o.moves >= 6) && (t.records[r] = o)
        } ["strip", "moments", "grid"].includes(n.layout) && (t.layout = n.layout), ["cream", "olive", "charcoal"].includes(n.color) && (t.color = n.color)
    } catch {}
    return t
}

function Vr(e, t) {
    Je.set(e, JSON.stringify(t))
}

function Os(e, t, n) {
    const r = Gr(e);
    return Br(t, n, r.records[t]) && (r.records[t] = n), Vr(e, r), r
}

function Kr(e) {
    Je.remove(e)
}
const Aa = h.lazy(() => X(() => import("./ActivityPanel-g_ZufjRB.js"), __vite__mapDeps([0, 1, 2, 3, 4]))),
    _r = h.lazy(() => X(() => import("./LaptopPanel-kDWQ_D6O.js"), __vite__mapDeps([5, 1, 2, 3, 6]))),
    Wr = h.lazy(() => X(() => import("./StallPanel-b1VUk_Fb.js"), __vite__mapDeps([7, 1, 2, 3])));

function ot(e) {
    return Je.get(e)
}

function Ut(e, t) {
    Je.set(e, JSON.stringify(t))
}
const Ke = e => String(e).padStart(2, "0");

function J({
    children: e,
    title: t,
    onClose: n,
    className: r = "",
    focus: o = ".primary",
    cue: i = "open"
}) {
    const c = h.useRef(null);
    return Da(i), h.useEffect(() => {
        const l = document.activeElement,
            f = c.current;
        (f?.querySelector(o) ?? f?.querySelector('button, [tabindex="0"]'))?.focus({
            preventScroll: !0
        });
        const k = p => {
            if (p.key === "Escape" && (p.preventDefault(), p.stopPropagation(), n()), p.key === "e" || p.key === "E") {
                p.preventDefault(), p.stopPropagation();
                const u = document.activeElement;
                !p.repeat && u instanceof HTMLButtonElement && f?.contains(u) && u.click()
            }
            if (p.key === "Tab" && f) {
                const u = Array.from(f.querySelectorAll('button:not(:disabled),input,select,[tabindex="0"]')),
                    m = u[0],
                    g = u[u.length - 1];
                p.shiftKey && document.activeElement === m ? (p.preventDefault(), g?.focus()) : !p.shiftKey && document.activeElement === g && (p.preventDefault(), m?.focus())
            }
        };
        return document.addEventListener("keydown", k), () => {
            document.removeEventListener("keydown", k), l?.focus()
        }
    }, []), a.jsx("div", {
        className: "modal-backdrop",
        onPointerDown: l => {
            l.target === l.currentTarget && n()
        },
        children: a.jsxs("div", {
            ref: c,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t,
            className: "modal " + r,
            children: [a.jsx("button", {
                className: "icon-button close",
                onClick: n,
                "aria-label": s("Tutup", "Close"),
                children: a.jsx(N, {
                    name: "close",
                    size: 16
                })
            }), e]
        })
    })
}

function Ta({
    index: e,
    className: t = ""
}) {
    const n = j.photos[e],
        [r, o] = h.useState(!1);
    return h.useEffect(() => o(!1), [n?.src]), n ? r ? a.jsxs("div", {
        className: "photo-fallback " + t,
        children: [a.jsx(N, {
            name: "flower",
            size: 48
        }), a.jsx("span", {
            children: n.title
        }), a.jsx("small", {
            children: s("Gambar belum dapat dimuat. Ceritanya tetap bisa dibaca.", "The picture could not load. The story can still be read.")
        })]
    }) : a.jsx($t, {
        className: t,
        src: n.src,
        alt: n.title,
        onError: () => o(!0)
    }) : null
}

function Ea({
    text: e,
    shown: t
}) {
    return a.jsxs(a.Fragment, {
        children: [a.jsx("span", {
            children: t
        }), t.length < e.length && a.jsx("span", {
            className: "typing-ghost",
            "aria-hidden": "true",
            children: e.slice(t.length)
        })]
    })
}

function Fr({
    sender: e,
    reduced: t,
    voice: n,
    onNext: r
}) {
    const o = j.greeting,
        i = o.join(`
`),
        c = ft(i, t, n),
        l = o[0].length;
    return a.jsxs("div", {
        className: "speech-window",
        children: [a.jsx(Ua, {
            name: j.from
        }), a.jsx(Ba, {
            src: oe(e).thumbnail,
            talking: !c.complete,
            title: s("Yang menunggumu", "Waiting for you")
        }), a.jsxs("div", {
            className: "speech-body",
            children: [a.jsx("h2", {
                className: "sr-only",
                children: j.from
            }), a.jsxs("div", {
                className: "speech-text",
                onClick: c.skip,
                children: [a.jsx("p", {
                    children: a.jsx(Ea, {
                        text: o[0],
                        shown: c.shown.slice(0, l)
                    })
                }), a.jsx("p", {
                    children: a.jsx(Ea, {
                        text: o[1],
                        shown: c.shown.slice(l + 1)
                    })
                })]
            }), a.jsxs("div", {
                className: "speech-actions",
                children: [!c.complete && a.jsx("button", {
                    className: "text-button",
                    onClick: c.skip,
                    children: s("Tampilkan semua", "Show all")
                }), a.jsxs("button", {
                    className: "primary",
                    onClick: r,
                    children: [s("Baca surat darinya", "Read the letter"), a.jsx(N, {
                        name: "mail",
                        size: 16
                    })]
                })]
            })]
        })]
    })
}

function Jr() {
    h.useSyncExternalStore(ma.subscribe, ma.version);
    const [e, t] = h.useState(() => Lr(ot(ut()) ?? (j.id === Ca ? ot(Tr) ?? ot(Er) : null))), [n, r] = h.useState(() => Ir(ot(Sa), matchMedia("(prefers-reduced-motion: reduce)").matches)), [o, i] = h.useState(!0), [c, l] = h.useState(!1), [f, k] = h.useState(!1), [p, u] = h.useState(!1), [m, g] = h.useState(!1), [b, w] = h.useState(!1), [v, H] = h.useState(0), [E, M] = h.useState(""), [C, _] = h.useState(!1), [x, W] = h.useState(null), [pe, F] = h.useState(0), [fe, Ee] = h.useState(0), [ge, Ze] = h.useState(0), [Re, jt] = h.useState([0]), [Xe, je] = h.useState(""), [Xt, Q] = h.useState(!1), [B, ve] = h.useState(!1), [Ie, Ne] = h.useState(!1), [U, Me] = h.useState(null), [rn, Qt] = h.useState(0), [z, sn] = h.useState({
        near: null,
        screen: {
            x: 0,
            y: 0
        },
        position: {
            ...dt.entrance
        },
        fps: 0,
        drawCalls: 0,
        triangles: 0
    }), vt = h.useRef(null), Qe = h.useRef(null), Nt = h.useRef(null), S = h.useRef(null), T = h.useRef(null), Y = h.useRef({
        progress: e,
        settings: n,
        panel: x,
        started: m,
        snapshot: z
    }), Mt = h.useRef(0), ee = h.useRef(z), ea = h.useRef(z), zt = h.useRef(!1), Ye = h.useRef(0), qe = h.useRef(0), Pe = h.useRef(!1), et = h.useRef(null), St = h.useRef(null), ta = h.useRef(null), aa = h.useRef(0), He = h.useRef(-1), na = h.useRef(0), At = h.useCallback(d => T.current?.effect(d), []);
    Y.current = {
        progress: e,
        settings: n,
        panel: x,
        started: m,
        snapshot: ee.current
    };
    const Tt = h.useRef({
            ...dt[e.checkpoint]
        }),
        [ra, De] = h.useState({
            x: 0,
            y: 0
        }),
        tt = h.useRef(null),
        at = h.useRef(null),
        se = Yr(e, j.from),
        sa = h.useRef(e.ended),
        on = It(m && p && !(sa.current && e.ended) ? se.title : null, !!x),
        cn = It(m && z.area === "house" ? z.room ?? "living" : null, !!x, 4),
        ae = [
            [e.quest.noteRead, s("Baca surat sambutan", "Read the welcome letter")],
            [e.quest.doorChecked, s("Periksa pintu rumah", "Check the front door")],
            [e.quest.sageClue, s("Dengar petunjuk Kakek", "Hear the Old Sage's clue")],
            [e.bridgeOpen, s("Dapatkan izin Pak Jati", "Get Mr. Jati's permission")],
            [e.quest.key !== "hidden", s("Temukan kunci", "Find the key")],
            [e.quest.houseUnlocked, s("Buka rumah", "Open the house")],
            [e.ended, s("Rayakan ulang tahun", "Celebrate the birthday")]
        ],
        V = ae.filter(([d]) => d).length,
        ia = (se.chapter.split(" · ")[1] ?? se.chapter).toLowerCase().replace(/(^|\s)\S/g, d => d.toUpperCase()),
        Be = j.photos.length,
        le = Math.min(pe, Math.max(0, Be - 1)),
        nt = j.wishes.length,
        [ue, oa] = h.useState(null);
    h.useEffect(() => {
        if (He.current < 0 || V < He.current) {
            He.current = V;
            return
        }
        V > He.current && (He.current = V, oa({
            step: V,
            label: ae[V - 1][1]
        }))
    }, [V]);
    const Et = It(m && ue ? "step-" + ue.step : null, !!x, 4.2);
    h.useEffect(() => {
        Et && !x && ue && na.current !== ue.step && (na.current = ue.step, T.current?.effect("achievement"), ba([12, 60, 18]))
    }, [Et, x, ue]);
    const Ue = m && !x && Te === "gift" && (z.area ?? "garden") === "garden" && z.near !== se.target ? se.target === "wishes" ? "sage" : se.target === "bridge" ? "keeper" : null : null;
    St.current = Ue;
    const Rt = Ue === "sage" ? ee.current.sageScreen : Ue === "keeper" ? ee.current.keeperScreen : void 0,
        Ge = (d = Y.current.panel) => {
            qe.current++, Pe.current && (Pe.current = !1, S.current?.cancelArcadeFocus(!!d || !Y.current.started))
        },
        L = d => {
            d !== "arcade" && Ge(d), !d && Y.current.panel && (aa.current = performance.now() + 320), Me(null), W(d)
        },
        ye = d => {
            je(d), T.current?.effect("notify"), clearTimeout(Mt.current), Mt.current = window.setTimeout(() => je(""), 3500)
        },
        xe = d => {
            t(y => Bt(y, d)), d.type === "memory" && (T.current?.effect("memory"), ye(s("Satu kenangan tersimpan.", "A memory has been kept."))), d.type === "bridge" && (T.current?.effect("bridge"), ye(s("Pak Jati menepi. Cari kunci di gerai seberang sungai.", "Mr. Jati steps aside. Look for the key at the stall across the river."))), d.type === "finish" && T.current?.effect("celebrate")
        },
        R = () => {
            Ye.current++, S.current?.cancelAvatarChoice(), L(null), De({
                x: 0,
                y: 0
            }), S.current?.joystick(0, 0)
        },
        Pt = d => {
            if (!d) return;
            const y = Y.current.progress;
            if (T.current?.effect(d === "ac" ? "click" : "tap"), ve(!0), d.startsWith("door:") || d === "ac") {
                !S.current?.interactHome(d) && d.startsWith("door:") && ye(s("Beri ruang untuk ayunan pintu.", "Leave room for the door to swing."));
                return
            }
            if (d === "arcade" || d === "photoBooth") {
                if (ze(), d === "arcade") {
                    const A = S.current;
                    if (!A || Pe.current) return;
                    const O = ++qe.current;
                    Pe.current = !0, A.focusArcade().then(ne => {
                        if (!(O !== qe.current || S.current !== A)) {
                            if (!ne || !Y.current.started || Y.current.panel) {
                                Ge();
                                return
                            }
                            Pe.current = !1, L("arcade")
                        }
                    }).catch(() => {
                        O !== qe.current || S.current !== A || (Ge(), ye(s("Arcade belum siap. Coba sekali lagi.", "The arcade is not ready yet. Try once more.")))
                    })
                } else L(d);
                return
            }
            if (d === "finale") {
                if (ze(), !y.quest.noteRead) {
                    ye(s("Baca surat sambutan di atas peti pelataran dahulu.", "Read the welcome letter on the courtyard chest first."));
                    return
                }
                if (y.quest.key === "hidden") {
                    xe({
                        type: "check-door"
                    }), S.current?.doorFeedback(), T.current?.effect("locked"), L("locked");
                    return
                }
                if (!y.quest.houseUnlocked) {
                    const A = Bt(y, {
                        type: "unlock-house"
                    });
                    Ut(ut(), A), t(A), S.current?.configure(A, Y.current.settings, !1, !1), T.current?.effect("key"), S.current?.unlockEntrance().then(() => S.current?.enterHouse());
                    return
                }
                S.current?.enterHouse();
                return
            }
            if (d === "exit") {
                S.current?.exitHouse(), ze();
                return
            }
            if (d === "books" || d === "tea") {
                L(d);
                return
            }
            if (d === "laptop") {
                ze(), L("laptop");
                return
            }
            if (d === "desk") {
                L("letter");
                return
            }
            if (d === "sender") {
                S.current?.nodSender(), L(y.ended ? "ending" : "greeting");
                return
            }
            if (d === "wishes") {
                L(y.quest.key !== "hidden" ? "wishes" : "sage");
                return
            }
            if (d === "bridge") {
                L("bridge");
                return
            }
            if (d === "album") {
                if (!y.bridgeOpen || !y.quest.sageClue) {
                    ye(s("Petunjuk Kakek dan izin Pak Jati akan membawamu ke gerai ini.", "The Old Sage's clue and Mr. Jati's permission will lead you to this stall."));
                    return
                }
                y.quest.key === "hidden" ? L("inspection") : (F(0), L("album"));
                return
            }
            L("postcard")
        },
        ca = h.useRef(() => {});
    ca.current = () => {
        Y.current.started && !Y.current.panel && performance.now() >= aa.current && Pt(Y.current.snapshot.near)
    }, h.useEffect(() => {
        let d = !1;
        return T.current = new cr, X(() => import("./engine-x8HDQp8W.js").then(y => y.e), __vite__mapDeps([8, 1, 2, 3, 9, 10, 11, 12, 13, 14, 15, 16])).then(async ({
            GardenEngine: y
        }) => {
            if (!(d || !Nt.current)) try {
                const A = new y(Nt.current, Y.current.progress, Y.current.settings, {
                    snapshot: O => {
                        if (d) return;
                        if (ee.current = O, Y.current.snapshot = O, vt.current && Dr(vt.current, O), Qe.current && (Qe.current.style.left = Math.max(90, Math.min(innerWidth - 90, O.screen.x)) + "px", Qe.current.style.top = Math.max(80, O.screen.y - 12) + "px"), et.current) {
                            const Se = St.current === "sage" ? O.sageScreen : St.current === "keeper" ? O.keeperScreen : void 0;
                            Se && (et.current.style.left = Se.x + "px", et.current.style.top = Se.y + "px")
                        }
                        const ne = Y.current.panel === "sage" ? "sage" : Y.current.panel === "bridge" ? "keeper" : null;
                        Hr(ea.current, O, ne) || (ea.current = O, sn(O)), O.area === "house" && Y.current.progress.quest.houseUnlocked && !Y.current.progress.quest.enteredHouse && t(Se => Bt(Se, {
                            type: "enter-house"
                        })), T.current?.environment(O.area ?? "garden", O.position), T.current?.airConditioning(O.area === "house" && O.room === "bedroom" && !!O.acOn), !zt.current && Math.hypot(O.position.x - Tt.current.x, O.position.z - Tt.current.z) > .4 && (zt.current = !0, Q(!0))
                    },
                    interact: () => ca.current(),
                    step: () => T.current?.effect("step"),
                    fail: M
                });
                S.current = A, await A.load(H), d || (T.current?.prepare(), w(!0), gn())
            } catch (A) {
                d || M(s("Taman belum berhasil dimuat. Coba lagi atau nikmati cerita dalam tampilan sederhana.", "The garden did not load. Try again, or enjoy the story in a simple view.")), console.error(A)
            }
        }).catch(() => M(s("Aset taman belum berhasil dimuat.", "The garden's files did not load."))), () => {
            d = !0, Ye.current++, qe.current++, Pe.current = !1, S.current?.cancelArcadeFocus(!0), S.current?.dispose(), S.current = null, T.current?.dispose(), T.current = null, clearTimeout(Mt.current)
        }
    }, []), h.useEffect(() => {
        Ut(ut(), e)
    }, [e]), h.useEffect(() => {
        Ut(Sa, n)
    }, [n]);
    const Ct = Ie && !n.muted ? {
        ...n,
        muted: !0
    } : n;
    h.useEffect(() => {
        S.current?.configure(e, Ct, !!x || !m, !m), S.current?.setActivity(x === "arcade" || x === "photoBooth" || x === "inspection" || x === "laptop"), T.current?.configure(Ct, x === "letter" || x === "arcade" || x === "photoBooth" || x === "inspection"), x && (De({
            x: 0,
            y: 0
        }), tt.current = null)
    }, [e, n, Ie, x, m, b]), h.useEffect(() => {
        const d = A => {
                A.key === "Escape" && Y.current.started && !Y.current.panel && (A.preventDefault(), L("settings"))
            },
            y = () => {
                document.hidden ? (Ge(), T.current?.suspend()) : Y.current.started && T.current?.resume()
            };
        return window.addEventListener("keydown", d), document.addEventListener("visibilitychange", y), () => {
            window.removeEventListener("keydown", d), document.removeEventListener("visibilitychange", y)
        }
    }, []), h.useEffect(() => {
        const d = [Lt("changes", y => {
            if ((y.names || y.lang || y.brand) && S.current?.relabel(), y.avatar) {
                const A = Wt(Y.current.progress.avatars);
                (A.sender !== Y.current.progress.avatars.sender || A.recipient !== Y.current.progress.avatars.recipient) && (t(O => ({
                    ...O,
                    avatars: A
                })), S.current?.chooseAvatars(A).catch(() => {}))
            }
            y.photos && ct(j.photos.map(A => A.thumb ?? A.src), 3)
        }), Lt("mute", Ne), Lt("jump", ln)];
        return () => d.forEach(y => y())
    }, []);
    const ln = d => {
        Ye.current++, Ge(), De({
            x: 0,
            y: 0
        }), S.current?.joystick(0, 0);
        const y = A => {
            Me(null), W(A)
        };
        switch (d.screen) {
        case "title":
            W(null), Me(null), g(!1), u(!1);
            return;
        case "avatar":
            Qt(1), y("avatars");
            return;
        case "postcard":
            y("postcard");
            return;
        case "album":
            F(d.index), y("album");
            return;
        case "wishes":
            Ze(Math.min(d.index, Math.max(0, j.wishes.length - 1))), y("wishes");
            return;
        case "letter":
            y("letter");
            return;
        case "greeting":
            y("greeting");
            return;
        case "cassette":
        case "arcade":
            W(null), Me({
                screen: d.screen,
                index: d.index
            });
            return
        }
    };
    h.useEffect(() => {
        yn(U ? U.screen : x === "avatars" ? "avatar" : x === "postcard" || x === "album" || x === "wishes" || x === "letter" || x === "greeting" || x === "cake" || x === "ending" || x === "arcade" ? x : x === "laptop" ? "laptop" : m ? (z.area ?? "garden") === "house" ? "house" : "world" : "title")
    }, [x, U, m, z.area]), h.useEffect(() => {
        b && !m && !x && !E && ta.current?.focus({
            preventScroll: !0
        })
    }, [b, m, x, E]), h.useEffect(() => {
        Sn(), ct(["./assets/birthday/avatars/sage-thumb.webp", "./assets/birthday/avatars/pakjati-thumb.webp", ...Fe.map(d => d.thumbnail), ...j.photos.map(d => d.thumb ?? d.src)], 3)
    }, []), h.useEffect(() => {
        b && ct([oe(e.avatars.recipient).atlas, oe(e.avatars.sender).atlas], 1)
    }, [b, e.avatars.recipient, e.avatars.sender]), h.useEffect(() => {
        if (!b) return;
        const d = window.setTimeout(() => {
            X(() => import("./ActivityPanel-g_ZufjRB.js"), __vite__mapDeps([0, 1, 2, 3, 4])), X(() => import("./Arcade-BbdCp5rf.js"), __vite__mapDeps([17, 1, 2, 3, 18])), X(() => import("./PhotoBooth-NhhWbmMV.js"), __vite__mapDeps([19, 1, 2, 3, 14, 20])), X(() => import("./LaptopPanel-kDWQ_D6O.js"), __vite__mapDeps([5, 1, 2, 3, 6])), X(() => import("./StallPanel-b1VUk_Fb.js"), __vite__mapDeps([7, 1, 2, 3])), X(() => import("./stall-inspection-DmqXhp7o.js"), __vite__mapDeps([21, 11, 10, 9, 12, 1, 2, 3])), X(() => import("./laptop-focus-E47woO5e.js"), __vite__mapDeps([22, 9])), X(() => import("./interior-DQ1YXADg.js"), __vite__mapDeps([23, 15, 13, 9, 1, 2, 3, 10, 16, 12])), X(() => import("./interior-materials-cOTlI4YR.js"), __vite__mapDeps([16, 12, 9])), X(() => import("./prepared-rooms-DjOS5PQk.js").then(y => y.p), __vite__mapDeps([13, 9, 1, 2, 3]))
        }, 1500);
        return () => window.clearTimeout(d)
    }, [b]), h.useEffect(() => {
        z.transitioning && T.current?.effect("door")
    }, [z.transitioning]), h.useEffect(() => {
        const d = "button,[role=tab],select,input[type=checkbox],input[type=range],a[href]";
        let y = null,
            A = 0;
        const O = P => P.target instanceof Element ? P.target.closest(d) : null,
            ne = P => P.matches(":disabled") || P.closest("[data-sfx]")?.dataset.sfx === "none",
            Se = P => {
                const q = P.closest("[data-sfx]")?.dataset.sfx;
                return q ? q === "none" ? null : q : P.matches("input[type=range]") ? null : P.matches("input[type=checkbox]") ? "toggle" : P.matches(".close,.speech-close,.activity-back,.activity-top-back,[data-cancel]") ? "cancel" : P.matches(".primary") ? "confirm" : "select"
            },
            pn = (P, q) => {
                if (Y.current.settings.reduced || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                const de = document.createElement("span");
                de.className = "click-burst", de.setAttribute("aria-hidden", "true"), de.style.left = P + "px", de.style.top = q + "px", de.innerHTML = "<b></b>" + "<i></i>".repeat(8), document.body.appendChild(de), window.setTimeout(() => de.remove(), 520)
            },
            ka = [
                ["pointerdown", P => {
                    T.current?.unlock();
                    const q = O(P);
                    q && !ne(q) && !q.matches("input[type=range],select") && pn(P.clientX, P.clientY)
                }],
                ["click", P => {
                    const q = O(P);
                    if (!q || q.matches(":disabled")) return;
                    const de = Se(q);
                    de && T.current?.effect(de)
                }],
                ["pointerover", P => {
                    if (P.pointerType !== "mouse") return;
                    const q = O(P);
                    q !== y && (y = q, q && !ne(q) && T.current?.effect("cursor"))
                }],
                ["keydown", P => {
                    T.current?.unlock(), (P.key === "Tab" || P.key.startsWith("Arrow")) && (A = performance.now())
                }],
                ["focusin", P => {
                    if (performance.now() - A > 150) return;
                    const q = O(P);
                    q && !ne(q) && T.current?.effect("cursor")
                }],
                ["input", P => {
                    P.target instanceof HTMLInputElement && P.target.type === "range" && T.current?.effect("tick")
                }]
            ];
        return ka.forEach(([P, q]) => document.addEventListener(P, q, !0)), () => ka.forEach(([P, q]) => document.removeEventListener(P, q, !0))
    }, []);
    const un = () => {
            !b || f || (k(!0), S.current?.attract(null), dn(), window.setTimeout(() => k(!1), n.reduced ? 0 : 700), window.setTimeout(() => u(!0), n.reduced ? 0 : 2500))
        },
        dn = () => {
            b && (g(!0), document.activeElement?.blur(), T.current?.start().catch(() => ye(s("Suara belum aktif. Kamu tetap bisa menikmati perjalanan.", "Sound is not on yet. You can still enjoy the journey."))))
        },
        la = d => {
            Ze(d), jt(y => [...new Set([...y, d])])
        },
        ua = d => {
            xe({
                type: "memory",
                id: d
            }), R()
        },
        da = d => {
            if (tt.current !== d.pointerId) return;
            const y = d.currentTarget.getBoundingClientRect(),
                A = (d.clientX - y.left - y.width / 2) / 35,
                O = (d.clientY - y.top - y.height / 2) / 35,
                ne = Math.max(1, Math.hypot(A, O));
            De({
                x: A / ne,
                y: O / ne
            }), S.current?.joystick(A / ne, O / ne)
        },
        ze = () => {
            tt.current = null, De({
                x: 0,
                y: 0
            }), S.current?.joystick(0, 0)
        },
        hn = () => {
            sa.current = !1, oa(null), R(), Kr(Ur(j.id, Te)), Tt.current = {
                ...dt.entrance
            }, zt.current = !1, S.current?.resetLocation(), xe({
                type: "reset"
            }), g(!1), u(!1), Q(!1), ve(!1), T.current?.suspend()
        },
        kn = () => {
            xe({
                type: "finish"
            }), L("ending")
        };
    e.bridgeOpen;
    const ha = d => ({
            "--fill": Math.round(d * 100) + "%"
        }),
        mn = z.near === "finale" && e.quest.houseUnlocked ? s("Masuk rumah", "Enter the house") : z.near === "finale" && e.quest.key === "held" ? s("Gunakan kunci", "Use the key") : z.nearLabel ?? (z.near ? en(z.near, void 0, j.from) : "");
    return a.jsx(qa.Provider, {
        value: At,
        children: a.jsxs("main", {
            ref: vt,
            "data-room": z.room,
            "data-time-of-day": n.timeOfDay,
            "data-ac-on": z.acOn,
            "data-area": z.area ?? "garden",
            "data-transitioning": !!z.transitioning,
            "data-fire-on": z.fireOn,
            "data-tea-poured": z.teaPoured,
            "data-player-x": ee.current.position.x.toFixed(2),
            "data-player-z": ee.current.position.z.toFixed(2),
            "data-near": z.near ?? "",
            "data-fps": Math.round(ee.current.fps),
            "data-draw-calls": ee.current.drawCalls,
            "data-triangles": ee.current.triangles,
            "data-gate-open": z.gateOpen,
            "data-surface": ee.current.surface,
            "data-mode": Te,
            className: (m ? "app playing" : "app welcome") + (n.reduced ? " reduced" : ""),
            children: [a.jsx("div", {
                ref: Nt,
                className: "world-host",
                "aria-hidden": C
            }), a.jsx("div", {
                className: "doorway-fade" + (z.transitioning ? " active" : ""),
                "aria-hidden": "true"
            }), z.roomLoadProgress !== void 0 && a.jsxs("div", {
                className: "room-loading",
                role: "status",
                children: [a.jsx(N, {
                    name: "house",
                    size: 64,
                    className: "loading-house"
                }), a.jsx("span", {
                    className: "loading-title",
                    children: s("Menyiapkan rumah…", "Preparing the house…")
                }), a.jsx("progress", {
                    value: z.roomLoadProgress,
                    max: 1
                }), a.jsxs("span", {
                    className: "loading-pct",
                    children: [Math.round(z.roomLoadProgress * 100), "%"]
                }), a.jsx("small", {
                    className: "loading-tip",
                    children: s("TIPS · Tekan Esc kapan saja untuk membuka menu.", "TIP · Press Esc anytime to open the menu.")
                })]
            }), m && cn && !x && z.area === "house" && a.jsxs("div", {
                className: "room-caption",
                children: [a.jsx("span", {
                    children: s("RUMAH DI UJUNG TAMAN", "THE HOUSE AT THE END OF THE GARDEN")
                }), a.jsx("strong", {
                    children: Sr(z.room ?? "living")
                })]
            }), a.jsxs("header", {
                className: "scene-toolbar",
                hidden: x === "arcade" || x === "photoBooth" || x === "inspection" || x === "laptop" || !!U || !m,
                children: [a.jsx("div", {
                    className: "toolbar-left",
                    children: m && Te === "gift" && a.jsxs("div", {
                        className: "quest-progress" + (e.ended ? " complete" : ""),
                        role: "img",
                        "aria-label": I("Progres petualangan: {done} dari {total} bab selesai", "Adventure progress: {done} of {total} chapters complete", {
                            done: V,
                            total: ae.length
                        }),
                        children: [a.jsx("span", {
                            className: "qp-badge",
                            "aria-hidden": "true",
                            children: a.jsx(N, {
                                name: e.ended ? "trophy" : "star",
                                size: 24
                            })
                        }), a.jsxs("span", {
                            className: "qp-body",
                            "aria-hidden": "true",
                            children: [a.jsxs("span", {
                                className: "qp-head",
                                children: [a.jsx("b", {
                                    children: e.ended ? s("Petualangan selesai", "Adventure complete") : I("Bab {n} dari {total}", "Chapter {n} of {total}", {
                                        n: Math.min(V + 1, ae.length),
                                        total: ae.length
                                    })
                                }), a.jsxs("span", {
                                    className: "qp-count",
                                    children: [V, "/", ae.length]
                                })]
                            }), a.jsx("span", {
                                className: "qp-title",
                                children: ia
                            }), a.jsx("span", {
                                className: "qp-bar",
                                children: ae.map(([d], y) => a.jsx("i", {
                                    className: d ? "done" : y === V ? "now" : ""
                                }, y))
                            })]
                        })]
                    })
                }), a.jsxs("div", {
                    className: "toolbar-slots",
                    children: [m && a.jsx("button", {
                        className: "icon-button",
                        "data-tip": s("Jurnal", "Journal"),
                        "aria-label": s("Jurnal petualangan", "Adventure journal"),
                        onClick: () => L("journal"),
                        children: a.jsx(N, {
                            name: "journal",
                            size: 32
                        })
                    }), m && e.quest.key !== "hidden" && a.jsxs("button", {
                        className: "icon-button inventory-icon",
                        "data-tip": s("Kunci", "Key"),
                        "aria-label": e.quest.key === "used" ? s("Kunci sudah digunakan", "Key used") : s("Kunci rumah", "House key"),
                        onClick: () => L("inventory"),
                        children: [a.jsx(N, {
                            name: "key",
                            size: 32
                        }), e.quest.key === "used" && a.jsx(N, {
                            name: "check",
                            size: 16,
                            className: "inventory-check"
                        })]
                    }), a.jsx("button", {
                        className: "icon-button",
                        "data-tip": n.muted ? s("Suara mati", "Sound off") : s("Suara", "Sound"),
                        "aria-label": n.muted ? s("Aktifkan suara", "Turn sound on") : s("Matikan suara", "Turn sound off"),
                        onClick: () => r(d => ({
                            ...d,
                            muted: !d.muted
                        })),
                        children: a.jsx(N, {
                            name: n.muted ? "soundOff" : "soundOn",
                            size: 32
                        })
                    }), a.jsx("button", {
                        className: "icon-button",
                        "data-tip": s("Menu", "Menu"),
                        "aria-label": s("Pengaturan", "Settings"),
                        onClick: () => L("settings"),
                        children: a.jsx(N, {
                            name: "gear",
                            size: 32
                        })
                    })]
                })]
            }), (!m || f) && !C && b && !E && a.jsx(Wn, {
                name: j.name,
                from: j.from,
                intro: j.intro,
                house: z.area === "house",
                chapter: {
                    n: Math.min(V + 1, ae.length),
                    title: ia
                },
                continuing: V > 0 || e.checkpoint !== "entrance",
                muted: n.muted,
                reduced: n.reduced,
                revealed: !o || c,
                leaving: f,
                covered: !!x || !!U,
                onStart: un,
                onSettings: () => L("settings"),
                onToggleSound: () => r(d => ({
                    ...d,
                    muted: !d.muted
                })),
                attract: d => S.current?.attract(d),
                startRef: ta
            }), o && !E && !C && a.jsx(Dn, {
                progress: v,
                done: b,
                reduced: n.reduced,
                name: j.name,
                onLeave: () => l(!0),
                onGone: () => {
                    i(!1), xn()
                }
            }), m && !C && a.jsxs(a.Fragment, {
                children: [!x && on && a.jsxs("aside", {
                    className: "gift-mission",
                    children: [a.jsx("span", {
                        children: se.chapter
                    }), a.jsx("p", {
                        children: se.hint
                    })]
                }), Ue && a.jsx("span", {
                    ref: et,
                    className: "quest-marker " + Ue,
                    "aria-hidden": "true",
                    style: Rt ? {
                        left: Rt.x,
                        top: Rt.y
                    } : void 0
                }), !x && z.near && a.jsxs("button", {
                    ref: Qe,
                    className: "world-prompt",
                    "data-sfx": "none",
                    style: {
                        left: Math.max(90, Math.min(innerWidth - 90, ee.current.screen.x)),
                        top: Math.max(80, ee.current.screen.y - 12)
                    },
                    onClick: () => Pt(ee.current.near),
                    children: [a.jsx("span", {
                        children: "E"
                    }), mn]
                }), a.jsxs("div", {
                    className: "touch-controls",
                    hidden: !!x,
                    children: [a.jsx("div", {
                        className: "joystick",
                        "data-testid": "joystick",
                        "aria-label": s("Joystick gerakan", "Movement joystick"),
                        onPointerDown: d => {
                            tt.current = d.pointerId, d.currentTarget.setPointerCapture(d.pointerId), da(d)
                        },
                        onPointerMove: da,
                        onPointerUp: ze,
                        onPointerCancel: ze,
                        onLostPointerCapture: ze,
                        children: a.jsx("span", {
                            style: {
                                transform: "translate(" + ra.x * 30 + "px," + ra.y * 30 + "px)"
                            }
                        })
                    }), a.jsxs("button", {
                        className: "touch-interact",
                        "data-sfx": "none",
                        disabled: !z.near || !!x,
                        onClick: () => {
                            ba(), Pt(z.near)
                        },
                        "aria-label": s("Berinteraksi", "Interact"),
                        children: [a.jsx("b", {
                            children: "A"
                        }), a.jsx("span", {
                            children: z.near?.startsWith("door:") ? s("Pintu", "Door") : s("Interaksi", "Interact")
                        })]
                    })]
                })]
            }), Xe && a.jsxs("div", {
                className: "toast",
                role: "status",
                children: [a.jsx(N, {
                    name: "sparkle",
                    size: 32
                }), a.jsx("span", {
                    children: Xe
                })]
            }), m && !x && Et && ue && a.jsxs("div", {
                className: "achievement-toast",
                role: "status",
                children: [a.jsx("span", {
                    className: "ach-icon",
                    "aria-hidden": "true",
                    children: a.jsx(N, {
                        name: "trophy",
                        size: 32
                    })
                }), a.jsxs("span", {
                    className: "ach-body",
                    children: [a.jsx("small", {
                        children: I("Pencapaian · Bab {n} selesai", "Achievement · Chapter {n} complete", {
                            n: ue.step
                        })
                    }), a.jsx("strong", {
                        children: ue.label
                    })]
                }), a.jsxs("span", {
                    className: "ach-count",
                    "aria-hidden": "true",
                    children: [ue.step, "/", ae.length]
                })]
            }), E && !C && a.jsxs("div", {
                className: "error-card",
                role: "alert",
                children: [a.jsx(N, {
                    name: "flower",
                    size: 48
                }), a.jsx("span", {
                    className: "eyebrow",
                    children: s("OOPS · ADA GANGGUAN KECIL", "OOPS · A SMALL HICCUP")
                }), a.jsx("h2", {
                    children: s("Tamannya butuh sebentar lagi", "The garden needs a moment")
                }), a.jsx("p", {
                    children: E
                }), a.jsxs("button", {
                    className: "primary",
                    onClick: () => location.reload(),
                    children: [s("Coba lagi", "Try again"), a.jsx(N, {
                        name: "reset",
                        size: 16
                    })]
                }), a.jsx("button", {
                    className: "text-button",
                    onClick: () => _(!0),
                    children: s("Baca hadiah dalam tampilan sederhana", "Read the gift in a simple view")
                })]
            }), C && a.jsxs("section", {
                className: "simple-gift",
                children: [a.jsx("span", {
                    className: "eyebrow",
                    children: I("UNTUK {name}", "FOR {name}", {
                        name: j.name.toUpperCase()
                    })
                }), a.jsx("h1", {
                    children: s("Taman kecil untukmu.", "A little garden for you.")
                }), a.jsx("p", {
                    children: j.intro
                }), j.photos.map((d, y) => a.jsxs("article", {
                    children: [a.jsx(Ta, {
                        index: y
                    }), a.jsx("h2", {
                        children: d.title
                    }), d.caption && a.jsx("p", {
                        children: d.caption
                    })]
                }, y)), a.jsx("h2", {
                    children: s("Harapan untukmu", "Wishes for you")
                }), j.wishes.map((d, y) => a.jsxs("article", {
                    children: [a.jsx("h3", {
                        children: d.title
                    }), a.jsx("p", {
                        children: d.text
                    })]
                }, y)), a.jsx("h2", {
                    children: I("Selamat ulang tahun, {name}.", "Happy birthday, {name}.", {
                        name: j.name
                    })
                }), a.jsx("h3", {
                    children: j.letterTitle
                }), j.letter.map((d, y) => a.jsx("p", {
                    children: d
                }, y))]
            }), (x === "arcade" || x === "photoBooth") && S.current && a.jsx(h.Suspense, {
                fallback: a.jsx("div", {
                    className: "toast",
                    role: "status",
                    children: s("Menyiapkan aktivitas…", "Preparing the activity…")
                }),
                children: a.jsx(Aa, {
                    id: x,
                    engine: S.current,
                    onClose: R,
                    sound: () => T.current?.effect("tap"),
                    sfx: At,
                    avatarAtlas: oe(e.avatars.recipient).atlas
                })
            }), U?.screen === "arcade" && a.jsx(h.Suspense, {
                fallback: a.jsx("div", {
                    className: "toast",
                    role: "status",
                    children: s("Menyiapkan aktivitas…", "Preparing the activity…")
                }),
                children: a.jsx(Aa, {
                    id: "arcade",
                    engine: S.current,
                    onClose: R,
                    sound: () => T.current?.effect("tap"),
                    sfx: At,
                    avatarAtlas: oe(e.avatars.recipient).atlas,
                    previewEnding: U.index
                })
            }), (x === "laptop" && S.current || U?.screen === "cassette") && a.jsx(h.Suspense, {
                fallback: a.jsx("div", {
                    className: "toast",
                    children: s("Menyiapkan laptop…", "Preparing the laptop…")
                }),
                children: a.jsx(_r, {
                    engine: x === "laptop" ? S.current : null,
                    audio: T.current,
                    onClose: R,
                    volume: n.music,
                    onVolume: d => r(y => ({
                        ...y,
                        music: d
                    })),
                    muted: Ct.muted,
                    initialApp: U?.screen === "cassette" ? "music" : void 0,
                    initialTrack: U?.screen === "cassette" ? U.index : 0
                })
            }), x === "avatars" && a.jsx(J, {
                title: s("Pilih pasangan avatar", "Choose your avatars"),
                onClose: R,
                className: "avatar-modal",
                focus: ".avatar-option.selected",
                children: a.jsx(En, {
                    selection: e.avatars,
                    initialStep: rn,
                    onClose: R,
                    onChoose: async d => {
                        if (!b || E || !S.current) throw Error(s("Tunggu sampai dunia siap sebelum mengubah penampilan.", "Wait until the world is ready before changing looks."));
                        const y = ++Ye.current;
                        await S.current.chooseAvatars(d), !(y !== Ye.current || Y.current.panel !== "avatars") && (xe({
                            type: "avatars",
                            selection: d
                        }), R())
                    }
                })
            }), x === "postcard" && a.jsxs(J, {
                title: s("Surat sambutan", "Welcome letter"),
                onClose: R,
                className: "paper-modal parchment-modal",
                cue: "page",
                children: [a.jsx("span", {
                    className: "wax-seal",
                    "aria-hidden": "true"
                }), a.jsx("span", {
                    className: "eyebrow",
                    children: s("SEPUCUK SURAT UNTUKMU", "A LETTER FOR YOU")
                }), a.jsx("h2", {
                    children: I("Selamat ulang tahun, {name}.", "Happy birthday, {name}.", {
                        name: j.name
                    })
                }), a.jsxs("div", {
                    className: "parchment-letter",
                    children: [a.jsx("p", {
                        children: j.welcome
                    }), a.jsxs("p", {
                        className: "handwriting",
                        children: ["— ", j.from]
                    })]
                }), a.jsxs("button", {
                    className: "primary",
                    onClick: () => {
                        xe({
                            type: "read-note"
                        }), T.current?.effect("paper"), R()
                    },
                    children: [e.quest.noteRead ? s("Simpan kembali surat", "Put the letter back") : s("Simpan petunjuk", "Keep the clue"), a.jsx(N, {
                        name: "mail",
                        size: 16
                    })]
                })]
            }), x === "locked" && a.jsxs(J, {
                title: s("Pintu terkunci", "Locked door"),
                onClose: R,
                className: "locked-modal",
                children: [a.jsx("div", {
                    className: "item-showcase lock-shake",
                    "aria-hidden": "true",
                    children: a.jsx(N, {
                        name: "lock",
                        size: 64
                    })
                }), a.jsx("span", {
                    className: "eyebrow",
                    children: s("SEBUAH PINTU, SEBUAH RAHASIA", "A DOOR, A SECRET")
                }), a.jsx("h2", {
                    children: s("Terkunci.", "Locked.")
                }), a.jsx("p", {
                    children: s("Sepertinya kamu membutuhkan sebuah kunci.", "It looks like you need a key.")
                }), a.jsxs("div", {
                    className: "modal-actions",
                    children: [a.jsxs("button", {
                        className: "primary",
                        onClick: () => {
                            L("journal"), S.current?.gesture("sage")
                        },
                        children: [s("Hint · cari petunjuk", "Hint · find a clue"), a.jsx(N, {
                            name: "arrowRight",
                            size: 16
                        })]
                    }), a.jsx("button", {
                        className: "text-button",
                        "data-cancel": !0,
                        onClick: R,
                        children: s("Kembali menjelajah", "Back to exploring")
                    })]
                })]
            }), x === "inventory" && a.jsxs(J, {
                title: s("Kunci rumah", "House key"),
                onClose: R,
                className: "inventory-modal",
                children: [a.jsx("span", {
                    className: "eyebrow",
                    children: s("INVENTARIS · BENDA PENTING", "INVENTORY · KEY ITEM")
                }), a.jsxs("div", {
                    className: "item-card",
                    children: [a.jsx("div", {
                        className: "item-slot",
                        children: a.jsx(N, {
                            name: "key",
                            size: 64,
                            label: s("Kunci kuningan rumah", "Brass house key")
                        })
                    }), a.jsxs("div", {
                        className: "item-meta",
                        children: [a.jsx("h2", {
                            children: s("Kunci rumah", "House key")
                        }), a.jsx("span", {
                            className: "item-status " + e.quest.key,
                            children: e.quest.key === "held" ? s("DIPEGANG", "IN HAND") : s("SUDAH DIGUNAKAN", "USED")
                        })]
                    })]
                }), a.jsx("p", {
                    children: e.quest.key === "held" ? s("Kunci kuningan kecil yang terselip di antara apel merah. Rumah di ujung jalan bunga menunggu untuk dibuka.", "A small brass key that was tucked among the red apples. The house at the end of the flower path is waiting to be opened.") : s("Kunci ini sudah membuka rumah dan sebuah kejutan untukmu. Pintu dapat dilalui kembali kapan saja.", "This key has opened the house and a surprise for you. You can go through the door again anytime.")
                }), a.jsx("button", {
                    className: "primary",
                    onClick: R,
                    children: s("Simpan kembali", "Put it away")
                })]
            }), x === "journal" && a.jsx(J, {
                title: s("Jurnal petualangan", "Adventure journal"),
                onClose: R,
                className: "book-modal journal-modal",
                cue: "page",
                children: a.jsxs("div", {
                    className: "pixel-book",
                    children: [a.jsxs("section", {
                        className: "book-page",
                        children: [a.jsxs("div", {
                            className: "book-head",
                            children: [a.jsx(N, {
                                name: "journal",
                                size: 32
                            }), a.jsx("span", {
                                className: "eyebrow",
                                children: s("JEJAK PETUALANGAN", "ADVENTURE LOG")
                            })]
                        }), a.jsx("span", {
                            className: "chapter-tag",
                            children: se.chapter
                        }), a.jsx("h2", {
                            children: se.title
                        }), a.jsx("p", {
                            children: se.hint
                        }), e.quest.doorChecked && !e.quest.sageClue && a.jsx("p", {
                            children: s("Seseorang di dekat rumah mungkin tahu jawabannya. Temui Kakek Misterius berbaju hijau di sebelah kiri rumah.", "Someone near the house may know the answer. Find the Old Sage in green to the left of the house.")
                        }), e.quest.sageClue && a.jsx("p", {
                            className: "clue-note",
                            children: j.adventure.hint
                        }), a.jsx("span", {
                            className: "page-no",
                            children: Ke(V * 2 + 1)
                        })]
                    }), a.jsxs("section", {
                        className: "book-page",
                        children: [a.jsxs("h3", {
                            children: [s("Daftar misi", "Missions"), " ", a.jsxs("small", {
                                children: [V, "/", ae.length]
                            })]
                        }), a.jsx("ol", {
                            className: "journal-steps",
                            children: ae.map(([d, y], A) => a.jsxs("li", {
                                className: d ? "done" : A === V ? "current" : "",
                                children: [a.jsx("span", {
                                    className: "check-box",
                                    "aria-hidden": "true"
                                }), a.jsx("span", {
                                    className: "sr-only",
                                    children: d ? s("Selesai: ", "Done: ") : s("Belum: ", "To do: ")
                                }), y]
                            }, A))
                        }), a.jsxs("div", {
                            className: "avatar-actions",
                            children: [e.quest.noteRead && a.jsx("button", {
                                className: "text-button",
                                onClick: () => L("postcard"),
                                children: s("Baca surat lagi", "Read the letter again")
                            }), a.jsx("button", {
                                className: "primary",
                                onClick: R,
                                children: s("Lanjutkan", "Continue")
                            })]
                        }), a.jsx("span", {
                            className: "page-no",
                            children: Ke(V * 2 + 2)
                        })]
                    })]
                })
            }), x === "inspection" && S.current && a.jsx(h.Suspense, {
                fallback: a.jsx("div", {
                    className: "toast",
                    children: s("Menyiapkan rak…", "Preparing the stall…")
                }),
                children: a.jsx(Wr, {
                    engine: S.current,
                    event: xe,
                    onClose: R,
                    sound: () => T.current?.effect("tap"),
                    fanfare: () => T.current?.effect("item")
                })
            }), x === "album" && a.jsxs(J, {
                title: s("Album kenangan", "Memory album"),
                onClose: R,
                className: "album-modal",
                children: [a.jsx("span", {
                    className: "eyebrow",
                    children: s("ALBUM KENANGAN · TENTANG KITA", "MEMORY ALBUM · ABOUT US")
                }), a.jsx("h2", {
                    children: s("Hal kecil yang kusimpan.", "Little things I kept.")
                }), Be ? a.jsxs(a.Fragment, {
                    children: [a.jsxs("div", {
                        className: "album-photo",
                        onTouchStart: d => at.current = d.touches[0].clientX,
                        onTouchEnd: d => {
                            if (at.current !== null) {
                                const y = d.changedTouches[0].clientX - at.current;
                                Math.abs(y) > 40 && F(A => Math.max(0, Math.min(Be - 1, A + (y < 0 ? 1 : -1)))), at.current = null
                            }
                        },
                        children: [a.jsx(Ta, {
                            index: le
                        }), ["tl", "tr", "bl", "br"].map(d => a.jsx("i", {
                            className: "photo-corner " + d,
                            "aria-hidden": "true"
                        }, d)), a.jsxs("span", {
                            className: "photo-number",
                            children: [Ke(le + 1), " / ", Ke(Be)]
                        })]
                    }), a.jsxs("div", {
                        className: "album-caption",
                        children: [a.jsx("h3", {
                            children: j.photos[le].title
                        }), j.photos[le].caption && a.jsx("p", {
                            children: j.photos[le].caption
                        })]
                    })]
                }) : a.jsx("p", {
                    className: "album-caption",
                    children: s("Album ini masih menunggu fotonya.", "This album is still waiting for its photos.")
                }), a.jsxs("div", {
                    className: "album-nav",
                    children: [a.jsx("button", {
                        className: "icon-button",
                        disabled: le === 0,
                        onClick: () => F(le - 1),
                        "aria-label": s("Foto sebelumnya", "Previous photo"),
                        children: a.jsx(N, {
                            name: "chevronLeft",
                            size: 24
                        })
                    }), a.jsx("div", {
                        className: "dots",
                        children: j.photos.map((d, y) => a.jsx("span", {
                            className: le === y ? "active" : ""
                        }, y))
                    }), le < Be - 1 ? a.jsxs("button", {
                        className: "primary compact",
                        onClick: () => F(le + 1),
                        children: [s("Foto berikutnya", "Next photo"), a.jsx(N, {
                            name: "chevronRight",
                            size: 16
                        })]
                    }) : a.jsxs("button", {
                        className: "primary compact",
                        onClick: () => ua("album"),
                        children: [s("Bawa kenangan ini", "Keep this memory"), a.jsx(N, {
                            name: "heart",
                            size: 16
                        })]
                    })]
                })]
            }), (x === "bridge" || x === "sage") && a.jsx(Pn, {
                who: x === "sage" ? "sage" : "keeper",
                progress: e,
                screen: x === "sage" ? z.sageScreen ?? z.screen : z.keeperScreen ?? z.screen,
                onClose: R,
                event: xe,
                reduced: n.reduced,
                gesture: d => S.current?.gesture(x === "sage" ? "sage" : "keeper", d),
                voice: () => T.current?.voice(x === "sage" ? "sage" : "keeper"),
                cursor: () => T.current?.effect("cursor")
            }), x === "books" && a.jsx(J, {
                title: s("Buku di rak", "A book on the shelf"),
                onClose: R,
                className: "book-modal shelf-book",
                cue: "page",
                children: a.jsxs("div", {
                    className: "pixel-book",
                    children: [a.jsxs("section", {
                        className: "book-page",
                        children: [a.jsx("span", {
                            className: "eyebrow",
                            children: s("CATATAN PENJAGA TAMAN · HALAMAN 17", "THE GARDENER'S NOTES · PAGE 17")
                        }), a.jsx("h2", {
                            children: s("Hal-hal yang tumbuh pelan.", "Things that grow slowly.")
                        }), a.jsx("p", {
                            className: "drop-cap",
                            children: s("Daun baru tidak terburu-buru membuka diri. Ia menunggu pagi, setitik air, dan cahaya yang cukup.", "A new leaf is in no hurry to open. It waits for the morning, a drop of water and just enough light.")
                        }), a.jsx("span", {
                            className: "page-no",
                            children: "17"
                        })]
                    }), a.jsxs("section", {
                        className: "book-page",
                        children: [a.jsx("p", {
                            children: s("Barangkali kita juga boleh begitu. Berhenti sebentar bukan berarti menyerah. Ada perjalanan yang justru terasa lebih jauh setelah secangkir teh hangat.", "Maybe we are allowed to be like that too. Pausing for a while is not giving up. Some journeys go even further after a warm cup of tea.")
                        }), a.jsx("p", {
                            className: "handwriting",
                            children: s("“Ada kehangatan yang menunggu di ujung jalan.”", "“There is warmth waiting at the end of the road.”")
                        }), a.jsxs("button", {
                            className: "primary",
                            "data-cancel": !0,
                            onClick: R,
                            children: [s("Kembalikan buku", "Put the book back"), a.jsx(N, {
                                name: "bookOpen",
                                size: 16
                            })]
                        }), a.jsx("span", {
                            className: "page-no",
                            children: "18"
                        })]
                    })]
                })
            }), x === "tea" && a.jsxs(J, {
                title: s("Secangkir teh hangat", "A warm cup of tea"),
                onClose: R,
                className: "tea-modal",
                children: [a.jsx("div", {
                    className: "tea-art",
                    children: a.jsx(Yn, {})
                }), a.jsx("span", {
                    className: "eyebrow",
                    children: s("DUA CANGKIR, SATU JEDA", "TWO CUPS, ONE PAUSE")
                }), a.jsx("h2", {
                    children: s("Hangatnya sampai ke hati.", "Warm all the way to the heart.")
                }), a.jsx("p", {
                    children: s("Teh melati sudah disiapkan. Dari sini, taman terlihat begitu tenang. Duduklah dalam ceritamu sendiri sebentar.", "Jasmine tea is ready. From here, the garden looks so calm. Sit with your own story for a while.")
                }), a.jsxs("button", {
                    className: "primary",
                    onClick: () => {
                        S.current?.pourTea(), ye(s("Dua cangkir hangat. Tidak ada yang perlu diburu.", "Two warm cups. Nothing to rush.")), R()
                    },
                    children: [z.teaPoured ? s("Nikmati satu teguk lagi", "Enjoy one more sip") : s("Tuangkan teh", "Pour the tea"), a.jsx(N, {
                        name: "heart",
                        size: 16
                    })]
                })]
            }), x === "house-letter" && a.jsxs(J, {
                title: s("Surat untuk tamu", "A letter for guests"),
                onClose: R,
                className: "paper-modal house-letter-modal",
                cue: "page",
                children: [a.jsx("span", {
                    className: "eyebrow",
                    children: s("SURAT DI DEKAT JENDELA", "A LETTER BY THE WINDOW")
                }), a.jsx("h2", {
                    children: s("Untuk siapa pun yang singgah.", "For anyone who stops by.")
                }), a.jsx("p", {
                    children: s("Terima kasih sudah berjalan sejauh ini. Taman ini menyimpan banyak hal kecil: daun yang berganti warna, cahaya yang jatuh lembut, dan percakapan di atas jembatan.", "Thank you for coming this far. This garden keeps many small things: leaves that change color, light that falls softly, and conversations on the bridge.")
                }), a.jsx("p", {
                    children: s("Rumah ini kubiarkan hangat, supaya selalu ada tempat untuk kembali. Ambil sebuah buku, tuangkan teh, lalu lanjutkan perjalanan ketika kamu sudah siap.", "I keep this house warm, so there is always a place to come back to. Take a book, pour some tea, and go on when you are ready.")
                }), a.jsx("p", {
                    className: "handwriting",
                    children: s("— Penjaga taman", "— The gardener")
                }), a.jsxs("button", {
                    className: "primary",
                    onClick: R,
                    children: [s("Simpan kembali suratnya", "Put the letter back"), a.jsx(N, {
                        name: "mail",
                        size: 16
                    })]
                })]
            }), x === "wishes" && a.jsxs(J, {
                title: s("Tiga harapan untukmu", "Three wishes for you"),
                onClose: R,
                className: "wishes-modal",
                children: [a.jsx("span", {
                    className: "eyebrow",
                    children: s("HARAPAN · HARI-HARI MENDATANG", "WISHES · THE DAYS AHEAD")
                }), a.jsx(N, {
                    name: "flower",
                    size: 48,
                    className: "wish-flower"
                }), a.jsx("h2", {
                    children: s("Ada doa di setiap langkahmu.", "There is a prayer in every step you take.")
                }), a.jsx("div", {
                    className: "wish-tabs",
                    role: "tablist",
                    "aria-label": s("Harapan", "Wishes"),
                    children: j.wishes.map((d, y) => a.jsxs("button", {
                        role: "tab",
                        "aria-selected": ge === y,
                        onClick: () => la(y),
                        className: ge === y ? "selected" : "",
                        children: [Ke(y + 1), " ", d.title, Re.includes(y) && a.jsx(N, {
                            name: "check",
                            size: 16
                        })]
                    }, y))
                }), a.jsxs("div", {
                    className: "wish-paper",
                    role: "tabpanel",
                    children: [a.jsx("span", {
                        children: I("untuk {name},", "for {name},", {
                            name: j.name.toLowerCase()
                        })
                    }), a.jsx("h3", {
                        children: j.wishes[Math.min(ge, nt - 1)].title
                    }), a.jsx("p", {
                        children: j.wishes[Math.min(ge, nt - 1)].text
                    }), a.jsx(N, {
                        name: "heart",
                        size: 32
                    })]
                }), Re.length >= nt ? a.jsxs("button", {
                    className: "primary",
                    onClick: () => ua("wishes"),
                    children: [s("Simpan harapan ini", "Keep these wishes"), a.jsx(N, {
                        name: "sparkle",
                        size: 16
                    })]
                }) : a.jsxs("button", {
                    className: "primary",
                    onClick: () => la((ge + 1) % nt),
                    children: [s("Baca harapan berikutnya", "Read the next wish"), a.jsx(N, {
                        name: "arrowRight",
                        size: 16
                    })]
                })]
            }), x === "greeting" && a.jsx(J, {
                title: I("{name} menunggumu", "{name} is waiting for you", {
                    name: j.from
                }),
                onClose: R,
                className: "dialogue-modal",
                children: a.jsx(Fr, {
                    sender: e.avatars.sender,
                    reduced: n.reduced,
                    voice: () => T.current?.voice("sender"),
                    onNext: () => L("letter")
                })
            }), x === "letter" && a.jsxs(J, {
                title: I("Surat dari {name}", "A letter from {name}", {
                    name: j.from
                }),
                onClose: R,
                className: "letter-modal",
                cue: "page",
                children: [a.jsx("span", {
                    className: "scroll-rod top",
                    "aria-hidden": "true"
                }), a.jsxs("div", {
                    className: "letter-scroll",
                    children: [a.jsx("span", {
                        className: "wax-seal",
                        "aria-hidden": "true"
                    }), a.jsx("span", {
                        className: "eyebrow",
                        children: s("AKHIRNYA, KAMU SAMPAI", "AT LAST, YOU ARE HERE")
                    }), a.jsx("h2", {
                        children: j.letterTitle
                    }), a.jsxs("div", {
                        className: "letter-intro",
                        children: [a.jsx(N, {
                            name: "heart",
                            size: 16
                        }), a.jsx("span", {
                            children: s("Semua tadi hanya sebagian kecil dari alasanku bersyukur punya kamu.", "All of that was only a small part of why I am grateful to have you.")
                        })]
                    }), a.jsx("div", {
                        className: "letter-body",
                        children: j.letter.map((d, y) => a.jsx("p", {
                            className: y === j.letter.length - 1 && j.letter.length > 1 ? "handwriting" : "",
                            children: d
                        }, y))
                    }), a.jsxs("button", {
                        className: "primary",
                        "data-cancel": e.ended || void 0,
                        onClick: () => L(e.ended ? "ending" : "cake"),
                        children: [e.ended ? s("Kembali ke ucapan", "Back to the celebration") : s("Lihat kejutanmu", "See your surprise"), a.jsx(N, {
                            name: "arrowRight",
                            size: 16
                        })]
                    })]
                }), a.jsx("span", {
                    className: "scroll-rod bottom",
                    "aria-hidden": "true"
                })]
            }), x === "cake" && a.jsxs(J, {
                title: s("Buat sebuah harapan", "Make a wish"),
                onClose: R,
                className: "cake-modal",
                children: [a.jsx("span", {
                    className: "eyebrow",
                    children: s("SATU HAL KECIL LAGI", "ONE MORE LITTLE THING")
                }), a.jsxs("h2", {
                    children: [s("Pejamkan mata.", "Close your eyes."), a.jsx("br", {}), a.jsx("em", {
                        children: s("Buat sebuah harapan.", "Make a wish.")
                    })]
                }), a.jsx("div", {
                    className: "cake-art",
                    "aria-hidden": "true",
                    children: a.jsx(In, {})
                }), a.jsxs("p", {
                    children: [s("Semoga yang kamu simpan di dalam hati", "May what you keep in your heart"), a.jsx("br", {}), s("menemukan jalannya untuk menjadi nyata.", "find its way to come true.")]
                }), a.jsxs("button", {
                    className: "primary",
                    onClick: () => {
                        T.current?.effect("candle"), kn()
                    },
                    children: [s("Padamkan lilinnya", "Blow out the candles"), a.jsx(N, {
                        name: "sparkle",
                        size: 16
                    })]
                }), a.jsx("small", {
                    children: s("Cukup sentuh tombolnya. Harapanmu tetap rahasia.", "Just press the button. Your wish stays a secret.")
                })]
            }), x === "ending" && a.jsxs(J, {
                title: I("Selamat ulang tahun, {name}", "Happy birthday, {name}", {
                    name: j.name
                }),
                onClose: R,
                className: "ending-modal",
                children: [a.jsxs("div", {
                    className: "fireworks",
                    "aria-hidden": "true",
                    children: [a.jsx("i", {}), a.jsx("i", {}), a.jsx("i", {}), a.jsx("i", {}), a.jsx("i", {})]
                }), a.jsxs("div", {
                    className: "ending-botanical",
                    "aria-hidden": "true",
                    children: [a.jsx(N, {
                        name: "leaf",
                        size: 32
                    }), a.jsx(N, {
                        name: "flower",
                        size: 48
                    }), a.jsx(N, {
                        name: "leaf",
                        size: 32,
                        className: "flip"
                    })]
                }), a.jsx("span", {
                    className: "eyebrow",
                    children: s("HARI INI, KITA MERAYAKANMU", "TODAY, WE CELEBRATE YOU")
                }), a.jsxs("p", {
                    className: "quest-clear",
                    children: [a.jsx(N, {
                        name: "star",
                        size: 16
                    }), I("PETUALANGAN SELESAI · {done}/{total} BAB", "ADVENTURE COMPLETE · {done}/{total} CHAPTERS", {
                        done: V,
                        total: ae.length
                    }), a.jsx(N, {
                        name: "star",
                        size: 16
                    })]
                }), a.jsxs("h2", {
                    children: [s("Selamat ulang tahun,", "Happy birthday,"), a.jsx("br", {}), a.jsxs("em", {
                        children: [j.name, "."]
                    })]
                }), a.jsxs("p", {
                    children: [s("Semoga dunia selalu punya cara baik", "May the world always find kind ways"), a.jsx("br", {}), s("untuk memelukmu. Seperti aku.", "to hold you. Like I do.")]
                }), a.jsxs("div", {
                    className: "ending-sign",
                    children: [s("Dengan sayang,", "With love,"), " ", a.jsx("strong", {
                        children: j.from
                    }), a.jsx(N, {
                        name: "heart",
                        size: 24
                    })]
                }), a.jsxs("div", {
                    className: "ending-actions",
                    children: [a.jsxs("button", {
                        className: "primary",
                        onClick: R,
                        children: [z.area === "house" ? s("Jelajahi rumah", "Explore the house") : s("Jelajahi taman", "Explore the garden"), a.jsx(N, {
                            name: "arrowRight",
                            size: 16
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsxs("button", {
                            className: "text-button",
                            onClick: () => L("letter"),
                            children: [a.jsx(N, {
                                name: "bookOpen",
                                size: 16
                            }), " ", s("Baca surat lagi", "Read the letter again")]
                        }), a.jsxs("button", {
                            className: "text-button",
                            onClick: () => {
                                F(0), L("album")
                            },
                            children: [a.jsx(N, {
                                name: "camera",
                                size: 16
                            }), " ", s("Lihat album", "See the album")]
                        })]
                    }), a.jsxs("button", {
                        className: "text-button small",
                        onClick: () => L("reset"),
                        children: [a.jsx(N, {
                            name: "reset",
                            size: 16
                        }), " ", s("Ulang dari awal", "Start over")]
                    })]
                }), a.jsx("span", {
                    className: "ending-credit",
                    children: Jn()
                })]
            }), x === "settings" && a.jsxs(J, {
                title: s("Pengaturan perjalanan", "Journey settings"),
                onClose: R,
                className: "settings-modal",
                focus: "input",
                children: [a.jsxs("div", {
                    className: "settings-head",
                    children: [a.jsx(N, {
                        name: "gear",
                        size: 32
                    }), a.jsxs("div", {
                        children: [a.jsx("span", {
                            className: "eyebrow",
                            children: s("OPSI PERJALANAN", "JOURNEY OPTIONS")
                        }), a.jsx("h2", {
                            children: s("Buat dirimu nyaman.", "Make yourself comfortable.")
                        })]
                    })]
                }), a.jsxs("label", {
                    className: "range-label",
                    children: [a.jsx("span", {
                        children: s("Musik", "Music")
                    }), a.jsxs("b", {
                        children: [Math.round(n.music * 100), "%"]
                    }), a.jsx("input", {
                        className: "px-range",
                        style: ha(n.music),
                        "aria-label": s("Volume musik", "Music volume"),
                        type: "range",
                        min: "0",
                        max: "1",
                        step: ".05",
                        value: n.music,
                        onChange: d => r(y => ({
                            ...y,
                            music: Number(d.target.value)
                        }))
                    })]
                }), a.jsxs("label", {
                    className: "range-label",
                    children: [a.jsx("span", {
                        children: s("Suara taman", "Garden sounds")
                    }), a.jsxs("b", {
                        children: [Math.round(n.sfx * 100), "%"]
                    }), a.jsx("input", {
                        className: "px-range",
                        style: ha(n.sfx),
                        "aria-label": s("Volume efek", "Effects volume"),
                        type: "range",
                        min: "0",
                        max: "1",
                        step: ".05",
                        value: n.sfx,
                        onChange: d => r(y => ({
                            ...y,
                            sfx: Number(d.target.value)
                        }))
                    })]
                }), a.jsxs("label", {
                    className: "check-label",
                    children: [a.jsx("span", {
                        children: s("Matikan semua suara", "Mute all sounds")
                    }), a.jsx("input", {
                        className: "px-toggle",
                        type: "checkbox",
                        checked: n.muted,
                        onChange: d => r(y => ({
                            ...y,
                            muted: d.target.checked
                        }))
                    })]
                }), a.jsxs("label", {
                    className: "check-label",
                    children: [a.jsx("span", {
                        children: s("Kurangi gerakan", "Reduce motion")
                    }), a.jsx("input", {
                        className: "px-toggle",
                        type: "checkbox",
                        checked: n.reduced,
                        onChange: d => r(y => ({
                            ...y,
                            reduced: d.target.checked
                        }))
                    })]
                }), a.jsxs("label", {
                    className: "check-label",
                    children: [a.jsx("span", {
                        children: s("Kualitas visual", "Visual quality")
                    }), a.jsxs("select", {
                        value: n.quality,
                        onChange: d => r(y => ({
                            ...y,
                            quality: d.target.value
                        })),
                        children: [a.jsx("option", {
                            value: "balanced",
                            children: s("Seimbang", "Balanced")
                        }), a.jsx("option", {
                            value: "high",
                            children: s("Detail penuh", "Full detail")
                        }), a.jsx("option", {
                            value: "low",
                            children: s("Ringan", "Light")
                        })]
                    })]
                }), a.jsx("button", {
                    className: "text-button",
                    disabled: !b || !!E,
                    onClick: () => {
                        Qt(0), L("avatars")
                    },
                    children: s("Ganti karakter", "Change character")
                }), a.jsxs("div", {
                    className: "settings-bottom",
                    children: [a.jsx("button", {
                        className: "primary",
                        "data-cancel": !0,
                        onClick: R,
                        children: s("Kembali ke taman", "Back to the garden")
                    }), a.jsxs("button", {
                        className: "text-button",
                        onClick: () => L("reset"),
                        children: [a.jsx(N, {
                            name: "reset",
                            size: 16
                        }), " ", s("Ulang dari awal", "Start over")]
                    })]
                })]
            }), x === "reset" && a.jsxs(J, {
                title: s("Ulang perjalanan", "Restart the journey"),
                onClose: R,
                className: "reset-modal",
                focus: ".text-button",
                children: [a.jsx("div", {
                    className: "item-showcase warn",
                    "aria-hidden": "true",
                    children: a.jsx(N, {
                        name: "reset",
                        size: 48
                    })
                }), a.jsx("span", {
                    className: "eyebrow",
                    children: s("PERINGATAN · DATA SIMPANAN", "WARNING · SAVED DATA")
                }), a.jsx("h2", {
                    children: s("Mulai cerita dari awal?", "Start the story over?")
                }), a.jsx("p", {
                    children: s("Petunjuk, kunci, pilihan avatar, dan rekor aktivitas perjalanan ini akan direset. Pengaturan suara dan visual tetap tersimpan.", "This journey's clues, key, avatar choices and activity records will be reset. Sound and visual settings are kept.")
                }), a.jsxs("div", {
                    className: "modal-actions",
                    children: [a.jsx("button", {
                        className: "primary danger",
                        onClick: hn,
                        children: s("Ya, ulang perjalanan", "Yes, restart")
                    }), a.jsx("button", {
                        className: "text-button",
                        onClick: R,
                        children: s("Lanjutkan yang sekarang", "Keep my progress")
                    })]
                })]
            })]
        })
    })
}
const Ls = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Jr
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    wn as $, gs as A, rr as B, $t as C, is as D, bt as E, $a as F, bs as G, ws as H, zs as I, Ms as J, ys as K, Vn as L, kr as M, dt as N, js as O, N as P, Je as Q, mt as R, oe as S, G as T, Ss as U, ps as V, Wa as W, jr as X, Ps as Y, Es as Z, jn as _, Ur as a, xs as a0, ls as a1, Gn as a2, Un as a3, cs as a4, Ts as a5, Rs as a6, Cs as a7, Pr as a8, Nr as a9, en as aa, rs as ab, os as ac, Gr as ad, Os as ae, hs as af, pt as ag, Vr as ah, ks as ai, Fa as aj, $e as ak, As as al, vs as am, Za as an, Ls as ao, ds as b, us as c, ss as d, ns as e, gt as f, me as g, he as h, ms as i, fs as j, Ka as k, wa as l, Te as m, yr as n, Ja as o, We as p, er as q, dr as r, $ as s, Le as t, br as u, yt as v, Dt as w, Ns as x, ce as y, fr as z
};
