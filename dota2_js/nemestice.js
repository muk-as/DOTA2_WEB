// 37690.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [37690],
    {
      37690: (d, o, t) => {
        "use strict";
        t.r(o), t.d(o, { default: () => g });
        var e = t(69500),
          i = t(2095),
          _ = t(19890),
          s = t.n(_),
          c = t(15001),
          m = t(45488),
          p = t(3878),
          a = t(8305),
          v = t(63177),
          h = t(42616),
          n = t(10806),
          r = t(34774),
          x = t(73202);
        const g = (0, p.PA)(() => {
          m.o.RequestBPPrices([18695, 18696, 18697]);
          const j = [
            {
              bEnabled: !0,
              arrImmortals: [
                {
                  strHeroName: "beastmaster",
                  eRarity: r.yP.Normal,
                  eImageLoc: r.gv.Left,
                },
                {
                  strHeroName: "dark_willow",
                  eRarity: r.yP.Normal,
                  eImageLoc: r.gv.Right,
                },
                {
                  strHeroName: "elder_titan",
                  eRarity: r.yP.Normal,
                  eImageLoc: r.gv.Right,
                },
                {
                  strHeroName: "enchantress",
                  eRarity: r.yP.Normal,
                  eImageLoc: r.gv.Left,
                },
                {
                  strHeroName: "mirana",
                  eRarity: r.yP.Normal,
                  eImageLoc: r.gv.Right,
                },
                {
                  strHeroName: "tidehunter",
                  eRarity: r.yP.Normal,
                  eImageLoc: r.gv.Left,
                },
                {
                  strHeroName: "ancient_apparition",
                  strTooltip: "#battlepass_tooltip_rare",
                  eRarity: r.yP.Rare,
                  eImageLoc: r.gv.Right,
                },
                {
                  strHeroName: "tidehunter",
                  strTooltip: "#battlepass_tooltip_very_rare",
                  eRarity: r.yP.Very,
                  eImageLoc: r.gv.Right,
                  bGold: !0,
                },
                {
                  strHeroName: "mirana",
                  strTooltip: "#battlepass_tooltip_very_rare",
                  eRarity: r.yP.Very,
                  eImageLoc: r.gv.Left,
                  bGold: !0,
                },
                {
                  strHeroName: "void_spirit",
                  strTooltip: "#battlepass_tooltip_ultra_rare",
                  eRarity: r.yP.Ultra,
                  eImageLoc: r.gv.Left,
                },
                {
                  strHeroName: "emblem",
                  strTooltip: "#battlepass_tooltip_cosmically_rare",
                  eRarity: r.yP.Cosmic,
                  eImageLoc: r.gv.None,
                  bEmblem: !0,
                },
              ],
            },
          ];
          return (0, e.jsxs)("div", {
            className: s().HomePage,
            children: [
              (0, e.jsx)(v.A, { bOverlapping: !0 }),
              (0, e.jsx)(x.mg, {
                children: (0, e.jsx)("title", {
                  children: (0, a.Wn)("#nemestice_title"),
                }),
              }),
              (0, e.jsxs)("div", {
                className: s().HeaderSection,
                children: [
                  (0, e.jsx)("div", {
                    className: s().BackgroundVideoContainer,
                    children: (0, e.jsxs)("video", {
                      className: s().BackgroundVideo,
                      autoPlay: !0,
                      preload: "auto",
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      poster: `${i.r.IMG_URL}/nemestice/header2_english.jpg`,
                      children: [
                        (0, e.jsx)("source", {
                          type: "video/webm",
                          onError: (l) =>
                            (l.target.src = `${i.r.VIDEO_URL}/nemestice/header2_english.webm`),
                          src: `${i.r.VIDEO_URL}/nemestice/header2_${i.r.LANGUAGE}.webm`,
                        }),
                        (0, e.jsx)("source", {
                          type: "video/mp4",
                          onError: (l) =>
                            (l.target.src = `${i.r.VIDEO_URL}/nemestice/header2_english.mp4`),
                          src: `${i.r.VIDEO_URL}/nemestice/header2_${i.r.LANGUAGE}.mp4`,
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("a", {
                    href: "https://youtu.be/38ZwPC3xO78",
                    target: "_blank",
                    children: (0, e.jsx)("div", {
                      className: s().TitleContainer,
                      children: (0, e.jsxs)("div", {
                        className: s().PlayContainer,
                        children: [
                          (0, e.jsx)("img", {
                            className: s().PlayButton,
                            src: `${i.r.IMG_URL}/nemestice/play_button.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().PlayLabel,
                            children: (0, a.Wn)("#nemestice_trailer"),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: s().PurchaseBanner,
                children: [
                  (0, e.jsx)("div", {
                    className: s().Headline,
                    children: (0, a.Wn)("#battlepass_buy_battlepass"),
                  }),
                  (0, e.jsxs)("div", {
                    className: s().ButtonRow,
                    children: [
                      (0, e.jsx)(n.$x, {
                        colorTopEdge: "#8491B0",
                        colorTop: "#404772 ",
                        colorMiddle: "#2D304F",
                        colorBottom: "#151828",
                        level: 1,
                        itemid: 18695,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, e.jsx)(n.$x, {
                        colorTopEdge: "#8EBBDC",
                        colorTop: "#2E369E ",
                        colorMiddle: "#2B3493",
                        colorBottom: "#0E1B5D",
                        level: 50,
                        discountPct: 4,
                        itemid: 18696,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, e.jsx)(n.$x, {
                        colorTopEdge: "#DF6BCC",
                        colorTop: "#5943A5 ",
                        colorMiddle: "#4E3692",
                        colorBottom: "#33216F",
                        level: 100,
                        discountPct: 19,
                        itemid: 18697,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: s().GrassLayer }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: s().LoreSection,
                children: [
                  (0, e.jsx)("div", {
                    className: s().Headline,
                    children: (0, a.Wn)("#nemestice_lore_title"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().Description,
                    children: (0, a.Wn)("#nemestice_lore_desc"),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: s().EventGame,
                children: [
                  (0, e.jsx)("div", {
                    className: s().Subhead,
                    children: (0, a.Wn)("#nemestice_event_label"),
                  }),
                  (0, e.jsx)("img", {
                    className: s().Logo,
                    onError: (l) =>
                      (l.target.src = `${i.r.IMG_URL}/nemestice/nemestice_logo_nobp_en.png`),
                    src: `${i.r.IMG_URL}/nemestice/nemestice_logo_nobp_${i.r.LANGUAGE}.png`,
                  }),
                  (0, e.jsx)("div", {
                    className: s().Headline,
                    children: (0, a.Wn)("#nemestice_event_game"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().EventIntro,
                    children: (0, a.Wn)("#nemestice_event_title"),
                  }),
                  (0, e.jsx)("div", {
                    className: s().Description,
                    children: (0, a.Wn)("#nemestice_event_desc"),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, c.A)(s().HowToPlayRow, s().HowToPlay1),
                    "data-aos": "fade-left",
                    "data-aos-duration": "1500",
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().HowToPlayText,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Headline,
                            children: (0, a.Wn)(
                              "#nemestice_event_howtoplay1_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Description,
                            children: (0, a.Wn)(
                              "#nemestice_event_howtoplay1_desc",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        className: s().HowToPlayImg,
                        src: `${i.r.IMG_URL}/nemestice/howtoplay-1.png`,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, c.A)(s().HowToPlayRow, s().HowToPlay2),
                    "data-aos": "fade-right",
                    "data-aos-duration": "1500",
                    children: [
                      (0, e.jsx)("img", {
                        className: s().HowToPlayImg,
                        src: `${i.r.IMG_URL}/nemestice/howtoplay-2.png`,
                      }),
                      (0, e.jsxs)("div", {
                        className: s().HowToPlayText,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Headline,
                            children: (0, a.Wn)(
                              "#nemestice_event_howtoplay2_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Description,
                            children: (0, a.Wn)(
                              "#nemestice_event_howtoplay2_desc",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, c.A)(s().HowToPlayRow, s().HowToPlay3),
                    "data-aos": "fade-left",
                    "data-aos-duration": "1500",
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().HowToPlayText,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Headline,
                            children: (0, a.Wn)(
                              "#nemestice_event_howtoplay3_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Description,
                            children: (0, a.Wn)(
                              "#nemestice_event_howtoplay3_desc",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        className: s().HowToPlayImg,
                        src: `${i.r.IMG_URL}/nemestice/howtoplay-3.png`,
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: s().DividerBottom }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: s().BattlePass,
                children: [
                  (0, e.jsxs)("div", {
                    className: s().BattlePassIntro,
                    children: [
                      (0, e.jsx)("img", {
                        className: s().Img,
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                        src: `${i.r.IMG_URL}/nemestice/battlepass.png`,
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_intro_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_intro_desc"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().CavernCrawl,
                    children: [
                      (0, e.jsx)("img", {
                        className: s().Img,
                        src: `${i.r.IMG_URL}/nemestice/rewards/crawl_sets.png`,
                      }),
                      (0, e.jsx)("img", {
                        className: s().Logo,
                        onError: (l) =>
                          (l.target.src = `${i.r.IMG_URL}/nemestice/nemestice_logo_nobp_en.png`),
                        src: `${i.r.IMG_URL}/nemestice/nemestice_logo_nobp_${i.r.LANGUAGE}.png`,
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_cavern_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_cavern_desc"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().WeeklyQuests,
                    children: [
                      (0, e.jsx)("img", {
                        className: s().Img,
                        "data-aos": "fade-right",
                        "data-aos-delay": "200",
                        "data-aos-duration": "2000",
                        src: `${i.r.IMG_URL}/nemestice/weekly_quests.png`,
                      }),
                      (0, e.jsxs)("div", {
                        className: s().Text,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Headline,
                            children: (0, a.Wn)("#nemestice_bp_quests_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Description,
                            children: (0, a.Wn)("#nemestice_bp_quests_desc"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().AssistantFeatures,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_eventname"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_assistant_title"),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, c.A)(s().HowToPlayRow, s().HowToPlay1),
                        "data-aos": "fade-left",
                        "data-aos-duration": "1500",
                        children: [
                          (0, e.jsxs)("div", {
                            className: s().HowToPlayText,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().Headline,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_assistant_feat1_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Description,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_assistant_feat1_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsx)("img", {
                            className: s().AssistantImg,
                            src: `${i.r.IMG_URL}/nemestice/assistant_timers.png`,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, c.A)(s().HowToPlayRow, s().HowToPlay2),
                        "data-aos": "fade-right",
                        "data-aos-duration": "1500",
                        children: [
                          (0, e.jsxs)("div", {
                            className: s().HowToPlayText,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().Headline,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_assistant_feat2_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Description,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_assistant_feat2_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsx)("img", {
                            className: s().AssistantImg,
                            src: `${i.r.IMG_URL}/nemestice/assistant_quickbuy.jpg`,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, c.A)(s().HowToPlayRow, s().HowToPlay3),
                        "data-aos": "fade-left",
                        "data-aos-duration": "1500",
                        children: [
                          (0, e.jsxs)("div", {
                            className: s().HowToPlayText,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().Headline,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_assistant_feat3_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Description,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_assistant_feat3_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsx)("img", {
                            className: s().AssistantImg,
                            src: `${i.r.IMG_URL}/nemestice/assistant_neutrals.png`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().Rewards,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_rewards_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_rewards_desc"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().SpectreArcana,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("img", {
                            className: s().BPShieldSmall,
                            src: `${i.r.IMG_URL}nemestice/bp_level_shield_gold.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().LevelLabel,
                            children: (0, a.Wn)("#nemestice_bp_spectre_label"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("video", {
                        className: s().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${i.r.IMG_URL}/nemestice/rewards/spectre_arcana.jpg`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${i.r.VIDEO_URL}nemestice/rewards/spectre_arcana_loop.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}nemestice/rewards/spectre_arcana_loop.mp4`,
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        className: s().Logo,
                        onError: (l) =>
                          (l.target.src = `${i.r.IMG_URL}/nemestice/rewards/spectre_logo_en.png`),
                        src: `${i.r.IMG_URL}/nemestice/rewards/spectre_logo_${i.r.LANGUAGE}.png`,
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                      }),
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_bp_spectre_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_spectre_desc"),
                      }),
                      (0, e.jsxs)("video", {
                        className: s().ShowcaseVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${i.r.VIDEO_URL}nemestice/spectre_arcana.jpg`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${i.r.VIDEO_URL}nemestice/spectre_arcana.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}nemestice/spectre_arcana.webm`,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: s().Minigame,
                        children: [
                          (0, e.jsx)("img", {
                            className: s().MinigameArt,
                            src: `${i.r.IMG_URL}/nemestice/rewards/unlock_ui.png`,
                          }),
                          (0, e.jsxs)("div", {
                            className: s().MinigameText,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().Intro,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_spectre_minigame_label",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Headline,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_spectre_minigame_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Description,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_spectre_minigame_desc",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: s().SecondStyle,
                        children: [
                          (0, e.jsxs)("div", {
                            className: s().SecondStyleText,
                            children: [
                              (0, e.jsx)("div", {
                                className: s().Intro,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_spectre_style_label",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Headline,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_spectre_style_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: s().Description,
                                children: (0, a.Wn)(
                                  "#nemestice_bp_spectre_style_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsx)("img", {
                            className: s().SecondStyleArt,
                            src: `${i.r.IMG_URL}/nemestice/rewards/spec_style2.png`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().ArcanaBreakdown,
                    children: [
                      (0, e.jsxs)("video", {
                        className: s().ArcanaVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${i.r.VIDEO_URL}nemestice/spectre_loadout.jpg`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${i.r.VIDEO_URL}nemestice/spectre_loadout.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}nemestice/spectre_loadout.mp4`,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: s().BreakdownText,
                        children: [
                          (0, e.jsx)("div", {
                            className: s().Header,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_includes",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureTitle,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat1_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureDesc,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat1_desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureTitle,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat2_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureDesc,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat2_desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureTitle,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat3_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureDesc,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat3_desc",
                            ),
                          }),
                          (0, e.jsx)("img", {
                            className: s().FeatureImgs,
                            src: `${i.r.IMG_URL}/nemestice/rewards/spectre_iconsx.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureTitle,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat4_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureDesc,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat4_desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureTitle,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat5_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureDesc,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat5_desc",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureTitle,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat6_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: s().FeatureDesc,
                            children: (0, a.Wn)(
                              "#nemestice_bp_spectre_feat6_desc",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().DKPersona,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("img", {
                            className: s().BPShieldSmall,
                            src: `${i.r.IMG_URL}nemestice/bp_level_shield_silver.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().LevelLabel,
                            children: (0, a.Wn)("#nemestice_bp_dk_label"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("video", {
                        className: s().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${i.r.IMG_URL}/nemestice/rewards/dk_persona.jpg`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${i.r.VIDEO_URL}nemestice/rewards/dragon_knight_persona_loop.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}nemestice/rewards/dragon_knight_persona_loop.mp4`,
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        className: s().Logo,
                        onError: (l) =>
                          (l.target.src = `${i.r.IMG_URL}/nemestice/rewards/dragon_knight_logo_english.png`),
                        src: `${i.r.IMG_URL}/nemestice/rewards/dragon_knight_logo_${i.r.LANGUAGE}.png`,
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                      }),
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_bp_dk_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_dk_desc"),
                      }),
                      (0, e.jsxs)("video", {
                        className: s().ShowcaseVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${i.r.VIDEO_URL}nemestice/dragon_knight_persona.jpg`,
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${i.r.VIDEO_URL}nemestice/dragon_knight_persona.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${i.r.VIDEO_URL}nemestice/dragon_knight_persona.webm`,
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: s().DKAccessories,
                        children: [
                          (0, e.jsxs)("div", {
                            className: s().Accessory,
                            children: [
                              (0, e.jsx)("img", {
                                className: s().Image,
                                src: `${i.r.IMG_URL}nemestice/rewards/dk_sword.png`,
                              }),
                              (0, e.jsxs)("div", {
                                className: s().AccessoryText,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().Subhead,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_sword_level",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Title,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_sword_title",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Label,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_sword_label",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Description,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_sword_desc",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: s().Accessory,
                            children: [
                              (0, e.jsx)("img", {
                                className: s().Image,
                                src: `${i.r.IMG_URL}nemestice/rewards/dk_pauldrons.png`,
                              }),
                              (0, e.jsxs)("div", {
                                className: s().AccessoryText,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().Subhead,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_pauldrons_level",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Title,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_pauldrons_title",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Label,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_pauldrons_label",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Description,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_pauldrons_desc",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: s().Accessory,
                            children: [
                              (0, e.jsx)("img", {
                                className: s().Image,
                                src: `${i.r.IMG_URL}nemestice/rewards/dk_helmet.png`,
                              }),
                              (0, e.jsxs)("div", {
                                className: s().AccessoryText,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: s().Subhead,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_helmet_level",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Title,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_helmet_title",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Label,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_helmet_label",
                                    ),
                                  }),
                                  (0, e.jsx)("div", {
                                    className: s().Description,
                                    children: (0, a.Wn)(
                                      "#nemestice_bp_dk_helmet_desc",
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
                  (0, e.jsxs)("div", {
                    className: s().Invoker,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("img", {
                            className: s().BPShieldSmall,
                            src: `${i.r.IMG_URL}nemestice/bp_level_shield_gold.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().LevelLabel,
                            children: (0, a.Wn)("#nemestice_bp_invoker_level"),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_invoker_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_bp_invoker_label"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_invoker_desc"),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().VideoContainer,
                        children: [
                          (0, e.jsx)("img", {
                            className: s().Image,
                            "data-aos": "fade-right",
                            "data-aos-duration": "1500",
                            src: `${i.r.IMG_URL}nemestice/rewards/invoker_frame.png`,
                          }),
                          (0, e.jsx)("img", {
                            className: s().Image2,
                            "data-aos": "fade-left",
                            "data-aos-duration": "1500",
                            src: `${i.r.IMG_URL}nemestice/rewards/invoker_frame2.png`,
                          }),
                          (0, e.jsxs)("video", {
                            className: s().ShowcaseVideo,
                            autoPlay: !0,
                            preload: "auto",
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: `${i.r.VIDEO_URL}nemestice/rewards/invoker_kid.jpg`,
                            children: [
                              (0, e.jsx)("source", {
                                type: "video/webm",
                                src: `${i.r.VIDEO_URL}nemestice/rewards/invoker_kid.webm`,
                              }),
                              (0, e.jsx)("source", {
                                type: "video/mp4",
                                src: `${i.r.VIDEO_URL}nemestice/rewards/invoker_kid.mp4`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: s().Note1,
                        children: (0, a.Wn)("#nemestice_bp_invoker_note1"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Note2,
                        children: (0, a.Wn)("#nemestice_bp_invoker_note2"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Note3,
                        children: (0, a.Wn)("#nemestice_bp_invoker_note3"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().AttackFX,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("img", {
                            className: s().BPShieldSmall,
                            src: `${i.r.IMG_URL}nemestice/bp_level_shield_gold.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().LevelLabel,
                            children: (0, a.Wn)("#nemestice_bp_attackfx_level"),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_attackfx_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_bp_attackfx_label"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_attackfx_desc"),
                      }),
                      (0, e.jsxs)("div", {
                        className: s().VideoContainer,
                        children: [
                          (0, e.jsx)("img", {
                            className: s().Image,
                            src: `${i.r.IMG_URL}nemestice/rewards/attack_fx.png`,
                          }),
                          (0, e.jsxs)("video", {
                            className: s().ShowcaseVideo,
                            autoPlay: !0,
                            preload: "auto",
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: `${i.r.VIDEO_URL}nemestice/rewards/attack_modifier.jpg`,
                            children: [
                              (0, e.jsx)("source", {
                                type: "video/webm",
                                src: `${i.r.VIDEO_URL}nemestice/rewards/attack_modifier.webm`,
                              }),
                              (0, e.jsx)("source", {
                                type: "video/mp4",
                                src: `${i.r.VIDEO_URL}nemestice/rewards/attack_modifier.mp4`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().Immortals,
                    children: [
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_eventname"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_immortals_title"),
                      }),
                      (0, e.jsx)(r.Zk, {
                        strContentDir: "nemestice",
                        strPrimaryColor: "#edd3ff",
                        strSecondaryColor: "#da69e4",
                        strTertiaryColor: "#555555",
                        arrImmortalTreasures: j,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().Creeps,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("img", {
                            className: s().BPShieldSmall,
                            src: `${i.r.IMG_URL}nemestice/bp_level_shield_silver.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().LevelLabel,
                            children: (0, a.Wn)("#nemestice_bp_creeps_level"),
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        className: s().Img,
                        src: `${i.r.IMG_URL}nemestice/rewards/creeps.png`,
                      }),
                      (0, e.jsx)("div", {
                        className: s().Headline,
                        children: (0, a.Wn)("#nemestice_bp_creeps_title"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Subhead,
                        children: (0, a.Wn)("#nemestice_bp_creeps_label"),
                      }),
                      (0, e.jsx)("div", {
                        className: s().Description,
                        children: (0, a.Wn)("#nemestice_bp_creeps_desc"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: s().MoreRewards,
                    children: [
                      (0, e.jsxs)("div", {
                        className: s().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, e.jsx)("img", {
                            className: s().BPShieldSmall,
                            src: `${i.r.IMG_URL}nemestice/bp_level_shield_bronze.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().LevelLabel,
                            children: (0, a.Wn)("#nemestice_bp_courier_level"),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: (0, c.A)(
                          s().MoreRewardsRow,
                          s().MoreRewardsRow1,
                        ),
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                        children: (0, e.jsxs)("div", {
                          className: (0, c.A)(s().RewardItem, s().RewardItem1),
                          children: [
                            (0, e.jsx)("img", {
                              className: s().Img,
                              src: `${i.r.IMG_URL}/nemestice/rewards/wards.png`,
                            }),
                            (0, e.jsx)("div", {
                              className: s().Headline,
                              children: (0, a.Wn)("#nemestice_bp_wards_title"),
                            }),
                            (0, e.jsx)("div", {
                              className: s().Label,
                              children: (0, a.Wn)("#nemestice_bp_wards_label"),
                            }),
                            (0, e.jsx)("div", {
                              className: s().Description,
                              children: (0, a.Wn)("#nemestice_bp_wards_desc"),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, c.A)(
                          s().MoreRewardsRow,
                          s().MoreRewardsRow2,
                        ),
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                        children: (0, e.jsxs)("div", {
                          className: (0, c.A)(s().RewardItem, s().RewardItem2),
                          children: [
                            (0, e.jsx)("img", {
                              className: s().Img,
                              src: `${i.r.IMG_URL}/nemestice/rewards/courier.png`,
                            }),
                            (0, e.jsx)("div", {
                              className: s().Headline,
                              children: (0, a.Wn)(
                                "#nemestice_bp_courier_title",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: s().Label,
                              children: (0, a.Wn)(
                                "#nemestice_bp_courier_label",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: s().Description,
                              children: (0, a.Wn)("#nemestice_bp_courier_desc"),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, c.A)(
                          s().MoreRewardsRow,
                          s().MoreRewardsRow3,
                        ),
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                        children: (0, e.jsxs)("div", {
                          className: (0, c.A)(s().RewardItem, s().RewardItem3),
                          children: [
                            (0, e.jsx)("img", {
                              className: s().Img,
                              src: `${i.r.IMG_URL}/nemestice/rewards/music_pack.png`,
                            }),
                            (0, e.jsx)("div", {
                              className: s().Headline,
                              children: (0, a.Wn)("#nemestice_bp_music_title"),
                            }),
                            (0, e.jsx)("div", {
                              className: s().Label,
                              children: (0, a.Wn)("#nemestice_bp_music_label"),
                            }),
                            (0, e.jsx)("div", {
                              className: s().Description,
                              children: (0, a.Wn)("#nemestice_bp_music_desc"),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("div", { className: s().ThinDivider }),
                      (0, e.jsxs)("div", {
                        className: s().RewardsMontage,
                        children: [
                          (0, e.jsx)("img", {
                            className: s().MontageImg,
                            src: `${i.r.IMG_URL}/nemestice/rewards/montage.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: s().Headline,
                            children: (0, a.Wn)("#nemestice_bp_montage_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: s().Description,
                            children: (0, a.Wn)("#nemestice_bp_montage_desc"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, c.A)(
                  s().PurchaseBanner,
                  s().LowerPurchaseBanner,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: s().Headline,
                    children: (0, a.Wn)("Purchase Battle Pass"),
                  }),
                  (0, e.jsxs)("div", {
                    className: s().ButtonRow,
                    children: [
                      (0, e.jsx)(n.$x, {
                        colorTopEdge: "#8491B0",
                        colorTop: "#404772 ",
                        colorMiddle: "#2D304F",
                        colorBottom: "#151828",
                        level: 1,
                        itemid: 18695,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, e.jsx)(n.$x, {
                        colorTopEdge: "#8EBBDC",
                        colorTop: "#2E369E ",
                        colorMiddle: "#2B3493",
                        colorBottom: "#0E1B5D",
                        level: 50,
                        discountPct: 4,
                        itemid: 18696,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, e.jsx)(n.$x, {
                        colorTopEdge: "#DF6BCC",
                        colorTop: "#5943A5 ",
                        colorMiddle: "#4E3692",
                        colorBottom: "#33216F",
                        level: 100,
                        discountPct: 19,
                        itemid: 18697,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: s().GrassLayer }),
                ],
              }),
              (0, e.jsx)(h.K, {}),
            ],
          });
        });
      },
      19890: (d) => {
        d.exports = {
          Tooltip: "_2h7lSR0tx1SxTgh_Xsoscz",
          CarouselFade: "HKaWhJwG4O1eT4dgejPo9",
          StandardButton: "vZ_aay_tG4g-GbazEbpQD",
          ButtonText: "GDKv6teXMMzAXpOqass5R",
          Icon: "_2o0MK1-8jkF4GpWkfc7eyB",
          Play: "_3QDwHwcVsVoST1ixRw5ilC",
          SteamLogo: "hODjdfHCWLj-FZxlAVgv7",
          ToolTip: "_308uhzo7Oxu1rHgRhfAv1p",
          PlayerReportTooltip: "_2WB4eIfzJ5gyyDxdrTT-Dj",
          HorizBar: "MczSAE9sgQKxKLDI6O0DO",
          RightArrow: "_3mJyRxs009N_fLv3VDQutm",
          UpRightArrow: "_3WcSPMuDwtnER5Gc3-_rn8",
          BPLevelContainer: "_3FVSCuJl0uQ6dZpP-UAhPu",
          BPShieldSmall: "xE6267CSFh1PRVc9i5Joh",
          LevelLabel: "_2DtvP4OZ_2oNLFvlgdqSEh",
          DividerBottom: "_2v_ihO3cTvvtAS8m_Rxi9R",
          Headline: "_3guQSl0uNaSrD3ftAFkxrD",
          Description: "_3hQxNf2lxuMna2urM8f3H4",
          Label: "_2gZVfvrnsN6cuPVemHqsjW",
          HomePage: "_1YpsjgLnAa2LMd7DlPvtCi",
          HeaderSection: "_2KOlTzEkfGCv_Mt-FX_K2M",
          BottomFade: "_35RzP9PNIRyfZqJfVZSMVW",
          BackgroundVideoContainer: "_3QeJjpQ4h5rrJYRSIQluJe",
          PlayButtonPositioner: "_1tIterUfhqk0UhIyNvghiE",
          TitleContainer: "_3EhSHM1fjgxyzO0GL_b1yb",
          PlayContainer: "_2mys3InEddgQ2MrOljVY9N",
          PlayButton: "_215frA3KP_w1NR9Dz4T-rb",
          PlayLabel: "xCzESfSPr2jEPDQKJgLY8",
          PurchaseBanner: "_3E1Ap3baN7jkrlLFXdtEw6",
          GrassLayer: "_1OXX7DOa_nytyN-R_XZ8ob",
          ButtonRow: "eOwRFAcH2flnH_AH86uAu",
          BuyBattlePassCapsule: "_1JRkrDIkisRL0FDDN3TO1Y",
          LowerPurchaseBanner: "A5yblJ46zJCdb06mx7mhn",
          EventGame: "_3OlbRRs_fXJQx_32Zfj-jX",
          Subhead: "_2psVUXpV2fEz03zTMrKzq3",
          Logo: "_1amwtjc0H-_66eNcCgswR3",
          EventIntro: "_2Yp3ylHLhDxbQGRG75P9Lx",
          HowToPlayRow: "_2DDzlxh4M1vki71z8eQsxz",
          HowToPlayText: "_3XYBZ74IqnpI-zjEspDUXY",
          HowToPlayImg: "_15m8VVuBS6cDkMSku7E87h",
          HowToPlay1: "_1gU4V6SAiqzI-ICPUg1Vsj",
          HowToPlay2: "_1y78xjacluYqNYSuI9mk46",
          BattlePass: "_3JQBU5DrvBQsMXtw2JWVXW",
          BattlePassIntro: "_2OFRGD1Hj12vOCiu0JAFMN",
          Img: "_2qkLwl_fX2wYE1tvYeiGSG",
          CavernCrawl: "_24Voa6lxi3vH7FmY_6buVb",
          WeeklyQuests: "_1y8Ir-dN0D3gwNj45dtUET",
          Text: "nTq8M3QESC_qRdqrpQp90",
          AssistantFeatures: "_2RUu_Lwk6vTn_nlI7lQDB3",
          AssistantImg: "_2v8bJ9VtRaI0M6faIVVKRC",
          Rewards: "Fs7ACSO3F8ITk1FsxLQt6",
          SpectreArcana: "_1rmP1hOeEE3pWHcw-_4idw",
          BackgroundVideo: "_33lJvLiyTIakOo7MiFtrmj",
          ShowcaseVideo: "_2mbMSi4yqOKyOZGjih_qnq",
          SecondStyle: "_1HKZbi-yiWbZ6KRS4J2dpq",
          SecondStyleArt: "zbEaaUjLvkovvao13lLGc",
          SecondStyleText: "_1cwpRjF0T5dIXLz3Y0Hyq8",
          Intro: "_3SH9x9zpTWnumVFuGeC9Jg",
          Minigame: "_2favlEWy0JnyjP00ytdUGN",
          MinigameArt: "_2bCbie5eLdcKBwZQJEBsWG",
          MinigameText: "_2gb0nAWIf3fqdls-XNGAI9",
          ArcanaBreakdown: "_2HpNQ0e9nlU-M8g3gMtUky",
          ArcanaVideo: "_1IJK6-AEgjp32USzBtc18E",
          BreakdownText: "klzTi9lDB5XxK3GVMprR0",
          Header: "_3flbMoHg-rboAoZ2sM7KlB",
          FeatureTitle: "_3IF_IErOoJeVimdPOHRhvN",
          FeatureDesc: "_1fpcmD6I3ZRfNqc6Yod28u",
          FeatureImgs: "_2ZQZ8TO9Euh7aqoaP36mZT",
          DKPersona: "Nwfm9GkCMOVvQF3fgAVrO",
          DKAccessories: "_384zN0kg0I2rH1vYxd3XKk",
          Accessory: "_3TkcmsCwqeW6nsvcP7P1K5",
          Image: "_1S8VXlh3FeXipwX3vujgiF",
          AccessoryText: "_1zbCP9_TUOH-apraKsdjRE",
          Title: "oPpf_VZD5BarsEuZqsEZI",
          Invoker: "YwK_IkN_ugnxQVIvcUw2S",
          Note1: "_25IHw4zTcD3IFzJY2GlD2h",
          Note2: "_2W5oQxTgrhF9oK1hawYRjt",
          Note3: "_2kPTMdYdDwMFLnxGLDi0GH",
          VideoContainer: "_1fz_7bpQJFQ35jhBnuUi2Z",
          Image2: "_1PSTUPDAg_TD_aRr_qDisS",
          AttackFX: "_1DD8zXLaftFQh6-xfZwyXH",
          Creeps: "ZuMNcys1J2eDSYK-TBm18",
          Immortals: "_1M_tt0qVNG4TgcAnKgWiEl",
          MoreRewards: "QvkBKlXHZ_IOwXGRCiQU-",
          MoreRewardsRow: "_3O5gqVcaGdsSJ3bKYdyTiF",
          RewardItem: "_3A38FkMISsHUnrQIeIeZ7c",
          RewardItem2: "_3ciDhOHkqdFbZKe0ez6DkB",
          ThinDivider: "CwHixSxGxhXacKKXX4t5L",
          MoreRewardsRow1: "_3GlLxy_xvHOLNHBVi93644",
          MoreRewardsRow2: "BD1hUN3TWu_fGy1173ent",
          MoreRewardsRow3: "_382GHpESGrshKgpZdI9xyi",
          RewardsMontage: "_1VDjRKpIw1P3Qu2hFa5VX0",
          MontageImg: "_1itAJqNg4ZIFV_2TIkCqYy",
          LoreSection: "qvGKqawIBTzZC-sH-9Wu-",
        };
      },
    },
  ]);
})();
