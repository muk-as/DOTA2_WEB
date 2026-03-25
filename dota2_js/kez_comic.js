// 2805.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [2805],
  {
    96064: (e) => {
      e.exports = {
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
    32805: (e, n, r) => {
      "use strict";
      r.r(n), r.d(n, { COMIC_LANGUAGE: () => f, default: () => j });
      var t = r(85608),
        a = r(69500),
        s = r(4248),
        i = r(89506),
        c = r(68613),
        o = r(68446),
        u = r(7552),
        l = r(73202),
        A = r(21384),
        h = r(88351),
        d = r(47202),
        m = r(36305),
        g = r(45237),
        p = r(55651),
        w = r(96064),
        C = r.n(w),
        _ = r(85286),
        k = r.n(_);
      const f = (() => {
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
          }
        })(),
        x = ({ onIndexChanged: e, comicImageURLs: n }) => {
          const [r, t] = (0, u.useState)(void 0),
            [s, i] = (0, u.useState)(
              Array.from({ length: n.length }, () => new Image()),
            ),
            o = (0, h.zy)(),
            l = (0, u.useCallback)(() => {
              t((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= n.length)) return e;
                const r = e + 1;
                return window.history.pushState({}, "", `#p=${r}`), r;
              });
            }, [n]);
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
              const n = new URLSearchParams(o.hash.substring(1)).get("p");
              null !== n && (e = parseInt(n)), t(e);
            }, [o]),
            (0, u.useEffect)(() => {
              if (void 0 === r) return;
              for (let e = 1; e <= 5; e++) {
                const t = r + e;
                if (t >= n.length) break;
                let a = s;
                a[t].src || ((a[t].src = n[t]), i(a));
              }
            }, [r, s, n]),
            (0, u.useEffect)(() => {
              e?.(r);
            }, [e, r]);
          const d = !r,
            m = r + 1 >= n.length;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: C().ComicViewer,
                children: (0, a.jsx)("img", {
                  src:
                    void 0 !== r
                      ? n[r]
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
                className: (0, A.A)(C().ComicViewerHelpText, m && C().Disabled),
                children: (0, c.we)("#comic_help_text"),
              }),
              (0, a.jsx)(g.N_, {
                className: (0, A.A)(C().ReturnLink, d && C().Disabled),
                to: p.J.kez_comic(),
                children: (0, c.we)("#comic_return_button"),
              }),
            ],
          });
        };
      let v = class extends u.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#KezComic_title",
            comicImageURLs: Array.from(Array(113).keys()).map((e) => {
              const n = e.toString().padStart(3, "0");
              return `${s.TS.IMG_URL}crownfall/act4_ascension_night/${f}/${n}.webp`;
            }),
          };
        }
        handleScroll = (e) => {
          k().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return (0, a.jsxs)("div", {
            id: "KezComic",
            className: C().KezComic,
            children: [
              (0, a.jsx)(l.mg, {}),
              (0, a.jsxs)("div", {
                className: (0, A.A)(C().PageContainer),
                children: [
                  (0, a.jsx)(d.A, { bOverlapping: !0 }),
                  (0, a.jsx)("div", {
                    className: (0, A.A)(C().ComicContainer),
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
      v = (0, t.Cg)([o.PA], v);
      const j = v;
    },
  },
]);
