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
    11649: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { COMIC_LANGUAGE: () => C, default: () => k });
      var n = a(85608),
        r = a(4248),
        c = a(89506),
        s = a(68613),
        i = a(68446),
        o = a(7552),
        l = a(83640),
        u = a(21384),
        m = a(88351),
        A = a(47202),
        h = a(36305),
        d = a(45237),
        g = a(55651),
        p = a(77220),
        w = a.n(p),
        _ = a(85286),
        f = a.n(_);
      const C = (() => {
          switch (c.r.LANGUAGE) {
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
        E = ({ onIndexChanged: e, comicImageURLs: t }) => {
          const [a, n] = (0, o.useState)(void 0),
            [r, c] = (0, o.useState)(
              Array.from({ length: t.length }, () => new Image()),
            ),
            i = (0, m.zy)(),
            l = (0, o.useCallback)(() => {
              n((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= t.length)) return e;
                const a = e + 1;
                return window.history.pushState({}, "", `#p=${a}`), a;
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
              const t = new URLSearchParams(i.hash.substring(1)).get("p");
              null !== t && (e = parseInt(t)), n(e);
            }, [i]),
            (0, o.useEffect)(() => {
              if (void 0 === a) return;
              for (let e = 1; e <= 5; e++) {
                const n = a + e;
                if (n >= t.length) break;
                let s = r;
                s[n].src || ((s[n].src = t[n]), c(s));
              }
            }, [a, r, t]),
            (0, o.useEffect)(() => {
              e?.(a);
            }, [e, a]);
          const A = !a,
            h = a + 1 >= t.length;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: w().ComicViewer },
              o.createElement("img", {
                src:
                  void 0 !== a
                    ? t[a]
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
                className: (0, u.A)(w().ComicViewerHelpText, h && w().Disabled),
              },
              (0, s.we)("#crownfallcomic_help_text"),
            ),
            o.createElement(
              d.N_,
              {
                className: (0, u.A)(w().ReturnLink, A && w().Disabled),
                to: g.J.crownfall_comic(),
              },
              (0, s.we)("#crownfallcomic_return_button"),
            ),
          );
        };
      let v = class extends o.Component {
        constructor(e) {
          super(e);
          const t = new Map([
              ["act1_intro", { url: "comic_part1", pageCount: 119 }],
              ["act2_intro", { url: "act2_intro", pageCount: 33 }],
              ["act3_intro", { url: "act3_intro", pageCount: 29 }],
            ]),
            a = t.get(e.comic_id) || t.get("act1_intro");
          this.state = {
            pageTitlePattern: `#crownfallcomic_${e.comic_id}_title`,
            comicImageURLs: Array.from(Array(a.pageCount).keys()).map((e) => {
              const t = e.toString().padStart(3, "0");
              return `${r.TS.IMG_URL}crownfall/${a.url}/${C}/${t}.webp?v=2`;
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
            { id: "CrownfallComic", className: w().CrownfallComic },
            o.createElement(l.mg, null),
            o.createElement(
              "div",
              { className: (0, u.A)(w().PageContainer) },
              o.createElement(A.A, { bOverlapping: !0 }),
              o.createElement(
                "div",
                { className: (0, u.A)(w().ComicContainer) },
                o.createElement(E, {
                  onIndexChanged: (e) => {
                    document.title = e
                      ? (0, s.we)(this.state.pageTitlePattern, e)
                      : (0, s.we)(`${this.state.pageTitlePattern}_cover`);
                  },
                  comicImageURLs: this.state.comicImageURLs,
                }),
              ),
              o.createElement(h.K, null),
            ),
          );
        }
      };
      v = (0, n.Cg)([i.PA], v);
      const k = v;
    },
  },
]);
