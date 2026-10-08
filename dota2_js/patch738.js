// 33027.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [33027],
    {
      33883: (D, A, l) => {
        "use strict";
        l.d(A, { U: () => s, v: () => b });
        var a = l(69500),
          p = l(7552),
          f = l(85655),
          t = l.n(f),
          T = l(15001),
          j = l(2095),
          S = l(8305);
        const b = ({ image: L, is_new: v }) =>
            (0, a.jsxs)("div", {
              className: t().ComparisonImage,
              children: [
                (0, a.jsx)("div", {
                  className: (0, T.A)(t().ImageLabel, v && t().IsNew),
                  children: (0, S.Wn)(v ? "#729_new_image" : "#729_old_image"),
                }),
                (0, a.jsx)("img", { src: `${j.r.IMG_URL}${L}` }),
              ],
            }),
          s = (L) => {
            const [v, y] = (0, p.useState)(0);
            return (0, a.jsxs)("div", {
              className: t().TabbedMapComparison,
              children: [
                (0, a.jsx)("div", {
                  className: t().TabHeader,
                  children: L.labels.map((P, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, T.A)(t().Tab, v == e && t().Active),
                        onClick: () => y(e),
                        children: (0, S.Wn)(P),
                      },
                      "tab_" + e,
                    ),
                  ),
                }),
                (0, a.jsx)("div", {
                  className: t().TabContents,
                  children: p.Children.map(L.children, (P, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, T.A)(
                          t().TabContentContainer,
                          e == v && t().Active,
                        ),
                        children: P,
                      },
                      "tabelement_" + e,
                    ),
                  ),
                }),
              ],
            });
          };
      },
      33027: (D, A, l) => {
        "use strict";
        l.r(A),
          l.d(A, {
            DownloadIcon: () => Q,
            HotSpotArrowIcon: () => W,
            InnateIconSmall: () => Z,
            PlayIcon: () => Y,
            default: () => M,
          });
        var a = l(69500),
          p = l(2095),
          f = l(84485),
          t = l(8305),
          T = l(3878),
          j = l(7552),
          S = l(73202),
          b = l(2130),
          s = l(15001),
          L = l(45488),
          v = l(63177),
          y = l(42616),
          P = l(59387),
          e = l.n(P),
          I = l(84899),
          C = l(71010),
          U = l(84598),
          K = l(85286),
          J = l.n(K),
          x = l(4665),
          n = l(33883),
          X = Object.defineProperty,
          V = Object.getOwnPropertyDescriptor,
          z = (i, o, r, c) => {
            for (
              var g = c > 1 ? void 0 : c ? V(o, r) : o, m = i.length - 1, u;
              m >= 0;
              m--
            )
              (u = i[m]) && (g = (c ? u(o, r, g) : u(g)) || g);
            return c && g && X(o, r, g), g;
          };
        const Y = () =>
            (0, a.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${p.r.IMG_URL}/icons/play.svg )`,
              },
            }),
          Q = () =>
            (0, a.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${p.r.IMG_URL}/icons/download.svg )`,
              },
            }),
          Z = () =>
            (0, a.jsx)("div", {
              className: (0, s.A)(e().InnateIconSmall, e().ControlIcon),
              style: {
                backgroundImage: `url( ${p.r.IMG_URL}/icons/innate_icon_small.svg )`,
              },
            }),
          W = () =>
            (0, a.jsx)("div", {
              className: (0, s.A)(e().HotSpotArrowIcon),
              style: {
                backgroundImage: `url( ${p.r.IMG_URL}/patch738/map_updates/map_icons/hotspot_arrow.svg )`,
              },
            }),
          q = "Patch738";
        function ie() {
          return !1;
        }
        const d = (i) => {
            const o = (0, j.useRef)(void 0);
            return i.video
              ? (0, a.jsx)("video", {
                  className: (0, s.A)(i.additionalClassName),
                  ref: o,
                  muted: !0,
                  autoPlay: !0,
                  preload: "auto",
                  loop: !0,
                  playsInline: !0,
                  poster: `${p.r.IMG_URL}${i.image}`,
                  children: (0, a.jsx)("source", {
                    type: "video/webm",
                    src: `${p.r.VIDEO_URL}${i.video}`,
                  }),
                })
              : (0, a.jsx)("img", {
                  className: (0, s.A)(i.additionalClassName),
                  src: `${p.r.IMG_URL}/` + i.image,
                });
          },
          H = (i) => {
            const o = (r) => {
              r.current.scrollIntoView({ behavior: "smooth" });
            };
            return (0, a.jsxs)("div", {
              style: { left: `${i.xPos}%`, top: `${i.yPos}%` },
              className: (0, s.A)(e().HotSpot),
              onClick: () => o(i.anchorRef),
              onMouseEnter: i.onMouseEnter,
              onMouseLeave: i.onMouseLeave,
              children: [
                (0, a.jsxs)("div", {
                  className: e().HotSpotMarker,
                  children: [
                    (0, a.jsx)("img", {
                      className: (0, s.A)(e().HotSpotMarkerImage),
                      src:
                        `${p.r.IMG_URL}/patch738/map_updates/map_icons/` +
                        i.image +
                        ".jpg",
                    }),
                    (0, a.jsx)(W, {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: e().HotSpotTooltip,
                  children: [
                    (0, a.jsx)(d, {
                      image: "patch738/map_updates/" + i.image + ".jpg",
                      additionalClassName: e().HotSpotTooltipImage,
                    }),
                    (0, a.jsxs)("div", {
                      className: e().HotSpotTooltipTextContainer,
                      children: [
                        (0, a.jsx)("p", {
                          className: (0, s.A)(
                            e().HotSpotTooltipTitle,
                            e().LabelFont,
                            e().LabelMedium,
                          ),
                          children: (0, t.Wn)(i.title),
                        }),
                        (0, a.jsx)("p", {
                          className: (0, s.A)(
                            e().HotSpotTooltipDescription,
                            e().BodyFont,
                            e().BodySmall,
                          ),
                          children: (0, t.Wn)(i.description),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          B = (i) => {
            const [o, r] = (0, j.useState)(!1),
              c = () => {
                r(!0);
              },
              g = () => {
                r(!1);
              };
            return (0, a.jsxs)("div", {
              className: (0, s.A)(
                e().LinkedHotSpotContainer,
                o ? e().LinkedHotSpotHovered : null,
              ),
              children: [
                (0, a.jsx)(H, {
                  xPos: i.direXPos,
                  yPos: i.direYPos,
                  image: i.image,
                  title: i.title,
                  description: i.description,
                  anchorRef: i.anchorRef,
                  onMouseEnter: c,
                  onMouseLeave: g,
                }),
                (0, a.jsx)(H, {
                  xPos: i.radiantXPos,
                  yPos: i.radiantYPos,
                  image: i.image,
                  title: i.title,
                  description: i.description,
                  anchorRef: i.anchorRef,
                  onMouseEnter: c,
                  onMouseLeave: g,
                }),
              ],
            });
          };
        function $(i) {
          let o = "",
            r = !0;
          for (let c = 0; c < i.length; ++c) {
            if (i[c] == "_") {
              r = !0;
              continue;
            }
            r ? ((o += i[c].toUpperCase()), (r = !1)) : (o += i[c]);
          }
          return o;
        }
        const oe = (0, T.PA)(({ patchnotes: i, heroname: o }) => {
            const c = f.B5.Get()
              .getHeroList()
              ?.heroes.find((g) => g.name.replace("npc_dota_hero_", "") == o);
            return c
              ? (0, a.jsxs)("div", {
                  className: (0, s.A)(e().HeroRework, e()[$(o)]),
                  children: [
                    (0, a.jsxs)("div", {
                      className: (0, s.A)(e().HeroDetails),
                      children: [
                        (0, a.jsx)("div", {
                          className: (0, s.A)(
                            e().HeroName,
                            e().TitleFont,
                            e().TitleSmall,
                          ),
                          children: (0, t.Wn)(c.name_loc),
                        }),
                        (0, a.jsx)("div", {
                          className: (0, s.A)(
                            e().ReworkDescription,
                            e().DisplayFont,
                            e().DisplayExtraSmall,
                            e().LightGrayText,
                          ),
                          children: (0, t.Wn)(
                            "#patch738_heroes_hero_rework_" + o,
                          ),
                        }),
                        (0, a.jsxs)("div", {
                          className: e().HeroImageContainer,
                          children: [
                            (0, a.jsx)("div", { className: e().HeroShadow }),
                            (0, a.jsx)(U.sG, {
                              heroname: o,
                              portraitClassName: e().HeroReworkPortrait,
                              videoClassName: e().HeroReworkPortraitVideo,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: e().HeroReworkPatchNotes,
                      children: (0, a.jsx)(I.fX, {
                        patchnotes: i,
                        heroname: o,
                        heroClassName: e().HeroReworkPatchNotesInner,
                      }),
                    }),
                  ],
                })
              : null;
          }),
          ee = (i) => {
            if (!i.special.heading_loc) return null;
            let o = i.special.values_float.map((g, m) =>
                (0, a.jsx)(
                  "span",
                  { className: e().SingleValue, children: (0, C.F)(g) },
                  m,
                ),
              ),
              r = !1,
              c = null;
            return (
              i.special.heading_loc[0] == "+"
                ? ((c = i.special.heading_loc.slice(1)), (r = !0))
                : (c = i.special.heading_loc),
              c[0] == "$" && (c = "#dota_ability_variable_" + c.slice(1)),
              r
                ? (0, a.jsxs)("div", {
                    className: e().Stat,
                    children: ["+ ", o, " ", (0, t.Wn)(c)],
                  })
                : (0, a.jsxs)("div", {
                    className: e().Stat,
                    children: [(0, t.Wn)(c), " ", o],
                  })
            );
          },
          le = (0, T.PA)(({ name: i, components: o, recipeCost: r }) => {
            const g = f.B5.Get()
                .getItemList()
                ?.itemabilities.find((_) => _.name == i),
              m = f.B5.Get().getItemData(g?.id);
            if (!m) return null;
            let u = m.desc_loc;
            m.special_values.forEach((_) => {
              let h =
                _.values_float.length > 0 ? (0, C.F)(_.values_float[0]) : "0";
              (u = u.replace("%" + _.name + "%", h)),
                (u = u.replace("%" + _.name.toLowerCase() + "%", h));
            }),
              (u = u.replace(/\%\%/g, "%"));
            let ae = m.special_values?.map((_, h) =>
                (0, a.jsx)(ee, { special: _ }, h),
              ),
              se = m.name.replace("item_", ""),
              w = m.item_cost,
              R =
                m.item_neutral_tier >= 0 && m.item_neutral_tier < 5
                  ? m.item_neutral_tier + 1
                  : -1,
              te = e()["Tier" + R],
              O = m.cooldowns.reduce((_, h) => _ + h) > 0,
              k = m.mana_costs.reduce((_, h) => _ + h) > 0,
              F =
                m.health_costs && m.health_costs.length > 0
                  ? m.health_costs.reduce((_, h) => _ + h) > 0
                  : !1,
              G = o
                ? o.map((_, h) =>
                    (0, a.jsx)(
                      "img",
                      {
                        className: e().RecipeComponentImage,
                        src: `${p.r.IMG_URL}/items/${_}.png`,
                      },
                      h,
                    ),
                  )
                : [];
            return (0, a.jsxs)("div", {
              className: e().GameItemDetails,
              children: [
                (0, a.jsxs)("div", {
                  className: e().Header,
                  children: [
                    (0, a.jsx)("img", {
                      className: e().ItemImage,
                      src: `${p.r.IMG_URL}/items/${se}.png`,
                    }),
                    (0, a.jsxs)("div", {
                      className: e().HeaderText,
                      children: [
                        (0, a.jsx)("div", {
                          className: (0, s.A)(
                            e().ItemName,
                            e().TitleFont,
                            e().TitleExtraSmall,
                          ),
                          children: m.name_loc,
                        }),
                        w > 0 &&
                          (0, a.jsxs)("div", {
                            className: (0, s.A)(
                              e().GoldPrice,
                              e().LabelFont,
                              e().LabelMedium,
                            ),
                            children: [
                              (0, a.jsx)("img", {
                                className: e().GoldIcon,
                                src: `${p.r.IMG_URL}/icons/gold.png`,
                              }),
                              w,
                            ],
                          }),
                        R > 0 &&
                          (0, a.jsx)("div", {
                            className: (0, s.A)(e().NeutralItemTier, te),
                            children: (0, t.Wn)("#neutral_item_tier", R),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: e().Body,
                  children: [
                    (0, a.jsx)("p", { children: "New item" }),
                    (0, a.jsx)("div", { className: e().Stats, children: ae }),
                    u &&
                      (0, a.jsxs)("div", {
                        className: e().DescriptionContainer,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Description,
                            dangerouslySetInnerHTML: { __html: u },
                          }),
                          (O || k || F) &&
                            (0, a.jsxs)("div", {
                              className: (0, s.A)(e().DescriptionHeader),
                              children: [
                                k &&
                                  (0, a.jsxs)("div", {
                                    className: e().ManaContainer,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().ManaIcon,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().ManaText,
                                        children: m.mana_costs.map(
                                          (_, h) =>
                                            (h > 0 ? " / " : "") + (0, C.F)(_),
                                        ),
                                      }),
                                    ],
                                  }),
                                F &&
                                  (0, a.jsxs)("div", {
                                    className: e().HealthContainer,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().HealthIcon,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().HealthText,
                                        children: m.health_costs.map(
                                          (_, h) =>
                                            (h > 0 ? " / " : "") + (0, C.F)(_),
                                        ),
                                      }),
                                    ],
                                  }),
                                O &&
                                  (0, a.jsxs)("div", {
                                    className: e().CooldownContainer,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().CooldownIcon,
                                        style: {
                                          backgroundImage: `url( ${p.r.IMG_URL}icons/cooldown.png )`,
                                        },
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().CooldownText,
                                        children: m.cooldowns.map(
                                          (_, h) =>
                                            (h > 0 ? " / " : "") + (0, C.F)(_),
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
                G.length > 0 &&
                  (0, a.jsxs)("div", {
                    className: e().Recipe,
                    children: [
                      (0, a.jsxs)("p", {
                        className: (0, s.A)(
                          e().RecipeLabel,
                          e().LabelFont,
                          e().LabelSmall,
                          e().LightGrayText,
                        ),
                        children: [" ", (0, t.Wn)("#patch738_recipe"), " "],
                      }),
                      (0, a.jsxs)("div", {
                        className: e().RecipeImagesContainer,
                        children: [
                          G,
                          r &&
                            r > 0 &&
                            (0, a.jsxs)("div", {
                              className: e().RecipeCost,
                              children: [" + ", r, " "],
                            }),
                          r &&
                            r > 0 &&
                            (0, a.jsx)("img", {
                              className: e().RecipeComponentImage,
                              src: `${p.r.IMG_URL}/items/recipe.png`,
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }),
          E = (i) =>
            (0, a.jsxs)("div", {
              className: i
                ? (0, s.A)(e().SectionDivider, i)
                : (0, s.A)(e().SectionDivider),
              children: [
                (0, a.jsx)("div", { className: e().Pattern }),
                (0, a.jsx)("div", { className: e().Overlay }),
                (0, a.jsx)("div", { className: e().TopDash }),
                (0, a.jsx)("div", { className: e().BottomDash }),
              ],
            }),
          N = () =>
            (0, a.jsxs)("div", {
              className: e().SubsectionDivider,
              children: [
                (0, a.jsx)("div", { className: e().TopDash }),
                (0, a.jsx)("div", { className: e().Background }),
              ],
            }),
          ne = (i) =>
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
                  children: i.subHeader,
                }),
                jsx("div", { className: styles.DashRight }),
              ],
            });
        let M = class extends j.Component {
          parallaxContainerRef = j.createRef();
          videoRef = j.createRef();
          riverRef = j.createRef();
          wisdomRef = j.createRef();
          neutralsRef = j.createRef();
          roshanRef = j.createRef();
          tormentorRef = j.createRef();
          lotusRef = j.createRef();
          constructor(i) {
            super(i),
              (this.state = {
                treasureName: "#frosty_treasure_treasure_name_9",
                heroName: "#frosty_treasure_hero_name_9",
                bPlayingVideo: !1,
              });
          }
          setPlayingVideo(i) {
            this.setState({ bPlayingVideo: i }),
              i ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          handleScroll = (i) => {
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
          convertAbilityDesc(i) {
            if (!i) return null;
            let o = i.desc_loc;
            return (
              i.special_values.forEach((r) => {
                let c =
                  r.values_float.length > 0 ? (0, C.F)(r.values_float[0]) : "0";
                (o = o.replace("%" + r.name + "%", c)),
                  (o = o.replace("%" + r.name.toLowerCase() + "%", c));
              }),
              (o = o.replace(/\%\%/g, "%")),
              (o = o.replace(/<h2>/g, "<b>")),
              (o = o.replace(/<\/h2>/g, "</b>")),
              (o = o.replace(/<h1>/g, "<b>")),
              (o = o.replace(
                /<\/h1>/g,
                `</b>

`,
              )),
              (0, t.Wn)(o)
            );
          }
          render() {
            const i = L.o.getPatchNotes("7.38", p.r.LANGUAGE);
            let o = (0, b.wwZ)((0, b.sfN)(p.r.LANGUAGE));
            o === "zh-cn" ? (o = "zh-Hans") : o === "zh-tw" && (o = "zh-Hant");
            let r = "patch738_logo_en";
            return (
              p.r.LANGUAGE == "schinese" && (r = "patch738_logo_cn"),
              (0, a.jsxs)("div", {
                id: q,
                className: e().Patch738,
                children: [
                  (0, a.jsx)(S.mg, {
                    children: (0, a.jsx)("title", {
                      children: (0, t.Wn)("#patch738_website_title"),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    ref: this.parallaxContainerRef,
                    className: (0, s.A)(e().PageContainer, e().Parallax),
                    children: [
                      (0, a.jsx)(v.A, { bOverlapping: !0 }),
                      (0, a.jsxs)("div", {
                        id: "HeaderSection",
                        className: (0, s.A)(e().HeaderSection),
                        children: [
                          (0, a.jsx)(d, {
                            image: "patch738/map_updates/new_map.jpg",
                            video: "patch738/patch738_header.mp4",
                            additionalClassName: e().MapHeaderImage,
                          }),
                          (0, a.jsxs)("div", {
                            className: e().HeaderTextSection,
                            children: [
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().TitleFont,
                                  e().TitleSmall,
                                ),
                                children: (0, t.Wn)(
                                  "#patch738_website_subheader",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().WebsiteTitle,
                                  e().TitleFont,
                                  e().TitleExtraLarge,
                                ),
                                children: (0, t.Wn)("#patch738_website_title"),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().WebsiteIntro,
                                  e().DisplayFont,
                                  e().DisplayMedium,
                                ),
                                children: (0, t.Wn)(
                                  "#patch738_website_introduction",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      E(),
                      (0, a.jsxs)("div", {
                        id: "MapSection",
                        className: (0, s.A)(e().WebsiteSection, e().MapSection),
                        children: [
                          (0, a.jsx)(d, {
                            image:
                              "patch738/map_updates/new_map_art_background.png",
                            additionalClassName: e().MapBackgroundImage,
                          }),
                          (0, a.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, a.jsxs)("div", {
                                className: e().WebsiteSectionHeader,
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: (0, s.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, t.Wn)("#patch738_map_title"),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                      e().LightGrayText,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_map_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: e().NewMapImageContainer,
                                children: [
                                  (0, a.jsx)(d, {
                                    image:
                                      "patch738/map_updates/new_map_art.png",
                                    additionalClassName: e().NewMapImage,
                                  }),
                                  (0, a.jsx)(B, {
                                    direXPos: 29.6,
                                    direYPos: 23.8,
                                    radiantXPos: 78.2,
                                    radiantYPos: 56.5,
                                    image: "lotus_pool",
                                    title:
                                      "#patch738_map_majorchanges_lotus_title",
                                    description:
                                      "#patch738_map_majorchanges_lotus_description",
                                    anchorRef: this.lotusRef,
                                  }),
                                  (0, a.jsx)(B, {
                                    direXPos: 32.4,
                                    direYPos: 15.2,
                                    radiantXPos: 79,
                                    radiantYPos: 70.4,
                                    image: "tormentor",
                                    title:
                                      "#patch738_map_majorchanges_tormentor_title",
                                    description:
                                      "#patch738_map_majorchanges_tormentor_description",
                                    anchorRef: this.tormentorRef,
                                  }),
                                  (0, a.jsx)(B, {
                                    direXPos: 41.5,
                                    direYPos: 28.5,
                                    radiantXPos: 60.2,
                                    radiantYPos: 46.8,
                                    image: "roshan",
                                    title:
                                      "#patch738_map_majorchanges_roshan_title",
                                    description:
                                      "#patch738_map_majorchanges_roshan_description",
                                    anchorRef: this.roshanRef,
                                  }),
                                  (0, a.jsx)(B, {
                                    direXPos: 49.3,
                                    direYPos: 15.5,
                                    radiantXPos: 48.4,
                                    radiantYPos: 74.5,
                                    image: "creeps",
                                    title:
                                      "#patch738_map_majorchanges_creeps_title",
                                    description:
                                      "#patch738_map_majorchanges_creeps_description",
                                    anchorRef: this.neutralsRef,
                                  }),
                                  (0, a.jsx)(B, {
                                    direXPos: 48.2,
                                    direYPos: 24.9,
                                    radiantXPos: 54.4,
                                    radiantYPos: 62.9,
                                    image: "river",
                                    title:
                                      "#patch738_map_majorchanges_river_title",
                                    description:
                                      "#patch738_map_majorchanges_river_description",
                                    anchorRef: this.riverRef,
                                  }),
                                  (0, a.jsx)(B, {
                                    direXPos: 76.2,
                                    direYPos: 39.7,
                                    radiantXPos: 26.1,
                                    radiantYPos: 35.1,
                                    image: "wisdom_shrine",
                                    title:
                                      "#patch738_map_majorchanges_wisdom_title",
                                    description:
                                      "#patch738_map_majorchanges_wisdom_description",
                                    anchorRef: this.wisdomRef,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              N(),
                              (0, a.jsxs)("div", {
                                ref: this.riverRef,
                                className: (0, s.A)(e().TextBlock, e().Narrow),
                                children: [
                                  (0, a.jsx)(d, {
                                    image:
                                      "patch738/map_updates/map_icons/river.jpg",
                                    additionalClassName: e().InlineHotSpotImage,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().BlockTitle,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_map_majorchanges_river_title",
                                    ),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().BlockDescription,
                                      e().BodyFont,
                                      e().BodyLarge,
                                      e().LightGrayText,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_map_majorchanges_river_description",
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsx)(d, {
                                image: "patch738/map_updates/river.jpg",
                                video: "patch738/river.mp4",
                                additionalClassName: e().MapUpdateImageBig,
                              }),
                              N(),
                              (0, a.jsxs)("div", {
                                ref: this.neutralsRef,
                                className: (0, s.A)(e().TextBlock, e().Narrow),
                                children: [
                                  (0, a.jsx)(d, {
                                    image:
                                      "patch738/map_updates/map_icons/creeps.jpg",
                                    additionalClassName: e().InlineHotSpotImage,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().BlockTitle,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_map_majorchanges_creeps_title",
                                    ),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().BlockDescription,
                                      e().BodyFont,
                                      e().BodyLarge,
                                      e().LightGrayText,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_map_majorchanges_creeps_description",
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsx)(d, {
                                image: "patch738/map_updates/creeps.png",
                                additionalClassName: e().CreepsImage,
                              }),
                              N(),
                              (0, a.jsxs)("div", {
                                ref: this.wisdomRef,
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                  e().Flipped,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, a.jsx)(d, {
                                    image:
                                      "patch738/map_updates/wisdom_shrine.jpg",
                                    video: "patch738/wisdom_shrine.mp4",
                                    additionalClassName: e().MapUpdateImage,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)(d, {
                                        image:
                                          "patch738/map_updates/map_icons/wisdom_shrine.jpg",
                                        additionalClassName:
                                          e().InlineHotSpotImage,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleMedium,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_wisdom_title",
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().Dash,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_wisdom_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N(),
                              (0, a.jsxs)("div", {
                                ref: this.lotusRef,
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, a.jsx)(d, {
                                    image:
                                      "patch738/map_updates/lotus_pool.jpg",
                                    video: "patch738/lotus_pool.mp4",
                                    additionalClassName: e().MapUpdateImage,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)(d, {
                                        image:
                                          "patch738/map_updates/map_icons/lotus_pool.jpg",
                                        additionalClassName:
                                          e().InlineHotSpotImage,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleMedium,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_lotus_title",
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().Dash,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_lotus_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N(),
                              (0, a.jsxs)("div", {
                                ref: this.roshanRef,
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                  e().Flipped,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, a.jsx)(d, {
                                    image: "patch738/map_updates/roshan.jpg",
                                    video: "patch738/roshan.mp4",
                                    additionalClassName: e().MapUpdateImage,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)(d, {
                                        image:
                                          "patch738/map_updates/map_icons/roshan.jpg",
                                        additionalClassName:
                                          e().InlineHotSpotImage,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleMedium,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_roshan_title",
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().Dash,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_roshan_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N(),
                              (0, a.jsxs)("div", {
                                ref: this.tormentorRef,
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, a.jsx)(d, {
                                    image: "patch738/map_updates/tormentor.jpg",
                                    video: "patch738/tormentor.mp4",
                                    additionalClassName: e().MapUpdateImage,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)(d, {
                                        image:
                                          "patch738/map_updates/map_icons/tormentor.jpg",
                                        additionalClassName:
                                          e().InlineHotSpotImage,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleMedium,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_tormentor_title",
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().Dash,
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_map_majorchanges_tormentor_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N(),
                              (0, a.jsx)("div", {
                                className: (0, s.A)(e().TextBlock, e().Narrow),
                                children: (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockTitle,
                                    e().TitleFont,
                                    e().TitleMedium,
                                  ),
                                  children: (0, t.Wn)(
                                    "#patch738_map_majorchanges_otherchanges",
                                  ),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().ComparisonContainer,
                                  e().Radiant,
                                ),
                                children: [
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                      e().CarouselGroupTitle,
                                    ),
                                    children: (0, t.Wn)("#radiant"),
                                  }),
                                  (0, a.jsxs)(n.U, {
                                    labels: ["1", "2", "3", "4", "5", "6", "7"],
                                    children: [
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/WisdomShrine_R.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/WisdomShrine_R.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/LotusPool_R.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/LotusPool_R.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/RoshPit_South.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/RoshPit_South.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/MapCorner_R.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/MapCorner_R.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/T1Gutter_R.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/T1Gutter_R.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/T2Approach_R.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/T2Approach_R.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/radiant/old/BaseCorner_R.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/radiant/new/BaseCorner_R.jpg",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().ComparisonContainer,
                                  e().Dire,
                                ),
                                children: [
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                      e().CarouselGroupTitle,
                                    ),
                                    children: (0, t.Wn)("#dire"),
                                  }),
                                  (0, a.jsxs)(n.U, {
                                    labels: ["1", "2", "3", "4", "5", "6", "7"],
                                    children: [
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/WisdomShrine_D.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/WisdomShrine_D.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/LotusPool_D.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/LotusPool_D.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/RoshPit_North.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/RoshPit_North.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/MapCorner_D.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/MapCorner_D.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/T1Gutter_D.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/T1Gutter_D.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/T2Approach_D.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/T2Approach_D.jpg",
                                        }),
                                      }),
                                      (0, a.jsx)(x.EW, {
                                        itemOne: (0, a.jsx)(n.v, {
                                          is_new: !0,
                                          image:
                                            "patch738/comparison/dire/old/BaseCorner_D.jpg",
                                        }),
                                        itemTwo: (0, a.jsx)(n.v, {
                                          is_new: !1,
                                          image:
                                            "patch738/comparison/dire/new/BaseCorner_D.jpg",
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
                      E(),
                      (0, a.jsxs)("div", {
                        id: "NeutralsSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().NeutralsSection,
                        ),
                        children: [
                          (0, a.jsx)(d, {
                            image: "patch738/neutrals/neutrals_background.png",
                            additionalClassName: e().NeutralsBackgroundImage,
                          }),
                          (0, a.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, a.jsxs)("div", {
                                className: e().WebsiteSectionHeader,
                                children: [
                                  (0, a.jsx)("h2", {
                                    className: (0, s.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_neutrals_title",
                                    ),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                      e().LightGrayText,
                                    ),
                                    children: (0, t.Wn)(
                                      "#patch738_neutrals_introduction",
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, a.jsx)(d, {
                                    image: "patch738/neutrals/madstone.jpg",
                                    additionalClassName: e().NeutralsImage,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleMedium,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_neutrals_lumber_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_neutrals_lumber_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                  e().Flipped,
                                  e().WideImage,
                                ),
                                children: [
                                  (0, a.jsx)(d, {
                                    image: "patch738/neutrals/crafting.jpg",
                                    additionalClassName: e().NeutralsImage,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleMedium,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_neutrals_crafting_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, t.Wn)(
                                          "#patch738_neutrals_crafting_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N(),
                              (0, a.jsxs)("div", {
                                className: e().Grid_2,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, a.jsx)(d, {
                                        image:
                                          "patch738/neutrals/neutrals_timings.jpg",
                                        additionalClassName: e().NeutralsImage,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, a.jsx)("p", {
                                            className: (0, s.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, t.Wn)(
                                              "#patch738_neutrals_timings_title",
                                            ),
                                          }),
                                          (0, a.jsx)("p", {
                                            className: (0, s.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, t.Wn)(
                                              "#patch738_neutrals_timings_description",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextImageBlockVertical,
                                    children: [
                                      (0, a.jsx)(d, {
                                        image:
                                          "patch738/neutrals/neutrals_tab.jpg",
                                        additionalClassName: e().NeutralsImage,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: e().TextBlock,
                                        children: [
                                          (0, a.jsx)("p", {
                                            className: (0, s.A)(
                                              e().BlockTitle,
                                              e().LabelFont,
                                              e().LabelExtraLarge,
                                            ),
                                            children: (0, t.Wn)(
                                              "#patch738_neutrals_tab_title",
                                            ),
                                          }),
                                          (0, a.jsx)("p", {
                                            className: (0, s.A)(
                                              e().BlockDescription,
                                              e().BodyFont,
                                              e().BodyLarge,
                                              e().LightGrayText,
                                            ),
                                            children: (0, t.Wn)(
                                              "#patch738_neutrals_tab_description",
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N(),
                              (0, a.jsx)("div", {
                                className: e().WebsiteSectionHeader,
                                children: (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().SectionDescriptionLabel,
                                    e().DisplayFont,
                                    e().DisplayMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#patch738_neutrals_changes_moreinfo",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      E(),
                      (0, a.jsx)("div", {
                        id: "QOLSection",
                        className: (0, s.A)(e().WebsiteSection, e().QOLSection),
                        children: (0, a.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, a.jsxs)("div", {
                              className: e().WebsiteSectionHeader,
                              children: [
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, t.Wn)("#patch738_qol_title"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().SectionDescriptionLabel,
                                    e().DisplayFont,
                                    e().DisplayMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#patch738_qol_introduction",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().Grid_3,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(d, {
                                      image: "patch738/qol/qol_rosh_timer.jpg",
                                      additionalClassName: e().QOLImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelExtraLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_roshan_timer_title",
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockDescription,
                                            e().BodyFont,
                                            e().BodyLarge,
                                            e().LightGrayText,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_roshan_timer_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(d, {
                                      image:
                                        "patch738/qol/qol_mark_for_sell.jpg",
                                      additionalClassName: e().QOLImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelExtraLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_markforsell_title",
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockDescription,
                                            e().BodyFont,
                                            e().BodyLarge,
                                            e().LightGrayText,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_markforsell_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(d, {
                                      image:
                                        "patch738/qol/qol_item_effects.jpg",
                                      additionalClassName: e().QOLImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelExtraLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_item_effects_title",
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockDescription,
                                            e().BodyFont,
                                            e().BodyLarge,
                                            e().LightGrayText,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_item_effects_description",
                                          ),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: e().FXInfoButton,
                                          children: [
                                            (0, a.jsx)("p", {
                                              className: (0, s.A)(
                                                e().LabelFont,
                                                e().LabelSmall,
                                                e().LightGrayText,
                                                e().SeeListLabel,
                                              ),
                                              children: (0, t.Wn)(
                                                "#patch738_qol_feature_item_effects_list_label",
                                              ),
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: e().FXList,
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className: (0, s.A)(
                                                    e().LabelFont,
                                                    e().LabelMedium,
                                                    e().LightGrayText,
                                                    e().TooltipHeader,
                                                  ),
                                                  children: (0, t.Wn)(
                                                    "#patch738_qol_feature_item_effects_title",
                                                  ),
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className: e().FXListColums,
                                                  children: [
                                                    (0, a.jsx)("p", {
                                                      className: (0, s.A)(
                                                        e().BodyFont,
                                                        e().BodyMedium,
                                                        e().LightGrayText,
                                                      ),
                                                      children: (0, t.Wn)(
                                                        "#patch738_qol_feature_item_effects_list_col1",
                                                      ),
                                                    }),
                                                    (0, a.jsx)("p", {
                                                      className: (0, s.A)(
                                                        e().BodyFont,
                                                        e().BodyMedium,
                                                        e().LightGrayText,
                                                      ),
                                                      children: (0, t.Wn)(
                                                        "#patch738_qol_feature_item_effects_list_col2",
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
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().Grid_3,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(d, {
                                      image:
                                        "patch738/qol/qol_attribute_pips.jpg",
                                      additionalClassName: e().QOLImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelExtraLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_attributes_pips_title",
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockDescription,
                                            e().BodyFont,
                                            e().BodyLarge,
                                            e().LightGrayText,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_attributes_pips_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(d, {
                                      image: "patch738/qol/qol_hud_timers.jpg",
                                      additionalClassName: e().QOLImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelExtraLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_hud_timers_title",
                                          ),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: e().DotaPlusBadgeMobile,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${p.r.IMG_URL}/icons/dota_plus.png`,
                                            }),
                                            (0, a.jsx)("p", {
                                              className: (0, s.A)(
                                                e().LabelFont,
                                                e().LabelSmall,
                                              ),
                                              children: (0, t.Wn)("#dota_plus"),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockDescription,
                                            e().BodyFont,
                                            e().BodyLarge,
                                            e().LightGrayText,
                                            e().LastOnMobile,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_hud_timers_description",
                                          ),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: e().DotaPlusBadge,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${p.r.IMG_URL}/icons/dota_plus.png`,
                                            }),
                                            (0, a.jsx)("p", {
                                              className: (0, s.A)(
                                                e().LabelFont,
                                                e().LabelSmall,
                                              ),
                                              children: (0, t.Wn)("#dota_plus"),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(d, {
                                      image:
                                        "patch738/qol/qol_backpack_grace.jpg",
                                      additionalClassName: e().QOLImage,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelExtraLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_backpack_grace_title",
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockDescription,
                                            e().BodyFont,
                                            e().BodyLarge,
                                            e().LightGrayText,
                                          ),
                                          children: (0, t.Wn)(
                                            "#patch738_qol_feature_backpack_grace_description",
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
                      }),
                      E(),
                      (0, a.jsx)("div", {
                        id: "GameplayUpdateContainer",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().GameplayUpdateContainer,
                        ),
                        children: (0, a.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, a.jsxs)("div", {
                              className: e().WebsiteSectionHeader,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().SectionSubHeaderLabel,
                                    e().LabelFont,
                                    e().LabelMedium,
                                  ),
                                  children: (0, t.Wn)("#patchnotes_update"),
                                }),
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, t.Wn)(
                                    "#patch738_gameplayupdate_title",
                                  ),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().SectionDescriptionLabel,
                                    e().DisplayFont,
                                    e().DisplayMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#patch738_gameplayupdate_introduction",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().PatchnotesContainer,
                              children: [
                                (0, a.jsx)(I.fs, {
                                  patchnotes: i?.general_notes,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(I.wL, {
                                  patchnotes: i?.neutral_creeps,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(I.ZV, {
                                  patchnotes: i?.items,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(I.ZV, {
                                  patchnotes: i?.neutral_items,
                                  is_neutrals: !0,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(I.ob, {
                                  patchnotes: i?.heroes,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(y.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        M = z([T.PA], M);
      },
      85655: (D) => {
        D.exports = {
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
      59387: (D) => {
        D.exports = {
          Tooltip: "_1XIQNZ5s7e7NYWUwS2bs9t",
          CarouselFade: "_1HlvzWyFrhOMwLPmzlylmD",
          StandardButton: "_35-EKykQsfEwTNg8WE3Hlw",
          ButtonText: "_2Exxky1bTIbhQa7ol-MlOx",
          Icon: "s4klYFub2D5BcMalhojBF",
          Play: "_11g8rfg5OeTYxBEjDe3GeO",
          SteamLogo: "_1AHBIbGQrr6NONnrmk0oIK",
          ToolTip: "_1YKrbr8h5IsOz3JGoWLNRI",
          PlayerReportTooltip: "_1v3PMPSMz0oREfgwibRdjS",
          GrayText: "_1CpX8hbVp4T-bXbxdcYVO1",
          TitleFont: "_2c_l6fMkZZdTmNHGYiK3JI",
          TitleExtraLarge: "_3vMsD4zq9d1f7x8XyUp0_X",
          TitleLarge: "_1UAmKx6ej_dPt_ngKgJEAu",
          TitleMedium: "_2KgyutyWUy-QAJNc5Hv0I8",
          TitleSmall: "_2qR7LE0rlsPuU-S4BkPE4R",
          TitleExtraSmall: "_3LWAkuBE61knGgNSeXezoq",
          DisplayFont: "_3cPN7CP5dazKxgq_RwgEgP",
          DisplayExtraLarge: "_2C3Sm_SS3uDs9h1FlbxRde",
          DisplayLarge: "_1gLBEitVq_DVUqthmBJW4Q",
          DisplayMedium: "_3ul3DS2mlqpAfBPoukLxi9",
          DisplaySmall: "_4x38Q0P870nZxCQr7zL4x",
          BodyFont: "_30t-5DFeLERbhwpoZSqWb1",
          BodyExtraLarge: "eKTqW80KRAj7HeMSDDXE0",
          BodyLarge: "_3CcN3lML4wsi2y9QeI2gdf",
          BodyMedium: "_1h_nTWWZ5-IZxsNhvQCDxj",
          BodySmall: "_1MApmlEFBhNnSg5QfSUUuS",
          LabelFont: "_3zGJb_2tOFtGnIpe2yJ9Qf",
          LabelExtraLarge: "_1oLWHwoV0Y7JA36m01Dj-I",
          LabelLarge: "_3DCiUTw3ghlPKzn-XzCtrm",
          LabelMedium: "_1kkMutj_je986MX3k9pZOe",
          LabelSmall: "_2NZYJyYFFD4xXL1iEbmEHW",
          ControlIcon: "_18IObIjALV1-H1dATSIuGC",
          PageContainer: "aeVqWChKnVazsow5Ooy82",
          Hidden: "jBYPVL-5mnMQ1rKTKJ1JQ",
          Patch738: "_2iI81TiQBNRlG223L73qNi",
          MobileOnly: "_2S-lxkFlcooO99bKJBOlUx",
          HeroRole: "_3zNwS8pBRVbuZegd12b_ND",
          TreasureName: "_3aOjQ9PEKdVbjZ4PDheCKX",
          DisplayExtraSmall: "JeH7Km5n0EhTQWwweFMyZ",
          ReworkHighlight: "_3EK_2wEMgRoIFt6Wscqv-H",
          LightGrayText: "VOWNFiTgbsT7rqkiEMc7o",
          WebsiteSection: "_1sGQcOE_tO-U88VdWRiCgD",
          WebsiteSectionInner: "_3uJukzKOJgz_FzxWLZFXGJ",
          WebsiteSectionHeader: "_1DEnDAr_pTOUBowgxzv9K7",
          TextSection: "pGX86BFyid4m9l63M7Ouz",
          SubsectionDivider: "_3mae6VnJp5AR6JXReBCh2c",
          TopDash: "_1Z1QA_ScuyCf8KNT6Rvalv",
          Background: "bCzhsMJLvHpbn245LrVc5",
          SectionDivider: "_2DJ_jPhWrnXrGHY8HxkKIS",
          Pattern: "_3JXCaS2YDUWi31pb9UbPYK",
          Overlay: "YS5YP9U9Cjan4cgUW0HXA",
          BottomDash: "_3ckvc-mIQSfJXEb2TNesCw",
          ButtonsSection: "_2tb7qg4RNfsN3tjzMulLI5",
          Grid_4: "_1nJOP5mfwDNyhGu1tovqZf",
          Grid_3: "_308_NJfthoysgZGP2CiOHk",
          Grid_2: "_1ZJ3iKN5sDx2MLNIoOr4GP",
          TextBlock: "_1j3mHO1LasCefuwpsW9ZRP",
          TextImageBlockVertical: "zifut8BSKsAtBrkcGBmxq",
          TextImageBlockHorizontal: "_2LC5oXhTtugo5EKK6oXXRp",
          Flipped: "_3y-0xrSesEZfG2kG8ap6pm",
          NarrowImage: "_20MDFJGq553qGuljmXxrFV",
          WideImage: "_3lzJdZ56-Lh6jBqgiXpvyx",
          ActionTextImageBlock: "_3D74jEUBifwldTuqHF7q3E",
          ActionImage: "_14-wPhKA5JBcmhkAHCSq3V",
          HeroReworkContainer: "z29IDMHcsROYmH28dfI0b",
          HeroRework: "_2pYgFEV9VgwXDsiIBKPWDb",
          HeroDetails: "_3FkkYzgSk41ZWOaBY3pP0D",
          HeroName: "_27fetm9zubmsRw_S7pPTra",
          ReworkDescription: "_2oa6bTINo_nLmDYZCgMVaA",
          HeroImageContainer: "_2C28gvH4lclF8nek-KSs8t",
          HeroShadow: "_1eipJnKgEDCJSmQ9UAsNUp",
          HeroReworkPortrait: "_3qnUu2EUBrh5HAISGlaIll",
          HeroReworkPortraitVideo: "a_-y1DIDBp1z9j1_uRcJJ",
          HeroReworkPatchNotes: "_4dALXUwq__u-hQDnGsD7Q",
          ImmersiveTextImageBlock: "TIpTTrIEeLTJkTgkKX9MO",
          DashedSectionSubHeader: "RZqphEAFrMzI5jI0rbTUJ",
          Label: "va37o_5tah8tzThKUZwUe",
          DashLeft: "_20X1N09aFnhvtAXsl4ETAX",
          DashRight: "_142VbpbP9AN_A4n6v-yiS9",
          AbilityImageContainer: "_3kdlyoRddBSIJPc5Yd6TGz",
          AbilityImage: "_29mCd8WX7RmZtm_ayGwx3B",
          AbilityHotKey: "_1suWz8ZWAW2lfx6ppMyLp9",
          Active: "_3ADHgOmA8fQPzedmDnER0y",
          HeaderSection: "vTnB8rW0LZRw2Vmh_tF7r",
          MapHeaderImage: "_2xi5t325QzVWB_Fde8oTyu",
          HeaderTextSection: "_1nXkXJNYoHwjTDplLvAcc1",
          Dash: "_2hRuU00CrcCBQWmPc_HUVc",
          WebsiteIntro: "G66O5jd61YFwnyyIVCO0s",
          WebsiteTitle: "_27h-ioi0XyUjwj_qQE0Ajs",
          GameItemsContainer: "_38BYP2PwMzvqSe3RgKWYLL",
          GameItemDetails: "sxmtPIm4QO3JDjIjp0a9r",
          Header: "_2EAE6U29x6UbST8wU4rLZ_",
          ItemImage: "_3unEN35VIufj2UUqRBUUSP",
          HeaderText: "_2GVVEdxa1lFjPTzNJn-Sw-",
          ItemName: "_3610eERdGL88A5K_OFHJvm",
          GoldPrice: "fx4QUwKhNfkyIUXZsyrZK",
          GoldIcon: "_3Gl0B0xyFHoJRT4TxBU8nH",
          NeutralItemTier: "_3EjnTaAa9GOhrVWcPuH5yU",
          Tier1: "_3l2WwBEOUtvpNjT0etpVIE",
          Tier2: "_3CU9DCVdSm65TVJl2_9RhN",
          Tier3: "_3kKaOErAh3G1NWJTXJIt7X",
          Tier4: "_3a8JoefmU6-HaHdm3DslIo",
          Tier5: "_1MBWa337fy7Cb6fch2aPzC",
          Body: "JpB0cI7K76fdY2SOfB5zh",
          Stats: "_2H98Pf4Cc_JJQ1YuJIh-nS",
          Stat: "_3RK7EHkzL3NqHIt4ymQsof",
          SingleValue: "_22FHsS7hwnmoRGoXNCYhCY",
          DescriptionContainer: "_142eu_OCh4srr_DzGF7sQj",
          Description: "_1ytFJPB4s3b0xGPGL2_7J5",
          DescriptionHeader: "_2dhhqYtlWmBqLeuEVj15Fn",
          CooldownContainer: "kpSWG3-xNnP7h79b3160N",
          CooldownIcon: "_35WOEnYTOKOqaq8faxQgz4",
          CooldownText: "_3bU5t0ttm3KV3jqc2GYucD",
          ManaContainer: "-bjO5ZAmd54CN8g-qfa1m",
          ManaIcon: "f-5yPy6vnBsoX4YN63I2x",
          ManaText: "_1CQPSfO1UPglPyIKp1igcx",
          HealthContainer: "_2q6Yo2av0en6xwfZCOeN_8",
          HealthIcon: "_3-lAXX3V7_e92mwQSdNf2o",
          HealthText: "xnD0lE7-Ix7ZPPVUd3xtR",
          Lore: "_30yLIRw7p4OUvb6Rn5T_lm",
          Recipe: "_3WRDHNNV_sgXU-FfF8S7Z2",
          RecipeLabel: "HJ_LpO5TjUl1A1RvwxauT",
          RecipeImagesContainer: "_1gctqlWpL3qz84cH83JL7A",
          RecipeComponentImage: "_3uad1Yolw_kfYyaa0o3dGc",
          RecipeCost: "_3_LeiTLZlOJlTum8vfupWk",
          MapSection: "_3n_iZbe2XGvzCpJL2y8P36",
          MapBackgroundImage: "_3Qyyn_o5ccYr2X6JPkaQTA",
          MapUpdateImage: "u4qlrQMfzW_zLOvZ0ZhGo",
          MapUpdateImageBig: "_3uJKd3Xv3UORiCf048tYv6",
          CreepsImage: "_1D0Iemj1S0fbCynJ6qjd4Z",
          Narrow: "_2ugsgf9Kv5kzSI7_FFTH7Z",
          InlineHotSpotImage: "_2lNY5aLMbxMl1tMCyQ-k7O",
          NewMapImageContainer: "_35AaoeWny606hSrjTktmFm",
          NewMapImage: "_2-pMuZK5N-U7l0pMBq6tbo",
          LinkedHotSpotContainer: "_1iwzf7J7PIq-QAoKB9EUGJ",
          LinkedHotSpotHovered: "UPwRofBwjxWJgmAwcbfm",
          HotSpot: "_1fc5TmleV1_5QHFnkjRgbQ",
          HotSpotMarker: "_8BHIzxsAPVZfiTjobNAzl",
          HotSpotMarkerImage: "hN7pRLMjFXoAzj6PjIVMd",
          HotSpotArrowIcon: "AC9N38Otz7lywzsTXBkwM",
          HotSpotTooltip: "_1Jg872C_WeSD1vIva1j2so",
          HotSpotTooltipImage: "_15IfX5S5uWEu5QzbDrNZ6",
          HotSpotTooltipTextContainer: "_28EnZ9_Ix1IF30qBww5OLl",
          HotSpotTooltipDescription: "a4vwak5UC22RJVhOPYwhr",
          ComparisonContainer: "_2q_rbcI9Jq1rOGkxWkx2k9",
          Radiant: "_2iPYjMtjqJVw5VPkBuZWU5",
          CarouselGroupTitle: "uLSJWSLvgybve69e5PIXG",
          Dire: "_38filmL_LhSnLvB-U-KWjp",
          NeutralsSection: "VRTtNOWFJxoIC5DeLp4g3",
          NeutralsBackgroundImage: "_1Kw5T5Pvk1tjg5oF17tObR",
          NeutralsImage: "_2njS0fwNivm1f-gce3j4ju",
          HeroesSection: "_343oK41VqBr9qRqAtOvrd",
          HeroesImage: "_2oFloXSCfrYn61ZdpuT6aM",
          QOLSection: "_3DLm4thYPP62MzdgeNX_uA",
          QOLImage: "_32mv_A0VEyZ5JH2bn1yr5m",
          FXInfoButton: "K6QdHqbeMDFmaj48oIE8R",
          SeeListLabel: "_18hAKzO_qJ6UxAKkNM1egn",
          FXList: "JY2YAXlgZeiNAs1g4Z1cb",
          TooltipHeader: "_1ky1o9pmIjsuCYtv2acgh",
          FXListColums: "kexct6I6Uasz032qccOwU",
          GameplayUpdateContainer: "_1X7KEy_h3VSLh8ol98FFdp",
          PatchnotesHeroImage: "rPGTbhEPJb97CXhCC0tkm",
          PatchnotesContainer: "_2QjM-q372JV-JNYua_NqlI",
          MiscSection: "_2cOXjRG4ylBf_JsBV_AzI-",
          UpdatesSection: "_33CadKJCsI-njqngvcG2EQ",
          DotaPlusBadge: "_1GNSZxyaIktV_wEMYNxr7v",
          DotaPlusBadgeMobile: "_3Tmn1T0cPjGU2btUECFXdR",
        };
      },
    },
  ]);
})();
