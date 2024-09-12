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
    40657: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { COMIC_LANGUAGE: () => E, default: () => v });
      var r = n(85608),
        a = n(4248),
        s = n(89506),
        i = n(68613),
        c = n(68446),
        o = n(7552),
        l = n(83640),
        u = n(21384),
        m = n(88351),
        A = n(47202),
        h = n(36305),
        g = n(45237),
        d = n(55651),
        p = n(91908),
        C = n.n(p),
        w = n(85286),
        f = n.n(w);
      const E = (() => {
          switch (s.r.LANGUAGE) {
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
        k = ({ onIndexChanged: e, comicImageURLs: t }) => {
          const [n, r] = (0, o.useState)(void 0),
            [a, s] = (0, o.useState)(
              Array.from({ length: t.length }, () => new Image()),
            ),
            c = (0, m.zy)(),
            l = (0, o.useCallback)(() => {
              r((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= t.length)) return e;
                const n = e + 1;
                return window.history.pushState({}, "", `#p=${n}`), n;
              });
            }, [t]);
          (0, o.useEffect)(() => {
            const e = (e) => {
              ("Space" !== e.code && " " !== e.key) ||
                (e.preventDefault(), l());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [l]),
            (0, o.useEffect)(() => {
              let e = 0;
              const t = new URLSearchParams(c.hash.substring(1)).get("p");
              null !== t && (e = parseInt(t)), r(e);
            }, [c]),
            (0, o.useEffect)(() => {
              if (void 0 === n) return;
              for (let e = 1; e <= 5; e++) {
                const r = n + e;
                if (r >= t.length) break;
                let i = a;
                i[r].src || ((i[r].src = t[r]), s(i));
              }
            }, [n, a, t]),
            (0, o.useEffect)(() => {
              e?.(n);
            }, [e, n]);
          const A = !n,
            h = n + 1 >= t.length;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: C().ComicViewer },
              o.createElement("img", {
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
            ),
            o.createElement(
              "div",
              {
                className: (0, u.A)(C().ComicViewerHelpText, h && C().Disabled),
              },
              (0, i.we)("#ringmastercomic_help_text"),
            ),
            o.createElement(
              g.N_,
              {
                className: (0, u.A)(C().ReturnLink, A && C().Disabled),
                to: d.J.ringmaster_comic(),
              },
              (0, i.we)("#ringmastercomic_return_button"),
            ),
          );
        };
      let b = class extends o.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#ringmastercomic_title",
            comicImageURLs: Array.from(Array(53).keys()).map((e) => {
              const t = e.toString().padStart(3, "0");
              return `${a.TS.IMG_URL}comics/ringmaster/${E}/${t}.webp`;
            }),
          };
        }
        handleScroll = (e) => {
          f().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return o.createElement(
            "div",
            { id: "RingmasterComic", className: C().RingmasterComic },
            o.createElement(l.mg, null),
            o.createElement(
              "div",
              { className: (0, u.A)(C().PageContainer) },
              o.createElement(A.A, { bOverlapping: !0 }),
              o.createElement(
                "div",
                { className: (0, u.A)(C().ComicContainer) },
                o.createElement(k, {
                  onIndexChanged: (e) => {
                    document.title = e
                      ? (0, i.we)(this.state.pageTitlePattern, e)
                      : (0, i.we)(`${this.state.pageTitlePattern}_cover`);
                  },
                  comicImageURLs: this.state.comicImageURLs,
                }),
              ),
              o.createElement(h.K, null),
            ),
          );
        }
      };
      b = (0, r.Cg)([c.PA], b);
      const v = b;
    },
  },
]);
