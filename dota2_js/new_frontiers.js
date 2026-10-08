// 2854.js

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkdota_react = self.webpackChunkdota_react || []).push([
    [2854],
    {
      2854: (W, T, l) => {
        "use strict";
        l.r(T), l.d(T, { default: () => I });
        var e = l(69500),
          A = l(85286),
          H = l.n(A),
          c = l(2095),
          M = l(84485),
          t = l(8305),
          C = l(3878),
          u = l(7552),
          B = l(73202),
          D = l(2130),
          U = l(96213),
          h = l(15001),
          G = l(45488),
          k = l(63177),
          F = l(42616),
          K = l(84598),
          V = l(89642),
          a = l.n(V),
          v = l(84899),
          Q = l(88351),
          Y = l(21127),
          x = l(71010),
          z = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          J = (s, r, _, i) => {
            for (
              var n = i > 1 ? void 0 : i ? X(r, _) : r, f = s.length - 1, w;
              f >= 0;
              f--
            )
              (w = s[f]) && (n = (i ? w(r, _, n) : w(n)) || n);
            return i && n && z(r, _, n), n;
          };
        const b = "NewFrontiersPage",
          Z = ({ children: s }) => {
            const { hash: r } = (0, Q.zy)();
            return (
              (0, u.useEffect)(() => {
                r &&
                  setTimeout(() => {
                    const _ = r.replace("#", "");
                    (0, Y.A)(_, b);
                  }, 500);
              }, [r]),
              null
            );
          };
        function $(s) {
          let r = "",
            _ = !0;
          for (let i = 0; i < s.length; ++i) {
            if (s[i] == "_") {
              _ = !0;
              continue;
            }
            _ ? ((r += s[i].toUpperCase()), (_ = !1)) : (r += s[i]);
          }
          return r;
        }
        const y = (s) =>
            (0, e.jsxs)("div", {
              className: a().Text,
              children: [
                (0, e.jsxs)("div", {
                  className: a().HeaderContainer,
                  children: [
                    s.icon &&
                      (0, e.jsx)("div", {
                        className: a().Icon,
                        children: (0, e.jsx)("img", {
                          src: `${c.r.IMG_URL}/` + s.icon,
                        }),
                      }),
                    (0, e.jsx)("div", {
                      className: a().Headline,
                      children: (0, t.Wn)(s.title),
                    }),
                  ],
                }),
                s.description &&
                  (0, e.jsx)("div", {
                    className: a().Description,
                    children: (0, t.Wn)(s.description),
                  }),
                s.contents &&
                  (0, e.jsx)("div", {
                    className: a().Description,
                    children: s.contents,
                  }),
              ],
            }),
          N = (s) =>
            (0, e.jsxs)("div", {
              className: a().FeatureCapsule,
              "data-aos": "fade-left",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)(y, {
                  title: s.title,
                  description: s.description,
                  contents: s.contents,
                }),
                (0, e.jsx)("img", {
                  className: a().Image,
                  src: `${c.r.IMG_URL}/` + s.image,
                }),
              ],
            }),
          j = (s) =>
            (0, e.jsxs)("div", {
              className: a().SmallFeatureCapsule,
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              "data-aos-duration": "1000",
              children: [
                (0, e.jsx)("img", {
                  className: a().Image,
                  src: `${c.r.IMG_URL}/` + s.image,
                }),
                (0, e.jsx)(y, {
                  title: s.title,
                  description: s.description,
                  contents: s.contents,
                }),
              ],
            });
        let R = {
          roshan: {
            title: "#new_frontiers_map_roshan_title",
            description: "#new_frontiers_map_roshan_desc",
            video: "roshan_wide",
            icon: "roshan.png",
            poster: "roshan_poster.jpg",
          },
          twin_gates: {
            title: "#new_frontiers_map_twin_gates_title",
            description: "#new_frontiers_map_twin_gates_desc",
            video: "portal_wide",
            icon: "portal.png",
            poster: "portal_poster.jpg",
          },
          lotus_pools: {
            title: "#new_frontiers_map_lotus_pools_title",
            description: "#new_frontiers_map_lotus_pools_desc",
            video: "tree_wide",
            icon: "lotus_pools.png",
            poster: "tree_poster.jpg",
          },
          tormentors: {
            title: "#new_frontiers_map_tormentors_title",
            description: "#new_frontiers_map_tormentors_desc",
            video: "sentinel_wide",
            icon: "tormentor.png",
            poster: "sentinel_poster.jpg",
          },
          watchers: {
            title: "#new_frontiers_map_watchers_title",
            description: "#new_frontiers_map_watchers_desc",
            video: "watcher_wide",
            icon: "watcher.png",
            poster: "watcher_poster.jpg",
          },
          barriers: {
            title: "#new_frontiers_map_barriers_title",
            description: "#new_frontiers_map_barriers_desc",
            video: "gate_wide",
            icon: "gates.png",
            poster: "gate_poster.jpg",
          },
          wisdom_runes: {
            title: "#new_frontiers_map_wisdom_runes_title",
            description: "#new_frontiers_map_wisdom_runes_desc",
            video: "wisdomrune_wide",
            icon: "wisdom_runes.png",
            poster: "wisdom_rune_poster.jpg",
          },
          shield_runes: {
            title: "#new_frontiers_map_shield_runes_title",
            description: "#new_frontiers_map_shield_runes_desc",
            video: "shield_rune_wide",
            icon: "shield_runes.png",
            poster: "shield_rune_poster.jpg",
          },
          creep_camps: {
            title: "#new_frontiers_map_creep_camps_title",
            description: "#new_frontiers_map_creep_camps_desc",
            video: "camp_wide",
            icon: "creep_camps.png",
            poster: "camp_poster.jpg",
          },
          outpost: {
            title: "#new_frontiers_map_outpost_title",
            description: "#new_frontiers_map_outpost_desc",
            video: "outpost_wide",
            icon: "outpost_radiant.png",
            poster: "outpost_poster.jpg",
          },
        };
        const q = (s) => {
            let r = R[s.feature_id];
            return r
              ? (0, e.jsxs)("div", {
                  className: a().MapFeatureTooltip,
                  children: [
                    (0, e.jsxs)("video", {
                      className: a().Video,
                      autoPlay: !0,
                      preload: "none",
                      muted: !0,
                      loop: !0,
                      playsInline: !1,
                      controls: !1,
                      children: [
                        (0, e.jsx)("source", {
                          src: `${c.r.IMG_URL}new_frontiers/interactive-map/videos/${r.video}.webm`,
                          type: "video/webm",
                        }),
                        (0, e.jsx)("source", {
                          src: `${c.r.IMG_URL}new_frontiers/interactive-map/videos/${r.video}.mp4`,
                          type: "video/mp4",
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: a().Text,
                      children: [
                        (0, e.jsx)("div", {
                          className: a().Title,
                          children: (0, t.Wn)(r.title),
                        }),
                        (0, e.jsx)("div", {
                          className: a().Description,
                          children: (0, t.Wn)(r.description),
                        }),
                      ],
                    }),
                  ],
                })
              : null;
          },
          o = (s) =>
            R[s.feature_id]
              ? (0, e.jsx)(U.he, {
                  toolTipContent: s.revealed
                    ? (0, e.jsx)(q, { feature_id: s.feature_id })
                    : null,
                  strTooltipClassname: a().MapFeatureTooltipContainer,
                  className: (0, h.A)(a().MapFeature, s.featureClass),
                  children: (0, e.jsx)("img", {
                    className: (0, h.A)(
                      a().MapFeatureImage,
                      s.revealed && a().Revealed,
                    ),
                    src: `${c.r.IMG_URL}/new_frontiers/interactive-map/${s.image}`,
                  }),
                })
              : null,
          g = (0, C.PA)(({ patchnotes: s, heroname: r }) => {
            const i = M.B5.Get()
              .getHeroList()
              ?.heroes.find((n) => n.name.replace("npc_dota_hero_", "") == r);
            return i
              ? (0, e.jsxs)("div", {
                  className: (0, h.A)(a().HeroRework, a()[$(r)]),
                  children: [
                    (0, e.jsx)("div", {
                      className: a().HeroName,
                      children: (0, t.Wn)(i.name_loc),
                    }),
                    (0, e.jsx)("div", {
                      className: a().ReworkDescription,
                      children: (0, t.Wn)(
                        "#new_frontiers_major_gameplay_hero_rework_" + r,
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: a().HeroImageContainer,
                      children: [
                        (0, e.jsx)("div", { className: a().HeroShadow }),
                        (0, e.jsx)(K.sG, {
                          heroname: r,
                          portraitClassName: a().HeroReworkPortrait,
                          videoClassName: a().HeroReworkPortraitVideo,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: a().HeroReworkPatchNotes,
                      children: (0, e.jsx)(v.fX, {
                        patchnotes: s,
                        heroname: r,
                        heroClassName: a().HeroReworkPatchNotesInner,
                      }),
                    }),
                  ],
                })
              : null;
          }),
          ee = (s) => {
            if (!s.special.heading_loc) return null;
            let r = s.special.values_float.map((n, f) =>
                (0, e.jsx)(
                  "span",
                  { className: a().SingleValue, children: (0, x.F)(n) },
                  f,
                ),
              ),
              _ = !1,
              i = null;
            return (
              s.special.heading_loc[0] == "+"
                ? ((i = s.special.heading_loc.slice(1)), (_ = !0))
                : (i = s.special.heading_loc),
              i[0] == "$" && (i = "#dota_ability_variable_" + i.slice(1)),
              _
                ? (0, e.jsxs)("div", {
                    className: a().Stat,
                    children: ["+ ", r, " ", (0, t.Wn)(i)],
                  })
                : (0, e.jsxs)("div", {
                    className: a().Stat,
                    children: [(0, t.Wn)(i), " ", r],
                  })
            );
          },
          p = (0, C.PA)(({ name: s }) => {
            const _ = M.B5.Get()
                .getItemList()
                ?.itemabilities.find((d) => d.name == s),
              i = M.B5.Get().getItemData(_?.id);
            if (!i) return null;
            let n = i.desc_loc;
            i.special_values.forEach((d) => {
              let m =
                d.values_float.length > 0 ? (0, x.F)(d.values_float[0]) : "0";
              (n = n.replace("%" + d.name + "%", m)),
                (n = n.replace("%" + d.name.toLowerCase() + "%", m));
            }),
              (n = n.replace(/\%\%/g, "%"));
            let f = i.special_values?.map((d, m) =>
                (0, e.jsx)(ee, { special: d }, m),
              ),
              w = i.name.replace("item_", ""),
              S = i.item_cost,
              P =
                i.item_neutral_tier >= 0 && i.item_neutral_tier < 5
                  ? i.item_neutral_tier + 1
                  : -1,
              ae = a()["Tier" + P],
              L = i.cooldowns.reduce((d, m) => d + m) > 0,
              O = i.mana_costs.reduce((d, m) => d + m) > 0,
              E =
                i.health_costs && i.health_costs.length > 0
                  ? i.health_costs.reduce((d, m) => d + m) > 0
                  : !1;
            return (0, e.jsxs)("div", {
              className: a().GameItemDetails,
              children: [
                (0, e.jsxs)("div", {
                  className: a().Header,
                  children: [
                    (0, e.jsx)("img", {
                      className: a().ItemImage,
                      src: `${c.r.IMG_URL}/items/${w}.png`,
                    }),
                    (0, e.jsxs)("div", {
                      className: a().HeaderText,
                      children: [
                        (0, e.jsx)("div", {
                          className: a().ItemName,
                          children: i.name_loc,
                        }),
                        S > 0 &&
                          (0, e.jsxs)("div", {
                            className: a().GoldPrice,
                            children: [
                              (0, e.jsx)("img", {
                                className: a().GoldIcon,
                                src: `${c.r.IMG_URL}/icons/gold.png`,
                              }),
                              S,
                            ],
                          }),
                        P > 0 &&
                          (0, e.jsx)("div", {
                            className: (0, h.A)(a().NeutralItemTier, ae),
                            children: (0, t.Wn)("#neutral_item_tier", P),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: a().Body,
                  children: [
                    (0, e.jsx)("div", { className: a().Stats, children: f }),
                    n &&
                      (0, e.jsxs)("div", {
                        className: a().DescriptionContainer,
                        children: [
                          (0, e.jsx)("div", {
                            className: a().Description,
                            dangerouslySetInnerHTML: { __html: n },
                          }),
                          (L || O || E) &&
                            (0, e.jsxs)("div", {
                              className: (0, h.A)(a().DescriptionHeader),
                              children: [
                                O &&
                                  (0, e.jsxs)("div", {
                                    className: a().ManaContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().ManaIcon,
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().ManaText,
                                        children: i.mana_costs.map(
                                          (d, m) =>
                                            (m > 0 ? " / " : "") + (0, x.F)(d),
                                        ),
                                      }),
                                    ],
                                  }),
                                E &&
                                  (0, e.jsxs)("div", {
                                    className: a().HealthContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().HealthIcon,
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().HealthText,
                                        children: i.health_costs.map(
                                          (d, m) =>
                                            (m > 0 ? " / " : "") + (0, x.F)(d),
                                        ),
                                      }),
                                    ],
                                  }),
                                L &&
                                  (0, e.jsxs)("div", {
                                    className: a().CooldownContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().CooldownIcon,
                                        style: {
                                          backgroundImage: `url( ${c.r.IMG_URL}icons/cooldown.png )`,
                                        },
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().CooldownText,
                                        children: i.cooldowns.map(
                                          (d, m) =>
                                            (m > 0 ? " / " : "") + (0, x.F)(d),
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
            });
          });
        let I = class extends u.Component {
          videoRef = u.createRef();
          NewMapVideoRef = u.createRef();
          NewMapVideoContainerRef = u.createRef();
          navbarRef = u.createRef();
          mapRef = u.createRef();
          majorGameplayRef = u.createRef();
          matchmakingRef = u.createRef();
          uiRef = u.createRef();
          gameplayRef = u.createRef();
          interactiveMapHighlightIndex;
          constructor(s) {
            super(s),
              (this.state = {
                bPlayingVideo: !1,
                bMapVideoSeeking: !1,
                nMapIconRevealPhase: 0,
                bMapVideoHasPlayed: !1,
              });
          }
          setPlayingVideo(s) {
            this.setState({ bPlayingVideo: s }),
              s ? this.videoRef.current.play() : this.videoRef.current.pause();
          }
          scrollToTarget(s) {
            s.current.scrollIntoView({ behavior: "smooth" });
          }
          handleScroll = (s) => {
            const r = this.mapRef.current.getBoundingClientRect().top;
            (this.navbarRef.current.style.opacity = `${this.clamp(this.remapValue(r, 0, -100, 0, 1), 0, 1)}`),
              r > 0
                ? (this.navbarRef.current.style.visibility = "hidden")
                : (this.navbarRef.current.style.visibility = "visible"),
              this.NewMapVideoContainerRef.current.getBoundingClientRect().top <
                400 &&
                !this.state.bMapVideoHasPlayed &&
                (this.NewMapVideoRef.current.play(),
                this.setState({ bMapVideoHasPlayed: !0 }),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 1 }),
                  1e3,
                ),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 2 }),
                  1300,
                ),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 3 }),
                  1600,
                ),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 4 }),
                  1900,
                ),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 5 }),
                  2200,
                ),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 6 }),
                  2500,
                ),
                setTimeout(
                  () => this.setState({ nMapIconRevealPhase: 7 }),
                  2800,
                )),
              H().refresh();
          };
          remapValue(s, r, _, i, n) {
            return i + ((n - i) * (s - r)) / (_ - r);
          }
          remapValueClamped(s, r, _, i, n) {
            return Math.max(i, Math.min(n, this.remapValue(s, r, _, i, n)));
          }
          clamp = (s, r, _) => Math.min(Math.max(s, r), _);
          componentDidMount() {
            window.addEventListener("scroll", this.handleScroll),
              this.handleScroll(void 0);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
          render() {
            const s = G.o.getPatchNotes("7.33", c.r.LANGUAGE);
            let r = [];
            for (let i in R) {
              let n = R[i];
              r.push(
                (0, e.jsxs)(
                  "div",
                  {
                    className: a().MapFeatureContainer,
                    children: [
                      (0, e.jsxs)("video", {
                        className: a().Video,
                        autoPlay: !0,
                        preload: "none",
                        muted: !0,
                        loop: !0,
                        playsInline: !1,
                        controls: !1,
                        poster: `${c.r.IMG_URL}new_frontiers/interactive-map/videos/${n.poster}`,
                        children: [
                          (0, e.jsx)("source", {
                            src: `${c.r.IMG_URL}new_frontiers/interactive-map/videos/${n.video}.webm`,
                            type: "video/webm",
                          }),
                          (0, e.jsx)("source", {
                            src: `${c.r.IMG_URL}new_frontiers/interactive-map/videos/${n.video}.mp4`,
                            type: "video/mp4",
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: a().Text,
                        children: [
                          (0, e.jsxs)("div", {
                            className: a().TitleContainer,
                            children: [
                              (0, e.jsx)("div", {
                                className: a().Icon,
                                children: (0, e.jsx)("img", {
                                  src: `${c.r.IMG_URL}new_frontiers/interactive-map/icons/${n.icon}`,
                                }),
                              }),
                              (0, e.jsx)("div", {
                                className: a().Title,
                                children: (0, t.Wn)(n.title),
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", { className: a().Dash }),
                          (0, e.jsx)("div", {
                            className: a().Description,
                            children: (0, t.Wn)(n.description),
                          }),
                        ],
                      }),
                    ],
                  },
                  i,
                ),
              );
            }
            let _ = (0, D.wwZ)((0, D.sfN)(c.r.LANGUAGE));
            return (
              _ === "zh-cn"
                ? (_ = "zh-Hans")
                : _ === "zh-tw" && (_ = "zh-Hant"),
              (0, e.jsxs)("div", {
                id: b,
                className: a().NewFrontiersPage,
                children: [
                  (0, e.jsx)(B.mg, {
                    children: (0, e.jsxs)("title", {
                      children: [
                        (0, t.Wn)("#new_frontiers_title"),
                        " - ",
                        (0, t.Wn)("#new_frontiers_gameplay_number"),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, h.A)(
                      a().TrailerContainer,
                      this.state.bPlayingVideo ? null : a().Hidden,
                    ),
                    children: [
                      (0, e.jsxs)("video", {
                        ref: this.videoRef,
                        className: (0, h.A)(a().TrailerVideo),
                        autoPlay: !1,
                        preload: "none",
                        muted: !1,
                        loop: !1,
                        playsInline: !1,
                        controls: !0,
                        poster: `${c.r.VIDEO_URL}new_frontiers/new_frontiers_trailer_poster.jpg`,
                        crossOrigin: "anonymous",
                        children: [
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${c.r.VIDEO_URL}new_frontiers/new_frontiers_trailer_${c.r.LANGUAGE}.webm`,
                          }),
                          (0, e.jsx)("source", {
                            type: "video/webm",
                            src: `${c.r.VIDEO_URL}new_frontiers/new_frontiers_trailer_english.webm`,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: a().CloseButton,
                        onClick: () => this.setPlayingVideo(!1),
                        children: (0, e.jsx)("img", {
                          className: a().CloseButtonImage,
                          src: `${c.r.IMG_URL}/close.png`,
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, h.A)(
                      a().PageContainer,
                      this.state.bPlayingVideo ? a().Hidden : null,
                    ),
                    children: [
                      (0, e.jsx)(k.A, { bOverlapping: !0 }),
                      (0, e.jsxs)("div", {
                        className: a().HeaderSection,
                        children: [
                          (0, e.jsxs)("div", {
                            className: a().TitleContainer,
                            children: [
                              (0, e.jsxs)("div", {
                                className: a().TheContainer,
                                children: [
                                  (0, e.jsx)("div", { className: a().Dash }),
                                  (0, e.jsx)("div", {
                                    className: a().The,
                                    children: (0, t.Wn)(
                                      "#new_frontiers_gameplay_number",
                                    ),
                                  }),
                                  (0, e.jsx)("div", { className: a().Dash }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                className: a().Title,
                                children: (0, t.Wn)(
                                  "#new_frontiers_title_short",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", { className: a().Dash }),
                          (0, e.jsx)("div", {
                            className: a().Subtitle,
                            children: (0, t.Wn)("#new_frontiers_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: a().ButtonsSection,
                            children: (0, e.jsxs)("div", {
                              className: a().StandardButton,
                              onClick: () => this.setPlayingVideo(!0),
                              children: [
                                (0, e.jsx)("div", {
                                  className: (0, h.A)(a().Icon, a().Play),
                                }),
                                (0, e.jsx)("div", {
                                  className: a().ButtonText,
                                  children: (0, t.Wn)(
                                    "#new_frontiers_play_trailer",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: a().SectionDivider }),
                      (0, e.jsx)("div", {
                        className: a().IntroductionSection,
                        children: (0, e.jsx)("p", {
                          className: a().Body,
                          children: (0, t.Wn)("#new_frontiers_dota_team_intro"),
                        }),
                      }),
                      (0, e.jsx)("div", { className: a().SectionDivider }),
                      (0, e.jsxs)("div", {
                        ref: this.navbarRef,
                        className: a().AnchorNavigation,
                        children: [
                          (0, e.jsx)("div", {
                            className: a().AnchorLink,
                            onClick: () => this.scrollToTarget(this.mapRef),
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_map",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().AnchorLink,
                            onClick: () =>
                              this.scrollToTarget(this.majorGameplayRef),
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_major_gameplay",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().AnchorLink,
                            onClick: () =>
                              this.scrollToTarget(this.matchmakingRef),
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_matchmaking",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().AnchorLink,
                            onClick: () => this.scrollToTarget(this.uiRef),
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_ui",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().AnchorLink,
                            onClick: () =>
                              this.scrollToTarget(this.gameplayRef),
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_gameplay_update",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        id: "Map",
                        ref: this.mapRef,
                        className: (0, h.A)(a().WebsiteSection, a().NewMap),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_map",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().Introduction,
                            children: (0, t.Wn)(
                              "#new_frontiers_map_introduction",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().InteractiveMap,
                            ref: this.NewMapVideoContainerRef,
                            children: (0, e.jsx)("div", {
                              className: a().MapStickyContainer,
                              children: (0, e.jsxs)("div", {
                                className: a().MapImageContainer,
                                children: [
                                  (0, e.jsx)("video", {
                                    ref: this.NewMapVideoRef,
                                    className: a().MapImage,
                                    autoPlay: !1,
                                    preload: "auto",
                                    muted: !0,
                                    loop: !1,
                                    playsInline: !0,
                                    poster: `${c.r.VIDEO_URL}/new_frontiers/map_update_2023_embiggening_poster.jpg`,
                                    children: (0, e.jsx)("source", {
                                      type: "video/webm",
                                      src: `${c.r.VIDEO_URL}/new_frontiers/map_update_2023_embiggening.webm`,
                                    }),
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().MapOverlay,
                                    children: [
                                      (0, e.jsx)(o, {
                                        feature_id: "roshan",
                                        image:
                                          "dashboard_map_room_roshan_icon.png",
                                        featureClass: a().RoshanNorthwest,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 1,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "roshan",
                                        image:
                                          "dashboard_map_room_roshan_icon.png",
                                        featureClass: a().RoshanSoutheast,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 1,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "lotus_pools",
                                        image:
                                          "dashboard_map_room_orchard_icon.png",
                                        featureClass: a().LotusPoolsNorthwest,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 2,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "lotus_pools",
                                        image:
                                          "dashboard_map_room_orchard_icon.png",
                                        featureClass: a().LotusPoolsSoutheast,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 2,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "tormentors",
                                        image:
                                          "dashboard_map_room_sentinel_icon.png",
                                        featureClass: a().TormentorsRadiant,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 3,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "tormentors",
                                        image:
                                          "dashboard_map_room_sentinel_icon.png",
                                        featureClass: a().TormentorsDire,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 3,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherRadiant1,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherRadiant2,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherRadiant3,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherRadiant4,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherDire1,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherDire2,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherDire3,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "watchers",
                                        image:
                                          "dashboard_map_room_watcher_icon.png",
                                        featureClass: a().WatcherDire4,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 4,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "wisdom_runes",
                                        image:
                                          "dashboard_map_room_rune_icon.png",
                                        featureClass: a().WisdomRuneRadiant,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 5,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "wisdom_runes",
                                        image:
                                          "dashboard_map_room_rune_icon.png",
                                        featureClass: a().WisdomRuneDire,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 5,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "shield_runes",
                                        image:
                                          "dashboard_map_room_shield_rune_icon.png",
                                        featureClass: a().ShieldRuneNorthWest,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 5,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "shield_runes",
                                        image:
                                          "dashboard_map_room_shield_rune_icon.png",
                                        featureClass: a().ShieldRuneSouthEast,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 5,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "twin_gates",
                                        image:
                                          "dashboard_map_room_portal_icon.png",
                                        featureClass: a().TwinGatesNorthwest,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 6,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "twin_gates",
                                        image:
                                          "dashboard_map_room_portal_icon.png",
                                        featureClass: a().TwinGatesSoutheast,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 6,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "barriers",
                                        image: "defenders_gates_radiant.png",
                                        featureClass: a().DefendersGatesRadiant,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 6,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "barriers",
                                        image: "defenders_gates_dire.png",
                                        featureClass: a().DefendersGatesDire,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 6,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "outpost",
                                        image:
                                          "dashboard_map_room_outpost_icon.png",
                                        featureClass: a().OutpostRadiant1,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 7,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "outpost",
                                        image:
                                          "dashboard_map_room_outpost_icon.png",
                                        featureClass: a().OutpostRadiant2,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 7,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "outpost",
                                        image:
                                          "dashboard_map_room_outpost_icon.png",
                                        featureClass: a().OutpostDire1,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 7,
                                      }),
                                      (0, e.jsx)(o, {
                                        feature_id: "outpost",
                                        image:
                                          "dashboard_map_room_outpost_icon.png",
                                        featureClass: a().OutpostDire2,
                                        revealed:
                                          this.state.nMapIconRevealPhase >= 7,
                                      }),
                                    ],
                                  }),
                                  (0, e.jsxs)("div", {
                                    className: a().TitleContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: a().Title,
                                        children: (0, t.Wn)(
                                          "#new_frontiers_map_subtitle",
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: a().Dash,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: a().MapFeatures,
                            children: r,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: a().SectionDivider }),
                      (0, e.jsxs)("div", {
                        id: "MajorGameplay",
                        ref: this.majorGameplayRef,
                        className: (0, h.A)(a().WebsiteSection, a().Main),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_major_gameplay",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().Introduction,
                            children: (0, t.Wn)(
                              "#new_frontiers_major_gameplay_features_desc",
                            ),
                          }),
                          (0, e.jsx)(N, {
                            title:
                              "#new_frontiers_major_gameplay_all_stat_heroes_title",
                            description:
                              "#new_frontiers_major_gameplay_all_stat_heroes_desc",
                            image: "new_frontiers/balance_heroes.png",
                          }),
                          (0, e.jsx)(N, {
                            title: "#new_frontiers_major_gameplay_bkb_title",
                            description:
                              "#new_frontiers_major_gameplay_bkb_desc",
                            image: "new_frontiers/bkb_changes.png",
                          }),
                          (0, e.jsx)(N, {
                            title:
                              "#new_frontiers_major_gameplay_neutral_item_token_title",
                            description:
                              "#new_frontiers_major_gameplay_neutral_item_token_desc",
                            image: "new_frontiers/neutral_item_tokens.png",
                          }),
                          (0, e.jsxs)("div", {
                            className: a().FeatureRow,
                            children: [
                              (0, e.jsx)(j, {
                                title:
                                  "#new_frontiers_major_gameplay_neutral_creep_scaling_title",
                                description:
                                  "#new_frontiers_major_gameplay_neutral_creep_scaling_desc",
                                image:
                                  "new_frontiers/neutral_creep_scaling.png",
                              }),
                              (0, e.jsx)(j, {
                                title:
                                  "#new_frontiers_major_gameplay_kill_formula_title",
                                description:
                                  "#new_frontiers_major_gameplay_kill_formula_desc",
                                image: "new_frontiers/kill_formula.png",
                              }),
                              (0, e.jsx)(j, {
                                title:
                                  "#new_frontiers_major_gameplay_unstunning_stuns_title",
                                description:
                                  "#new_frontiers_major_gameplay_unstunning_stuns_desc",
                                image: "new_frontiers/stun_reduction.png",
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSubSection,
                            children: [
                              (0, e.jsx)("h2", {
                                children: (0, t.Wn)(
                                  "#new_frontiers_major_gameplay_hero_reworks_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: a().Introduction,
                                children: (0, t.Wn)(
                                  "#new_frontiers_major_gameplay_hero_reworks_desc",
                                ),
                              }),
                              (0, e.jsxs)("div", {
                                className: a().HeroReworkContainer,
                                children: [
                                  (0, e.jsx)(g, {
                                    patchnotes: s?.heroes,
                                    heroname: "muerta",
                                  }),
                                  (0, e.jsx)(g, {
                                    patchnotes: s?.heroes,
                                    heroname: "clinkz",
                                  }),
                                  (0, e.jsx)(g, {
                                    patchnotes: s?.heroes,
                                    heroname: "arc_warden",
                                  }),
                                  (0, e.jsx)(g, {
                                    patchnotes: s?.heroes,
                                    heroname: "ogre_magi",
                                  }),
                                  (0, e.jsx)(g, {
                                    patchnotes: s?.heroes,
                                    heroname: "medusa",
                                  }),
                                  (0, e.jsx)(g, {
                                    patchnotes: s?.heroes,
                                    heroname: "alchemist",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSubSection,
                            children: [
                              (0, e.jsx)("h2", {
                                children: (0, t.Wn)(
                                  "#new_frontiers_major_gameplay_new_items_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: a().Introduction,
                                children: (0, t.Wn)(
                                  "#new_frontiers_major_gameplay_new_items_desc",
                                ),
                              }),
                              (0, e.jsxs)("div", {
                                className: a().ItemsContainer,
                                children: [
                                  (0, e.jsx)(p, { name: "item_blood_grenade" }),
                                  (0, e.jsx)(p, { name: "item_diadem" }),
                                  (0, e.jsx)(p, { name: "item_cornucopia" }),
                                  (0, e.jsx)(p, { name: "item_pavise" }),
                                  (0, e.jsx)(p, { name: "item_phylactery" }),
                                  (0, e.jsx)(p, { name: "item_harpoon" }),
                                  (0, e.jsx)(p, { name: "item_disperser" }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: a().WebsiteSubSection,
                            children: [
                              (0, e.jsx)("h2", {
                                children: (0, t.Wn)(
                                  "#new_frontiers_major_gameplay_new_neutral_items_title",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: a().Introduction,
                                children: (0, t.Wn)(
                                  "#new_frontiers_major_gameplay_new_neutral_items_desc",
                                ),
                              }),
                              (0, e.jsxs)("div", {
                                className: a().ItemsContainer,
                                children: [
                                  (0, e.jsx)(p, {
                                    name: "item_duelist_gloves",
                                  }),
                                  (0, e.jsx)(p, {
                                    name: "item_spark_of_courage",
                                  }),
                                  (0, e.jsx)(p, { name: "item_gossamer_cape" }),
                                  (0, e.jsx)(p, { name: "item_defiant_shell" }),
                                  (0, e.jsx)(p, {
                                    name: "item_vindicators_axe",
                                  }),
                                  (0, e.jsx)(p, {
                                    name: "item_dandelion_amulet",
                                  }),
                                  (0, e.jsx)(p, { name: "item_martyrs_plate" }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: a().WebsiteSubSection,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: a().SectionDivider }),
                      (0, e.jsxs)("div", {
                        id: "Matchmaking",
                        ref: this.matchmakingRef,
                        className: (0, h.A)(
                          a().WebsiteSection,
                          a().MatchMaking,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_matchmaking",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().Introduction,
                            children: (0, t.Wn)(
                              "#new_frontiers_matchmaking_desc",
                            ),
                          }),
                          (0, e.jsx)("img", {
                            className: (0, h.A)(
                              a().FeatureImage,
                              a().BottomBorder,
                            ),
                            src: `${c.r.IMG_URL}/new_frontiers/matchmaking.png`,
                          }),
                          (0, e.jsxs)("div", {
                            className: a().FeatureText,
                            children: [
                              (0, e.jsx)("h2", {
                                children: (0, t.Wn)(
                                  "#new_frontiers_matchmaking_intro_title",
                                ),
                              }),
                              (0, t.Wn)(
                                "#new_frontiers_matchmaking_intro_desc",
                              ),
                              (0, e.jsx)("h2", {
                                children: (0, t.Wn)(
                                  "#new_frontiers_matchmaking_details_old_title",
                                ),
                              }),
                              (0, t.Wn)(
                                "#new_frontiers_matchmaking_details_old_desc",
                              ),
                              (0, e.jsx)("h2", {
                                children: (0, t.Wn)(
                                  "#new_frontiers_matchmaking_details_new_title",
                                ),
                              }),
                              (0, t.Wn)(
                                "#new_frontiers_matchmaking_details_new_desc",
                              ),
                            ],
                          }),
                          (0, e.jsx)(N, {
                            title: "#new_frontiers_matchmaking_immortals_title",
                            description:
                              "#new_frontiers_matchmaking_immortals_desc",
                            image: "new_frontiers/immortal_matchmaking_ui.png",
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: a().SectionDivider }),
                      (0, e.jsxs)("div", {
                        id: "UserInterface",
                        ref: this.uiRef,
                        className: a().WebsiteSection,
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_ui",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().Introduction,
                            children: (0, t.Wn)("#new_frontiers_ui_desc"),
                          }),
                          (0, e.jsxs)("div", {
                            className: a().FeatureRow,
                            children: [
                              (0, e.jsx)(j, {
                                title: "#new_frontiers_ui_shields_title",
                                description: "#new_frontiers_ui_shields_desc",
                                image: "new_frontiers/health_bar_shields.png",
                              }),
                              (0, e.jsx)(j, {
                                title: "#new_frontiers_ui_health_pips_title",
                                description:
                                  "#new_frontiers_ui_health_pips_desc",
                                image: "new_frontiers/health_bar_pips.png",
                              }),
                              (0, e.jsx)(j, {
                                title: "#new_frontiers_ui_health_cost_title",
                                description:
                                  "#new_frontiers_ui_health_cost_desc",
                                image:
                                  "new_frontiers/health_cost_abilities.png",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", { className: a().SectionDivider }),
                      (0, e.jsxs)("div", {
                        id: "BalanceChanges",
                        ref: this.gameplayRef,
                        className: (0, h.A)(
                          a().WebsiteSection,
                          a().BalanceChanges,
                        ),
                        children: [
                          (0, e.jsx)("h1", {
                            children: (0, t.Wn)(
                              "#new_frontiers_section_title_gameplay_update",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: a().Introduction,
                            children: (0, t.Wn)(
                              "#new_frontiers_gameplay_update_desc",
                            ),
                          }),
                          (0, e.jsxs)("div", {
                            className: a().GameplayUpdate,
                            children: [
                              (0, e.jsx)(v.fs, {
                                patchnotes: s?.general_notes,
                                headerClassName: a().PatchNotesHeaderLabel,
                                notesListClassName: a().PatchNotesList,
                              }),
                              (0, e.jsx)(v.wL, {
                                patchnotes: s?.neutral_creeps,
                                headerClassName: a().PatchNotesHeaderLabel,
                                notesListClassName: a().PatchNotesList,
                              }),
                              (0, e.jsx)(v.ZV, {
                                patchnotes: s?.items,
                                headerClassName: a().PatchNotesHeaderLabel,
                                notesListClassName: a().PatchNotesList,
                              }),
                              (0, e.jsx)(v.ZV, {
                                patchnotes: s?.neutral_items,
                                is_neutrals: !0,
                                headerClassName: a().PatchNotesHeaderLabel,
                                notesListClassName: a().PatchNotesList,
                              }),
                              (0, e.jsx)(v.ob, {
                                patchnotes: s?.heroes,
                                headerClassName: a().PatchNotesHeaderLabel,
                                notesListClassName: a().PatchNotesList,
                              }),
                              (0, e.jsxs)("div", {
                                className: a().MiscSection,
                                children: [
                                  (0, e.jsx)("h1", {
                                    children: (0, t.Wn)(
                                      "#new_frontiers_misc_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("ul", {
                                    children: [
                                      (0, e.jsx)("li", {
                                        children: (0, t.Wn)(
                                          "#new_frontiers_misc_role_tokens",
                                        ),
                                      }),
                                      (0, e.jsx)("li", {
                                        children: (0, t.Wn)(
                                          "#new_frontiers_misc_removed_roles",
                                        ),
                                      }),
                                      (0, e.jsx)("li", {
                                        children: (0, t.Wn)(
                                          "#new_frontiers_misc_model_editor",
                                        ),
                                      }),
                                      (0, e.jsx)("li", {
                                        children: (0, t.Wn)(
                                          "#new_frontiers_misc_hold_animation",
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
                      (0, e.jsx)(Z, {}),
                      (0, e.jsx)(F.K, {}),
                    ],
                  }),
                ],
              })
            );
          }
        };
        I = J([C.PA], I);
      },
      89642: (W) => {
        W.exports = {
          Tooltip: "_2gy5MNnkE_WaaXBg8AwM5n",
          CarouselFade: "_3cu9aSnepOTk1ZabfWqlPM",
          StandardButton: "_13-RHy4B_P6SRH_xL3xoY5",
          ButtonText: "_1AJXE53-OxPJk3FyFYw8eS",
          Icon: "_19IqfXU-rh1SpHyDwZ0oe7",
          Play: "UBX1o-3aJKKdpH5xHHgP3",
          SteamLogo: "_1CR5p4iNYcewgJDjGisYTY",
          ToolTip: "_2eNHGoHjz08WxxAorM6HtW",
          PlayerReportTooltip: "_2MQPHGeW8pc7isRPZuyBOV",
          NewFrontiersPage: "_3zRrqIxxuGBOFO9HYTW8KN",
          PageContainer: "-ppoQRC7jD3OQhqXXj6sh",
          Hidden: "IlO9wvcPHs9eWl1Fqrc_E",
          SectionDivider: "_28Lu5k9MQ5eXx3CeAkSz7_",
          HeaderSection: "_2i8ciH5lW6X5YqCkc1hKI5",
          Dash: "_3rbCSWNPqdYGSCDT2w6DWh",
          GameplayNumber: "b8WncS3ekaaTDXe77bpaw",
          TitleContainer: "_1ib3ugjObN699NZkOicMB0",
          TheContainer: "_1VShUImG5mSdKIO6WxzLAx",
          The: "_1OuH34niVL6QvEG36srP8b",
          Title: "efAP2I43a6ByYgwCyUpri",
          Update: "_2z49GfbosaRGiIXYS06W0p",
          Subtitle: "Mb1X_7F1P-YenlbFW2uXi",
          ButtonsSection: "_1gTHT9zbkQTW2i1UztU9K6",
          AnchorNavigation: "_3bFf7pMhUlfpPp6SOjRlNw",
          AnchorLink: "_359v2jdmVpVLBYRB9cTOW",
          TrailerContainer: "_1QUVoAxX7q2sPY-7RQyamp",
          TrailerVideo: "_3q7s0K4ba1KMavYmGqYC_n",
          CloseButton: "_1XjFRsT38hQ5TVcRxW1k30",
          CloseButtonImage: "HflusBePYZnS3wkTZilyx",
          HeroReworkContainer: "_1wx4DhOeDiRerfDa_kIEC9",
          HeroRework: "_3GQWj6LK5X3bAF9FmEA0B-",
          HeroName: "_1U93FE0huRPIwB_LyQ_84x",
          ReworkDescription: "_3VS0JA9e1ar8laoKhUMEZk",
          HeroImageContainer: "_3if2pSliB4L1rqdvhYr-Yu",
          HeroShadow: "_2BFdcCeGPplehjXpMmCU1_",
          HeroReworkPortrait: "_2mfy8rnNo2kQaGvABzoDy5",
          HeroReworkPortraitVideo: "_3nAVfvjDgzWlZ-k00cuMQY",
          HeroReworkPatchNotes: "_1H5sTH4gE7tFgM3KeNR3jN",
          Muerta: "_3ZKGi2COQHKjCQMipZBqxJ",
          Clinkz: "_1ACxuF1kgvKZARznxWj28W",
          OgreMagi: "_3hj_QyA_rgLXTSjKSsWq1T",
          ArcWarden: "_3QeVO73OtCd6OLWoLRDT62",
          Medusa: "_2dy7pKy7MNaOdF3IRQ7neT",
          Alchemist: "_1GXeSxM7KfpP9f_1Km_PA3",
          WebsiteSubSection: "_2XWQ8Jz_4EkXrUghAI5kOw",
          IntroductionSection: "_1e-VSVfeSXZ-VQML-D0IU2",
          Body: "_31D4QH6Bv12En25ZcwMYes",
          Italic: "_2dHzK41wBuf0wmKmy-zmSX",
          WebsiteSection: "_3o_tRnrG4l-h6J15eLRr3M",
          Main: "_3wT0kkxecIYft2mtLQdrle",
          Introduction: "_2wDk9SJ7hs4tXzvtiJ-1Bv",
          FeatureCapsule: "_2-p0-bu__-K0ov8CCSYSw",
          Text: "mAKiujriNnvPdelRnz6Zq",
          Headline: "_1z-7kc2F-WUvpVdh5ENiRM",
          Description: "a6GNeCqreZ3-1G3UsDzF1",
          Image: "_1XlWcUms5YJLUnX5AAewM5",
          FeatureImage: "_2H5DThCuMfpqHCHIVKWix",
          BottomBorder: "_9UlLFdMWWanui9JILVHUL",
          FeatureText: "_1pb-yaCGGs5GjvNYMgi928",
          FeatureRow: "_18idE-2aJ7xXzgCF2CIjiB",
          HeaderContainer: "_1rokR18Uwh26lIQy7dqdST",
          SmallFeatureCapsule: "_38P9NuZmBUV_AO_ALD7WuX",
          InteractiveMap: "R7qAwBYyTun67LW0Fbpey",
          MapStickyContainer: "_2znvx8l48jkQZwOL8erXxw",
          MapImageContainer: "_12zj0MqrbuKAuMWeSqKAeu",
          MapImage: "_1uLNbrxWfb5OY7unz8bvdA",
          MapOverlay: "_3k4AxoiRajKXTnVxiX8iCp",
          MapFeature: "_1e6iJII7J44i6Y5khIpNRG",
          MapFeatureImage: "v8Tx7hTh45a4dbOJFeOP3",
          Revealed: "_2g5YpKMVGpup3ei_bJh_u5",
          RoshanNorthwest: "_2Z_3jFTlH8mX-wHpyl6asj",
          RoshanSoutheast: "PJ_YRuKhdQEvuDu3uTSq5",
          LotusPoolsNorthwest: "rLsFOc9LwWIS4pc4bd_nf",
          LotusPoolsSoutheast: "M5BOG0OBDrEC9Pgn3WrQy",
          TormentorsRadiant: "_1J1i1xVmqq24Yf9zkWM9k_",
          TormentorsDire: "gsudKkzGDIgdGjlXe3RaE",
          WatcherRadiant1: "A4wrzq4UppZ4iD_-Xtg5t",
          WatcherRadiant2: "_3z3gsc4L2m2_d02p5Ir68a",
          WatcherRadiant3: "_3hm5-CPfa_N6UccFaGmJPn",
          WatcherRadiant4: "gF2NHNM74Sj2xlLxDTJRg",
          WatcherDire1: "_2r4zFTddr8mlxKD8Cb0_I1",
          WatcherDire2: "_1sIFaPgMoxPpSfVZWQFeGk",
          WatcherDire3: "_2iKjsXOr2sa66FPKOEkspF",
          WatcherDire4: "_3a7QgTpEK17HUfjcoNZ2c5",
          WisdomRuneRadiant: "_1Hoj5tQZgAH0pUNn3s0Liv",
          WisdomRuneDire: "n0mz1lRvXBsQydO0deUWO",
          TwinGatesNorthwest: "_3j7d26QqozfPc2Cug0h8Yy",
          TwinGatesSoutheast: "_3wDSIW5dPNCSw3cbB8bIPU",
          OutpostRadiant1: "_3rNPO-gD0Yh6qzudxshnLU",
          OutpostRadiant2: "bt0N81wJYfKZMyW_6MNkW",
          OutpostDire1: "_3JSvNBJUgrF41RRTOtTnJi",
          OutpostDire2: "_2eJa6jC4kQ_grY0pyBMFGJ",
          ShieldRuneNorthWest: "evaLEULEOYfAwM-dx2rcJ",
          ShieldRuneSouthEast: "_3Imd1TRSFS-LBYHcMZqVio",
          DefendersGatesRadiant: "_3tT49exWD2vfp4y1xf0v0_",
          DefendersGatesDire: "_2GnScBeaVvavKIKHNNTraS",
          GameplayUpdate: "_3ilJR0DWGltjVslP_qnx_f",
          MiscSection: "_2TyOfUpG__FTG4NU0XFi9O",
          ItemsContainer: "_3QyvbKnKiBpJpy4U6jsYd1",
          MapFeatures: "_174Fx7KvTCeQjCPm3hrKCO",
          MapFeatureContainer: "_6MaqgoNVY0Q-fzCBbA2CW",
          Video: "_2A1iYl5CUwWkOTXTHQi6Dq",
          GameItemDetails: "_3NBnkxFWHRUUZ8c8mjz7uZ",
          Header: "_38P_PwNzIQJhPgfI-SYPqO",
          ItemImage: "_2QypGKQIXXr-qVjZfA7Wsa",
          HeaderText: "_48biGbyAGkG8pMUvwLRx2",
          ItemName: "_2P0WwjOzOfQeyFKO7fwRTe",
          GoldPrice: "_3UDnxNKVMDWwdu3Pkskp1d",
          GoldIcon: "PuhcKK9WCnjg-3lnKkEAP",
          NeutralItemTier: "bAJw_I8Q05-RfjM7MP9Y6",
          Tier1: "_3FiG7DqNIh-oxu25BXqsF5",
          Tier2: "_2ZD3T5R5gClQoibiIxhQgE",
          Tier3: "_14u-Bkst-h4QkkdwvbJqys",
          Tier4: "gYWeCGJ1Ro4ppmaPJ_eOK",
          Tier5: "_2156hX6a65kZ2QzxD7Bylr",
          Stats: "_2UQHpBTtbDKVf6dY_025jZ",
          Stat: "_1BaPsDVc5LrlH4D1etf24D",
          SingleValue: "_14Iw3EamD29Xjl5PnQv0ET",
          DescriptionContainer: "Qov_sCWgaJr6EigSmYigy",
          DescriptionHeader: "_3OcDBEjJD8GvVuFXbM2BNG",
          CooldownContainer: "_2eB31qHSKIAjyxhDlB8jT-",
          CooldownIcon: "_2fece_kMChwv3zDiJuNuly",
          CooldownText: "_1b-toHl2W53YMoKRZd8bKY",
          ManaContainer: "KlMDUTtQl0U8EVucrA4Bs",
          ManaIcon: "_3xk74GwNBwdpPzRCVLI1EM",
          ManaText: "_1OQen30eF_4CAmAztWMKi1",
          HealthContainer: "_1OSrPjyTBhxNmtjm9T7Gnv",
          HealthIcon: "_38w5eupr7O-eFgZzTSCHOv",
          HealthText: "_1HVL8wCVubDXGiqtxMNIdf",
          Lore: "_2CjeNi5DDi1sm9ba6FFSQy",
          NewMap: "_29qME094or216uqSYxa7cL",
          MatchMaking: "_3-E4Y_AU0RSrodhpy1UgJO",
          BalanceChanges: "_1Lw9DI2Qul5B6beiI_S-4",
          MapFeatureTooltipContainer: "_3_ynYikwOS2OqW0e4INdDm",
          MapFeatureTooltip: "_2N4jMn3-Q14nSdBOz-AEuI",
        };
      },
    },
  ]);
})();
