// 1141.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [1141],
  {
    61362: (e) => {
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
    31141: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => g });
      var n = a(4572),
        l = a(98142),
        i = a(2580),
        c = a(66204),
        r = a(62175),
        s = a(31444),
        d = a(37196),
        _ = a(95068),
        m = a(61362),
        o = a.n(m),
        u = a(95974),
        p = a(80846);
      const E = (e) =>
          c.createElement(
            "div",
            { className: o().Text },
            c.createElement(
              "div",
              { className: o().Headline },
              (0, i.Jr)(e.title),
            ),
            c.createElement(
              "div",
              { className: o().Description },
              (0, i.Jr)(e.description),
            ),
          ),
        j = (e) =>
          c.createElement(
            "div",
            { className: o().SectionContent },
            c.createElement(E, { title: e.title, description: e.description }),
            c.createElement("img", {
              className: o().Image,
              src: `${l.Y.IMG_URL}/` + e.image,
            }),
          ),
        g = (0, p.Pi)(() => {
          const e = n.P.getPatchNotes("7.31d", l.Y.LANGUAGE);
          return c.createElement(
            "div",
            { className: o().BattleReportPage },
            c.createElement(
              r.ql,
              null,
              c.createElement("title", null, (0, i.Jr)("#june22_title")),
            ),
            c.createElement(s.j, { bOverlapping: !0 }),
            c.createElement(_.Z, null),
            c.createElement("div", {
              className: o().HeaderImage,
              style: {
                backgroundImage: `url( ${l.Y.IMG_URL}juneupdate22/keyart.jpg )`,
              },
            }),
            c.createElement(
              "div",
              { className: o().HeaderText },
              c.createElement(
                "div",
                { className: o().MainTitle },
                (0, i.Jr)("#june22_title"),
              ),
              c.createElement("div", { className: o().MainTitleDivider }),
              c.createElement(
                "div",
                { className: o().MainSubtitle },
                (0, i.Jr)("#june22_subtitle"),
              ),
              c.createElement(
                "div",
                { className: o().MainDesc },
                (0, i.Jr)("#june22_desc"),
              ),
            ),
            c.createElement(
              "div",
              {
                className: o().Sections,
                style: {
                  backgroundImage: `url( ${l.Y.IMG_URL}juneupdate22/bg_repeat.jpg )`,
                },
              },
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_battle_report_title"),
                  ),
                ),
                c.createElement(j, {
                  title: "#june22_battle_report_head01",
                  description: "#june22_battle_report_desc01",
                  image: "juneupdate22/br_featured_stats2.png",
                }),
                c.createElement(j, {
                  title: "#june22_battle_report_head02",
                  description: "#june22_battle_report_desc02",
                  image: "juneupdate22/br_highlights.png",
                }),
                c.createElement(j, {
                  title: "#june22_battle_report_head03",
                  description: "#june22_battle_report_desc03",
                  image: "juneupdate22/br_analysis.png",
                }),
                c.createElement(j, {
                  title: "#june22_battle_report_head04",
                  description: "#june22_battle_report_desc04",
                  image: "juneupdate22/br_summary.png",
                }),
                c.createElement(j, {
                  title: "#june22_battle_report_head05",
                  description: "#june22_battle_report_desc05",
                  image: "juneupdate22/br_exclusive.jpg",
                }),
              ),
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_featured_game_mode_title"),
                  ),
                ),
                c.createElement("img", {
                  className: o().DescRowImage,
                  src: `${l.Y.IMG_URL}/juneupdate22/weekly_spotlight.png`,
                }),
                c.createElement(
                  "div",
                  { className: o().DescRow },
                  c.createElement(E, {
                    title: "#june22_featured_game_mode_head01",
                    description: "#june22_featured_game_mode_desc01",
                  }),
                  c.createElement(E, {
                    title: "#june22_featured_game_mode_head02",
                    description: "#june22_featured_game_mode_desc02",
                  }),
                  c.createElement(E, {
                    title: "#june22_featured_game_mode_head03",
                    description: "#june22_featured_game_mode_desc03",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_immortal_fx_title"),
                  ),
                ),
                c.createElement("img", {
                  className: o().DescRowImage,
                  src: `${l.Y.IMG_URL}/juneupdate22/immortal_fx.png`,
                }),
                c.createElement(
                  "div",
                  { className: o().DescRow },
                  c.createElement(E, {
                    title: "#june22_immortal_fx_head01",
                    description: "#june22_immortal_fx_desc01",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_match_clips_title"),
                  ),
                ),
                c.createElement("img", {
                  className: o().DescRowImage,
                  src: `${l.Y.IMG_URL}/juneupdate22/clip_builder_sc.jpg`,
                }),
                c.createElement(
                  "div",
                  { className: o().DescRow },
                  c.createElement(E, {
                    title: "#june22_match_clips_head01",
                    description: "#june22_match_clips_desc01",
                  }),
                  c.createElement(E, {
                    title: "#june22_match_clips_head02",
                    description: "#june22_match_clips_desc02",
                  }),
                  c.createElement(E, {
                    title: "#june22_match_clips_head03",
                    description: "#june22_match_clips_desc03",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Jr)("#updated_feature"),
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_avoid_player_title"),
                  ),
                ),
                c.createElement("img", {
                  className: o().DescRowImage,
                  src: `${l.Y.IMG_URL}/juneupdate22/avoid_players_sc.png`,
                }),
                c.createElement(
                  "div",
                  { className: o().DescRow },
                  c.createElement(E, {
                    title: "#june22_avoid_player_head01",
                    description: "#june22_avoid_player_desc01",
                  }),
                  c.createElement(E, {
                    title: "#june22_avoid_player_head02",
                    description: "#june22_avoid_player_desc02",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Jr)("#now_available"),
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_shards_title"),
                  ),
                ),
                c.createElement(j, {
                  title: "#june22_shards_head01",
                  description: "#june22_shards_desc01",
                  image: "juneupdate22/killstreak_sc.png",
                }),
                c.createElement(j, {
                  title: "#june22_shards_head02",
                  description: "#june22_shards_desc02",
                  image: "juneupdate22/seasonal_chest.png",
                }),
                c.createElement(j, {
                  title: "#june22_shards_head03",
                  description: "#june22_shards_desc03",
                  image: "juneupdate22/seasonal_sets_sc.png",
                }),
                c.createElement(j, {
                  title: "#june22_shards_head04",
                  description: "#june22_shards_desc04",
                  image: "juneupdate22/relics_sc.png",
                }),
              ),
              c.createElement(
                "div",
                { className: o().SectionContainer },
                c.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  " ",
                ),
                c.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Jr)("#june22_plus_update_title"),
                  ),
                ),
                c.createElement(j, {
                  title: "#june22_plus_update_head01",
                  description: "#june22_plus_update_desc01",
                  image: "juneupdate22/quests_sc.png",
                }),
                c.createElement(j, {
                  title: "#june22_plus_update_head02",
                  description: "#june22_plus_update_desc02",
                  image: "juneupdate22/guild_rewards_sc.png",
                }),
              ),
            ),
            c.createElement(
              "div",
              { className: o().LowerPatch },
              c.createElement(
                "div",
                { className: o().MainTitlePatch },
                (0, i.Jr)("#june22_gameplay_title"),
              ),
              c.createElement(u.on, {
                patchnotes: null == e ? void 0 : e.generic,
              }),
              c.createElement(u.k8, {
                patchnotes: null == e ? void 0 : e.neutral_creeps,
              }),
              c.createElement(u.bn, {
                patchnotes: null == e ? void 0 : e.items,
              }),
              c.createElement(u.bn, {
                patchnotes: null == e ? void 0 : e.neutral_items,
                is_neutrals: !0,
              }),
              c.createElement(u.MC, {
                patchnotes: null == e ? void 0 : e.heroes,
              }),
            ),
            c.createElement(d.U, null),
          );
        });
    },
  },
]);
