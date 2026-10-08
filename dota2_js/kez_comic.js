// 96178.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [96178],
    {
      96178: (g, D, e) => {
        "use strict";
        e.r(D), e.d(D, { COMIC_LANGUAGE: () => M, default: () => m });
        var a = e(69500),
          O = e(7166),
          f = e(2095),
          E = e(57693),
          v = e(3878),
          l = e(7552),
          I = e(73202),
          d = e(15001),
          T = e(88351),
          p = e(63177),
          j = e(42616),
          K = e(45237),
          U = e(11778),
          B = e(96064),
          _ = e.n(B),
          L = e(85286),
          x = e.n(L),
          R = Object.defineProperty,
          w = Object.getOwnPropertyDescriptor,
          y = (o, t, s, c) => {
            for (
              var i = c > 1 ? void 0 : c ? w(t, s) : t, h = o.length - 1, u;
              h >= 0;
              h--
            )
              (u = o[h]) && (i = (c ? u(t, s, i) : u(i)) || i);
            return c && i && R(t, s, i), i;
          };
        const N = "KezComic",
          M = (() => {
            switch (f.r.LANGUAGE) {
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
                return "korean";
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
          W = ({ onIndexChanged: o, comicImageURLs: t }) => {
            const [s, c] = (0, l.useState)(void 0),
              [i, h] = (0, l.useState)(
                Array.from({ length: t.length }, () => new Image()),
              ),
              u = (0, T.zy)(),
              C = (0, l.useCallback)(() => {
                c((n) => {
                  if ((n === void 0 && (n = 0), n + 1 >= t.length)) return n;
                  const r = n + 1;
                  return window.history.pushState({}, "", `#p=${r}`), r;
                });
              }, [t]),
              S = (n) => {
                n.preventDefault(), C();
              };
            (0, l.useEffect)(() => {
              const n = (r) => {
                (r.code === "Space" || r.key === " ") &&
                  (r.preventDefault(), C());
              };
              return (
                window.addEventListener("keydown", n),
                () => window.removeEventListener("keydown", n)
              );
            }, [C]),
              (0, l.useEffect)(() => {
                let n = 0;
                const A = new URLSearchParams(u.hash.substring(1)).get("p");
                A !== null && (n = parseInt(A)), c(n);
              }, [u]),
              (0, l.useEffect)(() => {
                if (s === void 0) return;
                const n = 5;
                for (let r = 1; r <= n; r++) {
                  const A = s + r;
                  if (A >= t.length) break;
                  let P = i;
                  P[A].src || ((P[A].src = t[A]), h(P));
                }
              }, [s, i, t]),
              (0, l.useEffect)(() => {
                o?.(s);
              }, [o, s]);
            const z = !s,
              G = s + 1 >= t.length;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: _().ComicViewer,
                  children: (0, a.jsx)("img", {
                    src:
                      s !== void 0
                        ? t[s]
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                    onClick: S,
                    onMouseUp: (n) => {
                      n.button == 0 && n.preventDefault();
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: (0, d.A)(
                    _().ComicViewerHelpText,
                    G && _().Disabled,
                  ),
                  children: (0, E.we)("#comic_help_text"),
                }),
                (0, a.jsx)(K.N_, {
                  className: (0, d.A)(_().ReturnLink, z && _().Disabled),
                  to: U.J.kez_comic(),
                  children: (0, E.we)("#comic_return_button"),
                }),
              ],
            });
          };
        let m = class extends l.Component {
          constructor(o) {
            super(o);
            const t = 113;
            this.state = {
              pageTitlePattern: "#KezComic_title",
              comicImageURLs: Array.from(Array(t).keys()).map((s) => {
                const c = s.toString().padStart(3, "0");
                return `${O.TS.IMG_URL}crownfall/act4_ascension_night/${M}/${c}.webp`;
              }),
            };
          }
          handleScroll = (o) => {
            x().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const o = (t) => {
              t
                ? (document.title = (0, E.we)(this.state.pageTitlePattern, t))
                : (document.title = (0, E.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, a.jsxs)("div", {
              id: N,
              className: _().KezComic,
              children: [
                (0, a.jsx)(I.mg, {}),
                (0, a.jsxs)("div", {
                  className: (0, d.A)(_().PageContainer),
                  children: [
                    (0, a.jsx)(p.A, { bOverlapping: !0 }),
                    (0, a.jsx)("div", {
                      className: (0, d.A)(_().ComicContainer),
                      children: (0, a.jsx)(W, {
                        onIndexChanged: o,
                        comicImageURLs: this.state.comicImageURLs,
                      }),
                    }),
                    (0, a.jsx)(j.K, {}),
                  ],
                }),
              ],
            });
          }
        };
        m = y([v.PA], m);
      },
      96064: (g) => {
        g.exports = {
          Tooltip: "verddY_FCUBJV0GVa0t8I",
          CarouselFade: "_1xD8bMi-sxL3Hsugl9XFNY",
          StandardButton: "_2grS5PgHIsBarAF-HoRJ-7",
          ButtonText: "Z3oMX4nb5Bv4wycOyeXP8",
          Icon: "_3OMnQMh_TrrBrElxN1a4-o",
          Play: "_2Dy4vF_DU3JDElckdjyAjX",
          SteamLogo: "_1swK-VJUyeLO8eRmmpYnLE",
          ToolTip: "_2prRMkSIXtosZQiXg0CM0F",
          PlayerReportTooltip: "_6tAhjVEyTqTjiEAAEFT4b",
          KezComic: "_3pPzIJKUt9-7A4NLKGj8FW",
          ComicContainer: "_1P7T-pj7MtAg-P_MsIgQSu",
          ComicViewer: "_3y9QGrEgTjfPsTiqGjdXqD",
          ComicViewerHelpText: "l2Y-4uNSpZCeU1nkyKp-k",
          Disabled: "_3mzzameY4skmqanuUJAFTE",
          ReturnLink: "_3RwoGlw2nj-L0xaCEin9k2",
        };
      },
    },
  ]);
})();
