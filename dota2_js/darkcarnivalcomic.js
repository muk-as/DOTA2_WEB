// 79630.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [79630],
    {
      79630: (D, P, e) => {
        "use strict";
        e.r(P), e.d(P, { COMIC_LANGUAGE: () => M, default: () => E });
        var t = e(69500),
          f = e(7166),
          O = e(2095),
          m = e(57693),
          v = e(3878),
          _ = e(7552),
          L = e(73202),
          A = e(15001),
          T = e(88351),
          p = e(63177),
          B = e(42616),
          I = e(45237),
          x = e(11778),
          j = e(19738),
          s = e.n(j),
          R = e(85286),
          S = e.n(R),
          N = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          y = (o, a, r, l) => {
            for (
              var c = l > 1 ? void 0 : l ? K(a, r) : a, h = o.length - 1, d;
              h >= 0;
              h--
            )
              (d = o[h]) && (c = (l ? d(a, r, c) : d(c)) || c);
            return l && c && N(a, r, c), c;
          };
        const U = "DarkCarnivalComic",
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
          b = ({ onIndexChanged: o, comicImageURLs: a }) => {
            const [r, l] = (0, _.useState)(void 0),
              [c, h] = (0, _.useState)(
                Array.from({ length: a.length }, () => new Image()),
              ),
              d = (0, T.zy)(),
              C = (0, _.useCallback)(() => {
                l((n) => {
                  if ((n === void 0 && (n = 0), n + 1 >= a.length)) return n;
                  const i = n + 1;
                  return window.history.pushState({}, "", `#p=${i}`), i;
                });
              }, [a]),
              w = (n) => {
                n.preventDefault(), C();
              };
            (0, _.useEffect)(() => {
              const n = (i) => {
                (i.code === "Space" || i.key === " ") &&
                  (i.preventDefault(), C());
              };
              return (
                window.addEventListener("keydown", n),
                () => window.removeEventListener("keydown", n)
              );
            }, [C]),
              (0, _.useEffect)(() => {
                let n = 0;
                const u = new URLSearchParams(d.hash.substring(1)).get("p");
                u !== null && (n = parseInt(u)), l(n);
              }, [d]),
              (0, _.useEffect)(() => {
                if (r === void 0) return;
                const n = 5;
                for (let i = 1; i <= n; i++) {
                  const u = r + i;
                  if (u >= a.length) break;
                  let g = c;
                  g[u].src || ((g[u].src = a[u]), h(g));
                }
              }, [r, c, a]),
              (0, _.useEffect)(() => {
                o?.(r);
              }, [o, r]);
            const W = !r,
              F = r + 1 >= a.length;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  className: s().ComicViewer,
                  children: [
                    (0, t.jsx)("img", {
                      src:
                        r !== void 0
                          ? a[r]
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                      onClick: w,
                      onMouseUp: (n) => {
                        n.button == 0 && n.preventDefault();
                      },
                    }),
                    (0, t.jsx)("div", { className: s().ComicViewerBorder }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: (0, A.A)(
                    s().ComicViewerHelpText,
                    s().BodyFont,
                    s().BodyLarge,
                    F && s().Disabled,
                  ),
                  children: (0, m.we)("#comic_help_text"),
                }),
                (0, t.jsx)(I.N_, {
                  className: (0, A.A)(
                    s().ReturnLink,
                    s().LabelFont,
                    s().LabelMedium,
                    W && s().Disabled,
                  ),
                  to: x.J.darkcarnivalcomic(),
                  children: (0, m.we)("#comic_return_button"),
                }),
              ],
            });
          };
        let E = class extends _.Component {
          constructor(o) {
            super(o);
            const a = 47;
            this.state = {
              pageTitlePattern: "#darkcarnivalcomic_title",
              comicImageURLs: Array.from(Array(a).keys()).map((r) => {
                const l = r.toString().padStart(3, "0");
                return `${f.TS.IMG_URL}comics/midnight_run/${M}/${l}.webp`;
              }),
            };
          }
          handleScroll = (o) => {
            S().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const o = (a) => {
              a
                ? (document.title = (0, m.we)(this.state.pageTitlePattern, a))
                : (document.title = (0, m.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, t.jsxs)("div", {
              id: U,
              className: s().DarkCarnivalComic,
              children: [
                (0, t.jsx)(L.mg, {}),
                (0, t.jsxs)("div", {
                  className: (0, A.A)(s().PageContainer),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, A.A)(s().PageBackground),
                    }),
                    (0, t.jsx)(p.A, { bOverlapping: !0 }),
                    (0, t.jsxs)("div", {
                      className: (0, A.A)(s().ComicContainer),
                      children: [
                        (0, t.jsx)(b, {
                          onIndexChanged: o,
                          comicImageURLs: this.state.comicImageURLs,
                        }),
                        (0, t.jsx)(B.K, {}),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        E = y([v.PA], E);
      },
      19738: (D) => {
        D.exports = {
          Tooltip: "_2KCuf_SJJEXcOuLP59IpZD",
          CarouselFade: "_2SRFpua15h9hV8a3jNjni2",
          StandardButton: "_1L8NMpo1QC44tsK7DKSVnw",
          ButtonText: "_3Tcu-X4CLlK6f8Z_tAvsD_",
          Icon: "_2M524qpSjFi6IfObEmF-cy",
          Play: "_1rFiYfze09LpLHA9RiWY0B",
          SteamLogo: "_27stRql3gZKng9YPfD7_qw",
          ToolTip: "BVdqNbQQInntutmm3Nh0S",
          PlayerReportTooltip: "_3E5CJhrbtmLHhcF1gFGKtG",
          TitleFont: "_2sN0pNrIzHUat1asHjzUwy",
          TitleExtraLarge: "Jtn7uNabEp70OXGRt1jIO",
          TitleLarge: "xvEnp93vqen7YpN-HlNXV",
          TitleMedium: "_1NCqAbb-Jq85onJwpvptin",
          TitleSmall: "_2ogKF6cT1JywfF0uScF7Lr",
          TitleExtraSmall: "_1su99h-ViXbgQSMl8z-1Hk",
          DisplayFont: "_3ztcC3rN3CcduqM_n1X2kP",
          DisplayExtraLarge: "TjgfS5u55aPN4gVn4NM9E",
          DisplayLarge: "_5x9OT3ROlOxoiqxZVsNs3",
          DisplayMedium: "_1MAj4PXW447nFPNAxU9SlK",
          DisplaySmall: "_3apIrpHy7lF_6JMTvbNu2N",
          BodyFont: "_2jARk1k1C45P3VTG3DPgC_",
          BodyExtraLarge: "_3ndMFKguCaLf0hhGc9_DdJ",
          BodyLarge: "_3Z9n3dfjRTIRMhGtjeKJXZ",
          BodyMedium: "_2I-hSp--FoJKl2zTLfEWSH",
          BodySmall: "_3k436nzi1RwUqbFq9C_EXp",
          LabelFont: "UablZ8c6hXxJcvBWetiJG",
          LabelExtraLarge: "bMssBD-3bmdghhFoefDMr",
          LabelLarge: "XaiSqzYAYmzolqVBN8Zz9",
          LabelMedium: "_20x981-rWSrxNRyZiqHQ0E",
          LabelSmall: "_197wWeTyBn6JFS6iSKia7",
          DarkCarnivalComic: "_16woM4c_O-l8jf7MzzGfnX",
          PageBackground: "_3pcG4fwiU6A7C80B-IXdnY",
          ComicContainer: "_3xdJfae_CO-ZSBTKdbBFR_",
          ComicViewer: "_1P_GWB09a1rddlMQvQcysl",
          ComicViewerBorder: "_3WJd3fWb5C6RKuqyr3rGZT",
          ComicViewerHelpText: "_Tbu-FT4HCFi3kljOY8Hi",
          Disabled: "_1WDJSy0ekUS8AhcRI-IVbY",
          ReturnLink: "_2Jx45RysUVVl9djRSO1jQM",
        };
      },
    },
  ]);
})();
