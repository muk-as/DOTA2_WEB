// 1649.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [1649],
  {
    77220: (e) => {
      e.exports = {
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
    11649: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { COMIC_LANGUAGE: () => v, default: () => b });
      var r = n(85608),
        a = n(69500),
        s = n(4248),
        i = n(89506),
        c = n(68613),
        o = n(68446),
        u = n(7552),
        l = n(73202),
        A = n(21384),
        h = n(88351),
        d = n(47202),
        m = n(36305),
        g = n(45237),
        p = n(55651),
        w = n(77220),
        _ = n.n(w),
        f = n(85286),
        C = n.n(f);
      const v = (() => {
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
        x = ({ onIndexChanged: e, comicImageURLs: t }) => {
          const [n, r] = (0, u.useState)(void 0),
            [s, i] = (0, u.useState)(
              Array.from({ length: t.length }, () => new Image()),
            ),
            o = (0, h.zy)(),
            l = (0, u.useCallback)(() => {
              r((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= t.length)) return e;
                const n = e + 1;
                return window.history.pushState({}, "", `#p=${n}`), n;
              });
            }, [t]);
          (0, u.useEffect)(() => {
            const e = (e) => {
              ("Space" !== e.code && " " !== e.key) ||
                (e.preventDefault(), l());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [l]),
            (0, u.useEffect)(() => {
              let e = 0;
              const t = new URLSearchParams(o.hash.substring(1)).get("p");
              null !== t && (e = parseInt(t)), r(e);
            }, [o]),
            (0, u.useEffect)(() => {
              if (void 0 === n) return;
              for (let e = 1; e <= 5; e++) {
                const r = n + e;
                if (r >= t.length) break;
                let a = s;
                a[r].src || ((a[r].src = t[r]), i(a));
              }
            }, [n, s, t]),
            (0, u.useEffect)(() => {
              e?.(n);
            }, [e, n]);
          const d = !n,
            m = n + 1 >= t.length;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: _().ComicViewer,
                children: (0, a.jsx)("img", {
                  src:
                    void 0 !== n
                      ? t[n]
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                  onClick: (e) => {
                    e.preventDefault(), l();
                  },
                  onMouseUp: (e) => {
                    0 == e.button && e.preventDefault();
                  },
                }),
              }),
              (0, a.jsx)("div", {
                className: (0, A.A)(_().ComicViewerHelpText, m && _().Disabled),
                children: (0, c.we)("#crownfallcomic_help_text"),
              }),
              (0, a.jsx)(g.N_, {
                className: (0, A.A)(_().ReturnLink, d && _().Disabled),
                to: p.J.crownfall_comic(),
                children: (0, c.we)("#crownfallcomic_return_button"),
              }),
            ],
          });
        };
      let k = class extends u.Component {
        constructor(e) {
          super(e);
          const t = new Map([
              ["act1_intro", { url: "comic_part1", pageCount: 119 }],
              ["act2_intro", { url: "act2_intro", pageCount: 33 }],
              ["act3_intro", { url: "act3_intro", pageCount: 29 }],
              ["act4_intro", { url: "act4_intro", pageCount: 29 }],
            ]),
            n = t.get(e.comic_id) || t.get("act1_intro");
          this.state = {
            pageTitlePattern: `#crownfallcomic_${e.comic_id}_title`,
            comicImageURLs: Array.from(Array(n.pageCount).keys()).map((e) => {
              const t = e.toString().padStart(3, "0");
              return `${s.TS.IMG_URL}crownfall/${n.url}/${v}/${t}.webp?v=2`;
            }),
          };
        }
        handleScroll = (e) => {
          C().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return (0, a.jsxs)("div", {
            id: "CrownfallComic",
            className: _().CrownfallComic,
            children: [
              (0, a.jsx)(l.mg, {}),
              (0, a.jsxs)("div", {
                className: (0, A.A)(_().PageContainer),
                children: [
                  (0, a.jsx)(d.A, { bOverlapping: !0 }),
                  (0, a.jsx)("div", {
                    className: (0, A.A)(_().ComicContainer),
                    children: (0, a.jsx)(x, {
                      onIndexChanged: (e) => {
                        document.title = e
                          ? (0, c.we)(this.state.pageTitlePattern, e)
                          : (0, c.we)(`${this.state.pageTitlePattern}_cover`);
                      },
                      comicImageURLs: this.state.comicImageURLs,
                    }),
                  }),
                  (0, a.jsx)(m.K, {}),
                ],
              }),
            ],
          });
        }
      };
      k = (0, r.Cg)([o.PA], k);
      const b = k;
    },
  },
]);
