// 3038.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [3038],
  {
    91908: (e) => {
      e.exports = {
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
    40657: (e, n, r) => {
      "use strict";
      r.r(n), r.d(n, { COMIC_LANGUAGE: () => k, default: () => I });
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
        m = r(47202),
        d = r(36305),
        g = r(45237),
        p = r(55651),
        C = r(91908),
        w = r.n(C),
        f = r(85286),
        x = r.n(f);
      const k = (() => {
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
        b = ({ onIndexChanged: e, comicImageURLs: n }) => {
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
          const m = !r,
            d = r + 1 >= n.length;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: w().ComicViewer,
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
                className: (0, A.A)(w().ComicViewerHelpText, d && w().Disabled),
                children: (0, c.we)("#ringmastercomic_help_text"),
              }),
              (0, a.jsx)(g.N_, {
                className: (0, A.A)(w().ReturnLink, m && w().Disabled),
                to: p.J.ringmaster_comic(),
                children: (0, c.we)("#ringmastercomic_return_button"),
              }),
            ],
          });
        };
      let v = class extends u.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#ringmastercomic_title",
            comicImageURLs: Array.from(Array(53).keys()).map((e) => {
              const n = e.toString().padStart(3, "0");
              return `${s.TS.IMG_URL}comics/ringmaster/${k}/${n}.webp`;
            }),
          };
        }
        handleScroll = (e) => {
          x().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return (0, a.jsxs)("div", {
            id: "RingmasterComic",
            className: w().RingmasterComic,
            children: [
              (0, a.jsx)(l.mg, {}),
              (0, a.jsxs)("div", {
                className: (0, A.A)(w().PageContainer),
                children: [
                  (0, a.jsx)(m.A, { bOverlapping: !0 }),
                  (0, a.jsx)("div", {
                    className: (0, A.A)(w().ComicContainer),
                    children: (0, a.jsx)(b, {
                      onIndexChanged: (e) => {
                        document.title = e
                          ? (0, c.we)(this.state.pageTitlePattern, e)
                          : (0, c.we)(`${this.state.pageTitlePattern}_cover`);
                      },
                      comicImageURLs: this.state.comicImageURLs,
                    }),
                  }),
                  (0, a.jsx)(d.K, {}),
                ],
              }),
            ],
          });
        }
      };
      v = (0, t.Cg)([o.PA], v);
      const I = v;
    },
  },
]);
