/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [9831],
  {
    46994: (e) => {
      e.exports = {
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
    99831: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => x });
      var i = a(69500),
        t = a(70595),
        n = a(89506),
        d = a(40045),
        c = a(73202),
        l = a(47202),
        r = a(36305),
        _ = a(94610),
        j = a(46994),
        o = a.n(j),
        u = a(61840),
        p = a(68446);
      const m = (e) =>
          (0, i.jsxs)("div", {
            className: o().Text,
            children: [
              (0, i.jsx)("div", {
                className: o().Headline,
                children: (0, d.Wn)(e.title),
              }),
              (0, i.jsx)("div", {
                className: o().Description,
                children: (0, d.Wn)(e.description),
              }),
            ],
          }),
        h = (e) =>
          (0, i.jsxs)("div", {
            className: o().SectionContent,
            children: [
              (0, i.jsx)(m, { title: e.title, description: e.description }),
              (0, i.jsx)("img", {
                className: o().Image,
                src: `${n.r.IMG_URL}/` + e.image,
              }),
            ],
          }),
        x = (0, p.PA)(() => {
          const e = t.o.getPatchNotes("7.31d", n.r.LANGUAGE);
          return (0, i.jsxs)("div", {
            className: o().BattleReportPage,
            children: [
              (0, i.jsx)(c.mg, {
                children: (0, i.jsx)("title", {
                  children: (0, d.Wn)("#june22_title"),
                }),
              }),
              (0, i.jsx)(l.A, { bOverlapping: !0 }),
              (0, i.jsx)(_.A, {}),
              (0, i.jsx)("div", {
                className: o().HeaderImage,
                style: {
                  backgroundImage: `url( ${n.r.IMG_URL}juneupdate22/keyart.jpg )`,
                },
              }),
              (0, i.jsxs)("div", {
                className: o().HeaderText,
                children: [
                  (0, i.jsx)("div", {
                    className: o().MainTitle,
                    children: (0, d.Wn)("#june22_title"),
                  }),
                  (0, i.jsx)("div", { className: o().MainTitleDivider }),
                  (0, i.jsx)("div", {
                    className: o().MainSubtitle,
                    children: (0, d.Wn)("#june22_subtitle"),
                  }),
                  (0, i.jsx)("div", {
                    className: o().MainDesc,
                    children: (0, d.Wn)("#june22_desc"),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: o().Sections,
                style: {
                  backgroundImage: `url( ${n.r.IMG_URL}juneupdate22/bg_repeat.jpg )`,
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: (0, d.Wn)("#new_feature"),
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)("#june22_battle_report_title"),
                        }),
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_battle_report_head01",
                        description: "#june22_battle_report_desc01",
                        image: "juneupdate22/br_featured_stats2.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_battle_report_head02",
                        description: "#june22_battle_report_desc02",
                        image: "juneupdate22/br_highlights.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_battle_report_head03",
                        description: "#june22_battle_report_desc03",
                        image: "juneupdate22/br_analysis.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_battle_report_head04",
                        description: "#june22_battle_report_desc04",
                        image: "juneupdate22/br_summary.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_battle_report_head05",
                        description: "#june22_battle_report_desc05",
                        image: "juneupdate22/br_exclusive.jpg",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: (0, d.Wn)("#new_feature"),
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)(
                            "#june22_featured_game_mode_title",
                          ),
                        }),
                      }),
                      (0, i.jsx)("img", {
                        className: o().DescRowImage,
                        src: `${n.r.IMG_URL}/juneupdate22/weekly_spotlight.png`,
                      }),
                      (0, i.jsxs)("div", {
                        className: o().DescRow,
                        children: [
                          (0, i.jsx)(m, {
                            title: "#june22_featured_game_mode_head01",
                            description: "#june22_featured_game_mode_desc01",
                          }),
                          (0, i.jsx)(m, {
                            title: "#june22_featured_game_mode_head02",
                            description: "#june22_featured_game_mode_desc02",
                          }),
                          (0, i.jsx)(m, {
                            title: "#june22_featured_game_mode_head03",
                            description: "#june22_featured_game_mode_desc03",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: (0, d.Wn)("#new_feature"),
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)("#june22_immortal_fx_title"),
                        }),
                      }),
                      (0, i.jsx)("img", {
                        className: o().DescRowImage,
                        src: `${n.r.IMG_URL}/juneupdate22/immortal_fx.png`,
                      }),
                      (0, i.jsx)("div", {
                        className: o().DescRow,
                        children: (0, i.jsx)(m, {
                          title: "#june22_immortal_fx_head01",
                          description: "#june22_immortal_fx_desc01",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: (0, d.Wn)("#new_feature"),
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)("#june22_match_clips_title"),
                        }),
                      }),
                      (0, i.jsx)("img", {
                        className: o().DescRowImage,
                        src: `${n.r.IMG_URL}/juneupdate22/clip_builder_sc.jpg`,
                      }),
                      (0, i.jsxs)("div", {
                        className: o().DescRow,
                        children: [
                          (0, i.jsx)(m, {
                            title: "#june22_match_clips_head01",
                            description: "#june22_match_clips_desc01",
                          }),
                          (0, i.jsx)(m, {
                            title: "#june22_match_clips_head02",
                            description: "#june22_match_clips_desc02",
                          }),
                          (0, i.jsx)(m, {
                            title: "#june22_match_clips_head03",
                            description: "#june22_match_clips_desc03",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: (0, d.Wn)("#updated_feature"),
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)("#june22_avoid_player_title"),
                        }),
                      }),
                      (0, i.jsx)("img", {
                        className: o().DescRowImage,
                        src: `${n.r.IMG_URL}/juneupdate22/avoid_players_sc.png`,
                      }),
                      (0, i.jsxs)("div", {
                        className: o().DescRow,
                        children: [
                          (0, i.jsx)(m, {
                            title: "#june22_avoid_player_head01",
                            description: "#june22_avoid_player_desc01",
                          }),
                          (0, i.jsx)(m, {
                            title: "#june22_avoid_player_head02",
                            description: "#june22_avoid_player_desc02",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: (0, d.Wn)("#now_available"),
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)("#june22_shards_title"),
                        }),
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_shards_head01",
                        description: "#june22_shards_desc01",
                        image: "juneupdate22/killstreak_sc.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_shards_head02",
                        description: "#june22_shards_desc02",
                        image: "juneupdate22/seasonal_chest.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_shards_head03",
                        description: "#june22_shards_desc03",
                        image: "juneupdate22/seasonal_sets_sc.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_shards_head04",
                        description: "#june22_shards_desc04",
                        image: "juneupdate22/relics_sc.png",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o().SectionContainer,
                    children: [
                      (0, i.jsx)("div", {
                        className: o().SectionTitlePrefix,
                        children: " ",
                      }),
                      (0, i.jsx)("div", {
                        className: o().SectionGradHeader,
                        children: (0, i.jsx)("div", {
                          className: o().SectionTitle,
                          children: (0, d.Wn)("#june22_plus_update_title"),
                        }),
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_plus_update_head01",
                        description: "#june22_plus_update_desc01",
                        image: "juneupdate22/quests_sc.png",
                      }),
                      (0, i.jsx)(h, {
                        title: "#june22_plus_update_head02",
                        description: "#june22_plus_update_desc02",
                        image: "juneupdate22/guild_rewards_sc.png",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: o().LowerPatch,
                children: [
                  (0, i.jsx)("div", {
                    className: o().MainTitlePatch,
                    children: (0, d.Wn)("#june22_gameplay_title"),
                  }),
                  (0, i.jsx)(u.fs, { patchnotes: e?.general_notes }),
                  (0, i.jsx)(u.wL, { patchnotes: e?.neutral_creeps }),
                  (0, i.jsx)(u.ZV, { patchnotes: e?.items }),
                  (0, i.jsx)(u.ZV, {
                    patchnotes: e?.neutral_items,
                    is_neutrals: !0,
                  }),
                  (0, i.jsx)(u.ob, { patchnotes: e?.heroes }),
                ],
              }),
              (0, i.jsx)(r.K, {}),
            ],
          });
        });
    },
  },
]);
