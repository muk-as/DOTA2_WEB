// 9798.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [9798],
  {
    13765: (e) => {
      e.exports = {
        Tooltip: "_2AkViIOMKjdngwcu-Y_2aU",
        CarouselFade: "_3hTd74_rvs-fglguXmEB75",
        StandardButton: "_2YFSh1rnxoDDPMIETQPiiA",
        ButtonText: "_1X-n99UjLsLdqRgHYUQBRZ",
        Icon: "_N-t1r0RqbLOhbAvz4lfC",
        Play: "_3j30HQwRJLNQPD6F6V8xgO",
        SteamLogo: "_35a3gd7WToab29pXbaU6_L",
        ToolTip: "_3JSm1Z6qFwqtpKwYwRvdM9",
        PlayerReportTooltip: "_2GmANWKhjcVMsb7ETJpBom",
        TitleFont: "_1fQm0nldSitQtmqlnMtsqI",
        TitleExtraLarge: "_2TcYbHyawppE2sDCg7QXYX",
        TitleLarge: "OH3zjuy7q76UXO_YBtUOI",
        TitleMedium: "_3u2KDeUBIReWc2n2qiqfQX",
        TitleSmall: "_2C47jlRGz-5ApwdIVa8d2q",
        TitleExtraSmall: "_2TEYtYdEj08V7ktFqE1SwY",
        DisplayFont: "Klul-D8mES59Ujm7f0kmM",
        DisplayExtraLarge: "_1d4_WY5atePpqI4-hSzPN4",
        DisplayLarge: "_1e8ENioSPnuo0sPNIVtwo-",
        DisplayMedium: "LFl00PBX9qCKXB92ltvSs",
        DisplaySmall: "_1VGgLsOZbI4vsGFPzHBi-c",
        BodyFont: "_329rTARkvPEay_K7oIJ80q",
        BodyExtraLarge: "_19KtJbIz8SbatnLwUeqaW9",
        BodyLarge: "_2aLP6VZDh1ql_nopcvnFMF",
        BodyMedium: "_2ILqIj1GgralE-yGLofXjF",
        BodySmall: "MgYuzeys2WR1r_41BWoOW",
        LabelFont: "_3JTzyx18q9RQ7oay8u077v",
        LabelExtraLarge: "_3deLhBjAWYHPdcvDrFFEPy",
        LabelLarge: "_1yf-xCjfScUfVBgIgIGdTf",
        LabelMedium: "_2Imf4FxUTcnEAEUpiHqEZ7",
        LabelSmall: "HZmrboz9ZKh3Ap9h0s7g5",
        LargoComic: "_2wFW_xTlod9SnyXFsypeYH",
        PageBackground: "_1Hum1uygB6gqBV5tNjqbKb",
        ComicContainer: "_1krGq4CsLdi8mC4I3JKBVr",
        ComicViewer: "_5PE9VpX65-vrve6dbbBn0",
        ComicViewerBorder: "_1IqzHpYOJrk8RVR8vFLIh3",
        ComicViewerHelpText: "_3Z9IJYYwEnsJL98WLL6h84",
        Disabled: "_2otTJMrFJHQw2BaNINW9bH",
        ReturnLink: "_1KN7LqXwoI40wlGbkIe4XG",
      };
    },
    99798: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, { COMIC_LANGUAGE: () => I, default: () => B });
      var t = r(85608),
        n = r(69500),
        s = r(4248),
        i = r(89506),
        o = r(68613),
        c = r(68446),
        l = r(7552),
        u = r(73202),
        d = r(21384),
        g = r(88351),
        m = r(47202),
        A = r(36305),
        h = r(45237),
        p = r(55651),
        _ = r(13765),
        L = r.n(_),
        w = r(85286),
        b = r.n(w);
      const I = (() => {
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
        f = ({ onIndexChanged: e, comicImageURLs: a }) => {
          const [r, t] = (0, l.useState)(void 0),
            [s, i] = (0, l.useState)(
              Array.from({ length: a.length }, () => new Image()),
            ),
            c = (0, g.zy)(),
            u = (0, l.useCallback)(() => {
              t((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= a.length)) return e;
                const r = e + 1;
                return window.history.pushState({}, "", `#p=${r}`), r;
              });
            }, [a]);
          (0, l.useEffect)(() => {
            const e = (e) => {
              ("Space" !== e.code && " " !== e.key) ||
                (e.preventDefault(), u());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [u]),
            (0, l.useEffect)(() => {
              let e = 0;
              const a = new URLSearchParams(c.hash.substring(1)).get("p");
              null !== a && (e = parseInt(a)), t(e);
            }, [c]),
            (0, l.useEffect)(() => {
              if (void 0 === r) return;
              for (let e = 1; e <= 5; e++) {
                const t = r + e;
                if (t >= a.length) break;
                let n = s;
                n[t].src || ((n[t].src = a[t]), i(n));
              }
            }, [r, s, a]),
            (0, l.useEffect)(() => {
              e?.(r);
            }, [e, r]);
          const m = !r,
            A = r + 1 >= a.length;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: L().ComicViewer,
                children: [
                  (0, n.jsx)("img", {
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
                  (0, n.jsx)("div", { className: L().ComicViewerBorder }),
                ],
              }),
              (0, n.jsx)("div", {
                className: (0, d.A)(
                  L().ComicViewerHelpText,
                  L().BodyFont,
                  L().BodyLarge,
                  A && L().Disabled,
                ),
                children: (0, o.we)("#comic_help_text"),
              }),
              (0, n.jsx)(h.N_, {
                className: (0, d.A)(
                  L().ReturnLink,
                  L().LabelFont,
                  L().LabelMedium,
                  m && L().Disabled,
                ),
                to: p.J.largo_comic(),
                children: (0, o.we)("#comic_return_button"),
              }),
            ],
          });
        };
      let C = class extends l.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#LargoComic_title",
            comicImageURLs: Array.from(Array(53).keys()).map((e) => {
              const a = e.toString().padStart(3, "0");
              return `${s.TS.IMG_URL}comics/largo/${I}/${a}.webp`;
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
          return (0, n.jsxs)("div", {
            id: "LargoComic",
            className: L().LargoComic,
            children: [
              (0, n.jsx)(u.mg, {}),
              (0, n.jsxs)("div", {
                className: (0, d.A)(L().PageContainer),
                children: [
                  (0, n.jsx)("div", {
                    className: (0, d.A)(L().PageBackground),
                  }),
                  (0, n.jsx)(m.A, { bOverlapping: !0 }),
                  (0, n.jsxs)("div", {
                    className: (0, d.A)(L().ComicContainer),
                    children: [
                      (0, n.jsx)(f, {
                        onIndexChanged: (e) => {
                          document.title = e
                            ? (0, o.we)(this.state.pageTitlePattern, e)
                            : (0, o.we)(`${this.state.pageTitlePattern}_cover`);
                        },
                        comicImageURLs: this.state.comicImageURLs,
                      }),
                      (0, n.jsx)(A.K, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      };
      C = (0, t.Cg)([c.PA], C);
      const B = C;
    },
  },
]);
