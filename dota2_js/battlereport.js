// 54976.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [54976],
    {
      54976: (l, r, a) => {
        "use strict";
        a.r(r), a.d(r, { default: () => g });
        var e = a(69500),
          o = a(45488),
          _ = a(2095),
          t = a(8305),
          j = a(73202),
          u = a(63177),
          m = a(42616),
          p = a(28471),
          h = a(46994),
          s = a.n(h),
          c = a(84899),
          x = a(3878);
        const d = (i) =>
            (0, e.jsxs)("div", {
              className: s().Text,
              children: [
                (0, e.jsx)("div", {
                  className: s().Headline,
                  children: (0, t.Wn)(i.title),
                }),
                (0, e.jsx)("div", {
                  className: s().Description,
                  children: (0, t.Wn)(i.description),
                }),
              ],
            }),
          n = (i) =>
            (0, e.jsxs)("div", {
              className: s().SectionContent,
              children: [
                (0, e.jsx)(d, { title: i.title, description: i.description }),
                (0, e.jsx)("img", {
                  className: s().Image,
                  src: `${_.r.IMG_URL}/` + i.image,
                }),
              ],
            }),
          g = (0, x.PA)(() => {
            const i = o.o.getPatchNotes("7.31d", _.r.LANGUAGE);
            return (0, e.jsxs)("div", {
              className: s().BattleReportPage,
              children: [
                (0, e.jsx)(j.mg, {
                  children: (0, e.jsx)("title", {
                    children: (0, t.Wn)("#june22_title"),
                  }),
                }),
                (0, e.jsx)(u.A, { bOverlapping: !0 }),
                (0, e.jsx)(p.A, {}),
                (0, e.jsx)("div", {
                  className: s().HeaderImage,
                  style: {
                    backgroundImage: `url( ${_.r.IMG_URL}juneupdate22/keyart.jpg )`,
                  },
                }),
                (0, e.jsxs)("div", {
                  className: s().HeaderText,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().MainTitle,
                      children: (0, t.Wn)("#june22_title"),
                    }),
                    (0, e.jsx)("div", { className: s().MainTitleDivider }),
                    (0, e.jsx)("div", {
                      className: s().MainSubtitle,
                      children: (0, t.Wn)("#june22_subtitle"),
                    }),
                    (0, e.jsx)("div", {
                      className: s().MainDesc,
                      children: (0, t.Wn)("#june22_desc"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().Sections,
                  style: {
                    backgroundImage: `url( ${_.r.IMG_URL}juneupdate22/bg_repeat.jpg )`,
                  },
                  children: [
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: (0, t.Wn)("#new_feature"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)("#june22_battle_report_title"),
                          }),
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_battle_report_head01",
                          description: "#june22_battle_report_desc01",
                          image: "juneupdate22/br_featured_stats2.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_battle_report_head02",
                          description: "#june22_battle_report_desc02",
                          image: "juneupdate22/br_highlights.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_battle_report_head03",
                          description: "#june22_battle_report_desc03",
                          image: "juneupdate22/br_analysis.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_battle_report_head04",
                          description: "#june22_battle_report_desc04",
                          image: "juneupdate22/br_summary.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_battle_report_head05",
                          description: "#june22_battle_report_desc05",
                          image: "juneupdate22/br_exclusive.jpg",
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: (0, t.Wn)("#new_feature"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)(
                              "#june22_featured_game_mode_title",
                            ),
                          }),
                        }),
                        (0, e.jsx)("img", {
                          className: s().DescRowImage,
                          src: `${_.r.IMG_URL}/juneupdate22/weekly_spotlight.png`,
                        }),
                        (0, e.jsxs)("div", {
                          className: s().DescRow,
                          children: [
                            (0, e.jsx)(d, {
                              title: "#june22_featured_game_mode_head01",
                              description: "#june22_featured_game_mode_desc01",
                            }),
                            (0, e.jsx)(d, {
                              title: "#june22_featured_game_mode_head02",
                              description: "#june22_featured_game_mode_desc02",
                            }),
                            (0, e.jsx)(d, {
                              title: "#june22_featured_game_mode_head03",
                              description: "#june22_featured_game_mode_desc03",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: (0, t.Wn)("#new_feature"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)("#june22_immortal_fx_title"),
                          }),
                        }),
                        (0, e.jsx)("img", {
                          className: s().DescRowImage,
                          src: `${_.r.IMG_URL}/juneupdate22/immortal_fx.png`,
                        }),
                        (0, e.jsx)("div", {
                          className: s().DescRow,
                          children: (0, e.jsx)(d, {
                            title: "#june22_immortal_fx_head01",
                            description: "#june22_immortal_fx_desc01",
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: (0, t.Wn)("#new_feature"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)("#june22_match_clips_title"),
                          }),
                        }),
                        (0, e.jsx)("img", {
                          className: s().DescRowImage,
                          src: `${_.r.IMG_URL}/juneupdate22/clip_builder_sc.jpg`,
                        }),
                        (0, e.jsxs)("div", {
                          className: s().DescRow,
                          children: [
                            (0, e.jsx)(d, {
                              title: "#june22_match_clips_head01",
                              description: "#june22_match_clips_desc01",
                            }),
                            (0, e.jsx)(d, {
                              title: "#june22_match_clips_head02",
                              description: "#june22_match_clips_desc02",
                            }),
                            (0, e.jsx)(d, {
                              title: "#june22_match_clips_head03",
                              description: "#june22_match_clips_desc03",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: (0, t.Wn)("#updated_feature"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)("#june22_avoid_player_title"),
                          }),
                        }),
                        (0, e.jsx)("img", {
                          className: s().DescRowImage,
                          src: `${_.r.IMG_URL}/juneupdate22/avoid_players_sc.png`,
                        }),
                        (0, e.jsxs)("div", {
                          className: s().DescRow,
                          children: [
                            (0, e.jsx)(d, {
                              title: "#june22_avoid_player_head01",
                              description: "#june22_avoid_player_desc01",
                            }),
                            (0, e.jsx)(d, {
                              title: "#june22_avoid_player_head02",
                              description: "#june22_avoid_player_desc02",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: (0, t.Wn)("#now_available"),
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)("#june22_shards_title"),
                          }),
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_shards_head01",
                          description: "#june22_shards_desc01",
                          image: "juneupdate22/killstreak_sc.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_shards_head02",
                          description: "#june22_shards_desc02",
                          image: "juneupdate22/seasonal_chest.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_shards_head03",
                          description: "#june22_shards_desc03",
                          image: "juneupdate22/seasonal_sets_sc.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_shards_head04",
                          description: "#june22_shards_desc04",
                          image: "juneupdate22/relics_sc.png",
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: s().SectionContainer,
                      children: [
                        (0, e.jsx)("div", {
                          className: s().SectionTitlePrefix,
                          children: " ",
                        }),
                        (0, e.jsx)("div", {
                          className: s().SectionGradHeader,
                          children: (0, e.jsx)("div", {
                            className: s().SectionTitle,
                            children: (0, t.Wn)("#june22_plus_update_title"),
                          }),
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_plus_update_head01",
                          description: "#june22_plus_update_desc01",
                          image: "juneupdate22/quests_sc.png",
                        }),
                        (0, e.jsx)(n, {
                          title: "#june22_plus_update_head02",
                          description: "#june22_plus_update_desc02",
                          image: "juneupdate22/guild_rewards_sc.png",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: s().LowerPatch,
                  children: [
                    (0, e.jsx)("div", {
                      className: s().MainTitlePatch,
                      children: (0, t.Wn)("#june22_gameplay_title"),
                    }),
                    (0, e.jsx)(c.fs, { patchnotes: i?.general_notes }),
                    (0, e.jsx)(c.wL, { patchnotes: i?.neutral_creeps }),
                    (0, e.jsx)(c.ZV, { patchnotes: i?.items }),
                    (0, e.jsx)(c.ZV, {
                      patchnotes: i?.neutral_items,
                      is_neutrals: !0,
                    }),
                    (0, e.jsx)(c.ob, { patchnotes: i?.heroes }),
                  ],
                }),
                (0, e.jsx)(m.K, {}),
              ],
            });
          });
      },
      46994: (l) => {
        l.exports = {
          Tooltip: "_2AeNNvm8angcDECPN1L-C",
          CarouselFade: "_2342Q6clTz4BW8mfz6KpnV",
          StandardButton: "_2-Lxk4a7lGJnuZT2HzVGrT",
          ButtonText: "_22w6TQxT4mJNDuQW8zhvyP",
          Icon: "_2PgOQiSoIpr6MydhrEPGaQ",
          Play: "_2XhatuwbaULcWG0CQwbSEW",
          SteamLogo: "Zh5t-FBlSxlnVqhxkK-vM",
          ToolTip: "F1Dxep5c4VYHND9eK4Goj",
          PlayerReportTooltip: "_22X-7GVFtvCklUszGuWsRm",
          BattleReportPage: "_3IGF-ZW0owDdXFwfzeVJ_1",
          HeaderImage: "_3NjqSpuQYV7Xi9Ei5pQ8RW",
          HeaderText: "_25ZyP3FZjMPop8PoItxQYS",
          MainTitle: "_2WGhZ2TmOB1Aaoj1PUVIq7",
          MainTitleDivider: "_-0Tgo5mjlDS_qneTE5O0j",
          MainSubtitle: "_1iZ5dKmMWWCKXQg24xlCUa",
          MainDesc: "_1-ZwVcGd2hzROeGAhl2SjQ",
          Sections: "_1pjIZpZ1REtERC1ivZDCap",
          SectionContainer: "_3-pRRV3OrAwcfbRDTVklen",
          SectionTitlePrefix: "_2LU0JBgM9FdL6eUZd-JjXk",
          SectionGradHeader: "_32IA6YPqj4kppzLEemjyE0",
          SectionTitle: "_3jFCSRvNottlxVLeNEAVIZ",
          SectionContent: "-tweZg_BsPTmdcd-ElmEn",
          Text: "gH-ZGwNGtpsQtKvBHfF5l",
          Headline: "_3BCyoh1kymFsgN95yuWFPH",
          Description: "_29YNeoZkyK6uE6R0iifTfc",
          Image: "_3NIasVgfBvW4FFyuDSbuT5",
          DescRowImage: "Kq-JlETmA7fdFF1sso0LO",
          DescRow: "_2uikTHlpICW4dJWgW7JoaH",
          LowerPatch: "_3BBIErG34K2bed-aDiy-X_",
          MainTitlePatch: "_3jgyALa7YjFeMOldvjRZG",
        };
      },
    },
  ]);
})();
