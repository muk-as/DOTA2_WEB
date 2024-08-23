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
      n.r(t), n.d(t, { COMIC_LANGUAGE: () => f, default: () => v });
      var a = n(85608),
        r = n(4248),
        s = n(89506),
        i = n(68613),
        o = n(68446),
        c = n(7552),
        l = n(83640),
        A = n(21384),
        m = n(88351),
        u = n(47202),
        d = n(36305),
        g = n(45237),
        h = n(55651),
        p = n(91908),
        C = n.n(p),
        E = n(85286),
        w = n.n(E);
      const f = (() => {
          switch (s.r.LANGUAGE) {
            case "brazilian":
              return "brazilian";
            case "english":
            default:
              return "english";
            case "latam":
              return "latam";
            case "russian":
              return "russian";
            case "schinese":
              return "schinese";
            case "spanish":
              return "spanish";
          }
        })(),
        I = ({ onIndexChanged: e, comicImageURLs: t }) => {
          const [n, a] = (0, c.useState)(void 0),
            [r, s] = (0, c.useState)(
              Array.from({ length: t.length }, () => new Image()),
            ),
            o = (0, m.zy)(),
            l = (0, c.useCallback)(() => {
              a((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= t.length)) return e;
                const n = e + 1;
                return window.history.pushState({}, "", `#p=${n}`), n;
              });
            }, [t]);
          (0, c.useEffect)(() => {
            const e = (e) => {
              ("Space" !== e.code && " " !== e.key) ||
                (e.preventDefault(), l());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [l]),
            (0, c.useEffect)(() => {
              let e = 0;
              const t = new URLSearchParams(o.hash.substring(1)).get("p");
              null !== t && (e = parseInt(t)), a(e);
            }, [o]),
            (0, c.useEffect)(() => {
              if (void 0 === n) return;
              for (let e = 1; e <= 5; e++) {
                const a = n + e;
                if (a >= t.length) break;
                let i = r;
                i[a].src || ((i[a].src = t[a]), s(i));
              }
            }, [n, r, t]),
            (0, c.useEffect)(() => {
              e?.(n);
            }, [e, n]);
          const u = !n,
            d = n + 1 >= t.length;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: C().ComicViewer },
              c.createElement("img", {
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
            c.createElement(
              "div",
              {
                className: (0, A.A)(C().ComicViewerHelpText, d && C().Disabled),
              },
              (0, i.we)("#ringmastercomic_help_text"),
            ),
            c.createElement(
              g.N_,
              {
                className: (0, A.A)(C().ReturnLink, u && C().Disabled),
                to: h.J.ringmaster_comic(),
              },
              (0, i.we)("#ringmastercomic_return_button"),
            ),
          );
        };
      let b = class extends c.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#ringmastercomic_title",
            comicImageURLs: Array.from(Array(53).keys()).map((e) => {
              const t = e.toString().padStart(3, "0");
              return `${r.TS.IMG_URL}comics/ringmaster/${f}/${t}.webp`;
            }),
          };
        }
        handleScroll = (e) => {
          w().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return c.createElement(
            "div",
            { id: "RingmasterComic", className: C().RingmasterComic },
            c.createElement(l.mg, null),
            c.createElement(
              "div",
              { className: (0, A.A)(C().PageContainer) },
              c.createElement(u.A, { bOverlapping: !0 }),
              c.createElement(
                "div",
                { className: (0, A.A)(C().ComicContainer) },
                c.createElement(I, {
                  onIndexChanged: (e) => {
                    document.title = e
                      ? (0, i.we)(this.state.pageTitlePattern, e)
                      : (0, i.we)(`${this.state.pageTitlePattern}_cover`);
                  },
                  comicImageURLs: this.state.comicImageURLs,
                }),
              ),
              c.createElement(d.K, null),
            ),
          );
        }
      };
      b = (0, a.Cg)([o.PA], b);
      const v = b;
    },
  },
]);
