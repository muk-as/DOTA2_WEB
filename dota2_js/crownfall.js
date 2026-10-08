// 24129.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [24129, 48738],
    {
      24129: (M, y, l) => {
        "use strict";
        l.r(y), l.d(y, { default: () => B });
        var a = l(69500),
          C = l(7166),
          c = l(2095),
          o = l(8305),
          O = l(3878),
          g = l(7552),
          S = l(11778),
          L = l(73202),
          s = l(15001),
          p = l(45488),
          U = l(63177),
          b = l(42616),
          R = l(55595),
          e = l.n(R),
          x = l(32389),
          G = l(85286),
          W = l.n(G),
          V = l(45237),
          K = l(48738),
          r = l(57693),
          k = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          H = (_, h, t, n) => {
            for (
              var i = n > 1 ? void 0 : n ? I(h, t) : h, f = _.length - 1, A;
              f >= 0;
              f--
            )
              (A = _[f]) && (i = (n ? A(h, t, i) : A(i)) || i);
            return n && i && k(h, t, i), i;
          };
        function N() {
          return !1;
        }
        const w = "CrownfallPage";
        function m({ width: _, height: h, ...t }) {
          let n = {
            width: `${_}px`,
            height: `${h}px`,
            backgroundColor: "#eb008d46",
          };
          return jsx("div", { style: n, ...t });
        }
        function u(_) {
          return (0, a.jsxs)("div", {
            className: e().Reward,
            children: [
              (0, a.jsx)("img", {
                className: e().RewardImage,
                src: `${c.r.IMG_URL}/crownfall/${_.image}`,
              }),
              (0, a.jsxs)("div", {
                className: e().Text,
                children: [
                  (0, a.jsx)("h2", {
                    className: (0, s.A)(e().DisplayText, e().Medium),
                    children: _.label,
                  }),
                  (0, a.jsx)("p", {
                    className: (0, s.A)(e().BodyText, e().Medium),
                    children: _.text,
                  }),
                ],
              }),
            ],
          });
        }
        function j(_) {
          const {
            children: h,
            main_video: t,
            ability_video: n,
            hero_name: i,
            hero_id: f,
            alternate_style_abbrev: A,
            ...P
          } = _;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              ...P,
              className: (0, s.A)(e().Arcana, _.hero_id),
              children: [
                (0, a.jsx)("div", { className: e().ArcanaBackground }),
                (0, a.jsxs)("div", {
                  className: e().Contents,
                  children: [
                    (0, a.jsx)("div", {
                      className: e().VerticalHeader,
                      children: (0, a.jsx)("h2", {
                        className: (0, s.A)(e().DisplayText, e().ExtraLarge),
                        children: i,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: e().MainVideoContainer,
                      children: [
                        !N() &&
                          (0, a.jsxs)("video", {
                            className: e().MainVideo,
                            autoPlay: !0,
                            preload: "auto",
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            children: [
                              (0, a.jsx)("source", {
                                type: 'video/mp4; codecs="hvc1"',
                                src: `${c.r.VIDEO_URL}/${t}.mov`,
                              }),
                              (0, a.jsx)("source", {
                                type: "video/webm",
                                src: `${c.r.VIDEO_URL}/${t}.webm`,
                              }),
                            ],
                          }),
                        N() &&
                          (0, a.jsx)("img", {
                            className: e().MainVideo,
                            src: `${c.r.VIDEO_URL}/${t}.png`,
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: e().Details,
                      children: [
                        (0, a.jsx)("h2", {
                          className: (0, s.A)(e().DisplayText, e().ExtraLarge),
                          children: i,
                        }),
                        h,
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("video", {
                  className: e().AbilityVideo,
                  autoPlay: !0,
                  preload: "auto",
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  children: [
                    (0, a.jsx)("source", {
                      type: "video/mp4",
                      src: `${c.r.VIDEO_URL}/${n}.mp4`,
                    }),
                    (0, a.jsx)("source", {
                      type: "video/webm",
                      src: `${c.r.VIDEO_URL}/${n}.webm`,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: e().AlternateStyle,
                  children: [
                    (0, a.jsx)("img", {
                      className: e().AlternateStyleImage,
                      src: `${c.r.IMG_URL}/crownfall/${A}_alternate_style.png`,
                    }),
                    (0, a.jsxs)("div", {
                      className: e().AlternateStyleInfo,
                      children: [
                        (0, a.jsx)("h3", {
                          className: (0, s.A)(e().LabelText, e().Medium),
                          children: (0, r.we)(
                            `#crownfall_arcana_${A}_alternate_header`,
                          ),
                        }),
                        (0, a.jsx)("h2", {
                          className: (0, s.A)(e().TitleText, e().Small),
                          children: (0, r.we)(
                            `#crownfall_arcana_${A}_alternate_title`,
                          ),
                        }),
                        (0, a.jsx)("p", {
                          className: (0, s.A)(e().DisplayText, e().Small),
                          children: (0, r.we)(
                            `#crownfall_arcana_${A}_alternate_desc`,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function d() {
          return (0, a.jsxs)("div", {
            className: e().DashDotDash,
            children: [
              (0, a.jsx)("div", { className: (0, s.A)(e().Dash, e().Left) }),
              (0, a.jsx)("div", { className: e().Dot }),
              (0, a.jsx)("div", { className: (0, s.A)(e().Dash, e().Right) }),
            ],
          });
        }
        const E = ({
            index: _,
            video: h,
            name: t,
            heroname: n,
            subtext: i,
            autoplay: f,
            onSlideIn: A,
          }) => {
            const P = (0, g.useContext)(x.Yc),
              D = (0, g.useRef)(void 0);
            return (
              (0, g.useEffect)(() => {
                function $() {
                  D && D.current && P.state.currentSlide == _
                    ? D.current.play()
                    : D && D.current && D.current.pause(),
                    P.state.currentSlide == _ && A(t, n, i);
                }
                return P.subscribe($), () => P.unsubscribe($);
              }, [P, _, t, n, i, A]),
              (0, a.jsxs)("div", {
                className: e().SlideContainer,
                children: [
                  !N() &&
                    (0, a.jsxs)("video", {
                      ref: D,
                      className: e().TreasureVideo,
                      muted: !0,
                      autoPlay: f,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${c.r.VIDEO_URL}/crownfall/${h}.png`,
                      children: [
                        (0, a.jsx)("source", {
                          type: 'video/mp4; codecs="hvc1"',
                          src: `${c.r.VIDEO_URL}/crownfall/${h}.mov`,
                        }),
                        (0, a.jsx)("source", {
                          type: "video/webm",
                          src: `${c.r.VIDEO_URL}/crownfall/${h}.webm`,
                        }),
                      ],
                    }),
                  N() &&
                    (0, a.jsx)("img", {
                      className: e().TreasureVideo,
                      src: `${c.r.VIDEO_URL}/crownfall/${h}.png`,
                    }),
                ],
              })
            );
          },
          T = 12,
          v = 0;
        let B = class extends g.Component {
          constructor(_) {
            super(_),
              (this.state = {
                treasureName: `#crownfall_treasure_item_${v}_name`,
                heroName: `#crownfall_treasure_item_${v}_hero`,
                subText: `#crownfall_treasure_item_${v}_sub`,
              });
          }
          handleScroll = (_) => {
            W().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const _ = `${C.TS.IMG_URL}crownfall/comic_part1/${K.COMIC_LANGUAGE}/000.webp`,
              h = (t, n, i) => {
                this.setState({ treasureName: t, heroName: n, subText: i });
              };
            return (0, a.jsxs)("div", {
              id: w,
              className: (0, s.A)(
                e().CrownfallPage,
                c.r.LANGUAGE == "schinese" && e().Language_SChinese,
                c.r.LANGUAGE == "tchinese" && e().Language_TChinese,
                c.r.LANGUAGE == "italian" && e().Language_Italian,
                c.r.LANGUAGE == "thai" && e().Language_Italian,
                c.r.LANGUAGE == "turkish" && e().Language_Turkish,
                c.r.LANGUAGE == "latam" && e().Language_LatAm,
                c.r.LANGUAGE == "spanish" && e().Language_Spanish,
              ),
              children: [
                (0, a.jsx)(L.mg, {
                  children: (0, a.jsx)("title", {
                    children: (0, r.we)("#crownfall_title"),
                  }),
                }),
                (0, a.jsx)(U.A, { bOverlapping: !0 }),
                (0, a.jsxs)("div", {
                  className: e().HeaderSection,
                  children: [
                    (0, a.jsx)("video", {
                      className: e().HeaderVideoBG,
                      autoPlay: !0,
                      preload: "auto",
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      children: (0, a.jsx)("source", {
                        type: "video/webm",
                        src: `${c.r.VIDEO_URL}/crownfall/header_bg.webm`,
                      }),
                    }),
                    !N() &&
                      (0, a.jsxs)("video", {
                        className: e().SkyVengeVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        children: [
                          (0, a.jsx)("source", {
                            type: 'video/mp4; codecs="hvc1"',
                            src: `${c.r.VIDEO_URL}/crownfall/header_fg.mov`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${c.r.VIDEO_URL}/crownfall/header_fg.webm`,
                          }),
                        ],
                      }),
                    N() &&
                      (0, a.jsx)("img", {
                        className: e().SkyVengeVideo,
                        src: `${c.r.VIDEO_URL}/crownfall/header_fg.png`,
                      }),
                    !N() &&
                      (0, a.jsxs)("video", {
                        className: e().HeaderLogoVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        children: [
                          (0, a.jsx)("source", {
                            type: 'video/mp4; codecs="hvc1"',
                            src: `${c.r.VIDEO_URL}/crownfall/logo_${c.r.LANGUAGE == "schinese" ? "schinese" : "english"}.mov`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${c.r.VIDEO_URL}/crownfall/logo_${c.r.LANGUAGE == "schinese" ? "schinese" : "english"}.webm`,
                          }),
                        ],
                      }),
                    N() &&
                      (0, a.jsx)("img", {
                        className: e().HeaderLogoVideo,
                        src: `${c.r.VIDEO_URL}/crownfall/logo_${c.r.LANGUAGE == "schinese" ? "schinese" : "english"}.png`,
                      }),
                    (0, a.jsx)("div", {
                      className: e().EventDescriptionBlock,
                      children: (0, a.jsx)("h2", {
                        className: (0, s.A)(e().DisplayText, e().Large),
                        children: (0, r.we)("#crownfall_welcome"),
                      }),
                    }),
                    (0, a.jsx)("div", { className: e().TopGradient }),
                  ],
                }),
                (0, a.jsx)("hr", {}),
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().NewStory, e().SectionWrapper),
                  children: (0, a.jsxs)("div", {
                    className: e().InnerContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().TextBlock,
                        children: [
                          (0, a.jsx)("h1", {
                            className: (0, s.A)(e().TitleText, e().Medium),
                            children: (0, r.we)("#crownfall_newstory_title"),
                          }),
                          (0, a.jsx)(d, {}),
                          (0, a.jsx)("h2", {
                            className: (0, s.A)(e().DisplayText, e().Medium),
                            children: (0, o.Wn)(
                              "#crownfall_newstory_description",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: e().Comic,
                        children: (0, a.jsxs)("div", {
                          className: e().Inside,
                          children: [
                            (0, a.jsx)("img", {
                              src: _,
                              className: e().Thumbnail,
                            }),
                            (0, a.jsxs)("div", {
                              className: e().Description,
                              children: [
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().DisplayText,
                                    e().Large,
                                  ),
                                  children: (0, r.we)("#crownfall_comic_title"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BodyText,
                                    e().Medium,
                                    e().LightGreyText,
                                  ),
                                  children: (0, r.we)(
                                    "#crownfall_comic_description",
                                  ),
                                }),
                                (0, a.jsx)(V.N_, {
                                  to: S.J.crownfall_comic(),
                                  target: "_blank",
                                  className: (0, s.A)(
                                    e().ReadButton,
                                    e().ButtonPrimary,
                                    e().LabelText,
                                    e().Large,
                                  ),
                                  children: (0, r.we)(
                                    "#crownfall_comic_button",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("hr", {}),
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().EventSection, e().SectionWrapper),
                  children: (0, a.jsxs)("div", {
                    className: e().InnerContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().TextBlock,
                        children: [
                          (0, a.jsx)("h1", {
                            className: (0, s.A)(
                              e().TitleText,
                              e().Large,
                              e().GoldText,
                            ),
                            children: (0, r.we)("#crownfall_howtoplay_title"),
                          }),
                          (0, a.jsx)(d, {}),
                          (0, a.jsx)("p", {
                            className: (0, s.A)(e().DisplayText, e().Large),
                            children: (0, r.we)(
                              "#crownfall_howtoplay_description",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("video", {
                        className: e().ProgressionMap,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        children: (0, a.jsx)("source", {
                          type: "video/webm",
                          src: `${c.r.VIDEO_URL}/crownfall/how_to_play.webm?1`,
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, s.A)(
                          e().TextBlock,
                          e().QuickExplainersDescription,
                        ),
                        children: [
                          (0, a.jsx)("p", {
                            className: (0, s.A)(e().BodyText, e().Medium),
                            children: (0, o.Wn)("#crownfall_explainer_a_long"),
                          }),
                          (0, a.jsx)("p", {
                            className: (0, s.A)(e().BodyText, e().Medium),
                            children: (0, o.Wn)("#crownfall_explainer_b_long"),
                          }),
                          (0, a.jsx)("p", {
                            className: (0, s.A)(e().BodyText, e().Medium),
                            children: (0, o.Wn)("#crownfall_explainer_c_long"),
                          }),
                        ],
                      }),
                      (0, a.jsx)(d, {}),
                      (0, a.jsxs)("div", {
                        className: e().RewardsBlock,
                        children: [
                          (0, a.jsx)("h1", {
                            className: (0, s.A)(
                              e().TitleText,
                              e().Medium,
                              e().GoldText,
                            ),
                            children: (0, r.we)("#crownfall_rewards_title"),
                          }),
                          (0, a.jsxs)("div", {
                            className: e().Rewards,
                            children: [
                              (0, a.jsx)(u, {
                                label: (0, r.we)("#crownfall_rewards_b"),
                                text: (0, r.we)("#crownfall_rewards_b_long"),
                                image: "rewards_treasures.png",
                              }),
                              (0, a.jsx)(u, {
                                label: (0, r.we)("#crownfall_rewards_c"),
                                text: (0, r.we)("#crownfall_rewards_c_long"),
                                image: "rewards_candy_sacks.png",
                              }),
                              (0, a.jsx)(u, {
                                label: (0, r.we)("#crownfall_rewards_a"),
                                text: (0, r.we)(
                                  "#crownfall_rewards_a_long_new",
                                  p.o.GetBPPrice(27458) !== "undefined"
                                    ? p.o.GetBPPrice(27458)
                                    : "",
                                ),
                                image: "rewards_coins.png",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className: (0, s.A)(
                              e().DisplayText,
                              e().Medium,
                              e().AllRewards,
                            ),
                            children: (0, r.we)(
                              "#crownfall_rewards_andmanymore",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(d, {}),
                      (0, a.jsx)("div", {
                        className: e().TextBlock,
                        children: (0, a.jsx)("h1", {
                          className: (0, s.A)(
                            e().TitleText,
                            e().Medium,
                            e().GoldText,
                          ),
                          children: (0, r.we)("#crownfall_explorerpack_title"),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: e().ExplorerPackContainer,
                        children: [
                          (0, a.jsx)("div", { className: e().ExplorerPack }),
                          (0, a.jsx)("img", {
                            className: e().ExplorerPackImage,
                            src: `${c.r.IMG_URL}/crownfall/explorer_pack.png`,
                          }),
                          (0, a.jsxs)("div", {
                            className: e().ExplorerPackDetails,
                            children: [
                              (0, a.jsx)("h2", {
                                className: (0, s.A)(
                                  e().DisplayText,
                                  e().Medium,
                                ),
                                children: (0, r.we)(
                                  "#crownfall_explorerpack_description",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().BodyText,
                                  e().Medium,
                                  e().LightGreyText,
                                ),
                                children: (0, r.we)(
                                  "#crownfall_explorerpack_description_long",
                                ),
                              }),
                              (0, a.jsx)("a", {
                                href: "#",
                                onClick: (t) => {
                                  p.o.PurchaseOnSteamStore(
                                    30943,
                                    1,
                                    window.location.href,
                                  ),
                                    t.preventDefault();
                                },
                                className: (0, s.A)(
                                  e().PurchaseButton,
                                  e().ButtonPrimary,
                                  e().LabelText,
                                  e().Large,
                                ),
                                children: (0, o.Wn)(
                                  "#crownfall_explorerpack_purchase",
                                  p.o.GetBPPrice(30943) !== "undefined"
                                    ? p.o.GetBPPrice(30943)
                                    : "",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().PurchaseDiscount,
                                  e().LightGreyText,
                                ),
                                children: (0, r.we)(
                                  "#crownfall_arcana_sm_purchase_note",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("hr", {}),
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().StoreSection, e().SectionWrapper),
                  children: (0, a.jsxs)("div", {
                    className: e().InnerContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().TextBlock,
                        children: [
                          (0, a.jsx)("h1", {
                            className: (0, s.A)(
                              e().TitleText,
                              e().Large,
                              e().GoldText,
                            ),
                            children: (0, r.we)("#crownfall_arcanas_title"),
                          }),
                          (0, a.jsx)(d, {}),
                          (0, a.jsx)("p", {
                            className: (0, s.A)(e().DisplayText, e().Large),
                            children: (0, r.we)(
                              "#crownfall_arcanas_description",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: e().Arcanas,
                        children: [
                          (0, a.jsxs)(j, {
                            main_video: "crownfall/skywrath_arcana_0320_1",
                            ability_video: "crownfall/abilities_skywrath_0320",
                            hero_name: (0, r.we)("#crownfall_arcana_sm_hero"),
                            hero_id: "Skywrath",
                            alternate_style_abbrev: "sm",
                            children: [
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_sm_a"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_sm_a_long",
                                ),
                              }),
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_sm_b"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_sm_b_long",
                                ),
                              }),
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_sm_c"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_sm_c_long",
                                ),
                              }),
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_sm_d"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_sm_d_long",
                                ),
                              }),
                              (0, a.jsx)("img", {
                                className: e().HeroAssetsImage,
                                src: `${c.r.IMG_URL}/crownfall/sm_arcana_assets.png`,
                              }),
                              (0, a.jsxs)("div", {
                                className: e().PurchaseBlock,
                                children: [
                                  (0, a.jsx)("a", {
                                    href: "#",
                                    onClick: (t) => {
                                      p.o.PurchaseOnSteamStore(
                                        22277,
                                        1,
                                        window.location.href,
                                      ),
                                        t.preventDefault();
                                    },
                                    className: (0, s.A)(
                                      e().PurchaseButton,
                                      e().ButtonPrimary,
                                      e().LabelText,
                                      e().Large,
                                    ),
                                    children: (0, o.Wn)(
                                      "#crownfall_arcana_sm_purchase",
                                      p.o.GetBPPrice(22277) !== "undefined"
                                        ? p.o.GetBPPrice(22277)
                                        : "",
                                    ),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(e().PurchaseDiscount),
                                    children: (0, r.we)(
                                      "#crownfall_arcana_sm_purchase_note",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(d, {}),
                          (0, a.jsxs)(j, {
                            main_video: "crownfall/venge_imperia_0319a",
                            ability_video: "crownfall/venge_ability_0321alt",
                            hero_name: (0, r.we)("#crownfall_arcana_vs_hero"),
                            hero_id: "Venge",
                            alternate_style_abbrev: "vs",
                            children: [
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_vs_a"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_vs_a_long",
                                ),
                              }),
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_vs_b"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_vs_b_long",
                                ),
                              }),
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_vs_c"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_vs_c_long",
                                ),
                              }),
                              (0, a.jsx)("h3", {
                                className: (0, s.A)(e().LabelText, e().Large),
                                children: (0, r.we)("#crownfall_arcana_vs_d"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(e().BodyText, e().Medium),
                                children: (0, r.we)(
                                  "#crownfall_arcana_vs_d_long",
                                ),
                              }),
                              (0, a.jsx)("img", {
                                className: e().HeroAssetsImage,
                                src: `${c.r.IMG_URL}/crownfall/vs_arcana_assets.png`,
                              }),
                              (0, a.jsxs)("div", {
                                className: e().PurchaseBlock,
                                children: [
                                  (0, a.jsx)("a", {
                                    href: "#",
                                    onClick: (t) => {
                                      p.o.PurchaseOnSteamStore(
                                        22722,
                                        1,
                                        window.location.href,
                                      ),
                                        t.preventDefault();
                                    },
                                    className: (0, s.A)(
                                      e().PurchaseButton,
                                      e().ButtonPrimary,
                                      e().LabelText,
                                      e().Large,
                                    ),
                                    children: (0, o.Wn)(
                                      "#crownfall_arcana_vs_purchase",
                                      p.o.GetBPPrice(22722) !== "undefined"
                                        ? p.o.GetBPPrice(22722)
                                        : "",
                                    ),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(e().PurchaseDiscount),
                                    children: (0, r.we)(
                                      "#crownfall_arcana_vs_purchase_note",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(d, {}),
                      (0, a.jsx)("h1", {
                        className: (0, s.A)(
                          e().TitleText,
                          e().Medium,
                          e().GoldText,
                        ),
                        children: (0, r.we)("#crownfall_treasures_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().TextBlock,
                        children: (0, a.jsx)("p", {
                          className: (0, s.A)(
                            e().DisplayText,
                            e().Medium,
                            e().LightGreyText,
                          ),
                          children: (0, r.we)(
                            "#crownfall_treasures_description",
                          ),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Treasures,
                        children: (0, a.jsxs)(x.gi, {
                          className: e().TreasureCarousel,
                          naturalSlideWidth: 600,
                          naturalSlideHeight: 960,
                          totalSlides: T,
                          currentSlide: v,
                          infinite: !0,
                          touchEnabled: !0,
                          dragEnabled: !1,
                          children: [
                            (0, a.jsx)(x.Ap, {
                              className: e().TreasureSlider,
                              children: Array.from(
                                { length: T },
                                (t, n) => n,
                              ).map((t) =>
                                (0, a.jsx)(
                                  x.q7,
                                  {
                                    index: t,
                                    className: e().TreasureSlide,
                                    innerClassName: e().TreasureInnerSlide,
                                    classNameHidden: e().TreasureSlideHidden,
                                    children: (0, a.jsx)(E, {
                                      index: t,
                                      video: `treasure_item_${t}`,
                                      name: `#crownfall_treasure_item_${t}_name`,
                                      heroname: `#crownfall_treasure_item_${t}_hero`,
                                      subtext: `#crownfall_treasure_item_${t}_sub`,
                                      autoplay: t == v,
                                      onSlideIn: h,
                                    }),
                                  },
                                  t,
                                ),
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: (0, s.A)(
                                e().TreasureName,
                                e().DisplayText,
                                e().Small,
                              ),
                              children: (0, o.Wn)(this.state.treasureName),
                            }),
                            (0, a.jsx)("div", {
                              className: (0, s.A)(
                                e().HeroName,
                                e().LabelText,
                                e().Small,
                              ),
                              children: (0, o.Wn)(this.state.heroName),
                            }),
                            (0, a.jsx)("div", {
                              className: (0, s.A)(
                                e().TreasureSubText,
                                e().LabelText,
                                e().Small,
                              ),
                              children: (0, o.Wn)(this.state.subText),
                            }),
                            (0, a.jsxs)("div", {
                              className: e().CarouselDots,
                              children: [
                                (0, a.jsx)(x._X, {
                                  className: (0, s.A)(
                                    e().TreasurePaginationButton,
                                    e().Prev,
                                  ),
                                  children: (0, a.jsx)("div", {
                                    className: e().PrevArrow,
                                  }),
                                }),
                                Array.from({ length: T }, (t, n) => n).map(
                                  (t) =>
                                    (0, a.jsx)(
                                      x.cL,
                                      {
                                        className: e().TreasureSelector,
                                        slide: t,
                                      },
                                      t,
                                    ),
                                ),
                                (0, a.jsx)(x.CC, {
                                  className: (0, s.A)(
                                    e().TreasurePaginationButton,
                                    e().Next,
                                  ),
                                  children: (0, a.jsx)("div", {
                                    className: e().NextArrow,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(d, {}),
                      (0, a.jsxs)("div", {
                        className: e().TextBlock,
                        children: [
                          (0, a.jsx)("h1", {
                            className: (0, s.A)(
                              e().TitleText,
                              e().Medium,
                              e().GoldText,
                            ),
                            children: (0, r.we)("#crownfall_fouracts_title"),
                          }),
                          (0, a.jsx)("p", {
                            className: (0, s.A)(
                              e().DisplayText,
                              e().Medium,
                              e().LightGreyText,
                            ),
                            children: (0, o.Wn)(
                              "#crownfall_fouracts_description",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: e().FourActsImage,
                        children: [
                          (0, a.jsxs)("div", {
                            className: (0, s.A)(e().Act, e().Act1),
                            children: [
                              (0, a.jsx)("p", {
                                className: e().ActNumber,
                                children: (0, o.Wn)("#crownfall_footer_act_1"),
                              }),
                              (0, a.jsx)("p", {
                                className: e().ActName,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_1_name",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: e().Action,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_play",
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: (0, s.A)(e().Act, e().Act2),
                            children: [
                              (0, a.jsx)("p", {
                                className: e().ActNumber,
                                children: (0, o.Wn)("#crownfall_footer_act_2"),
                              }),
                              (0, a.jsx)("p", {
                                className: e().ActName,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_2_name",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: e().Action,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_play",
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: (0, s.A)(e().Act, e().Act3),
                            children: [
                              (0, a.jsx)("p", {
                                className: e().ActNumber,
                                children: (0, o.Wn)("#crownfall_footer_act_3"),
                              }),
                              (0, a.jsx)("p", {
                                className: e().ActName,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_3_name",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: e().Action,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_locked",
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: (0, s.A)(e().Act, e().Act4),
                            children: [
                              (0, a.jsx)("p", {
                                className: e().ActNumber,
                                children: (0, o.Wn)("#crownfall_footer_act_4"),
                              }),
                              (0, a.jsx)("p", {
                                className: e().ActName,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_4_name",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: e().Action,
                                children: (0, o.Wn)(
                                  "#crownfall_footer_act_locked",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(b.K, {}),
              ],
            });
          }
        };
        B = H([O.PA], B);
      },
      48738: (M, y, l) => {
        "use strict";
        l.r(y), l.d(y, { COMIC_LANGUAGE: () => I, default: () => N });
        var a = l(69500),
          C = l(7166),
          c = l(2095),
          o = l(57693),
          O = l(3878),
          g = l(7552),
          S = l(73202),
          L = l(15001),
          s = l(88351),
          p = l(63177),
          U = l(42616),
          b = l(45237),
          R = l(11778),
          e = l(77220),
          x = l.n(e),
          G = l(85286),
          W = l.n(G),
          V = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          r = (w, m, u, j) => {
            for (
              var d = j > 1 ? void 0 : j ? K(m, u) : m, E = w.length - 1, T;
              E >= 0;
              E--
            )
              (T = w[E]) && (d = (j ? T(m, u, d) : T(d)) || d);
            return j && d && V(m, u, d), d;
          };
        const k = "CrownfallComic",
          I = (() => {
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
          H = ({ onIndexChanged: w, comicImageURLs: m }) => {
            const [u, j] = (0, g.useState)(void 0),
              [d, E] = (0, g.useState)(
                Array.from({ length: m.length }, () => new Image()),
              ),
              T = (0, s.zy)(),
              v = (0, g.useCallback)(() => {
                j((n) => {
                  if ((n === void 0 && (n = 0), n + 1 >= m.length)) return n;
                  const i = n + 1;
                  return window.history.pushState({}, "", `#p=${i}`), i;
                });
              }, [m]),
              B = (n) => {
                n.preventDefault(), v();
              };
            (0, g.useEffect)(() => {
              const n = (i) => {
                (i.code === "Space" || i.key === " ") &&
                  (i.preventDefault(), v());
              };
              return (
                window.addEventListener("keydown", n),
                () => window.removeEventListener("keydown", n)
              );
            }, [v]),
              (0, g.useEffect)(() => {
                let n = 0;
                const f = new URLSearchParams(T.hash.substring(1)).get("p");
                f !== null && (n = parseInt(f)), j(n);
              }, [T]),
              (0, g.useEffect)(() => {
                if (u === void 0) return;
                const n = 5;
                for (let i = 1; i <= n; i++) {
                  const f = u + i;
                  if (f >= m.length) break;
                  let A = d;
                  A[f].src || ((A[f].src = m[f]), E(A));
                }
              }, [u, d, m]),
              (0, g.useEffect)(() => {
                w?.(u);
              }, [w, u]);
            const _ = !u,
              h = u + 1 >= m.length;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: x().ComicViewer,
                  children: (0, a.jsx)("img", {
                    src:
                      u !== void 0
                        ? m[u]
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEUAAAAAAAClZ7nPAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAC0lEQVQImWNgwAkAABsAAdI307oAAAAASUVORK5CYII=",
                    onClick: B,
                    onMouseUp: (n) => {
                      n.button == 0 && n.preventDefault();
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: (0, L.A)(
                    x().ComicViewerHelpText,
                    h && x().Disabled,
                  ),
                  children: (0, o.we)("#crownfallcomic_help_text"),
                }),
                (0, a.jsx)(b.N_, {
                  className: (0, L.A)(x().ReturnLink, _ && x().Disabled),
                  to: R.J.crownfall_comic(),
                  children: (0, o.we)("#crownfallcomic_return_button"),
                }),
              ],
            });
          };
        let N = class extends g.Component {
          constructor(w) {
            super(w);
            const m = new Map([
                ["act1_intro", { url: "comic_part1", pageCount: 119 }],
                ["act2_intro", { url: "act2_intro", pageCount: 33 }],
                ["act3_intro", { url: "act3_intro", pageCount: 29 }],
                ["act4_intro", { url: "act4_intro", pageCount: 29 }],
              ]),
              u = m.get(w.comic_id) || m.get("act1_intro");
            this.state = {
              pageTitlePattern: `#crownfallcomic_${w.comic_id}_title`,
              comicImageURLs: Array.from(Array(u.pageCount).keys()).map((j) => {
                const d = j.toString().padStart(3, "0");
                return `${C.TS.IMG_URL}crownfall/${u.url}/${I}/${d}.webp?v=2`;
              }),
            };
          }
          handleScroll = (w) => {
            W().refresh();
          };
          componentDidMount() {
            this.handleScroll(void 0);
          }
          render() {
            const w = (m) => {
              m
                ? (document.title = (0, o.we)(this.state.pageTitlePattern, m))
                : (document.title = (0, o.we)(
                    `${this.state.pageTitlePattern}_cover`,
                  ));
            };
            return (0, a.jsxs)("div", {
              id: k,
              className: x().CrownfallComic,
              children: [
                (0, a.jsx)(S.mg, {}),
                (0, a.jsxs)("div", {
                  className: (0, L.A)(x().PageContainer),
                  children: [
                    (0, a.jsx)(p.A, { bOverlapping: !0 }),
                    (0, a.jsx)("div", {
                      className: (0, L.A)(x().ComicContainer),
                      children: (0, a.jsx)(H, {
                        onIndexChanged: w,
                        comicImageURLs: this.state.comicImageURLs,
                      }),
                    }),
                    (0, a.jsx)(U.K, {}),
                  ],
                }),
              ],
            });
          }
        };
        N = r([O.PA], N);
      },
      55595: (M) => {
        M.exports = {
          Tooltip: "_1nyA2MlhQvN04cwgeTl6qG",
          CarouselFade: "_1b_Xt-oPDkU4SV8pVq30yA",
          StandardButton: "dx2ushOwpL29obN4gRLCd",
          ButtonText: "_23QSfLj4i-5beLibYe1Zqw",
          Icon: "lLKIh3TdCfEsuVcyvrEg-",
          Play: "_3vTab_TjFGPul4SkD13mIx",
          SteamLogo: "_3YZrmYW47YtJ7EYhKZro41",
          ToolTip: "_3GPS5LnBjhHTploYO1sVdL",
          PlayerReportTooltip: "Je2lYV777q7uYwlK9kBPz",
          TitleText: "_2T2gF4BLcWbvA0J9wSLBFq",
          Large: "_1-E14BWw7Vud1-aIBBvoDn",
          Medium: "_2sMFKHu0vJguYUIaWYhfjT",
          Small: "_3NKSB2yfrl750kPFEkiOPP",
          DisplayText: "_1IWs6VpxU2zEGhwpyeZI-h",
          ExtraLarge: "_1uxfbnt12rCgDzHYWQyn89",
          BodyText: "_2ey0cCM_KGHzqGDVRkRaD_",
          LabelText: "_1D7jxR2Rp28NJf0VxiNC_f",
          LightGreyText: "_27QnToQ3myaQ56Yo7udrZs",
          GoldText: "_2GuU6reE2-r67G0QtzyJN8",
          SubSectionDivider: "_2itPL0_e9iTsxRpCBkHdJb",
          SectionWrapper: "G-ZsFIFxZ7pLXSo_zG0ZV",
          InnerContainer: "_139q_MVGhjWcvNgGx82py0",
          TextBlock: "_2Sqzhqc1EaDHduq9aLrqob",
          DashDotDash: "_1KjH7FO19mamjvhlsIJnt4",
          ButtonPrimary: "BFu1BJO9taEl3mOyaj-DH",
          CrownfallPage: "_3QK-G8b0paUvBqD7xmGhnZ",
          HeaderSection: "_2UmPIyDehtnwkcD9zq2BA3",
          TopGradient: "_3384hSCXJQX9hhc0sifQFQ",
          HeaderVideoBG: "puzHNNpvqqLXzJzNgayYL",
          SkyVengeVideo: "_1xrCdtsm1Pl37Xga_U4HOG",
          HeaderLogoVideo: "Dz8dgo1tTcFzWui8NZyx6",
          EventDescriptionBlock: "_16HTyuO4bHerNVbCxhwDIc",
          NewStory: "_3QgploGi4dyX9ybdmqFYTt",
          Comic: "gaIsKHZctwpV0FCEeZom8",
          Inside: "_1eIpocZo4eleAa3mK7o8-y",
          Thumbnail: "_2aVOTLwLK9pLbGGPPkdt7m",
          Description: "_2Uv5B21msFBPywE5argEB2",
          ReadButton: "_2QzcxDV6rBNNzvFgXDFVYV",
          EventSubSectionDivider: "e_H1zMevxS6QU7BLT96LT",
          EventSection: "_1IFJzjJPVa0v3ognBM-x6c",
          QuickExplainersDescription: "qceLJU3WNHV0ku829BVbK",
          Rewards: "_3bIxwk9_EOM-2xNZrWehKz",
          Reward: "QrJB_LWd8-niqrqd0xhnK",
          Text: "_2wdc6hWfkrFwAXnHdJ33dS",
          RewardImage: "_7MBePGSQgFp_7-q39_GbU",
          AllRewards: "_2Vw-XTti65SD0imrVqWeyk",
          ExplorerPackContainer: "_2UHiVucELh32a8V38Jn8EI",
          ExplorerPackImage: "_2jM6HL9RDYNvKrH4agX9qN",
          ExplorerPackDetails: "_1TvP6xVEIpJpmUKG_Tfx_u",
          PurchaseDiscount: "Bg3ZO7Z1EA1pZKHHG2yJm",
          ProgressionMap: "_2Hz5G4TSFoXjheKu66J8xo",
          PurchaseButtonContainer: "_1SQs8s4vaBsB38rJ66JXZc",
          PurchaseButtonHover: "daYlRO3RmBpjv0giPGDSm",
          PurchaseButton: "kZTmM9MVNVive_q1D59Bh",
          StoreSection: "_1z5yv1UjoABk2p3W4SsN6u",
          Arcanas: "_3pFokOPREoiHDxket6Ecd2",
          Arcana: "_1EWiVAFbfxZGAR_KCUTiPR",
          ArcanaBackground: "_21ZYrmSU0mPT1tUCsQ2YpS",
          MainVideo: "_3bgRXqgJuhRJPFRJoi6Jed",
          AlternateStyle: "_26V3Kq0qPs6CjmWf7I0cpv",
          Contents: "uTrl4gMHFWCbSb4MP9T7",
          VerticalHeader: "_1GStNoGcm0iTfi1iEOnoL4",
          MainVideoContainer: "_3V24XnPNeiHP5qQOj3YAoF",
          Details: "y0Bl1WVyBgBaXcPR_azgp",
          HeroAssetsImage: "_3-6uEuk57OXPyig9pIhE2R",
          AbilityVideo: "WMmwVT3YY_Io6HBUnjJkE",
          PurchaseBlock: "_3tOHABFjyw-sys6bzzCQmD",
          AlternateStyleImage: "_2wIvxYJAEhvpAE5wiNdcO2",
          AlternateStyleInfo: "_23J0gjs7QN1LAvaLvE68oD",
          Treasures: "buWQwSZBZMh7dMX075kZ",
          TreasureCarousel: "_2OGX5Q-XJEQXOteZlgvyCO",
          TreasureSlider: "fGDgMVRQQTTMMwd5Y1z_h",
          TreasureSlide: "_2dWYxSBUyAmCqO0JCFzOFn",
          TreasureSlideHidden: "_2P-ZGL8SNMEK7TMfPe3ydt",
          SlideContainer: "_3_x6Ae7tJYZP_a_9bQ74hG",
          TreasureName: "lyG3KdRqH-DGs1_7GC4-0",
          HeroName: "_2LI4SMjPB3bZT3JzwusWWB",
          TreasureSubText: "_3E2kRgd2xrkE6OmnJK3YHV",
          TreasureSelector: "_2Xk-wbaMtGlMQpfNISftRh",
          TreasurePaginationButton: "_9abIn0Nj_9pGbwYhYCUVn",
          Prev: "_3uKPocyvatixisUgPQBlAA",
          Next: "uUxh9zUkaGDcKuovEF_TL",
          PrevArrow: "_3sDLw6YMvIYn0xqSbbUI16",
          NextArrow: "_1-MbGW1_6f61kZcaX9Cpjc",
          CarouselDots: "_1D5Ic_9MGAIuuUiRDOyr5G",
          FourActs: "_1EP2ezXVk4_hgfPHPr2HGR",
          FourActsImage: "_1pDDyK9N9xeRJj_6zQx96v",
          Act: "_3du78MyBr3GZPjeSpL9W6w",
          ActNumber: "_1PGkRqA2kNy2lKkLquNwzI",
          ActName: "_20pI3i9S5-l0n_60rdNiFP",
          Action: "_1l6TLfecOVSdr0kJpDSfNK",
          Act1: "FNq4S0CIqQSRi9zeI0ieU",
          Language_SChinese: "_3CIcegPXh-Rph55nmEdeEa",
          Language_TChinese: "_1bQk8zb1BQtnm0N-M9s8HE",
          Language_Italian: "_5wMUGx7f6c1p-KbESVMGh",
          Act2: "_1j4U-4W6CKEksBtHl8Mr2A",
          Act3: "_30ZMgsHibThkJtdfu2WUYB",
          Act4: "_1GWJrPsE4D4O0TgsKXGKVT",
          Language_Thai: "X591KKB8-ZWkBhiyT-BTZ",
          Language_Turkish: "_3GoHUnUyE7t4ingBS3w6CF",
          Language_LatAm: "_32Xit82TSUdEWs3J7pszuF",
          Language_Spanish: "_2oCxiPAXduAREjmNPUQIK3",
          FooterAndMuchMore: "_1TzroyMS0QnsxpDOjFWuOe",
          Dot: "_13vqjNBn9Kw5QltsapwrAL",
          Dash: "_2EXQLZPVJzI16_c2gKkPTZ",
          Left: "sRowc5nNNO-yRAwO5fybs",
        };
      },
      77220: (M) => {
        M.exports = {
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
    },
  ]);
})();
