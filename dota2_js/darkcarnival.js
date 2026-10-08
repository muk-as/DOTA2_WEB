// 57237.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [57237, 79630],
    {
      83695: (y, N, t) => {
        "use strict";
        t.d(N, { U: () => g });
        var e = t(69500),
          c = t(11417),
          i = t.n(c),
          I = t(2095);
        const g = () =>
            (0, e.jsx)("div", {
              className: i().RightArrow,
              style: {
                backgroundImage: `url( ${I.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          x = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      82237: (y, N, t) => {
        "use strict";
        t.d(N, { V: () => x });
        var e = t(8305),
          c = t(3878),
          i = t(7552),
          I = t(45488);
        function g(p, r) {
          (0, i.useEffect)(() => {
            I.o.RequestBPPrices([p]);
          }, [p]);
          const P = I.o.GetBPPrice(p);
          return P && P != "undefined" ? P : r;
        }
        const x = (0, c.PA)((p) => {
          const r = g(p.nItemDefID, p.strDefaultPrice);
          return (0, e.Wn)(p.strLocString, r);
        });
      },
      57237: (y, N, t) => {
        "use strict";
        t.r(N),
          t.d(N, {
            DownloadIcon: () => A,
            InnateIconSmall: () => _,
            PlayIcon: () => f,
            default: () => O,
          });
        var e = t(69500),
          c = t(2095),
          i = t(8305),
          I = t(3878),
          g = t(7552),
          x = t(73202),
          p = t(2130),
          r = t(15001),
          P = t(63177),
          w = t(42616),
          W = t(38753),
          a = t.n(W),
          j = t(32389),
          U = t(71010),
          h = t(45237),
          G = t(83695),
          F = t(11778),
          S = t(82237),
          V = t(7166),
          K = t(79630),
          H = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          J = (n, o, l, d) => {
            for (
              var m = d > 1 ? void 0 : d ? R(o, l) : o, T = n.length - 1, E;
              T >= 0;
              T--
            )
              (E = n[T]) && (m = (d ? E(o, l, m) : E(m)) || m);
            return d && m && H(o, l, m), m;
          };
        const f = () =>
            (0, e.jsx)("div", {
              className: a().ControlIcon,
              style: {
                backgroundImage: `url( ${c.r.IMG_URL}/icons/play.svg )`,
              },
            }),
          A = () =>
            (0, e.jsx)("div", {
              className: a().ControlIcon,
              style: {
                backgroundImage: `url( ${c.r.IMG_URL}/icons/download.svg )`,
              },
            }),
          _ = () =>
            (0, e.jsx)("div", {
              className: (0, r.A)(a().InnateIconSmall, a().ControlIcon),
              style: {
                backgroundImage: `url( ${c.r.IMG_URL}/icons/innate_icon_small.svg )`,
              },
            }),
          u = "DarkCarnival";
        function k() {
          return !1;
        }
        const s = (n) => {
            const o = (0, g.useRef)(void 0);
            return n.video
              ? (0, e.jsx)("video", {
                  className: (0, r.A)(n.additionalClassName),
                  ref: o,
                  muted: !0,
                  autoPlay: !0,
                  preload: "auto",
                  loop: !0,
                  playsInline: !0,
                  poster: `${c.r.IMG_URL}${n.image}`,
                  children: (0, e.jsx)("source", {
                    type: "video/webm",
                    src: `${c.r.VIDEO_URL}${n.video}`,
                  }),
                })
              : (0, e.jsx)("img", {
                  className: (0, r.A)(n.additionalClassName),
                  src: `${c.r.IMG_URL}/` + n.image,
                });
          },
          v = [
            { heroname: "drow" },
            { heroname: "undying" },
            { heroname: "qop" },
            { heroname: "arc_warden", style: a().ArcWarden },
            { heroname: "troll_warlord" },
            { heroname: "death_prophet" },
            { heroname: "phantom_lancer", style: a().PhantomLancer },
            { heroname: "dawnbreaker" },
            { heroname: "templar_assassin", style: a().TemplarAssassin },
            { heroname: "monkey_king", style: a().MonkeyKing },
            { heroname: "pudge" },
            { heroname: "primal_beast", style: a().PrimalBeast },
            { heroname: "mirana" },
            { heroname: "dark_willow" },
            { heroname: "io" },
          ],
          C = ({
            index: n,
            video: o,
            name: l,
            heroname: d,
            autoplay: m,
            onSlideIn: T,
            style: E,
          }) => {
            const M = (0, g.useContext)(j.Yc),
              B = (0, g.useRef)(void 0);
            return (
              (0, g.useEffect)(() => {
                function z() {
                  B && B.current && M.state.currentSlide == n
                    ? B.current.play()
                    : B && B.current && B.current.pause(),
                    M.state.currentSlide == n && T(l, d);
                }
                return M.subscribe(z), () => M.unsubscribe(z);
              }, [M, n, l, d, T]),
              (0, e.jsx)("div", {
                className: a().SlideContainer,
                children: k()
                  ? (0, e.jsx)("img", {
                      className: a().TreasureVideo,
                      src: `${c.r.VIDEO_URL}/darkcarnival/treasure/${o}.png`,
                    })
                  : (0, e.jsxs)("video", {
                      ref: B,
                      className: (0, r.A)(a().TreasureVideo, E || ""),
                      muted: !0,
                      autoPlay: m,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${c.r.VIDEO_URL}/darkcarnival/treasure/${o}.png`,
                      children: [
                        (0, e.jsx)("source", {
                          type: "video/webm",
                          src: `${c.r.VIDEO_URL}/darkcarnival/treasure/${o}.webm`,
                        }),
                        (0, e.jsx)("source", {
                          type: 'video/mp4; codecs="hvc1"',
                          src: `${c.r.VIDEO_URL}/darkcarnival/treasure/${o}.mov`,
                        }),
                      ],
                    }),
              })
            );
          },
          b = (n) =>
            (0, e.jsxs)("div", {
              className: n
                ? (0, r.A)(a().SectionDivider, n)
                : (0, r.A)(a().SectionDivider),
              children: [
                (0, e.jsx)("div", { className: a().Pattern }),
                (0, e.jsx)("div", { className: a().Overlay }),
              ],
            }),
          D = () =>
            (0, e.jsxs)("div", {
              className: a().SubsectionDivider,
              children: [
                (0, e.jsx)("div", { className: a().TopDash }),
                (0, e.jsx)("div", { className: a().Background }),
              ],
            }),
          L = (n) => {
            const o = (0, g.useRef)(void 0);
            return (0, e.jsxs)("div", {
              className: (0, r.A)(
                a().Automaton,
                n.additionalClassName,
                n.isFlipped && a().IsFlipped,
              ),
              children: [
                (0, e.jsx)("div", {
                  className: a().AutomatonBackground,
                  children: (0, e.jsx)(s, {
                    additionalClassName: a().AutomatonBackgroundImage,
                    image: "darkcarnival/backgrounds/automaton_background.jpg",
                  }),
                }),
                (0, e.jsx)("div", { className: a().AutomatonBackgroundBorder }),
                (0, e.jsx)("div", {
                  className: a().AutomatonPortraitContainer,
                  children: (0, e.jsxs)("video", {
                    className: (0, r.A)(a().AutomatonPortrait),
                    ref: o,
                    muted: !0,
                    autoPlay: !0,
                    preload: "auto",
                    loop: !0,
                    playsInline: !0,
                    poster: `${c.r.IMG_URL}/darkcarnival/automatons/${n.idlePoster}`,
                    children: [
                      (0, e.jsx)("source", {
                        type: "video/webm",
                        src: `${c.r.VIDEO_URL}/darkcarnival/automatons/${n.idleVideo}.webm`,
                      }),
                      (0, e.jsx)("source", {
                        type: 'video/mp4; codecs="hvc1"',
                        src: `${c.r.VIDEO_URL}/darkcarnival/automatons/${n.idleVideo}.mov`,
                      }),
                    ],
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: a().AutomatonInformation,
                  children: [
                    (0, e.jsxs)("div", {
                      className: a().AutomatonNameContainer,
                      children: [
                        (0, e.jsx)(s, {
                          additionalClassName:
                            a().AutomatonHeroPortraitLandscape,
                          image: `darkcarnival/automatons/${n.heroPortraitLandscape}`,
                        }),
                        (0, e.jsxs)("div", {
                          className: a().AutomatonNameContents,
                          children: [
                            (0, e.jsx)("p", {
                              className: (0, r.A)(
                                a().AutomatonLabel,
                                a().LabelFont,
                                a().LabelMedium,
                              ),
                              children: (0, i.Wn)(
                                "#darkcarnival_automoton_title",
                              ),
                            }),
                            (0, e.jsx)("p", {
                              className: (0, r.A)(
                                a().AutomatonName,
                                a().TitleFont,
                                a().TitleMedium,
                              ),
                              children: (0, i.Wn)(n.name),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("p", {
                      className: (0, r.A)(
                        a().AutomatonDescription,
                        a().DisplayFont,
                        a().DisplayExtraSmall,
                      ),
                      children: (0, i.Wn)(n.description),
                    }),
                    (0, e.jsxs)("div", {
                      className: a().AutomatonHeroAbilityImagesContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className:
                            a().AutomatonHeroPortraitLandscapeIconContainer,
                          children: (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroPortraitIcon,
                            image: `darkcarnival/automatons/${n.heroPortraitIcon}`,
                          }),
                        }),
                        n.abilityIcon1 &&
                          (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroAbilityImage,
                            image: `darkcarnival/automatons/${n.abilityIcon1}`,
                          }),
                        n.abilityIcon2 &&
                          (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroAbilityImage,
                            image: `darkcarnival/automatons/${n.abilityIcon2}`,
                          }),
                        n.abilityIcon3 &&
                          (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroAbilityImage,
                            image: `darkcarnival/automatons/${n.abilityIcon3}`,
                          }),
                        n.abilityIcon4 &&
                          (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroAbilityImage,
                            image: `darkcarnival/automatons/${n.abilityIcon4}`,
                          }),
                        n.abilityIcon5 &&
                          (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroAbilityImage,
                            image: `darkcarnival/automatons/${n.abilityIcon5}`,
                          }),
                        n.abilityIcon6 &&
                          (0, e.jsx)(s, {
                            additionalClassName: a().AutomatonHeroAbilityImage,
                            image: `darkcarnival/automatons/${n.abilityIcon6}`,
                          }),
                      ],
                    }),
                    (0, e.jsx)(s, {
                      additionalClassName: a().AutomatonGameplayAsset,
                      image: `darkcarnival/automatons/${n.gameplayVideoPoster}`,
                      video: `darkcarnival/automatons/${n.gameplayVideo}`,
                    }),
                    (0, e.jsxs)("div", {
                      className: a().AutomatonPriceInformation,
                      children: [
                        (0, e.jsx)("p", {
                          className: (0, r.A)(
                            a().DisplayFont,
                            a().DisplayMedium,
                            a().GoldTextColor,
                          ),
                          children: (0, e.jsx)(S.V, {
                            strLocString: "#darkcarnival_price",
                            nItemDefID: n.nItemID,
                            strDefaultPrice: n.strDefaultPriceUSD
                              ? n.strDefaultPriceUSD
                              : "$14.99 USD",
                          }),
                        }),
                        (0, e.jsx)("p", {
                          className: (0, r.A)(
                            a().BodyFont,
                            a().BodyMedium,
                            a().LightGrayText,
                          ),
                          children: (0, i.Wn)(
                            "#darkcarnival_discount_available",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        let O = class extends g.Component {
          videoRef = g.createRef();
          headerSectionRef = g.createRef();
          overworldSectionRef = g.createRef();
          contentSectionRef = g.createRef();
          featuresSectionRef = g.createRef();
          constructor(n) {
            super(n),
              (this.state = {
                treasureName: `#darkcarnival_treasure_${v[v.length - 1].heroname}_set`,
                heroName: `#darkcarnival_treasure_${v[v.length - 1].heroname}`,
                bPlayingVideo: !1,
              });
          }
          setPlayingVideo(n) {
            this.setState({ bPlayingVideo: n }),
              n ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          convertAbilityDesc(n) {
            if (!n) return null;
            let o = n.desc_loc;
            return (
              n.special_values.forEach((l) => {
                let d =
                  l.values_float.length > 0 ? (0, U.F)(l.values_float[0]) : "0";
                (o = o.replace("%" + l.name + "%", d)),
                  (o = o.replace("%" + l.name.toLowerCase() + "%", d));
              }),
              (o = o.replace(/\%\%/g, "%")),
              (o = o.replace(/<h2>/g, "<b>")),
              (o = o.replace(/<\/h2>/g, "</b>")),
              (o = o.replace(/<h1>/g, "<b>")),
              (o = o.replace(
                /<\/h1>/g,
                `</b>

`,
              )),
              (0, i.Wn)(o)
            );
          }
          render() {
            const n =
              c.r.LANGUAGE == "schinese" || c.r.LANGUAGE == "tchinese"
                ? "ringmaster_trailer_schinese"
                : "ringmaster_trailer_english";
            let o = (0, p.wwZ)((0, p.sfN)(c.r.LANGUAGE));
            o === "zh-cn" ? (o = "zh-Hans") : o === "zh-tw" && (o = "zh-Hant");
            let l = "darkcarnival_logo_en";
            return (
              c.r.LANGUAGE == "schinese" && (l = "darkcarnival_logo_cn"),
              (0, e.jsxs)("div", {
                id: u,
                className: a().DarkCarnival,
                children: [
                  (0, e.jsx)(x.mg, {
                    children: (0, e.jsx)("title", {
                      children: (0, i.Wn)("#darkcarnival_title"),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, r.A)(a().PageContainer),
                    children: [
                      (0, e.jsx)(P.A, { bOverlapping: !0 }),
                      (0, e.jsxs)("div", {
                        ref: this.headerSectionRef,
                        className: (0, r.A)(
                          a().WebsiteSection,
                          a().HeaderSection,
                        ),
                        children: [
                          (0, e.jsx)(s, {
                            image:
                              "darkcarnival/header/dark_carnival_header_background.jpg",
                            video:
                              "darkcarnival/dark_carnival_header_background.mp4",
                            additionalClassName: a().HeaderImage,
                          }),
                          (0, e.jsx)("div", { className: a().HeaderShadow }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSectionInner,
                            children: [
                              (0, e.jsx)(s, {
                                additionalClassName: a().Gears,
                                image: "darkcarnival/header/gears.png",
                              }),
                              (0, e.jsx)(s, {
                                additionalClassName: a().Clouds,
                                image: "darkcarnival/header/clouds.png",
                              }),
                              (0, e.jsx)("img", {
                                className: a().LogoImage,
                                src: `${c.r.IMG_URL}/darkcarnival/logos/${l}.png`,
                              }),
                              (0, e.jsx)("div", {
                                className: a().HeaderTextSection,
                                children: (0, e.jsx)("p", {
                                  className: (0, r.A)(
                                    a().WebsiteIntro,
                                    a().DisplayFont,
                                    a().DisplayLarge,
                                    a().LightGrayText,
                                  ),
                                  children: (0, i.Wn)(
                                    "#darkcarnival_website_introduction",
                                  ),
                                }),
                              }),
                              (0, e.jsx)(s, {
                                additionalClassName: a().EventVideo,
                                image:
                                  "darkcarnival/overworld/dark_carnival_overworld_poster.jpg",
                                video: "darkcarnival/dc_event_reel.webm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      b(),
                      " ",
                      (0, e.jsxs)("div", {
                        ref: this.overworldSectionRef,
                        className: (0, r.A)(
                          a().WebsiteSection,
                          a().OverworldSection,
                        ),
                        children: [
                          (0, e.jsx)(s, {
                            image: "darkcarnival/header/star.png",
                            additionalClassName: a().Star3,
                          }),
                          (0, e.jsx)(s, {
                            image: "darkcarnival/header/star.png",
                            additionalClassName: a().Star2,
                          }),
                          (0, e.jsx)(s, {
                            image: "darkcarnival/header/star.png",
                            additionalClassName: a().Star1,
                          }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSectionInner,
                            children: [
                              (0, e.jsxs)("div", {
                                className: a().WebsiteSectionHeader,
                                children: [
                                  (0, e.jsx)("h2", {
                                    className: (0, r.A)(
                                      a().SectionHeaderLabel,
                                      a().TitleFont,
                                      a().TitleExtraLarge,
                                      a().ChromeTextColor,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_overworld_title",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().SectionDescriptionLabel,
                                      a().DisplayFont,
                                      a().DisplayLarge,
                                      a().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_overworld_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: (0, r.A)(a().ComicWrapper),
                                children: (0, e.jsxs)("div", {
                                  className: (0, r.A)(a().ComicContainer),
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: a().ComicContainerBackground,
                                    }),
                                    (0, e.jsx)("div", {
                                      className: a().ComicContainerTexture,
                                    }),
                                    (0, e.jsx)("div", {
                                      className: a().ComicContainerBorder,
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: (0, r.A)(
                                        a().ActionTextImageBlock,
                                      ),
                                      children: [
                                        (0, e.jsx)("img", {
                                          src: `${V.TS.IMG_URL}comics/midnight_run/${K.COMIC_LANGUAGE}/000.webp`,
                                          className: (0, r.A)(
                                            a().ComicBookImage,
                                            a().ImageWithBorderAndShadow,
                                          ),
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: a().TextBlock,
                                          children: [
                                            (0, e.jsx)("p", {
                                              className: (0, r.A)(
                                                a().BlockTitle,
                                                a().LabelFont,
                                                a().LabelExtraLarge,
                                                a().GoldTextColor,
                                              ),
                                              children: (0, i.Wn)(
                                                "#darkcarnival_comic_header",
                                              ),
                                            }),
                                            (0, e.jsx)("p", {
                                              className: (0, r.A)(
                                                a().BlockDescription,
                                                a().BodyFont,
                                                a().BodyLarge,
                                                a().LightGrayText,
                                              ),
                                              children: (0, i.Wn)(
                                                "#darkcarnival_comic_description",
                                              ),
                                            }),
                                            (0, e.jsx)(h.N_, {
                                              to: F.J.darkcarnivalcomic(),
                                              target: "_blank",
                                              children: (0, e.jsxs)("div", {
                                                className: a().StandardButton,
                                                children: [
                                                  (0, e.jsx)("div", {
                                                    className: a().ButtonText,
                                                    children: (0, i.Wn)(
                                                      "#comics_view_comic",
                                                    ),
                                                  }),
                                                  (0, e.jsx)(G.U, {}),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, e.jsx)(s, {
                                additionalClassName: a().OverworldImage,
                                image:
                                  "darkcarnival/overworld/dark_carnival_train.png",
                              }),
                              (0, e.jsx)("div", {
                                className: a().TextSection,
                                children: (0, e.jsx)("p", {
                                  className: (0, r.A)(
                                    a().BlockTitle,
                                    a().TitleFont,
                                    a().TitleLarge,
                                    a().GoldTextColor,
                                  ),
                                  children: (0, i.Wn)(
                                    "#darkcarnival_howitworks_title",
                                  ),
                                }),
                              }),
                              (0, e.jsxs)("div", {
                                className: a().Grid_2,
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: (0, r.A)(
                                      a().TextImageBlockVertical,
                                    ),
                                    children: [
                                      (0, e.jsx)(s, {
                                        image:
                                          "darkcarnival/overworld/howitworks_heroes.jpg",
                                        additionalClassName:
                                          a().ImageWithBorderAndShadow,
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: a().TextBlock,
                                        children: [
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockTitle,
                                              a().DisplayFont,
                                              a().DisplayLarge,
                                              a().WhiteText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_howitworks_earn_tokens_title",
                                            ),
                                          }),
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockDescription,
                                              a().BodyFont,
                                              a().BodyLarge,
                                              a().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_howitworks_earn_tokens_description",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: (0, r.A)(
                                      a().TextImageBlockVertical,
                                    ),
                                    children: [
                                      (0, e.jsx)(s, {
                                        image:
                                          "darkcarnival/overworld/howitworks_overworld.jpg",
                                        additionalClassName:
                                          a().ImageWithBorderAndShadow,
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: a().TextBlock,
                                        children: [
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockTitle,
                                              a().DisplayFont,
                                              a().DisplayLarge,
                                              a().WhiteText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_howitworks_progress_the_story_title",
                                            ),
                                          }),
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockDescription,
                                              a().BodyFont,
                                              a().BodyLarge,
                                              a().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_howitworks_progress_the_story_description",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              D(),
                              (0, e.jsx)("div", {
                                className: (0, r.A)(
                                  a().TextSection,
                                  a().RewardTypesHeader,
                                ),
                                children: (0, e.jsx)("p", {
                                  className: (0, r.A)(
                                    a().BlockTitle,
                                    a().TitleFont,
                                    a().TitleLarge,
                                    a().GoldTextColor,
                                  ),
                                  children: (0, i.Wn)(
                                    "#darkcarnival_rewards_title",
                                  ),
                                }),
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, r.A)(
                                  a().Grid_3,
                                  a().RewardTypes,
                                ),
                                children: [
                                  (0, e.jsx)(s, {
                                    image:
                                      "darkcarnival/backgrounds/reward_types_background.png",
                                    additionalClassName:
                                      a().RewardTypesPackBackground,
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TextImageBlockVertical,
                                    children: [
                                      (0, e.jsx)(s, {
                                        image:
                                          "darkcarnival/overworld/reward_treasure.png",
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: a().TextBlock,
                                        children: [
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockTitle,
                                              a().LabelFont,
                                              a().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_rewards_treasures_title",
                                            ),
                                          }),
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockDescription,
                                              a().BodyFont,
                                              a().BodyLarge,
                                              a().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_rewards_treasures_description",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TextImageBlockVertical,
                                    children: [
                                      (0, e.jsx)(s, {
                                        image:
                                          "darkcarnival/overworld/reward_discount_coin.png",
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: a().TextBlock,
                                        children: [
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockTitle,
                                              a().LabelFont,
                                              a().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_rewards_coins_title",
                                            ),
                                          }),
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockDescription,
                                              a().BodyFont,
                                              a().BodyLarge,
                                              a().LightGrayText,
                                            ),
                                            children: (0, e.jsx)(S.V, {
                                              strLocString:
                                                "#darkcarnival_rewards_coin_description",
                                              nItemDefID: 34472,
                                              strDefaultPrice: "$7.99 USD",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TextImageBlockVertical,
                                    children: [
                                      (0, e.jsx)(s, {
                                        image:
                                          "darkcarnival/overworld/reward_candy.png",
                                      }),
                                      (0, e.jsxs)("div", {
                                        className: a().TextBlock,
                                        children: [
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockTitle,
                                              a().LabelFont,
                                              a().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_rewards_candy_title",
                                            ),
                                          }),
                                          (0, e.jsx)("p", {
                                            className: (0, r.A)(
                                              a().BlockDescription,
                                              a().BodyFont,
                                              a().BodyLarge,
                                              a().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#darkcarnival_rewards_candy_description",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, r.A)(
                                  a().TextImageBlockHorizontal,
                                  a().WideImage,
                                  a().HeroCosmetics,
                                ),
                                children: [
                                  (0, e.jsx)(s, {
                                    additionalClassName: a().MinigamesImage,
                                    image:
                                      "darkcarnival/overworld/overworld_sets.png",
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TextBlock,
                                    children: [
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockTitle,
                                          a().LabelFont,
                                          a().LabelExtraLarge,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_rewards_cosmetics_title",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockDescription,
                                          a().BodyFont,
                                          a().BodyLarge,
                                          a().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_rewards_cosmetics_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, r.A)(
                                  a().TextImageBlockHorizontal,
                                  a().WideImage,
                                  a().CarnivalGoodies,
                                ),
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: a().TextBlock,
                                    children: [
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockTitle,
                                          a().LabelFont,
                                          a().LabelExtraLarge,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_rewards_goodies_title",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockDescription,
                                          a().BodyFont,
                                          a().BodyLarge,
                                          a().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_rewards_goodies_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)(s, {
                                    additionalClassName: a().MinigamesImage,
                                    image: "darkcarnival/overworld/goodies.png",
                                  }),
                                ],
                              }),
                              D(),
                              (0, e.jsx)("p", {
                                className: (0, r.A)(
                                  a().BlockTitle,
                                  a().TitleFont,
                                  a().TitleLarge,
                                  a().GoldTextColor,
                                ),
                                children: (0, i.Wn)(
                                  "#darkcarnival_secret_room_pack_title",
                                ),
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, r.A)(
                                  a().TextImageBlockHorizontal,
                                  a().SecretRoomPack,
                                ),
                                children: [
                                  (0, e.jsx)(s, {
                                    image:
                                      "darkcarnival/backgrounds/secret_room_pack_floor.png",
                                    additionalClassName:
                                      a().SecretRoomPackBackground,
                                  }),
                                  (0, e.jsx)(s, {
                                    image:
                                      "darkcarnival/overworld/secret_room_pack.png",
                                    additionalClassName:
                                      a().SecretRoomPackImage,
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TextBlock,
                                    children: [
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockTitle,
                                          a().DisplayFont,
                                          a().DisplayMedium,
                                          a().WhiteText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_secret_room_pack_introduction",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockDescription,
                                          a().BodyFont,
                                          a().BodyLarge,
                                          a().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_secret_room_pack_description",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().PriceFont,
                                          a().DisplayFont,
                                          a().DisplayLarge,
                                          a().GoldTextColor,
                                        ),
                                        children: (0, e.jsx)(S.V, {
                                          strLocString: "#darkcarnival_price",
                                          nItemDefID: 34452,
                                          strDefaultPrice: "$14.99 USD",
                                        }),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().DiscountFont,
                                          a().BodyFont,
                                          a().BodySmall,
                                          a().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_discount_available",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      b(),
                      " ",
                      (0, e.jsxs)("div", {
                        ref: this.contentSectionRef,
                        className: (0, r.A)(
                          a().WebsiteSection,
                          a().ContentSection,
                        ),
                        children: [
                          (0, e.jsx)(s, {
                            image:
                              "darkcarnival/backgrounds/clouds_background.png",
                            additionalClassName: a().FinalBackground,
                          }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSectionInner,
                            children: [
                              (0, e.jsxs)("div", {
                                className: a().WebsiteSectionHeader,
                                children: [
                                  (0, e.jsx)("h2", {
                                    className: (0, r.A)(
                                      a().SectionHeaderLabel,
                                      a().TitleFont,
                                      a().TitleExtraLarge,
                                      a().ChromeTextColor,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_content_title",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().SectionDescriptionLabel,
                                      a().DisplayFont,
                                      a().DisplayLarge,
                                      a().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_content_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              D(),
                              (0, e.jsxs)("div", {
                                className: a().TextSection,
                                children: [
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().BlockTitle,
                                      a().TitleFont,
                                      a().TitleLarge,
                                      a().GoldTextColor,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_automotons_title",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().BlockDescription,
                                      a().DisplayFont,
                                      a().DisplaySmall,
                                      a().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_automotons_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, e.jsx)(L, {
                                additionalClassName: a().Axe,
                                nItemID: 31367,
                                name: "#darkcarnival_automoton_axe_heroname",
                                description:
                                  "#darkcarnival_automoton_axe_description",
                                heroPortraitLandscape:
                                  "axe/npc_dota_hero_axe_carnival.png",
                                idlePoster: "axe/axe_automaton_idle_poster.png",
                                idleVideo: "axe_automaton_idle",
                                heroPortraitIcon:
                                  "axe/npc_dota_hero_axe_carnival_icon.png",
                                gameplayVideoPoster:
                                  "axe/axe_automaton_gameplay_poster.jpg",
                                gameplayVideo: "axe_automaton_gameplay.mp4",
                                abilityIcon1:
                                  "axe/axe_berserkers_call_dark_carnival.png",
                                abilityIcon2:
                                  "axe/axe_battle_hunger_dark_carnival.png",
                                abilityIcon3:
                                  "axe/axe_counter_helix_dark_carnival.png",
                                abilityIcon4:
                                  "axe/axe_culling_blade_dark_carnival.png",
                              }),
                              (0, e.jsx)(L, {
                                additionalClassName: a().Oracle,
                                nItemID: 31357,
                                name: "#darkcarnival_automoton_oracle_heroname",
                                description:
                                  "#darkcarnival_automoton_oracle_description",
                                heroPortraitLandscape:
                                  "oracle/npc_dota_hero_oracle_carnival.png",
                                idlePoster:
                                  "oracle/oracle_automaton_idle_poster.png",
                                idleVideo: "oracle_automaton_idle",
                                heroPortraitIcon:
                                  "oracle/npc_dota_hero_oracle_carnival_icon.png",
                                gameplayVideoPoster:
                                  "oracle/oracle_automaton_gameplay_poster.jpg",
                                gameplayVideo: "oracle_automaton_gameplay.mp4",
                                abilityIcon1:
                                  "oracle/oracle_fortunes_end_dark_carnival.png",
                                abilityIcon2:
                                  "oracle/oracle_fates_edict_dark_carnival.png",
                                abilityIcon3:
                                  "oracle/oracle_purifying_flames_carnival.png",
                                abilityIcon4:
                                  "oracle/oracle_false_promise_dark_carnival.png",
                                abilityIcon5:
                                  "oracle/oracle_rain_of_destiny_dark_carnival.png",
                                abilityIcon6:
                                  "oracle/oracle_diviners_deck_dark_carnival.png",
                                isFlipped: !0,
                              }),
                              (0, e.jsx)(L, {
                                additionalClassName: a().LegionCommander,
                                nItemID: 36191,
                                name: "#darkcarnival_automoton_legion_heroname",
                                description:
                                  "#darkcarnival_automoton_legion_description",
                                heroPortraitLandscape:
                                  "legion_commander/npc_dota_hero_legion_commander_carnival.png",
                                idlePoster:
                                  "legion_commander/legion_commander_automaton_idle_poster.png",
                                idleVideo: "legion_commander_automaton_idle",
                                heroPortraitIcon:
                                  "legion_commander/npc_dota_hero_legion_commander_carnival_icon.png",
                                gameplayVideoPoster:
                                  "legion_commander/legion_commander_automaton_gameplay_poster.jpg",
                                gameplayVideo:
                                  "legion_commander_automaton_gameplay.mp4",
                                abilityIcon1:
                                  "legion_commander/legion_commander_overwhelming_odds.png",
                                abilityIcon2:
                                  "legion_commander/legion_commander_outfight_them.png",
                                abilityIcon3:
                                  "legion_commander/legion_commander_moment_of_courage.png",
                                abilityIcon4:
                                  "legion_commander/legion_commander_duel.png",
                              }),
                              (0, e.jsx)(L, {
                                additionalClassName: a().Morphling,
                                nItemID: 36193,
                                name: "#darkcarnival_automoton_morphling_heroname",
                                description:
                                  "#darkcarnival_automoton_morphling_description",
                                heroPortraitLandscape:
                                  "morphling/npc_dota_hero_morphling_carnival.png",
                                idlePoster:
                                  "morphling/morphling_automaton_idle_poster.png",
                                idleVideo: "morphling_automaton_idle",
                                heroPortraitIcon:
                                  "morphling/npc_dota_hero_morphling_carnival_icon.png",
                                gameplayVideoPoster:
                                  "morphling/morphling_automaton_gameplay_poster.jpg",
                                gameplayVideo:
                                  "morphling_automaton_gameplay.mp4",
                                abilityIcon1:
                                  "morphling/morphling_waveform.png",
                                abilityIcon2:
                                  "morphling/morphling_adaptive_strike_dark_carnival.png",
                                abilityIcon3:
                                  "morphling/morphling_morph_agi_dark_carnival.png",
                                abilityIcon4:
                                  "morphling/morphling_morph_str_dark_carnival.png",
                                abilityIcon5:
                                  "morphling/morphling_replicate_carnival.png",
                                isFlipped: !0,
                              }),
                              (0, e.jsx)(L, {
                                additionalClassName: a().Bristleback,
                                nItemID: 36214,
                                name: "#darkcarnival_automoton_bristleback_heroname",
                                description:
                                  "#darkcarnival_automoton_bristleback_description",
                                heroPortraitLandscape:
                                  "bristleback/npc_dota_hero_bristleback_carnival.png",
                                idlePoster:
                                  "bristleback/bristleback_automaton_idle_poster.png",
                                idleVideo: "bristleback_automaton_idle",
                                heroPortraitIcon:
                                  "bristleback/npc_dota_hero_bristleback_carnival_icon.png",
                                gameplayVideoPoster:
                                  "bristleback/bristleback_automaton_gameplay_poster.jpg",
                                gameplayVideo:
                                  "bristleback_automaton_gameplay.mp4",
                                abilityIcon1:
                                  "bristleback/bristleback_viscous_nasal_goo.png",
                                abilityIcon2:
                                  "bristleback/bristleback_quill_spray.png",
                                abilityIcon3:
                                  "bristleback/bristleback_bristleback.png",
                                abilityIcon4:
                                  "bristleback/bristleback_warpath.png",
                                abilityIcon5:
                                  "bristleback/bristleback_hairball.png",
                              }),
                              D(),
                              (0, e.jsx)(s, {
                                additionalClassName: a().SubSectionDividerIcon,
                                image: "darkcarnival/content/icon_treasure.png",
                              }),
                              (0, e.jsxs)("div", {
                                className: a().TextSection,
                                children: [
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().BlockTitle,
                                      a().TitleFont,
                                      a().TitleLarge,
                                      a().GoldTextColor,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_treasure_title",
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().BlockDescription,
                                      a().DisplayFont,
                                      a().DisplaySmall,
                                      a().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#darkcarnival_treasure_description",
                                    ),
                                  }),
                                ],
                              }),
                              (0, e.jsxs)(j.gi, {
                                className: a().TreasureCarousel,
                                naturalSlideWidth: 600,
                                naturalSlideHeight: 960,
                                totalSlides: v.length,
                                currentSlide: v.length - 1,
                                infinite: !0,
                                touchEnabled: !0,
                                dragEnabled: !1,
                                children: [
                                  (0, e.jsx)(s, {
                                    image:
                                      "darkcarnival/backgrounds/carousel_floor.png",
                                    additionalClassName: a().CarouselFloor,
                                  }),
                                  (0, e.jsx)(j.Ap, {
                                    className: a().TreasureSlider,
                                    children: v.map((d, m) =>
                                      (0, e.jsx)(
                                        j.q7,
                                        {
                                          index: m,
                                          className: a().TreasureSlide,
                                          innerClassName:
                                            a().TreasureInnerSlide,
                                          classNameHidden:
                                            a().TreasureSlideHidden,
                                          children: (0, e.jsx)(C, {
                                            index: m,
                                            video: `set_${d.heroname}`,
                                            name: `#darkcarnival_treasure_${d.heroname}_set`,
                                            heroname: `#darkcarnival_treasure_${d.heroname}`,
                                            autoplay: !0,
                                            onSlideIn: (T, E) => {
                                              this.setState({
                                                treasureName: T,
                                                heroName: E,
                                              });
                                            },
                                            style: d.style,
                                          }),
                                        },
                                        `treasureSliders_${m}`,
                                      ),
                                    ),
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().HeroName,
                                      a().LabelFont,
                                      a().LabelSmall,
                                    ),
                                    children: (0, i.Wn)(this.state.heroName),
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, r.A)(
                                      a().TreasureName,
                                      a().DisplayFont,
                                      a().DisplaySmall,
                                    ),
                                    children: (0, i.Wn)(
                                      this.state.treasureName,
                                    ),
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().CarouselDots,
                                    children: [
                                      (0, e.jsx)(j._X, {
                                        className: (0, r.A)(
                                          a().TreasurePaginationButton,
                                          a().Prev,
                                        ),
                                        children: (0, e.jsx)("div", {
                                          className: a().PrevArrow,
                                        }),
                                      }),
                                      v.map((d, m) =>
                                        (0, e.jsx)(
                                          j.cL,
                                          {
                                            className: a().TreasureSelector,
                                            slide: m,
                                            children: (0, e.jsx)("div", {}),
                                          },
                                          `dot_${m}`,
                                        ),
                                      ),
                                      (0, e.jsx)(j.CC, {
                                        className: (0, r.A)(
                                          a().TreasurePaginationButton,
                                          a().Next,
                                        ),
                                        children: (0, e.jsx)("div", {
                                          className: a().NextArrow,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              D(),
                              (0, e.jsxs)("div", {
                                className: (0, r.A)(
                                  a().TextSection,
                                  a().EndNote,
                                ),
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: (0, r.A)(a().EndNoteContents),
                                    children: [
                                      (0, e.jsx)("p", {
                                        className: (0, r.A)(
                                          a().BlockDescription,
                                          a().DisplayFont,
                                          a().DisplayLarge,
                                          a().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#darkcarnival_play_now_tag",
                                        ),
                                      }),
                                      (0, e.jsx)("a", {
                                        className: a().PlayButton,
                                        href: `${c.r.STORE_URL}app/570/Dota_2/`,
                                        children: (0, e.jsx)("p", {
                                          className: (0, r.A)(
                                            a().BlockDescription,
                                            a().LabelFont,
                                            a().LabelExtraLarge,
                                            a().GoldTextColor,
                                          ),
                                          children: (0, i.Wn)(
                                            "#darkcarnival_play_now_button",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)(s, {
                                    image: "darkcarnival/logos/moon.png",
                                    additionalClassName: a().Emblem,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)(w.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        O = J([I.PA], O);
      },
      79630: (y, N, t) => {
        "use strict";
        t.r(N), t.d(N, { COMIC_LANGUAGE: () => R, default: () => f });
        var e = t(69500),
          c = t(7166),
          i = t(2095),
          I = t(57693),
          g = t(3878),
          x = t(7552),
          p = t(73202),
          r = t(15001),
          P = t(88351),
          w = t(63177),
          W = t(42616),
          a = t(45237),
          j = t(11778),
          U = t(19738),
          h = t.n(U),
          G = t(85286),
          F = t.n(G),
          S = Object.defineProperty,
          V = Object.getOwnPropertyDescriptor,
          K = (A, _, u, k) => {
            for (
              var s = k > 1 ? void 0 : k ? V(_, u) : _, v = A.length - 1, C;
              v >= 0;
              v--
            )
              (C = A[v]) && (s = (k ? C(_, u, s) : C(s)) || s);
            return k && s && S(_, u, s), s;
          };
        const H = "DarkCarnivalComic",
          R = (() => {
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
              default:
                return "english";
            }
          })(),
          J = ({ onIndexChanged: A, comicImageURLs: _ }) => {
            const [u, k] = (0, x.useState)(void 0),
              [s, v] = (0, x.useState)(
                Array.from({ length: _.length }, () => new Image()),
              ),
              C = (0, P.zy)(),
              b = (0, x.useCallback)(() => {
                k((o) => {
                  if ((o === void 0 && (o = 0), o + 1 >= _.length)) return o;
                  const l = o + 1;
                  return window.history.pushState({}, "", `#p=${l}`), l;
                });
              }, [_]),
              D = (o) => {
                o.preventDefault(), b();
              };
            (0, x.useEffect)(() => {
              const o = (l) => {
                (l.code === "Space" || l.key === " ") &&
                  (l.preventDefault(), b());
              };
              return (
                window.addEventListener("keydown", o),
                () => window.removeEventListener("keydown", o)
              );
            }, [b]),
              (0, x.useEffect)(() => {
                let o = 0;
                const d = new URLSearchParams(C.hash.substring(1)).get("p");
                d !== null && (o = parseInt(d)), k(o);
              }, [C]),
              (0, x.useEffect)(() => {
                if (u === void 0) return;
                const o = 5;
                for (let l = 1; l <= o; l++) {
                  const d = u + l;
                  if (d >= _.length) break;
                  let m = s;
                  m[d].src || ((m[d].src = _[d]), v(m));
                }
              }, [u, s, _]),
              (0, x.useEffect)(() => {
                A?.(u);
              }, [A, u]);
            const L = !u,
              O = u + 1 >= _.length;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: h().ComicViewer,
                  children: [
                    (0, e.jsx)("img", {
                      src:
                        u !== void 0
                          ? _[u]
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                      onClick: D,
                      onMouseUp: (o) => {
                        o.button == 0 && o.preventDefault();
                      },
                    }),
                    (0, e.jsx)("div", { className: h().ComicViewerBorder }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, r.A)(
                    h().ComicViewerHelpText,
                    h().BodyFont,
                    h().BodyLarge,
                    O && h().Disabled,
                  ),
                  children: (0, I.we)("#comic_help_text"),
                }),
                (0, e.jsx)(a.N_, {
                  className: (0, r.A)(
                    h().ReturnLink,
                    h().LabelFont,
                    h().LabelMedium,
                    L && h().Disabled,
                  ),
                  to: j.J.darkcarnivalcomic(),
                  children: (0, I.we)("#comic_return_button"),
                }),
              ],
            });
          };
        let f = class extends x.Component {
          constructor(A) {
            super(A);
            const _ = 47;
            this.state = {
              pageTitlePattern: "#darkcarnivalcomic_title",
              comicImageURLs: Array.from(Array(_).keys()).map((u) => {
                const k = u.toString().padStart(3, "0");
                return `${c.TS.IMG_URL}comics/midnight_run/${R}/${k}.webp`;
              }),
            };
          }
          handleScroll = (A) => {
            F().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const A = (_) => {
              _
                ? (document.title = (0, I.we)(this.state.pageTitlePattern, _))
                : (document.title = (0, I.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, e.jsxs)("div", {
              id: H,
              className: h().DarkCarnivalComic,
              children: [
                (0, e.jsx)(p.mg, {}),
                (0, e.jsxs)("div", {
                  className: (0, r.A)(h().PageContainer),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, r.A)(h().PageBackground),
                    }),
                    (0, e.jsx)(w.A, { bOverlapping: !0 }),
                    (0, e.jsxs)("div", {
                      className: (0, r.A)(h().ComicContainer),
                      children: [
                        (0, e.jsx)(J, {
                          onIndexChanged: A,
                          comicImageURLs: this.state.comicImageURLs,
                        }),
                        (0, e.jsx)(W.K, {}),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        f = K([g.PA], f);
      },
      11417: (y) => {
        y.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      38753: (y) => {
        y.exports = {
          Tooltip: "_3v01whza-_hIEOHwXaieh4",
          CarouselFade: "_3HVEW5xeKbuHH1gRhSJw2a",
          StandardButton: "_2W7_ATq3w9PsCIfoxw6K7t",
          ButtonText: "_24YLUR5Ghek8262yOtMxdl",
          Icon: "ZGz9F7Siofs2E3BU5QU5p",
          Play: "_3bTxTnKcyHNbsx6sJuh8lx",
          SteamLogo: "_29dGiV5wNu1t9z39mAqR-n",
          ToolTip: "crOIS-IBoaVv8tox20y1m",
          PlayerReportTooltip: "JaLdV_eQRsotNqjF8tV0X",
          LightGrayText: "uFzAyqYRSoRrFToB_K3Du",
          GrayText: "_1O6wLEBt_N2DZf1Qipxe7K",
          WhiteText: "-NCsHZfapkCIeCC5WrJgD",
          TitleFont: "Vm4yZmaerlxTMhAiWb761",
          TitleExtraLarge: "_3I3dJnz-VJh51klY4GhaSi",
          TitleLarge: "_2TYSbDKNXYJM9Zlwqa8qVN",
          TitleMedium: "_3a111EW0FHTY_ijwOYn-a3",
          TitleSmall: "_3cOXkYI5xxT39dJsbj6Ktg",
          TitleExtraSmall: "JBiIKtQJdXQnD-ElWEjji",
          DisplayFont: "_3uWu8EG7bO8uqZYDNb0bVN",
          DisplayExtraLarge: "ENvwbI2Mfkq7Vw80m0rsf",
          DisplayLarge: "_2OcXeIX8ESfgjwAGarrw9J",
          DisplayMedium: "Jku6dAl9iu02waOPrl3l-",
          DisplaySmall: "_358PmdFAOjxCQm5pXQDevp",
          BodyFont: "SJjqUn5OtkNR_deGcqrDu",
          BodyExtraLarge: "_3tie8N-HXUJu9iqFsrY_SR",
          BodyLarge: "_2ES0URgvGK7MTl-tPgt7U7",
          BodyMedium: "_5MiY2mfdGGbUIBy_DWHvJ",
          BodySmall: "_14WiVdT-geX6udLzJdBzrH",
          LabelFont: "_2ggAgGoJmP6Lw75lPfE7Vd",
          LabelExtraLarge: "_3nVOck-XNvJ5HtISLEdwq_",
          LabelLarge: "bVtoiXBxpxNefoILs5bU1",
          LabelMedium: "ANZRNOhVfRNAdG4KCfpfA",
          LabelSmall: "_137o040c12cGmovSXnHQGL",
          ChromeTextColor: "LAqy8ib79Jb-_JAfCWGSn",
          GoldTextColor: "_1WwDpvkBxPkKEDjOa-kw7H",
          ControlIcon: "_1VIXigP2uLD2qdIYfCrBFm",
          ImageWithBorderAndShadow: "_27WoeZH33rUPYyE3JTX5Oj",
          PageContainer: "_2wHjYA-YV6nzdQnjMU_qs4",
          Hidden: "JwPYYn5sHXjaj3_gP25cg",
          DarkCarnival: "_1V6iWjnq73OIGQcDLGmmQ_",
          TreasureName: "_2j2JhwfTLNPUYmM75B0Ft",
          DisplayExtraSmall: "_SvlZudObv4eJUK-zDzJv",
          MobileOnly: "_3L4G6M7_0FkDAknEwfSSNZ",
          WebsiteSection: "_4-l3koqkEzUMey6sMnflW",
          WebsiteSectionInner: "_2SFm3Int4ZM7rdS56sbj5M",
          WebsiteSectionHeader: "_31S7C2yj1lZUKsTG6hy7a1",
          TextSection: "_3D2zUZZw0Ns2NHJrNlat6l",
          SubsectionDivider: "Gs8GX2fpntmXtVLlBnF4T",
          TopDash: "_20eYNXiJ0HPkp32pnaffGA",
          Background: "wwbloR7TIYQt39ml2dzjK",
          SectionDivider: "_1OjKS1i6vXBeom23YTP8xl",
          Pattern: "_1XqyjYwen1zYNZr1GZTipX",
          Overlay: "_1aT5JW97xHgFJk-y7-JCwJ",
          ButtonsSection: "QOJ54l7Ljfww8KVIOKvRd",
          Grid_4: "_1SPq3tiJkYAvAfJUXq9Wsn",
          Grid_3: "_1c3PynActBjxePqhP_1qNy",
          Grid_2: "_2q78DKm0w2otLEAMkl64qT",
          TextBlock: "_25IwZh46BLk-p7ZyEUTQU9",
          TextImageBlockVertical: "_408ZlOOQgRh-28BTCboGS",
          TextImageBlockHorizontal: "QG8LLxixlkTFDzGseh0Se",
          Flipped: "_29R7DZLGQ6YzqTcEiVtsWn",
          NarrowImage: "_2TSLwRLhhOiM_o28tgYAAJ",
          WideImage: "_2-mRN35XTykzDrYzxQ8SEO",
          FullWidthImage: "TEXn97NUhrGUq_1MElf5Z",
          ActionTextImageBlock: "UGWv8fw5IobO_uvapg_wL",
          ActionImage: "_1CZPVfeCOpwVqwzzsRlSY-",
          ImmersiveTextImageBlock: "AyBCmmM5GFsj1swXorVan",
          DashedSectionSubHeader: "_3OWnmPWdzqrCYyFCQrhz-b",
          Label: "_2jWOhB6UwlRhvwTWS8UdNB",
          DashLeft: "_3u_hZrUFDNkjneN15Bv_HE",
          DashRight: "_2zC7PfP7f1XXAwC60_7Zln",
          AbilityImageContainer: "_1RdtKf5195vwfteonjfRwc",
          AbilityImage: "_2GsEm4JNtQBQCNrlb_t094",
          AbilityHotKey: "_15AsnjylBxRRTsllTinsPf",
          Active: "_2-WFDYCVL_S6XOKEBABdGu",
          DotaPlusBadge: "_2Qc26rPrbPvmYXXp7ZiN8I",
          HeaderSection: "_1a3ujVWG01-O1Qt-Wk_aIn",
          Gears: "I9OvOolB0PulhM01I_rfr",
          Clouds: "_1NrIKXq7GDuueIDuqrZkFU",
          HeaderImage: "_1RWlqo2RfX5xubzPzK4R-O",
          HeaderShadow: "_31IPR5eleuZ7PyJB4hB52J",
          LogoImage: "rQsceu8TqffVet5rpwiqe",
          HeaderTextSection: "_2A7LxAHW0Pvned3c_VOe6v",
          EventVideo: "_1UEZVyezw5GUbAx2UyhPyn",
          OverworldSection: "_2NQ-KnVuPNK78y9visb7FM",
          Star1: "_2OWXOXn6h6NOwZTmU-WlsF",
          Star2: "_37HSJ4dmJ9u38G7nEgcVf5",
          Star3: "_1JcxeZ8LMWeRNZEWnau1Gn",
          ComicWrapper: "_3WhoaVcyVPgGwwZ-G0IgK-",
          GearsTop: "_1Mkt0RRU10L0s6ZkacltrM",
          GearsBottom: "_33Oy4Kgn1mcwcXArm1fWti",
          ComicContainer: "_1g7BwE4SvCm7TJmdHautzw",
          ComicContainerBorder: "_12xTWZZFSClJ92XQz3uSoB",
          ComicContainerBackground: "_2s6EaBIq4NZNhEyi3SGFdm",
          ComicContainerTexture: "_1F51bEhi5sPt01XlTvKCbl",
          RewardTypesHeader: "_2Ww5l37FnhBwrAy-BrTJqa",
          SecretRoomPack: "_2yYrO4db6T1lfs5p28tLB3",
          SecretRoomPackImage: "_3s9gUueCEYF_jAY6HBlazR",
          SecretRoomPackBackground: "_1YUiVmPb6VSeqXS1y78gMm",
          RewardTypes: "n0wPZ9qAWwpPQm4mI7pTF",
          RewardTypesPackBackground: "_11XWSKP6G-rfI51AG81HLP",
          HeroCosmetics: "_16GqrlLE_svk3C8VZZCa8g",
          CarnivalGoodies: "_1QJRN1pgwkid69cyWy2aFS",
          EmoticonsList: "bBq6bG7QH3y2anqBpao26",
          Emoticon: "_2iH0TwWMv-EW-DseS_k9m_",
          OverworldImage: "_9BVHzpGeRCdEudUaXCxYb",
          ContentSection: "_2GfKFn_q87F0htsAVB7PHO",
          AutomotonBundleImage: "_1UfI0eTaRUKdy4llEH7gy7",
          LoadingScreensContainer: "_3-_8pk1sZFo5y2Phox-CmM",
          EmoticonsContent: "MoM8feejGJrr-xfaIvsSM",
          FinalBackground: "_3OfH9Ny_GSlhALbWI_8u7G",
          Automaton: "_1qbK29z-UBOIfH5903nPNE",
          AutomatonBackground: "_2Fr6jszNoU8CBxki3zl2ah",
          AutomatonBackgroundImage: "GN9fGajwJi-BAbb4ZNxSb",
          IsFlipped: "_3h8CmX1Ed5HhsRmIqFW6Pd",
          Glow: "_34F2Om38w5wWiLRAGdER2i",
          AutomatonBackgroundBorder: "_28KEgB298nfLvfNn3dQKWH",
          AutomatonPortraitContainer: "_2lNhW6TRm1eTZu9t6OM4Yc",
          AutomatonPortrait: "_2NJmdOIbXSUCh7kuhwOawB",
          AutomatonInformation: "_2d9SiPVoddoTN0DcBPdYiZ",
          AutomatonNameContainer: "_1BR-MMZ0r7V6Uxpv1WuQKM",
          AutomatonHeroPortraitLandscape: "_332v5XfvUrg915kdnMCW-V",
          AutomatonNameContents: "_17ltPJHST0I_IcJ5wlldVZ",
          AutomatonLabel: "_1cJAD8CxGNd3RhcJAzWFMY",
          AutomatonName: "AOOMD-7bIQOTVYkKxKGMy",
          AutomatonDescription: "kJVX6nA3cVP10ANiA5aYS",
          AutomatonPriceInformation: "_1m8ZDMv1oJ9BtV_1o4ysHk",
          AutomatonHeroAbilityImagesContainer: "mMQ9fc9kCitPzmapROxcf",
          AutomatonHeroAbilityImage: "eyD6eYDVVKtAuk4Nhm3tV",
          AutomatonHeroPortraitLandscapeIconContainer:
            "_2n2V0OdvDEynIPwElWIqda",
          AutomatonHeroPortraitIcon: "_2xgorrJy9SefcR_g-T8RvD",
          AutomatonGameplayAsset: "_3ytVqnRL2JQBo2ejrn749o",
          Axe: "_2XQgmSMeW3vg-0Vt-lrStF",
          LegionCommander: "_1iNmlY9PLUypFUEIswvCIY",
          Oracle: "_1dNMIZj6_g5-gh1sdpjP9v",
          Morphling: "U_h84z6lseTEQ_youaRSQ",
          Bristleback: "_2fQZWZHieVdPac1Bpp7zku",
          SubSectionDividerIcon: "L0Iw0Mtm_ecwSn0cvmEqv",
          TreasureSection: "kPkugYV23sj2RnGi6QxkL",
          TreasureCarousel: "_2kz8PGzjjR6VjIUuYpa5AC",
          CarouselFloor: "_3YHGj5EK1cUl3z1CfHLxIw",
          TreasureSlider: "_11OQjkFU2oTTuLM00-ZznB",
          TreasureSlide: "_1ht-2OO_30dziDr7Aho0HX",
          SlideContainer: "hv5_Q8SrYp97Be4uooMsW",
          ArcWarden: "_3NGAS-PtYy8nBOSU3yRYDQ",
          TemplarAssassin: "_2mImdYVXQGkVEwlQb7yb4d",
          PhantomLancer: "_3AjdP-7yniv3nfcBBWTIJc",
          MonkeyKing: "_1ajRbhR6J5lY3MbOtt5hh8",
          PrimalBeast: "_1WqWUYiT23U3Du2Z4ARjDK",
          TreasureSlideHidden: "_1AOJQewJYeZyaomi4GgYDz",
          HeroName: "_1OFWSL41ttPl6hIkPas8-n",
          CarouselDots: "_3A3i1pEEqW5yvqkGq0mwK-",
          TreasureSelector: "_31w9ke-570YFAByycJi270",
          TreasurePaginationButton: "_2Xz3RgsaOf4ARqTtgoNBI9",
          Prev: "_2-MwYYLDuq9IcqraPuMM9z",
          Next: "_3lHDEZK2VoUIWNNC26bcjz",
          NextArrow: "_3imtqrEqwakMkDECiF3ifR",
          PrevArrow: "_2i58pRDTtTT7x_14kHKdAu",
          TrailerContainer: "_32z1cf9ZE3v2Ck8x73Q8hk",
          TrailerVideo: "vU4IlcY8iOvzetC69mM8E",
          CloseButton: "_15nIoUI4ILRH42jlxULBCU",
          CloseButtonImage: "_2Qh1EwqK127zg2z2D1rgSd",
          AnchorNavigation: "_2K-Jm5OmemUSoGw6_zAJjU",
          AnchorLink: "_1Y3Eub3HpkXEEPR_pXSEeP",
          EndNote: "s8jBwQOe8mlKf8xDMwdwZ",
          EndNoteContents: "_1coIRpzx5nMgE-aY4noRFL",
          PlayButton: "mfX8-4cU9AetBiZHOnzmm",
          Emblem: "_35aPSDUNeLldI40CId-IXX",
          moveOnScroll: "_1YckCSAXRrLETxoumedY8t",
        };
      },
      19738: (y) => {
        y.exports = {
          Tooltip: "_2KCuf_SJJEXcOuLP59IpZD",
          CarouselFade: "_2SRFpua15h9hV8a3jNjni2",
          StandardButton: "_1L8NMpo1QC44tsK7DKSVnw",
          ButtonText: "_3Tcu-X4CLlK6f8Z_tAvsD_",
          Icon: "_2M524qpSjFi6IfObEmF-cy",
          Play: "_1rFiYfze09LpLHA9RiWY0B",
          SteamLogo: "_27stRql3gZKng9YPfD7_qw",
          ToolTip: "BVdqNbQQInntutmm3Nh0S",
          PlayerReportTooltip: "_3E5CJhrbtmLHhcF1gFGKtG",
          TitleFont: "_2sN0pNrIzHUat1asHjzUwy",
          TitleExtraLarge: "Jtn7uNabEp70OXGRt1jIO",
          TitleLarge: "xvEnp93vqen7YpN-HlNXV",
          TitleMedium: "_1NCqAbb-Jq85onJwpvptin",
          TitleSmall: "_2ogKF6cT1JywfF0uScF7Lr",
          TitleExtraSmall: "_1su99h-ViXbgQSMl8z-1Hk",
          DisplayFont: "_3ztcC3rN3CcduqM_n1X2kP",
          DisplayExtraLarge: "TjgfS5u55aPN4gVn4NM9E",
          DisplayLarge: "_5x9OT3ROlOxoiqxZVsNs3",
          DisplayMedium: "_1MAj4PXW447nFPNAxU9SlK",
          DisplaySmall: "_3apIrpHy7lF_6JMTvbNu2N",
          BodyFont: "_2jARk1k1C45P3VTG3DPgC_",
          BodyExtraLarge: "_3ndMFKguCaLf0hhGc9_DdJ",
          BodyLarge: "_3Z9n3dfjRTIRMhGtjeKJXZ",
          BodyMedium: "_2I-hSp--FoJKl2zTLfEWSH",
          BodySmall: "_3k436nzi1RwUqbFq9C_EXp",
          LabelFont: "UablZ8c6hXxJcvBWetiJG",
          LabelExtraLarge: "bMssBD-3bmdghhFoefDMr",
          LabelLarge: "XaiSqzYAYmzolqVBN8Zz9",
          LabelMedium: "_20x981-rWSrxNRyZiqHQ0E",
          LabelSmall: "_197wWeTyBn6JFS6iSKia7",
          DarkCarnivalComic: "_16woM4c_O-l8jf7MzzGfnX",
          PageBackground: "_3pcG4fwiU6A7C80B-IXdnY",
          ComicContainer: "_3xdJfae_CO-ZSBTKdbBFR_",
          ComicViewer: "_1P_GWB09a1rddlMQvQcysl",
          ComicViewerBorder: "_3WJd3fWb5C6RKuqyr3rGZT",
          ComicViewerHelpText: "_Tbu-FT4HCFi3kljOY8Hi",
          Disabled: "_1WDJSy0ekUS8AhcRI-IVbY",
          ReturnLink: "_2Jx45RysUVVl9djRSO1jQM",
        };
      },
    },
  ]);
})();
