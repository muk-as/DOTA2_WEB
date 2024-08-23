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
      var n = a(79962),
        c = a(89506),
        i = a(27866),
        l = a(7552),
        s = a(83640),
        r = a(47202),
        d = a(36305),
        _ = a(94610),
        m = a(46994),
        o = a.n(m),
        u = a(61840),
        p = a(68446);
      const E = (e) =>
          l.createElement(
            "div",
            { className: o().Text },
            l.createElement(
              "div",
              { className: o().Headline },
              (0, i.Wn)(e.title),
            ),
            l.createElement(
              "div",
              { className: o().Description },
              (0, i.Wn)(e.description),
            ),
          ),
        j = (e) =>
          l.createElement(
            "div",
            { className: o().SectionContent },
            l.createElement(E, { title: e.title, description: e.description }),
            l.createElement("img", {
              className: o().Image,
              src: `${c.r.IMG_URL}/` + e.image,
            }),
          ),
        g = (0, p.PA)(() => {
          const e = n.o.getPatchNotes("7.31d", c.r.LANGUAGE);
          return l.createElement(
            "div",
            { className: o().BattleReportPage },
            l.createElement(
              s.mg,
              null,
              l.createElement("title", null, (0, i.Wn)("#june22_title")),
            ),
            l.createElement(r.A, { bOverlapping: !0 }),
            l.createElement(_.A, null),
            l.createElement("div", {
              className: o().HeaderImage,
              style: {
                backgroundImage: `url( ${c.r.IMG_URL}juneupdate22/keyart.jpg )`,
              },
            }),
            l.createElement(
              "div",
              { className: o().HeaderText },
              l.createElement(
                "div",
                { className: o().MainTitle },
                (0, i.Wn)("#june22_title"),
              ),
              l.createElement("div", { className: o().MainTitleDivider }),
              l.createElement(
                "div",
                { className: o().MainSubtitle },
                (0, i.Wn)("#june22_subtitle"),
              ),
              l.createElement(
                "div",
                { className: o().MainDesc },
                (0, i.Wn)("#june22_desc"),
              ),
            ),
            l.createElement(
              "div",
              {
                className: o().Sections,
                style: {
                  backgroundImage: `url( ${c.r.IMG_URL}juneupdate22/bg_repeat.jpg )`,
                },
              },
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Wn)("#new_feature"),
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_battle_report_title"),
                  ),
                ),
                l.createElement(j, {
                  title: "#june22_battle_report_head01",
                  description: "#june22_battle_report_desc01",
                  image: "juneupdate22/br_featured_stats2.png",
                }),
                l.createElement(j, {
                  title: "#june22_battle_report_head02",
                  description: "#june22_battle_report_desc02",
                  image: "juneupdate22/br_highlights.png",
                }),
                l.createElement(j, {
                  title: "#june22_battle_report_head03",
                  description: "#june22_battle_report_desc03",
                  image: "juneupdate22/br_analysis.png",
                }),
                l.createElement(j, {
                  title: "#june22_battle_report_head04",
                  description: "#june22_battle_report_desc04",
                  image: "juneupdate22/br_summary.png",
                }),
                l.createElement(j, {
                  title: "#june22_battle_report_head05",
                  description: "#june22_battle_report_desc05",
                  image: "juneupdate22/br_exclusive.jpg",
                }),
              ),
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Wn)("#new_feature"),
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_featured_game_mode_title"),
                  ),
                ),
                l.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/weekly_spotlight.png`,
                }),
                l.createElement(
                  "div",
                  { className: o().DescRow },
                  l.createElement(E, {
                    title: "#june22_featured_game_mode_head01",
                    description: "#june22_featured_game_mode_desc01",
                  }),
                  l.createElement(E, {
                    title: "#june22_featured_game_mode_head02",
                    description: "#june22_featured_game_mode_desc02",
                  }),
                  l.createElement(E, {
                    title: "#june22_featured_game_mode_head03",
                    description: "#june22_featured_game_mode_desc03",
                  }),
                ),
              ),
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Wn)("#new_feature"),
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_immortal_fx_title"),
                  ),
                ),
                l.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/immortal_fx.png`,
                }),
                l.createElement(
                  "div",
                  { className: o().DescRow },
                  l.createElement(E, {
                    title: "#june22_immortal_fx_head01",
                    description: "#june22_immortal_fx_desc01",
                  }),
                ),
              ),
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Wn)("#new_feature"),
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_match_clips_title"),
                  ),
                ),
                l.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/clip_builder_sc.jpg`,
                }),
                l.createElement(
                  "div",
                  { className: o().DescRow },
                  l.createElement(E, {
                    title: "#june22_match_clips_head01",
                    description: "#june22_match_clips_desc01",
                  }),
                  l.createElement(E, {
                    title: "#june22_match_clips_head02",
                    description: "#june22_match_clips_desc02",
                  }),
                  l.createElement(E, {
                    title: "#june22_match_clips_head03",
                    description: "#june22_match_clips_desc03",
                  }),
                ),
              ),
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Wn)("#updated_feature"),
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_avoid_player_title"),
                  ),
                ),
                l.createElement("img", {
                  className: o().DescRowImage,
                  src: `${c.r.IMG_URL}/juneupdate22/avoid_players_sc.png`,
                }),
                l.createElement(
                  "div",
                  { className: o().DescRow },
                  l.createElement(E, {
                    title: "#june22_avoid_player_head01",
                    description: "#june22_avoid_player_desc01",
                  }),
                  l.createElement(E, {
                    title: "#june22_avoid_player_head02",
                    description: "#june22_avoid_player_desc02",
                  }),
                ),
              ),
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  (0, i.Wn)("#now_available"),
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_shards_title"),
                  ),
                ),
                l.createElement(j, {
                  title: "#june22_shards_head01",
                  description: "#june22_shards_desc01",
                  image: "juneupdate22/killstreak_sc.png",
                }),
                l.createElement(j, {
                  title: "#june22_shards_head02",
                  description: "#june22_shards_desc02",
                  image: "juneupdate22/seasonal_chest.png",
                }),
                l.createElement(j, {
                  title: "#june22_shards_head03",
                  description: "#june22_shards_desc03",
                  image: "juneupdate22/seasonal_sets_sc.png",
                }),
                l.createElement(j, {
                  title: "#june22_shards_head04",
                  description: "#june22_shards_desc04",
                  image: "juneupdate22/relics_sc.png",
                }),
              ),
              l.createElement(
                "div",
                { className: o().SectionContainer },
                l.createElement(
                  "div",
                  { className: o().SectionTitlePrefix },
                  " ",
                ),
                l.createElement(
                  "div",
                  { className: o().SectionGradHeader },
                  l.createElement(
                    "div",
                    { className: o().SectionTitle },
                    (0, i.Wn)("#june22_plus_update_title"),
                  ),
                ),
                l.createElement(j, {
                  title: "#june22_plus_update_head01",
                  description: "#june22_plus_update_desc01",
                  image: "juneupdate22/quests_sc.png",
                }),
                l.createElement(j, {
                  title: "#june22_plus_update_head02",
                  description: "#june22_plus_update_desc02",
                  image: "juneupdate22/guild_rewards_sc.png",
                }),
              ),
            ),
            l.createElement(
              "div",
              { className: o().LowerPatch },
              l.createElement(
                "div",
                { className: o().MainTitlePatch },
                (0, i.Wn)("#june22_gameplay_title"),
              ),
              l.createElement(u.fs, { patchnotes: e?.generic }),
              l.createElement(u.wL, { patchnotes: e?.neutral_creeps }),
              l.createElement(u.ZV, { patchnotes: e?.items }),
              l.createElement(u.ZV, {
                patchnotes: e?.neutral_items,
                is_neutrals: !0,
              }),
              l.createElement(u.ob, { patchnotes: e?.heroes }),
            ),
            l.createElement(d.K, null),
          );
        });
    },
  },
]);
