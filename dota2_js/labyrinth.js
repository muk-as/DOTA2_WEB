// 98718.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [98718],
    {
      22586: (m, h, i) => {
        "use strict";
        i.d(h, { C: () => u, _: () => b });
        var a = i(69500),
          r = i(7552),
          y = i(68542),
          e = i.n(y),
          o = i(2095),
          v = i(8305),
          c = i(15001),
          s = i(37536),
          b = ((l) => (
            (l[(l.TOP = 0)] = "TOP"),
            (l[(l.BOTTOM = 1)] = "BOTTOM"),
            (l[(l.LEFT = 2)] = "LEFT"),
            (l[(l.RIGHT = 3)] = "RIGHT"),
            l
          ))(b || {});
        const u = (l) => {
          const [n, d] = (0, r.useState)(!1),
            [p, x] = (0, r.useState)(l.strYouTubeVideoID == null),
            g = (0, r.useRef)(null);
          let t =
            ".LabelStyleHack { background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; ";
          l.labelColors &&
            (l.labelColors.length > 1
              ? (t += `background-image: -webkit-linear-gradient( left, ${l.labelColors.join(", ")} ); `)
              : (t += `background-image: -webkit-linear-gradient( left, ${l.labelColors[0]}, ${l.labelColors[0]} ); `));
          const j = l.glowDetails?.sort((_, N) => _.size - N.size);
          return (
            j &&
              ((t += `-webkit-filter: ${j.map((_) => `drop-shadow( 0px 0px ${_.size}px ${_.color} )`).join(" ")}; `),
              (t += `filter: ${j.map((_) => `drop-shadow( 0px 0px ${_.size}px ${_.color} )`).join(" ")}; `)),
            (0, a.jsxs)("div", {
              className: e().TrailerOverlay,
              children: [
                (0, a.jsx)("div", { className: e().FadeBottom }),
                l.strBackgroundImage &&
                  !l.strBackgroundVideo &&
                  (0, a.jsx)("img", {
                    className: e().BackgroundImage,
                    src: `${o.r.IMG_URL}${l.strBackgroundImage}`,
                  }),
                l.strBackgroundVideo &&
                  (0, a.jsx)("div", {
                    className: e().BackgroundVideo,
                    children: (0, a.jsxs)("video", {
                      className: e().BackgroundVideo,
                      autoPlay: !0,
                      preload: "auto",
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      poster: `${o.r.IMG_URL}${l.strBackgroundImage}`,
                      children: [
                        (0, a.jsx)("source", {
                          type: "video/webm",
                          src: `${o.r.VIDEO_URL}${l.strBackgroundVideo}.webm`,
                        }),
                        (0, a.jsx)("source", {
                          type: "video/mp4",
                          src: `${o.r.VIDEO_URL}${l.strBackgroundVideo}.mp4`,
                        }),
                      ],
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: (0, c.A)(e().TrailerContainer, n && e().Playing),
                  children: [
                    l.strYouTubeVideoID &&
                      (0, a.jsx)(s.N1, {
                        video: l.strYouTubeVideoID,
                        autoplay: !1,
                        playsInline: !0,
                        controls: !0,
                        ref: g,
                        onPlayerReady: () => x(!0),
                        onBuffering: () => d(!0),
                        onPlaying: () => d(!0),
                        onPaused: () => d(!1),
                        onMovieEnd: () => d(!1),
                      }),
                    l.strForegroundVideo &&
                      (0, a.jsxs)("video", {
                        className: e().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${o.r.IMG_URL}${l.strBackgroundImage}`,
                        children: [
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${o.r.VIDEO_URL}${l.strForegroundVideo}.webm`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${o.r.VIDEO_URL}${l.strForegroundVideo}.mp4`,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: (0, c.A)(
                    e().LogoElementContainer,
                    l.eLogoPosition == 0 && e().LogoTop,
                    l.eLogoPosition == 1 && e().LogoBottom,
                    l.eLogoPosition == 2 && e().LogoLeft,
                    l.eLogoPosition == 3 && e().LogoRight,
                  ),
                  children: [
                    l.logoElement,
                    (0, a.jsxs)("div", {
                      className: (0, c.A)(
                        e().PlayButtonContainer,
                        (n || !p) && e().Hide,
                      ),
                      onClick: () => {
                        d(!0), g.current?.PlayVideo(!1);
                      },
                      children: [
                        (0, a.jsx)("div", {
                          className: e().Button,
                          style: {
                            backgroundImage: `url( ${o.r.IMG_URL}${l.strPlayButton} )`,
                          },
                        }),
                        (0, a.jsx)("style", { children: t }),
                        (0, a.jsx)("div", {
                          className: (0, c.A)(e().Label, "LabelStyleHack"),
                          children: (0, v.Wn)(l.strPlayButtonLabel),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      },
      98718: (m, h, i) => {
        "use strict";
        i.r(h), i.d(h, { default: () => x });
        var a = i(69500),
          r = i(2095),
          y = i(56490),
          e = i.n(y),
          o = i(15001),
          v = i(45488),
          c = i(3878),
          s = i(8305),
          b = i(63177),
          u = i(42616),
          l = i(10806),
          n = i(34774),
          d = i(73202),
          p = i(22586);
        const x = (0, c.PA)(() => {
          v.o.RequestBPPrices([17707, 17708, 17709]);
          const g = [
            {
              bEnabled: !0,
              arrImmortals: [
                {
                  strHeroName: "lone_druid",
                  eRarity: n.yP.Normal,
                  eImageLoc: n.gv.Left,
                },
                {
                  strHeroName: "huskar",
                  eRarity: n.yP.Normal,
                  eImageLoc: n.gv.Right,
                },
                {
                  strHeroName: "zuus",
                  eRarity: n.yP.Normal,
                  eImageLoc: n.gv.Right,
                },
                {
                  strHeroName: "abyssal_underlord",
                  eRarity: n.yP.Normal,
                  eImageLoc: n.gv.Left,
                },
                {
                  strHeroName: "venomancer",
                  eRarity: n.yP.Normal,
                  eImageLoc: n.gv.Right,
                },
                {
                  strHeroName: "naga_siren",
                  eRarity: n.yP.Normal,
                  eImageLoc: n.gv.Left,
                },
                {
                  strHeroName: "omniknight",
                  strTooltip: "#battlepass_tooltip_rare",
                  eRarity: n.yP.Rare,
                  eImageLoc: n.gv.Right,
                },
                {
                  strHeroName: "zuus",
                  strTooltip: "#battlepass_tooltip_very_rare",
                  eRarity: n.yP.Very,
                  eImageLoc: n.gv.Left,
                  bGold: !0,
                },
                {
                  strHeroName: "huskar",
                  strTooltip: "#battlepass_tooltip_very_rare",
                  eRarity: n.yP.Very,
                  eImageLoc: n.gv.Right,
                  bGold: !0,
                },
                {
                  strHeroName: "doom_bringer",
                  strTooltip: "#battlepass_tooltip_ultra_rare",
                  eRarity: n.yP.Ultra,
                  eImageLoc: n.gv.Left,
                },
              ],
            },
          ];
          return (0, a.jsxs)("div", {
            className: e().HomePage,
            children: [
              (0, a.jsx)(b.A, { bOverlapping: !0 }),
              (0, a.jsx)(d.mg, {
                children: (0, a.jsx)("title", {
                  children: (0, s.Wn)("#labyrinth_title"),
                }),
              }),
              (0, a.jsx)("div", {
                className: e().HeaderSection,
                children: (0, a.jsxs)("div", {
                  className: e().TitleContainer,
                  children: [
                    (0, a.jsx)(p.C, {
                      strBackgroundVideo: "labyrinth/agh_header_right",
                      strPlayButton: "labyrinth/play_button.png",
                      strPlayButtonLabel: "#labyrinth_trailer",
                      strYouTubeVideoID: "BuR9Bf5-034",
                      labelColors: ["#A6EAFF", "#FFFFFF", "#A6EAFF"],
                      glowDetails: [
                        { size: 3, color: "#00000091" },
                        { size: 10, color: "#0066ff" },
                        { size: 8, color: "#b566ff" },
                      ],
                      eLogoPosition: p._.LEFT,
                      logoElement: (0, a.jsx)("img", {
                        className: (0, o.A)(e().Logo, e().Img1),
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_${r.r.LANGUAGE}.png`,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: e().Headline,
                      children: (0, s.Wn)("#labyrinth_lore_title"),
                    }),
                    (0, a.jsx)("div", {
                      className: e().Description,
                      children: (0, s.Wn)("#labyrinth_lore_desc"),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: e().PurchaseBanner,
                children: [
                  (0, a.jsx)("div", {
                    className: e().Headline,
                    children: (0, s.Wn)("#labyrinth_battlepass"),
                  }),
                  (0, a.jsxs)("div", {
                    className: e().ButtonRow,
                    children: [
                      (0, a.jsx)(l.$x, {
                        colorTopEdge: "#7A7096",
                        colorTop: "#4F496050 ",
                        colorMiddle: "#4F4960",
                        colorBottom: "#4F4960",
                        level: 1,
                        itemid: 17707,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, a.jsx)(l.$x, {
                        colorTopEdge: "#3C6AFB",
                        colorTop: "#2D4EB450 ",
                        colorMiddle: "#2D4EB4",
                        colorBottom: "#2D4EB4",
                        level: 50,
                        discountPct: 4,
                        itemid: 17708,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, a.jsx)(l.$x, {
                        colorTopEdge: "#7e57ff",
                        colorTop: "#5741A250 ",
                        colorMiddle: "#5741A2",
                        colorBottom: "#5741A2",
                        level: 100,
                        discountPct: 19,
                        itemid: 17709,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: e().EventGame,
                children: [
                  (0, a.jsx)("div", {
                    className: e().Subhead,
                    children: (0, s.Wn)("#labyrinth_event_label"),
                  }),
                  (0, a.jsx)("img", {
                    className: e().Logo,
                    onError: (t) =>
                      (t.target.src = `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_en.png`),
                    src: `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_${r.r.LANGUAGE}.png`,
                  }),
                  (0, a.jsx)("div", {
                    className: e().Headline,
                    children: (0, s.Wn)("#labyrinth_event_game"),
                  }),
                  (0, a.jsx)("div", {
                    className: e().EventIntro,
                    children: (0, s.Wn)("#labyrinth_event_title"),
                  }),
                  (0, a.jsx)("div", {
                    className: e().Description,
                    children: (0, s.Wn)("#labyrinth_event_desc"),
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, o.A)(e().HowToPlayRow, e().HowToPlay1),
                    "data-aos": "fade-left",
                    "data-aos-duration": "1500",
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().HowToPlayText,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Headline,
                            children: (0, s.Wn)(
                              "#labyrinth_event_howtoplay1_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().Description,
                            children: (0, s.Wn)(
                              "#labyrinth_event_howtoplay1_desc",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("img", {
                        className: e().HowToPlayImg,
                        src: `${r.r.IMG_URL}/labyrinth/htp_explore.png`,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, o.A)(e().HowToPlayRow, e().HowToPlay2),
                    "data-aos": "fade-right",
                    "data-aos-duration": "1500",
                    children: [
                      (0, a.jsx)("img", {
                        className: e().HowToPlayImg,
                        src: `${r.r.IMG_URL}/labyrinth/htp_path.png`,
                      }),
                      (0, a.jsxs)("div", {
                        className: e().HowToPlayText,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Headline,
                            children: (0, s.Wn)(
                              "#labyrinth_event_howtoplay2_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().Description,
                            children: (0, s.Wn)(
                              "#labyrinth_event_howtoplay2_desc",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, o.A)(e().HowToPlayRow, e().HowToPlay3),
                    "data-aos": "fade-left",
                    "data-aos-duration": "1500",
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().HowToPlayText,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Headline,
                            children: (0, s.Wn)(
                              "#labyrinth_event_howtoplay3_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().Description,
                            children: (0, s.Wn)(
                              "#labyrinth_event_howtoplay3_desc",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("img", {
                        className: e().HowToPlayImg,
                        src: `${r.r.IMG_URL}/labyrinth/htp_roster.png`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: e().BlessingsRow,
                children: [
                  (0, a.jsx)("div", { className: e().TopFade }),
                  (0, a.jsxs)("div", {
                    className: e().BlessingsText,
                    "data-aos": "fade-up",
                    "data-aos-duration": "1500",
                    children: [
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_event_blessings_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Label,
                        children: (0, s.Wn)("#labyrinth_event_blessings_label"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_event_blessings_desc"),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: e().DividerBottom }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: e().BattlePass,
                children: [
                  (0, a.jsxs)("div", {
                    className: e().Rewards,
                    children: [
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/aghlab_battlepass_logo_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/aghlab_battlepass_logo_${r.r.LANGUAGE}.png`,
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_intro_desc"),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().CavernCrawl,
                    children: [
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_${r.r.LANGUAGE}.png`,
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_cavern_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_cavern_desc"),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().WeeklyQuests,
                    children: [
                      (0, a.jsx)("img", {
                        className: e().Img,
                        "data-aos": "fade-right",
                        "data-aos-delay": "200",
                        "data-aos-duration": "2000",
                        src: `${r.r.IMG_URL}/labyrinth/weekly_quests.png`,
                      }),
                      (0, a.jsxs)("div", {
                        className: e().Text,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Headline,
                            children: (0, s.Wn)("#labyrinth_bp_quests_title"),
                          }),
                          (0, a.jsx)("div", {
                            className: e().Description,
                            children: (0, s.Wn)("#labyrinth_bp_quests_desc"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().AssistantFeatures,
                    children: [
                      (0, a.jsx)("div", { className: e().DividerTop }),
                      (0, a.jsx)("div", { className: e().DividerBottom }),
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/agh_logo_plus_bp_${r.r.LANGUAGE}.png`,
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_additional_title"),
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, o.A)(e().HowToPlayRow, e().HowToPlay1),
                        "data-aos": "fade-left",
                        "data-aos-duration": "1500",
                        children: [
                          (0, a.jsxs)("div", {
                            className: e().HowToPlayText,
                            children: [
                              (0, a.jsx)("div", {
                                className: e().Label,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_feat1_label",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Headline,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_feat1_title",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Description,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_feat1_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsx)("img", {
                            className: e().AssistantImg,
                            src: `${r.r.IMG_URL}/labyrinth/assistant_neutrals.jpg`,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, o.A)(e().HowToPlayRow, e().HowToPlay1),
                        "data-aos": "fade-right",
                        "data-aos-duration": "1500",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().AssistantImg,
                            src: `${r.r.IMG_URL}/labyrinth/assistant_rune.png`,
                          }),
                          (0, a.jsxs)("div", {
                            className: e().HowToPlayText2,
                            children: [
                              (0, a.jsx)("div", {
                                className: e().Label,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_rune_spawn_label",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Headline,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_rune_spawn_title",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Description,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_rune_spawn_desc",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, o.A)(e().HowToPlayRow, e().HowToPlay1),
                        "data-aos": "fade-left",
                        "data-aos-duration": "1500",
                        children: [
                          (0, a.jsxs)("div", {
                            className: e().HowToPlayText,
                            children: [
                              (0, a.jsx)("div", {
                                className: e().Label,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_avg_bounty_label",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Headline,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_avg_bounty_title",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Description,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_assistant_avg_bounty_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsx)("img", {
                            className: e().AssistantImg,
                            src: `${r.r.IMG_URL}/labyrinth/assistant_bounty.png`,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: (0, o.A)(e().HowToPlayRow, e().HowToPlay1),
                        children: (0, a.jsxs)("div", {
                          className: e().HowToPlayText3,
                          children: [
                            (0, a.jsx)("div", {
                              className: e().Label,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_assistant_feat2_label",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().Headline,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_assistant_feat2_title",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().Description,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_assistant_feat2_desc",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().StandardButton,
                              children: (0, a.jsx)("a", {
                                href: "https://www.dota2.com/controllerfaq",
                                children: (0, a.jsx)("div", {
                                  className: e().ButtonText,
                                  children: (0, s.Wn)(
                                    "#labyrinth_bp_assistant_feat2_btn",
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().Rewards,
                    children: [
                      (0, a.jsx)("img", {
                        className: e().Img,
                        "data-aos": "fade-up",
                        "data-aos-delay": "200",
                        "data-aos-duration": "2000",
                        src: `${r.r.IMG_URL}/labyrinth/reward_line.png`,
                      }),
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/aghlab_battlepass_logo_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/aghlab_battlepass_logo_${r.r.LANGUAGE}.png`,
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_rewards_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_rewards_desc"),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().DrowArcana,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().BPShieldSmall,
                            src: `${r.r.IMG_URL}nemestice/bp_level_shield_gold.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().LevelLabel,
                            children: (0, s.Wn)("#labyrinth_bp_drow_label"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("video", {
                        className: e().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${r.r.IMG_URL}/labyrinth/rewards/drow_hero.jpg`,
                        children: [
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${r.r.VIDEO_URL}labyrinth/rewards/drow_hero.webm`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${r.r.VIDEO_URL}labyrinth/rewards/drow_hero.mp4`,
                          }),
                        ],
                      }),
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/arcana_drow_logo_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/arcana_drow_logo_${r.r.LANGUAGE}.png`,
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_drow_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_drow_desc"),
                      }),
                      (0, a.jsxs)("div", {
                        className: e().VideoContainer,
                        children: [
                          (0, a.jsxs)("video", {
                            className: e().ShowcaseVideo,
                            autoPlay: !0,
                            preload: "auto",
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: `${r.r.VIDEO_URL}labyrinth/drow_ranger_arcana.jpg`,
                            children: [
                              (0, a.jsx)("source", {
                                type: "video/webm",
                                src: `${r.r.VIDEO_URL}labyrinth/drow_ranger_arcana.webm`,
                              }),
                              (0, a.jsx)("source", {
                                type: "video/mp4",
                                src: `${r.r.VIDEO_URL}labyrinth/drow_ranger_arcana.webm`,
                              }),
                            ],
                          }),
                          (0, a.jsx)("img", {
                            className: e().Cloud1,
                            "data-aos": "fade-left",
                            "data-aos-delay": "300",
                            "data-aos-duration": "2000",
                            src: `${r.r.IMG_URL}/labyrinth/cloud1.png`,
                          }),
                          (0, a.jsx)("img", {
                            className: e().Cloud2,
                            "data-aos": "fade-right",
                            "data-aos-delay": "300",
                            "data-aos-duration": "2000",
                            src: `${r.r.IMG_URL}/labyrinth/cloud2.png`,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: e().Minigame,
                        children: (0, a.jsxs)("div", {
                          className: e().MinigameText,
                          children: [
                            (0, a.jsx)("div", {
                              className: e().Headline,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_drow_minigame_title",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().EventIntro,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_drow_minigame_label",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().Description,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_drow_minigame_desc",
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().ArcanaBreakdown,
                    children: [
                      (0, a.jsxs)("video", {
                        className: e().ArcanaVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${r.r.VIDEO_URL}labyrinth/drow_loadout.jpg`,
                        children: [
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${r.r.VIDEO_URL}labyrinth/drow_loadout.webm`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${r.r.VIDEO_URL}labyrinth/drow_loadout.mp4`,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: e().BreakdownText,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Headline,
                            children: (0, s.Wn)("#labyrinth_bp_drow_includes"),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat1_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureDesc,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat1_desc",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat2_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureDesc,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat2_desc",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat3_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureDesc,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat3_desc",
                            ),
                          }),
                          (0, a.jsx)("img", {
                            className: e().FeatureImgs,
                            src: `${r.r.IMG_URL}/labyrinth/drow_icons.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat4_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureDesc,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat4_desc",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat5_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureDesc,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat5_desc",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat6_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureDesc,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat6_desc",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().FeatureTitle,
                            children: (0, s.Wn)(
                              "#labyrinth_bp_drow_feat7_title",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().Wallpapers,
                            children: (0, a.jsxs)("div", {
                              className: e().WallpaperGroup,
                              children: [
                                (0, a.jsx)("a", {
                                  href: `${r.r.IMG_URL}labyrinth/wallpapers/wallpaper_1_${r.r.LANGUAGE == "schinese" ? "schinese" : "en"}.jpg`,
                                  children: (0, a.jsx)("div", {
                                    className: e().Wallpaper,
                                    children: (0, a.jsx)("img", {
                                      className: e().WallpaperImgDesktop,
                                      onError: (t) =>
                                        (t.target.src = `${r.r.IMG_URL}/labyrinth/wallpapers/wallpaper_1_thumb_en.jpg`),
                                      src: `${r.r.IMG_URL}/labyrinth/wallpapers/wallpaper_1_thumb_${r.r.LANGUAGE}.jpg`,
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  href: `${r.r.IMG_URL}labyrinth/wallpapers/mobile_1_${r.r.LANGUAGE == "schinese" ? "schinese" : "en"}.jpg`,
                                  children: (0, a.jsx)("div", {
                                    className: e().Wallpaper,
                                    children: (0, a.jsx)("img", {
                                      className: e().WallpaperImgDesktop,
                                      onError: (t) =>
                                        (t.target.src = `${r.r.IMG_URL}/labyrinth/wallpapers/mobile_1_thumb_en.jpg`),
                                      src: `${r.r.IMG_URL}/labyrinth/wallpapers/mobile_1_thumb_${r.r.LANGUAGE}.jpg`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().MiranaPersona,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().BPShieldSmall,
                            src: `${r.r.IMG_URL}nemestice/bp_level_shield_silver.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().LevelLabel,
                            children: (0, s.Wn)("#labyrinth_bp_mirana_label"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("video", {
                        className: e().BackgroundVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${r.r.IMG_URL}/labyrinth/mirana_persona2.jpg`,
                        children: [
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${r.r.VIDEO_URL}labyrinth/mirana_persona2.webm`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${r.r.VIDEO_URL}labyrinth/mirana_persona2.mp4`,
                          }),
                        ],
                      }),
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/persona_mirana_logo_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/persona_mirana_logo_${r.r.LANGUAGE}.png`,
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_mirana_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_mirana_desc"),
                      }),
                      (0, a.jsxs)("video", {
                        className: e().ShowcaseVideo,
                        autoPlay: !0,
                        preload: "auto",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: `${r.r.VIDEO_URL}labyrinth/mirana_persona.jpg`,
                        children: [
                          (0, a.jsx)("source", {
                            type: "video/webm",
                            src: `${r.r.VIDEO_URL}labyrinth/mirana_persona.webm`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${r.r.VIDEO_URL}labyrinth/mirana_persona.mp4`,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: e().SecondStyle,
                        children: [
                          (0, a.jsxs)("div", {
                            className: e().SecondStyleText,
                            children: [
                              (0, a.jsx)("div", {
                                className: e().Intro,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_mirana_sword_level",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Headline,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_mirana_sword_title",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().EventIntro,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_mirana_sword_label",
                                ),
                              }),
                              (0, a.jsx)("div", {
                                className: e().Description,
                                children: (0, s.Wn)(
                                  "#labyrinth_bp_mirana_sword_desc",
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsx)("img", {
                            className: e().SecondStyleArt,
                            src: `${r.r.IMG_URL}/labyrinth/rewards/persona_mirana_flat.png`,
                            "data-aos": "fade-left",
                            "data-aos-delay": "400",
                            "data-aos-duration": "2000",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().Hoodwink,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().BPShieldSmall,
                            src: `${r.r.IMG_URL}nemestice/bp_level_shield_gold.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().LevelLabel,
                            children: (0, s.Wn)("#labyrinth_bp_hoodwink_level"),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_hoodwink_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Subhead,
                        children: (0, s.Wn)("#labyrinth_bp_hoodwink_label"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_hoodwink_desc"),
                      }),
                      (0, a.jsxs)("div", {
                        className: e().VideoContainer,
                        children: [
                          (0, a.jsx)("img", {
                            className: e().Image,
                            src: `${r.r.IMG_URL}labyrinth/rewards/hoodwink_prestige_crop.png`,
                            "data-aos": "fade-up",
                            "data-aos-delay": "400",
                            "data-aos-duration": "2000",
                          }),
                          (0, a.jsxs)("video", {
                            className: e().ShowcaseVideo,
                            autoPlay: !0,
                            preload: "auto",
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: `${r.r.VIDEO_URL}nemestice/rewards/attack_modifier.jpg`,
                            children: [
                              (0, a.jsx)("source", {
                                type: "video/webm",
                                src: `${r.r.VIDEO_URL}labyrinth/immortals/hoodwink.webm`,
                              }),
                              (0, a.jsx)("source", {
                                type: "video/mp4",
                                src: `${r.r.VIDEO_URL}labyrinth/immortals/hoodwink.mp4`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().Immortals,
                    children: [
                      (0, a.jsx)("img", {
                        className: e().Logo,
                        onError: (t) =>
                          (t.target.src = `${r.r.IMG_URL}/labyrinth/aghlab_battlepass_logo_en.png`),
                        src: `${r.r.IMG_URL}/labyrinth/aghlab_battlepass_logo_${r.r.LANGUAGE}.png`,
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_immortals__title"),
                      }),
                      (0, a.jsx)(n.Zk, {
                        strContentDir: "labyrinth",
                        strPrimaryColor: "#edd3ff",
                        strSecondaryColor: "#da69e4",
                        strTertiaryColor: "#555555",
                        arrImmortalTreasures: g,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().Towers,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().BPShieldSmall,
                            src: `${r.r.IMG_URL}nemestice/bp_level_shield_gold.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().LevelLabel,
                            children: (0, s.Wn)("#labyrinth_bp_towers_level"),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_towers_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Subhead,
                        children: (0, s.Wn)("#labyrinth_bp_towers_label"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_towers_desc"),
                      }),
                      (0, a.jsxs)("div", {
                        className: e().VideoContainer,
                        children: [
                          (0, a.jsx)("img", {
                            className: e().Image,
                            "data-aos": "fade-right",
                            "data-aos-duration": "1500",
                            src: `${r.r.IMG_URL}labyrinth/rewards/tower_dire.png`,
                          }),
                          (0, a.jsx)("img", {
                            className: e().Image2,
                            "data-aos": "fade-left",
                            "data-aos-duration": "1500",
                            src: `${r.r.IMG_URL}labyrinth/rewards/tower_radiant.png`,
                          }),
                          (0, a.jsxs)("video", {
                            className: e().ShowcaseVideo,
                            autoPlay: !0,
                            preload: "auto",
                            muted: !0,
                            loop: !0,
                            playsInline: !0,
                            poster: `${r.r.VIDEO_URL}labyrinth/rewards/towers.jpg`,
                            children: [
                              (0, a.jsx)("source", {
                                type: "video/webm",
                                src: `${r.r.VIDEO_URL}labyrinth/rewards/towers.webm`,
                              }),
                              (0, a.jsx)("source", {
                                type: "video/mp4",
                                src: `${r.r.VIDEO_URL}labyrinth/rewards/towers.mp4`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().Creeps,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().BPShieldSmall,
                            src: `${r.r.IMG_URL}nemestice/bp_level_shield_silver.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().LevelLabel,
                            children: (0, s.Wn)("#labyrinth_bp_creeps_level"),
                          }),
                        ],
                      }),
                      (0, a.jsx)("img", {
                        className: e().Img,
                        src: `${r.r.IMG_URL}labyrinth/rewards/creeps_and_siege.png`,
                      }),
                      (0, a.jsx)("div", {
                        className: e().Headline,
                        children: (0, s.Wn)("#labyrinth_bp_creeps_title"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Subhead,
                        children: (0, s.Wn)("#labyrinth_bp_creeps_label"),
                      }),
                      (0, a.jsx)("div", {
                        className: e().Description,
                        children: (0, s.Wn)("#labyrinth_bp_creeps_desc"),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: e().MoreRewards,
                    children: [
                      (0, a.jsxs)("div", {
                        className: e().BPLevelContainer,
                        "data-aos": "fade-right",
                        "data-aos-delay": "400",
                        "data-aos-duration": "2000",
                        children: [
                          (0, a.jsx)("img", {
                            className: e().BPShieldSmall,
                            src: `${r.r.IMG_URL}nemestice/bp_level_shield_bronze.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().LevelLabel,
                            children: (0, s.Wn)("#labyrinth_bp_courier_level"),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: (0, o.A)(
                          e().MoreRewardsRow,
                          e().MoreRewardsRow1,
                        ),
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                        children: (0, a.jsxs)("div", {
                          className: (0, o.A)(e().RewardItem, e().RewardItem1),
                          children: [
                            (0, a.jsx)("img", {
                              className: e().Img,
                              src: `${r.r.IMG_URL}/labyrinth/rewards/handward.png`,
                            }),
                            (0, a.jsx)("div", {
                              className: e().Headline,
                              children: (0, s.Wn)("#labyrinth_bp_wards_title"),
                            }),
                            (0, a.jsx)("div", {
                              className: e().EventIntro,
                              children: (0, s.Wn)("#labyrinth_bp_wards_label"),
                            }),
                            (0, a.jsx)("div", {
                              className: e().Description,
                              children: (0, s.Wn)("#labyrinth_bp_wards_desc"),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: (0, o.A)(
                          e().MoreRewardsRow,
                          e().MoreRewardsRow2,
                        ),
                        "data-aos": "fade-up",
                        "data-aos-duration": "2000",
                        children: (0, a.jsxs)("div", {
                          className: (0, o.A)(e().RewardItem, e().RewardItem2),
                          children: [
                            (0, a.jsx)("img", {
                              className: e().Img,
                              src: `${r.r.IMG_URL}/labyrinth/rewards/handcourier.png`,
                            }),
                            (0, a.jsx)("div", {
                              className: e().Headline,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_courier_title",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().EventIntro,
                              children: (0, s.Wn)(
                                "#labyrinth_bp_courier_label",
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().Description,
                              children: (0, s.Wn)("#labyrinth_bp_courier_desc"),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", { className: e().ThinDivider }),
                      (0, a.jsxs)("div", {
                        className: e().RewardsMontage,
                        children: [
                          (0, a.jsx)("img", {
                            className: e().MontageImg,
                            src: `${r.r.IMG_URL}/labyrinth/rewards/2021_treasures_updated.png`,
                          }),
                          (0, a.jsx)("div", {
                            className: e().Headline,
                            children: (0, s.Wn)("#labyrinth_bp_montage_title"),
                          }),
                          (0, a.jsx)("div", {
                            className: e().Description,
                            children: (0, s.Wn)("#labyrinth_bp_montage_desc"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: e().PurchaseBanner,
                children: [
                  (0, a.jsx)("div", {
                    className: e().Headline,
                    children: (0, s.Wn)("#labyrinth_battlepass"),
                  }),
                  (0, a.jsxs)("div", {
                    className: e().ButtonRow,
                    children: [
                      (0, a.jsx)(l.$x, {
                        colorTopEdge: "#7A7096",
                        colorTop: "#4F496050 ",
                        colorMiddle: "#4F4960",
                        colorBottom: "#4F4960",
                        level: 1,
                        itemid: 17707,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, a.jsx)(l.$x, {
                        colorTopEdge: "#3C6AFB",
                        colorTop: "#2D4EB450 ",
                        colorMiddle: "#2D4EB4",
                        colorBottom: "#2D4EB4",
                        level: 50,
                        discountPct: 4,
                        itemid: 17708,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                      (0, a.jsx)(l.$x, {
                        colorTopEdge: "#7e57ff",
                        colorTop: "#5741A250 ",
                        colorMiddle: "#5741A2",
                        colorBottom: "#5741A2",
                        level: 100,
                        discountPct: 19,
                        itemid: 17709,
                        capsuleImageLocation: "labyrinth/bp_logo_",
                        capsuleImageOnErrorLocation: "labyrinth/bp_logo_en.png",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(u.K, {}),
            ],
          });
        });
      },
      68542: (m) => {
        m.exports = {
          Tooltip: "vPqsoxB4SZ5OaBfKiEydA",
          CarouselFade: "hAvyIwR8b1rZkMv7x6W0R",
          StandardButton: "_2Zab103565xl_xT1cVpQEs",
          ButtonText: "_2a3EuJ4WeYLkoqwWpH5Ri9",
          Icon: "Y94c23Y_w2jokCR4lGKA_",
          Play: "_1CNtZLA2gHZ8ymgyQoHbxU",
          SteamLogo: "_3iteSkgq8UbR2X2WJ27v62",
          ToolTip: "_2nxCWm3g4YcFAY0KLSzCGA",
          PlayerReportTooltip: "_30rdien_0QJKd-3jEh9G5O",
          TrailerOverlay: "_1qRBJbPGm3QhLVrLWmySit",
          FadeBottom: "_2pwPAXt2k-rftAgv_wjzLA",
          BackgroundImage: "_3QPOXFbFzS9he7FQsj8NTs",
          BackgroundVideo: "cPWWJqsMRAF-SeFWNtnOY",
          TrailerContainer: "_6N_fnC6aRujycNcUlFNtc",
          Playing: "_20hTLVk2R6mvxAx2h7arvh",
          PlayButtonContainer: "_1pJy6fpDPQ6kiNjZxn9WPL",
          Hide: "_3QkmIDX_b-dy9_VS1ONsAk",
          Button: "YbfaFSIWFSENuH-j2DxDj",
          Label: "_1rT4Fa_dOdxV9pSL4QBPzH",
          LogoElementContainer: "_382RQUTfn1zhv67rVmnPE9",
          TitleIn: "_3jZp2TUtcQAlHXR5ZnLcaz",
          LogoTop: "_29trUxewuZY55AyMHZpZ58",
          LogoBottom: "D97oHluaL0iOS3OMOVXAB",
          LogoLeft: "_3NesB22LhOBs8xLXpNrWnM",
          LogoRight: "_20t2EwtIHCrooSxJDRyzLO",
        };
      },
      56490: (m) => {
        m.exports = {
          Tooltip: "mbsiXD3ICUN6dbpct4LqF",
          CarouselFade: "_2LPkM1YFTeZmb28zZVBQ63",
          StandardButton: "_3iTWlBjFXu2v_EGM6rvZSs",
          ButtonText: "_13RbCE6X-WvvhUsU58pP7C",
          Icon: "_2C5YGv5z-GAepV8M-1Aog",
          Play: "_2F4WJeXd2rfMzFrVlf_jfE",
          SteamLogo: "_3D8kZrjUXyVAIDhgC8nH08",
          ToolTip: "_1Tfd_vViOXOrNE155We-e9",
          PlayerReportTooltip: "_3NcvRn8mh_WAeMhAM_86TW",
          HorizBar: "GZtwmp03U0hpq_6BYOQdJ",
          RightArrow: "_1hpzrIbMuv_JmitQU1fjDG",
          UpRightArrow: "_2LxrRocBdAQ23efezWWXEM",
          BPLevelContainer: "_3suz6cdSDN0Uc__zArkPzk",
          BPShieldSmall: "_2ATZgerb1YQ_BAG9xAzzyW",
          LevelLabel: "_1xAvKpUs-iMBjRWW3bNwAt",
          DividerBottom: "-_MH1Spt-yW8GStgTlHg6",
          DividerTop: "_1ghHwdNiPK3bu0qrYoVMB1",
          Headline: "_3B2PiOIw1HBh4dHPGdkxdM",
          Description: "_3z4DpTGEHSlA1AWiv5vwKg",
          Label: "qzcwS_fDCySdUr_nX0vtR",
          HomePage: "_3326-c5NVvyWhKwAAl8ThG",
          HeaderSection: "_18JWBI4xX6RClR_4XmbMkx",
          BottomFade: "_89IG3bXcJuf0LSA5WusRc",
          BackgroundVideoContainer: "_1_f2q1uSFmw4YCBsjaqPw3",
          PlayButtonPositioner: "_361XSr2sDNL9B2tMnm-HzR",
          TitleContainer: "_24BT7Q1IAI2G-23dSkhjN4",
          Logo: "_2ECRbG5VR6sze0OrYqY6rK",
          PurchaseBanner: "_21lV40p9yDE5P1VNjh0FPe",
          ButtonRow: "_1I9PgJo8FHqcZdXvC2CzYb",
          BuyBattlePassCapsule: "_1pMaiyZCaJ5LaRW0S3xvJS",
          LowerPurchaseBanner: "xEx2HZgISWKW7IRAb9ncM",
          EventGame: "_1rUBVKGSpYrMwhgBlV5wej",
          Subhead: "Z_Oz9L7v4E9gk2bGOnUnS",
          EventIntro: "_1PW-fWbdg2TzUI9NNM6MPN",
          HowToPlayRow: "_1oKPk3ohs4KXJJvp3TOL2O",
          HowToPlayText: "_17Vwk9BAdAEeYiQCEtzVmS",
          HowToPlayImg: "_2FAL_gKKOwQojQDf0bHqIE",
          HowToPlay1: "UP0SjwNEbVgUtBMwj3CkI",
          HowToPlay2: "DFegnBEef2W7yrtzmnpV2",
          BlessingsRow: "_2FKeXTvpw-qQYPFHl9VEBL",
          TopFade: "_1np-gVpSNpGuqbQ5ZFSOD-",
          BlessingsText: "BMzbUIcas8w-o6ebrJkws",
          BattlePass: "rsfnpI8FU2t3PwKlLpN5d",
          BattlePassIntro: "X-y9fu9ZmaoGvEvQ9y_Xz",
          Img: "_3juaPZ0pKcMhxtEMGBE5pf",
          CavernCrawl: "_2dEctayX7ag9yjvDVQ3Cr_",
          WeeklyQuests: "_25SudZDjF5n66Oz66W1crO",
          Text: "_3DXyrTsIG35EDqbYQ2RqEI",
          AssistantFeatures: "_2pZN0x2YRygn8CSi2xAG5s",
          HowToPlayText2: "ZPnFS58GvhiSmW7cs_HLZ",
          HowToPlayText3: "_1Ok_mb7X4-CCdRDeFLfMrf",
          AssistantImg: "_1uEtezTB6SN9R5nTqTySIS",
          ControllerImg: "_2HbkCwNdOJx3BJdtEpOeeG",
          Rewards: "_1DgFfQPHIgJu888VSNS6g-",
          DrowArcana: "_2u_RgP5Snx-6_H9HDTFoGZ",
          BackgroundVideo: "p__0srMWep7OrvpT9jNR-",
          ShowcaseVideo: "_1snW--GbqNni7BxHSlElHp",
          VideoContainer: "_3Kcov4JTIeWc3wqOzGTFr3",
          Cloud1: "_2c25wyLt0Q1xSb-QF2xLOc",
          Cloud2: "_21vibHVsxUPnwZZKUBJKNA",
          Minigame: "_39rW4gPMjWQtYCXWcnmaBl",
          MinigameText: "_1fg_c6rx3L_yoRSMYAebWt",
          ArcanaBreakdown: "_3s5rJruWsFJNp1K4AvgAKC",
          ArcanaVideo: "_1Glyp6uNXDEX3GJvPP1l_J",
          BreakdownText: "_345jxCOAHxc-2ZHtWJg3OQ",
          FeatureTitle: "_1Uwnq7fZQ5TEs7BXFJbY-p",
          FeatureDesc: "_2HUL1_HdAYj9mVncMw0pfs",
          FeatureImgs: "_3T7gHlPF3L_vvIs2fttbzv",
          Wallpapers: "lFBgQGGDzKOdH5TZhjg0m",
          WallpaperGroup: "_1htrQrSuWk6kv0M6SaLleN",
          Wallpaper: "_22bFh-zP-BoniPs8HNhFDT",
          MiranaPersona: "_3Y7iphfQX0n8WfF5bX-MIk",
          SecondStyle: "p1dv5x9rUha5so1Dj-weJ",
          SecondStyleArt: "_34Hou3jNLdjDULwLif288D",
          SecondStyleText: "_3AkLYOqpJ72dUuBpUX6A14",
          Intro: "zngCfHtmVviUGgx3g7l1R",
          DKAccessories: "_1ScENZcDmYoHL5EHzFgtdV",
          Accessory: "_3ssmv085JPtPBcHDB8tsBy",
          Image: "_1ft2z5nfBI-Xh_PEz992XC",
          AccessoryText: "dhKPcL2vOrkgywbKqZu-A",
          Title: "_2nvwIQpnm-qgQXfLL4YCcK",
          Towers: "-g2kqEEfHXQEPA-aOfsIT",
          Note1: "_2vmJs8D8fvFiogxoNri8FL",
          Note2: "R3cPYeF1tfVgE6pUnl9oF",
          Note3: "_2wdwdBl-gs46gO58juxM0K",
          Image2: "FGIcsQ1FJw6MXWRjeLCyM",
          Hoodwink: "_1xXKR4Wkw3iMc48-LNCuKb",
          Creeps: "xA1gZLOu73DTRrnMOipfZ",
          Immortals: "_2_EZjasN5TuIWlE2SEUdCe",
          MoreRewards: "C3Cj23QKi6GkcIvqI0qyq",
          MoreRewardsRow: "_2SCnTDq6iaCc2Ry4kL8bwg",
          MoreRewardsRow1: "_3m7GeYussZ18c5CEn_nc3F",
          MoreRewardsRow2: "_1QfrB175HbpcCiC640uB1i",
          RewardItem: "QKq_8vPHIMSLPnTQWIDOZ",
          RewardItem2: "_1PaD3i1-GU74ktuODl7f8h",
          ThinDivider: "_27V4Y3l50Z9seOmF8yglcQ",
          RewardsMontage: "_2ivI2IQb0qUNj2O3J48uHw",
          MontageImg: "_1XyDSoG5oYQUVDpazF9n4j",
          rotate: "_1rFNego7QlIkvT2BFNdYRI",
        };
      },
    },
  ]);
})();
