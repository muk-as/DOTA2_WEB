// 96196.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [96196],
    {
      96196: (g, O, e) => {
        "use strict";
        e.r(O), e.d(O, { COMIC_LANGUAGE: () => f, default: () => E });
        var a = e(69500),
          D = e(7166),
          M = e(2095),
          m = e(57693),
          v = e(3878),
          l = e(7552),
          I = e(73202),
          d = e(15001),
          T = e(88351),
          R = e(63177),
          U = e(42616),
          L = e(45237),
          p = e(11778),
          x = e(91908),
          A = e.n(x),
          B = e(85286),
          K = e.n(B),
          j = Object.defineProperty,
          y = Object.getOwnPropertyDescriptor,
          W = (o, t, s, c) => {
            for (
              var i = c > 1 ? void 0 : c ? y(t, s) : t, h = o.length - 1, u;
              h >= 0;
              h--
            )
              (u = o[h]) && (i = (c ? u(t, s, i) : u(i)) || i);
            return c && i && j(t, s, i), i;
          };
        const w = "RingmasterComic",
          f = (() => {
            switch (M.r.LANGUAGE) {
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
          N = ({ onIndexChanged: o, comicImageURLs: t }) => {
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
                const _ = new URLSearchParams(u.hash.substring(1)).get("p");
                _ !== null && (n = parseInt(_)), c(n);
              }, [u]),
              (0, l.useEffect)(() => {
                if (s === void 0) return;
                const n = 5;
                for (let r = 1; r <= n; r++) {
                  const _ = s + r;
                  if (_ >= t.length) break;
                  let P = i;
                  P[_].src || ((P[_].src = t[_]), h(P));
                }
              }, [s, i, t]),
              (0, l.useEffect)(() => {
                o?.(s);
              }, [o, s]);
            const V = !s,
              b = s + 1 >= t.length;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: A().ComicViewer,
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
                    A().ComicViewerHelpText,
                    b && A().Disabled,
                  ),
                  children: (0, m.we)("#ringmastercomic_help_text"),
                }),
                (0, a.jsx)(L.N_, {
                  className: (0, d.A)(A().ReturnLink, V && A().Disabled),
                  to: p.J.ringmaster_comic(),
                  children: (0, m.we)("#ringmastercomic_return_button"),
                }),
              ],
            });
          };
        let E = class extends l.Component {
          constructor(o) {
            super(o);
            const t = 53;
            this.state = {
              pageTitlePattern: "#ringmastercomic_title",
              comicImageURLs: Array.from(Array(t).keys()).map((s) => {
                const c = s.toString().padStart(3, "0");
                return `${D.TS.IMG_URL}comics/ringmaster/${f}/${c}.webp`;
              }),
            };
          }
          handleScroll = (o) => {
            K().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const o = (t) => {
              t
                ? (document.title = (0, m.we)(this.state.pageTitlePattern, t))
                : (document.title = (0, m.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, a.jsxs)("div", {
              id: w,
              className: A().RingmasterComic,
              children: [
                (0, a.jsx)(I.mg, {}),
                (0, a.jsxs)("div", {
                  className: (0, d.A)(A().PageContainer),
                  children: [
                    (0, a.jsx)(R.A, { bOverlapping: !0 }),
                    (0, a.jsx)("div", {
                      className: (0, d.A)(A().ComicContainer),
                      children: (0, a.jsx)(N, {
                        onIndexChanged: o,
                        comicImageURLs: this.state.comicImageURLs,
                      }),
                    }),
                    (0, a.jsx)(U.K, {}),
                  ],
                }),
              ],
            });
          }
        };
        E = W([v.PA], E);
      },
      91908: (g) => {
        g.exports = {
          Tooltip: "YVj4h4Jtr0fRFpKcRDodc",
          CarouselFade: "_1N43OtXbgYVI0gwWayTPFU",
          StandardButton: "kHhdGG3ZGAhoCVy8mlidA",
          ButtonText: "_11CjSf6nOri2lYo5NAxvJy",
          Icon: "TBhgqgdyRcePSx7L2RZvt",
          Play: "_2hhUXoarysOkhLT8X-Kmxj",
          SteamLogo: "q3oe5AQCSCKN6oGo-Mjo0",
          ToolTip: "_3uboyUUCPnxmXzF3bI9J6k",
          PlayerReportTooltip: "_2t0lY22PqTvUzMHntnyEQI",
          RingmasterComic: "_1eHZoWL24mw8T36a36K4Xs",
          ComicContainer: "_2EhkXLctTK3G833QoebLOh",
          ComicViewer: "_3HfL7RtdnYIVyb4bGqgI39",
          ComicViewerHelpText: "_1oB_-Af2MUEP-9xPDO3PsM",
          Disabled: "epVOy9piJ1QcRbiSkTyI",
          ReturnLink: "VEVvxQIiK5yjZUsYyHIZ5",
        };
      },
    },
  ]);
})();
