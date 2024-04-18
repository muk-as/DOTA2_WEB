// 6896.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [6896],
  {
    87537: (e) => {
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
    66896: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { COMIC_LANGUAGE: () => _, default: () => x });
      var r = t(22970),
        a = t(97819),
        s = t(98142),
        c = t(52472),
        i = t(80846),
        l = t(66204),
        o = t(62175),
        u = t(5062),
        A = t(15905),
        m = t(31444),
        h = t(37196),
        d = t(28763),
        p = t(79735),
        g = t(87537),
        f = t.n(g),
        w = t(43356),
        C = t.n(w);
      const _ = (() => {
          switch (s.Y.LANGUAGE) {
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
        E = Array.from({ length: 119 }, (e, n) => n).map((e) => {
          const n = e.toString().padStart(3, "0");
          return `${a.De.IMG_URL}crownfall/comic_part1/${_}/${n}.webp?part=1`;
        });
      let v = Array.from({ length: E.length }, () => new Image());
      const k = ({ onIndexChanged: e }) => {
        const [n, t] = (0, l.useState)(void 0),
          r = (0, A.TH)(),
          a = (0, l.useCallback)(() => {
            t((e) => {
              if ((void 0 === e && (e = 0), e + 1 >= E.length)) return e;
              const n = e + 1;
              return window.history.pushState({}, "", `#p=${n}`), n;
            });
          }, []);
        (0, l.useEffect)(() => {
          const e = (e) => {
            ("Space" !== e.code && " " !== e.key) || (e.preventDefault(), a());
          };
          return (
            window.addEventListener("keydown", e),
            () => window.removeEventListener("keydown", e)
          );
        }, [a]),
          (0, l.useEffect)(() => {
            let e = 0;
            const n = new URLSearchParams(r.hash.substring(1)).get("p");
            null !== n && (e = parseInt(n)), t(e);
          }, [r]),
          (0, l.useEffect)(() => {
            if (void 0 === n) return;
            for (let e = 1; e <= 5; e++) {
              const t = n + e;
              if (t >= E.length) break;
              v[t].src || (v[t].src = E[t]);
            }
          }, [n]),
          (0, l.useEffect)(() => {
            null == e || e(n);
          }, [e, n]);
        const s = !n,
          i = n + 1 >= E.length;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: f().ComicViewer },
            l.createElement("img", {
              src:
                void 0 !== n
                  ? E[n]
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
              onClick: (e) => {
                e.preventDefault(), a();
              },
              onMouseUp: (e) => {
                0 == e.button && e.preventDefault();
              },
            }),
          ),
          l.createElement(
            "div",
            { className: (0, u.Z)(f().ComicViewerHelpText, i && f().Disabled) },
            (0, c.Xx)("#crownfallcomic_help_text"),
          ),
          l.createElement(
            d.rU,
            {
              className: (0, u.Z)(f().ReturnLink, s && f().Disabled),
              to: p._.crownfall_comic(),
            },
            (0, c.Xx)("#crownfallcomic_return_button"),
          ),
        );
      };
      let b = class extends l.Component {
        constructor(e) {
          super(e),
            (this.handleScroll = (e) => {
              C().refresh();
            }),
            (this.state = {});
        }
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return l.createElement(
            "div",
            { id: "CrownfallComic", className: f().CrownfallComic },
            l.createElement(o.ql, null),
            l.createElement(
              "div",
              { className: (0, u.Z)(f().PageContainer) },
              l.createElement(m.j, { bOverlapping: !0 }),
              l.createElement(
                "div",
                { className: (0, u.Z)(f().ComicContainer) },
                l.createElement(k, {
                  onIndexChanged: (e) => {
                    document.title = e
                      ? (0, c.Xx)("#crownfallcomic_title", e)
                      : (0, c.Xx)("#crownfallcomic_title_cover");
                  },
                }),
              ),
              l.createElement(h.U, null),
            ),
          );
        }
      };
      b = (0, r.gn)([i.Pi], b);
      const x = b;
    },
  },
]);
