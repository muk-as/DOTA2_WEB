/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [19461],
    {
      34774: (N, O, i) => {
        "use strict";
        i.d(O, { Zk: () => I, gv: () => p, yP: () => L });
        var e = i(69500),
          c = i(7552),
          t = i(68544),
          a = i.n(t),
          l = i(15001),
          n = i(8305),
          d = i(2095),
          h = i(32389),
          E = i(18804),
          L = ((r) => (
            (r[(r.Normal = 0)] = "Normal"),
            (r[(r.Rare = 1)] = "Rare"),
            (r[(r.Very = 2)] = "Very"),
            (r[(r.Ultra = 3)] = "Ultra"),
            (r[(r.Cosmic = 4)] = "Cosmic"),
            r
          ))(L || {}),
          p = ((r) => (
            (r[(r.None = 0)] = "None"),
            (r[(r.Left = 1)] = "Left"),
            (r[(r.Right = 2)] = "Right"),
            r
          ))(p || {});
        const s = (0, c.createContext)(null),
          m = () => (0, c.useContext)(s);
        function P(r) {
          return (0, e.jsx)(s.Provider, {
            value: r.immortalCarouselContext,
            children: r.children,
          });
        }
        const I = ({
            strContentDir: r,
            strPrimaryColor: o,
            strSecondaryColor: x,
            strTertiaryColor: v,
            arrImmortalTreasures: _,
          }) => {
            const [g, j] = (0, c.useState)(0),
              [B, S] = (0, c.useState)(0),
              U = {
                strContentDir: r,
                strPrimaryColor: o,
                strSecondaryColor: x,
                strTertiaryColor: v,
              };
            return (0, e.jsx)("div", {
              className: (0, l.A)(
                a().BattlePassImmortalCarousel,
                _.length == 1 && a().SingleTreasure,
              ),
              style: {
                backgroundImage: `url( ${d.r.IMG_URL}${r}/backgrounds/immortal_background.jpg )`,
              },
              children: (0, e.jsxs)(P, {
                immortalCarouselContext: U,
                children: [
                  (0, e.jsx)("div", {
                    className: a().TreasureList,
                    children: _.map((T, u) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: (0, l.A)(
                            a().Treasure,
                            T.bEnabled && a().Enabled,
                            g == u && a().Selected,
                          ),
                          onClick: () => j(u),
                          children: [
                            (0, e.jsx)("img", {
                              className: a().TreasureIcon,
                              src: `${d.r.IMG_URL}${r}/immortal_treasure_${u + 1}.png`,
                            }),
                            (0, e.jsx)("div", {
                              className: a().TreasureBorder,
                              style: {
                                backgroundImage: `linear-gradient( black, black ), linear-gradient( to right, ${o}, ${x} )`,
                              },
                            }),
                            (0, e.jsx)("div", {
                              className: (0, l.A)(
                                a().TextStyleOverline,
                                a().TreasureName,
                              ),
                              style: { color: o },
                              children: (0, n.Wn)(
                                `#${r}_immortals_treasure_${u + 1}`,
                              ),
                            }),
                          ],
                        },
                        `title_${u}`,
                      ),
                    ),
                  }),
                  _.map((T, u) =>
                    (0, e.jsxs)(
                      "div",
                      {
                        className: (0, l.A)(
                          a().CarouselContainer,
                          g == u && a().ShowCarousel,
                        ),
                        children: [
                          (0, e.jsxs)(h.gi, {
                            className: a().ImmortalCarousel,
                            naturalSlideWidth: 100,
                            naturalSlideHeight: 37,
                            totalSlides: T.arrImmortals.length,
                            children: [
                              (0, e.jsx)(h.Ap, {
                                children: T.arrImmortals.map((C, A) =>
                                  (0, e.jsx)(
                                    h.q7,
                                    {
                                      index: A,
                                      onFocus: () => S(A),
                                      children: (0, e.jsx)(y, {
                                        nIndex: A,
                                        strVideo: C.strHeroName,
                                        bHeroLeft: C.eImageLoc == 1,
                                        bHeroRight: C.eImageLoc == 2,
                                        bGold: C.bGold,
                                        bEmblem: C.bEmblem,
                                      }),
                                    },
                                    `im_${u}_${A}`,
                                  ),
                                ),
                              }),
                              (0, e.jsxs)("div", {
                                className: a().CarouselDots,
                                children: [
                                  T.arrImmortals.map((C, A) =>
                                    (0, e.jsx)(
                                      h.cL,
                                      {
                                        slide: A,
                                        "data-tip":
                                          C?.strTooltip?.length > 0
                                            ? (0, n.Wn)(C.strTooltip)
                                            : "",
                                        children: (0, e.jsx)($, {
                                          strHeroName: C.strHeroName,
                                          eRarity: C.eRarity,
                                          bSelected: A == B,
                                        }),
                                      },
                                      `dot_${u}_${A}`,
                                    ),
                                  ),
                                  (0, e.jsx)(b, {}),
                                ],
                              }),
                              (0, e.jsx)(h._X, {
                                className: (0, l.A)(
                                  a().CarouselArrow,
                                  a().Left,
                                ),
                                children: (0, e.jsx)("img", {
                                  src: `${d.r.IMG_URL}${r}/arrow_left.png`,
                                  className: a().ArrowImage,
                                }),
                              }),
                              (0, e.jsx)(h.CC, {
                                className: (0, l.A)(
                                  a().CarouselArrow,
                                  a().Right,
                                ),
                                children: (0, e.jsx)("img", {
                                  src: `${d.r.IMG_URL}${r}/arrow_left.png`,
                                  className: a().ArrowImage,
                                }),
                              }),
                              (0, e.jsx)(R, { nTreasureIndex: u }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: (0, l.A)(
                              a().TextStyleCaption,
                              a().TreasureLevels,
                            ),
                            children: (0, n.Wn)(
                              `#${r}_immortals_levels_${u}_desc`,
                            ),
                          }),
                        ],
                      },
                      `carousel_${u}`,
                    ),
                  ),
                  (0, e.jsx)("div", {
                    className: (0, l.A)(
                      a().TextStyleFootnote,
                      a().ImmortalsFootnote,
                    ),
                    style: { color: v },
                    children: (0, n.Wn)(`#${r}_immortals_footnote`),
                  }),
                ],
              }),
            });
          },
          b = () => {
            const r = m();
            return (0, e.jsx)(E.A, {
              effect: "solid",
              borderColor: r.strSecondaryColor,
              arrowColor: r.strTertiaryColor,
              backgroundColor: r.strTertiaryColor,
              textColor: r.strPrimaryColor,
              border: !0,
              className: a().Tooltip,
            });
          },
          y = ({
            nIndex: r,
            strVideo: o,
            bHeroLeft: x,
            bHeroRight: v,
            bGold: _,
          }) => {
            const g = (0, c.useContext)(h.Yc),
              j = m(),
              B = (0, c.useRef)(void 0);
            return (
              (0, c.useEffect)(() => {
                function S() {
                  B.current && g.state.currentSlide == r && B.current.load();
                }
                return g.subscribe(S), () => g.unsubscribe(S);
              }, [g, r]),
              (0, e.jsx)("div", {
                className: a().ImmortalTreasureSet,
                children: (0, e.jsxs)("div", {
                  className: a().VideoContainer,
                  children: [
                    x &&
                      (0, e.jsx)("img", {
                        className: (0, l.A)(a().HeroImage, a().Left),
                        src: `${d.r.IMG_URL}${j.strContentDir}/immortals/art/${o}${_ ? "_gold" : ""}.png`,
                      }),
                    (0, e.jsxs)("video", {
                      ref: B,
                      className: a().ImmortalVideo,
                      autoPlay: !0,
                      preload: "auto",
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      poster: `${d.r.IMG_URL}${j.strContentDir}/immortals/${o}.jpg`,
                      children: [
                        (0, e.jsx)("source", {
                          type: "video/webm",
                          src: `${d.r.VIDEO_URL}${j.strContentDir}/immortals/${o}${_ ? "_gold" : ""}.webm`,
                        }),
                        (0, e.jsx)("source", {
                          type: "video/mp4",
                          src: `${d.r.VIDEO_URL}${j.strContentDir}/immortals/${o}${_ ? "_gold" : ""}.mp4`,
                        }),
                      ],
                    }),
                    v &&
                      (0, e.jsx)("img", {
                        className: (0, l.A)(a().HeroImage, a().Right),
                        src: `${d.r.IMG_URL}${j.strContentDir}/immortals/art/${o}${_ ? "_gold" : ""}.png`,
                      }),
                  ],
                }),
              })
            );
          },
          R = ({ nTreasureIndex: r }) => {
            const o = (0, c.useContext)(h.Yc),
              x = m(),
              [v, _] = (0, c.useState)(o.state.currentSlide);
            return (
              (0, c.useEffect)(() => {
                function g() {
                  _(o.state.currentSlide);
                }
                return o.subscribe(g), () => o.unsubscribe(g);
              }, [o]),
              (0, e.jsxs)("div", {
                className: a().NameAndDesc,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, l.A)(
                      a().TextStyleSmallHeading,
                      a().ImmortalName,
                    ),
                    style: { color: x.strPrimaryColor },
                    children: (0, n.Wn)(
                      `#${x.strContentDir}_immortal_${r}_${v + 1}_name`,
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, l.A)(a().TextStyleBody, a().ImmortalDesc),
                    children: (0, n.Wn)(
                      `#${x.strContentDir}_immortal_${r}_${v + 1}_desc`,
                    ),
                  }),
                ],
              })
            );
          },
          $ = ({ strHeroName: r, eRarity: o, bSelected: x }) => {
            const v = m(),
              _ = r == "emblem" ? "emblem" : r;
            return (0, e.jsx)("div", {
              className: (0, l.A)(
                a().ImmortalDot,
                o == 1 && a().Rare,
                o == 2 && a().VeryRare,
                o == 3 && a().UltraRare,
                o == 4 && a().CosmicallyRare,
              ),
              style: { borderBottomColor: v.strSecondaryColor },
              children: (0, e.jsx)("img", {
                className: a().BPHeroImage,
                src: `${d.r.IMG_URL}heroes/wide/${_}.png`,
              }),
            });
          };
      },
      10806: (N, O, i) => {
        "use strict";
        i.d(O, { $x: () => h, Jh: () => p, c: () => L });
        var e = i(69500),
          c = i(32484),
          t = i.n(c),
          a = i(15001),
          l = i(8305),
          n = i(2095),
          d = i(45488);
        const h = ({
            colorTopEdge: s,
            colorTop: m,
            colorMiddle: P,
            colorBottom: I,
            level: b,
            discountPct: y,
            itemid: R,
            capsuleImageLocation: $ = "labyrinth/bp_logo_",
            capsuleImageOnErrorLocation: r = "labyrinth/bp_logo_en.png",
          }) =>
            (0, e.jsxs)("div", {
              className: t().BuyBattlePassCapsule,
              style: {
                borderTop: `2px solid ${s}`,
                backgroundImage: `linear-gradient( ${m}, ${I} )`,
              },
              children: [
                (0, e.jsx)("img", {
                  className: t().CapsuleTitle,
                  onError: (o) => (o.target.src = `${n.r.IMG_URL}${r}`),
                  src: `${n.r.IMG_URL}${$}${n.r.LANGUAGE}.png`,
                }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().TextStyleOverline),
                  children: (0, l.Wn)("#battlepass_purchase_level", b),
                }),
                (0, e.jsx)("a", {
                  href: `${n.r.BASE_URL}store/itemdetails/${R}`,
                  className: (0, a.A)(
                    t().TextStyleButton,
                    t().TextColorWhite,
                    t().CapsulePurchaseButton,
                  ),
                  style: {
                    borderTop: `1px solid ${s}`,
                    backgroundImage: `linear-gradient( ${s}, ${s} )`,
                  },
                  children: (0, l.Wn)(
                    "#battlepass_purchase_label",
                    d.o.GetBPPrice(R),
                  ),
                }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(
                    t().TextStyleFootnote,
                    t().TextColorGreenGlow,
                    t().CapsuleDiscount,
                  ),
                  children:
                    y && (0, l.Wn)("#battlepass_purchase_discount", y, b),
                }),
              ],
            }),
          E = (s) =>
            jsxs("div", {
              className: styles.BuyCompendiumCapsule,
              style: {
                borderTop: `2px solid ${s.colorTopEdge}`,
                backgroundImage: `linear-gradient( ${s.colorTop}, ${s.colorBottom} )`,
              },
              children: [
                s.title &&
                  jsx("div", {
                    className: styles.CapsuleTitle,
                    style: {
                      backgroundImage: "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: BBLocalize(s.title),
                  }),
                s.capsuleImageLocation &&
                  jsx("img", {
                    className: styles.CapsuleTitle,
                    onError: (m) =>
                      (m.target.src = `${ConfigDota.IMG_URL}${s.capsuleImageOnErrorLocation}`),
                    src: `${ConfigDota.IMG_URL}${s.capsuleImageLocation}${ConfigDota.LANGUAGE}.png`,
                  }),
                jsx("div", {
                  className: classnames(styles.CompendiumLevels),
                  children: BBLocalize("#compendium_purchase_levels", s.level),
                }),
                jsx("div", {
                  className: classnames(styles.BoosterLevels),
                  children: BBLocalize(
                    "#compendium_purchase_booster_levels",
                    s.booster_level,
                  ),
                }),
                jsx("div", {
                  className: classnames(
                    styles.TextStyleButton,
                    styles.TextColorWhite,
                    styles.CapsulePurchaseButton,
                  ),
                  style: {
                    borderTop: `1px solid ${s.colorTopEdge}`,
                    backgroundImage: `linear-gradient( ${s.colorTopEdge}, ${s.colorTopEdge} )`,
                  },
                  onClick: () =>
                    g_App.PurchaseOnSteamStore(
                      s.itemid,
                      1,
                      window.location.href,
                    ),
                  children: BBLocalize(
                    "#battlepass_purchase_label",
                    g_App.GetBPPrice(s.itemid),
                  ),
                }),
                jsx("div", {
                  className: classnames(
                    styles.TextStyleFootnote,
                    styles.TextColorGreenGlow,
                    styles.CapsuleDiscount,
                  ),
                  children:
                    g_App.GetBPDiscount(s.eventid, s.itemid) &&
                    BBLocalize(
                      "#compendium_purchase_discount",
                      g_App.GetBPDiscount(s.eventid, s.itemid),
                    ),
                }),
              ],
            }),
          L = (s) =>
            (0, e.jsxs)("div", {
              className: (0, a.A)(
                t().BuyCompendiumCapsule,
                t().BuyCompendiumCapsule2023,
              ),
              style: {
                borderTop: `2px solid ${s.colorTopEdge}`,
                backgroundImage: `linear-gradient( ${s.colorTop}, ${s.colorBottom} )`,
              },
              children: [
                s.title &&
                  (0, e.jsx)("div", {
                    className: t().CapsuleTitle,
                    style: {
                      backgroundImage: "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: (0, l.Wn)(s.title),
                  }),
                s.capsuleImageLocation &&
                  (0, e.jsx)("img", {
                    className: t().CapsuleTitle,
                    onError: (m) =>
                      (m.target.src = `${n.r.IMG_URL}${s.capsuleImageOnErrorLocation}`),
                    src: `${n.r.IMG_URL}${s.capsuleImageLocation}${n.r.LANGUAGE}.png`,
                  }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().CompendiumLevels),
                  children: (0, l.Wn)("#compendium_purchase_levels", s.level),
                }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().BoosterLevels),
                  children: (0, l.Wn)(
                    "#compendium_purchase_booster_levels",
                    s.booster_level,
                  ),
                }),
                (0, e.jsx)("div", { className: t().SmoothLine }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().EarnTheFollowing),
                  children: (0, l.Wn)(
                    "#compendium_purchase_earn_the_following",
                  ),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)("#compendium_purchase_all_access"),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#compendium_purchase_aegis_emoticon",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#compendium_purchase_rtti_culling_blades",
                        s.cullingBlades,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#compendium_purchase_rtti_reroll_tokens",
                        s.rerollTokens,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#compendium_purchase_fantasy_tokens",
                        s.fantasyTokens,
                      ),
                    }),
                    s.voicelines == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_one_random_voiceline",
                        ),
                      }),
                    s.voicelines > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_voicelines",
                          s.voicelines,
                        ),
                      }),
                    s.playerStickers == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_one_player_sticker",
                        ),
                      }),
                    s.playerStickers > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_player_stickers",
                          s.playerStickers,
                        ),
                      }),
                    s.teamStickers &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_team_stickers",
                          s.teamStickers,
                        ),
                      }),
                    s.teamLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_team_loading_screens",
                          s.teamLoadingScreens,
                        ),
                      }),
                    s.tiLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#compendium_purchase_ti_loading_screens",
                          s.tiLoadingScreens,
                        ),
                      }),
                    s.tpFX &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)("#compendium_purchase_tp_fx"),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: t().BoostersFootnoteContainer,
                  children: [
                    !s.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, a.A)(t().BoostersFootnote),
                        children: (0, l.Wn)(
                          "#compendium_purchase_boosters_footnote",
                        ),
                      }),
                    s.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, a.A)(t().BoostersFootnote),
                        children: (0, l.Wn)(
                          "#compendium_purchase_upgraded_boosters_footnote",
                        ),
                      }),
                  ],
                }),
              ],
            }),
          p = (s) =>
            (0, e.jsxs)("div", {
              className: (0, a.A)(
                t().BuyCompendiumCapsule,
                t().BuyCompendiumCapsule2024,
              ),
              style: {
                backgroundImage: s.isUpgraded
                  ? `url( ${n.r.IMG_URL}/international2024/compendium/panel_upgraded_compendium.jpg )`
                  : `url( ${n.r.IMG_URL}/international2024/compendium/panel_standard_compendium.jpg )`,
              },
              children: [
                (0, e.jsx)("div", {
                  className: t().FlourishContainer,
                  children: (0, e.jsx)("img", {
                    src: s.isUpgraded
                      ? `${n.r.IMG_URL}international2024/dividers_and_flourishes/flourish_upgraded_compendium.png`
                      : `${n.r.IMG_URL}international2024/dividers_and_flourishes/flourish_standard_compendium.png`,
                  }),
                }),
                s.title &&
                  (0, e.jsx)("div", {
                    className: t().CapsuleTitle,
                    style: {
                      backgroundImage: s.isUpgraded
                        ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                        : "linear-gradient( to bottom, #FFF, #FFF",
                    },
                    children: (0, l.Wn)(s.title),
                  }),
                s.capsuleImageLocation &&
                  (0, e.jsx)("img", {
                    className: t().CapsuleTitle,
                    onError: (m) =>
                      (m.target.src = `${n.r.IMG_URL}${s.capsuleImageOnErrorLocation}`),
                    src: `${n.r.IMG_URL}${s.capsuleImageLocation}${n.r.LANGUAGE}.png`,
                  }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().CompendiumLevels),
                  style: {
                    backgroundImage: s.isUpgraded
                      ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                      : "linear-gradient( to bottom, #FFF, #FFF",
                  },
                  children: (0, l.Wn)(
                    "#ti13_compendium_purchase_levels",
                    s.level,
                  ),
                }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().BoosterLevels),
                  style: {
                    backgroundImage: s.isUpgraded
                      ? "linear-gradient( to bottom, #E1CC9A, #E1CC9A"
                      : "linear-gradient( to bottom, #FFF, #FFF",
                  },
                  children: (0, l.Wn)(
                    "#ti13_compendium_purchase_booster_levels",
                    s.booster_level,
                  ),
                }),
                (0, e.jsx)("div", { className: t().SmoothLine }),
                (0, e.jsx)("div", {
                  className: (0, a.A)(t().EarnTheFollowing),
                  children: (0, l.Wn)(
                    "#ti13_compendium_purchase_earn_the_following",
                  ),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: s.isUpgraded
                        ? (0, l.Wn)("#ti13_compendium_upgraded_subtitle")
                        : (0, l.Wn)("#ti13_compendium_standard_subtitle"),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#ti13_compendium_purchase_aegis_emoticon",
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#ti13_compendium_purchase_bingo_tokens",
                        s.bingoTokens,
                      ),
                    }),
                    (0, e.jsx)("li", {
                      className: (0, a.A)(t().OtherRewards),
                      children: (0, l.Wn)(
                        "#ti13_compendium_purchase_fantasy_tokens",
                        s.fantasyTokens,
                      ),
                    }),
                    s.playerStickers == 1 &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_one_player_sticker",
                        ),
                      }),
                    s.playerStickers > 1 &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_player_stickers",
                          s.playerStickers,
                        ),
                      }),
                    s.teamStickers &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_team_stickers",
                          s.teamStickers,
                        ),
                      }),
                    s.teamLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_team_loading_screens",
                          s.teamLoadingScreens,
                        ),
                      }),
                    s.tiLoadingScreens &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_ti_loading_screens",
                          s.tiLoadingScreens,
                        ),
                      }),
                    s.effigyBlocks &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_effigy_blocks",
                          s.effigyBlocks,
                        ),
                      }),
                    s.tpFX &&
                      (0, e.jsx)("li", {
                        className: (0, a.A)(t().OtherRewards),
                        children: (0, l.Wn)("#ti13_compendium_purchase_tp_fx"),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: t().BoostersFootnoteContainer,
                  children: [
                    !s.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, a.A)(t().BoostersFootnote),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_boosters_footnote",
                        ),
                      }),
                    s.isUpgraded &&
                      (0, e.jsx)("div", {
                        className: (0, a.A)(t().BoostersFootnote),
                        children: (0, l.Wn)(
                          "#ti13_compendium_purchase_upgraded_boosters_footnote",
                        ),
                      }),
                  ],
                }),
              ],
            });
      },
      68544: (N) => {
        N.exports = {
          Tooltip: "_1rogBaZTsNK3R6gYwGvQGD",
          CarouselFade: "dt-tioQwR4mWwIMczo_-x",
          StandardButton: "Bj27AzkTaAZ2cBgpeF5HF",
          ButtonText: "_1Db7sPPYXNR74M64y-pt8Q",
          Icon: "_12HYRzLUbknUcSWBZd1fx5",
          Play: "_2-CwDOnjZvBrB5KsSEiIPt",
          SteamLogo: "_2cw5e5G8_MXhAKOb6o5Qxj",
          ToolTip: "_31OYXcRI4IYeZz1rAd5Rtl",
          PlayerReportTooltip: "_3JT4c5C9H8YPX9lD0Qu2Cf",
          BattlePassImmortalCarousel: "fwQjheqFyu_-UTOt2BM6D",
          SingleTreasure: "Z9UBpYJnuii0Rx1QUjIhg",
          TreasureList: "aAVRsjdMoVDtpErconVLl",
          CarouselContainer: "_1N_kXQUTcUUPvmaqfLs41Y",
          Treasure: "zEcloXtq7Ci1a5Ei1spPZ",
          Enabled: "_2WcnEQ_TiLU9bwfhiKNEbD",
          TreasureIcon: "_2AictqEsGeFkFQce9iHAPu",
          TreasureBorder: "_1fDAgDjzGartO3wHV9KwIg",
          TreasureName: "_9lWPdQPSs8k3M4E6ak4Mf",
          Selected: "_2PndjuuWERMqcU4rBriVCt",
          ShowCarousel: "CuBTS4Yf0KF1tQwi-q9Ud",
          ImmortalCarousel: "_3xbPfcrGXz9Y--JETQ5-Du",
          ImmortalTreasureSet: "T2scWpwh3oFJX4GyL8eir",
          VideoContainer: "_2Dq1Ne_9vDxkAHjtAF3yeY",
          HeroImage: "_21CJ59ri_cCRwrkleUEwTK",
          Left: "_1s2Qogee7wDGhkwMBPuNm-",
          Right: "_2YOpK5rwkHieGL-0hhSr9u",
          CarouselArrow: "-rG2S5aX5rgAUk5vGHin2",
          CarouselDots: "_2IhEhhPKquhYABQBTiOtZO",
          NameAndDesc: "_22RBGL7z_G8B4PEGIuuA3",
          ImmortalName: "_3tyYog7Uzzn27TPI5ve76c",
          ImmortalDesc: "_-2DzMtS3TfthuhoEkoYbA",
          ImmortalDot: "_2rMsb2wvEbKpNSJL1MHRH0",
          Rare: "xwUa_CC8Hxv0_RmEAMFOV",
          VeryRare: "_29im6BZ28HRdEz2g1jsiwL",
          UltraRare: "_1fkHu2XsbiZHdG_HJOdu-Z",
          CosmicallyRare: "_2Qs8l941SD1la79xPuGdhD",
          BPHeroImage: "_35ORvZmLoMKjG22m5K5q2B",
          TreasureLevels: "_35fB1hSVVGSNIuQfbPIhai",
          ImmortalsFootnote: "_3JzNIW2K-qZiq0UsrbCx0j",
          Dot: "CNBg1zuF61ILDuXROBqZD",
          ArrowImage: "_1sM-hTxaXPduE1CkVvJ48",
          TextStyleSmallHeading: "_5zpSzIIv0MIyppc9mUJgS",
          TextStyleBody: "_2MpGHowr9z-4VBxtQA46la",
          TextStyleCaption: "_2BPU_Ca4-eypkwXzFNqW7-",
          TextStyleFootnote: "_3ASKuRk-ALdIsSVs-GHBnn",
        };
      },
      32484: (N) => {
        N.exports = {
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
    },
  ]);
})();
