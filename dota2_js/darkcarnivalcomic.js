// 35615.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [35615],
  {
    19738: (e) => {
      e.exports = {
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
    35615: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, { COMIC_LANGUAGE: () => w, default: () => S });
      var n = r(85608),
        t = r(69500),
        s = r(55243),
        i = r(89506),
        c = r(68613),
        l = r(68446),
        o = r(7552),
        u = r(73202),
        d = r(21384),
        h = r(88351),
        A = r(47202),
        m = r(36305),
        g = r(45237),
        p = r(55651),
        _ = r(19738),
        C = r.n(_),
        f = r(85286),
        b = r.n(f);
      const w = (() => {
          switch (i.r.LANGUAGE) {
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
            default:
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
          }
        })(),
        x = ({ onIndexChanged: e, comicImageURLs: a }) => {
          const [r, n] = (0, o.useState)(void 0),
            [s, i] = (0, o.useState)(
              Array.from({ length: a.length }, () => new Image()),
            ),
            l = (0, h.zy)(),
            u = (0, o.useCallback)(() => {
              n((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= a.length)) return e;
                const r = e + 1;
                return window.history.pushState({}, "", `#p=${r}`), r;
              });
            }, [a]);
          (0, o.useEffect)(() => {
            const e = (e) => {
              ("Space" !== e.code && " " !== e.key) ||
                (e.preventDefault(), u());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [u]),
            (0, o.useEffect)(() => {
              let e = 0;
              const a = new URLSearchParams(l.hash.substring(1)).get("p");
              null !== a && (e = parseInt(a)), n(e);
            }, [l]),
            (0, o.useEffect)(() => {
              if (void 0 === r) return;
              for (let e = 1; e <= 5; e++) {
                const n = r + e;
                if (n >= a.length) break;
                let t = s;
                t[n].src || ((t[n].src = a[n]), i(t));
              }
            }, [r, s, a]),
            (0, o.useEffect)(() => {
              e?.(r);
            }, [e, r]);
          const A = !r,
            m = r + 1 >= a.length;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: C().ComicViewer,
                children: [
                  (0, t.jsx)("img", {
                    src:
                      void 0 !== r
                        ? a[r]
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                    onClick: (e) => {
                      e.preventDefault(), u();
                    },
                    onMouseUp: (e) => {
                      0 == e.button && e.preventDefault();
                    },
                  }),
                  (0, t.jsx)("div", { className: C().ComicViewerBorder }),
                ],
              }),
              (0, t.jsx)("div", {
                className: (0, d.A)(
                  C().ComicViewerHelpText,
                  C().BodyFont,
                  C().BodyLarge,
                  m && C().Disabled,
                ),
                children: (0, c.we)("#comic_help_text"),
              }),
              (0, t.jsx)(g.N_, {
                className: (0, d.A)(
                  C().ReturnLink,
                  C().LabelFont,
                  C().LabelMedium,
                  A && C().Disabled,
                ),
                to: p.J.darkcarnivalcomic(),
                children: (0, c.we)("#comic_return_button"),
              }),
            ],
          });
        };
      let L = class extends o.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#darkcarnivalcomic_title",
            comicImageURLs: Array.from(Array(47).keys()).map((e) => {
              const a = e.toString().padStart(3, "0");
              return `${s.TS.IMG_URL}comics/midnight_run/${w}/${a}.webp`;
            }),
          };
        }
        handleScroll = (e) => {
          b().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return (0, t.jsxs)("div", {
            id: "DarkCarnivalComic",
            className: C().DarkCarnivalComic,
            children: [
              (0, t.jsx)(u.mg, {}),
              (0, t.jsxs)("div", {
                className: (0, d.A)(C().PageContainer),
                children: [
                  (0, t.jsx)("div", {
                    className: (0, d.A)(C().PageBackground),
                  }),
                  (0, t.jsx)(A.A, { bOverlapping: !0 }),
                  (0, t.jsxs)("div", {
                    className: (0, d.A)(C().ComicContainer),
                    children: [
                      (0, t.jsx)(x, {
                        onIndexChanged: (e) => {
                          document.title = e
                            ? (0, c.we)(this.state.pageTitlePattern, e)
                            : (0, c.we)(`${this.state.pageTitlePattern}_cover`);
                        },
                        comicImageURLs: this.state.comicImageURLs,
                      }),
                      (0, t.jsx)(m.K, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      };
      L = (0, n.Cg)([l.PA], L);
      const S = L;
    },
  },
]);
