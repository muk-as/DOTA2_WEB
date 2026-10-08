// 48738.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [48738],
    {
      48738: (P, g, e) => {
        "use strict";
        e.r(g), e.d(g, { COMIC_LANGUAGE: () => M, default: () => m });
        var r = e(69500),
          D = e(7166),
          O = e(2095),
          d = e(57693),
          v = e(3878),
          l = e(7552),
          I = e(73202),
          E = e(15001),
          p = e(88351),
          T = e(63177),
          B = e(42616),
          w = e(45237),
          U = e(11778),
          x = e(77220),
          _ = e.n(x),
          K = e(85286),
          j = e.n(K),
          L = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          N = (s, t, a, i) => {
            for (
              var o = i > 1 ? void 0 : i ? R(t, a) : t, h = s.length - 1, A;
              h >= 0;
              h--
            )
              (A = s[h]) && (o = (i ? A(t, a, o) : A(o)) || o);
            return i && o && L(t, a, o), o;
          };
        const S = "CrownfallComic",
          M = (() => {
            switch (O.r.LANGUAGE) {
              case "brazilian":
                return "brazilian";
              case "bulgarian":
                return "bulgarian";
              case "czech":
                return "czech";
              case "danish":
                return "danish";
              case "dutch":
                return "dutch";
              case "english":
                return "english";
              case "finnish":
                return "finnish";
              case "french":
                return "french";
              case "german":
                return "german";
              case "greek":
                return "greek";
              case "hungarian":
                return "hungarian";
              case "italian":
                return "italian";
              case "japanese":
                return "japanese";
              case "koreana":
                return "koreana";
              case "latam":
                return "latam";
              case "norwegian":
                return "norwegian";
              case "polish":
                return "polish";
              case "portuguese":
                return "portuguese";
              case "romanian":
                return "romanian";
              case "russian":
                return "russian";
              case "schinese":
                return "schinese";
              case "spanish":
                return "spanish";
              case "swedish":
                return "swedish";
              case "tchinese":
                return "tchinese";
              case "thai":
                return "thai";
              case "turkish":
                return "turkish";
              case "ukrainian":
                return "ukrainian";
              case "vietnamese":
                return "vietnamese";
              default:
                return "english";
            }
          })(),
          W = ({ onIndexChanged: s, comicImageURLs: t }) => {
            const [a, i] = (0, l.useState)(void 0),
              [o, h] = (0, l.useState)(
                Array.from({ length: t.length }, () => new Image()),
              ),
              A = (0, p.zy)(),
              C = (0, l.useCallback)(() => {
                i((n) => {
                  if ((n === void 0 && (n = 0), n + 1 >= t.length)) return n;
                  const c = n + 1;
                  return window.history.pushState({}, "", `#p=${c}`), c;
                });
              }, [t]),
              y = (n) => {
                n.preventDefault(), C();
              };
            (0, l.useEffect)(() => {
              const n = (c) => {
                (c.code === "Space" || c.key === " ") &&
                  (c.preventDefault(), C());
              };
              return (
                window.addEventListener("keydown", n),
                () => window.removeEventListener("keydown", n)
              );
            }, [C]),
              (0, l.useEffect)(() => {
                let n = 0;
                const u = new URLSearchParams(A.hash.substring(1)).get("p");
                u !== null && (n = parseInt(u)), i(n);
              }, [A]),
              (0, l.useEffect)(() => {
                if (a === void 0) return;
                const n = 5;
                for (let c = 1; c <= n; c++) {
                  const u = a + c;
                  if (u >= t.length) break;
                  let f = o;
                  f[u].src || ((f[u].src = t[u]), h(f));
                }
              }, [a, o, t]),
              (0, l.useEffect)(() => {
                s?.(a);
              }, [s, a]);
            const V = !a,
              b = a + 1 >= t.length;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: _().ComicViewer,
                  children: (0, r.jsx)("img", {
                    src:
                      a !== void 0
                        ? t[a]
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                    onClick: y,
                    onMouseUp: (n) => {
                      n.button == 0 && n.preventDefault();
                    },
                  }),
                }),
                (0, r.jsx)("div", {
                  className: (0, E.A)(
                    _().ComicViewerHelpText,
                    b && _().Disabled,
                  ),
                  children: (0, d.we)("#crownfallcomic_help_text"),
                }),
                (0, r.jsx)(w.N_, {
                  className: (0, E.A)(_().ReturnLink, V && _().Disabled),
                  to: U.J.crownfall_comic(),
                  children: (0, d.we)("#crownfallcomic_return_button"),
                }),
              ],
            });
          };
        let m = class extends l.Component {
          constructor(s) {
            super(s);
            const t = new Map([
                ["act1_intro", { url: "comic_part1", pageCount: 119 }],
                ["act2_intro", { url: "act2_intro", pageCount: 33 }],
                ["act3_intro", { url: "act3_intro", pageCount: 29 }],
                ["act4_intro", { url: "act4_intro", pageCount: 29 }],
              ]),
              a = t.get(s.comic_id) || t.get("act1_intro");
            this.state = {
              pageTitlePattern: `#crownfallcomic_${s.comic_id}_title`,
              comicImageURLs: Array.from(Array(a.pageCount).keys()).map((i) => {
                const o = i.toString().padStart(3, "0");
                return `${D.TS.IMG_URL}crownfall/${a.url}/${M}/${o}.webp?v=2`;
              }),
            };
          }
          handleScroll = (s) => {
            j().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const s = (t) => {
              t
                ? (document.title = (0, d.we)(this.state.pageTitlePattern, t))
                : (document.title = (0, d.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, r.jsxs)("div", {
              id: S,
              className: _().CrownfallComic,
              children: [
                (0, r.jsx)(I.mg, {}),
                (0, r.jsxs)("div", {
                  className: (0, E.A)(_().PageContainer),
                  children: [
                    (0, r.jsx)(T.A, { bOverlapping: !0 }),
                    (0, r.jsx)("div", {
                      className: (0, E.A)(_().ComicContainer),
                      children: (0, r.jsx)(W, {
                        onIndexChanged: s,
                        comicImageURLs: this.state.comicImageURLs,
                      }),
                    }),
                    (0, r.jsx)(B.K, {}),
                  ],
                }),
              ],
            });
          }
        };
        m = N([v.PA], m);
      },
      77220: (P) => {
        P.exports = {
          Tooltip: "_3ftodS94U4BSByQqA6yPM3",
          CarouselFade: "_5Hvih9I3kDofNxu3dwmb",
          StandardButton: "XFpgiinpM6e9jeM3pSV8K",
          ButtonText: "_1FcqQ3tFKfmg4rZB5GCB9N",
          Icon: "_3SZ8HH83eYehib6V_lce_X",
          Play: "_3Z7BIEtGP_9tSMXv6BDYYt",
          SteamLogo: "_13r-O33AAKoLcUd0VkUvX-",
          ToolTip: "_77_o2bQQk4-IraBsX08qB",
          PlayerReportTooltip: "_3GKHMMUjyXW8myTN9NzpRb",
          CrownfallComic: "_2E4vTOY3IlTSIHuJT6aviH",
          ComicContainer: "_1vwVUO8OsR9NCJcEiq7fmp",
          ComicViewer: "_2-8uM-aRrxU0gCuJZE1w6A",
          ComicViewerHelpText: "oXazI0zD1bMxapi3SqMD1",
          Disabled: "_3iEFtpTgUj-wuPaEnjZ5QM",
          ReturnLink: "_3X6mBfDQxYcx_aIgdi4OK8",
        };
      },
    },
  ]);
})();
