// 13171.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [13171],
    {
      33883: (A, E, g) => {
        "use strict";
        g.d(E, { U: () => a, v: () => P });
        var s = g(69500),
          m = g(7552),
          C = g(85655),
          i = g.n(C),
          S = g(15001),
          L = g(2095),
          R = g(8305);
        const P = ({ image: D, is_new: F }) =>
            (0, s.jsxs)("div", {
              className: i().ComparisonImage,
              children: [
                (0, s.jsx)("div", {
                  className: (0, S.A)(i().ImageLabel, F && i().IsNew),
                  children: (0, R.Wn)(F ? "#729_new_image" : "#729_old_image"),
                }),
                (0, s.jsx)("img", { src: `${L.r.IMG_URL}${D}` }),
              ],
            }),
          a = (D) => {
            const [F, z] = (0, m.useState)(0);
            return (0, s.jsxs)("div", {
              className: i().TabbedMapComparison,
              children: [
                (0, s.jsx)("div", {
                  className: i().TabHeader,
                  children: D.labels.map((G, e) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: (0, S.A)(i().Tab, F == e && i().Active),
                        onClick: () => z(e),
                        children: (0, R.Wn)(G),
                      },
                      "tab_" + e,
                    ),
                  ),
                }),
                (0, s.jsx)("div", {
                  className: i().TabContents,
                  children: m.Children.map(D.children, (G, e) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: (0, S.A)(
                          i().TabContentContainer,
                          e == F && i().Active,
                        ),
                        children: G,
                      },
                      "tabelement_" + e,
                    ),
                  ),
                }),
              ],
            });
          };
      },
      13171: (A, E, g) => {
        "use strict";
        g.r(E),
          g.d(E, {
            DownloadIcon: () => ie,
            ImageVideoCapsule: () => d,
            InnateIconSmall: () => ne,
            PlayIcon: () => ae,
            default: () => Y,
          });
        var s = g(69500),
          m = g(2095),
          C = g(84485),
          i = g(8305),
          S = g(3878),
          L = g(7552),
          R = g(73202),
          P = g(2130),
          a = g(15001),
          D = g(45488),
          F = g(63177),
          z = g(42616),
          G = g(26942),
          e = g.n(G),
          H = g(84899),
          x = g(32389),
          k = g(71010),
          K = g(84598),
          Q = g(85286),
          J = g.n(Q),
          T = g(33883),
          M = g(4665),
          q = g(13837),
          c = g.n(q);
        const Z = (0, S.PA)((t) => {
          const l = t.patchnotes?.heroes
              ?.slice()
              .find((p) => p.hero_id == t.nHeroID),
            o = C.B5.Get().getAbilityList(),
            r = C.B5.Get().getHeroData(t.nHeroID);
          if (!r || !l || !o) return null;
          const j = r.name.replace("npc_dota_hero_", ""),
            _ =
              l.subsections?.filter((p) => p.style.startsWith("hero_facet")) ||
              [],
            h = _.findIndex((p) => p.title == t.strFacetName);
          if (h == -1) return !1;
          const v = 20,
            b = _[h];
          return (0, s.jsxs)("div", {
            className: (0, a.A)(c().HeroHighlight),
            children: [
              (0, s.jsx)("div", {
                className: (0, a.A)(c().HeroHighlightBorder),
              }),
              (0, s.jsxs)("div", {
                className: (0, a.A)(c().HeroHighlightVideoContainer),
                children: [
                  (0, s.jsx)("div", {
                    className: (0, a.A)(c().HeroHighlightFloorShadow),
                  }),
                  (0, s.jsx)(d, {
                    image: `heroes/renders/${j}.png`,
                    posterInVideo: !0,
                    video: `heroes/renders/${j}.webm`,
                    additionalClassName: (0, a.A)(c().HeroHighlightVideo),
                    transform: `scale( ${t.strScale || "1"} ) translateX( ${t.strTranslateX || "0"} ) translateY( ${t.strTranslateY || "0"}`,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: c().FacetsContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, a.A)(c().HeroNameInfoContainer),
                    children: [
                      (0, s.jsx)("p", {
                        className: (0, a.A)(
                          c().TitleFont,
                          c().TitleMedium,
                          c().HeroName,
                        ),
                        children: r.name_loc,
                      }),
                      (0, s.jsx)("p", {
                        className: (0, a.A)(
                          c().LabelFont,
                          c().LabelSmall,
                          c().HighlightTitle,
                        ),
                        children: (0, i.Wn)("#patchnotes_new_facet_new"),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(
                    "div",
                    {
                      className: (0, a.A)(
                        c().Facet,
                        c()[`FacetColor${b.facet_color}`],
                        b.style.includes("NewFacet") && c().NewFacet,
                        b.style.includes("ReworkedFacet") && c().ReworkedFacet,
                      ),
                      children: [
                        (0, s.jsx)("div", { className: c().NewBorder }),
                        (0, s.jsx)("div", { className: c().ReworkedBorder }),
                        (0, s.jsx)("div", {
                          className: c().ReworkedBadge,
                          children: (0, i.Wn)("#patchnotes_reworked_facet"),
                        }),
                        (0, s.jsx)("div", { className: c().Background }),
                        (0, s.jsxs)("div", {
                          className: c().FacetHeader,
                          children: [
                            (0, s.jsx)("div", {
                              className: c().BackgroundTexture,
                              style: {
                                backgroundImage: `url( ${m.r.IMG_URL}icons/facets/ripple_texture.png )`,
                              },
                            }),
                            (0, s.jsxs)("div", {
                              className: c().HeaderContents,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: c().IconContainer,
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: c().IconBackground,
                                    }),
                                    (0, s.jsx)("div", {
                                      className: c().IconWash,
                                    }),
                                    (0, s.jsx)("img", {
                                      className: c().Icon,
                                      src: `${m.r.IMG_URL}icons/facets/${b.facet_icon}.png`,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: c().Name,
                                  children: b.title,
                                }),
                              ],
                            }),
                          ],
                        }),
                        b.general_notes?.length > 0 &&
                          (0, s.jsx)("div", {
                            className: c().FacetNotes,
                            children: b.general_notes.map((p, B) =>
                              (0, s.jsxs)(
                                "div",
                                {
                                  className: c().FacetNote,
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: c().Indent,
                                      style: {
                                        width: v * (p.indent_level - 1),
                                        minWidth: v * (p.indent_level - 1),
                                      },
                                    }),
                                    (0, s.jsx)("div", {
                                      className: (0, a.A)(
                                        c().Dot,
                                        p.hide_dot && c().IsHidden,
                                      ),
                                    }),
                                    (0, i.Wn)(p.note),
                                  ],
                                },
                                `hero_${t.nHeroID}_${B}`,
                              ),
                            ),
                          }),
                        b.abilities?.length > 0 &&
                          (0, s.jsx)("div", {
                            className: c().FacetAbilities,
                            children: b.abilities?.map((p, B) => {
                              const U = p.ability_id,
                                W = o.itemabilities.find((f) => f.id == U),
                                V = W
                                  ? `abilities/${K.b9.has(b.facet) ? K.b9.get(b.facet) : W.name}`
                                  : "icons/innate_icon";
                              return (0, s.jsxs)(
                                "div",
                                {
                                  className: c().FacetAbility,
                                  children: [
                                    (0, s.jsx)("img", {
                                      className: c().AbilityIcon,
                                      onError: (f) =>
                                        (f.target.src = `${m.r.IMG_URL}icons/innate_icon.png`),
                                      src: `${m.r.IMG_URL}${V}.png`,
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: c().RightSide,
                                      children: [
                                        W &&
                                          (0, s.jsx)("div", {
                                            className: c().AbilityName,
                                            children: W.name_loc,
                                          }),
                                        p.ability_notes.map((f, O) =>
                                          (0, s.jsxs)(
                                            "div",
                                            {
                                              className: c().AbilityNote,
                                              children: [
                                                (0, s.jsx)("div", {
                                                  className: c().Indent,
                                                  style: {
                                                    width:
                                                      v * (f.indent_level - 1),
                                                    minWidth:
                                                      v * (f.indent_level - 1),
                                                  },
                                                }),
                                                (0, s.jsx)("div", {
                                                  className: (0, a.A)(
                                                    c().Dot,
                                                    f.hide_dot && c().IsHidden,
                                                  ),
                                                }),
                                                (0, i.Wn)(f.note),
                                              ],
                                            },
                                            `hero_${t.nHeroID}_${O}`,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                },
                                `hero_${t.nHeroID}_facet_${h}_ability_${B}`,
                              );
                            }),
                          }),
                        b.talent_notes?.length > 0 &&
                          (0, s.jsxs)("div", {
                            className: c().FacetTalentNotes,
                            children: [
                              (0, s.jsx)("div", {
                                className: c().TalentImage,
                                style: {
                                  backgroundImage: `url( ${m.r.IMG_URL}icons/talents.svg )`,
                                },
                              }),
                              (0, s.jsx)("div", {
                                className: c().Notes,
                                children: b.talent_notes.map((p) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: c().NoteElement,
                                      children: [
                                        (0, s.jsx)("div", {
                                          className: c().Indent,
                                          style: {
                                            width: v * (p.indent_level - 1),
                                            minWidth: v * (p.indent_level - 1),
                                          },
                                        }),
                                        (0, s.jsx)("div", {
                                          className: (0, a.A)(
                                            c().Dot,
                                            p.hide_dot && c().IsHidden,
                                          ),
                                        }),
                                        (0, s.jsx)("div", {
                                          className: c().Note,
                                          children: (0, i.Wn)(p.note),
                                        }),
                                        p.info &&
                                          (0, s.jsx)(H.O1, {
                                            infoText: p.info,
                                          }),
                                      ],
                                    },
                                    p.note,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        (0, s.jsx)("div", { className: c().FacetBodyFiller }),
                      ],
                    },
                    `hero_${t.nHeroID}_facet_${h}`,
                  ),
                ],
              }),
            ],
          });
        });
        var $ = Object.defineProperty,
          ee = Object.getOwnPropertyDescriptor,
          se = (t, l, o, r) => {
            for (
              var j = r > 1 ? void 0 : r ? ee(l, o) : l, _ = t.length - 1, h;
              _ >= 0;
              _--
            )
              (h = t[_]) && (j = (r ? h(l, o, j) : h(j)) || j);
            return r && j && $(l, o, j), j;
          };
        const ae = () =>
            (0, s.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${m.r.IMG_URL}/icons/play.svg )`,
              },
            }),
          ie = () =>
            (0, s.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${m.r.IMG_URL}/icons/download.svg )`,
              },
            }),
          ne = () =>
            (0, s.jsx)("div", {
              className: (0, a.A)(e().InnateIconSmall, e().ControlIcon),
              style: {
                backgroundImage: `url( ${m.r.IMG_URL}/icons/innate_icon_small.svg )`,
              },
            }),
          te = "Springcleaning2025";
        function re() {
          const t = g(99769),
            l =
              navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
              navigator.userAgent.toLowerCase().indexOf("macintosh") != -1;
          return t || l;
        }
        const d = (t) => {
          const l = (0, L.useRef)(void 0);
          return t.video
            ? (0, s.jsx)("video", {
                className: (0, a.A)(t.additionalClassName),
                ref: l,
                muted: !0,
                autoPlay: !0,
                preload: "auto",
                loop: !0,
                playsInline: !0,
                poster: `${t.posterInVideo ? m.r.VIDEO_URL : m.r.IMG_URL}${t.image}`,
                style: { transform: t.transform },
                children: (0, s.jsx)("source", {
                  type: "video/webm",
                  src: `${m.r.VIDEO_URL}${t.video}`,
                }),
              })
            : (0, s.jsx)("img", {
                className: (0, a.A)(t.additionalClassName),
                src: `${m.r.IMG_URL}/` + t.image,
              });
        };
        function le(t) {
          let l = "",
            o = !0;
          for (let r = 0; r < t.length; ++r) {
            if (t[r] == "_") {
              o = !0;
              continue;
            }
            o ? ((l += t[r].toUpperCase()), (o = !1)) : (l += t[r]);
          }
          return l;
        }
        const ce = (t) => {
            if (!t.special.heading_loc) return null;
            let l = t.special.values_float.map((j, _) =>
                (0, s.jsx)(
                  "span",
                  { className: e().SingleValue, children: (0, k.F)(j) },
                  _,
                ),
              ),
              o = !1,
              r = null;
            return (
              t.special.heading_loc[0] == "+"
                ? ((r = t.special.heading_loc.slice(1)), (o = !0))
                : (r = t.special.heading_loc),
              r[0] == "$" && (r = "#dota_ability_variable_" + r.slice(1)),
              o
                ? (0, s.jsxs)("div", {
                    className: e().Stat,
                    children: ["+ ", l, " ", (0, i.Wn)(r)],
                  })
                : (0, s.jsxs)("div", {
                    className: e().Stat,
                    children: [(0, i.Wn)(r), " ", l],
                  })
            );
          },
          I = (0, S.PA)(({ name: t, components: l, recipeCost: o }) => {
            const j = C.B5.Get()
                .getItemList()
                ?.itemabilities.find((u) => u.name == t),
              _ = C.B5.Get().getItemData(j?.id);
            if (!_) return null;
            let h = _.desc_loc;
            _.special_values.forEach((u) => {
              let N =
                u.values_float.length > 0 ? (0, k.F)(u.values_float[0]) : "0";
              (h = h.replace("%" + u.name + "%", N)),
                (h = h.replace("%" + u.name.toLowerCase() + "%", N));
            }),
              (h = h.replace(/\%\%/g, "%"));
            let v = _.special_values?.map((u, N) =>
                (0, s.jsx)(ce, { special: u }, N),
              ),
              b = _.name.replace("item_", ""),
              p = _.item_cost,
              B =
                _.item_neutral_tier >= 0 && _.item_neutral_tier < 5
                  ? _.item_neutral_tier + 1
                  : -1,
              U = e()["Tier" + B],
              W = _.cooldowns.reduce((u, N) => u + N) > 0,
              V = _.mana_costs.reduce((u, N) => u + N) > 0,
              f =
                _.health_costs && _.health_costs.length > 0
                  ? _.health_costs.reduce((u, N) => u + N) > 0
                  : !1,
              O = l
                ? l.map((u, N) =>
                    (0, s.jsx)(
                      "img",
                      {
                        className: e().RecipeComponentImage,
                        src: `${m.r.IMG_URL}/items/${u}.png`,
                      },
                      N,
                    ),
                  )
                : [];
            return (0, s.jsxs)("div", {
              className: e().GameItemDetails,
              children: [
                (0, s.jsx)("div", { className: e().ItemBorder }),
                (0, s.jsxs)("div", {
                  className: (0, a.A)(e().HeaderContainer),
                  children: [
                    B > 0 &&
                      (0, s.jsx)("div", {
                        className: (0, a.A)(e().HeaderTierColor, U),
                      }),
                    (0, s.jsxs)("div", {
                      className: (0, a.A)(e().Header),
                      children: [
                        (0, s.jsx)("img", {
                          className: e().ItemImage,
                          src: `${m.r.IMG_URL}/items/${b}.png`,
                        }),
                        (0, s.jsxs)("div", {
                          className: e().HeaderText,
                          children: [
                            (0, s.jsx)("div", {
                              className: (0, a.A)(
                                e().ItemName,
                                e().TitleFont,
                                e().TitleExtraSmall,
                              ),
                              children: _.name_loc,
                            }),
                            p > 0 &&
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().GoldPrice,
                                  e().LabelFont,
                                  e().LabelMedium,
                                ),
                                children: [
                                  (0, s.jsx)("img", {
                                    className: e().GoldIcon,
                                    src: `${m.r.IMG_URL}/icons/gold.png`,
                                  }),
                                  p,
                                ],
                              }),
                            B > 0 &&
                              (0, s.jsx)("div", {
                                className: (0, a.A)(e().NeutralItemTier, U),
                                children: (0, i.Wn)("#neutral_item_tier", B),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: e().Body,
                  children: [
                    (0, s.jsx)("div", { className: e().Stats, children: v }),
                    h &&
                      (0, s.jsxs)("div", {
                        className: e().DescriptionContainer,
                        children: [
                          (0, s.jsx)("div", {
                            className: e().Description,
                            dangerouslySetInnerHTML: { __html: h },
                          }),
                          (W || V || f) &&
                            (0, s.jsxs)("div", {
                              className: (0, a.A)(e().DescriptionHeader),
                              children: [
                                V &&
                                  (0, s.jsxs)("div", {
                                    className: e().ManaContainer,
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: e().ManaIcon,
                                      }),
                                      (0, s.jsx)("div", {
                                        className: e().ManaText,
                                        children: _.mana_costs.map(
                                          (u, N) =>
                                            (N > 0 ? " / " : "") + (0, k.F)(u),
                                        ),
                                      }),
                                    ],
                                  }),
                                f &&
                                  (0, s.jsxs)("div", {
                                    className: e().HealthContainer,
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: e().HealthIcon,
                                      }),
                                      (0, s.jsx)("div", {
                                        className: e().HealthText,
                                        children: _.health_costs.map(
                                          (u, N) =>
                                            (N > 0 ? " / " : "") + (0, k.F)(u),
                                        ),
                                      }),
                                    ],
                                  }),
                                W &&
                                  (0, s.jsxs)("div", {
                                    className: e().CooldownContainer,
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: e().CooldownIcon,
                                        style: {
                                          backgroundImage: `url( ${m.r.IMG_URL}icons/cooldown.png )`,
                                        },
                                      }),
                                      (0, s.jsx)("div", {
                                        className: e().CooldownText,
                                        children: _.cooldowns.map(
                                          (u, N) =>
                                            (N > 0 ? " / " : "") + (0, k.F)(u),
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
                O.length > 0 &&
                  (0, s.jsxs)("div", {
                    className: e().Recipe,
                    children: [
                      (0, s.jsxs)("p", {
                        className: (0, a.A)(
                          e().RecipeLabel,
                          e().LabelFont,
                          e().LabelSmall,
                          e().LightGrayText,
                        ),
                        children: [" ", (0, i.Wn)("#templatepage_recipe"), " "],
                      }),
                      (0, s.jsxs)("div", {
                        className: e().RecipeImagesContainer,
                        children: [
                          O,
                          o &&
                            o > 0 &&
                            (0, s.jsxs)("div", {
                              className: e().RecipeCost,
                              children: [" + ", o, " "],
                            }),
                          o &&
                            o > 0 &&
                            (0, s.jsx)("img", {
                              className: e().RecipeComponentImage,
                              src: `${m.r.IMG_URL}/items/recipe.png`,
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }),
          oe = (0, S.PA)(({ patchnotes: t, heroname: l }) => {
            const r = C.B5.Get()
              .getHeroList()
              ?.heroes.find((j) => j.name.replace("npc_dota_hero_", "") == l);
            return r
              ? (0, s.jsxs)("div", {
                  className: (0, a.A)(e().HeroRework, e()[le(l)]),
                  children: [
                    (0, s.jsx)("div", {
                      className: (0, a.A)(
                        e().HeroName,
                        e().TitleFont,
                        e().TitleSmall,
                      ),
                      children: (0, i.Wn)(r.name_loc),
                    }),
                    (0, s.jsx)("div", {
                      className: (0, a.A)(
                        e().ReworkDescription,
                        e().DisplayFont,
                        e().DisplayExtraSmall,
                        e().LightGrayText,
                      ),
                      children: (0, i.Wn)(
                        "#new_frontiers_major_gameplay_hero_rework_" + l,
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className: e().HeroImageContainer,
                      children: [
                        (0, s.jsx)("div", { className: e().HeroShadow }),
                        (0, s.jsx)(K.sG, {
                          heroname: l,
                          portraitClassName: e().HeroReworkPortrait,
                          videoClassName: e().HeroReworkPortraitVideo,
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: e().HeroReworkPatchNotes,
                      children: (0, s.jsx)(H.fX, {
                        patchnotes: t,
                        heroname: l,
                        heroClassName: e().HeroReworkPatchNotesInner,
                      }),
                    }),
                  ],
                })
              : null;
          }),
          de = (t) =>
            jsxs("div", {
              className: classnames(styles.MinorFeature),
              children: [
                jsx(d, {
                  image: "templatepage/image_3_2.png",
                  additionalClassName: styles.ImageShadowSmall,
                }),
                jsxs("div", {
                  className: styles.TextBlock,
                  children: [
                    jsx("p", {
                      className: classnames(
                        styles.BlockTitle,
                        styles.LabelFont,
                        styles.LabelLarge,
                      ),
                      children: BBLocalize(t.title),
                    }),
                    jsx("p", {
                      className: classnames(
                        styles.BlockDescription,
                        styles.BodyFont,
                        styles.BodyMedium,
                      ),
                      children: BBLocalize(t.description),
                    }),
                  ],
                }),
              ],
            }),
          n = (t) =>
            (0, s.jsx)("div", {
              className: (0, a.A)(e().BugFix),
              children: (0, s.jsx)("p", {
                className: (0, a.A)(e().BodyFont, e().BodyLarge),
                children: (0, i.Wn)(t.description),
              }),
            }),
          ge = (t) =>
            jsxs("div", {
              className: classnames(
                styles.AbilityImageContainer,
                t.abilityType,
              ),
              children: [
                jsx("img", {
                  className: styles.AbilityImage,
                  src: `${ConfigDota.IMG_URL}/` + t.abilityImage,
                }),
                t.abilityHotKey &&
                  jsx("p", {
                    className: styles.AbilityHotKey,
                    children: t.abilityHotKey,
                  }),
              ],
            }),
          y = ({
            index: t,
            video: l,
            name: o,
            heroname: r,
            autoplay: j,
            onSlideIn: _,
          }) => {
            const h = (0, L.useContext)(x.Yc),
              v = (0, L.useRef)(void 0);
            return (
              (0, L.useEffect)(() => {
                function b() {
                  v && v.current && h.state.currentSlide == t
                    ? v.current.play()
                    : v && v.current && v.current.pause(),
                    h.state.currentSlide == t && _(o, r);
                }
                return h.subscribe(b), () => h.unsubscribe(b);
              }, [h, t, o, r, _]),
              (0, s.jsx)("div", {
                className: e().SlideContainer,
                children: re()
                  ? (0, s.jsx)("img", {
                      className: e().TreasureVideo,
                      src: `${m.r.VIDEO_URL}/springcleaning2025/treasure/${l}.png`,
                    })
                  : (0, s.jsxs)("video", {
                      ref: v,
                      className: e().TreasureVideo,
                      muted: !0,
                      autoPlay: j,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${m.r.VIDEO_URL}/springcleaning2025/treasure/${l}.png`,
                      children: [
                        (0, s.jsx)("source", {
                          type: "video/webm",
                          src: `${m.r.VIDEO_URL}/springcleaning2025/treasure/${l}.webm`,
                        }),
                        (0, s.jsx)("source", {
                          type: 'video/mp4; codecs="hvc1"',
                          src: `${m.r.VIDEO_URL}/springcleaning2025/treasure/${l}.mov`,
                        }),
                      ],
                    }),
              })
            );
          },
          X = (t) =>
            (0, s.jsxs)("div", {
              className: t
                ? (0, a.A)(e().SectionDivider, t)
                : (0, a.A)(e().SectionDivider),
              children: [
                (0, s.jsx)("div", { className: e().Pattern }),
                (0, s.jsx)("div", { className: e().Overlay }),
                (0, s.jsx)("div", { className: e().TopDash }),
                (0, s.jsx)("div", { className: e().BottomDash }),
              ],
            }),
          w = () =>
            (0, s.jsxs)("div", {
              className: e().SubsectionDivider,
              children: [
                (0, s.jsx)("div", { className: e().TopDash }),
                (0, s.jsx)("div", { className: e().Background }),
              ],
            }),
          _e = (t) =>
            jsxs("div", {
              className: styles.DashedSectionSubHeader,
              children: [
                jsx("div", { className: styles.DashLeft }),
                jsx("p", {
                  className: classnames(
                    styles.LabelFont,
                    styles.LabelMedium,
                    styles.Label,
                  ),
                  children: t.subHeader,
                }),
                jsx("div", { className: styles.DashRight }),
              ],
            });
        let Y = class extends L.Component {
          parallaxContainerRef = L.createRef();
          videoRef = L.createRef();
          constructor(t) {
            super(t),
              (this.state = {
                treasureName: "#springcleaning2025_treasure_hero_pudge_set",
                heroName: "#springcleaning2025_treasure_hero_pudge",
                bPlayingVideo: !1,
              });
          }
          setPlayingVideo(t) {
            this.setState({ bPlayingVideo: t }),
              t ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          handleScroll = (t) => {
            J().refresh();
          };
          componentDidMount() {
            this.parallaxContainerRef.current.addEventListener(
              "scroll",
              this.handleScroll,
            ),
              this.handleScroll(void 0);
          }
          componentWillUnmount() {
            this.parallaxContainerRef.current.removeEventListener(
              "scroll",
              this.handleScroll,
            );
          }
          convertAbilityDesc(t) {
            if (!t) return null;
            let l = t.desc_loc;
            return (
              t.special_values.forEach((o) => {
                let r =
                  o.values_float.length > 0 ? (0, k.F)(o.values_float[0]) : "0";
                (l = l.replace("%" + o.name + "%", r)),
                  (l = l.replace("%" + o.name.toLowerCase() + "%", r));
              }),
              (l = l.replace(/\%\%/g, "%")),
              (l = l.replace(/<h2>/g, "<b>")),
              (l = l.replace(/<\/h2>/g, "</b>")),
              (l = l.replace(/<h1>/g, "<b>")),
              (l = l.replace(
                /<\/h1>/g,
                `</b>

`,
              )),
              (0, i.Wn)(l)
            );
          }
          render() {
            const t = D.o.getPatchNotes("7.39", m.r.LANGUAGE);
            let l = (0, P.wwZ)((0, P.sfN)(m.r.LANGUAGE));
            return (
              l === "zh-cn"
                ? (l = "zh-Hans")
                : l === "zh-tw" && (l = "zh-Hant"),
              (0, s.jsxs)("div", {
                id: te,
                className: e().Springcleaning2025,
                children: [
                  (0, s.jsx)(R.mg, {
                    children: (0, s.jsx)("title", {
                      children: (0, i.Wn)("#springcleaning2025_website_title"),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    ref: this.parallaxContainerRef,
                    className: (0, a.A)(e().PageContainer, e().Parallax),
                    children: [
                      (0, s.jsx)(F.A, { bOverlapping: !0 }),
                      (0, s.jsxs)("div", {
                        className: (0, a.A)(e().HeaderSection),
                        children: [
                          (0, s.jsx)("div", {
                            className: (0, a.A)(e().BackgroundGradient),
                          }),
                          (0, s.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, s.jsx)(d, {
                                image:
                                  "springcleaning2025/header/header_hero.png",
                                additionalClassName: (0, a.A)(
                                  e().HeaderHeroImage,
                                ),
                              }),
                              (0, s.jsxs)("div", {
                                className: e().HeaderTextSection,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().WebsiteTitle,
                                      e().LabelFont,
                                      e().LabelLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_year",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().WebsiteTitle,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_title",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().WebsiteIntro,
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_3,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/header/gameplay.png",
                                        additionalClassName: (0, a.A)(
                                          e().HeaderFeatureImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().TitleFont,
                                              e().TitleSmall,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_abovethefold_patch_header",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_abovethefold_patch_body",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/header/treasure.png",
                                        additionalClassName: (0, a.A)(
                                          e().HeaderFeatureImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().TitleFont,
                                              e().TitleSmall,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_abovethefold_treasure_header",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_abovethefold_treasure_body",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/header/quality_of_life.png",
                                        additionalClassName: (0, a.A)(
                                          e().HeaderFeatureImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().TitleFont,
                                              e().TitleSmall,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_abovethefold_features_header",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_abovethefold_features_body",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      X(),
                      " ",
                      (0, s.jsxs)("div", {
                        id: "QualityOfLifeSection",
                        className: (0, a.A)(
                          e().WebsiteSection,
                          e().QualityOfLifeSection,
                        ),
                        children: [
                          (0, s.jsx)(d, {
                            image:
                              "springcleaning2025/backgrounds/qol_background.png",
                            additionalClassName: (0, a.A)(
                              e().SectionBackground,
                            ),
                          }),
                          (0, s.jsx)("div", { className: e().TopShadow }),
                          (0, s.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(e().WebsiteSectionHeader),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_section_header_features",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                      e().PurpleText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_section_header_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              w(),
                              " ",
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().WebsiteSectionHeader,
                                  e().FeatureHeader,
                                ),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_focus_on_hero",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_focus_on_hero_summary",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_2,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/shop/shop_team_items.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_team_items",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_team_items_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/courier/courier_auto_deliver.png",
                                        additionalClassName: (0, a.A)(
                                          e().BorderlessImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_auto_deliver",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_auto_deliver_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_2,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/shop/courier_mark_for_buy.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_quickbuy",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_quickbuy_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/shop/shop_pregame_items.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_pregame_shop",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_pregame_shop_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_3,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/shop/buyback_tooltip.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_buyback_tooltip",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_buyback_tooltip_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/shop/pregame_clarity.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_identify_yourself",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_identify_yourself_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/shop/shop_dota_context_menu.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_item_context_menu",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_item_context_menu_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().TextImageBlockHorizontal,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, s.jsx)(d, {
                                    image:
                                      "springcleaning2025/shop/shop_dota_plus_recommender.jpg",
                                    additionalClassName: (0, a.A)(
                                      e().ImageShadowMedium,
                                    ),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BlockTitle,
                                          e().LabelFont,
                                          e().LabelExtraLarge,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_features_entry_dotaplus_shop",
                                        ),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_features_entry_dotaplus_shop_desc",
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().DotaPlusBadge,
                                        children: [
                                          (0, s.jsx)("img", {
                                            src: `${m.r.IMG_URL}/icons/dota_plus.png`,
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().LabelFont,
                                              e().LabelSmall,
                                              e().GoldText,
                                            ),
                                            children: (0, i.Wn)("#dota_plus"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(),
                              " ",
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().WebsiteSectionHeader,
                                  e().FeatureHeader,
                                ),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_comms",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_comms_summary",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().InnerContainer,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: (0, a.A)(
                                      e().Grid_2,
                                      e().PingsGrid,
                                    ),
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: e().TextImageBlockVertical,
                                        children: (0, s.jsx)(d, {
                                          image:
                                            "springcleaning2025/pings/ping_example_standard.jpg",
                                          video:
                                            "springcleaning2025/pings.webm",
                                          additionalClassName: (0, a.A)(
                                            e().ImageShadowMedium,
                                          ),
                                        }),
                                      }),
                                      (0, s.jsx)("div", {
                                        className: e().TextImageBlockVertical,
                                        children: (0, s.jsx)(d, {
                                          image:
                                            "springcleaning2025/pings/ping_wheel.jpg",
                                          video:
                                            "springcleaning2025/ping_wheel.webm",
                                          additionalClassName: (0, a.A)(
                                            e().ImageShadowMedium,
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BlockTitle,
                                          e().LabelFont,
                                          e().LabelExtraLarge,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_features_entry_pings",
                                        ),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_features_entry_pings_desc",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_3,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/pings/item_pickup_effects.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_pickup_effects",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_pickup_effects_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/pings/minimap_route_display.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_minimap_route",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_minimap_route_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/pings/status_labels.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_status_labels",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_status_labels_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().InnerContainer,
                                  e().AudioQualityContainer,
                                ),
                                children: [
                                  (0, s.jsx)(d, {
                                    image:
                                      "springcleaning2025/pings/audio_quality.png",
                                    additionalClassName: (0, a.A)(
                                      e().FullWidthImage,
                                      e().AudioQualityImage,
                                    ),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BlockTitle,
                                          e().LabelFont,
                                          e().LabelExtraLarge,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_features_entry_voice_chat",
                                        ),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_features_entry_voice_chat_desc",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(),
                              " ",
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().WebsiteSectionHeader,
                                  e().FeatureHeader,
                                ),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_control",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_control_summary",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(d, {
                                image:
                                  "springcleaning2025/settings/settings_hero.png",
                                additionalClassName: (0, a.A)(
                                  e().FullWidthImage,
                                  e().SettingsHeroImage,
                                ),
                              }),
                              (0, s.jsxs)("div", {
                                className: e().TextBlock,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().BlockTitle,
                                      e().LabelFont,
                                      e().LabelExtraLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_entry_settings",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().BlockDescription,
                                      e().BodyFont,
                                      e().BodyLarge,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_entry_settings_desc",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_2,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/settings/settings_search.jpg",
                                        video:
                                          "springcleaning2025/settings_search.webm",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_settings_search",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_settings_search_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/settings/settings_new.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_new_settings",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_new_settings_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_2,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/pings/ping_customize.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_chatwheel_ui",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_chatwheel_ui_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/settings/manage_notifications.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_notifications",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_notifications_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(),
                              " ",
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().WebsiteSectionHeader,
                                  e().FeatureHeader,
                                ),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_ability_draft",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_ability_draft_summary",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(d, {
                                image:
                                  "springcleaning2025/ability_draft/ability_draft_hero.png",
                                additionalClassName: (0, a.A)(
                                  e().FullWidthImage,
                                  e().ADHeroImage,
                                ),
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_3,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/ability_draft/ability_draft_hero_drafting.png",
                                        additionalClassName: (0, a.A)(
                                          e().BorderlessImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_heroes",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_heroes_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/ability_draft/ability_draft_facets.png",
                                        additionalClassName: (0, a.A)(
                                          e().BorderlessImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_facets",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_facets_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/ability_draft/ability_draft_cleanup.png",
                                        additionalClassName: (0, a.A)(
                                          e().BorderlessImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_cleanup",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_cleanup_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              w(),
                              " ",
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().WebsiteSectionHeader,
                                  e().FeatureHeader,
                                ),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_everything_else",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_group_everything_else_summary",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_2,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/performance/performance.png",
                                        additionalClassName: (0, a.A)(
                                          e().BorderlessImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_perf",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_perf_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/graphs/graphs_player_damage.png",
                                        additionalClassName: (0, a.A)(
                                          e().BorderlessImage,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(e().TextSection),
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_graphs",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_graphs_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().Grid_3,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/cornucopia/arcana_mvp_backgrounds.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_arcana_mvps",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_arcana_mvps_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/cornucopia/dead_neutral_creeps.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_this_bug_is_old_enough_to_drive",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_this_bug_is_old_enough_to_drive_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, s.jsx)(d, {
                                        image:
                                          "springcleaning2025/cornucopia/vector_snapping.jpg",
                                        additionalClassName: (0, a.A)(
                                          e().ImageShadowMedium,
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_vector_targeting",
                                            ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: (0, a.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, i.Wn)(
                                              "#springcleaning2025_website_features_entry_vector_targeting_desc",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().InnerContainer,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().BlockTitle,
                                      e().TitleFont,
                                      e().TitleMedium,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_features_entry_everything_else_else",
                                    ),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: (0, a.A)(
                                      e().BugfixListContainer,
                                    ),
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BugFixCategoryTitle,
                                          e().LabelFont,
                                          e().LabelMedium,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_bugfix_general",
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(
                                          e().BugfixListColumn,
                                        ),
                                        children: [
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix1",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix2",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix3",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix4",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix5",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix6",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix7",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix8",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix9",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix10",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix11",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix12",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix13",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix14",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix15",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix16",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix17",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix18",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix19",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfixScan",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix20",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix21",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix22",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix23",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix24",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix25",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix26",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().InnerContainer,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().BlockTitle,
                                      e().TitleFont,
                                      e().TitleMedium,
                                    ),
                                    children: (0, i.Wn)("Bug fixes"),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: (0, a.A)(
                                      e().BugfixListContainer,
                                    ),
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BugFixCategoryTitle,
                                          e().LabelFont,
                                          e().LabelMedium,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_bugfix_general",
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(
                                          e().BugfixListColumn,
                                        ),
                                        children: [
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix31",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix32",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix33",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix54",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix55",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix56",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix58",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix59",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix60",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix61",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix62",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix63",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix64",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix65",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix66",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix67",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix68",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix69",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix70",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix71",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix72",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix73",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix74",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix75",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix76",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix77",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix78",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix79",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix80",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: (0, a.A)(
                                      e().BugfixListContainer,
                                    ),
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BugFixCategoryTitle,
                                          e().LabelFont,
                                          e().LabelMedium,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_bugfix_plus_relics",
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(
                                          e().BugfixListColumn,
                                        ),
                                        children: [
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix35",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix36",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix37",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix38",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix39",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix40",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix41",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix42",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix43",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix44",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix45",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix46",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix47",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix48",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix49",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix50",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix51",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix52",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix53",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: (0, a.A)(
                                      e().BugfixListContainer,
                                    ),
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: (0, a.A)(
                                          e().BugFixCategoryTitle,
                                          e().LabelFont,
                                          e().LabelMedium,
                                        ),
                                        children: (0, i.Wn)(
                                          "#springcleaning2025_website_bugfix_tooltips",
                                        ),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, a.A)(
                                          e().BugfixListColumn,
                                        ),
                                        children: [
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix82",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix83",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix84",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix85",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix86",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix87",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix88",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix89",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix90",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix91",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix92",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix93",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix94",
                                          }),
                                          (0, s.jsx)(n, {
                                            description:
                                              "#springcleaning2025_website_bugfix95",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(d, {
                            image:
                              "springcleaning2025/backgrounds/spring_leaves_footer.png",
                            additionalClassName: (0, a.A)(e().FooterImage),
                          }),
                        ],
                      }),
                      X(),
                      " ",
                      (0, s.jsxs)("div", {
                        id: "TreasureSection",
                        className: (0, a.A)(
                          e().WebsiteSection,
                          e().TreasureSection,
                        ),
                        children: [
                          (0, s.jsx)("div", {
                            className: e().TreasureBackground,
                          }),
                          (0, s.jsx)("div", { className: e().TopShadow }),
                          (0, s.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, s.jsxs)("div", {
                                className: e().WebsiteSectionHeader,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionSubHeaderLabel,
                                      e().LabelFont,
                                      e().LabelMedium,
                                      e().GrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_treasures_label",
                                    ),
                                  }),
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_treasures_subheader",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().WebsiteDescription,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_treasures_subheader_desc",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(x.gi, {
                                className: e().TreasureCarousel,
                                naturalSlideWidth: 600,
                                naturalSlideHeight: 960,
                                totalSlides: 11,
                                currentSlide: 7,
                                infinite: !0,
                                touchEnabled: !0,
                                dragEnabled: !1,
                                children: [
                                  (0, s.jsxs)(x.Ap, {
                                    className: e().TreasureSlider,
                                    children: [
                                      (0, s.jsx)(x.q7, {
                                        index: 0,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 0,
                                          video: "set_spiritbreaker",
                                          name: "#springcleaning2025_treasure_hero_spiritbreaker_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_spiritbreaker",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 1,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 1,
                                          video: "set_antimage",
                                          name: "#springcleaning2025_treasure_hero_antimage_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_antimage",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 2,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 2,
                                          video: "set_luna",
                                          name: "#springcleaning2025_treasure_hero_luna_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_luna",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 3,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 3,
                                          video: "set_invoker",
                                          name: "#springcleaning2025_treasure_hero_invoker_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_invoker",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 4,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 4,
                                          video: "set_necrophos",
                                          name: "#springcleaning2025_treasure_hero_necrophos_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_necrophos",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 5,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 5,
                                          video: "set_huskar",
                                          name: "#springcleaning2025_treasure_hero_huskar_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_huskar",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 6,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 6,
                                          video: "set_axe",
                                          name: "#springcleaning2025_treasure_hero_axe_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_axe",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 7,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 7,
                                          video: "set_pudge",
                                          name: "#springcleaning2025_treasure_hero_pudge_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_pudge",
                                          autoplay: !0,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 8,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 8,
                                          video: "set_earthshaker",
                                          name: "#springcleaning2025_treasure_hero_earthshaker_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_earthshaker",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 9,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 9,
                                          video: "set_sandking",
                                          name: "#springcleaning2025_treasure_hero_sandking_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_sandking",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(x.q7, {
                                        index: 10,
                                        className: e().TreasureSlide,
                                        innerClassName: e().TreasureInnerSlide,
                                        classNameHidden:
                                          e().TreasureSlideHidden,
                                        children: (0, s.jsx)(y, {
                                          index: 10,
                                          video: "set_lion",
                                          name: "#springcleaning2025_treasure_hero_lion_set",
                                          heroname:
                                            "#springcleaning2025_treasure_hero_lion",
                                          autoplay: !1,
                                          onSlideIn: (o, r) => {
                                            this.setState({
                                              treasureName: o,
                                              heroName: r,
                                            });
                                          },
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().HeroName,
                                      e().LabelFont,
                                      e().LabelSmall,
                                    ),
                                    children: (0, i.Wn)(this.state.heroName),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().TreasureName,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                    ),
                                    children: (0, i.Wn)(
                                      this.state.treasureName,
                                    ),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: e().CarouselDots,
                                    children: [
                                      (0, s.jsx)(x._X, {
                                        className: (0, a.A)(
                                          e().TreasurePaginationButton,
                                          e().Prev,
                                        ),
                                        children: (0, s.jsx)("div", {
                                          className: e().PrevArrow,
                                        }),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 0,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 1,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 2,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 3,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 4,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 5,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 6,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 7,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 8,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 9,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.cL, {
                                        className: e().TreasureSelector,
                                        slide: 10,
                                        children: (0, s.jsx)("div", {}),
                                      }),
                                      (0, s.jsx)(x.CC, {
                                        className: (0, a.A)(
                                          e().TreasurePaginationButton,
                                          e().Next,
                                        ),
                                        children: (0, s.jsx)("div", {
                                          className: e().NextArrow,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      X(),
                      " ",
                      (0, s.jsxs)("div", {
                        id: "GameplayUpdateContainer",
                        className: (0, a.A)(
                          e().WebsiteSection,
                          e().GameplayUpdateContainer,
                        ),
                        children: [
                          (0, s.jsx)("div", { className: e().TopShadow }),
                          (0, s.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, s.jsxs)("div", {
                                className: e().WebsiteSectionHeader,
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_section_header_patch",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              w(),
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(e().WebsiteSectionHeader),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_hero_highlights",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_hero_highlights_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(
                                  e().Grid_3,
                                  e().HeroHighlightsContainer,
                                ),
                                children: [
                                  (0, s.jsx)(Z, {
                                    nHeroID: 51,
                                    strFacetName: "Chainmeal",
                                    strScale: "0.95",
                                    strTranslateX: "-3%",
                                    strTranslateY: "2%",
                                    patchnotes: t,
                                  }),
                                  (0, s.jsx)(Z, {
                                    nHeroID: 53,
                                    strFacetName: "Nature's Profit",
                                    strScale: "1.2",
                                    strTranslateX: "6%",
                                    strTranslateY: "-7%",
                                    patchnotes: t,
                                  }),
                                  (0, s.jsx)(Z, {
                                    nHeroID: 114,
                                    strFacetName: "Changing of the Guard",
                                    strScale: "1.2",
                                    strTranslateX: "-13%",
                                    strTranslateY: "1%",
                                    patchnotes: t,
                                  }),
                                ],
                              }),
                              (0, s.jsx)(d, {
                                image:
                                  "springcleaning2025/DOTA_7_39_hero_highlights.jpg",
                                video:
                                  "springcleaning2025/DOTA_7_39_hero_highlights.mp4",
                                additionalClassName: (0, a.A)(
                                  e().FullWidthImage,
                                  e().ImageShadowMedium,
                                ),
                              }),
                              w(),
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(e().WebsiteSectionHeader),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_terrain_highlights",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_terrain_highlights_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: (0, a.A)(e().ComparisonContainer),
                                children: (0, s.jsxs)(T.U, {
                                  labels: ["1", "2", "3", "4", "5", "6"],
                                  children: [
                                    (0, s.jsx)(M.EW, {
                                      itemOne: (0, s.jsx)(T.v, {
                                        is_new: !0,
                                        image:
                                          "springcleaning2025/terrain/old/01.jpg",
                                      }),
                                      itemTwo: (0, s.jsx)(T.v, {
                                        is_new: !1,
                                        image:
                                          "springcleaning2025/terrain/new/01.jpg",
                                      }),
                                    }),
                                    (0, s.jsx)(M.EW, {
                                      itemOne: (0, s.jsx)(T.v, {
                                        is_new: !0,
                                        image:
                                          "springcleaning2025/terrain/old/02.jpg",
                                      }),
                                      itemTwo: (0, s.jsx)(T.v, {
                                        is_new: !1,
                                        image:
                                          "springcleaning2025/terrain/new/02.jpg",
                                      }),
                                    }),
                                    (0, s.jsx)(M.EW, {
                                      itemOne: (0, s.jsx)(T.v, {
                                        is_new: !0,
                                        image:
                                          "springcleaning2025/terrain/old/03.jpg",
                                      }),
                                      itemTwo: (0, s.jsx)(T.v, {
                                        is_new: !1,
                                        image:
                                          "springcleaning2025/terrain/new/03.jpg",
                                      }),
                                    }),
                                    (0, s.jsx)(M.EW, {
                                      itemOne: (0, s.jsx)(T.v, {
                                        is_new: !0,
                                        image:
                                          "springcleaning2025/terrain/old/04.jpg",
                                      }),
                                      itemTwo: (0, s.jsx)(T.v, {
                                        is_new: !1,
                                        image:
                                          "springcleaning2025/terrain/new/04.jpg",
                                      }),
                                    }),
                                    (0, s.jsx)(M.EW, {
                                      itemOne: (0, s.jsx)(T.v, {
                                        is_new: !0,
                                        image:
                                          "springcleaning2025/terrain/old/05.jpg",
                                      }),
                                      itemTwo: (0, s.jsx)(T.v, {
                                        is_new: !1,
                                        image:
                                          "springcleaning2025/terrain/new/05.jpg",
                                      }),
                                    }),
                                    (0, s.jsx)(M.EW, {
                                      itemOne: (0, s.jsx)(T.v, {
                                        is_new: !0,
                                        image:
                                          "springcleaning2025/terrain/old/06.jpg",
                                      }),
                                      itemTwo: (0, s.jsx)(T.v, {
                                        is_new: !1,
                                        image:
                                          "springcleaning2025/terrain/new/06.jpg",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              w(),
                              (0, s.jsxs)("div", {
                                className: (0, a.A)(e().WebsiteSectionHeader),
                                children: [
                                  (0, s.jsx)("h2", {
                                    className: (0, a.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_neutral_highlights",
                                    ),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, a.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, i.Wn)(
                                      "#springcleaning2025_website_gameplay_neutral_highlights_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: e().GameItemsContainer,
                                children: [
                                  (0, s.jsx)(I, { name: "item_dormant_curio" }),
                                  (0, s.jsx)(I, { name: "item_kobold_cup" }),
                                  (0, s.jsx)(I, {
                                    name: "item_sisters_shroud",
                                  }),
                                  (0, s.jsx)(I, {
                                    name: "item_jidi_pollen_bag",
                                  }),
                                  (0, s.jsx)(I, {
                                    name: "item_dezun_bloodrite",
                                  }),
                                  (0, s.jsx)(I, { name: "item_giant_maul" }),
                                  (0, s.jsx)(I, {
                                    name: "item_outworld_staff",
                                  }),
                                  (0, s.jsx)(I, {
                                    name: "item_divine_regalia",
                                  }),
                                ],
                              }),
                              w(),
                              (0, s.jsx)("div", {
                                className: (0, a.A)(
                                  e().WebsiteSectionHeader,
                                  e().FeatureHeader,
                                ),
                                children: (0, s.jsx)("h2", {
                                  className: (0, a.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleLarge,
                                  ),
                                  children: (0, i.Wn)(
                                    "#springcleaning2025_website_gameplay_patchnotes",
                                  ),
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: e().PatchnotesContainer,
                                children: [
                                  (0, s.jsx)(H.fs, {
                                    patchnotes: t?.general_notes,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, s.jsx)(H.wL, {
                                    patchnotes: t?.neutral_creeps,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, s.jsx)(H.ZV, {
                                    patchnotes: t?.items,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, s.jsx)(H.ZV, {
                                    patchnotes: t?.neutral_items,
                                    is_neutrals: !0,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, s.jsx)(H.ob, {
                                    patchnotes: t?.heroes,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(z.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Y = se([S.PA], Y);
      },
      85655: (A) => {
        A.exports = {
          Tooltip: "_19T9N3UHHbAODE9sxxoLtb",
          CarouselFade: "_D1I4Yzr_NSlA70n0WMzr",
          StandardButton: "mgvs9cPEYOJ3Q9r1J6Xvv",
          ButtonText: "_2MUkIuEbGuL6NdEm21Eoz9",
          Icon: "_2dDXk1s2V92ElJmDhv4kOC",
          Play: "_1ZhvqFTdNClE1GSKe9lIwC",
          SteamLogo: "_2GSNhjmGVrkHS1HRhAYMiS",
          ToolTip: "S2816E7lw3xwpK0fpEU9j",
          PlayerReportTooltip: "_3UgI1sTrl6KyLY4GdZpwRz",
          ComparisonImage: "_3SX3hhAHRpb7bRPg9YLyR2",
          ImageLabel: "_3bKKQTvBpbxJ08XrDQJ4xn",
          IsNew: "S0b_nhi5aY46bpyCNasDF",
          TabbedMapComparison: "_3o6_Ks0vSIsM1b7E9OlHj",
          TabHeader: "_2kgUPa_RFGPVkckZE2a7ab",
          Tab: "_1wY4IE4Lg3TreYGTu1DSxd",
          Active: "ZBQE3qlmuiEadHG7T6gCw",
          TabContents: "_15E7RnjZvLS7TPcNOg_MN8",
          TabContentContainer: "_2tKRoICKxcJBUHYRH5k9JZ",
        };
      },
      13837: (A) => {
        A.exports = {
          Tooltip: "Fx-uDHxSYrhU7sUg5BaTa",
          CarouselFade: "Rzy5AZOuCpdfH_J53qh67",
          StandardButton: "_2MMe03tv2eGzSU_56VNdwC",
          ButtonText: "_6hj-5GY-ZYpwK-dkkad3t",
          Icon: "_1B6-U65kWofgKu3vrmMA6V",
          Play: "gzox2PyXPi-g-xGssaE-s",
          SteamLogo: "_5f4KMuXaFJ2aBt78V6dbX",
          ToolTip: "_3w2JFqkaHjsCJVnSZzMNF4",
          PlayerReportTooltip: "_1T2vso-IndU_kZL3l8G7ZJ",
          Facet: "_2HcPTYK1pLftmdMdeH7int",
          FacetColorRed0: "_1SSNLQA4EDZhhUwKlynhjX",
          BackgroundTexture: "_12QeGzD9q64QUnUo1ix_oh",
          FacetColorRed1: "_2ouOrKvZIAYgHjgcbf7e3m",
          FacetColorRed2: "_39d643kMV8S3-ivTdIfMWW",
          Background: "_1SEg41sTeDAIjTMBfY3Ntu",
          FacetColorYellow0: "mw-z4zPWqwZn9jpGbqGuX",
          FacetColorYellow1: "_14qOBcN8LRedY3gzBal2KZ",
          FacetColorYellow2: "W3eYS9TTVOPD42DrgRODO",
          FacetColorYellow3: "_6UYAz2WtWHU4_F7rhU_Jh",
          FacetColorGreen0: "i1wPcNA3Iom35vG7R7n_l",
          FacetColorGreen1: "_27cHAW0w57_V1n2-zk8I4Z",
          FacetColorGreen2: "_1hCmdMRRGU4vRrlJSWjDbj",
          FacetColorGreen3: "_1ewgq5r__SksDZG414DsZ3",
          FacetColorGreen4: "_2muCdUWF3gKiDgqxCPwByL",
          FacetColorBlue0: "_2b2zadjcEPEb7zdXYzvBFf",
          FacetColorBlue1: "_2AHW4nSqYXV8aVOBDXlIhw",
          FacetColorBlue2: "_3cX6AgFa78xlFoj0i32XOT",
          FacetColorBlue3: "_1yC70MtEbZ9NqGWXRwbdPW",
          FacetColorPurple0: "_1BQW-oAAGhJcIB5aN7BJgi",
          FacetColorPurple1: "_2s3NaEhnqLV2Ai3z_tdPa0",
          FacetColorPurple2: "_1Y6nt9r85XfK8ylRz6DP3m",
          FacetColorGray0: "_2aeXdH3lV15LkRVAdM21xw",
          FacetColorGray1: "_3VOPSvIg_HMhn7_85Bn-Yl",
          FacetColorGray2: "_1aDkkMJ72UbjD7KMVt_Mmg",
          FacetColorGray3: "RNu52qP5W7ZE6KNzElxmk",
          HeroHighlight: "_14j_dBntS0skxqDQl6JIHZ",
          HeroHighlightBorder: "_2_bFjwnCy94UB8ESW6h02_",
          HeroHighlightVideoContainer: "wgZxK5Mau7_fqsk8MRvpI",
          HeroHighlightFloorShadow: "_38fuvlzY60potYq4-1j8gN",
          HeroHighlightVideo: "_3sxZrdfcwu3iUjBsWdaxzf",
          FacetsContainer: "_3Ccsd4jD0cWZKSL29sma6h",
          HeroNameInfoContainer: "_3IshIWHHu5pF1KyWCWw4R-",
          HeroName: "_2Dt9D8RLXUFdyCx7j5AtGw",
          HighlightTitle: "_1DEJjNhomN2wUmYc1yi0aC",
          NewBorder: "_1xWynSiVO_31VJ6dQ_Yvgi",
          NewBadge: "_1W63911_vFtDnxfUaSeQ52",
          ReworkedBorder: "gfkPyjbhENxeijOw6CWyO",
          ReworkedBadge: "_2yYZg4dQUtbtlk57zc4IZy",
          NewFacet: "_3i4M2u2xF5mpf_gWpVb0Mu",
          ReworkedFacet: "_3Dvmo3jVH20wDuri42JtmN",
          FacetHeader: "_3olLxif89i5XShneDQr30m",
          HeaderContents: "pzn6Ka3F0z4J4vN_3yuBJ",
          IconContainer: "_2djFc86ivnduBfmQ1-v_Bm",
          IconBackground: "_2WcLXloyQqbS9E2FzJDUMn",
          IconWash: "djfgHhWm7XDq8gtizN8EK",
          Name: "_3FGHET_UhQcHCQJQSxXY5g",
          FacetBodyFiller: "_3xJpTjVaEM3a2n8Vq_JPEb",
          FacetNotes: "_3U3PM5fb2QMDP2h391ToET",
          FacetNote: "_1rU6dqtBRI5MX3aaSWEOep",
          Dot: "_1-Xw5jD8pIQWXt8LfyZyJ4",
          IsHidden: "SBusVCAWWInsR2iIPgyGF",
          FacetAbilities: "_3SCWwzTBt13zBzM87raEPo",
          FacetAbility: "_1fziltzTM5pJQelkUGfOk-",
          AbilityIcon: "_3fQCAlH1TM02ofIpQVM6M3",
          RightSide: "_1FyT6Tamh9R4Er6Xj3U0WC",
          AbilityName: "_24PyFaa-LjT9Zi22j6DqW6",
          AbilityNote: "_2Mjym6KRIwuoDRcUc5rV0f",
          FacetTalentNotes: "_1_RKX-o378pXZ_poj92zBV",
          TalentImage: "_39shVdNj0_7qNNABrp4ubc",
          NoteElement: "_24hmCy5Tx3Xhoaq-320uv9",
          Note: "_4KurQbwTz3ndBBdQl9bzc",
        };
      },
      26942: (A) => {
        A.exports = {
          Tooltip: "_3zf-ziwgz2rcHjk1c5cqne",
          CarouselFade: "_28KWLguZzXjTGGFfz_gO-t",
          StandardButton: "lmVbA57qNDgAp5l53bv8c",
          ButtonText: "_3jqlDlfvvY61aOW-QqKkxO",
          Icon: "_15pkl_ifEp1T78Ygu4j94h",
          Play: "_21I4lYW5k68DyAYsDQsGAj",
          SteamLogo: "_1trtyG4RWYNvLGs3ufnxNR",
          ToolTip: "_22kpKfoADDG261HLF1Q-_H",
          PlayerReportTooltip: "i7fMUYnChafEExl6NyDPw",
          TitleFont: "_2u5KnD3wmD62UzBtQp17pE",
          TitleExtraLarge: "-UQCPn23i8xJBxizWxKBC",
          TitleLarge: "OrFBXkqcpkUMmsI09TonK",
          TitleMedium: "_32sEiP8mQJtKMTOtf_uUN0",
          TitleSmall: "j3iMgmtEaYRNCzNboBieI",
          TitleExtraSmall: "kREyv_maSm8yS2K1lI5x0",
          DisplayFont: "_1c4ZT7UXV0PJC0PWhd0CWk",
          DisplayExtraLarge: "_1qTqi7SzzimAZYgzm3rTQG",
          DisplayLarge: "XakfDOwYZw9Z971bYUCux",
          DisplayMedium: "_2XfSRnvbP4Kr7dn2_cD5gi",
          DisplaySmall: "VTdaSiwbr21h1AkNW8C9e",
          BodyExtraLarge: "xfSYWFCattT8eEhBgWzUx",
          BodyLarge: "_18vIqb2Rw6SMkhXolZ21rX",
          BodyMedium: "_2ZIgFwAf4aEws9n1eUOTHz",
          BodySmall: "b-DBbJUPiIV_TBg30-Nlc",
          LabelFont: "_1rz1Hgjdr4VON87M9do5s3",
          LabelExtraLarge: "Fz9pOCvjvRluEJqLVPsJn",
          LabelLarge: "_10GZok66s9AYv27Ph8s06y",
          LabelMedium: "_1H6PgymyCIM19T5ABDyF2h",
          LabelSmall: "_2z5EtM7yLarKrDpVvlVhTy",
          ControlIcon: "_2LAwqqe1tjDBhvqbBFp-f9",
          SectionBackgroundImage: "_2cfD-IuDYBLgEzZZWMvMue",
          ImageShadowMedium: "_3RqGLjQr00TKvRozRQ-PTW",
          ImageShadowSmall: "_3vPe54VNAiLtJv55jZBPb5",
          PageContainer: "HC_MZYQwVIDG5wy5vgn_4",
          Hidden: "_27dRCFArSyC6aHmrJLvDeq",
          Springcleaning2025: "beOjDjD9c13jcSbLN8lIY",
          MobileOnly: "_3jjaumYBEdUU0q4aasTosj",
          HeroRole: "_1qR1_otubCGWi-qhKQUyLK",
          TreasureName: "lCYD0X3XgSB0Z7AGxAvfQ",
          HeroName: "ec-dbLu0ZX4iAypxcUKE4",
          DisplayExtraSmall: "opzHw5pd02icXCcFTS3EK",
          ReworkHighlight: "_2VcmEzdCzdJM7U_k5BsmPF",
          LightGrayText: "_25b4968l564w1aKgzuRp9w",
          GrayText: "_1f1qEoJCkSFKH7Xj14cYZ5",
          PurpleText: "_1al2Uun8-f9aIZTpojymxW",
          GoldText: "_374eLQ-ad1f2EsImXevf3Z",
          BodyFont: "ygDv3TYULhdanwMBbomI2",
          WebsiteSection: "dcIHySIMcOm0VhIv8u2GG",
          WebsiteSectionInner: "_3k0-_dfGiKpDf6DZu_1ChJ",
          InnerContainer: "_3VyGDo3SfclJ5Cds1jYxym",
          WebsiteSectionHeader: "_1B6g0WsbOrkxky0WQwU057",
          TextSection: "_1UCREzJZRKqVMbwOeB4Qu_",
          SubsectionDivider: "h-9DtHVxdbMZvFxuoDmMa",
          TopDash: "nq8BykjQoTu83N_XHDOpm",
          Background: "_1qGOPupBRi04bhcsIUbjgn",
          SectionDivider: "_1UlbbaoZNW96PsiW9M7V_E",
          Pattern: "_1oHHIrr_HvXSlW5r_yLpTt",
          Overlay: "U8bkh-sBehUVKjAE9tx_U",
          BottomDash: "_3HtSLeC-qRdNokjZ04D4-8",
          ButtonsSection: "_3toCp38lICmYPcp_bKzOjU",
          Grid_4: "_2gDrSoOSTX7-R-NI7m9_Cx",
          Grid_3: "if3SQEmEMP23a_KEmXYFx",
          Grid_2: "_2SeAYdCSODopZM4gHwcOT-",
          PingsGrid: "EFMOFGJHbkB0xEwsTGp_o",
          TextImageBlockVertical: "_2kAxU-4tzaBnhCZE1TA06k",
          TextBlock: "_2S3PHDZgXFpHPlK2q0BAaK",
          TextImageBlockHorizontal: "_3xskdSIJE_PmijVmkH1Ohy",
          Flipped: "_3XxcVyacSMmDGmqC46jtX2",
          NarrowImage: "_2M56O1IODcUVAlPxfRThaU",
          WideImage: "_3M4aZBRLsqWhcoauvrlw7C",
          FullWidthImage: "_1RxFrziYgJZSH1Nss0_mCc",
          ActionTextImageBlock: "_17TIgBMRoinBHV3AEDWmVj",
          ActionImage: "LLrtYGAdb_Z66yIiCroFy",
          HeroReworkContainer: "-NLnQXXW5DkK87UkOiUx8",
          HeroRework: "_1x8LUifru6KmUTO0b0UuLn",
          ReworkDescription: "_1ynJPnzJMlvkO09LmsrKxn",
          HeroImageContainer: "_3kNCCe-9gxpt2ABWRq8xB1",
          HeroShadow: "_3FXpNWXaSRaL8CinLADowp",
          HeroReworkPortrait: "Z9nj8XE2ZpmWF920m3IqM",
          HeroReworkPortraitVideo: "QndJgMVXHfiKESFx2rtOJ",
          HeroReworkPatchNotes: "_2I02Opei6r-4YnMc_YFIl9",
          Muerta: "_2Y__fa31PD2uftri-qdP7I",
          Clinkz: "_1uIsLf0qYZfQgSWMLF7YaK",
          ArcWarden: "_3fgmXQTf95mqw2XcggyPYD",
          ImmersiveTextImageBlock: "_TyvL-UofaHezS-WFVp1E",
          DashedSectionSubHeader: "_2uyHCdUZfWdkTPv4Aiu6gH",
          Label: "rwPSyoNBZc767Wca9IIpe",
          DashLeft: "JSgCmEJn32SODL1j-2VP7",
          DashRight: "_1IA4ub5GBiQtoyGFB4Bmuk",
          AbilityImageContainer: "_3SgaGNENZY91haXpYDsRdE",
          AbilityImage: "_2W6DMxs3nhEDRoJXuwhhst",
          AbilityHotKey: "_3Q1SrXf9A0YtSfsqotkaeq",
          Active: "MYmyIEjDz0udNyUaGWxvY",
          DotaPlusBadge: "_3n0loZKZmEJghssPseJ25X",
          HeaderSection: "zFJHUd9D_nk-ChbfuhgXz",
          BackgroundGradient: "liVHnvWClbHMwejWXxQ88",
          HeaderHeroImage: "_5lCRXwI2a0AhTRqCqJlZN",
          HeaderFeatureImage: "_1qvqB3WNJUqev4KNFE2Z0X",
          HeaderTextSection: "_3Oa_MJMYkSnwiA2nOo6eWT",
          WebsiteIntro: "_38DrmsyqNCTMojg2h8gUXP",
          TreasureSection: "_38P6aQeLEBE5J00FIx0RGz",
          TreasureBackground: "_1u0NG_8EuU3ELFiT6W3KV",
          TopShadow: "_1aBxbEEuJSnwQ5KxIeKH9t",
          TreasureCarousel: "_2nverfs8Hl5OBII4Wy4Bnn",
          TreasureSlider: "_3dJw5gHPYFTfJkNZhJSjbH",
          TreasureSlide: "_1oe8Zg4Zudko_2_xptgeER",
          SlideContainer: "_3Wo8LbEWu87k5dzbjO28qZ",
          TreasureSlideHidden: "_3FFeCWoYcZ_FTPMGRepeY-",
          CarouselDots: "_3Kft36oavyKPZ3fPlbcjfP",
          TreasureSelector: "JsgG8AhyB36Xi69U1HlFZ",
          TreasurePaginationButton: "_3ukunJLKZZYdR8vHFbyEXv",
          Prev: "_3fN-T_2UsHHH02mIqwOr4k",
          Next: "_1zRsHsSa-KkUBV2KA5CaWH",
          NextArrow: "_3O8kmKYesGA9fO8D3hDHYt",
          PrevArrow: "_3Ny-Ttxlr6cUmVCE9L_IuX",
          GameplayUpdateContainer: "_1ut6v5cgWBazycQqNoNk3h",
          PatchnotesContainer: "hh1nc48kX0ciM4zeMDdEW",
          PatchNotesHeaderLabel: "_1RQyF2eMiRgiryxlbR7Kos",
          MiscSection: "R9bEwz8Bp2dKtnj4-ooEl",
          UpdatesSection: "_1m4EfOTm57VMgOUD_8di9C",
          GameItemsContainer: "_1sBeAVDWEzemSRJ4BpeGz_",
          GameItemDetails: "_-7GQAa_4IZU5H1UhFegbd",
          ItemBorder: "_1oYLCpb-LNvI_vfS-6D1MA",
          HeaderContainer: "_3-ySSqT7DC8llzFrlXcjRz",
          HeaderTierColor: "_1E9391cOqD2i6l64Jpqedy",
          Tier1: "_2VQtpIDpQ6w22bLG8KOCML",
          Tier2: "_1fvGnZMpBSF0tzLkLPpL2n",
          Tier3: "_3yu5djqYq121Peizf56DTu",
          Tier4: "_6IOmIcmvqVOC9LMZzyou-",
          Tier5: "_2ucHUdtRQHc4ZilVb8WKlQ",
          Header: "gwV88LcsNcMq-50WVpqZn",
          ItemImage: "_2c4tduzkmwTMln9ENFgXsc",
          HeaderText: "_3IgM3enPUnz0XtlvMlXQR1",
          ItemName: "_2PkkTcXv-WqjUfolJPnm_g",
          GoldPrice: "_2TWG_It4lNuxfU9MB3rIWn",
          GoldIcon: "_3-UKazJJJaej3EFwnKii1b",
          NeutralItemTier: "_3ZeLHRdOHkKNhciYs6GJpe",
          Body: "_3SiZOY8un83UvZkFdhsYdr",
          Stats: "_1a8MBoSjOWST1fwQ4R98mS",
          Stat: "_35-AS6HiZTJdcHddL_IbTc",
          SingleValue: "mvrMNClDTNxbSjcVRCUzd",
          DescriptionContainer: "_2-O-I13jxKWQTLmqffVEqr",
          Description: "_1kQS6njHTUQ5RRZo5zSx8Q",
          DescriptionHeader: "_2WnOKi4-2edWniyV0z2J0e",
          CooldownContainer: "_3vpIOhJiU1WJScPUXnn2qe",
          CooldownIcon: "CTnv-zs-2ou3WBPu8mmAK",
          CooldownText: "_1a0WWINOcn7TM6lcHXXPOM",
          ManaContainer: "_3xv9yCnsByFG3fjPZea_FG",
          ManaIcon: "_1ePZXD3SHUC5Im-P2_zCLj",
          ManaText: "_1d40A1VHm-i7Jgw3aw6g9M",
          HealthContainer: "_3y4oGpTo5XmhjwTQgtB_Ms",
          HealthIcon: "_35E4iBFv86GYwhRsTpRBHA",
          HealthText: "_1w0dMSkQizStodSUbjNIi7",
          Lore: "_3wwIAK7bIHIGP0VGnT9uh3",
          Recipe: "_3OWPkSl87hPqWKDy96uAvn",
          RecipeLabel: "_28hKfoPtMuRK0uuZC0n0wB",
          RecipeImagesContainer: "rGUIWPPW8w1lgL3zTscAk",
          RecipeComponentImage: "pu2EH00leKUEdzU1Qa6fd",
          RecipeCost: "_30Gzfpc4onpjqpJZg7vGfT",
          AudioQualityContainer: "gX9woh7uYwkrtJA-bORMZ",
          AudioQualityImage: "_1Pif1aA5TktfrgFwUacEYI",
          QualityOfLifeSection: "_9rBN7xJvQn3AkW4CWeWsM",
          SectionBackground: "_1Gedjp4z_Qx18HVp1taiti",
          BorderlessImage: "_12CdB6s1N_sEsU6iHH_wKL",
          SettingsHeroImage: "_18voGWpb4PWWIRvpDWkQjL",
          ADHeroImage: "_1tGqDaNi2hMcNFwPWNcEmo",
          PingsHeroImage: "Ojen68OqCjvKVqoVpUvR8",
          FooterImage: "lnzWwT78zc84bOCPRdKwV",
          MinorFeatureListContainer: "_2Zh_sBSNT3qp9RpzfXGrmw",
          MinorFeatureListColumn: "_2hEGWMa11ag2fTZVjMMxlk",
          MinorFeature: "tanqT8Py9IwVqY5V0Kl4_",
          BugfixListContainer: "_1_wDzcX6UH8QxoELnmr1Dx",
          BugFixCategoryTitle: "_3FRVv_DRRo-evEvdL6zxHS",
          BugfixListColumn: "_2qYCIUbQrdDJUkzbk8CfRS",
          BugFix: "_39JQIzmAxW8Es3wrCHWHZl",
          GameplayHighlightsSection: "_2qi4eYmQtyNtgZiPVoXb7",
          ItemFXBlock: "_1tjRCp4KPvOr6KKjQ3Tgnc",
          HeroHighlightsContainer: "_1jUHEXdS3MVXuoFkIY3gKV",
          ComparisonContainer: "WiwosNK5llBmLWxGBcecc",
          MinorImprovementsSection: "_22x4nz-BATSQjXm-lU_WT-",
          TreasurePreviewSection: "AATdy0wweXe0_oGKTkL0E",
        };
      },
    },
  ]);
})();
