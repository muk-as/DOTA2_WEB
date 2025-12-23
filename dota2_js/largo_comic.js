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
    99798: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { COMIC_LANGUAGE: () => w, default: () => C });
      var r = a(85608),
        n = a(4248),
        l = a(89506),
        s = a(68613),
        o = a(68446),
        i = a(7552),
        c = a(73202),
        m = a(21384),
        d = a(88351),
        A = a(47202),
        u = a(36305),
        g = a(45237),
        _ = a(55651),
        p = a(13765),
        h = a.n(p),
        L = a(85286),
        E = a.n(L);
      const w = (() => {
          switch (l.r.LANGUAGE) {
            case "brazilian":
              return "brazilian";
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
        b = ({ onIndexChanged: e, comicImageURLs: t }) => {
          const [a, r] = (0, i.useState)(void 0),
            [n, l] = (0, i.useState)(
              Array.from({ length: t.length }, () => new Image()),
            ),
            o = (0, d.zy)(),
            c = (0, i.useCallback)(() => {
              r((e) => {
                if ((void 0 === e && (e = 0), e + 1 >= t.length)) return e;
                const a = e + 1;
                return window.history.pushState({}, "", `#p=${a}`), a;
              });
            }, [t]);
          (0, i.useEffect)(() => {
            const e = (e) => {
              ("Space" !== e.code && " " !== e.key) ||
                (e.preventDefault(), c());
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [c]),
            (0, i.useEffect)(() => {
              let e = 0;
              const t = new URLSearchParams(o.hash.substring(1)).get("p");
              null !== t && (e = parseInt(t)), r(e);
            }, [o]),
            (0, i.useEffect)(() => {
              if (void 0 === a) return;
              for (let e = 1; e <= 5; e++) {
                const r = a + e;
                if (r >= t.length) break;
                let s = n;
                s[r].src || ((s[r].src = t[r]), l(s));
              }
            }, [a, n, t]),
            (0, i.useEffect)(() => {
              e?.(a);
            }, [e, a]);
          const A = !a,
            u = a + 1 >= t.length;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: h().ComicViewer },
              i.createElement("img", {
                src:
                  void 0 !== a
                    ? t[a]
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                onClick: (e) => {
                  e.preventDefault(), c();
                },
                onMouseUp: (e) => {
                  0 == e.button && e.preventDefault();
                },
              }),
              i.createElement("div", { className: h().ComicViewerBorder }),
            ),
            i.createElement(
              "div",
              {
                className: (0, m.A)(
                  h().ComicViewerHelpText,
                  h().BodyFont,
                  h().BodyLarge,
                  u && h().Disabled,
                ),
              },
              (0, s.we)("#comic_help_text"),
            ),
            i.createElement(
              g.N_,
              {
                className: (0, m.A)(
                  h().ReturnLink,
                  h().LabelFont,
                  h().LabelMedium,
                  A && h().Disabled,
                ),
                to: _.J.largo_comic(),
              },
              (0, s.we)("#comic_return_button"),
            ),
          );
        };
      let I = class extends i.Component {
        constructor(e) {
          super(e);
          this.state = {
            pageTitlePattern: "#LargoComic_title",
            comicImageURLs: Array.from(Array(53).keys()).map((e) => {
              const t = e.toString().padStart(3, "0");
              return `${n.TS.IMG_URL}comics/largo/${w}/${t}.webp`;
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
          return i.createElement(
            "div",
            { id: "LargoComic", className: h().LargoComic },
            i.createElement(c.mg, null),
            i.createElement(
              "div",
              { className: (0, m.A)(h().PageContainer) },
              i.createElement("div", {
                className: (0, m.A)(h().PageBackground),
              }),
              i.createElement(A.A, { bOverlapping: !0 }),
              i.createElement(
                "div",
                { className: (0, m.A)(h().ComicContainer) },
                i.createElement(b, {
                  onIndexChanged: (e) => {
                    document.title = e
                      ? (0, s.we)(this.state.pageTitlePattern, e)
                      : (0, s.we)(`${this.state.pageTitlePattern}_cover`);
                  },
                  comicImageURLs: this.state.comicImageURLs,
                }),
                i.createElement(u.K, null),
              ),
            ),
          );
        }
      };
      I = (0, r.Cg)([o.PA], I);
      const C = I;
    },
  },
]);
