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
    99798: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { COMIC_LANGUAGE: () => w, default: () => f });
      var r = t(85608),
        n = t(4248),
        s = t(89506),
        i = t(68613),
        c = t(68446),
        o = t(7552),
        l = t(73202),
        u = t(21384),
        m = t(88351),
        d = t(47202),
        g = t(36305),
        A = t(45237),
        h = t(55651),
        p = t(13765),
        _ = t.n(p),
        L = t(85286),
        E = t.n(L);
      const w = (() => {
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
        b = ({ onIndexChanged: e, comicImageURLs: a }) => {
          const [t, r] = (0, o.useState)(void 0),
            [n, s] = (0, o.useState)(
              Array.from({ length: a.length }, () => new Image()),
            ),
            c = (0, m.zy)(),
            l = (0, o.useCallback)(() => {
              r((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= a.length)) return e;
                const t = e + 1;
                return window.history.pushState({}, "", `#p=${t}`), t;
              });
            }, [a]);
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
              const a = new URLSearchParams(c.hash.substring(1)).get("p");
              null !== a && (e = parseInt(a)), r(e);
            }, [c]),
            (0, o.useEffect)(() => {
              if (void 0 === t) return;
              for (let e = 1; e <= 5; e++) {
                const r = t + e;
                if (r >= a.length) break;
                let i = n;
                i[r].src || ((i[r].src = a[r]), s(i));
              }
            }, [t, n, a]),
            (0, o.useEffect)(() => {
              e?.(t);
            }, [e, t]);
          const d = !t,
            g = t + 1 >= a.length;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: _().ComicViewer },
              o.createElement("img", {
                src:
                  void 0 !== t
                    ? a[t]
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                onClick: (e) => {
                  e.preventDefault(), l();
                },
                onMouseUp: (e) => {
                  0 == e.button && e.preventDefault();
                },
              }),
              o.createElement("div", { className: _().ComicViewerBorder }),
            ),
            o.createElement(
              "div",
              {
                className: (0, u.A)(
                  _().ComicViewerHelpText,
                  _().BodyFont,
                  _().BodyLarge,
                  g && _().Disabled,
                ),
              },
              (0, i.we)("#comic_help_text"),
            ),
            o.createElement(
              A.N_,
              {
                className: (0, u.A)(
                  _().ReturnLink,
                  _().LabelFont,
                  _().LabelMedium,
                  d && _().Disabled,
                ),
                to: h.J.largo_comic(),
              },
              (0, i.we)("#comic_return_button"),
            ),
          );
        };
      let I = class extends o.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#LargoComic_title",
            comicImageURLs: Array.from(Array(53).keys()).map((e) => {
              const a = e.toString().padStart(3, "0");
              return `${n.TS.IMG_URL}comics/largo/${w}/${a}.webp`;
            }),
          };
        }
        handleScroll = (e) => {
          E().refresh();
        };
        componentDidMount() {
          this.handleScroll(void 0);
        }
        render() {
          return o.createElement(
            "div",
            { id: "LargoComic", className: _().LargoComic },
            o.createElement(l.mg, null),
            o.createElement(
              "div",
              { className: (0, u.A)(_().PageContainer) },
              o.createElement("div", {
                className: (0, u.A)(_().PageBackground),
              }),
              o.createElement(d.A, { bOverlapping: !0 }),
              o.createElement(
                "div",
                { className: (0, u.A)(_().ComicContainer) },
                o.createElement(b, {
                  onIndexChanged: (e) => {
                    document.title = e
                      ? (0, i.we)(this.state.pageTitlePattern, e)
                      : (0, i.we)(`${this.state.pageTitlePattern}_cover`);
                  },
                  comicImageURLs: this.state.comicImageURLs,
                }),
                o.createElement(g.K, null),
              ),
            ),
          );
        }
      };
      I = (0, r.Cg)([c.PA], I);
      const f = I;
    },
  },
]);
