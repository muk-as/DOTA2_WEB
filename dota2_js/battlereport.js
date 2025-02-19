// 9831.js

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
    99831: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => g });
      var n = a(76489),
        c = a(89506),
        l = a(27866),
        i = a(7552),
        s = a(83640),
        r = a(47202),
        _ = a(36305),
        d = a(94610),
        m = a(46994),
        o = a.n(m),
        u = a(61840),
        p = a(68446);
      const E = (e) =>
          i.createElement(
            "div",
            { className: o().Text },
            i.createElement(
              "div",
              { className: o().Headline },
              (0, l.Wn)(e.title),
            ),
            i.createElement(
              "div",
              { className: o().Description },
              (0, l.Wn)(e.description),
            ),
          ),
        j = (e) =>
          i.createElement(
            "div",
            { className: o().SectionContent },
            i.createElement(E, { title: e.title, description: e.description }),
            i.createElement("img", {
              className: o().Image,
              src: `${c.r.IMG_URL}/` + e.image,
            }),
          ),
        g = (0, p.PA)(() => {
          const e = n.o.getPatchNotes("7.31d", c.r.LANGUAGE);
          return i.createElement(
            "div",
            { className: o().BattleReportPage },
            i.createElement(
              s.mg,
              null,
              i.createElement("title", null, (0, l.Wn)("#june22_title")),
            ),
            i.createElement(r.A, { bOverlapping: !0 }),
            i.createElement(d.A, null),
            i.createElement("div", {
              className: o().HeaderImage,
              style: {
                backgroundImage: `url( ${c.r.IMG_URL}juneupdate22/keyart.jpg )`,
              },
            }),
            i.createElement(
              "div",
              { className: o().HeaderText },
              i.createElement(
                "div",
                { className: o().MainTitle },
                (0, l.Wn)("#june22_title"),
              ),
              i.createElement("div", { className: o().MainTitleDivider }),
              i.createElement(
                "div",
                { className: o().MainSubtitle },
                (0, l.Wn)("#june22_subtitle"),
              ),
              i.createElement(
                "div",
                { className: o().MainDesc },
                (0, l.Wn)("#june22_desc"),
              ),
            ),
            i.createElement(
              "div",
              {
                className: o().Sections,
                style: {
                  backgroundImage: `url( ${c.r.IMG_URL}juneupdate22/bg_repeat.jpg )`,
                },
              },
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, l.Wn)("#new_feature"),
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_battle_report_title"),
                  ),
                ),
                i.createElement(j, {
                  title: "#june22_battle_report_head01",
                  description: "#june22_battle_report_desc01",
                  image: "juneupdate22/br_featured_stats2.png",
                }),
                i.createElement(j, {
                  title: "#june22_battle_report_head02",
                  description: "#june22_battle_report_desc02",
                  image: "juneupdate22/br_highlights.png",
                }),
                i.createElement(j, {
                  title: "#june22_battle_report_head03",
                  description: "#june22_battle_report_desc03",
                  image: "juneupdate22/br_analysis.png",
                }),
                i.createElement(j, {
                  title: "#june22_battle_report_head04",
                  description: "#june22_battle_report_desc04",
                  image: "juneupdate22/br_summary.png",
                }),
                i.createElement(j, {
                  title: "#june22_battle_report_head05",
                  description: "#june22_battle_report_desc05",
                  image: "juneupdate22/br_exclusive.jpg",
                }),
              ),
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, l.Wn)("#new_feature"),
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_featured_game_mode_title"),
                  ),
                ),
                i.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/weekly_spotlight.png`,
                }),
                i.createElement(
                  "div",
                  { className: o().DescRow },
                  i.createElement(E, {
                    title: "#june22_featured_game_mode_head01",
                    description: "#june22_featured_game_mode_desc01",
                  }),
                  i.createElement(E, {
                    title: "#june22_featured_game_mode_head02",
                    description: "#june22_featured_game_mode_desc02",
                  }),
                  i.createElement(E, {
                    title: "#june22_featured_game_mode_head03",
                    description: "#june22_featured_game_mode_desc03",
                  }),
                ),
              ),
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, l.Wn)("#new_feature"),
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_immortal_fx_title"),
                  ),
                ),
                i.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/immortal_fx.png`,
                }),
                i.createElement(
                  "div",
                  { className: o().DescRow },
                  i.createElement(E, {
                    title: "#june22_immortal_fx_head01",
                    description: "#june22_immortal_fx_desc01",
                  }),
                ),
              ),
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, l.Wn)("#new_feature"),
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_match_clips_title"),
                  ),
                ),
                i.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/clip_builder_sc.jpg`,
                }),
                i.createElement(
                  "div",
                  { className: o().DescRow },
                  i.createElement(E, {
                    title: "#june22_match_clips_head01",
                    description: "#june22_match_clips_desc01",
                  }),
                  i.createElement(E, {
                    title: "#june22_match_clips_head02",
                    description: "#june22_match_clips_desc02",
                  }),
                  i.createElement(E, {
                    title: "#june22_match_clips_head03",
                    description: "#june22_match_clips_desc03",
                  }),
                ),
              ),
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, l.Wn)("#updated_feature"),
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_avoid_player_title"),
                  ),
                ),
                i.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/avoid_players_sc.png`,
                }),
                i.createElement(
                  "div",
                  { className: o().DescRow },
                  i.createElement(E, {
                    title: "#june22_avoid_player_head01",
                    description: "#june22_avoid_player_desc01",
                  }),
                  i.createElement(E, {
                    title: "#june22_avoid_player_head02",
                    description: "#june22_avoid_player_desc02",
                  }),
                ),
              ),
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, l.Wn)("#now_available"),
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_shards_title"),
                  ),
                ),
                i.createElement(j, {
                  title: "#june22_shards_head01",
                  description: "#june22_shards_desc01",
                  image: "juneupdate22/killstreak_sc.png",
                }),
                i.createElement(j, {
                  title: "#june22_shards_head02",
                  description: "#june22_shards_desc02",
                  image: "juneupdate22/seasonal_chest.png",
                }),
                i.createElement(j, {
                  title: "#june22_shards_head03",
                  description: "#june22_shards_desc03",
                  image: "juneupdate22/seasonal_sets_sc.png",
                }),
                i.createElement(j, {
                  title: "#june22_shards_head04",
                  description: "#june22_shards_desc04",
                  image: "juneupdate22/relics_sc.png",
                }),
              ),
              i.createElement(
                "div",
                { className: o().SectionContainer },
                i.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  " ",
                ),
                i.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  i.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, l.Wn)("#june22_plus_update_title"),
                  ),
                ),
                i.createElement(j, {
                  title: "#june22_plus_update_head01",
                  description: "#june22_plus_update_desc01",
                  image: "juneupdate22/quests_sc.png",
                }),
                i.createElement(j, {
                  title: "#june22_plus_update_head02",
                  description: "#june22_plus_update_desc02",
                  image: "juneupdate22/guild_rewards_sc.png",
                }),
              ),
            ),
            i.createElement(
              "div",
              { className: o().LowerPatch },
              i.createElement(
                "div",
                { className: o().MainTitlePatch },
                (0, l.Wn)("#june22_gameplay_title"),
              ),
              i.createElement(u.fs, { patchnotes: e?.general_notes }),
              i.createElement(u.wL, { patchnotes: e?.neutral_creeps }),
              i.createElement(u.ZV, { patchnotes: e?.items }),
              i.createElement(u.ZV, {
                patchnotes: e?.neutral_items,
                is_neutrals: !0,
              }),
              i.createElement(u.ob, { patchnotes: e?.heroes }),
            ),
            i.createElement(_.K, null),
          );
        });
    },
  },
]);
