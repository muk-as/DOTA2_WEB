// 85859.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [85859],
    {
      83695: (C, N, d) => {
        "use strict";
        d.d(N, { U: () => c });
        var e = d(69500),
          r = d(11417),
          n = d.n(r),
          t = d(2095);
        const c = () =>
            (0, e.jsx)("div", {
              className: n().RightArrow,
              style: {
                backgroundImage: `url( ${t.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          _ = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      10806: (C, N, d) => {
        "use strict";
        d.d(N, { $x: () => S, Jh: () => L, c: () => T });
        var e = d(69500),
          r = d(32484),
          n = d.n(r),
          t = d(15001),
          c = d(8305),
          _ = d(2095),
          R = d(45488);
        const S = ({
            colorTopEdge: a,
            colorTop: j,
            colorMiddle: E,
            colorBottom: B,
            level: i,
            discountPct: A,
            itemid: D,
            capsuleImageLocation: I = "labyrinth/bp_logo_",
            capsuleImageOnErrorLocation: x = "labyrinth/bp_logo_en.png",
          }) =>
            (0, e.jsxs)("div", {
              className: n().BuyBattlePassCapsule,
              style: {
                borderTop: `2px solid ${a}`,
                backgroundImage: `linear-gradient( ${j}, ${B} )`,
              },
              children: [
                (0, e.jsx)("img", {
                  className: n().CapsuleTitle,
                  onError: (f) => (f.target.src = `${_.r.IMG_URL}${x}`),
                  src: `${_.r.IMG_URL}${I}${_.r.LANGUAGE}.png`,
                }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().TextStyleOverline),
                  children: (0, c.Wn)("#battlepass_purchase_level", i),
                }),
                (0, e.jsx)("a", {
                  href: `${_.r.BASE_URL}store/itemdetails/${D}`,
                  className: (0, t.A)(
                    n().TextStyleButton,
                    n().TextColorWhite,
                    n().CapsulePurchaseButton,
                  ),
                  style: {
                    borderTop: `1px solid ${a}`,
                    backgroundImage: `linear-gradient( ${a}, ${a} )`,
                  },
                  children: (0, c.Wn)(
                    "#battlepass_purchase_label",
                    R.o.GetBPPrice(D),
                  ),
                }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(
                    n().TextStyleFootnote,
                    n().TextColorGreenGlow,
                    n().CapsuleDiscount,
                  ),
                  children:
                    A && (0, c.Wn)("#battlepass_purchase_discount", A, i),
                }),
              ],
            }),
          o = (a) =>
            jsxs("div", {
              className: styles.BuyCompendiumCapsule,
              style: {
                borderTop: `2px solid ${a.colorTopEdge}`,
                backgroundImage: `linear-gradient( ${a.colorTop}, ${a.colorBottom} )`,
              },
              children: [
                a.title &&
                  jsx("div", {
                    className: styles.CapsuleTitle,
                    style: {
                      backgroundImage: "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: BBLocalize(a.title),
                  }),
                a.capsuleImageLocation &&
                  jsx("img", {
                    className: styles.CapsuleTitle,
                    onError: (j) =>
                      (j.target.src = `${ConfigDota.IMG_URL}${a.capsuleImageOnErrorLocation}`),
                    src: `${ConfigDota.IMG_URL}${a.capsuleImageLocation}${ConfigDota.LANGUAGE}.png`,
                  }),
                jsx("div", {
                  className: classnames(styles.CompendiumLevels),
                  children: BBLocalize("#compendium_purchase_levels", a.level),
                }),
                jsx("div", {
                  className: classnames(styles.BoosterLevels),
                  children: BBLocalize(
                    "#compendium_purchase_booster_levels",
                    a.booster_level,
                  ),
                }),
                jsx("div", {
                  className: classnames(
                    styles.TextStyleButton,
                    styles.TextColorWhite,
                    styles.CapsulePurchaseButton,
                  ),
                  style: {
                    borderTop: `1px solid ${a.colorTopEdge}`,
                    backgroundImage: `linear-gradient( ${a.colorTopEdge}, ${a.colorTopEdge} )`,
                  },
                  onClick: () =>
                    g_App.PurchaseOnSteamStore(
                      a.itemid,
                      1,
                      window.location.href,
                    ),
                  children: BBLocalize(
                    "#battlepass_purchase_label",
                    g_App.GetBPPrice(a.itemid),
                  ),
                }),
                jsx("div", {
                  className: classnames(
                    styles.TextStyleFootnote,
                    styles.TextColorGreenGlow,
                    styles.CapsuleDiscount,
                  ),
                  children:
                    g_App.GetBPDiscount(a.eventid, a.itemid) &&
                    BBLocalize(
                      "#compendium_purchase_discount",
                      g_App.GetBPDiscount(a.eventid, a.itemid),
                    ),
                }),
              ],
            }),
          T = (a) =>
            (0, e.jsxs)("div", {
              className: (0, t.A)(
                n().BuyCompendiumCapsule,
                n().BuyCompendiumCapsule2023,
              ),
              style: {
                borderTop: `2px solid ${a.colorTopEdge}`,
                backgroundImage: `linear-gradient( ${a.colorTop}, ${a.colorBottom} )`,
              },
              children: [
                a.title &&
                  (0, e.jsx)("div", {
                    className: n().CapsuleTitle,
                    style: {
                      backgroundImage: "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: (0, c.Wn)(a.title),
                  }),
                a.capsuleImageLocation &&
                  (0, e.jsx)("img", {
                    className: n().CapsuleTitle,
                    onError: (j) =>
                      (j.target.src = `${_.r.IMG_URL}${a.capsuleImageOnErrorLocation}`),
                    src: `${_.r.IMG_URL}${a.capsuleImageLocation}${_.r.LANGUAGE}.png`,
                  }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().CompendiumLevels),
                  children: (0, c.Wn)("#compendium_purchase_levels", a.level),
                }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().BoosterLevels),
                  children: (0, c.Wn)(
                    "#compendium_purchase_booster_levels",
                    a.booster_level,
                  ),
                }),
                (0, e.jsx)("div", { className: n().SmoothLine }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().EarnTheFollowing),
                  children: (0, c.Wn)(
                    "#compendium_purchase_earn_the_following",
                  ),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)("#compendium_purchase_all_access"),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#compendium_purchase_aegis_emoticon",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#compendium_purchase_rtti_culling_blades",
                        a.cullingBlades,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#compendium_purchase_rtti_reroll_tokens",
                        a.rerollTokens,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#compendium_purchase_fantasy_tokens",
                        a.fantasyTokens,
                      ),
                    }),
                    a.voicelines == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_one_random_voiceline",
                        ),
                      }),
                    a.voicelines > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_voicelines",
                          a.voicelines,
                        ),
                      }),
                    a.playerStickers == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_one_player_sticker",
                        ),
                      }),
                    a.playerStickers > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_player_stickers",
                          a.playerStickers,
                        ),
                      }),
                    a.teamStickers &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_team_stickers",
                          a.teamStickers,
                        ),
                      }),
                    a.teamLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_team_loading_screens",
                          a.teamLoadingScreens,
                        ),
                      }),
                    a.tiLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#compendium_purchase_ti_loading_screens",
                          a.tiLoadingScreens,
                        ),
                      }),
                    a.tpFX &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)("#compendium_purchase_tp_fx"),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: n().BoostersFootnoteContainer,
                  children: [
                    !a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, t.A)(n().BoostersFootnote),
                        children: (0, c.Wn)(
                          "#compendium_purchase_boosters_footnote",
                        ),
                      }),
                    a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, t.A)(n().BoostersFootnote),
                        children: (0, c.Wn)(
                          "#compendium_purchase_upgraded_boosters_footnote",
                        ),
                      }),
                  ],
                }),
              ],
            }),
          L = (a) =>
            (0, e.jsxs)("div", {
              className: (0, t.A)(
                n().BuyCompendiumCapsule,
                n().BuyCompendiumCapsule2024,
              ),
              style: {
                backgroundImage: a.isUpgraded
                  ? `url( ${_.r.IMG_URL}/international2024/compendium/panel_upgraded_compendium.jpg )`
                  : `url( ${_.r.IMG_URL}/international2024/compendium/panel_standard_compendium.jpg )`,
              },
              children: [
                (0, e.jsx)("div", {
                  className: n().FlourishContainer,
                  children: (0, e.jsx)("img", {
                    src: a.isUpgraded
                      ? `${_.r.IMG_URL}international2024/dividers_and_flourishes/flourish_upgraded_compendium.png`
                      : `${_.r.IMG_URL}international2024/dividers_and_flourishes/flourish_standard_compendium.png`,
                  }),
                }),
                a.title &&
                  (0, e.jsx)("div", {
                    className: n().CapsuleTitle,
                    style: {
                      backgroundImage: a.isUpgraded
                        ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                        : "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: (0, c.Wn)(a.title),
                  }),
                a.capsuleImageLocation &&
                  (0, e.jsx)("img", {
                    className: n().CapsuleTitle,
                    onError: (j) =>
                      (j.target.src = `${_.r.IMG_URL}${a.capsuleImageOnErrorLocation}`),
                    src: `${_.r.IMG_URL}${a.capsuleImageLocation}${_.r.LANGUAGE}.png`,
                  }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().CompendiumLevels),
                  style: {
                    backgroundImage: a.isUpgraded
                      ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                      : "linear-gradient( to bottom, #FFF, #FFF",
                  },
                  children: (0, c.Wn)(
                    "#ti13_compendium_purchase_levels",
                    a.level,
                  ),
                }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().BoosterLevels),
                  style: {
                    backgroundImage: a.isUpgraded
                      ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                      : "linear-gradient( to bottom, #FFF, #FFF",
                  },
                  children: (0, c.Wn)(
                    "#ti13_compendium_purchase_booster_levels",
                    a.booster_level,
                  ),
                }),
                (0, e.jsx)("div", { className: n().SmoothLine }),
                (0, e.jsx)("div", {
                  className: (0, t.A)(n().EarnTheFollowing),
                  children: (0, c.Wn)(
                    "#ti13_compendium_purchase_earn_the_following",
                  ),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: a.isUpgraded
                        ? (0, c.Wn)("#ti13_compendium_upgraded_subtitle")
                        : (0, c.Wn)("#ti13_compendium_standard_subtitle"),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#ti13_compendium_purchase_aegis_emoticon",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#ti13_compendium_purchase_bingo_tokens",
                        a.bingoTokens,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, t.A)(n().OtherRewards),
                      children: (0, c.Wn)(
                        "#ti13_compendium_purchase_fantasy_tokens",
                        a.fantasyTokens,
                      ),
                    }),
                    a.playerStickers == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_one_player_sticker",
                        ),
                      }),
                    a.playerStickers > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_player_stickers",
                          a.playerStickers,
                        ),
                      }),
                    a.teamStickers &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_team_stickers",
                          a.teamStickers,
                        ),
                      }),
                    a.teamLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_team_loading_screens",
                          a.teamLoadingScreens,
                        ),
                      }),
                    a.tiLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_ti_loading_screens",
                          a.tiLoadingScreens,
                        ),
                      }),
                    a.effigyBlocks &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_effigy_blocks",
                          a.effigyBlocks,
                        ),
                      }),
                    a.tpFX &&
                      (0, e.jsx)("li", {
                        className: (0, t.A)(n().OtherRewards),
                        children: (0, c.Wn)("#ti13_compendium_purchase_tp_fx"),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: n().BoostersFootnoteContainer,
                  children: [
                    !a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, t.A)(n().BoostersFootnote),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_boosters_footnote",
                        ),
                      }),
                    a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, t.A)(n().BoostersFootnote),
                        children: (0, c.Wn)(
                          "#ti13_compendium_purchase_upgraded_boosters_footnote",
                        ),
                      }),
                  ],
                }),
              ],
            });
      },
      85859: (C, N, d) => {
        "use strict";
        d.r(N), d.d(N, { default: () => w });
        var e = d(69500),
          r = d(2095),
          n = d(11778),
          t = d(8305),
          c = d(3878),
          _ = d(7552),
          R = d(73202),
          S = d(2130),
          o = d(15001),
          T = d(45488),
          L = d(63177),
          a = d(42616),
          j = d(45237),
          E = d(83695),
          B = d(93125),
          i = d.n(B),
          A = d(88351),
          D = d(21127),
          I = d(10806),
          x = d(32389),
          f = Object.defineProperty,
          k = Object.getOwnPropertyDescriptor,
          V = (s, g, h, u) => {
            for (
              var l = u > 1 ? void 0 : u ? k(g, h) : g, m = s.length - 1, P;
              m >= 0;
              m--
            )
              (P = s[m]) && (l = (u ? P(g, h, l) : P(l)) || l);
            return u && l && f(g, h, l), l;
          };
        const { detect: H } = d(51744),
          W = H(),
          U = "International2024Page";
        function O() {
          return !1;
        }
        const K = ({ children: s }) => {
            const { hash: g } = (0, A.zy)();
            return (
              (0, _.useEffect)(() => {
                g &&
                  setTimeout(() => {
                    const h = g.replace("#", "");
                    (0, D.A)(h, U);
                  }, 500);
              }, [g]),
              null
            );
          },
          p = [
            {
              posterDir: "abilities/ringmaster/ringmaster_tame_the_beasts.jpg",
              videoSrcMp4:
                "abilities/ringmaster/ringmaster_tame_the_beasts.mp4",
              imgSrc: "abilities/ringmaster_tame_the_beasts.png",
              abilityName: "#ringmaster_ability_tame_the_beasts",
              abilityDesc: "#ringmaster_ability_tame_the_beasts_Description",
            },
            {
              posterDir: "abilities/ringmaster/ringmaster_the_box.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_the_box.mp4",
              imgSrc: "abilities/ringmaster_the_box.png",
              abilityName: "#ringmaster_ability_the_box",
              abilityDesc: "#ringmaster_ability_the_box_Description",
            },
            {
              posterDir: "abilities/ringmaster/ringmaster_impalement.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_impalement.mp4",
              imgSrc: "abilities/ringmaster_impalement.png",
              abilityName: "#ringmaster_ability_impalement",
              abilityDesc: "#ringmaster_ability_impalement_Description",
            },
            {
              posterDir: "abilities/ringmaster/ringmaster_wheel.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_wheel.mp4",
              imgSrc: "abilities/ringmaster_wheel.png",
              abilityName: "#ringmaster_ability_wheel",
              abilityDesc: "#ringmaster_ability_wheel_Description",
            },
            {
              posterDir: "abilities/ringmaster/ringmaster_spotlight.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_spotlight.mp4",
              imgSrc: "abilities/ringmaster_spotlight.png",
              abilityName: "#ringmaster_ability_spotlight",
              abilityDesc: "#ringmaster_ability_spotlight_Description",
              bIsShard: !0,
            },
          ],
          y = [
            {
              posterDir: "abilities/ringmaster/ringmaster_funhouse_mirror.jpg",
              videoSrcMp4:
                "abilities/ringmaster/ringmaster_funhouse_mirror.mp4",
              imgSrc: "abilities/ringmaster_funhouse_mirror.png",
              abilityName: "#ringmaster_ability_funhouse_mirror",
              abilityDesc: "#ringmaster_ability_funhouse_mirror_Description",
            },
            {
              posterDir: "abilities/ringmaster/ringmaster_whoopee_cushion.jpg",
              videoSrcMp4:
                "abilities/ringmaster/ringmaster_whoopee_cushion.mp4",
              imgSrc: "abilities/ringmaster_whoopee_cushion.png",
              abilityName: "#ringmaster_ability_whoopee_cushion",
              abilityDesc: "#ringmaster_ability_whoopee_cushion_Description",
            },
            {
              posterDir: "abilities/ringmaster/ringmaster_strongman_tonic.jpg",
              videoSrcMp4:
                "abilities/ringmaster/ringmaster_strongman_tonic.mp4",
              imgSrc: "abilities/ringmaster_strongman_tonic.png",
              abilityName: "#ringmaster_ability_strongman_tonic",
              abilityDesc: "#ringmaster_ability_strongman_tonic_Description",
            },
          ],
          M = (s) => {
            const g =
                s.bulletLine1 &&
                (0, t.Wn)(s.bulletLine1) &&
                (0, t.Wn)(s.bulletLine1).toString() !== s.bulletLine1,
              h =
                s.bulletLine2 &&
                (0, t.Wn)(s.bulletLine2) &&
                (0, t.Wn)(s.bulletLine2).toString() !== s.bulletLine2,
              u = g || h;
            return (0, e.jsxs)("div", {
              className: (0, o.A)(
                i().Text,
                s.bFlexColumn ? i().LargerMaxWidth : "",
                s.bNoGapInTextCapsule ? i().NoGap : "",
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: i().HeaderContainer,
                  children: [
                    s.icon &&
                      (0, e.jsx)("div", {
                        className: i().Icon,
                        children: (0, e.jsx)("img", {
                          src: `${r.r.IMG_URL}/` + s.icon,
                        }),
                      }),
                    (0, e.jsx)("div", {
                      className: i().Headline,
                      children: (0, t.Wn)(s.title),
                    }),
                  ],
                }),
                s.description &&
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      i().Description,
                      s.bCenterText ? i().CenterText : "",
                    ),
                    children: (0, t.Wn)(s.description),
                  }),
                u &&
                  (0, e.jsxs)("ul", {
                    children: [
                      g &&
                        (0, e.jsx)("li", {
                          children: (0, e.jsx)("span", {
                            className: (0, o.A)(
                              i().Description,
                              s.bCenterText ? i().CenterText : "",
                            ),
                            children: `${(0, t.Wn)(s.bulletLine1)}`,
                          }),
                        }),
                      h &&
                        (0, e.jsx)("li", {
                          children: (0, e.jsx)("span", {
                            className: (0, o.A)(
                              i().Description,
                              s.bCenterText ? i().CenterText : "",
                            ),
                            children: `${(0, t.Wn)(s.bulletLine2)}`,
                          }),
                        }),
                    ],
                  }),
                s.contents &&
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      i().Description,
                      s.bCenterText ? i().CenterText : "",
                    ),
                    children: s.contents,
                  }),
              ],
            });
          },
          z = (s) =>
            jsxs("div", {
              className: styles.RewardsText,
              children: [
                jsxs("div", {
                  className: styles.HeaderContainer,
                  children: [
                    s.icon &&
                      jsx("div", {
                        className: styles.Icon,
                        children: jsx("img", {
                          src: `${ConfigDota.IMG_URL}/` + s.icon,
                        }),
                      }),
                    jsx("div", {
                      className: styles.Headline,
                      children: BBLocalize(s.title),
                    }),
                  ],
                }),
                s.description &&
                  jsx("div", {
                    className: classnames(
                      styles.Description,
                      s.bCenterText ? styles.CenterText : "",
                    ),
                    children: BBLocalize(s.description),
                  }),
                s.contents &&
                  jsx("div", {
                    className: classnames(
                      styles.Description,
                      s.bCenterText ? styles.CenterText : "",
                    ),
                    children: s.contents,
                  }),
              ],
            }),
          Z = (s) =>
            (0, e.jsxs)("div", {
              className: i().RingmasterCapsuleText,
              children: [
                (0, e.jsxs)("div", {
                  className: i().HeaderContainer,
                  children: [
                    s.icon &&
                      (0, e.jsx)("div", {
                        className: i().Icon,
                        children: (0, e.jsx)("img", {
                          src: `${r.r.IMG_URL}/` + s.icon,
                        }),
                      }),
                    (0, e.jsx)("div", {
                      className: i().Headline,
                      children: (0, t.Wn)(s.title),
                    }),
                  ],
                }),
                s.description &&
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      i().RingmasterCapsuleDescription,
                      s.bCenterText ? i().CenterText : "",
                    ),
                    children: (0, t.Wn)(s.description),
                  }),
                s.contents &&
                  (0, e.jsx)("div", {
                    className: (0, o.A)(
                      i().Description,
                      s.bCenterText ? i().CenterText : "",
                    ),
                    children: s.contents,
                  }),
              ],
            }),
          b = (s) =>
            (0, e.jsxs)("div", {
              className: (0, o.A)(
                i().FeatureCapsule,
                i().RingmasterFeatureCapsule,
                s.bSwapImageSide ? i().FeatureCapsuleSwapOrder : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)(Z, {
                  title: s.title,
                  description: s.description,
                  contents: s.contents,
                  bIsLetsGetStarted: s.bIsLetsGetStarted,
                }),
                s.image &&
                  (0, e.jsx)("img", {
                    className: (0, o.A)(
                      i().RingmasterFeatureImage,
                      s.bTranslateImageUp ? i().TranslateImageUp : "",
                      s.imageStyle ? s.imageStyle : "",
                    ),
                    src: `${r.r.IMG_URL}/` + s.image,
                  }),
              ],
            }),
          F = (s) =>
            (0, e.jsxs)("div", {
              className: (0, o.A)(
                i().FeatureCapsule,
                s.bSwapImageSide ? i().FeatureCapsuleSwapOrder : "",
                s.bFlexColumn ? i().FlexColumn : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)(M, {
                  title: s.title,
                  description: s.description,
                  bulletLine1: s.bulletLine1,
                  bulletLine2: s.bulletLine1 ? s.bulletLine1 + "2" : "",
                  bFlexColumn: s.bFlexColumn,
                  contents: s.contents,
                }),
                s.image &&
                  (0, e.jsx)("img", {
                    className: (0, o.A)(
                      i().Image,
                      s.bTranslateImageUp ? i().TranslateImageUp : "",
                      s.imageStyle ? s.imageStyle : "",
                    ),
                    src: `${r.r.IMG_URL}/` + s.image,
                  }),
              ],
            }),
          Q = (s) =>
            jsx("div", {
              className: classnames(
                styles.FeatureCapsule,
                s.bSwapImageSide ? styles.FeatureCapsuleSwapOrder : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: jsx(z, {
                title: s.title,
                description: s.description,
                contents: s.contents,
              }),
            }),
          v = (s) =>
            (0, e.jsxs)("div", {
              className: (0, o.A)(
                i().SmallFeatureCapsule,
                s.bUseFlexSpaceBetween ? i().SpaceBetween : "",
                s.bUseJustifyContentEnd ? i().JustifyContentEnd : "",
                s.bNoGapBetweenPicAndText ? i().NoGap : "",
              ),
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)("div", {
                  className: i().ImageContainer,
                  children: (0, e.jsx)("img", {
                    className: (0, o.A)(
                      i().Image,
                      s.imageStyle ? s.imageStyle : "",
                    ),
                    src: `${r.r.IMG_URL}/` + s.image,
                  }),
                }),
                (0, e.jsx)(M, {
                  title: s.title,
                  description: s.description,
                  contents: s.contents,
                  bCenterText: s.bCenterText,
                  bNoGapInTextCapsule: s.bNoGapInTextCapsule,
                }),
              ],
            }),
          Y = (s) =>
            jsxs("div", {
              className: classnames(
                styles.SmallRewardsCapsule,
                s.bSwapImageSide ? styles.FeatureCapsuleSwapOrder : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                jsx("div", {
                  className: styles.SmallRewardsTextContainer,
                  children: jsx(M, {
                    title: s.title,
                    description: s.description,
                    contents: s.contents,
                  }),
                }),
                jsx("div", {
                  className: styles.SmallRewardsImageContainer,
                  children:
                    s.image &&
                    jsx("img", {
                      className: classnames(
                        styles.Image,
                        s.bTranslateImageUp ? styles.TranslateImageUp : "",
                        s.imageStyle ? s.imageStyle : "",
                      ),
                      src: `${ConfigDota.IMG_URL}/` + s.image,
                    }),
                }),
              ],
            }),
          G = ({ bShowLearnMore: s = !1 }) =>
            (0, e.jsxs)("div", {
              className: i().PurchaseSection,
              children: [
                (0, e.jsxs)("div", {
                  className: i().BuyCompendiumButtons,
                  children: [
                    (0, e.jsx)(I.Jh, {
                      colorTopEdge: "#237EA5",
                      colorTop: "#00172C ",
                      colorMiddle: "#010E1A",
                      colorBottom: "#010E1A",
                      colorButtonOverride: "#3EAC40",
                      title: "#ti13_compendium_standard",
                      level: 6,
                      booster_level: 6,
                      itemid: 30237,
                      eventid: $,
                      bingoTokens: 51,
                      fantasyTokens: 36,
                      playerStickers: 1,
                    }),
                    (0, e.jsx)(I.Jh, {
                      colorTopEdge: "#BDB099",
                      colorTop: "#175F8A ",
                      colorMiddle: "#002948",
                      colorBottom: "#002948",
                      colorButtonOverride: "#3EAC40",
                      title: "#ti13_compendium_upgraded",
                      level: 50,
                      booster_level: 28,
                      itemid: 30240,
                      eventid: $,
                      bingoTokens: 93,
                      fantasyTokens: 78,
                      playerStickers: 12,
                      teamStickers: 5,
                      teamLoadingScreens: 4,
                      tiLoadingScreens: 3,
                      effigyBlocks: 2,
                      tpFX: 1,
                      isUpgraded: !0,
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: i().ContributionContainer,
                  children: (0, e.jsx)("div", {
                    className: (0, o.A)(i().ContributionText),
                    children: (0, t.Wn)("#ti13_compendium_contribution"),
                  }),
                }),
                s &&
                  (0, e.jsx)("a", {
                    className: i().TournamentLearnMore,
                    href: `${r.r.BASE_URL}esports/ti13/watch`,
                    children: (0, t.Wn)(
                      "#international2024_tournament_learn_more",
                    ),
                  }),
              ],
            }),
          X = (s) =>
            jsx("div", {
              className: styles.ExplainerMovie,
              children: jsxs("video", {
                className: styles.ExplainerVideo,
                autoPlay: !0,
                preload: "auto",
                muted: !0,
                loop: !0,
                playsInline: !0,
                poster: s.strPosterImageFullPath,
                "data-aos": "fade-in",
                "data-aos-duration": "1000",
                children: [
                  W.name != "edge" &&
                    W.name != "edge-chromium" &&
                    jsx("source", {
                      type: "video/webm",
                      src: s.strVideoWebMFullPath,
                    }),
                  jsx("source", {
                    type: "video/mp4",
                    src: s.strVideoMP4FullPath,
                  }),
                ],
              }),
            }),
          q = ({ nIndex: s, strVideo: g }) => {
            const h = useContext(CarouselContext),
              u = useRef(void 0);
            return (
              useEffect(() => {
                function l() {
                  u.current && h.state.currentSlide == s && u.current.load();
                }
                return h.subscribe(l), () => h.unsubscribe(l);
              }, [h, s]),
              jsx("div", {
                className: styles.VideoContainer,
                children: jsx("video", {
                  ref: u,
                  className: styles.ShowcaseVideo,
                  autoPlay: !0,
                  preload: "auto",
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  children: jsx("source", {
                    type: "video/webm",
                    src: `${ConfigDota.VIDEO_URL}international2023/${g}.webm`,
                  }),
                }),
              })
            );
          },
          ee = [
            { strVideo: "showcase_ti" },
            { strVideo: "showcase_windranger" },
            { strVideo: "showcase_pro_team" },
            { strVideo: "showcase_stickers" },
            { strVideo: "showcase_sniper" },
            { strVideo: "showcase_cliff" },
          ],
          $ = 49,
          J = [30237, 30240];
        let w = class extends _.Component {
          videoRef = _.createRef();
          constructor(s) {
            super(s), (this.state = { bPlayingVideo: !1 });
          }
          setPlayingVideo(s) {
            this.setState({ bPlayingVideo: s }),
              s ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          scrollToTarget(s) {
            s.current.scrollIntoView({ behavior: "smooth" });
          }
          render() {
            T.o.RequestBPPrices(J);
            const s =
                r.r.LANGUAGE == "schinese" || r.r.LANGUAGE == "tchinese"
                  ? "cn_logo_ti_compendium_01"
                  : "logo_ti_compendium_01",
              g =
                r.r.LANGUAGE == "schinese" || r.r.LANGUAGE == "tchinese"
                  ? "cn_logo_ringmaster"
                  : "logo_ringmaster",
              h =
                r.r.LANGUAGE == "schinese" || r.r.LANGUAGE == "tchinese"
                  ? "ringmaster_trailer_schinese"
                  : "ringmaster_trailer_english";
            let u = (0, S.wwZ)((0, S.sfN)(r.r.LANGUAGE));
            return (
              u === "zh-cn"
                ? (u = "zh-Hans")
                : u === "zh-tw" && (u = "zh-Hant"),
              (0, e.jsxs)("div", {
                id: U,
                className: i().International2024Page,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, o.A)(
                      i().TrailerContainer,
                      this.state.bPlayingVideo ? null : i().Hidden,
                    ),
                    children: [
                      (0, e.jsxs)("video", {
                        ref: this.videoRef,
                        className: (0, o.A)(i().TrailerVideo),
                        autoPlay: !1,
                        preload: "none",
                        muted: !1,
                        loop: !1,
                        playsInline: !1,
                        controls: !0,
                        crossOrigin: "anonymous",
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${r.r.VIDEO_URL}/international2024/${h}.mp4`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/mp4",
                            src: `${r.r.VIDEO_URL}/international2024/ringmaster_trailer_english.mp4`,
                          }),
                          (0, e.jsx)("track", {
                            label: `${r.r.LANGUAGE}`,
                            kind: "captions",
                            srcLang: u,
                            src: `${r.r.VIDEO_URL}/international2024/ringmaster_${r.r.LANGUAGE}.vtt`,
                            default: !0,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: i().CloseButton,
                        onClick: () => this.setPlayingVideo(!1),
                        children: (0, e.jsx)("img", {
                          className: i().CloseButtonImage,
                          src: `${r.r.IMG_URL}/close.png`,
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(R.mg, {
                    children: (0, e.jsx)("title", {
                      children: (0, t.Wn)("#international2024_update_title"),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, o.A)(
                      i().PageContainer,
                      this.state.bPlayingVideo ? i().Hidden : null,
                    ),
                    children: [
                      (0, e.jsx)(L.A, { bOverlapping: !0 }),
                      (0, e.jsxs)("div", {
                        className: i().RingmasterHeaderSection,
                        children: [
                          (0, e.jsxs)("div", {
                            className: i().BackgroundVideoContainer,
                            children: [
                              !O() &&
                                (0, e.jsxs)("video", {
                                  className: i().BackgroundVideo,
                                  autoPlay: !0,
                                  preload: "auto",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  poster: `${r.r.IMG_URL}international2024/ringmaster/ringmaster_poster.png`,
                                  children: [
                                    (0, e.jsx)("source", {
                                      type: 'video/mp4; codecs="hvc1"',
                                      src: `${r.r.VIDEO_URL}/international2024/ringmaster_debut_anim.mov?v5`,
                                    }),
                                    (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${r.r.VIDEO_URL}international2024/ringmaster_debut_anim.webm`,
                                    }),
                                  ],
                                }),
                              O() &&
                                (0, e.jsx)("img", {
                                  className: i().BackgroundImage,
                                  src: `${r.r.IMG_URL}international2024/ringmaster/ringmaster_poster.png`,
                                }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: i().TitleContainer,
                            "data-aos": "fade-up",
                            "data-aos-delay": "200",
                            "data-aos-duration": "2000",
                            children: [
                              (0, e.jsx)("div", {
                                className: i().TitleIntro,
                                children: (0, t.Wn)("#ringmaster_introducing"),
                              }),
                              (0, e.jsx)("img", {
                                className: (0, o.A)(i().HeroLogo, i().Img1),
                                src: `${r.r.IMG_URL}/international2024/ringmaster/${g}.png`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: i().RingmasterDescriptionContainer,
                        children: [
                          (0, e.jsxs)("div", {
                            className: i().Roles,
                            children: [
                              (0, e.jsx)("div", {
                                className: i().HeroRole,
                                children: (0, t.Wn)("#hero_attack_type_ranged"),
                              }),
                              (0, e.jsx)("div", {
                                className: i().HeroRole,
                                children: (0, t.Wn)("#hero_support"),
                              }),
                              (0, e.jsx)("div", {
                                className: i().HeroRole,
                                children: (0, t.Wn)("#hero_disabler"),
                              }),
                              (0, e.jsx)("div", {
                                className: i().HeroRole,
                                children: (0, t.Wn)("#hero_escape"),
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: i().HeroHype,
                            children: (0, t.Wn)("#ringmaster_hype"),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: i().AbilitySection,
                        children: (0, e.jsxs)(x.gi, {
                          className: i().AbilityCarousel,
                          naturalSlideWidth: 100,
                          naturalSlideHeight: 56.25,
                          totalSlides: p.length + y.length,
                          children: [
                            (0, e.jsxs)(x.Ap, {
                              className: i().AbilitySlider,
                              children: [
                                p.map((l, m) =>
                                  (0, e.jsxs)(
                                    x.q7,
                                    {
                                      index: m,
                                      children: [
                                        (0, e.jsxs)("video", {
                                          className: i().AbilityVideo,
                                          autoPlay: !0,
                                          preload: "auto",
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                          poster: `${r.r.VIDEO_URL}/${l.posterDir}`,
                                          children: [
                                            l.videoSrcWebm &&
                                              (0, e.jsx)("source", {
                                                type: "video/webm",
                                                src: `${r.r.VIDEO_URL}/${l.videoSrcWebm}`,
                                              }),
                                            l.videoSrcMp4 &&
                                              (0, e.jsx)("source", {
                                                type: "video/mp4",
                                                src: `${r.r.VIDEO_URL}/${l.videoSrcMp4}`,
                                              }),
                                          ],
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: i().SlideAbilityContainer,
                                          children: [
                                            (0, e.jsx)("img", {
                                              className: i().SlideAbilityIcon,
                                              src: `${r.r.IMG_URL}/${l.imgSrc}`,
                                            }),
                                            (0, e.jsxs)("div", {
                                              className: i().AbilityText,
                                              children: [
                                                (0, e.jsx)("div", {
                                                  className: i().AbilityName,
                                                  children: (0, t.Wn)(
                                                    `${l.abilityName}`,
                                                  ),
                                                }),
                                                (0, e.jsx)("div", {
                                                  className: i().AbilityDesc,
                                                  children: (0, t.Wn)(
                                                    `${l.abilityDesc}`,
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    `HeroAbilitySlide-${m}`,
                                  ),
                                ),
                                y.map((l, m) =>
                                  (0, e.jsxs)(
                                    x.q7,
                                    {
                                      index: p.length + m,
                                      children: [
                                        (0, e.jsxs)("video", {
                                          className: i().AbilityVideo,
                                          autoPlay: !0,
                                          preload: "auto",
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                          poster: `${r.r.VIDEO_URL}/${l.posterDir}`,
                                          children: [
                                            l.videoSrcWebm &&
                                              (0, e.jsx)("source", {
                                                type: "video/webm",
                                                src: `${r.r.VIDEO_URL}/${l.videoSrcWebm}`,
                                              }),
                                            l.videoSrcMp4 &&
                                              (0, e.jsx)("source", {
                                                type: "video/mp4",
                                                src: `${r.r.VIDEO_URL}/${l.videoSrcMp4}`,
                                              }),
                                          ],
                                        }),
                                        (0, e.jsxs)("div", {
                                          className: i().SlideAbilityContainer,
                                          children: [
                                            (0, e.jsx)("img", {
                                              className: i().SlideAbilityIcon,
                                              src: `${r.r.IMG_URL}/${l.imgSrc}`,
                                            }),
                                            (0, e.jsxs)("div", {
                                              className: i().AbilityText,
                                              children: [
                                                (0, e.jsx)("div", {
                                                  className: i().AbilityName,
                                                  children: (0, t.Wn)(
                                                    `${l.abilityName}`,
                                                  ),
                                                }),
                                                (0, e.jsx)("div", {
                                                  className: i().AbilityDesc,
                                                  children: (0, t.Wn)(
                                                    `${l.abilityDesc}`,
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    `HeroAbilitySlide-${p.length + m}`,
                                  ),
                                ),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: i().CarouselDotsSection,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: i().CarouselDotsLeft,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: i().CarouselDotsHeading,
                                      children: (0, t.Wn)(
                                        "#ringmaster_abilities_heading",
                                      ),
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, o.A)(i().CarouselDots),
                                      children: p.map((l, m) =>
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: m,
                                            className: i().AbilitySelector,
                                            style: {
                                              backgroundImage: l.bIsShard
                                                ? `url(${r.r.IMG_URL}heroes/stats/aghs_shard.png ), url( ${r.r.IMG_URL}/${l.imgSrc} )`
                                                : `url( ${r.r.IMG_URL}/${l.imgSrc} )`,
                                              backgroundSize: l.bIsShard
                                                ? "cover, cover"
                                                : "cover",
                                            },
                                            children: (0, e.jsx)("div", {}),
                                          },
                                          `HeroAbilityDot-${m}`,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().CarouselDotsRight,
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: i().CarouselDotsHeading,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: i().InnateIcon,
                                          src: `${r.r.IMG_URL}icons/innate_icon.png`,
                                        }),
                                        " ",
                                        (0, t.Wn)(
                                          "#ringmaster_souvenirs_heading",
                                        ),
                                        (0, e.jsx)("div", {
                                          className: i().AbilityTooltip,
                                          children: (0, e.jsx)("div", {
                                            className: i().TooltipBody,
                                            children: (0, e.jsxs)("div", {
                                              className: i().Description,
                                              children: [
                                                (0, e.jsxs)("div", {
                                                  className: i().TooltipTitle,
                                                  children: [
                                                    (0, t.Wn)(
                                                      "#ringmaster_ability_dark_carnival_trinkets",
                                                    ),
                                                    " ",
                                                  ],
                                                }),
                                                (0, e.jsxs)("div", {
                                                  className:
                                                    i().TooltipDescription,
                                                  children: [
                                                    (0, t.Wn)(
                                                      "#ringmaster_ability_dark_carnival_trinkets_Description",
                                                    ),
                                                    " ",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, o.A)(i().CarouselDots),
                                      children: y.map((l, m) =>
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: p.length + m,
                                            className: i().AbilitySelector,
                                            style: {
                                              backgroundImage: `url( ${r.r.IMG_URL}/${l.imgSrc} )`,
                                              backgroundSize: "cover",
                                            },
                                            children: (0, e.jsx)("div", {}),
                                          },
                                          `HeroAbilityDot-${p.length + m}`,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: i().AbilitySectionMobileView,
                        children: (0, e.jsxs)(x.gi, {
                          className: i().AbilityCarousel,
                          naturalSlideWidth: 100,
                          naturalSlideHeight: 56.25,
                          totalSlides: p.length + y.length,
                          children: [
                            (0, e.jsxs)(x.Ap, {
                              className: i().AbilitySlider,
                              children: [
                                p.map((l, m) =>
                                  (0, e.jsx)(
                                    x.q7,
                                    {
                                      index: m,
                                      children: (0, e.jsxs)("div", {
                                        className:
                                          i().AbilitySlideContainerMobile,
                                        children: [
                                          (0, e.jsx)("div", {
                                            className:
                                              i().AbilityVideoContainer,
                                            children: (0, e.jsxs)("video", {
                                              className: i().AbilityVideo,
                                              autoPlay: !0,
                                              preload: "auto",
                                              muted: !0,
                                              loop: !0,
                                              playsInline: !0,
                                              poster: `${r.r.VIDEO_URL}/${l.posterDir}`,
                                              children: [
                                                l.videoSrcWebm &&
                                                  (0, e.jsx)("source", {
                                                    type: "video/webm",
                                                    src: `${r.r.VIDEO_URL}/${l.videoSrcWebm}`,
                                                  }),
                                                l.videoSrcMp4 &&
                                                  (0, e.jsx)("source", {
                                                    type: "video/mp4",
                                                    src: `${r.r.VIDEO_URL}/${l.videoSrcMp4}`,
                                                  }),
                                              ],
                                            }),
                                          }),
                                          (0, e.jsxs)("div", {
                                            className:
                                              i().SlideAbilityContainer,
                                            children: [
                                              (0, e.jsx)("img", {
                                                className: i().SlideAbilityIcon,
                                                src: `${r.r.IMG_URL}/${l.imgSrc}`,
                                              }),
                                              (0, e.jsxs)("div", {
                                                className: i().AbilityText,
                                                children: [
                                                  (0, e.jsx)("div", {
                                                    className: i().AbilityName,
                                                    children: (0, t.Wn)(
                                                      `${l.abilityName}`,
                                                    ),
                                                  }),
                                                  (0, e.jsx)("div", {
                                                    className: i().AbilityDesc,
                                                    children: (0, t.Wn)(
                                                      `${l.abilityDesc}`,
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    `HeroAbilitySlide-${m}`,
                                  ),
                                ),
                                y.map((l, m) =>
                                  (0, e.jsx)(
                                    x.q7,
                                    {
                                      index: p.length + m,
                                      children: (0, e.jsxs)("div", {
                                        className:
                                          i().AbilitySlideContainerMobile,
                                        children: [
                                          (0, e.jsx)("div", {
                                            className:
                                              i().AbilityVideoContainer,
                                            children: (0, e.jsxs)("video", {
                                              className: i().AbilityVideo,
                                              autoPlay: !0,
                                              preload: "auto",
                                              muted: !0,
                                              loop: !0,
                                              playsInline: !0,
                                              poster: `${r.r.VIDEO_URL}/${l.posterDir}`,
                                              children: [
                                                l.videoSrcWebm &&
                                                  (0, e.jsx)("source", {
                                                    type: "video/webm",
                                                    src: `${r.r.VIDEO_URL}/${l.videoSrcWebm}`,
                                                  }),
                                                l.videoSrcMp4 &&
                                                  (0, e.jsx)("source", {
                                                    type: "video/mp4",
                                                    src: `${r.r.VIDEO_URL}/${l.videoSrcMp4}`,
                                                  }),
                                              ],
                                            }),
                                          }),
                                          (0, e.jsxs)("div", {
                                            className:
                                              i().SlideAbilityContainer,
                                            children: [
                                              (0, e.jsx)("img", {
                                                className: i().SlideAbilityIcon,
                                                src: `${r.r.IMG_URL}/${l.imgSrc}`,
                                              }),
                                              (0, e.jsxs)("div", {
                                                className: i().AbilityText,
                                                children: [
                                                  (0, e.jsx)("div", {
                                                    className: i().AbilityName,
                                                    children: (0, t.Wn)(
                                                      `${l.abilityName}`,
                                                    ),
                                                  }),
                                                  (0, e.jsx)("div", {
                                                    className: i().AbilityDesc,
                                                    children: (0, t.Wn)(
                                                      `${l.abilityDesc}`,
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    `HeroAbilitySlide-${p.length + m}`,
                                  ),
                                ),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: i().CarouselDotsSection,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: i().CarouselDotsLeft,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: i().CarouselDotsHeading,
                                      children: (0, t.Wn)(
                                        "#ringmaster_abilities_heading",
                                      ),
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, o.A)(
                                        i().CarouselDotsMobile,
                                      ),
                                      children: p.map((l, m) =>
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: m,
                                            className: i().AbilitySelector,
                                            style: {
                                              backgroundImage: `url( ${r.r.IMG_URL}/${l.imgSrc} )`,
                                              backgroundSize: "cover",
                                            },
                                            children: (0, e.jsx)("div", {}),
                                          },
                                          `HeroAbilityDot-${m}`,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().CarouselDotsRight,
                                  children: [
                                    (0, e.jsxs)("div", {
                                      className: i().CarouselDotsHeading,
                                      children: [
                                        (0, e.jsx)("img", {
                                          className: i().InnateIcon,
                                          src: `${r.r.IMG_URL}icons/innate_icon.png`,
                                        }),
                                        " ",
                                        (0, t.Wn)(
                                          "#ringmaster_souvenirs_heading",
                                        ),
                                      ],
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, o.A)(
                                        i().CarouselDotsMobile,
                                      ),
                                      children: y.map((l, m) =>
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: p.length + m,
                                            className: i().AbilitySelector,
                                            style: {
                                              backgroundImage: `url( ${r.r.IMG_URL}/${l.imgSrc} )`,
                                              backgroundSize: "cover",
                                            },
                                            children: (0, e.jsx)("div", {}),
                                          },
                                          `HeroAbilityDot-${p.length + m}`,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: i().RingmasterDescription2Container,
                        children: [
                          (0, e.jsx)("div", {
                            className: i().HeroHype,
                            children: (0, t.Wn)("#ringmaster_comic"),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("img", {
                              src: `${r.r.IMG_URL}/international2024/ringmaster/flourish_top.png`,
                              className: i().ComicFlourishTop,
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: i().Comic,
                            children: (0, e.jsxs)("div", {
                              className: i().Inside,
                              children: [
                                (0, e.jsx)("img", {
                                  src: `${r.r.IMG_URL}/international2024/ringmaster/thumb_ringmaster_thepuppet.jpg`,
                                  className: i().Thumbnail,
                                }),
                                (0, e.jsxs)("div", {
                                  className: i().Description,
                                  children: [
                                    (0, e.jsx)("h2", {
                                      className: (0, o.A)(
                                        i().DisplayText,
                                        i().Large,
                                        i().AllUppercase,
                                      ),
                                      children: (0, t.Wn)(
                                        "#ringmaster_comic_title",
                                      ),
                                    }),
                                    (0, e.jsx)("p", {
                                      className: (0, o.A)(
                                        i().ComicBodyText,
                                        i().Large,
                                        i().LightGreyText,
                                      ),
                                      children: (0, t.Wn)(
                                        "#ringmaster_comic_desc",
                                      ),
                                    }),
                                    (0, e.jsx)(j.N_, {
                                      to: n.J.ringmaster_comic(),
                                      target: "_blank",
                                      className: (0, o.A)(
                                        i().ReadComicButton,
                                        i().ButtonText,
                                        i().Large,
                                      ),
                                      children: (0, t.Wn)(
                                        "#ringmaster_comic_button",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)("img", {
                              src: `${r.r.IMG_URL}/international2024/ringmaster/flourish_bottom.png`,
                              className: i().ComicFlourishBottom,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: i().ButtonsSection,
                            children: [
                              (0, e.jsx)(j.N_, {
                                to: n.J.hero("ringmaster"),
                                children: (0, e.jsxs)("div", {
                                  className: i().StandardButton,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: i().ButtonText,
                                      children: (0, t.Wn)(
                                        "#ringmaster_hero_detail_button",
                                      ),
                                    }),
                                    (0, e.jsx)(E.U, {}),
                                  ],
                                }),
                              }),
                              (0, e.jsxs)("div", {
                                className: i().StandardButton,
                                onClick: () => this.setPlayingVideo(!0),
                                children: [
                                  (0, e.jsx)("div", {
                                    className: i().ButtonText,
                                    children: (0, t.Wn)(
                                      "#ringmaster_play_trailer_button",
                                    ),
                                  }),
                                  (0, e.jsx)(E.U, {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        id: "LetsGetStarted",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                        ),
                        children: (0, e.jsx)("div", {
                          className: (0, o.A)(i().FlourishContainerEffigies),
                          children: (0, e.jsx)(b, {
                            description: "#ringmaster_guide",
                            bIsLetsGetStarted: !0,
                            image:
                              "international2024/compendium/ringmaster_pullquote_letsgetstarted.png",
                          }),
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider),
                      }),
                      (0, e.jsxs)("div", {
                        id: "Effigies",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                          i().EffigiesTopper,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#international2024_effigies_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: i().Subtitle,
                            children: (0, t.Wn)(
                              "#international2024_effigies_subtitle",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(i().SubDivider),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(i().FlourishContainerEffigies),
                            children: (0, e.jsx)(b, {
                              description: "#international2024_effigies_intro",
                              image:
                                "international2024/compendium/ringmaster_pullquote_effigy.png",
                              bSwapImageSide: !0,
                              bCenterText: !1,
                            }),
                          }),
                          (0, e.jsx)(F, {
                            description: "#international2024_effigies_desc",
                            image:
                              "international2024/effigy/effigy_splash_art3.png",
                            bSwapImageSide: !0,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider, i().Compendium),
                      }),
                      (0, e.jsxs)("div", {
                        id: "Compendium",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                          i().CompendiumIntro,
                        ),
                        children: [
                          (0, e.jsx)("img", {
                            className: i().CompendiumLogo,
                            src: `${r.r.IMG_URL}international2024/compendium/5hero_lockup.png`,
                          }),
                          (0, e.jsx)("img", {
                            className: i().CompendiumStars,
                            src: `${r.r.IMG_URL}international2024/compendium/${s}.png`,
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(
                              i().FlourishContainerPurchaseTop,
                            ),
                            children: (0, e.jsx)(b, {
                              description: "#international2024_purchase_intro",
                              image:
                                "international2024/compendium/ringmaster_pullquote_compendium.png",
                              bSwapImageSide: !1,
                            }),
                          }),
                          (0, e.jsx)(G, {}),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider, i().Compendium),
                      }),
                      (0, e.jsxs)("div", {
                        id: "Activities",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                          i().BokehTopper,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#international2024_activities",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: i().Subtitle,
                            children: (0, t.Wn)(
                              "#international2024_activities_subtitle",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(i().SubDivider),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(
                              i().FlourishContainerActivities,
                            ),
                            children: (0, e.jsx)(b, {
                              description:
                                "#international2024_activities_intro",
                              image:
                                "international2024/compendium/ringmaster_pullquote_compendiumactivities.png",
                              bSwapImageSide: !0,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, o.A)(
                              i().FeatureRow,
                              i().TwoColumn,
                              i().CompendiumActivities,
                            ),
                            children: [
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_activities_play_title",
                                description:
                                  "#international2024_activities_play_desc",
                                image:
                                  "international2024/compendium/ti2024_rewards_points.png",
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_activities_fantasy_title",
                                description:
                                  "#international2024_activities_fantasy_desc",
                                image:
                                  "international2024/compendium/ti2024_fantasy_reroll_stats.png",
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_activities_oracles_title",
                                description:
                                  "#international2024_activities_oracles_desc",
                                image:
                                  "international2024/compendium/ti2024_oracles_challenge_predict_group_stage.png",
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_activities_bingo_title",
                                description:
                                  "#international2024_activities_bingo_desc",
                                image:
                                  "international2024/compendium/ti2024_bingo.png",
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(
                              i().FlourishContainerActivitiesBottom,
                            ),
                            children: (0, e.jsx)(b, {
                              description:
                                "#international2024_activities_outro",
                              image:
                                "international2024/compendium/ringmaster_pullquote_supportthecommunity.png",
                              bSwapImageSide: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider, i().Compendium),
                      }),
                      (0, e.jsxs)("div", {
                        id: "Rewards",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                          i().BokehTopper,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#international2024_rewards_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: i().Subtitle,
                            children: (0, t.Wn)(
                              "#international2024_rewards_subtitle",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(i().SubDivider),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(i().FlourishContainerRewards),
                            children: (0, e.jsx)(b, {
                              description: "#international2024_rewards_intro",
                              image:
                                "international2024/compendium/ringmaster_pullquote_compendiumrewards.png",
                              bSwapImageSide: !1,
                            }),
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)(F, {
                            title:
                              "#international2024_rewards_physical_aegis_title",
                            description:
                              "#international2024_rewards_physical_aegis_desc",
                            image:
                              "international2024/compendium/rewards_aegis2024.png",
                            imageStyle: i().Image75Percent,
                            bSwapImageSide: !0,
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, o.A)(
                              i().FeatureRow,
                              i().TwoColumn,
                              i().CompendiumRewardsLarge,
                            ),
                            children: [
                              (0, e.jsx)(v, {
                                title: "#international2024_rewards_hud_title",
                                description:
                                  "#international2024_rewards_hud_desc",
                                image:
                                  "international2024/compendium/ti2024_rewards_hud.png",
                                bNoGapBetweenPicAndText: !0,
                                bNoGapInTextCapsule: !0,
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_versus_title",
                                description:
                                  "#international2024_rewards_versus_desc",
                                image:
                                  "international2024/compendium/ti2024_rewards_versus_screen.png",
                                bNoGapBetweenPicAndText: !0,
                                bNoGapInTextCapsule: !0,
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, o.A)(
                              i().FeatureRow,
                              i().ThreeColumn,
                              i().CompendiumRewardsSmall,
                            ),
                            children: [
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_stickers_title",
                                image:
                                  "international2024/compendium/ti2024_team_player_stickers.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_chat_wheels_title",
                                image:
                                  "international2024/compendium/ti2024_rewards_permenent_chatwheels.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_effigy_title",
                                image:
                                  "international2024/compendium/ti2024_team_effigy_block.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_materials_title",
                                image:
                                  "international2024/compendium/ti2024_rewards_fantasy_token.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_teleport_fx_title",
                                image:
                                  "international2024/compendium/ti2024_rewards_teleport.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_rewards_loading_screens_title",
                                image:
                                  "international2024/compendium/ti2024_rewards_loading_screens.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider, i().Compendium),
                      }),
                      (0, e.jsxs)("div", {
                        id: "SupportersClubs",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                          i().BokehTopper,
                          i().SupportTheCommunity,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#international2024_supporters_clubs_title",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: i().Subtitle,
                            children: (0, t.Wn)(
                              "#international2024_supporters_clubs_subtitle",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(i().SubDivider),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, o.A)(
                              i().FlourishContainerSupporters,
                            ),
                            children: (0, e.jsx)(b, {
                              description:
                                "#international2024_supporters_clubs_intro",
                              image:
                                "international2024/compendium/ringmaster_pullquote_compendiumrewards_bottom.png",
                              bSwapImageSide: !0,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, o.A)(
                              i().FeatureRow,
                              i().TwoColumn,
                              i().CompendiumSupporterClubs,
                            ),
                            children: [
                              (0, e.jsx)(v, {
                                title:
                                  "#international2024_supporters_clubs_tiers_title",
                                description:
                                  "#international2024_supporters_clubs_tiers_desc",
                                image:
                                  "international2024/compendium/ti2024_supporters_club.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                              (0, e.jsx)(v, {
                                title: "#international2024_talent_tiers_title",
                                description:
                                  "#international2024_talent_tiers_desc",
                                image:
                                  "international2024/compendium/ti2024_talent_stickers.png",
                                bNoGapBetweenPicAndText: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider, i().Compendium),
                      }),
                      (0, e.jsx)("div", {
                        id: "Footer",
                        className: (0, o.A)(
                          i().WebsiteSection,
                          i().CompendiumDark,
                          i().FooterSection,
                        ),
                        children: (0, e.jsx)(G, { bShowLearnMore: !0 }),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, o.A)(i().SectionDivider, i().Compendium),
                      }),
                    ],
                  }),
                  (0, e.jsx)(K, {}),
                  (0, e.jsx)(a.K, {}),
                ],
              })
            );
          }
        };
        w = V([c.PA], w);
      },
      11417: (C) => {
        C.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      32484: (C) => {
        C.exports = {
          Tooltip: "_3SWNcmwV0oP-ROKDVg1iXe",
          CarouselFade: "_492j9xDU1ExfjVLCzFhpY",
          StandardButton: "_3MfYYTBQIPtnzB-znQhbti",
          ButtonText: "_3vI_elRv1cIrOu2_N5VQQf",
          Icon: "o-07vXaikfMXAqA-RNcK3",
          Play: "_2lUptAc5bTBML114g6cL9I",
          SteamLogo: "_2NMxAQfq2uZwmoT3JMyOU5",
          ToolTip: "_1qbLWciZLqOyJibOuft1PJ",
          PlayerReportTooltip: "_3XOHkln8JxO7R3AvDe075q",
          BuyBattlePassCapsule: "dhurOK2NNcUIvBf3mkJg9",
          BuyCompendiumCapsule: "aFLC0zJWG4rx8hQ1A1sne",
          BuyCompendiumCapsule2024: "_3lBIug3KJ9NBxaQbOIfVrP",
          BuyCompendiumCapsule2023: "_1ZrehM_Da84hVA0fVsF-Ox",
          CapsuleTitle: "_1WgVxOffsEmu9AnEgh2Hx8",
          CapsuleLevelBundle: "_3KVDYyP9tD2DiKZytyEJZi",
          CapsuleDiscount: "v8xLJfzAUd1wUn2T0b55I",
          CapsulePurchaseButton: "_3SnG2_lnAO-Vsh1ifKtmgB",
          CompendiumLevels: "_1j-SGTrqobUmcsMR2SyxlD",
          BoosterLevels: "_3MS1BbIPRZzzrAWojHwo-g",
          EarnTheFollowing: "NTGBF2gHEmBRi3nxrcOHa",
          OtherRewards: "_3ng7YVyin9eviFhG7nKqKf",
          SmoothLine: "_5ddUuvHuifvwOsveGS3oy",
          FlourishContainer: "_1Z-Qqb_FGDk8tRMdNzYnqr",
          TextStyleOverline: "ZZPNhSonYWEiGiZGb8pa",
          TextStyleButton: "_29RUHlFmf7bp8MDmii0cwy",
          TextStyleFootnote: "YY9MWNYBw5TGBzz6dnkwu",
          BoostersFootnoteContainer: "_2N4yUqQVX0n5LIdiQmcNh",
          BoostersFootnote: "_3sKCu_Th-JNQ9l8WALWag5",
          TextColorGreenGlow: "_3azYFNjOXo-0ulw3D2CM3B",
        };
      },
      93125: (C) => {
        C.exports = {
          Tooltip: "_2uDWHJk8zh-QAyjfhUu1SA",
          CarouselFade: "_66uqaP_8I6IKwO7OB2L79",
          StandardButton: "qfXugIJxQaNRf7LJ3Glia",
          ButtonText: "_2mNBGPJ-EYi8rZNFdQX7mP",
          Icon: "exVXgYqxOMBlfDGxEZK9I",
          Play: "_1mIHDeRCWT35S6JiD5FUkk",
          SteamLogo: "_23RAoD8qJ-RMoEAvXdMNom",
          ToolTip: "_154k-dHfWur6426yGw8hbK",
          PlayerReportTooltip: "_30WiCwMqxy7FA4RV6U1ndd",
          PageContainer: "_24IJZguk0n6lku8jG_cRAU",
          Hidden: "_16m1qCpbCp4VURWSkM8cQp",
          TrailerContainer: "_2_nwAHd2aIB3zb-Gmy_oqw",
          TrailerVideo: "_1p8lVNNJmBaWljw_iEJPWJ",
          CloseButton: "_2k4B4tg09UWbM4-OO4VcKy",
          CloseButtonImage: "huZvf4fPWpCgMzDmipd6j",
          DisplayText: "_1WIoZjv7e9VOdwP4tEQ3f5",
          ExtraLarge: "_3fikYn-Dx2OkaPeGJY4wrF",
          Large: "lfvX0R4edn9dbRBOZhfAx",
          Medium: "_1ylzgkBN_pl9bsjXrpixUn",
          Small: "PrxDVGf_iF0hKOlLJlykZ",
          AllUppercase: "SMsOZ4A5WY_MhRAVozAWF",
          ComicBodyText: "_2SM3gHyJ4eduyHi3im6lTr",
          LightGreyText: "_2-Od7CeimXp7N5X1H9OYkR",
          LabelText: "_3-9JDsHsl48VSnRXaszn_U",
          International2024Page: "_2uVPpYoiAbueFrbbSvF_FY",
          HeaderSection: "_1rGNDv-SdcPVdLCe-DEnMo",
          Title: "_1oV2qO-bzTvli6s_4XmlQe",
          Subtitle: "_2CFS6966pjSkfnZxjxfBa4",
          Spacer: "BUJQRZGIRnloZaeVOQwW0",
          BodyText: "_1ZP2aEnlg34jyDQbRoBjy7",
          RingmasterHeaderSection: "_2i-nhQmWX3oJcymmVe3BWJ",
          BackgroundVideoContainer: "IzN6aRyL-23751_2lGM7J",
          SectionDivider: "N8SohHvUaGd73RoctqSTe",
          Compendium: "_2JM3UhPgLTWx7t59T26_QB",
          Flipped: "_3QhySh3cFduOkEEfb6e2Lv",
          SubDivider: "_1vSKkTqaS29JdNkoV4UVG8",
          FlourishContainerTop: "PlOyAseAhj_7sJ3QrUiwU",
          FlourishContainerPurchaseTop: "ueZpB-kOi6LFEazA7nr4_",
          ContributionContainer: "QGK6RURytuebeNzwmAX3U",
          ContributionText: "_3_ZnopX3jR9CPmq44BRbTI",
          FlourishContainerActivities: "_3IE6ZJCA2zCnDSY8Vle5Z5",
          FlourishContainerRewards: "xPZ-P62zvZalFj78sPaZ2",
          Flourish: "_3iKohYNtqizDwyL5tj_OIi",
          HeroTopHype: "_3QchxWKMTCMsFenjiL-wTu",
          EffigyImg: "_25fcnkMSlrMyiw8iZvyEk9",
          TitleContainer: "_1t1VCgEcw22_0Lv-nJH8hr",
          TitleIntro: "_1__I3h-iHHCWSZZgDQM1TN",
          HeroName: "_3HBgV6tXM5WGbk-i84cGka",
          HeroLogo: "_24oomahoCVu-5n6szDP5gx",
          RingmasterDescriptionContainer: "vP6CoMBLIzjErWnYCAmjE",
          RingmasterDescription2Container: "_23puKJs4K3j5_Jd_08LUm8",
          Roles: "QOZzeyWr29ojPt2JBLOqn",
          HeroRole: "_1OLI0zdw047iR8IHIqINfF",
          HeroHype: "_2ZaHiL5feusLeKEcuLQgst",
          ButtonsSection: "_17xSzoK0JKfxYxPlMjAhP3",
          ComicFlourishTop: "_2tQz6lesbP2rlC6RHoOjPk",
          ComicFlourishBottom: "_2o1kcPC7ASKfzhyVH8URnV",
          Comic: "_1M4Bp9WPAaakzxL2g2sBe0",
          Inside: "_3KdoEbNm-QvwCeIc5AUuRB",
          Thumbnail: "_211WNZohR0Z8KLDIsSznMe",
          Description: "_-5TJKKyKoMAnnme1OZbXX",
          ReadButton: "wEt62Htl9bdlBnrqBR85i",
          ReadComicButton: "_3pAM-X6liwZETPE_YBDhO",
          AbilitySection: "_24zmH4m5efZJqn8EMDUpC4",
          AbilitySectionMobileView: "_1s_18nuo23CjGq7BNydYaB",
          AbilityHeader: "_2bsp9Rc6UJvdYk9Sajm7kG",
          AbilitySlider: "YoTsOCtkNXlRFuBccyFP",
          SlideContainer: "_2xzn9HJ7e4MNsUZ9umbCMj",
          CarouselDotsSection: "_2PoBipvDfvxNzN7Nel-3Lz",
          CarouselDotsLeft: "_1elh_0DkJh6LQxzIb6jndd",
          CarouselDotsHeading: "vbo9lubl7kd5WgrXEPvnk",
          AbilityTooltip: "_1IgsZnC4vakSzY37yAn85A",
          CarouselDots: "_1jlZnDcFDbrstNo23OzK5y",
          AbilitySelector: "jQdLh1CWF-UTiLp6a98OQ",
          InnateIcon: "_29OmPt_KaZERnj7cPwVLY",
          TooltipBody: "_3fINZowDsQeSIrsiiW4PFH",
          TooltipTitle: "wtGhmTm-2w2ViZmPTKwNk",
          TooltipDescription: "kGunJfID6hLFiNTBQZRmK",
          TooltipPointer: "_2ceUrTMfrydnZu9zd0IFto",
          CarouselArrow: "xh_l7CQ6j8gc0HMoW91H3",
          Right: "_32_6gcaRBUSlfWcXIk_oKi",
          ArrowImage: "kAq6jiEKwT0tVzEI3l5wr",
          SlideAbilityContainer: "_3W6euKzDCza7UkV5nZHW1P",
          SlideAbilityIcon: "_28nGKyw6G2KBzR_plrxSkR",
          AbilityName: "_1g3Zh5SqcJv8nof3HmDcVf",
          AbilityDesc: "_2qY8_auM5IAtHo9zExmhfw",
          AbilitySlideContainerMobile: "_3lElTYhi5UAfFCMxbDUoQz",
          CarouselDotsMobile: "_2WoAY-maz2i9hg-0l4IygT",
          PurchaseSection: "MydQew0Rq2zMkuZYQqwhD",
          BuyCompendiumButtons: "_2PRYqKFquqcVusi4adOnVc",
          PrizePoolContribution: "_2OEtFRWj9v5cfUOynP9vas",
          TournamentLearnMore: "_3i35yMDSDpb-2y4m-ckGyf",
          WebsiteSection: "_1CKe1utDgXVANo0DuxH9Cm",
          CompendiumDark: "_2870VCSpz8FlNrbKN45yQf",
          CompendiumIntro: "_3np_-Awad-0t-Dm9BEoit0",
          CompendiumLogo: "_3Gev-PiqnTZ7ZHy_U2oY6D",
          CompendiumLogoText: "wCz3xC5MeVdj7L331Ljlw",
          CompendiumStars: "_2LoELTKo0Gu4uS-OXuhCVN",
          EffigiesTopper: "_3RMWnT0LT1aJT716gUdbI0",
          BokehTopper: "GB8Qnl6hAFZxl4a0_jGrs",
          FooterSection: "_3IRK5Yc0CFibWj5yKEVaXe",
          FeatureCapsule: "_3D_BA9du_A2TR4bqXrZdYL",
          Text: "XH02xlGTAcJ_pMlBRCKG3",
          Headline: "_2WwOKzUYzxPYro30F8fbn6",
          SmallRewardsCapsule: "-DMfMu1JD-NR-HlDMw5pn",
          RingmasterCapsuleText: "_3Z0sMYzJMITdXxeVQm92qH",
          RewardsText: "_3lSgjt96rlDm9HsKspoE6x",
          Dota: "_1oQrt5IaioFRQdRH79c05Q",
          HeaderPaddingBottom: "_2VfxpLZa-AKY0jTPlD5uae",
          Introduction: "_2cTB5IFACpJ213XxKz5Ep0",
          ExplainerMovie: "_1kUcLMU7D-imNsMUtlyvxc",
          ExplainerVideo: "eQy7JZfQGXhOQ3m3N4mA2",
          SupportTheCommunity: "_1pL2fuPDdeGadn9OyWuVa3",
          FlexColumn: "_1zbL6VlSn4Ng0590HkVfO3",
          LargerMaxWidth: "_38l82aAcD34jqFywHKH4mP",
          Image: "_3gd7xSl46bgSm_sWShWwuY",
          RingmasterFeatureImage: "yAXiGh8J-I59aHw8J9nZ9",
          RingmasterCapsuleDescription: "_2YIhDtfU_5w2U-3qG1xPbD",
          TranslateImageUp: "_1clGgl1c0qxer6mw4xMTXW",
          Image85Percent: "_3d78hoeGZ_38UWIM-8Ow58",
          Image75Percent: "_1J6b1Bisa4xooCYyQD314-",
          Image70Percent: "_3WlfeR8NbpIVzsfeHq3fXB",
          Image65Percent: "gUEiFGaLcsoy8oUY2gtXV",
          Image60Percent: "eciqC2JSzXi-el_o9jI_j",
          Image55Percent: "_10FlN3BktIwwaEDKg0RZ9_",
          Image50Percent: "_2lGkpQ5O1vIgAe1WCKnZfC",
          RingmasterFeatureCapsule: "vB5_5DoSvQzyaZfQIWvK",
          RingmasterText: "_1ypS8xu7W6UfPKfFS-AFaE",
          FeatureCapsuleSwapOrder: "_2MGAdyzUuhl08KDZzwYvKK",
          SmallRewardsTextContainer: "_345uBuR6VPmrKhQTfOmWjL",
          SmallRewardsImageContainer: "_1tSLUqsy3m50gFnqXQigtE",
          FeatureImage: "_1RqUiq4Ub08HPqV2mgcCJi",
          BottomBorder: "_2NnoFsa0xjUL6odcTrGn5u",
          FeatureText: "_1klROu0A6Ni5jR1CUwh-7R",
          FeatureRow: "_3P6kC6stmf8FWekoLViXe5",
          FourColumn: "_1DqPQ1C_kduGQBqlztS4Im",
          ThreeColumn: "_2UjODeQus-EFzktgrucqKZ",
          TwoColumn: "rD9D5jvMGlaLeJZje1YiU",
          NoGap: "cs-I7roQhpPzlE6MvrTnR",
          HeaderContainer: "_2_4hDMInbKE6RFFdj__OPx",
          SmallFeatureCapsule: "TcRNqLOXjWyAOul3n1Xn-",
          ImageContainer: "_3tMaJOY8GlYj_lhG-HjLDC",
          CompendiumActivities: "_1hcNLta1FahXuhegmst8di",
          CompendiumRewardsLarge: "_1Lj6B4lHt-El9KwAHp76Vr",
          CompendiumRewardsSmall: "_2agtcRP-6MIl9z94R7tv7g",
          FeatureRowDiffPadding: "L6zsbzj5ZSuk5uD8KbJ6D",
          LevelsBoostersContainer: "_1THHZMiKtU8KgUbFkjOyrV",
          ComingSoonCapsule: "d68L70lxNKQRbDG6efaP_",
          Contents: "_1tmqYBYcJ6_r9doqaHhEOX",
          Header: "_3TJ4gRRBnYHIXmBOozWYB5",
          ShowcaseCarousel: "_1yuc8_QwTBrPqzCzn8qob2",
          Left: "O9CeUV9yiqPpcGkZj4ocs",
          Dot: "_1fOFGiHziepcAlsvA5EAuZ",
          ShowcaseVideo: "_3AHpVqDhMr1fBnoU9NuElW",
          rotate: "_3mr5RSSXg5Y53OICoHzzeO",
        };
      },
    },
  ]);
})();
