// 33273.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [33273],
    {
      33273: (C, L, e) => {
        "use strict";
        e.r(L), e.d(L, { COMIC_LANGUAGE: () => D, default: () => h });
        var n = e(69500),
          I = e(7166),
          M = e(2095),
          m = e(57693),
          f = e(3878),
          _ = e(7552),
          O = e(73202),
          A = e(15001),
          B = e(88351),
          v = e(63177),
          T = e(42616),
          p = e(45237),
          j = e(11778),
          x = e(13765),
          r = e.n(x),
          y = e(85286),
          U = e.n(y),
          w = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          K = (i, a, s, l) => {
            for (
              var c = l > 1 ? void 0 : l ? R(a, s) : a, E = i.length - 1, d;
              E >= 0;
              E--
            )
              (d = i[E]) && (c = (l ? d(a, s, c) : d(c)) || c);
            return l && c && w(a, s, c), c;
          };
        const b = "LargoComic",
          D = (() => {
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
          W = ({ onIndexChanged: i, comicImageURLs: a }) => {
            const [s, l] = (0, _.useState)(void 0),
              [c, E] = (0, _.useState)(
                Array.from({ length: a.length }, () => new Image()),
              ),
              d = (0, B.zy)(),
              g = (0, _.useCallback)(() => {
                l((t) => {
                  if ((t === void 0 && (t = 0), t + 1 >= a.length)) return t;
                  const o = t + 1;
                  return window.history.pushState({}, "", `#p=${o}`), o;
                });
              }, [a]),
              S = (t) => {
                t.preventDefault(), g();
              };
            (0, _.useEffect)(() => {
              const t = (o) => {
                (o.code === "Space" || o.key === " ") &&
                  (o.preventDefault(), g());
              };
              return (
                window.addEventListener("keydown", t),
                () => window.removeEventListener("keydown", t)
              );
            }, [g]),
              (0, _.useEffect)(() => {
                let t = 0;
                const u = new URLSearchParams(d.hash.substring(1)).get("p");
                u !== null && (t = parseInt(u)), l(t);
              }, [d]),
              (0, _.useEffect)(() => {
                if (s === void 0) return;
                const t = 5;
                for (let o = 1; o <= t; o++) {
                  const u = s + o;
                  if (u >= a.length) break;
                  let P = c;
                  P[u].src || ((P[u].src = a[u]), E(P));
                }
              }, [s, c, a]),
              (0, _.useEffect)(() => {
                i?.(s);
              }, [i, s]);
            const N = !s,
              F = s + 1 >= a.length;
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("div", {
                  className: r().ComicViewer,
                  children: [
                    (0, n.jsx)("img", {
                      src:
                        s !== void 0
                          ? a[s]
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                      onClick: S,
                      onMouseUp: (t) => {
                        t.button == 0 && t.preventDefault();
                      },
                    }),
                    (0, n.jsx)("div", { className: r().ComicViewerBorder }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: (0, A.A)(
                    r().ComicViewerHelpText,
                    r().BodyFont,
                    r().BodyLarge,
                    F && r().Disabled,
                  ),
                  children: (0, m.we)("#comic_help_text"),
                }),
                (0, n.jsx)(p.N_, {
                  className: (0, A.A)(
                    r().ReturnLink,
                    r().LabelFont,
                    r().LabelMedium,
                    N && r().Disabled,
                  ),
                  to: j.J.largo_comic(),
                  children: (0, m.we)("#comic_return_button"),
                }),
              ],
            });
          };
        let h = class extends _.Component {
          constructor(i) {
            super(i);
            const a = 53;
            this.state = {
              pageTitlePattern: "#LargoComic_title",
              comicImageURLs: Array.from(Array(a).keys()).map((s) => {
                const l = s.toString().padStart(3, "0");
                return `${I.TS.IMG_URL}comics/largo/${D}/${l}.webp`;
              }),
            };
          }
          handleScroll = (i) => {
            U().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const i = (a) => {
              a
                ? (document.title = (0, m.we)(this.state.pageTitlePattern, a))
                : (document.title = (0, m.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, n.jsxs)("div", {
              id: b,
              className: r().LargoComic,
              children: [
                (0, n.jsx)(O.mg, {}),
                (0, n.jsxs)("div", {
                  className: (0, A.A)(r().PageContainer),
                  children: [
                    (0, n.jsx)("div", {
                      className: (0, A.A)(r().PageBackground),
                    }),
                    (0, n.jsx)(v.A, { bOverlapping: !0 }),
                    (0, n.jsxs)("div", {
                      className: (0, A.A)(r().ComicContainer),
                      children: [
                        (0, n.jsx)(W, {
                          onIndexChanged: i,
                          comicImageURLs: this.state.comicImageURLs,
                        }),
                        (0, n.jsx)(T.K, {}),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        h = K([f.PA], h);
      },
      13765: (C) => {
        C.exports = {
          Tooltip: "_2AkViIOMKjdngwcu-Y_2aU",
          CarouselFade: "_3hTd74_rvs-fglguXmEB75",
          StandardButton: "_2YFSh1rnxoDDPMIETQPiiA",
          ButtonText: "_1X-n99UjLsLdqRgHYUQBRZ",
          Icon: "_N-t1r0RqbLOhbAvz4lfC",
          Play: "_3j30HQwRJLNQPD6F6V8xgO",
          SteamLogo: "_35a3gd7WToab29pXbaU6_L",
          ToolTip: "_3JSm1Z6qFwqtpKwYwRvdM9",
          PlayerReportTooltip: "_2GmANWKhjcVMsb7ETJpBom",
          TitleFont: "_1fQm0nldSitQtmqlnMtsqI",
          TitleExtraLarge: "_2TcYbHyawppE2sDCg7QXYX",
          TitleLarge: "OH3zjuy7q76UXO_YBtUOI",
          TitleMedium: "_3u2KDeUBIReWc2n2qiqfQX",
          TitleSmall: "_2C47jlRGz-5ApwdIVa8d2q",
          TitleExtraSmall: "_2TEYtYdEj08V7ktFqE1SwY",
          DisplayFont: "Klul-D8mES59Ujm7f0kmM",
          DisplayExtraLarge: "_1d4_WY5atePpqI4-hSzPN4",
          DisplayLarge: "_1e8ENioSPnuo0sPNIVtwo-",
          DisplayMedium: "LFl00PBX9qCKXB92ltvSs",
          DisplaySmall: "_1VGgLsOZbI4vsGFPzHBi-c",
          BodyFont: "_329rTARkvPEay_K7oIJ80q",
          BodyExtraLarge: "_19KtJbIz8SbatnLwUeqaW9",
          BodyLarge: "_2aLP6VZDh1ql_nopcvnFMF",
          BodyMedium: "_2ILqIj1GgralE-yGLofXjF",
          BodySmall: "MgYuzeys2WR1r_41BWoOW",
          LabelFont: "_3JTzyx18q9RQ7oay8u077v",
          LabelExtraLarge: "_3deLhBjAWYHPdcvDrFFEPy",
          LabelLarge: "_1yf-xCjfScUfVBgIgIGdTf",
          LabelMedium: "_2Imf4FxUTcnEAEUpiHqEZ7",
          LabelSmall: "HZmrboz9ZKh3Ap9h0s7g5",
          LargoComic: "_2wFW_xTlod9SnyXFsypeYH",
          PageBackground: "_1Hum1uygB6gqBV5tNjqbKb",
          ComicContainer: "_1krGq4CsLdi8mC4I3JKBVr",
          ComicViewer: "_5PE9VpX65-vrve6dbbBn0",
          ComicViewerBorder: "_1IqzHpYOJrk8RVR8vFLIh3",
          ComicViewerHelpText: "_3Z9IJYYwEnsJL98WLL6h84",
          Disabled: "_2otTJMrFJHQw2BaNINW9bH",
          ReturnLink: "_1KN7LqXwoI40wlGbkIe4XG",
        };
      },
    },
  ]);
})();
