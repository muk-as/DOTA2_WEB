/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [93512],
    {
      83695: (L, C, c) => {
        "use strict";
        c.d(C, { U: () => y });
        var a = c(69500),
          n = c(11417),
          S = c.n(n),
          t = c(2095);
        const y = () =>
            (0, a.jsx)("div", {
              className: S().RightArrow,
              style: {
                backgroundImage: `url( ${t.r.IMG_URL}/icons/arrow_right.svg )`,
              },
            }),
          N = () =>
            jsx("div", {
              className: styles.UpRightArrow,
              style: {
                backgroundImage: `url( ${ConfigDota.IMG_URL}/icons/arrow_top_right.svg )`,
              },
            });
      },
      33883: (L, C, c) => {
        "use strict";
        c.d(C, { U: () => s, v: () => H });
        var a = c(69500),
          n = c(7552),
          S = c(85655),
          t = c.n(S),
          y = c(15001),
          N = c(2095),
          M = c(8305);
        const H = ({ image: B, is_new: A }) =>
            (0, a.jsxs)("div", {
              className: t().ComparisonImage,
              children: [
                (0, a.jsx)("div", {
                  className: (0, y.A)(t().ImageLabel, A && t().IsNew),
                  children: (0, M.Wn)(A ? "#729_new_image" : "#729_old_image"),
                }),
                (0, a.jsx)("img", { src: `${N.r.IMG_URL}${B}` }),
              ],
            }),
          s = (B) => {
            const [A, k] = (0, n.useState)(0);
            return (0, a.jsxs)("div", {
              className: t().TabbedMapComparison,
              children: [
                (0, a.jsx)("div", {
                  className: t().TabHeader,
                  children: B.labels.map((f, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, y.A)(t().Tab, A == e && t().Active),
                        onClick: () => k(e),
                        children: (0, M.Wn)(f),
                      },
                      "tab_" + e,
                    ),
                  ),
                }),
                (0, a.jsx)("div", {
                  className: t().TabContents,
                  children: n.Children.map(B.children, (f, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: (0, y.A)(
                          t().TabContentContainer,
                          e == A && t().Active,
                        ),
                        children: f,
                      },
                      "tabelement_" + e,
                    ),
                  ),
                }),
              ],
            });
          };
      },
      93512: (L, C, c) => {
        "use strict";
        c.r(C),
          c.d(C, {
            DownloadIcon: () => W,
            InnateIconSmall: () => re,
            PlayIcon: () => le,
            default: () => F,
          });
        var a = c(69500),
          n = c(2095),
          S = c(84485),
          t = c(8305),
          y = c(3878),
          N = c(7552),
          M = c(73202),
          H = c(2130),
          s = c(15001),
          B = c(45488),
          A = c(63177),
          k = c(42616),
          f = c(55730),
          e = c.n(f),
          E = c(84899),
          _ = c(32389),
          R = c(71010),
          K = c(45237),
          P = c(83695),
          V = c(11778),
          z = c(84598),
          ee = c(85286),
          ae = c.n(ee),
          D = c(4665),
          j = c(33883),
          se = Object.defineProperty,
          te = Object.getOwnPropertyDescriptor,
          ie = (i, l, d, m) => {
            for (
              var p = m > 1 ? void 0 : m ? te(l, d) : l, r = i.length - 1, o;
              r >= 0;
              r--
            )
              (o = i[r]) && (p = (m ? o(l, d, p) : o(p)) || p);
            return m && p && se(l, d, p), p;
          };
        const le = () =>
            (0, a.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${n.r.IMG_URL}/icons/play.svg )`,
              },
            }),
          W = () =>
            (0, a.jsx)("div", {
              className: e().ControlIcon,
              style: {
                backgroundImage: `url( ${n.r.IMG_URL}/icons/download.svg )`,
              },
            }),
          re = () =>
            (0, a.jsx)("div", {
              className: (0, s.A)(e().InnateIconSmall, e().ControlIcon),
              style: {
                backgroundImage: `url( ${n.r.IMG_URL}/icons/innate_icon_small.svg )`,
              },
            }),
          Z = "TemplatePage";
        function ne() {
          return !1;
        }
        const de = ({ children: i }) => {
            const { hash: l } = useLocation();
            return (
              useEffect(() => {
                l &&
                  setTimeout(() => {
                    const d = l.replace("#", "");
                    windowScrollTo(d, Z);
                  }, 500);
              }, [l]),
              null
            );
          },
          v = (i) => {
            const l = (0, N.useRef)(void 0);
            return i.video
              ? (0, a.jsx)("video", {
                  className: (0, s.A)(i.additionalClassName),
                  ref: l,
                  muted: !0,
                  autoPlay: !0,
                  preload: "auto",
                  loop: !0,
                  playsInline: !0,
                  poster: `${n.r.IMG_URL}${i.image}`,
                  children: (0, a.jsx)("source", {
                    type: "video/webm",
                    src: `${n.r.VIDEO_URL}${i.video}`,
                  }),
                })
              : (0, a.jsx)("img", {
                  className: (0, s.A)(i.additionalClassName),
                  src: `${n.r.IMG_URL}/` + i.image,
                });
          };
        function oe(i) {
          let l = "",
            d = !0;
          for (let m = 0; m < i.length; ++m) {
            if (i[m] == "_") {
              d = !0;
              continue;
            }
            d ? ((l += i[m].toUpperCase()), (d = !1)) : (l += i[m]);
          }
          return l;
        }
        const U = (0, y.PA)(({ patchnotes: i, heroname: l }) => {
            const m = S.B5.Get()
              .getHeroList()
              ?.heroes.find((p) => p.name.replace("npc_dota_hero_", "") == l);
            return m
              ? (0, a.jsxs)("div", {
                  className: (0, s.A)(e().HeroRework, e()[oe(l)]),
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, s.A)(
                        e().HeroName,
                        e().TitleFont,
                        e().TitleSmall,
                      ),
                      children: (0, t.Wn)(m.name_loc),
                    }),
                    (0, a.jsx)("div", {
                      className: (0, s.A)(
                        e().ReworkDescription,
                        e().DisplayFont,
                        e().DisplayExtraSmall,
                        e().LightGrayText,
                      ),
                      children: (0, t.Wn)(
                        "#new_frontiers_major_gameplay_hero_rework_" + l,
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className: e().HeroImageContainer,
                      children: [
                        (0, a.jsx)("div", { className: e().HeroShadow }),
                        (0, a.jsx)(z.sG, {
                          heroname: l,
                          portraitClassName: e().HeroReworkPortrait,
                          videoClassName: e().HeroReworkPortraitVideo,
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: e().HeroReworkPatchNotes,
                      children: (0, a.jsx)(E.fX, {
                        patchnotes: i,
                        heroname: l,
                        heroClassName: e().HeroReworkPatchNotesInner,
                      }),
                    }),
                  ],
                })
              : null;
          }),
          ce = (i) => {
            if (!i.special.heading_loc) return null;
            let l = i.special.values_float.map((p, r) =>
                (0, a.jsx)(
                  "span",
                  { className: e().SingleValue, children: (0, R.F)(p) },
                  r,
                ),
              ),
              d = !1,
              m = null;
            return (
              i.special.heading_loc[0] == "+"
                ? ((m = i.special.heading_loc.slice(1)), (d = !0))
                : (m = i.special.heading_loc),
              m[0] == "$" && (m = "#dota_ability_variable_" + m.slice(1)),
              d
                ? (0, a.jsxs)("div", {
                    className: e().Stat,
                    children: ["+ ", l, " ", (0, t.Wn)(m)],
                  })
                : (0, a.jsxs)("div", {
                    className: e().Stat,
                    children: [(0, t.Wn)(m), " ", l],
                  })
            );
          },
          h = (0, y.PA)(({ name: i, components: l, recipeCost: d }) => {
            const p = S.B5.Get()
                .getItemList()
                ?.itemabilities.find((x) => x.name == i),
              r = S.B5.Get().getItemData(p?.id);
            if (!r) return null;
            let o = r.desc_loc;
            r.special_values.forEach((x) => {
              let g =
                x.values_float.length > 0 ? (0, R.F)(x.values_float[0]) : "0";
              (o = o.replace("%" + x.name + "%", g)),
                (o = o.replace("%" + x.name.toLowerCase() + "%", g));
            }),
              (o = o.replace(/\%\%/g, "%"));
            let u = r.special_values?.map((x, g) =>
                (0, a.jsx)(ce, { special: x }, g),
              ),
              w = r.name.replace("item_", ""),
              J = r.item_cost,
              O =
                r.item_neutral_tier >= 0 && r.item_neutral_tier < 5
                  ? r.item_neutral_tier + 1
                  : -1,
              Y = e()["Tier" + O],
              Q = r.cooldowns.reduce((x, g) => x + g) > 0,
              X = r.mana_costs.reduce((x, g) => x + g) > 0,
              $ =
                r.health_costs && r.health_costs.length > 0
                  ? r.health_costs.reduce((x, g) => x + g) > 0
                  : !1,
              q = l
                ? l.map((x, g) =>
                    (0, a.jsx)(
                      "img",
                      {
                        className: e().RecipeComponentImage,
                        src: `${n.r.IMG_URL}/items/${x}.png`,
                      },
                      g,
                    ),
                  )
                : [];
            return (0, a.jsxs)("div", {
              className: e().GameItemDetails,
              children: [
                (0, a.jsx)("div", { className: e().ItemBorder }),
                (0, a.jsxs)("div", {
                  className: (0, s.A)(e().HeaderContainer),
                  children: [
                    O > 0 &&
                      (0, a.jsx)("div", {
                        className: (0, s.A)(e().HeaderTierColor, Y),
                      }),
                    (0, a.jsxs)("div", {
                      className: (0, s.A)(e().Header),
                      children: [
                        (0, a.jsx)("img", {
                          className: e().ItemImage,
                          src: `${n.r.IMG_URL}/items/${w}.png`,
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
                              children: r.name_loc,
                            }),
                            J > 0 &&
                              (0, a.jsxs)("div", {
                                className: (0, s.A)(
                                  e().GoldPrice,
                                  e().LabelFont,
                                  e().LabelMedium,
                                ),
                                children: [
                                  (0, a.jsx)("img", {
                                    className: e().GoldIcon,
                                    src: `${n.r.IMG_URL}/icons/gold.png`,
                                  }),
                                  J,
                                ],
                              }),
                            O > 0 &&
                              (0, a.jsx)("div", {
                                className: (0, s.A)(e().NeutralItemTier, Y),
                                children: (0, t.Wn)("#neutral_item_tier", O),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: e().Body,
                  children: [
                    (0, a.jsx)("div", { className: e().Stats, children: u }),
                    o &&
                      (0, a.jsxs)("div", {
                        className: e().DescriptionContainer,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().Description,
                            dangerouslySetInnerHTML: { __html: o },
                          }),
                          (Q || X || $) &&
                            (0, a.jsxs)("div", {
                              className: (0, s.A)(e().DescriptionHeader),
                              children: [
                                X &&
                                  (0, a.jsxs)("div", {
                                    className: e().ManaContainer,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().ManaIcon,
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().ManaText,
                                        children: r.mana_costs.map(
                                          (x, g) =>
                                            (g > 0 ? " / " : "") + (0, R.F)(x),
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
                                        children: r.health_costs.map(
                                          (x, g) =>
                                            (g > 0 ? " / " : "") + (0, R.F)(x),
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
                                          backgroundImage: `url( ${n.r.IMG_URL}icons/cooldown.png )`,
                                        },
                                      }),
                                      (0, a.jsx)("div", {
                                        className: e().CooldownText,
                                        children: r.cooldowns.map(
                                          (x, g) =>
                                            (g > 0 ? " / " : "") + (0, R.F)(x),
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
                q.length > 0 &&
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
                        children: [" ", (0, t.Wn)("#templatepage_recipe"), " "],
                      }),
                      (0, a.jsxs)("div", {
                        className: e().RecipeImagesContainer,
                        children: [
                          q,
                          d &&
                            d > 0 &&
                            (0, a.jsxs)("div", {
                              className: e().RecipeCost,
                              children: [" + ", d, " "],
                            }),
                          d &&
                            d > 0 &&
                            (0, a.jsx)("img", {
                              className: e().RecipeComponentImage,
                              src: `${n.r.IMG_URL}/items/recipe.png`,
                            }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          }),
          _e = (i) =>
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
          T = ({
            index: i,
            video: l,
            name: d,
            heroname: m,
            autoplay: p,
            onSlideIn: r,
          }) => {
            const o = (0, N.useContext)(_.Yc),
              u = (0, N.useRef)(void 0);
            return (
              (0, N.useEffect)(() => {
                function w() {
                  u && u.current && o.state.currentSlide == i
                    ? u.current.play()
                    : u && u.current && u.current.pause(),
                    o.state.currentSlide == i && r(d, m);
                }
                return o.subscribe(w), () => o.unsubscribe(w);
              }, [o, i, d, m, r]),
              (0, a.jsx)("div", {
                className: e().SlideContainer,
                children: ne()
                  ? (0, a.jsx)("img", {
                      className: e().TreasureVideo,
                      src: `${n.r.VIDEO_URL}/templatepage/treasure/${l}.png`,
                    })
                  : (0, a.jsxs)("video", {
                      ref: u,
                      className: e().TreasureVideo,
                      muted: !0,
                      autoPlay: p,
                      preload: "auto",
                      loop: !0,
                      playsInline: !0,
                      poster: `${n.r.VIDEO_URL}/templatepage/treasure/${l}.png`,
                      children: [
                        (0, a.jsx)("source", {
                          type: "video/webm",
                          src: `${n.r.VIDEO_URL}/templatepage/treasure/${l}.webm`,
                        }),
                        (0, a.jsx)("source", {
                          type: 'video/mp4; codecs="hvc1"',
                          src: `${n.r.VIDEO_URL}/templatepage/treasure/${l}.mov`,
                        }),
                      ],
                    }),
              })
            );
          },
          I = (i) =>
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
          b = () =>
            (0, a.jsxs)("div", {
              className: e().SubsectionDivider,
              children: [
                (0, a.jsx)("div", { className: e().TopDash }),
                (0, a.jsx)("div", { className: e().Background }),
              ],
            }),
          me = (i) =>
            (0, a.jsxs)("div", {
              className: e().DashedSectionSubHeader,
              children: [
                (0, a.jsx)("div", { className: e().DashLeft }),
                (0, a.jsx)("p", {
                  className: (0, s.A)(
                    e().LabelFont,
                    e().LabelMedium,
                    e().Label,
                  ),
                  children: i.subHeader,
                }),
                (0, a.jsx)("div", { className: e().DashRight }),
              ],
            }),
          G = [
            {
              abilityId: 352,
              posterDir: "abilities/ringmaster/ringmaster_tame_the_beasts.jpg",
              videoSrcMp4:
                "abilities/ringmaster/ringmaster_tame_the_beasts.mp4",
              videoSrcWebm:
                "abilities/ringmaster/ringmaster_tame_the_beasts.mp4",
              hotKey: "Q",
            },
            {
              abilityId: 383,
              posterDir: "abilities/ringmaster/ringmaster_the_box.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_the_box.mp4",
              videoSrcWebm: "abilities/ringmaster/ringmaster_the_box.mp4",
              hotKey: "W",
            },
            {
              abilityId: 386,
              posterDir: "abilities/ringmaster/ringmaster_impalement.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_impalement.mp4",
              videoSrcWebm: "abilities/ringmaster/ringmaster_impalement.mp4",
              hotKey: "E",
            },
            {
              abilityId: 385,
              posterDir: "abilities/ringmaster/ringmaster_wheel.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_wheel.mp4",
              videoSrcWebm: "abilities/ringmaster/ringmaster_wheel.mp4",
              hotKey: "R",
            },
            {
              abilityId: 195,
              posterDir: "abilities/ringmaster/ringmaster_spotlight.jpg",
              videoSrcMp4: "abilities/ringmaster/ringmaster_spotlight.mp4",
              videoSrcWebm: "abilities/ringmaster/ringmaster_spotlight.mp4",
              bIsShard: !0,
            },
          ];
        let F = class extends N.Component {
          videoRef = N.createRef();
          navbarRef = N.createRef();
          basicComponentsRef = N.createRef();
          newHeroRef = N.createRef();
          treasureRef = N.createRef();
          patchRef = N.createRef();
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
          scrollToTarget(i) {
            i.current.scrollIntoView({ behavior: "smooth" });
          }
          handleScroll = (i) => {
            const l =
              this.basicComponentsRef.current.getBoundingClientRect().top;
            (this.navbarRef.current.style.opacity = `${this.clamp(this.remapValue(l, 0, -100, 0, 1), 0, 1)}`),
              console.log(l),
              l > 0
                ? (this.navbarRef.current.style.visibility = "hidden")
                : (this.navbarRef.current.style.visibility = "visible"),
              ae().refresh();
          };
          remapValue(i, l, d, m, p) {
            return m + ((p - m) * (i - l)) / (d - l);
          }
          remapValueClamped(i, l, d, m, p) {
            return Math.max(m, Math.min(p, this.remapValue(i, l, d, m, p)));
          }
          clamp = (i, l, d) => Math.min(Math.max(i, l), d);
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
              i.special_values.forEach((d) => {
                let m =
                  d.values_float.length > 0 ? (0, R.F)(d.values_float[0]) : "0";
                (l = l.replace("%" + d.name + "%", m)),
                  (l = l.replace("%" + d.name.toLowerCase() + "%", m));
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
              (0, t.Wn)(l)
            );
          }
          render() {
            const i = B.o.getPatchNotes("7.35", n.r.LANGUAGE),
              l =
                n.r.LANGUAGE == "schinese" || n.r.LANGUAGE == "tchinese"
                  ? "ringmaster_trailer_schinese"
                  : "ringmaster_trailer_english",
              d = S.B5.Get().getHeroData(131);
            let m = (0, H.wwZ)((0, H.sfN)(n.r.LANGUAGE));
            m === "zh-cn" ? (m = "zh-Hans") : m === "zh-tw" && (m = "zh-Hant");
            let p = "templatepage_logo_en";
            return (
              n.r.LANGUAGE == "schinese" && (p = "templatepage_logo_cn"),
              (0, a.jsxs)("div", {
                id: Z,
                className: e().TemplatePage,
                children: [
                  (0, a.jsxs)("div", {
                    className: (0, s.A)(
                      e().TrailerContainer,
                      this.state.bPlayingVideo ? null : e().Hidden,
                    ),
                    children: [
                      (0, a.jsxs)("video", {
                        ref: this.videoRef,
                        className: (0, s.A)(e().TrailerVideo),
                        autoPlay: !1,
                        preload: "none",
                        muted: !1,
                        loop: !1,
                        playsInline: !1,
                        controls: !0,
                        crossOrigin: "anonymous",
                        children: [
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${n.r.VIDEO_URL}/international2024/${l}.mp4`,
                          }),
                          (0, a.jsx)("source", {
                            type: "video/mp4",
                            src: `${n.r.VIDEO_URL}/international2024/ringmaster_trailer_english.mp4`,
                          }),
                          (0, a.jsx)("track", {
                            label: `${n.r.LANGUAGE}`,
                            kind: "captions",
                            srcLang: m,
                            src: `${n.r.VIDEO_URL}/international2024/ringmaster_${n.r.LANGUAGE}.vtt`,
                            default: !0,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: e().CloseButton,
                        onClick: () => this.setPlayingVideo(!1),
                        children: (0, a.jsx)("img", {
                          className: e().CloseButtonImage,
                          src: `${n.r.IMG_URL}/close.png`,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(M.mg, {
                    children: (0, a.jsx)("title", {
                      children: (0, t.Wn)("#templatepage_website_title"),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, s.A)(e().PageContainer),
                    children: [
                      (0, a.jsx)(A.A, { bOverlapping: !0 }),
                      (0, a.jsxs)("div", {
                        className: (0, s.A)(e().HeaderSection),
                        children: [
                          (0, a.jsx)("div", {
                            className: (0, s.A)(e().LogoContainer),
                            children: (0, a.jsx)("img", {
                              className: e().LogoImage,
                              src: `${n.r.IMG_URL}/templatepage/${p}.png`,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: e().HeaderTextSection,
                            children: [
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().WebsiteTitle,
                                  e().TitleFont,
                                  e().TitleExtraLarge,
                                ),
                                children: (0, t.Wn)(
                                  "#templatepage_website_title",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().WebsiteIntro,
                                  e().DisplayFont,
                                  e().DisplayMedium,
                                ),
                                children: (0, t.Wn)(
                                  "#templatepage_website_introduction",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      I(),
                      (0, a.jsxs)("div", {
                        ref: this.navbarRef,
                        className: e().AnchorNavigation,
                        children: [
                          (0, a.jsx)("div", {
                            className: e().AnchorLink,
                            onClick: () =>
                              this.scrollToTarget(this.basicComponentsRef),
                            children: (0, t.Wn)(
                              "#templatepage_website_nav_basic_components",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().AnchorLink,
                            onClick: () => this.scrollToTarget(this.newHeroRef),
                            children: (0, t.Wn)(
                              "#templatepage_website_nav_new_hero",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().AnchorLink,
                            onClick: () =>
                              this.scrollToTarget(this.treasureRef),
                            children: (0, t.Wn)(
                              "#templatepage_website_nav_treasure",
                            ),
                          }),
                          (0, a.jsx)("div", {
                            className: e().AnchorLink,
                            onClick: () => this.scrollToTarget(this.patchRef),
                            children: (0, t.Wn)(
                              "#templatepage_website_nav_patch",
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        id: "HowItWorksSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().HowItWorksSection,
                        ),
                        children: (0, a.jsx)("div", {
                          className: e().WebsiteSectionInner,
                          children: (0, a.jsxs)("div", {
                            className: e().WebsiteSectionHeader,
                            children: [
                              (0, a.jsx)("h2", {
                                className: (0, s.A)(
                                  e().SectionHeaderLabel,
                                  e().TitleFont,
                                  e().TitleMedium,
                                ),
                                children: (0, t.Wn)(
                                  "#templatepage_howitworks_section_title",
                                ),
                              }),
                              (0, a.jsx)("p", {
                                className: (0, s.A)(
                                  e().WebsiteDescription,
                                  e().DisplayFont,
                                  e().DisplaySmall,
                                  e().LightGrayText,
                                ),
                                children: (0, t.Wn)(
                                  "#templatepage_howitworks_section_introduction",
                                ),
                              }),
                              (0, a.jsx)("a", {
                                href: "https://confluence.valve.org/display/DOTA/Making+a+new+Dota+webpage",
                                target: "blank",
                                className: (0, s.A)(
                                  e().WebsiteDescription,
                                  e().DisplayFont,
                                  e().DisplaySmall,
                                  e().LightGrayText,
                                ),
                                children: (0, t.Wn)(
                                  "#templatepage_howitworks_section_introduction_link",
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                      I(),
                      (0, a.jsx)("div", {
                        id: "MobileOnlySection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().MobileOnly,
                          e().MobileOnlySection,
                        ),
                        children: (0, a.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, a.jsx)("div", {
                              className: e().MobileOnlyIcon,
                            }),
                            (0, a.jsx)("p", {
                              className: (0, s.A)(
                                e().DisplayFont,
                                e().DisplayMedium,
                                e().LightGrayText,
                              ),
                              children: (0, t.Wn)(
                                "#templatepage_website_mobileonly_introduction",
                              ),
                            }),
                          ],
                        }),
                      }),
                      I(e().MobileOnly),
                      (0, a.jsx)("div", {
                        ref: this.basicComponentsRef,
                        id: "BasicComponentsSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().BasicComponentsSection,
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
                                    e().GrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_section_subheader",
                                  ),
                                }),
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_components_section_title",
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
                                    "#templatepage_components_section_introduction",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsx)(v, {
                              additionalClassName: e().FullWidthImage,
                              image: "templatepage/image_16_9.png",
                            }),
                            (0, a.jsxs)("div", {
                              className: e().Grid_3,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_1_1.png",
                                      video: "templatepage/video_1_1.mp4",
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
                                            "#templatepage_components_textimageblock_vertical",
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
                                            "#templatepage_components_textimageblock_vertical_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_1_1.png",
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
                                            "#templatepage_components_textimageblock_vertical",
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
                                            "#templatepage_components_textimageblock_vertical_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_1_1.png",
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
                                            "#templatepage_components_textimageblock_vertical",
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
                                            "#templatepage_components_textimageblock_vertical_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: e().Grid_2,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_3_2.png",
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
                                            "#templatepage_components_textimageblock_vertical",
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
                                            "#templatepage_components_textimageblock_vertical_larger_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().TextImageBlockVertical,
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_3_2.png",
                                      video: "templatepage/video_3_2.mp4",
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
                                            "#templatepage_components_textimageblock_vertical",
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
                                            "#templatepage_components_textimageblock_vertical_larger_description",
                                          ),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: e().DotaPlusBadge,
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: `${n.r.IMG_URL}/icons/dota_plus.png`,
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
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: (0, s.A)(
                                e().TextImageBlockHorizontal,
                                e().WideImage,
                              ),
                              children: [
                                (0, a.jsx)(v, {
                                  image: "templatepage/image_3_2.png",
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
                                        "#templatepage_components_textimageblock_horizontal",
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
                                        "#templatepage_components_textimageblock_horizontal_description",
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
                                (0, a.jsx)(v, {
                                  image: "templatepage/image_3_2.png",
                                  video: "templatepage/video_3_2.mp4",
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
                                        "#templatepage_components_textimageblock_horizontal_flipped",
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
                                        "#templatepage_components_textimageblock_horizontal_description",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: e().Grid_2,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: (0, s.A)(
                                    e().TextImageBlockHorizontal,
                                    e().NarrowImage,
                                  ),
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_1_1.png",
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
                                            "#templatepage_components_textimageblock_horizontal",
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
                                            "#templatepage_components_textimageblock_horizontal_small_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: (0, s.A)(
                                    e().TextImageBlockHorizontal,
                                    e().NarrowImage,
                                  ),
                                  children: [
                                    (0, a.jsx)(v, {
                                      image: "templatepage/image_1_1.png",
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
                                            "#templatepage_components_textimageblock_horizontal",
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
                                            "#templatepage_components_textimageblock_horizontal_small_description",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: e().TextSection,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockTitle,
                                    e().TitleFont,
                                    e().TitleLarge,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_components_text_section_title",
                                  ),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockDescription,
                                    e().DisplayFont,
                                    e().DisplaySmall,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_components_text_section_description",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: (0, s.A)(e().ImmersiveTextImageBlock),
                              children: [
                                (0, a.jsx)(v, {
                                  image: "templatepage/image_21_9.png",
                                  video: "templatepage/video_21_9.mp4",
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
                                        "#templatepage_components_textimageblock_immersive",
                                      ),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: (0, s.A)(
                                        e().BlockDescription,
                                        e().DisplayFont,
                                        e().DisplaySmall,
                                        e().LightGrayText,
                                      ),
                                      children: (0, t.Wn)(
                                        "#templatepage_components_textimageblock_immersize_description",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: (0, s.A)(e().ActionTextImageBlock),
                              children: [
                                (0, a.jsx)(v, {
                                  image: "templatepage/image_16_9.png",
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
                                        "#templatepage_components_textimageblock_actionable",
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
                                        "#templatepage_components_textimageblock_actionable_description",
                                      ),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().StandardButton,
                                      onClick: () => this.setPlayingVideo(!0),
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: e().ButtonText,
                                          children: (0, t.Wn)("Button action"),
                                        }),
                                        (0, a.jsx)(P.U, {}),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: e().TextSection,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockTitle,
                                    e().TitleFont,
                                    e().TitleLarge,
                                  ),
                                  children: (0, t.Wn)("Hero reworks"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BlockDescription,
                                    e().DisplayFont,
                                    e().DisplaySmall,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "Use these to call out nothworthy hero reworks",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().HeroReworkContainer,
                              children: [
                                (0, a.jsx)(U, {
                                  patchnotes: i?.heroes,
                                  heroname: "muerta",
                                }),
                                (0, a.jsx)(U, {
                                  patchnotes: i?.heroes,
                                  heroname: "clinkz",
                                }),
                                (0, a.jsx)(U, {
                                  patchnotes: i?.heroes,
                                  heroname: "arc_warden",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      I(),
                      (0, a.jsx)("div", {
                        ref: this.newHeroRef,
                        id: "NewHeroSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().NewHeroSection,
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
                                    e().GrayText,
                                  ),
                                  children: (0, t.Wn)("#new_hero_introducing"),
                                }),
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_newhero_section_title",
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
                                    "#templatepage_newhero_introduction",
                                  ),
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: e().TextSection,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: e().HeroAttributesContainer,
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: (0, s.A)(
                                        e().HeroAttributeIcon,
                                        e().Agility,
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
                                (0, a.jsxs)("div", {
                                  className: e().HeroRolesContainer,
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: (0, s.A)(
                                        e().HeroRole,
                                        e().TitleFont,
                                        e().TitleSmall,
                                      ),
                                      children: (0, t.Wn)(
                                        "#hero_attack_type_ranged",
                                      ),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: (0, s.A)(
                                        e().HeroRole,
                                        e().TitleFont,
                                        e().TitleSmall,
                                      ),
                                      children: (0, t.Wn)("#hero_support"),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: (0, s.A)(
                                        e().HeroRole,
                                        e().TitleFont,
                                        e().TitleSmall,
                                      ),
                                      children: (0, t.Wn)("#hero_disabler"),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: (0, s.A)(
                                        e().HeroRole,
                                        e().TitleFont,
                                        e().TitleSmall,
                                      ),
                                      children: (0, t.Wn)("#hero_escape"),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().SectionDescriptionLabel,
                                    e().DisplayFont,
                                    e().DisplaySmall,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_newhero_description",
                                  ),
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().ButtonsSection,
                                  children: [
                                    (0, a.jsx)(K.N_, {
                                      to: V.J.hero("ringmaster"),
                                      children: (0, a.jsxs)("div", {
                                        className: e().StandardButton,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: e().ButtonText,
                                            children: (0, t.Wn)(
                                              "#view_hero_detail_page",
                                            ),
                                          }),
                                          (0, a.jsx)(P.U, {}),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().StandardButton,
                                      onClick: () => this.setPlayingVideo(!0),
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: e().ButtonText,
                                          children: (0, t.Wn)("#play_trailer"),
                                        }),
                                        (0, a.jsx)(P.U, {}),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: e().AbilitySection,
                        children: (0, a.jsxs)(_.gi, {
                          className: e().AbilityCarousel,
                          naturalSlideWidth: 100,
                          naturalSlideHeight: 56.25,
                          totalSlides: G.length,
                          children: [
                            (0, a.jsx)(_.Ap, {
                              className: e().AbilitySlider,
                              children: G.map((r, o) =>
                                (0, a.jsxs)(
                                  _.q7,
                                  {
                                    className: e().AbilitySlide,
                                    index: o,
                                    children: [
                                      (0, a.jsxs)("video", {
                                        className: e().AbilityVideo,
                                        autoPlay: !0,
                                        preload: "auto",
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        poster: `${n.r.VIDEO_URL}/${r.posterDir}`,
                                        children: [
                                          r.videoSrcWebm &&
                                            (0, a.jsx)("source", {
                                              type: "video/webm",
                                              src: `${n.r.VIDEO_URL}/${r.videoSrcWebm}`,
                                            }),
                                          r.videoSrcMp4 &&
                                            (0, a.jsx)("source", {
                                              type: "video/mp4",
                                              src: `${n.r.VIDEO_URL}/${r.videoSrcMp4}`,
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
                                              children: d?.abilities.find(
                                                (u) => u.id == r.abilityId,
                                              ).name_loc,
                                            }),
                                            (0, a.jsx)("div", {
                                              className: (0, s.A)(
                                                e().AbilityDesc,
                                                e().BodyFont,
                                                e().BodyMedium,
                                              ),
                                              children: this.convertAbilityDesc(
                                                d?.abilities.find(
                                                  (u) => u.id == r.abilityId,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  `HeroAbilitySlide-${o}`,
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
                                    children: (0, t.Wn)(
                                      "#templatepage_abilities_heading",
                                    ),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, s.A)(e().CarouselDots),
                                    children: G.map((r, o) =>
                                      (0, a.jsx)(
                                        _.cL,
                                        {
                                          slide: o,
                                          className: e().AbilitySelectorDot,
                                          children: (0, a.jsx)(z.cT, {
                                            heroData: d,
                                            abilityData: d?.abilities.find(
                                              (u) => u.id == r.abilityId,
                                            ),
                                            bShowVideo: !1,
                                            abilityHotKey: r.hotKey,
                                            additionalClassName:
                                              e().HeroesAbility,
                                            abilityType: e().Active,
                                          }),
                                        },
                                        `HeroAbilityDot-${o}`,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().WallpaperSection,
                        ),
                        children: (0, a.jsxs)("div", {
                          className: e().WebsiteSectionInner,
                          children: [
                            (0, a.jsxs)("div", {
                              className: e().WebsiteSectionHeader,
                              children: [
                                (0, a.jsx)(me, { subHeader: "Hero name" }),
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().TitleFont,
                                    e().TitleMedium,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_wallpapers",
                                  ),
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
                                      href: `${n.r.IMG_URL}/muerta/wallpaper1.png`,
                                      children: (0, a.jsxs)("div", {
                                        className: e().Wallpaper,
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: `${n.r.IMG_URL}/muerta/wallpaper_thumbnail1.png`,
                                          }),
                                          (0, a.jsx)(W, {}),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("a", {
                                      href: `${n.r.IMG_URL}/muerta/wallpaper2.png`,
                                      children: (0, a.jsxs)("div", {
                                        className: e().Wallpaper,
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: `${n.r.IMG_URL}/muerta/wallpaper_thumbnail2.png`,
                                          }),
                                          (0, a.jsx)(W, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().WallpaperGroup,
                                  children: [
                                    (0, a.jsx)("a", {
                                      href: `${n.r.IMG_URL}/muerta/wallpaper3.png`,
                                      children: (0, a.jsxs)("div", {
                                        className: e().Wallpaper,
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: `${n.r.IMG_URL}/muerta/wallpaper_thumbnail3.png`,
                                          }),
                                          (0, a.jsx)(W, {}),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("a", {
                                      href: `${n.r.IMG_URL}/muerta/wallpaper4.png`,
                                      children: (0, a.jsxs)("div", {
                                        className: e().Wallpaper,
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: `${n.r.IMG_URL}/muerta/wallpaper_thumbnail4.png`,
                                          }),
                                          (0, a.jsx)(W, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().WallpaperGroup,
                                  children: [
                                    (0, a.jsx)("a", {
                                      href: `${n.r.IMG_URL}/muerta/wallpaper5.png`,
                                      children: (0, a.jsxs)("div", {
                                        className: e().Wallpaper,
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: `${n.r.IMG_URL}/muerta/wallpaper_thumbnail5.png`,
                                          }),
                                          (0, a.jsx)(W, {}),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)("a", {
                                      href: `${n.r.IMG_URL}/muerta/wallpaper6.png`,
                                      children: (0, a.jsxs)("div", {
                                        className: e().Wallpaper,
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: `${n.r.IMG_URL}/muerta/wallpaper_thumbnail6.png`,
                                          }),
                                          (0, a.jsx)(W, {}),
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
                                  children: (0, t.Wn)(
                                    "#templatepage_herodetails_section_subheader",
                                  ),
                                }),
                                (0, a.jsx)(K.N_, {
                                  to: V.J.hero("ringmaster"),
                                  children: (0, a.jsxs)("div", {
                                    className: e().StandardButton,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: e().ButtonText,
                                        children: (0, t.Wn)(
                                          "#templatepage_hero_detail_button",
                                        ),
                                      }),
                                      (0, a.jsx)(P.U, {}),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: e().HeroImageContainer,
                              children: (0, a.jsx)("img", {
                                className: e().HeroImage,
                                src: `${n.r.IMG_URL}/heroes/crops/ringmaster.png`,
                              }),
                            }),
                          ],
                        }),
                      }),
                      I(),
                      (0, a.jsx)("div", {
                        id: "TerrainComparisonSection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().TerrainComparisonSection,
                        ),
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
                                  children: (0, t.Wn)("Terrain Comparison"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().WebsiteDescription,
                                    e().DisplayFont,
                                    e().DisplayMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "Useful for comparing map terrain changes",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)(j.U, {
                              labels: ["1", "2", "3", "4", "5", "6", "7"],
                              children: [
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/WisdomShrine_R.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/WisdomShrine_R.jpg",
                                  }),
                                }),
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/LotusPool_R.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/LotusPool_R.jpg",
                                  }),
                                }),
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/RoshPit_South.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/RoshPit_South.jpg",
                                  }),
                                }),
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/MapCorner_R.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/MapCorner_R.jpg",
                                  }),
                                }),
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/T1Gutter_R.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/T1Gutter_R.jpg",
                                  }),
                                }),
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/T2Approach_R.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/T2Approach_R.jpg",
                                  }),
                                }),
                                (0, a.jsx)(D.EW, {
                                  itemOne: (0, a.jsx)(j.v, {
                                    is_new: !0,
                                    image:
                                      "patch738/comparison/radiant/old/BaseCorner_R.jpg",
                                  }),
                                  itemTwo: (0, a.jsx)(j.v, {
                                    is_new: !1,
                                    image:
                                      "patch738/comparison/radiant/new/BaseCorner_R.jpg",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      I(),
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
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_treasure_section_title",
                                  ),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().WebsiteDescription,
                                    e().DisplayFont,
                                    e().DisplayMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_treasure_section_introduction",
                                  ),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().WebsiteDescription,
                                    e().BodyFont,
                                    e().BodyMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_treasure_section_description",
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)(_.gi, {
                              className: e().TreasureCarousel,
                              naturalSlideWidth: 600,
                              naturalSlideHeight: 960,
                              totalSlides: 10,
                              currentSlide: 8,
                              infinite: !0,
                              touchEnabled: !0,
                              dragEnabled: !1,
                              children: [
                                (0, a.jsxs)(_.Ap, {
                                  className: e().TreasureSlider,
                                  children: [
                                    (0, a.jsx)(_.q7, {
                                      index: 0,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 0,
                                        video: "set_ancientapparation",
                                        name: "#frosty_treasure_treasure_name_1",
                                        heroname:
                                          "#frosty_treasure_hero_name_1",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 1,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 1,
                                        video: "set_snapfire",
                                        name: "#frosty_treasure_treasure_name_2",
                                        heroname:
                                          "#frosty_treasure_hero_name_2",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 2,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 2,
                                        video: "set_alchemist",
                                        name: "#frosty_treasure_treasure_name_3",
                                        heroname:
                                          "#frosty_treasure_hero_name_3",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 3,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 3,
                                        video: "set_arcwarden",
                                        name: "#frosty_treasure_treasure_name_4",
                                        heroname:
                                          "#frosty_treasure_hero_name_4",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 4,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 4,
                                        video: "set_pudge",
                                        name: "#frosty_treasure_treasure_name_5",
                                        heroname:
                                          "#frosty_treasure_hero_name_5",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 5,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 5,
                                        video: "set_tusk",
                                        name: "#frosty_treasure_treasure_name_6",
                                        heroname:
                                          "#frosty_treasure_hero_name_6",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 6,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 6,
                                        video: "set_primalbeast",
                                        name: "#frosty_treasure_treasure_name_7",
                                        heroname:
                                          "#frosty_treasure_hero_name_7",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 7,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 7,
                                        video: "set_crystalmaiden",
                                        name: "#frosty_treasure_treasure_name_8",
                                        heroname:
                                          "#frosty_treasure_hero_name_8",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 8,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 8,
                                        video: "set_wraithking",
                                        name: "#frosty_treasure_treasure_name_9",
                                        heroname:
                                          "#frosty_treasure_hero_name_9",
                                        autoplay: !0,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
                                          });
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(_.q7, {
                                      index: 9,
                                      className: e().TreasureSlide,
                                      innerClassName: e().TreasureInnerSlide,
                                      classNameHidden: e().TreasureSlideHidden,
                                      children: (0, a.jsx)(T, {
                                        index: 9,
                                        video: "set_roshan",
                                        name: "#frosty_treasure_treasure_name_10",
                                        heroname:
                                          "#frosty_treasure_hero_name_10",
                                        autoplay: !1,
                                        onSlideIn: (r, o) => {
                                          this.setState({
                                            treasureName: r,
                                            heroName: o,
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
                                  children: (0, t.Wn)(this.state.heroName),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TreasureName,
                                    e().DisplayFont,
                                    e().DisplaySmall,
                                  ),
                                  children: (0, t.Wn)(this.state.treasureName),
                                }),
                                (0, a.jsxs)("div", {
                                  className: e().CarouselDots,
                                  children: [
                                    (0, a.jsx)(_._X, {
                                      className: (0, s.A)(
                                        e().TreasurePaginationButton,
                                        e().Prev,
                                      ),
                                      children: (0, a.jsx)("div", {
                                        className: e().PrevArrow,
                                      }),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 0,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 1,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 2,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 3,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 4,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 5,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 6,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 7,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 8,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.cL, {
                                      className: e().TreasureSelector,
                                      slide: 9,
                                      children: (0, a.jsx)("div", {}),
                                    }),
                                    (0, a.jsx)(_.CC, {
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
                            b(),
                            (0, a.jsx)("p", {
                              className: (0, s.A)(
                                e().TitleFont,
                                e().TitleSmall,
                              ),
                              children: (0, t.Wn)(
                                "#templatepage_treasure_section_treasureinfo",
                              ),
                            }),
                            (0, a.jsxs)("div", {
                              className: e().Grid_2,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: (0, s.A)(
                                    e().TextImageBlockHorizontal,
                                    e().NarrowImage,
                                  ),
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: `${n.r.IMG_URL}/templatepage/image_1_1.png`,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#templatepage_treasure_section_chestname",
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
                                            "#templatepage_lipsum_medium",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: (0, s.A)(
                                    e().TextImageBlockHorizontal,
                                    e().NarrowImage,
                                  ),
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: `${n.r.IMG_URL}/templatepage/image_1_1.png`,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: e().TextBlock,
                                      children: [
                                        (0, a.jsx)("p", {
                                          className: (0, s.A)(
                                            e().BlockTitle,
                                            e().LabelFont,
                                            e().LabelLarge,
                                          ),
                                          children: (0, t.Wn)(
                                            "#templatepage_treasure_section_keyname",
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
                                            "#templatepage_lipsum_medium",
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
                      I(),
                      (0, a.jsx)("div", {
                        id: "TypographySection",
                        className: (0, s.A)(
                          e().WebsiteSection,
                          e().TypographySection,
                        ),
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
                                  children: (0, t.Wn)(
                                    "#templatepage_typography_section_title",
                                  ),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().WebsiteDescription,
                                    e().DisplayFont,
                                    e().DisplayMedium,
                                    e().LightGrayText,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_typography_section_introduction",
                                  ),
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsxs)("div", {
                              className: e().TextWaterfallExampleBlock,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TextWaterfallExampleBlockTitle,
                                    e().GrayText,
                                  ),
                                  children: (0, t.Wn)("Title"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TitleExtraLarge,
                                    e().TitleFont,
                                  ),
                                  children: (0, t.Wn)("Title Extra Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TitleLarge,
                                    e().TitleFont,
                                  ),
                                  children: (0, t.Wn)("Title Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TitleMedium,
                                    e().TitleFont,
                                  ),
                                  children: (0, t.Wn)("Title Medium"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TitleSmall,
                                    e().TitleFont,
                                  ),
                                  children: (0, t.Wn)("Title Small"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TitleExtraSmall,
                                    e().TitleFont,
                                  ),
                                  children: (0, t.Wn)("Title Extra Small"),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().TextWaterfallExampleBlock,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TextWaterfallExampleBlockTitle,
                                    e().GrayText,
                                  ),
                                  children: (0, t.Wn)("Display"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().DisplayExtraLarge,
                                    e().DisplayFont,
                                  ),
                                  children: (0, t.Wn)("Display Extra Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().DisplayLarge,
                                    e().DisplayFont,
                                  ),
                                  children: (0, t.Wn)("Display Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().DisplayMedium,
                                    e().DisplayFont,
                                  ),
                                  children: (0, t.Wn)("Display Medium"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().DisplaySmall,
                                    e().DisplayFont,
                                  ),
                                  children: (0, t.Wn)("Display Small"),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().TextWaterfallExampleBlock,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TextWaterfallExampleBlockTitle,
                                    e().GrayText,
                                  ),
                                  children: (0, t.Wn)("Body"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BodyExtraLarge,
                                    e().BodyFont,
                                  ),
                                  children: (0, t.Wn)("Body Extra Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BodyLarge,
                                    e().BodyFont,
                                  ),
                                  children: (0, t.Wn)("Body Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BodyMedium,
                                    e().BodyFont,
                                  ),
                                  children: (0, t.Wn)("Body Medium"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().BodySmall,
                                    e().BodyFont,
                                  ),
                                  children: (0, t.Wn)("Body Small"),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().TextWaterfallExampleBlock,
                              children: [
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().TextWaterfallExampleBlockTitle,
                                    e().GrayText,
                                  ),
                                  children: (0, t.Wn)("Label"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().LabelExtraLarge,
                                    e().LabelFont,
                                  ),
                                  children: (0, t.Wn)("Label Extra Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().LabelLarge,
                                    e().LabelFont,
                                  ),
                                  children: (0, t.Wn)("Label Large"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().LabelMedium,
                                    e().LabelFont,
                                  ),
                                  children: (0, t.Wn)("Label Medium"),
                                }),
                                (0, a.jsx)("p", {
                                  className: (0, s.A)(
                                    e().LabelSmall,
                                    e().LabelFont,
                                  ),
                                  children: (0, t.Wn)("Label Small"),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      I(),
                      (0, a.jsx)("div", {
                        ref: this.patchRef,
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
                                  children: (0, t.Wn)(
                                    "#templatepage_gameplay_section_subtitle",
                                  ),
                                }),
                                (0, a.jsx)("h2", {
                                  className: (0, s.A)(
                                    e().SectionHeaderLabel,
                                    e().TitleFont,
                                    e().TitleExtraLarge,
                                  ),
                                  children: (0, t.Wn)(
                                    "#templatepage_gameplay_section_title",
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
                                    "#templatepage_patchnotes_new_items_introduction",
                                  ),
                                }),
                              ],
                            }),
                            b(),
                            (0, a.jsx)("p", {
                              className: (0, s.A)(
                                e().LabelExtraLarge,
                                e().LabelFont,
                              ),
                              children: (0, t.Wn)("Item updates"),
                            }),
                            (0, a.jsxs)("div", {
                              className: e().GameItemsContainer,
                              children: [
                                (0, a.jsx)(h, {
                                  name: "item_angels_demise",
                                  components: ["phylactery", "lesser_crit"],
                                  recipeCost: 600,
                                }),
                                (0, a.jsx)(h, {
                                  name: "item_devastator",
                                  components: ["witch_blade", "mystic_staff"],
                                }),
                                (0, a.jsx)(h, {
                                  name: "item_arcane_boots",
                                  components: ["boots", "ring_of_basilius"],
                                  recipeCost: 375,
                                }),
                                (0, a.jsx)(h, {
                                  name: "item_bloodthorn",
                                  components: [
                                    "orchid",
                                    "javelin",
                                    "hyperstone",
                                  ],
                                  recipeCost: 450,
                                }),
                                (0, a.jsx)(h, { name: "item_safety_bubble" }),
                                (0, a.jsx)(h, { name: "item_light_collector" }),
                                (0, a.jsx)(h, { name: "item_doubloon" }),
                                (0, a.jsx)(h, {
                                  name: "item_ancient_guardian",
                                }),
                                (0, a.jsx)(h, {
                                  name: "item_unwavering_condition",
                                }),
                                (0, a.jsx)(h, { name: "item_panic_button" }),
                              ],
                            }),
                            b(),
                            (0, a.jsx)("p", {
                              className: (0, s.A)(
                                e().LabelExtraLarge,
                                e().LabelFont,
                              ),
                              children: (0, t.Wn)("Neutral item updates"),
                            }),
                            (0, a.jsxs)("div", {
                              className: e().GameItemsContainer,
                              children: [
                                (0, a.jsx)(h, { name: "item_dormant_curio" }),
                                (0, a.jsx)(h, { name: "item_kobold_cup" }),
                                (0, a.jsx)(h, { name: "item_sisters_shroud" }),
                                (0, a.jsx)(h, { name: "item_jidi_pollen_bag" }),
                                (0, a.jsx)(h, { name: "item_dezun_bloodrite" }),
                                (0, a.jsx)(h, { name: "item_giant_maul" }),
                                (0, a.jsx)(h, { name: "item_outworld_staff" }),
                                (0, a.jsx)(h, { name: "item_divine_regalia" }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: e().PatchnotesContainer,
                              children: [
                                (0, a.jsx)(E.fs, {
                                  patchnotes: i?.general_notes,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(E.wL, {
                                  patchnotes: i?.neutral_creeps,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(E.ZV, {
                                  patchnotes: i?.items,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(E.ZV, {
                                  patchnotes: i?.neutral_items,
                                  is_neutrals: !0,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                                (0, a.jsx)(E.ob, {
                                  patchnotes: i?.heroes,
                                  headerClassName: e().PatchNotesHeaderLabel,
                                  notesListClassName: e().PatchNotesList,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(k.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        F = ie([y.PA], F);
      },
      11417: (L) => {
        L.exports = {
          RightArrow: "_1aWAcVv4khhRKQHKyqIDl5",
          UpRightArrow: "_3KCtpfqeVGR0eaqc5YB4iF",
        };
      },
      85655: (L) => {
        L.exports = {
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
      55730: (L) => {
        L.exports = {
          Tooltip: "_2Sxw98Ax0L2pXY3ZWbV2rp",
          CarouselFade: "_3CQ2-DL7lsX5r4xnAY9702",
          StandardButton: "_2wu6tmmWQtNBfyqxUpqCdf",
          ButtonText: "_2XoiZYk7WHdXc74iFVoaMg",
          Icon: "_2A5wJp1Oi_C-n3bVBXgGPx",
          Play: "_14eMqIqd4wev8_PxrZs6nB",
          SteamLogo: "_26R-rM5t39G-6HfmCXQy8P",
          ToolTip: "_143PZviilGiwuQD3QO1kY5",
          PlayerReportTooltip: "fo1Sk0aY-aJczkSkSwi_8",
          TitleFont: "_1zG0DwXqw0WaqgNvKk_vs_",
          TitleExtraLarge: "_1_tMYVE06Isva60bkApZ8z",
          TitleLarge: "_3cbfqmwo6feRnt5zI_u8uk",
          TitleMedium: "SLO_aFnIT9xHwx8RZKm7F",
          TitleSmall: "jwOrCwS7PzgmgE9riEYPs",
          TitleExtraSmall: "_3SnTBPO1vjSjF5V5Zt3bte",
          DisplayFont: "lYt4Fxxkp5uA0ZE_sMrbB",
          DisplayExtraLarge: "_1U-qvSUmYZWPnfVF5vNMza",
          DisplayLarge: "_1hskMCjpGSDIPk4BzgnUjr",
          DisplayMedium: "NNTMTFkQVU8V_PB4pVCMb",
          DisplaySmall: "cGyZqYxLJeQQyA3YU3mZJ",
          BodyFont: "_6opKLr2hFnQXcqoM19Cih",
          BodyExtraLarge: "_1C9Cm89YUfvsNWoyLsb0Dx",
          BodyLarge: "bA30-i1CqV10CkOzb379p",
          BodyMedium: "_1zI5iy6GLbjRHy9U2o5FST",
          BodySmall: "_2TFOX55W7Ai7rd9T8ybIBP",
          LabelFont: "R3K7LyULUygkLaSbu3uBU",
          LabelExtraLarge: "XCQBb1EZvXAjuckg9IlmR",
          LabelLarge: "_27GWJW7SB8qP7LBEP9TwLu",
          LabelMedium: "_1dlTtIODhIDIa87839LBwh",
          LabelSmall: "_351ZS9yvXjK6NcxhTiPLAu",
          LightGrayText: "_38z29Qos5AW89LKf8qNizC",
          GrayText: "FT1b62Nr9UvtE20nBzwfF",
          ControlIcon: "_2MGQHP00XPXyF64ls-DE35",
          PageContainer: "_22gBC1aWOIbpaTV72S69qP",
          Hidden: "_3aDEoYFclYNpINCh8Xd3r3",
          TemplatePage: "_2Lo3KubKYZXLrmemP0XUOD",
          MobileOnly: "_3CjIkFvOi6ZbWcyoG9bfga",
          WebsiteSection: "_3a44OTsdGjU0NUB0xzUgIc",
          WebsiteSectionInner: "_2SQ-361kKr74JuG7-71qTu",
          WebsiteSectionHeader: "_3eUuGW09iHPHFGlkKpOzTW",
          TextSection: "_2TiGvUo3I0FlIIhd42rWkw",
          SubsectionDivider: "_2vbb_v-nF9HeX4yv9zRAOa",
          TopDash: "_1ZhQ7ojSq5YZrljqFiElSt",
          Background: "_3lqUUbGKYAWuLMbT0FK76O",
          SectionDivider: "_1U0VNRUobDoOSZxQmEXhIm",
          Pattern: "_1kNvYKuER3MyMAYedL9lwj",
          Overlay: "_1FSKvx3M5boWbmjMOreIMz",
          BottomDash: "_3ajP6jV_xUE-tZhcYQ6wdB",
          ButtonsSection: "SzGQ107u9vsQCgKe2Iw2v",
          Grid_4: "_1DKNidKUBYxnQXRRjvgmDs",
          Grid_3: "_283mZ7ONkwykOkV7TfXWG0",
          Grid_2: "gIz3vZJNwXV1-1QpTkPg2",
          TextBlock: "_19B_wLVpioGCOb07D8n5xz",
          TextImageBlockVertical: "_1qQ8y7m7wMmtpH3AEYtwRh",
          TextImageBlockHorizontal: "_9nbb6oJe4klAsF5R3CY9g",
          Flipped: "_28XCfXDRGO9ZjIbqUAU2BW",
          NarrowImage: "_3hdP525OklJ_aLJM_9PtIz",
          WideImage: "_2RF9AIz6vBTJ52qEA-Qs1Z",
          FullWidthImage: "yctoNnfiDN21JE2CGW-jJ",
          ActionTextImageBlock: "_2mB8NO-5-N-2sJ6C18lOcy",
          ActionImage: "_1Im854RYNMqQayy09kbURE",
          HeroReworkContainer: "_1bXU8ZiubuIMHZ43NJ5iPK",
          HeroRework: "_35ZOXRyuCyKReLpRtY7PZz",
          HeroName: "_2HhV7zfVJvscYFMgHcWQGm",
          ReworkDescription: "AtKVBJ67wdGMyYF4v4CIU",
          HeroImageContainer: "_1BVaEXoamV2NOJ8L0uYdpm",
          HeroShadow: "is7qzxTRgHZB5V3EEzeyr",
          HeroReworkPortrait: "_1OLY6jVeIftPnxlg4mPjj8",
          HeroReworkPortraitVideo: "_1mha4u9NK3D6f6K7TlCpJx",
          HeroReworkPatchNotes: "_2kDFiS3UgRmgerWwegao8t",
          Muerta: "_1-OIZZNwUmnnfO_ERTZ-kT",
          Clinkz: "_3nBYVK_pBTHudBcnp3HQpY",
          ArcWarden: "YZHc9k8ziJQvHWjVZeETW",
          ImmersiveTextImageBlock: "_3pdJP8itgSszY3ntJsj72w",
          BasicComponentsSection: "_38h-gRWU2RQXLFobftBj90",
          DashedSectionSubHeader: "_3MtjJTT-5w8sgrZ0nBOkLw",
          Label: "_1xaEgis3TzR_ogQSa03876",
          DashLeft: "_6YUvMidO4Ce_7x5jbZJxX",
          DashRight: "_1yZ6qojXWKqyDEkfVIM3yg",
          AbilityImageContainer: "_14Hr3esKqmRXdsBsxxJptD",
          AbilityImage: "_1NO7OQ5RqjRZaBce_V26L6",
          AbilityHotKey: "Dyp8jUXYgKywAXDOZYhXZ",
          Active: "_2HRdRpIAlwABdcFBJtjmoC",
          DotaPlusBadge: "eOcI9laaMKmL_0bp4BOzh",
          HeaderSection: "_3KpyyIz5BM3xSiumWzJTLF",
          LogoContainer: "_1dnwSCPty0_1gz6lUSvaiE",
          LogoImage: "_2_u-Qo63s-M-RfEUZNV53X",
          HeaderTextSection: "YEzxGUAOKPGSuwp5JAzN1",
          WebsiteIntro: "f1xLXC9BmFhf-Bv5vc45U",
          HowItWorksSection: "_3GsTe2fNwxV5h6kL4mMZ0C",
          HeroDetailsSection: "n-fr9nYuJWYjSLu4_Tebj",
          HeroDetailsSectionInner: "_17tQTlYOfFT03--Jjubev0",
          HeroImage: "C13X_fDhQwWoOUHQ8hONw",
          TreasureSection: "_9IBC_Tr3c8BiAcTjItZOT",
          TreasureCarousel: "-CmW26JdBwFACegg-QN5G",
          TreasureSlider: "_3LOUqpoONI4yeCvsWivn09",
          TreasureSlide: "_1aTLdKPZikW6PmGpSvjumL",
          SlideContainer: "_3ZJWnLG6iU9VpE1EI-ThB6",
          TreasureSlideHidden: "eaQRrTBbuym0fYzKpMdRL",
          TreasureName: "IURaOIWSNQvcJ8ur6zgzv",
          CarouselDots: "_3mk2V0asn2NrNxBiapRCXv",
          TreasureSelector: "_1AL3LRtAtgvysTufCGO02C",
          TreasurePaginationButton: "_1HPkitKQdCuSX0H1-zkjwJ",
          Prev: "_2L4AuDN_GAQhD080XFlyR5",
          Next: "_3RLHzG_b3EdNAA3ztTl7Lb",
          NextArrow: "_3PyS5c-LMg2_ITHy6Ez7NA",
          PrevArrow: "ZDCL9e9s4rrr5jocHYzAE",
          AbilitySection: "_r6AXMgwCcUiFwsSnF0W9",
          AbilityCarousel: "_2fRElEO6cU4mvejUyM7ae5",
          AbilitySlider: "_212ksZE1kJfJKfRz7ywVDg",
          AbilitySlide: "_10ZyZ9ZN0i2xzvGLbpCOeY",
          SlideAbilityInfoContainer: "bJx6OHWlfj2E620y3eDZP",
          AbilityText: "_3eDXxv9U5p7d5suJJBkJSP",
          AbilityName: "Fh_x7lLSOdiLC9peoEudp",
          AbilityDesc: "_1ckE9a96_gi_h2VkdFqECz",
          CarouselDotsSection: "Of0OFm6f39oprULDbmAHH",
          CarouselDotsContainer: "_1ompR9rDwzgPkvmH4chfPZ",
          CarouselDotsHeading: "_1KMslKsqlUCHRubf9dm-_p",
          AbilitySelectorDot: "_3IvIAx1JiS-WBpCNnixs3V",
          HeroesAbility: "_3m2RXh7FgzX8CSeMoYb5gF",
          GameplayUpdateContainer: "_2Od53Rl3JUlO5RHB2Ry75f",
          GameItemsContainer: "_2kG8xU-aSbZAgynUa0COQz",
          GameItemDetails: "_2aUp-BLzJyYJ-z0que4rKY",
          ItemBorder: "g84c-JyzqGZA_mfZ5pPIW",
          HeaderContainer: "_2gSeeObUqZERVTaMfln3ja",
          HeaderTierColor: "_2oVREIfGFvsgr13mrm-Smi",
          Tier1: "_3PbnBG9gAR7XnVF3YCoB-5",
          Tier2: "_16ZkNqZtDeYcrzCvGUweNN",
          Tier3: "_3GewOxLClHg4mV9IZ9EJjZ",
          Tier4: "_21NNBsHJnppPzoVwMw3Mpz",
          Tier5: "ONti_TyxGyqemdPaFn3Fb",
          Header: "_2KSi1YZoJgbyZe-GBapglc",
          ItemImage: "_2H7vQsDSpF-b5S5QL6ep8I",
          HeaderText: "_1ZaYzfoDVG09O05nJKgniu",
          ItemName: "_1q9lRTHIwgrYNCn3cpXpRw",
          GoldPrice: "_2yv7OgdX8ESkd0fZLuQtb",
          GoldIcon: "_1fVI8nde6EIEGBuwGnyLqx",
          NeutralItemTier: "_1RlnGWfSKvE6mUHJZvfidP",
          Body: "_3g1MSrTGqfuY6z_gO9JRWw",
          Stats: "_2VCS4hVB5Hzlq0PJHKXwNy",
          Stat: "_2yC0pUe_f6Qo3boH0affiC",
          SingleValue: "_3OKgzFHxtTrPNvVOlIRrJO",
          DescriptionContainer: "_1uGyQffbc0qv3rrUrIWSgE",
          Description: "_1pokx2nWK3uwga_TlDiTji",
          DescriptionHeader: "_1jMID562mDBfxt_trVBWO",
          CooldownContainer: "_1grPblDohBPgQsZxK576-K",
          CooldownIcon: "_30Kv13rOiMfctkP6lG3jK1",
          CooldownText: "_3W21Nqz4WUv8Q4hzs4Pgqm",
          ManaContainer: "_1CeDb9yhn8cVNZB5BY8RR2",
          ManaIcon: "_10cdf2CFQZRmbIIR_Su2Ux",
          ManaText: "J4yedU2h_ZEAlDDLYA76n",
          HealthContainer: "_1M6Xy0T-o72VniRBR4mCy8",
          HealthIcon: "_31JJRfj9ZN6yGO2XB4vkXX",
          HealthText: "_1RiKMxil-wlKj7O6vXy-tE",
          Lore: "_3UP9lQVfFQzjkpSblKLw5J",
          Recipe: "_24frRf559vSXpoaDnfKzwT",
          RecipeLabel: "_2huEgaVaWHbU-fH9RNo4j3",
          RecipeImagesContainer: "_2S4pjQ2D_aX9n-pT7_Sm_i",
          RecipeComponentImage: "_2pz137w3KINQpmA4iB2EY9",
          RecipeCost: "_3rU-bo2uyY3rUMdb1d07Gt",
          PatchnotesContainer: "R63srm7g0lmfbdFulv7s2",
          PatchNotesHeaderLabel: "_52NsLw90cGERHuzbplQv2",
          MiscSection: "_1vbqn5JwIoSVfadUTtInL2",
          UpdatesSection: "_2jJSVAG5ipLEbzC1aoS1WF",
          NewHeroSection: "_1c1HBo6MXSUDeFOEgdkjVc",
          HeroAttributesContainer: "Y0OY7t2BRNEMQfJTJvJF1",
          HeroAttributeIcon: "_2EXAOzfaYMEmBevXsdq7DQ",
          Strength: "_3CZDWQ_wX_L1Asbmcy9Iy2",
          Agility: "_1byR7sEWqVRy1uBD3qfwy-",
          Intelligence: "_1eRfGxQRZoYb7tTFPUxhG7",
          Universal: "_17pg-A7hHCkqwpWuEORks1",
          HeroComplexityIcon: "_3-HNAycMa0sGkfM_BffJyG",
          Filled: "_3sbANTD4v25yg5cIn7gTes",
          HeroRolesContainer: "_28FVt-8mHuU_5U3OlENQyV",
          HeroRole: "_2lQdwph0wHrOlPdKSykqcA",
          WallpaperSection: "_1xjnT1VlxhdnJhRj9QmSBQ",
          Wallpapers: "_1EWCmJRCAZzYQNIkZbRpVG",
          WallpaperGroup: "OdocSWdlRpuH4nCCcsoLj",
          Wallpaper: "_3lGFvgblxs7o87gu-sDAJ5",
          TypographySection: "_2u4LNvw_mqigfwVUp2fIPn",
          TextWaterfallExampleBlock: "_3I7CeITqwsE_2nlLkzYnJB",
          TextWaterfallExampleBlockTitle: "_2c9BqPKONZOLy-CczeVoVR",
          MobileOnlySection: "cHM0pjLndTBMAkH8cW9D-",
          MobileOnlyIcon: "_14S-IFKvEAQB7AsljjH42F",
          TrailerContainer: "UF8u0qA4AbRRXFa5wAN6q",
          TrailerVideo: "_3necJEW8J41HHqK5wc7dRu",
          CloseButton: "_2nNzqoP26iZVcuCkMXGnl6",
          CloseButtonImage: "bTEz25R0Bg1DqgM1pUDHK",
          AnchorNavigation: "aVoPxa5bOqRF8JIRA3zk",
          AnchorLink: "_3mnc9HsnSEr523ZpGMC9a7",
        };
      },
    },
  ]);
})();
