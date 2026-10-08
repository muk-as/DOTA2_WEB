// 35764.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [35764],
    {
      10806: (v, C, o) => {
        "use strict";
        o.d(C, { $x: () => T, Jh: () => t, c: () => b });
        var e = o(69500),
          u = o(32484),
          i = o.n(u),
          l = o(15001),
          s = o(8305),
          _ = o(2095),
          r = o(45488);
        const T = ({
            colorTopEdge: a,
            colorTop: x,
            colorMiddle: y,
            colorBottom: p,
            level: N,
            discountPct: S,
            itemid: w,
            capsuleImageLocation: W = "labyrinth/bp_logo_",
            capsuleImageOnErrorLocation: A = "labyrinth/bp_logo_en.png",
          }) =>
            (0, e.jsxs)("div", {
              className: i().BuyBattlePassCapsule,
              style: {
                borderTop: `2px solid ${a}`,
                backgroundImage: `linear-gradient( ${x}, ${p} )`,
              },
              children: [
                (0, e.jsx)("img", {
                  className: i().CapsuleTitle,
                  onError: (I) => (I.target.src = `${_.r.IMG_URL}${A}`),
                  src: `${_.r.IMG_URL}${W}${_.r.LANGUAGE}.png`,
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().TextStyleOverline),
                  children: (0, s.Wn)("#battlepass_purchase_level", N),
                }),
                (0, e.jsx)("a", {
                  href: `${_.r.BASE_URL}store/itemdetails/${w}`,
                  className: (0, l.A)(
                    i().TextStyleButton,
                    i().TextColorWhite,
                    i().CapsulePurchaseButton,
                  ),
                  style: {
                    borderTop: `1px solid ${a}`,
                    backgroundImage: `linear-gradient( ${a}, ${a} )`,
                  },
                  children: (0, s.Wn)(
                    "#battlepass_purchase_label",
                    r.o.GetBPPrice(w),
                  ),
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(
                    i().TextStyleFootnote,
                    i().TextColorGreenGlow,
                    i().CapsuleDiscount,
                  ),
                  children:
                    S && (0, s.Wn)("#battlepass_purchase_discount", S, N),
                }),
              ],
            }),
          R = (a) =>
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
                    onError: (x) =>
                      (x.target.src = `${ConfigDota.IMG_URL}${a.capsuleImageOnErrorLocation}`),
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
          b = (a) =>
            (0, e.jsxs)("div", {
              className: (0, l.A)(
                i().BuyCompendiumCapsule,
                i().BuyCompendiumCapsule2023,
              ),
              style: {
                borderTop: `2px solid ${a.colorTopEdge}`,
                backgroundImage: `linear-gradient( ${a.colorTop}, ${a.colorBottom} )`,
              },
              children: [
                a.title &&
                  (0, e.jsx)("div", {
                    className: i().CapsuleTitle,
                    style: {
                      backgroundImage: "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: (0, s.Wn)(a.title),
                  }),
                a.capsuleImageLocation &&
                  (0, e.jsx)("img", {
                    className: i().CapsuleTitle,
                    onError: (x) =>
                      (x.target.src = `${_.r.IMG_URL}${a.capsuleImageOnErrorLocation}`),
                    src: `${_.r.IMG_URL}${a.capsuleImageLocation}${_.r.LANGUAGE}.png`,
                  }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().CompendiumLevels),
                  children: (0, s.Wn)("#compendium_purchase_levels", a.level),
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().BoosterLevels),
                  children: (0, s.Wn)(
                    "#compendium_purchase_booster_levels",
                    a.booster_level,
                  ),
                }),
                (0, e.jsx)("div", { className: i().SmoothLine }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().EarnTheFollowing),
                  children: (0, s.Wn)(
                    "#compendium_purchase_earn_the_following",
                  ),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)("#compendium_purchase_all_access"),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#compendium_purchase_aegis_emoticon",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#compendium_purchase_rtti_culling_blades",
                        a.cullingBlades,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#compendium_purchase_rtti_reroll_tokens",
                        a.rerollTokens,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#compendium_purchase_fantasy_tokens",
                        a.fantasyTokens,
                      ),
                    }),
                    a.voicelines == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_one_random_voiceline",
                        ),
                      }),
                    a.voicelines > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_voicelines",
                          a.voicelines,
                        ),
                      }),
                    a.playerStickers == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_one_player_sticker",
                        ),
                      }),
                    a.playerStickers > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_player_stickers",
                          a.playerStickers,
                        ),
                      }),
                    a.teamStickers &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_team_stickers",
                          a.teamStickers,
                        ),
                      }),
                    a.teamLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_team_loading_screens",
                          a.teamLoadingScreens,
                        ),
                      }),
                    a.tiLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#compendium_purchase_ti_loading_screens",
                          a.tiLoadingScreens,
                        ),
                      }),
                    a.tpFX &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)("#compendium_purchase_tp_fx"),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: i().BoostersFootnoteContainer,
                  children: [
                    !a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, l.A)(i().BoostersFootnote),
                        children: (0, s.Wn)(
                          "#compendium_purchase_boosters_footnote",
                        ),
                      }),
                    a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, l.A)(i().BoostersFootnote),
                        children: (0, s.Wn)(
                          "#compendium_purchase_upgraded_boosters_footnote",
                        ),
                      }),
                  ],
                }),
              ],
            }),
          t = (a) =>
            (0, e.jsxs)("div", {
              className: (0, l.A)(
                i().BuyCompendiumCapsule,
                i().BuyCompendiumCapsule2024,
              ),
              style: {
                backgroundImage: a.isUpgraded
                  ? `url( ${_.r.IMG_URL}/international2024/compendium/panel_upgraded_compendium.jpg )`
                  : `url( ${_.r.IMG_URL}/international2024/compendium/panel_standard_compendium.jpg )`,
              },
              children: [
                (0, e.jsx)("div", {
                  className: i().FlourishContainer,
                  children: (0, e.jsx)("img", {
                    src: a.isUpgraded
                      ? `${_.r.IMG_URL}international2024/dividers_and_flourishes/flourish_upgraded_compendium.png`
                      : `${_.r.IMG_URL}international2024/dividers_and_flourishes/flourish_standard_compendium.png`,
                  }),
                }),
                a.title &&
                  (0, e.jsx)("div", {
                    className: i().CapsuleTitle,
                    style: {
                      backgroundImage: a.isUpgraded
                        ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                        : "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: (0, s.Wn)(a.title),
                  }),
                a.capsuleImageLocation &&
                  (0, e.jsx)("img", {
                    className: i().CapsuleTitle,
                    onError: (x) =>
                      (x.target.src = `${_.r.IMG_URL}${a.capsuleImageOnErrorLocation}`),
                    src: `${_.r.IMG_URL}${a.capsuleImageLocation}${_.r.LANGUAGE}.png`,
                  }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().CompendiumLevels),
                  style: {
                    backgroundImage: a.isUpgraded
                      ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                      : "linear-gradient( to bottom, #FFF, #FFF",
                  },
                  children: (0, s.Wn)(
                    "#ti13_compendium_purchase_levels",
                    a.level,
                  ),
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().BoosterLevels),
                  style: {
                    backgroundImage: a.isUpgraded
                      ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                      : "linear-gradient( to bottom, #FFF, #FFF",
                  },
                  children: (0, s.Wn)(
                    "#ti13_compendium_purchase_booster_levels",
                    a.booster_level,
                  ),
                }),
                (0, e.jsx)("div", { className: i().SmoothLine }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().EarnTheFollowing),
                  children: (0, s.Wn)(
                    "#ti13_compendium_purchase_earn_the_following",
                  ),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: a.isUpgraded
                        ? (0, s.Wn)("#ti13_compendium_upgraded_subtitle")
                        : (0, s.Wn)("#ti13_compendium_standard_subtitle"),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#ti13_compendium_purchase_aegis_emoticon",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#ti13_compendium_purchase_bingo_tokens",
                        a.bingoTokens,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, l.A)(i().OtherRewards),
                      children: (0, s.Wn)(
                        "#ti13_compendium_purchase_fantasy_tokens",
                        a.fantasyTokens,
                      ),
                    }),
                    a.playerStickers == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_one_player_sticker",
                        ),
                      }),
                    a.playerStickers > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_player_stickers",
                          a.playerStickers,
                        ),
                      }),
                    a.teamStickers &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_team_stickers",
                          a.teamStickers,
                        ),
                      }),
                    a.teamLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_team_loading_screens",
                          a.teamLoadingScreens,
                        ),
                      }),
                    a.tiLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_ti_loading_screens",
                          a.tiLoadingScreens,
                        ),
                      }),
                    a.effigyBlocks &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_effigy_blocks",
                          a.effigyBlocks,
                        ),
                      }),
                    a.tpFX &&
                      (0, e.jsx)("li", {
                        className: (0, l.A)(i().OtherRewards),
                        children: (0, s.Wn)("#ti13_compendium_purchase_tp_fx"),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: i().BoostersFootnoteContainer,
                  children: [
                    !a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, l.A)(i().BoostersFootnote),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_boosters_footnote",
                        ),
                      }),
                    a.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, l.A)(i().BoostersFootnote),
                        children: (0, s.Wn)(
                          "#ti13_compendium_purchase_upgraded_boosters_footnote",
                        ),
                      }),
                  ],
                }),
              ],
            });
      },
      35764: (v, C, o) => {
        "use strict";
        o.r(C), o.d(C, { default: () => L });
        var e = o(69500),
          u = o(2095),
          i = o(8305),
          l = o(3878),
          s = o(7552),
          _ = o(73202),
          r = o(15001),
          T = o(63177),
          R = o(42616),
          b = o(73868),
          t = o.n(b),
          a = o(88351),
          x = o(21127),
          y = o(10806),
          p = o(32389),
          N = Object.defineProperty,
          S = Object.getOwnPropertyDescriptor,
          w = (n, d, h, j) => {
            for (
              var g = j > 1 ? void 0 : j ? S(d, h) : d, E = n.length - 1, f;
              E >= 0;
              E--
            )
              (f = n[E]) && (g = (j ? f(d, h, g) : f(g)) || g);
            return j && g && N(d, h, g), g;
          };
        const { detect: W } = o(51744),
          A = W(),
          I = "International2023Page",
          M = ({ children: n }) => {
            const { hash: d } = (0, a.zy)();
            return (
              (0, s.useEffect)(() => {
                d &&
                  setTimeout(() => {
                    const h = d.replace("#", "");
                    (0, x.A)(h, I);
                  }, 500);
              }, [d]),
              null
            );
          },
          B = (n) =>
            (0, e.jsxs)("div", {
              className: t().Text,
              children: [
                (0, e.jsxs)("div", {
                  className: t().HeaderContainer,
                  children: [
                    n.icon &&
                      (0, e.jsx)("div", {
                        className: t().Icon,
                        children: (0, e.jsx)("img", {
                          src: `${u.r.IMG_URL}/` + n.icon,
                        }),
                      }),
                    (0, e.jsx)("div", {
                      className: t().Headline,
                      children: (0, i.Wn)(n.title),
                    }),
                  ],
                }),
                n.description &&
                  (0, e.jsx)("div", {
                    className: (0, r.A)(
                      t().Description,
                      n.bCenterText ? t().CenterText : "",
                    ),
                    children: (0, i.Wn)(n.description),
                  }),
                n.contents &&
                  (0, e.jsx)("div", {
                    className: (0, r.A)(
                      t().Description,
                      n.bCenterText ? t().CenterText : "",
                    ),
                    children: n.contents,
                  }),
              ],
            }),
          U = (n) =>
            (0, e.jsxs)("div", {
              className: t().RewardsText,
              children: [
                (0, e.jsxs)("div", {
                  className: t().HeaderContainer,
                  children: [
                    n.icon &&
                      (0, e.jsx)("div", {
                        className: t().Icon,
                        children: (0, e.jsx)("img", {
                          src: `${u.r.IMG_URL}/` + n.icon,
                        }),
                      }),
                    (0, e.jsx)("div", {
                      className: t().Headline,
                      children: (0, i.Wn)(n.title),
                    }),
                  ],
                }),
                n.description &&
                  (0, e.jsx)("div", {
                    className: (0, r.A)(
                      t().Description,
                      n.bCenterText ? t().CenterText : "",
                    ),
                    children: (0, i.Wn)(n.description),
                  }),
                n.contents &&
                  (0, e.jsx)("div", {
                    className: (0, r.A)(
                      t().Description,
                      n.bCenterText ? t().CenterText : "",
                    ),
                    children: n.contents,
                  }),
              ],
            }),
          c = (n) =>
            (0, e.jsxs)("div", {
              className: (0, r.A)(
                t().FeatureCapsule,
                n.bSwapImageSide ? t().FeatureCapsuleSwapOrder : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)(B, {
                  title: n.title,
                  description: n.description,
                  contents: n.contents,
                }),
                n.image &&
                  (0, e.jsx)("img", {
                    className: (0, r.A)(
                      t().Image,
                      n.bTranslateImageUp ? t().TranslateImageUp : "",
                      n.imageStyle ? n.imageStyle : "",
                    ),
                    src: `${u.r.IMG_URL}/` + n.image,
                  }),
              ],
            }),
          G = (n) =>
            (0, e.jsx)("div", {
              className: (0, r.A)(
                t().FeatureCapsule,
                n.bSwapImageSide ? t().FeatureCapsuleSwapOrder : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: (0, e.jsx)(U, {
                title: n.title,
                description: n.description,
                contents: n.contents,
              }),
            }),
          m = (n) =>
            (0, e.jsxs)("div", {
              className: (0, r.A)(
                t().SmallFeatureCapsule,
                n.bUseFlexSpaceBetween ? t().SpaceBetween : "",
              ),
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)("img", {
                  className: (0, r.A)(
                    t().Image,
                    n.imageStyle ? n.imageStyle : "",
                  ),
                  src: `${u.r.IMG_URL}/` + n.image,
                }),
                (0, e.jsx)(B, {
                  title: n.title,
                  description: n.description,
                  contents: n.contents,
                  bCenterText: n.bCenterText,
                }),
              ],
            }),
          F = (n) =>
            (0, e.jsxs)("div", {
              className: (0, r.A)(
                t().SmallRewardsCapsule,
                n.bSwapImageSide ? t().FeatureCapsuleSwapOrder : "",
              ),
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)("div", {
                  className: t().SmallRewardsTextContainer,
                  children: (0, e.jsx)(B, {
                    title: n.title,
                    description: n.description,
                    contents: n.contents,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: t().SmallRewardsImageContainer,
                  children:
                    n.image &&
                    (0, e.jsx)("img", {
                      className: (0, r.A)(
                        t().Image,
                        n.bTranslateImageUp ? t().TranslateImageUp : "",
                        n.imageStyle ? n.imageStyle : "",
                      ),
                      src: `${u.r.IMG_URL}/` + n.image,
                    }),
                }),
              ],
            }),
          k = (n) =>
            (0, e.jsx)("div", {
              className: t().ComingSoonCapsule,
              children: (0, e.jsxs)("div", {
                className: t().Contents,
                children: [
                  (0, e.jsx)("div", {
                    className: t().Header,
                    children: (0, i.Wn)("#international2023_coming_soon"),
                  }),
                  (0, e.jsx)("div", {
                    className: t().Description,
                    children: (0, i.Wn)(n.description),
                  }),
                ],
              }),
            }),
          D = () =>
            (0, e.jsxs)("div", {
              className: t().PurchaseSection,
              children: [
                (0, e.jsxs)("div", {
                  className: t().BuyCompendiumButtons,
                  children: [
                    (0, e.jsx)(y.c, {
                      colorTopEdge: "#237EA5",
                      colorTop: "#00172C ",
                      colorMiddle: "#010E1A",
                      colorBottom: "#010E1A",
                      title: "#ti12_compendium_standard",
                      level: 6,
                      booster_level: 6,
                      itemid: 22507,
                      eventid: O,
                      cullingBlades: 4,
                      rerollTokens: 6,
                      fantasyTokens: 36,
                      voicelines: 1,
                      playerStickers: 1,
                    }),
                    (0, e.jsx)(y.c, {
                      colorTopEdge: "#BDB099",
                      colorTop: "#175F8A ",
                      colorMiddle: "#002948",
                      colorBottom: "#002948",
                      colorButtonOverride: "#237EA5",
                      title: "#ti12_compendium_upgraded",
                      level: 50,
                      booster_level: 28,
                      itemid: 24173,
                      eventid: O,
                      cullingBlades: 13,
                      rerollTokens: 15,
                      fantasyTokens: 78,
                      voicelines: 8,
                      playerStickers: 12,
                      teamStickers: 5,
                      teamLoadingScreens: 4,
                      tiLoadingScreens: 2,
                      tpFX: 1,
                      isUpgraded: !0,
                    }),
                  ],
                }),
                (0, e.jsx)("a", {
                  className: t().TournamentLearnMore,
                  href: `${u.r.BASE_URL}esports/ti12/watch`,
                  children: (0, i.Wn)(
                    "#international2023_tournament_learn_more",
                  ),
                }),
              ],
            }),
          V = (n) =>
            jsx("div", {
              className: styles.ExplainerMovie,
              children: jsxs("video", {
                className: styles.ExplainerVideo,
                autoPlay: !0,
                preload: "auto",
                muted: !0,
                loop: !0,
                playsInline: !0,
                poster: n.strPosterImageFullPath,
                "data-aos": "fade-in",
                "data-aos-duration": "1000",
                children: [
                  A.name != "edge" &&
                    A.name != "edge-chromium" &&
                    jsx("source", {
                      type: "video/webm",
                      src: n.strVideoWebMFullPath,
                    }),
                  jsx("source", {
                    type: "video/mp4",
                    src: n.strVideoMP4FullPath,
                  }),
                ],
              }),
            }),
          K = ({ nIndex: n, strVideo: d }) => {
            const h = (0, s.useContext)(p.Yc),
              j = (0, s.useRef)(void 0);
            return (
              (0, s.useEffect)(() => {
                function g() {
                  j.current && h.state.currentSlide == n && j.current.load();
                }
                return h.subscribe(g), () => h.unsubscribe(g);
              }, [h, n]),
              (0, e.jsx)("div", {
                className: t().VideoContainer,
                children: (0, e.jsx)("video", {
                  ref: j,
                  className: t().ShowcaseVideo,
                  autoPlay: !0,
                  preload: "auto",
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  children: (0, e.jsx)("source", {
                    type: "video/webm",
                    src: `${u.r.VIDEO_URL}international2023/${d}.webm`,
                  }),
                }),
              })
            );
          },
          P = [
            { strVideo: "showcase_ti" },
            { strVideo: "showcase_windranger" },
            { strVideo: "showcase_pro_team" },
            { strVideo: "showcase_stickers" },
            { strVideo: "showcase_sniper" },
            { strVideo: "showcase_cliff" },
          ],
          O = 45,
          $ = null;
        let L = class extends s.Component {
          constructor(n) {
            super(n), (this.state = {});
          }
          scrollToTarget(n) {
            n.current.scrollIntoView({ behavior: "smooth" });
          }
          render() {
            return (0, e.jsxs)("div", {
              id: I,
              className: t().International2023Page,
              children: [
                (0, e.jsx)(_.mg, {
                  children: (0, e.jsx)("title", {
                    children: (0, i.Wn)("#international2023_update_title"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: (0, r.A)(t().PageContainer),
                  children: [
                    (0, e.jsx)(T.A, { bOverlapping: !1 }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      className: t().HeaderSection,
                      children: [
                        (0, e.jsx)("div", {
                          className: t().Title,
                          children: (0, i.Wn)(
                            "#international2023_update_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_update_subtitle",
                          ),
                        }),
                        (0, e.jsx)("div", { className: t().Spacer }),
                        (0, e.jsx)("div", {
                          className: t().BodyText,
                          children: (0, i.Wn)("#international2023_update_body"),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(
                        t().SectionDivider,
                        t().Compendium,
                        t().Flipped,
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      id: "ProfileShowcase",
                      className: (0, r.A)(t().WebsiteSection, t().Dota),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_showcase_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_showcase_subtitle",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_showcase_intro",
                          ),
                        }),
                        (0, e.jsxs)("div", {
                          className: t().WebsiteSubSection,
                          children: [
                            (0, e.jsx)("h2", {
                              children: (0, i.Wn)(
                                "#international2023_showcase_carousel_title",
                              ),
                            }),
                            (0, e.jsxs)(p.gi, {
                              className: t().ShowcaseCarousel,
                              naturalSlideWidth: 2,
                              naturalSlideHeight: 1,
                              totalSlides: P.length,
                              isPlaying: !0,
                              infinite: !0,
                              children: [
                                (0, e.jsx)(p.Ap, {
                                  children: P.map((n, d) =>
                                    (0, e.jsx)(
                                      p.q7,
                                      {
                                        index: d,
                                        children: (0, e.jsx)(K, {
                                          nIndex: d,
                                          strVideo: n.strVideo,
                                        }),
                                      },
                                      `ShowcaseSlide-${d}`,
                                    ),
                                  ),
                                }),
                                (0, e.jsx)(p._X, {
                                  className: (0, r.A)(
                                    t().CarouselArrow,
                                    t().Left,
                                  ),
                                  children: (0, e.jsx)("img", {
                                    src: `${u.r.IMG_URL}international2023/icons/arrow_left.png`,
                                    className: t().ArrowImage,
                                  }),
                                }),
                                (0, e.jsx)(p.CC, {
                                  className: (0, r.A)(
                                    t().CarouselArrow,
                                    t().Right,
                                  ),
                                  children: (0, e.jsx)("img", {
                                    src: `${u.r.IMG_URL}international2023/icons/arrow_right.png`,
                                    className: t().ArrowImage,
                                  }),
                                }),
                                (0, e.jsx)("div", {
                                  className: t().CarouselDots,
                                  children: P.map((n, d) =>
                                    (0, e.jsx)(
                                      p.cL,
                                      {
                                        className: t().Dot,
                                        slide: d,
                                        children: (0, e.jsx)("div", {}),
                                      },
                                      `ShowcaseDot-${d}`,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_showcase_profile_title",
                          description:
                            "#international2023_showcase_profile_desc",
                          image:
                            "international2023/ti2023_profile_updated_profile.png",
                        }),
                        (0, e.jsx)(c, {
                          title:
                            "#international2023_showcase_mini_profile_title",
                          description:
                            "#international2023_showcase_mini_profile_desc",
                          image:
                            "international2023/ti2023_profile_mini_profile.png",
                          bTranslateImageUp: !0,
                          imageStyle: t().Image70Percent,
                        }),
                        (0, e.jsxs)("div", {
                          className: t().WebsiteSubSection,
                          children: [
                            (0, e.jsx)("h2", {
                              className: t().HeaderPaddingBottom,
                              children: (0, i.Wn)(
                                "#international2023_showcase_items_title",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: t().Introduction,
                              children: (0, i.Wn)(
                                "#international2023_showcase_items_desc",
                              ),
                            }),
                            (0, e.jsxs)("div", {
                              className: t().FeatureRow,
                              children: [
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_heroes_title",
                                  image:
                                    "international2023/ti2023_showcase_heroes.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_loading_screens_title",
                                  image:
                                    "international2023/ti2023_showcase_loading_screen.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_stickers_title",
                                  image:
                                    "international2023/ti2023_showcase_stickers.png",
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: t().FeatureRow,
                              children: [
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_trophies_title",
                                  image:
                                    "international2023/ti2023_showcase_trophies.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_chat_wheels_title",
                                  image:
                                    "international2023/ti2023_showcase_voicelines.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_sprays_title",
                                  image:
                                    "international2023/ti2023_showcase_sprays.png",
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: t().FeatureRow,
                              children: [
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_items_title",
                                  image:
                                    "international2023/ti2023_showcase_armory_items.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_emoticons_title",
                                  image:
                                    "international2023/ti2023_showcase_emoticons.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_stats_title",
                                  image:
                                    "international2023/ti2023_showcase_stats.png",
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: t().FeatureRow,
                              children: [
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_couriers_title",
                                  image:
                                    "international2023/ti2023_showcase_couriers.png",
                                }),
                                (0, e.jsx)(m, {
                                  title:
                                    "#international2023_showcase_item_wards_title",
                                  image:
                                    "international2023/ti2023_showcase_wards.png",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "Compendium",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                        t().CompendiumIntro,
                      ),
                      children: [
                        (0, e.jsx)("img", {
                          className: t().CompendiumLogo,
                          src: `${u.r.IMG_URL}international2023/ti_logo_color.png`,
                        }),
                        (0, e.jsx)("div", {
                          className: t().CompendiumLogoText,
                          children: (0, i.Wn)("#international2023_compendium"),
                        }),
                        (0, e.jsx)("img", {
                          className: t().CompendiumStars,
                          src: `${u.r.IMG_URL}international2023/stars.png`,
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_compendium_intro",
                          ),
                        }),
                        (0, e.jsx)(D, {}),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "Quests",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_quests_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_compendium_activity",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_quests_intro",
                          ),
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_quests_match_title",
                          description: "#international2023_quests_match_desc",
                          image:
                            "international2023/ti2023_road_to_ti_challenge_match.png",
                          imageStyle: t().Image85Percent,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_quests_pro_title",
                          description: "#international2023_quests_pro_desc",
                          image:
                            "international2023/ti2023_road_to_ti_challenge_player.png",
                          imageStyle: t().Image85Percent,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "Fantasy",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_fantasy_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_compendium_activity",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_fantasy_intro",
                          ),
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_fantasy_players_title",
                          description:
                            "#international2023_fantasy_players_desc",
                          image: "international2023/ti2023_fantasy_draft.png",
                          bSwapImageSide: !0,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_fantasy_craft_title",
                          description: "#international2023_fantasy_craft_desc",
                          image:
                            "international2023/ti2023_fantasy_craft_ui.png",
                          bSwapImageSide: !0,
                          imageStyle: t().Image75Percent,
                          bTranslateImageUp: !0,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_fantasy_compete_title",
                          description:
                            "#international2023_fantasy_compete_desc",
                          image: "international2023/ti2023_fantasy_reward.png",
                          bSwapImageSide: !0,
                          imageStyle: t().Image65Percent,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "Bingo",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)("#international2023_bingo_title"),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_compendium_activity",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)("#international2023_bingo_intro"),
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_bingo_cards_title",
                          description: "#international2023_bingo_cards_desc",
                          image: "international2023/ti2023_bingo_card.png",
                          imageStyle: t().Image70Percent,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_bingo_rewards_title",
                          description: "#international2023_bingo_rewards_desc",
                          image: "international2023/ti2023_bingo_reward.png",
                          imageStyle: t().Image85Percent,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "Predictions",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_predictions_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_compendium_activity",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_predictions_intro",
                          ),
                        }),
                        (0, e.jsx)(c, {
                          title:
                            "#international2023_predictions_group_stage_title",
                          description:
                            "#international2023_predictions_group_stage_desc",
                          image:
                            "international2023/ti2023_oracles_challenge_predict_group_stage.png",
                          bSwapImageSide: !0,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_predictions_ingame_title",
                          description:
                            "#international2023_predictions_ingame_desc",
                          image:
                            "international2023/ti2023_oracles_challenge_in_game_predictions.png",
                          bSwapImageSide: !0,
                          bTranslateImageUp: !0,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "Rewards",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_rewards_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_rewards_intro",
                          ),
                        }),
                        (0, e.jsx)(G, {
                          title: "#international2023_rewards_Types_title",
                          description: "#international2023_rewards_Types_desc",
                          image: "notinuse",
                        }),
                        (0, e.jsx)(c, {
                          title:
                            "#international2023_rewards_physical_aegis_title",
                          description:
                            "#international2023_rewards_physical_aegis_desc",
                          image: "international2023/ti2023_rewards_aegis.png",
                          imageStyle: t().Image65Percent,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_rewards_chat_wheels_title",
                          description:
                            "#international2023_rewards_chat_wheels_desc",
                          image:
                            "international2023/ti2023_rewards_permenent_chatwheels.png",
                          imageStyle: t().Image55Percent,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_rewards_stickers_title",
                          description:
                            "#international2023_rewards_stickers_desc",
                          image:
                            "international2023/ti2023_team_player_stickers.png",
                          imageStyle: t().Image55Percent,
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_rewards_hud_title",
                          description: "#international2023_rewards_hud_desc",
                          image: "international2023/ti2023_rewards_hud.png",
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, r.A)(
                            t().FeatureRow,
                            t().FeatureRowDiffPadding,
                          ),
                          children: [
                            (0, e.jsx)(m, {
                              title:
                                "#international2023_rewards_materials_title",
                              description:
                                "#international2023_rewards_materials_desc",
                              image:
                                "international2023/ti2023_fantasy_craft.png",
                              imageStyle: t().SmallCapsuleImageFixedHeight,
                              bUseFlexSpaceBetween: !0,
                              bCenterText: !0,
                            }),
                            (0, e.jsx)(m, {
                              title:
                                "#international2023_rewards_teleport_fx_title",
                              description:
                                "#international2023_rewards_teleport_fx_desc",
                              image:
                                "international2023/ti2023_rewards_teleports.png",
                              imageStyle: t().SmallCapsuleImageFixedHeight,
                              bUseFlexSpaceBetween: !0,
                              bCenterText: !0,
                            }),
                            (0, e.jsx)(m, {
                              title:
                                "#international2023_rewards_loading_screens_title",
                              description:
                                "#international2023_rewards_loading_screens_desc",
                              image:
                                "international2023/ti2023_rewards_loading_screens.png",
                              imageStyle: t().SmallCapsuleImageFixedHeight,
                              bUseFlexSpaceBetween: !0,
                              bCenterText: !0,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: t().LevelsBoostersContainer,
                          children: [
                            (0, e.jsx)(F, {
                              title: "#international2023_rewards_Levels_title",
                              description:
                                "#international2023_rewards_Levels_desc",
                              image:
                                "international2023/ti2023_rewards_levels.png",
                              bSwapImageSide: !0,
                            }),
                            (0, e.jsx)(F, {
                              title:
                                "#international2023_rewards_Boosters_title",
                              description:
                                "#international2023_rewards_Boosters_desc",
                              image:
                                "international2023/ti2023_rewards_boost.png",
                              bSwapImageSide: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "SupportersClubs",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_supporters_clubs_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_supporters_clubs_subtitle",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_supporters_clubs_intro",
                          ),
                        }),
                        (0, e.jsx)(c, {
                          title:
                            "#international2023_supporters_clubs_tiers_title",
                          description:
                            "#international2023_supporters_clubs_tiers_desc",
                          image: "international2023/ti2023_supporters_club.png",
                          imageStyle: t().Image70Percent,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsxs)("div", {
                      id: "TalentStickers",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                      ),
                      children: [
                        (0, e.jsx)("h1", {
                          children: (0, i.Wn)(
                            "#international2023_talent_title",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Subtitle,
                          children: (0, i.Wn)(
                            "#international2023_talent_subtitle",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: t().Introduction,
                          children: (0, i.Wn)(
                            "#international2023_talent_intro",
                          ),
                        }),
                        (0, e.jsx)(c, {
                          title: "#international2023_talent_tiers_title",
                          description: "#international2023_talent_tiers_desc",
                          image: "international2023/ti2023_talent_stickers.png",
                          imageStyle: t().Image65Percent,
                        }),
                        (0, e.jsx)(k, {
                          description: "#international2023_talent_coming_soon",
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                    (0, e.jsx)("div", {
                      id: "Footer",
                      className: (0, r.A)(
                        t().WebsiteSection,
                        t().CompendiumDark,
                        t().FooterSection,
                      ),
                      children: (0, e.jsx)(D, {}),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, r.A)(t().SectionDivider, t().Compendium),
                    }),
                  ],
                }),
                (0, e.jsx)(M, {}),
                (0, e.jsx)(R.K, {}),
              ],
            });
          }
        };
        L = w([l.PA], L);
      },
      32484: (v) => {
        v.exports = {
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
      73868: (v) => {
        v.exports = {
          Tooltip: "_1taT2Pj1o-3-iILLlowgbY",
          CarouselFade: "_8BZdPwFWQCUV6FW9izhWa",
          StandardButton: "NmltuRNbHFTf4riudR25e",
          ButtonText: "_3aVnlb9YrmvgZghlwoOwQP",
          Icon: "_1FIMoHdSL5noTKumIgECnL",
          Play: "_1Cnj4Y-iqxwdDqz6cA_GVy",
          SteamLogo: "_2HQZMwWdErU0rOd94RRw0q",
          ToolTip: "_2b3dGWoCAFxVxStW_Aeg_P",
          PlayerReportTooltip: "_2dJwjMCuUVCwoh2BbITpCv",
          International2023Page: "wtEKn34WWRrDo6BTUyGVA",
          PageContainer: "_1n5WcE5kGTuwm7JnK9bNwL",
          Hidden: "qURCeWFI2TpvwGk0K_B_5",
          SectionDivider: "BqL4ZptUKqAQF0MEQZVN3",
          Compendium: "_2Lid0fc0XcIcrlmkDJzW5w",
          Flipped: "_10LscA88NTmzvB1SFRz6Y1",
          PurchaseSection: "_1FuLz8Ck4nX16K1sWEsIYd",
          BuyCompendiumButtons: "aATJjQeMHdJWKP5RdlcOk",
          PrizePoolContribution: "_1cm1mBK5YKegLZxTZeSmJ6",
          TournamentLearnMore: "_1ky3CnW0tiAbVfJhU361R4",
          HeaderSection: "_2n1TzRobry7vZd0Htu1Kzs",
          Title: "YLOHA_V0bR97fbgJiW4bq",
          Subtitle: "_3DvYf0jwaTTiCe_Vuw5vpW",
          Spacer: "_2AKJkRRIWTjg45RcFbkJvT",
          BodyText: "_1zDRcGPGSzNcoiC55LaExO",
          WebsiteSection: "_1VcENtcO9yBblZLAcvneAL",
          CompendiumDark: "_2bw8AJKNiL5lTA7jab3IAj",
          CompendiumIntro: "_3_BN6kyzxy_cksA46pWJdB",
          CompendiumLogo: "_2U38o8jhBYNgV1V3QDiCjj",
          CompendiumLogoText: "_2NQCBIC1icTpoc22vzJ3PP",
          CompendiumStars: "E3hc8tMD5j9NfFAPe0eNv",
          FooterSection: "_3F3NWBqM1gXlZLroQIvPxH",
          FeatureCapsule: "_1Xw2Nbr_ZpFP_xdeCtLjKa",
          Text: "_353DlS2EKPMxqGcTSAgUhu",
          Headline: "uFJUdr_o4BUqB6_na7IbG",
          SmallRewardsCapsule: "_2hp9QaujE7M3BYcnNGUBHT",
          RewardsText: "_1S7Z_FnmUyDksgzL65xqJV",
          Dota: "_3tQlGV75G8A5T5yDOVRrGQ",
          HeaderPaddingBottom: "_6782p6Sukl-RqZc1jkR2C",
          Introduction: "vFKv1QCTO4zEBURmw_A6g",
          ExplainerMovie: "_3mtmA3lXjOeCOExjfCbqZw",
          ExplainerVideo: "ZaZGAvN4TqQZeIsVSFCXq",
          Description: "_2hxLWlYv48ABuqoIVn8bHl",
          Image: "_2M5MFEgxdm29KTxSvwLzLM",
          TranslateImageUp: "_1sXlUZw7eTGynYZ8iXWXx2",
          Image85Percent: "_2AFu5JnWtwhNyhAnTVuBpj",
          Image75Percent: "_3XEBBH7GdhzvFiinint1Nf",
          Image70Percent: "_3kLoVkbodSFNitqLCEtzPA",
          Image65Percent: "_10Add0Lv_3rd1tp3ttKN_h",
          Image60Percent: "_2vf34vCwvEUbJ-O2ujnQY-",
          Image55Percent: "_23aKDZMXiyKDCRd0Pu_fbb",
          Image50Percent: "yQcoOW5iv2hKn67KsmqIa",
          FeatureCapsuleSwapOrder: "_13Ndi4c6WzbfH4yaJH2zWo",
          SmallRewardsTextContainer: "jQc8xZSm2nkyYB-rKzMrP",
          SmallRewardsImageContainer: "_1OKKiU0vapuVfkl61VW36m",
          FeatureImage: "_15oH1msvxpmAeD1XjlUdwr",
          BottomBorder: "_2ozeJFPh9Z-p-wMG4alr9V",
          FeatureText: "_1eFcwwUnIgTEbxxanSgfvH",
          FeatureRow: "_2C5mZKSp7egyoVWFJLm6IO",
          HeaderContainer: "_3vFPaMB8oknGs5alLTwNqC",
          SmallFeatureCapsule: "_2RIre3xnSpBnhwZNFjvHu7",
          SpaceBetween: "_3scKVfULh4xkMK1CYvjfFq",
          CenterText: "AUxQcGOq_qYQnDVHPrP_",
          SmallCapsuleImageFixedHeight: "_14pXG0GJ_3yZPP-uxenrku",
          FeatureRowDiffPadding: "UV_0YoyRxSdV1MfB-o30o",
          LevelsBoostersContainer: "guX93o2dOPakz3Sbl30ze",
          ComingSoonCapsule: "_23EWMceZWxJ8aK1BkaOKTS",
          Contents: "_223vqFyVBBTEFgJx5AVd5-",
          Header: "_3ga_t8WIEAWpTsz3742f5N",
          ShowcaseCarousel: "_1cXX2Rnm9zs9Zp5xpM_bLo",
          CarouselArrow: "_1T3hF3PL5Jp55xFBIFpaPu",
          ArrowImage: "_3II4xyLtJtII8Ivvjw3oSW",
          Left: "_2cQNDA0O_JuyyoPVNxOp53",
          Right: "x992Ef_DOQ5Yza9Tuvc2Z",
          CarouselDots: "_0IlsD1NuerBVG8bP0-Tb",
          Dot: "_2vXVpWGhf8K6DSm7oQwi0x",
          ShowcaseVideo: "_8_Trg4do9Tx6h-iD6TnWg",
        };
      },
    },
  ]);
})();
