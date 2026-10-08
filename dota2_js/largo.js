// 23052.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [23052],
    {
      83695: (C, L, n) => {
        "use strict";
        n.d(L, { U: () => b });
        var a = n(69500),
          t = n(11417),
          T = n.n(t),
          r = n(2095);
        const b = () =>
            (0, a.jsx)("div", {
              className: T().RightArrow,
              style: {
                backgroundImage: `url( ${r.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          u = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      33883: (C, L, n) => {
        "use strict";
        n.d(L, { U: () => s, v: () => P });
        var a = n(69500),
          t = n(7552),
          T = n(85655),
          r = n.n(T),
          b = n(15001),
          u = n(2095),
          B = n(8305);
        const P = ({ image: A, is_new: I }) =>
            (0, a.jsxs)("div", {
              className: r().ComparisonImage,
              children: [
                (0, a.jsx)("div", {
                  className: (0, b.A)(r().ImageLabel, I && r().IsNew),
                  children: (0, B.Wn)(I ? "#729_new_image" : "#729_old_image"),
                }),
                (0, a.jsx)("img", { src: `${u.r.IMG_URL}${A}` }),
              ],
            }),
          s = (A) => {
            const [I, O] = (0, t.useState)(0);
            return (0, a.jsxs)("div", {
              className: r().TabbedMapComparison,
              children: [
                (0, a.jsx)("div", {
                  className: r().TabHeader,
                  children: A.labels.map((E, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, b.A)(r().Tab, I == e && r().Active),
                        onClick: () => O(e),
                        children: (0, B.Wn)(E),
                      },
                      "tab_" + e,
                    ),
                  ),
                }),
                (0, a.jsx)("div", {
                  className: r().TabContents,
                  children: t.Children.map(A.children, (E, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, b.A)(
                          r().TabContentContainer,
                          e == I && r().Active,
                        ),
                        children: E,
                      },
                      "tabelement_" + e,
                    ),
                  ),
                }),
              ],
            });
          };
      },
      23052: (C, L, n) => {
        "use strict";
        n.r(L),
          n.d(L, {
            DownloadIcon: () => S,
            InnateIconSmall: () => te,
            PlayIcon: () => X,
            default: () => K,
          });
        var a = n(69500),
          t = n(2095),
          T = n(84485),
          r = n(8305),
          b = n(3878),
          u = n(7552),
          B = n(73202),
          P = n(2130),
          s = n(15001),
          A = n(45488),
          I = n(63177),
          O = n(42616),
          E = n(49728),
          e = n.n(E),
          H = n(84899),
          m = n(32389),
          R = n(71010),
          V = n(45237),
          z = n(83695),
          Y = n(11778),
          M = n(84598),
          ae = n(85286),
          se = n.n(ae),
          f = n(4665),
          j = n(33883),
          re = Object.defineProperty,
          ie = Object.getOwnPropertyDescriptor,
          le = (i, l, _, d) => {
            for (
              var o = d > 1 ? void 0 : d ? ie(l, _) : l, c = i.length - 1, h;
              c >= 0;
              c--
            )
              (h = i[c]) && (o = (d ? h(l, _, o) : h(o)) || o);
            return d && o && re(l, _, o), o;
          };
        const X = () =>
            (0, a.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${t.r.IMG_URL}/icons/play.svg )`,
              },
            }),
          S = () =>
            (0, a.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${t.r.IMG_URL}/icons/download.svg )`,
              },
            }),
          te = () =>
            (0, a.jsx)("div", {
              className: (0, s.A)(e().InnateIconSmall, e().ControlIcon),
              style: {
                backgroundImage: `url( ${t.r.IMG_URL}/icons/innate_icon_small.svg )`,
              },
            }),
          oe = "Largo";
        function ne() {
          const i = n(99769),
            l =
              navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
              navigator.userAgent.toLowerCase().indexOf("macintosh") != -1;
          return i || l;
        }
        const w = (i) => {
          const l = (0, u.useRef)(void 0);
          return i.video
            ? (0, a.jsx)("video", {
                className: (0, s.A)(i.additionalClassName),
                ref: l,
                muted: !0,
                autoPlay: !0,
                preload: "auto",
                loop: !0,
                playsInline: !0,
                poster: `${t.r.IMG_URL}${i.image}`,
                children: (0, a.jsx)("source", {
                  type: "video/webm",
                  src: `${t.r.VIDEO_URL}${i.video}`,
                }),
              })
            : (0, a.jsx)("img", {
                className: (0, s.A)(i.additionalClassName),
                src: `${t.r.IMG_URL}/` + i.image,
              });
        };
        function ce(i) {
          let l = "",
            _ = !0;
          for (let d = 0; d < i.length; ++d) {
            if (i[d] == "_") {
              _ = !0;
              continue;
            }
            _ ? ((l += i[d].toUpperCase()), (_ = !1)) : (l += i[d]);
          }
          return l;
        }
        const G = (0, b.PA)(({ patchnotes: i, heroname: l }) => {
            const d = T.B5.Get()
                .getHeroList()
                ?.heroes.find((h) => h.name.replace("npc_dota_hero_", "") == l),
              o = d?.name.replace("npc_dota_hero_", "");
            let c = "";
            switch (d?.primary_attr) {
              case 0:
                c = "strength";
                break;
              case 1:
                c = "agility";
                break;
              case 2:
                c = "intelligence";
                break;
              case 3:
                c = "universal";
                break;
            }
            return d
              ? (0, a.jsxs)("div", {
                  className: (0, s.A)(e().HeroReworkCondensed, e()[ce(l)]),
                  children: [
                    (0, a.jsxs)("div", {
                      className: (0, s.A)(e().ReworkBackgroundContainer),
                      children: [
                        (0, a.jsx)("div", {
                          className: (0, s.A)(e().ReworkBackground),
                        }),
                        (0, a.jsx)("div", {
                          className: (0, s.A)(e().ReworkBackgroundBlur),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: e().HeroReworkContents,
                      children: [
                        (0, a.jsxs)("div", {
                          className: (0, s.A)(e().HeroNameContainer, e().Large),
                          children: [
                            (0, a.jsx)("img", {
                              src: `${t.r.IMG_URL}icons/hero_${c}.svg`,
                              className: e().PrimaryStatIcon,
                            }),
                            (0, a.jsx)("div", {
                              className: (0, s.A)(
                                e().HeroName,
                                e().TitleFont,
                                e().TitleSmall,
                              ),
                              children: (0, r.Wn)(d.name_loc),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: e().HeroImageContainer,
                          children: [
                            (0, a.jsx)("div", { className: e().HeroShadow }),
                            (0, a.jsx)(M.sG, {
                              heroname: l,
                              portraitClassName: e().HeroReworkPortrait,
                              videoClassName: e().HeroReworkPortraitVideo,
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", { className: e().Dash }),
                        (0, a.jsxs)("div", {
                          className: (0, s.A)(e().ReworkHighlightsContainer),
                          children: [
                            (0, a.jsxs)("div", {
                              className: (0, s.A)(
                                e().HeroNameContainer,
                                e().Small,
                              ),
                              children: [
                                (0, a.jsx)("img", {
                                  src: `${t.r.IMG_URL}icons/hero_${c}.svg`,
                                  className: e().PrimaryStatIcon,
                                }),
                                (0, a.jsx)("div", {
                                  className: (0, s.A)(
                                    e().HeroName,
                                    e().TitleFont,
                                    e().TitleSmall,
                                  ),
                                  children: (0, r.Wn)(d.name_loc),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: (0, s.A)(
                                e().ReworkHighlight,
                                e().DisplayFont,
                                e().BodyMedium,
                              ),
                              children: (0, r.Wn)(
                                "#largo_gameplay_heroes_" + l + "_highlight_1",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          }),
          de = (i) => {
            if (!i.special.heading_loc) return null;
            let l = i.special.values_float.map((o, c) =>
                (0, a.jsx)(
                  "span",
                  { className: e().SingleValue, children: (0, R.F)(o) },
                  c,
                ),
              ),
              _ = !1,
              d = null;
            return (
              i.special.heading_loc[0] == "+"
                ? ((d = i.special.heading_loc.slice(1)), (_ = !0))
                : (d = i.special.heading_loc),
              d[0] == "$" && (d = "#dota_ability_variable_" + d.slice(1)),
              _
                ? (0, a.jsxs)("div", {
                    className: e().Stat,
                    children: ["+ ", l, " ", (0, r.Wn)(d)],
                  })
                : (0, a.jsxs)("div", {
                    className: e().Stat,
                    children: [(0, r.Wn)(d), " ", l],
                  })
            );
          },
          D = (0, b.PA)(
            ({
              name: i,
              components: l,
              recipeCost: _,
              isNew: d,
              isReturning: o,
            }) => {
              const h = T.B5.Get()
                  .getItemList()
                  ?.itemabilities.find((p) => p.name == i),
                g = T.B5.Get().getItemData(h?.id);
              if (!g) return null;
              let v = g.desc_loc;
              g.special_values.forEach((p) => {
                let x =
                  p.values_float.length > 0 ? (0, R.F)(p.values_float[0]) : "0";
                (v = v.replace("%" + p.name + "%", x)),
                  (v = v.replace("%" + p.name.toLowerCase() + "%", x));
              }),
                (v = v.replace(/\%\%/g, "%"));
              let _e = g.special_values?.map((p, x) =>
                  (0, a.jsx)(de, { special: p }, x),
                ),
                me = g.name.replace("item_", ""),
                Z = g.item_cost,
                U =
                  g.item_neutral_tier >= 0 && g.item_neutral_tier < 5
                    ? g.item_neutral_tier + 1
                    : -1,
                J = e()["Tier" + U],
                Q = g.cooldowns.reduce((p, x) => p + x) > 0,
                q = g.mana_costs.reduce((p, x) => p + x) > 0,
                $ =
                  g.health_costs && g.health_costs.length > 0
                    ? g.health_costs.reduce((p, x) => p + x) > 0
                    : !1,
                ee = l
                  ? l.map((p, x) =>
                      (0, a.jsx)(
                        "img",
                        {
                          className: e().RecipeComponentImage,
                          src: `${t.r.IMG_URL}/items/${p}.png`,
                        },
                        x,
                      ),
                    )
                  : [];
              return (0, a.jsxs)("div", {
                className: d
                  ? (0, s.A)(e().GameItemDetails, e().IsNew)
                  : (0, s.A)(e().GameItemDetails),
                children: [
                  (0, a.jsx)("div", { className: e().ItemBorder }),
                  (0, a.jsxs)("div", {
                    className: (0, s.A)(e().HeaderContainer),
                    children: [
                      U > 0 &&
                        (0, a.jsx)("div", {
                          className: (0, s.A)(e().HeaderTierColor, J),
                        }),
                      (0, a.jsxs)("div", {
                        className: (0, s.A)(e().Header),
                        children: [
                          (0, a.jsx)("img", {
                            className: e().ItemImage,
                            src: `${t.r.IMG_URL}/items/${me}.png`,
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
                                children: g.name_loc,
                              }),
                              Z > 0 &&
                                (0, a.jsxs)("div", {
                                  className: (0, s.A)(
                                    e().GoldPrice,
                                    e().LabelFont,
                                    e().LabelMedium,
                                  ),
                                  children: [
                                    (0, a.jsx)("img", {
                                      className: e().GoldIcon,
                                      src: `${t.r.IMG_URL}/icons/gold.png`,
                                    }),
                                    Z,
                                  ],
                                }),
                              U > 0 &&
                                (0, a.jsx)("div", {
                                  className: (0, s.A)(e().NeutralItemTier, J),
                                  children: (0, r.Wn)("#neutral_item_tier", U),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  d &&
                    (0, a.jsx)("p", {
                      className: (0, s.A)(
                        e().NewBadge,
                        e().LabelFont,
                        e().LabelSmall,
                      ),
                      children: (0, r.Wn)("#patchnotes_new_facet"),
                    }),
                  o &&
                    (0, a.jsx)("p", {
                      className: (0, s.A)(
                        e().ReturningBadge,
                        e().LabelFont,
                        e().LabelSmall,
                      ),
                      children: (0, r.Wn)("#patchnotes_returning_facet"),
                    }),
                  (0, a.jsxs)("div", {
                    className: e().Body,
                    children: [
                      (0, a.jsx)("div", { className: e().Stats, children: _e }),
                      v &&
                        (0, a.jsxs)("div", {
                          className: e().DescriptionContainer,
                          children: [
                            (0, a.jsx)("div", {
                              className: e().Description,
                              dangerouslySetInnerHTML: { __html: v },
                            }),
                            (Q || q || $) &&
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(e().DescriptionHeader),
                                children: [
                                  q &&
                                    (0, a.jsxs)("div", {
                                      className: e().ManaContainer,
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: e().ManaIcon,
                                        }),
                                        (0, a.jsx)("div", {
                                          className: e().ManaText,
                                          children: g.mana_costs.map(
                                            (p, x) =>
                                              (x > 0 ? " / " : "") +
                                              (0, R.F)(p),
                                          ),
                                        }),
                                      ],
                                    }),
                                  $ &&
                                    (0, a.jsxs)("div", {
                                      className: e().HealthContainer,
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: e().HealthIcon,
                                        }),
                                        (0, a.jsx)("div", {
                                          className: e().HealthText,
                                          children: g.health_costs.map(
                                            (p, x) =>
                                              (x > 0 ? " / " : "") +
                                              (0, R.F)(p),
                                          ),
                                        }),
                                      ],
                                    }),
                                  Q &&
                                    (0, a.jsxs)("div", {
                                      className: e().CooldownContainer,
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: e().CooldownIcon,
                                          style: {
                                            backgroundImage: `url( ${t.r.IMG_URL}icons/cooldown.png )`,
                                          },
                                        }),
                                        (0, a.jsx)("div", {
                                          className: e().CooldownText,
                                          children: g.cooldowns.map(
                                            (p, x) =>
                                              (x > 0 ? " / " : "") +
                                              (0, R.F)(p),
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
                  ee.length > 0 &&
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
                          children: [
                            " ",
                            (0, r.Wn)("#templatepage_recipe"),
                            " ",
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: e().RecipeImagesContainer,
                          children: [
                            ee,
                            _ &&
                              _ > 0 &&
                              (0, a.jsxs)("div", {
                                className: e().RecipeCost,
                                children: [" + ", _, " "],
                              }),
                            _ &&
                              _ > 0 &&
                              (0, a.jsx)("img", {
                                className: e().RecipeComponentImage,
                                src: `${t.r.IMG_URL}/items/recipe.png`,
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            },
          ),
          ge = (i) =>
            jsxs("div", {
              className: classnames(
                styles.AbilityImageContainer,
                i.abilityType,
              ),
              children: [
                jsx("img", {
                  className: styles.AbilityImage,
                  src: `${ConfigDota.IMG_URL}/` + i.abilityImage,
                }),
                i.abilityHotKey &&
                  jsx("p", {
                    className: styles.AbilityHotKey,
                    children: i.abilityHotKey,
                  }),
              ],
            }),
          N = (i) =>
            (0, a.jsx)("div", {
              className: (0, s.A)(e().BugFix),
              children: (0, a.jsx)("p", {
                className: (0, s.A)(e().BodyFont, e().BodyLarge),
                children: (0, r.Wn)(i.description),
              }),
            }),
          y = ({
            index: i,
            video: l,
            name: _,
            heroname: d,
            autoplay: o,
            onSlideIn: c,
          }) => {
            const h = (0, u.useContext)(m.Yc),
              g = (0, u.useRef)(void 0);
            return (
              (0, u.useEffect)(() => {
                function v() {
                  g && g.current && h.state.currentSlide == i
                    ? g.current.play()
                    : g && g.current && g.current.pause(),
                    h.state.currentSlide == i && c(_, d);
                }
                return h.subscribe(v), () => h.unsubscribe(v);
              }, [h, i, _, d, c]),
              (0, a.jsx)("div", {
                className: e().SlideContainer,
                children: ne()
                  ? (0, a.jsx)("img", {
                      className: e().TreasureVideo,
                      src: `${t.r.VIDEO_URL}/treasures_winter2025/${l}.png`,
                    })
                  : (0, a.jsx)("video", {
                      ref: g,
                      className: e().TreasureVideo,
                      muted: !0,
                      autoPlay: o,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${t.r.VIDEO_URL}/treasures_winter2025/${l}.png`,
                      children: (0, a.jsx)("source", {
                        type: "video/webm",
                        src: `${t.r.VIDEO_URL}/treasures_winter2025/${l}.webm`,
                      }),
                    }),
              })
            );
          },
          F = (i) =>
            (0, a.jsxs)("div", {
              className: i
                ? (0, s.A)(e().SectionDivider, i)
                : (0, s.A)(e().SectionDivider),
              children: [
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().ArrowPattern, e().Left),
                }),
                (0, a.jsx)("div", { className: e().CenterEmblem }),
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().ArrowPattern, e().Right),
                }),
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().DarkEdge, e().Left),
                }),
                (0, a.jsx)("div", {
                  className: (0, s.A)(e().DarkEdge, e().Right),
                }),
              ],
            }),
          W = () =>
            (0, a.jsxs)("div", {
              className: e().SubsectionDivider,
              children: [
                (0, a.jsx)("div", { className: e().TopDash }),
                (0, a.jsx)("div", { className: e().Background }),
              ],
            }),
          he = (i) =>
            jsxs("div", {
              className: styles.DashedSectionSubHeader,
              children: [
                jsx("div", { className: styles.DashLeft }),
                jsx("p", {
                  className: classnames(
                    styles.LabelFont,
                    styles.LabelMedium,
                    styles.Label,
                    styles.LightGrayText,
                  ),
                  children: BBLocalize(i.subHeader),
                }),
                jsx("div", { className: styles.DashRight }),
              ],
            }),
          k = [
            {
              abilityId: 1659,
              posterDir: "abilities/largo/largo_catchy_lick.jpg",
              videoSrcMp4: "abilities/largo/largo_catchy_lick.mp4",
              videoSrcWebm: "abilities/largo/largo_catchy_lick.webm",
              hotKey: "Q",
            },
            {
              abilityId: 1660,
              posterDir: "abilities/largo/largo_frogstomp.jpg",
              videoSrcMp4: "abilities/largo/largo_frogstomp.mp4",
              videoSrcWebm: "abilities/largo/largo_frogstomp.mp4",
              hotKey: "W",
            },
            {
              abilityId: 1661,
              posterDir: "abilities/largo/largo_croak_of_genius.jpg",
              videoSrcMp4: "abilities/largo/largo_croak_of_genius.mp4",
              videoSrcWebm: "abilities/largo/largo_croak_of_genius.mp4",
              hotKey: "E",
            },
            {
              abilityId: 1662,
              posterDir: "abilities/largo/largo_amphibian_rhapsody.jpg",
              videoSrcMp4: "abilities/largo/largo_amphibian_rhapsody.mp4",
              videoSrcWebm: "abilities/largo/largo_amphibian_rhapsody.mp4",
              hotKey: "R",
            },
          ];
        let K = class extends u.Component {
          parallaxContainerRef = u.createRef();
          videoRef = u.createRef();
          navbarRef = u.createRef();
          newHeroRef = u.createRef();
          gameplayRef = u.createRef();
          treasureRef = u.createRef();
          constructor(i) {
            super(i),
              (this.state = {
                treasureName: "#largo_treasure_hero_tiny_set",
                heroName: "#largo_treasure_hero_tiny",
                bPlayingVideo: !1,
              });
          }
          setPlayingVideo(i) {
            this.setState({ bPlayingVideo: i }),
              i ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          scrollToTarget(i) {
            i.current.scrollIntoView({ behavior: "smooth" });
          }
          handleScroll = (i) => {
            const l = this.newHeroRef.current.getBoundingClientRect().top - 200;
            (this.navbarRef.current.style.opacity = `${this.clamp(this.remapValue(l, 0, -100, 0, 1), 0, 1)}`),
              l > 0
                ? (this.navbarRef.current.style.visibility = "hidden")
                : (this.navbarRef.current.style.visibility = "visible"),
              se().refresh();
          };
          remapValue(i, l, _, d, o) {
            return d + ((o - d) * (i - l)) / (_ - l);
          }
          clamp = (i, l, _) => Math.min(Math.max(i, l), _);
          componentDidMount() {
            window.addEventListener("scroll", this.handleScroll),
              this.handleScroll(void 0);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
          convertAbilityDesc(i) {
            if (!i) return null;
            let l = i.desc_loc;
            return (
              i.special_values.forEach((_) => {
                let d =
                  _.values_float.length > 0 ? (0, R.F)(_.values_float[0]) : "0";
                (l = l.replace("%" + _.name + "%", d)),
                  (l = l.replace("%" + _.name.toLowerCase() + "%", d));
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
              (l = l.replace(/\n\n/g, " ")),
              (0, r.Wn)(l)
            );
          }
          render() {
            const i = A.o.getPatchNotes("7.40", t.r.LANGUAGE),
              l = T.B5.Get().getHeroData(155);
            let _ = (0, P.wwZ)((0, P.sfN)(t.r.LANGUAGE));
            _ === "zh-cn" ? (_ = "zh-Hans") : _ === "zh-tw" && (_ = "zh-Hant");
            let d = "largo_logo_en";
            return (
              t.r.LANGUAGE == "schinese" && (d = "largo_logo_cn"),
              (0, a.jsxs)("div", {
                id: oe,
                className: e().Largo,
                children: [
                  (0, a.jsxs)("div", {
                    className: (0, s.A)(
                      e().TrailerContainer,
                      this.state.bPlayingVideo ? null : e().Hidden,
                    ),
                    children: [
                      (0, a.jsx)("video", {
                        ref: this.videoRef,
                        className: (0, s.A)(e().TrailerVideo),
                        poster: `${t.r.VIDEO_URL}/largo/largo_trailer_poster.jpg`,
                        autoPlay: !1,
                        preload: "none",
                        muted: !1,
                        loop: !1,
                        playsInline: !1,
                        controls: !0,
                        crossOrigin: "anonymous",
                        children: (0, a.jsx)("source", {
                          type: "video/mp4",
                          src: `${t.r.VIDEO_URL}/largo/largo_trailer.mp4`,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: e().CloseButton,
                        onClick: () => this.setPlayingVideo(!1),
                        children: (0, a.jsx)("img", {
                          className: e().CloseButtonImage,
                          src: `${t.r.IMG_URL}/close.png`,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(B.mg, {
                    children: (0, a.jsx)("title", {
                      children: (0, r.Wn)("#largo_website_title"),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    ref: this.parallaxContainerRef,
                    className: (0, s.A)(e().PageContainer, e().Parallax),
                    children: [
                      (0, a.jsx)(I.A, { bOverlapping: !0 }),
                      (0, a.jsxs)("div", {
                        ref: this.navbarRef,
                        className: e().AnchorNavigation,
                        children: [
                          (0, a.jsx)("div", {
                            className: (0, s.A)(
                              e().AnchorLink,
                              e().LabelFont,
                              e().LabelMedium,
                            ),
                            onClick: () => this.scrollToTarget(this.newHeroRef),
                            children: (0, r.Wn)("#largo_archor_new_hero"),
                          }),
                          (0, a.jsx)("div", {
                            className: (0, s.A)(
                              e().AnchorLink,
                              e().LabelFont,
                              e().LabelMedium,
                            ),
                            onClick: () =>
                              this.scrollToTarget(this.treasureRef),
                            children: (0, r.Wn)("#largo_archor_new_treasure"),
                          }),
                          (0, a.jsx)("div", {
                            className: (0, s.A)(
                              e().AnchorLink,
                              e().LabelFont,
                              e().LabelMedium,
                            ),
                            onClick: () =>
                              this.scrollToTarget(this.gameplayRef),
                            children: (0, r.Wn)("#largo_archor_new_gameplay"),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        id: "HeaderSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().HeaderSection,
                        ),
                        children: [
                          (0, a.jsx)(w, {
                            video: "largo/largo_header_loop.webm",
                            image: "largo/largo_header.jpg",
                            additionalClassName: e().LargoHeaderImage,
                          }),
                          (0, a.jsx)("div", {
                            className: e().HeaderTopGradient,
                          }),
                          (0, a.jsxs)("div", {
                            ref: this.newHeroRef,
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, a.jsx)(w, {
                                image: "largo/foliage.png",
                                additionalClassName:
                                  e().LargoHeaderFoliageImage,
                              }),
                              (0, a.jsxs)("div", {
                                className: e().WebsiteSectionHeader,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: e().UpdateSummary,
                                    children: [
                                      (0, a.jsx)("h1", {
                                        className: (0, s.A)(
                                          e().TitleFont,
                                          e().TitleSmall,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_website_subtitle",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().DisplayFont,
                                          e().DisplaySmall,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_website_summary",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, s.A)(e().LogoContainer),
                                    children: (0, a.jsx)("img", {
                                      className: e().LogoImage,
                                      src: `${t.r.IMG_URL}/largo/${d}.png`,
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().HeroRolesContainer,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().HeroRole,
                                          e().LabelFont,
                                          e().LabelLarge,
                                        ),
                                        children: (0, r.Wn)(
                                          "#hero_attack_type_melee",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().HeroRole,
                                          e().LabelFont,
                                          e().LabelLarge,
                                        ),
                                        children: (0, r.Wn)("#hero_durable"),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().HeroRole,
                                          e().LabelFont,
                                          e().LabelLarge,
                                        ),
                                        children: (0, r.Wn)("#hero_disabler"),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().HeroRole,
                                          e().LabelFont,
                                          e().LabelLarge,
                                        ),
                                        children: (0, r.Wn)("#hero_support"),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().HeroAttributesContainer,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: (0, s.A)(
                                          e().HeroAttributeIcon,
                                          e().Strength,
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: (0, s.A)(
                                          e().HeroComplexityIcon,
                                          e().Filled,
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: (0, s.A)(
                                          e().HeroComplexityIcon,
                                          e().Filled,
                                        ),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: (0, s.A)(
                                          e().HeroComplexityIcon,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().WebsiteIntro,
                                      e().DisplayFont,
                                      e().DisplaySmall,
                                      e().LightGrayText,
                                    ),
                                    children: (0, r.Wn)(
                                      "#largo_website_introduction",
                                    ),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().StandardButton,
                                    onClick: () => this.setPlayingVideo(!0),
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().ButtonText,
                                        children: (0, r.Wn)("#play_trailer"),
                                      }),
                                      (0, a.jsx)(X, {}),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().ActionTextImageBlock,
                                  e().ComicContainer,
                                ),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: (0, s.A)(
                                      e().ComicCoverImageContainer,
                                    ),
                                    children: (0, a.jsx)(w, {
                                      image: "largo/largo_comic_cover.png",
                                      additionalClassName: e().ComicCoverImage,
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockLabel,
                                          e().LabelFont,
                                          e().LabelMedium,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_comic_label",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().DisplayFont,
                                          e().DisplayLarge,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_comic_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                          e().LightGrayText,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_comic_description",
                                        ),
                                      }),
                                      (0, a.jsx)(V.N_, {
                                        to: Y.J.largo_comic(),
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().StandardButton,
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: e().ButtonText,
                                              children: (0, r.Wn)(
                                                "#comics_view_comic",
                                              ),
                                            }),
                                            (0, a.jsx)(z.U, {}),
                                          ],
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
                      F(),
                      (0, a.jsx)("div", {
                        className: e().AbilitySection,
                        children: (0, a.jsxs)(m.gi, {
                          className: e().AbilityCarousel,
                          naturalSlideWidth: 100,
                          naturalSlideHeight: 56.25,
                          totalSlides: k.length,
                          children: [
                            (0, a.jsx)(m.Ap, {
                              className: e().AbilitySlider,
                              children: k.map((o, c) =>
                                (0, a.jsxs)(
                                  m.q7,
                                  {
                                    className: e().AbilitySlide,
                                    index: c,
                                    children: [
                                      (0, a.jsxs)("video", {
                                        className: e().AbilityVideo,
                                        autoPlay: !0,
                                        preload: "auto",
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        poster: `${t.r.VIDEO_URL}/${o.posterDir}`,
                                        children: [
                                          o.videoSrcWebm &&
                                            (0, a.jsx)("source", {
                                              type: "video/webm",
                                              src: `${t.r.VIDEO_URL}/${o.videoSrcWebm}`,
                                            }),
                                          o.videoSrcMp4 &&
                                            (0, a.jsx)("source", {
                                              type: "video/mp4",
                                              src: `${t.r.VIDEO_URL}/${o.videoSrcMp4}`,
                                            }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          e().SlideAbilityInfoContainer,
                                        children: (0, a.jsxs)("div", {
                                          className: e().AbilityText,
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: (0, s.A)(
                                                e().AbilityName,
                                                e().TitleFont,
                                                e().TitleSmall,
                                              ),
                                              children: l?.abilities.find(
                                                (h) => h.id == o.abilityId,
                                              ).name_loc,
                                            }),
                                            (0, a.jsx)("div", {
                                              className: (0, s.A)(
                                                e().AbilityDesc,
                                                e().BodyFont,
                                                e().BodyMedium,
                                              ),
                                              children: this.convertAbilityDesc(
                                                l?.abilities.find(
                                                  (h) => h.id == o.abilityId,
                                                ),
                                              ),
                                            }),
                                            c == 3 &&
                                              (0, a.jsxs)("div", {
                                                className:
                                                  e()
                                                    .UltimateAbilitiesContainer,
                                                children: [
                                                  (0, a.jsx)(M.cT, {
                                                    heroData: l,
                                                    abilityData:
                                                      l?.abilities.find(
                                                        (h) => h.id == 1663,
                                                      ),
                                                    bShowVideo: !1,
                                                    abilityHotKey: "Q",
                                                    additionalClassName:
                                                      e().HeroesAbility,
                                                    abilityType: e().Active,
                                                    tooltipFlipped: !0,
                                                  }),
                                                  (0, a.jsx)(M.cT, {
                                                    heroData: l,
                                                    abilityData:
                                                      l?.abilities.find(
                                                        (h) => h.id == 1664,
                                                      ),
                                                    bShowVideo: !1,
                                                    abilityHotKey: "W",
                                                    additionalClassName:
                                                      e().HeroesAbility,
                                                    abilityType: e().Active,
                                                    tooltipFlipped: !0,
                                                  }),
                                                  (0, a.jsx)(M.cT, {
                                                    heroData: l,
                                                    abilityData:
                                                      l?.abilities.find(
                                                        (h) => h.id == 1665,
                                                      ),
                                                    bShowVideo: !1,
                                                    abilityHotKey: "E",
                                                    additionalClassName:
                                                      e().HeroesAbility,
                                                    abilityType: e().Active,
                                                    tooltipFlipped: !0,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  `HeroAbilitySlide-${c}`,
                                ),
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: e().CarouselDotsSection,
                              children: (0, a.jsxs)("div", {
                                className: e().CarouselDotsContainer,
                                children: [
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().CarouselDotsHeading,
                                      e().LabelFont,
                                      e().LabelLarge,
                                    ),
                                    children: (0, r.Wn)("#hero_abilities"),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, s.A)(e().CarouselDots),
                                    children: k.map((o, c) =>
                                      (0, a.jsx)(
                                        m.cL,
                                        {
                                          slide: c,
                                          className: e().AbilitySelectorDot,
                                          children: (0, a.jsx)(M.cT, {
                                            heroData: l,
                                            abilityData: l?.abilities.find(
                                              (h) => h.id == o.abilityId,
                                            ),
                                            bShowVideo: !1,
                                            abilityHotKey: o.hotKey,
                                            additionalClassName:
                                              e().HeroesAbility,
                                            abilityType: e().Active,
                                          }),
                                        },
                                        `HeroAbilityDot-${c}`,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().WallpaperSection,
                        ),
                        children: [
                          (0, a.jsx)("div", {
                            className: e().WallpaperBackground,
                          }),
                          (0, a.jsxs)("div", {
                            className: e().WebsiteSectionInner,
                            children: [
                              (0, a.jsxs)("div", {
                                className: e().WebsiteSectionHeader,
                                children: [
                                  (0, a.jsx)("img", {
                                    className: e().LargoEmblem,
                                    src: `${t.r.IMG_URL}/largo/largo_emblem.png`,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().SectionHeaderLabel,
                                      e().LabelFont,
                                      e().LabelMedium,
                                      e().LightGrayText,
                                    ),
                                    children: (0, r.Wn)("#largo_hero_name"),
                                  }),
                                  (0, a.jsx)("h2", {
                                    className: (0, s.A)(
                                      e().SectionHeaderTitle,
                                      e().TitleFont,
                                      e().TitleLarge,
                                    ),
                                    children: (0, r.Wn)("#wallpapers"),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: e().Wallpapers,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: e().WallpaperGroup,
                                    children: [
                                      (0, a.jsx)("a", {
                                        href: `${t.r.IMG_URL}/largo/largo_wallpaper_1_desktop.jpg`,
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().Wallpaper,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${t.r.IMG_URL}/largo/largo_wallpaper_1_desktop_thumbnail.jpg`,
                                            }),
                                            (0, a.jsx)(S, {}),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("a", {
                                        href: `${t.r.IMG_URL}/largo/largo_wallpaper_1_mobile.jpg`,
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().Wallpaper,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${t.r.IMG_URL}/largo/largo_wallpaper_1_mobile_thumbnail.jpg`,
                                            }),
                                            (0, a.jsx)(S, {}),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().WallpaperGroup,
                                    children: [
                                      (0, a.jsx)("a", {
                                        href: `${t.r.IMG_URL}/largo/largo_wallpaper_2_desktop.jpg`,
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().Wallpaper,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${t.r.IMG_URL}/largo/largo_wallpaper_2_desktop_thumbnail.jpg`,
                                            }),
                                            (0, a.jsx)(S, {}),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("a", {
                                        href: `${t.r.IMG_URL}/largo/largo_wallpaper_2_mobile.jpg`,
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().Wallpaper,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${t.r.IMG_URL}/largo/largo_wallpaper_2_mobile_thumbnail.jpg`,
                                            }),
                                            (0, a.jsx)(S, {}),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().WallpaperGroup,
                                    children: [
                                      (0, a.jsx)("a", {
                                        href: `${t.r.IMG_URL}/largo/largo_wallpaper_3_desktop.jpg`,
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().Wallpaper,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${t.r.IMG_URL}/largo/largo_wallpaper_3_desktop_thumbnail.jpg`,
                                            }),
                                            (0, a.jsx)(S, {}),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("a", {
                                        href: `${t.r.IMG_URL}/largo/largo_wallpaper_3_mobile.jpg`,
                                        target: "_blank",
                                        children: (0, a.jsxs)("div", {
                                          className: e().Wallpaper,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${t.r.IMG_URL}/largo/largo_wallpaper_3_mobile_thumbnail.jpg`,
                                            }),
                                            (0, a.jsx)(S, {}),
                                          ],
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
                      (0, a.jsx)("div", {
                        id: "HeroDetailsSection",
                        className: (0, s.A)(e().HeroDetailsSection),
                        children: (0, a.jsxs)("div", {
                          className: e().HeroDetailsSectionInner,
                          children: [
                            (0, a.jsxs)("div", {
                              className: e().TextBlock,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockTitle,
                                    e().TitleFont,
                                    e().TitleSmall,
                                  ),
                                  children: (0, r.Wn)(
                                    "#largo_herodetails_section_subheader",
                                  ),
                                }),
                                (0, a.jsx)(V.N_, {
                                  to: Y.J.hero("largo"),
                                  children: (0, a.jsxs)("div", {
                                    className: e().StandardButton,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().ButtonText,
                                        children: (0, r.Wn)(
                                          "#view_hero_detail_page",
                                        ),
                                      }),
                                      (0, a.jsx)(z.U, {}),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: e().HeroImageContainer,
                              children: (0, a.jsx)("img", {
                                className: e().HeroImage,
                                src: `${t.r.IMG_URL}/heroes/crops/largo.png`,
                              }),
                            }),
                          ],
                        }),
                      }),
                      F(),
                      (0, a.jsx)("div", {
                        ref: this.treasureRef,
                        id: "TreasureSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().TreasureSection,
                        ),
                        children: (0, a.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, a.jsxs)("div", {
                              className: e().WebsiteSectionHeader,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().LabelFont,
                                    e().LabelMedium,
                                  ),
                                  children: (0, r.Wn)(
                                    "#largo_treasure_section_label",
                                  ),
                                }),
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderTitle,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, r.Wn)(
                                    "#largo_treasure_section_title",
                                  ),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().WebsiteDescription,
                                    e().DisplayFont,
                                    e().DisplaySmall,
                                  ),
                                  children: (0, r.Wn)(
                                    "#largo_treasure_section_introduction",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)(m.gi, {
                              className: e().TreasureCarousel,
                              naturalSlideWidth: 600,
                              naturalSlideHeight: 960,
                              totalSlides: 9,
                              currentSlide: 8,
                              infinite: !0,
                              touchEnabled: !0,
                              dragEnabled: !1,
                              children: [
                                (0, a.jsxs)(m.Ap, {
                                  className: e().TreasureSlider,
                                  children: [
                                    (0, a.jsx)(m.q7, {
                                      index: 0,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 0,
                                        video: "set_shadowfiend",
                                        name: "#largo_treasure_hero_shadow_fiend_set",
                                        heroname:
                                          "#largo_treasure_hero_shadow_fiend",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 1,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 1,
                                        video: "set_primal_beast",
                                        name: "#largo_treasure_hero_primal_beast_set",
                                        heroname:
                                          "#largo_treasure_hero_primal_beast",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 2,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 2,
                                        video: "set_broodmother",
                                        name: "#largo_treasure_hero_broodmother_set",
                                        heroname:
                                          "#largo_treasure_hero_broodmother",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 3,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 3,
                                        video: "set_enigma",
                                        name: "#largo_treasure_hero_enigma_set",
                                        heroname: "#largo_treasure_hero_enigma",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 4,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 4,
                                        video: "set_ringmaster",
                                        name: "#largo_treasure_hero_ringmaster_set",
                                        heroname:
                                          "#largo_treasure_hero_ringmaster",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 5,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 5,
                                        video: "set_morphling",
                                        name: "#largo_treasure_hero_morphling_set",
                                        heroname:
                                          "#largo_treasure_hero_morphling",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 6,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 6,
                                        video: "set_silencer",
                                        name: "#largo_treasure_hero_silencer_set",
                                        heroname:
                                          "#largo_treasure_hero_silencer",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 7,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 7,
                                        video: "set_centaur",
                                        name: "#largo_treasure_hero_centaur_warrunner_set",
                                        heroname:
                                          "#largo_treasure_hero_centaur_warrunner",
                                        autoplay: !1,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(m.q7, {
                                      index: 8,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(y, {
                                        index: 8,
                                        video: "set_tiny",
                                        name: "#largo_treasure_hero_tiny_set",
                                        heroname: "#largo_treasure_hero_tiny",
                                        autoplay: !0,
                                        onSlideIn: (o, c) => {
                                          this.setState({
                                            treasureName: o,
                                            heroName: c,
                                          });
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().HeroName,
                                    e().LabelFont,
                                    e().LabelSmall,
                                  ),
                                  children: (0, r.Wn)(this.state.heroName),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TreasureName,
                                    e().DisplayFont,
                                    e().DisplaySmall,
                                  ),
                                  children: (0, r.Wn)(this.state.treasureName),
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().CarouselDots,
                                  children: [
                                    (0, a.jsx)(m._X, {
                                      className: (0, s.A)(
                                        e().TreasurePaginationButton,
                                        e().Prev,
                                      ),
                                      children: (0, a.jsx)("div", {
                                        className: e().PrevArrow,
                                      }),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 0,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 1,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 2,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 3,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 4,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 5,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 6,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 7,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.cL, {
                                      className: e().TreasureSelector,
                                      slide: 8,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(m.CC, {
                                      className: (0, s.A)(
                                        e().TreasurePaginationButton,
                                        e().Next,
                                      ),
                                      children: (0, a.jsx)("div", {
                                        className: e().NextArrow,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      F(),
                      (0, a.jsxs)("div", {
                        ref: this.gameplayRef,
                        id: "GameplayUpdateContainer",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().GameplayUpdateContainer,
                        ),
                        children: [
                          (0, a.jsx)("div", {
                            className: e().GameplayBackground,
                          }),
                          (0, a.jsxs)("div", {
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
                                      e().LightGrayText,
                                    ),
                                    children: (0, r.Wn)(
                                      "#largo_gameplay_subtitle",
                                    ),
                                  }),
                                  (0, a.jsx)("h2", {
                                    className: (0, s.A)(
                                      e().SectionHeaderLabel,
                                      e().TitleFont,
                                      e().TitleExtraLarge,
                                    ),
                                    children: (0, r.Wn)(
                                      "#largo_gameplay_title",
                                    ),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().SectionDescriptionLabel,
                                      e().DisplayFont,
                                      e().DisplayMedium,
                                      e().LightGrayText,
                                    ),
                                    children: (0, r.Wn)(
                                      "#largo_gameplay_description",
                                    ),
                                  }),
                                ],
                              }),
                              " ",
                              W(),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().GameplaySubSection,
                                  e().Heroes,
                                ),
                                children: [
                                  (0, a.jsx)("div", {
                                    className: e().TextSection,
                                    children: (0, a.jsx)("p", {
                                      className: (0, s.A)(
                                        e().BlockTitle,
                                        e().TitleFont,
                                        e().TitleLarge,
                                      ),
                                      children: (0, r.Wn)(
                                        "#largo_gameplay_heroes_title",
                                      ),
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().HeroReworkContainer,
                                    children: [
                                      (0, a.jsx)(G, {
                                        patchnotes: i?.heroes,
                                        heroname: "lone_druid",
                                      }),
                                      (0, a.jsx)(G, {
                                        patchnotes: i?.heroes,
                                        heroname: "slark",
                                      }),
                                      (0, a.jsx)(G, {
                                        patchnotes: i?.heroes,
                                        heroname: "treant",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              " ",
                              W(),
                              (0, a.jsxs)("div", {
                                className: e().GameplaySubSection,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: e().TextSection,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleLarge,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_neutral_items_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().DisplayFont,
                                          e().DisplaySmall,
                                          e().LightGrayText,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_neutral_items_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().GameItemsContainer,
                                    children: [
                                      (0, a.jsx)(D, {
                                        name: "item_weighted_dice",
                                        isNew: !0,
                                      }),
                                      (0, a.jsx)(D, {
                                        name: "item_idol_of_screeauk",
                                        isNew: !0,
                                      }),
                                      (0, a.jsx)(D, {
                                        name: "item_riftshadow_prism",
                                        isNew: !0,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextSection,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleSmall,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_neutral_items_removed_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().DisplayFont,
                                          e().DisplaySmall,
                                          e().LightGrayText,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_neutral_items_removed_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().RemovedNeutralItemsContainer,
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: e().RemovedNeutralItem,
                                        children: [
                                          (0, a.jsx)("img", {
                                            className: (0, s.A)(
                                              e().RemovedNeutralItemImage,
                                            ),
                                            src: `${t.r.IMG_URL}/largo/helm_of_the_undying_tombstone.png`,
                                          }),
                                          (0, a.jsx)(D, {
                                            name: "item_helm_of_the_undying",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: e().RemovedNeutralItem,
                                        children: [
                                          (0, a.jsx)("img", {
                                            className: (0, s.A)(
                                              e().RemovedNeutralItemImage,
                                            ),
                                            src: `${t.r.IMG_URL}/largo/sisters_shroud_tombstone.png`,
                                          }),
                                          (0, a.jsx)(D, {
                                            name: "item_sisters_shroud",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: e().RemovedNeutralItem,
                                        children: [
                                          (0, a.jsx)("img", {
                                            className: (0, s.A)(
                                              e().RemovedNeutralItemImage,
                                            ),
                                            src: `${t.r.IMG_URL}/largo/pyrrhic_cloak_tombstone.png`,
                                          }),
                                          (0, a.jsx)(D, {
                                            name: "item_pyrrhic_cloak",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              " ",
                              W(),
                              (0, a.jsxs)("div", {
                                className: e().GameplaySubSection,
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: e().TextSection,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleLarge,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_terrain_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().DisplayFont,
                                          e().DisplaySmall,
                                          e().LightGrayText,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_terrain_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, s.A)(
                                      e().ComparisonContainer,
                                    ),
                                    children: (0, a.jsxs)(j.U, {
                                      labels: [
                                        "#largo_gameplay_terrain_comparison_widsom_radiant",
                                        "#largo_gameplay_terrain_comparison_gates_radiant",
                                        "#largo_gameplay_terrain_comparison_bridge_radiant",
                                        "#largo_gameplay_terrain_comparison_widsom_dire",
                                        "#largo_gameplay_terrain_comparison_gates_dire",
                                        "#largo_gameplay_terrain_comparison_bridge_dire",
                                      ],
                                      children: [
                                        (0, a.jsx)(f.EW, {
                                          itemOne: (0, a.jsx)(j.v, {
                                            is_new: !0,
                                            image:
                                              "largo/terrain/wisdom_shrine_radiant_old.jpg",
                                          }),
                                          itemTwo: (0, a.jsx)(j.v, {
                                            is_new: !1,
                                            image:
                                              "largo/terrain/wisdom_shrine_radiant_new.jpg",
                                          }),
                                        }),
                                        (0, a.jsx)(f.EW, {
                                          itemOne: (0, a.jsx)(j.v, {
                                            is_new: !0,
                                            image:
                                              "largo/terrain/defenders_gate_radiant_old.jpg",
                                          }),
                                          itemTwo: (0, a.jsx)(j.v, {
                                            is_new: !1,
                                            image:
                                              "largo/terrain/defenders_gate_radiant_new.jpg",
                                          }),
                                        }),
                                        (0, a.jsx)(f.EW, {
                                          itemOne: (0, a.jsx)(j.v, {
                                            is_new: !0,
                                            image:
                                              "largo/terrain/bridge_radiant_old.jpg",
                                          }),
                                          itemTwo: (0, a.jsx)(j.v, {
                                            is_new: !1,
                                            image:
                                              "largo/terrain/bridge_radiant_new.jpg",
                                          }),
                                        }),
                                        (0, a.jsx)(f.EW, {
                                          itemOne: (0, a.jsx)(j.v, {
                                            is_new: !0,
                                            image:
                                              "largo/terrain/wisdom_shrine_dire_old.jpg",
                                          }),
                                          itemTwo: (0, a.jsx)(j.v, {
                                            is_new: !1,
                                            image:
                                              "largo/terrain/wisdom_shrine_dire_new.jpg",
                                          }),
                                        }),
                                        (0, a.jsx)(f.EW, {
                                          itemOne: (0, a.jsx)(j.v, {
                                            is_new: !0,
                                            image:
                                              "largo/terrain/defenders_gate_dire_old.jpg",
                                          }),
                                          itemTwo: (0, a.jsx)(j.v, {
                                            is_new: !1,
                                            image:
                                              "largo/terrain/defenders_gate_dire_new.jpg",
                                          }),
                                        }),
                                        (0, a.jsx)(f.EW, {
                                          itemOne: (0, a.jsx)(j.v, {
                                            is_new: !0,
                                            image:
                                              "largo/terrain/bridge_dire_old.jpg",
                                          }),
                                          itemTwo: (0, a.jsx)(j.v, {
                                            is_new: !1,
                                            image:
                                              "largo/terrain/bridge_dire_new.jpg",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              " ",
                              W(),
                              (0, a.jsx)("div", {
                                className: e().TextSection,
                                children: (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockTitle,
                                    e().TitleFont,
                                    e().TitleLarge,
                                  ),
                                  children: (0, r.Wn)(
                                    "#largo_gameplay_subtitle",
                                  ),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: e().PatchnotesContainer,
                                children: [
                                  (0, a.jsx)(H.fs, {
                                    patchnotes: i?.general_notes,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, a.jsx)(H.wL, {
                                    patchnotes: i?.neutral_creeps,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, a.jsx)(H.ZV, {
                                    patchnotes: i?.items,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, a.jsx)(H.ZV, {
                                    patchnotes: i?.neutral_items,
                                    is_neutrals: !0,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                  (0, a.jsx)(H.ob, {
                                    patchnotes: i?.heroes,
                                    headerClassName: e().PatchNotesHeaderLabel,
                                    notesListClassName: e().PatchNotesList,
                                  }),
                                ],
                              }),
                              " ",
                              W(),
                              (0, a.jsx)("div", {
                                className: e().WebsiteSectionHeader,
                                children: (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleMedium,
                                  ),
                                  children: (0, r.Wn)(
                                    "#largo_gameplay_qol_title",
                                  ),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().TextImageBlockHorizontal,
                                ),
                                children: [
                                  (0, a.jsx)(w, {
                                    image: "largo/demo_hero.jpg",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: e().TextBlock,
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockTitle,
                                          e().TitleFont,
                                          e().TitleSmall,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_qol_demo_hero_title",
                                        ),
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, s.A)(
                                          e().BlockDescription,
                                          e().BodyFont,
                                          e().BodyLarge,
                                        ),
                                        children: (0, r.Wn)(
                                          "#largo_gameplay_qol_demo_hero_description",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(e().BugfixListContainer),
                                children: [
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().BugFixCategoryTitle,
                                      e().LabelFont,
                                      e().LabelMedium,
                                    ),
                                    children: (0, r.Wn)(
                                      "#largo_gameplay_qol_general_title",
                                    ),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, s.A)(e().BugfixListColumn),
                                    children: (0, a.jsx)(N, {
                                      description:
                                        "#largo_gameplay_qol_buffs_description",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(e().BugfixListContainer),
                                children: [
                                  (0, a.jsx)("p", {
                                    className: (0, s.A)(
                                      e().BugFixCategoryTitle,
                                      e().LabelFont,
                                      e().LabelMedium,
                                    ),
                                    children: (0, r.Wn)(
                                      "#largo_gameplay_qol_ability_draft_title",
                                    ),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: (0, s.A)(e().BugfixListColumn),
                                    children: [
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_1",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_2",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_3",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_4",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_5",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_6",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_7",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_8",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_9",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_10",
                                      }),
                                      (0, a.jsx)(N, {
                                        description:
                                          "#largo_gameplay_qol_ability_draft_description_11",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(O.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        K = le([b.PA], K);
      },
      11417: (C) => {
        C.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      85655: (C) => {
        C.exports = {
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
      49728: (C) => {
        C.exports = {
          Tooltip: "_3QdqqqQ4Q3R1rWut7FcmYa",
          CarouselFade: "XyQZsqmd7OESJah5_-3ut",
          StandardButton: "_1kWY3197KaLfkUE3D8zvQy",
          ButtonText: "_3aZKHwnfVE_LcrF5JVBRRj",
          Icon: "_1UvCcswIEWtjrEVI7ATTFd",
          Play: "FEk0eZNa_DkXPUfvCyvY-",
          SteamLogo: "_2OeWHZHBJcZanYyFPHbYlp",
          ToolTip: "_3LLI2i07Bi1vkJteOFOpCP",
          PlayerReportTooltip: "_1MMlR-H0BEUsm47x3aix6k",
          TitleFont: "_1EAZV6VVmljbiJz19IXmoD",
          TitleExtraLarge: "_8GPz9evyxJhoD0hF0PKeS",
          TitleLarge: "_2qmt4GGR-DDKw4_MOaDHWn",
          TitleMedium: "O1kiFfDNrQTqMYxP1IOzJ",
          TitleSmall: "_3beiROuPxS97es1RCsu-nJ",
          TitleExtraSmall: "_1N8AxrRYPqdeAWIMgjAiBn",
          DisplayFont: "_21QrEyDnPqXcLdoy5kr8IQ",
          DisplayExtraLarge: "VNA1cG_6Z3kAMMeZDsfgB",
          DisplayLarge: "_1EhzPszm0hV25tkfUM-k_z",
          DisplayMedium: "_3VIDvTXUaEo4fXXAkKv2Nx",
          DisplaySmall: "jzRSsaaubxgOz7wXzCZL8",
          BodyFont: "KfT9w9Zv7Pu_lbUUoPYfn",
          BodyExtraLarge: "NF2qf8hSHWm4u35w6xNlg",
          BodyLarge: "_2f4UMW-AcMXnW1T2SafsgV",
          BodyMedium: "_3Hk7u_JdHcjdGqIsBEVtGh",
          BodySmall: "i4j-tdAVT5R5hx14hBun7",
          LabelFont: "_1o--1SsRfDbJyBgvFpnlTO",
          LabelExtraLarge: "_2HWhS3-9gPjbO0Tqd26Mh1",
          LabelLarge: "_2YfbO8L89OSVG57_HLasii",
          LabelMedium: "_2M95plN-c3qHCZueXQFkGy",
          LabelSmall: "_1qzfdKY4WTTr_2BECFUkvg",
          LightGrayText: "zkn-nBcrKDecEZn6IRDeX",
          GrayText: "_1B1T69k9RDcczbIyf9InIg",
          ControlIcon: "JqoDGIA41Zp8C6Kb1QI03",
          PageContainer: "_3b4fJswJk158U5Ya9oLcRM",
          Hidden: "_1nd8-G3WEepA6ebtVhR84o",
          Largo: "_3w24RQaSd6k6Rw8I5l9f-B",
          MobileOnly: "S1mTaLQ0qXSlZqA-PEuh7",
          HeroRole: "_1KseUTTgxVJvjxmpNX7CZH",
          TreasureName: "_3eLKJZTmr_qUgqw28syJ1N",
          DisplayExtraSmall: "_2QPWS2pnF4WBiS-Jg416r3",
          ReworkHighlight: "_3CMCmykLoYqhW9moqRYOl2",
          WebsiteSection: "_3CKcTCvmf947zbgS8eX_eh",
          WebsiteSectionInner: "_2LiOhqCcriBTk_MTEkQUvr",
          WebsiteSectionHeader: "_29-OasU5wbyvr0LmGUzgkJ",
          TextSection: "ZTzf64nFksMJJ4905Wp6R",
          SubsectionDivider: "_14k4ZfOIZ6Pea_UmuNIS8o",
          TopDash: "_87EY5B-uG386PysHFqC6n",
          Background: "_3BKQC1HPyN6weAsbW8cZ8a",
          SectionDivider: "_2RyRnBtZsJRl-u7P6cdZPW",
          DarkEdge: "_23gcyF61P-NhJCCw67nrtj",
          Left: "_1VzZmomV_CDXM9aEEZCsvX",
          Right: "_3KtM3oivd4rai0dEFuJsfY",
          CenterEmblem: "_3pDKHfFBjpiDQfDCZAXwrX",
          ArrowPattern: "_31qy-BpbU9JMMPV37fEY_C",
          ButtonsSection: "_1ipZF3v1aqPRym_NCAtLMr",
          Grid_4: "_2PaVlOZQpockTjZjYrQYfn",
          Grid_3: "zRKxwEFpRNwY_5iyKjR6U",
          Grid_2: "_2z45zau4CFDEuBdGrnjIxU",
          TextBlock: "_1GU97SHbybiP3VRhSoam8f",
          TextImageBlockVertical: "_2iUWxrqUQCQ3k6fD8GI_GV",
          TextImageBlockHorizontal: "_2dU7YcS-RANS_6yvuFBp1G",
          Flipped: "_28qUF2CdtjFPF7_cYHrWRk",
          NarrowImage: "_1dhDduSwvHeTa8R6SuBo5z",
          WideImage: "OKENLBAO0xtxS0irzIJ9c",
          FullWidthImage: "_2gaEFiwEUMhYKAH_l5KOhS",
          ActionTextImageBlock: "_32skCzA-XgHEWCTCIMxpe-",
          ActionImage: "_3jRvNFXxSgiaHv3XfR4mSW",
          ImmersiveTextImageBlock: "_2XZY3wsZDbZsX8g2d0zLSY",
          BasicComponentsSection: "_2ZPqRPgX1jAtK--VvayENX",
          DashedSectionSubHeader: "_36wat8ntF315OfMmTOlmsI",
          Label: "_3GreldX3s-8jCYcpwQlG_P",
          DashLeft: "_2h0n45HWOI0N1GkYcsCX97",
          DashRight: "_11EM2_siLaOvtYUQQ52QLO",
          AnchorNavigation: "_17IcndotwqwIcmjQvY5rni",
          AnchorLink: "_1UkPrwnzv1zwpJD1V9zAV1",
          AbilityImageContainer: "_2bmZqXjndarqmoWhol9SkL",
          AbilityImage: "_2VWEuTA8pciI7yL_ioOVnf",
          AbilityHotKey: "_1u5vkA2My0llxnULORxEdp",
          Active: "_3_T7rKkRXmSASu_r_y6Ssh",
          DotaPlusBadge: "_3ZN4BvnQrLydGijDWnwysz",
          HeaderSection: "_31i1mKy9gPgIMWbPUoDHgh",
          TempVideoLabel: "_1A72BTdZV8lUpdaYzhZ3fe",
          LargoHeaderFoliageImage: "_3ASeYL8ZjfKt_AmavIQA6J",
          LargoHeaderImage: "_1_zrpa2_8XHXEREckjdWi_",
          HeaderTopGradient: "_3WUeJ6DCpOQ2_dLXiB_xhe",
          UpdateSummary: "_3Q7-V8Fsf7z5EDm7z46DY3",
          LogoContainer: "_1KMMpNpy4zWkF7RU8wDK5N",
          LargoLabel: "_1pWXTgYv0VXP_GV1XY0p8Z",
          LogoImage: "_304MOkwmIUZOjMRXMUENaI",
          SectionSubHeaderLabel: "_1GDCGn_E8Lfj1Cex5wGGDZ",
          ComicContainer: "_1VsdKQc8QvwGHU721xnsOe",
          ComicCoverImageContainer: "_2AuSuN0Ylw6yzsZ0zrC6e2",
          ComicCoverImage: "_14wTPkWVVTN70roWi76Jn4",
          HeroDetailsSection: "_2KCuUDb60RI2_8bTggHpa8",
          HeroDetailsSectionInner: "_1GIVDel3Wff3jbEwjx1MBE",
          HeroImageContainer: "_1afVxJ6Fqj3MziCo_xQlj3",
          HeroImage: "_3CvV_kd45XLpz464VVpBew",
          TreasureSection: "_9bj5VQ4FEbPTw-1DqBLWN",
          SectionHeaderLabel: "_2vYwQ6mi-lErZCVhswfJkz",
          WebsiteDescription: "_2CbVbpzY12iNkpSIpfyRCM",
          TreasureCarousel: "_2X8pDW_1QoRNiCftQl3ylV",
          TreasureSlider: "_3tvDH2Twl7h1KoskIZnqwu",
          TreasureSlide: "_2XlbdH_UULGsg85vRJ9CBh",
          SlideContainer: "_27E8zGcsU_e37byXRFXfjD",
          TreasureSlideHidden: "_1OdIiqYn51UnSAjdcA5--e",
          HeroName: "_2HylYwG2NsqrawHticpO8q",
          CarouselDots: "_1YSgZQsDiFBimev9k0fps8",
          TreasureSelector: "aarP6rMQ-J_mZRCI1QXj6",
          TreasurePaginationButton: "_2DnQx1lQUV3DQbq9gRMQRT",
          Prev: "_2ohC8EfuDpJzQopSmyPY7m",
          Next: "_1Xicb1ONrGnee9b97rc37S",
          NextArrow: "_2LV3fP1UdQuLylg_OyBr_q",
          PrevArrow: "_3BrQNYHvRjHsaRUbcYMKa1",
          AbilitySection: "_1K3Got71UKWf2PFrpMb8eB",
          AbilityCarousel: "_3wRNASFWFf_spbPiQtFos0",
          AbilitySlider: "_3u7NEwIxHs1HcZZP00Ozxl",
          AbilitySlide: "_1k9ei2I88kZ6C5ihu2ovB6",
          SlideAbilityInfoContainer: "_2jfnwfvezaV-cWeAthFugW",
          AbilityText: "koRUdAI0jaCrnXj8BILc4",
          AbilityName: "_1j2s1GUI4tg0px7RRoRhZ8",
          AbilityDesc: "_2wJUqFoB1S5_JYWs6680zU",
          UltimateAbilitiesContainer: "xs8NXoiRJ9KCieYtpTagY",
          HeroesAbility: "_3zr9gVRewPnPeHe5JmkNWj",
          CarouselDotsSection: "_1vlT_s37a5t78aNEmt6pGG",
          CarouselDotsContainer: "_2HBD0lDR2mTF2isG3-d8NQ",
          CarouselDotsHeading: "_38oTwr4j9rH1EMvGxKn_WZ",
          AbilitySelectorDot: "_1HK3GJVmjSXxq-AhlMYpvF",
          RemovedNeutralItemsContainer: "_3rhmYORyC-KFXJRoFAe2Oi",
          RemovedNeutralItem: "_2glbczCfON7B7o-2_ekL3e",
          GameItemDetails: "_29AosZBPjfHilFHu7tWpKU",
          RemovedNeutralItemImage: "wZ5ERE3K2BK_d4gsbRz2f",
          GameplayUpdateContainer: "n4ZWQ3ilL0DfZCRknMq_0",
          BlockDescription: "_2hw_Uih0ud9CYlFM-IoVG",
          GameplayBackground: "SRz1KsT_Ms9vh47fiX_zE",
          GameplaySubSection: "_26iPp91eesWBzqEBv4gXJD",
          GameItemsContainer: "_2xhEfVqTIgMS9Cw4ONHjLq",
          Hovered: "_2-U2_SFJiRbcDxrcC69PJ7",
          PatchnotesContainer: "_2hqF1dmrtxOqhiKqHuJzPY",
          PatchNotesHeaderLabel: "_3HWc9MHqZhuJJukcw4vhdA",
          MiscSection: "_1zXNDk7NgufMY4HtBAiBs1",
          UpdatesSection: "_3ChV_4isAY6NV0XCK_5oxa",
          QualityOfLifeContainer: "_3cqeQPaCueVhNoO6iawjUG",
          BugfixListContainer: "_1ym1uTDXu5Zmjs_zqPSVRo",
          BugFixCategoryTitle: "_2KYsFAbyZ_X8DAdfYvz7N",
          BugfixListColumn: "_2lGRqCmZGWPDsS7cKJyXXg",
          BugFix: "_3DCKSnTkVeVRCFw07DrH7k",
          HeroAttributesContainer: "_2m-4A39amQiZbbXothZTLR",
          HeroAttributeIcon: "y4l7txUBtX0tjRvvbvCgD",
          Strength: "_3Ade9jc7AeCIdbm4X49m7D",
          Agility: "_3GVMaYasXzvNhFNSJg7nI",
          Intelligence: "_1tBhrQD7aqVwTsIiqgnKWV",
          Universal: "_3dJv_cuhRzl0bCesUolzGD",
          HeroComplexityIcon: "_24yqhbncmZ-Ga_ts7KntsR",
          Filled: "_3JprYRRqjgEJYCVFp6vqM5",
          HeroRolesContainer: "_1DRGAkyj33POVd1HGTPnf",
          WallpaperSection: "_2wPUqrOAcJXjArZti_GnO",
          WallpaperBackground: "_3puP7-Sy1UpxyeuFjSaiKK",
          SectionHeaderTitle: "TAjpXNgVaHTLqCftsJ-Sm",
          LargoEmblem: "_2atJphrlLOQRVruaE40eKw",
          Wallpapers: "_3cvXJRuaRPPgNcS3RwJhIf",
          WallpaperGroup: "_17ut2nn16IV1EHYBEAMEdf",
          Wallpaper: "C3RBsCrGtKmWbUBiBEU-4",
          TrailerContainer: "_2uGF5ofKasN3EUQrA6fuEO",
          TrailerVideo: "_2td26VVM8jIjPyZv27Qru5",
          CloseButton: "_3SU4RdVgWCVMBiPsYbT2C7",
          CloseButtonImage: "_3-qBOcs4xzSfsEpkLglKKr",
          IsNew: "_14ksWBYsATd53ut28AlLhI",
          ItemBorder: "i-Pm2g-LFqwWrwetFlvtl",
          NewBadge: "_1oats7EsDmrzV9GRVKgGpW",
          ReturningBadge: "_3n3G4mqMQxFTgZRN-rGRHV",
          HeaderContainer: "_3vNciiqrFbskz3IHuR0jQc",
          HeaderTierColor: "_1nzn26gw3SBcAKf5f584oR",
          Tier1: "_28XpyVZX7CmY1ih9FW30wr",
          Tier2: "bO4qPSy0sq76neK5g3jOO",
          Tier3: "_7TMvHPOpDvmYoEkRWjPa7",
          Tier4: "_2XEE_jTwIdhTCler7Tofso",
          Tier5: "_1MdxwBzWEb_WvuY_lkdnjI",
          Header: "_204y7K1UcVg7LUdSAbdj7w",
          ItemImage: "_383O5yS7pkRuThpg9DGfJm",
          HeaderText: "oEtp85vQtkt6dS_07_Y11",
          ItemName: "_3gO4zMJRL76HWl_ECrsORG",
          GoldPrice: "_173fLUDdlyJevi1gmO9g3S",
          GoldIcon: "_3lY_dncC9eABYyZJRwsERY",
          NeutralItemTier: "m5zjlt_nrjul9jRqfC96f",
          Body: "_2LcHMH2Gq1LxODvTeshWr5",
          Stats: "_2qgQTVxoIzJpzn4ko_xxJf",
          Stat: "_1HmbAuKrCMIE0AQupIeMgX",
          SingleValue: "_1p-xyV5ARLecKr9yh71tNC",
          DescriptionContainer: "_3MguV5ckkqLtjlrVXgO8e4",
          Description: "IY0KPDeuxcLejoXl62Q_E",
          DescriptionHeader: "_20UMjmetssKE1JBIIsk5XD",
          CooldownContainer: "shwvYFNJjw5cyVerkog_2",
          CooldownIcon: "_2iGblIDS4iI8VHEw9gf2Gz",
          CooldownText: "_2TXeG9SSDO3W8QOG4mg33l",
          ManaContainer: "z24Vr9YoJC6HYqzCbc9L6",
          ManaIcon: "_2RlN4iR0DjDs0To85N9qNK",
          ManaText: "_2b8fr9BhLB39zGAITZzR7m",
          HealthContainer: "_1OO9XbeRoP06VAPYczVT-q",
          HealthIcon: "_3sHA6KD9EW0K63jAwGih6s",
          HealthText: "_2h8QzsM8cV3fEFBa-edcIo",
          Lore: "_2mYqId6vUUVkadQtTZqfRC",
          Recipe: "_12tn7XyqNFLEbFsr9RoIdg",
          RecipeLabel: "hUEDHCPsm8dwKqU_bpuNX",
          RecipeImagesContainer: "_2K0DjaRsoEf704x6ZQcBum",
          RecipeComponentImage: "sWccuwG5Tg4ACNZJ3TSOX",
          RecipeCost: "_37fn5WP1FGSc_L47B0IC_w",
          HeroReworkContainer: "_3jJ699YXMPjQIeWMNRefd_",
          HeroReworkCondensed: "_2_6_S4-2CE5fNKMa92wIAN",
          HeroReworkContents: "_1AGj9WZqKr_f4ivwr3Pg58",
          HeroShadow: "_1RW2eJFNYKIfrGoBLhCUyY",
          HeroReworkPortrait: "_3VAN-CdghGd15CDc1LX9kd",
          HeroReworkPortraitVideo: "_1ge2eC5cINvpMVJ46Mgl94",
          Dash: "_1ZyGo29rBiYxswH2h-iU1E",
          HeroNameContainer: "_36N3P5UtsgIJnCS1qhjMpY",
          Large: "HbFYkjyGG959C0l2QJzlV",
          Small: "iCl9FPTqnmUxhBBuGRNLo",
          PrimaryStatIcon: "_3uSZsYA0ReAX-2miBzxpK9",
          ReworkHighlightsContainer: "_1N-J_KP6sHf7I4PzGhS5Eb",
          ReworkBackgroundContainer: "_2s4aSnIfsmm2ieMlmRnshS",
          ReworkBackground: "_1u71NlnXDM8pbY063OUzoc",
          ReworkBackgroundBlur: "_3wudvZ1MLCrwOlGXOLw-EO",
          LoneDruid: "_1tqxUxEa19kBAQgpBrv9MW",
          Slark: "FtsTzy-H7d_OHTriBT7LB",
          Treant: "_2gxEdRsoob8FjlUtWSRf1U",
        };
      },
    },
  ]);
})();
