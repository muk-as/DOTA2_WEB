// 49841.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [49841],
    {
      83695: (y, N, n) => {
        "use strict";
        n.d(N, { U: () => D });
        var e = n(69500),
          i = n(11417),
          I = n.n(i),
          c = n(2095);
        const D = () =>
            (0, e.jsx)("div", {
              className: I().RightArrow,
              style: {
                backgroundImage: `url( ${c.r.IMG_URL}/icons/arrow_right.svg )`,
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
      49841: (y, N, n) => {
        "use strict";
        n.r(N),
          n.d(N, {
            DownloadIcon: () => j,
            InnateIconSmall: () => W,
            PlayIcon: () => E,
            default: () => k,
          });
        var e = n(69500),
          i = n(2095),
          I = n(84485),
          c = n(8305),
          D = n(3878),
          u = n(7552),
          O = n(73202),
          C = n(2130),
          l = n(15001),
          F = n(45488),
          V = n(63177),
          $ = n(42616),
          Y = n(7423),
          a = n.n(Y),
          x = n(32389),
          v = n(71010),
          L = n(45237),
          T = n(83695),
          f = n(11778),
          g = n(84598),
          Q = n(85286),
          X = n.n(Q),
          J = Object.defineProperty,
          Z = Object.getOwnPropertyDescriptor,
          q = (t, r, o, _) => {
            for (
              var p = _ > 1 ? void 0 : _ ? Z(r, o) : r, s = t.length - 1, m;
              s >= 0;
              s--
            )
              (m = t[s]) && (p = (_ ? m(r, o, p) : m(p)) || p);
            return _ && p && J(r, o, p), p;
          };
        const E = () =>
            (0, e.jsx)("div", {
              className: a().ControlIcon,
              style: {
                backgroundImage: `url( ${i.r.IMG_URL}/icons/play.svg )`,
              },
            }),
          j = () =>
            (0, e.jsx)("div", {
              className: a().ControlIcon,
              style: {
                backgroundImage: `url( ${i.r.IMG_URL}/icons/download.svg )`,
              },
            }),
          W = () =>
            (0, e.jsx)("div", {
              className: (0, l.A)(a().InnateIconSmall, a().ControlIcon),
              style: {
                backgroundImage: `url( ${i.r.IMG_URL}/icons/innate_icon_small.svg )`,
              },
            }),
          ee = "Kez";
        function M() {
          const t = n(99769),
            r =
              navigator.userAgent.toLowerCase().indexOf("safari") != -1 &&
              navigator.userAgent.toLowerCase().indexOf("macintosh") != -1;
          return t || r;
        }
        const S = (t) => {
            const r = (0, u.useRef)(void 0);
            return t.video && !M()
              ? (0, e.jsx)("video", {
                  className: t.capsuleClassName,
                  ref: r,
                  muted: !0,
                  autoPlay: !0,
                  preload: "auto",
                  loop: !0,
                  playsInline: !0,
                  poster: `${i.r.IMG_URL}${t.image}`,
                  children: (0, e.jsx)("source", {
                    type: "video/webm",
                    src: `${i.r.VIDEO_URL}${t.video}`,
                  }),
                })
              : (0, e.jsx)("img", {
                  className: t.capsuleClassName,
                  src: `${i.r.IMG_URL}/` + t.image,
                });
          },
          te = (t) =>
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
          ae = (t) => {
            if (!t.special.heading_loc) return null;
            let r = t.special.values_float.map((p, s) =>
                (0, e.jsx)(
                  "span",
                  { className: a().SingleValue, children: (0, v.F)(p) },
                  s,
                ),
              ),
              o = !1,
              _ = null;
            return (
              t.special.heading_loc[0] == "+"
                ? ((_ = t.special.heading_loc.slice(1)), (o = !0))
                : (_ = t.special.heading_loc),
              _[0] == "$" && (_ = "#dota_ability_variable_" + _.slice(1)),
              o
                ? (0, e.jsxs)("div", {
                    className: a().Stat,
                    children: ["+ ", r, " ", (0, c.Wn)(_)],
                  })
                : (0, e.jsxs)("div", {
                    className: a().Stat,
                    children: [(0, c.Wn)(_), " ", r],
                  })
            );
          },
          re = (0, D.PA)(({ name: t, components: r, recipeCost: o }) => {
            const p = I.B5.Get()
                .getItemList()
                ?.itemabilities.find((d) => d.name == t),
              s = I.B5.Get().getItemData(p?.id);
            if (!s) return null;
            let m = s.desc_loc;
            s.special_values.forEach((d) => {
              let h =
                d.values_float.length > 0 ? (0, v.F)(d.values_float[0]) : "0";
              (m = m.replace("%" + d.name + "%", h)),
                (m = m.replace("%" + d.name.toLowerCase() + "%", h));
            }),
              (m = m.replace(/\%\%/g, "%"));
            let b = s.special_values?.map((d, h) =>
                (0, e.jsx)(ae, { special: d }, h),
              ),
              z = s.name.replace("item_", ""),
              U = s.item_cost,
              A =
                s.item_neutral_tier >= 0 && s.item_neutral_tier < 5
                  ? s.item_neutral_tier + 1
                  : -1,
              le = a()["Tier" + A],
              P = s.cooldowns.reduce((d, h) => d + h) > 0,
              K = s.mana_costs.reduce((d, h) => d + h) > 0,
              G =
                s.health_costs && s.health_costs.length > 0
                  ? s.health_costs.reduce((d, h) => d + h) > 0
                  : !1,
              B = r
                ? r.map((d, h) =>
                    (0, e.jsx)(
                      "img",
                      {
                        className: a().RecipeComponentImage,
                        src: `${i.r.IMG_URL}/items/${d}.png`,
                      },
                      h,
                    ),
                  )
                : [];
            return (0, e.jsxs)("div", {
              className: a().GameItemDetails,
              children: [
                (0, e.jsxs)("div", {
                  className: a().Header,
                  children: [
                    (0, e.jsx)("img", {
                      className: a().ItemImage,
                      src: `${i.r.IMG_URL}/items/${z}.png`,
                    }),
                    (0, e.jsxs)("div", {
                      className: a().HeaderText,
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, l.A)(
                            a().ItemName,
                            a().TitleFont,
                            a().TitleExtraSmall,
                          ),
                          children: s.name_loc,
                        }),
                        U > 0 &&
                          (0, e.jsxs)("div", {
                            className: (0, l.A)(
                              a().GoldPrice,
                              a().LabelFont,
                              a().LabelMedium,
                            ),
                            children: [
                              (0, e.jsx)("img", {
                                className: a().GoldIcon,
                                src: `${i.r.IMG_URL}/icons/gold.png`,
                              }),
                              U,
                            ],
                          }),
                        A > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, l.A)(a().NeutralItemTier, le),
                            children: (0, c.Wn)("#neutral_item_tier", A),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: a().Body,
                  children: [
                    (0, e.jsx)("div", { className: a().Stats, children: b }),
                    m &&
                      (0, e.jsxs)("div", {
                        className: a().DescriptionContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: a().Description,
                            dangerouslySetInnerHTML: { __html: m },
                          }),
                          (P || K || G) &&
                            (0, e.jsxs)("div", {
                              className: (0, l.A)(a().DescriptionHeader),
                              children: [
                                K &&
                                  (0, e.jsxs)("div", {
                                    className: a().ManaContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().ManaIcon,
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().ManaText,
                                        children: s.mana_costs.map(
                                          (d, h) =>
                                            (h > 0 ? " / " : "") + (0, v.F)(d),
                                        ),
                                      }),
                                    ],
                                  }),
                                G &&
                                  (0, e.jsxs)("div", {
                                    className: a().HealthContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().HealthIcon,
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().HealthText,
                                        children: s.health_costs.map(
                                          (d, h) =>
                                            (h > 0 ? " / " : "") + (0, v.F)(d),
                                        ),
                                      }),
                                    ],
                                  }),
                                P &&
                                  (0, e.jsxs)("div", {
                                    className: a().CooldownContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().CooldownIcon,
                                        style: {
                                          backgroundImage: `url( ${i.r.IMG_URL}icons/cooldown.png )`,
                                        },
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().CooldownText,
                                        children: s.cooldowns.map(
                                          (d, h) =>
                                            (h > 0 ? " / " : "") + (0, v.F)(d),
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
                B.length > 0 &&
                  (0, e.jsxs)("div", {
                    className: a().Recipe,
                    children: [
                      (0, e.jsxs)("p", {
                        className: (0, l.A)(
                          a().RecipeLabel,
                          a().LabelFont,
                          a().LabelSmall,
                          a().LightGrayText,
                        ),
                        children: [" ", (0, c.Wn)("#kez_recipe"), " "],
                      }),
                      (0, e.jsxs)("div", {
                        className: a().RecipeImagesContainer,
                        children: [
                          B,
                          o &&
                            o > 0 &&
                            (0, e.jsxs)("div", {
                              className: a().RecipeCost,
                              children: [" + ", o, " "],
                            }),
                          o &&
                            o > 0 &&
                            (0, e.jsx)("img", {
                              className: a().RecipeComponentImage,
                              src: `${i.r.IMG_URL}/items/recipe.png`,
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }),
          oe = ({
            index: t,
            video: r,
            name: o,
            heroname: _,
            autoplay: p,
            onSlideIn: s,
          }) => {
            const m = useContext(CarouselContext),
              b = useRef(void 0);
            return (
              useEffect(() => {
                function z() {
                  b && b.current && m.state.currentSlide == t
                    ? b.current.play()
                    : b && b.current && b.current.pause(),
                    m.state.currentSlide == t && s(o, _);
                }
                return m.subscribe(z), () => m.unsubscribe(z);
              }, [m, t, o, _, s]),
              jsx("div", {
                className: styles.SlideContainer,
                children: M()
                  ? jsx("img", {
                      className: styles.TreasureVideo,
                      src: `${ConfigDota.VIDEO_URL}/kez/treasure/${r}.png`,
                    })
                  : jsx("video", {
                      ref: b,
                      className: styles.TreasureVideo,
                      muted: !0,
                      autoPlay: p,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${ConfigDota.VIDEO_URL}/kez/treasure/${r}.png`,
                      children: jsx("source", {
                        type: "video/webm",
                        src: `${ConfigDota.VIDEO_URL}/kez/treasure/${r}.webm`,
                      }),
                    }),
              })
            );
          },
          H = (t) =>
            (0, e.jsxs)("div", {
              className: t
                ? (0, l.A)(a().SectionDivider, t)
                : (0, l.A)(a().SectionDivider),
              children: [
                (0, e.jsx)("div", { className: a().Pattern }),
                (0, e.jsx)("div", { className: a().Overlay }),
                (0, e.jsx)("div", { className: a().TopDash }),
                (0, e.jsx)("div", { className: a().BottomDash }),
              ],
            }),
          ne = () => jsx("div", { className: styles.SubsectionDivider }),
          R = (t) =>
            (0, e.jsxs)("div", {
              className: a().DashedSectionSubHeader,
              children: [
                (0, e.jsx)("div", { className: a().DashLeft }),
                (0, e.jsx)("p", {
                  className: (0, l.A)(
                    a().LabelFont,
                    a().LabelMedium,
                    a().Label,
                  ),
                  children: (0, c.Wn)("#kez_newhero_name"),
                }),
                (0, e.jsx)("div", { className: a().DashRight }),
              ],
            }),
          w = [
            {
              abilityId: 1498,
              posterDir: "abilities/kez/kez_echo_slash.jpg",
              videoSrcMp4: "abilities/kez/kez_echo_slash.mp4",
              videoSrcWebm: "abilities/kez/kez_echo_slash.mp4",
            },
            {
              abilityId: 1499,
              posterDir: "abilities/kez/kez_grappling_claw.jpg",
              videoSrcMp4: "abilities/kez/kez_grappling_claw.mp4",
              videoSrcWebm: "abilities/kez/kez_grappling_claw.mp4",
            },
            {
              abilityId: 1500,
              posterDir: "abilities/kez/kez_kazurai_katana.jpg",
              videoSrcMp4: "abilities/kez/kez_kazurai_katana.mp4",
              videoSrcWebm: "abilities/kez/kez_kazurai_katana.mp4",
            },
            {
              abilityId: 1501,
              posterDir: "abilities/kez/kez_raptor_dance.jpg",
              videoSrcMp4: "abilities/kez/kez_raptor_dance.mp4",
              videoSrcWebm: "abilities/kez/kez_raptor_dance.mp4",
            },
            {
              abilityId: 1497,
              posterDir: "abilities/kez/kez_switch_weapons.jpg",
              videoSrcMp4: "abilities/kez/kez_switch_weapons.mp4",
              videoSrcWebm: "abilities/kez/kez_switch_weapons.mp4",
            },
            {
              abilityId: 1502,
              posterDir: "abilities/kez/kez_falcon_rush.jpg",
              videoSrcMp4: "abilities/kez/kez_falcon_rush.mp4",
              videoSrcWebm: "abilities/kez/kez_falcon_rush.mp4",
            },
            {
              abilityId: 1503,
              posterDir: "abilities/kez/kez_talon_toss.jpg",
              videoSrcMp4: "abilities/kez/kez_talon_toss.mp4",
              videoSrcWebm: "abilities/kez/kez_talon_toss.mp4",
            },
            {
              abilityId: 1504,
              posterDir: "abilities/kez/kez_shodo_sai.jpg",
              videoSrcMp4: "abilities/kez/kez_shodo_sai.mp4",
              videoSrcWebm: "abilities/kez/kez_shodo_sai.mp4",
            },
            {
              abilityId: 1506,
              posterDir: "abilities/kez/kez_ravens_veil.jpg",
              videoSrcMp4: "abilities/kez/kez_ravens_veil.mp4",
              videoSrcWebm: "abilities/kez/kez_ravens_veil.mp4",
            },
          ],
          se = "kez_switch_weapons_sai",
          ce = "kez_switch_weapons_katana",
          ie = (t) => {
            const r = (0, u.useContext)(x.Yc),
              [o, _] = (0, u.useState)(r.state.currentSlide);
            (0, u.useEffect)(() => {
              function s() {
                _(r.state.currentSlide);
              }
              return r.subscribe(s), () => r.unsubscribe(s);
            }, [r]);
            const p = t.abilityData;
            return (
              p && (p.name = se),
              (0, e.jsx)(g.cT, {
                heroData: t.heroData,
                abilityData: p,
                bShowVideo: !1,
                abilityHotKey: "D",
                additionalClassName: a().KezAbility,
              })
            );
          };
        let k = class extends u.Component {
          parallaxContainerRef = u.createRef();
          videoRef = u.createRef();
          constructor(t) {
            super(t),
              (this.state = {
                treasureName: "#frosty_treasure_treasure_name_9",
                heroName: "#frosty_treasure_hero_name_9",
                bPlayingVideo: !1,
              });
          }
          setPlayingVideo(t) {
            this.setState({ bPlayingVideo: t }),
              t ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          handleScroll = (t) => {
            X().refresh();
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
            let r = t.desc_loc;
            return (
              t.special_values.forEach((o) => {
                let _ =
                  o.values_float.length > 0 ? (0, v.F)(o.values_float[0]) : "0";
                (r = r.replace("%" + o.name + "%", _)),
                  (r = r.replace("%" + o.name.toLowerCase() + "%", _));
              }),
              (r = r.replace(/\%\%/g, "%")),
              (r = r.replace(/<h2>/g, "<b>")),
              (r = r.replace(/<\/h2>/g, "</b>")),
              (r = r.replace(/<h1>/g, "<b>")),
              (r = r.replace(
                /<\/h1>/g,
                `</b>

`,
              )),
              (0, c.Wn)(r)
            );
          }
          render() {
            const t = F.o.getPatchNotes("7.35", i.r.LANGUAGE),
              r =
                (i.r.LANGUAGE == "schinese" || i.r.LANGUAGE == "tchinese",
                "kez_reveal_1920x1080_en"),
              o = I.B5.Get().getHeroData(145);
            let _ = (0, C.wwZ)((0, C.sfN)(i.r.LANGUAGE));
            _ === "zh-cn" ? (_ = "zh-Hans") : _ === "zh-tw" && (_ = "zh-Hant");
            let p = "kez_logo_en";
            return (
              i.r.LANGUAGE == "schinese" && (p = "kez_logo_cn"),
              (0, e.jsxs)("div", {
                id: ee,
                className: a().Kez,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, l.A)(
                      a().TrailerContainer,
                      this.state.bPlayingVideo ? null : a().Hidden,
                    ),
                    children: [
                      (0, e.jsx)("video", {
                        ref: this.videoRef,
                        className: (0, l.A)(a().TrailerVideo),
                        autoPlay: !1,
                        preload: "none",
                        muted: !1,
                        loop: !1,
                        playsInline: !1,
                        controls: !0,
                        crossOrigin: "anonymous",
                        children: (0, e.jsx)("source", {
                          type: "video/mp4",
                          src: `${i.r.VIDEO_URL}/kez/${r}.mp4`,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: a().CloseButton,
                        onClick: () => this.setPlayingVideo(!1),
                        children: (0, e.jsx)("img", {
                          className: a().CloseButtonImage,
                          src: `${i.r.IMG_URL}/close.png`,
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(O.mg, {
                    children: (0, e.jsx)("title", {
                      children: (0, c.Wn)("#kez_website_title"),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    ref: this.parallaxContainerRef,
                    className: (0, l.A)(a().PageContainer, a().Parallax),
                    children: [
                      (0, e.jsx)(V.A, { bOverlapping: !0 }),
                      (0, e.jsxs)("div", {
                        id: "NewHeroSection",
                        className: (0, l.A)(
                          a().WebsiteSection,
                          a().NewHeroSection,
                        ),
                        children: [
                          (0, e.jsx)(S, {
                            image: "kez/kez_header_loop_poster.png",
                            video: "kez/kez_header_loop.webm",
                            capsuleClassName: a().KezHeaderLoop,
                          }),
                          (0, e.jsx)("div", {
                            className: a().HeaderTopGradient,
                          }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSectionInner,
                            children: [
                              (0, e.jsx)("div", {
                                className: (0, l.A)(a().LogoContainer),
                                children: (0, e.jsx)("img", {
                                  className: a().LogoImage,
                                  src: `${i.r.IMG_URL}/kez/${p}.png`,
                                }),
                              }),
                              (0, e.jsxs)("div", {
                                className: a().TextSection,
                                children: [
                                  (0, e.jsxs)("div", {
                                    className: a().HeroRolesContainer,
                                    children: [
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().HeroRole,
                                          a().TitleFont,
                                          a().TitleSmall,
                                        ),
                                        children: (0, c.Wn)(
                                          "#hero_attack_type_melee",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().HeroRole,
                                          a().TitleFont,
                                          a().TitleSmall,
                                        ),
                                        children: (0, c.Wn)("#hero_carry"),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().HeroRole,
                                          a().TitleFont,
                                          a().TitleSmall,
                                        ),
                                        children: (0, c.Wn)("#hero_escape"),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().HeroRole,
                                          a().TitleFont,
                                          a().TitleSmall,
                                        ),
                                        children: (0, c.Wn)("#hero_disabler"),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)("p", {
                                    className: (0, l.A)(
                                      a().SectionDescriptionLabel,
                                      a().DisplayFont,
                                      a().DisplaySmall,
                                    ),
                                    children: (0, c.Wn)(
                                      "#kez_newhero_description",
                                    ),
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().HeroAttributesContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: (0, l.A)(
                                          a().HeroAttributeIcon,
                                          a().Agility,
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: (0, l.A)(
                                          a().HeroComplexityIcon,
                                          a().Filled,
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: (0, l.A)(
                                          a().HeroComplexityIcon,
                                          a().Filled,
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: (0, l.A)(
                                          a().HeroComplexityIcon,
                                          a().Filled,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)("div", {
                                    className: a().ButtonsSection,
                                    children: (0, e.jsxs)("div", {
                                      className: a().StandardButton,
                                      onClick: () => this.setPlayingVideo(!0),
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: a().ButtonText,
                                          children: (0, c.Wn)(
                                            "#kez_play_trailer_button",
                                          ),
                                        }),
                                        (0, e.jsx)(E, {}),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, l.A)(a().ActionTextImageBlock),
                                children: [
                                  (0, e.jsx)(S, {
                                    image: "kez/kez_comic_cover.jpg",
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TextBlock,
                                    children: [
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().BlockLabel,
                                          a().LabelFont,
                                          a().LabelMedium,
                                        ),
                                        children: (0, c.Wn)(
                                          "#kez_comic_section_catchup",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().BlockTitle,
                                          a().DisplayFont,
                                          a().DisplayLarge,
                                        ),
                                        children: (0, c.Wn)(
                                          "#kez_comic_section_comic_title",
                                        ),
                                      }),
                                      (0, e.jsx)("p", {
                                        className: (0, l.A)(
                                          a().BlockDescription,
                                          a().BodyFont,
                                          a().BodyLarge,
                                          a().LightGrayText,
                                        ),
                                        children: (0, c.Wn)(
                                          "#kez_comic_section_comic_blub",
                                        ),
                                      }),
                                      (0, e.jsx)(L.N_, {
                                        to: f.J.kez_comic(),
                                        target: "_blank",
                                        children: (0, e.jsxs)("div", {
                                          className: a().StandardButton,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className: a().ButtonText,
                                              children: (0, c.Wn)(
                                                "#kez_comic_section_read_comic",
                                              ),
                                            }),
                                            (0, e.jsx)(T.U, {}),
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
                      H(),
                      (0, e.jsx)("div", {
                        className: (0, l.A)(
                          a().WebsiteSection,
                          a().AbilityExplainationSection,
                        ),
                        children: (0, e.jsxs)("div", {
                          className: a().WebsiteSectionInner,
                          children: [
                            (0, e.jsxs)("div", {
                              className: a().WebsiteSectionHeader,
                              children: [
                                (0, e.jsx)("img", {
                                  className: a().KezEmblem,
                                  src: `${i.r.IMG_URL}/kez/kez_emblem.png`,
                                }),
                                (0, e.jsx)(R, { subHeader: "Kez" }),
                                (0, e.jsx)("h2", {
                                  className: (0, l.A)(
                                    a().DisplayFont,
                                    a().DisplayExtraLarge,
                                  ),
                                  children: (0, c.Wn)("#kez_abilities_heading"),
                                }),
                                (0, e.jsx)("p", {
                                  className: (0, l.A)(
                                    a().DisplayFont,
                                    a().DisplaySmall,
                                  ),
                                  children: (0, c.Wn)(
                                    "#kez_ability_description",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: a().HeroStancesContainer,
                              children: [
                                (0, e.jsx)("div", {
                                  className: a().HeroStancesContainerBackground,
                                  children: (0, e.jsx)(S, {
                                    image: "kez/loadout_floor.png",
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().HeroStanceKatanaContainer,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: a().HeroStanceImage,
                                      children: (0, e.jsx)(S, {
                                        video: "kez/kez_katana_stance.webm",
                                        image: "kez/kez_katana_stance.png",
                                      }),
                                    }),
                                    (0, e.jsx)("h2", {
                                      className: (0, l.A)(
                                        a().TitleFont,
                                        a().TitleMedium,
                                      ),
                                      children: (0, c.Wn)(
                                        "#kez_ability_set_katana",
                                      ),
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: a().HeroAbilitySwitcher,
                                  children: (0, e.jsx)("p", {
                                    className: (0, l.A)(
                                      a().LabelFont,
                                      a().LabelMedium,
                                      a().SwitchWeapon,
                                    ),
                                    children: (0, c.Wn)(
                                      "#kez_ability_switch_weapons",
                                    ),
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().HeroStanceSaiContainer,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: a().HeroStanceImage,
                                      children: (0, e.jsx)(S, {
                                        video: "kez/kez_sai_stance.webm",
                                        image: "kez/kez_sai_stance.png",
                                      }),
                                    }),
                                    (0, e.jsx)("h2", {
                                      className: (0, l.A)(
                                        a().TitleFont,
                                        a().TitleMedium,
                                      ),
                                      children: (0, c.Wn)(
                                        "#kez_ability_set_sai",
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
                        className: a().AbilitySection,
                        children: (0, e.jsxs)(x.gi, {
                          className: a().AbilityCarousel,
                          naturalSlideWidth: 100,
                          naturalSlideHeight: 56.25,
                          totalSlides: w.length,
                          children: [
                            (0, e.jsx)(x.Ap, {
                              className: a().AbilitySlider,
                              children: w.map((s, m) =>
                                (0, e.jsxs)(
                                  x.q7,
                                  {
                                    className: a().AbilitySlide,
                                    index: m,
                                    children: [
                                      (0, e.jsxs)("video", {
                                        className: a().AbilityVideo,
                                        autoPlay: !0,
                                        preload: "auto",
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        poster: `${i.r.VIDEO_URL}/${s.posterDir}`,
                                        children: [
                                          s.videoSrcWebm &&
                                            (0, e.jsx)("source", {
                                              type: "video/webm",
                                              src: `${i.r.VIDEO_URL}/${s.videoSrcWebm}`,
                                            }),
                                          s.videoSrcMp4 &&
                                            (0, e.jsx)("source", {
                                              type: "video/mp4",
                                              src: `${i.r.VIDEO_URL}/${s.videoSrcMp4}`,
                                            }),
                                        ],
                                      }),
                                      (0, e.jsx)("div", {
                                        className:
                                          a().SlideAbilityInfoContainer,
                                        children: (0, e.jsxs)("div", {
                                          className: a().AbilityText,
                                          children: [
                                            (0, e.jsx)("div", {
                                              className: (0, l.A)(
                                                a().AbilityName,
                                                a().TitleFont,
                                                a().TitleSmall,
                                              ),
                                              children: o?.abilities.find(
                                                (b) => b.id == s.abilityId,
                                              ).name_loc,
                                            }),
                                            (0, e.jsx)("div", {
                                              className: (0, l.A)(
                                                a().AbilityDesc,
                                                a().BodyFont,
                                                a().BodyMedium,
                                              ),
                                              children: this.convertAbilityDesc(
                                                o?.abilities.find(
                                                  (b) => b.id == s.abilityId,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  `HeroAbilitySlide-${m}`,
                                ),
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: a().CarouselDotsSection,
                              children: (0, e.jsx)("div", {
                                className: a().WebsiteSectionInner,
                                children: (0, e.jsxs)("div", {
                                  className: a().CarouselDotsContainer,
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: (0, l.A)(a().Dash),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: (0, l.A)(
                                        a().CarouselDotsGroup,
                                      ),
                                      children: [
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 0,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1498,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "Q",
                                              additionalClassName:
                                                a().KezAbility,
                                              abilityType: a().Active,
                                            }),
                                          },
                                          "HeroAbilityDot-0",
                                        ),
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 1,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1499,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "W",
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-1",
                                        ),
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 2,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1500,
                                              ),
                                              bShowVideo: !1,
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-2",
                                        ),
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 3,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1501,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "R",
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-3",
                                        ),
                                      ],
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, l.A)(a().Dash, a().Left),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: (0, l.A)(a().InnateContainer),
                                      children: [
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 4,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(ie, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1497,
                                              ),
                                            }),
                                          },
                                          "HeroAbilityDot-4",
                                        ),
                                        (0, e.jsx)(W, {}),
                                      ],
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, l.A)(a().Dash, a().Right),
                                    }),
                                    (0, e.jsxs)("div", {
                                      className: (0, l.A)(
                                        a().CarouselDotsGroup,
                                      ),
                                      children: [
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 5,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1502,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "Q",
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-5",
                                        ),
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 6,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1503,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "W",
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-6",
                                        ),
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 7,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1504,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "E",
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-7",
                                        ),
                                        (0, e.jsx)(
                                          x.cL,
                                          {
                                            slide: 8,
                                            className: a().AbilitySelectorDot,
                                            children: (0, e.jsx)(g.cT, {
                                              heroData: o,
                                              abilityData: o?.abilities.find(
                                                (s) => s.id == 1506,
                                              ),
                                              bShowVideo: !1,
                                              abilityHotKey: "R",
                                              additionalClassName:
                                                a().KezAbility,
                                            }),
                                          },
                                          "HeroAbilityDot-8",
                                        ),
                                      ],
                                    }),
                                    (0, e.jsx)("div", {
                                      className: (0, l.A)(a().Dash),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      H(),
                      (0, e.jsx)("div", {
                        className: (0, l.A)(
                          a().WebsiteSection,
                          a().WallpaperSection,
                        ),
                        children: (0, e.jsxs)("div", {
                          className: a().WebsiteSectionInner,
                          children: [
                            (0, e.jsxs)("div", {
                              className: a().WebsiteSectionHeader,
                              children: [
                                (0, e.jsx)("img", {
                                  className: a().KezEmblem,
                                  src: `${i.r.IMG_URL}/kez/kez_emblem.png`,
                                }),
                                (0, e.jsx)(R, { subHeader: "Kez" }),
                                (0, e.jsx)("h2", {
                                  className: (0, l.A)(
                                    a().TitleFont,
                                    a().TitleLarge,
                                  ),
                                  children: (0, c.Wn)("#kez_wallpapers"),
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: a().Wallpapers,
                              children: [
                                (0, e.jsxs)("div", {
                                  className: a().WallpaperGroup,
                                  children: [
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_1_desktop.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_1_desktop_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_1_mobile.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_1_mobile_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().WallpaperGroup,
                                  children: [
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_2_desktop.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_2_desktop_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_2_mobile.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_2_mobile_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().WallpaperGroup,
                                  children: [
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_3_desktop.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_3_desktop_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_3_mobile.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_3_mobile_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().WallpaperGroup,
                                  children: [
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_4_desktop.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_4_desktop_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_4_mobile.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_4_mobile_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, e.jsxs)("div", {
                                  className: a().WallpaperGroup,
                                  children: [
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_5_desktop.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_5_desktop_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                    (0, e.jsx)("a", {
                                      href: `${i.r.IMG_URL}/kez/kez_wallpaper_5_mobile.jpg`,
                                      target: "_blank",
                                      children: (0, e.jsxs)("div", {
                                        className: a().Wallpaper,
                                        children: [
                                          (0, e.jsx)("img", {
                                            src: `${i.r.IMG_URL}/kez/kez_wallpaper_5_mobile_thumbnail.jpg`,
                                          }),
                                          (0, e.jsx)(j, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("div", {
                        id: "HeroDetailsSection",
                        className: (0, l.A)(a().HeroDetailsSection),
                        children: (0, e.jsxs)("div", {
                          className: a().HeroDetailsSectionInner,
                          children: [
                            (0, e.jsxs)("div", {
                              className: a().TextBlock,
                              children: [
                                (0, e.jsx)("p", {
                                  className: (0, l.A)(
                                    a().BlockTitle,
                                    a().TitleFont,
                                    a().TitleSmall,
                                  ),
                                  children: (0, c.Wn)("#kez_details_more_info"),
                                }),
                                (0, e.jsx)(L.N_, {
                                  to: f.J.hero("kez"),
                                  children: (0, e.jsxs)("div", {
                                    className: a().StandardButton,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().ButtonText,
                                        children: (0, c.Wn)(
                                          "#kez_hero_detail_button",
                                        ),
                                      }),
                                      (0, e.jsx)(T.U, {}),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: a().HeroImageContainer,
                              children: (0, e.jsx)("img", {
                                className: a().HeroImage,
                                src: `${i.r.IMG_URL}/heroes/crops/kez.png`,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)($.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        k = q([D.PA], k);
      },
      11417: (y) => {
        y.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      7423: (y) => {
        y.exports = {
          Tooltip: "_2t6LD5zs_wZP-P-7Efsj1f",
          CarouselFade: "_1mJ6bK4XyRHrBfUgLLi696",
          StandardButton: "_2MxRBzipT_ryw28WKSFpn9",
          ButtonText: "_1KSKhsqYS6oEr4gOa_TeXx",
          Icon: "_3gdI5zh_o0KzEC1ERCrS8q",
          Play: "ttuXGjFnHm8XbKHII30jm",
          SteamLogo: "KxHZVTHH1r2QlealP8lEk",
          ToolTip: "MGgF9IMJoj5rWrKtns4g",
          PlayerReportTooltip: "_3f60q9HavKGAmwKP0EGBqO",
          LightGrayText: "_3erH2CosMmZJV_oqFiPs2b",
          GrayText: "_15-KxlQl7RyObqmMN0Dxpv",
          TitleFont: "_33oOGYmQP1R8OXyofrxa1G",
          TitleExtraLarge: "_1CAeA75yr7Li8M7j37_hEu",
          TitleLarge: "_3nDxbulJu5nKuE7cerd-Pw",
          TitleMedium: "_3WNKtC-i90zPB7UXEV0EOC",
          TitleSmall: "_2EKkHbVw5pu8CMX0XoXMAX",
          TitleExtraSmall: "_2GIbW1GkxpEY0W_SGBazv6",
          DisplayFont: "_35O1RQqmg77beLBC--x3Iw",
          DisplayExtraLarge: "_1wQROtfKnOrRo46CBcOFmp",
          DisplayLarge: "_18d8Ux2gSVAy6z7La6LjIa",
          DisplayMedium: "_2-yuAXCqZVpbgHMnScI_eS",
          DisplaySmall: "_1EYfW9twY4w8yxOimZb-gS",
          BodyFont: "_1SyBZMzaeV91AJgHB-7nj7",
          BodyExtraLarge: "_1oQsrzYU8TdDEHeCSpeWRb",
          BodyLarge: "_17kcVLv8V35751s1Uk24y0",
          BodyMedium: "l8Mkx-IHGkXGrk4LVIypl",
          BodySmall: "_1KT4KjkxFabHJ8PP4aroEM",
          LabelFont: "_2UwykeoysRbfXcMqORQyIK",
          LabelExtraLarge: "_2CHzTWpk8ynKESJfjqnw6e",
          LabelLarge: "_3cwT4HWCZ6qbQAR8QZd7Tf",
          LabelMedium: "_2Zwhv8mXHhz6RahZJ7LzlE",
          LabelSmall: "_2yNYZ6oxfswdE0fofwvOja",
          ControlIcon: "_2ZrdzIPLb8p7_rvFJVtv6F",
          PageContainer: "AhHwh_LIyuqtUWgIdbSzG",
          Hidden: "_17lgEQtBZ6zeWWjfFDOaoE",
          Kez: "Ai2y_dDgc8yMf6EadWF8r",
          MobileOnly: "_svKmguCAP2QkHjSbxNCx",
          HeroRole: "_2icp8EyHfgM8gAlYZvLwyK",
          DisplayExtraSmall: "_2_mOm4FWncghEwFyli4C7w",
          WebsiteSection: "avvyjOl8yfdRriEp2BtI4",
          WebsiteSectionInner: "_28gDHi1drJeNiZC4_QeqV2",
          WebsiteSectionHeader: "_1m8FjnEV9sbs4mZg3eZcUR",
          TextSection: "oHJ09yBUQIs-SLuJJXJSk",
          SubsectionDivider: "_4X3deKP-7ZUF4jD4W11kN",
          SectionDivider: "FnwTPYm8b9EZw_SJVU6FT",
          Pattern: "_25laNWpgcHHqkjpCbkrzWE",
          Overlay: "_1WCPVqyon0GIobw1y6eE7t",
          TopDash: "_2zsaMEh0DVk2Qel5-j4hj-",
          BottomDash: "_7sWR4HIxfXu0mATUQB9Jo",
          ButtonsSection: "_3ZCbXz7I2FWpR2thYgaU6o",
          Grid_4: "gfZy2mv65oJ14pw9-CQ2Z",
          Grid_3: "iIc6Pa9_uiWVhP7tKMsXi",
          Grid_2: "_3l4a7oar8ZC8mM1WUnMsLg",
          TextBlock: "_2h0VCpxC2ZBajP1fYs080Y",
          TextImageBlockVertical: "_39GkwktV90KoVwWsvsWL3W",
          TextImageBlockHorizontal: "IxSEUCP2Jvxf4AMPTwuKt",
          Flipped: "_1iSa9OAo0YrsSC7BajBtb8",
          NarrowImage: "_2aYGZRVzrVdjNz0-u3KVGF",
          WideImage: "tf4iAj4TQb0gHE65of5_i",
          ActionTextImageBlock: "_1q2AR6EN48DCdaNItc7y5X",
          BlockLabel: "_3Tzu_mUHVMfu4hEip0uwLT",
          ImmersiveTextImageBlock: "_2Ddbhdv8GwTQvVd_KFyrZI",
          BasicComponentsSection: "_1VgMcljbc8JMKJL8okLPAL",
          DashedSectionSubHeader: "_1DnJ1VUng4E3Z5A3xBmaD",
          Label: "_1Kzh7V_VOE48B4uVAGwKC2",
          DashLeft: "_1p8rqpEtAH-znfhbEwTrgz",
          DashRight: "BoTIFswp5moTWnaDyaMqu",
          KezEmblem: "_2AMl5VwNelNwBrPtykDSP4",
          AbilityImageContainer: "_3P1j2meQMJT8u3rbFGiY28",
          AbilityImage: "_1NSYxtn7Xkls_l6SnlVHeh",
          AbilityHotKey: "_2_MLndvtq3XR571iZE29FG",
          Active: "_2wI4jY0mwF5jk-ztIcr_tK",
          HeaderSection: "_1cck7ELbVV3nTDwLIM_HSG",
          TreasureSection: "_3zihRzgW66gUtTyY-VKPyt",
          TreasureCarousel: "_-7Jj3C3mt-Tr9jeoF539J",
          TreasureSlider: "_2Xsh8zJynswhad3Jh732NJ",
          TreasureSlide: "_3e3DgAvIFIBwFidLOifKln",
          SlideContainer: "_1QKZHcvDxYGS_At8LRmdWV",
          TreasureSlideHidden: "_31ByTLQHZ27BmG_PxXW4qd",
          TreasureName: "_1ol1OcK-SfhKtrsNfrKqr0",
          HeroName: "_1s-tsTamiqE0JeU_lPdElw",
          CarouselDots: "uAkJVcnjNDcfyqE7zgGEw",
          TreasureSelector: "_1k0eaf8uP0XQ9aeVfQ6FX6",
          TreasurePaginationButton: "_3c39ZeFRYkA3sWgCuP3HpN",
          Prev: "_3kF0BLFFsBiZGAGIxL82qP",
          Next: "szFtVTkDLxydOazrJMqlK",
          NextArrow: "_1RczvcmABgB8QghKxUA8sN",
          PrevArrow: "_2VrxruwG6WohtXtlgDYkNl",
          AbilitySection: "_2wI5qSbZ4eBNf7byquUJvH",
          AbilityCarousel: "_1Qhvl_e8_7pZDJOe8M-5iq",
          AbilitySlider: "_1QxOUlXBXP-a9GEHSAg7I7",
          AbilitySlide: "fDo8XIH49apCNZT6xxVP8",
          SlideAbilityInfoContainer: "_2FF8mPdpyEK4eOrHHq4ysq",
          AbilityText: "_28noKqzuUYtp6Wo9ZqU9YC",
          AbilityName: "_2zf0CSUShlwR7yAgWH6jvk",
          AbilityDesc: "y8tjJhB8YJDOt_5zcSrF3",
          CarouselDotsSection: "_1N0f0XEI_DxCHycv6rWYE3",
          CarouselDotsContainer: "S2_-Us06mTgNilpCk__D2",
          CarouselDotsGroup: "_1ddGQsDX9CY0np70TKqmyg",
          AbilitySelectorDot: "_2XH0-64-vbCDLrQQxu6fAy",
          InnateContainer: "_1CcNZwwU0F6_BI8yQmmmP7",
          InnateIconSmall: "_3H-5YUkKkkaYq1nQekBjgb",
          KezAbility: "_1fOUJokPh4guIscFjvsoc6",
          Dash: "anmpT3QirO0lzmpn0g70",
          Left: "NJ4pxPg_VzClny1vkW5zV",
          Right: "_17L2op2JbBLY1HZwaCqp32",
          GameplayUpdateContainer: "EsdKSahtK14bv7sD29CK2",
          GameItemsContainer: "_3IbIAoBS9Lywb3VsNK5EPK",
          GameItemDetails: "q5la8zQwgFXS9hY1rc3cQ",
          Header: "_1n63f24GyJ787U_QGX0QQJ",
          ItemImage: "_3YzFj3qIKxa9-qJhyYsfOg",
          HeaderText: "_3UYL9WWk-mZU4xZQjsUpaQ",
          ItemName: "_2cGMVY9vRSm1k__Y3MZsBO",
          GoldPrice: "_1yCrYun7qYmwFNzVe8IsbL",
          GoldIcon: "_3ndqxLv3KjoUFbkQ2pS14W",
          NeutralItemTier: "Ex2pQYZwyu2ObINtn2KMK",
          Tier1: "_30paTHVBKstWLM5xfH8-1J",
          Tier2: "_35P_ZzXDOH86rknTjyo1yX",
          Tier3: "_1hoYaYZX15maAxtgdVBa_2",
          Tier4: "_2nOSgQw6YZIWUILXahP9sb",
          Tier5: "_1PyLQ2S6YzPXYh0nB-dGJC",
          Body: "_3UQWVeDjXnRSK8f9yrHtkW",
          Stats: "JYWvsSc02aDTlo_EC2lI9",
          Stat: "_2Ee1FzI8hplHGZ_10ljK-9",
          SingleValue: "_2-y06xNhKdGIeaLduxGSzX",
          DescriptionContainer: "_1_-jJmiSlxl0mtSzJNQush",
          Description: "_1BboTusCc67692Mw4h1IV_",
          DescriptionHeader: "_2Jln0TwehyyZuY9cC3e-3c",
          CooldownContainer: "_3WtVTSlJRUj9Orb5bSOlRY",
          CooldownIcon: "_3OCdXb8pu3qWfwaoV0eE0Y",
          CooldownText: "_1r-_owopv14xSnH7K2EY-g",
          ManaContainer: "_3Rd204li0Jh0gchi7lfMJ3",
          ManaIcon: "_2FWIaRcaikQ0kFwCuh1u3z",
          ManaText: "qrUwHiNxxWcD7aSG_dFZD",
          HealthContainer: "voMlsygQVE31B9Fo33BqW",
          HealthIcon: "_190O_udRzUkXMSs5f3jEnc",
          HealthText: "_2a931DM7cwFXYv0a0y98Xp",
          Lore: "_2UiEjmPuhBlDf0il1Xd0L-",
          Recipe: "_8ftpESaENxRBr8wABUSXM",
          RecipeLabel: "_3tsKy1Hr0A6mI5vqvRQhHF",
          RecipeImagesContainer: "_2bkoMJhTR1sqGzmHiXpWiM",
          RecipeComponentImage: "Oh6oZjiUSkXmDq7YS44s9",
          RecipeCost: "_2lWW7lxeWWm1bj4bniM0Ov",
          PatchnotesContainer: "zw8WkeHHqF86oXt5u-mYe",
          PatchNotesHeaderLabel: "_1rZYujs6LGpby62Vlw56-a",
          MiscSection: "bkj4ocOWrM8pT4qG-OZ5h",
          UpdatesSection: "_3cwKaQWDiLFFvosGsQsOUY",
          NewHeroSection: "Gwq9_AcWmqN5Glvpx0f6x",
          KezHeaderLoop: "_192GOAoKPT8uAeXKSfrnF8",
          HeaderTopGradient: "_3II6QXJUQb1xHwtwtwTEpe",
          LogoContainer: "_3YCveT2cnF9RnKbCGI5Vmi",
          LogoImage: "_29gaXqsgevTyEDnCCHHWxh",
          SectionDescriptionLabel: "_1VcIzDsImMevDq_TSR2sgp",
          HeroAttributesContainer: "_2EW4ihk21UlAayk5x6rePP",
          HeroAttributeIcon: "_3qkBVs1czqaQaOFIK6UOoO",
          Strength: "_1Wk6iBZsnwKWRAIgPVp9WI",
          Agility: "_1xP2o82wQCtsxgTuIngji1",
          Intelligence: "_317w3IgUI9nt3ogpuCAMZs",
          Universal: "_3QYDSyhttnsUzn0RTzKLnS",
          HeroComplexityIcon: "_3nr7vy_jcfp0gDO2020kOy",
          Filled: "_2mrq6Uw1F8hxXmLt_GG47y",
          HeroRolesContainer: "_1vmB2glmBFik3hhCrQJKAc",
          HeroDetailsSection: "_2TCPnsOPG4cArVScDhmH9u",
          HeroDetailsSectionInner: "_19XcWMdHm_mCWm9e9cmlzb",
          HeroImageContainer: "vnxuzMKJ7yxHQQc1kueeY",
          HeroImage: "_3hGUzn8ici5nuPf8JBCWh0",
          WallpaperSection: "-DcsBoID8yFzmrLyUL63C",
          Wallpapers: "_2QLpl7iOIb8nM6Ai2lW8U0",
          WallpaperGroup: "_3FbdWE3KrzJTpajX-HwRd3",
          Wallpaper: "_1BeTZSCuJugX2pghkkdrAz",
          AbilityExplainationSection: "_3DfgYSV3lrtzQ62JLsx1ps",
          HeroStancesContainer: "_34oeTGXFaOZ_1FKHOYh7j6",
          HeroStancesContainerBackground: "_7Ob657e-aMSiMGlyXPf0S",
          HeroStanceKatanaContainer: "_3Ih8jDoAdh0Df9ts3TrURc",
          HeroStanceSaiContainer: "_22XDENPJ12b8EIhb0i4AhB",
          HeroStanceImage: "_1hiL4tclUToRHRCYz0vfGj",
          HeroAbilitySwitcher: "_1pxaW4hmPOWt81_v7XsxH_",
          SwitchWeapon: "_3AA9wwXDeJuhXvJFhs6--N",
          TypographySection: "_1uUEigMN7C7qQI7WyFo6qh",
          TextWaterfallExampleBlock: "_12hINbdqKFHYT5YNCnsFOI",
          TextWaterfallExampleBlockTitle: "_20x4rDrDkAFdGwHJLxLusi",
          TrailerContainer: "_3CFdEV47b6OqH3zbgqRVvH",
          TrailerVideo: "_19VY_MMfOdG4aHjbixhZe3",
          CloseButton: "_1wtSYAx2gTwjTDk_YoYnub",
          CloseButtonImage: "_1x-D_8bS8rbs1QXn0GuWUI",
        };
      },
    },
  ]);
})();
