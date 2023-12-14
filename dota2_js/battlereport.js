// 7929.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
  [7929],
  {
    67594: (e) => {
      e.exports = {
        Tooltip: "juneupdate22_Tooltip_2AeNN",
        CarouselFade: "juneupdate22_CarouselFade_2342Q",
        StandardButton: "juneupdate22_StandardButton_2-Lxk",
        ButtonText: "juneupdate22_ButtonText_22w6T",
        Icon: "juneupdate22_Icon_2PgOQ",
        Play: "juneupdate22_Play_2Xhat",
        SteamLogo: "juneupdate22_SteamLogo_Zh5t-",
        ToolTip: "juneupdate22_ToolTip_F1Dxe",
        PlayerReportTooltip: "juneupdate22_PlayerReportTooltip_22X-7",
        BattleReportPage: "juneupdate22_BattleReportPage_3IGF-",
        HeaderImage: "juneupdate22_HeaderImage_3NjqS",
        HeaderText: "juneupdate22_HeaderText_25ZyP",
        MainTitle: "juneupdate22_MainTitle_2WGhZ",
        MainTitleDivider: "juneupdate22_MainTitleDivider_-0Tgo",
        MainSubtitle: "juneupdate22_MainSubtitle_1iZ5d",
        MainDesc: "juneupdate22_MainDesc_1-ZwV",
        Sections: "juneupdate22_Sections_1pjIZ",
        SectionContainer: "juneupdate22_SectionContainer_3-pRR",
        SectionTitlePrefix: "juneupdate22_SectionTitlePrefix_2LU0J",
        SectionGradHeader: "juneupdate22_SectionGradHeader_32IA6",
        SectionTitle: "juneupdate22_SectionTitle_3jFCS",
        SectionContent: "juneupdate22_SectionContent_-tweZ",
        Text: "juneupdate22_Text_gH-ZG",
        Headline: "juneupdate22_Headline_3BCyo",
        Description: "juneupdate22_Description_29YNe",
        Image: "juneupdate22_Image_3NIas",
        DescRowImage: "juneupdate22_DescRowImage_Kq-Jl",
        DescRow: "juneupdate22_DescRow_2uikT",
        LowerPatch: "juneupdate22_LowerPatch_3BBIE",
        MainTitlePatch: "juneupdate22_MainTitlePatch_3jgyA",
      };
    },
    47929: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => g });
      var n = a(78562),
        i = a(54013),
        l = a(3646),
        c = a(89526),
        r = a(61011),
        s = a(29706),
        d = a(70894),
        _ = a(39375),
        u = a(67594),
        m = a.n(u),
        o = a(59481),
        p = a(88464);
      const j = (e) =>
          c.createElement(
            "div",
            { className: m().Text },
            c.createElement(
              "div",
              { className: m().Headline },
              (0, l.Jr)(e.title),
            ),
            c.createElement(
              "div",
              { className: m().Description },
              (0, l.Jr)(e.description),
            ),
          ),
        E = (e) =>
          c.createElement(
            "div",
            { className: m().SectionContent },
            c.createElement(j, { title: e.title, description: e.description }),
            c.createElement("img", {
              className: m().Image,
              src: `${i.Y.IMG_URL}/` + e.image,
            }),
          ),
        g = (0, p.Pi)(() => {
          const e = n.P.getPatchNotes("7.31d", i.Y.LANGUAGE);
          return c.createElement(
            "div",
            { className: m().BattleReportPage },
            c.createElement(
              r.ql,
              null,
              c.createElement("title", null, (0, l.Jr)("#june22_title")),
            ),
            c.createElement(s.j, { bOverlapping: !0 }),
            c.createElement(_.Z, null),
            c.createElement("div", {
              className: m().HeaderImage,
              style: {
                backgroundImage: `url( ${i.Y.IMG_URL}juneupdate22/keyart.jpg )`,
              },
            }),
            c.createElement(
              "div",
              { className: m().HeaderText },
              c.createElement(
                "div",
                { className: m().MainTitle },
                (0, l.Jr)("#june22_title"),
              ),
              c.createElement("div", { className: m().MainTitleDivider }),
              c.createElement(
                "div",
                { className: m().MainSubtitle },
                (0, l.Jr)("#june22_subtitle"),
              ),
              c.createElement(
                "div",
                { className: m().MainDesc },
                (0, l.Jr)("#june22_desc"),
              ),
            ),
            c.createElement(
              "div",
              {
                className: m().Sections,
                style: {
                  backgroundImage: `url( ${i.Y.IMG_URL}juneupdate22/bg_repeat.jpg )`,
                },
              },
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  (0, l.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_battle_report_title"),
                  ),
                ),
                c.createElement(E, {
                  title: "#june22_battle_report_head01",
                  description: "#june22_battle_report_desc01",
                  image: "juneupdate22/br_featured_stats2.png",
                }),
                c.createElement(E, {
                  title: "#june22_battle_report_head02",
                  description: "#june22_battle_report_desc02",
                  image: "juneupdate22/br_highlights.png",
                }),
                c.createElement(E, {
                  title: "#june22_battle_report_head03",
                  description: "#june22_battle_report_desc03",
                  image: "juneupdate22/br_analysis.png",
                }),
                c.createElement(E, {
                  title: "#june22_battle_report_head04",
                  description: "#june22_battle_report_desc04",
                  image: "juneupdate22/br_summary.png",
                }),
                c.createElement(E, {
                  title: "#june22_battle_report_head05",
                  description: "#june22_battle_report_desc05",
                  image: "juneupdate22/br_exclusive.jpg",
                }),
              ),
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  (0, l.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_featured_game_mode_title"),
                  ),
                ),
                c.createElement("img", {
                  className: m().DescRowImage,
                  src: `${i.Y.IMG_URL}/juneupdate22/weekly_spotlight.png`,
                }),
                c.createElement(
                  "div",
                  { className: m().DescRow },
                  c.createElement(j, {
                    title: "#june22_featured_game_mode_head01",
                    description: "#june22_featured_game_mode_desc01",
                  }),
                  c.createElement(j, {
                    title: "#june22_featured_game_mode_head02",
                    description: "#june22_featured_game_mode_desc02",
                  }),
                  c.createElement(j, {
                    title: "#june22_featured_game_mode_head03",
                    description: "#june22_featured_game_mode_desc03",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  (0, l.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_immortal_fx_title"),
                  ),
                ),
                c.createElement("img", {
                  className: m().DescRowImage,
                  src: `${i.Y.IMG_URL}/juneupdate22/immortal_fx.png`,
                }),
                c.createElement(
                  "div",
                  { className: m().DescRow },
                  c.createElement(j, {
                    title: "#june22_immortal_fx_head01",
                    description: "#june22_immortal_fx_desc01",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  (0, l.Jr)("#new_feature"),
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_match_clips_title"),
                  ),
                ),
                c.createElement("img", {
                  className: m().DescRowImage,
                  src: `${i.Y.IMG_URL}/juneupdate22/clip_builder_sc.jpg`,
                }),
                c.createElement(
                  "div",
                  { className: m().DescRow },
                  c.createElement(j, {
                    title: "#june22_match_clips_head01",
                    description: "#june22_match_clips_desc01",
                  }),
                  c.createElement(j, {
                    title: "#june22_match_clips_head02",
                    description: "#june22_match_clips_desc02",
                  }),
                  c.createElement(j, {
                    title: "#june22_match_clips_head03",
                    description: "#june22_match_clips_desc03",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  (0, l.Jr)("#updated_feature"),
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_avoid_player_title"),
                  ),
                ),
                c.createElement("img", {
                  className: m().DescRowImage,
                  src: `${i.Y.IMG_URL}/juneupdate22/avoid_players_sc.png`,
                }),
                c.createElement(
                  "div",
                  { className: m().DescRow },
                  c.createElement(j, {
                    title: "#june22_avoid_player_head01",
                    description: "#june22_avoid_player_desc01",
                  }),
                  c.createElement(j, {
                    title: "#june22_avoid_player_head02",
                    description: "#june22_avoid_player_desc02",
                  }),
                ),
              ),
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  (0, l.Jr)("#now_available"),
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_shards_title"),
                  ),
                ),
                c.createElement(E, {
                  title: "#june22_shards_head01",
                  description: "#june22_shards_desc01",
                  image: "juneupdate22/killstreak_sc.png",
                }),
                c.createElement(E, {
                  title: "#june22_shards_head02",
                  description: "#june22_shards_desc02",
                  image: "juneupdate22/seasonal_chest.png",
                }),
                c.createElement(E, {
                  title: "#june22_shards_head03",
                  description: "#june22_shards_desc03",
                  image: "juneupdate22/seasonal_sets_sc.png",
                }),
                c.createElement(E, {
                  title: "#june22_shards_head04",
                  description: "#june22_shards_desc04",
                  image: "juneupdate22/relics_sc.png",
                }),
              ),
              c.createElement(
                "div",
                { className: m().SectionContainer },
                c.createElement(
                  "div",
                  { className: m().SectionTitlePrefix },
                  " ",
                ),
                c.createElement(
                  "div",
                  { className: m().SectionGradHeader },
                  c.createElement(
                    "div",
                    { className: m().SectionTitle },
                    (0, l.Jr)("#june22_plus_update_title"),
                  ),
                ),
                c.createElement(E, {
                  title: "#june22_plus_update_head01",
                  description: "#june22_plus_update_desc01",
                  image: "juneupdate22/quests_sc.png",
                }),
                c.createElement(E, {
                  title: "#june22_plus_update_head02",
                  description: "#june22_plus_update_desc02",
                  image: "juneupdate22/guild_rewards_sc.png",
                }),
              ),
            ),
            c.createElement(
              "div",
              { className: m().LowerPatch },
              c.createElement(
                "div",
                { className: m().MainTitlePatch },
                (0, l.Jr)("#june22_gameplay_title"),
              ),
              c.createElement(o.on, {
                patchnotes: null == e ? void 0 : e.generic,
              }),
              c.createElement(o.k8, {
                patchnotes: null == e ? void 0 : e.neutral_creeps,
              }),
              c.createElement(o.bn, {
                patchnotes: null == e ? void 0 : e.items,
              }),
              c.createElement(o.bn, {
                patchnotes: null == e ? void 0 : e.neutral_items,
                is_neutrals: !0,
              }),
              c.createElement(o.MC, {
                patchnotes: null == e ? void 0 : e.heroes,
              }),
            ),
            c.createElement(d.U, null),
          );
        });
    },
  },
]);
