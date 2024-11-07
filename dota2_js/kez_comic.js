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
    32805: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { COMIC_LANGUAGE: () => _, default: () => v });
      var a = n(85608),
        r = n(4248),
        s = n(89506),
        i = n(68613),
        c = n(68446),
        o = n(7552),
        l = n(83640),
        u = n(21384),
        A = n(88351),
        m = n(47202),
        h = n(36305),
        d = n(45237),
        g = n(55651),
        p = n(96064),
        w = n.n(p),
        E = n(85286),
        C = n.n(E);
      const _ = (() => {
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
          const [n, a] = (0, o.useState)(void 0),
            [r, s] = (0, o.useState)(
              Array.from({ length: t.length }, () => new Image()),
            ),
            c = (0, A.zy)(),
            l = (0, o.useCallback)(() => {
              a((e) => {
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
              null !== t && (e = parseInt(t)), a(e);
            }, [c]),
            (0, o.useEffect)(() => {
              if (void 0 === n) return;
              for (let e = 1; e <= 5; e++) {
                const a = n + e;
                if (a >= t.length) break;
                let i = r;
                i[a].src || ((i[a].src = t[a]), s(i));
              }
            }, [n, r, t]),
            (0, o.useEffect)(() => {
              e?.(n);
            }, [e, n]);
          const m = !n,
            h = n + 1 >= t.length;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: w().ComicViewer },
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
                className: (0, u.A)(w().ComicViewerHelpText, h && w().Disabled),
              },
              (0, i.we)("#comic_help_text"),
            ),
            o.createElement(
              d.N_,
              {
                className: (0, u.A)(w().ReturnLink, m && w().Disabled),
                to: g.J.kez_comic(),
              },
              (0, i.we)("#comic_return_button"),
            ),
          );
        };
      let f = class extends o.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#KezComic_title",
            comicImageURLs: Array.from(Array(113).keys()).map((e) => {
              const t = e.toString().padStart(3, "0");
              return `${r.TS.IMG_URL}crownfall/act4_ascension_night/${_}/${t}.webp`;
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
          return o.createElement(
            "div",
            { id: "KezComic", className: w().KezComic },
            o.createElement(l.mg, null),
            o.createElement(
              "div",
              { className: (0, u.A)(w().PageContainer) },
              o.createElement(m.A, { bOverlapping: !0 }),
              o.createElement(
                "div",
                { className: (0, u.A)(w().ComicContainer) },
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
      f = (0, a.Cg)([c.PA], f);
      const v = f;
    },
  },
]);
