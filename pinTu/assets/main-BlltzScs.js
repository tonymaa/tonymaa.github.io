const Tt = "modulepreload",
    Rt = function(t) {
        return "/" + t
    },
    dt = {},
    gt = function(e, r, c) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            document.getElementsByTagName("link");
            const g = document.querySelector("meta[property=csp-nonce]"),
                a = (g == null ? void 0 : g.nonce) || (g == null ? void 0 : g.getAttribute("nonce"));
            s = Promise.allSettled(r.map(i => {
                if (i = Rt(i), i in dt) return;
                dt[i] = !0;
                const o = i.endsWith(".css"),
                    l = o ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${i}"]${l}`)) return;
                const m = document.createElement("link");
                if (m.rel = o ? "stylesheet" : Tt, o || (m.as = "script"), m.crossOrigin = "", m.href = i, a && m.setAttribute("nonce", a), document.head.appendChild(m), o) return new Promise((f, p) => {
                    m.addEventListener("load", f), m.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${i}`)))
                })
            }))
        }

        function d(g) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = g, window.dispatchEvent(a), !a.defaultPrevented) throw g
        }
        return s.then(g => {
            for (const a of g || []) a.status === "rejected" && d(a.reason);
            return e().catch(d)
        })
    },
    h = {};

function Ft() {
    Object.assign(h, {
        layoutModeBtn: document.getElementById("layout-mode-btn"),
        stitchingModeBtn: document.getElementById("stitching-mode-btn"),
        layoutControls: document.getElementById("layout-controls"),
        layoutContainer: document.getElementById("layout-container"),
        stitchingControls: document.getElementById("stitching-controls"),
        stitchingDirectionBtns: document.getElementById("stitching-direction-btns"),
        stitchingUploadBtn: document.getElementById("stitching-upload-btn"),
        stitchingUploadInput: document.getElementById("stitching-upload-input"),
        layoutWrapper: document.getElementById("layout-wrapper"),
        layoutGrid: document.getElementById("layout-grid"),
        stitchingWrapper: document.getElementById("stitching-wrapper"),
        stitchingGrid: document.getElementById("stitching-grid"),
        canvasHint: document.getElementById("canvas-hint"),
        canvasSettings: document.getElementById("canvas-settings"),
        aspectRatioBtns: document.getElementById("aspect-ratio-btns"),
        spacingSlider: document.getElementById("spacing-slider"),
        spacingValue: document.getElementById("spacing-value"),
        radiusSlider: document.getElementById("radius-slider"),
        radiusValue: document.getElementById("radius-value"),
        colorPicker: document.getElementById("color-picker"),
        shuffleBtn: document.getElementById("shuffle-btn"),
        downloadBtn: document.getElementById("download-btn"),
        borderTopInput: document.getElementById("border-top-input"),
        borderRightInput: document.getElementById("border-right-input"),
        borderBottomInput: document.getElementById("border-bottom-input"),
        borderLeftInput: document.getElementById("border-left-input"),
        borderControls: document.getElementById("border-controls"),
        toast: document.getElementById("toast")
    })
}

function E(t, e) {
    const r = document.createElement(t);
    return e && (r.className = e), r
}
const H = {
        upload: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
        remove: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
        replace: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
        zoomIn: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
        zoomOut: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
        zoomReset: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"></circle></svg>',
        pan: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l0 20"/><path d="M2 12l20 0"/><path d="m5 15 3-3-3-3"/><path d="m19 9-3 3 3 3"/></svg>'
    },
    Z = {
        "2-t1b1": {
            g: 2,
            gr: [2, 1],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "2-l1r1": {
            g: 2,
            gr: [1, 2],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "3-t1b2": {
            g: 3,
            gr: [2, 2],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "3-t2b1": {
            g: 3,
            gr: [2, 2],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "3-l1r2": {
            g: 3,
            gr: [2, 2],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "3-l2r1": {
            g: 3,
            gr: [2, 2],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "3-l1rr": {
            g: 3,
            gr: [3, 3],
            c: [{
                r: 3,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }]
        },
        "3-t1bb": {
            g: 3,
            gr: [3, 3],
            c: [{
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "4-grid": {
            g: 4,
            gr: [2, 2]
        },
        "4-t1b3": {
            g: 4,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "4-b1t3": {
            g: 4,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 3
            }]
        },
        "4-l1r3": {
            g: 4,
            gr: [3, 2],
            c: [{
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "4-l-feat": {
            g: 4,
            gr: [2, 3],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "4-r-feat": {
            g: 4,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1,
                s: [2, 1]
            }]
        },
        "4-121": {
            g: 4,
            gr: [3, 2],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "4-212": {
            g: 4,
            gr: [2, 3],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "4-g3x2-alt": {
            g: 4,
            gr: [3, 2],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1,
                s: [3, 1]
            }, {
                r: 1,
                c: 1,
                s: [1, 2]
            }, {
                r: 2,
                c: 1,
                s: [2, 2]
            }]
        },
        "5-center": {
            g: 5,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "5-l3r2": {
            g: 5,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-131": {
            g: 5,
            gr: [3, 3],
            c: [{
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-l2r3": {
            g: 5,
            gr: [3, 2],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-t2b3": {
            g: 5,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-center-h-bar": {
            g: 5,
            gr: [3, 2],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1,
                s: [1, 2]
            }, {
                r: 1,
                c: 2,
                s: [2, 1]
            }, {
                r: 1,
                c: 1,
                s: [3, 1]
            }, {
                r: 1,
                c: 1,
                s: [3, 2]
            }]
        },
        "5-t2b3-split": {
            g: 5,
            gr: [2, 6],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }]
        },
        "5-l1r4-col": {
            g: 5,
            gr: [4, 2],
            c: [{
                r: 4,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-t-feat-r": {
            g: 5,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-t1b4-grid": {
            g: 5,
            gr: [3, 2],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1,
                s: [2, 1]
            }, {
                r: 1,
                c: 1,
                s: [2, 2]
            }, {
                r: 1,
                c: 1,
                s: [3, 1]
            }, {
                r: 1,
                c: 1,
                s: [3, 2]
            }]
        },
        "5-r1l4-col": {
            g: 5,
            gr: [4, 2],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 4,
                c: 1,
                s: [1, 2]
            }]
        },
        "5-cross-center": {
            g: 5,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1,
                s: [2, 1]
            }, {
                r: 1,
                c: 1,
                s: [2, 2]
            }, {
                r: 1,
                c: 1,
                s: [2, 3]
            }, {
                r: 1,
                c: 3,
                s: [3, 1]
            }, {
                r: 1,
                c: 1,
                s: [2, 2]
            }]
        },
        "5-l-tall-r-split": {
            g: 5,
            gr: [3, 3],
            c: [{
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1,
                s: [2, 2]
            }, {
                r: 1,
                c: 1,
                s: [2, 3]
            }, {
                r: 1,
                c: 2,
                s: [3, 2]
            }]
        },
        "5-213": {
            g: 5,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "5-123": {
            g: 5,
            gr: [2, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 3
            }]
        },
        "6-g3x2": {
            g: 6,
            gr: [3, 2]
        },
        "6-g2x3": {
            g: 6,
            gr: [2, 3]
        },
        "6-center": {
            g: 6,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 2,
                c: 1
            }, {
                r: 3,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "6-123": {
            g: 6,
            gr: [3, 6],
            c: [{
                r: 1,
                c: 6
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }]
        },
        "6-321": {
            g: 6,
            gr: [3, 6],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 6
            }]
        },
        "6-231": {
            g: 6,
            gr: [3, 6],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 6
            }]
        },
        "6-222": {
            g: 6,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }]
        },
        "6-1133": {
            g: 6,
            gr: [4, 3],
            c: [{
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "6-223r": {
            g: 6,
            gr: [3, 3],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "6-223l": {
            g: 6,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "6-114": {
            g: 6,
            gr: [3, 5],
            c: [{
                r: 2,
                c: 5
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "6-3333": {
            g: 6,
            gr: [4, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 2
            }]
        },
        "7-main": {
            g: 7,
            gr: [4, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-h-center-band": {
            g: 7,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-w-center-band": {
            g: 7,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-feat-l": {
            g: 7,
            gr: [4, 2],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-feat-t": {
            g: 7,
            gr: [4, 2],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-311": {
            g: 7,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-113": {
            g: 7,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 3
            }]
        },
        "7-232": {
            g: 7,
            gr: [3, 6],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }]
        },
        "7-124": {
            g: 7,
            gr: [3, 4],
            c: [{
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-323": {
            g: 7,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-313": {
            g: 7,
            gr: [4, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-331": {
            g: 7,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "7-233": {
            g: 7,
            gr: [4, 6],
            c: [{
                r: 2,
                c: 3
            }, {
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }]
        },
        "7-333": {
            g: 7,
            gr: [3, 3],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "7-346": {
            g: 7,
            gr: [4, 6],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }]
        },
        "8-g4x2": {
            g: 8,
            gr: [4, 2]
        },
        "8-g2x4": {
            g: 8,
            gr: [2, 4]
        },
        "8-222": {
            g: 8,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }]
        },
        "8-l2-tall-r6-grid": {
            g: 8,
            gr: [3, 4],
            c: [{
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "8-sandwich-6": {
            g: 8,
            gr: [4, 3],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1,
                s: [2, 1]
            }, {
                r: 1,
                c: 1,
                s: [2, 2]
            }, {
                r: 1,
                c: 1,
                s: [2, 3]
            }, {
                r: 1,
                c: 1,
                s: [3, 1]
            }, {
                r: 1,
                c: 1,
                s: [3, 2]
            }, {
                r: 1,
                c: 1,
                s: [3, 3]
            }, {
                r: 1,
                c: 3,
                s: [4, 1]
            }]
        },
        "8-313": {
            g: 8,
            gr: [5, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }]
        },
        "8-131": {
            g: 8,
            gr: [4, 5],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }]
        },
        "8-134": {
            g: 8,
            gr: [4, 4],
            c: [{
                r: 3,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "8-431": {
            g: 8,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "8-323": {
            g: 8,
            gr: [3, 6],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }]
        },
        "8-363": {
            g: 8,
            gr: [6, 3],
            c: [{
                r: 2,
                c: 1
            }, {
                r: 3,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 3,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }]
        },
        "8-344": {
            g: 8,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-grid": {
            g: 9,
            gr: [3, 3]
        },
        "9-144-grid": {
            g: 9,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 4
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-414-grid": {
            g: 9,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 4
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-441-grid": {
            g: 9,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 4
            }]
        },
        "9-211-grid": {
            g: 9,
            gr: [3, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-112-grid": {
            g: 9,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-434-grid": {
            g: 9,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 4,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-344-grid": {
            g: 9,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 4
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-424-grid": {
            g: 9,
            gr: [4, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-116-grid": {
            g: 9,
            gr: [6, 6],
            c: [{
                r: 3,
                c: 3
            }, {
                r: 3,
                c: 3
            }, {
                r: 3,
                c: 3
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "9-611-grid": {
            g: 9,
            gr: [6, 6],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 3,
                c: 3
            }, {
                r: 3,
                c: 3
            }]
        },
        "9-cen-grid": {
            g: 9,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-g5x2": {
            g: 10,
            gr: [5, 2]
        },
        "10-t2b8-grid": {
            g: 10,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-424-grid": {
            g: 10,
            gr: [3, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-4x3-grid": {
            g: 10,
            gr: [4, 3],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-5x5-grid": {
            g: 10,
            gr: [5, 5],
            c: [{
                r: 4,
                c: 4
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-4x4-grid": {
            g: 10,
            gr: [4, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-8x8-grid": {
            g: 10,
            gr: [8, 8],
            c: [{
                r: 4,
                c: 4
            }, {
                r: 4,
                c: 4
            }, {
                r: 4,
                c: 4
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-442-grid": {
            g: 10,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "10-6x6-grid": {
            g: 10,
            gr: [6, 6],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 2
            }]
        },
        "11-4c4-t": {
            g: 11,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "11-4x4-t": {
            g: 11,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }]
        },
        "11-4x6-t": {
            g: 11,
            gr: [4, 6],
            c: [{
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 3
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 2
            }]
        },
        "11-feat-t": {
            g: 11,
            gr: [3, 5],
            c: [{
                r: 1,
                c: 5
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "11-feat-c": {
            g: 11,
            gr: [3, 5],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 5
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "11-feat-f": {
            g: 11,
            gr: [3, 5],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 5
            }]
        },
        "12-g4x3": {
            g: 12,
            gr: [4, 3]
        },
        "12-g3x4": {
            g: 12,
            gr: [3, 4]
        },
        "12-g6x6": {
            g: 12,
            gr: [6, 6],
            c: [{
                r: 5,
                c: 5
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "13-feat-c": {
            g: 13,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "13-211": {
            g: 13,
            gr: [4, 4],
            c: [{
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "13-112": {
            g: 13,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "14-g7x2": {
            g: 14,
            gr: [7, 2]
        },
        "14-g4x4r": {
            g: 14,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "14-g4x4c": {
            g: 14,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 2,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "15-g5x3": {
            g: 15,
            gr: [5, 3]
        },
        "15-g4x4c": {
            g: 15,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }]
        },
        "15-g4x4f": {
            g: 15,
            gr: [4, 4],
            c: [{
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 1
            }, {
                r: 1,
                c: 2
            }]
        },
        "16-g4x4": {
            g: 16,
            gr: [4, 4]
        }
    },
    ut = "2-t1b1",
    n = {
        currentMode: "layout",
        shared: {
            spacing: 10,
            radius: 8,
            bgColor: "#FFFFFF",
            backgroundImage: null,
            borderWidths: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            downloadQuality: "high-jpg",
            selectedTextId: null,
            selectedArrowId: null,
            selectedRectangleId: null,
            selectedEllipseId: null
        },
        layout: {
            activeCellId: null,
            currentLayoutId: ut,
            layoutDef: Z[ut],
            imagesData: {},
            texts: [],
            arrows: [],
            rectangles: [],
            ellipses: [],
            colFractions: [],
            rowFractions: []
        },
        stitching: {
            direction: "horizontal",
            images: [],
            texts: [],
            arrows: [],
            rectangles: [],
            ellipses: []
        }
    };

function At(t) {
    n.layout.currentLayoutId = t, n.layout.layoutDef = Z[t]
}
const X = {
    start(t, e) {
        t.preventDefault(), t.stopPropagation();
        const r = t.type.startsWith("touch"),
            c = r ? t.touches[0] : t,
            s = {
                startX: c.clientX,
                startY: c.clientY,
                initialState: e.getInitialState ? e.getInitialState() : {}
            };
        e.onStart && e.onStart(s);
        const d = a => {
                a.preventDefault();
                const i = a.type.startsWith("touch") ? a.touches[0] : a;
                e.onMove && e.onMove(i, s)
            },
            g = () => {
                document.removeEventListener(r ? "touchmove" : "mousemove", d), document.removeEventListener(r ? "touchend" : "mouseup", g), e.onEnd && e.onEnd()
            };
        document.addEventListener(r ? "touchmove" : "mousemove", d, {
            passive: !1
        }), document.addEventListener(r ? "touchend" : "mouseup", g)
    }
};

function ct(t, e) {
    if (!e) return;
    const r = E("div", "text-element-container");
    r.id = `text-container-${t.id}`, Object.assign(r.style, {
        top: `${t.top}%`,
        left: `${t.left}%`,
        transform: "translate(-50%, -50%)"
    });
    const c = E("div", "text-content");
    c.innerText = t.content, c.contentEditable = "true", Object.assign(c.style, {
        color: t.color,
        fontSize: `${t.fontSize}px`,
        whiteSpace: "nowrap"
    });
    const s = E("div", "text-toolbar");
    s.innerHTML = `<input type="number" value="${t.fontSize}" data-property="fontSize" title="Font Size"><input type="color" value="${t.color}" data-property="color" title="Font Color">`;
    const d = E("button", "delete-text-button");
    d.innerHTML = "&times;", d.title = "Delete Text", r.append(s, c, d), e.appendChild(r), r.addEventListener("click", l => {
        l.stopPropagation(), F(t.id)
    });
    const g = l => l.stopPropagation();
    s.addEventListener("mousedown", g), s.addEventListener("touchstart", g);
    const a = l => {
        const m = l.target.dataset.property;
        m && et({
            [m]: l.target.value
        })
    };
    s.addEventListener("input", a), s.addEventListener("change", a), c.addEventListener("blur", () => et({
        content: c.innerText
    }));
    const i = l => {
        l.stopPropagation(), l.preventDefault(), Lt()
    };
    d.addEventListener("click", i), d.addEventListener("touchend", i);
    const o = l => {
        l.target.closest(".text-toolbar") || l.target.closest(".delete-text-button") || (F(t.id), X.start(l, {
            getInitialState: () => ({
                gridRect: e.getBoundingClientRect(),
                startLeftPercent: parseFloat(r.style.left),
                startTopPercent: parseFloat(r.style.top)
            }),
            onMove: (m, f) => {
                const {
                    gridRect: p,
                    startLeftPercent: u,
                    startTopPercent: b
                } = f.initialState;
                if (p.width === 0 || p.height === 0) return;
                const w = m.clientX - f.startX,
                    S = m.clientY - f.startY;
                r.style.left = `${u+w/p.width*100}%`, r.style.top = `${b+S/p.height*100}%`
            },
            onEnd: () => {
                et({
                    left: parseFloat(r.style.left),
                    top: parseFloat(r.style.top)
                })
            }
        }))
    };
    r.addEventListener("mousedown", o), r.addEventListener("touchstart", o)
}

function ot(t, e, r = null) {
    if (!e) return;
    const c = E("div", "arrow-container"),
        s = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        d = document.createElementNS("http://www.w3.org/2000/svg", "line"),
        g = E("div", "arrow-handle"),
        a = E("div", "arrow-handle"),
        i = E("div", "rotation-handle"),
        o = E("div", "text-toolbar"),
        l = y => {
            const v = r || e.getBoundingClientRect();
            if (v.width === 0) return;
            const L = v.width * (y.x1 / 100),
                x = v.height * (y.y1 / 100),
                C = v.width * (y.x2 / 100),
                I = v.height * (y.y2 / 100),
                P = Math.min(L, C),
                $ = Math.min(x, I);
            Object.assign(c.style, {
                left: `${P}px`,
                top: `${$}px`,
                width: `${Math.abs(L-C)}px`,
                height: `${Math.abs(x-I)}px`,
                transform: `rotate(${y.rotation||0}deg)`
            });
            const _ = L - P,
                N = x - $;
            d.setAttribute("x1", _), d.setAttribute("y1", N), d.setAttribute("x2", C - P), d.setAttribute("y2", I - $), d.setAttribute("stroke-width", y.strokeWidth), d.setAttribute("stroke", y.color), d.setAttribute("stroke-linecap", "butt");
            const lt = s.querySelector("marker polygon");
            lt && lt.setAttribute("fill", y.color), g.style.left = `${_}px`, g.style.top = `${N}px`, a.style.left = `${C-P}px`, a.style.top = `${I-$}px`
        };
    c.id = `arrow-container-${t.id}`, n.shared.selectedArrowId === t.id && c.classList.add("selected");
    const m = `arrowhead-${t.id}`;
    s.innerHTML = `<defs>
        <marker
            id="${m}"
            viewBox="0 0 12 12"
            refX="10" refY="6"
            markerWidth="9" markerHeight="9"
            orient="auto">
            <polygon points="2 2, 11 6, 2 10, 2 8, 5 6, 2 4" fill="${t.color}"></polygon>
        </marker>
    </defs>`, d.setAttribute("marker-end", `url(#${m})`), s.appendChild(d), o.style.top = "-45px", o.innerHTML = `<input type="number" value="${t.strokeWidth}" data-property="strokeWidth" title="Thickness" min="1" max="50"><input type="color" value="${t.color}" data-property="color" title="Color"><button class="toolbar-delete-btn" title="Delete Arrow">&times;</button>`, c.append(s, g, a, i, o), e.appendChild(c), l(t);
    const f = (y, v) => {
            y.addEventListener("mousedown", L => X.start(L, v)), y.addEventListener("touchstart", L => X.start(L, v))
        },
        p = y => y.stopPropagation();
    o.addEventListener("mousedown", p), o.addEventListener("touchstart", p);
    const u = y => {
        const v = {
            [y.target.dataset.property]: y.target.value
        };
        U(v);
        const L = n.layout.arrows.find(x => x.id === t.id);
        L && l(L)
    };
    o.addEventListener("input", u), o.addEventListener("change", u);
    const b = o.querySelector(".toolbar-delete-btn"),
        w = y => {
            y.stopPropagation(), y.preventDefault(), xt()
        };
    b.addEventListener("click", w), b.addEventListener("touchend", w), f(c, {
        onStart: () => R(t.id),
        getInitialState: () => ({
            initialData: {
                ...t
            },
            containerStartLeft: c.offsetLeft,
            containerStartTop: c.offsetTop
        }),
        onMove: (y, v) => {
            const L = y.clientX - v.startX,
                x = y.clientY - v.startY;
            c.style.left = `${v.initialState.containerStartLeft+L}px`, c.style.top = `${v.initialState.containerStartTop+x}px`
        },
        onEnd: () => {
            const y = c.getBoundingClientRect(),
                v = n.layout.arrows.find(N => N.id === t.id);
            if (!v) return;
            const L = e.getBoundingClientRect(),
                x = (v.x1 < v.x2 ? v.x1 : v.x2) / 100 * L.width,
                C = (v.y1 < v.y2 ? v.y1 : v.y2) / 100 * L.height,
                I = y.left - L.left - x,
                P = y.top - L.top - C,
                $ = I / L.width * 100,
                _ = P / L.height * 100;
            (Math.abs($) > .01 || Math.abs(_) > .01) && U({
                x1: v.x1 + $,
                y1: v.y1 + _,
                x2: v.x2 + $,
                y2: v.y2 + _
            })
        }
    });
    const S = y => ({
        onStart: () => R(t.id),
        getInitialState: () => ({
            gridRect: e.getBoundingClientRect()
        }),
        onMove: (v, L) => {
            const {
                gridRect: x
            } = L.initialState;
            if (x.width === 0 || x.height === 0) return;
            const C = {
                ...n.layout.arrows.find(I => I.id === t.id)
            };
            C[y.x] = (v.clientX - x.left) / x.width * 100, C[y.y] = (v.clientY - x.top) / x.height * 100, U(C), l(C)
        },
        onEnd: () => {
            var v;
            (v = B()) == null || v.render()
        }
    });
    f(g, S({
        x: "x1",
        y: "y1"
    })), f(a, S({
        x: "x2",
        y: "y2"
    })), f(i, {
        onStart: () => R(t.id),
        getInitialState: () => {
            const y = c.getBoundingClientRect();
            return {
                centerX: y.left + y.width / 2,
                centerY: y.top + y.height / 2,
                initialRotation: t.rotation || 0
            }
        },
        onMove: (y, v) => {
            const {
                centerX: L,
                centerY: x,
                initialRotation: C
            } = v.initialState, I = Math.atan2(y.clientY - x, y.clientX - L) * (180 / Math.PI), P = Math.atan2(v.startY - x, v.startX - L) * (180 / Math.PI);
            c.style.transform = `rotate(${C+(I-P)}deg)`
        },
        onEnd: () => {
            const y = c.style.transform,
                v = y ? parseFloat(y.replace(/[^0-9.-]/g, "")) : 0;
            U({
                rotation: v
            })
        }
    })
}

function Y(t, e) {
    if (!e) return;
    const r = E("div", "shape-container");
    r.id = `shape-container-${t.id}`, Object.assign(r.style, {
        left: `${t.left}%`,
        top: `${t.top}%`,
        width: `${t.width}%`,
        height: `${t.height}%`,
        transform: "translate(-50%, -50%)"
    });
    const c = E("div", "shape-element");
    c.style.border = `${t.strokeWidth}px solid ${t.color}`, t.type === "ellipse" && (c.style.borderRadius = "50%");
    const s = E("div", "shape-toolbar");
    s.innerHTML = `<input type="number" value="${t.strokeWidth}" data-property="strokeWidth" title="线条粗细" min="1" max="50"><input type="color" value="${t.color}" data-property="color" title="线条颜色"><button class="toolbar-delete-btn" title="删除形状">&times;</button>`;
    const d = ["n", "ne", "e", "se", "s", "sw", "w", "nw"].map(u => {
        const b = E("div", `resize-handle ${u}`);
        return b.dataset.direction = u, b
    });
    r.append(c, s, ...d), e.appendChild(r), (n.shared.selectedRectangleId === t.id || n.shared.selectedEllipseId === t.id) && r.classList.add("selected");
    const g = t.type === "rectangle" ? j : q,
        a = t.type === "rectangle" ? oe : se,
        i = t.type === "rectangle" ? St : It,
        o = (u, b) => {
            u.addEventListener("mousedown", w => X.start(w, b)), u.addEventListener("touchstart", w => X.start(w, b))
        },
        l = u => u.stopPropagation();
    s.addEventListener("mousedown", l), s.addEventListener("touchstart", l);
    const m = u => {
        const b = u.target.type === "number" ? parseFloat(u.target.value) : u.target.value,
            w = {
                [u.target.dataset.property]: b
            };
        a(w), c.style.borderColor = w.color || t.color, c.style.borderWidth = w.strokeWidth ? `${w.strokeWidth}px` : `${t.strokeWidth}px`
    };
    s.addEventListener("input", m), s.addEventListener("change", m);
    const f = s.querySelector(".toolbar-delete-btn"),
        p = u => {
            u.stopPropagation(), u.preventDefault(), i()
        };
    f.addEventListener("click", p), f.addEventListener("touchend", p), o(c, {
        onStart: () => g(t.id),
        getInitialState: () => ({
            gridRect: e.getBoundingClientRect(),
            startLeftPercent: t.left,
            startTopPercent: t.top
        }),
        onMove: (u, b) => {
            const {
                gridRect: w,
                startLeftPercent: S,
                startTopPercent: y
            } = b.initialState;
            if (w.width === 0 || w.height === 0) return;
            const v = u.clientX - b.startX,
                L = u.clientY - b.startY;
            r.style.left = `${S+v/w.width*100}%`, r.style.top = `${y+L/w.height*100}%`
        },
        onEnd: () => a({
            left: parseFloat(r.style.left),
            top: parseFloat(r.style.top)
        })
    }), d.forEach(u => {
        o(u, {
            onStart: () => g(t.id),
            getInitialState: () => ({
                gridRect: e.getBoundingClientRect(),
                startLeft: t.left,
                startTop: t.top,
                startWidth: t.width,
                startHeight: t.height,
                direction: u.dataset.direction
            }),
            onMove: (b, w) => {
                const {
                    gridRect: S,
                    direction: y,
                    ...v
                } = w.initialState;
                if (S.width === 0 || S.height === 0) return;
                const L = (b.clientX - w.startX) / S.width * 100,
                    x = (b.clientY - w.startY) / S.height * 100;
                let C = v.startLeft,
                    I = v.startTop,
                    P = v.startWidth,
                    $ = v.startHeight;
                y.includes("e") && (P += L), y.includes("w") && (P -= L, C += L), y.includes("s") && ($ += x), y.includes("n") && ($ -= x, I += x), P > 1 && $ > 1 && (r.style.left = `${C}%`, r.style.top = `${I}%`, r.style.width = `${P}%`, r.style.height = `${$}%`)
            },
            onEnd: () => a({
                left: parseFloat(r.style.left),
                top: parseFloat(r.style.top),
                width: parseFloat(r.style.width),
                height: parseFloat(r.style.height)
            })
        })
    })
}
let K = !1,
    O = null,
    rt = -1;

function Wt() {
    h.stitchingControls.classList.remove("hidden"), h.stitchingWrapper.classList.remove("hidden"), document.getElementById("stitching-placeholder").classList.toggle("hidden", n.stitching.images.length > 0), Ot()
}

function Dt() {
    h.stitchingControls.classList.add("hidden"), h.stitchingWrapper.classList.add("hidden"), h.stitchingGrid.removeEventListener("mousedown", mt)
}

function Q() {
    const t = h.stitchingWrapper,
        e = h.stitchingGrid;
    if (n.stitching.images.length === 0) t.classList.add("is-empty"), t.style.width = "", t.style.height = "";
    else {
        t.classList.remove("is-empty");
        const r = e.offsetWidth,
            c = e.offsetHeight;
        t.style.width = `${r}px`, t.style.height = `${c}px`
    }
}

function G() {
    const t = h.stitchingGrid,
        e = document.getElementById("stitching-placeholder"),
        r = h.stitchingWrapper;
    if (t.innerHTML = "", n.stitching.images.length > 0) {
        e.classList.add("hidden"), r.className = "collage-wrapper stitching-wrapper", t.className = "collage-grid", t.classList.add(n.stitching.direction), t.style.position = "relative", n.stitching.images.length > 1 && t.classList.add("is-sortable");
        const d = [];
        n.stitching.images.forEach((g, a) => {
            const i = E("div", "stitched-image-container"),
                o = E("img"),
                l = new Promise((p, u) => {
                    o.onload = p, o.onerror = u
                });
            d.push(l), o.src = g, o.dataset.index = a, o.draggable = !1;
            const m = E("button", "delete-stitched-image-btn");
            m.innerHTML = "&times;", m.title = "删除图片", m.onclick = p => {
                p.stopPropagation(), Qt(a)
            };
            const f = E("button", "add-stitched-image-btn");
            f.innerHTML = "+", f.title = "在此后插入图片", f.onclick = p => {
                p.stopPropagation();
                const u = E("input");
                u.type = "file", u.multiple = !0, u.accept = "image/*", u.style.display = "none", u.onchange = b => {
                    b.target.files.length > 0 && Zt(b.target.files, a), b.target.value = null, document.body.removeChild(u)
                }, document.body.appendChild(u), u.click()
            }, i.append(o, m, f), t.appendChild(i)
        }), Promise.all(d).then(() => {
            console.log("All stitched images loaded, updating layout."), Q()
        }).catch(g => {
            console.error("An image failed to load in stitching mode.", g), Q()
        })
    } else e.classList.remove("hidden"), t.classList.add("hidden");
    n.stitching.images.length === 0 && Q();
    const c = h.stitchingGrid,
        s = n.stitching;
    s.texts.forEach(d => ct(d, c)), s.arrows.forEach(d => ot(d, c)), s.rectangles.forEach(d => Y(d, c)), s.ellipses.forEach(d => Y(d, c)), bt()
}

function Ot() {
    h.stitchingGrid.addEventListener("mousedown", mt)
}

function mt(t) {
    if (t.target.tagName !== "IMG" || n.stitching.images.length < 2 || (t.preventDefault(), K = !0, O = t.target.closest(".stitched-image-container"), !O)) return;
    const e = O.querySelector("img");
    rt = parseInt(e.dataset.index), O.classList.add("dragging"), document.addEventListener("mousemove", ft), document.addEventListener("mouseup", yt)
}

function ft(t) {
    if (!K) return;
    h.stitchingGrid.querySelectorAll(".drag-over").forEach(r => r.classList.remove("drag-over"));
    const e = t.target.closest(".stitched-image-container");
    e && e !== O && e.classList.add("drag-over")
}

function yt(t) {
    if (!K) return;
    O.classList.remove("dragging"), h.stitchingGrid.querySelectorAll(".drag-over").forEach(r => r.classList.remove("drag-over"));
    const e = t.target.closest(".stitched-image-container");
    if (e && e !== O) {
        const r = e.querySelector("img");
        if (r) {
            const c = parseInt(r.dataset.index);
            zt(rt, c)
        }
    }
    K = !1, O = null, rt = -1, document.removeEventListener("mousemove", ft), document.removeEventListener("mouseup", yt)
}

function zt(t, e) {
    const [r] = n.stitching.images.splice(t, 1);
    n.stitching.images.splice(e, 0, r), G()
}

function vt(t) {
    const e = Array.from(t).filter(c => c.type.startsWith("image/"));
    if (e.length === 0) {
        k("未选择有效的图片文件", "error");
        return
    }
    document.getElementById("stitching-placeholder").classList.add("hidden");
    const r = e.map(c => new Promise(s => {
        const d = new FileReader;
        d.onload = g => s(g.target.result), d.readAsDataURL(c)
    }));
    Promise.all(r).then(c => {
        n.stitching.images = n.stitching.images.concat(c), k(`成功添加 ${c.length} 张图片`, "success"), G(), W()
    })
}

function Ht() {
    if (!(n.stitching.images.length < 2)) {
        for (let t = n.stitching.images.length - 1; t > 0; t--) {
            const e = Math.floor(Math.random() * (t + 1));
            [n.stitching.images[t], n.stitching.images[e]] = [n.stitching.images[e], n.stitching.images[t]]
        }
        G(), k("图片已随机排序", "info")
    }
}

function bt() {
    const {
        spacing: t,
        radius: e
    } = n.shared, r = h.stitchingGrid;
    r.style.gap = `${t}px`, r.querySelectorAll("img").forEach(c => {
        c.style.borderRadius = `${e}px`
    }), requestAnimationFrame(() => {
        n.stitching.images.length > 0 && Q()
    })
}

function jt() {
    const t = h.stitchingWrapper,
        e = h.stitchingGrid,
        r = document.createElement("div"),
        c = e.cloneNode(!0),
        s = window.getComputedStyle(t);
    Object.assign(r.style, {
        padding: s.padding,
        backgroundColor: s.backgroundColor,
        backgroundImage: s.backgroundImage,
        backgroundSize: s.backgroundSize,
        backgroundPosition: s.backgroundPosition,
        boxSizing: "border-box",
        position: "absolute",
        top: "-9999px",
        left: "-9999px"
    }), c.style.gap = window.getComputedStyle(e).gap, r.appendChild(c), document.body.appendChild(r);
    const d = () => {
        document.body.removeChild(r)
    };
    return {
        element: r,
        options: {
            useCORS: !0,
            backgroundColor: null,
            scale: 3,
            width: r.offsetWidth,
            height: r.offsetHeight
        },
        cleanup: d
    }
}

function wt(t) {
    t !== n.stitching.direction && (n.stitching.direction = t, document.querySelector("#stitching-direction-btns .active").classList.remove("active"), document.querySelector(`#stitching-direction-btns [data-direction="${t}"]`).classList.add("active"), G())
}

function Et(t) {
    !t || t.length === 0 || (console.log(`Pasting ${t.length} image(s) into stitching mode.`), vt(t))
}
const qt = Object.freeze(Object.defineProperty({
    __proto__: null,
    activate: Wt,
    applySharedStyles: bt,
    deactivate: Dt,
    getDownloadOptions: jt,
    handlePastedFiles: Et,
    processFiles: vt,
    render: G,
    setDirection: wt,
    shuffle: Ht
}, Symbol.toStringTag, {
    value: "Module"
}));

function M() {
    return n.currentMode === "layout" ? n.layout : n.stitching
}

function _t() {
    var t;
    (t = B()) == null || t.shuffle()
}

function Yt(t) {
    n.shared.downloadQuality = t
}

function Xt() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

function Gt() {
    const t = Xt();
    let e = null;
    if (t)
        if (e = window.open("", "_blank"), e) e.document.write("<!DOCTYPE html><html><head><title>正在处理...</title><style>body{display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;color:#555;}</style></head><body><h1>正在生成您的作品，请稍候...</h1></body></html>"), e.document.close();
        else {
            k("弹窗被拦截，请在浏览器设置中允许本站弹出窗口后重试", "error");
            return
        } A(null), F(null), R(null), j(null), q(null);
    const r = B();
    if (!r) {
        e && e.close();
        return
    }
    h.layoutGrid.querySelectorAll(".gutter").forEach(a => a.style.display = "none"), k("正在生成高清晰度图片...", "info");
    const {
        element: c,
        options: s,
        cleanup: d
    } = r.getDownloadOptions(), g = {
        ...s,
        backgroundColor: null,
        logging: !1
    };
    setTimeout(() => {
        html2canvas(c, g).then(a => {
            d && d(), h.layoutGrid.querySelectorAll(".gutter").forEach(f => f.style.display = "block");
            const i = n.shared.downloadQuality;
            let o = "image/jpeg",
                l = 1,
                m = "jpg";
            switch (i) {
                case "high-jpg":
                    l = .95;
                    break;
                case "medium-jpg":
                    l = .8;
                    break;
                case "png":
                    o = "image/png", m = "png";
                    break
            }
            if (t && e) {
                const p = `
                    <!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"><title>保存您的作品</title><style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;margin:0;background-color:#f0f2f5;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;text-align:center;padding:20px;box-sizing:border-box}.container{background-color:white;padding:25px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1)}p{font-size:1.1em;color:#333;margin-bottom:20px;line-height:1.5}img{max-width:100%;height:auto;border-radius:8px;border:1px solid #ddd}.highlight{color:#007aff;font-weight:600}</style></head><body><div class="container"><p>请 <span class="highlight">长按</span> 下方图片, 然后选择 <span class="highlight">“存储图像”</span> 或 <span class="highlight">“添加到‘照片’”</span></p><img src="${a.toDataURL(o,l)}" alt="拼图作品"></div></body></html>
                `;
                e.document.open(), e.document.write(p), e.document.close()
            } else a.toBlob(f => {
                if (!f) return k("生成图片数据失败", "error");
                const p = URL.createObjectURL(f),
                    u = document.createElement("a");
                u.href = p, u.download = `${n.currentMode}-collage-${Date.now()}.${m}`, document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(p), k("下载已开始！", "success")
            }, o, l)
        }).catch(a => {
            d && d(), h.layoutGrid.querySelectorAll(".gutter").forEach(i => i.style.display = "block"), e && e.close(), console.error("截图失败:", a), k("截图失败，请重试", "error")
        })
    }, 50)
}

function Nt(t) {
    n.currentMode === "layout" && Pt(t)
}

function Ut(t) {
    var e;
    n.currentMode === "layout" && ((e = h.aspectRatioBtns.querySelector(".active")) == null || e.classList.remove("active"), t.classList.add("active"), at(), setTimeout(() => {
        var r;
        return (r = B()) == null ? void 0 : r.render()
    }, 100))
}

function Vt(t) {
    n.currentMode === "stitching" && wt(t)
}

function Qt(t) {
    var e;
    n.currentMode === "stitching" && (t > -1 && t < n.stitching.images.length && n.stitching.images.splice(t, 1), (e = B()) == null || e.render(), W())
}

function Zt(t, e) {
    if (n.currentMode !== "stitching") return;
    const r = Array.from(t).filter(s => s.type.startsWith("image/"));
    if (r.length === 0) return;
    const c = r.map(s => new Promise(d => {
        const g = new FileReader;
        g.onload = a => d(a.target.result), g.readAsDataURL(s)
    }));
    Promise.all(c).then(s => {
        var d;
        n.stitching.images.splice(e + 1, 0, ...s), k(`成功插入 ${s.length} 张图片`, "success"), (d = B()) == null || d.render(), W()
    })
}

function Kt(t) {
    const e = B();
    e && e.processFiles && e.processFiles(t)
}

function Jt(t) {
    const e = new FileReader;
    e.onload = r => {
        n.shared.backgroundImage = r.target.result, T()
    }, e.readAsDataURL(t)
}

function te() {
    n.shared.backgroundImage = null, T()
}

function ee() {
    var s;
    const t = M(),
        r = window.innerWidth < 768 ? 16 : 24,
        c = {
            id: Date.now(),
            content: "文字",
            color: "#ff0000",
            fontSize: r,
            top: 30,
            left: 30
        };
    t.texts.push(c), (s = B()) == null || s.render(), F(c.id)
}

function F(t) {
    var r;
    if (n.shared.selectedTextId === t) return;
    const e = n.shared.selectedTextId;
    if (n.shared.selectedTextId = t, e && ((r = document.getElementById(`text-container-${e}`)) == null || r.classList.remove("selected")), t) {
        const c = document.getElementById(`text-container-${t}`);
        if (c) {
            c.classList.add("selected");
            const s = c.querySelector(".text-content");
            re(s)
        }
    }
}

function et(t) {
    if (!n.shared.selectedTextId) return;
    const e = M().texts.find(s => s.id === n.shared.selectedTextId);
    if (!e) return;
    Object.assign(e, t);
    const r = document.getElementById(`text-container-${e.id}`);
    if (!r) return;
    const c = r.querySelector(".text-content");
    c && (t.content && (c.innerText = t.content), t.fontSize && (c.style.fontSize = `${t.fontSize}px`), t.color && (c.style.color = t.color), t.top && (c.style.top = `${t.top}%`), t.left && (c.style.left = `${t.left}%`))
}

function Lt() {
    var r;
    if (!n.shared.selectedTextId) return;
    const t = M(),
        e = t.texts.findIndex(c => c.id === n.shared.selectedTextId);
    e > -1 && (t.texts.splice(e, 1), (r = document.getElementById(`text-container-${n.shared.selectedTextId}`)) == null || r.remove(), F(null))
}

function re(t) {
    if (t && (t.focus(), typeof window.getSelection < "u" && typeof document.createRange < "u")) {
        const e = document.createRange();
        e.selectNodeContents(t), e.collapse(!1);
        const r = window.getSelection();
        r.removeAllRanges(), r.addRange(e)
    }
}

function ne() {
    var s;
    const t = M(),
        e = window.innerWidth < 768,
        r = {
            strokeWidth: e ? 4 : 3,
            x1: e ? 20 : 25,
            y1: 25,
            x2: e ? 45 : 35,
            y2: 35
        },
        c = {
            id: Date.now(),
            color: "#ff0000",
            rotation: 0,
            ...r
        };
    t.arrows.push(c), (s = B()) == null || s.render(), R(c.id)
}

function R(t) {
    var r, c;
    if (n.shared.selectedArrowId === t && t !== null) return;
    const e = n.shared.selectedArrowId;
    n.shared.selectedArrowId = t, e && ((r = document.getElementById(`arrow-container-${e}`)) == null || r.classList.remove("selected")), t && ((c = document.getElementById(`arrow-container-${t}`)) == null || c.classList.add("selected"))
}

function U(t) {
    if (!n.shared.selectedArrowId) return;
    const e = M().arrows.find(r => r.id === n.shared.selectedArrowId);
    e && Object.assign(e, t)
}

function xt() {
    var r;
    if (!n.shared.selectedArrowId) return;
    const t = M(),
        e = t.arrows.findIndex(c => c.id === n.shared.selectedArrowId);
    e > -1 && (t.arrows.splice(e, 1), (r = B()) == null || r.render(), R(null))
}

function ce() {
    var c;
    const t = M(),
        e = window.innerWidth < 768,
        r = {
            id: Date.now(),
            type: "rectangle",
            color: "#ff0000",
            strokeWidth: 4,
            left: 30,
            top: 30,
            width: e ? 20 : 15,
            height: e ? 15 : 10,
            rotation: 0
        };
    t.rectangles.push(r), (c = B()) == null || c.render(), j(r.id)
}

function j(t) {
    var r, c;
    if (n.shared.selectedRectangleId === t) return;
    F(null), R(null), q(null);
    const e = n.shared.selectedRectangleId;
    n.shared.selectedRectangleId = t, e && ((r = document.getElementById(`shape-container-${e}`)) == null || r.classList.remove("selected")), t && ((c = document.getElementById(`shape-container-${t}`)) == null || c.classList.add("selected"))
}

function oe(t) {
    if (!n.shared.selectedRectangleId) return;
    const e = M().rectangles.find(r => r.id === n.shared.selectedRectangleId);
    e && Object.assign(e, t)
}

function St() {
    var r;
    if (!n.shared.selectedRectangleId) return;
    const t = M(),
        e = t.rectangles.findIndex(c => c.id === n.shared.selectedRectangleId);
    e > -1 && (t.rectangles.splice(e, 1), (r = B()) == null || r.render(), j(null))
}

function ie() {
    var c;
    const t = M(),
        e = window.innerWidth < 768,
        r = {
            id: Date.now(),
            type: "ellipse",
            color: "#ff0000",
            strokeWidth: 4,
            left: 30,
            top: 30,
            width: e ? 20 : 15,
            height: e ? 20 : 15,
            rotation: 0
        };
    t.ellipses.push(r), (c = B()) == null || c.render(), q(r.id)
}

function q(t) {
    var r, c;
    if (n.shared.selectedEllipseId === t) return;
    F(null), R(null), j(null);
    const e = n.shared.selectedEllipseId;
    n.shared.selectedEllipseId = t, e && ((r = document.getElementById(`shape-container-${e}`)) == null || r.classList.remove("selected")), t && ((c = document.getElementById(`shape-container-${t}`)) == null || c.classList.add("selected"))
}

function se(t) {
    if (!n.shared.selectedEllipseId) return;
    const e = M().ellipses.find(r => r.id === n.shared.selectedEllipseId);
    e && Object.assign(e, t)
}

function It() {
    var r;
    if (!n.shared.selectedEllipseId) return;
    const t = M(),
        e = t.ellipses.findIndex(c => c.id === n.shared.selectedEllipseId);
    e > -1 && (t.ellipses.splice(e, 1), (r = B()) == null || r.render(), q(null))
}

function A(t) {
    if (n.currentMode === "layout" && n.layout.activeCellId !== t) {
        if (n.layout.activeCellId) {
            const e = document.getElementById(n.layout.activeCellId);
            e && e.classList.remove("selected")
        }
        if (n.layout.activeCellId = t, t) {
            const e = document.getElementById(t);
            e && e.classList.add("selected")
        }
    }
}

function ae(t) {
    if (typeof t != "string" || t.trim() === "") return [50, 50];
    const e = t.split(" "),
        r = parseFloat(e[0]),
        c = e.length > 1 ? parseFloat(e[1]) : r;
    return [isNaN(r) ? 50 : r, isNaN(c) ? 50 : c]
}

function le(t, e) {
    if (n.currentMode !== "layout") return;
    const {
        activeCellId: r
    } = n.layout;
    if (!r) return;
    const c = n.layout.imagesData[r];
    if (!c || !c.src) return;
    const s = document.getElementById(r);
    if (!s) return;
    const [d, g] = ae(c.position);
    let a = d - t,
        i = g - e;
    a = Math.max(0, Math.min(100, a)), i = Math.max(0, Math.min(100, i));
    const o = `${a}% ${i}%`;
    c.position = o, s.style.backgroundPosition = o
}

function J(t) {
    if (n.currentMode !== "layout") return;
    const {
        activeCellId: e
    } = n.layout;
    if (!e) return;
    const r = n.layout.imagesData[e];
    if (!r || !r.src) return;
    const c = Math.max(1, Math.min(t, 5));
    r.scale = c, z(e, r)
}

function de(t) {
    n.currentMode === "layout" && (delete n.layout.imagesData[t], tt(t), A(null), W())
}
const Ct = .2;

function ge() {
    if (n.currentMode !== "layout") return;
    const {
        activeCellId: t
    } = n.layout;
    if (!t || !n.layout.imagesData[t]) return;
    const r = (n.layout.imagesData[t].scale || 1) + Ct;
    J(r)
}

function ue() {
    if (n.currentMode !== "layout") return;
    const {
        activeCellId: t
    } = n.layout;
    if (!t || !n.layout.imagesData[t]) return;
    const r = (n.layout.imagesData[t].scale || 1) - Ct;
    J(r)
}

function pe(t) {
    if (n.currentMode !== "layout") return;
    const e = n.layout.imagesData[t];
    e && (e.scale = 1, e.position = "50% 50%", z(t, e))
}

function he() {
    const t = document.querySelector(".grid-cell.is-panning-touch");
    t && t.classList.remove("is-panning-touch")
}

function me(t) {
    const e = document.getElementById(t);
    if (!e) return;
    const r = document.querySelector(".grid-cell.is-panning-touch");
    r && r.id !== t && r.classList.remove("is-panning-touch"), e.classList.toggle("is-panning-touch"), e.classList.contains("is-panning-touch") ? A(t) : A(null)
}

function fe() {
    var e;
    if (!confirm("您确定要清空整个画布吗？所有未保存的更改都将丢失。")) return;
    const t = M();
    t.texts = [], t.arrows = [], t.rectangles = [], t.ellipses = [], n.currentMode === "layout" ? t.imagesData = {} : n.currentMode === "stitching" && (t.images = []), A(null), F(null), R(null), j(null), q(null), (e = B()) == null || e.render(), W(), k("画布已清空", "info")
}

function it() {
    const t = h.layoutGrid;
    t.querySelectorAll(".gutter").forEach(g => g.remove());
    const [e, r] = n.layout.layoutDef.gr, c = t.getBoundingClientRect(), s = n.layout.rowFractions.reduce((g, a) => g + a, 0), d = n.layout.colFractions.reduce((g, a) => g + a, 0);
    if (r > 1) {
        const g = n.layout.colFractions.map(i => i / d * c.width);
        let a = 0;
        for (let i = 0; i < r - 1; i++) {
            a += g[i];
            const o = E("div", "gutter gutter-v");
            o.style.left = `${a}px`, o.style.height = "100%", o.dataset.index = i, t.appendChild(o), pt(o, "v")
        }
    }
    if (e > 1) {
        const g = n.layout.rowFractions.map(i => i / s * c.height);
        let a = 0;
        for (let i = 0; i < e - 1; i++) {
            a += g[i];
            const o = E("div", "gutter gutter-h");
            o.style.top = `${a}px`, o.style.width = "100%", o.dataset.index = i, t.appendChild(o), pt(o, "h")
        }
    }
}

function pt(t, e) {
    t.onmousedown = function(r) {
        r.preventDefault();
        const c = h.layoutGrid,
            s = parseInt(t.dataset.index),
            d = c.getBoundingClientRect(),
            g = function(i) {
                if (e === "v") {
                    const o = n.layout.colFractions[s] + n.layout.colFractions[s + 1],
                        l = n.layout.colFractions.slice(0, s).reduce((u, b) => u + b / n.layout.colFractions.reduce((w, S) => w + S, 0) * d.width, 0);
                    let f = (i.clientX - d.left - l) / d.width * n.layout.colFractions.reduce((u, b) => u + b, 0);
                    f < .1 && (f = .1);
                    let p = o - f;
                    p < .1 && (p = .1, f = o - .1), n.layout.colFractions[s] = f, n.layout.colFractions[s + 1] = p, c.style.gridTemplateColumns = n.layout.colFractions.map(u => `${u}fr`).join(" ")
                } else {
                    const o = n.layout.rowFractions[s] + n.layout.rowFractions[s + 1],
                        l = n.layout.rowFractions.slice(0, s).reduce((u, b) => u + b / n.layout.rowFractions.reduce((w, S) => w + S, 0) * d.height, 0);
                    let f = (i.clientY - d.top - l) / d.height * n.layout.rowFractions.reduce((u, b) => u + b, 0);
                    f < .1 && (f = .1);
                    let p = o - f;
                    p < .1 && (p = .1, f = o - .1), n.layout.rowFractions[s] = f, n.layout.rowFractions[s + 1] = p, c.style.gridTemplateRows = n.layout.rowFractions.map(u => `${u}fr`).join(" ")
                }
            },
            a = function() {
                document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", a), setTimeout(it, 50)
            };
        document.addEventListener("mousemove", g), document.addEventListener("mouseup", a)
    }
}
const ye = Object.freeze(Object.defineProperty({
    __proto__: null,
    createGutters: it
}, Symbol.toStringTag, {
    value: "Module"
}));

function ve() {
    h.layoutControls.classList.remove("hidden"), h.canvasSettings.classList.remove("hidden"), h.borderControls.classList.remove("hidden"), h.layoutWrapper.classList.remove("hidden"), h.canvasHint.classList.remove("hidden")
}

function be() {
    h.layoutControls.classList.add("hidden"), h.canvasSettings.classList.add("hidden"), h.layoutWrapper.classList.add("hidden"), h.canvasHint.classList.add("hidden")
}

function kt() {
    const t = h.layoutGrid;
    t.innerHTML = "";
    const e = n.layout.layoutDef;
    if (!e) return;
    const [r, c] = e.gr;
    n.layout.rowFractions = Array(r).fill(1), n.layout.colFractions = Array(c).fill(1), t.style.gridTemplateRows = n.layout.rowFractions.map(i => `${i}fr`).join(" "), t.style.gridTemplateColumns = n.layout.colFractions.map(i => `${i}fr`).join(" ");
    const s = e.c || Array.from({
            length: r * c
        }, () => ({
            r: 1,
            c: 1
        })),
        d = {
            ...n.layout.imagesData
        },
        g = {};
    s.forEach((i, o) => {
        const l = `cell-${o}`,
            m = Le(l);
        if (m.style.gridRowEnd = `span ${i.r}`, m.style.gridColumnEnd = `span ${i.c}`, i.s && (m.style.gridRowStart = i.s[0], m.style.gridColumnStart = i.s[1]), t.appendChild(m), d[l]) {
            g[l] = d[l];
            const f = g[l];
            z(l, f)
        }
    }), n.layout.imagesData = g;
    const a = h.layoutGrid;
    n.layout.texts.forEach(i => ct(i, a)), n.layout.arrows.forEach(i => ot(i, a)), n.layout.rectangles.forEach(i => Y(i, a)), n.layout.ellipses.forEach(i => Y(i, a)), Bt(), setTimeout(it, 100)
}

function st(t, e = null) {
    var a;
    const r = Array.from(t).filter(i => i.type.startsWith("image/"));
    if (r.length === 0) {
        k("未选择有效的图片文件", "error");
        return
    }
    const c = (i, o) => {
            const l = new FileReader;
            l.onload = m => {
                const f = m.target.result,
                    p = new Image;
                p.onload = () => {
                    const u = {
                        src: f,
                        position: "50% 50%",
                        scale: 1,
                        width: p.naturalWidth,
                        height: p.naturalHeight
                    };
                    n.layout.imagesData[o] = u, z(o, u)
                }, p.src = f
            }, l.readAsDataURL(i)
        },
        s = [];
    e && s.push(e), Array.from(document.querySelectorAll("#layout-grid .grid-cell")).map(i => i.id).forEach(i => {
        i !== e && (!n.layout.imagesData[i] || !n.layout.imagesData[i].src) && s.push(i)
    });
    const g = e && ((a = n.layout.imagesData[e]) == null ? void 0 : a.src);
    if (s.length > 0) {
        const i = Math.min(r.length, s.length);
        k(`正在上传 ${i} 张图片...`, "info");
        let o = 0;
        for (let l = 0; l < i; l++) c(r[l], s[l]), o++;
        setTimeout(() => {
            const l = `成功上传 ${o} 张图片。` + (r.length > o ? ` 已忽略 ${r.length-o} 张。` : "");
            k(l, "success"), W()
        }, 500)
    } else g ? (k("画布已满，将替换当前图片。", "info"), c(r[0], e)) : k("没有空的格子可以放置图片", "error")
}

function we() {
    const t = Object.entries(n.layout.imagesData);
    if (t.length < 2) return;
    const e = t.map(r => r[1]);
    for (let r = e.length - 1; r > 0; r--) {
        const c = Math.floor(Math.random() * (r + 1));
        [e[r], e[c]] = [e[c], e[r]]
    }
    t.forEach(([r], c) => {
        n.layout.imagesData[r] = e[c], z(r, e[c])
    }), k("图片已随机排序", "info")
}

function Bt() {
    const {
        spacing: t,
        radius: e
    } = n.shared, r = h.layoutGrid;
    r.style.gap = `${t}px`, r.querySelectorAll(".grid-cell").forEach(c => {
        c.style.borderRadius = `${e}px`
    })
}

function Ee() {
    const e = h.layoutWrapper,
        r = e.offsetWidth;
    if (!r) return {
        element: document.createElement("div"),
        options: {},
        cleanup: () => {}
    };
    const c = Math.max(1, 1600 / r),
        s = r * c,
        d = window.getComputedStyle(e),
        g = parseFloat(d.width) / parseFloat(d.height),
        a = s / g,
        i = document.createElement("div");
    Object.assign(i.style, {
        position: "absolute",
        top: "-9999px",
        left: "-9999px",
        width: `${s}px`,
        height: `${a}px`
    });
    const o = e.cloneNode(!0),
        l = o.querySelector("#layout-grid");
    l.querySelectorAll(".text-element-container, .arrow-container, .shape-container").forEach(y => y.remove()), o.style.boxSizing = "border-box", o.style.width = `${s}px`, o.style.height = `${a}px`, o.style.backgroundColor = n.shared.bgColor, o.style.backgroundImage = n.shared.backgroundImage ? `url(${n.shared.backgroundImage})` : "none", o.style.backgroundSize = "cover", o.style.backgroundPosition = "center";
    const m = n.shared.borderWidths || {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    if (o.style.paddingTop = `${m.top*c}px`, o.style.paddingRight = `${m.right*c}px`, o.style.paddingBottom = `${m.bottom*c}px`, o.style.paddingLeft = `${m.left*c}px`, l) {
        l.style.boxSizing = "border-box";
        const {
            spacing: y,
            radius: v
        } = n.shared, L = y * c, x = v * c;
        l.style.gap = `${L}px`, l.style.display = "grid", l.style.gridTemplateRows = n.layout.rowFractions.map(I => `${I}fr`).join(" "), l.style.gridTemplateColumns = n.layout.colFractions.map(I => `${I}fr`).join(" "), l.querySelectorAll(".grid-cell").forEach(I => {
            I.style.borderRadius = `${x}px`
        })
    }
    const f = parseFloat(o.style.paddingLeft) || 0,
        p = parseFloat(o.style.paddingRight) || 0,
        u = parseFloat(o.style.paddingTop) || 0,
        b = parseFloat(o.style.paddingBottom) || 0,
        w = {
            width: s - f - p,
            height: a - u - b
        };
    return n.layout.texts.forEach(y => ct({
        ...y,
        fontSize: y.fontSize * c
    }, l)), n.layout.arrows.forEach(y => ot({
        ...y,
        strokeWidth: y.strokeWidth * c
    }, l, w)), n.layout.rectangles.forEach(y => Y({
        ...y,
        strokeWidth: y.strokeWidth * c
    }, l)), n.layout.ellipses.forEach(y => Y({
        ...y,
        strokeWidth: y.strokeWidth * c
    }, l)), i.appendChild(o), document.body.appendChild(i), {
        element: o,
        options: {
            useCORS: !0,
            backgroundColor: null,
            scale: 2
        },
        cleanup: () => {
            i.parentNode === document.body ? document.body.removeChild(i) : console.warn("Cleanup skipped: tempContainer was not a direct child of body.")
        }
    }
}

function Pt(t) {
    var e, r;
    t !== n.layout.currentLayoutId && ((e = h.layoutContainer.querySelector(".active")) == null || e.classList.remove("active"), (r = h.layoutContainer.querySelector(`[data-layout="${t}"]`)) == null || r.classList.add("active"), At(t), kt())
}

function $t(t, e) {
    if (!e) return;
    const r = n.layout.imagesData[t] ? {
            ...n.layout.imagesData[t]
        } : null,
        c = n.layout.imagesData[e] ? {
            ...n.layout.imagesData[e]
        } : null;
    r && (r.position = "50% 50%", r.scale = 1), c && (c.position = "50% 50%", c.scale = 1), n.layout.imagesData[t] = c, c ? z(t, c) : (delete n.layout.imagesData[t], tt(t)), n.layout.imagesData[e] = r, r ? z(e, r) : (delete n.layout.imagesData[e], tt(e))
}

function Mt(t) {
    !t || t.length === 0 || (console.log(`Pasting ${t.length} image(s) into layout mode.`), st(t, null))
}

function Le(t) {
    const e = E("div", "grid-cell");
    e.id = t;
    const r = E("input");
    r.type = "file", r.accept = "image/*", r.id = `input-${t}`, r.multiple = !0, r.className = "hidden-file-input", r.onchange = p => {
        p.target.files.length > 0 && st(p.target.files, t), p.target.value = null
    };
    const c = E("div", "upload-icon-container");
    c.innerHTML = H.upload;
    const s = E("div", "cell-button-container"),
        d = E("div", "cell-icon-btn pan-toggle-btn");
    d.innerHTML = H.pan, d.title = "切换平移/拖拽模式";
    const g = E("div", "cell-icon-btn zoom-in-btn");
    g.innerHTML = H.zoomIn, g.title = "放大";
    const a = E("div", "cell-icon-btn zoom-out-btn");
    a.innerHTML = H.zoomOut, a.title = "缩小";
    const i = E("div", "cell-icon-btn reset-btn");
    i.innerHTML = H.zoomReset, i.title = "还原";
    const o = E("div", "cell-icon-btn replace-btn");
    o.innerHTML = H.replace, o.title = "替换图片";
    const l = E("div", "cell-icon-btn remove-btn");
    l.innerHTML = H.remove, l.title = "删除图片";
    const m = (p, u) => {
        const b = w => {
            w.stopPropagation(), w.type === "touchend" && w.preventDefault(), u()
        };
        p.addEventListener("click", b), p.addEventListener("touchend", b)
    };
    m(d, () => me(t)), m(g, () => {
        A(t), ge()
    }), m(a, () => {
        A(t), ue()
    }), m(i, () => pe(t)), m(o, () => r.click()), m(l, () => de(t)), s.append(d, o, l, g, a, i), e.append(c, r, s), e.addEventListener("wheel", p => {
        var y;
        if (e.id !== n.layout.activeCellId || !e.classList.contains("has-image")) return;
        p.preventDefault(), p.stopPropagation();
        const u = ((y = n.layout.imagesData[e.id]) == null ? void 0 : y.scale) || 1,
            b = .1,
            w = p.deltaY < 0 ? 1 : -1,
            S = u + w * b;
        J(S)
    }, {
        passive: !1
    });
    const f = {
        isPinching: !1,
        initialDistance: 0,
        initialScale: 1
    };
    return e.addEventListener("touchstart", p => {
        var u;
        p.touches.length === 2 && e.id === n.layout.activeCellId && (p.preventDefault(), f.isPinching = !0, f.initialDistance = Math.hypot(p.touches[0].pageX - p.touches[1].pageX, p.touches[0].pageY - p.touches[1].pageY), f.initialScale = ((u = n.layout.imagesData[e.id]) == null ? void 0 : u.scale) || 1)
    }, {
        passive: !1
    }), e.addEventListener("touchmove", p => {
        if (f.isPinching && p.touches.length === 2) {
            p.preventDefault();
            const b = Math.hypot(p.touches[0].pageX - p.touches[1].pageX, p.touches[0].pageY - p.touches[1].pageY) / f.initialDistance,
                w = f.initialScale * b,
                S = Math.max(1, Math.min(w, 5));
            e.style.backgroundSize = `${S*100}%`
        }
    }, {
        passive: !1
    }), e.addEventListener("touchend", p => {
        if (f.isPinching) {
            const u = parseFloat(e.style.backgroundSize) / 100;
            J(u), f.isPinching = !1, f.initialDistance = 0, f.initialScale = 1
        }
    }), e
}
const xe = Object.freeze(Object.defineProperty({
        __proto__: null,
        activate: ve,
        applySharedStyles: Bt,
        deactivate: be,
        getDownloadOptions: Ee,
        handlePastedFiles: Mt,
        processFiles: st,
        render: kt,
        selectNewLayout: Pt,
        shuffle: we,
        swapImages: $t
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Se = {
        layout: xe,
        stitching: qt
    };
let D = null;

function B() {
    return D
}

function nt(t) {
    n.currentMode === t && D || (D && D.deactivate(), n.currentMode = t, D = Se[t], D.activate(), h.layoutModeBtn.classList.toggle("active", t === "layout"), h.stitchingModeBtn.classList.toggle("active", t === "stitching"), Ie(), W())
}

function Ie() {
    D && D.render()
}

function Ce(t) {
    var c;
    const e = (c = t.clipboardData) == null ? void 0 : c.items;
    if (!e) return;
    const r = [];
    for (const s of e)
        if (s.kind === "file" && s.type.startsWith("image/")) {
            const d = s.getAsFile();
            d && r.push(d)
        } if (r.length > 0) switch (t.preventDefault(), console.log(`Pasted ${r.length} image(s) from clipboard!`), n.currentMode) {
        case "layout":
            Mt(r);
            break;
        case "stitching":
            Et(r);
            break;
        default:
            console.warn("Pasted image but no active mode is set to handle it.")
    }
}

function ke() {
    window.addEventListener("paste", Ce), console.log("Global paste listener initialized (simple & reliable version).")
}
let ht;

function k(t, e = "info", r = 3e3) {
    const c = document.getElementById("toast");
    c && (clearTimeout(ht), c.textContent = t, c.className = "toast", c.classList.add(e), c.classList.add("show"), ht = setTimeout(() => {
        c.classList.remove("show")
    }, r))
}
const V = t => {
    const e = parseInt(t.value, 10);
    return isNaN(e) || e < 0 ? 0 : e
};

function T() {
    var l;
    const t = h.spacingSlider.value,
        e = h.radiusSlider.value,
        r = h.colorPicker.value,
        c = V(h.borderTopInput),
        s = V(h.borderRightInput),
        d = V(h.borderBottomInput),
        g = V(h.borderLeftInput);
    n.shared.spacing = t, n.shared.radius = e, n.shared.bgColor = r, n.shared.borderWidths = {
        top: c,
        right: s,
        bottom: d,
        left: g
    }, h.spacingValue.textContent = t, h.radiusValue.textContent = e;
    const a = h.layoutWrapper;
    n.shared.backgroundImage ? (a.style.backgroundImage = `url(${n.shared.backgroundImage})`, a.style.backgroundSize = "cover", a.style.backgroundPosition = "center") : (a.style.backgroundImage = "none", a.style.backgroundColor = n.shared.bgColor), a.style.paddingTop = `${n.shared.borderWidths.top}px`, a.style.paddingRight = `${n.shared.borderWidths.right}px`, a.style.paddingBottom = `${n.shared.borderWidths.bottom}px`, a.style.paddingLeft = `${n.shared.borderWidths.left}px`;
    const i = h.stitchingWrapper,
        o = h.stitchingGrid;
    n.shared.backgroundImage ? (i.style.backgroundImage = `url(${n.shared.backgroundImage})`, i.style.backgroundSize = "cover", i.style.backgroundPosition = "center") : (i.style.backgroundImage = "none", i.style.backgroundColor = n.shared.bgColor), i.style.padding = "0", o.style.paddingTop = `${n.shared.borderWidths.top}px`, o.style.paddingRight = `${n.shared.borderWidths.right}px`, o.style.paddingBottom = `${n.shared.borderWidths.bottom}px`, o.style.paddingLeft = `${n.shared.borderWidths.left}px`, (l = B()) == null || l.applySharedStyles(), n.currentMode === "stitching" && requestAnimationFrame(() => {
        const m = B();
        m && typeof m.updateLayout == "function" && m.updateLayout()
    })
}

function z(t, e) {
    const r = document.getElementById(t);
    if (!r || !e || !e.src) return;
    r.style.backgroundImage = `url('${e.src}')`, r.style.backgroundPosition = e.position, r.classList.add("has-image");
    const c = r.querySelector(".upload-icon-container");
    c && (c.style.display = "none");
    const s = r.clientWidth,
        d = r.clientHeight;
    if (!e.width || !e.height || !s || !d) {
        r.style.backgroundSize = "cover";
        return
    }
    const g = s / d,
        a = e.width / e.height,
        i = e.scale || 1;
    let o;
    a > g ? o = `auto ${i*100}%` : o = `${i*100}% auto`, r.style.backgroundSize = o
}

function tt(t) {
    const e = document.getElementById(t);
    if (!e) return;
    e.style.backgroundImage = "none", e.classList.remove("has-image");
    const r = e.querySelector(".upload-icon-container");
    r && (r.style.display = "flex")
}

function W() {
    let t = 0;
    n.currentMode === "layout" ? t = Object.keys(n.layout.imagesData).length : t = n.stitching.images.length, h.shuffleBtn.disabled = t < 2
}

function at() {
    const t = document.getElementById("center-content"),
        e = document.getElementById("layout-wrapper"),
        r = document.getElementById("aspect-ratio-btns"),
        c = document.getElementById("canvas-action-toolbar");
    if (!t || !e || !r || !c) {
        console.error("无法找到布局容器或工具栏元素，计算中止。");
        return
    }
    const s = window.getComputedStyle(t),
        d = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
        g = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom),
        a = t.clientWidth - d;
    let i = t.clientHeight - g;
    const o = window.getComputedStyle(c),
        l = c.offsetHeight + parseFloat(o.marginBottom);
    i -= l;
    const m = r.querySelector(".active");
    if (!m) return;
    const f = m.dataset.ratio.split("/"),
        p = parseFloat(f[0]) / parseFloat(f[1]);
    let u, b;
    a / i > p ? (b = i, u = b * p) : (u = a, b = u / p), e.style.width = `${u}px`, e.style.height = `${b}px`, c.style.width = `${u}px`
}
const Be = Object.freeze(Object.defineProperty({
    __proto__: null,
    applyCanvasStyles: T,
    applyImageToCell: z,
    clearImageFromCell: tt,
    showToast: k,
    updateCanvasSize: at,
    updateShuffleButton: W
}, Symbol.toStringTag, {
    value: "Module"
}));

function Pe() {
    h.layoutContainer.innerHTML = "";
    const t = {};
    for (const e in Z) {
        const r = Z[e];
        t[r.g] || (t[r.g] = []), t[r.g].push({
            id: e,
            ...r
        })
    }
    Object.keys(t).sort((e, r) => e - r).forEach(e => {
        const r = E("h4", "layout-group-title");
        r.textContent = `${e} 张图片`, h.layoutContainer.appendChild(r);
        const c = E("div", "layout-thumbnail-grid");
        t[e].forEach(s => {
            const d = $e(s.id, s);
            s.id === n.layout.currentLayoutId && d.classList.add("active"), c.appendChild(d)
        }), h.layoutContainer.appendChild(c)
    })
}

function $e(t, e) {
    const r = E("div", "layout-thumbnail");
    r.dataset.layout = t;
    const c = E("div", "thumbnail-grid");
    return c.style.gridTemplateColumns = `repeat(${e.gr[1]}, 1fr)`, c.style.gridTemplateRows = `repeat(${e.gr[0]}, 1fr)`, (e.c || Array.from({
        length: e.gr[0] * e.gr[1]
    }, () => ({
        r: 1,
        c: 1
    }))).forEach(d => {
        const g = E("div", "thumbnail-cell");
        g.style.gridRowEnd = `span ${d.r}`, g.style.gridColumnEnd = `span ${d.c}`, d.s && (g.style.gridRowStart = d.s[0], g.style.gridColumnStart = d.s[1]), c.appendChild(g)
    }), r.appendChild(c), r
}

function Me() {
    h.layoutModeBtn.addEventListener("click", () => nt("layout")), h.stitchingModeBtn.addEventListener("click", () => nt("stitching")), h.stitchingUploadBtn.addEventListener("click", () => h.stitchingUploadInput.click()), h.stitchingUploadInput.addEventListener("change", o => {
        Kt(o.target.files), o.target.value = null
    }), h.stitchingDirectionBtns.addEventListener("click", o => {
        const l = o.target.closest("button");
        l && Vt(l.dataset.direction)
    }), h.layoutContainer.addEventListener("click", o => {
        const l = o.target.closest(".layout-thumbnail");
        l && (Nt(l.dataset.layout), document.getElementById("left-sidebar").classList.contains("is-open") && document.getElementById("mobile-overlay").click())
    }), h.aspectRatioBtns.addEventListener("click", o => {
        const l = o.target.closest("button");
        l && Ut(l)
    }), h.spacingSlider.addEventListener("input", T), h.radiusSlider.addEventListener("input", T), h.borderTopInput.addEventListener("input", T), h.borderRightInput.addEventListener("input", T), h.borderBottomInput.addEventListener("input", T), h.borderLeftInput.addEventListener("input", T), h.colorPicker.addEventListener("input", T), h.downloadBtn.addEventListener("click", Gt);
    const t = document.getElementById("bg-upload-input");
    document.getElementById("upload-bg-btn").addEventListener("click", () => t.click()), t.addEventListener("change", o => {
        o.target.files && o.target.files[0] && Jt(o.target.files[0]), o.target.value = null
    }), document.getElementById("remove-bg-btn").addEventListener("click", te), document.getElementById("add-text-btn").addEventListener("click", ee), document.getElementById("add-arrow-btn").addEventListener("click", ne), document.getElementById("add-rectangle-btn").addEventListener("click", ce), document.getElementById("add-ellipse-btn").addEventListener("click", ie), document.getElementById("shuffle-btn").addEventListener("click", _t), document.getElementById("clear-canvas-btn").addEventListener("click", fe);
    let e;
    window.addEventListener("resize", () => {
        clearTimeout(e), e = setTimeout(() => {
            n.currentMode === "layout" && (gt(async () => {
                const {
                    updateCanvasSize: o
                } = await Promise.resolve().then(() => Be);
                return {
                    updateCanvasSize: o
                }
            }, void 0).then(({
                updateCanvasSize: o
            }) => o()), gt(async () => {
                const {
                    createGutters: o
                } = await Promise.resolve().then(() => ye);
                return {
                    createGutters: o
                }
            }, void 0).then(({
                createGutters: o
            }) => o()))
        }, 150)
    });
    const r = document.getElementById("left-sidebar"),
        c = document.getElementById("right-sidebar"),
        s = document.getElementById("mobile-overlay"),
        d = () => {
            r.classList.remove("is-open"), c.classList.remove("is-open"), s.classList.add("hidden"), document.body.classList.remove("sidebar-open")
        };
    document.getElementById("toggle-left-sidebar").addEventListener("click", o => {
        o.stopPropagation(), r.classList.toggle("is-open") ? (c.classList.remove("is-open"), s.classList.remove("hidden"), document.body.classList.add("sidebar-open")) : d()
    }), document.getElementById("toggle-right-sidebar").addEventListener("click", o => {
        o.stopPropagation(), c.classList.toggle("is-open") ? (r.classList.remove("is-open"), s.classList.remove("hidden"), document.body.classList.add("sidebar-open")) : d()
    }), s.addEventListener("click", d);
    const g = document.getElementById("app-container");
    document.getElementById("pc-toggle-left").addEventListener("click", () => g.classList.toggle("left-sidebar-collapsed")), document.getElementById("pc-toggle-right").addEventListener("click", () => g.classList.toggle("right-sidebar-collapsed")), document.getElementById("stitching-placeholder").addEventListener("click", () => h.stitchingUploadInput.click()), Te(), document.addEventListener("click", o => {
        const l = o.target,
            m = l.closest(".grid-cell, .text-element-container, .arrow-container, .shape-container"),
            f = l.closest("#right-sidebar"),
            p = l.closest("#canvas-action-toolbar"),
            u = document.querySelector(".grid-cell.is-panning-touch");
        u && (l.closest(".pan-toggle-btn") && u.contains(l) || he()), !(m || f || p) && (A(null), F(null), R(null), j(null), q(null))
    }), document.addEventListener("keydown", o => {
        const l = o.target;
        if (!(l.isContentEditable || l.tagName === "INPUT" || l.tagName === "TEXTAREA")) {
            if (o.key === "Delete" || o.key === "Backspace") {
                o.preventDefault(), n.shared.selectedTextId ? Lt() : n.shared.selectedArrowId ? xt() : n.shared.selectedRectangleId ? St() : n.shared.selectedEllipseId && It();
                return
            }
            if (n.currentMode === "layout" && n.layout.activeCellId) {
                let f = 0,
                    p = 0;
                switch (o.key) {
                    case "ArrowUp":
                        p = -1.5;
                        break;
                    case "ArrowDown":
                        p = 1.5;
                        break;
                    case "ArrowLeft":
                        f = -1.5;
                        break;
                    case "ArrowRight":
                        f = 1.5;
                        break;
                    default:
                        return
                }
                o.preventDefault(), le(f, p)
            }
        }
    });
    const a = document.getElementById("layout-wrapper"),
        i = document.getElementById("canvas-hint");
    a && i && (a.addEventListener("mouseenter", () => {
        n.currentMode === "layout" && i.classList.add("is-visible")
    }), a.addEventListener("mouseleave", () => {
        i.classList.remove("is-visible")
    }))
}

function Te() {
    const t = document.getElementById("layout-grid");
    if (!t) return;
    let e = {};
    const r = () => {
            if (e.isPanning && e.activeCell.classList.remove("is-panning"), e.isDragging) {
                e.startCell.classList.remove("dragging");
                const a = document.querySelector(".grid-cell.drag-over");
                a && a.classList.remove("drag-over")
            }
            e = {}, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", g), document.removeEventListener("touchmove", d, {
                passive: !1
            }), document.removeEventListener("touchend", g)
        },
        c = (a, i) => {
            if (typeof a != "string") return 50;
            const o = a.trim();
            if (o.endsWith("%")) return parseFloat(o);
            if (o.endsWith("px")) return parseFloat(o) / i * 100;
            switch (o) {
                case "top":
                case "left":
                    return 0;
                case "bottom":
                case "right":
                    return 100;
                case "center":
                    return 50
            }
            return 50
        },
        s = a => {
            if (a.target.isContentEditable || a.target.closest(".text-element-container, .arrow-container, .shape-container")) return;
            const i = a.touches ? a.touches[0] : a,
                o = i.target.closest(".grid-cell");
            o && (a.type === "touchstart" && a.preventDefault(), r(), e.isMouseDown = !0, e.startCell = o, e.startX = i.clientX, e.startY = i.clientY, document.addEventListener("mousemove", d), document.addEventListener("mouseup", g), document.addEventListener("touchmove", d, {
                passive: !1
            }), document.addEventListener("touchend", g))
        },
        d = a => {
            var o, l;
            if (!e.isMouseDown) return;
            a.type === "touchmove" && a.preventDefault();
            const i = a.touches ? a.touches[0] : a;
            if (e.isPanning) {
                const m = e.activeCell.getBoundingClientRect(),
                    f = (i.clientX - e.startX) / m.width * 100,
                    p = (i.clientY - e.startY) / m.height * 100;
                let u = e.startBgPercentX - f,
                    b = e.startBgPercentY - p;
                e.activeCell.style.backgroundPosition = `${u}% ${b}%`;
                return
            }
            if (e.isDragging) {
                const m = (o = document.elementFromPoint(i.clientX, i.clientY)) == null ? void 0 : o.closest(".grid-cell"),
                    f = document.querySelector(".grid-cell.drag-over");
                m !== f && (f && f.classList.remove("drag-over"), m && m !== e.startCell && m.classList.add("drag-over"));
                return
            }
            if (!e.hasMoved && (Math.abs(i.clientX - e.startX) > 5 || Math.abs(i.clientY - e.startY) > 5))
                if (e.hasMoved = !0, (a.altKey || e.startCell.classList.contains("is-panning-touch")) && e.startCell.classList.contains("has-image")) {
                    e.isPanning = !0, e.activeCell = e.startCell, e.activeCell.classList.add("is-panning");
                    const m = e.activeCell.id,
                        p = (((l = n.layout.imagesData[m]) == null ? void 0 : l.position) || "50% 50%").split(" "),
                        u = e.activeCell.getBoundingClientRect();
                    e.startBgPercentX = c(p[0], u.width), e.startBgPercentY = c(p.length > 1 ? p[1] : p[0], u.height)
                } else e.startCell.classList.contains("has-image") && (e.isDragging = !0, e.startCell.classList.add("dragging"))
        },
        g = a => {
            var o;
            if (!e.isMouseDown) return;
            const i = a.changedTouches ? a.changedTouches[0] : a;
            if (e.isPanning) {
                const l = e.activeCell.id;
                n.layout.imagesData[l] && (n.layout.imagesData[l].position = e.activeCell.style.backgroundPosition)
            } else if (e.isDragging) {
                const l = (o = document.elementFromPoint(i.clientX, i.clientY)) == null ? void 0 : o.closest(".grid-cell");
                l && l !== e.startCell && $t(e.startCell.id, l.id)
            } else if (!e.hasMoved)
                if (e.startCell.classList.contains("has-image")) A(e.startCell.id);
                else {
                    const l = e.startCell.querySelector('input[type="file"]');
                    l && l.click()
                } r()
        };
    t.addEventListener("mousedown", s), t.addEventListener("touchstart", s, {
        passive: !1
    })
}

function Re() {
    var c;
    const t = document.getElementById("quality-selector");
    if (!t) return;
    const e = n.shared.downloadQuality,
        r = t.querySelector(`[data-quality="${e}"]`);
    r && ((c = t.querySelector(".active")) == null || c.classList.remove("active"), r.classList.add("active")), t.addEventListener("click", s => {
        var g;
        const d = s.target.closest("button");
        !d || !d.dataset.quality || ((g = t.querySelector(".active")) == null || g.classList.remove("active"), d.classList.add("active"), Yt(d.dataset.quality))
    })
}

function Fe() {
    if (navigator.userAgent.toLowerCase().includes("micromessenger")) {
        const r = document.getElementById("wechat-overlay");
        r && r.classList.remove("hidden")
    }
}

function Ae() {
    const t = navigator.userAgent,
        e = navigator.platform;
    (/iPad/.test(t) || e === "MacIntel" && navigator.maxTouchPoints > 1) && (document.body.classList.add("is-ipad"), console.log("iPad device detected. Applying specific fixes."))
}

function We() {
    Ae(), Fe(), Ft(), Pe(), Me(), nt("layout");
    const t = h.aspectRatioBtns.querySelector('[data-ratio="1/1"]');
    t && t.classList.add("active"), T(), at(), W(), Re(), ke(), console.log("%c 免费在线拼图工具 %c by PIC.NET ", "background: #0052cc; color: #fff; padding: 5px; border-radius: 5px 0 0 5px;", "background: #f4f5f7; color: #42526e; padding: 5px; border-radius: 0 5px 5px 0;"), console.log("感谢使用！如果您对这个工具有任何建议，欢迎联系我们。访问PIC.NET免费体验更多在线图片处理工具")
}
document.addEventListener("DOMContentLoaded", We);